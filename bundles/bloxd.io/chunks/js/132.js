/*! For license information please see fo1voe.132.7ce65681.chunk.js.LICENSE.txt */
export const id = 132;
export const ids = [132];
export const modules = {
  6665: function(MM, rM, iM) {
    var OM;
    ! function() {
      var SM, jM = 1e9,
        aM = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        PM = !0,
        nM = "[DecimalError] ",
        QM = nM + "Invalid argument: ",
        zM = nM + "Exponent out of range: ",
        LM = Math.floor,
        mM = Math.pow,
        HM = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        hM = 1e7,
        JM = 9007199254740991,
        dM = LM(1286742750677284.5),
        yM = {};

      function lM(MM, rM) {
        var iM, OM, SM, jM, aM, nM, QM, zM, LM = MM.constructor,
          mM = LM.precision;
        if (!MM.s || !rM.s) return rM.s || (rM = new LM(MM)), PM ? uM(rM, mM) : rM;
        if (QM = MM.d, zM = rM.d, aM = MM.e, SM = rM.e, QM = QM.slice(), jM = aM - SM) {
          for (jM < 0 ? (OM = QM, jM = -jM, nM = zM.length) : (OM = zM, SM = aM, nM = QM.length), jM > (nM = (aM = Math.ceil(mM / 7)) > nM ? aM + 1 : nM + 1) && (jM = nM, OM.length = 1), OM.reverse(); jM--;) OM.push(0);
          OM.reverse()
        }
        for ((nM = QM.length) - (jM = zM.length) < 0 && (jM = nM, OM = zM, zM = QM, QM = OM), iM = 0; jM;) iM = (QM[--jM] = QM[jM] + zM[jM] + iM) / hM | 0, QM[jM] %= hM;
        for (iM && (QM.unshift(iM), ++SM), nM = QM.length; 0 == QM[--nM];) QM.pop();
        return rM.d = QM, rM.e = SM, PM ? uM(rM, mM) : rM
      }

      function EM(MM, rM, iM) {
        if (MM !== ~~MM || MM < rM || MM > iM) throw Error(QM + MM)
      }

      function UM(MM) {
        var rM, iM, OM, SM = MM.length - 1,
          jM = "",
          aM = MM[0];
        if (SM > 0) {
          for (jM += aM, rM = 1; rM < SM; rM++)(iM = 7 - (OM = MM[rM] + "").length) && (jM += wM(iM)), jM += OM;
          (iM = 7 - (OM = (aM = MM[rM]) + "").length) && (jM += wM(iM))
        } else if (0 === aM) return "0";
        for (; aM % 10 === 0;) aM /= 10;
        return jM + aM
      }
      yM.absoluteValue = yM.abs = function() {
        var MM = new this.constructor(this);
        return MM.s && (MM.s = 1), MM
      }, yM.comparedTo = yM.cmp = function(MM) {
        var rM, iM, OM, SM, jM = this;
        if (MM = new jM.constructor(MM), jM.s !== MM.s) return jM.s || -MM.s;
        if (jM.e !== MM.e) return jM.e > MM.e ^ jM.s < 0 ? 1 : -1;
        for (rM = 0, iM = (OM = jM.d.length) < (SM = MM.d.length) ? OM : SM; rM < iM; ++rM)
          if (jM.d[rM] !== MM.d[rM]) return jM.d[rM] > MM.d[rM] ^ jM.s < 0 ? 1 : -1;
        return OM === SM ? 0 : OM > SM ^ jM.s < 0 ? 1 : -1
      }, yM.decimalPlaces = yM.dp = function() {
        var MM = this,
          rM = MM.d.length - 1,
          iM = 7 * (rM - MM.e);
        if (rM = MM.d[rM])
          for (; rM % 10 == 0; rM /= 10) iM--;
        return iM < 0 ? 0 : iM
      }, yM.dividedBy = yM.div = function(MM) {
        return GM(this, new this.constructor(MM))
      }, yM.dividedToIntegerBy = yM.idiv = function(MM) {
        var rM = this.constructor;
        return uM(GM(this, new rM(MM), 0, 1), rM.precision)
      }, yM.equals = yM.eq = function(MM) {
        return !this.cmp(MM)
      }, yM.exponent = function() {
        return eM(this)
      }, yM.greaterThan = yM.gt = function(MM) {
        return this.cmp(MM) > 0
      }, yM.greaterThanOrEqualTo = yM.gte = function(MM) {
        return this.cmp(MM) >= 0
      }, yM.isInteger = yM.isint = function() {
        return this.e > this.d.length - 2
      }, yM.isNegative = yM.isneg = function() {
        return this.s < 0
      }, yM.isPositive = yM.ispos = function() {
        return this.s > 0
      }, yM.isZero = function() {
        return 0 === this.s
      }, yM.lessThan = yM.lt = function(MM) {
        return this.cmp(MM) < 0
      }, yM.lessThanOrEqualTo = yM.lte = function(MM) {
        return this.cmp(MM) < 1
      }, yM.logarithm = yM.log = function(MM) {
        var rM, iM = this,
          OM = iM.constructor,
          jM = OM.precision,
          aM = jM + 5;
        if (void 0 === MM) MM = new OM(10);
        else if ((MM = new OM(MM)).s < 1 || MM.eq(SM)) throw Error(nM + "NaN");
        if (iM.s < 1) throw Error(nM + (iM.s ? "NaN" : "-Infinity"));
        return iM.eq(SM) ? new OM(0) : (PM = !1, rM = GM(tM(iM, aM), tM(MM, aM), aM), PM = !0, uM(rM, jM))
      }, yM.minus = yM.sub = function(MM) {
        var rM = this;
        return MM = new rM.constructor(MM), rM.s == MM.s ? RM(rM, MM) : lM(rM, (MM.s = -MM.s, MM))
      }, yM.modulo = yM.mod = function(MM) {
        var rM, iM = this,
          OM = iM.constructor,
          SM = OM.precision;
        if (!(MM = new OM(MM)).s) throw Error(nM + "NaN");
        return iM.s ? (PM = !1, rM = GM(iM, MM, 0, 1).times(MM), PM = !0, iM.minus(rM)) : uM(new OM(iM), SM)
      }, yM.naturalExponential = yM.exp = function() {
        return CM(this)
      }, yM.naturalLogarithm = yM.ln = function() {
        return tM(this)
      }, yM.negated = yM.neg = function() {
        var MM = new this.constructor(this);
        return MM.s = -MM.s || 0, MM
      }, yM.plus = yM.add = function(MM) {
        var rM = this;
        return MM = new rM.constructor(MM), rM.s == MM.s ? lM(rM, MM) : RM(rM, (MM.s = -MM.s, MM))
      }, yM.precision = yM.sd = function(MM) {
        var rM, iM, OM, SM = this;
        if (void 0 !== MM && MM !== !!MM && 1 !== MM && 0 !== MM) throw Error(QM + MM);
        if (rM = eM(SM) + 1, iM = 7 * (OM = SM.d.length - 1) + 1, OM = SM.d[OM]) {
          for (; OM % 10 == 0; OM /= 10) iM--;
          for (OM = SM.d[0]; OM >= 10; OM /= 10) iM++
        }
        return MM && rM > iM ? rM : iM
      }, yM.squareRoot = yM.sqrt = function() {
        var MM, rM, iM, OM, SM, jM, aM, QM = this,
          zM = QM.constructor;
        if (QM.s < 1) {
          if (!QM.s) return new zM(0);
          throw Error(nM + "NaN")
        }
        for (MM = eM(QM), PM = !1, 0 == (SM = Math.sqrt(+QM)) || SM == 1 / 0 ? (((rM = UM(QM.d)).length + MM) % 2 == 0 && (rM += "0"), SM = Math.sqrt(rM), MM = LM((MM + 1) / 2) - (MM < 0 || MM % 2), OM = new zM(rM = SM == 1 / 0 ? "1e" + MM : (rM = SM.toExponential()).slice(0, rM.indexOf("e") + 1) + MM)) : OM = new zM(SM.toString()), SM = aM = (iM = zM.precision) + 3;;)
          if (OM = (jM = OM).plus(GM(QM, jM, aM + 2)).times(.5), UM(jM.d).slice(0, aM) === (rM = UM(OM.d)).slice(0, aM)) {
            if (rM = rM.slice(aM - 3, aM + 1), SM == aM && "4999" == rM) {
              if (uM(jM, iM + 1, 0), jM.times(jM).eq(QM)) {
                OM = jM;
                break
              }
            } else if ("9999" != rM) break;
            aM += 4
          } return PM = !0, uM(OM, iM)
      }, yM.times = yM.mul = function(MM) {
        var rM, iM, OM, SM, jM, aM, nM, QM, zM, LM = this,
          mM = LM.constructor,
          HM = LM.d,
          JM = (MM = new mM(MM)).d;
        if (!LM.s || !MM.s) return new mM(0);
        for (MM.s *= LM.s, iM = LM.e + MM.e, (QM = HM.length) < (zM = JM.length) && (jM = HM, HM = JM, JM = jM, aM = QM, QM = zM, zM = aM), jM = [], OM = aM = QM + zM; OM--;) jM.push(0);
        for (OM = zM; --OM >= 0;) {
          for (rM = 0, SM = QM + OM; SM > OM;) nM = jM[SM] + JM[OM] * HM[SM - OM - 1] + rM, jM[SM--] = nM % hM | 0, rM = nM / hM | 0;
          jM[SM] = (jM[SM] + rM) % hM | 0
        }
        for (; !jM[--aM];) jM.pop();
        return rM ? ++iM : jM.shift(), MM.d = jM, MM.e = iM, PM ? uM(MM, mM.precision) : MM
      }, yM.toDecimalPlaces = yM.todp = function(MM, rM) {
        var iM = this,
          OM = iM.constructor;
        return iM = new OM(iM), void 0 === MM ? iM : (EM(MM, 0, jM), void 0 === rM ? rM = OM.rounding : EM(rM, 0, 8), uM(iM, MM + eM(iM) + 1, rM))
      }, yM.toExponential = function(MM, rM) {
        var iM, OM = this,
          SM = OM.constructor;
        return void 0 === MM ? iM = pM(OM, !0) : (EM(MM, 0, jM), void 0 === rM ? rM = SM.rounding : EM(rM, 0, 8), iM = pM(OM = uM(new SM(OM), MM + 1, rM), !0, MM + 1)), iM
      }, yM.toFixed = function(MM, rM) {
        var iM, OM, SM = this,
          aM = SM.constructor;
        return void 0 === MM ? pM(SM) : (EM(MM, 0, jM), void 0 === rM ? rM = aM.rounding : EM(rM, 0, 8), iM = pM((OM = uM(new aM(SM), MM + eM(SM) + 1, rM)).abs(), !1, MM + eM(OM) + 1), SM.isneg() && !SM.isZero() ? "-" + iM : iM)
      }, yM.toInteger = yM.toint = function() {
        var MM = this,
          rM = MM.constructor;
        return uM(new rM(MM), eM(MM) + 1, rM.rounding)
      }, yM.toNumber = function() {
        return +this
      }, yM.toPower = yM.pow = function(MM) {
        var rM, iM, OM, jM, aM, QM, zM = this,
          mM = zM.constructor,
          HM = +(MM = new mM(MM));
        if (!MM.s) return new mM(SM);
        if (!(zM = new mM(zM)).s) {
          if (MM.s < 1) throw Error(nM + "Infinity");
          return zM
        }
        if (zM.eq(SM)) return zM;
        if (OM = mM.precision, MM.eq(SM)) return uM(zM, OM);
        if (QM = (rM = MM.e) >= (iM = MM.d.length - 1), aM = zM.s, QM) {
          if ((iM = HM < 0 ? -HM : HM) <= JM) {
            for (jM = new mM(SM), rM = Math.ceil(OM / 7 + 4), PM = !1; iM % 2 && WM((jM = jM.times(zM)).d, rM), 0 !== (iM = LM(iM / 2));) WM((zM = zM.times(zM)).d, rM);
            return PM = !0, MM.s < 0 ? new mM(SM).div(jM) : uM(jM, OM)
          }
        } else if (aM < 0) throw Error(nM + "NaN");
        return aM = aM < 0 && 1 & MM.d[Math.max(rM, iM)] ? -1 : 1, zM.s = 1, PM = !1, jM = MM.times(tM(zM, OM + 12)), PM = !0, (jM = CM(jM)).s = aM, jM
      }, yM.toPrecision = function(MM, rM) {
        var iM, OM, SM = this,
          aM = SM.constructor;
        return void 0 === MM ? OM = pM(SM, (iM = eM(SM)) <= aM.toExpNeg || iM >= aM.toExpPos) : (EM(MM, 1, jM), void 0 === rM ? rM = aM.rounding : EM(rM, 0, 8), OM = pM(SM = uM(new aM(SM), MM, rM), MM <= (iM = eM(SM)) || iM <= aM.toExpNeg, MM)), OM
      }, yM.toSignificantDigits = yM.tosd = function(MM, rM) {
        var iM = this.constructor;
        return void 0 === MM ? (MM = iM.precision, rM = iM.rounding) : (EM(MM, 1, jM), void 0 === rM ? rM = iM.rounding : EM(rM, 0, 8)), uM(new iM(this), MM, rM)
      }, yM.toString = yM.valueOf = yM.val = yM.toJSON = function() {
        var MM = this,
          rM = eM(MM),
          iM = MM.constructor;
        return pM(MM, rM <= iM.toExpNeg || rM >= iM.toExpPos)
      };
      var GM = function() {
        function MM(MM, rM) {
          var iM, OM = 0,
            SM = MM.length;
          for (MM = MM.slice(); SM--;) iM = MM[SM] * rM + OM, MM[SM] = iM % hM | 0, OM = iM / hM | 0;
          return OM && MM.unshift(OM), MM
        }

        function rM(MM, rM, iM, OM) {
          var SM, jM;
          if (iM != OM) jM = iM > OM ? 1 : -1;
          else
            for (SM = jM = 0; SM < iM; SM++)
              if (MM[SM] != rM[SM]) {
                jM = MM[SM] > rM[SM] ? 1 : -1;
                break
              } return jM
        }

        function iM(MM, rM, iM) {
          for (var OM = 0; iM--;) MM[iM] -= OM, OM = MM[iM] < rM[iM] ? 1 : 0, MM[iM] = OM * hM + MM[iM] - rM[iM];
          for (; !MM[0] && MM.length > 1;) MM.shift()
        }
        return function(OM, SM, jM, aM) {
          var PM, QM, zM, LM, mM, HM, JM, dM, yM, lM, EM, UM, GM, CM, bM, wM, tM, gM, RM = OM.constructor,
            pM = OM.s == SM.s ? 1 : -1,
            WM = OM.d,
            sM = SM.d;
          if (!OM.s) return new RM(OM);
          if (!SM.s) throw Error(nM + "Division by zero");
          for (QM = OM.e - SM.e, tM = sM.length, bM = WM.length, dM = (JM = new RM(pM)).d = [], zM = 0; sM[zM] == (WM[zM] || 0);) ++zM;
          if (sM[zM] > (WM[zM] || 0) && --QM, (UM = null == jM ? jM = RM.precision : aM ? jM + (eM(OM) - eM(SM)) + 1 : jM) < 0) return new RM(0);
          if (UM = UM / 7 + 2 | 0, zM = 0, 1 == tM)
            for (LM = 0, sM = sM[0], UM++;
              (zM < bM || LM) && UM--; zM++) GM = LM * hM + (WM[zM] || 0), dM[zM] = GM / sM | 0, LM = GM % sM | 0;
          else {
            for ((LM = hM / (sM[0] + 1) | 0) > 1 && (sM = MM(sM, LM), WM = MM(WM, LM), tM = sM.length, bM = WM.length), CM = tM, lM = (yM = WM.slice(0, tM)).length; lM < tM;) yM[lM++] = 0;
            (gM = sM.slice()).unshift(0), wM = sM[0], sM[1] >= hM / 2 && ++wM;
            do {
              LM = 0, (PM = rM(sM, yM, tM, lM)) < 0 ? (EM = yM[0], tM != lM && (EM = EM * hM + (yM[1] || 0)), (LM = EM / wM | 0) > 1 ? (LM >= hM && (LM = hM - 1), 1 == (PM = rM(mM = MM(sM, LM), yM, HM = mM.length, lM = yM.length)) && (LM--, iM(mM, tM < HM ? gM : sM, HM))) : (0 == LM && (PM = LM = 1), mM = sM.slice()), (HM = mM.length) < lM && mM.unshift(0), iM(yM, mM, lM), -1 == PM && (PM = rM(sM, yM, tM, lM = yM.length)) < 1 && (LM++, iM(yM, tM < lM ? gM : sM, lM)), lM = yM.length) : 0 === PM && (LM++, yM = [0]), dM[zM++] = LM, PM && yM[0] ? yM[lM++] = WM[CM] || 0 : (yM = [WM[CM]], lM = 1)
            } while ((CM++ < bM || void 0 !== yM[0]) && UM--)
          }
          return dM[0] || dM.shift(), JM.e = QM, uM(JM, aM ? jM + eM(JM) + 1 : jM)
        }
      }();

      function CM(MM, rM) {
        var iM, OM, jM, aM, nM, QM = 0,
          LM = 0,
          HM = MM.constructor,
          hM = HM.precision;
        if (eM(MM) > 16) throw Error(zM + eM(MM));
        if (!MM.s) return new HM(SM);
        for (null == rM ? (PM = !1, nM = hM) : nM = rM, aM = new HM(.03125); MM.abs().gte(.1);) MM = MM.times(aM), LM += 5;
        for (nM += Math.log(mM(2, LM)) / Math.LN10 * 2 + 5 | 0, iM = OM = jM = new HM(SM), HM.precision = nM;;) {
          if (OM = uM(OM.times(MM), nM), iM = iM.times(++QM), UM((aM = jM.plus(GM(OM, iM, nM))).d).slice(0, nM) === UM(jM.d).slice(0, nM)) {
            for (; LM--;) jM = uM(jM.times(jM), nM);
            return HM.precision = hM, null == rM ? (PM = !0, uM(jM, hM)) : jM
          }
          jM = aM
        }
      }

      function eM(MM) {
        for (var rM = 7 * MM.e, iM = MM.d[0]; iM >= 10; iM /= 10) rM++;
        return rM
      }

      function bM(MM, rM, iM) {
        if (rM > MM.LN10.sd()) throw PM = !0, iM && (MM.precision = iM), Error(nM + "LN10 precision limit exceeded");
        return uM(new MM(MM.LN10), rM)
      }

      function wM(MM) {
        for (var rM = ""; MM--;) rM += "0";
        return rM
      }

      function tM(MM, rM) {
        var iM, OM, jM, aM, QM, zM, LM, mM, HM, hM = 1,
          JM = MM,
          dM = JM.d,
          yM = JM.constructor,
          lM = yM.precision;
        if (JM.s < 1) throw Error(nM + (JM.s ? "NaN" : "-Infinity"));
        if (JM.eq(SM)) return new yM(0);
        if (null == rM ? (PM = !1, mM = lM) : mM = rM, JM.eq(10)) return null == rM && (PM = !0), bM(yM, mM);
        if (mM += 10, yM.precision = mM, OM = (iM = UM(dM)).charAt(0), aM = eM(JM), !(Math.abs(aM) < 15e14)) return LM = bM(yM, mM + 2, lM).times(aM + ""), JM = tM(new yM(OM + "." + iM.slice(1)), mM - 10).plus(LM), yM.precision = lM, null == rM ? (PM = !0, uM(JM, lM)) : JM;
        for (; OM < 7 && 1 != OM || 1 == OM && iM.charAt(1) > 3;) OM = (iM = UM((JM = JM.times(MM)).d)).charAt(0), hM++;
        for (aM = eM(JM), OM > 1 ? (JM = new yM("0." + iM), aM++) : JM = new yM(OM + "." + iM.slice(1)), zM = QM = JM = GM(JM.minus(SM), JM.plus(SM), mM), HM = uM(JM.times(JM), mM), jM = 3;;) {
          if (QM = uM(QM.times(HM), mM), UM((LM = zM.plus(GM(QM, new yM(jM), mM))).d).slice(0, mM) === UM(zM.d).slice(0, mM)) return zM = zM.times(2), 0 !== aM && (zM = zM.plus(bM(yM, mM + 2, lM).times(aM + ""))), zM = GM(zM, new yM(hM), mM), yM.precision = lM, null == rM ? (PM = !0, uM(zM, lM)) : zM;
          zM = LM, jM += 2
        }
      }

      function gM(MM, rM) {
        var iM, OM, SM;
        for ((iM = rM.indexOf(".")) > -1 && (rM = rM.replace(".", "")), (OM = rM.search(/e/i)) > 0 ? (iM < 0 && (iM = OM), iM += +rM.slice(OM + 1), rM = rM.substring(0, OM)) : iM < 0 && (iM = rM.length), OM = 0; 48 === rM.charCodeAt(OM);) ++OM;
        for (SM = rM.length; 48 === rM.charCodeAt(SM - 1);) --SM;
        if (rM = rM.slice(OM, SM)) {
          if (SM -= OM, iM = iM - OM - 1, MM.e = LM(iM / 7), MM.d = [], OM = (iM + 1) % 7, iM < 0 && (OM += 7), OM < SM) {
            for (OM && MM.d.push(+rM.slice(0, OM)), SM -= 7; OM < SM;) MM.d.push(+rM.slice(OM, OM += 7));
            OM = 7 - (rM = rM.slice(OM)).length
          } else OM -= SM;
          for (; OM--;) rM += "0";
          if (MM.d.push(+rM), PM && (MM.e > dM || MM.e < -dM)) throw Error(zM + iM)
        } else MM.s = 0, MM.e = 0, MM.d = [0];
        return MM
      }

      function uM(MM, rM, iM) {
        var OM, SM, jM, aM, nM, QM, HM, JM, yM = MM.d;
        for (aM = 1, jM = yM[0]; jM >= 10; jM /= 10) aM++;
        if ((OM = rM - aM) < 0) OM += 7, SM = rM, HM = yM[JM = 0];
        else {
          if ((JM = Math.ceil((OM + 1) / 7)) >= (jM = yM.length)) return MM;
          for (HM = jM = yM[JM], aM = 1; jM >= 10; jM /= 10) aM++;
          SM = (OM %= 7) - 7 + aM
        }
        if (void 0 !== iM && (nM = HM / (jM = mM(10, aM - SM - 1)) % 10 | 0, QM = rM < 0 || void 0 !== yM[JM + 1] || HM % jM, QM = iM < 4 ? (nM || QM) && (0 == iM || iM == (MM.s < 0 ? 3 : 2)) : nM > 5 || 5 == nM && (4 == iM || QM || 6 == iM && (OM > 0 ? SM > 0 ? HM / mM(10, aM - SM) : 0 : yM[JM - 1]) % 10 & 1 || iM == (MM.s < 0 ? 8 : 7))), rM < 1 || !yM[0]) return QM ? (jM = eM(MM), yM.length = 1, rM = rM - jM - 1, yM[0] = mM(10, (7 - rM % 7) % 7), MM.e = LM(-rM / 7) || 0) : (yM.length = 1, yM[0] = MM.e = MM.s = 0), MM;
        if (0 == OM ? (yM.length = JM, jM = 1, JM--) : (yM.length = JM + 1, jM = mM(10, 7 - OM), yM[JM] = SM > 0 ? (HM / mM(10, aM - SM) % mM(10, SM) | 0) * jM : 0), QM)
          for (;;) {
            if (0 == JM) {
              (yM[0] += jM) == hM && (yM[0] = 1, ++MM.e);
              break
            }
            if (yM[JM] += jM, yM[JM] != hM) break;
            yM[JM--] = 0, jM = 1
          }
        for (OM = yM.length; 0 === yM[--OM];) yM.pop();
        if (PM && (MM.e > dM || MM.e < -dM)) throw Error(zM + eM(MM));
        return MM
      }

      function RM(MM, rM) {
        var iM, OM, SM, jM, aM, nM, QM, zM, LM, mM, HM = MM.constructor,
          JM = HM.precision;
        if (!MM.s || !rM.s) return rM.s ? rM.s = -rM.s : rM = new HM(MM), PM ? uM(rM, JM) : rM;
        if (QM = MM.d, mM = rM.d, OM = rM.e, zM = MM.e, QM = QM.slice(), aM = zM - OM) {
          for ((LM = aM < 0) ? (iM = QM, aM = -aM, nM = mM.length) : (iM = mM, OM = zM, nM = QM.length), aM > (SM = Math.max(Math.ceil(JM / 7), nM) + 2) && (aM = SM, iM.length = 1), iM.reverse(), SM = aM; SM--;) iM.push(0);
          iM.reverse()
        } else {
          for ((LM = (SM = QM.length) < (nM = mM.length)) && (nM = SM), SM = 0; SM < nM; SM++)
            if (QM[SM] != mM[SM]) {
              LM = QM[SM] < mM[SM];
              break
            } aM = 0
        }
        for (LM && (iM = QM, QM = mM, mM = iM, rM.s = -rM.s), nM = QM.length, SM = mM.length - nM; SM > 0; --SM) QM[nM++] = 0;
        for (SM = mM.length; SM > aM;) {
          if (QM[--SM] < mM[SM]) {
            for (jM = SM; jM && 0 === QM[--jM];) QM[jM] = hM - 1;
            --QM[jM], QM[SM] += hM
          }
          QM[SM] -= mM[SM]
        }
        for (; 0 === QM[--nM];) QM.pop();
        for (; 0 === QM[0]; QM.shift()) --OM;
        return QM[0] ? (rM.d = QM, rM.e = OM, PM ? uM(rM, JM) : rM) : new HM(0)
      }

      function pM(MM, rM, iM) {
        var OM, SM = eM(MM),
          jM = UM(MM.d),
          aM = jM.length;
        return rM ? (iM && (OM = iM - aM) > 0 ? jM = jM.charAt(0) + "." + jM.slice(1) + wM(OM) : aM > 1 && (jM = jM.charAt(0) + "." + jM.slice(1)), jM = jM + (SM < 0 ? "e" : "e+") + SM) : SM < 0 ? (jM = "0." + wM(-SM - 1) + jM, iM && (OM = iM - aM) > 0 && (jM += wM(OM))) : SM >= aM ? (jM += wM(SM + 1 - aM), iM && (OM = iM - SM - 1) > 0 && (jM = jM + "." + wM(OM))) : ((OM = SM + 1) < aM && (jM = jM.slice(0, OM) + "." + jM.slice(OM)), iM && (OM = iM - aM) > 0 && (SM + 1 === aM && (jM += "."), jM += wM(OM))), MM.s < 0 ? "-" + jM : jM
      }

      function WM(MM, rM) {
        if (MM.length > rM) return MM.length = rM, !0
      }

      function sM(MM) {
        if (!MM || "object" !== typeof MM) throw Error(nM + "Object expected");
        var rM, iM, OM, SM = ["precision", 1, jM, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (rM = 0; rM < SM.length; rM += 3)
          if (void 0 !== (OM = MM[iM = SM[rM]])) {
            if (!(LM(OM) === OM && OM >= SM[rM + 1] && OM <= SM[rM + 2])) throw Error(QM + iM + ": " + OM);
            this[iM] = OM
          } if (void 0 !== (OM = MM[iM = "LN10"])) {
          if (OM != Math.LN10) throw Error(QM + iM + ": " + OM);
          this[iM] = new this(OM)
        }
        return this
      }
      aM = function MM(rM) {
        var iM, OM, SM;

        function jM(MM) {
          var rM = this;
          if (!(rM instanceof jM)) return new jM(MM);
          if (rM.constructor = jM, MM instanceof jM) return rM.s = MM.s, rM.e = MM.e, void(rM.d = (MM = MM.d) ? MM.slice() : MM);
          if ("number" === typeof MM) {
            if (0 * MM !== 0) throw Error(QM + MM);
            if (MM > 0) rM.s = 1;
            else {
              if (!(MM < 0)) return rM.s = 0, rM.e = 0, void(rM.d = [0]);
              MM = -MM, rM.s = -1
            }
            return MM === ~~MM && MM < 1e7 ? (rM.e = 0, void(rM.d = [MM])) : gM(rM, MM.toString())
          }
          if ("string" !== typeof MM) throw Error(QM + MM);
          if (45 === MM.charCodeAt(0) ? (MM = MM.slice(1), rM.s = -1) : rM.s = 1, !HM.test(MM)) throw Error(QM + MM);
          gM(rM, MM)
        }
        if (jM.prototype = yM, jM.ROUND_UP = 0, jM.ROUND_DOWN = 1, jM.ROUND_CEIL = 2, jM.ROUND_FLOOR = 3, jM.ROUND_HALF_UP = 4, jM.ROUND_HALF_DOWN = 5, jM.ROUND_HALF_EVEN = 6, jM.ROUND_HALF_CEIL = 7, jM.ROUND_HALF_FLOOR = 8, jM.clone = MM, jM.config = jM.set = sM, void 0 === rM && (rM = {}), rM)
          for (SM = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], iM = 0; iM < SM.length;) rM.hasOwnProperty(OM = SM[iM++]) || (rM[OM] = this[OM]);
        return jM.config(rM), jM
      }(aM), aM.default = aM.Decimal = aM, SM = new aM(1), void 0 === (OM = function() {
        return aM
      }.call(rM, iM, rM, MM)) || (MM.exports = OM)
    }()
  },
  6239: (MM, rM, iM) => {
    var OM = iM(5700)(iM(5527), "DataView");
    MM.exports = OM
  },
  5681: (MM, rM, iM) => {
    var OM = iM(5688),
      SM = iM(5738),
      jM = iM(5743),
      aM = iM(5747),
      PM = iM(5751);

    function nM(MM) {
      var rM = -1,
        iM = null == MM ? 0 : MM.length;
      for (this.clear(); ++rM < iM;) {
        var OM = MM[rM];
        this.set(OM[0], OM[1])
      }
    }
    nM.prototype.clear = OM, nM.prototype.delete = SM, nM.prototype.get = jM, nM.prototype.has = aM, nM.prototype.set = PM, MM.exports = nM
  },
  5755: (MM, rM, iM) => {
    var OM = iM(5761),
      SM = iM(5768),
      jM = iM(5785),
      aM = iM(5789),
      PM = iM(5797);

    function nM(MM) {
      var rM = -1,
        iM = null == MM ? 0 : MM.length;
      for (this.clear(); ++rM < iM;) {
        var OM = MM[rM];
        this.set(OM[0], OM[1])
      }
    }
    nM.prototype.clear = OM, nM.prototype.delete = SM, nM.prototype.get = jM, nM.prototype.has = aM, nM.prototype.set = PM, MM.exports = nM
  },
  5799: (MM, rM, iM) => {
    var OM = iM(5700)(iM(5527), "Map");
    MM.exports = OM
  },
  5668: (MM, rM, iM) => {
    var OM = iM(5674),
      SM = iM(5805),
      jM = iM(5818),
      aM = iM(5824),
      PM = iM(5828);

    function nM(MM) {
      var rM = -1,
        iM = null == MM ? 0 : MM.length;
      for (this.clear(); ++rM < iM;) {
        var OM = MM[rM];
        this.set(OM[0], OM[1])
      }
    }
    nM.prototype.clear = OM, nM.prototype.delete = SM, nM.prototype.get = jM, nM.prototype.has = aM, nM.prototype.set = PM, MM.exports = nM
  },
  6243: (MM, rM, iM) => {
    var OM = iM(5700)(iM(5527), "Promise");
    MM.exports = OM
  },
  6245: (MM, rM, iM) => {
    var OM = iM(5700)(iM(5527), "Set");
    MM.exports = OM
  },
  6064: (MM, rM, iM) => {
    var OM = iM(5668),
      SM = iM(6073),
      jM = iM(6077);

    function aM(MM) {
      var rM = -1,
        iM = null == MM ? 0 : MM.length;
      for (this.__data__ = new OM; ++rM < iM;) this.add(MM[rM])
    }
    aM.prototype.add = aM.prototype.push = SM, aM.prototype.has = jM, MM.exports = aM
  },
  6018: (MM, rM, iM) => {
    var OM = iM(5755),
      SM = iM(6021),
      jM = iM(6029),
      aM = iM(6031),
      PM = iM(6034),
      nM = iM(6039);

    function QM(MM) {
      var rM = this.__data__ = new OM(MM);
      this.size = rM.size
    }
    QM.prototype.clear = SM, QM.prototype.delete = jM, QM.prototype.get = aM, QM.prototype.has = PM, QM.prototype.set = nM, MM.exports = QM
  },
  5578: (MM, rM, iM) => {
    var OM = iM(5527).Symbol;
    MM.exports = OM
  },
  6096: (MM, rM, iM) => {
    var OM = iM(5527).Uint8Array;
    MM.exports = OM
  },
  6254: (MM, rM, iM) => {
    var OM = iM(5700)(iM(5527), "WeakMap");
    MM.exports = OM
  },
  6384: MM => {
    MM.exports = function(MM, rM, iM) {
      switch (iM.length) {
        case 0:
          return MM.call(rM);
        case 1:
          return MM.call(rM, iM[0]);
        case 2:
          return MM.call(rM, iM[0], iM[1]);
        case 3:
          return MM.call(rM, iM[0], iM[1], iM[2])
      }
      return MM.apply(rM, iM)
    }
  },
  6723: MM => {
    MM.exports = function(MM, rM) {
      for (var iM = -1, OM = null == MM ? 0 : MM.length; ++iM < OM;)
        if (!rM(MM[iM], iM, MM)) return !1;
      return !0
    }
  },
  6137: MM => {
    MM.exports = function(MM, rM) {
      for (var iM = -1, OM = null == MM ? 0 : MM.length, SM = 0, jM = []; ++iM < OM;) {
        var aM = MM[iM];
        rM(aM, iM, MM) && (jM[SM++] = aM)
      }
      return jM
    }
  },
  6469: (MM, rM, iM) => {
    var OM = iM(6475);
    MM.exports = function(MM, rM) {
      return !!(null == MM ? 0 : MM.length) && OM(MM, rM, 0) > -1
    }
  },
  6496: MM => {
    MM.exports = function(MM, rM, iM) {
      for (var OM = -1, SM = null == MM ? 0 : MM.length; ++OM < SM;)
        if (iM(rM, MM[OM])) return !0;
      return !1
    }
  },
  6162: (MM, rM, iM) => {
    var OM = iM(6170),
      SM = iM(5977),
      jM = iM(5610),
      aM = iM(6175),
      PM = iM(5940),
      nM = iM(6184),
      QM = Object.prototype.hasOwnProperty;
    MM.exports = function(MM, rM) {
      var iM = jM(MM),
        zM = !iM && SM(MM),
        LM = !iM && !zM && aM(MM),
        mM = !iM && !zM && !LM && nM(MM),
        HM = iM || zM || LM || mM,
        hM = HM ? OM(MM.length, String) : [],
        JM = hM.length;
      for (var dM in MM) !rM && !QM.call(MM, dM) || HM && ("length" == dM || LM && ("offset" == dM || "parent" == dM) || mM && ("buffer" == dM || "byteLength" == dM || "byteOffset" == dM) || PM(dM, JM)) || hM.push(dM);
      return hM
    }
  },
  5853: MM => {
    MM.exports = function(MM, rM) {
      for (var iM = -1, OM = null == MM ? 0 : MM.length, SM = Array(OM); ++iM < OM;) SM[iM] = rM(MM[iM], iM, MM);
      return SM
    }
  },
  5962: MM => {
    MM.exports = function(MM, rM) {
      for (var iM = -1, OM = rM.length, SM = MM.length; ++iM < OM;) MM[SM + iM] = rM[iM];
      return MM
    }
  },
  6084: MM => {
    MM.exports = function(MM, rM) {
      for (var iM = -1, OM = null == MM ? 0 : MM.length; ++iM < OM;)
        if (rM(MM[iM], iM, MM)) return !0;
      return !1
    }
  },
  6553: MM => {
    MM.exports = function(MM) {
      return MM.split("")
    }
  },
  5773: (MM, rM, iM) => {
    var OM = iM(5776);
    MM.exports = function(MM, rM) {
      for (var iM = MM.length; iM--;)
        if (OM(MM[iM][0], rM)) return iM;
      return -1
    }
  },
  6712: (MM, rM, iM) => {
    var OM = iM(6406);
    MM.exports = function(MM, rM, iM) {
      "__proto__" == rM && OM ? OM(MM, rM, {
        configurable: !0,
        enumerable: !0,
        value: iM,
        writable: !0
      }) : MM[rM] = iM
    }
  },
  6332: (MM, rM, iM) => {
    var OM = iM(6340),
      SM = iM(6354)(OM);
    MM.exports = SM
  },
  6731: (MM, rM, iM) => {
    var OM = iM(6332);
    MM.exports = function(MM, rM) {
      var iM = !0;
      return OM(MM, (function(MM, OM, SM) {
        return iM = !!rM(MM, OM, SM)
      })), iM
    }
  },
  6624: (MM, rM, iM) => {
    var OM = iM(5570);
    MM.exports = function(MM, rM, iM) {
      for (var SM = -1, jM = MM.length; ++SM < jM;) {
        var aM = MM[SM],
          PM = rM(aM);
        if (null != PM && (void 0 === nM ? PM === PM && !OM(PM) : iM(PM, nM))) var nM = PM,
          QM = aM
      }
      return QM
    }
  },
  6479: MM => {
    MM.exports = function(MM, rM, iM, OM) {
      for (var SM = MM.length, jM = iM + (OM ? 1 : -1); OM ? jM-- : ++jM < SM;)
        if (rM(MM[jM], jM, MM)) return jM;
      return -1
    }
  },
  5957: (MM, rM, iM) => {
    var OM = iM(5962),
      SM = iM(5969);
    MM.exports = function MM(rM, iM, jM, aM, PM) {
      var nM = -1,
        QM = rM.length;
      for (jM || (jM = SM), PM || (PM = []); ++nM < QM;) {
        var zM = rM[nM];
        iM > 0 && jM(zM) ? iM > 1 ? MM(zM, iM - 1, jM, aM, PM) : OM(PM, zM) : aM || (PM[PM.length] = zM)
      }
      return PM
    }
  },
  6347: (MM, rM, iM) => {
    var OM = iM(6350)();
    MM.exports = OM
  },
  6340: (MM, rM, iM) => {
    var OM = iM(6347),
      SM = iM(6154);
    MM.exports = function(MM, rM) {
      return MM && OM(MM, rM, SM)
    }
  },
  5627: (MM, rM, iM) => {
    var OM = iM(5632),
      SM = iM(5855);
    MM.exports = function(MM, rM) {
      for (var iM = 0, jM = (rM = OM(rM, MM)).length; null != MM && iM < jM;) MM = MM[SM(rM[iM++])];
      return iM && iM == jM ? MM : void 0
    }
  },
  6124: (MM, rM, iM) => {
    var OM = iM(5962),
      SM = iM(5610);
    MM.exports = function(MM, rM, iM) {
      var jM = rM(MM);
      return SM(MM) ? jM : OM(jM, iM(MM))
    }
  },
  5576: (MM, rM, iM) => {
    var OM = iM(5578),
      SM = iM(5581),
      jM = iM(5588),
      aM = OM ? OM.toStringTag : void 0;
    MM.exports = function(MM) {
      return null == MM ? void 0 === MM ? "[object Undefined]" : "[object Null]" : aM && aM in Object(MM) ? SM(MM) : jM(MM)
    }
  },
  6632: MM => {
    MM.exports = function(MM, rM) {
      return MM > rM
    }
  },
  6295: MM => {
    MM.exports = function(MM, rM) {
      return null != MM && rM in Object(MM)
    }
  },
  6475: (MM, rM, iM) => {
    var OM = iM(6479),
      SM = iM(6487),
      jM = iM(6493);
    MM.exports = function(MM, rM, iM) {
      return rM === rM ? jM(MM, rM, iM) : OM(MM, SM, iM)
    }
  },
  5985: (MM, rM, iM) => {
    var OM = iM(5576),
      SM = iM(5590);
    MM.exports = function(MM) {
      return SM(MM) && "[object Arguments]" == OM(MM)
    }
  },
  6045: (MM, rM, iM) => {
    var OM = iM(6053),
      SM = iM(5590);
    MM.exports = function MM(rM, iM, jM, aM, PM) {
      return rM === iM || (null == rM || null == iM || !SM(rM) && !SM(iM) ? rM !== rM && iM !== iM : OM(rM, iM, jM, aM, MM, PM))
    }
  },
  6053: (MM, rM, iM) => {
    var OM = iM(6018),
      SM = iM(6056),
      jM = iM(6091),
      aM = iM(6119),
      PM = iM(6231),
      nM = iM(5610),
      QM = iM(6175),
      zM = iM(6184),
      LM = "[object Arguments]",
      mM = "[object Array]",
      HM = "[object Object]",
      hM = Object.prototype.hasOwnProperty;
    MM.exports = function(MM, rM, iM, JM, dM, yM) {
      var lM = nM(MM),
        EM = nM(rM),
        UM = lM ? mM : PM(MM),
        GM = EM ? mM : PM(rM),
        CM = (UM = UM == LM ? HM : UM) == HM,
        eM = (GM = GM == LM ? HM : GM) == HM,
        bM = UM == GM;
      if (bM && QM(MM)) {
        if (!QM(rM)) return !1;
        lM = !0, CM = !1
      }
      if (bM && !CM) return yM || (yM = new OM), lM || zM(MM) ? SM(MM, rM, iM, JM, dM, yM) : jM(MM, rM, UM, iM, JM, dM, yM);
      if (!(1 & iM)) {
        var wM = CM && hM.call(MM, "__wrapped__"),
          tM = eM && hM.call(rM, "__wrapped__");
        if (wM || tM) {
          var gM = wM ? MM.value() : MM,
            uM = tM ? rM.value() : rM;
          return yM || (yM = new OM), dM(gM, uM, iM, JM, yM)
        }
      }
      return !!bM && (yM || (yM = new OM), aM(MM, rM, iM, JM, dM, yM))
    }
  },
  6012: (MM, rM, iM) => {
    var OM = iM(6018),
      SM = iM(6045);
    MM.exports = function(MM, rM, iM, jM) {
      var aM = iM.length,
        PM = aM,
        nM = !jM;
      if (null == MM) return !PM;
      for (MM = Object(MM); aM--;) {
        var QM = iM[aM];
        if (nM && QM[2] ? QM[1] !== MM[QM[0]] : !(QM[0] in MM)) return !1
      }
      for (; ++aM < PM;) {
        var zM = (QM = iM[aM])[0],
          LM = MM[zM],
          mM = QM[1];
        if (nM && QM[2]) {
          if (void 0 === LM && !(zM in MM)) return !1
        } else {
          var HM = new OM;
          if (jM) var hM = jM(LM, mM, zM, MM, rM, HM);
          if (!(void 0 === hM ? SM(mM, LM, 3, jM, HM) : hM)) return !1
        }
      }
      return !0
    }
  },
  6487: MM => {
    MM.exports = function(MM) {
      return MM !== MM
    }
  },
  5709: (MM, rM, iM) => {
    var OM = iM(5712),
      SM = iM(5717),
      jM = iM(5514),
      aM = iM(5724),
      PM = /^\[object .+?Constructor\]$/,
      nM = Function.prototype,
      QM = Object.prototype,
      zM = nM.toString,
      LM = QM.hasOwnProperty,
      mM = RegExp("^" + zM.call(LM).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    MM.exports = function(MM) {
      return !(!jM(MM) || SM(MM)) && (OM(MM) ? mM : PM).test(aM(MM))
    }
  },
  6191: (MM, rM, iM) => {
    var OM = iM(5576),
      SM = iM(5938),
      jM = iM(5590),
      aM = {};
    aM["[object Float32Array]"] = aM["[object Float64Array]"] = aM["[object Int8Array]"] = aM["[object Int16Array]"] = aM["[object Int32Array]"] = aM["[object Uint8Array]"] = aM["[object Uint8ClampedArray]"] = aM["[object Uint16Array]"] = aM["[object Uint32Array]"] = !0, aM["[object Arguments]"] = aM["[object Array]"] = aM["[object ArrayBuffer]"] = aM["[object Boolean]"] = aM["[object DataView]"] = aM["[object Date]"] = aM["[object Error]"] = aM["[object Function]"] = aM["[object Map]"] = aM["[object Number]"] = aM["[object Object]"] = aM["[object RegExp]"] = aM["[object Set]"] = aM["[object String]"] = aM["[object WeakMap]"] = !1, MM.exports = function(MM) {
      return jM(MM) && SM(MM.length) && !!aM[OM(MM)]
    }
  },
  5998: (MM, rM, iM) => {
    var OM = iM(6007),
      SM = iM(6286),
      jM = iM(6302),
      aM = iM(5610),
      PM = iM(6308);
    MM.exports = function(MM) {
      return "function" == typeof MM ? MM : null == MM ? jM : "object" == typeof MM ? aM(MM) ? SM(MM[0], MM[1]) : OM(MM) : PM(MM)
    }
  },
  6205: (MM, rM, iM) => {
    var OM = iM(6214),
      SM = iM(6217),
      jM = Object.prototype.hasOwnProperty;
    MM.exports = function(MM) {
      if (!OM(MM)) return SM(MM);
      var rM = [];
      for (var iM in Object(MM)) jM.call(MM, iM) && "constructor" != iM && rM.push(iM);
      return rM
    }
  },
  6640: MM => {
    MM.exports = function(MM, rM) {
      return MM < rM
    }
  },
  6327: (MM, rM, iM) => {
    var OM = iM(6332),
      SM = iM(5935);
    MM.exports = function(MM, rM) {
      var iM = -1,
        jM = SM(MM) ? Array(MM.length) : [];
      return OM(MM, (function(MM, OM, SM) {
        jM[++iM] = rM(MM, OM, SM)
      })), jM
    }
  },
  6007: (MM, rM, iM) => {
    var OM = iM(6012),
      SM = iM(6262),
      jM = iM(6277);
    MM.exports = function(MM) {
      var rM = SM(MM);
      return 1 == rM.length && rM[0][2] ? jM(rM[0][0], rM[0][1]) : function(iM) {
        return iM === MM || OM(iM, MM, rM)
      }
    }
  },
  6286: (MM, rM, iM) => {
    var OM = iM(6045),
      SM = iM(5625),
      jM = iM(6293),
      aM = iM(5641),
      PM = iM(6270),
      nM = iM(6277),
      QM = iM(5855);
    MM.exports = function(MM, rM) {
      return aM(MM) && PM(rM) ? nM(QM(MM), rM) : function(iM) {
        var aM = SM(iM, MM);
        return void 0 === aM && aM === rM ? jM(iM, MM) : OM(rM, aM, 3)
      }
    }
  },
  5989: (MM, rM, iM) => {
    var OM = iM(5853),
      SM = iM(5627),
      jM = iM(5998),
      aM = iM(6327),
      PM = iM(6356),
      nM = iM(6193),
      QM = iM(6363),
      zM = iM(6302),
      LM = iM(5610);
    MM.exports = function(MM, rM, iM) {
      rM = rM.length ? OM(rM, (function(MM) {
        return LM(MM) ? function(rM) {
          return SM(rM, 1 === MM.length ? MM[0] : MM)
        } : MM
      })) : [zM];
      var mM = -1;
      rM = OM(rM, nM(jM));
      var HM = aM(MM, (function(MM, iM, SM) {
        return {
          criteria: OM(rM, (function(rM) {
            return rM(MM)
          })),
          index: ++mM,
          value: MM
        }
      }));
      return PM(HM, (function(MM, rM) {
        return QM(MM, rM, iM)
      }))
    }
  },
  6313: MM => {
    MM.exports = function(MM) {
      return function(rM) {
        return null == rM ? void 0 : rM[MM]
      }
    }
  },
  6322: (MM, rM, iM) => {
    var OM = iM(5627);
    MM.exports = function(MM) {
      return function(rM) {
        return OM(rM, MM)
      }
    }
  },
  5923: MM => {
    var rM = Math.ceil,
      iM = Math.max;
    MM.exports = function(MM, OM, SM, jM) {
      for (var aM = -1, PM = iM(rM((OM - MM) / (SM || 1)), 0), nM = Array(PM); PM--;) nM[jM ? PM : ++aM] = MM, MM += SM;
      return nM
    }
  },
  6372: (MM, rM, iM) => {
    var OM = iM(6302),
      SM = iM(6377),
      jM = iM(6392);
    MM.exports = function(MM, rM) {
      return jM(SM(MM, rM, OM), MM + "")
    }
  },
  6400: (MM, rM, iM) => {
    var OM = iM(6403),
      SM = iM(6406),
      jM = iM(6302),
      aM = SM ? function(MM, rM) {
        return SM(MM, "toString", {
          configurable: !0,
          enumerable: !1,
          value: OM(rM),
          writable: !0
        })
      } : jM;
    MM.exports = aM
  },
  6541: MM => {
    MM.exports = function(MM, rM, iM) {
      var OM = -1,
        SM = MM.length;
      rM < 0 && (rM = -rM > SM ? 0 : SM + rM), (iM = iM > SM ? SM : iM) < 0 && (iM += SM), SM = rM > iM ? 0 : iM - rM >>> 0, rM >>>= 0;
      for (var jM = Array(SM); ++OM < SM;) jM[OM] = MM[OM + rM];
      return jM
    }
  },
  6798: (MM, rM, iM) => {
    var OM = iM(6332);
    MM.exports = function(MM, rM) {
      var iM;
      return OM(MM, (function(MM, OM, SM) {
        return !(iM = rM(MM, OM, SM))
      })), !!iM
    }
  },
  6356: MM => {
    MM.exports = function(MM, rM) {
      var iM = MM.length;
      for (MM.sort(rM); iM--;) MM[iM] = MM[iM].value;
      return MM
    }
  },
  6170: MM => {
    MM.exports = function(MM, rM) {
      for (var iM = -1, OM = Array(MM); ++iM < MM;) OM[iM] = rM(iM);
      return OM
    }
  },
  5846: (MM, rM, iM) => {
    var OM = iM(5578),
      SM = iM(5853),
      jM = iM(5610),
      aM = iM(5570),
      PM = OM ? OM.prototype : void 0,
      nM = PM ? PM.toString : void 0;
    MM.exports = function MM(rM) {
      if ("string" == typeof rM) return rM;
      if (jM(rM)) return SM(rM, MM) + "";
      if (aM(rM)) return nM ? nM.call(rM) : "";
      var iM = rM + "";
      return "0" == iM && 1 / rM == -1 / 0 ? "-0" : iM
    }
  },
  5552: (MM, rM, iM) => {
    var OM = iM(5561),
      SM = /^\s+/;
    MM.exports = function(MM) {
      return MM ? MM.slice(0, OM(MM) + 1).replace(SM, "") : MM
    }
  },
  6193: MM => {
    MM.exports = function(MM) {
      return function(rM) {
        return MM(rM)
      }
    }
  },
  6464: (MM, rM, iM) => {
    var OM = iM(6064),
      SM = iM(6469),
      jM = iM(6496),
      aM = iM(6089),
      PM = iM(6499),
      nM = iM(6112);
    MM.exports = function(MM, rM, iM) {
      var QM = -1,
        zM = SM,
        LM = MM.length,
        mM = !0,
        HM = [],
        hM = HM;
      if (iM) mM = !1, zM = jM;
      else if (LM >= 200) {
        var JM = rM ? null : PM(MM);
        if (JM) return nM(JM);
        mM = !1, zM = aM, hM = new OM
      } else hM = rM ? [] : HM;
      MM: for (; ++QM < LM;) {
        var dM = MM[QM],
          yM = rM ? rM(dM) : dM;
        if (dM = iM || 0 !== dM ? dM : 0, mM && yM === yM) {
          for (var lM = hM.length; lM--;)
            if (hM[lM] === yM) continue MM;
          rM && hM.push(yM), HM.push(dM)
        } else zM(hM, yM, iM) || (hM !== HM && hM.push(yM), HM.push(dM))
      }
      return HM
    }
  },
  6089: MM => {
    MM.exports = function(MM, rM) {
      return MM.has(rM)
    }
  },
  5632: (MM, rM, iM) => {
    var OM = iM(5610),
      SM = iM(5641),
      jM = iM(5644),
      aM = iM(5837);
    MM.exports = function(MM, rM) {
      return OM(MM) ? MM : SM(MM, rM) ? [MM] : jM(aM(MM))
    }
  },
  6536: (MM, rM, iM) => {
    var OM = iM(6541);
    MM.exports = function(MM, rM, iM) {
      var SM = MM.length;
      return iM = void 0 === iM ? SM : iM, !rM && iM >= SM ? MM : OM(MM, rM, iM)
    }
  },
  6369: (MM, rM, iM) => {
    var OM = iM(5570);
    MM.exports = function(MM, rM) {
      if (MM !== rM) {
        var iM = void 0 !== MM,
          SM = null === MM,
          jM = MM === MM,
          aM = OM(MM),
          PM = void 0 !== rM,
          nM = null === rM,
          QM = rM === rM,
          zM = OM(rM);
        if (!nM && !zM && !aM && MM > rM || aM && PM && QM && !nM && !zM || SM && PM && QM || !iM && QM || !jM) return 1;
        if (!SM && !aM && !zM && MM < rM || zM && iM && jM && !SM && !aM || nM && iM && jM || !PM && jM || !QM) return -1
      }
      return 0
    }
  },
  6363: (MM, rM, iM) => {
    var OM = iM(6369);
    MM.exports = function(MM, rM, iM) {
      for (var SM = -1, jM = MM.criteria, aM = rM.criteria, PM = jM.length, nM = iM.length; ++SM < PM;) {
        var QM = OM(jM[SM], aM[SM]);
        if (QM) return SM >= nM ? QM : QM * ("desc" == iM[SM] ? -1 : 1)
      }
      return MM.index - rM.index
    }
  },
  5720: (MM, rM, iM) => {
    var OM = iM(5527)["__core-js_shared__"];
    MM.exports = OM
  },
  6354: (MM, rM, iM) => {
    var OM = iM(5935);
    MM.exports = function(MM, rM) {
      return function(iM, SM) {
        if (null == iM) return iM;
        if (!OM(iM)) return MM(iM, SM);
        for (var jM = iM.length, aM = rM ? jM : -1, PM = Object(iM);
          (rM ? aM-- : ++aM < jM) && !1 !== SM(PM[aM], aM, PM););
        return iM
      }
    }
  },
  6350: MM => {
    MM.exports = function(MM) {
      return function(rM, iM, OM) {
        for (var SM = -1, jM = Object(rM), aM = OM(rM), PM = aM.length; PM--;) {
          var nM = aM[MM ? PM : ++SM];
          if (!1 === iM(jM[nM], nM, jM)) break
        }
        return rM
      }
    }
  },
  6530: (MM, rM, iM) => {
    var OM = iM(6536),
      SM = iM(6548),
      jM = iM(6550),
      aM = iM(5837);
    MM.exports = function(MM) {
      return function(rM) {
        rM = aM(rM);
        var iM = SM(rM) ? jM(rM) : void 0,
          PM = iM ? iM[0] : rM.charAt(0),
          nM = iM ? OM(iM, 1).join("") : rM.slice(1);
        return PM[MM]() + nM
      }
    }
  },
  6809: (MM, rM, iM) => {
    var OM = iM(5998),
      SM = iM(5935),
      jM = iM(6154);
    MM.exports = function(MM) {
      return function(rM, iM, aM) {
        var PM = Object(rM);
        if (!SM(rM)) {
          var nM = OM(iM, 3);
          rM = jM(rM), iM = function(MM) {
            return nM(PM[MM], MM, PM)
          }
        }
        var QM = MM(rM, iM, aM);
        return QM > -1 ? PM[nM ? rM[QM] : QM] : void 0
      }
    }
  },
  5914: (MM, rM, iM) => {
    var OM = iM(5923),
      SM = iM(5926),
      jM = iM(5948);
    MM.exports = function(MM) {
      return function(rM, iM, aM) {
        return aM && "number" != typeof aM && SM(rM, iM, aM) && (iM = aM = void 0), rM = jM(rM), void 0 === iM ? (iM = rM, rM = 0) : iM = jM(iM), aM = void 0 === aM ? rM < iM ? 1 : -1 : jM(aM), OM(rM, iM, aM, MM)
      }
    }
  },
  6499: (MM, rM, iM) => {
    var OM = iM(6245),
      SM = iM(6506),
      jM = iM(6112),
      aM = OM && 1 / jM(new OM([, -0]))[1] == 1 / 0 ? function(MM) {
        return new OM(MM)
      } : SM;
    MM.exports = aM
  },
  6406: (MM, rM, iM) => {
    var OM = iM(5700),
      SM = function() {
        try {
          var MM = OM(Object, "defineProperty");
          return MM({}, "", {}), MM
        } catch (rM) {}
      }();
    MM.exports = SM
  },
  6056: (MM, rM, iM) => {
    var OM = iM(6064),
      SM = iM(6084),
      jM = iM(6089);
    MM.exports = function(MM, rM, iM, aM, PM, nM) {
      var QM = 1 & iM,
        zM = MM.length,
        LM = rM.length;
      if (zM != LM && !(QM && LM > zM)) return !1;
      var mM = nM.get(MM),
        HM = nM.get(rM);
      if (mM && HM) return mM == rM && HM == MM;
      var hM = -1,
        JM = !0,
        dM = 2 & iM ? new OM : void 0;
      for (nM.set(MM, rM), nM.set(rM, MM); ++hM < zM;) {
        var yM = MM[hM],
          lM = rM[hM];
        if (aM) var EM = QM ? aM(lM, yM, hM, rM, MM, nM) : aM(yM, lM, hM, MM, rM, nM);
        if (void 0 !== EM) {
          if (EM) continue;
          JM = !1;
          break
        }
        if (dM) {
          if (!SM(rM, (function(MM, rM) {
              if (!jM(dM, rM) && (yM === MM || PM(yM, MM, iM, aM, nM))) return dM.push(rM)
            }))) {
            JM = !1;
            break
          }
        } else if (yM !== lM && !PM(yM, lM, iM, aM, nM)) {
          JM = !1;
          break
        }
      }
      return nM.delete(MM), nM.delete(rM), JM
    }
  },
  6091: (MM, rM, iM) => {
    var OM = iM(5578),
      SM = iM(6096),
      jM = iM(5776),
      aM = iM(6056),
      PM = iM(6105),
      nM = iM(6112),
      QM = OM ? OM.prototype : void 0,
      zM = QM ? QM.valueOf : void 0;
    MM.exports = function(MM, rM, iM, OM, QM, LM, mM) {
      switch (iM) {
        case "[object DataView]":
          if (MM.byteLength != rM.byteLength || MM.byteOffset != rM.byteOffset) return !1;
          MM = MM.buffer, rM = rM.buffer;
        case "[object ArrayBuffer]":
          return !(MM.byteLength != rM.byteLength || !LM(new SM(MM), new SM(rM)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return jM(+MM, +rM);
        case "[object Error]":
          return MM.name == rM.name && MM.message == rM.message;
        case "[object RegExp]":
        case "[object String]":
          return MM == rM + "";
        case "[object Map]":
          var HM = PM;
        case "[object Set]":
          var hM = 1 & OM;
          if (HM || (HM = nM), MM.size != rM.size && !hM) return !1;
          var JM = mM.get(MM);
          if (JM) return JM == rM;
          OM |= 2, mM.set(MM, rM);
          var dM = aM(HM(MM), HM(rM), OM, QM, LM, mM);
          return mM.delete(MM), dM;
        case "[object Symbol]":
          if (zM) return zM.call(MM) == zM.call(rM)
      }
      return !1
    }
  },
  6119: (MM, rM, iM) => {
    var OM = iM(6121),
      SM = Object.prototype.hasOwnProperty;
    MM.exports = function(MM, rM, iM, jM, aM, PM) {
      var nM = 1 & iM,
        QM = OM(MM),
        zM = QM.length;
      if (zM != OM(rM).length && !nM) return !1;
      for (var LM = zM; LM--;) {
        var mM = QM[LM];
        if (!(nM ? mM in rM : SM.call(rM, mM))) return !1
      }
      var HM = PM.get(MM),
        hM = PM.get(rM);
      if (HM && hM) return HM == rM && hM == MM;
      var JM = !0;
      PM.set(MM, rM), PM.set(rM, MM);
      for (var dM = nM; ++LM < zM;) {
        var yM = MM[mM = QM[LM]],
          lM = rM[mM];
        if (jM) var EM = nM ? jM(lM, yM, mM, rM, MM, PM) : jM(yM, lM, mM, MM, rM, PM);
        if (!(void 0 === EM ? yM === lM || aM(yM, lM, iM, jM, PM) : EM)) {
          JM = !1;
          break
        }
        dM || (dM = "constructor" == mM)
      }
      if (JM && !dM) {
        var UM = MM.constructor,
          GM = rM.constructor;
        UM == GM || !("constructor" in MM) || !("constructor" in rM) || "function" == typeof UM && UM instanceof UM && "function" == typeof GM && GM instanceof GM || (JM = !1)
      }
      return PM.delete(MM), PM.delete(rM), JM
    }
  },
  5536: (MM, rM, iM) => {
    var OM = "object" == typeof iM.g && iM.g && iM.g.Object === Object && iM.g;
    MM.exports = OM
  },
  6121: (MM, rM, iM) => {
    var OM = iM(6124),
      SM = iM(6132),
      jM = iM(6154);
    MM.exports = function(MM) {
      return OM(MM, jM, SM)
    }
  },
  5808: (MM, rM, iM) => {
    var OM = iM(5815);
    MM.exports = function(MM, rM) {
      var iM = MM.__data__;
      return OM(rM) ? iM["string" == typeof rM ? "string" : "hash"] : iM.map
    }
  },
  6262: (MM, rM, iM) => {
    var OM = iM(6270),
      SM = iM(6154);
    MM.exports = function(MM) {
      for (var rM = SM(MM), iM = rM.length; iM--;) {
        var jM = rM[iM],
          aM = MM[jM];
        rM[iM] = [jM, aM, OM(aM)]
      }
      return rM
    }
  },
  5700: (MM, rM, iM) => {
    var OM = iM(5709),
      SM = iM(5729);
    MM.exports = function(MM, rM) {
      var iM = SM(MM, rM);
      return OM(iM) ? iM : void 0
    }
  },
  6767: (MM, rM, iM) => {
    var OM = iM(6223)(Object.getPrototypeOf, Object);
    MM.exports = OM
  },
  5581: (MM, rM, iM) => {
    var OM = iM(5578),
      SM = Object.prototype,
      jM = SM.hasOwnProperty,
      aM = SM.toString,
      PM = OM ? OM.toStringTag : void 0;
    MM.exports = function(MM) {
      var rM = jM.call(MM, PM),
        iM = MM[PM];
      try {
        MM[PM] = void 0;
        var OM = !0
      } catch (nM) {}
      var SM = aM.call(MM);
      return OM && (rM ? MM[PM] = iM : delete MM[PM]), SM
    }
  },
  6132: (MM, rM, iM) => {
    var OM = iM(6137),
      SM = iM(6146),
      jM = Object.prototype.propertyIsEnumerable,
      aM = Object.getOwnPropertySymbols,
      PM = aM ? function(MM) {
        return null == MM ? [] : (MM = Object(MM), OM(aM(MM), (function(rM) {
          return jM.call(MM, rM)
        })))
      } : SM;
    MM.exports = PM
  },
  6231: (MM, rM, iM) => {
    var OM = iM(6239),
      SM = iM(5799),
      jM = iM(6243),
      aM = iM(6245),
      PM = iM(6254),
      nM = iM(5576),
      QM = iM(5724),
      zM = "[object Map]",
      LM = "[object Promise]",
      mM = "[object Set]",
      HM = "[object WeakMap]",
      hM = "[object DataView]",
      JM = QM(OM),
      dM = QM(SM),
      yM = QM(jM),
      lM = QM(aM),
      EM = QM(PM),
      UM = nM;
    (OM && UM(new OM(new ArrayBuffer(1))) != hM || SM && UM(new SM) != zM || jM && UM(jM.resolve()) != LM || aM && UM(new aM) != mM || PM && UM(new PM) != HM) && (UM = function(MM) {
      var rM = nM(MM),
        iM = "[object Object]" == rM ? MM.constructor : void 0,
        OM = iM ? QM(iM) : "";
      if (OM) switch (OM) {
        case JM:
          return hM;
        case dM:
          return zM;
        case yM:
          return LM;
        case lM:
          return mM;
        case EM:
          return HM
      }
      return rM
    }), MM.exports = UM
  },
  5729: MM => {
    MM.exports = function(MM, rM) {
      return null == MM ? void 0 : MM[rM]
    }
  },
  6298: (MM, rM, iM) => {
    var OM = iM(5632),
      SM = iM(5977),
      jM = iM(5610),
      aM = iM(5940),
      PM = iM(5938),
      nM = iM(5855);
    MM.exports = function(MM, rM, iM) {
      for (var QM = -1, zM = (rM = OM(rM, MM)).length, LM = !1; ++QM < zM;) {
        var mM = nM(rM[QM]);
        if (!(LM = null != MM && iM(MM, mM))) break;
        MM = MM[mM]
      }
      return LM || ++QM != zM ? LM : !!(zM = null == MM ? 0 : MM.length) && PM(zM) && aM(mM, zM) && (jM(MM) || SM(MM))
    }
  },
  6548: MM => {
    var rM = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    MM.exports = function(MM) {
      return rM.test(MM)
    }
  },
  5688: (MM, rM, iM) => {
    var OM = iM(5694);
    MM.exports = function() {
      this.__data__ = OM ? OM(null) : {}, this.size = 0
    }
  },
  5738: MM => {
    MM.exports = function(MM) {
      var rM = this.has(MM) && delete this.__data__[MM];
      return this.size -= rM ? 1 : 0, rM
    }
  },
  5743: (MM, rM, iM) => {
    var OM = iM(5694),
      SM = Object.prototype.hasOwnProperty;
    MM.exports = function(MM) {
      var rM = this.__data__;
      if (OM) {
        var iM = rM[MM];
        return "__lodash_hash_undefined__" === iM ? void 0 : iM
      }
      return SM.call(rM, MM) ? rM[MM] : void 0
    }
  },
  5747: (MM, rM, iM) => {
    var OM = iM(5694),
      SM = Object.prototype.hasOwnProperty;
    MM.exports = function(MM) {
      var rM = this.__data__;
      return OM ? void 0 !== rM[MM] : SM.call(rM, MM)
    }
  },
  5751: (MM, rM, iM) => {
    var OM = iM(5694);
    MM.exports = function(MM, rM) {
      var iM = this.__data__;
      return this.size += this.has(MM) ? 0 : 1, iM[MM] = OM && void 0 === rM ? "__lodash_hash_undefined__" : rM, this
    }
  },
  5969: (MM, rM, iM) => {
    var OM = iM(5578),
      SM = iM(5977),
      jM = iM(5610),
      aM = OM ? OM.isConcatSpreadable : void 0;
    MM.exports = function(MM) {
      return jM(MM) || SM(MM) || !!(aM && MM && MM[aM])
    }
  },
  5940: MM => {
    var rM = /^(?:0|[1-9]\d*)$/;
    MM.exports = function(MM, iM) {
      var OM = typeof MM;
      return !!(iM = null == iM ? 9007199254740991 : iM) && ("number" == OM || "symbol" != OM && rM.test(MM)) && MM > -1 && MM % 1 == 0 && MM < iM
    }
  },
  5926: (MM, rM, iM) => {
    var OM = iM(5776),
      SM = iM(5935),
      jM = iM(5940),
      aM = iM(5514);
    MM.exports = function(MM, rM, iM) {
      if (!aM(iM)) return !1;
      var PM = typeof rM;
      return !!("number" == PM ? SM(iM) && jM(rM, iM.length) : "string" == PM && rM in iM) && OM(iM[rM], MM)
    }
  },
  5641: (MM, rM, iM) => {
    var OM = iM(5610),
      SM = iM(5570),
      jM = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      aM = /^\w*$/;
    MM.exports = function(MM, rM) {
      if (OM(MM)) return !1;
      var iM = typeof MM;
      return !("number" != iM && "symbol" != iM && "boolean" != iM && null != MM && !SM(MM)) || (aM.test(MM) || !jM.test(MM) || null != rM && MM in Object(rM))
    }
  },
  5815: MM => {
    MM.exports = function(MM) {
      var rM = typeof MM;
      return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
    }
  },
  5717: (MM, rM, iM) => {
    var OM = iM(5720),
      SM = function() {
        var MM = /[^.]+$/.exec(OM && OM.keys && OM.keys.IE_PROTO || "");
        return MM ? "Symbol(src)_1." + MM : ""
      }();
    MM.exports = function(MM) {
      return !!SM && SM in MM
    }
  },
  6214: MM => {
    var rM = Object.prototype;
    MM.exports = function(MM) {
      var iM = MM && MM.constructor;
      return MM === ("function" == typeof iM && iM.prototype || rM)
    }
  },
  6270: (MM, rM, iM) => {
    var OM = iM(5514);
    MM.exports = function(MM) {
      return MM === MM && !OM(MM)
    }
  },
  5761: MM => {
    MM.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5768: (MM, rM, iM) => {
    var OM = iM(5773),
      SM = Array.prototype.splice;
    MM.exports = function(MM) {
      var rM = this.__data__,
        iM = OM(rM, MM);
      return !(iM < 0) && (iM == rM.length - 1 ? rM.pop() : SM.call(rM, iM, 1), --this.size, !0)
    }
  },
  5785: (MM, rM, iM) => {
    var OM = iM(5773);
    MM.exports = function(MM) {
      var rM = this.__data__,
        iM = OM(rM, MM);
      return iM < 0 ? void 0 : rM[iM][1]
    }
  },
  5789: (MM, rM, iM) => {
    var OM = iM(5773);
    MM.exports = function(MM) {
      return OM(this.__data__, MM) > -1
    }
  },
  5797: (MM, rM, iM) => {
    var OM = iM(5773);
    MM.exports = function(MM, rM) {
      var iM = this.__data__,
        SM = OM(iM, MM);
      return SM < 0 ? (++this.size, iM.push([MM, rM])) : iM[SM][1] = rM, this
    }
  },
  5674: (MM, rM, iM) => {
    var OM = iM(5681),
      SM = iM(5755),
      jM = iM(5799);
    MM.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new OM,
        map: new(jM || SM),
        string: new OM
      }
    }
  },
  5805: (MM, rM, iM) => {
    var OM = iM(5808);
    MM.exports = function(MM) {
      var rM = OM(this, MM).delete(MM);
      return this.size -= rM ? 1 : 0, rM
    }
  },
  5818: (MM, rM, iM) => {
    var OM = iM(5808);
    MM.exports = function(MM) {
      return OM(this, MM).get(MM)
    }
  },
  5824: (MM, rM, iM) => {
    var OM = iM(5808);
    MM.exports = function(MM) {
      return OM(this, MM).has(MM)
    }
  },
  5828: (MM, rM, iM) => {
    var OM = iM(5808);
    MM.exports = function(MM, rM) {
      var iM = OM(this, MM),
        SM = iM.size;
      return iM.set(MM, rM), this.size += iM.size == SM ? 0 : 1, this
    }
  },
  6105: MM => {
    MM.exports = function(MM) {
      var rM = -1,
        iM = Array(MM.size);
      return MM.forEach((function(MM, OM) {
        iM[++rM] = [OM, MM]
      })), iM
    }
  },
  6277: MM => {
    MM.exports = function(MM, rM) {
      return function(iM) {
        return null != iM && (iM[MM] === rM && (void 0 !== rM || MM in Object(iM)))
      }
    }
  },
  5652: (MM, rM, iM) => {
    var OM = iM(5661);
    MM.exports = function(MM) {
      var rM = OM(MM, (function(MM) {
          return 500 === iM.size && iM.clear(), MM
        })),
        iM = rM.cache;
      return rM
    }
  },
  5694: (MM, rM, iM) => {
    var OM = iM(5700)(Object, "create");
    MM.exports = OM
  },
  6217: (MM, rM, iM) => {
    var OM = iM(6223)(Object.keys, Object);
    MM.exports = OM
  },
  6196: (MM, rM, iM) => {
    MM = iM.nmd(MM);
    var OM = iM(5536),
      SM = rM && !rM.nodeType && rM,
      jM = SM && MM && !MM.nodeType && MM,
      aM = jM && jM.exports === SM && OM.process,
      PM = function() {
        try {
          var MM = jM && jM.require && jM.require("util").types;
          return MM || aM && aM.binding && aM.binding("util")
        } catch (rM) {}
      }();
    MM.exports = PM
  },
  5588: MM => {
    var rM = Object.prototype.toString;
    MM.exports = function(MM) {
      return rM.call(MM)
    }
  },
  6223: MM => {
    MM.exports = function(MM, rM) {
      return function(iM) {
        return MM(rM(iM))
      }
    }
  },
  6377: (MM, rM, iM) => {
    var OM = iM(6384),
      SM = Math.max;
    MM.exports = function(MM, rM, iM) {
      return rM = SM(void 0 === rM ? MM.length - 1 : rM, 0),
        function() {
          for (var jM = arguments, aM = -1, PM = SM(jM.length - rM, 0), nM = Array(PM); ++aM < PM;) nM[aM] = jM[rM + aM];
          aM = -1;
          for (var QM = Array(rM + 1); ++aM < rM;) QM[aM] = jM[aM];
          return QM[rM] = iM(nM), OM(MM, this, QM)
        }
    }
  },
  5527: (MM, rM, iM) => {
    var OM = iM(5536),
      SM = "object" == typeof self && self && self.Object === Object && self,
      jM = OM || SM || Function("return this")();
    MM.exports = jM
  },
  6073: MM => {
    MM.exports = function(MM) {
      return this.__data__.set(MM, "__lodash_hash_undefined__"), this
    }
  },
  6077: MM => {
    MM.exports = function(MM) {
      return this.__data__.has(MM)
    }
  },
  6112: MM => {
    MM.exports = function(MM) {
      var rM = -1,
        iM = Array(MM.size);
      return MM.forEach((function(MM) {
        iM[++rM] = MM
      })), iM
    }
  },
  6392: (MM, rM, iM) => {
    var OM = iM(6400),
      SM = iM(6414)(OM);
    MM.exports = SM
  },
  6414: MM => {
    var rM = Date.now;
    MM.exports = function(MM) {
      var iM = 0,
        OM = 0;
      return function() {
        var SM = rM(),
          jM = 16 - (SM - OM);
        if (OM = SM, jM > 0) {
          if (++iM >= 800) return arguments[0]
        } else iM = 0;
        return MM.apply(void 0, arguments)
      }
    }
  },
  6021: (MM, rM, iM) => {
    var OM = iM(5755);
    MM.exports = function() {
      this.__data__ = new OM, this.size = 0
    }
  },
  6029: MM => {
    MM.exports = function(MM) {
      var rM = this.__data__,
        iM = rM.delete(MM);
      return this.size = rM.size, iM
    }
  },
  6031: MM => {
    MM.exports = function(MM) {
      return this.__data__.get(MM)
    }
  },
  6034: MM => {
    MM.exports = function(MM) {
      return this.__data__.has(MM)
    }
  },
  6039: (MM, rM, iM) => {
    var OM = iM(5755),
      SM = iM(5799),
      jM = iM(5668);
    MM.exports = function(MM, rM) {
      var iM = this.__data__;
      if (iM instanceof OM) {
        var aM = iM.__data__;
        if (!SM || aM.length < 199) return aM.push([MM, rM]), this.size = ++iM.size, this;
        iM = this.__data__ = new jM(aM)
      }
      return iM.set(MM, rM), this.size = iM.size, this
    }
  },
  6493: MM => {
    MM.exports = function(MM, rM, iM) {
      for (var OM = iM - 1, SM = MM.length; ++OM < SM;)
        if (MM[OM] === rM) return OM;
      return -1
    }
  },
  6550: (MM, rM, iM) => {
    var OM = iM(6553),
      SM = iM(6548),
      jM = iM(6558);
    MM.exports = function(MM) {
      return SM(MM) ? jM(MM) : OM(MM)
    }
  },
  5644: (MM, rM, iM) => {
    var OM = iM(5652),
      SM = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      jM = /\\(\\)?/g,
      aM = OM((function(MM) {
        var rM = [];
        return 46 === MM.charCodeAt(0) && rM.push(""), MM.replace(SM, (function(MM, iM, OM, SM) {
          rM.push(OM ? SM.replace(jM, "$1") : iM || MM)
        })), rM
      }));
    MM.exports = aM
  },
  5855: (MM, rM, iM) => {
    var OM = iM(5570);
    MM.exports = function(MM) {
      if ("string" == typeof MM || OM(MM)) return MM;
      var rM = MM + "";
      return "0" == rM && 1 / MM == -1 / 0 ? "-0" : rM
    }
  },
  5724: MM => {
    var rM = Function.prototype.toString;
    MM.exports = function(MM) {
      if (null != MM) {
        try {
          return rM.call(MM)
        } catch (iM) {}
        try {
          return MM + ""
        } catch (iM) {}
      }
      return ""
    }
  },
  5561: MM => {
    var rM = /\s/;
    MM.exports = function(MM) {
      for (var iM = MM.length; iM-- && rM.test(MM.charAt(iM)););
      return iM
    }
  },
  6558: MM => {
    var rM = "\\ud800-\\udfff",
      iM = "[" + rM + "]",
      OM = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      SM = "\\ud83c[\\udffb-\\udfff]",
      jM = "[^" + rM + "]",
      aM = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      PM = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      nM = "(?:" + OM + "|" + SM + ")" + "?",
      QM = "[\\ufe0e\\ufe0f]?",
      zM = QM + nM + ("(?:\\u200d(?:" + [jM, aM, PM].join("|") + ")" + QM + nM + ")*"),
      LM = "(?:" + [jM + OM + "?", OM, aM, PM, iM].join("|") + ")",
      mM = RegExp(SM + "(?=" + SM + ")|" + LM + zM, "g");
    MM.exports = function(MM) {
      return MM.match(mM) || []
    }
  },
  6403: MM => {
    MM.exports = function(MM) {
      return function() {
        return MM
      }
    }
  },
  5509: (MM, rM, iM) => {
    var OM = iM(5514),
      SM = iM(5523),
      jM = iM(5543),
      aM = Math.max,
      PM = Math.min;
    MM.exports = function(MM, rM, iM) {
      var nM, QM, zM, LM, mM, HM, hM = 0,
        JM = !1,
        dM = !1,
        yM = !0;
      if ("function" != typeof MM) throw new TypeError("Expected a function");

      function lM(rM) {
        var iM = nM,
          OM = QM;
        return nM = QM = void 0, hM = rM, LM = MM.apply(OM, iM)
      }

      function EM(MM) {
        var iM = MM - HM;
        return void 0 === HM || iM >= rM || iM < 0 || dM && MM - hM >= zM
      }

      function UM() {
        var MM = SM();
        if (EM(MM)) return GM(MM);
        mM = setTimeout(UM, function(MM) {
          var iM = rM - (MM - HM);
          return dM ? PM(iM, zM - (MM - hM)) : iM
        }(MM))
      }

      function GM(MM) {
        return mM = void 0, yM && nM ? lM(MM) : (nM = QM = void 0, LM)
      }

      function CM() {
        var MM = SM(),
          iM = EM(MM);
        if (nM = arguments, QM = this, HM = MM, iM) {
          if (void 0 === mM) return function(MM) {
            return hM = MM, mM = setTimeout(UM, rM), JM ? lM(MM) : LM
          }(HM);
          if (dM) return clearTimeout(mM), mM = setTimeout(UM, rM), lM(HM)
        }
        return void 0 === mM && (mM = setTimeout(UM, rM)), LM
      }
      return rM = jM(rM) || 0, OM(iM) && (JM = !!iM.leading, zM = (dM = "maxWait" in iM) ? aM(jM(iM.maxWait) || 0, rM) : zM, yM = "trailing" in iM ? !!iM.trailing : yM), CM.cancel = function() {
        void 0 !== mM && clearTimeout(mM), hM = 0, nM = HM = QM = mM = void 0
      }, CM.flush = function() {
        return void 0 === mM ? LM : GM(SM())
      }, CM
    }
  },
  5776: MM => {
    MM.exports = function(MM, rM) {
      return MM === rM || MM !== MM && rM !== rM
    }
  },
  6716: (MM, rM, iM) => {
    var OM = iM(6723),
      SM = iM(6731),
      jM = iM(5998),
      aM = iM(5610),
      PM = iM(5926);
    MM.exports = function(MM, rM, iM) {
      var nM = aM(MM) ? OM : SM;
      return iM && PM(MM, rM, iM) && (rM = void 0), nM(MM, jM(rM, 3))
    }
  },
  6804: (MM, rM, iM) => {
    var OM = iM(6809)(iM(6812));
    MM.exports = OM
  },
  6812: (MM, rM, iM) => {
    var OM = iM(6479),
      SM = iM(5998),
      jM = iM(6818),
      aM = Math.max;
    MM.exports = function(MM, rM, iM) {
      var PM = null == MM ? 0 : MM.length;
      if (!PM) return -1;
      var nM = null == iM ? 0 : jM(iM);
      return nM < 0 && (nM = aM(PM + nM, 0)), OM(MM, SM(rM, 3), nM)
    }
  },
  6645: (MM, rM, iM) => {
    var OM = iM(5957),
      SM = iM(6654);
    MM.exports = function(MM, rM) {
      return OM(SM(MM, rM), 1)
    }
  },
  5625: (MM, rM, iM) => {
    var OM = iM(5627);
    MM.exports = function(MM, rM, iM) {
      var SM = null == MM ? void 0 : OM(MM, rM);
      return void 0 === SM ? iM : SM
    }
  },
  6293: (MM, rM, iM) => {
    var OM = iM(6295),
      SM = iM(6298);
    MM.exports = function(MM, rM) {
      return null != MM && SM(MM, rM, OM)
    }
  },
  6302: MM => {
    MM.exports = function(MM) {
      return MM
    }
  },
  5977: (MM, rM, iM) => {
    var OM = iM(5985),
      SM = iM(5590),
      jM = Object.prototype,
      aM = jM.hasOwnProperty,
      PM = jM.propertyIsEnumerable,
      nM = OM(function() {
        return arguments
      }()) ? OM : function(MM) {
        return SM(MM) && aM.call(MM, "callee") && !PM.call(MM, "callee")
      };
    MM.exports = nM
  },
  5610: MM => {
    var rM = Array.isArray;
    MM.exports = rM
  },
  5935: (MM, rM, iM) => {
    var OM = iM(5712),
      SM = iM(5938);
    MM.exports = function(MM) {
      return null != MM && SM(MM.length) && !OM(MM)
    }
  },
  6776: (MM, rM, iM) => {
    var OM = iM(5576),
      SM = iM(5590);
    MM.exports = function(MM) {
      return !0 === MM || !1 === MM || SM(MM) && "[object Boolean]" == OM(MM)
    }
  },
  6175: (MM, rM, iM) => {
    MM = iM.nmd(MM);
    var OM = iM(5527),
      SM = iM(6180),
      jM = rM && !rM.nodeType && rM,
      aM = jM && MM && !MM.nodeType && MM,
      PM = aM && aM.exports === jM ? OM.Vz : void 0,
      nM = (PM ? PM.isBuffer : void 0) || SM;
    MM.exports = nM
  },
  6657: (MM, rM, iM) => {
    var OM = iM(6045);
    MM.exports = function(MM, rM) {
      return OM(MM, rM)
    }
  },
  5712: (MM, rM, iM) => {
    var OM = iM(5576),
      SM = iM(5514);
    MM.exports = function(MM) {
      if (!SM(MM)) return !1;
      var rM = OM(MM);
      return "[object Function]" == rM || "[object GeneratorFunction]" == rM || "[object AsyncFunction]" == rM || "[object Proxy]" == rM
    }
  },
  5938: MM => {
    MM.exports = function(MM) {
      return "number" == typeof MM && MM > -1 && MM % 1 == 0 && MM <= 9007199254740991
    }
  },
  5618: (MM, rM, iM) => {
    var OM = iM(5620);
    MM.exports = function(MM) {
      return OM(MM) && MM != +MM
    }
  },
  5864: MM => {
    MM.exports = function(MM) {
      return null == MM
    }
  },
  5620: (MM, rM, iM) => {
    var OM = iM(5576),
      SM = iM(5590);
    MM.exports = function(MM) {
      return "number" == typeof MM || SM(MM) && "[object Number]" == OM(MM)
    }
  },
  5514: MM => {
    MM.exports = function(MM) {
      var rM = typeof MM;
      return null != MM && ("object" == rM || "function" == rM)
    }
  },
  5590: MM => {
    MM.exports = function(MM) {
      return null != MM && "object" == typeof MM
    }
  },
  6759: (MM, rM, iM) => {
    var OM = iM(5576),
      SM = iM(6767),
      jM = iM(5590),
      aM = Function.prototype,
      PM = Object.prototype,
      nM = aM.toString,
      QM = PM.hasOwnProperty,
      zM = nM.call(Object);
    MM.exports = function(MM) {
      if (!jM(MM) || "[object Object]" != OM(MM)) return !1;
      var rM = SM(MM);
      if (null === rM) return !0;
      var iM = QM.call(rM, "constructor") && rM.constructor;
      return "function" == typeof iM && iM instanceof iM && nM.call(iM) == zM
    }
  },
  5603: (MM, rM, iM) => {
    var OM = iM(5576),
      SM = iM(5610),
      jM = iM(5590);
    MM.exports = function(MM) {
      return "string" == typeof MM || !SM(MM) && jM(MM) && "[object String]" == OM(MM)
    }
  },
  5570: (MM, rM, iM) => {
    var OM = iM(5576),
      SM = iM(5590);
    MM.exports = function(MM) {
      return "symbol" == typeof MM || SM(MM) && "[object Symbol]" == OM(MM)
    }
  },
  6184: (MM, rM, iM) => {
    var OM = iM(6191),
      SM = iM(6193),
      jM = iM(6196),
      aM = jM && jM.isTypedArray,
      PM = aM ? SM(aM) : OM;
    MM.exports = PM
  },
  6154: (MM, rM, iM) => {
    var OM = iM(6162),
      SM = iM(6205),
      jM = iM(5935);
    MM.exports = function(MM) {
      return jM(MM) ? OM(MM) : SM(MM)
    }
  },
  6747: MM => {
    MM.exports = function(MM) {
      var rM = null == MM ? 0 : MM.length;
      return rM ? MM[rM - 1] : void 0
    }
  },
  6654: (MM, rM, iM) => {
    var OM = iM(5853),
      SM = iM(5998),
      jM = iM(6327),
      aM = iM(5610);
    MM.exports = function(MM, rM) {
      return (aM(MM) ? OM : jM)(MM, SM(rM, 3))
    }
  },
  6709: (MM, rM, iM) => {
    var OM = iM(6712),
      SM = iM(6340),
      jM = iM(5998);
    MM.exports = function(MM, rM) {
      var iM = {};
      return rM = jM(rM, 3), SM(MM, (function(MM, SM, jM) {
        OM(iM, SM, rM(MM, SM, jM))
      })), iM
    }
  },
  6622: (MM, rM, iM) => {
    var OM = iM(6624),
      SM = iM(6632),
      jM = iM(6302);
    MM.exports = function(MM) {
      return MM && MM.length ? OM(MM, jM, SM) : void 0
    }
  },
  5661: (MM, rM, iM) => {
    var OM = iM(5668);

    function SM(MM, rM) {
      if ("function" != typeof MM || null != rM && "function" != typeof rM) throw new TypeError("Expected a function");
      var iM = function() {
        var OM = arguments,
          SM = rM ? rM.apply(this, OM) : OM[0],
          jM = iM.cache;
        if (jM.has(SM)) return jM.get(SM);
        var aM = MM.apply(this, OM);
        return iM.cache = jM.set(SM, aM) || jM, aM
      };
      return iM.cache = new(SM.Cache || OM), iM
    }
    SM.Cache = OM, MM.exports = SM
  },
  6636: (MM, rM, iM) => {
    var OM = iM(6624),
      SM = iM(6640),
      jM = iM(6302);
    MM.exports = function(MM) {
      return MM && MM.length ? OM(MM, jM, SM) : void 0
    }
  },
  6506: MM => {
    MM.exports = function() {}
  },
  5523: (MM, rM, iM) => {
    var OM = iM(5527);
    MM.exports = function() {
      return OM.Date.now()
    }
  },
  6308: (MM, rM, iM) => {
    var OM = iM(6313),
      SM = iM(6322),
      jM = iM(5641),
      aM = iM(5855);
    MM.exports = function(MM) {
      return jM(MM) ? OM(aM(MM)) : SM(MM)
    }
  },
  5911: (MM, rM, iM) => {
    var OM = iM(5914)();
    MM.exports = OM
  },
  6795: (MM, rM, iM) => {
    var OM = iM(6084),
      SM = iM(5998),
      jM = iM(6798),
      aM = iM(5610),
      PM = iM(5926);
    MM.exports = function(MM, rM, iM) {
      var nM = aM(MM) ? OM : jM;
      return iM && PM(MM, rM, iM) && (rM = void 0), nM(MM, SM(rM, 3))
    }
  },
  5952: (MM, rM, iM) => {
    var OM = iM(5957),
      SM = iM(5989),
      jM = iM(6372),
      aM = iM(5926),
      PM = jM((function(MM, rM) {
        if (null == MM) return [];
        var iM = rM.length;
        return iM > 1 && aM(MM, rM[0], rM[1]) ? rM = [] : iM > 2 && aM(rM[0], rM[1], rM[2]) && (rM = [rM[0]]), SM(MM, OM(rM, 1), [])
      }));
    MM.exports = PM
  },
  6146: MM => {
    MM.exports = function() {
      return []
    }
  },
  6180: MM => {
    MM.exports = function() {
      return !1
    }
  },
  5500: (MM, rM, iM) => {
    var OM = iM(5509),
      SM = iM(5514);
    MM.exports = function(MM, rM, iM) {
      var jM = !0,
        aM = !0;
      if ("function" != typeof MM) throw new TypeError("Expected a function");
      return SM(iM) && (jM = "leading" in iM ? !!iM.leading : jM, aM = "trailing" in iM ? !!iM.trailing : aM), OM(MM, rM, {
        leading: jM,
        maxWait: rM,
        trailing: aM
      })
    }
  },
  5948: (MM, rM, iM) => {
    var OM = iM(5543),
      SM = 1 / 0;
    MM.exports = function(MM) {
      return MM ? (MM = OM(MM)) === SM || MM === -1 / 0 ? 17976931348623157e292 * (MM < 0 ? -1 : 1) : MM === MM ? MM : 0 : 0 === MM ? MM : 0
    }
  },
  6818: (MM, rM, iM) => {
    var OM = iM(5948);
    MM.exports = function(MM) {
      var rM = OM(MM),
        iM = rM % 1;
      return rM === rM ? iM ? rM - iM : rM : 0
    }
  },
  5543: (MM, rM, iM) => {
    var OM = iM(5552),
      SM = iM(5514),
      jM = iM(5570),
      aM = /^[-+]0x[0-9a-f]+$/i,
      PM = /^0b[01]+$/i,
      nM = /^0o[0-7]+$/i,
      QM = parseInt;
    MM.exports = function(MM) {
      if ("number" == typeof MM) return MM;
      if (jM(MM)) return NaN;
      if (SM(MM)) {
        var rM = "function" == typeof MM.valueOf ? MM.valueOf() : MM;
        MM = SM(rM) ? rM + "" : rM
      }
      if ("string" != typeof MM) return 0 === MM ? MM : +MM;
      MM = OM(MM);
      var iM = PM.test(MM);
      return iM || nM.test(MM) ? QM(MM.slice(2), iM ? 2 : 8) : aM.test(MM) ? NaN : +MM
    }
  },
  5837: (MM, rM, iM) => {
    var OM = iM(5846);
    MM.exports = function(MM) {
      return null == MM ? "" : OM(MM)
    }
  },
  6455: (MM, rM, iM) => {
    var OM = iM(5998),
      SM = iM(6464);
    MM.exports = function(MM, rM) {
      return MM && MM.length ? SM(MM, OM(rM, 2)) : []
    }
  },
  6523: (MM, rM, iM) => {
    var OM = iM(6530)("toUpperCase");
    MM.exports = OM
  },
  6582: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => Zr
    });
    var OM = iM(44),
      SM = iM(5368),
      jM = iM.n(SM);
    const {
      getOwnPropertyNames: aM,
      getOwnPropertySymbols: PM
    } = Object, {
      hasOwnProperty: nM
    } = Object.prototype;

    function QM(MM, rM) {
      return function(iM, OM, SM) {
        return MM(iM, OM, SM) && rM(iM, OM, SM)
      }
    }

    function zM(MM) {
      return function(rM, iM, OM) {
        if (!rM || !iM || "object" !== typeof rM || "object" !== typeof iM) return MM(rM, iM, OM);
        const {
          cache: SM
        } = OM, jM = SM.get(rM), aM = SM.get(iM);
        if (jM && aM) return jM === iM && aM === rM;
        SM.set(rM, iM), SM.set(iM, rM);
        const PM = MM(rM, iM, OM);
        return SM.delete(rM), SM.delete(iM), PM
      }
    }

    function LM(MM) {
      return aM(MM).concat(PM(MM))
    }
    const mM = Object.hasOwn || ((MM, rM) => nM.call(MM, rM));

    function HM(MM, rM) {
      return MM === rM || !MM && !rM && MM !== MM && rM !== rM
    }
    const {
      getOwnPropertyDescriptor: hM,
      keys: JM
    } = Object;

    function dM(MM, rM) {
      return MM.byteLength === rM.byteLength && RM(new Uint8Array(MM), new Uint8Array(rM))
    }

    function yM(MM, rM, iM) {
      let OM = MM.length;
      if (rM.length !== OM) return !1;
      for (; OM-- > 0;)
        if (!iM.equals(MM[OM], rM[OM], OM, OM, MM, rM, iM)) return !1;
      return !0
    }

    function lM(MM, rM) {
      return MM.byteLength === rM.byteLength && RM(new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength), new Uint8Array(rM.buffer, rM.byteOffset, rM.byteLength))
    }

    function EM(MM, rM) {
      return HM(MM.getTime(), rM.getTime())
    }

    function UM(MM, rM) {
      return MM.name === rM.name && MM.message === rM.message && MM.cause === rM.cause && MM.stack === rM.stack
    }

    function GM(MM, rM) {
      return MM === rM
    }

    function CM(MM, rM, iM) {
      const OM = MM.size;
      if (OM !== rM.size) return !1;
      if (!OM) return !0;
      const SM = new Array(OM),
        jM = MM.entries();
      let aM, PM, nM = 0;
      for (;
        (aM = jM.next()) && !aM.done;) {
        const OM = rM.entries();
        let jM = !1,
          QM = 0;
        for (;
          (PM = OM.next()) && !PM.done;) {
          if (SM[QM]) {
            QM++;
            continue
          }
          const OM = aM.value,
            zM = PM.value;
          if (iM.equals(OM[0], zM[0], nM, QM, MM, rM, iM) && iM.equals(OM[1], zM[1], OM[0], zM[0], MM, rM, iM)) {
            jM = SM[QM] = !0;
            break
          }
          QM++
        }
        if (!jM) return !1;
        nM++
      }
      return !0
    }
    const eM = HM;

    function bM(MM, rM, iM) {
      const OM = JM(MM);
      let SM = OM.length;
      if (JM(rM).length !== SM) return !1;
      for (; SM-- > 0;)
        if (!WM(MM, rM, iM, OM[SM])) return !1;
      return !0
    }

    function wM(MM, rM, iM) {
      const OM = LM(MM);
      let SM, jM, aM, PM = OM.length;
      if (LM(rM).length !== PM) return !1;
      for (; PM-- > 0;) {
        if (SM = OM[PM], !WM(MM, rM, iM, SM)) return !1;
        if (jM = hM(MM, SM), aM = hM(rM, SM), (jM || aM) && (!jM || !aM || jM.configurable !== aM.configurable || jM.enumerable !== aM.enumerable || jM.writable !== aM.writable)) return !1
      }
      return !0
    }

    function tM(MM, rM) {
      return HM(MM.valueOf(), rM.valueOf())
    }

    function gM(MM, rM) {
      return MM.source === rM.source && MM.flags === rM.flags
    }

    function uM(MM, rM, iM) {
      const OM = MM.size;
      if (OM !== rM.size) return !1;
      if (!OM) return !0;
      const SM = new Array(OM),
        jM = MM.values();
      let aM, PM;
      for (;
        (aM = jM.next()) && !aM.done;) {
        const OM = rM.values();
        let jM = !1,
          nM = 0;
        for (;
          (PM = OM.next()) && !PM.done;) {
          if (!SM[nM] && iM.equals(aM.value, PM.value, aM.value, PM.value, MM, rM, iM)) {
            jM = SM[nM] = !0;
            break
          }
          nM++
        }
        if (!jM) return !1
      }
      return !0
    }

    function RM(MM, rM) {
      let iM = MM.byteLength;
      if (rM.byteLength !== iM || MM.byteOffset !== rM.byteOffset) return !1;
      for (; iM-- > 0;)
        if (MM[iM] !== rM[iM]) return !1;
      return !0
    }

    function pM(MM, rM) {
      return MM.hostname === rM.hostname && MM.pathname === rM.pathname && MM.protocol === rM.protocol && MM.port === rM.port && MM.hash === rM.hash && MM.username === rM.username && MM.password === rM.password
    }

    function WM(MM, rM, iM, OM) {
      return !("_owner" !== OM && "__o" !== OM && "__v" !== OM || !MM.$$typeof && !rM.$$typeof) || mM(rM, OM) && iM.equals(MM[OM], rM[OM], OM, OM, MM, rM, iM)
    }
    const sM = {
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
      DM = Object.prototype.toString;

    function kM(MM) {
      let {
        areArrayBuffersEqual: rM,
        areArraysEqual: iM,
        areDataViewsEqual: OM,
        areDatesEqual: SM,
        areErrorsEqual: jM,
        areFunctionsEqual: aM,
        areMapsEqual: PM,
        areNumbersEqual: nM,
        areObjectsEqual: QM,
        arePrimitiveWrappersEqual: zM,
        areRegExpsEqual: LM,
        areSetsEqual: mM,
        areTypedArraysEqual: HM,
        areUrlsEqual: hM,
        unknownTagComparators: JM
      } = MM;
      return function(MM, dM, yM) {
        if (MM === dM) return !0;
        if (null == MM || null == dM) return !1;
        const lM = typeof MM;
        if (lM !== typeof dM) return !1;
        if ("object" !== lM) return "number" === lM ? nM(MM, dM, yM) : "function" === lM && aM(MM, dM, yM);
        const EM = MM.constructor;
        if (EM !== dM.constructor) return !1;
        if (EM === Object) return QM(MM, dM, yM);
        if (Array.isArray(MM)) return iM(MM, dM, yM);
        if (EM === Date) return SM(MM, dM, yM);
        if (EM === RegExp) return LM(MM, dM, yM);
        if (EM === Map) return PM(MM, dM, yM);
        if (EM === Set) return mM(MM, dM, yM);
        const UM = DM.call(MM);
        if ("[object Date]" === UM) return SM(MM, dM, yM);
        if ("[object RegExp]" === UM) return LM(MM, dM, yM);
        if ("[object Map]" === UM) return PM(MM, dM, yM);
        if ("[object Set]" === UM) return mM(MM, dM, yM);
        if ("[object Object]" === UM) return "function" !== typeof MM.then && "function" !== typeof dM.then && QM(MM, dM, yM);
        if ("[object URL]" === UM) return hM(MM, dM, yM);
        if ("[object Error]" === UM) return jM(MM, dM, yM);
        if ("[object Arguments]" === UM) return QM(MM, dM, yM);
        if (sM[UM]) return HM(MM, dM, yM);
        if ("[object ArrayBuffer]" === UM) return rM(MM, dM, yM);
        if ("[object DataView]" === UM) return OM(MM, dM, yM);
        if ("[object Boolean]" === UM || "[object Number]" === UM || "[object String]" === UM) return zM(MM, dM, yM);
        if (JM) {
          let rM = JM[UM];
          if (!rM) {
            const iM = null != (GM = MM) ? GM[Symbol.toStringTag] : void 0;
            iM && (rM = JM[iM])
          }
          if (rM) return rM(MM, dM, yM)
        }
        var GM;
        return !1
      }
    }
    const ZM = oM();
    oM({
      strict: !0
    }), oM({
      circular: !0
    }), oM({
      circular: !0,
      strict: !0
    }), oM({
      createInternalComparator: () => HM
    }), oM({
      strict: !0,
      createInternalComparator: () => HM
    }), oM({
      circular: !0,
      createInternalComparator: () => HM
    }), oM({
      circular: !0,
      createInternalComparator: () => HM,
      strict: !0
    });

    function oM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: rM = !1,
        createInternalComparator: iM,
        createState: OM,
        strict: SM = !1
      } = MM, jM = function(MM) {
        let {
          circular: rM,
          createCustomConfig: iM,
          strict: OM
        } = MM, SM = {
          areArrayBuffersEqual: dM,
          areArraysEqual: OM ? wM : yM,
          areDataViewsEqual: lM,
          areDatesEqual: EM,
          areErrorsEqual: UM,
          areFunctionsEqual: GM,
          areMapsEqual: OM ? QM(CM, wM) : CM,
          areNumbersEqual: eM,
          areObjectsEqual: OM ? wM : bM,
          arePrimitiveWrappersEqual: tM,
          areRegExpsEqual: gM,
          areSetsEqual: OM ? QM(uM, wM) : uM,
          areTypedArraysEqual: OM ? QM(RM, wM) : RM,
          areUrlsEqual: pM,
          unknownTagComparators: void 0
        };
        if (iM && (SM = Object.assign({}, SM, iM(SM))), rM) {
          const MM = zM(SM.areArraysEqual),
            rM = zM(SM.areMapsEqual),
            iM = zM(SM.areObjectsEqual),
            OM = zM(SM.areSetsEqual);
          SM = Object.assign({}, SM, {
            areArraysEqual: MM,
            areMapsEqual: rM,
            areObjectsEqual: iM,
            areSetsEqual: OM
          })
        }
        return SM
      }(MM), aM = kM(jM);
      var PM;
      return function(MM) {
        let {
          circular: rM,
          comparator: iM,
          createState: OM,
          equals: SM,
          strict: jM
        } = MM;
        if (OM) return function(MM, aM) {
          const {
            cache: PM = (rM ? new WeakMap : void 0),
            meta: nM
          } = OM();
          return iM(MM, aM, {
            cache: PM,
            equals: SM,
            meta: nM,
            strict: jM
          })
        };
        if (rM) return function(MM, rM) {
          return iM(MM, rM, {
            cache: new WeakMap,
            equals: SM,
            meta: void 0,
            strict: jM
          })
        };
        const aM = {
          cache: void 0,
          equals: SM,
          meta: void 0,
          strict: jM
        };
        return function(MM, rM) {
          return iM(MM, rM, aM)
        }
      }({
        circular: rM,
        comparator: aM,
        createState: OM,
        equals: iM ? iM(aM) : (PM = aM, function(MM, rM, iM, OM, SM, jM, aM) {
          return PM(MM, rM, aM)
        }),
        strict: SM
      })
    }

    function fM(MM) {
      var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        iM = -1;
      requestAnimationFrame((function OM(SM) {
        iM < 0 && (iM = SM), SM - iM > rM ? (MM(SM), iM = -1) : function(MM) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(MM)
        }(OM)
      }))
    }

    function YM(MM) {
      return YM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, YM(MM)
    }

    function NM(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return AM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return AM(MM, rM)
      }(MM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function xM() {
      var MM = function() {
          return null
        },
        rM = !1,
        iM = function iM(OM) {
          if (!rM) {
            if (Array.isArray(OM)) {
              if (!OM.length) return;
              var SM = NM(OM),
                jM = SM[0],
                aM = SM.slice(1);
              return "number" === typeof jM ? void fM(iM.bind(null, aM), jM) : (iM(jM), void fM(iM.bind(null, aM)))
            }
            "object" === YM(OM) && MM(OM), "function" === typeof OM && OM()
          }
        };
      return {
        stop: function() {
          rM = !0
        },
        start: function(MM) {
          rM = !1, iM(MM)
        },
        subscribe: function(rM) {
          return MM = rM,
            function() {
              MM = function() {
                return null
              }
            }
        }
      }
    }

    function vM(MM) {
      return vM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, vM(MM)
    }

    function FM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function BM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? FM(Object(iM), !0).forEach((function(rM) {
          XM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : FM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function XM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" !== vM(MM) || null === MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" !== vM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" === vM(rM) ? rM : String(rM)
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var IM = function(MM) {
        return MM
      },
      KM = function(MM, rM) {
        return Object.keys(rM).reduce((function(iM, OM) {
          return BM(BM({}, iM), {}, XM({}, OM, MM(OM, rM[OM])))
        }), {})
      },
      qM = function(MM, rM, iM) {
        return MM.map((function(MM) {
          return "".concat((OM = MM, OM.replace(/([A-Z])/g, (function(MM) {
            return "-".concat(MM.toLowerCase())
          }))), " ").concat(rM, "ms ").concat(iM);
          var OM
        })).join(",")
      };

    function TM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || cM(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VM(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return Mr(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || cM(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cM(MM, rM) {
      if (MM) {
        if ("string" === typeof MM) return Mr(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? Mr(MM, rM) : void 0
      }
    }

    function Mr(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }
    var rr = 1e-4,
      ir = function(MM, rM) {
        return [0, 3 * MM, 3 * rM - 6 * MM, 3 * MM - 3 * rM + 1]
      },
      Or = function(MM, rM) {
        return MM.map((function(MM, iM) {
          return MM * Math.pow(rM, iM)
        })).reduce((function(MM, rM) {
          return MM + rM
        }))
      },
      Sr = function(MM, rM) {
        return function(iM) {
          var OM = ir(MM, rM);
          return Or(OM, iM)
        }
      },
      jr = function() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        var OM = rM[0],
          SM = rM[1],
          jM = rM[2],
          aM = rM[3];
        if (1 === rM.length) switch (rM[0]) {
          case "linear":
            OM = 0, SM = 0, jM = 1, aM = 1;
            break;
          case "ease":
            OM = .25, SM = .1, jM = .25, aM = 1;
            break;
          case "ease-in":
            OM = .42, SM = 0, jM = 1, aM = 1;
            break;
          case "ease-out":
            OM = .42, SM = 0, jM = .58, aM = 1;
            break;
          case "ease-in-out":
            OM = 0, SM = 0, jM = .58, aM = 1;
            break;
          default:
            var PM = rM[0].split("(");
            if ("cubic-bezier" === PM[0] && 4 === PM[1].split(")")[0].split(",").length) {
              var nM = TM(PM[1].split(")")[0].split(",").map((function(MM) {
                return parseFloat(MM)
              })), 4);
              OM = nM[0], SM = nM[1], jM = nM[2], aM = nM[3]
            }
        } [OM, jM, SM, aM].every((function(MM) {
          return "number" === typeof MM && MM >= 0 && MM <= 1
        }));
        var QM, zM, LM = Sr(OM, jM),
          mM = Sr(SM, aM),
          HM = (QM = OM, zM = jM, function(MM) {
            var rM = ir(QM, zM),
              iM = [].concat(VM(rM.map((function(MM, rM) {
                return MM * rM
              })).slice(1)), [0]);
            return Or(iM, MM)
          }),
          hM = function(MM) {
            for (var rM, iM = MM > 1 ? 1 : MM, OM = iM, SM = 0; SM < 8; ++SM) {
              var jM = LM(OM) - iM,
                aM = HM(OM);
              if (Math.abs(jM - iM) < rr || aM < rr) return mM(OM);
              OM = (rM = OM - jM / aM) > 1 ? 1 : rM < 0 ? 0 : rM
            }
            return mM(OM)
          };
        return hM.isStepper = !1, hM
      },
      ar = function() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        var OM = rM[0];
        if ("string" === typeof OM) switch (OM) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return jr(OM);
          case "spring":
            return function() {
              var MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                rM = MM.stiff,
                iM = void 0 === rM ? 100 : rM,
                OM = MM.damping,
                SM = void 0 === OM ? 8 : OM,
                jM = MM.dt,
                aM = void 0 === jM ? 17 : jM,
                PM = function(MM, rM, OM) {
                  var jM = OM + (-(MM - rM) * iM - OM * SM) * aM / 1e3,
                    PM = OM * aM / 1e3 + MM;
                  return Math.abs(PM - rM) < rr && Math.abs(jM) < rr ? [rM, 0] : [PM, jM]
                };
              return PM.isStepper = !0, PM.dt = aM, PM
            }();
          default:
            if ("cubic-bezier" === OM.split("(")[0]) return jr(OM)
        }
        return "function" === typeof OM ? OM : null
      };

    function Pr(MM) {
      return Pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, Pr(MM)
    }

    function nr(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return hr(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || Hr(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qr(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function zr(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? Qr(Object(iM), !0).forEach((function(rM) {
          Lr(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : Qr(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function Lr(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" !== Pr(MM) || null === MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" !== Pr(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" === Pr(rM) ? rM : String(rM)
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function mr(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || Hr(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hr(MM, rM) {
      if (MM) {
        if ("string" === typeof MM) return hr(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? hr(MM, rM) : void 0
      }
    }

    function hr(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }
    var Jr = function(MM, rM, iM) {
        return MM + (rM - MM) * iM
      },
      dr = function(MM) {
        return MM.from !== MM.to
      },
      yr = function MM(rM, iM, OM) {
        var SM = KM((function(MM, iM) {
          if (dr(iM)) {
            var OM = mr(rM(iM.from, iM.to, iM.dd), 2),
              SM = OM[0],
              jM = OM[1];
            return zr(zr({}, iM), {}, {
              from: SM,
              dd: jM
            })
          }
          return iM
        }), iM);
        return OM < 1 ? KM((function(MM, rM) {
          return dr(rM) ? zr(zr({}, rM), {}, {
            dd: Jr(rM.dd, SM[MM].dd, OM),
            from: Jr(rM.from, SM[MM].from, OM)
          }) : rM
        }), iM) : MM(rM, SM, OM - 1)
      };
    const lr = function(MM, rM, iM, OM, SM) {
      var jM, aM, PM, nM, QM = (jM = MM, aM = rM, [Object.keys(jM), Object.keys(aM)].reduce((function(MM, rM) {
          return MM.filter((function(MM) {
            return rM.includes(MM)
          }))
        }))),
        zM = QM.reduce((function(iM, OM) {
          return zr(zr({}, iM), {}, Lr({}, OM, [MM[OM], rM[OM]]))
        }), {}),
        LM = QM.reduce((function(iM, OM) {
          return zr(zr({}, iM), {}, Lr({}, OM, {
            from: MM[OM],
            dd: 0,
            to: rM[OM]
          }))
        }), {}),
        mM = -1,
        HM = function() {
          return null
        };
      return HM = iM.isStepper ? function(OM) {
          PM || (PM = OM);
          var jM = (OM - PM) / iM.dt;
          LM = yr(iM, LM, jM), SM(zr(zr(zr({}, MM), rM), KM((function(MM, rM) {
            return rM.from
          }), LM))), PM = OM, Object.values(LM).filter(dr).length && (mM = requestAnimationFrame(HM))
        } : function(jM) {
          nM || (nM = jM);
          var aM = (jM - nM) / OM,
            PM = KM((function(MM, rM) {
              return Jr.apply(void 0, nr(rM).concat([iM(aM)]))
            }), zM);
          if (SM(zr(zr(zr({}, MM), rM), PM)), aM < 1) mM = requestAnimationFrame(HM);
          else {
            var QM = KM((function(MM, rM) {
              return Jr.apply(void 0, nr(rM).concat([iM(1)]))
            }), zM);
            SM(zr(zr(zr({}, MM), rM), QM))
          }
        },
        function() {
          return requestAnimationFrame(HM),
            function() {
              cancelAnimationFrame(mM)
            }
        }
    };

    function Er(MM) {
      return Er = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, Er(MM)
    }
    var Ur = ["children", "JL", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function Gr(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM, OM, SM = {},
          jM = Object.keys(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || (SM[iM] = MM[iM]);
        return SM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function Cr(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return er(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return er(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return er(MM, rM)
      }(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function er(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function br(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function wr(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? br(Object(iM), !0).forEach((function(rM) {
          tr(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : br(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function tr(MM, rM, iM) {
      return (rM = ur(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function gr(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, ur(OM.key), OM)
      }
    }

    function ur(MM) {
      var rM = function(MM, rM) {
        if ("object" !== Er(MM) || null === MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" !== Er(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" === Er(rM) ? rM : String(rM)
    }

    function Rr(MM, rM) {
      return Rr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, Rr(MM, rM)
    }

    function pr(MM) {
      var rM = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (MM) {
          return !1
        }
      }();
      return function() {
        var iM, OM = Dr(MM);
        if (rM) {
          var SM = Dr(this).constructor;
          iM = Reflect.construct(OM, arguments, SM)
        } else iM = OM.apply(this, arguments);
        return Wr(this, iM)
      }
    }

    function Wr(MM, rM) {
      if (rM && ("object" === Er(rM) || "function" === typeof rM)) return rM;
      if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
      return sr(MM)
    }

    function sr(MM) {
      if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return MM
    }

    function Dr(MM) {
      return Dr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, Dr(MM)
    }
    var kr = function(MM) {
      ! function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && Rr(MM, rM)
      }(aM, MM);
      var rM, iM, SM, jM = pr(aM);

      function aM(MM, rM) {
        var iM;
        ! function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, aM);
        var OM = (iM = jM.call(this, MM, rM)).props,
          SM = OM.isActive,
          PM = OM.attributeName,
          nM = OM.from,
          QM = OM.to,
          zM = OM.steps,
          LM = OM.children,
          mM = OM.duration;
        if (iM.handleStyleChange = iM.handleStyleChange.bind(sr(iM)), iM.changeStyle = iM.changeStyle.bind(sr(iM)), !SM || mM <= 0) return iM.state = {
          style: {}
        }, "function" === typeof LM && (iM.state = {
          style: QM
        }), Wr(iM);
        if (zM && zM.length) iM.state = {
          style: zM[0].style
        };
        else if (nM) {
          if ("function" === typeof LM) return iM.state = {
            style: nM
          }, Wr(iM);
          iM.state = {
            style: PM ? tr({}, PM, nM) : nM
          }
        } else iM.state = {
          style: {}
        };
        return iM
      }
      return rM = aM, (iM = [{
        key: "componentDidMount",
        value: function() {
          var MM = this.props,
            rM = MM.isActive,
            iM = MM.canBegin;
          this.mounted = !0, rM && iM && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(MM) {
          var rM = this.props,
            iM = rM.isActive,
            OM = rM.canBegin,
            SM = rM.attributeName,
            jM = rM.shouldReAnimate,
            aM = rM.to,
            PM = rM.from,
            nM = this.state.style;
          if (OM)
            if (iM) {
              if (!(ZM(MM.to, aM) && MM.canBegin && MM.isActive)) {
                var QM = !MM.canBegin || !MM.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var zM = QM || jM ? PM : MM.to;
                if (this.state && nM) {
                  var LM = {
                    style: SM ? tr({}, SM, zM) : zM
                  };
                  (SM && nM[SM] !== zM || !SM && nM !== zM) && this.setState(LM)
                }
                this.runAnimation(wr(wr({}, this.props), {}, {
                  from: zM,
                  JL: 0
                }))
              }
            } else {
              var mM = {
                style: SM ? tr({}, SM, aM) : aM
              };
              this.state && nM && (SM && nM[SM] !== aM || !SM && nM !== aM) && this.setState(mM)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var MM = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), MM && MM()
        }
      }, {
        key: "handleStyleChange",
        value: function(MM) {
          this.changeStyle(MM)
        }
      }, {
        key: "changeStyle",
        value: function(MM) {
          this.mounted && this.setState({
            style: MM
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(MM) {
          var rM = this,
            iM = MM.from,
            OM = MM.to,
            SM = MM.duration,
            jM = MM.easing,
            aM = MM.JL,
            PM = MM.onAnimationEnd,
            nM = MM.onAnimationStart,
            QM = lr(iM, OM, ar(jM), SM, this.changeStyle);
          this.manager.start([nM, aM, function() {
            rM.stopJSAnimation = QM()
          }, SM, PM])
        }
      }, {
        key: "runStepAnimation",
        value: function(MM) {
          var rM = this,
            iM = MM.steps,
            OM = MM.JL,
            SM = MM.onAnimationStart,
            jM = iM[0],
            aM = jM.style,
            PM = jM.duration,
            nM = void 0 === PM ? 0 : PM;
          return this.manager.start([SM].concat(Cr(iM.reduce((function(MM, OM, SM) {
            if (0 === SM) return MM;
            var jM = OM.duration,
              aM = OM.easing,
              PM = void 0 === aM ? "ease" : aM,
              nM = OM.style,
              QM = OM.properties,
              zM = OM.onAnimationEnd,
              LM = SM > 0 ? iM[SM - 1] : OM,
              mM = QM || Object.keys(nM);
            if ("function" === typeof PM || "spring" === PM) return [].concat(Cr(MM), [rM.runJSAnimation.bind(rM, {
              from: LM.style,
              to: nM,
              duration: jM,
              easing: PM
            }), jM]);
            var HM = qM(mM, jM, PM),
              hM = wr(wr(wr({}, LM.style), nM), {}, {
                transition: HM
              });
            return [].concat(Cr(MM), [hM, jM, zM]).filter(IM)
          }), [aM, Math.max(nM, OM)])), [MM.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(MM) {
          this.manager || (this.manager = xM());
          var rM = MM.JL,
            iM = MM.duration,
            OM = MM.attributeName,
            SM = MM.to,
            jM = MM.easing,
            aM = MM.onAnimationStart,
            PM = MM.onAnimationEnd,
            nM = MM.steps,
            QM = MM.children,
            zM = this.manager;
          if (this.unSubscribe = zM.subscribe(this.handleStyleChange), "function" !== typeof jM && "function" !== typeof QM && "spring" !== jM)
            if (nM.length > 1) this.runStepAnimation(MM);
            else {
              var LM = OM ? tr({}, OM, SM) : SM,
                mM = qM(Object.keys(LM), iM, jM);
              zM.start([aM, rM, wr(wr({}, LM), {}, {
                transition: mM
              }), iM, PM])
            }
          else this.runJSAnimation(MM)
        }
      }, {
        key: "render",
        value: function() {
          var MM = this.props,
            rM = MM.children,
            iM = (MM.JL, MM.duration),
            SM = (MM.attributeName, MM.easing, MM.isActive),
            jM = (MM.steps, MM.from, MM.to, MM.canBegin, MM.onAnimationEnd, MM.shouldReAnimate, MM.onAnimationReStart, Gr(MM, Ur)),
            aM = OM.Children.count(rM),
            PM = this.state.style;
          if ("function" === typeof rM) return rM(PM);
          if (!SM || 0 === aM || iM <= 0) return rM;
          var nM = function(MM) {
            var rM = MM.props,
              iM = rM.style,
              SM = void 0 === iM ? {} : iM,
              aM = rM.className;
            return (0, OM.cloneElement)(MM, wr(wr({}, jM), {}, {
              style: wr(wr({}, SM), PM),
              className: aM
            }))
          };
          return 1 === aM ? nM(OM.Children.only(rM)) : OM.createElement("div", null, OM.Children.map(rM, (function(MM) {
            return nM(MM)
          })))
        }
      }]) && gr(rM.prototype, iM), SM && gr(rM, SM), Object.defineProperty(rM, "prototype", {
        writable: !1
      }), aM
    }(OM.PureComponent);
    kr.displayName = "Animate", kr.defaultProps = {
      JL: 0,
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
    }, kr.propTypes = {
      from: jM().oneOfType([jM().object, jM().string]),
      to: jM().oneOfType([jM().object, jM().string]),
      attributeName: jM().string,
      duration: jM().number,
      JL: jM().number,
      easing: jM().oneOfType([jM().string, jM().func]),
      steps: jM().arrayOf(jM().shape({
        duration: jM().number.isRequired,
        style: jM().object.isRequired,
        easing: jM().oneOfType([jM().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), jM().func]),
        properties: jM().arrayOf("string"),
        onAnimationEnd: jM().func
      })),
      children: jM().oneOfType([jM().node, jM().func]),
      isActive: jM().bool,
      canBegin: jM().bool,
      onAnimationEnd: jM().func,
      shouldReAnimate: jM().bool,
      onAnimationStart: jM().func,
      onAnimationReStart: jM().func
    };
    const Zr = kr
  },
  6825: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => NM
    });
    var OM, SM = iM(44),
      jM = iM(5491),
      aM = iM(6582),
      PM = iM(5712),
      nM = iM.n(PM),
      QM = iM(6622),
      zM = iM.n(QM),
      LM = iM(5864),
      mM = iM.n(LM),
      HM = iM(5618),
      hM = iM.n(HM),
      JM = iM(6657),
      dM = iM.n(JM),
      yM = iM(6821),
      lM = iM(6574),
      EM = iM(6429),
      UM = iM(6741),
      GM = iM(6438),
      CM = iM(5595),
      eM = iM(6598),
      bM = iM(5876),
      wM = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      tM = ["key"];

    function gM(MM) {
      return gM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, gM(MM)
    }

    function uM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function RM() {
      return RM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, RM.apply(this, arguments)
    }

    function pM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function WM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? pM(Object(iM), !0).forEach((function(rM) {
          fM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : pM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function sM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, YM(OM.key), OM)
      }
    }

    function DM(MM, rM, iM) {
      return rM = ZM(rM),
        function(MM, rM) {
          if (rM && ("object" === gM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, kM() ? Reflect.construct(rM, iM || [], ZM(MM).constructor) : rM.apply(MM, iM))
    }

    function kM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (kM = function() {
        return !!MM
      })()
    }

    function ZM(MM) {
      return ZM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, ZM(MM)
    }

    function oM(MM, rM) {
      return oM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, oM(MM, rM)
    }

    function fM(MM, rM, iM) {
      return (rM = YM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function YM(MM) {
      var rM = function(MM, rM) {
        if ("object" != gM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != gM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == gM(rM) ? rM : rM + ""
    }
    var NM = function(MM) {
      function rM() {
        var MM;
        ! function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM);
        for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        return fM(MM = DM(this, rM, [].concat(OM)), "state", {
          isAnimationFinished: !0
        }), fM(MM, "id", (0, CM.G)("recharts-area-")), fM(MM, "handleAnimationEnd", (function() {
          var rM = MM.props.onAnimationEnd;
          MM.setState({
            isAnimationFinished: !0
          }), nM()(rM) && rM()
        })), fM(MM, "handleAnimationStart", (function() {
          var rM = MM.props.onAnimationStart;
          MM.setState({
            isAnimationFinished: !1
          }), nM()(rM) && rM()
        })), MM
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && oM(MM, rM)
      }(rM, MM), iM = rM, OM = [{
        key: "renderDots",
        value: function(MM, iM, OM) {
          var jM = this.props.isAnimationActive,
            aM = this.state.isAnimationFinished;
          if (jM && !aM) return null;
          var PM = this.props,
            nM = PM.dot,
            QM = PM.points,
            zM = PM.dataKey,
            LM = (0, bM.b)(this.props, !1),
            mM = (0, bM.b)(nM, !0),
            HM = QM.map((function(MM, iM) {
              var OM = WM(WM(WM({
                key: "dot-".concat(iM),
                r: 3
              }, LM), mM), {}, {
                index: iM,
                cx: MM.x,
                cy: MM.y,
                dataKey: zM,
                value: MM.value,
                payload: MM.payload,
                points: QM
              });
              return rM.renderDotItem(nM, OM)
            })),
            hM = {
              clipPath: MM ? "url(#clipPath-".concat(iM ? "" : "dots-").concat(OM, ")") : null
            };
          return SM.createElement(EM.b, RM({
            className: "recharts-area-dots"
          }, hM), HM)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(MM) {
          var rM = this.props,
            iM = rM.baseLine,
            OM = rM.points,
            jM = rM.strokeWidth,
            aM = OM[0].x,
            PM = OM[OM.length - 1].x,
            nM = MM * Math.abs(aM - PM),
            QM = zM()(OM.map((function(MM) {
              return MM.y || 0
            })));
          return (0, CM.y)(iM) && "number" === typeof iM ? QM = Math.max(iM, QM) : iM && Array.isArray(iM) && iM.length && (QM = Math.max(zM()(iM.map((function(MM) {
            return MM.y || 0
          }))), QM)), (0, CM.y)(QM) ? SM.createElement("rect", {
            x: aM < PM ? aM : aM - nM,
            y: 0,
            width: nM,
            height: Math.floor(QM + (jM ? parseInt("".concat(jM), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(MM) {
          var rM = this.props,
            iM = rM.baseLine,
            OM = rM.points,
            jM = rM.strokeWidth,
            aM = OM[0].y,
            PM = OM[OM.length - 1].y,
            nM = MM * Math.abs(aM - PM),
            QM = zM()(OM.map((function(MM) {
              return MM.x || 0
            })));
          return (0, CM.y)(iM) && "number" === typeof iM ? QM = Math.max(iM, QM) : iM && Array.isArray(iM) && iM.length && (QM = Math.max(zM()(iM.map((function(MM) {
            return MM.x || 0
          }))), QM)), (0, CM.y)(QM) ? SM.createElement("rect", {
            x: 0,
            y: aM < PM ? aM : aM - nM,
            width: QM + (jM ? parseInt("".concat(jM), 10) : 1),
            height: Math.floor(nM)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(MM) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(MM) : this.renderHorizontalRect(MM)
        }
      }, {
        key: "renderAreaStatically",
        value: function(MM, rM, iM, OM) {
          var jM = this.props,
            aM = jM.layout,
            PM = jM.type,
            nM = jM.stroke,
            QM = jM.connectNulls,
            zM = jM.isRange,
            LM = (jM.ref, uM(jM, wM));
          return SM.createElement(EM.b, {
            clipPath: iM ? "url(#clipPath-".concat(OM, ")") : null
          }, SM.createElement(yM.e, RM({}, (0, bM.b)(LM, !0), {
            points: MM,
            connectNulls: QM,
            type: PM,
            baseLine: rM,
            layout: aM,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== nM && SM.createElement(yM.e, RM({}, (0, bM.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: aM,
            type: PM,
            connectNulls: QM,
            fill: "none",
            points: MM
          })), "none" !== nM && zM && SM.createElement(yM.e, RM({}, (0, bM.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: aM,
            type: PM,
            connectNulls: QM,
            fill: "none",
            points: rM
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(MM, rM) {
          var iM = this,
            OM = this.props,
            jM = OM.points,
            PM = OM.baseLine,
            nM = OM.isAnimationActive,
            QM = OM.animationBegin,
            zM = OM.animationDuration,
            LM = OM.animationEasing,
            HM = OM.animationId,
            JM = this.state,
            dM = JM.prevPoints,
            yM = JM.prevBaseLine;
          return SM.createElement(aM.d, {
            JL: QM,
            duration: zM,
            isActive: nM,
            easing: LM,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(HM),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(OM) {
            var aM = OM.t;
            if (dM) {
              var nM, QM = dM.length / jM.length,
                zM = jM.map((function(MM, rM) {
                  var iM = Math.floor(rM * QM);
                  if (dM[iM]) {
                    var OM = dM[iM],
                      SM = (0, CM.s)(OM.x, MM.x),
                      jM = (0, CM.s)(OM.y, MM.y);
                    return WM(WM({}, MM), {}, {
                      x: SM(aM),
                      y: jM(aM)
                    })
                  }
                  return MM
                }));
              return nM = (0, CM.y)(PM) && "number" === typeof PM ? (0, CM.s)(yM, PM)(aM) : mM()(PM) || hM()(PM) ? (0, CM.s)(yM, 0)(aM) : PM.map((function(MM, rM) {
                var iM = Math.floor(rM * QM);
                if (yM[iM]) {
                  var OM = yM[iM],
                    SM = (0, CM.s)(OM.x, MM.x),
                    jM = (0, CM.s)(OM.y, MM.y);
                  return WM(WM({}, MM), {}, {
                    x: SM(aM),
                    y: jM(aM)
                  })
                }
                return MM
              })), iM.renderAreaStatically(zM, nM, MM, rM)
            }
            return SM.createElement(EM.b, null, SM.createElement("defs", null, SM.createElement("clipPath", {
              id: "animationClipPath-".concat(rM)
            }, iM.renderClipRect(aM))), SM.createElement(EM.b, {
              clipPath: "url(#animationClipPath-".concat(rM, ")")
            }, iM.renderAreaStatically(jM, PM, MM, rM)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(MM, rM) {
          var iM = this.props,
            OM = iM.points,
            SM = iM.baseLine,
            jM = iM.isAnimationActive,
            aM = this.state,
            PM = aM.prevPoints,
            nM = aM.prevBaseLine,
            QM = aM.totalLength;
          return jM && OM && OM.length && (!PM && QM > 0 || !dM()(PM, OM) || !dM()(nM, SM)) ? this.renderAreaWithAnimation(MM, rM) : this.renderAreaStatically(OM, SM, MM, rM)
        }
      }, {
        key: "render",
        value: function() {
          var MM, rM = this.props,
            iM = rM.hide,
            OM = rM.dot,
            aM = rM.points,
            PM = rM.className,
            nM = rM.top,
            QM = rM.left,
            zM = rM.xAxis,
            LM = rM.yAxis,
            HM = rM.width,
            hM = rM.height,
            JM = rM.isAnimationActive,
            dM = rM.id;
          if (iM || !aM || !aM.length) return null;
          var yM = this.state.isAnimationFinished,
            lM = 1 === aM.length,
            GM = (0, jM.b)("recharts-area", PM),
            CM = zM && zM.allowDataOverflow,
            eM = LM && LM.allowDataOverflow,
            wM = CM || eM,
            tM = mM()(dM) ? this.id : dM,
            gM = null !== (MM = (0, bM.b)(OM, !1)) && void 0 !== MM ? MM : {
              r: 3,
              strokeWidth: 2
            },
            uM = gM.r,
            RM = void 0 === uM ? 3 : uM,
            pM = gM.strokeWidth,
            WM = void 0 === pM ? 2 : pM,
            sM = ((0, bM.t)(OM) ? OM : {}).clipDot,
            DM = void 0 === sM || sM,
            kM = 2 * RM + WM;
          return SM.createElement(EM.b, {
            className: GM
          }, CM || eM ? SM.createElement("defs", null, SM.createElement("clipPath", {
            id: "clipPath-".concat(tM)
          }, SM.createElement("rect", {
            x: CM ? QM : QM - HM / 2,
            y: eM ? nM : nM - hM / 2,
            width: CM ? HM : 2 * HM,
            height: eM ? hM : 2 * hM
          })), !DM && SM.createElement("clipPath", {
            id: "clipPath-dots-".concat(tM)
          }, SM.createElement("rect", {
            x: QM - kM / 2,
            y: nM - kM / 2,
            width: HM + kM,
            height: hM + kM
          }))) : null, lM ? null : this.renderArea(wM, tM), (OM || lM) && this.renderDots(wM, DM, tM), (!JM || yM) && UM.d.renderCallByParent(this.props, aM))
        }
      }], PM = [{
        key: "getDerivedStateFromProps",
        value: function(MM, rM) {
          return MM.animationId !== rM.prevAnimationId ? {
            prevAnimationId: MM.animationId,
            curPoints: MM.points,
            curBaseLine: MM.baseLine,
            prevPoints: rM.curPoints,
            prevBaseLine: rM.curBaseLine
          } : MM.points !== rM.curPoints || MM.baseLine !== rM.curBaseLine ? {
            curPoints: MM.points,
            curBaseLine: MM.baseLine
          } : null
        }
      }], OM && sM(iM.prototype, OM), PM && sM(iM, PM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, OM, PM
    }(SM.PureComponent);
    OM = NM, fM(NM, "displayName", "Area"), fM(NM, "defaultProps", {
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
      isAnimationActive: !GM.d.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), fM(NM, "getBaseValue", (function(MM, rM, iM, OM) {
      var SM = MM.layout,
        jM = MM.baseValue,
        aM = rM.props.baseValue,
        PM = null !== aM && void 0 !== aM ? aM : jM;
      if ((0, CM.y)(PM) && "number" === typeof PM) return PM;
      var nM = "horizontal" === SM ? OM : iM,
        QM = nM.scale.domain();
      if ("number" === nM.type) {
        var zM = Math.max(QM[0], QM[1]),
          LM = Math.min(QM[0], QM[1]);
        return "dataMin" === PM ? LM : "dataMax" === PM || zM < 0 ? zM : Math.max(Math.min(QM[0], QM[1]), 0)
      }
      return "dataMin" === PM ? QM[0] : "dataMax" === PM ? QM[1] : QM[0]
    })), fM(NM, "getComposedData", (function(MM) {
      var rM, iM = MM.props,
        SM = MM.item,
        jM = MM.xAxis,
        aM = MM.yAxis,
        PM = MM.xAxisTicks,
        nM = MM.yAxisTicks,
        QM = MM.bandSize,
        zM = MM.dataKey,
        LM = MM.stackedData,
        mM = MM.dataStartIndex,
        HM = MM.displayedData,
        hM = MM.offset,
        JM = iM.layout,
        dM = LM && LM.length,
        yM = OM.getBaseValue(iM, SM, jM, aM),
        lM = "horizontal" === JM,
        EM = !1,
        UM = HM.map((function(MM, rM) {
          var iM;
          dM ? iM = LM[mM + rM] : (iM = (0, eM.fb)(MM, zM), Array.isArray(iM) ? EM = !0 : iM = [yM, iM]);
          var OM = null == iM[1] || dM && null == (0, eM.fb)(MM, zM);
          return lM ? {
            x: (0, eM.J)({
              axis: jM,
              ticks: PM,
              bandSize: QM,
              entry: MM,
              index: rM
            }),
            y: OM ? null : aM.scale(iM[1]),
            value: iM,
            payload: MM
          } : {
            x: OM ? null : jM.scale(iM[1]),
            y: (0, eM.J)({
              axis: aM,
              ticks: nM,
              bandSize: QM,
              entry: MM,
              index: rM
            }),
            value: iM,
            payload: MM
          }
        }));
      return rM = dM || EM ? UM.map((function(MM) {
        var rM = Array.isArray(MM.value) ? MM.value[0] : null;
        return lM ? {
          x: MM.x,
          y: null != rM && null != MM.y ? aM.scale(rM) : null
        } : {
          x: null != rM ? jM.scale(rM) : null,
          y: MM.y
        }
      })) : lM ? aM.scale(yM) : jM.scale(yM), WM({
        points: UM,
        baseLine: rM,
        layout: JM,
        isRange: EM
      }, hM)
    })), fM(NM, "renderDotItem", (function(MM, rM) {
      var iM;
      if (SM.isValidElement(MM)) iM = SM.cloneElement(MM, rM);
      else if (nM()(MM)) iM = MM(rM);
      else {
        var OM = (0, jM.b)("recharts-area-dot", "boolean" !== typeof MM ? MM.className : ""),
          aM = rM.key,
          PM = uM(rM, tM);
        iM = SM.createElement(lM.b, RM({}, PM, {
          key: aM,
          className: OM
        }))
      }
      return iM
    }))
  },
  6733: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => BM
    });
    var OM = iM(44),
      SM = iM(5491),
      jM = iM(6582),
      aM = iM(6657),
      PM = iM.n(aM),
      nM = iM(5864),
      QM = iM.n(nM),
      zM = iM(6429),
      LM = iM(6673),
      mM = iM(6739),
      HM = iM(6741),
      hM = iM(5595),
      JM = iM(5876),
      dM = iM(6438),
      yM = iM(6598),
      lM = iM(5898),
      EM = iM(6417),
      UM = iM(6756),
      GM = ["x", "y"];

    function CM(MM) {
      return CM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, CM(MM)
    }

    function eM() {
      return eM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, eM.apply(this, arguments)
    }

    function bM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function wM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? bM(Object(iM), !0).forEach((function(rM) {
          tM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : bM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function tM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != CM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != CM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == CM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function gM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function uM(MM, rM) {
      var iM = MM.x,
        OM = MM.y,
        SM = gM(MM, GM),
        jM = "".concat(iM),
        aM = parseInt(jM, 10),
        PM = "".concat(OM),
        nM = parseInt(PM, 10),
        QM = "".concat(rM.height || SM.height),
        zM = parseInt(QM, 10),
        LM = "".concat(rM.width || SM.width),
        mM = parseInt(LM, 10);
      return wM(wM(wM(wM(wM({}, rM), SM), aM ? {
        x: aM
      } : {}), nM ? {
        y: nM
      } : {}), {}, {
        height: zM,
        width: mM,
        name: rM.name,
        radius: rM.radius
      })
    }

    function RM(MM) {
      return OM.createElement(UM.e, eM({
        shapeType: "rectangle",
        propTransformer: uM,
        activeClassName: "recharts-active-bar"
      }, MM))
    }
    var pM, WM = ["value", "background"];

    function sM(MM) {
      return sM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, sM(MM)
    }

    function DM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function kM() {
      return kM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, kM.apply(this, arguments)
    }

    function ZM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function oM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? ZM(Object(iM), !0).forEach((function(rM) {
          vM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ZM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function fM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, FM(OM.key), OM)
      }
    }

    function YM(MM, rM, iM) {
      return rM = AM(rM),
        function(MM, rM) {
          if (rM && ("object" === sM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, NM() ? Reflect.construct(rM, iM || [], AM(MM).constructor) : rM.apply(MM, iM))
    }

    function NM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (NM = function() {
        return !!MM
      })()
    }

    function AM(MM) {
      return AM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, AM(MM)
    }

    function xM(MM, rM) {
      return xM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, xM(MM, rM)
    }

    function vM(MM, rM, iM) {
      return (rM = FM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function FM(MM) {
      var rM = function(MM, rM) {
        if ("object" != sM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != sM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == sM(rM) ? rM : rM + ""
    }
    var BM = function(MM) {
      function rM() {
        var MM;
        ! function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM);
        for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        return vM(MM = YM(this, rM, [].concat(OM)), "state", {
          isAnimationFinished: !1
        }), vM(MM, "id", (0, hM.G)("recharts-bar-")), vM(MM, "handleAnimationEnd", (function() {
          var rM = MM.props.onAnimationEnd;
          MM.setState({
            isAnimationFinished: !0
          }), rM && rM()
        })), vM(MM, "handleAnimationStart", (function() {
          var rM = MM.props.onAnimationStart;
          MM.setState({
            isAnimationFinished: !1
          }), rM && rM()
        })), MM
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && xM(MM, rM)
      }(rM, MM), iM = rM, aM = [{
        key: "renderRectanglesStatically",
        value: function(MM) {
          var rM = this,
            iM = this.props,
            SM = iM.shape,
            jM = iM.dataKey,
            aM = iM.activeIndex,
            PM = iM.activeBar,
            nM = (0, JM.b)(this.props, !1);
          return MM && MM.map((function(MM, iM) {
            var QM = iM === aM,
              LM = QM ? PM : SM,
              mM = oM(oM(oM({}, nM), MM), {}, {
                isActive: QM,
                option: LM,
                index: iM,
                dataKey: jM,
                onAnimationStart: rM.handleAnimationStart,
                onAnimationEnd: rM.handleAnimationEnd
              });
            return OM.createElement(zM.b, kM({
              className: "recharts-bar-rectangle"
            }, (0, lM.l)(rM.props, MM, iM), {
              key: "rectangle-".concat(null === MM || void 0 === MM ? void 0 : MM.x, "-").concat(null === MM || void 0 === MM ? void 0 : MM.y, "-").concat(null === MM || void 0 === MM ? void 0 : MM.value, "-").concat(iM)
            }), OM.createElement(RM, mM))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var MM = this,
            rM = this.props,
            iM = rM.data,
            SM = rM.layout,
            aM = rM.isAnimationActive,
            PM = rM.animationBegin,
            nM = rM.animationDuration,
            QM = rM.animationEasing,
            LM = rM.animationId,
            mM = this.state.prevData;
          return OM.createElement(jM.d, {
            JL: PM,
            duration: nM,
            isActive: aM,
            easing: QM,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(LM),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(rM) {
            var jM = rM.t,
              aM = iM.map((function(MM, rM) {
                var iM = mM && mM[rM];
                if (iM) {
                  var OM = (0, hM.s)(iM.x, MM.x),
                    aM = (0, hM.s)(iM.y, MM.y),
                    PM = (0, hM.s)(iM.width, MM.width),
                    nM = (0, hM.s)(iM.height, MM.height);
                  return oM(oM({}, MM), {}, {
                    x: OM(jM),
                    y: aM(jM),
                    width: PM(jM),
                    height: nM(jM)
                  })
                }
                if ("horizontal" === SM) {
                  var QM = (0, hM.s)(0, MM.height)(jM);
                  return oM(oM({}, MM), {}, {
                    y: MM.y + MM.height - QM,
                    height: QM
                  })
                }
                var zM = (0, hM.s)(0, MM.width)(jM);
                return oM(oM({}, MM), {}, {
                  width: zM
                })
              }));
            return OM.createElement(zM.b, null, MM.renderRectanglesStatically(aM))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var MM = this.props,
            rM = MM.data,
            iM = MM.isAnimationActive,
            OM = this.state.prevData;
          return !(iM && rM && rM.length) || OM && PM()(OM, rM) ? this.renderRectanglesStatically(rM) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var MM = this,
            rM = this.props,
            iM = rM.data,
            SM = rM.dataKey,
            jM = rM.activeIndex,
            aM = (0, JM.b)(this.props.background, !1);
          return iM.map((function(rM, iM) {
            rM.value;
            var PM = rM.background,
              nM = DM(rM, WM);
            if (!PM) return null;
            var QM = oM(oM(oM(oM(oM({}, nM), {}, {
              fill: "#eee"
            }, PM), aM), (0, lM.l)(MM.props, rM, iM)), {}, {
              onAnimationStart: MM.handleAnimationStart,
              onAnimationEnd: MM.handleAnimationEnd,
              dataKey: SM,
              index: iM,
              className: "recharts-bar-background-rectangle"
            });
            return OM.createElement(RM, kM({
              key: "background-bar-".concat(iM),
              option: MM.props.background,
              isActive: iM === jM
            }, QM))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(MM, rM) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var iM = this.props,
            SM = iM.data,
            jM = iM.xAxis,
            aM = iM.yAxis,
            PM = iM.layout,
            nM = iM.children,
            QM = (0, JM.f)(nM, LM.b);
          if (!QM) return null;
          var mM = "vertical" === PM ? SM[0].height / 2 : SM[0].width / 2,
            HM = function(MM, rM) {
              var iM = Array.isArray(MM.value) ? MM.value[1] : MM.value;
              return {
                x: MM.x,
                y: MM.y,
                value: iM,
                errorVal: (0, yM.fb)(MM, rM)
              }
            },
            hM = {
              clipPath: MM ? "url(#clipPath-".concat(rM, ")") : null
            };
          return OM.createElement(zM.b, hM, QM.map((function(MM) {
            return OM.cloneElement(MM, {
              key: "error-bar-".concat(rM, "-").concat(MM.props.dataKey),
              data: SM,
              xAxis: jM,
              yAxis: aM,
              layout: PM,
              offset: mM,
              dataPointFormatter: HM
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var MM = this.props,
            rM = MM.hide,
            iM = MM.data,
            jM = MM.className,
            aM = MM.xAxis,
            PM = MM.yAxis,
            nM = MM.left,
            LM = MM.top,
            mM = MM.width,
            hM = MM.height,
            JM = MM.isAnimationActive,
            dM = MM.background,
            yM = MM.id;
          if (rM || !iM || !iM.length) return null;
          var lM = this.state.isAnimationFinished,
            EM = (0, SM.b)("recharts-bar", jM),
            UM = aM && aM.allowDataOverflow,
            GM = PM && PM.allowDataOverflow,
            CM = UM || GM,
            eM = QM()(yM) ? this.id : yM;
          return OM.createElement(zM.b, {
            className: EM
          }, UM || GM ? OM.createElement("defs", null, OM.createElement("clipPath", {
            id: "clipPath-".concat(eM)
          }, OM.createElement("rect", {
            x: UM ? nM : nM - mM / 2,
            y: GM ? LM : LM - hM / 2,
            width: UM ? mM : 2 * mM,
            height: GM ? hM : 2 * hM
          }))) : null, OM.createElement(zM.b, {
            className: "recharts-bar-rectangles",
            clipPath: CM ? "url(#clipPath-".concat(eM, ")") : null
          }, dM ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(CM, eM), (!JM || lM) && HM.d.renderCallByParent(this.props, iM))
        }
      }], nM = [{
        key: "getDerivedStateFromProps",
        value: function(MM, rM) {
          return MM.animationId !== rM.prevAnimationId ? {
            prevAnimationId: MM.animationId,
            curData: MM.data,
            prevData: rM.curData
          } : MM.data !== rM.curData ? {
            curData: MM.data
          } : null
        }
      }], aM && fM(iM.prototype, aM), nM && fM(iM, nM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, aM, nM
    }(OM.PureComponent);
    pM = BM, vM(BM, "displayName", "Bar"), vM(BM, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !dM.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), vM(BM, "getComposedData", (function(MM) {
      var rM = MM.props,
        iM = MM.item,
        OM = MM.barPosition,
        SM = MM.bandSize,
        jM = MM.xAxis,
        aM = MM.yAxis,
        PM = MM.xAxisTicks,
        nM = MM.yAxisTicks,
        QM = MM.stackedData,
        zM = MM.dataStartIndex,
        LM = MM.displayedData,
        HM = MM.offset,
        dM = (0, yM.r)(OM, iM);
      if (!dM) return null;
      var lM = rM.layout,
        UM = iM.type.defaultProps,
        GM = void 0 !== UM ? oM(oM({}, UM), iM.props) : iM.props,
        CM = GM.dataKey,
        eM = GM.children,
        bM = GM.minPointSize,
        wM = "horizontal" === lM ? aM : jM,
        tM = QM ? wM.scale.domain() : null,
        gM = (0, yM.C)({
          numericAxis: wM
        }),
        uM = (0, JM.f)(eM, mM.d),
        RM = LM.map((function(MM, rM) {
          var OM, LM, mM, HM, JM, UM;
          QM ? OM = (0, yM.Ab)(QM[zM + rM], tM) : (OM = (0, yM.fb)(MM, CM), Array.isArray(OM) || (OM = [gM, OM]));
          var GM = function(MM) {
            var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(iM, OM) {
              if ("number" === typeof MM) return MM;
              var SM = (0, hM.y)(iM) || (0, hM.t)(iM);
              return SM ? MM(iM, OM) : (SM || (0, EM.c)(!1), rM)
            }
          }(bM, pM.defaultProps.minPointSize)(OM[1], rM);
          if ("horizontal" === lM) {
            var eM, wM = [aM.scale(OM[0]), aM.scale(OM[1])],
              RM = wM[0],
              WM = wM[1];
            LM = (0, yM.F)({
              axis: jM,
              ticks: PM,
              bandSize: SM,
              offset: dM.offset,
              entry: MM,
              index: rM
            }), mM = null !== (eM = null !== WM && void 0 !== WM ? WM : RM) && void 0 !== eM ? eM : void 0, HM = dM.size;
            var sM = RM - WM;
            if (JM = Number.isNaN(sM) ? 0 : sM, UM = {
                x: LM,
                y: aM.y,
                width: HM,
                height: aM.height
              }, Math.abs(GM) > 0 && Math.abs(JM) < Math.abs(GM)) {
              var DM = (0, hM.D)(JM || GM) * (Math.abs(GM) - Math.abs(JM));
              mM -= DM, JM += DM
            }
          } else {
            var kM = [jM.scale(OM[0]), jM.scale(OM[1])],
              ZM = kM[0],
              fM = kM[1];
            if (LM = ZM, mM = (0, yM.F)({
                axis: aM,
                ticks: nM,
                bandSize: SM,
                offset: dM.offset,
                entry: MM,
                index: rM
              }), HM = fM - ZM, JM = dM.size, UM = {
                x: jM.x,
                y: mM,
                width: jM.width,
                height: JM
              }, Math.abs(GM) > 0 && Math.abs(HM) < Math.abs(GM)) HM += (0, hM.D)(HM || GM) * (Math.abs(GM) - Math.abs(HM))
          }
          return oM(oM(oM({}, MM), {}, {
            x: LM,
            y: mM,
            width: HM,
            height: JM,
            value: QM ? OM : OM[1],
            payload: MM,
            background: UM
          }, uM && uM[rM] && uM[rM].props), {}, {
            tooltipPayload: [(0, yM.db)(iM, MM)],
            tooltipPosition: {
              x: LM + HM / 2,
              y: mM + JM / 2
            }
          })
        }));
      return oM({
        data: RM,
        layout: lM
      }, HM)
    }))
  },
  6842: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => sM
    });
    var OM = iM(44),
      SM = iM(5712),
      jM = iM.n(SM),
      aM = iM(5625),
      PM = iM.n(aM),
      nM = iM(5491),
      QM = iM(5889),
      zM = iM(6429),
      LM = iM(6585),
      mM = iM(6691),
      HM = iM(5595),
      hM = iM(5898),
      JM = iM(5876),
      dM = iM(6849),
      yM = ["viewBox"],
      lM = ["viewBox"],
      EM = ["ticks"];

    function UM(MM) {
      return UM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, UM(MM)
    }

    function GM() {
      return GM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, GM.apply(this, arguments)
    }

    function CM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function eM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? CM(Object(iM), !0).forEach((function(rM) {
          pM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : CM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function bM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function wM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, WM(OM.key), OM)
      }
    }

    function tM(MM, rM, iM) {
      return rM = uM(rM),
        function(MM, rM) {
          if (rM && ("object" === UM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, gM() ? Reflect.construct(rM, iM || [], uM(MM).constructor) : rM.apply(MM, iM))
    }

    function gM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (gM = function() {
        return !!MM
      })()
    }

    function uM(MM) {
      return uM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, uM(MM)
    }

    function RM(MM, rM) {
      return RM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, RM(MM, rM)
    }

    function pM(MM, rM, iM) {
      return (rM = WM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function WM(MM) {
      var rM = function(MM, rM) {
        if ("object" != UM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != UM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == UM(rM) ? rM : rM + ""
    }
    var sM = function(MM) {
      function rM(MM) {
        var iM;
        return function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM), (iM = tM(this, rM, [MM])).state = {
          fontSize: "",
          letterSpacing: ""
        }, iM
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && RM(MM, rM)
      }(rM, MM), iM = rM, aM = [{
        key: "renderTickItem",
        value: function(MM, rM, iM) {
          var SM = (0, nM.b)(rM.className, "recharts-cartesian-axis-tick-value");
          return OM.isValidElement(MM) ? OM.cloneElement(MM, eM(eM({}, rM), {}, {
            className: SM
          })) : jM()(MM) ? MM(eM(eM({}, rM), {}, {
            className: SM
          })) : OM.createElement(LM.c, GM({}, rM, {
            className: "recharts-cartesian-axis-tick-value"
          }), iM)
        }
      }], (SM = [{
        key: "shouldComponentUpdate",
        value: function(MM, rM) {
          var iM = MM.viewBox,
            OM = bM(MM, yM),
            SM = this.props,
            jM = SM.viewBox,
            aM = bM(SM, lM);
          return !(0, QM.e)(iM, jM) || !(0, QM.e)(OM, aM) || !(0, QM.e)(rM, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var MM = this.layerReference;
          if (MM) {
            var rM = MM.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            rM && this.setState({
              fontSize: window.getComputedStyle(rM).fontSize,
              letterSpacing: window.getComputedStyle(rM).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(MM) {
          var rM, iM, OM, SM, jM, aM, PM = this.props,
            nM = PM.x,
            QM = PM.y,
            zM = PM.width,
            LM = PM.height,
            mM = PM.orientation,
            hM = PM.tickSize,
            JM = PM.mirror,
            dM = PM.tickMargin,
            yM = JM ? -1 : 1,
            lM = MM.tickSize || hM,
            EM = (0, HM.y)(MM.tickCoord) ? MM.tickCoord : MM.coordinate;
          switch (mM) {
            case "top":
              rM = iM = MM.coordinate, aM = (OM = (SM = QM + +!JM * LM) - yM * lM) - yM * dM, jM = EM;
              break;
            case "left":
              OM = SM = MM.coordinate, jM = (rM = (iM = nM + +!JM * zM) - yM * lM) - yM * dM, aM = EM;
              break;
            case "right":
              OM = SM = MM.coordinate, jM = (rM = (iM = nM + +JM * zM) + yM * lM) + yM * dM, aM = EM;
              break;
            default:
              rM = iM = MM.coordinate, aM = (OM = (SM = QM + +JM * LM) + yM * lM) + yM * dM, jM = EM
          }
          return {
            line: {
              x1: rM,
              y1: OM,
              x2: iM,
              y2: SM
            },
            bL: {
              x: jM,
              y: aM
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var MM, rM = this.props,
            iM = rM.orientation,
            OM = rM.mirror;
          switch (iM) {
            case "left":
              MM = OM ? "start" : "end";
              break;
            case "right":
              MM = OM ? "end" : "start";
              break;
            default:
              MM = "middle"
          }
          return MM
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var MM = this.props,
            rM = MM.orientation,
            iM = MM.mirror,
            OM = "end";
          switch (rM) {
            case "left":
            case "right":
              OM = "middle";
              break;
            case "top":
              OM = iM ? "start" : "end";
              break;
            default:
              OM = iM ? "end" : "start"
          }
          return OM
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var MM = this.props,
            rM = MM.x,
            iM = MM.y,
            SM = MM.width,
            jM = MM.height,
            aM = MM.orientation,
            QM = MM.mirror,
            zM = MM.axisLine,
            LM = eM(eM(eM({}, (0, JM.b)(this.props, !1)), (0, JM.b)(zM, !1)), {}, {
              fill: "none"
            });
          if ("top" === aM || "bottom" === aM) {
            var mM = +("top" === aM && !QM || "bottom" === aM && QM);
            LM = eM(eM({}, LM), {}, {
              x1: rM,
              y1: iM + mM * jM,
              x2: rM + SM,
              y2: iM + mM * jM
            })
          } else {
            var HM = +("left" === aM && !QM || "right" === aM && QM);
            LM = eM(eM({}, LM), {}, {
              x1: rM + HM * SM,
              y1: iM,
              x2: rM + HM * SM,
              y2: iM + jM
            })
          }
          return OM.createElement("line", GM({}, LM, {
            className: (0, nM.b)("recharts-cartesian-axis-line", PM()(zM, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(MM, iM, SM) {
          var aM = this,
            QM = this.props,
            LM = QM.tickLine,
            mM = QM.stroke,
            HM = QM.bL,
            yM = QM.tickFormatter,
            lM = QM.unit,
            EM = (0, dM.e)(eM(eM({}, this.props), {}, {
              ticks: MM
            }), iM, SM),
            UM = this.getTickTextAnchor(),
            CM = this.getTickVerticalAnchor(),
            bM = (0, JM.b)(this.props, !1),
            wM = (0, JM.b)(HM, !1),
            tM = eM(eM({}, bM), {}, {
              fill: "none"
            }, (0, JM.b)(LM, !1)),
            gM = EM.map((function(MM, iM) {
              var SM = aM.getTickLineCoord(MM),
                QM = SM.line,
                JM = SM.bL,
                dM = eM(eM(eM(eM({
                  textAnchor: UM,
                  verticalAnchor: CM
                }, bM), {}, {
                  stroke: "none",
                  fill: mM
                }, wM), JM), {}, {
                  index: iM,
                  payload: MM,
                  visibleTicksCount: EM.length,
                  tickFormatter: yM
                });
              return OM.createElement(zM.b, GM({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(MM.value, "-").concat(MM.coordinate, "-").concat(MM.tickCoord)
              }, (0, hM.l)(aM.props, MM, iM)), LM && OM.createElement("line", GM({}, tM, QM, {
                className: (0, nM.b)("recharts-cartesian-axis-tick-line", PM()(LM, "className"))
              })), HM && rM.renderTickItem(HM, dM, "".concat(jM()(yM) ? yM(MM.value, iM) : MM.value).concat(lM || "")))
            }));
          return OM.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, gM)
        }
      }, {
        key: "render",
        value: function() {
          var MM = this,
            rM = this.props,
            iM = rM.axisLine,
            SM = rM.width,
            aM = rM.height,
            PM = rM.ticksGenerator,
            QM = rM.className;
          if (rM.hide) return null;
          var LM = this.props,
            HM = LM.ticks,
            hM = bM(LM, EM),
            JM = HM;
          return jM()(PM) && (JM = HM && HM.length > 0 ? PM(this.props) : PM(hM)), SM <= 0 || aM <= 0 || !JM || !JM.length ? null : OM.createElement(zM.b, {
            className: (0, nM.b)("recharts-cartesian-axis", QM),
            ref: function(rM) {
              MM.layerReference = rM
            }
          }, iM && this.renderAxisLine(), this.renderTicks(JM, this.state.fontSize, this.state.letterSpacing), mM.b.renderCallByParent(this.props))
        }
      }]) && wM(iM.prototype, SM), aM && wM(iM, aM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, SM, aM
    }(OM.Component);
    pM(sM, "displayName", "CartesianAxis"), pM(sM, "defaultProps", {
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
      bL: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6857: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => pM
    });
    var OM = iM(44),
      SM = iM(5712),
      jM = iM.n(SM),
      aM = iM(5873),
      PM = iM(5595),
      nM = iM(5876),
      QM = iM(6598),
      zM = iM(6849),
      LM = iM(6842),
      mM = iM(6801),
      HM = ["x1", "y1", "x2", "y2", "key"],
      hM = ["offset"];

    function JM(MM) {
      return JM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, JM(MM)
    }

    function dM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function yM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? dM(Object(iM), !0).forEach((function(rM) {
          lM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : dM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function lM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != JM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != JM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == JM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function EM() {
      return EM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, EM.apply(this, arguments)
    }

    function UM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }
    var GM = function(MM) {
      var rM = MM.fill;
      if (!rM || "none" === rM) return null;
      var iM = MM.fillOpacity,
        SM = MM.x,
        jM = MM.y,
        aM = MM.width,
        PM = MM.height,
        nM = MM.ry;
      return OM.createElement("rect", {
        x: SM,
        y: jM,
        ry: nM,
        width: aM,
        height: PM,
        stroke: "none",
        fill: rM,
        fillOpacity: iM,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function CM(MM, rM) {
      var iM;
      if (OM.isValidElement(MM)) iM = OM.cloneElement(MM, rM);
      else if (jM()(MM)) iM = MM(rM);
      else {
        var SM = rM.x1,
          aM = rM.y1,
          PM = rM.x2,
          QM = rM.y2,
          zM = rM.key,
          LM = UM(rM, HM),
          mM = (0, nM.b)(LM, !1),
          JM = (mM.offset, UM(mM, hM));
        iM = OM.createElement("line", EM({}, JM, {
          x1: SM,
          y1: aM,
          x2: PM,
          y2: QM,
          fill: "none",
          key: zM
        }))
      }
      return iM
    }

    function eM(MM) {
      var rM = MM.x,
        iM = MM.width,
        SM = MM.horizontal,
        jM = void 0 === SM || SM,
        aM = MM.horizontalPoints;
      if (!jM || !aM || !aM.length) return null;
      var PM = aM.map((function(OM, SM) {
        var aM = yM(yM({}, MM), {}, {
          x1: rM,
          y1: OM,
          x2: rM + iM,
          y2: OM,
          key: "line-".concat(SM),
          index: SM
        });
        return CM(jM, aM)
      }));
      return OM.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, PM)
    }

    function bM(MM) {
      var rM = MM.y,
        iM = MM.height,
        SM = MM.vertical,
        jM = void 0 === SM || SM,
        aM = MM.verticalPoints;
      if (!jM || !aM || !aM.length) return null;
      var PM = aM.map((function(OM, SM) {
        var aM = yM(yM({}, MM), {}, {
          x1: OM,
          y1: rM,
          x2: OM,
          y2: rM + iM,
          key: "line-".concat(SM),
          index: SM
        });
        return CM(jM, aM)
      }));
      return OM.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, PM)
    }

    function wM(MM) {
      var rM = MM.horizontalFill,
        iM = MM.fillOpacity,
        SM = MM.x,
        jM = MM.y,
        aM = MM.width,
        PM = MM.height,
        nM = MM.horizontalPoints,
        QM = MM.horizontal;
      if (!(void 0 === QM || QM) || !rM || !rM.length) return null;
      var zM = nM.map((function(MM) {
        return Math.round(MM + jM - jM)
      })).sort((function(MM, rM) {
        return MM - rM
      }));
      jM !== zM[0] && zM.unshift(0);
      var LM = zM.map((function(MM, nM) {
        var QM = !zM[nM + 1] ? jM + PM - MM : zM[nM + 1] - MM;
        if (QM <= 0) return null;
        var LM = nM % rM.length;
        return OM.createElement("rect", {
          key: "react-".concat(nM),
          y: MM,
          x: SM,
          height: QM,
          width: aM,
          stroke: "none",
          fill: rM[LM],
          fillOpacity: iM,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return OM.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, LM)
    }

    function tM(MM) {
      var rM = MM.vertical,
        iM = void 0 === rM || rM,
        SM = MM.verticalFill,
        jM = MM.fillOpacity,
        aM = MM.x,
        PM = MM.y,
        nM = MM.width,
        QM = MM.height,
        zM = MM.verticalPoints;
      if (!iM || !SM || !SM.length) return null;
      var LM = zM.map((function(MM) {
        return Math.round(MM + aM - aM)
      })).sort((function(MM, rM) {
        return MM - rM
      }));
      aM !== LM[0] && LM.unshift(0);
      var mM = LM.map((function(MM, rM) {
        var iM = !LM[rM + 1] ? aM + nM - MM : LM[rM + 1] - MM;
        if (iM <= 0) return null;
        var zM = rM % SM.length;
        return OM.createElement("rect", {
          key: "react-".concat(rM),
          x: MM,
          y: PM,
          width: iM,
          height: QM,
          stroke: "none",
          fill: SM[zM],
          fillOpacity: jM,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return OM.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, mM)
    }
    var gM = function(MM, rM) {
        var iM = MM.xAxis,
          OM = MM.width,
          SM = MM.height,
          jM = MM.offset;
        return (0, QM.K)((0, zM.e)(yM(yM(yM({}, LM.d.defaultProps), iM), {}, {
          ticks: (0, QM.Z)(iM, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: OM,
            height: SM
          }
        })), jM.left, jM.left + jM.width, rM)
      },
      uM = function(MM, rM) {
        var iM = MM.yAxis,
          OM = MM.width,
          SM = MM.height,
          jM = MM.offset;
        return (0, QM.K)((0, zM.e)(yM(yM(yM({}, LM.d.defaultProps), iM), {}, {
          ticks: (0, QM.Z)(iM, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: OM,
            height: SM
          }
        })), jM.top, jM.top + jM.height, rM)
      },
      RM = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function pM(MM) {
      var rM, iM, SM, nM, QM, zM, LM = (0, mM.j)(),
        HM = (0, mM.f)(),
        hM = (0, mM.o)(),
        dM = yM(yM({}, MM), {}, {
          stroke: null !== (rM = MM.stroke) && void 0 !== rM ? rM : RM.stroke,
          fill: null !== (iM = MM.fill) && void 0 !== iM ? iM : RM.fill,
          horizontal: null !== (SM = MM.horizontal) && void 0 !== SM ? SM : RM.horizontal,
          horizontalFill: null !== (nM = MM.horizontalFill) && void 0 !== nM ? nM : RM.horizontalFill,
          vertical: null !== (QM = MM.vertical) && void 0 !== QM ? QM : RM.vertical,
          verticalFill: null !== (zM = MM.verticalFill) && void 0 !== zM ? zM : RM.verticalFill,
          x: (0, PM.y)(MM.x) ? MM.x : hM.left,
          y: (0, PM.y)(MM.y) ? MM.y : hM.top,
          width: (0, PM.y)(MM.width) ? MM.width : hM.width,
          height: (0, PM.y)(MM.height) ? MM.height : hM.height
        }),
        lM = dM.x,
        UM = dM.y,
        CM = dM.width,
        pM = dM.height,
        WM = dM.syncWithTicks,
        sM = dM.horizontalValues,
        DM = dM.verticalValues,
        kM = (0, mM.e)(),
        ZM = (0, mM.x)();
      if (!(0, PM.y)(CM) || CM <= 0 || !(0, PM.y)(pM) || pM <= 0 || !(0, PM.y)(lM) || lM !== +lM || !(0, PM.y)(UM) || UM !== +UM) return null;
      var oM = dM.verticalCoordinatesGenerator || gM,
        fM = dM.horizontalCoordinatesGenerator || uM,
        YM = dM.horizontalPoints,
        NM = dM.verticalPoints;
      if ((!YM || !YM.length) && jM()(fM)) {
        var AM = sM && sM.length,
          xM = fM({
            yAxis: ZM ? yM(yM({}, ZM), {}, {
              ticks: AM ? sM : ZM.ticks
            }) : void 0,
            width: LM,
            height: HM,
            offset: hM
          }, !!AM || WM);
        (0, aM.e)(Array.isArray(xM), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(JM(xM), "]")), Array.isArray(xM) && (YM = xM)
      }
      if ((!NM || !NM.length) && jM()(oM)) {
        var vM = DM && DM.length,
          FM = oM({
            xAxis: kM ? yM(yM({}, kM), {}, {
              ticks: vM ? DM : kM.ticks
            }) : void 0,
            width: LM,
            height: HM,
            offset: hM
          }, !!vM || WM);
        (0, aM.e)(Array.isArray(FM), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(JM(FM), "]")), Array.isArray(FM) && (NM = FM)
      }
      return OM.createElement("g", {
        className: "recharts-cartesian-grid"
      }, OM.createElement(GM, {
        fill: dM.fill,
        fillOpacity: dM.fillOpacity,
        x: dM.x,
        y: dM.y,
        width: dM.width,
        height: dM.height,
        ry: dM.ry
      }), OM.createElement(eM, EM({}, dM, {
        offset: hM,
        horizontalPoints: YM,
        xAxis: kM,
        yAxis: ZM
      })), OM.createElement(bM, EM({}, dM, {
        offset: hM,
        verticalPoints: NM,
        xAxis: kM,
        yAxis: ZM
      })), OM.createElement(wM, EM({}, dM, {
        horizontalPoints: YM
      })), OM.createElement(tM, EM({}, dM, {
        verticalPoints: NM
      })))
    }
    pM.displayName = "CartesianGrid"
  },
  6673: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => UM
    });
    var OM = iM(44),
      SM = iM(6417),
      jM = iM(6429),
      aM = iM(5876),
      PM = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function nM(MM) {
      return nM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, nM(MM)
    }

    function QM() {
      return QM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, QM.apply(this, arguments)
    }

    function zM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return LM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return LM(MM, rM)
      }(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function mM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function HM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, EM(OM.key), OM)
      }
    }

    function hM(MM, rM, iM) {
      return rM = dM(rM),
        function(MM, rM) {
          if (rM && ("object" === nM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, JM() ? Reflect.construct(rM, iM || [], dM(MM).constructor) : rM.apply(MM, iM))
    }

    function JM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (JM = function() {
        return !!MM
      })()
    }

    function dM(MM) {
      return dM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, dM(MM)
    }

    function yM(MM, rM) {
      return yM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, yM(MM, rM)
    }

    function lM(MM, rM, iM) {
      return (rM = EM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function EM(MM) {
      var rM = function(MM, rM) {
        if ("object" != nM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != nM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == nM(rM) ? rM : rM + ""
    }
    var UM = function(MM) {
      function rM() {
        return function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM), hM(this, rM, arguments)
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && yM(MM, rM)
      }(rM, MM), iM = rM, (nM = [{
        key: "render",
        value: function() {
          var MM = this.props,
            rM = MM.offset,
            iM = MM.layout,
            nM = MM.width,
            LM = MM.dataKey,
            HM = MM.data,
            hM = MM.dataPointFormatter,
            JM = MM.xAxis,
            dM = MM.yAxis,
            yM = mM(MM, PM),
            lM = (0, aM.b)(yM, !1);
          "x" === this.props.direction && "number" !== JM.type && (0, SM.c)(!1);
          var EM = HM.map((function(MM) {
            var SM = hM(MM, LM),
              aM = SM.x,
              PM = SM.y,
              mM = SM.value,
              HM = SM.errorVal;
            if (!HM) return null;
            var yM, EM, UM = [];
            if (Array.isArray(HM)) {
              var GM = zM(HM, 2);
              yM = GM[0], EM = GM[1]
            } else yM = EM = HM;
            if ("vertical" === iM) {
              var CM = JM.scale,
                eM = PM + rM,
                bM = eM + nM,
                wM = eM - nM,
                tM = CM(mM - yM),
                gM = CM(mM + EM);
              UM.push({
                x1: gM,
                y1: bM,
                x2: gM,
                y2: wM
              }), UM.push({
                x1: tM,
                y1: eM,
                x2: gM,
                y2: eM
              }), UM.push({
                x1: tM,
                y1: bM,
                x2: tM,
                y2: wM
              })
            } else if ("horizontal" === iM) {
              var uM = dM.scale,
                RM = aM + rM,
                pM = RM - nM,
                WM = RM + nM,
                sM = uM(mM - yM),
                DM = uM(mM + EM);
              UM.push({
                x1: pM,
                y1: DM,
                x2: WM,
                y2: DM
              }), UM.push({
                x1: RM,
                y1: sM,
                x2: RM,
                y2: DM
              }), UM.push({
                x1: pM,
                y1: sM,
                x2: WM,
                y2: sM
              })
            }
            return OM.createElement(jM.b, QM({
              className: "recharts-errorBar",
              key: "bar-".concat(UM.map((function(MM) {
                return "".concat(MM.x1, "-").concat(MM.x2, "-").concat(MM.y1, "-").concat(MM.y2)
              })))
            }, lM), UM.map((function(MM) {
              return OM.createElement("line", QM({}, MM, {
                key: "line-".concat(MM.x1, "-").concat(MM.x2, "-").concat(MM.y1, "-").concat(MM.y2)
              }))
            })))
          }));
          return OM.createElement(jM.b, {
            className: "recharts-errorBars"
          }, EM)
        }
      }]) && HM(iM.prototype, nM), LM && HM(iM, LM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, nM, LM
    }(OM.Component);
    lM(UM, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), lM(UM, "displayName", "ErrorBar")
  },
  6833: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => fM
    });
    var OM = iM(44),
      SM = iM(6582),
      jM = iM(5712),
      aM = iM.n(jM),
      PM = iM(5864),
      nM = iM.n(PM),
      QM = iM(6657),
      zM = iM.n(QM),
      LM = iM(5491),
      mM = iM(6821),
      HM = iM(6574),
      hM = iM(6429),
      JM = iM(6741),
      dM = iM(6673),
      yM = iM(5595),
      lM = iM(5876),
      EM = iM(6438),
      UM = iM(6598),
      GM = ["type", "layout", "connectNulls", "ref"],
      CM = ["key"];

    function eM(MM) {
      return eM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, eM(MM)
    }

    function bM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function wM() {
      return wM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, wM.apply(this, arguments)
    }

    function tM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function gM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? tM(Object(iM), !0).forEach((function(rM) {
          ZM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : tM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function uM(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return RM(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return RM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return RM(MM, rM)
      }(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function pM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, oM(OM.key), OM)
      }
    }

    function WM(MM, rM, iM) {
      return rM = DM(rM),
        function(MM, rM) {
          if (rM && ("object" === eM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, sM() ? Reflect.construct(rM, iM || [], DM(MM).constructor) : rM.apply(MM, iM))
    }

    function sM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (sM = function() {
        return !!MM
      })()
    }

    function DM(MM) {
      return DM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, DM(MM)
    }

    function kM(MM, rM) {
      return kM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, kM(MM, rM)
    }

    function ZM(MM, rM, iM) {
      return (rM = oM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function oM(MM) {
      var rM = function(MM, rM) {
        if ("object" != eM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != eM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == eM(rM) ? rM : rM + ""
    }
    var fM = function(MM) {
      function rM() {
        var MM;
        ! function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM);
        for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        return ZM(MM = WM(this, rM, [].concat(OM)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), ZM(MM, "generateSimpleStrokeDasharray", (function(MM, rM) {
          return "".concat(rM, "px ").concat(MM - rM, "px")
        })), ZM(MM, "getStrokeDasharray", (function(iM, OM, SM) {
          var jM = SM.reduce((function(MM, rM) {
            return MM + rM
          }));
          if (!jM) return MM.generateSimpleStrokeDasharray(OM, iM);
          for (var aM = Math.floor(iM / jM), PM = iM % jM, nM = OM - iM, QM = [], zM = 0, LM = 0; zM < SM.length; LM += SM[zM], ++zM)
            if (LM + SM[zM] > PM) {
              QM = [].concat(uM(SM.slice(0, zM)), [PM - LM]);
              break
            } var mM = QM.length % 2 === 0 ? [0, nM] : [nM];
          return [].concat(uM(rM.repeat(SM, aM)), uM(QM), mM).map((function(MM) {
            return "".concat(MM, "px")
          })).join(", ")
        })), ZM(MM, "id", (0, yM.G)("recharts-line-")), ZM(MM, "pathRef", (function(rM) {
          MM.mainCurve = rM
        })), ZM(MM, "handleAnimationEnd", (function() {
          MM.setState({
            isAnimationFinished: !0
          }), MM.props.onAnimationEnd && MM.props.onAnimationEnd()
        })), ZM(MM, "handleAnimationStart", (function() {
          MM.setState({
            isAnimationFinished: !1
          }), MM.props.onAnimationStart && MM.props.onAnimationStart()
        })), MM
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && kM(MM, rM)
      }(rM, MM), iM = rM, jM = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var MM = this.getTotalLength();
            this.setState({
              totalLength: MM
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var MM = this.getTotalLength();
            MM !== this.state.totalLength && this.setState({
              totalLength: MM
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var MM = this.mainCurve;
          try {
            return MM && MM.getTotalLength && MM.getTotalLength() || 0
          } catch (rM) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(MM, rM) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var iM = this.props,
            SM = iM.points,
            jM = iM.xAxis,
            aM = iM.yAxis,
            PM = iM.layout,
            nM = iM.children,
            QM = (0, lM.f)(nM, dM.b);
          if (!QM) return null;
          var zM = function(MM, rM) {
              return {
                x: MM.x,
                y: MM.y,
                value: MM.value,
                errorVal: (0, UM.fb)(MM.payload, rM)
              }
            },
            LM = {
              clipPath: MM ? "url(#clipPath-".concat(rM, ")") : null
            };
          return OM.createElement(hM.b, LM, QM.map((function(MM) {
            return OM.cloneElement(MM, {
              key: "bar-".concat(MM.props.dataKey),
              data: SM,
              xAxis: jM,
              yAxis: aM,
              layout: PM,
              dataPointFormatter: zM
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(MM, iM, SM) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var jM = this.props,
            aM = jM.dot,
            PM = jM.points,
            nM = jM.dataKey,
            QM = (0, lM.b)(this.props, !1),
            zM = (0, lM.b)(aM, !0),
            LM = PM.map((function(MM, iM) {
              var OM = gM(gM(gM({
                key: "dot-".concat(iM),
                r: 3
              }, QM), zM), {}, {
                index: iM,
                cx: MM.x,
                cy: MM.y,
                value: MM.value,
                dataKey: nM,
                payload: MM.payload,
                points: PM
              });
              return rM.renderDotItem(aM, OM)
            })),
            mM = {
              clipPath: MM ? "url(#clipPath-".concat(iM ? "" : "dots-").concat(SM, ")") : null
            };
          return OM.createElement(hM.b, wM({
            className: "recharts-line-dots",
            key: "dots"
          }, mM), LM)
        }
      }, {
        key: "renderCurveStatically",
        value: function(MM, rM, iM, SM) {
          var jM = this.props,
            aM = jM.type,
            PM = jM.layout,
            nM = jM.connectNulls,
            QM = (jM.ref, bM(jM, GM)),
            zM = gM(gM(gM({}, (0, lM.b)(QM, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: rM ? "url(#clipPath-".concat(iM, ")") : null,
              points: MM
            }, SM), {}, {
              type: aM,
              layout: PM,
              connectNulls: nM
            });
          return OM.createElement(mM.e, wM({}, zM, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(MM, rM) {
          var iM = this,
            jM = this.props,
            aM = jM.points,
            PM = jM.strokeDasharray,
            nM = jM.isAnimationActive,
            QM = jM.animationBegin,
            zM = jM.animationDuration,
            LM = jM.animationEasing,
            mM = jM.animationId,
            HM = jM.animateNewValues,
            hM = jM.width,
            JM = jM.height,
            dM = this.state,
            lM = dM.prevPoints,
            EM = dM.totalLength;
          return OM.createElement(SM.d, {
            JL: QM,
            duration: zM,
            isActive: nM,
            easing: LM,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(mM),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(OM) {
            var SM = OM.t;
            if (lM) {
              var jM = lM.length / aM.length,
                nM = aM.map((function(MM, rM) {
                  var iM = Math.floor(rM * jM);
                  if (lM[iM]) {
                    var OM = lM[iM],
                      aM = (0, yM.s)(OM.x, MM.x),
                      PM = (0, yM.s)(OM.y, MM.y);
                    return gM(gM({}, MM), {}, {
                      x: aM(SM),
                      y: PM(SM)
                    })
                  }
                  if (HM) {
                    var nM = (0, yM.s)(2 * hM, MM.x),
                      QM = (0, yM.s)(JM / 2, MM.y);
                    return gM(gM({}, MM), {}, {
                      x: nM(SM),
                      y: QM(SM)
                    })
                  }
                  return gM(gM({}, MM), {}, {
                    x: MM.x,
                    y: MM.y
                  })
                }));
              return iM.renderCurveStatically(nM, MM, rM)
            }
            var QM, zM = (0, yM.s)(0, EM)(SM);
            if (PM) {
              var LM = "".concat(PM).split(/[,\s]+/gim).map((function(MM) {
                return parseFloat(MM)
              }));
              QM = iM.getStrokeDasharray(zM, EM, LM)
            } else QM = iM.generateSimpleStrokeDasharray(EM, zM);
            return iM.renderCurveStatically(aM, MM, rM, {
              strokeDasharray: QM
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(MM, rM) {
          var iM = this.props,
            OM = iM.points,
            SM = iM.isAnimationActive,
            jM = this.state,
            aM = jM.prevPoints,
            PM = jM.totalLength;
          return SM && OM && OM.length && (!aM && PM > 0 || !zM()(aM, OM)) ? this.renderCurveWithAnimation(MM, rM) : this.renderCurveStatically(OM, MM, rM)
        }
      }, {
        key: "render",
        value: function() {
          var MM, rM = this.props,
            iM = rM.hide,
            SM = rM.dot,
            jM = rM.points,
            aM = rM.className,
            PM = rM.xAxis,
            QM = rM.yAxis,
            zM = rM.top,
            mM = rM.left,
            HM = rM.width,
            dM = rM.height,
            yM = rM.isAnimationActive,
            EM = rM.id;
          if (iM || !jM || !jM.length) return null;
          var UM = this.state.isAnimationFinished,
            GM = 1 === jM.length,
            CM = (0, LM.b)("recharts-line", aM),
            eM = PM && PM.allowDataOverflow,
            bM = QM && QM.allowDataOverflow,
            wM = eM || bM,
            tM = nM()(EM) ? this.id : EM,
            gM = null !== (MM = (0, lM.b)(SM, !1)) && void 0 !== MM ? MM : {
              r: 3,
              strokeWidth: 2
            },
            uM = gM.r,
            RM = void 0 === uM ? 3 : uM,
            pM = gM.strokeWidth,
            WM = void 0 === pM ? 2 : pM,
            sM = ((0, lM.t)(SM) ? SM : {}).clipDot,
            DM = void 0 === sM || sM,
            kM = 2 * RM + WM;
          return OM.createElement(hM.b, {
            className: CM
          }, eM || bM ? OM.createElement("defs", null, OM.createElement("clipPath", {
            id: "clipPath-".concat(tM)
          }, OM.createElement("rect", {
            x: eM ? mM : mM - HM / 2,
            y: bM ? zM : zM - dM / 2,
            width: eM ? HM : 2 * HM,
            height: bM ? dM : 2 * dM
          })), !DM && OM.createElement("clipPath", {
            id: "clipPath-dots-".concat(tM)
          }, OM.createElement("rect", {
            x: mM - kM / 2,
            y: zM - kM / 2,
            width: HM + kM,
            height: dM + kM
          }))) : null, !GM && this.renderCurve(wM, tM), this.renderErrorBar(wM, tM), (GM || SM) && this.renderDots(wM, DM, tM), (!yM || UM) && JM.d.renderCallByParent(this.props, jM))
        }
      }], PM = [{
        key: "getDerivedStateFromProps",
        value: function(MM, rM) {
          return MM.animationId !== rM.prevAnimationId ? {
            prevAnimationId: MM.animationId,
            curPoints: MM.points,
            prevPoints: rM.curPoints
          } : MM.points !== rM.curPoints ? {
            curPoints: MM.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(MM, rM) {
          for (var iM = MM.length % 2 !== 0 ? [].concat(uM(MM), [0]) : MM, OM = [], SM = 0; SM < rM; ++SM) OM = [].concat(uM(OM), uM(iM));
          return OM
        }
      }, {
        key: "renderDotItem",
        value: function(MM, rM) {
          var iM;
          if (OM.isValidElement(MM)) iM = OM.cloneElement(MM, rM);
          else if (aM()(MM)) iM = MM(rM);
          else {
            var SM = rM.key,
              jM = bM(rM, CM),
              PM = (0, LM.b)("recharts-line-dot", "boolean" !== typeof MM ? MM.className : "");
            iM = OM.createElement(HM.b, wM({
              key: SM
            }, jM, {
              className: PM
            }))
          }
          return iM
        }
      }], jM && pM(iM.prototype, jM), PM && pM(iM, PM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, jM, PM
    }(OM.PureComponent);
    ZM(fM, "displayName", "Line"), ZM(fM, "defaultProps", {
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
      isAnimationActive: !EM.d.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), ZM(fM, "getComposedData", (function(MM) {
      var rM = MM.props,
        iM = MM.xAxis,
        OM = MM.yAxis,
        SM = MM.xAxisTicks,
        jM = MM.yAxisTicks,
        aM = MM.dataKey,
        PM = MM.bandSize,
        QM = MM.displayedData,
        zM = MM.offset,
        LM = rM.layout;
      return gM({
        points: QM.map((function(MM, rM) {
          var QM = (0, UM.fb)(MM, aM);
          return "horizontal" === LM ? {
            x: (0, UM.J)({
              axis: iM,
              ticks: SM,
              bandSize: PM,
              entry: MM,
              index: rM
            }),
            y: nM()(QM) ? null : OM.scale(QM),
            value: QM,
            payload: MM
          } : {
            x: nM()(QM) ? null : iM.scale(QM),
            y: (0, UM.J)({
              axis: OM,
              ticks: jM,
              bandSize: PM,
              entry: MM,
              index: rM
            }),
            value: QM,
            payload: MM
          }
        })),
        layout: LM
      }, zM)
    }))
  },
  6790: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => WM
    });
    var OM = iM(44),
      SM = iM(5712),
      jM = iM.n(SM),
      aM = iM(6795),
      PM = iM.n(aM),
      nM = iM(5491),
      QM = iM(6429),
      zM = iM(6691),
      LM = iM(6702),
      mM = iM(5595),
      HM = iM(6707),
      hM = iM(5873),
      JM = iM(5876),
      dM = iM(6801);

    function yM(MM) {
      return yM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, yM(MM)
    }

    function lM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, tM(OM.key), OM)
      }
    }

    function EM(MM, rM, iM) {
      return rM = GM(rM),
        function(MM, rM) {
          if (rM && ("object" === yM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, UM() ? Reflect.construct(rM, iM || [], GM(MM).constructor) : rM.apply(MM, iM))
    }

    function UM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (UM = function() {
        return !!MM
      })()
    }

    function GM(MM) {
      return GM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, GM(MM)
    }

    function CM(MM, rM) {
      return CM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, CM(MM, rM)
    }

    function eM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function bM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? eM(Object(iM), !0).forEach((function(rM) {
          wM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : eM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function wM(MM, rM, iM) {
      return (rM = tM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function tM(MM) {
      var rM = function(MM, rM) {
        if ("object" != yM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != yM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == yM(rM) ? rM : rM + ""
    }

    function gM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return uM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return uM(MM, rM)
      }(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function RM() {
      return RM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, RM.apply(this, arguments)
    }

    function pM(MM) {
      var rM = MM.x,
        iM = MM.y,
        SM = MM.segment,
        aM = MM.xAxisId,
        yM = MM.yAxisId,
        lM = MM.shape,
        EM = MM.className,
        UM = MM.alwaysShow,
        GM = (0, dM.n)(),
        CM = (0, dM.s)(aM),
        eM = (0, dM.u)(yM),
        wM = (0, dM.r)();
      if (!GM || !wM) return null;
      (0, hM.e)(void 0 === UM, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var tM = function(MM, rM, iM, OM, SM, jM, aM, nM, QM) {
        var zM = SM.x,
          mM = SM.y,
          HM = SM.width,
          hM = SM.height;
        if (iM) {
          var JM = QM.y,
            dM = MM.y.apply(JM, {
              position: jM
            });
          if ((0, LM.d)(QM, "discard") && !MM.y.isInRange(dM)) return null;
          var yM = [{
            x: zM + HM,
            y: dM
          }, {
            x: zM,
            y: dM
          }];
          return "left" === nM ? yM.reverse() : yM
        }
        if (rM) {
          var lM = QM.x,
            EM = MM.x.apply(lM, {
              position: jM
            });
          if ((0, LM.d)(QM, "discard") && !MM.x.isInRange(EM)) return null;
          var UM = [{
            x: EM,
            y: mM + hM
          }, {
            x: EM,
            y: mM
          }];
          return "top" === aM ? UM.reverse() : UM
        }
        if (OM) {
          var GM = QM.segment.map((function(rM) {
            return MM.apply(rM, {
              position: jM
            })
          }));
          return (0, LM.d)(QM, "discard") && PM()(GM, (function(rM) {
            return !MM.isInRange(rM)
          })) ? null : GM
        }
        return null
      }((0, HM.d)({
        x: CM.scale,
        y: eM.scale
      }), (0, mM.x)(rM), (0, mM.x)(iM), SM && 2 === SM.length, wM, MM.position, CM.orientation, eM.orientation, MM);
      if (!tM) return null;
      var uM = gM(tM, 2),
        pM = uM[0],
        WM = pM.x,
        sM = pM.y,
        DM = uM[1],
        kM = DM.x,
        ZM = DM.y,
        oM = bM(bM({
          clipPath: (0, LM.d)(MM, "hidden") ? "url(#".concat(GM, ")") : void 0
        }, (0, JM.b)(MM, !0)), {}, {
          x1: WM,
          y1: sM,
          x2: kM,
          y2: ZM
        });
      return OM.createElement(QM.b, {
        className: (0, nM.b)("recharts-reference-line", EM)
      }, function(MM, rM) {
        return OM.isValidElement(MM) ? OM.cloneElement(MM, rM) : jM()(MM) ? MM(rM) : OM.createElement("line", RM({}, rM, {
          className: "recharts-reference-line-line"
        }))
      }(lM, oM), zM.b.renderCallByParent(MM, (0, HM.j)({
        x1: WM,
        y1: sM,
        x2: kM,
        y2: ZM
      })))
    }
    var WM = function(MM) {
      function rM() {
        return function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM), EM(this, rM, arguments)
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && CM(MM, rM)
      }(rM, MM), iM = rM, (SM = [{
        key: "render",
        value: function() {
          return OM.createElement(pM, this.props)
        }
      }]) && lM(iM.prototype, SM), jM && lM(iM, jM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, SM, jM
    }(OM.Component);
    wM(WM, "displayName", "ReferenceLine"), wM(WM, "defaultProps", {
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
  6835: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => lM
    });
    var OM = iM(44),
      SM = iM(5491),
      jM = iM(6801),
      aM = iM(6842),
      PM = iM(6598);

    function nM(MM) {
      return nM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, nM(MM)
    }

    function QM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, JM(OM.key), OM)
      }
    }

    function zM(MM, rM, iM) {
      return rM = mM(rM),
        function(MM, rM) {
          if (rM && ("object" === nM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, LM() ? Reflect.construct(rM, iM || [], mM(MM).constructor) : rM.apply(MM, iM))
    }

    function LM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (LM = function() {
        return !!MM
      })()
    }

    function mM(MM) {
      return mM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, mM(MM)
    }

    function HM(MM, rM) {
      return HM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, HM(MM, rM)
    }

    function hM(MM, rM, iM) {
      return (rM = JM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function JM(MM) {
      var rM = function(MM, rM) {
        if ("object" != nM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != nM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == nM(rM) ? rM : rM + ""
    }

    function dM() {
      return dM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, dM.apply(this, arguments)
    }

    function yM(MM) {
      var rM = MM.xAxisId,
        iM = (0, jM.j)(),
        nM = (0, jM.f)(),
        QM = (0, jM.s)(rM);
      return null == QM ? null : OM.createElement(aM.d, dM({}, QM, {
        className: (0, SM.b)("recharts-".concat(QM.axisType, " ").concat(QM.axisType), QM.className),
        viewBox: {
          x: 0,
          y: 0,
          width: iM,
          height: nM
        },
        ticksGenerator: function(MM) {
          return (0, PM.Z)(MM, !0)
        }
      }))
    }
    var lM = function(MM) {
      function rM() {
        return function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM), zM(this, rM, arguments)
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && HM(MM, rM)
      }(rM, MM), iM = rM, (SM = [{
        key: "render",
        value: function() {
          return OM.createElement(yM, this.props)
        }
      }]) && QM(iM.prototype, SM), jM && QM(iM, jM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, SM, jM
    }(OM.Component);
    hM(lM, "displayName", "XAxis"), hM(lM, "defaultProps", {
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
  6852: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => lM
    });
    var OM = iM(44),
      SM = iM(5491),
      jM = iM(6801),
      aM = iM(6842),
      PM = iM(6598);

    function nM(MM) {
      return nM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, nM(MM)
    }

    function QM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, JM(OM.key), OM)
      }
    }

    function zM(MM, rM, iM) {
      return rM = mM(rM),
        function(MM, rM) {
          if (rM && ("object" === nM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, LM() ? Reflect.construct(rM, iM || [], mM(MM).constructor) : rM.apply(MM, iM))
    }

    function LM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (LM = function() {
        return !!MM
      })()
    }

    function mM(MM) {
      return mM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, mM(MM)
    }

    function HM(MM, rM) {
      return HM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, HM(MM, rM)
    }

    function hM(MM, rM, iM) {
      return (rM = JM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function JM(MM) {
      var rM = function(MM, rM) {
        if ("object" != nM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != nM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == nM(rM) ? rM : rM + ""
    }

    function dM() {
      return dM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, dM.apply(this, arguments)
    }
    var yM = function(MM) {
        var rM = MM.yAxisId,
          iM = (0, jM.j)(),
          nM = (0, jM.f)(),
          QM = (0, jM.u)(rM);
        return null == QM ? null : OM.createElement(aM.d, dM({}, QM, {
          className: (0, SM.b)("recharts-".concat(QM.axisType, " ").concat(QM.axisType), QM.className),
          viewBox: {
            x: 0,
            y: 0,
            width: iM,
            height: nM
          },
          ticksGenerator: function(MM) {
            return (0, PM.Z)(MM, !0)
          }
        }))
      },
      lM = function(MM) {
        function rM() {
          return function(MM, rM) {
            if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
          }(this, rM), zM(this, rM, arguments)
        }
        return function(MM, rM) {
          if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
          MM.prototype = Object.create(rM && rM.prototype, {
            constructor: {
              value: MM,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(MM, "prototype", {
            writable: !1
          }), rM && HM(MM, rM)
        }(rM, MM), iM = rM, (SM = [{
          key: "render",
          value: function() {
            return OM.createElement(yM, this.props)
          }
        }]) && QM(iM.prototype, SM), jM && QM(iM, jM), Object.defineProperty(iM, "prototype", {
          writable: !1
        }), iM;
        var iM, SM, jM
      }(OM.Component);
    hM(lM, "displayName", "YAxis"), hM(lM, "defaultProps", {
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
  6849: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => JM
    });
    var OM = iM(5712),
      SM = iM.n(OM),
      jM = iM(5595),
      aM = iM(6589),
      PM = iM(6438),
      nM = iM(6707);

    function QM(MM, rM, iM) {
      if (rM < 1) return [];
      if (1 === rM && void 0 === iM) return MM;
      for (var OM = [], SM = 0; SM < MM.length; SM += rM) {
        if (void 0 !== iM && !0 !== iM(MM[SM])) return;
        OM.push(MM[SM])
      }
      return OM
    }

    function zM(MM, rM, iM, OM, SM) {
      if (MM * rM < MM * OM || MM * rM > MM * SM) return !1;
      var jM = iM();
      return MM * (rM - MM * jM / 2 - OM) >= 0 && MM * (rM + MM * jM / 2 - SM) <= 0
    }

    function LM(MM) {
      return LM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, LM(MM)
    }

    function mM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function HM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? mM(Object(iM), !0).forEach((function(rM) {
          hM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : mM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function hM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != LM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != LM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == LM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function JM(MM, rM, iM) {
      var OM = MM.bL,
        LM = MM.ticks,
        mM = MM.viewBox,
        hM = MM.minTickGap,
        JM = MM.orientation,
        dM = MM.interval,
        yM = MM.tickFormatter,
        lM = MM.unit,
        EM = MM.angle;
      if (!LM || !LM.length || !OM) return [];
      if ((0, jM.y)(dM) || PM.d.isSsr) return function(MM, rM) {
        return QM(MM, rM + 1)
      }(LM, "number" === typeof dM && (0, jM.y)(dM) ? dM : 0);
      var UM = [],
        GM = "top" === JM || "bottom" === JM ? "width" : "height",
        CM = lM && "width" === GM ? (0, aM.f)(lM, {
          fontSize: rM,
          letterSpacing: iM
        }) : {
          width: 0,
          height: 0
        },
        eM = function(MM, OM) {
          var jM = SM()(yM) ? yM(MM.value, OM) : MM.value;
          return "width" === GM ? function(MM, rM, iM) {
            var OM = {
              width: MM.width + rM.width,
              height: MM.height + rM.height
            };
            return (0, nM.h)(OM, iM)
          }((0, aM.f)(jM, {
            fontSize: rM,
            letterSpacing: iM
          }), CM, EM) : (0, aM.f)(jM, {
            fontSize: rM,
            letterSpacing: iM
          })[GM]
        },
        bM = LM.length >= 2 ? (0, jM.D)(LM[1].coordinate - LM[0].coordinate) : 1,
        wM = function(MM, rM, iM) {
          var OM = "width" === iM,
            SM = MM.x,
            jM = MM.y,
            aM = MM.width,
            PM = MM.height;
          return 1 === rM ? {
            start: OM ? SM : jM,
            end: OM ? SM + aM : jM + PM
          } : {
            start: OM ? SM + aM : jM + PM,
            end: OM ? SM : jM
          }
        }(mM, bM, GM);
      return "equidistantPreserveStart" === dM ? function(MM, rM, iM, OM, SM) {
        for (var jM, aM = (OM || []).slice(), PM = rM.start, nM = rM.end, LM = 0, mM = 1, HM = PM, hM = function() {
            var rM = null === OM || void 0 === OM ? void 0 : OM[LM];
            if (void 0 === rM) return {
              v: QM(OM, mM)
            };
            var jM, aM = LM,
              hM = function() {
                return void 0 === jM && (jM = iM(rM, aM)), jM
              },
              JM = rM.coordinate,
              dM = 0 === LM || zM(MM, JM, hM, HM, nM);
            dM || (LM = 0, HM = PM, mM += 1), dM && (HM = JM + MM * (hM() / 2 + SM), LM += mM)
          }; mM <= aM.length;)
          if (jM = hM()) return jM.v;
        return []
      }(bM, wM, eM, LM, hM) : (UM = "preserveStart" === dM || "preserveStartEnd" === dM ? function(MM, rM, iM, OM, SM, jM) {
        var aM = (OM || []).slice(),
          PM = aM.length,
          nM = rM.start,
          QM = rM.end;
        if (jM) {
          var LM = OM[PM - 1],
            mM = iM(LM, PM - 1),
            hM = MM * (LM.coordinate + MM * mM / 2 - QM);
          aM[PM - 1] = LM = HM(HM({}, LM), {}, {
            tickCoord: hM > 0 ? LM.coordinate - hM * MM : LM.coordinate
          }), zM(MM, LM.tickCoord, (function() {
            return mM
          }), nM, QM) && (QM = LM.tickCoord - MM * (mM / 2 + SM), aM[PM - 1] = HM(HM({}, LM), {}, {
            isShow: !0
          }))
        }
        for (var JM = jM ? PM - 1 : PM, dM = function(rM) {
            var OM, jM = aM[rM],
              PM = function() {
                return void 0 === OM && (OM = iM(jM, rM)), OM
              };
            if (0 === rM) {
              var LM = MM * (jM.coordinate - MM * PM() / 2 - nM);
              aM[rM] = jM = HM(HM({}, jM), {}, {
                tickCoord: LM < 0 ? jM.coordinate - LM * MM : jM.coordinate
              })
            } else aM[rM] = jM = HM(HM({}, jM), {}, {
              tickCoord: jM.coordinate
            });
            zM(MM, jM.tickCoord, PM, nM, QM) && (nM = jM.tickCoord + MM * (PM() / 2 + SM), aM[rM] = HM(HM({}, jM), {}, {
              isShow: !0
            }))
          }, yM = 0; yM < JM; yM++) dM(yM);
        return aM
      }(bM, wM, eM, LM, hM, "preserveStartEnd" === dM) : function(MM, rM, iM, OM, SM) {
        for (var jM = (OM || []).slice(), aM = jM.length, PM = rM.start, nM = rM.end, QM = function(rM) {
            var OM, QM = jM[rM],
              LM = function() {
                return void 0 === OM && (OM = iM(QM, rM)), OM
              };
            if (rM === aM - 1) {
              var mM = MM * (QM.coordinate + MM * LM() / 2 - nM);
              jM[rM] = QM = HM(HM({}, QM), {}, {
                tickCoord: mM > 0 ? QM.coordinate - mM * MM : QM.coordinate
              })
            } else jM[rM] = QM = HM(HM({}, QM), {}, {
              tickCoord: QM.coordinate
            });
            zM(MM, QM.tickCoord, LM, PM, nM) && (nM = QM.tickCoord - MM * (LM() / 2 + SM), jM[rM] = HM(HM({}, QM), {}, {
              isShow: !0
            }))
          }, LM = aM - 1; LM >= 0; LM--) QM(LM);
        return jM
      }(bM, wM, eM, LM, hM), UM.filter((function(MM) {
        return MM.isShow
      })))
    }
  },
  6860: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => nM
    });
    var OM = iM(5907),
      SM = iM(6733),
      jM = iM(6835),
      aM = iM(6852),
      PM = iM(6707),
      nM = (0, OM.e)({
        chartName: "BarChart",
        GraphicalChild: SM.d,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: jM.b
        }, {
          axisType: "yAxis",
          AxisComp: aM.b
        }],
        formatAxisMap: PM.e
      })
  },
  5901: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => Sr
    });
    var OM = iM(5907),
      SM = iM(6825),
      jM = iM(6733),
      aM = iM(6833),
      PM = iM(44),
      nM = iM(6582),
      QM = iM(5864),
      zM = iM.n(QM),
      LM = iM(6657),
      mM = iM.n(LM),
      HM = iM(5712),
      hM = iM.n(HM),
      JM = iM(5491),
      dM = iM(6429),
      yM = iM(6741),
      lM = iM(5876),
      EM = iM(6438);

    function UM(MM) {
      return UM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, UM(MM)
    }

    function GM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, gM(OM.key), OM)
      }
    }

    function CM(MM, rM, iM) {
      return rM = bM(rM),
        function(MM, rM) {
          if (rM && ("object" === UM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, eM() ? Reflect.construct(rM, iM || [], bM(MM).constructor) : rM.apply(MM, iM))
    }

    function eM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (eM = function() {
        return !!MM
      })()
    }

    function bM(MM) {
      return bM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, bM(MM)
    }

    function wM(MM, rM) {
      return wM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, wM(MM, rM)
    }

    function tM(MM, rM, iM) {
      return (rM = gM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function gM(MM) {
      var rM = function(MM, rM) {
        if ("object" != UM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != UM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == UM(rM) ? rM : rM + ""
    }
    var uM = function(MM) {
      function rM() {
        return function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM), CM(this, rM, arguments)
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && wM(MM, rM)
      }(rM, MM), iM = rM, (OM = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && GM(iM.prototype, OM), SM && GM(iM, SM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, OM, SM
    }(PM.Component);
    tM(uM, "displayName", "ZAxis"), tM(uM, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var RM = iM(6821),
      pM = iM(6673),
      WM = iM(6739),
      sM = iM(5595),
      DM = iM(6598),
      kM = iM(5898),
      ZM = iM(6515),
      oM = iM(6756),
      fM = ["option", "isActive"];

    function YM() {
      return YM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, YM.apply(this, arguments)
    }

    function NM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function AM(MM) {
      var rM = MM.option,
        iM = MM.isActive,
        OM = NM(MM, fM);
      return "string" === typeof rM ? PM.createElement(oM.e, YM({
        option: PM.createElement(ZM.d, YM({
          type: rM
        }, OM)),
        isActive: iM,
        shapeType: "symbols"
      }, OM)) : PM.createElement(oM.e, YM({
        option: rM,
        isActive: iM,
        shapeType: "symbols"
      }, OM))
    }

    function xM(MM) {
      return xM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, xM(MM)
    }

    function vM() {
      return vM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, vM.apply(this, arguments)
    }

    function FM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function BM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? FM(Object(iM), !0).forEach((function(rM) {
          VM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : FM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function XM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, cM(OM.key), OM)
      }
    }

    function IM(MM, rM, iM) {
      return rM = qM(rM),
        function(MM, rM) {
          if (rM && ("object" === xM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, KM() ? Reflect.construct(rM, iM || [], qM(MM).constructor) : rM.apply(MM, iM))
    }

    function KM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (KM = function() {
        return !!MM
      })()
    }

    function qM(MM) {
      return qM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, qM(MM)
    }

    function TM(MM, rM) {
      return TM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, TM(MM, rM)
    }

    function VM(MM, rM, iM) {
      return (rM = cM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function cM(MM) {
      var rM = function(MM, rM) {
        if ("object" != xM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != xM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == xM(rM) ? rM : rM + ""
    }
    var Mr = function(MM) {
      function rM() {
        var MM;
        ! function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM);
        for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        return VM(MM = IM(this, rM, [].concat(OM)), "state", {
          isAnimationFinished: !1
        }), VM(MM, "handleAnimationEnd", (function() {
          MM.setState({
            isAnimationFinished: !0
          })
        })), VM(MM, "handleAnimationStart", (function() {
          MM.setState({
            isAnimationFinished: !1
          })
        })), VM(MM, "id", (0, sM.G)("recharts-scatter-")), MM
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && TM(MM, rM)
      }(rM, MM), iM = rM, OM = [{
        key: "renderSymbolsStatically",
        value: function(MM) {
          var rM = this,
            iM = this.props,
            OM = iM.shape,
            SM = iM.activeShape,
            jM = iM.activeIndex,
            aM = (0, lM.b)(this.props, !1);
          return MM.map((function(MM, iM) {
            var nM = jM === iM,
              QM = nM ? SM : OM,
              zM = BM(BM({}, aM), MM);
            return PM.createElement(dM.b, vM({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === MM || void 0 === MM ? void 0 : MM.cx, "-").concat(null === MM || void 0 === MM ? void 0 : MM.cy, "-").concat(null === MM || void 0 === MM ? void 0 : MM.size, "-").concat(iM)
            }, (0, kM.l)(rM.props, MM, iM), {
              role: "img"
            }), PM.createElement(AM, vM({
              option: QM,
              isActive: nM,
              key: "symbol-".concat(iM)
            }, zM)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var MM = this,
            rM = this.props,
            iM = rM.points,
            OM = rM.isAnimationActive,
            SM = rM.animationBegin,
            jM = rM.animationDuration,
            aM = rM.animationEasing,
            QM = rM.animationId,
            zM = this.state.prevPoints;
          return PM.createElement(nM.d, {
            JL: SM,
            duration: jM,
            isActive: OM,
            easing: aM,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(QM),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(rM) {
            var OM = rM.t,
              SM = iM.map((function(MM, rM) {
                var iM = zM && zM[rM];
                if (iM) {
                  var SM = (0, sM.s)(iM.cx, MM.cx),
                    jM = (0, sM.s)(iM.cy, MM.cy),
                    aM = (0, sM.s)(iM.size, MM.size);
                  return BM(BM({}, MM), {}, {
                    cx: SM(OM),
                    cy: jM(OM),
                    size: aM(OM)
                  })
                }
                var PM = (0, sM.s)(0, MM.size);
                return BM(BM({}, MM), {}, {
                  size: PM(OM)
                })
              }));
            return PM.createElement(dM.b, null, MM.renderSymbolsStatically(SM))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var MM = this.props,
            rM = MM.points,
            iM = MM.isAnimationActive,
            OM = this.state.prevPoints;
          return !(iM && rM && rM.length) || OM && mM()(OM, rM) ? this.renderSymbolsStatically(rM) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var MM = this.props,
            rM = MM.points,
            iM = MM.xAxis,
            OM = MM.yAxis,
            SM = MM.children,
            jM = (0, lM.f)(SM, pM.b);
          return jM ? jM.map((function(MM, SM) {
            var jM = MM.props,
              aM = jM.direction,
              nM = jM.dataKey;
            return PM.cloneElement(MM, {
              key: "".concat(aM, "-").concat(nM, "-").concat(rM[SM]),
              data: rM,
              xAxis: iM,
              yAxis: OM,
              layout: "x" === aM ? "vertical" : "horizontal",
              dataPointFormatter: function(MM, rM) {
                return {
                  x: MM.cx,
                  y: MM.cy,
                  value: "x" === aM ? +MM.node.x : +MM.node.y,
                  errorVal: (0, DM.fb)(MM, rM)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var MM, rM, iM = this.props,
            OM = iM.points,
            SM = iM.line,
            jM = iM.lineType,
            aM = iM.lineJointType,
            nM = (0, lM.b)(this.props, !1),
            QM = (0, lM.b)(SM, !1);
          if ("joint" === jM) MM = OM.map((function(MM) {
            return {
              x: MM.cx,
              y: MM.cy
            }
          }));
          else if ("fitting" === jM) {
            var zM = (0, sM.i)(OM),
              LM = zM.xmin,
              mM = zM.xmax,
              HM = zM.a,
              JM = zM.b,
              yM = function(MM) {
                return HM * MM + JM
              };
            MM = [{
              x: LM,
              y: yM(LM)
            }, {
              x: mM,
              y: yM(mM)
            }]
          }
          var EM = BM(BM(BM({}, nM), {}, {
            fill: "none",
            stroke: nM && nM.fill
          }, QM), {}, {
            points: MM
          });
          return rM = PM.isValidElement(SM) ? PM.cloneElement(SM, EM) : hM()(SM) ? SM(EM) : PM.createElement(RM.e, vM({}, EM, {
            type: aM
          })), PM.createElement(dM.b, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, rM)
        }
      }, {
        key: "render",
        value: function() {
          var MM = this.props,
            rM = MM.hide,
            iM = MM.points,
            OM = MM.line,
            SM = MM.className,
            jM = MM.xAxis,
            aM = MM.yAxis,
            nM = MM.left,
            QM = MM.top,
            LM = MM.width,
            mM = MM.height,
            HM = MM.id,
            hM = MM.isAnimationActive;
          if (rM || !iM || !iM.length) return null;
          var lM = this.state.isAnimationFinished,
            EM = (0, JM.b)("recharts-scatter", SM),
            UM = jM && jM.allowDataOverflow,
            GM = aM && aM.allowDataOverflow,
            CM = UM || GM,
            eM = zM()(HM) ? this.id : HM;
          return PM.createElement(dM.b, {
            className: EM,
            clipPath: CM ? "url(#clipPath-".concat(eM, ")") : null
          }, UM || GM ? PM.createElement("defs", null, PM.createElement("clipPath", {
            id: "clipPath-".concat(eM)
          }, PM.createElement("rect", {
            x: UM ? nM : nM - LM / 2,
            y: GM ? QM : QM - mM / 2,
            width: UM ? LM : 2 * LM,
            height: GM ? mM : 2 * mM
          }))) : null, OM && this.renderLine(), this.renderErrorBar(), PM.createElement(dM.b, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!hM || lM) && yM.d.renderCallByParent(this.props, iM))
        }
      }], SM = [{
        key: "getDerivedStateFromProps",
        value: function(MM, rM) {
          return MM.animationId !== rM.prevAnimationId ? {
            prevAnimationId: MM.animationId,
            curPoints: MM.points,
            prevPoints: rM.curPoints
          } : MM.points !== rM.curPoints ? {
            curPoints: MM.points
          } : null
        }
      }], OM && XM(iM.prototype, OM), SM && XM(iM, SM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, OM, SM
    }(PM.PureComponent);
    VM(Mr, "displayName", "Scatter"), VM(Mr, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !EM.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), VM(Mr, "getComposedData", (function(MM) {
      var rM = MM.xAxis,
        iM = MM.yAxis,
        OM = MM.zAxis,
        SM = MM.item,
        jM = MM.displayedData,
        aM = MM.xAxisTicks,
        PM = MM.yAxisTicks,
        nM = MM.offset,
        QM = SM.props.tooltipType,
        LM = (0, lM.f)(SM.props.children, WM.d),
        mM = zM()(rM.dataKey) ? SM.props.dataKey : rM.dataKey,
        HM = zM()(iM.dataKey) ? SM.props.dataKey : iM.dataKey,
        hM = OM && OM.dataKey,
        JM = OM ? OM.range : uM.defaultProps.range,
        dM = JM && JM[0],
        yM = rM.scale.bandwidth ? rM.scale.bandwidth() : 0,
        EM = iM.scale.bandwidth ? iM.scale.bandwidth() : 0,
        UM = jM.map((function(MM, jM) {
          var nM = (0, DM.fb)(MM, mM),
            JM = (0, DM.fb)(MM, HM),
            lM = !zM()(hM) && (0, DM.fb)(MM, hM) || "-",
            UM = [{
              name: zM()(rM.dataKey) ? SM.props.name : rM.name || rM.dataKey,
              unit: rM.unit || "",
              value: nM,
              payload: MM,
              dataKey: mM,
              type: QM
            }, {
              name: zM()(iM.dataKey) ? SM.props.name : iM.name || iM.dataKey,
              unit: iM.unit || "",
              value: JM,
              payload: MM,
              dataKey: HM,
              type: QM
            }];
          "-" !== lM && UM.push({
            name: OM.name || OM.dataKey,
            unit: OM.unit || "",
            value: lM,
            payload: MM,
            dataKey: hM,
            type: QM
          });
          var GM = (0, DM.J)({
              axis: rM,
              ticks: aM,
              bandSize: yM,
              entry: MM,
              index: jM,
              dataKey: mM
            }),
            CM = (0, DM.J)({
              axis: iM,
              ticks: PM,
              bandSize: EM,
              entry: MM,
              index: jM,
              dataKey: HM
            }),
            eM = "-" !== lM ? OM.scale(lM) : dM,
            bM = Math.sqrt(Math.max(eM, 0) / Math.PI);
          return BM(BM({}, MM), {}, {
            cx: GM,
            cy: CM,
            x: GM - bM,
            y: CM - bM,
            xAxis: rM,
            yAxis: iM,
            zAxis: OM,
            width: 2 * bM,
            height: 2 * bM,
            size: eM,
            node: {
              x: nM,
              y: JM,
              z: lM
            },
            tooltipPayload: UM,
            tooltipPosition: {
              x: GM,
              y: CM
            },
            payload: MM
          }, LM && LM[jM] && LM[jM].props)
        }));
      return BM({
        points: UM
      }, nM)
    }));
    var rr = iM(6835),
      ir = iM(6852),
      Or = iM(6707),
      Sr = (0, OM.e)({
        chartName: "ComposedChart",
        GraphicalChild: [aM.b, SM.e, jM.d, Mr],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: rr.b
        }, {
          axisType: "yAxis",
          AxisComp: ir.b
        }, {
          axisType: "zAxis",
          AxisComp: uM
        }],
        formatAxisMap: Or.e
      })
  },
  5907: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => Ai
    });
    var OM = iM(44),
      SM = iM(5864),
      jM = iM.n(SM),
      aM = iM(5712),
      PM = iM.n(aM),
      nM = iM(5911),
      QM = iM.n(nM),
      zM = iM(5625),
      LM = iM.n(zM),
      mM = iM(5952),
      HM = iM.n(mM),
      hM = iM(5500),
      JM = iM.n(hM),
      dM = iM(5491),
      yM = iM(6417),
      lM = iM(6424),
      EM = iM(6429),
      UM = iM(6431),
      GM = iM(6513),
      CM = iM(6574),
      eM = iM(6576),
      bM = iM(5876),
      wM = iM(6607),
      tM = iM(6585),
      gM = iM(6598),
      uM = iM(5595);

    function RM(MM) {
      return RM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, RM(MM)
    }

    function pM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function WM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? pM(Object(iM), !0).forEach((function(rM) {
          sM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : pM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function sM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != RM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != RM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == RM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var DM = ["Webkit", "Moz", "O", "ms"];

    function kM(MM) {
      return kM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, kM(MM)
    }

    function ZM() {
      return ZM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, ZM.apply(this, arguments)
    }

    function oM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function fM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? oM(Object(iM), !0).forEach((function(rM) {
          FM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : oM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function YM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, BM(OM.key), OM)
      }
    }

    function NM(MM, rM, iM) {
      return rM = xM(rM),
        function(MM, rM) {
          if (rM && ("object" === kM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, AM() ? Reflect.construct(rM, iM || [], xM(MM).constructor) : rM.apply(MM, iM))
    }

    function AM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (AM = function() {
        return !!MM
      })()
    }

    function xM(MM) {
      return xM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, xM(MM)
    }

    function vM(MM, rM) {
      return vM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, vM(MM, rM)
    }

    function FM(MM, rM, iM) {
      return (rM = BM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function BM(MM) {
      var rM = function(MM, rM) {
        if ("object" != kM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != kM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == kM(rM) ? rM : rM + ""
    }
    var XM = function(MM) {
        return MM.changedTouches && !!MM.changedTouches.length
      },
      IM = function(MM) {
        function rM(MM) {
          var iM;
          return function(MM, rM) {
            if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
          }(this, rM), FM(iM = NM(this, rM, [MM]), "handleDrag", (function(MM) {
            iM.leaveTimer && (clearTimeout(iM.leaveTimer), iM.leaveTimer = null), iM.state.isTravellerMoving ? iM.handleTravellerMove(MM) : iM.state.isSlideMoving && iM.handleSlideDrag(MM)
          })), FM(iM, "handleTouchMove", (function(MM) {
            null != MM.changedTouches && MM.changedTouches.length > 0 && iM.handleDrag(MM.changedTouches[0])
          })), FM(iM, "handleDragEnd", (function() {
            iM.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var MM = iM.props,
                rM = MM.endIndex,
                OM = MM.onDragEnd,
                SM = MM.startIndex;
              null === OM || void 0 === OM || OM({
                endIndex: rM,
                startIndex: SM
              })
            })), iM.detachDragEndListener()
          })), FM(iM, "handleLeaveWrapper", (function() {
            (iM.state.isTravellerMoving || iM.state.isSlideMoving) && (iM.leaveTimer = window.setTimeout(iM.handleDragEnd, iM.props.leaveTimeOut))
          })), FM(iM, "handleEnterSlideOrTraveller", (function() {
            iM.setState({
              isTextActive: !0
            })
          })), FM(iM, "handleLeaveSlideOrTraveller", (function() {
            iM.setState({
              isTextActive: !1
            })
          })), FM(iM, "handleSlideDragStart", (function(MM) {
            var rM = XM(MM) ? MM.changedTouches[0] : MM;
            iM.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: rM.pageX
            }), iM.attachDragEndListener()
          })), iM.travellerDragStartHandlers = {
            startX: iM.handleTravellerDragStart.bind(iM, "startX"),
            endX: iM.handleTravellerDragStart.bind(iM, "endX")
          }, iM.state = {}, iM
        }
        return function(MM, rM) {
          if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
          MM.prototype = Object.create(rM && rM.prototype, {
            constructor: {
              value: MM,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(MM, "prototype", {
            writable: !1
          }), rM && vM(MM, rM)
        }(rM, MM), iM = rM, SM = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(MM) {
            var iM = MM.startX,
              OM = MM.endX,
              SM = this.state.scaleValues,
              jM = this.props,
              aM = jM.gap,
              PM = jM.data.length - 1,
              nM = Math.min(iM, OM),
              QM = Math.max(iM, OM),
              zM = rM.getIndexInRange(SM, nM),
              LM = rM.getIndexInRange(SM, QM);
            return {
              startIndex: zM - zM % aM,
              endIndex: LM === PM ? PM : LM - LM % aM
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(MM) {
            var rM = this.props,
              iM = rM.data,
              OM = rM.tickFormatter,
              SM = rM.dataKey,
              jM = (0, gM.fb)(iM[MM], SM, MM);
            return PM()(OM) ? OM(jM, MM) : jM
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
          value: function(MM) {
            var rM = this.state,
              iM = rM.slideMoveStartX,
              OM = rM.startX,
              SM = rM.endX,
              jM = this.props,
              aM = jM.x,
              PM = jM.width,
              nM = jM.travellerWidth,
              QM = jM.startIndex,
              zM = jM.endIndex,
              LM = jM.onChange,
              mM = MM.pageX - iM;
            mM > 0 ? mM = Math.min(mM, aM + PM - nM - SM, aM + PM - nM - OM) : mM < 0 && (mM = Math.max(mM, aM - OM, aM - SM));
            var HM = this.getIndex({
              startX: OM + mM,
              endX: SM + mM
            });
            HM.startIndex === QM && HM.endIndex === zM || !LM || LM(HM), this.setState({
              startX: OM + mM,
              endX: SM + mM,
              slideMoveStartX: MM.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(MM, rM) {
            var iM = XM(rM) ? rM.changedTouches[0] : rM;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: MM,
              brushMoveStartX: iM.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(MM) {
            var rM = this.state,
              iM = rM.brushMoveStartX,
              OM = rM.movingTravellerId,
              SM = rM.endX,
              jM = rM.startX,
              aM = this.state[OM],
              PM = this.props,
              nM = PM.x,
              QM = PM.width,
              zM = PM.travellerWidth,
              LM = PM.onChange,
              mM = PM.gap,
              HM = PM.data,
              hM = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              JM = MM.pageX - iM;
            JM > 0 ? JM = Math.min(JM, nM + QM - zM - aM) : JM < 0 && (JM = Math.max(JM, nM - aM)), hM[OM] = aM + JM;
            var dM = this.getIndex(hM),
              yM = dM.startIndex,
              lM = dM.endIndex;
            this.setState(FM(FM({}, OM, aM + JM), "brushMoveStartX", MM.pageX), (function() {
              LM && function() {
                var MM = HM.length - 1;
                return "startX" === OM && (SM > jM ? yM % mM === 0 : lM % mM === 0) || SM < jM && lM === MM || "endX" === OM && (SM > jM ? lM % mM === 0 : yM % mM === 0) || SM > jM && lM === MM
              }() && LM(dM)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(MM, rM) {
            var iM = this,
              OM = this.state,
              SM = OM.scaleValues,
              jM = OM.startX,
              aM = OM.endX,
              PM = this.state[rM],
              nM = SM.indexOf(PM);
            if (-1 !== nM) {
              var QM = nM + MM;
              if (!(-1 === QM || QM >= SM.length)) {
                var zM = SM[QM];
                "startX" === rM && zM >= aM || "endX" === rM && zM <= jM || this.setState(FM({}, rM, zM), (function() {
                  iM.props.onChange(iM.getIndex({
                    startX: iM.state.startX,
                    endX: iM.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var MM = this.props,
              rM = MM.x,
              iM = MM.y,
              SM = MM.width,
              jM = MM.height,
              aM = MM.fill,
              PM = MM.stroke;
            return OM.createElement("rect", {
              stroke: PM,
              fill: aM,
              x: rM,
              y: iM,
              width: SM,
              height: jM
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var MM = this.props,
              rM = MM.x,
              iM = MM.y,
              SM = MM.width,
              jM = MM.height,
              aM = MM.data,
              PM = MM.children,
              nM = MM.padding,
              QM = OM.Children.only(PM);
            return QM ? OM.cloneElement(QM, {
              x: rM,
              y: iM,
              width: SM,
              height: jM,
              margin: nM,
              compact: !0,
              data: aM
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(MM, iM) {
            var SM, jM, aM = this,
              PM = this.props,
              nM = PM.y,
              QM = PM.travellerWidth,
              zM = PM.height,
              LM = PM.traveller,
              mM = PM.ariaLabel,
              HM = PM.data,
              hM = PM.startIndex,
              JM = PM.endIndex,
              dM = Math.max(MM, this.props.x),
              yM = fM(fM({}, (0, bM.b)(this.props, !1)), {}, {
                x: dM,
                y: nM,
                width: QM,
                height: zM
              }),
              lM = mM || "Min value: ".concat(null === (SM = HM[hM]) || void 0 === SM ? void 0 : SM.name, ", Max value: ").concat(null === (jM = HM[JM]) || void 0 === jM ? void 0 : jM.name);
            return OM.createElement(EM.b, {
              tabIndex: 0,
              role: "slider",
              "aria-label": lM,
              "aria-valuenow": MM,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[iM],
              onTouchStart: this.travellerDragStartHandlers[iM],
              onKeyDown: function(MM) {
                ["ArrowLeft", "ArrowRight"].includes(MM.key) && (MM.preventDefault(), MM.stopPropagation(), aM.handleTravellerMoveKeyboard("ArrowRight" === MM.key ? 1 : -1, iM))
              },
              onFocus: function() {
                aM.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                aM.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, rM.renderTraveller(LM, yM))
          }
        }, {
          key: "renderSlide",
          value: function(MM, rM) {
            var iM = this.props,
              SM = iM.y,
              jM = iM.height,
              aM = iM.stroke,
              PM = iM.travellerWidth,
              nM = Math.min(MM, rM) + PM,
              QM = Math.max(Math.abs(rM - MM) - PM, 0);
            return OM.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: aM,
              fillOpacity: .2,
              x: nM,
              y: SM,
              width: QM,
              height: jM
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var MM = this.props,
              rM = MM.startIndex,
              iM = MM.endIndex,
              SM = MM.y,
              jM = MM.height,
              aM = MM.travellerWidth,
              PM = MM.stroke,
              nM = this.state,
              QM = nM.startX,
              zM = nM.endX,
              LM = {
                pointerEvents: "none",
                fill: PM
              };
            return OM.createElement(EM.b, {
              className: "recharts-brush-texts"
            }, OM.createElement(tM.c, ZM({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(QM, zM) - 5,
              y: SM + jM / 2
            }, LM), this.getTextOfTick(rM)), OM.createElement(tM.c, ZM({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(QM, zM) + aM + 5,
              y: SM + jM / 2
            }, LM), this.getTextOfTick(iM)))
          }
        }, {
          key: "render",
          value: function() {
            var MM = this.props,
              rM = MM.data,
              iM = MM.className,
              SM = MM.children,
              jM = MM.x,
              aM = MM.y,
              PM = MM.width,
              nM = MM.height,
              QM = MM.alwaysShowText,
              zM = this.state,
              LM = zM.startX,
              mM = zM.endX,
              HM = zM.isTextActive,
              hM = zM.isSlideMoving,
              JM = zM.isTravellerMoving,
              yM = zM.isTravellerFocused;
            if (!rM || !rM.length || !(0, uM.y)(jM) || !(0, uM.y)(aM) || !(0, uM.y)(PM) || !(0, uM.y)(nM) || PM <= 0 || nM <= 0) return null;
            var lM = (0, dM.b)("recharts-brush", iM),
              UM = 1 === OM.Children.count(SM),
              GM = function(MM, rM) {
                if (!MM) return null;
                var iM = MM.replace(/(\w)/, (function(MM) {
                    return MM.toUpperCase()
                  })),
                  OM = DM.reduce((function(MM, OM) {
                    return WM(WM({}, MM), {}, sM({}, OM + iM, rM))
                  }), {});
                return OM[MM] = rM, OM
              }("userSelect", "none");
            return OM.createElement(EM.b, {
              className: lM,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: GM
            }, this.renderBackground(), UM && this.renderPanorama(), this.renderSlide(LM, mM), this.renderTravellerLayer(LM, "startX"), this.renderTravellerLayer(mM, "endX"), (HM || hM || JM || yM || QM) && this.renderText())
          }
        }], jM = [{
          key: "renderDefaultTraveller",
          value: function(MM) {
            var rM = MM.x,
              iM = MM.y,
              SM = MM.width,
              jM = MM.height,
              aM = MM.stroke,
              PM = Math.floor(iM + jM / 2) - 1;
            return OM.createElement(OM.Fragment, null, OM.createElement("rect", {
              x: rM,
              y: iM,
              width: SM,
              height: jM,
              fill: aM,
              stroke: "none"
            }), OM.createElement("line", {
              x1: rM + 1,
              y1: PM,
              x2: rM + SM - 1,
              y2: PM,
              fill: "none",
              stroke: "#fff"
            }), OM.createElement("line", {
              x1: rM + 1,
              y1: PM + 2,
              x2: rM + SM - 1,
              y2: PM + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(MM, iM) {
            return OM.isValidElement(MM) ? OM.cloneElement(MM, iM) : PM()(MM) ? MM(iM) : rM.renderDefaultTraveller(iM)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(MM, rM) {
            var iM = MM.data,
              OM = MM.width,
              SM = MM.x,
              jM = MM.travellerWidth,
              aM = MM.updateId,
              PM = MM.startIndex,
              nM = MM.endIndex;
            if (iM !== rM.prevData || aM !== rM.prevUpdateId) return fM({
              prevData: iM,
              prevTravellerWidth: jM,
              prevUpdateId: aM,
              prevX: SM,
              prevWidth: OM
            }, iM && iM.length ? function(MM) {
              var rM = MM.data,
                iM = MM.startIndex,
                OM = MM.endIndex,
                SM = MM.x,
                jM = MM.width,
                aM = MM.travellerWidth;
              if (!rM || !rM.length) return {};
              var PM = rM.length,
                nM = (0, wM.c)().domain(QM()(0, PM)).range([SM, SM + jM - aM]),
                zM = nM.domain().map((function(MM) {
                  return nM(MM)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: nM(iM),
                endX: nM(OM),
                scale: nM,
                scaleValues: zM
              }
            }({
              data: iM,
              width: OM,
              x: SM,
              travellerWidth: jM,
              startIndex: PM,
              endIndex: nM
            }) : {
              scale: null,
              scaleValues: null
            });
            if (rM.scale && (OM !== rM.prevWidth || SM !== rM.prevX || jM !== rM.prevTravellerWidth)) {
              rM.scale.range([SM, SM + OM - jM]);
              var zM = rM.scale.domain().map((function(MM) {
                return rM.scale(MM)
              }));
              return {
                prevData: iM,
                prevTravellerWidth: jM,
                prevUpdateId: aM,
                prevX: SM,
                prevWidth: OM,
                startX: rM.scale(MM.startIndex),
                endX: rM.scale(MM.endIndex),
                scaleValues: zM
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(MM, rM) {
            for (var iM = 0, OM = MM.length - 1; OM - iM > 1;) {
              var SM = Math.floor((iM + OM) / 2);
              MM[SM] > rM ? OM = SM : iM = SM
            }
            return rM >= MM[OM] ? OM : iM
          }
        }], SM && YM(iM.prototype, SM), jM && YM(iM, jM), Object.defineProperty(iM, "prototype", {
          writable: !1
        }), iM;
        var iM, SM, jM
      }(OM.PureComponent);
    FM(IM, "displayName", "Brush"), FM(IM, "defaultProps", {
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
    var KM = iM(6589),
      qM = iM(6682),
      TM = iM(6691),
      VM = iM(6702),
      cM = iM(6707),
      Mr = iM(5873);

    function rr() {
      return rr = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, rr.apply(this, arguments)
    }

    function ir(MM) {
      return ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, ir(MM)
    }

    function Or(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function Sr(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? Or(Object(iM), !0).forEach((function(rM) {
          zr(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : Or(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function jr(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, Lr(OM.key), OM)
      }
    }

    function ar(MM, rM, iM) {
      return rM = nr(rM),
        function(MM, rM) {
          if (rM && ("object" === ir(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, Pr() ? Reflect.construct(rM, iM || [], nr(MM).constructor) : rM.apply(MM, iM))
    }

    function Pr() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (Pr = function() {
        return !!MM
      })()
    }

    function nr(MM) {
      return nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, nr(MM)
    }

    function Qr(MM, rM) {
      return Qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, Qr(MM, rM)
    }

    function zr(MM, rM, iM) {
      return (rM = Lr(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function Lr(MM) {
      var rM = function(MM, rM) {
        if ("object" != ir(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != ir(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == ir(rM) ? rM : rM + ""
    }
    var mr = function(MM) {
      function rM() {
        return function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM), ar(this, rM, arguments)
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && Qr(MM, rM)
      }(rM, MM), iM = rM, (SM = [{
        key: "render",
        value: function() {
          var MM = this.props,
            iM = MM.x,
            SM = MM.y,
            jM = MM.r,
            aM = MM.alwaysShow,
            PM = MM.clipPathId,
            nM = (0, uM.x)(iM),
            QM = (0, uM.x)(SM);
          if ((0, Mr.e)(void 0 === aM, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !nM || !QM) return null;
          var zM = function(MM) {
            var rM = MM.x,
              iM = MM.y,
              OM = MM.xAxis,
              SM = MM.yAxis,
              jM = (0, cM.d)({
                x: OM.scale,
                y: SM.scale
              }),
              aM = jM.apply({
                x: rM,
                y: iM
              }, {
                bandAware: !0
              });
            return (0, VM.d)(MM, "discard") && !jM.isInRange(aM) ? null : aM
          }(this.props);
          if (!zM) return null;
          var LM = zM.x,
            mM = zM.y,
            HM = this.props,
            hM = HM.shape,
            JM = HM.className,
            yM = Sr(Sr({
              clipPath: (0, VM.d)(this.props, "hidden") ? "url(#".concat(PM, ")") : void 0
            }, (0, bM.b)(this.props, !0)), {}, {
              cx: LM,
              cy: mM
            });
          return OM.createElement(EM.b, {
            className: (0, dM.b)("recharts-reference-dot", JM)
          }, rM.renderDot(hM, yM), TM.b.renderCallByParent(this.props, {
            x: LM - jM,
            y: mM - jM,
            width: 2 * jM,
            height: 2 * jM
          }))
        }
      }]) && jr(iM.prototype, SM), jM && jr(iM, jM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, SM, jM
    }(OM.Component);
    zr(mr, "displayName", "ReferenceDot"), zr(mr, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), zr(mr, "renderDot", (function(MM, rM) {
      return OM.isValidElement(MM) ? OM.cloneElement(MM, rM) : PM()(MM) ? MM(rM) : OM.createElement(CM.b, rr({}, rM, {
        cx: rM.cx,
        cy: rM.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var Hr = iM(6790);

    function hr() {
      return hr = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, hr.apply(this, arguments)
    }

    function Jr(MM) {
      return Jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, Jr(MM)
    }

    function dr(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function yr(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? dr(Object(iM), !0).forEach((function(rM) {
          er(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : dr(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function lr(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, br(OM.key), OM)
      }
    }

    function Er(MM, rM, iM) {
      return rM = Gr(rM),
        function(MM, rM) {
          if (rM && ("object" === Jr(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, Ur() ? Reflect.construct(rM, iM || [], Gr(MM).constructor) : rM.apply(MM, iM))
    }

    function Ur() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (Ur = function() {
        return !!MM
      })()
    }

    function Gr(MM) {
      return Gr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, Gr(MM)
    }

    function Cr(MM, rM) {
      return Cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, Cr(MM, rM)
    }

    function er(MM, rM, iM) {
      return (rM = br(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function br(MM) {
      var rM = function(MM, rM) {
        if ("object" != Jr(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != Jr(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == Jr(rM) ? rM : rM + ""
    }
    var wr = function(MM) {
      function rM() {
        return function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM), Er(this, rM, arguments)
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && Cr(MM, rM)
      }(rM, MM), iM = rM, (SM = [{
        key: "render",
        value: function() {
          var MM = this.props,
            iM = MM.x1,
            SM = MM.x2,
            jM = MM.y1,
            aM = MM.y2,
            PM = MM.className,
            nM = MM.alwaysShow,
            QM = MM.clipPathId;
          (0, Mr.e)(void 0 === nM, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var zM = (0, uM.x)(iM),
            LM = (0, uM.x)(SM),
            mM = (0, uM.x)(jM),
            HM = (0, uM.x)(aM),
            hM = this.props.shape;
          if (!zM && !LM && !mM && !HM && !hM) return null;
          var JM = function(MM, rM, iM, OM, SM) {
            var jM = SM.x1,
              aM = SM.x2,
              PM = SM.y1,
              nM = SM.y2,
              QM = SM.xAxis,
              zM = SM.yAxis;
            if (!QM || !zM) return null;
            var LM = (0, cM.d)({
                x: QM.scale,
                y: zM.scale
              }),
              mM = {
                x: MM ? LM.x.apply(jM, {
                  position: "start"
                }) : LM.x.rangeMin,
                y: iM ? LM.y.apply(PM, {
                  position: "start"
                }) : LM.y.rangeMin
              },
              HM = {
                x: rM ? LM.x.apply(aM, {
                  position: "end"
                }) : LM.x.rangeMax,
                y: OM ? LM.y.apply(nM, {
                  position: "end"
                }) : LM.y.rangeMax
              };
            return !(0, VM.d)(SM, "discard") || LM.isInRange(mM) && LM.isInRange(HM) ? (0, cM.k)(mM, HM) : null
          }(zM, LM, mM, HM, this.props);
          if (!JM && !hM) return null;
          var yM = (0, VM.d)(this.props, "hidden") ? "url(#".concat(QM, ")") : void 0;
          return OM.createElement(EM.b, {
            className: (0, dM.b)("recharts-reference-area", PM)
          }, rM.renderRect(hM, yr(yr({
            clipPath: yM
          }, (0, bM.b)(this.props, !0)), JM)), TM.b.renderCallByParent(this.props, JM))
        }
      }]) && lr(iM.prototype, SM), jM && lr(iM, jM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, SM, jM
    }(OM.Component);

    function tr(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return gr(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return gr(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return gr(MM, rM)
      }(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gr(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }
    er(wr, "displayName", "ReferenceArea"), er(wr, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), er(wr, "renderRect", (function(MM, rM) {
      return OM.isValidElement(MM) ? OM.cloneElement(MM, rM) : PM()(MM) ? MM(rM) : OM.createElement(eM.c, hr({}, rM, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var ur = function(MM, rM, iM, OM, SM) {
        var jM = (0, bM.f)(MM, Hr.d),
          aM = (0, bM.f)(MM, mr),
          PM = [].concat(tr(jM), tr(aM)),
          nM = (0, bM.f)(MM, wr),
          QM = "".concat(OM, "Id"),
          zM = OM[0],
          LM = rM;
        if (PM.length && (LM = PM.reduce((function(MM, rM) {
            if (rM.props[QM] === iM && (0, VM.d)(rM.props, "extendDomain") && (0, uM.y)(rM.props[zM])) {
              var OM = rM.props[zM];
              return [Math.min(MM[0], OM), Math.max(MM[1], OM)]
            }
            return MM
          }), LM)), nM.length) {
          var mM = "".concat(zM, "1"),
            HM = "".concat(zM, "2");
          LM = nM.reduce((function(MM, rM) {
            if (rM.props[QM] === iM && (0, VM.d)(rM.props, "extendDomain") && (0, uM.y)(rM.props[mM]) && (0, uM.y)(rM.props[HM])) {
              var OM = rM.props[mM],
                SM = rM.props[HM];
              return [Math.min(MM[0], OM, SM), Math.max(MM[1], OM, SM)]
            }
            return MM
          }), LM)
        }
        return SM && SM.length && (LM = SM.reduce((function(MM, rM) {
          return (0, uM.y)(rM) ? [Math.min(MM[0], rM), Math.max(MM[1], rM)] : MM
        }), LM)), LM
      },
      Rr = iM(6695),
      pr = iM(5889),
      Wr = iM(25),
      sr = new(iM.n(Wr)()),
      Dr = "recharts.syncMouseEvents",
      kr = iM(5898);

    function Zr(MM) {
      return Zr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, Zr(MM)
    }

    function or(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, Yr(OM.key), OM)
      }
    }

    function fr(MM, rM, iM) {
      return (rM = Yr(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function Yr(MM) {
      var rM = function(MM, rM) {
        if ("object" != Zr(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != Zr(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == Zr(rM) ? rM : rM + ""
    }
    var Nr = function() {
      return MM = function MM() {
        ! function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, MM), fr(this, "activeIndex", 0), fr(this, "coordinateList", []), fr(this, "layout", "horizontal")
      }, (rM = [{
        key: "setDetails",
        value: function(MM) {
          var rM, iM = MM.coordinateList,
            OM = void 0 === iM ? null : iM,
            SM = MM.container,
            jM = void 0 === SM ? null : SM,
            aM = MM.layout,
            PM = void 0 === aM ? null : aM,
            nM = MM.offset,
            QM = void 0 === nM ? null : nM,
            zM = MM.mouseHandlerCallback,
            LM = void 0 === zM ? null : zM;
          this.coordinateList = null !== (rM = null !== OM && void 0 !== OM ? OM : this.coordinateList) && void 0 !== rM ? rM : [], this.container = null !== jM && void 0 !== jM ? jM : this.container, this.layout = null !== PM && void 0 !== PM ? PM : this.layout, this.offset = null !== QM && void 0 !== QM ? QM : this.offset, this.mouseHandlerCallback = null !== LM && void 0 !== LM ? LM : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(MM) {
          if (0 !== this.coordinateList.length) switch (MM.key) {
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
        value: function(MM) {
          this.activeIndex = MM
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var MM, rM;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var iM = this.container.getBoundingClientRect(),
              OM = iM.x,
              SM = iM.y,
              jM = iM.height,
              aM = this.coordinateList[this.activeIndex].coordinate,
              PM = (null === (MM = window) || void 0 === MM ? void 0 : MM.scrollX) || 0,
              nM = (null === (rM = window) || void 0 === rM ? void 0 : rM.scrollY) || 0,
              QM = OM + aM + PM,
              zM = SM + this.offset.top + jM / 2 + nM;
            this.mouseHandlerCallback({
              pageX: QM,
              pageY: zM
            })
          }
        }
      }]) && or(MM.prototype, rM), iM && or(MM, iM), Object.defineProperty(MM, "prototype", {
        writable: !1
      }), MM;
      var MM, rM, iM
    }();
    var Ar = iM(6756),
      xr = iM(6821);

    function vr(MM) {
      return vr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, vr(MM)
    }
    var Fr = ["x", "y", "top", "left", "width", "height", "className"];

    function Br() {
      return Br = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, Br.apply(this, arguments)
    }

    function Xr(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function Ir(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != vr(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != vr(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == vr(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function Kr(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }
    var qr = function(MM, rM, iM, OM, SM, jM) {
        return "M".concat(MM, ",").concat(SM, "v").concat(OM, "M").concat(jM, ",").concat(rM, "h").concat(iM)
      },
      Tr = function(MM) {
        var rM = MM.x,
          iM = void 0 === rM ? 0 : rM,
          SM = MM.y,
          jM = void 0 === SM ? 0 : SM,
          aM = MM.top,
          PM = void 0 === aM ? 0 : aM,
          nM = MM.left,
          QM = void 0 === nM ? 0 : nM,
          zM = MM.width,
          LM = void 0 === zM ? 0 : zM,
          mM = MM.height,
          HM = void 0 === mM ? 0 : mM,
          hM = MM.className,
          JM = function(MM) {
            for (var rM = 1; rM < arguments.length; rM++) {
              var iM = null != arguments[rM] ? arguments[rM] : {};
              rM % 2 ? Xr(Object(iM), !0).forEach((function(rM) {
                Ir(MM, rM, iM[rM])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : Xr(Object(iM)).forEach((function(rM) {
                Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
              }))
            }
            return MM
          }({
            x: iM,
            y: jM,
            top: PM,
            left: QM,
            width: LM,
            height: HM
          }, Kr(MM, Fr));
        return (0, uM.y)(iM) && (0, uM.y)(jM) && (0, uM.y)(LM) && (0, uM.y)(HM) && (0, uM.y)(PM) && (0, uM.y)(QM) ? OM.createElement("path", Br({}, (0, bM.b)(JM, !0), {
          className: (0, dM.b)("recharts-cross", hM),
          d: qr(iM, jM, LM, HM, PM, QM)
        })) : null
      };

    function Vr(MM) {
      var rM = MM.cx,
        iM = MM.cy,
        OM = MM.radius,
        SM = MM.startAngle,
        jM = MM.endAngle;
      return {
        points: [(0, Rr.i)(rM, iM, OM, SM), (0, Rr.i)(rM, iM, OM, jM)],
        cx: rM,
        cy: iM,
        radius: OM,
        startAngle: SM,
        endAngle: jM
      }
    }
    var cr = iM(6781);

    function Mi(MM, rM, iM) {
      var OM, SM, jM, aM;
      if ("horizontal" === MM) jM = OM = rM.x, SM = iM.top, aM = iM.top + iM.height;
      else if ("vertical" === MM) aM = SM = rM.y, OM = iM.left, jM = iM.left + iM.width;
      else if (null != rM.cx && null != rM.cy) {
        if ("centric" !== MM) return Vr(rM);
        var PM = rM.cx,
          nM = rM.cy,
          QM = rM.innerRadius,
          zM = rM.outerRadius,
          LM = rM.angle,
          mM = (0, Rr.i)(PM, nM, QM, LM),
          HM = (0, Rr.i)(PM, nM, zM, LM);
        OM = mM.x, SM = mM.y, jM = HM.x, aM = HM.y
      }
      return [{
        x: OM,
        y: SM
      }, {
        x: jM,
        y: aM
      }]
    }

    function ri(MM) {
      return ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, ri(MM)
    }

    function ii(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function Oi(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? ii(Object(iM), !0).forEach((function(rM) {
          Si(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ii(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function Si(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != ri(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != ri(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == ri(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function ji(MM) {
      var rM, iM, SM, jM = MM.element,
        aM = MM.tooltipEventType,
        PM = MM.isActive,
        nM = MM.activeCoordinate,
        QM = MM.activePayload,
        zM = MM.offset,
        LM = MM.activeTooltipIndex,
        mM = MM.tooltipAxisBandSize,
        HM = MM.layout,
        hM = MM.chartName,
        JM = null !== (rM = jM.props.cursor) && void 0 !== rM ? rM : null === (iM = jM.type.defaultProps) || void 0 === iM ? void 0 : iM.cursor;
      if (!jM || !JM || !PM || !nM || "ScatterChart" !== hM && "axis" !== aM) return null;
      var yM = xr.e;
      if ("ScatterChart" === hM) SM = nM, yM = Tr;
      else if ("BarChart" === hM) SM = function(MM, rM, iM, OM) {
        var SM = OM / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === MM ? rM.x - SM : iM.left + .5,
          y: "horizontal" === MM ? iM.top + .5 : rM.y - SM,
          width: "horizontal" === MM ? OM : iM.width - 1,
          height: "horizontal" === MM ? iM.height - 1 : OM
        }
      }(HM, nM, zM, mM), yM = eM.c;
      else if ("radial" === HM) {
        var lM = Vr(nM),
          EM = lM.cx,
          UM = lM.cy,
          GM = lM.radius;
        SM = {
          cx: EM,
          cy: UM,
          startAngle: lM.startAngle,
          endAngle: lM.endAngle,
          innerRadius: GM,
          outerRadius: GM
        }, yM = cr.e
      } else SM = {
        points: Mi(HM, nM, zM)
      }, yM = xr.e;
      var CM = Oi(Oi(Oi(Oi({
        stroke: "#ccc",
        pointerEvents: "none"
      }, zM), SM), (0, bM.b)(JM, !1)), {}, {
        payload: QM,
        payloadIndex: LM,
        className: (0, dM.b)("recharts-tooltip-cursor", JM.className)
      });
      return (0, OM.isValidElement)(JM) ? (0, OM.cloneElement)(JM, CM) : (0, OM.createElement)(yM, CM)
    }
    var ai = iM(6801),
      Pi = ["item"],
      ni = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function Qi(MM) {
      return Qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, Qi(MM)
    }

    function zi() {
      return zi = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, zi.apply(this, arguments)
    }

    function Li(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || Ui(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mi(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function Hi(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, wi(OM.key), OM)
      }
    }

    function Ji(MM, rM, iM) {
      return rM = yi(rM),
        function(MM, rM) {
          if (rM && ("object" === Qi(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, di() ? Reflect.construct(rM, iM || [], yi(MM).constructor) : rM.apply(MM, iM))
    }

    function di() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (di = function() {
        return !!MM
      })()
    }

    function yi(MM) {
      return yi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, yi(MM)
    }

    function li(MM, rM) {
      return li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, li(MM, rM)
    }

    function Ei(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return Gi(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || Ui(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ui(MM, rM) {
      if (MM) {
        if ("string" === typeof MM) return Gi(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? Gi(MM, rM) : void 0
      }
    }

    function Gi(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function Ci(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function ei(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? Ci(Object(iM), !0).forEach((function(rM) {
          bi(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : Ci(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function bi(MM, rM, iM) {
      return (rM = wi(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function wi(MM) {
      var rM = function(MM, rM) {
        if ("object" != Qi(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != Qi(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == Qi(rM) ? rM : rM + ""
    }
    var ti = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      gi = {
        width: "100%",
        height: "100%"
      },
      ui = {
        x: 0,
        y: 0
      };

    function Ri(MM) {
      return MM
    }
    var Wi = function(MM, rM) {
      var iM = rM.graphicalItems,
        OM = rM.dataStartIndex,
        SM = rM.dataEndIndex,
        jM = (null !== iM && void 0 !== iM ? iM : []).reduce((function(MM, rM) {
          var iM = rM.props.data;
          return iM && iM.length ? [].concat(Ei(MM), Ei(iM)) : MM
        }), []);
      return jM.length > 0 ? jM : MM && MM.length && (0, uM.y)(OM) && (0, uM.y)(SM) ? MM.slice(OM, SM + 1) : []
    };

    function si(MM) {
      return "number" === MM ? [0, "auto"] : void 0
    }
    var Di = function(MM, rM, iM, OM) {
        var SM = MM.graphicalItems,
          jM = MM.tooltipAxis,
          aM = Wi(rM, MM);
        return iM < 0 || !SM || !SM.length || iM >= aM.length ? null : SM.reduce((function(SM, PM) {
          var nM, QM, zM = null !== (nM = PM.props.data) && void 0 !== nM ? nM : rM;
          if (zM && MM.dataStartIndex + MM.dataEndIndex !== 0 && MM.dataEndIndex - MM.dataStartIndex >= iM && (zM = zM.slice(MM.dataStartIndex, MM.dataEndIndex + 1)), jM.dataKey && !jM.allowDuplicatedCategory) {
            var LM = void 0 === zM ? aM : zM;
            QM = (0, uM.d)(LM, jM.dataKey, OM)
          } else QM = zM && zM[iM] || aM[iM];
          return QM ? [].concat(Ei(SM), [(0, gM.db)(PM, QM)]) : SM
        }), [])
      },
      ki = function(MM, rM, iM, OM) {
        var SM = OM || {
            x: MM.chartX,
            y: MM.chartY
          },
          jM = function(MM, rM) {
            return "horizontal" === rM ? MM.x : "vertical" === rM ? MM.y : "centric" === rM ? MM.angle : MM.radius
          }(SM, iM),
          aM = MM.orderedTooltipTicks,
          PM = MM.tooltipAxis,
          nM = MM.tooltipTicks,
          QM = (0, gM.h)(jM, aM, nM, PM);
        if (QM >= 0 && nM) {
          var zM = nM[QM] && nM[QM].value,
            LM = Di(MM, rM, QM, zM),
            mM = function(MM, rM, iM, OM) {
              var SM = rM.find((function(MM) {
                return MM && MM.index === iM
              }));
              if (SM) {
                if ("horizontal" === MM) return {
                  x: SM.coordinate,
                  y: OM.y
                };
                if ("vertical" === MM) return {
                  x: OM.x,
                  y: SM.coordinate
                };
                if ("centric" === MM) {
                  var jM = SM.coordinate,
                    aM = OM.radius;
                  return ei(ei(ei({}, OM), (0, Rr.i)(OM.cx, OM.cy, aM, jM)), {}, {
                    angle: jM,
                    radius: aM
                  })
                }
                var PM = SM.coordinate,
                  nM = OM.angle;
                return ei(ei(ei({}, OM), (0, Rr.i)(OM.cx, OM.cy, PM, nM)), {}, {
                  angle: nM,
                  radius: PM
                })
              }
              return ui
            }(iM, aM, QM, SM);
          return {
            activeTooltipIndex: QM,
            activeLabel: zM,
            activePayload: LM,
            activeCoordinate: mM
          }
        }
        return null
      },
      Zi = function(MM, rM) {
        var iM = rM.axes,
          OM = rM.graphicalItems,
          SM = rM.axisType,
          aM = rM.axisIdKey,
          PM = rM.stackGroups,
          nM = rM.dataStartIndex,
          zM = rM.dataEndIndex,
          LM = MM.layout,
          mM = MM.children,
          HM = MM.stackOffset,
          hM = (0, gM.jb)(LM, SM);
        return iM.reduce((function(rM, iM) {
          var JM, dM = void 0 !== iM.type.defaultProps ? ei(ei({}, iM.type.defaultProps), iM.props) : iM.props,
            yM = dM.type,
            lM = dM.dataKey,
            EM = dM.allowDataOverflow,
            UM = dM.allowDuplicatedCategory,
            GM = dM.scale,
            CM = dM.ticks,
            eM = dM.includeHidden,
            bM = dM[aM];
          if (rM[bM]) return rM;
          var wM, tM, RM, pM = Wi(MM.data, {
              graphicalItems: OM.filter((function(MM) {
                var rM;
                return (aM in MM.props ? MM.props[aM] : null === (rM = MM.type.defaultProps) || void 0 === rM ? void 0 : rM[aM]) === bM
              })),
              dataStartIndex: nM,
              dataEndIndex: zM
            }),
            WM = pM.length;
          (function(MM, rM, iM) {
            if ("number" === iM && !0 === rM && Array.isArray(MM)) {
              var OM = null === MM || void 0 === MM ? void 0 : MM[0],
                SM = null === MM || void 0 === MM ? void 0 : MM[1];
              if (OM && SM && (0, uM.y)(OM) && (0, uM.y)(SM)) return !0
            }
            return !1
          })(dM.domain, EM, yM) && (wM = (0, gM.wb)(dM.domain, null, EM), !hM || "number" !== yM && "auto" === GM || (RM = (0, gM.L)(pM, lM, "category")));
          var sM = si(yM);
          if (!wM || 0 === wM.length) {
            var DM, kM = null !== (DM = dM.domain) && void 0 !== DM ? DM : sM;
            if (lM) {
              if (wM = (0, gM.L)(pM, lM, yM), "category" === yM && hM) {
                var ZM = (0, uM.o)(wM);
                UM && ZM ? (tM = wM, wM = QM()(0, WM)) : UM || (wM = (0, gM.nb)(kM, wM, iM).reduce((function(MM, rM) {
                  return MM.indexOf(rM) >= 0 ? MM : [].concat(Ei(MM), [rM])
                }), []))
              } else if ("category" === yM) wM = UM ? wM.filter((function(MM) {
                return "" !== MM && !jM()(MM)
              })) : (0, gM.nb)(kM, wM, iM).reduce((function(MM, rM) {
                return MM.indexOf(rM) >= 0 || "" === rM || jM()(rM) ? MM : [].concat(Ei(MM), [rM])
              }), []);
              else if ("number" === yM) {
                var oM = (0, gM.pb)(pM, OM.filter((function(MM) {
                  var rM, iM, OM = aM in MM.props ? MM.props[aM] : null === (rM = MM.type.defaultProps) || void 0 === rM ? void 0 : rM[aM],
                    SM = "hide" in MM.props ? MM.props.hide : null === (iM = MM.type.defaultProps) || void 0 === iM ? void 0 : iM.hide;
                  return OM === bM && (eM || !SM)
                })), lM, SM, LM);
                oM && (wM = oM)
              }!hM || "number" !== yM && "auto" === GM || (RM = (0, gM.L)(pM, lM, "category"))
            } else wM = hM ? QM()(0, WM) : PM && PM[bM] && PM[bM].hasStack && "number" === yM ? "expand" === HM ? [0, 1] : (0, gM.O)(PM[bM].stackGroups, nM, zM) : (0, gM.N)(pM, OM.filter((function(MM) {
              var rM = aM in MM.props ? MM.props[aM] : MM.type.defaultProps[aM],
                iM = "hide" in MM.props ? MM.props.hide : MM.type.defaultProps.hide;
              return rM === bM && (eM || !iM)
            })), yM, LM, !0);
            if ("number" === yM) wM = ur(mM, wM, bM, SM, CM), kM && (wM = (0, gM.wb)(kM, wM, EM));
            else if ("category" === yM && kM) {
              var fM = kM;
              wM.every((function(MM) {
                return fM.indexOf(MM) >= 0
              })) && (wM = fM)
            }
          }
          return ei(ei({}, rM), {}, bi({}, bM, ei(ei({}, dM), {}, {
            axisType: SM,
            domain: wM,
            categoricalDomain: RM,
            duplicateDomain: tM,
            originalDomain: null !== (JM = dM.domain) && void 0 !== JM ? JM : sM,
            isCategorical: hM,
            layout: LM
          })))
        }), {})
      },
      oi = function(MM, rM) {
        var iM = rM.axisType,
          OM = void 0 === iM ? "xAxis" : iM,
          SM = rM.AxisComp,
          jM = rM.graphicalItems,
          aM = rM.stackGroups,
          PM = rM.dataStartIndex,
          nM = rM.dataEndIndex,
          zM = MM.children,
          mM = "".concat(OM, "Id"),
          HM = (0, bM.f)(zM, SM),
          hM = {};
        return HM && HM.length ? hM = Zi(MM, {
          axes: HM,
          graphicalItems: jM,
          axisType: OM,
          axisIdKey: mM,
          stackGroups: aM,
          dataStartIndex: PM,
          dataEndIndex: nM
        }) : jM && jM.length && (hM = function(MM, rM) {
          var iM = rM.graphicalItems,
            OM = rM.Axis,
            SM = rM.axisType,
            jM = rM.axisIdKey,
            aM = rM.stackGroups,
            PM = rM.dataStartIndex,
            nM = rM.dataEndIndex,
            zM = MM.layout,
            mM = MM.children,
            HM = Wi(MM.data, {
              graphicalItems: iM,
              dataStartIndex: PM,
              dataEndIndex: nM
            }),
            hM = HM.length,
            JM = (0, gM.jb)(zM, SM),
            dM = -1;
          return iM.reduce((function(MM, rM) {
            var yM, lM = (void 0 !== rM.type.defaultProps ? ei(ei({}, rM.type.defaultProps), rM.props) : rM.props)[jM],
              EM = si("number");
            return MM[lM] ? MM : (dM++, JM ? yM = QM()(0, hM) : aM && aM[lM] && aM[lM].hasStack ? (yM = (0, gM.O)(aM[lM].stackGroups, PM, nM), yM = ur(mM, yM, lM, SM)) : (yM = (0, gM.wb)(EM, (0, gM.N)(HM, iM.filter((function(MM) {
              var rM, iM, OM = jM in MM.props ? MM.props[jM] : null === (rM = MM.type.defaultProps) || void 0 === rM ? void 0 : rM[jM],
                SM = "hide" in MM.props ? MM.props.hide : null === (iM = MM.type.defaultProps) || void 0 === iM ? void 0 : iM.hide;
              return OM === lM && !SM
            })), "number", zM), OM.defaultProps.allowDataOverflow), yM = ur(mM, yM, lM, SM)), ei(ei({}, MM), {}, bi({}, lM, ei(ei({
              axisType: SM
            }, OM.defaultProps), {}, {
              hide: !0,
              orientation: LM()(ti, "".concat(SM, ".").concat(dM % 2), null),
              domain: yM,
              originalDomain: EM,
              isCategorical: JM,
              layout: zM
            }))))
          }), {})
        }(MM, {
          Axis: SM,
          graphicalItems: jM,
          axisType: OM,
          axisIdKey: mM,
          stackGroups: aM,
          dataStartIndex: PM,
          dataEndIndex: nM
        })), hM
      },
      fi = function(MM) {
        var rM = MM.children,
          iM = MM.defaultShowTooltip,
          OM = (0, bM.h)(rM, IM),
          SM = 0,
          jM = 0;
        return MM.data && 0 !== MM.data.length && (jM = MM.data.length - 1), OM && OM.props && (OM.props.startIndex >= 0 && (SM = OM.props.startIndex), OM.props.endIndex >= 0 && (jM = OM.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: SM,
          dataEndIndex: jM,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(iM)
        }
      },
      Yi = function(MM) {
        return "horizontal" === MM ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === MM ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === MM ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      Ni = function(MM, rM) {
        return "xAxis" === rM ? MM[rM].width : "yAxis" === rM ? MM[rM].height : void 0
      },
      Ai = function(MM) {
        var rM = MM.chartName,
          iM = MM.GraphicalChild,
          SM = MM.defaultTooltipEventType,
          aM = void 0 === SM ? "axis" : SM,
          nM = MM.validateTooltipEventTypes,
          QM = void 0 === nM ? ["axis"] : nM,
          zM = MM.axisComponents,
          mM = MM.legendContent,
          hM = MM.formatAxisMap,
          wM = MM.defaultProps,
          tM = function(MM, rM) {
            var iM = rM.graphicalItems,
              OM = rM.stackGroups,
              SM = rM.offset,
              aM = rM.updateId,
              PM = rM.dataStartIndex,
              nM = rM.dataEndIndex,
              QM = MM.barSize,
              LM = MM.layout,
              mM = MM.barGap,
              HM = MM.barCategoryGap,
              hM = MM.maxBarSize,
              JM = Yi(LM),
              dM = JM.numericAxisName,
              lM = JM.cateAxisName,
              EM = function(MM) {
                return !(!MM || !MM.length) && MM.some((function(MM) {
                  var rM = (0, bM.l)(MM && MM.type);
                  return rM && rM.indexOf("Bar") >= 0
                }))
              }(iM),
              UM = [];
            return iM.forEach((function(iM, JM) {
              var GM = Wi(MM.data, {
                  graphicalItems: [iM],
                  dataStartIndex: PM,
                  dataEndIndex: nM
                }),
                CM = void 0 !== iM.type.defaultProps ? ei(ei({}, iM.type.defaultProps), iM.props) : iM.props,
                eM = CM.dataKey,
                wM = CM.maxBarSize,
                tM = CM["".concat(dM, "Id")],
                uM = CM["".concat(lM, "Id")],
                RM = zM.reduce((function(MM, iM) {
                  var OM = rM["".concat(iM.axisType, "Map")],
                    SM = CM["".concat(iM.axisType, "Id")];
                  OM && OM[SM] || "zAxis" === iM.axisType || (0, yM.c)(!1);
                  var jM = OM[SM];
                  return ei(ei({}, MM), {}, bi(bi({}, iM.axisType, jM), "".concat(iM.axisType, "Ticks"), (0, gM.Z)(jM)))
                }), {}),
                pM = RM[lM],
                WM = RM["".concat(lM, "Ticks")],
                sM = OM && OM[tM] && OM[tM].hasStack && (0, gM.W)(iM, OM[tM].stackGroups),
                DM = (0, bM.l)(iM.type).indexOf("Bar") >= 0,
                kM = (0, gM.v)(pM, WM),
                ZM = [],
                oM = EM && (0, gM.B)({
                  barSize: QM,
                  stackGroups: OM,
                  totalSize: Ni(RM, lM)
                });
              if (DM) {
                var fM, YM, NM = jM()(wM) ? hM : wM,
                  AM = null !== (fM = null !== (YM = (0, gM.v)(pM, WM, !0)) && void 0 !== YM ? YM : NM) && void 0 !== fM ? fM : 0;
                ZM = (0, gM.z)({
                  barGap: mM,
                  barCategoryGap: HM,
                  bandSize: AM !== kM ? AM : kM,
                  sizeList: oM[uM],
                  maxBarSize: NM
                }), AM !== kM && (ZM = ZM.map((function(MM) {
                  return ei(ei({}, MM), {}, {
                    position: ei(ei({}, MM.position), {}, {
                      offset: MM.position.offset - AM / 2
                    })
                  })
                })))
              }
              var xM = iM && iM.type && iM.type.getComposedData;
              xM && UM.push({
                props: ei(ei({}, xM(ei(ei({}, RM), {}, {
                  displayedData: GM,
                  props: MM,
                  dataKey: eM,
                  item: iM,
                  bandSize: kM,
                  barPosition: ZM,
                  offset: SM,
                  stackedData: sM,
                  layout: LM,
                  dataStartIndex: PM,
                  dataEndIndex: nM
                }))), {}, bi(bi(bi({
                  key: iM.key || "item-".concat(JM)
                }, dM, RM[dM]), lM, RM[lM]), "animationId", aM)),
                childIndex: (0, bM.B)(iM, MM.children),
                item: iM
              })
            })), UM
          },
          RM = function(MM, OM) {
            var SM = MM.props,
              jM = MM.dataStartIndex,
              aM = MM.dataEndIndex,
              PM = MM.updateId;
            if (!(0, bM.G)({
                props: SM
              })) return null;
            var nM = SM.children,
              QM = SM.layout,
              mM = SM.stackOffset,
              JM = SM.data,
              dM = SM.reverseStackOrder,
              yM = Yi(QM),
              lM = yM.numericAxisName,
              EM = yM.cateAxisName,
              UM = (0, bM.f)(nM, iM),
              CM = (0, gM.T)(JM, UM, "".concat(lM, "Id"), "".concat(EM, "Id"), mM, dM),
              eM = zM.reduce((function(MM, rM) {
                var iM = "".concat(rM.axisType, "Map");
                return ei(ei({}, MM), {}, bi({}, iM, oi(SM, ei(ei({}, rM), {}, {
                  graphicalItems: UM,
                  stackGroups: rM.axisType === lM && CM,
                  dataStartIndex: jM,
                  dataEndIndex: aM
                }))))
              }), {}),
              wM = function(MM, rM) {
                var iM = MM.props,
                  OM = MM.graphicalItems,
                  SM = MM.xAxisMap,
                  jM = void 0 === SM ? {} : SM,
                  aM = MM.yAxisMap,
                  PM = void 0 === aM ? {} : aM,
                  nM = iM.width,
                  QM = iM.height,
                  zM = iM.children,
                  mM = iM.margin || {},
                  HM = (0, bM.h)(zM, IM),
                  hM = (0, bM.h)(zM, GM.d),
                  JM = Object.keys(PM).reduce((function(MM, rM) {
                    var iM = PM[rM],
                      OM = iM.orientation;
                    return iM.mirror || iM.hide ? MM : ei(ei({}, MM), {}, bi({}, OM, MM[OM] + iM.width))
                  }), {
                    left: mM.left || 0,
                    right: mM.right || 0
                  }),
                  dM = Object.keys(jM).reduce((function(MM, rM) {
                    var iM = jM[rM],
                      OM = iM.orientation;
                    return iM.mirror || iM.hide ? MM : ei(ei({}, MM), {}, bi({}, OM, LM()(MM, "".concat(OM)) + iM.height))
                  }), {
                    top: mM.top || 0,
                    bottom: mM.bottom || 0
                  }),
                  yM = ei(ei({}, dM), JM),
                  lM = yM.bottom;
                HM && (yM.bottom += HM.props.height || IM.defaultProps.height), hM && rM && (yM = (0, gM.d)(yM, OM, iM, rM));
                var EM = nM - yM.left - yM.right,
                  UM = QM - yM.top - yM.bottom;
                return ei(ei({
                  brushBottom: lM
                }, yM), {}, {
                  width: Math.max(EM, 0),
                  height: Math.max(UM, 0)
                })
              }(ei(ei({}, eM), {}, {
                props: SM,
                graphicalItems: UM
              }), null === OM || void 0 === OM ? void 0 : OM.legendBBox);
            Object.keys(eM).forEach((function(MM) {
              eM[MM] = hM(SM, eM[MM], wM, MM.replace("Map", ""), rM)
            }));
            var RM = function(MM) {
                var rM = (0, uM.f)(MM),
                  iM = (0, gM.Z)(rM, !1, !0);
                return {
                  tooltipTicks: iM,
                  orderedTooltipTicks: HM()(iM, (function(MM) {
                    return MM.coordinate
                  })),
                  tooltipAxis: rM,
                  tooltipAxisBandSize: (0, gM.v)(rM, iM)
                }
              }(eM["".concat(EM, "Map")]),
              pM = tM(SM, ei(ei({}, eM), {}, {
                dataStartIndex: jM,
                dataEndIndex: aM,
                updateId: PM,
                graphicalItems: UM,
                stackGroups: CM,
                offset: wM
              }));
            return ei(ei({
              formattedGraphicalItems: pM,
              graphicalItems: UM,
              offset: wM,
              stackGroups: CM
            }, RM), eM)
          },
          pM = function(MM) {
            function iM(MM) {
              var SM, aM, nM;
              return function(MM, rM) {
                if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
              }(this, iM), bi(nM = Ji(this, iM, [MM]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), bi(nM, "accessibilityManager", new Nr), bi(nM, "handleLegendBBoxUpdate", (function(MM) {
                if (MM) {
                  var rM = nM.state,
                    iM = rM.dataStartIndex,
                    OM = rM.dataEndIndex,
                    SM = rM.updateId;
                  nM.setState(ei({
                    legendBBox: MM
                  }, RM({
                    props: nM.props,
                    dataStartIndex: iM,
                    dataEndIndex: OM,
                    updateId: SM
                  }, ei(ei({}, nM.state), {}, {
                    legendBBox: MM
                  }))))
                }
              })), bi(nM, "handleReceiveSyncEvent", (function(MM, rM, iM) {
                if (nM.props.syncId === MM) {
                  if (iM === nM.eventEmitterSymbol && "function" !== typeof nM.props.syncMethod) return;
                  nM.applySyncEvent(rM)
                }
              })), bi(nM, "handleBrushChange", (function(MM) {
                var rM = MM.startIndex,
                  iM = MM.endIndex;
                if (rM !== nM.state.dataStartIndex || iM !== nM.state.dataEndIndex) {
                  var OM = nM.state.updateId;
                  nM.setState((function() {
                    return ei({
                      dataStartIndex: rM,
                      dataEndIndex: iM
                    }, RM({
                      props: nM.props,
                      dataStartIndex: rM,
                      dataEndIndex: iM,
                      updateId: OM
                    }, nM.state))
                  })), nM.triggerSyncEvent({
                    dataStartIndex: rM,
                    dataEndIndex: iM
                  })
                }
              })), bi(nM, "handleMouseEnter", (function(MM) {
                var rM = nM.getMouseInfo(MM);
                if (rM) {
                  var iM = ei(ei({}, rM), {}, {
                    isTooltipActive: !0
                  });
                  nM.setState(iM), nM.triggerSyncEvent(iM);
                  var OM = nM.props.onMouseEnter;
                  PM()(OM) && OM(iM, MM)
                }
              })), bi(nM, "triggeredAfterMouseMove", (function(MM) {
                var rM = nM.getMouseInfo(MM),
                  iM = rM ? ei(ei({}, rM), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                nM.setState(iM), nM.triggerSyncEvent(iM);
                var OM = nM.props.onMouseMove;
                PM()(OM) && OM(iM, MM)
              })), bi(nM, "handleItemMouseEnter", (function(MM) {
                nM.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: MM,
                    activePayload: MM.tooltipPayload,
                    activeCoordinate: MM.tooltipPosition || {
                      x: MM.cx,
                      y: MM.cy
                    }
                  }
                }))
              })), bi(nM, "handleItemMouseLeave", (function() {
                nM.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), bi(nM, "handleMouseMove", (function(MM) {
                MM.persist(), nM.throttleTriggeredAfterMouseMove(MM)
              })), bi(nM, "handleMouseLeave", (function(MM) {
                nM.throttleTriggeredAfterMouseMove.cancel();
                var rM = {
                  isTooltipActive: !1
                };
                nM.setState(rM), nM.triggerSyncEvent(rM);
                var iM = nM.props.onMouseLeave;
                PM()(iM) && iM(rM, MM)
              })), bi(nM, "handleOuterEvent", (function(MM) {
                var rM, iM = (0, bM.p)(MM),
                  OM = LM()(nM.props, "".concat(iM));
                iM && PM()(OM) && OM(null !== (rM = /.*touch.*/i.test(iM) ? nM.getMouseInfo(MM.changedTouches[0]) : nM.getMouseInfo(MM)) && void 0 !== rM ? rM : {}, MM)
              })), bi(nM, "handleClick", (function(MM) {
                var rM = nM.getMouseInfo(MM);
                if (rM) {
                  var iM = ei(ei({}, rM), {}, {
                    isTooltipActive: !0
                  });
                  nM.setState(iM), nM.triggerSyncEvent(iM);
                  var OM = nM.props.onClick;
                  PM()(OM) && OM(iM, MM)
                }
              })), bi(nM, "handleMouseDown", (function(MM) {
                var rM = nM.props.onMouseDown;
                PM()(rM) && rM(nM.getMouseInfo(MM), MM)
              })), bi(nM, "handleMouseUp", (function(MM) {
                var rM = nM.props.onMouseUp;
                PM()(rM) && rM(nM.getMouseInfo(MM), MM)
              })), bi(nM, "handleTouchMove", (function(MM) {
                null != MM.changedTouches && MM.changedTouches.length > 0 && nM.throttleTriggeredAfterMouseMove(MM.changedTouches[0])
              })), bi(nM, "handleTouchStart", (function(MM) {
                null != MM.changedTouches && MM.changedTouches.length > 0 && nM.handleMouseDown(MM.changedTouches[0])
              })), bi(nM, "handleTouchEnd", (function(MM) {
                null != MM.changedTouches && MM.changedTouches.length > 0 && nM.handleMouseUp(MM.changedTouches[0])
              })), bi(nM, "handleDoubleClick", (function(MM) {
                var rM = nM.props.onDoubleClick;
                PM()(rM) && rM(nM.getMouseInfo(MM), MM)
              })), bi(nM, "handleContextMenu", (function(MM) {
                var rM = nM.props.onContextMenu;
                PM()(rM) && rM(nM.getMouseInfo(MM), MM)
              })), bi(nM, "triggerSyncEvent", (function(MM) {
                void 0 !== nM.props.syncId && sr.emit(Dr, nM.props.syncId, MM, nM.eventEmitterSymbol)
              })), bi(nM, "applySyncEvent", (function(MM) {
                var rM = nM.props,
                  iM = rM.layout,
                  OM = rM.syncMethod,
                  SM = nM.state.updateId,
                  jM = MM.dataStartIndex,
                  aM = MM.dataEndIndex;
                if (void 0 !== MM.dataStartIndex || void 0 !== MM.dataEndIndex) nM.setState(ei({
                  dataStartIndex: jM,
                  dataEndIndex: aM
                }, RM({
                  props: nM.props,
                  dataStartIndex: jM,
                  dataEndIndex: aM,
                  updateId: SM
                }, nM.state)));
                else if (void 0 !== MM.activeTooltipIndex) {
                  var PM = MM.chartX,
                    QM = MM.chartY,
                    zM = MM.activeTooltipIndex,
                    LM = nM.state,
                    mM = LM.offset,
                    HM = LM.tooltipTicks;
                  if (!mM) return;
                  if ("function" === typeof OM) zM = OM(HM, MM);
                  else if ("value" === OM) {
                    zM = -1;
                    for (var hM = 0; hM < HM.length; hM++)
                      if (HM[hM].value === MM.activeLabel) {
                        zM = hM;
                        break
                      }
                  }
                  var JM = ei(ei({}, mM), {}, {
                      x: mM.left,
                      y: mM.top
                    }),
                    dM = Math.min(PM, JM.x + JM.width),
                    yM = Math.min(QM, JM.y + JM.height),
                    lM = HM[zM] && HM[zM].value,
                    EM = Di(nM.state, nM.props.data, zM),
                    UM = HM[zM] ? {
                      x: "horizontal" === iM ? HM[zM].coordinate : dM,
                      y: "horizontal" === iM ? yM : HM[zM].coordinate
                    } : ui;
                  nM.setState(ei(ei({}, MM), {}, {
                    activeLabel: lM,
                    activeCoordinate: UM,
                    activePayload: EM,
                    activeTooltipIndex: zM
                  }))
                } else nM.setState(MM)
              })), bi(nM, "renderCursor", (function(MM) {
                var iM, SM = nM.state,
                  jM = SM.isTooltipActive,
                  aM = SM.activeCoordinate,
                  PM = SM.activePayload,
                  QM = SM.offset,
                  zM = SM.activeTooltipIndex,
                  LM = SM.tooltipAxisBandSize,
                  mM = nM.getTooltipEventType(),
                  HM = null !== (iM = MM.props.active) && void 0 !== iM ? iM : jM,
                  hM = nM.props.layout,
                  JM = MM.key || "_recharts-cursor";
                return OM.createElement(ji, {
                  key: JM,
                  activeCoordinate: aM,
                  activePayload: PM,
                  activeTooltipIndex: zM,
                  chartName: rM,
                  element: MM,
                  isActive: HM,
                  layout: hM,
                  offset: QM,
                  tooltipAxisBandSize: LM,
                  tooltipEventType: mM
                })
              })), bi(nM, "renderPolarAxis", (function(MM, rM, iM) {
                var SM = LM()(MM, "type.axisType"),
                  jM = LM()(nM.state, "".concat(SM, "Map")),
                  aM = MM.type.defaultProps,
                  PM = void 0 !== aM ? ei(ei({}, aM), MM.props) : MM.props,
                  QM = jM && jM[PM["".concat(SM, "Id")]];
                return (0, OM.cloneElement)(MM, ei(ei({}, QM), {}, {
                  className: (0, dM.b)(SM, QM.className),
                  key: MM.key || "".concat(rM, "-").concat(iM),
                  ticks: (0, gM.Z)(QM, !0)
                }))
              })), bi(nM, "renderPolarGrid", (function(MM) {
                var rM = MM.props,
                  iM = rM.radialLines,
                  SM = rM.polarAngles,
                  jM = rM.polarRadius,
                  aM = nM.state,
                  PM = aM.radiusAxisMap,
                  QM = aM.angleAxisMap,
                  zM = (0, uM.f)(PM),
                  LM = (0, uM.f)(QM),
                  mM = LM.cx,
                  HM = LM.cy,
                  hM = LM.innerRadius,
                  JM = LM.outerRadius;
                return (0, OM.cloneElement)(MM, {
                  polarAngles: Array.isArray(SM) ? SM : (0, gM.Z)(LM, !0).map((function(MM) {
                    return MM.coordinate
                  })),
                  polarRadius: Array.isArray(jM) ? jM : (0, gM.Z)(zM, !0).map((function(MM) {
                    return MM.coordinate
                  })),
                  cx: mM,
                  cy: HM,
                  innerRadius: hM,
                  outerRadius: JM,
                  key: MM.key || "polar-grid",
                  radialLines: iM
                })
              })), bi(nM, "renderLegend", (function() {
                var MM = nM.state.formattedGraphicalItems,
                  rM = nM.props,
                  iM = rM.children,
                  SM = rM.width,
                  jM = rM.height,
                  aM = nM.props.margin || {},
                  PM = SM - (aM.left || 0) - (aM.right || 0),
                  QM = (0, qM.e)({
                    children: iM,
                    formattedGraphicalItems: MM,
                    legendWidth: PM,
                    legendContent: mM
                  });
                if (!QM) return null;
                var zM = QM.item,
                  LM = mi(QM, Pi);
                return (0, OM.cloneElement)(zM, ei(ei({}, LM), {}, {
                  chartWidth: SM,
                  chartHeight: jM,
                  margin: aM,
                  onBBoxUpdate: nM.handleLegendBBoxUpdate
                }))
              })), bi(nM, "renderTooltip", (function() {
                var MM, rM = nM.props,
                  iM = rM.children,
                  SM = rM.accessibilityLayer,
                  jM = (0, bM.h)(iM, UM.b);
                if (!jM) return null;
                var aM = nM.state,
                  PM = aM.isTooltipActive,
                  QM = aM.activeCoordinate,
                  zM = aM.activePayload,
                  LM = aM.activeLabel,
                  mM = aM.offset,
                  HM = null !== (MM = jM.props.active) && void 0 !== MM ? MM : PM;
                return (0, OM.cloneElement)(jM, {
                  viewBox: ei(ei({}, mM), {}, {
                    x: mM.left,
                    y: mM.top
                  }),
                  active: HM,
                  label: LM,
                  payload: HM ? zM : [],
                  coordinate: QM,
                  accessibilityLayer: SM
                })
              })), bi(nM, "renderBrush", (function(MM) {
                var rM = nM.props,
                  iM = rM.margin,
                  SM = rM.data,
                  jM = nM.state,
                  aM = jM.offset,
                  PM = jM.dataStartIndex,
                  QM = jM.dataEndIndex,
                  zM = jM.updateId;
                return (0, OM.cloneElement)(MM, {
                  key: MM.key || "_recharts-brush",
                  onChange: (0, gM.n)(nM.handleBrushChange, MM.props.onChange),
                  data: SM,
                  x: (0, uM.y)(MM.props.x) ? MM.props.x : aM.left,
                  y: (0, uM.y)(MM.props.y) ? MM.props.y : aM.top + aM.height + aM.brushBottom - (iM.bottom || 0),
                  width: (0, uM.y)(MM.props.width) ? MM.props.width : aM.width,
                  startIndex: PM,
                  endIndex: QM,
                  updateId: "brush-".concat(zM)
                })
              })), bi(nM, "renderReferenceElement", (function(MM, rM, iM) {
                if (!MM) return null;
                var SM = nM.clipPathId,
                  jM = nM.state,
                  aM = jM.xAxisMap,
                  PM = jM.yAxisMap,
                  QM = jM.offset,
                  zM = MM.type.defaultProps || {},
                  LM = MM.props,
                  mM = LM.xAxisId,
                  HM = void 0 === mM ? zM.xAxisId : mM,
                  hM = LM.yAxisId,
                  JM = void 0 === hM ? zM.yAxisId : hM;
                return (0, OM.cloneElement)(MM, {
                  key: MM.key || "".concat(rM, "-").concat(iM),
                  xAxis: aM[HM],
                  yAxis: PM[JM],
                  viewBox: {
                    x: QM.left,
                    y: QM.top,
                    width: QM.width,
                    height: QM.height
                  },
                  clipPathId: SM
                })
              })), bi(nM, "renderActivePoints", (function(MM) {
                var rM = MM.item,
                  OM = MM.activePoint,
                  SM = MM.basePoint,
                  jM = MM.childIndex,
                  aM = MM.isRange,
                  PM = [],
                  nM = rM.props.key,
                  QM = void 0 !== rM.item.type.defaultProps ? ei(ei({}, rM.item.type.defaultProps), rM.item.props) : rM.item.props,
                  zM = QM.activeDot,
                  LM = ei(ei({
                    index: jM,
                    dataKey: QM.dataKey,
                    cx: OM.x,
                    cy: OM.y,
                    r: 4,
                    fill: (0, gM.Q)(rM.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: OM.payload,
                    value: OM.value
                  }, (0, bM.b)(zM, !1)), (0, kr.k)(zM));
                return PM.push(iM.renderActiveDot(zM, LM, "".concat(nM, "-activePoint-").concat(jM))), SM ? PM.push(iM.renderActiveDot(zM, ei(ei({}, LM), {}, {
                  cx: SM.x,
                  cy: SM.y
                }), "".concat(nM, "-basePoint-").concat(jM))) : aM && PM.push(null), PM
              })), bi(nM, "renderGraphicChild", (function(MM, rM, iM) {
                var SM = nM.filterFormatItem(MM, rM, iM);
                if (!SM) return null;
                var aM = nM.getTooltipEventType(),
                  PM = nM.state,
                  QM = PM.isTooltipActive,
                  zM = PM.tooltipAxis,
                  LM = PM.activeTooltipIndex,
                  mM = PM.activeLabel,
                  HM = nM.props.children,
                  hM = (0, bM.h)(HM, UM.b),
                  JM = SM.props,
                  dM = JM.points,
                  yM = JM.isRange,
                  lM = JM.baseLine,
                  EM = void 0 !== SM.item.type.defaultProps ? ei(ei({}, SM.item.type.defaultProps), SM.item.props) : SM.item.props,
                  GM = EM.activeDot,
                  CM = EM.hide,
                  eM = EM.activeBar,
                  wM = EM.activeShape,
                  tM = Boolean(!CM && QM && hM && (GM || eM || wM)),
                  RM = {};
                "axis" !== aM && hM && "click" === hM.props.trigger ? RM = {
                  onClick: (0, gM.n)(nM.handleItemMouseEnter, MM.props.onClick)
                } : "axis" !== aM && (RM = {
                  onMouseLeave: (0, gM.n)(nM.handleItemMouseLeave, MM.props.onMouseLeave),
                  onMouseEnter: (0, gM.n)(nM.handleItemMouseEnter, MM.props.onMouseEnter)
                });
                var pM = (0, OM.cloneElement)(MM, ei(ei({}, SM.props), RM));
                if (tM) {
                  if (!(LM >= 0)) {
                    var WM, sM = (null !== (WM = nM.getItemByXY(nM.state.activeCoordinate)) && void 0 !== WM ? WM : {
                        graphicalItem: pM
                      }).graphicalItem,
                      DM = sM.item,
                      kM = void 0 === DM ? MM : DM,
                      ZM = sM.childIndex,
                      oM = ei(ei(ei({}, SM.props), RM), {}, {
                        activeIndex: ZM
                      });
                    return [(0, OM.cloneElement)(kM, oM), null, null]
                  }
                  var fM, YM;
                  if (zM.dataKey && !zM.allowDuplicatedCategory) {
                    var NM = "function" === typeof zM.dataKey ? function(MM) {
                      return "function" === typeof zM.dataKey ? zM.dataKey(MM.payload) : null
                    } : "payload.".concat(zM.dataKey.toString());
                    fM = (0, uM.d)(dM, NM, mM), YM = yM && lM && (0, uM.d)(lM, NM, mM)
                  } else fM = null === dM || void 0 === dM ? void 0 : dM[LM], YM = yM && lM && lM[LM];
                  if (wM || eM) {
                    var AM = void 0 !== MM.props.activeIndex ? MM.props.activeIndex : LM;
                    return [(0, OM.cloneElement)(MM, ei(ei(ei({}, SM.props), RM), {}, {
                      activeIndex: AM
                    })), null, null]
                  }
                  if (!jM()(fM)) return [pM].concat(Ei(nM.renderActivePoints({
                    item: SM,
                    activePoint: fM,
                    basePoint: YM,
                    childIndex: LM,
                    isRange: yM
                  })))
                }
                return yM ? [pM, null, null] : [pM, null]
              })), bi(nM, "renderCustomized", (function(MM, rM, iM) {
                return (0, OM.cloneElement)(MM, ei(ei({
                  key: "recharts-customized-".concat(iM)
                }, nM.props), nM.state))
              })), bi(nM, "renderMap", {
                CartesianGrid: {
                  handler: Ri,
                  once: !0
                },
                ReferenceArea: {
                  handler: nM.renderReferenceElement
                },
                ReferenceLine: {
                  handler: Ri
                },
                ReferenceDot: {
                  handler: nM.renderReferenceElement
                },
                XAxis: {
                  handler: Ri
                },
                YAxis: {
                  handler: Ri
                },
                Brush: {
                  handler: nM.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: nM.renderGraphicChild
                },
                Line: {
                  handler: nM.renderGraphicChild
                },
                Area: {
                  handler: nM.renderGraphicChild
                },
                Radar: {
                  handler: nM.renderGraphicChild
                },
                RadialBar: {
                  handler: nM.renderGraphicChild
                },
                Scatter: {
                  handler: nM.renderGraphicChild
                },
                Pie: {
                  handler: nM.renderGraphicChild
                },
                Funnel: {
                  handler: nM.renderGraphicChild
                },
                Tooltip: {
                  handler: nM.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: nM.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: nM.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: nM.renderPolarAxis
                },
                Customized: {
                  handler: nM.renderCustomized
                }
              }), nM.clipPathId = "".concat(null !== (SM = MM.id) && void 0 !== SM ? SM : (0, uM.G)("recharts"), "-clip"), nM.throttleTriggeredAfterMouseMove = JM()(nM.triggeredAfterMouseMove, null !== (aM = MM.throttleDelay) && void 0 !== aM ? aM : 1e3 / 60), nM.state = {}, nM
            }
            return function(MM, rM) {
              if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
              MM.prototype = Object.create(rM && rM.prototype, {
                constructor: {
                  value: MM,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(MM, "prototype", {
                writable: !1
              }), rM && li(MM, rM)
            }(iM, MM), SM = iM, nM = [{
              key: "componentDidMount",
              value: function() {
                var MM, rM;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (MM = this.props.margin.left) && void 0 !== MM ? MM : 0,
                    top: null !== (rM = this.props.margin.top) && void 0 !== rM ? rM : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var MM = this.props,
                  rM = MM.children,
                  iM = MM.data,
                  OM = MM.height,
                  SM = MM.layout,
                  jM = (0, bM.h)(rM, UM.b);
                if (jM) {
                  var aM = jM.props.defaultIndex;
                  if (!("number" !== typeof aM || aM < 0 || aM > this.state.tooltipTicks.length - 1)) {
                    var PM = this.state.tooltipTicks[aM] && this.state.tooltipTicks[aM].value,
                      nM = Di(this.state, iM, aM, PM),
                      QM = this.state.tooltipTicks[aM].coordinate,
                      zM = (this.state.offset.top + OM) / 2,
                      LM = "horizontal" === SM ? {
                        x: QM,
                        y: zM
                      } : {
                        y: QM,
                        x: zM
                      },
                      mM = this.state.formattedGraphicalItems.find((function(MM) {
                        return "Scatter" === MM.item.type.name
                      }));
                    mM && (LM = ei(ei({}, LM), mM.props.points[aM].tooltipPosition), nM = mM.props.points[aM].tooltipPayload);
                    var HM = {
                      activeTooltipIndex: aM,
                      isTooltipActive: !0,
                      activeLabel: PM,
                      activePayload: nM,
                      activeCoordinate: LM
                    };
                    this.setState(HM), this.renderCursor(jM), this.accessibilityManager.setIndex(aM)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(MM, rM) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== rM.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== MM.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== MM.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (iM = this.props.margin.left) && void 0 !== iM ? iM : 0,
                    top: null !== (OM = this.props.margin.top) && void 0 !== OM ? OM : 0
                  }
                }), null) : null;
                var iM, OM
              }
            }, {
              key: "componentDidUpdate",
              value: function(MM) {
                (0, bM.x)([(0, bM.h)(MM.children, UM.b)], [(0, bM.h)(this.props.children, UM.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var MM = (0, bM.h)(this.props.children, UM.b);
                if (MM && "boolean" === typeof MM.props.shared) {
                  var rM = MM.props.shared ? "axis" : "item";
                  return QM.indexOf(rM) >= 0 ? rM : aM
                }
                return aM
              }
            }, {
              key: "getMouseInfo",
              value: function(MM) {
                if (!this.container) return null;
                var rM = this.container,
                  iM = rM.getBoundingClientRect(),
                  OM = (0, KM.c)(iM),
                  SM = {
                    chartX: Math.round(MM.pageX - OM.left),
                    chartY: Math.round(MM.pageY - OM.top)
                  },
                  jM = iM.width / rM.offsetWidth || 1,
                  aM = this.inRange(SM.chartX, SM.chartY, jM);
                if (!aM) return null;
                var PM = this.state,
                  nM = PM.xAxisMap,
                  QM = PM.yAxisMap,
                  zM = this.getTooltipEventType(),
                  LM = ki(this.state, this.props.data, this.props.layout, aM);
                if ("axis" !== zM && nM && QM) {
                  var mM = (0, uM.f)(nM).scale,
                    HM = (0, uM.f)(QM).scale,
                    hM = mM && mM.invert ? mM.invert(SM.chartX) : null,
                    JM = HM && HM.invert ? HM.invert(SM.chartY) : null;
                  return ei(ei({}, SM), {}, {
                    xValue: hM,
                    yValue: JM
                  }, LM)
                }
                return LM ? ei(ei({}, SM), LM) : null
              }
            }, {
              key: "inRange",
              value: function(MM, rM) {
                var iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  OM = this.props.layout,
                  SM = MM / iM,
                  jM = rM / iM;
                if ("horizontal" === OM || "vertical" === OM) {
                  var aM = this.state.offset;
                  return SM >= aM.left && SM <= aM.left + aM.width && jM >= aM.top && jM <= aM.top + aM.height ? {
                    x: SM,
                    y: jM
                  } : null
                }
                var PM = this.state,
                  nM = PM.angleAxisMap,
                  QM = PM.radiusAxisMap;
                if (nM && QM) {
                  var zM = (0, uM.f)(nM);
                  return (0, Rr.h)({
                    x: SM,
                    y: jM
                  }, zM)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var MM = this.props.children,
                  rM = this.getTooltipEventType(),
                  iM = (0, bM.h)(MM, UM.b),
                  OM = {};
                return iM && "axis" === rM && (OM = "click" === iM.props.trigger ? {
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
                }), ei(ei({}, (0, kr.k)(this.props, this.handleOuterEvent)), OM)
              }
            }, {
              key: "addListener",
              value: function() {
                sr.on(Dr, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                sr.removeListener(Dr, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(MM, rM, iM) {
                for (var OM = this.state.formattedGraphicalItems, SM = 0, jM = OM.length; SM < jM; SM++) {
                  var aM = OM[SM];
                  if (aM.item === MM || aM.props.key === MM.key || rM === (0, bM.l)(aM.item.type) && iM === aM.childIndex) return aM
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var MM = this.clipPathId,
                  rM = this.state.offset,
                  iM = rM.left,
                  SM = rM.top,
                  jM = rM.height,
                  aM = rM.width;
                return OM.createElement("defs", null, OM.createElement("clipPath", {
                  id: MM
                }, OM.createElement("rect", {
                  x: iM,
                  y: SM,
                  height: jM,
                  width: aM
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var MM = this.state.xAxisMap;
                return MM ? Object.entries(MM).reduce((function(MM, rM) {
                  var iM = Li(rM, 2),
                    OM = iM[0],
                    SM = iM[1];
                  return ei(ei({}, MM), {}, bi({}, OM, SM.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var MM = this.state.yAxisMap;
                return MM ? Object.entries(MM).reduce((function(MM, rM) {
                  var iM = Li(rM, 2),
                    OM = iM[0],
                    SM = iM[1];
                  return ei(ei({}, MM), {}, bi({}, OM, SM.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(MM) {
                var rM;
                return null === (rM = this.state.xAxisMap) || void 0 === rM || null === (rM = rM[MM]) || void 0 === rM ? void 0 : rM.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(MM) {
                var rM;
                return null === (rM = this.state.yAxisMap) || void 0 === rM || null === (rM = rM[MM]) || void 0 === rM ? void 0 : rM.scale
              }
            }, {
              key: "getItemByXY",
              value: function(MM) {
                var rM = this.state,
                  iM = rM.formattedGraphicalItems,
                  OM = rM.activeItem;
                if (iM && iM.length)
                  for (var SM = 0, jM = iM.length; SM < jM; SM++) {
                    var aM = iM[SM],
                      PM = aM.props,
                      nM = aM.item,
                      QM = void 0 !== nM.type.defaultProps ? ei(ei({}, nM.type.defaultProps), nM.props) : nM.props,
                      zM = (0, bM.l)(nM.type);
                    if ("Bar" === zM) {
                      var LM = (PM.data || []).find((function(rM) {
                        return (0, eM.e)(MM, rM)
                      }));
                      if (LM) return {
                        graphicalItem: aM,
                        payload: LM
                      }
                    } else if ("RadialBar" === zM) {
                      var mM = (PM.data || []).find((function(rM) {
                        return (0, Rr.h)(MM, rM)
                      }));
                      if (mM) return {
                        graphicalItem: aM,
                        payload: mM
                      }
                    } else if ((0, Ar.i)(aM, OM) || (0, Ar.k)(aM, OM) || (0, Ar.n)(aM, OM)) {
                      var HM = (0, Ar.h)({
                          graphicalItem: aM,
                          activeTooltipItem: OM,
                          itemData: QM.data
                        }),
                        hM = void 0 === QM.activeIndex ? HM : QM.activeIndex;
                      return {
                        graphicalItem: ei(ei({}, aM), {}, {
                          childIndex: hM
                        }),
                        payload: (0, Ar.n)(aM, OM) ? QM.data[HM] : aM.props.data[HM]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var MM = this;
                if (!(0, bM.G)(this)) return null;
                var rM, iM, SM = this.props,
                  jM = SM.children,
                  aM = SM.className,
                  PM = SM.width,
                  nM = SM.height,
                  QM = SM.style,
                  zM = SM.compact,
                  LM = SM.title,
                  mM = SM.desc,
                  HM = mi(SM, ni),
                  hM = (0, bM.b)(HM, !1);
                if (zM) return OM.createElement(ai.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, OM.createElement(lM.c, zi({}, hM, {
                  width: PM,
                  height: nM,
                  title: LM,
                  desc: mM
                }), this.renderClipPath(), (0, bM.F)(jM, this.renderMap)));
                this.props.accessibilityLayer && (hM.tabIndex = null !== (rM = this.props.tabIndex) && void 0 !== rM ? rM : 0, hM.role = null !== (iM = this.props.role) && void 0 !== iM ? iM : "application", hM.onKeyDown = function(rM) {
                  MM.accessibilityManager.keyboardEvent(rM)
                }, hM.onFocus = function() {
                  MM.accessibilityManager.focus()
                });
                var JM = this.parseEventsOfWrapper();
                return OM.createElement(ai.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, OM.createElement("div", zi({
                  className: (0, dM.b)("recharts-wrapper", aM),
                  style: ei({
                    position: "relative",
                    cursor: "default",
                    width: PM,
                    height: nM
                  }, QM)
                }, JM, {
                  ref: function(rM) {
                    MM.container = rM
                  }
                }), OM.createElement(lM.c, zi({}, hM, {
                  width: PM,
                  height: nM,
                  title: LM,
                  desc: mM,
                  style: gi
                }), this.renderClipPath(), (0, bM.F)(jM, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], nM && Hi(SM.prototype, nM), zM && Hi(SM, zM), Object.defineProperty(SM, "prototype", {
              writable: !1
            }), SM;
            var SM, nM, zM
          }(OM.Component);
        bi(pM, "displayName", rM), bi(pM, "defaultProps", ei({
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
        }, wM)), bi(pM, "getDerivedStateFromProps", (function(MM, rM) {
          var iM = MM.dataKey,
            OM = MM.data,
            SM = MM.children,
            aM = MM.width,
            PM = MM.height,
            nM = MM.layout,
            QM = MM.stackOffset,
            zM = MM.margin,
            LM = rM.dataStartIndex,
            mM = rM.dataEndIndex;
          if (void 0 === rM.updateId) {
            var HM = fi(MM);
            return ei(ei(ei({}, HM), {}, {
              updateId: 0
            }, RM(ei(ei({
              props: MM
            }, HM), {}, {
              updateId: 0
            }), rM)), {}, {
              prevDataKey: iM,
              prevData: OM,
              prevWidth: aM,
              prevHeight: PM,
              prevLayout: nM,
              prevStackOffset: QM,
              prevMargin: zM,
              prevChildren: SM
            })
          }
          if (iM !== rM.prevDataKey || OM !== rM.prevData || aM !== rM.prevWidth || PM !== rM.prevHeight || nM !== rM.prevLayout || QM !== rM.prevStackOffset || !(0, pr.e)(zM, rM.prevMargin)) {
            var hM = fi(MM),
              JM = {
                chartX: rM.chartX,
                chartY: rM.chartY,
                isTooltipActive: rM.isTooltipActive
              },
              dM = ei(ei({}, ki(rM, OM, nM)), {}, {
                updateId: rM.updateId + 1
              }),
              yM = ei(ei(ei({}, hM), JM), dM);
            return ei(ei(ei({}, yM), RM(ei({
              props: MM
            }, yM), rM)), {}, {
              prevDataKey: iM,
              prevData: OM,
              prevWidth: aM,
              prevHeight: PM,
              prevLayout: nM,
              prevStackOffset: QM,
              prevMargin: zM,
              prevChildren: SM
            })
          }
          if (!(0, bM.x)(SM, rM.prevChildren)) {
            var lM, EM, UM, GM, CM = (0, bM.h)(SM, IM),
              eM = CM && null !== (lM = null === (EM = CM.props) || void 0 === EM ? void 0 : EM.startIndex) && void 0 !== lM ? lM : LM,
              wM = CM && null !== (UM = null === (GM = CM.props) || void 0 === GM ? void 0 : GM.endIndex) && void 0 !== UM ? UM : mM,
              tM = eM !== LM || wM !== mM,
              gM = !jM()(OM) && !tM ? rM.updateId : rM.updateId + 1;
            return ei(ei({
              updateId: gM
            }, RM(ei(ei({
              props: MM
            }, rM), {}, {
              updateId: gM,
              dataStartIndex: eM,
              dataEndIndex: wM
            }), rM)), {}, {
              prevChildren: SM,
              dataStartIndex: eM,
              dataEndIndex: wM
            })
          }
          return null
        })), bi(pM, "renderActiveDot", (function(MM, rM, iM) {
          var SM;
          return SM = (0, OM.isValidElement)(MM) ? (0, OM.cloneElement)(MM, rM) : PM()(MM) ? MM(rM) : OM.createElement(CM.b, rM), OM.createElement(EM.b, {
            className: "recharts-active-dot",
            key: iM
          }, SM)
        }));
        var WM = (0, OM.forwardRef)((function(MM, rM) {
          return OM.createElement(pM, zi({}, MM, {
            ref: rM
          }))
        }));
        return WM.displayName = pM.displayName, WM
      }
  },
  6739: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    var OM = function(MM) {
      return null
    };
    OM.displayName = "Cell"
  },
  6691: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => RM
    });
    var OM = iM(44),
      SM = iM(5864),
      jM = iM.n(SM),
      aM = iM(5712),
      PM = iM.n(aM),
      nM = iM(5514),
      QM = iM.n(nM),
      zM = iM(5491),
      LM = iM(6585),
      mM = iM(5876),
      HM = iM(5595),
      hM = iM(6695);

    function JM(MM) {
      return JM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, JM(MM)
    }
    var dM = ["offset"];

    function yM(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return lM(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return lM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return lM(MM, rM)
      }(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function EM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function UM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function GM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? UM(Object(iM), !0).forEach((function(rM) {
          CM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : UM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function CM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != JM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != JM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == JM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function eM() {
      return eM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, eM.apply(this, arguments)
    }
    var bM = function(MM) {
        var rM = MM.value,
          iM = MM.formatter,
          OM = jM()(MM.children) ? rM : MM.children;
        return PM()(iM) ? iM(OM) : OM
      },
      wM = function(MM, rM, iM) {
        var SM, aM, PM = MM.position,
          nM = MM.viewBox,
          QM = MM.offset,
          LM = MM.className,
          mM = nM,
          JM = mM.cx,
          dM = mM.cy,
          yM = mM.innerRadius,
          lM = mM.outerRadius,
          EM = mM.startAngle,
          UM = mM.endAngle,
          GM = mM.clockWise,
          CM = (yM + lM) / 2,
          bM = function(MM, rM) {
            return (0, HM.D)(rM - MM) * Math.min(Math.abs(rM - MM), 360)
          }(EM, UM),
          wM = bM >= 0 ? 1 : -1;
        "insideStart" === PM ? (SM = EM + wM * QM, aM = GM) : "insideEnd" === PM ? (SM = UM - wM * QM, aM = !GM) : "end" === PM && (SM = UM + wM * QM, aM = GM), aM = bM <= 0 ? aM : !aM;
        var tM = (0, hM.i)(JM, dM, CM, SM),
          gM = (0, hM.i)(JM, dM, CM, SM + 359 * (aM ? 1 : -1)),
          uM = "M".concat(tM.x, ",").concat(tM.y, "\n    A").concat(CM, ",").concat(CM, ",0,1,").concat(aM ? 0 : 1, ",\n    ").concat(gM.x, ",").concat(gM.y),
          RM = jM()(MM.id) ? (0, HM.G)("recharts-radial-line-") : MM.id;
        return OM.createElement("text", eM({}, iM, {
          dominantBaseline: "central",
          className: (0, zM.b)("recharts-radial-bar-label", LM)
        }), OM.createElement("defs", null, OM.createElement("path", {
          id: RM,
          d: uM
        })), OM.createElement("textPath", {
          xlinkHref: "#".concat(RM)
        }, rM))
      },
      tM = function(MM) {
        var rM = MM.viewBox,
          iM = MM.offset,
          OM = MM.position,
          SM = rM,
          jM = SM.cx,
          aM = SM.cy,
          PM = SM.innerRadius,
          nM = SM.outerRadius,
          QM = (SM.startAngle + SM.endAngle) / 2;
        if ("outside" === OM) {
          var zM = (0, hM.i)(jM, aM, nM + iM, QM),
            LM = zM.x;
          return {
            x: LM,
            y: zM.y,
            textAnchor: LM >= jM ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === OM) return {
          x: jM,
          y: aM,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === OM) return {
          x: jM,
          y: aM,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === OM) return {
          x: jM,
          y: aM,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var mM = (PM + nM) / 2,
          HM = (0, hM.i)(jM, aM, mM, QM);
        return {
          x: HM.x,
          y: HM.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      gM = function(MM) {
        var rM = MM.viewBox,
          iM = MM.parentViewBox,
          OM = MM.offset,
          SM = MM.position,
          jM = rM,
          aM = jM.x,
          PM = jM.y,
          nM = jM.width,
          zM = jM.height,
          LM = zM >= 0 ? 1 : -1,
          mM = LM * OM,
          hM = LM > 0 ? "end" : "start",
          JM = LM > 0 ? "start" : "end",
          dM = nM >= 0 ? 1 : -1,
          yM = dM * OM,
          lM = dM > 0 ? "end" : "start",
          EM = dM > 0 ? "start" : "end";
        if ("top" === SM) return GM(GM({}, {
          x: aM + nM / 2,
          y: PM - LM * OM,
          textAnchor: "middle",
          verticalAnchor: hM
        }), iM ? {
          height: Math.max(PM - iM.y, 0),
          width: nM
        } : {});
        if ("bottom" === SM) return GM(GM({}, {
          x: aM + nM / 2,
          y: PM + zM + mM,
          textAnchor: "middle",
          verticalAnchor: JM
        }), iM ? {
          height: Math.max(iM.y + iM.height - (PM + zM), 0),
          width: nM
        } : {});
        if ("left" === SM) {
          var UM = {
            x: aM - yM,
            y: PM + zM / 2,
            textAnchor: lM,
            verticalAnchor: "middle"
          };
          return GM(GM({}, UM), iM ? {
            width: Math.max(UM.x - iM.x, 0),
            height: zM
          } : {})
        }
        if ("right" === SM) {
          var CM = {
            x: aM + nM + yM,
            y: PM + zM / 2,
            textAnchor: EM,
            verticalAnchor: "middle"
          };
          return GM(GM({}, CM), iM ? {
            width: Math.max(iM.x + iM.width - CM.x, 0),
            height: zM
          } : {})
        }
        var eM = iM ? {
          width: nM,
          height: zM
        } : {};
        return "insideLeft" === SM ? GM({
          x: aM + yM,
          y: PM + zM / 2,
          textAnchor: EM,
          verticalAnchor: "middle"
        }, eM) : "insideRight" === SM ? GM({
          x: aM + nM - yM,
          y: PM + zM / 2,
          textAnchor: lM,
          verticalAnchor: "middle"
        }, eM) : "insideTop" === SM ? GM({
          x: aM + nM / 2,
          y: PM + mM,
          textAnchor: "middle",
          verticalAnchor: JM
        }, eM) : "insideBottom" === SM ? GM({
          x: aM + nM / 2,
          y: PM + zM - mM,
          textAnchor: "middle",
          verticalAnchor: hM
        }, eM) : "insideTopLeft" === SM ? GM({
          x: aM + yM,
          y: PM + mM,
          textAnchor: EM,
          verticalAnchor: JM
        }, eM) : "insideTopRight" === SM ? GM({
          x: aM + nM - yM,
          y: PM + mM,
          textAnchor: lM,
          verticalAnchor: JM
        }, eM) : "insideBottomLeft" === SM ? GM({
          x: aM + yM,
          y: PM + zM - mM,
          textAnchor: EM,
          verticalAnchor: hM
        }, eM) : "insideBottomRight" === SM ? GM({
          x: aM + nM - yM,
          y: PM + zM - mM,
          textAnchor: lM,
          verticalAnchor: hM
        }, eM) : QM()(SM) && ((0, HM.y)(SM.x) || (0, HM.A)(SM.x)) && ((0, HM.y)(SM.y) || (0, HM.A)(SM.y)) ? GM({
          x: aM + (0, HM.l)(SM.x, nM),
          y: PM + (0, HM.l)(SM.y, zM),
          textAnchor: "end",
          verticalAnchor: "end"
        }, eM) : GM({
          x: aM + nM / 2,
          y: PM + zM / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, eM)
      },
      uM = function(MM) {
        return "cx" in MM && (0, HM.y)(MM.cx)
      };

    function RM(MM) {
      var rM, iM = MM.offset,
        SM = GM({
          offset: void 0 === iM ? 5 : iM
        }, EM(MM, dM)),
        aM = SM.viewBox,
        nM = SM.position,
        QM = SM.value,
        HM = SM.children,
        hM = SM.content,
        JM = SM.className,
        yM = void 0 === JM ? "" : JM,
        lM = SM.textBreakAll;
      if (!aM || jM()(QM) && jM()(HM) && !(0, OM.isValidElement)(hM) && !PM()(hM)) return null;
      if ((0, OM.isValidElement)(hM)) return (0, OM.cloneElement)(hM, SM);
      if (PM()(hM)) {
        if (rM = (0, OM.createElement)(hM, SM), (0, OM.isValidElement)(rM)) return rM
      } else rM = bM(SM);
      var UM = uM(aM),
        CM = (0, mM.b)(SM, !0);
      if (UM && ("insideStart" === nM || "insideEnd" === nM || "end" === nM)) return wM(SM, rM, CM);
      var RM = UM ? tM(SM) : gM(SM);
      return OM.createElement(LM.c, eM({
        className: (0, zM.b)("recharts-label", yM)
      }, CM, RM, {
        breakAll: lM
      }), rM)
    }
    RM.displayName = "Label";
    var pM = function(MM) {
      var rM = MM.cx,
        iM = MM.cy,
        OM = MM.angle,
        SM = MM.startAngle,
        jM = MM.endAngle,
        aM = MM.r,
        PM = MM.radius,
        nM = MM.innerRadius,
        QM = MM.outerRadius,
        zM = MM.x,
        LM = MM.y,
        mM = MM.top,
        hM = MM.left,
        JM = MM.width,
        dM = MM.height,
        yM = MM.clockWise,
        lM = MM.labelViewBox;
      if (lM) return lM;
      if ((0, HM.y)(JM) && (0, HM.y)(dM)) {
        if ((0, HM.y)(zM) && (0, HM.y)(LM)) return {
          x: zM,
          y: LM,
          width: JM,
          height: dM
        };
        if ((0, HM.y)(mM) && (0, HM.y)(hM)) return {
          x: mM,
          y: hM,
          width: JM,
          height: dM
        }
      }
      return (0, HM.y)(zM) && (0, HM.y)(LM) ? {
        x: zM,
        y: LM,
        width: 0,
        height: 0
      } : (0, HM.y)(rM) && (0, HM.y)(iM) ? {
        cx: rM,
        cy: iM,
        startAngle: SM || OM || 0,
        endAngle: jM || OM || 0,
        innerRadius: nM || 0,
        outerRadius: QM || PM || aM || 0,
        clockWise: yM
      } : MM.viewBox ? MM.viewBox : {}
    };
    RM.parseViewBox = pM, RM.renderCallByParent = function(MM, rM) {
      var iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!MM || !MM.children && iM && !MM.label) return null;
      var SM = MM.children,
        jM = pM(MM),
        aM = (0, mM.f)(SM, RM).map((function(MM, iM) {
          return (0, OM.cloneElement)(MM, {
            viewBox: rM || jM,
            key: "label-".concat(iM)
          })
        }));
      if (!iM) return aM;
      var nM = function(MM, rM) {
        return MM ? !0 === MM ? OM.createElement(RM, {
          key: "label-implicit",
          viewBox: rM
        }) : (0, HM.x)(MM) ? OM.createElement(RM, {
          key: "label-implicit",
          viewBox: rM,
          value: MM
        }) : (0, OM.isValidElement)(MM) ? MM.type === RM ? (0, OM.cloneElement)(MM, {
          key: "label-implicit",
          viewBox: rM
        }) : OM.createElement(RM, {
          key: "label-implicit",
          content: MM,
          viewBox: rM
        }) : PM()(MM) ? OM.createElement(RM, {
          key: "label-implicit",
          content: MM,
          viewBox: rM
        }) : QM()(MM) ? OM.createElement(RM, eM({
          viewBox: rM
        }, MM, {
          key: "label-implicit"
        })) : null : null
      }(MM.label, rM || jM);
      return [nM].concat(yM(aM))
    }
  },
  6741: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => gM
    });
    var OM = iM(44),
      SM = iM(5864),
      jM = iM.n(SM),
      aM = iM(5514),
      PM = iM.n(aM),
      nM = iM(5712),
      QM = iM.n(nM),
      zM = iM(6747),
      LM = iM.n(zM),
      mM = iM(6691),
      HM = iM(6429),
      hM = iM(5876),
      JM = iM(6598);

    function dM(MM) {
      return dM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, dM(MM)
    }
    var yM = ["valueAccessor"],
      lM = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function EM(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return UM(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return UM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return UM(MM, rM)
      }(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function UM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function GM() {
      return GM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, GM.apply(this, arguments)
    }

    function CM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function eM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? CM(Object(iM), !0).forEach((function(rM) {
          bM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : CM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function bM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != dM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != dM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == dM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function wM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }
    var tM = function(MM) {
      return Array.isArray(MM.value) ? LM()(MM.value) : MM.value
    };

    function gM(MM) {
      var rM = MM.valueAccessor,
        iM = void 0 === rM ? tM : rM,
        SM = wM(MM, yM),
        aM = SM.data,
        PM = SM.dataKey,
        nM = SM.clockWise,
        QM = SM.id,
        zM = SM.textBreakAll,
        LM = wM(SM, lM);
      return aM && aM.length ? OM.createElement(HM.b, {
        className: "recharts-label-list"
      }, aM.map((function(MM, rM) {
        var SM = jM()(PM) ? iM(MM, rM) : (0, JM.fb)(MM && MM.payload, PM),
          aM = jM()(QM) ? {} : {
            id: "".concat(QM, "-").concat(rM)
          };
        return OM.createElement(mM.b, GM({}, (0, hM.b)(MM, !0), LM, aM, {
          parentViewBox: MM.parentViewBox,
          value: SM,
          textBreakAll: zM,
          viewBox: mM.b.parseViewBox(jM()(nM) ? MM : eM(eM({}, MM), {}, {
            clockWise: nM
          })),
          key: "label-".concat(rM),
          index: rM
        }))
      }))) : null
    }
    gM.displayName = "LabelList", gM.renderCallByParent = function(MM, rM) {
      var iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!MM || !MM.children && iM && !MM.label) return null;
      var SM = MM.children,
        jM = (0, hM.f)(SM, gM).map((function(MM, iM) {
          return (0, OM.cloneElement)(MM, {
            data: rM,
            key: "labelList-".concat(iM)
          })
        }));
      return iM ? [function(MM, rM) {
        return MM ? !0 === MM ? OM.createElement(gM, {
          key: "labelList-implicit",
          data: rM
        }) : OM.isValidElement(MM) || QM()(MM) ? OM.createElement(gM, {
          key: "labelList-implicit",
          data: rM,
          content: MM
        }) : PM()(MM) ? OM.createElement(gM, GM({
          data: rM
        }, MM, {
          key: "labelList-implicit"
        })) : null : null
      }(MM.label, rM)].concat(EM(jM)) : jM
    }
  },
  6513: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => YM
    });
    var OM = iM(44),
      SM = iM(5712),
      jM = iM.n(SM),
      aM = iM(5491),
      PM = iM(5873),
      nM = iM(6424),
      QM = iM(6515),
      zM = iM(5898);

    function LM(MM) {
      return LM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, LM(MM)
    }

    function mM() {
      return mM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, mM.apply(this, arguments)
    }

    function HM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function hM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, UM(OM.key), OM)
      }
    }

    function JM(MM, rM, iM) {
      return rM = yM(rM),
        function(MM, rM) {
          if (rM && ("object" === LM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, dM() ? Reflect.construct(rM, iM || [], yM(MM).constructor) : rM.apply(MM, iM))
    }

    function dM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (dM = function() {
        return !!MM
      })()
    }

    function yM(MM) {
      return yM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, yM(MM)
    }

    function lM(MM, rM) {
      return lM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, lM(MM, rM)
    }

    function EM(MM, rM, iM) {
      return (rM = UM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function UM(MM) {
      var rM = function(MM, rM) {
        if ("object" != LM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != LM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == LM(rM) ? rM : rM + ""
    }
    var GM = 32,
      CM = function(MM) {
        function rM() {
          return function(MM, rM) {
            if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
          }(this, rM), JM(this, rM, arguments)
        }
        return function(MM, rM) {
          if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
          MM.prototype = Object.create(rM && rM.prototype, {
            constructor: {
              value: MM,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(MM, "prototype", {
            writable: !1
          }), rM && lM(MM, rM)
        }(rM, MM), iM = rM, SM = [{
          key: "renderIcon",
          value: function(MM) {
            var rM = this.props.inactiveColor,
              iM = 16,
              SM = GM / 6,
              jM = GM / 3,
              aM = MM.inactive ? rM : MM.color;
            if ("plainline" === MM.type) return OM.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: aM,
              strokeDasharray: MM.payload.strokeDasharray,
              x1: 0,
              y1: iM,
              x2: GM,
              y2: iM,
              className: "recharts-legend-icon"
            });
            if ("line" === MM.type) return OM.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: aM,
              d: "M0,".concat(iM, "h").concat(jM, "\n            A").concat(SM, ",").concat(SM, ",0,1,1,").concat(2 * jM, ",").concat(iM, "\n            H").concat(GM, "M").concat(2 * jM, ",").concat(iM, "\n            A").concat(SM, ",").concat(SM, ",0,1,1,").concat(jM, ",").concat(iM),
              className: "recharts-legend-icon"
            });
            if ("rect" === MM.type) return OM.createElement("path", {
              stroke: "none",
              fill: aM,
              d: "M0,".concat(4, "h").concat(GM, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (OM.isValidElement(MM.legendIcon)) {
              var PM = function(MM) {
                for (var rM = 1; rM < arguments.length; rM++) {
                  var iM = null != arguments[rM] ? arguments[rM] : {};
                  rM % 2 ? HM(Object(iM), !0).forEach((function(rM) {
                    EM(MM, rM, iM[rM])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : HM(Object(iM)).forEach((function(rM) {
                    Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
                  }))
                }
                return MM
              }({}, MM);
              return delete PM.legendIcon, OM.cloneElement(MM.legendIcon, PM)
            }
            return OM.createElement(QM.d, {
              fill: aM,
              cx: iM,
              cy: iM,
              size: GM,
              sizeType: "diameter",
              type: MM.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var MM = this,
              rM = this.props,
              iM = rM.payload,
              SM = rM.iconSize,
              QM = rM.layout,
              LM = rM.formatter,
              HM = rM.inactiveColor,
              hM = {
                x: 0,
                y: 0,
                width: GM,
                height: GM
              },
              JM = {
                display: "horizontal" === QM ? "inline-block" : "block",
                marginRight: 10
              },
              dM = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return iM.map((function(rM, iM) {
              var QM = rM.formatter || LM,
                yM = (0, aM.b)(EM(EM({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(iM), !0), "inactive", rM.inactive));
              if ("none" === rM.type) return null;
              var lM = jM()(rM.value) ? null : rM.value;
              (0, PM.e)(!jM()(rM.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var UM = rM.inactive ? HM : rM.color;
              return OM.createElement("li", mM({
                className: yM,
                style: JM,
                key: "legend-item-".concat(iM)
              }, (0, zM.l)(MM.props, rM, iM)), OM.createElement(nM.c, {
                width: SM,
                height: SM,
                viewBox: hM,
                style: dM
              }, MM.renderIcon(rM)), OM.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: UM
                }
              }, QM ? QM(lM, rM, iM) : lM))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var MM = this.props,
              rM = MM.payload,
              iM = MM.layout,
              SM = MM.align;
            if (!rM || !rM.length) return null;
            var jM = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === iM ? SM : "left"
            };
            return OM.createElement("ul", {
              className: "recharts-default-legend",
              style: jM
            }, this.renderItems())
          }
        }], SM && hM(iM.prototype, SM), LM && hM(iM, LM), Object.defineProperty(iM, "prototype", {
          writable: !1
        }), iM;
        var iM, SM, LM
      }(OM.PureComponent);
    EM(CM, "displayName", "Legend"), EM(CM, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var eM = iM(5595),
      bM = iM(6446);

    function wM(MM) {
      return wM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, wM(MM)
    }
    var tM = ["ref"];

    function gM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function uM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? gM(Object(iM), !0).forEach((function(rM) {
          kM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : gM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function RM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, ZM(OM.key), OM)
      }
    }

    function pM(MM, rM, iM) {
      return rM = sM(rM),
        function(MM, rM) {
          if (rM && ("object" === wM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, WM() ? Reflect.construct(rM, iM || [], sM(MM).constructor) : rM.apply(MM, iM))
    }

    function WM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (WM = function() {
        return !!MM
      })()
    }

    function sM(MM) {
      return sM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, sM(MM)
    }

    function DM(MM, rM) {
      return DM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, DM(MM, rM)
    }

    function kM(MM, rM, iM) {
      return (rM = ZM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function ZM(MM) {
      var rM = function(MM, rM) {
        if ("object" != wM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != wM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == wM(rM) ? rM : rM + ""
    }

    function oM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function fM(MM) {
      return MM.value
    }
    var YM = function(MM) {
      function rM() {
        var MM;
        ! function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM);
        for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        return kM(MM = pM(this, rM, [].concat(OM)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), MM
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && DM(MM, rM)
      }(rM, MM), iM = rM, jM = [{
        key: "getWithHeight",
        value: function(MM, rM) {
          var iM = uM(uM({}, this.defaultProps), MM.props).layout;
          return "vertical" === iM && (0, eM.y)(MM.props.height) ? {
            height: MM.props.height
          } : "horizontal" === iM ? {
            width: MM.props.width || rM
          } : null
        }
      }], (SM = [{
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
            var MM = this.wrapperNode.getBoundingClientRect();
            return MM.height = this.wrapperNode.offsetHeight, MM.width = this.wrapperNode.offsetWidth, MM
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var MM = this.props.onBBoxUpdate,
            rM = this.getBBox();
          rM ? (Math.abs(rM.width - this.lastBoundingBox.width) > 1 || Math.abs(rM.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = rM.width, this.lastBoundingBox.height = rM.height, MM && MM(rM)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, MM && MM(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? uM({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(MM) {
          var rM, iM, OM = this.props,
            SM = OM.layout,
            jM = OM.align,
            aM = OM.verticalAlign,
            PM = OM.margin,
            nM = OM.chartWidth,
            QM = OM.chartHeight;
          return MM && (void 0 !== MM.left && null !== MM.left || void 0 !== MM.right && null !== MM.right) || (rM = "center" === jM && "vertical" === SM ? {
            left: ((nM || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === jM ? {
            right: PM && PM.right || 0
          } : {
            left: PM && PM.left || 0
          }), MM && (void 0 !== MM.top && null !== MM.top || void 0 !== MM.bottom && null !== MM.bottom) || (iM = "middle" === aM ? {
            top: ((QM || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === aM ? {
            bottom: PM && PM.bottom || 0
          } : {
            top: PM && PM.top || 0
          }), uM(uM({}, rM), iM)
        }
      }, {
        key: "render",
        value: function() {
          var MM = this,
            rM = this.props,
            iM = rM.content,
            SM = rM.width,
            jM = rM.height,
            aM = rM.wrapperStyle,
            PM = rM.payloadUniqBy,
            nM = rM.payload,
            QM = uM(uM({
              position: "absolute",
              width: SM || "auto",
              height: jM || "auto"
            }, this.getDefaultPosition(aM)), aM);
          return OM.createElement("div", {
            className: "recharts-legend-wrapper",
            style: QM,
            ref: function(rM) {
              MM.wrapperNode = rM
            }
          }, function(MM, rM) {
            if (OM.isValidElement(MM)) return OM.cloneElement(MM, rM);
            if ("function" === typeof MM) return OM.createElement(MM, rM);
            rM.ref;
            var iM = oM(rM, tM);
            return OM.createElement(CM, iM)
          }(iM, uM(uM({}, this.props), {}, {
            payload: (0, bM.e)(nM, PM, fM)
          })))
        }
      }]) && RM(iM.prototype, SM), jM && RM(iM, jM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, SM, jM
    }(OM.PureComponent);
    kM(YM, "displayName", "Legend"), kM(YM, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  5485: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => dM
    });
    var OM = iM(5491),
      SM = iM(44),
      jM = iM(5500),
      aM = iM.n(jM),
      PM = iM(5595),
      nM = iM(5873),
      QM = iM(5876);

    function zM(MM) {
      return zM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, zM(MM)
    }

    function LM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function mM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? LM(Object(iM), !0).forEach((function(rM) {
          HM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : LM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function HM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != zM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != zM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == zM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function hM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return JM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return JM(MM, rM)
      }(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }
    var dM = (0, SM.forwardRef)((function(MM, rM) {
      var iM = MM.aspect,
        jM = MM.initialDimension,
        zM = void 0 === jM ? {
          width: -1,
          height: -1
        } : jM,
        LM = MM.width,
        HM = void 0 === LM ? "100%" : LM,
        JM = MM.height,
        dM = void 0 === JM ? "100%" : JM,
        yM = MM.minWidth,
        lM = void 0 === yM ? 0 : yM,
        EM = MM.minHeight,
        UM = MM.maxHeight,
        GM = MM.children,
        CM = MM.debounce,
        eM = void 0 === CM ? 0 : CM,
        bM = MM.id,
        wM = MM.className,
        tM = MM.pE,
        gM = MM.style,
        uM = void 0 === gM ? {} : gM,
        RM = (0, SM.useRef)(null),
        pM = (0, SM.useRef)();
      pM.current = tM, (0, SM.useImperativeHandle)(rM, (function() {
        return Object.defineProperty(RM.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), RM.current
          },
          configurable: !0
        })
      }));
      var WM = hM((0, SM.useState)({
          containerWidth: zM.width,
          containerHeight: zM.height
        }), 2),
        sM = WM[0],
        DM = WM[1],
        kM = (0, SM.useCallback)((function(MM, rM) {
          DM((function(iM) {
            var OM = Math.round(MM),
              SM = Math.round(rM);
            return iM.containerWidth === OM && iM.containerHeight === SM ? iM : {
              containerWidth: OM,
              containerHeight: SM
            }
          }))
        }), []);
      (0, SM.useEffect)((function() {
        var MM = function(MM) {
          var rM, iM = MM[0].contentRect,
            OM = iM.width,
            SM = iM.height;
          kM(OM, SM), null === (rM = pM.current) || void 0 === rM || rM.call(pM, OM, SM)
        };
        eM > 0 && (MM = aM()(MM, eM, {
          trailing: !0,
          leading: !1
        }));
        var rM = new ResizeObserver(MM),
          iM = RM.current.getBoundingClientRect(),
          OM = iM.width,
          SM = iM.height;
        return kM(OM, SM), rM.observe(RM.current),
          function() {
            rM.disconnect()
          }
      }), [kM, eM]);
      var ZM = (0, SM.useMemo)((function() {
        var MM = sM.containerWidth,
          rM = sM.containerHeight;
        if (MM < 0 || rM < 0) return null;
        (0, nM.e)((0, PM.A)(HM) || (0, PM.A)(dM), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", HM, dM), (0, nM.e)(!iM || iM > 0, "The aspect(%s) must be greater than zero.", iM);
        var OM = (0, PM.A)(HM) ? MM : HM,
          jM = (0, PM.A)(dM) ? rM : dM;
        iM && iM > 0 && (OM ? jM = OM / iM : jM && (OM = jM * iM), UM && jM > UM && (jM = UM)), (0, nM.e)(OM > 0 || jM > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", OM, jM, HM, dM, lM, EM, iM);
        var aM = !Array.isArray(GM) && (0, QM.l)(GM.type).endsWith("Chart");
        return SM.Children.map(GM, (function(MM) {
          return SM.isValidElement(MM) ? (0, SM.cloneElement)(MM, mM({
            width: OM,
            height: jM
          }, aM ? {
            style: mM({
              height: "100%",
              width: "100%",
              maxHeight: jM,
              maxWidth: OM
            }, MM.props.style)
          } : {})) : MM
        }))
      }), [iM, GM, dM, UM, EM, lM, sM, HM]);
      return SM.createElement("div", {
        id: bM ? "".concat(bM) : void 0,
        className: (0, OM.b)("recharts-responsive-container", wM),
        style: mM(mM({}, uM), {}, {
          width: HM,
          height: dM,
          minWidth: lM,
          minHeight: EM,
          maxHeight: UM
        }),
        ref: RM
      }, ZM)
    }))
  },
  6585: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => NM
    });
    var OM = iM(44),
      SM = iM(5864),
      jM = iM.n(SM),
      aM = iM(5491),
      PM = iM(5595),
      nM = iM(6438),
      QM = iM(5876),
      zM = iM(6589);

    function LM(MM) {
      return LM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, LM(MM)
    }

    function mM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return HM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return HM(MM, rM)
      }(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function hM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, JM(OM.key), OM)
      }
    }

    function JM(MM) {
      var rM = function(MM, rM) {
        if ("object" != LM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != LM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == LM(rM) ? rM : rM + ""
    }
    var dM = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      yM = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      lM = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      EM = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      UM = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      GM = Object.keys(UM),
      CM = "NaN";
    var eM = function() {
      function MM(rM, iM) {
        ! function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, MM), this.num = rM, this.unit = iM, this.num = rM, this.unit = iM, Number.isNaN(rM) && (this.unit = ""), "" === iM || lM.test(iM) || (this.num = NaN, this.unit = ""), GM.includes(iM) && (this.num = function(MM, rM) {
          return MM * UM[rM]
        }(rM, iM), this.unit = "px")
      }
      return rM = MM, OM = [{
        key: "parse",
        value: function(rM) {
          var iM, OM = mM(null !== (iM = EM.exec(rM)) && void 0 !== iM ? iM : [], 3),
            SM = OM[1],
            jM = OM[2];
          return new MM(parseFloat(SM), null !== jM && void 0 !== jM ? jM : "")
        }
      }], (iM = [{
        key: "add",
        value: function(rM) {
          return this.unit !== rM.unit ? new MM(NaN, "") : new MM(this.num + rM.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(rM) {
          return this.unit !== rM.unit ? new MM(NaN, "") : new MM(this.num - rM.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(rM) {
          return "" !== this.unit && "" !== rM.unit && this.unit !== rM.unit ? new MM(NaN, "") : new MM(this.num * rM.num, this.unit || rM.unit)
        }
      }, {
        key: "divide",
        value: function(rM) {
          return "" !== this.unit && "" !== rM.unit && this.unit !== rM.unit ? new MM(NaN, "") : new MM(this.num / rM.num, this.unit || rM.unit)
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
      }]) && hM(rM.prototype, iM), OM && hM(rM, OM), Object.defineProperty(rM, "prototype", {
        writable: !1
      }), rM;
      var rM, iM, OM
    }();

    function bM(MM) {
      if (MM.includes(CM)) return CM;
      for (var rM = MM; rM.includes("*") || rM.includes("/");) {
        var iM, OM = mM(null !== (iM = dM.exec(rM)) && void 0 !== iM ? iM : [], 4),
          SM = OM[1],
          jM = OM[2],
          aM = OM[3],
          PM = eM.parse(null !== SM && void 0 !== SM ? SM : ""),
          nM = eM.parse(null !== aM && void 0 !== aM ? aM : ""),
          QM = "*" === jM ? PM.multiply(nM) : PM.divide(nM);
        if (QM.isNaN()) return CM;
        rM = rM.replace(dM, QM.toString())
      }
      for (; rM.includes("+") || /.-\d+(?:\.\d+)?/.test(rM);) {
        var zM, LM = mM(null !== (zM = yM.exec(rM)) && void 0 !== zM ? zM : [], 4),
          HM = LM[1],
          hM = LM[2],
          JM = LM[3],
          lM = eM.parse(null !== HM && void 0 !== HM ? HM : ""),
          EM = eM.parse(null !== JM && void 0 !== JM ? JM : ""),
          UM = "+" === hM ? lM.add(EM) : lM.subtract(EM);
        if (UM.isNaN()) return CM;
        rM = rM.replace(yM, UM.toString())
      }
      return rM
    }
    var wM = /\(([^()]*)\)/;

    function tM(MM) {
      var rM = MM.replace(/\s+/g, "");
      return rM = function(MM) {
        for (var rM = MM; rM.includes("(");) {
          var iM = mM(wM.exec(rM), 2)[1];
          rM = rM.replace(wM, bM(iM))
        }
        return rM
      }(rM), rM = bM(rM)
    }

    function gM(MM) {
      var rM = function(MM) {
        try {
          return tM(MM)
        } catch (rM) {
          return CM
        }
      }(MM.slice(5, -1));
      return rM === CM ? "" : rM
    }
    var uM = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      RM = ["dx", "dy", "angle", "className", "breakAll"];

    function pM() {
      return pM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, pM.apply(this, arguments)
    }

    function WM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function sM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return DM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return DM(MM, rM)
      }(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }
    var kM = /[ \f\n\r\t\v\u2028\u2029]+/,
      ZM = function(MM) {
        var rM = MM.children,
          iM = MM.breakAll,
          OM = MM.style;
        try {
          var SM = [];
          return jM()(rM) || (SM = iM ? rM.toString().split("") : rM.toString().split(kM)), {
            wordsWithComputedWidth: SM.map((function(MM) {
              return {
                word: MM,
                width: (0, zM.f)(MM, OM).width
              }
            })),
            spaceWidth: iM ? 0 : (0, zM.f)("\xa0", OM).width
          }
        } catch (aM) {
          return null
        }
      },
      oM = function(MM) {
        return [{
          words: jM()(MM) ? [] : MM.toString().split(kM)
        }]
      },
      fM = function(MM) {
        var rM = MM.width,
          iM = MM.scaleToFit,
          OM = MM.children,
          SM = MM.style,
          jM = MM.breakAll,
          aM = MM.maxLines;
        if ((rM || iM) && !nM.d.isSsr) {
          var QM = ZM({
            breakAll: jM,
            children: OM,
            style: SM
          });
          return QM ? function(MM, rM, iM, OM, SM) {
            var jM = MM.maxLines,
              aM = MM.children,
              nM = MM.style,
              QM = MM.breakAll,
              zM = (0, PM.y)(jM),
              LM = aM,
              mM = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(MM, rM) {
                  var jM = rM.word,
                    aM = rM.width,
                    PM = MM[MM.length - 1];
                  if (PM && (null == OM || SM || PM.width + aM + iM < Number(OM))) PM.words.push(jM), PM.width += aM + iM;
                  else {
                    var nM = {
                      words: [jM],
                      width: aM
                    };
                    MM.push(nM)
                  }
                  return MM
                }), [])
              },
              HM = mM(rM);
            if (!zM) return HM;
            for (var hM, JM = function(MM) {
                var rM = LM.slice(0, MM),
                  iM = ZM({
                    breakAll: QM,
                    style: nM,
                    children: rM + "\u2026"
                  }).wordsWithComputedWidth,
                  SM = mM(iM),
                  aM = SM.length > jM || function(MM) {
                    return MM.reduce((function(MM, rM) {
                      return MM.width > rM.width ? MM : rM
                    }))
                  }(SM).width > Number(OM);
                return [aM, SM]
              }, dM = 0, yM = LM.length - 1, lM = 0; dM <= yM && lM <= LM.length - 1;) {
              var EM = Math.floor((dM + yM) / 2),
                UM = sM(JM(EM - 1), 2),
                GM = UM[0],
                CM = UM[1],
                eM = sM(JM(EM), 1)[0];
              if (GM || eM || (dM = EM + 1), GM && eM && (yM = EM - 1), !GM && eM) {
                hM = CM;
                break
              }
              lM++
            }
            return hM || HM
          }({
            breakAll: jM,
            children: OM,
            maxLines: aM,
            style: SM
          }, QM.wordsWithComputedWidth, QM.spaceWidth, rM, iM) : oM(OM)
        }
        return oM(OM)
      },
      YM = "#808080",
      NM = function(MM) {
        var rM = MM.x,
          iM = void 0 === rM ? 0 : rM,
          SM = MM.y,
          jM = void 0 === SM ? 0 : SM,
          nM = MM.lineHeight,
          zM = void 0 === nM ? "1em" : nM,
          LM = MM.capHeight,
          mM = void 0 === LM ? "0.71em" : LM,
          HM = MM.scaleToFit,
          hM = void 0 !== HM && HM,
          JM = MM.textAnchor,
          dM = void 0 === JM ? "start" : JM,
          yM = MM.verticalAnchor,
          lM = void 0 === yM ? "end" : yM,
          EM = MM.fill,
          UM = void 0 === EM ? YM : EM,
          GM = WM(MM, uM),
          CM = (0, OM.useMemo)((function() {
            return fM({
              breakAll: GM.breakAll,
              children: GM.children,
              maxLines: GM.maxLines,
              scaleToFit: hM,
              style: GM.style,
              width: GM.width
            })
          }), [GM.breakAll, GM.children, GM.maxLines, hM, GM.style, GM.width]),
          eM = GM.dx,
          bM = GM.dy,
          wM = GM.angle,
          tM = GM.className,
          sM = GM.breakAll,
          DM = WM(GM, RM);
        if (!(0, PM.x)(iM) || !(0, PM.x)(jM)) return null;
        var kM, ZM = iM + ((0, PM.y)(eM) ? eM : 0),
          oM = jM + ((0, PM.y)(bM) ? bM : 0);
        switch (lM) {
          case "start":
            kM = gM("calc(".concat(mM, ")"));
            break;
          case "middle":
            kM = gM("calc(".concat((CM.length - 1) / 2, " * -").concat(zM, " + (").concat(mM, " / 2))"));
            break;
          default:
            kM = gM("calc(".concat(CM.length - 1, " * -").concat(zM, ")"))
        }
        var NM = [];
        if (hM) {
          var AM = CM[0].width,
            xM = GM.width;
          NM.push("scale(".concat(((0, PM.y)(xM) ? xM / AM : 1) / AM, ")"))
        }
        return wM && NM.push("rotate(".concat(wM, ", ").concat(ZM, ", ").concat(oM, ")")), NM.length && (DM.transform = NM.join(" ")), OM.createElement("text", pM({}, (0, QM.b)(DM, !0), {
          x: ZM,
          y: oM,
          className: (0, aM.b)("recharts-text", tM),
          textAnchor: dM,
          fill: UM.includes("url") ? YM : UM
        }), CM.map((function(MM, rM) {
          var iM = MM.words.join(sM ? "" : " ");
          return OM.createElement("tspan", {
            x: ZM,
            dy: 0 === rM ? kM : zM,
            key: "".concat(iM, "-").concat(rM)
          }, iM)
        })))
      }
  },
  6431: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => TM
    });
    var OM = iM(44),
      SM = iM(5952),
      jM = iM.n(SM),
      aM = iM(5864),
      PM = iM.n(aM),
      nM = iM(5491),
      QM = iM(5595);

    function zM(MM) {
      return zM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, zM(MM)
    }

    function LM() {
      return LM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, LM.apply(this, arguments)
    }

    function mM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return HM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return HM(MM, rM)
      }(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function hM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function JM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? hM(Object(iM), !0).forEach((function(rM) {
          dM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : hM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function dM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != zM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != zM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == zM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function yM(MM) {
      return Array.isArray(MM) && (0, QM.x)(MM[0]) && (0, QM.x)(MM[1]) ? MM.join(" ~ ") : MM
    }
    var lM = function(MM) {
      var rM = MM.separator,
        iM = void 0 === rM ? " : " : rM,
        SM = MM.contentStyle,
        aM = void 0 === SM ? {} : SM,
        zM = MM.itemStyle,
        HM = void 0 === zM ? {} : zM,
        hM = MM.labelStyle,
        dM = void 0 === hM ? {} : hM,
        lM = MM.payload,
        EM = MM.formatter,
        UM = MM.itemSorter,
        GM = MM.wrapperClassName,
        CM = MM.labelClassName,
        eM = MM.label,
        bM = MM.labelFormatter,
        wM = MM.accessibilityLayer,
        tM = void 0 !== wM && wM,
        gM = JM({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, aM),
        uM = JM({
          margin: 0
        }, dM),
        RM = !PM()(eM),
        pM = RM ? eM : "",
        WM = (0, nM.b)("recharts-default-tooltip", GM),
        sM = (0, nM.b)("recharts-tooltip-label", CM);
      RM && bM && void 0 !== lM && null !== lM && (pM = bM(eM, lM));
      var DM = tM ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return OM.createElement("div", LM({
        className: WM,
        style: gM
      }, DM), OM.createElement("p", {
        className: sM,
        style: uM
      }, OM.isValidElement(pM) ? pM : "".concat(pM)), function() {
        if (lM && lM.length) {
          var MM = (UM ? jM()(lM, UM) : lM).map((function(MM, rM) {
            if ("none" === MM.type) return null;
            var SM = JM({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: MM.color || "#000"
              }, HM),
              jM = MM.formatter || EM || yM,
              aM = MM.value,
              PM = MM.name,
              nM = aM,
              zM = PM;
            if (jM && null != nM && null != zM) {
              var LM = jM(aM, PM, MM, rM, lM);
              if (Array.isArray(LM)) {
                var hM = mM(LM, 2);
                nM = hM[0], zM = hM[1]
              } else nM = LM
            }
            return OM.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(rM),
              style: SM
            }, (0, QM.x)(zM) ? OM.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, zM) : null, (0, QM.x)(zM) ? OM.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, iM) : null, OM.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, nM), OM.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, MM.unit || ""))
          }));
          return OM.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, MM)
        }
        return null
      }())
    };

    function EM(MM) {
      return EM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, EM(MM)
    }

    function UM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != EM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != EM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == EM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var GM = "recharts-tooltip-wrapper",
      CM = {
        visibility: "hidden"
      };

    function eM(MM) {
      var rM = MM.coordinate,
        iM = MM.translateX,
        OM = MM.translateY;
      return (0, nM.b)(GM, UM(UM(UM(UM({}, "".concat(GM, "-right"), (0, QM.y)(iM) && rM && (0, QM.y)(rM.x) && iM >= rM.x), "".concat(GM, "-left"), (0, QM.y)(iM) && rM && (0, QM.y)(rM.x) && iM < rM.x), "".concat(GM, "-bottom"), (0, QM.y)(OM) && rM && (0, QM.y)(rM.y) && OM >= rM.y), "".concat(GM, "-top"), (0, QM.y)(OM) && rM && (0, QM.y)(rM.y) && OM < rM.y))
    }

    function bM(MM) {
      var rM = MM.allowEscapeViewBox,
        iM = MM.coordinate,
        OM = MM.key,
        SM = MM.offsetTopLeft,
        jM = MM.position,
        aM = MM.reverseDirection,
        PM = MM.tooltipDimension,
        nM = MM.viewBox,
        zM = MM.viewBoxDimension;
      if (jM && (0, QM.y)(jM[OM])) return jM[OM];
      var LM = iM[OM] - PM - SM,
        mM = iM[OM] + SM;
      return rM[OM] ? aM[OM] ? LM : mM : aM[OM] ? LM < nM[OM] ? Math.max(mM, nM[OM]) : Math.max(LM, nM[OM]) : mM + PM > nM[OM] + zM ? Math.max(LM, nM[OM]) : Math.max(mM, nM[OM])
    }

    function wM(MM) {
      return wM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, wM(MM)
    }

    function tM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function gM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? tM(Object(iM), !0).forEach((function(rM) {
          DM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : tM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function uM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, kM(OM.key), OM)
      }
    }

    function RM(MM, rM, iM) {
      return rM = WM(rM),
        function(MM, rM) {
          if (rM && ("object" === wM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, pM() ? Reflect.construct(rM, iM || [], WM(MM).constructor) : rM.apply(MM, iM))
    }

    function pM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (pM = function() {
        return !!MM
      })()
    }

    function WM(MM) {
      return WM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, WM(MM)
    }

    function sM(MM, rM) {
      return sM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, sM(MM, rM)
    }

    function DM(MM, rM, iM) {
      return (rM = kM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function kM(MM) {
      var rM = function(MM, rM) {
        if ("object" != wM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != wM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == wM(rM) ? rM : rM + ""
    }
    var ZM = function(MM) {
        function rM() {
          var MM;
          ! function(MM, rM) {
            if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
          }(this, rM);
          for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
          return DM(MM = RM(this, rM, [].concat(OM)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), DM(MM, "handleKeyDown", (function(rM) {
            var iM, OM, SM, jM;
            "Escape" === rM.key && MM.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (iM = null === (OM = MM.props.coordinate) || void 0 === OM ? void 0 : OM.x) && void 0 !== iM ? iM : 0,
                y: null !== (SM = null === (jM = MM.props.coordinate) || void 0 === jM ? void 0 : jM.y) && void 0 !== SM ? SM : 0
              }
            })
          })), MM
        }
        return function(MM, rM) {
          if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
          MM.prototype = Object.create(rM && rM.prototype, {
            constructor: {
              value: MM,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(MM, "prototype", {
            writable: !1
          }), rM && sM(MM, rM)
        }(rM, MM), iM = rM, (SM = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var MM = this.wrapperNode.getBoundingClientRect();
              (Math.abs(MM.width - this.state.lastBoundingBox.width) > 1 || Math.abs(MM.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: MM.width,
                  height: MM.height
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
            var MM, rM;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (MM = this.props.coordinate) || void 0 === MM ? void 0 : MM.x) === this.state.dismissedAtCoordinate.x && (null === (rM = this.props.coordinate) || void 0 === rM ? void 0 : rM.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var MM = this,
              rM = this.props,
              iM = rM.active,
              SM = rM.allowEscapeViewBox,
              jM = rM.animationDuration,
              aM = rM.animationEasing,
              PM = rM.children,
              nM = rM.coordinate,
              QM = rM.hasPayload,
              zM = rM.isAnimationActive,
              LM = rM.offset,
              mM = rM.position,
              HM = rM.reverseDirection,
              hM = rM.useTranslate3d,
              JM = rM.viewBox,
              dM = rM.wrapperStyle,
              yM = function(MM) {
                var rM, iM, OM = MM.allowEscapeViewBox,
                  SM = MM.coordinate,
                  jM = MM.offsetTopLeft,
                  aM = MM.position,
                  PM = MM.reverseDirection,
                  nM = MM.tooltipBox,
                  QM = MM.useTranslate3d,
                  zM = MM.viewBox;
                return {
                  cssProperties: nM.height > 0 && nM.width > 0 && SM ? function(MM) {
                    var rM = MM.translateX,
                      iM = MM.translateY;
                    return {
                      transform: MM.useTranslate3d ? "translate3d(".concat(rM, "px, ").concat(iM, "px, 0)") : "translate(".concat(rM, "px, ").concat(iM, "px)")
                    }
                  }({
                    translateX: rM = bM({
                      allowEscapeViewBox: OM,
                      coordinate: SM,
                      key: "x",
                      offsetTopLeft: jM,
                      position: aM,
                      reverseDirection: PM,
                      tooltipDimension: nM.width,
                      viewBox: zM,
                      viewBoxDimension: zM.width
                    }),
                    translateY: iM = bM({
                      allowEscapeViewBox: OM,
                      coordinate: SM,
                      key: "y",
                      offsetTopLeft: jM,
                      position: aM,
                      reverseDirection: PM,
                      tooltipDimension: nM.height,
                      viewBox: zM,
                      viewBoxDimension: zM.height
                    }),
                    useTranslate3d: QM
                  }) : CM,
                  cssClasses: eM({
                    translateX: rM,
                    translateY: iM,
                    coordinate: SM
                  })
                }
              }({
                allowEscapeViewBox: SM,
                coordinate: nM,
                offsetTopLeft: LM,
                position: mM,
                reverseDirection: HM,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: hM,
                viewBox: JM
              }),
              lM = yM.cssClasses,
              EM = yM.cssProperties,
              UM = gM(gM({
                transition: zM && iM ? "transform ".concat(jM, "ms ").concat(aM) : void 0
              }, EM), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && iM && QM ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, dM);
            return OM.createElement("div", {
              tabIndex: -1,
              className: lM,
              style: UM,
              ref: function(rM) {
                MM.wrapperNode = rM
              }
            }, PM)
          }
        }]) && uM(iM.prototype, SM), jM && uM(iM, jM), Object.defineProperty(iM, "prototype", {
          writable: !1
        }), iM;
        var iM, SM, jM
      }(OM.PureComponent),
      oM = iM(6438),
      fM = iM(6446);

    function YM(MM) {
      return YM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, YM(MM)
    }

    function NM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function AM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? NM(Object(iM), !0).forEach((function(rM) {
          IM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : NM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function xM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, KM(OM.key), OM)
      }
    }

    function vM(MM, rM, iM) {
      return rM = BM(rM),
        function(MM, rM) {
          if (rM && ("object" === YM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return function(MM) {
            if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return MM
          }(MM)
        }(MM, FM() ? Reflect.construct(rM, iM || [], BM(MM).constructor) : rM.apply(MM, iM))
    }

    function FM() {
      try {
        var MM = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (MM) {}
      return (FM = function() {
        return !!MM
      })()
    }

    function BM(MM) {
      return BM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, BM(MM)
    }

    function XM(MM, rM) {
      return XM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, XM(MM, rM)
    }

    function IM(MM, rM, iM) {
      return (rM = KM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function KM(MM) {
      var rM = function(MM, rM) {
        if ("object" != YM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != YM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == YM(rM) ? rM : rM + ""
    }

    function qM(MM) {
      return MM.dataKey
    }
    var TM = function(MM) {
      function rM() {
        return function(MM, rM) {
          if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
        }(this, rM), vM(this, rM, arguments)
      }
      return function(MM, rM) {
        if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
        MM.prototype = Object.create(rM && rM.prototype, {
          constructor: {
            value: MM,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(MM, "prototype", {
          writable: !1
        }), rM && XM(MM, rM)
      }(rM, MM), iM = rM, (SM = [{
        key: "render",
        value: function() {
          var MM = this,
            rM = this.props,
            iM = rM.active,
            SM = rM.allowEscapeViewBox,
            jM = rM.animationDuration,
            aM = rM.animationEasing,
            PM = rM.content,
            nM = rM.coordinate,
            QM = rM.filterNull,
            zM = rM.isAnimationActive,
            LM = rM.offset,
            mM = rM.payload,
            HM = rM.payloadUniqBy,
            hM = rM.position,
            JM = rM.reverseDirection,
            dM = rM.useTranslate3d,
            yM = rM.viewBox,
            EM = rM.wrapperStyle,
            UM = null !== mM && void 0 !== mM ? mM : [];
          QM && UM.length && (UM = (0, fM.e)(mM.filter((function(rM) {
            return null != rM.value && (!0 !== rM.hide || MM.props.includeHidden)
          })), HM, qM));
          var GM = UM.length > 0;
          return OM.createElement(ZM, {
            allowEscapeViewBox: SM,
            animationDuration: jM,
            animationEasing: aM,
            isAnimationActive: zM,
            active: iM,
            coordinate: nM,
            hasPayload: GM,
            offset: LM,
            position: hM,
            reverseDirection: JM,
            useTranslate3d: dM,
            viewBox: yM,
            wrapperStyle: EM
          }, function(MM, rM) {
            return OM.isValidElement(MM) ? OM.cloneElement(MM, rM) : "function" === typeof MM ? OM.createElement(MM, rM) : OM.createElement(lM, rM)
          }(PM, AM(AM({}, this.props), {}, {
            payload: UM
          })))
        }
      }]) && xM(iM.prototype, SM), jM && xM(iM, jM), Object.defineProperty(iM, "prototype", {
        writable: !1
      }), iM;
      var iM, SM, jM
    }(OM.PureComponent);
    IM(TM, "displayName", "Tooltip"), IM(TM, "defaultProps", {
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
      isAnimationActive: !oM.d.isSsr,
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
  6429: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM
    });
    var OM = iM(44),
      SM = iM(5491),
      jM = iM(5876),
      aM = ["children", "className"];

    function PM() {
      return PM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, PM.apply(this, arguments)
    }

    function nM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }
    var QM = OM.forwardRef((function(MM, rM) {
      var iM = MM.children,
        QM = MM.className,
        zM = nM(MM, aM),
        LM = (0, SM.b)("recharts-layer", QM);
      return OM.createElement("g", PM({
        className: LM
      }, (0, jM.b)(zM, !0), {
        ref: rM
      }), iM)
    }))
  },
  6424: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM
    });
    var OM = iM(44),
      SM = iM(5491),
      jM = iM(5876),
      aM = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function PM() {
      return PM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, PM.apply(this, arguments)
    }

    function nM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function QM(MM) {
      var rM = MM.children,
        iM = MM.width,
        QM = MM.height,
        zM = MM.viewBox,
        LM = MM.className,
        mM = MM.style,
        HM = MM.title,
        hM = MM.desc,
        JM = nM(MM, aM),
        dM = zM || {
          width: iM,
          height: QM,
          x: 0,
          y: 0
        },
        yM = (0, SM.b)("recharts-surface", LM);
      return OM.createElement("svg", PM({}, (0, jM.b)(JM, !0, "svg"), {
        className: yM,
        width: iM,
        height: QM,
        style: mM,
        viewBox: "".concat(dM.x, " ").concat(dM.y, " ").concat(dM.width, " ").concat(dM.height)
      }), OM.createElement("title", null, HM), OM.createElement("desc", null, hM), rM)
    }
  },
  6801: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => EM,
      e: () => CM,
      f: () => uM,
      j: () => gM,
      n: () => UM,
      o: () => tM,
      r: () => wM,
      s: () => GM,
      u: () => bM,
      x: () => eM
    });
    var OM = iM(44),
      SM = iM(6417),
      jM = iM(6804),
      aM = iM.n(jM),
      PM = iM(6716),
      nM = iM.n(PM),
      QM = iM(5661),
      zM = iM.n(QM)()((function(MM) {
        return {
          x: MM.left,
          y: MM.top,
          width: MM.width,
          height: MM.height
        }
      }), (function(MM) {
        return ["l", MM.left, "t", MM.top, "w", MM.width, "h", MM.height].join("")
      })),
      LM = iM(5595);
    var mM = (0, OM.createContext)(void 0),
      HM = (0, OM.createContext)(void 0),
      hM = (0, OM.createContext)(void 0),
      JM = (0, OM.createContext)({}),
      dM = (0, OM.createContext)(void 0),
      yM = (0, OM.createContext)(0),
      lM = (0, OM.createContext)(0),
      EM = function(MM) {
        var rM = MM.state,
          iM = rM.xAxisMap,
          SM = rM.yAxisMap,
          jM = rM.offset,
          aM = MM.clipPathId,
          PM = MM.children,
          nM = MM.width,
          QM = MM.height,
          LM = zM(jM);
        return OM.createElement(mM.Provider, {
          value: iM
        }, OM.createElement(HM.Provider, {
          value: SM
        }, OM.createElement(JM.Provider, {
          value: jM
        }, OM.createElement(hM.Provider, {
          value: LM
        }, OM.createElement(dM.Provider, {
          value: aM
        }, OM.createElement(yM.Provider, {
          value: QM
        }, OM.createElement(lM.Provider, {
          value: nM
        }, PM)))))))
      },
      UM = function() {
        return (0, OM.useContext)(dM)
      };
    var GM = function(MM) {
        var rM = (0, OM.useContext)(mM);
        null == rM && (0, SM.c)(!1);
        var iM = rM[MM];
        return null == iM && (0, SM.c)(!1), iM
      },
      CM = function() {
        var MM = (0, OM.useContext)(mM);
        return (0, LM.f)(MM)
      },
      eM = function() {
        var MM = (0, OM.useContext)(HM);
        return aM()(MM, (function(MM) {
          return nM()(MM.domain, Number.isFinite)
        })) || (0, LM.f)(MM)
      },
      bM = function(MM) {
        var rM = (0, OM.useContext)(HM);
        null == rM && (0, SM.c)(!1);
        var iM = rM[MM];
        return null == iM && (0, SM.c)(!1), iM
      },
      wM = function() {
        return (0, OM.useContext)(hM)
      },
      tM = function() {
        return (0, OM.useContext)(JM)
      },
      gM = function() {
        return (0, OM.useContext)(lM)
      },
      uM = function() {
        return (0, OM.useContext)(yM)
      }
  },
  6821: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => qM
    });
    var OM = iM(44);

    function SM() {}

    function jM(MM, rM, iM) {
      MM._context.bezierCurveTo((2 * MM._x0 + MM._x1) / 3, (2 * MM._y0 + MM._y1) / 3, (MM._x0 + 2 * MM._x1) / 3, (MM._y0 + 2 * MM._y1) / 3, (MM._x0 + 4 * MM._x1 + rM) / 6, (MM._y0 + 4 * MM._y1 + iM) / 6)
    }

    function aM(MM) {
      this._context = MM
    }

    function PM(MM) {
      this._context = MM
    }

    function nM(MM) {
      this._context = MM
    }
    aM.prototype = {
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
            jM(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(MM, rM) {
        switch (MM = +MM, rM = +rM, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(MM, rM) : this._context.moveTo(MM, rM);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            jM(this, MM, rM)
        }
        this._x0 = this._x1, this._x1 = MM, this._y0 = this._y1, this._y1 = rM
      }
    }, PM.prototype = {
      areaStart: SM,
      areaEnd: SM,
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
      point: function(MM, rM) {
        switch (MM = +MM, rM = +rM, this._point) {
          case 0:
            this._point = 1, this._x2 = MM, this._y2 = rM;
            break;
          case 1:
            this._point = 2, this._x3 = MM, this._y3 = rM;
            break;
          case 2:
            this._point = 3, this._x4 = MM, this._y4 = rM, this._context.moveTo((this._x0 + 4 * this._x1 + MM) / 6, (this._y0 + 4 * this._y1 + rM) / 6);
            break;
          default:
            jM(this, MM, rM)
        }
        this._x0 = this._x1, this._x1 = MM, this._y0 = this._y1, this._y1 = rM
      }
    }, nM.prototype = {
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
      point: function(MM, rM) {
        switch (MM = +MM, rM = +rM, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var iM = (this._x0 + 4 * this._x1 + MM) / 6,
              OM = (this._y0 + 4 * this._y1 + rM) / 6;
            this._line ? this._context.lineTo(iM, OM) : this._context.moveTo(iM, OM);
            break;
          case 3:
            this._point = 4;
          default:
            jM(this, MM, rM)
        }
        this._x0 = this._x1, this._x1 = MM, this._y0 = this._y1, this._y1 = rM
      }
    };
    class QM {
      constructor(MM, rM) {
        this._context = MM, this._x = rM
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
      point(MM, rM) {
        switch (MM = +MM, rM = +rM, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(MM, rM) : this._context.moveTo(MM, rM);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + MM) / 2, this._y0, this._x0, rM, MM, rM) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + rM) / 2, MM, this._y0, MM, rM)
        }
        this._x0 = MM, this._y0 = rM
      }
    }

    function zM(MM) {
      this._context = MM
    }

    function LM(MM) {
      this._context = MM
    }

    function mM(MM) {
      return new LM(MM)
    }

    function HM(MM) {
      return MM < 0 ? -1 : 1
    }

    function hM(MM, rM, iM) {
      var OM = MM._x1 - MM._x0,
        SM = rM - MM._x1,
        jM = (MM._y1 - MM._y0) / (OM || SM < 0 && -0),
        aM = (iM - MM._y1) / (SM || OM < 0 && -0),
        PM = (jM * SM + aM * OM) / (OM + SM);
      return (HM(jM) + HM(aM)) * Math.min(Math.abs(jM), Math.abs(aM), .5 * Math.abs(PM)) || 0
    }

    function JM(MM, rM) {
      var iM = MM._x1 - MM._x0;
      return iM ? (3 * (MM._y1 - MM._y0) / iM - rM) / 2 : rM
    }

    function dM(MM, rM, iM) {
      var OM = MM._x0,
        SM = MM._y0,
        jM = MM._x1,
        aM = MM._y1,
        PM = (jM - OM) / 3;
      MM._context.bezierCurveTo(OM + PM, SM + PM * rM, jM - PM, aM - PM * iM, jM, aM)
    }

    function yM(MM) {
      this._context = MM
    }

    function lM(MM) {
      this._context = new EM(MM)
    }

    function EM(MM) {
      this._context = MM
    }

    function UM(MM) {
      this._context = MM
    }

    function GM(MM) {
      var rM, iM, OM = MM.length - 1,
        SM = new Array(OM),
        jM = new Array(OM),
        aM = new Array(OM);
      for (SM[0] = 0, jM[0] = 2, aM[0] = MM[0] + 2 * MM[1], rM = 1; rM < OM - 1; ++rM) SM[rM] = 1, jM[rM] = 4, aM[rM] = 4 * MM[rM] + 2 * MM[rM + 1];
      for (SM[OM - 1] = 2, jM[OM - 1] = 7, aM[OM - 1] = 8 * MM[OM - 1] + MM[OM], rM = 1; rM < OM; ++rM) iM = SM[rM] / jM[rM - 1], jM[rM] -= iM, aM[rM] -= iM * aM[rM - 1];
      for (SM[OM - 1] = aM[OM - 1] / jM[OM - 1], rM = OM - 2; rM >= 0; --rM) SM[rM] = (aM[rM] - SM[rM + 1]) / jM[rM];
      for (jM[OM - 1] = (MM[OM] + SM[OM - 1]) / 2, rM = 0; rM < OM - 1; ++rM) jM[rM] = 2 * MM[rM + 1] - SM[rM + 1];
      return [SM, jM]
    }

    function CM(MM, rM) {
      this._context = MM, this._t = rM
    }
    zM.prototype = {
      areaStart: SM,
      areaEnd: SM,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(MM, rM) {
        MM = +MM, rM = +rM, this._point ? this._context.lineTo(MM, rM) : (this._point = 1, this._context.moveTo(MM, rM))
      }
    }, LM.prototype = {
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
      point: function(MM, rM) {
        switch (MM = +MM, rM = +rM, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(MM, rM) : this._context.moveTo(MM, rM);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(MM, rM)
        }
      }
    }, yM.prototype = {
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
            dM(this, this._t0, JM(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(MM, rM) {
        var iM = NaN;
        if (rM = +rM, (MM = +MM) !== this._x1 || rM !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(MM, rM) : this._context.moveTo(MM, rM);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, dM(this, JM(this, iM = hM(this, MM, rM)), iM);
              break;
            default:
              dM(this, this._t0, iM = hM(this, MM, rM))
          }
          this._x0 = this._x1, this._x1 = MM, this._y0 = this._y1, this._y1 = rM, this._t0 = iM
        }
      }
    }, (lM.prototype = Object.create(yM.prototype)).point = function(MM, rM) {
      yM.prototype.point.call(this, rM, MM)
    }, EM.prototype = {
      moveTo: function(MM, rM) {
        this._context.moveTo(rM, MM)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(MM, rM) {
        this._context.lineTo(rM, MM)
      },
      bezierCurveTo: function(MM, rM, iM, OM, SM, jM) {
        this._context.bezierCurveTo(rM, MM, OM, iM, jM, SM)
      }
    }, UM.prototype = {
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
        var MM = this._x,
          rM = this._y,
          iM = MM.length;
        if (iM)
          if (this._line ? this._context.lineTo(MM[0], rM[0]) : this._context.moveTo(MM[0], rM[0]), 2 === iM) this._context.lineTo(MM[1], rM[1]);
          else
            for (var OM = GM(MM), SM = GM(rM), jM = 0, aM = 1; aM < iM; ++jM, ++aM) this._context.bezierCurveTo(OM[0][jM], SM[0][jM], OM[1][jM], SM[1][jM], MM[aM], rM[aM]);
        (this._line || 0 !== this._line && 1 === iM) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(MM, rM) {
        this._x.push(+MM), this._y.push(+rM)
      }
    }, CM.prototype = {
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
      point: function(MM, rM) {
        switch (MM = +MM, rM = +rM, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(MM, rM) : this._context.moveTo(MM, rM);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, rM), this._context.lineTo(MM, rM);
            else {
              var iM = this._x * (1 - this._t) + MM * this._t;
              this._context.lineTo(iM, this._y), this._context.lineTo(iM, rM)
            }
        }
        this._x = MM, this._y = rM
      }
    };
    var eM = iM(6686),
      bM = iM(6563),
      wM = iM(6568);

    function tM(MM) {
      return MM[0]
    }

    function gM(MM) {
      return MM[1]
    }

    function uM(MM, rM) {
      var iM = (0, bM.c)(!0),
        OM = null,
        SM = mM,
        jM = null,
        aM = (0, wM.e)(PM);

      function PM(PM) {
        var nM, QM, zM, LM = (PM = (0, eM.e)(PM)).length,
          mM = !1;
        for (null == OM && (jM = SM(zM = aM())), nM = 0; nM <= LM; ++nM) !(nM < LM && iM(QM = PM[nM], nM, PM)) === mM && ((mM = !mM) ? jM.lineStart() : jM.lineEnd()), mM && jM.point(+MM(QM, nM, PM), +rM(QM, nM, PM));
        if (zM) return jM = null, zM + "" || null
      }
      return MM = "function" === typeof MM ? MM : void 0 === MM ? tM : (0, bM.c)(MM), rM = "function" === typeof rM ? rM : void 0 === rM ? gM : (0, bM.c)(rM), PM.x = function(rM) {
        return arguments.length ? (MM = "function" === typeof rM ? rM : (0, bM.c)(+rM), PM) : MM
      }, PM.y = function(MM) {
        return arguments.length ? (rM = "function" === typeof MM ? MM : (0, bM.c)(+MM), PM) : rM
      }, PM.defined = function(MM) {
        return arguments.length ? (iM = "function" === typeof MM ? MM : (0, bM.c)(!!MM), PM) : iM
      }, PM.curve = function(MM) {
        return arguments.length ? (SM = MM, null != OM && (jM = SM(OM)), PM) : SM
      }, PM.context = function(MM) {
        return arguments.length ? (null == MM ? OM = jM = null : jM = SM(OM = MM), PM) : OM
      }, PM
    }

    function RM(MM, rM, iM) {
      var OM = null,
        SM = (0, bM.c)(!0),
        jM = null,
        aM = mM,
        PM = null,
        nM = (0, wM.e)(QM);

      function QM(QM) {
        var zM, LM, mM, HM, hM, JM = (QM = (0, eM.e)(QM)).length,
          dM = !1,
          yM = new Array(JM),
          lM = new Array(JM);
        for (null == jM && (PM = aM(hM = nM())), zM = 0; zM <= JM; ++zM) {
          if (!(zM < JM && SM(HM = QM[zM], zM, QM)) === dM)
            if (dM = !dM) LM = zM, PM.areaStart(), PM.lineStart();
            else {
              for (PM.lineEnd(), PM.lineStart(), mM = zM - 1; mM >= LM; --mM) PM.point(yM[mM], lM[mM]);
              PM.lineEnd(), PM.areaEnd()
            } dM && (yM[zM] = +MM(HM, zM, QM), lM[zM] = +rM(HM, zM, QM), PM.point(OM ? +OM(HM, zM, QM) : yM[zM], iM ? +iM(HM, zM, QM) : lM[zM]))
        }
        if (hM) return PM = null, hM + "" || null
      }

      function zM() {
        return uM().defined(SM).curve(aM).context(jM)
      }
      return MM = "function" === typeof MM ? MM : void 0 === MM ? tM : (0, bM.c)(+MM), rM = "function" === typeof rM ? rM : void 0 === rM ? (0, bM.c)(0) : (0, bM.c)(+rM), iM = "function" === typeof iM ? iM : void 0 === iM ? gM : (0, bM.c)(+iM), QM.x = function(rM) {
        return arguments.length ? (MM = "function" === typeof rM ? rM : (0, bM.c)(+rM), OM = null, QM) : MM
      }, QM.x0 = function(rM) {
        return arguments.length ? (MM = "function" === typeof rM ? rM : (0, bM.c)(+rM), QM) : MM
      }, QM.x1 = function(MM) {
        return arguments.length ? (OM = null == MM ? null : "function" === typeof MM ? MM : (0, bM.c)(+MM), QM) : OM
      }, QM.y = function(MM) {
        return arguments.length ? (rM = "function" === typeof MM ? MM : (0, bM.c)(+MM), iM = null, QM) : rM
      }, QM.y0 = function(MM) {
        return arguments.length ? (rM = "function" === typeof MM ? MM : (0, bM.c)(+MM), QM) : rM
      }, QM.y1 = function(MM) {
        return arguments.length ? (iM = null == MM ? null : "function" === typeof MM ? MM : (0, bM.c)(+MM), QM) : iM
      }, QM.lineX0 = QM.lineY0 = function() {
        return zM().x(MM).y(rM)
      }, QM.lineY1 = function() {
        return zM().x(MM).y(iM)
      }, QM.lineX1 = function() {
        return zM().x(OM).y(rM)
      }, QM.defined = function(MM) {
        return arguments.length ? (SM = "function" === typeof MM ? MM : (0, bM.c)(!!MM), QM) : SM
      }, QM.curve = function(MM) {
        return arguments.length ? (aM = MM, null != jM && (PM = aM(jM)), QM) : aM
      }, QM.context = function(MM) {
        return arguments.length ? (null == MM ? jM = PM = null : PM = aM(jM = MM), QM) : jM
      }, QM
    }
    var pM = iM(6523),
      WM = iM.n(pM),
      sM = iM(5712),
      DM = iM.n(sM),
      kM = iM(5491),
      ZM = iM(5898),
      oM = iM(5876),
      fM = iM(5595);

    function YM(MM) {
      return YM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, YM(MM)
    }

    function NM() {
      return NM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, NM.apply(this, arguments)
    }

    function AM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function xM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? AM(Object(iM), !0).forEach((function(rM) {
          vM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : AM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function vM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != YM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != YM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == YM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var FM = {
        curveBasisClosed: function(MM) {
          return new PM(MM)
        },
        curveBasisOpen: function(MM) {
          return new nM(MM)
        },
        curveBasis: function(MM) {
          return new aM(MM)
        },
        curveBumpX: function(MM) {
          return new QM(MM, !0)
        },
        curveBumpY: function(MM) {
          return new QM(MM, !1)
        },
        curveLinearClosed: function(MM) {
          return new zM(MM)
        },
        curveLinear: mM,
        curveMonotoneX: function(MM) {
          return new yM(MM)
        },
        curveMonotoneY: function(MM) {
          return new lM(MM)
        },
        curveNatural: function(MM) {
          return new UM(MM)
        },
        curveStep: function(MM) {
          return new CM(MM, .5)
        },
        curveStepAfter: function(MM) {
          return new CM(MM, 1)
        },
        curveStepBefore: function(MM) {
          return new CM(MM, 0)
        }
      },
      BM = function(MM) {
        return MM.x === +MM.x && MM.y === +MM.y
      },
      XM = function(MM) {
        return MM.x
      },
      IM = function(MM) {
        return MM.y
      },
      KM = function(MM) {
        var rM, iM = MM.type,
          OM = void 0 === iM ? "linear" : iM,
          SM = MM.points,
          jM = void 0 === SM ? [] : SM,
          aM = MM.baseLine,
          PM = MM.layout,
          nM = MM.connectNulls,
          QM = void 0 !== nM && nM,
          zM = function(MM, rM) {
            if (DM()(MM)) return MM;
            var iM = "curve".concat(WM()(MM));
            return "curveMonotone" !== iM && "curveBump" !== iM || !rM ? FM[iM] || mM : FM["".concat(iM).concat("vertical" === rM ? "Y" : "X")]
          }(OM, PM),
          LM = QM ? jM.filter((function(MM) {
            return BM(MM)
          })) : jM;
        if (Array.isArray(aM)) {
          var HM = QM ? aM.filter((function(MM) {
              return BM(MM)
            })) : aM,
            hM = LM.map((function(MM, rM) {
              return xM(xM({}, MM), {}, {
                base: HM[rM]
              })
            }));
          return (rM = "vertical" === PM ? RM().y(IM).x1(XM).x0((function(MM) {
            return MM.base.x
          })) : RM().x(XM).y1(IM).y0((function(MM) {
            return MM.base.y
          }))).defined(BM).curve(zM), rM(hM)
        }
        return (rM = "vertical" === PM && (0, fM.y)(aM) ? RM().y(IM).x1(XM).x0(aM) : (0, fM.y)(aM) ? RM().x(XM).y1(IM).y0(aM) : uM().x(XM).y(IM)).defined(BM).curve(zM), rM(LM)
      },
      qM = function(MM) {
        var rM = MM.className,
          iM = MM.points,
          SM = MM.path,
          jM = MM.pathRef;
        if ((!iM || !iM.length) && !SM) return null;
        var aM = iM && iM.length ? KM(MM) : SM;
        return OM.createElement("path", NM({}, (0, oM.b)(MM, !1), (0, ZM.k)(MM), {
          className: (0, kM.b)("recharts-curve", rM),
          d: aM,
          ref: jM
        }))
      }
  },
  6574: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => nM
    });
    var OM = iM(44),
      SM = iM(5491),
      jM = iM(5898),
      aM = iM(5876);

    function PM() {
      return PM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, PM.apply(this, arguments)
    }
    var nM = function(MM) {
      var rM = MM.cx,
        iM = MM.cy,
        nM = MM.r,
        QM = MM.className,
        zM = (0, SM.b)("recharts-dot", QM);
      return rM === +rM && iM === +iM && nM === +nM ? OM.createElement("circle", PM({}, (0, aM.b)(MM, !1), (0, jM.k)(MM), {
        className: zM,
        cx: rM,
        cy: iM,
        r: nM
      })) : null
    }
  },
  6576: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => yM,
      e: () => JM
    });
    var OM = iM(44),
      SM = iM(5491),
      jM = iM(6582),
      aM = iM(5876);

    function PM(MM) {
      return PM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, PM(MM)
    }

    function nM() {
      return nM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, nM.apply(this, arguments)
    }

    function QM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return zM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return zM(MM, rM)
      }(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function LM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function mM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? LM(Object(iM), !0).forEach((function(rM) {
          HM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : LM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function HM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != PM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != PM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == PM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var hM = function(MM, rM, iM, OM, SM) {
        var jM, aM = Math.min(Math.abs(iM) / 2, Math.abs(OM) / 2),
          PM = OM >= 0 ? 1 : -1,
          nM = iM >= 0 ? 1 : -1,
          QM = OM >= 0 && iM >= 0 || OM < 0 && iM < 0 ? 1 : 0;
        if (aM > 0 && SM instanceof Array) {
          for (var zM = [0, 0, 0, 0], LM = 0; LM < 4; LM++) zM[LM] = SM[LM] > aM ? aM : SM[LM];
          jM = "M".concat(MM, ",").concat(rM + PM * zM[0]), zM[0] > 0 && (jM += "A ".concat(zM[0], ",").concat(zM[0], ",0,0,").concat(QM, ",").concat(MM + nM * zM[0], ",").concat(rM)), jM += "L ".concat(MM + iM - nM * zM[1], ",").concat(rM), zM[1] > 0 && (jM += "A ".concat(zM[1], ",").concat(zM[1], ",0,0,").concat(QM, ",\n        ").concat(MM + iM, ",").concat(rM + PM * zM[1])), jM += "L ".concat(MM + iM, ",").concat(rM + OM - PM * zM[2]), zM[2] > 0 && (jM += "A ".concat(zM[2], ",").concat(zM[2], ",0,0,").concat(QM, ",\n        ").concat(MM + iM - nM * zM[2], ",").concat(rM + OM)), jM += "L ".concat(MM + nM * zM[3], ",").concat(rM + OM), zM[3] > 0 && (jM += "A ".concat(zM[3], ",").concat(zM[3], ",0,0,").concat(QM, ",\n        ").concat(MM, ",").concat(rM + OM - PM * zM[3])), jM += "Z"
        } else if (aM > 0 && SM === +SM && SM > 0) {
          var mM = Math.min(aM, SM);
          jM = "M ".concat(MM, ",").concat(rM + PM * mM, "\n            A ").concat(mM, ",").concat(mM, ",0,0,").concat(QM, ",").concat(MM + nM * mM, ",").concat(rM, "\n            L ").concat(MM + iM - nM * mM, ",").concat(rM, "\n            A ").concat(mM, ",").concat(mM, ",0,0,").concat(QM, ",").concat(MM + iM, ",").concat(rM + PM * mM, "\n            L ").concat(MM + iM, ",").concat(rM + OM - PM * mM, "\n            A ").concat(mM, ",").concat(mM, ",0,0,").concat(QM, ",").concat(MM + iM - nM * mM, ",").concat(rM + OM, "\n            L ").concat(MM + nM * mM, ",").concat(rM + OM, "\n            A ").concat(mM, ",").concat(mM, ",0,0,").concat(QM, ",").concat(MM, ",").concat(rM + OM - PM * mM, " Z")
        } else jM = "M ".concat(MM, ",").concat(rM, " h ").concat(iM, " v ").concat(OM, " h ").concat(-iM, " Z");
        return jM
      },
      JM = function(MM, rM) {
        if (!MM || !rM) return !1;
        var iM = MM.x,
          OM = MM.y,
          SM = rM.x,
          jM = rM.y,
          aM = rM.width,
          PM = rM.height;
        if (Math.abs(aM) > 0 && Math.abs(PM) > 0) {
          var nM = Math.min(SM, SM + aM),
            QM = Math.max(SM, SM + aM),
            zM = Math.min(jM, jM + PM),
            LM = Math.max(jM, jM + PM);
          return iM >= nM && iM <= QM && OM >= zM && OM <= LM
        }
        return !1
      },
      dM = {
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
      yM = function(MM) {
        var rM = mM(mM({}, dM), MM),
          iM = (0, OM.useRef)(),
          PM = QM((0, OM.useState)(-1), 2),
          zM = PM[0],
          LM = PM[1];
        (0, OM.useEffect)((function() {
          if (iM.current && iM.current.getTotalLength) try {
            var MM = iM.current.getTotalLength();
            MM && LM(MM)
          } catch (rM) {}
        }), []);
        var HM = rM.x,
          JM = rM.y,
          yM = rM.width,
          lM = rM.height,
          EM = rM.radius,
          UM = rM.className,
          GM = rM.animationEasing,
          CM = rM.animationDuration,
          eM = rM.animationBegin,
          bM = rM.isAnimationActive,
          wM = rM.isUpdateAnimationActive;
        if (HM !== +HM || JM !== +JM || yM !== +yM || lM !== +lM || 0 === yM || 0 === lM) return null;
        var tM = (0, SM.b)("recharts-rectangle", UM);
        return wM ? OM.createElement(jM.d, {
          canBegin: zM > 0,
          from: {
            width: yM,
            height: lM,
            x: HM,
            y: JM
          },
          to: {
            width: yM,
            height: lM,
            x: HM,
            y: JM
          },
          duration: CM,
          animationEasing: GM,
          isActive: wM
        }, (function(MM) {
          var SM = MM.width,
            PM = MM.height,
            QM = MM.x,
            LM = MM.y;
          return OM.createElement(jM.d, {
            canBegin: zM > 0,
            from: "0px ".concat(-1 === zM ? 1 : zM, "px"),
            to: "".concat(zM, "px 0px"),
            attributeName: "strokeDasharray",
            JL: eM,
            duration: CM,
            isActive: bM,
            easing: GM
          }, OM.createElement("path", nM({}, (0, aM.b)(rM, !0), {
            className: tM,
            d: hM(QM, LM, SM, PM, EM),
            ref: iM
          })))
        })) : OM.createElement("path", nM({}, (0, aM.b)(rM, !0), {
          className: tM,
          d: hM(HM, JM, yM, lM, EM)
        }))
      }
  },
  6781: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => dM
    });
    var OM = iM(44),
      SM = iM(5491),
      jM = iM(5876),
      aM = iM(6695),
      PM = iM(5595);

    function nM(MM) {
      return nM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, nM(MM)
    }

    function QM() {
      return QM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, QM.apply(this, arguments)
    }

    function zM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function LM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? zM(Object(iM), !0).forEach((function(rM) {
          mM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : zM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function mM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != nM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != nM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == nM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var HM = function(MM) {
        var rM = MM.cx,
          iM = MM.cy,
          OM = MM.radius,
          SM = MM.angle,
          jM = MM.sign,
          PM = MM.isExternal,
          nM = MM.cornerRadius,
          QM = MM.cornerIsExternal,
          zM = nM * (PM ? 1 : -1) + OM,
          LM = Math.asin(nM / zM) / aM.d,
          mM = QM ? SM : SM + jM * LM,
          HM = QM ? SM - jM * LM : SM;
        return {
          center: (0, aM.i)(rM, iM, zM, mM),
          circleTangency: (0, aM.i)(rM, iM, OM, mM),
          lineTangency: (0, aM.i)(rM, iM, zM * Math.cos(LM * aM.d), HM),
          iL: LM
        }
      },
      hM = function(MM) {
        var rM = MM.cx,
          iM = MM.cy,
          OM = MM.innerRadius,
          SM = MM.outerRadius,
          jM = MM.startAngle,
          nM = function(MM, rM) {
            return (0, PM.D)(rM - MM) * Math.min(Math.abs(rM - MM), 359.999)
          }(jM, MM.endAngle),
          QM = jM + nM,
          zM = (0, aM.i)(rM, iM, SM, jM),
          LM = (0, aM.i)(rM, iM, SM, QM),
          mM = "M ".concat(zM.x, ",").concat(zM.y, "\n    A ").concat(SM, ",").concat(SM, ",0,\n    ").concat(+(Math.abs(nM) > 180), ",").concat(+(jM > QM), ",\n    ").concat(LM.x, ",").concat(LM.y, "\n  ");
        if (OM > 0) {
          var HM = (0, aM.i)(rM, iM, OM, jM),
            hM = (0, aM.i)(rM, iM, OM, QM);
          mM += "L ".concat(hM.x, ",").concat(hM.y, "\n            A ").concat(OM, ",").concat(OM, ",0,\n            ").concat(+(Math.abs(nM) > 180), ",").concat(+(jM <= QM), ",\n            ").concat(HM.x, ",").concat(HM.y, " Z")
        } else mM += "L ".concat(rM, ",").concat(iM, " Z");
        return mM
      },
      JM = {
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
      dM = function(MM) {
        var rM = LM(LM({}, JM), MM),
          iM = rM.cx,
          aM = rM.cy,
          nM = rM.innerRadius,
          zM = rM.outerRadius,
          mM = rM.cornerRadius,
          dM = rM.forceCornerRadius,
          yM = rM.cornerIsExternal,
          lM = rM.startAngle,
          EM = rM.endAngle,
          UM = rM.className;
        if (zM < nM || lM === EM) return null;
        var GM, CM = (0, SM.b)("recharts-sector", UM),
          eM = zM - nM,
          bM = (0, PM.l)(mM, eM, 0, !0);
        return GM = bM > 0 && Math.abs(lM - EM) < 360 ? function(MM) {
          var rM = MM.cx,
            iM = MM.cy,
            OM = MM.innerRadius,
            SM = MM.outerRadius,
            jM = MM.cornerRadius,
            aM = MM.forceCornerRadius,
            nM = MM.cornerIsExternal,
            QM = MM.startAngle,
            zM = MM.endAngle,
            LM = (0, PM.D)(zM - QM),
            mM = HM({
              cx: rM,
              cy: iM,
              radius: SM,
              angle: QM,
              sign: LM,
              cornerRadius: jM,
              cornerIsExternal: nM
            }),
            JM = mM.circleTangency,
            dM = mM.lineTangency,
            yM = mM.iL,
            lM = HM({
              cx: rM,
              cy: iM,
              radius: SM,
              angle: zM,
              sign: -LM,
              cornerRadius: jM,
              cornerIsExternal: nM
            }),
            EM = lM.circleTangency,
            UM = lM.lineTangency,
            GM = lM.iL,
            CM = nM ? Math.abs(QM - zM) : Math.abs(QM - zM) - yM - GM;
          if (CM < 0) return aM ? "M ".concat(dM.x, ",").concat(dM.y, "\n        a").concat(jM, ",").concat(jM, ",0,0,1,").concat(2 * jM, ",0\n        a").concat(jM, ",").concat(jM, ",0,0,1,").concat(2 * -jM, ",0\n      ") : hM({
            cx: rM,
            cy: iM,
            innerRadius: OM,
            outerRadius: SM,
            startAngle: QM,
            endAngle: zM
          });
          var eM = "M ".concat(dM.x, ",").concat(dM.y, "\n    A").concat(jM, ",").concat(jM, ",0,0,").concat(+(LM < 0), ",").concat(JM.x, ",").concat(JM.y, "\n    A").concat(SM, ",").concat(SM, ",0,").concat(+(CM > 180), ",").concat(+(LM < 0), ",").concat(EM.x, ",").concat(EM.y, "\n    A").concat(jM, ",").concat(jM, ",0,0,").concat(+(LM < 0), ",").concat(UM.x, ",").concat(UM.y, "\n  ");
          if (OM > 0) {
            var bM = HM({
                cx: rM,
                cy: iM,
                radius: OM,
                angle: QM,
                sign: LM,
                isExternal: !0,
                cornerRadius: jM,
                cornerIsExternal: nM
              }),
              wM = bM.circleTangency,
              tM = bM.lineTangency,
              gM = bM.iL,
              uM = HM({
                cx: rM,
                cy: iM,
                radius: OM,
                angle: zM,
                sign: -LM,
                isExternal: !0,
                cornerRadius: jM,
                cornerIsExternal: nM
              }),
              RM = uM.circleTangency,
              pM = uM.lineTangency,
              WM = uM.iL,
              sM = nM ? Math.abs(QM - zM) : Math.abs(QM - zM) - gM - WM;
            if (sM < 0 && 0 === jM) return "".concat(eM, "L").concat(rM, ",").concat(iM, "Z");
            eM += "L".concat(pM.x, ",").concat(pM.y, "\n      A").concat(jM, ",").concat(jM, ",0,0,").concat(+(LM < 0), ",").concat(RM.x, ",").concat(RM.y, "\n      A").concat(OM, ",").concat(OM, ",0,").concat(+(sM > 180), ",").concat(+(LM > 0), ",").concat(wM.x, ",").concat(wM.y, "\n      A").concat(jM, ",").concat(jM, ",0,0,").concat(+(LM < 0), ",").concat(tM.x, ",").concat(tM.y, "Z")
          } else eM += "L".concat(rM, ",").concat(iM, "Z");
          return eM
        }({
          cx: iM,
          cy: aM,
          innerRadius: nM,
          outerRadius: zM,
          cornerRadius: Math.min(bM, eM / 2),
          forceCornerRadius: dM,
          cornerIsExternal: yM,
          startAngle: lM,
          endAngle: EM
        }) : hM({
          cx: iM,
          cy: aM,
          innerRadius: nM,
          outerRadius: zM,
          startAngle: lM,
          endAngle: EM
        }), OM.createElement("path", QM({}, (0, jM.b)(rM, !0), {
          className: CM,
          d: GM,
          role: "img"
        }))
      }
  },
  6515: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => xM
    });
    var OM = iM(44),
      SM = iM(6523),
      jM = iM.n(SM);
    Math.abs, Math.atan2;
    const aM = Math.cos,
      PM = (Math.max, Math.min, Math.sin),
      nM = Math.sqrt,
      QM = Math.PI,
      zM = 2 * QM;
    const LM = {
        draw(MM, rM) {
          const iM = nM(rM / QM);
          MM.moveTo(iM, 0), MM.arc(0, 0, iM, 0, zM)
        }
      },
      mM = {
        draw(MM, rM) {
          const iM = nM(rM / 5) / 2;
          MM.moveTo(-3 * iM, -iM), MM.lineTo(-iM, -iM), MM.lineTo(-iM, -3 * iM), MM.lineTo(iM, -3 * iM), MM.lineTo(iM, -iM), MM.lineTo(3 * iM, -iM), MM.lineTo(3 * iM, iM), MM.lineTo(iM, iM), MM.lineTo(iM, 3 * iM), MM.lineTo(-iM, 3 * iM), MM.lineTo(-iM, iM), MM.lineTo(-3 * iM, iM), MM.closePath()
        }
      },
      HM = nM(1 / 3),
      hM = 2 * HM,
      JM = {
        draw(MM, rM) {
          const iM = nM(rM / hM),
            OM = iM * HM;
          MM.moveTo(0, -iM), MM.lineTo(OM, 0), MM.lineTo(0, iM), MM.lineTo(-OM, 0), MM.closePath()
        }
      },
      dM = {
        draw(MM, rM) {
          const iM = nM(rM),
            OM = -iM / 2;
          MM.rect(OM, OM, iM, iM)
        }
      },
      yM = PM(QM / 10) / PM(7 * QM / 10),
      lM = PM(zM / 10) * yM,
      EM = -aM(zM / 10) * yM,
      UM = {
        draw(MM, rM) {
          const iM = nM(.8908130915292852 * rM),
            OM = lM * iM,
            SM = EM * iM;
          MM.moveTo(0, -iM), MM.lineTo(OM, SM);
          for (let jM = 1; jM < 5; ++jM) {
            const rM = zM * jM / 5,
              nM = aM(rM),
              QM = PM(rM);
            MM.lineTo(QM * iM, -nM * iM), MM.lineTo(nM * OM - QM * SM, QM * OM + nM * SM)
          }
          MM.closePath()
        }
      },
      GM = nM(3),
      CM = {
        draw(MM, rM) {
          const iM = -nM(rM / (3 * GM));
          MM.moveTo(0, 2 * iM), MM.lineTo(-GM * iM, -iM), MM.lineTo(GM * iM, -iM), MM.closePath()
        }
      },
      eM = -.5,
      bM = nM(3) / 2,
      wM = 1 / nM(12),
      tM = 3 * (wM / 2 + 1),
      gM = {
        draw(MM, rM) {
          const iM = nM(rM / tM),
            OM = iM / 2,
            SM = iM * wM,
            jM = OM,
            aM = iM * wM + iM,
            PM = -jM,
            QM = aM;
          MM.moveTo(OM, SM), MM.lineTo(jM, aM), MM.lineTo(PM, QM), MM.lineTo(eM * OM - bM * SM, bM * OM + eM * SM), MM.lineTo(eM * jM - bM * aM, bM * jM + eM * aM), MM.lineTo(eM * PM - bM * QM, bM * PM + eM * QM), MM.lineTo(eM * OM + bM * SM, eM * SM - bM * OM), MM.lineTo(eM * jM + bM * aM, eM * aM - bM * jM), MM.lineTo(eM * PM + bM * QM, eM * QM - bM * PM), MM.closePath()
        }
      };
    var uM = iM(6563),
      RM = iM(6568);
    nM(3), nM(3);
    var pM = iM(5491),
      WM = iM(5876);

    function sM(MM) {
      return sM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, sM(MM)
    }
    var DM = ["type", "size", "sizeType"];

    function kM() {
      return kM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, kM.apply(this, arguments)
    }

    function ZM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function oM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? ZM(Object(iM), !0).forEach((function(rM) {
          fM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ZM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function fM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != sM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != sM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == sM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function YM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }
    var NM = {
        symbolCircle: LM,
        symbolCross: mM,
        symbolDiamond: JM,
        symbolSquare: dM,
        symbolStar: UM,
        symbolTriangle: CM,
        symbolWye: gM
      },
      AM = Math.PI / 180,
      xM = function(MM) {
        var rM = MM.type,
          iM = void 0 === rM ? "circle" : rM,
          SM = MM.size,
          aM = void 0 === SM ? 64 : SM,
          PM = MM.sizeType,
          nM = void 0 === PM ? "area" : PM,
          QM = oM(oM({}, YM(MM, DM)), {}, {
            type: iM,
            size: aM,
            sizeType: nM
          }),
          zM = QM.className,
          mM = QM.cx,
          HM = QM.cy,
          hM = (0, WM.b)(QM, !0);
        return mM === +mM && HM === +HM && aM === +aM ? OM.createElement("path", kM({}, hM, {
          className: (0, pM.b)("recharts-symbols", zM),
          transform: "translate(".concat(mM, ", ").concat(HM, ")"),
          d: function() {
            var MM = function(MM) {
                var rM = "symbol".concat(jM()(MM));
                return NM[rM] || LM
              }(iM),
              rM = function(MM, rM) {
                let iM = null,
                  OM = (0, RM.e)(SM);

                function SM() {
                  let SM;
                  if (iM || (iM = SM = OM()), MM.apply(this, arguments).draw(iM, +rM.apply(this, arguments)), SM) return iM = null, SM + "" || null
                }
                return MM = "function" === typeof MM ? MM : (0, uM.c)(MM || LM), rM = "function" === typeof rM ? rM : (0, uM.c)(void 0 === rM ? 64 : +rM), SM.type = function(rM) {
                  return arguments.length ? (MM = "function" === typeof rM ? rM : (0, uM.c)(rM), SM) : MM
                }, SM.size = function(MM) {
                  return arguments.length ? (rM = "function" === typeof MM ? MM : (0, uM.c)(+MM), SM) : rM
                }, SM.context = function(MM) {
                  return arguments.length ? (iM = null == MM ? null : MM, SM) : iM
                }, SM
              }().type(MM).size(function(MM, rM, iM) {
                if ("area" === rM) return MM;
                switch (iM) {
                  case "cross":
                    return 5 * MM * MM / 9;
                  case "diamond":
                    return .5 * MM * MM / Math.sqrt(3);
                  case "square":
                    return MM * MM;
                  case "star":
                    var OM = 18 * AM;
                    return 1.25 * MM * MM * (Math.tan(OM) - Math.tan(2 * OM) * Math.pow(Math.tan(OM), 2));
                  case "triangle":
                    return Math.sqrt(3) * MM * MM / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * MM * MM / 8;
                  default:
                    return Math.PI * MM * MM / 4
                }
              }(aM, nM, iM));
            return rM()
          }()
        })) : null
      };
    xM.registerSymbol = function(MM, rM) {
      NM["symbol".concat(jM()(MM))] = rM
    }
  },
  6756: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => fM,
      h: () => BM,
      i: () => YM,
      k: () => NM,
      n: () => AM
    });
    var OM = iM(44),
      SM = iM(5712),
      jM = iM.n(SM),
      aM = iM(6759),
      PM = iM.n(aM),
      nM = iM(6776),
      QM = iM.n(nM),
      zM = iM(6657),
      LM = iM.n(zM),
      mM = iM(6576),
      HM = iM(5491),
      hM = iM(6582),
      JM = iM(5876);

    function dM(MM) {
      return dM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, dM(MM)
    }

    function yM() {
      return yM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM) Object.prototype.hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, yM.apply(this, arguments)
    }

    function lM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return EM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return EM(MM, rM)
      }(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function UM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function GM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? UM(Object(iM), !0).forEach((function(rM) {
          CM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : UM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function CM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != dM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != dM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == dM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var eM = function(MM, rM, iM, OM, SM) {
        var jM, aM = iM - OM;
        return jM = "M ".concat(MM, ",").concat(rM), jM += "L ".concat(MM + iM, ",").concat(rM), jM += "L ".concat(MM + iM - aM / 2, ",").concat(rM + SM), jM += "L ".concat(MM + iM - aM / 2 - OM, ",").concat(rM + SM), jM += "L ".concat(MM, ",").concat(rM, " Z")
      },
      bM = {
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
      wM = function(MM) {
        var rM = GM(GM({}, bM), MM),
          iM = (0, OM.useRef)(),
          SM = lM((0, OM.useState)(-1), 2),
          jM = SM[0],
          aM = SM[1];
        (0, OM.useEffect)((function() {
          if (iM.current && iM.current.getTotalLength) try {
            var MM = iM.current.getTotalLength();
            MM && aM(MM)
          } catch (rM) {}
        }), []);
        var PM = rM.x,
          nM = rM.y,
          QM = rM.upperWidth,
          zM = rM.lowerWidth,
          LM = rM.height,
          mM = rM.className,
          dM = rM.animationEasing,
          EM = rM.animationDuration,
          UM = rM.animationBegin,
          CM = rM.isUpdateAnimationActive;
        if (PM !== +PM || nM !== +nM || QM !== +QM || zM !== +zM || LM !== +LM || 0 === QM && 0 === zM || 0 === LM) return null;
        var wM = (0, HM.b)("recharts-trapezoid", mM);
        return CM ? OM.createElement(hM.d, {
          canBegin: jM > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: LM,
            x: PM,
            y: nM
          },
          to: {
            upperWidth: QM,
            lowerWidth: zM,
            height: LM,
            x: PM,
            y: nM
          },
          duration: EM,
          animationEasing: dM,
          isActive: CM
        }, (function(MM) {
          var SM = MM.upperWidth,
            aM = MM.lowerWidth,
            PM = MM.height,
            nM = MM.x,
            QM = MM.y;
          return OM.createElement(hM.d, {
            canBegin: jM > 0,
            from: "0px ".concat(-1 === jM ? 1 : jM, "px"),
            to: "".concat(jM, "px 0px"),
            attributeName: "strokeDasharray",
            JL: UM,
            duration: EM,
            easing: dM
          }, OM.createElement("path", yM({}, (0, JM.b)(rM, !0), {
            className: wM,
            d: eM(nM, QM, SM, aM, PM),
            ref: iM
          })))
        })) : OM.createElement("g", null, OM.createElement("path", yM({}, (0, JM.b)(rM, !0), {
          className: wM,
          d: eM(PM, nM, QM, zM, LM)
        })))
      },
      tM = iM(6781),
      gM = iM(6429),
      uM = iM(6515),
      RM = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function pM(MM) {
      return pM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, pM(MM)
    }

    function WM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function sM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function DM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? sM(Object(iM), !0).forEach((function(rM) {
          kM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : sM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function kM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != pM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != pM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == pM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function ZM(MM, rM) {
      return DM(DM({}, rM), MM)
    }

    function oM(MM) {
      var rM = MM.shapeType,
        iM = MM.elementProps;
      switch (rM) {
        case "rectangle":
          return OM.createElement(mM.c, iM);
        case "trapezoid":
          return OM.createElement(wM, iM);
        case "sector":
          return OM.createElement(tM.e, iM);
        case "symbols":
          if (function(MM) {
              return "symbols" === MM
            }(rM)) return OM.createElement(uM.d, iM);
          break;
        default:
          return null
      }
    }

    function fM(MM) {
      var rM, iM = MM.option,
        SM = MM.shapeType,
        aM = MM.propTransformer,
        nM = void 0 === aM ? ZM : aM,
        zM = MM.activeClassName,
        LM = void 0 === zM ? "recharts-active-shape" : zM,
        mM = MM.isActive,
        HM = WM(MM, RM);
      if ((0, OM.isValidElement)(iM)) rM = (0, OM.cloneElement)(iM, DM(DM({}, HM), function(MM) {
        return (0, OM.isValidElement)(MM) ? MM.props : MM
      }(iM)));
      else if (jM()(iM)) rM = iM(HM);
      else if (PM()(iM) && !QM()(iM)) {
        var hM = nM(iM, HM);
        rM = OM.createElement(oM, {
          shapeType: SM,
          elementProps: hM
        })
      } else {
        var JM = HM;
        rM = OM.createElement(oM, {
          shapeType: SM,
          elementProps: JM
        })
      }
      return mM ? OM.createElement(gM.b, {
        className: LM
      }, rM) : rM
    }

    function YM(MM, rM) {
      return null != rM && "trapezoids" in MM.props
    }

    function NM(MM, rM) {
      return null != rM && "sectors" in MM.props
    }

    function AM(MM, rM) {
      return null != rM && "points" in MM.props
    }

    function xM(MM, rM) {
      var iM, OM, SM = MM.x === (null === rM || void 0 === rM || null === (iM = rM.labelViewBox) || void 0 === iM ? void 0 : iM.x) || MM.x === rM.x,
        jM = MM.y === (null === rM || void 0 === rM || null === (OM = rM.labelViewBox) || void 0 === OM ? void 0 : OM.y) || MM.y === rM.y;
      return SM && jM
    }

    function vM(MM, rM) {
      var iM = MM.endAngle === rM.endAngle,
        OM = MM.startAngle === rM.startAngle;
      return iM && OM
    }

    function FM(MM, rM) {
      var iM = MM.x === rM.x,
        OM = MM.y === rM.y,
        SM = MM.z === rM.z;
      return iM && OM && SM
    }

    function BM(MM) {
      var rM = MM.activeTooltipItem,
        iM = MM.graphicalItem,
        OM = MM.itemData,
        SM = function(MM, rM) {
          var iM;
          return YM(MM, rM) ? iM = "trapezoids" : NM(MM, rM) ? iM = "sectors" : AM(MM, rM) && (iM = "points"), iM
        }(iM, rM),
        jM = function(MM, rM) {
          var iM, OM;
          return YM(MM, rM) ? null === (iM = rM.tooltipPayload) || void 0 === iM || null === (iM = iM[0]) || void 0 === iM || null === (iM = iM.payload) || void 0 === iM ? void 0 : iM.payload : NM(MM, rM) ? null === (OM = rM.tooltipPayload) || void 0 === OM || null === (OM = OM[0]) || void 0 === OM || null === (OM = OM.payload) || void 0 === OM ? void 0 : OM.payload : AM(MM, rM) ? rM.payload : {}
        }(iM, rM),
        aM = OM.filter((function(MM, OM) {
          var aM = LM()(jM, MM),
            PM = iM.props[SM].filter((function(MM) {
              var OM = function(MM, rM) {
                var iM;
                return YM(MM, rM) ? iM = xM : NM(MM, rM) ? iM = vM : AM(MM, rM) && (iM = FM), iM
              }(iM, rM);
              return OM(MM, rM)
            })),
            nM = iM.props[SM].indexOf(PM[PM.length - 1]);
          return aM && OM === nM
        }));
      return OM.indexOf(aM[aM.length - 1])
    }
  },
  6707: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => GM,
      e: () => yM,
      h: () => CM,
      j: () => EM,
      k: () => lM
    });
    var OM = iM(6709),
      SM = iM.n(OM),
      jM = iM(6716),
      aM = iM.n(jM),
      PM = iM(6598),
      nM = iM(5876),
      QM = iM(5595),
      zM = iM(6733);

    function LM(MM) {
      return LM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, LM(MM)
    }

    function mM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, dM(OM.key), OM)
      }
    }

    function HM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function hM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? HM(Object(iM), !0).forEach((function(rM) {
          JM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : HM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function JM(MM, rM, iM) {
      return (rM = dM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function dM(MM) {
      var rM = function(MM, rM) {
        if ("object" != LM(MM) || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != LM(OM)) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == LM(rM) ? rM : rM + ""
    }
    var yM = function(MM, rM, iM, OM, SM) {
        var jM = MM.width,
          aM = MM.height,
          LM = MM.layout,
          mM = MM.children,
          HM = Object.keys(rM),
          dM = {
            left: iM.left,
            leftMirror: iM.left,
            right: jM - iM.right,
            rightMirror: jM - iM.right,
            top: iM.top,
            topMirror: iM.top,
            bottom: aM - iM.bottom,
            bottomMirror: aM - iM.bottom
          },
          yM = !!(0, nM.h)(mM, zM.d);
        return HM.reduce((function(jM, aM) {
          var nM, zM, mM, HM, lM, EM = rM[aM],
            UM = EM.orientation,
            GM = EM.domain,
            CM = EM.padding,
            eM = void 0 === CM ? {} : CM,
            bM = EM.mirror,
            wM = EM.reversed,
            tM = "".concat(UM).concat(bM ? "Mirror" : "");
          if ("number" === EM.type && ("gap" === EM.padding || "no-gap" === EM.padding)) {
            var gM = GM[1] - GM[0],
              uM = 1 / 0,
              RM = EM.categoricalDomain.sort(QM.c);
            if (RM.forEach((function(MM, rM) {
                rM > 0 && (uM = Math.min((MM || 0) - (RM[rM - 1] || 0), uM))
              })), Number.isFinite(uM)) {
              var pM = uM / gM,
                WM = "vertical" === EM.layout ? iM.height : iM.width;
              if ("gap" === EM.padding && (nM = pM * WM / 2), "no-gap" === EM.padding) {
                var sM = (0, QM.l)(MM.barCategoryGap, pM * WM),
                  DM = pM * WM / 2;
                nM = DM - sM - (DM - sM) / WM * sM
              }
            }
          }
          zM = "xAxis" === OM ? [iM.left + (eM.left || 0) + (nM || 0), iM.left + iM.width - (eM.right || 0) - (nM || 0)] : "yAxis" === OM ? "horizontal" === LM ? [iM.top + iM.height - (eM.bottom || 0), iM.top + (eM.top || 0)] : [iM.top + (eM.top || 0) + (nM || 0), iM.top + iM.height - (eM.bottom || 0) - (nM || 0)] : EM.range, wM && (zM = [zM[1], zM[0]]);
          var kM = (0, PM.tb)(EM, SM, yM),
            ZM = kM.scale,
            oM = kM.realScaleType;
          ZM.domain(GM).range(zM), (0, PM.j)(ZM);
          var fM = (0, PM.bb)(ZM, hM(hM({}, EM), {}, {
            realScaleType: oM
          }));
          "xAxis" === OM ? (lM = "top" === UM && !bM || "bottom" === UM && bM, mM = iM.left, HM = dM[tM] - lM * EM.height) : "yAxis" === OM && (lM = "left" === UM && !bM || "right" === UM && bM, mM = dM[tM] - lM * EM.width, HM = iM.top);
          var YM = hM(hM(hM({}, EM), fM), {}, {
            realScaleType: oM,
            x: mM,
            y: HM,
            scale: ZM,
            width: "xAxis" === OM ? iM.width : EM.width,
            height: "yAxis" === OM ? iM.height : EM.height
          });
          return YM.bandSize = (0, PM.v)(YM, fM), EM.hide || "xAxis" !== OM ? EM.hide || (dM[tM] += (lM ? -1 : 1) * YM.width) : dM[tM] += (lM ? -1 : 1) * YM.height, hM(hM({}, jM), {}, JM({}, aM, YM))
        }), {})
      },
      lM = function(MM, rM) {
        var iM = MM.x,
          OM = MM.y,
          SM = rM.x,
          jM = rM.y;
        return {
          x: Math.min(iM, SM),
          y: Math.min(OM, jM),
          width: Math.abs(SM - iM),
          height: Math.abs(jM - OM)
        }
      },
      EM = function(MM) {
        var rM = MM.x1,
          iM = MM.y1,
          OM = MM.x2,
          SM = MM.y2;
        return lM({
          x: rM,
          y: iM
        }, {
          x: OM,
          y: SM
        })
      },
      UM = function() {
        function MM(rM) {
          ! function(MM, rM) {
            if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
          }(this, MM), this.scale = rM
        }
        return rM = MM, iM = [{
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
          value: function(MM) {
            var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              iM = rM.bandAware,
              OM = rM.position;
            if (void 0 !== MM) {
              if (OM) switch (OM) {
                case "start":
                default:
                  return this.scale(MM);
                case "middle":
                  var SM = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(MM) + SM;
                case "end":
                  var jM = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(MM) + jM
              }
              if (iM) {
                var aM = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(MM) + aM
              }
              return this.scale(MM)
            }
          }
        }, {
          key: "isInRange",
          value: function(MM) {
            var rM = this.range(),
              iM = rM[0],
              OM = rM[rM.length - 1];
            return iM <= OM ? MM >= iM && MM <= OM : MM >= OM && MM <= iM
          }
        }], OM = [{
          key: "create",
          value: function(rM) {
            return new MM(rM)
          }
        }], iM && mM(rM.prototype, iM), OM && mM(rM, OM), Object.defineProperty(rM, "prototype", {
          writable: !1
        }), rM;
        var rM, iM, OM
      }();
    JM(UM, "EPS", 1e-4);
    var GM = function(MM) {
      var rM = Object.keys(MM).reduce((function(rM, iM) {
        return hM(hM({}, rM), {}, JM({}, iM, UM.create(MM[iM])))
      }), {});
      return hM(hM({}, rM), {}, {
        apply: function(MM) {
          var iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            OM = iM.bandAware,
            jM = iM.position;
          return SM()(MM, (function(MM, iM) {
            return rM[iM].apply(MM, {
              bandAware: OM,
              position: jM
            })
          }))
        },
        isInRange: function(MM) {
          return aM()(MM, (function(MM, iM) {
            return rM[iM].isInRange(MM)
          }))
        }
      })
    };
    var CM = function(MM) {
      var rM = MM.width,
        iM = MM.height,
        OM = function(MM) {
          return (MM % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        SM = OM * Math.PI / 180,
        jM = Math.atan(iM / rM),
        aM = SM > jM && SM < Math.PI - jM ? iM / Math.sin(SM) : rM / Math.cos(SM);
      return Math.abs(aM)
    }
  },
  6598: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => Da,
      h: () => Ra,
      j: () => Ba,
      n: () => xa,
      r: () => Xa,
      v: () => PP,
      z: () => sa,
      B: () => Wa,
      C: () => rP,
      F: () => MP,
      J: () => ca,
      K: () => Ya,
      L: () => ua,
      N: () => oa,
      O: () => OP,
      Q: () => pa,
      T: () => Ta,
      W: () => iP,
      Z: () => Na,
      bb: () => Va,
      db: () => QP,
      fb: () => ga,
      jb: () => fa,
      nb: () => nP,
      pb: () => Za,
      tb: () => va,
      wb: () => aP,
      Ab: () => Ia
    });
    var OM = {};
    iM.r(OM), iM.d(OM, {
      scaleBand: () => SM.b,
      scaleDiverging: () => zj,
      scaleDivergingLog: () => Lj,
      scaleDivergingPow: () => Hj,
      scaleDivergingSqrt: () => hj,
      scaleDivergingSymlog: () => mj,
      scaleIdentity: () => Kr,
      scaleImplicit: () => Qi.f,
      scaleLinear: () => Ir,
      scaleLog: () => Si,
      scaleOrdinal: () => Qi.c,
      scalePoint: () => SM.c,
      scalePow: () => Ji,
      scaleQuantile: () => gi,
      scaleQuantize: () => ui,
      scaleRadial: () => li,
      scaleSequential: () => Oj,
      scaleSequentialLog: () => Sj,
      scaleSequentialPow: () => aj,
      scaleSequentialQuantile: () => nj,
      scaleSequentialSqrt: () => Pj,
      scaleSequentialSymlog: () => jj,
      scaleSqrt: () => di,
      scaleSymlog: () => ni,
      scaleThreshold: () => Ri,
      scaleTime: () => cS,
      scaleUtc: () => Mj,
      tickFormat: () => Br
    });
    var SM = iM(6607);
    const jM = Math.sqrt(50),
      aM = Math.sqrt(10),
      PM = Math.sqrt(2);

    function nM(MM, rM, iM) {
      const OM = (rM - MM) / Math.max(0, iM),
        SM = Math.floor(Math.log10(OM)),
        QM = OM / Math.pow(10, SM),
        zM = QM >= jM ? 10 : QM >= aM ? 5 : QM >= PM ? 2 : 1;
      let LM, mM, HM;
      return SM < 0 ? (HM = Math.pow(10, -SM) / zM, LM = Math.round(MM * HM), mM = Math.round(rM * HM), LM / HM < MM && ++LM, mM / HM > rM && --mM, HM = -HM) : (HM = Math.pow(10, SM) * zM, LM = Math.round(MM / HM), mM = Math.round(rM / HM), LM * HM < MM && ++LM, mM * HM > rM && --mM), mM < LM && .5 <= iM && iM < 2 ? nM(MM, rM, 2 * iM) : [LM, mM, HM]
    }

    function QM(MM, rM, iM) {
      if (!((iM = +iM) > 0)) return [];
      if ((MM = +MM) === (rM = +rM)) return [MM];
      const OM = rM < MM,
        [SM, jM, aM] = OM ? nM(rM, MM, iM) : nM(MM, rM, iM);
      if (!(jM >= SM)) return [];
      const PM = jM - SM + 1,
        QM = new Array(PM);
      if (OM)
        if (aM < 0)
          for (let nM = 0; nM < PM; ++nM) QM[nM] = (jM - nM) / -aM;
        else
          for (let nM = 0; nM < PM; ++nM) QM[nM] = (jM - nM) * aM;
      else if (aM < 0)
        for (let nM = 0; nM < PM; ++nM) QM[nM] = (SM + nM) / -aM;
      else
        for (let nM = 0; nM < PM; ++nM) QM[nM] = (SM + nM) * aM;
      return QM
    }

    function zM(MM, rM, iM) {
      return nM(MM = +MM, rM = +rM, iM = +iM)[2]
    }

    function LM(MM, rM, iM) {
      iM = +iM;
      const OM = (rM = +rM) < (MM = +MM),
        SM = OM ? zM(rM, MM, iM) : zM(MM, rM, iM);
      return (OM ? -1 : 1) * (SM < 0 ? 1 / -SM : SM)
    }

    function mM(MM, rM) {
      return null == MM || null == rM ? NaN : MM < rM ? -1 : MM > rM ? 1 : MM >= rM ? 0 : NaN
    }

    function HM(MM, rM) {
      return null == MM || null == rM ? NaN : rM < MM ? -1 : rM > MM ? 1 : rM >= MM ? 0 : NaN
    }

    function hM(MM) {
      let rM, iM, OM;

      function SM(MM, OM) {
        let SM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          jM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.length;
        if (SM < jM) {
          if (0 !== rM(OM, OM)) return jM;
          do {
            const rM = SM + jM >>> 1;
            iM(MM[rM], OM) < 0 ? SM = rM + 1 : jM = rM
          } while (SM < jM)
        }
        return SM
      }
      return 2 !== MM.length ? (rM = mM, iM = (rM, iM) => mM(MM(rM), iM), OM = (rM, iM) => MM(rM) - iM) : (rM = MM === mM || MM === HM ? MM : JM, iM = MM, OM = MM), {
        left: SM,
        center: function(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const jM = SM(MM, rM, iM, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.length) - 1);
          return jM > iM && OM(MM[jM - 1], rM) > -OM(MM[jM], rM) ? jM - 1 : jM
        },
        right: function(MM, OM) {
          let SM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            jM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.length;
          if (SM < jM) {
            if (0 !== rM(OM, OM)) return jM;
            do {
              const rM = SM + jM >>> 1;
              iM(MM[rM], OM) <= 0 ? SM = rM + 1 : jM = rM
            } while (SM < jM)
          }
          return SM
        }
      }
    }

    function JM() {
      return 0
    }

    function dM(MM) {
      return null === MM ? NaN : +MM
    }
    const yM = hM(mM),
      lM = yM.right,
      EM = (yM.left, hM(dM).center, lM);

    function UM(MM, rM, iM) {
      MM.prototype = rM.prototype = iM, iM.constructor = MM
    }

    function GM(MM, rM) {
      var iM = Object.create(MM.prototype);
      for (var OM in rM) iM[OM] = rM[OM];
      return iM
    }

    function CM() {}
    var eM = .7,
      bM = 1 / eM,
      wM = "\\s*([+-]?\\d+)\\s*",
      tM = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      gM = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      uM = /^#([0-9a-f]{3,8})$/,
      RM = new RegExp(`^rgb\\(${wM},${wM},${wM}\\)$`),
      pM = new RegExp(`^rgb\\(${gM},${gM},${gM}\\)$`),
      WM = new RegExp(`^rgba\\(${wM},${wM},${wM},${tM}\\)$`),
      sM = new RegExp(`^rgba\\(${gM},${gM},${gM},${tM}\\)$`),
      DM = new RegExp(`^hsl\\(${tM},${gM},${gM}\\)$`),
      kM = new RegExp(`^hsla\\(${tM},${gM},${gM},${tM}\\)$`),
      ZM = {
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

    function oM() {
      return this.rgb().formatHex()
    }

    function fM() {
      return this.rgb().formatRgb()
    }

    function YM(MM) {
      var rM, iM;
      return MM = (MM + "").trim().toLowerCase(), (rM = uM.exec(MM)) ? (iM = rM[1].length, rM = parseInt(rM[1], 16), 6 === iM ? NM(rM) : 3 === iM ? new vM(rM >> 8 & 15 | rM >> 4 & 240, rM >> 4 & 15 | 240 & rM, (15 & rM) << 4 | 15 & rM, 1) : 8 === iM ? AM(rM >> 24 & 255, rM >> 16 & 255, rM >> 8 & 255, (255 & rM) / 255) : 4 === iM ? AM(rM >> 12 & 15 | rM >> 8 & 240, rM >> 8 & 15 | rM >> 4 & 240, rM >> 4 & 15 | 240 & rM, ((15 & rM) << 4 | 15 & rM) / 255) : null) : (rM = RM.exec(MM)) ? new vM(rM[1], rM[2], rM[3], 1) : (rM = pM.exec(MM)) ? new vM(255 * rM[1] / 100, 255 * rM[2] / 100, 255 * rM[3] / 100, 1) : (rM = WM.exec(MM)) ? AM(rM[1], rM[2], rM[3], rM[4]) : (rM = sM.exec(MM)) ? AM(255 * rM[1] / 100, 255 * rM[2] / 100, 255 * rM[3] / 100, rM[4]) : (rM = DM.exec(MM)) ? qM(rM[1], rM[2] / 100, rM[3] / 100, 1) : (rM = kM.exec(MM)) ? qM(rM[1], rM[2] / 100, rM[3] / 100, rM[4]) : ZM.hasOwnProperty(MM) ? NM(ZM[MM]) : "transparent" === MM ? new vM(NaN, NaN, NaN, 0) : null
    }

    function NM(MM) {
      return new vM(MM >> 16 & 255, MM >> 8 & 255, 255 & MM, 1)
    }

    function AM(MM, rM, iM, OM) {
      return OM <= 0 && (MM = rM = iM = NaN), new vM(MM, rM, iM, OM)
    }

    function xM(MM, rM, iM, OM) {
      return 1 === arguments.length ? ((SM = MM) instanceof CM || (SM = YM(SM)), SM ? new vM((SM = SM.rgb()).r, SM.g, SM.b, SM.opacity) : new vM) : new vM(MM, rM, iM, null == OM ? 1 : OM);
      var SM
    }

    function vM(MM, rM, iM, OM) {
      this.r = +MM, this.g = +rM, this.b = +iM, this.opacity = +OM
    }

    function FM() {
      return `#${KM(this.r)}${KM(this.g)}${KM(this.b)}`
    }

    function BM() {
      const MM = XM(this.opacity);
      return `${1===MM?"rgb(":"rgba("}${IM(this.r)}, ${IM(this.g)}, ${IM(this.b)}${1===MM?")":`, ${MM})`}`
    }

    function XM(MM) {
      return isNaN(MM) ? 1 : Math.max(0, Math.min(1, MM))
    }

    function IM(MM) {
      return Math.max(0, Math.min(255, Math.round(MM) || 0))
    }

    function KM(MM) {
      return ((MM = IM(MM)) < 16 ? "0" : "") + MM.toString(16)
    }

    function qM(MM, rM, iM, OM) {
      return OM <= 0 ? MM = rM = iM = NaN : iM <= 0 || iM >= 1 ? MM = rM = NaN : rM <= 0 && (MM = NaN), new VM(MM, rM, iM, OM)
    }

    function TM(MM) {
      if (MM instanceof VM) return new VM(MM.h, MM.s, MM.l, MM.opacity);
      if (MM instanceof CM || (MM = YM(MM)), !MM) return new VM;
      if (MM instanceof VM) return MM;
      var rM = (MM = MM.rgb()).r / 255,
        iM = MM.g / 255,
        OM = MM.b / 255,
        SM = Math.min(rM, iM, OM),
        jM = Math.max(rM, iM, OM),
        aM = NaN,
        PM = jM - SM,
        nM = (jM + SM) / 2;
      return PM ? (aM = rM === jM ? (iM - OM) / PM + 6 * (iM < OM) : iM === jM ? (OM - rM) / PM + 2 : (rM - iM) / PM + 4, PM /= nM < .5 ? jM + SM : 2 - jM - SM, aM *= 60) : PM = nM > 0 && nM < 1 ? 0 : aM, new VM(aM, PM, nM, MM.opacity)
    }

    function VM(MM, rM, iM, OM) {
      this.h = +MM, this.s = +rM, this.l = +iM, this.opacity = +OM
    }

    function cM(MM) {
      return (MM = (MM || 0) % 360) < 0 ? MM + 360 : MM
    }

    function Mr(MM) {
      return Math.max(0, Math.min(1, MM || 0))
    }

    function rr(MM, rM, iM) {
      return 255 * (MM < 60 ? rM + (iM - rM) * MM / 60 : MM < 180 ? iM : MM < 240 ? rM + (iM - rM) * (240 - MM) / 60 : rM)
    }

    function ir(MM, rM, iM, OM, SM) {
      var jM = MM * MM,
        aM = jM * MM;
      return ((1 - 3 * MM + 3 * jM - aM) * rM + (4 - 6 * jM + 3 * aM) * iM + (1 + 3 * MM + 3 * jM - 3 * aM) * OM + aM * SM) / 6
    }
    UM(CM, YM, {
      copy(MM) {
        return Object.assign(new this.constructor, this, MM)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: oM,
      formatHex: oM,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return TM(this).formatHsl()
      },
      formatRgb: fM,
      toString: fM
    }), UM(vM, xM, GM(CM, {
      brighter(MM) {
        return MM = null == MM ? bM : Math.pow(bM, MM), new vM(this.r * MM, this.g * MM, this.b * MM, this.opacity)
      },
      darker(MM) {
        return MM = null == MM ? eM : Math.pow(eM, MM), new vM(this.r * MM, this.g * MM, this.b * MM, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new vM(IM(this.r), IM(this.g), IM(this.b), XM(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: FM,
      formatHex: FM,
      formatHex8: function() {
        return `#${KM(this.r)}${KM(this.g)}${KM(this.b)}${KM(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: BM,
      toString: BM
    })), UM(VM, (function(MM, rM, iM, OM) {
      return 1 === arguments.length ? TM(MM) : new VM(MM, rM, iM, null == OM ? 1 : OM)
    }), GM(CM, {
      brighter(MM) {
        return MM = null == MM ? bM : Math.pow(bM, MM), new VM(this.h, this.s, this.l * MM, this.opacity)
      },
      darker(MM) {
        return MM = null == MM ? eM : Math.pow(eM, MM), new VM(this.h, this.s, this.l * MM, this.opacity)
      },
      rgb() {
        var MM = this.h % 360 + 360 * (this.h < 0),
          rM = isNaN(MM) || isNaN(this.s) ? 0 : this.s,
          iM = this.l,
          OM = iM + (iM < .5 ? iM : 1 - iM) * rM,
          SM = 2 * iM - OM;
        return new vM(rr(MM >= 240 ? MM - 240 : MM + 120, SM, OM), rr(MM, SM, OM), rr(MM < 120 ? MM + 240 : MM - 120, SM, OM), this.opacity)
      },
      clamp() {
        return new VM(cM(this.h), Mr(this.s), Mr(this.l), XM(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const MM = XM(this.opacity);
        return `${1===MM?"hsl(":"hsla("}${cM(this.h)}, ${100*Mr(this.s)}%, ${100*Mr(this.l)}%${1===MM?")":`, ${MM})`}`
      }
    }));
    const Or = MM => () => MM;

    function Sr(MM, rM) {
      return function(iM) {
        return MM + iM * rM
      }
    }

    function jr(MM) {
      return 1 === (MM = +MM) ? ar : function(rM, iM) {
        return iM - rM ? function(MM, rM, iM) {
          return MM = Math.pow(MM, iM), rM = Math.pow(rM, iM) - MM, iM = 1 / iM,
            function(OM) {
              return Math.pow(MM + OM * rM, iM)
            }
        }(rM, iM, MM) : Or(isNaN(rM) ? iM : rM)
      }
    }

    function ar(MM, rM) {
      var iM = rM - MM;
      return iM ? Sr(MM, iM) : Or(isNaN(MM) ? rM : MM)
    }
    const Pr = function MM(rM) {
      var iM = jr(rM);

      function OM(MM, rM) {
        var OM = iM((MM = xM(MM)).r, (rM = xM(rM)).r),
          SM = iM(MM.g, rM.g),
          jM = iM(MM.b, rM.b),
          aM = ar(MM.opacity, rM.opacity);
        return function(rM) {
          return MM.r = OM(rM), MM.g = SM(rM), MM.b = jM(rM), MM.opacity = aM(rM), MM + ""
        }
      }
      return OM.gamma = MM, OM
    }(1);

    function nr(MM) {
      return function(rM) {
        var iM, OM, SM = rM.length,
          jM = new Array(SM),
          aM = new Array(SM),
          PM = new Array(SM);
        for (iM = 0; iM < SM; ++iM) OM = xM(rM[iM]), jM[iM] = OM.r || 0, aM[iM] = OM.g || 0, PM[iM] = OM.b || 0;
        return jM = MM(jM), aM = MM(aM), PM = MM(PM), OM.opacity = 1,
          function(MM) {
            return OM.r = jM(MM), OM.g = aM(MM), OM.b = PM(MM), OM + ""
          }
      }
    }
    nr((function(MM) {
      var rM = MM.length - 1;
      return function(iM) {
        var OM = iM <= 0 ? iM = 0 : iM >= 1 ? (iM = 1, rM - 1) : Math.floor(iM * rM),
          SM = MM[OM],
          jM = MM[OM + 1],
          aM = OM > 0 ? MM[OM - 1] : 2 * SM - jM,
          PM = OM < rM - 1 ? MM[OM + 2] : 2 * jM - SM;
        return ir((iM - OM / rM) * rM, aM, SM, jM, PM)
      }
    })), nr((function(MM) {
      var rM = MM.length;
      return function(iM) {
        var OM = Math.floor(((iM %= 1) < 0 ? ++iM : iM) * rM),
          SM = MM[(OM + rM - 1) % rM],
          jM = MM[OM % rM],
          aM = MM[(OM + 1) % rM],
          PM = MM[(OM + 2) % rM];
        return ir((iM - OM / rM) * rM, SM, jM, aM, PM)
      }
    }));

    function Qr(MM, rM) {
      var iM, OM = rM ? rM.length : 0,
        SM = MM ? Math.min(OM, MM.length) : 0,
        jM = new Array(SM),
        aM = new Array(OM);
      for (iM = 0; iM < SM; ++iM) jM[iM] = yr(MM[iM], rM[iM]);
      for (; iM < OM; ++iM) aM[iM] = rM[iM];
      return function(MM) {
        for (iM = 0; iM < SM; ++iM) aM[iM] = jM[iM](MM);
        return aM
      }
    }

    function zr(MM, rM) {
      var iM = new Date;
      return MM = +MM, rM = +rM,
        function(OM) {
          return iM.setTime(MM * (1 - OM) + rM * OM), iM
        }
    }

    function Lr(MM, rM) {
      return MM = +MM, rM = +rM,
        function(iM) {
          return MM * (1 - iM) + rM * iM
        }
    }

    function mr(MM, rM) {
      var iM, OM = {},
        SM = {};
      for (iM in null !== MM && "object" === typeof MM || (MM = {}), null !== rM && "object" === typeof rM || (rM = {}), rM) iM in MM ? OM[iM] = yr(MM[iM], rM[iM]) : SM[iM] = rM[iM];
      return function(MM) {
        for (iM in OM) SM[iM] = OM[iM](MM);
        return SM
      }
    }
    var Hr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      hr = new RegExp(Hr.source, "g");

    function Jr(MM, rM) {
      var iM, OM, SM, jM = Hr.lastIndex = hr.lastIndex = 0,
        aM = -1,
        PM = [],
        nM = [];
      for (MM += "", rM += "";
        (iM = Hr.exec(MM)) && (OM = hr.exec(rM));)(SM = OM.index) > jM && (SM = rM.slice(jM, SM), PM[aM] ? PM[aM] += SM : PM[++aM] = SM), (iM = iM[0]) === (OM = OM[0]) ? PM[aM] ? PM[aM] += OM : PM[++aM] = OM : (PM[++aM] = null, nM.push({
        i: aM,
        x: Lr(iM, OM)
      })), jM = hr.lastIndex;
      return jM < rM.length && (SM = rM.slice(jM), PM[aM] ? PM[aM] += SM : PM[++aM] = SM), PM.length < 2 ? nM[0] ? function(MM) {
        return function(rM) {
          return MM(rM) + ""
        }
      }(nM[0].x) : function(MM) {
        return function() {
          return MM
        }
      }(rM) : (rM = nM.length, function(MM) {
        for (var iM, OM = 0; OM < rM; ++OM) PM[(iM = nM[OM]).i] = iM.x(MM);
        return PM.join("")
      })
    }

    function dr(MM, rM) {
      rM || (rM = []);
      var iM, OM = MM ? Math.min(rM.length, MM.length) : 0,
        SM = rM.slice();
      return function(jM) {
        for (iM = 0; iM < OM; ++iM) SM[iM] = MM[iM] * (1 - jM) + rM[iM] * jM;
        return SM
      }
    }

    function yr(MM, rM) {
      var iM, OM, SM = typeof rM;
      return null == rM || "boolean" === SM ? Or(rM) : ("number" === SM ? Lr : "string" === SM ? (iM = YM(rM)) ? (rM = iM, Pr) : Jr : rM instanceof YM ? Pr : rM instanceof Date ? zr : (OM = rM, !ArrayBuffer.isView(OM) || OM instanceof DataView ? Array.isArray(rM) ? Qr : "function" !== typeof rM.valueOf && "function" !== typeof rM.toString || isNaN(rM) ? mr : Lr : dr))(MM, rM)
    }

    function lr(MM, rM) {
      return MM = +MM, rM = +rM,
        function(iM) {
          return Math.round(MM * (1 - iM) + rM * iM)
        }
    }

    function Er(MM) {
      return +MM
    }
    var Ur = [0, 1];

    function Gr(MM) {
      return MM
    }

    function Cr(MM, rM) {
      return (rM -= MM = +MM) ? function(iM) {
        return (iM - MM) / rM
      } : (iM = isNaN(rM) ? NaN : .5, function() {
        return iM
      });
      var iM
    }

    function er(MM, rM, iM) {
      var OM = MM[0],
        SM = MM[1],
        jM = rM[0],
        aM = rM[1];
      return SM < OM ? (OM = Cr(SM, OM), jM = iM(aM, jM)) : (OM = Cr(OM, SM), jM = iM(jM, aM)),
        function(MM) {
          return jM(OM(MM))
        }
    }

    function br(MM, rM, iM) {
      var OM = Math.min(MM.length, rM.length) - 1,
        SM = new Array(OM),
        jM = new Array(OM),
        aM = -1;
      for (MM[OM] < MM[0] && (MM = MM.slice().reverse(), rM = rM.slice().reverse()); ++aM < OM;) SM[aM] = Cr(MM[aM], MM[aM + 1]), jM[aM] = iM(rM[aM], rM[aM + 1]);
      return function(rM) {
        var iM = EM(MM, rM, 1, OM) - 1;
        return jM[iM](SM[iM](rM))
      }
    }

    function wr(MM, rM) {
      return rM.domain(MM.domain()).range(MM.range()).interpolate(MM.interpolate()).clamp(MM.clamp()).unknown(MM.unknown())
    }

    function tr() {
      var MM, rM, iM, OM, SM, jM, aM = Ur,
        PM = Ur,
        nM = yr,
        QM = Gr;

      function zM() {
        var MM = Math.min(aM.length, PM.length);
        return QM !== Gr && (QM = function(MM, rM) {
          var iM;
          return MM > rM && (iM = MM, MM = rM, rM = iM),
            function(iM) {
              return Math.max(MM, Math.min(rM, iM))
            }
        }(aM[0], aM[MM - 1])), OM = MM > 2 ? br : er, SM = jM = null, LM
      }

      function LM(rM) {
        return null == rM || isNaN(rM = +rM) ? iM : (SM || (SM = OM(aM.map(MM), PM, nM)))(MM(QM(rM)))
      }
      return LM.invert = function(iM) {
          return QM(rM((jM || (jM = OM(PM, aM.map(MM), Lr)))(iM)))
        }, LM.domain = function(MM) {
          return arguments.length ? (aM = Array.from(MM, Er), zM()) : aM.slice()
        }, LM.range = function(MM) {
          return arguments.length ? (PM = Array.from(MM), zM()) : PM.slice()
        }, LM.rangeRound = function(MM) {
          return PM = Array.from(MM), nM = lr, zM()
        }, LM.clamp = function(MM) {
          return arguments.length ? (QM = !!MM || Gr, zM()) : QM !== Gr
        }, LM.interpolate = function(MM) {
          return arguments.length ? (nM = MM, zM()) : nM
        }, LM.unknown = function(MM) {
          return arguments.length ? (iM = MM, LM) : iM
        },
        function(iM, OM) {
          return MM = iM, rM = OM, zM()
        }
    }

    function gr() {
      return tr()(Gr, Gr)
    }
    var ur, Rr = iM(6615),
      pr = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Wr(MM) {
      if (!(rM = pr.exec(MM))) throw new Error("invalid format: " + MM);
      var rM;
      return new sr({
        fill: rM[1],
        align: rM[2],
        sign: rM[3],
        symbol: rM[4],
        zero: rM[5],
        width: rM[6],
        comma: rM[7],
        precision: rM[8] && rM[8].slice(1),
        trim: rM[9],
        type: rM[10]
      })
    }

    function sr(MM) {
      this.fill = void 0 === MM.fill ? " " : MM.fill + "", this.align = void 0 === MM.align ? ">" : MM.align + "", this.sign = void 0 === MM.sign ? "-" : MM.sign + "", this.symbol = void 0 === MM.symbol ? "" : MM.symbol + "", this.zero = !!MM.zero, this.width = void 0 === MM.width ? void 0 : +MM.width, this.comma = !!MM.comma, this.precision = void 0 === MM.precision ? void 0 : +MM.precision, this.trim = !!MM.trim, this.type = void 0 === MM.type ? "" : MM.type + ""
    }

    function Dr(MM, rM) {
      if (!isFinite(MM) || 0 === MM) return null;
      var iM = (MM = rM ? MM.toExponential(rM - 1) : MM.toExponential()).indexOf("e"),
        OM = MM.slice(0, iM);
      return [OM.length > 1 ? OM[0] + OM.slice(2) : OM, +MM.slice(iM + 1)]
    }

    function kr(MM) {
      return (MM = Dr(Math.abs(MM))) ? MM[1] : NaN
    }

    function Zr(MM, rM) {
      var iM = Dr(MM, rM);
      if (!iM) return MM + "";
      var OM = iM[0],
        SM = iM[1];
      return SM < 0 ? "0." + new Array(-SM).join("0") + OM : OM.length > SM + 1 ? OM.slice(0, SM + 1) + "." + OM.slice(SM + 1) : OM + new Array(SM - OM.length + 2).join("0")
    }
    Wr.prototype = sr.prototype, sr.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const or = {
      "%": (MM, rM) => (100 * MM).toFixed(rM),
      b: MM => Math.round(MM).toString(2),
      c: MM => MM + "",
      d: function(MM) {
        return Math.abs(MM = Math.round(MM)) >= 1e21 ? MM.toLocaleString("en").replace(/,/g, "") : MM.toString(10)
      },
      e: (MM, rM) => MM.toExponential(rM),
      f: (MM, rM) => MM.toFixed(rM),
      g: (MM, rM) => MM.toPrecision(rM),
      o: MM => Math.round(MM).toString(8),
      p: (MM, rM) => Zr(100 * MM, rM),
      r: Zr,
      s: function(MM, rM) {
        var iM = Dr(MM, rM);
        if (!iM) return ur = void 0, MM.toPrecision(rM);
        var OM = iM[0],
          SM = iM[1],
          jM = SM - (ur = 3 * Math.max(-8, Math.min(8, Math.floor(SM / 3)))) + 1,
          aM = OM.length;
        return jM === aM ? OM : jM > aM ? OM + new Array(jM - aM + 1).join("0") : jM > 0 ? OM.slice(0, jM) + "." + OM.slice(jM) : "0." + new Array(1 - jM).join("0") + Dr(MM, Math.max(0, rM + jM - 1))[0]
      },
      X: MM => Math.round(MM).toString(16).toUpperCase(),
      x: MM => Math.round(MM).toString(16)
    };

    function fr(MM) {
      return MM
    }
    var Yr, Nr, Ar, xr = Array.prototype.map,
      vr = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Fr(MM) {
      var rM, iM, OM = void 0 === MM.grouping || void 0 === MM.thousands ? fr : (rM = xr.call(MM.grouping, Number), iM = MM.thousands + "", function(MM, OM) {
          for (var SM = MM.length, jM = [], aM = 0, PM = rM[0], nM = 0; SM > 0 && PM > 0 && (nM + PM + 1 > OM && (PM = Math.max(1, OM - nM)), jM.push(MM.substring(SM -= PM, SM + PM)), !((nM += PM + 1) > OM));) PM = rM[aM = (aM + 1) % rM.length];
          return jM.reverse().join(iM)
        }),
        SM = void 0 === MM.currency ? "" : MM.currency[0] + "",
        jM = void 0 === MM.currency ? "" : MM.currency[1] + "",
        aM = void 0 === MM.decimal ? "." : MM.decimal + "",
        PM = void 0 === MM.numerals ? fr : function(MM) {
          return function(rM) {
            return rM.replace(/[0-9]/g, (function(rM) {
              return MM[+rM]
            }))
          }
        }(xr.call(MM.numerals, String)),
        nM = void 0 === MM.percent ? "%" : MM.percent + "",
        QM = void 0 === MM.minus ? "\u2212" : MM.minus + "",
        zM = void 0 === MM.nan ? "NaN" : MM.nan + "";

      function LM(MM, rM) {
        var iM = (MM = Wr(MM)).fill,
          LM = MM.align,
          mM = MM.sign,
          HM = MM.symbol,
          hM = MM.zero,
          JM = MM.width,
          dM = MM.comma,
          yM = MM.precision,
          lM = MM.trim,
          EM = MM.type;
        "n" === EM ? (dM = !0, EM = "g") : or[EM] || (void 0 === yM && (yM = 12), lM = !0, EM = "g"), (hM || "0" === iM && "=" === LM) && (hM = !0, iM = "0", LM = "=");
        var UM = (rM && void 0 !== rM.prefix ? rM.prefix : "") + ("$" === HM ? SM : "#" === HM && /[boxX]/.test(EM) ? "0" + EM.toLowerCase() : ""),
          GM = ("$" === HM ? jM : /[%p]/.test(EM) ? nM : "") + (rM && void 0 !== rM.suffix ? rM.suffix : ""),
          CM = or[EM],
          eM = /[defgprs%]/.test(EM);

        function bM(MM) {
          var rM, SM, jM, nM = UM,
            HM = GM;
          if ("c" === EM) HM = CM(MM) + HM, MM = "";
          else {
            var bM = (MM = +MM) < 0 || 1 / MM < 0;
            if (MM = isNaN(MM) ? zM : CM(Math.abs(MM), yM), lM && (MM = function(MM) {
                MM: for (var rM, iM = MM.length, OM = 1, SM = -1; OM < iM; ++OM) switch (MM[OM]) {
                  case ".":
                    SM = rM = OM;
                    break;
                  case "0":
                    0 === SM && (SM = OM), rM = OM;
                    break;
                  default:
                    if (!+MM[OM]) break MM;
                    SM > 0 && (SM = 0)
                }
                return SM > 0 ? MM.slice(0, SM) + MM.slice(rM + 1) : MM
              }(MM)), bM && 0 === +MM && "+" !== mM && (bM = !1), nM = (bM ? "(" === mM ? mM : QM : "-" === mM || "(" === mM ? "" : mM) + nM, HM = ("s" !== EM || isNaN(MM) || void 0 === ur ? "" : vr[8 + ur / 3]) + HM + (bM && "(" === mM ? ")" : ""), eM)
              for (rM = -1, SM = MM.length; ++rM < SM;)
                if (48 > (jM = MM.charCodeAt(rM)) || jM > 57) {
                  HM = (46 === jM ? aM + MM.slice(rM + 1) : MM.slice(rM)) + HM, MM = MM.slice(0, rM);
                  break
                }
          }
          dM && !hM && (MM = OM(MM, 1 / 0));
          var wM = nM.length + MM.length + HM.length,
            tM = wM < JM ? new Array(JM - wM + 1).join(iM) : "";
          switch (dM && hM && (MM = OM(tM + MM, tM.length ? JM - HM.length : 1 / 0), tM = ""), LM) {
            case "<":
              MM = nM + MM + HM + tM;
              break;
            case "=":
              MM = nM + tM + MM + HM;
              break;
            case "^":
              MM = tM.slice(0, wM = tM.length >> 1) + nM + MM + HM + tM.slice(wM);
              break;
            default:
              MM = tM + nM + MM + HM
          }
          return PM(MM)
        }
        return yM = void 0 === yM ? 6 : /[gprs]/.test(EM) ? Math.max(1, Math.min(21, yM)) : Math.max(0, Math.min(20, yM)), bM.toString = function() {
          return MM + ""
        }, bM
      }
      return {
        format: LM,
        formatPrefix: function(MM, rM) {
          var iM = 3 * Math.max(-8, Math.min(8, Math.floor(kr(rM) / 3))),
            OM = Math.pow(10, -iM),
            SM = LM(((MM = Wr(MM)).type = "f", MM), {
              suffix: vr[8 + iM / 3]
            });
          return function(MM) {
            return SM(OM * MM)
          }
        }
      }
    }

    function Br(MM, rM, iM, OM) {
      var SM, jM = LM(MM, rM, iM);
      switch ((OM = Wr(null == OM ? ",f" : OM)).type) {
        case "s":
          var aM = Math.max(Math.abs(MM), Math.abs(rM));
          return null != OM.precision || isNaN(SM = function(MM, rM) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(kr(rM) / 3))) - kr(Math.abs(MM)))
          }(jM, aM)) || (OM.precision = SM), Ar(OM, aM);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != OM.precision || isNaN(SM = function(MM, rM) {
            return MM = Math.abs(MM), rM = Math.abs(rM) - MM, Math.max(0, kr(rM) - kr(MM)) + 1
          }(jM, Math.max(Math.abs(MM), Math.abs(rM)))) || (OM.precision = SM - ("e" === OM.type));
          break;
        case "f":
        case "%":
          null != OM.precision || isNaN(SM = function(MM) {
            return Math.max(0, -kr(Math.abs(MM)))
          }(jM)) || (OM.precision = SM - 2 * ("%" === OM.type))
      }
      return Nr(OM)
    }

    function Xr(MM) {
      var rM = MM.domain;
      return MM.ticks = function(MM) {
        var iM = rM();
        return QM(iM[0], iM[iM.length - 1], null == MM ? 10 : MM)
      }, MM.tickFormat = function(MM, iM) {
        var OM = rM();
        return Br(OM[0], OM[OM.length - 1], null == MM ? 10 : MM, iM)
      }, MM.nice = function(iM) {
        null == iM && (iM = 10);
        var OM, SM, jM = rM(),
          aM = 0,
          PM = jM.length - 1,
          nM = jM[aM],
          QM = jM[PM],
          LM = 10;
        for (QM < nM && (SM = nM, nM = QM, QM = SM, SM = aM, aM = PM, PM = SM); LM-- > 0;) {
          if ((SM = zM(nM, QM, iM)) === OM) return jM[aM] = nM, jM[PM] = QM, rM(jM);
          if (SM > 0) nM = Math.floor(nM / SM) * SM, QM = Math.ceil(QM / SM) * SM;
          else {
            if (!(SM < 0)) break;
            nM = Math.ceil(nM * SM) / SM, QM = Math.floor(QM * SM) / SM
          }
          OM = SM
        }
        return MM
      }, MM
    }

    function Ir() {
      var MM = gr();
      return MM.copy = function() {
        return wr(MM, Ir())
      }, Rr.f.apply(MM, arguments), Xr(MM)
    }

    function Kr(MM) {
      var rM;

      function iM(MM) {
        return null == MM || isNaN(MM = +MM) ? rM : MM
      }
      return iM.invert = iM, iM.domain = iM.range = function(rM) {
        return arguments.length ? (MM = Array.from(rM, Er), iM) : MM.slice()
      }, iM.unknown = function(MM) {
        return arguments.length ? (rM = MM, iM) : rM
      }, iM.copy = function() {
        return Kr(MM).unknown(rM)
      }, MM = arguments.length ? Array.from(MM, Er) : [0, 1], Xr(iM)
    }

    function qr(MM, rM) {
      var iM, OM = 0,
        SM = (MM = MM.slice()).length - 1,
        jM = MM[OM],
        aM = MM[SM];
      return aM < jM && (iM = OM, OM = SM, SM = iM, iM = jM, jM = aM, aM = iM), MM[OM] = rM.floor(jM), MM[SM] = rM.ceil(aM), MM
    }

    function Tr(MM) {
      return Math.log(MM)
    }

    function Vr(MM) {
      return Math.exp(MM)
    }

    function cr(MM) {
      return -Math.log(-MM)
    }

    function Mi(MM) {
      return -Math.exp(-MM)
    }

    function ri(MM) {
      return isFinite(MM) ? +("1e" + MM) : MM < 0 ? 0 : MM
    }

    function ii(MM) {
      return (rM, iM) => -MM(-rM, iM)
    }

    function Oi(MM) {
      const rM = MM(Tr, Vr),
        iM = rM.domain;
      let OM, SM, jM = 10;

      function aM() {
        return OM = function(MM) {
          return MM === Math.E ? Math.log : 10 === MM && Math.log10 || 2 === MM && Math.log2 || (MM = Math.log(MM), rM => Math.log(rM) / MM)
        }(jM), SM = function(MM) {
          return 10 === MM ? ri : MM === Math.E ? Math.exp : rM => Math.pow(MM, rM)
        }(jM), iM()[0] < 0 ? (OM = ii(OM), SM = ii(SM), MM(cr, Mi)) : MM(Tr, Vr), rM
      }
      return rM.base = function(MM) {
        return arguments.length ? (jM = +MM, aM()) : jM
      }, rM.domain = function(MM) {
        return arguments.length ? (iM(MM), aM()) : iM()
      }, rM.ticks = MM => {
        const rM = iM();
        let aM = rM[0],
          PM = rM[rM.length - 1];
        const nM = PM < aM;
        nM && ([aM, PM] = [PM, aM]);
        let zM, LM, mM = OM(aM),
          HM = OM(PM);
        const hM = null == MM ? 10 : +MM;
        let JM = [];
        if (!(jM % 1) && HM - mM < hM) {
          if (mM = Math.floor(mM), HM = Math.ceil(HM), aM > 0) {
            for (; mM <= HM; ++mM)
              for (zM = 1; zM < jM; ++zM)
                if (LM = mM < 0 ? zM / SM(-mM) : zM * SM(mM), !(LM < aM)) {
                  if (LM > PM) break;
                  JM.push(LM)
                }
          } else
            for (; mM <= HM; ++mM)
              for (zM = jM - 1; zM >= 1; --zM)
                if (LM = mM > 0 ? zM / SM(-mM) : zM * SM(mM), !(LM < aM)) {
                  if (LM > PM) break;
                  JM.push(LM)
                } 2 * JM.length < hM && (JM = QM(aM, PM, hM))
        } else JM = QM(mM, HM, Math.min(HM - mM, hM)).map(SM);
        return nM ? JM.reverse() : JM
      }, rM.tickFormat = (MM, iM) => {
        if (null == MM && (MM = 10), null == iM && (iM = 10 === jM ? "s" : ","), "function" !== typeof iM && (jM % 1 || null != (iM = Wr(iM)).precision || (iM.trim = !0), iM = Nr(iM)), MM === 1 / 0) return iM;
        const aM = Math.max(1, jM * MM / rM.ticks().length);
        return MM => {
          let rM = MM / SM(Math.round(OM(MM)));
          return rM * jM < jM - .5 && (rM *= jM), rM <= aM ? iM(MM) : ""
        }
      }, rM.nice = () => iM(qr(iM(), {
        floor: MM => SM(Math.floor(OM(MM))),
        ceil: MM => SM(Math.ceil(OM(MM)))
      })), rM
    }

    function Si() {
      const MM = Oi(tr()).domain([1, 10]);
      return MM.copy = () => wr(MM, Si()).base(MM.base()), Rr.f.apply(MM, arguments), MM
    }

    function ji(MM) {
      return function(rM) {
        return Math.sign(rM) * Math.log1p(Math.abs(rM / MM))
      }
    }

    function ai(MM) {
      return function(rM) {
        return Math.sign(rM) * Math.expm1(Math.abs(rM)) * MM
      }
    }

    function Pi(MM) {
      var rM = 1,
        iM = MM(ji(rM), ai(rM));
      return iM.constant = function(iM) {
        return arguments.length ? MM(ji(rM = +iM), ai(rM)) : rM
      }, Xr(iM)
    }

    function ni() {
      var MM = Pi(tr());
      return MM.copy = function() {
        return wr(MM, ni()).constant(MM.constant())
      }, Rr.f.apply(MM, arguments)
    }
    Yr = Fr({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), Nr = Yr.format, Ar = Yr.formatPrefix;
    var Qi = iM(6620);

    function zi(MM) {
      return function(rM) {
        return rM < 0 ? -Math.pow(-rM, MM) : Math.pow(rM, MM)
      }
    }

    function Li(MM) {
      return MM < 0 ? -Math.sqrt(-MM) : Math.sqrt(MM)
    }

    function mi(MM) {
      return MM < 0 ? -MM * MM : MM * MM
    }

    function Hi(MM) {
      var rM = MM(Gr, Gr),
        iM = 1;
      return rM.exponent = function(rM) {
        return arguments.length ? 1 === (iM = +rM) ? MM(Gr, Gr) : .5 === iM ? MM(Li, mi) : MM(zi(iM), zi(1 / iM)) : iM
      }, Xr(rM)
    }

    function Ji() {
      var MM = Hi(tr());
      return MM.copy = function() {
        return wr(MM, Ji()).exponent(MM.exponent())
      }, Rr.f.apply(MM, arguments), MM
    }

    function di() {
      return Ji.apply(null, arguments).exponent(.5)
    }

    function yi(MM) {
      return Math.sign(MM) * MM * MM
    }

    function li() {
      var MM, rM = gr(),
        iM = [0, 1],
        OM = !1;

      function SM(iM) {
        var SM = function(MM) {
          return Math.sign(MM) * Math.sqrt(Math.abs(MM))
        }(rM(iM));
        return isNaN(SM) ? MM : OM ? Math.round(SM) : SM
      }
      return SM.invert = function(MM) {
        return rM.invert(yi(MM))
      }, SM.domain = function(MM) {
        return arguments.length ? (rM.domain(MM), SM) : rM.domain()
      }, SM.range = function(MM) {
        return arguments.length ? (rM.range((iM = Array.from(MM, Er)).map(yi)), SM) : iM.slice()
      }, SM.rangeRound = function(MM) {
        return SM.range(MM).round(!0)
      }, SM.round = function(MM) {
        return arguments.length ? (OM = !!MM, SM) : OM
      }, SM.clamp = function(MM) {
        return arguments.length ? (rM.clamp(MM), SM) : rM.clamp()
      }, SM.unknown = function(rM) {
        return arguments.length ? (MM = rM, SM) : MM
      }, SM.copy = function() {
        return li(rM.domain(), iM).round(OM).clamp(rM.clamp()).unknown(MM)
      }, Rr.f.apply(SM, arguments), Xr(SM)
    }

    function Ei(MM, rM) {
      let iM;
      if (void 0 === rM)
        for (const OM of MM) null != OM && (iM < OM || void 0 === iM && OM >= OM) && (iM = OM);
      else {
        let OM = -1;
        for (let SM of MM) null != (SM = rM(SM, ++OM, MM)) && (iM < SM || void 0 === iM && SM >= SM) && (iM = SM)
      }
      return iM
    }

    function Ui(MM, rM) {
      let iM;
      if (void 0 === rM)
        for (const OM of MM) null != OM && (iM > OM || void 0 === iM && OM >= OM) && (iM = OM);
      else {
        let OM = -1;
        for (let SM of MM) null != (SM = rM(SM, ++OM, MM)) && (iM > SM || void 0 === iM && SM >= SM) && (iM = SM)
      }
      return iM
    }

    function Gi() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mM;
      if (MM === mM) return Ci;
      if ("function" !== typeof MM) throw new TypeError("compare is not a function");
      return (rM, iM) => {
        const OM = MM(rM, iM);
        return OM || 0 === OM ? OM : (0 === MM(iM, iM)) - (0 === MM(rM, rM))
      }
    }

    function Ci(MM, rM) {
      return (null == MM || !(MM >= MM)) - (null == rM || !(rM >= rM)) || (MM < rM ? -1 : MM > rM ? 1 : 0)
    }

    function ei(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        SM = arguments.length > 4 ? arguments[4] : void 0;
      if (rM = Math.floor(rM), iM = Math.floor(Math.max(0, iM)), OM = Math.floor(Math.min(MM.length - 1, OM)), !(iM <= rM && rM <= OM)) return MM;
      for (SM = void 0 === SM ? Ci : Gi(SM); OM > iM;) {
        if (OM - iM > 600) {
          const jM = OM - iM + 1,
            aM = rM - iM + 1,
            PM = Math.log(jM),
            nM = .5 * Math.exp(2 * PM / 3),
            QM = .5 * Math.sqrt(PM * nM * (jM - nM) / jM) * (aM - jM / 2 < 0 ? -1 : 1);
          ei(MM, rM, Math.max(iM, Math.floor(rM - aM * nM / jM + QM)), Math.min(OM, Math.floor(rM + (jM - aM) * nM / jM + QM)), SM)
        }
        const jM = MM[rM];
        let aM = iM,
          PM = OM;
        for (bi(MM, iM, rM), SM(MM[OM], jM) > 0 && bi(MM, iM, OM); aM < PM;) {
          for (bi(MM, aM, PM), ++aM, --PM; SM(MM[aM], jM) < 0;) ++aM;
          for (; SM(MM[PM], jM) > 0;) --PM
        }
        0 === SM(MM[iM], jM) ? bi(MM, iM, PM) : (++PM, bi(MM, PM, OM)), PM <= rM && (iM = PM + 1), rM <= PM && (OM = PM - 1)
      }
      return MM
    }

    function bi(MM, rM, iM) {
      const OM = MM[rM];
      MM[rM] = MM[iM], MM[iM] = OM
    }

    function wi(MM, rM, iM) {
      if (MM = Float64Array.from(function*(MM, rM) {
          if (void 0 === rM)
            for (let iM of MM) null != iM && (iM = +iM) >= iM && (yield iM);
          else {
            let iM = -1;
            for (let OM of MM) null != (OM = rM(OM, ++iM, MM)) && (OM = +OM) >= OM && (yield OM)
          }
        }(MM, iM)), (OM = MM.length) && !isNaN(rM = +rM)) {
        if (rM <= 0 || OM < 2) return Ui(MM);
        if (rM >= 1) return Ei(MM);
        var OM, SM = (OM - 1) * rM,
          jM = Math.floor(SM),
          aM = Ei(ei(MM, jM).subarray(0, jM + 1));
        return aM + (Ui(MM.subarray(jM + 1)) - aM) * (SM - jM)
      }
    }

    function ti(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dM;
      if ((OM = MM.length) && !isNaN(rM = +rM)) {
        if (rM <= 0 || OM < 2) return +iM(MM[0], 0, MM);
        if (rM >= 1) return +iM(MM[OM - 1], OM - 1, MM);
        var OM, SM = (OM - 1) * rM,
          jM = Math.floor(SM),
          aM = +iM(MM[jM], jM, MM);
        return aM + (+iM(MM[jM + 1], jM + 1, MM) - aM) * (SM - jM)
      }
    }

    function gi() {
      var MM, rM = [],
        iM = [],
        OM = [];

      function SM() {
        var MM = 0,
          SM = Math.max(1, iM.length);
        for (OM = new Array(SM - 1); ++MM < SM;) OM[MM - 1] = ti(rM, MM / SM);
        return jM
      }

      function jM(rM) {
        return null == rM || isNaN(rM = +rM) ? MM : iM[EM(OM, rM)]
      }
      return jM.invertExtent = function(MM) {
        var SM = iM.indexOf(MM);
        return SM < 0 ? [NaN, NaN] : [SM > 0 ? OM[SM - 1] : rM[0], SM < OM.length ? OM[SM] : rM[rM.length - 1]]
      }, jM.domain = function(MM) {
        if (!arguments.length) return rM.slice();
        rM = [];
        for (let iM of MM) null == iM || isNaN(iM = +iM) || rM.push(iM);
        return rM.sort(mM), SM()
      }, jM.range = function(MM) {
        return arguments.length ? (iM = Array.from(MM), SM()) : iM.slice()
      }, jM.unknown = function(rM) {
        return arguments.length ? (MM = rM, jM) : MM
      }, jM.quantiles = function() {
        return OM.slice()
      }, jM.copy = function() {
        return gi().domain(rM).range(iM).unknown(MM)
      }, Rr.f.apply(jM, arguments)
    }

    function ui() {
      var MM, rM = 0,
        iM = 1,
        OM = 1,
        SM = [.5],
        jM = [0, 1];

      function aM(rM) {
        return null != rM && rM <= rM ? jM[EM(SM, rM, 0, OM)] : MM
      }

      function PM() {
        var MM = -1;
        for (SM = new Array(OM); ++MM < OM;) SM[MM] = ((MM + 1) * iM - (MM - OM) * rM) / (OM + 1);
        return aM
      }
      return aM.domain = function(MM) {
        return arguments.length ? ([rM, iM] = MM, rM = +rM, iM = +iM, PM()) : [rM, iM]
      }, aM.range = function(MM) {
        return arguments.length ? (OM = (jM = Array.from(MM)).length - 1, PM()) : jM.slice()
      }, aM.invertExtent = function(MM) {
        var aM = jM.indexOf(MM);
        return aM < 0 ? [NaN, NaN] : aM < 1 ? [rM, SM[0]] : aM >= OM ? [SM[OM - 1], iM] : [SM[aM - 1], SM[aM]]
      }, aM.unknown = function(rM) {
        return arguments.length ? (MM = rM, aM) : aM
      }, aM.thresholds = function() {
        return SM.slice()
      }, aM.copy = function() {
        return ui().domain([rM, iM]).range(jM).unknown(MM)
      }, Rr.f.apply(Xr(aM), arguments)
    }

    function Ri() {
      var MM, rM = [.5],
        iM = [0, 1],
        OM = 1;

      function SM(SM) {
        return null != SM && SM <= SM ? iM[EM(rM, SM, 0, OM)] : MM
      }
      return SM.domain = function(MM) {
        return arguments.length ? (rM = Array.from(MM), OM = Math.min(rM.length, iM.length - 1), SM) : rM.slice()
      }, SM.range = function(MM) {
        return arguments.length ? (iM = Array.from(MM), OM = Math.min(rM.length, iM.length - 1), SM) : iM.slice()
      }, SM.invertExtent = function(MM) {
        var OM = iM.indexOf(MM);
        return [rM[OM - 1], rM[OM]]
      }, SM.unknown = function(rM) {
        return arguments.length ? (MM = rM, SM) : MM
      }, SM.copy = function() {
        return Ri().domain(rM).range(iM).unknown(MM)
      }, Rr.f.apply(SM, arguments)
    }
    const Wi = 1e3,
      si = 6e4,
      Di = 36e5,
      ki = 864e5,
      Zi = 6048e5,
      oi = 2592e6,
      fi = 31536e6,
      Yi = new Date,
      Ni = new Date;

    function Ai(MM, rM, iM, OM) {
      function SM(rM) {
        return MM(rM = 0 === arguments.length ? new Date : new Date(+rM)), rM
      }
      return SM.floor = rM => (MM(rM = new Date(+rM)), rM), SM.ceil = iM => (MM(iM = new Date(iM - 1)), rM(iM, 1), MM(iM), iM), SM.round = MM => {
        const rM = SM(MM),
          iM = SM.ceil(MM);
        return MM - rM < iM - MM ? rM : iM
      }, SM.offset = (MM, iM) => (rM(MM = new Date(+MM), null == iM ? 1 : Math.floor(iM)), MM), SM.range = (iM, OM, jM) => {
        const aM = [];
        if (iM = SM.ceil(iM), jM = null == jM ? 1 : Math.floor(jM), !(iM < OM) || !(jM > 0)) return aM;
        let PM;
        do {
          aM.push(PM = new Date(+iM)), rM(iM, jM), MM(iM)
        } while (PM < iM && iM < OM);
        return aM
      }, SM.filter = iM => Ai((rM => {
        if (rM >= rM)
          for (; MM(rM), !iM(rM);) rM.setTime(rM - 1)
      }), ((MM, OM) => {
        if (MM >= MM)
          if (OM < 0)
            for (; ++OM <= 0;)
              for (; rM(MM, -1), !iM(MM););
          else
            for (; --OM >= 0;)
              for (; rM(MM, 1), !iM(MM););
      })), iM && (SM.count = (rM, OM) => (Yi.setTime(+rM), Ni.setTime(+OM), MM(Yi), MM(Ni), Math.floor(iM(Yi, Ni))), SM.every = MM => (MM = Math.floor(MM), isFinite(MM) && MM > 0 ? MM > 1 ? SM.filter(OM ? rM => OM(rM) % MM === 0 : rM => SM.count(0, rM) % MM === 0) : SM : null)), SM
    }
    const xi = Ai((() => {}), ((MM, rM) => {
      MM.setTime(+MM + rM)
    }), ((MM, rM) => rM - MM));
    xi.every = MM => (MM = Math.floor(MM), isFinite(MM) && MM > 0 ? MM > 1 ? Ai((rM => {
      rM.setTime(Math.floor(rM / MM) * MM)
    }), ((rM, iM) => {
      rM.setTime(+rM + iM * MM)
    }), ((rM, iM) => (iM - rM) / MM)) : xi : null);
    xi.range;
    const vi = Ai((MM => {
        MM.setTime(MM - MM.getMilliseconds())
      }), ((MM, rM) => {
        MM.setTime(+MM + rM * Wi)
      }), ((MM, rM) => (rM - MM) / Wi), (MM => MM.getUTCSeconds())),
      Fi = (vi.range, Ai((MM => {
        MM.setTime(MM - MM.getMilliseconds() - MM.getSeconds() * Wi)
      }), ((MM, rM) => {
        MM.setTime(+MM + rM * si)
      }), ((MM, rM) => (rM - MM) / si), (MM => MM.getMinutes()))),
      Bi = (Fi.range, Ai((MM => {
        MM.setUTCSeconds(0, 0)
      }), ((MM, rM) => {
        MM.setTime(+MM + rM * si)
      }), ((MM, rM) => (rM - MM) / si), (MM => MM.getUTCMinutes()))),
      Xi = (Bi.range, Ai((MM => {
        MM.setTime(MM - MM.getMilliseconds() - MM.getSeconds() * Wi - MM.getMinutes() * si)
      }), ((MM, rM) => {
        MM.setTime(+MM + rM * Di)
      }), ((MM, rM) => (rM - MM) / Di), (MM => MM.getHours()))),
      Ii = (Xi.range, Ai((MM => {
        MM.setUTCMinutes(0, 0, 0)
      }), ((MM, rM) => {
        MM.setTime(+MM + rM * Di)
      }), ((MM, rM) => (rM - MM) / Di), (MM => MM.getUTCHours()))),
      Ki = (Ii.range, Ai((MM => MM.setHours(0, 0, 0, 0)), ((MM, rM) => MM.setDate(MM.getDate() + rM)), ((MM, rM) => (rM - MM - (rM.getTimezoneOffset() - MM.getTimezoneOffset()) * si) / ki), (MM => MM.getDate() - 1))),
      qi = (Ki.range, Ai((MM => {
        MM.setUTCHours(0, 0, 0, 0)
      }), ((MM, rM) => {
        MM.setUTCDate(MM.getUTCDate() + rM)
      }), ((MM, rM) => (rM - MM) / ki), (MM => MM.getUTCDate() - 1))),
      Ti = (qi.range, Ai((MM => {
        MM.setUTCHours(0, 0, 0, 0)
      }), ((MM, rM) => {
        MM.setUTCDate(MM.getUTCDate() + rM)
      }), ((MM, rM) => (rM - MM) / ki), (MM => Math.floor(MM / ki))));
    Ti.range;

    function Vi(MM) {
      return Ai((rM => {
        rM.setDate(rM.getDate() - (rM.getDay() + 7 - MM) % 7), rM.setHours(0, 0, 0, 0)
      }), ((MM, rM) => {
        MM.setDate(MM.getDate() + 7 * rM)
      }), ((MM, rM) => (rM - MM - (rM.getTimezoneOffset() - MM.getTimezoneOffset()) * si) / Zi))
    }
    const ci = Vi(0),
      MO = Vi(1),
      rO = Vi(2),
      iO = Vi(3),
      OO = Vi(4),
      SO = Vi(5),
      jO = Vi(6);
    ci.range, MO.range, rO.range, iO.range, OO.range, SO.range, jO.range;

    function aO(MM) {
      return Ai((rM => {
        rM.setUTCDate(rM.getUTCDate() - (rM.getUTCDay() + 7 - MM) % 7), rM.setUTCHours(0, 0, 0, 0)
      }), ((MM, rM) => {
        MM.setUTCDate(MM.getUTCDate() + 7 * rM)
      }), ((MM, rM) => (rM - MM) / Zi))
    }
    const PO = aO(0),
      nO = aO(1),
      QO = aO(2),
      zO = aO(3),
      LO = aO(4),
      mO = aO(5),
      HO = aO(6),
      hO = (PO.range, nO.range, QO.range, zO.range, LO.range, mO.range, HO.range, Ai((MM => {
        MM.setDate(1), MM.setHours(0, 0, 0, 0)
      }), ((MM, rM) => {
        MM.setMonth(MM.getMonth() + rM)
      }), ((MM, rM) => rM.getMonth() - MM.getMonth() + 12 * (rM.getFullYear() - MM.getFullYear())), (MM => MM.getMonth()))),
      JO = (hO.range, Ai((MM => {
        MM.setUTCDate(1), MM.setUTCHours(0, 0, 0, 0)
      }), ((MM, rM) => {
        MM.setUTCMonth(MM.getUTCMonth() + rM)
      }), ((MM, rM) => rM.getUTCMonth() - MM.getUTCMonth() + 12 * (rM.getUTCFullYear() - MM.getUTCFullYear())), (MM => MM.getUTCMonth()))),
      dO = (JO.range, Ai((MM => {
        MM.setMonth(0, 1), MM.setHours(0, 0, 0, 0)
      }), ((MM, rM) => {
        MM.setFullYear(MM.getFullYear() + rM)
      }), ((MM, rM) => rM.getFullYear() - MM.getFullYear()), (MM => MM.getFullYear())));
    dO.every = MM => isFinite(MM = Math.floor(MM)) && MM > 0 ? Ai((rM => {
      rM.setFullYear(Math.floor(rM.getFullYear() / MM) * MM), rM.setMonth(0, 1), rM.setHours(0, 0, 0, 0)
    }), ((rM, iM) => {
      rM.setFullYear(rM.getFullYear() + iM * MM)
    })) : null;
    dO.range;
    const yO = Ai((MM => {
      MM.setUTCMonth(0, 1), MM.setUTCHours(0, 0, 0, 0)
    }), ((MM, rM) => {
      MM.setUTCFullYear(MM.getUTCFullYear() + rM)
    }), ((MM, rM) => rM.getUTCFullYear() - MM.getUTCFullYear()), (MM => MM.getUTCFullYear()));
    yO.every = MM => isFinite(MM = Math.floor(MM)) && MM > 0 ? Ai((rM => {
      rM.setUTCFullYear(Math.floor(rM.getUTCFullYear() / MM) * MM), rM.setUTCMonth(0, 1), rM.setUTCHours(0, 0, 0, 0)
    }), ((rM, iM) => {
      rM.setUTCFullYear(rM.getUTCFullYear() + iM * MM)
    })) : null;
    yO.range;

    function lO(MM, rM, iM, OM, SM, jM) {
      const aM = [
        [vi, 1, Wi],
        [vi, 5, 5e3],
        [vi, 15, 15e3],
        [vi, 30, 3e4],
        [jM, 1, si],
        [jM, 5, 3e5],
        [jM, 15, 9e5],
        [jM, 30, 18e5],
        [SM, 1, Di],
        [SM, 3, 108e5],
        [SM, 6, 216e5],
        [SM, 12, 432e5],
        [OM, 1, ki],
        [OM, 2, 1728e5],
        [iM, 1, Zi],
        [rM, 1, oi],
        [rM, 3, 7776e6],
        [MM, 1, fi]
      ];

      function PM(rM, iM, OM) {
        const SM = Math.abs(iM - rM) / OM,
          jM = hM((MM => {
            let [, , rM] = MM;
            return rM
          })).right(aM, SM);
        if (jM === aM.length) return MM.every(LM(rM / fi, iM / fi, OM));
        if (0 === jM) return xi.every(Math.max(LM(rM, iM, OM), 1));
        const [PM, nM] = aM[SM / aM[jM - 1][2] < aM[jM][2] / SM ? jM - 1 : jM];
        return PM.every(nM)
      }
      return [function(MM, rM, iM) {
        const OM = rM < MM;
        OM && ([MM, rM] = [rM, MM]);
        const SM = iM && "function" === typeof iM.range ? iM : PM(MM, rM, iM),
          jM = SM ? SM.range(MM, +rM + 1) : [];
        return OM ? jM.reverse() : jM
      }, PM]
    }
    const [EO, UO] = lO(yO, JO, PO, Ti, Ii, Bi), [GO, CO] = lO(dO, hO, ci, Ki, Xi, Fi);

    function eO(MM) {
      if (0 <= MM.y && MM.y < 100) {
        var rM = new Date(-1, MM.m, MM.d, MM.H, MM.M, MM.S, MM.L);
        return rM.setFullYear(MM.y), rM
      }
      return new Date(MM.y, MM.m, MM.d, MM.H, MM.M, MM.S, MM.L)
    }

    function bO(MM) {
      if (0 <= MM.y && MM.y < 100) {
        var rM = new Date(Date.UTC(-1, MM.m, MM.d, MM.H, MM.M, MM.S, MM.L));
        return rM.setUTCFullYear(MM.y), rM
      }
      return new Date(Date.UTC(MM.y, MM.m, MM.d, MM.H, MM.M, MM.S, MM.L))
    }

    function wO(MM, rM, iM) {
      return {
        y: MM,
        m: rM,
        d: iM,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var tO, gO, uO, RO = {
        "-": "",
        _: " ",
        0: "0"
      },
      pO = /^\s*\d+/,
      WO = /^%/,
      sO = /[\\^$*+?|[\]().{}]/g;

    function DO(MM, rM, iM) {
      var OM = MM < 0 ? "-" : "",
        SM = (OM ? -MM : MM) + "",
        jM = SM.length;
      return OM + (jM < iM ? new Array(iM - jM + 1).join(rM) + SM : SM)
    }

    function kO(MM) {
      return MM.replace(sO, "\\$&")
    }

    function ZO(MM) {
      return new RegExp("^(?:" + MM.map(kO).join("|") + ")", "i")
    }

    function oO(MM) {
      return new Map(MM.map(((MM, rM) => [MM.toLowerCase(), rM])))
    }

    function fO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 1));
      return OM ? (MM.w = +OM[0], iM + OM[0].length) : -1
    }

    function YO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 1));
      return OM ? (MM.u = +OM[0], iM + OM[0].length) : -1
    }

    function NO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.U = +OM[0], iM + OM[0].length) : -1
    }

    function AO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.V = +OM[0], iM + OM[0].length) : -1
    }

    function xO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.W = +OM[0], iM + OM[0].length) : -1
    }

    function vO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 4));
      return OM ? (MM.y = +OM[0], iM + OM[0].length) : -1
    }

    function FO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.y = +OM[0] + (+OM[0] > 68 ? 1900 : 2e3), iM + OM[0].length) : -1
    }

    function BO(MM, rM, iM) {
      var OM = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(rM.slice(iM, iM + 6));
      return OM ? (MM.Z = OM[1] ? 0 : -(OM[2] + (OM[3] || "00")), iM + OM[0].length) : -1
    }

    function XO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 1));
      return OM ? (MM.q = 3 * OM[0] - 3, iM + OM[0].length) : -1
    }

    function IO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.m = OM[0] - 1, iM + OM[0].length) : -1
    }

    function KO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.d = +OM[0], iM + OM[0].length) : -1
    }

    function qO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 3));
      return OM ? (MM.m = 0, MM.d = +OM[0], iM + OM[0].length) : -1
    }

    function TO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.H = +OM[0], iM + OM[0].length) : -1
    }

    function VO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.M = +OM[0], iM + OM[0].length) : -1
    }

    function cO(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 2));
      return OM ? (MM.S = +OM[0], iM + OM[0].length) : -1
    }

    function MS(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 3));
      return OM ? (MM.L = +OM[0], iM + OM[0].length) : -1
    }

    function rS(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM, iM + 6));
      return OM ? (MM.L = Math.floor(OM[0] / 1e3), iM + OM[0].length) : -1
    }

    function iS(MM, rM, iM) {
      var OM = WO.exec(rM.slice(iM, iM + 1));
      return OM ? iM + OM[0].length : -1
    }

    function OS(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM));
      return OM ? (MM.Q = +OM[0], iM + OM[0].length) : -1
    }

    function SS(MM, rM, iM) {
      var OM = pO.exec(rM.slice(iM));
      return OM ? (MM.s = +OM[0], iM + OM[0].length) : -1
    }

    function jS(MM, rM) {
      return DO(MM.getDate(), rM, 2)
    }

    function aS(MM, rM) {
      return DO(MM.getHours(), rM, 2)
    }

    function PS(MM, rM) {
      return DO(MM.getHours() % 12 || 12, rM, 2)
    }

    function nS(MM, rM) {
      return DO(1 + Ki.count(dO(MM), MM), rM, 3)
    }

    function QS(MM, rM) {
      return DO(MM.getMilliseconds(), rM, 3)
    }

    function zS(MM, rM) {
      return QS(MM, rM) + "000"
    }

    function LS(MM, rM) {
      return DO(MM.getMonth() + 1, rM, 2)
    }

    function mS(MM, rM) {
      return DO(MM.getMinutes(), rM, 2)
    }

    function HS(MM, rM) {
      return DO(MM.getSeconds(), rM, 2)
    }

    function hS(MM) {
      var rM = MM.getDay();
      return 0 === rM ? 7 : rM
    }

    function JS(MM, rM) {
      return DO(ci.count(dO(MM) - 1, MM), rM, 2)
    }

    function dS(MM) {
      var rM = MM.getDay();
      return rM >= 4 || 0 === rM ? OO(MM) : OO.ceil(MM)
    }

    function yS(MM, rM) {
      return MM = dS(MM), DO(OO.count(dO(MM), MM) + (4 === dO(MM).getDay()), rM, 2)
    }

    function lS(MM) {
      return MM.getDay()
    }

    function ES(MM, rM) {
      return DO(MO.count(dO(MM) - 1, MM), rM, 2)
    }

    function US(MM, rM) {
      return DO(MM.getFullYear() % 100, rM, 2)
    }

    function GS(MM, rM) {
      return DO((MM = dS(MM)).getFullYear() % 100, rM, 2)
    }

    function CS(MM, rM) {
      return DO(MM.getFullYear() % 1e4, rM, 4)
    }

    function eS(MM, rM) {
      var iM = MM.getDay();
      return DO((MM = iM >= 4 || 0 === iM ? OO(MM) : OO.ceil(MM)).getFullYear() % 1e4, rM, 4)
    }

    function bS(MM) {
      var rM = MM.getTimezoneOffset();
      return (rM > 0 ? "-" : (rM *= -1, "+")) + DO(rM / 60 | 0, "0", 2) + DO(rM % 60, "0", 2)
    }

    function wS(MM, rM) {
      return DO(MM.getUTCDate(), rM, 2)
    }

    function tS(MM, rM) {
      return DO(MM.getUTCHours(), rM, 2)
    }

    function gS(MM, rM) {
      return DO(MM.getUTCHours() % 12 || 12, rM, 2)
    }

    function uS(MM, rM) {
      return DO(1 + qi.count(yO(MM), MM), rM, 3)
    }

    function RS(MM, rM) {
      return DO(MM.getUTCMilliseconds(), rM, 3)
    }

    function pS(MM, rM) {
      return RS(MM, rM) + "000"
    }

    function WS(MM, rM) {
      return DO(MM.getUTCMonth() + 1, rM, 2)
    }

    function sS(MM, rM) {
      return DO(MM.getUTCMinutes(), rM, 2)
    }

    function DS(MM, rM) {
      return DO(MM.getUTCSeconds(), rM, 2)
    }

    function kS(MM) {
      var rM = MM.getUTCDay();
      return 0 === rM ? 7 : rM
    }

    function ZS(MM, rM) {
      return DO(PO.count(yO(MM) - 1, MM), rM, 2)
    }

    function oS(MM) {
      var rM = MM.getUTCDay();
      return rM >= 4 || 0 === rM ? LO(MM) : LO.ceil(MM)
    }

    function fS(MM, rM) {
      return MM = oS(MM), DO(LO.count(yO(MM), MM) + (4 === yO(MM).getUTCDay()), rM, 2)
    }

    function YS(MM) {
      return MM.getUTCDay()
    }

    function NS(MM, rM) {
      return DO(nO.count(yO(MM) - 1, MM), rM, 2)
    }

    function AS(MM, rM) {
      return DO(MM.getUTCFullYear() % 100, rM, 2)
    }

    function xS(MM, rM) {
      return DO((MM = oS(MM)).getUTCFullYear() % 100, rM, 2)
    }

    function vS(MM, rM) {
      return DO(MM.getUTCFullYear() % 1e4, rM, 4)
    }

    function FS(MM, rM) {
      var iM = MM.getUTCDay();
      return DO((MM = iM >= 4 || 0 === iM ? LO(MM) : LO.ceil(MM)).getUTCFullYear() % 1e4, rM, 4)
    }

    function BS() {
      return "+0000"
    }

    function XS() {
      return "%"
    }

    function IS(MM) {
      return +MM
    }

    function KS(MM) {
      return Math.floor(+MM / 1e3)
    }

    function qS(MM) {
      return new Date(MM)
    }

    function TS(MM) {
      return MM instanceof Date ? +MM : +new Date(+MM)
    }

    function VS(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
      var zM = gr(),
        LM = zM.invert,
        mM = zM.domain,
        HM = QM(".%L"),
        hM = QM(":%S"),
        JM = QM("%I:%M"),
        dM = QM("%I %p"),
        yM = QM("%a %d"),
        lM = QM("%b %d"),
        EM = QM("%B"),
        UM = QM("%Y");

      function GM(MM) {
        return (nM(MM) < MM ? HM : PM(MM) < MM ? hM : aM(MM) < MM ? JM : jM(MM) < MM ? dM : OM(MM) < MM ? SM(MM) < MM ? yM : lM : iM(MM) < MM ? EM : UM)(MM)
      }
      return zM.invert = function(MM) {
        return new Date(LM(MM))
      }, zM.domain = function(MM) {
        return arguments.length ? mM(Array.from(MM, TS)) : mM().map(qS)
      }, zM.ticks = function(rM) {
        var iM = mM();
        return MM(iM[0], iM[iM.length - 1], null == rM ? 10 : rM)
      }, zM.tickFormat = function(MM, rM) {
        return null == rM ? GM : QM(rM)
      }, zM.nice = function(MM) {
        var iM = mM();
        return MM && "function" === typeof MM.range || (MM = rM(iM[0], iM[iM.length - 1], null == MM ? 10 : MM)), MM ? mM(qr(iM, MM)) : zM
      }, zM.copy = function() {
        return wr(zM, VS(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM))
      }, zM
    }

    function cS() {
      return Rr.f.apply(VS(GO, CO, dO, hO, ci, Ki, Xi, Fi, vi, gO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function Mj() {
      return Rr.f.apply(VS(EO, UO, yO, JO, PO, qi, Ii, Bi, vi, uO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function rj() {
      var MM, rM, iM, OM, SM, jM = 0,
        aM = 1,
        PM = Gr,
        nM = !1;

      function QM(rM) {
        return null == rM || isNaN(rM = +rM) ? SM : PM(0 === iM ? .5 : (rM = (OM(rM) - MM) * iM, nM ? Math.max(0, Math.min(1, rM)) : rM))
      }

      function zM(MM) {
        return function(rM) {
          var iM, OM;
          return arguments.length ? ([iM, OM] = rM, PM = MM(iM, OM), QM) : [PM(0), PM(1)]
        }
      }
      return QM.domain = function(SM) {
          return arguments.length ? ([jM, aM] = SM, MM = OM(jM = +jM), rM = OM(aM = +aM), iM = MM === rM ? 0 : 1 / (rM - MM), QM) : [jM, aM]
        }, QM.clamp = function(MM) {
          return arguments.length ? (nM = !!MM, QM) : nM
        }, QM.interpolator = function(MM) {
          return arguments.length ? (PM = MM, QM) : PM
        }, QM.range = zM(yr), QM.rangeRound = zM(lr), QM.unknown = function(MM) {
          return arguments.length ? (SM = MM, QM) : SM
        },
        function(SM) {
          return OM = SM, MM = SM(jM), rM = SM(aM), iM = MM === rM ? 0 : 1 / (rM - MM), QM
        }
    }

    function ij(MM, rM) {
      return rM.domain(MM.domain()).interpolator(MM.interpolator()).clamp(MM.clamp()).unknown(MM.unknown())
    }

    function Oj() {
      var MM = Xr(rj()(Gr));
      return MM.copy = function() {
        return ij(MM, Oj())
      }, Rr.b.apply(MM, arguments)
    }

    function Sj() {
      var MM = Oi(rj()).domain([1, 10]);
      return MM.copy = function() {
        return ij(MM, Sj()).base(MM.base())
      }, Rr.b.apply(MM, arguments)
    }

    function jj() {
      var MM = Pi(rj());
      return MM.copy = function() {
        return ij(MM, jj()).constant(MM.constant())
      }, Rr.b.apply(MM, arguments)
    }

    function aj() {
      var MM = Hi(rj());
      return MM.copy = function() {
        return ij(MM, aj()).exponent(MM.exponent())
      }, Rr.b.apply(MM, arguments)
    }

    function Pj() {
      return aj.apply(null, arguments).exponent(.5)
    }

    function nj() {
      var MM = [],
        rM = Gr;

      function iM(iM) {
        if (null != iM && !isNaN(iM = +iM)) return rM((EM(MM, iM, 1) - 1) / (MM.length - 1))
      }
      return iM.domain = function(rM) {
        if (!arguments.length) return MM.slice();
        MM = [];
        for (let iM of rM) null == iM || isNaN(iM = +iM) || MM.push(iM);
        return MM.sort(mM), iM
      }, iM.interpolator = function(MM) {
        return arguments.length ? (rM = MM, iM) : rM
      }, iM.range = function() {
        return MM.map(((iM, OM) => rM(OM / (MM.length - 1))))
      }, iM.quantiles = function(rM) {
        return Array.from({
          length: rM + 1
        }, ((iM, OM) => wi(MM, OM / rM)))
      }, iM.copy = function() {
        return nj(rM).domain(MM)
      }, Rr.b.apply(iM, arguments)
    }

    function Qj() {
      var MM, rM, iM, OM, SM, jM, aM, PM = 0,
        nM = .5,
        QM = 1,
        zM = 1,
        LM = Gr,
        mM = !1;

      function HM(MM) {
        return isNaN(MM = +MM) ? aM : (MM = .5 + ((MM = +jM(MM)) - rM) * (zM * MM < zM * rM ? OM : SM), LM(mM ? Math.max(0, Math.min(1, MM)) : MM))
      }

      function hM(MM) {
        return function(rM) {
          var iM, OM, SM;
          return arguments.length ? ([iM, OM, SM] = rM, LM = function(MM, rM) {
            void 0 === rM && (rM = MM, MM = yr);
            for (var iM = 0, OM = rM.length - 1, SM = rM[0], jM = new Array(OM < 0 ? 0 : OM); iM < OM;) jM[iM] = MM(SM, SM = rM[++iM]);
            return function(MM) {
              var rM = Math.max(0, Math.min(OM - 1, Math.floor(MM *= OM)));
              return jM[rM](MM - rM)
            }
          }(MM, [iM, OM, SM]), HM) : [LM(0), LM(.5), LM(1)]
        }
      }
      return HM.domain = function(aM) {
          return arguments.length ? ([PM, nM, QM] = aM, MM = jM(PM = +PM), rM = jM(nM = +nM), iM = jM(QM = +QM), OM = MM === rM ? 0 : .5 / (rM - MM), SM = rM === iM ? 0 : .5 / (iM - rM), zM = rM < MM ? -1 : 1, HM) : [PM, nM, QM]
        }, HM.clamp = function(MM) {
          return arguments.length ? (mM = !!MM, HM) : mM
        }, HM.interpolator = function(MM) {
          return arguments.length ? (LM = MM, HM) : LM
        }, HM.range = hM(yr), HM.rangeRound = hM(lr), HM.unknown = function(MM) {
          return arguments.length ? (aM = MM, HM) : aM
        },
        function(aM) {
          return jM = aM, MM = aM(PM), rM = aM(nM), iM = aM(QM), OM = MM === rM ? 0 : .5 / (rM - MM), SM = rM === iM ? 0 : .5 / (iM - rM), zM = rM < MM ? -1 : 1, HM
        }
    }

    function zj() {
      var MM = Xr(Qj()(Gr));
      return MM.copy = function() {
        return ij(MM, zj())
      }, Rr.b.apply(MM, arguments)
    }

    function Lj() {
      var MM = Oi(Qj()).domain([.1, 1, 10]);
      return MM.copy = function() {
        return ij(MM, Lj()).base(MM.base())
      }, Rr.b.apply(MM, arguments)
    }

    function mj() {
      var MM = Pi(Qj());
      return MM.copy = function() {
        return ij(MM, mj()).constant(MM.constant())
      }, Rr.b.apply(MM, arguments)
    }

    function Hj() {
      var MM = Hi(Qj());
      return MM.copy = function() {
        return ij(MM, Hj()).exponent(MM.exponent())
      }, Rr.b.apply(MM, arguments)
    }

    function hj() {
      return Hj.apply(null, arguments).exponent(.5)
    }

    function Jj(MM, rM) {
      if ((SM = MM.length) > 1)
        for (var iM, OM, SM, jM = 1, aM = MM[rM[0]], PM = aM.length; jM < SM; ++jM)
          for (OM = aM, aM = MM[rM[jM]], iM = 0; iM < PM; ++iM) aM[iM][1] += aM[iM][0] = isNaN(OM[iM][1]) ? OM[iM][0] : OM[iM][1]
    }! function(MM) {
      tO = function(MM) {
        var rM = MM.dateTime,
          iM = MM.date,
          OM = MM.time,
          SM = MM.periods,
          jM = MM.days,
          aM = MM.shortDays,
          PM = MM.months,
          nM = MM.shortMonths,
          QM = ZO(SM),
          zM = oO(SM),
          LM = ZO(jM),
          mM = oO(jM),
          HM = ZO(aM),
          hM = oO(aM),
          JM = ZO(PM),
          dM = oO(PM),
          yM = ZO(nM),
          lM = oO(nM),
          EM = {
            a: function(MM) {
              return aM[MM.getDay()]
            },
            A: function(MM) {
              return jM[MM.getDay()]
            },
            b: function(MM) {
              return nM[MM.getMonth()]
            },
            B: function(MM) {
              return PM[MM.getMonth()]
            },
            c: null,
            d: jS,
            e: jS,
            f: zS,
            g: GS,
            G: eS,
            H: aS,
            I: PS,
            j: nS,
            L: QS,
            m: LS,
            M: mS,
            p: function(MM) {
              return SM[+(MM.getHours() >= 12)]
            },
            q: function(MM) {
              return 1 + ~~(MM.getMonth() / 3)
            },
            Q: IS,
            s: KS,
            S: HS,
            u: hS,
            U: JS,
            V: yS,
            w: lS,
            W: ES,
            x: null,
            X: null,
            y: US,
            Y: CS,
            Z: bS,
            "%": XS
          },
          UM = {
            a: function(MM) {
              return aM[MM.getUTCDay()]
            },
            A: function(MM) {
              return jM[MM.getUTCDay()]
            },
            b: function(MM) {
              return nM[MM.getUTCMonth()]
            },
            B: function(MM) {
              return PM[MM.getUTCMonth()]
            },
            c: null,
            d: wS,
            e: wS,
            f: pS,
            g: xS,
            G: FS,
            H: tS,
            I: gS,
            j: uS,
            L: RS,
            m: WS,
            M: sS,
            p: function(MM) {
              return SM[+(MM.getUTCHours() >= 12)]
            },
            q: function(MM) {
              return 1 + ~~(MM.getUTCMonth() / 3)
            },
            Q: IS,
            s: KS,
            S: DS,
            u: kS,
            U: ZS,
            V: fS,
            w: YS,
            W: NS,
            x: null,
            X: null,
            y: AS,
            Y: vS,
            Z: BS,
            "%": XS
          },
          GM = {
            a: function(MM, rM, iM) {
              var OM = HM.exec(rM.slice(iM));
              return OM ? (MM.w = hM.get(OM[0].toLowerCase()), iM + OM[0].length) : -1
            },
            A: function(MM, rM, iM) {
              var OM = LM.exec(rM.slice(iM));
              return OM ? (MM.w = mM.get(OM[0].toLowerCase()), iM + OM[0].length) : -1
            },
            b: function(MM, rM, iM) {
              var OM = yM.exec(rM.slice(iM));
              return OM ? (MM.m = lM.get(OM[0].toLowerCase()), iM + OM[0].length) : -1
            },
            B: function(MM, rM, iM) {
              var OM = JM.exec(rM.slice(iM));
              return OM ? (MM.m = dM.get(OM[0].toLowerCase()), iM + OM[0].length) : -1
            },
            c: function(MM, iM, OM) {
              return bM(MM, rM, iM, OM)
            },
            d: KO,
            e: KO,
            f: rS,
            g: FO,
            G: vO,
            H: TO,
            I: TO,
            j: qO,
            L: MS,
            m: IO,
            M: VO,
            p: function(MM, rM, iM) {
              var OM = QM.exec(rM.slice(iM));
              return OM ? (MM.p = zM.get(OM[0].toLowerCase()), iM + OM[0].length) : -1
            },
            q: XO,
            Q: OS,
            s: SS,
            S: cO,
            u: YO,
            U: NO,
            V: AO,
            w: fO,
            W: xO,
            x: function(MM, rM, OM) {
              return bM(MM, iM, rM, OM)
            },
            X: function(MM, rM, iM) {
              return bM(MM, OM, rM, iM)
            },
            y: FO,
            Y: vO,
            Z: BO,
            "%": iS
          };

        function CM(MM, rM) {
          return function(iM) {
            var OM, SM, jM, aM = [],
              PM = -1,
              nM = 0,
              QM = MM.length;
            for (iM instanceof Date || (iM = new Date(+iM)); ++PM < QM;) 37 === MM.charCodeAt(PM) && (aM.push(MM.slice(nM, PM)), null != (SM = RO[OM = MM.charAt(++PM)]) ? OM = MM.charAt(++PM) : SM = "e" === OM ? " " : "0", (jM = rM[OM]) && (OM = jM(iM, SM)), aM.push(OM), nM = PM + 1);
            return aM.push(MM.slice(nM, PM)), aM.join("")
          }
        }

        function eM(MM, rM) {
          return function(iM) {
            var OM, SM, jM = wO(1900, void 0, 1);
            if (bM(jM, MM, iM += "", 0) != iM.length) return null;
            if ("Q" in jM) return new Date(jM.Q);
            if ("s" in jM) return new Date(1e3 * jM.s + ("L" in jM ? jM.L : 0));
            if (rM && !("Z" in jM) && (jM.Z = 0), "p" in jM && (jM.H = jM.H % 12 + 12 * jM.p), void 0 === jM.m && (jM.m = "q" in jM ? jM.q : 0), "V" in jM) {
              if (jM.V < 1 || jM.V > 53) return null;
              "w" in jM || (jM.w = 1), "Z" in jM ? (SM = (OM = bO(wO(jM.y, 0, 1))).getUTCDay(), OM = SM > 4 || 0 === SM ? nO.ceil(OM) : nO(OM), OM = qi.offset(OM, 7 * (jM.V - 1)), jM.y = OM.getUTCFullYear(), jM.m = OM.getUTCMonth(), jM.d = OM.getUTCDate() + (jM.w + 6) % 7) : (SM = (OM = eO(wO(jM.y, 0, 1))).getDay(), OM = SM > 4 || 0 === SM ? MO.ceil(OM) : MO(OM), OM = Ki.offset(OM, 7 * (jM.V - 1)), jM.y = OM.getFullYear(), jM.m = OM.getMonth(), jM.d = OM.getDate() + (jM.w + 6) % 7)
            } else("W" in jM || "U" in jM) && ("w" in jM || (jM.w = "u" in jM ? jM.u % 7 : "W" in jM ? 1 : 0), SM = "Z" in jM ? bO(wO(jM.y, 0, 1)).getUTCDay() : eO(wO(jM.y, 0, 1)).getDay(), jM.m = 0, jM.d = "W" in jM ? (jM.w + 6) % 7 + 7 * jM.W - (SM + 5) % 7 : jM.w + 7 * jM.U - (SM + 6) % 7);
            return "Z" in jM ? (jM.H += jM.Z / 100 | 0, jM.M += jM.Z % 100, bO(jM)) : eO(jM)
          }
        }

        function bM(MM, rM, iM, OM) {
          for (var SM, jM, aM = 0, PM = rM.length, nM = iM.length; aM < PM;) {
            if (OM >= nM) return -1;
            if (37 === (SM = rM.charCodeAt(aM++))) {
              if (SM = rM.charAt(aM++), !(jM = GM[SM in RO ? rM.charAt(aM++) : SM]) || (OM = jM(MM, iM, OM)) < 0) return -1
            } else if (SM != iM.charCodeAt(OM++)) return -1
          }
          return OM
        }
        return EM.x = CM(iM, EM), EM.X = CM(OM, EM), EM.c = CM(rM, EM), UM.x = CM(iM, UM), UM.X = CM(OM, UM), UM.c = CM(rM, UM), {
          format: function(MM) {
            var rM = CM(MM += "", EM);
            return rM.toString = function() {
              return MM
            }, rM
          },
          parse: function(MM) {
            var rM = eM(MM += "", !1);
            return rM.toString = function() {
              return MM
            }, rM
          },
          utcFormat: function(MM) {
            var rM = CM(MM += "", UM);
            return rM.toString = function() {
              return MM
            }, rM
          },
          utcParse: function(MM) {
            var rM = eM(MM += "", !0);
            return rM.toString = function() {
              return MM
            }, rM
          }
        }
      }(MM), gO = tO.format, tO.parse, uO = tO.utcFormat, tO.utcParse
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
    var dj = iM(6686),
      yj = iM(6563);

    function lj(MM) {
      for (var rM = MM.length, iM = new Array(rM); --rM >= 0;) iM[rM] = rM;
      return iM
    }

    function Ej(MM, rM) {
      return MM[rM]
    }

    function Uj(MM) {
      const rM = [];
      return rM.key = MM, rM
    }
    var Gj = iM(6622),
      Cj = iM.n(Gj),
      ej = iM(6636),
      bj = iM.n(ej),
      wj = iM(5864),
      tj = iM.n(wj),
      gj = iM(5712),
      uj = iM.n(gj),
      Rj = iM(5603),
      pj = iM.n(Rj),
      Wj = iM(5625),
      sj = iM.n(Wj),
      Dj = iM(6645),
      kj = iM.n(Dj),
      Zj = iM(5618),
      oj = iM.n(Zj),
      fj = iM(6523),
      Yj = iM.n(fj),
      Nj = iM(6657),
      Aj = iM.n(Nj),
      xj = iM(5952),
      vj = iM.n(xj),
      Fj = iM(6665),
      Bj = iM.n(Fj);

    function Xj(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return Ij(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(MM)) return Array.from(MM)
      }(MM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return Ij(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return Ij(MM, rM)
      }(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ij(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }
    var Kj = function(MM) {
        return MM
      },
      qj = {
        "@@functional/placeholder": !0
      },
      Tj = function(MM) {
        return MM === qj
      },
      Vj = function(MM) {
        return function rM() {
          return 0 === arguments.length || 1 === arguments.length && Tj(arguments.length <= 0 ? void 0 : arguments[0]) ? rM : MM.apply(void 0, arguments)
        }
      },
      cj = function MM(rM, iM) {
        return 1 === rM ? iM : Vj((function() {
          for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
          var aM = SM.filter((function(MM) {
            return MM !== qj
          })).length;
          return aM >= rM ? iM.apply(void 0, SM) : MM(rM - aM, Vj((function() {
            for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
            var jM = SM.map((function(MM) {
              return Tj(MM) ? rM.shift() : MM
            }));
            return iM.apply(void 0, Xj(jM).concat(rM))
          })))
        }))
      },
      Ma = function(MM) {
        return cj(MM.length, MM)
      },
      ra = function(MM, rM) {
        for (var iM = [], OM = MM; OM < rM; ++OM) iM[OM - MM] = OM;
        return iM
      },
      ia = Ma((function(MM, rM) {
        return Array.isArray(rM) ? rM.map(MM) : Object.keys(rM).map((function(MM) {
          return rM[MM]
        })).map(MM)
      })),
      Oa = function() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        if (!rM.length) return Kj;
        var OM = rM.reverse(),
          SM = OM[0],
          jM = OM.slice(1);
        return function() {
          return jM.reduce((function(MM, rM) {
            return rM(MM)
          }), SM.apply(void 0, arguments))
        }
      },
      Sa = function(MM) {
        return Array.isArray(MM) ? MM.reverse() : MM.split("").reverse.join("")
      },
      ja = function(MM) {
        var rM = null,
          iM = null;
        return function() {
          for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
          return rM && SM.every((function(MM, iM) {
            return MM === rM[iM]
          })) ? iM : (rM = SM, iM = MM.apply(void 0, SM))
        }
      };
    const aa = {
      rangeStep: function(MM, rM, iM) {
        for (var OM = new(Bj())(MM), SM = 0, jM = []; OM.lt(rM) && SM < 1e5;) jM.push(OM.toNumber()), OM = OM.add(iM), SM++;
        return jM
      },
      getDigitCount: function(MM) {
        return 0 === MM ? 1 : Math.floor(new(Bj())(MM).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: Ma((function(MM, rM, iM) {
        var OM = +MM;
        return OM + iM * (+rM - OM)
      })),
      uninterpolateNumber: Ma((function(MM, rM, iM) {
        var OM = rM - +MM;
        return (iM - MM) / (OM = OM || 1 / 0)
      })),
      uninterpolateTruncation: Ma((function(MM, rM, iM) {
        var OM = rM - +MM;
        return OM = OM || 1 / 0, Math.max(0, Math.min(1, (iM - MM) / OM))
      }))
    };

    function Pa(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return za(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(MM)) return Array.from(MM)
      }(MM) || Qa(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function na(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(MM))) return;
        var iM = [],
          OM = !0,
          SM = !1,
          jM = void 0;
        try {
          for (var aM, PM = MM[Symbol.iterator](); !(OM = (aM = PM.next()).done) && (iM.push(aM.value), !rM || iM.length !== rM); OM = !0);
        } catch (nM) {
          SM = !0, jM = nM
        } finally {
          try {
            OM || null == PM.return || PM.return()
          } finally {
            if (SM) throw jM
          }
        }
        return iM
      }(MM, rM) || Qa(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qa(MM, rM) {
      if (MM) {
        if ("string" === typeof MM) return za(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? za(MM, rM) : void 0
      }
    }

    function za(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function La(MM) {
      var rM = na(MM, 2),
        iM = rM[0],
        OM = rM[1],
        SM = iM,
        jM = OM;
      return iM > OM && (SM = OM, jM = iM), [SM, jM]
    }

    function ma(MM, rM, iM) {
      if (MM.lte(0)) return new(Bj())(0);
      var OM = aa.getDigitCount(MM.toNumber()),
        SM = new(Bj())(10).pow(OM),
        jM = MM.div(SM),
        aM = 1 !== OM ? .05 : .1,
        PM = new(Bj())(Math.ceil(jM.div(aM).toNumber())).add(iM).mul(aM).mul(SM);
      return rM ? PM : new(Bj())(Math.ceil(PM))
    }

    function Ha(MM, rM, iM) {
      var OM = 1,
        SM = new(Bj())(MM);
      if (!SM.isint() && iM) {
        var jM = Math.abs(MM);
        jM < 1 ? (OM = new(Bj())(10).pow(aa.getDigitCount(MM) - 1), SM = new(Bj())(Math.floor(SM.div(OM).toNumber())).mul(OM)) : jM > 1 && (SM = new(Bj())(Math.floor(MM)))
      } else 0 === MM ? SM = new(Bj())(Math.floor((rM - 1) / 2)) : iM || (SM = new(Bj())(Math.floor(MM)));
      var aM = Math.floor((rM - 1) / 2);
      return Oa(ia((function(MM) {
        return SM.add(new(Bj())(MM - aM).mul(OM)).toNumber()
      })), ra)(0, rM)
    }

    function ha(MM, rM, iM, OM) {
      var SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((rM - MM) / (iM - 1))) return {
        step: new(Bj())(0),
        tickMin: new(Bj())(0),
        tickMax: new(Bj())(0)
      };
      var jM, aM = ma(new(Bj())(rM).sub(MM).div(iM - 1), OM, SM);
      jM = MM <= 0 && rM >= 0 ? new(Bj())(0) : (jM = new(Bj())(MM).add(rM).div(2)).sub(new(Bj())(jM).mod(aM));
      var PM = Math.ceil(jM.sub(MM).div(aM).toNumber()),
        nM = Math.ceil(new(Bj())(rM).sub(jM).div(aM).toNumber()),
        QM = PM + nM + 1;
      return QM > iM ? ha(MM, rM, iM, OM, SM + 1) : (QM < iM && (nM = rM > 0 ? nM + (iM - QM) : nM, PM = rM > 0 ? PM : PM + (iM - QM)), {
        step: aM,
        tickMin: jM.sub(new(Bj())(PM).mul(aM)),
        tickMax: jM.add(new(Bj())(nM).mul(aM))
      })
    }
    var Ja = ja((function(MM) {
        var rM = na(MM, 2),
          iM = rM[0],
          OM = rM[1],
          SM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          jM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          aM = Math.max(SM, 2),
          PM = na(La([iM, OM]), 2),
          nM = PM[0],
          QM = PM[1];
        if (nM === -1 / 0 || QM === 1 / 0) {
          var zM = QM === 1 / 0 ? [nM].concat(Pa(ra(0, SM - 1).map((function() {
            return 1 / 0
          })))) : [].concat(Pa(ra(0, SM - 1).map((function() {
            return -1 / 0
          }))), [QM]);
          return iM > OM ? Sa(zM) : zM
        }
        if (nM === QM) return Ha(nM, SM, jM);
        var LM = ha(nM, QM, aM, jM),
          mM = LM.step,
          HM = LM.tickMin,
          hM = LM.tickMax,
          JM = aa.rangeStep(HM, hM.add(new(Bj())(.1).mul(mM)), mM);
        return iM > OM ? Sa(JM) : JM
      })),
      da = (ja((function(MM) {
        var rM = na(MM, 2),
          iM = rM[0],
          OM = rM[1],
          SM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          jM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          aM = Math.max(SM, 2),
          PM = na(La([iM, OM]), 2),
          nM = PM[0],
          QM = PM[1];
        if (nM === -1 / 0 || QM === 1 / 0) return [iM, OM];
        if (nM === QM) return Ha(nM, SM, jM);
        var zM = ma(new(Bj())(QM).sub(nM).div(aM - 1), jM, 0),
          LM = Oa(ia((function(MM) {
            return new(Bj())(nM).add(new(Bj())(MM).mul(zM)).toNumber()
          })), ra)(0, aM).filter((function(MM) {
            return MM >= nM && MM <= QM
          }));
        return iM > OM ? Sa(LM) : LM
      })), ja((function(MM, rM) {
        var iM = na(MM, 2),
          OM = iM[0],
          SM = iM[1],
          jM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          aM = na(La([OM, SM]), 2),
          PM = aM[0],
          nM = aM[1];
        if (PM === -1 / 0 || nM === 1 / 0) return [OM, SM];
        if (PM === nM) return [PM];
        var QM = Math.max(rM, 2),
          zM = ma(new(Bj())(nM).sub(PM).div(QM - 1), jM, 0),
          LM = [].concat(Pa(aa.rangeStep(new(Bj())(PM), new(Bj())(nM).sub(new(Bj())(.99).mul(zM)), zM)), [nM]);
        return OM > SM ? Sa(LM) : LM
      }))),
      ya = iM(6673),
      la = iM(5595),
      Ea = iM(5876),
      Ua = iM(6682);

    function Ga(MM) {
      return Ga = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, Ga(MM)
    }

    function Ca(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return ea(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || function(MM, rM) {
        if (!MM) return;
        if ("string" === typeof MM) return ea(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        "Object" === iM && MM.constructor && (iM = MM.constructor.name);
        if ("Map" === iM || "Set" === iM) return Array.from(MM);
        if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return ea(MM, rM)
      }(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ea(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function ba(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function wa(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? ba(Object(iM), !0).forEach((function(rM) {
          ta(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ba(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function ta(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != Ga(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != Ga(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == Ga(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function ga(MM, rM, iM) {
      return tj()(MM) || tj()(rM) ? iM : (0, la.x)(rM) ? sj()(MM, rM, iM) : uj()(rM) ? rM(MM) : iM
    }

    function ua(MM, rM, iM, OM) {
      var SM = kj()(MM, (function(MM) {
        return ga(MM, rM)
      }));
      if ("number" === iM) {
        var jM = SM.filter((function(MM) {
          return (0, la.y)(MM) || parseFloat(MM)
        }));
        return jM.length ? [bj()(jM), Cj()(jM)] : [1 / 0, -1 / 0]
      }
      return (OM ? SM.filter((function(MM) {
        return !tj()(MM)
      })) : SM).map((function(MM) {
        return (0, la.x)(MM) || MM instanceof Date ? MM : ""
      }))
    }
    var Ra = function(MM) {
        var rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          OM = arguments.length > 2 ? arguments[2] : void 0,
          SM = arguments.length > 3 ? arguments[3] : void 0,
          jM = -1,
          aM = null !== (rM = null === iM || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : 0;
        if (aM <= 1) return 0;
        if (SM && "angleAxis" === SM.axisType && Math.abs(Math.abs(SM.range[1] - SM.range[0]) - 360) <= 1e-6)
          for (var PM = SM.range, nM = 0; nM < aM; nM++) {
            var QM = nM > 0 ? OM[nM - 1].coordinate : OM[aM - 1].coordinate,
              zM = OM[nM].coordinate,
              LM = nM >= aM - 1 ? OM[0].coordinate : OM[nM + 1].coordinate,
              mM = void 0;
            if ((0, la.D)(zM - QM) !== (0, la.D)(LM - zM)) {
              var HM = [];
              if ((0, la.D)(LM - zM) === (0, la.D)(PM[1] - PM[0])) {
                mM = LM;
                var hM = zM + PM[1] - PM[0];
                HM[0] = Math.min(hM, (hM + QM) / 2), HM[1] = Math.max(hM, (hM + QM) / 2)
              } else {
                mM = QM;
                var JM = LM + PM[1] - PM[0];
                HM[0] = Math.min(zM, (JM + zM) / 2), HM[1] = Math.max(zM, (JM + zM) / 2)
              }
              var dM = [Math.min(zM, (mM + zM) / 2), Math.max(zM, (mM + zM) / 2)];
              if (MM > dM[0] && MM <= dM[1] || MM >= HM[0] && MM <= HM[1]) {
                jM = OM[nM].index;
                break
              }
            } else {
              var yM = Math.min(QM, LM),
                lM = Math.max(QM, LM);
              if (MM > (yM + zM) / 2 && MM <= (lM + zM) / 2) {
                jM = OM[nM].index;
                break
              }
            }
          } else
            for (var EM = 0; EM < aM; EM++)
              if (0 === EM && MM <= (iM[EM].coordinate + iM[EM + 1].coordinate) / 2 || EM > 0 && EM < aM - 1 && MM > (iM[EM].coordinate + iM[EM - 1].coordinate) / 2 && MM <= (iM[EM].coordinate + iM[EM + 1].coordinate) / 2 || EM === aM - 1 && MM > (iM[EM].coordinate + iM[EM - 1].coordinate) / 2) {
                jM = iM[EM].index;
                break
              } return jM
      },
      pa = function(MM) {
        var rM, iM, OM = MM.type.displayName,
          SM = null !== (rM = MM.type) && void 0 !== rM && rM.defaultProps ? wa(wa({}, MM.type.defaultProps), MM.props) : MM.props,
          jM = SM.stroke,
          aM = SM.fill;
        switch (OM) {
          case "Line":
            iM = jM;
            break;
          case "Area":
          case "Radar":
            iM = jM && "none" !== jM ? jM : aM;
            break;
          default:
            iM = aM
        }
        return iM
      },
      Wa = function(MM) {
        var rM = MM.barSize,
          iM = MM.totalSize,
          OM = MM.stackGroups,
          SM = void 0 === OM ? {} : OM;
        if (!SM) return {};
        for (var jM = {}, aM = Object.keys(SM), PM = 0, nM = aM.length; PM < nM; PM++)
          for (var QM = SM[aM[PM]].stackGroups, zM = Object.keys(QM), LM = 0, mM = zM.length; LM < mM; LM++) {
            var HM = QM[zM[LM]],
              hM = HM.items,
              JM = HM.cateAxisId,
              dM = hM.filter((function(MM) {
                return (0, Ea.l)(MM.type).indexOf("Bar") >= 0
              }));
            if (dM && dM.length) {
              var yM = dM[0].type.defaultProps,
                lM = void 0 !== yM ? wa(wa({}, yM), dM[0].props) : dM[0].props,
                EM = lM.barSize,
                UM = lM[JM];
              jM[UM] || (jM[UM] = []);
              var GM = tj()(EM) ? rM : EM;
              jM[UM].push({
                item: dM[0],
                stackList: dM.slice(1),
                barSize: tj()(GM) ? void 0 : (0, la.l)(GM, iM, 0)
              })
            }
          }
        return jM
      },
      sa = function(MM) {
        var rM = MM.barGap,
          iM = MM.barCategoryGap,
          OM = MM.bandSize,
          SM = MM.sizeList,
          jM = void 0 === SM ? [] : SM,
          aM = MM.maxBarSize,
          PM = jM.length;
        if (PM < 1) return null;
        var nM, QM = (0, la.l)(rM, OM, 0, !0),
          zM = [];
        if (jM[0].barSize === +jM[0].barSize) {
          var LM = !1,
            mM = OM / PM,
            HM = jM.reduce((function(MM, rM) {
              return MM + rM.barSize || 0
            }), 0);
          (HM += (PM - 1) * QM) >= OM && (HM -= (PM - 1) * QM, QM = 0), HM >= OM && mM > 0 && (LM = !0, HM = PM * (mM *= .9));
          var hM = {
            offset: ((OM - HM) / 2 | 0) - QM,
            size: 0
          };
          nM = jM.reduce((function(MM, rM) {
            var iM = {
                item: rM.item,
                position: {
                  offset: hM.offset + hM.size + QM,
                  size: LM ? mM : rM.barSize
                }
              },
              OM = [].concat(Ca(MM), [iM]);
            return hM = OM[OM.length - 1].position, rM.stackList && rM.stackList.length && rM.stackList.forEach((function(MM) {
              OM.push({
                item: MM,
                position: hM
              })
            })), OM
          }), zM)
        } else {
          var JM = (0, la.l)(iM, OM, 0, !0);
          OM - 2 * JM - (PM - 1) * QM <= 0 && (QM = 0);
          var dM = (OM - 2 * JM - (PM - 1) * QM) / PM;
          dM > 1 && (dM >>= 0);
          var yM = aM === +aM ? Math.min(dM, aM) : dM;
          nM = jM.reduce((function(MM, rM, iM) {
            var OM = [].concat(Ca(MM), [{
              item: rM.item,
              position: {
                offset: JM + (dM + QM) * iM + (dM - yM) / 2,
                size: yM
              }
            }]);
            return rM.stackList && rM.stackList.length && rM.stackList.forEach((function(MM) {
              OM.push({
                item: MM,
                position: OM[OM.length - 1].position
              })
            })), OM
          }), zM)
        }
        return nM
      },
      Da = function(MM, rM, iM, OM) {
        var SM = iM.children,
          jM = iM.width,
          aM = iM.margin,
          PM = jM - (aM.left || 0) - (aM.right || 0),
          nM = (0, Ua.e)({
            children: SM,
            legendWidth: PM
          });
        if (nM) {
          var QM = OM || {},
            zM = QM.width,
            LM = QM.height,
            mM = nM.align,
            HM = nM.verticalAlign,
            hM = nM.layout;
          if (("vertical" === hM || "horizontal" === hM && "middle" === HM) && "center" !== mM && (0, la.y)(MM[mM])) return wa(wa({}, MM), {}, ta({}, mM, MM[mM] + (zM || 0)));
          if (("horizontal" === hM || "vertical" === hM && "center" === mM) && "middle" !== HM && (0, la.y)(MM[HM])) return wa(wa({}, MM), {}, ta({}, HM, MM[HM] + (LM || 0)))
        }
        return MM
      },
      ka = function(MM, rM, iM, OM, SM) {
        var jM = rM.props.children,
          aM = (0, Ea.f)(jM, ya.b).filter((function(MM) {
            return function(MM, rM, iM) {
              return !!tj()(rM) || ("horizontal" === MM ? "yAxis" === rM : "vertical" === MM || "x" === iM ? "xAxis" === rM : "y" !== iM || "yAxis" === rM)
            }(OM, SM, MM.props.direction)
          }));
        if (aM && aM.length) {
          var PM = aM.map((function(MM) {
            return MM.props.dataKey
          }));
          return MM.reduce((function(MM, rM) {
            var OM = ga(rM, iM);
            if (tj()(OM)) return MM;
            var SM = Array.isArray(OM) ? [bj()(OM), Cj()(OM)] : [OM, OM],
              jM = PM.reduce((function(MM, iM) {
                var OM = ga(rM, iM, 0),
                  jM = SM[0] - Math.abs(Array.isArray(OM) ? OM[0] : OM),
                  aM = SM[1] + Math.abs(Array.isArray(OM) ? OM[1] : OM);
                return [Math.min(jM, MM[0]), Math.max(aM, MM[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(jM[0], MM[0]), Math.max(jM[1], MM[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      Za = function(MM, rM, iM, OM, SM) {
        var jM = rM.map((function(rM) {
          return ka(MM, rM, iM, SM, OM)
        })).filter((function(MM) {
          return !tj()(MM)
        }));
        return jM && jM.length ? jM.reduce((function(MM, rM) {
          return [Math.min(MM[0], rM[0]), Math.max(MM[1], rM[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      oa = function(MM, rM, iM, OM, SM) {
        var jM = rM.map((function(rM) {
          var jM = rM.props.dataKey;
          return "number" === iM && jM && ka(MM, rM, jM, OM) || ua(MM, jM, iM, SM)
        }));
        if ("number" === iM) return jM.reduce((function(MM, rM) {
          return [Math.min(MM[0], rM[0]), Math.max(MM[1], rM[1])]
        }), [1 / 0, -1 / 0]);
        var aM = {};
        return jM.reduce((function(MM, rM) {
          for (var iM = 0, OM = rM.length; iM < OM; iM++) aM[rM[iM]] || (aM[rM[iM]] = !0, MM.push(rM[iM]));
          return MM
        }), [])
      },
      fa = function(MM, rM) {
        return "horizontal" === MM && "xAxis" === rM || "vertical" === MM && "yAxis" === rM || "centric" === MM && "angleAxis" === rM || "radial" === MM && "radiusAxis" === rM
      },
      Ya = function(MM, rM, iM, OM) {
        if (OM) return MM.map((function(MM) {
          return MM.coordinate
        }));
        var SM, jM, aM = MM.map((function(MM) {
          return MM.coordinate === rM && (SM = !0), MM.coordinate === iM && (jM = !0), MM.coordinate
        }));
        return SM || aM.push(rM), jM || aM.push(iM), aM
      },
      Na = function(MM, rM, iM) {
        if (!MM) return null;
        var OM = MM.scale,
          SM = MM.duplicateDomain,
          jM = MM.type,
          aM = MM.range,
          PM = "scaleBand" === MM.realScaleType ? OM.bandwidth() / 2 : 2,
          nM = (rM || iM) && "category" === jM && OM.bandwidth ? OM.bandwidth() / PM : 0;
        return nM = "angleAxis" === MM.axisType && (null === aM || void 0 === aM ? void 0 : aM.length) >= 2 ? 2 * (0, la.D)(aM[0] - aM[1]) * nM : nM, rM && (MM.ticks || MM.niceTicks) ? (MM.ticks || MM.niceTicks).map((function(MM) {
          var rM = SM ? SM.indexOf(MM) : MM;
          return {
            coordinate: OM(rM) + nM,
            value: MM,
            offset: nM
          }
        })).filter((function(MM) {
          return !oj()(MM.coordinate)
        })) : MM.isCategorical && MM.categoricalDomain ? MM.categoricalDomain.map((function(MM, rM) {
          return {
            coordinate: OM(MM) + nM,
            value: MM,
            index: rM,
            offset: nM
          }
        })) : OM.ticks && !iM ? OM.ticks(MM.tickCount).map((function(MM) {
          return {
            coordinate: OM(MM) + nM,
            value: MM,
            offset: nM
          }
        })) : OM.domain().map((function(MM, rM) {
          return {
            coordinate: OM(MM) + nM,
            value: SM ? SM[MM] : MM,
            index: rM,
            offset: nM
          }
        }))
      },
      Aa = new WeakMap,
      xa = function(MM, rM) {
        if ("function" !== typeof rM) return MM;
        Aa.has(MM) || Aa.set(MM, new WeakMap);
        var iM = Aa.get(MM);
        if (iM.has(rM)) return iM.get(rM);
        var OM = function() {
          MM.apply(void 0, arguments), rM.apply(void 0, arguments)
        };
        return iM.set(rM, OM), OM
      },
      va = function(MM, rM, iM) {
        var jM = MM.scale,
          aM = MM.type,
          PM = MM.layout,
          nM = MM.axisType;
        if ("auto" === jM) return "radial" === PM && "radiusAxis" === nM ? {
          scale: SM.b(),
          realScaleType: "band"
        } : "radial" === PM && "angleAxis" === nM ? {
          scale: Ir(),
          realScaleType: "linear"
        } : "category" === aM && rM && (rM.indexOf("LineChart") >= 0 || rM.indexOf("AreaChart") >= 0 || rM.indexOf("ComposedChart") >= 0 && !iM) ? {
          scale: SM.c(),
          realScaleType: "point"
        } : "category" === aM ? {
          scale: SM.b(),
          realScaleType: "band"
        } : {
          scale: Ir(),
          realScaleType: "linear"
        };
        if (pj()(jM)) {
          var QM = "scale".concat(Yj()(jM));
          return {
            scale: (OM[QM] || SM.c)(),
            realScaleType: OM[QM] ? QM : "point"
          }
        }
        return uj()(jM) ? {
          scale: jM
        } : {
          scale: SM.c(),
          realScaleType: "point"
        }
      },
      Fa = 1e-4,
      Ba = function(MM) {
        var rM = MM.domain();
        if (rM && !(rM.length <= 2)) {
          var iM = rM.length,
            OM = MM.range(),
            SM = Math.min(OM[0], OM[1]) - Fa,
            jM = Math.max(OM[0], OM[1]) + Fa,
            aM = MM(rM[0]),
            PM = MM(rM[iM - 1]);
          (aM < SM || aM > jM || PM < SM || PM > jM) && MM.domain([rM[0], rM[iM - 1]])
        }
      },
      Xa = function(MM, rM) {
        if (!MM) return null;
        for (var iM = 0, OM = MM.length; iM < OM; iM++)
          if (MM[iM].item === rM) return MM[iM].position;
        return null
      },
      Ia = function(MM, rM) {
        if (!rM || 2 !== rM.length || !(0, la.y)(rM[0]) || !(0, la.y)(rM[1])) return MM;
        var iM = Math.min(rM[0], rM[1]),
          OM = Math.max(rM[0], rM[1]),
          SM = [MM[0], MM[1]];
        return (!(0, la.y)(MM[0]) || MM[0] < iM) && (SM[0] = iM), (!(0, la.y)(MM[1]) || MM[1] > OM) && (SM[1] = OM), SM[0] > OM && (SM[0] = OM), SM[1] < iM && (SM[1] = iM), SM
      },
      Ka = {
        sign: function(MM) {
          var rM = MM.length;
          if (!(rM <= 0))
            for (var iM = 0, OM = MM[0].length; iM < OM; ++iM)
              for (var SM = 0, jM = 0, aM = 0; aM < rM; ++aM) {
                var PM = oj()(MM[aM][iM][1]) ? MM[aM][iM][0] : MM[aM][iM][1];
                PM >= 0 ? (MM[aM][iM][0] = SM, MM[aM][iM][1] = SM + PM, SM = MM[aM][iM][1]) : (MM[aM][iM][0] = jM, MM[aM][iM][1] = jM + PM, jM = MM[aM][iM][1])
              }
        },
        expand: function(MM, rM) {
          if ((OM = MM.length) > 0) {
            for (var iM, OM, SM, jM = 0, aM = MM[0].length; jM < aM; ++jM) {
              for (SM = iM = 0; iM < OM; ++iM) SM += MM[iM][jM][1] || 0;
              if (SM)
                for (iM = 0; iM < OM; ++iM) MM[iM][jM][1] /= SM
            }
            Jj(MM, rM)
          }
        },
        none: Jj,
        silhouette: function(MM, rM) {
          if ((iM = MM.length) > 0) {
            for (var iM, OM = 0, SM = MM[rM[0]], jM = SM.length; OM < jM; ++OM) {
              for (var aM = 0, PM = 0; aM < iM; ++aM) PM += MM[aM][OM][1] || 0;
              SM[OM][1] += SM[OM][0] = -PM / 2
            }
            Jj(MM, rM)
          }
        },
        wiggle: function(MM, rM) {
          if ((SM = MM.length) > 0 && (OM = (iM = MM[rM[0]]).length) > 0) {
            for (var iM, OM, SM, jM = 0, aM = 1; aM < OM; ++aM) {
              for (var PM = 0, nM = 0, QM = 0; PM < SM; ++PM) {
                for (var zM = MM[rM[PM]], LM = zM[aM][1] || 0, mM = (LM - (zM[aM - 1][1] || 0)) / 2, HM = 0; HM < PM; ++HM) {
                  var hM = MM[rM[HM]];
                  mM += (hM[aM][1] || 0) - (hM[aM - 1][1] || 0)
                }
                nM += LM, QM += mM * LM
              }
              iM[aM - 1][1] += iM[aM - 1][0] = jM, nM && (jM -= QM / nM)
            }
            iM[aM - 1][1] += iM[aM - 1][0] = jM, Jj(MM, rM)
          }
        },
        positive: function(MM) {
          var rM = MM.length;
          if (!(rM <= 0))
            for (var iM = 0, OM = MM[0].length; iM < OM; ++iM)
              for (var SM = 0, jM = 0; jM < rM; ++jM) {
                var aM = oj()(MM[jM][iM][1]) ? MM[jM][iM][0] : MM[jM][iM][1];
                aM >= 0 ? (MM[jM][iM][0] = SM, MM[jM][iM][1] = SM + aM, SM = MM[jM][iM][1]) : (MM[jM][iM][0] = 0, MM[jM][iM][1] = 0)
              }
        }
      },
      qa = function(MM, rM, iM) {
        var OM = rM.map((function(MM) {
            return MM.props.dataKey
          })),
          SM = Ka[iM],
          jM = function() {
            var MM = (0, yj.c)([]),
              rM = lj,
              iM = Jj,
              OM = Ej;

            function SM(SM) {
              var jM, aM, PM = Array.from(MM.apply(this, arguments), Uj),
                nM = PM.length,
                QM = -1;
              for (const MM of SM)
                for (jM = 0, ++QM; jM < nM; ++jM)(PM[jM][QM] = [0, +OM(MM, PM[jM].key, QM, SM)]).data = MM;
              for (jM = 0, aM = (0, dj.e)(rM(PM)); jM < nM; ++jM) PM[aM[jM]].index = jM;
              return iM(PM, aM), PM
            }
            return SM.keys = function(rM) {
              return arguments.length ? (MM = "function" === typeof rM ? rM : (0, yj.c)(Array.from(rM)), SM) : MM
            }, SM.value = function(MM) {
              return arguments.length ? (OM = "function" === typeof MM ? MM : (0, yj.c)(+MM), SM) : OM
            }, SM.order = function(MM) {
              return arguments.length ? (rM = null == MM ? lj : "function" === typeof MM ? MM : (0, yj.c)(Array.from(MM)), SM) : rM
            }, SM.offset = function(MM) {
              return arguments.length ? (iM = null == MM ? Jj : MM, SM) : iM
            }, SM
          }().keys(OM).value((function(MM, rM) {
            return +ga(MM, rM, 0)
          })).order(lj).offset(SM);
        return jM(MM)
      },
      Ta = function(MM, rM, iM, OM, SM, jM) {
        if (!MM) return null;
        var aM = (jM ? rM.reverse() : rM).reduce((function(MM, rM) {
          var SM, jM = null !== (SM = rM.type) && void 0 !== SM && SM.defaultProps ? wa(wa({}, rM.type.defaultProps), rM.props) : rM.props,
            aM = jM.stackId;
          if (jM.hide) return MM;
          var PM = jM[iM],
            nM = MM[PM] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, la.x)(aM)) {
            var QM = nM.stackGroups[aM] || {
              numericAxisId: iM,
              cateAxisId: OM,
              items: []
            };
            QM.items.push(rM), nM.hasStack = !0, nM.stackGroups[aM] = QM
          } else nM.stackGroups[(0, la.G)("_stackId_")] = {
            numericAxisId: iM,
            cateAxisId: OM,
            items: [rM]
          };
          return wa(wa({}, MM), {}, ta({}, PM, nM))
        }), {});
        return Object.keys(aM).reduce((function(rM, jM) {
          var PM = aM[jM];
          if (PM.hasStack) {
            PM.stackGroups = Object.keys(PM.stackGroups).reduce((function(rM, jM) {
              var aM = PM.stackGroups[jM];
              return wa(wa({}, rM), {}, ta({}, jM, {
                numericAxisId: iM,
                cateAxisId: OM,
                items: aM.items,
                stackedData: qa(MM, aM.items, SM)
              }))
            }), {})
          }
          return wa(wa({}, rM), {}, ta({}, jM, PM))
        }), {})
      },
      Va = function(MM, rM) {
        var iM = rM.realScaleType,
          OM = rM.type,
          SM = rM.tickCount,
          jM = rM.originalDomain,
          aM = rM.allowDecimals,
          PM = iM || rM.scale;
        if ("auto" !== PM && "linear" !== PM) return null;
        if (SM && "number" === OM && jM && ("auto" === jM[0] || "auto" === jM[1])) {
          var nM = MM.domain();
          if (!nM.length) return null;
          var QM = Ja(nM, SM, aM);
          return MM.domain([bj()(QM), Cj()(QM)]), {
            niceTicks: QM
          }
        }
        if (SM && "number" === OM) {
          var zM = MM.domain();
          return {
            niceTicks: da(zM, SM, aM)
          }
        }
        return null
      };

    function ca(MM) {
      var rM = MM.axis,
        iM = MM.ticks,
        OM = MM.bandSize,
        SM = MM.entry,
        jM = MM.index,
        aM = MM.dataKey;
      if ("category" === rM.type) {
        if (!rM.allowDuplicatedCategory && rM.dataKey && !tj()(SM[rM.dataKey])) {
          var PM = (0, la.d)(iM, "value", SM[rM.dataKey]);
          if (PM) return PM.coordinate + OM / 2
        }
        return iM[jM] ? iM[jM].coordinate + OM / 2 : null
      }
      var nM = ga(SM, tj()(aM) ? rM.dataKey : aM);
      return tj()(nM) ? null : rM.scale(nM)
    }
    var MP = function(MM) {
        var rM = MM.axis,
          iM = MM.ticks,
          OM = MM.offset,
          SM = MM.bandSize,
          jM = MM.entry,
          aM = MM.index;
        if ("category" === rM.type) return iM[aM] ? iM[aM].coordinate + OM : null;
        var PM = ga(jM, rM.dataKey, rM.domain[aM]);
        return tj()(PM) ? null : rM.scale(PM) - SM / 2 + OM
      },
      rP = function(MM) {
        var rM = MM.numericAxis,
          iM = rM.scale.domain();
        if ("number" === rM.type) {
          var OM = Math.min(iM[0], iM[1]),
            SM = Math.max(iM[0], iM[1]);
          return OM <= 0 && SM >= 0 ? 0 : SM < 0 ? SM : OM
        }
        return iM[0]
      },
      iP = function(MM, rM) {
        var iM, OM = (null !== (iM = MM.type) && void 0 !== iM && iM.defaultProps ? wa(wa({}, MM.type.defaultProps), MM.props) : MM.props).stackId;
        if ((0, la.x)(OM)) {
          var SM = rM[OM];
          if (SM) {
            var jM = SM.items.indexOf(MM);
            return jM >= 0 ? SM.stackedData[jM] : null
          }
        }
        return null
      },
      OP = function(MM, rM, iM) {
        return Object.keys(MM).reduce((function(OM, SM) {
          var jM = MM[SM].stackedData.reduce((function(MM, OM) {
            var SM = OM.slice(rM, iM + 1).reduce((function(MM, rM) {
              return [bj()(rM.concat([MM[0]]).filter(la.y)), Cj()(rM.concat([MM[1]]).filter(la.y))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(MM[0], SM[0]), Math.max(MM[1], SM[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(jM[0], OM[0]), Math.max(jM[1], OM[1])]
        }), [1 / 0, -1 / 0]).map((function(MM) {
          return MM === 1 / 0 || MM === -1 / 0 ? 0 : MM
        }))
      },
      SP = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      jP = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      aP = function(MM, rM, iM) {
        if (uj()(MM)) return MM(rM, iM);
        if (!Array.isArray(MM)) return rM;
        var OM = [];
        if ((0, la.y)(MM[0])) OM[0] = iM ? MM[0] : Math.min(MM[0], rM[0]);
        else if (SP.test(MM[0])) {
          var SM = +SP.exec(MM[0])[1];
          OM[0] = rM[0] - SM
        } else uj()(MM[0]) ? OM[0] = MM[0](rM[0]) : OM[0] = rM[0];
        if ((0, la.y)(MM[1])) OM[1] = iM ? MM[1] : Math.max(MM[1], rM[1]);
        else if (jP.test(MM[1])) {
          var jM = +jP.exec(MM[1])[1];
          OM[1] = rM[1] + jM
        } else uj()(MM[1]) ? OM[1] = MM[1](rM[1]) : OM[1] = rM[1];
        return OM
      },
      PP = function(MM, rM, iM) {
        if (MM && MM.scale && MM.scale.bandwidth) {
          var OM = MM.scale.bandwidth();
          if (!iM || OM > 0) return OM
        }
        if (MM && rM && rM.length >= 2) {
          for (var SM = vj()(rM, (function(MM) {
              return MM.coordinate
            })), jM = 1 / 0, aM = 1, PM = SM.length; aM < PM; aM++) {
            var nM = SM[aM],
              QM = SM[aM - 1];
            jM = Math.min((nM.coordinate || 0) - (QM.coordinate || 0), jM)
          }
          return jM === 1 / 0 ? 0 : jM
        }
        return iM ? void 0 : 0
      },
      nP = function(MM, rM, iM) {
        return MM && MM.length ? Aj()(MM, sj()(iM, "type.defaultProps.domain")) ? rM : MM : rM
      },
      QP = function(MM, rM) {
        var iM = MM.type.defaultProps ? wa(wa({}, MM.type.defaultProps), MM.props) : MM.props,
          OM = iM.dataKey,
          SM = iM.name,
          jM = iM.unit,
          aM = iM.formatter,
          PM = iM.tooltipType,
          nM = iM.chartType,
          QM = iM.hide;
        return wa(wa({}, (0, Ea.b)(MM, !1)), {}, {
          dataKey: OM,
          unit: jM,
          formatter: aM,
          name: SM || OM,
          color: pa(MM),
          value: ga(rM, OM),
          type: PM,
          payload: rM,
          chartType: nM,
          hide: QM
        })
      }
  },
  6589: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM,
      f: () => LM
    });
    var OM = iM(6438);

    function SM(MM) {
      return SM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, SM(MM)
    }

    function jM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function aM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? jM(Object(iM), !0).forEach((function(rM) {
          PM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : jM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function PM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != SM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != SM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == SM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var nM = {
        widthCache: {},
        cacheCount: 0
      },
      QM = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      zM = "recharts_measurement_span";
    var LM = function(MM) {
        var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === MM || null === MM || OM.d.isSsr) return {
          width: 0,
          height: 0
        };
        var iM = function(MM) {
            var rM = aM({}, MM);
            return Object.keys(rM).forEach((function(MM) {
              rM[MM] || delete rM[MM]
            })), rM
          }(rM),
          SM = JSON.stringify({
            text: MM,
            copyStyle: iM
          });
        if (nM.widthCache[SM]) return nM.widthCache[SM];
        try {
          var jM = document.getElementById(zM);
          jM || ((jM = document.createElement("span")).setAttribute("id", zM), jM.setAttribute("aria-hidden", "true"), document.body.appendChild(jM));
          var PM = aM(aM({}, QM), iM);
          Object.assign(jM.style, PM), jM.textContent = "".concat(MM);
          var LM = jM.getBoundingClientRect(),
            mM = {
              width: LM.width,
              height: LM.height
            };
          return nM.widthCache[SM] = mM, ++nM.cacheCount > 2e3 && (nM.cacheCount = 0, nM.widthCache = {}), mM
        } catch (HM) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      mM = function(MM) {
        return {
          top: MM.top + window.scrollY - document.documentElement.clientTop,
          left: MM.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  5595: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => hM,
      D: () => HM,
      G: () => EM,
      c: () => tM,
      d: () => bM,
      f: () => GM,
      i: () => wM,
      l: () => UM,
      o: () => CM,
      s: () => eM,
      t: () => dM,
      x: () => yM,
      y: () => JM
    });
    var OM = iM(5603),
      SM = iM.n(OM),
      jM = iM(5618),
      aM = iM.n(jM),
      PM = iM(5625),
      nM = iM.n(PM),
      QM = iM(5620),
      zM = iM.n(QM),
      LM = iM(5864),
      mM = iM.n(LM),
      HM = function(MM) {
        return 0 === MM ? 0 : MM > 0 ? 1 : -1
      },
      hM = function(MM) {
        return SM()(MM) && MM.indexOf("%") === MM.length - 1
      },
      JM = function(MM) {
        return zM()(MM) && !aM()(MM)
      },
      dM = function(MM) {
        return mM()(MM)
      },
      yM = function(MM) {
        return JM(MM) || SM()(MM)
      },
      lM = 0,
      EM = function(MM) {
        var rM = ++lM;
        return "".concat(MM || "").concat(rM)
      },
      UM = function(MM, rM) {
        var iM, OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          jM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!JM(MM) && !SM()(MM)) return OM;
        if (hM(MM)) {
          var PM = MM.indexOf("%");
          iM = rM * parseFloat(MM.slice(0, PM)) / 100
        } else iM = +MM;
        return aM()(iM) && (iM = OM), jM && iM > rM && (iM = rM), iM
      },
      GM = function(MM) {
        if (!MM) return null;
        var rM = Object.keys(MM);
        return rM && rM.length ? MM[rM[0]] : null
      },
      CM = function(MM) {
        if (!Array.isArray(MM)) return !1;
        for (var rM = MM.length, iM = {}, OM = 0; OM < rM; OM++) {
          if (iM[MM[OM]]) return !0;
          iM[MM[OM]] = !0
        }
        return !1
      },
      eM = function(MM, rM) {
        return JM(MM) && JM(rM) ? function(iM) {
          return MM + iM * (rM - MM)
        } : function() {
          return rM
        }
      };

    function bM(MM, rM, iM) {
      return MM && MM.length ? MM.find((function(MM) {
        return MM && ("function" === typeof rM ? rM(MM) : nM()(MM, rM)) === iM
      })) : null
    }
    var wM = function(MM) {
        if (!MM || !MM.length) return null;
        for (var rM = MM.length, iM = 0, OM = 0, SM = 0, jM = 0, aM = 1 / 0, PM = -1 / 0, nM = 0, QM = 0, zM = 0; zM < rM; zM++) iM += nM = MM[zM].cx || 0, OM += QM = MM[zM].cy || 0, SM += nM * QM, jM += nM * nM, aM = Math.min(aM, nM), PM = Math.max(PM, nM);
        var LM = rM * jM !== iM * iM ? (rM * SM - iM * OM) / (rM * jM - iM * iM) : 0;
        return {
          xmin: aM,
          xmax: PM,
          a: LM,
          b: (OM - LM * iM) / rM
        }
      },
      tM = function(MM, rM) {
        return JM(MM) && JM(rM) ? MM - rM : SM()(MM) && SM()(rM) ? MM.localeCompare(rM) : MM instanceof Date && rM instanceof Date ? MM.getTime() - rM.getTime() : String(MM).localeCompare(String(rM))
      }
  },
  6438: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    var OM = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(MM) {
        return OM[MM]
      },
      set: function(MM, rM) {
        if ("string" === typeof MM) OM[MM] = rM;
        else {
          var iM = Object.keys(MM);
          iM && iM.length && iM.forEach((function(rM) {
            OM[rM] = MM[rM]
          }))
        }
      }
    }
  },
  6702: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    var OM = function(MM, rM) {
      var iM = MM.alwaysShow,
        OM = MM.ifOverflow;
      return iM && (OM = "extendDomain"), OM === rM
    }
  },
  5873: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    var OM = function(MM, rM) {
      for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM]
    }
  },
  6695: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      h: () => mM,
      i: () => QM
    });
    iM(5864), iM(44), iM(5712);

    function OM(MM) {
      return OM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, OM(MM)
    }

    function SM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function jM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? SM(Object(iM), !0).forEach((function(rM) {
          aM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : SM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function aM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != OM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var SM = iM.call(MM, rM || "default");
            if ("object" != OM(SM)) return SM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == OM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var PM = Math.PI / 180,
      nM = function(MM) {
        return 180 * MM / Math.PI
      },
      QM = function(MM, rM, iM, OM) {
        return {
          x: MM + Math.cos(-PM * OM) * iM,
          y: rM + Math.sin(-PM * OM) * iM
        }
      },
      zM = function(MM, rM) {
        var iM = MM.x,
          OM = MM.y,
          SM = rM.cx,
          jM = rM.cy,
          aM = function(MM, rM) {
            var iM = MM.x,
              OM = MM.y,
              SM = rM.x,
              jM = rM.y;
            return Math.sqrt(Math.pow(iM - SM, 2) + Math.pow(OM - jM, 2))
          }({
            x: iM,
            y: OM
          }, {
            x: SM,
            y: jM
          });
        if (aM <= 0) return {
          radius: aM
        };
        var PM = (iM - SM) / aM,
          QM = Math.acos(PM);
        return OM > jM && (QM = 2 * Math.PI - QM), {
          radius: aM,
          angle: nM(QM),
          angleInRadian: QM
        }
      },
      LM = function(MM, rM) {
        var iM = rM.startAngle,
          OM = rM.endAngle,
          SM = Math.floor(iM / 360),
          jM = Math.floor(OM / 360);
        return MM + 360 * Math.min(SM, jM)
      },
      mM = function(MM, rM) {
        var iM = MM.x,
          OM = MM.y,
          SM = zM({
            x: iM,
            y: OM
          }, rM),
          aM = SM.radius,
          PM = SM.angle,
          nM = rM.innerRadius,
          QM = rM.outerRadius;
        if (aM < nM || aM > QM) return !1;
        if (0 === aM) return !0;
        var mM, HM = function(MM) {
            var rM = MM.startAngle,
              iM = MM.endAngle,
              OM = Math.floor(rM / 360),
              SM = Math.floor(iM / 360),
              jM = Math.min(OM, SM);
            return {
              startAngle: rM - 360 * jM,
              endAngle: iM - 360 * jM
            }
          }(rM),
          hM = HM.startAngle,
          JM = HM.endAngle,
          dM = PM;
        if (hM <= JM) {
          for (; dM > JM;) dM -= 360;
          for (; dM < hM;) dM += 360;
          mM = dM >= hM && dM <= JM
        } else {
          for (; dM > hM;) dM -= 360;
          for (; dM < JM;) dM += 360;
          mM = dM >= JM && dM <= hM
        }
        return mM ? jM(jM({}, rM), {}, {
          radius: aM,
          angle: LM(dM, rM)
        }) : null
      }
  },
  5876: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => YM,
      F: () => oM,
      G: () => RM,
      b: () => DM,
      f: () => gM,
      h: () => uM,
      l: () => eM,
      p: () => fM,
      t: () => sM,
      x: () => kM
    });
    var OM = iM(5625),
      SM = iM.n(OM),
      jM = iM(5864),
      aM = iM.n(jM),
      PM = iM(5603),
      nM = iM.n(PM),
      QM = iM(5712),
      zM = iM.n(QM),
      LM = iM(5514),
      mM = iM.n(LM),
      HM = iM(44),
      hM = iM(5880),
      JM = iM(5595),
      dM = iM(5889),
      yM = iM(5898),
      lM = ["children"],
      EM = ["children"];

    function UM(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if (Object.prototype.hasOwnProperty.call(MM, OM)) {
            if (rM.indexOf(OM) >= 0) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }

    function GM(MM) {
      return GM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, GM(MM)
    }
    var CM = {
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
      eM = function(MM) {
        return "string" === typeof MM ? MM : MM ? MM.displayName || MM.name || "Component" : ""
      },
      bM = null,
      wM = null,
      tM = function MM(rM) {
        if (rM === bM && Array.isArray(wM)) return wM;
        var iM = [];
        return HM.Children.forEach(rM, (function(rM) {
          aM()(rM) || ((0, hM.isFragment)(rM) ? iM = iM.concat(MM(rM.props.children)) : iM.push(rM))
        })), wM = iM, bM = rM, iM
      };

    function gM(MM, rM) {
      var iM = [],
        OM = [];
      return OM = Array.isArray(rM) ? rM.map((function(MM) {
        return eM(MM)
      })) : [eM(rM)], tM(MM).forEach((function(MM) {
        var rM = SM()(MM, "type.displayName") || SM()(MM, "type.name"); - 1 !== OM.indexOf(rM) && iM.push(MM)
      })), iM
    }

    function uM(MM, rM) {
      var iM = gM(MM, rM);
      return iM && iM[0]
    }
    var RM = function(MM) {
        if (!MM || !MM.props) return !1;
        var rM = MM.props,
          iM = rM.width,
          OM = rM.height;
        return !(!(0, JM.y)(iM) || iM <= 0 || !(0, JM.y)(OM) || OM <= 0)
      },
      pM = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      WM = function(MM) {
        return MM && MM.type && nM()(MM.type) && pM.indexOf(MM.type) >= 0
      },
      sM = function(MM) {
        return MM && "object" === GM(MM) && "clipDot" in MM
      },
      DM = function(MM, rM, iM) {
        if (!MM || "function" === typeof MM || "boolean" === typeof MM) return null;
        var OM = MM;
        if ((0, HM.isValidElement)(MM) && (OM = MM.props), !mM()(OM)) return null;
        var SM = {};
        return Object.keys(OM).forEach((function(MM) {
          var jM;
          (function(MM, rM, iM, OM) {
            var SM, jM = null !== (SM = null === yM.e || void 0 === yM.e ? void 0 : yM.e[OM]) && void 0 !== SM ? SM : [];
            return rM.startsWith("data-") || !zM()(MM) && (OM && jM.includes(rM) || yM.i.includes(rM)) || iM && yM.b.includes(rM)
          })(null === (jM = OM) || void 0 === jM ? void 0 : jM[MM], MM, rM, iM) && (SM[MM] = OM[MM])
        })), SM
      },
      kM = function MM(rM, iM) {
        if (rM === iM) return !0;
        var OM = HM.Children.count(rM);
        if (OM !== HM.Children.count(iM)) return !1;
        if (0 === OM) return !0;
        if (1 === OM) return ZM(Array.isArray(rM) ? rM[0] : rM, Array.isArray(iM) ? iM[0] : iM);
        for (var SM = 0; SM < OM; SM++) {
          var jM = rM[SM],
            aM = iM[SM];
          if (Array.isArray(jM) || Array.isArray(aM)) {
            if (!MM(jM, aM)) return !1
          } else if (!ZM(jM, aM)) return !1
        }
        return !0
      },
      ZM = function(MM, rM) {
        if (aM()(MM) && aM()(rM)) return !0;
        if (!aM()(MM) && !aM()(rM)) {
          var iM = MM.props || {},
            OM = iM.children,
            SM = UM(iM, lM),
            jM = rM.props || {},
            PM = jM.children,
            nM = UM(jM, EM);
          return OM && PM ? (0, dM.e)(SM, nM) && kM(OM, PM) : !OM && !PM && (0, dM.e)(SM, nM)
        }
        return !1
      },
      oM = function(MM, rM) {
        var iM = [],
          OM = {};
        return tM(MM).forEach((function(MM, SM) {
          if (WM(MM)) iM.push(MM);
          else if (MM) {
            var jM = eM(MM.type),
              aM = rM[jM] || {},
              PM = aM.handler,
              nM = aM.once;
            if (PM && (!nM || !OM[jM])) {
              var QM = PM(MM, jM, SM);
              iM.push(QM), OM[jM] = !0
            }
          }
        })), iM
      },
      fM = function(MM) {
        var rM = MM && MM.type;
        return rM && CM[rM] ? CM[rM] : null
      },
      YM = function(MM, rM) {
        return tM(rM).indexOf(MM)
      }
  },
  5889: (MM, rM, iM) => {
    function OM(MM, rM) {
      for (var iM in MM)
        if ({}.hasOwnProperty.call(MM, iM) && (!{}.hasOwnProperty.call(rM, iM) || MM[iM] !== rM[iM])) return !1;
      for (var OM in rM)
        if ({}.hasOwnProperty.call(rM, OM) && !{}.hasOwnProperty.call(MM, OM)) return !1;
      return !0
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  6682: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => zM
    });
    var OM = iM(6513),
      SM = iM(6598),
      jM = iM(5876);

    function aM(MM) {
      return aM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, aM(MM)
    }

    function PM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function nM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? PM(Object(iM), !0).forEach((function(rM) {
          QM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : PM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function QM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != aM(MM) || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != aM(OM)) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == aM(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var zM = function(MM) {
      var rM = MM.children,
        iM = MM.formattedGraphicalItems,
        aM = MM.legendWidth,
        PM = MM.legendContent,
        QM = (0, jM.h)(rM, OM.d);
      if (!QM) return null;
      var zM, LM = OM.d.defaultProps,
        mM = void 0 !== LM ? nM(nM({}, LM), QM.props) : {};
      return zM = QM.props && QM.props.payload ? QM.props && QM.props.payload : "children" === PM ? (iM || []).reduce((function(MM, rM) {
        var iM = rM.item,
          OM = rM.props,
          SM = OM.sectors || OM.data || [];
        return MM.concat(SM.map((function(MM) {
          return {
            type: QM.props.iconType || iM.props.legendType,
            value: MM.name,
            color: MM.fill,
            payload: MM
          }
        })))
      }), []) : (iM || []).map((function(MM) {
        var rM = MM.item,
          iM = rM.type.defaultProps,
          OM = void 0 !== iM ? nM(nM({}, iM), rM.props) : {},
          jM = OM.dataKey,
          aM = OM.name,
          PM = OM.legendType;
        return {
          inactive: OM.hide,
          dataKey: jM,
          type: mM.iconType || PM || "square",
          color: (0, SM.Q)(rM),
          value: aM || jM,
          payload: OM
        }
      })), nM(nM(nM({}, mM), OM.d.getWithHeight(QM, aM)), {}, {
        payload: zM,
        item: QM
      })
    }
  },
  6446: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM
    });
    var OM = iM(6455),
      SM = iM.n(OM),
      jM = iM(5712),
      aM = iM.n(jM);

    function PM(MM, rM, iM) {
      return !0 === rM ? SM()(MM, iM) : aM()(rM) ? SM()(MM, rM) : MM
    }
  },
  5898: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      e: () => QM,
      i: () => PM,
      k: () => LM,
      l: () => mM
    });
    var OM = iM(44),
      SM = iM(5514),
      jM = iM.n(SM);

    function aM(MM) {
      return aM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, aM(MM)
    }
    var PM = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "JL", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      nM = ["points", "pathLength"],
      QM = {
        svg: ["viewBox", "children"],
        polygon: nM,
        polyline: nM
      },
      zM = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      LM = function(MM, rM) {
        if (!MM || "function" === typeof MM || "boolean" === typeof MM) return null;
        var iM = MM;
        if ((0, OM.isValidElement)(MM) && (iM = MM.props), !jM()(iM)) return null;
        var SM = {};
        return Object.keys(iM).forEach((function(MM) {
          zM.includes(MM) && (SM[MM] = rM || function(rM) {
            return iM[MM](iM, rM)
          })
        })), SM
      },
      mM = function(MM, rM, iM) {
        if (!jM()(MM) || "object" !== aM(MM)) return null;
        var OM = null;
        return Object.keys(MM).forEach((function(SM) {
          var jM = MM[SM];
          zM.includes(SM) && "function" === typeof jM && (OM || (OM = {}), OM[SM] = function(MM, rM, iM) {
            return function(OM) {
              return MM(rM, iM, OM), null
            }
          }(jM, rM, iM))
        })), OM
      }
  },
  5884: (MM, rM) => {
    var iM, OM = Symbol.for("react.element"),
      SM = Symbol.for("react.portal"),
      jM = Symbol.for("react.fragment"),
      aM = Symbol.for("react.strict_mode"),
      PM = Symbol.for("react.profiler"),
      nM = Symbol.for("react.provider"),
      QM = Symbol.for("react.context"),
      zM = Symbol.for("react.server_context"),
      LM = Symbol.for("react.forward_ref"),
      mM = Symbol.for("react.suspense"),
      HM = Symbol.for("react.suspense_list"),
      hM = Symbol.for("react.memo"),
      JM = Symbol.for("react.lazy"),
      dM = Symbol.for("react.offscreen");

    function yM(MM) {
      if ("object" === typeof MM && null !== MM) {
        var rM = MM.$$typeof;
        switch (rM) {
          case OM:
            switch (MM = MM.type) {
              case jM:
              case PM:
              case aM:
              case mM:
              case HM:
                return MM;
              default:
                switch (MM = MM && MM.$$typeof) {
                  case zM:
                  case QM:
                  case LM:
                  case JM:
                  case hM:
                  case nM:
                    return MM;
                  default:
                    return rM
                }
            }
          case SM:
            return rM
        }
      }
    }
    iM = Symbol.for("react.module.reference"), rM.isFragment = function(MM) {
      return yM(MM) === jM
    }
  },
  5880: (MM, rM, iM) => {
    MM.exports = iM(5884)
  },
  5491: (MM, rM, iM) => {
    function OM(MM) {
      var rM, iM, SM = "";
      if ("string" == typeof MM || "number" == typeof MM) SM += MM;
      else if ("object" == typeof MM)
        if (Array.isArray(MM)) {
          var jM = MM.length;
          for (rM = 0; rM < jM; rM++) MM[rM] && (iM = OM(MM[rM])) && (SM && (SM += " "), SM += iM)
        } else
          for (iM in MM) MM[iM] && (SM && (SM += " "), SM += iM);
      return SM
    }
    iM.d(rM, {
      b: () => SM
    });
    const SM = function() {
      for (var MM, rM, iM = 0, SM = "", jM = arguments.length; iM < jM; iM++)(MM = arguments[iM]) && (rM = OM(MM)) && (SM && (SM += " "), SM += rM);
      return SM
    }
  },
  6607: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      c: () => PM
    });
    var OM = iM(6615),
      SM = iM(6620);

    function jM() {
      var MM, rM, iM = (0, SM.c)().unknown(void 0),
        aM = iM.domain,
        PM = iM.range,
        nM = 0,
        QM = 1,
        zM = !1,
        LM = 0,
        mM = 0,
        HM = .5;

      function hM() {
        var iM = aM().length,
          OM = QM < nM,
          SM = OM ? QM : nM,
          jM = OM ? nM : QM;
        MM = (jM - SM) / Math.max(1, iM - LM + 2 * mM), zM && (MM = Math.floor(MM)), SM += (jM - SM - MM * (iM - LM)) * HM, rM = MM * (1 - LM), zM && (SM = Math.round(SM), rM = Math.round(rM));
        var hM = function(MM, rM, iM) {
          MM = +MM, rM = +rM, iM = (SM = arguments.length) < 2 ? (rM = MM, MM = 0, 1) : SM < 3 ? 1 : +iM;
          for (var OM = -1, SM = 0 | Math.max(0, Math.ceil((rM - MM) / iM)), jM = new Array(SM); ++OM < SM;) jM[OM] = MM + OM * iM;
          return jM
        }(iM).map((function(rM) {
          return SM + MM * rM
        }));
        return PM(OM ? hM.reverse() : hM)
      }
      return delete iM.unknown, iM.domain = function(MM) {
        return arguments.length ? (aM(MM), hM()) : aM()
      }, iM.range = function(MM) {
        return arguments.length ? ([nM, QM] = MM, nM = +nM, QM = +QM, hM()) : [nM, QM]
      }, iM.rangeRound = function(MM) {
        return [nM, QM] = MM, nM = +nM, QM = +QM, zM = !0, hM()
      }, iM.bandwidth = function() {
        return rM
      }, iM.step = function() {
        return MM
      }, iM.round = function(MM) {
        return arguments.length ? (zM = !!MM, hM()) : zM
      }, iM.padding = function(MM) {
        return arguments.length ? (LM = Math.min(1, mM = +MM), hM()) : LM
      }, iM.paddingInner = function(MM) {
        return arguments.length ? (LM = Math.min(1, MM), hM()) : LM
      }, iM.paddingOuter = function(MM) {
        return arguments.length ? (mM = +MM, hM()) : mM
      }, iM.align = function(MM) {
        return arguments.length ? (HM = Math.max(0, Math.min(1, MM)), hM()) : HM
      }, iM.copy = function() {
        return jM(aM(), [nM, QM]).round(zM).paddingInner(LM).paddingOuter(mM).align(HM)
      }, OM.f.apply(hM(), arguments)
    }

    function aM(MM) {
      var rM = MM.copy;
      return MM.padding = MM.paddingOuter, delete MM.paddingInner, delete MM.paddingOuter, MM.copy = function() {
        return aM(rM())
      }, MM
    }

    function PM() {
      return aM(jM.apply(null, arguments).paddingInner(1))
    }
  },
  6615: (MM, rM, iM) => {
    function OM(MM, rM) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(MM);
          break;
        default:
          this.range(rM).domain(MM)
      }
      return this
    }

    function SM(MM, rM) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof MM ? this.interpolator(MM) : this.range(MM);
          break;
        default:
          this.domain(MM), "function" === typeof rM ? this.interpolator(rM) : this.range(rM)
      }
      return this
    }
    iM.d(rM, {
      b: () => SM,
      f: () => OM
    })
  },
  6620: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM,
      f: () => QM
    });
    class OM extends Map {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PM;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: rM
            }
          }), null != MM)
          for (const [iM, OM] of MM) this.set(iM, OM)
      }
      get(MM) {
        return super.get(SM(this, MM))
      }
      has(MM) {
        return super.has(SM(this, MM))
      }
      set(MM, rM) {
        return super.set(jM(this, MM), rM)
      }
      delete(MM) {
        return super.delete(aM(this, MM))
      }
    }
    Set;

    function SM(MM, rM) {
      let {
        _intern: iM,
        _key: OM
      } = MM;
      const SM = OM(rM);
      return iM.has(SM) ? iM.get(SM) : rM
    }

    function jM(MM, rM) {
      let {
        _intern: iM,
        _key: OM
      } = MM;
      const SM = OM(rM);
      return iM.has(SM) ? iM.get(SM) : (iM.set(SM, rM), rM)
    }

    function aM(MM, rM) {
      let {
        _intern: iM,
        _key: OM
      } = MM;
      const SM = OM(rM);
      return iM.has(SM) && (rM = iM.get(SM), iM.delete(SM)), rM
    }

    function PM(MM) {
      return null !== MM && "object" === typeof MM ? MM.valueOf() : MM
    }
    var nM = iM(6615);
    const QM = Symbol("implicit");

    function zM() {
      var MM = new OM,
        rM = [],
        iM = [],
        SM = QM;

      function jM(OM) {
        let jM = MM.get(OM);
        if (void 0 === jM) {
          if (SM !== QM) return SM;
          MM.set(OM, jM = rM.push(OM) - 1)
        }
        return iM[jM % iM.length]
      }
      return jM.domain = function(iM) {
        if (!arguments.length) return rM.slice();
        rM = [], MM = new OM;
        for (const OM of iM) MM.has(OM) || MM.set(OM, rM.push(OM) - 1);
        return jM
      }, jM.range = function(MM) {
        return arguments.length ? (iM = Array.from(MM), jM) : iM.slice()
      }, jM.unknown = function(MM) {
        return arguments.length ? (SM = MM, jM) : SM
      }, jM.copy = function() {
        return zM(rM, iM).unknown(SM)
      }, nM.f.apply(jM, arguments), jM
    }
  },
  6686: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    Array.prototype.slice;

    function OM(MM) {
      return "object" === typeof MM && "length" in MM ? MM : Array.from(MM)
    }
  },
  6563: (MM, rM, iM) => {
    function OM(MM) {
      return function() {
        return MM
      }
    }
    iM.d(rM, {
      c: () => OM
    })
  },
  6568: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM
    });
    const OM = Math.PI,
      SM = 2 * OM,
      jM = 1e-6,
      aM = SM - jM;

    function PM(MM) {
      this._ += MM[0];
      for (let rM = 1, iM = MM.length; rM < iM; ++rM) this._ += arguments[rM] + MM[rM]
    }
    class nM {
      constructor(MM) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == MM ? PM : function(MM) {
          let rM = Math.floor(MM);
          if (!(rM >= 0)) throw new Error(`invalid digits: ${MM}`);
          if (rM > 15) return PM;
          const iM = 10 ** rM;
          return function(MM) {
            this._ += MM[0];
            for (let rM = 1, OM = MM.length; rM < OM; ++rM) this._ += Math.round(arguments[rM] * iM) / iM + MM[rM]
          }
        }(MM)
      }
      moveTo(MM, rM) {
        this._append`M${this._x0=this._x1=+MM},${this._y0=this._y1=+rM}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(MM, rM) {
        this._append`L${this._x1=+MM},${this._y1=+rM}`
      }
      quadraticCurveTo(MM, rM, iM, OM) {
        this._append`Q${+MM},${+rM},${this._x1=+iM},${this._y1=+OM}`
      }
      bezierCurveTo(MM, rM, iM, OM, SM, jM) {
        this._append`C${+MM},${+rM},${+iM},${+OM},${this._x1=+SM},${this._y1=+jM}`
      }
      arcTo(MM, rM, iM, SM, aM) {
        if (MM = +MM, rM = +rM, iM = +iM, SM = +SM, (aM = +aM) < 0) throw new Error(`negative radius: ${aM}`);
        let PM = this._x1,
          nM = this._y1,
          QM = iM - MM,
          zM = SM - rM,
          LM = PM - MM,
          mM = nM - rM,
          HM = LM * LM + mM * mM;
        if (null === this._x1) this._append`M${this._x1=MM},${this._y1=rM}`;
        else if (HM > jM)
          if (Math.abs(mM * QM - zM * LM) > jM && aM) {
            let hM = iM - PM,
              JM = SM - nM,
              dM = QM * QM + zM * zM,
              yM = hM * hM + JM * JM,
              lM = Math.sqrt(dM),
              EM = Math.sqrt(HM),
              UM = aM * Math.tan((OM - Math.acos((dM + HM - yM) / (2 * lM * EM))) / 2),
              GM = UM / EM,
              CM = UM / lM;
            Math.abs(GM - 1) > jM && this._append`L${MM+GM*LM},${rM+GM*mM}`, this._append`A${aM},${aM},0,0,${+(mM*hM>LM*JM)},${this._x1=MM+CM*QM},${this._y1=rM+CM*zM}`
          } else this._append`L${this._x1=MM},${this._y1=rM}`;
        else;
      }
      arc(MM, rM, iM, PM, nM, QM) {
        if (MM = +MM, rM = +rM, QM = !!QM, (iM = +iM) < 0) throw new Error(`negative radius: ${iM}`);
        let zM = iM * Math.cos(PM),
          LM = iM * Math.sin(PM),
          mM = MM + zM,
          HM = rM + LM,
          hM = 1 ^ QM,
          JM = QM ? PM - nM : nM - PM;
        null === this._x1 ? this._append`M${mM},${HM}` : (Math.abs(this._x1 - mM) > jM || Math.abs(this._y1 - HM) > jM) && this._append`L${mM},${HM}`, iM && (JM < 0 && (JM = JM % SM + SM), JM > aM ? this._append`A${iM},${iM},0,1,${hM},${MM-zM},${rM-LM}A${iM},${iM},0,1,${hM},${this._x1=mM},${this._y1=HM}` : JM > jM && this._append`A${iM},${iM},0,${+(JM>=OM)},${hM},${this._x1=MM+iM*Math.cos(nM)},${this._y1=rM+iM*Math.sin(nM)}`)
      }
      rect(MM, rM, iM, OM) {
        this._append`M${this._x0=this._x1=+MM},${this._y0=this._y1=+rM}h${iM=+iM}v${+OM}h${-iM}Z`
      }
      toString() {
        return this._
      }
    }

    function QM(MM) {
      let rM = 3;
      return MM.digits = function(iM) {
        if (!arguments.length) return rM;
        if (null == iM) rM = null;
        else {
          const MM = Math.floor(iM);
          if (!(MM >= 0)) throw new RangeError(`invalid digits: ${iM}`);
          rM = MM
        }
        return MM
      }, () => new nM(rM)
    }
    nM.prototype
  },
  6417: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = !0,
      SM = "Invariant failed";

    function jM(MM, rM) {
      if (!MM) {
        if (OM) throw new Error(SM);
        var iM = "function" === typeof rM ? rM() : rM,
          jM = iM ? "".concat(SM, ": ").concat(iM) : SM;
        throw new Error(jM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);