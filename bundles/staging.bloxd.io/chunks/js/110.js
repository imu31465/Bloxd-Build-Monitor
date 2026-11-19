/*! For license information please see wd13r.110.f25ca4a8.chunk.js.LICENSE.txt */
export const id = 110;
export const ids = [110];
export const modules = {
  5932: function(DD, CD, cD) {
    var ID;
    ! function() {
      var pD, iD = 1e9,
        fD = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        bD = !0,
        QD = "[DecimalError] ",
        wD = QD + "Invalid argument: ",
        SD = QD + "Exponent out of range: ",
        BD = Math.floor,
        yD = Math.pow,
        MD = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        tD = 1e7,
        ZD = 9007199254740991,
        oD = BD(1286742750677284.5),
        vD = {};

      function ND(DD, CD) {
        var cD, ID, pD, iD, fD, QD, wD, SD, BD = DD.constructor,
          yD = BD.precision;
        if (!DD.s || !CD.s) return CD.s || (CD = new BD(DD)), bD ? qD(CD, yD) : CD;
        if (wD = DD.d, SD = CD.d, fD = DD.e, pD = CD.e, wD = wD.slice(), iD = fD - pD) {
          for (iD < 0 ? (ID = wD, iD = -iD, QD = SD.length) : (ID = SD, pD = fD, QD = wD.length), iD > (QD = (fD = Math.ceil(yD / 7)) > QD ? fD + 1 : QD + 1) && (iD = QD, ID.length = 1), ID.reverse(); iD--;) ID.push(0);
          ID.reverse()
        }
        for ((QD = wD.length) - (iD = SD.length) < 0 && (iD = QD, ID = SD, SD = wD, wD = ID), cD = 0; iD;) cD = (wD[--iD] = wD[iD] + SD[iD] + cD) / tD | 0, wD[iD] %= tD;
        for (cD && (wD.unshift(cD), ++pD), QD = wD.length; 0 == wD[--QD];) wD.pop();
        return CD.d = wD, CD.e = pD, bD ? qD(CD, yD) : CD
      }

      function gD(DD, CD, cD) {
        if (DD !== ~~DD || DD < CD || DD > cD) throw Error(wD + DD)
      }

      function XD(DD) {
        var CD, cD, ID, pD = DD.length - 1,
          iD = "",
          fD = DD[0];
        if (pD > 0) {
          for (iD += fD, CD = 1; CD < pD; CD++)(cD = 7 - (ID = DD[CD] + "").length) && (iD += HD(cD)), iD += ID;
          (cD = 7 - (ID = (fD = DD[CD]) + "").length) && (iD += HD(cD))
        } else if (0 === fD) return "0";
        for (; fD % 10 === 0;) fD /= 10;
        return iD + fD
      }
      vD.absoluteValue = vD.abs = function() {
        var DD = new this.constructor(this);
        return DD.s && (DD.s = 1), DD
      }, vD.comparedTo = vD.cmp = function(DD) {
        var CD, cD, ID, pD, iD = this;
        if (DD = new iD.constructor(DD), iD.s !== DD.s) return iD.s || -DD.s;
        if (iD.e !== DD.e) return iD.e > DD.e ^ iD.s < 0 ? 1 : -1;
        for (CD = 0, cD = (ID = iD.d.length) < (pD = DD.d.length) ? ID : pD; CD < cD; ++CD)
          if (iD.d[CD] !== DD.d[CD]) return iD.d[CD] > DD.d[CD] ^ iD.s < 0 ? 1 : -1;
        return ID === pD ? 0 : ID > pD ^ iD.s < 0 ? 1 : -1
      }, vD.decimalPlaces = vD.dp = function() {
        var DD = this,
          CD = DD.d.length - 1,
          cD = 7 * (CD - DD.e);
        if (CD = DD.d[CD])
          for (; CD % 10 == 0; CD /= 10) cD--;
        return cD < 0 ? 0 : cD
      }, vD.dividedBy = vD.div = function(DD) {
        return mD(this, new this.constructor(DD))
      }, vD.dividedToIntegerBy = vD.idiv = function(DD) {
        var CD = this.constructor;
        return qD(mD(this, new CD(DD), 0, 1), CD.precision)
      }, vD.equals = vD.eq = function(DD) {
        return !this.cmp(DD)
      }, vD.exponent = function() {
        return OD(this)
      }, vD.greaterThan = vD.gt = function(DD) {
        return this.cmp(DD) > 0
      }, vD.greaterThanOrEqualTo = vD.gte = function(DD) {
        return this.cmp(DD) >= 0
      }, vD.isInteger = vD.isint = function() {
        return this.e > this.d.length - 2
      }, vD.isNegative = vD.isneg = function() {
        return this.s < 0
      }, vD.isPositive = vD.ispos = function() {
        return this.s > 0
      }, vD.isZero = function() {
        return 0 === this.s
      }, vD.lessThan = vD.lt = function(DD) {
        return this.cmp(DD) < 0
      }, vD.lessThanOrEqualTo = vD.lte = function(DD) {
        return this.cmp(DD) < 1
      }, vD.logarithm = vD.log = function(DD) {
        var CD, cD = this,
          ID = cD.constructor,
          iD = ID.precision,
          fD = iD + 5;
        if (void 0 === DD) DD = new ID(10);
        else if ((DD = new ID(DD)).s < 1 || DD.eq(pD)) throw Error(QD + "NaN");
        if (cD.s < 1) throw Error(QD + (cD.s ? "NaN" : "-Infinity"));
        return cD.eq(pD) ? new ID(0) : (bD = !1, CD = mD(UD(cD, fD), UD(DD, fD), fD), bD = !0, qD(CD, iD))
      }, vD.minus = vD.sub = function(DD) {
        var CD = this;
        return DD = new CD.constructor(DD), CD.s == DD.s ? JD(CD, DD) : ND(CD, (DD.s = -DD.s, DD))
      }, vD.modulo = vD.mod = function(DD) {
        var CD, cD = this,
          ID = cD.constructor,
          pD = ID.precision;
        if (!(DD = new ID(DD)).s) throw Error(QD + "NaN");
        return cD.s ? (bD = !1, CD = mD(cD, DD, 0, 1).times(DD), bD = !0, cD.minus(CD)) : qD(new ID(cD), pD)
      }, vD.naturalExponential = vD.exp = function() {
        return nD(this)
      }, vD.naturalLogarithm = vD.ln = function() {
        return UD(this)
      }, vD.negated = vD.neg = function() {
        var DD = new this.constructor(this);
        return DD.s = -DD.s || 0, DD
      }, vD.plus = vD.add = function(DD) {
        var CD = this;
        return DD = new CD.constructor(DD), CD.s == DD.s ? ND(CD, DD) : JD(CD, (DD.s = -DD.s, DD))
      }, vD.precision = vD.sd = function(DD) {
        var CD, cD, ID, pD = this;
        if (void 0 !== DD && DD !== !!DD && 1 !== DD && 0 !== DD) throw Error(wD + DD);
        if (CD = OD(pD) + 1, cD = 7 * (ID = pD.d.length - 1) + 1, ID = pD.d[ID]) {
          for (; ID % 10 == 0; ID /= 10) cD--;
          for (ID = pD.d[0]; ID >= 10; ID /= 10) cD++
        }
        return DD && CD > cD ? CD : cD
      }, vD.squareRoot = vD.sqrt = function() {
        var DD, CD, cD, ID, pD, iD, fD, wD = this,
          SD = wD.constructor;
        if (wD.s < 1) {
          if (!wD.s) return new SD(0);
          throw Error(QD + "NaN")
        }
        for (DD = OD(wD), bD = !1, 0 == (pD = Math.sqrt(+wD)) || pD == 1 / 0 ? (((CD = XD(wD.d)).length + DD) % 2 == 0 && (CD += "0"), pD = Math.sqrt(CD), DD = BD((DD + 1) / 2) - (DD < 0 || DD % 2), ID = new SD(CD = pD == 1 / 0 ? "1e" + DD : (CD = pD.toExponential()).slice(0, CD.indexOf("e") + 1) + DD)) : ID = new SD(pD.toString()), pD = fD = (cD = SD.precision) + 3;;)
          if (ID = (iD = ID).plus(mD(wD, iD, fD + 2)).times(.5), XD(iD.d).slice(0, fD) === (CD = XD(ID.d)).slice(0, fD)) {
            if (CD = CD.slice(fD - 3, fD + 1), pD == fD && "4999" == CD) {
              if (qD(iD, cD + 1, 0), iD.times(iD).eq(wD)) {
                ID = iD;
                break
              }
            } else if ("9999" != CD) break;
            fD += 4
          } return bD = !0, qD(ID, cD)
      }, vD.times = vD.mul = function(DD) {
        var CD, cD, ID, pD, iD, fD, QD, wD, SD, BD = this,
          yD = BD.constructor,
          MD = BD.d,
          ZD = (DD = new yD(DD)).d;
        if (!BD.s || !DD.s) return new yD(0);
        for (DD.s *= BD.s, cD = BD.e + DD.e, (wD = MD.length) < (SD = ZD.length) && (iD = MD, MD = ZD, ZD = iD, fD = wD, wD = SD, SD = fD), iD = [], ID = fD = wD + SD; ID--;) iD.push(0);
        for (ID = SD; --ID >= 0;) {
          for (CD = 0, pD = wD + ID; pD > ID;) QD = iD[pD] + ZD[ID] * MD[pD - ID - 1] + CD, iD[pD--] = QD % tD | 0, CD = QD / tD | 0;
          iD[pD] = (iD[pD] + CD) % tD | 0
        }
        for (; !iD[--fD];) iD.pop();
        return CD ? ++cD : iD.shift(), DD.d = iD, DD.e = cD, bD ? qD(DD, yD.precision) : DD
      }, vD.toDecimalPlaces = vD.todp = function(DD, CD) {
        var cD = this,
          ID = cD.constructor;
        return cD = new ID(cD), void 0 === DD ? cD : (gD(DD, 0, iD), void 0 === CD ? CD = ID.rounding : gD(CD, 0, 8), qD(cD, DD + OD(cD) + 1, CD))
      }, vD.toExponential = function(DD, CD) {
        var cD, ID = this,
          pD = ID.constructor;
        return void 0 === DD ? cD = KD(ID, !0) : (gD(DD, 0, iD), void 0 === CD ? CD = pD.rounding : gD(CD, 0, 8), cD = KD(ID = qD(new pD(ID), DD + 1, CD), !0, DD + 1)), cD
      }, vD.toFixed = function(DD, CD) {
        var cD, ID, pD = this,
          fD = pD.constructor;
        return void 0 === DD ? KD(pD) : (gD(DD, 0, iD), void 0 === CD ? CD = fD.rounding : gD(CD, 0, 8), cD = KD((ID = qD(new fD(pD), DD + OD(pD) + 1, CD)).abs(), !1, DD + OD(ID) + 1), pD.isneg() && !pD.isZero() ? "-" + cD : cD)
      }, vD.toInteger = vD.toint = function() {
        var DD = this,
          CD = DD.constructor;
        return qD(new CD(DD), OD(DD) + 1, CD.rounding)
      }, vD.toNumber = function() {
        return +this
      }, vD.toPower = vD.pow = function(DD) {
        var CD, cD, ID, iD, fD, wD, SD = this,
          yD = SD.constructor,
          MD = +(DD = new yD(DD));
        if (!DD.s) return new yD(pD);
        if (!(SD = new yD(SD)).s) {
          if (DD.s < 1) throw Error(QD + "Infinity");
          return SD
        }
        if (SD.eq(pD)) return SD;
        if (ID = yD.precision, DD.eq(pD)) return qD(SD, ID);
        if (wD = (CD = DD.e) >= (cD = DD.d.length - 1), fD = SD.s, wD) {
          if ((cD = MD < 0 ? -MD : MD) <= ZD) {
            for (iD = new yD(pD), CD = Math.ceil(ID / 7 + 4), bD = !1; cD % 2 && aD((iD = iD.times(SD)).d, CD), 0 !== (cD = BD(cD / 2));) aD((SD = SD.times(SD)).d, CD);
            return bD = !0, DD.s < 0 ? new yD(pD).div(iD) : qD(iD, ID)
          }
        } else if (fD < 0) throw Error(QD + "NaN");
        return fD = fD < 0 && 1 & DD.d[Math.max(CD, cD)] ? -1 : 1, SD.s = 1, bD = !1, iD = DD.times(UD(SD, ID + 12)), bD = !0, (iD = nD(iD)).s = fD, iD
      }, vD.toPrecision = function(DD, CD) {
        var cD, ID, pD = this,
          fD = pD.constructor;
        return void 0 === DD ? ID = KD(pD, (cD = OD(pD)) <= fD.toExpNeg || cD >= fD.toExpPos) : (gD(DD, 1, iD), void 0 === CD ? CD = fD.rounding : gD(CD, 0, 8), ID = KD(pD = qD(new fD(pD), DD, CD), DD <= (cD = OD(pD)) || cD <= fD.toExpNeg, DD)), ID
      }, vD.toSignificantDigits = vD.tosd = function(DD, CD) {
        var cD = this.constructor;
        return void 0 === DD ? (DD = cD.precision, CD = cD.rounding) : (gD(DD, 1, iD), void 0 === CD ? CD = cD.rounding : gD(CD, 0, 8)), qD(new cD(this), DD, CD)
      }, vD.toString = vD.valueOf = vD.val = vD.toJSON = function() {
        var DD = this,
          CD = OD(DD),
          cD = DD.constructor;
        return KD(DD, CD <= cD.toExpNeg || CD >= cD.toExpPos)
      };
      var mD = function() {
        function DD(DD, CD) {
          var cD, ID = 0,
            pD = DD.length;
          for (DD = DD.slice(); pD--;) cD = DD[pD] * CD + ID, DD[pD] = cD % tD | 0, ID = cD / tD | 0;
          return ID && DD.unshift(ID), DD
        }

        function CD(DD, CD, cD, ID) {
          var pD, iD;
          if (cD != ID) iD = cD > ID ? 1 : -1;
          else
            for (pD = iD = 0; pD < cD; pD++)
              if (DD[pD] != CD[pD]) {
                iD = DD[pD] > CD[pD] ? 1 : -1;
                break
              } return iD
        }

        function cD(DD, CD, cD) {
          for (var ID = 0; cD--;) DD[cD] -= ID, ID = DD[cD] < CD[cD] ? 1 : 0, DD[cD] = ID * tD + DD[cD] - CD[cD];
          for (; !DD[0] && DD.length > 1;) DD.shift()
        }
        return function(ID, pD, iD, fD) {
          var bD, wD, SD, BD, yD, MD, ZD, oD, vD, ND, gD, XD, mD, nD, PD, HD, UD, xD, JD = ID.constructor,
            KD = ID.s == pD.s ? 1 : -1,
            aD = ID.d,
            VD = pD.d;
          if (!ID.s) return new JD(ID);
          if (!pD.s) throw Error(QD + "Division by zero");
          for (wD = ID.e - pD.e, UD = VD.length, PD = aD.length, oD = (ZD = new JD(KD)).d = [], SD = 0; VD[SD] == (aD[SD] || 0);) ++SD;
          if (VD[SD] > (aD[SD] || 0) && --wD, (XD = null == iD ? iD = JD.precision : fD ? iD + (OD(ID) - OD(pD)) + 1 : iD) < 0) return new JD(0);
          if (XD = XD / 7 + 2 | 0, SD = 0, 1 == UD)
            for (BD = 0, VD = VD[0], XD++;
              (SD < PD || BD) && XD--; SD++) mD = BD * tD + (aD[SD] || 0), oD[SD] = mD / VD | 0, BD = mD % VD | 0;
          else {
            for ((BD = tD / (VD[0] + 1) | 0) > 1 && (VD = DD(VD, BD), aD = DD(aD, BD), UD = VD.length, PD = aD.length), nD = UD, ND = (vD = aD.slice(0, UD)).length; ND < UD;) vD[ND++] = 0;
            (xD = VD.slice()).unshift(0), HD = VD[0], VD[1] >= tD / 2 && ++HD;
            do {
              BD = 0, (bD = CD(VD, vD, UD, ND)) < 0 ? (gD = vD[0], UD != ND && (gD = gD * tD + (vD[1] || 0)), (BD = gD / HD | 0) > 1 ? (BD >= tD && (BD = tD - 1), 1 == (bD = CD(yD = DD(VD, BD), vD, MD = yD.length, ND = vD.length)) && (BD--, cD(yD, UD < MD ? xD : VD, MD))) : (0 == BD && (bD = BD = 1), yD = VD.slice()), (MD = yD.length) < ND && yD.unshift(0), cD(vD, yD, ND), -1 == bD && (bD = CD(VD, vD, UD, ND = vD.length)) < 1 && (BD++, cD(vD, UD < ND ? xD : VD, ND)), ND = vD.length) : 0 === bD && (BD++, vD = [0]), oD[SD++] = BD, bD && vD[0] ? vD[ND++] = aD[nD] || 0 : (vD = [aD[nD]], ND = 1)
            } while ((nD++ < PD || void 0 !== vD[0]) && XD--)
          }
          return oD[0] || oD.shift(), ZD.e = wD, qD(ZD, fD ? iD + OD(ZD) + 1 : iD)
        }
      }();

      function nD(DD, CD) {
        var cD, ID, iD, fD, QD, wD = 0,
          BD = 0,
          MD = DD.constructor,
          tD = MD.precision;
        if (OD(DD) > 16) throw Error(SD + OD(DD));
        if (!DD.s) return new MD(pD);
        for (null == CD ? (bD = !1, QD = tD) : QD = CD, fD = new MD(.03125); DD.abs().gte(.1);) DD = DD.times(fD), BD += 5;
        for (QD += Math.log(yD(2, BD)) / Math.LN10 * 2 + 5 | 0, cD = ID = iD = new MD(pD), MD.precision = QD;;) {
          if (ID = qD(ID.times(DD), QD), cD = cD.times(++wD), XD((fD = iD.plus(mD(ID, cD, QD))).d).slice(0, QD) === XD(iD.d).slice(0, QD)) {
            for (; BD--;) iD = qD(iD.times(iD), QD);
            return MD.precision = tD, null == CD ? (bD = !0, qD(iD, tD)) : iD
          }
          iD = fD
        }
      }

      function OD(DD) {
        for (var CD = 7 * DD.e, cD = DD.d[0]; cD >= 10; cD /= 10) CD++;
        return CD
      }

      function PD(DD, CD, cD) {
        if (CD > DD.LN10.sd()) throw bD = !0, cD && (DD.precision = cD), Error(QD + "LN10 precision limit exceeded");
        return qD(new DD(DD.LN10), CD)
      }

      function HD(DD) {
        for (var CD = ""; DD--;) CD += "0";
        return CD
      }

      function UD(DD, CD) {
        var cD, ID, iD, fD, wD, SD, BD, yD, MD, tD = 1,
          ZD = DD,
          oD = ZD.d,
          vD = ZD.constructor,
          ND = vD.precision;
        if (ZD.s < 1) throw Error(QD + (ZD.s ? "NaN" : "-Infinity"));
        if (ZD.eq(pD)) return new vD(0);
        if (null == CD ? (bD = !1, yD = ND) : yD = CD, ZD.eq(10)) return null == CD && (bD = !0), PD(vD, yD);
        if (yD += 10, vD.precision = yD, ID = (cD = XD(oD)).charAt(0), fD = OD(ZD), !(Math.abs(fD) < 15e14)) return BD = PD(vD, yD + 2, ND).times(fD + ""), ZD = UD(new vD(ID + "." + cD.slice(1)), yD - 10).plus(BD), vD.precision = ND, null == CD ? (bD = !0, qD(ZD, ND)) : ZD;
        for (; ID < 7 && 1 != ID || 1 == ID && cD.charAt(1) > 3;) ID = (cD = XD((ZD = ZD.times(DD)).d)).charAt(0), tD++;
        for (fD = OD(ZD), ID > 1 ? (ZD = new vD("0." + cD), fD++) : ZD = new vD(ID + "." + cD.slice(1)), SD = wD = ZD = mD(ZD.minus(pD), ZD.plus(pD), yD), MD = qD(ZD.times(ZD), yD), iD = 3;;) {
          if (wD = qD(wD.times(MD), yD), XD((BD = SD.plus(mD(wD, new vD(iD), yD))).d).slice(0, yD) === XD(SD.d).slice(0, yD)) return SD = SD.times(2), 0 !== fD && (SD = SD.plus(PD(vD, yD + 2, ND).times(fD + ""))), SD = mD(SD, new vD(tD), yD), vD.precision = ND, null == CD ? (bD = !0, qD(SD, ND)) : SD;
          SD = BD, iD += 2
        }
      }

      function xD(DD, CD) {
        var cD, ID, pD;
        for ((cD = CD.indexOf(".")) > -1 && (CD = CD.replace(".", "")), (ID = CD.search(/e/i)) > 0 ? (cD < 0 && (cD = ID), cD += +CD.slice(ID + 1), CD = CD.substring(0, ID)) : cD < 0 && (cD = CD.length), ID = 0; 48 === CD.charCodeAt(ID);) ++ID;
        for (pD = CD.length; 48 === CD.charCodeAt(pD - 1);) --pD;
        if (CD = CD.slice(ID, pD)) {
          if (pD -= ID, cD = cD - ID - 1, DD.e = BD(cD / 7), DD.d = [], ID = (cD + 1) % 7, cD < 0 && (ID += 7), ID < pD) {
            for (ID && DD.d.push(+CD.slice(0, ID)), pD -= 7; ID < pD;) DD.d.push(+CD.slice(ID, ID += 7));
            ID = 7 - (CD = CD.slice(ID)).length
          } else ID -= pD;
          for (; ID--;) CD += "0";
          if (DD.d.push(+CD), bD && (DD.e > oD || DD.e < -oD)) throw Error(SD + cD)
        } else DD.s = 0, DD.e = 0, DD.d = [0];
        return DD
      }

      function qD(DD, CD, cD) {
        var ID, pD, iD, fD, QD, wD, MD, ZD, vD = DD.d;
        for (fD = 1, iD = vD[0]; iD >= 10; iD /= 10) fD++;
        if ((ID = CD - fD) < 0) ID += 7, pD = CD, MD = vD[ZD = 0];
        else {
          if ((ZD = Math.ceil((ID + 1) / 7)) >= (iD = vD.length)) return DD;
          for (MD = iD = vD[ZD], fD = 1; iD >= 10; iD /= 10) fD++;
          pD = (ID %= 7) - 7 + fD
        }
        if (void 0 !== cD && (QD = MD / (iD = yD(10, fD - pD - 1)) % 10 | 0, wD = CD < 0 || void 0 !== vD[ZD + 1] || MD % iD, wD = cD < 4 ? (QD || wD) && (0 == cD || cD == (DD.s < 0 ? 3 : 2)) : QD > 5 || 5 == QD && (4 == cD || wD || 6 == cD && (ID > 0 ? pD > 0 ? MD / yD(10, fD - pD) : 0 : vD[ZD - 1]) % 10 & 1 || cD == (DD.s < 0 ? 8 : 7))), CD < 1 || !vD[0]) return wD ? (iD = OD(DD), vD.length = 1, CD = CD - iD - 1, vD[0] = yD(10, (7 - CD % 7) % 7), DD.e = BD(-CD / 7) || 0) : (vD.length = 1, vD[0] = DD.e = DD.s = 0), DD;
        if (0 == ID ? (vD.length = ZD, iD = 1, ZD--) : (vD.length = ZD + 1, iD = yD(10, 7 - ID), vD[ZD] = pD > 0 ? (MD / yD(10, fD - pD) % yD(10, pD) | 0) * iD : 0), wD)
          for (;;) {
            if (0 == ZD) {
              (vD[0] += iD) == tD && (vD[0] = 1, ++DD.e);
              break
            }
            if (vD[ZD] += iD, vD[ZD] != tD) break;
            vD[ZD--] = 0, iD = 1
          }
        for (ID = vD.length; 0 === vD[--ID];) vD.pop();
        if (bD && (DD.e > oD || DD.e < -oD)) throw Error(SD + OD(DD));
        return DD
      }

      function JD(DD, CD) {
        var cD, ID, pD, iD, fD, QD, wD, SD, BD, yD, MD = DD.constructor,
          ZD = MD.precision;
        if (!DD.s || !CD.s) return CD.s ? CD.s = -CD.s : CD = new MD(DD), bD ? qD(CD, ZD) : CD;
        if (wD = DD.d, yD = CD.d, ID = CD.e, SD = DD.e, wD = wD.slice(), fD = SD - ID) {
          for ((BD = fD < 0) ? (cD = wD, fD = -fD, QD = yD.length) : (cD = yD, ID = SD, QD = wD.length), fD > (pD = Math.max(Math.ceil(ZD / 7), QD) + 2) && (fD = pD, cD.length = 1), cD.reverse(), pD = fD; pD--;) cD.push(0);
          cD.reverse()
        } else {
          for ((BD = (pD = wD.length) < (QD = yD.length)) && (QD = pD), pD = 0; pD < QD; pD++)
            if (wD[pD] != yD[pD]) {
              BD = wD[pD] < yD[pD];
              break
            } fD = 0
        }
        for (BD && (cD = wD, wD = yD, yD = cD, CD.s = -CD.s), QD = wD.length, pD = yD.length - QD; pD > 0; --pD) wD[QD++] = 0;
        for (pD = yD.length; pD > fD;) {
          if (wD[--pD] < yD[pD]) {
            for (iD = pD; iD && 0 === wD[--iD];) wD[iD] = tD - 1;
            --wD[iD], wD[pD] += tD
          }
          wD[pD] -= yD[pD]
        }
        for (; 0 === wD[--QD];) wD.pop();
        for (; 0 === wD[0]; wD.shift()) --ID;
        return wD[0] ? (CD.d = wD, CD.e = ID, bD ? qD(CD, ZD) : CD) : new MD(0)
      }

      function KD(DD, CD, cD) {
        var ID, pD = OD(DD),
          iD = XD(DD.d),
          fD = iD.length;
        return CD ? (cD && (ID = cD - fD) > 0 ? iD = iD.charAt(0) + "." + iD.slice(1) + HD(ID) : fD > 1 && (iD = iD.charAt(0) + "." + iD.slice(1)), iD = iD + (pD < 0 ? "e" : "e+") + pD) : pD < 0 ? (iD = "0." + HD(-pD - 1) + iD, cD && (ID = cD - fD) > 0 && (iD += HD(ID))) : pD >= fD ? (iD += HD(pD + 1 - fD), cD && (ID = cD - pD - 1) > 0 && (iD = iD + "." + HD(ID))) : ((ID = pD + 1) < fD && (iD = iD.slice(0, ID) + "." + iD.slice(ID)), cD && (ID = cD - fD) > 0 && (pD + 1 === fD && (iD += "."), iD += HD(ID))), DD.s < 0 ? "-" + iD : iD
      }

      function aD(DD, CD) {
        if (DD.length > CD) return DD.length = CD, !0
      }

      function VD(DD) {
        if (!DD || "object" !== typeof DD) throw Error(QD + "Object expected");
        var CD, cD, ID, pD = ["precision", 1, iD, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (CD = 0; CD < pD.length; CD += 3)
          if (void 0 !== (ID = DD[cD = pD[CD]])) {
            if (!(BD(ID) === ID && ID >= pD[CD + 1] && ID <= pD[CD + 2])) throw Error(wD + cD + ": " + ID);
            this[cD] = ID
          } if (void 0 !== (ID = DD[cD = "LN10"])) {
          if (ID != Math.LN10) throw Error(wD + cD + ": " + ID);
          this[cD] = new this(ID)
        }
        return this
      }
      fD = function DD(CD) {
        var cD, ID, pD;

        function iD(DD) {
          var CD = this;
          if (!(CD instanceof iD)) return new iD(DD);
          if (CD.constructor = iD, DD instanceof iD) return CD.s = DD.s, CD.e = DD.e, void(CD.d = (DD = DD.d) ? DD.slice() : DD);
          if ("number" === typeof DD) {
            if (0 * DD !== 0) throw Error(wD + DD);
            if (DD > 0) CD.s = 1;
            else {
              if (!(DD < 0)) return CD.s = 0, CD.e = 0, void(CD.d = [0]);
              DD = -DD, CD.s = -1
            }
            return DD === ~~DD && DD < 1e7 ? (CD.e = 0, void(CD.d = [DD])) : xD(CD, DD.toString())
          }
          if ("string" !== typeof DD) throw Error(wD + DD);
          if (45 === DD.charCodeAt(0) ? (DD = DD.slice(1), CD.s = -1) : CD.s = 1, !MD.test(DD)) throw Error(wD + DD);
          xD(CD, DD)
        }
        if (iD.prototype = vD, iD.ROUND_UP = 0, iD.ROUND_DOWN = 1, iD.ROUND_CEIL = 2, iD.ROUND_FLOOR = 3, iD.ROUND_HALF_UP = 4, iD.ROUND_HALF_DOWN = 5, iD.ROUND_HALF_EVEN = 6, iD.ROUND_HALF_CEIL = 7, iD.ROUND_HALF_FLOOR = 8, iD.clone = DD, iD.config = iD.set = VD, void 0 === CD && (CD = {}), CD)
          for (pD = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], cD = 0; cD < pD.length;) CD.hasOwnProperty(ID = pD[cD++]) || (CD[ID] = this[ID]);
        return iD.config(CD), iD
      }(fD), fD.default = fD.Decimal = fD, pD = new fD(1), void 0 === (ID = function() {
        return fD
      }.call(CD, cD, CD, DD)) || (DD.exports = ID)
    }()
  },
  5514: (DD, CD, cD) => {
    var ID = cD(5022)(cD(4859), "DataView");
    DD.exports = ID
  },
  5007: (DD, CD, cD) => {
    var ID = cD(5015),
      pD = cD(5064),
      iD = cD(5071),
      fD = cD(5079),
      bD = cD(5082);

    function QD(DD) {
      var CD = -1,
        cD = null == DD ? 0 : DD.length;
      for (this.clear(); ++CD < cD;) {
        var ID = DD[CD];
        this.set(ID[0], ID[1])
      }
    }
    QD.prototype.clear = ID, QD.prototype.delete = pD, QD.prototype.get = iD, QD.prototype.has = fD, QD.prototype.set = bD, DD.exports = QD
  },
  5084: (DD, CD, cD) => {
    var ID = cD(5090),
      pD = cD(5094),
      iD = cD(5110),
      fD = cD(5114),
      bD = cD(5122);

    function QD(DD) {
      var CD = -1,
        cD = null == DD ? 0 : DD.length;
      for (this.clear(); ++CD < cD;) {
        var ID = DD[CD];
        this.set(ID[0], ID[1])
      }
    }
    QD.prototype.clear = ID, QD.prototype.delete = pD, QD.prototype.get = iD, QD.prototype.has = fD, QD.prototype.set = bD, DD.exports = QD
  },
  5124: (DD, CD, cD) => {
    var ID = cD(5022)(cD(4859), "Map");
    DD.exports = ID
  },
  4997: (DD, CD, cD) => {
    var ID = cD(4999),
      pD = cD(5126),
      iD = cD(5138),
      fD = cD(5140),
      bD = cD(5149);

    function QD(DD) {
      var CD = -1,
        cD = null == DD ? 0 : DD.length;
      for (this.clear(); ++CD < cD;) {
        var ID = DD[CD];
        this.set(ID[0], ID[1])
      }
    }
    QD.prototype.clear = ID, QD.prototype.delete = pD, QD.prototype.get = iD, QD.prototype.has = fD, QD.prototype.set = bD, DD.exports = QD
  },
  5517: (DD, CD, cD) => {
    var ID = cD(5022)(cD(4859), "Promise");
    DD.exports = ID
  },
  5526: (DD, CD, cD) => {
    var ID = cD(5022)(cD(4859), "Set");
    DD.exports = ID
  },
  5362: (DD, CD, cD) => {
    var ID = cD(4997),
      pD = cD(5371),
      iD = cD(5373);

    function fD(DD) {
      var CD = -1,
        cD = null == DD ? 0 : DD.length;
      for (this.__data__ = new ID; ++CD < cD;) this.add(DD[CD])
    }
    fD.prototype.add = fD.prototype.push = pD, fD.prototype.has = iD, DD.exports = fD
  },
  5318: (DD, CD, cD) => {
    var ID = cD(5084),
      pD = cD(5323),
      iD = cD(5332),
      fD = cD(5334),
      bD = cD(5337),
      QD = cD(5340);

    function wD(DD) {
      var CD = this.__data__ = new ID(DD);
      this.size = CD.size
    }
    wD.prototype.clear = pD, wD.prototype.delete = iD, wD.prototype.get = fD, wD.prototype.has = bD, wD.prototype.set = QD, DD.exports = wD
  },
  4906: (DD, CD, cD) => {
    var ID = cD(4859).Symbol;
    DD.exports = ID
  },
  5398: (DD, CD, cD) => {
    var ID = cD(4859).Uint8Array;
    DD.exports = ID
  },
  5530: (DD, CD, cD) => {
    var ID = cD(5022)(cD(4859), "WeakMap");
    DD.exports = ID
  },
  5650: DD => {
    DD.exports = function(DD, CD, cD) {
      switch (cD.length) {
        case 0:
          return DD.call(CD);
        case 1:
          return DD.call(CD, cD[0]);
        case 2:
          return DD.call(CD, cD[0], cD[1]);
        case 3:
          return DD.call(CD, cD[0], cD[1], cD[2])
      }
      return DD.apply(CD, cD)
    }
  },
  5977: DD => {
    DD.exports = function(DD, CD) {
      for (var cD = -1, ID = null == DD ? 0 : DD.length; ++cD < ID;)
        if (!CD(DD[cD], cD, DD)) return !1;
      return !0
    }
  },
  5433: DD => {
    DD.exports = function(DD, CD) {
      for (var cD = -1, ID = null == DD ? 0 : DD.length, pD = 0, iD = []; ++cD < ID;) {
        var fD = DD[cD];
        CD(fD, cD, DD) && (iD[pD++] = fD)
      }
      return iD
    }
  },
  5742: (DD, CD, cD) => {
    var ID = cD(5745);
    DD.exports = function(DD, CD) {
      return !!(null == DD ? 0 : DD.length) && ID(DD, CD, 0) > -1
    }
  },
  5765: DD => {
    DD.exports = function(DD, CD, cD) {
      for (var ID = -1, pD = null == DD ? 0 : DD.length; ++ID < pD;)
        if (cD(CD, DD[ID])) return !0;
      return !1
    }
  },
  5451: (DD, CD, cD) => {
    var ID = cD(5460),
      pD = cD(5291),
      iD = cD(4940),
      fD = cD(5462),
      bD = cD(5257),
      QD = cD(5476),
      wD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD, CD) {
      var cD = iD(DD),
        SD = !cD && pD(DD),
        BD = !cD && !SD && fD(DD),
        yD = !cD && !SD && !BD && QD(DD),
        MD = cD || SD || BD || yD,
        tD = MD ? ID(DD.length, String) : [],
        ZD = tD.length;
      for (var oD in DD) !CD && !wD.call(DD, oD) || MD && ("length" == oD || BD && ("offset" == oD || "parent" == oD) || yD && ("buffer" == oD || "byteLength" == oD || "byteOffset" == oD) || bD(oD, ZD)) || tD.push(oD);
      return tD
    }
  },
  5165: DD => {
    DD.exports = function(DD, CD) {
      for (var cD = -1, ID = null == DD ? 0 : DD.length, pD = Array(ID); ++cD < ID;) pD[cD] = CD(DD[cD], cD, DD);
      return pD
    }
  },
  5277: DD => {
    DD.exports = function(DD, CD) {
      for (var cD = -1, ID = CD.length, pD = DD.length; ++cD < ID;) DD[pD + cD] = CD[cD];
      return DD
    }
  },
  5382: DD => {
    DD.exports = function(DD, CD) {
      for (var cD = -1, ID = null == DD ? 0 : DD.length; ++cD < ID;)
        if (CD(DD[cD], cD, DD)) return !0;
      return !1
    }
  },
  5826: DD => {
    DD.exports = function(DD) {
      return DD.split("")
    }
  },
  5103: (DD, CD, cD) => {
    var ID = cD(5107);
    DD.exports = function(DD, CD) {
      for (var cD = DD.length; cD--;)
        if (ID(DD[cD][0], CD)) return cD;
      return -1
    }
  },
  5972: (DD, CD, cD) => {
    var ID = cD(5674);
    DD.exports = function(DD, CD, cD) {
      "__proto__" == CD && ID ? ID(DD, CD, {
        configurable: !0,
        enumerable: !0,
        value: cD,
        writable: !0
      }) : DD[CD] = cD
    }
  },
  5589: (DD, CD, cD) => {
    var ID = cD(5593),
      pD = cD(5615)(ID);
    DD.exports = pD
  },
  5983: (DD, CD, cD) => {
    var ID = cD(5589);
    DD.exports = function(DD, CD) {
      var cD = !0;
      return ID(DD, (function(DD, ID, pD) {
        return cD = !!CD(DD, ID, pD)
      })), cD
    }
  },
  5900: (DD, CD, cD) => {
    var ID = cD(4895);
    DD.exports = function(DD, CD, cD) {
      for (var pD = -1, iD = DD.length; ++pD < iD;) {
        var fD = DD[pD],
          bD = CD(fD);
        if (null != bD && (void 0 === QD ? bD === bD && !ID(bD) : cD(bD, QD))) var QD = bD,
          wD = fD
      }
      return wD
    }
  },
  5749: DD => {
    DD.exports = function(DD, CD, cD, ID) {
      for (var pD = DD.length, iD = cD + (ID ? 1 : -1); ID ? iD-- : ++iD < pD;)
        if (CD(DD[iD], iD, DD)) return iD;
      return -1
    }
  },
  5271: (DD, CD, cD) => {
    var ID = cD(5277),
      pD = cD(5282);
    DD.exports = function DD(CD, cD, iD, fD, bD) {
      var QD = -1,
        wD = CD.length;
      for (iD || (iD = pD), bD || (bD = []); ++QD < wD;) {
        var SD = CD[QD];
        cD > 0 && iD(SD) ? cD > 1 ? DD(SD, cD - 1, iD, fD, bD) : ID(bD, SD) : fD || (bD[bD.length] = SD)
      }
      return bD
    }
  },
  5601: (DD, CD, cD) => {
    var ID = cD(5609)();
    DD.exports = ID
  },
  5593: (DD, CD, cD) => {
    var ID = cD(5601),
      pD = cD(5442);
    DD.exports = function(DD, CD) {
      return DD && ID(DD, CD, pD)
    }
  },
  4968: (DD, CD, cD) => {
    var ID = cD(4972),
      pD = cD(5167);
    DD.exports = function(DD, CD) {
      for (var cD = 0, iD = (CD = ID(CD, DD)).length; null != DD && cD < iD;) DD = DD[pD(CD[cD++])];
      return cD && cD == iD ? DD : void 0
    }
  },
  5425: (DD, CD, cD) => {
    var ID = cD(5277),
      pD = cD(4940);
    DD.exports = function(DD, CD, cD) {
      var iD = CD(DD);
      return pD(DD) ? iD : ID(iD, cD(DD))
    }
  },
  4901: (DD, CD, cD) => {
    var ID = cD(4906),
      pD = cD(4910),
      iD = cD(4914),
      fD = ID ? ID.toStringTag : void 0;
    DD.exports = function(DD) {
      return null == DD ? void 0 === DD ? "[object Undefined]" : "[object Null]" : fD && fD in Object(DD) ? pD(DD) : iD(DD)
    }
  },
  5905: DD => {
    DD.exports = function(DD, CD) {
      return DD > CD
    }
  },
  5558: DD => {
    DD.exports = function(DD, CD) {
      return null != DD && CD in Object(DD)
    }
  },
  5745: (DD, CD, cD) => {
    var ID = cD(5749),
      pD = cD(5756),
      iD = cD(5760);
    DD.exports = function(DD, CD, cD) {
      return CD === CD ? iD(DD, CD, cD) : ID(DD, pD, cD)
    }
  },
  5297: (DD, CD, cD) => {
    var ID = cD(4901),
      pD = cD(4919);
    DD.exports = function(DD) {
      return pD(DD) && "[object Arguments]" == ID(DD)
    }
  },
  5342: (DD, CD, cD) => {
    var ID = cD(5349),
      pD = cD(4919);
    DD.exports = function DD(CD, cD, iD, fD, bD) {
      return CD === cD || (null == CD || null == cD || !pD(CD) && !pD(cD) ? CD !== CD && cD !== cD : ID(CD, cD, iD, fD, DD, bD))
    }
  },
  5349: (DD, CD, cD) => {
    var ID = cD(5318),
      pD = cD(5357),
      iD = cD(5389),
      fD = cD(5413),
      bD = cD(5509),
      QD = cD(4940),
      wD = cD(5462),
      SD = cD(5476),
      BD = "[object Arguments]",
      yD = "[object Array]",
      MD = "[object Object]",
      tD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD, CD, cD, ZD, oD, vD) {
      var ND = QD(DD),
        gD = QD(CD),
        XD = ND ? yD : bD(DD),
        mD = gD ? yD : bD(CD),
        nD = (XD = XD == BD ? MD : XD) == MD,
        OD = (mD = mD == BD ? MD : mD) == MD,
        PD = XD == mD;
      if (PD && wD(DD)) {
        if (!wD(CD)) return !1;
        ND = !0, nD = !1
      }
      if (PD && !nD) return vD || (vD = new ID), ND || SD(DD) ? pD(DD, CD, cD, ZD, oD, vD) : iD(DD, CD, XD, cD, ZD, oD, vD);
      if (!(1 & cD)) {
        var HD = nD && tD.call(DD, "__wrapped__"),
          UD = OD && tD.call(CD, "__wrapped__");
        if (HD || UD) {
          var xD = HD ? DD.value() : DD,
            qD = UD ? CD.value() : CD;
          return vD || (vD = new ID), oD(xD, qD, cD, ZD, vD)
        }
      }
      return !!PD && (vD || (vD = new ID), fD(DD, CD, cD, ZD, oD, vD))
    }
  },
  5316: (DD, CD, cD) => {
    var ID = cD(5318),
      pD = cD(5342);
    DD.exports = function(DD, CD, cD, iD) {
      var fD = cD.length,
        bD = fD,
        QD = !iD;
      if (null == DD) return !bD;
      for (DD = Object(DD); fD--;) {
        var wD = cD[fD];
        if (QD && wD[2] ? wD[1] !== DD[wD[0]] : !(wD[0] in DD)) return !1
      }
      for (; ++fD < bD;) {
        var SD = (wD = cD[fD])[0],
          BD = DD[SD],
          yD = wD[1];
        if (QD && wD[2]) {
          if (void 0 === BD && !(SD in DD)) return !1
        } else {
          var MD = new ID;
          if (iD) var tD = iD(BD, yD, SD, DD, CD, MD);
          if (!(void 0 === tD ? pD(yD, BD, 3, iD, MD) : tD)) return !1
        }
      }
      return !0
    }
  },
  5756: DD => {
    DD.exports = function(DD) {
      return DD !== DD
    }
  },
  5024: (DD, CD, cD) => {
    var ID = cD(5032),
      pD = cD(5038),
      iD = cD(4852),
      fD = cD(5049),
      bD = /^\[object .+?Constructor\]$/,
      QD = Function.prototype,
      wD = Object.prototype,
      SD = QD.toString,
      BD = wD.hasOwnProperty,
      yD = RegExp("^" + SD.call(BD).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    DD.exports = function(DD) {
      return !(!iD(DD) || pD(DD)) && (ID(DD) ? yD : bD).test(fD(DD))
    }
  },
  5485: (DD, CD, cD) => {
    var ID = cD(4901),
      pD = cD(5253),
      iD = cD(4919),
      fD = {};
    fD["[object Float32Array]"] = fD["[object Float64Array]"] = fD["[object Int8Array]"] = fD["[object Int16Array]"] = fD["[object Int32Array]"] = fD["[object Uint8Array]"] = fD["[object Uint8ClampedArray]"] = fD["[object Uint16Array]"] = fD["[object Uint32Array]"] = !0, fD["[object Arguments]"] = fD["[object Array]"] = fD["[object ArrayBuffer]"] = fD["[object Boolean]"] = fD["[object DataView]"] = fD["[object Date]"] = fD["[object Error]"] = fD["[object Function]"] = fD["[object Map]"] = fD["[object Number]"] = fD["[object Object]"] = fD["[object RegExp]"] = fD["[object Set]"] = fD["[object String]"] = fD["[object WeakMap]"] = !1, DD.exports = function(DD) {
      return iD(DD) && pD(DD.length) && !!fD[ID(DD)]
    }
  },
  5306: (DD, CD, cD) => {
    var ID = cD(5312),
      pD = cD(5542),
      iD = cD(5565),
      fD = cD(4940),
      bD = cD(5568);
    DD.exports = function(DD) {
      return "function" == typeof DD ? DD : null == DD ? iD : "object" == typeof DD ? fD(DD) ? pD(DD[0], DD[1]) : ID(DD) : bD(DD)
    }
  },
  5493: (DD, CD, cD) => {
    var ID = cD(5495),
      pD = cD(5502),
      iD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD) {
      if (!ID(DD)) return pD(DD);
      var CD = [];
      for (var cD in Object(DD)) iD.call(DD, cD) && "constructor" != cD && CD.push(cD);
      return CD
    }
  },
  5912: DD => {
    DD.exports = function(DD, CD) {
      return DD < CD
    }
  },
  5584: (DD, CD, cD) => {
    var ID = cD(5589),
      pD = cD(5244);
    DD.exports = function(DD, CD) {
      var cD = -1,
        iD = pD(DD) ? Array(DD.length) : [];
      return ID(DD, (function(DD, ID, pD) {
        iD[++cD] = CD(DD, ID, pD)
      })), iD
    }
  },
  5312: (DD, CD, cD) => {
    var ID = cD(5316),
      pD = cD(5532),
      iD = cD(5538);
    DD.exports = function(DD) {
      var CD = pD(DD);
      return 1 == CD.length && CD[0][2] ? iD(CD[0][0], CD[0][1]) : function(cD) {
        return cD === DD || ID(cD, DD, CD)
      }
    }
  },
  5542: (DD, CD, cD) => {
    var ID = cD(5342),
      pD = cD(4959),
      iD = cD(5549),
      fD = cD(4981),
      bD = cD(5534),
      QD = cD(5538),
      wD = cD(5167);
    DD.exports = function(DD, CD) {
      return fD(DD) && bD(CD) ? QD(wD(DD), CD) : function(cD) {
        var fD = pD(cD, DD);
        return void 0 === fD && fD === CD ? iD(cD, DD) : ID(CD, fD, 3)
      }
    }
  },
  5302: (DD, CD, cD) => {
    var ID = cD(5165),
      pD = cD(4968),
      iD = cD(5306),
      fD = cD(5584),
      bD = cD(5618),
      QD = cD(5487),
      wD = cD(5620),
      SD = cD(5565),
      BD = cD(4940);
    DD.exports = function(DD, CD, cD) {
      CD = CD.length ? ID(CD, (function(DD) {
        return BD(DD) ? function(CD) {
          return pD(CD, 1 === DD.length ? DD[0] : DD)
        } : DD
      })) : [SD];
      var yD = -1;
      CD = ID(CD, QD(iD));
      var MD = fD(DD, (function(DD, cD, pD) {
        return {
          criteria: ID(CD, (function(CD) {
            return CD(DD)
          })),
          index: ++yD,
          value: DD
        }
      }));
      return bD(MD, (function(DD, CD) {
        return wD(DD, CD, cD)
      }))
    }
  },
  5574: DD => {
    DD.exports = function(DD) {
      return function(CD) {
        return null == CD ? void 0 : CD[DD]
      }
    }
  },
  5582: (DD, CD, cD) => {
    var ID = cD(4968);
    DD.exports = function(DD) {
      return function(CD) {
        return ID(CD, DD)
      }
    }
  },
  5234: DD => {
    var CD = Math.ceil,
      cD = Math.max;
    DD.exports = function(DD, ID, pD, iD) {
      for (var fD = -1, bD = cD(CD((ID - DD) / (pD || 1)), 0), QD = Array(bD); bD--;) QD[iD ? bD : ++fD] = DD, DD += pD;
      return QD
    }
  },
  5634: (DD, CD, cD) => {
    var ID = cD(5565),
      pD = cD(5641),
      iD = cD(5658);
    DD.exports = function(DD, CD) {
      return iD(pD(DD, CD, ID), DD + "")
    }
  },
  5665: (DD, CD, cD) => {
    var ID = cD(5670),
      pD = cD(5674),
      iD = cD(5565),
      fD = pD ? function(DD, CD) {
        return pD(DD, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ID(CD),
          writable: !0
        })
      } : iD;
    DD.exports = fD
  },
  5801: DD => {
    DD.exports = function(DD, CD, cD) {
      var ID = -1,
        pD = DD.length;
      CD < 0 && (CD = -CD > pD ? 0 : pD + CD), (cD = cD > pD ? pD : cD) < 0 && (cD += pD), pD = CD > cD ? 0 : cD - CD >>> 0, CD >>>= 0;
      for (var iD = Array(pD); ++ID < pD;) iD[ID] = DD[ID + CD];
      return iD
    }
  },
  6066: (DD, CD, cD) => {
    var ID = cD(5589);
    DD.exports = function(DD, CD) {
      var cD;
      return ID(DD, (function(DD, ID, pD) {
        return !(cD = CD(DD, ID, pD))
      })), !!cD
    }
  },
  5618: DD => {
    DD.exports = function(DD, CD) {
      var cD = DD.length;
      for (DD.sort(CD); cD--;) DD[cD] = DD[cD].value;
      return DD
    }
  },
  5460: DD => {
    DD.exports = function(DD, CD) {
      for (var cD = -1, ID = Array(DD); ++cD < DD;) ID[cD] = CD(cD);
      return ID
    }
  },
  5163: (DD, CD, cD) => {
    var ID = cD(4906),
      pD = cD(5165),
      iD = cD(4940),
      fD = cD(4895),
      bD = ID ? ID.prototype : void 0,
      QD = bD ? bD.toString : void 0;
    DD.exports = function DD(CD) {
      if ("string" == typeof CD) return CD;
      if (iD(CD)) return pD(CD, DD) + "";
      if (fD(CD)) return QD ? QD.call(CD) : "";
      var cD = CD + "";
      return "0" == cD && 1 / CD == -1 / 0 ? "-0" : cD
    }
  },
  4883: (DD, CD, cD) => {
    var ID = cD(4890),
      pD = /^\s+/;
    DD.exports = function(DD) {
      return DD ? DD.slice(0, ID(DD) + 1).replace(pD, "") : DD
    }
  },
  5487: DD => {
    DD.exports = function(DD) {
      return function(CD) {
        return DD(CD)
      }
    }
  },
  5733: (DD, CD, cD) => {
    var ID = cD(5362),
      pD = cD(5742),
      iD = cD(5765),
      fD = cD(5384),
      bD = cD(5772),
      QD = cD(5405);
    DD.exports = function(DD, CD, cD) {
      var wD = -1,
        SD = pD,
        BD = DD.length,
        yD = !0,
        MD = [],
        tD = MD;
      if (cD) yD = !1, SD = iD;
      else if (BD >= 200) {
        var ZD = CD ? null : bD(DD);
        if (ZD) return QD(ZD);
        yD = !1, SD = fD, tD = new ID
      } else tD = CD ? [] : MD;
      DD: for (; ++wD < BD;) {
        var oD = DD[wD],
          vD = CD ? CD(oD) : oD;
        if (oD = cD || 0 !== oD ? oD : 0, yD && vD === vD) {
          for (var ND = tD.length; ND--;)
            if (tD[ND] === vD) continue DD;
          CD && tD.push(vD), MD.push(oD)
        } else SD(tD, vD, cD) || (tD !== MD && tD.push(vD), MD.push(oD))
      }
      return MD
    }
  },
  5384: DD => {
    DD.exports = function(DD, CD) {
      return DD.has(CD)
    }
  },
  4972: (DD, CD, cD) => {
    var ID = cD(4940),
      pD = cD(4981),
      iD = cD(4983),
      fD = cD(5155);
    DD.exports = function(DD, CD) {
      return ID(DD) ? DD : pD(DD, CD) ? [DD] : iD(fD(DD))
    }
  },
  5795: (DD, CD, cD) => {
    var ID = cD(5801);
    DD.exports = function(DD, CD, cD) {
      var pD = DD.length;
      return cD = void 0 === cD ? pD : cD, !CD && cD >= pD ? DD : ID(DD, CD, cD)
    }
  },
  5626: (DD, CD, cD) => {
    var ID = cD(4895);
    DD.exports = function(DD, CD) {
      if (DD !== CD) {
        var cD = void 0 !== DD,
          pD = null === DD,
          iD = DD === DD,
          fD = ID(DD),
          bD = void 0 !== CD,
          QD = null === CD,
          wD = CD === CD,
          SD = ID(CD);
        if (!QD && !SD && !fD && DD > CD || fD && bD && wD && !QD && !SD || pD && bD && wD || !cD && wD || !iD) return 1;
        if (!pD && !fD && !SD && DD < CD || SD && cD && iD && !pD && !fD || QD && cD && iD || !bD && iD || !wD) return -1
      }
      return 0
    }
  },
  5620: (DD, CD, cD) => {
    var ID = cD(5626);
    DD.exports = function(DD, CD, cD) {
      for (var pD = -1, iD = DD.criteria, fD = CD.criteria, bD = iD.length, QD = cD.length; ++pD < bD;) {
        var wD = ID(iD[pD], fD[pD]);
        if (wD) return pD >= QD ? wD : wD * ("desc" == cD[pD] ? -1 : 1)
      }
      return DD.index - CD.index
    }
  },
  5043: (DD, CD, cD) => {
    var ID = cD(4859)["__core-js_shared__"];
    DD.exports = ID
  },
  5615: (DD, CD, cD) => {
    var ID = cD(5244);
    DD.exports = function(DD, CD) {
      return function(cD, pD) {
        if (null == cD) return cD;
        if (!ID(cD)) return DD(cD, pD);
        for (var iD = cD.length, fD = CD ? iD : -1, bD = Object(cD);
          (CD ? fD-- : ++fD < iD) && !1 !== pD(bD[fD], fD, bD););
        return cD
      }
    }
  },
  5609: DD => {
    DD.exports = function(DD) {
      return function(CD, cD, ID) {
        for (var pD = -1, iD = Object(CD), fD = ID(CD), bD = fD.length; bD--;) {
          var QD = fD[DD ? bD : ++pD];
          if (!1 === cD(iD[QD], QD, iD)) break
        }
        return CD
      }
    }
  },
  5792: (DD, CD, cD) => {
    var ID = cD(5795),
      pD = cD(5810),
      iD = cD(5819),
      fD = cD(5155);
    DD.exports = function(DD) {
      return function(CD) {
        CD = fD(CD);
        var cD = pD(CD) ? iD(CD) : void 0,
          bD = cD ? cD[0] : CD.charAt(0),
          QD = cD ? ID(cD, 1).join("") : CD.slice(1);
        return bD[DD]() + QD
      }
    }
  },
  6082: (DD, CD, cD) => {
    var ID = cD(5306),
      pD = cD(5244),
      iD = cD(5442);
    DD.exports = function(DD) {
      return function(CD, cD, fD) {
        var bD = Object(CD);
        if (!pD(CD)) {
          var QD = ID(cD, 3);
          CD = iD(CD), cD = function(DD) {
            return QD(bD[DD], DD, bD)
          }
        }
        var wD = DD(CD, cD, fD);
        return wD > -1 ? bD[QD ? CD[wD] : wD] : void 0
      }
    }
  },
  5231: (DD, CD, cD) => {
    var ID = cD(5234),
      pD = cD(5240),
      iD = cD(5261);
    DD.exports = function(DD) {
      return function(CD, cD, fD) {
        return fD && "number" != typeof fD && pD(CD, cD, fD) && (cD = fD = void 0), CD = iD(CD), void 0 === cD ? (cD = CD, CD = 0) : cD = iD(cD), fD = void 0 === fD ? CD < cD ? 1 : -1 : iD(fD), ID(CD, cD, fD, DD)
      }
    }
  },
  5772: (DD, CD, cD) => {
    var ID = cD(5526),
      pD = cD(5775),
      iD = cD(5405),
      fD = ID && 1 / iD(new ID([, -0]))[1] == 1 / 0 ? function(DD) {
        return new ID(DD)
      } : pD;
    DD.exports = fD
  },
  5674: (DD, CD, cD) => {
    var ID = cD(5022),
      pD = function() {
        try {
          var DD = ID(Object, "defineProperty");
          return DD({}, "", {}), DD
        } catch (CD) {}
      }();
    DD.exports = pD
  },
  5357: (DD, CD, cD) => {
    var ID = cD(5362),
      pD = cD(5382),
      iD = cD(5384);
    DD.exports = function(DD, CD, cD, fD, bD, QD) {
      var wD = 1 & cD,
        SD = DD.length,
        BD = CD.length;
      if (SD != BD && !(wD && BD > SD)) return !1;
      var yD = QD.get(DD),
        MD = QD.get(CD);
      if (yD && MD) return yD == CD && MD == DD;
      var tD = -1,
        ZD = !0,
        oD = 2 & cD ? new ID : void 0;
      for (QD.set(DD, CD), QD.set(CD, DD); ++tD < SD;) {
        var vD = DD[tD],
          ND = CD[tD];
        if (fD) var gD = wD ? fD(ND, vD, tD, CD, DD, QD) : fD(vD, ND, tD, DD, CD, QD);
        if (void 0 !== gD) {
          if (gD) continue;
          ZD = !1;
          break
        }
        if (oD) {
          if (!pD(CD, (function(DD, CD) {
              if (!iD(oD, CD) && (vD === DD || bD(vD, DD, cD, fD, QD))) return oD.push(CD)
            }))) {
            ZD = !1;
            break
          }
        } else if (vD !== ND && !bD(vD, ND, cD, fD, QD)) {
          ZD = !1;
          break
        }
      }
      return QD.delete(DD), QD.delete(CD), ZD
    }
  },
  5389: (DD, CD, cD) => {
    var ID = cD(4906),
      pD = cD(5398),
      iD = cD(5107),
      fD = cD(5357),
      bD = cD(5402),
      QD = cD(5405),
      wD = ID ? ID.prototype : void 0,
      SD = wD ? wD.valueOf : void 0;
    DD.exports = function(DD, CD, cD, ID, wD, BD, yD) {
      switch (cD) {
        case "[object DataView]":
          if (DD.byteLength != CD.byteLength || DD.byteOffset != CD.byteOffset) return !1;
          DD = DD.buffer, CD = CD.buffer;
        case "[object ArrayBuffer]":
          return !(DD.byteLength != CD.byteLength || !BD(new pD(DD), new pD(CD)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return iD(+DD, +CD);
        case "[object Error]":
          return DD.name == CD.name && DD.message == CD.message;
        case "[object RegExp]":
        case "[object String]":
          return DD == CD + "";
        case "[object Map]":
          var MD = bD;
        case "[object Set]":
          var tD = 1 & ID;
          if (MD || (MD = QD), DD.size != CD.size && !tD) return !1;
          var ZD = yD.get(DD);
          if (ZD) return ZD == CD;
          ID |= 2, yD.set(DD, CD);
          var oD = fD(MD(DD), MD(CD), ID, wD, BD, yD);
          return yD.delete(DD), oD;
        case "[object Symbol]":
          if (SD) return SD.call(DD) == SD.call(CD)
      }
      return !1
    }
  },
  5413: (DD, CD, cD) => {
    var ID = cD(5419),
      pD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD, CD, cD, iD, fD, bD) {
      var QD = 1 & cD,
        wD = ID(DD),
        SD = wD.length;
      if (SD != ID(CD).length && !QD) return !1;
      for (var BD = SD; BD--;) {
        var yD = wD[BD];
        if (!(QD ? yD in CD : pD.call(CD, yD))) return !1
      }
      var MD = bD.get(DD),
        tD = bD.get(CD);
      if (MD && tD) return MD == CD && tD == DD;
      var ZD = !0;
      bD.set(DD, CD), bD.set(CD, DD);
      for (var oD = QD; ++BD < SD;) {
        var vD = DD[yD = wD[BD]],
          ND = CD[yD];
        if (iD) var gD = QD ? iD(ND, vD, yD, CD, DD, bD) : iD(vD, ND, yD, DD, CD, bD);
        if (!(void 0 === gD ? vD === ND || fD(vD, ND, cD, iD, bD) : gD)) {
          ZD = !1;
          break
        }
        oD || (oD = "constructor" == yD)
      }
      if (ZD && !oD) {
        var XD = DD.constructor,
          mD = CD.constructor;
        XD == mD || !("constructor" in DD) || !("constructor" in CD) || "function" == typeof XD && XD instanceof XD && "function" == typeof mD && mD instanceof mD || (ZD = !1)
      }
      return bD.delete(DD), bD.delete(CD), ZD
    }
  },
  4868: (DD, CD, cD) => {
    var ID = "object" == typeof cD.g && cD.g && cD.g.Object === Object && cD.g;
    DD.exports = ID
  },
  5419: (DD, CD, cD) => {
    var ID = cD(5425),
      pD = cD(5429),
      iD = cD(5442);
    DD.exports = function(DD) {
      return ID(DD, iD, pD)
    }
  },
  5133: (DD, CD, cD) => {
    var ID = cD(5135);
    DD.exports = function(DD, CD) {
      var cD = DD.__data__;
      return ID(CD) ? cD["string" == typeof CD ? "string" : "hash"] : cD.map
    }
  },
  5532: (DD, CD, cD) => {
    var ID = cD(5534),
      pD = cD(5442);
    DD.exports = function(DD) {
      for (var CD = pD(DD), cD = CD.length; cD--;) {
        var iD = CD[cD],
          fD = DD[iD];
        CD[cD] = [iD, fD, ID(fD)]
      }
      return CD
    }
  },
  5022: (DD, CD, cD) => {
    var ID = cD(5024),
      pD = cD(5057);
    DD.exports = function(DD, CD) {
      var cD = pD(DD, CD);
      return ID(cD) ? cD : void 0
    }
  },
  6028: (DD, CD, cD) => {
    var ID = cD(5504)(Object.getPrototypeOf, Object);
    DD.exports = ID
  },
  4910: (DD, CD, cD) => {
    var ID = cD(4906),
      pD = Object.prototype,
      iD = pD.hasOwnProperty,
      fD = pD.toString,
      bD = ID ? ID.toStringTag : void 0;
    DD.exports = function(DD) {
      var CD = iD.call(DD, bD),
        cD = DD[bD];
      try {
        DD[bD] = void 0;
        var ID = !0
      } catch (QD) {}
      var pD = fD.call(DD);
      return ID && (CD ? DD[bD] = cD : delete DD[bD]), pD
    }
  },
  5429: (DD, CD, cD) => {
    var ID = cD(5433),
      pD = cD(5439),
      iD = Object.prototype.propertyIsEnumerable,
      fD = Object.getOwnPropertySymbols,
      bD = fD ? function(DD) {
        return null == DD ? [] : (DD = Object(DD), ID(fD(DD), (function(CD) {
          return iD.call(DD, CD)
        })))
      } : pD;
    DD.exports = bD
  },
  5509: (DD, CD, cD) => {
    var ID = cD(5514),
      pD = cD(5124),
      iD = cD(5517),
      fD = cD(5526),
      bD = cD(5530),
      QD = cD(4901),
      wD = cD(5049),
      SD = "[object Map]",
      BD = "[object Promise]",
      yD = "[object Set]",
      MD = "[object WeakMap]",
      tD = "[object DataView]",
      ZD = wD(ID),
      oD = wD(pD),
      vD = wD(iD),
      ND = wD(fD),
      gD = wD(bD),
      XD = QD;
    (ID && XD(new ID(new ArrayBuffer(1))) != tD || pD && XD(new pD) != SD || iD && XD(iD.resolve()) != BD || fD && XD(new fD) != yD || bD && XD(new bD) != MD) && (XD = function(DD) {
      var CD = QD(DD),
        cD = "[object Object]" == CD ? DD.constructor : void 0,
        ID = cD ? wD(cD) : "";
      if (ID) switch (ID) {
        case ZD:
          return tD;
        case oD:
          return SD;
        case vD:
          return BD;
        case ND:
          return yD;
        case gD:
          return MD
      }
      return CD
    }), DD.exports = XD
  },
  5057: DD => {
    DD.exports = function(DD, CD) {
      return null == DD ? void 0 : DD[CD]
    }
  },
  5560: (DD, CD, cD) => {
    var ID = cD(4972),
      pD = cD(5291),
      iD = cD(4940),
      fD = cD(5257),
      bD = cD(5253),
      QD = cD(5167);
    DD.exports = function(DD, CD, cD) {
      for (var wD = -1, SD = (CD = ID(CD, DD)).length, BD = !1; ++wD < SD;) {
        var yD = QD(CD[wD]);
        if (!(BD = null != DD && cD(DD, yD))) break;
        DD = DD[yD]
      }
      return BD || ++wD != SD ? BD : !!(SD = null == DD ? 0 : DD.length) && bD(SD) && fD(yD, SD) && (iD(DD) || pD(DD))
    }
  },
  5810: DD => {
    var CD = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    DD.exports = function(DD) {
      return CD.test(DD)
    }
  },
  5015: (DD, CD, cD) => {
    var ID = cD(5019);
    DD.exports = function() {
      this.__data__ = ID ? ID(null) : {}, this.size = 0
    }
  },
  5064: DD => {
    DD.exports = function(DD) {
      var CD = this.has(DD) && delete this.__data__[DD];
      return this.size -= CD ? 1 : 0, CD
    }
  },
  5071: (DD, CD, cD) => {
    var ID = cD(5019),
      pD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD) {
      var CD = this.__data__;
      if (ID) {
        var cD = CD[DD];
        return "__lodash_hash_undefined__" === cD ? void 0 : cD
      }
      return pD.call(CD, DD) ? CD[DD] : void 0
    }
  },
  5079: (DD, CD, cD) => {
    var ID = cD(5019),
      pD = Object.prototype.hasOwnProperty;
    DD.exports = function(DD) {
      var CD = this.__data__;
      return ID ? void 0 !== CD[DD] : pD.call(CD, DD)
    }
  },
  5082: (DD, CD, cD) => {
    var ID = cD(5019);
    DD.exports = function(DD, CD) {
      var cD = this.__data__;
      return this.size += this.has(DD) ? 0 : 1, cD[DD] = ID && void 0 === CD ? "__lodash_hash_undefined__" : CD, this
    }
  },
  5282: (DD, CD, cD) => {
    var ID = cD(4906),
      pD = cD(5291),
      iD = cD(4940),
      fD = ID ? ID.isConcatSpreadable : void 0;
    DD.exports = function(DD) {
      return iD(DD) || pD(DD) || !!(fD && DD && DD[fD])
    }
  },
  5257: DD => {
    var CD = /^(?:0|[1-9]\d*)$/;
    DD.exports = function(DD, cD) {
      var ID = typeof DD;
      return !!(cD = null == cD ? 9007199254740991 : cD) && ("number" == ID || "symbol" != ID && CD.test(DD)) && DD > -1 && DD % 1 == 0 && DD < cD
    }
  },
  5240: (DD, CD, cD) => {
    var ID = cD(5107),
      pD = cD(5244),
      iD = cD(5257),
      fD = cD(4852);
    DD.exports = function(DD, CD, cD) {
      if (!fD(cD)) return !1;
      var bD = typeof CD;
      return !!("number" == bD ? pD(cD) && iD(CD, cD.length) : "string" == bD && CD in cD) && ID(cD[CD], DD)
    }
  },
  4981: (DD, CD, cD) => {
    var ID = cD(4940),
      pD = cD(4895),
      iD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      fD = /^\w*$/;
    DD.exports = function(DD, CD) {
      if (ID(DD)) return !1;
      var cD = typeof DD;
      return !("number" != cD && "symbol" != cD && "boolean" != cD && null != DD && !pD(DD)) || (fD.test(DD) || !iD.test(DD) || null != CD && DD in Object(CD))
    }
  },
  5135: DD => {
    DD.exports = function(DD) {
      var CD = typeof DD;
      return "string" == CD || "number" == CD || "symbol" == CD || "boolean" == CD ? "__proto__" !== DD : null === DD
    }
  },
  5038: (DD, CD, cD) => {
    var ID = cD(5043),
      pD = function() {
        var DD = /[^.]+$/.exec(ID && ID.keys && ID.keys.IE_PROTO || "");
        return DD ? "Symbol(src)_1." + DD : ""
      }();
    DD.exports = function(DD) {
      return !!pD && pD in DD
    }
  },
  5495: DD => {
    var CD = Object.prototype;
    DD.exports = function(DD) {
      var cD = DD && DD.constructor;
      return DD === ("function" == typeof cD && cD.prototype || CD)
    }
  },
  5534: (DD, CD, cD) => {
    var ID = cD(4852);
    DD.exports = function(DD) {
      return DD === DD && !ID(DD)
    }
  },
  5090: DD => {
    DD.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5094: (DD, CD, cD) => {
    var ID = cD(5103),
      pD = Array.prototype.splice;
    DD.exports = function(DD) {
      var CD = this.__data__,
        cD = ID(CD, DD);
      return !(cD < 0) && (cD == CD.length - 1 ? CD.pop() : pD.call(CD, cD, 1), --this.size, !0)
    }
  },
  5110: (DD, CD, cD) => {
    var ID = cD(5103);
    DD.exports = function(DD) {
      var CD = this.__data__,
        cD = ID(CD, DD);
      return cD < 0 ? void 0 : CD[cD][1]
    }
  },
  5114: (DD, CD, cD) => {
    var ID = cD(5103);
    DD.exports = function(DD) {
      return ID(this.__data__, DD) > -1
    }
  },
  5122: (DD, CD, cD) => {
    var ID = cD(5103);
    DD.exports = function(DD, CD) {
      var cD = this.__data__,
        pD = ID(cD, DD);
      return pD < 0 ? (++this.size, cD.push([DD, CD])) : cD[pD][1] = CD, this
    }
  },
  4999: (DD, CD, cD) => {
    var ID = cD(5007),
      pD = cD(5084),
      iD = cD(5124);
    DD.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new ID,
        map: new(iD || pD),
        string: new ID
      }
    }
  },
  5126: (DD, CD, cD) => {
    var ID = cD(5133);
    DD.exports = function(DD) {
      var CD = ID(this, DD).delete(DD);
      return this.size -= CD ? 1 : 0, CD
    }
  },
  5138: (DD, CD, cD) => {
    var ID = cD(5133);
    DD.exports = function(DD) {
      return ID(this, DD).get(DD)
    }
  },
  5140: (DD, CD, cD) => {
    var ID = cD(5133);
    DD.exports = function(DD) {
      return ID(this, DD).has(DD)
    }
  },
  5149: (DD, CD, cD) => {
    var ID = cD(5133);
    DD.exports = function(DD, CD) {
      var cD = ID(this, DD),
        pD = cD.size;
      return cD.set(DD, CD), this.size += cD.size == pD ? 0 : 1, this
    }
  },
  5402: DD => {
    DD.exports = function(DD) {
      var CD = -1,
        cD = Array(DD.size);
      return DD.forEach((function(DD, ID) {
        cD[++CD] = [ID, DD]
      })), cD
    }
  },
  5538: DD => {
    DD.exports = function(DD, CD) {
      return function(cD) {
        return null != cD && (cD[DD] === CD && (void 0 !== CD || DD in Object(cD)))
      }
    }
  },
  4989: (DD, CD, cD) => {
    var ID = cD(4991);
    DD.exports = function(DD) {
      var CD = ID(DD, (function(DD) {
          return 500 === cD.size && cD.clear(), DD
        })),
        cD = CD.cache;
      return CD
    }
  },
  5019: (DD, CD, cD) => {
    var ID = cD(5022)(Object, "create");
    DD.exports = ID
  },
  5502: (DD, CD, cD) => {
    var ID = cD(5504)(Object.keys, Object);
    DD.exports = ID
  },
  5489: (DD, CD, cD) => {
    DD = cD.nmd(DD);
    var ID = cD(4868),
      pD = CD && !CD.nodeType && CD,
      iD = pD && DD && !DD.nodeType && DD,
      fD = iD && iD.exports === pD && ID.process,
      bD = function() {
        try {
          var DD = iD && iD.require && iD.require("util").types;
          return DD || fD && fD.binding && fD.binding("util")
        } catch (CD) {}
      }();
    DD.exports = bD
  },
  4914: DD => {
    var CD = Object.prototype.toString;
    DD.exports = function(DD) {
      return CD.call(DD)
    }
  },
  5504: DD => {
    DD.exports = function(DD, CD) {
      return function(cD) {
        return DD(CD(cD))
      }
    }
  },
  5641: (DD, CD, cD) => {
    var ID = cD(5650),
      pD = Math.max;
    DD.exports = function(DD, CD, cD) {
      return CD = pD(void 0 === CD ? DD.length - 1 : CD, 0),
        function() {
          for (var iD = arguments, fD = -1, bD = pD(iD.length - CD, 0), QD = Array(bD); ++fD < bD;) QD[fD] = iD[CD + fD];
          fD = -1;
          for (var wD = Array(CD + 1); ++fD < CD;) wD[fD] = iD[fD];
          return wD[CD] = cD(QD), ID(DD, this, wD)
        }
    }
  },
  4859: (DD, CD, cD) => {
    var ID = cD(4868),
      pD = "object" == typeof self && self && self.Object === Object && self,
      iD = ID || pD || Function("return this")();
    DD.exports = iD
  },
  5371: DD => {
    DD.exports = function(DD) {
      return this.__data__.set(DD, "__lodash_hash_undefined__"), this
    }
  },
  5373: DD => {
    DD.exports = function(DD) {
      return this.__data__.has(DD)
    }
  },
  5405: DD => {
    DD.exports = function(DD) {
      var CD = -1,
        cD = Array(DD.size);
      return DD.forEach((function(DD) {
        cD[++CD] = DD
      })), cD
    }
  },
  5658: (DD, CD, cD) => {
    var ID = cD(5665),
      pD = cD(5681)(ID);
    DD.exports = pD
  },
  5681: DD => {
    var CD = Date.now;
    DD.exports = function(DD) {
      var cD = 0,
        ID = 0;
      return function() {
        var pD = CD(),
          iD = 16 - (pD - ID);
        if (ID = pD, iD > 0) {
          if (++cD >= 800) return arguments[0]
        } else cD = 0;
        return DD.apply(void 0, arguments)
      }
    }
  },
  5323: (DD, CD, cD) => {
    var ID = cD(5084);
    DD.exports = function() {
      this.__data__ = new ID, this.size = 0
    }
  },
  5332: DD => {
    DD.exports = function(DD) {
      var CD = this.__data__,
        cD = CD.delete(DD);
      return this.size = CD.size, cD
    }
  },
  5334: DD => {
    DD.exports = function(DD) {
      return this.__data__.get(DD)
    }
  },
  5337: DD => {
    DD.exports = function(DD) {
      return this.__data__.has(DD)
    }
  },
  5340: (DD, CD, cD) => {
    var ID = cD(5084),
      pD = cD(5124),
      iD = cD(4997);
    DD.exports = function(DD, CD) {
      var cD = this.__data__;
      if (cD instanceof ID) {
        var fD = cD.__data__;
        if (!pD || fD.length < 199) return fD.push([DD, CD]), this.size = ++cD.size, this;
        cD = this.__data__ = new iD(fD)
      }
      return cD.set(DD, CD), this.size = cD.size, this
    }
  },
  5760: DD => {
    DD.exports = function(DD, CD, cD) {
      for (var ID = cD - 1, pD = DD.length; ++ID < pD;)
        if (DD[ID] === CD) return ID;
      return -1
    }
  },
  5819: (DD, CD, cD) => {
    var ID = cD(5826),
      pD = cD(5810),
      iD = cD(5828);
    DD.exports = function(DD) {
      return pD(DD) ? iD(DD) : ID(DD)
    }
  },
  4983: (DD, CD, cD) => {
    var ID = cD(4989),
      pD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      iD = /\\(\\)?/g,
      fD = ID((function(DD) {
        var CD = [];
        return 46 === DD.charCodeAt(0) && CD.push(""), DD.replace(pD, (function(DD, cD, ID, pD) {
          CD.push(ID ? pD.replace(iD, "$1") : cD || DD)
        })), CD
      }));
    DD.exports = fD
  },
  5167: (DD, CD, cD) => {
    var ID = cD(4895);
    DD.exports = function(DD) {
      if ("string" == typeof DD || ID(DD)) return DD;
      var CD = DD + "";
      return "0" == CD && 1 / DD == -1 / 0 ? "-0" : CD
    }
  },
  5049: DD => {
    var CD = Function.prototype.toString;
    DD.exports = function(DD) {
      if (null != DD) {
        try {
          return CD.call(DD)
        } catch (cD) {}
        try {
          return DD + ""
        } catch (cD) {}
      }
      return ""
    }
  },
  4890: DD => {
    var CD = /\s/;
    DD.exports = function(DD) {
      for (var cD = DD.length; cD-- && CD.test(DD.charAt(cD)););
      return cD
    }
  },
  5828: DD => {
    var CD = "\\ud800-\\udfff",
      cD = "[" + CD + "]",
      ID = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      pD = "\\ud83c[\\udffb-\\udfff]",
      iD = "[^" + CD + "]",
      fD = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      bD = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      QD = "(?:" + ID + "|" + pD + ")" + "?",
      wD = "[\\ufe0e\\ufe0f]?",
      SD = wD + QD + ("(?:\\u200d(?:" + [iD, fD, bD].join("|") + ")" + wD + QD + ")*"),
      BD = "(?:" + [iD + ID + "?", ID, fD, bD, cD].join("|") + ")",
      yD = RegExp(pD + "(?=" + pD + ")|" + BD + SD, "g");
    DD.exports = function(DD) {
      return DD.match(yD) || []
    }
  },
  5670: DD => {
    DD.exports = function(DD) {
      return function() {
        return DD
      }
    }
  },
  4849: (DD, CD, cD) => {
    var ID = cD(4852),
      pD = cD(4857),
      iD = cD(4876),
      fD = Math.max,
      bD = Math.min;
    DD.exports = function(DD, CD, cD) {
      var QD, wD, SD, BD, yD, MD, tD = 0,
        ZD = !1,
        oD = !1,
        vD = !0;
      if ("function" != typeof DD) throw new TypeError("Expected a function");

      function ND(CD) {
        var cD = QD,
          ID = wD;
        return QD = wD = void 0, tD = CD, BD = DD.apply(ID, cD)
      }

      function gD(DD) {
        var cD = DD - MD;
        return void 0 === MD || cD >= CD || cD < 0 || oD && DD - tD >= SD
      }

      function XD() {
        var DD = pD();
        if (gD(DD)) return mD(DD);
        yD = setTimeout(XD, function(DD) {
          var cD = CD - (DD - MD);
          return oD ? bD(cD, SD - (DD - tD)) : cD
        }(DD))
      }

      function mD(DD) {
        return yD = void 0, vD && QD ? ND(DD) : (QD = wD = void 0, BD)
      }

      function nD() {
        var DD = pD(),
          cD = gD(DD);
        if (QD = arguments, wD = this, MD = DD, cD) {
          if (void 0 === yD) return function(DD) {
            return tD = DD, yD = setTimeout(XD, CD), ZD ? ND(DD) : BD
          }(MD);
          if (oD) return clearTimeout(yD), yD = setTimeout(XD, CD), ND(MD)
        }
        return void 0 === yD && (yD = setTimeout(XD, CD)), BD
      }
      return CD = iD(CD) || 0, ID(cD) && (ZD = !!cD.leading, SD = (oD = "maxWait" in cD) ? fD(iD(cD.maxWait) || 0, CD) : SD, vD = "trailing" in cD ? !!cD.trailing : vD), nD.cancel = function() {
        void 0 !== yD && clearTimeout(yD), tD = 0, QD = MD = wD = yD = void 0
      }, nD.flush = function() {
        return void 0 === yD ? BD : mD(pD())
      }, nD
    }
  },
  5107: DD => {
    DD.exports = function(DD, CD) {
      return DD === CD || DD !== DD && CD !== CD
    }
  },
  5975: (DD, CD, cD) => {
    var ID = cD(5977),
      pD = cD(5983),
      iD = cD(5306),
      fD = cD(4940),
      bD = cD(5240);
    DD.exports = function(DD, CD, cD) {
      var QD = fD(DD) ? ID : pD;
      return cD && bD(DD, CD, cD) && (CD = void 0), QD(DD, iD(CD, 3))
    }
  },
  6074: (DD, CD, cD) => {
    var ID = cD(6082)(cD(6091));
    DD.exports = ID
  },
  6091: (DD, CD, cD) => {
    var ID = cD(5749),
      pD = cD(5306),
      iD = cD(6093),
      fD = Math.max;
    DD.exports = function(DD, CD, cD) {
      var bD = null == DD ? 0 : DD.length;
      if (!bD) return -1;
      var QD = null == cD ? 0 : iD(cD);
      return QD < 0 && (QD = fD(bD + QD, 0)), ID(DD, pD(CD, 3), QD)
    }
  },
  5917: (DD, CD, cD) => {
    var ID = cD(5271),
      pD = cD(5924);
    DD.exports = function(DD, CD) {
      return ID(pD(DD, CD), 1)
    }
  },
  4959: (DD, CD, cD) => {
    var ID = cD(4968);
    DD.exports = function(DD, CD, cD) {
      var pD = null == DD ? void 0 : ID(DD, CD);
      return void 0 === pD ? cD : pD
    }
  },
  5549: (DD, CD, cD) => {
    var ID = cD(5558),
      pD = cD(5560);
    DD.exports = function(DD, CD) {
      return null != DD && pD(DD, CD, ID)
    }
  },
  5565: DD => {
    DD.exports = function(DD) {
      return DD
    }
  },
  5291: (DD, CD, cD) => {
    var ID = cD(5297),
      pD = cD(4919),
      iD = Object.prototype,
      fD = iD.hasOwnProperty,
      bD = iD.propertyIsEnumerable,
      QD = ID(function() {
        return arguments
      }()) ? ID : function(DD) {
        return pD(DD) && fD.call(DD, "callee") && !bD.call(DD, "callee")
      };
    DD.exports = QD
  },
  4940: DD => {
    var CD = Array.isArray;
    DD.exports = CD
  },
  5244: (DD, CD, cD) => {
    var ID = cD(5032),
      pD = cD(5253);
    DD.exports = function(DD) {
      return null != DD && pD(DD.length) && !ID(DD)
    }
  },
  6037: (DD, CD, cD) => {
    var ID = cD(4901),
      pD = cD(4919);
    DD.exports = function(DD) {
      return !0 === DD || !1 === DD || pD(DD) && "[object Boolean]" == ID(DD)
    }
  },
  5462: (DD, CD, cD) => {
    DD = cD.nmd(DD);
    var ID = cD(4859),
      pD = cD(5467),
      iD = CD && !CD.nodeType && CD,
      fD = iD && DD && !DD.nodeType && DD,
      bD = fD && fD.exports === iD ? ID.lt : void 0,
      QD = (bD ? bD.isBuffer : void 0) || pD;
    DD.exports = QD
  },
  5927: (DD, CD, cD) => {
    var ID = cD(5342);
    DD.exports = function(DD, CD) {
      return ID(DD, CD)
    }
  },
  5032: (DD, CD, cD) => {
    var ID = cD(4901),
      pD = cD(4852);
    DD.exports = function(DD) {
      if (!pD(DD)) return !1;
      var CD = ID(DD);
      return "[object Function]" == CD || "[object GeneratorFunction]" == CD || "[object AsyncFunction]" == CD || "[object Proxy]" == CD
    }
  },
  5253: DD => {
    DD.exports = function(DD) {
      return "number" == typeof DD && DD > -1 && DD % 1 == 0 && DD <= 9007199254740991
    }
  },
  4945: (DD, CD, cD) => {
    var ID = cD(4951);
    DD.exports = function(DD) {
      return ID(DD) && DD != +DD
    }
  },
  5175: DD => {
    DD.exports = function(DD) {
      return null == DD
    }
  },
  4951: (DD, CD, cD) => {
    var ID = cD(4901),
      pD = cD(4919);
    DD.exports = function(DD) {
      return "number" == typeof DD || pD(DD) && "[object Number]" == ID(DD)
    }
  },
  4852: DD => {
    DD.exports = function(DD) {
      var CD = typeof DD;
      return null != DD && ("object" == CD || "function" == CD)
    }
  },
  4919: DD => {
    DD.exports = function(DD) {
      return null != DD && "object" == typeof DD
    }
  },
  6021: (DD, CD, cD) => {
    var ID = cD(4901),
      pD = cD(6028),
      iD = cD(4919),
      fD = Function.prototype,
      bD = Object.prototype,
      QD = fD.toString,
      wD = bD.hasOwnProperty,
      SD = QD.call(Object);
    DD.exports = function(DD) {
      if (!iD(DD) || "[object Object]" != ID(DD)) return !1;
      var CD = pD(DD);
      if (null === CD) return !0;
      var cD = wD.call(CD, "constructor") && CD.constructor;
      return "function" == typeof cD && cD instanceof cD && QD.call(cD) == SD
    }
  },
  4934: (DD, CD, cD) => {
    var ID = cD(4901),
      pD = cD(4940),
      iD = cD(4919);
    DD.exports = function(DD) {
      return "string" == typeof DD || !pD(DD) && iD(DD) && "[object String]" == ID(DD)
    }
  },
  4895: (DD, CD, cD) => {
    var ID = cD(4901),
      pD = cD(4919);
    DD.exports = function(DD) {
      return "symbol" == typeof DD || pD(DD) && "[object Symbol]" == ID(DD)
    }
  },
  5476: (DD, CD, cD) => {
    var ID = cD(5485),
      pD = cD(5487),
      iD = cD(5489),
      fD = iD && iD.isTypedArray,
      bD = fD ? pD(fD) : ID;
    DD.exports = bD
  },
  5442: (DD, CD, cD) => {
    var ID = cD(5451),
      pD = cD(5493),
      iD = cD(5244);
    DD.exports = function(DD) {
      return iD(DD) ? ID(DD) : pD(DD)
    }
  },
  6005: DD => {
    DD.exports = function(DD) {
      var CD = null == DD ? 0 : DD.length;
      return CD ? DD[CD - 1] : void 0
    }
  },
  5924: (DD, CD, cD) => {
    var ID = cD(5165),
      pD = cD(5306),
      iD = cD(5584),
      fD = cD(4940);
    DD.exports = function(DD, CD) {
      return (fD(DD) ? ID : iD)(DD, pD(CD, 3))
    }
  },
  5968: (DD, CD, cD) => {
    var ID = cD(5972),
      pD = cD(5593),
      iD = cD(5306);
    DD.exports = function(DD, CD) {
      var cD = {};
      return CD = iD(CD, 3), pD(DD, (function(DD, pD, iD) {
        ID(cD, pD, CD(DD, pD, iD))
      })), cD
    }
  },
  5896: (DD, CD, cD) => {
    var ID = cD(5900),
      pD = cD(5905),
      iD = cD(5565);
    DD.exports = function(DD) {
      return DD && DD.length ? ID(DD, iD, pD) : void 0
    }
  },
  4991: (DD, CD, cD) => {
    var ID = cD(4997);

    function pD(DD, CD) {
      if ("function" != typeof DD || null != CD && "function" != typeof CD) throw new TypeError("Expected a function");
      var cD = function() {
        var ID = arguments,
          pD = CD ? CD.apply(this, ID) : ID[0],
          iD = cD.cache;
        if (iD.has(pD)) return iD.get(pD);
        var fD = DD.apply(this, ID);
        return cD.cache = iD.set(pD, fD) || iD, fD
      };
      return cD.cache = new(pD.Cache || ID), cD
    }
    pD.Cache = ID, DD.exports = pD
  },
  5907: (DD, CD, cD) => {
    var ID = cD(5900),
      pD = cD(5912),
      iD = cD(5565);
    DD.exports = function(DD) {
      return DD && DD.length ? ID(DD, iD, pD) : void 0
    }
  },
  5775: DD => {
    DD.exports = function() {}
  },
  4857: (DD, CD, cD) => {
    var ID = cD(4859);
    DD.exports = function() {
      return ID.Date.now()
    }
  },
  5568: (DD, CD, cD) => {
    var ID = cD(5574),
      pD = cD(5582),
      iD = cD(4981),
      fD = cD(5167);
    DD.exports = function(DD) {
      return iD(DD) ? ID(fD(DD)) : pD(DD)
    }
  },
  5223: (DD, CD, cD) => {
    var ID = cD(5231)();
    DD.exports = ID
  },
  6059: (DD, CD, cD) => {
    var ID = cD(5382),
      pD = cD(5306),
      iD = cD(6066),
      fD = cD(4940),
      bD = cD(5240);
    DD.exports = function(DD, CD, cD) {
      var QD = fD(DD) ? ID : iD;
      return cD && bD(DD, CD, cD) && (CD = void 0), QD(DD, pD(CD, 3))
    }
  },
  5268: (DD, CD, cD) => {
    var ID = cD(5271),
      pD = cD(5302),
      iD = cD(5634),
      fD = cD(5240),
      bD = iD((function(DD, CD) {
        if (null == DD) return [];
        var cD = CD.length;
        return cD > 1 && fD(DD, CD[0], CD[1]) ? CD = [] : cD > 2 && fD(CD[0], CD[1], CD[2]) && (CD = [CD[0]]), pD(DD, ID(CD, 1), [])
      }));
    DD.exports = bD
  },
  5439: DD => {
    DD.exports = function() {
      return []
    }
  },
  5467: DD => {
    DD.exports = function() {
      return !1
    }
  },
  4845: (DD, CD, cD) => {
    var ID = cD(4849),
      pD = cD(4852);
    DD.exports = function(DD, CD, cD) {
      var iD = !0,
        fD = !0;
      if ("function" != typeof DD) throw new TypeError("Expected a function");
      return pD(cD) && (iD = "leading" in cD ? !!cD.leading : iD, fD = "trailing" in cD ? !!cD.trailing : fD), ID(DD, CD, {
        leading: iD,
        maxWait: CD,
        trailing: fD
      })
    }
  },
  5261: (DD, CD, cD) => {
    var ID = cD(4876),
      pD = 1 / 0;
    DD.exports = function(DD) {
      return DD ? (DD = ID(DD)) === pD || DD === -1 / 0 ? 17976931348623157e292 * (DD < 0 ? -1 : 1) : DD === DD ? DD : 0 : 0 === DD ? DD : 0
    }
  },
  6093: (DD, CD, cD) => {
    var ID = cD(5261);
    DD.exports = function(DD) {
      var CD = ID(DD),
        cD = CD % 1;
      return CD === CD ? cD ? CD - cD : CD : 0
    }
  },
  4876: (DD, CD, cD) => {
    var ID = cD(4883),
      pD = cD(4852),
      iD = cD(4895),
      fD = /^[-+]0x[0-9a-f]+$/i,
      bD = /^0b[01]+$/i,
      QD = /^0o[0-7]+$/i,
      wD = parseInt;
    DD.exports = function(DD) {
      if ("number" == typeof DD) return DD;
      if (iD(DD)) return NaN;
      if (pD(DD)) {
        var CD = "function" == typeof DD.valueOf ? DD.valueOf() : DD;
        DD = pD(CD) ? CD + "" : CD
      }
      if ("string" != typeof DD) return 0 === DD ? DD : +DD;
      DD = ID(DD);
      var cD = bD.test(DD);
      return cD || QD.test(DD) ? wD(DD.slice(2), cD ? 2 : 8) : fD.test(DD) ? NaN : +DD
    }
  },
  5155: (DD, CD, cD) => {
    var ID = cD(5163);
    DD.exports = function(DD) {
      return null == DD ? "" : ID(DD)
    }
  },
  5727: (DD, CD, cD) => {
    var ID = cD(5306),
      pD = cD(5733);
    DD.exports = function(DD, CD) {
      return DD && DD.length ? pD(DD, ID(CD, 2)) : []
    }
  },
  5783: (DD, CD, cD) => {
    var ID = cD(5792)("toUpperCase");
    DD.exports = ID
  },
  5860: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => lC
    });
    var ID = cD(53),
      pD = cD(4741),
      iD = cD.n(pD);
    const {
      getOwnPropertyNames: fD,
      getOwnPropertySymbols: bD
    } = Object, {
      hasOwnProperty: QD
    } = Object.prototype;

    function wD(DD, CD) {
      return function(cD, ID, pD) {
        return DD(cD, ID, pD) && CD(cD, ID, pD)
      }
    }

    function SD(DD) {
      return function(CD, cD, ID) {
        if (!CD || !cD || "object" !== typeof CD || "object" !== typeof cD) return DD(CD, cD, ID);
        const {
          cache: pD
        } = ID, iD = pD.get(CD), fD = pD.get(cD);
        if (iD && fD) return iD === cD && fD === CD;
        pD.set(CD, cD), pD.set(cD, CD);
        const bD = DD(CD, cD, ID);
        return pD.delete(CD), pD.delete(cD), bD
      }
    }

    function BD(DD) {
      return fD(DD).concat(bD(DD))
    }
    const yD = Object.hasOwn || ((DD, CD) => QD.call(DD, CD));

    function MD(DD, CD) {
      return DD === CD || !DD && !CD && DD !== DD && CD !== CD
    }
    const {
      getOwnPropertyDescriptor: tD,
      keys: ZD
    } = Object;

    function oD(DD, CD) {
      return DD.byteLength === CD.byteLength && JD(new Uint8Array(DD), new Uint8Array(CD))
    }

    function vD(DD, CD, cD) {
      let ID = DD.length;
      if (CD.length !== ID) return !1;
      for (; ID-- > 0;)
        if (!cD.equals(DD[ID], CD[ID], ID, ID, DD, CD, cD)) return !1;
      return !0
    }

    function ND(DD, CD) {
      return DD.byteLength === CD.byteLength && JD(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength), new Uint8Array(CD.buffer, CD.byteOffset, CD.byteLength))
    }

    function gD(DD, CD) {
      return MD(DD.getTime(), CD.getTime())
    }

    function XD(DD, CD) {
      return DD.name === CD.name && DD.message === CD.message && DD.cause === CD.cause && DD.stack === CD.stack
    }

    function mD(DD, CD) {
      return DD === CD
    }

    function nD(DD, CD, cD) {
      const ID = DD.size;
      if (ID !== CD.size) return !1;
      if (!ID) return !0;
      const pD = new Array(ID),
        iD = DD.entries();
      let fD, bD, QD = 0;
      for (;
        (fD = iD.next()) && !fD.done;) {
        const ID = CD.entries();
        let iD = !1,
          wD = 0;
        for (;
          (bD = ID.next()) && !bD.done;) {
          if (pD[wD]) {
            wD++;
            continue
          }
          const ID = fD.value,
            SD = bD.value;
          if (cD.equals(ID[0], SD[0], QD, wD, DD, CD, cD) && cD.equals(ID[1], SD[1], ID[0], SD[0], DD, CD, cD)) {
            iD = pD[wD] = !0;
            break
          }
          wD++
        }
        if (!iD) return !1;
        QD++
      }
      return !0
    }
    const OD = MD;

    function PD(DD, CD, cD) {
      const ID = ZD(DD);
      let pD = ID.length;
      if (ZD(CD).length !== pD) return !1;
      for (; pD-- > 0;)
        if (!aD(DD, CD, cD, ID[pD])) return !1;
      return !0
    }

    function HD(DD, CD, cD) {
      const ID = BD(DD);
      let pD, iD, fD, bD = ID.length;
      if (BD(CD).length !== bD) return !1;
      for (; bD-- > 0;) {
        if (pD = ID[bD], !aD(DD, CD, cD, pD)) return !1;
        if (iD = tD(DD, pD), fD = tD(CD, pD), (iD || fD) && (!iD || !fD || iD.configurable !== fD.configurable || iD.enumerable !== fD.enumerable || iD.writable !== fD.writable)) return !1
      }
      return !0
    }

    function UD(DD, CD) {
      return MD(DD.valueOf(), CD.valueOf())
    }

    function xD(DD, CD) {
      return DD.source === CD.source && DD.flags === CD.flags
    }

    function qD(DD, CD, cD) {
      const ID = DD.size;
      if (ID !== CD.size) return !1;
      if (!ID) return !0;
      const pD = new Array(ID),
        iD = DD.values();
      let fD, bD;
      for (;
        (fD = iD.next()) && !fD.done;) {
        const ID = CD.values();
        let iD = !1,
          QD = 0;
        for (;
          (bD = ID.next()) && !bD.done;) {
          if (!pD[QD] && cD.equals(fD.value, bD.value, fD.value, bD.value, DD, CD, cD)) {
            iD = pD[QD] = !0;
            break
          }
          QD++
        }
        if (!iD) return !1
      }
      return !0
    }

    function JD(DD, CD) {
      let cD = DD.byteLength;
      if (CD.byteLength !== cD || DD.byteOffset !== CD.byteOffset) return !1;
      for (; cD-- > 0;)
        if (DD[cD] !== CD[cD]) return !1;
      return !0
    }

    function KD(DD, CD) {
      return DD.hostname === CD.hostname && DD.pathname === CD.pathname && DD.protocol === CD.protocol && DD.port === CD.port && DD.hash === CD.hash && DD.username === CD.username && DD.password === CD.password
    }

    function aD(DD, CD, cD, ID) {
      return !("_owner" !== ID && "__o" !== ID && "__v" !== ID || !DD.$$typeof && !CD.$$typeof) || yD(CD, ID) && cD.equals(DD[ID], CD[ID], ID, ID, DD, CD, cD)
    }
    const VD = {
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
      zD = Object.prototype.toString;

    function jD(DD) {
      let {
        areArrayBuffersEqual: CD,
        areArraysEqual: cD,
        areDataViewsEqual: ID,
        areDatesEqual: pD,
        areErrorsEqual: iD,
        areFunctionsEqual: fD,
        areMapsEqual: bD,
        areNumbersEqual: QD,
        areObjectsEqual: wD,
        arePrimitiveWrappersEqual: SD,
        areRegExpsEqual: BD,
        areSetsEqual: yD,
        areTypedArraysEqual: MD,
        areUrlsEqual: tD,
        unknownTagComparators: ZD
      } = DD;
      return function(DD, oD, vD) {
        if (DD === oD) return !0;
        if (null == DD || null == oD) return !1;
        const ND = typeof DD;
        if (ND !== typeof oD) return !1;
        if ("object" !== ND) return "number" === ND ? QD(DD, oD, vD) : "function" === ND && fD(DD, oD, vD);
        const gD = DD.constructor;
        if (gD !== oD.constructor) return !1;
        if (gD === Object) return wD(DD, oD, vD);
        if (Array.isArray(DD)) return cD(DD, oD, vD);
        if (gD === Date) return pD(DD, oD, vD);
        if (gD === RegExp) return BD(DD, oD, vD);
        if (gD === Map) return bD(DD, oD, vD);
        if (gD === Set) return yD(DD, oD, vD);
        const XD = zD.call(DD);
        if ("[object Date]" === XD) return pD(DD, oD, vD);
        if ("[object RegExp]" === XD) return BD(DD, oD, vD);
        if ("[object Map]" === XD) return bD(DD, oD, vD);
        if ("[object Set]" === XD) return yD(DD, oD, vD);
        if ("[object Object]" === XD) return "function" !== typeof DD.then && "function" !== typeof oD.then && wD(DD, oD, vD);
        if ("[object URL]" === XD) return tD(DD, oD, vD);
        if ("[object Error]" === XD) return iD(DD, oD, vD);
        if ("[object Arguments]" === XD) return wD(DD, oD, vD);
        if (VD[XD]) return MD(DD, oD, vD);
        if ("[object ArrayBuffer]" === XD) return CD(DD, oD, vD);
        if ("[object DataView]" === XD) return ID(DD, oD, vD);
        if ("[object Boolean]" === XD || "[object Number]" === XD || "[object String]" === XD) return SD(DD, oD, vD);
        if (ZD) {
          let CD = ZD[XD];
          if (!CD) {
            const cD = null != (mD = DD) ? mD[Symbol.toStringTag] : void 0;
            cD && (CD = ZD[cD])
          }
          if (CD) return CD(DD, oD, vD)
        }
        var mD;
        return !1
      }
    }
    const lD = LD();
    LD({
      strict: !0
    }), LD({
      circular: !0
    }), LD({
      circular: !0,
      strict: !0
    }), LD({
      createInternalComparator: () => MD
    }), LD({
      strict: !0,
      createInternalComparator: () => MD
    }), LD({
      circular: !0,
      createInternalComparator: () => MD
    }), LD({
      circular: !0,
      createInternalComparator: () => MD,
      strict: !0
    });

    function LD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: CD = !1,
        createInternalComparator: cD,
        createState: ID,
        strict: pD = !1
      } = DD, iD = function(DD) {
        let {
          circular: CD,
          createCustomConfig: cD,
          strict: ID
        } = DD, pD = {
          areArrayBuffersEqual: oD,
          areArraysEqual: ID ? HD : vD,
          areDataViewsEqual: ND,
          areDatesEqual: gD,
          areErrorsEqual: XD,
          areFunctionsEqual: mD,
          areMapsEqual: ID ? wD(nD, HD) : nD,
          areNumbersEqual: OD,
          areObjectsEqual: ID ? HD : PD,
          arePrimitiveWrappersEqual: UD,
          areRegExpsEqual: xD,
          areSetsEqual: ID ? wD(qD, HD) : qD,
          areTypedArraysEqual: ID ? wD(JD, HD) : JD,
          areUrlsEqual: KD,
          unknownTagComparators: void 0
        };
        if (cD && (pD = Object.assign({}, pD, cD(pD))), CD) {
          const DD = SD(pD.areArraysEqual),
            CD = SD(pD.areMapsEqual),
            cD = SD(pD.areObjectsEqual),
            ID = SD(pD.areSetsEqual);
          pD = Object.assign({}, pD, {
            areArraysEqual: DD,
            areMapsEqual: CD,
            areObjectsEqual: cD,
            areSetsEqual: ID
          })
        }
        return pD
      }(DD), fD = jD(iD);
      var bD;
      return function(DD) {
        let {
          circular: CD,
          comparator: cD,
          createState: ID,
          equals: pD,
          strict: iD
        } = DD;
        if (ID) return function(DD, fD) {
          const {
            cache: bD = (CD ? new WeakMap : void 0),
            meta: QD
          } = ID();
          return cD(DD, fD, {
            cache: bD,
            equals: pD,
            meta: QD,
            strict: iD
          })
        };
        if (CD) return function(DD, CD) {
          return cD(DD, CD, {
            cache: new WeakMap,
            equals: pD,
            meta: void 0,
            strict: iD
          })
        };
        const fD = {
          cache: void 0,
          equals: pD,
          meta: void 0,
          strict: iD
        };
        return function(DD, CD) {
          return cD(DD, CD, fD)
        }
      }({
        circular: CD,
        comparator: fD,
        createState: ID,
        equals: cD ? cD(fD) : (bD = fD, function(DD, CD, cD, ID, pD, iD, fD) {
          return bD(DD, CD, fD)
        }),
        strict: pD
      })
    }

    function TD(DD) {
      var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cD = -1;
      requestAnimationFrame((function ID(pD) {
        cD < 0 && (cD = pD), pD - cD > CD ? (DD(pD), cD = -1) : function(DD) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(DD)
        }(ID)
      }))
    }

    function GD(DD) {
      return GD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, GD(DD)
    }

    function RD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return kD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return kD(DD, CD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function dD() {
      var DD = function() {
          return null
        },
        CD = !1,
        cD = function cD(ID) {
          if (!CD) {
            if (Array.isArray(ID)) {
              if (!ID.length) return;
              var pD = RD(ID),
                iD = pD[0],
                fD = pD.slice(1);
              return "number" === typeof iD ? void TD(cD.bind(null, fD), iD) : (cD(iD), void TD(cD.bind(null, fD)))
            }
            "object" === GD(ID) && DD(ID), "function" === typeof ID && ID()
          }
        };
      return {
        stop: function() {
          CD = !0
        },
        start: function(DD) {
          CD = !1, cD(DD)
        },
        subscribe: function(CD) {
          return DD = CD,
            function() {
              DD = function() {
                return null
              }
            }
        }
      }
    }

    function YD(DD) {
      return YD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, YD(DD)
    }

    function WD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function sD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? WD(Object(cD), !0).forEach((function(CD) {
          ED(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : WD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function ED(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" !== YD(DD) || null === DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" !== YD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" === YD(CD) ? CD : String(CD)
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var eD = function(DD) {
        return DD
      },
      uD = function(DD, CD) {
        return Object.keys(CD).reduce((function(cD, ID) {
          return sD(sD({}, cD), {}, ED({}, ID, DD(ID, CD[ID])))
        }), {})
      },
      hD = function(DD, CD, cD) {
        return DD.map((function(DD) {
          return "".concat((ID = DD, ID.replace(/([A-Z])/g, (function(DD) {
            return "-".concat(DD.toLowerCase())
          }))), " ").concat(CD, "ms ").concat(cD);
          var ID
        })).join(",")
      };

    function rD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || FD(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return DC(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || FD(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FD(DD, CD) {
      if (DD) {
        if ("string" === typeof DD) return DC(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === cD && DD.constructor && (cD = DD.constructor.name), "Map" === cD || "Set" === cD ? Array.from(DD) : "Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD) ? DC(DD, CD) : void 0
      }
    }

    function DC(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }
    var CC = 1e-4,
      cC = function(DD, CD) {
        return [0, 3 * DD, 3 * CD - 6 * DD, 3 * DD - 3 * CD + 1]
      },
      IC = function(DD, CD) {
        return DD.map((function(DD, cD) {
          return DD * Math.pow(CD, cD)
        })).reduce((function(DD, CD) {
          return DD + CD
        }))
      },
      pC = function(DD, CD) {
        return function(cD) {
          var ID = cC(DD, CD);
          return IC(ID, cD)
        }
      },
      iC = function() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        var ID = CD[0],
          pD = CD[1],
          iD = CD[2],
          fD = CD[3];
        if (1 === CD.length) switch (CD[0]) {
          case "linear":
            ID = 0, pD = 0, iD = 1, fD = 1;
            break;
          case "ease":
            ID = .25, pD = .1, iD = .25, fD = 1;
            break;
          case "ease-in":
            ID = .42, pD = 0, iD = 1, fD = 1;
            break;
          case "ease-out":
            ID = .42, pD = 0, iD = .58, fD = 1;
            break;
          case "ease-in-out":
            ID = 0, pD = 0, iD = .58, fD = 1;
            break;
          default:
            var bD = CD[0].split("(");
            if ("cubic-bezier" === bD[0] && 4 === bD[1].split(")")[0].split(",").length) {
              var QD = rD(bD[1].split(")")[0].split(",").map((function(DD) {
                return parseFloat(DD)
              })), 4);
              ID = QD[0], pD = QD[1], iD = QD[2], fD = QD[3]
            }
        } [ID, iD, pD, fD].every((function(DD) {
          return "number" === typeof DD && DD >= 0 && DD <= 1
        }));
        var wD, SD, BD = pC(ID, iD),
          yD = pC(pD, fD),
          MD = (wD = ID, SD = iD, function(DD) {
            var CD = cC(wD, SD),
              cD = [].concat(AD(CD.map((function(DD, CD) {
                return DD * CD
              })).slice(1)), [0]);
            return IC(cD, DD)
          }),
          tD = function(DD) {
            for (var CD, cD = DD > 1 ? 1 : DD, ID = cD, pD = 0; pD < 8; ++pD) {
              var iD = BD(ID) - cD,
                fD = MD(ID);
              if (Math.abs(iD - cD) < CC || fD < CC) return yD(ID);
              ID = (CD = ID - iD / fD) > 1 ? 1 : CD < 0 ? 0 : CD
            }
            return yD(ID)
          };
        return tD.isStepper = !1, tD
      },
      fC = function() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        var ID = CD[0];
        if ("string" === typeof ID) switch (ID) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return iC(ID);
          case "spring":
            return function() {
              var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                CD = DD.stiff,
                cD = void 0 === CD ? 100 : CD,
                ID = DD.damping,
                pD = void 0 === ID ? 8 : ID,
                iD = DD.dt,
                fD = void 0 === iD ? 17 : iD,
                bD = function(DD, CD, ID) {
                  var iD = ID + (-(DD - CD) * cD - ID * pD) * fD / 1e3,
                    bD = ID * fD / 1e3 + DD;
                  return Math.abs(bD - CD) < CC && Math.abs(iD) < CC ? [CD, 0] : [bD, iD]
                };
              return bD.isStepper = !0, bD.dt = fD, bD
            }();
          default:
            if ("cubic-bezier" === ID.split("(")[0]) return iC(ID)
        }
        return "function" === typeof ID ? ID : null
      };

    function bC(DD) {
      return bC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, bC(DD)
    }

    function QC(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return tC(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || MC(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wC(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function SC(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? wC(Object(cD), !0).forEach((function(CD) {
          BC(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : wC(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function BC(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" !== bC(DD) || null === DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" !== bC(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" === bC(CD) ? CD : String(CD)
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function yC(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || MC(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MC(DD, CD) {
      if (DD) {
        if ("string" === typeof DD) return tC(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === cD && DD.constructor && (cD = DD.constructor.name), "Map" === cD || "Set" === cD ? Array.from(DD) : "Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD) ? tC(DD, CD) : void 0
      }
    }

    function tC(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }
    var ZC = function(DD, CD, cD) {
        return DD + (CD - DD) * cD
      },
      oC = function(DD) {
        return DD.from !== DD.to
      },
      vC = function DD(CD, cD, ID) {
        var pD = uD((function(DD, cD) {
          if (oC(cD)) {
            var ID = yC(CD(cD.from, cD.to, cD.lb), 2),
              pD = ID[0],
              iD = ID[1];
            return SC(SC({}, cD), {}, {
              from: pD,
              lb: iD
            })
          }
          return cD
        }), cD);
        return ID < 1 ? uD((function(DD, CD) {
          return oC(CD) ? SC(SC({}, CD), {}, {
            lb: ZC(CD.lb, pD[DD].lb, ID),
            from: ZC(CD.from, pD[DD].from, ID)
          }) : CD
        }), cD) : DD(CD, pD, ID - 1)
      };
    const NC = function(DD, CD, cD, ID, pD) {
      var iD, fD, bD, QD, wD = (iD = DD, fD = CD, [Object.keys(iD), Object.keys(fD)].reduce((function(DD, CD) {
          return DD.filter((function(DD) {
            return CD.includes(DD)
          }))
        }))),
        SD = wD.reduce((function(cD, ID) {
          return SC(SC({}, cD), {}, BC({}, ID, [DD[ID], CD[ID]]))
        }), {}),
        BD = wD.reduce((function(cD, ID) {
          return SC(SC({}, cD), {}, BC({}, ID, {
            from: DD[ID],
            lb: 0,
            to: CD[ID]
          }))
        }), {}),
        yD = -1,
        MD = function() {
          return null
        };
      return MD = cD.isStepper ? function(ID) {
          bD || (bD = ID);
          var iD = (ID - bD) / cD.dt;
          BD = vC(cD, BD, iD), pD(SC(SC(SC({}, DD), CD), uD((function(DD, CD) {
            return CD.from
          }), BD))), bD = ID, Object.values(BD).filter(oC).length && (yD = requestAnimationFrame(MD))
        } : function(iD) {
          QD || (QD = iD);
          var fD = (iD - QD) / ID,
            bD = uD((function(DD, CD) {
              return ZC.apply(void 0, QC(CD).concat([cD(fD)]))
            }), SD);
          if (pD(SC(SC(SC({}, DD), CD), bD)), fD < 1) yD = requestAnimationFrame(MD);
          else {
            var wD = uD((function(DD, CD) {
              return ZC.apply(void 0, QC(CD).concat([cD(1)]))
            }), SD);
            pD(SC(SC(SC({}, DD), CD), wD))
          }
        },
        function() {
          return requestAnimationFrame(MD),
            function() {
              cancelAnimationFrame(yD)
            }
        }
    };

    function gC(DD) {
      return gC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, gC(DD)
    }
    var XC = ["children", "VM", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function mC(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD, ID, pD = {},
          iD = Object.keys(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || (pD[cD] = DD[cD]);
        return pD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function nC(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return OC(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return OC(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return OC(DD, CD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OC(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function PC(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function HC(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? PC(Object(cD), !0).forEach((function(CD) {
          UC(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : PC(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function UC(DD, CD, cD) {
      return (CD = qC(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function xC(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, qC(ID.key), ID)
      }
    }

    function qC(DD) {
      var CD = function(DD, CD) {
        if ("object" !== gC(DD) || null === DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" !== gC(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" === gC(CD) ? CD : String(CD)
    }

    function JC(DD, CD) {
      return JC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, JC(DD, CD)
    }

    function KC(DD) {
      var CD = function() {
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
        var cD, ID = zC(DD);
        if (CD) {
          var pD = zC(this).constructor;
          cD = Reflect.construct(ID, arguments, pD)
        } else cD = ID.apply(this, arguments);
        return aC(this, cD)
      }
    }

    function aC(DD, CD) {
      if (CD && ("object" === gC(CD) || "function" === typeof CD)) return CD;
      if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
      return VC(DD)
    }

    function VC(DD) {
      if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return DD
    }

    function zC(DD) {
      return zC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, zC(DD)
    }
    var jC = function(DD) {
      ! function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && JC(DD, CD)
      }(fD, DD);
      var CD, cD, pD, iD = KC(fD);

      function fD(DD, CD) {
        var cD;
        ! function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, fD);
        var ID = (cD = iD.call(this, DD, CD)).props,
          pD = ID.isActive,
          bD = ID.attributeName,
          QD = ID.from,
          wD = ID.to,
          SD = ID.steps,
          BD = ID.children,
          yD = ID.duration;
        if (cD.handleStyleChange = cD.handleStyleChange.bind(VC(cD)), cD.changeStyle = cD.changeStyle.bind(VC(cD)), !pD || yD <= 0) return cD.state = {
          style: {}
        }, "function" === typeof BD && (cD.state = {
          style: wD
        }), aC(cD);
        if (SD && SD.length) cD.state = {
          style: SD[0].style
        };
        else if (QD) {
          if ("function" === typeof BD) return cD.state = {
            style: QD
          }, aC(cD);
          cD.state = {
            style: bD ? UC({}, bD, QD) : QD
          }
        } else cD.state = {
          style: {}
        };
        return cD
      }
      return CD = fD, (cD = [{
        key: "componentDidMount",
        value: function() {
          var DD = this.props,
            CD = DD.isActive,
            cD = DD.canBegin;
          this.mounted = !0, CD && cD && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(DD) {
          var CD = this.props,
            cD = CD.isActive,
            ID = CD.canBegin,
            pD = CD.attributeName,
            iD = CD.shouldReAnimate,
            fD = CD.to,
            bD = CD.from,
            QD = this.state.style;
          if (ID)
            if (cD) {
              if (!(lD(DD.to, fD) && DD.canBegin && DD.isActive)) {
                var wD = !DD.canBegin || !DD.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var SD = wD || iD ? bD : DD.to;
                if (this.state && QD) {
                  var BD = {
                    style: pD ? UC({}, pD, SD) : SD
                  };
                  (pD && QD[pD] !== SD || !pD && QD !== SD) && this.setState(BD)
                }
                this.runAnimation(HC(HC({}, this.props), {}, {
                  from: SD,
                  VM: 0
                }))
              }
            } else {
              var yD = {
                style: pD ? UC({}, pD, fD) : fD
              };
              this.state && QD && (pD && QD[pD] !== fD || !pD && QD !== fD) && this.setState(yD)
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
          var CD = this,
            cD = DD.from,
            ID = DD.to,
            pD = DD.duration,
            iD = DD.easing,
            fD = DD.VM,
            bD = DD.onAnimationEnd,
            QD = DD.onAnimationStart,
            wD = NC(cD, ID, fC(iD), pD, this.changeStyle);
          this.manager.start([QD, fD, function() {
            CD.stopJSAnimation = wD()
          }, pD, bD])
        }
      }, {
        key: "runStepAnimation",
        value: function(DD) {
          var CD = this,
            cD = DD.steps,
            ID = DD.VM,
            pD = DD.onAnimationStart,
            iD = cD[0],
            fD = iD.style,
            bD = iD.duration,
            QD = void 0 === bD ? 0 : bD;
          return this.manager.start([pD].concat(nC(cD.reduce((function(DD, ID, pD) {
            if (0 === pD) return DD;
            var iD = ID.duration,
              fD = ID.easing,
              bD = void 0 === fD ? "ease" : fD,
              QD = ID.style,
              wD = ID.properties,
              SD = ID.onAnimationEnd,
              BD = pD > 0 ? cD[pD - 1] : ID,
              yD = wD || Object.keys(QD);
            if ("function" === typeof bD || "spring" === bD) return [].concat(nC(DD), [CD.runJSAnimation.bind(CD, {
              from: BD.style,
              to: QD,
              duration: iD,
              easing: bD
            }), iD]);
            var MD = hD(yD, iD, bD),
              tD = HC(HC(HC({}, BD.style), QD), {}, {
                transition: MD
              });
            return [].concat(nC(DD), [tD, iD, SD]).filter(eD)
          }), [fD, Math.max(QD, ID)])), [DD.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(DD) {
          this.manager || (this.manager = dD());
          var CD = DD.VM,
            cD = DD.duration,
            ID = DD.attributeName,
            pD = DD.to,
            iD = DD.easing,
            fD = DD.onAnimationStart,
            bD = DD.onAnimationEnd,
            QD = DD.steps,
            wD = DD.children,
            SD = this.manager;
          if (this.unSubscribe = SD.subscribe(this.handleStyleChange), "function" !== typeof iD && "function" !== typeof wD && "spring" !== iD)
            if (QD.length > 1) this.runStepAnimation(DD);
            else {
              var BD = ID ? UC({}, ID, pD) : pD,
                yD = hD(Object.keys(BD), cD, iD);
              SD.start([fD, CD, HC(HC({}, BD), {}, {
                transition: yD
              }), cD, bD])
            }
          else this.runJSAnimation(DD)
        }
      }, {
        key: "render",
        value: function() {
          var DD = this.props,
            CD = DD.children,
            cD = (DD.VM, DD.duration),
            pD = (DD.attributeName, DD.easing, DD.isActive),
            iD = (DD.steps, DD.from, DD.to, DD.canBegin, DD.onAnimationEnd, DD.shouldReAnimate, DD.onAnimationReStart, mC(DD, XC)),
            fD = ID.Children.count(CD),
            bD = this.state.style;
          if ("function" === typeof CD) return CD(bD);
          if (!pD || 0 === fD || cD <= 0) return CD;
          var QD = function(DD) {
            var CD = DD.props,
              cD = CD.style,
              pD = void 0 === cD ? {} : cD,
              fD = CD.className;
            return (0, ID.cloneElement)(DD, HC(HC({}, iD), {}, {
              style: HC(HC({}, pD), bD),
              className: fD
            }))
          };
          return 1 === fD ? QD(ID.Children.only(CD)) : ID.createElement("div", null, ID.Children.map(CD, (function(DD) {
            return QD(DD)
          })))
        }
      }]) && xC(CD.prototype, cD), pD && xC(CD, pD), Object.defineProperty(CD, "prototype", {
        writable: !1
      }), fD
    }(ID.PureComponent);
    jC.displayName = "Animate", jC.defaultProps = {
      VM: 0,
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
    }, jC.propTypes = {
      from: iD().oneOfType([iD().object, iD().string]),
      to: iD().oneOfType([iD().object, iD().string]),
      attributeName: iD().string,
      duration: iD().number,
      VM: iD().number,
      easing: iD().oneOfType([iD().string, iD().func]),
      steps: iD().arrayOf(iD().shape({
        duration: iD().number.isRequired,
        style: iD().object.isRequired,
        easing: iD().oneOfType([iD().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), iD().func]),
        properties: iD().arrayOf("string"),
        onAnimationEnd: iD().func
      })),
      children: iD().oneOfType([iD().node, iD().func]),
      isActive: iD().bool,
      canBegin: iD().bool,
      onAnimationEnd: iD().func,
      shouldReAnimate: iD().bool,
      onAnimationStart: iD().func,
      onAnimationReStart: iD().func
    };
    const lC = jC
  },
  6101: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => RD
    });
    var ID, pD = cD(53),
      iD = cD(4841),
      fD = cD(5860),
      bD = cD(5032),
      QD = cD.n(bD),
      wD = cD(5896),
      SD = cD.n(wD),
      BD = cD(5175),
      yD = cD.n(BD),
      MD = cD(4945),
      tD = cD.n(MD),
      ZD = cD(5927),
      oD = cD.n(ZD),
      vD = cD(6097),
      ND = cD(5849),
      gD = cD(5701),
      XD = cD(6002),
      mD = cD(5712),
      nD = cD(4927),
      OD = cD(5873),
      PD = cD(5185),
      HD = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      UD = ["key"];

    function xD(DD) {
      return xD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, xD(DD)
    }

    function qD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function JD() {
      return JD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, JD.apply(this, arguments)
    }

    function KD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function aD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? KD(Object(cD), !0).forEach((function(CD) {
          TD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : KD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function VD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, GD(ID.key), ID)
      }
    }

    function zD(DD, CD, cD) {
      return CD = lD(CD),
        function(DD, CD) {
          if (CD && ("object" === xD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, jD() ? Reflect.construct(CD, cD || [], lD(DD).constructor) : CD.apply(DD, cD))
    }

    function jD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (jD = function() {
        return !!DD
      })()
    }

    function lD(DD) {
      return lD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, lD(DD)
    }

    function LD(DD, CD) {
      return LD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, LD(DD, CD)
    }

    function TD(DD, CD, cD) {
      return (CD = GD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function GD(DD) {
      var CD = function(DD, CD) {
        if ("object" != xD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != xD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == xD(CD) ? CD : CD + ""
    }
    var RD = function(DD) {
      function CD() {
        var DD;
        ! function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD);
        for (var cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        return TD(DD = zD(this, CD, [].concat(ID)), "state", {
          isAnimationFinished: !0
        }), TD(DD, "id", (0, nD.M)("recharts-area-")), TD(DD, "handleAnimationEnd", (function() {
          var CD = DD.props.onAnimationEnd;
          DD.setState({
            isAnimationFinished: !0
          }), QD()(CD) && CD()
        })), TD(DD, "handleAnimationStart", (function() {
          var CD = DD.props.onAnimationStart;
          DD.setState({
            isAnimationFinished: !1
          }), QD()(CD) && CD()
        })), DD
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && LD(DD, CD)
      }(CD, DD), cD = CD, ID = [{
        key: "renderDots",
        value: function(DD, cD, ID) {
          var iD = this.props.isAnimationActive,
            fD = this.state.isAnimationFinished;
          if (iD && !fD) return null;
          var bD = this.props,
            QD = bD.dot,
            wD = bD.points,
            SD = bD.dataKey,
            BD = (0, PD.b)(this.props, !1),
            yD = (0, PD.b)(QD, !0),
            MD = wD.map((function(DD, cD) {
              var ID = aD(aD(aD({
                key: "dot-".concat(cD),
                r: 3
              }, BD), yD), {}, {
                index: cD,
                cx: DD.x,
                cy: DD.y,
                dataKey: SD,
                value: DD.value,
                payload: DD.payload,
                points: wD
              });
              return CD.renderDotItem(QD, ID)
            })),
            tD = {
              clipPath: DD ? "url(#clipPath-".concat(cD ? "" : "dots-").concat(ID, ")") : null
            };
          return pD.createElement(gD.d, JD({
            className: "recharts-area-dots"
          }, tD), MD)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(DD) {
          var CD = this.props,
            cD = CD.baseLine,
            ID = CD.points,
            iD = CD.strokeWidth,
            fD = ID[0].x,
            bD = ID[ID.length - 1].x,
            QD = DD * Math.abs(fD - bD),
            wD = SD()(ID.map((function(DD) {
              return DD.y || 0
            })));
          return (0, nD.G)(cD) && "number" === typeof cD ? wD = Math.max(cD, wD) : cD && Array.isArray(cD) && cD.length && (wD = Math.max(SD()(cD.map((function(DD) {
            return DD.y || 0
          }))), wD)), (0, nD.G)(wD) ? pD.createElement("rect", {
            x: fD < bD ? fD : fD - QD,
            y: 0,
            width: QD,
            height: Math.floor(wD + (iD ? parseInt("".concat(iD), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(DD) {
          var CD = this.props,
            cD = CD.baseLine,
            ID = CD.points,
            iD = CD.strokeWidth,
            fD = ID[0].y,
            bD = ID[ID.length - 1].y,
            QD = DD * Math.abs(fD - bD),
            wD = SD()(ID.map((function(DD) {
              return DD.x || 0
            })));
          return (0, nD.G)(cD) && "number" === typeof cD ? wD = Math.max(cD, wD) : cD && Array.isArray(cD) && cD.length && (wD = Math.max(SD()(cD.map((function(DD) {
            return DD.x || 0
          }))), wD)), (0, nD.G)(wD) ? pD.createElement("rect", {
            x: 0,
            y: fD < bD ? fD : fD - QD,
            width: wD + (iD ? parseInt("".concat(iD), 10) : 1),
            height: Math.floor(QD)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(DD) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(DD) : this.renderHorizontalRect(DD)
        }
      }, {
        key: "renderAreaStatically",
        value: function(DD, CD, cD, ID) {
          var iD = this.props,
            fD = iD.layout,
            bD = iD.type,
            QD = iD.stroke,
            wD = iD.connectNulls,
            SD = iD.isRange,
            BD = (iD.ref, qD(iD, HD));
          return pD.createElement(gD.d, {
            clipPath: cD ? "url(#clipPath-".concat(ID, ")") : null
          }, pD.createElement(vD.e, JD({}, (0, PD.b)(BD, !0), {
            points: DD,
            connectNulls: wD,
            type: bD,
            baseLine: CD,
            layout: fD,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== QD && pD.createElement(vD.e, JD({}, (0, PD.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: fD,
            type: bD,
            connectNulls: wD,
            fill: "none",
            points: DD
          })), "none" !== QD && SD && pD.createElement(vD.e, JD({}, (0, PD.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: fD,
            type: bD,
            connectNulls: wD,
            fill: "none",
            points: CD
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(DD, CD) {
          var cD = this,
            ID = this.props,
            iD = ID.points,
            bD = ID.baseLine,
            QD = ID.isAnimationActive,
            wD = ID.animationBegin,
            SD = ID.animationDuration,
            BD = ID.animationEasing,
            MD = ID.animationId,
            ZD = this.state,
            oD = ZD.prevPoints,
            vD = ZD.prevBaseLine;
          return pD.createElement(fD.d, {
            VM: wD,
            duration: SD,
            isActive: QD,
            easing: BD,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(MD),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(ID) {
            var fD = ID.t;
            if (oD) {
              var QD, wD = oD.length / iD.length,
                SD = iD.map((function(DD, CD) {
                  var cD = Math.floor(CD * wD);
                  if (oD[cD]) {
                    var ID = oD[cD],
                      pD = (0, nD.x)(ID.x, DD.x),
                      iD = (0, nD.x)(ID.y, DD.y);
                    return aD(aD({}, DD), {}, {
                      x: pD(fD),
                      y: iD(fD)
                    })
                  }
                  return DD
                }));
              return QD = (0, nD.G)(bD) && "number" === typeof bD ? (0, nD.x)(vD, bD)(fD) : yD()(bD) || tD()(bD) ? (0, nD.x)(vD, 0)(fD) : bD.map((function(DD, CD) {
                var cD = Math.floor(CD * wD);
                if (vD[cD]) {
                  var ID = vD[cD],
                    pD = (0, nD.x)(ID.x, DD.x),
                    iD = (0, nD.x)(ID.y, DD.y);
                  return aD(aD({}, DD), {}, {
                    x: pD(fD),
                    y: iD(fD)
                  })
                }
                return DD
              })), cD.renderAreaStatically(SD, QD, DD, CD)
            }
            return pD.createElement(gD.d, null, pD.createElement("defs", null, pD.createElement("clipPath", {
              id: "animationClipPath-".concat(CD)
            }, cD.renderClipRect(fD))), pD.createElement(gD.d, {
              clipPath: "url(#animationClipPath-".concat(CD, ")")
            }, cD.renderAreaStatically(iD, bD, DD, CD)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(DD, CD) {
          var cD = this.props,
            ID = cD.points,
            pD = cD.baseLine,
            iD = cD.isAnimationActive,
            fD = this.state,
            bD = fD.prevPoints,
            QD = fD.prevBaseLine,
            wD = fD.totalLength;
          return iD && ID && ID.length && (!bD && wD > 0 || !oD()(bD, ID) || !oD()(QD, pD)) ? this.renderAreaWithAnimation(DD, CD) : this.renderAreaStatically(ID, pD, DD, CD)
        }
      }, {
        key: "render",
        value: function() {
          var DD, CD = this.props,
            cD = CD.hide,
            ID = CD.dot,
            fD = CD.points,
            bD = CD.className,
            QD = CD.top,
            wD = CD.left,
            SD = CD.xAxis,
            BD = CD.yAxis,
            MD = CD.width,
            tD = CD.height,
            ZD = CD.isAnimationActive,
            oD = CD.id;
          if (cD || !fD || !fD.length) return null;
          var vD = this.state.isAnimationFinished,
            ND = 1 === fD.length,
            mD = (0, iD.e)("recharts-area", bD),
            nD = SD && SD.allowDataOverflow,
            OD = BD && BD.allowDataOverflow,
            HD = nD || OD,
            UD = yD()(oD) ? this.id : oD,
            xD = null !== (DD = (0, PD.b)(ID, !1)) && void 0 !== DD ? DD : {
              r: 3,
              strokeWidth: 2
            },
            qD = xD.r,
            JD = void 0 === qD ? 3 : qD,
            KD = xD.strokeWidth,
            aD = void 0 === KD ? 2 : KD,
            VD = ((0, PD.r)(ID) ? ID : {}).clipDot,
            zD = void 0 === VD || VD,
            jD = 2 * JD + aD;
          return pD.createElement(gD.d, {
            className: mD
          }, nD || OD ? pD.createElement("defs", null, pD.createElement("clipPath", {
            id: "clipPath-".concat(UD)
          }, pD.createElement("rect", {
            x: nD ? wD : wD - MD / 2,
            y: OD ? QD : QD - tD / 2,
            width: nD ? MD : 2 * MD,
            height: OD ? tD : 2 * tD
          })), !zD && pD.createElement("clipPath", {
            id: "clipPath-dots-".concat(UD)
          }, pD.createElement("rect", {
            x: wD - jD / 2,
            y: QD - jD / 2,
            width: MD + jD,
            height: tD + jD
          }))) : null, ND ? null : this.renderArea(HD, UD), (ID || ND) && this.renderDots(HD, zD, UD), (!ZD || vD) && XD.e.renderCallByParent(this.props, fD))
        }
      }], bD = [{
        key: "getDerivedStateFromProps",
        value: function(DD, CD) {
          return DD.animationId !== CD.prevAnimationId ? {
            prevAnimationId: DD.animationId,
            curPoints: DD.points,
            curBaseLine: DD.baseLine,
            prevPoints: CD.curPoints,
            prevBaseLine: CD.curBaseLine
          } : DD.points !== CD.curPoints || DD.baseLine !== CD.curBaseLine ? {
            curPoints: DD.points,
            curBaseLine: DD.baseLine
          } : null
        }
      }], ID && VD(cD.prototype, ID), bD && VD(cD, bD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, ID, bD
    }(pD.PureComponent);
    ID = RD, TD(RD, "displayName", "Area"), TD(RD, "defaultProps", {
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
      isAnimationActive: !mD.e.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), TD(RD, "getBaseValue", (function(DD, CD, cD, ID) {
      var pD = DD.layout,
        iD = DD.baseValue,
        fD = CD.props.baseValue,
        bD = null !== fD && void 0 !== fD ? fD : iD;
      if ((0, nD.G)(bD) && "number" === typeof bD) return bD;
      var QD = "horizontal" === pD ? ID : cD,
        wD = QD.scale.domain();
      if ("number" === QD.type) {
        var SD = Math.max(wD[0], wD[1]),
          BD = Math.min(wD[0], wD[1]);
        return "dataMin" === bD ? BD : "dataMax" === bD || SD < 0 ? SD : Math.max(Math.min(wD[0], wD[1]), 0)
      }
      return "dataMin" === bD ? wD[0] : "dataMax" === bD ? wD[1] : wD[0]
    })), TD(RD, "getComposedData", (function(DD) {
      var CD, cD = DD.props,
        pD = DD.item,
        iD = DD.xAxis,
        fD = DD.yAxis,
        bD = DD.xAxisTicks,
        QD = DD.yAxisTicks,
        wD = DD.bandSize,
        SD = DD.dataKey,
        BD = DD.stackedData,
        yD = DD.dataStartIndex,
        MD = DD.displayedData,
        tD = DD.offset,
        ZD = cD.layout,
        oD = BD && BD.length,
        vD = ID.getBaseValue(cD, pD, iD, fD),
        ND = "horizontal" === ZD,
        gD = !1,
        XD = MD.map((function(DD, CD) {
          var cD;
          oD ? cD = BD[yD + CD] : (cD = (0, OD.Q)(DD, SD), Array.isArray(cD) ? gD = !0 : cD = [vD, cD]);
          var ID = null == cD[1] || oD && null == (0, OD.Q)(DD, SD);
          return ND ? {
            x: (0, OD.u)({
              axis: iD,
              ticks: bD,
              bandSize: wD,
              entry: DD,
              index: CD
            }),
            y: ID ? null : fD.scale(cD[1]),
            value: cD,
            payload: DD
          } : {
            x: ID ? null : iD.scale(cD[1]),
            y: (0, OD.u)({
              axis: fD,
              ticks: QD,
              bandSize: wD,
              entry: DD,
              index: CD
            }),
            value: cD,
            payload: DD
          }
        }));
      return CD = oD || gD ? XD.map((function(DD) {
        var CD = Array.isArray(DD.value) ? DD.value[0] : null;
        return ND ? {
          x: DD.x,
          y: null != CD && null != DD.y ? fD.scale(CD) : null
        } : {
          x: null != CD ? iD.scale(CD) : null,
          y: DD.y
        }
      })) : ND ? fD.scale(vD) : iD.scale(vD), aD({
        points: XD,
        baseLine: CD,
        layout: ZD,
        isRange: gD
      }, tD)
    })), TD(RD, "renderDotItem", (function(DD, CD) {
      var cD;
      if (pD.isValidElement(DD)) cD = pD.cloneElement(DD, CD);
      else if (QD()(DD)) cD = DD(CD);
      else {
        var ID = (0, iD.e)("recharts-area-dot", "boolean" !== typeof DD ? DD.className : ""),
          fD = CD.key,
          bD = qD(CD, UD);
        cD = pD.createElement(ND.e, JD({}, bD, {
          key: fD,
          className: ID
        }))
      }
      return cD
    }))
  },
  5987: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => sD
    });
    var ID = cD(53),
      pD = cD(4841),
      iD = cD(5860),
      fD = cD(5927),
      bD = cD.n(fD),
      QD = cD(5175),
      wD = cD.n(QD),
      SD = cD(5701),
      BD = cD(5937),
      yD = cD(5994),
      MD = cD(6002),
      tD = cD(4927),
      ZD = cD(5185),
      oD = cD(5712),
      vD = cD(5873),
      ND = cD(5208),
      gD = cD(5688),
      XD = cD(6012),
      mD = ["x", "y"];

    function nD(DD) {
      return nD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, nD(DD)
    }

    function OD() {
      return OD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, OD.apply(this, arguments)
    }

    function PD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function HD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? PD(Object(cD), !0).forEach((function(CD) {
          UD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : PD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function UD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != nD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != nD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == nD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function xD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function qD(DD, CD) {
      var cD = DD.x,
        ID = DD.y,
        pD = xD(DD, mD),
        iD = "".concat(cD),
        fD = parseInt(iD, 10),
        bD = "".concat(ID),
        QD = parseInt(bD, 10),
        wD = "".concat(CD.height || pD.height),
        SD = parseInt(wD, 10),
        BD = "".concat(CD.width || pD.width),
        yD = parseInt(BD, 10);
      return HD(HD(HD(HD(HD({}, CD), pD), fD ? {
        x: fD
      } : {}), QD ? {
        y: QD
      } : {}), {}, {
        height: SD,
        width: yD,
        name: CD.name,
        radius: CD.radius
      })
    }

    function JD(DD) {
      return ID.createElement(XD.d, OD({
        shapeType: "rectangle",
        propTransformer: qD,
        activeClassName: "recharts-active-bar"
      }, DD))
    }
    var KD, aD = ["value", "background"];

    function VD(DD) {
      return VD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, VD(DD)
    }

    function zD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function jD() {
      return jD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, jD.apply(this, arguments)
    }

    function lD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function LD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? lD(Object(cD), !0).forEach((function(CD) {
          YD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : lD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function TD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, WD(ID.key), ID)
      }
    }

    function GD(DD, CD, cD) {
      return CD = kD(CD),
        function(DD, CD) {
          if (CD && ("object" === VD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, RD() ? Reflect.construct(CD, cD || [], kD(DD).constructor) : CD.apply(DD, cD))
    }

    function RD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (RD = function() {
        return !!DD
      })()
    }

    function kD(DD) {
      return kD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, kD(DD)
    }

    function dD(DD, CD) {
      return dD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, dD(DD, CD)
    }

    function YD(DD, CD, cD) {
      return (CD = WD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function WD(DD) {
      var CD = function(DD, CD) {
        if ("object" != VD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != VD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == VD(CD) ? CD : CD + ""
    }
    var sD = function(DD) {
      function CD() {
        var DD;
        ! function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD);
        for (var cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        return YD(DD = GD(this, CD, [].concat(ID)), "state", {
          isAnimationFinished: !1
        }), YD(DD, "id", (0, tD.M)("recharts-bar-")), YD(DD, "handleAnimationEnd", (function() {
          var CD = DD.props.onAnimationEnd;
          DD.setState({
            isAnimationFinished: !0
          }), CD && CD()
        })), YD(DD, "handleAnimationStart", (function() {
          var CD = DD.props.onAnimationStart;
          DD.setState({
            isAnimationFinished: !1
          }), CD && CD()
        })), DD
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && dD(DD, CD)
      }(CD, DD), cD = CD, fD = [{
        key: "renderRectanglesStatically",
        value: function(DD) {
          var CD = this,
            cD = this.props,
            pD = cD.shape,
            iD = cD.dataKey,
            fD = cD.activeIndex,
            bD = cD.activeBar,
            QD = (0, ZD.b)(this.props, !1);
          return DD && DD.map((function(DD, cD) {
            var wD = cD === fD,
              BD = wD ? bD : pD,
              yD = LD(LD(LD({}, QD), DD), {}, {
                isActive: wD,
                option: BD,
                index: cD,
                dataKey: iD,
                onAnimationStart: CD.handleAnimationStart,
                onAnimationEnd: CD.handleAnimationEnd
              });
            return ID.createElement(SD.d, jD({
              className: "recharts-bar-rectangle"
            }, (0, ND.o)(CD.props, DD, cD), {
              key: "rectangle-".concat(null === DD || void 0 === DD ? void 0 : DD.x, "-").concat(null === DD || void 0 === DD ? void 0 : DD.y, "-").concat(null === DD || void 0 === DD ? void 0 : DD.value, "-").concat(cD)
            }), ID.createElement(JD, yD))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var DD = this,
            CD = this.props,
            cD = CD.data,
            pD = CD.layout,
            fD = CD.isAnimationActive,
            bD = CD.animationBegin,
            QD = CD.animationDuration,
            wD = CD.animationEasing,
            BD = CD.animationId,
            yD = this.state.prevData;
          return ID.createElement(iD.d, {
            VM: bD,
            duration: QD,
            isActive: fD,
            easing: wD,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(BD),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(CD) {
            var iD = CD.t,
              fD = cD.map((function(DD, CD) {
                var cD = yD && yD[CD];
                if (cD) {
                  var ID = (0, tD.x)(cD.x, DD.x),
                    fD = (0, tD.x)(cD.y, DD.y),
                    bD = (0, tD.x)(cD.width, DD.width),
                    QD = (0, tD.x)(cD.height, DD.height);
                  return LD(LD({}, DD), {}, {
                    x: ID(iD),
                    y: fD(iD),
                    width: bD(iD),
                    height: QD(iD)
                  })
                }
                if ("horizontal" === pD) {
                  var wD = (0, tD.x)(0, DD.height)(iD);
                  return LD(LD({}, DD), {}, {
                    y: DD.y + DD.height - wD,
                    height: wD
                  })
                }
                var SD = (0, tD.x)(0, DD.width)(iD);
                return LD(LD({}, DD), {}, {
                  width: SD
                })
              }));
            return ID.createElement(SD.d, null, DD.renderRectanglesStatically(fD))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var DD = this.props,
            CD = DD.data,
            cD = DD.isAnimationActive,
            ID = this.state.prevData;
          return !(cD && CD && CD.length) || ID && bD()(ID, CD) ? this.renderRectanglesStatically(CD) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var DD = this,
            CD = this.props,
            cD = CD.data,
            pD = CD.dataKey,
            iD = CD.activeIndex,
            fD = (0, ZD.b)(this.props.background, !1);
          return cD.map((function(CD, cD) {
            CD.value;
            var bD = CD.background,
              QD = zD(CD, aD);
            if (!bD) return null;
            var wD = LD(LD(LD(LD(LD({}, QD), {}, {
              fill: "#eee"
            }, bD), fD), (0, ND.o)(DD.props, CD, cD)), {}, {
              onAnimationStart: DD.handleAnimationStart,
              onAnimationEnd: DD.handleAnimationEnd,
              dataKey: pD,
              index: cD,
              className: "recharts-bar-background-rectangle"
            });
            return ID.createElement(JD, jD({
              key: "background-bar-".concat(cD),
              option: DD.props.background,
              isActive: cD === iD
            }, wD))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(DD, CD) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var cD = this.props,
            pD = cD.data,
            iD = cD.xAxis,
            fD = cD.yAxis,
            bD = cD.layout,
            QD = cD.children,
            wD = (0, ZD.f)(QD, BD.b);
          if (!wD) return null;
          var yD = "vertical" === bD ? pD[0].height / 2 : pD[0].width / 2,
            MD = function(DD, CD) {
              var cD = Array.isArray(DD.value) ? DD.value[1] : DD.value;
              return {
                x: DD.x,
                y: DD.y,
                value: cD,
                errorVal: (0, vD.Q)(DD, CD)
              }
            },
            tD = {
              clipPath: DD ? "url(#clipPath-".concat(CD, ")") : null
            };
          return ID.createElement(SD.d, tD, wD.map((function(DD) {
            return ID.cloneElement(DD, {
              key: "error-bar-".concat(CD, "-").concat(DD.props.dataKey),
              data: pD,
              xAxis: iD,
              yAxis: fD,
              layout: bD,
              offset: yD,
              dataPointFormatter: MD
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var DD = this.props,
            CD = DD.hide,
            cD = DD.data,
            iD = DD.className,
            fD = DD.xAxis,
            bD = DD.yAxis,
            QD = DD.left,
            BD = DD.top,
            yD = DD.width,
            tD = DD.height,
            ZD = DD.isAnimationActive,
            oD = DD.background,
            vD = DD.id;
          if (CD || !cD || !cD.length) return null;
          var ND = this.state.isAnimationFinished,
            gD = (0, pD.e)("recharts-bar", iD),
            XD = fD && fD.allowDataOverflow,
            mD = bD && bD.allowDataOverflow,
            nD = XD || mD,
            OD = wD()(vD) ? this.id : vD;
          return ID.createElement(SD.d, {
            className: gD
          }, XD || mD ? ID.createElement("defs", null, ID.createElement("clipPath", {
            id: "clipPath-".concat(OD)
          }, ID.createElement("rect", {
            x: XD ? QD : QD - yD / 2,
            y: mD ? BD : BD - tD / 2,
            width: XD ? yD : 2 * yD,
            height: mD ? tD : 2 * tD
          }))) : null, ID.createElement(SD.d, {
            className: "recharts-bar-rectangles",
            clipPath: nD ? "url(#clipPath-".concat(OD, ")") : null
          }, oD ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(nD, OD), (!ZD || ND) && MD.e.renderCallByParent(this.props, cD))
        }
      }], QD = [{
        key: "getDerivedStateFromProps",
        value: function(DD, CD) {
          return DD.animationId !== CD.prevAnimationId ? {
            prevAnimationId: DD.animationId,
            curData: DD.data,
            prevData: CD.curData
          } : DD.data !== CD.curData ? {
            curData: DD.data
          } : null
        }
      }], fD && TD(cD.prototype, fD), QD && TD(cD, QD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, fD, QD
    }(ID.PureComponent);
    KD = sD, YD(sD, "displayName", "Bar"), YD(sD, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !oD.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), YD(sD, "getComposedData", (function(DD) {
      var CD = DD.props,
        cD = DD.item,
        ID = DD.barPosition,
        pD = DD.bandSize,
        iD = DD.xAxis,
        fD = DD.yAxis,
        bD = DD.xAxisTicks,
        QD = DD.yAxisTicks,
        wD = DD.stackedData,
        SD = DD.dataStartIndex,
        BD = DD.displayedData,
        MD = DD.offset,
        oD = (0, vD.k)(ID, cD);
      if (!oD) return null;
      var ND = CD.layout,
        XD = cD.type.defaultProps,
        mD = void 0 !== XD ? LD(LD({}, XD), cD.props) : cD.props,
        nD = mD.dataKey,
        OD = mD.children,
        PD = mD.minPointSize,
        HD = "horizontal" === ND ? fD : iD,
        UD = wD ? HD.scale.domain() : null,
        xD = (0, vD.r)({
          numericAxis: HD
        }),
        qD = (0, ZD.f)(OD, yD.e),
        JD = BD.map((function(DD, CD) {
          var ID, BD, yD, MD, ZD, XD;
          wD ? ID = (0, vD.eb)(wD[SD + CD], UD) : (ID = (0, vD.Q)(DD, nD), Array.isArray(ID) || (ID = [xD, ID]));
          var mD = function(DD) {
            var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(cD, ID) {
              if ("number" === typeof DD) return DD;
              var pD = (0, tD.G)(cD) || (0, tD.z)(cD);
              return pD ? DD(cD, ID) : (pD || (0, gD.e)(!1), CD)
            }
          }(PD, KD.defaultProps.minPointSize)(ID[1], CD);
          if ("horizontal" === ND) {
            var OD, HD = [fD.scale(ID[0]), fD.scale(ID[1])],
              JD = HD[0],
              aD = HD[1];
            BD = (0, vD.t)({
              axis: iD,
              ticks: bD,
              bandSize: pD,
              offset: oD.offset,
              entry: DD,
              index: CD
            }), yD = null !== (OD = null !== aD && void 0 !== aD ? aD : JD) && void 0 !== OD ? OD : void 0, MD = oD.size;
            var VD = JD - aD;
            if (ZD = Number.isNaN(VD) ? 0 : VD, XD = {
                x: BD,
                y: fD.y,
                width: MD,
                height: fD.height
              }, Math.abs(mD) > 0 && Math.abs(ZD) < Math.abs(mD)) {
              var zD = (0, tD.K)(ZD || mD) * (Math.abs(mD) - Math.abs(ZD));
              yD -= zD, ZD += zD
            }
          } else {
            var jD = [iD.scale(ID[0]), iD.scale(ID[1])],
              lD = jD[0],
              TD = jD[1];
            if (BD = lD, yD = (0, vD.t)({
                axis: fD,
                ticks: QD,
                bandSize: pD,
                offset: oD.offset,
                entry: DD,
                index: CD
              }), MD = TD - lD, ZD = oD.size, XD = {
                x: iD.x,
                y: yD,
                width: iD.width,
                height: ZD
              }, Math.abs(mD) > 0 && Math.abs(MD) < Math.abs(mD)) MD += (0, tD.K)(MD || mD) * (Math.abs(mD) - Math.abs(MD))
          }
          return LD(LD(LD({}, DD), {}, {
            x: BD,
            y: yD,
            width: MD,
            height: ZD,
            value: wD ? ID : ID[1],
            payload: DD,
            background: XD
          }, qD && qD[CD] && qD[CD].props), {}, {
            tooltipPayload: [(0, vD.O)(cD, DD)],
            tooltipPosition: {
              x: BD + MD / 2,
              y: yD + ZD / 2
            }
          })
        }));
      return LD({
        data: JD,
        layout: ND
      }, MD)
    }))
  },
  6120: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => VD
    });
    var ID = cD(53),
      pD = cD(5032),
      iD = cD.n(pD),
      fD = cD(4959),
      bD = cD.n(fD),
      QD = cD(4841),
      wD = cD(5203),
      SD = cD(5701),
      BD = cD(5863),
      yD = cD(5949),
      MD = cD(4927),
      tD = cD(5208),
      ZD = cD(5185),
      oD = cD(6123),
      vD = ["viewBox"],
      ND = ["viewBox"],
      gD = ["ticks"];

    function XD(DD) {
      return XD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, XD(DD)
    }

    function mD() {
      return mD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, mD.apply(this, arguments)
    }

    function nD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function OD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? nD(Object(cD), !0).forEach((function(CD) {
          KD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : nD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function PD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function HD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, aD(ID.key), ID)
      }
    }

    function UD(DD, CD, cD) {
      return CD = qD(CD),
        function(DD, CD) {
          if (CD && ("object" === XD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, xD() ? Reflect.construct(CD, cD || [], qD(DD).constructor) : CD.apply(DD, cD))
    }

    function xD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (xD = function() {
        return !!DD
      })()
    }

    function qD(DD) {
      return qD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, qD(DD)
    }

    function JD(DD, CD) {
      return JD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, JD(DD, CD)
    }

    function KD(DD, CD, cD) {
      return (CD = aD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function aD(DD) {
      var CD = function(DD, CD) {
        if ("object" != XD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != XD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == XD(CD) ? CD : CD + ""
    }
    var VD = function(DD) {
      function CD(DD) {
        var cD;
        return function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD), (cD = UD(this, CD, [DD])).state = {
          fontSize: "",
          letterSpacing: ""
        }, cD
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && JD(DD, CD)
      }(CD, DD), cD = CD, fD = [{
        key: "renderTickItem",
        value: function(DD, CD, cD) {
          var pD = (0, QD.e)(CD.className, "recharts-cartesian-axis-tick-value");
          return ID.isValidElement(DD) ? ID.cloneElement(DD, OD(OD({}, CD), {}, {
            className: pD
          })) : iD()(DD) ? DD(OD(OD({}, CD), {}, {
            className: pD
          })) : ID.createElement(BD.b, mD({}, CD, {
            className: "recharts-cartesian-axis-tick-value"
          }), cD)
        }
      }], (pD = [{
        key: "shouldComponentUpdate",
        value: function(DD, CD) {
          var cD = DD.viewBox,
            ID = PD(DD, vD),
            pD = this.props,
            iD = pD.viewBox,
            fD = PD(pD, ND);
          return !(0, wD.c)(cD, iD) || !(0, wD.c)(ID, fD) || !(0, wD.c)(CD, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var DD = this.layerReference;
          if (DD) {
            var CD = DD.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            CD && this.setState({
              fontSize: window.getComputedStyle(CD).fontSize,
              letterSpacing: window.getComputedStyle(CD).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(DD) {
          var CD, cD, ID, pD, iD, fD, bD = this.props,
            QD = bD.x,
            wD = bD.y,
            SD = bD.width,
            BD = bD.height,
            yD = bD.orientation,
            tD = bD.tickSize,
            ZD = bD.mirror,
            oD = bD.tickMargin,
            vD = ZD ? -1 : 1,
            ND = DD.tickSize || tD,
            gD = (0, MD.G)(DD.tickCoord) ? DD.tickCoord : DD.coordinate;
          switch (yD) {
            case "top":
              CD = cD = DD.coordinate, fD = (ID = (pD = wD + +!ZD * BD) - vD * ND) - vD * oD, iD = gD;
              break;
            case "left":
              ID = pD = DD.coordinate, iD = (CD = (cD = QD + +!ZD * SD) - vD * ND) - vD * oD, fD = gD;
              break;
            case "right":
              ID = pD = DD.coordinate, iD = (CD = (cD = QD + +ZD * SD) + vD * ND) + vD * oD, fD = gD;
              break;
            default:
              CD = cD = DD.coordinate, fD = (ID = (pD = wD + +ZD * BD) + vD * ND) + vD * oD, iD = gD
          }
          return {
            line: {
              x1: CD,
              y1: ID,
              x2: cD,
              y2: pD
            },
            wy: {
              x: iD,
              y: fD
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var DD, CD = this.props,
            cD = CD.orientation,
            ID = CD.mirror;
          switch (cD) {
            case "left":
              DD = ID ? "start" : "end";
              break;
            case "right":
              DD = ID ? "end" : "start";
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
            CD = DD.orientation,
            cD = DD.mirror,
            ID = "end";
          switch (CD) {
            case "left":
            case "right":
              ID = "middle";
              break;
            case "top":
              ID = cD ? "start" : "end";
              break;
            default:
              ID = cD ? "end" : "start"
          }
          return ID
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var DD = this.props,
            CD = DD.x,
            cD = DD.y,
            pD = DD.width,
            iD = DD.height,
            fD = DD.orientation,
            wD = DD.mirror,
            SD = DD.axisLine,
            BD = OD(OD(OD({}, (0, ZD.b)(this.props, !1)), (0, ZD.b)(SD, !1)), {}, {
              fill: "none"
            });
          if ("top" === fD || "bottom" === fD) {
            var yD = +("top" === fD && !wD || "bottom" === fD && wD);
            BD = OD(OD({}, BD), {}, {
              x1: CD,
              y1: cD + yD * iD,
              x2: CD + pD,
              y2: cD + yD * iD
            })
          } else {
            var MD = +("left" === fD && !wD || "right" === fD && wD);
            BD = OD(OD({}, BD), {}, {
              x1: CD + MD * pD,
              y1: cD,
              x2: CD + MD * pD,
              y2: cD + iD
            })
          }
          return ID.createElement("line", mD({}, BD, {
            className: (0, QD.e)("recharts-cartesian-axis-line", bD()(SD, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(DD, cD, pD) {
          var fD = this,
            wD = this.props,
            BD = wD.tickLine,
            yD = wD.stroke,
            MD = wD.wy,
            vD = wD.tickFormatter,
            ND = wD.unit,
            gD = (0, oD.c)(OD(OD({}, this.props), {}, {
              ticks: DD
            }), cD, pD),
            XD = this.getTickTextAnchor(),
            nD = this.getTickVerticalAnchor(),
            PD = (0, ZD.b)(this.props, !1),
            HD = (0, ZD.b)(MD, !1),
            UD = OD(OD({}, PD), {}, {
              fill: "none"
            }, (0, ZD.b)(BD, !1)),
            xD = gD.map((function(DD, cD) {
              var pD = fD.getTickLineCoord(DD),
                wD = pD.line,
                ZD = pD.wy,
                oD = OD(OD(OD(OD({
                  textAnchor: XD,
                  verticalAnchor: nD
                }, PD), {}, {
                  stroke: "none",
                  fill: yD
                }, HD), ZD), {}, {
                  index: cD,
                  payload: DD,
                  visibleTicksCount: gD.length,
                  tickFormatter: vD
                });
              return ID.createElement(SD.d, mD({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(DD.value, "-").concat(DD.coordinate, "-").concat(DD.tickCoord)
              }, (0, tD.o)(fD.props, DD, cD)), BD && ID.createElement("line", mD({}, UD, wD, {
                className: (0, QD.e)("recharts-cartesian-axis-tick-line", bD()(BD, "className"))
              })), MD && CD.renderTickItem(MD, oD, "".concat(iD()(vD) ? vD(DD.value, cD) : DD.value).concat(ND || "")))
            }));
          return ID.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, xD)
        }
      }, {
        key: "render",
        value: function() {
          var DD = this,
            CD = this.props,
            cD = CD.axisLine,
            pD = CD.width,
            fD = CD.height,
            bD = CD.ticksGenerator,
            wD = CD.className;
          if (CD.hide) return null;
          var BD = this.props,
            MD = BD.ticks,
            tD = PD(BD, gD),
            ZD = MD;
          return iD()(bD) && (ZD = MD && MD.length > 0 ? bD(this.props) : bD(tD)), pD <= 0 || fD <= 0 || !ZD || !ZD.length ? null : ID.createElement(SD.d, {
            className: (0, QD.e)("recharts-cartesian-axis", wD),
            ref: function(CD) {
              DD.layerReference = CD
            }
          }, cD && this.renderAxisLine(), this.renderTicks(ZD, this.state.fontSize, this.state.letterSpacing), yD.d.renderCallByParent(this.props))
        }
      }]) && HD(cD.prototype, pD), fD && HD(cD, fD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, pD, fD
    }(ID.Component);
    KD(VD, "displayName", "CartesianAxis"), KD(VD, "defaultProps", {
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
      wy: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6136: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => KD
    });
    var ID = cD(53),
      pD = cD(5032),
      iD = cD.n(pD),
      fD = cD(5181),
      bD = cD(4927),
      QD = cD(5185),
      wD = cD(5873),
      SD = cD(6123),
      BD = cD(6120),
      yD = cD(6068),
      MD = ["x1", "y1", "x2", "y2", "key"],
      tD = ["offset"];

    function ZD(DD) {
      return ZD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ZD(DD)
    }

    function oD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function vD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? oD(Object(cD), !0).forEach((function(CD) {
          ND(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : oD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function ND(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != ZD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != ZD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == ZD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function gD() {
      return gD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, gD.apply(this, arguments)
    }

    function XD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }
    var mD = function(DD) {
      var CD = DD.fill;
      if (!CD || "none" === CD) return null;
      var cD = DD.fillOpacity,
        pD = DD.x,
        iD = DD.y,
        fD = DD.width,
        bD = DD.height,
        QD = DD.ry;
      return ID.createElement("rect", {
        x: pD,
        y: iD,
        ry: QD,
        width: fD,
        height: bD,
        stroke: "none",
        fill: CD,
        fillOpacity: cD,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function nD(DD, CD) {
      var cD;
      if (ID.isValidElement(DD)) cD = ID.cloneElement(DD, CD);
      else if (iD()(DD)) cD = DD(CD);
      else {
        var pD = CD.x1,
          fD = CD.y1,
          bD = CD.x2,
          wD = CD.y2,
          SD = CD.key,
          BD = XD(CD, MD),
          yD = (0, QD.b)(BD, !1),
          ZD = (yD.offset, XD(yD, tD));
        cD = ID.createElement("line", gD({}, ZD, {
          x1: pD,
          y1: fD,
          x2: bD,
          y2: wD,
          fill: "none",
          key: SD
        }))
      }
      return cD
    }

    function OD(DD) {
      var CD = DD.x,
        cD = DD.width,
        pD = DD.horizontal,
        iD = void 0 === pD || pD,
        fD = DD.horizontalPoints;
      if (!iD || !fD || !fD.length) return null;
      var bD = fD.map((function(ID, pD) {
        var fD = vD(vD({}, DD), {}, {
          x1: CD,
          y1: ID,
          x2: CD + cD,
          y2: ID,
          key: "line-".concat(pD),
          index: pD
        });
        return nD(iD, fD)
      }));
      return ID.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, bD)
    }

    function PD(DD) {
      var CD = DD.y,
        cD = DD.height,
        pD = DD.vertical,
        iD = void 0 === pD || pD,
        fD = DD.verticalPoints;
      if (!iD || !fD || !fD.length) return null;
      var bD = fD.map((function(ID, pD) {
        var fD = vD(vD({}, DD), {}, {
          x1: ID,
          y1: CD,
          x2: ID,
          y2: CD + cD,
          key: "line-".concat(pD),
          index: pD
        });
        return nD(iD, fD)
      }));
      return ID.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, bD)
    }

    function HD(DD) {
      var CD = DD.horizontalFill,
        cD = DD.fillOpacity,
        pD = DD.x,
        iD = DD.y,
        fD = DD.width,
        bD = DD.height,
        QD = DD.horizontalPoints,
        wD = DD.horizontal;
      if (!(void 0 === wD || wD) || !CD || !CD.length) return null;
      var SD = QD.map((function(DD) {
        return Math.round(DD + iD - iD)
      })).sort((function(DD, CD) {
        return DD - CD
      }));
      iD !== SD[0] && SD.unshift(0);
      var BD = SD.map((function(DD, QD) {
        var wD = !SD[QD + 1] ? iD + bD - DD : SD[QD + 1] - DD;
        if (wD <= 0) return null;
        var BD = QD % CD.length;
        return ID.createElement("rect", {
          key: "react-".concat(QD),
          y: DD,
          x: pD,
          height: wD,
          width: fD,
          stroke: "none",
          fill: CD[BD],
          fillOpacity: cD,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return ID.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, BD)
    }

    function UD(DD) {
      var CD = DD.vertical,
        cD = void 0 === CD || CD,
        pD = DD.verticalFill,
        iD = DD.fillOpacity,
        fD = DD.x,
        bD = DD.y,
        QD = DD.width,
        wD = DD.height,
        SD = DD.verticalPoints;
      if (!cD || !pD || !pD.length) return null;
      var BD = SD.map((function(DD) {
        return Math.round(DD + fD - fD)
      })).sort((function(DD, CD) {
        return DD - CD
      }));
      fD !== BD[0] && BD.unshift(0);
      var yD = BD.map((function(DD, CD) {
        var cD = !BD[CD + 1] ? fD + QD - DD : BD[CD + 1] - DD;
        if (cD <= 0) return null;
        var SD = CD % pD.length;
        return ID.createElement("rect", {
          key: "react-".concat(CD),
          x: DD,
          y: bD,
          width: cD,
          height: wD,
          stroke: "none",
          fill: pD[SD],
          fillOpacity: iD,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return ID.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, yD)
    }
    var xD = function(DD, CD) {
        var cD = DD.xAxis,
          ID = DD.width,
          pD = DD.height,
          iD = DD.offset;
        return (0, wD.w)((0, SD.c)(vD(vD(vD({}, BD.e.defaultProps), cD), {}, {
          ticks: (0, wD.K)(cD, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: ID,
            height: pD
          }
        })), iD.left, iD.left + iD.width, CD)
      },
      qD = function(DD, CD) {
        var cD = DD.yAxis,
          ID = DD.width,
          pD = DD.height,
          iD = DD.offset;
        return (0, wD.w)((0, SD.c)(vD(vD(vD({}, BD.e.defaultProps), cD), {}, {
          ticks: (0, wD.K)(cD, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: ID,
            height: pD
          }
        })), iD.top, iD.top + iD.height, CD)
      },
      JD = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function KD(DD) {
      var CD, cD, pD, QD, wD, SD, BD = (0, yD.i)(),
        MD = (0, yD.e)(),
        tD = (0, yD.n)(),
        oD = vD(vD({}, DD), {}, {
          stroke: null !== (CD = DD.stroke) && void 0 !== CD ? CD : JD.stroke,
          fill: null !== (cD = DD.fill) && void 0 !== cD ? cD : JD.fill,
          horizontal: null !== (pD = DD.horizontal) && void 0 !== pD ? pD : JD.horizontal,
          horizontalFill: null !== (QD = DD.horizontalFill) && void 0 !== QD ? QD : JD.horizontalFill,
          vertical: null !== (wD = DD.vertical) && void 0 !== wD ? wD : JD.vertical,
          verticalFill: null !== (SD = DD.verticalFill) && void 0 !== SD ? SD : JD.verticalFill,
          x: (0, bD.G)(DD.x) ? DD.x : tD.left,
          y: (0, bD.G)(DD.y) ? DD.y : tD.top,
          width: (0, bD.G)(DD.width) ? DD.width : tD.width,
          height: (0, bD.G)(DD.height) ? DD.height : tD.height
        }),
        ND = oD.x,
        XD = oD.y,
        nD = oD.width,
        KD = oD.height,
        aD = oD.syncWithTicks,
        VD = oD.horizontalValues,
        zD = oD.verticalValues,
        jD = (0, yD.d)(),
        lD = (0, yD.x)();
      if (!(0, bD.G)(nD) || nD <= 0 || !(0, bD.G)(KD) || KD <= 0 || !(0, bD.G)(ND) || ND !== +ND || !(0, bD.G)(XD) || XD !== +XD) return null;
      var LD = oD.verticalCoordinatesGenerator || xD,
        TD = oD.horizontalCoordinatesGenerator || qD,
        GD = oD.horizontalPoints,
        RD = oD.verticalPoints;
      if ((!GD || !GD.length) && iD()(TD)) {
        var kD = VD && VD.length,
          dD = TD({
            yAxis: lD ? vD(vD({}, lD), {}, {
              ticks: kD ? VD : lD.ticks
            }) : void 0,
            width: BD,
            height: MD,
            offset: tD
          }, !!kD || aD);
        (0, fD.d)(Array.isArray(dD), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(ZD(dD), "]")), Array.isArray(dD) && (GD = dD)
      }
      if ((!RD || !RD.length) && iD()(LD)) {
        var YD = zD && zD.length,
          WD = LD({
            xAxis: jD ? vD(vD({}, jD), {}, {
              ticks: YD ? zD : jD.ticks
            }) : void 0,
            width: BD,
            height: MD,
            offset: tD
          }, !!YD || aD);
        (0, fD.d)(Array.isArray(WD), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(ZD(WD), "]")), Array.isArray(WD) && (RD = WD)
      }
      return ID.createElement("g", {
        className: "recharts-cartesian-grid"
      }, ID.createElement(mD, {
        fill: oD.fill,
        fillOpacity: oD.fillOpacity,
        x: oD.x,
        y: oD.y,
        width: oD.width,
        height: oD.height,
        ry: oD.ry
      }), ID.createElement(OD, gD({}, oD, {
        offset: tD,
        horizontalPoints: GD,
        xAxis: jD,
        yAxis: lD
      })), ID.createElement(PD, gD({}, oD, {
        offset: tD,
        verticalPoints: RD,
        xAxis: jD,
        yAxis: lD
      })), ID.createElement(HD, gD({}, oD, {
        horizontalPoints: GD
      })), ID.createElement(UD, gD({}, oD, {
        verticalPoints: RD
      })))
    }
    KD.displayName = "CartesianGrid"
  },
  5937: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => XD
    });
    var ID = cD(53),
      pD = cD(5688),
      iD = cD(5701),
      fD = cD(5185),
      bD = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function QD(DD) {
      return QD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, QD(DD)
    }

    function wD() {
      return wD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, wD.apply(this, arguments)
    }

    function SD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return BD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return BD(DD, CD)
      }(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function yD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function MD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, gD(ID.key), ID)
      }
    }

    function tD(DD, CD, cD) {
      return CD = oD(CD),
        function(DD, CD) {
          if (CD && ("object" === QD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, ZD() ? Reflect.construct(CD, cD || [], oD(DD).constructor) : CD.apply(DD, cD))
    }

    function ZD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (ZD = function() {
        return !!DD
      })()
    }

    function oD(DD) {
      return oD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, oD(DD)
    }

    function vD(DD, CD) {
      return vD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, vD(DD, CD)
    }

    function ND(DD, CD, cD) {
      return (CD = gD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function gD(DD) {
      var CD = function(DD, CD) {
        if ("object" != QD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != QD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == QD(CD) ? CD : CD + ""
    }
    var XD = function(DD) {
      function CD() {
        return function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD), tD(this, CD, arguments)
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && vD(DD, CD)
      }(CD, DD), cD = CD, (QD = [{
        key: "render",
        value: function() {
          var DD = this.props,
            CD = DD.offset,
            cD = DD.layout,
            QD = DD.width,
            BD = DD.dataKey,
            MD = DD.data,
            tD = DD.dataPointFormatter,
            ZD = DD.xAxis,
            oD = DD.yAxis,
            vD = yD(DD, bD),
            ND = (0, fD.b)(vD, !1);
          "x" === this.props.direction && "number" !== ZD.type && (0, pD.e)(!1);
          var gD = MD.map((function(DD) {
            var pD = tD(DD, BD),
              fD = pD.x,
              bD = pD.y,
              yD = pD.value,
              MD = pD.errorVal;
            if (!MD) return null;
            var vD, gD, XD = [];
            if (Array.isArray(MD)) {
              var mD = SD(MD, 2);
              vD = mD[0], gD = mD[1]
            } else vD = gD = MD;
            if ("vertical" === cD) {
              var nD = ZD.scale,
                OD = bD + CD,
                PD = OD + QD,
                HD = OD - QD,
                UD = nD(yD - vD),
                xD = nD(yD + gD);
              XD.push({
                x1: xD,
                y1: PD,
                x2: xD,
                y2: HD
              }), XD.push({
                x1: UD,
                y1: OD,
                x2: xD,
                y2: OD
              }), XD.push({
                x1: UD,
                y1: PD,
                x2: UD,
                y2: HD
              })
            } else if ("horizontal" === cD) {
              var qD = oD.scale,
                JD = fD + CD,
                KD = JD - QD,
                aD = JD + QD,
                VD = qD(yD - vD),
                zD = qD(yD + gD);
              XD.push({
                x1: KD,
                y1: zD,
                x2: aD,
                y2: zD
              }), XD.push({
                x1: JD,
                y1: VD,
                x2: JD,
                y2: zD
              }), XD.push({
                x1: KD,
                y1: VD,
                x2: aD,
                y2: VD
              })
            }
            return ID.createElement(iD.d, wD({
              className: "recharts-errorBar",
              key: "bar-".concat(XD.map((function(DD) {
                return "".concat(DD.x1, "-").concat(DD.x2, "-").concat(DD.y1, "-").concat(DD.y2)
              })))
            }, ND), XD.map((function(DD) {
              return ID.createElement("line", wD({}, DD, {
                key: "line-".concat(DD.x1, "-").concat(DD.x2, "-").concat(DD.y1, "-").concat(DD.y2)
              }))
            })))
          }));
          return ID.createElement(iD.d, {
            className: "recharts-errorBars"
          }, gD)
        }
      }]) && MD(cD.prototype, QD), BD && MD(cD, BD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, QD, BD
    }(ID.Component);
    ND(XD, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), ND(XD, "displayName", "ErrorBar")
  },
  6108: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => TD
    });
    var ID = cD(53),
      pD = cD(5860),
      iD = cD(5032),
      fD = cD.n(iD),
      bD = cD(5175),
      QD = cD.n(bD),
      wD = cD(5927),
      SD = cD.n(wD),
      BD = cD(4841),
      yD = cD(6097),
      MD = cD(5849),
      tD = cD(5701),
      ZD = cD(6002),
      oD = cD(5937),
      vD = cD(4927),
      ND = cD(5185),
      gD = cD(5712),
      XD = cD(5873),
      mD = ["type", "layout", "connectNulls", "ref"],
      nD = ["key"];

    function OD(DD) {
      return OD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, OD(DD)
    }

    function PD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function HD() {
      return HD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, HD.apply(this, arguments)
    }

    function UD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function xD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? UD(Object(cD), !0).forEach((function(CD) {
          lD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : UD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function qD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return JD(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return JD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return JD(DD, CD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function KD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, LD(ID.key), ID)
      }
    }

    function aD(DD, CD, cD) {
      return CD = zD(CD),
        function(DD, CD) {
          if (CD && ("object" === OD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, VD() ? Reflect.construct(CD, cD || [], zD(DD).constructor) : CD.apply(DD, cD))
    }

    function VD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (VD = function() {
        return !!DD
      })()
    }

    function zD(DD) {
      return zD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, zD(DD)
    }

    function jD(DD, CD) {
      return jD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, jD(DD, CD)
    }

    function lD(DD, CD, cD) {
      return (CD = LD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function LD(DD) {
      var CD = function(DD, CD) {
        if ("object" != OD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != OD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == OD(CD) ? CD : CD + ""
    }
    var TD = function(DD) {
      function CD() {
        var DD;
        ! function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD);
        for (var cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        return lD(DD = aD(this, CD, [].concat(ID)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), lD(DD, "generateSimpleStrokeDasharray", (function(DD, CD) {
          return "".concat(CD, "px ").concat(DD - CD, "px")
        })), lD(DD, "getStrokeDasharray", (function(cD, ID, pD) {
          var iD = pD.reduce((function(DD, CD) {
            return DD + CD
          }));
          if (!iD) return DD.generateSimpleStrokeDasharray(ID, cD);
          for (var fD = Math.floor(cD / iD), bD = cD % iD, QD = ID - cD, wD = [], SD = 0, BD = 0; SD < pD.length; BD += pD[SD], ++SD)
            if (BD + pD[SD] > bD) {
              wD = [].concat(qD(pD.slice(0, SD)), [bD - BD]);
              break
            } var yD = wD.length % 2 === 0 ? [0, QD] : [QD];
          return [].concat(qD(CD.repeat(pD, fD)), qD(wD), yD).map((function(DD) {
            return "".concat(DD, "px")
          })).join(", ")
        })), lD(DD, "id", (0, vD.M)("recharts-line-")), lD(DD, "pathRef", (function(CD) {
          DD.mainCurve = CD
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
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && jD(DD, CD)
      }(CD, DD), cD = CD, iD = [{
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
          } catch (CD) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(DD, CD) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var cD = this.props,
            pD = cD.points,
            iD = cD.xAxis,
            fD = cD.yAxis,
            bD = cD.layout,
            QD = cD.children,
            wD = (0, ND.f)(QD, oD.b);
          if (!wD) return null;
          var SD = function(DD, CD) {
              return {
                x: DD.x,
                y: DD.y,
                value: DD.value,
                errorVal: (0, XD.Q)(DD.payload, CD)
              }
            },
            BD = {
              clipPath: DD ? "url(#clipPath-".concat(CD, ")") : null
            };
          return ID.createElement(tD.d, BD, wD.map((function(DD) {
            return ID.cloneElement(DD, {
              key: "bar-".concat(DD.props.dataKey),
              data: pD,
              xAxis: iD,
              yAxis: fD,
              layout: bD,
              dataPointFormatter: SD
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(DD, cD, pD) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var iD = this.props,
            fD = iD.dot,
            bD = iD.points,
            QD = iD.dataKey,
            wD = (0, ND.b)(this.props, !1),
            SD = (0, ND.b)(fD, !0),
            BD = bD.map((function(DD, cD) {
              var ID = xD(xD(xD({
                key: "dot-".concat(cD),
                r: 3
              }, wD), SD), {}, {
                index: cD,
                cx: DD.x,
                cy: DD.y,
                value: DD.value,
                dataKey: QD,
                payload: DD.payload,
                points: bD
              });
              return CD.renderDotItem(fD, ID)
            })),
            yD = {
              clipPath: DD ? "url(#clipPath-".concat(cD ? "" : "dots-").concat(pD, ")") : null
            };
          return ID.createElement(tD.d, HD({
            className: "recharts-line-dots",
            key: "dots"
          }, yD), BD)
        }
      }, {
        key: "renderCurveStatically",
        value: function(DD, CD, cD, pD) {
          var iD = this.props,
            fD = iD.type,
            bD = iD.layout,
            QD = iD.connectNulls,
            wD = (iD.ref, PD(iD, mD)),
            SD = xD(xD(xD({}, (0, ND.b)(wD, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: CD ? "url(#clipPath-".concat(cD, ")") : null,
              points: DD
            }, pD), {}, {
              type: fD,
              layout: bD,
              connectNulls: QD
            });
          return ID.createElement(yD.e, HD({}, SD, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(DD, CD) {
          var cD = this,
            iD = this.props,
            fD = iD.points,
            bD = iD.strokeDasharray,
            QD = iD.isAnimationActive,
            wD = iD.animationBegin,
            SD = iD.animationDuration,
            BD = iD.animationEasing,
            yD = iD.animationId,
            MD = iD.animateNewValues,
            tD = iD.width,
            ZD = iD.height,
            oD = this.state,
            ND = oD.prevPoints,
            gD = oD.totalLength;
          return ID.createElement(pD.d, {
            VM: wD,
            duration: SD,
            isActive: QD,
            easing: BD,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(yD),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(ID) {
            var pD = ID.t;
            if (ND) {
              var iD = ND.length / fD.length,
                QD = fD.map((function(DD, CD) {
                  var cD = Math.floor(CD * iD);
                  if (ND[cD]) {
                    var ID = ND[cD],
                      fD = (0, vD.x)(ID.x, DD.x),
                      bD = (0, vD.x)(ID.y, DD.y);
                    return xD(xD({}, DD), {}, {
                      x: fD(pD),
                      y: bD(pD)
                    })
                  }
                  if (MD) {
                    var QD = (0, vD.x)(2 * tD, DD.x),
                      wD = (0, vD.x)(ZD / 2, DD.y);
                    return xD(xD({}, DD), {}, {
                      x: QD(pD),
                      y: wD(pD)
                    })
                  }
                  return xD(xD({}, DD), {}, {
                    x: DD.x,
                    y: DD.y
                  })
                }));
              return cD.renderCurveStatically(QD, DD, CD)
            }
            var wD, SD = (0, vD.x)(0, gD)(pD);
            if (bD) {
              var BD = "".concat(bD).split(/[,\s]+/gim).map((function(DD) {
                return parseFloat(DD)
              }));
              wD = cD.getStrokeDasharray(SD, gD, BD)
            } else wD = cD.generateSimpleStrokeDasharray(gD, SD);
            return cD.renderCurveStatically(fD, DD, CD, {
              strokeDasharray: wD
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(DD, CD) {
          var cD = this.props,
            ID = cD.points,
            pD = cD.isAnimationActive,
            iD = this.state,
            fD = iD.prevPoints,
            bD = iD.totalLength;
          return pD && ID && ID.length && (!fD && bD > 0 || !SD()(fD, ID)) ? this.renderCurveWithAnimation(DD, CD) : this.renderCurveStatically(ID, DD, CD)
        }
      }, {
        key: "render",
        value: function() {
          var DD, CD = this.props,
            cD = CD.hide,
            pD = CD.dot,
            iD = CD.points,
            fD = CD.className,
            bD = CD.xAxis,
            wD = CD.yAxis,
            SD = CD.top,
            yD = CD.left,
            MD = CD.width,
            oD = CD.height,
            vD = CD.isAnimationActive,
            gD = CD.id;
          if (cD || !iD || !iD.length) return null;
          var XD = this.state.isAnimationFinished,
            mD = 1 === iD.length,
            nD = (0, BD.e)("recharts-line", fD),
            OD = bD && bD.allowDataOverflow,
            PD = wD && wD.allowDataOverflow,
            HD = OD || PD,
            UD = QD()(gD) ? this.id : gD,
            xD = null !== (DD = (0, ND.b)(pD, !1)) && void 0 !== DD ? DD : {
              r: 3,
              strokeWidth: 2
            },
            qD = xD.r,
            JD = void 0 === qD ? 3 : qD,
            KD = xD.strokeWidth,
            aD = void 0 === KD ? 2 : KD,
            VD = ((0, ND.r)(pD) ? pD : {}).clipDot,
            zD = void 0 === VD || VD,
            jD = 2 * JD + aD;
          return ID.createElement(tD.d, {
            className: nD
          }, OD || PD ? ID.createElement("defs", null, ID.createElement("clipPath", {
            id: "clipPath-".concat(UD)
          }, ID.createElement("rect", {
            x: OD ? yD : yD - MD / 2,
            y: PD ? SD : SD - oD / 2,
            width: OD ? MD : 2 * MD,
            height: PD ? oD : 2 * oD
          })), !zD && ID.createElement("clipPath", {
            id: "clipPath-dots-".concat(UD)
          }, ID.createElement("rect", {
            x: yD - jD / 2,
            y: SD - jD / 2,
            width: MD + jD,
            height: oD + jD
          }))) : null, !mD && this.renderCurve(HD, UD), this.renderErrorBar(HD, UD), (mD || pD) && this.renderDots(HD, zD, UD), (!vD || XD) && ZD.e.renderCallByParent(this.props, iD))
        }
      }], bD = [{
        key: "getDerivedStateFromProps",
        value: function(DD, CD) {
          return DD.animationId !== CD.prevAnimationId ? {
            prevAnimationId: DD.animationId,
            curPoints: DD.points,
            prevPoints: CD.curPoints
          } : DD.points !== CD.curPoints ? {
            curPoints: DD.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(DD, CD) {
          for (var cD = DD.length % 2 !== 0 ? [].concat(qD(DD), [0]) : DD, ID = [], pD = 0; pD < CD; ++pD) ID = [].concat(qD(ID), qD(cD));
          return ID
        }
      }, {
        key: "renderDotItem",
        value: function(DD, CD) {
          var cD;
          if (ID.isValidElement(DD)) cD = ID.cloneElement(DD, CD);
          else if (fD()(DD)) cD = DD(CD);
          else {
            var pD = CD.key,
              iD = PD(CD, nD),
              bD = (0, BD.e)("recharts-line-dot", "boolean" !== typeof DD ? DD.className : "");
            cD = ID.createElement(MD.e, HD({
              key: pD
            }, iD, {
              className: bD
            }))
          }
          return cD
        }
      }], iD && KD(cD.prototype, iD), bD && KD(cD, bD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, iD, bD
    }(ID.PureComponent);
    lD(TD, "displayName", "Line"), lD(TD, "defaultProps", {
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
      isAnimationActive: !gD.e.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), lD(TD, "getComposedData", (function(DD) {
      var CD = DD.props,
        cD = DD.xAxis,
        ID = DD.yAxis,
        pD = DD.xAxisTicks,
        iD = DD.yAxisTicks,
        fD = DD.dataKey,
        bD = DD.bandSize,
        wD = DD.displayedData,
        SD = DD.offset,
        BD = CD.layout;
      return xD({
        points: wD.map((function(DD, CD) {
          var wD = (0, XD.Q)(DD, fD);
          return "horizontal" === BD ? {
            x: (0, XD.u)({
              axis: cD,
              ticks: pD,
              bandSize: bD,
              entry: DD,
              index: CD
            }),
            y: QD()(wD) ? null : ID.scale(wD),
            value: wD,
            payload: DD
          } : {
            x: QD()(wD) ? null : cD.scale(wD),
            y: (0, XD.u)({
              axis: ID,
              ticks: iD,
              bandSize: bD,
              entry: DD,
              index: CD
            }),
            value: wD,
            payload: DD
          }
        })),
        layout: BD
      }, SD)
    }))
  },
  6053: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => aD
    });
    var ID = cD(53),
      pD = cD(5032),
      iD = cD.n(pD),
      fD = cD(6059),
      bD = cD.n(fD),
      QD = cD(4841),
      wD = cD(5701),
      SD = cD(5949),
      BD = cD(5954),
      yD = cD(4927),
      MD = cD(5959),
      tD = cD(5181),
      ZD = cD(5185),
      oD = cD(6068);

    function vD(DD) {
      return vD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, vD(DD)
    }

    function ND(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, UD(ID.key), ID)
      }
    }

    function gD(DD, CD, cD) {
      return CD = mD(CD),
        function(DD, CD) {
          if (CD && ("object" === vD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, XD() ? Reflect.construct(CD, cD || [], mD(DD).constructor) : CD.apply(DD, cD))
    }

    function XD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (XD = function() {
        return !!DD
      })()
    }

    function mD(DD) {
      return mD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, mD(DD)
    }

    function nD(DD, CD) {
      return nD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, nD(DD, CD)
    }

    function OD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function PD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? OD(Object(cD), !0).forEach((function(CD) {
          HD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : OD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function HD(DD, CD, cD) {
      return (CD = UD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function UD(DD) {
      var CD = function(DD, CD) {
        if ("object" != vD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != vD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == vD(CD) ? CD : CD + ""
    }

    function xD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return qD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return qD(DD, CD)
      }(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function JD() {
      return JD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, JD.apply(this, arguments)
    }

    function KD(DD) {
      var CD = DD.x,
        cD = DD.y,
        pD = DD.segment,
        fD = DD.xAxisId,
        vD = DD.yAxisId,
        ND = DD.shape,
        gD = DD.className,
        XD = DD.alwaysShow,
        mD = (0, oD.m)(),
        nD = (0, oD.q)(fD),
        OD = (0, oD.u)(vD),
        HD = (0, oD.p)();
      if (!mD || !HD) return null;
      (0, tD.d)(void 0 === XD, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var UD = function(DD, CD, cD, ID, pD, iD, fD, QD, wD) {
        var SD = pD.x,
          yD = pD.y,
          MD = pD.width,
          tD = pD.height;
        if (cD) {
          var ZD = wD.y,
            oD = DD.y.apply(ZD, {
              position: iD
            });
          if ((0, BD.b)(wD, "discard") && !DD.y.isInRange(oD)) return null;
          var vD = [{
            x: SD + MD,
            y: oD
          }, {
            x: SD,
            y: oD
          }];
          return "left" === QD ? vD.reverse() : vD
        }
        if (CD) {
          var ND = wD.x,
            gD = DD.x.apply(ND, {
              position: iD
            });
          if ((0, BD.b)(wD, "discard") && !DD.x.isInRange(gD)) return null;
          var XD = [{
            x: gD,
            y: yD + tD
          }, {
            x: gD,
            y: yD
          }];
          return "top" === fD ? XD.reverse() : XD
        }
        if (ID) {
          var mD = wD.segment.map((function(CD) {
            return DD.apply(CD, {
              position: iD
            })
          }));
          return (0, BD.b)(wD, "discard") && bD()(mD, (function(CD) {
            return !DD.isInRange(CD)
          })) ? null : mD
        }
        return null
      }((0, MD.e)({
        x: nD.scale,
        y: OD.scale
      }), (0, yD.D)(CD), (0, yD.D)(cD), pD && 2 === pD.length, HD, DD.position, nD.orientation, OD.orientation, DD);
      if (!UD) return null;
      var qD = xD(UD, 2),
        KD = qD[0],
        aD = KD.x,
        VD = KD.y,
        zD = qD[1],
        jD = zD.x,
        lD = zD.y,
        LD = PD(PD({
          clipPath: (0, BD.b)(DD, "hidden") ? "url(#".concat(mD, ")") : void 0
        }, (0, ZD.b)(DD, !0)), {}, {
          x1: aD,
          y1: VD,
          x2: jD,
          y2: lD
        });
      return ID.createElement(wD.d, {
        className: (0, QD.e)("recharts-reference-line", gD)
      }, function(DD, CD) {
        return ID.isValidElement(DD) ? ID.cloneElement(DD, CD) : iD()(DD) ? DD(CD) : ID.createElement("line", JD({}, CD, {
          className: "recharts-reference-line-line"
        }))
      }(ND, LD), SD.d.renderCallByParent(DD, (0, MD.j)({
        x1: aD,
        y1: VD,
        x2: jD,
        y2: lD
      })))
    }
    var aD = function(DD) {
      function CD() {
        return function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD), gD(this, CD, arguments)
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && nD(DD, CD)
      }(CD, DD), cD = CD, (pD = [{
        key: "render",
        value: function() {
          return ID.createElement(KD, this.props)
        }
      }]) && ND(cD.prototype, pD), iD && ND(cD, iD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, pD, iD
    }(ID.Component);
    HD(aD, "displayName", "ReferenceLine"), HD(aD, "defaultProps", {
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
  6112: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ND
    });
    var ID = cD(53),
      pD = cD(4841),
      iD = cD(6068),
      fD = cD(6120),
      bD = cD(5873);

    function QD(DD) {
      return QD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, QD(DD)
    }

    function wD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, ZD(ID.key), ID)
      }
    }

    function SD(DD, CD, cD) {
      return CD = yD(CD),
        function(DD, CD) {
          if (CD && ("object" === QD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, BD() ? Reflect.construct(CD, cD || [], yD(DD).constructor) : CD.apply(DD, cD))
    }

    function BD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (BD = function() {
        return !!DD
      })()
    }

    function yD(DD) {
      return yD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, yD(DD)
    }

    function MD(DD, CD) {
      return MD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, MD(DD, CD)
    }

    function tD(DD, CD, cD) {
      return (CD = ZD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function ZD(DD) {
      var CD = function(DD, CD) {
        if ("object" != QD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != QD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == QD(CD) ? CD : CD + ""
    }

    function oD() {
      return oD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, oD.apply(this, arguments)
    }

    function vD(DD) {
      var CD = DD.xAxisId,
        cD = (0, iD.i)(),
        QD = (0, iD.e)(),
        wD = (0, iD.q)(CD);
      return null == wD ? null : ID.createElement(fD.e, oD({}, wD, {
        className: (0, pD.e)("recharts-".concat(wD.axisType, " ").concat(wD.axisType), wD.className),
        viewBox: {
          x: 0,
          y: 0,
          width: cD,
          height: QD
        },
        ticksGenerator: function(DD) {
          return (0, bD.K)(DD, !0)
        }
      }))
    }
    var ND = function(DD) {
      function CD() {
        return function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD), SD(this, CD, arguments)
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && MD(DD, CD)
      }(CD, DD), cD = CD, (pD = [{
        key: "render",
        value: function() {
          return ID.createElement(vD, this.props)
        }
      }]) && wD(cD.prototype, pD), iD && wD(cD, iD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, pD, iD
    }(ID.Component);
    tD(ND, "displayName", "XAxis"), tD(ND, "defaultProps", {
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
  6127: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ND
    });
    var ID = cD(53),
      pD = cD(4841),
      iD = cD(6068),
      fD = cD(6120),
      bD = cD(5873);

    function QD(DD) {
      return QD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, QD(DD)
    }

    function wD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, ZD(ID.key), ID)
      }
    }

    function SD(DD, CD, cD) {
      return CD = yD(CD),
        function(DD, CD) {
          if (CD && ("object" === QD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, BD() ? Reflect.construct(CD, cD || [], yD(DD).constructor) : CD.apply(DD, cD))
    }

    function BD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (BD = function() {
        return !!DD
      })()
    }

    function yD(DD) {
      return yD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, yD(DD)
    }

    function MD(DD, CD) {
      return MD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, MD(DD, CD)
    }

    function tD(DD, CD, cD) {
      return (CD = ZD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function ZD(DD) {
      var CD = function(DD, CD) {
        if ("object" != QD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != QD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == QD(CD) ? CD : CD + ""
    }

    function oD() {
      return oD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, oD.apply(this, arguments)
    }
    var vD = function(DD) {
        var CD = DD.yAxisId,
          cD = (0, iD.i)(),
          QD = (0, iD.e)(),
          wD = (0, iD.u)(CD);
        return null == wD ? null : ID.createElement(fD.e, oD({}, wD, {
          className: (0, pD.e)("recharts-".concat(wD.axisType, " ").concat(wD.axisType), wD.className),
          viewBox: {
            x: 0,
            y: 0,
            width: cD,
            height: QD
          },
          ticksGenerator: function(DD) {
            return (0, bD.K)(DD, !0)
          }
        }))
      },
      ND = function(DD) {
        function CD() {
          return function(DD, CD) {
            if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
          }(this, CD), SD(this, CD, arguments)
        }
        return function(DD, CD) {
          if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
          DD.prototype = Object.create(CD && CD.prototype, {
            constructor: {
              value: DD,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), CD && MD(DD, CD)
        }(CD, DD), cD = CD, (pD = [{
          key: "render",
          value: function() {
            return ID.createElement(vD, this.props)
          }
        }]) && wD(cD.prototype, pD), iD && wD(cD, iD), Object.defineProperty(cD, "prototype", {
          writable: !1
        }), cD;
        var cD, pD, iD
      }(ID.Component);
    tD(ND, "displayName", "YAxis"), tD(ND, "defaultProps", {
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
  6123: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ZD
    });
    var ID = cD(5032),
      pD = cD.n(ID),
      iD = cD(4927),
      fD = cD(5868),
      bD = cD(5712),
      QD = cD(5959);

    function wD(DD, CD, cD) {
      if (CD < 1) return [];
      if (1 === CD && void 0 === cD) return DD;
      for (var ID = [], pD = 0; pD < DD.length; pD += CD) {
        if (void 0 !== cD && !0 !== cD(DD[pD])) return;
        ID.push(DD[pD])
      }
      return ID
    }

    function SD(DD, CD, cD, ID, pD) {
      if (DD * CD < DD * ID || DD * CD > DD * pD) return !1;
      var iD = cD();
      return DD * (CD - DD * iD / 2 - ID) >= 0 && DD * (CD + DD * iD / 2 - pD) <= 0
    }

    function BD(DD) {
      return BD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, BD(DD)
    }

    function yD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function MD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? yD(Object(cD), !0).forEach((function(CD) {
          tD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : yD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function tD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != BD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != BD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == BD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function ZD(DD, CD, cD) {
      var ID = DD.wy,
        BD = DD.ticks,
        yD = DD.viewBox,
        tD = DD.minTickGap,
        ZD = DD.orientation,
        oD = DD.interval,
        vD = DD.tickFormatter,
        ND = DD.unit,
        gD = DD.angle;
      if (!BD || !BD.length || !ID) return [];
      if ((0, iD.G)(oD) || bD.e.isSsr) return function(DD, CD) {
        return wD(DD, CD + 1)
      }(BD, "number" === typeof oD && (0, iD.G)(oD) ? oD : 0);
      var XD = [],
        mD = "top" === ZD || "bottom" === ZD ? "width" : "height",
        nD = ND && "width" === mD ? (0, fD.g)(ND, {
          fontSize: CD,
          letterSpacing: cD
        }) : {
          width: 0,
          height: 0
        },
        OD = function(DD, ID) {
          var iD = pD()(vD) ? vD(DD.value, ID) : DD.value;
          return "width" === mD ? function(DD, CD, cD) {
            var ID = {
              width: DD.width + CD.width,
              height: DD.height + CD.height
            };
            return (0, QD.i)(ID, cD)
          }((0, fD.g)(iD, {
            fontSize: CD,
            letterSpacing: cD
          }), nD, gD) : (0, fD.g)(iD, {
            fontSize: CD,
            letterSpacing: cD
          })[mD]
        },
        PD = BD.length >= 2 ? (0, iD.K)(BD[1].coordinate - BD[0].coordinate) : 1,
        HD = function(DD, CD, cD) {
          var ID = "width" === cD,
            pD = DD.x,
            iD = DD.y,
            fD = DD.width,
            bD = DD.height;
          return 1 === CD ? {
            start: ID ? pD : iD,
            end: ID ? pD + fD : iD + bD
          } : {
            start: ID ? pD + fD : iD + bD,
            end: ID ? pD : iD
          }
        }(yD, PD, mD);
      return "equidistantPreserveStart" === oD ? function(DD, CD, cD, ID, pD) {
        for (var iD, fD = (ID || []).slice(), bD = CD.start, QD = CD.end, BD = 0, yD = 1, MD = bD, tD = function() {
            var CD = null === ID || void 0 === ID ? void 0 : ID[BD];
            if (void 0 === CD) return {
              v: wD(ID, yD)
            };
            var iD, fD = BD,
              tD = function() {
                return void 0 === iD && (iD = cD(CD, fD)), iD
              },
              ZD = CD.coordinate,
              oD = 0 === BD || SD(DD, ZD, tD, MD, QD);
            oD || (BD = 0, MD = bD, yD += 1), oD && (MD = ZD + DD * (tD() / 2 + pD), BD += yD)
          }; yD <= fD.length;)
          if (iD = tD()) return iD.v;
        return []
      }(PD, HD, OD, BD, tD) : (XD = "preserveStart" === oD || "preserveStartEnd" === oD ? function(DD, CD, cD, ID, pD, iD) {
        var fD = (ID || []).slice(),
          bD = fD.length,
          QD = CD.start,
          wD = CD.end;
        if (iD) {
          var BD = ID[bD - 1],
            yD = cD(BD, bD - 1),
            tD = DD * (BD.coordinate + DD * yD / 2 - wD);
          fD[bD - 1] = BD = MD(MD({}, BD), {}, {
            tickCoord: tD > 0 ? BD.coordinate - tD * DD : BD.coordinate
          }), SD(DD, BD.tickCoord, (function() {
            return yD
          }), QD, wD) && (wD = BD.tickCoord - DD * (yD / 2 + pD), fD[bD - 1] = MD(MD({}, BD), {}, {
            isShow: !0
          }))
        }
        for (var ZD = iD ? bD - 1 : bD, oD = function(CD) {
            var ID, iD = fD[CD],
              bD = function() {
                return void 0 === ID && (ID = cD(iD, CD)), ID
              };
            if (0 === CD) {
              var BD = DD * (iD.coordinate - DD * bD() / 2 - QD);
              fD[CD] = iD = MD(MD({}, iD), {}, {
                tickCoord: BD < 0 ? iD.coordinate - BD * DD : iD.coordinate
              })
            } else fD[CD] = iD = MD(MD({}, iD), {}, {
              tickCoord: iD.coordinate
            });
            SD(DD, iD.tickCoord, bD, QD, wD) && (QD = iD.tickCoord + DD * (bD() / 2 + pD), fD[CD] = MD(MD({}, iD), {}, {
              isShow: !0
            }))
          }, vD = 0; vD < ZD; vD++) oD(vD);
        return fD
      }(PD, HD, OD, BD, tD, "preserveStartEnd" === oD) : function(DD, CD, cD, ID, pD) {
        for (var iD = (ID || []).slice(), fD = iD.length, bD = CD.start, QD = CD.end, wD = function(CD) {
            var ID, wD = iD[CD],
              BD = function() {
                return void 0 === ID && (ID = cD(wD, CD)), ID
              };
            if (CD === fD - 1) {
              var yD = DD * (wD.coordinate + DD * BD() / 2 - QD);
              iD[CD] = wD = MD(MD({}, wD), {}, {
                tickCoord: yD > 0 ? wD.coordinate - yD * DD : wD.coordinate
              })
            } else iD[CD] = wD = MD(MD({}, wD), {}, {
              tickCoord: wD.coordinate
            });
            SD(DD, wD.tickCoord, BD, bD, QD) && (QD = wD.tickCoord - DD * (BD() / 2 + pD), iD[CD] = MD(MD({}, wD), {}, {
              isShow: !0
            }))
          }, BD = fD - 1; BD >= 0; BD--) wD(BD);
        return iD
      }(PD, HD, OD, BD, tD), XD.filter((function(DD) {
        return DD.isShow
      })))
    }
  },
  6142: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD
    });
    var ID = cD(5219),
      pD = cD(5987),
      iD = cD(6112),
      fD = cD(6127),
      bD = cD(5959),
      QD = (0, ID.e)({
        chartName: "BarChart",
        GraphicalChild: pD.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: iD.e
        }, {
          axisType: "yAxis",
          AxisComp: fD.b
        }],
        formatAxisMap: bD.g
      })
  },
  5213: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pC
    });
    var ID = cD(5219),
      pD = cD(6101),
      iD = cD(5987),
      fD = cD(6108),
      bD = cD(53),
      QD = cD(5860),
      wD = cD(5175),
      SD = cD.n(wD),
      BD = cD(5927),
      yD = cD.n(BD),
      MD = cD(5032),
      tD = cD.n(MD),
      ZD = cD(4841),
      oD = cD(5701),
      vD = cD(6002),
      ND = cD(5185),
      gD = cD(5712);

    function XD(DD) {
      return XD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, XD(DD)
    }

    function mD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, xD(ID.key), ID)
      }
    }

    function nD(DD, CD, cD) {
      return CD = PD(CD),
        function(DD, CD) {
          if (CD && ("object" === XD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, OD() ? Reflect.construct(CD, cD || [], PD(DD).constructor) : CD.apply(DD, cD))
    }

    function OD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (OD = function() {
        return !!DD
      })()
    }

    function PD(DD) {
      return PD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, PD(DD)
    }

    function HD(DD, CD) {
      return HD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, HD(DD, CD)
    }

    function UD(DD, CD, cD) {
      return (CD = xD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function xD(DD) {
      var CD = function(DD, CD) {
        if ("object" != XD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != XD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == XD(CD) ? CD : CD + ""
    }
    var qD = function(DD) {
      function CD() {
        return function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD), nD(this, CD, arguments)
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && HD(DD, CD)
      }(CD, DD), cD = CD, (ID = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && mD(cD.prototype, ID), pD && mD(cD, pD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, ID, pD
    }(bD.Component);
    UD(qD, "displayName", "ZAxis"), UD(qD, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var JD = cD(6097),
      KD = cD(5937),
      aD = cD(5994),
      VD = cD(4927),
      zD = cD(5873),
      jD = cD(5208),
      lD = cD(5780),
      LD = cD(6012),
      TD = ["option", "isActive"];

    function GD() {
      return GD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, GD.apply(this, arguments)
    }

    function RD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function kD(DD) {
      var CD = DD.option,
        cD = DD.isActive,
        ID = RD(DD, TD);
      return "string" === typeof CD ? bD.createElement(LD.d, GD({
        option: bD.createElement(lD.b, GD({
          type: CD
        }, ID)),
        isActive: cD,
        shapeType: "symbols"
      }, ID)) : bD.createElement(LD.d, GD({
        option: CD,
        isActive: cD,
        shapeType: "symbols"
      }, ID))
    }

    function dD(DD) {
      return dD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, dD(DD)
    }

    function YD() {
      return YD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, YD.apply(this, arguments)
    }

    function WD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function sD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? WD(Object(cD), !0).forEach((function(CD) {
          AD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : WD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function ED(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, FD(ID.key), ID)
      }
    }

    function eD(DD, CD, cD) {
      return CD = hD(CD),
        function(DD, CD) {
          if (CD && ("object" === dD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, uD() ? Reflect.construct(CD, cD || [], hD(DD).constructor) : CD.apply(DD, cD))
    }

    function uD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (uD = function() {
        return !!DD
      })()
    }

    function hD(DD) {
      return hD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, hD(DD)
    }

    function rD(DD, CD) {
      return rD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, rD(DD, CD)
    }

    function AD(DD, CD, cD) {
      return (CD = FD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function FD(DD) {
      var CD = function(DD, CD) {
        if ("object" != dD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != dD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == dD(CD) ? CD : CD + ""
    }
    var DC = function(DD) {
      function CD() {
        var DD;
        ! function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD);
        for (var cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        return AD(DD = eD(this, CD, [].concat(ID)), "state", {
          isAnimationFinished: !1
        }), AD(DD, "handleAnimationEnd", (function() {
          DD.setState({
            isAnimationFinished: !0
          })
        })), AD(DD, "handleAnimationStart", (function() {
          DD.setState({
            isAnimationFinished: !1
          })
        })), AD(DD, "id", (0, VD.M)("recharts-scatter-")), DD
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && rD(DD, CD)
      }(CD, DD), cD = CD, ID = [{
        key: "renderSymbolsStatically",
        value: function(DD) {
          var CD = this,
            cD = this.props,
            ID = cD.shape,
            pD = cD.activeShape,
            iD = cD.activeIndex,
            fD = (0, ND.b)(this.props, !1);
          return DD.map((function(DD, cD) {
            var QD = iD === cD,
              wD = QD ? pD : ID,
              SD = sD(sD({}, fD), DD);
            return bD.createElement(oD.d, YD({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === DD || void 0 === DD ? void 0 : DD.cx, "-").concat(null === DD || void 0 === DD ? void 0 : DD.cy, "-").concat(null === DD || void 0 === DD ? void 0 : DD.size, "-").concat(cD)
            }, (0, jD.o)(CD.props, DD, cD), {
              role: "img"
            }), bD.createElement(kD, YD({
              option: wD,
              isActive: QD,
              key: "symbol-".concat(cD)
            }, SD)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var DD = this,
            CD = this.props,
            cD = CD.points,
            ID = CD.isAnimationActive,
            pD = CD.animationBegin,
            iD = CD.animationDuration,
            fD = CD.animationEasing,
            wD = CD.animationId,
            SD = this.state.prevPoints;
          return bD.createElement(QD.d, {
            VM: pD,
            duration: iD,
            isActive: ID,
            easing: fD,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(wD),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(CD) {
            var ID = CD.t,
              pD = cD.map((function(DD, CD) {
                var cD = SD && SD[CD];
                if (cD) {
                  var pD = (0, VD.x)(cD.cx, DD.cx),
                    iD = (0, VD.x)(cD.cy, DD.cy),
                    fD = (0, VD.x)(cD.size, DD.size);
                  return sD(sD({}, DD), {}, {
                    cx: pD(ID),
                    cy: iD(ID),
                    size: fD(ID)
                  })
                }
                var bD = (0, VD.x)(0, DD.size);
                return sD(sD({}, DD), {}, {
                  size: bD(ID)
                })
              }));
            return bD.createElement(oD.d, null, DD.renderSymbolsStatically(pD))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var DD = this.props,
            CD = DD.points,
            cD = DD.isAnimationActive,
            ID = this.state.prevPoints;
          return !(cD && CD && CD.length) || ID && yD()(ID, CD) ? this.renderSymbolsStatically(CD) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var DD = this.props,
            CD = DD.points,
            cD = DD.xAxis,
            ID = DD.yAxis,
            pD = DD.children,
            iD = (0, ND.f)(pD, KD.b);
          return iD ? iD.map((function(DD, pD) {
            var iD = DD.props,
              fD = iD.direction,
              QD = iD.dataKey;
            return bD.cloneElement(DD, {
              key: "".concat(fD, "-").concat(QD, "-").concat(CD[pD]),
              data: CD,
              xAxis: cD,
              yAxis: ID,
              layout: "x" === fD ? "vertical" : "horizontal",
              dataPointFormatter: function(DD, CD) {
                return {
                  x: DD.cx,
                  y: DD.cy,
                  value: "x" === fD ? +DD.node.x : +DD.node.y,
                  errorVal: (0, zD.Q)(DD, CD)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var DD, CD, cD = this.props,
            ID = cD.points,
            pD = cD.line,
            iD = cD.lineType,
            fD = cD.lineJointType,
            QD = (0, ND.b)(this.props, !1),
            wD = (0, ND.b)(pD, !1);
          if ("joint" === iD) DD = ID.map((function(DD) {
            return {
              x: DD.cx,
              y: DD.cy
            }
          }));
          else if ("fitting" === iD) {
            var SD = (0, VD.l)(ID),
              BD = SD.xmin,
              yD = SD.xmax,
              MD = SD.a,
              ZD = SD.b,
              vD = function(DD) {
                return MD * DD + ZD
              };
            DD = [{
              x: BD,
              y: vD(BD)
            }, {
              x: yD,
              y: vD(yD)
            }]
          }
          var gD = sD(sD(sD({}, QD), {}, {
            fill: "none",
            stroke: QD && QD.fill
          }, wD), {}, {
            points: DD
          });
          return CD = bD.isValidElement(pD) ? bD.cloneElement(pD, gD) : tD()(pD) ? pD(gD) : bD.createElement(JD.e, YD({}, gD, {
            type: fD
          })), bD.createElement(oD.d, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, CD)
        }
      }, {
        key: "render",
        value: function() {
          var DD = this.props,
            CD = DD.hide,
            cD = DD.points,
            ID = DD.line,
            pD = DD.className,
            iD = DD.xAxis,
            fD = DD.yAxis,
            QD = DD.left,
            wD = DD.top,
            BD = DD.width,
            yD = DD.height,
            MD = DD.id,
            tD = DD.isAnimationActive;
          if (CD || !cD || !cD.length) return null;
          var ND = this.state.isAnimationFinished,
            gD = (0, ZD.e)("recharts-scatter", pD),
            XD = iD && iD.allowDataOverflow,
            mD = fD && fD.allowDataOverflow,
            nD = XD || mD,
            OD = SD()(MD) ? this.id : MD;
          return bD.createElement(oD.d, {
            className: gD,
            clipPath: nD ? "url(#clipPath-".concat(OD, ")") : null
          }, XD || mD ? bD.createElement("defs", null, bD.createElement("clipPath", {
            id: "clipPath-".concat(OD)
          }, bD.createElement("rect", {
            x: XD ? QD : QD - BD / 2,
            y: mD ? wD : wD - yD / 2,
            width: XD ? BD : 2 * BD,
            height: mD ? yD : 2 * yD
          }))) : null, ID && this.renderLine(), this.renderErrorBar(), bD.createElement(oD.d, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!tD || ND) && vD.e.renderCallByParent(this.props, cD))
        }
      }], pD = [{
        key: "getDerivedStateFromProps",
        value: function(DD, CD) {
          return DD.animationId !== CD.prevAnimationId ? {
            prevAnimationId: DD.animationId,
            curPoints: DD.points,
            prevPoints: CD.curPoints
          } : DD.points !== CD.curPoints ? {
            curPoints: DD.points
          } : null
        }
      }], ID && ED(cD.prototype, ID), pD && ED(cD, pD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, ID, pD
    }(bD.PureComponent);
    AD(DC, "displayName", "Scatter"), AD(DC, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !gD.e.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), AD(DC, "getComposedData", (function(DD) {
      var CD = DD.xAxis,
        cD = DD.yAxis,
        ID = DD.zAxis,
        pD = DD.item,
        iD = DD.displayedData,
        fD = DD.xAxisTicks,
        bD = DD.yAxisTicks,
        QD = DD.offset,
        wD = pD.props.tooltipType,
        BD = (0, ND.f)(pD.props.children, aD.e),
        yD = SD()(CD.dataKey) ? pD.props.dataKey : CD.dataKey,
        MD = SD()(cD.dataKey) ? pD.props.dataKey : cD.dataKey,
        tD = ID && ID.dataKey,
        ZD = ID ? ID.range : qD.defaultProps.range,
        oD = ZD && ZD[0],
        vD = CD.scale.bandwidth ? CD.scale.bandwidth() : 0,
        gD = cD.scale.bandwidth ? cD.scale.bandwidth() : 0,
        XD = iD.map((function(DD, iD) {
          var QD = (0, zD.Q)(DD, yD),
            ZD = (0, zD.Q)(DD, MD),
            ND = !SD()(tD) && (0, zD.Q)(DD, tD) || "-",
            XD = [{
              name: SD()(CD.dataKey) ? pD.props.name : CD.name || CD.dataKey,
              unit: CD.unit || "",
              value: QD,
              payload: DD,
              dataKey: yD,
              type: wD
            }, {
              name: SD()(cD.dataKey) ? pD.props.name : cD.name || cD.dataKey,
              unit: cD.unit || "",
              value: ZD,
              payload: DD,
              dataKey: MD,
              type: wD
            }];
          "-" !== ND && XD.push({
            name: ID.name || ID.dataKey,
            unit: ID.unit || "",
            value: ND,
            payload: DD,
            dataKey: tD,
            type: wD
          });
          var mD = (0, zD.u)({
              axis: CD,
              ticks: fD,
              bandSize: vD,
              entry: DD,
              index: iD,
              dataKey: yD
            }),
            nD = (0, zD.u)({
              axis: cD,
              ticks: bD,
              bandSize: gD,
              entry: DD,
              index: iD,
              dataKey: MD
            }),
            OD = "-" !== ND ? ID.scale(ND) : oD,
            PD = Math.sqrt(Math.max(OD, 0) / Math.PI);
          return sD(sD({}, DD), {}, {
            cx: mD,
            cy: nD,
            x: mD - PD,
            y: nD - PD,
            xAxis: CD,
            yAxis: cD,
            zAxis: ID,
            width: 2 * PD,
            height: 2 * PD,
            size: OD,
            node: {
              x: QD,
              y: ZD,
              z: ND
            },
            tooltipPayload: XD,
            tooltipPosition: {
              x: mD,
              y: nD
            },
            payload: DD
          }, BD && BD[iD] && BD[iD].props)
        }));
      return sD({
        points: XD
      }, QD)
    }));
    var CC = cD(6112),
      cC = cD(6127),
      IC = cD(5959),
      pC = (0, ID.e)({
        chartName: "ComposedChart",
        GraphicalChild: [fD.d, pD.c, iD.b, DC],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: CC.e
        }, {
          axisType: "yAxis",
          AxisComp: cC.b
        }, {
          axisType: "zAxis",
          AxisComp: qD
        }],
        formatAxisMap: IC.g
      })
  },
  5219: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => Gc
    });
    var ID = cD(53),
      pD = cD(5175),
      iD = cD.n(pD),
      fD = cD(5032),
      bD = cD.n(fD),
      QD = cD(5223),
      wD = cD.n(QD),
      SD = cD(4959),
      BD = cD.n(SD),
      yD = cD(5268),
      MD = cD.n(yD),
      tD = cD(4845),
      ZD = cD.n(tD),
      oD = cD(4841),
      vD = cD(5688),
      ND = cD(5694),
      gD = cD(5701),
      XD = cD(5707),
      mD = cD(5778),
      nD = cD(5849),
      OD = cD(5858),
      PD = cD(5185),
      HD = cD(5875),
      UD = cD(5863),
      xD = cD(5873),
      qD = cD(4927);

    function JD(DD) {
      return JD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, JD(DD)
    }

    function KD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function aD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? KD(Object(cD), !0).forEach((function(CD) {
          VD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : KD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function VD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != JD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != JD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == JD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var zD = ["Webkit", "Moz", "O", "ms"];

    function jD(DD) {
      return jD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, jD(DD)
    }

    function lD() {
      return lD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, lD.apply(this, arguments)
    }

    function LD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function TD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? LD(Object(cD), !0).forEach((function(CD) {
          WD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : LD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function GD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, sD(ID.key), ID)
      }
    }

    function RD(DD, CD, cD) {
      return CD = dD(CD),
        function(DD, CD) {
          if (CD && ("object" === jD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, kD() ? Reflect.construct(CD, cD || [], dD(DD).constructor) : CD.apply(DD, cD))
    }

    function kD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (kD = function() {
        return !!DD
      })()
    }

    function dD(DD) {
      return dD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, dD(DD)
    }

    function YD(DD, CD) {
      return YD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, YD(DD, CD)
    }

    function WD(DD, CD, cD) {
      return (CD = sD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function sD(DD) {
      var CD = function(DD, CD) {
        if ("object" != jD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != jD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == jD(CD) ? CD : CD + ""
    }
    var ED = function(DD) {
        return DD.changedTouches && !!DD.changedTouches.length
      },
      eD = function(DD) {
        function CD(DD) {
          var cD;
          return function(DD, CD) {
            if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
          }(this, CD), WD(cD = RD(this, CD, [DD]), "handleDrag", (function(DD) {
            cD.leaveTimer && (clearTimeout(cD.leaveTimer), cD.leaveTimer = null), cD.state.isTravellerMoving ? cD.handleTravellerMove(DD) : cD.state.isSlideMoving && cD.handleSlideDrag(DD)
          })), WD(cD, "handleTouchMove", (function(DD) {
            null != DD.changedTouches && DD.changedTouches.length > 0 && cD.handleDrag(DD.changedTouches[0])
          })), WD(cD, "handleDragEnd", (function() {
            cD.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var DD = cD.props,
                CD = DD.endIndex,
                ID = DD.onDragEnd,
                pD = DD.startIndex;
              null === ID || void 0 === ID || ID({
                endIndex: CD,
                startIndex: pD
              })
            })), cD.detachDragEndListener()
          })), WD(cD, "handleLeaveWrapper", (function() {
            (cD.state.isTravellerMoving || cD.state.isSlideMoving) && (cD.leaveTimer = window.setTimeout(cD.handleDragEnd, cD.props.leaveTimeOut))
          })), WD(cD, "handleEnterSlideOrTraveller", (function() {
            cD.setState({
              isTextActive: !0
            })
          })), WD(cD, "handleLeaveSlideOrTraveller", (function() {
            cD.setState({
              isTextActive: !1
            })
          })), WD(cD, "handleSlideDragStart", (function(DD) {
            var CD = ED(DD) ? DD.changedTouches[0] : DD;
            cD.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: CD.pageX
            }), cD.attachDragEndListener()
          })), cD.travellerDragStartHandlers = {
            startX: cD.handleTravellerDragStart.bind(cD, "startX"),
            endX: cD.handleTravellerDragStart.bind(cD, "endX")
          }, cD.state = {}, cD
        }
        return function(DD, CD) {
          if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
          DD.prototype = Object.create(CD && CD.prototype, {
            constructor: {
              value: DD,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), CD && YD(DD, CD)
        }(CD, DD), cD = CD, pD = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(DD) {
            var cD = DD.startX,
              ID = DD.endX,
              pD = this.state.scaleValues,
              iD = this.props,
              fD = iD.gap,
              bD = iD.data.length - 1,
              QD = Math.min(cD, ID),
              wD = Math.max(cD, ID),
              SD = CD.getIndexInRange(pD, QD),
              BD = CD.getIndexInRange(pD, wD);
            return {
              startIndex: SD - SD % fD,
              endIndex: BD === bD ? bD : BD - BD % fD
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(DD) {
            var CD = this.props,
              cD = CD.data,
              ID = CD.tickFormatter,
              pD = CD.dataKey,
              iD = (0, xD.Q)(cD[DD], pD, DD);
            return bD()(ID) ? ID(iD, DD) : iD
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
            var CD = this.state,
              cD = CD.slideMoveStartX,
              ID = CD.startX,
              pD = CD.endX,
              iD = this.props,
              fD = iD.x,
              bD = iD.width,
              QD = iD.travellerWidth,
              wD = iD.startIndex,
              SD = iD.endIndex,
              BD = iD.onChange,
              yD = DD.pageX - cD;
            yD > 0 ? yD = Math.min(yD, fD + bD - QD - pD, fD + bD - QD - ID) : yD < 0 && (yD = Math.max(yD, fD - ID, fD - pD));
            var MD = this.getIndex({
              startX: ID + yD,
              endX: pD + yD
            });
            MD.startIndex === wD && MD.endIndex === SD || !BD || BD(MD), this.setState({
              startX: ID + yD,
              endX: pD + yD,
              slideMoveStartX: DD.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(DD, CD) {
            var cD = ED(CD) ? CD.changedTouches[0] : CD;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: DD,
              brushMoveStartX: cD.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(DD) {
            var CD = this.state,
              cD = CD.brushMoveStartX,
              ID = CD.movingTravellerId,
              pD = CD.endX,
              iD = CD.startX,
              fD = this.state[ID],
              bD = this.props,
              QD = bD.x,
              wD = bD.width,
              SD = bD.travellerWidth,
              BD = bD.onChange,
              yD = bD.gap,
              MD = bD.data,
              tD = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              ZD = DD.pageX - cD;
            ZD > 0 ? ZD = Math.min(ZD, QD + wD - SD - fD) : ZD < 0 && (ZD = Math.max(ZD, QD - fD)), tD[ID] = fD + ZD;
            var oD = this.getIndex(tD),
              vD = oD.startIndex,
              ND = oD.endIndex;
            this.setState(WD(WD({}, ID, fD + ZD), "brushMoveStartX", DD.pageX), (function() {
              BD && function() {
                var DD = MD.length - 1;
                return "startX" === ID && (pD > iD ? vD % yD === 0 : ND % yD === 0) || pD < iD && ND === DD || "endX" === ID && (pD > iD ? ND % yD === 0 : vD % yD === 0) || pD > iD && ND === DD
              }() && BD(oD)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(DD, CD) {
            var cD = this,
              ID = this.state,
              pD = ID.scaleValues,
              iD = ID.startX,
              fD = ID.endX,
              bD = this.state[CD],
              QD = pD.indexOf(bD);
            if (-1 !== QD) {
              var wD = QD + DD;
              if (!(-1 === wD || wD >= pD.length)) {
                var SD = pD[wD];
                "startX" === CD && SD >= fD || "endX" === CD && SD <= iD || this.setState(WD({}, CD, SD), (function() {
                  cD.props.onChange(cD.getIndex({
                    startX: cD.state.startX,
                    endX: cD.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var DD = this.props,
              CD = DD.x,
              cD = DD.y,
              pD = DD.width,
              iD = DD.height,
              fD = DD.fill,
              bD = DD.stroke;
            return ID.createElement("rect", {
              stroke: bD,
              fill: fD,
              x: CD,
              y: cD,
              width: pD,
              height: iD
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var DD = this.props,
              CD = DD.x,
              cD = DD.y,
              pD = DD.width,
              iD = DD.height,
              fD = DD.data,
              bD = DD.children,
              QD = DD.padding,
              wD = ID.Children.only(bD);
            return wD ? ID.cloneElement(wD, {
              x: CD,
              y: cD,
              width: pD,
              height: iD,
              margin: QD,
              compact: !0,
              data: fD
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(DD, cD) {
            var pD, iD, fD = this,
              bD = this.props,
              QD = bD.y,
              wD = bD.travellerWidth,
              SD = bD.height,
              BD = bD.traveller,
              yD = bD.ariaLabel,
              MD = bD.data,
              tD = bD.startIndex,
              ZD = bD.endIndex,
              oD = Math.max(DD, this.props.x),
              vD = TD(TD({}, (0, PD.b)(this.props, !1)), {}, {
                x: oD,
                y: QD,
                width: wD,
                height: SD
              }),
              ND = yD || "Min value: ".concat(null === (pD = MD[tD]) || void 0 === pD ? void 0 : pD.name, ", Max value: ").concat(null === (iD = MD[ZD]) || void 0 === iD ? void 0 : iD.name);
            return ID.createElement(gD.d, {
              tabIndex: 0,
              role: "slider",
              "aria-label": ND,
              "aria-valuenow": DD,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[cD],
              onTouchStart: this.travellerDragStartHandlers[cD],
              onKeyDown: function(DD) {
                ["ArrowLeft", "ArrowRight"].includes(DD.key) && (DD.preventDefault(), DD.stopPropagation(), fD.handleTravellerMoveKeyboard("ArrowRight" === DD.key ? 1 : -1, cD))
              },
              onFocus: function() {
                fD.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                fD.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, CD.renderTraveller(BD, vD))
          }
        }, {
          key: "renderSlide",
          value: function(DD, CD) {
            var cD = this.props,
              pD = cD.y,
              iD = cD.height,
              fD = cD.stroke,
              bD = cD.travellerWidth,
              QD = Math.min(DD, CD) + bD,
              wD = Math.max(Math.abs(CD - DD) - bD, 0);
            return ID.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: fD,
              fillOpacity: .2,
              x: QD,
              y: pD,
              width: wD,
              height: iD
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var DD = this.props,
              CD = DD.startIndex,
              cD = DD.endIndex,
              pD = DD.y,
              iD = DD.height,
              fD = DD.travellerWidth,
              bD = DD.stroke,
              QD = this.state,
              wD = QD.startX,
              SD = QD.endX,
              BD = {
                pointerEvents: "none",
                fill: bD
              };
            return ID.createElement(gD.d, {
              className: "recharts-brush-texts"
            }, ID.createElement(UD.b, lD({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(wD, SD) - 5,
              y: pD + iD / 2
            }, BD), this.getTextOfTick(CD)), ID.createElement(UD.b, lD({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(wD, SD) + fD + 5,
              y: pD + iD / 2
            }, BD), this.getTextOfTick(cD)))
          }
        }, {
          key: "render",
          value: function() {
            var DD = this.props,
              CD = DD.data,
              cD = DD.className,
              pD = DD.children,
              iD = DD.x,
              fD = DD.y,
              bD = DD.width,
              QD = DD.height,
              wD = DD.alwaysShowText,
              SD = this.state,
              BD = SD.startX,
              yD = SD.endX,
              MD = SD.isTextActive,
              tD = SD.isSlideMoving,
              ZD = SD.isTravellerMoving,
              vD = SD.isTravellerFocused;
            if (!CD || !CD.length || !(0, qD.G)(iD) || !(0, qD.G)(fD) || !(0, qD.G)(bD) || !(0, qD.G)(QD) || bD <= 0 || QD <= 0) return null;
            var ND = (0, oD.e)("recharts-brush", cD),
              XD = 1 === ID.Children.count(pD),
              mD = function(DD, CD) {
                if (!DD) return null;
                var cD = DD.replace(/(\w)/, (function(DD) {
                    return DD.toUpperCase()
                  })),
                  ID = zD.reduce((function(DD, ID) {
                    return aD(aD({}, DD), {}, VD({}, ID + cD, CD))
                  }), {});
                return ID[DD] = CD, ID
              }("userSelect", "none");
            return ID.createElement(gD.d, {
              className: ND,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: mD
            }, this.renderBackground(), XD && this.renderPanorama(), this.renderSlide(BD, yD), this.renderTravellerLayer(BD, "startX"), this.renderTravellerLayer(yD, "endX"), (MD || tD || ZD || vD || wD) && this.renderText())
          }
        }], iD = [{
          key: "renderDefaultTraveller",
          value: function(DD) {
            var CD = DD.x,
              cD = DD.y,
              pD = DD.width,
              iD = DD.height,
              fD = DD.stroke,
              bD = Math.floor(cD + iD / 2) - 1;
            return ID.createElement(ID.Fragment, null, ID.createElement("rect", {
              x: CD,
              y: cD,
              width: pD,
              height: iD,
              fill: fD,
              stroke: "none"
            }), ID.createElement("line", {
              x1: CD + 1,
              y1: bD,
              x2: CD + pD - 1,
              y2: bD,
              fill: "none",
              stroke: "#fff"
            }), ID.createElement("line", {
              x1: CD + 1,
              y1: bD + 2,
              x2: CD + pD - 1,
              y2: bD + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(DD, cD) {
            return ID.isValidElement(DD) ? ID.cloneElement(DD, cD) : bD()(DD) ? DD(cD) : CD.renderDefaultTraveller(cD)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(DD, CD) {
            var cD = DD.data,
              ID = DD.width,
              pD = DD.x,
              iD = DD.travellerWidth,
              fD = DD.updateId,
              bD = DD.startIndex,
              QD = DD.endIndex;
            if (cD !== CD.prevData || fD !== CD.prevUpdateId) return TD({
              prevData: cD,
              prevTravellerWidth: iD,
              prevUpdateId: fD,
              prevX: pD,
              prevWidth: ID
            }, cD && cD.length ? function(DD) {
              var CD = DD.data,
                cD = DD.startIndex,
                ID = DD.endIndex,
                pD = DD.x,
                iD = DD.width,
                fD = DD.travellerWidth;
              if (!CD || !CD.length) return {};
              var bD = CD.length,
                QD = (0, HD.d)().domain(wD()(0, bD)).range([pD, pD + iD - fD]),
                SD = QD.domain().map((function(DD) {
                  return QD(DD)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: QD(cD),
                endX: QD(ID),
                scale: QD,
                scaleValues: SD
              }
            }({
              data: cD,
              width: ID,
              x: pD,
              travellerWidth: iD,
              startIndex: bD,
              endIndex: QD
            }) : {
              scale: null,
              scaleValues: null
            });
            if (CD.scale && (ID !== CD.prevWidth || pD !== CD.prevX || iD !== CD.prevTravellerWidth)) {
              CD.scale.range([pD, pD + ID - iD]);
              var SD = CD.scale.domain().map((function(DD) {
                return CD.scale(DD)
              }));
              return {
                prevData: cD,
                prevTravellerWidth: iD,
                prevUpdateId: fD,
                prevX: pD,
                prevWidth: ID,
                startX: CD.scale(DD.startIndex),
                endX: CD.scale(DD.endIndex),
                scaleValues: SD
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(DD, CD) {
            for (var cD = 0, ID = DD.length - 1; ID - cD > 1;) {
              var pD = Math.floor((cD + ID) / 2);
              DD[pD] > CD ? ID = pD : cD = pD
            }
            return CD >= DD[ID] ? ID : cD
          }
        }], pD && GD(cD.prototype, pD), iD && GD(cD, iD), Object.defineProperty(cD, "prototype", {
          writable: !1
        }), cD;
        var cD, pD, iD
      }(ID.PureComponent);
    WD(eD, "displayName", "Brush"), WD(eD, "defaultProps", {
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
    var uD = cD(5868),
      hD = cD(5941),
      rD = cD(5949),
      AD = cD(5954),
      FD = cD(5959),
      DC = cD(5181);

    function CC() {
      return CC = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, CC.apply(this, arguments)
    }

    function cC(DD) {
      return cC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, cC(DD)
    }

    function IC(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function pC(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? IC(Object(cD), !0).forEach((function(CD) {
          SC(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : IC(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function iC(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, BC(ID.key), ID)
      }
    }

    function fC(DD, CD, cD) {
      return CD = QC(CD),
        function(DD, CD) {
          if (CD && ("object" === cC(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, bC() ? Reflect.construct(CD, cD || [], QC(DD).constructor) : CD.apply(DD, cD))
    }

    function bC() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (bC = function() {
        return !!DD
      })()
    }

    function QC(DD) {
      return QC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, QC(DD)
    }

    function wC(DD, CD) {
      return wC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, wC(DD, CD)
    }

    function SC(DD, CD, cD) {
      return (CD = BC(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function BC(DD) {
      var CD = function(DD, CD) {
        if ("object" != cC(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != cC(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == cC(CD) ? CD : CD + ""
    }
    var yC = function(DD) {
      function CD() {
        return function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD), fC(this, CD, arguments)
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && wC(DD, CD)
      }(CD, DD), cD = CD, (pD = [{
        key: "render",
        value: function() {
          var DD = this.props,
            cD = DD.x,
            pD = DD.y,
            iD = DD.r,
            fD = DD.alwaysShow,
            bD = DD.clipPathId,
            QD = (0, qD.D)(cD),
            wD = (0, qD.D)(pD);
          if ((0, DC.d)(void 0 === fD, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !QD || !wD) return null;
          var SD = function(DD) {
            var CD = DD.x,
              cD = DD.y,
              ID = DD.xAxis,
              pD = DD.yAxis,
              iD = (0, FD.e)({
                x: ID.scale,
                y: pD.scale
              }),
              fD = iD.apply({
                x: CD,
                y: cD
              }, {
                bandAware: !0
              });
            return (0, AD.b)(DD, "discard") && !iD.isInRange(fD) ? null : fD
          }(this.props);
          if (!SD) return null;
          var BD = SD.x,
            yD = SD.y,
            MD = this.props,
            tD = MD.shape,
            ZD = MD.className,
            vD = pC(pC({
              clipPath: (0, AD.b)(this.props, "hidden") ? "url(#".concat(bD, ")") : void 0
            }, (0, PD.b)(this.props, !0)), {}, {
              cx: BD,
              cy: yD
            });
          return ID.createElement(gD.d, {
            className: (0, oD.e)("recharts-reference-dot", ZD)
          }, CD.renderDot(tD, vD), rD.d.renderCallByParent(this.props, {
            x: BD - iD,
            y: yD - iD,
            width: 2 * iD,
            height: 2 * iD
          }))
        }
      }]) && iC(cD.prototype, pD), iD && iC(cD, iD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, pD, iD
    }(ID.Component);
    SC(yC, "displayName", "ReferenceDot"), SC(yC, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), SC(yC, "renderDot", (function(DD, CD) {
      return ID.isValidElement(DD) ? ID.cloneElement(DD, CD) : bD()(DD) ? DD(CD) : ID.createElement(nD.e, CC({}, CD, {
        cx: CD.cx,
        cy: CD.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var MC = cD(6053);

    function tC() {
      return tC = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, tC.apply(this, arguments)
    }

    function ZC(DD) {
      return ZC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ZC(DD)
    }

    function oC(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function vC(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? oC(Object(cD), !0).forEach((function(CD) {
          OC(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : oC(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function NC(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, PC(ID.key), ID)
      }
    }

    function gC(DD, CD, cD) {
      return CD = mC(CD),
        function(DD, CD) {
          if (CD && ("object" === ZC(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, XC() ? Reflect.construct(CD, cD || [], mC(DD).constructor) : CD.apply(DD, cD))
    }

    function XC() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (XC = function() {
        return !!DD
      })()
    }

    function mC(DD) {
      return mC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, mC(DD)
    }

    function nC(DD, CD) {
      return nC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, nC(DD, CD)
    }

    function OC(DD, CD, cD) {
      return (CD = PC(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function PC(DD) {
      var CD = function(DD, CD) {
        if ("object" != ZC(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != ZC(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == ZC(CD) ? CD : CD + ""
    }
    var HC = function(DD) {
      function CD() {
        return function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD), gC(this, CD, arguments)
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && nC(DD, CD)
      }(CD, DD), cD = CD, (pD = [{
        key: "render",
        value: function() {
          var DD = this.props,
            cD = DD.x1,
            pD = DD.x2,
            iD = DD.y1,
            fD = DD.y2,
            bD = DD.className,
            QD = DD.alwaysShow,
            wD = DD.clipPathId;
          (0, DC.d)(void 0 === QD, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var SD = (0, qD.D)(cD),
            BD = (0, qD.D)(pD),
            yD = (0, qD.D)(iD),
            MD = (0, qD.D)(fD),
            tD = this.props.shape;
          if (!SD && !BD && !yD && !MD && !tD) return null;
          var ZD = function(DD, CD, cD, ID, pD) {
            var iD = pD.x1,
              fD = pD.x2,
              bD = pD.y1,
              QD = pD.y2,
              wD = pD.xAxis,
              SD = pD.yAxis;
            if (!wD || !SD) return null;
            var BD = (0, FD.e)({
                x: wD.scale,
                y: SD.scale
              }),
              yD = {
                x: DD ? BD.x.apply(iD, {
                  position: "start"
                }) : BD.x.rangeMin,
                y: cD ? BD.y.apply(bD, {
                  position: "start"
                }) : BD.y.rangeMin
              },
              MD = {
                x: CD ? BD.x.apply(fD, {
                  position: "end"
                }) : BD.x.rangeMax,
                y: ID ? BD.y.apply(QD, {
                  position: "end"
                }) : BD.y.rangeMax
              };
            return !(0, AD.b)(pD, "discard") || BD.isInRange(yD) && BD.isInRange(MD) ? (0, FD.n)(yD, MD) : null
          }(SD, BD, yD, MD, this.props);
          if (!ZD && !tD) return null;
          var vD = (0, AD.b)(this.props, "hidden") ? "url(#".concat(wD, ")") : void 0;
          return ID.createElement(gD.d, {
            className: (0, oD.e)("recharts-reference-area", bD)
          }, CD.renderRect(tD, vC(vC({
            clipPath: vD
          }, (0, PD.b)(this.props, !0)), ZD)), rD.d.renderCallByParent(this.props, ZD))
        }
      }]) && NC(cD.prototype, pD), iD && NC(cD, iD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, pD, iD
    }(ID.Component);

    function UC(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return xC(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return xC(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return xC(DD, CD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xC(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }
    OC(HC, "displayName", "ReferenceArea"), OC(HC, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), OC(HC, "renderRect", (function(DD, CD) {
      return ID.isValidElement(DD) ? ID.cloneElement(DD, CD) : bD()(DD) ? DD(CD) : ID.createElement(OD.b, tC({}, CD, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var qC = function(DD, CD, cD, ID, pD) {
        var iD = (0, PD.f)(DD, MC.b),
          fD = (0, PD.f)(DD, yC),
          bD = [].concat(UC(iD), UC(fD)),
          QD = (0, PD.f)(DD, HC),
          wD = "".concat(ID, "Id"),
          SD = ID[0],
          BD = CD;
        if (bD.length && (BD = bD.reduce((function(DD, CD) {
            if (CD.props[wD] === cD && (0, AD.b)(CD.props, "extendDomain") && (0, qD.G)(CD.props[SD])) {
              var ID = CD.props[SD];
              return [Math.min(DD[0], ID), Math.max(DD[1], ID)]
            }
            return DD
          }), BD)), QD.length) {
          var yD = "".concat(SD, "1"),
            MD = "".concat(SD, "2");
          BD = QD.reduce((function(DD, CD) {
            if (CD.props[wD] === cD && (0, AD.b)(CD.props, "extendDomain") && (0, qD.G)(CD.props[yD]) && (0, qD.G)(CD.props[MD])) {
              var ID = CD.props[yD],
                pD = CD.props[MD];
              return [Math.min(DD[0], ID, pD), Math.max(DD[1], ID, pD)]
            }
            return DD
          }), BD)
        }
        return pD && pD.length && (BD = pD.reduce((function(DD, CD) {
          return (0, qD.G)(CD) ? [Math.min(DD[0], CD), Math.max(DD[1], CD)] : DD
        }), BD)), BD
      },
      JC = cD(5951),
      KC = cD(5203),
      aC = cD(29),
      VC = new(cD.n(aC)()),
      zC = "recharts.syncMouseEvents",
      jC = cD(5208);

    function lC(DD) {
      return lC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, lC(DD)
    }

    function LC(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, GC(ID.key), ID)
      }
    }

    function TC(DD, CD, cD) {
      return (CD = GC(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function GC(DD) {
      var CD = function(DD, CD) {
        if ("object" != lC(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != lC(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == lC(CD) ? CD : CD + ""
    }
    var RC = function() {
      return DD = function DD() {
        ! function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, DD), TC(this, "activeIndex", 0), TC(this, "coordinateList", []), TC(this, "layout", "horizontal")
      }, (CD = [{
        key: "setDetails",
        value: function(DD) {
          var CD, cD = DD.coordinateList,
            ID = void 0 === cD ? null : cD,
            pD = DD.container,
            iD = void 0 === pD ? null : pD,
            fD = DD.layout,
            bD = void 0 === fD ? null : fD,
            QD = DD.offset,
            wD = void 0 === QD ? null : QD,
            SD = DD.mouseHandlerCallback,
            BD = void 0 === SD ? null : SD;
          this.coordinateList = null !== (CD = null !== ID && void 0 !== ID ? ID : this.coordinateList) && void 0 !== CD ? CD : [], this.container = null !== iD && void 0 !== iD ? iD : this.container, this.layout = null !== bD && void 0 !== bD ? bD : this.layout, this.offset = null !== wD && void 0 !== wD ? wD : this.offset, this.mouseHandlerCallback = null !== BD && void 0 !== BD ? BD : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var DD, CD;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var cD = this.container.getBoundingClientRect(),
              ID = cD.x,
              pD = cD.y,
              iD = cD.height,
              fD = this.coordinateList[this.activeIndex].coordinate,
              bD = (null === (DD = window) || void 0 === DD ? void 0 : DD.scrollX) || 0,
              QD = (null === (CD = window) || void 0 === CD ? void 0 : CD.scrollY) || 0,
              wD = ID + fD + bD,
              SD = pD + this.offset.top + iD / 2 + QD;
            this.mouseHandlerCallback({
              pageX: wD,
              pageY: SD
            })
          }
        }
      }]) && LC(DD.prototype, CD), cD && LC(DD, cD), Object.defineProperty(DD, "prototype", {
        writable: !1
      }), DD;
      var DD, CD, cD
    }();
    var kC = cD(6012),
      dC = cD(6097);

    function YC(DD) {
      return YC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, YC(DD)
    }
    var WC = ["x", "y", "top", "left", "width", "height", "className"];

    function sC() {
      return sC = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, sC.apply(this, arguments)
    }

    function EC(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function eC(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != YC(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != YC(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == YC(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function uC(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }
    var hC = function(DD, CD, cD, ID, pD, iD) {
        return "M".concat(DD, ",").concat(pD, "v").concat(ID, "M").concat(iD, ",").concat(CD, "h").concat(cD)
      },
      rC = function(DD) {
        var CD = DD.x,
          cD = void 0 === CD ? 0 : CD,
          pD = DD.y,
          iD = void 0 === pD ? 0 : pD,
          fD = DD.top,
          bD = void 0 === fD ? 0 : fD,
          QD = DD.left,
          wD = void 0 === QD ? 0 : QD,
          SD = DD.width,
          BD = void 0 === SD ? 0 : SD,
          yD = DD.height,
          MD = void 0 === yD ? 0 : yD,
          tD = DD.className,
          ZD = function(DD) {
            for (var CD = 1; CD < arguments.length; CD++) {
              var cD = null != arguments[CD] ? arguments[CD] : {};
              CD % 2 ? EC(Object(cD), !0).forEach((function(CD) {
                eC(DD, CD, cD[CD])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : EC(Object(cD)).forEach((function(CD) {
                Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
              }))
            }
            return DD
          }({
            x: cD,
            y: iD,
            top: bD,
            left: wD,
            width: BD,
            height: MD
          }, uC(DD, WC));
        return (0, qD.G)(cD) && (0, qD.G)(iD) && (0, qD.G)(BD) && (0, qD.G)(MD) && (0, qD.G)(bD) && (0, qD.G)(wD) ? ID.createElement("path", sC({}, (0, PD.b)(ZD, !0), {
          className: (0, oD.e)("recharts-cross", tD),
          d: hC(cD, iD, BD, MD, bD, wD)
        })) : null
      };

    function AC(DD) {
      var CD = DD.cx,
        cD = DD.cy,
        ID = DD.radius,
        pD = DD.startAngle,
        iD = DD.endAngle;
      return {
        points: [(0, JC.h)(CD, cD, ID, pD), (0, JC.h)(CD, cD, ID, iD)],
        cx: CD,
        cy: cD,
        radius: ID,
        startAngle: pD,
        endAngle: iD
      }
    }
    var FC = cD(6045);

    function Dc(DD, CD, cD) {
      var ID, pD, iD, fD;
      if ("horizontal" === DD) iD = ID = CD.x, pD = cD.top, fD = cD.top + cD.height;
      else if ("vertical" === DD) fD = pD = CD.y, ID = cD.left, iD = cD.left + cD.width;
      else if (null != CD.cx && null != CD.cy) {
        if ("centric" !== DD) return AC(CD);
        var bD = CD.cx,
          QD = CD.cy,
          wD = CD.innerRadius,
          SD = CD.outerRadius,
          BD = CD.angle,
          yD = (0, JC.h)(bD, QD, wD, BD),
          MD = (0, JC.h)(bD, QD, SD, BD);
        ID = yD.x, pD = yD.y, iD = MD.x, fD = MD.y
      }
      return [{
        x: ID,
        y: pD
      }, {
        x: iD,
        y: fD
      }]
    }

    function Cc(DD) {
      return Cc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, Cc(DD)
    }

    function cc(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function Ic(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? cc(Object(cD), !0).forEach((function(CD) {
          pc(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : cc(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function pc(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != Cc(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != Cc(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == Cc(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function ic(DD) {
      var CD, cD, pD, iD = DD.element,
        fD = DD.tooltipEventType,
        bD = DD.isActive,
        QD = DD.activeCoordinate,
        wD = DD.activePayload,
        SD = DD.offset,
        BD = DD.activeTooltipIndex,
        yD = DD.tooltipAxisBandSize,
        MD = DD.layout,
        tD = DD.chartName,
        ZD = null !== (CD = iD.props.cursor) && void 0 !== CD ? CD : null === (cD = iD.type.defaultProps) || void 0 === cD ? void 0 : cD.cursor;
      if (!iD || !ZD || !bD || !QD || "ScatterChart" !== tD && "axis" !== fD) return null;
      var vD = dC.e;
      if ("ScatterChart" === tD) pD = QD, vD = rC;
      else if ("BarChart" === tD) pD = function(DD, CD, cD, ID) {
        var pD = ID / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === DD ? CD.x - pD : cD.left + .5,
          y: "horizontal" === DD ? cD.top + .5 : CD.y - pD,
          width: "horizontal" === DD ? ID : cD.width - 1,
          height: "horizontal" === DD ? cD.height - 1 : ID
        }
      }(MD, QD, SD, yD), vD = OD.b;
      else if ("radial" === MD) {
        var ND = AC(QD),
          gD = ND.cx,
          XD = ND.cy,
          mD = ND.radius;
        pD = {
          cx: gD,
          cy: XD,
          startAngle: ND.startAngle,
          endAngle: ND.endAngle,
          innerRadius: mD,
          outerRadius: mD
        }, vD = FC.b
      } else pD = {
        points: Dc(MD, QD, SD)
      }, vD = dC.e;
      var nD = Ic(Ic(Ic(Ic({
        stroke: "#ccc",
        pointerEvents: "none"
      }, SD), pD), (0, PD.b)(ZD, !1)), {}, {
        payload: wD,
        payloadIndex: BD,
        className: (0, oD.e)("recharts-tooltip-cursor", ZD.className)
      });
      return (0, ID.isValidElement)(ZD) ? (0, ID.cloneElement)(ZD, nD) : (0, ID.createElement)(vD, nD)
    }
    var fc = cD(6068),
      bc = ["item"],
      Qc = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function wc(DD) {
      return wc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, wc(DD)
    }

    function Sc() {
      return Sc = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, Sc.apply(this, arguments)
    }

    function Bc(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || gc(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yc(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function Mc(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, Pc(ID.key), ID)
      }
    }

    function tc(DD, CD, cD) {
      return CD = oc(CD),
        function(DD, CD) {
          if (CD && ("object" === wc(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, Zc() ? Reflect.construct(CD, cD || [], oc(DD).constructor) : CD.apply(DD, cD))
    }

    function Zc() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (Zc = function() {
        return !!DD
      })()
    }

    function oc(DD) {
      return oc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, oc(DD)
    }

    function vc(DD, CD) {
      return vc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, vc(DD, CD)
    }

    function Nc(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Xc(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || gc(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gc(DD, CD) {
      if (DD) {
        if ("string" === typeof DD) return Xc(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === cD && DD.constructor && (cD = DD.constructor.name), "Map" === cD || "Set" === cD ? Array.from(DD) : "Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD) ? Xc(DD, CD) : void 0
      }
    }

    function Xc(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function mc(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function nc(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? mc(Object(cD), !0).forEach((function(CD) {
          Oc(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : mc(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function Oc(DD, CD, cD) {
      return (CD = Pc(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function Pc(DD) {
      var CD = function(DD, CD) {
        if ("object" != wc(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != wc(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == wc(CD) ? CD : CD + ""
    }
    var Hc = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Uc = {
        width: "100%",
        height: "100%"
      },
      xc = {
        x: 0,
        y: 0
      };

    function qc(DD) {
      return DD
    }
    var Jc = function(DD, CD) {
      var cD = CD.graphicalItems,
        ID = CD.dataStartIndex,
        pD = CD.dataEndIndex,
        iD = (null !== cD && void 0 !== cD ? cD : []).reduce((function(DD, CD) {
          var cD = CD.props.data;
          return cD && cD.length ? [].concat(Nc(DD), Nc(cD)) : DD
        }), []);
      return iD.length > 0 ? iD : DD && DD.length && (0, qD.G)(ID) && (0, qD.G)(pD) ? DD.slice(ID, pD + 1) : []
    };

    function Kc(DD) {
      return "number" === DD ? [0, "auto"] : void 0
    }
    var ac = function(DD, CD, cD, ID) {
        var pD = DD.graphicalItems,
          iD = DD.tooltipAxis,
          fD = Jc(CD, DD);
        return cD < 0 || !pD || !pD.length || cD >= fD.length ? null : pD.reduce((function(pD, bD) {
          var QD, wD, SD = null !== (QD = bD.props.data) && void 0 !== QD ? QD : CD;
          if (SD && DD.dataStartIndex + DD.dataEndIndex !== 0 && DD.dataEndIndex - DD.dataStartIndex >= cD && (SD = SD.slice(DD.dataStartIndex, DD.dataEndIndex + 1)), iD.dataKey && !iD.allowDuplicatedCategory) {
            var BD = void 0 === SD ? fD : SD;
            wD = (0, qD.h)(BD, iD.dataKey, ID)
          } else wD = SD && SD[cD] || fD[cD];
          return wD ? [].concat(Nc(pD), [(0, xD.O)(bD, wD)]) : pD
        }), [])
      },
      Vc = function(DD, CD, cD, ID) {
        var pD = ID || {
            x: DD.chartX,
            y: DD.chartY
          },
          iD = function(DD, CD) {
            return "horizontal" === CD ? DD.x : "vertical" === CD ? DD.y : "centric" === CD ? DD.angle : DD.radius
          }(pD, cD),
          fD = DD.orderedTooltipTicks,
          bD = DD.tooltipAxis,
          QD = DD.tooltipTicks,
          wD = (0, xD.f)(iD, fD, QD, bD);
        if (wD >= 0 && QD) {
          var SD = QD[wD] && QD[wD].value,
            BD = ac(DD, CD, wD, SD),
            yD = function(DD, CD, cD, ID) {
              var pD = CD.find((function(DD) {
                return DD && DD.index === cD
              }));
              if (pD) {
                if ("horizontal" === DD) return {
                  x: pD.coordinate,
                  y: ID.y
                };
                if ("vertical" === DD) return {
                  x: ID.x,
                  y: pD.coordinate
                };
                if ("centric" === DD) {
                  var iD = pD.coordinate,
                    fD = ID.radius;
                  return nc(nc(nc({}, ID), (0, JC.h)(ID.cx, ID.cy, fD, iD)), {}, {
                    angle: iD,
                    radius: fD
                  })
                }
                var bD = pD.coordinate,
                  QD = ID.angle;
                return nc(nc(nc({}, ID), (0, JC.h)(ID.cx, ID.cy, bD, QD)), {}, {
                  angle: QD,
                  radius: bD
                })
              }
              return xc
            }(cD, fD, wD, pD);
          return {
            activeTooltipIndex: wD,
            activeLabel: SD,
            activePayload: BD,
            activeCoordinate: yD
          }
        }
        return null
      },
      zc = function(DD, CD) {
        var cD = CD.axes,
          ID = CD.graphicalItems,
          pD = CD.axisType,
          fD = CD.axisIdKey,
          bD = CD.stackGroups,
          QD = CD.dataStartIndex,
          SD = CD.dataEndIndex,
          BD = DD.layout,
          yD = DD.children,
          MD = DD.stackOffset,
          tD = (0, xD.S)(BD, pD);
        return cD.reduce((function(CD, cD) {
          var ZD, oD = void 0 !== cD.type.defaultProps ? nc(nc({}, cD.type.defaultProps), cD.props) : cD.props,
            vD = oD.type,
            ND = oD.dataKey,
            gD = oD.allowDataOverflow,
            XD = oD.allowDuplicatedCategory,
            mD = oD.scale,
            nD = oD.ticks,
            OD = oD.includeHidden,
            PD = oD[fD];
          if (CD[PD]) return CD;
          var HD, UD, JD, KD = Jc(DD.data, {
              graphicalItems: ID.filter((function(DD) {
                var CD;
                return (fD in DD.props ? DD.props[fD] : null === (CD = DD.type.defaultProps) || void 0 === CD ? void 0 : CD[fD]) === PD
              })),
              dataStartIndex: QD,
              dataEndIndex: SD
            }),
            aD = KD.length;
          (function(DD, CD, cD) {
            if ("number" === cD && !0 === CD && Array.isArray(DD)) {
              var ID = null === DD || void 0 === DD ? void 0 : DD[0],
                pD = null === DD || void 0 === DD ? void 0 : DD[1];
              if (ID && pD && (0, qD.G)(ID) && (0, qD.G)(pD)) return !0
            }
            return !1
          })(oD.domain, gD, vD) && (HD = (0, xD.bb)(oD.domain, null, gD), !tD || "number" !== vD && "auto" === mD || (JD = (0, xD.x)(KD, ND, "category")));
          var VD = Kc(vD);
          if (!HD || 0 === HD.length) {
            var zD, jD = null !== (zD = oD.domain) && void 0 !== zD ? zD : VD;
            if (ND) {
              if (HD = (0, xD.x)(KD, ND, vD), "category" === vD && tD) {
                var lD = (0, qD.t)(HD);
                XD && lD ? (UD = HD, HD = wD()(0, aD)) : XD || (HD = (0, xD.W)(jD, HD, cD).reduce((function(DD, CD) {
                  return DD.indexOf(CD) >= 0 ? DD : [].concat(Nc(DD), [CD])
                }), []))
              } else if ("category" === vD) HD = XD ? HD.filter((function(DD) {
                return "" !== DD && !iD()(DD)
              })) : (0, xD.W)(jD, HD, cD).reduce((function(DD, CD) {
                return DD.indexOf(CD) >= 0 || "" === CD || iD()(CD) ? DD : [].concat(Nc(DD), [CD])
              }), []);
              else if ("number" === vD) {
                var LD = (0, xD.Y)(KD, ID.filter((function(DD) {
                  var CD, cD, ID = fD in DD.props ? DD.props[fD] : null === (CD = DD.type.defaultProps) || void 0 === CD ? void 0 : CD[fD],
                    pD = "hide" in DD.props ? DD.props.hide : null === (cD = DD.type.defaultProps) || void 0 === cD ? void 0 : cD.hide;
                  return ID === PD && (OD || !pD)
                })), ND, pD, BD);
                LD && (HD = LD)
              }!tD || "number" !== vD && "auto" === mD || (JD = (0, xD.x)(KD, ND, "category"))
            } else HD = tD ? wD()(0, aD) : bD && bD[PD] && bD[PD].hasStack && "number" === vD ? "expand" === MD ? [0, 1] : (0, xD.C)(bD[PD].stackGroups, QD, SD) : (0, xD.B)(KD, ID.filter((function(DD) {
              var CD = fD in DD.props ? DD.props[fD] : DD.type.defaultProps[fD],
                cD = "hide" in DD.props ? DD.props.hide : DD.type.defaultProps.hide;
              return CD === PD && (OD || !cD)
            })), vD, BD, !0);
            if ("number" === vD) HD = qC(yD, HD, PD, pD, nD), jD && (HD = (0, xD.bb)(jD, HD, gD));
            else if ("category" === vD && jD) {
              var TD = jD;
              HD.every((function(DD) {
                return TD.indexOf(DD) >= 0
              })) && (HD = TD)
            }
          }
          return nc(nc({}, CD), {}, Oc({}, PD, nc(nc({}, oD), {}, {
            axisType: pD,
            domain: HD,
            categoricalDomain: JD,
            duplicateDomain: UD,
            originalDomain: null !== (ZD = oD.domain) && void 0 !== ZD ? ZD : VD,
            isCategorical: tD,
            layout: BD
          })))
        }), {})
      },
      jc = function(DD, CD) {
        var cD = CD.axisType,
          ID = void 0 === cD ? "xAxis" : cD,
          pD = CD.AxisComp,
          iD = CD.graphicalItems,
          fD = CD.stackGroups,
          bD = CD.dataStartIndex,
          QD = CD.dataEndIndex,
          SD = DD.children,
          yD = "".concat(ID, "Id"),
          MD = (0, PD.f)(SD, pD),
          tD = {};
        return MD && MD.length ? tD = zc(DD, {
          axes: MD,
          graphicalItems: iD,
          axisType: ID,
          axisIdKey: yD,
          stackGroups: fD,
          dataStartIndex: bD,
          dataEndIndex: QD
        }) : iD && iD.length && (tD = function(DD, CD) {
          var cD = CD.graphicalItems,
            ID = CD.Axis,
            pD = CD.axisType,
            iD = CD.axisIdKey,
            fD = CD.stackGroups,
            bD = CD.dataStartIndex,
            QD = CD.dataEndIndex,
            SD = DD.layout,
            yD = DD.children,
            MD = Jc(DD.data, {
              graphicalItems: cD,
              dataStartIndex: bD,
              dataEndIndex: QD
            }),
            tD = MD.length,
            ZD = (0, xD.S)(SD, pD),
            oD = -1;
          return cD.reduce((function(DD, CD) {
            var vD, ND = (void 0 !== CD.type.defaultProps ? nc(nc({}, CD.type.defaultProps), CD.props) : CD.props)[iD],
              gD = Kc("number");
            return DD[ND] ? DD : (oD++, ZD ? vD = wD()(0, tD) : fD && fD[ND] && fD[ND].hasStack ? (vD = (0, xD.C)(fD[ND].stackGroups, bD, QD), vD = qC(yD, vD, ND, pD)) : (vD = (0, xD.bb)(gD, (0, xD.B)(MD, cD.filter((function(DD) {
              var CD, cD, ID = iD in DD.props ? DD.props[iD] : null === (CD = DD.type.defaultProps) || void 0 === CD ? void 0 : CD[iD],
                pD = "hide" in DD.props ? DD.props.hide : null === (cD = DD.type.defaultProps) || void 0 === cD ? void 0 : cD.hide;
              return ID === ND && !pD
            })), "number", SD), ID.defaultProps.allowDataOverflow), vD = qC(yD, vD, ND, pD)), nc(nc({}, DD), {}, Oc({}, ND, nc(nc({
              axisType: pD
            }, ID.defaultProps), {}, {
              hide: !0,
              orientation: BD()(Hc, "".concat(pD, ".").concat(oD % 2), null),
              domain: vD,
              originalDomain: gD,
              isCategorical: ZD,
              layout: SD
            }))))
          }), {})
        }(DD, {
          Axis: pD,
          graphicalItems: iD,
          axisType: ID,
          axisIdKey: yD,
          stackGroups: fD,
          dataStartIndex: bD,
          dataEndIndex: QD
        })), tD
      },
      lc = function(DD) {
        var CD = DD.children,
          cD = DD.defaultShowTooltip,
          ID = (0, PD.j)(CD, eD),
          pD = 0,
          iD = 0;
        return DD.data && 0 !== DD.data.length && (iD = DD.data.length - 1), ID && ID.props && (ID.props.startIndex >= 0 && (pD = ID.props.startIndex), ID.props.endIndex >= 0 && (iD = ID.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: pD,
          dataEndIndex: iD,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(cD)
        }
      },
      Lc = function(DD) {
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
      Tc = function(DD, CD) {
        return "xAxis" === CD ? DD[CD].width : "yAxis" === CD ? DD[CD].height : void 0
      },
      Gc = function(DD) {
        var CD = DD.chartName,
          cD = DD.GraphicalChild,
          pD = DD.defaultTooltipEventType,
          fD = void 0 === pD ? "axis" : pD,
          QD = DD.validateTooltipEventTypes,
          wD = void 0 === QD ? ["axis"] : QD,
          SD = DD.axisComponents,
          yD = DD.legendContent,
          tD = DD.formatAxisMap,
          HD = DD.defaultProps,
          UD = function(DD, CD) {
            var cD = CD.graphicalItems,
              ID = CD.stackGroups,
              pD = CD.offset,
              fD = CD.updateId,
              bD = CD.dataStartIndex,
              QD = CD.dataEndIndex,
              wD = DD.barSize,
              BD = DD.layout,
              yD = DD.barGap,
              MD = DD.barCategoryGap,
              tD = DD.maxBarSize,
              ZD = Lc(BD),
              oD = ZD.numericAxisName,
              ND = ZD.cateAxisName,
              gD = function(DD) {
                return !(!DD || !DD.length) && DD.some((function(DD) {
                  var CD = (0, PD.l)(DD && DD.type);
                  return CD && CD.indexOf("Bar") >= 0
                }))
              }(cD),
              XD = [];
            return cD.forEach((function(cD, ZD) {
              var mD = Jc(DD.data, {
                  graphicalItems: [cD],
                  dataStartIndex: bD,
                  dataEndIndex: QD
                }),
                nD = void 0 !== cD.type.defaultProps ? nc(nc({}, cD.type.defaultProps), cD.props) : cD.props,
                OD = nD.dataKey,
                HD = nD.maxBarSize,
                UD = nD["".concat(oD, "Id")],
                qD = nD["".concat(ND, "Id")],
                JD = SD.reduce((function(DD, cD) {
                  var ID = CD["".concat(cD.axisType, "Map")],
                    pD = nD["".concat(cD.axisType, "Id")];
                  ID && ID[pD] || "zAxis" === cD.axisType || (0, vD.e)(!1);
                  var iD = ID[pD];
                  return nc(nc({}, DD), {}, Oc(Oc({}, cD.axisType, iD), "".concat(cD.axisType, "Ticks"), (0, xD.K)(iD)))
                }), {}),
                KD = JD[ND],
                aD = JD["".concat(ND, "Ticks")],
                VD = ID && ID[UD] && ID[UD].hasStack && (0, xD.H)(cD, ID[UD].stackGroups),
                zD = (0, PD.l)(cD.type).indexOf("Bar") >= 0,
                jD = (0, xD.l)(KD, aD),
                lD = [],
                LD = gD && (0, xD.q)({
                  barSize: wD,
                  stackGroups: ID,
                  totalSize: Tc(JD, ND)
                });
              if (zD) {
                var TD, GD, RD = iD()(HD) ? tD : HD,
                  kD = null !== (TD = null !== (GD = (0, xD.l)(KD, aD, !0)) && void 0 !== GD ? GD : RD) && void 0 !== TD ? TD : 0;
                lD = (0, xD.n)({
                  barGap: yD,
                  barCategoryGap: MD,
                  bandSize: kD !== jD ? kD : jD,
                  sizeList: LD[qD],
                  maxBarSize: RD
                }), kD !== jD && (lD = lD.map((function(DD) {
                  return nc(nc({}, DD), {}, {
                    position: nc(nc({}, DD.position), {}, {
                      offset: DD.position.offset - kD / 2
                    })
                  })
                })))
              }
              var dD = cD && cD.type && cD.type.getComposedData;
              dD && XD.push({
                props: nc(nc({}, dD(nc(nc({}, JD), {}, {
                  displayedData: mD,
                  props: DD,
                  dataKey: OD,
                  item: cD,
                  bandSize: jD,
                  barPosition: lD,
                  offset: pD,
                  stackedData: VD,
                  layout: BD,
                  dataStartIndex: bD,
                  dataEndIndex: QD
                }))), {}, Oc(Oc(Oc({
                  key: cD.key || "item-".concat(ZD)
                }, oD, JD[oD]), ND, JD[ND]), "animationId", fD)),
                childIndex: (0, PD.v)(cD, DD.children),
                item: cD
              })
            })), XD
          },
          JD = function(DD, ID) {
            var pD = DD.props,
              iD = DD.dataStartIndex,
              fD = DD.dataEndIndex,
              bD = DD.updateId;
            if (!(0, PD.C)({
                props: pD
              })) return null;
            var QD = pD.children,
              wD = pD.layout,
              yD = pD.stackOffset,
              ZD = pD.data,
              oD = pD.reverseStackOrder,
              vD = Lc(wD),
              ND = vD.numericAxisName,
              gD = vD.cateAxisName,
              XD = (0, PD.f)(QD, cD),
              nD = (0, xD.G)(ZD, XD, "".concat(ND, "Id"), "".concat(gD, "Id"), yD, oD),
              OD = SD.reduce((function(DD, CD) {
                var cD = "".concat(CD.axisType, "Map");
                return nc(nc({}, DD), {}, Oc({}, cD, jc(pD, nc(nc({}, CD), {}, {
                  graphicalItems: XD,
                  stackGroups: CD.axisType === ND && nD,
                  dataStartIndex: iD,
                  dataEndIndex: fD
                }))))
              }), {}),
              HD = function(DD, CD) {
                var cD = DD.props,
                  ID = DD.graphicalItems,
                  pD = DD.xAxisMap,
                  iD = void 0 === pD ? {} : pD,
                  fD = DD.yAxisMap,
                  bD = void 0 === fD ? {} : fD,
                  QD = cD.width,
                  wD = cD.height,
                  SD = cD.children,
                  yD = cD.margin || {},
                  MD = (0, PD.j)(SD, eD),
                  tD = (0, PD.j)(SD, mD.b),
                  ZD = Object.keys(bD).reduce((function(DD, CD) {
                    var cD = bD[CD],
                      ID = cD.orientation;
                    return cD.mirror || cD.hide ? DD : nc(nc({}, DD), {}, Oc({}, ID, DD[ID] + cD.width))
                  }), {
                    left: yD.left || 0,
                    right: yD.right || 0
                  }),
                  oD = Object.keys(iD).reduce((function(DD, CD) {
                    var cD = iD[CD],
                      ID = cD.orientation;
                    return cD.mirror || cD.hide ? DD : nc(nc({}, DD), {}, Oc({}, ID, BD()(DD, "".concat(ID)) + cD.height))
                  }), {
                    top: yD.top || 0,
                    bottom: yD.bottom || 0
                  }),
                  vD = nc(nc({}, oD), ZD),
                  ND = vD.bottom;
                MD && (vD.bottom += MD.props.height || eD.defaultProps.height), tD && CD && (vD = (0, xD.b)(vD, ID, cD, CD));
                var gD = QD - vD.left - vD.right,
                  XD = wD - vD.top - vD.bottom;
                return nc(nc({
                  brushBottom: ND
                }, vD), {}, {
                  width: Math.max(gD, 0),
                  height: Math.max(XD, 0)
                })
              }(nc(nc({}, OD), {}, {
                props: pD,
                graphicalItems: XD
              }), null === ID || void 0 === ID ? void 0 : ID.legendBBox);
            Object.keys(OD).forEach((function(DD) {
              OD[DD] = tD(pD, OD[DD], HD, DD.replace("Map", ""), CD)
            }));
            var JD = function(DD) {
                var CD = (0, qD.j)(DD),
                  cD = (0, xD.K)(CD, !1, !0);
                return {
                  tooltipTicks: cD,
                  orderedTooltipTicks: MD()(cD, (function(DD) {
                    return DD.coordinate
                  })),
                  tooltipAxis: CD,
                  tooltipAxisBandSize: (0, xD.l)(CD, cD)
                }
              }(OD["".concat(gD, "Map")]),
              KD = UD(pD, nc(nc({}, OD), {}, {
                dataStartIndex: iD,
                dataEndIndex: fD,
                updateId: bD,
                graphicalItems: XD,
                stackGroups: nD,
                offset: HD
              }));
            return nc(nc({
              formattedGraphicalItems: KD,
              graphicalItems: XD,
              offset: HD,
              stackGroups: nD
            }, JD), OD)
          },
          KD = function(DD) {
            function cD(DD) {
              var pD, fD, QD;
              return function(DD, CD) {
                if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
              }(this, cD), Oc(QD = tc(this, cD, [DD]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Oc(QD, "accessibilityManager", new RC), Oc(QD, "handleLegendBBoxUpdate", (function(DD) {
                if (DD) {
                  var CD = QD.state,
                    cD = CD.dataStartIndex,
                    ID = CD.dataEndIndex,
                    pD = CD.updateId;
                  QD.setState(nc({
                    legendBBox: DD
                  }, JD({
                    props: QD.props,
                    dataStartIndex: cD,
                    dataEndIndex: ID,
                    updateId: pD
                  }, nc(nc({}, QD.state), {}, {
                    legendBBox: DD
                  }))))
                }
              })), Oc(QD, "handleReceiveSyncEvent", (function(DD, CD, cD) {
                if (QD.props.syncId === DD) {
                  if (cD === QD.eventEmitterSymbol && "function" !== typeof QD.props.syncMethod) return;
                  QD.applySyncEvent(CD)
                }
              })), Oc(QD, "handleBrushChange", (function(DD) {
                var CD = DD.startIndex,
                  cD = DD.endIndex;
                if (CD !== QD.state.dataStartIndex || cD !== QD.state.dataEndIndex) {
                  var ID = QD.state.updateId;
                  QD.setState((function() {
                    return nc({
                      dataStartIndex: CD,
                      dataEndIndex: cD
                    }, JD({
                      props: QD.props,
                      dataStartIndex: CD,
                      dataEndIndex: cD,
                      updateId: ID
                    }, QD.state))
                  })), QD.triggerSyncEvent({
                    dataStartIndex: CD,
                    dataEndIndex: cD
                  })
                }
              })), Oc(QD, "handleMouseEnter", (function(DD) {
                var CD = QD.getMouseInfo(DD);
                if (CD) {
                  var cD = nc(nc({}, CD), {}, {
                    isTooltipActive: !0
                  });
                  QD.setState(cD), QD.triggerSyncEvent(cD);
                  var ID = QD.props.onMouseEnter;
                  bD()(ID) && ID(cD, DD)
                }
              })), Oc(QD, "triggeredAfterMouseMove", (function(DD) {
                var CD = QD.getMouseInfo(DD),
                  cD = CD ? nc(nc({}, CD), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                QD.setState(cD), QD.triggerSyncEvent(cD);
                var ID = QD.props.onMouseMove;
                bD()(ID) && ID(cD, DD)
              })), Oc(QD, "handleItemMouseEnter", (function(DD) {
                QD.setState((function() {
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
              })), Oc(QD, "handleItemMouseLeave", (function() {
                QD.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), Oc(QD, "handleMouseMove", (function(DD) {
                DD.persist(), QD.throttleTriggeredAfterMouseMove(DD)
              })), Oc(QD, "handleMouseLeave", (function(DD) {
                QD.throttleTriggeredAfterMouseMove.cancel();
                var CD = {
                  isTooltipActive: !1
                };
                QD.setState(CD), QD.triggerSyncEvent(CD);
                var cD = QD.props.onMouseLeave;
                bD()(cD) && cD(CD, DD)
              })), Oc(QD, "handleOuterEvent", (function(DD) {
                var CD, cD = (0, PD.p)(DD),
                  ID = BD()(QD.props, "".concat(cD));
                cD && bD()(ID) && ID(null !== (CD = /.*touch.*/i.test(cD) ? QD.getMouseInfo(DD.changedTouches[0]) : QD.getMouseInfo(DD)) && void 0 !== CD ? CD : {}, DD)
              })), Oc(QD, "handleClick", (function(DD) {
                var CD = QD.getMouseInfo(DD);
                if (CD) {
                  var cD = nc(nc({}, CD), {}, {
                    isTooltipActive: !0
                  });
                  QD.setState(cD), QD.triggerSyncEvent(cD);
                  var ID = QD.props.onClick;
                  bD()(ID) && ID(cD, DD)
                }
              })), Oc(QD, "handleMouseDown", (function(DD) {
                var CD = QD.props.onMouseDown;
                bD()(CD) && CD(QD.getMouseInfo(DD), DD)
              })), Oc(QD, "handleMouseUp", (function(DD) {
                var CD = QD.props.onMouseUp;
                bD()(CD) && CD(QD.getMouseInfo(DD), DD)
              })), Oc(QD, "handleTouchMove", (function(DD) {
                null != DD.changedTouches && DD.changedTouches.length > 0 && QD.throttleTriggeredAfterMouseMove(DD.changedTouches[0])
              })), Oc(QD, "handleTouchStart", (function(DD) {
                null != DD.changedTouches && DD.changedTouches.length > 0 && QD.handleMouseDown(DD.changedTouches[0])
              })), Oc(QD, "handleTouchEnd", (function(DD) {
                null != DD.changedTouches && DD.changedTouches.length > 0 && QD.handleMouseUp(DD.changedTouches[0])
              })), Oc(QD, "handleDoubleClick", (function(DD) {
                var CD = QD.props.onDoubleClick;
                bD()(CD) && CD(QD.getMouseInfo(DD), DD)
              })), Oc(QD, "handleContextMenu", (function(DD) {
                var CD = QD.props.onContextMenu;
                bD()(CD) && CD(QD.getMouseInfo(DD), DD)
              })), Oc(QD, "triggerSyncEvent", (function(DD) {
                void 0 !== QD.props.syncId && VC.emit(zC, QD.props.syncId, DD, QD.eventEmitterSymbol)
              })), Oc(QD, "applySyncEvent", (function(DD) {
                var CD = QD.props,
                  cD = CD.layout,
                  ID = CD.syncMethod,
                  pD = QD.state.updateId,
                  iD = DD.dataStartIndex,
                  fD = DD.dataEndIndex;
                if (void 0 !== DD.dataStartIndex || void 0 !== DD.dataEndIndex) QD.setState(nc({
                  dataStartIndex: iD,
                  dataEndIndex: fD
                }, JD({
                  props: QD.props,
                  dataStartIndex: iD,
                  dataEndIndex: fD,
                  updateId: pD
                }, QD.state)));
                else if (void 0 !== DD.activeTooltipIndex) {
                  var bD = DD.chartX,
                    wD = DD.chartY,
                    SD = DD.activeTooltipIndex,
                    BD = QD.state,
                    yD = BD.offset,
                    MD = BD.tooltipTicks;
                  if (!yD) return;
                  if ("function" === typeof ID) SD = ID(MD, DD);
                  else if ("value" === ID) {
                    SD = -1;
                    for (var tD = 0; tD < MD.length; tD++)
                      if (MD[tD].value === DD.activeLabel) {
                        SD = tD;
                        break
                      }
                  }
                  var ZD = nc(nc({}, yD), {}, {
                      x: yD.left,
                      y: yD.top
                    }),
                    oD = Math.min(bD, ZD.x + ZD.width),
                    vD = Math.min(wD, ZD.y + ZD.height),
                    ND = MD[SD] && MD[SD].value,
                    gD = ac(QD.state, QD.props.data, SD),
                    XD = MD[SD] ? {
                      x: "horizontal" === cD ? MD[SD].coordinate : oD,
                      y: "horizontal" === cD ? vD : MD[SD].coordinate
                    } : xc;
                  QD.setState(nc(nc({}, DD), {}, {
                    activeLabel: ND,
                    activeCoordinate: XD,
                    activePayload: gD,
                    activeTooltipIndex: SD
                  }))
                } else QD.setState(DD)
              })), Oc(QD, "renderCursor", (function(DD) {
                var cD, pD = QD.state,
                  iD = pD.isTooltipActive,
                  fD = pD.activeCoordinate,
                  bD = pD.activePayload,
                  wD = pD.offset,
                  SD = pD.activeTooltipIndex,
                  BD = pD.tooltipAxisBandSize,
                  yD = QD.getTooltipEventType(),
                  MD = null !== (cD = DD.props.active) && void 0 !== cD ? cD : iD,
                  tD = QD.props.layout,
                  ZD = DD.key || "_recharts-cursor";
                return ID.createElement(ic, {
                  key: ZD,
                  activeCoordinate: fD,
                  activePayload: bD,
                  activeTooltipIndex: SD,
                  chartName: CD,
                  element: DD,
                  isActive: MD,
                  layout: tD,
                  offset: wD,
                  tooltipAxisBandSize: BD,
                  tooltipEventType: yD
                })
              })), Oc(QD, "renderPolarAxis", (function(DD, CD, cD) {
                var pD = BD()(DD, "type.axisType"),
                  iD = BD()(QD.state, "".concat(pD, "Map")),
                  fD = DD.type.defaultProps,
                  bD = void 0 !== fD ? nc(nc({}, fD), DD.props) : DD.props,
                  wD = iD && iD[bD["".concat(pD, "Id")]];
                return (0, ID.cloneElement)(DD, nc(nc({}, wD), {}, {
                  className: (0, oD.e)(pD, wD.className),
                  key: DD.key || "".concat(CD, "-").concat(cD),
                  ticks: (0, xD.K)(wD, !0)
                }))
              })), Oc(QD, "renderPolarGrid", (function(DD) {
                var CD = DD.props,
                  cD = CD.radialLines,
                  pD = CD.polarAngles,
                  iD = CD.polarRadius,
                  fD = QD.state,
                  bD = fD.radiusAxisMap,
                  wD = fD.angleAxisMap,
                  SD = (0, qD.j)(bD),
                  BD = (0, qD.j)(wD),
                  yD = BD.cx,
                  MD = BD.cy,
                  tD = BD.innerRadius,
                  ZD = BD.outerRadius;
                return (0, ID.cloneElement)(DD, {
                  polarAngles: Array.isArray(pD) ? pD : (0, xD.K)(BD, !0).map((function(DD) {
                    return DD.coordinate
                  })),
                  polarRadius: Array.isArray(iD) ? iD : (0, xD.K)(SD, !0).map((function(DD) {
                    return DD.coordinate
                  })),
                  cx: yD,
                  cy: MD,
                  innerRadius: tD,
                  outerRadius: ZD,
                  key: DD.key || "polar-grid",
                  radialLines: cD
                })
              })), Oc(QD, "renderLegend", (function() {
                var DD = QD.state.formattedGraphicalItems,
                  CD = QD.props,
                  cD = CD.children,
                  pD = CD.width,
                  iD = CD.height,
                  fD = QD.props.margin || {},
                  bD = pD - (fD.left || 0) - (fD.right || 0),
                  wD = (0, hD.c)({
                    children: cD,
                    formattedGraphicalItems: DD,
                    legendWidth: bD,
                    legendContent: yD
                  });
                if (!wD) return null;
                var SD = wD.item,
                  BD = yc(wD, bc);
                return (0, ID.cloneElement)(SD, nc(nc({}, BD), {}, {
                  chartWidth: pD,
                  chartHeight: iD,
                  margin: fD,
                  onBBoxUpdate: QD.handleLegendBBoxUpdate
                }))
              })), Oc(QD, "renderTooltip", (function() {
                var DD, CD = QD.props,
                  cD = CD.children,
                  pD = CD.accessibilityLayer,
                  iD = (0, PD.j)(cD, XD.b);
                if (!iD) return null;
                var fD = QD.state,
                  bD = fD.isTooltipActive,
                  wD = fD.activeCoordinate,
                  SD = fD.activePayload,
                  BD = fD.activeLabel,
                  yD = fD.offset,
                  MD = null !== (DD = iD.props.active) && void 0 !== DD ? DD : bD;
                return (0, ID.cloneElement)(iD, {
                  viewBox: nc(nc({}, yD), {}, {
                    x: yD.left,
                    y: yD.top
                  }),
                  active: MD,
                  label: BD,
                  payload: MD ? SD : [],
                  coordinate: wD,
                  accessibilityLayer: pD
                })
              })), Oc(QD, "renderBrush", (function(DD) {
                var CD = QD.props,
                  cD = CD.margin,
                  pD = CD.data,
                  iD = QD.state,
                  fD = iD.offset,
                  bD = iD.dataStartIndex,
                  wD = iD.dataEndIndex,
                  SD = iD.updateId;
                return (0, ID.cloneElement)(DD, {
                  key: DD.key || "_recharts-brush",
                  onChange: (0, xD.i)(QD.handleBrushChange, DD.props.onChange),
                  data: pD,
                  x: (0, qD.G)(DD.props.x) ? DD.props.x : fD.left,
                  y: (0, qD.G)(DD.props.y) ? DD.props.y : fD.top + fD.height + fD.brushBottom - (cD.bottom || 0),
                  width: (0, qD.G)(DD.props.width) ? DD.props.width : fD.width,
                  startIndex: bD,
                  endIndex: wD,
                  updateId: "brush-".concat(SD)
                })
              })), Oc(QD, "renderReferenceElement", (function(DD, CD, cD) {
                if (!DD) return null;
                var pD = QD.clipPathId,
                  iD = QD.state,
                  fD = iD.xAxisMap,
                  bD = iD.yAxisMap,
                  wD = iD.offset,
                  SD = DD.type.defaultProps || {},
                  BD = DD.props,
                  yD = BD.xAxisId,
                  MD = void 0 === yD ? SD.xAxisId : yD,
                  tD = BD.yAxisId,
                  ZD = void 0 === tD ? SD.yAxisId : tD;
                return (0, ID.cloneElement)(DD, {
                  key: DD.key || "".concat(CD, "-").concat(cD),
                  xAxis: fD[MD],
                  yAxis: bD[ZD],
                  viewBox: {
                    x: wD.left,
                    y: wD.top,
                    width: wD.width,
                    height: wD.height
                  },
                  clipPathId: pD
                })
              })), Oc(QD, "renderActivePoints", (function(DD) {
                var CD = DD.item,
                  ID = DD.activePoint,
                  pD = DD.basePoint,
                  iD = DD.childIndex,
                  fD = DD.isRange,
                  bD = [],
                  QD = CD.props.key,
                  wD = void 0 !== CD.item.type.defaultProps ? nc(nc({}, CD.item.type.defaultProps), CD.item.props) : CD.item.props,
                  SD = wD.activeDot,
                  BD = nc(nc({
                    index: iD,
                    dataKey: wD.dataKey,
                    cx: ID.x,
                    cy: ID.y,
                    r: 4,
                    fill: (0, xD.D)(CD.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: ID.payload,
                    value: ID.value
                  }, (0, PD.b)(SD, !1)), (0, jC.m)(SD));
                return bD.push(cD.renderActiveDot(SD, BD, "".concat(QD, "-activePoint-").concat(iD))), pD ? bD.push(cD.renderActiveDot(SD, nc(nc({}, BD), {}, {
                  cx: pD.x,
                  cy: pD.y
                }), "".concat(QD, "-basePoint-").concat(iD))) : fD && bD.push(null), bD
              })), Oc(QD, "renderGraphicChild", (function(DD, CD, cD) {
                var pD = QD.filterFormatItem(DD, CD, cD);
                if (!pD) return null;
                var fD = QD.getTooltipEventType(),
                  bD = QD.state,
                  wD = bD.isTooltipActive,
                  SD = bD.tooltipAxis,
                  BD = bD.activeTooltipIndex,
                  yD = bD.activeLabel,
                  MD = QD.props.children,
                  tD = (0, PD.j)(MD, XD.b),
                  ZD = pD.props,
                  oD = ZD.points,
                  vD = ZD.isRange,
                  ND = ZD.baseLine,
                  gD = void 0 !== pD.item.type.defaultProps ? nc(nc({}, pD.item.type.defaultProps), pD.item.props) : pD.item.props,
                  mD = gD.activeDot,
                  nD = gD.hide,
                  OD = gD.activeBar,
                  HD = gD.activeShape,
                  UD = Boolean(!nD && wD && tD && (mD || OD || HD)),
                  JD = {};
                "axis" !== fD && tD && "click" === tD.props.trigger ? JD = {
                  onClick: (0, xD.i)(QD.handleItemMouseEnter, DD.props.onClick)
                } : "axis" !== fD && (JD = {
                  onMouseLeave: (0, xD.i)(QD.handleItemMouseLeave, DD.props.onMouseLeave),
                  onMouseEnter: (0, xD.i)(QD.handleItemMouseEnter, DD.props.onMouseEnter)
                });
                var KD = (0, ID.cloneElement)(DD, nc(nc({}, pD.props), JD));
                if (UD) {
                  if (!(BD >= 0)) {
                    var aD, VD = (null !== (aD = QD.getItemByXY(QD.state.activeCoordinate)) && void 0 !== aD ? aD : {
                        graphicalItem: KD
                      }).graphicalItem,
                      zD = VD.item,
                      jD = void 0 === zD ? DD : zD,
                      lD = VD.childIndex,
                      LD = nc(nc(nc({}, pD.props), JD), {}, {
                        activeIndex: lD
                      });
                    return [(0, ID.cloneElement)(jD, LD), null, null]
                  }
                  var TD, GD;
                  if (SD.dataKey && !SD.allowDuplicatedCategory) {
                    var RD = "function" === typeof SD.dataKey ? function(DD) {
                      return "function" === typeof SD.dataKey ? SD.dataKey(DD.payload) : null
                    } : "payload.".concat(SD.dataKey.toString());
                    TD = (0, qD.h)(oD, RD, yD), GD = vD && ND && (0, qD.h)(ND, RD, yD)
                  } else TD = null === oD || void 0 === oD ? void 0 : oD[BD], GD = vD && ND && ND[BD];
                  if (HD || OD) {
                    var kD = void 0 !== DD.props.activeIndex ? DD.props.activeIndex : BD;
                    return [(0, ID.cloneElement)(DD, nc(nc(nc({}, pD.props), JD), {}, {
                      activeIndex: kD
                    })), null, null]
                  }
                  if (!iD()(TD)) return [KD].concat(Nc(QD.renderActivePoints({
                    item: pD,
                    activePoint: TD,
                    basePoint: GD,
                    childIndex: BD,
                    isRange: vD
                  })))
                }
                return vD ? [KD, null, null] : [KD, null]
              })), Oc(QD, "renderCustomized", (function(DD, CD, cD) {
                return (0, ID.cloneElement)(DD, nc(nc({
                  key: "recharts-customized-".concat(cD)
                }, QD.props), QD.state))
              })), Oc(QD, "renderMap", {
                CartesianGrid: {
                  handler: qc,
                  once: !0
                },
                ReferenceArea: {
                  handler: QD.renderReferenceElement
                },
                ReferenceLine: {
                  handler: qc
                },
                ReferenceDot: {
                  handler: QD.renderReferenceElement
                },
                XAxis: {
                  handler: qc
                },
                YAxis: {
                  handler: qc
                },
                Brush: {
                  handler: QD.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: QD.renderGraphicChild
                },
                Line: {
                  handler: QD.renderGraphicChild
                },
                Area: {
                  handler: QD.renderGraphicChild
                },
                Radar: {
                  handler: QD.renderGraphicChild
                },
                RadialBar: {
                  handler: QD.renderGraphicChild
                },
                Scatter: {
                  handler: QD.renderGraphicChild
                },
                Pie: {
                  handler: QD.renderGraphicChild
                },
                Funnel: {
                  handler: QD.renderGraphicChild
                },
                Tooltip: {
                  handler: QD.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: QD.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: QD.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: QD.renderPolarAxis
                },
                Customized: {
                  handler: QD.renderCustomized
                }
              }), QD.clipPathId = "".concat(null !== (pD = DD.id) && void 0 !== pD ? pD : (0, qD.M)("recharts"), "-clip"), QD.throttleTriggeredAfterMouseMove = ZD()(QD.triggeredAfterMouseMove, null !== (fD = DD.throttleDelay) && void 0 !== fD ? fD : 1e3 / 60), QD.state = {}, QD
            }
            return function(DD, CD) {
              if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
              DD.prototype = Object.create(CD && CD.prototype, {
                constructor: {
                  value: DD,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(DD, "prototype", {
                writable: !1
              }), CD && vc(DD, CD)
            }(cD, DD), pD = cD, QD = [{
              key: "componentDidMount",
              value: function() {
                var DD, CD;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (DD = this.props.margin.left) && void 0 !== DD ? DD : 0,
                    top: null !== (CD = this.props.margin.top) && void 0 !== CD ? CD : 0
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
                  CD = DD.children,
                  cD = DD.data,
                  ID = DD.height,
                  pD = DD.layout,
                  iD = (0, PD.j)(CD, XD.b);
                if (iD) {
                  var fD = iD.props.defaultIndex;
                  if (!("number" !== typeof fD || fD < 0 || fD > this.state.tooltipTicks.length - 1)) {
                    var bD = this.state.tooltipTicks[fD] && this.state.tooltipTicks[fD].value,
                      QD = ac(this.state, cD, fD, bD),
                      wD = this.state.tooltipTicks[fD].coordinate,
                      SD = (this.state.offset.top + ID) / 2,
                      BD = "horizontal" === pD ? {
                        x: wD,
                        y: SD
                      } : {
                        y: wD,
                        x: SD
                      },
                      yD = this.state.formattedGraphicalItems.find((function(DD) {
                        return "Scatter" === DD.item.type.name
                      }));
                    yD && (BD = nc(nc({}, BD), yD.props.points[fD].tooltipPosition), QD = yD.props.points[fD].tooltipPayload);
                    var MD = {
                      activeTooltipIndex: fD,
                      isTooltipActive: !0,
                      activeLabel: bD,
                      activePayload: QD,
                      activeCoordinate: BD
                    };
                    this.setState(MD), this.renderCursor(iD), this.accessibilityManager.setIndex(fD)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(DD, CD) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== CD.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== DD.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== DD.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (cD = this.props.margin.left) && void 0 !== cD ? cD : 0,
                    top: null !== (ID = this.props.margin.top) && void 0 !== ID ? ID : 0
                  }
                }), null) : null;
                var cD, ID
              }
            }, {
              key: "componentDidUpdate",
              value: function(DD) {
                (0, PD.t)([(0, PD.j)(DD.children, XD.b)], [(0, PD.j)(this.props.children, XD.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var DD = (0, PD.j)(this.props.children, XD.b);
                if (DD && "boolean" === typeof DD.props.shared) {
                  var CD = DD.props.shared ? "axis" : "item";
                  return wD.indexOf(CD) >= 0 ? CD : fD
                }
                return fD
              }
            }, {
              key: "getMouseInfo",
              value: function(DD) {
                if (!this.container) return null;
                var CD = this.container,
                  cD = CD.getBoundingClientRect(),
                  ID = (0, uD.e)(cD),
                  pD = {
                    chartX: Math.round(DD.pageX - ID.left),
                    chartY: Math.round(DD.pageY - ID.top)
                  },
                  iD = cD.width / CD.offsetWidth || 1,
                  fD = this.inRange(pD.chartX, pD.chartY, iD);
                if (!fD) return null;
                var bD = this.state,
                  QD = bD.xAxisMap,
                  wD = bD.yAxisMap,
                  SD = this.getTooltipEventType(),
                  BD = Vc(this.state, this.props.data, this.props.layout, fD);
                if ("axis" !== SD && QD && wD) {
                  var yD = (0, qD.j)(QD).scale,
                    MD = (0, qD.j)(wD).scale,
                    tD = yD && yD.invert ? yD.invert(pD.chartX) : null,
                    ZD = MD && MD.invert ? MD.invert(pD.chartY) : null;
                  return nc(nc({}, pD), {}, {
                    xValue: tD,
                    yValue: ZD
                  }, BD)
                }
                return BD ? nc(nc({}, pD), BD) : null
              }
            }, {
              key: "inRange",
              value: function(DD, CD) {
                var cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  ID = this.props.layout,
                  pD = DD / cD,
                  iD = CD / cD;
                if ("horizontal" === ID || "vertical" === ID) {
                  var fD = this.state.offset;
                  return pD >= fD.left && pD <= fD.left + fD.width && iD >= fD.top && iD <= fD.top + fD.height ? {
                    x: pD,
                    y: iD
                  } : null
                }
                var bD = this.state,
                  QD = bD.angleAxisMap,
                  wD = bD.radiusAxisMap;
                if (QD && wD) {
                  var SD = (0, qD.j)(QD);
                  return (0, JC.f)({
                    x: pD,
                    y: iD
                  }, SD)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var DD = this.props.children,
                  CD = this.getTooltipEventType(),
                  cD = (0, PD.j)(DD, XD.b),
                  ID = {};
                return cD && "axis" === CD && (ID = "click" === cD.props.trigger ? {
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
                }), nc(nc({}, (0, jC.m)(this.props, this.handleOuterEvent)), ID)
              }
            }, {
              key: "addListener",
              value: function() {
                VC.on(zC, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                VC.removeListener(zC, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(DD, CD, cD) {
                for (var ID = this.state.formattedGraphicalItems, pD = 0, iD = ID.length; pD < iD; pD++) {
                  var fD = ID[pD];
                  if (fD.item === DD || fD.props.key === DD.key || CD === (0, PD.l)(fD.item.type) && cD === fD.childIndex) return fD
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var DD = this.clipPathId,
                  CD = this.state.offset,
                  cD = CD.left,
                  pD = CD.top,
                  iD = CD.height,
                  fD = CD.width;
                return ID.createElement("defs", null, ID.createElement("clipPath", {
                  id: DD
                }, ID.createElement("rect", {
                  x: cD,
                  y: pD,
                  height: iD,
                  width: fD
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var DD = this.state.xAxisMap;
                return DD ? Object.entries(DD).reduce((function(DD, CD) {
                  var cD = Bc(CD, 2),
                    ID = cD[0],
                    pD = cD[1];
                  return nc(nc({}, DD), {}, Oc({}, ID, pD.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var DD = this.state.yAxisMap;
                return DD ? Object.entries(DD).reduce((function(DD, CD) {
                  var cD = Bc(CD, 2),
                    ID = cD[0],
                    pD = cD[1];
                  return nc(nc({}, DD), {}, Oc({}, ID, pD.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(DD) {
                var CD;
                return null === (CD = this.state.xAxisMap) || void 0 === CD || null === (CD = CD[DD]) || void 0 === CD ? void 0 : CD.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(DD) {
                var CD;
                return null === (CD = this.state.yAxisMap) || void 0 === CD || null === (CD = CD[DD]) || void 0 === CD ? void 0 : CD.scale
              }
            }, {
              key: "getItemByXY",
              value: function(DD) {
                var CD = this.state,
                  cD = CD.formattedGraphicalItems,
                  ID = CD.activeItem;
                if (cD && cD.length)
                  for (var pD = 0, iD = cD.length; pD < iD; pD++) {
                    var fD = cD[pD],
                      bD = fD.props,
                      QD = fD.item,
                      wD = void 0 !== QD.type.defaultProps ? nc(nc({}, QD.type.defaultProps), QD.props) : QD.props,
                      SD = (0, PD.l)(QD.type);
                    if ("Bar" === SD) {
                      var BD = (bD.data || []).find((function(CD) {
                        return (0, OD.d)(DD, CD)
                      }));
                      if (BD) return {
                        graphicalItem: fD,
                        payload: BD
                      }
                    } else if ("RadialBar" === SD) {
                      var yD = (bD.data || []).find((function(CD) {
                        return (0, JC.f)(DD, CD)
                      }));
                      if (yD) return {
                        graphicalItem: fD,
                        payload: yD
                      }
                    } else if ((0, kC.j)(fD, ID) || (0, kC.k)(fD, ID) || (0, kC.l)(fD, ID)) {
                      var MD = (0, kC.g)({
                          graphicalItem: fD,
                          activeTooltipItem: ID,
                          itemData: wD.data
                        }),
                        tD = void 0 === wD.activeIndex ? MD : wD.activeIndex;
                      return {
                        graphicalItem: nc(nc({}, fD), {}, {
                          childIndex: tD
                        }),
                        payload: (0, kC.l)(fD, ID) ? wD.data[MD] : fD.props.data[MD]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var DD = this;
                if (!(0, PD.C)(this)) return null;
                var CD, cD, pD = this.props,
                  iD = pD.children,
                  fD = pD.className,
                  bD = pD.width,
                  QD = pD.height,
                  wD = pD.style,
                  SD = pD.compact,
                  BD = pD.title,
                  yD = pD.desc,
                  MD = yc(pD, Qc),
                  tD = (0, PD.b)(MD, !1);
                if (SD) return ID.createElement(fc.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, ID.createElement(ND.c, Sc({}, tD, {
                  width: bD,
                  height: QD,
                  title: BD,
                  desc: yD
                }), this.renderClipPath(), (0, PD.y)(iD, this.renderMap)));
                this.props.accessibilityLayer && (tD.tabIndex = null !== (CD = this.props.tabIndex) && void 0 !== CD ? CD : 0, tD.role = null !== (cD = this.props.role) && void 0 !== cD ? cD : "application", tD.onKeyDown = function(CD) {
                  DD.accessibilityManager.keyboardEvent(CD)
                }, tD.onFocus = function() {
                  DD.accessibilityManager.focus()
                });
                var ZD = this.parseEventsOfWrapper();
                return ID.createElement(fc.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, ID.createElement("div", Sc({
                  className: (0, oD.e)("recharts-wrapper", fD),
                  style: nc({
                    position: "relative",
                    cursor: "default",
                    width: bD,
                    height: QD
                  }, wD)
                }, ZD, {
                  ref: function(CD) {
                    DD.container = CD
                  }
                }), ID.createElement(ND.c, Sc({}, tD, {
                  width: bD,
                  height: QD,
                  title: BD,
                  desc: yD,
                  style: Uc
                }), this.renderClipPath(), (0, PD.y)(iD, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], QD && Mc(pD.prototype, QD), SD && Mc(pD, SD), Object.defineProperty(pD, "prototype", {
              writable: !1
            }), pD;
            var pD, QD, SD
          }(ID.Component);
        Oc(KD, "displayName", CD), Oc(KD, "defaultProps", nc({
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
        }, HD)), Oc(KD, "getDerivedStateFromProps", (function(DD, CD) {
          var cD = DD.dataKey,
            ID = DD.data,
            pD = DD.children,
            fD = DD.width,
            bD = DD.height,
            QD = DD.layout,
            wD = DD.stackOffset,
            SD = DD.margin,
            BD = CD.dataStartIndex,
            yD = CD.dataEndIndex;
          if (void 0 === CD.updateId) {
            var MD = lc(DD);
            return nc(nc(nc({}, MD), {}, {
              updateId: 0
            }, JD(nc(nc({
              props: DD
            }, MD), {}, {
              updateId: 0
            }), CD)), {}, {
              prevDataKey: cD,
              prevData: ID,
              prevWidth: fD,
              prevHeight: bD,
              prevLayout: QD,
              prevStackOffset: wD,
              prevMargin: SD,
              prevChildren: pD
            })
          }
          if (cD !== CD.prevDataKey || ID !== CD.prevData || fD !== CD.prevWidth || bD !== CD.prevHeight || QD !== CD.prevLayout || wD !== CD.prevStackOffset || !(0, KC.c)(SD, CD.prevMargin)) {
            var tD = lc(DD),
              ZD = {
                chartX: CD.chartX,
                chartY: CD.chartY,
                isTooltipActive: CD.isTooltipActive
              },
              oD = nc(nc({}, Vc(CD, ID, QD)), {}, {
                updateId: CD.updateId + 1
              }),
              vD = nc(nc(nc({}, tD), ZD), oD);
            return nc(nc(nc({}, vD), JD(nc({
              props: DD
            }, vD), CD)), {}, {
              prevDataKey: cD,
              prevData: ID,
              prevWidth: fD,
              prevHeight: bD,
              prevLayout: QD,
              prevStackOffset: wD,
              prevMargin: SD,
              prevChildren: pD
            })
          }
          if (!(0, PD.t)(pD, CD.prevChildren)) {
            var ND, gD, XD, mD, nD = (0, PD.j)(pD, eD),
              OD = nD && null !== (ND = null === (gD = nD.props) || void 0 === gD ? void 0 : gD.startIndex) && void 0 !== ND ? ND : BD,
              HD = nD && null !== (XD = null === (mD = nD.props) || void 0 === mD ? void 0 : mD.endIndex) && void 0 !== XD ? XD : yD,
              UD = OD !== BD || HD !== yD,
              xD = !iD()(ID) && !UD ? CD.updateId : CD.updateId + 1;
            return nc(nc({
              updateId: xD
            }, JD(nc(nc({
              props: DD
            }, CD), {}, {
              updateId: xD,
              dataStartIndex: OD,
              dataEndIndex: HD
            }), CD)), {}, {
              prevChildren: pD,
              dataStartIndex: OD,
              dataEndIndex: HD
            })
          }
          return null
        })), Oc(KD, "renderActiveDot", (function(DD, CD, cD) {
          var pD;
          return pD = (0, ID.isValidElement)(DD) ? (0, ID.cloneElement)(DD, CD) : bD()(DD) ? DD(CD) : ID.createElement(nD.e, CD), ID.createElement(gD.d, {
            className: "recharts-active-dot",
            key: cD
          }, pD)
        }));
        var aD = (0, ID.forwardRef)((function(DD, CD) {
          return ID.createElement(KD, Sc({}, DD, {
            ref: CD
          }))
        }));
        return aD.displayName = KD.displayName, aD
      }
  },
  5994: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    var ID = function(DD) {
      return null
    };
    ID.displayName = "Cell"
  },
  5949: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => JD
    });
    var ID = cD(53),
      pD = cD(5175),
      iD = cD.n(pD),
      fD = cD(5032),
      bD = cD.n(fD),
      QD = cD(4852),
      wD = cD.n(QD),
      SD = cD(4841),
      BD = cD(5863),
      yD = cD(5185),
      MD = cD(4927),
      tD = cD(5951);

    function ZD(DD) {
      return ZD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ZD(DD)
    }
    var oD = ["offset"];

    function vD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return ND(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return ND(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return ND(DD, CD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ND(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function gD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function XD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function mD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? XD(Object(cD), !0).forEach((function(CD) {
          nD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : XD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function nD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != ZD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != ZD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == ZD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function OD() {
      return OD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, OD.apply(this, arguments)
    }
    var PD = function(DD) {
        var CD = DD.value,
          cD = DD.formatter,
          ID = iD()(DD.children) ? CD : DD.children;
        return bD()(cD) ? cD(ID) : ID
      },
      HD = function(DD, CD, cD) {
        var pD, fD, bD = DD.position,
          QD = DD.viewBox,
          wD = DD.offset,
          BD = DD.className,
          yD = QD,
          ZD = yD.cx,
          oD = yD.cy,
          vD = yD.innerRadius,
          ND = yD.outerRadius,
          gD = yD.startAngle,
          XD = yD.endAngle,
          mD = yD.clockWise,
          nD = (vD + ND) / 2,
          PD = function(DD, CD) {
            return (0, MD.K)(CD - DD) * Math.min(Math.abs(CD - DD), 360)
          }(gD, XD),
          HD = PD >= 0 ? 1 : -1;
        "insideStart" === bD ? (pD = gD + HD * wD, fD = mD) : "insideEnd" === bD ? (pD = XD - HD * wD, fD = !mD) : "end" === bD && (pD = XD + HD * wD, fD = mD), fD = PD <= 0 ? fD : !fD;
        var UD = (0, tD.h)(ZD, oD, nD, pD),
          xD = (0, tD.h)(ZD, oD, nD, pD + 359 * (fD ? 1 : -1)),
          qD = "M".concat(UD.x, ",").concat(UD.y, "\n    A").concat(nD, ",").concat(nD, ",0,1,").concat(fD ? 0 : 1, ",\n    ").concat(xD.x, ",").concat(xD.y),
          JD = iD()(DD.id) ? (0, MD.M)("recharts-radial-line-") : DD.id;
        return ID.createElement("text", OD({}, cD, {
          dominantBaseline: "central",
          className: (0, SD.e)("recharts-radial-bar-label", BD)
        }), ID.createElement("defs", null, ID.createElement("path", {
          id: JD,
          d: qD
        })), ID.createElement("textPath", {
          xlinkHref: "#".concat(JD)
        }, CD))
      },
      UD = function(DD) {
        var CD = DD.viewBox,
          cD = DD.offset,
          ID = DD.position,
          pD = CD,
          iD = pD.cx,
          fD = pD.cy,
          bD = pD.innerRadius,
          QD = pD.outerRadius,
          wD = (pD.startAngle + pD.endAngle) / 2;
        if ("outside" === ID) {
          var SD = (0, tD.h)(iD, fD, QD + cD, wD),
            BD = SD.x;
          return {
            x: BD,
            y: SD.y,
            textAnchor: BD >= iD ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === ID) return {
          x: iD,
          y: fD,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === ID) return {
          x: iD,
          y: fD,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === ID) return {
          x: iD,
          y: fD,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var yD = (bD + QD) / 2,
          MD = (0, tD.h)(iD, fD, yD, wD);
        return {
          x: MD.x,
          y: MD.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      xD = function(DD) {
        var CD = DD.viewBox,
          cD = DD.parentViewBox,
          ID = DD.offset,
          pD = DD.position,
          iD = CD,
          fD = iD.x,
          bD = iD.y,
          QD = iD.width,
          SD = iD.height,
          BD = SD >= 0 ? 1 : -1,
          yD = BD * ID,
          tD = BD > 0 ? "end" : "start",
          ZD = BD > 0 ? "start" : "end",
          oD = QD >= 0 ? 1 : -1,
          vD = oD * ID,
          ND = oD > 0 ? "end" : "start",
          gD = oD > 0 ? "start" : "end";
        if ("top" === pD) return mD(mD({}, {
          x: fD + QD / 2,
          y: bD - BD * ID,
          textAnchor: "middle",
          verticalAnchor: tD
        }), cD ? {
          height: Math.max(bD - cD.y, 0),
          width: QD
        } : {});
        if ("bottom" === pD) return mD(mD({}, {
          x: fD + QD / 2,
          y: bD + SD + yD,
          textAnchor: "middle",
          verticalAnchor: ZD
        }), cD ? {
          height: Math.max(cD.y + cD.height - (bD + SD), 0),
          width: QD
        } : {});
        if ("left" === pD) {
          var XD = {
            x: fD - vD,
            y: bD + SD / 2,
            textAnchor: ND,
            verticalAnchor: "middle"
          };
          return mD(mD({}, XD), cD ? {
            width: Math.max(XD.x - cD.x, 0),
            height: SD
          } : {})
        }
        if ("right" === pD) {
          var nD = {
            x: fD + QD + vD,
            y: bD + SD / 2,
            textAnchor: gD,
            verticalAnchor: "middle"
          };
          return mD(mD({}, nD), cD ? {
            width: Math.max(cD.x + cD.width - nD.x, 0),
            height: SD
          } : {})
        }
        var OD = cD ? {
          width: QD,
          height: SD
        } : {};
        return "insideLeft" === pD ? mD({
          x: fD + vD,
          y: bD + SD / 2,
          textAnchor: gD,
          verticalAnchor: "middle"
        }, OD) : "insideRight" === pD ? mD({
          x: fD + QD - vD,
          y: bD + SD / 2,
          textAnchor: ND,
          verticalAnchor: "middle"
        }, OD) : "insideTop" === pD ? mD({
          x: fD + QD / 2,
          y: bD + yD,
          textAnchor: "middle",
          verticalAnchor: ZD
        }, OD) : "insideBottom" === pD ? mD({
          x: fD + QD / 2,
          y: bD + SD - yD,
          textAnchor: "middle",
          verticalAnchor: tD
        }, OD) : "insideTopLeft" === pD ? mD({
          x: fD + vD,
          y: bD + yD,
          textAnchor: gD,
          verticalAnchor: ZD
        }, OD) : "insideTopRight" === pD ? mD({
          x: fD + QD - vD,
          y: bD + yD,
          textAnchor: ND,
          verticalAnchor: ZD
        }, OD) : "insideBottomLeft" === pD ? mD({
          x: fD + vD,
          y: bD + SD - yD,
          textAnchor: gD,
          verticalAnchor: tD
        }, OD) : "insideBottomRight" === pD ? mD({
          x: fD + QD - vD,
          y: bD + SD - yD,
          textAnchor: ND,
          verticalAnchor: tD
        }, OD) : wD()(pD) && ((0, MD.G)(pD.x) || (0, MD.H)(pD.x)) && ((0, MD.G)(pD.y) || (0, MD.H)(pD.y)) ? mD({
          x: fD + (0, MD.p)(pD.x, QD),
          y: bD + (0, MD.p)(pD.y, SD),
          textAnchor: "end",
          verticalAnchor: "end"
        }, OD) : mD({
          x: fD + QD / 2,
          y: bD + SD / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, OD)
      },
      qD = function(DD) {
        return "cx" in DD && (0, MD.G)(DD.cx)
      };

    function JD(DD) {
      var CD, cD = DD.offset,
        pD = mD({
          offset: void 0 === cD ? 5 : cD
        }, gD(DD, oD)),
        fD = pD.viewBox,
        QD = pD.position,
        wD = pD.value,
        MD = pD.children,
        tD = pD.content,
        ZD = pD.className,
        vD = void 0 === ZD ? "" : ZD,
        ND = pD.textBreakAll;
      if (!fD || iD()(wD) && iD()(MD) && !(0, ID.isValidElement)(tD) && !bD()(tD)) return null;
      if ((0, ID.isValidElement)(tD)) return (0, ID.cloneElement)(tD, pD);
      if (bD()(tD)) {
        if (CD = (0, ID.createElement)(tD, pD), (0, ID.isValidElement)(CD)) return CD
      } else CD = PD(pD);
      var XD = qD(fD),
        nD = (0, yD.b)(pD, !0);
      if (XD && ("insideStart" === QD || "insideEnd" === QD || "end" === QD)) return HD(pD, CD, nD);
      var JD = XD ? UD(pD) : xD(pD);
      return ID.createElement(BD.b, OD({
        className: (0, SD.e)("recharts-label", vD)
      }, nD, JD, {
        breakAll: ND
      }), CD)
    }
    JD.displayName = "Label";
    var KD = function(DD) {
      var CD = DD.cx,
        cD = DD.cy,
        ID = DD.angle,
        pD = DD.startAngle,
        iD = DD.endAngle,
        fD = DD.r,
        bD = DD.radius,
        QD = DD.innerRadius,
        wD = DD.outerRadius,
        SD = DD.x,
        BD = DD.y,
        yD = DD.top,
        tD = DD.left,
        ZD = DD.width,
        oD = DD.height,
        vD = DD.clockWise,
        ND = DD.labelViewBox;
      if (ND) return ND;
      if ((0, MD.G)(ZD) && (0, MD.G)(oD)) {
        if ((0, MD.G)(SD) && (0, MD.G)(BD)) return {
          x: SD,
          y: BD,
          width: ZD,
          height: oD
        };
        if ((0, MD.G)(yD) && (0, MD.G)(tD)) return {
          x: yD,
          y: tD,
          width: ZD,
          height: oD
        }
      }
      return (0, MD.G)(SD) && (0, MD.G)(BD) ? {
        x: SD,
        y: BD,
        width: 0,
        height: 0
      } : (0, MD.G)(CD) && (0, MD.G)(cD) ? {
        cx: CD,
        cy: cD,
        startAngle: pD || ID || 0,
        endAngle: iD || ID || 0,
        innerRadius: QD || 0,
        outerRadius: wD || bD || fD || 0,
        clockWise: vD
      } : DD.viewBox ? DD.viewBox : {}
    };
    JD.parseViewBox = KD, JD.renderCallByParent = function(DD, CD) {
      var cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!DD || !DD.children && cD && !DD.label) return null;
      var pD = DD.children,
        iD = KD(DD),
        fD = (0, yD.f)(pD, JD).map((function(DD, cD) {
          return (0, ID.cloneElement)(DD, {
            viewBox: CD || iD,
            key: "label-".concat(cD)
          })
        }));
      if (!cD) return fD;
      var QD = function(DD, CD) {
        return DD ? !0 === DD ? ID.createElement(JD, {
          key: "label-implicit",
          viewBox: CD
        }) : (0, MD.D)(DD) ? ID.createElement(JD, {
          key: "label-implicit",
          viewBox: CD,
          value: DD
        }) : (0, ID.isValidElement)(DD) ? DD.type === JD ? (0, ID.cloneElement)(DD, {
          key: "label-implicit",
          viewBox: CD
        }) : ID.createElement(JD, {
          key: "label-implicit",
          content: DD,
          viewBox: CD
        }) : bD()(DD) ? ID.createElement(JD, {
          key: "label-implicit",
          content: DD,
          viewBox: CD
        }) : wD()(DD) ? ID.createElement(JD, OD({
          viewBox: CD
        }, DD, {
          key: "label-implicit"
        })) : null : null
      }(DD.label, CD || iD);
      return [QD].concat(vD(fD))
    }
  },
  6002: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => xD
    });
    var ID = cD(53),
      pD = cD(5175),
      iD = cD.n(pD),
      fD = cD(4852),
      bD = cD.n(fD),
      QD = cD(5032),
      wD = cD.n(QD),
      SD = cD(6005),
      BD = cD.n(SD),
      yD = cD(5949),
      MD = cD(5701),
      tD = cD(5185),
      ZD = cD(5873);

    function oD(DD) {
      return oD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, oD(DD)
    }
    var vD = ["valueAccessor"],
      ND = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function gD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return XD(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return XD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return XD(DD, CD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function mD() {
      return mD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, mD.apply(this, arguments)
    }

    function nD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function OD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? nD(Object(cD), !0).forEach((function(CD) {
          PD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : nD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function PD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != oD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != oD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == oD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function HD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }
    var UD = function(DD) {
      return Array.isArray(DD.value) ? BD()(DD.value) : DD.value
    };

    function xD(DD) {
      var CD = DD.valueAccessor,
        cD = void 0 === CD ? UD : CD,
        pD = HD(DD, vD),
        fD = pD.data,
        bD = pD.dataKey,
        QD = pD.clockWise,
        wD = pD.id,
        SD = pD.textBreakAll,
        BD = HD(pD, ND);
      return fD && fD.length ? ID.createElement(MD.d, {
        className: "recharts-label-list"
      }, fD.map((function(DD, CD) {
        var pD = iD()(bD) ? cD(DD, CD) : (0, ZD.Q)(DD && DD.payload, bD),
          fD = iD()(wD) ? {} : {
            id: "".concat(wD, "-").concat(CD)
          };
        return ID.createElement(yD.d, mD({}, (0, tD.b)(DD, !0), BD, fD, {
          parentViewBox: DD.parentViewBox,
          value: pD,
          textBreakAll: SD,
          viewBox: yD.d.parseViewBox(iD()(QD) ? DD : OD(OD({}, DD), {}, {
            clockWise: QD
          })),
          key: "label-".concat(CD),
          index: CD
        }))
      }))) : null
    }
    xD.displayName = "LabelList", xD.renderCallByParent = function(DD, CD) {
      var cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!DD || !DD.children && cD && !DD.label) return null;
      var pD = DD.children,
        iD = (0, tD.f)(pD, xD).map((function(DD, cD) {
          return (0, ID.cloneElement)(DD, {
            data: CD,
            key: "labelList-".concat(cD)
          })
        }));
      return cD ? [function(DD, CD) {
        return DD ? !0 === DD ? ID.createElement(xD, {
          key: "labelList-implicit",
          data: CD
        }) : ID.isValidElement(DD) || wD()(DD) ? ID.createElement(xD, {
          key: "labelList-implicit",
          data: CD,
          content: DD
        }) : bD()(DD) ? ID.createElement(xD, mD({
          data: CD
        }, DD, {
          key: "labelList-implicit"
        })) : null : null
      }(DD.label, CD)].concat(gD(iD)) : iD
    }
  },
  5778: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => GD
    });
    var ID = cD(53),
      pD = cD(5032),
      iD = cD.n(pD),
      fD = cD(4841),
      bD = cD(5181),
      QD = cD(5694),
      wD = cD(5780),
      SD = cD(5208);

    function BD(DD) {
      return BD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, BD(DD)
    }

    function yD() {
      return yD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, yD.apply(this, arguments)
    }

    function MD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function tD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, XD(ID.key), ID)
      }
    }

    function ZD(DD, CD, cD) {
      return CD = vD(CD),
        function(DD, CD) {
          if (CD && ("object" === BD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, oD() ? Reflect.construct(CD, cD || [], vD(DD).constructor) : CD.apply(DD, cD))
    }

    function oD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (oD = function() {
        return !!DD
      })()
    }

    function vD(DD) {
      return vD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, vD(DD)
    }

    function ND(DD, CD) {
      return ND = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, ND(DD, CD)
    }

    function gD(DD, CD, cD) {
      return (CD = XD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function XD(DD) {
      var CD = function(DD, CD) {
        if ("object" != BD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != BD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == BD(CD) ? CD : CD + ""
    }
    var mD = 32,
      nD = function(DD) {
        function CD() {
          return function(DD, CD) {
            if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
          }(this, CD), ZD(this, CD, arguments)
        }
        return function(DD, CD) {
          if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
          DD.prototype = Object.create(CD && CD.prototype, {
            constructor: {
              value: DD,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), CD && ND(DD, CD)
        }(CD, DD), cD = CD, pD = [{
          key: "renderIcon",
          value: function(DD) {
            var CD = this.props.inactiveColor,
              cD = 16,
              pD = mD / 6,
              iD = mD / 3,
              fD = DD.inactive ? CD : DD.color;
            if ("plainline" === DD.type) return ID.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: fD,
              strokeDasharray: DD.payload.strokeDasharray,
              x1: 0,
              y1: cD,
              x2: mD,
              y2: cD,
              className: "recharts-legend-icon"
            });
            if ("line" === DD.type) return ID.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: fD,
              d: "M0,".concat(cD, "h").concat(iD, "\n            A").concat(pD, ",").concat(pD, ",0,1,1,").concat(2 * iD, ",").concat(cD, "\n            H").concat(mD, "M").concat(2 * iD, ",").concat(cD, "\n            A").concat(pD, ",").concat(pD, ",0,1,1,").concat(iD, ",").concat(cD),
              className: "recharts-legend-icon"
            });
            if ("rect" === DD.type) return ID.createElement("path", {
              stroke: "none",
              fill: fD,
              d: "M0,".concat(4, "h").concat(mD, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (ID.isValidElement(DD.legendIcon)) {
              var bD = function(DD) {
                for (var CD = 1; CD < arguments.length; CD++) {
                  var cD = null != arguments[CD] ? arguments[CD] : {};
                  CD % 2 ? MD(Object(cD), !0).forEach((function(CD) {
                    gD(DD, CD, cD[CD])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : MD(Object(cD)).forEach((function(CD) {
                    Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
                  }))
                }
                return DD
              }({}, DD);
              return delete bD.legendIcon, ID.cloneElement(DD.legendIcon, bD)
            }
            return ID.createElement(wD.b, {
              fill: fD,
              cx: cD,
              cy: cD,
              size: mD,
              sizeType: "diameter",
              type: DD.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var DD = this,
              CD = this.props,
              cD = CD.payload,
              pD = CD.iconSize,
              wD = CD.layout,
              BD = CD.formatter,
              MD = CD.inactiveColor,
              tD = {
                x: 0,
                y: 0,
                width: mD,
                height: mD
              },
              ZD = {
                display: "horizontal" === wD ? "inline-block" : "block",
                marginRight: 10
              },
              oD = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return cD.map((function(CD, cD) {
              var wD = CD.formatter || BD,
                vD = (0, fD.e)(gD(gD({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(cD), !0), "inactive", CD.inactive));
              if ("none" === CD.type) return null;
              var ND = iD()(CD.value) ? null : CD.value;
              (0, bD.d)(!iD()(CD.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var XD = CD.inactive ? MD : CD.color;
              return ID.createElement("li", yD({
                className: vD,
                style: ZD,
                key: "legend-item-".concat(cD)
              }, (0, SD.o)(DD.props, CD, cD)), ID.createElement(QD.c, {
                width: pD,
                height: pD,
                viewBox: tD,
                style: oD
              }, DD.renderIcon(CD)), ID.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: XD
                }
              }, wD ? wD(ND, CD, cD) : ND))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var DD = this.props,
              CD = DD.payload,
              cD = DD.layout,
              pD = DD.align;
            if (!CD || !CD.length) return null;
            var iD = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === cD ? pD : "left"
            };
            return ID.createElement("ul", {
              className: "recharts-default-legend",
              style: iD
            }, this.renderItems())
          }
        }], pD && tD(cD.prototype, pD), BD && tD(cD, BD), Object.defineProperty(cD, "prototype", {
          writable: !1
        }), cD;
        var cD, pD, BD
      }(ID.PureComponent);
    gD(nD, "displayName", "Legend"), gD(nD, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var OD = cD(4927),
      PD = cD(5720);

    function HD(DD) {
      return HD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, HD(DD)
    }
    var UD = ["ref"];

    function xD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function qD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? xD(Object(cD), !0).forEach((function(CD) {
          jD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : xD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function JD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, lD(ID.key), ID)
      }
    }

    function KD(DD, CD, cD) {
      return CD = VD(CD),
        function(DD, CD) {
          if (CD && ("object" === HD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, aD() ? Reflect.construct(CD, cD || [], VD(DD).constructor) : CD.apply(DD, cD))
    }

    function aD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (aD = function() {
        return !!DD
      })()
    }

    function VD(DD) {
      return VD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, VD(DD)
    }

    function zD(DD, CD) {
      return zD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, zD(DD, CD)
    }

    function jD(DD, CD, cD) {
      return (CD = lD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function lD(DD) {
      var CD = function(DD, CD) {
        if ("object" != HD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != HD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == HD(CD) ? CD : CD + ""
    }

    function LD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function TD(DD) {
      return DD.value
    }
    var GD = function(DD) {
      function CD() {
        var DD;
        ! function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD);
        for (var cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        return jD(DD = KD(this, CD, [].concat(ID)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), DD
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && zD(DD, CD)
      }(CD, DD), cD = CD, iD = [{
        key: "getWithHeight",
        value: function(DD, CD) {
          var cD = qD(qD({}, this.defaultProps), DD.props).layout;
          return "vertical" === cD && (0, OD.G)(DD.props.height) ? {
            height: DD.props.height
          } : "horizontal" === cD ? {
            width: DD.props.width || CD
          } : null
        }
      }], (pD = [{
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
            CD = this.getBBox();
          CD ? (Math.abs(CD.width - this.lastBoundingBox.width) > 1 || Math.abs(CD.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = CD.width, this.lastBoundingBox.height = CD.height, DD && DD(CD)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, DD && DD(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? qD({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(DD) {
          var CD, cD, ID = this.props,
            pD = ID.layout,
            iD = ID.align,
            fD = ID.verticalAlign,
            bD = ID.margin,
            QD = ID.chartWidth,
            wD = ID.chartHeight;
          return DD && (void 0 !== DD.left && null !== DD.left || void 0 !== DD.right && null !== DD.right) || (CD = "center" === iD && "vertical" === pD ? {
            left: ((QD || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === iD ? {
            right: bD && bD.right || 0
          } : {
            left: bD && bD.left || 0
          }), DD && (void 0 !== DD.top && null !== DD.top || void 0 !== DD.bottom && null !== DD.bottom) || (cD = "middle" === fD ? {
            top: ((wD || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === fD ? {
            bottom: bD && bD.bottom || 0
          } : {
            top: bD && bD.top || 0
          }), qD(qD({}, CD), cD)
        }
      }, {
        key: "render",
        value: function() {
          var DD = this,
            CD = this.props,
            cD = CD.content,
            pD = CD.width,
            iD = CD.height,
            fD = CD.wrapperStyle,
            bD = CD.payloadUniqBy,
            QD = CD.payload,
            wD = qD(qD({
              position: "absolute",
              width: pD || "auto",
              height: iD || "auto"
            }, this.getDefaultPosition(fD)), fD);
          return ID.createElement("div", {
            className: "recharts-legend-wrapper",
            style: wD,
            ref: function(CD) {
              DD.wrapperNode = CD
            }
          }, function(DD, CD) {
            if (ID.isValidElement(DD)) return ID.cloneElement(DD, CD);
            if ("function" === typeof DD) return ID.createElement(DD, CD);
            CD.ref;
            var cD = LD(CD, UD);
            return ID.createElement(nD, cD)
          }(cD, qD(qD({}, this.props), {}, {
            payload: (0, PD.b)(QD, bD, TD)
          })))
        }
      }]) && JD(cD.prototype, pD), iD && JD(cD, iD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, pD, iD
    }(ID.PureComponent);
    jD(GD, "displayName", "Legend"), jD(GD, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4832: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD
    });
    var ID = cD(4841),
      pD = cD(53),
      iD = cD(4845),
      fD = cD.n(iD),
      bD = cD(4927),
      QD = cD(5181),
      wD = cD(5185);

    function SD(DD) {
      return SD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, SD(DD)
    }

    function BD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function yD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? BD(Object(cD), !0).forEach((function(CD) {
          MD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : BD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function MD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != SD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != SD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == SD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function tD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return ZD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return ZD(DD, CD)
      }(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }
    var oD = (0, pD.forwardRef)((function(DD, CD) {
      var cD = DD.aspect,
        iD = DD.initialDimension,
        SD = void 0 === iD ? {
          width: -1,
          height: -1
        } : iD,
        BD = DD.width,
        MD = void 0 === BD ? "100%" : BD,
        ZD = DD.height,
        oD = void 0 === ZD ? "100%" : ZD,
        vD = DD.minWidth,
        ND = void 0 === vD ? 0 : vD,
        gD = DD.minHeight,
        XD = DD.maxHeight,
        mD = DD.children,
        nD = DD.debounce,
        OD = void 0 === nD ? 0 : nD,
        PD = DD.id,
        HD = DD.className,
        UD = DD.yX,
        xD = DD.style,
        qD = void 0 === xD ? {} : xD,
        JD = (0, pD.useRef)(null),
        KD = (0, pD.useRef)();
      KD.current = UD, (0, pD.useImperativeHandle)(CD, (function() {
        return Object.defineProperty(JD.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), JD.current
          },
          configurable: !0
        })
      }));
      var aD = tD((0, pD.useState)({
          containerWidth: SD.width,
          containerHeight: SD.height
        }), 2),
        VD = aD[0],
        zD = aD[1],
        jD = (0, pD.useCallback)((function(DD, CD) {
          zD((function(cD) {
            var ID = Math.round(DD),
              pD = Math.round(CD);
            return cD.containerWidth === ID && cD.containerHeight === pD ? cD : {
              containerWidth: ID,
              containerHeight: pD
            }
          }))
        }), []);
      (0, pD.useEffect)((function() {
        var DD = function(DD) {
          var CD, cD = DD[0].contentRect,
            ID = cD.width,
            pD = cD.height;
          jD(ID, pD), null === (CD = KD.current) || void 0 === CD || CD.call(KD, ID, pD)
        };
        OD > 0 && (DD = fD()(DD, OD, {
          trailing: !0,
          leading: !1
        }));
        var CD = new ResizeObserver(DD),
          cD = JD.current.getBoundingClientRect(),
          ID = cD.width,
          pD = cD.height;
        return jD(ID, pD), CD.observe(JD.current),
          function() {
            CD.disconnect()
          }
      }), [jD, OD]);
      var lD = (0, pD.useMemo)((function() {
        var DD = VD.containerWidth,
          CD = VD.containerHeight;
        if (DD < 0 || CD < 0) return null;
        (0, QD.d)((0, bD.H)(MD) || (0, bD.H)(oD), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", MD, oD), (0, QD.d)(!cD || cD > 0, "The aspect(%s) must be greater than zero.", cD);
        var ID = (0, bD.H)(MD) ? DD : MD,
          iD = (0, bD.H)(oD) ? CD : oD;
        cD && cD > 0 && (ID ? iD = ID / cD : iD && (ID = iD * cD), XD && iD > XD && (iD = XD)), (0, QD.d)(ID > 0 || iD > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", ID, iD, MD, oD, ND, gD, cD);
        var fD = !Array.isArray(mD) && (0, wD.l)(mD.type).endsWith("Chart");
        return pD.Children.map(mD, (function(DD) {
          return pD.isValidElement(DD) ? (0, pD.cloneElement)(DD, yD({
            width: ID,
            height: iD
          }, fD ? {
            style: yD({
              height: "100%",
              width: "100%",
              maxHeight: iD,
              maxWidth: ID
            }, DD.props.style)
          } : {})) : DD
        }))
      }), [cD, mD, oD, XD, gD, ND, VD, MD]);
      return pD.createElement("div", {
        id: PD ? "".concat(PD) : void 0,
        className: (0, ID.e)("recharts-responsive-container", HD),
        style: yD(yD({}, qD), {}, {
          width: MD,
          height: oD,
          minWidth: ND,
          minHeight: gD,
          maxHeight: XD
        }),
        ref: JD
      }, lD)
    }))
  },
  5863: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => RD
    });
    var ID = cD(53),
      pD = cD(5175),
      iD = cD.n(pD),
      fD = cD(4841),
      bD = cD(4927),
      QD = cD(5712),
      wD = cD(5185),
      SD = cD(5868);

    function BD(DD) {
      return BD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, BD(DD)
    }

    function yD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return MD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return MD(DD, CD)
      }(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function tD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, ZD(ID.key), ID)
      }
    }

    function ZD(DD) {
      var CD = function(DD, CD) {
        if ("object" != BD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != BD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == BD(CD) ? CD : CD + ""
    }
    var oD = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      vD = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      ND = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      gD = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      XD = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      mD = Object.keys(XD),
      nD = "NaN";
    var OD = function() {
      function DD(CD, cD) {
        ! function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, DD), this.num = CD, this.unit = cD, this.num = CD, this.unit = cD, Number.isNaN(CD) && (this.unit = ""), "" === cD || ND.test(cD) || (this.num = NaN, this.unit = ""), mD.includes(cD) && (this.num = function(DD, CD) {
          return DD * XD[CD]
        }(CD, cD), this.unit = "px")
      }
      return CD = DD, ID = [{
        key: "parse",
        value: function(CD) {
          var cD, ID = yD(null !== (cD = gD.exec(CD)) && void 0 !== cD ? cD : [], 3),
            pD = ID[1],
            iD = ID[2];
          return new DD(parseFloat(pD), null !== iD && void 0 !== iD ? iD : "")
        }
      }], (cD = [{
        key: "add",
        value: function(CD) {
          return this.unit !== CD.unit ? new DD(NaN, "") : new DD(this.num + CD.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(CD) {
          return this.unit !== CD.unit ? new DD(NaN, "") : new DD(this.num - CD.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(CD) {
          return "" !== this.unit && "" !== CD.unit && this.unit !== CD.unit ? new DD(NaN, "") : new DD(this.num * CD.num, this.unit || CD.unit)
        }
      }, {
        key: "divide",
        value: function(CD) {
          return "" !== this.unit && "" !== CD.unit && this.unit !== CD.unit ? new DD(NaN, "") : new DD(this.num / CD.num, this.unit || CD.unit)
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
      }]) && tD(CD.prototype, cD), ID && tD(CD, ID), Object.defineProperty(CD, "prototype", {
        writable: !1
      }), CD;
      var CD, cD, ID
    }();

    function PD(DD) {
      if (DD.includes(nD)) return nD;
      for (var CD = DD; CD.includes("*") || CD.includes("/");) {
        var cD, ID = yD(null !== (cD = oD.exec(CD)) && void 0 !== cD ? cD : [], 4),
          pD = ID[1],
          iD = ID[2],
          fD = ID[3],
          bD = OD.parse(null !== pD && void 0 !== pD ? pD : ""),
          QD = OD.parse(null !== fD && void 0 !== fD ? fD : ""),
          wD = "*" === iD ? bD.multiply(QD) : bD.divide(QD);
        if (wD.isNaN()) return nD;
        CD = CD.replace(oD, wD.toString())
      }
      for (; CD.includes("+") || /.-\d+(?:\.\d+)?/.test(CD);) {
        var SD, BD = yD(null !== (SD = vD.exec(CD)) && void 0 !== SD ? SD : [], 4),
          MD = BD[1],
          tD = BD[2],
          ZD = BD[3],
          ND = OD.parse(null !== MD && void 0 !== MD ? MD : ""),
          gD = OD.parse(null !== ZD && void 0 !== ZD ? ZD : ""),
          XD = "+" === tD ? ND.add(gD) : ND.subtract(gD);
        if (XD.isNaN()) return nD;
        CD = CD.replace(vD, XD.toString())
      }
      return CD
    }
    var HD = /\(([^()]*)\)/;

    function UD(DD) {
      var CD = DD.replace(/\s+/g, "");
      return CD = function(DD) {
        for (var CD = DD; CD.includes("(");) {
          var cD = yD(HD.exec(CD), 2)[1];
          CD = CD.replace(HD, PD(cD))
        }
        return CD
      }(CD), CD = PD(CD)
    }

    function xD(DD) {
      var CD = function(DD) {
        try {
          return UD(DD)
        } catch (CD) {
          return nD
        }
      }(DD.slice(5, -1));
      return CD === nD ? "" : CD
    }
    var qD = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      JD = ["dx", "dy", "angle", "className", "breakAll"];

    function KD() {
      return KD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, KD.apply(this, arguments)
    }

    function aD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function VD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return zD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return zD(DD, CD)
      }(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }
    var jD = /[ \f\n\r\t\v\u2028\u2029]+/,
      lD = function(DD) {
        var CD = DD.children,
          cD = DD.breakAll,
          ID = DD.style;
        try {
          var pD = [];
          return iD()(CD) || (pD = cD ? CD.toString().split("") : CD.toString().split(jD)), {
            wordsWithComputedWidth: pD.map((function(DD) {
              return {
                word: DD,
                width: (0, SD.g)(DD, ID).width
              }
            })),
            spaceWidth: cD ? 0 : (0, SD.g)("\xa0", ID).width
          }
        } catch (fD) {
          return null
        }
      },
      LD = function(DD) {
        return [{
          words: iD()(DD) ? [] : DD.toString().split(jD)
        }]
      },
      TD = function(DD) {
        var CD = DD.width,
          cD = DD.scaleToFit,
          ID = DD.children,
          pD = DD.style,
          iD = DD.breakAll,
          fD = DD.maxLines;
        if ((CD || cD) && !QD.e.isSsr) {
          var wD = lD({
            breakAll: iD,
            children: ID,
            style: pD
          });
          return wD ? function(DD, CD, cD, ID, pD) {
            var iD = DD.maxLines,
              fD = DD.children,
              QD = DD.style,
              wD = DD.breakAll,
              SD = (0, bD.G)(iD),
              BD = fD,
              yD = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(DD, CD) {
                  var iD = CD.word,
                    fD = CD.width,
                    bD = DD[DD.length - 1];
                  if (bD && (null == ID || pD || bD.width + fD + cD < Number(ID))) bD.words.push(iD), bD.width += fD + cD;
                  else {
                    var QD = {
                      words: [iD],
                      width: fD
                    };
                    DD.push(QD)
                  }
                  return DD
                }), [])
              },
              MD = yD(CD);
            if (!SD) return MD;
            for (var tD, ZD = function(DD) {
                var CD = BD.slice(0, DD),
                  cD = lD({
                    breakAll: wD,
                    style: QD,
                    children: CD + "\u2026"
                  }).wordsWithComputedWidth,
                  pD = yD(cD),
                  fD = pD.length > iD || function(DD) {
                    return DD.reduce((function(DD, CD) {
                      return DD.width > CD.width ? DD : CD
                    }))
                  }(pD).width > Number(ID);
                return [fD, pD]
              }, oD = 0, vD = BD.length - 1, ND = 0; oD <= vD && ND <= BD.length - 1;) {
              var gD = Math.floor((oD + vD) / 2),
                XD = VD(ZD(gD - 1), 2),
                mD = XD[0],
                nD = XD[1],
                OD = VD(ZD(gD), 1)[0];
              if (mD || OD || (oD = gD + 1), mD && OD && (vD = gD - 1), !mD && OD) {
                tD = nD;
                break
              }
              ND++
            }
            return tD || MD
          }({
            breakAll: iD,
            children: ID,
            maxLines: fD,
            style: pD
          }, wD.wordsWithComputedWidth, wD.spaceWidth, CD, cD) : LD(ID)
        }
        return LD(ID)
      },
      GD = "#808080",
      RD = function(DD) {
        var CD = DD.x,
          cD = void 0 === CD ? 0 : CD,
          pD = DD.y,
          iD = void 0 === pD ? 0 : pD,
          QD = DD.lineHeight,
          SD = void 0 === QD ? "1em" : QD,
          BD = DD.capHeight,
          yD = void 0 === BD ? "0.71em" : BD,
          MD = DD.scaleToFit,
          tD = void 0 !== MD && MD,
          ZD = DD.textAnchor,
          oD = void 0 === ZD ? "start" : ZD,
          vD = DD.verticalAnchor,
          ND = void 0 === vD ? "end" : vD,
          gD = DD.fill,
          XD = void 0 === gD ? GD : gD,
          mD = aD(DD, qD),
          nD = (0, ID.useMemo)((function() {
            return TD({
              breakAll: mD.breakAll,
              children: mD.children,
              maxLines: mD.maxLines,
              scaleToFit: tD,
              style: mD.style,
              width: mD.width
            })
          }), [mD.breakAll, mD.children, mD.maxLines, tD, mD.style, mD.width]),
          OD = mD.dx,
          PD = mD.dy,
          HD = mD.angle,
          UD = mD.className,
          VD = mD.breakAll,
          zD = aD(mD, JD);
        if (!(0, bD.D)(cD) || !(0, bD.D)(iD)) return null;
        var jD, lD = cD + ((0, bD.G)(OD) ? OD : 0),
          LD = iD + ((0, bD.G)(PD) ? PD : 0);
        switch (ND) {
          case "start":
            jD = xD("calc(".concat(yD, ")"));
            break;
          case "middle":
            jD = xD("calc(".concat((nD.length - 1) / 2, " * -").concat(SD, " + (").concat(yD, " / 2))"));
            break;
          default:
            jD = xD("calc(".concat(nD.length - 1, " * -").concat(SD, ")"))
        }
        var RD = [];
        if (tD) {
          var kD = nD[0].width,
            dD = mD.width;
          RD.push("scale(".concat(((0, bD.G)(dD) ? dD / kD : 1) / kD, ")"))
        }
        return HD && RD.push("rotate(".concat(HD, ", ").concat(lD, ", ").concat(LD, ")")), RD.length && (zD.transform = RD.join(" ")), ID.createElement("text", KD({}, (0, wD.b)(zD, !0), {
          x: lD,
          y: LD,
          className: (0, fD.e)("recharts-text", UD),
          textAnchor: oD,
          fill: XD.includes("url") ? GD : XD
        }), nD.map((function(DD, CD) {
          var cD = DD.words.join(VD ? "" : " ");
          return ID.createElement("tspan", {
            x: lD,
            dy: 0 === CD ? jD : SD,
            key: "".concat(cD, "-").concat(CD)
          }, cD)
        })))
      }
  },
  5707: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => rD
    });
    var ID = cD(53),
      pD = cD(5268),
      iD = cD.n(pD),
      fD = cD(5175),
      bD = cD.n(fD),
      QD = cD(4841),
      wD = cD(4927);

    function SD(DD) {
      return SD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, SD(DD)
    }

    function BD() {
      return BD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, BD.apply(this, arguments)
    }

    function yD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return MD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return MD(DD, CD)
      }(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function tD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function ZD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? tD(Object(cD), !0).forEach((function(CD) {
          oD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : tD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function oD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != SD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != SD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == SD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function vD(DD) {
      return Array.isArray(DD) && (0, wD.D)(DD[0]) && (0, wD.D)(DD[1]) ? DD.join(" ~ ") : DD
    }
    var ND = function(DD) {
      var CD = DD.separator,
        cD = void 0 === CD ? " : " : CD,
        pD = DD.contentStyle,
        fD = void 0 === pD ? {} : pD,
        SD = DD.itemStyle,
        MD = void 0 === SD ? {} : SD,
        tD = DD.labelStyle,
        oD = void 0 === tD ? {} : tD,
        ND = DD.payload,
        gD = DD.formatter,
        XD = DD.itemSorter,
        mD = DD.wrapperClassName,
        nD = DD.labelClassName,
        OD = DD.label,
        PD = DD.labelFormatter,
        HD = DD.accessibilityLayer,
        UD = void 0 !== HD && HD,
        xD = ZD({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, fD),
        qD = ZD({
          margin: 0
        }, oD),
        JD = !bD()(OD),
        KD = JD ? OD : "",
        aD = (0, QD.e)("recharts-default-tooltip", mD),
        VD = (0, QD.e)("recharts-tooltip-label", nD);
      JD && PD && void 0 !== ND && null !== ND && (KD = PD(OD, ND));
      var zD = UD ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return ID.createElement("div", BD({
        className: aD,
        style: xD
      }, zD), ID.createElement("p", {
        className: VD,
        style: qD
      }, ID.isValidElement(KD) ? KD : "".concat(KD)), function() {
        if (ND && ND.length) {
          var DD = (XD ? iD()(ND, XD) : ND).map((function(DD, CD) {
            if ("none" === DD.type) return null;
            var pD = ZD({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: DD.color || "#000"
              }, MD),
              iD = DD.formatter || gD || vD,
              fD = DD.value,
              bD = DD.name,
              QD = fD,
              SD = bD;
            if (iD && null != QD && null != SD) {
              var BD = iD(fD, bD, DD, CD, ND);
              if (Array.isArray(BD)) {
                var tD = yD(BD, 2);
                QD = tD[0], SD = tD[1]
              } else QD = BD
            }
            return ID.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(CD),
              style: pD
            }, (0, wD.D)(SD) ? ID.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, SD) : null, (0, wD.D)(SD) ? ID.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, cD) : null, ID.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, QD), ID.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, DD.unit || ""))
          }));
          return ID.createElement("ul", {
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

    function gD(DD) {
      return gD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, gD(DD)
    }

    function XD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != gD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != gD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == gD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var mD = "recharts-tooltip-wrapper",
      nD = {
        visibility: "hidden"
      };

    function OD(DD) {
      var CD = DD.coordinate,
        cD = DD.translateX,
        ID = DD.translateY;
      return (0, QD.e)(mD, XD(XD(XD(XD({}, "".concat(mD, "-right"), (0, wD.G)(cD) && CD && (0, wD.G)(CD.x) && cD >= CD.x), "".concat(mD, "-left"), (0, wD.G)(cD) && CD && (0, wD.G)(CD.x) && cD < CD.x), "".concat(mD, "-bottom"), (0, wD.G)(ID) && CD && (0, wD.G)(CD.y) && ID >= CD.y), "".concat(mD, "-top"), (0, wD.G)(ID) && CD && (0, wD.G)(CD.y) && ID < CD.y))
    }

    function PD(DD) {
      var CD = DD.allowEscapeViewBox,
        cD = DD.coordinate,
        ID = DD.key,
        pD = DD.offsetTopLeft,
        iD = DD.position,
        fD = DD.reverseDirection,
        bD = DD.tooltipDimension,
        QD = DD.viewBox,
        SD = DD.viewBoxDimension;
      if (iD && (0, wD.G)(iD[ID])) return iD[ID];
      var BD = cD[ID] - bD - pD,
        yD = cD[ID] + pD;
      return CD[ID] ? fD[ID] ? BD : yD : fD[ID] ? BD < QD[ID] ? Math.max(yD, QD[ID]) : Math.max(BD, QD[ID]) : yD + bD > QD[ID] + SD ? Math.max(BD, QD[ID]) : Math.max(yD, QD[ID])
    }

    function HD(DD) {
      return HD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, HD(DD)
    }

    function UD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function xD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? UD(Object(cD), !0).forEach((function(CD) {
          zD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : UD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function qD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, jD(ID.key), ID)
      }
    }

    function JD(DD, CD, cD) {
      return CD = aD(CD),
        function(DD, CD) {
          if (CD && ("object" === HD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, KD() ? Reflect.construct(CD, cD || [], aD(DD).constructor) : CD.apply(DD, cD))
    }

    function KD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (KD = function() {
        return !!DD
      })()
    }

    function aD(DD) {
      return aD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, aD(DD)
    }

    function VD(DD, CD) {
      return VD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, VD(DD, CD)
    }

    function zD(DD, CD, cD) {
      return (CD = jD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function jD(DD) {
      var CD = function(DD, CD) {
        if ("object" != HD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != HD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == HD(CD) ? CD : CD + ""
    }
    var lD = function(DD) {
        function CD() {
          var DD;
          ! function(DD, CD) {
            if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
          }(this, CD);
          for (var cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
          return zD(DD = JD(this, CD, [].concat(ID)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), zD(DD, "handleKeyDown", (function(CD) {
            var cD, ID, pD, iD;
            "Escape" === CD.key && DD.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (cD = null === (ID = DD.props.coordinate) || void 0 === ID ? void 0 : ID.x) && void 0 !== cD ? cD : 0,
                y: null !== (pD = null === (iD = DD.props.coordinate) || void 0 === iD ? void 0 : iD.y) && void 0 !== pD ? pD : 0
              }
            })
          })), DD
        }
        return function(DD, CD) {
          if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
          DD.prototype = Object.create(CD && CD.prototype, {
            constructor: {
              value: DD,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), CD && VD(DD, CD)
        }(CD, DD), cD = CD, (pD = [{
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
            var DD, CD;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (DD = this.props.coordinate) || void 0 === DD ? void 0 : DD.x) === this.state.dismissedAtCoordinate.x && (null === (CD = this.props.coordinate) || void 0 === CD ? void 0 : CD.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var DD = this,
              CD = this.props,
              cD = CD.active,
              pD = CD.allowEscapeViewBox,
              iD = CD.animationDuration,
              fD = CD.animationEasing,
              bD = CD.children,
              QD = CD.coordinate,
              wD = CD.hasPayload,
              SD = CD.isAnimationActive,
              BD = CD.offset,
              yD = CD.position,
              MD = CD.reverseDirection,
              tD = CD.useTranslate3d,
              ZD = CD.viewBox,
              oD = CD.wrapperStyle,
              vD = function(DD) {
                var CD, cD, ID = DD.allowEscapeViewBox,
                  pD = DD.coordinate,
                  iD = DD.offsetTopLeft,
                  fD = DD.position,
                  bD = DD.reverseDirection,
                  QD = DD.tooltipBox,
                  wD = DD.useTranslate3d,
                  SD = DD.viewBox;
                return {
                  cssProperties: QD.height > 0 && QD.width > 0 && pD ? function(DD) {
                    var CD = DD.translateX,
                      cD = DD.translateY;
                    return {
                      transform: DD.useTranslate3d ? "translate3d(".concat(CD, "px, ").concat(cD, "px, 0)") : "translate(".concat(CD, "px, ").concat(cD, "px)")
                    }
                  }({
                    translateX: CD = PD({
                      allowEscapeViewBox: ID,
                      coordinate: pD,
                      key: "x",
                      offsetTopLeft: iD,
                      position: fD,
                      reverseDirection: bD,
                      tooltipDimension: QD.width,
                      viewBox: SD,
                      viewBoxDimension: SD.width
                    }),
                    translateY: cD = PD({
                      allowEscapeViewBox: ID,
                      coordinate: pD,
                      key: "y",
                      offsetTopLeft: iD,
                      position: fD,
                      reverseDirection: bD,
                      tooltipDimension: QD.height,
                      viewBox: SD,
                      viewBoxDimension: SD.height
                    }),
                    useTranslate3d: wD
                  }) : nD,
                  cssClasses: OD({
                    translateX: CD,
                    translateY: cD,
                    coordinate: pD
                  })
                }
              }({
                allowEscapeViewBox: pD,
                coordinate: QD,
                offsetTopLeft: BD,
                position: yD,
                reverseDirection: MD,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: tD,
                viewBox: ZD
              }),
              ND = vD.cssClasses,
              gD = vD.cssProperties,
              XD = xD(xD({
                transition: SD && cD ? "transform ".concat(iD, "ms ").concat(fD) : void 0
              }, gD), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && cD && wD ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, oD);
            return ID.createElement("div", {
              tabIndex: -1,
              className: ND,
              style: XD,
              ref: function(CD) {
                DD.wrapperNode = CD
              }
            }, bD)
          }
        }]) && qD(cD.prototype, pD), iD && qD(cD, iD), Object.defineProperty(cD, "prototype", {
          writable: !1
        }), cD;
        var cD, pD, iD
      }(ID.PureComponent),
      LD = cD(5712),
      TD = cD(5720);

    function GD(DD) {
      return GD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, GD(DD)
    }

    function RD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function kD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? RD(Object(cD), !0).forEach((function(CD) {
          eD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : RD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function dD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, uD(ID.key), ID)
      }
    }

    function YD(DD, CD, cD) {
      return CD = sD(CD),
        function(DD, CD) {
          if (CD && ("object" === GD(CD) || "function" === typeof CD)) return CD;
          if (void 0 !== CD) throw new TypeError("Derived constructors may only return object or undefined");
          return function(DD) {
            if (void 0 === DD) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return DD
          }(DD)
        }(DD, WD() ? Reflect.construct(CD, cD || [], sD(DD).constructor) : CD.apply(DD, cD))
    }

    function WD() {
      try {
        var DD = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (DD) {}
      return (WD = function() {
        return !!DD
      })()
    }

    function sD(DD) {
      return sD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(DD) {
        return DD.__proto__ || Object.getPrototypeOf(DD)
      }, sD(DD)
    }

    function ED(DD, CD) {
      return ED = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(DD, CD) {
        return DD.__proto__ = CD, DD
      }, ED(DD, CD)
    }

    function eD(DD, CD, cD) {
      return (CD = uD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function uD(DD) {
      var CD = function(DD, CD) {
        if ("object" != GD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != GD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == GD(CD) ? CD : CD + ""
    }

    function hD(DD) {
      return DD.dataKey
    }
    var rD = function(DD) {
      function CD() {
        return function(DD, CD) {
          if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
        }(this, CD), YD(this, CD, arguments)
      }
      return function(DD, CD) {
        if ("function" !== typeof CD && null !== CD) throw new TypeError("Super expression must either be null or a function");
        DD.prototype = Object.create(CD && CD.prototype, {
          constructor: {
            value: DD,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(DD, "prototype", {
          writable: !1
        }), CD && ED(DD, CD)
      }(CD, DD), cD = CD, (pD = [{
        key: "render",
        value: function() {
          var DD = this,
            CD = this.props,
            cD = CD.active,
            pD = CD.allowEscapeViewBox,
            iD = CD.animationDuration,
            fD = CD.animationEasing,
            bD = CD.content,
            QD = CD.coordinate,
            wD = CD.filterNull,
            SD = CD.isAnimationActive,
            BD = CD.offset,
            yD = CD.payload,
            MD = CD.payloadUniqBy,
            tD = CD.position,
            ZD = CD.reverseDirection,
            oD = CD.useTranslate3d,
            vD = CD.viewBox,
            gD = CD.wrapperStyle,
            XD = null !== yD && void 0 !== yD ? yD : [];
          wD && XD.length && (XD = (0, TD.b)(yD.filter((function(CD) {
            return null != CD.value && (!0 !== CD.hide || DD.props.includeHidden)
          })), MD, hD));
          var mD = XD.length > 0;
          return ID.createElement(lD, {
            allowEscapeViewBox: pD,
            animationDuration: iD,
            animationEasing: fD,
            isAnimationActive: SD,
            active: cD,
            coordinate: QD,
            hasPayload: mD,
            offset: BD,
            position: tD,
            reverseDirection: ZD,
            useTranslate3d: oD,
            viewBox: vD,
            wrapperStyle: gD
          }, function(DD, CD) {
            return ID.isValidElement(DD) ? ID.cloneElement(DD, CD) : "function" === typeof DD ? ID.createElement(DD, CD) : ID.createElement(ND, CD)
          }(bD, kD(kD({}, this.props), {}, {
            payload: XD
          })))
        }
      }]) && dD(cD.prototype, pD), iD && dD(cD, iD), Object.defineProperty(cD, "prototype", {
        writable: !1
      }), cD;
      var cD, pD, iD
    }(ID.PureComponent);
    eD(rD, "displayName", "Tooltip"), eD(rD, "defaultProps", {
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
      isAnimationActive: !LD.e.isSsr,
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
  5701: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD
    });
    var ID = cD(53),
      pD = cD(4841),
      iD = cD(5185),
      fD = ["children", "className"];

    function bD() {
      return bD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, bD.apply(this, arguments)
    }

    function QD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }
    var wD = ID.forwardRef((function(DD, CD) {
      var cD = DD.children,
        wD = DD.className,
        SD = QD(DD, fD),
        BD = (0, pD.e)("recharts-layer", wD);
      return ID.createElement("g", bD({
        className: BD
      }, (0, iD.b)(SD, !0), {
        ref: CD
      }), cD)
    }))
  },
  5694: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => wD
    });
    var ID = cD(53),
      pD = cD(4841),
      iD = cD(5185),
      fD = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function bD() {
      return bD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, bD.apply(this, arguments)
    }

    function QD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function wD(DD) {
      var CD = DD.children,
        cD = DD.width,
        wD = DD.height,
        SD = DD.viewBox,
        BD = DD.className,
        yD = DD.style,
        MD = DD.title,
        tD = DD.desc,
        ZD = QD(DD, fD),
        oD = SD || {
          width: cD,
          height: wD,
          x: 0,
          y: 0
        },
        vD = (0, pD.e)("recharts-surface", BD);
      return ID.createElement("svg", bD({}, (0, iD.b)(ZD, !0, "svg"), {
        className: vD,
        width: cD,
        height: wD,
        style: yD,
        viewBox: "".concat(oD.x, " ").concat(oD.y, " ").concat(oD.width, " ").concat(oD.height)
      }), ID.createElement("title", null, MD), ID.createElement("desc", null, tD), CD)
    }
  },
  6068: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => gD,
      d: () => nD,
      e: () => qD,
      i: () => xD,
      m: () => XD,
      n: () => UD,
      p: () => HD,
      q: () => mD,
      u: () => PD,
      x: () => OD
    });
    var ID = cD(53),
      pD = cD(5688),
      iD = cD(6074),
      fD = cD.n(iD),
      bD = cD(5975),
      QD = cD.n(bD),
      wD = cD(4991),
      SD = cD.n(wD)()((function(DD) {
        return {
          x: DD.left,
          y: DD.top,
          width: DD.width,
          height: DD.height
        }
      }), (function(DD) {
        return ["l", DD.left, "t", DD.top, "w", DD.width, "h", DD.height].join("")
      })),
      BD = cD(4927);
    var yD = (0, ID.createContext)(void 0),
      MD = (0, ID.createContext)(void 0),
      tD = (0, ID.createContext)(void 0),
      ZD = (0, ID.createContext)({}),
      oD = (0, ID.createContext)(void 0),
      vD = (0, ID.createContext)(0),
      ND = (0, ID.createContext)(0),
      gD = function(DD) {
        var CD = DD.state,
          cD = CD.xAxisMap,
          pD = CD.yAxisMap,
          iD = CD.offset,
          fD = DD.clipPathId,
          bD = DD.children,
          QD = DD.width,
          wD = DD.height,
          BD = SD(iD);
        return ID.createElement(yD.Provider, {
          value: cD
        }, ID.createElement(MD.Provider, {
          value: pD
        }, ID.createElement(ZD.Provider, {
          value: iD
        }, ID.createElement(tD.Provider, {
          value: BD
        }, ID.createElement(oD.Provider, {
          value: fD
        }, ID.createElement(vD.Provider, {
          value: wD
        }, ID.createElement(ND.Provider, {
          value: QD
        }, bD)))))))
      },
      XD = function() {
        return (0, ID.useContext)(oD)
      };
    var mD = function(DD) {
        var CD = (0, ID.useContext)(yD);
        null == CD && (0, pD.e)(!1);
        var cD = CD[DD];
        return null == cD && (0, pD.e)(!1), cD
      },
      nD = function() {
        var DD = (0, ID.useContext)(yD);
        return (0, BD.j)(DD)
      },
      OD = function() {
        var DD = (0, ID.useContext)(MD);
        return fD()(DD, (function(DD) {
          return QD()(DD.domain, Number.isFinite)
        })) || (0, BD.j)(DD)
      },
      PD = function(DD) {
        var CD = (0, ID.useContext)(MD);
        null == CD && (0, pD.e)(!1);
        var cD = CD[DD];
        return null == cD && (0, pD.e)(!1), cD
      },
      HD = function() {
        return (0, ID.useContext)(tD)
      },
      UD = function() {
        return (0, ID.useContext)(ZD)
      },
      xD = function() {
        return (0, ID.useContext)(ND)
      },
      qD = function() {
        return (0, ID.useContext)(vD)
      }
  },
  6097: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => hD
    });
    var ID = cD(53);

    function pD() {}

    function iD(DD, CD, cD) {
      DD._context.bezierCurveTo((2 * DD._x0 + DD._x1) / 3, (2 * DD._y0 + DD._y1) / 3, (DD._x0 + 2 * DD._x1) / 3, (DD._y0 + 2 * DD._y1) / 3, (DD._x0 + 4 * DD._x1 + CD) / 6, (DD._y0 + 4 * DD._y1 + cD) / 6)
    }

    function fD(DD) {
      this._context = DD
    }

    function bD(DD) {
      this._context = DD
    }

    function QD(DD) {
      this._context = DD
    }
    fD.prototype = {
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
            iD(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(DD, CD) {
        switch (DD = +DD, CD = +CD, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(DD, CD) : this._context.moveTo(DD, CD);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            iD(this, DD, CD)
        }
        this._x0 = this._x1, this._x1 = DD, this._y0 = this._y1, this._y1 = CD
      }
    }, bD.prototype = {
      areaStart: pD,
      areaEnd: pD,
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
      point: function(DD, CD) {
        switch (DD = +DD, CD = +CD, this._point) {
          case 0:
            this._point = 1, this._x2 = DD, this._y2 = CD;
            break;
          case 1:
            this._point = 2, this._x3 = DD, this._y3 = CD;
            break;
          case 2:
            this._point = 3, this._x4 = DD, this._y4 = CD, this._context.moveTo((this._x0 + 4 * this._x1 + DD) / 6, (this._y0 + 4 * this._y1 + CD) / 6);
            break;
          default:
            iD(this, DD, CD)
        }
        this._x0 = this._x1, this._x1 = DD, this._y0 = this._y1, this._y1 = CD
      }
    }, QD.prototype = {
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
      point: function(DD, CD) {
        switch (DD = +DD, CD = +CD, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var cD = (this._x0 + 4 * this._x1 + DD) / 6,
              ID = (this._y0 + 4 * this._y1 + CD) / 6;
            this._line ? this._context.lineTo(cD, ID) : this._context.moveTo(cD, ID);
            break;
          case 3:
            this._point = 4;
          default:
            iD(this, DD, CD)
        }
        this._x0 = this._x1, this._x1 = DD, this._y0 = this._y1, this._y1 = CD
      }
    };
    class wD {
      constructor(DD, CD) {
        this._context = DD, this._x = CD
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
      point(DD, CD) {
        switch (DD = +DD, CD = +CD, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(DD, CD) : this._context.moveTo(DD, CD);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + DD) / 2, this._y0, this._x0, CD, DD, CD) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + CD) / 2, DD, this._y0, DD, CD)
        }
        this._x0 = DD, this._y0 = CD
      }
    }

    function SD(DD) {
      this._context = DD
    }

    function BD(DD) {
      this._context = DD
    }

    function yD(DD) {
      return new BD(DD)
    }

    function MD(DD) {
      return DD < 0 ? -1 : 1
    }

    function tD(DD, CD, cD) {
      var ID = DD._x1 - DD._x0,
        pD = CD - DD._x1,
        iD = (DD._y1 - DD._y0) / (ID || pD < 0 && -0),
        fD = (cD - DD._y1) / (pD || ID < 0 && -0),
        bD = (iD * pD + fD * ID) / (ID + pD);
      return (MD(iD) + MD(fD)) * Math.min(Math.abs(iD), Math.abs(fD), .5 * Math.abs(bD)) || 0
    }

    function ZD(DD, CD) {
      var cD = DD._x1 - DD._x0;
      return cD ? (3 * (DD._y1 - DD._y0) / cD - CD) / 2 : CD
    }

    function oD(DD, CD, cD) {
      var ID = DD._x0,
        pD = DD._y0,
        iD = DD._x1,
        fD = DD._y1,
        bD = (iD - ID) / 3;
      DD._context.bezierCurveTo(ID + bD, pD + bD * CD, iD - bD, fD - bD * cD, iD, fD)
    }

    function vD(DD) {
      this._context = DD
    }

    function ND(DD) {
      this._context = new gD(DD)
    }

    function gD(DD) {
      this._context = DD
    }

    function XD(DD) {
      this._context = DD
    }

    function mD(DD) {
      var CD, cD, ID = DD.length - 1,
        pD = new Array(ID),
        iD = new Array(ID),
        fD = new Array(ID);
      for (pD[0] = 0, iD[0] = 2, fD[0] = DD[0] + 2 * DD[1], CD = 1; CD < ID - 1; ++CD) pD[CD] = 1, iD[CD] = 4, fD[CD] = 4 * DD[CD] + 2 * DD[CD + 1];
      for (pD[ID - 1] = 2, iD[ID - 1] = 7, fD[ID - 1] = 8 * DD[ID - 1] + DD[ID], CD = 1; CD < ID; ++CD) cD = pD[CD] / iD[CD - 1], iD[CD] -= cD, fD[CD] -= cD * fD[CD - 1];
      for (pD[ID - 1] = fD[ID - 1] / iD[ID - 1], CD = ID - 2; CD >= 0; --CD) pD[CD] = (fD[CD] - pD[CD + 1]) / iD[CD];
      for (iD[ID - 1] = (DD[ID] + pD[ID - 1]) / 2, CD = 0; CD < ID - 1; ++CD) iD[CD] = 2 * DD[CD + 1] - pD[CD + 1];
      return [pD, iD]
    }

    function nD(DD, CD) {
      this._context = DD, this._t = CD
    }
    SD.prototype = {
      areaStart: pD,
      areaEnd: pD,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(DD, CD) {
        DD = +DD, CD = +CD, this._point ? this._context.lineTo(DD, CD) : (this._point = 1, this._context.moveTo(DD, CD))
      }
    }, BD.prototype = {
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
      point: function(DD, CD) {
        switch (DD = +DD, CD = +CD, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(DD, CD) : this._context.moveTo(DD, CD);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(DD, CD)
        }
      }
    }, vD.prototype = {
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
            oD(this, this._t0, ZD(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(DD, CD) {
        var cD = NaN;
        if (CD = +CD, (DD = +DD) !== this._x1 || CD !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(DD, CD) : this._context.moveTo(DD, CD);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, oD(this, ZD(this, cD = tD(this, DD, CD)), cD);
              break;
            default:
              oD(this, this._t0, cD = tD(this, DD, CD))
          }
          this._x0 = this._x1, this._x1 = DD, this._y0 = this._y1, this._y1 = CD, this._t0 = cD
        }
      }
    }, (ND.prototype = Object.create(vD.prototype)).point = function(DD, CD) {
      vD.prototype.point.call(this, CD, DD)
    }, gD.prototype = {
      moveTo: function(DD, CD) {
        this._context.moveTo(CD, DD)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(DD, CD) {
        this._context.lineTo(CD, DD)
      },
      bezierCurveTo: function(DD, CD, cD, ID, pD, iD) {
        this._context.bezierCurveTo(CD, DD, ID, cD, iD, pD)
      }
    }, XD.prototype = {
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
          CD = this._y,
          cD = DD.length;
        if (cD)
          if (this._line ? this._context.lineTo(DD[0], CD[0]) : this._context.moveTo(DD[0], CD[0]), 2 === cD) this._context.lineTo(DD[1], CD[1]);
          else
            for (var ID = mD(DD), pD = mD(CD), iD = 0, fD = 1; fD < cD; ++iD, ++fD) this._context.bezierCurveTo(ID[0][iD], pD[0][iD], ID[1][iD], pD[1][iD], DD[fD], CD[fD]);
        (this._line || 0 !== this._line && 1 === cD) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(DD, CD) {
        this._x.push(+DD), this._y.push(+CD)
      }
    }, nD.prototype = {
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
      point: function(DD, CD) {
        switch (DD = +DD, CD = +CD, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(DD, CD) : this._context.moveTo(DD, CD);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, CD), this._context.lineTo(DD, CD);
            else {
              var cD = this._x * (1 - this._t) + DD * this._t;
              this._context.lineTo(cD, this._y), this._context.lineTo(cD, CD)
            }
        }
        this._x = DD, this._y = CD
      }
    };
    var OD = cD(5947),
      PD = cD(5835),
      HD = cD(5843);

    function UD(DD) {
      return DD[0]
    }

    function xD(DD) {
      return DD[1]
    }

    function qD(DD, CD) {
      var cD = (0, PD.d)(!0),
        ID = null,
        pD = yD,
        iD = null,
        fD = (0, HD.e)(bD);

      function bD(bD) {
        var QD, wD, SD, BD = (bD = (0, OD.e)(bD)).length,
          yD = !1;
        for (null == ID && (iD = pD(SD = fD())), QD = 0; QD <= BD; ++QD) !(QD < BD && cD(wD = bD[QD], QD, bD)) === yD && ((yD = !yD) ? iD.lineStart() : iD.lineEnd()), yD && iD.point(+DD(wD, QD, bD), +CD(wD, QD, bD));
        if (SD) return iD = null, SD + "" || null
      }
      return DD = "function" === typeof DD ? DD : void 0 === DD ? UD : (0, PD.d)(DD), CD = "function" === typeof CD ? CD : void 0 === CD ? xD : (0, PD.d)(CD), bD.x = function(CD) {
        return arguments.length ? (DD = "function" === typeof CD ? CD : (0, PD.d)(+CD), bD) : DD
      }, bD.y = function(DD) {
        return arguments.length ? (CD = "function" === typeof DD ? DD : (0, PD.d)(+DD), bD) : CD
      }, bD.defined = function(DD) {
        return arguments.length ? (cD = "function" === typeof DD ? DD : (0, PD.d)(!!DD), bD) : cD
      }, bD.curve = function(DD) {
        return arguments.length ? (pD = DD, null != ID && (iD = pD(ID)), bD) : pD
      }, bD.context = function(DD) {
        return arguments.length ? (null == DD ? ID = iD = null : iD = pD(ID = DD), bD) : ID
      }, bD
    }

    function JD(DD, CD, cD) {
      var ID = null,
        pD = (0, PD.d)(!0),
        iD = null,
        fD = yD,
        bD = null,
        QD = (0, HD.e)(wD);

      function wD(wD) {
        var SD, BD, yD, MD, tD, ZD = (wD = (0, OD.e)(wD)).length,
          oD = !1,
          vD = new Array(ZD),
          ND = new Array(ZD);
        for (null == iD && (bD = fD(tD = QD())), SD = 0; SD <= ZD; ++SD) {
          if (!(SD < ZD && pD(MD = wD[SD], SD, wD)) === oD)
            if (oD = !oD) BD = SD, bD.areaStart(), bD.lineStart();
            else {
              for (bD.lineEnd(), bD.lineStart(), yD = SD - 1; yD >= BD; --yD) bD.point(vD[yD], ND[yD]);
              bD.lineEnd(), bD.areaEnd()
            } oD && (vD[SD] = +DD(MD, SD, wD), ND[SD] = +CD(MD, SD, wD), bD.point(ID ? +ID(MD, SD, wD) : vD[SD], cD ? +cD(MD, SD, wD) : ND[SD]))
        }
        if (tD) return bD = null, tD + "" || null
      }

      function SD() {
        return qD().defined(pD).curve(fD).context(iD)
      }
      return DD = "function" === typeof DD ? DD : void 0 === DD ? UD : (0, PD.d)(+DD), CD = "function" === typeof CD ? CD : void 0 === CD ? (0, PD.d)(0) : (0, PD.d)(+CD), cD = "function" === typeof cD ? cD : void 0 === cD ? xD : (0, PD.d)(+cD), wD.x = function(CD) {
        return arguments.length ? (DD = "function" === typeof CD ? CD : (0, PD.d)(+CD), ID = null, wD) : DD
      }, wD.x0 = function(CD) {
        return arguments.length ? (DD = "function" === typeof CD ? CD : (0, PD.d)(+CD), wD) : DD
      }, wD.x1 = function(DD) {
        return arguments.length ? (ID = null == DD ? null : "function" === typeof DD ? DD : (0, PD.d)(+DD), wD) : ID
      }, wD.y = function(DD) {
        return arguments.length ? (CD = "function" === typeof DD ? DD : (0, PD.d)(+DD), cD = null, wD) : CD
      }, wD.y0 = function(DD) {
        return arguments.length ? (CD = "function" === typeof DD ? DD : (0, PD.d)(+DD), wD) : CD
      }, wD.y1 = function(DD) {
        return arguments.length ? (cD = null == DD ? null : "function" === typeof DD ? DD : (0, PD.d)(+DD), wD) : cD
      }, wD.lineX0 = wD.lineY0 = function() {
        return SD().x(DD).y(CD)
      }, wD.lineY1 = function() {
        return SD().x(DD).y(cD)
      }, wD.lineX1 = function() {
        return SD().x(ID).y(CD)
      }, wD.defined = function(DD) {
        return arguments.length ? (pD = "function" === typeof DD ? DD : (0, PD.d)(!!DD), wD) : pD
      }, wD.curve = function(DD) {
        return arguments.length ? (fD = DD, null != iD && (bD = fD(iD)), wD) : fD
      }, wD.context = function(DD) {
        return arguments.length ? (null == DD ? iD = bD = null : bD = fD(iD = DD), wD) : iD
      }, wD
    }
    var KD = cD(5783),
      aD = cD.n(KD),
      VD = cD(5032),
      zD = cD.n(VD),
      jD = cD(4841),
      lD = cD(5208),
      LD = cD(5185),
      TD = cD(4927);

    function GD(DD) {
      return GD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, GD(DD)
    }

    function RD() {
      return RD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, RD.apply(this, arguments)
    }

    function kD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function dD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? kD(Object(cD), !0).forEach((function(CD) {
          YD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : kD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function YD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != GD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != GD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == GD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var WD = {
        curveBasisClosed: function(DD) {
          return new bD(DD)
        },
        curveBasisOpen: function(DD) {
          return new QD(DD)
        },
        curveBasis: function(DD) {
          return new fD(DD)
        },
        curveBumpX: function(DD) {
          return new wD(DD, !0)
        },
        curveBumpY: function(DD) {
          return new wD(DD, !1)
        },
        curveLinearClosed: function(DD) {
          return new SD(DD)
        },
        curveLinear: yD,
        curveMonotoneX: function(DD) {
          return new vD(DD)
        },
        curveMonotoneY: function(DD) {
          return new ND(DD)
        },
        curveNatural: function(DD) {
          return new XD(DD)
        },
        curveStep: function(DD) {
          return new nD(DD, .5)
        },
        curveStepAfter: function(DD) {
          return new nD(DD, 1)
        },
        curveStepBefore: function(DD) {
          return new nD(DD, 0)
        }
      },
      sD = function(DD) {
        return DD.x === +DD.x && DD.y === +DD.y
      },
      ED = function(DD) {
        return DD.x
      },
      eD = function(DD) {
        return DD.y
      },
      uD = function(DD) {
        var CD, cD = DD.type,
          ID = void 0 === cD ? "linear" : cD,
          pD = DD.points,
          iD = void 0 === pD ? [] : pD,
          fD = DD.baseLine,
          bD = DD.layout,
          QD = DD.connectNulls,
          wD = void 0 !== QD && QD,
          SD = function(DD, CD) {
            if (zD()(DD)) return DD;
            var cD = "curve".concat(aD()(DD));
            return "curveMonotone" !== cD && "curveBump" !== cD || !CD ? WD[cD] || yD : WD["".concat(cD).concat("vertical" === CD ? "Y" : "X")]
          }(ID, bD),
          BD = wD ? iD.filter((function(DD) {
            return sD(DD)
          })) : iD;
        if (Array.isArray(fD)) {
          var MD = wD ? fD.filter((function(DD) {
              return sD(DD)
            })) : fD,
            tD = BD.map((function(DD, CD) {
              return dD(dD({}, DD), {}, {
                base: MD[CD]
              })
            }));
          return (CD = "vertical" === bD ? JD().y(eD).x1(ED).x0((function(DD) {
            return DD.base.x
          })) : JD().x(ED).y1(eD).y0((function(DD) {
            return DD.base.y
          }))).defined(sD).curve(SD), CD(tD)
        }
        return (CD = "vertical" === bD && (0, TD.G)(fD) ? JD().y(eD).x1(ED).x0(fD) : (0, TD.G)(fD) ? JD().x(ED).y1(eD).y0(fD) : qD().x(ED).y(eD)).defined(sD).curve(SD), CD(BD)
      },
      hD = function(DD) {
        var CD = DD.className,
          cD = DD.points,
          pD = DD.path,
          iD = DD.pathRef;
        if ((!cD || !cD.length) && !pD) return null;
        var fD = cD && cD.length ? uD(DD) : pD;
        return ID.createElement("path", RD({}, (0, LD.b)(DD, !1), (0, lD.m)(DD), {
          className: (0, jD.e)("recharts-curve", CD),
          d: fD,
          ref: iD
        }))
      }
  },
  5849: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => QD
    });
    var ID = cD(53),
      pD = cD(4841),
      iD = cD(5208),
      fD = cD(5185);

    function bD() {
      return bD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, bD.apply(this, arguments)
    }
    var QD = function(DD) {
      var CD = DD.cx,
        cD = DD.cy,
        QD = DD.r,
        wD = DD.className,
        SD = (0, pD.e)("recharts-dot", wD);
      return CD === +CD && cD === +cD && QD === +QD ? ID.createElement("circle", bD({}, (0, fD.b)(DD, !1), (0, iD.m)(DD), {
        className: SD,
        cx: CD,
        cy: cD,
        r: QD
      })) : null
    }
  },
  5858: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => vD,
      d: () => ZD
    });
    var ID = cD(53),
      pD = cD(4841),
      iD = cD(5860),
      fD = cD(5185);

    function bD(DD) {
      return bD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, bD(DD)
    }

    function QD() {
      return QD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, QD.apply(this, arguments)
    }

    function wD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return SD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return SD(DD, CD)
      }(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function SD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function BD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function yD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? BD(Object(cD), !0).forEach((function(CD) {
          MD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : BD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function MD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != bD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != bD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == bD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var tD = function(DD, CD, cD, ID, pD) {
        var iD, fD = Math.min(Math.abs(cD) / 2, Math.abs(ID) / 2),
          bD = ID >= 0 ? 1 : -1,
          QD = cD >= 0 ? 1 : -1,
          wD = ID >= 0 && cD >= 0 || ID < 0 && cD < 0 ? 1 : 0;
        if (fD > 0 && pD instanceof Array) {
          for (var SD = [0, 0, 0, 0], BD = 0; BD < 4; BD++) SD[BD] = pD[BD] > fD ? fD : pD[BD];
          iD = "M".concat(DD, ",").concat(CD + bD * SD[0]), SD[0] > 0 && (iD += "A ".concat(SD[0], ",").concat(SD[0], ",0,0,").concat(wD, ",").concat(DD + QD * SD[0], ",").concat(CD)), iD += "L ".concat(DD + cD - QD * SD[1], ",").concat(CD), SD[1] > 0 && (iD += "A ".concat(SD[1], ",").concat(SD[1], ",0,0,").concat(wD, ",\n        ").concat(DD + cD, ",").concat(CD + bD * SD[1])), iD += "L ".concat(DD + cD, ",").concat(CD + ID - bD * SD[2]), SD[2] > 0 && (iD += "A ".concat(SD[2], ",").concat(SD[2], ",0,0,").concat(wD, ",\n        ").concat(DD + cD - QD * SD[2], ",").concat(CD + ID)), iD += "L ".concat(DD + QD * SD[3], ",").concat(CD + ID), SD[3] > 0 && (iD += "A ".concat(SD[3], ",").concat(SD[3], ",0,0,").concat(wD, ",\n        ").concat(DD, ",").concat(CD + ID - bD * SD[3])), iD += "Z"
        } else if (fD > 0 && pD === +pD && pD > 0) {
          var yD = Math.min(fD, pD);
          iD = "M ".concat(DD, ",").concat(CD + bD * yD, "\n            A ").concat(yD, ",").concat(yD, ",0,0,").concat(wD, ",").concat(DD + QD * yD, ",").concat(CD, "\n            L ").concat(DD + cD - QD * yD, ",").concat(CD, "\n            A ").concat(yD, ",").concat(yD, ",0,0,").concat(wD, ",").concat(DD + cD, ",").concat(CD + bD * yD, "\n            L ").concat(DD + cD, ",").concat(CD + ID - bD * yD, "\n            A ").concat(yD, ",").concat(yD, ",0,0,").concat(wD, ",").concat(DD + cD - QD * yD, ",").concat(CD + ID, "\n            L ").concat(DD + QD * yD, ",").concat(CD + ID, "\n            A ").concat(yD, ",").concat(yD, ",0,0,").concat(wD, ",").concat(DD, ",").concat(CD + ID - bD * yD, " Z")
        } else iD = "M ".concat(DD, ",").concat(CD, " h ").concat(cD, " v ").concat(ID, " h ").concat(-cD, " Z");
        return iD
      },
      ZD = function(DD, CD) {
        if (!DD || !CD) return !1;
        var cD = DD.x,
          ID = DD.y,
          pD = CD.x,
          iD = CD.y,
          fD = CD.width,
          bD = CD.height;
        if (Math.abs(fD) > 0 && Math.abs(bD) > 0) {
          var QD = Math.min(pD, pD + fD),
            wD = Math.max(pD, pD + fD),
            SD = Math.min(iD, iD + bD),
            BD = Math.max(iD, iD + bD);
          return cD >= QD && cD <= wD && ID >= SD && ID <= BD
        }
        return !1
      },
      oD = {
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
      vD = function(DD) {
        var CD = yD(yD({}, oD), DD),
          cD = (0, ID.useRef)(),
          bD = wD((0, ID.useState)(-1), 2),
          SD = bD[0],
          BD = bD[1];
        (0, ID.useEffect)((function() {
          if (cD.current && cD.current.getTotalLength) try {
            var DD = cD.current.getTotalLength();
            DD && BD(DD)
          } catch (CD) {}
        }), []);
        var MD = CD.x,
          ZD = CD.y,
          vD = CD.width,
          ND = CD.height,
          gD = CD.radius,
          XD = CD.className,
          mD = CD.animationEasing,
          nD = CD.animationDuration,
          OD = CD.animationBegin,
          PD = CD.isAnimationActive,
          HD = CD.isUpdateAnimationActive;
        if (MD !== +MD || ZD !== +ZD || vD !== +vD || ND !== +ND || 0 === vD || 0 === ND) return null;
        var UD = (0, pD.e)("recharts-rectangle", XD);
        return HD ? ID.createElement(iD.d, {
          canBegin: SD > 0,
          from: {
            width: vD,
            height: ND,
            x: MD,
            y: ZD
          },
          to: {
            width: vD,
            height: ND,
            x: MD,
            y: ZD
          },
          duration: nD,
          animationEasing: mD,
          isActive: HD
        }, (function(DD) {
          var pD = DD.width,
            bD = DD.height,
            wD = DD.x,
            BD = DD.y;
          return ID.createElement(iD.d, {
            canBegin: SD > 0,
            from: "0px ".concat(-1 === SD ? 1 : SD, "px"),
            to: "".concat(SD, "px 0px"),
            attributeName: "strokeDasharray",
            VM: OD,
            duration: nD,
            isActive: PD,
            easing: mD
          }, ID.createElement("path", QD({}, (0, fD.b)(CD, !0), {
            className: UD,
            d: tD(wD, BD, pD, bD, gD),
            ref: cD
          })))
        })) : ID.createElement("path", QD({}, (0, fD.b)(CD, !0), {
          className: UD,
          d: tD(MD, ZD, vD, ND, gD)
        }))
      }
  },
  6045: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => oD
    });
    var ID = cD(53),
      pD = cD(4841),
      iD = cD(5185),
      fD = cD(5951),
      bD = cD(4927);

    function QD(DD) {
      return QD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, QD(DD)
    }

    function wD() {
      return wD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, wD.apply(this, arguments)
    }

    function SD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function BD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? SD(Object(cD), !0).forEach((function(CD) {
          yD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : SD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function yD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != QD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != QD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == QD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var MD = function(DD) {
        var CD = DD.cx,
          cD = DD.cy,
          ID = DD.radius,
          pD = DD.angle,
          iD = DD.sign,
          bD = DD.isExternal,
          QD = DD.cornerRadius,
          wD = DD.cornerIsExternal,
          SD = QD * (bD ? 1 : -1) + ID,
          BD = Math.asin(QD / SD) / fD.b,
          yD = wD ? pD : pD + iD * BD,
          MD = wD ? pD - iD * BD : pD;
        return {
          center: (0, fD.h)(CD, cD, SD, yD),
          circleTangency: (0, fD.h)(CD, cD, ID, yD),
          lineTangency: (0, fD.h)(CD, cD, SD * Math.cos(BD * fD.b), MD),
          fi: BD
        }
      },
      tD = function(DD) {
        var CD = DD.cx,
          cD = DD.cy,
          ID = DD.innerRadius,
          pD = DD.outerRadius,
          iD = DD.startAngle,
          QD = function(DD, CD) {
            return (0, bD.K)(CD - DD) * Math.min(Math.abs(CD - DD), 359.999)
          }(iD, DD.endAngle),
          wD = iD + QD,
          SD = (0, fD.h)(CD, cD, pD, iD),
          BD = (0, fD.h)(CD, cD, pD, wD),
          yD = "M ".concat(SD.x, ",").concat(SD.y, "\n    A ").concat(pD, ",").concat(pD, ",0,\n    ").concat(+(Math.abs(QD) > 180), ",").concat(+(iD > wD), ",\n    ").concat(BD.x, ",").concat(BD.y, "\n  ");
        if (ID > 0) {
          var MD = (0, fD.h)(CD, cD, ID, iD),
            tD = (0, fD.h)(CD, cD, ID, wD);
          yD += "L ".concat(tD.x, ",").concat(tD.y, "\n            A ").concat(ID, ",").concat(ID, ",0,\n            ").concat(+(Math.abs(QD) > 180), ",").concat(+(iD <= wD), ",\n            ").concat(MD.x, ",").concat(MD.y, " Z")
        } else yD += "L ".concat(CD, ",").concat(cD, " Z");
        return yD
      },
      ZD = {
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
      oD = function(DD) {
        var CD = BD(BD({}, ZD), DD),
          cD = CD.cx,
          fD = CD.cy,
          QD = CD.innerRadius,
          SD = CD.outerRadius,
          yD = CD.cornerRadius,
          oD = CD.forceCornerRadius,
          vD = CD.cornerIsExternal,
          ND = CD.startAngle,
          gD = CD.endAngle,
          XD = CD.className;
        if (SD < QD || ND === gD) return null;
        var mD, nD = (0, pD.e)("recharts-sector", XD),
          OD = SD - QD,
          PD = (0, bD.p)(yD, OD, 0, !0);
        return mD = PD > 0 && Math.abs(ND - gD) < 360 ? function(DD) {
          var CD = DD.cx,
            cD = DD.cy,
            ID = DD.innerRadius,
            pD = DD.outerRadius,
            iD = DD.cornerRadius,
            fD = DD.forceCornerRadius,
            QD = DD.cornerIsExternal,
            wD = DD.startAngle,
            SD = DD.endAngle,
            BD = (0, bD.K)(SD - wD),
            yD = MD({
              cx: CD,
              cy: cD,
              radius: pD,
              angle: wD,
              sign: BD,
              cornerRadius: iD,
              cornerIsExternal: QD
            }),
            ZD = yD.circleTangency,
            oD = yD.lineTangency,
            vD = yD.fi,
            ND = MD({
              cx: CD,
              cy: cD,
              radius: pD,
              angle: SD,
              sign: -BD,
              cornerRadius: iD,
              cornerIsExternal: QD
            }),
            gD = ND.circleTangency,
            XD = ND.lineTangency,
            mD = ND.fi,
            nD = QD ? Math.abs(wD - SD) : Math.abs(wD - SD) - vD - mD;
          if (nD < 0) return fD ? "M ".concat(oD.x, ",").concat(oD.y, "\n        a").concat(iD, ",").concat(iD, ",0,0,1,").concat(2 * iD, ",0\n        a").concat(iD, ",").concat(iD, ",0,0,1,").concat(2 * -iD, ",0\n      ") : tD({
            cx: CD,
            cy: cD,
            innerRadius: ID,
            outerRadius: pD,
            startAngle: wD,
            endAngle: SD
          });
          var OD = "M ".concat(oD.x, ",").concat(oD.y, "\n    A").concat(iD, ",").concat(iD, ",0,0,").concat(+(BD < 0), ",").concat(ZD.x, ",").concat(ZD.y, "\n    A").concat(pD, ",").concat(pD, ",0,").concat(+(nD > 180), ",").concat(+(BD < 0), ",").concat(gD.x, ",").concat(gD.y, "\n    A").concat(iD, ",").concat(iD, ",0,0,").concat(+(BD < 0), ",").concat(XD.x, ",").concat(XD.y, "\n  ");
          if (ID > 0) {
            var PD = MD({
                cx: CD,
                cy: cD,
                radius: ID,
                angle: wD,
                sign: BD,
                isExternal: !0,
                cornerRadius: iD,
                cornerIsExternal: QD
              }),
              HD = PD.circleTangency,
              UD = PD.lineTangency,
              xD = PD.fi,
              qD = MD({
                cx: CD,
                cy: cD,
                radius: ID,
                angle: SD,
                sign: -BD,
                isExternal: !0,
                cornerRadius: iD,
                cornerIsExternal: QD
              }),
              JD = qD.circleTangency,
              KD = qD.lineTangency,
              aD = qD.fi,
              VD = QD ? Math.abs(wD - SD) : Math.abs(wD - SD) - xD - aD;
            if (VD < 0 && 0 === iD) return "".concat(OD, "L").concat(CD, ",").concat(cD, "Z");
            OD += "L".concat(KD.x, ",").concat(KD.y, "\n      A").concat(iD, ",").concat(iD, ",0,0,").concat(+(BD < 0), ",").concat(JD.x, ",").concat(JD.y, "\n      A").concat(ID, ",").concat(ID, ",0,").concat(+(VD > 180), ",").concat(+(BD > 0), ",").concat(HD.x, ",").concat(HD.y, "\n      A").concat(iD, ",").concat(iD, ",0,0,").concat(+(BD < 0), ",").concat(UD.x, ",").concat(UD.y, "Z")
          } else OD += "L".concat(CD, ",").concat(cD, "Z");
          return OD
        }({
          cx: cD,
          cy: fD,
          innerRadius: QD,
          outerRadius: SD,
          cornerRadius: Math.min(PD, OD / 2),
          forceCornerRadius: oD,
          cornerIsExternal: vD,
          startAngle: ND,
          endAngle: gD
        }) : tD({
          cx: cD,
          cy: fD,
          innerRadius: QD,
          outerRadius: SD,
          startAngle: ND,
          endAngle: gD
        }), ID.createElement("path", wD({}, (0, iD.b)(CD, !0), {
          className: nD,
          d: mD,
          role: "img"
        }))
      }
  },
  5780: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => dD
    });
    var ID = cD(53),
      pD = cD(5783),
      iD = cD.n(pD);
    Math.abs, Math.atan2;
    const fD = Math.cos,
      bD = (Math.max, Math.min, Math.sin),
      QD = Math.sqrt,
      wD = Math.PI,
      SD = 2 * wD;
    const BD = {
        draw(DD, CD) {
          const cD = QD(CD / wD);
          DD.moveTo(cD, 0), DD.arc(0, 0, cD, 0, SD)
        }
      },
      yD = {
        draw(DD, CD) {
          const cD = QD(CD / 5) / 2;
          DD.moveTo(-3 * cD, -cD), DD.lineTo(-cD, -cD), DD.lineTo(-cD, -3 * cD), DD.lineTo(cD, -3 * cD), DD.lineTo(cD, -cD), DD.lineTo(3 * cD, -cD), DD.lineTo(3 * cD, cD), DD.lineTo(cD, cD), DD.lineTo(cD, 3 * cD), DD.lineTo(-cD, 3 * cD), DD.lineTo(-cD, cD), DD.lineTo(-3 * cD, cD), DD.closePath()
        }
      },
      MD = QD(1 / 3),
      tD = 2 * MD,
      ZD = {
        draw(DD, CD) {
          const cD = QD(CD / tD),
            ID = cD * MD;
          DD.moveTo(0, -cD), DD.lineTo(ID, 0), DD.lineTo(0, cD), DD.lineTo(-ID, 0), DD.closePath()
        }
      },
      oD = {
        draw(DD, CD) {
          const cD = QD(CD),
            ID = -cD / 2;
          DD.rect(ID, ID, cD, cD)
        }
      },
      vD = bD(wD / 10) / bD(7 * wD / 10),
      ND = bD(SD / 10) * vD,
      gD = -fD(SD / 10) * vD,
      XD = {
        draw(DD, CD) {
          const cD = QD(.8908130915292852 * CD),
            ID = ND * cD,
            pD = gD * cD;
          DD.moveTo(0, -cD), DD.lineTo(ID, pD);
          for (let iD = 1; iD < 5; ++iD) {
            const CD = SD * iD / 5,
              QD = fD(CD),
              wD = bD(CD);
            DD.lineTo(wD * cD, -QD * cD), DD.lineTo(QD * ID - wD * pD, wD * ID + QD * pD)
          }
          DD.closePath()
        }
      },
      mD = QD(3),
      nD = {
        draw(DD, CD) {
          const cD = -QD(CD / (3 * mD));
          DD.moveTo(0, 2 * cD), DD.lineTo(-mD * cD, -cD), DD.lineTo(mD * cD, -cD), DD.closePath()
        }
      },
      OD = -.5,
      PD = QD(3) / 2,
      HD = 1 / QD(12),
      UD = 3 * (HD / 2 + 1),
      xD = {
        draw(DD, CD) {
          const cD = QD(CD / UD),
            ID = cD / 2,
            pD = cD * HD,
            iD = ID,
            fD = cD * HD + cD,
            bD = -iD,
            wD = fD;
          DD.moveTo(ID, pD), DD.lineTo(iD, fD), DD.lineTo(bD, wD), DD.lineTo(OD * ID - PD * pD, PD * ID + OD * pD), DD.lineTo(OD * iD - PD * fD, PD * iD + OD * fD), DD.lineTo(OD * bD - PD * wD, PD * bD + OD * wD), DD.lineTo(OD * ID + PD * pD, OD * pD - PD * ID), DD.lineTo(OD * iD + PD * fD, OD * fD - PD * iD), DD.lineTo(OD * bD + PD * wD, OD * wD - PD * bD), DD.closePath()
        }
      };
    var qD = cD(5835),
      JD = cD(5843);
    QD(3), QD(3);
    var KD = cD(4841),
      aD = cD(5185);

    function VD(DD) {
      return VD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, VD(DD)
    }
    var zD = ["type", "size", "sizeType"];

    function jD() {
      return jD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, jD.apply(this, arguments)
    }

    function lD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function LD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? lD(Object(cD), !0).forEach((function(CD) {
          TD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : lD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function TD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != VD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != VD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == VD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function GD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }
    var RD = {
        symbolCircle: BD,
        symbolCross: yD,
        symbolDiamond: ZD,
        symbolSquare: oD,
        symbolStar: XD,
        symbolTriangle: nD,
        symbolWye: xD
      },
      kD = Math.PI / 180,
      dD = function(DD) {
        var CD = DD.type,
          cD = void 0 === CD ? "circle" : CD,
          pD = DD.size,
          fD = void 0 === pD ? 64 : pD,
          bD = DD.sizeType,
          QD = void 0 === bD ? "area" : bD,
          wD = LD(LD({}, GD(DD, zD)), {}, {
            type: cD,
            size: fD,
            sizeType: QD
          }),
          SD = wD.className,
          yD = wD.cx,
          MD = wD.cy,
          tD = (0, aD.b)(wD, !0);
        return yD === +yD && MD === +MD && fD === +fD ? ID.createElement("path", jD({}, tD, {
          className: (0, KD.e)("recharts-symbols", SD),
          transform: "translate(".concat(yD, ", ").concat(MD, ")"),
          d: function() {
            var DD = function(DD) {
                var CD = "symbol".concat(iD()(DD));
                return RD[CD] || BD
              }(cD),
              CD = function(DD, CD) {
                let cD = null,
                  ID = (0, JD.e)(pD);

                function pD() {
                  let pD;
                  if (cD || (cD = pD = ID()), DD.apply(this, arguments).draw(cD, +CD.apply(this, arguments)), pD) return cD = null, pD + "" || null
                }
                return DD = "function" === typeof DD ? DD : (0, qD.d)(DD || BD), CD = "function" === typeof CD ? CD : (0, qD.d)(void 0 === CD ? 64 : +CD), pD.type = function(CD) {
                  return arguments.length ? (DD = "function" === typeof CD ? CD : (0, qD.d)(CD), pD) : DD
                }, pD.size = function(DD) {
                  return arguments.length ? (CD = "function" === typeof DD ? DD : (0, qD.d)(+DD), pD) : CD
                }, pD.context = function(DD) {
                  return arguments.length ? (cD = null == DD ? null : DD, pD) : cD
                }, pD
              }().type(DD).size(function(DD, CD, cD) {
                if ("area" === CD) return DD;
                switch (cD) {
                  case "cross":
                    return 5 * DD * DD / 9;
                  case "diamond":
                    return .5 * DD * DD / Math.sqrt(3);
                  case "square":
                    return DD * DD;
                  case "star":
                    var ID = 18 * kD;
                    return 1.25 * DD * DD * (Math.tan(ID) - Math.tan(2 * ID) * Math.pow(Math.tan(ID), 2));
                  case "triangle":
                    return Math.sqrt(3) * DD * DD / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * DD * DD / 8;
                  default:
                    return Math.PI * DD * DD / 4
                }
              }(fD, QD, cD));
            return CD()
          }()
        })) : null
      };
    dD.registerSymbol = function(DD, CD) {
      RD["symbol".concat(iD()(DD))] = CD
    }
  },
  6012: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => TD,
      g: () => sD,
      j: () => GD,
      k: () => RD,
      l: () => kD
    });
    var ID = cD(53),
      pD = cD(5032),
      iD = cD.n(pD),
      fD = cD(6021),
      bD = cD.n(fD),
      QD = cD(6037),
      wD = cD.n(QD),
      SD = cD(5927),
      BD = cD.n(SD),
      yD = cD(5858),
      MD = cD(4841),
      tD = cD(5860),
      ZD = cD(5185);

    function oD(DD) {
      return oD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, oD(DD)
    }

    function vD() {
      return vD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD) Object.prototype.hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, vD.apply(this, arguments)
    }

    function ND(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return gD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return gD(DD, CD)
      }(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function XD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function mD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? XD(Object(cD), !0).forEach((function(CD) {
          nD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : XD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function nD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != oD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != oD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == oD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var OD = function(DD, CD, cD, ID, pD) {
        var iD, fD = cD - ID;
        return iD = "M ".concat(DD, ",").concat(CD), iD += "L ".concat(DD + cD, ",").concat(CD), iD += "L ".concat(DD + cD - fD / 2, ",").concat(CD + pD), iD += "L ".concat(DD + cD - fD / 2 - ID, ",").concat(CD + pD), iD += "L ".concat(DD, ",").concat(CD, " Z")
      },
      PD = {
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
      HD = function(DD) {
        var CD = mD(mD({}, PD), DD),
          cD = (0, ID.useRef)(),
          pD = ND((0, ID.useState)(-1), 2),
          iD = pD[0],
          fD = pD[1];
        (0, ID.useEffect)((function() {
          if (cD.current && cD.current.getTotalLength) try {
            var DD = cD.current.getTotalLength();
            DD && fD(DD)
          } catch (CD) {}
        }), []);
        var bD = CD.x,
          QD = CD.y,
          wD = CD.upperWidth,
          SD = CD.lowerWidth,
          BD = CD.height,
          yD = CD.className,
          oD = CD.animationEasing,
          gD = CD.animationDuration,
          XD = CD.animationBegin,
          nD = CD.isUpdateAnimationActive;
        if (bD !== +bD || QD !== +QD || wD !== +wD || SD !== +SD || BD !== +BD || 0 === wD && 0 === SD || 0 === BD) return null;
        var HD = (0, MD.e)("recharts-trapezoid", yD);
        return nD ? ID.createElement(tD.d, {
          canBegin: iD > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: BD,
            x: bD,
            y: QD
          },
          to: {
            upperWidth: wD,
            lowerWidth: SD,
            height: BD,
            x: bD,
            y: QD
          },
          duration: gD,
          animationEasing: oD,
          isActive: nD
        }, (function(DD) {
          var pD = DD.upperWidth,
            fD = DD.lowerWidth,
            bD = DD.height,
            QD = DD.x,
            wD = DD.y;
          return ID.createElement(tD.d, {
            canBegin: iD > 0,
            from: "0px ".concat(-1 === iD ? 1 : iD, "px"),
            to: "".concat(iD, "px 0px"),
            attributeName: "strokeDasharray",
            VM: XD,
            duration: gD,
            easing: oD
          }, ID.createElement("path", vD({}, (0, ZD.b)(CD, !0), {
            className: HD,
            d: OD(QD, wD, pD, fD, bD),
            ref: cD
          })))
        })) : ID.createElement("g", null, ID.createElement("path", vD({}, (0, ZD.b)(CD, !0), {
          className: HD,
          d: OD(bD, QD, wD, SD, BD)
        })))
      },
      UD = cD(6045),
      xD = cD(5701),
      qD = cD(5780),
      JD = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function KD(DD) {
      return KD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, KD(DD)
    }

    function aD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function VD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function zD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? VD(Object(cD), !0).forEach((function(CD) {
          jD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : VD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function jD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != KD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != KD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == KD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function lD(DD, CD) {
      return zD(zD({}, CD), DD)
    }

    function LD(DD) {
      var CD = DD.shapeType,
        cD = DD.elementProps;
      switch (CD) {
        case "rectangle":
          return ID.createElement(yD.b, cD);
        case "trapezoid":
          return ID.createElement(HD, cD);
        case "sector":
          return ID.createElement(UD.b, cD);
        case "symbols":
          if (function(DD) {
              return "symbols" === DD
            }(CD)) return ID.createElement(qD.b, cD);
          break;
        default:
          return null
      }
    }

    function TD(DD) {
      var CD, cD = DD.option,
        pD = DD.shapeType,
        fD = DD.propTransformer,
        QD = void 0 === fD ? lD : fD,
        SD = DD.activeClassName,
        BD = void 0 === SD ? "recharts-active-shape" : SD,
        yD = DD.isActive,
        MD = aD(DD, JD);
      if ((0, ID.isValidElement)(cD)) CD = (0, ID.cloneElement)(cD, zD(zD({}, MD), function(DD) {
        return (0, ID.isValidElement)(DD) ? DD.props : DD
      }(cD)));
      else if (iD()(cD)) CD = cD(MD);
      else if (bD()(cD) && !wD()(cD)) {
        var tD = QD(cD, MD);
        CD = ID.createElement(LD, {
          shapeType: pD,
          elementProps: tD
        })
      } else {
        var ZD = MD;
        CD = ID.createElement(LD, {
          shapeType: pD,
          elementProps: ZD
        })
      }
      return yD ? ID.createElement(xD.d, {
        className: BD
      }, CD) : CD
    }

    function GD(DD, CD) {
      return null != CD && "trapezoids" in DD.props
    }

    function RD(DD, CD) {
      return null != CD && "sectors" in DD.props
    }

    function kD(DD, CD) {
      return null != CD && "points" in DD.props
    }

    function dD(DD, CD) {
      var cD, ID, pD = DD.x === (null === CD || void 0 === CD || null === (cD = CD.labelViewBox) || void 0 === cD ? void 0 : cD.x) || DD.x === CD.x,
        iD = DD.y === (null === CD || void 0 === CD || null === (ID = CD.labelViewBox) || void 0 === ID ? void 0 : ID.y) || DD.y === CD.y;
      return pD && iD
    }

    function YD(DD, CD) {
      var cD = DD.endAngle === CD.endAngle,
        ID = DD.startAngle === CD.startAngle;
      return cD && ID
    }

    function WD(DD, CD) {
      var cD = DD.x === CD.x,
        ID = DD.y === CD.y,
        pD = DD.z === CD.z;
      return cD && ID && pD
    }

    function sD(DD) {
      var CD = DD.activeTooltipItem,
        cD = DD.graphicalItem,
        ID = DD.itemData,
        pD = function(DD, CD) {
          var cD;
          return GD(DD, CD) ? cD = "trapezoids" : RD(DD, CD) ? cD = "sectors" : kD(DD, CD) && (cD = "points"), cD
        }(cD, CD),
        iD = function(DD, CD) {
          var cD, ID;
          return GD(DD, CD) ? null === (cD = CD.tooltipPayload) || void 0 === cD || null === (cD = cD[0]) || void 0 === cD || null === (cD = cD.payload) || void 0 === cD ? void 0 : cD.payload : RD(DD, CD) ? null === (ID = CD.tooltipPayload) || void 0 === ID || null === (ID = ID[0]) || void 0 === ID || null === (ID = ID.payload) || void 0 === ID ? void 0 : ID.payload : kD(DD, CD) ? CD.payload : {}
        }(cD, CD),
        fD = ID.filter((function(DD, ID) {
          var fD = BD()(iD, DD),
            bD = cD.props[pD].filter((function(DD) {
              var ID = function(DD, CD) {
                var cD;
                return GD(DD, CD) ? cD = dD : RD(DD, CD) ? cD = YD : kD(DD, CD) && (cD = WD), cD
              }(cD, CD);
              return ID(DD, CD)
            })),
            QD = cD.props[pD].indexOf(bD[bD.length - 1]);
          return fD && ID === QD
        }));
      return ID.indexOf(fD[fD.length - 1])
    }
  },
  5959: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => mD,
      g: () => vD,
      i: () => nD,
      j: () => gD,
      n: () => ND
    });
    var ID = cD(5968),
      pD = cD.n(ID),
      iD = cD(5975),
      fD = cD.n(iD),
      bD = cD(5873),
      QD = cD(5185),
      wD = cD(4927),
      SD = cD(5987);

    function BD(DD) {
      return BD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, BD(DD)
    }

    function yD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, oD(ID.key), ID)
      }
    }

    function MD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function tD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? MD(Object(cD), !0).forEach((function(CD) {
          ZD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : MD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function ZD(DD, CD, cD) {
      return (CD = oD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function oD(DD) {
      var CD = function(DD, CD) {
        if ("object" != BD(DD) || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != BD(ID)) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == BD(CD) ? CD : CD + ""
    }
    var vD = function(DD, CD, cD, ID, pD) {
        var iD = DD.width,
          fD = DD.height,
          BD = DD.layout,
          yD = DD.children,
          MD = Object.keys(CD),
          oD = {
            left: cD.left,
            leftMirror: cD.left,
            right: iD - cD.right,
            rightMirror: iD - cD.right,
            top: cD.top,
            topMirror: cD.top,
            bottom: fD - cD.bottom,
            bottomMirror: fD - cD.bottom
          },
          vD = !!(0, QD.j)(yD, SD.b);
        return MD.reduce((function(iD, fD) {
          var QD, SD, yD, MD, ND, gD = CD[fD],
            XD = gD.orientation,
            mD = gD.domain,
            nD = gD.padding,
            OD = void 0 === nD ? {} : nD,
            PD = gD.mirror,
            HD = gD.reversed,
            UD = "".concat(XD).concat(PD ? "Mirror" : "");
          if ("number" === gD.type && ("gap" === gD.padding || "no-gap" === gD.padding)) {
            var xD = mD[1] - mD[0],
              qD = 1 / 0,
              JD = gD.categoricalDomain.sort(wD.d);
            if (JD.forEach((function(DD, CD) {
                CD > 0 && (qD = Math.min((DD || 0) - (JD[CD - 1] || 0), qD))
              })), Number.isFinite(qD)) {
              var KD = qD / xD,
                aD = "vertical" === gD.layout ? cD.height : cD.width;
              if ("gap" === gD.padding && (QD = KD * aD / 2), "no-gap" === gD.padding) {
                var VD = (0, wD.p)(DD.barCategoryGap, KD * aD),
                  zD = KD * aD / 2;
                QD = zD - VD - (zD - VD) / aD * VD
              }
            }
          }
          SD = "xAxis" === ID ? [cD.left + (OD.left || 0) + (QD || 0), cD.left + cD.width - (OD.right || 0) - (QD || 0)] : "yAxis" === ID ? "horizontal" === BD ? [cD.top + cD.height - (OD.bottom || 0), cD.top + (OD.top || 0)] : [cD.top + (OD.top || 0) + (QD || 0), cD.top + cD.height - (OD.bottom || 0) - (QD || 0)] : gD.range, HD && (SD = [SD[1], SD[0]]);
          var jD = (0, bD.Z)(gD, pD, vD),
            lD = jD.scale,
            LD = jD.realScaleType;
          lD.domain(mD).range(SD), (0, bD.h)(lD);
          var TD = (0, bD.N)(lD, tD(tD({}, gD), {}, {
            realScaleType: LD
          }));
          "xAxis" === ID ? (ND = "top" === XD && !PD || "bottom" === XD && PD, yD = cD.left, MD = oD[UD] - ND * gD.height) : "yAxis" === ID && (ND = "left" === XD && !PD || "right" === XD && PD, yD = oD[UD] - ND * gD.width, MD = cD.top);
          var GD = tD(tD(tD({}, gD), TD), {}, {
            realScaleType: LD,
            x: yD,
            y: MD,
            scale: lD,
            width: "xAxis" === ID ? cD.width : gD.width,
            height: "yAxis" === ID ? cD.height : gD.height
          });
          return GD.bandSize = (0, bD.l)(GD, TD), gD.hide || "xAxis" !== ID ? gD.hide || (oD[UD] += (ND ? -1 : 1) * GD.width) : oD[UD] += (ND ? -1 : 1) * GD.height, tD(tD({}, iD), {}, ZD({}, fD, GD))
        }), {})
      },
      ND = function(DD, CD) {
        var cD = DD.x,
          ID = DD.y,
          pD = CD.x,
          iD = CD.y;
        return {
          x: Math.min(cD, pD),
          y: Math.min(ID, iD),
          width: Math.abs(pD - cD),
          height: Math.abs(iD - ID)
        }
      },
      gD = function(DD) {
        var CD = DD.x1,
          cD = DD.y1,
          ID = DD.x2,
          pD = DD.y2;
        return ND({
          x: CD,
          y: cD
        }, {
          x: ID,
          y: pD
        })
      },
      XD = function() {
        function DD(CD) {
          ! function(DD, CD) {
            if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
          }(this, DD), this.scale = CD
        }
        return CD = DD, cD = [{
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
            var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              cD = CD.bandAware,
              ID = CD.position;
            if (void 0 !== DD) {
              if (ID) switch (ID) {
                case "start":
                default:
                  return this.scale(DD);
                case "middle":
                  var pD = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(DD) + pD;
                case "end":
                  var iD = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(DD) + iD
              }
              if (cD) {
                var fD = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(DD) + fD
              }
              return this.scale(DD)
            }
          }
        }, {
          key: "isInRange",
          value: function(DD) {
            var CD = this.range(),
              cD = CD[0],
              ID = CD[CD.length - 1];
            return cD <= ID ? DD >= cD && DD <= ID : DD >= ID && DD <= cD
          }
        }], ID = [{
          key: "create",
          value: function(CD) {
            return new DD(CD)
          }
        }], cD && yD(CD.prototype, cD), ID && yD(CD, ID), Object.defineProperty(CD, "prototype", {
          writable: !1
        }), CD;
        var CD, cD, ID
      }();
    ZD(XD, "EPS", 1e-4);
    var mD = function(DD) {
      var CD = Object.keys(DD).reduce((function(CD, cD) {
        return tD(tD({}, CD), {}, ZD({}, cD, XD.create(DD[cD])))
      }), {});
      return tD(tD({}, CD), {}, {
        apply: function(DD) {
          var cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            ID = cD.bandAware,
            iD = cD.position;
          return pD()(DD, (function(DD, cD) {
            return CD[cD].apply(DD, {
              bandAware: ID,
              position: iD
            })
          }))
        },
        isInRange: function(DD) {
          return fD()(DD, (function(DD, cD) {
            return CD[cD].isInRange(DD)
          }))
        }
      })
    };
    var nD = function(DD) {
      var CD = DD.width,
        cD = DD.height,
        ID = function(DD) {
          return (DD % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        pD = ID * Math.PI / 180,
        iD = Math.atan(cD / CD),
        fD = pD > iD && pD < Math.PI - iD ? cD / Math.sin(pD) : CD / Math.cos(pD);
      return Math.abs(fD)
    }
  },
  5873: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => Lf,
      f: () => Vf,
      h: () => uf,
      i: () => sf,
      k: () => hf,
      l: () => Sb,
      n: () => lf,
      q: () => jf,
      r: () => pb,
      t: () => Ib,
      u: () => cb,
      w: () => df,
      x: () => af,
      B: () => Rf,
      C: () => fb,
      D: () => zf,
      G: () => Db,
      H: () => ib,
      K: () => Yf,
      N: () => Cb,
      O: () => yb,
      Q: () => Kf,
      S: () => kf,
      W: () => Bb,
      Y: () => Gf,
      Z: () => Ef,
      bb: () => wb,
      eb: () => rf
    });
    var ID = {};
    cD.r(ID), cD.d(ID, {
      scaleBand: () => pD.c,
      scaleDiverging: () => Si,
      scaleDivergingLog: () => Bi,
      scaleDivergingPow: () => Mi,
      scaleDivergingSqrt: () => ti,
      scaleDivergingSymlog: () => yi,
      scaleIdentity: () => uC,
      scaleImplicit: () => wc.f,
      scaleLinear: () => eC,
      scaleLog: () => pc,
      scaleOrdinal: () => wc.e,
      scalePoint: () => pD.d,
      scalePow: () => tc,
      scaleQuantile: () => Uc,
      scaleQuantize: () => xc,
      scaleRadial: () => vc,
      scaleSequential: () => ci,
      scaleSequentialLog: () => Ii,
      scaleSequentialPow: () => fi,
      scaleSequentialQuantile: () => Qi,
      scaleSequentialSqrt: () => bi,
      scaleSequentialSymlog: () => ii,
      scaleSqrt: () => Zc,
      scaleSymlog: () => Qc,
      scaleThreshold: () => qc,
      scaleTime: () => Ap,
      scaleUtc: () => Fp,
      tickFormat: () => sC
    });
    var pD = cD(5875);
    const iD = Math.sqrt(50),
      fD = Math.sqrt(10),
      bD = Math.sqrt(2);

    function QD(DD, CD, cD) {
      const ID = (CD - DD) / Math.max(0, cD),
        pD = Math.floor(Math.log10(ID)),
        wD = ID / Math.pow(10, pD),
        SD = wD >= iD ? 10 : wD >= fD ? 5 : wD >= bD ? 2 : 1;
      let BD, yD, MD;
      return pD < 0 ? (MD = Math.pow(10, -pD) / SD, BD = Math.round(DD * MD), yD = Math.round(CD * MD), BD / MD < DD && ++BD, yD / MD > CD && --yD, MD = -MD) : (MD = Math.pow(10, pD) * SD, BD = Math.round(DD / MD), yD = Math.round(CD / MD), BD * MD < DD && ++BD, yD * MD > CD && --yD), yD < BD && .5 <= cD && cD < 2 ? QD(DD, CD, 2 * cD) : [BD, yD, MD]
    }

    function wD(DD, CD, cD) {
      if (!((cD = +cD) > 0)) return [];
      if ((DD = +DD) === (CD = +CD)) return [DD];
      const ID = CD < DD,
        [pD, iD, fD] = ID ? QD(CD, DD, cD) : QD(DD, CD, cD);
      if (!(iD >= pD)) return [];
      const bD = iD - pD + 1,
        wD = new Array(bD);
      if (ID)
        if (fD < 0)
          for (let QD = 0; QD < bD; ++QD) wD[QD] = (iD - QD) / -fD;
        else
          for (let QD = 0; QD < bD; ++QD) wD[QD] = (iD - QD) * fD;
      else if (fD < 0)
        for (let QD = 0; QD < bD; ++QD) wD[QD] = (pD + QD) / -fD;
      else
        for (let QD = 0; QD < bD; ++QD) wD[QD] = (pD + QD) * fD;
      return wD
    }

    function SD(DD, CD, cD) {
      return QD(DD = +DD, CD = +CD, cD = +cD)[2]
    }

    function BD(DD, CD, cD) {
      cD = +cD;
      const ID = (CD = +CD) < (DD = +DD),
        pD = ID ? SD(CD, DD, cD) : SD(DD, CD, cD);
      return (ID ? -1 : 1) * (pD < 0 ? 1 / -pD : pD)
    }

    function yD(DD, CD) {
      return null == DD || null == CD ? NaN : DD < CD ? -1 : DD > CD ? 1 : DD >= CD ? 0 : NaN
    }

    function MD(DD, CD) {
      return null == DD || null == CD ? NaN : CD < DD ? -1 : CD > DD ? 1 : CD >= DD ? 0 : NaN
    }

    function tD(DD) {
      let CD, cD, ID;

      function pD(DD, ID) {
        let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
        if (pD < iD) {
          if (0 !== CD(ID, ID)) return iD;
          do {
            const CD = pD + iD >>> 1;
            cD(DD[CD], ID) < 0 ? pD = CD + 1 : iD = CD
          } while (pD < iD)
        }
        return pD
      }
      return 2 !== DD.length ? (CD = yD, cD = (CD, cD) => yD(DD(CD), cD), ID = (CD, cD) => DD(CD) - cD) : (CD = DD === yD || DD === MD ? DD : ZD, cD = DD, ID = DD), {
        left: pD,
        center: function(DD, CD) {
          let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const iD = pD(DD, CD, cD, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length) - 1);
          return iD > cD && ID(DD[iD - 1], CD) > -ID(DD[iD], CD) ? iD - 1 : iD
        },
        right: function(DD, ID) {
          let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            iD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD.length;
          if (pD < iD) {
            if (0 !== CD(ID, ID)) return iD;
            do {
              const CD = pD + iD >>> 1;
              cD(DD[CD], ID) <= 0 ? pD = CD + 1 : iD = CD
            } while (pD < iD)
          }
          return pD
        }
      }
    }

    function ZD() {
      return 0
    }

    function oD(DD) {
      return null === DD ? NaN : +DD
    }
    const vD = tD(yD),
      ND = vD.right,
      gD = (vD.left, tD(oD).center, ND);

    function XD(DD, CD, cD) {
      DD.prototype = CD.prototype = cD, cD.constructor = DD
    }

    function mD(DD, CD) {
      var cD = Object.create(DD.prototype);
      for (var ID in CD) cD[ID] = CD[ID];
      return cD
    }

    function nD() {}
    var OD = .7,
      PD = 1 / OD,
      HD = "\\s*([+-]?\\d+)\\s*",
      UD = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      xD = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      qD = /^#([0-9a-f]{3,8})$/,
      JD = new RegExp(`^rgb\\(${HD},${HD},${HD}\\)$`),
      KD = new RegExp(`^rgb\\(${xD},${xD},${xD}\\)$`),
      aD = new RegExp(`^rgba\\(${HD},${HD},${HD},${UD}\\)$`),
      VD = new RegExp(`^rgba\\(${xD},${xD},${xD},${UD}\\)$`),
      zD = new RegExp(`^hsl\\(${UD},${xD},${xD}\\)$`),
      jD = new RegExp(`^hsla\\(${UD},${xD},${xD},${UD}\\)$`),
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

    function LD() {
      return this.rgb().formatHex()
    }

    function TD() {
      return this.rgb().formatRgb()
    }

    function GD(DD) {
      var CD, cD;
      return DD = (DD + "").trim().toLowerCase(), (CD = qD.exec(DD)) ? (cD = CD[1].length, CD = parseInt(CD[1], 16), 6 === cD ? RD(CD) : 3 === cD ? new YD(CD >> 8 & 15 | CD >> 4 & 240, CD >> 4 & 15 | 240 & CD, (15 & CD) << 4 | 15 & CD, 1) : 8 === cD ? kD(CD >> 24 & 255, CD >> 16 & 255, CD >> 8 & 255, (255 & CD) / 255) : 4 === cD ? kD(CD >> 12 & 15 | CD >> 8 & 240, CD >> 8 & 15 | CD >> 4 & 240, CD >> 4 & 15 | 240 & CD, ((15 & CD) << 4 | 15 & CD) / 255) : null) : (CD = JD.exec(DD)) ? new YD(CD[1], CD[2], CD[3], 1) : (CD = KD.exec(DD)) ? new YD(255 * CD[1] / 100, 255 * CD[2] / 100, 255 * CD[3] / 100, 1) : (CD = aD.exec(DD)) ? kD(CD[1], CD[2], CD[3], CD[4]) : (CD = VD.exec(DD)) ? kD(255 * CD[1] / 100, 255 * CD[2] / 100, 255 * CD[3] / 100, CD[4]) : (CD = zD.exec(DD)) ? hD(CD[1], CD[2] / 100, CD[3] / 100, 1) : (CD = jD.exec(DD)) ? hD(CD[1], CD[2] / 100, CD[3] / 100, CD[4]) : lD.hasOwnProperty(DD) ? RD(lD[DD]) : "transparent" === DD ? new YD(NaN, NaN, NaN, 0) : null
    }

    function RD(DD) {
      return new YD(DD >> 16 & 255, DD >> 8 & 255, 255 & DD, 1)
    }

    function kD(DD, CD, cD, ID) {
      return ID <= 0 && (DD = CD = cD = NaN), new YD(DD, CD, cD, ID)
    }

    function dD(DD, CD, cD, ID) {
      return 1 === arguments.length ? ((pD = DD) instanceof nD || (pD = GD(pD)), pD ? new YD((pD = pD.rgb()).r, pD.g, pD.b, pD.opacity) : new YD) : new YD(DD, CD, cD, null == ID ? 1 : ID);
      var pD
    }

    function YD(DD, CD, cD, ID) {
      this.r = +DD, this.g = +CD, this.b = +cD, this.opacity = +ID
    }

    function WD() {
      return `#${uD(this.r)}${uD(this.g)}${uD(this.b)}`
    }

    function sD() {
      const DD = ED(this.opacity);
      return `${1===DD?"rgb(":"rgba("}${eD(this.r)}, ${eD(this.g)}, ${eD(this.b)}${1===DD?")":`, ${DD})`}`
    }

    function ED(DD) {
      return isNaN(DD) ? 1 : Math.max(0, Math.min(1, DD))
    }

    function eD(DD) {
      return Math.max(0, Math.min(255, Math.round(DD) || 0))
    }

    function uD(DD) {
      return ((DD = eD(DD)) < 16 ? "0" : "") + DD.toString(16)
    }

    function hD(DD, CD, cD, ID) {
      return ID <= 0 ? DD = CD = cD = NaN : cD <= 0 || cD >= 1 ? DD = CD = NaN : CD <= 0 && (DD = NaN), new AD(DD, CD, cD, ID)
    }

    function rD(DD) {
      if (DD instanceof AD) return new AD(DD.h, DD.s, DD.l, DD.opacity);
      if (DD instanceof nD || (DD = GD(DD)), !DD) return new AD;
      if (DD instanceof AD) return DD;
      var CD = (DD = DD.rgb()).r / 255,
        cD = DD.g / 255,
        ID = DD.b / 255,
        pD = Math.min(CD, cD, ID),
        iD = Math.max(CD, cD, ID),
        fD = NaN,
        bD = iD - pD,
        QD = (iD + pD) / 2;
      return bD ? (fD = CD === iD ? (cD - ID) / bD + 6 * (cD < ID) : cD === iD ? (ID - CD) / bD + 2 : (CD - cD) / bD + 4, bD /= QD < .5 ? iD + pD : 2 - iD - pD, fD *= 60) : bD = QD > 0 && QD < 1 ? 0 : fD, new AD(fD, bD, QD, DD.opacity)
    }

    function AD(DD, CD, cD, ID) {
      this.h = +DD, this.s = +CD, this.l = +cD, this.opacity = +ID
    }

    function FD(DD) {
      return (DD = (DD || 0) % 360) < 0 ? DD + 360 : DD
    }

    function DC(DD) {
      return Math.max(0, Math.min(1, DD || 0))
    }

    function CC(DD, CD, cD) {
      return 255 * (DD < 60 ? CD + (cD - CD) * DD / 60 : DD < 180 ? cD : DD < 240 ? CD + (cD - CD) * (240 - DD) / 60 : CD)
    }

    function cC(DD, CD, cD, ID, pD) {
      var iD = DD * DD,
        fD = iD * DD;
      return ((1 - 3 * DD + 3 * iD - fD) * CD + (4 - 6 * iD + 3 * fD) * cD + (1 + 3 * DD + 3 * iD - 3 * fD) * ID + fD * pD) / 6
    }
    XD(nD, GD, {
      copy(DD) {
        return Object.assign(new this.constructor, this, DD)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: LD,
      formatHex: LD,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return rD(this).formatHsl()
      },
      formatRgb: TD,
      toString: TD
    }), XD(YD, dD, mD(nD, {
      brighter(DD) {
        return DD = null == DD ? PD : Math.pow(PD, DD), new YD(this.r * DD, this.g * DD, this.b * DD, this.opacity)
      },
      darker(DD) {
        return DD = null == DD ? OD : Math.pow(OD, DD), new YD(this.r * DD, this.g * DD, this.b * DD, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new YD(eD(this.r), eD(this.g), eD(this.b), ED(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: WD,
      formatHex: WD,
      formatHex8: function() {
        return `#${uD(this.r)}${uD(this.g)}${uD(this.b)}${uD(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: sD,
      toString: sD
    })), XD(AD, (function(DD, CD, cD, ID) {
      return 1 === arguments.length ? rD(DD) : new AD(DD, CD, cD, null == ID ? 1 : ID)
    }), mD(nD, {
      brighter(DD) {
        return DD = null == DD ? PD : Math.pow(PD, DD), new AD(this.h, this.s, this.l * DD, this.opacity)
      },
      darker(DD) {
        return DD = null == DD ? OD : Math.pow(OD, DD), new AD(this.h, this.s, this.l * DD, this.opacity)
      },
      rgb() {
        var DD = this.h % 360 + 360 * (this.h < 0),
          CD = isNaN(DD) || isNaN(this.s) ? 0 : this.s,
          cD = this.l,
          ID = cD + (cD < .5 ? cD : 1 - cD) * CD,
          pD = 2 * cD - ID;
        return new YD(CC(DD >= 240 ? DD - 240 : DD + 120, pD, ID), CC(DD, pD, ID), CC(DD < 120 ? DD + 240 : DD - 120, pD, ID), this.opacity)
      },
      clamp() {
        return new AD(FD(this.h), DC(this.s), DC(this.l), ED(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const DD = ED(this.opacity);
        return `${1===DD?"hsl(":"hsla("}${FD(this.h)}, ${100*DC(this.s)}%, ${100*DC(this.l)}%${1===DD?")":`, ${DD})`}`
      }
    }));
    const IC = DD => () => DD;

    function pC(DD, CD) {
      return function(cD) {
        return DD + cD * CD
      }
    }

    function iC(DD) {
      return 1 === (DD = +DD) ? fC : function(CD, cD) {
        return cD - CD ? function(DD, CD, cD) {
          return DD = Math.pow(DD, cD), CD = Math.pow(CD, cD) - DD, cD = 1 / cD,
            function(ID) {
              return Math.pow(DD + ID * CD, cD)
            }
        }(CD, cD, DD) : IC(isNaN(CD) ? cD : CD)
      }
    }

    function fC(DD, CD) {
      var cD = CD - DD;
      return cD ? pC(DD, cD) : IC(isNaN(DD) ? CD : DD)
    }
    const bC = function DD(CD) {
      var cD = iC(CD);

      function ID(DD, CD) {
        var ID = cD((DD = dD(DD)).r, (CD = dD(CD)).r),
          pD = cD(DD.g, CD.g),
          iD = cD(DD.b, CD.b),
          fD = fC(DD.opacity, CD.opacity);
        return function(CD) {
          return DD.r = ID(CD), DD.g = pD(CD), DD.b = iD(CD), DD.opacity = fD(CD), DD + ""
        }
      }
      return ID.gamma = DD, ID
    }(1);

    function QC(DD) {
      return function(CD) {
        var cD, ID, pD = CD.length,
          iD = new Array(pD),
          fD = new Array(pD),
          bD = new Array(pD);
        for (cD = 0; cD < pD; ++cD) ID = dD(CD[cD]), iD[cD] = ID.r || 0, fD[cD] = ID.g || 0, bD[cD] = ID.b || 0;
        return iD = DD(iD), fD = DD(fD), bD = DD(bD), ID.opacity = 1,
          function(DD) {
            return ID.r = iD(DD), ID.g = fD(DD), ID.b = bD(DD), ID + ""
          }
      }
    }
    QC((function(DD) {
      var CD = DD.length - 1;
      return function(cD) {
        var ID = cD <= 0 ? cD = 0 : cD >= 1 ? (cD = 1, CD - 1) : Math.floor(cD * CD),
          pD = DD[ID],
          iD = DD[ID + 1],
          fD = ID > 0 ? DD[ID - 1] : 2 * pD - iD,
          bD = ID < CD - 1 ? DD[ID + 2] : 2 * iD - pD;
        return cC((cD - ID / CD) * CD, fD, pD, iD, bD)
      }
    })), QC((function(DD) {
      var CD = DD.length;
      return function(cD) {
        var ID = Math.floor(((cD %= 1) < 0 ? ++cD : cD) * CD),
          pD = DD[(ID + CD - 1) % CD],
          iD = DD[ID % CD],
          fD = DD[(ID + 1) % CD],
          bD = DD[(ID + 2) % CD];
        return cC((cD - ID / CD) * CD, pD, iD, fD, bD)
      }
    }));

    function wC(DD, CD) {
      var cD, ID = CD ? CD.length : 0,
        pD = DD ? Math.min(ID, DD.length) : 0,
        iD = new Array(pD),
        fD = new Array(ID);
      for (cD = 0; cD < pD; ++cD) iD[cD] = vC(DD[cD], CD[cD]);
      for (; cD < ID; ++cD) fD[cD] = CD[cD];
      return function(DD) {
        for (cD = 0; cD < pD; ++cD) fD[cD] = iD[cD](DD);
        return fD
      }
    }

    function SC(DD, CD) {
      var cD = new Date;
      return DD = +DD, CD = +CD,
        function(ID) {
          return cD.setTime(DD * (1 - ID) + CD * ID), cD
        }
    }

    function BC(DD, CD) {
      return DD = +DD, CD = +CD,
        function(cD) {
          return DD * (1 - cD) + CD * cD
        }
    }

    function yC(DD, CD) {
      var cD, ID = {},
        pD = {};
      for (cD in null !== DD && "object" === typeof DD || (DD = {}), null !== CD && "object" === typeof CD || (CD = {}), CD) cD in DD ? ID[cD] = vC(DD[cD], CD[cD]) : pD[cD] = CD[cD];
      return function(DD) {
        for (cD in ID) pD[cD] = ID[cD](DD);
        return pD
      }
    }
    var MC = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      tC = new RegExp(MC.source, "g");

    function ZC(DD, CD) {
      var cD, ID, pD, iD = MC.lastIndex = tC.lastIndex = 0,
        fD = -1,
        bD = [],
        QD = [];
      for (DD += "", CD += "";
        (cD = MC.exec(DD)) && (ID = tC.exec(CD));)(pD = ID.index) > iD && (pD = CD.slice(iD, pD), bD[fD] ? bD[fD] += pD : bD[++fD] = pD), (cD = cD[0]) === (ID = ID[0]) ? bD[fD] ? bD[fD] += ID : bD[++fD] = ID : (bD[++fD] = null, QD.push({
        i: fD,
        x: BC(cD, ID)
      })), iD = tC.lastIndex;
      return iD < CD.length && (pD = CD.slice(iD), bD[fD] ? bD[fD] += pD : bD[++fD] = pD), bD.length < 2 ? QD[0] ? function(DD) {
        return function(CD) {
          return DD(CD) + ""
        }
      }(QD[0].x) : function(DD) {
        return function() {
          return DD
        }
      }(CD) : (CD = QD.length, function(DD) {
        for (var cD, ID = 0; ID < CD; ++ID) bD[(cD = QD[ID]).i] = cD.x(DD);
        return bD.join("")
      })
    }

    function oC(DD, CD) {
      CD || (CD = []);
      var cD, ID = DD ? Math.min(CD.length, DD.length) : 0,
        pD = CD.slice();
      return function(iD) {
        for (cD = 0; cD < ID; ++cD) pD[cD] = DD[cD] * (1 - iD) + CD[cD] * iD;
        return pD
      }
    }

    function vC(DD, CD) {
      var cD, ID, pD = typeof CD;
      return null == CD || "boolean" === pD ? IC(CD) : ("number" === pD ? BC : "string" === pD ? (cD = GD(CD)) ? (CD = cD, bC) : ZC : CD instanceof GD ? bC : CD instanceof Date ? SC : (ID = CD, !ArrayBuffer.isView(ID) || ID instanceof DataView ? Array.isArray(CD) ? wC : "function" !== typeof CD.valueOf && "function" !== typeof CD.toString || isNaN(CD) ? yC : BC : oC))(DD, CD)
    }

    function NC(DD, CD) {
      return DD = +DD, CD = +CD,
        function(cD) {
          return Math.round(DD * (1 - cD) + CD * cD)
        }
    }

    function gC(DD) {
      return +DD
    }
    var XC = [0, 1];

    function mC(DD) {
      return DD
    }

    function nC(DD, CD) {
      return (CD -= DD = +DD) ? function(cD) {
        return (cD - DD) / CD
      } : (cD = isNaN(CD) ? NaN : .5, function() {
        return cD
      });
      var cD
    }

    function OC(DD, CD, cD) {
      var ID = DD[0],
        pD = DD[1],
        iD = CD[0],
        fD = CD[1];
      return pD < ID ? (ID = nC(pD, ID), iD = cD(fD, iD)) : (ID = nC(ID, pD), iD = cD(iD, fD)),
        function(DD) {
          return iD(ID(DD))
        }
    }

    function PC(DD, CD, cD) {
      var ID = Math.min(DD.length, CD.length) - 1,
        pD = new Array(ID),
        iD = new Array(ID),
        fD = -1;
      for (DD[ID] < DD[0] && (DD = DD.slice().reverse(), CD = CD.slice().reverse()); ++fD < ID;) pD[fD] = nC(DD[fD], DD[fD + 1]), iD[fD] = cD(CD[fD], CD[fD + 1]);
      return function(CD) {
        var cD = gD(DD, CD, 1, ID) - 1;
        return iD[cD](pD[cD](CD))
      }
    }

    function HC(DD, CD) {
      return CD.domain(DD.domain()).range(DD.range()).interpolate(DD.interpolate()).clamp(DD.clamp()).unknown(DD.unknown())
    }

    function UC() {
      var DD, CD, cD, ID, pD, iD, fD = XC,
        bD = XC,
        QD = vC,
        wD = mC;

      function SD() {
        var DD = Math.min(fD.length, bD.length);
        return wD !== mC && (wD = function(DD, CD) {
          var cD;
          return DD > CD && (cD = DD, DD = CD, CD = cD),
            function(cD) {
              return Math.max(DD, Math.min(CD, cD))
            }
        }(fD[0], fD[DD - 1])), ID = DD > 2 ? PC : OC, pD = iD = null, BD
      }

      function BD(CD) {
        return null == CD || isNaN(CD = +CD) ? cD : (pD || (pD = ID(fD.map(DD), bD, QD)))(DD(wD(CD)))
      }
      return BD.invert = function(cD) {
          return wD(CD((iD || (iD = ID(bD, fD.map(DD), BC)))(cD)))
        }, BD.domain = function(DD) {
          return arguments.length ? (fD = Array.from(DD, gC), SD()) : fD.slice()
        }, BD.range = function(DD) {
          return arguments.length ? (bD = Array.from(DD), SD()) : bD.slice()
        }, BD.rangeRound = function(DD) {
          return bD = Array.from(DD), QD = NC, SD()
        }, BD.clamp = function(DD) {
          return arguments.length ? (wD = !!DD || mC, SD()) : wD !== mC
        }, BD.interpolate = function(DD) {
          return arguments.length ? (QD = DD, SD()) : QD
        }, BD.unknown = function(DD) {
          return arguments.length ? (cD = DD, BD) : cD
        },
        function(cD, ID) {
          return DD = cD, CD = ID, SD()
        }
    }

    function xC() {
      return UC()(mC, mC)
    }
    var qC, JC = cD(5882),
      KC = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function aC(DD) {
      if (!(CD = KC.exec(DD))) throw new Error("invalid format: " + DD);
      var CD;
      return new VC({
        fill: CD[1],
        align: CD[2],
        sign: CD[3],
        symbol: CD[4],
        zero: CD[5],
        width: CD[6],
        comma: CD[7],
        precision: CD[8] && CD[8].slice(1),
        trim: CD[9],
        type: CD[10]
      })
    }

    function VC(DD) {
      this.fill = void 0 === DD.fill ? " " : DD.fill + "", this.align = void 0 === DD.align ? ">" : DD.align + "", this.sign = void 0 === DD.sign ? "-" : DD.sign + "", this.symbol = void 0 === DD.symbol ? "" : DD.symbol + "", this.zero = !!DD.zero, this.width = void 0 === DD.width ? void 0 : +DD.width, this.comma = !!DD.comma, this.precision = void 0 === DD.precision ? void 0 : +DD.precision, this.trim = !!DD.trim, this.type = void 0 === DD.type ? "" : DD.type + ""
    }

    function zC(DD, CD) {
      if (!isFinite(DD) || 0 === DD) return null;
      var cD = (DD = CD ? DD.toExponential(CD - 1) : DD.toExponential()).indexOf("e"),
        ID = DD.slice(0, cD);
      return [ID.length > 1 ? ID[0] + ID.slice(2) : ID, +DD.slice(cD + 1)]
    }

    function jC(DD) {
      return (DD = zC(Math.abs(DD))) ? DD[1] : NaN
    }

    function lC(DD, CD) {
      var cD = zC(DD, CD);
      if (!cD) return DD + "";
      var ID = cD[0],
        pD = cD[1];
      return pD < 0 ? "0." + new Array(-pD).join("0") + ID : ID.length > pD + 1 ? ID.slice(0, pD + 1) + "." + ID.slice(pD + 1) : ID + new Array(pD - ID.length + 2).join("0")
    }
    aC.prototype = VC.prototype, VC.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const LC = {
      "%": (DD, CD) => (100 * DD).toFixed(CD),
      b: DD => Math.round(DD).toString(2),
      c: DD => DD + "",
      d: function(DD) {
        return Math.abs(DD = Math.round(DD)) >= 1e21 ? DD.toLocaleString("en").replace(/,/g, "") : DD.toString(10)
      },
      e: (DD, CD) => DD.toExponential(CD),
      f: (DD, CD) => DD.toFixed(CD),
      g: (DD, CD) => DD.toPrecision(CD),
      o: DD => Math.round(DD).toString(8),
      p: (DD, CD) => lC(100 * DD, CD),
      r: lC,
      s: function(DD, CD) {
        var cD = zC(DD, CD);
        if (!cD) return qC = void 0, DD.toPrecision(CD);
        var ID = cD[0],
          pD = cD[1],
          iD = pD - (qC = 3 * Math.max(-8, Math.min(8, Math.floor(pD / 3)))) + 1,
          fD = ID.length;
        return iD === fD ? ID : iD > fD ? ID + new Array(iD - fD + 1).join("0") : iD > 0 ? ID.slice(0, iD) + "." + ID.slice(iD) : "0." + new Array(1 - iD).join("0") + zC(DD, Math.max(0, CD + iD - 1))[0]
      },
      X: DD => Math.round(DD).toString(16).toUpperCase(),
      x: DD => Math.round(DD).toString(16)
    };

    function TC(DD) {
      return DD
    }
    var GC, RC, kC, dC = Array.prototype.map,
      YC = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function WC(DD) {
      var CD, cD, ID = void 0 === DD.grouping || void 0 === DD.thousands ? TC : (CD = dC.call(DD.grouping, Number), cD = DD.thousands + "", function(DD, ID) {
          for (var pD = DD.length, iD = [], fD = 0, bD = CD[0], QD = 0; pD > 0 && bD > 0 && (QD + bD + 1 > ID && (bD = Math.max(1, ID - QD)), iD.push(DD.substring(pD -= bD, pD + bD)), !((QD += bD + 1) > ID));) bD = CD[fD = (fD + 1) % CD.length];
          return iD.reverse().join(cD)
        }),
        pD = void 0 === DD.currency ? "" : DD.currency[0] + "",
        iD = void 0 === DD.currency ? "" : DD.currency[1] + "",
        fD = void 0 === DD.decimal ? "." : DD.decimal + "",
        bD = void 0 === DD.numerals ? TC : function(DD) {
          return function(CD) {
            return CD.replace(/[0-9]/g, (function(CD) {
              return DD[+CD]
            }))
          }
        }(dC.call(DD.numerals, String)),
        QD = void 0 === DD.percent ? "%" : DD.percent + "",
        wD = void 0 === DD.minus ? "\u2212" : DD.minus + "",
        SD = void 0 === DD.nan ? "NaN" : DD.nan + "";

      function BD(DD, CD) {
        var cD = (DD = aC(DD)).fill,
          BD = DD.align,
          yD = DD.sign,
          MD = DD.symbol,
          tD = DD.zero,
          ZD = DD.width,
          oD = DD.comma,
          vD = DD.precision,
          ND = DD.trim,
          gD = DD.type;
        "n" === gD ? (oD = !0, gD = "g") : LC[gD] || (void 0 === vD && (vD = 12), ND = !0, gD = "g"), (tD || "0" === cD && "=" === BD) && (tD = !0, cD = "0", BD = "=");
        var XD = (CD && void 0 !== CD.prefix ? CD.prefix : "") + ("$" === MD ? pD : "#" === MD && /[boxX]/.test(gD) ? "0" + gD.toLowerCase() : ""),
          mD = ("$" === MD ? iD : /[%p]/.test(gD) ? QD : "") + (CD && void 0 !== CD.suffix ? CD.suffix : ""),
          nD = LC[gD],
          OD = /[defgprs%]/.test(gD);

        function PD(DD) {
          var CD, pD, iD, QD = XD,
            MD = mD;
          if ("c" === gD) MD = nD(DD) + MD, DD = "";
          else {
            var PD = (DD = +DD) < 0 || 1 / DD < 0;
            if (DD = isNaN(DD) ? SD : nD(Math.abs(DD), vD), ND && (DD = function(DD) {
                DD: for (var CD, cD = DD.length, ID = 1, pD = -1; ID < cD; ++ID) switch (DD[ID]) {
                  case ".":
                    pD = CD = ID;
                    break;
                  case "0":
                    0 === pD && (pD = ID), CD = ID;
                    break;
                  default:
                    if (!+DD[ID]) break DD;
                    pD > 0 && (pD = 0)
                }
                return pD > 0 ? DD.slice(0, pD) + DD.slice(CD + 1) : DD
              }(DD)), PD && 0 === +DD && "+" !== yD && (PD = !1), QD = (PD ? "(" === yD ? yD : wD : "-" === yD || "(" === yD ? "" : yD) + QD, MD = ("s" !== gD || isNaN(DD) || void 0 === qC ? "" : YC[8 + qC / 3]) + MD + (PD && "(" === yD ? ")" : ""), OD)
              for (CD = -1, pD = DD.length; ++CD < pD;)
                if (48 > (iD = DD.charCodeAt(CD)) || iD > 57) {
                  MD = (46 === iD ? fD + DD.slice(CD + 1) : DD.slice(CD)) + MD, DD = DD.slice(0, CD);
                  break
                }
          }
          oD && !tD && (DD = ID(DD, 1 / 0));
          var HD = QD.length + DD.length + MD.length,
            UD = HD < ZD ? new Array(ZD - HD + 1).join(cD) : "";
          switch (oD && tD && (DD = ID(UD + DD, UD.length ? ZD - MD.length : 1 / 0), UD = ""), BD) {
            case "<":
              DD = QD + DD + MD + UD;
              break;
            case "=":
              DD = QD + UD + DD + MD;
              break;
            case "^":
              DD = UD.slice(0, HD = UD.length >> 1) + QD + DD + MD + UD.slice(HD);
              break;
            default:
              DD = UD + QD + DD + MD
          }
          return bD(DD)
        }
        return vD = void 0 === vD ? 6 : /[gprs]/.test(gD) ? Math.max(1, Math.min(21, vD)) : Math.max(0, Math.min(20, vD)), PD.toString = function() {
          return DD + ""
        }, PD
      }
      return {
        format: BD,
        formatPrefix: function(DD, CD) {
          var cD = 3 * Math.max(-8, Math.min(8, Math.floor(jC(CD) / 3))),
            ID = Math.pow(10, -cD),
            pD = BD(((DD = aC(DD)).type = "f", DD), {
              suffix: YC[8 + cD / 3]
            });
          return function(DD) {
            return pD(ID * DD)
          }
        }
      }
    }

    function sC(DD, CD, cD, ID) {
      var pD, iD = BD(DD, CD, cD);
      switch ((ID = aC(null == ID ? ",f" : ID)).type) {
        case "s":
          var fD = Math.max(Math.abs(DD), Math.abs(CD));
          return null != ID.precision || isNaN(pD = function(DD, CD) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(jC(CD) / 3))) - jC(Math.abs(DD)))
          }(iD, fD)) || (ID.precision = pD), kC(ID, fD);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != ID.precision || isNaN(pD = function(DD, CD) {
            return DD = Math.abs(DD), CD = Math.abs(CD) - DD, Math.max(0, jC(CD) - jC(DD)) + 1
          }(iD, Math.max(Math.abs(DD), Math.abs(CD)))) || (ID.precision = pD - ("e" === ID.type));
          break;
        case "f":
        case "%":
          null != ID.precision || isNaN(pD = function(DD) {
            return Math.max(0, -jC(Math.abs(DD)))
          }(iD)) || (ID.precision = pD - 2 * ("%" === ID.type))
      }
      return RC(ID)
    }

    function EC(DD) {
      var CD = DD.domain;
      return DD.ticks = function(DD) {
        var cD = CD();
        return wD(cD[0], cD[cD.length - 1], null == DD ? 10 : DD)
      }, DD.tickFormat = function(DD, cD) {
        var ID = CD();
        return sC(ID[0], ID[ID.length - 1], null == DD ? 10 : DD, cD)
      }, DD.nice = function(cD) {
        null == cD && (cD = 10);
        var ID, pD, iD = CD(),
          fD = 0,
          bD = iD.length - 1,
          QD = iD[fD],
          wD = iD[bD],
          BD = 10;
        for (wD < QD && (pD = QD, QD = wD, wD = pD, pD = fD, fD = bD, bD = pD); BD-- > 0;) {
          if ((pD = SD(QD, wD, cD)) === ID) return iD[fD] = QD, iD[bD] = wD, CD(iD);
          if (pD > 0) QD = Math.floor(QD / pD) * pD, wD = Math.ceil(wD / pD) * pD;
          else {
            if (!(pD < 0)) break;
            QD = Math.ceil(QD * pD) / pD, wD = Math.floor(wD * pD) / pD
          }
          ID = pD
        }
        return DD
      }, DD
    }

    function eC() {
      var DD = xC();
      return DD.copy = function() {
        return HC(DD, eC())
      }, JC.h.apply(DD, arguments), EC(DD)
    }

    function uC(DD) {
      var CD;

      function cD(DD) {
        return null == DD || isNaN(DD = +DD) ? CD : DD
      }
      return cD.invert = cD, cD.domain = cD.range = function(CD) {
        return arguments.length ? (DD = Array.from(CD, gC), cD) : DD.slice()
      }, cD.unknown = function(DD) {
        return arguments.length ? (CD = DD, cD) : CD
      }, cD.copy = function() {
        return uC(DD).unknown(CD)
      }, DD = arguments.length ? Array.from(DD, gC) : [0, 1], EC(cD)
    }

    function hC(DD, CD) {
      var cD, ID = 0,
        pD = (DD = DD.slice()).length - 1,
        iD = DD[ID],
        fD = DD[pD];
      return fD < iD && (cD = ID, ID = pD, pD = cD, cD = iD, iD = fD, fD = cD), DD[ID] = CD.floor(iD), DD[pD] = CD.ceil(fD), DD
    }

    function rC(DD) {
      return Math.log(DD)
    }

    function AC(DD) {
      return Math.exp(DD)
    }

    function FC(DD) {
      return -Math.log(-DD)
    }

    function Dc(DD) {
      return -Math.exp(-DD)
    }

    function Cc(DD) {
      return isFinite(DD) ? +("1e" + DD) : DD < 0 ? 0 : DD
    }

    function cc(DD) {
      return (CD, cD) => -DD(-CD, cD)
    }

    function Ic(DD) {
      const CD = DD(rC, AC),
        cD = CD.domain;
      let ID, pD, iD = 10;

      function fD() {
        return ID = function(DD) {
          return DD === Math.E ? Math.log : 10 === DD && Math.log10 || 2 === DD && Math.log2 || (DD = Math.log(DD), CD => Math.log(CD) / DD)
        }(iD), pD = function(DD) {
          return 10 === DD ? Cc : DD === Math.E ? Math.exp : CD => Math.pow(DD, CD)
        }(iD), cD()[0] < 0 ? (ID = cc(ID), pD = cc(pD), DD(FC, Dc)) : DD(rC, AC), CD
      }
      return CD.base = function(DD) {
        return arguments.length ? (iD = +DD, fD()) : iD
      }, CD.domain = function(DD) {
        return arguments.length ? (cD(DD), fD()) : cD()
      }, CD.ticks = DD => {
        const CD = cD();
        let fD = CD[0],
          bD = CD[CD.length - 1];
        const QD = bD < fD;
        QD && ([fD, bD] = [bD, fD]);
        let SD, BD, yD = ID(fD),
          MD = ID(bD);
        const tD = null == DD ? 10 : +DD;
        let ZD = [];
        if (!(iD % 1) && MD - yD < tD) {
          if (yD = Math.floor(yD), MD = Math.ceil(MD), fD > 0) {
            for (; yD <= MD; ++yD)
              for (SD = 1; SD < iD; ++SD)
                if (BD = yD < 0 ? SD / pD(-yD) : SD * pD(yD), !(BD < fD)) {
                  if (BD > bD) break;
                  ZD.push(BD)
                }
          } else
            for (; yD <= MD; ++yD)
              for (SD = iD - 1; SD >= 1; --SD)
                if (BD = yD > 0 ? SD / pD(-yD) : SD * pD(yD), !(BD < fD)) {
                  if (BD > bD) break;
                  ZD.push(BD)
                } 2 * ZD.length < tD && (ZD = wD(fD, bD, tD))
        } else ZD = wD(yD, MD, Math.min(MD - yD, tD)).map(pD);
        return QD ? ZD.reverse() : ZD
      }, CD.tickFormat = (DD, cD) => {
        if (null == DD && (DD = 10), null == cD && (cD = 10 === iD ? "s" : ","), "function" !== typeof cD && (iD % 1 || null != (cD = aC(cD)).precision || (cD.trim = !0), cD = RC(cD)), DD === 1 / 0) return cD;
        const fD = Math.max(1, iD * DD / CD.ticks().length);
        return DD => {
          let CD = DD / pD(Math.round(ID(DD)));
          return CD * iD < iD - .5 && (CD *= iD), CD <= fD ? cD(DD) : ""
        }
      }, CD.nice = () => cD(hC(cD(), {
        floor: DD => pD(Math.floor(ID(DD))),
        ceil: DD => pD(Math.ceil(ID(DD)))
      })), CD
    }

    function pc() {
      const DD = Ic(UC()).domain([1, 10]);
      return DD.copy = () => HC(DD, pc()).base(DD.base()), JC.h.apply(DD, arguments), DD
    }

    function ic(DD) {
      return function(CD) {
        return Math.sign(CD) * Math.log1p(Math.abs(CD / DD))
      }
    }

    function fc(DD) {
      return function(CD) {
        return Math.sign(CD) * Math.expm1(Math.abs(CD)) * DD
      }
    }

    function bc(DD) {
      var CD = 1,
        cD = DD(ic(CD), fc(CD));
      return cD.constant = function(cD) {
        return arguments.length ? DD(ic(CD = +cD), fc(CD)) : CD
      }, EC(cD)
    }

    function Qc() {
      var DD = bc(UC());
      return DD.copy = function() {
        return HC(DD, Qc()).constant(DD.constant())
      }, JC.h.apply(DD, arguments)
    }
    GC = WC({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), RC = GC.format, kC = GC.formatPrefix;
    var wc = cD(5888);

    function Sc(DD) {
      return function(CD) {
        return CD < 0 ? -Math.pow(-CD, DD) : Math.pow(CD, DD)
      }
    }

    function Bc(DD) {
      return DD < 0 ? -Math.sqrt(-DD) : Math.sqrt(DD)
    }

    function yc(DD) {
      return DD < 0 ? -DD * DD : DD * DD
    }

    function Mc(DD) {
      var CD = DD(mC, mC),
        cD = 1;
      return CD.exponent = function(CD) {
        return arguments.length ? 1 === (cD = +CD) ? DD(mC, mC) : .5 === cD ? DD(Bc, yc) : DD(Sc(cD), Sc(1 / cD)) : cD
      }, EC(CD)
    }

    function tc() {
      var DD = Mc(UC());
      return DD.copy = function() {
        return HC(DD, tc()).exponent(DD.exponent())
      }, JC.h.apply(DD, arguments), DD
    }

    function Zc() {
      return tc.apply(null, arguments).exponent(.5)
    }

    function oc(DD) {
      return Math.sign(DD) * DD * DD
    }

    function vc() {
      var DD, CD = xC(),
        cD = [0, 1],
        ID = !1;

      function pD(cD) {
        var pD = function(DD) {
          return Math.sign(DD) * Math.sqrt(Math.abs(DD))
        }(CD(cD));
        return isNaN(pD) ? DD : ID ? Math.round(pD) : pD
      }
      return pD.invert = function(DD) {
        return CD.invert(oc(DD))
      }, pD.domain = function(DD) {
        return arguments.length ? (CD.domain(DD), pD) : CD.domain()
      }, pD.range = function(DD) {
        return arguments.length ? (CD.range((cD = Array.from(DD, gC)).map(oc)), pD) : cD.slice()
      }, pD.rangeRound = function(DD) {
        return pD.range(DD).round(!0)
      }, pD.round = function(DD) {
        return arguments.length ? (ID = !!DD, pD) : ID
      }, pD.clamp = function(DD) {
        return arguments.length ? (CD.clamp(DD), pD) : CD.clamp()
      }, pD.unknown = function(CD) {
        return arguments.length ? (DD = CD, pD) : DD
      }, pD.copy = function() {
        return vc(CD.domain(), cD).round(ID).clamp(CD.clamp()).unknown(DD)
      }, JC.h.apply(pD, arguments), EC(pD)
    }

    function Nc(DD, CD) {
      let cD;
      if (void 0 === CD)
        for (const ID of DD) null != ID && (cD < ID || void 0 === cD && ID >= ID) && (cD = ID);
      else {
        let ID = -1;
        for (let pD of DD) null != (pD = CD(pD, ++ID, DD)) && (cD < pD || void 0 === cD && pD >= pD) && (cD = pD)
      }
      return cD
    }

    function gc(DD, CD) {
      let cD;
      if (void 0 === CD)
        for (const ID of DD) null != ID && (cD > ID || void 0 === cD && ID >= ID) && (cD = ID);
      else {
        let ID = -1;
        for (let pD of DD) null != (pD = CD(pD, ++ID, DD)) && (cD > pD || void 0 === cD && pD >= pD) && (cD = pD)
      }
      return cD
    }

    function Xc() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yD;
      if (DD === yD) return mc;
      if ("function" !== typeof DD) throw new TypeError("compare is not a function");
      return (CD, cD) => {
        const ID = DD(CD, cD);
        return ID || 0 === ID ? ID : (0 === DD(cD, cD)) - (0 === DD(CD, CD))
      }
    }

    function mc(DD, CD) {
      return (null == DD || !(DD >= DD)) - (null == CD || !(CD >= CD)) || (DD < CD ? -1 : DD > CD ? 1 : 0)
    }

    function nc(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        pD = arguments.length > 4 ? arguments[4] : void 0;
      if (CD = Math.floor(CD), cD = Math.floor(Math.max(0, cD)), ID = Math.floor(Math.min(DD.length - 1, ID)), !(cD <= CD && CD <= ID)) return DD;
      for (pD = void 0 === pD ? mc : Xc(pD); ID > cD;) {
        if (ID - cD > 600) {
          const iD = ID - cD + 1,
            fD = CD - cD + 1,
            bD = Math.log(iD),
            QD = .5 * Math.exp(2 * bD / 3),
            wD = .5 * Math.sqrt(bD * QD * (iD - QD) / iD) * (fD - iD / 2 < 0 ? -1 : 1);
          nc(DD, CD, Math.max(cD, Math.floor(CD - fD * QD / iD + wD)), Math.min(ID, Math.floor(CD + (iD - fD) * QD / iD + wD)), pD)
        }
        const iD = DD[CD];
        let fD = cD,
          bD = ID;
        for (Oc(DD, cD, CD), pD(DD[ID], iD) > 0 && Oc(DD, cD, ID); fD < bD;) {
          for (Oc(DD, fD, bD), ++fD, --bD; pD(DD[fD], iD) < 0;) ++fD;
          for (; pD(DD[bD], iD) > 0;) --bD
        }
        0 === pD(DD[cD], iD) ? Oc(DD, cD, bD) : (++bD, Oc(DD, bD, ID)), bD <= CD && (cD = bD + 1), CD <= bD && (ID = bD - 1)
      }
      return DD
    }

    function Oc(DD, CD, cD) {
      const ID = DD[CD];
      DD[CD] = DD[cD], DD[cD] = ID
    }

    function Pc(DD, CD, cD) {
      if (DD = Float64Array.from(function*(DD, CD) {
          if (void 0 === CD)
            for (let cD of DD) null != cD && (cD = +cD) >= cD && (yield cD);
          else {
            let cD = -1;
            for (let ID of DD) null != (ID = CD(ID, ++cD, DD)) && (ID = +ID) >= ID && (yield ID)
          }
        }(DD, cD)), (ID = DD.length) && !isNaN(CD = +CD)) {
        if (CD <= 0 || ID < 2) return gc(DD);
        if (CD >= 1) return Nc(DD);
        var ID, pD = (ID - 1) * CD,
          iD = Math.floor(pD),
          fD = Nc(nc(DD, iD).subarray(0, iD + 1));
        return fD + (gc(DD.subarray(iD + 1)) - fD) * (pD - iD)
      }
    }

    function Hc(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oD;
      if ((ID = DD.length) && !isNaN(CD = +CD)) {
        if (CD <= 0 || ID < 2) return +cD(DD[0], 0, DD);
        if (CD >= 1) return +cD(DD[ID - 1], ID - 1, DD);
        var ID, pD = (ID - 1) * CD,
          iD = Math.floor(pD),
          fD = +cD(DD[iD], iD, DD);
        return fD + (+cD(DD[iD + 1], iD + 1, DD) - fD) * (pD - iD)
      }
    }

    function Uc() {
      var DD, CD = [],
        cD = [],
        ID = [];

      function pD() {
        var DD = 0,
          pD = Math.max(1, cD.length);
        for (ID = new Array(pD - 1); ++DD < pD;) ID[DD - 1] = Hc(CD, DD / pD);
        return iD
      }

      function iD(CD) {
        return null == CD || isNaN(CD = +CD) ? DD : cD[gD(ID, CD)]
      }
      return iD.invertExtent = function(DD) {
        var pD = cD.indexOf(DD);
        return pD < 0 ? [NaN, NaN] : [pD > 0 ? ID[pD - 1] : CD[0], pD < ID.length ? ID[pD] : CD[CD.length - 1]]
      }, iD.domain = function(DD) {
        if (!arguments.length) return CD.slice();
        CD = [];
        for (let cD of DD) null == cD || isNaN(cD = +cD) || CD.push(cD);
        return CD.sort(yD), pD()
      }, iD.range = function(DD) {
        return arguments.length ? (cD = Array.from(DD), pD()) : cD.slice()
      }, iD.unknown = function(CD) {
        return arguments.length ? (DD = CD, iD) : DD
      }, iD.quantiles = function() {
        return ID.slice()
      }, iD.copy = function() {
        return Uc().domain(CD).range(cD).unknown(DD)
      }, JC.h.apply(iD, arguments)
    }

    function xc() {
      var DD, CD = 0,
        cD = 1,
        ID = 1,
        pD = [.5],
        iD = [0, 1];

      function fD(CD) {
        return null != CD && CD <= CD ? iD[gD(pD, CD, 0, ID)] : DD
      }

      function bD() {
        var DD = -1;
        for (pD = new Array(ID); ++DD < ID;) pD[DD] = ((DD + 1) * cD - (DD - ID) * CD) / (ID + 1);
        return fD
      }
      return fD.domain = function(DD) {
        return arguments.length ? ([CD, cD] = DD, CD = +CD, cD = +cD, bD()) : [CD, cD]
      }, fD.range = function(DD) {
        return arguments.length ? (ID = (iD = Array.from(DD)).length - 1, bD()) : iD.slice()
      }, fD.invertExtent = function(DD) {
        var fD = iD.indexOf(DD);
        return fD < 0 ? [NaN, NaN] : fD < 1 ? [CD, pD[0]] : fD >= ID ? [pD[ID - 1], cD] : [pD[fD - 1], pD[fD]]
      }, fD.unknown = function(CD) {
        return arguments.length ? (DD = CD, fD) : fD
      }, fD.thresholds = function() {
        return pD.slice()
      }, fD.copy = function() {
        return xc().domain([CD, cD]).range(iD).unknown(DD)
      }, JC.h.apply(EC(fD), arguments)
    }

    function qc() {
      var DD, CD = [.5],
        cD = [0, 1],
        ID = 1;

      function pD(pD) {
        return null != pD && pD <= pD ? cD[gD(CD, pD, 0, ID)] : DD
      }
      return pD.domain = function(DD) {
        return arguments.length ? (CD = Array.from(DD), ID = Math.min(CD.length, cD.length - 1), pD) : CD.slice()
      }, pD.range = function(DD) {
        return arguments.length ? (cD = Array.from(DD), ID = Math.min(CD.length, cD.length - 1), pD) : cD.slice()
      }, pD.invertExtent = function(DD) {
        var ID = cD.indexOf(DD);
        return [CD[ID - 1], CD[ID]]
      }, pD.unknown = function(CD) {
        return arguments.length ? (DD = CD, pD) : DD
      }, pD.copy = function() {
        return qc().domain(CD).range(cD).unknown(DD)
      }, JC.h.apply(pD, arguments)
    }
    const Jc = 1e3,
      Kc = 6e4,
      ac = 36e5,
      Vc = 864e5,
      zc = 6048e5,
      jc = 2592e6,
      lc = 31536e6,
      Lc = new Date,
      Tc = new Date;

    function Gc(DD, CD, cD, ID) {
      function pD(CD) {
        return DD(CD = 0 === arguments.length ? new Date : new Date(+CD)), CD
      }
      return pD.floor = CD => (DD(CD = new Date(+CD)), CD), pD.ceil = cD => (DD(cD = new Date(cD - 1)), CD(cD, 1), DD(cD), cD), pD.round = DD => {
        const CD = pD(DD),
          cD = pD.ceil(DD);
        return DD - CD < cD - DD ? CD : cD
      }, pD.offset = (DD, cD) => (CD(DD = new Date(+DD), null == cD ? 1 : Math.floor(cD)), DD), pD.range = (cD, ID, iD) => {
        const fD = [];
        if (cD = pD.ceil(cD), iD = null == iD ? 1 : Math.floor(iD), !(cD < ID) || !(iD > 0)) return fD;
        let bD;
        do {
          fD.push(bD = new Date(+cD)), CD(cD, iD), DD(cD)
        } while (bD < cD && cD < ID);
        return fD
      }, pD.filter = cD => Gc((CD => {
        if (CD >= CD)
          for (; DD(CD), !cD(CD);) CD.setTime(CD - 1)
      }), ((DD, ID) => {
        if (DD >= DD)
          if (ID < 0)
            for (; ++ID <= 0;)
              for (; CD(DD, -1), !cD(DD););
          else
            for (; --ID >= 0;)
              for (; CD(DD, 1), !cD(DD););
      })), cD && (pD.count = (CD, ID) => (Lc.setTime(+CD), Tc.setTime(+ID), DD(Lc), DD(Tc), Math.floor(cD(Lc, Tc))), pD.every = DD => (DD = Math.floor(DD), isFinite(DD) && DD > 0 ? DD > 1 ? pD.filter(ID ? CD => ID(CD) % DD === 0 : CD => pD.count(0, CD) % DD === 0) : pD : null)), pD
    }
    const Rc = Gc((() => {}), ((DD, CD) => {
      DD.setTime(+DD + CD)
    }), ((DD, CD) => CD - DD));
    Rc.every = DD => (DD = Math.floor(DD), isFinite(DD) && DD > 0 ? DD > 1 ? Gc((CD => {
      CD.setTime(Math.floor(CD / DD) * DD)
    }), ((CD, cD) => {
      CD.setTime(+CD + cD * DD)
    }), ((CD, cD) => (cD - CD) / DD)) : Rc : null);
    Rc.range;
    const kc = Gc((DD => {
        DD.setTime(DD - DD.getMilliseconds())
      }), ((DD, CD) => {
        DD.setTime(+DD + CD * Jc)
      }), ((DD, CD) => (CD - DD) / Jc), (DD => DD.getUTCSeconds())),
      dc = (kc.range, Gc((DD => {
        DD.setTime(DD - DD.getMilliseconds() - DD.getSeconds() * Jc)
      }), ((DD, CD) => {
        DD.setTime(+DD + CD * Kc)
      }), ((DD, CD) => (CD - DD) / Kc), (DD => DD.getMinutes()))),
      Yc = (dc.range, Gc((DD => {
        DD.setUTCSeconds(0, 0)
      }), ((DD, CD) => {
        DD.setTime(+DD + CD * Kc)
      }), ((DD, CD) => (CD - DD) / Kc), (DD => DD.getUTCMinutes()))),
      Wc = (Yc.range, Gc((DD => {
        DD.setTime(DD - DD.getMilliseconds() - DD.getSeconds() * Jc - DD.getMinutes() * Kc)
      }), ((DD, CD) => {
        DD.setTime(+DD + CD * ac)
      }), ((DD, CD) => (CD - DD) / ac), (DD => DD.getHours()))),
      sc = (Wc.range, Gc((DD => {
        DD.setUTCMinutes(0, 0, 0)
      }), ((DD, CD) => {
        DD.setTime(+DD + CD * ac)
      }), ((DD, CD) => (CD - DD) / ac), (DD => DD.getUTCHours()))),
      Ec = (sc.range, Gc((DD => DD.setHours(0, 0, 0, 0)), ((DD, CD) => DD.setDate(DD.getDate() + CD)), ((DD, CD) => (CD - DD - (CD.getTimezoneOffset() - DD.getTimezoneOffset()) * Kc) / Vc), (DD => DD.getDate() - 1))),
      ec = (Ec.range, Gc((DD => {
        DD.setUTCHours(0, 0, 0, 0)
      }), ((DD, CD) => {
        DD.setUTCDate(DD.getUTCDate() + CD)
      }), ((DD, CD) => (CD - DD) / Vc), (DD => DD.getUTCDate() - 1))),
      uc = (ec.range, Gc((DD => {
        DD.setUTCHours(0, 0, 0, 0)
      }), ((DD, CD) => {
        DD.setUTCDate(DD.getUTCDate() + CD)
      }), ((DD, CD) => (CD - DD) / Vc), (DD => Math.floor(DD / Vc))));
    uc.range;

    function hc(DD) {
      return Gc((CD => {
        CD.setDate(CD.getDate() - (CD.getDay() + 7 - DD) % 7), CD.setHours(0, 0, 0, 0)
      }), ((DD, CD) => {
        DD.setDate(DD.getDate() + 7 * CD)
      }), ((DD, CD) => (CD - DD - (CD.getTimezoneOffset() - DD.getTimezoneOffset()) * Kc) / zc))
    }
    const rc = hc(0),
      Ac = hc(1),
      Fc = hc(2),
      DI = hc(3),
      CI = hc(4),
      cI = hc(5),
      II = hc(6);
    rc.range, Ac.range, Fc.range, DI.range, CI.range, cI.range, II.range;

    function pI(DD) {
      return Gc((CD => {
        CD.setUTCDate(CD.getUTCDate() - (CD.getUTCDay() + 7 - DD) % 7), CD.setUTCHours(0, 0, 0, 0)
      }), ((DD, CD) => {
        DD.setUTCDate(DD.getUTCDate() + 7 * CD)
      }), ((DD, CD) => (CD - DD) / zc))
    }
    const iI = pI(0),
      fI = pI(1),
      bI = pI(2),
      QI = pI(3),
      wI = pI(4),
      SI = pI(5),
      BI = pI(6),
      yI = (iI.range, fI.range, bI.range, QI.range, wI.range, SI.range, BI.range, Gc((DD => {
        DD.setDate(1), DD.setHours(0, 0, 0, 0)
      }), ((DD, CD) => {
        DD.setMonth(DD.getMonth() + CD)
      }), ((DD, CD) => CD.getMonth() - DD.getMonth() + 12 * (CD.getFullYear() - DD.getFullYear())), (DD => DD.getMonth()))),
      MI = (yI.range, Gc((DD => {
        DD.setUTCDate(1), DD.setUTCHours(0, 0, 0, 0)
      }), ((DD, CD) => {
        DD.setUTCMonth(DD.getUTCMonth() + CD)
      }), ((DD, CD) => CD.getUTCMonth() - DD.getUTCMonth() + 12 * (CD.getUTCFullYear() - DD.getUTCFullYear())), (DD => DD.getUTCMonth()))),
      tI = (MI.range, Gc((DD => {
        DD.setMonth(0, 1), DD.setHours(0, 0, 0, 0)
      }), ((DD, CD) => {
        DD.setFullYear(DD.getFullYear() + CD)
      }), ((DD, CD) => CD.getFullYear() - DD.getFullYear()), (DD => DD.getFullYear())));
    tI.every = DD => isFinite(DD = Math.floor(DD)) && DD > 0 ? Gc((CD => {
      CD.setFullYear(Math.floor(CD.getFullYear() / DD) * DD), CD.setMonth(0, 1), CD.setHours(0, 0, 0, 0)
    }), ((CD, cD) => {
      CD.setFullYear(CD.getFullYear() + cD * DD)
    })) : null;
    tI.range;
    const ZI = Gc((DD => {
      DD.setUTCMonth(0, 1), DD.setUTCHours(0, 0, 0, 0)
    }), ((DD, CD) => {
      DD.setUTCFullYear(DD.getUTCFullYear() + CD)
    }), ((DD, CD) => CD.getUTCFullYear() - DD.getUTCFullYear()), (DD => DD.getUTCFullYear()));
    ZI.every = DD => isFinite(DD = Math.floor(DD)) && DD > 0 ? Gc((CD => {
      CD.setUTCFullYear(Math.floor(CD.getUTCFullYear() / DD) * DD), CD.setUTCMonth(0, 1), CD.setUTCHours(0, 0, 0, 0)
    }), ((CD, cD) => {
      CD.setUTCFullYear(CD.getUTCFullYear() + cD * DD)
    })) : null;
    ZI.range;

    function oI(DD, CD, cD, ID, pD, iD) {
      const fD = [
        [kc, 1, Jc],
        [kc, 5, 5e3],
        [kc, 15, 15e3],
        [kc, 30, 3e4],
        [iD, 1, Kc],
        [iD, 5, 3e5],
        [iD, 15, 9e5],
        [iD, 30, 18e5],
        [pD, 1, ac],
        [pD, 3, 108e5],
        [pD, 6, 216e5],
        [pD, 12, 432e5],
        [ID, 1, Vc],
        [ID, 2, 1728e5],
        [cD, 1, zc],
        [CD, 1, jc],
        [CD, 3, 7776e6],
        [DD, 1, lc]
      ];

      function bD(CD, cD, ID) {
        const pD = Math.abs(cD - CD) / ID,
          iD = tD((DD => {
            let [, , CD] = DD;
            return CD
          })).right(fD, pD);
        if (iD === fD.length) return DD.every(BD(CD / lc, cD / lc, ID));
        if (0 === iD) return Rc.every(Math.max(BD(CD, cD, ID), 1));
        const [bD, QD] = fD[pD / fD[iD - 1][2] < fD[iD][2] / pD ? iD - 1 : iD];
        return bD.every(QD)
      }
      return [function(DD, CD, cD) {
        const ID = CD < DD;
        ID && ([DD, CD] = [CD, DD]);
        const pD = cD && "function" === typeof cD.range ? cD : bD(DD, CD, cD),
          iD = pD ? pD.range(DD, +CD + 1) : [];
        return ID ? iD.reverse() : iD
      }, bD]
    }
    const [vI, NI] = oI(ZI, MI, iI, uc, sc, Yc), [gI, XI] = oI(tI, yI, rc, Ec, Wc, dc);

    function mI(DD) {
      if (0 <= DD.y && DD.y < 100) {
        var CD = new Date(-1, DD.m, DD.d, DD.H, DD.M, DD.S, DD.L);
        return CD.setFullYear(DD.y), CD
      }
      return new Date(DD.y, DD.m, DD.d, DD.H, DD.M, DD.S, DD.L)
    }

    function nI(DD) {
      if (0 <= DD.y && DD.y < 100) {
        var CD = new Date(Date.UTC(-1, DD.m, DD.d, DD.H, DD.M, DD.S, DD.L));
        return CD.setUTCFullYear(DD.y), CD
      }
      return new Date(Date.UTC(DD.y, DD.m, DD.d, DD.H, DD.M, DD.S, DD.L))
    }

    function OI(DD, CD, cD) {
      return {
        y: DD,
        m: CD,
        d: cD,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var PI, HI, UI, xI = {
        "-": "",
        _: " ",
        0: "0"
      },
      qI = /^\s*\d+/,
      JI = /^%/,
      KI = /[\\^$*+?|[\]().{}]/g;

    function aI(DD, CD, cD) {
      var ID = DD < 0 ? "-" : "",
        pD = (ID ? -DD : DD) + "",
        iD = pD.length;
      return ID + (iD < cD ? new Array(cD - iD + 1).join(CD) + pD : pD)
    }

    function VI(DD) {
      return DD.replace(KI, "\\$&")
    }

    function zI(DD) {
      return new RegExp("^(?:" + DD.map(VI).join("|") + ")", "i")
    }

    function jI(DD) {
      return new Map(DD.map(((DD, CD) => [DD.toLowerCase(), CD])))
    }

    function lI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 1));
      return ID ? (DD.w = +ID[0], cD + ID[0].length) : -1
    }

    function LI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 1));
      return ID ? (DD.u = +ID[0], cD + ID[0].length) : -1
    }

    function TI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.U = +ID[0], cD + ID[0].length) : -1
    }

    function GI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.V = +ID[0], cD + ID[0].length) : -1
    }

    function RI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.W = +ID[0], cD + ID[0].length) : -1
    }

    function kI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 4));
      return ID ? (DD.y = +ID[0], cD + ID[0].length) : -1
    }

    function dI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.y = +ID[0] + (+ID[0] > 68 ? 1900 : 2e3), cD + ID[0].length) : -1
    }

    function YI(DD, CD, cD) {
      var ID = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(CD.slice(cD, cD + 6));
      return ID ? (DD.Z = ID[1] ? 0 : -(ID[2] + (ID[3] || "00")), cD + ID[0].length) : -1
    }

    function WI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 1));
      return ID ? (DD.q = 3 * ID[0] - 3, cD + ID[0].length) : -1
    }

    function sI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.m = ID[0] - 1, cD + ID[0].length) : -1
    }

    function EI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.d = +ID[0], cD + ID[0].length) : -1
    }

    function eI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 3));
      return ID ? (DD.m = 0, DD.d = +ID[0], cD + ID[0].length) : -1
    }

    function uI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.H = +ID[0], cD + ID[0].length) : -1
    }

    function hI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.M = +ID[0], cD + ID[0].length) : -1
    }

    function rI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 2));
      return ID ? (DD.S = +ID[0], cD + ID[0].length) : -1
    }

    function AI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 3));
      return ID ? (DD.L = +ID[0], cD + ID[0].length) : -1
    }

    function FI(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD, cD + 6));
      return ID ? (DD.L = Math.floor(ID[0] / 1e3), cD + ID[0].length) : -1
    }

    function Dp(DD, CD, cD) {
      var ID = JI.exec(CD.slice(cD, cD + 1));
      return ID ? cD + ID[0].length : -1
    }

    function Cp(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD));
      return ID ? (DD.Q = +ID[0], cD + ID[0].length) : -1
    }

    function cp(DD, CD, cD) {
      var ID = qI.exec(CD.slice(cD));
      return ID ? (DD.s = +ID[0], cD + ID[0].length) : -1
    }

    function Ip(DD, CD) {
      return aI(DD.getDate(), CD, 2)
    }

    function pp(DD, CD) {
      return aI(DD.getHours(), CD, 2)
    }

    function ip(DD, CD) {
      return aI(DD.getHours() % 12 || 12, CD, 2)
    }

    function fp(DD, CD) {
      return aI(1 + Ec.count(tI(DD), DD), CD, 3)
    }

    function bp(DD, CD) {
      return aI(DD.getMilliseconds(), CD, 3)
    }

    function Qp(DD, CD) {
      return bp(DD, CD) + "000"
    }

    function wp(DD, CD) {
      return aI(DD.getMonth() + 1, CD, 2)
    }

    function Sp(DD, CD) {
      return aI(DD.getMinutes(), CD, 2)
    }

    function Bp(DD, CD) {
      return aI(DD.getSeconds(), CD, 2)
    }

    function yp(DD) {
      var CD = DD.getDay();
      return 0 === CD ? 7 : CD
    }

    function Mp(DD, CD) {
      return aI(rc.count(tI(DD) - 1, DD), CD, 2)
    }

    function tp(DD) {
      var CD = DD.getDay();
      return CD >= 4 || 0 === CD ? CI(DD) : CI.ceil(DD)
    }

    function Zp(DD, CD) {
      return DD = tp(DD), aI(CI.count(tI(DD), DD) + (4 === tI(DD).getDay()), CD, 2)
    }

    function op(DD) {
      return DD.getDay()
    }

    function vp(DD, CD) {
      return aI(Ac.count(tI(DD) - 1, DD), CD, 2)
    }

    function Np(DD, CD) {
      return aI(DD.getFullYear() % 100, CD, 2)
    }

    function gp(DD, CD) {
      return aI((DD = tp(DD)).getFullYear() % 100, CD, 2)
    }

    function Xp(DD, CD) {
      return aI(DD.getFullYear() % 1e4, CD, 4)
    }

    function mp(DD, CD) {
      var cD = DD.getDay();
      return aI((DD = cD >= 4 || 0 === cD ? CI(DD) : CI.ceil(DD)).getFullYear() % 1e4, CD, 4)
    }

    function np(DD) {
      var CD = DD.getTimezoneOffset();
      return (CD > 0 ? "-" : (CD *= -1, "+")) + aI(CD / 60 | 0, "0", 2) + aI(CD % 60, "0", 2)
    }

    function Op(DD, CD) {
      return aI(DD.getUTCDate(), CD, 2)
    }

    function Pp(DD, CD) {
      return aI(DD.getUTCHours(), CD, 2)
    }

    function Hp(DD, CD) {
      return aI(DD.getUTCHours() % 12 || 12, CD, 2)
    }

    function Up(DD, CD) {
      return aI(1 + ec.count(ZI(DD), DD), CD, 3)
    }

    function xp(DD, CD) {
      return aI(DD.getUTCMilliseconds(), CD, 3)
    }

    function qp(DD, CD) {
      return xp(DD, CD) + "000"
    }

    function Jp(DD, CD) {
      return aI(DD.getUTCMonth() + 1, CD, 2)
    }

    function Kp(DD, CD) {
      return aI(DD.getUTCMinutes(), CD, 2)
    }

    function ap(DD, CD) {
      return aI(DD.getUTCSeconds(), CD, 2)
    }

    function Vp(DD) {
      var CD = DD.getUTCDay();
      return 0 === CD ? 7 : CD
    }

    function zp(DD, CD) {
      return aI(iI.count(ZI(DD) - 1, DD), CD, 2)
    }

    function jp(DD) {
      var CD = DD.getUTCDay();
      return CD >= 4 || 0 === CD ? wI(DD) : wI.ceil(DD)
    }

    function lp(DD, CD) {
      return DD = jp(DD), aI(wI.count(ZI(DD), DD) + (4 === ZI(DD).getUTCDay()), CD, 2)
    }

    function Lp(DD) {
      return DD.getUTCDay()
    }

    function Tp(DD, CD) {
      return aI(fI.count(ZI(DD) - 1, DD), CD, 2)
    }

    function Gp(DD, CD) {
      return aI(DD.getUTCFullYear() % 100, CD, 2)
    }

    function Rp(DD, CD) {
      return aI((DD = jp(DD)).getUTCFullYear() % 100, CD, 2)
    }

    function kp(DD, CD) {
      return aI(DD.getUTCFullYear() % 1e4, CD, 4)
    }

    function dp(DD, CD) {
      var cD = DD.getUTCDay();
      return aI((DD = cD >= 4 || 0 === cD ? wI(DD) : wI.ceil(DD)).getUTCFullYear() % 1e4, CD, 4)
    }

    function Yp() {
      return "+0000"
    }

    function Wp() {
      return "%"
    }

    function sp(DD) {
      return +DD
    }

    function Ep(DD) {
      return Math.floor(+DD / 1e3)
    }

    function ep(DD) {
      return new Date(DD)
    }

    function hp(DD) {
      return DD instanceof Date ? +DD : +new Date(+DD)
    }

    function rp(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
      var SD = xC(),
        BD = SD.invert,
        yD = SD.domain,
        MD = wD(".%L"),
        tD = wD(":%S"),
        ZD = wD("%I:%M"),
        oD = wD("%I %p"),
        vD = wD("%a %d"),
        ND = wD("%b %d"),
        gD = wD("%B"),
        XD = wD("%Y");

      function mD(DD) {
        return (QD(DD) < DD ? MD : bD(DD) < DD ? tD : fD(DD) < DD ? ZD : iD(DD) < DD ? oD : ID(DD) < DD ? pD(DD) < DD ? vD : ND : cD(DD) < DD ? gD : XD)(DD)
      }
      return SD.invert = function(DD) {
        return new Date(BD(DD))
      }, SD.domain = function(DD) {
        return arguments.length ? yD(Array.from(DD, hp)) : yD().map(ep)
      }, SD.ticks = function(CD) {
        var cD = yD();
        return DD(cD[0], cD[cD.length - 1], null == CD ? 10 : CD)
      }, SD.tickFormat = function(DD, CD) {
        return null == CD ? mD : wD(CD)
      }, SD.nice = function(DD) {
        var cD = yD();
        return DD && "function" === typeof DD.range || (DD = CD(cD[0], cD[cD.length - 1], null == DD ? 10 : DD)), DD ? yD(hC(cD, DD)) : SD
      }, SD.copy = function() {
        return HC(SD, rp(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD))
      }, SD
    }

    function Ap() {
      return JC.h.apply(rp(gI, XI, tI, yI, rc, Ec, Wc, dc, kc, HI).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function Fp() {
      return JC.h.apply(rp(vI, NI, ZI, MI, iI, ec, sc, Yc, kc, UI).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function Di() {
      var DD, CD, cD, ID, pD, iD = 0,
        fD = 1,
        bD = mC,
        QD = !1;

      function wD(CD) {
        return null == CD || isNaN(CD = +CD) ? pD : bD(0 === cD ? .5 : (CD = (ID(CD) - DD) * cD, QD ? Math.max(0, Math.min(1, CD)) : CD))
      }

      function SD(DD) {
        return function(CD) {
          var cD, ID;
          return arguments.length ? ([cD, ID] = CD, bD = DD(cD, ID), wD) : [bD(0), bD(1)]
        }
      }
      return wD.domain = function(pD) {
          return arguments.length ? ([iD, fD] = pD, DD = ID(iD = +iD), CD = ID(fD = +fD), cD = DD === CD ? 0 : 1 / (CD - DD), wD) : [iD, fD]
        }, wD.clamp = function(DD) {
          return arguments.length ? (QD = !!DD, wD) : QD
        }, wD.interpolator = function(DD) {
          return arguments.length ? (bD = DD, wD) : bD
        }, wD.range = SD(vC), wD.rangeRound = SD(NC), wD.unknown = function(DD) {
          return arguments.length ? (pD = DD, wD) : pD
        },
        function(pD) {
          return ID = pD, DD = pD(iD), CD = pD(fD), cD = DD === CD ? 0 : 1 / (CD - DD), wD
        }
    }

    function Ci(DD, CD) {
      return CD.domain(DD.domain()).interpolator(DD.interpolator()).clamp(DD.clamp()).unknown(DD.unknown())
    }

    function ci() {
      var DD = EC(Di()(mC));
      return DD.copy = function() {
        return Ci(DD, ci())
      }, JC.d.apply(DD, arguments)
    }

    function Ii() {
      var DD = Ic(Di()).domain([1, 10]);
      return DD.copy = function() {
        return Ci(DD, Ii()).base(DD.base())
      }, JC.d.apply(DD, arguments)
    }

    function ii() {
      var DD = bc(Di());
      return DD.copy = function() {
        return Ci(DD, ii()).constant(DD.constant())
      }, JC.d.apply(DD, arguments)
    }

    function fi() {
      var DD = Mc(Di());
      return DD.copy = function() {
        return Ci(DD, fi()).exponent(DD.exponent())
      }, JC.d.apply(DD, arguments)
    }

    function bi() {
      return fi.apply(null, arguments).exponent(.5)
    }

    function Qi() {
      var DD = [],
        CD = mC;

      function cD(cD) {
        if (null != cD && !isNaN(cD = +cD)) return CD((gD(DD, cD, 1) - 1) / (DD.length - 1))
      }
      return cD.domain = function(CD) {
        if (!arguments.length) return DD.slice();
        DD = [];
        for (let cD of CD) null == cD || isNaN(cD = +cD) || DD.push(cD);
        return DD.sort(yD), cD
      }, cD.interpolator = function(DD) {
        return arguments.length ? (CD = DD, cD) : CD
      }, cD.range = function() {
        return DD.map(((cD, ID) => CD(ID / (DD.length - 1))))
      }, cD.quantiles = function(CD) {
        return Array.from({
          length: CD + 1
        }, ((cD, ID) => Pc(DD, ID / CD)))
      }, cD.copy = function() {
        return Qi(CD).domain(DD)
      }, JC.d.apply(cD, arguments)
    }

    function wi() {
      var DD, CD, cD, ID, pD, iD, fD, bD = 0,
        QD = .5,
        wD = 1,
        SD = 1,
        BD = mC,
        yD = !1;

      function MD(DD) {
        return isNaN(DD = +DD) ? fD : (DD = .5 + ((DD = +iD(DD)) - CD) * (SD * DD < SD * CD ? ID : pD), BD(yD ? Math.max(0, Math.min(1, DD)) : DD))
      }

      function tD(DD) {
        return function(CD) {
          var cD, ID, pD;
          return arguments.length ? ([cD, ID, pD] = CD, BD = function(DD, CD) {
            void 0 === CD && (CD = DD, DD = vC);
            for (var cD = 0, ID = CD.length - 1, pD = CD[0], iD = new Array(ID < 0 ? 0 : ID); cD < ID;) iD[cD] = DD(pD, pD = CD[++cD]);
            return function(DD) {
              var CD = Math.max(0, Math.min(ID - 1, Math.floor(DD *= ID)));
              return iD[CD](DD - CD)
            }
          }(DD, [cD, ID, pD]), MD) : [BD(0), BD(.5), BD(1)]
        }
      }
      return MD.domain = function(fD) {
          return arguments.length ? ([bD, QD, wD] = fD, DD = iD(bD = +bD), CD = iD(QD = +QD), cD = iD(wD = +wD), ID = DD === CD ? 0 : .5 / (CD - DD), pD = CD === cD ? 0 : .5 / (cD - CD), SD = CD < DD ? -1 : 1, MD) : [bD, QD, wD]
        }, MD.clamp = function(DD) {
          return arguments.length ? (yD = !!DD, MD) : yD
        }, MD.interpolator = function(DD) {
          return arguments.length ? (BD = DD, MD) : BD
        }, MD.range = tD(vC), MD.rangeRound = tD(NC), MD.unknown = function(DD) {
          return arguments.length ? (fD = DD, MD) : fD
        },
        function(fD) {
          return iD = fD, DD = fD(bD), CD = fD(QD), cD = fD(wD), ID = DD === CD ? 0 : .5 / (CD - DD), pD = CD === cD ? 0 : .5 / (cD - CD), SD = CD < DD ? -1 : 1, MD
        }
    }

    function Si() {
      var DD = EC(wi()(mC));
      return DD.copy = function() {
        return Ci(DD, Si())
      }, JC.d.apply(DD, arguments)
    }

    function Bi() {
      var DD = Ic(wi()).domain([.1, 1, 10]);
      return DD.copy = function() {
        return Ci(DD, Bi()).base(DD.base())
      }, JC.d.apply(DD, arguments)
    }

    function yi() {
      var DD = bc(wi());
      return DD.copy = function() {
        return Ci(DD, yi()).constant(DD.constant())
      }, JC.d.apply(DD, arguments)
    }

    function Mi() {
      var DD = Mc(wi());
      return DD.copy = function() {
        return Ci(DD, Mi()).exponent(DD.exponent())
      }, JC.d.apply(DD, arguments)
    }

    function ti() {
      return Mi.apply(null, arguments).exponent(.5)
    }

    function Zi(DD, CD) {
      if ((pD = DD.length) > 1)
        for (var cD, ID, pD, iD = 1, fD = DD[CD[0]], bD = fD.length; iD < pD; ++iD)
          for (ID = fD, fD = DD[CD[iD]], cD = 0; cD < bD; ++cD) fD[cD][1] += fD[cD][0] = isNaN(ID[cD][1]) ? ID[cD][0] : ID[cD][1]
    }! function(DD) {
      PI = function(DD) {
        var CD = DD.dateTime,
          cD = DD.date,
          ID = DD.time,
          pD = DD.periods,
          iD = DD.days,
          fD = DD.shortDays,
          bD = DD.months,
          QD = DD.shortMonths,
          wD = zI(pD),
          SD = jI(pD),
          BD = zI(iD),
          yD = jI(iD),
          MD = zI(fD),
          tD = jI(fD),
          ZD = zI(bD),
          oD = jI(bD),
          vD = zI(QD),
          ND = jI(QD),
          gD = {
            a: function(DD) {
              return fD[DD.getDay()]
            },
            A: function(DD) {
              return iD[DD.getDay()]
            },
            b: function(DD) {
              return QD[DD.getMonth()]
            },
            B: function(DD) {
              return bD[DD.getMonth()]
            },
            c: null,
            d: Ip,
            e: Ip,
            f: Qp,
            g: gp,
            G: mp,
            H: pp,
            I: ip,
            j: fp,
            L: bp,
            m: wp,
            M: Sp,
            p: function(DD) {
              return pD[+(DD.getHours() >= 12)]
            },
            q: function(DD) {
              return 1 + ~~(DD.getMonth() / 3)
            },
            Q: sp,
            s: Ep,
            S: Bp,
            u: yp,
            U: Mp,
            V: Zp,
            w: op,
            W: vp,
            x: null,
            X: null,
            y: Np,
            Y: Xp,
            Z: np,
            "%": Wp
          },
          XD = {
            a: function(DD) {
              return fD[DD.getUTCDay()]
            },
            A: function(DD) {
              return iD[DD.getUTCDay()]
            },
            b: function(DD) {
              return QD[DD.getUTCMonth()]
            },
            B: function(DD) {
              return bD[DD.getUTCMonth()]
            },
            c: null,
            d: Op,
            e: Op,
            f: qp,
            g: Rp,
            G: dp,
            H: Pp,
            I: Hp,
            j: Up,
            L: xp,
            m: Jp,
            M: Kp,
            p: function(DD) {
              return pD[+(DD.getUTCHours() >= 12)]
            },
            q: function(DD) {
              return 1 + ~~(DD.getUTCMonth() / 3)
            },
            Q: sp,
            s: Ep,
            S: ap,
            u: Vp,
            U: zp,
            V: lp,
            w: Lp,
            W: Tp,
            x: null,
            X: null,
            y: Gp,
            Y: kp,
            Z: Yp,
            "%": Wp
          },
          mD = {
            a: function(DD, CD, cD) {
              var ID = MD.exec(CD.slice(cD));
              return ID ? (DD.w = tD.get(ID[0].toLowerCase()), cD + ID[0].length) : -1
            },
            A: function(DD, CD, cD) {
              var ID = BD.exec(CD.slice(cD));
              return ID ? (DD.w = yD.get(ID[0].toLowerCase()), cD + ID[0].length) : -1
            },
            b: function(DD, CD, cD) {
              var ID = vD.exec(CD.slice(cD));
              return ID ? (DD.m = ND.get(ID[0].toLowerCase()), cD + ID[0].length) : -1
            },
            B: function(DD, CD, cD) {
              var ID = ZD.exec(CD.slice(cD));
              return ID ? (DD.m = oD.get(ID[0].toLowerCase()), cD + ID[0].length) : -1
            },
            c: function(DD, cD, ID) {
              return PD(DD, CD, cD, ID)
            },
            d: EI,
            e: EI,
            f: FI,
            g: dI,
            G: kI,
            H: uI,
            I: uI,
            j: eI,
            L: AI,
            m: sI,
            M: hI,
            p: function(DD, CD, cD) {
              var ID = wD.exec(CD.slice(cD));
              return ID ? (DD.p = SD.get(ID[0].toLowerCase()), cD + ID[0].length) : -1
            },
            q: WI,
            Q: Cp,
            s: cp,
            S: rI,
            u: LI,
            U: TI,
            V: GI,
            w: lI,
            W: RI,
            x: function(DD, CD, ID) {
              return PD(DD, cD, CD, ID)
            },
            X: function(DD, CD, cD) {
              return PD(DD, ID, CD, cD)
            },
            y: dI,
            Y: kI,
            Z: YI,
            "%": Dp
          };

        function nD(DD, CD) {
          return function(cD) {
            var ID, pD, iD, fD = [],
              bD = -1,
              QD = 0,
              wD = DD.length;
            for (cD instanceof Date || (cD = new Date(+cD)); ++bD < wD;) 37 === DD.charCodeAt(bD) && (fD.push(DD.slice(QD, bD)), null != (pD = xI[ID = DD.charAt(++bD)]) ? ID = DD.charAt(++bD) : pD = "e" === ID ? " " : "0", (iD = CD[ID]) && (ID = iD(cD, pD)), fD.push(ID), QD = bD + 1);
            return fD.push(DD.slice(QD, bD)), fD.join("")
          }
        }

        function OD(DD, CD) {
          return function(cD) {
            var ID, pD, iD = OI(1900, void 0, 1);
            if (PD(iD, DD, cD += "", 0) != cD.length) return null;
            if ("Q" in iD) return new Date(iD.Q);
            if ("s" in iD) return new Date(1e3 * iD.s + ("L" in iD ? iD.L : 0));
            if (CD && !("Z" in iD) && (iD.Z = 0), "p" in iD && (iD.H = iD.H % 12 + 12 * iD.p), void 0 === iD.m && (iD.m = "q" in iD ? iD.q : 0), "V" in iD) {
              if (iD.V < 1 || iD.V > 53) return null;
              "w" in iD || (iD.w = 1), "Z" in iD ? (pD = (ID = nI(OI(iD.y, 0, 1))).getUTCDay(), ID = pD > 4 || 0 === pD ? fI.ceil(ID) : fI(ID), ID = ec.offset(ID, 7 * (iD.V - 1)), iD.y = ID.getUTCFullYear(), iD.m = ID.getUTCMonth(), iD.d = ID.getUTCDate() + (iD.w + 6) % 7) : (pD = (ID = mI(OI(iD.y, 0, 1))).getDay(), ID = pD > 4 || 0 === pD ? Ac.ceil(ID) : Ac(ID), ID = Ec.offset(ID, 7 * (iD.V - 1)), iD.y = ID.getFullYear(), iD.m = ID.getMonth(), iD.d = ID.getDate() + (iD.w + 6) % 7)
            } else("W" in iD || "U" in iD) && ("w" in iD || (iD.w = "u" in iD ? iD.u % 7 : "W" in iD ? 1 : 0), pD = "Z" in iD ? nI(OI(iD.y, 0, 1)).getUTCDay() : mI(OI(iD.y, 0, 1)).getDay(), iD.m = 0, iD.d = "W" in iD ? (iD.w + 6) % 7 + 7 * iD.W - (pD + 5) % 7 : iD.w + 7 * iD.U - (pD + 6) % 7);
            return "Z" in iD ? (iD.H += iD.Z / 100 | 0, iD.M += iD.Z % 100, nI(iD)) : mI(iD)
          }
        }

        function PD(DD, CD, cD, ID) {
          for (var pD, iD, fD = 0, bD = CD.length, QD = cD.length; fD < bD;) {
            if (ID >= QD) return -1;
            if (37 === (pD = CD.charCodeAt(fD++))) {
              if (pD = CD.charAt(fD++), !(iD = mD[pD in xI ? CD.charAt(fD++) : pD]) || (ID = iD(DD, cD, ID)) < 0) return -1
            } else if (pD != cD.charCodeAt(ID++)) return -1
          }
          return ID
        }
        return gD.x = nD(cD, gD), gD.X = nD(ID, gD), gD.c = nD(CD, gD), XD.x = nD(cD, XD), XD.X = nD(ID, XD), XD.c = nD(CD, XD), {
          format: function(DD) {
            var CD = nD(DD += "", gD);
            return CD.toString = function() {
              return DD
            }, CD
          },
          parse: function(DD) {
            var CD = OD(DD += "", !1);
            return CD.toString = function() {
              return DD
            }, CD
          },
          utcFormat: function(DD) {
            var CD = nD(DD += "", XD);
            return CD.toString = function() {
              return DD
            }, CD
          },
          utcParse: function(DD) {
            var CD = OD(DD += "", !0);
            return CD.toString = function() {
              return DD
            }, CD
          }
        }
      }(DD), HI = PI.format, PI.parse, UI = PI.utcFormat, PI.utcParse
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
    var oi = cD(5947),
      vi = cD(5835);

    function Ni(DD) {
      for (var CD = DD.length, cD = new Array(CD); --CD >= 0;) cD[CD] = CD;
      return cD
    }

    function gi(DD, CD) {
      return DD[CD]
    }

    function Xi(DD) {
      const CD = [];
      return CD.key = DD, CD
    }
    var mi = cD(5896),
      ni = cD.n(mi),
      Oi = cD(5907),
      Pi = cD.n(Oi),
      Hi = cD(5175),
      Ui = cD.n(Hi),
      xi = cD(5032),
      qi = cD.n(xi),
      Ji = cD(4934),
      Ki = cD.n(Ji),
      ai = cD(4959),
      Vi = cD.n(ai),
      zi = cD(5917),
      ji = cD.n(zi),
      li = cD(4945),
      Li = cD.n(li),
      Ti = cD(5783),
      Gi = cD.n(Ti),
      Ri = cD(5927),
      ki = cD.n(Ri),
      di = cD(5268),
      Yi = cD.n(di),
      Wi = cD(5932),
      si = cD.n(Wi);

    function Ei(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return ei(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(DD)) return Array.from(DD)
      }(DD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return ei(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return ei(DD, CD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ei(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }
    var ui = function(DD) {
        return DD
      },
      ri = {
        "@@functional/placeholder": !0
      },
      Ai = function(DD) {
        return DD === ri
      },
      Fi = function(DD) {
        return function CD() {
          return 0 === arguments.length || 1 === arguments.length && Ai(arguments.length <= 0 ? void 0 : arguments[0]) ? CD : DD.apply(void 0, arguments)
        }
      },
      Df = function DD(CD, cD) {
        return 1 === CD ? cD : Fi((function() {
          for (var ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
          var fD = pD.filter((function(DD) {
            return DD !== ri
          })).length;
          return fD >= CD ? cD.apply(void 0, pD) : DD(CD - fD, Fi((function() {
            for (var DD = arguments.length, CD = new Array(DD), ID = 0; ID < DD; ID++) CD[ID] = arguments[ID];
            var iD = pD.map((function(DD) {
              return Ai(DD) ? CD.shift() : DD
            }));
            return cD.apply(void 0, Ei(iD).concat(CD))
          })))
        }))
      },
      Cf = function(DD) {
        return Df(DD.length, DD)
      },
      If = function(DD, CD) {
        for (var cD = [], ID = DD; ID < CD; ++ID) cD[ID - DD] = ID;
        return cD
      },
      pf = Cf((function(DD, CD) {
        return Array.isArray(CD) ? CD.map(DD) : Object.keys(CD).map((function(DD) {
          return CD[DD]
        })).map(DD)
      })),
      ff = function() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        if (!CD.length) return ui;
        var ID = CD.reverse(),
          pD = ID[0],
          iD = ID.slice(1);
        return function() {
          return iD.reduce((function(DD, CD) {
            return CD(DD)
          }), pD.apply(void 0, arguments))
        }
      },
      bf = function(DD) {
        return Array.isArray(DD) ? DD.reverse() : DD.split("").reverse.join("")
      },
      Qf = function(DD) {
        var CD = null,
          cD = null;
        return function() {
          for (var ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
          return CD && pD.every((function(DD, cD) {
            return DD === CD[cD]
          })) ? cD : (CD = pD, cD = DD.apply(void 0, pD))
        }
      };
    const wf = {
      rangeStep: function(DD, CD, cD) {
        for (var ID = new(si())(DD), pD = 0, iD = []; ID.lt(CD) && pD < 1e5;) iD.push(ID.toNumber()), ID = ID.add(cD), pD++;
        return iD
      },
      getDigitCount: function(DD) {
        return 0 === DD ? 1 : Math.floor(new(si())(DD).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: Cf((function(DD, CD, cD) {
        var ID = +DD;
        return ID + cD * (+CD - ID)
      })),
      uninterpolateNumber: Cf((function(DD, CD, cD) {
        var ID = CD - +DD;
        return (cD - DD) / (ID = ID || 1 / 0)
      })),
      uninterpolateTruncation: Cf((function(DD, CD, cD) {
        var ID = CD - +DD;
        return ID = ID || 1 / 0, Math.max(0, Math.min(1, (cD - DD) / ID))
      }))
    };

    function Sf(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Mf(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(DD)) return Array.from(DD)
      }(DD) || yf(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Bf(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(DD))) return;
        var cD = [],
          ID = !0,
          pD = !1,
          iD = void 0;
        try {
          for (var fD, bD = DD[Symbol.iterator](); !(ID = (fD = bD.next()).done) && (cD.push(fD.value), !CD || cD.length !== CD); ID = !0);
        } catch (QD) {
          pD = !0, iD = QD
        } finally {
          try {
            ID || null == bD.return || bD.return()
          } finally {
            if (pD) throw iD
          }
        }
        return cD
      }(DD, CD) || yf(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yf(DD, CD) {
      if (DD) {
        if ("string" === typeof DD) return Mf(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === cD && DD.constructor && (cD = DD.constructor.name), "Map" === cD || "Set" === cD ? Array.from(DD) : "Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD) ? Mf(DD, CD) : void 0
      }
    }

    function Mf(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function tf(DD) {
      var CD = Bf(DD, 2),
        cD = CD[0],
        ID = CD[1],
        pD = cD,
        iD = ID;
      return cD > ID && (pD = ID, iD = cD), [pD, iD]
    }

    function Zf(DD, CD, cD) {
      if (DD.lte(0)) return new(si())(0);
      var ID = wf.getDigitCount(DD.toNumber()),
        pD = new(si())(10).pow(ID),
        iD = DD.div(pD),
        fD = 1 !== ID ? .05 : .1,
        bD = new(si())(Math.ceil(iD.div(fD).toNumber())).add(cD).mul(fD).mul(pD);
      return CD ? bD : new(si())(Math.ceil(bD))
    }

    function of(DD, CD, cD) {
      var ID = 1,
        pD = new(si())(DD);
      if (!pD.isint() && cD) {
        var iD = Math.abs(DD);
        iD < 1 ? (ID = new(si())(10).pow(wf.getDigitCount(DD) - 1), pD = new(si())(Math.floor(pD.div(ID).toNumber())).mul(ID)) : iD > 1 && (pD = new(si())(Math.floor(DD)))
      } else 0 === DD ? pD = new(si())(Math.floor((CD - 1) / 2)) : cD || (pD = new(si())(Math.floor(DD)));
      var fD = Math.floor((CD - 1) / 2);
      return ff(pf((function(DD) {
        return pD.add(new(si())(DD - fD).mul(ID)).toNumber()
      })), If)(0, CD)
    }

    function vf(DD, CD, cD, ID) {
      var pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((CD - DD) / (cD - 1))) return {
        step: new(si())(0),
        tickMin: new(si())(0),
        tickMax: new(si())(0)
      };
      var iD, fD = Zf(new(si())(CD).sub(DD).div(cD - 1), ID, pD);
      iD = DD <= 0 && CD >= 0 ? new(si())(0) : (iD = new(si())(DD).add(CD).div(2)).sub(new(si())(iD).mod(fD));
      var bD = Math.ceil(iD.sub(DD).div(fD).toNumber()),
        QD = Math.ceil(new(si())(CD).sub(iD).div(fD).toNumber()),
        wD = bD + QD + 1;
      return wD > cD ? vf(DD, CD, cD, ID, pD + 1) : (wD < cD && (QD = CD > 0 ? QD + (cD - wD) : QD, bD = CD > 0 ? bD : bD + (cD - wD)), {
        step: fD,
        tickMin: iD.sub(new(si())(bD).mul(fD)),
        tickMax: iD.add(new(si())(QD).mul(fD))
      })
    }
    var Nf = Qf((function(DD) {
        var CD = Bf(DD, 2),
          cD = CD[0],
          ID = CD[1],
          pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          iD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          fD = Math.max(pD, 2),
          bD = Bf(tf([cD, ID]), 2),
          QD = bD[0],
          wD = bD[1];
        if (QD === -1 / 0 || wD === 1 / 0) {
          var SD = wD === 1 / 0 ? [QD].concat(Sf(If(0, pD - 1).map((function() {
            return 1 / 0
          })))) : [].concat(Sf(If(0, pD - 1).map((function() {
            return -1 / 0
          }))), [wD]);
          return cD > ID ? bf(SD) : SD
        }
        if (QD === wD) return of(QD, pD, iD);
        var BD = vf(QD, wD, fD, iD),
          yD = BD.step,
          MD = BD.tickMin,
          tD = BD.tickMax,
          ZD = wf.rangeStep(MD, tD.add(new(si())(.1).mul(yD)), yD);
        return cD > ID ? bf(ZD) : ZD
      })),
      gf = (Qf((function(DD) {
        var CD = Bf(DD, 2),
          cD = CD[0],
          ID = CD[1],
          pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          iD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          fD = Math.max(pD, 2),
          bD = Bf(tf([cD, ID]), 2),
          QD = bD[0],
          wD = bD[1];
        if (QD === -1 / 0 || wD === 1 / 0) return [cD, ID];
        if (QD === wD) return of(QD, pD, iD);
        var SD = Zf(new(si())(wD).sub(QD).div(fD - 1), iD, 0),
          BD = ff(pf((function(DD) {
            return new(si())(QD).add(new(si())(DD).mul(SD)).toNumber()
          })), If)(0, fD).filter((function(DD) {
            return DD >= QD && DD <= wD
          }));
        return cD > ID ? bf(BD) : BD
      })), Qf((function(DD, CD) {
        var cD = Bf(DD, 2),
          ID = cD[0],
          pD = cD[1],
          iD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          fD = Bf(tf([ID, pD]), 2),
          bD = fD[0],
          QD = fD[1];
        if (bD === -1 / 0 || QD === 1 / 0) return [ID, pD];
        if (bD === QD) return [bD];
        var wD = Math.max(CD, 2),
          SD = Zf(new(si())(QD).sub(bD).div(wD - 1), iD, 0),
          BD = [].concat(Sf(wf.rangeStep(new(si())(bD), new(si())(QD).sub(new(si())(.99).mul(SD)), SD)), [QD]);
        return ID > pD ? bf(BD) : BD
      }))),
      Xf = cD(5937),
      mf = cD(4927),
      nf = cD(5185),
      Of = cD(5941);

    function Pf(DD) {
      return Pf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, Pf(DD)
    }

    function Hf(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Uf(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || function(DD, CD) {
        if (!DD) return;
        if ("string" === typeof DD) return Uf(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        "Object" === cD && DD.constructor && (cD = DD.constructor.name);
        if ("Map" === cD || "Set" === cD) return Array.from(DD);
        if ("Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD)) return Uf(DD, CD)
      }(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Uf(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function xf(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function qf(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? xf(Object(cD), !0).forEach((function(CD) {
          Jf(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : xf(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function Jf(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != Pf(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != Pf(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == Pf(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function Kf(DD, CD, cD) {
      return Ui()(DD) || Ui()(CD) ? cD : (0, mf.D)(CD) ? Vi()(DD, CD, cD) : qi()(CD) ? CD(DD) : cD
    }

    function af(DD, CD, cD, ID) {
      var pD = ji()(DD, (function(DD) {
        return Kf(DD, CD)
      }));
      if ("number" === cD) {
        var iD = pD.filter((function(DD) {
          return (0, mf.G)(DD) || parseFloat(DD)
        }));
        return iD.length ? [Pi()(iD), ni()(iD)] : [1 / 0, -1 / 0]
      }
      return (ID ? pD.filter((function(DD) {
        return !Ui()(DD)
      })) : pD).map((function(DD) {
        return (0, mf.D)(DD) || DD instanceof Date ? DD : ""
      }))
    }
    var Vf = function(DD) {
        var CD, cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ID = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          iD = -1,
          fD = null !== (CD = null === cD || void 0 === cD ? void 0 : cD.length) && void 0 !== CD ? CD : 0;
        if (fD <= 1) return 0;
        if (pD && "angleAxis" === pD.axisType && Math.abs(Math.abs(pD.range[1] - pD.range[0]) - 360) <= 1e-6)
          for (var bD = pD.range, QD = 0; QD < fD; QD++) {
            var wD = QD > 0 ? ID[QD - 1].coordinate : ID[fD - 1].coordinate,
              SD = ID[QD].coordinate,
              BD = QD >= fD - 1 ? ID[0].coordinate : ID[QD + 1].coordinate,
              yD = void 0;
            if ((0, mf.K)(SD - wD) !== (0, mf.K)(BD - SD)) {
              var MD = [];
              if ((0, mf.K)(BD - SD) === (0, mf.K)(bD[1] - bD[0])) {
                yD = BD;
                var tD = SD + bD[1] - bD[0];
                MD[0] = Math.min(tD, (tD + wD) / 2), MD[1] = Math.max(tD, (tD + wD) / 2)
              } else {
                yD = wD;
                var ZD = BD + bD[1] - bD[0];
                MD[0] = Math.min(SD, (ZD + SD) / 2), MD[1] = Math.max(SD, (ZD + SD) / 2)
              }
              var oD = [Math.min(SD, (yD + SD) / 2), Math.max(SD, (yD + SD) / 2)];
              if (DD > oD[0] && DD <= oD[1] || DD >= MD[0] && DD <= MD[1]) {
                iD = ID[QD].index;
                break
              }
            } else {
              var vD = Math.min(wD, BD),
                ND = Math.max(wD, BD);
              if (DD > (vD + SD) / 2 && DD <= (ND + SD) / 2) {
                iD = ID[QD].index;
                break
              }
            }
          } else
            for (var gD = 0; gD < fD; gD++)
              if (0 === gD && DD <= (cD[gD].coordinate + cD[gD + 1].coordinate) / 2 || gD > 0 && gD < fD - 1 && DD > (cD[gD].coordinate + cD[gD - 1].coordinate) / 2 && DD <= (cD[gD].coordinate + cD[gD + 1].coordinate) / 2 || gD === fD - 1 && DD > (cD[gD].coordinate + cD[gD - 1].coordinate) / 2) {
                iD = cD[gD].index;
                break
              } return iD
      },
      zf = function(DD) {
        var CD, cD, ID = DD.type.displayName,
          pD = null !== (CD = DD.type) && void 0 !== CD && CD.defaultProps ? qf(qf({}, DD.type.defaultProps), DD.props) : DD.props,
          iD = pD.stroke,
          fD = pD.fill;
        switch (ID) {
          case "Line":
            cD = iD;
            break;
          case "Area":
          case "Radar":
            cD = iD && "none" !== iD ? iD : fD;
            break;
          default:
            cD = fD
        }
        return cD
      },
      jf = function(DD) {
        var CD = DD.barSize,
          cD = DD.totalSize,
          ID = DD.stackGroups,
          pD = void 0 === ID ? {} : ID;
        if (!pD) return {};
        for (var iD = {}, fD = Object.keys(pD), bD = 0, QD = fD.length; bD < QD; bD++)
          for (var wD = pD[fD[bD]].stackGroups, SD = Object.keys(wD), BD = 0, yD = SD.length; BD < yD; BD++) {
            var MD = wD[SD[BD]],
              tD = MD.items,
              ZD = MD.cateAxisId,
              oD = tD.filter((function(DD) {
                return (0, nf.l)(DD.type).indexOf("Bar") >= 0
              }));
            if (oD && oD.length) {
              var vD = oD[0].type.defaultProps,
                ND = void 0 !== vD ? qf(qf({}, vD), oD[0].props) : oD[0].props,
                gD = ND.barSize,
                XD = ND[ZD];
              iD[XD] || (iD[XD] = []);
              var mD = Ui()(gD) ? CD : gD;
              iD[XD].push({
                item: oD[0],
                stackList: oD.slice(1),
                barSize: Ui()(mD) ? void 0 : (0, mf.p)(mD, cD, 0)
              })
            }
          }
        return iD
      },
      lf = function(DD) {
        var CD = DD.barGap,
          cD = DD.barCategoryGap,
          ID = DD.bandSize,
          pD = DD.sizeList,
          iD = void 0 === pD ? [] : pD,
          fD = DD.maxBarSize,
          bD = iD.length;
        if (bD < 1) return null;
        var QD, wD = (0, mf.p)(CD, ID, 0, !0),
          SD = [];
        if (iD[0].barSize === +iD[0].barSize) {
          var BD = !1,
            yD = ID / bD,
            MD = iD.reduce((function(DD, CD) {
              return DD + CD.barSize || 0
            }), 0);
          (MD += (bD - 1) * wD) >= ID && (MD -= (bD - 1) * wD, wD = 0), MD >= ID && yD > 0 && (BD = !0, MD = bD * (yD *= .9));
          var tD = {
            offset: ((ID - MD) / 2 | 0) - wD,
            size: 0
          };
          QD = iD.reduce((function(DD, CD) {
            var cD = {
                item: CD.item,
                position: {
                  offset: tD.offset + tD.size + wD,
                  size: BD ? yD : CD.barSize
                }
              },
              ID = [].concat(Hf(DD), [cD]);
            return tD = ID[ID.length - 1].position, CD.stackList && CD.stackList.length && CD.stackList.forEach((function(DD) {
              ID.push({
                item: DD,
                position: tD
              })
            })), ID
          }), SD)
        } else {
          var ZD = (0, mf.p)(cD, ID, 0, !0);
          ID - 2 * ZD - (bD - 1) * wD <= 0 && (wD = 0);
          var oD = (ID - 2 * ZD - (bD - 1) * wD) / bD;
          oD > 1 && (oD >>= 0);
          var vD = fD === +fD ? Math.min(oD, fD) : oD;
          QD = iD.reduce((function(DD, CD, cD) {
            var ID = [].concat(Hf(DD), [{
              item: CD.item,
              position: {
                offset: ZD + (oD + wD) * cD + (oD - vD) / 2,
                size: vD
              }
            }]);
            return CD.stackList && CD.stackList.length && CD.stackList.forEach((function(DD) {
              ID.push({
                item: DD,
                position: ID[ID.length - 1].position
              })
            })), ID
          }), SD)
        }
        return QD
      },
      Lf = function(DD, CD, cD, ID) {
        var pD = cD.children,
          iD = cD.width,
          fD = cD.margin,
          bD = iD - (fD.left || 0) - (fD.right || 0),
          QD = (0, Of.c)({
            children: pD,
            legendWidth: bD
          });
        if (QD) {
          var wD = ID || {},
            SD = wD.width,
            BD = wD.height,
            yD = QD.align,
            MD = QD.verticalAlign,
            tD = QD.layout;
          if (("vertical" === tD || "horizontal" === tD && "middle" === MD) && "center" !== yD && (0, mf.G)(DD[yD])) return qf(qf({}, DD), {}, Jf({}, yD, DD[yD] + (SD || 0)));
          if (("horizontal" === tD || "vertical" === tD && "center" === yD) && "middle" !== MD && (0, mf.G)(DD[MD])) return qf(qf({}, DD), {}, Jf({}, MD, DD[MD] + (BD || 0)))
        }
        return DD
      },
      Tf = function(DD, CD, cD, ID, pD) {
        var iD = CD.props.children,
          fD = (0, nf.f)(iD, Xf.b).filter((function(DD) {
            return function(DD, CD, cD) {
              return !!Ui()(CD) || ("horizontal" === DD ? "yAxis" === CD : "vertical" === DD || "x" === cD ? "xAxis" === CD : "y" !== cD || "yAxis" === CD)
            }(ID, pD, DD.props.direction)
          }));
        if (fD && fD.length) {
          var bD = fD.map((function(DD) {
            return DD.props.dataKey
          }));
          return DD.reduce((function(DD, CD) {
            var ID = Kf(CD, cD);
            if (Ui()(ID)) return DD;
            var pD = Array.isArray(ID) ? [Pi()(ID), ni()(ID)] : [ID, ID],
              iD = bD.reduce((function(DD, cD) {
                var ID = Kf(CD, cD, 0),
                  iD = pD[0] - Math.abs(Array.isArray(ID) ? ID[0] : ID),
                  fD = pD[1] + Math.abs(Array.isArray(ID) ? ID[1] : ID);
                return [Math.min(iD, DD[0]), Math.max(fD, DD[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(iD[0], DD[0]), Math.max(iD[1], DD[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      Gf = function(DD, CD, cD, ID, pD) {
        var iD = CD.map((function(CD) {
          return Tf(DD, CD, cD, pD, ID)
        })).filter((function(DD) {
          return !Ui()(DD)
        }));
        return iD && iD.length ? iD.reduce((function(DD, CD) {
          return [Math.min(DD[0], CD[0]), Math.max(DD[1], CD[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      Rf = function(DD, CD, cD, ID, pD) {
        var iD = CD.map((function(CD) {
          var iD = CD.props.dataKey;
          return "number" === cD && iD && Tf(DD, CD, iD, ID) || af(DD, iD, cD, pD)
        }));
        if ("number" === cD) return iD.reduce((function(DD, CD) {
          return [Math.min(DD[0], CD[0]), Math.max(DD[1], CD[1])]
        }), [1 / 0, -1 / 0]);
        var fD = {};
        return iD.reduce((function(DD, CD) {
          for (var cD = 0, ID = CD.length; cD < ID; cD++) fD[CD[cD]] || (fD[CD[cD]] = !0, DD.push(CD[cD]));
          return DD
        }), [])
      },
      kf = function(DD, CD) {
        return "horizontal" === DD && "xAxis" === CD || "vertical" === DD && "yAxis" === CD || "centric" === DD && "angleAxis" === CD || "radial" === DD && "radiusAxis" === CD
      },
      df = function(DD, CD, cD, ID) {
        if (ID) return DD.map((function(DD) {
          return DD.coordinate
        }));
        var pD, iD, fD = DD.map((function(DD) {
          return DD.coordinate === CD && (pD = !0), DD.coordinate === cD && (iD = !0), DD.coordinate
        }));
        return pD || fD.push(CD), iD || fD.push(cD), fD
      },
      Yf = function(DD, CD, cD) {
        if (!DD) return null;
        var ID = DD.scale,
          pD = DD.duplicateDomain,
          iD = DD.type,
          fD = DD.range,
          bD = "scaleBand" === DD.realScaleType ? ID.bandwidth() / 2 : 2,
          QD = (CD || cD) && "category" === iD && ID.bandwidth ? ID.bandwidth() / bD : 0;
        return QD = "angleAxis" === DD.axisType && (null === fD || void 0 === fD ? void 0 : fD.length) >= 2 ? 2 * (0, mf.K)(fD[0] - fD[1]) * QD : QD, CD && (DD.ticks || DD.niceTicks) ? (DD.ticks || DD.niceTicks).map((function(DD) {
          var CD = pD ? pD.indexOf(DD) : DD;
          return {
            coordinate: ID(CD) + QD,
            value: DD,
            offset: QD
          }
        })).filter((function(DD) {
          return !Li()(DD.coordinate)
        })) : DD.isCategorical && DD.categoricalDomain ? DD.categoricalDomain.map((function(DD, CD) {
          return {
            coordinate: ID(DD) + QD,
            value: DD,
            index: CD,
            offset: QD
          }
        })) : ID.ticks && !cD ? ID.ticks(DD.tickCount).map((function(DD) {
          return {
            coordinate: ID(DD) + QD,
            value: DD,
            offset: QD
          }
        })) : ID.domain().map((function(DD, CD) {
          return {
            coordinate: ID(DD) + QD,
            value: pD ? pD[DD] : DD,
            index: CD,
            offset: QD
          }
        }))
      },
      Wf = new WeakMap,
      sf = function(DD, CD) {
        if ("function" !== typeof CD) return DD;
        Wf.has(DD) || Wf.set(DD, new WeakMap);
        var cD = Wf.get(DD);
        if (cD.has(CD)) return cD.get(CD);
        var ID = function() {
          DD.apply(void 0, arguments), CD.apply(void 0, arguments)
        };
        return cD.set(CD, ID), ID
      },
      Ef = function(DD, CD, cD) {
        var iD = DD.scale,
          fD = DD.type,
          bD = DD.layout,
          QD = DD.axisType;
        if ("auto" === iD) return "radial" === bD && "radiusAxis" === QD ? {
          scale: pD.c(),
          realScaleType: "band"
        } : "radial" === bD && "angleAxis" === QD ? {
          scale: eC(),
          realScaleType: "linear"
        } : "category" === fD && CD && (CD.indexOf("LineChart") >= 0 || CD.indexOf("AreaChart") >= 0 || CD.indexOf("ComposedChart") >= 0 && !cD) ? {
          scale: pD.d(),
          realScaleType: "point"
        } : "category" === fD ? {
          scale: pD.c(),
          realScaleType: "band"
        } : {
          scale: eC(),
          realScaleType: "linear"
        };
        if (Ki()(iD)) {
          var wD = "scale".concat(Gi()(iD));
          return {
            scale: (ID[wD] || pD.d)(),
            realScaleType: ID[wD] ? wD : "point"
          }
        }
        return qi()(iD) ? {
          scale: iD
        } : {
          scale: pD.d(),
          realScaleType: "point"
        }
      },
      ef = 1e-4,
      uf = function(DD) {
        var CD = DD.domain();
        if (CD && !(CD.length <= 2)) {
          var cD = CD.length,
            ID = DD.range(),
            pD = Math.min(ID[0], ID[1]) - ef,
            iD = Math.max(ID[0], ID[1]) + ef,
            fD = DD(CD[0]),
            bD = DD(CD[cD - 1]);
          (fD < pD || fD > iD || bD < pD || bD > iD) && DD.domain([CD[0], CD[cD - 1]])
        }
      },
      hf = function(DD, CD) {
        if (!DD) return null;
        for (var cD = 0, ID = DD.length; cD < ID; cD++)
          if (DD[cD].item === CD) return DD[cD].position;
        return null
      },
      rf = function(DD, CD) {
        if (!CD || 2 !== CD.length || !(0, mf.G)(CD[0]) || !(0, mf.G)(CD[1])) return DD;
        var cD = Math.min(CD[0], CD[1]),
          ID = Math.max(CD[0], CD[1]),
          pD = [DD[0], DD[1]];
        return (!(0, mf.G)(DD[0]) || DD[0] < cD) && (pD[0] = cD), (!(0, mf.G)(DD[1]) || DD[1] > ID) && (pD[1] = ID), pD[0] > ID && (pD[0] = ID), pD[1] < cD && (pD[1] = cD), pD
      },
      Af = {
        sign: function(DD) {
          var CD = DD.length;
          if (!(CD <= 0))
            for (var cD = 0, ID = DD[0].length; cD < ID; ++cD)
              for (var pD = 0, iD = 0, fD = 0; fD < CD; ++fD) {
                var bD = Li()(DD[fD][cD][1]) ? DD[fD][cD][0] : DD[fD][cD][1];
                bD >= 0 ? (DD[fD][cD][0] = pD, DD[fD][cD][1] = pD + bD, pD = DD[fD][cD][1]) : (DD[fD][cD][0] = iD, DD[fD][cD][1] = iD + bD, iD = DD[fD][cD][1])
              }
        },
        expand: function(DD, CD) {
          if ((ID = DD.length) > 0) {
            for (var cD, ID, pD, iD = 0, fD = DD[0].length; iD < fD; ++iD) {
              for (pD = cD = 0; cD < ID; ++cD) pD += DD[cD][iD][1] || 0;
              if (pD)
                for (cD = 0; cD < ID; ++cD) DD[cD][iD][1] /= pD
            }
            Zi(DD, CD)
          }
        },
        none: Zi,
        silhouette: function(DD, CD) {
          if ((cD = DD.length) > 0) {
            for (var cD, ID = 0, pD = DD[CD[0]], iD = pD.length; ID < iD; ++ID) {
              for (var fD = 0, bD = 0; fD < cD; ++fD) bD += DD[fD][ID][1] || 0;
              pD[ID][1] += pD[ID][0] = -bD / 2
            }
            Zi(DD, CD)
          }
        },
        wiggle: function(DD, CD) {
          if ((pD = DD.length) > 0 && (ID = (cD = DD[CD[0]]).length) > 0) {
            for (var cD, ID, pD, iD = 0, fD = 1; fD < ID; ++fD) {
              for (var bD = 0, QD = 0, wD = 0; bD < pD; ++bD) {
                for (var SD = DD[CD[bD]], BD = SD[fD][1] || 0, yD = (BD - (SD[fD - 1][1] || 0)) / 2, MD = 0; MD < bD; ++MD) {
                  var tD = DD[CD[MD]];
                  yD += (tD[fD][1] || 0) - (tD[fD - 1][1] || 0)
                }
                QD += BD, wD += yD * BD
              }
              cD[fD - 1][1] += cD[fD - 1][0] = iD, QD && (iD -= wD / QD)
            }
            cD[fD - 1][1] += cD[fD - 1][0] = iD, Zi(DD, CD)
          }
        },
        positive: function(DD) {
          var CD = DD.length;
          if (!(CD <= 0))
            for (var cD = 0, ID = DD[0].length; cD < ID; ++cD)
              for (var pD = 0, iD = 0; iD < CD; ++iD) {
                var fD = Li()(DD[iD][cD][1]) ? DD[iD][cD][0] : DD[iD][cD][1];
                fD >= 0 ? (DD[iD][cD][0] = pD, DD[iD][cD][1] = pD + fD, pD = DD[iD][cD][1]) : (DD[iD][cD][0] = 0, DD[iD][cD][1] = 0)
              }
        }
      },
      Ff = function(DD, CD, cD) {
        var ID = CD.map((function(DD) {
            return DD.props.dataKey
          })),
          pD = Af[cD],
          iD = function() {
            var DD = (0, vi.d)([]),
              CD = Ni,
              cD = Zi,
              ID = gi;

            function pD(pD) {
              var iD, fD, bD = Array.from(DD.apply(this, arguments), Xi),
                QD = bD.length,
                wD = -1;
              for (const DD of pD)
                for (iD = 0, ++wD; iD < QD; ++iD)(bD[iD][wD] = [0, +ID(DD, bD[iD].key, wD, pD)]).data = DD;
              for (iD = 0, fD = (0, oi.e)(CD(bD)); iD < QD; ++iD) bD[fD[iD]].index = iD;
              return cD(bD, fD), bD
            }
            return pD.keys = function(CD) {
              return arguments.length ? (DD = "function" === typeof CD ? CD : (0, vi.d)(Array.from(CD)), pD) : DD
            }, pD.value = function(DD) {
              return arguments.length ? (ID = "function" === typeof DD ? DD : (0, vi.d)(+DD), pD) : ID
            }, pD.order = function(DD) {
              return arguments.length ? (CD = null == DD ? Ni : "function" === typeof DD ? DD : (0, vi.d)(Array.from(DD)), pD) : CD
            }, pD.offset = function(DD) {
              return arguments.length ? (cD = null == DD ? Zi : DD, pD) : cD
            }, pD
          }().keys(ID).value((function(DD, CD) {
            return +Kf(DD, CD, 0)
          })).order(Ni).offset(pD);
        return iD(DD)
      },
      Db = function(DD, CD, cD, ID, pD, iD) {
        if (!DD) return null;
        var fD = (iD ? CD.reverse() : CD).reduce((function(DD, CD) {
          var pD, iD = null !== (pD = CD.type) && void 0 !== pD && pD.defaultProps ? qf(qf({}, CD.type.defaultProps), CD.props) : CD.props,
            fD = iD.stackId;
          if (iD.hide) return DD;
          var bD = iD[cD],
            QD = DD[bD] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, mf.D)(fD)) {
            var wD = QD.stackGroups[fD] || {
              numericAxisId: cD,
              cateAxisId: ID,
              items: []
            };
            wD.items.push(CD), QD.hasStack = !0, QD.stackGroups[fD] = wD
          } else QD.stackGroups[(0, mf.M)("_stackId_")] = {
            numericAxisId: cD,
            cateAxisId: ID,
            items: [CD]
          };
          return qf(qf({}, DD), {}, Jf({}, bD, QD))
        }), {});
        return Object.keys(fD).reduce((function(CD, iD) {
          var bD = fD[iD];
          if (bD.hasStack) {
            bD.stackGroups = Object.keys(bD.stackGroups).reduce((function(CD, iD) {
              var fD = bD.stackGroups[iD];
              return qf(qf({}, CD), {}, Jf({}, iD, {
                numericAxisId: cD,
                cateAxisId: ID,
                items: fD.items,
                stackedData: Ff(DD, fD.items, pD)
              }))
            }), {})
          }
          return qf(qf({}, CD), {}, Jf({}, iD, bD))
        }), {})
      },
      Cb = function(DD, CD) {
        var cD = CD.realScaleType,
          ID = CD.type,
          pD = CD.tickCount,
          iD = CD.originalDomain,
          fD = CD.allowDecimals,
          bD = cD || CD.scale;
        if ("auto" !== bD && "linear" !== bD) return null;
        if (pD && "number" === ID && iD && ("auto" === iD[0] || "auto" === iD[1])) {
          var QD = DD.domain();
          if (!QD.length) return null;
          var wD = Nf(QD, pD, fD);
          return DD.domain([Pi()(wD), ni()(wD)]), {
            niceTicks: wD
          }
        }
        if (pD && "number" === ID) {
          var SD = DD.domain();
          return {
            niceTicks: gf(SD, pD, fD)
          }
        }
        return null
      };

    function cb(DD) {
      var CD = DD.axis,
        cD = DD.ticks,
        ID = DD.bandSize,
        pD = DD.entry,
        iD = DD.index,
        fD = DD.dataKey;
      if ("category" === CD.type) {
        if (!CD.allowDuplicatedCategory && CD.dataKey && !Ui()(pD[CD.dataKey])) {
          var bD = (0, mf.h)(cD, "value", pD[CD.dataKey]);
          if (bD) return bD.coordinate + ID / 2
        }
        return cD[iD] ? cD[iD].coordinate + ID / 2 : null
      }
      var QD = Kf(pD, Ui()(fD) ? CD.dataKey : fD);
      return Ui()(QD) ? null : CD.scale(QD)
    }
    var Ib = function(DD) {
        var CD = DD.axis,
          cD = DD.ticks,
          ID = DD.offset,
          pD = DD.bandSize,
          iD = DD.entry,
          fD = DD.index;
        if ("category" === CD.type) return cD[fD] ? cD[fD].coordinate + ID : null;
        var bD = Kf(iD, CD.dataKey, CD.domain[fD]);
        return Ui()(bD) ? null : CD.scale(bD) - pD / 2 + ID
      },
      pb = function(DD) {
        var CD = DD.numericAxis,
          cD = CD.scale.domain();
        if ("number" === CD.type) {
          var ID = Math.min(cD[0], cD[1]),
            pD = Math.max(cD[0], cD[1]);
          return ID <= 0 && pD >= 0 ? 0 : pD < 0 ? pD : ID
        }
        return cD[0]
      },
      ib = function(DD, CD) {
        var cD, ID = (null !== (cD = DD.type) && void 0 !== cD && cD.defaultProps ? qf(qf({}, DD.type.defaultProps), DD.props) : DD.props).stackId;
        if ((0, mf.D)(ID)) {
          var pD = CD[ID];
          if (pD) {
            var iD = pD.items.indexOf(DD);
            return iD >= 0 ? pD.stackedData[iD] : null
          }
        }
        return null
      },
      fb = function(DD, CD, cD) {
        return Object.keys(DD).reduce((function(ID, pD) {
          var iD = DD[pD].stackedData.reduce((function(DD, ID) {
            var pD = ID.slice(CD, cD + 1).reduce((function(DD, CD) {
              return [Pi()(CD.concat([DD[0]]).filter(mf.G)), ni()(CD.concat([DD[1]]).filter(mf.G))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(DD[0], pD[0]), Math.max(DD[1], pD[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(iD[0], ID[0]), Math.max(iD[1], ID[1])]
        }), [1 / 0, -1 / 0]).map((function(DD) {
          return DD === 1 / 0 || DD === -1 / 0 ? 0 : DD
        }))
      },
      bb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Qb = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      wb = function(DD, CD, cD) {
        if (qi()(DD)) return DD(CD, cD);
        if (!Array.isArray(DD)) return CD;
        var ID = [];
        if ((0, mf.G)(DD[0])) ID[0] = cD ? DD[0] : Math.min(DD[0], CD[0]);
        else if (bb.test(DD[0])) {
          var pD = +bb.exec(DD[0])[1];
          ID[0] = CD[0] - pD
        } else qi()(DD[0]) ? ID[0] = DD[0](CD[0]) : ID[0] = CD[0];
        if ((0, mf.G)(DD[1])) ID[1] = cD ? DD[1] : Math.max(DD[1], CD[1]);
        else if (Qb.test(DD[1])) {
          var iD = +Qb.exec(DD[1])[1];
          ID[1] = CD[1] + iD
        } else qi()(DD[1]) ? ID[1] = DD[1](CD[1]) : ID[1] = CD[1];
        return ID
      },
      Sb = function(DD, CD, cD) {
        if (DD && DD.scale && DD.scale.bandwidth) {
          var ID = DD.scale.bandwidth();
          if (!cD || ID > 0) return ID
        }
        if (DD && CD && CD.length >= 2) {
          for (var pD = Yi()(CD, (function(DD) {
              return DD.coordinate
            })), iD = 1 / 0, fD = 1, bD = pD.length; fD < bD; fD++) {
            var QD = pD[fD],
              wD = pD[fD - 1];
            iD = Math.min((QD.coordinate || 0) - (wD.coordinate || 0), iD)
          }
          return iD === 1 / 0 ? 0 : iD
        }
        return cD ? void 0 : 0
      },
      Bb = function(DD, CD, cD) {
        return DD && DD.length ? ki()(DD, Vi()(cD, "type.defaultProps.domain")) ? CD : DD : CD
      },
      yb = function(DD, CD) {
        var cD = DD.type.defaultProps ? qf(qf({}, DD.type.defaultProps), DD.props) : DD.props,
          ID = cD.dataKey,
          pD = cD.name,
          iD = cD.unit,
          fD = cD.formatter,
          bD = cD.tooltipType,
          QD = cD.chartType,
          wD = cD.hide;
        return qf(qf({}, (0, nf.b)(DD, !1)), {}, {
          dataKey: ID,
          unit: iD,
          formatter: fD,
          name: pD || ID,
          color: zf(DD),
          value: Kf(CD, ID),
          type: bD,
          payload: CD,
          chartType: QD,
          hide: wD
        })
      }
  },
  5868: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD,
      g: () => BD
    });
    var ID = cD(5712);

    function pD(DD) {
      return pD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, pD(DD)
    }

    function iD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function fD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? iD(Object(cD), !0).forEach((function(CD) {
          bD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : iD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function bD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != pD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != pD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == pD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var QD = {
        widthCache: {},
        cacheCount: 0
      },
      wD = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      SD = "recharts_measurement_span";
    var BD = function(DD) {
        var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === DD || null === DD || ID.e.isSsr) return {
          width: 0,
          height: 0
        };
        var cD = function(DD) {
            var CD = fD({}, DD);
            return Object.keys(CD).forEach((function(DD) {
              CD[DD] || delete CD[DD]
            })), CD
          }(CD),
          pD = JSON.stringify({
            text: DD,
            copyStyle: cD
          });
        if (QD.widthCache[pD]) return QD.widthCache[pD];
        try {
          var iD = document.getElementById(SD);
          iD || ((iD = document.createElement("span")).setAttribute("id", SD), iD.setAttribute("aria-hidden", "true"), document.body.appendChild(iD));
          var bD = fD(fD({}, wD), cD);
          Object.assign(iD.style, bD), iD.textContent = "".concat(DD);
          var BD = iD.getBoundingClientRect(),
            yD = {
              width: BD.width,
              height: BD.height
            };
          return QD.widthCache[pD] = yD, ++QD.cacheCount > 2e3 && (QD.cacheCount = 0, QD.widthCache = {}), yD
        } catch (MD) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      yD = function(DD) {
        return {
          top: DD.top + window.scrollY - document.documentElement.clientTop,
          left: DD.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4927: (DD, CD, cD) => {
    cD.d(CD, {
      D: () => vD,
      G: () => ZD,
      H: () => tD,
      K: () => MD,
      M: () => gD,
      d: () => UD,
      h: () => PD,
      j: () => mD,
      l: () => HD,
      p: () => XD,
      t: () => nD,
      x: () => OD,
      z: () => oD
    });
    var ID = cD(4934),
      pD = cD.n(ID),
      iD = cD(4945),
      fD = cD.n(iD),
      bD = cD(4959),
      QD = cD.n(bD),
      wD = cD(4951),
      SD = cD.n(wD),
      BD = cD(5175),
      yD = cD.n(BD),
      MD = function(DD) {
        return 0 === DD ? 0 : DD > 0 ? 1 : -1
      },
      tD = function(DD) {
        return pD()(DD) && DD.indexOf("%") === DD.length - 1
      },
      ZD = function(DD) {
        return SD()(DD) && !fD()(DD)
      },
      oD = function(DD) {
        return yD()(DD)
      },
      vD = function(DD) {
        return ZD(DD) || pD()(DD)
      },
      ND = 0,
      gD = function(DD) {
        var CD = ++ND;
        return "".concat(DD || "").concat(CD)
      },
      XD = function(DD, CD) {
        var cD, ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!ZD(DD) && !pD()(DD)) return ID;
        if (tD(DD)) {
          var bD = DD.indexOf("%");
          cD = CD * parseFloat(DD.slice(0, bD)) / 100
        } else cD = +DD;
        return fD()(cD) && (cD = ID), iD && cD > CD && (cD = CD), cD
      },
      mD = function(DD) {
        if (!DD) return null;
        var CD = Object.keys(DD);
        return CD && CD.length ? DD[CD[0]] : null
      },
      nD = function(DD) {
        if (!Array.isArray(DD)) return !1;
        for (var CD = DD.length, cD = {}, ID = 0; ID < CD; ID++) {
          if (cD[DD[ID]]) return !0;
          cD[DD[ID]] = !0
        }
        return !1
      },
      OD = function(DD, CD) {
        return ZD(DD) && ZD(CD) ? function(cD) {
          return DD + cD * (CD - DD)
        } : function() {
          return CD
        }
      };

    function PD(DD, CD, cD) {
      return DD && DD.length ? DD.find((function(DD) {
        return DD && ("function" === typeof CD ? CD(DD) : QD()(DD, CD)) === cD
      })) : null
    }
    var HD = function(DD) {
        if (!DD || !DD.length) return null;
        for (var CD = DD.length, cD = 0, ID = 0, pD = 0, iD = 0, fD = 1 / 0, bD = -1 / 0, QD = 0, wD = 0, SD = 0; SD < CD; SD++) cD += QD = DD[SD].cx || 0, ID += wD = DD[SD].cy || 0, pD += QD * wD, iD += QD * QD, fD = Math.min(fD, QD), bD = Math.max(bD, QD);
        var BD = CD * iD !== cD * cD ? (CD * pD - cD * ID) / (CD * iD - cD * cD) : 0;
        return {
          xmin: fD,
          xmax: bD,
          a: BD,
          b: (ID - BD * cD) / CD
        }
      },
      UD = function(DD, CD) {
        return ZD(DD) && ZD(CD) ? DD - CD : pD()(DD) && pD()(CD) ? DD.localeCompare(CD) : DD instanceof Date && CD instanceof Date ? DD.getTime() - CD.getTime() : String(DD).localeCompare(String(CD))
      }
  },
  5712: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    var ID = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(DD) {
        return ID[DD]
      },
      set: function(DD, CD) {
        if ("string" === typeof DD) ID[DD] = CD;
        else {
          var cD = Object.keys(DD);
          cD && cD.length && cD.forEach((function(CD) {
            ID[CD] = DD[CD]
          }))
        }
      }
    }
  },
  5954: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID
    });
    var ID = function(DD, CD) {
      var cD = DD.alwaysShow,
        ID = DD.ifOverflow;
      return cD && (ID = "extendDomain"), ID === CD
    }
  },
  5181: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    var ID = function(DD, CD) {
      for (var cD = arguments.length, ID = new Array(cD > 2 ? cD - 2 : 0), pD = 2; pD < cD; pD++) ID[pD - 2] = arguments[pD]
    }
  },
  5951: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      f: () => yD,
      h: () => wD
    });
    cD(5175), cD(53), cD(5032);

    function ID(DD) {
      return ID = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, ID(DD)
    }

    function pD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function iD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? pD(Object(cD), !0).forEach((function(CD) {
          fD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : pD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function fD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != ID(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var pD = cD.call(DD, CD || "default");
            if ("object" != ID(pD)) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == ID(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var bD = Math.PI / 180,
      QD = function(DD) {
        return 180 * DD / Math.PI
      },
      wD = function(DD, CD, cD, ID) {
        return {
          x: DD + Math.cos(-bD * ID) * cD,
          y: CD + Math.sin(-bD * ID) * cD
        }
      },
      SD = function(DD, CD) {
        var cD = DD.x,
          ID = DD.y,
          pD = CD.cx,
          iD = CD.cy,
          fD = function(DD, CD) {
            var cD = DD.x,
              ID = DD.y,
              pD = CD.x,
              iD = CD.y;
            return Math.sqrt(Math.pow(cD - pD, 2) + Math.pow(ID - iD, 2))
          }({
            x: cD,
            y: ID
          }, {
            x: pD,
            y: iD
          });
        if (fD <= 0) return {
          radius: fD
        };
        var bD = (cD - pD) / fD,
          wD = Math.acos(bD);
        return ID > iD && (wD = 2 * Math.PI - wD), {
          radius: fD,
          angle: QD(wD),
          angleInRadian: wD
        }
      },
      BD = function(DD, CD) {
        var cD = CD.startAngle,
          ID = CD.endAngle,
          pD = Math.floor(cD / 360),
          iD = Math.floor(ID / 360);
        return DD + 360 * Math.min(pD, iD)
      },
      yD = function(DD, CD) {
        var cD = DD.x,
          ID = DD.y,
          pD = SD({
            x: cD,
            y: ID
          }, CD),
          fD = pD.radius,
          bD = pD.angle,
          QD = CD.innerRadius,
          wD = CD.outerRadius;
        if (fD < QD || fD > wD) return !1;
        if (0 === fD) return !0;
        var yD, MD = function(DD) {
            var CD = DD.startAngle,
              cD = DD.endAngle,
              ID = Math.floor(CD / 360),
              pD = Math.floor(cD / 360),
              iD = Math.min(ID, pD);
            return {
              startAngle: CD - 360 * iD,
              endAngle: cD - 360 * iD
            }
          }(CD),
          tD = MD.startAngle,
          ZD = MD.endAngle,
          oD = bD;
        if (tD <= ZD) {
          for (; oD > ZD;) oD -= 360;
          for (; oD < tD;) oD += 360;
          yD = oD >= tD && oD <= ZD
        } else {
          for (; oD > tD;) oD -= 360;
          for (; oD < ZD;) oD += 360;
          yD = oD >= ZD && oD <= tD
        }
        return yD ? iD(iD({}, CD), {}, {
          radius: fD,
          angle: BD(oD, CD)
        }) : null
      }
  },
  5185: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => JD,
      b: () => zD,
      f: () => xD,
      j: () => qD,
      l: () => OD,
      p: () => TD,
      r: () => VD,
      t: () => jD,
      v: () => GD,
      y: () => LD
    });
    var ID = cD(4959),
      pD = cD.n(ID),
      iD = cD(5175),
      fD = cD.n(iD),
      bD = cD(4934),
      QD = cD.n(bD),
      wD = cD(5032),
      SD = cD.n(wD),
      BD = cD(4852),
      yD = cD.n(BD),
      MD = cD(53),
      tD = cD(5190),
      ZD = cD(4927),
      oD = cD(5203),
      vD = cD(5208),
      ND = ["children"],
      gD = ["children"];

    function XD(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD = {};
        for (var ID in DD)
          if (Object.prototype.hasOwnProperty.call(DD, ID)) {
            if (CD.indexOf(ID) >= 0) continue;
            cD[ID] = DD[ID]
          } return cD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }

    function mD(DD) {
      return mD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, mD(DD)
    }
    var nD = {
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
      OD = function(DD) {
        return "string" === typeof DD ? DD : DD ? DD.displayName || DD.name || "Component" : ""
      },
      PD = null,
      HD = null,
      UD = function DD(CD) {
        if (CD === PD && Array.isArray(HD)) return HD;
        var cD = [];
        return MD.Children.forEach(CD, (function(CD) {
          fD()(CD) || ((0, tD.isFragment)(CD) ? cD = cD.concat(DD(CD.props.children)) : cD.push(CD))
        })), HD = cD, PD = CD, cD
      };

    function xD(DD, CD) {
      var cD = [],
        ID = [];
      return ID = Array.isArray(CD) ? CD.map((function(DD) {
        return OD(DD)
      })) : [OD(CD)], UD(DD).forEach((function(DD) {
        var CD = pD()(DD, "type.displayName") || pD()(DD, "type.name"); - 1 !== ID.indexOf(CD) && cD.push(DD)
      })), cD
    }

    function qD(DD, CD) {
      var cD = xD(DD, CD);
      return cD && cD[0]
    }
    var JD = function(DD) {
        if (!DD || !DD.props) return !1;
        var CD = DD.props,
          cD = CD.width,
          ID = CD.height;
        return !(!(0, ZD.G)(cD) || cD <= 0 || !(0, ZD.G)(ID) || ID <= 0)
      },
      KD = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      aD = function(DD) {
        return DD && DD.type && QD()(DD.type) && KD.indexOf(DD.type) >= 0
      },
      VD = function(DD) {
        return DD && "object" === mD(DD) && "clipDot" in DD
      },
      zD = function(DD, CD, cD) {
        if (!DD || "function" === typeof DD || "boolean" === typeof DD) return null;
        var ID = DD;
        if ((0, MD.isValidElement)(DD) && (ID = DD.props), !yD()(ID)) return null;
        var pD = {};
        return Object.keys(ID).forEach((function(DD) {
          var iD;
          (function(DD, CD, cD, ID) {
            var pD, iD = null !== (pD = null === vD.g || void 0 === vD.g ? void 0 : vD.g[ID]) && void 0 !== pD ? pD : [];
            return CD.startsWith("data-") || !SD()(DD) && (ID && iD.includes(CD) || vD.j.includes(CD)) || cD && vD.d.includes(CD)
          })(null === (iD = ID) || void 0 === iD ? void 0 : iD[DD], DD, CD, cD) && (pD[DD] = ID[DD])
        })), pD
      },
      jD = function DD(CD, cD) {
        if (CD === cD) return !0;
        var ID = MD.Children.count(CD);
        if (ID !== MD.Children.count(cD)) return !1;
        if (0 === ID) return !0;
        if (1 === ID) return lD(Array.isArray(CD) ? CD[0] : CD, Array.isArray(cD) ? cD[0] : cD);
        for (var pD = 0; pD < ID; pD++) {
          var iD = CD[pD],
            fD = cD[pD];
          if (Array.isArray(iD) || Array.isArray(fD)) {
            if (!DD(iD, fD)) return !1
          } else if (!lD(iD, fD)) return !1
        }
        return !0
      },
      lD = function(DD, CD) {
        if (fD()(DD) && fD()(CD)) return !0;
        if (!fD()(DD) && !fD()(CD)) {
          var cD = DD.props || {},
            ID = cD.children,
            pD = XD(cD, ND),
            iD = CD.props || {},
            bD = iD.children,
            QD = XD(iD, gD);
          return ID && bD ? (0, oD.c)(pD, QD) && jD(ID, bD) : !ID && !bD && (0, oD.c)(pD, QD)
        }
        return !1
      },
      LD = function(DD, CD) {
        var cD = [],
          ID = {};
        return UD(DD).forEach((function(DD, pD) {
          if (aD(DD)) cD.push(DD);
          else if (DD) {
            var iD = OD(DD.type),
              fD = CD[iD] || {},
              bD = fD.handler,
              QD = fD.once;
            if (bD && (!QD || !ID[iD])) {
              var wD = bD(DD, iD, pD);
              cD.push(wD), ID[iD] = !0
            }
          }
        })), cD
      },
      TD = function(DD) {
        var CD = DD && DD.type;
        return CD && nD[CD] ? nD[CD] : null
      },
      GD = function(DD, CD) {
        return UD(CD).indexOf(DD)
      }
  },
  5203: (DD, CD, cD) => {
    function ID(DD, CD) {
      for (var cD in DD)
        if ({}.hasOwnProperty.call(DD, cD) && (!{}.hasOwnProperty.call(CD, cD) || DD[cD] !== CD[cD])) return !1;
      for (var ID in CD)
        if ({}.hasOwnProperty.call(CD, ID) && !{}.hasOwnProperty.call(DD, ID)) return !1;
      return !0
    }
    cD.d(CD, {
      c: () => ID
    })
  },
  5941: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => SD
    });
    var ID = cD(5778),
      pD = cD(5873),
      iD = cD(5185);

    function fD(DD) {
      return fD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, fD(DD)
    }

    function bD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function QD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? bD(Object(cD), !0).forEach((function(CD) {
          wD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : bD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function wD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != fD(DD) || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != fD(ID)) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == fD(CD) ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }
    var SD = function(DD) {
      var CD = DD.children,
        cD = DD.formattedGraphicalItems,
        fD = DD.legendWidth,
        bD = DD.legendContent,
        wD = (0, iD.j)(CD, ID.b);
      if (!wD) return null;
      var SD, BD = ID.b.defaultProps,
        yD = void 0 !== BD ? QD(QD({}, BD), wD.props) : {};
      return SD = wD.props && wD.props.payload ? wD.props && wD.props.payload : "children" === bD ? (cD || []).reduce((function(DD, CD) {
        var cD = CD.item,
          ID = CD.props,
          pD = ID.sectors || ID.data || [];
        return DD.concat(pD.map((function(DD) {
          return {
            type: wD.props.iconType || cD.props.legendType,
            value: DD.name,
            color: DD.fill,
            payload: DD
          }
        })))
      }), []) : (cD || []).map((function(DD) {
        var CD = DD.item,
          cD = CD.type.defaultProps,
          ID = void 0 !== cD ? QD(QD({}, cD), CD.props) : {},
          iD = ID.dataKey,
          fD = ID.name,
          bD = ID.legendType;
        return {
          inactive: ID.hide,
          dataKey: iD,
          type: yD.iconType || bD || "square",
          color: (0, pD.D)(CD),
          value: fD || iD,
          payload: ID
        }
      })), QD(QD(QD({}, yD), ID.b.getWithHeight(wD, fD)), {}, {
        payload: SD,
        item: wD
      })
    }
  },
  5720: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD
    });
    var ID = cD(5727),
      pD = cD.n(ID),
      iD = cD(5032),
      fD = cD.n(iD);

    function bD(DD, CD, cD) {
      return !0 === CD ? pD()(DD, cD) : fD()(CD) ? pD()(DD, CD) : DD
    }
  },
  5208: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD,
      g: () => wD,
      j: () => bD,
      m: () => BD,
      o: () => yD
    });
    var ID = cD(53),
      pD = cD(4852),
      iD = cD.n(pD);

    function fD(DD) {
      return fD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, fD(DD)
    }
    var bD = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "VM", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      QD = ["points", "pathLength"],
      wD = {
        svg: ["viewBox", "children"],
        polygon: QD,
        polyline: QD
      },
      SD = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      BD = function(DD, CD) {
        if (!DD || "function" === typeof DD || "boolean" === typeof DD) return null;
        var cD = DD;
        if ((0, ID.isValidElement)(DD) && (cD = DD.props), !iD()(cD)) return null;
        var pD = {};
        return Object.keys(cD).forEach((function(DD) {
          SD.includes(DD) && (pD[DD] = CD || function(CD) {
            return cD[DD](cD, CD)
          })
        })), pD
      },
      yD = function(DD, CD, cD) {
        if (!iD()(DD) || "object" !== fD(DD)) return null;
        var ID = null;
        return Object.keys(DD).forEach((function(pD) {
          var iD = DD[pD];
          SD.includes(pD) && "function" === typeof iD && (ID || (ID = {}), ID[pD] = function(DD, CD, cD) {
            return function(ID) {
              return DD(CD, cD, ID), null
            }
          }(iD, CD, cD))
        })), ID
      }
  },
  5195: (DD, CD) => {
    var cD, ID = Symbol.for("react.element"),
      pD = Symbol.for("react.portal"),
      iD = Symbol.for("react.fragment"),
      fD = Symbol.for("react.strict_mode"),
      bD = Symbol.for("react.profiler"),
      QD = Symbol.for("react.provider"),
      wD = Symbol.for("react.context"),
      SD = Symbol.for("react.server_context"),
      BD = Symbol.for("react.forward_ref"),
      yD = Symbol.for("react.suspense"),
      MD = Symbol.for("react.suspense_list"),
      tD = Symbol.for("react.memo"),
      ZD = Symbol.for("react.lazy"),
      oD = Symbol.for("react.offscreen");

    function vD(DD) {
      if ("object" === typeof DD && null !== DD) {
        var CD = DD.$$typeof;
        switch (CD) {
          case ID:
            switch (DD = DD.type) {
              case iD:
              case bD:
              case fD:
              case yD:
              case MD:
                return DD;
              default:
                switch (DD = DD && DD.$$typeof) {
                  case SD:
                  case wD:
                  case BD:
                  case ZD:
                  case tD:
                  case QD:
                    return DD;
                  default:
                    return CD
                }
            }
          case pD:
            return CD
        }
      }
    }
    cD = Symbol.for("react.module.reference"), CD.isFragment = function(DD) {
      return vD(DD) === iD
    }
  },
  5190: (DD, CD, cD) => {
    DD.exports = cD(5195)
  },
  4841: (DD, CD, cD) => {
    function ID(DD) {
      var CD, cD, pD = "";
      if ("string" == typeof DD || "number" == typeof DD) pD += DD;
      else if ("object" == typeof DD)
        if (Array.isArray(DD)) {
          var iD = DD.length;
          for (CD = 0; CD < iD; CD++) DD[CD] && (cD = ID(DD[CD])) && (pD && (pD += " "), pD += cD)
        } else
          for (cD in DD) DD[cD] && (pD && (pD += " "), pD += cD);
      return pD
    }
    cD.d(CD, {
      e: () => pD
    });
    const pD = function() {
      for (var DD, CD, cD = 0, pD = "", iD = arguments.length; cD < iD; cD++)(DD = arguments[cD]) && (CD = ID(DD)) && (pD && (pD += " "), pD += CD);
      return pD
    }
  },
  5875: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      d: () => bD
    });
    var ID = cD(5882),
      pD = cD(5888);

    function iD() {
      var DD, CD, cD = (0, pD.e)().unknown(void 0),
        fD = cD.domain,
        bD = cD.range,
        QD = 0,
        wD = 1,
        SD = !1,
        BD = 0,
        yD = 0,
        MD = .5;

      function tD() {
        var cD = fD().length,
          ID = wD < QD,
          pD = ID ? wD : QD,
          iD = ID ? QD : wD;
        DD = (iD - pD) / Math.max(1, cD - BD + 2 * yD), SD && (DD = Math.floor(DD)), pD += (iD - pD - DD * (cD - BD)) * MD, CD = DD * (1 - BD), SD && (pD = Math.round(pD), CD = Math.round(CD));
        var tD = function(DD, CD, cD) {
          DD = +DD, CD = +CD, cD = (pD = arguments.length) < 2 ? (CD = DD, DD = 0, 1) : pD < 3 ? 1 : +cD;
          for (var ID = -1, pD = 0 | Math.max(0, Math.ceil((CD - DD) / cD)), iD = new Array(pD); ++ID < pD;) iD[ID] = DD + ID * cD;
          return iD
        }(cD).map((function(CD) {
          return pD + DD * CD
        }));
        return bD(ID ? tD.reverse() : tD)
      }
      return delete cD.unknown, cD.domain = function(DD) {
        return arguments.length ? (fD(DD), tD()) : fD()
      }, cD.range = function(DD) {
        return arguments.length ? ([QD, wD] = DD, QD = +QD, wD = +wD, tD()) : [QD, wD]
      }, cD.rangeRound = function(DD) {
        return [QD, wD] = DD, QD = +QD, wD = +wD, SD = !0, tD()
      }, cD.bandwidth = function() {
        return CD
      }, cD.step = function() {
        return DD
      }, cD.round = function(DD) {
        return arguments.length ? (SD = !!DD, tD()) : SD
      }, cD.padding = function(DD) {
        return arguments.length ? (BD = Math.min(1, yD = +DD), tD()) : BD
      }, cD.paddingInner = function(DD) {
        return arguments.length ? (BD = Math.min(1, DD), tD()) : BD
      }, cD.paddingOuter = function(DD) {
        return arguments.length ? (yD = +DD, tD()) : yD
      }, cD.align = function(DD) {
        return arguments.length ? (MD = Math.max(0, Math.min(1, DD)), tD()) : MD
      }, cD.copy = function() {
        return iD(fD(), [QD, wD]).round(SD).paddingInner(BD).paddingOuter(yD).align(MD)
      }, ID.h.apply(tD(), arguments)
    }

    function fD(DD) {
      var CD = DD.copy;
      return DD.padding = DD.paddingOuter, delete DD.paddingInner, delete DD.paddingOuter, DD.copy = function() {
        return fD(CD())
      }, DD
    }

    function bD() {
      return fD(iD.apply(null, arguments).paddingInner(1))
    }
  },
  5882: (DD, CD, cD) => {
    function ID(DD, CD) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(DD);
          break;
        default:
          this.range(CD).domain(DD)
      }
      return this
    }

    function pD(DD, CD) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof DD ? this.interpolator(DD) : this.range(DD);
          break;
        default:
          this.domain(DD), "function" === typeof CD ? this.interpolator(CD) : this.range(CD)
      }
      return this
    }
    cD.d(CD, {
      d: () => pD,
      h: () => ID
    })
  },
  5888: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => SD,
      f: () => wD
    });
    class ID extends Map {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bD;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: CD
            }
          }), null != DD)
          for (const [cD, ID] of DD) this.set(cD, ID)
      }
      get(DD) {
        return super.get(pD(this, DD))
      }
      has(DD) {
        return super.has(pD(this, DD))
      }
      set(DD, CD) {
        return super.set(iD(this, DD), CD)
      }
      delete(DD) {
        return super.delete(fD(this, DD))
      }
    }
    Set;

    function pD(DD, CD) {
      let {
        _intern: cD,
        _key: ID
      } = DD;
      const pD = ID(CD);
      return cD.has(pD) ? cD.get(pD) : CD
    }

    function iD(DD, CD) {
      let {
        _intern: cD,
        _key: ID
      } = DD;
      const pD = ID(CD);
      return cD.has(pD) ? cD.get(pD) : (cD.set(pD, CD), CD)
    }

    function fD(DD, CD) {
      let {
        _intern: cD,
        _key: ID
      } = DD;
      const pD = ID(CD);
      return cD.has(pD) && (CD = cD.get(pD), cD.delete(pD)), CD
    }

    function bD(DD) {
      return null !== DD && "object" === typeof DD ? DD.valueOf() : DD
    }
    var QD = cD(5882);
    const wD = Symbol("implicit");

    function SD() {
      var DD = new ID,
        CD = [],
        cD = [],
        pD = wD;

      function iD(ID) {
        let iD = DD.get(ID);
        if (void 0 === iD) {
          if (pD !== wD) return pD;
          DD.set(ID, iD = CD.push(ID) - 1)
        }
        return cD[iD % cD.length]
      }
      return iD.domain = function(cD) {
        if (!arguments.length) return CD.slice();
        CD = [], DD = new ID;
        for (const ID of cD) DD.has(ID) || DD.set(ID, CD.push(ID) - 1);
        return iD
      }, iD.range = function(DD) {
        return arguments.length ? (cD = Array.from(DD), iD) : cD.slice()
      }, iD.unknown = function(DD) {
        return arguments.length ? (pD = DD, iD) : pD
      }, iD.copy = function() {
        return SD(CD, cD).unknown(pD)
      }, QD.h.apply(iD, arguments), iD
    }
  },
  5947: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    Array.prototype.slice;

    function ID(DD) {
      return "object" === typeof DD && "length" in DD ? DD : Array.from(DD)
    }
  },
  5835: (DD, CD, cD) => {
    function ID(DD) {
      return function() {
        return DD
      }
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  5843: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    const ID = Math.PI,
      pD = 2 * ID,
      iD = 1e-6,
      fD = pD - iD;

    function bD(DD) {
      this._ += DD[0];
      for (let CD = 1, cD = DD.length; CD < cD; ++CD) this._ += arguments[CD] + DD[CD]
    }
    class QD {
      constructor(DD) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == DD ? bD : function(DD) {
          let CD = Math.floor(DD);
          if (!(CD >= 0)) throw new Error(`invalid digits: ${DD}`);
          if (CD > 15) return bD;
          const cD = 10 ** CD;
          return function(DD) {
            this._ += DD[0];
            for (let CD = 1, ID = DD.length; CD < ID; ++CD) this._ += Math.round(arguments[CD] * cD) / cD + DD[CD]
          }
        }(DD)
      }
      moveTo(DD, CD) {
        this._append`M${this._x0=this._x1=+DD},${this._y0=this._y1=+CD}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(DD, CD) {
        this._append`L${this._x1=+DD},${this._y1=+CD}`
      }
      quadraticCurveTo(DD, CD, cD, ID) {
        this._append`Q${+DD},${+CD},${this._x1=+cD},${this._y1=+ID}`
      }
      bezierCurveTo(DD, CD, cD, ID, pD, iD) {
        this._append`C${+DD},${+CD},${+cD},${+ID},${this._x1=+pD},${this._y1=+iD}`
      }
      arcTo(DD, CD, cD, pD, fD) {
        if (DD = +DD, CD = +CD, cD = +cD, pD = +pD, (fD = +fD) < 0) throw new Error(`negative radius: ${fD}`);
        let bD = this._x1,
          QD = this._y1,
          wD = cD - DD,
          SD = pD - CD,
          BD = bD - DD,
          yD = QD - CD,
          MD = BD * BD + yD * yD;
        if (null === this._x1) this._append`M${this._x1=DD},${this._y1=CD}`;
        else if (MD > iD)
          if (Math.abs(yD * wD - SD * BD) > iD && fD) {
            let tD = cD - bD,
              ZD = pD - QD,
              oD = wD * wD + SD * SD,
              vD = tD * tD + ZD * ZD,
              ND = Math.sqrt(oD),
              gD = Math.sqrt(MD),
              XD = fD * Math.tan((ID - Math.acos((oD + MD - vD) / (2 * ND * gD))) / 2),
              mD = XD / gD,
              nD = XD / ND;
            Math.abs(mD - 1) > iD && this._append`L${DD+mD*BD},${CD+mD*yD}`, this._append`A${fD},${fD},0,0,${+(yD*tD>BD*ZD)},${this._x1=DD+nD*wD},${this._y1=CD+nD*SD}`
          } else this._append`L${this._x1=DD},${this._y1=CD}`;
        else;
      }
      arc(DD, CD, cD, bD, QD, wD) {
        if (DD = +DD, CD = +CD, wD = !!wD, (cD = +cD) < 0) throw new Error(`negative radius: ${cD}`);
        let SD = cD * Math.cos(bD),
          BD = cD * Math.sin(bD),
          yD = DD + SD,
          MD = CD + BD,
          tD = 1 ^ wD,
          ZD = wD ? bD - QD : QD - bD;
        null === this._x1 ? this._append`M${yD},${MD}` : (Math.abs(this._x1 - yD) > iD || Math.abs(this._y1 - MD) > iD) && this._append`L${yD},${MD}`, cD && (ZD < 0 && (ZD = ZD % pD + pD), ZD > fD ? this._append`A${cD},${cD},0,1,${tD},${DD-SD},${CD-BD}A${cD},${cD},0,1,${tD},${this._x1=yD},${this._y1=MD}` : ZD > iD && this._append`A${cD},${cD},0,${+(ZD>=ID)},${tD},${this._x1=DD+cD*Math.cos(QD)},${this._y1=CD+cD*Math.sin(QD)}`)
      }
      rect(DD, CD, cD, ID) {
        this._append`M${this._x0=this._x1=+DD},${this._y0=this._y1=+CD}h${cD=+cD}v${+ID}h${-cD}Z`
      }
      toString() {
        return this._
      }
    }

    function wD(DD) {
      let CD = 3;
      return DD.digits = function(cD) {
        if (!arguments.length) return CD;
        if (null == cD) CD = null;
        else {
          const DD = Math.floor(cD);
          if (!(DD >= 0)) throw new RangeError(`invalid digits: ${cD}`);
          CD = DD
        }
        return DD
      }, () => new QD(CD)
    }
    QD.prototype
  },
  5688: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = !0,
      pD = "Invariant failed";

    function iD(DD, CD) {
      if (!DD) {
        if (ID) throw new Error(pD);
        var cD = "function" === typeof CD ? CD() : CD,
          iD = cD ? "".concat(pD, ": ").concat(cD) : pD;
        throw new Error(iD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);