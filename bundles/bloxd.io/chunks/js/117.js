/*! For license information please see fqwnlq.117.ad643aff.chunk.js.LICENSE.txt */
export const id = 117;
export const ids = [117];
export const modules = {
  6397: function(SS, HS, gS) {
    var tS;
    ! function() {
      var bS, XS = 1e9,
        xS = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        NS = !0,
        qS = "[DecimalError] ",
        uS = qS + "Invalid argument: ",
        IS = qS + "Exponent out of range: ",
        fS = Math.floor,
        kS = Math.pow,
        aS = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        KS = 1e7,
        jS = 9007199254740991,
        GS = fS(1286742750677284.5),
        CS = {};

      function nS(SS, HS) {
        var gS, tS, bS, XS, xS, qS, uS, IS, fS = SS.constructor,
          kS = fS.precision;
        if (!SS.s || !HS.s) return HS.s || (HS = new fS(SS)), NS ? cS(HS, kS) : HS;
        if (uS = SS.d, IS = HS.d, xS = SS.e, bS = HS.e, uS = uS.slice(), XS = xS - bS) {
          for (XS < 0 ? (tS = uS, XS = -XS, qS = IS.length) : (tS = IS, bS = xS, qS = uS.length), XS > (qS = (xS = Math.ceil(kS / 7)) > qS ? xS + 1 : qS + 1) && (XS = qS, tS.length = 1), tS.reverse(); XS--;) tS.push(0);
          tS.reverse()
        }
        for ((qS = uS.length) - (XS = IS.length) < 0 && (XS = qS, tS = IS, IS = uS, uS = tS), gS = 0; XS;) gS = (uS[--XS] = uS[XS] + IS[XS] + gS) / KS | 0, uS[XS] %= KS;
        for (gS && (uS.unshift(gS), ++bS), qS = uS.length; 0 == uS[--qS];) uS.pop();
        return HS.d = uS, HS.e = bS, NS ? cS(HS, kS) : HS
      }

      function PS(SS, HS, gS) {
        if (SS !== ~~SS || SS < HS || SS > gS) throw Error(uS + SS)
      }

      function QS(SS) {
        var HS, gS, tS, bS = SS.length - 1,
          XS = "",
          xS = SS[0];
        if (bS > 0) {
          for (XS += xS, HS = 1; HS < bS; HS++)(gS = 7 - (tS = SS[HS] + "").length) && (XS += JS(gS)), XS += tS;
          (gS = 7 - (tS = (xS = SS[HS]) + "").length) && (XS += JS(gS))
        } else if (0 === xS) return "0";
        for (; xS % 10 === 0;) xS /= 10;
        return XS + xS
      }
      CS.absoluteValue = CS.abs = function() {
        var SS = new this.constructor(this);
        return SS.s && (SS.s = 1), SS
      }, CS.comparedTo = CS.cmp = function(SS) {
        var HS, gS, tS, bS, XS = this;
        if (SS = new XS.constructor(SS), XS.s !== SS.s) return XS.s || -SS.s;
        if (XS.e !== SS.e) return XS.e > SS.e ^ XS.s < 0 ? 1 : -1;
        for (HS = 0, gS = (tS = XS.d.length) < (bS = SS.d.length) ? tS : bS; HS < gS; ++HS)
          if (XS.d[HS] !== SS.d[HS]) return XS.d[HS] > SS.d[HS] ^ XS.s < 0 ? 1 : -1;
        return tS === bS ? 0 : tS > bS ^ XS.s < 0 ? 1 : -1
      }, CS.decimalPlaces = CS.dp = function() {
        var SS = this,
          HS = SS.d.length - 1,
          gS = 7 * (HS - SS.e);
        if (HS = SS.d[HS])
          for (; HS % 10 == 0; HS /= 10) gS--;
        return gS < 0 ? 0 : gS
      }, CS.dividedBy = CS.div = function(SS) {
        return DS(this, new this.constructor(SS))
      }, CS.dividedToIntegerBy = CS.idiv = function(SS) {
        var HS = this.constructor;
        return cS(DS(this, new HS(SS), 0, 1), HS.precision)
      }, CS.equals = CS.eq = function(SS) {
        return !this.cmp(SS)
      }, CS.exponent = function() {
        return hS(this)
      }, CS.greaterThan = CS.gt = function(SS) {
        return this.cmp(SS) > 0
      }, CS.greaterThanOrEqualTo = CS.gte = function(SS) {
        return this.cmp(SS) >= 0
      }, CS.isInteger = CS.isint = function() {
        return this.e > this.d.length - 2
      }, CS.isNegative = CS.isneg = function() {
        return this.s < 0
      }, CS.isPositive = CS.ispos = function() {
        return this.s > 0
      }, CS.isZero = function() {
        return 0 === this.s
      }, CS.lessThan = CS.lt = function(SS) {
        return this.cmp(SS) < 0
      }, CS.lessThanOrEqualTo = CS.lte = function(SS) {
        return this.cmp(SS) < 1
      }, CS.logarithm = CS.log = function(SS) {
        var HS, gS = this,
          tS = gS.constructor,
          XS = tS.precision,
          xS = XS + 5;
        if (void 0 === SS) SS = new tS(10);
        else if ((SS = new tS(SS)).s < 1 || SS.eq(bS)) throw Error(qS + "NaN");
        if (gS.s < 1) throw Error(qS + (gS.s ? "NaN" : "-Infinity"));
        return gS.eq(bS) ? new tS(0) : (NS = !1, HS = DS(OS(gS, xS), OS(SS, xS), xS), NS = !0, cS(HS, XS))
      }, CS.minus = CS.sub = function(SS) {
        var HS = this;
        return SS = new HS.constructor(SS), HS.s == SS.s ? vS(HS, SS) : nS(HS, (SS.s = -SS.s, SS))
      }, CS.modulo = CS.mod = function(SS) {
        var HS, gS = this,
          tS = gS.constructor,
          bS = tS.precision;
        if (!(SS = new tS(SS)).s) throw Error(qS + "NaN");
        return gS.s ? (NS = !1, HS = DS(gS, SS, 0, 1).times(SS), NS = !0, gS.minus(HS)) : cS(new tS(gS), bS)
      }, CS.naturalExponential = CS.exp = function() {
        return wS(this)
      }, CS.naturalLogarithm = CS.ln = function() {
        return OS(this)
      }, CS.negated = CS.neg = function() {
        var SS = new this.constructor(this);
        return SS.s = -SS.s || 0, SS
      }, CS.plus = CS.add = function(SS) {
        var HS = this;
        return SS = new HS.constructor(SS), HS.s == SS.s ? nS(HS, SS) : vS(HS, (SS.s = -SS.s, SS))
      }, CS.precision = CS.sd = function(SS) {
        var HS, gS, tS, bS = this;
        if (void 0 !== SS && SS !== !!SS && 1 !== SS && 0 !== SS) throw Error(uS + SS);
        if (HS = hS(bS) + 1, gS = 7 * (tS = bS.d.length - 1) + 1, tS = bS.d[tS]) {
          for (; tS % 10 == 0; tS /= 10) gS--;
          for (tS = bS.d[0]; tS >= 10; tS /= 10) gS++
        }
        return SS && HS > gS ? HS : gS
      }, CS.squareRoot = CS.sqrt = function() {
        var SS, HS, gS, tS, bS, XS, xS, uS = this,
          IS = uS.constructor;
        if (uS.s < 1) {
          if (!uS.s) return new IS(0);
          throw Error(qS + "NaN")
        }
        for (SS = hS(uS), NS = !1, 0 == (bS = Math.sqrt(+uS)) || bS == 1 / 0 ? (((HS = QS(uS.d)).length + SS) % 2 == 0 && (HS += "0"), bS = Math.sqrt(HS), SS = fS((SS + 1) / 2) - (SS < 0 || SS % 2), tS = new IS(HS = bS == 1 / 0 ? "1e" + SS : (HS = bS.toExponential()).slice(0, HS.indexOf("e") + 1) + SS)) : tS = new IS(bS.toString()), bS = xS = (gS = IS.precision) + 3;;)
          if (tS = (XS = tS).plus(DS(uS, XS, xS + 2)).times(.5), QS(XS.d).slice(0, xS) === (HS = QS(tS.d)).slice(0, xS)) {
            if (HS = HS.slice(xS - 3, xS + 1), bS == xS && "4999" == HS) {
              if (cS(XS, gS + 1, 0), XS.times(XS).eq(uS)) {
                tS = XS;
                break
              }
            } else if ("9999" != HS) break;
            xS += 4
          } return NS = !0, cS(tS, gS)
      }, CS.times = CS.mul = function(SS) {
        var HS, gS, tS, bS, XS, xS, qS, uS, IS, fS = this,
          kS = fS.constructor,
          aS = fS.d,
          jS = (SS = new kS(SS)).d;
        if (!fS.s || !SS.s) return new kS(0);
        for (SS.s *= fS.s, gS = fS.e + SS.e, (uS = aS.length) < (IS = jS.length) && (XS = aS, aS = jS, jS = XS, xS = uS, uS = IS, IS = xS), XS = [], tS = xS = uS + IS; tS--;) XS.push(0);
        for (tS = IS; --tS >= 0;) {
          for (HS = 0, bS = uS + tS; bS > tS;) qS = XS[bS] + jS[tS] * aS[bS - tS - 1] + HS, XS[bS--] = qS % KS | 0, HS = qS / KS | 0;
          XS[bS] = (XS[bS] + HS) % KS | 0
        }
        for (; !XS[--xS];) XS.pop();
        return HS ? ++gS : XS.shift(), SS.d = XS, SS.e = gS, NS ? cS(SS, kS.precision) : SS
      }, CS.toDecimalPlaces = CS.todp = function(SS, HS) {
        var gS = this,
          tS = gS.constructor;
        return gS = new tS(gS), void 0 === SS ? gS : (PS(SS, 0, XS), void 0 === HS ? HS = tS.rounding : PS(HS, 0, 8), cS(gS, SS + hS(gS) + 1, HS))
      }, CS.toExponential = function(SS, HS) {
        var gS, tS = this,
          bS = tS.constructor;
        return void 0 === SS ? gS = ES(tS, !0) : (PS(SS, 0, XS), void 0 === HS ? HS = bS.rounding : PS(HS, 0, 8), gS = ES(tS = cS(new bS(tS), SS + 1, HS), !0, SS + 1)), gS
      }, CS.toFixed = function(SS, HS) {
        var gS, tS, bS = this,
          xS = bS.constructor;
        return void 0 === SS ? ES(bS) : (PS(SS, 0, XS), void 0 === HS ? HS = xS.rounding : PS(HS, 0, 8), gS = ES((tS = cS(new xS(bS), SS + hS(bS) + 1, HS)).abs(), !1, SS + hS(tS) + 1), bS.isneg() && !bS.isZero() ? "-" + gS : gS)
      }, CS.toInteger = CS.toint = function() {
        var SS = this,
          HS = SS.constructor;
        return cS(new HS(SS), hS(SS) + 1, HS.rounding)
      }, CS.toNumber = function() {
        return +this
      }, CS.toPower = CS.pow = function(SS) {
        var HS, gS, tS, XS, xS, uS, IS = this,
          kS = IS.constructor,
          aS = +(SS = new kS(SS));
        if (!SS.s) return new kS(bS);
        if (!(IS = new kS(IS)).s) {
          if (SS.s < 1) throw Error(qS + "Infinity");
          return IS
        }
        if (IS.eq(bS)) return IS;
        if (tS = kS.precision, SS.eq(bS)) return cS(IS, tS);
        if (uS = (HS = SS.e) >= (gS = SS.d.length - 1), xS = IS.s, uS) {
          if ((gS = aS < 0 ? -aS : aS) <= jS) {
            for (XS = new kS(bS), HS = Math.ceil(tS / 7 + 4), NS = !1; gS % 2 && LS((XS = XS.times(IS)).d, HS), 0 !== (gS = fS(gS / 2));) LS((IS = IS.times(IS)).d, HS);
            return NS = !0, SS.s < 0 ? new kS(bS).div(XS) : cS(XS, tS)
          }
        } else if (xS < 0) throw Error(qS + "NaN");
        return xS = xS < 0 && 1 & SS.d[Math.max(HS, gS)] ? -1 : 1, IS.s = 1, NS = !1, XS = SS.times(OS(IS, tS + 12)), NS = !0, (XS = wS(XS)).s = xS, XS
      }, CS.toPrecision = function(SS, HS) {
        var gS, tS, bS = this,
          xS = bS.constructor;
        return void 0 === SS ? tS = ES(bS, (gS = hS(bS)) <= xS.toExpNeg || gS >= xS.toExpPos) : (PS(SS, 1, XS), void 0 === HS ? HS = xS.rounding : PS(HS, 0, 8), tS = ES(bS = cS(new xS(bS), SS, HS), SS <= (gS = hS(bS)) || gS <= xS.toExpNeg, SS)), tS
      }, CS.toSignificantDigits = CS.tosd = function(SS, HS) {
        var gS = this.constructor;
        return void 0 === SS ? (SS = gS.precision, HS = gS.rounding) : (PS(SS, 1, XS), void 0 === HS ? HS = gS.rounding : PS(HS, 0, 8)), cS(new gS(this), SS, HS)
      }, CS.toString = CS.valueOf = CS.val = CS.toJSON = function() {
        var SS = this,
          HS = hS(SS),
          gS = SS.constructor;
        return ES(SS, HS <= gS.toExpNeg || HS >= gS.toExpPos)
      };
      var DS = function() {
        function SS(SS, HS) {
          var gS, tS = 0,
            bS = SS.length;
          for (SS = SS.slice(); bS--;) gS = SS[bS] * HS + tS, SS[bS] = gS % KS | 0, tS = gS / KS | 0;
          return tS && SS.unshift(tS), SS
        }

        function HS(SS, HS, gS, tS) {
          var bS, XS;
          if (gS != tS) XS = gS > tS ? 1 : -1;
          else
            for (bS = XS = 0; bS < gS; bS++)
              if (SS[bS] != HS[bS]) {
                XS = SS[bS] > HS[bS] ? 1 : -1;
                break
              } return XS
        }

        function gS(SS, HS, gS) {
          for (var tS = 0; gS--;) SS[gS] -= tS, tS = SS[gS] < HS[gS] ? 1 : 0, SS[gS] = tS * KS + SS[gS] - HS[gS];
          for (; !SS[0] && SS.length > 1;) SS.shift()
        }
        return function(tS, bS, XS, xS) {
          var NS, uS, IS, fS, kS, aS, jS, GS, CS, nS, PS, QS, DS, wS, ZS, JS, OS, dS, vS = tS.constructor,
            ES = tS.s == bS.s ? 1 : -1,
            LS = tS.d,
            YS = bS.d;
          if (!tS.s) return new vS(tS);
          if (!bS.s) throw Error(qS + "Division by zero");
          for (uS = tS.e - bS.e, OS = YS.length, ZS = LS.length, GS = (jS = new vS(ES)).d = [], IS = 0; YS[IS] == (LS[IS] || 0);) ++IS;
          if (YS[IS] > (LS[IS] || 0) && --uS, (QS = null == XS ? XS = vS.precision : xS ? XS + (hS(tS) - hS(bS)) + 1 : XS) < 0) return new vS(0);
          if (QS = QS / 7 + 2 | 0, IS = 0, 1 == OS)
            for (fS = 0, YS = YS[0], QS++;
              (IS < ZS || fS) && QS--; IS++) DS = fS * KS + (LS[IS] || 0), GS[IS] = DS / YS | 0, fS = DS % YS | 0;
          else {
            for ((fS = KS / (YS[0] + 1) | 0) > 1 && (YS = SS(YS, fS), LS = SS(LS, fS), OS = YS.length, ZS = LS.length), wS = OS, nS = (CS = LS.slice(0, OS)).length; nS < OS;) CS[nS++] = 0;
            (dS = YS.slice()).unshift(0), JS = YS[0], YS[1] >= KS / 2 && ++JS;
            do {
              fS = 0, (NS = HS(YS, CS, OS, nS)) < 0 ? (PS = CS[0], OS != nS && (PS = PS * KS + (CS[1] || 0)), (fS = PS / JS | 0) > 1 ? (fS >= KS && (fS = KS - 1), 1 == (NS = HS(kS = SS(YS, fS), CS, aS = kS.length, nS = CS.length)) && (fS--, gS(kS, OS < aS ? dS : YS, aS))) : (0 == fS && (NS = fS = 1), kS = YS.slice()), (aS = kS.length) < nS && kS.unshift(0), gS(CS, kS, nS), -1 == NS && (NS = HS(YS, CS, OS, nS = CS.length)) < 1 && (fS++, gS(CS, OS < nS ? dS : YS, nS)), nS = CS.length) : 0 === NS && (fS++, CS = [0]), GS[IS++] = fS, NS && CS[0] ? CS[nS++] = LS[wS] || 0 : (CS = [LS[wS]], nS = 1)
            } while ((wS++ < ZS || void 0 !== CS[0]) && QS--)
          }
          return GS[0] || GS.shift(), jS.e = uS, cS(jS, xS ? XS + hS(jS) + 1 : XS)
        }
      }();

      function wS(SS, HS) {
        var gS, tS, XS, xS, qS, uS = 0,
          fS = 0,
          aS = SS.constructor,
          KS = aS.precision;
        if (hS(SS) > 16) throw Error(IS + hS(SS));
        if (!SS.s) return new aS(bS);
        for (null == HS ? (NS = !1, qS = KS) : qS = HS, xS = new aS(.03125); SS.abs().gte(.1);) SS = SS.times(xS), fS += 5;
        for (qS += Math.log(kS(2, fS)) / Math.LN10 * 2 + 5 | 0, gS = tS = XS = new aS(bS), aS.precision = qS;;) {
          if (tS = cS(tS.times(SS), qS), gS = gS.times(++uS), QS((xS = XS.plus(DS(tS, gS, qS))).d).slice(0, qS) === QS(XS.d).slice(0, qS)) {
            for (; fS--;) XS = cS(XS.times(XS), qS);
            return aS.precision = KS, null == HS ? (NS = !0, cS(XS, KS)) : XS
          }
          XS = xS
        }
      }

      function hS(SS) {
        for (var HS = 7 * SS.e, gS = SS.d[0]; gS >= 10; gS /= 10) HS++;
        return HS
      }

      function ZS(SS, HS, gS) {
        if (HS > SS.LN10.sd()) throw NS = !0, gS && (SS.precision = gS), Error(qS + "LN10 precision limit exceeded");
        return cS(new SS(SS.LN10), HS)
      }

      function JS(SS) {
        for (var HS = ""; SS--;) HS += "0";
        return HS
      }

      function OS(SS, HS) {
        var gS, tS, XS, xS, uS, IS, fS, kS, aS, KS = 1,
          jS = SS,
          GS = jS.d,
          CS = jS.constructor,
          nS = CS.precision;
        if (jS.s < 1) throw Error(qS + (jS.s ? "NaN" : "-Infinity"));
        if (jS.eq(bS)) return new CS(0);
        if (null == HS ? (NS = !1, kS = nS) : kS = HS, jS.eq(10)) return null == HS && (NS = !0), ZS(CS, kS);
        if (kS += 10, CS.precision = kS, tS = (gS = QS(GS)).charAt(0), xS = hS(jS), !(Math.abs(xS) < 15e14)) return fS = ZS(CS, kS + 2, nS).times(xS + ""), jS = OS(new CS(tS + "." + gS.slice(1)), kS - 10).plus(fS), CS.precision = nS, null == HS ? (NS = !0, cS(jS, nS)) : jS;
        for (; tS < 7 && 1 != tS || 1 == tS && gS.charAt(1) > 3;) tS = (gS = QS((jS = jS.times(SS)).d)).charAt(0), KS++;
        for (xS = hS(jS), tS > 1 ? (jS = new CS("0." + gS), xS++) : jS = new CS(tS + "." + gS.slice(1)), IS = uS = jS = DS(jS.minus(bS), jS.plus(bS), kS), aS = cS(jS.times(jS), kS), XS = 3;;) {
          if (uS = cS(uS.times(aS), kS), QS((fS = IS.plus(DS(uS, new CS(XS), kS))).d).slice(0, kS) === QS(IS.d).slice(0, kS)) return IS = IS.times(2), 0 !== xS && (IS = IS.plus(ZS(CS, kS + 2, nS).times(xS + ""))), IS = DS(IS, new CS(KS), kS), CS.precision = nS, null == HS ? (NS = !0, cS(IS, nS)) : IS;
          IS = fS, XS += 2
        }
      }

      function dS(SS, HS) {
        var gS, tS, bS;
        for ((gS = HS.indexOf(".")) > -1 && (HS = HS.replace(".", "")), (tS = HS.search(/e/i)) > 0 ? (gS < 0 && (gS = tS), gS += +HS.slice(tS + 1), HS = HS.substring(0, tS)) : gS < 0 && (gS = HS.length), tS = 0; 48 === HS.charCodeAt(tS);) ++tS;
        for (bS = HS.length; 48 === HS.charCodeAt(bS - 1);) --bS;
        if (HS = HS.slice(tS, bS)) {
          if (bS -= tS, gS = gS - tS - 1, SS.e = fS(gS / 7), SS.d = [], tS = (gS + 1) % 7, gS < 0 && (tS += 7), tS < bS) {
            for (tS && SS.d.push(+HS.slice(0, tS)), bS -= 7; tS < bS;) SS.d.push(+HS.slice(tS, tS += 7));
            tS = 7 - (HS = HS.slice(tS)).length
          } else tS -= bS;
          for (; tS--;) HS += "0";
          if (SS.d.push(+HS), NS && (SS.e > GS || SS.e < -GS)) throw Error(IS + gS)
        } else SS.s = 0, SS.e = 0, SS.d = [0];
        return SS
      }

      function cS(SS, HS, gS) {
        var tS, bS, XS, xS, qS, uS, aS, jS, CS = SS.d;
        for (xS = 1, XS = CS[0]; XS >= 10; XS /= 10) xS++;
        if ((tS = HS - xS) < 0) tS += 7, bS = HS, aS = CS[jS = 0];
        else {
          if ((jS = Math.ceil((tS + 1) / 7)) >= (XS = CS.length)) return SS;
          for (aS = XS = CS[jS], xS = 1; XS >= 10; XS /= 10) xS++;
          bS = (tS %= 7) - 7 + xS
        }
        if (void 0 !== gS && (qS = aS / (XS = kS(10, xS - bS - 1)) % 10 | 0, uS = HS < 0 || void 0 !== CS[jS + 1] || aS % XS, uS = gS < 4 ? (qS || uS) && (0 == gS || gS == (SS.s < 0 ? 3 : 2)) : qS > 5 || 5 == qS && (4 == gS || uS || 6 == gS && (tS > 0 ? bS > 0 ? aS / kS(10, xS - bS) : 0 : CS[jS - 1]) % 10 & 1 || gS == (SS.s < 0 ? 8 : 7))), HS < 1 || !CS[0]) return uS ? (XS = hS(SS), CS.length = 1, HS = HS - XS - 1, CS[0] = kS(10, (7 - HS % 7) % 7), SS.e = fS(-HS / 7) || 0) : (CS.length = 1, CS[0] = SS.e = SS.s = 0), SS;
        if (0 == tS ? (CS.length = jS, XS = 1, jS--) : (CS.length = jS + 1, XS = kS(10, 7 - tS), CS[jS] = bS > 0 ? (aS / kS(10, xS - bS) % kS(10, bS) | 0) * XS : 0), uS)
          for (;;) {
            if (0 == jS) {
              (CS[0] += XS) == KS && (CS[0] = 1, ++SS.e);
              break
            }
            if (CS[jS] += XS, CS[jS] != KS) break;
            CS[jS--] = 0, XS = 1
          }
        for (tS = CS.length; 0 === CS[--tS];) CS.pop();
        if (NS && (SS.e > GS || SS.e < -GS)) throw Error(IS + hS(SS));
        return SS
      }

      function vS(SS, HS) {
        var gS, tS, bS, XS, xS, qS, uS, IS, fS, kS, aS = SS.constructor,
          jS = aS.precision;
        if (!SS.s || !HS.s) return HS.s ? HS.s = -HS.s : HS = new aS(SS), NS ? cS(HS, jS) : HS;
        if (uS = SS.d, kS = HS.d, tS = HS.e, IS = SS.e, uS = uS.slice(), xS = IS - tS) {
          for ((fS = xS < 0) ? (gS = uS, xS = -xS, qS = kS.length) : (gS = kS, tS = IS, qS = uS.length), xS > (bS = Math.max(Math.ceil(jS / 7), qS) + 2) && (xS = bS, gS.length = 1), gS.reverse(), bS = xS; bS--;) gS.push(0);
          gS.reverse()
        } else {
          for ((fS = (bS = uS.length) < (qS = kS.length)) && (qS = bS), bS = 0; bS < qS; bS++)
            if (uS[bS] != kS[bS]) {
              fS = uS[bS] < kS[bS];
              break
            } xS = 0
        }
        for (fS && (gS = uS, uS = kS, kS = gS, HS.s = -HS.s), qS = uS.length, bS = kS.length - qS; bS > 0; --bS) uS[qS++] = 0;
        for (bS = kS.length; bS > xS;) {
          if (uS[--bS] < kS[bS]) {
            for (XS = bS; XS && 0 === uS[--XS];) uS[XS] = KS - 1;
            --uS[XS], uS[bS] += KS
          }
          uS[bS] -= kS[bS]
        }
        for (; 0 === uS[--qS];) uS.pop();
        for (; 0 === uS[0]; uS.shift()) --tS;
        return uS[0] ? (HS.d = uS, HS.e = tS, NS ? cS(HS, jS) : HS) : new aS(0)
      }

      function ES(SS, HS, gS) {
        var tS, bS = hS(SS),
          XS = QS(SS.d),
          xS = XS.length;
        return HS ? (gS && (tS = gS - xS) > 0 ? XS = XS.charAt(0) + "." + XS.slice(1) + JS(tS) : xS > 1 && (XS = XS.charAt(0) + "." + XS.slice(1)), XS = XS + (bS < 0 ? "e" : "e+") + bS) : bS < 0 ? (XS = "0." + JS(-bS - 1) + XS, gS && (tS = gS - xS) > 0 && (XS += JS(tS))) : bS >= xS ? (XS += JS(bS + 1 - xS), gS && (tS = gS - bS - 1) > 0 && (XS = XS + "." + JS(tS))) : ((tS = bS + 1) < xS && (XS = XS.slice(0, tS) + "." + XS.slice(tS)), gS && (tS = gS - xS) > 0 && (bS + 1 === xS && (XS += "."), XS += JS(tS))), SS.s < 0 ? "-" + XS : XS
      }

      function LS(SS, HS) {
        if (SS.length > HS) return SS.length = HS, !0
      }

      function YS(SS) {
        if (!SS || "object" !== typeof SS) throw Error(qS + "Object expected");
        var HS, gS, tS, bS = ["precision", 1, XS, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (HS = 0; HS < bS.length; HS += 3)
          if (void 0 !== (tS = SS[gS = bS[HS]])) {
            if (!(fS(tS) === tS && tS >= bS[HS + 1] && tS <= bS[HS + 2])) throw Error(uS + gS + ": " + tS);
            this[gS] = tS
          } if (void 0 !== (tS = SS[gS = "LN10"])) {
          if (tS != Math.LN10) throw Error(uS + gS + ": " + tS);
          this[gS] = new this(tS)
        }
        return this
      }
      xS = function SS(HS) {
        var gS, tS, bS;

        function XS(SS) {
          var HS = this;
          if (!(HS instanceof XS)) return new XS(SS);
          if (HS.constructor = XS, SS instanceof XS) return HS.s = SS.s, HS.e = SS.e, void(HS.d = (SS = SS.d) ? SS.slice() : SS);
          if ("number" === typeof SS) {
            if (0 * SS !== 0) throw Error(uS + SS);
            if (SS > 0) HS.s = 1;
            else {
              if (!(SS < 0)) return HS.s = 0, HS.e = 0, void(HS.d = [0]);
              SS = -SS, HS.s = -1
            }
            return SS === ~~SS && SS < 1e7 ? (HS.e = 0, void(HS.d = [SS])) : dS(HS, SS.toString())
          }
          if ("string" !== typeof SS) throw Error(uS + SS);
          if (45 === SS.charCodeAt(0) ? (SS = SS.slice(1), HS.s = -1) : HS.s = 1, !aS.test(SS)) throw Error(uS + SS);
          dS(HS, SS)
        }
        if (XS.prototype = CS, XS.ROUND_UP = 0, XS.ROUND_DOWN = 1, XS.ROUND_CEIL = 2, XS.ROUND_FLOOR = 3, XS.ROUND_HALF_UP = 4, XS.ROUND_HALF_DOWN = 5, XS.ROUND_HALF_EVEN = 6, XS.ROUND_HALF_CEIL = 7, XS.ROUND_HALF_FLOOR = 8, XS.clone = SS, XS.config = XS.set = YS, void 0 === HS && (HS = {}), HS)
          for (bS = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], gS = 0; gS < bS.length;) HS.hasOwnProperty(tS = bS[gS++]) || (HS[tS] = this[tS]);
        return XS.config(HS), XS
      }(xS), xS.default = xS.Decimal = xS, bS = new xS(1), void 0 === (tS = function() {
        return xS
      }.call(HS, gS, HS, SS)) || (SS.exports = tS)
    }()
  },
  5986: (SS, HS, gS) => {
    var tS = gS(5442)(gS(5300), "DataView");
    SS.exports = tS
  },
  5424: (SS, HS, gS) => {
    var tS = gS(5432),
      bS = gS(5491),
      XS = gS(5499),
      xS = gS(5505),
      NS = gS(5514);

    function qS(SS) {
      var HS = -1,
        gS = null == SS ? 0 : SS.length;
      for (this.clear(); ++HS < gS;) {
        var tS = SS[HS];
        this.set(tS[0], tS[1])
      }
    }
    qS.prototype.clear = tS, qS.prototype.delete = bS, qS.prototype.get = XS, qS.prototype.has = xS, qS.prototype.set = NS, SS.exports = qS
  },
  5523: (SS, HS, gS) => {
    var tS = gS(5529),
      bS = gS(5538),
      XS = gS(5555),
      xS = gS(5564),
      NS = gS(5567);

    function qS(SS) {
      var HS = -1,
        gS = null == SS ? 0 : SS.length;
      for (this.clear(); ++HS < gS;) {
        var tS = SS[HS];
        this.set(tS[0], tS[1])
      }
    }
    qS.prototype.clear = tS, qS.prototype.delete = bS, qS.prototype.get = XS, qS.prototype.has = xS, qS.prototype.set = NS, SS.exports = qS
  },
  5575: (SS, HS, gS) => {
    var tS = gS(5442)(gS(5300), "Map");
    SS.exports = tS
  },
  5415: (SS, HS, gS) => {
    var tS = gS(5421),
      bS = gS(5579),
      XS = gS(5600),
      xS = gS(5604),
      NS = gS(5610);

    function qS(SS) {
      var HS = -1,
        gS = null == SS ? 0 : SS.length;
      for (this.clear(); ++HS < gS;) {
        var tS = SS[HS];
        this.set(tS[0], tS[1])
      }
    }
    qS.prototype.clear = tS, qS.prototype.delete = bS, qS.prototype.get = XS, qS.prototype.has = xS, qS.prototype.set = NS, SS.exports = qS
  },
  5991: (SS, HS, gS) => {
    var tS = gS(5442)(gS(5300), "Promise");
    SS.exports = tS
  },
  5999: (SS, HS, gS) => {
    var tS = gS(5442)(gS(5300), "Set");
    SS.exports = tS
  },
  5814: (SS, HS, gS) => {
    var tS = gS(5415),
      bS = gS(5821),
      XS = gS(5829);

    function xS(SS) {
      var HS = -1,
        gS = null == SS ? 0 : SS.length;
      for (this.__data__ = new tS; ++HS < gS;) this.add(SS[HS])
    }
    xS.prototype.add = xS.prototype.push = bS, xS.prototype.has = XS, SS.exports = xS
  },
  5765: (SS, HS, gS) => {
    var tS = gS(5523),
      bS = gS(5770),
      XS = gS(5779),
      xS = gS(5781),
      NS = gS(5785),
      qS = gS(5787);

    function uS(SS) {
      var HS = this.__data__ = new tS(SS);
      this.size = HS.size
    }
    uS.prototype.clear = bS, uS.prototype.delete = XS, uS.prototype.get = xS, uS.prototype.has = NS, uS.prototype.set = qS, SS.exports = uS
  },
  5326: (SS, HS, gS) => {
    var tS = gS(5300).Symbol;
    SS.exports = tS
  },
  5853: (SS, HS, gS) => {
    var tS = gS(5300).Uint8Array;
    SS.exports = tS
  },
  6007: (SS, HS, gS) => {
    var tS = gS(5442)(gS(5300), "WeakMap");
    SS.exports = tS
  },
  6116: SS => {
    SS.exports = function(SS, HS, gS) {
      switch (gS.length) {
        case 0:
          return SS.call(HS);
        case 1:
          return SS.call(HS, gS[0]);
        case 2:
          return SS.call(HS, gS[0], gS[1]);
        case 3:
          return SS.call(HS, gS[0], gS[1], gS[2])
      }
      return SS.apply(HS, gS)
    }
  },
  6459: SS => {
    SS.exports = function(SS, HS) {
      for (var gS = -1, tS = null == SS ? 0 : SS.length; ++gS < tS;)
        if (!HS(SS[gS], gS, SS)) return !1;
      return !0
    }
  },
  5893: SS => {
    SS.exports = function(SS, HS) {
      for (var gS = -1, tS = null == SS ? 0 : SS.length, bS = 0, XS = []; ++gS < tS;) {
        var xS = SS[gS];
        HS(xS, gS, SS) && (XS[bS++] = xS)
      }
      return XS
    }
  },
  6193: (SS, HS, gS) => {
    var tS = gS(6198);
    SS.exports = function(SS, HS) {
      return !!(null == SS ? 0 : SS.length) && tS(SS, HS, 0) > -1
    }
  },
  6219: SS => {
    SS.exports = function(SS, HS, gS) {
      for (var tS = -1, bS = null == SS ? 0 : SS.length; ++tS < bS;)
        if (gS(HS, SS[tS])) return !0;
      return !1
    }
  },
  5910: (SS, HS, gS) => {
    var tS = gS(5916),
      bS = gS(5740),
      XS = gS(5351),
      xS = gS(5919),
      NS = gS(5711),
      qS = gS(5934),
      uS = Object.prototype.hasOwnProperty;
    SS.exports = function(SS, HS) {
      var gS = XS(SS),
        IS = !gS && bS(SS),
        fS = !gS && !IS && xS(SS),
        kS = !gS && !IS && !fS && qS(SS),
        aS = gS || IS || fS || kS,
        KS = aS ? tS(SS.length, String) : [],
        jS = KS.length;
      for (var GS in SS) !HS && !uS.call(SS, GS) || aS && ("length" == GS || fS && ("offset" == GS || "parent" == GS) || kS && ("buffer" == GS || "byteLength" == GS || "byteOffset" == GS) || NS(GS, jS)) || KS.push(GS);
      return KS
    }
  },
  5627: SS => {
    SS.exports = function(SS, HS) {
      for (var gS = -1, tS = null == SS ? 0 : SS.length, bS = Array(tS); ++gS < tS;) bS[gS] = HS(SS[gS], gS, SS);
      return bS
    }
  },
  5729: SS => {
    SS.exports = function(SS, HS) {
      for (var gS = -1, tS = HS.length, bS = SS.length; ++gS < tS;) SS[bS + gS] = HS[gS];
      return SS
    }
  },
  5837: SS => {
    SS.exports = function(SS, HS) {
      for (var gS = -1, tS = null == SS ? 0 : SS.length; ++gS < tS;)
        if (HS(SS[gS], gS, SS)) return !0;
      return !1
    }
  },
  6272: SS => {
    SS.exports = function(SS) {
      return SS.split("")
    }
  },
  5545: (SS, HS, gS) => {
    var tS = gS(5552);
    SS.exports = function(SS, HS) {
      for (var gS = SS.length; gS--;)
        if (tS(SS[gS][0], HS)) return gS;
      return -1
    }
  },
  6447: (SS, HS, gS) => {
    var tS = gS(6136);
    SS.exports = function(SS, HS, gS) {
      "__proto__" == HS && tS ? tS(SS, HS, {
        configurable: !0,
        enumerable: !0,
        value: gS,
        writable: !0
      }) : SS[HS] = gS
    }
  },
  6069: (SS, HS, gS) => {
    var tS = gS(6071),
      bS = gS(6088)(tS);
    SS.exports = bS
  },
  6463: (SS, HS, gS) => {
    var tS = gS(6069);
    SS.exports = function(SS, HS) {
      var gS = !0;
      return tS(SS, (function(SS, tS, bS) {
        return gS = !!HS(SS, tS, bS)
      })), gS
    }
  },
  6353: (SS, HS, gS) => {
    var tS = gS(5319);
    SS.exports = function(SS, HS, gS) {
      for (var bS = -1, XS = SS.length; ++bS < XS;) {
        var xS = SS[bS],
          NS = HS(xS);
        if (null != NS && (void 0 === qS ? NS === NS && !tS(NS) : gS(NS, qS))) var qS = NS,
          uS = xS
      }
      return uS
    }
  },
  6200: SS => {
    SS.exports = function(SS, HS, gS, tS) {
      for (var bS = SS.length, XS = gS + (tS ? 1 : -1); tS ? XS-- : ++XS < bS;)
        if (HS(SS[XS], XS, SS)) return XS;
      return -1
    }
  },
  5725: (SS, HS, gS) => {
    var tS = gS(5729),
      bS = gS(5738);
    SS.exports = function SS(HS, gS, XS, xS, NS) {
      var qS = -1,
        uS = HS.length;
      for (XS || (XS = bS), NS || (NS = []); ++qS < uS;) {
        var IS = HS[qS];
        gS > 0 && XS(IS) ? gS > 1 ? SS(IS, gS - 1, XS, xS, NS) : tS(NS, IS) : xS || (NS[NS.length] = IS)
      }
      return NS
    }
  },
  6073: (SS, HS, gS) => {
    var tS = gS(6080)();
    SS.exports = tS
  },
  6071: (SS, HS, gS) => {
    var tS = gS(6073),
      bS = gS(5906);
    SS.exports = function(SS, HS) {
      return SS && tS(SS, HS, bS)
    }
  },
  5382: (SS, HS, gS) => {
    var tS = gS(5385),
      bS = gS(5634);
    SS.exports = function(SS, HS) {
      for (var gS = 0, XS = (HS = tS(HS, SS)).length; null != SS && gS < XS;) SS = SS[bS(HS[gS++])];
      return gS && gS == XS ? SS : void 0
    }
  },
  5877: (SS, HS, gS) => {
    var tS = gS(5729),
      bS = gS(5351);
    SS.exports = function(SS, HS, gS) {
      var XS = HS(SS);
      return bS(SS) ? XS : tS(XS, gS(SS))
    }
  },
  5324: (SS, HS, gS) => {
    var tS = gS(5326),
      bS = gS(5329),
      XS = gS(5333),
      xS = tS ? tS.toStringTag : void 0;
    SS.exports = function(SS) {
      return null == SS ? void 0 === SS ? "[object Undefined]" : "[object Null]" : xS && xS in Object(SS) ? bS(SS) : XS(SS)
    }
  },
  6362: SS => {
    SS.exports = function(SS, HS) {
      return SS > HS
    }
  },
  6033: SS => {
    SS.exports = function(SS, HS) {
      return null != SS && HS in Object(SS)
    }
  },
  6198: (SS, HS, gS) => {
    var tS = gS(6200),
      bS = gS(6208),
      XS = gS(6212);
    SS.exports = function(SS, HS, gS) {
      return HS === HS ? XS(SS, HS, gS) : tS(SS, bS, gS)
    }
  },
  5743: (SS, HS, gS) => {
    var tS = gS(5324),
      bS = gS(5336);
    SS.exports = function(SS) {
      return bS(SS) && "[object Arguments]" == tS(SS)
    }
  },
  5790: (SS, HS, gS) => {
    var tS = gS(5798),
      bS = gS(5336);
    SS.exports = function SS(HS, gS, XS, xS, NS) {
      return HS === gS || (null == HS || null == gS || !bS(HS) && !bS(gS) ? HS !== HS && gS !== gS : tS(HS, gS, XS, xS, SS, NS))
    }
  },
  5798: (SS, HS, gS) => {
    var tS = gS(5765),
      bS = gS(5805),
      XS = gS(5846),
      xS = gS(5869),
      NS = gS(5979),
      qS = gS(5351),
      uS = gS(5919),
      IS = gS(5934),
      fS = "[object Arguments]",
      kS = "[object Array]",
      aS = "[object Object]",
      KS = Object.prototype.hasOwnProperty;
    SS.exports = function(SS, HS, gS, jS, GS, CS) {
      var nS = qS(SS),
        PS = qS(HS),
        QS = nS ? kS : NS(SS),
        DS = PS ? kS : NS(HS),
        wS = (QS = QS == fS ? aS : QS) == aS,
        hS = (DS = DS == fS ? aS : DS) == aS,
        ZS = QS == DS;
      if (ZS && uS(SS)) {
        if (!uS(HS)) return !1;
        nS = !0, wS = !1
      }
      if (ZS && !wS) return CS || (CS = new tS), nS || IS(SS) ? bS(SS, HS, gS, jS, GS, CS) : XS(SS, HS, QS, gS, jS, GS, CS);
      if (!(1 & gS)) {
        var JS = wS && KS.call(SS, "__wrapped__"),
          OS = hS && KS.call(HS, "__wrapped__");
        if (JS || OS) {
          var dS = JS ? SS.value() : SS,
            cS = OS ? HS.value() : HS;
          return CS || (CS = new tS), GS(dS, cS, gS, jS, CS)
        }
      }
      return !!ZS && (CS || (CS = new tS), xS(SS, HS, gS, jS, GS, CS))
    }
  },
  5763: (SS, HS, gS) => {
    var tS = gS(5765),
      bS = gS(5790);
    SS.exports = function(SS, HS, gS, XS) {
      var xS = gS.length,
        NS = xS,
        qS = !XS;
      if (null == SS) return !NS;
      for (SS = Object(SS); xS--;) {
        var uS = gS[xS];
        if (qS && uS[2] ? uS[1] !== SS[uS[0]] : !(uS[0] in SS)) return !1
      }
      for (; ++xS < NS;) {
        var IS = (uS = gS[xS])[0],
          fS = SS[IS],
          kS = uS[1];
        if (qS && uS[2]) {
          if (void 0 === fS && !(IS in SS)) return !1
        } else {
          var aS = new tS;
          if (XS) var KS = XS(fS, kS, IS, SS, HS, aS);
          if (!(void 0 === KS ? bS(kS, fS, 3, XS, aS) : KS)) return !1
        }
      }
      return !0
    }
  },
  6208: SS => {
    SS.exports = function(SS) {
      return SS !== SS
    }
  },
  5451: (SS, HS, gS) => {
    var tS = gS(5458),
      bS = gS(5466),
      XS = gS(5283),
      xS = gS(5477),
      NS = /^\[object .+?Constructor\]$/,
      qS = Function.prototype,
      uS = Object.prototype,
      IS = qS.toString,
      fS = uS.hasOwnProperty,
      kS = RegExp("^" + IS.call(fS).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    SS.exports = function(SS) {
      return !(!XS(SS) || bS(SS)) && (tS(SS) ? kS : NS).test(xS(SS))
    }
  },
  5939: (SS, HS, gS) => {
    var tS = gS(5324),
      bS = gS(5706),
      XS = gS(5336),
      xS = {};
    xS["[object Float32Array]"] = xS["[object Float64Array]"] = xS["[object Int8Array]"] = xS["[object Int16Array]"] = xS["[object Int32Array]"] = xS["[object Uint8Array]"] = xS["[object Uint8ClampedArray]"] = xS["[object Uint16Array]"] = xS["[object Uint32Array]"] = !0, xS["[object Arguments]"] = xS["[object Array]"] = xS["[object ArrayBuffer]"] = xS["[object Boolean]"] = xS["[object DataView]"] = xS["[object Date]"] = xS["[object Error]"] = xS["[object Function]"] = xS["[object Map]"] = xS["[object Number]"] = xS["[object Object]"] = xS["[object RegExp]"] = xS["[object Set]"] = xS["[object String]"] = xS["[object WeakMap]"] = !1, SS.exports = function(SS) {
      return XS(SS) && bS(SS.length) && !!xS[tS(SS)]
    }
  },
  5752: (SS, HS, gS) => {
    var tS = gS(5754),
      bS = gS(6023),
      XS = gS(6042),
      xS = gS(5351),
      NS = gS(6051);
    SS.exports = function(SS) {
      return "function" == typeof SS ? SS : null == SS ? XS : "object" == typeof SS ? xS(SS) ? bS(SS[0], SS[1]) : tS(SS) : NS(SS)
    }
  },
  5963: (SS, HS, gS) => {
    var tS = gS(5968),
      bS = gS(5971),
      XS = Object.prototype.hasOwnProperty;
    SS.exports = function(SS) {
      if (!tS(SS)) return bS(SS);
      var HS = [];
      for (var gS in Object(SS)) XS.call(SS, gS) && "constructor" != gS && HS.push(gS);
      return HS
    }
  },
  6372: SS => {
    SS.exports = function(SS, HS) {
      return SS < HS
    }
  },
  6066: (SS, HS, gS) => {
    var tS = gS(6069),
      bS = gS(5698);
    SS.exports = function(SS, HS) {
      var gS = -1,
        XS = bS(SS) ? Array(SS.length) : [];
      return tS(SS, (function(SS, tS, bS) {
        XS[++gS] = HS(SS, tS, bS)
      })), XS
    }
  },
  5754: (SS, HS, gS) => {
    var tS = gS(5763),
      bS = gS(6015),
      XS = gS(6020);
    SS.exports = function(SS) {
      var HS = bS(SS);
      return 1 == HS.length && HS[0][2] ? XS(HS[0][0], HS[0][1]) : function(gS) {
        return gS === SS || tS(gS, SS, HS)
      }
    }
  },
  6023: (SS, HS, gS) => {
    var tS = gS(5790),
      bS = gS(5376),
      XS = gS(6025),
      xS = gS(5391),
      NS = gS(6017),
      qS = gS(6020),
      uS = gS(5634);
    SS.exports = function(SS, HS) {
      return xS(SS) && NS(HS) ? qS(uS(SS), HS) : function(gS) {
        var xS = bS(gS, SS);
        return void 0 === xS && xS === HS ? XS(gS, SS) : tS(HS, xS, 3)
      }
    }
  },
  5748: (SS, HS, gS) => {
    var tS = gS(5627),
      bS = gS(5382),
      XS = gS(5752),
      xS = gS(6066),
      NS = gS(6090),
      qS = gS(5948),
      uS = gS(6095),
      IS = gS(6042),
      fS = gS(5351);
    SS.exports = function(SS, HS, gS) {
      HS = HS.length ? tS(HS, (function(SS) {
        return fS(SS) ? function(HS) {
          return bS(HS, 1 === SS.length ? SS[0] : SS)
        } : SS
      })) : [IS];
      var kS = -1;
      HS = tS(HS, qS(XS));
      var aS = xS(SS, (function(SS, gS, bS) {
        return {
          criteria: tS(HS, (function(HS) {
            return HS(SS)
          })),
          index: ++kS,
          value: SS
        }
      }));
      return NS(aS, (function(SS, HS) {
        return uS(SS, HS, gS)
      }))
    }
  },
  6060: SS => {
    SS.exports = function(SS) {
      return function(HS) {
        return null == HS ? void 0 : HS[SS]
      }
    }
  },
  6062: (SS, HS, gS) => {
    var tS = gS(5382);
    SS.exports = function(SS) {
      return function(HS) {
        return tS(HS, SS)
      }
    }
  },
  5687: SS => {
    var HS = Math.ceil,
      gS = Math.max;
    SS.exports = function(SS, tS, bS, XS) {
      for (var xS = -1, NS = gS(HS((tS - SS) / (bS || 1)), 0), qS = Array(NS); NS--;) qS[XS ? NS : ++xS] = SS, SS += bS;
      return qS
    }
  },
  6109: (SS, HS, gS) => {
    var tS = gS(6042),
      bS = gS(6113),
      XS = gS(6121);
    SS.exports = function(SS, HS) {
      return XS(bS(SS, HS, tS), SS + "")
    }
  },
  6127: (SS, HS, gS) => {
    var tS = gS(6130),
      bS = gS(6136),
      XS = gS(6042),
      xS = bS ? function(SS, HS) {
        return bS(SS, "toString", {
          configurable: !0,
          enumerable: !1,
          value: tS(HS),
          writable: !0
        })
      } : XS;
    SS.exports = xS
  },
  6258: SS => {
    SS.exports = function(SS, HS, gS) {
      var tS = -1,
        bS = SS.length;
      HS < 0 && (HS = -HS > bS ? 0 : bS + HS), (gS = gS > bS ? bS : gS) < 0 && (gS += bS), bS = HS > gS ? 0 : gS - HS >>> 0, HS >>>= 0;
      for (var XS = Array(bS); ++tS < bS;) XS[tS] = SS[tS + HS];
      return XS
    }
  },
  6542: (SS, HS, gS) => {
    var tS = gS(6069);
    SS.exports = function(SS, HS) {
      var gS;
      return tS(SS, (function(SS, tS, bS) {
        return !(gS = HS(SS, tS, bS))
      })), !!gS
    }
  },
  6090: SS => {
    SS.exports = function(SS, HS) {
      var gS = SS.length;
      for (SS.sort(HS); gS--;) SS[gS] = SS[gS].value;
      return SS
    }
  },
  5916: SS => {
    SS.exports = function(SS, HS) {
      for (var gS = -1, tS = Array(SS); ++gS < SS;) tS[gS] = HS(gS);
      return tS
    }
  },
  5621: (SS, HS, gS) => {
    var tS = gS(5326),
      bS = gS(5627),
      XS = gS(5351),
      xS = gS(5319),
      NS = tS ? tS.prototype : void 0,
      qS = NS ? NS.toString : void 0;
    SS.exports = function SS(HS) {
      if ("string" == typeof HS) return HS;
      if (XS(HS)) return bS(HS, SS) + "";
      if (xS(HS)) return qS ? qS.call(HS) : "";
      var gS = HS + "";
      return "0" == gS && 1 / HS == -1 / 0 ? "-0" : gS
    }
  },
  5310: (SS, HS, gS) => {
    var tS = gS(5317),
      bS = /^\s+/;
    SS.exports = function(SS) {
      return SS ? SS.slice(0, tS(SS) + 1).replace(bS, "") : SS
    }
  },
  5948: SS => {
    SS.exports = function(SS) {
      return function(HS) {
        return SS(HS)
      }
    }
  },
  6187: (SS, HS, gS) => {
    var tS = gS(5814),
      bS = gS(6193),
      XS = gS(6219),
      xS = gS(5844),
      NS = gS(6222),
      qS = gS(5866);
    SS.exports = function(SS, HS, gS) {
      var uS = -1,
        IS = bS,
        fS = SS.length,
        kS = !0,
        aS = [],
        KS = aS;
      if (gS) kS = !1, IS = XS;
      else if (fS >= 200) {
        var jS = HS ? null : NS(SS);
        if (jS) return qS(jS);
        kS = !1, IS = xS, KS = new tS
      } else KS = HS ? [] : aS;
      SS: for (; ++uS < fS;) {
        var GS = SS[uS],
          CS = HS ? HS(GS) : GS;
        if (GS = gS || 0 !== GS ? GS : 0, kS && CS === CS) {
          for (var nS = KS.length; nS--;)
            if (KS[nS] === CS) continue SS;
          HS && KS.push(CS), aS.push(GS)
        } else IS(KS, CS, gS) || (KS !== aS && KS.push(CS), aS.push(GS))
      }
      return aS
    }
  },
  5844: SS => {
    SS.exports = function(SS, HS) {
      return SS.has(HS)
    }
  },
  5385: (SS, HS, gS) => {
    var tS = gS(5351),
      bS = gS(5391),
      XS = gS(5398),
      xS = gS(5615);
    SS.exports = function(SS, HS) {
      return tS(SS) ? SS : bS(SS, HS) ? [SS] : XS(xS(SS))
    }
  },
  6250: (SS, HS, gS) => {
    var tS = gS(6258);
    SS.exports = function(SS, HS, gS) {
      var bS = SS.length;
      return gS = void 0 === gS ? bS : gS, !HS && gS >= bS ? SS : tS(SS, HS, gS)
    }
  },
  6101: (SS, HS, gS) => {
    var tS = gS(5319);
    SS.exports = function(SS, HS) {
      if (SS !== HS) {
        var gS = void 0 !== SS,
          bS = null === SS,
          XS = SS === SS,
          xS = tS(SS),
          NS = void 0 !== HS,
          qS = null === HS,
          uS = HS === HS,
          IS = tS(HS);
        if (!qS && !IS && !xS && SS > HS || xS && NS && uS && !qS && !IS || bS && NS && uS || !gS && uS || !XS) return 1;
        if (!bS && !xS && !IS && SS < HS || IS && gS && XS && !bS && !xS || qS && gS && XS || !NS && XS || !uS) return -1
      }
      return 0
    }
  },
  6095: (SS, HS, gS) => {
    var tS = gS(6101);
    SS.exports = function(SS, HS, gS) {
      for (var bS = -1, XS = SS.criteria, xS = HS.criteria, NS = XS.length, qS = gS.length; ++bS < NS;) {
        var uS = tS(XS[bS], xS[bS]);
        if (uS) return bS >= qS ? uS : uS * ("desc" == gS[bS] ? -1 : 1)
      }
      return SS.index - HS.index
    }
  },
  5470: (SS, HS, gS) => {
    var tS = gS(5300)["__core-js_shared__"];
    SS.exports = tS
  },
  6088: (SS, HS, gS) => {
    var tS = gS(5698);
    SS.exports = function(SS, HS) {
      return function(gS, bS) {
        if (null == gS) return gS;
        if (!tS(gS)) return SS(gS, bS);
        for (var XS = gS.length, xS = HS ? XS : -1, NS = Object(gS);
          (HS ? xS-- : ++xS < XS) && !1 !== bS(NS[xS], xS, NS););
        return gS
      }
    }
  },
  6080: SS => {
    SS.exports = function(SS) {
      return function(HS, gS, tS) {
        for (var bS = -1, XS = Object(HS), xS = tS(HS), NS = xS.length; NS--;) {
          var qS = xS[SS ? NS : ++bS];
          if (!1 === gS(XS[qS], qS, XS)) break
        }
        return HS
      }
    }
  },
  6247: (SS, HS, gS) => {
    var tS = gS(6250),
      bS = gS(6263),
      XS = gS(6266),
      xS = gS(5615);
    SS.exports = function(SS) {
      return function(HS) {
        HS = xS(HS);
        var gS = bS(HS) ? XS(HS) : void 0,
          NS = gS ? gS[0] : HS.charAt(0),
          qS = gS ? tS(gS, 1).join("") : HS.slice(1);
        return NS[SS]() + qS
      }
    }
  },
  6556: (SS, HS, gS) => {
    var tS = gS(5752),
      bS = gS(5698),
      XS = gS(5906);
    SS.exports = function(SS) {
      return function(HS, gS, xS) {
        var NS = Object(HS);
        if (!bS(HS)) {
          var qS = tS(gS, 3);
          HS = XS(HS), gS = function(SS) {
            return qS(NS[SS], SS, NS)
          }
        }
        var uS = SS(HS, gS, xS);
        return uS > -1 ? NS[qS ? HS[uS] : uS] : void 0
      }
    }
  },
  5685: (SS, HS, gS) => {
    var tS = gS(5687),
      bS = gS(5692),
      XS = gS(5715);
    SS.exports = function(SS) {
      return function(HS, gS, xS) {
        return xS && "number" != typeof xS && bS(HS, gS, xS) && (gS = xS = void 0), HS = XS(HS), void 0 === gS ? (gS = HS, HS = 0) : gS = XS(gS), xS = void 0 === xS ? HS < gS ? 1 : -1 : XS(xS), tS(HS, gS, xS, SS)
      }
    }
  },
  6222: (SS, HS, gS) => {
    var tS = gS(5999),
      bS = gS(6226),
      XS = gS(5866),
      xS = tS && 1 / XS(new tS([, -0]))[1] == 1 / 0 ? function(SS) {
        return new tS(SS)
      } : bS;
    SS.exports = xS
  },
  6136: (SS, HS, gS) => {
    var tS = gS(5442),
      bS = function() {
        try {
          var SS = tS(Object, "defineProperty");
          return SS({}, "", {}), SS
        } catch (HS) {}
      }();
    SS.exports = bS
  },
  5805: (SS, HS, gS) => {
    var tS = gS(5814),
      bS = gS(5837),
      XS = gS(5844);
    SS.exports = function(SS, HS, gS, xS, NS, qS) {
      var uS = 1 & gS,
        IS = SS.length,
        fS = HS.length;
      if (IS != fS && !(uS && fS > IS)) return !1;
      var kS = qS.get(SS),
        aS = qS.get(HS);
      if (kS && aS) return kS == HS && aS == SS;
      var KS = -1,
        jS = !0,
        GS = 2 & gS ? new tS : void 0;
      for (qS.set(SS, HS), qS.set(HS, SS); ++KS < IS;) {
        var CS = SS[KS],
          nS = HS[KS];
        if (xS) var PS = uS ? xS(nS, CS, KS, HS, SS, qS) : xS(CS, nS, KS, SS, HS, qS);
        if (void 0 !== PS) {
          if (PS) continue;
          jS = !1;
          break
        }
        if (GS) {
          if (!bS(HS, (function(SS, HS) {
              if (!XS(GS, HS) && (CS === SS || NS(CS, SS, gS, xS, qS))) return GS.push(HS)
            }))) {
            jS = !1;
            break
          }
        } else if (CS !== nS && !NS(CS, nS, gS, xS, qS)) {
          jS = !1;
          break
        }
      }
      return qS.delete(SS), qS.delete(HS), jS
    }
  },
  5846: (SS, HS, gS) => {
    var tS = gS(5326),
      bS = gS(5853),
      XS = gS(5552),
      xS = gS(5805),
      NS = gS(5861),
      qS = gS(5866),
      uS = tS ? tS.prototype : void 0,
      IS = uS ? uS.valueOf : void 0;
    SS.exports = function(SS, HS, gS, tS, uS, fS, kS) {
      switch (gS) {
        case "[object DataView]":
          if (SS.byteLength != HS.byteLength || SS.byteOffset != HS.byteOffset) return !1;
          SS = SS.buffer, HS = HS.buffer;
        case "[object ArrayBuffer]":
          return !(SS.byteLength != HS.byteLength || !fS(new bS(SS), new bS(HS)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return XS(+SS, +HS);
        case "[object Error]":
          return SS.name == HS.name && SS.message == HS.message;
        case "[object RegExp]":
        case "[object String]":
          return SS == HS + "";
        case "[object Map]":
          var aS = NS;
        case "[object Set]":
          var KS = 1 & tS;
          if (aS || (aS = qS), SS.size != HS.size && !KS) return !1;
          var jS = kS.get(SS);
          if (jS) return jS == HS;
          tS |= 2, kS.set(SS, HS);
          var GS = xS(aS(SS), aS(HS), tS, uS, fS, kS);
          return kS.delete(SS), GS;
        case "[object Symbol]":
          if (IS) return IS.call(SS) == IS.call(HS)
      }
      return !1
    }
  },
  5869: (SS, HS, gS) => {
    var tS = gS(5875),
      bS = Object.prototype.hasOwnProperty;
    SS.exports = function(SS, HS, gS, XS, xS, NS) {
      var qS = 1 & gS,
        uS = tS(SS),
        IS = uS.length;
      if (IS != tS(HS).length && !qS) return !1;
      for (var fS = IS; fS--;) {
        var kS = uS[fS];
        if (!(qS ? kS in HS : bS.call(HS, kS))) return !1
      }
      var aS = NS.get(SS),
        KS = NS.get(HS);
      if (aS && KS) return aS == HS && KS == SS;
      var jS = !0;
      NS.set(SS, HS), NS.set(HS, SS);
      for (var GS = qS; ++fS < IS;) {
        var CS = SS[kS = uS[fS]],
          nS = HS[kS];
        if (XS) var PS = qS ? XS(nS, CS, kS, HS, SS, NS) : XS(CS, nS, kS, SS, HS, NS);
        if (!(void 0 === PS ? CS === nS || xS(CS, nS, gS, XS, NS) : PS)) {
          jS = !1;
          break
        }
        GS || (GS = "constructor" == kS)
      }
      if (jS && !GS) {
        var QS = SS.constructor,
          DS = HS.constructor;
        QS == DS || !("constructor" in SS) || !("constructor" in HS) || "function" == typeof QS && QS instanceof QS && "function" == typeof DS && DS instanceof DS || (jS = !1)
      }
      return NS.delete(SS), NS.delete(HS), jS
    }
  },
  5303: (SS, HS, gS) => {
    var tS = "object" == typeof gS.g && gS.g && gS.g.Object === Object && gS.g;
    SS.exports = tS
  },
  5875: (SS, HS, gS) => {
    var tS = gS(5877),
      bS = gS(5884),
      XS = gS(5906);
    SS.exports = function(SS) {
      return tS(SS, XS, bS)
    }
  },
  5584: (SS, HS, gS) => {
    var tS = gS(5591);
    SS.exports = function(SS, HS) {
      var gS = SS.__data__;
      return tS(HS) ? gS["string" == typeof HS ? "string" : "hash"] : gS.map
    }
  },
  6015: (SS, HS, gS) => {
    var tS = gS(6017),
      bS = gS(5906);
    SS.exports = function(SS) {
      for (var HS = bS(SS), gS = HS.length; gS--;) {
        var XS = HS[gS],
          xS = SS[XS];
        HS[gS] = [XS, xS, tS(xS)]
      }
      return HS
    }
  },
  5442: (SS, HS, gS) => {
    var tS = gS(5451),
      bS = gS(5482);
    SS.exports = function(SS, HS) {
      var gS = bS(SS, HS);
      return tS(gS) ? gS : void 0
    }
  },
  6501: (SS, HS, gS) => {
    var tS = gS(5977)(Object.getPrototypeOf, Object);
    SS.exports = tS
  },
  5329: (SS, HS, gS) => {
    var tS = gS(5326),
      bS = Object.prototype,
      XS = bS.hasOwnProperty,
      xS = bS.toString,
      NS = tS ? tS.toStringTag : void 0;
    SS.exports = function(SS) {
      var HS = XS.call(SS, NS),
        gS = SS[NS];
      try {
        SS[NS] = void 0;
        var tS = !0
      } catch (qS) {}
      var bS = xS.call(SS);
      return tS && (HS ? SS[NS] = gS : delete SS[NS]), bS
    }
  },
  5884: (SS, HS, gS) => {
    var tS = gS(5893),
      bS = gS(5902),
      XS = Object.prototype.propertyIsEnumerable,
      xS = Object.getOwnPropertySymbols,
      NS = xS ? function(SS) {
        return null == SS ? [] : (SS = Object(SS), tS(xS(SS), (function(HS) {
          return XS.call(SS, HS)
        })))
      } : bS;
    SS.exports = NS
  },
  5979: (SS, HS, gS) => {
    var tS = gS(5986),
      bS = gS(5575),
      XS = gS(5991),
      xS = gS(5999),
      NS = gS(6007),
      qS = gS(5324),
      uS = gS(5477),
      IS = "[object Map]",
      fS = "[object Promise]",
      kS = "[object Set]",
      aS = "[object WeakMap]",
      KS = "[object DataView]",
      jS = uS(tS),
      GS = uS(bS),
      CS = uS(XS),
      nS = uS(xS),
      PS = uS(NS),
      QS = qS;
    (tS && QS(new tS(new ArrayBuffer(1))) != KS || bS && QS(new bS) != IS || XS && QS(XS.resolve()) != fS || xS && QS(new xS) != kS || NS && QS(new NS) != aS) && (QS = function(SS) {
      var HS = qS(SS),
        gS = "[object Object]" == HS ? SS.constructor : void 0,
        tS = gS ? uS(gS) : "";
      if (tS) switch (tS) {
        case jS:
          return KS;
        case GS:
          return IS;
        case CS:
          return fS;
        case nS:
          return kS;
        case PS:
          return aS
      }
      return HS
    }), SS.exports = QS
  },
  5482: SS => {
    SS.exports = function(SS, HS) {
      return null == SS ? void 0 : SS[HS]
    }
  },
  6037: (SS, HS, gS) => {
    var tS = gS(5385),
      bS = gS(5740),
      XS = gS(5351),
      xS = gS(5711),
      NS = gS(5706),
      qS = gS(5634);
    SS.exports = function(SS, HS, gS) {
      for (var uS = -1, IS = (HS = tS(HS, SS)).length, fS = !1; ++uS < IS;) {
        var kS = qS(HS[uS]);
        if (!(fS = null != SS && gS(SS, kS))) break;
        SS = SS[kS]
      }
      return fS || ++uS != IS ? fS : !!(IS = null == SS ? 0 : SS.length) && NS(IS) && xS(kS, IS) && (XS(SS) || bS(SS))
    }
  },
  6263: SS => {
    var HS = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    SS.exports = function(SS) {
      return HS.test(SS)
    }
  },
  5432: (SS, HS, gS) => {
    var tS = gS(5436);
    SS.exports = function() {
      this.__data__ = tS ? tS(null) : {}, this.size = 0
    }
  },
  5491: SS => {
    SS.exports = function(SS) {
      var HS = this.has(SS) && delete this.__data__[SS];
      return this.size -= HS ? 1 : 0, HS
    }
  },
  5499: (SS, HS, gS) => {
    var tS = gS(5436),
      bS = Object.prototype.hasOwnProperty;
    SS.exports = function(SS) {
      var HS = this.__data__;
      if (tS) {
        var gS = HS[SS];
        return "__lodash_hash_undefined__" === gS ? void 0 : gS
      }
      return bS.call(HS, SS) ? HS[SS] : void 0
    }
  },
  5505: (SS, HS, gS) => {
    var tS = gS(5436),
      bS = Object.prototype.hasOwnProperty;
    SS.exports = function(SS) {
      var HS = this.__data__;
      return tS ? void 0 !== HS[SS] : bS.call(HS, SS)
    }
  },
  5514: (SS, HS, gS) => {
    var tS = gS(5436);
    SS.exports = function(SS, HS) {
      var gS = this.__data__;
      return this.size += this.has(SS) ? 0 : 1, gS[SS] = tS && void 0 === HS ? "__lodash_hash_undefined__" : HS, this
    }
  },
  5738: (SS, HS, gS) => {
    var tS = gS(5326),
      bS = gS(5740),
      XS = gS(5351),
      xS = tS ? tS.isConcatSpreadable : void 0;
    SS.exports = function(SS) {
      return XS(SS) || bS(SS) || !!(xS && SS && SS[xS])
    }
  },
  5711: SS => {
    var HS = /^(?:0|[1-9]\d*)$/;
    SS.exports = function(SS, gS) {
      var tS = typeof SS;
      return !!(gS = null == gS ? 9007199254740991 : gS) && ("number" == tS || "symbol" != tS && HS.test(SS)) && SS > -1 && SS % 1 == 0 && SS < gS
    }
  },
  5692: (SS, HS, gS) => {
    var tS = gS(5552),
      bS = gS(5698),
      XS = gS(5711),
      xS = gS(5283);
    SS.exports = function(SS, HS, gS) {
      if (!xS(gS)) return !1;
      var NS = typeof HS;
      return !!("number" == NS ? bS(gS) && XS(HS, gS.length) : "string" == NS && HS in gS) && tS(gS[HS], SS)
    }
  },
  5391: (SS, HS, gS) => {
    var tS = gS(5351),
      bS = gS(5319),
      XS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      xS = /^\w*$/;
    SS.exports = function(SS, HS) {
      if (tS(SS)) return !1;
      var gS = typeof SS;
      return !("number" != gS && "symbol" != gS && "boolean" != gS && null != SS && !bS(SS)) || (xS.test(SS) || !XS.test(SS) || null != HS && SS in Object(HS))
    }
  },
  5591: SS => {
    SS.exports = function(SS) {
      var HS = typeof SS;
      return "string" == HS || "number" == HS || "symbol" == HS || "boolean" == HS ? "__proto__" !== SS : null === SS
    }
  },
  5466: (SS, HS, gS) => {
    var tS = gS(5470),
      bS = function() {
        var SS = /[^.]+$/.exec(tS && tS.keys && tS.keys.IE_PROTO || "");
        return SS ? "Symbol(src)_1." + SS : ""
      }();
    SS.exports = function(SS) {
      return !!bS && bS in SS
    }
  },
  5968: SS => {
    var HS = Object.prototype;
    SS.exports = function(SS) {
      var gS = SS && SS.constructor;
      return SS === ("function" == typeof gS && gS.prototype || HS)
    }
  },
  6017: (SS, HS, gS) => {
    var tS = gS(5283);
    SS.exports = function(SS) {
      return SS === SS && !tS(SS)
    }
  },
  5529: SS => {
    SS.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5538: (SS, HS, gS) => {
    var tS = gS(5545),
      bS = Array.prototype.splice;
    SS.exports = function(SS) {
      var HS = this.__data__,
        gS = tS(HS, SS);
      return !(gS < 0) && (gS == HS.length - 1 ? HS.pop() : bS.call(HS, gS, 1), --this.size, !0)
    }
  },
  5555: (SS, HS, gS) => {
    var tS = gS(5545);
    SS.exports = function(SS) {
      var HS = this.__data__,
        gS = tS(HS, SS);
      return gS < 0 ? void 0 : HS[gS][1]
    }
  },
  5564: (SS, HS, gS) => {
    var tS = gS(5545);
    SS.exports = function(SS) {
      return tS(this.__data__, SS) > -1
    }
  },
  5567: (SS, HS, gS) => {
    var tS = gS(5545);
    SS.exports = function(SS, HS) {
      var gS = this.__data__,
        bS = tS(gS, SS);
      return bS < 0 ? (++this.size, gS.push([SS, HS])) : gS[bS][1] = HS, this
    }
  },
  5421: (SS, HS, gS) => {
    var tS = gS(5424),
      bS = gS(5523),
      XS = gS(5575);
    SS.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new tS,
        map: new(XS || bS),
        string: new tS
      }
    }
  },
  5579: (SS, HS, gS) => {
    var tS = gS(5584);
    SS.exports = function(SS) {
      var HS = tS(this, SS).delete(SS);
      return this.size -= HS ? 1 : 0, HS
    }
  },
  5600: (SS, HS, gS) => {
    var tS = gS(5584);
    SS.exports = function(SS) {
      return tS(this, SS).get(SS)
    }
  },
  5604: (SS, HS, gS) => {
    var tS = gS(5584);
    SS.exports = function(SS) {
      return tS(this, SS).has(SS)
    }
  },
  5610: (SS, HS, gS) => {
    var tS = gS(5584);
    SS.exports = function(SS, HS) {
      var gS = tS(this, SS),
        bS = gS.size;
      return gS.set(SS, HS), this.size += gS.size == bS ? 0 : 1, this
    }
  },
  5861: SS => {
    SS.exports = function(SS) {
      var HS = -1,
        gS = Array(SS.size);
      return SS.forEach((function(SS, tS) {
        gS[++HS] = [tS, SS]
      })), gS
    }
  },
  6020: SS => {
    SS.exports = function(SS, HS) {
      return function(gS) {
        return null != gS && (gS[SS] === HS && (void 0 !== HS || SS in Object(gS)))
      }
    }
  },
  5406: (SS, HS, gS) => {
    var tS = gS(5413);
    SS.exports = function(SS) {
      var HS = tS(SS, (function(SS) {
          return 500 === gS.size && gS.clear(), SS
        })),
        gS = HS.cache;
      return HS
    }
  },
  5436: (SS, HS, gS) => {
    var tS = gS(5442)(Object, "create");
    SS.exports = tS
  },
  5971: (SS, HS, gS) => {
    var tS = gS(5977)(Object.keys, Object);
    SS.exports = tS
  },
  5954: (SS, HS, gS) => {
    SS = gS.nmd(SS);
    var tS = gS(5303),
      bS = HS && !HS.nodeType && HS,
      XS = bS && SS && !SS.nodeType && SS,
      xS = XS && XS.exports === bS && tS.process,
      NS = function() {
        try {
          var SS = XS && XS.require && XS.require("util").types;
          return SS || xS && xS.binding && xS.binding("util")
        } catch (HS) {}
      }();
    SS.exports = NS
  },
  5333: SS => {
    var HS = Object.prototype.toString;
    SS.exports = function(SS) {
      return HS.call(SS)
    }
  },
  5977: SS => {
    SS.exports = function(SS, HS) {
      return function(gS) {
        return SS(HS(gS))
      }
    }
  },
  6113: (SS, HS, gS) => {
    var tS = gS(6116),
      bS = Math.max;
    SS.exports = function(SS, HS, gS) {
      return HS = bS(void 0 === HS ? SS.length - 1 : HS, 0),
        function() {
          for (var XS = arguments, xS = -1, NS = bS(XS.length - HS, 0), qS = Array(NS); ++xS < NS;) qS[xS] = XS[HS + xS];
          xS = -1;
          for (var uS = Array(HS + 1); ++xS < HS;) uS[xS] = XS[xS];
          return uS[HS] = gS(qS), tS(SS, this, uS)
        }
    }
  },
  5300: (SS, HS, gS) => {
    var tS = gS(5303),
      bS = "object" == typeof self && self && self.Object === Object && self,
      XS = tS || bS || Function("return this")();
    SS.exports = XS
  },
  5821: SS => {
    SS.exports = function(SS) {
      return this.__data__.set(SS, "__lodash_hash_undefined__"), this
    }
  },
  5829: SS => {
    SS.exports = function(SS) {
      return this.__data__.has(SS)
    }
  },
  5866: SS => {
    SS.exports = function(SS) {
      var HS = -1,
        gS = Array(SS.size);
      return SS.forEach((function(SS) {
        gS[++HS] = SS
      })), gS
    }
  },
  6121: (SS, HS, gS) => {
    var tS = gS(6127),
      bS = gS(6141)(tS);
    SS.exports = bS
  },
  6141: SS => {
    var HS = Date.now;
    SS.exports = function(SS) {
      var gS = 0,
        tS = 0;
      return function() {
        var bS = HS(),
          XS = 16 - (bS - tS);
        if (tS = bS, XS > 0) {
          if (++gS >= 800) return arguments[0]
        } else gS = 0;
        return SS.apply(void 0, arguments)
      }
    }
  },
  5770: (SS, HS, gS) => {
    var tS = gS(5523);
    SS.exports = function() {
      this.__data__ = new tS, this.size = 0
    }
  },
  5779: SS => {
    SS.exports = function(SS) {
      var HS = this.__data__,
        gS = HS.delete(SS);
      return this.size = HS.size, gS
    }
  },
  5781: SS => {
    SS.exports = function(SS) {
      return this.__data__.get(SS)
    }
  },
  5785: SS => {
    SS.exports = function(SS) {
      return this.__data__.has(SS)
    }
  },
  5787: (SS, HS, gS) => {
    var tS = gS(5523),
      bS = gS(5575),
      XS = gS(5415);
    SS.exports = function(SS, HS) {
      var gS = this.__data__;
      if (gS instanceof tS) {
        var xS = gS.__data__;
        if (!bS || xS.length < 199) return xS.push([SS, HS]), this.size = ++gS.size, this;
        gS = this.__data__ = new XS(xS)
      }
      return gS.set(SS, HS), this.size = gS.size, this
    }
  },
  6212: SS => {
    SS.exports = function(SS, HS, gS) {
      for (var tS = gS - 1, bS = SS.length; ++tS < bS;)
        if (SS[tS] === HS) return tS;
      return -1
    }
  },
  6266: (SS, HS, gS) => {
    var tS = gS(6272),
      bS = gS(6263),
      XS = gS(6275);
    SS.exports = function(SS) {
      return bS(SS) ? XS(SS) : tS(SS)
    }
  },
  5398: (SS, HS, gS) => {
    var tS = gS(5406),
      bS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      XS = /\\(\\)?/g,
      xS = tS((function(SS) {
        var HS = [];
        return 46 === SS.charCodeAt(0) && HS.push(""), SS.replace(bS, (function(SS, gS, tS, bS) {
          HS.push(tS ? bS.replace(XS, "$1") : gS || SS)
        })), HS
      }));
    SS.exports = xS
  },
  5634: (SS, HS, gS) => {
    var tS = gS(5319);
    SS.exports = function(SS) {
      if ("string" == typeof SS || tS(SS)) return SS;
      var HS = SS + "";
      return "0" == HS && 1 / SS == -1 / 0 ? "-0" : HS
    }
  },
  5477: SS => {
    var HS = Function.prototype.toString;
    SS.exports = function(SS) {
      if (null != SS) {
        try {
          return HS.call(SS)
        } catch (gS) {}
        try {
          return SS + ""
        } catch (gS) {}
      }
      return ""
    }
  },
  5317: SS => {
    var HS = /\s/;
    SS.exports = function(SS) {
      for (var gS = SS.length; gS-- && HS.test(SS.charAt(gS)););
      return gS
    }
  },
  6275: SS => {
    var HS = "\\ud800-\\udfff",
      gS = "[" + HS + "]",
      tS = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      bS = "\\ud83c[\\udffb-\\udfff]",
      XS = "[^" + HS + "]",
      xS = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      NS = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      qS = "(?:" + tS + "|" + bS + ")" + "?",
      uS = "[\\ufe0e\\ufe0f]?",
      IS = uS + qS + ("(?:\\u200d(?:" + [XS, xS, NS].join("|") + ")" + uS + qS + ")*"),
      fS = "(?:" + [XS + tS + "?", tS, xS, NS, gS].join("|") + ")",
      kS = RegExp(bS + "(?=" + bS + ")|" + fS + IS, "g");
    SS.exports = function(SS) {
      return SS.match(kS) || []
    }
  },
  6130: SS => {
    SS.exports = function(SS) {
      return function() {
        return SS
      }
    }
  },
  5274: (SS, HS, gS) => {
    var tS = gS(5283),
      bS = gS(5292),
      XS = gS(5307),
      xS = Math.max,
      NS = Math.min;
    SS.exports = function(SS, HS, gS) {
      var qS, uS, IS, fS, kS, aS, KS = 0,
        jS = !1,
        GS = !1,
        CS = !0;
      if ("function" != typeof SS) throw new TypeError("Expected a function");

      function nS(HS) {
        var gS = qS,
          tS = uS;
        return qS = uS = void 0, KS = HS, fS = SS.apply(tS, gS)
      }

      function PS(SS) {
        var gS = SS - aS;
        return void 0 === aS || gS >= HS || gS < 0 || GS && SS - KS >= IS
      }

      function QS() {
        var SS = bS();
        if (PS(SS)) return DS(SS);
        kS = setTimeout(QS, function(SS) {
          var gS = HS - (SS - aS);
          return GS ? NS(gS, IS - (SS - KS)) : gS
        }(SS))
      }

      function DS(SS) {
        return kS = void 0, CS && qS ? nS(SS) : (qS = uS = void 0, fS)
      }

      function wS() {
        var SS = bS(),
          gS = PS(SS);
        if (qS = arguments, uS = this, aS = SS, gS) {
          if (void 0 === kS) return function(SS) {
            return KS = SS, kS = setTimeout(QS, HS), jS ? nS(SS) : fS
          }(aS);
          if (GS) return clearTimeout(kS), kS = setTimeout(QS, HS), nS(aS)
        }
        return void 0 === kS && (kS = setTimeout(QS, HS)), fS
      }
      return HS = XS(HS) || 0, tS(gS) && (jS = !!gS.leading, IS = (GS = "maxWait" in gS) ? xS(XS(gS.maxWait) || 0, HS) : IS, CS = "trailing" in gS ? !!gS.trailing : CS), wS.cancel = function() {
        void 0 !== kS && clearTimeout(kS), KS = 0, qS = aS = uS = kS = void 0
      }, wS.flush = function() {
        return void 0 === kS ? fS : DS(bS())
      }, wS
    }
  },
  5552: SS => {
    SS.exports = function(SS, HS) {
      return SS === HS || SS !== SS && HS !== HS
    }
  },
  6454: (SS, HS, gS) => {
    var tS = gS(6459),
      bS = gS(6463),
      XS = gS(5752),
      xS = gS(5351),
      NS = gS(5692);
    SS.exports = function(SS, HS, gS) {
      var qS = xS(SS) ? tS : bS;
      return gS && NS(SS, HS, gS) && (HS = void 0), qS(SS, XS(HS, 3))
    }
  },
  6553: (SS, HS, gS) => {
    var tS = gS(6556)(gS(6562));
    SS.exports = tS
  },
  6562: (SS, HS, gS) => {
    var tS = gS(6200),
      bS = gS(5752),
      XS = gS(6566),
      xS = Math.max;
    SS.exports = function(SS, HS, gS) {
      var NS = null == SS ? 0 : SS.length;
      if (!NS) return -1;
      var qS = null == gS ? 0 : XS(gS);
      return qS < 0 && (qS = xS(NS + qS, 0)), tS(SS, bS(HS, 3), qS)
    }
  },
  6376: (SS, HS, gS) => {
    var tS = gS(5725),
      bS = gS(6385);
    SS.exports = function(SS, HS) {
      return tS(bS(SS, HS), 1)
    }
  },
  5376: (SS, HS, gS) => {
    var tS = gS(5382);
    SS.exports = function(SS, HS, gS) {
      var bS = null == SS ? void 0 : tS(SS, HS);
      return void 0 === bS ? gS : bS
    }
  },
  6025: (SS, HS, gS) => {
    var tS = gS(6033),
      bS = gS(6037);
    SS.exports = function(SS, HS) {
      return null != SS && bS(SS, HS, tS)
    }
  },
  6042: SS => {
    SS.exports = function(SS) {
      return SS
    }
  },
  5740: (SS, HS, gS) => {
    var tS = gS(5743),
      bS = gS(5336),
      XS = Object.prototype,
      xS = XS.hasOwnProperty,
      NS = XS.propertyIsEnumerable,
      qS = tS(function() {
        return arguments
      }()) ? tS : function(SS) {
        return bS(SS) && xS.call(SS, "callee") && !NS.call(SS, "callee")
      };
    SS.exports = qS
  },
  5351: SS => {
    var HS = Array.isArray;
    SS.exports = HS
  },
  5698: (SS, HS, gS) => {
    var tS = gS(5458),
      bS = gS(5706);
    SS.exports = function(SS) {
      return null != SS && bS(SS.length) && !tS(SS)
    }
  },
  6510: (SS, HS, gS) => {
    var tS = gS(5324),
      bS = gS(5336);
    SS.exports = function(SS) {
      return !0 === SS || !1 === SS || bS(SS) && "[object Boolean]" == tS(SS)
    }
  },
  5919: (SS, HS, gS) => {
    SS = gS.nmd(SS);
    var tS = gS(5300),
      bS = gS(5926),
      XS = HS && !HS.nodeType && HS,
      xS = XS && SS && !SS.nodeType && SS,
      NS = xS && xS.exports === XS ? tS.CK : void 0,
      qS = (NS ? NS.isBuffer : void 0) || bS;
    SS.exports = qS
  },
  6391: (SS, HS, gS) => {
    var tS = gS(5790);
    SS.exports = function(SS, HS) {
      return tS(SS, HS)
    }
  },
  5458: (SS, HS, gS) => {
    var tS = gS(5324),
      bS = gS(5283);
    SS.exports = function(SS) {
      if (!bS(SS)) return !1;
      var HS = tS(SS);
      return "[object Function]" == HS || "[object GeneratorFunction]" == HS || "[object AsyncFunction]" == HS || "[object Proxy]" == HS
    }
  },
  5706: SS => {
    SS.exports = function(SS) {
      return "number" == typeof SS && SS > -1 && SS % 1 == 0 && SS <= 9007199254740991
    }
  },
  5360: (SS, HS, gS) => {
    var tS = gS(5369);
    SS.exports = function(SS) {
      return tS(SS) && SS != +SS
    }
  },
  5639: SS => {
    SS.exports = function(SS) {
      return null == SS
    }
  },
  5369: (SS, HS, gS) => {
    var tS = gS(5324),
      bS = gS(5336);
    SS.exports = function(SS) {
      return "number" == typeof SS || bS(SS) && "[object Number]" == tS(SS)
    }
  },
  5283: SS => {
    SS.exports = function(SS) {
      var HS = typeof SS;
      return null != SS && ("object" == HS || "function" == HS)
    }
  },
  5336: SS => {
    SS.exports = function(SS) {
      return null != SS && "object" == typeof SS
    }
  },
  6495: (SS, HS, gS) => {
    var tS = gS(5324),
      bS = gS(6501),
      XS = gS(5336),
      xS = Function.prototype,
      NS = Object.prototype,
      qS = xS.toString,
      uS = NS.hasOwnProperty,
      IS = qS.call(Object);
    SS.exports = function(SS) {
      if (!XS(SS) || "[object Object]" != tS(SS)) return !1;
      var HS = bS(SS);
      if (null === HS) return !0;
      var gS = uS.call(HS, "constructor") && HS.constructor;
      return "function" == typeof gS && gS instanceof gS && qS.call(gS) == IS
    }
  },
  5344: (SS, HS, gS) => {
    var tS = gS(5324),
      bS = gS(5351),
      XS = gS(5336);
    SS.exports = function(SS) {
      return "string" == typeof SS || !bS(SS) && XS(SS) && "[object String]" == tS(SS)
    }
  },
  5319: (SS, HS, gS) => {
    var tS = gS(5324),
      bS = gS(5336);
    SS.exports = function(SS) {
      return "symbol" == typeof SS || bS(SS) && "[object Symbol]" == tS(SS)
    }
  },
  5934: (SS, HS, gS) => {
    var tS = gS(5939),
      bS = gS(5948),
      XS = gS(5954),
      xS = XS && XS.isTypedArray,
      NS = xS ? bS(xS) : tS;
    SS.exports = NS
  },
  5906: (SS, HS, gS) => {
    var tS = gS(5910),
      bS = gS(5963),
      XS = gS(5698);
    SS.exports = function(SS) {
      return XS(SS) ? tS(SS) : bS(SS)
    }
  },
  6486: SS => {
    SS.exports = function(SS) {
      var HS = null == SS ? 0 : SS.length;
      return HS ? SS[HS - 1] : void 0
    }
  },
  6385: (SS, HS, gS) => {
    var tS = gS(5627),
      bS = gS(5752),
      XS = gS(6066),
      xS = gS(5351);
    SS.exports = function(SS, HS) {
      return (xS(SS) ? tS : XS)(SS, bS(HS, 3))
    }
  },
  6441: (SS, HS, gS) => {
    var tS = gS(6447),
      bS = gS(6071),
      XS = gS(5752);
    SS.exports = function(SS, HS) {
      var gS = {};
      return HS = XS(HS, 3), bS(SS, (function(SS, bS, XS) {
        tS(gS, bS, HS(SS, bS, XS))
      })), gS
    }
  },
  6347: (SS, HS, gS) => {
    var tS = gS(6353),
      bS = gS(6362),
      XS = gS(6042);
    SS.exports = function(SS) {
      return SS && SS.length ? tS(SS, XS, bS) : void 0
    }
  },
  5413: (SS, HS, gS) => {
    var tS = gS(5415);

    function bS(SS, HS) {
      if ("function" != typeof SS || null != HS && "function" != typeof HS) throw new TypeError("Expected a function");
      var gS = function() {
        var tS = arguments,
          bS = HS ? HS.apply(this, tS) : tS[0],
          XS = gS.cache;
        if (XS.has(bS)) return XS.get(bS);
        var xS = SS.apply(this, tS);
        return gS.cache = XS.set(bS, xS) || XS, xS
      };
      return gS.cache = new(bS.Cache || tS), gS
    }
    bS.Cache = tS, SS.exports = bS
  },
  6368: (SS, HS, gS) => {
    var tS = gS(6353),
      bS = gS(6372),
      XS = gS(6042);
    SS.exports = function(SS) {
      return SS && SS.length ? tS(SS, XS, bS) : void 0
    }
  },
  6226: SS => {
    SS.exports = function() {}
  },
  5292: (SS, HS, gS) => {
    var tS = gS(5300);
    SS.exports = function() {
      return tS.Date.now()
    }
  },
  6051: (SS, HS, gS) => {
    var tS = gS(6060),
      bS = gS(6062),
      XS = gS(5391),
      xS = gS(5634);
    SS.exports = function(SS) {
      return XS(SS) ? tS(xS(SS)) : bS(SS)
    }
  },
  5679: (SS, HS, gS) => {
    var tS = gS(5685)();
    SS.exports = tS
  },
  6537: (SS, HS, gS) => {
    var tS = gS(5837),
      bS = gS(5752),
      XS = gS(6542),
      xS = gS(5351),
      NS = gS(5692);
    SS.exports = function(SS, HS, gS) {
      var qS = xS(SS) ? tS : XS;
      return gS && NS(SS, HS, gS) && (HS = void 0), qS(SS, bS(HS, 3))
    }
  },
  5723: (SS, HS, gS) => {
    var tS = gS(5725),
      bS = gS(5748),
      XS = gS(6109),
      xS = gS(5692),
      NS = XS((function(SS, HS) {
        if (null == SS) return [];
        var gS = HS.length;
        return gS > 1 && xS(SS, HS[0], HS[1]) ? HS = [] : gS > 2 && xS(HS[0], HS[1], HS[2]) && (HS = [HS[0]]), bS(SS, tS(HS, 1), [])
      }));
    SS.exports = NS
  },
  5902: SS => {
    SS.exports = function() {
      return []
    }
  },
  5926: SS => {
    SS.exports = function() {
      return !1
    }
  },
  5266: (SS, HS, gS) => {
    var tS = gS(5274),
      bS = gS(5283);
    SS.exports = function(SS, HS, gS) {
      var XS = !0,
        xS = !0;
      if ("function" != typeof SS) throw new TypeError("Expected a function");
      return bS(gS) && (XS = "leading" in gS ? !!gS.leading : XS, xS = "trailing" in gS ? !!gS.trailing : xS), tS(SS, HS, {
        leading: XS,
        maxWait: HS,
        trailing: xS
      })
    }
  },
  5715: (SS, HS, gS) => {
    var tS = gS(5307),
      bS = 1 / 0;
    SS.exports = function(SS) {
      return SS ? (SS = tS(SS)) === bS || SS === -1 / 0 ? 17976931348623157e292 * (SS < 0 ? -1 : 1) : SS === SS ? SS : 0 : 0 === SS ? SS : 0
    }
  },
  6566: (SS, HS, gS) => {
    var tS = gS(5715);
    SS.exports = function(SS) {
      var HS = tS(SS),
        gS = HS % 1;
      return HS === HS ? gS ? HS - gS : HS : 0
    }
  },
  5307: (SS, HS, gS) => {
    var tS = gS(5310),
      bS = gS(5283),
      XS = gS(5319),
      xS = /^[-+]0x[0-9a-f]+$/i,
      NS = /^0b[01]+$/i,
      qS = /^0o[0-7]+$/i,
      uS = parseInt;
    SS.exports = function(SS) {
      if ("number" == typeof SS) return SS;
      if (XS(SS)) return NaN;
      if (bS(SS)) {
        var HS = "function" == typeof SS.valueOf ? SS.valueOf() : SS;
        SS = bS(HS) ? HS + "" : HS
      }
      if ("string" != typeof SS) return 0 === SS ? SS : +SS;
      SS = tS(SS);
      var gS = NS.test(SS);
      return gS || qS.test(SS) ? uS(SS.slice(2), gS ? 2 : 8) : xS.test(SS) ? NaN : +SS
    }
  },
  5615: (SS, HS, gS) => {
    var tS = gS(5621);
    SS.exports = function(SS) {
      return null == SS ? "" : tS(SS)
    }
  },
  6178: (SS, HS, gS) => {
    var tS = gS(5752),
      bS = gS(6187);
    SS.exports = function(SS, HS) {
      return SS && SS.length ? bS(SS, tS(HS, 2)) : []
    }
  },
  6245: (SS, HS, gS) => {
    var tS = gS(6247)("toUpperCase");
    SS.exports = tS
  },
  6300: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => VH
    });
    var tS = gS(64),
      bS = gS(5116),
      XS = gS.n(bS);
    const {
      getOwnPropertyNames: xS,
      getOwnPropertySymbols: NS
    } = Object, {
      hasOwnProperty: qS
    } = Object.prototype;

    function uS(SS, HS) {
      return function(gS, tS, bS) {
        return SS(gS, tS, bS) && HS(gS, tS, bS)
      }
    }

    function IS(SS) {
      return function(HS, gS, tS) {
        if (!HS || !gS || "object" !== typeof HS || "object" !== typeof gS) return SS(HS, gS, tS);
        const {
          cache: bS
        } = tS, XS = bS.get(HS), xS = bS.get(gS);
        if (XS && xS) return XS === gS && xS === HS;
        bS.set(HS, gS), bS.set(gS, HS);
        const NS = SS(HS, gS, tS);
        return bS.delete(HS), bS.delete(gS), NS
      }
    }

    function fS(SS) {
      return xS(SS).concat(NS(SS))
    }
    const kS = Object.hasOwn || ((SS, HS) => qS.call(SS, HS));

    function aS(SS, HS) {
      return SS === HS || !SS && !HS && SS !== SS && HS !== HS
    }
    const {
      getOwnPropertyDescriptor: KS,
      keys: jS
    } = Object;

    function GS(SS, HS) {
      return SS.byteLength === HS.byteLength && vS(new Uint8Array(SS), new Uint8Array(HS))
    }

    function CS(SS, HS, gS) {
      let tS = SS.length;
      if (HS.length !== tS) return !1;
      for (; tS-- > 0;)
        if (!gS.equals(SS[tS], HS[tS], tS, tS, SS, HS, gS)) return !1;
      return !0
    }

    function nS(SS, HS) {
      return SS.byteLength === HS.byteLength && vS(new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength), new Uint8Array(HS.buffer, HS.byteOffset, HS.byteLength))
    }

    function PS(SS, HS) {
      return aS(SS.getTime(), HS.getTime())
    }

    function QS(SS, HS) {
      return SS.name === HS.name && SS.message === HS.message && SS.cause === HS.cause && SS.stack === HS.stack
    }

    function DS(SS, HS) {
      return SS === HS
    }

    function wS(SS, HS, gS) {
      const tS = SS.size;
      if (tS !== HS.size) return !1;
      if (!tS) return !0;
      const bS = new Array(tS),
        XS = SS.entries();
      let xS, NS, qS = 0;
      for (;
        (xS = XS.next()) && !xS.done;) {
        const tS = HS.entries();
        let XS = !1,
          uS = 0;
        for (;
          (NS = tS.next()) && !NS.done;) {
          if (bS[uS]) {
            uS++;
            continue
          }
          const tS = xS.value,
            IS = NS.value;
          if (gS.equals(tS[0], IS[0], qS, uS, SS, HS, gS) && gS.equals(tS[1], IS[1], tS[0], IS[0], SS, HS, gS)) {
            XS = bS[uS] = !0;
            break
          }
          uS++
        }
        if (!XS) return !1;
        qS++
      }
      return !0
    }
    const hS = aS;

    function ZS(SS, HS, gS) {
      const tS = jS(SS);
      let bS = tS.length;
      if (jS(HS).length !== bS) return !1;
      for (; bS-- > 0;)
        if (!LS(SS, HS, gS, tS[bS])) return !1;
      return !0
    }

    function JS(SS, HS, gS) {
      const tS = fS(SS);
      let bS, XS, xS, NS = tS.length;
      if (fS(HS).length !== NS) return !1;
      for (; NS-- > 0;) {
        if (bS = tS[NS], !LS(SS, HS, gS, bS)) return !1;
        if (XS = KS(SS, bS), xS = KS(HS, bS), (XS || xS) && (!XS || !xS || XS.configurable !== xS.configurable || XS.enumerable !== xS.enumerable || XS.writable !== xS.writable)) return !1
      }
      return !0
    }

    function OS(SS, HS) {
      return aS(SS.valueOf(), HS.valueOf())
    }

    function dS(SS, HS) {
      return SS.source === HS.source && SS.flags === HS.flags
    }

    function cS(SS, HS, gS) {
      const tS = SS.size;
      if (tS !== HS.size) return !1;
      if (!tS) return !0;
      const bS = new Array(tS),
        XS = SS.values();
      let xS, NS;
      for (;
        (xS = XS.next()) && !xS.done;) {
        const tS = HS.values();
        let XS = !1,
          qS = 0;
        for (;
          (NS = tS.next()) && !NS.done;) {
          if (!bS[qS] && gS.equals(xS.value, NS.value, xS.value, NS.value, SS, HS, gS)) {
            XS = bS[qS] = !0;
            break
          }
          qS++
        }
        if (!XS) return !1
      }
      return !0
    }

    function vS(SS, HS) {
      let gS = SS.byteLength;
      if (HS.byteLength !== gS || SS.byteOffset !== HS.byteOffset) return !1;
      for (; gS-- > 0;)
        if (SS[gS] !== HS[gS]) return !1;
      return !0
    }

    function ES(SS, HS) {
      return SS.hostname === HS.hostname && SS.pathname === HS.pathname && SS.protocol === HS.protocol && SS.port === HS.port && SS.hash === HS.hash && SS.username === HS.username && SS.password === HS.password
    }

    function LS(SS, HS, gS, tS) {
      return !("_owner" !== tS && "__o" !== tS && "__v" !== tS || !SS.$$typeof && !HS.$$typeof) || kS(HS, tS) && gS.equals(SS[tS], HS[tS], tS, tS, SS, HS, gS)
    }
    const YS = {
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
      AS = Object.prototype.toString;

    function yS(SS) {
      let {
        areArrayBuffersEqual: HS,
        areArraysEqual: gS,
        areDataViewsEqual: tS,
        areDatesEqual: bS,
        areErrorsEqual: XS,
        areFunctionsEqual: xS,
        areMapsEqual: NS,
        areNumbersEqual: qS,
        areObjectsEqual: uS,
        arePrimitiveWrappersEqual: IS,
        areRegExpsEqual: fS,
        areSetsEqual: kS,
        areTypedArraysEqual: aS,
        areUrlsEqual: KS,
        unknownTagComparators: jS
      } = SS;
      return function(SS, GS, CS) {
        if (SS === GS) return !0;
        if (null == SS || null == GS) return !1;
        const nS = typeof SS;
        if (nS !== typeof GS) return !1;
        if ("object" !== nS) return "number" === nS ? qS(SS, GS, CS) : "function" === nS && xS(SS, GS, CS);
        const PS = SS.constructor;
        if (PS !== GS.constructor) return !1;
        if (PS === Object) return uS(SS, GS, CS);
        if (Array.isArray(SS)) return gS(SS, GS, CS);
        if (PS === Date) return bS(SS, GS, CS);
        if (PS === RegExp) return fS(SS, GS, CS);
        if (PS === Map) return NS(SS, GS, CS);
        if (PS === Set) return kS(SS, GS, CS);
        const QS = AS.call(SS);
        if ("[object Date]" === QS) return bS(SS, GS, CS);
        if ("[object RegExp]" === QS) return fS(SS, GS, CS);
        if ("[object Map]" === QS) return NS(SS, GS, CS);
        if ("[object Set]" === QS) return kS(SS, GS, CS);
        if ("[object Object]" === QS) return "function" !== typeof SS.then && "function" !== typeof GS.then && uS(SS, GS, CS);
        if ("[object URL]" === QS) return KS(SS, GS, CS);
        if ("[object Error]" === QS) return XS(SS, GS, CS);
        if ("[object Arguments]" === QS) return uS(SS, GS, CS);
        if (YS[QS]) return aS(SS, GS, CS);
        if ("[object ArrayBuffer]" === QS) return HS(SS, GS, CS);
        if ("[object DataView]" === QS) return tS(SS, GS, CS);
        if ("[object Boolean]" === QS || "[object Number]" === QS || "[object String]" === QS) return IS(SS, GS, CS);
        if (jS) {
          let HS = jS[QS];
          if (!HS) {
            const gS = null != (DS = SS) ? DS[Symbol.toStringTag] : void 0;
            gS && (HS = jS[gS])
          }
          if (HS) return HS(SS, GS, CS)
        }
        var DS;
        return !1
      }
    }
    const VS = iS();
    iS({
      strict: !0
    }), iS({
      circular: !0
    }), iS({
      circular: !0,
      strict: !0
    }), iS({
      createInternalComparator: () => aS
    }), iS({
      strict: !0,
      createInternalComparator: () => aS
    }), iS({
      circular: !0,
      createInternalComparator: () => aS
    }), iS({
      circular: !0,
      createInternalComparator: () => aS,
      strict: !0
    });

    function iS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: HS = !1,
        createInternalComparator: gS,
        createState: tS,
        strict: bS = !1
      } = SS, XS = function(SS) {
        let {
          circular: HS,
          createCustomConfig: gS,
          strict: tS
        } = SS, bS = {
          areArrayBuffersEqual: GS,
          areArraysEqual: tS ? JS : CS,
          areDataViewsEqual: nS,
          areDatesEqual: PS,
          areErrorsEqual: QS,
          areFunctionsEqual: DS,
          areMapsEqual: tS ? uS(wS, JS) : wS,
          areNumbersEqual: hS,
          areObjectsEqual: tS ? JS : ZS,
          arePrimitiveWrappersEqual: OS,
          areRegExpsEqual: dS,
          areSetsEqual: tS ? uS(cS, JS) : cS,
          areTypedArraysEqual: tS ? uS(vS, JS) : vS,
          areUrlsEqual: ES,
          unknownTagComparators: void 0
        };
        if (gS && (bS = Object.assign({}, bS, gS(bS))), HS) {
          const SS = IS(bS.areArraysEqual),
            HS = IS(bS.areMapsEqual),
            gS = IS(bS.areObjectsEqual),
            tS = IS(bS.areSetsEqual);
          bS = Object.assign({}, bS, {
            areArraysEqual: SS,
            areMapsEqual: HS,
            areObjectsEqual: gS,
            areSetsEqual: tS
          })
        }
        return bS
      }(SS), xS = yS(XS);
      var NS;
      return function(SS) {
        let {
          circular: HS,
          comparator: gS,
          createState: tS,
          equals: bS,
          strict: XS
        } = SS;
        if (tS) return function(SS, xS) {
          const {
            cache: NS = (HS ? new WeakMap : void 0),
            meta: qS
          } = tS();
          return gS(SS, xS, {
            cache: NS,
            equals: bS,
            meta: qS,
            strict: XS
          })
        };
        if (HS) return function(SS, HS) {
          return gS(SS, HS, {
            cache: new WeakMap,
            equals: bS,
            meta: void 0,
            strict: XS
          })
        };
        const xS = {
          cache: void 0,
          equals: bS,
          meta: void 0,
          strict: XS
        };
        return function(SS, HS) {
          return gS(SS, HS, xS)
        }
      }({
        circular: HS,
        comparator: xS,
        createState: tS,
        equals: gS ? gS(xS) : (NS = xS, function(SS, HS, gS, tS, bS, XS, xS) {
          return NS(SS, HS, xS)
        }),
        strict: bS
      })
    }

    function WS(SS) {
      var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gS = -1;
      requestAnimationFrame((function tS(bS) {
        gS < 0 && (gS = bS), bS - gS > HS ? (SS(bS), gS = -1) : function(SS) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(SS)
        }(tS)
      }))
    }

    function zS(SS) {
      return zS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, zS(SS)
    }

    function US(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return pS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return pS(SS, HS)
      }(SS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function sS() {
      var SS = function() {
          return null
        },
        HS = !1,
        gS = function gS(tS) {
          if (!HS) {
            if (Array.isArray(tS)) {
              if (!tS.length) return;
              var bS = US(tS),
                XS = bS[0],
                xS = bS.slice(1);
              return "number" === typeof XS ? void WS(gS.bind(null, xS), XS) : (gS(XS), void WS(gS.bind(null, xS)))
            }
            "object" === zS(tS) && SS(tS), "function" === typeof tS && tS()
          }
        };
      return {
        stop: function() {
          HS = !0
        },
        start: function(SS) {
          HS = !1, gS(SS)
        },
        subscribe: function(HS) {
          return SS = HS,
            function() {
              SS = function() {
                return null
              }
            }
        }
      }
    }

    function BS(SS) {
      return BS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, BS(SS)
    }

    function MS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function FS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? MS(Object(gS), !0).forEach((function(HS) {
          RS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : MS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function RS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" !== BS(SS) || null === SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" !== BS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" === BS(HS) ? HS : String(HS)
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var TS = function(SS) {
        return SS
      },
      oS = function(SS, HS) {
        return Object.keys(HS).reduce((function(gS, tS) {
          return FS(FS({}, gS), {}, RS({}, tS, SS(tS, HS[tS])))
        }), {})
      },
      lS = function(SS, HS, gS) {
        return SS.map((function(SS) {
          return "".concat((tS = SS, tS.replace(/([A-Z])/g, (function(SS) {
            return "-".concat(SS.toLowerCase())
          }))), " ").concat(HS, "ms ").concat(gS);
          var tS
        })).join(",")
      };

    function mS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || rS(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eS(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return SH(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || rS(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rS(SS, HS) {
      if (SS) {
        if ("string" === typeof SS) return SH(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        return "Object" === gS && SS.constructor && (gS = SS.constructor.name), "Map" === gS || "Set" === gS ? Array.from(SS) : "Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS) ? SH(SS, HS) : void 0
      }
    }

    function SH(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }
    var HH = 1e-4,
      gH = function(SS, HS) {
        return [0, 3 * SS, 3 * HS - 6 * SS, 3 * SS - 3 * HS + 1]
      },
      tH = function(SS, HS) {
        return SS.map((function(SS, gS) {
          return SS * Math.pow(HS, gS)
        })).reduce((function(SS, HS) {
          return SS + HS
        }))
      },
      bH = function(SS, HS) {
        return function(gS) {
          var tS = gH(SS, HS);
          return tH(tS, gS)
        }
      },
      XH = function() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        var tS = HS[0],
          bS = HS[1],
          XS = HS[2],
          xS = HS[3];
        if (1 === HS.length) switch (HS[0]) {
          case "linear":
            tS = 0, bS = 0, XS = 1, xS = 1;
            break;
          case "ease":
            tS = .25, bS = .1, XS = .25, xS = 1;
            break;
          case "ease-in":
            tS = .42, bS = 0, XS = 1, xS = 1;
            break;
          case "ease-out":
            tS = .42, bS = 0, XS = .58, xS = 1;
            break;
          case "ease-in-out":
            tS = 0, bS = 0, XS = .58, xS = 1;
            break;
          default:
            var NS = HS[0].split("(");
            if ("cubic-bezier" === NS[0] && 4 === NS[1].split(")")[0].split(",").length) {
              var qS = mS(NS[1].split(")")[0].split(",").map((function(SS) {
                return parseFloat(SS)
              })), 4);
              tS = qS[0], bS = qS[1], XS = qS[2], xS = qS[3]
            }
        } [tS, XS, bS, xS].every((function(SS) {
          return "number" === typeof SS && SS >= 0 && SS <= 1
        }));
        var uS, IS, fS = bH(tS, XS),
          kS = bH(bS, xS),
          aS = (uS = tS, IS = XS, function(SS) {
            var HS = gH(uS, IS),
              gS = [].concat(eS(HS.map((function(SS, HS) {
                return SS * HS
              })).slice(1)), [0]);
            return tH(gS, SS)
          }),
          KS = function(SS) {
            for (var HS, gS = SS > 1 ? 1 : SS, tS = gS, bS = 0; bS < 8; ++bS) {
              var XS = fS(tS) - gS,
                xS = aS(tS);
              if (Math.abs(XS - gS) < HH || xS < HH) return kS(tS);
              tS = (HS = tS - XS / xS) > 1 ? 1 : HS < 0 ? 0 : HS
            }
            return kS(tS)
          };
        return KS.isStepper = !1, KS
      },
      xH = function() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        var tS = HS[0];
        if ("string" === typeof tS) switch (tS) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return XH(tS);
          case "spring":
            return function() {
              var SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                HS = SS.stiff,
                gS = void 0 === HS ? 100 : HS,
                tS = SS.damping,
                bS = void 0 === tS ? 8 : tS,
                XS = SS.dt,
                xS = void 0 === XS ? 17 : XS,
                NS = function(SS, HS, tS) {
                  var XS = tS + (-(SS - HS) * gS - tS * bS) * xS / 1e3,
                    NS = tS * xS / 1e3 + SS;
                  return Math.abs(NS - HS) < HH && Math.abs(XS) < HH ? [HS, 0] : [NS, XS]
                };
              return NS.isStepper = !0, NS.dt = xS, NS
            }();
          default:
            if ("cubic-bezier" === tS.split("(")[0]) return XH(tS)
        }
        return "function" === typeof tS ? tS : null
      };

    function NH(SS) {
      return NH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, NH(SS)
    }

    function qH(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return KH(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || aH(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uH(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function IH(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? uH(Object(gS), !0).forEach((function(HS) {
          fH(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : uH(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function fH(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" !== NH(SS) || null === SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" !== NH(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" === NH(HS) ? HS : String(HS)
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function kH(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || aH(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aH(SS, HS) {
      if (SS) {
        if ("string" === typeof SS) return KH(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        return "Object" === gS && SS.constructor && (gS = SS.constructor.name), "Map" === gS || "Set" === gS ? Array.from(SS) : "Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS) ? KH(SS, HS) : void 0
      }
    }

    function KH(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }
    var jH = function(SS, HS, gS) {
        return SS + (HS - SS) * gS
      },
      GH = function(SS) {
        return SS.from !== SS.to
      },
      CH = function SS(HS, gS, tS) {
        var bS = oS((function(SS, gS) {
          if (GH(gS)) {
            var tS = kH(HS(gS.from, gS.to, gS.xG), 2),
              bS = tS[0],
              XS = tS[1];
            return IH(IH({}, gS), {}, {
              from: bS,
              xG: XS
            })
          }
          return gS
        }), gS);
        return tS < 1 ? oS((function(SS, HS) {
          return GH(HS) ? IH(IH({}, HS), {}, {
            xG: jH(HS.xG, bS[SS].xG, tS),
            from: jH(HS.from, bS[SS].from, tS)
          }) : HS
        }), gS) : SS(HS, bS, tS - 1)
      };
    const nH = function(SS, HS, gS, tS, bS) {
      var XS, xS, NS, qS, uS = (XS = SS, xS = HS, [Object.keys(XS), Object.keys(xS)].reduce((function(SS, HS) {
          return SS.filter((function(SS) {
            return HS.includes(SS)
          }))
        }))),
        IS = uS.reduce((function(gS, tS) {
          return IH(IH({}, gS), {}, fH({}, tS, [SS[tS], HS[tS]]))
        }), {}),
        fS = uS.reduce((function(gS, tS) {
          return IH(IH({}, gS), {}, fH({}, tS, {
            from: SS[tS],
            xG: 0,
            to: HS[tS]
          }))
        }), {}),
        kS = -1,
        aS = function() {
          return null
        };
      return aS = gS.isStepper ? function(tS) {
          NS || (NS = tS);
          var XS = (tS - NS) / gS.dt;
          fS = CH(gS, fS, XS), bS(IH(IH(IH({}, SS), HS), oS((function(SS, HS) {
            return HS.from
          }), fS))), NS = tS, Object.values(fS).filter(GH).length && (kS = requestAnimationFrame(aS))
        } : function(XS) {
          qS || (qS = XS);
          var xS = (XS - qS) / tS,
            NS = oS((function(SS, HS) {
              return jH.apply(void 0, qH(HS).concat([gS(xS)]))
            }), IS);
          if (bS(IH(IH(IH({}, SS), HS), NS)), xS < 1) kS = requestAnimationFrame(aS);
          else {
            var uS = oS((function(SS, HS) {
              return jH.apply(void 0, qH(HS).concat([gS(1)]))
            }), IS);
            bS(IH(IH(IH({}, SS), HS), uS))
          }
        },
        function() {
          return requestAnimationFrame(aS),
            function() {
              cancelAnimationFrame(kS)
            }
        }
    };

    function PH(SS) {
      return PH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, PH(SS)
    }
    var QH = ["children", "Qa", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function DH(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS, tS, bS = {},
          XS = Object.keys(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || (bS[gS] = SS[gS]);
        return bS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function wH(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return hH(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return hH(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return hH(SS, HS)
      }(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hH(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function ZH(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function JH(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? ZH(Object(gS), !0).forEach((function(HS) {
          OH(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : ZH(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function OH(SS, HS, gS) {
      return (HS = cH(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function dH(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, cH(tS.key), tS)
      }
    }

    function cH(SS) {
      var HS = function(SS, HS) {
        if ("object" !== PH(SS) || null === SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" !== PH(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" === PH(HS) ? HS : String(HS)
    }

    function vH(SS, HS) {
      return vH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, vH(SS, HS)
    }

    function EH(SS) {
      var HS = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (SS) {
          return !1
        }
      }();
      return function() {
        var gS, tS = AH(SS);
        if (HS) {
          var bS = AH(this).constructor;
          gS = Reflect.construct(tS, arguments, bS)
        } else gS = tS.apply(this, arguments);
        return LH(this, gS)
      }
    }

    function LH(SS, HS) {
      if (HS && ("object" === PH(HS) || "function" === typeof HS)) return HS;
      if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
      return YH(SS)
    }

    function YH(SS) {
      if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return SS
    }

    function AH(SS) {
      return AH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, AH(SS)
    }
    var yH = function(SS) {
      ! function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && vH(SS, HS)
      }(xS, SS);
      var HS, gS, bS, XS = EH(xS);

      function xS(SS, HS) {
        var gS;
        ! function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, xS);
        var tS = (gS = XS.call(this, SS, HS)).props,
          bS = tS.isActive,
          NS = tS.attributeName,
          qS = tS.from,
          uS = tS.to,
          IS = tS.steps,
          fS = tS.children,
          kS = tS.duration;
        if (gS.handleStyleChange = gS.handleStyleChange.bind(YH(gS)), gS.changeStyle = gS.changeStyle.bind(YH(gS)), !bS || kS <= 0) return gS.state = {
          style: {}
        }, "function" === typeof fS && (gS.state = {
          style: uS
        }), LH(gS);
        if (IS && IS.length) gS.state = {
          style: IS[0].style
        };
        else if (qS) {
          if ("function" === typeof fS) return gS.state = {
            style: qS
          }, LH(gS);
          gS.state = {
            style: NS ? OH({}, NS, qS) : qS
          }
        } else gS.state = {
          style: {}
        };
        return gS
      }
      return HS = xS, (gS = [{
        key: "componentDidMount",
        value: function() {
          var SS = this.props,
            HS = SS.isActive,
            gS = SS.canBegin;
          this.mounted = !0, HS && gS && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(SS) {
          var HS = this.props,
            gS = HS.isActive,
            tS = HS.canBegin,
            bS = HS.attributeName,
            XS = HS.shouldReAnimate,
            xS = HS.to,
            NS = HS.from,
            qS = this.state.style;
          if (tS)
            if (gS) {
              if (!(VS(SS.to, xS) && SS.canBegin && SS.isActive)) {
                var uS = !SS.canBegin || !SS.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var IS = uS || XS ? NS : SS.to;
                if (this.state && qS) {
                  var fS = {
                    style: bS ? OH({}, bS, IS) : IS
                  };
                  (bS && qS[bS] !== IS || !bS && qS !== IS) && this.setState(fS)
                }
                this.runAnimation(JH(JH({}, this.props), {}, {
                  from: IS,
                  Qa: 0
                }))
              }
            } else {
              var kS = {
                style: bS ? OH({}, bS, xS) : xS
              };
              this.state && qS && (bS && qS[bS] !== xS || !bS && qS !== xS) && this.setState(kS)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var SS = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), SS && SS()
        }
      }, {
        key: "handleStyleChange",
        value: function(SS) {
          this.changeStyle(SS)
        }
      }, {
        key: "changeStyle",
        value: function(SS) {
          this.mounted && this.setState({
            style: SS
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(SS) {
          var HS = this,
            gS = SS.from,
            tS = SS.to,
            bS = SS.duration,
            XS = SS.easing,
            xS = SS.Qa,
            NS = SS.onAnimationEnd,
            qS = SS.onAnimationStart,
            uS = nH(gS, tS, xH(XS), bS, this.changeStyle);
          this.manager.start([qS, xS, function() {
            HS.stopJSAnimation = uS()
          }, bS, NS])
        }
      }, {
        key: "runStepAnimation",
        value: function(SS) {
          var HS = this,
            gS = SS.steps,
            tS = SS.Qa,
            bS = SS.onAnimationStart,
            XS = gS[0],
            xS = XS.style,
            NS = XS.duration,
            qS = void 0 === NS ? 0 : NS;
          return this.manager.start([bS].concat(wH(gS.reduce((function(SS, tS, bS) {
            if (0 === bS) return SS;
            var XS = tS.duration,
              xS = tS.easing,
              NS = void 0 === xS ? "ease" : xS,
              qS = tS.style,
              uS = tS.properties,
              IS = tS.onAnimationEnd,
              fS = bS > 0 ? gS[bS - 1] : tS,
              kS = uS || Object.keys(qS);
            if ("function" === typeof NS || "spring" === NS) return [].concat(wH(SS), [HS.runJSAnimation.bind(HS, {
              from: fS.style,
              to: qS,
              duration: XS,
              easing: NS
            }), XS]);
            var aS = lS(kS, XS, NS),
              KS = JH(JH(JH({}, fS.style), qS), {}, {
                transition: aS
              });
            return [].concat(wH(SS), [KS, XS, IS]).filter(TS)
          }), [xS, Math.max(qS, tS)])), [SS.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(SS) {
          this.manager || (this.manager = sS());
          var HS = SS.Qa,
            gS = SS.duration,
            tS = SS.attributeName,
            bS = SS.to,
            XS = SS.easing,
            xS = SS.onAnimationStart,
            NS = SS.onAnimationEnd,
            qS = SS.steps,
            uS = SS.children,
            IS = this.manager;
          if (this.unSubscribe = IS.subscribe(this.handleStyleChange), "function" !== typeof XS && "function" !== typeof uS && "spring" !== XS)
            if (qS.length > 1) this.runStepAnimation(SS);
            else {
              var fS = tS ? OH({}, tS, bS) : bS,
                kS = lS(Object.keys(fS), gS, XS);
              IS.start([xS, HS, JH(JH({}, fS), {}, {
                transition: kS
              }), gS, NS])
            }
          else this.runJSAnimation(SS)
        }
      }, {
        key: "render",
        value: function() {
          var SS = this.props,
            HS = SS.children,
            gS = (SS.Qa, SS.duration),
            bS = (SS.attributeName, SS.easing, SS.isActive),
            XS = (SS.steps, SS.from, SS.to, SS.canBegin, SS.onAnimationEnd, SS.shouldReAnimate, SS.onAnimationReStart, DH(SS, QH)),
            xS = tS.Children.count(HS),
            NS = this.state.style;
          if ("function" === typeof HS) return HS(NS);
          if (!bS || 0 === xS || gS <= 0) return HS;
          var qS = function(SS) {
            var HS = SS.props,
              gS = HS.style,
              bS = void 0 === gS ? {} : gS,
              xS = HS.className;
            return (0, tS.cloneElement)(SS, JH(JH({}, XS), {}, {
              style: JH(JH({}, bS), NS),
              className: xS
            }))
          };
          return 1 === xS ? qS(tS.Children.only(HS)) : tS.createElement("div", null, tS.Children.map(HS, (function(SS) {
            return qS(SS)
          })))
        }
      }]) && dH(HS.prototype, gS), bS && dH(HS, bS), Object.defineProperty(HS, "prototype", {
        writable: !1
      }), xS
    }(tS.PureComponent);
    yH.displayName = "Animate", yH.defaultProps = {
      Qa: 0,
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
    }, yH.propTypes = {
      from: XS().oneOfType([XS().object, XS().string]),
      to: XS().oneOfType([XS().object, XS().string]),
      attributeName: XS().string,
      duration: XS().number,
      Qa: XS().number,
      easing: XS().oneOfType([XS().string, XS().func]),
      steps: XS().arrayOf(XS().shape({
        duration: XS().number.isRequired,
        style: XS().object.isRequired,
        easing: XS().oneOfType([XS().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), XS().func]),
        properties: XS().arrayOf("string"),
        onAnimationEnd: XS().func
      })),
      children: XS().oneOfType([XS().node, XS().func]),
      isActive: XS().bool,
      canBegin: XS().bool,
      onAnimationEnd: XS().func,
      shouldReAnimate: XS().bool,
      onAnimationStart: XS().func,
      onAnimationReStart: XS().func
    };
    const VH = yH
  },
  6581: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => US
    });
    var tS, bS = gS(64),
      XS = gS(5259),
      xS = gS(6300),
      NS = gS(5458),
      qS = gS.n(NS),
      uS = gS(6347),
      IS = gS.n(uS),
      fS = gS(5639),
      kS = gS.n(fS),
      aS = gS(5360),
      KS = gS.n(aS),
      jS = gS(6391),
      GS = gS.n(jS),
      CS = gS(6572),
      nS = gS(6289),
      PS = gS(6152),
      QS = gS(6479),
      DS = gS(6161),
      wS = gS(5340),
      hS = gS(6315),
      ZS = gS(5650),
      JS = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      OS = ["key"];

    function dS(SS) {
      return dS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, dS(SS)
    }

    function cS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function vS() {
      return vS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, vS.apply(this, arguments)
    }

    function ES(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function LS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? ES(Object(gS), !0).forEach((function(HS) {
          WS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : ES(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function YS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, zS(tS.key), tS)
      }
    }

    function AS(SS, HS, gS) {
      return HS = VS(HS),
        function(SS, HS) {
          if (HS && ("object" === dS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, yS() ? Reflect.construct(HS, gS || [], VS(SS).constructor) : HS.apply(SS, gS))
    }

    function yS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (yS = function() {
        return !!SS
      })()
    }

    function VS(SS) {
      return VS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, VS(SS)
    }

    function iS(SS, HS) {
      return iS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, iS(SS, HS)
    }

    function WS(SS, HS, gS) {
      return (HS = zS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function zS(SS) {
      var HS = function(SS, HS) {
        if ("object" != dS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != dS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == dS(HS) ? HS : HS + ""
    }
    var US = function(SS) {
      function HS() {
        var SS;
        ! function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS);
        for (var gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        return WS(SS = AS(this, HS, [].concat(tS)), "state", {
          isAnimationFinished: !0
        }), WS(SS, "id", (0, wS.y)("recharts-area-")), WS(SS, "handleAnimationEnd", (function() {
          var HS = SS.props.onAnimationEnd;
          SS.setState({
            isAnimationFinished: !0
          }), qS()(HS) && HS()
        })), WS(SS, "handleAnimationStart", (function() {
          var HS = SS.props.onAnimationStart;
          SS.setState({
            isAnimationFinished: !1
          }), qS()(HS) && HS()
        })), SS
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && iS(SS, HS)
      }(HS, SS), gS = HS, tS = [{
        key: "renderDots",
        value: function(SS, gS, tS) {
          var XS = this.props.isAnimationActive,
            xS = this.state.isAnimationFinished;
          if (XS && !xS) return null;
          var NS = this.props,
            qS = NS.dot,
            uS = NS.points,
            IS = NS.dataKey,
            fS = (0, ZS.b)(this.props, !1),
            kS = (0, ZS.b)(qS, !0),
            aS = uS.map((function(SS, gS) {
              var tS = LS(LS(LS({
                key: "dot-".concat(gS),
                r: 3
              }, fS), kS), {}, {
                index: gS,
                cx: SS.x,
                cy: SS.y,
                dataKey: IS,
                value: SS.value,
                payload: SS.payload,
                points: uS
              });
              return HS.renderDotItem(qS, tS)
            })),
            KS = {
              clipPath: SS ? "url(#clipPath-".concat(gS ? "" : "dots-").concat(tS, ")") : null
            };
          return bS.createElement(PS.d, vS({
            className: "recharts-area-dots"
          }, KS), aS)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(SS) {
          var HS = this.props,
            gS = HS.baseLine,
            tS = HS.points,
            XS = HS.strokeWidth,
            xS = tS[0].x,
            NS = tS[tS.length - 1].x,
            qS = SS * Math.abs(xS - NS),
            uS = IS()(tS.map((function(SS) {
              return SS.y || 0
            })));
          return (0, wS.t)(gS) && "number" === typeof gS ? uS = Math.max(gS, uS) : gS && Array.isArray(gS) && gS.length && (uS = Math.max(IS()(gS.map((function(SS) {
            return SS.y || 0
          }))), uS)), (0, wS.t)(uS) ? bS.createElement("rect", {
            x: xS < NS ? xS : xS - qS,
            y: 0,
            width: qS,
            height: Math.floor(uS + (XS ? parseInt("".concat(XS), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(SS) {
          var HS = this.props,
            gS = HS.baseLine,
            tS = HS.points,
            XS = HS.strokeWidth,
            xS = tS[0].y,
            NS = tS[tS.length - 1].y,
            qS = SS * Math.abs(xS - NS),
            uS = IS()(tS.map((function(SS) {
              return SS.x || 0
            })));
          return (0, wS.t)(gS) && "number" === typeof gS ? uS = Math.max(gS, uS) : gS && Array.isArray(gS) && gS.length && (uS = Math.max(IS()(gS.map((function(SS) {
            return SS.x || 0
          }))), uS)), (0, wS.t)(uS) ? bS.createElement("rect", {
            x: 0,
            y: xS < NS ? xS : xS - qS,
            width: uS + (XS ? parseInt("".concat(XS), 10) : 1),
            height: Math.floor(qS)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(SS) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(SS) : this.renderHorizontalRect(SS)
        }
      }, {
        key: "renderAreaStatically",
        value: function(SS, HS, gS, tS) {
          var XS = this.props,
            xS = XS.layout,
            NS = XS.type,
            qS = XS.stroke,
            uS = XS.connectNulls,
            IS = XS.isRange,
            fS = (XS.ref, cS(XS, JS));
          return bS.createElement(PS.d, {
            clipPath: gS ? "url(#clipPath-".concat(tS, ")") : null
          }, bS.createElement(CS.d, vS({}, (0, ZS.b)(fS, !0), {
            points: SS,
            connectNulls: uS,
            type: NS,
            baseLine: HS,
            layout: xS,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== qS && bS.createElement(CS.d, vS({}, (0, ZS.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: xS,
            type: NS,
            connectNulls: uS,
            fill: "none",
            points: SS
          })), "none" !== qS && IS && bS.createElement(CS.d, vS({}, (0, ZS.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: xS,
            type: NS,
            connectNulls: uS,
            fill: "none",
            points: HS
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(SS, HS) {
          var gS = this,
            tS = this.props,
            XS = tS.points,
            NS = tS.baseLine,
            qS = tS.isAnimationActive,
            uS = tS.animationBegin,
            IS = tS.animationDuration,
            fS = tS.animationEasing,
            aS = tS.animationId,
            jS = this.state,
            GS = jS.prevPoints,
            CS = jS.prevBaseLine;
          return bS.createElement(xS.c, {
            Qa: uS,
            duration: IS,
            isActive: qS,
            easing: fS,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(aS),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(tS) {
            var xS = tS.t;
            if (GS) {
              var qS, uS = GS.length / XS.length,
                IS = XS.map((function(SS, HS) {
                  var gS = Math.floor(HS * uS);
                  if (GS[gS]) {
                    var tS = GS[gS],
                      bS = (0, wS.p)(tS.x, SS.x),
                      XS = (0, wS.p)(tS.y, SS.y);
                    return LS(LS({}, SS), {}, {
                      x: bS(xS),
                      y: XS(xS)
                    })
                  }
                  return SS
                }));
              return qS = (0, wS.t)(NS) && "number" === typeof NS ? (0, wS.p)(CS, NS)(xS) : kS()(NS) || KS()(NS) ? (0, wS.p)(CS, 0)(xS) : NS.map((function(SS, HS) {
                var gS = Math.floor(HS * uS);
                if (CS[gS]) {
                  var tS = CS[gS],
                    bS = (0, wS.p)(tS.x, SS.x),
                    XS = (0, wS.p)(tS.y, SS.y);
                  return LS(LS({}, SS), {}, {
                    x: bS(xS),
                    y: XS(xS)
                  })
                }
                return SS
              })), gS.renderAreaStatically(IS, qS, SS, HS)
            }
            return bS.createElement(PS.d, null, bS.createElement("defs", null, bS.createElement("clipPath", {
              id: "animationClipPath-".concat(HS)
            }, gS.renderClipRect(xS))), bS.createElement(PS.d, {
              clipPath: "url(#animationClipPath-".concat(HS, ")")
            }, gS.renderAreaStatically(XS, NS, SS, HS)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(SS, HS) {
          var gS = this.props,
            tS = gS.points,
            bS = gS.baseLine,
            XS = gS.isAnimationActive,
            xS = this.state,
            NS = xS.prevPoints,
            qS = xS.prevBaseLine,
            uS = xS.totalLength;
          return XS && tS && tS.length && (!NS && uS > 0 || !GS()(NS, tS) || !GS()(qS, bS)) ? this.renderAreaWithAnimation(SS, HS) : this.renderAreaStatically(tS, bS, SS, HS)
        }
      }, {
        key: "render",
        value: function() {
          var SS, HS = this.props,
            gS = HS.hide,
            tS = HS.dot,
            xS = HS.points,
            NS = HS.className,
            qS = HS.top,
            uS = HS.left,
            IS = HS.xAxis,
            fS = HS.yAxis,
            aS = HS.width,
            KS = HS.height,
            jS = HS.isAnimationActive,
            GS = HS.id;
          if (gS || !xS || !xS.length) return null;
          var CS = this.state.isAnimationFinished,
            nS = 1 === xS.length,
            DS = (0, XS.b)("recharts-area", NS),
            wS = IS && IS.allowDataOverflow,
            hS = fS && fS.allowDataOverflow,
            JS = wS || hS,
            OS = kS()(GS) ? this.id : GS,
            dS = null !== (SS = (0, ZS.b)(tS, !1)) && void 0 !== SS ? SS : {
              r: 3,
              strokeWidth: 2
            },
            cS = dS.r,
            vS = void 0 === cS ? 3 : cS,
            ES = dS.strokeWidth,
            LS = void 0 === ES ? 2 : ES,
            YS = ((0, ZS.n)(tS) ? tS : {}).clipDot,
            AS = void 0 === YS || YS,
            yS = 2 * vS + LS;
          return bS.createElement(PS.d, {
            className: DS
          }, wS || hS ? bS.createElement("defs", null, bS.createElement("clipPath", {
            id: "clipPath-".concat(OS)
          }, bS.createElement("rect", {
            x: wS ? uS : uS - aS / 2,
            y: hS ? qS : qS - KS / 2,
            width: wS ? aS : 2 * aS,
            height: hS ? KS : 2 * KS
          })), !AS && bS.createElement("clipPath", {
            id: "clipPath-dots-".concat(OS)
          }, bS.createElement("rect", {
            x: uS - yS / 2,
            y: qS - yS / 2,
            width: aS + yS,
            height: KS + yS
          }))) : null, nS ? null : this.renderArea(JS, OS), (tS || nS) && this.renderDots(JS, AS, OS), (!jS || CS) && QS.b.renderCallByParent(this.props, xS))
        }
      }], NS = [{
        key: "getDerivedStateFromProps",
        value: function(SS, HS) {
          return SS.animationId !== HS.prevAnimationId ? {
            prevAnimationId: SS.animationId,
            curPoints: SS.points,
            curBaseLine: SS.baseLine,
            prevPoints: HS.curPoints,
            prevBaseLine: HS.curBaseLine
          } : SS.points !== HS.curPoints || SS.baseLine !== HS.curBaseLine ? {
            curPoints: SS.points,
            curBaseLine: SS.baseLine
          } : null
        }
      }], tS && YS(gS.prototype, tS), NS && YS(gS, NS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, tS, NS
    }(bS.PureComponent);
    tS = US, WS(US, "displayName", "Area"), WS(US, "defaultProps", {
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
      isAnimationActive: !DS.b.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), WS(US, "getBaseValue", (function(SS, HS, gS, tS) {
      var bS = SS.layout,
        XS = SS.baseValue,
        xS = HS.props.baseValue,
        NS = null !== xS && void 0 !== xS ? xS : XS;
      if ((0, wS.t)(NS) && "number" === typeof NS) return NS;
      var qS = "horizontal" === bS ? tS : gS,
        uS = qS.scale.domain();
      if ("number" === qS.type) {
        var IS = Math.max(uS[0], uS[1]),
          fS = Math.min(uS[0], uS[1]);
        return "dataMin" === NS ? fS : "dataMax" === NS || IS < 0 ? IS : Math.max(Math.min(uS[0], uS[1]), 0)
      }
      return "dataMin" === NS ? uS[0] : "dataMax" === NS ? uS[1] : uS[0]
    })), WS(US, "getComposedData", (function(SS) {
      var HS, gS = SS.props,
        bS = SS.item,
        XS = SS.xAxis,
        xS = SS.yAxis,
        NS = SS.xAxisTicks,
        qS = SS.yAxisTicks,
        uS = SS.bandSize,
        IS = SS.dataKey,
        fS = SS.stackedData,
        kS = SS.dataStartIndex,
        aS = SS.displayedData,
        KS = SS.offset,
        jS = gS.layout,
        GS = fS && fS.length,
        CS = tS.getBaseValue(gS, bS, XS, xS),
        nS = "horizontal" === jS,
        PS = !1,
        QS = aS.map((function(SS, HS) {
          var gS;
          GS ? gS = fS[kS + HS] : (gS = (0, hS.jb)(SS, IS), Array.isArray(gS) ? PS = !0 : gS = [CS, gS]);
          var tS = null == gS[1] || GS && null == (0, hS.jb)(SS, IS);
          return nS ? {
            x: (0, hS.H)({
              axis: XS,
              ticks: NS,
              bandSize: uS,
              entry: SS,
              index: HS
            }),
            y: tS ? null : xS.scale(gS[1]),
            value: gS,
            payload: SS
          } : {
            x: tS ? null : XS.scale(gS[1]),
            y: (0, hS.H)({
              axis: xS,
              ticks: qS,
              bandSize: uS,
              entry: SS,
              index: HS
            }),
            value: gS,
            payload: SS
          }
        }));
      return HS = GS || PS ? QS.map((function(SS) {
        var HS = Array.isArray(SS.value) ? SS.value[0] : null;
        return nS ? {
          x: SS.x,
          y: null != HS && null != SS.y ? xS.scale(HS) : null
        } : {
          x: null != HS ? XS.scale(HS) : null,
          y: SS.y
        }
      })) : nS ? xS.scale(CS) : XS.scale(CS), LS({
        points: QS,
        baseLine: HS,
        layout: jS,
        isRange: PS
      }, KS)
    })), WS(US, "renderDotItem", (function(SS, HS) {
      var gS;
      if (bS.isValidElement(SS)) gS = bS.cloneElement(SS, HS);
      else if (qS()(SS)) gS = SS(HS);
      else {
        var tS = (0, XS.b)("recharts-area-dot", "boolean" !== typeof SS ? SS.className : ""),
          xS = HS.key,
          NS = cS(HS, OS);
        gS = bS.createElement(nS.e, vS({}, NS, {
          key: xS,
          className: tS
        }))
      }
      return gS
    }))
  },
  6467: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => FS
    });
    var tS = gS(64),
      bS = gS(5259),
      XS = gS(6300),
      xS = gS(6391),
      NS = gS.n(xS),
      qS = gS(5639),
      uS = gS.n(qS),
      IS = gS(6152),
      fS = gS(6404),
      kS = gS(6474),
      aS = gS(6479),
      KS = gS(5340),
      jS = gS(5650),
      GS = gS(6161),
      CS = gS(6315),
      nS = gS(5667),
      PS = gS(6143),
      QS = gS(6488),
      DS = ["x", "y"];

    function wS(SS) {
      return wS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, wS(SS)
    }

    function hS() {
      return hS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, hS.apply(this, arguments)
    }

    function ZS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function JS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? ZS(Object(gS), !0).forEach((function(HS) {
          OS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : ZS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function OS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != wS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != wS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == wS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function dS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function cS(SS, HS) {
      var gS = SS.x,
        tS = SS.y,
        bS = dS(SS, DS),
        XS = "".concat(gS),
        xS = parseInt(XS, 10),
        NS = "".concat(tS),
        qS = parseInt(NS, 10),
        uS = "".concat(HS.height || bS.height),
        IS = parseInt(uS, 10),
        fS = "".concat(HS.width || bS.width),
        kS = parseInt(fS, 10);
      return JS(JS(JS(JS(JS({}, HS), bS), xS ? {
        x: xS
      } : {}), qS ? {
        y: qS
      } : {}), {}, {
        height: IS,
        width: kS,
        name: HS.name,
        radius: HS.radius
      })
    }

    function vS(SS) {
      return tS.createElement(QS.d, hS({
        shapeType: "rectangle",
        propTransformer: cS,
        activeClassName: "recharts-active-bar"
      }, SS))
    }
    var ES, LS = ["value", "background"];

    function YS(SS) {
      return YS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, YS(SS)
    }

    function AS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function yS() {
      return yS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, yS.apply(this, arguments)
    }

    function VS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function iS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? VS(Object(gS), !0).forEach((function(HS) {
          BS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : VS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function WS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, MS(tS.key), tS)
      }
    }

    function zS(SS, HS, gS) {
      return HS = pS(HS),
        function(SS, HS) {
          if (HS && ("object" === YS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, US() ? Reflect.construct(HS, gS || [], pS(SS).constructor) : HS.apply(SS, gS))
    }

    function US() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (US = function() {
        return !!SS
      })()
    }

    function pS(SS) {
      return pS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, pS(SS)
    }

    function sS(SS, HS) {
      return sS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, sS(SS, HS)
    }

    function BS(SS, HS, gS) {
      return (HS = MS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function MS(SS) {
      var HS = function(SS, HS) {
        if ("object" != YS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != YS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == YS(HS) ? HS : HS + ""
    }
    var FS = function(SS) {
      function HS() {
        var SS;
        ! function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS);
        for (var gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        return BS(SS = zS(this, HS, [].concat(tS)), "state", {
          isAnimationFinished: !1
        }), BS(SS, "id", (0, KS.y)("recharts-bar-")), BS(SS, "handleAnimationEnd", (function() {
          var HS = SS.props.onAnimationEnd;
          SS.setState({
            isAnimationFinished: !0
          }), HS && HS()
        })), BS(SS, "handleAnimationStart", (function() {
          var HS = SS.props.onAnimationStart;
          SS.setState({
            isAnimationFinished: !1
          }), HS && HS()
        })), SS
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && sS(SS, HS)
      }(HS, SS), gS = HS, xS = [{
        key: "renderRectanglesStatically",
        value: function(SS) {
          var HS = this,
            gS = this.props,
            bS = gS.shape,
            XS = gS.dataKey,
            xS = gS.activeIndex,
            NS = gS.activeBar,
            qS = (0, jS.b)(this.props, !1);
          return SS && SS.map((function(SS, gS) {
            var uS = gS === xS,
              fS = uS ? NS : bS,
              kS = iS(iS(iS({}, qS), SS), {}, {
                isActive: uS,
                option: fS,
                index: gS,
                dataKey: XS,
                onAnimationStart: HS.handleAnimationStart,
                onAnimationEnd: HS.handleAnimationEnd
              });
            return tS.createElement(IS.d, yS({
              className: "recharts-bar-rectangle"
            }, (0, nS.m)(HS.props, SS, gS), {
              key: "rectangle-".concat(null === SS || void 0 === SS ? void 0 : SS.x, "-").concat(null === SS || void 0 === SS ? void 0 : SS.y, "-").concat(null === SS || void 0 === SS ? void 0 : SS.value, "-").concat(gS)
            }), tS.createElement(vS, kS))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var SS = this,
            HS = this.props,
            gS = HS.data,
            bS = HS.layout,
            xS = HS.isAnimationActive,
            NS = HS.animationBegin,
            qS = HS.animationDuration,
            uS = HS.animationEasing,
            fS = HS.animationId,
            kS = this.state.prevData;
          return tS.createElement(XS.c, {
            Qa: NS,
            duration: qS,
            isActive: xS,
            easing: uS,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(fS),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(HS) {
            var XS = HS.t,
              xS = gS.map((function(SS, HS) {
                var gS = kS && kS[HS];
                if (gS) {
                  var tS = (0, KS.p)(gS.x, SS.x),
                    xS = (0, KS.p)(gS.y, SS.y),
                    NS = (0, KS.p)(gS.width, SS.width),
                    qS = (0, KS.p)(gS.height, SS.height);
                  return iS(iS({}, SS), {}, {
                    x: tS(XS),
                    y: xS(XS),
                    width: NS(XS),
                    height: qS(XS)
                  })
                }
                if ("horizontal" === bS) {
                  var uS = (0, KS.p)(0, SS.height)(XS);
                  return iS(iS({}, SS), {}, {
                    y: SS.y + SS.height - uS,
                    height: uS
                  })
                }
                var IS = (0, KS.p)(0, SS.width)(XS);
                return iS(iS({}, SS), {}, {
                  width: IS
                })
              }));
            return tS.createElement(IS.d, null, SS.renderRectanglesStatically(xS))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var SS = this.props,
            HS = SS.data,
            gS = SS.isAnimationActive,
            tS = this.state.prevData;
          return !(gS && HS && HS.length) || tS && NS()(tS, HS) ? this.renderRectanglesStatically(HS) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var SS = this,
            HS = this.props,
            gS = HS.data,
            bS = HS.dataKey,
            XS = HS.activeIndex,
            xS = (0, jS.b)(this.props.background, !1);
          return gS.map((function(HS, gS) {
            HS.value;
            var NS = HS.background,
              qS = AS(HS, LS);
            if (!NS) return null;
            var uS = iS(iS(iS(iS(iS({}, qS), {}, {
              fill: "#eee"
            }, NS), xS), (0, nS.m)(SS.props, HS, gS)), {}, {
              onAnimationStart: SS.handleAnimationStart,
              onAnimationEnd: SS.handleAnimationEnd,
              dataKey: bS,
              index: gS,
              className: "recharts-bar-background-rectangle"
            });
            return tS.createElement(vS, yS({
              key: "background-bar-".concat(gS),
              option: SS.props.background,
              isActive: gS === XS
            }, uS))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(SS, HS) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var gS = this.props,
            bS = gS.data,
            XS = gS.xAxis,
            xS = gS.yAxis,
            NS = gS.layout,
            qS = gS.children,
            uS = (0, jS.e)(qS, fS.d);
          if (!uS) return null;
          var kS = "vertical" === NS ? bS[0].height / 2 : bS[0].width / 2,
            aS = function(SS, HS) {
              var gS = Array.isArray(SS.value) ? SS.value[1] : SS.value;
              return {
                x: SS.x,
                y: SS.y,
                value: gS,
                errorVal: (0, CS.jb)(SS, HS)
              }
            },
            KS = {
              clipPath: SS ? "url(#clipPath-".concat(HS, ")") : null
            };
          return tS.createElement(IS.d, KS, uS.map((function(SS) {
            return tS.cloneElement(SS, {
              key: "error-bar-".concat(HS, "-").concat(SS.props.dataKey),
              data: bS,
              xAxis: XS,
              yAxis: xS,
              layout: NS,
              offset: kS,
              dataPointFormatter: aS
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var SS = this.props,
            HS = SS.hide,
            gS = SS.data,
            XS = SS.className,
            xS = SS.xAxis,
            NS = SS.yAxis,
            qS = SS.left,
            fS = SS.top,
            kS = SS.width,
            KS = SS.height,
            jS = SS.isAnimationActive,
            GS = SS.background,
            CS = SS.id;
          if (HS || !gS || !gS.length) return null;
          var nS = this.state.isAnimationFinished,
            PS = (0, bS.b)("recharts-bar", XS),
            QS = xS && xS.allowDataOverflow,
            DS = NS && NS.allowDataOverflow,
            wS = QS || DS,
            hS = uS()(CS) ? this.id : CS;
          return tS.createElement(IS.d, {
            className: PS
          }, QS || DS ? tS.createElement("defs", null, tS.createElement("clipPath", {
            id: "clipPath-".concat(hS)
          }, tS.createElement("rect", {
            x: QS ? qS : qS - kS / 2,
            y: DS ? fS : fS - KS / 2,
            width: QS ? kS : 2 * kS,
            height: DS ? KS : 2 * KS
          }))) : null, tS.createElement(IS.d, {
            className: "recharts-bar-rectangles",
            clipPath: wS ? "url(#clipPath-".concat(hS, ")") : null
          }, GS ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(wS, hS), (!jS || nS) && aS.b.renderCallByParent(this.props, gS))
        }
      }], qS = [{
        key: "getDerivedStateFromProps",
        value: function(SS, HS) {
          return SS.animationId !== HS.prevAnimationId ? {
            prevAnimationId: SS.animationId,
            curData: SS.data,
            prevData: HS.curData
          } : SS.data !== HS.curData ? {
            curData: SS.data
          } : null
        }
      }], xS && WS(gS.prototype, xS), qS && WS(gS, qS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, xS, qS
    }(tS.PureComponent);
    ES = FS, BS(FS, "displayName", "Bar"), BS(FS, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !GS.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), BS(FS, "getComposedData", (function(SS) {
      var HS = SS.props,
        gS = SS.item,
        tS = SS.barPosition,
        bS = SS.bandSize,
        XS = SS.xAxis,
        xS = SS.yAxis,
        NS = SS.xAxisTicks,
        qS = SS.yAxisTicks,
        uS = SS.stackedData,
        IS = SS.dataStartIndex,
        fS = SS.displayedData,
        aS = SS.offset,
        GS = (0, CS.q)(tS, gS);
      if (!GS) return null;
      var nS = HS.layout,
        QS = gS.type.defaultProps,
        DS = void 0 !== QS ? iS(iS({}, QS), gS.props) : gS.props,
        wS = DS.dataKey,
        hS = DS.children,
        ZS = DS.minPointSize,
        JS = "horizontal" === nS ? xS : XS,
        OS = uS ? JS.scale.domain() : null,
        dS = (0, CS.B)({
          numericAxis: JS
        }),
        cS = (0, jS.e)(hS, kS.c),
        vS = fS.map((function(SS, HS) {
          var tS, fS, kS, aS, jS, QS;
          uS ? tS = (0, CS.xb)(uS[IS + HS], OS) : (tS = (0, CS.jb)(SS, wS), Array.isArray(tS) || (tS = [dS, tS]));
          var DS = function(SS) {
            var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(gS, tS) {
              if ("number" === typeof SS) return SS;
              var bS = (0, KS.t)(gS) || (0, KS.q)(gS);
              return bS ? SS(gS, tS) : (bS || (0, PS.e)(!1), HS)
            }
          }(ZS, ES.defaultProps.minPointSize)(tS[1], HS);
          if ("horizontal" === nS) {
            var hS, JS = [xS.scale(tS[0]), xS.scale(tS[1])],
              vS = JS[0],
              LS = JS[1];
            fS = (0, CS.F)({
              axis: XS,
              ticks: NS,
              bandSize: bS,
              offset: GS.offset,
              entry: SS,
              index: HS
            }), kS = null !== (hS = null !== LS && void 0 !== LS ? LS : vS) && void 0 !== hS ? hS : void 0, aS = GS.size;
            var YS = vS - LS;
            if (jS = Number.isNaN(YS) ? 0 : YS, QS = {
                x: fS,
                y: xS.y,
                width: aS,
                height: xS.height
              }, Math.abs(DS) > 0 && Math.abs(jS) < Math.abs(DS)) {
              var AS = (0, KS.w)(jS || DS) * (Math.abs(DS) - Math.abs(jS));
              kS -= AS, jS += AS
            }
          } else {
            var yS = [XS.scale(tS[0]), XS.scale(tS[1])],
              VS = yS[0],
              WS = yS[1];
            if (fS = VS, kS = (0, CS.F)({
                axis: xS,
                ticks: qS,
                bandSize: bS,
                offset: GS.offset,
                entry: SS,
                index: HS
              }), aS = WS - VS, jS = GS.size, QS = {
                x: XS.x,
                y: kS,
                width: XS.width,
                height: jS
              }, Math.abs(DS) > 0 && Math.abs(aS) < Math.abs(DS)) aS += (0, KS.w)(aS || DS) * (Math.abs(DS) - Math.abs(aS))
          }
          return iS(iS(iS({}, SS), {}, {
            x: fS,
            y: kS,
            width: aS,
            height: jS,
            value: uS ? tS : tS[1],
            payload: SS,
            background: QS
          }, cS && cS[HS] && cS[HS].props), {}, {
            tooltipPayload: [(0, CS.fb)(gS, SS)],
            tooltipPosition: {
              x: fS + aS / 2,
              y: kS + jS / 2
            }
          })
        }));
      return iS({
        data: vS,
        layout: nS
      }, aS)
    }))
  },
  6597: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => YS
    });
    var tS = gS(64),
      bS = gS(5458),
      XS = gS.n(bS),
      xS = gS(5376),
      NS = gS.n(xS),
      qS = gS(5259),
      uS = gS(5665),
      IS = gS(6152),
      fS = gS(6304),
      kS = gS(6419),
      aS = gS(5340),
      KS = gS(5667),
      jS = gS(5650),
      GS = gS(6605),
      CS = ["viewBox"],
      nS = ["viewBox"],
      PS = ["ticks"];

    function QS(SS) {
      return QS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, QS(SS)
    }

    function DS() {
      return DS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, DS.apply(this, arguments)
    }

    function wS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function hS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? wS(Object(gS), !0).forEach((function(HS) {
          ES(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : wS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function ZS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function JS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, LS(tS.key), tS)
      }
    }

    function OS(SS, HS, gS) {
      return HS = cS(HS),
        function(SS, HS) {
          if (HS && ("object" === QS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, dS() ? Reflect.construct(HS, gS || [], cS(SS).constructor) : HS.apply(SS, gS))
    }

    function dS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (dS = function() {
        return !!SS
      })()
    }

    function cS(SS) {
      return cS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, cS(SS)
    }

    function vS(SS, HS) {
      return vS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, vS(SS, HS)
    }

    function ES(SS, HS, gS) {
      return (HS = LS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function LS(SS) {
      var HS = function(SS, HS) {
        if ("object" != QS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != QS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == QS(HS) ? HS : HS + ""
    }
    var YS = function(SS) {
      function HS(SS) {
        var gS;
        return function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS), (gS = OS(this, HS, [SS])).state = {
          fontSize: "",
          letterSpacing: ""
        }, gS
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && vS(SS, HS)
      }(HS, SS), gS = HS, xS = [{
        key: "renderTickItem",
        value: function(SS, HS, gS) {
          var bS = (0, qS.b)(HS.className, "recharts-cartesian-axis-tick-value");
          return tS.isValidElement(SS) ? tS.cloneElement(SS, hS(hS({}, HS), {}, {
            className: bS
          })) : XS()(SS) ? SS(hS(hS({}, HS), {}, {
            className: bS
          })) : tS.createElement(fS.c, DS({}, HS, {
            className: "recharts-cartesian-axis-tick-value"
          }), gS)
        }
      }], (bS = [{
        key: "shouldComponentUpdate",
        value: function(SS, HS) {
          var gS = SS.viewBox,
            tS = ZS(SS, CS),
            bS = this.props,
            XS = bS.viewBox,
            xS = ZS(bS, nS);
          return !(0, uS.d)(gS, XS) || !(0, uS.d)(tS, xS) || !(0, uS.d)(HS, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var SS = this.layerReference;
          if (SS) {
            var HS = SS.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            HS && this.setState({
              fontSize: window.getComputedStyle(HS).fontSize,
              letterSpacing: window.getComputedStyle(HS).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(SS) {
          var HS, gS, tS, bS, XS, xS, NS = this.props,
            qS = NS.x,
            uS = NS.y,
            IS = NS.width,
            fS = NS.height,
            kS = NS.orientation,
            KS = NS.tickSize,
            jS = NS.mirror,
            GS = NS.tickMargin,
            CS = jS ? -1 : 1,
            nS = SS.tickSize || KS,
            PS = (0, aS.t)(SS.tickCoord) ? SS.tickCoord : SS.coordinate;
          switch (kS) {
            case "top":
              HS = gS = SS.coordinate, xS = (tS = (bS = uS + +!jS * fS) - CS * nS) - CS * GS, XS = PS;
              break;
            case "left":
              tS = bS = SS.coordinate, XS = (HS = (gS = qS + +!jS * IS) - CS * nS) - CS * GS, xS = PS;
              break;
            case "right":
              tS = bS = SS.coordinate, XS = (HS = (gS = qS + +jS * IS) + CS * nS) + CS * GS, xS = PS;
              break;
            default:
              HS = gS = SS.coordinate, xS = (tS = (bS = uS + +jS * fS) + CS * nS) + CS * GS, XS = PS
          }
          return {
            line: {
              x1: HS,
              y1: tS,
              x2: gS,
              y2: bS
            },
            mf: {
              x: XS,
              y: xS
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var SS, HS = this.props,
            gS = HS.orientation,
            tS = HS.mirror;
          switch (gS) {
            case "left":
              SS = tS ? "start" : "end";
              break;
            case "right":
              SS = tS ? "end" : "start";
              break;
            default:
              SS = "middle"
          }
          return SS
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var SS = this.props,
            HS = SS.orientation,
            gS = SS.mirror,
            tS = "end";
          switch (HS) {
            case "left":
            case "right":
              tS = "middle";
              break;
            case "top":
              tS = gS ? "start" : "end";
              break;
            default:
              tS = gS ? "end" : "start"
          }
          return tS
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var SS = this.props,
            HS = SS.x,
            gS = SS.y,
            bS = SS.width,
            XS = SS.height,
            xS = SS.orientation,
            uS = SS.mirror,
            IS = SS.axisLine,
            fS = hS(hS(hS({}, (0, jS.b)(this.props, !1)), (0, jS.b)(IS, !1)), {}, {
              fill: "none"
            });
          if ("top" === xS || "bottom" === xS) {
            var kS = +("top" === xS && !uS || "bottom" === xS && uS);
            fS = hS(hS({}, fS), {}, {
              x1: HS,
              y1: gS + kS * XS,
              x2: HS + bS,
              y2: gS + kS * XS
            })
          } else {
            var aS = +("left" === xS && !uS || "right" === xS && uS);
            fS = hS(hS({}, fS), {}, {
              x1: HS + aS * bS,
              y1: gS,
              x2: HS + aS * bS,
              y2: gS + XS
            })
          }
          return tS.createElement("line", DS({}, fS, {
            className: (0, qS.b)("recharts-cartesian-axis-line", NS()(IS, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(SS, gS, bS) {
          var xS = this,
            uS = this.props,
            fS = uS.tickLine,
            kS = uS.stroke,
            aS = uS.mf,
            CS = uS.tickFormatter,
            nS = uS.unit,
            PS = (0, GS.b)(hS(hS({}, this.props), {}, {
              ticks: SS
            }), gS, bS),
            QS = this.getTickTextAnchor(),
            wS = this.getTickVerticalAnchor(),
            ZS = (0, jS.b)(this.props, !1),
            JS = (0, jS.b)(aS, !1),
            OS = hS(hS({}, ZS), {}, {
              fill: "none"
            }, (0, jS.b)(fS, !1)),
            dS = PS.map((function(SS, gS) {
              var bS = xS.getTickLineCoord(SS),
                uS = bS.line,
                jS = bS.mf,
                GS = hS(hS(hS(hS({
                  textAnchor: QS,
                  verticalAnchor: wS
                }, ZS), {}, {
                  stroke: "none",
                  fill: kS
                }, JS), jS), {}, {
                  index: gS,
                  payload: SS,
                  visibleTicksCount: PS.length,
                  tickFormatter: CS
                });
              return tS.createElement(IS.d, DS({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(SS.value, "-").concat(SS.coordinate, "-").concat(SS.tickCoord)
              }, (0, KS.m)(xS.props, SS, gS)), fS && tS.createElement("line", DS({}, OS, uS, {
                className: (0, qS.b)("recharts-cartesian-axis-tick-line", NS()(fS, "className"))
              })), aS && HS.renderTickItem(aS, GS, "".concat(XS()(CS) ? CS(SS.value, gS) : SS.value).concat(nS || "")))
            }));
          return tS.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, dS)
        }
      }, {
        key: "render",
        value: function() {
          var SS = this,
            HS = this.props,
            gS = HS.axisLine,
            bS = HS.width,
            xS = HS.height,
            NS = HS.ticksGenerator,
            uS = HS.className;
          if (HS.hide) return null;
          var fS = this.props,
            aS = fS.ticks,
            KS = ZS(fS, PS),
            jS = aS;
          return XS()(NS) && (jS = aS && aS.length > 0 ? NS(this.props) : NS(KS)), bS <= 0 || xS <= 0 || !jS || !jS.length ? null : tS.createElement(IS.d, {
            className: (0, qS.b)("recharts-cartesian-axis", uS),
            ref: function(HS) {
              SS.layerReference = HS
            }
          }, gS && this.renderAxisLine(), this.renderTicks(jS, this.state.fontSize, this.state.letterSpacing), kS.d.renderCallByParent(this.props))
        }
      }]) && JS(gS.prototype, bS), xS && JS(gS, xS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, bS, xS
    }(tS.Component);
    ES(YS, "displayName", "CartesianAxis"), ES(YS, "defaultProps", {
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
      mf: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6617: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => ES
    });
    var tS = gS(64),
      bS = gS(5458),
      XS = gS.n(bS),
      xS = gS(5642),
      NS = gS(5340),
      qS = gS(5650),
      uS = gS(6315),
      IS = gS(6605),
      fS = gS(6597),
      kS = gS(6551),
      aS = ["x1", "y1", "x2", "y2", "key"],
      KS = ["offset"];

    function jS(SS) {
      return jS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, jS(SS)
    }

    function GS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function CS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? GS(Object(gS), !0).forEach((function(HS) {
          nS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : GS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function nS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != jS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != jS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == jS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function PS() {
      return PS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, PS.apply(this, arguments)
    }

    function QS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }
    var DS = function(SS) {
      var HS = SS.fill;
      if (!HS || "none" === HS) return null;
      var gS = SS.fillOpacity,
        bS = SS.x,
        XS = SS.y,
        xS = SS.width,
        NS = SS.height,
        qS = SS.ry;
      return tS.createElement("rect", {
        x: bS,
        y: XS,
        ry: qS,
        width: xS,
        height: NS,
        stroke: "none",
        fill: HS,
        fillOpacity: gS,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function wS(SS, HS) {
      var gS;
      if (tS.isValidElement(SS)) gS = tS.cloneElement(SS, HS);
      else if (XS()(SS)) gS = SS(HS);
      else {
        var bS = HS.x1,
          xS = HS.y1,
          NS = HS.x2,
          uS = HS.y2,
          IS = HS.key,
          fS = QS(HS, aS),
          kS = (0, qS.b)(fS, !1),
          jS = (kS.offset, QS(kS, KS));
        gS = tS.createElement("line", PS({}, jS, {
          x1: bS,
          y1: xS,
          x2: NS,
          y2: uS,
          fill: "none",
          key: IS
        }))
      }
      return gS
    }

    function hS(SS) {
      var HS = SS.x,
        gS = SS.width,
        bS = SS.horizontal,
        XS = void 0 === bS || bS,
        xS = SS.horizontalPoints;
      if (!XS || !xS || !xS.length) return null;
      var NS = xS.map((function(tS, bS) {
        var xS = CS(CS({}, SS), {}, {
          x1: HS,
          y1: tS,
          x2: HS + gS,
          y2: tS,
          key: "line-".concat(bS),
          index: bS
        });
        return wS(XS, xS)
      }));
      return tS.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, NS)
    }

    function ZS(SS) {
      var HS = SS.y,
        gS = SS.height,
        bS = SS.vertical,
        XS = void 0 === bS || bS,
        xS = SS.verticalPoints;
      if (!XS || !xS || !xS.length) return null;
      var NS = xS.map((function(tS, bS) {
        var xS = CS(CS({}, SS), {}, {
          x1: tS,
          y1: HS,
          x2: tS,
          y2: HS + gS,
          key: "line-".concat(bS),
          index: bS
        });
        return wS(XS, xS)
      }));
      return tS.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, NS)
    }

    function JS(SS) {
      var HS = SS.horizontalFill,
        gS = SS.fillOpacity,
        bS = SS.x,
        XS = SS.y,
        xS = SS.width,
        NS = SS.height,
        qS = SS.horizontalPoints,
        uS = SS.horizontal;
      if (!(void 0 === uS || uS) || !HS || !HS.length) return null;
      var IS = qS.map((function(SS) {
        return Math.round(SS + XS - XS)
      })).sort((function(SS, HS) {
        return SS - HS
      }));
      XS !== IS[0] && IS.unshift(0);
      var fS = IS.map((function(SS, qS) {
        var uS = !IS[qS + 1] ? XS + NS - SS : IS[qS + 1] - SS;
        if (uS <= 0) return null;
        var fS = qS % HS.length;
        return tS.createElement("rect", {
          key: "react-".concat(qS),
          y: SS,
          x: bS,
          height: uS,
          width: xS,
          stroke: "none",
          fill: HS[fS],
          fillOpacity: gS,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return tS.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, fS)
    }

    function OS(SS) {
      var HS = SS.vertical,
        gS = void 0 === HS || HS,
        bS = SS.verticalFill,
        XS = SS.fillOpacity,
        xS = SS.x,
        NS = SS.y,
        qS = SS.width,
        uS = SS.height,
        IS = SS.verticalPoints;
      if (!gS || !bS || !bS.length) return null;
      var fS = IS.map((function(SS) {
        return Math.round(SS + xS - xS)
      })).sort((function(SS, HS) {
        return SS - HS
      }));
      xS !== fS[0] && fS.unshift(0);
      var kS = fS.map((function(SS, HS) {
        var gS = !fS[HS + 1] ? xS + qS - SS : fS[HS + 1] - SS;
        if (gS <= 0) return null;
        var IS = HS % bS.length;
        return tS.createElement("rect", {
          key: "react-".concat(HS),
          x: SS,
          y: NS,
          width: gS,
          height: uS,
          stroke: "none",
          fill: bS[IS],
          fillOpacity: XS,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return tS.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, kS)
    }
    var dS = function(SS, HS) {
        var gS = SS.xAxis,
          tS = SS.width,
          bS = SS.height,
          XS = SS.offset;
        return (0, uS.K)((0, IS.b)(CS(CS(CS({}, fS.d.defaultProps), gS), {}, {
          ticks: (0, uS.$)(gS, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: tS,
            height: bS
          }
        })), XS.left, XS.left + XS.width, HS)
      },
      cS = function(SS, HS) {
        var gS = SS.yAxis,
          tS = SS.width,
          bS = SS.height,
          XS = SS.offset;
        return (0, uS.K)((0, IS.b)(CS(CS(CS({}, fS.d.defaultProps), gS), {}, {
          ticks: (0, uS.$)(gS, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: tS,
            height: bS
          }
        })), XS.top, XS.top + XS.height, HS)
      },
      vS = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function ES(SS) {
      var HS, gS, bS, qS, uS, IS, fS = (0, kS.i)(),
        aS = (0, kS.h)(),
        KS = (0, kS.o)(),
        GS = CS(CS({}, SS), {}, {
          stroke: null !== (HS = SS.stroke) && void 0 !== HS ? HS : vS.stroke,
          fill: null !== (gS = SS.fill) && void 0 !== gS ? gS : vS.fill,
          horizontal: null !== (bS = SS.horizontal) && void 0 !== bS ? bS : vS.horizontal,
          horizontalFill: null !== (qS = SS.horizontalFill) && void 0 !== qS ? qS : vS.horizontalFill,
          vertical: null !== (uS = SS.vertical) && void 0 !== uS ? uS : vS.vertical,
          verticalFill: null !== (IS = SS.verticalFill) && void 0 !== IS ? IS : vS.verticalFill,
          x: (0, NS.t)(SS.x) ? SS.x : KS.left,
          y: (0, NS.t)(SS.y) ? SS.y : KS.top,
          width: (0, NS.t)(SS.width) ? SS.width : KS.width,
          height: (0, NS.t)(SS.height) ? SS.height : KS.height
        }),
        nS = GS.x,
        QS = GS.y,
        wS = GS.width,
        ES = GS.height,
        LS = GS.syncWithTicks,
        YS = GS.horizontalValues,
        AS = GS.verticalValues,
        yS = (0, kS.d)(),
        VS = (0, kS.y)();
      if (!(0, NS.t)(wS) || wS <= 0 || !(0, NS.t)(ES) || ES <= 0 || !(0, NS.t)(nS) || nS !== +nS || !(0, NS.t)(QS) || QS !== +QS) return null;
      var iS = GS.verticalCoordinatesGenerator || dS,
        WS = GS.horizontalCoordinatesGenerator || cS,
        zS = GS.horizontalPoints,
        US = GS.verticalPoints;
      if ((!zS || !zS.length) && XS()(WS)) {
        var pS = YS && YS.length,
          sS = WS({
            yAxis: VS ? CS(CS({}, VS), {}, {
              ticks: pS ? YS : VS.ticks
            }) : void 0,
            width: fS,
            height: aS,
            offset: KS
          }, !!pS || LS);
        (0, xS.b)(Array.isArray(sS), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(jS(sS), "]")), Array.isArray(sS) && (zS = sS)
      }
      if ((!US || !US.length) && XS()(iS)) {
        var BS = AS && AS.length,
          MS = iS({
            xAxis: yS ? CS(CS({}, yS), {}, {
              ticks: BS ? AS : yS.ticks
            }) : void 0,
            width: fS,
            height: aS,
            offset: KS
          }, !!BS || LS);
        (0, xS.b)(Array.isArray(MS), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(jS(MS), "]")), Array.isArray(MS) && (US = MS)
      }
      return tS.createElement("g", {
        className: "recharts-cartesian-grid"
      }, tS.createElement(DS, {
        fill: GS.fill,
        fillOpacity: GS.fillOpacity,
        x: GS.x,
        y: GS.y,
        width: GS.width,
        height: GS.height,
        ry: GS.ry
      }), tS.createElement(hS, PS({}, GS, {
        offset: KS,
        horizontalPoints: zS,
        xAxis: yS,
        yAxis: VS
      })), tS.createElement(ZS, PS({}, GS, {
        offset: KS,
        verticalPoints: US,
        xAxis: yS,
        yAxis: VS
      })), tS.createElement(JS, PS({}, GS, {
        horizontalPoints: zS
      })), tS.createElement(OS, PS({}, GS, {
        verticalPoints: US
      })))
    }
    ES.displayName = "CartesianGrid"
  },
  6404: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => QS
    });
    var tS = gS(64),
      bS = gS(6143),
      XS = gS(6152),
      xS = gS(5650),
      NS = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function qS(SS) {
      return qS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, qS(SS)
    }

    function uS() {
      return uS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, uS.apply(this, arguments)
    }

    function IS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return fS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return fS(SS, HS)
      }(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function kS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function aS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, PS(tS.key), tS)
      }
    }

    function KS(SS, HS, gS) {
      return HS = GS(HS),
        function(SS, HS) {
          if (HS && ("object" === qS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, jS() ? Reflect.construct(HS, gS || [], GS(SS).constructor) : HS.apply(SS, gS))
    }

    function jS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (jS = function() {
        return !!SS
      })()
    }

    function GS(SS) {
      return GS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, GS(SS)
    }

    function CS(SS, HS) {
      return CS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, CS(SS, HS)
    }

    function nS(SS, HS, gS) {
      return (HS = PS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function PS(SS) {
      var HS = function(SS, HS) {
        if ("object" != qS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != qS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == qS(HS) ? HS : HS + ""
    }
    var QS = function(SS) {
      function HS() {
        return function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS), KS(this, HS, arguments)
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && CS(SS, HS)
      }(HS, SS), gS = HS, (qS = [{
        key: "render",
        value: function() {
          var SS = this.props,
            HS = SS.offset,
            gS = SS.layout,
            qS = SS.width,
            fS = SS.dataKey,
            aS = SS.data,
            KS = SS.dataPointFormatter,
            jS = SS.xAxis,
            GS = SS.yAxis,
            CS = kS(SS, NS),
            nS = (0, xS.b)(CS, !1);
          "x" === this.props.direction && "number" !== jS.type && (0, bS.e)(!1);
          var PS = aS.map((function(SS) {
            var bS = KS(SS, fS),
              xS = bS.x,
              NS = bS.y,
              kS = bS.value,
              aS = bS.errorVal;
            if (!aS) return null;
            var CS, PS, QS = [];
            if (Array.isArray(aS)) {
              var DS = IS(aS, 2);
              CS = DS[0], PS = DS[1]
            } else CS = PS = aS;
            if ("vertical" === gS) {
              var wS = jS.scale,
                hS = NS + HS,
                ZS = hS + qS,
                JS = hS - qS,
                OS = wS(kS - CS),
                dS = wS(kS + PS);
              QS.push({
                x1: dS,
                y1: ZS,
                x2: dS,
                y2: JS
              }), QS.push({
                x1: OS,
                y1: hS,
                x2: dS,
                y2: hS
              }), QS.push({
                x1: OS,
                y1: ZS,
                x2: OS,
                y2: JS
              })
            } else if ("horizontal" === gS) {
              var cS = GS.scale,
                vS = xS + HS,
                ES = vS - qS,
                LS = vS + qS,
                YS = cS(kS - CS),
                AS = cS(kS + PS);
              QS.push({
                x1: ES,
                y1: AS,
                x2: LS,
                y2: AS
              }), QS.push({
                x1: vS,
                y1: YS,
                x2: vS,
                y2: AS
              }), QS.push({
                x1: ES,
                y1: YS,
                x2: LS,
                y2: YS
              })
            }
            return tS.createElement(XS.d, uS({
              className: "recharts-errorBar",
              key: "bar-".concat(QS.map((function(SS) {
                return "".concat(SS.x1, "-").concat(SS.x2, "-").concat(SS.y1, "-").concat(SS.y2)
              })))
            }, nS), QS.map((function(SS) {
              return tS.createElement("line", uS({}, SS, {
                key: "line-".concat(SS.x1, "-").concat(SS.x2, "-").concat(SS.y1, "-").concat(SS.y2)
              }))
            })))
          }));
          return tS.createElement(XS.d, {
            className: "recharts-errorBars"
          }, PS)
        }
      }]) && aS(gS.prototype, qS), fS && aS(gS, fS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, qS, fS
    }(tS.Component);
    nS(QS, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), nS(QS, "displayName", "ErrorBar")
  },
  6587: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => WS
    });
    var tS = gS(64),
      bS = gS(6300),
      XS = gS(5458),
      xS = gS.n(XS),
      NS = gS(5639),
      qS = gS.n(NS),
      uS = gS(6391),
      IS = gS.n(uS),
      fS = gS(5259),
      kS = gS(6572),
      aS = gS(6289),
      KS = gS(6152),
      jS = gS(6479),
      GS = gS(6404),
      CS = gS(5340),
      nS = gS(5650),
      PS = gS(6161),
      QS = gS(6315),
      DS = ["type", "layout", "connectNulls", "ref"],
      wS = ["key"];

    function hS(SS) {
      return hS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, hS(SS)
    }

    function ZS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function JS() {
      return JS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, JS.apply(this, arguments)
    }

    function OS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function dS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? OS(Object(gS), !0).forEach((function(HS) {
          VS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : OS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function cS(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return vS(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return vS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return vS(SS, HS)
      }(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function ES(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, iS(tS.key), tS)
      }
    }

    function LS(SS, HS, gS) {
      return HS = AS(HS),
        function(SS, HS) {
          if (HS && ("object" === hS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, YS() ? Reflect.construct(HS, gS || [], AS(SS).constructor) : HS.apply(SS, gS))
    }

    function YS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (YS = function() {
        return !!SS
      })()
    }

    function AS(SS) {
      return AS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, AS(SS)
    }

    function yS(SS, HS) {
      return yS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, yS(SS, HS)
    }

    function VS(SS, HS, gS) {
      return (HS = iS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function iS(SS) {
      var HS = function(SS, HS) {
        if ("object" != hS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != hS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == hS(HS) ? HS : HS + ""
    }
    var WS = function(SS) {
      function HS() {
        var SS;
        ! function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS);
        for (var gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        return VS(SS = LS(this, HS, [].concat(tS)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), VS(SS, "generateSimpleStrokeDasharray", (function(SS, HS) {
          return "".concat(HS, "px ").concat(SS - HS, "px")
        })), VS(SS, "getStrokeDasharray", (function(gS, tS, bS) {
          var XS = bS.reduce((function(SS, HS) {
            return SS + HS
          }));
          if (!XS) return SS.generateSimpleStrokeDasharray(tS, gS);
          for (var xS = Math.floor(gS / XS), NS = gS % XS, qS = tS - gS, uS = [], IS = 0, fS = 0; IS < bS.length; fS += bS[IS], ++IS)
            if (fS + bS[IS] > NS) {
              uS = [].concat(cS(bS.slice(0, IS)), [NS - fS]);
              break
            } var kS = uS.length % 2 === 0 ? [0, qS] : [qS];
          return [].concat(cS(HS.repeat(bS, xS)), cS(uS), kS).map((function(SS) {
            return "".concat(SS, "px")
          })).join(", ")
        })), VS(SS, "id", (0, CS.y)("recharts-line-")), VS(SS, "pathRef", (function(HS) {
          SS.mainCurve = HS
        })), VS(SS, "handleAnimationEnd", (function() {
          SS.setState({
            isAnimationFinished: !0
          }), SS.props.onAnimationEnd && SS.props.onAnimationEnd()
        })), VS(SS, "handleAnimationStart", (function() {
          SS.setState({
            isAnimationFinished: !1
          }), SS.props.onAnimationStart && SS.props.onAnimationStart()
        })), SS
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && yS(SS, HS)
      }(HS, SS), gS = HS, XS = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var SS = this.getTotalLength();
            this.setState({
              totalLength: SS
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var SS = this.getTotalLength();
            SS !== this.state.totalLength && this.setState({
              totalLength: SS
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var SS = this.mainCurve;
          try {
            return SS && SS.getTotalLength && SS.getTotalLength() || 0
          } catch (HS) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(SS, HS) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var gS = this.props,
            bS = gS.points,
            XS = gS.xAxis,
            xS = gS.yAxis,
            NS = gS.layout,
            qS = gS.children,
            uS = (0, nS.e)(qS, GS.d);
          if (!uS) return null;
          var IS = function(SS, HS) {
              return {
                x: SS.x,
                y: SS.y,
                value: SS.value,
                errorVal: (0, QS.jb)(SS.payload, HS)
              }
            },
            fS = {
              clipPath: SS ? "url(#clipPath-".concat(HS, ")") : null
            };
          return tS.createElement(KS.d, fS, uS.map((function(SS) {
            return tS.cloneElement(SS, {
              key: "bar-".concat(SS.props.dataKey),
              data: bS,
              xAxis: XS,
              yAxis: xS,
              layout: NS,
              dataPointFormatter: IS
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(SS, gS, bS) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var XS = this.props,
            xS = XS.dot,
            NS = XS.points,
            qS = XS.dataKey,
            uS = (0, nS.b)(this.props, !1),
            IS = (0, nS.b)(xS, !0),
            fS = NS.map((function(SS, gS) {
              var tS = dS(dS(dS({
                key: "dot-".concat(gS),
                r: 3
              }, uS), IS), {}, {
                index: gS,
                cx: SS.x,
                cy: SS.y,
                value: SS.value,
                dataKey: qS,
                payload: SS.payload,
                points: NS
              });
              return HS.renderDotItem(xS, tS)
            })),
            kS = {
              clipPath: SS ? "url(#clipPath-".concat(gS ? "" : "dots-").concat(bS, ")") : null
            };
          return tS.createElement(KS.d, JS({
            className: "recharts-line-dots",
            key: "dots"
          }, kS), fS)
        }
      }, {
        key: "renderCurveStatically",
        value: function(SS, HS, gS, bS) {
          var XS = this.props,
            xS = XS.type,
            NS = XS.layout,
            qS = XS.connectNulls,
            uS = (XS.ref, ZS(XS, DS)),
            IS = dS(dS(dS({}, (0, nS.b)(uS, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: HS ? "url(#clipPath-".concat(gS, ")") : null,
              points: SS
            }, bS), {}, {
              type: xS,
              layout: NS,
              connectNulls: qS
            });
          return tS.createElement(kS.d, JS({}, IS, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(SS, HS) {
          var gS = this,
            XS = this.props,
            xS = XS.points,
            NS = XS.strokeDasharray,
            qS = XS.isAnimationActive,
            uS = XS.animationBegin,
            IS = XS.animationDuration,
            fS = XS.animationEasing,
            kS = XS.animationId,
            aS = XS.animateNewValues,
            KS = XS.width,
            jS = XS.height,
            GS = this.state,
            nS = GS.prevPoints,
            PS = GS.totalLength;
          return tS.createElement(bS.c, {
            Qa: uS,
            duration: IS,
            isActive: qS,
            easing: fS,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(kS),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(tS) {
            var bS = tS.t;
            if (nS) {
              var XS = nS.length / xS.length,
                qS = xS.map((function(SS, HS) {
                  var gS = Math.floor(HS * XS);
                  if (nS[gS]) {
                    var tS = nS[gS],
                      xS = (0, CS.p)(tS.x, SS.x),
                      NS = (0, CS.p)(tS.y, SS.y);
                    return dS(dS({}, SS), {}, {
                      x: xS(bS),
                      y: NS(bS)
                    })
                  }
                  if (aS) {
                    var qS = (0, CS.p)(2 * KS, SS.x),
                      uS = (0, CS.p)(jS / 2, SS.y);
                    return dS(dS({}, SS), {}, {
                      x: qS(bS),
                      y: uS(bS)
                    })
                  }
                  return dS(dS({}, SS), {}, {
                    x: SS.x,
                    y: SS.y
                  })
                }));
              return gS.renderCurveStatically(qS, SS, HS)
            }
            var uS, IS = (0, CS.p)(0, PS)(bS);
            if (NS) {
              var fS = "".concat(NS).split(/[,\s]+/gim).map((function(SS) {
                return parseFloat(SS)
              }));
              uS = gS.getStrokeDasharray(IS, PS, fS)
            } else uS = gS.generateSimpleStrokeDasharray(PS, IS);
            return gS.renderCurveStatically(xS, SS, HS, {
              strokeDasharray: uS
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(SS, HS) {
          var gS = this.props,
            tS = gS.points,
            bS = gS.isAnimationActive,
            XS = this.state,
            xS = XS.prevPoints,
            NS = XS.totalLength;
          return bS && tS && tS.length && (!xS && NS > 0 || !IS()(xS, tS)) ? this.renderCurveWithAnimation(SS, HS) : this.renderCurveStatically(tS, SS, HS)
        }
      }, {
        key: "render",
        value: function() {
          var SS, HS = this.props,
            gS = HS.hide,
            bS = HS.dot,
            XS = HS.points,
            xS = HS.className,
            NS = HS.xAxis,
            uS = HS.yAxis,
            IS = HS.top,
            kS = HS.left,
            aS = HS.width,
            GS = HS.height,
            CS = HS.isAnimationActive,
            PS = HS.id;
          if (gS || !XS || !XS.length) return null;
          var QS = this.state.isAnimationFinished,
            DS = 1 === XS.length,
            wS = (0, fS.b)("recharts-line", xS),
            hS = NS && NS.allowDataOverflow,
            ZS = uS && uS.allowDataOverflow,
            JS = hS || ZS,
            OS = qS()(PS) ? this.id : PS,
            dS = null !== (SS = (0, nS.b)(bS, !1)) && void 0 !== SS ? SS : {
              r: 3,
              strokeWidth: 2
            },
            cS = dS.r,
            vS = void 0 === cS ? 3 : cS,
            ES = dS.strokeWidth,
            LS = void 0 === ES ? 2 : ES,
            YS = ((0, nS.n)(bS) ? bS : {}).clipDot,
            AS = void 0 === YS || YS,
            yS = 2 * vS + LS;
          return tS.createElement(KS.d, {
            className: wS
          }, hS || ZS ? tS.createElement("defs", null, tS.createElement("clipPath", {
            id: "clipPath-".concat(OS)
          }, tS.createElement("rect", {
            x: hS ? kS : kS - aS / 2,
            y: ZS ? IS : IS - GS / 2,
            width: hS ? aS : 2 * aS,
            height: ZS ? GS : 2 * GS
          })), !AS && tS.createElement("clipPath", {
            id: "clipPath-dots-".concat(OS)
          }, tS.createElement("rect", {
            x: kS - yS / 2,
            y: IS - yS / 2,
            width: aS + yS,
            height: GS + yS
          }))) : null, !DS && this.renderCurve(JS, OS), this.renderErrorBar(JS, OS), (DS || bS) && this.renderDots(JS, AS, OS), (!CS || QS) && jS.b.renderCallByParent(this.props, XS))
        }
      }], NS = [{
        key: "getDerivedStateFromProps",
        value: function(SS, HS) {
          return SS.animationId !== HS.prevAnimationId ? {
            prevAnimationId: SS.animationId,
            curPoints: SS.points,
            prevPoints: HS.curPoints
          } : SS.points !== HS.curPoints ? {
            curPoints: SS.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(SS, HS) {
          for (var gS = SS.length % 2 !== 0 ? [].concat(cS(SS), [0]) : SS, tS = [], bS = 0; bS < HS; ++bS) tS = [].concat(cS(tS), cS(gS));
          return tS
        }
      }, {
        key: "renderDotItem",
        value: function(SS, HS) {
          var gS;
          if (tS.isValidElement(SS)) gS = tS.cloneElement(SS, HS);
          else if (xS()(SS)) gS = SS(HS);
          else {
            var bS = HS.key,
              XS = ZS(HS, wS),
              NS = (0, fS.b)("recharts-line-dot", "boolean" !== typeof SS ? SS.className : "");
            gS = tS.createElement(aS.e, JS({
              key: bS
            }, XS, {
              className: NS
            }))
          }
          return gS
        }
      }], XS && ES(gS.prototype, XS), NS && ES(gS, NS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, XS, NS
    }(tS.PureComponent);
    VS(WS, "displayName", "Line"), VS(WS, "defaultProps", {
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
      isAnimationActive: !PS.b.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), VS(WS, "getComposedData", (function(SS) {
      var HS = SS.props,
        gS = SS.xAxis,
        tS = SS.yAxis,
        bS = SS.xAxisTicks,
        XS = SS.yAxisTicks,
        xS = SS.dataKey,
        NS = SS.bandSize,
        uS = SS.displayedData,
        IS = SS.offset,
        fS = HS.layout;
      return dS({
        points: uS.map((function(SS, HS) {
          var uS = (0, QS.jb)(SS, xS);
          return "horizontal" === fS ? {
            x: (0, QS.H)({
              axis: gS,
              ticks: bS,
              bandSize: NS,
              entry: SS,
              index: HS
            }),
            y: qS()(uS) ? null : tS.scale(uS),
            value: uS,
            payload: SS
          } : {
            x: qS()(uS) ? null : gS.scale(uS),
            y: (0, QS.H)({
              axis: tS,
              ticks: XS,
              bandSize: NS,
              entry: SS,
              index: HS
            }),
            value: uS,
            payload: SS
          }
        })),
        layout: fS
      }, IS)
    }))
  },
  6528: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => LS
    });
    var tS = gS(64),
      bS = gS(5458),
      XS = gS.n(bS),
      xS = gS(6537),
      NS = gS.n(xS),
      qS = gS(5259),
      uS = gS(6152),
      IS = gS(6419),
      fS = gS(6430),
      kS = gS(5340),
      aS = gS(6437),
      KS = gS(5642),
      jS = gS(5650),
      GS = gS(6551);

    function CS(SS) {
      return CS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, CS(SS)
    }

    function nS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, OS(tS.key), tS)
      }
    }

    function PS(SS, HS, gS) {
      return HS = DS(HS),
        function(SS, HS) {
          if (HS && ("object" === CS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, QS() ? Reflect.construct(HS, gS || [], DS(SS).constructor) : HS.apply(SS, gS))
    }

    function QS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (QS = function() {
        return !!SS
      })()
    }

    function DS(SS) {
      return DS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, DS(SS)
    }

    function wS(SS, HS) {
      return wS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, wS(SS, HS)
    }

    function hS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function ZS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? hS(Object(gS), !0).forEach((function(HS) {
          JS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : hS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function JS(SS, HS, gS) {
      return (HS = OS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function OS(SS) {
      var HS = function(SS, HS) {
        if ("object" != CS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != CS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == CS(HS) ? HS : HS + ""
    }

    function dS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return cS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return cS(SS, HS)
      }(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function vS() {
      return vS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, vS.apply(this, arguments)
    }

    function ES(SS) {
      var HS = SS.x,
        gS = SS.y,
        bS = SS.segment,
        xS = SS.xAxisId,
        CS = SS.yAxisId,
        nS = SS.shape,
        PS = SS.className,
        QS = SS.alwaysShow,
        DS = (0, GS.l)(),
        wS = (0, GS.t)(xS),
        hS = (0, GS.u)(CS),
        JS = (0, GS.q)();
      if (!DS || !JS) return null;
      (0, KS.b)(void 0 === QS, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var OS = function(SS, HS, gS, tS, bS, XS, xS, qS, uS) {
        var IS = bS.x,
          kS = bS.y,
          aS = bS.width,
          KS = bS.height;
        if (gS) {
          var jS = uS.y,
            GS = SS.y.apply(jS, {
              position: XS
            });
          if ((0, fS.d)(uS, "discard") && !SS.y.isInRange(GS)) return null;
          var CS = [{
            x: IS + aS,
            y: GS
          }, {
            x: IS,
            y: GS
          }];
          return "left" === qS ? CS.reverse() : CS
        }
        if (HS) {
          var nS = uS.x,
            PS = SS.x.apply(nS, {
              position: XS
            });
          if ((0, fS.d)(uS, "discard") && !SS.x.isInRange(PS)) return null;
          var QS = [{
            x: PS,
            y: kS + KS
          }, {
            x: PS,
            y: kS
          }];
          return "top" === xS ? QS.reverse() : QS
        }
        if (tS) {
          var DS = uS.segment.map((function(HS) {
            return SS.apply(HS, {
              position: XS
            })
          }));
          return (0, fS.d)(uS, "discard") && NS()(DS, (function(HS) {
            return !SS.isInRange(HS)
          })) ? null : DS
        }
        return null
      }((0, aS.e)({
        x: wS.scale,
        y: hS.scale
      }), (0, kS.r)(HS), (0, kS.r)(gS), bS && 2 === bS.length, JS, SS.position, wS.orientation, hS.orientation, SS);
      if (!OS) return null;
      var cS = dS(OS, 2),
        ES = cS[0],
        LS = ES.x,
        YS = ES.y,
        AS = cS[1],
        yS = AS.x,
        VS = AS.y,
        iS = ZS(ZS({
          clipPath: (0, fS.d)(SS, "hidden") ? "url(#".concat(DS, ")") : void 0
        }, (0, jS.b)(SS, !0)), {}, {
          x1: LS,
          y1: YS,
          x2: yS,
          y2: VS
        });
      return tS.createElement(uS.d, {
        className: (0, qS.b)("recharts-reference-line", PS)
      }, function(SS, HS) {
        return tS.isValidElement(SS) ? tS.cloneElement(SS, HS) : XS()(SS) ? SS(HS) : tS.createElement("line", vS({}, HS, {
          className: "recharts-reference-line-line"
        }))
      }(nS, iS), IS.d.renderCallByParent(SS, (0, aS.p)({
        x1: LS,
        y1: YS,
        x2: yS,
        y2: VS
      })))
    }
    var LS = function(SS) {
      function HS() {
        return function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS), PS(this, HS, arguments)
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && wS(SS, HS)
      }(HS, SS), gS = HS, (bS = [{
        key: "render",
        value: function() {
          return tS.createElement(ES, this.props)
        }
      }]) && nS(gS.prototype, bS), XS && nS(gS, XS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, bS, XS
    }(tS.Component);
    JS(LS, "displayName", "ReferenceLine"), JS(LS, "defaultProps", {
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
  6591: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => nS
    });
    var tS = gS(64),
      bS = gS(5259),
      XS = gS(6551),
      xS = gS(6597),
      NS = gS(6315);

    function qS(SS) {
      return qS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, qS(SS)
    }

    function uS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, jS(tS.key), tS)
      }
    }

    function IS(SS, HS, gS) {
      return HS = kS(HS),
        function(SS, HS) {
          if (HS && ("object" === qS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, fS() ? Reflect.construct(HS, gS || [], kS(SS).constructor) : HS.apply(SS, gS))
    }

    function fS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (fS = function() {
        return !!SS
      })()
    }

    function kS(SS) {
      return kS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, kS(SS)
    }

    function aS(SS, HS) {
      return aS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, aS(SS, HS)
    }

    function KS(SS, HS, gS) {
      return (HS = jS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function jS(SS) {
      var HS = function(SS, HS) {
        if ("object" != qS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != qS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == qS(HS) ? HS : HS + ""
    }

    function GS() {
      return GS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, GS.apply(this, arguments)
    }

    function CS(SS) {
      var HS = SS.xAxisId,
        gS = (0, XS.i)(),
        qS = (0, XS.h)(),
        uS = (0, XS.t)(HS);
      return null == uS ? null : tS.createElement(xS.d, GS({}, uS, {
        className: (0, bS.b)("recharts-".concat(uS.axisType, " ").concat(uS.axisType), uS.className),
        viewBox: {
          x: 0,
          y: 0,
          width: gS,
          height: qS
        },
        ticksGenerator: function(SS) {
          return (0, NS.$)(SS, !0)
        }
      }))
    }
    var nS = function(SS) {
      function HS() {
        return function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS), IS(this, HS, arguments)
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && aS(SS, HS)
      }(HS, SS), gS = HS, (bS = [{
        key: "render",
        value: function() {
          return tS.createElement(CS, this.props)
        }
      }]) && uS(gS.prototype, bS), XS && uS(gS, XS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, bS, XS
    }(tS.Component);
    KS(nS, "displayName", "XAxis"), KS(nS, "defaultProps", {
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
  6612: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => nS
    });
    var tS = gS(64),
      bS = gS(5259),
      XS = gS(6551),
      xS = gS(6597),
      NS = gS(6315);

    function qS(SS) {
      return qS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, qS(SS)
    }

    function uS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, jS(tS.key), tS)
      }
    }

    function IS(SS, HS, gS) {
      return HS = kS(HS),
        function(SS, HS) {
          if (HS && ("object" === qS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, fS() ? Reflect.construct(HS, gS || [], kS(SS).constructor) : HS.apply(SS, gS))
    }

    function fS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (fS = function() {
        return !!SS
      })()
    }

    function kS(SS) {
      return kS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, kS(SS)
    }

    function aS(SS, HS) {
      return aS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, aS(SS, HS)
    }

    function KS(SS, HS, gS) {
      return (HS = jS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function jS(SS) {
      var HS = function(SS, HS) {
        if ("object" != qS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != qS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == qS(HS) ? HS : HS + ""
    }

    function GS() {
      return GS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, GS.apply(this, arguments)
    }
    var CS = function(SS) {
        var HS = SS.yAxisId,
          gS = (0, XS.i)(),
          qS = (0, XS.h)(),
          uS = (0, XS.u)(HS);
        return null == uS ? null : tS.createElement(xS.d, GS({}, uS, {
          className: (0, bS.b)("recharts-".concat(uS.axisType, " ").concat(uS.axisType), uS.className),
          viewBox: {
            x: 0,
            y: 0,
            width: gS,
            height: qS
          },
          ticksGenerator: function(SS) {
            return (0, NS.$)(SS, !0)
          }
        }))
      },
      nS = function(SS) {
        function HS() {
          return function(SS, HS) {
            if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
          }(this, HS), IS(this, HS, arguments)
        }
        return function(SS, HS) {
          if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
          SS.prototype = Object.create(HS && HS.prototype, {
            constructor: {
              value: SS,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(SS, "prototype", {
            writable: !1
          }), HS && aS(SS, HS)
        }(HS, SS), gS = HS, (bS = [{
          key: "render",
          value: function() {
            return tS.createElement(CS, this.props)
          }
        }]) && uS(gS.prototype, bS), XS && uS(gS, XS), Object.defineProperty(gS, "prototype", {
          writable: !1
        }), gS;
        var gS, bS, XS
      }(tS.Component);
    KS(nS, "displayName", "YAxis"), KS(nS, "defaultProps", {
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
  6605: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => jS
    });
    var tS = gS(5458),
      bS = gS.n(tS),
      XS = gS(5340),
      xS = gS(6307),
      NS = gS(6161),
      qS = gS(6437);

    function uS(SS, HS, gS) {
      if (HS < 1) return [];
      if (1 === HS && void 0 === gS) return SS;
      for (var tS = [], bS = 0; bS < SS.length; bS += HS) {
        if (void 0 !== gS && !0 !== gS(SS[bS])) return;
        tS.push(SS[bS])
      }
      return tS
    }

    function IS(SS, HS, gS, tS, bS) {
      if (SS * HS < SS * tS || SS * HS > SS * bS) return !1;
      var XS = gS();
      return SS * (HS - SS * XS / 2 - tS) >= 0 && SS * (HS + SS * XS / 2 - bS) <= 0
    }

    function fS(SS) {
      return fS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, fS(SS)
    }

    function kS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function aS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? kS(Object(gS), !0).forEach((function(HS) {
          KS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : kS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function KS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != fS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != fS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == fS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function jS(SS, HS, gS) {
      var tS = SS.mf,
        fS = SS.ticks,
        kS = SS.viewBox,
        KS = SS.minTickGap,
        jS = SS.orientation,
        GS = SS.interval,
        CS = SS.tickFormatter,
        nS = SS.unit,
        PS = SS.angle;
      if (!fS || !fS.length || !tS) return [];
      if ((0, XS.t)(GS) || NS.b.isSsr) return function(SS, HS) {
        return uS(SS, HS + 1)
      }(fS, "number" === typeof GS && (0, XS.t)(GS) ? GS : 0);
      var QS = [],
        DS = "top" === jS || "bottom" === jS ? "width" : "height",
        wS = nS && "width" === DS ? (0, xS.h)(nS, {
          fontSize: HS,
          letterSpacing: gS
        }) : {
          width: 0,
          height: 0
        },
        hS = function(SS, tS) {
          var XS = bS()(CS) ? CS(SS.value, tS) : SS.value;
          return "width" === DS ? function(SS, HS, gS) {
            var tS = {
              width: SS.width + HS.width,
              height: SS.height + HS.height
            };
            return (0, qS.l)(tS, gS)
          }((0, xS.h)(XS, {
            fontSize: HS,
            letterSpacing: gS
          }), wS, PS) : (0, xS.h)(XS, {
            fontSize: HS,
            letterSpacing: gS
          })[DS]
        },
        ZS = fS.length >= 2 ? (0, XS.w)(fS[1].coordinate - fS[0].coordinate) : 1,
        JS = function(SS, HS, gS) {
          var tS = "width" === gS,
            bS = SS.x,
            XS = SS.y,
            xS = SS.width,
            NS = SS.height;
          return 1 === HS ? {
            start: tS ? bS : XS,
            end: tS ? bS + xS : XS + NS
          } : {
            start: tS ? bS + xS : XS + NS,
            end: tS ? bS : XS
          }
        }(kS, ZS, DS);
      return "equidistantPreserveStart" === GS ? function(SS, HS, gS, tS, bS) {
        for (var XS, xS = (tS || []).slice(), NS = HS.start, qS = HS.end, fS = 0, kS = 1, aS = NS, KS = function() {
            var HS = null === tS || void 0 === tS ? void 0 : tS[fS];
            if (void 0 === HS) return {
              v: uS(tS, kS)
            };
            var XS, xS = fS,
              KS = function() {
                return void 0 === XS && (XS = gS(HS, xS)), XS
              },
              jS = HS.coordinate,
              GS = 0 === fS || IS(SS, jS, KS, aS, qS);
            GS || (fS = 0, aS = NS, kS += 1), GS && (aS = jS + SS * (KS() / 2 + bS), fS += kS)
          }; kS <= xS.length;)
          if (XS = KS()) return XS.v;
        return []
      }(ZS, JS, hS, fS, KS) : (QS = "preserveStart" === GS || "preserveStartEnd" === GS ? function(SS, HS, gS, tS, bS, XS) {
        var xS = (tS || []).slice(),
          NS = xS.length,
          qS = HS.start,
          uS = HS.end;
        if (XS) {
          var fS = tS[NS - 1],
            kS = gS(fS, NS - 1),
            KS = SS * (fS.coordinate + SS * kS / 2 - uS);
          xS[NS - 1] = fS = aS(aS({}, fS), {}, {
            tickCoord: KS > 0 ? fS.coordinate - KS * SS : fS.coordinate
          }), IS(SS, fS.tickCoord, (function() {
            return kS
          }), qS, uS) && (uS = fS.tickCoord - SS * (kS / 2 + bS), xS[NS - 1] = aS(aS({}, fS), {}, {
            isShow: !0
          }))
        }
        for (var jS = XS ? NS - 1 : NS, GS = function(HS) {
            var tS, XS = xS[HS],
              NS = function() {
                return void 0 === tS && (tS = gS(XS, HS)), tS
              };
            if (0 === HS) {
              var fS = SS * (XS.coordinate - SS * NS() / 2 - qS);
              xS[HS] = XS = aS(aS({}, XS), {}, {
                tickCoord: fS < 0 ? XS.coordinate - fS * SS : XS.coordinate
              })
            } else xS[HS] = XS = aS(aS({}, XS), {}, {
              tickCoord: XS.coordinate
            });
            IS(SS, XS.tickCoord, NS, qS, uS) && (qS = XS.tickCoord + SS * (NS() / 2 + bS), xS[HS] = aS(aS({}, XS), {}, {
              isShow: !0
            }))
          }, CS = 0; CS < jS; CS++) GS(CS);
        return xS
      }(ZS, JS, hS, fS, KS, "preserveStartEnd" === GS) : function(SS, HS, gS, tS, bS) {
        for (var XS = (tS || []).slice(), xS = XS.length, NS = HS.start, qS = HS.end, uS = function(HS) {
            var tS, uS = XS[HS],
              fS = function() {
                return void 0 === tS && (tS = gS(uS, HS)), tS
              };
            if (HS === xS - 1) {
              var kS = SS * (uS.coordinate + SS * fS() / 2 - qS);
              XS[HS] = uS = aS(aS({}, uS), {}, {
                tickCoord: kS > 0 ? uS.coordinate - kS * SS : uS.coordinate
              })
            } else XS[HS] = uS = aS(aS({}, uS), {}, {
              tickCoord: uS.coordinate
            });
            IS(SS, uS.tickCoord, fS, NS, qS) && (qS = uS.tickCoord - SS * (fS() / 2 + bS), XS[HS] = aS(aS({}, uS), {}, {
              isShow: !0
            }))
          }, fS = xS - 1; fS >= 0; fS--) uS(fS);
        return XS
      }(ZS, JS, hS, fS, KS), QS.filter((function(SS) {
        return SS.isShow
      })))
    }
  },
  6622: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS
    });
    var tS = gS(5677),
      bS = gS(6467),
      XS = gS(6591),
      xS = gS(6612),
      NS = gS(6437),
      qS = (0, tS.d)({
        chartName: "BarChart",
        GraphicalChild: bS.e,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: XS.c
        }, {
          axisType: "yAxis",
          AxisComp: xS.b
        }],
        formatAxisMap: NS.h
      })
  },
  5669: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bH
    });
    var tS = gS(5677),
      bS = gS(6581),
      XS = gS(6467),
      xS = gS(6587),
      NS = gS(64),
      qS = gS(6300),
      uS = gS(5639),
      IS = gS.n(uS),
      fS = gS(6391),
      kS = gS.n(fS),
      aS = gS(5458),
      KS = gS.n(aS),
      jS = gS(5259),
      GS = gS(6152),
      CS = gS(6479),
      nS = gS(5650),
      PS = gS(6161);

    function QS(SS) {
      return QS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, QS(SS)
    }

    function DS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, dS(tS.key), tS)
      }
    }

    function wS(SS, HS, gS) {
      return HS = ZS(HS),
        function(SS, HS) {
          if (HS && ("object" === QS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, hS() ? Reflect.construct(HS, gS || [], ZS(SS).constructor) : HS.apply(SS, gS))
    }

    function hS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (hS = function() {
        return !!SS
      })()
    }

    function ZS(SS) {
      return ZS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, ZS(SS)
    }

    function JS(SS, HS) {
      return JS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, JS(SS, HS)
    }

    function OS(SS, HS, gS) {
      return (HS = dS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function dS(SS) {
      var HS = function(SS, HS) {
        if ("object" != QS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != QS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == QS(HS) ? HS : HS + ""
    }
    var cS = function(SS) {
      function HS() {
        return function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS), wS(this, HS, arguments)
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && JS(SS, HS)
      }(HS, SS), gS = HS, (tS = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && DS(gS.prototype, tS), bS && DS(gS, bS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, tS, bS
    }(NS.Component);
    OS(cS, "displayName", "ZAxis"), OS(cS, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var vS = gS(6572),
      ES = gS(6404),
      LS = gS(6474),
      YS = gS(5340),
      AS = gS(6315),
      yS = gS(5667),
      VS = gS(6243),
      iS = gS(6488),
      WS = ["option", "isActive"];

    function zS() {
      return zS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, zS.apply(this, arguments)
    }

    function US(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function pS(SS) {
      var HS = SS.option,
        gS = SS.isActive,
        tS = US(SS, WS);
      return "string" === typeof HS ? NS.createElement(iS.d, zS({
        option: NS.createElement(VS.c, zS({
          type: HS
        }, tS)),
        isActive: gS,
        shapeType: "symbols"
      }, tS)) : NS.createElement(iS.d, zS({
        option: HS,
        isActive: gS,
        shapeType: "symbols"
      }, tS))
    }

    function sS(SS) {
      return sS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, sS(SS)
    }

    function BS() {
      return BS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, BS.apply(this, arguments)
    }

    function MS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function FS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? MS(Object(gS), !0).forEach((function(HS) {
          eS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : MS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function RS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, rS(tS.key), tS)
      }
    }

    function TS(SS, HS, gS) {
      return HS = lS(HS),
        function(SS, HS) {
          if (HS && ("object" === sS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, oS() ? Reflect.construct(HS, gS || [], lS(SS).constructor) : HS.apply(SS, gS))
    }

    function oS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (oS = function() {
        return !!SS
      })()
    }

    function lS(SS) {
      return lS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, lS(SS)
    }

    function mS(SS, HS) {
      return mS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, mS(SS, HS)
    }

    function eS(SS, HS, gS) {
      return (HS = rS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function rS(SS) {
      var HS = function(SS, HS) {
        if ("object" != sS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != sS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == sS(HS) ? HS : HS + ""
    }
    var SH = function(SS) {
      function HS() {
        var SS;
        ! function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS);
        for (var gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        return eS(SS = TS(this, HS, [].concat(tS)), "state", {
          isAnimationFinished: !1
        }), eS(SS, "handleAnimationEnd", (function() {
          SS.setState({
            isAnimationFinished: !0
          })
        })), eS(SS, "handleAnimationStart", (function() {
          SS.setState({
            isAnimationFinished: !1
          })
        })), eS(SS, "id", (0, YS.y)("recharts-scatter-")), SS
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && mS(SS, HS)
      }(HS, SS), gS = HS, tS = [{
        key: "renderSymbolsStatically",
        value: function(SS) {
          var HS = this,
            gS = this.props,
            tS = gS.shape,
            bS = gS.activeShape,
            XS = gS.activeIndex,
            xS = (0, nS.b)(this.props, !1);
          return SS.map((function(SS, gS) {
            var qS = XS === gS,
              uS = qS ? bS : tS,
              IS = FS(FS({}, xS), SS);
            return NS.createElement(GS.d, BS({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === SS || void 0 === SS ? void 0 : SS.cx, "-").concat(null === SS || void 0 === SS ? void 0 : SS.cy, "-").concat(null === SS || void 0 === SS ? void 0 : SS.size, "-").concat(gS)
            }, (0, yS.m)(HS.props, SS, gS), {
              role: "img"
            }), NS.createElement(pS, BS({
              option: uS,
              isActive: qS,
              key: "symbol-".concat(gS)
            }, IS)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var SS = this,
            HS = this.props,
            gS = HS.points,
            tS = HS.isAnimationActive,
            bS = HS.animationBegin,
            XS = HS.animationDuration,
            xS = HS.animationEasing,
            uS = HS.animationId,
            IS = this.state.prevPoints;
          return NS.createElement(qS.c, {
            Qa: bS,
            duration: XS,
            isActive: tS,
            easing: xS,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(uS),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(HS) {
            var tS = HS.t,
              bS = gS.map((function(SS, HS) {
                var gS = IS && IS[HS];
                if (gS) {
                  var bS = (0, YS.p)(gS.cx, SS.cx),
                    XS = (0, YS.p)(gS.cy, SS.cy),
                    xS = (0, YS.p)(gS.size, SS.size);
                  return FS(FS({}, SS), {}, {
                    cx: bS(tS),
                    cy: XS(tS),
                    size: xS(tS)
                  })
                }
                var NS = (0, YS.p)(0, SS.size);
                return FS(FS({}, SS), {}, {
                  size: NS(tS)
                })
              }));
            return NS.createElement(GS.d, null, SS.renderSymbolsStatically(bS))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var SS = this.props,
            HS = SS.points,
            gS = SS.isAnimationActive,
            tS = this.state.prevPoints;
          return !(gS && HS && HS.length) || tS && kS()(tS, HS) ? this.renderSymbolsStatically(HS) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var SS = this.props,
            HS = SS.points,
            gS = SS.xAxis,
            tS = SS.yAxis,
            bS = SS.children,
            XS = (0, nS.e)(bS, ES.d);
          return XS ? XS.map((function(SS, bS) {
            var XS = SS.props,
              xS = XS.direction,
              qS = XS.dataKey;
            return NS.cloneElement(SS, {
              key: "".concat(xS, "-").concat(qS, "-").concat(HS[bS]),
              data: HS,
              xAxis: gS,
              yAxis: tS,
              layout: "x" === xS ? "vertical" : "horizontal",
              dataPointFormatter: function(SS, HS) {
                return {
                  x: SS.cx,
                  y: SS.cy,
                  value: "x" === xS ? +SS.node.x : +SS.node.y,
                  errorVal: (0, AS.jb)(SS, HS)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var SS, HS, gS = this.props,
            tS = gS.points,
            bS = gS.line,
            XS = gS.lineType,
            xS = gS.lineJointType,
            qS = (0, nS.b)(this.props, !1),
            uS = (0, nS.b)(bS, !1);
          if ("joint" === XS) SS = tS.map((function(SS) {
            return {
              x: SS.cx,
              y: SS.cy
            }
          }));
          else if ("fitting" === XS) {
            var IS = (0, YS.k)(tS),
              fS = IS.xmin,
              kS = IS.xmax,
              aS = IS.a,
              jS = IS.b,
              CS = function(SS) {
                return aS * SS + jS
              };
            SS = [{
              x: fS,
              y: CS(fS)
            }, {
              x: kS,
              y: CS(kS)
            }]
          }
          var PS = FS(FS(FS({}, qS), {}, {
            fill: "none",
            stroke: qS && qS.fill
          }, uS), {}, {
            points: SS
          });
          return HS = NS.isValidElement(bS) ? NS.cloneElement(bS, PS) : KS()(bS) ? bS(PS) : NS.createElement(vS.d, BS({}, PS, {
            type: xS
          })), NS.createElement(GS.d, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, HS)
        }
      }, {
        key: "render",
        value: function() {
          var SS = this.props,
            HS = SS.hide,
            gS = SS.points,
            tS = SS.line,
            bS = SS.className,
            XS = SS.xAxis,
            xS = SS.yAxis,
            qS = SS.left,
            uS = SS.top,
            fS = SS.width,
            kS = SS.height,
            aS = SS.id,
            KS = SS.isAnimationActive;
          if (HS || !gS || !gS.length) return null;
          var nS = this.state.isAnimationFinished,
            PS = (0, jS.b)("recharts-scatter", bS),
            QS = XS && XS.allowDataOverflow,
            DS = xS && xS.allowDataOverflow,
            wS = QS || DS,
            hS = IS()(aS) ? this.id : aS;
          return NS.createElement(GS.d, {
            className: PS,
            clipPath: wS ? "url(#clipPath-".concat(hS, ")") : null
          }, QS || DS ? NS.createElement("defs", null, NS.createElement("clipPath", {
            id: "clipPath-".concat(hS)
          }, NS.createElement("rect", {
            x: QS ? qS : qS - fS / 2,
            y: DS ? uS : uS - kS / 2,
            width: QS ? fS : 2 * fS,
            height: DS ? kS : 2 * kS
          }))) : null, tS && this.renderLine(), this.renderErrorBar(), NS.createElement(GS.d, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!KS || nS) && CS.b.renderCallByParent(this.props, gS))
        }
      }], bS = [{
        key: "getDerivedStateFromProps",
        value: function(SS, HS) {
          return SS.animationId !== HS.prevAnimationId ? {
            prevAnimationId: SS.animationId,
            curPoints: SS.points,
            prevPoints: HS.curPoints
          } : SS.points !== HS.curPoints ? {
            curPoints: SS.points
          } : null
        }
      }], tS && RS(gS.prototype, tS), bS && RS(gS, bS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, tS, bS
    }(NS.PureComponent);
    eS(SH, "displayName", "Scatter"), eS(SH, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !PS.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), eS(SH, "getComposedData", (function(SS) {
      var HS = SS.xAxis,
        gS = SS.yAxis,
        tS = SS.zAxis,
        bS = SS.item,
        XS = SS.displayedData,
        xS = SS.xAxisTicks,
        NS = SS.yAxisTicks,
        qS = SS.offset,
        uS = bS.props.tooltipType,
        fS = (0, nS.e)(bS.props.children, LS.c),
        kS = IS()(HS.dataKey) ? bS.props.dataKey : HS.dataKey,
        aS = IS()(gS.dataKey) ? bS.props.dataKey : gS.dataKey,
        KS = tS && tS.dataKey,
        jS = tS ? tS.range : cS.defaultProps.range,
        GS = jS && jS[0],
        CS = HS.scale.bandwidth ? HS.scale.bandwidth() : 0,
        PS = gS.scale.bandwidth ? gS.scale.bandwidth() : 0,
        QS = XS.map((function(SS, XS) {
          var qS = (0, AS.jb)(SS, kS),
            jS = (0, AS.jb)(SS, aS),
            nS = !IS()(KS) && (0, AS.jb)(SS, KS) || "-",
            QS = [{
              name: IS()(HS.dataKey) ? bS.props.name : HS.name || HS.dataKey,
              unit: HS.unit || "",
              value: qS,
              payload: SS,
              dataKey: kS,
              type: uS
            }, {
              name: IS()(gS.dataKey) ? bS.props.name : gS.name || gS.dataKey,
              unit: gS.unit || "",
              value: jS,
              payload: SS,
              dataKey: aS,
              type: uS
            }];
          "-" !== nS && QS.push({
            name: tS.name || tS.dataKey,
            unit: tS.unit || "",
            value: nS,
            payload: SS,
            dataKey: KS,
            type: uS
          });
          var DS = (0, AS.H)({
              axis: HS,
              ticks: xS,
              bandSize: CS,
              entry: SS,
              index: XS,
              dataKey: kS
            }),
            wS = (0, AS.H)({
              axis: gS,
              ticks: NS,
              bandSize: PS,
              entry: SS,
              index: XS,
              dataKey: aS
            }),
            hS = "-" !== nS ? tS.scale(nS) : GS,
            ZS = Math.sqrt(Math.max(hS, 0) / Math.PI);
          return FS(FS({}, SS), {}, {
            cx: DS,
            cy: wS,
            x: DS - ZS,
            y: wS - ZS,
            xAxis: HS,
            yAxis: gS,
            zAxis: tS,
            width: 2 * ZS,
            height: 2 * ZS,
            size: hS,
            node: {
              x: qS,
              y: jS,
              z: nS
            },
            tooltipPayload: QS,
            tooltipPosition: {
              x: DS,
              y: wS
            },
            payload: SS
          }, fS && fS[XS] && fS[XS].props)
        }));
      return FS({
        points: QS
      }, qS)
    }));
    var HH = gS(6591),
      gH = gS(6612),
      tH = gS(6437),
      bH = (0, tS.d)({
        chartName: "ComposedChart",
        GraphicalChild: [xS.b, bS.e, XS.e, SH],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: HH.c
        }, {
          axisType: "yAxis",
          AxisComp: gH.b
        }, {
          axisType: "zAxis",
          AxisComp: cS
        }],
        formatAxisMap: tH.h
      })
  },
  5677: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => zg
    });
    var tS = gS(64),
      bS = gS(5639),
      XS = gS.n(bS),
      xS = gS(5458),
      NS = gS.n(xS),
      qS = gS(5679),
      uS = gS.n(qS),
      IS = gS(5376),
      fS = gS.n(IS),
      kS = gS(5723),
      aS = gS.n(kS),
      KS = gS(5266),
      jS = gS.n(KS),
      GS = gS(5259),
      CS = gS(6143),
      nS = gS(6146),
      PS = gS(6152),
      QS = gS(6154),
      DS = gS(6235),
      wS = gS(6289),
      hS = gS(6294),
      ZS = gS(5650),
      JS = gS(6324),
      OS = gS(6304),
      dS = gS(6315),
      cS = gS(5340);

    function vS(SS) {
      return vS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, vS(SS)
    }

    function ES(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function LS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? ES(Object(gS), !0).forEach((function(HS) {
          YS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : ES(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function YS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != vS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != vS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == vS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var AS = ["Webkit", "Moz", "O", "ms"];

    function yS(SS) {
      return yS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, yS(SS)
    }

    function VS() {
      return VS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, VS.apply(this, arguments)
    }

    function iS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function WS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? iS(Object(gS), !0).forEach((function(HS) {
          MS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : iS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function zS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, FS(tS.key), tS)
      }
    }

    function US(SS, HS, gS) {
      return HS = sS(HS),
        function(SS, HS) {
          if (HS && ("object" === yS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, pS() ? Reflect.construct(HS, gS || [], sS(SS).constructor) : HS.apply(SS, gS))
    }

    function pS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (pS = function() {
        return !!SS
      })()
    }

    function sS(SS) {
      return sS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, sS(SS)
    }

    function BS(SS, HS) {
      return BS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, BS(SS, HS)
    }

    function MS(SS, HS, gS) {
      return (HS = FS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function FS(SS) {
      var HS = function(SS, HS) {
        if ("object" != yS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != yS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == yS(HS) ? HS : HS + ""
    }
    var RS = function(SS) {
        return SS.changedTouches && !!SS.changedTouches.length
      },
      TS = function(SS) {
        function HS(SS) {
          var gS;
          return function(SS, HS) {
            if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
          }(this, HS), MS(gS = US(this, HS, [SS]), "handleDrag", (function(SS) {
            gS.leaveTimer && (clearTimeout(gS.leaveTimer), gS.leaveTimer = null), gS.state.isTravellerMoving ? gS.handleTravellerMove(SS) : gS.state.isSlideMoving && gS.handleSlideDrag(SS)
          })), MS(gS, "handleTouchMove", (function(SS) {
            null != SS.changedTouches && SS.changedTouches.length > 0 && gS.handleDrag(SS.changedTouches[0])
          })), MS(gS, "handleDragEnd", (function() {
            gS.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var SS = gS.props,
                HS = SS.endIndex,
                tS = SS.onDragEnd,
                bS = SS.startIndex;
              null === tS || void 0 === tS || tS({
                endIndex: HS,
                startIndex: bS
              })
            })), gS.detachDragEndListener()
          })), MS(gS, "handleLeaveWrapper", (function() {
            (gS.state.isTravellerMoving || gS.state.isSlideMoving) && (gS.leaveTimer = window.setTimeout(gS.handleDragEnd, gS.props.leaveTimeOut))
          })), MS(gS, "handleEnterSlideOrTraveller", (function() {
            gS.setState({
              isTextActive: !0
            })
          })), MS(gS, "handleLeaveSlideOrTraveller", (function() {
            gS.setState({
              isTextActive: !1
            })
          })), MS(gS, "handleSlideDragStart", (function(SS) {
            var HS = RS(SS) ? SS.changedTouches[0] : SS;
            gS.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: HS.pageX
            }), gS.attachDragEndListener()
          })), gS.travellerDragStartHandlers = {
            startX: gS.handleTravellerDragStart.bind(gS, "startX"),
            endX: gS.handleTravellerDragStart.bind(gS, "endX")
          }, gS.state = {}, gS
        }
        return function(SS, HS) {
          if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
          SS.prototype = Object.create(HS && HS.prototype, {
            constructor: {
              value: SS,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(SS, "prototype", {
            writable: !1
          }), HS && BS(SS, HS)
        }(HS, SS), gS = HS, bS = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(SS) {
            var gS = SS.startX,
              tS = SS.endX,
              bS = this.state.scaleValues,
              XS = this.props,
              xS = XS.gap,
              NS = XS.data.length - 1,
              qS = Math.min(gS, tS),
              uS = Math.max(gS, tS),
              IS = HS.getIndexInRange(bS, qS),
              fS = HS.getIndexInRange(bS, uS);
            return {
              startIndex: IS - IS % xS,
              endIndex: fS === NS ? NS : fS - fS % xS
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(SS) {
            var HS = this.props,
              gS = HS.data,
              tS = HS.tickFormatter,
              bS = HS.dataKey,
              XS = (0, dS.jb)(gS[SS], bS, SS);
            return NS()(tS) ? tS(XS, SS) : XS
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
          value: function(SS) {
            var HS = this.state,
              gS = HS.slideMoveStartX,
              tS = HS.startX,
              bS = HS.endX,
              XS = this.props,
              xS = XS.x,
              NS = XS.width,
              qS = XS.travellerWidth,
              uS = XS.startIndex,
              IS = XS.endIndex,
              fS = XS.onChange,
              kS = SS.pageX - gS;
            kS > 0 ? kS = Math.min(kS, xS + NS - qS - bS, xS + NS - qS - tS) : kS < 0 && (kS = Math.max(kS, xS - tS, xS - bS));
            var aS = this.getIndex({
              startX: tS + kS,
              endX: bS + kS
            });
            aS.startIndex === uS && aS.endIndex === IS || !fS || fS(aS), this.setState({
              startX: tS + kS,
              endX: bS + kS,
              slideMoveStartX: SS.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(SS, HS) {
            var gS = RS(HS) ? HS.changedTouches[0] : HS;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: SS,
              brushMoveStartX: gS.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(SS) {
            var HS = this.state,
              gS = HS.brushMoveStartX,
              tS = HS.movingTravellerId,
              bS = HS.endX,
              XS = HS.startX,
              xS = this.state[tS],
              NS = this.props,
              qS = NS.x,
              uS = NS.width,
              IS = NS.travellerWidth,
              fS = NS.onChange,
              kS = NS.gap,
              aS = NS.data,
              KS = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              jS = SS.pageX - gS;
            jS > 0 ? jS = Math.min(jS, qS + uS - IS - xS) : jS < 0 && (jS = Math.max(jS, qS - xS)), KS[tS] = xS + jS;
            var GS = this.getIndex(KS),
              CS = GS.startIndex,
              nS = GS.endIndex;
            this.setState(MS(MS({}, tS, xS + jS), "brushMoveStartX", SS.pageX), (function() {
              fS && function() {
                var SS = aS.length - 1;
                return "startX" === tS && (bS > XS ? CS % kS === 0 : nS % kS === 0) || bS < XS && nS === SS || "endX" === tS && (bS > XS ? nS % kS === 0 : CS % kS === 0) || bS > XS && nS === SS
              }() && fS(GS)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(SS, HS) {
            var gS = this,
              tS = this.state,
              bS = tS.scaleValues,
              XS = tS.startX,
              xS = tS.endX,
              NS = this.state[HS],
              qS = bS.indexOf(NS);
            if (-1 !== qS) {
              var uS = qS + SS;
              if (!(-1 === uS || uS >= bS.length)) {
                var IS = bS[uS];
                "startX" === HS && IS >= xS || "endX" === HS && IS <= XS || this.setState(MS({}, HS, IS), (function() {
                  gS.props.onChange(gS.getIndex({
                    startX: gS.state.startX,
                    endX: gS.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var SS = this.props,
              HS = SS.x,
              gS = SS.y,
              bS = SS.width,
              XS = SS.height,
              xS = SS.fill,
              NS = SS.stroke;
            return tS.createElement("rect", {
              stroke: NS,
              fill: xS,
              x: HS,
              y: gS,
              width: bS,
              height: XS
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var SS = this.props,
              HS = SS.x,
              gS = SS.y,
              bS = SS.width,
              XS = SS.height,
              xS = SS.data,
              NS = SS.children,
              qS = SS.padding,
              uS = tS.Children.only(NS);
            return uS ? tS.cloneElement(uS, {
              x: HS,
              y: gS,
              width: bS,
              height: XS,
              margin: qS,
              compact: !0,
              data: xS
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(SS, gS) {
            var bS, XS, xS = this,
              NS = this.props,
              qS = NS.y,
              uS = NS.travellerWidth,
              IS = NS.height,
              fS = NS.traveller,
              kS = NS.ariaLabel,
              aS = NS.data,
              KS = NS.startIndex,
              jS = NS.endIndex,
              GS = Math.max(SS, this.props.x),
              CS = WS(WS({}, (0, ZS.b)(this.props, !1)), {}, {
                x: GS,
                y: qS,
                width: uS,
                height: IS
              }),
              nS = kS || "Min value: ".concat(null === (bS = aS[KS]) || void 0 === bS ? void 0 : bS.name, ", Max value: ").concat(null === (XS = aS[jS]) || void 0 === XS ? void 0 : XS.name);
            return tS.createElement(PS.d, {
              tabIndex: 0,
              role: "slider",
              "aria-label": nS,
              "aria-valuenow": SS,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[gS],
              onTouchStart: this.travellerDragStartHandlers[gS],
              onKeyDown: function(SS) {
                ["ArrowLeft", "ArrowRight"].includes(SS.key) && (SS.preventDefault(), SS.stopPropagation(), xS.handleTravellerMoveKeyboard("ArrowRight" === SS.key ? 1 : -1, gS))
              },
              onFocus: function() {
                xS.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                xS.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, HS.renderTraveller(fS, CS))
          }
        }, {
          key: "renderSlide",
          value: function(SS, HS) {
            var gS = this.props,
              bS = gS.y,
              XS = gS.height,
              xS = gS.stroke,
              NS = gS.travellerWidth,
              qS = Math.min(SS, HS) + NS,
              uS = Math.max(Math.abs(HS - SS) - NS, 0);
            return tS.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: xS,
              fillOpacity: .2,
              x: qS,
              y: bS,
              width: uS,
              height: XS
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var SS = this.props,
              HS = SS.startIndex,
              gS = SS.endIndex,
              bS = SS.y,
              XS = SS.height,
              xS = SS.travellerWidth,
              NS = SS.stroke,
              qS = this.state,
              uS = qS.startX,
              IS = qS.endX,
              fS = {
                pointerEvents: "none",
                fill: NS
              };
            return tS.createElement(PS.d, {
              className: "recharts-brush-texts"
            }, tS.createElement(OS.c, VS({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(uS, IS) - 5,
              y: bS + XS / 2
            }, fS), this.getTextOfTick(HS)), tS.createElement(OS.c, VS({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(uS, IS) + xS + 5,
              y: bS + XS / 2
            }, fS), this.getTextOfTick(gS)))
          }
        }, {
          key: "render",
          value: function() {
            var SS = this.props,
              HS = SS.data,
              gS = SS.className,
              bS = SS.children,
              XS = SS.x,
              xS = SS.y,
              NS = SS.width,
              qS = SS.height,
              uS = SS.alwaysShowText,
              IS = this.state,
              fS = IS.startX,
              kS = IS.endX,
              aS = IS.isTextActive,
              KS = IS.isSlideMoving,
              jS = IS.isTravellerMoving,
              CS = IS.isTravellerFocused;
            if (!HS || !HS.length || !(0, cS.t)(XS) || !(0, cS.t)(xS) || !(0, cS.t)(NS) || !(0, cS.t)(qS) || NS <= 0 || qS <= 0) return null;
            var nS = (0, GS.b)("recharts-brush", gS),
              QS = 1 === tS.Children.count(bS),
              DS = function(SS, HS) {
                if (!SS) return null;
                var gS = SS.replace(/(\w)/, (function(SS) {
                    return SS.toUpperCase()
                  })),
                  tS = AS.reduce((function(SS, tS) {
                    return LS(LS({}, SS), {}, YS({}, tS + gS, HS))
                  }), {});
                return tS[SS] = HS, tS
              }("userSelect", "none");
            return tS.createElement(PS.d, {
              className: nS,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: DS
            }, this.renderBackground(), QS && this.renderPanorama(), this.renderSlide(fS, kS), this.renderTravellerLayer(fS, "startX"), this.renderTravellerLayer(kS, "endX"), (aS || KS || jS || CS || uS) && this.renderText())
          }
        }], XS = [{
          key: "renderDefaultTraveller",
          value: function(SS) {
            var HS = SS.x,
              gS = SS.y,
              bS = SS.width,
              XS = SS.height,
              xS = SS.stroke,
              NS = Math.floor(gS + XS / 2) - 1;
            return tS.createElement(tS.Fragment, null, tS.createElement("rect", {
              x: HS,
              y: gS,
              width: bS,
              height: XS,
              fill: xS,
              stroke: "none"
            }), tS.createElement("line", {
              x1: HS + 1,
              y1: NS,
              x2: HS + bS - 1,
              y2: NS,
              fill: "none",
              stroke: "#fff"
            }), tS.createElement("line", {
              x1: HS + 1,
              y1: NS + 2,
              x2: HS + bS - 1,
              y2: NS + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(SS, gS) {
            return tS.isValidElement(SS) ? tS.cloneElement(SS, gS) : NS()(SS) ? SS(gS) : HS.renderDefaultTraveller(gS)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(SS, HS) {
            var gS = SS.data,
              tS = SS.width,
              bS = SS.x,
              XS = SS.travellerWidth,
              xS = SS.updateId,
              NS = SS.startIndex,
              qS = SS.endIndex;
            if (gS !== HS.prevData || xS !== HS.prevUpdateId) return WS({
              prevData: gS,
              prevTravellerWidth: XS,
              prevUpdateId: xS,
              prevX: bS,
              prevWidth: tS
            }, gS && gS.length ? function(SS) {
              var HS = SS.data,
                gS = SS.startIndex,
                tS = SS.endIndex,
                bS = SS.x,
                XS = SS.width,
                xS = SS.travellerWidth;
              if (!HS || !HS.length) return {};
              var NS = HS.length,
                qS = (0, JS.f)().domain(uS()(0, NS)).range([bS, bS + XS - xS]),
                IS = qS.domain().map((function(SS) {
                  return qS(SS)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: qS(gS),
                endX: qS(tS),
                scale: qS,
                scaleValues: IS
              }
            }({
              data: gS,
              width: tS,
              x: bS,
              travellerWidth: XS,
              startIndex: NS,
              endIndex: qS
            }) : {
              scale: null,
              scaleValues: null
            });
            if (HS.scale && (tS !== HS.prevWidth || bS !== HS.prevX || XS !== HS.prevTravellerWidth)) {
              HS.scale.range([bS, bS + tS - XS]);
              var IS = HS.scale.domain().map((function(SS) {
                return HS.scale(SS)
              }));
              return {
                prevData: gS,
                prevTravellerWidth: XS,
                prevUpdateId: xS,
                prevX: bS,
                prevWidth: tS,
                startX: HS.scale(SS.startIndex),
                endX: HS.scale(SS.endIndex),
                scaleValues: IS
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(SS, HS) {
            for (var gS = 0, tS = SS.length - 1; tS - gS > 1;) {
              var bS = Math.floor((gS + tS) / 2);
              SS[bS] > HS ? tS = bS : gS = bS
            }
            return HS >= SS[tS] ? tS : gS
          }
        }], bS && zS(gS.prototype, bS), XS && zS(gS, XS), Object.defineProperty(gS, "prototype", {
          writable: !1
        }), gS;
        var gS, bS, XS
      }(tS.PureComponent);
    MS(TS, "displayName", "Brush"), MS(TS, "defaultProps", {
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
    var oS = gS(6307),
      lS = gS(6408),
      mS = gS(6419),
      eS = gS(6430),
      rS = gS(6437),
      SH = gS(5642);

    function HH() {
      return HH = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, HH.apply(this, arguments)
    }

    function gH(SS) {
      return gH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, gH(SS)
    }

    function tH(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function bH(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? tH(Object(gS), !0).forEach((function(HS) {
          IH(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : tH(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function XH(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, fH(tS.key), tS)
      }
    }

    function xH(SS, HS, gS) {
      return HS = qH(HS),
        function(SS, HS) {
          if (HS && ("object" === gH(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, NH() ? Reflect.construct(HS, gS || [], qH(SS).constructor) : HS.apply(SS, gS))
    }

    function NH() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (NH = function() {
        return !!SS
      })()
    }

    function qH(SS) {
      return qH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, qH(SS)
    }

    function uH(SS, HS) {
      return uH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, uH(SS, HS)
    }

    function IH(SS, HS, gS) {
      return (HS = fH(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function fH(SS) {
      var HS = function(SS, HS) {
        if ("object" != gH(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != gH(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == gH(HS) ? HS : HS + ""
    }
    var kH = function(SS) {
      function HS() {
        return function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS), xH(this, HS, arguments)
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && uH(SS, HS)
      }(HS, SS), gS = HS, (bS = [{
        key: "render",
        value: function() {
          var SS = this.props,
            gS = SS.x,
            bS = SS.y,
            XS = SS.r,
            xS = SS.alwaysShow,
            NS = SS.clipPathId,
            qS = (0, cS.r)(gS),
            uS = (0, cS.r)(bS);
          if ((0, SH.b)(void 0 === xS, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !qS || !uS) return null;
          var IS = function(SS) {
            var HS = SS.x,
              gS = SS.y,
              tS = SS.xAxis,
              bS = SS.yAxis,
              XS = (0, rS.e)({
                x: tS.scale,
                y: bS.scale
              }),
              xS = XS.apply({
                x: HS,
                y: gS
              }, {
                bandAware: !0
              });
            return (0, eS.d)(SS, "discard") && !XS.isInRange(xS) ? null : xS
          }(this.props);
          if (!IS) return null;
          var fS = IS.x,
            kS = IS.y,
            aS = this.props,
            KS = aS.shape,
            jS = aS.className,
            CS = bH(bH({
              clipPath: (0, eS.d)(this.props, "hidden") ? "url(#".concat(NS, ")") : void 0
            }, (0, ZS.b)(this.props, !0)), {}, {
              cx: fS,
              cy: kS
            });
          return tS.createElement(PS.d, {
            className: (0, GS.b)("recharts-reference-dot", jS)
          }, HS.renderDot(KS, CS), mS.d.renderCallByParent(this.props, {
            x: fS - XS,
            y: kS - XS,
            width: 2 * XS,
            height: 2 * XS
          }))
        }
      }]) && XH(gS.prototype, bS), XS && XH(gS, XS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, bS, XS
    }(tS.Component);
    IH(kH, "displayName", "ReferenceDot"), IH(kH, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), IH(kH, "renderDot", (function(SS, HS) {
      return tS.isValidElement(SS) ? tS.cloneElement(SS, HS) : NS()(SS) ? SS(HS) : tS.createElement(wS.e, HH({}, HS, {
        cx: HS.cx,
        cy: HS.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var aH = gS(6528);

    function KH() {
      return KH = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, KH.apply(this, arguments)
    }

    function jH(SS) {
      return jH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, jH(SS)
    }

    function GH(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function CH(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? GH(Object(gS), !0).forEach((function(HS) {
          hH(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : GH(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function nH(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, ZH(tS.key), tS)
      }
    }

    function PH(SS, HS, gS) {
      return HS = DH(HS),
        function(SS, HS) {
          if (HS && ("object" === jH(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, QH() ? Reflect.construct(HS, gS || [], DH(SS).constructor) : HS.apply(SS, gS))
    }

    function QH() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (QH = function() {
        return !!SS
      })()
    }

    function DH(SS) {
      return DH = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, DH(SS)
    }

    function wH(SS, HS) {
      return wH = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, wH(SS, HS)
    }

    function hH(SS, HS, gS) {
      return (HS = ZH(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function ZH(SS) {
      var HS = function(SS, HS) {
        if ("object" != jH(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != jH(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == jH(HS) ? HS : HS + ""
    }
    var JH = function(SS) {
      function HS() {
        return function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS), PH(this, HS, arguments)
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && wH(SS, HS)
      }(HS, SS), gS = HS, (bS = [{
        key: "render",
        value: function() {
          var SS = this.props,
            gS = SS.x1,
            bS = SS.x2,
            XS = SS.y1,
            xS = SS.y2,
            NS = SS.className,
            qS = SS.alwaysShow,
            uS = SS.clipPathId;
          (0, SH.b)(void 0 === qS, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var IS = (0, cS.r)(gS),
            fS = (0, cS.r)(bS),
            kS = (0, cS.r)(XS),
            aS = (0, cS.r)(xS),
            KS = this.props.shape;
          if (!IS && !fS && !kS && !aS && !KS) return null;
          var jS = function(SS, HS, gS, tS, bS) {
            var XS = bS.x1,
              xS = bS.x2,
              NS = bS.y1,
              qS = bS.y2,
              uS = bS.xAxis,
              IS = bS.yAxis;
            if (!uS || !IS) return null;
            var fS = (0, rS.e)({
                x: uS.scale,
                y: IS.scale
              }),
              kS = {
                x: SS ? fS.x.apply(XS, {
                  position: "start"
                }) : fS.x.rangeMin,
                y: gS ? fS.y.apply(NS, {
                  position: "start"
                }) : fS.y.rangeMin
              },
              aS = {
                x: HS ? fS.x.apply(xS, {
                  position: "end"
                }) : fS.x.rangeMax,
                y: tS ? fS.y.apply(qS, {
                  position: "end"
                }) : fS.y.rangeMax
              };
            return !(0, eS.d)(bS, "discard") || fS.isInRange(kS) && fS.isInRange(aS) ? (0, rS.q)(kS, aS) : null
          }(IS, fS, kS, aS, this.props);
          if (!jS && !KS) return null;
          var CS = (0, eS.d)(this.props, "hidden") ? "url(#".concat(uS, ")") : void 0;
          return tS.createElement(PS.d, {
            className: (0, GS.b)("recharts-reference-area", NS)
          }, HS.renderRect(KS, CH(CH({
            clipPath: CS
          }, (0, ZS.b)(this.props, !0)), jS)), mS.d.renderCallByParent(this.props, jS))
        }
      }]) && nH(gS.prototype, bS), XS && nH(gS, XS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, bS, XS
    }(tS.Component);

    function OH(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return dH(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return dH(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return dH(SS, HS)
      }(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dH(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }
    hH(JH, "displayName", "ReferenceArea"), hH(JH, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), hH(JH, "renderRect", (function(SS, HS) {
      return tS.isValidElement(SS) ? tS.cloneElement(SS, HS) : NS()(SS) ? SS(HS) : tS.createElement(hS.e, KH({}, HS, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var cH = function(SS, HS, gS, tS, bS) {
        var XS = (0, ZS.e)(SS, aH.c),
          xS = (0, ZS.e)(SS, kH),
          NS = [].concat(OH(XS), OH(xS)),
          qS = (0, ZS.e)(SS, JH),
          uS = "".concat(tS, "Id"),
          IS = tS[0],
          fS = HS;
        if (NS.length && (fS = NS.reduce((function(SS, HS) {
            if (HS.props[uS] === gS && (0, eS.d)(HS.props, "extendDomain") && (0, cS.t)(HS.props[IS])) {
              var tS = HS.props[IS];
              return [Math.min(SS[0], tS), Math.max(SS[1], tS)]
            }
            return SS
          }), fS)), qS.length) {
          var kS = "".concat(IS, "1"),
            aS = "".concat(IS, "2");
          fS = qS.reduce((function(SS, HS) {
            if (HS.props[uS] === gS && (0, eS.d)(HS.props, "extendDomain") && (0, cS.t)(HS.props[kS]) && (0, cS.t)(HS.props[aS])) {
              var tS = HS.props[kS],
                bS = HS.props[aS];
              return [Math.min(SS[0], tS, bS), Math.max(SS[1], tS, bS)]
            }
            return SS
          }), fS)
        }
        return bS && bS.length && (fS = bS.reduce((function(SS, HS) {
          return (0, cS.t)(HS) ? [Math.min(SS[0], HS), Math.max(SS[1], HS)] : SS
        }), fS)), fS
      },
      vH = gS(6421),
      EH = gS(5665),
      LH = gS(38),
      YH = new(gS.n(LH)()),
      AH = "recharts.syncMouseEvents",
      yH = gS(5667);

    function VH(SS) {
      return VH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, VH(SS)
    }

    function iH(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, zH(tS.key), tS)
      }
    }

    function WH(SS, HS, gS) {
      return (HS = zH(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function zH(SS) {
      var HS = function(SS, HS) {
        if ("object" != VH(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != VH(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == VH(HS) ? HS : HS + ""
    }
    var UH = function() {
      return SS = function SS() {
        ! function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, SS), WH(this, "activeIndex", 0), WH(this, "coordinateList", []), WH(this, "layout", "horizontal")
      }, (HS = [{
        key: "setDetails",
        value: function(SS) {
          var HS, gS = SS.coordinateList,
            tS = void 0 === gS ? null : gS,
            bS = SS.container,
            XS = void 0 === bS ? null : bS,
            xS = SS.layout,
            NS = void 0 === xS ? null : xS,
            qS = SS.offset,
            uS = void 0 === qS ? null : qS,
            IS = SS.mouseHandlerCallback,
            fS = void 0 === IS ? null : IS;
          this.coordinateList = null !== (HS = null !== tS && void 0 !== tS ? tS : this.coordinateList) && void 0 !== HS ? HS : [], this.container = null !== XS && void 0 !== XS ? XS : this.container, this.layout = null !== NS && void 0 !== NS ? NS : this.layout, this.offset = null !== uS && void 0 !== uS ? uS : this.offset, this.mouseHandlerCallback = null !== fS && void 0 !== fS ? fS : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(SS) {
          if (0 !== this.coordinateList.length) switch (SS.key) {
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
        value: function(SS) {
          this.activeIndex = SS
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var SS, HS;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var gS = this.container.getBoundingClientRect(),
              tS = gS.x,
              bS = gS.y,
              XS = gS.height,
              xS = this.coordinateList[this.activeIndex].coordinate,
              NS = (null === (SS = window) || void 0 === SS ? void 0 : SS.scrollX) || 0,
              qS = (null === (HS = window) || void 0 === HS ? void 0 : HS.scrollY) || 0,
              uS = tS + xS + NS,
              IS = bS + this.offset.top + XS / 2 + qS;
            this.mouseHandlerCallback({
              pageX: uS,
              pageY: IS
            })
          }
        }
      }]) && iH(SS.prototype, HS), gS && iH(SS, gS), Object.defineProperty(SS, "prototype", {
        writable: !1
      }), SS;
      var SS, HS, gS
    }();
    var pH = gS(6488),
      sH = gS(6572);

    function BH(SS) {
      return BH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, BH(SS)
    }
    var MH = ["x", "y", "top", "left", "width", "height", "className"];

    function FH() {
      return FH = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, FH.apply(this, arguments)
    }

    function RH(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function TH(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != BH(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != BH(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == BH(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function oH(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }
    var lH = function(SS, HS, gS, tS, bS, XS) {
        return "M".concat(SS, ",").concat(bS, "v").concat(tS, "M").concat(XS, ",").concat(HS, "h").concat(gS)
      },
      mH = function(SS) {
        var HS = SS.x,
          gS = void 0 === HS ? 0 : HS,
          bS = SS.y,
          XS = void 0 === bS ? 0 : bS,
          xS = SS.top,
          NS = void 0 === xS ? 0 : xS,
          qS = SS.left,
          uS = void 0 === qS ? 0 : qS,
          IS = SS.width,
          fS = void 0 === IS ? 0 : IS,
          kS = SS.height,
          aS = void 0 === kS ? 0 : kS,
          KS = SS.className,
          jS = function(SS) {
            for (var HS = 1; HS < arguments.length; HS++) {
              var gS = null != arguments[HS] ? arguments[HS] : {};
              HS % 2 ? RH(Object(gS), !0).forEach((function(HS) {
                TH(SS, HS, gS[HS])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : RH(Object(gS)).forEach((function(HS) {
                Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
              }))
            }
            return SS
          }({
            x: gS,
            y: XS,
            top: NS,
            left: uS,
            width: fS,
            height: aS
          }, oH(SS, MH));
        return (0, cS.t)(gS) && (0, cS.t)(XS) && (0, cS.t)(fS) && (0, cS.t)(aS) && (0, cS.t)(NS) && (0, cS.t)(uS) ? tS.createElement("path", FH({}, (0, ZS.b)(jS, !0), {
          className: (0, GS.b)("recharts-cross", KS),
          d: lH(gS, XS, fS, aS, NS, uS)
        })) : null
      };

    function eH(SS) {
      var HS = SS.cx,
        gS = SS.cy,
        tS = SS.radius,
        bS = SS.startAngle,
        XS = SS.endAngle;
      return {
        points: [(0, vH.i)(HS, gS, tS, bS), (0, vH.i)(HS, gS, tS, XS)],
        cx: HS,
        cy: gS,
        radius: tS,
        startAngle: bS,
        endAngle: XS
      }
    }
    var rH = gS(6519);

    function Sg(SS, HS, gS) {
      var tS, bS, XS, xS;
      if ("horizontal" === SS) XS = tS = HS.x, bS = gS.top, xS = gS.top + gS.height;
      else if ("vertical" === SS) xS = bS = HS.y, tS = gS.left, XS = gS.left + gS.width;
      else if (null != HS.cx && null != HS.cy) {
        if ("centric" !== SS) return eH(HS);
        var NS = HS.cx,
          qS = HS.cy,
          uS = HS.innerRadius,
          IS = HS.outerRadius,
          fS = HS.angle,
          kS = (0, vH.i)(NS, qS, uS, fS),
          aS = (0, vH.i)(NS, qS, IS, fS);
        tS = kS.x, bS = kS.y, XS = aS.x, xS = aS.y
      }
      return [{
        x: tS,
        y: bS
      }, {
        x: XS,
        y: xS
      }]
    }

    function Hg(SS) {
      return Hg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, Hg(SS)
    }

    function gg(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function tg(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? gg(Object(gS), !0).forEach((function(HS) {
          bg(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : gg(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function bg(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != Hg(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != Hg(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == Hg(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function Xg(SS) {
      var HS, gS, bS, XS = SS.element,
        xS = SS.tooltipEventType,
        NS = SS.isActive,
        qS = SS.activeCoordinate,
        uS = SS.activePayload,
        IS = SS.offset,
        fS = SS.activeTooltipIndex,
        kS = SS.tooltipAxisBandSize,
        aS = SS.layout,
        KS = SS.chartName,
        jS = null !== (HS = XS.props.cursor) && void 0 !== HS ? HS : null === (gS = XS.type.defaultProps) || void 0 === gS ? void 0 : gS.cursor;
      if (!XS || !jS || !NS || !qS || "ScatterChart" !== KS && "axis" !== xS) return null;
      var CS = sH.d;
      if ("ScatterChart" === KS) bS = qS, CS = mH;
      else if ("BarChart" === KS) bS = function(SS, HS, gS, tS) {
        var bS = tS / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === SS ? HS.x - bS : gS.left + .5,
          y: "horizontal" === SS ? gS.top + .5 : HS.y - bS,
          width: "horizontal" === SS ? tS : gS.width - 1,
          height: "horizontal" === SS ? gS.height - 1 : tS
        }
      }(aS, qS, IS, kS), CS = hS.e;
      else if ("radial" === aS) {
        var nS = eH(qS),
          PS = nS.cx,
          QS = nS.cy,
          DS = nS.radius;
        bS = {
          cx: PS,
          cy: QS,
          startAngle: nS.startAngle,
          endAngle: nS.endAngle,
          innerRadius: DS,
          outerRadius: DS
        }, CS = rH.c
      } else bS = {
        points: Sg(aS, qS, IS)
      }, CS = sH.d;
      var wS = tg(tg(tg(tg({
        stroke: "#ccc",
        pointerEvents: "none"
      }, IS), bS), (0, ZS.b)(jS, !1)), {}, {
        payload: uS,
        payloadIndex: fS,
        className: (0, GS.b)("recharts-tooltip-cursor", jS.className)
      });
      return (0, tS.isValidElement)(jS) ? (0, tS.cloneElement)(jS, wS) : (0, tS.createElement)(CS, wS)
    }
    var xg = gS(6551),
      Ng = ["item"],
      qg = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function ug(SS) {
      return ug = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, ug(SS)
    }

    function Ig() {
      return Ig = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, Ig.apply(this, arguments)
    }

    function fg(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || Pg(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kg(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function ag(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, Zg(tS.key), tS)
      }
    }

    function Kg(SS, HS, gS) {
      return HS = Gg(HS),
        function(SS, HS) {
          if (HS && ("object" === ug(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, jg() ? Reflect.construct(HS, gS || [], Gg(SS).constructor) : HS.apply(SS, gS))
    }

    function jg() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (jg = function() {
        return !!SS
      })()
    }

    function Gg(SS) {
      return Gg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, Gg(SS)
    }

    function Cg(SS, HS) {
      return Cg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, Cg(SS, HS)
    }

    function ng(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return Qg(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || Pg(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pg(SS, HS) {
      if (SS) {
        if ("string" === typeof SS) return Qg(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        return "Object" === gS && SS.constructor && (gS = SS.constructor.name), "Map" === gS || "Set" === gS ? Array.from(SS) : "Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS) ? Qg(SS, HS) : void 0
      }
    }

    function Qg(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function Dg(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function wg(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? Dg(Object(gS), !0).forEach((function(HS) {
          hg(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : Dg(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function hg(SS, HS, gS) {
      return (HS = Zg(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function Zg(SS) {
      var HS = function(SS, HS) {
        if ("object" != ug(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != ug(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == ug(HS) ? HS : HS + ""
    }
    var Jg = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Og = {
        width: "100%",
        height: "100%"
      },
      dg = {
        x: 0,
        y: 0
      };

    function cg(SS) {
      return SS
    }
    var vg = function(SS, HS) {
      var gS = HS.graphicalItems,
        tS = HS.dataStartIndex,
        bS = HS.dataEndIndex,
        XS = (null !== gS && void 0 !== gS ? gS : []).reduce((function(SS, HS) {
          var gS = HS.props.data;
          return gS && gS.length ? [].concat(ng(SS), ng(gS)) : SS
        }), []);
      return XS.length > 0 ? XS : SS && SS.length && (0, cS.t)(tS) && (0, cS.t)(bS) ? SS.slice(tS, bS + 1) : []
    };

    function Eg(SS) {
      return "number" === SS ? [0, "auto"] : void 0
    }
    var Lg = function(SS, HS, gS, tS) {
        var bS = SS.graphicalItems,
          XS = SS.tooltipAxis,
          xS = vg(HS, SS);
        return gS < 0 || !bS || !bS.length || gS >= xS.length ? null : bS.reduce((function(bS, NS) {
          var qS, uS, IS = null !== (qS = NS.props.data) && void 0 !== qS ? qS : HS;
          if (IS && SS.dataStartIndex + SS.dataEndIndex !== 0 && SS.dataEndIndex - SS.dataStartIndex >= gS && (IS = IS.slice(SS.dataStartIndex, SS.dataEndIndex + 1)), XS.dataKey && !XS.allowDuplicatedCategory) {
            var fS = void 0 === IS ? xS : IS;
            uS = (0, cS.g)(fS, XS.dataKey, tS)
          } else uS = IS && IS[gS] || xS[gS];
          return uS ? [].concat(ng(bS), [(0, dS.fb)(NS, uS)]) : bS
        }), [])
      },
      Yg = function(SS, HS, gS, tS) {
        var bS = tS || {
            x: SS.chartX,
            y: SS.chartY
          },
          XS = function(SS, HS) {
            return "horizontal" === HS ? SS.x : "vertical" === HS ? SS.y : "centric" === HS ? SS.angle : SS.radius
          }(bS, gS),
          xS = SS.orderedTooltipTicks,
          NS = SS.tooltipAxis,
          qS = SS.tooltipTicks,
          uS = (0, dS.h)(XS, xS, qS, NS);
        if (uS >= 0 && qS) {
          var IS = qS[uS] && qS[uS].value,
            fS = Lg(SS, HS, uS, IS),
            kS = function(SS, HS, gS, tS) {
              var bS = HS.find((function(SS) {
                return SS && SS.index === gS
              }));
              if (bS) {
                if ("horizontal" === SS) return {
                  x: bS.coordinate,
                  y: tS.y
                };
                if ("vertical" === SS) return {
                  x: tS.x,
                  y: bS.coordinate
                };
                if ("centric" === SS) {
                  var XS = bS.coordinate,
                    xS = tS.radius;
                  return wg(wg(wg({}, tS), (0, vH.i)(tS.cx, tS.cy, xS, XS)), {}, {
                    angle: XS,
                    radius: xS
                  })
                }
                var NS = bS.coordinate,
                  qS = tS.angle;
                return wg(wg(wg({}, tS), (0, vH.i)(tS.cx, tS.cy, NS, qS)), {}, {
                  angle: qS,
                  radius: NS
                })
              }
              return dg
            }(gS, xS, uS, bS);
          return {
            activeTooltipIndex: uS,
            activeLabel: IS,
            activePayload: fS,
            activeCoordinate: kS
          }
        }
        return null
      },
      Ag = function(SS, HS) {
        var gS = HS.axes,
          tS = HS.graphicalItems,
          bS = HS.axisType,
          xS = HS.axisIdKey,
          NS = HS.stackGroups,
          qS = HS.dataStartIndex,
          IS = HS.dataEndIndex,
          fS = SS.layout,
          kS = SS.children,
          aS = SS.stackOffset,
          KS = (0, dS.mb)(fS, bS);
        return gS.reduce((function(HS, gS) {
          var jS, GS = void 0 !== gS.type.defaultProps ? wg(wg({}, gS.type.defaultProps), gS.props) : gS.props,
            CS = GS.type,
            nS = GS.dataKey,
            PS = GS.allowDataOverflow,
            QS = GS.allowDuplicatedCategory,
            DS = GS.scale,
            wS = GS.ticks,
            hS = GS.includeHidden,
            ZS = GS[xS];
          if (HS[ZS]) return HS;
          var JS, OS, vS, ES = vg(SS.data, {
              graphicalItems: tS.filter((function(SS) {
                var HS;
                return (xS in SS.props ? SS.props[xS] : null === (HS = SS.type.defaultProps) || void 0 === HS ? void 0 : HS[xS]) === ZS
              })),
              dataStartIndex: qS,
              dataEndIndex: IS
            }),
            LS = ES.length;
          (function(SS, HS, gS) {
            if ("number" === gS && !0 === HS && Array.isArray(SS)) {
              var tS = null === SS || void 0 === SS ? void 0 : SS[0],
                bS = null === SS || void 0 === SS ? void 0 : SS[1];
              if (tS && bS && (0, cS.t)(tS) && (0, cS.t)(bS)) return !0
            }
            return !1
          })(GS.domain, PS, CS) && (JS = (0, dS.vb)(GS.domain, null, PS), !KS || "number" !== CS && "auto" === DS || (vS = (0, dS.M)(ES, nS, "category")));
          var YS = Eg(CS);
          if (!JS || 0 === JS.length) {
            var AS, yS = null !== (AS = GS.domain) && void 0 !== AS ? AS : YS;
            if (nS) {
              if (JS = (0, dS.M)(ES, nS, CS), "category" === CS && KS) {
                var VS = (0, cS.n)(JS);
                QS && VS ? (OS = JS, JS = uS()(0, LS)) : QS || (JS = (0, dS.nb)(yS, JS, gS).reduce((function(SS, HS) {
                  return SS.indexOf(HS) >= 0 ? SS : [].concat(ng(SS), [HS])
                }), []))
              } else if ("category" === CS) JS = QS ? JS.filter((function(SS) {
                return "" !== SS && !XS()(SS)
              })) : (0, dS.nb)(yS, JS, gS).reduce((function(SS, HS) {
                return SS.indexOf(HS) >= 0 || "" === HS || XS()(HS) ? SS : [].concat(ng(SS), [HS])
              }), []);
              else if ("number" === CS) {
                var iS = (0, dS.rb)(ES, tS.filter((function(SS) {
                  var HS, gS, tS = xS in SS.props ? SS.props[xS] : null === (HS = SS.type.defaultProps) || void 0 === HS ? void 0 : HS[xS],
                    bS = "hide" in SS.props ? SS.props.hide : null === (gS = SS.type.defaultProps) || void 0 === gS ? void 0 : gS.hide;
                  return tS === ZS && (hS || !bS)
                })), nS, bS, fS);
                iS && (JS = iS)
              }!KS || "number" !== CS && "auto" === DS || (vS = (0, dS.M)(ES, nS, "category"))
            } else JS = KS ? uS()(0, LS) : NS && NS[ZS] && NS[ZS].hasStack && "number" === CS ? "expand" === aS ? [0, 1] : (0, dS.S)(NS[ZS].stackGroups, qS, IS) : (0, dS.P)(ES, tS.filter((function(SS) {
              var HS = xS in SS.props ? SS.props[xS] : SS.type.defaultProps[xS],
                gS = "hide" in SS.props ? SS.props.hide : SS.type.defaultProps.hide;
              return HS === ZS && (hS || !gS)
            })), CS, fS, !0);
            if ("number" === CS) JS = cH(kS, JS, ZS, bS, wS), yS && (JS = (0, dS.vb)(yS, JS, PS));
            else if ("category" === CS && yS) {
              var WS = yS;
              JS.every((function(SS) {
                return WS.indexOf(SS) >= 0
              })) && (JS = WS)
            }
          }
          return wg(wg({}, HS), {}, hg({}, ZS, wg(wg({}, GS), {}, {
            axisType: bS,
            domain: JS,
            categoricalDomain: vS,
            duplicateDomain: OS,
            originalDomain: null !== (jS = GS.domain) && void 0 !== jS ? jS : YS,
            isCategorical: KS,
            layout: fS
          })))
        }), {})
      },
      yg = function(SS, HS) {
        var gS = HS.axisType,
          tS = void 0 === gS ? "xAxis" : gS,
          bS = HS.AxisComp,
          XS = HS.graphicalItems,
          xS = HS.stackGroups,
          NS = HS.dataStartIndex,
          qS = HS.dataEndIndex,
          IS = SS.children,
          kS = "".concat(tS, "Id"),
          aS = (0, ZS.e)(IS, bS),
          KS = {};
        return aS && aS.length ? KS = Ag(SS, {
          axes: aS,
          graphicalItems: XS,
          axisType: tS,
          axisIdKey: kS,
          stackGroups: xS,
          dataStartIndex: NS,
          dataEndIndex: qS
        }) : XS && XS.length && (KS = function(SS, HS) {
          var gS = HS.graphicalItems,
            tS = HS.Axis,
            bS = HS.axisType,
            XS = HS.axisIdKey,
            xS = HS.stackGroups,
            NS = HS.dataStartIndex,
            qS = HS.dataEndIndex,
            IS = SS.layout,
            kS = SS.children,
            aS = vg(SS.data, {
              graphicalItems: gS,
              dataStartIndex: NS,
              dataEndIndex: qS
            }),
            KS = aS.length,
            jS = (0, dS.mb)(IS, bS),
            GS = -1;
          return gS.reduce((function(SS, HS) {
            var CS, nS = (void 0 !== HS.type.defaultProps ? wg(wg({}, HS.type.defaultProps), HS.props) : HS.props)[XS],
              PS = Eg("number");
            return SS[nS] ? SS : (GS++, jS ? CS = uS()(0, KS) : xS && xS[nS] && xS[nS].hasStack ? (CS = (0, dS.S)(xS[nS].stackGroups, NS, qS), CS = cH(kS, CS, nS, bS)) : (CS = (0, dS.vb)(PS, (0, dS.P)(aS, gS.filter((function(SS) {
              var HS, gS, tS = XS in SS.props ? SS.props[XS] : null === (HS = SS.type.defaultProps) || void 0 === HS ? void 0 : HS[XS],
                bS = "hide" in SS.props ? SS.props.hide : null === (gS = SS.type.defaultProps) || void 0 === gS ? void 0 : gS.hide;
              return tS === nS && !bS
            })), "number", IS), tS.defaultProps.allowDataOverflow), CS = cH(kS, CS, nS, bS)), wg(wg({}, SS), {}, hg({}, nS, wg(wg({
              axisType: bS
            }, tS.defaultProps), {}, {
              hide: !0,
              orientation: fS()(Jg, "".concat(bS, ".").concat(GS % 2), null),
              domain: CS,
              originalDomain: PS,
              isCategorical: jS,
              layout: IS
            }))))
          }), {})
        }(SS, {
          Axis: bS,
          graphicalItems: XS,
          axisType: tS,
          axisIdKey: kS,
          stackGroups: xS,
          dataStartIndex: NS,
          dataEndIndex: qS
        })), KS
      },
      Vg = function(SS) {
        var HS = SS.children,
          gS = SS.defaultShowTooltip,
          tS = (0, ZS.g)(HS, TS),
          bS = 0,
          XS = 0;
        return SS.data && 0 !== SS.data.length && (XS = SS.data.length - 1), tS && tS.props && (tS.props.startIndex >= 0 && (bS = tS.props.startIndex), tS.props.endIndex >= 0 && (XS = tS.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: bS,
          dataEndIndex: XS,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(gS)
        }
      },
      ig = function(SS) {
        return "horizontal" === SS ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === SS ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === SS ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      Wg = function(SS, HS) {
        return "xAxis" === HS ? SS[HS].width : "yAxis" === HS ? SS[HS].height : void 0
      },
      zg = function(SS) {
        var HS = SS.chartName,
          gS = SS.GraphicalChild,
          bS = SS.defaultTooltipEventType,
          xS = void 0 === bS ? "axis" : bS,
          qS = SS.validateTooltipEventTypes,
          uS = void 0 === qS ? ["axis"] : qS,
          IS = SS.axisComponents,
          kS = SS.legendContent,
          KS = SS.formatAxisMap,
          JS = SS.defaultProps,
          OS = function(SS, HS) {
            var gS = HS.graphicalItems,
              tS = HS.stackGroups,
              bS = HS.offset,
              xS = HS.updateId,
              NS = HS.dataStartIndex,
              qS = HS.dataEndIndex,
              uS = SS.barSize,
              fS = SS.layout,
              kS = SS.barGap,
              aS = SS.barCategoryGap,
              KS = SS.maxBarSize,
              jS = ig(fS),
              GS = jS.numericAxisName,
              nS = jS.cateAxisName,
              PS = function(SS) {
                return !(!SS || !SS.length) && SS.some((function(SS) {
                  var HS = (0, ZS.i)(SS && SS.type);
                  return HS && HS.indexOf("Bar") >= 0
                }))
              }(gS),
              QS = [];
            return gS.forEach((function(gS, jS) {
              var DS = vg(SS.data, {
                  graphicalItems: [gS],
                  dataStartIndex: NS,
                  dataEndIndex: qS
                }),
                wS = void 0 !== gS.type.defaultProps ? wg(wg({}, gS.type.defaultProps), gS.props) : gS.props,
                hS = wS.dataKey,
                JS = wS.maxBarSize,
                OS = wS["".concat(GS, "Id")],
                cS = wS["".concat(nS, "Id")],
                vS = IS.reduce((function(SS, gS) {
                  var tS = HS["".concat(gS.axisType, "Map")],
                    bS = wS["".concat(gS.axisType, "Id")];
                  tS && tS[bS] || "zAxis" === gS.axisType || (0, CS.e)(!1);
                  var XS = tS[bS];
                  return wg(wg({}, SS), {}, hg(hg({}, gS.axisType, XS), "".concat(gS.axisType, "Ticks"), (0, dS.$)(XS)))
                }), {}),
                ES = vS[nS],
                LS = vS["".concat(nS, "Ticks")],
                YS = tS && tS[OS] && tS[OS].hasStack && (0, dS._)(gS, tS[OS].stackGroups),
                AS = (0, ZS.i)(gS.type).indexOf("Bar") >= 0,
                yS = (0, dS.s)(ES, LS),
                VS = [],
                iS = PS && (0, dS.z)({
                  barSize: uS,
                  stackGroups: tS,
                  totalSize: Wg(vS, nS)
                });
              if (AS) {
                var WS, zS, US = XS()(JS) ? KS : JS,
                  pS = null !== (WS = null !== (zS = (0, dS.s)(ES, LS, !0)) && void 0 !== zS ? zS : US) && void 0 !== WS ? WS : 0;
                VS = (0, dS.w)({
                  barGap: kS,
                  barCategoryGap: aS,
                  bandSize: pS !== yS ? pS : yS,
                  sizeList: iS[cS],
                  maxBarSize: US
                }), pS !== yS && (VS = VS.map((function(SS) {
                  return wg(wg({}, SS), {}, {
                    position: wg(wg({}, SS.position), {}, {
                      offset: SS.position.offset - pS / 2
                    })
                  })
                })))
              }
              var sS = gS && gS.type && gS.type.getComposedData;
              sS && QS.push({
                props: wg(wg({}, sS(wg(wg({}, vS), {}, {
                  displayedData: DS,
                  props: SS,
                  dataKey: hS,
                  item: gS,
                  bandSize: yS,
                  barPosition: VS,
                  offset: bS,
                  stackedData: YS,
                  layout: fS,
                  dataStartIndex: NS,
                  dataEndIndex: qS
                }))), {}, hg(hg(hg({
                  key: gS.key || "item-".concat(jS)
                }, GS, vS[GS]), nS, vS[nS]), "animationId", xS)),
                childIndex: (0, ZS.v)(gS, SS.children),
                item: gS
              })
            })), QS
          },
          vS = function(SS, tS) {
            var bS = SS.props,
              XS = SS.dataStartIndex,
              xS = SS.dataEndIndex,
              NS = SS.updateId;
            if (!(0, ZS.z)({
                props: bS
              })) return null;
            var qS = bS.children,
              uS = bS.layout,
              kS = bS.stackOffset,
              jS = bS.data,
              GS = bS.reverseStackOrder,
              CS = ig(uS),
              nS = CS.numericAxisName,
              PS = CS.cateAxisName,
              QS = (0, ZS.e)(qS, gS),
              wS = (0, dS.X)(jS, QS, "".concat(nS, "Id"), "".concat(PS, "Id"), kS, GS),
              hS = IS.reduce((function(SS, HS) {
                var gS = "".concat(HS.axisType, "Map");
                return wg(wg({}, SS), {}, hg({}, gS, yg(bS, wg(wg({}, HS), {}, {
                  graphicalItems: QS,
                  stackGroups: HS.axisType === nS && wS,
                  dataStartIndex: XS,
                  dataEndIndex: xS
                }))))
              }), {}),
              JS = function(SS, HS) {
                var gS = SS.props,
                  tS = SS.graphicalItems,
                  bS = SS.xAxisMap,
                  XS = void 0 === bS ? {} : bS,
                  xS = SS.yAxisMap,
                  NS = void 0 === xS ? {} : xS,
                  qS = gS.width,
                  uS = gS.height,
                  IS = gS.children,
                  kS = gS.margin || {},
                  aS = (0, ZS.g)(IS, TS),
                  KS = (0, ZS.g)(IS, DS.b),
                  jS = Object.keys(NS).reduce((function(SS, HS) {
                    var gS = NS[HS],
                      tS = gS.orientation;
                    return gS.mirror || gS.hide ? SS : wg(wg({}, SS), {}, hg({}, tS, SS[tS] + gS.width))
                  }), {
                    left: kS.left || 0,
                    right: kS.right || 0
                  }),
                  GS = Object.keys(XS).reduce((function(SS, HS) {
                    var gS = XS[HS],
                      tS = gS.orientation;
                    return gS.mirror || gS.hide ? SS : wg(wg({}, SS), {}, hg({}, tS, fS()(SS, "".concat(tS)) + gS.height))
                  }), {
                    top: kS.top || 0,
                    bottom: kS.bottom || 0
                  }),
                  CS = wg(wg({}, GS), jS),
                  nS = CS.bottom;
                aS && (CS.bottom += aS.props.height || TS.defaultProps.height), KS && HS && (CS = (0, dS.e)(CS, tS, gS, HS));
                var PS = qS - CS.left - CS.right,
                  QS = uS - CS.top - CS.bottom;
                return wg(wg({
                  brushBottom: nS
                }, CS), {}, {
                  width: Math.max(PS, 0),
                  height: Math.max(QS, 0)
                })
              }(wg(wg({}, hS), {}, {
                props: bS,
                graphicalItems: QS
              }), null === tS || void 0 === tS ? void 0 : tS.legendBBox);
            Object.keys(hS).forEach((function(SS) {
              hS[SS] = KS(bS, hS[SS], JS, SS.replace("Map", ""), HS)
            }));
            var vS = function(SS) {
                var HS = (0, cS.h)(SS),
                  gS = (0, dS.$)(HS, !1, !0);
                return {
                  tooltipTicks: gS,
                  orderedTooltipTicks: aS()(gS, (function(SS) {
                    return SS.coordinate
                  })),
                  tooltipAxis: HS,
                  tooltipAxisBandSize: (0, dS.s)(HS, gS)
                }
              }(hS["".concat(PS, "Map")]),
              ES = OS(bS, wg(wg({}, hS), {}, {
                dataStartIndex: XS,
                dataEndIndex: xS,
                updateId: NS,
                graphicalItems: QS,
                stackGroups: wS,
                offset: JS
              }));
            return wg(wg({
              formattedGraphicalItems: ES,
              graphicalItems: QS,
              offset: JS,
              stackGroups: wS
            }, vS), hS)
          },
          ES = function(SS) {
            function gS(SS) {
              var bS, xS, qS;
              return function(SS, HS) {
                if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
              }(this, gS), hg(qS = Kg(this, gS, [SS]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), hg(qS, "accessibilityManager", new UH), hg(qS, "handleLegendBBoxUpdate", (function(SS) {
                if (SS) {
                  var HS = qS.state,
                    gS = HS.dataStartIndex,
                    tS = HS.dataEndIndex,
                    bS = HS.updateId;
                  qS.setState(wg({
                    legendBBox: SS
                  }, vS({
                    props: qS.props,
                    dataStartIndex: gS,
                    dataEndIndex: tS,
                    updateId: bS
                  }, wg(wg({}, qS.state), {}, {
                    legendBBox: SS
                  }))))
                }
              })), hg(qS, "handleReceiveSyncEvent", (function(SS, HS, gS) {
                if (qS.props.syncId === SS) {
                  if (gS === qS.eventEmitterSymbol && "function" !== typeof qS.props.syncMethod) return;
                  qS.applySyncEvent(HS)
                }
              })), hg(qS, "handleBrushChange", (function(SS) {
                var HS = SS.startIndex,
                  gS = SS.endIndex;
                if (HS !== qS.state.dataStartIndex || gS !== qS.state.dataEndIndex) {
                  var tS = qS.state.updateId;
                  qS.setState((function() {
                    return wg({
                      dataStartIndex: HS,
                      dataEndIndex: gS
                    }, vS({
                      props: qS.props,
                      dataStartIndex: HS,
                      dataEndIndex: gS,
                      updateId: tS
                    }, qS.state))
                  })), qS.triggerSyncEvent({
                    dataStartIndex: HS,
                    dataEndIndex: gS
                  })
                }
              })), hg(qS, "handleMouseEnter", (function(SS) {
                var HS = qS.getMouseInfo(SS);
                if (HS) {
                  var gS = wg(wg({}, HS), {}, {
                    isTooltipActive: !0
                  });
                  qS.setState(gS), qS.triggerSyncEvent(gS);
                  var tS = qS.props.onMouseEnter;
                  NS()(tS) && tS(gS, SS)
                }
              })), hg(qS, "triggeredAfterMouseMove", (function(SS) {
                var HS = qS.getMouseInfo(SS),
                  gS = HS ? wg(wg({}, HS), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                qS.setState(gS), qS.triggerSyncEvent(gS);
                var tS = qS.props.onMouseMove;
                NS()(tS) && tS(gS, SS)
              })), hg(qS, "handleItemMouseEnter", (function(SS) {
                qS.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: SS,
                    activePayload: SS.tooltipPayload,
                    activeCoordinate: SS.tooltipPosition || {
                      x: SS.cx,
                      y: SS.cy
                    }
                  }
                }))
              })), hg(qS, "handleItemMouseLeave", (function() {
                qS.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), hg(qS, "handleMouseMove", (function(SS) {
                SS.persist(), qS.throttleTriggeredAfterMouseMove(SS)
              })), hg(qS, "handleMouseLeave", (function(SS) {
                qS.throttleTriggeredAfterMouseMove.cancel();
                var HS = {
                  isTooltipActive: !1
                };
                qS.setState(HS), qS.triggerSyncEvent(HS);
                var gS = qS.props.onMouseLeave;
                NS()(gS) && gS(HS, SS)
              })), hg(qS, "handleOuterEvent", (function(SS) {
                var HS, gS = (0, ZS.j)(SS),
                  tS = fS()(qS.props, "".concat(gS));
                gS && NS()(tS) && tS(null !== (HS = /.*touch.*/i.test(gS) ? qS.getMouseInfo(SS.changedTouches[0]) : qS.getMouseInfo(SS)) && void 0 !== HS ? HS : {}, SS)
              })), hg(qS, "handleClick", (function(SS) {
                var HS = qS.getMouseInfo(SS);
                if (HS) {
                  var gS = wg(wg({}, HS), {}, {
                    isTooltipActive: !0
                  });
                  qS.setState(gS), qS.triggerSyncEvent(gS);
                  var tS = qS.props.onClick;
                  NS()(tS) && tS(gS, SS)
                }
              })), hg(qS, "handleMouseDown", (function(SS) {
                var HS = qS.props.onMouseDown;
                NS()(HS) && HS(qS.getMouseInfo(SS), SS)
              })), hg(qS, "handleMouseUp", (function(SS) {
                var HS = qS.props.onMouseUp;
                NS()(HS) && HS(qS.getMouseInfo(SS), SS)
              })), hg(qS, "handleTouchMove", (function(SS) {
                null != SS.changedTouches && SS.changedTouches.length > 0 && qS.throttleTriggeredAfterMouseMove(SS.changedTouches[0])
              })), hg(qS, "handleTouchStart", (function(SS) {
                null != SS.changedTouches && SS.changedTouches.length > 0 && qS.handleMouseDown(SS.changedTouches[0])
              })), hg(qS, "handleTouchEnd", (function(SS) {
                null != SS.changedTouches && SS.changedTouches.length > 0 && qS.handleMouseUp(SS.changedTouches[0])
              })), hg(qS, "handleDoubleClick", (function(SS) {
                var HS = qS.props.onDoubleClick;
                NS()(HS) && HS(qS.getMouseInfo(SS), SS)
              })), hg(qS, "handleContextMenu", (function(SS) {
                var HS = qS.props.onContextMenu;
                NS()(HS) && HS(qS.getMouseInfo(SS), SS)
              })), hg(qS, "triggerSyncEvent", (function(SS) {
                void 0 !== qS.props.syncId && YH.emit(AH, qS.props.syncId, SS, qS.eventEmitterSymbol)
              })), hg(qS, "applySyncEvent", (function(SS) {
                var HS = qS.props,
                  gS = HS.layout,
                  tS = HS.syncMethod,
                  bS = qS.state.updateId,
                  XS = SS.dataStartIndex,
                  xS = SS.dataEndIndex;
                if (void 0 !== SS.dataStartIndex || void 0 !== SS.dataEndIndex) qS.setState(wg({
                  dataStartIndex: XS,
                  dataEndIndex: xS
                }, vS({
                  props: qS.props,
                  dataStartIndex: XS,
                  dataEndIndex: xS,
                  updateId: bS
                }, qS.state)));
                else if (void 0 !== SS.activeTooltipIndex) {
                  var NS = SS.chartX,
                    uS = SS.chartY,
                    IS = SS.activeTooltipIndex,
                    fS = qS.state,
                    kS = fS.offset,
                    aS = fS.tooltipTicks;
                  if (!kS) return;
                  if ("function" === typeof tS) IS = tS(aS, SS);
                  else if ("value" === tS) {
                    IS = -1;
                    for (var KS = 0; KS < aS.length; KS++)
                      if (aS[KS].value === SS.activeLabel) {
                        IS = KS;
                        break
                      }
                  }
                  var jS = wg(wg({}, kS), {}, {
                      x: kS.left,
                      y: kS.top
                    }),
                    GS = Math.min(NS, jS.x + jS.width),
                    CS = Math.min(uS, jS.y + jS.height),
                    nS = aS[IS] && aS[IS].value,
                    PS = Lg(qS.state, qS.props.data, IS),
                    QS = aS[IS] ? {
                      x: "horizontal" === gS ? aS[IS].coordinate : GS,
                      y: "horizontal" === gS ? CS : aS[IS].coordinate
                    } : dg;
                  qS.setState(wg(wg({}, SS), {}, {
                    activeLabel: nS,
                    activeCoordinate: QS,
                    activePayload: PS,
                    activeTooltipIndex: IS
                  }))
                } else qS.setState(SS)
              })), hg(qS, "renderCursor", (function(SS) {
                var gS, bS = qS.state,
                  XS = bS.isTooltipActive,
                  xS = bS.activeCoordinate,
                  NS = bS.activePayload,
                  uS = bS.offset,
                  IS = bS.activeTooltipIndex,
                  fS = bS.tooltipAxisBandSize,
                  kS = qS.getTooltipEventType(),
                  aS = null !== (gS = SS.props.active) && void 0 !== gS ? gS : XS,
                  KS = qS.props.layout,
                  jS = SS.key || "_recharts-cursor";
                return tS.createElement(Xg, {
                  key: jS,
                  activeCoordinate: xS,
                  activePayload: NS,
                  activeTooltipIndex: IS,
                  chartName: HS,
                  element: SS,
                  isActive: aS,
                  layout: KS,
                  offset: uS,
                  tooltipAxisBandSize: fS,
                  tooltipEventType: kS
                })
              })), hg(qS, "renderPolarAxis", (function(SS, HS, gS) {
                var bS = fS()(SS, "type.axisType"),
                  XS = fS()(qS.state, "".concat(bS, "Map")),
                  xS = SS.type.defaultProps,
                  NS = void 0 !== xS ? wg(wg({}, xS), SS.props) : SS.props,
                  uS = XS && XS[NS["".concat(bS, "Id")]];
                return (0, tS.cloneElement)(SS, wg(wg({}, uS), {}, {
                  className: (0, GS.b)(bS, uS.className),
                  key: SS.key || "".concat(HS, "-").concat(gS),
                  ticks: (0, dS.$)(uS, !0)
                }))
              })), hg(qS, "renderPolarGrid", (function(SS) {
                var HS = SS.props,
                  gS = HS.radialLines,
                  bS = HS.polarAngles,
                  XS = HS.polarRadius,
                  xS = qS.state,
                  NS = xS.radiusAxisMap,
                  uS = xS.angleAxisMap,
                  IS = (0, cS.h)(NS),
                  fS = (0, cS.h)(uS),
                  kS = fS.cx,
                  aS = fS.cy,
                  KS = fS.innerRadius,
                  jS = fS.outerRadius;
                return (0, tS.cloneElement)(SS, {
                  polarAngles: Array.isArray(bS) ? bS : (0, dS.$)(fS, !0).map((function(SS) {
                    return SS.coordinate
                  })),
                  polarRadius: Array.isArray(XS) ? XS : (0, dS.$)(IS, !0).map((function(SS) {
                    return SS.coordinate
                  })),
                  cx: kS,
                  cy: aS,
                  innerRadius: KS,
                  outerRadius: jS,
                  key: SS.key || "polar-grid",
                  radialLines: gS
                })
              })), hg(qS, "renderLegend", (function() {
                var SS = qS.state.formattedGraphicalItems,
                  HS = qS.props,
                  gS = HS.children,
                  bS = HS.width,
                  XS = HS.height,
                  xS = qS.props.margin || {},
                  NS = bS - (xS.left || 0) - (xS.right || 0),
                  uS = (0, lS.d)({
                    children: gS,
                    formattedGraphicalItems: SS,
                    legendWidth: NS,
                    legendContent: kS
                  });
                if (!uS) return null;
                var IS = uS.item,
                  fS = kg(uS, Ng);
                return (0, tS.cloneElement)(IS, wg(wg({}, fS), {}, {
                  chartWidth: bS,
                  chartHeight: XS,
                  margin: xS,
                  onBBoxUpdate: qS.handleLegendBBoxUpdate
                }))
              })), hg(qS, "renderTooltip", (function() {
                var SS, HS = qS.props,
                  gS = HS.children,
                  bS = HS.accessibilityLayer,
                  XS = (0, ZS.g)(gS, QS.d);
                if (!XS) return null;
                var xS = qS.state,
                  NS = xS.isTooltipActive,
                  uS = xS.activeCoordinate,
                  IS = xS.activePayload,
                  fS = xS.activeLabel,
                  kS = xS.offset,
                  aS = null !== (SS = XS.props.active) && void 0 !== SS ? SS : NS;
                return (0, tS.cloneElement)(XS, {
                  viewBox: wg(wg({}, kS), {}, {
                    x: kS.left,
                    y: kS.top
                  }),
                  active: aS,
                  label: fS,
                  payload: aS ? IS : [],
                  coordinate: uS,
                  accessibilityLayer: bS
                })
              })), hg(qS, "renderBrush", (function(SS) {
                var HS = qS.props,
                  gS = HS.margin,
                  bS = HS.data,
                  XS = qS.state,
                  xS = XS.offset,
                  NS = XS.dataStartIndex,
                  uS = XS.dataEndIndex,
                  IS = XS.updateId;
                return (0, tS.cloneElement)(SS, {
                  key: SS.key || "_recharts-brush",
                  onChange: (0, dS.m)(qS.handleBrushChange, SS.props.onChange),
                  data: bS,
                  x: (0, cS.t)(SS.props.x) ? SS.props.x : xS.left,
                  y: (0, cS.t)(SS.props.y) ? SS.props.y : xS.top + xS.height + xS.brushBottom - (gS.bottom || 0),
                  width: (0, cS.t)(SS.props.width) ? SS.props.width : xS.width,
                  startIndex: NS,
                  endIndex: uS,
                  updateId: "brush-".concat(IS)
                })
              })), hg(qS, "renderReferenceElement", (function(SS, HS, gS) {
                if (!SS) return null;
                var bS = qS.clipPathId,
                  XS = qS.state,
                  xS = XS.xAxisMap,
                  NS = XS.yAxisMap,
                  uS = XS.offset,
                  IS = SS.type.defaultProps || {},
                  fS = SS.props,
                  kS = fS.xAxisId,
                  aS = void 0 === kS ? IS.xAxisId : kS,
                  KS = fS.yAxisId,
                  jS = void 0 === KS ? IS.yAxisId : KS;
                return (0, tS.cloneElement)(SS, {
                  key: SS.key || "".concat(HS, "-").concat(gS),
                  xAxis: xS[aS],
                  yAxis: NS[jS],
                  viewBox: {
                    x: uS.left,
                    y: uS.top,
                    width: uS.width,
                    height: uS.height
                  },
                  clipPathId: bS
                })
              })), hg(qS, "renderActivePoints", (function(SS) {
                var HS = SS.item,
                  tS = SS.activePoint,
                  bS = SS.basePoint,
                  XS = SS.childIndex,
                  xS = SS.isRange,
                  NS = [],
                  qS = HS.props.key,
                  uS = void 0 !== HS.item.type.defaultProps ? wg(wg({}, HS.item.type.defaultProps), HS.item.props) : HS.item.props,
                  IS = uS.activeDot,
                  fS = wg(wg({
                    index: XS,
                    dataKey: uS.dataKey,
                    cx: tS.x,
                    cy: tS.y,
                    r: 4,
                    fill: (0, dS.U)(HS.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: tS.payload,
                    value: tS.value
                  }, (0, ZS.b)(IS, !1)), (0, yH.l)(IS));
                return NS.push(gS.renderActiveDot(IS, fS, "".concat(qS, "-activePoint-").concat(XS))), bS ? NS.push(gS.renderActiveDot(IS, wg(wg({}, fS), {}, {
                  cx: bS.x,
                  cy: bS.y
                }), "".concat(qS, "-basePoint-").concat(XS))) : xS && NS.push(null), NS
              })), hg(qS, "renderGraphicChild", (function(SS, HS, gS) {
                var bS = qS.filterFormatItem(SS, HS, gS);
                if (!bS) return null;
                var xS = qS.getTooltipEventType(),
                  NS = qS.state,
                  uS = NS.isTooltipActive,
                  IS = NS.tooltipAxis,
                  fS = NS.activeTooltipIndex,
                  kS = NS.activeLabel,
                  aS = qS.props.children,
                  KS = (0, ZS.g)(aS, QS.d),
                  jS = bS.props,
                  GS = jS.points,
                  CS = jS.isRange,
                  nS = jS.baseLine,
                  PS = void 0 !== bS.item.type.defaultProps ? wg(wg({}, bS.item.type.defaultProps), bS.item.props) : bS.item.props,
                  DS = PS.activeDot,
                  wS = PS.hide,
                  hS = PS.activeBar,
                  JS = PS.activeShape,
                  OS = Boolean(!wS && uS && KS && (DS || hS || JS)),
                  vS = {};
                "axis" !== xS && KS && "click" === KS.props.trigger ? vS = {
                  onClick: (0, dS.m)(qS.handleItemMouseEnter, SS.props.onClick)
                } : "axis" !== xS && (vS = {
                  onMouseLeave: (0, dS.m)(qS.handleItemMouseLeave, SS.props.onMouseLeave),
                  onMouseEnter: (0, dS.m)(qS.handleItemMouseEnter, SS.props.onMouseEnter)
                });
                var ES = (0, tS.cloneElement)(SS, wg(wg({}, bS.props), vS));
                if (OS) {
                  if (!(fS >= 0)) {
                    var LS, YS = (null !== (LS = qS.getItemByXY(qS.state.activeCoordinate)) && void 0 !== LS ? LS : {
                        graphicalItem: ES
                      }).graphicalItem,
                      AS = YS.item,
                      yS = void 0 === AS ? SS : AS,
                      VS = YS.childIndex,
                      iS = wg(wg(wg({}, bS.props), vS), {}, {
                        activeIndex: VS
                      });
                    return [(0, tS.cloneElement)(yS, iS), null, null]
                  }
                  var WS, zS;
                  if (IS.dataKey && !IS.allowDuplicatedCategory) {
                    var US = "function" === typeof IS.dataKey ? function(SS) {
                      return "function" === typeof IS.dataKey ? IS.dataKey(SS.payload) : null
                    } : "payload.".concat(IS.dataKey.toString());
                    WS = (0, cS.g)(GS, US, kS), zS = CS && nS && (0, cS.g)(nS, US, kS)
                  } else WS = null === GS || void 0 === GS ? void 0 : GS[fS], zS = CS && nS && nS[fS];
                  if (JS || hS) {
                    var pS = void 0 !== SS.props.activeIndex ? SS.props.activeIndex : fS;
                    return [(0, tS.cloneElement)(SS, wg(wg(wg({}, bS.props), vS), {}, {
                      activeIndex: pS
                    })), null, null]
                  }
                  if (!XS()(WS)) return [ES].concat(ng(qS.renderActivePoints({
                    item: bS,
                    activePoint: WS,
                    basePoint: zS,
                    childIndex: fS,
                    isRange: CS
                  })))
                }
                return CS ? [ES, null, null] : [ES, null]
              })), hg(qS, "renderCustomized", (function(SS, HS, gS) {
                return (0, tS.cloneElement)(SS, wg(wg({
                  key: "recharts-customized-".concat(gS)
                }, qS.props), qS.state))
              })), hg(qS, "renderMap", {
                CartesianGrid: {
                  handler: cg,
                  once: !0
                },
                ReferenceArea: {
                  handler: qS.renderReferenceElement
                },
                ReferenceLine: {
                  handler: cg
                },
                ReferenceDot: {
                  handler: qS.renderReferenceElement
                },
                XAxis: {
                  handler: cg
                },
                YAxis: {
                  handler: cg
                },
                Brush: {
                  handler: qS.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: qS.renderGraphicChild
                },
                Line: {
                  handler: qS.renderGraphicChild
                },
                Area: {
                  handler: qS.renderGraphicChild
                },
                Radar: {
                  handler: qS.renderGraphicChild
                },
                RadialBar: {
                  handler: qS.renderGraphicChild
                },
                Scatter: {
                  handler: qS.renderGraphicChild
                },
                Pie: {
                  handler: qS.renderGraphicChild
                },
                Funnel: {
                  handler: qS.renderGraphicChild
                },
                Tooltip: {
                  handler: qS.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: qS.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: qS.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: qS.renderPolarAxis
                },
                Customized: {
                  handler: qS.renderCustomized
                }
              }), qS.clipPathId = "".concat(null !== (bS = SS.id) && void 0 !== bS ? bS : (0, cS.y)("recharts"), "-clip"), qS.throttleTriggeredAfterMouseMove = jS()(qS.triggeredAfterMouseMove, null !== (xS = SS.throttleDelay) && void 0 !== xS ? xS : 1e3 / 60), qS.state = {}, qS
            }
            return function(SS, HS) {
              if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
              SS.prototype = Object.create(HS && HS.prototype, {
                constructor: {
                  value: SS,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(SS, "prototype", {
                writable: !1
              }), HS && Cg(SS, HS)
            }(gS, SS), bS = gS, qS = [{
              key: "componentDidMount",
              value: function() {
                var SS, HS;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (SS = this.props.margin.left) && void 0 !== SS ? SS : 0,
                    top: null !== (HS = this.props.margin.top) && void 0 !== HS ? HS : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var SS = this.props,
                  HS = SS.children,
                  gS = SS.data,
                  tS = SS.height,
                  bS = SS.layout,
                  XS = (0, ZS.g)(HS, QS.d);
                if (XS) {
                  var xS = XS.props.defaultIndex;
                  if (!("number" !== typeof xS || xS < 0 || xS > this.state.tooltipTicks.length - 1)) {
                    var NS = this.state.tooltipTicks[xS] && this.state.tooltipTicks[xS].value,
                      qS = Lg(this.state, gS, xS, NS),
                      uS = this.state.tooltipTicks[xS].coordinate,
                      IS = (this.state.offset.top + tS) / 2,
                      fS = "horizontal" === bS ? {
                        x: uS,
                        y: IS
                      } : {
                        y: uS,
                        x: IS
                      },
                      kS = this.state.formattedGraphicalItems.find((function(SS) {
                        return "Scatter" === SS.item.type.name
                      }));
                    kS && (fS = wg(wg({}, fS), kS.props.points[xS].tooltipPosition), qS = kS.props.points[xS].tooltipPayload);
                    var aS = {
                      activeTooltipIndex: xS,
                      isTooltipActive: !0,
                      activeLabel: NS,
                      activePayload: qS,
                      activeCoordinate: fS
                    };
                    this.setState(aS), this.renderCursor(XS), this.accessibilityManager.setIndex(xS)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(SS, HS) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== HS.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== SS.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== SS.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (gS = this.props.margin.left) && void 0 !== gS ? gS : 0,
                    top: null !== (tS = this.props.margin.top) && void 0 !== tS ? tS : 0
                  }
                }), null) : null;
                var gS, tS
              }
            }, {
              key: "componentDidUpdate",
              value: function(SS) {
                (0, ZS.r)([(0, ZS.g)(SS.children, QS.d)], [(0, ZS.g)(this.props.children, QS.d)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var SS = (0, ZS.g)(this.props.children, QS.d);
                if (SS && "boolean" === typeof SS.props.shared) {
                  var HS = SS.props.shared ? "axis" : "item";
                  return uS.indexOf(HS) >= 0 ? HS : xS
                }
                return xS
              }
            }, {
              key: "getMouseInfo",
              value: function(SS) {
                if (!this.container) return null;
                var HS = this.container,
                  gS = HS.getBoundingClientRect(),
                  tS = (0, oS.d)(gS),
                  bS = {
                    chartX: Math.round(SS.pageX - tS.left),
                    chartY: Math.round(SS.pageY - tS.top)
                  },
                  XS = gS.width / HS.offsetWidth || 1,
                  xS = this.inRange(bS.chartX, bS.chartY, XS);
                if (!xS) return null;
                var NS = this.state,
                  qS = NS.xAxisMap,
                  uS = NS.yAxisMap,
                  IS = this.getTooltipEventType(),
                  fS = Yg(this.state, this.props.data, this.props.layout, xS);
                if ("axis" !== IS && qS && uS) {
                  var kS = (0, cS.h)(qS).scale,
                    aS = (0, cS.h)(uS).scale,
                    KS = kS && kS.invert ? kS.invert(bS.chartX) : null,
                    jS = aS && aS.invert ? aS.invert(bS.chartY) : null;
                  return wg(wg({}, bS), {}, {
                    xValue: KS,
                    yValue: jS
                  }, fS)
                }
                return fS ? wg(wg({}, bS), fS) : null
              }
            }, {
              key: "inRange",
              value: function(SS, HS) {
                var gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  tS = this.props.layout,
                  bS = SS / gS,
                  XS = HS / gS;
                if ("horizontal" === tS || "vertical" === tS) {
                  var xS = this.state.offset;
                  return bS >= xS.left && bS <= xS.left + xS.width && XS >= xS.top && XS <= xS.top + xS.height ? {
                    x: bS,
                    y: XS
                  } : null
                }
                var NS = this.state,
                  qS = NS.angleAxisMap,
                  uS = NS.radiusAxisMap;
                if (qS && uS) {
                  var IS = (0, cS.h)(qS);
                  return (0, vH.h)({
                    x: bS,
                    y: XS
                  }, IS)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var SS = this.props.children,
                  HS = this.getTooltipEventType(),
                  gS = (0, ZS.g)(SS, QS.d),
                  tS = {};
                return gS && "axis" === HS && (tS = "click" === gS.props.trigger ? {
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
                }), wg(wg({}, (0, yH.l)(this.props, this.handleOuterEvent)), tS)
              }
            }, {
              key: "addListener",
              value: function() {
                YH.on(AH, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                YH.removeListener(AH, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(SS, HS, gS) {
                for (var tS = this.state.formattedGraphicalItems, bS = 0, XS = tS.length; bS < XS; bS++) {
                  var xS = tS[bS];
                  if (xS.item === SS || xS.props.key === SS.key || HS === (0, ZS.i)(xS.item.type) && gS === xS.childIndex) return xS
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var SS = this.clipPathId,
                  HS = this.state.offset,
                  gS = HS.left,
                  bS = HS.top,
                  XS = HS.height,
                  xS = HS.width;
                return tS.createElement("defs", null, tS.createElement("clipPath", {
                  id: SS
                }, tS.createElement("rect", {
                  x: gS,
                  y: bS,
                  height: XS,
                  width: xS
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var SS = this.state.xAxisMap;
                return SS ? Object.entries(SS).reduce((function(SS, HS) {
                  var gS = fg(HS, 2),
                    tS = gS[0],
                    bS = gS[1];
                  return wg(wg({}, SS), {}, hg({}, tS, bS.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var SS = this.state.yAxisMap;
                return SS ? Object.entries(SS).reduce((function(SS, HS) {
                  var gS = fg(HS, 2),
                    tS = gS[0],
                    bS = gS[1];
                  return wg(wg({}, SS), {}, hg({}, tS, bS.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(SS) {
                var HS;
                return null === (HS = this.state.xAxisMap) || void 0 === HS || null === (HS = HS[SS]) || void 0 === HS ? void 0 : HS.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(SS) {
                var HS;
                return null === (HS = this.state.yAxisMap) || void 0 === HS || null === (HS = HS[SS]) || void 0 === HS ? void 0 : HS.scale
              }
            }, {
              key: "getItemByXY",
              value: function(SS) {
                var HS = this.state,
                  gS = HS.formattedGraphicalItems,
                  tS = HS.activeItem;
                if (gS && gS.length)
                  for (var bS = 0, XS = gS.length; bS < XS; bS++) {
                    var xS = gS[bS],
                      NS = xS.props,
                      qS = xS.item,
                      uS = void 0 !== qS.type.defaultProps ? wg(wg({}, qS.type.defaultProps), qS.props) : qS.props,
                      IS = (0, ZS.i)(qS.type);
                    if ("Bar" === IS) {
                      var fS = (NS.data || []).find((function(HS) {
                        return (0, hS.i)(SS, HS)
                      }));
                      if (fS) return {
                        graphicalItem: xS,
                        payload: fS
                      }
                    } else if ("RadialBar" === IS) {
                      var kS = (NS.data || []).find((function(HS) {
                        return (0, vH.h)(SS, HS)
                      }));
                      if (kS) return {
                        graphicalItem: xS,
                        payload: kS
                      }
                    } else if ((0, pH.k)(xS, tS) || (0, pH.o)(xS, tS) || (0, pH.p)(xS, tS)) {
                      var aS = (0, pH.g)({
                          graphicalItem: xS,
                          activeTooltipItem: tS,
                          itemData: uS.data
                        }),
                        KS = void 0 === uS.activeIndex ? aS : uS.activeIndex;
                      return {
                        graphicalItem: wg(wg({}, xS), {}, {
                          childIndex: KS
                        }),
                        payload: (0, pH.p)(xS, tS) ? uS.data[aS] : xS.props.data[aS]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var SS = this;
                if (!(0, ZS.z)(this)) return null;
                var HS, gS, bS = this.props,
                  XS = bS.children,
                  xS = bS.className,
                  NS = bS.width,
                  qS = bS.height,
                  uS = bS.style,
                  IS = bS.compact,
                  fS = bS.title,
                  kS = bS.desc,
                  aS = kg(bS, qg),
                  KS = (0, ZS.b)(aS, !1);
                if (IS) return tS.createElement(xg.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, tS.createElement(nS.d, Ig({}, KS, {
                  width: NS,
                  height: qS,
                  title: fS,
                  desc: kS
                }), this.renderClipPath(), (0, ZS.x)(XS, this.renderMap)));
                this.props.accessibilityLayer && (KS.tabIndex = null !== (HS = this.props.tabIndex) && void 0 !== HS ? HS : 0, KS.role = null !== (gS = this.props.role) && void 0 !== gS ? gS : "application", KS.onKeyDown = function(HS) {
                  SS.accessibilityManager.keyboardEvent(HS)
                }, KS.onFocus = function() {
                  SS.accessibilityManager.focus()
                });
                var jS = this.parseEventsOfWrapper();
                return tS.createElement(xg.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, tS.createElement("div", Ig({
                  className: (0, GS.b)("recharts-wrapper", xS),
                  style: wg({
                    position: "relative",
                    cursor: "default",
                    width: NS,
                    height: qS
                  }, uS)
                }, jS, {
                  ref: function(HS) {
                    SS.container = HS
                  }
                }), tS.createElement(nS.d, Ig({}, KS, {
                  width: NS,
                  height: qS,
                  title: fS,
                  desc: kS,
                  style: Og
                }), this.renderClipPath(), (0, ZS.x)(XS, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], qS && ag(bS.prototype, qS), IS && ag(bS, IS), Object.defineProperty(bS, "prototype", {
              writable: !1
            }), bS;
            var bS, qS, IS
          }(tS.Component);
        hg(ES, "displayName", HS), hg(ES, "defaultProps", wg({
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
        }, JS)), hg(ES, "getDerivedStateFromProps", (function(SS, HS) {
          var gS = SS.dataKey,
            tS = SS.data,
            bS = SS.children,
            xS = SS.width,
            NS = SS.height,
            qS = SS.layout,
            uS = SS.stackOffset,
            IS = SS.margin,
            fS = HS.dataStartIndex,
            kS = HS.dataEndIndex;
          if (void 0 === HS.updateId) {
            var aS = Vg(SS);
            return wg(wg(wg({}, aS), {}, {
              updateId: 0
            }, vS(wg(wg({
              props: SS
            }, aS), {}, {
              updateId: 0
            }), HS)), {}, {
              prevDataKey: gS,
              prevData: tS,
              prevWidth: xS,
              prevHeight: NS,
              prevLayout: qS,
              prevStackOffset: uS,
              prevMargin: IS,
              prevChildren: bS
            })
          }
          if (gS !== HS.prevDataKey || tS !== HS.prevData || xS !== HS.prevWidth || NS !== HS.prevHeight || qS !== HS.prevLayout || uS !== HS.prevStackOffset || !(0, EH.d)(IS, HS.prevMargin)) {
            var KS = Vg(SS),
              jS = {
                chartX: HS.chartX,
                chartY: HS.chartY,
                isTooltipActive: HS.isTooltipActive
              },
              GS = wg(wg({}, Yg(HS, tS, qS)), {}, {
                updateId: HS.updateId + 1
              }),
              CS = wg(wg(wg({}, KS), jS), GS);
            return wg(wg(wg({}, CS), vS(wg({
              props: SS
            }, CS), HS)), {}, {
              prevDataKey: gS,
              prevData: tS,
              prevWidth: xS,
              prevHeight: NS,
              prevLayout: qS,
              prevStackOffset: uS,
              prevMargin: IS,
              prevChildren: bS
            })
          }
          if (!(0, ZS.r)(bS, HS.prevChildren)) {
            var nS, PS, QS, DS, wS = (0, ZS.g)(bS, TS),
              hS = wS && null !== (nS = null === (PS = wS.props) || void 0 === PS ? void 0 : PS.startIndex) && void 0 !== nS ? nS : fS,
              JS = wS && null !== (QS = null === (DS = wS.props) || void 0 === DS ? void 0 : DS.endIndex) && void 0 !== QS ? QS : kS,
              OS = hS !== fS || JS !== kS,
              dS = !XS()(tS) && !OS ? HS.updateId : HS.updateId + 1;
            return wg(wg({
              updateId: dS
            }, vS(wg(wg({
              props: SS
            }, HS), {}, {
              updateId: dS,
              dataStartIndex: hS,
              dataEndIndex: JS
            }), HS)), {}, {
              prevChildren: bS,
              dataStartIndex: hS,
              dataEndIndex: JS
            })
          }
          return null
        })), hg(ES, "renderActiveDot", (function(SS, HS, gS) {
          var bS;
          return bS = (0, tS.isValidElement)(SS) ? (0, tS.cloneElement)(SS, HS) : NS()(SS) ? SS(HS) : tS.createElement(wS.e, HS), tS.createElement(PS.d, {
            className: "recharts-active-dot",
            key: gS
          }, bS)
        }));
        var LS = (0, tS.forwardRef)((function(SS, HS) {
          return tS.createElement(ES, Ig({}, SS, {
            ref: HS
          }))
        }));
        return LS.displayName = ES.displayName, LS
      }
  },
  6474: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    var tS = function(SS) {
      return null
    };
    tS.displayName = "Cell"
  },
  6419: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => vS
    });
    var tS = gS(64),
      bS = gS(5639),
      XS = gS.n(bS),
      xS = gS(5458),
      NS = gS.n(xS),
      qS = gS(5283),
      uS = gS.n(qS),
      IS = gS(5259),
      fS = gS(6304),
      kS = gS(5650),
      aS = gS(5340),
      KS = gS(6421);

    function jS(SS) {
      return jS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, jS(SS)
    }
    var GS = ["offset"];

    function CS(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return nS(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return nS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return nS(SS, HS)
      }(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function PS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function QS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function DS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? QS(Object(gS), !0).forEach((function(HS) {
          wS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : QS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function wS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != jS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != jS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == jS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function hS() {
      return hS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, hS.apply(this, arguments)
    }
    var ZS = function(SS) {
        var HS = SS.value,
          gS = SS.formatter,
          tS = XS()(SS.children) ? HS : SS.children;
        return NS()(gS) ? gS(tS) : tS
      },
      JS = function(SS, HS, gS) {
        var bS, xS, NS = SS.position,
          qS = SS.viewBox,
          uS = SS.offset,
          fS = SS.className,
          kS = qS,
          jS = kS.cx,
          GS = kS.cy,
          CS = kS.innerRadius,
          nS = kS.outerRadius,
          PS = kS.startAngle,
          QS = kS.endAngle,
          DS = kS.clockWise,
          wS = (CS + nS) / 2,
          ZS = function(SS, HS) {
            return (0, aS.w)(HS - SS) * Math.min(Math.abs(HS - SS), 360)
          }(PS, QS),
          JS = ZS >= 0 ? 1 : -1;
        "insideStart" === NS ? (bS = PS + JS * uS, xS = DS) : "insideEnd" === NS ? (bS = QS - JS * uS, xS = !DS) : "end" === NS && (bS = QS + JS * uS, xS = DS), xS = ZS <= 0 ? xS : !xS;
        var OS = (0, KS.i)(jS, GS, wS, bS),
          dS = (0, KS.i)(jS, GS, wS, bS + 359 * (xS ? 1 : -1)),
          cS = "M".concat(OS.x, ",").concat(OS.y, "\n    A").concat(wS, ",").concat(wS, ",0,1,").concat(xS ? 0 : 1, ",\n    ").concat(dS.x, ",").concat(dS.y),
          vS = XS()(SS.id) ? (0, aS.y)("recharts-radial-line-") : SS.id;
        return tS.createElement("text", hS({}, gS, {
          dominantBaseline: "central",
          className: (0, IS.b)("recharts-radial-bar-label", fS)
        }), tS.createElement("defs", null, tS.createElement("path", {
          id: vS,
          d: cS
        })), tS.createElement("textPath", {
          xlinkHref: "#".concat(vS)
        }, HS))
      },
      OS = function(SS) {
        var HS = SS.viewBox,
          gS = SS.offset,
          tS = SS.position,
          bS = HS,
          XS = bS.cx,
          xS = bS.cy,
          NS = bS.innerRadius,
          qS = bS.outerRadius,
          uS = (bS.startAngle + bS.endAngle) / 2;
        if ("outside" === tS) {
          var IS = (0, KS.i)(XS, xS, qS + gS, uS),
            fS = IS.x;
          return {
            x: fS,
            y: IS.y,
            textAnchor: fS >= XS ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === tS) return {
          x: XS,
          y: xS,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === tS) return {
          x: XS,
          y: xS,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === tS) return {
          x: XS,
          y: xS,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var kS = (NS + qS) / 2,
          aS = (0, KS.i)(XS, xS, kS, uS);
        return {
          x: aS.x,
          y: aS.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      dS = function(SS) {
        var HS = SS.viewBox,
          gS = SS.parentViewBox,
          tS = SS.offset,
          bS = SS.position,
          XS = HS,
          xS = XS.x,
          NS = XS.y,
          qS = XS.width,
          IS = XS.height,
          fS = IS >= 0 ? 1 : -1,
          kS = fS * tS,
          KS = fS > 0 ? "end" : "start",
          jS = fS > 0 ? "start" : "end",
          GS = qS >= 0 ? 1 : -1,
          CS = GS * tS,
          nS = GS > 0 ? "end" : "start",
          PS = GS > 0 ? "start" : "end";
        if ("top" === bS) return DS(DS({}, {
          x: xS + qS / 2,
          y: NS - fS * tS,
          textAnchor: "middle",
          verticalAnchor: KS
        }), gS ? {
          height: Math.max(NS - gS.y, 0),
          width: qS
        } : {});
        if ("bottom" === bS) return DS(DS({}, {
          x: xS + qS / 2,
          y: NS + IS + kS,
          textAnchor: "middle",
          verticalAnchor: jS
        }), gS ? {
          height: Math.max(gS.y + gS.height - (NS + IS), 0),
          width: qS
        } : {});
        if ("left" === bS) {
          var QS = {
            x: xS - CS,
            y: NS + IS / 2,
            textAnchor: nS,
            verticalAnchor: "middle"
          };
          return DS(DS({}, QS), gS ? {
            width: Math.max(QS.x - gS.x, 0),
            height: IS
          } : {})
        }
        if ("right" === bS) {
          var wS = {
            x: xS + qS + CS,
            y: NS + IS / 2,
            textAnchor: PS,
            verticalAnchor: "middle"
          };
          return DS(DS({}, wS), gS ? {
            width: Math.max(gS.x + gS.width - wS.x, 0),
            height: IS
          } : {})
        }
        var hS = gS ? {
          width: qS,
          height: IS
        } : {};
        return "insideLeft" === bS ? DS({
          x: xS + CS,
          y: NS + IS / 2,
          textAnchor: PS,
          verticalAnchor: "middle"
        }, hS) : "insideRight" === bS ? DS({
          x: xS + qS - CS,
          y: NS + IS / 2,
          textAnchor: nS,
          verticalAnchor: "middle"
        }, hS) : "insideTop" === bS ? DS({
          x: xS + qS / 2,
          y: NS + kS,
          textAnchor: "middle",
          verticalAnchor: jS
        }, hS) : "insideBottom" === bS ? DS({
          x: xS + qS / 2,
          y: NS + IS - kS,
          textAnchor: "middle",
          verticalAnchor: KS
        }, hS) : "insideTopLeft" === bS ? DS({
          x: xS + CS,
          y: NS + kS,
          textAnchor: PS,
          verticalAnchor: jS
        }, hS) : "insideTopRight" === bS ? DS({
          x: xS + qS - CS,
          y: NS + kS,
          textAnchor: nS,
          verticalAnchor: jS
        }, hS) : "insideBottomLeft" === bS ? DS({
          x: xS + CS,
          y: NS + IS - kS,
          textAnchor: PS,
          verticalAnchor: KS
        }, hS) : "insideBottomRight" === bS ? DS({
          x: xS + qS - CS,
          y: NS + IS - kS,
          textAnchor: nS,
          verticalAnchor: KS
        }, hS) : uS()(bS) && ((0, aS.t)(bS.x) || (0, aS.u)(bS.x)) && ((0, aS.t)(bS.y) || (0, aS.u)(bS.y)) ? DS({
          x: xS + (0, aS.m)(bS.x, qS),
          y: NS + (0, aS.m)(bS.y, IS),
          textAnchor: "end",
          verticalAnchor: "end"
        }, hS) : DS({
          x: xS + qS / 2,
          y: NS + IS / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, hS)
      },
      cS = function(SS) {
        return "cx" in SS && (0, aS.t)(SS.cx)
      };

    function vS(SS) {
      var HS, gS = SS.offset,
        bS = DS({
          offset: void 0 === gS ? 5 : gS
        }, PS(SS, GS)),
        xS = bS.viewBox,
        qS = bS.position,
        uS = bS.value,
        aS = bS.children,
        KS = bS.content,
        jS = bS.className,
        CS = void 0 === jS ? "" : jS,
        nS = bS.textBreakAll;
      if (!xS || XS()(uS) && XS()(aS) && !(0, tS.isValidElement)(KS) && !NS()(KS)) return null;
      if ((0, tS.isValidElement)(KS)) return (0, tS.cloneElement)(KS, bS);
      if (NS()(KS)) {
        if (HS = (0, tS.createElement)(KS, bS), (0, tS.isValidElement)(HS)) return HS
      } else HS = ZS(bS);
      var QS = cS(xS),
        wS = (0, kS.b)(bS, !0);
      if (QS && ("insideStart" === qS || "insideEnd" === qS || "end" === qS)) return JS(bS, HS, wS);
      var vS = QS ? OS(bS) : dS(bS);
      return tS.createElement(fS.c, hS({
        className: (0, IS.b)("recharts-label", CS)
      }, wS, vS, {
        breakAll: nS
      }), HS)
    }
    vS.displayName = "Label";
    var ES = function(SS) {
      var HS = SS.cx,
        gS = SS.cy,
        tS = SS.angle,
        bS = SS.startAngle,
        XS = SS.endAngle,
        xS = SS.r,
        NS = SS.radius,
        qS = SS.innerRadius,
        uS = SS.outerRadius,
        IS = SS.x,
        fS = SS.y,
        kS = SS.top,
        KS = SS.left,
        jS = SS.width,
        GS = SS.height,
        CS = SS.clockWise,
        nS = SS.labelViewBox;
      if (nS) return nS;
      if ((0, aS.t)(jS) && (0, aS.t)(GS)) {
        if ((0, aS.t)(IS) && (0, aS.t)(fS)) return {
          x: IS,
          y: fS,
          width: jS,
          height: GS
        };
        if ((0, aS.t)(kS) && (0, aS.t)(KS)) return {
          x: kS,
          y: KS,
          width: jS,
          height: GS
        }
      }
      return (0, aS.t)(IS) && (0, aS.t)(fS) ? {
        x: IS,
        y: fS,
        width: 0,
        height: 0
      } : (0, aS.t)(HS) && (0, aS.t)(gS) ? {
        cx: HS,
        cy: gS,
        startAngle: bS || tS || 0,
        endAngle: XS || tS || 0,
        innerRadius: qS || 0,
        outerRadius: uS || NS || xS || 0,
        clockWise: CS
      } : SS.viewBox ? SS.viewBox : {}
    };
    vS.parseViewBox = ES, vS.renderCallByParent = function(SS, HS) {
      var gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!SS || !SS.children && gS && !SS.label) return null;
      var bS = SS.children,
        XS = ES(SS),
        xS = (0, kS.e)(bS, vS).map((function(SS, gS) {
          return (0, tS.cloneElement)(SS, {
            viewBox: HS || XS,
            key: "label-".concat(gS)
          })
        }));
      if (!gS) return xS;
      var qS = function(SS, HS) {
        return SS ? !0 === SS ? tS.createElement(vS, {
          key: "label-implicit",
          viewBox: HS
        }) : (0, aS.r)(SS) ? tS.createElement(vS, {
          key: "label-implicit",
          viewBox: HS,
          value: SS
        }) : (0, tS.isValidElement)(SS) ? SS.type === vS ? (0, tS.cloneElement)(SS, {
          key: "label-implicit",
          viewBox: HS
        }) : tS.createElement(vS, {
          key: "label-implicit",
          content: SS,
          viewBox: HS
        }) : NS()(SS) ? tS.createElement(vS, {
          key: "label-implicit",
          content: SS,
          viewBox: HS
        }) : uS()(SS) ? tS.createElement(vS, hS({
          viewBox: HS
        }, SS, {
          key: "label-implicit"
        })) : null : null
      }(SS.label, HS || XS);
      return [qS].concat(CS(xS))
    }
  },
  6479: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => dS
    });
    var tS = gS(64),
      bS = gS(5639),
      XS = gS.n(bS),
      xS = gS(5283),
      NS = gS.n(xS),
      qS = gS(5458),
      uS = gS.n(qS),
      IS = gS(6486),
      fS = gS.n(IS),
      kS = gS(6419),
      aS = gS(6152),
      KS = gS(5650),
      jS = gS(6315);

    function GS(SS) {
      return GS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, GS(SS)
    }
    var CS = ["valueAccessor"],
      nS = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function PS(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return QS(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return QS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return QS(SS, HS)
      }(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function QS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function DS() {
      return DS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, DS.apply(this, arguments)
    }

    function wS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function hS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? wS(Object(gS), !0).forEach((function(HS) {
          ZS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : wS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function ZS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != GS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != GS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == GS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function JS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }
    var OS = function(SS) {
      return Array.isArray(SS.value) ? fS()(SS.value) : SS.value
    };

    function dS(SS) {
      var HS = SS.valueAccessor,
        gS = void 0 === HS ? OS : HS,
        bS = JS(SS, CS),
        xS = bS.data,
        NS = bS.dataKey,
        qS = bS.clockWise,
        uS = bS.id,
        IS = bS.textBreakAll,
        fS = JS(bS, nS);
      return xS && xS.length ? tS.createElement(aS.d, {
        className: "recharts-label-list"
      }, xS.map((function(SS, HS) {
        var bS = XS()(NS) ? gS(SS, HS) : (0, jS.jb)(SS && SS.payload, NS),
          xS = XS()(uS) ? {} : {
            id: "".concat(uS, "-").concat(HS)
          };
        return tS.createElement(kS.d, DS({}, (0, KS.b)(SS, !0), fS, xS, {
          parentViewBox: SS.parentViewBox,
          value: bS,
          textBreakAll: IS,
          viewBox: kS.d.parseViewBox(XS()(qS) ? SS : hS(hS({}, SS), {}, {
            clockWise: qS
          })),
          key: "label-".concat(HS),
          index: HS
        }))
      }))) : null
    }
    dS.displayName = "LabelList", dS.renderCallByParent = function(SS, HS) {
      var gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!SS || !SS.children && gS && !SS.label) return null;
      var bS = SS.children,
        XS = (0, KS.e)(bS, dS).map((function(SS, gS) {
          return (0, tS.cloneElement)(SS, {
            data: HS,
            key: "labelList-".concat(gS)
          })
        }));
      return gS ? [function(SS, HS) {
        return SS ? !0 === SS ? tS.createElement(dS, {
          key: "labelList-implicit",
          data: HS
        }) : tS.isValidElement(SS) || uS()(SS) ? tS.createElement(dS, {
          key: "labelList-implicit",
          data: HS,
          content: SS
        }) : NS()(SS) ? tS.createElement(dS, DS({
          data: HS
        }, SS, {
          key: "labelList-implicit"
        })) : null : null
      }(SS.label, HS)].concat(PS(XS)) : XS
    }
  },
  6235: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => zS
    });
    var tS = gS(64),
      bS = gS(5458),
      XS = gS.n(bS),
      xS = gS(5259),
      NS = gS(5642),
      qS = gS(6146),
      uS = gS(6243),
      IS = gS(5667);

    function fS(SS) {
      return fS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, fS(SS)
    }

    function kS() {
      return kS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, kS.apply(this, arguments)
    }

    function aS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function KS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, QS(tS.key), tS)
      }
    }

    function jS(SS, HS, gS) {
      return HS = CS(HS),
        function(SS, HS) {
          if (HS && ("object" === fS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, GS() ? Reflect.construct(HS, gS || [], CS(SS).constructor) : HS.apply(SS, gS))
    }

    function GS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (GS = function() {
        return !!SS
      })()
    }

    function CS(SS) {
      return CS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, CS(SS)
    }

    function nS(SS, HS) {
      return nS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, nS(SS, HS)
    }

    function PS(SS, HS, gS) {
      return (HS = QS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function QS(SS) {
      var HS = function(SS, HS) {
        if ("object" != fS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != fS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == fS(HS) ? HS : HS + ""
    }
    var DS = 32,
      wS = function(SS) {
        function HS() {
          return function(SS, HS) {
            if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
          }(this, HS), jS(this, HS, arguments)
        }
        return function(SS, HS) {
          if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
          SS.prototype = Object.create(HS && HS.prototype, {
            constructor: {
              value: SS,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(SS, "prototype", {
            writable: !1
          }), HS && nS(SS, HS)
        }(HS, SS), gS = HS, bS = [{
          key: "renderIcon",
          value: function(SS) {
            var HS = this.props.inactiveColor,
              gS = 16,
              bS = DS / 6,
              XS = DS / 3,
              xS = SS.inactive ? HS : SS.color;
            if ("plainline" === SS.type) return tS.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: xS,
              strokeDasharray: SS.payload.strokeDasharray,
              x1: 0,
              y1: gS,
              x2: DS,
              y2: gS,
              className: "recharts-legend-icon"
            });
            if ("line" === SS.type) return tS.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: xS,
              d: "M0,".concat(gS, "h").concat(XS, "\n            A").concat(bS, ",").concat(bS, ",0,1,1,").concat(2 * XS, ",").concat(gS, "\n            H").concat(DS, "M").concat(2 * XS, ",").concat(gS, "\n            A").concat(bS, ",").concat(bS, ",0,1,1,").concat(XS, ",").concat(gS),
              className: "recharts-legend-icon"
            });
            if ("rect" === SS.type) return tS.createElement("path", {
              stroke: "none",
              fill: xS,
              d: "M0,".concat(4, "h").concat(DS, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (tS.isValidElement(SS.legendIcon)) {
              var NS = function(SS) {
                for (var HS = 1; HS < arguments.length; HS++) {
                  var gS = null != arguments[HS] ? arguments[HS] : {};
                  HS % 2 ? aS(Object(gS), !0).forEach((function(HS) {
                    PS(SS, HS, gS[HS])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : aS(Object(gS)).forEach((function(HS) {
                    Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
                  }))
                }
                return SS
              }({}, SS);
              return delete NS.legendIcon, tS.cloneElement(SS.legendIcon, NS)
            }
            return tS.createElement(uS.c, {
              fill: xS,
              cx: gS,
              cy: gS,
              size: DS,
              sizeType: "diameter",
              type: SS.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var SS = this,
              HS = this.props,
              gS = HS.payload,
              bS = HS.iconSize,
              uS = HS.layout,
              fS = HS.formatter,
              aS = HS.inactiveColor,
              KS = {
                x: 0,
                y: 0,
                width: DS,
                height: DS
              },
              jS = {
                display: "horizontal" === uS ? "inline-block" : "block",
                marginRight: 10
              },
              GS = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return gS.map((function(HS, gS) {
              var uS = HS.formatter || fS,
                CS = (0, xS.b)(PS(PS({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(gS), !0), "inactive", HS.inactive));
              if ("none" === HS.type) return null;
              var nS = XS()(HS.value) ? null : HS.value;
              (0, NS.b)(!XS()(HS.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var QS = HS.inactive ? aS : HS.color;
              return tS.createElement("li", kS({
                className: CS,
                style: jS,
                key: "legend-item-".concat(gS)
              }, (0, IS.m)(SS.props, HS, gS)), tS.createElement(qS.d, {
                width: bS,
                height: bS,
                viewBox: KS,
                style: GS
              }, SS.renderIcon(HS)), tS.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: QS
                }
              }, uS ? uS(nS, HS, gS) : nS))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var SS = this.props,
              HS = SS.payload,
              gS = SS.layout,
              bS = SS.align;
            if (!HS || !HS.length) return null;
            var XS = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === gS ? bS : "left"
            };
            return tS.createElement("ul", {
              className: "recharts-default-legend",
              style: XS
            }, this.renderItems())
          }
        }], bS && KS(gS.prototype, bS), fS && KS(gS, fS), Object.defineProperty(gS, "prototype", {
          writable: !1
        }), gS;
        var gS, bS, fS
      }(tS.PureComponent);
    PS(wS, "displayName", "Legend"), PS(wS, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var hS = gS(5340),
      ZS = gS(6169);

    function JS(SS) {
      return JS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, JS(SS)
    }
    var OS = ["ref"];

    function dS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function cS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? dS(Object(gS), !0).forEach((function(HS) {
          yS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : dS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function vS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, VS(tS.key), tS)
      }
    }

    function ES(SS, HS, gS) {
      return HS = YS(HS),
        function(SS, HS) {
          if (HS && ("object" === JS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, LS() ? Reflect.construct(HS, gS || [], YS(SS).constructor) : HS.apply(SS, gS))
    }

    function LS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (LS = function() {
        return !!SS
      })()
    }

    function YS(SS) {
      return YS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, YS(SS)
    }

    function AS(SS, HS) {
      return AS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, AS(SS, HS)
    }

    function yS(SS, HS, gS) {
      return (HS = VS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function VS(SS) {
      var HS = function(SS, HS) {
        if ("object" != JS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != JS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == JS(HS) ? HS : HS + ""
    }

    function iS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function WS(SS) {
      return SS.value
    }
    var zS = function(SS) {
      function HS() {
        var SS;
        ! function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS);
        for (var gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        return yS(SS = ES(this, HS, [].concat(tS)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), SS
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && AS(SS, HS)
      }(HS, SS), gS = HS, XS = [{
        key: "getWithHeight",
        value: function(SS, HS) {
          var gS = cS(cS({}, this.defaultProps), SS.props).layout;
          return "vertical" === gS && (0, hS.t)(SS.props.height) ? {
            height: SS.props.height
          } : "horizontal" === gS ? {
            width: SS.props.width || HS
          } : null
        }
      }], (bS = [{
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
            var SS = this.wrapperNode.getBoundingClientRect();
            return SS.height = this.wrapperNode.offsetHeight, SS.width = this.wrapperNode.offsetWidth, SS
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var SS = this.props.onBBoxUpdate,
            HS = this.getBBox();
          HS ? (Math.abs(HS.width - this.lastBoundingBox.width) > 1 || Math.abs(HS.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = HS.width, this.lastBoundingBox.height = HS.height, SS && SS(HS)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, SS && SS(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? cS({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(SS) {
          var HS, gS, tS = this.props,
            bS = tS.layout,
            XS = tS.align,
            xS = tS.verticalAlign,
            NS = tS.margin,
            qS = tS.chartWidth,
            uS = tS.chartHeight;
          return SS && (void 0 !== SS.left && null !== SS.left || void 0 !== SS.right && null !== SS.right) || (HS = "center" === XS && "vertical" === bS ? {
            left: ((qS || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === XS ? {
            right: NS && NS.right || 0
          } : {
            left: NS && NS.left || 0
          }), SS && (void 0 !== SS.top && null !== SS.top || void 0 !== SS.bottom && null !== SS.bottom) || (gS = "middle" === xS ? {
            top: ((uS || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === xS ? {
            bottom: NS && NS.bottom || 0
          } : {
            top: NS && NS.top || 0
          }), cS(cS({}, HS), gS)
        }
      }, {
        key: "render",
        value: function() {
          var SS = this,
            HS = this.props,
            gS = HS.content,
            bS = HS.width,
            XS = HS.height,
            xS = HS.wrapperStyle,
            NS = HS.payloadUniqBy,
            qS = HS.payload,
            uS = cS(cS({
              position: "absolute",
              width: bS || "auto",
              height: XS || "auto"
            }, this.getDefaultPosition(xS)), xS);
          return tS.createElement("div", {
            className: "recharts-legend-wrapper",
            style: uS,
            ref: function(HS) {
              SS.wrapperNode = HS
            }
          }, function(SS, HS) {
            if (tS.isValidElement(SS)) return tS.cloneElement(SS, HS);
            if ("function" === typeof SS) return tS.createElement(SS, HS);
            HS.ref;
            var gS = iS(HS, OS);
            return tS.createElement(wS, gS)
          }(gS, cS(cS({}, this.props), {}, {
            payload: (0, ZS.c)(qS, NS, WS)
          })))
        }
      }]) && vS(gS.prototype, bS), XS && vS(gS, XS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, bS, XS
    }(tS.PureComponent);
    yS(zS, "displayName", "Legend"), yS(zS, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5250: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => GS
    });
    var tS = gS(5259),
      bS = gS(64),
      XS = gS(5266),
      xS = gS.n(XS),
      NS = gS(5340),
      qS = gS(5642),
      uS = gS(5650);

    function IS(SS) {
      return IS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, IS(SS)
    }

    function fS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function kS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? fS(Object(gS), !0).forEach((function(HS) {
          aS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : fS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function aS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != IS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != IS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == IS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function KS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return jS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return jS(SS, HS)
      }(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }
    var GS = (0, bS.forwardRef)((function(SS, HS) {
      var gS = SS.aspect,
        XS = SS.initialDimension,
        IS = void 0 === XS ? {
          width: -1,
          height: -1
        } : XS,
        fS = SS.width,
        aS = void 0 === fS ? "100%" : fS,
        jS = SS.height,
        GS = void 0 === jS ? "100%" : jS,
        CS = SS.minWidth,
        nS = void 0 === CS ? 0 : CS,
        PS = SS.minHeight,
        QS = SS.maxHeight,
        DS = SS.children,
        wS = SS.debounce,
        hS = void 0 === wS ? 0 : wS,
        ZS = SS.id,
        JS = SS.className,
        OS = SS.WC,
        dS = SS.style,
        cS = void 0 === dS ? {} : dS,
        vS = (0, bS.useRef)(null),
        ES = (0, bS.useRef)();
      ES.current = OS, (0, bS.useImperativeHandle)(HS, (function() {
        return Object.defineProperty(vS.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), vS.current
          },
          configurable: !0
        })
      }));
      var LS = KS((0, bS.useState)({
          containerWidth: IS.width,
          containerHeight: IS.height
        }), 2),
        YS = LS[0],
        AS = LS[1],
        yS = (0, bS.useCallback)((function(SS, HS) {
          AS((function(gS) {
            var tS = Math.round(SS),
              bS = Math.round(HS);
            return gS.containerWidth === tS && gS.containerHeight === bS ? gS : {
              containerWidth: tS,
              containerHeight: bS
            }
          }))
        }), []);
      (0, bS.useEffect)((function() {
        var SS = function(SS) {
          var HS, gS = SS[0].contentRect,
            tS = gS.width,
            bS = gS.height;
          yS(tS, bS), null === (HS = ES.current) || void 0 === HS || HS.call(ES, tS, bS)
        };
        hS > 0 && (SS = xS()(SS, hS, {
          trailing: !0,
          leading: !1
        }));
        var HS = new ResizeObserver(SS),
          gS = vS.current.getBoundingClientRect(),
          tS = gS.width,
          bS = gS.height;
        return yS(tS, bS), HS.observe(vS.current),
          function() {
            HS.disconnect()
          }
      }), [yS, hS]);
      var VS = (0, bS.useMemo)((function() {
        var SS = YS.containerWidth,
          HS = YS.containerHeight;
        if (SS < 0 || HS < 0) return null;
        (0, qS.b)((0, NS.u)(aS) || (0, NS.u)(GS), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", aS, GS), (0, qS.b)(!gS || gS > 0, "The aspect(%s) must be greater than zero.", gS);
        var tS = (0, NS.u)(aS) ? SS : aS,
          XS = (0, NS.u)(GS) ? HS : GS;
        gS && gS > 0 && (tS ? XS = tS / gS : XS && (tS = XS * gS), QS && XS > QS && (XS = QS)), (0, qS.b)(tS > 0 || XS > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", tS, XS, aS, GS, nS, PS, gS);
        var xS = !Array.isArray(DS) && (0, uS.i)(DS.type).endsWith("Chart");
        return bS.Children.map(DS, (function(SS) {
          return bS.isValidElement(SS) ? (0, bS.cloneElement)(SS, kS({
            width: tS,
            height: XS
          }, xS ? {
            style: kS({
              height: "100%",
              width: "100%",
              maxHeight: XS,
              maxWidth: tS
            }, SS.props.style)
          } : {})) : SS
        }))
      }), [gS, DS, GS, QS, PS, nS, YS, aS]);
      return bS.createElement("div", {
        id: ZS ? "".concat(ZS) : void 0,
        className: (0, tS.b)("recharts-responsive-container", JS),
        style: kS(kS({}, cS), {}, {
          width: aS,
          height: GS,
          minWidth: nS,
          minHeight: PS,
          maxHeight: QS
        }),
        ref: vS
      }, VS)
    }))
  },
  6304: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => US
    });
    var tS = gS(64),
      bS = gS(5639),
      XS = gS.n(bS),
      xS = gS(5259),
      NS = gS(5340),
      qS = gS(6161),
      uS = gS(5650),
      IS = gS(6307);

    function fS(SS) {
      return fS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, fS(SS)
    }

    function kS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return aS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return aS(SS, HS)
      }(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function KS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, jS(tS.key), tS)
      }
    }

    function jS(SS) {
      var HS = function(SS, HS) {
        if ("object" != fS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != fS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == fS(HS) ? HS : HS + ""
    }
    var GS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      CS = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      nS = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      PS = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      QS = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      DS = Object.keys(QS),
      wS = "NaN";
    var hS = function() {
      function SS(HS, gS) {
        ! function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, SS), this.num = HS, this.unit = gS, this.num = HS, this.unit = gS, Number.isNaN(HS) && (this.unit = ""), "" === gS || nS.test(gS) || (this.num = NaN, this.unit = ""), DS.includes(gS) && (this.num = function(SS, HS) {
          return SS * QS[HS]
        }(HS, gS), this.unit = "px")
      }
      return HS = SS, tS = [{
        key: "parse",
        value: function(HS) {
          var gS, tS = kS(null !== (gS = PS.exec(HS)) && void 0 !== gS ? gS : [], 3),
            bS = tS[1],
            XS = tS[2];
          return new SS(parseFloat(bS), null !== XS && void 0 !== XS ? XS : "")
        }
      }], (gS = [{
        key: "add",
        value: function(HS) {
          return this.unit !== HS.unit ? new SS(NaN, "") : new SS(this.num + HS.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(HS) {
          return this.unit !== HS.unit ? new SS(NaN, "") : new SS(this.num - HS.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(HS) {
          return "" !== this.unit && "" !== HS.unit && this.unit !== HS.unit ? new SS(NaN, "") : new SS(this.num * HS.num, this.unit || HS.unit)
        }
      }, {
        key: "divide",
        value: function(HS) {
          return "" !== this.unit && "" !== HS.unit && this.unit !== HS.unit ? new SS(NaN, "") : new SS(this.num / HS.num, this.unit || HS.unit)
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
      }]) && KS(HS.prototype, gS), tS && KS(HS, tS), Object.defineProperty(HS, "prototype", {
        writable: !1
      }), HS;
      var HS, gS, tS
    }();

    function ZS(SS) {
      if (SS.includes(wS)) return wS;
      for (var HS = SS; HS.includes("*") || HS.includes("/");) {
        var gS, tS = kS(null !== (gS = GS.exec(HS)) && void 0 !== gS ? gS : [], 4),
          bS = tS[1],
          XS = tS[2],
          xS = tS[3],
          NS = hS.parse(null !== bS && void 0 !== bS ? bS : ""),
          qS = hS.parse(null !== xS && void 0 !== xS ? xS : ""),
          uS = "*" === XS ? NS.multiply(qS) : NS.divide(qS);
        if (uS.isNaN()) return wS;
        HS = HS.replace(GS, uS.toString())
      }
      for (; HS.includes("+") || /.-\d+(?:\.\d+)?/.test(HS);) {
        var IS, fS = kS(null !== (IS = CS.exec(HS)) && void 0 !== IS ? IS : [], 4),
          aS = fS[1],
          KS = fS[2],
          jS = fS[3],
          nS = hS.parse(null !== aS && void 0 !== aS ? aS : ""),
          PS = hS.parse(null !== jS && void 0 !== jS ? jS : ""),
          QS = "+" === KS ? nS.add(PS) : nS.subtract(PS);
        if (QS.isNaN()) return wS;
        HS = HS.replace(CS, QS.toString())
      }
      return HS
    }
    var JS = /\(([^()]*)\)/;

    function OS(SS) {
      var HS = SS.replace(/\s+/g, "");
      return HS = function(SS) {
        for (var HS = SS; HS.includes("(");) {
          var gS = kS(JS.exec(HS), 2)[1];
          HS = HS.replace(JS, ZS(gS))
        }
        return HS
      }(HS), HS = ZS(HS)
    }

    function dS(SS) {
      var HS = function(SS) {
        try {
          return OS(SS)
        } catch (HS) {
          return wS
        }
      }(SS.slice(5, -1));
      return HS === wS ? "" : HS
    }
    var cS = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      vS = ["dx", "dy", "angle", "className", "breakAll"];

    function ES() {
      return ES = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, ES.apply(this, arguments)
    }

    function LS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function YS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return AS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return AS(SS, HS)
      }(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }
    var yS = /[ \f\n\r\t\v\u2028\u2029]+/,
      VS = function(SS) {
        var HS = SS.children,
          gS = SS.breakAll,
          tS = SS.style;
        try {
          var bS = [];
          return XS()(HS) || (bS = gS ? HS.toString().split("") : HS.toString().split(yS)), {
            wordsWithComputedWidth: bS.map((function(SS) {
              return {
                word: SS,
                width: (0, IS.h)(SS, tS).width
              }
            })),
            spaceWidth: gS ? 0 : (0, IS.h)("\xa0", tS).width
          }
        } catch (xS) {
          return null
        }
      },
      iS = function(SS) {
        return [{
          words: XS()(SS) ? [] : SS.toString().split(yS)
        }]
      },
      WS = function(SS) {
        var HS = SS.width,
          gS = SS.scaleToFit,
          tS = SS.children,
          bS = SS.style,
          XS = SS.breakAll,
          xS = SS.maxLines;
        if ((HS || gS) && !qS.b.isSsr) {
          var uS = VS({
            breakAll: XS,
            children: tS,
            style: bS
          });
          return uS ? function(SS, HS, gS, tS, bS) {
            var XS = SS.maxLines,
              xS = SS.children,
              qS = SS.style,
              uS = SS.breakAll,
              IS = (0, NS.t)(XS),
              fS = xS,
              kS = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(SS, HS) {
                  var XS = HS.word,
                    xS = HS.width,
                    NS = SS[SS.length - 1];
                  if (NS && (null == tS || bS || NS.width + xS + gS < Number(tS))) NS.words.push(XS), NS.width += xS + gS;
                  else {
                    var qS = {
                      words: [XS],
                      width: xS
                    };
                    SS.push(qS)
                  }
                  return SS
                }), [])
              },
              aS = kS(HS);
            if (!IS) return aS;
            for (var KS, jS = function(SS) {
                var HS = fS.slice(0, SS),
                  gS = VS({
                    breakAll: uS,
                    style: qS,
                    children: HS + "\u2026"
                  }).wordsWithComputedWidth,
                  bS = kS(gS),
                  xS = bS.length > XS || function(SS) {
                    return SS.reduce((function(SS, HS) {
                      return SS.width > HS.width ? SS : HS
                    }))
                  }(bS).width > Number(tS);
                return [xS, bS]
              }, GS = 0, CS = fS.length - 1, nS = 0; GS <= CS && nS <= fS.length - 1;) {
              var PS = Math.floor((GS + CS) / 2),
                QS = YS(jS(PS - 1), 2),
                DS = QS[0],
                wS = QS[1],
                hS = YS(jS(PS), 1)[0];
              if (DS || hS || (GS = PS + 1), DS && hS && (CS = PS - 1), !DS && hS) {
                KS = wS;
                break
              }
              nS++
            }
            return KS || aS
          }({
            breakAll: XS,
            children: tS,
            maxLines: xS,
            style: bS
          }, uS.wordsWithComputedWidth, uS.spaceWidth, HS, gS) : iS(tS)
        }
        return iS(tS)
      },
      zS = "#808080",
      US = function(SS) {
        var HS = SS.x,
          gS = void 0 === HS ? 0 : HS,
          bS = SS.y,
          XS = void 0 === bS ? 0 : bS,
          qS = SS.lineHeight,
          IS = void 0 === qS ? "1em" : qS,
          fS = SS.capHeight,
          kS = void 0 === fS ? "0.71em" : fS,
          aS = SS.scaleToFit,
          KS = void 0 !== aS && aS,
          jS = SS.textAnchor,
          GS = void 0 === jS ? "start" : jS,
          CS = SS.verticalAnchor,
          nS = void 0 === CS ? "end" : CS,
          PS = SS.fill,
          QS = void 0 === PS ? zS : PS,
          DS = LS(SS, cS),
          wS = (0, tS.useMemo)((function() {
            return WS({
              breakAll: DS.breakAll,
              children: DS.children,
              maxLines: DS.maxLines,
              scaleToFit: KS,
              style: DS.style,
              width: DS.width
            })
          }), [DS.breakAll, DS.children, DS.maxLines, KS, DS.style, DS.width]),
          hS = DS.dx,
          ZS = DS.dy,
          JS = DS.angle,
          OS = DS.className,
          YS = DS.breakAll,
          AS = LS(DS, vS);
        if (!(0, NS.r)(gS) || !(0, NS.r)(XS)) return null;
        var yS, VS = gS + ((0, NS.t)(hS) ? hS : 0),
          iS = XS + ((0, NS.t)(ZS) ? ZS : 0);
        switch (nS) {
          case "start":
            yS = dS("calc(".concat(kS, ")"));
            break;
          case "middle":
            yS = dS("calc(".concat((wS.length - 1) / 2, " * -").concat(IS, " + (").concat(kS, " / 2))"));
            break;
          default:
            yS = dS("calc(".concat(wS.length - 1, " * -").concat(IS, ")"))
        }
        var US = [];
        if (KS) {
          var pS = wS[0].width,
            sS = DS.width;
          US.push("scale(".concat(((0, NS.t)(sS) ? sS / pS : 1) / pS, ")"))
        }
        return JS && US.push("rotate(".concat(JS, ", ").concat(VS, ", ").concat(iS, ")")), US.length && (AS.transform = US.join(" ")), tS.createElement("text", ES({}, (0, uS.b)(AS, !0), {
          x: VS,
          y: iS,
          className: (0, xS.b)("recharts-text", OS),
          textAnchor: GS,
          fill: QS.includes("url") ? zS : QS
        }), wS.map((function(SS, HS) {
          var gS = SS.words.join(YS ? "" : " ");
          return tS.createElement("tspan", {
            x: VS,
            dy: 0 === HS ? yS : IS,
            key: "".concat(gS, "-").concat(HS)
          }, gS)
        })))
      }
  },
  6154: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => mS
    });
    var tS = gS(64),
      bS = gS(5723),
      XS = gS.n(bS),
      xS = gS(5639),
      NS = gS.n(xS),
      qS = gS(5259),
      uS = gS(5340);

    function IS(SS) {
      return IS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, IS(SS)
    }

    function fS() {
      return fS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, fS.apply(this, arguments)
    }

    function kS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return aS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return aS(SS, HS)
      }(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function KS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function jS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? KS(Object(gS), !0).forEach((function(HS) {
          GS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : KS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function GS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != IS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != IS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == IS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function CS(SS) {
      return Array.isArray(SS) && (0, uS.r)(SS[0]) && (0, uS.r)(SS[1]) ? SS.join(" ~ ") : SS
    }
    var nS = function(SS) {
      var HS = SS.separator,
        gS = void 0 === HS ? " : " : HS,
        bS = SS.contentStyle,
        xS = void 0 === bS ? {} : bS,
        IS = SS.itemStyle,
        aS = void 0 === IS ? {} : IS,
        KS = SS.labelStyle,
        GS = void 0 === KS ? {} : KS,
        nS = SS.payload,
        PS = SS.formatter,
        QS = SS.itemSorter,
        DS = SS.wrapperClassName,
        wS = SS.labelClassName,
        hS = SS.label,
        ZS = SS.labelFormatter,
        JS = SS.accessibilityLayer,
        OS = void 0 !== JS && JS,
        dS = jS({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, xS),
        cS = jS({
          margin: 0
        }, GS),
        vS = !NS()(hS),
        ES = vS ? hS : "",
        LS = (0, qS.b)("recharts-default-tooltip", DS),
        YS = (0, qS.b)("recharts-tooltip-label", wS);
      vS && ZS && void 0 !== nS && null !== nS && (ES = ZS(hS, nS));
      var AS = OS ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return tS.createElement("div", fS({
        className: LS,
        style: dS
      }, AS), tS.createElement("p", {
        className: YS,
        style: cS
      }, tS.isValidElement(ES) ? ES : "".concat(ES)), function() {
        if (nS && nS.length) {
          var SS = (QS ? XS()(nS, QS) : nS).map((function(SS, HS) {
            if ("none" === SS.type) return null;
            var bS = jS({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: SS.color || "#000"
              }, aS),
              XS = SS.formatter || PS || CS,
              xS = SS.value,
              NS = SS.name,
              qS = xS,
              IS = NS;
            if (XS && null != qS && null != IS) {
              var fS = XS(xS, NS, SS, HS, nS);
              if (Array.isArray(fS)) {
                var KS = kS(fS, 2);
                qS = KS[0], IS = KS[1]
              } else qS = fS
            }
            return tS.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(HS),
              style: bS
            }, (0, uS.r)(IS) ? tS.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, IS) : null, (0, uS.r)(IS) ? tS.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, gS) : null, tS.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, qS), tS.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, SS.unit || ""))
          }));
          return tS.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, SS)
        }
        return null
      }())
    };

    function PS(SS) {
      return PS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, PS(SS)
    }

    function QS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != PS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != PS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == PS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var DS = "recharts-tooltip-wrapper",
      wS = {
        visibility: "hidden"
      };

    function hS(SS) {
      var HS = SS.coordinate,
        gS = SS.translateX,
        tS = SS.translateY;
      return (0, qS.b)(DS, QS(QS(QS(QS({}, "".concat(DS, "-right"), (0, uS.t)(gS) && HS && (0, uS.t)(HS.x) && gS >= HS.x), "".concat(DS, "-left"), (0, uS.t)(gS) && HS && (0, uS.t)(HS.x) && gS < HS.x), "".concat(DS, "-bottom"), (0, uS.t)(tS) && HS && (0, uS.t)(HS.y) && tS >= HS.y), "".concat(DS, "-top"), (0, uS.t)(tS) && HS && (0, uS.t)(HS.y) && tS < HS.y))
    }

    function ZS(SS) {
      var HS = SS.allowEscapeViewBox,
        gS = SS.coordinate,
        tS = SS.key,
        bS = SS.offsetTopLeft,
        XS = SS.position,
        xS = SS.reverseDirection,
        NS = SS.tooltipDimension,
        qS = SS.viewBox,
        IS = SS.viewBoxDimension;
      if (XS && (0, uS.t)(XS[tS])) return XS[tS];
      var fS = gS[tS] - NS - bS,
        kS = gS[tS] + bS;
      return HS[tS] ? xS[tS] ? fS : kS : xS[tS] ? fS < qS[tS] ? Math.max(kS, qS[tS]) : Math.max(fS, qS[tS]) : kS + NS > qS[tS] + IS ? Math.max(fS, qS[tS]) : Math.max(kS, qS[tS])
    }

    function JS(SS) {
      return JS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, JS(SS)
    }

    function OS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function dS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? OS(Object(gS), !0).forEach((function(HS) {
          AS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : OS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function cS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, yS(tS.key), tS)
      }
    }

    function vS(SS, HS, gS) {
      return HS = LS(HS),
        function(SS, HS) {
          if (HS && ("object" === JS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, ES() ? Reflect.construct(HS, gS || [], LS(SS).constructor) : HS.apply(SS, gS))
    }

    function ES() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (ES = function() {
        return !!SS
      })()
    }

    function LS(SS) {
      return LS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, LS(SS)
    }

    function YS(SS, HS) {
      return YS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, YS(SS, HS)
    }

    function AS(SS, HS, gS) {
      return (HS = yS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function yS(SS) {
      var HS = function(SS, HS) {
        if ("object" != JS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != JS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == JS(HS) ? HS : HS + ""
    }
    var VS = function(SS) {
        function HS() {
          var SS;
          ! function(SS, HS) {
            if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
          }(this, HS);
          for (var gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
          return AS(SS = vS(this, HS, [].concat(tS)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), AS(SS, "handleKeyDown", (function(HS) {
            var gS, tS, bS, XS;
            "Escape" === HS.key && SS.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (gS = null === (tS = SS.props.coordinate) || void 0 === tS ? void 0 : tS.x) && void 0 !== gS ? gS : 0,
                y: null !== (bS = null === (XS = SS.props.coordinate) || void 0 === XS ? void 0 : XS.y) && void 0 !== bS ? bS : 0
              }
            })
          })), SS
        }
        return function(SS, HS) {
          if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
          SS.prototype = Object.create(HS && HS.prototype, {
            constructor: {
              value: SS,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(SS, "prototype", {
            writable: !1
          }), HS && YS(SS, HS)
        }(HS, SS), gS = HS, (bS = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var SS = this.wrapperNode.getBoundingClientRect();
              (Math.abs(SS.width - this.state.lastBoundingBox.width) > 1 || Math.abs(SS.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: SS.width,
                  height: SS.height
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
            var SS, HS;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (SS = this.props.coordinate) || void 0 === SS ? void 0 : SS.x) === this.state.dismissedAtCoordinate.x && (null === (HS = this.props.coordinate) || void 0 === HS ? void 0 : HS.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var SS = this,
              HS = this.props,
              gS = HS.active,
              bS = HS.allowEscapeViewBox,
              XS = HS.animationDuration,
              xS = HS.animationEasing,
              NS = HS.children,
              qS = HS.coordinate,
              uS = HS.hasPayload,
              IS = HS.isAnimationActive,
              fS = HS.offset,
              kS = HS.position,
              aS = HS.reverseDirection,
              KS = HS.useTranslate3d,
              jS = HS.viewBox,
              GS = HS.wrapperStyle,
              CS = function(SS) {
                var HS, gS, tS = SS.allowEscapeViewBox,
                  bS = SS.coordinate,
                  XS = SS.offsetTopLeft,
                  xS = SS.position,
                  NS = SS.reverseDirection,
                  qS = SS.tooltipBox,
                  uS = SS.useTranslate3d,
                  IS = SS.viewBox;
                return {
                  cssProperties: qS.height > 0 && qS.width > 0 && bS ? function(SS) {
                    var HS = SS.translateX,
                      gS = SS.translateY;
                    return {
                      transform: SS.useTranslate3d ? "translate3d(".concat(HS, "px, ").concat(gS, "px, 0)") : "translate(".concat(HS, "px, ").concat(gS, "px)")
                    }
                  }({
                    translateX: HS = ZS({
                      allowEscapeViewBox: tS,
                      coordinate: bS,
                      key: "x",
                      offsetTopLeft: XS,
                      position: xS,
                      reverseDirection: NS,
                      tooltipDimension: qS.width,
                      viewBox: IS,
                      viewBoxDimension: IS.width
                    }),
                    translateY: gS = ZS({
                      allowEscapeViewBox: tS,
                      coordinate: bS,
                      key: "y",
                      offsetTopLeft: XS,
                      position: xS,
                      reverseDirection: NS,
                      tooltipDimension: qS.height,
                      viewBox: IS,
                      viewBoxDimension: IS.height
                    }),
                    useTranslate3d: uS
                  }) : wS,
                  cssClasses: hS({
                    translateX: HS,
                    translateY: gS,
                    coordinate: bS
                  })
                }
              }({
                allowEscapeViewBox: bS,
                coordinate: qS,
                offsetTopLeft: fS,
                position: kS,
                reverseDirection: aS,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: KS,
                viewBox: jS
              }),
              nS = CS.cssClasses,
              PS = CS.cssProperties,
              QS = dS(dS({
                transition: IS && gS ? "transform ".concat(XS, "ms ").concat(xS) : void 0
              }, PS), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && gS && uS ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, GS);
            return tS.createElement("div", {
              tabIndex: -1,
              className: nS,
              style: QS,
              ref: function(HS) {
                SS.wrapperNode = HS
              }
            }, NS)
          }
        }]) && cS(gS.prototype, bS), XS && cS(gS, XS), Object.defineProperty(gS, "prototype", {
          writable: !1
        }), gS;
        var gS, bS, XS
      }(tS.PureComponent),
      iS = gS(6161),
      WS = gS(6169);

    function zS(SS) {
      return zS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, zS(SS)
    }

    function US(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function pS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? US(Object(gS), !0).forEach((function(HS) {
          TS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : US(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function sS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, oS(tS.key), tS)
      }
    }

    function BS(SS, HS, gS) {
      return HS = FS(HS),
        function(SS, HS) {
          if (HS && ("object" === zS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return function(SS) {
            if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return SS
          }(SS)
        }(SS, MS() ? Reflect.construct(HS, gS || [], FS(SS).constructor) : HS.apply(SS, gS))
    }

    function MS() {
      try {
        var SS = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (SS) {}
      return (MS = function() {
        return !!SS
      })()
    }

    function FS(SS) {
      return FS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, FS(SS)
    }

    function RS(SS, HS) {
      return RS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, RS(SS, HS)
    }

    function TS(SS, HS, gS) {
      return (HS = oS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function oS(SS) {
      var HS = function(SS, HS) {
        if ("object" != zS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != zS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == zS(HS) ? HS : HS + ""
    }

    function lS(SS) {
      return SS.dataKey
    }
    var mS = function(SS) {
      function HS() {
        return function(SS, HS) {
          if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
        }(this, HS), BS(this, HS, arguments)
      }
      return function(SS, HS) {
        if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
        SS.prototype = Object.create(HS && HS.prototype, {
          constructor: {
            value: SS,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(SS, "prototype", {
          writable: !1
        }), HS && RS(SS, HS)
      }(HS, SS), gS = HS, (bS = [{
        key: "render",
        value: function() {
          var SS = this,
            HS = this.props,
            gS = HS.active,
            bS = HS.allowEscapeViewBox,
            XS = HS.animationDuration,
            xS = HS.animationEasing,
            NS = HS.content,
            qS = HS.coordinate,
            uS = HS.filterNull,
            IS = HS.isAnimationActive,
            fS = HS.offset,
            kS = HS.payload,
            aS = HS.payloadUniqBy,
            KS = HS.position,
            jS = HS.reverseDirection,
            GS = HS.useTranslate3d,
            CS = HS.viewBox,
            PS = HS.wrapperStyle,
            QS = null !== kS && void 0 !== kS ? kS : [];
          uS && QS.length && (QS = (0, WS.c)(kS.filter((function(HS) {
            return null != HS.value && (!0 !== HS.hide || SS.props.includeHidden)
          })), aS, lS));
          var DS = QS.length > 0;
          return tS.createElement(VS, {
            allowEscapeViewBox: bS,
            animationDuration: XS,
            animationEasing: xS,
            isAnimationActive: IS,
            active: gS,
            coordinate: qS,
            hasPayload: DS,
            offset: fS,
            position: KS,
            reverseDirection: jS,
            useTranslate3d: GS,
            viewBox: CS,
            wrapperStyle: PS
          }, function(SS, HS) {
            return tS.isValidElement(SS) ? tS.cloneElement(SS, HS) : "function" === typeof SS ? tS.createElement(SS, HS) : tS.createElement(nS, HS)
          }(NS, pS(pS({}, this.props), {}, {
            payload: QS
          })))
        }
      }]) && sS(gS.prototype, bS), XS && sS(gS, XS), Object.defineProperty(gS, "prototype", {
        writable: !1
      }), gS;
      var gS, bS, XS
    }(tS.PureComponent);
    TS(mS, "displayName", "Tooltip"), TS(mS, "defaultProps", {
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
      isAnimationActive: !iS.b.isSsr,
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
  6152: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS
    });
    var tS = gS(64),
      bS = gS(5259),
      XS = gS(5650),
      xS = ["children", "className"];

    function NS() {
      return NS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, NS.apply(this, arguments)
    }

    function qS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }
    var uS = tS.forwardRef((function(SS, HS) {
      var gS = SS.children,
        uS = SS.className,
        IS = qS(SS, xS),
        fS = (0, bS.b)("recharts-layer", uS);
      return tS.createElement("g", NS({
        className: fS
      }, (0, XS.b)(IS, !0), {
        ref: HS
      }), gS)
    }))
  },
  6146: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => uS
    });
    var tS = gS(64),
      bS = gS(5259),
      XS = gS(5650),
      xS = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function NS() {
      return NS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, NS.apply(this, arguments)
    }

    function qS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function uS(SS) {
      var HS = SS.children,
        gS = SS.width,
        uS = SS.height,
        IS = SS.viewBox,
        fS = SS.className,
        kS = SS.style,
        aS = SS.title,
        KS = SS.desc,
        jS = qS(SS, xS),
        GS = IS || {
          width: gS,
          height: uS,
          x: 0,
          y: 0
        },
        CS = (0, bS.b)("recharts-surface", fS);
      return tS.createElement("svg", NS({}, (0, XS.b)(jS, !0, "svg"), {
        className: CS,
        width: gS,
        height: uS,
        style: kS,
        viewBox: "".concat(GS.x, " ").concat(GS.y, " ").concat(GS.width, " ").concat(GS.height)
      }), tS.createElement("title", null, aS), tS.createElement("desc", null, KS), HS)
    }
  },
  6551: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => PS,
      d: () => wS,
      h: () => cS,
      i: () => dS,
      l: () => QS,
      o: () => OS,
      q: () => JS,
      t: () => DS,
      u: () => ZS,
      y: () => hS
    });
    var tS = gS(64),
      bS = gS(6143),
      XS = gS(6553),
      xS = gS.n(XS),
      NS = gS(6454),
      qS = gS.n(NS),
      uS = gS(5413),
      IS = gS.n(uS)()((function(SS) {
        return {
          x: SS.left,
          y: SS.top,
          width: SS.width,
          height: SS.height
        }
      }), (function(SS) {
        return ["l", SS.left, "t", SS.top, "w", SS.width, "h", SS.height].join("")
      })),
      fS = gS(5340);
    var kS = (0, tS.createContext)(void 0),
      aS = (0, tS.createContext)(void 0),
      KS = (0, tS.createContext)(void 0),
      jS = (0, tS.createContext)({}),
      GS = (0, tS.createContext)(void 0),
      CS = (0, tS.createContext)(0),
      nS = (0, tS.createContext)(0),
      PS = function(SS) {
        var HS = SS.state,
          gS = HS.xAxisMap,
          bS = HS.yAxisMap,
          XS = HS.offset,
          xS = SS.clipPathId,
          NS = SS.children,
          qS = SS.width,
          uS = SS.height,
          fS = IS(XS);
        return tS.createElement(kS.Provider, {
          value: gS
        }, tS.createElement(aS.Provider, {
          value: bS
        }, tS.createElement(jS.Provider, {
          value: XS
        }, tS.createElement(KS.Provider, {
          value: fS
        }, tS.createElement(GS.Provider, {
          value: xS
        }, tS.createElement(CS.Provider, {
          value: uS
        }, tS.createElement(nS.Provider, {
          value: qS
        }, NS)))))))
      },
      QS = function() {
        return (0, tS.useContext)(GS)
      };
    var DS = function(SS) {
        var HS = (0, tS.useContext)(kS);
        null == HS && (0, bS.e)(!1);
        var gS = HS[SS];
        return null == gS && (0, bS.e)(!1), gS
      },
      wS = function() {
        var SS = (0, tS.useContext)(kS);
        return (0, fS.h)(SS)
      },
      hS = function() {
        var SS = (0, tS.useContext)(aS);
        return xS()(SS, (function(SS) {
          return qS()(SS.domain, Number.isFinite)
        })) || (0, fS.h)(SS)
      },
      ZS = function(SS) {
        var HS = (0, tS.useContext)(aS);
        null == HS && (0, bS.e)(!1);
        var gS = HS[SS];
        return null == gS && (0, bS.e)(!1), gS
      },
      JS = function() {
        return (0, tS.useContext)(KS)
      },
      OS = function() {
        return (0, tS.useContext)(jS)
      },
      dS = function() {
        return (0, tS.useContext)(nS)
      },
      cS = function() {
        return (0, tS.useContext)(CS)
      }
  },
  6572: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => lS
    });
    var tS = gS(64);

    function bS() {}

    function XS(SS, HS, gS) {
      SS._context.bezierCurveTo((2 * SS._x0 + SS._x1) / 3, (2 * SS._y0 + SS._y1) / 3, (SS._x0 + 2 * SS._x1) / 3, (SS._y0 + 2 * SS._y1) / 3, (SS._x0 + 4 * SS._x1 + HS) / 6, (SS._y0 + 4 * SS._y1 + gS) / 6)
    }

    function xS(SS) {
      this._context = SS
    }

    function NS(SS) {
      this._context = SS
    }

    function qS(SS) {
      this._context = SS
    }
    xS.prototype = {
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
            XS(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(SS, HS) {
        switch (SS = +SS, HS = +HS, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(SS, HS) : this._context.moveTo(SS, HS);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            XS(this, SS, HS)
        }
        this._x0 = this._x1, this._x1 = SS, this._y0 = this._y1, this._y1 = HS
      }
    }, NS.prototype = {
      areaStart: bS,
      areaEnd: bS,
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
      point: function(SS, HS) {
        switch (SS = +SS, HS = +HS, this._point) {
          case 0:
            this._point = 1, this._x2 = SS, this._y2 = HS;
            break;
          case 1:
            this._point = 2, this._x3 = SS, this._y3 = HS;
            break;
          case 2:
            this._point = 3, this._x4 = SS, this._y4 = HS, this._context.moveTo((this._x0 + 4 * this._x1 + SS) / 6, (this._y0 + 4 * this._y1 + HS) / 6);
            break;
          default:
            XS(this, SS, HS)
        }
        this._x0 = this._x1, this._x1 = SS, this._y0 = this._y1, this._y1 = HS
      }
    }, qS.prototype = {
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
      point: function(SS, HS) {
        switch (SS = +SS, HS = +HS, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var gS = (this._x0 + 4 * this._x1 + SS) / 6,
              tS = (this._y0 + 4 * this._y1 + HS) / 6;
            this._line ? this._context.lineTo(gS, tS) : this._context.moveTo(gS, tS);
            break;
          case 3:
            this._point = 4;
          default:
            XS(this, SS, HS)
        }
        this._x0 = this._x1, this._x1 = SS, this._y0 = this._y1, this._y1 = HS
      }
    };
    class uS {
      constructor(SS, HS) {
        this._context = SS, this._x = HS
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
      point(SS, HS) {
        switch (SS = +SS, HS = +HS, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(SS, HS) : this._context.moveTo(SS, HS);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + SS) / 2, this._y0, this._x0, HS, SS, HS) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + HS) / 2, SS, this._y0, SS, HS)
        }
        this._x0 = SS, this._y0 = HS
      }
    }

    function IS(SS) {
      this._context = SS
    }

    function fS(SS) {
      this._context = SS
    }

    function kS(SS) {
      return new fS(SS)
    }

    function aS(SS) {
      return SS < 0 ? -1 : 1
    }

    function KS(SS, HS, gS) {
      var tS = SS._x1 - SS._x0,
        bS = HS - SS._x1,
        XS = (SS._y1 - SS._y0) / (tS || bS < 0 && -0),
        xS = (gS - SS._y1) / (bS || tS < 0 && -0),
        NS = (XS * bS + xS * tS) / (tS + bS);
      return (aS(XS) + aS(xS)) * Math.min(Math.abs(XS), Math.abs(xS), .5 * Math.abs(NS)) || 0
    }

    function jS(SS, HS) {
      var gS = SS._x1 - SS._x0;
      return gS ? (3 * (SS._y1 - SS._y0) / gS - HS) / 2 : HS
    }

    function GS(SS, HS, gS) {
      var tS = SS._x0,
        bS = SS._y0,
        XS = SS._x1,
        xS = SS._y1,
        NS = (XS - tS) / 3;
      SS._context.bezierCurveTo(tS + NS, bS + NS * HS, XS - NS, xS - NS * gS, XS, xS)
    }

    function CS(SS) {
      this._context = SS
    }

    function nS(SS) {
      this._context = new PS(SS)
    }

    function PS(SS) {
      this._context = SS
    }

    function QS(SS) {
      this._context = SS
    }

    function DS(SS) {
      var HS, gS, tS = SS.length - 1,
        bS = new Array(tS),
        XS = new Array(tS),
        xS = new Array(tS);
      for (bS[0] = 0, XS[0] = 2, xS[0] = SS[0] + 2 * SS[1], HS = 1; HS < tS - 1; ++HS) bS[HS] = 1, XS[HS] = 4, xS[HS] = 4 * SS[HS] + 2 * SS[HS + 1];
      for (bS[tS - 1] = 2, XS[tS - 1] = 7, xS[tS - 1] = 8 * SS[tS - 1] + SS[tS], HS = 1; HS < tS; ++HS) gS = bS[HS] / XS[HS - 1], XS[HS] -= gS, xS[HS] -= gS * xS[HS - 1];
      for (bS[tS - 1] = xS[tS - 1] / XS[tS - 1], HS = tS - 2; HS >= 0; --HS) bS[HS] = (xS[HS] - bS[HS + 1]) / XS[HS];
      for (XS[tS - 1] = (SS[tS] + bS[tS - 1]) / 2, HS = 0; HS < tS - 1; ++HS) XS[HS] = 2 * SS[HS + 1] - bS[HS + 1];
      return [bS, XS]
    }

    function wS(SS, HS) {
      this._context = SS, this._t = HS
    }
    IS.prototype = {
      areaStart: bS,
      areaEnd: bS,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(SS, HS) {
        SS = +SS, HS = +HS, this._point ? this._context.lineTo(SS, HS) : (this._point = 1, this._context.moveTo(SS, HS))
      }
    }, fS.prototype = {
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
      point: function(SS, HS) {
        switch (SS = +SS, HS = +HS, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(SS, HS) : this._context.moveTo(SS, HS);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(SS, HS)
        }
      }
    }, CS.prototype = {
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
            GS(this, this._t0, jS(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(SS, HS) {
        var gS = NaN;
        if (HS = +HS, (SS = +SS) !== this._x1 || HS !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(SS, HS) : this._context.moveTo(SS, HS);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, GS(this, jS(this, gS = KS(this, SS, HS)), gS);
              break;
            default:
              GS(this, this._t0, gS = KS(this, SS, HS))
          }
          this._x0 = this._x1, this._x1 = SS, this._y0 = this._y1, this._y1 = HS, this._t0 = gS
        }
      }
    }, (nS.prototype = Object.create(CS.prototype)).point = function(SS, HS) {
      CS.prototype.point.call(this, HS, SS)
    }, PS.prototype = {
      moveTo: function(SS, HS) {
        this._context.moveTo(HS, SS)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(SS, HS) {
        this._context.lineTo(HS, SS)
      },
      bezierCurveTo: function(SS, HS, gS, tS, bS, XS) {
        this._context.bezierCurveTo(HS, SS, tS, gS, XS, bS)
      }
    }, QS.prototype = {
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
        var SS = this._x,
          HS = this._y,
          gS = SS.length;
        if (gS)
          if (this._line ? this._context.lineTo(SS[0], HS[0]) : this._context.moveTo(SS[0], HS[0]), 2 === gS) this._context.lineTo(SS[1], HS[1]);
          else
            for (var tS = DS(SS), bS = DS(HS), XS = 0, xS = 1; xS < gS; ++XS, ++xS) this._context.bezierCurveTo(tS[0][XS], bS[0][XS], tS[1][XS], bS[1][XS], SS[xS], HS[xS]);
        (this._line || 0 !== this._line && 1 === gS) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(SS, HS) {
        this._x.push(+SS), this._y.push(+HS)
      }
    }, wS.prototype = {
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
      point: function(SS, HS) {
        switch (SS = +SS, HS = +HS, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(SS, HS) : this._context.moveTo(SS, HS);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, HS), this._context.lineTo(SS, HS);
            else {
              var gS = this._x * (1 - this._t) + SS * this._t;
              this._context.lineTo(gS, this._y), this._context.lineTo(gS, HS)
            }
        }
        this._x = SS, this._y = HS
      }
    };
    var hS = gS(6413),
      ZS = gS(6279),
      JS = gS(6284);

    function OS(SS) {
      return SS[0]
    }

    function dS(SS) {
      return SS[1]
    }

    function cS(SS, HS) {
      var gS = (0, ZS.e)(!0),
        tS = null,
        bS = kS,
        XS = null,
        xS = (0, JS.c)(NS);

      function NS(NS) {
        var qS, uS, IS, fS = (NS = (0, hS.c)(NS)).length,
          kS = !1;
        for (null == tS && (XS = bS(IS = xS())), qS = 0; qS <= fS; ++qS) !(qS < fS && gS(uS = NS[qS], qS, NS)) === kS && ((kS = !kS) ? XS.lineStart() : XS.lineEnd()), kS && XS.point(+SS(uS, qS, NS), +HS(uS, qS, NS));
        if (IS) return XS = null, IS + "" || null
      }
      return SS = "function" === typeof SS ? SS : void 0 === SS ? OS : (0, ZS.e)(SS), HS = "function" === typeof HS ? HS : void 0 === HS ? dS : (0, ZS.e)(HS), NS.x = function(HS) {
        return arguments.length ? (SS = "function" === typeof HS ? HS : (0, ZS.e)(+HS), NS) : SS
      }, NS.y = function(SS) {
        return arguments.length ? (HS = "function" === typeof SS ? SS : (0, ZS.e)(+SS), NS) : HS
      }, NS.defined = function(SS) {
        return arguments.length ? (gS = "function" === typeof SS ? SS : (0, ZS.e)(!!SS), NS) : gS
      }, NS.curve = function(SS) {
        return arguments.length ? (bS = SS, null != tS && (XS = bS(tS)), NS) : bS
      }, NS.context = function(SS) {
        return arguments.length ? (null == SS ? tS = XS = null : XS = bS(tS = SS), NS) : tS
      }, NS
    }

    function vS(SS, HS, gS) {
      var tS = null,
        bS = (0, ZS.e)(!0),
        XS = null,
        xS = kS,
        NS = null,
        qS = (0, JS.c)(uS);

      function uS(uS) {
        var IS, fS, kS, aS, KS, jS = (uS = (0, hS.c)(uS)).length,
          GS = !1,
          CS = new Array(jS),
          nS = new Array(jS);
        for (null == XS && (NS = xS(KS = qS())), IS = 0; IS <= jS; ++IS) {
          if (!(IS < jS && bS(aS = uS[IS], IS, uS)) === GS)
            if (GS = !GS) fS = IS, NS.areaStart(), NS.lineStart();
            else {
              for (NS.lineEnd(), NS.lineStart(), kS = IS - 1; kS >= fS; --kS) NS.point(CS[kS], nS[kS]);
              NS.lineEnd(), NS.areaEnd()
            } GS && (CS[IS] = +SS(aS, IS, uS), nS[IS] = +HS(aS, IS, uS), NS.point(tS ? +tS(aS, IS, uS) : CS[IS], gS ? +gS(aS, IS, uS) : nS[IS]))
        }
        if (KS) return NS = null, KS + "" || null
      }

      function IS() {
        return cS().defined(bS).curve(xS).context(XS)
      }
      return SS = "function" === typeof SS ? SS : void 0 === SS ? OS : (0, ZS.e)(+SS), HS = "function" === typeof HS ? HS : void 0 === HS ? (0, ZS.e)(0) : (0, ZS.e)(+HS), gS = "function" === typeof gS ? gS : void 0 === gS ? dS : (0, ZS.e)(+gS), uS.x = function(HS) {
        return arguments.length ? (SS = "function" === typeof HS ? HS : (0, ZS.e)(+HS), tS = null, uS) : SS
      }, uS.x0 = function(HS) {
        return arguments.length ? (SS = "function" === typeof HS ? HS : (0, ZS.e)(+HS), uS) : SS
      }, uS.x1 = function(SS) {
        return arguments.length ? (tS = null == SS ? null : "function" === typeof SS ? SS : (0, ZS.e)(+SS), uS) : tS
      }, uS.y = function(SS) {
        return arguments.length ? (HS = "function" === typeof SS ? SS : (0, ZS.e)(+SS), gS = null, uS) : HS
      }, uS.y0 = function(SS) {
        return arguments.length ? (HS = "function" === typeof SS ? SS : (0, ZS.e)(+SS), uS) : HS
      }, uS.y1 = function(SS) {
        return arguments.length ? (gS = null == SS ? null : "function" === typeof SS ? SS : (0, ZS.e)(+SS), uS) : gS
      }, uS.lineX0 = uS.lineY0 = function() {
        return IS().x(SS).y(HS)
      }, uS.lineY1 = function() {
        return IS().x(SS).y(gS)
      }, uS.lineX1 = function() {
        return IS().x(tS).y(HS)
      }, uS.defined = function(SS) {
        return arguments.length ? (bS = "function" === typeof SS ? SS : (0, ZS.e)(!!SS), uS) : bS
      }, uS.curve = function(SS) {
        return arguments.length ? (xS = SS, null != XS && (NS = xS(XS)), uS) : xS
      }, uS.context = function(SS) {
        return arguments.length ? (null == SS ? XS = NS = null : NS = xS(XS = SS), uS) : XS
      }, uS
    }
    var ES = gS(6245),
      LS = gS.n(ES),
      YS = gS(5458),
      AS = gS.n(YS),
      yS = gS(5259),
      VS = gS(5667),
      iS = gS(5650),
      WS = gS(5340);

    function zS(SS) {
      return zS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, zS(SS)
    }

    function US() {
      return US = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, US.apply(this, arguments)
    }

    function pS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function sS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? pS(Object(gS), !0).forEach((function(HS) {
          BS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : pS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function BS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != zS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != zS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == zS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var MS = {
        curveBasisClosed: function(SS) {
          return new NS(SS)
        },
        curveBasisOpen: function(SS) {
          return new qS(SS)
        },
        curveBasis: function(SS) {
          return new xS(SS)
        },
        curveBumpX: function(SS) {
          return new uS(SS, !0)
        },
        curveBumpY: function(SS) {
          return new uS(SS, !1)
        },
        curveLinearClosed: function(SS) {
          return new IS(SS)
        },
        curveLinear: kS,
        curveMonotoneX: function(SS) {
          return new CS(SS)
        },
        curveMonotoneY: function(SS) {
          return new nS(SS)
        },
        curveNatural: function(SS) {
          return new QS(SS)
        },
        curveStep: function(SS) {
          return new wS(SS, .5)
        },
        curveStepAfter: function(SS) {
          return new wS(SS, 1)
        },
        curveStepBefore: function(SS) {
          return new wS(SS, 0)
        }
      },
      FS = function(SS) {
        return SS.x === +SS.x && SS.y === +SS.y
      },
      RS = function(SS) {
        return SS.x
      },
      TS = function(SS) {
        return SS.y
      },
      oS = function(SS) {
        var HS, gS = SS.type,
          tS = void 0 === gS ? "linear" : gS,
          bS = SS.points,
          XS = void 0 === bS ? [] : bS,
          xS = SS.baseLine,
          NS = SS.layout,
          qS = SS.connectNulls,
          uS = void 0 !== qS && qS,
          IS = function(SS, HS) {
            if (AS()(SS)) return SS;
            var gS = "curve".concat(LS()(SS));
            return "curveMonotone" !== gS && "curveBump" !== gS || !HS ? MS[gS] || kS : MS["".concat(gS).concat("vertical" === HS ? "Y" : "X")]
          }(tS, NS),
          fS = uS ? XS.filter((function(SS) {
            return FS(SS)
          })) : XS;
        if (Array.isArray(xS)) {
          var aS = uS ? xS.filter((function(SS) {
              return FS(SS)
            })) : xS,
            KS = fS.map((function(SS, HS) {
              return sS(sS({}, SS), {}, {
                base: aS[HS]
              })
            }));
          return (HS = "vertical" === NS ? vS().y(TS).x1(RS).x0((function(SS) {
            return SS.base.x
          })) : vS().x(RS).y1(TS).y0((function(SS) {
            return SS.base.y
          }))).defined(FS).curve(IS), HS(KS)
        }
        return (HS = "vertical" === NS && (0, WS.t)(xS) ? vS().y(TS).x1(RS).x0(xS) : (0, WS.t)(xS) ? vS().x(RS).y1(TS).y0(xS) : cS().x(RS).y(TS)).defined(FS).curve(IS), HS(fS)
      },
      lS = function(SS) {
        var HS = SS.className,
          gS = SS.points,
          bS = SS.path,
          XS = SS.pathRef;
        if ((!gS || !gS.length) && !bS) return null;
        var xS = gS && gS.length ? oS(SS) : bS;
        return tS.createElement("path", US({}, (0, iS.b)(SS, !1), (0, VS.l)(SS), {
          className: (0, yS.b)("recharts-curve", HS),
          d: xS,
          ref: XS
        }))
      }
  },
  6289: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => qS
    });
    var tS = gS(64),
      bS = gS(5259),
      XS = gS(5667),
      xS = gS(5650);

    function NS() {
      return NS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, NS.apply(this, arguments)
    }
    var qS = function(SS) {
      var HS = SS.cx,
        gS = SS.cy,
        qS = SS.r,
        uS = SS.className,
        IS = (0, bS.b)("recharts-dot", uS);
      return HS === +HS && gS === +gS && qS === +qS ? tS.createElement("circle", NS({}, (0, xS.b)(SS, !1), (0, XS.l)(SS), {
        className: IS,
        cx: HS,
        cy: gS,
        r: qS
      })) : null
    }
  },
  6294: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => CS,
      i: () => jS
    });
    var tS = gS(64),
      bS = gS(5259),
      XS = gS(6300),
      xS = gS(5650);

    function NS(SS) {
      return NS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, NS(SS)
    }

    function qS() {
      return qS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, qS.apply(this, arguments)
    }

    function uS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return IS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return IS(SS, HS)
      }(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function fS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function kS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? fS(Object(gS), !0).forEach((function(HS) {
          aS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : fS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function aS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != NS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != NS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == NS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var KS = function(SS, HS, gS, tS, bS) {
        var XS, xS = Math.min(Math.abs(gS) / 2, Math.abs(tS) / 2),
          NS = tS >= 0 ? 1 : -1,
          qS = gS >= 0 ? 1 : -1,
          uS = tS >= 0 && gS >= 0 || tS < 0 && gS < 0 ? 1 : 0;
        if (xS > 0 && bS instanceof Array) {
          for (var IS = [0, 0, 0, 0], fS = 0; fS < 4; fS++) IS[fS] = bS[fS] > xS ? xS : bS[fS];
          XS = "M".concat(SS, ",").concat(HS + NS * IS[0]), IS[0] > 0 && (XS += "A ".concat(IS[0], ",").concat(IS[0], ",0,0,").concat(uS, ",").concat(SS + qS * IS[0], ",").concat(HS)), XS += "L ".concat(SS + gS - qS * IS[1], ",").concat(HS), IS[1] > 0 && (XS += "A ".concat(IS[1], ",").concat(IS[1], ",0,0,").concat(uS, ",\n        ").concat(SS + gS, ",").concat(HS + NS * IS[1])), XS += "L ".concat(SS + gS, ",").concat(HS + tS - NS * IS[2]), IS[2] > 0 && (XS += "A ".concat(IS[2], ",").concat(IS[2], ",0,0,").concat(uS, ",\n        ").concat(SS + gS - qS * IS[2], ",").concat(HS + tS)), XS += "L ".concat(SS + qS * IS[3], ",").concat(HS + tS), IS[3] > 0 && (XS += "A ".concat(IS[3], ",").concat(IS[3], ",0,0,").concat(uS, ",\n        ").concat(SS, ",").concat(HS + tS - NS * IS[3])), XS += "Z"
        } else if (xS > 0 && bS === +bS && bS > 0) {
          var kS = Math.min(xS, bS);
          XS = "M ".concat(SS, ",").concat(HS + NS * kS, "\n            A ").concat(kS, ",").concat(kS, ",0,0,").concat(uS, ",").concat(SS + qS * kS, ",").concat(HS, "\n            L ").concat(SS + gS - qS * kS, ",").concat(HS, "\n            A ").concat(kS, ",").concat(kS, ",0,0,").concat(uS, ",").concat(SS + gS, ",").concat(HS + NS * kS, "\n            L ").concat(SS + gS, ",").concat(HS + tS - NS * kS, "\n            A ").concat(kS, ",").concat(kS, ",0,0,").concat(uS, ",").concat(SS + gS - qS * kS, ",").concat(HS + tS, "\n            L ").concat(SS + qS * kS, ",").concat(HS + tS, "\n            A ").concat(kS, ",").concat(kS, ",0,0,").concat(uS, ",").concat(SS, ",").concat(HS + tS - NS * kS, " Z")
        } else XS = "M ".concat(SS, ",").concat(HS, " h ").concat(gS, " v ").concat(tS, " h ").concat(-gS, " Z");
        return XS
      },
      jS = function(SS, HS) {
        if (!SS || !HS) return !1;
        var gS = SS.x,
          tS = SS.y,
          bS = HS.x,
          XS = HS.y,
          xS = HS.width,
          NS = HS.height;
        if (Math.abs(xS) > 0 && Math.abs(NS) > 0) {
          var qS = Math.min(bS, bS + xS),
            uS = Math.max(bS, bS + xS),
            IS = Math.min(XS, XS + NS),
            fS = Math.max(XS, XS + NS);
          return gS >= qS && gS <= uS && tS >= IS && tS <= fS
        }
        return !1
      },
      GS = {
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
      CS = function(SS) {
        var HS = kS(kS({}, GS), SS),
          gS = (0, tS.useRef)(),
          NS = uS((0, tS.useState)(-1), 2),
          IS = NS[0],
          fS = NS[1];
        (0, tS.useEffect)((function() {
          if (gS.current && gS.current.getTotalLength) try {
            var SS = gS.current.getTotalLength();
            SS && fS(SS)
          } catch (HS) {}
        }), []);
        var aS = HS.x,
          jS = HS.y,
          CS = HS.width,
          nS = HS.height,
          PS = HS.radius,
          QS = HS.className,
          DS = HS.animationEasing,
          wS = HS.animationDuration,
          hS = HS.animationBegin,
          ZS = HS.isAnimationActive,
          JS = HS.isUpdateAnimationActive;
        if (aS !== +aS || jS !== +jS || CS !== +CS || nS !== +nS || 0 === CS || 0 === nS) return null;
        var OS = (0, bS.b)("recharts-rectangle", QS);
        return JS ? tS.createElement(XS.c, {
          canBegin: IS > 0,
          from: {
            width: CS,
            height: nS,
            x: aS,
            y: jS
          },
          to: {
            width: CS,
            height: nS,
            x: aS,
            y: jS
          },
          duration: wS,
          animationEasing: DS,
          isActive: JS
        }, (function(SS) {
          var bS = SS.width,
            NS = SS.height,
            uS = SS.x,
            fS = SS.y;
          return tS.createElement(XS.c, {
            canBegin: IS > 0,
            from: "0px ".concat(-1 === IS ? 1 : IS, "px"),
            to: "".concat(IS, "px 0px"),
            attributeName: "strokeDasharray",
            Qa: hS,
            duration: wS,
            isActive: ZS,
            easing: DS
          }, tS.createElement("path", qS({}, (0, xS.b)(HS, !0), {
            className: OS,
            d: KS(uS, fS, bS, NS, PS),
            ref: gS
          })))
        })) : tS.createElement("path", qS({}, (0, xS.b)(HS, !0), {
          className: OS,
          d: KS(aS, jS, CS, nS, PS)
        }))
      }
  },
  6519: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => GS
    });
    var tS = gS(64),
      bS = gS(5259),
      XS = gS(5650),
      xS = gS(6421),
      NS = gS(5340);

    function qS(SS) {
      return qS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, qS(SS)
    }

    function uS() {
      return uS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, uS.apply(this, arguments)
    }

    function IS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function fS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? IS(Object(gS), !0).forEach((function(HS) {
          kS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : IS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function kS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != qS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != qS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == qS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var aS = function(SS) {
        var HS = SS.cx,
          gS = SS.cy,
          tS = SS.radius,
          bS = SS.angle,
          XS = SS.sign,
          NS = SS.isExternal,
          qS = SS.cornerRadius,
          uS = SS.cornerIsExternal,
          IS = qS * (NS ? 1 : -1) + tS,
          fS = Math.asin(qS / IS) / xS.e,
          kS = uS ? bS : bS + XS * fS,
          aS = uS ? bS - XS * fS : bS;
        return {
          center: (0, xS.i)(HS, gS, IS, kS),
          circleTangency: (0, xS.i)(HS, gS, tS, kS),
          lineTangency: (0, xS.i)(HS, gS, IS * Math.cos(fS * xS.e), aS),
          Of: fS
        }
      },
      KS = function(SS) {
        var HS = SS.cx,
          gS = SS.cy,
          tS = SS.innerRadius,
          bS = SS.outerRadius,
          XS = SS.startAngle,
          qS = function(SS, HS) {
            return (0, NS.w)(HS - SS) * Math.min(Math.abs(HS - SS), 359.999)
          }(XS, SS.endAngle),
          uS = XS + qS,
          IS = (0, xS.i)(HS, gS, bS, XS),
          fS = (0, xS.i)(HS, gS, bS, uS),
          kS = "M ".concat(IS.x, ",").concat(IS.y, "\n    A ").concat(bS, ",").concat(bS, ",0,\n    ").concat(+(Math.abs(qS) > 180), ",").concat(+(XS > uS), ",\n    ").concat(fS.x, ",").concat(fS.y, "\n  ");
        if (tS > 0) {
          var aS = (0, xS.i)(HS, gS, tS, XS),
            KS = (0, xS.i)(HS, gS, tS, uS);
          kS += "L ".concat(KS.x, ",").concat(KS.y, "\n            A ").concat(tS, ",").concat(tS, ",0,\n            ").concat(+(Math.abs(qS) > 180), ",").concat(+(XS <= uS), ",\n            ").concat(aS.x, ",").concat(aS.y, " Z")
        } else kS += "L ".concat(HS, ",").concat(gS, " Z");
        return kS
      },
      jS = {
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
      GS = function(SS) {
        var HS = fS(fS({}, jS), SS),
          gS = HS.cx,
          xS = HS.cy,
          qS = HS.innerRadius,
          IS = HS.outerRadius,
          kS = HS.cornerRadius,
          GS = HS.forceCornerRadius,
          CS = HS.cornerIsExternal,
          nS = HS.startAngle,
          PS = HS.endAngle,
          QS = HS.className;
        if (IS < qS || nS === PS) return null;
        var DS, wS = (0, bS.b)("recharts-sector", QS),
          hS = IS - qS,
          ZS = (0, NS.m)(kS, hS, 0, !0);
        return DS = ZS > 0 && Math.abs(nS - PS) < 360 ? function(SS) {
          var HS = SS.cx,
            gS = SS.cy,
            tS = SS.innerRadius,
            bS = SS.outerRadius,
            XS = SS.cornerRadius,
            xS = SS.forceCornerRadius,
            qS = SS.cornerIsExternal,
            uS = SS.startAngle,
            IS = SS.endAngle,
            fS = (0, NS.w)(IS - uS),
            kS = aS({
              cx: HS,
              cy: gS,
              radius: bS,
              angle: uS,
              sign: fS,
              cornerRadius: XS,
              cornerIsExternal: qS
            }),
            jS = kS.circleTangency,
            GS = kS.lineTangency,
            CS = kS.Of,
            nS = aS({
              cx: HS,
              cy: gS,
              radius: bS,
              angle: IS,
              sign: -fS,
              cornerRadius: XS,
              cornerIsExternal: qS
            }),
            PS = nS.circleTangency,
            QS = nS.lineTangency,
            DS = nS.Of,
            wS = qS ? Math.abs(uS - IS) : Math.abs(uS - IS) - CS - DS;
          if (wS < 0) return xS ? "M ".concat(GS.x, ",").concat(GS.y, "\n        a").concat(XS, ",").concat(XS, ",0,0,1,").concat(2 * XS, ",0\n        a").concat(XS, ",").concat(XS, ",0,0,1,").concat(2 * -XS, ",0\n      ") : KS({
            cx: HS,
            cy: gS,
            innerRadius: tS,
            outerRadius: bS,
            startAngle: uS,
            endAngle: IS
          });
          var hS = "M ".concat(GS.x, ",").concat(GS.y, "\n    A").concat(XS, ",").concat(XS, ",0,0,").concat(+(fS < 0), ",").concat(jS.x, ",").concat(jS.y, "\n    A").concat(bS, ",").concat(bS, ",0,").concat(+(wS > 180), ",").concat(+(fS < 0), ",").concat(PS.x, ",").concat(PS.y, "\n    A").concat(XS, ",").concat(XS, ",0,0,").concat(+(fS < 0), ",").concat(QS.x, ",").concat(QS.y, "\n  ");
          if (tS > 0) {
            var ZS = aS({
                cx: HS,
                cy: gS,
                radius: tS,
                angle: uS,
                sign: fS,
                isExternal: !0,
                cornerRadius: XS,
                cornerIsExternal: qS
              }),
              JS = ZS.circleTangency,
              OS = ZS.lineTangency,
              dS = ZS.Of,
              cS = aS({
                cx: HS,
                cy: gS,
                radius: tS,
                angle: IS,
                sign: -fS,
                isExternal: !0,
                cornerRadius: XS,
                cornerIsExternal: qS
              }),
              vS = cS.circleTangency,
              ES = cS.lineTangency,
              LS = cS.Of,
              YS = qS ? Math.abs(uS - IS) : Math.abs(uS - IS) - dS - LS;
            if (YS < 0 && 0 === XS) return "".concat(hS, "L").concat(HS, ",").concat(gS, "Z");
            hS += "L".concat(ES.x, ",").concat(ES.y, "\n      A").concat(XS, ",").concat(XS, ",0,0,").concat(+(fS < 0), ",").concat(vS.x, ",").concat(vS.y, "\n      A").concat(tS, ",").concat(tS, ",0,").concat(+(YS > 180), ",").concat(+(fS > 0), ",").concat(JS.x, ",").concat(JS.y, "\n      A").concat(XS, ",").concat(XS, ",0,0,").concat(+(fS < 0), ",").concat(OS.x, ",").concat(OS.y, "Z")
          } else hS += "L".concat(HS, ",").concat(gS, "Z");
          return hS
        }({
          cx: gS,
          cy: xS,
          innerRadius: qS,
          outerRadius: IS,
          cornerRadius: Math.min(ZS, hS / 2),
          forceCornerRadius: GS,
          cornerIsExternal: CS,
          startAngle: nS,
          endAngle: PS
        }) : KS({
          cx: gS,
          cy: xS,
          innerRadius: qS,
          outerRadius: IS,
          startAngle: nS,
          endAngle: PS
        }), tS.createElement("path", uS({}, (0, XS.b)(HS, !0), {
          className: wS,
          d: DS,
          role: "img"
        }))
      }
  },
  6243: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => sS
    });
    var tS = gS(64),
      bS = gS(6245),
      XS = gS.n(bS);
    Math.abs, Math.atan2;
    const xS = Math.cos,
      NS = (Math.max, Math.min, Math.sin),
      qS = Math.sqrt,
      uS = Math.PI,
      IS = 2 * uS;
    const fS = {
        draw(SS, HS) {
          const gS = qS(HS / uS);
          SS.moveTo(gS, 0), SS.arc(0, 0, gS, 0, IS)
        }
      },
      kS = {
        draw(SS, HS) {
          const gS = qS(HS / 5) / 2;
          SS.moveTo(-3 * gS, -gS), SS.lineTo(-gS, -gS), SS.lineTo(-gS, -3 * gS), SS.lineTo(gS, -3 * gS), SS.lineTo(gS, -gS), SS.lineTo(3 * gS, -gS), SS.lineTo(3 * gS, gS), SS.lineTo(gS, gS), SS.lineTo(gS, 3 * gS), SS.lineTo(-gS, 3 * gS), SS.lineTo(-gS, gS), SS.lineTo(-3 * gS, gS), SS.closePath()
        }
      },
      aS = qS(1 / 3),
      KS = 2 * aS,
      jS = {
        draw(SS, HS) {
          const gS = qS(HS / KS),
            tS = gS * aS;
          SS.moveTo(0, -gS), SS.lineTo(tS, 0), SS.lineTo(0, gS), SS.lineTo(-tS, 0), SS.closePath()
        }
      },
      GS = {
        draw(SS, HS) {
          const gS = qS(HS),
            tS = -gS / 2;
          SS.rect(tS, tS, gS, gS)
        }
      },
      CS = NS(uS / 10) / NS(7 * uS / 10),
      nS = NS(IS / 10) * CS,
      PS = -xS(IS / 10) * CS,
      QS = {
        draw(SS, HS) {
          const gS = qS(.8908130915292852 * HS),
            tS = nS * gS,
            bS = PS * gS;
          SS.moveTo(0, -gS), SS.lineTo(tS, bS);
          for (let XS = 1; XS < 5; ++XS) {
            const HS = IS * XS / 5,
              qS = xS(HS),
              uS = NS(HS);
            SS.lineTo(uS * gS, -qS * gS), SS.lineTo(qS * tS - uS * bS, uS * tS + qS * bS)
          }
          SS.closePath()
        }
      },
      DS = qS(3),
      wS = {
        draw(SS, HS) {
          const gS = -qS(HS / (3 * DS));
          SS.moveTo(0, 2 * gS), SS.lineTo(-DS * gS, -gS), SS.lineTo(DS * gS, -gS), SS.closePath()
        }
      },
      hS = -.5,
      ZS = qS(3) / 2,
      JS = 1 / qS(12),
      OS = 3 * (JS / 2 + 1),
      dS = {
        draw(SS, HS) {
          const gS = qS(HS / OS),
            tS = gS / 2,
            bS = gS * JS,
            XS = tS,
            xS = gS * JS + gS,
            NS = -XS,
            uS = xS;
          SS.moveTo(tS, bS), SS.lineTo(XS, xS), SS.lineTo(NS, uS), SS.lineTo(hS * tS - ZS * bS, ZS * tS + hS * bS), SS.lineTo(hS * XS - ZS * xS, ZS * XS + hS * xS), SS.lineTo(hS * NS - ZS * uS, ZS * NS + hS * uS), SS.lineTo(hS * tS + ZS * bS, hS * bS - ZS * tS), SS.lineTo(hS * XS + ZS * xS, hS * xS - ZS * XS), SS.lineTo(hS * NS + ZS * uS, hS * uS - ZS * NS), SS.closePath()
        }
      };
    var cS = gS(6279),
      vS = gS(6284);
    qS(3), qS(3);
    var ES = gS(5259),
      LS = gS(5650);

    function YS(SS) {
      return YS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, YS(SS)
    }
    var AS = ["type", "size", "sizeType"];

    function yS() {
      return yS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, yS.apply(this, arguments)
    }

    function VS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function iS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? VS(Object(gS), !0).forEach((function(HS) {
          WS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : VS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function WS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != YS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != YS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == YS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function zS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }
    var US = {
        symbolCircle: fS,
        symbolCross: kS,
        symbolDiamond: jS,
        symbolSquare: GS,
        symbolStar: QS,
        symbolTriangle: wS,
        symbolWye: dS
      },
      pS = Math.PI / 180,
      sS = function(SS) {
        var HS = SS.type,
          gS = void 0 === HS ? "circle" : HS,
          bS = SS.size,
          xS = void 0 === bS ? 64 : bS,
          NS = SS.sizeType,
          qS = void 0 === NS ? "area" : NS,
          uS = iS(iS({}, zS(SS, AS)), {}, {
            type: gS,
            size: xS,
            sizeType: qS
          }),
          IS = uS.className,
          kS = uS.cx,
          aS = uS.cy,
          KS = (0, LS.b)(uS, !0);
        return kS === +kS && aS === +aS && xS === +xS ? tS.createElement("path", yS({}, KS, {
          className: (0, ES.b)("recharts-symbols", IS),
          transform: "translate(".concat(kS, ", ").concat(aS, ")"),
          d: function() {
            var SS = function(SS) {
                var HS = "symbol".concat(XS()(SS));
                return US[HS] || fS
              }(gS),
              HS = function(SS, HS) {
                let gS = null,
                  tS = (0, vS.c)(bS);

                function bS() {
                  let bS;
                  if (gS || (gS = bS = tS()), SS.apply(this, arguments).draw(gS, +HS.apply(this, arguments)), bS) return gS = null, bS + "" || null
                }
                return SS = "function" === typeof SS ? SS : (0, cS.e)(SS || fS), HS = "function" === typeof HS ? HS : (0, cS.e)(void 0 === HS ? 64 : +HS), bS.type = function(HS) {
                  return arguments.length ? (SS = "function" === typeof HS ? HS : (0, cS.e)(HS), bS) : SS
                }, bS.size = function(SS) {
                  return arguments.length ? (HS = "function" === typeof SS ? SS : (0, cS.e)(+SS), bS) : HS
                }, bS.context = function(SS) {
                  return arguments.length ? (gS = null == SS ? null : SS, bS) : gS
                }, bS
              }().type(SS).size(function(SS, HS, gS) {
                if ("area" === HS) return SS;
                switch (gS) {
                  case "cross":
                    return 5 * SS * SS / 9;
                  case "diamond":
                    return .5 * SS * SS / Math.sqrt(3);
                  case "square":
                    return SS * SS;
                  case "star":
                    var tS = 18 * pS;
                    return 1.25 * SS * SS * (Math.tan(tS) - Math.tan(2 * tS) * Math.pow(Math.tan(tS), 2));
                  case "triangle":
                    return Math.sqrt(3) * SS * SS / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * SS * SS / 8;
                  default:
                    return Math.PI * SS * SS / 4
                }
              }(xS, qS, gS));
            return HS()
          }()
        })) : null
      };
    sS.registerSymbol = function(SS, HS) {
      US["symbol".concat(XS()(SS))] = HS
    }
  },
  6488: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => WS,
      g: () => FS,
      k: () => zS,
      o: () => US,
      p: () => pS
    });
    var tS = gS(64),
      bS = gS(5458),
      XS = gS.n(bS),
      xS = gS(6495),
      NS = gS.n(xS),
      qS = gS(6510),
      uS = gS.n(qS),
      IS = gS(6391),
      fS = gS.n(IS),
      kS = gS(6294),
      aS = gS(5259),
      KS = gS(6300),
      jS = gS(5650);

    function GS(SS) {
      return GS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, GS(SS)
    }

    function CS() {
      return CS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS) Object.prototype.hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, CS.apply(this, arguments)
    }

    function nS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return PS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return PS(SS, HS)
      }(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function QS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function DS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? QS(Object(gS), !0).forEach((function(HS) {
          wS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : QS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function wS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != GS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != GS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == GS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var hS = function(SS, HS, gS, tS, bS) {
        var XS, xS = gS - tS;
        return XS = "M ".concat(SS, ",").concat(HS), XS += "L ".concat(SS + gS, ",").concat(HS), XS += "L ".concat(SS + gS - xS / 2, ",").concat(HS + bS), XS += "L ".concat(SS + gS - xS / 2 - tS, ",").concat(HS + bS), XS += "L ".concat(SS, ",").concat(HS, " Z")
      },
      ZS = {
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
      JS = function(SS) {
        var HS = DS(DS({}, ZS), SS),
          gS = (0, tS.useRef)(),
          bS = nS((0, tS.useState)(-1), 2),
          XS = bS[0],
          xS = bS[1];
        (0, tS.useEffect)((function() {
          if (gS.current && gS.current.getTotalLength) try {
            var SS = gS.current.getTotalLength();
            SS && xS(SS)
          } catch (HS) {}
        }), []);
        var NS = HS.x,
          qS = HS.y,
          uS = HS.upperWidth,
          IS = HS.lowerWidth,
          fS = HS.height,
          kS = HS.className,
          GS = HS.animationEasing,
          PS = HS.animationDuration,
          QS = HS.animationBegin,
          wS = HS.isUpdateAnimationActive;
        if (NS !== +NS || qS !== +qS || uS !== +uS || IS !== +IS || fS !== +fS || 0 === uS && 0 === IS || 0 === fS) return null;
        var JS = (0, aS.b)("recharts-trapezoid", kS);
        return wS ? tS.createElement(KS.c, {
          canBegin: XS > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: fS,
            x: NS,
            y: qS
          },
          to: {
            upperWidth: uS,
            lowerWidth: IS,
            height: fS,
            x: NS,
            y: qS
          },
          duration: PS,
          animationEasing: GS,
          isActive: wS
        }, (function(SS) {
          var bS = SS.upperWidth,
            xS = SS.lowerWidth,
            NS = SS.height,
            qS = SS.x,
            uS = SS.y;
          return tS.createElement(KS.c, {
            canBegin: XS > 0,
            from: "0px ".concat(-1 === XS ? 1 : XS, "px"),
            to: "".concat(XS, "px 0px"),
            attributeName: "strokeDasharray",
            Qa: QS,
            duration: PS,
            easing: GS
          }, tS.createElement("path", CS({}, (0, jS.b)(HS, !0), {
            className: JS,
            d: hS(qS, uS, bS, xS, NS),
            ref: gS
          })))
        })) : tS.createElement("g", null, tS.createElement("path", CS({}, (0, jS.b)(HS, !0), {
          className: JS,
          d: hS(NS, qS, uS, IS, fS)
        })))
      },
      OS = gS(6519),
      dS = gS(6152),
      cS = gS(6243),
      vS = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function ES(SS) {
      return ES = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, ES(SS)
    }

    function LS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function YS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function AS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? YS(Object(gS), !0).forEach((function(HS) {
          yS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : YS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function yS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != ES(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != ES(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == ES(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function VS(SS, HS) {
      return AS(AS({}, HS), SS)
    }

    function iS(SS) {
      var HS = SS.shapeType,
        gS = SS.elementProps;
      switch (HS) {
        case "rectangle":
          return tS.createElement(kS.e, gS);
        case "trapezoid":
          return tS.createElement(JS, gS);
        case "sector":
          return tS.createElement(OS.c, gS);
        case "symbols":
          if (function(SS) {
              return "symbols" === SS
            }(HS)) return tS.createElement(cS.c, gS);
          break;
        default:
          return null
      }
    }

    function WS(SS) {
      var HS, gS = SS.option,
        bS = SS.shapeType,
        xS = SS.propTransformer,
        qS = void 0 === xS ? VS : xS,
        IS = SS.activeClassName,
        fS = void 0 === IS ? "recharts-active-shape" : IS,
        kS = SS.isActive,
        aS = LS(SS, vS);
      if ((0, tS.isValidElement)(gS)) HS = (0, tS.cloneElement)(gS, AS(AS({}, aS), function(SS) {
        return (0, tS.isValidElement)(SS) ? SS.props : SS
      }(gS)));
      else if (XS()(gS)) HS = gS(aS);
      else if (NS()(gS) && !uS()(gS)) {
        var KS = qS(gS, aS);
        HS = tS.createElement(iS, {
          shapeType: bS,
          elementProps: KS
        })
      } else {
        var jS = aS;
        HS = tS.createElement(iS, {
          shapeType: bS,
          elementProps: jS
        })
      }
      return kS ? tS.createElement(dS.d, {
        className: fS
      }, HS) : HS
    }

    function zS(SS, HS) {
      return null != HS && "trapezoids" in SS.props
    }

    function US(SS, HS) {
      return null != HS && "sectors" in SS.props
    }

    function pS(SS, HS) {
      return null != HS && "points" in SS.props
    }

    function sS(SS, HS) {
      var gS, tS, bS = SS.x === (null === HS || void 0 === HS || null === (gS = HS.labelViewBox) || void 0 === gS ? void 0 : gS.x) || SS.x === HS.x,
        XS = SS.y === (null === HS || void 0 === HS || null === (tS = HS.labelViewBox) || void 0 === tS ? void 0 : tS.y) || SS.y === HS.y;
      return bS && XS
    }

    function BS(SS, HS) {
      var gS = SS.endAngle === HS.endAngle,
        tS = SS.startAngle === HS.startAngle;
      return gS && tS
    }

    function MS(SS, HS) {
      var gS = SS.x === HS.x,
        tS = SS.y === HS.y,
        bS = SS.z === HS.z;
      return gS && tS && bS
    }

    function FS(SS) {
      var HS = SS.activeTooltipItem,
        gS = SS.graphicalItem,
        tS = SS.itemData,
        bS = function(SS, HS) {
          var gS;
          return zS(SS, HS) ? gS = "trapezoids" : US(SS, HS) ? gS = "sectors" : pS(SS, HS) && (gS = "points"), gS
        }(gS, HS),
        XS = function(SS, HS) {
          var gS, tS;
          return zS(SS, HS) ? null === (gS = HS.tooltipPayload) || void 0 === gS || null === (gS = gS[0]) || void 0 === gS || null === (gS = gS.payload) || void 0 === gS ? void 0 : gS.payload : US(SS, HS) ? null === (tS = HS.tooltipPayload) || void 0 === tS || null === (tS = tS[0]) || void 0 === tS || null === (tS = tS.payload) || void 0 === tS ? void 0 : tS.payload : pS(SS, HS) ? HS.payload : {}
        }(gS, HS),
        xS = tS.filter((function(SS, tS) {
          var xS = fS()(XS, SS),
            NS = gS.props[bS].filter((function(SS) {
              var tS = function(SS, HS) {
                var gS;
                return zS(SS, HS) ? gS = sS : US(SS, HS) ? gS = BS : pS(SS, HS) && (gS = MS), gS
              }(gS, HS);
              return tS(SS, HS)
            })),
            qS = gS.props[bS].indexOf(NS[NS.length - 1]);
          return xS && tS === qS
        }));
      return tS.indexOf(xS[xS.length - 1])
    }
  },
  6437: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => DS,
      h: () => CS,
      l: () => wS,
      p: () => PS,
      q: () => nS
    });
    var tS = gS(6441),
      bS = gS.n(tS),
      XS = gS(6454),
      xS = gS.n(XS),
      NS = gS(6315),
      qS = gS(5650),
      uS = gS(5340),
      IS = gS(6467);

    function fS(SS) {
      return fS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, fS(SS)
    }

    function kS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, GS(tS.key), tS)
      }
    }

    function aS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function KS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? aS(Object(gS), !0).forEach((function(HS) {
          jS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : aS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function jS(SS, HS, gS) {
      return (HS = GS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function GS(SS) {
      var HS = function(SS, HS) {
        if ("object" != fS(SS) || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != fS(tS)) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == fS(HS) ? HS : HS + ""
    }
    var CS = function(SS, HS, gS, tS, bS) {
        var XS = SS.width,
          xS = SS.height,
          fS = SS.layout,
          kS = SS.children,
          aS = Object.keys(HS),
          GS = {
            left: gS.left,
            leftMirror: gS.left,
            right: XS - gS.right,
            rightMirror: XS - gS.right,
            top: gS.top,
            topMirror: gS.top,
            bottom: xS - gS.bottom,
            bottomMirror: xS - gS.bottom
          },
          CS = !!(0, qS.g)(kS, IS.e);
        return aS.reduce((function(XS, xS) {
          var qS, IS, kS, aS, nS, PS = HS[xS],
            QS = PS.orientation,
            DS = PS.domain,
            wS = PS.padding,
            hS = void 0 === wS ? {} : wS,
            ZS = PS.mirror,
            JS = PS.reversed,
            OS = "".concat(QS).concat(ZS ? "Mirror" : "");
          if ("number" === PS.type && ("gap" === PS.padding || "no-gap" === PS.padding)) {
            var dS = DS[1] - DS[0],
              cS = 1 / 0,
              vS = PS.categoricalDomain.sort(uS.e);
            if (vS.forEach((function(SS, HS) {
                HS > 0 && (cS = Math.min((SS || 0) - (vS[HS - 1] || 0), cS))
              })), Number.isFinite(cS)) {
              var ES = cS / dS,
                LS = "vertical" === PS.layout ? gS.height : gS.width;
              if ("gap" === PS.padding && (qS = ES * LS / 2), "no-gap" === PS.padding) {
                var YS = (0, uS.m)(SS.barCategoryGap, ES * LS),
                  AS = ES * LS / 2;
                qS = AS - YS - (AS - YS) / LS * YS
              }
            }
          }
          IS = "xAxis" === tS ? [gS.left + (hS.left || 0) + (qS || 0), gS.left + gS.width - (hS.right || 0) - (qS || 0)] : "yAxis" === tS ? "horizontal" === fS ? [gS.top + gS.height - (hS.bottom || 0), gS.top + (hS.top || 0)] : [gS.top + (hS.top || 0) + (qS || 0), gS.top + gS.height - (hS.bottom || 0) - (qS || 0)] : PS.range, JS && (IS = [IS[1], IS[0]]);
          var yS = (0, NS.tb)(PS, bS, CS),
            VS = yS.scale,
            iS = yS.realScaleType;
          VS.domain(DS).range(IS), (0, NS.j)(VS);
          var WS = (0, NS.bb)(VS, KS(KS({}, PS), {}, {
            realScaleType: iS
          }));
          "xAxis" === tS ? (nS = "top" === QS && !ZS || "bottom" === QS && ZS, kS = gS.left, aS = GS[OS] - nS * PS.height) : "yAxis" === tS && (nS = "left" === QS && !ZS || "right" === QS && ZS, kS = GS[OS] - nS * PS.width, aS = gS.top);
          var zS = KS(KS(KS({}, PS), WS), {}, {
            realScaleType: iS,
            x: kS,
            y: aS,
            scale: VS,
            width: "xAxis" === tS ? gS.width : PS.width,
            height: "yAxis" === tS ? gS.height : PS.height
          });
          return zS.bandSize = (0, NS.s)(zS, WS), PS.hide || "xAxis" !== tS ? PS.hide || (GS[OS] += (nS ? -1 : 1) * zS.width) : GS[OS] += (nS ? -1 : 1) * zS.height, KS(KS({}, XS), {}, jS({}, xS, zS))
        }), {})
      },
      nS = function(SS, HS) {
        var gS = SS.x,
          tS = SS.y,
          bS = HS.x,
          XS = HS.y;
        return {
          x: Math.min(gS, bS),
          y: Math.min(tS, XS),
          width: Math.abs(bS - gS),
          height: Math.abs(XS - tS)
        }
      },
      PS = function(SS) {
        var HS = SS.x1,
          gS = SS.y1,
          tS = SS.x2,
          bS = SS.y2;
        return nS({
          x: HS,
          y: gS
        }, {
          x: tS,
          y: bS
        })
      },
      QS = function() {
        function SS(HS) {
          ! function(SS, HS) {
            if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
          }(this, SS), this.scale = HS
        }
        return HS = SS, gS = [{
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
          value: function(SS) {
            var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              gS = HS.bandAware,
              tS = HS.position;
            if (void 0 !== SS) {
              if (tS) switch (tS) {
                case "start":
                default:
                  return this.scale(SS);
                case "middle":
                  var bS = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(SS) + bS;
                case "end":
                  var XS = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(SS) + XS
              }
              if (gS) {
                var xS = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(SS) + xS
              }
              return this.scale(SS)
            }
          }
        }, {
          key: "isInRange",
          value: function(SS) {
            var HS = this.range(),
              gS = HS[0],
              tS = HS[HS.length - 1];
            return gS <= tS ? SS >= gS && SS <= tS : SS >= tS && SS <= gS
          }
        }], tS = [{
          key: "create",
          value: function(HS) {
            return new SS(HS)
          }
        }], gS && kS(HS.prototype, gS), tS && kS(HS, tS), Object.defineProperty(HS, "prototype", {
          writable: !1
        }), HS;
        var HS, gS, tS
      }();
    jS(QS, "EPS", 1e-4);
    var DS = function(SS) {
      var HS = Object.keys(SS).reduce((function(HS, gS) {
        return KS(KS({}, HS), {}, jS({}, gS, QS.create(SS[gS])))
      }), {});
      return KS(KS({}, HS), {}, {
        apply: function(SS) {
          var gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            tS = gS.bandAware,
            XS = gS.position;
          return bS()(SS, (function(SS, gS) {
            return HS[gS].apply(SS, {
              bandAware: tS,
              position: XS
            })
          }))
        },
        isInRange: function(SS) {
          return xS()(SS, (function(SS, gS) {
            return HS[gS].isInRange(SS)
          }))
        }
      })
    };
    var wS = function(SS) {
      var HS = SS.width,
        gS = SS.height,
        tS = function(SS) {
          return (SS % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        bS = tS * Math.PI / 180,
        XS = Math.atan(gS / HS),
        xS = bS > XS && bS < Math.PI - XS ? gS / Math.sin(bS) : HS / Math.cos(bS);
      return Math.abs(xS)
    }
  },
  6315: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => Yx,
      h: () => cx,
      j: () => Mx,
      m: () => px,
      q: () => Fx,
      s: () => xN,
      w: () => Lx,
      z: () => Ex,
      B: () => SN,
      F: () => rx,
      H: () => ex,
      K: () => Wx,
      M: () => dx,
      P: () => Vx,
      S: () => gN,
      U: () => vx,
      X: () => lx,
      _: () => HN,
      $: () => zx,
      bb: () => mx,
      fb: () => qN,
      jb: () => Ox,
      mb: () => ix,
      nb: () => NN,
      rb: () => yx,
      tb: () => sx,
      vb: () => XN,
      xb: () => Rx
    });
    var tS = {};
    gS.r(tS), gS.d(tS, {
      scaleBand: () => bS.c,
      scaleDiverging: () => uX,
      scaleDivergingLog: () => IX,
      scaleDivergingPow: () => kX,
      scaleDivergingSqrt: () => aX,
      scaleDivergingSymlog: () => fX,
      scaleIdentity: () => oH,
      scaleImplicit: () => ug.h,
      scaleLinear: () => TH,
      scaleLog: () => bg,
      scaleOrdinal: () => ug.d,
      scalePoint: () => bS.f,
      scalePow: () => Kg,
      scaleQuantile: () => Og,
      scaleQuantize: () => dg,
      scaleRadial: () => Cg,
      scaleSequential: () => gX,
      scaleSequentialLog: () => tX,
      scaleSequentialPow: () => XX,
      scaleSequentialQuantile: () => NX,
      scaleSequentialSqrt: () => xX,
      scaleSequentialSymlog: () => bX,
      scaleSqrt: () => jg,
      scaleSymlog: () => qg,
      scaleThreshold: () => cg,
      scaleTime: () => eb,
      scaleUtc: () => rb,
      tickFormat: () => FH
    });
    var bS = gS(6324);
    const XS = Math.sqrt(50),
      xS = Math.sqrt(10),
      NS = Math.sqrt(2);

    function qS(SS, HS, gS) {
      const tS = (HS - SS) / Math.max(0, gS),
        bS = Math.floor(Math.log10(tS)),
        uS = tS / Math.pow(10, bS),
        IS = uS >= XS ? 10 : uS >= xS ? 5 : uS >= NS ? 2 : 1;
      let fS, kS, aS;
      return bS < 0 ? (aS = Math.pow(10, -bS) / IS, fS = Math.round(SS * aS), kS = Math.round(HS * aS), fS / aS < SS && ++fS, kS / aS > HS && --kS, aS = -aS) : (aS = Math.pow(10, bS) * IS, fS = Math.round(SS / aS), kS = Math.round(HS / aS), fS * aS < SS && ++fS, kS * aS > HS && --kS), kS < fS && .5 <= gS && gS < 2 ? qS(SS, HS, 2 * gS) : [fS, kS, aS]
    }

    function uS(SS, HS, gS) {
      if (!((gS = +gS) > 0)) return [];
      if ((SS = +SS) === (HS = +HS)) return [SS];
      const tS = HS < SS,
        [bS, XS, xS] = tS ? qS(HS, SS, gS) : qS(SS, HS, gS);
      if (!(XS >= bS)) return [];
      const NS = XS - bS + 1,
        uS = new Array(NS);
      if (tS)
        if (xS < 0)
          for (let qS = 0; qS < NS; ++qS) uS[qS] = (XS - qS) / -xS;
        else
          for (let qS = 0; qS < NS; ++qS) uS[qS] = (XS - qS) * xS;
      else if (xS < 0)
        for (let qS = 0; qS < NS; ++qS) uS[qS] = (bS + qS) / -xS;
      else
        for (let qS = 0; qS < NS; ++qS) uS[qS] = (bS + qS) * xS;
      return uS
    }

    function IS(SS, HS, gS) {
      return qS(SS = +SS, HS = +HS, gS = +gS)[2]
    }

    function fS(SS, HS, gS) {
      gS = +gS;
      const tS = (HS = +HS) < (SS = +SS),
        bS = tS ? IS(HS, SS, gS) : IS(SS, HS, gS);
      return (tS ? -1 : 1) * (bS < 0 ? 1 / -bS : bS)
    }

    function kS(SS, HS) {
      return null == SS || null == HS ? NaN : SS < HS ? -1 : SS > HS ? 1 : SS >= HS ? 0 : NaN
    }

    function aS(SS, HS) {
      return null == SS || null == HS ? NaN : HS < SS ? -1 : HS > SS ? 1 : HS >= SS ? 0 : NaN
    }

    function KS(SS) {
      let HS, gS, tS;

      function bS(SS, tS) {
        let bS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          XS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.length;
        if (bS < XS) {
          if (0 !== HS(tS, tS)) return XS;
          do {
            const HS = bS + XS >>> 1;
            gS(SS[HS], tS) < 0 ? bS = HS + 1 : XS = HS
          } while (bS < XS)
        }
        return bS
      }
      return 2 !== SS.length ? (HS = kS, gS = (HS, gS) => kS(SS(HS), gS), tS = (HS, gS) => SS(HS) - gS) : (HS = SS === kS || SS === aS ? SS : jS, gS = SS, tS = SS), {
        left: bS,
        center: function(SS, HS) {
          let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const XS = bS(SS, HS, gS, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.length) - 1);
          return XS > gS && tS(SS[XS - 1], HS) > -tS(SS[XS], HS) ? XS - 1 : XS
        },
        right: function(SS, tS) {
          let bS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            XS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SS.length;
          if (bS < XS) {
            if (0 !== HS(tS, tS)) return XS;
            do {
              const HS = bS + XS >>> 1;
              gS(SS[HS], tS) <= 0 ? bS = HS + 1 : XS = HS
            } while (bS < XS)
          }
          return bS
        }
      }
    }

    function jS() {
      return 0
    }

    function GS(SS) {
      return null === SS ? NaN : +SS
    }
    const CS = KS(kS),
      nS = CS.right,
      PS = (CS.left, KS(GS).center, nS);

    function QS(SS, HS, gS) {
      SS.prototype = HS.prototype = gS, gS.constructor = SS
    }

    function DS(SS, HS) {
      var gS = Object.create(SS.prototype);
      for (var tS in HS) gS[tS] = HS[tS];
      return gS
    }

    function wS() {}
    var hS = .7,
      ZS = 1 / hS,
      JS = "\\s*([+-]?\\d+)\\s*",
      OS = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      dS = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      cS = /^#([0-9a-f]{3,8})$/,
      vS = new RegExp(`^rgb\\(${JS},${JS},${JS}\\)$`),
      ES = new RegExp(`^rgb\\(${dS},${dS},${dS}\\)$`),
      LS = new RegExp(`^rgba\\(${JS},${JS},${JS},${OS}\\)$`),
      YS = new RegExp(`^rgba\\(${dS},${dS},${dS},${OS}\\)$`),
      AS = new RegExp(`^hsl\\(${OS},${dS},${dS}\\)$`),
      yS = new RegExp(`^hsla\\(${OS},${dS},${dS},${OS}\\)$`),
      VS = {
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

    function iS() {
      return this.rgb().formatHex()
    }

    function WS() {
      return this.rgb().formatRgb()
    }

    function zS(SS) {
      var HS, gS;
      return SS = (SS + "").trim().toLowerCase(), (HS = cS.exec(SS)) ? (gS = HS[1].length, HS = parseInt(HS[1], 16), 6 === gS ? US(HS) : 3 === gS ? new BS(HS >> 8 & 15 | HS >> 4 & 240, HS >> 4 & 15 | 240 & HS, (15 & HS) << 4 | 15 & HS, 1) : 8 === gS ? pS(HS >> 24 & 255, HS >> 16 & 255, HS >> 8 & 255, (255 & HS) / 255) : 4 === gS ? pS(HS >> 12 & 15 | HS >> 8 & 240, HS >> 8 & 15 | HS >> 4 & 240, HS >> 4 & 15 | 240 & HS, ((15 & HS) << 4 | 15 & HS) / 255) : null) : (HS = vS.exec(SS)) ? new BS(HS[1], HS[2], HS[3], 1) : (HS = ES.exec(SS)) ? new BS(255 * HS[1] / 100, 255 * HS[2] / 100, 255 * HS[3] / 100, 1) : (HS = LS.exec(SS)) ? pS(HS[1], HS[2], HS[3], HS[4]) : (HS = YS.exec(SS)) ? pS(255 * HS[1] / 100, 255 * HS[2] / 100, 255 * HS[3] / 100, HS[4]) : (HS = AS.exec(SS)) ? lS(HS[1], HS[2] / 100, HS[3] / 100, 1) : (HS = yS.exec(SS)) ? lS(HS[1], HS[2] / 100, HS[3] / 100, HS[4]) : VS.hasOwnProperty(SS) ? US(VS[SS]) : "transparent" === SS ? new BS(NaN, NaN, NaN, 0) : null
    }

    function US(SS) {
      return new BS(SS >> 16 & 255, SS >> 8 & 255, 255 & SS, 1)
    }

    function pS(SS, HS, gS, tS) {
      return tS <= 0 && (SS = HS = gS = NaN), new BS(SS, HS, gS, tS)
    }

    function sS(SS, HS, gS, tS) {
      return 1 === arguments.length ? ((bS = SS) instanceof wS || (bS = zS(bS)), bS ? new BS((bS = bS.rgb()).r, bS.g, bS.b, bS.opacity) : new BS) : new BS(SS, HS, gS, null == tS ? 1 : tS);
      var bS
    }

    function BS(SS, HS, gS, tS) {
      this.r = +SS, this.g = +HS, this.b = +gS, this.opacity = +tS
    }

    function MS() {
      return `#${oS(this.r)}${oS(this.g)}${oS(this.b)}`
    }

    function FS() {
      const SS = RS(this.opacity);
      return `${1===SS?"rgb(":"rgba("}${TS(this.r)}, ${TS(this.g)}, ${TS(this.b)}${1===SS?")":`, ${SS})`}`
    }

    function RS(SS) {
      return isNaN(SS) ? 1 : Math.max(0, Math.min(1, SS))
    }

    function TS(SS) {
      return Math.max(0, Math.min(255, Math.round(SS) || 0))
    }

    function oS(SS) {
      return ((SS = TS(SS)) < 16 ? "0" : "") + SS.toString(16)
    }

    function lS(SS, HS, gS, tS) {
      return tS <= 0 ? SS = HS = gS = NaN : gS <= 0 || gS >= 1 ? SS = HS = NaN : HS <= 0 && (SS = NaN), new eS(SS, HS, gS, tS)
    }

    function mS(SS) {
      if (SS instanceof eS) return new eS(SS.h, SS.s, SS.l, SS.opacity);
      if (SS instanceof wS || (SS = zS(SS)), !SS) return new eS;
      if (SS instanceof eS) return SS;
      var HS = (SS = SS.rgb()).r / 255,
        gS = SS.g / 255,
        tS = SS.b / 255,
        bS = Math.min(HS, gS, tS),
        XS = Math.max(HS, gS, tS),
        xS = NaN,
        NS = XS - bS,
        qS = (XS + bS) / 2;
      return NS ? (xS = HS === XS ? (gS - tS) / NS + 6 * (gS < tS) : gS === XS ? (tS - HS) / NS + 2 : (HS - gS) / NS + 4, NS /= qS < .5 ? XS + bS : 2 - XS - bS, xS *= 60) : NS = qS > 0 && qS < 1 ? 0 : xS, new eS(xS, NS, qS, SS.opacity)
    }

    function eS(SS, HS, gS, tS) {
      this.h = +SS, this.s = +HS, this.l = +gS, this.opacity = +tS
    }

    function rS(SS) {
      return (SS = (SS || 0) % 360) < 0 ? SS + 360 : SS
    }

    function SH(SS) {
      return Math.max(0, Math.min(1, SS || 0))
    }

    function HH(SS, HS, gS) {
      return 255 * (SS < 60 ? HS + (gS - HS) * SS / 60 : SS < 180 ? gS : SS < 240 ? HS + (gS - HS) * (240 - SS) / 60 : HS)
    }

    function gH(SS, HS, gS, tS, bS) {
      var XS = SS * SS,
        xS = XS * SS;
      return ((1 - 3 * SS + 3 * XS - xS) * HS + (4 - 6 * XS + 3 * xS) * gS + (1 + 3 * SS + 3 * XS - 3 * xS) * tS + xS * bS) / 6
    }
    QS(wS, zS, {
      copy(SS) {
        return Object.assign(new this.constructor, this, SS)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: iS,
      formatHex: iS,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return mS(this).formatHsl()
      },
      formatRgb: WS,
      toString: WS
    }), QS(BS, sS, DS(wS, {
      brighter(SS) {
        return SS = null == SS ? ZS : Math.pow(ZS, SS), new BS(this.r * SS, this.g * SS, this.b * SS, this.opacity)
      },
      darker(SS) {
        return SS = null == SS ? hS : Math.pow(hS, SS), new BS(this.r * SS, this.g * SS, this.b * SS, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new BS(TS(this.r), TS(this.g), TS(this.b), RS(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: MS,
      formatHex: MS,
      formatHex8: function() {
        return `#${oS(this.r)}${oS(this.g)}${oS(this.b)}${oS(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: FS,
      toString: FS
    })), QS(eS, (function(SS, HS, gS, tS) {
      return 1 === arguments.length ? mS(SS) : new eS(SS, HS, gS, null == tS ? 1 : tS)
    }), DS(wS, {
      brighter(SS) {
        return SS = null == SS ? ZS : Math.pow(ZS, SS), new eS(this.h, this.s, this.l * SS, this.opacity)
      },
      darker(SS) {
        return SS = null == SS ? hS : Math.pow(hS, SS), new eS(this.h, this.s, this.l * SS, this.opacity)
      },
      rgb() {
        var SS = this.h % 360 + 360 * (this.h < 0),
          HS = isNaN(SS) || isNaN(this.s) ? 0 : this.s,
          gS = this.l,
          tS = gS + (gS < .5 ? gS : 1 - gS) * HS,
          bS = 2 * gS - tS;
        return new BS(HH(SS >= 240 ? SS - 240 : SS + 120, bS, tS), HH(SS, bS, tS), HH(SS < 120 ? SS + 240 : SS - 120, bS, tS), this.opacity)
      },
      clamp() {
        return new eS(rS(this.h), SH(this.s), SH(this.l), RS(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const SS = RS(this.opacity);
        return `${1===SS?"hsl(":"hsla("}${rS(this.h)}, ${100*SH(this.s)}%, ${100*SH(this.l)}%${1===SS?")":`, ${SS})`}`
      }
    }));
    const tH = SS => () => SS;

    function bH(SS, HS) {
      return function(gS) {
        return SS + gS * HS
      }
    }

    function XH(SS) {
      return 1 === (SS = +SS) ? xH : function(HS, gS) {
        return gS - HS ? function(SS, HS, gS) {
          return SS = Math.pow(SS, gS), HS = Math.pow(HS, gS) - SS, gS = 1 / gS,
            function(tS) {
              return Math.pow(SS + tS * HS, gS)
            }
        }(HS, gS, SS) : tH(isNaN(HS) ? gS : HS)
      }
    }

    function xH(SS, HS) {
      var gS = HS - SS;
      return gS ? bH(SS, gS) : tH(isNaN(SS) ? HS : SS)
    }
    const NH = function SS(HS) {
      var gS = XH(HS);

      function tS(SS, HS) {
        var tS = gS((SS = sS(SS)).r, (HS = sS(HS)).r),
          bS = gS(SS.g, HS.g),
          XS = gS(SS.b, HS.b),
          xS = xH(SS.opacity, HS.opacity);
        return function(HS) {
          return SS.r = tS(HS), SS.g = bS(HS), SS.b = XS(HS), SS.opacity = xS(HS), SS + ""
        }
      }
      return tS.gamma = SS, tS
    }(1);

    function qH(SS) {
      return function(HS) {
        var gS, tS, bS = HS.length,
          XS = new Array(bS),
          xS = new Array(bS),
          NS = new Array(bS);
        for (gS = 0; gS < bS; ++gS) tS = sS(HS[gS]), XS[gS] = tS.r || 0, xS[gS] = tS.g || 0, NS[gS] = tS.b || 0;
        return XS = SS(XS), xS = SS(xS), NS = SS(NS), tS.opacity = 1,
          function(SS) {
            return tS.r = XS(SS), tS.g = xS(SS), tS.b = NS(SS), tS + ""
          }
      }
    }
    qH((function(SS) {
      var HS = SS.length - 1;
      return function(gS) {
        var tS = gS <= 0 ? gS = 0 : gS >= 1 ? (gS = 1, HS - 1) : Math.floor(gS * HS),
          bS = SS[tS],
          XS = SS[tS + 1],
          xS = tS > 0 ? SS[tS - 1] : 2 * bS - XS,
          NS = tS < HS - 1 ? SS[tS + 2] : 2 * XS - bS;
        return gH((gS - tS / HS) * HS, xS, bS, XS, NS)
      }
    })), qH((function(SS) {
      var HS = SS.length;
      return function(gS) {
        var tS = Math.floor(((gS %= 1) < 0 ? ++gS : gS) * HS),
          bS = SS[(tS + HS - 1) % HS],
          XS = SS[tS % HS],
          xS = SS[(tS + 1) % HS],
          NS = SS[(tS + 2) % HS];
        return gH((gS - tS / HS) * HS, bS, XS, xS, NS)
      }
    }));

    function uH(SS, HS) {
      var gS, tS = HS ? HS.length : 0,
        bS = SS ? Math.min(tS, SS.length) : 0,
        XS = new Array(bS),
        xS = new Array(tS);
      for (gS = 0; gS < bS; ++gS) XS[gS] = CH(SS[gS], HS[gS]);
      for (; gS < tS; ++gS) xS[gS] = HS[gS];
      return function(SS) {
        for (gS = 0; gS < bS; ++gS) xS[gS] = XS[gS](SS);
        return xS
      }
    }

    function IH(SS, HS) {
      var gS = new Date;
      return SS = +SS, HS = +HS,
        function(tS) {
          return gS.setTime(SS * (1 - tS) + HS * tS), gS
        }
    }

    function fH(SS, HS) {
      return SS = +SS, HS = +HS,
        function(gS) {
          return SS * (1 - gS) + HS * gS
        }
    }

    function kH(SS, HS) {
      var gS, tS = {},
        bS = {};
      for (gS in null !== SS && "object" === typeof SS || (SS = {}), null !== HS && "object" === typeof HS || (HS = {}), HS) gS in SS ? tS[gS] = CH(SS[gS], HS[gS]) : bS[gS] = HS[gS];
      return function(SS) {
        for (gS in tS) bS[gS] = tS[gS](SS);
        return bS
      }
    }
    var aH = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      KH = new RegExp(aH.source, "g");

    function jH(SS, HS) {
      var gS, tS, bS, XS = aH.lastIndex = KH.lastIndex = 0,
        xS = -1,
        NS = [],
        qS = [];
      for (SS += "", HS += "";
        (gS = aH.exec(SS)) && (tS = KH.exec(HS));)(bS = tS.index) > XS && (bS = HS.slice(XS, bS), NS[xS] ? NS[xS] += bS : NS[++xS] = bS), (gS = gS[0]) === (tS = tS[0]) ? NS[xS] ? NS[xS] += tS : NS[++xS] = tS : (NS[++xS] = null, qS.push({
        i: xS,
        x: fH(gS, tS)
      })), XS = KH.lastIndex;
      return XS < HS.length && (bS = HS.slice(XS), NS[xS] ? NS[xS] += bS : NS[++xS] = bS), NS.length < 2 ? qS[0] ? function(SS) {
        return function(HS) {
          return SS(HS) + ""
        }
      }(qS[0].x) : function(SS) {
        return function() {
          return SS
        }
      }(HS) : (HS = qS.length, function(SS) {
        for (var gS, tS = 0; tS < HS; ++tS) NS[(gS = qS[tS]).i] = gS.x(SS);
        return NS.join("")
      })
    }

    function GH(SS, HS) {
      HS || (HS = []);
      var gS, tS = SS ? Math.min(HS.length, SS.length) : 0,
        bS = HS.slice();
      return function(XS) {
        for (gS = 0; gS < tS; ++gS) bS[gS] = SS[gS] * (1 - XS) + HS[gS] * XS;
        return bS
      }
    }

    function CH(SS, HS) {
      var gS, tS, bS = typeof HS;
      return null == HS || "boolean" === bS ? tH(HS) : ("number" === bS ? fH : "string" === bS ? (gS = zS(HS)) ? (HS = gS, NH) : jH : HS instanceof zS ? NH : HS instanceof Date ? IH : (tS = HS, !ArrayBuffer.isView(tS) || tS instanceof DataView ? Array.isArray(HS) ? uH : "function" !== typeof HS.valueOf && "function" !== typeof HS.toString || isNaN(HS) ? kH : fH : GH))(SS, HS)
    }

    function nH(SS, HS) {
      return SS = +SS, HS = +HS,
        function(gS) {
          return Math.round(SS * (1 - gS) + HS * gS)
        }
    }

    function PH(SS) {
      return +SS
    }
    var QH = [0, 1];

    function DH(SS) {
      return SS
    }

    function wH(SS, HS) {
      return (HS -= SS = +SS) ? function(gS) {
        return (gS - SS) / HS
      } : (gS = isNaN(HS) ? NaN : .5, function() {
        return gS
      });
      var gS
    }

    function hH(SS, HS, gS) {
      var tS = SS[0],
        bS = SS[1],
        XS = HS[0],
        xS = HS[1];
      return bS < tS ? (tS = wH(bS, tS), XS = gS(xS, XS)) : (tS = wH(tS, bS), XS = gS(XS, xS)),
        function(SS) {
          return XS(tS(SS))
        }
    }

    function ZH(SS, HS, gS) {
      var tS = Math.min(SS.length, HS.length) - 1,
        bS = new Array(tS),
        XS = new Array(tS),
        xS = -1;
      for (SS[tS] < SS[0] && (SS = SS.slice().reverse(), HS = HS.slice().reverse()); ++xS < tS;) bS[xS] = wH(SS[xS], SS[xS + 1]), XS[xS] = gS(HS[xS], HS[xS + 1]);
      return function(HS) {
        var gS = PS(SS, HS, 1, tS) - 1;
        return XS[gS](bS[gS](HS))
      }
    }

    function JH(SS, HS) {
      return HS.domain(SS.domain()).range(SS.range()).interpolate(SS.interpolate()).clamp(SS.clamp()).unknown(SS.unknown())
    }

    function OH() {
      var SS, HS, gS, tS, bS, XS, xS = QH,
        NS = QH,
        qS = CH,
        uS = DH;

      function IS() {
        var SS = Math.min(xS.length, NS.length);
        return uS !== DH && (uS = function(SS, HS) {
          var gS;
          return SS > HS && (gS = SS, SS = HS, HS = gS),
            function(gS) {
              return Math.max(SS, Math.min(HS, gS))
            }
        }(xS[0], xS[SS - 1])), tS = SS > 2 ? ZH : hH, bS = XS = null, fS
      }

      function fS(HS) {
        return null == HS || isNaN(HS = +HS) ? gS : (bS || (bS = tS(xS.map(SS), NS, qS)))(SS(uS(HS)))
      }
      return fS.invert = function(gS) {
          return uS(HS((XS || (XS = tS(NS, xS.map(SS), fH)))(gS)))
        }, fS.domain = function(SS) {
          return arguments.length ? (xS = Array.from(SS, PH), IS()) : xS.slice()
        }, fS.range = function(SS) {
          return arguments.length ? (NS = Array.from(SS), IS()) : NS.slice()
        }, fS.rangeRound = function(SS) {
          return NS = Array.from(SS), qS = nH, IS()
        }, fS.clamp = function(SS) {
          return arguments.length ? (uS = !!SS || DH, IS()) : uS !== DH
        }, fS.interpolate = function(SS) {
          return arguments.length ? (qS = SS, IS()) : qS
        }, fS.unknown = function(SS) {
          return arguments.length ? (gS = SS, fS) : gS
        },
        function(gS, tS) {
          return SS = gS, HS = tS, IS()
        }
    }

    function dH() {
      return OH()(DH, DH)
    }
    var cH, vH = gS(6331),
      EH = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function LH(SS) {
      if (!(HS = EH.exec(SS))) throw new Error("invalid format: " + SS);
      var HS;
      return new YH({
        fill: HS[1],
        align: HS[2],
        sign: HS[3],
        symbol: HS[4],
        zero: HS[5],
        width: HS[6],
        comma: HS[7],
        precision: HS[8] && HS[8].slice(1),
        trim: HS[9],
        type: HS[10]
      })
    }

    function YH(SS) {
      this.fill = void 0 === SS.fill ? " " : SS.fill + "", this.align = void 0 === SS.align ? ">" : SS.align + "", this.sign = void 0 === SS.sign ? "-" : SS.sign + "", this.symbol = void 0 === SS.symbol ? "" : SS.symbol + "", this.zero = !!SS.zero, this.width = void 0 === SS.width ? void 0 : +SS.width, this.comma = !!SS.comma, this.precision = void 0 === SS.precision ? void 0 : +SS.precision, this.trim = !!SS.trim, this.type = void 0 === SS.type ? "" : SS.type + ""
    }

    function AH(SS, HS) {
      if (!isFinite(SS) || 0 === SS) return null;
      var gS = (SS = HS ? SS.toExponential(HS - 1) : SS.toExponential()).indexOf("e"),
        tS = SS.slice(0, gS);
      return [tS.length > 1 ? tS[0] + tS.slice(2) : tS, +SS.slice(gS + 1)]
    }

    function yH(SS) {
      return (SS = AH(Math.abs(SS))) ? SS[1] : NaN
    }

    function VH(SS, HS) {
      var gS = AH(SS, HS);
      if (!gS) return SS + "";
      var tS = gS[0],
        bS = gS[1];
      return bS < 0 ? "0." + new Array(-bS).join("0") + tS : tS.length > bS + 1 ? tS.slice(0, bS + 1) + "." + tS.slice(bS + 1) : tS + new Array(bS - tS.length + 2).join("0")
    }
    LH.prototype = YH.prototype, YH.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const iH = {
      "%": (SS, HS) => (100 * SS).toFixed(HS),
      b: SS => Math.round(SS).toString(2),
      c: SS => SS + "",
      d: function(SS) {
        return Math.abs(SS = Math.round(SS)) >= 1e21 ? SS.toLocaleString("en").replace(/,/g, "") : SS.toString(10)
      },
      e: (SS, HS) => SS.toExponential(HS),
      f: (SS, HS) => SS.toFixed(HS),
      g: (SS, HS) => SS.toPrecision(HS),
      o: SS => Math.round(SS).toString(8),
      p: (SS, HS) => VH(100 * SS, HS),
      r: VH,
      s: function(SS, HS) {
        var gS = AH(SS, HS);
        if (!gS) return cH = void 0, SS.toPrecision(HS);
        var tS = gS[0],
          bS = gS[1],
          XS = bS - (cH = 3 * Math.max(-8, Math.min(8, Math.floor(bS / 3)))) + 1,
          xS = tS.length;
        return XS === xS ? tS : XS > xS ? tS + new Array(XS - xS + 1).join("0") : XS > 0 ? tS.slice(0, XS) + "." + tS.slice(XS) : "0." + new Array(1 - XS).join("0") + AH(SS, Math.max(0, HS + XS - 1))[0]
      },
      X: SS => Math.round(SS).toString(16).toUpperCase(),
      x: SS => Math.round(SS).toString(16)
    };

    function WH(SS) {
      return SS
    }
    var zH, UH, pH, sH = Array.prototype.map,
      BH = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function MH(SS) {
      var HS, gS, tS = void 0 === SS.grouping || void 0 === SS.thousands ? WH : (HS = sH.call(SS.grouping, Number), gS = SS.thousands + "", function(SS, tS) {
          for (var bS = SS.length, XS = [], xS = 0, NS = HS[0], qS = 0; bS > 0 && NS > 0 && (qS + NS + 1 > tS && (NS = Math.max(1, tS - qS)), XS.push(SS.substring(bS -= NS, bS + NS)), !((qS += NS + 1) > tS));) NS = HS[xS = (xS + 1) % HS.length];
          return XS.reverse().join(gS)
        }),
        bS = void 0 === SS.currency ? "" : SS.currency[0] + "",
        XS = void 0 === SS.currency ? "" : SS.currency[1] + "",
        xS = void 0 === SS.decimal ? "." : SS.decimal + "",
        NS = void 0 === SS.numerals ? WH : function(SS) {
          return function(HS) {
            return HS.replace(/[0-9]/g, (function(HS) {
              return SS[+HS]
            }))
          }
        }(sH.call(SS.numerals, String)),
        qS = void 0 === SS.percent ? "%" : SS.percent + "",
        uS = void 0 === SS.minus ? "\u2212" : SS.minus + "",
        IS = void 0 === SS.nan ? "NaN" : SS.nan + "";

      function fS(SS, HS) {
        var gS = (SS = LH(SS)).fill,
          fS = SS.align,
          kS = SS.sign,
          aS = SS.symbol,
          KS = SS.zero,
          jS = SS.width,
          GS = SS.comma,
          CS = SS.precision,
          nS = SS.trim,
          PS = SS.type;
        "n" === PS ? (GS = !0, PS = "g") : iH[PS] || (void 0 === CS && (CS = 12), nS = !0, PS = "g"), (KS || "0" === gS && "=" === fS) && (KS = !0, gS = "0", fS = "=");
        var QS = (HS && void 0 !== HS.prefix ? HS.prefix : "") + ("$" === aS ? bS : "#" === aS && /[boxX]/.test(PS) ? "0" + PS.toLowerCase() : ""),
          DS = ("$" === aS ? XS : /[%p]/.test(PS) ? qS : "") + (HS && void 0 !== HS.suffix ? HS.suffix : ""),
          wS = iH[PS],
          hS = /[defgprs%]/.test(PS);

        function ZS(SS) {
          var HS, bS, XS, qS = QS,
            aS = DS;
          if ("c" === PS) aS = wS(SS) + aS, SS = "";
          else {
            var ZS = (SS = +SS) < 0 || 1 / SS < 0;
            if (SS = isNaN(SS) ? IS : wS(Math.abs(SS), CS), nS && (SS = function(SS) {
                SS: for (var HS, gS = SS.length, tS = 1, bS = -1; tS < gS; ++tS) switch (SS[tS]) {
                  case ".":
                    bS = HS = tS;
                    break;
                  case "0":
                    0 === bS && (bS = tS), HS = tS;
                    break;
                  default:
                    if (!+SS[tS]) break SS;
                    bS > 0 && (bS = 0)
                }
                return bS > 0 ? SS.slice(0, bS) + SS.slice(HS + 1) : SS
              }(SS)), ZS && 0 === +SS && "+" !== kS && (ZS = !1), qS = (ZS ? "(" === kS ? kS : uS : "-" === kS || "(" === kS ? "" : kS) + qS, aS = ("s" !== PS || isNaN(SS) || void 0 === cH ? "" : BH[8 + cH / 3]) + aS + (ZS && "(" === kS ? ")" : ""), hS)
              for (HS = -1, bS = SS.length; ++HS < bS;)
                if (48 > (XS = SS.charCodeAt(HS)) || XS > 57) {
                  aS = (46 === XS ? xS + SS.slice(HS + 1) : SS.slice(HS)) + aS, SS = SS.slice(0, HS);
                  break
                }
          }
          GS && !KS && (SS = tS(SS, 1 / 0));
          var JS = qS.length + SS.length + aS.length,
            OS = JS < jS ? new Array(jS - JS + 1).join(gS) : "";
          switch (GS && KS && (SS = tS(OS + SS, OS.length ? jS - aS.length : 1 / 0), OS = ""), fS) {
            case "<":
              SS = qS + SS + aS + OS;
              break;
            case "=":
              SS = qS + OS + SS + aS;
              break;
            case "^":
              SS = OS.slice(0, JS = OS.length >> 1) + qS + SS + aS + OS.slice(JS);
              break;
            default:
              SS = OS + qS + SS + aS
          }
          return NS(SS)
        }
        return CS = void 0 === CS ? 6 : /[gprs]/.test(PS) ? Math.max(1, Math.min(21, CS)) : Math.max(0, Math.min(20, CS)), ZS.toString = function() {
          return SS + ""
        }, ZS
      }
      return {
        format: fS,
        formatPrefix: function(SS, HS) {
          var gS = 3 * Math.max(-8, Math.min(8, Math.floor(yH(HS) / 3))),
            tS = Math.pow(10, -gS),
            bS = fS(((SS = LH(SS)).type = "f", SS), {
              suffix: BH[8 + gS / 3]
            });
          return function(SS) {
            return bS(tS * SS)
          }
        }
      }
    }

    function FH(SS, HS, gS, tS) {
      var bS, XS = fS(SS, HS, gS);
      switch ((tS = LH(null == tS ? ",f" : tS)).type) {
        case "s":
          var xS = Math.max(Math.abs(SS), Math.abs(HS));
          return null != tS.precision || isNaN(bS = function(SS, HS) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(yH(HS) / 3))) - yH(Math.abs(SS)))
          }(XS, xS)) || (tS.precision = bS), pH(tS, xS);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != tS.precision || isNaN(bS = function(SS, HS) {
            return SS = Math.abs(SS), HS = Math.abs(HS) - SS, Math.max(0, yH(HS) - yH(SS)) + 1
          }(XS, Math.max(Math.abs(SS), Math.abs(HS)))) || (tS.precision = bS - ("e" === tS.type));
          break;
        case "f":
        case "%":
          null != tS.precision || isNaN(bS = function(SS) {
            return Math.max(0, -yH(Math.abs(SS)))
          }(XS)) || (tS.precision = bS - 2 * ("%" === tS.type))
      }
      return UH(tS)
    }

    function RH(SS) {
      var HS = SS.domain;
      return SS.ticks = function(SS) {
        var gS = HS();
        return uS(gS[0], gS[gS.length - 1], null == SS ? 10 : SS)
      }, SS.tickFormat = function(SS, gS) {
        var tS = HS();
        return FH(tS[0], tS[tS.length - 1], null == SS ? 10 : SS, gS)
      }, SS.nice = function(gS) {
        null == gS && (gS = 10);
        var tS, bS, XS = HS(),
          xS = 0,
          NS = XS.length - 1,
          qS = XS[xS],
          uS = XS[NS],
          fS = 10;
        for (uS < qS && (bS = qS, qS = uS, uS = bS, bS = xS, xS = NS, NS = bS); fS-- > 0;) {
          if ((bS = IS(qS, uS, gS)) === tS) return XS[xS] = qS, XS[NS] = uS, HS(XS);
          if (bS > 0) qS = Math.floor(qS / bS) * bS, uS = Math.ceil(uS / bS) * bS;
          else {
            if (!(bS < 0)) break;
            qS = Math.ceil(qS * bS) / bS, uS = Math.floor(uS * bS) / bS
          }
          tS = bS
        }
        return SS
      }, SS
    }

    function TH() {
      var SS = dH();
      return SS.copy = function() {
        return JH(SS, TH())
      }, vH.e.apply(SS, arguments), RH(SS)
    }

    function oH(SS) {
      var HS;

      function gS(SS) {
        return null == SS || isNaN(SS = +SS) ? HS : SS
      }
      return gS.invert = gS, gS.domain = gS.range = function(HS) {
        return arguments.length ? (SS = Array.from(HS, PH), gS) : SS.slice()
      }, gS.unknown = function(SS) {
        return arguments.length ? (HS = SS, gS) : HS
      }, gS.copy = function() {
        return oH(SS).unknown(HS)
      }, SS = arguments.length ? Array.from(SS, PH) : [0, 1], RH(gS)
    }

    function lH(SS, HS) {
      var gS, tS = 0,
        bS = (SS = SS.slice()).length - 1,
        XS = SS[tS],
        xS = SS[bS];
      return xS < XS && (gS = tS, tS = bS, bS = gS, gS = XS, XS = xS, xS = gS), SS[tS] = HS.floor(XS), SS[bS] = HS.ceil(xS), SS
    }

    function mH(SS) {
      return Math.log(SS)
    }

    function eH(SS) {
      return Math.exp(SS)
    }

    function rH(SS) {
      return -Math.log(-SS)
    }

    function Sg(SS) {
      return -Math.exp(-SS)
    }

    function Hg(SS) {
      return isFinite(SS) ? +("1e" + SS) : SS < 0 ? 0 : SS
    }

    function gg(SS) {
      return (HS, gS) => -SS(-HS, gS)
    }

    function tg(SS) {
      const HS = SS(mH, eH),
        gS = HS.domain;
      let tS, bS, XS = 10;

      function xS() {
        return tS = function(SS) {
          return SS === Math.E ? Math.log : 10 === SS && Math.log10 || 2 === SS && Math.log2 || (SS = Math.log(SS), HS => Math.log(HS) / SS)
        }(XS), bS = function(SS) {
          return 10 === SS ? Hg : SS === Math.E ? Math.exp : HS => Math.pow(SS, HS)
        }(XS), gS()[0] < 0 ? (tS = gg(tS), bS = gg(bS), SS(rH, Sg)) : SS(mH, eH), HS
      }
      return HS.base = function(SS) {
        return arguments.length ? (XS = +SS, xS()) : XS
      }, HS.domain = function(SS) {
        return arguments.length ? (gS(SS), xS()) : gS()
      }, HS.ticks = SS => {
        const HS = gS();
        let xS = HS[0],
          NS = HS[HS.length - 1];
        const qS = NS < xS;
        qS && ([xS, NS] = [NS, xS]);
        let IS, fS, kS = tS(xS),
          aS = tS(NS);
        const KS = null == SS ? 10 : +SS;
        let jS = [];
        if (!(XS % 1) && aS - kS < KS) {
          if (kS = Math.floor(kS), aS = Math.ceil(aS), xS > 0) {
            for (; kS <= aS; ++kS)
              for (IS = 1; IS < XS; ++IS)
                if (fS = kS < 0 ? IS / bS(-kS) : IS * bS(kS), !(fS < xS)) {
                  if (fS > NS) break;
                  jS.push(fS)
                }
          } else
            for (; kS <= aS; ++kS)
              for (IS = XS - 1; IS >= 1; --IS)
                if (fS = kS > 0 ? IS / bS(-kS) : IS * bS(kS), !(fS < xS)) {
                  if (fS > NS) break;
                  jS.push(fS)
                } 2 * jS.length < KS && (jS = uS(xS, NS, KS))
        } else jS = uS(kS, aS, Math.min(aS - kS, KS)).map(bS);
        return qS ? jS.reverse() : jS
      }, HS.tickFormat = (SS, gS) => {
        if (null == SS && (SS = 10), null == gS && (gS = 10 === XS ? "s" : ","), "function" !== typeof gS && (XS % 1 || null != (gS = LH(gS)).precision || (gS.trim = !0), gS = UH(gS)), SS === 1 / 0) return gS;
        const xS = Math.max(1, XS * SS / HS.ticks().length);
        return SS => {
          let HS = SS / bS(Math.round(tS(SS)));
          return HS * XS < XS - .5 && (HS *= XS), HS <= xS ? gS(SS) : ""
        }
      }, HS.nice = () => gS(lH(gS(), {
        floor: SS => bS(Math.floor(tS(SS))),
        ceil: SS => bS(Math.ceil(tS(SS)))
      })), HS
    }

    function bg() {
      const SS = tg(OH()).domain([1, 10]);
      return SS.copy = () => JH(SS, bg()).base(SS.base()), vH.e.apply(SS, arguments), SS
    }

    function Xg(SS) {
      return function(HS) {
        return Math.sign(HS) * Math.log1p(Math.abs(HS / SS))
      }
    }

    function xg(SS) {
      return function(HS) {
        return Math.sign(HS) * Math.expm1(Math.abs(HS)) * SS
      }
    }

    function Ng(SS) {
      var HS = 1,
        gS = SS(Xg(HS), xg(HS));
      return gS.constant = function(gS) {
        return arguments.length ? SS(Xg(HS = +gS), xg(HS)) : HS
      }, RH(gS)
    }

    function qg() {
      var SS = Ng(OH());
      return SS.copy = function() {
        return JH(SS, qg()).constant(SS.constant())
      }, vH.e.apply(SS, arguments)
    }
    zH = MH({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), UH = zH.format, pH = zH.formatPrefix;
    var ug = gS(6340);

    function Ig(SS) {
      return function(HS) {
        return HS < 0 ? -Math.pow(-HS, SS) : Math.pow(HS, SS)
      }
    }

    function fg(SS) {
      return SS < 0 ? -Math.sqrt(-SS) : Math.sqrt(SS)
    }

    function kg(SS) {
      return SS < 0 ? -SS * SS : SS * SS
    }

    function ag(SS) {
      var HS = SS(DH, DH),
        gS = 1;
      return HS.exponent = function(HS) {
        return arguments.length ? 1 === (gS = +HS) ? SS(DH, DH) : .5 === gS ? SS(fg, kg) : SS(Ig(gS), Ig(1 / gS)) : gS
      }, RH(HS)
    }

    function Kg() {
      var SS = ag(OH());
      return SS.copy = function() {
        return JH(SS, Kg()).exponent(SS.exponent())
      }, vH.e.apply(SS, arguments), SS
    }

    function jg() {
      return Kg.apply(null, arguments).exponent(.5)
    }

    function Gg(SS) {
      return Math.sign(SS) * SS * SS
    }

    function Cg() {
      var SS, HS = dH(),
        gS = [0, 1],
        tS = !1;

      function bS(gS) {
        var bS = function(SS) {
          return Math.sign(SS) * Math.sqrt(Math.abs(SS))
        }(HS(gS));
        return isNaN(bS) ? SS : tS ? Math.round(bS) : bS
      }
      return bS.invert = function(SS) {
        return HS.invert(Gg(SS))
      }, bS.domain = function(SS) {
        return arguments.length ? (HS.domain(SS), bS) : HS.domain()
      }, bS.range = function(SS) {
        return arguments.length ? (HS.range((gS = Array.from(SS, PH)).map(Gg)), bS) : gS.slice()
      }, bS.rangeRound = function(SS) {
        return bS.range(SS).round(!0)
      }, bS.round = function(SS) {
        return arguments.length ? (tS = !!SS, bS) : tS
      }, bS.clamp = function(SS) {
        return arguments.length ? (HS.clamp(SS), bS) : HS.clamp()
      }, bS.unknown = function(HS) {
        return arguments.length ? (SS = HS, bS) : SS
      }, bS.copy = function() {
        return Cg(HS.domain(), gS).round(tS).clamp(HS.clamp()).unknown(SS)
      }, vH.e.apply(bS, arguments), RH(bS)
    }

    function ng(SS, HS) {
      let gS;
      if (void 0 === HS)
        for (const tS of SS) null != tS && (gS < tS || void 0 === gS && tS >= tS) && (gS = tS);
      else {
        let tS = -1;
        for (let bS of SS) null != (bS = HS(bS, ++tS, SS)) && (gS < bS || void 0 === gS && bS >= bS) && (gS = bS)
      }
      return gS
    }

    function Pg(SS, HS) {
      let gS;
      if (void 0 === HS)
        for (const tS of SS) null != tS && (gS > tS || void 0 === gS && tS >= tS) && (gS = tS);
      else {
        let tS = -1;
        for (let bS of SS) null != (bS = HS(bS, ++tS, SS)) && (gS > bS || void 0 === gS && bS >= bS) && (gS = bS)
      }
      return gS
    }

    function Qg() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kS;
      if (SS === kS) return Dg;
      if ("function" !== typeof SS) throw new TypeError("compare is not a function");
      return (HS, gS) => {
        const tS = SS(HS, gS);
        return tS || 0 === tS ? tS : (0 === SS(gS, gS)) - (0 === SS(HS, HS))
      }
    }

    function Dg(SS, HS) {
      return (null == SS || !(SS >= SS)) - (null == HS || !(HS >= HS)) || (SS < HS ? -1 : SS > HS ? 1 : 0)
    }

    function wg(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        bS = arguments.length > 4 ? arguments[4] : void 0;
      if (HS = Math.floor(HS), gS = Math.floor(Math.max(0, gS)), tS = Math.floor(Math.min(SS.length - 1, tS)), !(gS <= HS && HS <= tS)) return SS;
      for (bS = void 0 === bS ? Dg : Qg(bS); tS > gS;) {
        if (tS - gS > 600) {
          const XS = tS - gS + 1,
            xS = HS - gS + 1,
            NS = Math.log(XS),
            qS = .5 * Math.exp(2 * NS / 3),
            uS = .5 * Math.sqrt(NS * qS * (XS - qS) / XS) * (xS - XS / 2 < 0 ? -1 : 1);
          wg(SS, HS, Math.max(gS, Math.floor(HS - xS * qS / XS + uS)), Math.min(tS, Math.floor(HS + (XS - xS) * qS / XS + uS)), bS)
        }
        const XS = SS[HS];
        let xS = gS,
          NS = tS;
        for (hg(SS, gS, HS), bS(SS[tS], XS) > 0 && hg(SS, gS, tS); xS < NS;) {
          for (hg(SS, xS, NS), ++xS, --NS; bS(SS[xS], XS) < 0;) ++xS;
          for (; bS(SS[NS], XS) > 0;) --NS
        }
        0 === bS(SS[gS], XS) ? hg(SS, gS, NS) : (++NS, hg(SS, NS, tS)), NS <= HS && (gS = NS + 1), HS <= NS && (tS = NS - 1)
      }
      return SS
    }

    function hg(SS, HS, gS) {
      const tS = SS[HS];
      SS[HS] = SS[gS], SS[gS] = tS
    }

    function Zg(SS, HS, gS) {
      if (SS = Float64Array.from(function*(SS, HS) {
          if (void 0 === HS)
            for (let gS of SS) null != gS && (gS = +gS) >= gS && (yield gS);
          else {
            let gS = -1;
            for (let tS of SS) null != (tS = HS(tS, ++gS, SS)) && (tS = +tS) >= tS && (yield tS)
          }
        }(SS, gS)), (tS = SS.length) && !isNaN(HS = +HS)) {
        if (HS <= 0 || tS < 2) return Pg(SS);
        if (HS >= 1) return ng(SS);
        var tS, bS = (tS - 1) * HS,
          XS = Math.floor(bS),
          xS = ng(wg(SS, XS).subarray(0, XS + 1));
        return xS + (Pg(SS.subarray(XS + 1)) - xS) * (bS - XS)
      }
    }

    function Jg(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GS;
      if ((tS = SS.length) && !isNaN(HS = +HS)) {
        if (HS <= 0 || tS < 2) return +gS(SS[0], 0, SS);
        if (HS >= 1) return +gS(SS[tS - 1], tS - 1, SS);
        var tS, bS = (tS - 1) * HS,
          XS = Math.floor(bS),
          xS = +gS(SS[XS], XS, SS);
        return xS + (+gS(SS[XS + 1], XS + 1, SS) - xS) * (bS - XS)
      }
    }

    function Og() {
      var SS, HS = [],
        gS = [],
        tS = [];

      function bS() {
        var SS = 0,
          bS = Math.max(1, gS.length);
        for (tS = new Array(bS - 1); ++SS < bS;) tS[SS - 1] = Jg(HS, SS / bS);
        return XS
      }

      function XS(HS) {
        return null == HS || isNaN(HS = +HS) ? SS : gS[PS(tS, HS)]
      }
      return XS.invertExtent = function(SS) {
        var bS = gS.indexOf(SS);
        return bS < 0 ? [NaN, NaN] : [bS > 0 ? tS[bS - 1] : HS[0], bS < tS.length ? tS[bS] : HS[HS.length - 1]]
      }, XS.domain = function(SS) {
        if (!arguments.length) return HS.slice();
        HS = [];
        for (let gS of SS) null == gS || isNaN(gS = +gS) || HS.push(gS);
        return HS.sort(kS), bS()
      }, XS.range = function(SS) {
        return arguments.length ? (gS = Array.from(SS), bS()) : gS.slice()
      }, XS.unknown = function(HS) {
        return arguments.length ? (SS = HS, XS) : SS
      }, XS.quantiles = function() {
        return tS.slice()
      }, XS.copy = function() {
        return Og().domain(HS).range(gS).unknown(SS)
      }, vH.e.apply(XS, arguments)
    }

    function dg() {
      var SS, HS = 0,
        gS = 1,
        tS = 1,
        bS = [.5],
        XS = [0, 1];

      function xS(HS) {
        return null != HS && HS <= HS ? XS[PS(bS, HS, 0, tS)] : SS
      }

      function NS() {
        var SS = -1;
        for (bS = new Array(tS); ++SS < tS;) bS[SS] = ((SS + 1) * gS - (SS - tS) * HS) / (tS + 1);
        return xS
      }
      return xS.domain = function(SS) {
        return arguments.length ? ([HS, gS] = SS, HS = +HS, gS = +gS, NS()) : [HS, gS]
      }, xS.range = function(SS) {
        return arguments.length ? (tS = (XS = Array.from(SS)).length - 1, NS()) : XS.slice()
      }, xS.invertExtent = function(SS) {
        var xS = XS.indexOf(SS);
        return xS < 0 ? [NaN, NaN] : xS < 1 ? [HS, bS[0]] : xS >= tS ? [bS[tS - 1], gS] : [bS[xS - 1], bS[xS]]
      }, xS.unknown = function(HS) {
        return arguments.length ? (SS = HS, xS) : xS
      }, xS.thresholds = function() {
        return bS.slice()
      }, xS.copy = function() {
        return dg().domain([HS, gS]).range(XS).unknown(SS)
      }, vH.e.apply(RH(xS), arguments)
    }

    function cg() {
      var SS, HS = [.5],
        gS = [0, 1],
        tS = 1;

      function bS(bS) {
        return null != bS && bS <= bS ? gS[PS(HS, bS, 0, tS)] : SS
      }
      return bS.domain = function(SS) {
        return arguments.length ? (HS = Array.from(SS), tS = Math.min(HS.length, gS.length - 1), bS) : HS.slice()
      }, bS.range = function(SS) {
        return arguments.length ? (gS = Array.from(SS), tS = Math.min(HS.length, gS.length - 1), bS) : gS.slice()
      }, bS.invertExtent = function(SS) {
        var tS = gS.indexOf(SS);
        return [HS[tS - 1], HS[tS]]
      }, bS.unknown = function(HS) {
        return arguments.length ? (SS = HS, bS) : SS
      }, bS.copy = function() {
        return cg().domain(HS).range(gS).unknown(SS)
      }, vH.e.apply(bS, arguments)
    }
    const vg = 1e3,
      Eg = 6e4,
      Lg = 36e5,
      Yg = 864e5,
      Ag = 6048e5,
      yg = 2592e6,
      Vg = 31536e6,
      ig = new Date,
      Wg = new Date;

    function zg(SS, HS, gS, tS) {
      function bS(HS) {
        return SS(HS = 0 === arguments.length ? new Date : new Date(+HS)), HS
      }
      return bS.floor = HS => (SS(HS = new Date(+HS)), HS), bS.ceil = gS => (SS(gS = new Date(gS - 1)), HS(gS, 1), SS(gS), gS), bS.round = SS => {
        const HS = bS(SS),
          gS = bS.ceil(SS);
        return SS - HS < gS - SS ? HS : gS
      }, bS.offset = (SS, gS) => (HS(SS = new Date(+SS), null == gS ? 1 : Math.floor(gS)), SS), bS.range = (gS, tS, XS) => {
        const xS = [];
        if (gS = bS.ceil(gS), XS = null == XS ? 1 : Math.floor(XS), !(gS < tS) || !(XS > 0)) return xS;
        let NS;
        do {
          xS.push(NS = new Date(+gS)), HS(gS, XS), SS(gS)
        } while (NS < gS && gS < tS);
        return xS
      }, bS.filter = gS => zg((HS => {
        if (HS >= HS)
          for (; SS(HS), !gS(HS);) HS.setTime(HS - 1)
      }), ((SS, tS) => {
        if (SS >= SS)
          if (tS < 0)
            for (; ++tS <= 0;)
              for (; HS(SS, -1), !gS(SS););
          else
            for (; --tS >= 0;)
              for (; HS(SS, 1), !gS(SS););
      })), gS && (bS.count = (HS, tS) => (ig.setTime(+HS), Wg.setTime(+tS), SS(ig), SS(Wg), Math.floor(gS(ig, Wg))), bS.every = SS => (SS = Math.floor(SS), isFinite(SS) && SS > 0 ? SS > 1 ? bS.filter(tS ? HS => tS(HS) % SS === 0 : HS => bS.count(0, HS) % SS === 0) : bS : null)), bS
    }
    const Ug = zg((() => {}), ((SS, HS) => {
      SS.setTime(+SS + HS)
    }), ((SS, HS) => HS - SS));
    Ug.every = SS => (SS = Math.floor(SS), isFinite(SS) && SS > 0 ? SS > 1 ? zg((HS => {
      HS.setTime(Math.floor(HS / SS) * SS)
    }), ((HS, gS) => {
      HS.setTime(+HS + gS * SS)
    }), ((HS, gS) => (gS - HS) / SS)) : Ug : null);
    Ug.range;
    const pg = zg((SS => {
        SS.setTime(SS - SS.getMilliseconds())
      }), ((SS, HS) => {
        SS.setTime(+SS + HS * vg)
      }), ((SS, HS) => (HS - SS) / vg), (SS => SS.getUTCSeconds())),
      sg = (pg.range, zg((SS => {
        SS.setTime(SS - SS.getMilliseconds() - SS.getSeconds() * vg)
      }), ((SS, HS) => {
        SS.setTime(+SS + HS * Eg)
      }), ((SS, HS) => (HS - SS) / Eg), (SS => SS.getMinutes()))),
      Bg = (sg.range, zg((SS => {
        SS.setUTCSeconds(0, 0)
      }), ((SS, HS) => {
        SS.setTime(+SS + HS * Eg)
      }), ((SS, HS) => (HS - SS) / Eg), (SS => SS.getUTCMinutes()))),
      Mg = (Bg.range, zg((SS => {
        SS.setTime(SS - SS.getMilliseconds() - SS.getSeconds() * vg - SS.getMinutes() * Eg)
      }), ((SS, HS) => {
        SS.setTime(+SS + HS * Lg)
      }), ((SS, HS) => (HS - SS) / Lg), (SS => SS.getHours()))),
      Fg = (Mg.range, zg((SS => {
        SS.setUTCMinutes(0, 0, 0)
      }), ((SS, HS) => {
        SS.setTime(+SS + HS * Lg)
      }), ((SS, HS) => (HS - SS) / Lg), (SS => SS.getUTCHours()))),
      Rg = (Fg.range, zg((SS => SS.setHours(0, 0, 0, 0)), ((SS, HS) => SS.setDate(SS.getDate() + HS)), ((SS, HS) => (HS - SS - (HS.getTimezoneOffset() - SS.getTimezoneOffset()) * Eg) / Yg), (SS => SS.getDate() - 1))),
      Tg = (Rg.range, zg((SS => {
        SS.setUTCHours(0, 0, 0, 0)
      }), ((SS, HS) => {
        SS.setUTCDate(SS.getUTCDate() + HS)
      }), ((SS, HS) => (HS - SS) / Yg), (SS => SS.getUTCDate() - 1))),
      og = (Tg.range, zg((SS => {
        SS.setUTCHours(0, 0, 0, 0)
      }), ((SS, HS) => {
        SS.setUTCDate(SS.getUTCDate() + HS)
      }), ((SS, HS) => (HS - SS) / Yg), (SS => Math.floor(SS / Yg))));
    og.range;

    function lg(SS) {
      return zg((HS => {
        HS.setDate(HS.getDate() - (HS.getDay() + 7 - SS) % 7), HS.setHours(0, 0, 0, 0)
      }), ((SS, HS) => {
        SS.setDate(SS.getDate() + 7 * HS)
      }), ((SS, HS) => (HS - SS - (HS.getTimezoneOffset() - SS.getTimezoneOffset()) * Eg) / Ag))
    }
    const mg = lg(0),
      eg = lg(1),
      rg = lg(2),
      St = lg(3),
      Ht = lg(4),
      gt = lg(5),
      tt = lg(6);
    mg.range, eg.range, rg.range, St.range, Ht.range, gt.range, tt.range;

    function bt(SS) {
      return zg((HS => {
        HS.setUTCDate(HS.getUTCDate() - (HS.getUTCDay() + 7 - SS) % 7), HS.setUTCHours(0, 0, 0, 0)
      }), ((SS, HS) => {
        SS.setUTCDate(SS.getUTCDate() + 7 * HS)
      }), ((SS, HS) => (HS - SS) / Ag))
    }
    const Xt = bt(0),
      xt = bt(1),
      Nt = bt(2),
      qt = bt(3),
      ut = bt(4),
      It = bt(5),
      ft = bt(6),
      kt = (Xt.range, xt.range, Nt.range, qt.range, ut.range, It.range, ft.range, zg((SS => {
        SS.setDate(1), SS.setHours(0, 0, 0, 0)
      }), ((SS, HS) => {
        SS.setMonth(SS.getMonth() + HS)
      }), ((SS, HS) => HS.getMonth() - SS.getMonth() + 12 * (HS.getFullYear() - SS.getFullYear())), (SS => SS.getMonth()))),
      Kt = (kt.range, zg((SS => {
        SS.setUTCDate(1), SS.setUTCHours(0, 0, 0, 0)
      }), ((SS, HS) => {
        SS.setUTCMonth(SS.getUTCMonth() + HS)
      }), ((SS, HS) => HS.getUTCMonth() - SS.getUTCMonth() + 12 * (HS.getUTCFullYear() - SS.getUTCFullYear())), (SS => SS.getUTCMonth()))),
      jt = (Kt.range, zg((SS => {
        SS.setMonth(0, 1), SS.setHours(0, 0, 0, 0)
      }), ((SS, HS) => {
        SS.setFullYear(SS.getFullYear() + HS)
      }), ((SS, HS) => HS.getFullYear() - SS.getFullYear()), (SS => SS.getFullYear())));
    jt.every = SS => isFinite(SS = Math.floor(SS)) && SS > 0 ? zg((HS => {
      HS.setFullYear(Math.floor(HS.getFullYear() / SS) * SS), HS.setMonth(0, 1), HS.setHours(0, 0, 0, 0)
    }), ((HS, gS) => {
      HS.setFullYear(HS.getFullYear() + gS * SS)
    })) : null;
    jt.range;
    const Gt = zg((SS => {
      SS.setUTCMonth(0, 1), SS.setUTCHours(0, 0, 0, 0)
    }), ((SS, HS) => {
      SS.setUTCFullYear(SS.getUTCFullYear() + HS)
    }), ((SS, HS) => HS.getUTCFullYear() - SS.getUTCFullYear()), (SS => SS.getUTCFullYear()));
    Gt.every = SS => isFinite(SS = Math.floor(SS)) && SS > 0 ? zg((HS => {
      HS.setUTCFullYear(Math.floor(HS.getUTCFullYear() / SS) * SS), HS.setUTCMonth(0, 1), HS.setUTCHours(0, 0, 0, 0)
    }), ((HS, gS) => {
      HS.setUTCFullYear(HS.getUTCFullYear() + gS * SS)
    })) : null;
    Gt.range;

    function Ct(SS, HS, gS, tS, bS, XS) {
      const xS = [
        [pg, 1, vg],
        [pg, 5, 5e3],
        [pg, 15, 15e3],
        [pg, 30, 3e4],
        [XS, 1, Eg],
        [XS, 5, 3e5],
        [XS, 15, 9e5],
        [XS, 30, 18e5],
        [bS, 1, Lg],
        [bS, 3, 108e5],
        [bS, 6, 216e5],
        [bS, 12, 432e5],
        [tS, 1, Yg],
        [tS, 2, 1728e5],
        [gS, 1, Ag],
        [HS, 1, yg],
        [HS, 3, 7776e6],
        [SS, 1, Vg]
      ];

      function NS(HS, gS, tS) {
        const bS = Math.abs(gS - HS) / tS,
          XS = KS((SS => {
            let [, , HS] = SS;
            return HS
          })).right(xS, bS);
        if (XS === xS.length) return SS.every(fS(HS / Vg, gS / Vg, tS));
        if (0 === XS) return Ug.every(Math.max(fS(HS, gS, tS), 1));
        const [NS, qS] = xS[bS / xS[XS - 1][2] < xS[XS][2] / bS ? XS - 1 : XS];
        return NS.every(qS)
      }
      return [function(SS, HS, gS) {
        const tS = HS < SS;
        tS && ([SS, HS] = [HS, SS]);
        const bS = gS && "function" === typeof gS.range ? gS : NS(SS, HS, gS),
          XS = bS ? bS.range(SS, +HS + 1) : [];
        return tS ? XS.reverse() : XS
      }, NS]
    }
    const [nt, Pt] = Ct(Gt, Kt, Xt, og, Fg, Bg), [Qt, Dt] = Ct(jt, kt, mg, Rg, Mg, sg);

    function wt(SS) {
      if (0 <= SS.y && SS.y < 100) {
        var HS = new Date(-1, SS.m, SS.d, SS.H, SS.M, SS.S, SS.L);
        return HS.setFullYear(SS.y), HS
      }
      return new Date(SS.y, SS.m, SS.d, SS.H, SS.M, SS.S, SS.L)
    }

    function ht(SS) {
      if (0 <= SS.y && SS.y < 100) {
        var HS = new Date(Date.UTC(-1, SS.m, SS.d, SS.H, SS.M, SS.S, SS.L));
        return HS.setUTCFullYear(SS.y), HS
      }
      return new Date(Date.UTC(SS.y, SS.m, SS.d, SS.H, SS.M, SS.S, SS.L))
    }

    function Zt(SS, HS, gS) {
      return {
        y: SS,
        m: HS,
        d: gS,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var Jt, Ot, dt, ct = {
        "-": "",
        _: " ",
        0: "0"
      },
      vt = /^\s*\d+/,
      Et = /^%/,
      Lt = /[\\^$*+?|[\]().{}]/g;

    function Yt(SS, HS, gS) {
      var tS = SS < 0 ? "-" : "",
        bS = (tS ? -SS : SS) + "",
        XS = bS.length;
      return tS + (XS < gS ? new Array(gS - XS + 1).join(HS) + bS : bS)
    }

    function At(SS) {
      return SS.replace(Lt, "\\$&")
    }

    function yt(SS) {
      return new RegExp("^(?:" + SS.map(At).join("|") + ")", "i")
    }

    function Vt(SS) {
      return new Map(SS.map(((SS, HS) => [SS.toLowerCase(), HS])))
    }

    function it(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 1));
      return tS ? (SS.w = +tS[0], gS + tS[0].length) : -1
    }

    function Wt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 1));
      return tS ? (SS.u = +tS[0], gS + tS[0].length) : -1
    }

    function zt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.U = +tS[0], gS + tS[0].length) : -1
    }

    function Ut(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.V = +tS[0], gS + tS[0].length) : -1
    }

    function pt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.W = +tS[0], gS + tS[0].length) : -1
    }

    function st(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 4));
      return tS ? (SS.y = +tS[0], gS + tS[0].length) : -1
    }

    function Bt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.y = +tS[0] + (+tS[0] > 68 ? 1900 : 2e3), gS + tS[0].length) : -1
    }

    function Mt(SS, HS, gS) {
      var tS = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(HS.slice(gS, gS + 6));
      return tS ? (SS.Z = tS[1] ? 0 : -(tS[2] + (tS[3] || "00")), gS + tS[0].length) : -1
    }

    function Ft(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 1));
      return tS ? (SS.q = 3 * tS[0] - 3, gS + tS[0].length) : -1
    }

    function Rt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.m = tS[0] - 1, gS + tS[0].length) : -1
    }

    function Tt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.d = +tS[0], gS + tS[0].length) : -1
    }

    function ot(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 3));
      return tS ? (SS.m = 0, SS.d = +tS[0], gS + tS[0].length) : -1
    }

    function lt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.H = +tS[0], gS + tS[0].length) : -1
    }

    function mt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.M = +tS[0], gS + tS[0].length) : -1
    }

    function et(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 2));
      return tS ? (SS.S = +tS[0], gS + tS[0].length) : -1
    }

    function rt(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 3));
      return tS ? (SS.L = +tS[0], gS + tS[0].length) : -1
    }

    function Sb(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS, gS + 6));
      return tS ? (SS.L = Math.floor(tS[0] / 1e3), gS + tS[0].length) : -1
    }

    function Hb(SS, HS, gS) {
      var tS = Et.exec(HS.slice(gS, gS + 1));
      return tS ? gS + tS[0].length : -1
    }

    function gb(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS));
      return tS ? (SS.Q = +tS[0], gS + tS[0].length) : -1
    }

    function tb(SS, HS, gS) {
      var tS = vt.exec(HS.slice(gS));
      return tS ? (SS.s = +tS[0], gS + tS[0].length) : -1
    }

    function bb(SS, HS) {
      return Yt(SS.getDate(), HS, 2)
    }

    function Xb(SS, HS) {
      return Yt(SS.getHours(), HS, 2)
    }

    function xb(SS, HS) {
      return Yt(SS.getHours() % 12 || 12, HS, 2)
    }

    function Nb(SS, HS) {
      return Yt(1 + Rg.count(jt(SS), SS), HS, 3)
    }

    function qb(SS, HS) {
      return Yt(SS.getMilliseconds(), HS, 3)
    }

    function ub(SS, HS) {
      return qb(SS, HS) + "000"
    }

    function Ib(SS, HS) {
      return Yt(SS.getMonth() + 1, HS, 2)
    }

    function fb(SS, HS) {
      return Yt(SS.getMinutes(), HS, 2)
    }

    function kb(SS, HS) {
      return Yt(SS.getSeconds(), HS, 2)
    }

    function ab(SS) {
      var HS = SS.getDay();
      return 0 === HS ? 7 : HS
    }

    function Kb(SS, HS) {
      return Yt(mg.count(jt(SS) - 1, SS), HS, 2)
    }

    function jb(SS) {
      var HS = SS.getDay();
      return HS >= 4 || 0 === HS ? Ht(SS) : Ht.ceil(SS)
    }

    function Gb(SS, HS) {
      return SS = jb(SS), Yt(Ht.count(jt(SS), SS) + (4 === jt(SS).getDay()), HS, 2)
    }

    function Cb(SS) {
      return SS.getDay()
    }

    function nb(SS, HS) {
      return Yt(eg.count(jt(SS) - 1, SS), HS, 2)
    }

    function Pb(SS, HS) {
      return Yt(SS.getFullYear() % 100, HS, 2)
    }

    function Qb(SS, HS) {
      return Yt((SS = jb(SS)).getFullYear() % 100, HS, 2)
    }

    function Db(SS, HS) {
      return Yt(SS.getFullYear() % 1e4, HS, 4)
    }

    function wb(SS, HS) {
      var gS = SS.getDay();
      return Yt((SS = gS >= 4 || 0 === gS ? Ht(SS) : Ht.ceil(SS)).getFullYear() % 1e4, HS, 4)
    }

    function hb(SS) {
      var HS = SS.getTimezoneOffset();
      return (HS > 0 ? "-" : (HS *= -1, "+")) + Yt(HS / 60 | 0, "0", 2) + Yt(HS % 60, "0", 2)
    }

    function Zb(SS, HS) {
      return Yt(SS.getUTCDate(), HS, 2)
    }

    function Jb(SS, HS) {
      return Yt(SS.getUTCHours(), HS, 2)
    }

    function Ob(SS, HS) {
      return Yt(SS.getUTCHours() % 12 || 12, HS, 2)
    }

    function db(SS, HS) {
      return Yt(1 + Tg.count(Gt(SS), SS), HS, 3)
    }

    function cb(SS, HS) {
      return Yt(SS.getUTCMilliseconds(), HS, 3)
    }

    function vb(SS, HS) {
      return cb(SS, HS) + "000"
    }

    function Eb(SS, HS) {
      return Yt(SS.getUTCMonth() + 1, HS, 2)
    }

    function Lb(SS, HS) {
      return Yt(SS.getUTCMinutes(), HS, 2)
    }

    function Yb(SS, HS) {
      return Yt(SS.getUTCSeconds(), HS, 2)
    }

    function Ab(SS) {
      var HS = SS.getUTCDay();
      return 0 === HS ? 7 : HS
    }

    function yb(SS, HS) {
      return Yt(Xt.count(Gt(SS) - 1, SS), HS, 2)
    }

    function Vb(SS) {
      var HS = SS.getUTCDay();
      return HS >= 4 || 0 === HS ? ut(SS) : ut.ceil(SS)
    }

    function ib(SS, HS) {
      return SS = Vb(SS), Yt(ut.count(Gt(SS), SS) + (4 === Gt(SS).getUTCDay()), HS, 2)
    }

    function Wb(SS) {
      return SS.getUTCDay()
    }

    function zb(SS, HS) {
      return Yt(xt.count(Gt(SS) - 1, SS), HS, 2)
    }

    function Ub(SS, HS) {
      return Yt(SS.getUTCFullYear() % 100, HS, 2)
    }

    function pb(SS, HS) {
      return Yt((SS = Vb(SS)).getUTCFullYear() % 100, HS, 2)
    }

    function sb(SS, HS) {
      return Yt(SS.getUTCFullYear() % 1e4, HS, 4)
    }

    function Bb(SS, HS) {
      var gS = SS.getUTCDay();
      return Yt((SS = gS >= 4 || 0 === gS ? ut(SS) : ut.ceil(SS)).getUTCFullYear() % 1e4, HS, 4)
    }

    function Mb() {
      return "+0000"
    }

    function Fb() {
      return "%"
    }

    function Rb(SS) {
      return +SS
    }

    function Tb(SS) {
      return Math.floor(+SS / 1e3)
    }

    function ob(SS) {
      return new Date(SS)
    }

    function lb(SS) {
      return SS instanceof Date ? +SS : +new Date(+SS)
    }

    function mb(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
      var IS = dH(),
        fS = IS.invert,
        kS = IS.domain,
        aS = uS(".%L"),
        KS = uS(":%S"),
        jS = uS("%I:%M"),
        GS = uS("%I %p"),
        CS = uS("%a %d"),
        nS = uS("%b %d"),
        PS = uS("%B"),
        QS = uS("%Y");

      function DS(SS) {
        return (qS(SS) < SS ? aS : NS(SS) < SS ? KS : xS(SS) < SS ? jS : XS(SS) < SS ? GS : tS(SS) < SS ? bS(SS) < SS ? CS : nS : gS(SS) < SS ? PS : QS)(SS)
      }
      return IS.invert = function(SS) {
        return new Date(fS(SS))
      }, IS.domain = function(SS) {
        return arguments.length ? kS(Array.from(SS, lb)) : kS().map(ob)
      }, IS.ticks = function(HS) {
        var gS = kS();
        return SS(gS[0], gS[gS.length - 1], null == HS ? 10 : HS)
      }, IS.tickFormat = function(SS, HS) {
        return null == HS ? DS : uS(HS)
      }, IS.nice = function(SS) {
        var gS = kS();
        return SS && "function" === typeof SS.range || (SS = HS(gS[0], gS[gS.length - 1], null == SS ? 10 : SS)), SS ? kS(lH(gS, SS)) : IS
      }, IS.copy = function() {
        return JH(IS, mb(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS))
      }, IS
    }

    function eb() {
      return vH.e.apply(mb(Qt, Dt, jt, kt, mg, Rg, Mg, sg, pg, Ot).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function rb() {
      return vH.e.apply(mb(nt, Pt, Gt, Kt, Xt, Tg, Fg, Bg, pg, dt).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function SX() {
      var SS, HS, gS, tS, bS, XS = 0,
        xS = 1,
        NS = DH,
        qS = !1;

      function uS(HS) {
        return null == HS || isNaN(HS = +HS) ? bS : NS(0 === gS ? .5 : (HS = (tS(HS) - SS) * gS, qS ? Math.max(0, Math.min(1, HS)) : HS))
      }

      function IS(SS) {
        return function(HS) {
          var gS, tS;
          return arguments.length ? ([gS, tS] = HS, NS = SS(gS, tS), uS) : [NS(0), NS(1)]
        }
      }
      return uS.domain = function(bS) {
          return arguments.length ? ([XS, xS] = bS, SS = tS(XS = +XS), HS = tS(xS = +xS), gS = SS === HS ? 0 : 1 / (HS - SS), uS) : [XS, xS]
        }, uS.clamp = function(SS) {
          return arguments.length ? (qS = !!SS, uS) : qS
        }, uS.interpolator = function(SS) {
          return arguments.length ? (NS = SS, uS) : NS
        }, uS.range = IS(CH), uS.rangeRound = IS(nH), uS.unknown = function(SS) {
          return arguments.length ? (bS = SS, uS) : bS
        },
        function(bS) {
          return tS = bS, SS = bS(XS), HS = bS(xS), gS = SS === HS ? 0 : 1 / (HS - SS), uS
        }
    }

    function HX(SS, HS) {
      return HS.domain(SS.domain()).interpolator(SS.interpolator()).clamp(SS.clamp()).unknown(SS.unknown())
    }

    function gX() {
      var SS = RH(SX()(DH));
      return SS.copy = function() {
        return HX(SS, gX())
      }, vH.d.apply(SS, arguments)
    }

    function tX() {
      var SS = tg(SX()).domain([1, 10]);
      return SS.copy = function() {
        return HX(SS, tX()).base(SS.base())
      }, vH.d.apply(SS, arguments)
    }

    function bX() {
      var SS = Ng(SX());
      return SS.copy = function() {
        return HX(SS, bX()).constant(SS.constant())
      }, vH.d.apply(SS, arguments)
    }

    function XX() {
      var SS = ag(SX());
      return SS.copy = function() {
        return HX(SS, XX()).exponent(SS.exponent())
      }, vH.d.apply(SS, arguments)
    }

    function xX() {
      return XX.apply(null, arguments).exponent(.5)
    }

    function NX() {
      var SS = [],
        HS = DH;

      function gS(gS) {
        if (null != gS && !isNaN(gS = +gS)) return HS((PS(SS, gS, 1) - 1) / (SS.length - 1))
      }
      return gS.domain = function(HS) {
        if (!arguments.length) return SS.slice();
        SS = [];
        for (let gS of HS) null == gS || isNaN(gS = +gS) || SS.push(gS);
        return SS.sort(kS), gS
      }, gS.interpolator = function(SS) {
        return arguments.length ? (HS = SS, gS) : HS
      }, gS.range = function() {
        return SS.map(((gS, tS) => HS(tS / (SS.length - 1))))
      }, gS.quantiles = function(HS) {
        return Array.from({
          length: HS + 1
        }, ((gS, tS) => Zg(SS, tS / HS)))
      }, gS.copy = function() {
        return NX(HS).domain(SS)
      }, vH.d.apply(gS, arguments)
    }

    function qX() {
      var SS, HS, gS, tS, bS, XS, xS, NS = 0,
        qS = .5,
        uS = 1,
        IS = 1,
        fS = DH,
        kS = !1;

      function aS(SS) {
        return isNaN(SS = +SS) ? xS : (SS = .5 + ((SS = +XS(SS)) - HS) * (IS * SS < IS * HS ? tS : bS), fS(kS ? Math.max(0, Math.min(1, SS)) : SS))
      }

      function KS(SS) {
        return function(HS) {
          var gS, tS, bS;
          return arguments.length ? ([gS, tS, bS] = HS, fS = function(SS, HS) {
            void 0 === HS && (HS = SS, SS = CH);
            for (var gS = 0, tS = HS.length - 1, bS = HS[0], XS = new Array(tS < 0 ? 0 : tS); gS < tS;) XS[gS] = SS(bS, bS = HS[++gS]);
            return function(SS) {
              var HS = Math.max(0, Math.min(tS - 1, Math.floor(SS *= tS)));
              return XS[HS](SS - HS)
            }
          }(SS, [gS, tS, bS]), aS) : [fS(0), fS(.5), fS(1)]
        }
      }
      return aS.domain = function(xS) {
          return arguments.length ? ([NS, qS, uS] = xS, SS = XS(NS = +NS), HS = XS(qS = +qS), gS = XS(uS = +uS), tS = SS === HS ? 0 : .5 / (HS - SS), bS = HS === gS ? 0 : .5 / (gS - HS), IS = HS < SS ? -1 : 1, aS) : [NS, qS, uS]
        }, aS.clamp = function(SS) {
          return arguments.length ? (kS = !!SS, aS) : kS
        }, aS.interpolator = function(SS) {
          return arguments.length ? (fS = SS, aS) : fS
        }, aS.range = KS(CH), aS.rangeRound = KS(nH), aS.unknown = function(SS) {
          return arguments.length ? (xS = SS, aS) : xS
        },
        function(xS) {
          return XS = xS, SS = xS(NS), HS = xS(qS), gS = xS(uS), tS = SS === HS ? 0 : .5 / (HS - SS), bS = HS === gS ? 0 : .5 / (gS - HS), IS = HS < SS ? -1 : 1, aS
        }
    }

    function uX() {
      var SS = RH(qX()(DH));
      return SS.copy = function() {
        return HX(SS, uX())
      }, vH.d.apply(SS, arguments)
    }

    function IX() {
      var SS = tg(qX()).domain([.1, 1, 10]);
      return SS.copy = function() {
        return HX(SS, IX()).base(SS.base())
      }, vH.d.apply(SS, arguments)
    }

    function fX() {
      var SS = Ng(qX());
      return SS.copy = function() {
        return HX(SS, fX()).constant(SS.constant())
      }, vH.d.apply(SS, arguments)
    }

    function kX() {
      var SS = ag(qX());
      return SS.copy = function() {
        return HX(SS, kX()).exponent(SS.exponent())
      }, vH.d.apply(SS, arguments)
    }

    function aX() {
      return kX.apply(null, arguments).exponent(.5)
    }

    function KX(SS, HS) {
      if ((bS = SS.length) > 1)
        for (var gS, tS, bS, XS = 1, xS = SS[HS[0]], NS = xS.length; XS < bS; ++XS)
          for (tS = xS, xS = SS[HS[XS]], gS = 0; gS < NS; ++gS) xS[gS][1] += xS[gS][0] = isNaN(tS[gS][1]) ? tS[gS][0] : tS[gS][1]
    }! function(SS) {
      Jt = function(SS) {
        var HS = SS.dateTime,
          gS = SS.date,
          tS = SS.time,
          bS = SS.periods,
          XS = SS.days,
          xS = SS.shortDays,
          NS = SS.months,
          qS = SS.shortMonths,
          uS = yt(bS),
          IS = Vt(bS),
          fS = yt(XS),
          kS = Vt(XS),
          aS = yt(xS),
          KS = Vt(xS),
          jS = yt(NS),
          GS = Vt(NS),
          CS = yt(qS),
          nS = Vt(qS),
          PS = {
            a: function(SS) {
              return xS[SS.getDay()]
            },
            A: function(SS) {
              return XS[SS.getDay()]
            },
            b: function(SS) {
              return qS[SS.getMonth()]
            },
            B: function(SS) {
              return NS[SS.getMonth()]
            },
            c: null,
            d: bb,
            e: bb,
            f: ub,
            g: Qb,
            G: wb,
            H: Xb,
            I: xb,
            j: Nb,
            L: qb,
            m: Ib,
            M: fb,
            p: function(SS) {
              return bS[+(SS.getHours() >= 12)]
            },
            q: function(SS) {
              return 1 + ~~(SS.getMonth() / 3)
            },
            Q: Rb,
            s: Tb,
            S: kb,
            u: ab,
            U: Kb,
            V: Gb,
            w: Cb,
            W: nb,
            x: null,
            X: null,
            y: Pb,
            Y: Db,
            Z: hb,
            "%": Fb
          },
          QS = {
            a: function(SS) {
              return xS[SS.getUTCDay()]
            },
            A: function(SS) {
              return XS[SS.getUTCDay()]
            },
            b: function(SS) {
              return qS[SS.getUTCMonth()]
            },
            B: function(SS) {
              return NS[SS.getUTCMonth()]
            },
            c: null,
            d: Zb,
            e: Zb,
            f: vb,
            g: pb,
            G: Bb,
            H: Jb,
            I: Ob,
            j: db,
            L: cb,
            m: Eb,
            M: Lb,
            p: function(SS) {
              return bS[+(SS.getUTCHours() >= 12)]
            },
            q: function(SS) {
              return 1 + ~~(SS.getUTCMonth() / 3)
            },
            Q: Rb,
            s: Tb,
            S: Yb,
            u: Ab,
            U: yb,
            V: ib,
            w: Wb,
            W: zb,
            x: null,
            X: null,
            y: Ub,
            Y: sb,
            Z: Mb,
            "%": Fb
          },
          DS = {
            a: function(SS, HS, gS) {
              var tS = aS.exec(HS.slice(gS));
              return tS ? (SS.w = KS.get(tS[0].toLowerCase()), gS + tS[0].length) : -1
            },
            A: function(SS, HS, gS) {
              var tS = fS.exec(HS.slice(gS));
              return tS ? (SS.w = kS.get(tS[0].toLowerCase()), gS + tS[0].length) : -1
            },
            b: function(SS, HS, gS) {
              var tS = CS.exec(HS.slice(gS));
              return tS ? (SS.m = nS.get(tS[0].toLowerCase()), gS + tS[0].length) : -1
            },
            B: function(SS, HS, gS) {
              var tS = jS.exec(HS.slice(gS));
              return tS ? (SS.m = GS.get(tS[0].toLowerCase()), gS + tS[0].length) : -1
            },
            c: function(SS, gS, tS) {
              return ZS(SS, HS, gS, tS)
            },
            d: Tt,
            e: Tt,
            f: Sb,
            g: Bt,
            G: st,
            H: lt,
            I: lt,
            j: ot,
            L: rt,
            m: Rt,
            M: mt,
            p: function(SS, HS, gS) {
              var tS = uS.exec(HS.slice(gS));
              return tS ? (SS.p = IS.get(tS[0].toLowerCase()), gS + tS[0].length) : -1
            },
            q: Ft,
            Q: gb,
            s: tb,
            S: et,
            u: Wt,
            U: zt,
            V: Ut,
            w: it,
            W: pt,
            x: function(SS, HS, tS) {
              return ZS(SS, gS, HS, tS)
            },
            X: function(SS, HS, gS) {
              return ZS(SS, tS, HS, gS)
            },
            y: Bt,
            Y: st,
            Z: Mt,
            "%": Hb
          };

        function wS(SS, HS) {
          return function(gS) {
            var tS, bS, XS, xS = [],
              NS = -1,
              qS = 0,
              uS = SS.length;
            for (gS instanceof Date || (gS = new Date(+gS)); ++NS < uS;) 37 === SS.charCodeAt(NS) && (xS.push(SS.slice(qS, NS)), null != (bS = ct[tS = SS.charAt(++NS)]) ? tS = SS.charAt(++NS) : bS = "e" === tS ? " " : "0", (XS = HS[tS]) && (tS = XS(gS, bS)), xS.push(tS), qS = NS + 1);
            return xS.push(SS.slice(qS, NS)), xS.join("")
          }
        }

        function hS(SS, HS) {
          return function(gS) {
            var tS, bS, XS = Zt(1900, void 0, 1);
            if (ZS(XS, SS, gS += "", 0) != gS.length) return null;
            if ("Q" in XS) return new Date(XS.Q);
            if ("s" in XS) return new Date(1e3 * XS.s + ("L" in XS ? XS.L : 0));
            if (HS && !("Z" in XS) && (XS.Z = 0), "p" in XS && (XS.H = XS.H % 12 + 12 * XS.p), void 0 === XS.m && (XS.m = "q" in XS ? XS.q : 0), "V" in XS) {
              if (XS.V < 1 || XS.V > 53) return null;
              "w" in XS || (XS.w = 1), "Z" in XS ? (bS = (tS = ht(Zt(XS.y, 0, 1))).getUTCDay(), tS = bS > 4 || 0 === bS ? xt.ceil(tS) : xt(tS), tS = Tg.offset(tS, 7 * (XS.V - 1)), XS.y = tS.getUTCFullYear(), XS.m = tS.getUTCMonth(), XS.d = tS.getUTCDate() + (XS.w + 6) % 7) : (bS = (tS = wt(Zt(XS.y, 0, 1))).getDay(), tS = bS > 4 || 0 === bS ? eg.ceil(tS) : eg(tS), tS = Rg.offset(tS, 7 * (XS.V - 1)), XS.y = tS.getFullYear(), XS.m = tS.getMonth(), XS.d = tS.getDate() + (XS.w + 6) % 7)
            } else("W" in XS || "U" in XS) && ("w" in XS || (XS.w = "u" in XS ? XS.u % 7 : "W" in XS ? 1 : 0), bS = "Z" in XS ? ht(Zt(XS.y, 0, 1)).getUTCDay() : wt(Zt(XS.y, 0, 1)).getDay(), XS.m = 0, XS.d = "W" in XS ? (XS.w + 6) % 7 + 7 * XS.W - (bS + 5) % 7 : XS.w + 7 * XS.U - (bS + 6) % 7);
            return "Z" in XS ? (XS.H += XS.Z / 100 | 0, XS.M += XS.Z % 100, ht(XS)) : wt(XS)
          }
        }

        function ZS(SS, HS, gS, tS) {
          for (var bS, XS, xS = 0, NS = HS.length, qS = gS.length; xS < NS;) {
            if (tS >= qS) return -1;
            if (37 === (bS = HS.charCodeAt(xS++))) {
              if (bS = HS.charAt(xS++), !(XS = DS[bS in ct ? HS.charAt(xS++) : bS]) || (tS = XS(SS, gS, tS)) < 0) return -1
            } else if (bS != gS.charCodeAt(tS++)) return -1
          }
          return tS
        }
        return PS.x = wS(gS, PS), PS.X = wS(tS, PS), PS.c = wS(HS, PS), QS.x = wS(gS, QS), QS.X = wS(tS, QS), QS.c = wS(HS, QS), {
          format: function(SS) {
            var HS = wS(SS += "", PS);
            return HS.toString = function() {
              return SS
            }, HS
          },
          parse: function(SS) {
            var HS = hS(SS += "", !1);
            return HS.toString = function() {
              return SS
            }, HS
          },
          utcFormat: function(SS) {
            var HS = wS(SS += "", QS);
            return HS.toString = function() {
              return SS
            }, HS
          },
          utcParse: function(SS) {
            var HS = hS(SS += "", !0);
            return HS.toString = function() {
              return SS
            }, HS
          }
        }
      }(SS), Ot = Jt.format, Jt.parse, dt = Jt.utcFormat, Jt.utcParse
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
    var jX = gS(6413),
      GX = gS(6279);

    function CX(SS) {
      for (var HS = SS.length, gS = new Array(HS); --HS >= 0;) gS[HS] = HS;
      return gS
    }

    function nX(SS, HS) {
      return SS[HS]
    }

    function PX(SS) {
      const HS = [];
      return HS.key = SS, HS
    }
    var QX = gS(6347),
      DX = gS.n(QX),
      wX = gS(6368),
      hX = gS.n(wX),
      ZX = gS(5639),
      JX = gS.n(ZX),
      OX = gS(5458),
      dX = gS.n(OX),
      cX = gS(5344),
      vX = gS.n(cX),
      EX = gS(5376),
      LX = gS.n(EX),
      YX = gS(6376),
      AX = gS.n(YX),
      yX = gS(5360),
      VX = gS.n(yX),
      iX = gS(6245),
      WX = gS.n(iX),
      zX = gS(6391),
      UX = gS.n(zX),
      pX = gS(5723),
      sX = gS.n(pX),
      BX = gS(6397),
      MX = gS.n(BX);

    function FX(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return RX(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(SS)) return Array.from(SS)
      }(SS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return RX(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return RX(SS, HS)
      }(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RX(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }
    var TX = function(SS) {
        return SS
      },
      oX = {
        "@@functional/placeholder": !0
      },
      lX = function(SS) {
        return SS === oX
      },
      mX = function(SS) {
        return function HS() {
          return 0 === arguments.length || 1 === arguments.length && lX(arguments.length <= 0 ? void 0 : arguments[0]) ? HS : SS.apply(void 0, arguments)
        }
      },
      eX = function SS(HS, gS) {
        return 1 === HS ? gS : mX((function() {
          for (var tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
          var xS = bS.filter((function(SS) {
            return SS !== oX
          })).length;
          return xS >= HS ? gS.apply(void 0, bS) : SS(HS - xS, mX((function() {
            for (var SS = arguments.length, HS = new Array(SS), tS = 0; tS < SS; tS++) HS[tS] = arguments[tS];
            var XS = bS.map((function(SS) {
              return lX(SS) ? HS.shift() : SS
            }));
            return gS.apply(void 0, FX(XS).concat(HS))
          })))
        }))
      },
      rX = function(SS) {
        return eX(SS.length, SS)
      },
      Sx = function(SS, HS) {
        for (var gS = [], tS = SS; tS < HS; ++tS) gS[tS - SS] = tS;
        return gS
      },
      Hx = rX((function(SS, HS) {
        return Array.isArray(HS) ? HS.map(SS) : Object.keys(HS).map((function(SS) {
          return HS[SS]
        })).map(SS)
      })),
      gx = function() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        if (!HS.length) return TX;
        var tS = HS.reverse(),
          bS = tS[0],
          XS = tS.slice(1);
        return function() {
          return XS.reduce((function(SS, HS) {
            return HS(SS)
          }), bS.apply(void 0, arguments))
        }
      },
      tx = function(SS) {
        return Array.isArray(SS) ? SS.reverse() : SS.split("").reverse.join("")
      },
      bx = function(SS) {
        var HS = null,
          gS = null;
        return function() {
          for (var tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
          return HS && bS.every((function(SS, gS) {
            return SS === HS[gS]
          })) ? gS : (HS = bS, gS = SS.apply(void 0, bS))
        }
      };
    const Xx = {
      rangeStep: function(SS, HS, gS) {
        for (var tS = new(MX())(SS), bS = 0, XS = []; tS.lt(HS) && bS < 1e5;) XS.push(tS.toNumber()), tS = tS.add(gS), bS++;
        return XS
      },
      getDigitCount: function(SS) {
        return 0 === SS ? 1 : Math.floor(new(MX())(SS).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: rX((function(SS, HS, gS) {
        var tS = +SS;
        return tS + gS * (+HS - tS)
      })),
      uninterpolateNumber: rX((function(SS, HS, gS) {
        var tS = HS - +SS;
        return (gS - SS) / (tS = tS || 1 / 0)
      })),
      uninterpolateTruncation: rX((function(SS, HS, gS) {
        var tS = HS - +SS;
        return tS = tS || 1 / 0, Math.max(0, Math.min(1, (gS - SS) / tS))
      }))
    };

    function xx(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return ux(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(SS)) return Array.from(SS)
      }(SS) || qx(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nx(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(SS))) return;
        var gS = [],
          tS = !0,
          bS = !1,
          XS = void 0;
        try {
          for (var xS, NS = SS[Symbol.iterator](); !(tS = (xS = NS.next()).done) && (gS.push(xS.value), !HS || gS.length !== HS); tS = !0);
        } catch (qS) {
          bS = !0, XS = qS
        } finally {
          try {
            tS || null == NS.return || NS.return()
          } finally {
            if (bS) throw XS
          }
        }
        return gS
      }(SS, HS) || qx(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qx(SS, HS) {
      if (SS) {
        if ("string" === typeof SS) return ux(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        return "Object" === gS && SS.constructor && (gS = SS.constructor.name), "Map" === gS || "Set" === gS ? Array.from(SS) : "Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS) ? ux(SS, HS) : void 0
      }
    }

    function ux(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function Ix(SS) {
      var HS = Nx(SS, 2),
        gS = HS[0],
        tS = HS[1],
        bS = gS,
        XS = tS;
      return gS > tS && (bS = tS, XS = gS), [bS, XS]
    }

    function fx(SS, HS, gS) {
      if (SS.lte(0)) return new(MX())(0);
      var tS = Xx.getDigitCount(SS.toNumber()),
        bS = new(MX())(10).pow(tS),
        XS = SS.div(bS),
        xS = 1 !== tS ? .05 : .1,
        NS = new(MX())(Math.ceil(XS.div(xS).toNumber())).add(gS).mul(xS).mul(bS);
      return HS ? NS : new(MX())(Math.ceil(NS))
    }

    function kx(SS, HS, gS) {
      var tS = 1,
        bS = new(MX())(SS);
      if (!bS.isint() && gS) {
        var XS = Math.abs(SS);
        XS < 1 ? (tS = new(MX())(10).pow(Xx.getDigitCount(SS) - 1), bS = new(MX())(Math.floor(bS.div(tS).toNumber())).mul(tS)) : XS > 1 && (bS = new(MX())(Math.floor(SS)))
      } else 0 === SS ? bS = new(MX())(Math.floor((HS - 1) / 2)) : gS || (bS = new(MX())(Math.floor(SS)));
      var xS = Math.floor((HS - 1) / 2);
      return gx(Hx((function(SS) {
        return bS.add(new(MX())(SS - xS).mul(tS)).toNumber()
      })), Sx)(0, HS)
    }

    function ax(SS, HS, gS, tS) {
      var bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((HS - SS) / (gS - 1))) return {
        step: new(MX())(0),
        tickMin: new(MX())(0),
        tickMax: new(MX())(0)
      };
      var XS, xS = fx(new(MX())(HS).sub(SS).div(gS - 1), tS, bS);
      XS = SS <= 0 && HS >= 0 ? new(MX())(0) : (XS = new(MX())(SS).add(HS).div(2)).sub(new(MX())(XS).mod(xS));
      var NS = Math.ceil(XS.sub(SS).div(xS).toNumber()),
        qS = Math.ceil(new(MX())(HS).sub(XS).div(xS).toNumber()),
        uS = NS + qS + 1;
      return uS > gS ? ax(SS, HS, gS, tS, bS + 1) : (uS < gS && (qS = HS > 0 ? qS + (gS - uS) : qS, NS = HS > 0 ? NS : NS + (gS - uS)), {
        step: xS,
        tickMin: XS.sub(new(MX())(NS).mul(xS)),
        tickMax: XS.add(new(MX())(qS).mul(xS))
      })
    }
    var Kx = bx((function(SS) {
        var HS = Nx(SS, 2),
          gS = HS[0],
          tS = HS[1],
          bS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          XS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          xS = Math.max(bS, 2),
          NS = Nx(Ix([gS, tS]), 2),
          qS = NS[0],
          uS = NS[1];
        if (qS === -1 / 0 || uS === 1 / 0) {
          var IS = uS === 1 / 0 ? [qS].concat(xx(Sx(0, bS - 1).map((function() {
            return 1 / 0
          })))) : [].concat(xx(Sx(0, bS - 1).map((function() {
            return -1 / 0
          }))), [uS]);
          return gS > tS ? tx(IS) : IS
        }
        if (qS === uS) return kx(qS, bS, XS);
        var fS = ax(qS, uS, xS, XS),
          kS = fS.step,
          aS = fS.tickMin,
          KS = fS.tickMax,
          jS = Xx.rangeStep(aS, KS.add(new(MX())(.1).mul(kS)), kS);
        return gS > tS ? tx(jS) : jS
      })),
      jx = (bx((function(SS) {
        var HS = Nx(SS, 2),
          gS = HS[0],
          tS = HS[1],
          bS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          XS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          xS = Math.max(bS, 2),
          NS = Nx(Ix([gS, tS]), 2),
          qS = NS[0],
          uS = NS[1];
        if (qS === -1 / 0 || uS === 1 / 0) return [gS, tS];
        if (qS === uS) return kx(qS, bS, XS);
        var IS = fx(new(MX())(uS).sub(qS).div(xS - 1), XS, 0),
          fS = gx(Hx((function(SS) {
            return new(MX())(qS).add(new(MX())(SS).mul(IS)).toNumber()
          })), Sx)(0, xS).filter((function(SS) {
            return SS >= qS && SS <= uS
          }));
        return gS > tS ? tx(fS) : fS
      })), bx((function(SS, HS) {
        var gS = Nx(SS, 2),
          tS = gS[0],
          bS = gS[1],
          XS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          xS = Nx(Ix([tS, bS]), 2),
          NS = xS[0],
          qS = xS[1];
        if (NS === -1 / 0 || qS === 1 / 0) return [tS, bS];
        if (NS === qS) return [NS];
        var uS = Math.max(HS, 2),
          IS = fx(new(MX())(qS).sub(NS).div(uS - 1), XS, 0),
          fS = [].concat(xx(Xx.rangeStep(new(MX())(NS), new(MX())(qS).sub(new(MX())(.99).mul(IS)), IS)), [qS]);
        return tS > bS ? tx(fS) : fS
      }))),
      Gx = gS(6404),
      Cx = gS(5340),
      nx = gS(5650),
      Px = gS(6408);

    function Qx(SS) {
      return Qx = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, Qx(SS)
    }

    function Dx(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return wx(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || function(SS, HS) {
        if (!SS) return;
        if ("string" === typeof SS) return wx(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        "Object" === gS && SS.constructor && (gS = SS.constructor.name);
        if ("Map" === gS || "Set" === gS) return Array.from(SS);
        if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return wx(SS, HS)
      }(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wx(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function hx(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function Zx(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? hx(Object(gS), !0).forEach((function(HS) {
          Jx(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : hx(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function Jx(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != Qx(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != Qx(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == Qx(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function Ox(SS, HS, gS) {
      return JX()(SS) || JX()(HS) ? gS : (0, Cx.r)(HS) ? LX()(SS, HS, gS) : dX()(HS) ? HS(SS) : gS
    }

    function dx(SS, HS, gS, tS) {
      var bS = AX()(SS, (function(SS) {
        return Ox(SS, HS)
      }));
      if ("number" === gS) {
        var XS = bS.filter((function(SS) {
          return (0, Cx.t)(SS) || parseFloat(SS)
        }));
        return XS.length ? [hX()(XS), DX()(XS)] : [1 / 0, -1 / 0]
      }
      return (tS ? bS.filter((function(SS) {
        return !JX()(SS)
      })) : bS).map((function(SS) {
        return (0, Cx.r)(SS) || SS instanceof Date ? SS : ""
      }))
    }
    var cx = function(SS) {
        var HS, gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          tS = arguments.length > 2 ? arguments[2] : void 0,
          bS = arguments.length > 3 ? arguments[3] : void 0,
          XS = -1,
          xS = null !== (HS = null === gS || void 0 === gS ? void 0 : gS.length) && void 0 !== HS ? HS : 0;
        if (xS <= 1) return 0;
        if (bS && "angleAxis" === bS.axisType && Math.abs(Math.abs(bS.range[1] - bS.range[0]) - 360) <= 1e-6)
          for (var NS = bS.range, qS = 0; qS < xS; qS++) {
            var uS = qS > 0 ? tS[qS - 1].coordinate : tS[xS - 1].coordinate,
              IS = tS[qS].coordinate,
              fS = qS >= xS - 1 ? tS[0].coordinate : tS[qS + 1].coordinate,
              kS = void 0;
            if ((0, Cx.w)(IS - uS) !== (0, Cx.w)(fS - IS)) {
              var aS = [];
              if ((0, Cx.w)(fS - IS) === (0, Cx.w)(NS[1] - NS[0])) {
                kS = fS;
                var KS = IS + NS[1] - NS[0];
                aS[0] = Math.min(KS, (KS + uS) / 2), aS[1] = Math.max(KS, (KS + uS) / 2)
              } else {
                kS = uS;
                var jS = fS + NS[1] - NS[0];
                aS[0] = Math.min(IS, (jS + IS) / 2), aS[1] = Math.max(IS, (jS + IS) / 2)
              }
              var GS = [Math.min(IS, (kS + IS) / 2), Math.max(IS, (kS + IS) / 2)];
              if (SS > GS[0] && SS <= GS[1] || SS >= aS[0] && SS <= aS[1]) {
                XS = tS[qS].index;
                break
              }
            } else {
              var CS = Math.min(uS, fS),
                nS = Math.max(uS, fS);
              if (SS > (CS + IS) / 2 && SS <= (nS + IS) / 2) {
                XS = tS[qS].index;
                break
              }
            }
          } else
            for (var PS = 0; PS < xS; PS++)
              if (0 === PS && SS <= (gS[PS].coordinate + gS[PS + 1].coordinate) / 2 || PS > 0 && PS < xS - 1 && SS > (gS[PS].coordinate + gS[PS - 1].coordinate) / 2 && SS <= (gS[PS].coordinate + gS[PS + 1].coordinate) / 2 || PS === xS - 1 && SS > (gS[PS].coordinate + gS[PS - 1].coordinate) / 2) {
                XS = gS[PS].index;
                break
              } return XS
      },
      vx = function(SS) {
        var HS, gS, tS = SS.type.displayName,
          bS = null !== (HS = SS.type) && void 0 !== HS && HS.defaultProps ? Zx(Zx({}, SS.type.defaultProps), SS.props) : SS.props,
          XS = bS.stroke,
          xS = bS.fill;
        switch (tS) {
          case "Line":
            gS = XS;
            break;
          case "Area":
          case "Radar":
            gS = XS && "none" !== XS ? XS : xS;
            break;
          default:
            gS = xS
        }
        return gS
      },
      Ex = function(SS) {
        var HS = SS.barSize,
          gS = SS.totalSize,
          tS = SS.stackGroups,
          bS = void 0 === tS ? {} : tS;
        if (!bS) return {};
        for (var XS = {}, xS = Object.keys(bS), NS = 0, qS = xS.length; NS < qS; NS++)
          for (var uS = bS[xS[NS]].stackGroups, IS = Object.keys(uS), fS = 0, kS = IS.length; fS < kS; fS++) {
            var aS = uS[IS[fS]],
              KS = aS.items,
              jS = aS.cateAxisId,
              GS = KS.filter((function(SS) {
                return (0, nx.i)(SS.type).indexOf("Bar") >= 0
              }));
            if (GS && GS.length) {
              var CS = GS[0].type.defaultProps,
                nS = void 0 !== CS ? Zx(Zx({}, CS), GS[0].props) : GS[0].props,
                PS = nS.barSize,
                QS = nS[jS];
              XS[QS] || (XS[QS] = []);
              var DS = JX()(PS) ? HS : PS;
              XS[QS].push({
                item: GS[0],
                stackList: GS.slice(1),
                barSize: JX()(DS) ? void 0 : (0, Cx.m)(DS, gS, 0)
              })
            }
          }
        return XS
      },
      Lx = function(SS) {
        var HS = SS.barGap,
          gS = SS.barCategoryGap,
          tS = SS.bandSize,
          bS = SS.sizeList,
          XS = void 0 === bS ? [] : bS,
          xS = SS.maxBarSize,
          NS = XS.length;
        if (NS < 1) return null;
        var qS, uS = (0, Cx.m)(HS, tS, 0, !0),
          IS = [];
        if (XS[0].barSize === +XS[0].barSize) {
          var fS = !1,
            kS = tS / NS,
            aS = XS.reduce((function(SS, HS) {
              return SS + HS.barSize || 0
            }), 0);
          (aS += (NS - 1) * uS) >= tS && (aS -= (NS - 1) * uS, uS = 0), aS >= tS && kS > 0 && (fS = !0, aS = NS * (kS *= .9));
          var KS = {
            offset: ((tS - aS) / 2 | 0) - uS,
            size: 0
          };
          qS = XS.reduce((function(SS, HS) {
            var gS = {
                item: HS.item,
                position: {
                  offset: KS.offset + KS.size + uS,
                  size: fS ? kS : HS.barSize
                }
              },
              tS = [].concat(Dx(SS), [gS]);
            return KS = tS[tS.length - 1].position, HS.stackList && HS.stackList.length && HS.stackList.forEach((function(SS) {
              tS.push({
                item: SS,
                position: KS
              })
            })), tS
          }), IS)
        } else {
          var jS = (0, Cx.m)(gS, tS, 0, !0);
          tS - 2 * jS - (NS - 1) * uS <= 0 && (uS = 0);
          var GS = (tS - 2 * jS - (NS - 1) * uS) / NS;
          GS > 1 && (GS >>= 0);
          var CS = xS === +xS ? Math.min(GS, xS) : GS;
          qS = XS.reduce((function(SS, HS, gS) {
            var tS = [].concat(Dx(SS), [{
              item: HS.item,
              position: {
                offset: jS + (GS + uS) * gS + (GS - CS) / 2,
                size: CS
              }
            }]);
            return HS.stackList && HS.stackList.length && HS.stackList.forEach((function(SS) {
              tS.push({
                item: SS,
                position: tS[tS.length - 1].position
              })
            })), tS
          }), IS)
        }
        return qS
      },
      Yx = function(SS, HS, gS, tS) {
        var bS = gS.children,
          XS = gS.width,
          xS = gS.margin,
          NS = XS - (xS.left || 0) - (xS.right || 0),
          qS = (0, Px.d)({
            children: bS,
            legendWidth: NS
          });
        if (qS) {
          var uS = tS || {},
            IS = uS.width,
            fS = uS.height,
            kS = qS.align,
            aS = qS.verticalAlign,
            KS = qS.layout;
          if (("vertical" === KS || "horizontal" === KS && "middle" === aS) && "center" !== kS && (0, Cx.t)(SS[kS])) return Zx(Zx({}, SS), {}, Jx({}, kS, SS[kS] + (IS || 0)));
          if (("horizontal" === KS || "vertical" === KS && "center" === kS) && "middle" !== aS && (0, Cx.t)(SS[aS])) return Zx(Zx({}, SS), {}, Jx({}, aS, SS[aS] + (fS || 0)))
        }
        return SS
      },
      Ax = function(SS, HS, gS, tS, bS) {
        var XS = HS.props.children,
          xS = (0, nx.e)(XS, Gx.d).filter((function(SS) {
            return function(SS, HS, gS) {
              return !!JX()(HS) || ("horizontal" === SS ? "yAxis" === HS : "vertical" === SS || "x" === gS ? "xAxis" === HS : "y" !== gS || "yAxis" === HS)
            }(tS, bS, SS.props.direction)
          }));
        if (xS && xS.length) {
          var NS = xS.map((function(SS) {
            return SS.props.dataKey
          }));
          return SS.reduce((function(SS, HS) {
            var tS = Ox(HS, gS);
            if (JX()(tS)) return SS;
            var bS = Array.isArray(tS) ? [hX()(tS), DX()(tS)] : [tS, tS],
              XS = NS.reduce((function(SS, gS) {
                var tS = Ox(HS, gS, 0),
                  XS = bS[0] - Math.abs(Array.isArray(tS) ? tS[0] : tS),
                  xS = bS[1] + Math.abs(Array.isArray(tS) ? tS[1] : tS);
                return [Math.min(XS, SS[0]), Math.max(xS, SS[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(XS[0], SS[0]), Math.max(XS[1], SS[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      yx = function(SS, HS, gS, tS, bS) {
        var XS = HS.map((function(HS) {
          return Ax(SS, HS, gS, bS, tS)
        })).filter((function(SS) {
          return !JX()(SS)
        }));
        return XS && XS.length ? XS.reduce((function(SS, HS) {
          return [Math.min(SS[0], HS[0]), Math.max(SS[1], HS[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      Vx = function(SS, HS, gS, tS, bS) {
        var XS = HS.map((function(HS) {
          var XS = HS.props.dataKey;
          return "number" === gS && XS && Ax(SS, HS, XS, tS) || dx(SS, XS, gS, bS)
        }));
        if ("number" === gS) return XS.reduce((function(SS, HS) {
          return [Math.min(SS[0], HS[0]), Math.max(SS[1], HS[1])]
        }), [1 / 0, -1 / 0]);
        var xS = {};
        return XS.reduce((function(SS, HS) {
          for (var gS = 0, tS = HS.length; gS < tS; gS++) xS[HS[gS]] || (xS[HS[gS]] = !0, SS.push(HS[gS]));
          return SS
        }), [])
      },
      ix = function(SS, HS) {
        return "horizontal" === SS && "xAxis" === HS || "vertical" === SS && "yAxis" === HS || "centric" === SS && "angleAxis" === HS || "radial" === SS && "radiusAxis" === HS
      },
      Wx = function(SS, HS, gS, tS) {
        if (tS) return SS.map((function(SS) {
          return SS.coordinate
        }));
        var bS, XS, xS = SS.map((function(SS) {
          return SS.coordinate === HS && (bS = !0), SS.coordinate === gS && (XS = !0), SS.coordinate
        }));
        return bS || xS.push(HS), XS || xS.push(gS), xS
      },
      zx = function(SS, HS, gS) {
        if (!SS) return null;
        var tS = SS.scale,
          bS = SS.duplicateDomain,
          XS = SS.type,
          xS = SS.range,
          NS = "scaleBand" === SS.realScaleType ? tS.bandwidth() / 2 : 2,
          qS = (HS || gS) && "category" === XS && tS.bandwidth ? tS.bandwidth() / NS : 0;
        return qS = "angleAxis" === SS.axisType && (null === xS || void 0 === xS ? void 0 : xS.length) >= 2 ? 2 * (0, Cx.w)(xS[0] - xS[1]) * qS : qS, HS && (SS.ticks || SS.niceTicks) ? (SS.ticks || SS.niceTicks).map((function(SS) {
          var HS = bS ? bS.indexOf(SS) : SS;
          return {
            coordinate: tS(HS) + qS,
            value: SS,
            offset: qS
          }
        })).filter((function(SS) {
          return !VX()(SS.coordinate)
        })) : SS.isCategorical && SS.categoricalDomain ? SS.categoricalDomain.map((function(SS, HS) {
          return {
            coordinate: tS(SS) + qS,
            value: SS,
            index: HS,
            offset: qS
          }
        })) : tS.ticks && !gS ? tS.ticks(SS.tickCount).map((function(SS) {
          return {
            coordinate: tS(SS) + qS,
            value: SS,
            offset: qS
          }
        })) : tS.domain().map((function(SS, HS) {
          return {
            coordinate: tS(SS) + qS,
            value: bS ? bS[SS] : SS,
            index: HS,
            offset: qS
          }
        }))
      },
      Ux = new WeakMap,
      px = function(SS, HS) {
        if ("function" !== typeof HS) return SS;
        Ux.has(SS) || Ux.set(SS, new WeakMap);
        var gS = Ux.get(SS);
        if (gS.has(HS)) return gS.get(HS);
        var tS = function() {
          SS.apply(void 0, arguments), HS.apply(void 0, arguments)
        };
        return gS.set(HS, tS), tS
      },
      sx = function(SS, HS, gS) {
        var XS = SS.scale,
          xS = SS.type,
          NS = SS.layout,
          qS = SS.axisType;
        if ("auto" === XS) return "radial" === NS && "radiusAxis" === qS ? {
          scale: bS.c(),
          realScaleType: "band"
        } : "radial" === NS && "angleAxis" === qS ? {
          scale: TH(),
          realScaleType: "linear"
        } : "category" === xS && HS && (HS.indexOf("LineChart") >= 0 || HS.indexOf("AreaChart") >= 0 || HS.indexOf("ComposedChart") >= 0 && !gS) ? {
          scale: bS.f(),
          realScaleType: "point"
        } : "category" === xS ? {
          scale: bS.c(),
          realScaleType: "band"
        } : {
          scale: TH(),
          realScaleType: "linear"
        };
        if (vX()(XS)) {
          var uS = "scale".concat(WX()(XS));
          return {
            scale: (tS[uS] || bS.f)(),
            realScaleType: tS[uS] ? uS : "point"
          }
        }
        return dX()(XS) ? {
          scale: XS
        } : {
          scale: bS.f(),
          realScaleType: "point"
        }
      },
      Bx = 1e-4,
      Mx = function(SS) {
        var HS = SS.domain();
        if (HS && !(HS.length <= 2)) {
          var gS = HS.length,
            tS = SS.range(),
            bS = Math.min(tS[0], tS[1]) - Bx,
            XS = Math.max(tS[0], tS[1]) + Bx,
            xS = SS(HS[0]),
            NS = SS(HS[gS - 1]);
          (xS < bS || xS > XS || NS < bS || NS > XS) && SS.domain([HS[0], HS[gS - 1]])
        }
      },
      Fx = function(SS, HS) {
        if (!SS) return null;
        for (var gS = 0, tS = SS.length; gS < tS; gS++)
          if (SS[gS].item === HS) return SS[gS].position;
        return null
      },
      Rx = function(SS, HS) {
        if (!HS || 2 !== HS.length || !(0, Cx.t)(HS[0]) || !(0, Cx.t)(HS[1])) return SS;
        var gS = Math.min(HS[0], HS[1]),
          tS = Math.max(HS[0], HS[1]),
          bS = [SS[0], SS[1]];
        return (!(0, Cx.t)(SS[0]) || SS[0] < gS) && (bS[0] = gS), (!(0, Cx.t)(SS[1]) || SS[1] > tS) && (bS[1] = tS), bS[0] > tS && (bS[0] = tS), bS[1] < gS && (bS[1] = gS), bS
      },
      Tx = {
        sign: function(SS) {
          var HS = SS.length;
          if (!(HS <= 0))
            for (var gS = 0, tS = SS[0].length; gS < tS; ++gS)
              for (var bS = 0, XS = 0, xS = 0; xS < HS; ++xS) {
                var NS = VX()(SS[xS][gS][1]) ? SS[xS][gS][0] : SS[xS][gS][1];
                NS >= 0 ? (SS[xS][gS][0] = bS, SS[xS][gS][1] = bS + NS, bS = SS[xS][gS][1]) : (SS[xS][gS][0] = XS, SS[xS][gS][1] = XS + NS, XS = SS[xS][gS][1])
              }
        },
        expand: function(SS, HS) {
          if ((tS = SS.length) > 0) {
            for (var gS, tS, bS, XS = 0, xS = SS[0].length; XS < xS; ++XS) {
              for (bS = gS = 0; gS < tS; ++gS) bS += SS[gS][XS][1] || 0;
              if (bS)
                for (gS = 0; gS < tS; ++gS) SS[gS][XS][1] /= bS
            }
            KX(SS, HS)
          }
        },
        none: KX,
        silhouette: function(SS, HS) {
          if ((gS = SS.length) > 0) {
            for (var gS, tS = 0, bS = SS[HS[0]], XS = bS.length; tS < XS; ++tS) {
              for (var xS = 0, NS = 0; xS < gS; ++xS) NS += SS[xS][tS][1] || 0;
              bS[tS][1] += bS[tS][0] = -NS / 2
            }
            KX(SS, HS)
          }
        },
        wiggle: function(SS, HS) {
          if ((bS = SS.length) > 0 && (tS = (gS = SS[HS[0]]).length) > 0) {
            for (var gS, tS, bS, XS = 0, xS = 1; xS < tS; ++xS) {
              for (var NS = 0, qS = 0, uS = 0; NS < bS; ++NS) {
                for (var IS = SS[HS[NS]], fS = IS[xS][1] || 0, kS = (fS - (IS[xS - 1][1] || 0)) / 2, aS = 0; aS < NS; ++aS) {
                  var KS = SS[HS[aS]];
                  kS += (KS[xS][1] || 0) - (KS[xS - 1][1] || 0)
                }
                qS += fS, uS += kS * fS
              }
              gS[xS - 1][1] += gS[xS - 1][0] = XS, qS && (XS -= uS / qS)
            }
            gS[xS - 1][1] += gS[xS - 1][0] = XS, KX(SS, HS)
          }
        },
        positive: function(SS) {
          var HS = SS.length;
          if (!(HS <= 0))
            for (var gS = 0, tS = SS[0].length; gS < tS; ++gS)
              for (var bS = 0, XS = 0; XS < HS; ++XS) {
                var xS = VX()(SS[XS][gS][1]) ? SS[XS][gS][0] : SS[XS][gS][1];
                xS >= 0 ? (SS[XS][gS][0] = bS, SS[XS][gS][1] = bS + xS, bS = SS[XS][gS][1]) : (SS[XS][gS][0] = 0, SS[XS][gS][1] = 0)
              }
        }
      },
      ox = function(SS, HS, gS) {
        var tS = HS.map((function(SS) {
            return SS.props.dataKey
          })),
          bS = Tx[gS],
          XS = function() {
            var SS = (0, GX.e)([]),
              HS = CX,
              gS = KX,
              tS = nX;

            function bS(bS) {
              var XS, xS, NS = Array.from(SS.apply(this, arguments), PX),
                qS = NS.length,
                uS = -1;
              for (const SS of bS)
                for (XS = 0, ++uS; XS < qS; ++XS)(NS[XS][uS] = [0, +tS(SS, NS[XS].key, uS, bS)]).data = SS;
              for (XS = 0, xS = (0, jX.c)(HS(NS)); XS < qS; ++XS) NS[xS[XS]].index = XS;
              return gS(NS, xS), NS
            }
            return bS.keys = function(HS) {
              return arguments.length ? (SS = "function" === typeof HS ? HS : (0, GX.e)(Array.from(HS)), bS) : SS
            }, bS.value = function(SS) {
              return arguments.length ? (tS = "function" === typeof SS ? SS : (0, GX.e)(+SS), bS) : tS
            }, bS.order = function(SS) {
              return arguments.length ? (HS = null == SS ? CX : "function" === typeof SS ? SS : (0, GX.e)(Array.from(SS)), bS) : HS
            }, bS.offset = function(SS) {
              return arguments.length ? (gS = null == SS ? KX : SS, bS) : gS
            }, bS
          }().keys(tS).value((function(SS, HS) {
            return +Ox(SS, HS, 0)
          })).order(CX).offset(bS);
        return XS(SS)
      },
      lx = function(SS, HS, gS, tS, bS, XS) {
        if (!SS) return null;
        var xS = (XS ? HS.reverse() : HS).reduce((function(SS, HS) {
          var bS, XS = null !== (bS = HS.type) && void 0 !== bS && bS.defaultProps ? Zx(Zx({}, HS.type.defaultProps), HS.props) : HS.props,
            xS = XS.stackId;
          if (XS.hide) return SS;
          var NS = XS[gS],
            qS = SS[NS] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, Cx.r)(xS)) {
            var uS = qS.stackGroups[xS] || {
              numericAxisId: gS,
              cateAxisId: tS,
              items: []
            };
            uS.items.push(HS), qS.hasStack = !0, qS.stackGroups[xS] = uS
          } else qS.stackGroups[(0, Cx.y)("_stackId_")] = {
            numericAxisId: gS,
            cateAxisId: tS,
            items: [HS]
          };
          return Zx(Zx({}, SS), {}, Jx({}, NS, qS))
        }), {});
        return Object.keys(xS).reduce((function(HS, XS) {
          var NS = xS[XS];
          if (NS.hasStack) {
            NS.stackGroups = Object.keys(NS.stackGroups).reduce((function(HS, XS) {
              var xS = NS.stackGroups[XS];
              return Zx(Zx({}, HS), {}, Jx({}, XS, {
                numericAxisId: gS,
                cateAxisId: tS,
                items: xS.items,
                stackedData: ox(SS, xS.items, bS)
              }))
            }), {})
          }
          return Zx(Zx({}, HS), {}, Jx({}, XS, NS))
        }), {})
      },
      mx = function(SS, HS) {
        var gS = HS.realScaleType,
          tS = HS.type,
          bS = HS.tickCount,
          XS = HS.originalDomain,
          xS = HS.allowDecimals,
          NS = gS || HS.scale;
        if ("auto" !== NS && "linear" !== NS) return null;
        if (bS && "number" === tS && XS && ("auto" === XS[0] || "auto" === XS[1])) {
          var qS = SS.domain();
          if (!qS.length) return null;
          var uS = Kx(qS, bS, xS);
          return SS.domain([hX()(uS), DX()(uS)]), {
            niceTicks: uS
          }
        }
        if (bS && "number" === tS) {
          var IS = SS.domain();
          return {
            niceTicks: jx(IS, bS, xS)
          }
        }
        return null
      };

    function ex(SS) {
      var HS = SS.axis,
        gS = SS.ticks,
        tS = SS.bandSize,
        bS = SS.entry,
        XS = SS.index,
        xS = SS.dataKey;
      if ("category" === HS.type) {
        if (!HS.allowDuplicatedCategory && HS.dataKey && !JX()(bS[HS.dataKey])) {
          var NS = (0, Cx.g)(gS, "value", bS[HS.dataKey]);
          if (NS) return NS.coordinate + tS / 2
        }
        return gS[XS] ? gS[XS].coordinate + tS / 2 : null
      }
      var qS = Ox(bS, JX()(xS) ? HS.dataKey : xS);
      return JX()(qS) ? null : HS.scale(qS)
    }
    var rx = function(SS) {
        var HS = SS.axis,
          gS = SS.ticks,
          tS = SS.offset,
          bS = SS.bandSize,
          XS = SS.entry,
          xS = SS.index;
        if ("category" === HS.type) return gS[xS] ? gS[xS].coordinate + tS : null;
        var NS = Ox(XS, HS.dataKey, HS.domain[xS]);
        return JX()(NS) ? null : HS.scale(NS) - bS / 2 + tS
      },
      SN = function(SS) {
        var HS = SS.numericAxis,
          gS = HS.scale.domain();
        if ("number" === HS.type) {
          var tS = Math.min(gS[0], gS[1]),
            bS = Math.max(gS[0], gS[1]);
          return tS <= 0 && bS >= 0 ? 0 : bS < 0 ? bS : tS
        }
        return gS[0]
      },
      HN = function(SS, HS) {
        var gS, tS = (null !== (gS = SS.type) && void 0 !== gS && gS.defaultProps ? Zx(Zx({}, SS.type.defaultProps), SS.props) : SS.props).stackId;
        if ((0, Cx.r)(tS)) {
          var bS = HS[tS];
          if (bS) {
            var XS = bS.items.indexOf(SS);
            return XS >= 0 ? bS.stackedData[XS] : null
          }
        }
        return null
      },
      gN = function(SS, HS, gS) {
        return Object.keys(SS).reduce((function(tS, bS) {
          var XS = SS[bS].stackedData.reduce((function(SS, tS) {
            var bS = tS.slice(HS, gS + 1).reduce((function(SS, HS) {
              return [hX()(HS.concat([SS[0]]).filter(Cx.t)), DX()(HS.concat([SS[1]]).filter(Cx.t))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(SS[0], bS[0]), Math.max(SS[1], bS[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(XS[0], tS[0]), Math.max(XS[1], tS[1])]
        }), [1 / 0, -1 / 0]).map((function(SS) {
          return SS === 1 / 0 || SS === -1 / 0 ? 0 : SS
        }))
      },
      tN = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      bN = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      XN = function(SS, HS, gS) {
        if (dX()(SS)) return SS(HS, gS);
        if (!Array.isArray(SS)) return HS;
        var tS = [];
        if ((0, Cx.t)(SS[0])) tS[0] = gS ? SS[0] : Math.min(SS[0], HS[0]);
        else if (tN.test(SS[0])) {
          var bS = +tN.exec(SS[0])[1];
          tS[0] = HS[0] - bS
        } else dX()(SS[0]) ? tS[0] = SS[0](HS[0]) : tS[0] = HS[0];
        if ((0, Cx.t)(SS[1])) tS[1] = gS ? SS[1] : Math.max(SS[1], HS[1]);
        else if (bN.test(SS[1])) {
          var XS = +bN.exec(SS[1])[1];
          tS[1] = HS[1] + XS
        } else dX()(SS[1]) ? tS[1] = SS[1](HS[1]) : tS[1] = HS[1];
        return tS
      },
      xN = function(SS, HS, gS) {
        if (SS && SS.scale && SS.scale.bandwidth) {
          var tS = SS.scale.bandwidth();
          if (!gS || tS > 0) return tS
        }
        if (SS && HS && HS.length >= 2) {
          for (var bS = sX()(HS, (function(SS) {
              return SS.coordinate
            })), XS = 1 / 0, xS = 1, NS = bS.length; xS < NS; xS++) {
            var qS = bS[xS],
              uS = bS[xS - 1];
            XS = Math.min((qS.coordinate || 0) - (uS.coordinate || 0), XS)
          }
          return XS === 1 / 0 ? 0 : XS
        }
        return gS ? void 0 : 0
      },
      NN = function(SS, HS, gS) {
        return SS && SS.length ? UX()(SS, LX()(gS, "type.defaultProps.domain")) ? HS : SS : HS
      },
      qN = function(SS, HS) {
        var gS = SS.type.defaultProps ? Zx(Zx({}, SS.type.defaultProps), SS.props) : SS.props,
          tS = gS.dataKey,
          bS = gS.name,
          XS = gS.unit,
          xS = gS.formatter,
          NS = gS.tooltipType,
          qS = gS.chartType,
          uS = gS.hide;
        return Zx(Zx({}, (0, nx.b)(SS, !1)), {}, {
          dataKey: tS,
          unit: XS,
          formatter: xS,
          name: bS || tS,
          color: vx(SS),
          value: Ox(HS, tS),
          type: NS,
          payload: HS,
          chartType: qS,
          hide: uS
        })
      }
  },
  6307: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS,
      h: () => fS
    });
    var tS = gS(6161);

    function bS(SS) {
      return bS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, bS(SS)
    }

    function XS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function xS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? XS(Object(gS), !0).forEach((function(HS) {
          NS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : XS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function NS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != bS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != bS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == bS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var qS = {
        widthCache: {},
        cacheCount: 0
      },
      uS = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      IS = "recharts_measurement_span";
    var fS = function(SS) {
        var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === SS || null === SS || tS.b.isSsr) return {
          width: 0,
          height: 0
        };
        var gS = function(SS) {
            var HS = xS({}, SS);
            return Object.keys(HS).forEach((function(SS) {
              HS[SS] || delete HS[SS]
            })), HS
          }(HS),
          bS = JSON.stringify({
            text: SS,
            copyStyle: gS
          });
        if (qS.widthCache[bS]) return qS.widthCache[bS];
        try {
          var XS = document.getElementById(IS);
          XS || ((XS = document.createElement("span")).setAttribute("id", IS), XS.setAttribute("aria-hidden", "true"), document.body.appendChild(XS));
          var NS = xS(xS({}, uS), gS);
          Object.assign(XS.style, NS), XS.textContent = "".concat(SS);
          var fS = XS.getBoundingClientRect(),
            kS = {
              width: fS.width,
              height: fS.height
            };
          return qS.widthCache[bS] = kS, ++qS.cacheCount > 2e3 && (qS.cacheCount = 0, qS.widthCache = {}), kS
        } catch (aS) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      kS = function(SS) {
        return {
          top: SS.top + window.scrollY - document.documentElement.clientTop,
          left: SS.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5340: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => OS,
      g: () => ZS,
      h: () => DS,
      k: () => JS,
      m: () => QS,
      n: () => wS,
      p: () => hS,
      q: () => GS,
      r: () => CS,
      t: () => jS,
      u: () => KS,
      w: () => aS,
      y: () => PS
    });
    var tS = gS(5344),
      bS = gS.n(tS),
      XS = gS(5360),
      xS = gS.n(XS),
      NS = gS(5376),
      qS = gS.n(NS),
      uS = gS(5369),
      IS = gS.n(uS),
      fS = gS(5639),
      kS = gS.n(fS),
      aS = function(SS) {
        return 0 === SS ? 0 : SS > 0 ? 1 : -1
      },
      KS = function(SS) {
        return bS()(SS) && SS.indexOf("%") === SS.length - 1
      },
      jS = function(SS) {
        return IS()(SS) && !xS()(SS)
      },
      GS = function(SS) {
        return kS()(SS)
      },
      CS = function(SS) {
        return jS(SS) || bS()(SS)
      },
      nS = 0,
      PS = function(SS) {
        var HS = ++nS;
        return "".concat(SS || "").concat(HS)
      },
      QS = function(SS, HS) {
        var gS, tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          XS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!jS(SS) && !bS()(SS)) return tS;
        if (KS(SS)) {
          var NS = SS.indexOf("%");
          gS = HS * parseFloat(SS.slice(0, NS)) / 100
        } else gS = +SS;
        return xS()(gS) && (gS = tS), XS && gS > HS && (gS = HS), gS
      },
      DS = function(SS) {
        if (!SS) return null;
        var HS = Object.keys(SS);
        return HS && HS.length ? SS[HS[0]] : null
      },
      wS = function(SS) {
        if (!Array.isArray(SS)) return !1;
        for (var HS = SS.length, gS = {}, tS = 0; tS < HS; tS++) {
          if (gS[SS[tS]]) return !0;
          gS[SS[tS]] = !0
        }
        return !1
      },
      hS = function(SS, HS) {
        return jS(SS) && jS(HS) ? function(gS) {
          return SS + gS * (HS - SS)
        } : function() {
          return HS
        }
      };

    function ZS(SS, HS, gS) {
      return SS && SS.length ? SS.find((function(SS) {
        return SS && ("function" === typeof HS ? HS(SS) : qS()(SS, HS)) === gS
      })) : null
    }
    var JS = function(SS) {
        if (!SS || !SS.length) return null;
        for (var HS = SS.length, gS = 0, tS = 0, bS = 0, XS = 0, xS = 1 / 0, NS = -1 / 0, qS = 0, uS = 0, IS = 0; IS < HS; IS++) gS += qS = SS[IS].cx || 0, tS += uS = SS[IS].cy || 0, bS += qS * uS, XS += qS * qS, xS = Math.min(xS, qS), NS = Math.max(NS, qS);
        var fS = HS * XS !== gS * gS ? (HS * bS - gS * tS) / (HS * XS - gS * gS) : 0;
        return {
          xmin: xS,
          xmax: NS,
          a: fS,
          b: (tS - fS * gS) / HS
        }
      },
      OS = function(SS, HS) {
        return jS(SS) && jS(HS) ? SS - HS : bS()(SS) && bS()(HS) ? SS.localeCompare(HS) : SS instanceof Date && HS instanceof Date ? SS.getTime() - HS.getTime() : String(SS).localeCompare(String(HS))
      }
  },
  6161: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    var tS = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(SS) {
        return tS[SS]
      },
      set: function(SS, HS) {
        if ("string" === typeof SS) tS[SS] = HS;
        else {
          var gS = Object.keys(SS);
          gS && gS.length && gS.forEach((function(HS) {
            tS[HS] = SS[HS]
          }))
        }
      }
    }
  },
  6430: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    var tS = function(SS, HS) {
      var gS = SS.alwaysShow,
        tS = SS.ifOverflow;
      return gS && (tS = "extendDomain"), tS === HS
    }
  },
  5642: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    var tS = function(SS, HS) {
      for (var gS = arguments.length, tS = new Array(gS > 2 ? gS - 2 : 0), bS = 2; bS < gS; bS++) tS[bS - 2] = arguments[bS]
    }
  },
  6421: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      h: () => kS,
      i: () => uS
    });
    gS(5639), gS(64), gS(5458);

    function tS(SS) {
      return tS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, tS(SS)
    }

    function bS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function XS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? bS(Object(gS), !0).forEach((function(HS) {
          xS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : bS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function xS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != tS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var bS = gS.call(SS, HS || "default");
            if ("object" != tS(bS)) return bS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == tS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var NS = Math.PI / 180,
      qS = function(SS) {
        return 180 * SS / Math.PI
      },
      uS = function(SS, HS, gS, tS) {
        return {
          x: SS + Math.cos(-NS * tS) * gS,
          y: HS + Math.sin(-NS * tS) * gS
        }
      },
      IS = function(SS, HS) {
        var gS = SS.x,
          tS = SS.y,
          bS = HS.cx,
          XS = HS.cy,
          xS = function(SS, HS) {
            var gS = SS.x,
              tS = SS.y,
              bS = HS.x,
              XS = HS.y;
            return Math.sqrt(Math.pow(gS - bS, 2) + Math.pow(tS - XS, 2))
          }({
            x: gS,
            y: tS
          }, {
            x: bS,
            y: XS
          });
        if (xS <= 0) return {
          radius: xS
        };
        var NS = (gS - bS) / xS,
          uS = Math.acos(NS);
        return tS > XS && (uS = 2 * Math.PI - uS), {
          radius: xS,
          angle: qS(uS),
          angleInRadian: uS
        }
      },
      fS = function(SS, HS) {
        var gS = HS.startAngle,
          tS = HS.endAngle,
          bS = Math.floor(gS / 360),
          XS = Math.floor(tS / 360);
        return SS + 360 * Math.min(bS, XS)
      },
      kS = function(SS, HS) {
        var gS = SS.x,
          tS = SS.y,
          bS = IS({
            x: gS,
            y: tS
          }, HS),
          xS = bS.radius,
          NS = bS.angle,
          qS = HS.innerRadius,
          uS = HS.outerRadius;
        if (xS < qS || xS > uS) return !1;
        if (0 === xS) return !0;
        var kS, aS = function(SS) {
            var HS = SS.startAngle,
              gS = SS.endAngle,
              tS = Math.floor(HS / 360),
              bS = Math.floor(gS / 360),
              XS = Math.min(tS, bS);
            return {
              startAngle: HS - 360 * XS,
              endAngle: gS - 360 * XS
            }
          }(HS),
          KS = aS.startAngle,
          jS = aS.endAngle,
          GS = NS;
        if (KS <= jS) {
          for (; GS > jS;) GS -= 360;
          for (; GS < KS;) GS += 360;
          kS = GS >= KS && GS <= jS
        } else {
          for (; GS > KS;) GS -= 360;
          for (; GS < jS;) GS += 360;
          kS = GS >= jS && GS <= KS
        }
        return kS ? XS(XS({}, HS), {}, {
          radius: xS,
          angle: fS(GS, HS)
        }) : null
      }
  },
  5650: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => AS,
      e: () => dS,
      g: () => cS,
      i: () => hS,
      j: () => WS,
      n: () => YS,
      r: () => yS,
      v: () => zS,
      x: () => iS,
      z: () => vS
    });
    var tS = gS(5376),
      bS = gS.n(tS),
      XS = gS(5639),
      xS = gS.n(XS),
      NS = gS(5344),
      qS = gS.n(NS),
      uS = gS(5458),
      IS = gS.n(uS),
      fS = gS(5283),
      kS = gS.n(fS),
      aS = gS(64),
      KS = gS(5653),
      jS = gS(5340),
      GS = gS(5665),
      CS = gS(5667),
      nS = ["children"],
      PS = ["children"];

    function QS(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS = {};
        for (var tS in SS)
          if (Object.prototype.hasOwnProperty.call(SS, tS)) {
            if (HS.indexOf(tS) >= 0) continue;
            gS[tS] = SS[tS]
          } return gS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }

    function DS(SS) {
      return DS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, DS(SS)
    }
    var wS = {
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
      hS = function(SS) {
        return "string" === typeof SS ? SS : SS ? SS.displayName || SS.name || "Component" : ""
      },
      ZS = null,
      JS = null,
      OS = function SS(HS) {
        if (HS === ZS && Array.isArray(JS)) return JS;
        var gS = [];
        return aS.Children.forEach(HS, (function(HS) {
          xS()(HS) || ((0, KS.isFragment)(HS) ? gS = gS.concat(SS(HS.props.children)) : gS.push(HS))
        })), JS = gS, ZS = HS, gS
      };

    function dS(SS, HS) {
      var gS = [],
        tS = [];
      return tS = Array.isArray(HS) ? HS.map((function(SS) {
        return hS(SS)
      })) : [hS(HS)], OS(SS).forEach((function(SS) {
        var HS = bS()(SS, "type.displayName") || bS()(SS, "type.name"); - 1 !== tS.indexOf(HS) && gS.push(SS)
      })), gS
    }

    function cS(SS, HS) {
      var gS = dS(SS, HS);
      return gS && gS[0]
    }
    var vS = function(SS) {
        if (!SS || !SS.props) return !1;
        var HS = SS.props,
          gS = HS.width,
          tS = HS.height;
        return !(!(0, jS.t)(gS) || gS <= 0 || !(0, jS.t)(tS) || tS <= 0)
      },
      ES = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      LS = function(SS) {
        return SS && SS.type && qS()(SS.type) && ES.indexOf(SS.type) >= 0
      },
      YS = function(SS) {
        return SS && "object" === DS(SS) && "clipDot" in SS
      },
      AS = function(SS, HS, gS) {
        if (!SS || "function" === typeof SS || "boolean" === typeof SS) return null;
        var tS = SS;
        if ((0, aS.isValidElement)(SS) && (tS = SS.props), !kS()(tS)) return null;
        var bS = {};
        return Object.keys(tS).forEach((function(SS) {
          var XS;
          (function(SS, HS, gS, tS) {
            var bS, XS = null !== (bS = null === CS.g || void 0 === CS.g ? void 0 : CS.g[tS]) && void 0 !== bS ? bS : [];
            return HS.startsWith("data-") || !IS()(SS) && (tS && XS.includes(HS) || CS.k.includes(HS)) || gS && CS.c.includes(HS)
          })(null === (XS = tS) || void 0 === XS ? void 0 : XS[SS], SS, HS, gS) && (bS[SS] = tS[SS])
        })), bS
      },
      yS = function SS(HS, gS) {
        if (HS === gS) return !0;
        var tS = aS.Children.count(HS);
        if (tS !== aS.Children.count(gS)) return !1;
        if (0 === tS) return !0;
        if (1 === tS) return VS(Array.isArray(HS) ? HS[0] : HS, Array.isArray(gS) ? gS[0] : gS);
        for (var bS = 0; bS < tS; bS++) {
          var XS = HS[bS],
            xS = gS[bS];
          if (Array.isArray(XS) || Array.isArray(xS)) {
            if (!SS(XS, xS)) return !1
          } else if (!VS(XS, xS)) return !1
        }
        return !0
      },
      VS = function(SS, HS) {
        if (xS()(SS) && xS()(HS)) return !0;
        if (!xS()(SS) && !xS()(HS)) {
          var gS = SS.props || {},
            tS = gS.children,
            bS = QS(gS, nS),
            XS = HS.props || {},
            NS = XS.children,
            qS = QS(XS, PS);
          return tS && NS ? (0, GS.d)(bS, qS) && yS(tS, NS) : !tS && !NS && (0, GS.d)(bS, qS)
        }
        return !1
      },
      iS = function(SS, HS) {
        var gS = [],
          tS = {};
        return OS(SS).forEach((function(SS, bS) {
          if (LS(SS)) gS.push(SS);
          else if (SS) {
            var XS = hS(SS.type),
              xS = HS[XS] || {},
              NS = xS.handler,
              qS = xS.once;
            if (NS && (!qS || !tS[XS])) {
              var uS = NS(SS, XS, bS);
              gS.push(uS), tS[XS] = !0
            }
          }
        })), gS
      },
      WS = function(SS) {
        var HS = SS && SS.type;
        return HS && wS[HS] ? wS[HS] : null
      },
      zS = function(SS, HS) {
        return OS(HS).indexOf(SS)
      }
  },
  5665: (SS, HS, gS) => {
    function tS(SS, HS) {
      for (var gS in SS)
        if ({}.hasOwnProperty.call(SS, gS) && (!{}.hasOwnProperty.call(HS, gS) || SS[gS] !== HS[gS])) return !1;
      for (var tS in HS)
        if ({}.hasOwnProperty.call(HS, tS) && !{}.hasOwnProperty.call(SS, tS)) return !1;
      return !0
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  6408: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS
    });
    var tS = gS(6235),
      bS = gS(6315),
      XS = gS(5650);

    function xS(SS) {
      return xS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, xS(SS)
    }

    function NS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function qS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? NS(Object(gS), !0).forEach((function(HS) {
          uS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : NS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function uS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != xS(SS) || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != xS(tS)) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == xS(HS) ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var IS = function(SS) {
      var HS = SS.children,
        gS = SS.formattedGraphicalItems,
        xS = SS.legendWidth,
        NS = SS.legendContent,
        uS = (0, XS.g)(HS, tS.b);
      if (!uS) return null;
      var IS, fS = tS.b.defaultProps,
        kS = void 0 !== fS ? qS(qS({}, fS), uS.props) : {};
      return IS = uS.props && uS.props.payload ? uS.props && uS.props.payload : "children" === NS ? (gS || []).reduce((function(SS, HS) {
        var gS = HS.item,
          tS = HS.props,
          bS = tS.sectors || tS.data || [];
        return SS.concat(bS.map((function(SS) {
          return {
            type: uS.props.iconType || gS.props.legendType,
            value: SS.name,
            color: SS.fill,
            payload: SS
          }
        })))
      }), []) : (gS || []).map((function(SS) {
        var HS = SS.item,
          gS = HS.type.defaultProps,
          tS = void 0 !== gS ? qS(qS({}, gS), HS.props) : {},
          XS = tS.dataKey,
          xS = tS.name,
          NS = tS.legendType;
        return {
          inactive: tS.hide,
          dataKey: XS,
          type: kS.iconType || NS || "square",
          color: (0, bS.U)(HS),
          value: xS || XS,
          payload: tS
        }
      })), qS(qS(qS({}, kS), tS.b.getWithHeight(uS, xS)), {}, {
        payload: IS,
        item: uS
      })
    }
  },
  6169: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(6178),
      bS = gS.n(tS),
      XS = gS(5458),
      xS = gS.n(XS);

    function NS(SS, HS, gS) {
      return !0 === HS ? bS()(SS, gS) : xS()(HS) ? bS()(SS, HS) : SS
    }
  },
  5667: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => IS,
      g: () => uS,
      k: () => NS,
      l: () => fS,
      m: () => kS
    });
    var tS = gS(64),
      bS = gS(5283),
      XS = gS.n(bS);

    function xS(SS) {
      return xS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, xS(SS)
    }
    var NS = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "Qa", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      qS = ["points", "pathLength"],
      uS = {
        svg: ["viewBox", "children"],
        polygon: qS,
        polyline: qS
      },
      IS = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      fS = function(SS, HS) {
        if (!SS || "function" === typeof SS || "boolean" === typeof SS) return null;
        var gS = SS;
        if ((0, tS.isValidElement)(SS) && (gS = SS.props), !XS()(gS)) return null;
        var bS = {};
        return Object.keys(gS).forEach((function(SS) {
          IS.includes(SS) && (bS[SS] = HS || function(HS) {
            return gS[SS](gS, HS)
          })
        })), bS
      },
      kS = function(SS, HS, gS) {
        if (!XS()(SS) || "object" !== xS(SS)) return null;
        var tS = null;
        return Object.keys(SS).forEach((function(bS) {
          var XS = SS[bS];
          IS.includes(bS) && "function" === typeof XS && (tS || (tS = {}), tS[bS] = function(SS, HS, gS) {
            return function(tS) {
              return SS(HS, gS, tS), null
            }
          }(XS, HS, gS))
        })), tS
      }
  },
  5657: (SS, HS) => {
    var gS, tS = Symbol.for("react.element"),
      bS = Symbol.for("react.portal"),
      XS = Symbol.for("react.fragment"),
      xS = Symbol.for("react.strict_mode"),
      NS = Symbol.for("react.profiler"),
      qS = Symbol.for("react.provider"),
      uS = Symbol.for("react.context"),
      IS = Symbol.for("react.server_context"),
      fS = Symbol.for("react.forward_ref"),
      kS = Symbol.for("react.suspense"),
      aS = Symbol.for("react.suspense_list"),
      KS = Symbol.for("react.memo"),
      jS = Symbol.for("react.lazy"),
      GS = Symbol.for("react.offscreen");

    function CS(SS) {
      if ("object" === typeof SS && null !== SS) {
        var HS = SS.$$typeof;
        switch (HS) {
          case tS:
            switch (SS = SS.type) {
              case XS:
              case NS:
              case xS:
              case kS:
              case aS:
                return SS;
              default:
                switch (SS = SS && SS.$$typeof) {
                  case IS:
                  case uS:
                  case fS:
                  case jS:
                  case KS:
                  case qS:
                    return SS;
                  default:
                    return HS
                }
            }
          case bS:
            return HS
        }
      }
    }
    gS = Symbol.for("react.module.reference"), HS.isFragment = function(SS) {
      return CS(SS) === XS
    }
  },
  5653: (SS, HS, gS) => {
    SS.exports = gS(5657)
  },
  5259: (SS, HS, gS) => {
    function tS(SS) {
      var HS, gS, bS = "";
      if ("string" == typeof SS || "number" == typeof SS) bS += SS;
      else if ("object" == typeof SS)
        if (Array.isArray(SS)) {
          var XS = SS.length;
          for (HS = 0; HS < XS; HS++) SS[HS] && (gS = tS(SS[HS])) && (bS && (bS += " "), bS += gS)
        } else
          for (gS in SS) SS[gS] && (bS && (bS += " "), bS += gS);
      return bS
    }
    gS.d(HS, {
      b: () => bS
    });
    const bS = function() {
      for (var SS, HS, gS = 0, bS = "", XS = arguments.length; gS < XS; gS++)(SS = arguments[gS]) && (HS = tS(SS)) && (bS && (bS += " "), bS += HS);
      return bS
    }
  },
  6324: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      f: () => NS
    });
    var tS = gS(6331),
      bS = gS(6340);

    function XS() {
      var SS, HS, gS = (0, bS.d)().unknown(void 0),
        xS = gS.domain,
        NS = gS.range,
        qS = 0,
        uS = 1,
        IS = !1,
        fS = 0,
        kS = 0,
        aS = .5;

      function KS() {
        var gS = xS().length,
          tS = uS < qS,
          bS = tS ? uS : qS,
          XS = tS ? qS : uS;
        SS = (XS - bS) / Math.max(1, gS - fS + 2 * kS), IS && (SS = Math.floor(SS)), bS += (XS - bS - SS * (gS - fS)) * aS, HS = SS * (1 - fS), IS && (bS = Math.round(bS), HS = Math.round(HS));
        var KS = function(SS, HS, gS) {
          SS = +SS, HS = +HS, gS = (bS = arguments.length) < 2 ? (HS = SS, SS = 0, 1) : bS < 3 ? 1 : +gS;
          for (var tS = -1, bS = 0 | Math.max(0, Math.ceil((HS - SS) / gS)), XS = new Array(bS); ++tS < bS;) XS[tS] = SS + tS * gS;
          return XS
        }(gS).map((function(HS) {
          return bS + SS * HS
        }));
        return NS(tS ? KS.reverse() : KS)
      }
      return delete gS.unknown, gS.domain = function(SS) {
        return arguments.length ? (xS(SS), KS()) : xS()
      }, gS.range = function(SS) {
        return arguments.length ? ([qS, uS] = SS, qS = +qS, uS = +uS, KS()) : [qS, uS]
      }, gS.rangeRound = function(SS) {
        return [qS, uS] = SS, qS = +qS, uS = +uS, IS = !0, KS()
      }, gS.bandwidth = function() {
        return HS
      }, gS.step = function() {
        return SS
      }, gS.round = function(SS) {
        return arguments.length ? (IS = !!SS, KS()) : IS
      }, gS.padding = function(SS) {
        return arguments.length ? (fS = Math.min(1, kS = +SS), KS()) : fS
      }, gS.paddingInner = function(SS) {
        return arguments.length ? (fS = Math.min(1, SS), KS()) : fS
      }, gS.paddingOuter = function(SS) {
        return arguments.length ? (kS = +SS, KS()) : kS
      }, gS.align = function(SS) {
        return arguments.length ? (aS = Math.max(0, Math.min(1, SS)), KS()) : aS
      }, gS.copy = function() {
        return XS(xS(), [qS, uS]).round(IS).paddingInner(fS).paddingOuter(kS).align(aS)
      }, tS.e.apply(KS(), arguments)
    }

    function xS(SS) {
      var HS = SS.copy;
      return SS.padding = SS.paddingOuter, delete SS.paddingInner, delete SS.paddingOuter, SS.copy = function() {
        return xS(HS())
      }, SS
    }

    function NS() {
      return xS(XS.apply(null, arguments).paddingInner(1))
    }
  },
  6331: (SS, HS, gS) => {
    function tS(SS, HS) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(SS);
          break;
        default:
          this.range(HS).domain(SS)
      }
      return this
    }

    function bS(SS, HS) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof SS ? this.interpolator(SS) : this.range(SS);
          break;
        default:
          this.domain(SS), "function" === typeof HS ? this.interpolator(HS) : this.range(HS)
      }
      return this
    }
    gS.d(HS, {
      d: () => bS,
      e: () => tS
    })
  },
  6340: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS,
      h: () => uS
    });
    class tS extends Map {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NS;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: HS
            }
          }), null != SS)
          for (const [gS, tS] of SS) this.set(gS, tS)
      }
      get(SS) {
        return super.get(bS(this, SS))
      }
      has(SS) {
        return super.has(bS(this, SS))
      }
      set(SS, HS) {
        return super.set(XS(this, SS), HS)
      }
      delete(SS) {
        return super.delete(xS(this, SS))
      }
    }
    Set;

    function bS(SS, HS) {
      let {
        _intern: gS,
        _key: tS
      } = SS;
      const bS = tS(HS);
      return gS.has(bS) ? gS.get(bS) : HS
    }

    function XS(SS, HS) {
      let {
        _intern: gS,
        _key: tS
      } = SS;
      const bS = tS(HS);
      return gS.has(bS) ? gS.get(bS) : (gS.set(bS, HS), HS)
    }

    function xS(SS, HS) {
      let {
        _intern: gS,
        _key: tS
      } = SS;
      const bS = tS(HS);
      return gS.has(bS) && (HS = gS.get(bS), gS.delete(bS)), HS
    }

    function NS(SS) {
      return null !== SS && "object" === typeof SS ? SS.valueOf() : SS
    }
    var qS = gS(6331);
    const uS = Symbol("implicit");

    function IS() {
      var SS = new tS,
        HS = [],
        gS = [],
        bS = uS;

      function XS(tS) {
        let XS = SS.get(tS);
        if (void 0 === XS) {
          if (bS !== uS) return bS;
          SS.set(tS, XS = HS.push(tS) - 1)
        }
        return gS[XS % gS.length]
      }
      return XS.domain = function(gS) {
        if (!arguments.length) return HS.slice();
        HS = [], SS = new tS;
        for (const tS of gS) SS.has(tS) || SS.set(tS, HS.push(tS) - 1);
        return XS
      }, XS.range = function(SS) {
        return arguments.length ? (gS = Array.from(SS), XS) : gS.slice()
      }, XS.unknown = function(SS) {
        return arguments.length ? (bS = SS, XS) : bS
      }, XS.copy = function() {
        return IS(HS, gS).unknown(bS)
      }, qS.e.apply(XS, arguments), XS
    }
  },
  6413: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    Array.prototype.slice;

    function tS(SS) {
      return "object" === typeof SS && "length" in SS ? SS : Array.from(SS)
    }
  },
  6279: (SS, HS, gS) => {
    function tS(SS) {
      return function() {
        return SS
      }
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  6284: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS
    });
    const tS = Math.PI,
      bS = 2 * tS,
      XS = 1e-6,
      xS = bS - XS;

    function NS(SS) {
      this._ += SS[0];
      for (let HS = 1, gS = SS.length; HS < gS; ++HS) this._ += arguments[HS] + SS[HS]
    }
    class qS {
      constructor(SS) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == SS ? NS : function(SS) {
          let HS = Math.floor(SS);
          if (!(HS >= 0)) throw new Error(`invalid digits: ${SS}`);
          if (HS > 15) return NS;
          const gS = 10 ** HS;
          return function(SS) {
            this._ += SS[0];
            for (let HS = 1, tS = SS.length; HS < tS; ++HS) this._ += Math.round(arguments[HS] * gS) / gS + SS[HS]
          }
        }(SS)
      }
      moveTo(SS, HS) {
        this._append`M${this._x0=this._x1=+SS},${this._y0=this._y1=+HS}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(SS, HS) {
        this._append`L${this._x1=+SS},${this._y1=+HS}`
      }
      quadraticCurveTo(SS, HS, gS, tS) {
        this._append`Q${+SS},${+HS},${this._x1=+gS},${this._y1=+tS}`
      }
      bezierCurveTo(SS, HS, gS, tS, bS, XS) {
        this._append`C${+SS},${+HS},${+gS},${+tS},${this._x1=+bS},${this._y1=+XS}`
      }
      arcTo(SS, HS, gS, bS, xS) {
        if (SS = +SS, HS = +HS, gS = +gS, bS = +bS, (xS = +xS) < 0) throw new Error(`negative radius: ${xS}`);
        let NS = this._x1,
          qS = this._y1,
          uS = gS - SS,
          IS = bS - HS,
          fS = NS - SS,
          kS = qS - HS,
          aS = fS * fS + kS * kS;
        if (null === this._x1) this._append`M${this._x1=SS},${this._y1=HS}`;
        else if (aS > XS)
          if (Math.abs(kS * uS - IS * fS) > XS && xS) {
            let KS = gS - NS,
              jS = bS - qS,
              GS = uS * uS + IS * IS,
              CS = KS * KS + jS * jS,
              nS = Math.sqrt(GS),
              PS = Math.sqrt(aS),
              QS = xS * Math.tan((tS - Math.acos((GS + aS - CS) / (2 * nS * PS))) / 2),
              DS = QS / PS,
              wS = QS / nS;
            Math.abs(DS - 1) > XS && this._append`L${SS+DS*fS},${HS+DS*kS}`, this._append`A${xS},${xS},0,0,${+(kS*KS>fS*jS)},${this._x1=SS+wS*uS},${this._y1=HS+wS*IS}`
          } else this._append`L${this._x1=SS},${this._y1=HS}`;
        else;
      }
      arc(SS, HS, gS, NS, qS, uS) {
        if (SS = +SS, HS = +HS, uS = !!uS, (gS = +gS) < 0) throw new Error(`negative radius: ${gS}`);
        let IS = gS * Math.cos(NS),
          fS = gS * Math.sin(NS),
          kS = SS + IS,
          aS = HS + fS,
          KS = 1 ^ uS,
          jS = uS ? NS - qS : qS - NS;
        null === this._x1 ? this._append`M${kS},${aS}` : (Math.abs(this._x1 - kS) > XS || Math.abs(this._y1 - aS) > XS) && this._append`L${kS},${aS}`, gS && (jS < 0 && (jS = jS % bS + bS), jS > xS ? this._append`A${gS},${gS},0,1,${KS},${SS-IS},${HS-fS}A${gS},${gS},0,1,${KS},${this._x1=kS},${this._y1=aS}` : jS > XS && this._append`A${gS},${gS},0,${+(jS>=tS)},${KS},${this._x1=SS+gS*Math.cos(qS)},${this._y1=HS+gS*Math.sin(qS)}`)
      }
      rect(SS, HS, gS, tS) {
        this._append`M${this._x0=this._x1=+SS},${this._y0=this._y1=+HS}h${gS=+gS}v${+tS}h${-gS}Z`
      }
      toString() {
        return this._
      }
    }

    function uS(SS) {
      let HS = 3;
      return SS.digits = function(gS) {
        if (!arguments.length) return HS;
        if (null == gS) HS = null;
        else {
          const SS = Math.floor(gS);
          if (!(SS >= 0)) throw new RangeError(`invalid digits: ${gS}`);
          HS = SS
        }
        return SS
      }, () => new qS(HS)
    }
    qS.prototype
  },
  6143: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = !0,
      bS = "Invariant failed";

    function XS(SS, HS) {
      if (!SS) {
        if (tS) throw new Error(bS);
        var gS = "function" === typeof HS ? HS() : HS,
          XS = gS ? "".concat(bS, ": ").concat(gS) : bS;
        throw new Error(XS)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);