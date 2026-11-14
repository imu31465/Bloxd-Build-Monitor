/*! For license information please see 90jf8k.95.dccda9e2.chunk.js.LICENSE.txt */
export const id = 95;
export const ids = [95];
export const modules = {
  5162: function(FF, WF, SF) {
    var CF;
    ! function() {
      var AF, uF = 1e9,
        hF = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        bW = !0,
        dF = "[DecimalError] ",
        PF = dF + "Invalid argument: ",
        RF = dF + "Exponent out of range: ",
        iW = Math.floor,
        eF = Math.pow,
        EF = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        QF = 1e7,
        rW = 9007199254740991,
        gW = iW(1286742750677284.5),
        tW = {};

      function TF(FF, WF) {
        var SF, CF, AF, uF, hF, dF, PF, RF, iW = FF.constructor,
          eF = iW.precision;
        if (!FF.s || !WF.s) return WF.s || (WF = new iW(FF)), bW ? xW(WF, eF) : WF;
        if (PF = FF.d, RF = WF.d, hF = FF.e, AF = WF.e, PF = PF.slice(), uF = hF - AF) {
          for (uF < 0 ? (CF = PF, uF = -uF, dF = RF.length) : (CF = RF, AF = hF, dF = PF.length), uF > (dF = (hF = Math.ceil(eF / 7)) > dF ? hF + 1 : dF + 1) && (uF = dF, CF.length = 1), CF.reverse(); uF--;) CF.push(0);
          CF.reverse()
        }
        for ((dF = PF.length) - (uF = RF.length) < 0 && (uF = dF, CF = RF, RF = PF, PF = CF), SF = 0; uF;) SF = (PF[--uF] = PF[uF] + RF[uF] + SF) / QF | 0, PF[uF] %= QF;
        for (SF && (PF.unshift(SF), ++AF), dF = PF.length; 0 == PF[--dF];) PF.pop();
        return WF.d = PF, WF.e = AF, bW ? xW(WF, eF) : WF
      }

      function aW(FF, WF, SF) {
        if (FF !== ~~FF || FF < WF || FF > SF) throw Error(PF + FF)
      }

      function kW(FF) {
        var WF, SF, CF, AF = FF.length - 1,
          uF = "",
          hF = FF[0];
        if (AF > 0) {
          for (uF += hF, WF = 1; WF < AF; WF++)(SF = 7 - (CF = FF[WF] + "").length) && (uF += LF(SF)), uF += CF;
          (SF = 7 - (CF = (hF = FF[WF]) + "").length) && (uF += LF(SF))
        } else if (0 === hF) return "0";
        for (; hF % 10 === 0;) hF /= 10;
        return uF + hF
      }
      tW.absoluteValue = tW.abs = function() {
        var FF = new this.constructor(this);
        return FF.s && (FF.s = 1), FF
      }, tW.comparedTo = tW.cmp = function(FF) {
        var WF, SF, CF, AF, uF = this;
        if (FF = new uF.constructor(FF), uF.s !== FF.s) return uF.s || -FF.s;
        if (uF.e !== FF.e) return uF.e > FF.e ^ uF.s < 0 ? 1 : -1;
        for (WF = 0, SF = (CF = uF.d.length) < (AF = FF.d.length) ? CF : AF; WF < SF; ++WF)
          if (uF.d[WF] !== FF.d[WF]) return uF.d[WF] > FF.d[WF] ^ uF.s < 0 ? 1 : -1;
        return CF === AF ? 0 : CF > AF ^ uF.s < 0 ? 1 : -1
      }, tW.decimalPlaces = tW.dp = function() {
        var FF = this,
          WF = FF.d.length - 1,
          SF = 7 * (WF - FF.e);
        if (WF = FF.d[WF])
          for (; WF % 10 == 0; WF /= 10) SF--;
        return SF < 0 ? 0 : SF
      }, tW.dividedBy = tW.div = function(FF) {
        return qW(this, new this.constructor(FF))
      }, tW.dividedToIntegerBy = tW.idiv = function(FF) {
        var WF = this.constructor;
        return xW(qW(this, new WF(FF), 0, 1), WF.precision)
      }, tW.equals = tW.eq = function(FF) {
        return !this.cmp(FF)
      }, tW.exponent = function() {
        return NF(this)
      }, tW.greaterThan = tW.gt = function(FF) {
        return this.cmp(FF) > 0
      }, tW.greaterThanOrEqualTo = tW.gte = function(FF) {
        return this.cmp(FF) >= 0
      }, tW.isInteger = tW.isint = function() {
        return this.e > this.d.length - 2
      }, tW.isNegative = tW.isneg = function() {
        return this.s < 0
      }, tW.isPositive = tW.ispos = function() {
        return this.s > 0
      }, tW.isZero = function() {
        return 0 === this.s
      }, tW.lessThan = tW.lt = function(FF) {
        return this.cmp(FF) < 0
      }, tW.lessThanOrEqualTo = tW.lte = function(FF) {
        return this.cmp(FF) < 1
      }, tW.logarithm = tW.log = function(FF) {
        var WF, SF = this,
          CF = SF.constructor,
          uF = CF.precision,
          hF = uF + 5;
        if (void 0 === FF) FF = new CF(10);
        else if ((FF = new CF(FF)).s < 1 || FF.eq(AF)) throw Error(dF + "NaN");
        if (SF.s < 1) throw Error(dF + (SF.s ? "NaN" : "-Infinity"));
        return SF.eq(AF) ? new CF(0) : (bW = !1, WF = qW(mW(SF, hF), mW(FF, hF), hF), bW = !0, xW(WF, uF))
      }, tW.minus = tW.sub = function(FF) {
        var WF = this;
        return FF = new WF.constructor(FF), WF.s == FF.s ? ZF(WF, FF) : TF(WF, (FF.s = -FF.s, FF))
      }, tW.modulo = tW.mod = function(FF) {
        var WF, SF = this,
          CF = SF.constructor,
          AF = CF.precision;
        if (!(FF = new CF(FF)).s) throw Error(dF + "NaN");
        return SF.s ? (bW = !1, WF = qW(SF, FF, 0, 1).times(FF), bW = !0, SF.minus(WF)) : xW(new CF(SF), AF)
      }, tW.naturalExponential = tW.exp = function() {
        return VF(this)
      }, tW.naturalLogarithm = tW.ln = function() {
        return mW(this)
      }, tW.negated = tW.neg = function() {
        var FF = new this.constructor(this);
        return FF.s = -FF.s || 0, FF
      }, tW.plus = tW.add = function(FF) {
        var WF = this;
        return FF = new WF.constructor(FF), WF.s == FF.s ? TF(WF, FF) : ZF(WF, (FF.s = -FF.s, FF))
      }, tW.precision = tW.sd = function(FF) {
        var WF, SF, CF, AF = this;
        if (void 0 !== FF && FF !== !!FF && 1 !== FF && 0 !== FF) throw Error(PF + FF);
        if (WF = NF(AF) + 1, SF = 7 * (CF = AF.d.length - 1) + 1, CF = AF.d[CF]) {
          for (; CF % 10 == 0; CF /= 10) SF--;
          for (CF = AF.d[0]; CF >= 10; CF /= 10) SF++
        }
        return FF && WF > SF ? WF : SF
      }, tW.squareRoot = tW.sqrt = function() {
        var FF, WF, SF, CF, AF, uF, hF, PF = this,
          RF = PF.constructor;
        if (PF.s < 1) {
          if (!PF.s) return new RF(0);
          throw Error(dF + "NaN")
        }
        for (FF = NF(PF), bW = !1, 0 == (AF = Math.sqrt(+PF)) || AF == 1 / 0 ? (((WF = kW(PF.d)).length + FF) % 2 == 0 && (WF += "0"), AF = Math.sqrt(WF), FF = iW((FF + 1) / 2) - (FF < 0 || FF % 2), CF = new RF(WF = AF == 1 / 0 ? "1e" + FF : (WF = AF.toExponential()).slice(0, WF.indexOf("e") + 1) + FF)) : CF = new RF(AF.toString()), AF = hF = (SF = RF.precision) + 3;;)
          if (CF = (uF = CF).plus(qW(PF, uF, hF + 2)).times(.5), kW(uF.d).slice(0, hF) === (WF = kW(CF.d)).slice(0, hF)) {
            if (WF = WF.slice(hF - 3, hF + 1), AF == hF && "4999" == WF) {
              if (xW(uF, SF + 1, 0), uF.times(uF).eq(PF)) {
                CF = uF;
                break
              }
            } else if ("9999" != WF) break;
            hF += 4
          } return bW = !0, xW(CF, SF)
      }, tW.times = tW.mul = function(FF) {
        var WF, SF, CF, AF, uF, hF, dF, PF, RF, iW = this,
          eF = iW.constructor,
          EF = iW.d,
          rW = (FF = new eF(FF)).d;
        if (!iW.s || !FF.s) return new eF(0);
        for (FF.s *= iW.s, SF = iW.e + FF.e, (PF = EF.length) < (RF = rW.length) && (uF = EF, EF = rW, rW = uF, hF = PF, PF = RF, RF = hF), uF = [], CF = hF = PF + RF; CF--;) uF.push(0);
        for (CF = RF; --CF >= 0;) {
          for (WF = 0, AF = PF + CF; AF > CF;) dF = uF[AF] + rW[CF] * EF[AF - CF - 1] + WF, uF[AF--] = dF % QF | 0, WF = dF / QF | 0;
          uF[AF] = (uF[AF] + WF) % QF | 0
        }
        for (; !uF[--hF];) uF.pop();
        return WF ? ++SF : uF.shift(), FF.d = uF, FF.e = SF, bW ? xW(FF, eF.precision) : FF
      }, tW.toDecimalPlaces = tW.todp = function(FF, WF) {
        var SF = this,
          CF = SF.constructor;
        return SF = new CF(SF), void 0 === FF ? SF : (aW(FF, 0, uF), void 0 === WF ? WF = CF.rounding : aW(WF, 0, 8), xW(SF, FF + NF(SF) + 1, WF))
      }, tW.toExponential = function(FF, WF) {
        var SF, CF = this,
          AF = CF.constructor;
        return void 0 === FF ? SF = oF(CF, !0) : (aW(FF, 0, uF), void 0 === WF ? WF = AF.rounding : aW(WF, 0, 8), SF = oF(CF = xW(new AF(CF), FF + 1, WF), !0, FF + 1)), SF
      }, tW.toFixed = function(FF, WF) {
        var SF, CF, AF = this,
          hF = AF.constructor;
        return void 0 === FF ? oF(AF) : (aW(FF, 0, uF), void 0 === WF ? WF = hF.rounding : aW(WF, 0, 8), SF = oF((CF = xW(new hF(AF), FF + NF(AF) + 1, WF)).abs(), !1, FF + NF(CF) + 1), AF.isneg() && !AF.isZero() ? "-" + SF : SF)
      }, tW.toInteger = tW.toint = function() {
        var FF = this,
          WF = FF.constructor;
        return xW(new WF(FF), NF(FF) + 1, WF.rounding)
      }, tW.toNumber = function() {
        return +this
      }, tW.toPower = tW.pow = function(FF) {
        var WF, SF, CF, uF, hF, PF, RF = this,
          eF = RF.constructor,
          EF = +(FF = new eF(FF));
        if (!FF.s) return new eF(AF);
        if (!(RF = new eF(RF)).s) {
          if (FF.s < 1) throw Error(dF + "Infinity");
          return RF
        }
        if (RF.eq(AF)) return RF;
        if (CF = eF.precision, FF.eq(AF)) return xW(RF, CF);
        if (PF = (WF = FF.e) >= (SF = FF.d.length - 1), hF = RF.s, PF) {
          if ((SF = EF < 0 ? -EF : EF) <= rW) {
            for (uF = new eF(AF), WF = Math.ceil(CF / 7 + 4), bW = !1; SF % 2 && YF((uF = uF.times(RF)).d, WF), 0 !== (SF = iW(SF / 2));) YF((RF = RF.times(RF)).d, WF);
            return bW = !0, FF.s < 0 ? new eF(AF).div(uF) : xW(uF, CF)
          }
        } else if (hF < 0) throw Error(dF + "NaN");
        return hF = hF < 0 && 1 & FF.d[Math.max(WF, SF)] ? -1 : 1, RF.s = 1, bW = !1, uF = FF.times(mW(RF, CF + 12)), bW = !0, (uF = VF(uF)).s = hF, uF
      }, tW.toPrecision = function(FF, WF) {
        var SF, CF, AF = this,
          hF = AF.constructor;
        return void 0 === FF ? CF = oF(AF, (SF = NF(AF)) <= hF.toExpNeg || SF >= hF.toExpPos) : (aW(FF, 1, uF), void 0 === WF ? WF = hF.rounding : aW(WF, 0, 8), CF = oF(AF = xW(new hF(AF), FF, WF), FF <= (SF = NF(AF)) || SF <= hF.toExpNeg, FF)), CF
      }, tW.toSignificantDigits = tW.tosd = function(FF, WF) {
        var SF = this.constructor;
        return void 0 === FF ? (FF = SF.precision, WF = SF.rounding) : (aW(FF, 1, uF), void 0 === WF ? WF = SF.rounding : aW(WF, 0, 8)), xW(new SF(this), FF, WF)
      }, tW.toString = tW.valueOf = tW.val = tW.toJSON = function() {
        var FF = this,
          WF = NF(FF),
          SF = FF.constructor;
        return oF(FF, WF <= SF.toExpNeg || WF >= SF.toExpPos)
      };
      var qW = function() {
        function FF(FF, WF) {
          var SF, CF = 0,
            AF = FF.length;
          for (FF = FF.slice(); AF--;) SF = FF[AF] * WF + CF, FF[AF] = SF % QF | 0, CF = SF / QF | 0;
          return CF && FF.unshift(CF), FF
        }

        function WF(FF, WF, SF, CF) {
          var AF, uF;
          if (SF != CF) uF = SF > CF ? 1 : -1;
          else
            for (AF = uF = 0; AF < SF; AF++)
              if (FF[AF] != WF[AF]) {
                uF = FF[AF] > WF[AF] ? 1 : -1;
                break
              } return uF
        }

        function SF(FF, WF, SF) {
          for (var CF = 0; SF--;) FF[SF] -= CF, CF = FF[SF] < WF[SF] ? 1 : 0, FF[SF] = CF * QF + FF[SF] - WF[SF];
          for (; !FF[0] && FF.length > 1;) FF.shift()
        }
        return function(CF, AF, uF, hF) {
          var bW, PF, RF, iW, eF, EF, rW, gW, tW, TF, aW, kW, qW, VF, DF, LF, mW, OF, ZF = CF.constructor,
            oF = CF.s == AF.s ? 1 : -1,
            YF = CF.d,
            MF = AF.d;
          if (!CF.s) return new ZF(CF);
          if (!AF.s) throw Error(dF + "Division by zero");
          for (PF = CF.e - AF.e, mW = MF.length, DF = YF.length, gW = (rW = new ZF(oF)).d = [], RF = 0; MF[RF] == (YF[RF] || 0);) ++RF;
          if (MF[RF] > (YF[RF] || 0) && --PF, (kW = null == uF ? uF = ZF.precision : hF ? uF + (NF(CF) - NF(AF)) + 1 : uF) < 0) return new ZF(0);
          if (kW = kW / 7 + 2 | 0, RF = 0, 1 == mW)
            for (iW = 0, MF = MF[0], kW++;
              (RF < DF || iW) && kW--; RF++) qW = iW * QF + (YF[RF] || 0), gW[RF] = qW / MF | 0, iW = qW % MF | 0;
          else {
            for ((iW = QF / (MF[0] + 1) | 0) > 1 && (MF = FF(MF, iW), YF = FF(YF, iW), mW = MF.length, DF = YF.length), VF = mW, TF = (tW = YF.slice(0, mW)).length; TF < mW;) tW[TF++] = 0;
            (OF = MF.slice()).unshift(0), LF = MF[0], MF[1] >= QF / 2 && ++LF;
            do {
              iW = 0, (bW = WF(MF, tW, mW, TF)) < 0 ? (aW = tW[0], mW != TF && (aW = aW * QF + (tW[1] || 0)), (iW = aW / LF | 0) > 1 ? (iW >= QF && (iW = QF - 1), 1 == (bW = WF(eF = FF(MF, iW), tW, EF = eF.length, TF = tW.length)) && (iW--, SF(eF, mW < EF ? OF : MF, EF))) : (0 == iW && (bW = iW = 1), eF = MF.slice()), (EF = eF.length) < TF && eF.unshift(0), SF(tW, eF, TF), -1 == bW && (bW = WF(MF, tW, mW, TF = tW.length)) < 1 && (iW++, SF(tW, mW < TF ? OF : MF, TF)), TF = tW.length) : 0 === bW && (iW++, tW = [0]), gW[RF++] = iW, bW && tW[0] ? tW[TF++] = YF[VF] || 0 : (tW = [YF[VF]], TF = 1)
            } while ((VF++ < DF || void 0 !== tW[0]) && kW--)
          }
          return gW[0] || gW.shift(), rW.e = PF, xW(rW, hF ? uF + NF(rW) + 1 : uF)
        }
      }();

      function VF(FF, WF) {
        var SF, CF, uF, hF, dF, PF = 0,
          iW = 0,
          EF = FF.constructor,
          QF = EF.precision;
        if (NF(FF) > 16) throw Error(RF + NF(FF));
        if (!FF.s) return new EF(AF);
        for (null == WF ? (bW = !1, dF = QF) : dF = WF, hF = new EF(.03125); FF.abs().gte(.1);) FF = FF.times(hF), iW += 5;
        for (dF += Math.log(eF(2, iW)) / Math.LN10 * 2 + 5 | 0, SF = CF = uF = new EF(AF), EF.precision = dF;;) {
          if (CF = xW(CF.times(FF), dF), SF = SF.times(++PF), kW((hF = uF.plus(qW(CF, SF, dF))).d).slice(0, dF) === kW(uF.d).slice(0, dF)) {
            for (; iW--;) uF = xW(uF.times(uF), dF);
            return EF.precision = QF, null == WF ? (bW = !0, xW(uF, QF)) : uF
          }
          uF = hF
        }
      }

      function NF(FF) {
        for (var WF = 7 * FF.e, SF = FF.d[0]; SF >= 10; SF /= 10) WF++;
        return WF
      }

      function DF(FF, WF, SF) {
        if (WF > FF.LN10.sd()) throw bW = !0, SF && (FF.precision = SF), Error(dF + "LN10 precision limit exceeded");
        return xW(new FF(FF.LN10), WF)
      }

      function LF(FF) {
        for (var WF = ""; FF--;) WF += "0";
        return WF
      }

      function mW(FF, WF) {
        var SF, CF, uF, hF, PF, RF, iW, eF, EF, QF = 1,
          rW = FF,
          gW = rW.d,
          tW = rW.constructor,
          TF = tW.precision;
        if (rW.s < 1) throw Error(dF + (rW.s ? "NaN" : "-Infinity"));
        if (rW.eq(AF)) return new tW(0);
        if (null == WF ? (bW = !1, eF = TF) : eF = WF, rW.eq(10)) return null == WF && (bW = !0), DF(tW, eF);
        if (eF += 10, tW.precision = eF, CF = (SF = kW(gW)).charAt(0), hF = NF(rW), !(Math.abs(hF) < 15e14)) return iW = DF(tW, eF + 2, TF).times(hF + ""), rW = mW(new tW(CF + "." + SF.slice(1)), eF - 10).plus(iW), tW.precision = TF, null == WF ? (bW = !0, xW(rW, TF)) : rW;
        for (; CF < 7 && 1 != CF || 1 == CF && SF.charAt(1) > 3;) CF = (SF = kW((rW = rW.times(FF)).d)).charAt(0), QF++;
        for (hF = NF(rW), CF > 1 ? (rW = new tW("0." + SF), hF++) : rW = new tW(CF + "." + SF.slice(1)), RF = PF = rW = qW(rW.minus(AF), rW.plus(AF), eF), EF = xW(rW.times(rW), eF), uF = 3;;) {
          if (PF = xW(PF.times(EF), eF), kW((iW = RF.plus(qW(PF, new tW(uF), eF))).d).slice(0, eF) === kW(RF.d).slice(0, eF)) return RF = RF.times(2), 0 !== hF && (RF = RF.plus(DF(tW, eF + 2, TF).times(hF + ""))), RF = qW(RF, new tW(QF), eF), tW.precision = TF, null == WF ? (bW = !0, xW(RF, TF)) : RF;
          RF = iW, uF += 2
        }
      }

      function OF(FF, WF) {
        var SF, CF, AF;
        for ((SF = WF.indexOf(".")) > -1 && (WF = WF.replace(".", "")), (CF = WF.search(/e/i)) > 0 ? (SF < 0 && (SF = CF), SF += +WF.slice(CF + 1), WF = WF.substring(0, CF)) : SF < 0 && (SF = WF.length), CF = 0; 48 === WF.charCodeAt(CF);) ++CF;
        for (AF = WF.length; 48 === WF.charCodeAt(AF - 1);) --AF;
        if (WF = WF.slice(CF, AF)) {
          if (AF -= CF, SF = SF - CF - 1, FF.e = iW(SF / 7), FF.d = [], CF = (SF + 1) % 7, SF < 0 && (CF += 7), CF < AF) {
            for (CF && FF.d.push(+WF.slice(0, CF)), AF -= 7; CF < AF;) FF.d.push(+WF.slice(CF, CF += 7));
            CF = 7 - (WF = WF.slice(CF)).length
          } else CF -= AF;
          for (; CF--;) WF += "0";
          if (FF.d.push(+WF), bW && (FF.e > gW || FF.e < -gW)) throw Error(RF + SF)
        } else FF.s = 0, FF.e = 0, FF.d = [0];
        return FF
      }

      function xW(FF, WF, SF) {
        var CF, AF, uF, hF, dF, PF, EF, rW, tW = FF.d;
        for (hF = 1, uF = tW[0]; uF >= 10; uF /= 10) hF++;
        if ((CF = WF - hF) < 0) CF += 7, AF = WF, EF = tW[rW = 0];
        else {
          if ((rW = Math.ceil((CF + 1) / 7)) >= (uF = tW.length)) return FF;
          for (EF = uF = tW[rW], hF = 1; uF >= 10; uF /= 10) hF++;
          AF = (CF %= 7) - 7 + hF
        }
        if (void 0 !== SF && (dF = EF / (uF = eF(10, hF - AF - 1)) % 10 | 0, PF = WF < 0 || void 0 !== tW[rW + 1] || EF % uF, PF = SF < 4 ? (dF || PF) && (0 == SF || SF == (FF.s < 0 ? 3 : 2)) : dF > 5 || 5 == dF && (4 == SF || PF || 6 == SF && (CF > 0 ? AF > 0 ? EF / eF(10, hF - AF) : 0 : tW[rW - 1]) % 10 & 1 || SF == (FF.s < 0 ? 8 : 7))), WF < 1 || !tW[0]) return PF ? (uF = NF(FF), tW.length = 1, WF = WF - uF - 1, tW[0] = eF(10, (7 - WF % 7) % 7), FF.e = iW(-WF / 7) || 0) : (tW.length = 1, tW[0] = FF.e = FF.s = 0), FF;
        if (0 == CF ? (tW.length = rW, uF = 1, rW--) : (tW.length = rW + 1, uF = eF(10, 7 - CF), tW[rW] = AF > 0 ? (EF / eF(10, hF - AF) % eF(10, AF) | 0) * uF : 0), PF)
          for (;;) {
            if (0 == rW) {
              (tW[0] += uF) == QF && (tW[0] = 1, ++FF.e);
              break
            }
            if (tW[rW] += uF, tW[rW] != QF) break;
            tW[rW--] = 0, uF = 1
          }
        for (CF = tW.length; 0 === tW[--CF];) tW.pop();
        if (bW && (FF.e > gW || FF.e < -gW)) throw Error(RF + NF(FF));
        return FF
      }

      function ZF(FF, WF) {
        var SF, CF, AF, uF, hF, dF, PF, RF, iW, eF, EF = FF.constructor,
          rW = EF.precision;
        if (!FF.s || !WF.s) return WF.s ? WF.s = -WF.s : WF = new EF(FF), bW ? xW(WF, rW) : WF;
        if (PF = FF.d, eF = WF.d, CF = WF.e, RF = FF.e, PF = PF.slice(), hF = RF - CF) {
          for ((iW = hF < 0) ? (SF = PF, hF = -hF, dF = eF.length) : (SF = eF, CF = RF, dF = PF.length), hF > (AF = Math.max(Math.ceil(rW / 7), dF) + 2) && (hF = AF, SF.length = 1), SF.reverse(), AF = hF; AF--;) SF.push(0);
          SF.reverse()
        } else {
          for ((iW = (AF = PF.length) < (dF = eF.length)) && (dF = AF), AF = 0; AF < dF; AF++)
            if (PF[AF] != eF[AF]) {
              iW = PF[AF] < eF[AF];
              break
            } hF = 0
        }
        for (iW && (SF = PF, PF = eF, eF = SF, WF.s = -WF.s), dF = PF.length, AF = eF.length - dF; AF > 0; --AF) PF[dF++] = 0;
        for (AF = eF.length; AF > hF;) {
          if (PF[--AF] < eF[AF]) {
            for (uF = AF; uF && 0 === PF[--uF];) PF[uF] = QF - 1;
            --PF[uF], PF[AF] += QF
          }
          PF[AF] -= eF[AF]
        }
        for (; 0 === PF[--dF];) PF.pop();
        for (; 0 === PF[0]; PF.shift()) --CF;
        return PF[0] ? (WF.d = PF, WF.e = CF, bW ? xW(WF, rW) : WF) : new EF(0)
      }

      function oF(FF, WF, SF) {
        var CF, AF = NF(FF),
          uF = kW(FF.d),
          hF = uF.length;
        return WF ? (SF && (CF = SF - hF) > 0 ? uF = uF.charAt(0) + "." + uF.slice(1) + LF(CF) : hF > 1 && (uF = uF.charAt(0) + "." + uF.slice(1)), uF = uF + (AF < 0 ? "e" : "e+") + AF) : AF < 0 ? (uF = "0." + LF(-AF - 1) + uF, SF && (CF = SF - hF) > 0 && (uF += LF(CF))) : AF >= hF ? (uF += LF(AF + 1 - hF), SF && (CF = SF - AF - 1) > 0 && (uF = uF + "." + LF(CF))) : ((CF = AF + 1) < hF && (uF = uF.slice(0, CF) + "." + uF.slice(CF)), SF && (CF = SF - hF) > 0 && (AF + 1 === hF && (uF += "."), uF += LF(CF))), FF.s < 0 ? "-" + uF : uF
      }

      function YF(FF, WF) {
        if (FF.length > WF) return FF.length = WF, !0
      }

      function MF(FF) {
        if (!FF || "object" !== typeof FF) throw Error(dF + "Object expected");
        var WF, SF, CF, AF = ["precision", 1, uF, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (WF = 0; WF < AF.length; WF += 3)
          if (void 0 !== (CF = FF[SF = AF[WF]])) {
            if (!(iW(CF) === CF && CF >= AF[WF + 1] && CF <= AF[WF + 2])) throw Error(PF + SF + ": " + CF);
            this[SF] = CF
          } if (void 0 !== (CF = FF[SF = "LN10"])) {
          if (CF != Math.LN10) throw Error(PF + SF + ": " + CF);
          this[SF] = new this(CF)
        }
        return this
      }
      hF = function FF(WF) {
        var SF, CF, AF;

        function uF(FF) {
          var WF = this;
          if (!(WF instanceof uF)) return new uF(FF);
          if (WF.constructor = uF, FF instanceof uF) return WF.s = FF.s, WF.e = FF.e, void(WF.d = (FF = FF.d) ? FF.slice() : FF);
          if ("number" === typeof FF) {
            if (0 * FF !== 0) throw Error(PF + FF);
            if (FF > 0) WF.s = 1;
            else {
              if (!(FF < 0)) return WF.s = 0, WF.e = 0, void(WF.d = [0]);
              FF = -FF, WF.s = -1
            }
            return FF === ~~FF && FF < 1e7 ? (WF.e = 0, void(WF.d = [FF])) : OF(WF, FF.toString())
          }
          if ("string" !== typeof FF) throw Error(PF + FF);
          if (45 === FF.charCodeAt(0) ? (FF = FF.slice(1), WF.s = -1) : WF.s = 1, !EF.test(FF)) throw Error(PF + FF);
          OF(WF, FF)
        }
        if (uF.prototype = tW, uF.ROUND_UP = 0, uF.ROUND_DOWN = 1, uF.ROUND_CEIL = 2, uF.ROUND_FLOOR = 3, uF.ROUND_HALF_UP = 4, uF.ROUND_HALF_DOWN = 5, uF.ROUND_HALF_EVEN = 6, uF.ROUND_HALF_CEIL = 7, uF.ROUND_HALF_FLOOR = 8, uF.clone = FF, uF.config = uF.set = MF, void 0 === WF && (WF = {}), WF)
          for (AF = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], SF = 0; SF < AF.length;) WF.hasOwnProperty(CF = AF[SF++]) || (WF[CF] = this[CF]);
        return uF.config(WF), uF
      }(hF), hF.default = hF.Decimal = hF, AF = new hF(1), void 0 === (CF = function() {
        return hF
      }.call(WF, SF, WF, FF)) || (FF.exports = CF)
    }()
  },
  4728: (FF, WF, SF) => {
    var CF = SF(4230)(SF(4077), "DataView");
    FF.exports = CF
  },
  4218: (FF, WF, SF) => {
    var CF = SF(4222),
      AF = SF(4271),
      uF = SF(4276),
      hF = SF(4278),
      bW = SF(4280);

    function dF(FF) {
      var WF = -1,
        SF = null == FF ? 0 : FF.length;
      for (this.clear(); ++WF < SF;) {
        var CF = FF[WF];
        this.set(CF[0], CF[1])
      }
    }
    dF.prototype.clear = CF, dF.prototype.delete = AF, dF.prototype.get = uF, dF.prototype.has = hF, dF.prototype.set = bW, FF.exports = dF
  },
  4284: (FF, WF, SF) => {
    var CF = SF(4292),
      AF = SF(4300),
      uF = SF(4312),
      hF = SF(4320),
      bW = SF(4324);

    function dF(FF) {
      var WF = -1,
        SF = null == FF ? 0 : FF.length;
      for (this.clear(); ++WF < SF;) {
        var CF = FF[WF];
        this.set(CF[0], CF[1])
      }
    }
    dF.prototype.clear = CF, dF.prototype.delete = AF, dF.prototype.get = uF, dF.prototype.has = hF, dF.prototype.set = bW, FF.exports = dF
  },
  4331: (FF, WF, SF) => {
    var CF = SF(4230)(SF(4077), "Map");
    FF.exports = CF
  },
  4208: (FF, WF, SF) => {
    var CF = SF(4215),
      AF = SF(4339),
      uF = SF(4358),
      hF = SF(4360),
      bW = SF(4364);

    function dF(FF) {
      var WF = -1,
        SF = null == FF ? 0 : FF.length;
      for (this.clear(); ++WF < SF;) {
        var CF = FF[WF];
        this.set(CF[0], CF[1])
      }
    }
    dF.prototype.clear = CF, dF.prototype.delete = AF, dF.prototype.get = uF, dF.prototype.has = hF, dF.prototype.set = bW, FF.exports = dF
  },
  4737: (FF, WF, SF) => {
    var CF = SF(4230)(SF(4077), "Promise");
    FF.exports = CF
  },
  4740: (FF, WF, SF) => {
    var CF = SF(4230)(SF(4077), "Set");
    FF.exports = CF
  },
  4577: (FF, WF, SF) => {
    var CF = SF(4208),
      AF = SF(4586),
      uF = SF(4588);

    function hF(FF) {
      var WF = -1,
        SF = null == FF ? 0 : FF.length;
      for (this.__data__ = new CF; ++WF < SF;) this.add(FF[WF])
    }
    hF.prototype.add = hF.prototype.push = AF, hF.prototype.has = uF, FF.exports = hF
  },
  4533: (FF, WF, SF) => {
    var CF = SF(4284),
      AF = SF(4537),
      uF = SF(4539),
      hF = SF(4545),
      bW = SF(4548),
      dF = SF(4552);

    function PF(FF) {
      var WF = this.__data__ = new CF(FF);
      this.size = WF.size
    }
    PF.prototype.clear = AF, PF.prototype.delete = uF, PF.prototype.get = hF, PF.prototype.has = bW, PF.prototype.set = dF, FF.exports = PF
  },
  4115: (FF, WF, SF) => {
    var CF = SF(4077).Symbol;
    FF.exports = CF
  },
  4610: (FF, WF, SF) => {
    var CF = SF(4077).Uint8Array;
    FF.exports = CF
  },
  4743: (FF, WF, SF) => {
    var CF = SF(4230)(SF(4077), "WeakMap");
    FF.exports = CF
  },
  4897: FF => {
    FF.exports = function(FF, WF, SF) {
      switch (SF.length) {
        case 0:
          return FF.call(WF);
        case 1:
          return FF.call(WF, SF[0]);
        case 2:
          return FF.call(WF, SF[0], SF[1]);
        case 3:
          return FF.call(WF, SF[0], SF[1], SF[2])
      }
      return FF.apply(WF, SF)
    }
  },
  5224: FF => {
    FF.exports = function(FF, WF) {
      for (var SF = -1, CF = null == FF ? 0 : FF.length; ++SF < CF;)
        if (!WF(FF[SF], SF, FF)) return !1;
      return !0
    }
  },
  4633: FF => {
    FF.exports = function(FF, WF) {
      for (var SF = -1, CF = null == FF ? 0 : FF.length, AF = 0, uF = []; ++SF < CF;) {
        var hF = FF[SF];
        WF(hF, SF, FF) && (uF[AF++] = hF)
      }
      return uF
    }
  },
  4973: (FF, WF, SF) => {
    var CF = SF(4982);
    FF.exports = function(FF, WF) {
      return !!(null == FF ? 0 : FF.length) && CF(FF, WF, 0) > -1
    }
  },
  5007: FF => {
    FF.exports = function(FF, WF, SF) {
      for (var CF = -1, AF = null == FF ? 0 : FF.length; ++CF < AF;)
        if (SF(WF, FF[CF])) return !0;
      return !1
    }
  },
  4651: (FF, WF, SF) => {
    var CF = SF(4660),
      AF = SF(4504),
      uF = SF(4147),
      hF = SF(4663),
      bW = SF(4462),
      dF = SF(4672),
      PF = Object.prototype.hasOwnProperty;
    FF.exports = function(FF, WF) {
      var SF = uF(FF),
        RF = !SF && AF(FF),
        iW = !SF && !RF && hF(FF),
        eF = !SF && !RF && !iW && dF(FF),
        EF = SF || RF || iW || eF,
        QF = EF ? CF(FF.length, String) : [],
        rW = QF.length;
      for (var gW in FF) !WF && !PF.call(FF, gW) || EF && ("length" == gW || iW && ("offset" == gW || "parent" == gW) || eF && ("buffer" == gW || "byteLength" == gW || "byteOffset" == gW) || bW(gW, rW)) || QF.push(gW);
      return QF
    }
  },
  4378: FF => {
    FF.exports = function(FF, WF) {
      for (var SF = -1, CF = null == FF ? 0 : FF.length, AF = Array(CF); ++SF < CF;) AF[SF] = WF(FF[SF], SF, FF);
      return AF
    }
  },
  4492: FF => {
    FF.exports = function(FF, WF) {
      for (var SF = -1, CF = WF.length, AF = FF.length; ++SF < CF;) FF[AF + SF] = WF[SF];
      return FF
    }
  },
  4597: FF => {
    FF.exports = function(FF, WF) {
      for (var SF = -1, CF = null == FF ? 0 : FF.length; ++SF < CF;)
        if (WF(FF[SF], SF, FF)) return !0;
      return !1
    }
  },
  5062: FF => {
    FF.exports = function(FF) {
      return FF.split("")
    }
  },
  4306: (FF, WF, SF) => {
    var CF = SF(4309);
    FF.exports = function(FF, WF) {
      for (var SF = FF.length; SF--;)
        if (CF(FF[SF][0], WF)) return SF;
      return -1
    }
  },
  5210: (FF, WF, SF) => {
    var CF = SF(4917);
    FF.exports = function(FF, WF, SF) {
      "__proto__" == WF && CF ? CF(FF, WF, {
        configurable: !0,
        enumerable: !0,
        value: SF,
        writable: !0
      }) : FF[WF] = SF
    }
  },
  4828: (FF, WF, SF) => {
    var CF = SF(4837),
      AF = SF(4859)(CF);
    FF.exports = AF
  },
  5231: (FF, WF, SF) => {
    var CF = SF(4828);
    FF.exports = function(FF, WF) {
      var SF = !0;
      return CF(FF, (function(FF, CF, AF) {
        return SF = !!WF(FF, CF, AF)
      })), SF
    }
  },
  5126: (FF, WF, SF) => {
    var CF = SF(4107);
    FF.exports = function(FF, WF, SF) {
      for (var AF = -1, uF = FF.length; ++AF < uF;) {
        var hF = FF[AF],
          bW = WF(hF);
        if (null != bW && (void 0 === dF ? bW === bW && !CF(bW) : SF(bW, dF))) var dF = bW,
          PF = hF
      }
      return PF
    }
  },
  4991: FF => {
    FF.exports = function(FF, WF, SF, CF) {
      for (var AF = FF.length, uF = SF + (CF ? 1 : -1); CF ? uF-- : ++uF < AF;)
        if (WF(FF[uF], uF, FF)) return uF;
      return -1
    }
  },
  4484: (FF, WF, SF) => {
    var CF = SF(4492),
      AF = SF(4499);
    FF.exports = function FF(WF, SF, uF, hF, bW) {
      var dF = -1,
        PF = WF.length;
      for (uF || (uF = AF), bW || (bW = []); ++dF < PF;) {
        var RF = WF[dF];
        SF > 0 && uF(RF) ? SF > 1 ? FF(RF, SF - 1, uF, hF, bW) : CF(bW, RF) : hF || (bW[bW.length] = RF)
      }
      return bW
    }
  },
  4845: (FF, WF, SF) => {
    var CF = SF(4851)();
    FF.exports = CF
  },
  4837: (FF, WF, SF) => {
    var CF = SF(4845),
      AF = SF(4645);
    FF.exports = function(FF, WF) {
      return FF && CF(FF, WF, AF)
    }
  },
  4171: (FF, WF, SF) => {
    var CF = SF(4177),
      AF = SF(4385);
    FF.exports = function(FF, WF) {
      for (var SF = 0, uF = (WF = CF(WF, FF)).length; null != FF && SF < uF;) FF = FF[AF(WF[SF++])];
      return SF && SF == uF ? FF : void 0
    }
  },
  4626: (FF, WF, SF) => {
    var CF = SF(4492),
      AF = SF(4147);
    FF.exports = function(FF, WF, SF) {
      var uF = WF(FF);
      return AF(FF) ? uF : CF(uF, SF(FF))
    }
  },
  4111: (FF, WF, SF) => {
    var CF = SF(4115),
      AF = SF(4121),
      uF = SF(4128),
      hF = CF ? CF.toStringTag : void 0;
    FF.exports = function(FF) {
      return null == FF ? void 0 === FF ? "[object Undefined]" : "[object Null]" : hF && hF in Object(FF) ? AF(FF) : uF(FF)
    }
  },
  5132: FF => {
    FF.exports = function(FF, WF) {
      return FF > WF
    }
  },
  4781: FF => {
    FF.exports = function(FF, WF) {
      return null != FF && WF in Object(FF)
    }
  },
  4982: (FF, WF, SF) => {
    var CF = SF(4991),
      AF = SF(5e3),
      uF = SF(5005);
    FF.exports = function(FF, WF, SF) {
      return WF === WF ? uF(FF, WF, SF) : CF(FF, AF, SF)
    }
  },
  4506: (FF, WF, SF) => {
    var CF = SF(4111),
      AF = SF(4130);
    FF.exports = function(FF) {
      return AF(FF) && "[object Arguments]" == CF(FF)
    }
  },
  4559: (FF, WF, SF) => {
    var CF = SF(4565),
      AF = SF(4130);
    FF.exports = function FF(WF, SF, uF, hF, bW) {
      return WF === SF || (null == WF || null == SF || !AF(WF) && !AF(SF) ? WF !== WF && SF !== SF : CF(WF, SF, uF, hF, FF, bW))
    }
  },
  4565: (FF, WF, SF) => {
    var CF = SF(4533),
      AF = SF(4572),
      uF = SF(4602),
      hF = SF(4617),
      bW = SF(4719),
      dF = SF(4147),
      PF = SF(4663),
      RF = SF(4672),
      iW = "[object Arguments]",
      eF = "[object Array]",
      EF = "[object Object]",
      QF = Object.prototype.hasOwnProperty;
    FF.exports = function(FF, WF, SF, rW, gW, tW) {
      var TF = dF(FF),
        aW = dF(WF),
        kW = TF ? eF : bW(FF),
        qW = aW ? eF : bW(WF),
        VF = (kW = kW == iW ? EF : kW) == EF,
        NF = (qW = qW == iW ? EF : qW) == EF,
        DF = kW == qW;
      if (DF && PF(FF)) {
        if (!PF(WF)) return !1;
        TF = !0, VF = !1
      }
      if (DF && !VF) return tW || (tW = new CF), TF || RF(FF) ? AF(FF, WF, SF, rW, gW, tW) : uF(FF, WF, kW, SF, rW, gW, tW);
      if (!(1 & SF)) {
        var LF = VF && QF.call(FF, "__wrapped__"),
          mW = NF && QF.call(WF, "__wrapped__");
        if (LF || mW) {
          var OF = LF ? FF.value() : FF,
            xW = mW ? WF.value() : WF;
          return tW || (tW = new CF), gW(OF, xW, SF, rW, tW)
        }
      }
      return !!DF && (tW || (tW = new CF), hF(FF, WF, SF, rW, gW, tW))
    }
  },
  4531: (FF, WF, SF) => {
    var CF = SF(4533),
      AF = SF(4559);
    FF.exports = function(FF, WF, SF, uF) {
      var hF = SF.length,
        bW = hF,
        dF = !uF;
      if (null == FF) return !bW;
      for (FF = Object(FF); hF--;) {
        var PF = SF[hF];
        if (dF && PF[2] ? PF[1] !== FF[PF[0]] : !(PF[0] in FF)) return !1
      }
      for (; ++hF < bW;) {
        var RF = (PF = SF[hF])[0],
          iW = FF[RF],
          eF = PF[1];
        if (dF && PF[2]) {
          if (void 0 === iW && !(RF in FF)) return !1
        } else {
          var EF = new CF;
          if (uF) var QF = uF(iW, eF, RF, FF, WF, EF);
          if (!(void 0 === QF ? AF(eF, iW, 3, uF, EF) : QF)) return !1
        }
      }
      return !0
    }
  },
  5e3: FF => {
    FF.exports = function(FF) {
      return FF !== FF
    }
  },
  4239: (FF, WF, SF) => {
    var CF = SF(4241),
      AF = SF(4249),
      uF = SF(4071),
      hF = SF(4259),
      bW = /^\[object .+?Constructor\]$/,
      dF = Function.prototype,
      PF = Object.prototype,
      RF = dF.toString,
      iW = PF.hasOwnProperty,
      eF = RegExp("^" + RF.call(iW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    FF.exports = function(FF) {
      return !(!uF(FF) || AF(FF)) && (CF(FF) ? eF : bW).test(hF(FF))
    }
  },
  4679: (FF, WF, SF) => {
    var CF = SF(4111),
      AF = SF(4458),
      uF = SF(4130),
      hF = {};
    hF["[object Float32Array]"] = hF["[object Float64Array]"] = hF["[object Int8Array]"] = hF["[object Int16Array]"] = hF["[object Int32Array]"] = hF["[object Uint8Array]"] = hF["[object Uint8ClampedArray]"] = hF["[object Uint16Array]"] = hF["[object Uint32Array]"] = !0, hF["[object Arguments]"] = hF["[object Array]"] = hF["[object ArrayBuffer]"] = hF["[object Boolean]"] = hF["[object DataView]"] = hF["[object Date]"] = hF["[object Error]"] = hF["[object Function]"] = hF["[object Map]"] = hF["[object Number]"] = hF["[object Object]"] = hF["[object RegExp]"] = hF["[object Set]"] = hF["[object String]"] = hF["[object WeakMap]"] = !1, FF.exports = function(FF) {
      return uF(FF) && AF(FF.length) && !!hF[CF(FF)]
    }
  },
  4520: (FF, WF, SF) => {
    var CF = SF(4522),
      AF = SF(4770),
      uF = SF(4795),
      hF = SF(4147),
      bW = SF(4804);
    FF.exports = function(FF) {
      return "function" == typeof FF ? FF : null == FF ? uF : "object" == typeof FF ? hF(FF) ? AF(FF[0], FF[1]) : CF(FF) : bW(FF)
    }
  },
  4700: (FF, WF, SF) => {
    var CF = SF(4708),
      AF = SF(4714),
      uF = Object.prototype.hasOwnProperty;
    FF.exports = function(FF) {
      if (!CF(FF)) return AF(FF);
      var WF = [];
      for (var SF in Object(FF)) uF.call(FF, SF) && "constructor" != SF && WF.push(SF);
      return WF
    }
  },
  5144: FF => {
    FF.exports = function(FF, WF) {
      return FF < WF
    }
  },
  4825: (FF, WF, SF) => {
    var CF = SF(4828),
      AF = SF(4454);
    FF.exports = function(FF, WF) {
      var SF = -1,
        uF = AF(FF) ? Array(FF.length) : [];
      return CF(FF, (function(FF, CF, AF) {
        uF[++SF] = WF(FF, CF, AF)
      })), uF
    }
  },
  4522: (FF, WF, SF) => {
    var CF = SF(4531),
      AF = SF(4751),
      uF = SF(4764);
    FF.exports = function(FF) {
      var WF = AF(FF);
      return 1 == WF.length && WF[0][2] ? uF(WF[0][0], WF[0][1]) : function(SF) {
        return SF === FF || CF(SF, FF, WF)
      }
    }
  },
  4770: (FF, WF, SF) => {
    var CF = SF(4559),
      AF = SF(4162),
      uF = SF(4778),
      hF = SF(4181),
      bW = SF(4760),
      dF = SF(4764),
      PF = SF(4385);
    FF.exports = function(FF, WF) {
      return hF(FF) && bW(WF) ? dF(PF(FF), WF) : function(SF) {
        var hF = AF(SF, FF);
        return void 0 === hF && hF === WF ? uF(SF, FF) : CF(WF, hF, 3)
      }
    }
  },
  4513: (FF, WF, SF) => {
    var CF = SF(4378),
      AF = SF(4171),
      uF = SF(4520),
      hF = SF(4825),
      bW = SF(4866),
      dF = SF(4688),
      PF = SF(4873),
      RF = SF(4795),
      iW = SF(4147);
    FF.exports = function(FF, WF, SF) {
      WF = WF.length ? CF(WF, (function(FF) {
        return iW(FF) ? function(WF) {
          return AF(WF, 1 === FF.length ? FF[0] : FF)
        } : FF
      })) : [RF];
      var eF = -1;
      WF = CF(WF, dF(uF));
      var EF = hF(FF, (function(FF, SF, AF) {
        return {
          criteria: CF(WF, (function(WF) {
            return WF(FF)
          })),
          index: ++eF,
          value: FF
        }
      }));
      return bW(EF, (function(FF, WF) {
        return PF(FF, WF, SF)
      }))
    }
  },
  4811: FF => {
    FF.exports = function(FF) {
      return function(WF) {
        return null == WF ? void 0 : WF[FF]
      }
    }
  },
  4816: (FF, WF, SF) => {
    var CF = SF(4171);
    FF.exports = function(FF) {
      return function(WF) {
        return CF(WF, FF)
      }
    }
  },
  4446: FF => {
    var WF = Math.ceil,
      SF = Math.max;
    FF.exports = function(FF, CF, AF, uF) {
      for (var hF = -1, bW = SF(WF((CF - FF) / (AF || 1)), 0), dF = Array(bW); bW--;) dF[uF ? bW : ++hF] = FF, FF += AF;
      return dF
    }
  },
  4887: (FF, WF, SF) => {
    var CF = SF(4795),
      AF = SF(4889),
      uF = SF(4901);
    FF.exports = function(FF, WF) {
      return uF(AF(FF, WF, CF), FF + "")
    }
  },
  4909: (FF, WF, SF) => {
    var CF = SF(4915),
      AF = SF(4917),
      uF = SF(4795),
      hF = AF ? function(FF, WF) {
        return AF(FF, "toString", {
          configurable: !0,
          enumerable: !1,
          value: CF(WF),
          writable: !0
        })
      } : uF;
    FF.exports = hF
  },
  5039: FF => {
    FF.exports = function(FF, WF, SF) {
      var CF = -1,
        AF = FF.length;
      WF < 0 && (WF = -WF > AF ? 0 : AF + WF), (SF = SF > AF ? AF : SF) < 0 && (SF += AF), AF = WF > SF ? 0 : SF - WF >>> 0, WF >>>= 0;
      for (var uF = Array(AF); ++CF < AF;) uF[CF] = FF[CF + WF];
      return uF
    }
  },
  5298: (FF, WF, SF) => {
    var CF = SF(4828);
    FF.exports = function(FF, WF) {
      var SF;
      return CF(FF, (function(FF, CF, AF) {
        return !(SF = WF(FF, CF, AF))
      })), !!SF
    }
  },
  4866: FF => {
    FF.exports = function(FF, WF) {
      var SF = FF.length;
      for (FF.sort(WF); SF--;) FF[SF] = FF[SF].value;
      return FF
    }
  },
  4660: FF => {
    FF.exports = function(FF, WF) {
      for (var SF = -1, CF = Array(FF); ++SF < FF;) CF[SF] = WF(SF);
      return CF
    }
  },
  4373: (FF, WF, SF) => {
    var CF = SF(4115),
      AF = SF(4378),
      uF = SF(4147),
      hF = SF(4107),
      bW = CF ? CF.prototype : void 0,
      dF = bW ? bW.toString : void 0;
    FF.exports = function FF(WF) {
      if ("string" == typeof WF) return WF;
      if (uF(WF)) return AF(WF, FF) + "";
      if (hF(WF)) return dF ? dF.call(WF) : "";
      var SF = WF + "";
      return "0" == SF && 1 / WF == -1 / 0 ? "-0" : SF
    }
  },
  4095: (FF, WF, SF) => {
    var CF = SF(4103),
      AF = /^\s+/;
    FF.exports = function(FF) {
      return FF ? FF.slice(0, CF(FF) + 1).replace(AF, "") : FF
    }
  },
  4688: FF => {
    FF.exports = function(FF) {
      return function(WF) {
        return FF(WF)
      }
    }
  },
  4965: (FF, WF, SF) => {
    var CF = SF(4577),
      AF = SF(4973),
      uF = SF(5007),
      hF = SF(4600),
      bW = SF(5010),
      dF = SF(4614);
    FF.exports = function(FF, WF, SF) {
      var PF = -1,
        RF = AF,
        iW = FF.length,
        eF = !0,
        EF = [],
        QF = EF;
      if (SF) eF = !1, RF = uF;
      else if (iW >= 200) {
        var rW = WF ? null : bW(FF);
        if (rW) return dF(rW);
        eF = !1, RF = hF, QF = new CF
      } else QF = WF ? [] : EF;
      FF: for (; ++PF < iW;) {
        var gW = FF[PF],
          tW = WF ? WF(gW) : gW;
        if (gW = SF || 0 !== gW ? gW : 0, eF && tW === tW) {
          for (var TF = QF.length; TF--;)
            if (QF[TF] === tW) continue FF;
          WF && QF.push(tW), EF.push(gW)
        } else RF(QF, tW, SF) || (QF !== EF && QF.push(tW), EF.push(gW))
      }
      return EF
    }
  },
  4600: FF => {
    FF.exports = function(FF, WF) {
      return FF.has(WF)
    }
  },
  4177: (FF, WF, SF) => {
    var CF = SF(4147),
      AF = SF(4181),
      uF = SF(4188),
      hF = SF(4371);
    FF.exports = function(FF, WF) {
      return CF(FF) ? FF : AF(FF, WF) ? [FF] : uF(hF(FF))
    }
  },
  5036: (FF, WF, SF) => {
    var CF = SF(5039);
    FF.exports = function(FF, WF, SF) {
      var AF = FF.length;
      return SF = void 0 === SF ? AF : SF, !WF && SF >= AF ? FF : CF(FF, WF, SF)
    }
  },
  4879: (FF, WF, SF) => {
    var CF = SF(4107);
    FF.exports = function(FF, WF) {
      if (FF !== WF) {
        var SF = void 0 !== FF,
          AF = null === FF,
          uF = FF === FF,
          hF = CF(FF),
          bW = void 0 !== WF,
          dF = null === WF,
          PF = WF === WF,
          RF = CF(WF);
        if (!dF && !RF && !hF && FF > WF || hF && bW && PF && !dF && !RF || AF && bW && PF || !SF && PF || !uF) return 1;
        if (!AF && !hF && !RF && FF < WF || RF && SF && uF && !AF && !hF || dF && SF && uF || !bW && uF || !PF) return -1
      }
      return 0
    }
  },
  4873: (FF, WF, SF) => {
    var CF = SF(4879);
    FF.exports = function(FF, WF, SF) {
      for (var AF = -1, uF = FF.criteria, hF = WF.criteria, bW = uF.length, dF = SF.length; ++AF < bW;) {
        var PF = CF(uF[AF], hF[AF]);
        if (PF) return AF >= dF ? PF : PF * ("desc" == SF[AF] ? -1 : 1)
      }
      return FF.index - WF.index
    }
  },
  4257: (FF, WF, SF) => {
    var CF = SF(4077)["__core-js_shared__"];
    FF.exports = CF
  },
  4859: (FF, WF, SF) => {
    var CF = SF(4454);
    FF.exports = function(FF, WF) {
      return function(SF, AF) {
        if (null == SF) return SF;
        if (!CF(SF)) return FF(SF, AF);
        for (var uF = SF.length, hF = WF ? uF : -1, bW = Object(SF);
          (WF ? hF-- : ++hF < uF) && !1 !== AF(bW[hF], hF, bW););
        return SF
      }
    }
  },
  4851: FF => {
    FF.exports = function(FF) {
      return function(WF, SF, CF) {
        for (var AF = -1, uF = Object(WF), hF = CF(WF), bW = hF.length; bW--;) {
          var dF = hF[FF ? bW : ++AF];
          if (!1 === SF(uF[dF], dF, uF)) break
        }
        return WF
      }
    }
  },
  5030: (FF, WF, SF) => {
    var CF = SF(5036),
      AF = SF(5046),
      uF = SF(5054),
      hF = SF(4371);
    FF.exports = function(FF) {
      return function(WF) {
        WF = hF(WF);
        var SF = AF(WF) ? uF(WF) : void 0,
          bW = SF ? SF[0] : WF.charAt(0),
          dF = SF ? CF(SF, 1).join("") : WF.slice(1);
        return bW[FF]() + dF
      }
    }
  },
  5318: (FF, WF, SF) => {
    var CF = SF(4520),
      AF = SF(4454),
      uF = SF(4645);
    FF.exports = function(FF) {
      return function(WF, SF, hF) {
        var bW = Object(WF);
        if (!AF(WF)) {
          var dF = CF(SF, 3);
          WF = uF(WF), SF = function(FF) {
            return dF(bW[FF], FF, bW)
          }
        }
        var PF = FF(WF, SF, hF);
        return PF > -1 ? bW[dF ? WF[PF] : PF] : void 0
      }
    }
  },
  4442: (FF, WF, SF) => {
    var CF = SF(4446),
      AF = SF(4451),
      uF = SF(4468);
    FF.exports = function(FF) {
      return function(WF, SF, hF) {
        return hF && "number" != typeof hF && AF(WF, SF, hF) && (SF = hF = void 0), WF = uF(WF), void 0 === SF ? (SF = WF, WF = 0) : SF = uF(SF), hF = void 0 === hF ? WF < SF ? 1 : -1 : uF(hF), CF(WF, SF, hF, FF)
      }
    }
  },
  5010: (FF, WF, SF) => {
    var CF = SF(4740),
      AF = SF(5014),
      uF = SF(4614),
      hF = CF && 1 / uF(new CF([, -0]))[1] == 1 / 0 ? function(FF) {
        return new CF(FF)
      } : AF;
    FF.exports = hF
  },
  4917: (FF, WF, SF) => {
    var CF = SF(4230),
      AF = function() {
        try {
          var FF = CF(Object, "defineProperty");
          return FF({}, "", {}), FF
        } catch (WF) {}
      }();
    FF.exports = AF
  },
  4572: (FF, WF, SF) => {
    var CF = SF(4577),
      AF = SF(4597),
      uF = SF(4600);
    FF.exports = function(FF, WF, SF, hF, bW, dF) {
      var PF = 1 & SF,
        RF = FF.length,
        iW = WF.length;
      if (RF != iW && !(PF && iW > RF)) return !1;
      var eF = dF.get(FF),
        EF = dF.get(WF);
      if (eF && EF) return eF == WF && EF == FF;
      var QF = -1,
        rW = !0,
        gW = 2 & SF ? new CF : void 0;
      for (dF.set(FF, WF), dF.set(WF, FF); ++QF < RF;) {
        var tW = FF[QF],
          TF = WF[QF];
        if (hF) var aW = PF ? hF(TF, tW, QF, WF, FF, dF) : hF(tW, TF, QF, FF, WF, dF);
        if (void 0 !== aW) {
          if (aW) continue;
          rW = !1;
          break
        }
        if (gW) {
          if (!AF(WF, (function(FF, WF) {
              if (!uF(gW, WF) && (tW === FF || bW(tW, FF, SF, hF, dF))) return gW.push(WF)
            }))) {
            rW = !1;
            break
          }
        } else if (tW !== TF && !bW(tW, TF, SF, hF, dF)) {
          rW = !1;
          break
        }
      }
      return dF.delete(FF), dF.delete(WF), rW
    }
  },
  4602: (FF, WF, SF) => {
    var CF = SF(4115),
      AF = SF(4610),
      uF = SF(4309),
      hF = SF(4572),
      bW = SF(4612),
      dF = SF(4614),
      PF = CF ? CF.prototype : void 0,
      RF = PF ? PF.valueOf : void 0;
    FF.exports = function(FF, WF, SF, CF, PF, iW, eF) {
      switch (SF) {
        case "[object DataView]":
          if (FF.byteLength != WF.byteLength || FF.byteOffset != WF.byteOffset) return !1;
          FF = FF.buffer, WF = WF.buffer;
        case "[object ArrayBuffer]":
          return !(FF.byteLength != WF.byteLength || !iW(new AF(FF), new AF(WF)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return uF(+FF, +WF);
        case "[object Error]":
          return FF.name == WF.name && FF.message == WF.message;
        case "[object RegExp]":
        case "[object String]":
          return FF == WF + "";
        case "[object Map]":
          var EF = bW;
        case "[object Set]":
          var QF = 1 & CF;
          if (EF || (EF = dF), FF.size != WF.size && !QF) return !1;
          var rW = eF.get(FF);
          if (rW) return rW == WF;
          CF |= 2, eF.set(FF, WF);
          var gW = hF(EF(FF), EF(WF), CF, PF, iW, eF);
          return eF.delete(FF), gW;
        case "[object Symbol]":
          if (RF) return RF.call(FF) == RF.call(WF)
      }
      return !1
    }
  },
  4617: (FF, WF, SF) => {
    var CF = SF(4619),
      AF = Object.prototype.hasOwnProperty;
    FF.exports = function(FF, WF, SF, uF, hF, bW) {
      var dF = 1 & SF,
        PF = CF(FF),
        RF = PF.length;
      if (RF != CF(WF).length && !dF) return !1;
      for (var iW = RF; iW--;) {
        var eF = PF[iW];
        if (!(dF ? eF in WF : AF.call(WF, eF))) return !1
      }
      var EF = bW.get(FF),
        QF = bW.get(WF);
      if (EF && QF) return EF == WF && QF == FF;
      var rW = !0;
      bW.set(FF, WF), bW.set(WF, FF);
      for (var gW = dF; ++iW < RF;) {
        var tW = FF[eF = PF[iW]],
          TF = WF[eF];
        if (uF) var aW = dF ? uF(TF, tW, eF, WF, FF, bW) : uF(tW, TF, eF, FF, WF, bW);
        if (!(void 0 === aW ? tW === TF || hF(tW, TF, SF, uF, bW) : aW)) {
          rW = !1;
          break
        }
        gW || (gW = "constructor" == eF)
      }
      if (rW && !gW) {
        var kW = FF.constructor,
          qW = WF.constructor;
        kW == qW || !("constructor" in FF) || !("constructor" in WF) || "function" == typeof kW && kW instanceof kW && "function" == typeof qW && qW instanceof qW || (rW = !1)
      }
      return bW.delete(FF), bW.delete(WF), rW
    }
  },
  4084: (FF, WF, SF) => {
    var CF = "object" == typeof SF.g && SF.g && SF.g.Object === Object && SF.g;
    FF.exports = CF
  },
  4619: (FF, WF, SF) => {
    var CF = SF(4626),
      AF = SF(4629),
      uF = SF(4645);
    FF.exports = function(FF) {
      return CF(FF, uF, AF)
    }
  },
  4348: (FF, WF, SF) => {
    var CF = SF(4354);
    FF.exports = function(FF, WF) {
      var SF = FF.__data__;
      return CF(WF) ? SF["string" == typeof WF ? "string" : "hash"] : SF.map
    }
  },
  4751: (FF, WF, SF) => {
    var CF = SF(4760),
      AF = SF(4645);
    FF.exports = function(FF) {
      for (var WF = AF(FF), SF = WF.length; SF--;) {
        var uF = WF[SF],
          hF = FF[uF];
        WF[SF] = [uF, hF, CF(hF)]
      }
      return WF
    }
  },
  4230: (FF, WF, SF) => {
    var CF = SF(4239),
      AF = SF(4266);
    FF.exports = function(FF, WF) {
      var SF = AF(FF, WF);
      return CF(SF) ? SF : void 0
    }
  },
  5273: (FF, WF, SF) => {
    var CF = SF(4716)(Object.getPrototypeOf, Object);
    FF.exports = CF
  },
  4121: (FF, WF, SF) => {
    var CF = SF(4115),
      AF = Object.prototype,
      uF = AF.hasOwnProperty,
      hF = AF.toString,
      bW = CF ? CF.toStringTag : void 0;
    FF.exports = function(FF) {
      var WF = uF.call(FF, bW),
        SF = FF[bW];
      try {
        FF[bW] = void 0;
        var CF = !0
      } catch (dF) {}
      var AF = hF.call(FF);
      return CF && (WF ? FF[bW] = SF : delete FF[bW]), AF
    }
  },
  4629: (FF, WF, SF) => {
    var CF = SF(4633),
      AF = SF(4642),
      uF = Object.prototype.propertyIsEnumerable,
      hF = Object.getOwnPropertySymbols,
      bW = hF ? function(FF) {
        return null == FF ? [] : (FF = Object(FF), CF(hF(FF), (function(WF) {
          return uF.call(FF, WF)
        })))
      } : AF;
    FF.exports = bW
  },
  4719: (FF, WF, SF) => {
    var CF = SF(4728),
      AF = SF(4331),
      uF = SF(4737),
      hF = SF(4740),
      bW = SF(4743),
      dF = SF(4111),
      PF = SF(4259),
      RF = "[object Map]",
      iW = "[object Promise]",
      eF = "[object Set]",
      EF = "[object WeakMap]",
      QF = "[object DataView]",
      rW = PF(CF),
      gW = PF(AF),
      tW = PF(uF),
      TF = PF(hF),
      aW = PF(bW),
      kW = dF;
    (CF && kW(new CF(new ArrayBuffer(1))) != QF || AF && kW(new AF) != RF || uF && kW(uF.resolve()) != iW || hF && kW(new hF) != eF || bW && kW(new bW) != EF) && (kW = function(FF) {
      var WF = dF(FF),
        SF = "[object Object]" == WF ? FF.constructor : void 0,
        CF = SF ? PF(SF) : "";
      if (CF) switch (CF) {
        case rW:
          return QF;
        case gW:
          return RF;
        case tW:
          return iW;
        case TF:
          return eF;
        case aW:
          return EF
      }
      return WF
    }), FF.exports = kW
  },
  4266: FF => {
    FF.exports = function(FF, WF) {
      return null == FF ? void 0 : FF[WF]
    }
  },
  4788: (FF, WF, SF) => {
    var CF = SF(4177),
      AF = SF(4504),
      uF = SF(4147),
      hF = SF(4462),
      bW = SF(4458),
      dF = SF(4385);
    FF.exports = function(FF, WF, SF) {
      for (var PF = -1, RF = (WF = CF(WF, FF)).length, iW = !1; ++PF < RF;) {
        var eF = dF(WF[PF]);
        if (!(iW = null != FF && SF(FF, eF))) break;
        FF = FF[eF]
      }
      return iW || ++PF != RF ? iW : !!(RF = null == FF ? 0 : FF.length) && bW(RF) && hF(eF, RF) && (uF(FF) || AF(FF))
    }
  },
  5046: FF => {
    var WF = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    FF.exports = function(FF) {
      return WF.test(FF)
    }
  },
  4222: (FF, WF, SF) => {
    var CF = SF(4225);
    FF.exports = function() {
      this.__data__ = CF ? CF(null) : {}, this.size = 0
    }
  },
  4271: FF => {
    FF.exports = function(FF) {
      var WF = this.has(FF) && delete this.__data__[FF];
      return this.size -= WF ? 1 : 0, WF
    }
  },
  4276: (FF, WF, SF) => {
    var CF = SF(4225),
      AF = Object.prototype.hasOwnProperty;
    FF.exports = function(FF) {
      var WF = this.__data__;
      if (CF) {
        var SF = WF[FF];
        return "__lodash_hash_undefined__" === SF ? void 0 : SF
      }
      return AF.call(WF, FF) ? WF[FF] : void 0
    }
  },
  4278: (FF, WF, SF) => {
    var CF = SF(4225),
      AF = Object.prototype.hasOwnProperty;
    FF.exports = function(FF) {
      var WF = this.__data__;
      return CF ? void 0 !== WF[FF] : AF.call(WF, FF)
    }
  },
  4280: (FF, WF, SF) => {
    var CF = SF(4225);
    FF.exports = function(FF, WF) {
      var SF = this.__data__;
      return this.size += this.has(FF) ? 0 : 1, SF[FF] = CF && void 0 === WF ? "__lodash_hash_undefined__" : WF, this
    }
  },
  4499: (FF, WF, SF) => {
    var CF = SF(4115),
      AF = SF(4504),
      uF = SF(4147),
      hF = CF ? CF.isConcatSpreadable : void 0;
    FF.exports = function(FF) {
      return uF(FF) || AF(FF) || !!(hF && FF && FF[hF])
    }
  },
  4462: FF => {
    var WF = /^(?:0|[1-9]\d*)$/;
    FF.exports = function(FF, SF) {
      var CF = typeof FF;
      return !!(SF = null == SF ? 9007199254740991 : SF) && ("number" == CF || "symbol" != CF && WF.test(FF)) && FF > -1 && FF % 1 == 0 && FF < SF
    }
  },
  4451: (FF, WF, SF) => {
    var CF = SF(4309),
      AF = SF(4454),
      uF = SF(4462),
      hF = SF(4071);
    FF.exports = function(FF, WF, SF) {
      if (!hF(SF)) return !1;
      var bW = typeof WF;
      return !!("number" == bW ? AF(SF) && uF(WF, SF.length) : "string" == bW && WF in SF) && CF(SF[WF], FF)
    }
  },
  4181: (FF, WF, SF) => {
    var CF = SF(4147),
      AF = SF(4107),
      uF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      hF = /^\w*$/;
    FF.exports = function(FF, WF) {
      if (CF(FF)) return !1;
      var SF = typeof FF;
      return !("number" != SF && "symbol" != SF && "boolean" != SF && null != FF && !AF(FF)) || (hF.test(FF) || !uF.test(FF) || null != WF && FF in Object(WF))
    }
  },
  4354: FF => {
    FF.exports = function(FF) {
      var WF = typeof FF;
      return "string" == WF || "number" == WF || "symbol" == WF || "boolean" == WF ? "__proto__" !== FF : null === FF
    }
  },
  4249: (FF, WF, SF) => {
    var CF = SF(4257),
      AF = function() {
        var FF = /[^.]+$/.exec(CF && CF.keys && CF.keys.IE_PROTO || "");
        return FF ? "Symbol(src)_1." + FF : ""
      }();
    FF.exports = function(FF) {
      return !!AF && AF in FF
    }
  },
  4708: FF => {
    var WF = Object.prototype;
    FF.exports = function(FF) {
      var SF = FF && FF.constructor;
      return FF === ("function" == typeof SF && SF.prototype || WF)
    }
  },
  4760: (FF, WF, SF) => {
    var CF = SF(4071);
    FF.exports = function(FF) {
      return FF === FF && !CF(FF)
    }
  },
  4292: FF => {
    FF.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  4300: (FF, WF, SF) => {
    var CF = SF(4306),
      AF = Array.prototype.splice;
    FF.exports = function(FF) {
      var WF = this.__data__,
        SF = CF(WF, FF);
      return !(SF < 0) && (SF == WF.length - 1 ? WF.pop() : AF.call(WF, SF, 1), --this.size, !0)
    }
  },
  4312: (FF, WF, SF) => {
    var CF = SF(4306);
    FF.exports = function(FF) {
      var WF = this.__data__,
        SF = CF(WF, FF);
      return SF < 0 ? void 0 : WF[SF][1]
    }
  },
  4320: (FF, WF, SF) => {
    var CF = SF(4306);
    FF.exports = function(FF) {
      return CF(this.__data__, FF) > -1
    }
  },
  4324: (FF, WF, SF) => {
    var CF = SF(4306);
    FF.exports = function(FF, WF) {
      var SF = this.__data__,
        AF = CF(SF, FF);
      return AF < 0 ? (++this.size, SF.push([FF, WF])) : SF[AF][1] = WF, this
    }
  },
  4215: (FF, WF, SF) => {
    var CF = SF(4218),
      AF = SF(4284),
      uF = SF(4331);
    FF.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new CF,
        map: new(uF || AF),
        string: new CF
      }
    }
  },
  4339: (FF, WF, SF) => {
    var CF = SF(4348);
    FF.exports = function(FF) {
      var WF = CF(this, FF).delete(FF);
      return this.size -= WF ? 1 : 0, WF
    }
  },
  4358: (FF, WF, SF) => {
    var CF = SF(4348);
    FF.exports = function(FF) {
      return CF(this, FF).get(FF)
    }
  },
  4360: (FF, WF, SF) => {
    var CF = SF(4348);
    FF.exports = function(FF) {
      return CF(this, FF).has(FF)
    }
  },
  4364: (FF, WF, SF) => {
    var CF = SF(4348);
    FF.exports = function(FF, WF) {
      var SF = CF(this, FF),
        AF = SF.size;
      return SF.set(FF, WF), this.size += SF.size == AF ? 0 : 1, this
    }
  },
  4612: FF => {
    FF.exports = function(FF) {
      var WF = -1,
        SF = Array(FF.size);
      return FF.forEach((function(FF, CF) {
        SF[++WF] = [CF, FF]
      })), SF
    }
  },
  4764: FF => {
    FF.exports = function(FF, WF) {
      return function(SF) {
        return null != SF && (SF[FF] === WF && (void 0 !== WF || FF in Object(SF)))
      }
    }
  },
  4197: (FF, WF, SF) => {
    var CF = SF(4201);
    FF.exports = function(FF) {
      var WF = CF(FF, (function(FF) {
          return 500 === SF.size && SF.clear(), FF
        })),
        SF = WF.cache;
      return WF
    }
  },
  4225: (FF, WF, SF) => {
    var CF = SF(4230)(Object, "create");
    FF.exports = CF
  },
  4714: (FF, WF, SF) => {
    var CF = SF(4716)(Object.keys, Object);
    FF.exports = CF
  },
  4697: (FF, WF, SF) => {
    FF = SF.nmd(FF);
    var CF = SF(4084),
      AF = WF && !WF.nodeType && WF,
      uF = AF && FF && !FF.nodeType && FF,
      hF = uF && uF.exports === AF && CF.process,
      bW = function() {
        try {
          var FF = uF && uF.require && uF.require("util").types;
          return FF || hF && hF.binding && hF.binding("util")
        } catch (WF) {}
      }();
    FF.exports = bW
  },
  4128: FF => {
    var WF = Object.prototype.toString;
    FF.exports = function(FF) {
      return WF.call(FF)
    }
  },
  4716: FF => {
    FF.exports = function(FF, WF) {
      return function(SF) {
        return FF(WF(SF))
      }
    }
  },
  4889: (FF, WF, SF) => {
    var CF = SF(4897),
      AF = Math.max;
    FF.exports = function(FF, WF, SF) {
      return WF = AF(void 0 === WF ? FF.length - 1 : WF, 0),
        function() {
          for (var uF = arguments, hF = -1, bW = AF(uF.length - WF, 0), dF = Array(bW); ++hF < bW;) dF[hF] = uF[WF + hF];
          hF = -1;
          for (var PF = Array(WF + 1); ++hF < WF;) PF[hF] = uF[hF];
          return PF[WF] = SF(dF), CF(FF, this, PF)
        }
    }
  },
  4077: (FF, WF, SF) => {
    var CF = SF(4084),
      AF = "object" == typeof self && self && self.Object === Object && self,
      uF = CF || AF || Function("return this")();
    FF.exports = uF
  },
  4586: FF => {
    FF.exports = function(FF) {
      return this.__data__.set(FF, "__lodash_hash_undefined__"), this
    }
  },
  4588: FF => {
    FF.exports = function(FF) {
      return this.__data__.has(FF)
    }
  },
  4614: FF => {
    FF.exports = function(FF) {
      var WF = -1,
        SF = Array(FF.size);
      return FF.forEach((function(FF) {
        SF[++WF] = FF
      })), SF
    }
  },
  4901: (FF, WF, SF) => {
    var CF = SF(4909),
      AF = SF(4922)(CF);
    FF.exports = AF
  },
  4922: FF => {
    var WF = Date.now;
    FF.exports = function(FF) {
      var SF = 0,
        CF = 0;
      return function() {
        var AF = WF(),
          uF = 16 - (AF - CF);
        if (CF = AF, uF > 0) {
          if (++SF >= 800) return arguments[0]
        } else SF = 0;
        return FF.apply(void 0, arguments)
      }
    }
  },
  4537: (FF, WF, SF) => {
    var CF = SF(4284);
    FF.exports = function() {
      this.__data__ = new CF, this.size = 0
    }
  },
  4539: FF => {
    FF.exports = function(FF) {
      var WF = this.__data__,
        SF = WF.delete(FF);
      return this.size = WF.size, SF
    }
  },
  4545: FF => {
    FF.exports = function(FF) {
      return this.__data__.get(FF)
    }
  },
  4548: FF => {
    FF.exports = function(FF) {
      return this.__data__.has(FF)
    }
  },
  4552: (FF, WF, SF) => {
    var CF = SF(4284),
      AF = SF(4331),
      uF = SF(4208);
    FF.exports = function(FF, WF) {
      var SF = this.__data__;
      if (SF instanceof CF) {
        var hF = SF.__data__;
        if (!AF || hF.length < 199) return hF.push([FF, WF]), this.size = ++SF.size, this;
        SF = this.__data__ = new uF(hF)
      }
      return SF.set(FF, WF), this.size = SF.size, this
    }
  },
  5005: FF => {
    FF.exports = function(FF, WF, SF) {
      for (var CF = SF - 1, AF = FF.length; ++CF < AF;)
        if (FF[CF] === WF) return CF;
      return -1
    }
  },
  5054: (FF, WF, SF) => {
    var CF = SF(5062),
      AF = SF(5046),
      uF = SF(5065);
    FF.exports = function(FF) {
      return AF(FF) ? uF(FF) : CF(FF)
    }
  },
  4188: (FF, WF, SF) => {
    var CF = SF(4197),
      AF = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      uF = /\\(\\)?/g,
      hF = CF((function(FF) {
        var WF = [];
        return 46 === FF.charCodeAt(0) && WF.push(""), FF.replace(AF, (function(FF, SF, CF, AF) {
          WF.push(CF ? AF.replace(uF, "$1") : SF || FF)
        })), WF
      }));
    FF.exports = hF
  },
  4385: (FF, WF, SF) => {
    var CF = SF(4107);
    FF.exports = function(FF) {
      if ("string" == typeof FF || CF(FF)) return FF;
      var WF = FF + "";
      return "0" == WF && 1 / FF == -1 / 0 ? "-0" : WF
    }
  },
  4259: FF => {
    var WF = Function.prototype.toString;
    FF.exports = function(FF) {
      if (null != FF) {
        try {
          return WF.call(FF)
        } catch (SF) {}
        try {
          return FF + ""
        } catch (SF) {}
      }
      return ""
    }
  },
  4103: FF => {
    var WF = /\s/;
    FF.exports = function(FF) {
      for (var SF = FF.length; SF-- && WF.test(FF.charAt(SF)););
      return SF
    }
  },
  5065: FF => {
    var WF = "\\ud800-\\udfff",
      SF = "[" + WF + "]",
      CF = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      AF = "\\ud83c[\\udffb-\\udfff]",
      uF = "[^" + WF + "]",
      hF = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      bW = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      dF = "(?:" + CF + "|" + AF + ")" + "?",
      PF = "[\\ufe0e\\ufe0f]?",
      RF = PF + dF + ("(?:\\u200d(?:" + [uF, hF, bW].join("|") + ")" + PF + dF + ")*"),
      iW = "(?:" + [uF + CF + "?", CF, hF, bW, SF].join("|") + ")",
      eF = RegExp(AF + "(?=" + AF + ")|" + iW + RF, "g");
    FF.exports = function(FF) {
      return FF.match(eF) || []
    }
  },
  4915: FF => {
    FF.exports = function(FF) {
      return function() {
        return FF
      }
    }
  },
  4068: (FF, WF, SF) => {
    var CF = SF(4071),
      AF = SF(4075),
      uF = SF(4091),
      hF = Math.max,
      bW = Math.min;
    FF.exports = function(FF, WF, SF) {
      var dF, PF, RF, iW, eF, EF, QF = 0,
        rW = !1,
        gW = !1,
        tW = !0;
      if ("function" != typeof FF) throw new TypeError("Expected a function");

      function TF(WF) {
        var SF = dF,
          CF = PF;
        return dF = PF = void 0, QF = WF, iW = FF.apply(CF, SF)
      }

      function aW(FF) {
        var SF = FF - EF;
        return void 0 === EF || SF >= WF || SF < 0 || gW && FF - QF >= RF
      }

      function kW() {
        var FF = AF();
        if (aW(FF)) return qW(FF);
        eF = setTimeout(kW, function(FF) {
          var SF = WF - (FF - EF);
          return gW ? bW(SF, RF - (FF - QF)) : SF
        }(FF))
      }

      function qW(FF) {
        return eF = void 0, tW && dF ? TF(FF) : (dF = PF = void 0, iW)
      }

      function VF() {
        var FF = AF(),
          SF = aW(FF);
        if (dF = arguments, PF = this, EF = FF, SF) {
          if (void 0 === eF) return function(FF) {
            return QF = FF, eF = setTimeout(kW, WF), rW ? TF(FF) : iW
          }(EF);
          if (gW) return clearTimeout(eF), eF = setTimeout(kW, WF), TF(EF)
        }
        return void 0 === eF && (eF = setTimeout(kW, WF)), iW
      }
      return WF = uF(WF) || 0, CF(SF) && (rW = !!SF.leading, RF = (gW = "maxWait" in SF) ? hF(uF(SF.maxWait) || 0, WF) : RF, tW = "trailing" in SF ? !!SF.trailing : tW), VF.cancel = function() {
        void 0 !== eF && clearTimeout(eF), QF = 0, dF = EF = PF = eF = void 0
      }, VF.flush = function() {
        return void 0 === eF ? iW : qW(AF())
      }, VF
    }
  },
  4309: FF => {
    FF.exports = function(FF, WF) {
      return FF === WF || FF !== FF && WF !== WF
    }
  },
  5218: (FF, WF, SF) => {
    var CF = SF(5224),
      AF = SF(5231),
      uF = SF(4520),
      hF = SF(4147),
      bW = SF(4451);
    FF.exports = function(FF, WF, SF) {
      var dF = hF(FF) ? CF : AF;
      return SF && bW(FF, WF, SF) && (WF = void 0), dF(FF, uF(WF, 3))
    }
  },
  5310: (FF, WF, SF) => {
    var CF = SF(5318)(SF(5324));
    FF.exports = CF
  },
  5324: (FF, WF, SF) => {
    var CF = SF(4991),
      AF = SF(4520),
      uF = SF(5333),
      hF = Math.max;
    FF.exports = function(FF, WF, SF) {
      var bW = null == FF ? 0 : FF.length;
      if (!bW) return -1;
      var dF = null == SF ? 0 : uF(SF);
      return dF < 0 && (dF = hF(bW + dF, 0)), CF(FF, AF(WF, 3), dF)
    }
  },
  5152: (FF, WF, SF) => {
    var CF = SF(4484),
      AF = SF(5154);
    FF.exports = function(FF, WF) {
      return CF(AF(FF, WF), 1)
    }
  },
  4162: (FF, WF, SF) => {
    var CF = SF(4171);
    FF.exports = function(FF, WF, SF) {
      var AF = null == FF ? void 0 : CF(FF, WF);
      return void 0 === AF ? SF : AF
    }
  },
  4778: (FF, WF, SF) => {
    var CF = SF(4781),
      AF = SF(4788);
    FF.exports = function(FF, WF) {
      return null != FF && AF(FF, WF, CF)
    }
  },
  4795: FF => {
    FF.exports = function(FF) {
      return FF
    }
  },
  4504: (FF, WF, SF) => {
    var CF = SF(4506),
      AF = SF(4130),
      uF = Object.prototype,
      hF = uF.hasOwnProperty,
      bW = uF.propertyIsEnumerable,
      dF = CF(function() {
        return arguments
      }()) ? CF : function(FF) {
        return AF(FF) && hF.call(FF, "callee") && !bW.call(FF, "callee")
      };
    FF.exports = dF
  },
  4147: FF => {
    var WF = Array.isArray;
    FF.exports = WF
  },
  4454: (FF, WF, SF) => {
    var CF = SF(4241),
      AF = SF(4458);
    FF.exports = function(FF) {
      return null != FF && AF(FF.length) && !CF(FF)
    }
  },
  5280: (FF, WF, SF) => {
    var CF = SF(4111),
      AF = SF(4130);
    FF.exports = function(FF) {
      return !0 === FF || !1 === FF || AF(FF) && "[object Boolean]" == CF(FF)
    }
  },
  4663: (FF, WF, SF) => {
    FF = SF.nmd(FF);
    var CF = SF(4077),
      AF = SF(4667),
      uF = WF && !WF.nodeType && WF,
      hF = uF && FF && !FF.nodeType && FF,
      bW = hF && hF.exports === uF ? CF.NC : void 0,
      dF = (bW ? bW.isBuffer : void 0) || AF;
    FF.exports = dF
  },
  5156: (FF, WF, SF) => {
    var CF = SF(4559);
    FF.exports = function(FF, WF) {
      return CF(FF, WF)
    }
  },
  4241: (FF, WF, SF) => {
    var CF = SF(4111),
      AF = SF(4071);
    FF.exports = function(FF) {
      if (!AF(FF)) return !1;
      var WF = CF(FF);
      return "[object Function]" == WF || "[object GeneratorFunction]" == WF || "[object AsyncFunction]" == WF || "[object Proxy]" == WF
    }
  },
  4458: FF => {
    FF.exports = function(FF) {
      return "number" == typeof FF && FF > -1 && FF % 1 == 0 && FF <= 9007199254740991
    }
  },
  4151: (FF, WF, SF) => {
    var CF = SF(4157);
    FF.exports = function(FF) {
      return CF(FF) && FF != +FF
    }
  },
  4392: FF => {
    FF.exports = function(FF) {
      return null == FF
    }
  },
  4157: (FF, WF, SF) => {
    var CF = SF(4111),
      AF = SF(4130);
    FF.exports = function(FF) {
      return "number" == typeof FF || AF(FF) && "[object Number]" == CF(FF)
    }
  },
  4071: FF => {
    FF.exports = function(FF) {
      var WF = typeof FF;
      return null != FF && ("object" == WF || "function" == WF)
    }
  },
  4130: FF => {
    FF.exports = function(FF) {
      return null != FF && "object" == typeof FF
    }
  },
  5267: (FF, WF, SF) => {
    var CF = SF(4111),
      AF = SF(5273),
      uF = SF(4130),
      hF = Function.prototype,
      bW = Object.prototype,
      dF = hF.toString,
      PF = bW.hasOwnProperty,
      RF = dF.call(Object);
    FF.exports = function(FF) {
      if (!uF(FF) || "[object Object]" != CF(FF)) return !1;
      var WF = AF(FF);
      if (null === WF) return !0;
      var SF = PF.call(WF, "constructor") && WF.constructor;
      return "function" == typeof SF && SF instanceof SF && dF.call(SF) == RF
    }
  },
  4139: (FF, WF, SF) => {
    var CF = SF(4111),
      AF = SF(4147),
      uF = SF(4130);
    FF.exports = function(FF) {
      return "string" == typeof FF || !AF(FF) && uF(FF) && "[object String]" == CF(FF)
    }
  },
  4107: (FF, WF, SF) => {
    var CF = SF(4111),
      AF = SF(4130);
    FF.exports = function(FF) {
      return "symbol" == typeof FF || AF(FF) && "[object Symbol]" == CF(FF)
    }
  },
  4672: (FF, WF, SF) => {
    var CF = SF(4679),
      AF = SF(4688),
      uF = SF(4697),
      hF = uF && uF.isTypedArray,
      bW = hF ? AF(hF) : CF;
    FF.exports = bW
  },
  4645: (FF, WF, SF) => {
    var CF = SF(4651),
      AF = SF(4700),
      uF = SF(4454);
    FF.exports = function(FF) {
      return uF(FF) ? CF(FF) : AF(FF)
    }
  },
  5253: FF => {
    FF.exports = function(FF) {
      var WF = null == FF ? 0 : FF.length;
      return WF ? FF[WF - 1] : void 0
    }
  },
  5154: (FF, WF, SF) => {
    var CF = SF(4378),
      AF = SF(4520),
      uF = SF(4825),
      hF = SF(4147);
    FF.exports = function(FF, WF) {
      return (hF(FF) ? CF : uF)(FF, AF(WF, 3))
    }
  },
  5208: (FF, WF, SF) => {
    var CF = SF(5210),
      AF = SF(4837),
      uF = SF(4520);
    FF.exports = function(FF, WF) {
      var SF = {};
      return WF = uF(WF, 3), AF(FF, (function(FF, AF, uF) {
        CF(SF, AF, WF(FF, AF, uF))
      })), SF
    }
  },
  5123: (FF, WF, SF) => {
    var CF = SF(5126),
      AF = SF(5132),
      uF = SF(4795);
    FF.exports = function(FF) {
      return FF && FF.length ? CF(FF, uF, AF) : void 0
    }
  },
  4201: (FF, WF, SF) => {
    var CF = SF(4208);

    function AF(FF, WF) {
      if ("function" != typeof FF || null != WF && "function" != typeof WF) throw new TypeError("Expected a function");
      var SF = function() {
        var CF = arguments,
          AF = WF ? WF.apply(this, CF) : CF[0],
          uF = SF.cache;
        if (uF.has(AF)) return uF.get(AF);
        var hF = FF.apply(this, CF);
        return SF.cache = uF.set(AF, hF) || uF, hF
      };
      return SF.cache = new(AF.Cache || CF), SF
    }
    AF.Cache = CF, FF.exports = AF
  },
  5138: (FF, WF, SF) => {
    var CF = SF(5126),
      AF = SF(5144),
      uF = SF(4795);
    FF.exports = function(FF) {
      return FF && FF.length ? CF(FF, uF, AF) : void 0
    }
  },
  5014: FF => {
    FF.exports = function() {}
  },
  4075: (FF, WF, SF) => {
    var CF = SF(4077);
    FF.exports = function() {
      return CF.Date.now()
    }
  },
  4804: (FF, WF, SF) => {
    var CF = SF(4811),
      AF = SF(4816),
      uF = SF(4181),
      hF = SF(4385);
    FF.exports = function(FF) {
      return uF(FF) ? CF(hF(FF)) : AF(FF)
    }
  },
  4433: (FF, WF, SF) => {
    var CF = SF(4442)();
    FF.exports = CF
  },
  5293: (FF, WF, SF) => {
    var CF = SF(4597),
      AF = SF(4520),
      uF = SF(5298),
      hF = SF(4147),
      bW = SF(4451);
    FF.exports = function(FF, WF, SF) {
      var dF = hF(FF) ? CF : uF;
      return SF && bW(FF, WF, SF) && (WF = void 0), dF(FF, AF(WF, 3))
    }
  },
  4476: (FF, WF, SF) => {
    var CF = SF(4484),
      AF = SF(4513),
      uF = SF(4887),
      hF = SF(4451),
      bW = uF((function(FF, WF) {
        if (null == FF) return [];
        var SF = WF.length;
        return SF > 1 && hF(FF, WF[0], WF[1]) ? WF = [] : SF > 2 && hF(WF[0], WF[1], WF[2]) && (WF = [WF[0]]), AF(FF, CF(WF, 1), [])
      }));
    FF.exports = bW
  },
  4642: FF => {
    FF.exports = function() {
      return []
    }
  },
  4667: FF => {
    FF.exports = function() {
      return !1
    }
  },
  4062: (FF, WF, SF) => {
    var CF = SF(4068),
      AF = SF(4071);
    FF.exports = function(FF, WF, SF) {
      var uF = !0,
        hF = !0;
      if ("function" != typeof FF) throw new TypeError("Expected a function");
      return AF(SF) && (uF = "leading" in SF ? !!SF.leading : uF, hF = "trailing" in SF ? !!SF.trailing : hF), CF(FF, WF, {
        leading: uF,
        maxWait: WF,
        trailing: hF
      })
    }
  },
  4468: (FF, WF, SF) => {
    var CF = SF(4091),
      AF = 1 / 0;
    FF.exports = function(FF) {
      return FF ? (FF = CF(FF)) === AF || FF === -1 / 0 ? 17976931348623157e292 * (FF < 0 ? -1 : 1) : FF === FF ? FF : 0 : 0 === FF ? FF : 0
    }
  },
  5333: (FF, WF, SF) => {
    var CF = SF(4468);
    FF.exports = function(FF) {
      var WF = CF(FF),
        SF = WF % 1;
      return WF === WF ? SF ? WF - SF : WF : 0
    }
  },
  4091: (FF, WF, SF) => {
    var CF = SF(4095),
      AF = SF(4071),
      uF = SF(4107),
      hF = /^[-+]0x[0-9a-f]+$/i,
      bW = /^0b[01]+$/i,
      dF = /^0o[0-7]+$/i,
      PF = parseInt;
    FF.exports = function(FF) {
      if ("number" == typeof FF) return FF;
      if (uF(FF)) return NaN;
      if (AF(FF)) {
        var WF = "function" == typeof FF.valueOf ? FF.valueOf() : FF;
        FF = AF(WF) ? WF + "" : WF
      }
      if ("string" != typeof FF) return 0 === FF ? FF : +FF;
      FF = CF(FF);
      var SF = bW.test(FF);
      return SF || dF.test(FF) ? PF(FF.slice(2), SF ? 2 : 8) : hF.test(FF) ? NaN : +FF
    }
  },
  4371: (FF, WF, SF) => {
    var CF = SF(4373);
    FF.exports = function(FF) {
      return null == FF ? "" : CF(FF)
    }
  },
  4960: (FF, WF, SF) => {
    var CF = SF(4520),
      AF = SF(4965);
    FF.exports = function(FF, WF) {
      return FF && FF.length ? AF(FF, CF(WF, 2)) : []
    }
  },
  5026: (FF, WF, SF) => {
    var CF = SF(5030)("toUpperCase");
    FF.exports = CF
  },
  5089: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => zS
    });
    var CF = SF(46),
      AF = SF(3961),
      uF = SF.n(AF);
    const {
      getOwnPropertyNames: hF,
      getOwnPropertySymbols: bW
    } = Object, {
      hasOwnProperty: dF
    } = Object.prototype;

    function PF(FF, WF) {
      return function(SF, CF, AF) {
        return FF(SF, CF, AF) && WF(SF, CF, AF)
      }
    }

    function RF(FF) {
      return function(WF, SF, CF) {
        if (!WF || !SF || "object" !== typeof WF || "object" !== typeof SF) return FF(WF, SF, CF);
        const {
          cache: AF
        } = CF, uF = AF.get(WF), hF = AF.get(SF);
        if (uF && hF) return uF === SF && hF === WF;
        AF.set(WF, SF), AF.set(SF, WF);
        const bW = FF(WF, SF, CF);
        return AF.delete(WF), AF.delete(SF), bW
      }
    }

    function iW(FF) {
      return hF(FF).concat(bW(FF))
    }
    const eF = Object.hasOwn || ((FF, WF) => dF.call(FF, WF));

    function EF(FF, WF) {
      return FF === WF || !FF && !WF && FF !== FF && WF !== WF
    }
    const {
      getOwnPropertyDescriptor: QF,
      keys: rW
    } = Object;

    function gW(FF, WF) {
      return FF.byteLength === WF.byteLength && ZF(new Uint8Array(FF), new Uint8Array(WF))
    }

    function tW(FF, WF, SF) {
      let CF = FF.length;
      if (WF.length !== CF) return !1;
      for (; CF-- > 0;)
        if (!SF.equals(FF[CF], WF[CF], CF, CF, FF, WF, SF)) return !1;
      return !0
    }

    function TF(FF, WF) {
      return FF.byteLength === WF.byteLength && ZF(new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength), new Uint8Array(WF.buffer, WF.byteOffset, WF.byteLength))
    }

    function aW(FF, WF) {
      return EF(FF.getTime(), WF.getTime())
    }

    function kW(FF, WF) {
      return FF.name === WF.name && FF.message === WF.message && FF.cause === WF.cause && FF.stack === WF.stack
    }

    function qW(FF, WF) {
      return FF === WF
    }

    function VF(FF, WF, SF) {
      const CF = FF.size;
      if (CF !== WF.size) return !1;
      if (!CF) return !0;
      const AF = new Array(CF),
        uF = FF.entries();
      let hF, bW, dF = 0;
      for (;
        (hF = uF.next()) && !hF.done;) {
        const CF = WF.entries();
        let uF = !1,
          PF = 0;
        for (;
          (bW = CF.next()) && !bW.done;) {
          if (AF[PF]) {
            PF++;
            continue
          }
          const CF = hF.value,
            RF = bW.value;
          if (SF.equals(CF[0], RF[0], dF, PF, FF, WF, SF) && SF.equals(CF[1], RF[1], CF[0], RF[0], FF, WF, SF)) {
            uF = AF[PF] = !0;
            break
          }
          PF++
        }
        if (!uF) return !1;
        dF++
      }
      return !0
    }
    const NF = EF;

    function DF(FF, WF, SF) {
      const CF = rW(FF);
      let AF = CF.length;
      if (rW(WF).length !== AF) return !1;
      for (; AF-- > 0;)
        if (!YF(FF, WF, SF, CF[AF])) return !1;
      return !0
    }

    function LF(FF, WF, SF) {
      const CF = iW(FF);
      let AF, uF, hF, bW = CF.length;
      if (iW(WF).length !== bW) return !1;
      for (; bW-- > 0;) {
        if (AF = CF[bW], !YF(FF, WF, SF, AF)) return !1;
        if (uF = QF(FF, AF), hF = QF(WF, AF), (uF || hF) && (!uF || !hF || uF.configurable !== hF.configurable || uF.enumerable !== hF.enumerable || uF.writable !== hF.writable)) return !1
      }
      return !0
    }

    function mW(FF, WF) {
      return EF(FF.valueOf(), WF.valueOf())
    }

    function OF(FF, WF) {
      return FF.source === WF.source && FF.flags === WF.flags
    }

    function xW(FF, WF, SF) {
      const CF = FF.size;
      if (CF !== WF.size) return !1;
      if (!CF) return !0;
      const AF = new Array(CF),
        uF = FF.values();
      let hF, bW;
      for (;
        (hF = uF.next()) && !hF.done;) {
        const CF = WF.values();
        let uF = !1,
          dF = 0;
        for (;
          (bW = CF.next()) && !bW.done;) {
          if (!AF[dF] && SF.equals(hF.value, bW.value, hF.value, bW.value, FF, WF, SF)) {
            uF = AF[dF] = !0;
            break
          }
          dF++
        }
        if (!uF) return !1
      }
      return !0
    }

    function ZF(FF, WF) {
      let SF = FF.byteLength;
      if (WF.byteLength !== SF || FF.byteOffset !== WF.byteOffset) return !1;
      for (; SF-- > 0;)
        if (FF[SF] !== WF[SF]) return !1;
      return !0
    }

    function oF(FF, WF) {
      return FF.hostname === WF.hostname && FF.pathname === WF.pathname && FF.protocol === WF.protocol && FF.port === WF.port && FF.hash === WF.hash && FF.username === WF.username && FF.password === WF.password
    }

    function YF(FF, WF, SF, CF) {
      return !("_owner" !== CF && "__o" !== CF && "__v" !== CF || !FF.$$typeof && !WF.$$typeof) || eF(WF, CF) && SF.equals(FF[CF], WF[CF], CF, CF, FF, WF, SF)
    }
    const MF = {
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
      cW = Object.prototype.toString;

    function GF(FF) {
      let {
        areArrayBuffersEqual: WF,
        areArraysEqual: SF,
        areDataViewsEqual: CF,
        areDatesEqual: AF,
        areErrorsEqual: uF,
        areFunctionsEqual: hF,
        areMapsEqual: bW,
        areNumbersEqual: dF,
        areObjectsEqual: PF,
        arePrimitiveWrappersEqual: RF,
        areRegExpsEqual: iW,
        areSetsEqual: eF,
        areTypedArraysEqual: EF,
        areUrlsEqual: QF,
        unknownTagComparators: rW
      } = FF;
      return function(FF, gW, tW) {
        if (FF === gW) return !0;
        if (null == FF || null == gW) return !1;
        const TF = typeof FF;
        if (TF !== typeof gW) return !1;
        if ("object" !== TF) return "number" === TF ? dF(FF, gW, tW) : "function" === TF && hF(FF, gW, tW);
        const aW = FF.constructor;
        if (aW !== gW.constructor) return !1;
        if (aW === Object) return PF(FF, gW, tW);
        if (Array.isArray(FF)) return SF(FF, gW, tW);
        if (aW === Date) return AF(FF, gW, tW);
        if (aW === RegExp) return iW(FF, gW, tW);
        if (aW === Map) return bW(FF, gW, tW);
        if (aW === Set) return eF(FF, gW, tW);
        const kW = cW.call(FF);
        if ("[object Date]" === kW) return AF(FF, gW, tW);
        if ("[object RegExp]" === kW) return iW(FF, gW, tW);
        if ("[object Map]" === kW) return bW(FF, gW, tW);
        if ("[object Set]" === kW) return eF(FF, gW, tW);
        if ("[object Object]" === kW) return "function" !== typeof FF.then && "function" !== typeof gW.then && PF(FF, gW, tW);
        if ("[object URL]" === kW) return QF(FF, gW, tW);
        if ("[object Error]" === kW) return uF(FF, gW, tW);
        if ("[object Arguments]" === kW) return PF(FF, gW, tW);
        if (MF[kW]) return EF(FF, gW, tW);
        if ("[object ArrayBuffer]" === kW) return WF(FF, gW, tW);
        if ("[object DataView]" === kW) return CF(FF, gW, tW);
        if ("[object Boolean]" === kW || "[object Number]" === kW || "[object String]" === kW) return RF(FF, gW, tW);
        if (rW) {
          let WF = rW[kW];
          if (!WF) {
            const SF = null != (qW = FF) ? qW[Symbol.toStringTag] : void 0;
            SF && (WF = rW[SF])
          }
          if (WF) return WF(FF, gW, tW)
        }
        var qW;
        return !1
      }
    }
    const zW = IF();
    IF({
      strict: !0
    }), IF({
      circular: !0
    }), IF({
      circular: !0,
      strict: !0
    }), IF({
      createInternalComparator: () => EF
    }), IF({
      strict: !0,
      createInternalComparator: () => EF
    }), IF({
      circular: !0,
      createInternalComparator: () => EF
    }), IF({
      circular: !0,
      createInternalComparator: () => EF,
      strict: !0
    });

    function IF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: WF = !1,
        createInternalComparator: SF,
        createState: CF,
        strict: AF = !1
      } = FF, uF = function(FF) {
        let {
          circular: WF,
          createCustomConfig: SF,
          strict: CF
        } = FF, AF = {
          areArrayBuffersEqual: gW,
          areArraysEqual: CF ? LF : tW,
          areDataViewsEqual: TF,
          areDatesEqual: aW,
          areErrorsEqual: kW,
          areFunctionsEqual: qW,
          areMapsEqual: CF ? PF(VF, LF) : VF,
          areNumbersEqual: NF,
          areObjectsEqual: CF ? LF : DF,
          arePrimitiveWrappersEqual: mW,
          areRegExpsEqual: OF,
          areSetsEqual: CF ? PF(xW, LF) : xW,
          areTypedArraysEqual: CF ? PF(ZF, LF) : ZF,
          areUrlsEqual: oF,
          unknownTagComparators: void 0
        };
        if (SF && (AF = Object.assign({}, AF, SF(AF))), WF) {
          const FF = RF(AF.areArraysEqual),
            WF = RF(AF.areMapsEqual),
            SF = RF(AF.areObjectsEqual),
            CF = RF(AF.areSetsEqual);
          AF = Object.assign({}, AF, {
            areArraysEqual: FF,
            areMapsEqual: WF,
            areObjectsEqual: SF,
            areSetsEqual: CF
          })
        }
        return AF
      }(FF), hF = GF(uF);
      var bW;
      return function(FF) {
        let {
          circular: WF,
          comparator: SF,
          createState: CF,
          equals: AF,
          strict: uF
        } = FF;
        if (CF) return function(FF, hF) {
          const {
            cache: bW = (WF ? new WeakMap : void 0),
            meta: dF
          } = CF();
          return SF(FF, hF, {
            cache: bW,
            equals: AF,
            meta: dF,
            strict: uF
          })
        };
        if (WF) return function(FF, WF) {
          return SF(FF, WF, {
            cache: new WeakMap,
            equals: AF,
            meta: void 0,
            strict: uF
          })
        };
        const hF = {
          cache: void 0,
          equals: AF,
          meta: void 0,
          strict: uF
        };
        return function(FF, WF) {
          return SF(FF, WF, hF)
        }
      }({
        circular: WF,
        comparator: hF,
        createState: CF,
        equals: SF ? SF(hF) : (bW = hF, function(FF, WF, SF, CF, AF, uF, hF) {
          return bW(FF, WF, hF)
        }),
        strict: AF
      })
    }

    function fF(FF) {
      var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SF = -1;
      requestAnimationFrame((function CF(AF) {
        SF < 0 && (SF = AF), AF - SF > WF ? (FF(AF), SF = -1) : function(FF) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(FF)
        }(CF)
      }))
    }

    function yW(FF) {
      return yW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, yW(FF)
    }

    function sF(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return nF(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return nF(FF, WF)
      }(FF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function HF() {
      var FF = function() {
          return null
        },
        WF = !1,
        SF = function SF(CF) {
          if (!WF) {
            if (Array.isArray(CF)) {
              if (!CF.length) return;
              var AF = sF(CF),
                uF = AF[0],
                hF = AF.slice(1);
              return "number" === typeof uF ? void fF(SF.bind(null, hF), uF) : (SF(uF), void fF(SF.bind(null, hF)))
            }
            "object" === yW(CF) && FF(CF), "function" === typeof CF && CF()
          }
        };
      return {
        stop: function() {
          WF = !0
        },
        start: function(FF) {
          WF = !1, SF(FF)
        },
        subscribe: function(WF) {
          return FF = WF,
            function() {
              FF = function() {
                return null
              }
            }
        }
      }
    }

    function KF(FF) {
      return KF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, KF(FF)
    }

    function wF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function XF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? wF(Object(SF), !0).forEach((function(WF) {
          UF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : wF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function UF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" !== KF(FF) || null === FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" !== KF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" === KF(WF) ? WF : String(WF)
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var BF = function(FF) {
        return FF
      },
      jW = function(FF, WF) {
        return Object.keys(WF).reduce((function(SF, CF) {
          return XF(XF({}, SF), {}, UF({}, CF, FF(CF, WF[CF])))
        }), {})
      },
      vW = function(FF, WF, SF) {
        return FF.map((function(FF) {
          return "".concat((CF = FF, CF.replace(/([A-Z])/g, (function(FF) {
            return "-".concat(FF.toLowerCase())
          }))), " ").concat(WF, "ms ").concat(SF);
          var CF
        })).join(",")
      };

    function JF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || lF(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pF(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return FW(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || lF(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lF(FF, WF) {
      if (FF) {
        if ("string" === typeof FF) return FW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        return "Object" === SF && FF.constructor && (SF = FF.constructor.name), "Map" === SF || "Set" === SF ? Array.from(FF) : "Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF) ? FW(FF, WF) : void 0
      }
    }

    function FW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }
    var WW = 1e-4,
      SW = function(FF, WF) {
        return [0, 3 * FF, 3 * WF - 6 * FF, 3 * FF - 3 * WF + 1]
      },
      CW = function(FF, WF) {
        return FF.map((function(FF, SF) {
          return FF * Math.pow(WF, SF)
        })).reduce((function(FF, WF) {
          return FF + WF
        }))
      },
      AW = function(FF, WF) {
        return function(SF) {
          var CF = SW(FF, WF);
          return CW(CF, SF)
        }
      },
      uW = function() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        var CF = WF[0],
          AF = WF[1],
          uF = WF[2],
          hF = WF[3];
        if (1 === WF.length) switch (WF[0]) {
          case "linear":
            CF = 0, AF = 0, uF = 1, hF = 1;
            break;
          case "ease":
            CF = .25, AF = .1, uF = .25, hF = 1;
            break;
          case "ease-in":
            CF = .42, AF = 0, uF = 1, hF = 1;
            break;
          case "ease-out":
            CF = .42, AF = 0, uF = .58, hF = 1;
            break;
          case "ease-in-out":
            CF = 0, AF = 0, uF = .58, hF = 1;
            break;
          default:
            var bW = WF[0].split("(");
            if ("cubic-bezier" === bW[0] && 4 === bW[1].split(")")[0].split(",").length) {
              var dF = JF(bW[1].split(")")[0].split(",").map((function(FF) {
                return parseFloat(FF)
              })), 4);
              CF = dF[0], AF = dF[1], uF = dF[2], hF = dF[3]
            }
        } [CF, uF, AF, hF].every((function(FF) {
          return "number" === typeof FF && FF >= 0 && FF <= 1
        }));
        var PF, RF, iW = AW(CF, uF),
          eF = AW(AF, hF),
          EF = (PF = CF, RF = uF, function(FF) {
            var WF = SW(PF, RF),
              SF = [].concat(pF(WF.map((function(FF, WF) {
                return FF * WF
              })).slice(1)), [0]);
            return CW(SF, FF)
          }),
          QF = function(FF) {
            for (var WF, SF = FF > 1 ? 1 : FF, CF = SF, AF = 0; AF < 8; ++AF) {
              var uF = iW(CF) - SF,
                hF = EF(CF);
              if (Math.abs(uF - SF) < WW || hF < WW) return eF(CF);
              CF = (WF = CF - uF / hF) > 1 ? 1 : WF < 0 ? 0 : WF
            }
            return eF(CF)
          };
        return QF.isStepper = !1, QF
      },
      hW = function() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        var CF = WF[0];
        if ("string" === typeof CF) switch (CF) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return uW(CF);
          case "spring":
            return function() {
              var FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                WF = FF.stiff,
                SF = void 0 === WF ? 100 : WF,
                CF = FF.damping,
                AF = void 0 === CF ? 8 : CF,
                uF = FF.dt,
                hF = void 0 === uF ? 17 : uF,
                bW = function(FF, WF, CF) {
                  var uF = CF + (-(FF - WF) * SF - CF * AF) * hF / 1e3,
                    bW = CF * hF / 1e3 + FF;
                  return Math.abs(bW - WF) < WW && Math.abs(uF) < WW ? [WF, 0] : [bW, uF]
                };
              return bW.isStepper = !0, bW.dt = hF, bW
            }();
          default:
            if ("cubic-bezier" === CF.split("(")[0]) return uW(CF)
        }
        return "function" === typeof CF ? CF : null
      };

    function bS(FF) {
      return bS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, bS(FF)
    }

    function dW(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return QW(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || EW(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function RW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? PW(Object(SF), !0).forEach((function(WF) {
          iS(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : PW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function iS(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" !== bS(FF) || null === FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" !== bS(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" === bS(WF) ? WF : String(WF)
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function eW(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || EW(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EW(FF, WF) {
      if (FF) {
        if ("string" === typeof FF) return QW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        return "Object" === SF && FF.constructor && (SF = FF.constructor.name), "Map" === SF || "Set" === SF ? Array.from(FF) : "Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF) ? QW(FF, WF) : void 0
      }
    }

    function QW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }
    var rS = function(FF, WF, SF) {
        return FF + (WF - FF) * SF
      },
      gS = function(FF) {
        return FF.from !== FF.to
      },
      tS = function FF(WF, SF, CF) {
        var AF = jW((function(FF, SF) {
          if (gS(SF)) {
            var CF = eW(WF(SF.from, SF.to, SF.Th), 2),
              AF = CF[0],
              uF = CF[1];
            return RW(RW({}, SF), {}, {
              from: AF,
              Th: uF
            })
          }
          return SF
        }), SF);
        return CF < 1 ? jW((function(FF, WF) {
          return gS(WF) ? RW(RW({}, WF), {}, {
            Th: rS(WF.Th, AF[FF].Th, CF),
            from: rS(WF.from, AF[FF].from, CF)
          }) : WF
        }), SF) : FF(WF, AF, CF - 1)
      };
    const TW = function(FF, WF, SF, CF, AF) {
      var uF, hF, bW, dF, PF = (uF = FF, hF = WF, [Object.keys(uF), Object.keys(hF)].reduce((function(FF, WF) {
          return FF.filter((function(FF) {
            return WF.includes(FF)
          }))
        }))),
        RF = PF.reduce((function(SF, CF) {
          return RW(RW({}, SF), {}, iS({}, CF, [FF[CF], WF[CF]]))
        }), {}),
        iW = PF.reduce((function(SF, CF) {
          return RW(RW({}, SF), {}, iS({}, CF, {
            from: FF[CF],
            Th: 0,
            to: WF[CF]
          }))
        }), {}),
        eF = -1,
        EF = function() {
          return null
        };
      return EF = SF.isStepper ? function(CF) {
          bW || (bW = CF);
          var uF = (CF - bW) / SF.dt;
          iW = tS(SF, iW, uF), AF(RW(RW(RW({}, FF), WF), jW((function(FF, WF) {
            return WF.from
          }), iW))), bW = CF, Object.values(iW).filter(gS).length && (eF = requestAnimationFrame(EF))
        } : function(uF) {
          dF || (dF = uF);
          var hF = (uF - dF) / CF,
            bW = jW((function(FF, WF) {
              return rS.apply(void 0, dW(WF).concat([SF(hF)]))
            }), RF);
          if (AF(RW(RW(RW({}, FF), WF), bW)), hF < 1) eF = requestAnimationFrame(EF);
          else {
            var PF = jW((function(FF, WF) {
              return rS.apply(void 0, dW(WF).concat([SF(1)]))
            }), RF);
            AF(RW(RW(RW({}, FF), WF), PF))
          }
        },
        function() {
          return requestAnimationFrame(EF),
            function() {
              cancelAnimationFrame(eF)
            }
        }
    };

    function aS(FF) {
      return aS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, aS(FF)
    }
    var kS = ["children", "aC", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function qS(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF, CF, AF = {},
          uF = Object.keys(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || (AF[SF] = FF[SF]);
        return AF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function VW(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return NW(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return NW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return NW(FF, WF)
      }(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function NW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function DW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function LW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? DW(Object(SF), !0).forEach((function(WF) {
          mS(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : DW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function mS(FF, WF, SF) {
      return (WF = xS(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function OW(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, xS(CF.key), CF)
      }
    }

    function xS(FF) {
      var WF = function(FF, WF) {
        if ("object" !== aS(FF) || null === FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" !== aS(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" === aS(WF) ? WF : String(WF)
    }

    function ZW(FF, WF) {
      return ZW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, ZW(FF, WF)
    }

    function oW(FF) {
      var WF = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (FF) {
          return !1
        }
      }();
      return function() {
        var SF, CF = cS(FF);
        if (WF) {
          var AF = cS(this).constructor;
          SF = Reflect.construct(CF, arguments, AF)
        } else SF = CF.apply(this, arguments);
        return YW(this, SF)
      }
    }

    function YW(FF, WF) {
      if (WF && ("object" === aS(WF) || "function" === typeof WF)) return WF;
      if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
      return MW(FF)
    }

    function MW(FF) {
      if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return FF
    }

    function cS(FF) {
      return cS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, cS(FF)
    }
    var GW = function(FF) {
      ! function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && ZW(FF, WF)
      }(hF, FF);
      var WF, SF, AF, uF = oW(hF);

      function hF(FF, WF) {
        var SF;
        ! function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, hF);
        var CF = (SF = uF.call(this, FF, WF)).props,
          AF = CF.isActive,
          bW = CF.attributeName,
          dF = CF.from,
          PF = CF.to,
          RF = CF.steps,
          iW = CF.children,
          eF = CF.duration;
        if (SF.handleStyleChange = SF.handleStyleChange.bind(MW(SF)), SF.changeStyle = SF.changeStyle.bind(MW(SF)), !AF || eF <= 0) return SF.state = {
          style: {}
        }, "function" === typeof iW && (SF.state = {
          style: PF
        }), YW(SF);
        if (RF && RF.length) SF.state = {
          style: RF[0].style
        };
        else if (dF) {
          if ("function" === typeof iW) return SF.state = {
            style: dF
          }, YW(SF);
          SF.state = {
            style: bW ? mS({}, bW, dF) : dF
          }
        } else SF.state = {
          style: {}
        };
        return SF
      }
      return WF = hF, (SF = [{
        key: "componentDidMount",
        value: function() {
          var FF = this.props,
            WF = FF.isActive,
            SF = FF.canBegin;
          this.mounted = !0, WF && SF && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(FF) {
          var WF = this.props,
            SF = WF.isActive,
            CF = WF.canBegin,
            AF = WF.attributeName,
            uF = WF.shouldReAnimate,
            hF = WF.to,
            bW = WF.from,
            dF = this.state.style;
          if (CF)
            if (SF) {
              if (!(zW(FF.to, hF) && FF.canBegin && FF.isActive)) {
                var PF = !FF.canBegin || !FF.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var RF = PF || uF ? bW : FF.to;
                if (this.state && dF) {
                  var iW = {
                    style: AF ? mS({}, AF, RF) : RF
                  };
                  (AF && dF[AF] !== RF || !AF && dF !== RF) && this.setState(iW)
                }
                this.runAnimation(LW(LW({}, this.props), {}, {
                  from: RF,
                  aC: 0
                }))
              }
            } else {
              var eF = {
                style: AF ? mS({}, AF, hF) : hF
              };
              this.state && dF && (AF && dF[AF] !== hF || !AF && dF !== hF) && this.setState(eF)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var FF = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), FF && FF()
        }
      }, {
        key: "handleStyleChange",
        value: function(FF) {
          this.changeStyle(FF)
        }
      }, {
        key: "changeStyle",
        value: function(FF) {
          this.mounted && this.setState({
            style: FF
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(FF) {
          var WF = this,
            SF = FF.from,
            CF = FF.to,
            AF = FF.duration,
            uF = FF.easing,
            hF = FF.aC,
            bW = FF.onAnimationEnd,
            dF = FF.onAnimationStart,
            PF = TW(SF, CF, hW(uF), AF, this.changeStyle);
          this.manager.start([dF, hF, function() {
            WF.stopJSAnimation = PF()
          }, AF, bW])
        }
      }, {
        key: "runStepAnimation",
        value: function(FF) {
          var WF = this,
            SF = FF.steps,
            CF = FF.aC,
            AF = FF.onAnimationStart,
            uF = SF[0],
            hF = uF.style,
            bW = uF.duration,
            dF = void 0 === bW ? 0 : bW;
          return this.manager.start([AF].concat(VW(SF.reduce((function(FF, CF, AF) {
            if (0 === AF) return FF;
            var uF = CF.duration,
              hF = CF.easing,
              bW = void 0 === hF ? "ease" : hF,
              dF = CF.style,
              PF = CF.properties,
              RF = CF.onAnimationEnd,
              iW = AF > 0 ? SF[AF - 1] : CF,
              eF = PF || Object.keys(dF);
            if ("function" === typeof bW || "spring" === bW) return [].concat(VW(FF), [WF.runJSAnimation.bind(WF, {
              from: iW.style,
              to: dF,
              duration: uF,
              easing: bW
            }), uF]);
            var EF = vW(eF, uF, bW),
              QF = LW(LW(LW({}, iW.style), dF), {}, {
                transition: EF
              });
            return [].concat(VW(FF), [QF, uF, RF]).filter(BF)
          }), [hF, Math.max(dF, CF)])), [FF.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(FF) {
          this.manager || (this.manager = HF());
          var WF = FF.aC,
            SF = FF.duration,
            CF = FF.attributeName,
            AF = FF.to,
            uF = FF.easing,
            hF = FF.onAnimationStart,
            bW = FF.onAnimationEnd,
            dF = FF.steps,
            PF = FF.children,
            RF = this.manager;
          if (this.unSubscribe = RF.subscribe(this.handleStyleChange), "function" !== typeof uF && "function" !== typeof PF && "spring" !== uF)
            if (dF.length > 1) this.runStepAnimation(FF);
            else {
              var iW = CF ? mS({}, CF, AF) : AF,
                eF = vW(Object.keys(iW), SF, uF);
              RF.start([hF, WF, LW(LW({}, iW), {}, {
                transition: eF
              }), SF, bW])
            }
          else this.runJSAnimation(FF)
        }
      }, {
        key: "render",
        value: function() {
          var FF = this.props,
            WF = FF.children,
            SF = (FF.aC, FF.duration),
            AF = (FF.attributeName, FF.easing, FF.isActive),
            uF = (FF.steps, FF.from, FF.to, FF.canBegin, FF.onAnimationEnd, FF.shouldReAnimate, FF.onAnimationReStart, qS(FF, kS)),
            hF = CF.Children.count(WF),
            bW = this.state.style;
          if ("function" === typeof WF) return WF(bW);
          if (!AF || 0 === hF || SF <= 0) return WF;
          var dF = function(FF) {
            var WF = FF.props,
              SF = WF.style,
              AF = void 0 === SF ? {} : SF,
              hF = WF.className;
            return (0, CF.cloneElement)(FF, LW(LW({}, uF), {}, {
              style: LW(LW({}, AF), bW),
              className: hF
            }))
          };
          return 1 === hF ? dF(CF.Children.only(WF)) : CF.createElement("div", null, CF.Children.map(WF, (function(FF) {
            return dF(FF)
          })))
        }
      }]) && OW(WF.prototype, SF), AF && OW(WF, AF), Object.defineProperty(WF, "prototype", {
        writable: !1
      }), hF
    }(CF.PureComponent);
    GW.displayName = "Animate", GW.defaultProps = {
      aC: 0,
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
    }, GW.propTypes = {
      from: uF().oneOfType([uF().object, uF().string]),
      to: uF().oneOfType([uF().object, uF().string]),
      attributeName: uF().string,
      duration: uF().number,
      aC: uF().number,
      easing: uF().oneOfType([uF().string, uF().func]),
      steps: uF().arrayOf(uF().shape({
        duration: uF().number.isRequired,
        style: uF().object.isRequired,
        easing: uF().oneOfType([uF().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), uF().func]),
        properties: uF().arrayOf("string"),
        onAnimationEnd: uF().func
      })),
      children: uF().oneOfType([uF().node, uF().func]),
      isActive: uF().bool,
      canBegin: uF().bool,
      onAnimationEnd: uF().func,
      shouldReAnimate: uF().bool,
      onAnimationStart: uF().func,
      onAnimationReStart: uF().func
    };
    const zS = GW
  },
  5350: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => sF
    });
    var CF, AF = SF(46),
      uF = SF(4058),
      hF = SF(5089),
      bW = SF(4241),
      dF = SF.n(bW),
      PF = SF(5123),
      RF = SF.n(PF),
      iW = SF(4392),
      eF = SF.n(iW),
      EF = SF(4151),
      QF = SF.n(EF),
      rW = SF(5156),
      gW = SF.n(rW),
      tW = SF(5341),
      TF = SF(5080),
      aW = SF(4941),
      kW = SF(5249),
      qW = SF(4949),
      VF = SF(4132),
      NF = SF(5107),
      DF = SF(4398),
      LF = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      mW = ["key"];

    function OF(FF) {
      return OF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, OF(FF)
    }

    function xW(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function ZF() {
      return ZF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, ZF.apply(this, arguments)
    }

    function oF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function YF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? oF(Object(SF), !0).forEach((function(WF) {
          fF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : oF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function MF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, yW(CF.key), CF)
      }
    }

    function cW(FF, WF, SF) {
      return WF = zW(WF),
        function(FF, WF) {
          if (WF && ("object" === OF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, GF() ? Reflect.construct(WF, SF || [], zW(FF).constructor) : WF.apply(FF, SF))
    }

    function GF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (GF = function() {
        return !!FF
      })()
    }

    function zW(FF) {
      return zW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, zW(FF)
    }

    function IF(FF, WF) {
      return IF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, IF(FF, WF)
    }

    function fF(FF, WF, SF) {
      return (WF = yW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function yW(FF) {
      var WF = function(FF, WF) {
        if ("object" != OF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != OF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == OF(WF) ? WF : WF + ""
    }
    var sF = function(FF) {
      function WF() {
        var FF;
        ! function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF);
        for (var SF = arguments.length, CF = new Array(SF), AF = 0; AF < SF; AF++) CF[AF] = arguments[AF];
        return fF(FF = cW(this, WF, [].concat(CF)), "state", {
          isAnimationFinished: !0
        }), fF(FF, "id", (0, VF.C)("recharts-area-")), fF(FF, "handleAnimationEnd", (function() {
          var WF = FF.props.onAnimationEnd;
          FF.setState({
            isAnimationFinished: !0
          }), dF()(WF) && WF()
        })), fF(FF, "handleAnimationStart", (function() {
          var WF = FF.props.onAnimationStart;
          FF.setState({
            isAnimationFinished: !1
          }), dF()(WF) && WF()
        })), FF
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && IF(FF, WF)
      }(WF, FF), SF = WF, CF = [{
        key: "renderDots",
        value: function(FF, SF, CF) {
          var uF = this.props.isAnimationActive,
            hF = this.state.isAnimationFinished;
          if (uF && !hF) return null;
          var bW = this.props,
            dF = bW.dot,
            PF = bW.points,
            RF = bW.dataKey,
            iW = (0, DF.e)(this.props, !1),
            eF = (0, DF.e)(dF, !0),
            EF = PF.map((function(FF, SF) {
              var CF = YF(YF(YF({
                key: "dot-".concat(SF),
                r: 3
              }, iW), eF), {}, {
                index: SF,
                cx: FF.x,
                cy: FF.y,
                dataKey: RF,
                value: FF.value,
                payload: FF.payload,
                points: PF
              });
              return WF.renderDotItem(dF, CF)
            })),
            QF = {
              clipPath: FF ? "url(#clipPath-".concat(SF ? "" : "dots-").concat(CF, ")") : null
            };
          return AF.createElement(aW.c, ZF({
            className: "recharts-area-dots"
          }, QF), EF)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(FF) {
          var WF = this.props,
            SF = WF.baseLine,
            CF = WF.points,
            uF = WF.strokeWidth,
            hF = CF[0].x,
            bW = CF[CF.length - 1].x,
            dF = FF * Math.abs(hF - bW),
            PF = RF()(CF.map((function(FF) {
              return FF.y || 0
            })));
          return (0, VF.t)(SF) && "number" === typeof SF ? PF = Math.max(SF, PF) : SF && Array.isArray(SF) && SF.length && (PF = Math.max(RF()(SF.map((function(FF) {
            return FF.y || 0
          }))), PF)), (0, VF.t)(PF) ? AF.createElement("rect", {
            x: hF < bW ? hF : hF - dF,
            y: 0,
            width: dF,
            height: Math.floor(PF + (uF ? parseInt("".concat(uF), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(FF) {
          var WF = this.props,
            SF = WF.baseLine,
            CF = WF.points,
            uF = WF.strokeWidth,
            hF = CF[0].y,
            bW = CF[CF.length - 1].y,
            dF = FF * Math.abs(hF - bW),
            PF = RF()(CF.map((function(FF) {
              return FF.x || 0
            })));
          return (0, VF.t)(SF) && "number" === typeof SF ? PF = Math.max(SF, PF) : SF && Array.isArray(SF) && SF.length && (PF = Math.max(RF()(SF.map((function(FF) {
            return FF.x || 0
          }))), PF)), (0, VF.t)(PF) ? AF.createElement("rect", {
            x: 0,
            y: hF < bW ? hF : hF - dF,
            width: PF + (uF ? parseInt("".concat(uF), 10) : 1),
            height: Math.floor(dF)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(FF) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(FF) : this.renderHorizontalRect(FF)
        }
      }, {
        key: "renderAreaStatically",
        value: function(FF, WF, SF, CF) {
          var uF = this.props,
            hF = uF.layout,
            bW = uF.type,
            dF = uF.stroke,
            PF = uF.connectNulls,
            RF = uF.isRange,
            iW = (uF.ref, xW(uF, LF));
          return AF.createElement(aW.c, {
            clipPath: SF ? "url(#clipPath-".concat(CF, ")") : null
          }, AF.createElement(tW.b, ZF({}, (0, DF.e)(iW, !0), {
            points: FF,
            connectNulls: PF,
            type: bW,
            baseLine: WF,
            layout: hF,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== dF && AF.createElement(tW.b, ZF({}, (0, DF.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: hF,
            type: bW,
            connectNulls: PF,
            fill: "none",
            points: FF
          })), "none" !== dF && RF && AF.createElement(tW.b, ZF({}, (0, DF.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: hF,
            type: bW,
            connectNulls: PF,
            fill: "none",
            points: WF
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(FF, WF) {
          var SF = this,
            CF = this.props,
            uF = CF.points,
            bW = CF.baseLine,
            dF = CF.isAnimationActive,
            PF = CF.animationBegin,
            RF = CF.animationDuration,
            iW = CF.animationEasing,
            EF = CF.animationId,
            rW = this.state,
            gW = rW.prevPoints,
            tW = rW.prevBaseLine;
          return AF.createElement(hF.e, {
            aC: PF,
            duration: RF,
            isActive: dF,
            easing: iW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(EF),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(CF) {
            var hF = CF.t;
            if (gW) {
              var dF, PF = gW.length / uF.length,
                RF = uF.map((function(FF, WF) {
                  var SF = Math.floor(WF * PF);
                  if (gW[SF]) {
                    var CF = gW[SF],
                      AF = (0, VF.j)(CF.x, FF.x),
                      uF = (0, VF.j)(CF.y, FF.y);
                    return YF(YF({}, FF), {}, {
                      x: AF(hF),
                      y: uF(hF)
                    })
                  }
                  return FF
                }));
              return dF = (0, VF.t)(bW) && "number" === typeof bW ? (0, VF.j)(tW, bW)(hF) : eF()(bW) || QF()(bW) ? (0, VF.j)(tW, 0)(hF) : bW.map((function(FF, WF) {
                var SF = Math.floor(WF * PF);
                if (tW[SF]) {
                  var CF = tW[SF],
                    AF = (0, VF.j)(CF.x, FF.x),
                    uF = (0, VF.j)(CF.y, FF.y);
                  return YF(YF({}, FF), {}, {
                    x: AF(hF),
                    y: uF(hF)
                  })
                }
                return FF
              })), SF.renderAreaStatically(RF, dF, FF, WF)
            }
            return AF.createElement(aW.c, null, AF.createElement("defs", null, AF.createElement("clipPath", {
              id: "animationClipPath-".concat(WF)
            }, SF.renderClipRect(hF))), AF.createElement(aW.c, {
              clipPath: "url(#animationClipPath-".concat(WF, ")")
            }, SF.renderAreaStatically(uF, bW, FF, WF)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(FF, WF) {
          var SF = this.props,
            CF = SF.points,
            AF = SF.baseLine,
            uF = SF.isAnimationActive,
            hF = this.state,
            bW = hF.prevPoints,
            dF = hF.prevBaseLine,
            PF = hF.totalLength;
          return uF && CF && CF.length && (!bW && PF > 0 || !gW()(bW, CF) || !gW()(dF, AF)) ? this.renderAreaWithAnimation(FF, WF) : this.renderAreaStatically(CF, AF, FF, WF)
        }
      }, {
        key: "render",
        value: function() {
          var FF, WF = this.props,
            SF = WF.hide,
            CF = WF.dot,
            hF = WF.points,
            bW = WF.className,
            dF = WF.top,
            PF = WF.left,
            RF = WF.xAxis,
            iW = WF.yAxis,
            EF = WF.width,
            QF = WF.height,
            rW = WF.isAnimationActive,
            gW = WF.id;
          if (SF || !hF || !hF.length) return null;
          var tW = this.state.isAnimationFinished,
            TF = 1 === hF.length,
            qW = (0, uF.d)("recharts-area", bW),
            VF = RF && RF.allowDataOverflow,
            NF = iW && iW.allowDataOverflow,
            LF = VF || NF,
            mW = eF()(gW) ? this.id : gW,
            OF = null !== (FF = (0, DF.e)(CF, !1)) && void 0 !== FF ? FF : {
              r: 3,
              strokeWidth: 2
            },
            xW = OF.r,
            ZF = void 0 === xW ? 3 : xW,
            oF = OF.strokeWidth,
            YF = void 0 === oF ? 2 : oF,
            MF = ((0, DF.p)(CF) ? CF : {}).clipDot,
            cW = void 0 === MF || MF,
            GF = 2 * ZF + YF;
          return AF.createElement(aW.c, {
            className: qW
          }, VF || NF ? AF.createElement("defs", null, AF.createElement("clipPath", {
            id: "clipPath-".concat(mW)
          }, AF.createElement("rect", {
            x: VF ? PF : PF - EF / 2,
            y: NF ? dF : dF - QF / 2,
            width: VF ? EF : 2 * EF,
            height: NF ? QF : 2 * QF
          })), !cW && AF.createElement("clipPath", {
            id: "clipPath-dots-".concat(mW)
          }, AF.createElement("rect", {
            x: PF - GF / 2,
            y: dF - GF / 2,
            width: EF + GF,
            height: QF + GF
          }))) : null, TF ? null : this.renderArea(LF, mW), (CF || TF) && this.renderDots(LF, cW, mW), (!rW || tW) && kW.d.renderCallByParent(this.props, hF))
        }
      }], bW = [{
        key: "getDerivedStateFromProps",
        value: function(FF, WF) {
          return FF.animationId !== WF.prevAnimationId ? {
            prevAnimationId: FF.animationId,
            curPoints: FF.points,
            curBaseLine: FF.baseLine,
            prevPoints: WF.curPoints,
            prevBaseLine: WF.curBaseLine
          } : FF.points !== WF.curPoints || FF.baseLine !== WF.curBaseLine ? {
            curPoints: FF.points,
            curBaseLine: FF.baseLine
          } : null
        }
      }], CF && MF(SF.prototype, CF), bW && MF(SF, bW), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, CF, bW
    }(AF.PureComponent);
    CF = sF, fF(sF, "displayName", "Area"), fF(sF, "defaultProps", {
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
      isAnimationActive: !qW.c.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), fF(sF, "getBaseValue", (function(FF, WF, SF, CF) {
      var AF = FF.layout,
        uF = FF.baseValue,
        hF = WF.props.baseValue,
        bW = null !== hF && void 0 !== hF ? hF : uF;
      if ((0, VF.t)(bW) && "number" === typeof bW) return bW;
      var dF = "horizontal" === AF ? CF : SF,
        PF = dF.scale.domain();
      if ("number" === dF.type) {
        var RF = Math.max(PF[0], PF[1]),
          iW = Math.min(PF[0], PF[1]);
        return "dataMin" === bW ? iW : "dataMax" === bW || RF < 0 ? RF : Math.max(Math.min(PF[0], PF[1]), 0)
      }
      return "dataMin" === bW ? PF[0] : "dataMax" === bW ? PF[1] : PF[0]
    })), fF(sF, "getComposedData", (function(FF) {
      var WF, SF = FF.props,
        AF = FF.item,
        uF = FF.xAxis,
        hF = FF.yAxis,
        bW = FF.xAxisTicks,
        dF = FF.yAxisTicks,
        PF = FF.bandSize,
        RF = FF.dataKey,
        iW = FF.stackedData,
        eF = FF.dataStartIndex,
        EF = FF.displayedData,
        QF = FF.offset,
        rW = SF.layout,
        gW = iW && iW.length,
        tW = CF.getBaseValue(SF, AF, uF, hF),
        TF = "horizontal" === rW,
        aW = !1,
        kW = EF.map((function(FF, WF) {
          var SF;
          gW ? SF = iW[eF + WF] : (SF = (0, NF.$)(FF, RF), Array.isArray(SF) ? aW = !0 : SF = [tW, SF]);
          var CF = null == SF[1] || gW && null == (0, NF.$)(FF, RF);
          return TF ? {
            x: (0, NF.z)({
              axis: uF,
              ticks: bW,
              bandSize: PF,
              entry: FF,
              index: WF
            }),
            y: CF ? null : hF.scale(SF[1]),
            value: SF,
            payload: FF
          } : {
            x: CF ? null : uF.scale(SF[1]),
            y: (0, NF.z)({
              axis: hF,
              ticks: dF,
              bandSize: PF,
              entry: FF,
              index: WF
            }),
            value: SF,
            payload: FF
          }
        }));
      return WF = gW || aW ? kW.map((function(FF) {
        var WF = Array.isArray(FF.value) ? FF.value[0] : null;
        return TF ? {
          x: FF.x,
          y: null != WF && null != FF.y ? hF.scale(WF) : null
        } : {
          x: null != WF ? uF.scale(WF) : null,
          y: FF.y
        }
      })) : TF ? hF.scale(tW) : uF.scale(tW), YF({
        points: kW,
        baseLine: WF,
        layout: rW,
        isRange: aW
      }, QF)
    })), fF(sF, "renderDotItem", (function(FF, WF) {
      var SF;
      if (AF.isValidElement(FF)) SF = AF.cloneElement(FF, WF);
      else if (dF()(FF)) SF = FF(WF);
      else {
        var CF = (0, uF.d)("recharts-area-dot", "boolean" !== typeof FF ? FF.className : ""),
          hF = WF.key,
          bW = xW(WF, mW);
        SF = AF.createElement(TF.c, ZF({}, bW, {
          key: hF,
          className: CF
        }))
      }
      return SF
    }))
  },
  5238: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => XF
    });
    var CF = SF(46),
      AF = SF(4058),
      uF = SF(5089),
      hF = SF(5156),
      bW = SF.n(hF),
      dF = SF(4392),
      PF = SF.n(dF),
      RF = SF(4941),
      iW = SF(5169),
      eF = SF(5246),
      EF = SF(5249),
      QF = SF(4132),
      rW = SF(4398),
      gW = SF(4949),
      tW = SF(5107),
      TF = SF(4419),
      aW = SF(4927),
      kW = SF(5258),
      qW = ["x", "y"];

    function VF(FF) {
      return VF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, VF(FF)
    }

    function NF() {
      return NF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, NF.apply(this, arguments)
    }

    function DF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function LF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? DF(Object(SF), !0).forEach((function(WF) {
          mW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : DF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function mW(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != VF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != VF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == VF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function OF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function xW(FF, WF) {
      var SF = FF.x,
        CF = FF.y,
        AF = OF(FF, qW),
        uF = "".concat(SF),
        hF = parseInt(uF, 10),
        bW = "".concat(CF),
        dF = parseInt(bW, 10),
        PF = "".concat(WF.height || AF.height),
        RF = parseInt(PF, 10),
        iW = "".concat(WF.width || AF.width),
        eF = parseInt(iW, 10);
      return LF(LF(LF(LF(LF({}, WF), AF), hF ? {
        x: hF
      } : {}), dF ? {
        y: dF
      } : {}), {}, {
        height: RF,
        width: eF,
        name: WF.name,
        radius: WF.radius
      })
    }

    function ZF(FF) {
      return CF.createElement(kW.c, NF({
        shapeType: "rectangle",
        propTransformer: xW,
        activeClassName: "recharts-active-bar"
      }, FF))
    }
    var oF, YF = ["value", "background"];

    function MF(FF) {
      return MF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, MF(FF)
    }

    function cW(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function GF() {
      return GF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, GF.apply(this, arguments)
    }

    function zW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function IF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? zW(Object(SF), !0).forEach((function(WF) {
          KF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : zW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function fF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, wF(CF.key), CF)
      }
    }

    function yW(FF, WF, SF) {
      return WF = nF(WF),
        function(FF, WF) {
          if (WF && ("object" === MF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, sF() ? Reflect.construct(WF, SF || [], nF(FF).constructor) : WF.apply(FF, SF))
    }

    function sF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (sF = function() {
        return !!FF
      })()
    }

    function nF(FF) {
      return nF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, nF(FF)
    }

    function HF(FF, WF) {
      return HF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, HF(FF, WF)
    }

    function KF(FF, WF, SF) {
      return (WF = wF(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function wF(FF) {
      var WF = function(FF, WF) {
        if ("object" != MF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != MF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == MF(WF) ? WF : WF + ""
    }
    var XF = function(FF) {
      function WF() {
        var FF;
        ! function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF);
        for (var SF = arguments.length, CF = new Array(SF), AF = 0; AF < SF; AF++) CF[AF] = arguments[AF];
        return KF(FF = yW(this, WF, [].concat(CF)), "state", {
          isAnimationFinished: !1
        }), KF(FF, "id", (0, QF.C)("recharts-bar-")), KF(FF, "handleAnimationEnd", (function() {
          var WF = FF.props.onAnimationEnd;
          FF.setState({
            isAnimationFinished: !0
          }), WF && WF()
        })), KF(FF, "handleAnimationStart", (function() {
          var WF = FF.props.onAnimationStart;
          FF.setState({
            isAnimationFinished: !1
          }), WF && WF()
        })), FF
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && HF(FF, WF)
      }(WF, FF), SF = WF, hF = [{
        key: "renderRectanglesStatically",
        value: function(FF) {
          var WF = this,
            SF = this.props,
            AF = SF.shape,
            uF = SF.dataKey,
            hF = SF.activeIndex,
            bW = SF.activeBar,
            dF = (0, rW.e)(this.props, !1);
          return FF && FF.map((function(FF, SF) {
            var PF = SF === hF,
              iW = PF ? bW : AF,
              eF = IF(IF(IF({}, dF), FF), {}, {
                isActive: PF,
                option: iW,
                index: SF,
                dataKey: uF,
                onAnimationStart: WF.handleAnimationStart,
                onAnimationEnd: WF.handleAnimationEnd
              });
            return CF.createElement(RF.c, GF({
              className: "recharts-bar-rectangle"
            }, (0, TF.l)(WF.props, FF, SF), {
              key: "rectangle-".concat(null === FF || void 0 === FF ? void 0 : FF.x, "-").concat(null === FF || void 0 === FF ? void 0 : FF.y, "-").concat(null === FF || void 0 === FF ? void 0 : FF.value, "-").concat(SF)
            }), CF.createElement(ZF, eF))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var FF = this,
            WF = this.props,
            SF = WF.data,
            AF = WF.layout,
            hF = WF.isAnimationActive,
            bW = WF.animationBegin,
            dF = WF.animationDuration,
            PF = WF.animationEasing,
            iW = WF.animationId,
            eF = this.state.prevData;
          return CF.createElement(uF.e, {
            aC: bW,
            duration: dF,
            isActive: hF,
            easing: PF,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(iW),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(WF) {
            var uF = WF.t,
              hF = SF.map((function(FF, WF) {
                var SF = eF && eF[WF];
                if (SF) {
                  var CF = (0, QF.j)(SF.x, FF.x),
                    hF = (0, QF.j)(SF.y, FF.y),
                    bW = (0, QF.j)(SF.width, FF.width),
                    dF = (0, QF.j)(SF.height, FF.height);
                  return IF(IF({}, FF), {}, {
                    x: CF(uF),
                    y: hF(uF),
                    width: bW(uF),
                    height: dF(uF)
                  })
                }
                if ("horizontal" === AF) {
                  var PF = (0, QF.j)(0, FF.height)(uF);
                  return IF(IF({}, FF), {}, {
                    y: FF.y + FF.height - PF,
                    height: PF
                  })
                }
                var RF = (0, QF.j)(0, FF.width)(uF);
                return IF(IF({}, FF), {}, {
                  width: RF
                })
              }));
            return CF.createElement(RF.c, null, FF.renderRectanglesStatically(hF))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var FF = this.props,
            WF = FF.data,
            SF = FF.isAnimationActive,
            CF = this.state.prevData;
          return !(SF && WF && WF.length) || CF && bW()(CF, WF) ? this.renderRectanglesStatically(WF) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var FF = this,
            WF = this.props,
            SF = WF.data,
            AF = WF.dataKey,
            uF = WF.activeIndex,
            hF = (0, rW.e)(this.props.background, !1);
          return SF.map((function(WF, SF) {
            WF.value;
            var bW = WF.background,
              dF = cW(WF, YF);
            if (!bW) return null;
            var PF = IF(IF(IF(IF(IF({}, dF), {}, {
              fill: "#eee"
            }, bW), hF), (0, TF.l)(FF.props, WF, SF)), {}, {
              onAnimationStart: FF.handleAnimationStart,
              onAnimationEnd: FF.handleAnimationEnd,
              dataKey: AF,
              index: SF,
              className: "recharts-bar-background-rectangle"
            });
            return CF.createElement(ZF, GF({
              key: "background-bar-".concat(SF),
              option: FF.props.background,
              isActive: SF === uF
            }, PF))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(FF, WF) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var SF = this.props,
            AF = SF.data,
            uF = SF.xAxis,
            hF = SF.yAxis,
            bW = SF.layout,
            dF = SF.children,
            PF = (0, rW.h)(dF, iW.e);
          if (!PF) return null;
          var eF = "vertical" === bW ? AF[0].height / 2 : AF[0].width / 2,
            EF = function(FF, WF) {
              var SF = Array.isArray(FF.value) ? FF.value[1] : FF.value;
              return {
                x: FF.x,
                y: FF.y,
                value: SF,
                errorVal: (0, tW.$)(FF, WF)
              }
            },
            QF = {
              clipPath: FF ? "url(#clipPath-".concat(WF, ")") : null
            };
          return CF.createElement(RF.c, QF, PF.map((function(FF) {
            return CF.cloneElement(FF, {
              key: "error-bar-".concat(WF, "-").concat(FF.props.dataKey),
              data: AF,
              xAxis: uF,
              yAxis: hF,
              layout: bW,
              offset: eF,
              dataPointFormatter: EF
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var FF = this.props,
            WF = FF.hide,
            SF = FF.data,
            uF = FF.className,
            hF = FF.xAxis,
            bW = FF.yAxis,
            dF = FF.left,
            iW = FF.top,
            eF = FF.width,
            QF = FF.height,
            rW = FF.isAnimationActive,
            gW = FF.background,
            tW = FF.id;
          if (WF || !SF || !SF.length) return null;
          var TF = this.state.isAnimationFinished,
            aW = (0, AF.d)("recharts-bar", uF),
            kW = hF && hF.allowDataOverflow,
            qW = bW && bW.allowDataOverflow,
            VF = kW || qW,
            NF = PF()(tW) ? this.id : tW;
          return CF.createElement(RF.c, {
            className: aW
          }, kW || qW ? CF.createElement("defs", null, CF.createElement("clipPath", {
            id: "clipPath-".concat(NF)
          }, CF.createElement("rect", {
            x: kW ? dF : dF - eF / 2,
            y: qW ? iW : iW - QF / 2,
            width: kW ? eF : 2 * eF,
            height: qW ? QF : 2 * QF
          }))) : null, CF.createElement(RF.c, {
            className: "recharts-bar-rectangles",
            clipPath: VF ? "url(#clipPath-".concat(NF, ")") : null
          }, gW ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(VF, NF), (!rW || TF) && EF.d.renderCallByParent(this.props, SF))
        }
      }], dF = [{
        key: "getDerivedStateFromProps",
        value: function(FF, WF) {
          return FF.animationId !== WF.prevAnimationId ? {
            prevAnimationId: FF.animationId,
            curData: FF.data,
            prevData: WF.curData
          } : FF.data !== WF.curData ? {
            curData: FF.data
          } : null
        }
      }], hF && fF(SF.prototype, hF), dF && fF(SF, dF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, hF, dF
    }(CF.PureComponent);
    oF = XF, KF(XF, "displayName", "Bar"), KF(XF, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !gW.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), KF(XF, "getComposedData", (function(FF) {
      var WF = FF.props,
        SF = FF.item,
        CF = FF.barPosition,
        AF = FF.bandSize,
        uF = FF.xAxis,
        hF = FF.yAxis,
        bW = FF.xAxisTicks,
        dF = FF.yAxisTicks,
        PF = FF.stackedData,
        RF = FF.dataStartIndex,
        iW = FF.displayedData,
        EF = FF.offset,
        gW = (0, tW.m)(CF, SF);
      if (!gW) return null;
      var TF = WF.layout,
        kW = SF.type.defaultProps,
        qW = void 0 !== kW ? IF(IF({}, kW), SF.props) : SF.props,
        VF = qW.dataKey,
        NF = qW.children,
        DF = qW.minPointSize,
        LF = "horizontal" === TF ? hF : uF,
        mW = PF ? LF.scale.domain() : null,
        OF = (0, tW.v)({
          numericAxis: LF
        }),
        xW = (0, rW.h)(NF, eF.b),
        ZF = iW.map((function(FF, WF) {
          var CF, iW, eF, EF, rW, kW;
          PF ? CF = (0, tW.qb)(PF[RF + WF], mW) : (CF = (0, tW.$)(FF, VF), Array.isArray(CF) || (CF = [OF, CF]));
          var qW = function(FF) {
            var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(SF, CF) {
              if ("number" === typeof FF) return FF;
              var AF = (0, QF.t)(SF) || (0, QF.l)(SF);
              return AF ? FF(SF, CF) : (AF || (0, aW.b)(!1), WF)
            }
          }(DF, oF.defaultProps.minPointSize)(CF[1], WF);
          if ("horizontal" === TF) {
            var NF, LF = [hF.scale(CF[0]), hF.scale(CF[1])],
              ZF = LF[0],
              YF = LF[1];
            iW = (0, tW.y)({
              axis: uF,
              ticks: bW,
              bandSize: AF,
              offset: gW.offset,
              entry: FF,
              index: WF
            }), eF = null !== (NF = null !== YF && void 0 !== YF ? YF : ZF) && void 0 !== NF ? NF : void 0, EF = gW.size;
            var MF = ZF - YF;
            if (rW = Number.isNaN(MF) ? 0 : MF, kW = {
                x: iW,
                y: hF.y,
                width: EF,
                height: hF.height
              }, Math.abs(qW) > 0 && Math.abs(rW) < Math.abs(qW)) {
              var cW = (0, QF.y)(rW || qW) * (Math.abs(qW) - Math.abs(rW));
              eF -= cW, rW += cW
            }
          } else {
            var GF = [uF.scale(CF[0]), uF.scale(CF[1])],
              zW = GF[0],
              fF = GF[1];
            if (iW = zW, eF = (0, tW.y)({
                axis: hF,
                ticks: dF,
                bandSize: AF,
                offset: gW.offset,
                entry: FF,
                index: WF
              }), EF = fF - zW, rW = gW.size, kW = {
                x: uF.x,
                y: eF,
                width: uF.width,
                height: rW
              }, Math.abs(qW) > 0 && Math.abs(EF) < Math.abs(qW)) EF += (0, QF.y)(EF || qW) * (Math.abs(qW) - Math.abs(EF))
          }
          return IF(IF(IF({}, FF), {}, {
            x: iW,
            y: eF,
            width: EF,
            height: rW,
            value: PF ? CF : CF[1],
            payload: FF,
            background: kW
          }, xW && xW[WF] && xW[WF].props), {}, {
            tooltipPayload: [(0, tW.X)(SF, FF)],
            tooltipPosition: {
              x: iW + EF / 2,
              y: eF + rW / 2
            }
          })
        }));
      return IF({
        data: ZF,
        layout: TF
      }, EF)
    }))
  },
  5374: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => MF
    });
    var CF = SF(46),
      AF = SF(4241),
      uF = SF.n(AF),
      hF = SF(4162),
      bW = SF.n(hF),
      dF = SF(4058),
      PF = SF(4413),
      RF = SF(4941),
      iW = SF(5092),
      eF = SF(5187),
      EF = SF(4132),
      QF = SF(4419),
      rW = SF(4398),
      gW = SF(5377),
      tW = ["viewBox"],
      TF = ["viewBox"],
      aW = ["ticks"];

    function kW(FF) {
      return kW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, kW(FF)
    }

    function qW() {
      return qW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, qW.apply(this, arguments)
    }

    function VF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function NF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? VF(Object(SF), !0).forEach((function(WF) {
          oF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : VF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function DF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function LF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, YF(CF.key), CF)
      }
    }

    function mW(FF, WF, SF) {
      return WF = xW(WF),
        function(FF, WF) {
          if (WF && ("object" === kW(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, OF() ? Reflect.construct(WF, SF || [], xW(FF).constructor) : WF.apply(FF, SF))
    }

    function OF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (OF = function() {
        return !!FF
      })()
    }

    function xW(FF) {
      return xW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, xW(FF)
    }

    function ZF(FF, WF) {
      return ZF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, ZF(FF, WF)
    }

    function oF(FF, WF, SF) {
      return (WF = YF(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function YF(FF) {
      var WF = function(FF, WF) {
        if ("object" != kW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != kW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == kW(WF) ? WF : WF + ""
    }
    var MF = function(FF) {
      function WF(FF) {
        var SF;
        return function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF), (SF = mW(this, WF, [FF])).state = {
          fontSize: "",
          letterSpacing: ""
        }, SF
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && ZF(FF, WF)
      }(WF, FF), SF = WF, hF = [{
        key: "renderTickItem",
        value: function(FF, WF, SF) {
          var AF = (0, dF.d)(WF.className, "recharts-cartesian-axis-tick-value");
          return CF.isValidElement(FF) ? CF.cloneElement(FF, NF(NF({}, WF), {}, {
            className: AF
          })) : uF()(FF) ? FF(NF(NF({}, WF), {}, {
            className: AF
          })) : CF.createElement(iW.e, qW({}, WF, {
            className: "recharts-cartesian-axis-tick-value"
          }), SF)
        }
      }], (AF = [{
        key: "shouldComponentUpdate",
        value: function(FF, WF) {
          var SF = FF.viewBox,
            CF = DF(FF, tW),
            AF = this.props,
            uF = AF.viewBox,
            hF = DF(AF, TF);
          return !(0, PF.b)(SF, uF) || !(0, PF.b)(CF, hF) || !(0, PF.b)(WF, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var FF = this.layerReference;
          if (FF) {
            var WF = FF.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            WF && this.setState({
              fontSize: window.getComputedStyle(WF).fontSize,
              letterSpacing: window.getComputedStyle(WF).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(FF) {
          var WF, SF, CF, AF, uF, hF, bW = this.props,
            dF = bW.x,
            PF = bW.y,
            RF = bW.width,
            iW = bW.height,
            eF = bW.orientation,
            QF = bW.tickSize,
            rW = bW.mirror,
            gW = bW.tickMargin,
            tW = rW ? -1 : 1,
            TF = FF.tickSize || QF,
            aW = (0, EF.t)(FF.tickCoord) ? FF.tickCoord : FF.coordinate;
          switch (eF) {
            case "top":
              WF = SF = FF.coordinate, hF = (CF = (AF = PF + +!rW * iW) - tW * TF) - tW * gW, uF = aW;
              break;
            case "left":
              CF = AF = FF.coordinate, uF = (WF = (SF = dF + +!rW * RF) - tW * TF) - tW * gW, hF = aW;
              break;
            case "right":
              CF = AF = FF.coordinate, uF = (WF = (SF = dF + +rW * RF) + tW * TF) + tW * gW, hF = aW;
              break;
            default:
              WF = SF = FF.coordinate, hF = (CF = (AF = PF + +rW * iW) + tW * TF) + tW * gW, uF = aW
          }
          return {
            line: {
              x1: WF,
              y1: CF,
              x2: SF,
              y2: AF
            },
            lF: {
              x: uF,
              y: hF
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var FF, WF = this.props,
            SF = WF.orientation,
            CF = WF.mirror;
          switch (SF) {
            case "left":
              FF = CF ? "start" : "end";
              break;
            case "right":
              FF = CF ? "end" : "start";
              break;
            default:
              FF = "middle"
          }
          return FF
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var FF = this.props,
            WF = FF.orientation,
            SF = FF.mirror,
            CF = "end";
          switch (WF) {
            case "left":
            case "right":
              CF = "middle";
              break;
            case "top":
              CF = SF ? "start" : "end";
              break;
            default:
              CF = SF ? "end" : "start"
          }
          return CF
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var FF = this.props,
            WF = FF.x,
            SF = FF.y,
            AF = FF.width,
            uF = FF.height,
            hF = FF.orientation,
            PF = FF.mirror,
            RF = FF.axisLine,
            iW = NF(NF(NF({}, (0, rW.e)(this.props, !1)), (0, rW.e)(RF, !1)), {}, {
              fill: "none"
            });
          if ("top" === hF || "bottom" === hF) {
            var eF = +("top" === hF && !PF || "bottom" === hF && PF);
            iW = NF(NF({}, iW), {}, {
              x1: WF,
              y1: SF + eF * uF,
              x2: WF + AF,
              y2: SF + eF * uF
            })
          } else {
            var EF = +("left" === hF && !PF || "right" === hF && PF);
            iW = NF(NF({}, iW), {}, {
              x1: WF + EF * AF,
              y1: SF,
              x2: WF + EF * AF,
              y2: SF + uF
            })
          }
          return CF.createElement("line", qW({}, iW, {
            className: (0, dF.d)("recharts-cartesian-axis-line", bW()(RF, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(FF, SF, AF) {
          var hF = this,
            PF = this.props,
            iW = PF.tickLine,
            eF = PF.stroke,
            EF = PF.lF,
            tW = PF.tickFormatter,
            TF = PF.unit,
            aW = (0, gW.c)(NF(NF({}, this.props), {}, {
              ticks: FF
            }), SF, AF),
            kW = this.getTickTextAnchor(),
            VF = this.getTickVerticalAnchor(),
            DF = (0, rW.e)(this.props, !1),
            LF = (0, rW.e)(EF, !1),
            mW = NF(NF({}, DF), {}, {
              fill: "none"
            }, (0, rW.e)(iW, !1)),
            OF = aW.map((function(FF, SF) {
              var AF = hF.getTickLineCoord(FF),
                PF = AF.line,
                rW = AF.lF,
                gW = NF(NF(NF(NF({
                  textAnchor: kW,
                  verticalAnchor: VF
                }, DF), {}, {
                  stroke: "none",
                  fill: eF
                }, LF), rW), {}, {
                  index: SF,
                  payload: FF,
                  visibleTicksCount: aW.length,
                  tickFormatter: tW
                });
              return CF.createElement(RF.c, qW({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(FF.value, "-").concat(FF.coordinate, "-").concat(FF.tickCoord)
              }, (0, QF.l)(hF.props, FF, SF)), iW && CF.createElement("line", qW({}, mW, PF, {
                className: (0, dF.d)("recharts-cartesian-axis-tick-line", bW()(iW, "className"))
              })), EF && WF.renderTickItem(EF, gW, "".concat(uF()(tW) ? tW(FF.value, SF) : FF.value).concat(TF || "")))
            }));
          return CF.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, OF)
        }
      }, {
        key: "render",
        value: function() {
          var FF = this,
            WF = this.props,
            SF = WF.axisLine,
            AF = WF.width,
            hF = WF.height,
            bW = WF.ticksGenerator,
            PF = WF.className;
          if (WF.hide) return null;
          var iW = this.props,
            EF = iW.ticks,
            QF = DF(iW, aW),
            rW = EF;
          return uF()(bW) && (rW = EF && EF.length > 0 ? bW(this.props) : bW(QF)), AF <= 0 || hF <= 0 || !rW || !rW.length ? null : CF.createElement(RF.c, {
            className: (0, dF.d)("recharts-cartesian-axis", PF),
            ref: function(WF) {
              FF.layerReference = WF
            }
          }, SF && this.renderAxisLine(), this.renderTicks(rW, this.state.fontSize, this.state.letterSpacing), eF.c.renderCallByParent(this.props))
        }
      }]) && LF(SF.prototype, AF), hF && LF(SF, hF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, AF, hF
    }(CF.Component);
    oF(MF, "displayName", "CartesianAxis"), oF(MF, "defaultProps", {
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
      lF: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  5383: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => oF
    });
    var CF = SF(46),
      AF = SF(4241),
      uF = SF.n(AF),
      hF = SF(4396),
      bW = SF(4132),
      dF = SF(4398),
      PF = SF(5107),
      RF = SF(5377),
      iW = SF(5374),
      eF = SF(5305),
      EF = ["x1", "y1", "x2", "y2", "key"],
      QF = ["offset"];

    function rW(FF) {
      return rW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, rW(FF)
    }

    function gW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function tW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? gW(Object(SF), !0).forEach((function(WF) {
          TF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : gW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function TF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != rW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != rW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == rW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function aW() {
      return aW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, aW.apply(this, arguments)
    }

    function kW(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }
    var qW = function(FF) {
      var WF = FF.fill;
      if (!WF || "none" === WF) return null;
      var SF = FF.fillOpacity,
        AF = FF.x,
        uF = FF.y,
        hF = FF.width,
        bW = FF.height,
        dF = FF.ry;
      return CF.createElement("rect", {
        x: AF,
        y: uF,
        ry: dF,
        width: hF,
        height: bW,
        stroke: "none",
        fill: WF,
        fillOpacity: SF,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function VF(FF, WF) {
      var SF;
      if (CF.isValidElement(FF)) SF = CF.cloneElement(FF, WF);
      else if (uF()(FF)) SF = FF(WF);
      else {
        var AF = WF.x1,
          hF = WF.y1,
          bW = WF.x2,
          PF = WF.y2,
          RF = WF.key,
          iW = kW(WF, EF),
          eF = (0, dF.e)(iW, !1),
          rW = (eF.offset, kW(eF, QF));
        SF = CF.createElement("line", aW({}, rW, {
          x1: AF,
          y1: hF,
          x2: bW,
          y2: PF,
          fill: "none",
          key: RF
        }))
      }
      return SF
    }

    function NF(FF) {
      var WF = FF.x,
        SF = FF.width,
        AF = FF.horizontal,
        uF = void 0 === AF || AF,
        hF = FF.horizontalPoints;
      if (!uF || !hF || !hF.length) return null;
      var bW = hF.map((function(CF, AF) {
        var hF = tW(tW({}, FF), {}, {
          x1: WF,
          y1: CF,
          x2: WF + SF,
          y2: CF,
          key: "line-".concat(AF),
          index: AF
        });
        return VF(uF, hF)
      }));
      return CF.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, bW)
    }

    function DF(FF) {
      var WF = FF.y,
        SF = FF.height,
        AF = FF.vertical,
        uF = void 0 === AF || AF,
        hF = FF.verticalPoints;
      if (!uF || !hF || !hF.length) return null;
      var bW = hF.map((function(CF, AF) {
        var hF = tW(tW({}, FF), {}, {
          x1: CF,
          y1: WF,
          x2: CF,
          y2: WF + SF,
          key: "line-".concat(AF),
          index: AF
        });
        return VF(uF, hF)
      }));
      return CF.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, bW)
    }

    function LF(FF) {
      var WF = FF.horizontalFill,
        SF = FF.fillOpacity,
        AF = FF.x,
        uF = FF.y,
        hF = FF.width,
        bW = FF.height,
        dF = FF.horizontalPoints,
        PF = FF.horizontal;
      if (!(void 0 === PF || PF) || !WF || !WF.length) return null;
      var RF = dF.map((function(FF) {
        return Math.round(FF + uF - uF)
      })).sort((function(FF, WF) {
        return FF - WF
      }));
      uF !== RF[0] && RF.unshift(0);
      var iW = RF.map((function(FF, dF) {
        var PF = !RF[dF + 1] ? uF + bW - FF : RF[dF + 1] - FF;
        if (PF <= 0) return null;
        var iW = dF % WF.length;
        return CF.createElement("rect", {
          key: "react-".concat(dF),
          y: FF,
          x: AF,
          height: PF,
          width: hF,
          stroke: "none",
          fill: WF[iW],
          fillOpacity: SF,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return CF.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, iW)
    }

    function mW(FF) {
      var WF = FF.vertical,
        SF = void 0 === WF || WF,
        AF = FF.verticalFill,
        uF = FF.fillOpacity,
        hF = FF.x,
        bW = FF.y,
        dF = FF.width,
        PF = FF.height,
        RF = FF.verticalPoints;
      if (!SF || !AF || !AF.length) return null;
      var iW = RF.map((function(FF) {
        return Math.round(FF + hF - hF)
      })).sort((function(FF, WF) {
        return FF - WF
      }));
      hF !== iW[0] && iW.unshift(0);
      var eF = iW.map((function(FF, WF) {
        var SF = !iW[WF + 1] ? hF + dF - FF : iW[WF + 1] - FF;
        if (SF <= 0) return null;
        var RF = WF % AF.length;
        return CF.createElement("rect", {
          key: "react-".concat(WF),
          x: FF,
          y: bW,
          width: SF,
          height: PF,
          stroke: "none",
          fill: AF[RF],
          fillOpacity: uF,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return CF.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, eF)
    }
    var OF = function(FF, WF) {
        var SF = FF.xAxis,
          CF = FF.width,
          AF = FF.height,
          uF = FF.offset;
        return (0, PF.D)((0, RF.c)(tW(tW(tW({}, iW.c.defaultProps), SF), {}, {
          ticks: (0, PF.S)(SF, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: CF,
            height: AF
          }
        })), uF.left, uF.left + uF.width, WF)
      },
      xW = function(FF, WF) {
        var SF = FF.yAxis,
          CF = FF.width,
          AF = FF.height,
          uF = FF.offset;
        return (0, PF.D)((0, RF.c)(tW(tW(tW({}, iW.c.defaultProps), SF), {}, {
          ticks: (0, PF.S)(SF, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: CF,
            height: AF
          }
        })), uF.top, uF.top + uF.height, WF)
      },
      ZF = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function oF(FF) {
      var WF, SF, AF, dF, PF, RF, iW = (0, eF.k)(),
        EF = (0, eF.h)(),
        QF = (0, eF.p)(),
        gW = tW(tW({}, FF), {}, {
          stroke: null !== (WF = FF.stroke) && void 0 !== WF ? WF : ZF.stroke,
          fill: null !== (SF = FF.fill) && void 0 !== SF ? SF : ZF.fill,
          horizontal: null !== (AF = FF.horizontal) && void 0 !== AF ? AF : ZF.horizontal,
          horizontalFill: null !== (dF = FF.horizontalFill) && void 0 !== dF ? dF : ZF.horizontalFill,
          vertical: null !== (PF = FF.vertical) && void 0 !== PF ? PF : ZF.vertical,
          verticalFill: null !== (RF = FF.verticalFill) && void 0 !== RF ? RF : ZF.verticalFill,
          x: (0, bW.t)(FF.x) ? FF.x : QF.left,
          y: (0, bW.t)(FF.y) ? FF.y : QF.top,
          width: (0, bW.t)(FF.width) ? FF.width : QF.width,
          height: (0, bW.t)(FF.height) ? FF.height : QF.height
        }),
        TF = gW.x,
        kW = gW.y,
        VF = gW.width,
        oF = gW.height,
        YF = gW.syncWithTicks,
        MF = gW.horizontalValues,
        cW = gW.verticalValues,
        GF = (0, eF.f)(),
        zW = (0, eF.C)();
      if (!(0, bW.t)(VF) || VF <= 0 || !(0, bW.t)(oF) || oF <= 0 || !(0, bW.t)(TF) || TF !== +TF || !(0, bW.t)(kW) || kW !== +kW) return null;
      var IF = gW.verticalCoordinatesGenerator || OF,
        fF = gW.horizontalCoordinatesGenerator || xW,
        yW = gW.horizontalPoints,
        sF = gW.verticalPoints;
      if ((!yW || !yW.length) && uF()(fF)) {
        var nF = MF && MF.length,
          HF = fF({
            yAxis: zW ? tW(tW({}, zW), {}, {
              ticks: nF ? MF : zW.ticks
            }) : void 0,
            width: iW,
            height: EF,
            offset: QF
          }, !!nF || YF);
        (0, hF.c)(Array.isArray(HF), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(rW(HF), "]")), Array.isArray(HF) && (yW = HF)
      }
      if ((!sF || !sF.length) && uF()(IF)) {
        var KF = cW && cW.length,
          wF = IF({
            xAxis: GF ? tW(tW({}, GF), {}, {
              ticks: KF ? cW : GF.ticks
            }) : void 0,
            width: iW,
            height: EF,
            offset: QF
          }, !!KF || YF);
        (0, hF.c)(Array.isArray(wF), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(rW(wF), "]")), Array.isArray(wF) && (sF = wF)
      }
      return CF.createElement("g", {
        className: "recharts-cartesian-grid"
      }, CF.createElement(qW, {
        fill: gW.fill,
        fillOpacity: gW.fillOpacity,
        x: gW.x,
        y: gW.y,
        width: gW.width,
        height: gW.height,
        ry: gW.ry
      }), CF.createElement(NF, aW({}, gW, {
        offset: QF,
        horizontalPoints: yW,
        xAxis: GF,
        yAxis: zW
      })), CF.createElement(DF, aW({}, gW, {
        offset: QF,
        verticalPoints: sF,
        xAxis: GF,
        yAxis: zW
      })), CF.createElement(LF, aW({}, gW, {
        horizontalPoints: yW
      })), CF.createElement(mW, aW({}, gW, {
        verticalPoints: sF
      })))
    }
    oF.displayName = "CartesianGrid"
  },
  5169: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => kW
    });
    var CF = SF(46),
      AF = SF(4927),
      uF = SF(4941),
      hF = SF(4398),
      bW = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function dF(FF) {
      return dF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, dF(FF)
    }

    function PF() {
      return PF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, PF.apply(this, arguments)
    }

    function RF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return iW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return iW(FF, WF)
      }(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function eF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function EF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, aW(CF.key), CF)
      }
    }

    function QF(FF, WF, SF) {
      return WF = gW(WF),
        function(FF, WF) {
          if (WF && ("object" === dF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, rW() ? Reflect.construct(WF, SF || [], gW(FF).constructor) : WF.apply(FF, SF))
    }

    function rW() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (rW = function() {
        return !!FF
      })()
    }

    function gW(FF) {
      return gW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, gW(FF)
    }

    function tW(FF, WF) {
      return tW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, tW(FF, WF)
    }

    function TF(FF, WF, SF) {
      return (WF = aW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function aW(FF) {
      var WF = function(FF, WF) {
        if ("object" != dF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != dF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == dF(WF) ? WF : WF + ""
    }
    var kW = function(FF) {
      function WF() {
        return function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF), QF(this, WF, arguments)
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && tW(FF, WF)
      }(WF, FF), SF = WF, (dF = [{
        key: "render",
        value: function() {
          var FF = this.props,
            WF = FF.offset,
            SF = FF.layout,
            dF = FF.width,
            iW = FF.dataKey,
            EF = FF.data,
            QF = FF.dataPointFormatter,
            rW = FF.xAxis,
            gW = FF.yAxis,
            tW = eF(FF, bW),
            TF = (0, hF.e)(tW, !1);
          "x" === this.props.direction && "number" !== rW.type && (0, AF.b)(!1);
          var aW = EF.map((function(FF) {
            var AF = QF(FF, iW),
              hF = AF.x,
              bW = AF.y,
              eF = AF.value,
              EF = AF.errorVal;
            if (!EF) return null;
            var tW, aW, kW = [];
            if (Array.isArray(EF)) {
              var qW = RF(EF, 2);
              tW = qW[0], aW = qW[1]
            } else tW = aW = EF;
            if ("vertical" === SF) {
              var VF = rW.scale,
                NF = bW + WF,
                DF = NF + dF,
                LF = NF - dF,
                mW = VF(eF - tW),
                OF = VF(eF + aW);
              kW.push({
                x1: OF,
                y1: DF,
                x2: OF,
                y2: LF
              }), kW.push({
                x1: mW,
                y1: NF,
                x2: OF,
                y2: NF
              }), kW.push({
                x1: mW,
                y1: DF,
                x2: mW,
                y2: LF
              })
            } else if ("horizontal" === SF) {
              var xW = gW.scale,
                ZF = hF + WF,
                oF = ZF - dF,
                YF = ZF + dF,
                MF = xW(eF - tW),
                cW = xW(eF + aW);
              kW.push({
                x1: oF,
                y1: cW,
                x2: YF,
                y2: cW
              }), kW.push({
                x1: ZF,
                y1: MF,
                x2: ZF,
                y2: cW
              }), kW.push({
                x1: oF,
                y1: MF,
                x2: YF,
                y2: MF
              })
            }
            return CF.createElement(uF.c, PF({
              className: "recharts-errorBar",
              key: "bar-".concat(kW.map((function(FF) {
                return "".concat(FF.x1, "-").concat(FF.x2, "-").concat(FF.y1, "-").concat(FF.y2)
              })))
            }, TF), kW.map((function(FF) {
              return CF.createElement("line", PF({}, FF, {
                key: "line-".concat(FF.x1, "-").concat(FF.x2, "-").concat(FF.y1, "-").concat(FF.y2)
              }))
            })))
          }));
          return CF.createElement(uF.c, {
            className: "recharts-errorBars"
          }, aW)
        }
      }]) && EF(SF.prototype, dF), iW && EF(SF, iW), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, dF, iW
    }(CF.Component);
    TF(kW, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), TF(kW, "displayName", "ErrorBar")
  },
  5356: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => fF
    });
    var CF = SF(46),
      AF = SF(5089),
      uF = SF(4241),
      hF = SF.n(uF),
      bW = SF(4392),
      dF = SF.n(bW),
      PF = SF(5156),
      RF = SF.n(PF),
      iW = SF(4058),
      eF = SF(5341),
      EF = SF(5080),
      QF = SF(4941),
      rW = SF(5249),
      gW = SF(5169),
      tW = SF(4132),
      TF = SF(4398),
      aW = SF(4949),
      kW = SF(5107),
      qW = ["type", "layout", "connectNulls", "ref"],
      VF = ["key"];

    function NF(FF) {
      return NF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, NF(FF)
    }

    function DF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function LF() {
      return LF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, LF.apply(this, arguments)
    }

    function mW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function OF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? mW(Object(SF), !0).forEach((function(WF) {
          zW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : mW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function xW(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return ZF(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return ZF(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return ZF(FF, WF)
      }(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function oF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, IF(CF.key), CF)
      }
    }

    function YF(FF, WF, SF) {
      return WF = cW(WF),
        function(FF, WF) {
          if (WF && ("object" === NF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, MF() ? Reflect.construct(WF, SF || [], cW(FF).constructor) : WF.apply(FF, SF))
    }

    function MF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (MF = function() {
        return !!FF
      })()
    }

    function cW(FF) {
      return cW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, cW(FF)
    }

    function GF(FF, WF) {
      return GF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, GF(FF, WF)
    }

    function zW(FF, WF, SF) {
      return (WF = IF(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function IF(FF) {
      var WF = function(FF, WF) {
        if ("object" != NF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != NF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == NF(WF) ? WF : WF + ""
    }
    var fF = function(FF) {
      function WF() {
        var FF;
        ! function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF);
        for (var SF = arguments.length, CF = new Array(SF), AF = 0; AF < SF; AF++) CF[AF] = arguments[AF];
        return zW(FF = YF(this, WF, [].concat(CF)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), zW(FF, "generateSimpleStrokeDasharray", (function(FF, WF) {
          return "".concat(WF, "px ").concat(FF - WF, "px")
        })), zW(FF, "getStrokeDasharray", (function(SF, CF, AF) {
          var uF = AF.reduce((function(FF, WF) {
            return FF + WF
          }));
          if (!uF) return FF.generateSimpleStrokeDasharray(CF, SF);
          for (var hF = Math.floor(SF / uF), bW = SF % uF, dF = CF - SF, PF = [], RF = 0, iW = 0; RF < AF.length; iW += AF[RF], ++RF)
            if (iW + AF[RF] > bW) {
              PF = [].concat(xW(AF.slice(0, RF)), [bW - iW]);
              break
            } var eF = PF.length % 2 === 0 ? [0, dF] : [dF];
          return [].concat(xW(WF.repeat(AF, hF)), xW(PF), eF).map((function(FF) {
            return "".concat(FF, "px")
          })).join(", ")
        })), zW(FF, "id", (0, tW.C)("recharts-line-")), zW(FF, "pathRef", (function(WF) {
          FF.mainCurve = WF
        })), zW(FF, "handleAnimationEnd", (function() {
          FF.setState({
            isAnimationFinished: !0
          }), FF.props.onAnimationEnd && FF.props.onAnimationEnd()
        })), zW(FF, "handleAnimationStart", (function() {
          FF.setState({
            isAnimationFinished: !1
          }), FF.props.onAnimationStart && FF.props.onAnimationStart()
        })), FF
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && GF(FF, WF)
      }(WF, FF), SF = WF, uF = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var FF = this.getTotalLength();
            this.setState({
              totalLength: FF
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var FF = this.getTotalLength();
            FF !== this.state.totalLength && this.setState({
              totalLength: FF
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var FF = this.mainCurve;
          try {
            return FF && FF.getTotalLength && FF.getTotalLength() || 0
          } catch (WF) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(FF, WF) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var SF = this.props,
            AF = SF.points,
            uF = SF.xAxis,
            hF = SF.yAxis,
            bW = SF.layout,
            dF = SF.children,
            PF = (0, TF.h)(dF, gW.e);
          if (!PF) return null;
          var RF = function(FF, WF) {
              return {
                x: FF.x,
                y: FF.y,
                value: FF.value,
                errorVal: (0, kW.$)(FF.payload, WF)
              }
            },
            iW = {
              clipPath: FF ? "url(#clipPath-".concat(WF, ")") : null
            };
          return CF.createElement(QF.c, iW, PF.map((function(FF) {
            return CF.cloneElement(FF, {
              key: "bar-".concat(FF.props.dataKey),
              data: AF,
              xAxis: uF,
              yAxis: hF,
              layout: bW,
              dataPointFormatter: RF
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(FF, SF, AF) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var uF = this.props,
            hF = uF.dot,
            bW = uF.points,
            dF = uF.dataKey,
            PF = (0, TF.e)(this.props, !1),
            RF = (0, TF.e)(hF, !0),
            iW = bW.map((function(FF, SF) {
              var CF = OF(OF(OF({
                key: "dot-".concat(SF),
                r: 3
              }, PF), RF), {}, {
                index: SF,
                cx: FF.x,
                cy: FF.y,
                value: FF.value,
                dataKey: dF,
                payload: FF.payload,
                points: bW
              });
              return WF.renderDotItem(hF, CF)
            })),
            eF = {
              clipPath: FF ? "url(#clipPath-".concat(SF ? "" : "dots-").concat(AF, ")") : null
            };
          return CF.createElement(QF.c, LF({
            className: "recharts-line-dots",
            key: "dots"
          }, eF), iW)
        }
      }, {
        key: "renderCurveStatically",
        value: function(FF, WF, SF, AF) {
          var uF = this.props,
            hF = uF.type,
            bW = uF.layout,
            dF = uF.connectNulls,
            PF = (uF.ref, DF(uF, qW)),
            RF = OF(OF(OF({}, (0, TF.e)(PF, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: WF ? "url(#clipPath-".concat(SF, ")") : null,
              points: FF
            }, AF), {}, {
              type: hF,
              layout: bW,
              connectNulls: dF
            });
          return CF.createElement(eF.b, LF({}, RF, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(FF, WF) {
          var SF = this,
            uF = this.props,
            hF = uF.points,
            bW = uF.strokeDasharray,
            dF = uF.isAnimationActive,
            PF = uF.animationBegin,
            RF = uF.animationDuration,
            iW = uF.animationEasing,
            eF = uF.animationId,
            EF = uF.animateNewValues,
            QF = uF.width,
            rW = uF.height,
            gW = this.state,
            TF = gW.prevPoints,
            aW = gW.totalLength;
          return CF.createElement(AF.e, {
            aC: PF,
            duration: RF,
            isActive: dF,
            easing: iW,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(eF),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(CF) {
            var AF = CF.t;
            if (TF) {
              var uF = TF.length / hF.length,
                dF = hF.map((function(FF, WF) {
                  var SF = Math.floor(WF * uF);
                  if (TF[SF]) {
                    var CF = TF[SF],
                      hF = (0, tW.j)(CF.x, FF.x),
                      bW = (0, tW.j)(CF.y, FF.y);
                    return OF(OF({}, FF), {}, {
                      x: hF(AF),
                      y: bW(AF)
                    })
                  }
                  if (EF) {
                    var dF = (0, tW.j)(2 * QF, FF.x),
                      PF = (0, tW.j)(rW / 2, FF.y);
                    return OF(OF({}, FF), {}, {
                      x: dF(AF),
                      y: PF(AF)
                    })
                  }
                  return OF(OF({}, FF), {}, {
                    x: FF.x,
                    y: FF.y
                  })
                }));
              return SF.renderCurveStatically(dF, FF, WF)
            }
            var PF, RF = (0, tW.j)(0, aW)(AF);
            if (bW) {
              var iW = "".concat(bW).split(/[,\s]+/gim).map((function(FF) {
                return parseFloat(FF)
              }));
              PF = SF.getStrokeDasharray(RF, aW, iW)
            } else PF = SF.generateSimpleStrokeDasharray(aW, RF);
            return SF.renderCurveStatically(hF, FF, WF, {
              strokeDasharray: PF
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(FF, WF) {
          var SF = this.props,
            CF = SF.points,
            AF = SF.isAnimationActive,
            uF = this.state,
            hF = uF.prevPoints,
            bW = uF.totalLength;
          return AF && CF && CF.length && (!hF && bW > 0 || !RF()(hF, CF)) ? this.renderCurveWithAnimation(FF, WF) : this.renderCurveStatically(CF, FF, WF)
        }
      }, {
        key: "render",
        value: function() {
          var FF, WF = this.props,
            SF = WF.hide,
            AF = WF.dot,
            uF = WF.points,
            hF = WF.className,
            bW = WF.xAxis,
            PF = WF.yAxis,
            RF = WF.top,
            eF = WF.left,
            EF = WF.width,
            gW = WF.height,
            tW = WF.isAnimationActive,
            aW = WF.id;
          if (SF || !uF || !uF.length) return null;
          var kW = this.state.isAnimationFinished,
            qW = 1 === uF.length,
            VF = (0, iW.d)("recharts-line", hF),
            NF = bW && bW.allowDataOverflow,
            DF = PF && PF.allowDataOverflow,
            LF = NF || DF,
            mW = dF()(aW) ? this.id : aW,
            OF = null !== (FF = (0, TF.e)(AF, !1)) && void 0 !== FF ? FF : {
              r: 3,
              strokeWidth: 2
            },
            xW = OF.r,
            ZF = void 0 === xW ? 3 : xW,
            oF = OF.strokeWidth,
            YF = void 0 === oF ? 2 : oF,
            MF = ((0, TF.p)(AF) ? AF : {}).clipDot,
            cW = void 0 === MF || MF,
            GF = 2 * ZF + YF;
          return CF.createElement(QF.c, {
            className: VF
          }, NF || DF ? CF.createElement("defs", null, CF.createElement("clipPath", {
            id: "clipPath-".concat(mW)
          }, CF.createElement("rect", {
            x: NF ? eF : eF - EF / 2,
            y: DF ? RF : RF - gW / 2,
            width: NF ? EF : 2 * EF,
            height: DF ? gW : 2 * gW
          })), !cW && CF.createElement("clipPath", {
            id: "clipPath-dots-".concat(mW)
          }, CF.createElement("rect", {
            x: eF - GF / 2,
            y: RF - GF / 2,
            width: EF + GF,
            height: gW + GF
          }))) : null, !qW && this.renderCurve(LF, mW), this.renderErrorBar(LF, mW), (qW || AF) && this.renderDots(LF, cW, mW), (!tW || kW) && rW.d.renderCallByParent(this.props, uF))
        }
      }], bW = [{
        key: "getDerivedStateFromProps",
        value: function(FF, WF) {
          return FF.animationId !== WF.prevAnimationId ? {
            prevAnimationId: FF.animationId,
            curPoints: FF.points,
            prevPoints: WF.curPoints
          } : FF.points !== WF.curPoints ? {
            curPoints: FF.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(FF, WF) {
          for (var SF = FF.length % 2 !== 0 ? [].concat(xW(FF), [0]) : FF, CF = [], AF = 0; AF < WF; ++AF) CF = [].concat(xW(CF), xW(SF));
          return CF
        }
      }, {
        key: "renderDotItem",
        value: function(FF, WF) {
          var SF;
          if (CF.isValidElement(FF)) SF = CF.cloneElement(FF, WF);
          else if (hF()(FF)) SF = FF(WF);
          else {
            var AF = WF.key,
              uF = DF(WF, VF),
              bW = (0, iW.d)("recharts-line-dot", "boolean" !== typeof FF ? FF.className : "");
            SF = CF.createElement(EF.c, LF({
              key: AF
            }, uF, {
              className: bW
            }))
          }
          return SF
        }
      }], uF && oF(SF.prototype, uF), bW && oF(SF, bW), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, uF, bW
    }(CF.PureComponent);
    zW(fF, "displayName", "Line"), zW(fF, "defaultProps", {
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
      isAnimationActive: !aW.c.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), zW(fF, "getComposedData", (function(FF) {
      var WF = FF.props,
        SF = FF.xAxis,
        CF = FF.yAxis,
        AF = FF.xAxisTicks,
        uF = FF.yAxisTicks,
        hF = FF.dataKey,
        bW = FF.bandSize,
        PF = FF.displayedData,
        RF = FF.offset,
        iW = WF.layout;
      return OF({
        points: PF.map((function(FF, WF) {
          var PF = (0, kW.$)(FF, hF);
          return "horizontal" === iW ? {
            x: (0, kW.z)({
              axis: SF,
              ticks: AF,
              bandSize: bW,
              entry: FF,
              index: WF
            }),
            y: dF()(PF) ? null : CF.scale(PF),
            value: PF,
            payload: FF
          } : {
            x: dF()(PF) ? null : SF.scale(PF),
            y: (0, kW.z)({
              axis: CF,
              ticks: uF,
              bandSize: bW,
              entry: FF,
              index: WF
            }),
            value: PF,
            payload: FF
          }
        })),
        layout: iW
      }, RF)
    }))
  },
  5288: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => YF
    });
    var CF = SF(46),
      AF = SF(4241),
      uF = SF.n(AF),
      hF = SF(5293),
      bW = SF.n(hF),
      dF = SF(4058),
      PF = SF(4941),
      RF = SF(5187),
      iW = SF(5200),
      eF = SF(4132),
      EF = SF(5205),
      QF = SF(4396),
      rW = SF(4398),
      gW = SF(5305);

    function tW(FF) {
      return tW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, tW(FF)
    }

    function TF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, mW(CF.key), CF)
      }
    }

    function aW(FF, WF, SF) {
      return WF = qW(WF),
        function(FF, WF) {
          if (WF && ("object" === tW(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, kW() ? Reflect.construct(WF, SF || [], qW(FF).constructor) : WF.apply(FF, SF))
    }

    function kW() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (kW = function() {
        return !!FF
      })()
    }

    function qW(FF) {
      return qW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, qW(FF)
    }

    function VF(FF, WF) {
      return VF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, VF(FF, WF)
    }

    function NF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function DF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? NF(Object(SF), !0).forEach((function(WF) {
          LF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : NF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function LF(FF, WF, SF) {
      return (WF = mW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function mW(FF) {
      var WF = function(FF, WF) {
        if ("object" != tW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != tW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == tW(WF) ? WF : WF + ""
    }

    function OF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return xW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return xW(FF, WF)
      }(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function ZF() {
      return ZF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, ZF.apply(this, arguments)
    }

    function oF(FF) {
      var WF = FF.x,
        SF = FF.y,
        AF = FF.segment,
        hF = FF.xAxisId,
        tW = FF.yAxisId,
        TF = FF.shape,
        aW = FF.className,
        kW = FF.alwaysShow,
        qW = (0, gW.n)(),
        VF = (0, gW.w)(hF),
        NF = (0, gW.y)(tW),
        LF = (0, gW.t)();
      if (!qW || !LF) return null;
      (0, QF.c)(void 0 === kW, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var mW = function(FF, WF, SF, CF, AF, uF, hF, dF, PF) {
        var RF = AF.x,
          eF = AF.y,
          EF = AF.width,
          QF = AF.height;
        if (SF) {
          var rW = PF.y,
            gW = FF.y.apply(rW, {
              position: uF
            });
          if ((0, iW.b)(PF, "discard") && !FF.y.isInRange(gW)) return null;
          var tW = [{
            x: RF + EF,
            y: gW
          }, {
            x: RF,
            y: gW
          }];
          return "left" === dF ? tW.reverse() : tW
        }
        if (WF) {
          var TF = PF.x,
            aW = FF.x.apply(TF, {
              position: uF
            });
          if ((0, iW.b)(PF, "discard") && !FF.x.isInRange(aW)) return null;
          var kW = [{
            x: aW,
            y: eF + QF
          }, {
            x: aW,
            y: eF
          }];
          return "top" === hF ? kW.reverse() : kW
        }
        if (CF) {
          var qW = PF.segment.map((function(WF) {
            return FF.apply(WF, {
              position: uF
            })
          }));
          return (0, iW.b)(PF, "discard") && bW()(qW, (function(WF) {
            return !FF.isInRange(WF)
          })) ? null : qW
        }
        return null
      }((0, EF.b)({
        x: VF.scale,
        y: NF.scale
      }), (0, eF.p)(WF), (0, eF.p)(SF), AF && 2 === AF.length, LF, FF.position, VF.orientation, NF.orientation, FF);
      if (!mW) return null;
      var xW = OF(mW, 2),
        oF = xW[0],
        YF = oF.x,
        MF = oF.y,
        cW = xW[1],
        GF = cW.x,
        zW = cW.y,
        IF = DF(DF({
          clipPath: (0, iW.b)(FF, "hidden") ? "url(#".concat(qW, ")") : void 0
        }, (0, rW.e)(FF, !0)), {}, {
          x1: YF,
          y1: MF,
          x2: GF,
          y2: zW
        });
      return CF.createElement(PF.c, {
        className: (0, dF.d)("recharts-reference-line", aW)
      }, function(FF, WF) {
        return CF.isValidElement(FF) ? CF.cloneElement(FF, WF) : uF()(FF) ? FF(WF) : CF.createElement("line", ZF({}, WF, {
          className: "recharts-reference-line-line"
        }))
      }(TF, IF), RF.c.renderCallByParent(FF, (0, EF.h)({
        x1: YF,
        y1: MF,
        x2: GF,
        y2: zW
      })))
    }
    var YF = function(FF) {
      function WF() {
        return function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF), aW(this, WF, arguments)
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && VF(FF, WF)
      }(WF, FF), SF = WF, (AF = [{
        key: "render",
        value: function() {
          return CF.createElement(oF, this.props)
        }
      }]) && TF(SF.prototype, AF), uF && TF(SF, uF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, AF, uF
    }(CF.Component);
    LF(YF, "displayName", "ReferenceLine"), LF(YF, "defaultProps", {
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
  5365: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => TF
    });
    var CF = SF(46),
      AF = SF(4058),
      uF = SF(5305),
      hF = SF(5374),
      bW = SF(5107);

    function dF(FF) {
      return dF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, dF(FF)
    }

    function PF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, rW(CF.key), CF)
      }
    }

    function RF(FF, WF, SF) {
      return WF = eF(WF),
        function(FF, WF) {
          if (WF && ("object" === dF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, iW() ? Reflect.construct(WF, SF || [], eF(FF).constructor) : WF.apply(FF, SF))
    }

    function iW() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (iW = function() {
        return !!FF
      })()
    }

    function eF(FF) {
      return eF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, eF(FF)
    }

    function EF(FF, WF) {
      return EF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, EF(FF, WF)
    }

    function QF(FF, WF, SF) {
      return (WF = rW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function rW(FF) {
      var WF = function(FF, WF) {
        if ("object" != dF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != dF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == dF(WF) ? WF : WF + ""
    }

    function gW() {
      return gW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, gW.apply(this, arguments)
    }

    function tW(FF) {
      var WF = FF.xAxisId,
        SF = (0, uF.k)(),
        dF = (0, uF.h)(),
        PF = (0, uF.w)(WF);
      return null == PF ? null : CF.createElement(hF.c, gW({}, PF, {
        className: (0, AF.d)("recharts-".concat(PF.axisType, " ").concat(PF.axisType), PF.className),
        viewBox: {
          x: 0,
          y: 0,
          width: SF,
          height: dF
        },
        ticksGenerator: function(FF) {
          return (0, bW.S)(FF, !0)
        }
      }))
    }
    var TF = function(FF) {
      function WF() {
        return function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF), RF(this, WF, arguments)
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && EF(FF, WF)
      }(WF, FF), SF = WF, (AF = [{
        key: "render",
        value: function() {
          return CF.createElement(tW, this.props)
        }
      }]) && PF(SF.prototype, AF), uF && PF(SF, uF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, AF, uF
    }(CF.Component);
    QF(TF, "displayName", "XAxis"), QF(TF, "defaultProps", {
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
  5380: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => TF
    });
    var CF = SF(46),
      AF = SF(4058),
      uF = SF(5305),
      hF = SF(5374),
      bW = SF(5107);

    function dF(FF) {
      return dF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, dF(FF)
    }

    function PF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, rW(CF.key), CF)
      }
    }

    function RF(FF, WF, SF) {
      return WF = eF(WF),
        function(FF, WF) {
          if (WF && ("object" === dF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, iW() ? Reflect.construct(WF, SF || [], eF(FF).constructor) : WF.apply(FF, SF))
    }

    function iW() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (iW = function() {
        return !!FF
      })()
    }

    function eF(FF) {
      return eF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, eF(FF)
    }

    function EF(FF, WF) {
      return EF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, EF(FF, WF)
    }

    function QF(FF, WF, SF) {
      return (WF = rW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function rW(FF) {
      var WF = function(FF, WF) {
        if ("object" != dF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != dF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == dF(WF) ? WF : WF + ""
    }

    function gW() {
      return gW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, gW.apply(this, arguments)
    }
    var tW = function(FF) {
        var WF = FF.yAxisId,
          SF = (0, uF.k)(),
          dF = (0, uF.h)(),
          PF = (0, uF.y)(WF);
        return null == PF ? null : CF.createElement(hF.c, gW({}, PF, {
          className: (0, AF.d)("recharts-".concat(PF.axisType, " ").concat(PF.axisType), PF.className),
          viewBox: {
            x: 0,
            y: 0,
            width: SF,
            height: dF
          },
          ticksGenerator: function(FF) {
            return (0, bW.S)(FF, !0)
          }
        }))
      },
      TF = function(FF) {
        function WF() {
          return function(FF, WF) {
            if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
          }(this, WF), RF(this, WF, arguments)
        }
        return function(FF, WF) {
          if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
          FF.prototype = Object.create(WF && WF.prototype, {
            constructor: {
              value: FF,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(FF, "prototype", {
            writable: !1
          }), WF && EF(FF, WF)
        }(WF, FF), SF = WF, (AF = [{
          key: "render",
          value: function() {
            return CF.createElement(tW, this.props)
          }
        }]) && PF(SF.prototype, AF), uF && PF(SF, uF), Object.defineProperty(SF, "prototype", {
          writable: !1
        }), SF;
        var SF, AF, uF
      }(CF.Component);
    QF(TF, "displayName", "YAxis"), QF(TF, "defaultProps", {
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
  5377: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => rW
    });
    var CF = SF(4241),
      AF = SF.n(CF),
      uF = SF(4132),
      hF = SF(5098),
      bW = SF(4949),
      dF = SF(5205);

    function PF(FF, WF, SF) {
      if (WF < 1) return [];
      if (1 === WF && void 0 === SF) return FF;
      for (var CF = [], AF = 0; AF < FF.length; AF += WF) {
        if (void 0 !== SF && !0 !== SF(FF[AF])) return;
        CF.push(FF[AF])
      }
      return CF
    }

    function RF(FF, WF, SF, CF, AF) {
      if (FF * WF < FF * CF || FF * WF > FF * AF) return !1;
      var uF = SF();
      return FF * (WF - FF * uF / 2 - CF) >= 0 && FF * (WF + FF * uF / 2 - AF) <= 0
    }

    function iW(FF) {
      return iW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, iW(FF)
    }

    function eF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function EF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? eF(Object(SF), !0).forEach((function(WF) {
          QF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : eF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function QF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != iW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != iW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == iW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function rW(FF, WF, SF) {
      var CF = FF.lF,
        iW = FF.ticks,
        eF = FF.viewBox,
        QF = FF.minTickGap,
        rW = FF.orientation,
        gW = FF.interval,
        tW = FF.tickFormatter,
        TF = FF.unit,
        aW = FF.angle;
      if (!iW || !iW.length || !CF) return [];
      if ((0, uF.t)(gW) || bW.c.isSsr) return function(FF, WF) {
        return PF(FF, WF + 1)
      }(iW, "number" === typeof gW && (0, uF.t)(gW) ? gW : 0);
      var kW = [],
        qW = "top" === rW || "bottom" === rW ? "width" : "height",
        VF = TF && "width" === qW ? (0, hF.f)(TF, {
          fontSize: WF,
          letterSpacing: SF
        }) : {
          width: 0,
          height: 0
        },
        NF = function(FF, CF) {
          var uF = AF()(tW) ? tW(FF.value, CF) : FF.value;
          return "width" === qW ? function(FF, WF, SF) {
            var CF = {
              width: FF.width + WF.width,
              height: FF.height + WF.height
            };
            return (0, dF.g)(CF, SF)
          }((0, hF.f)(uF, {
            fontSize: WF,
            letterSpacing: SF
          }), VF, aW) : (0, hF.f)(uF, {
            fontSize: WF,
            letterSpacing: SF
          })[qW]
        },
        DF = iW.length >= 2 ? (0, uF.y)(iW[1].coordinate - iW[0].coordinate) : 1,
        LF = function(FF, WF, SF) {
          var CF = "width" === SF,
            AF = FF.x,
            uF = FF.y,
            hF = FF.width,
            bW = FF.height;
          return 1 === WF ? {
            start: CF ? AF : uF,
            end: CF ? AF + hF : uF + bW
          } : {
            start: CF ? AF + hF : uF + bW,
            end: CF ? AF : uF
          }
        }(eF, DF, qW);
      return "equidistantPreserveStart" === gW ? function(FF, WF, SF, CF, AF) {
        for (var uF, hF = (CF || []).slice(), bW = WF.start, dF = WF.end, iW = 0, eF = 1, EF = bW, QF = function() {
            var WF = null === CF || void 0 === CF ? void 0 : CF[iW];
            if (void 0 === WF) return {
              v: PF(CF, eF)
            };
            var uF, hF = iW,
              QF = function() {
                return void 0 === uF && (uF = SF(WF, hF)), uF
              },
              rW = WF.coordinate,
              gW = 0 === iW || RF(FF, rW, QF, EF, dF);
            gW || (iW = 0, EF = bW, eF += 1), gW && (EF = rW + FF * (QF() / 2 + AF), iW += eF)
          }; eF <= hF.length;)
          if (uF = QF()) return uF.v;
        return []
      }(DF, LF, NF, iW, QF) : (kW = "preserveStart" === gW || "preserveStartEnd" === gW ? function(FF, WF, SF, CF, AF, uF) {
        var hF = (CF || []).slice(),
          bW = hF.length,
          dF = WF.start,
          PF = WF.end;
        if (uF) {
          var iW = CF[bW - 1],
            eF = SF(iW, bW - 1),
            QF = FF * (iW.coordinate + FF * eF / 2 - PF);
          hF[bW - 1] = iW = EF(EF({}, iW), {}, {
            tickCoord: QF > 0 ? iW.coordinate - QF * FF : iW.coordinate
          }), RF(FF, iW.tickCoord, (function() {
            return eF
          }), dF, PF) && (PF = iW.tickCoord - FF * (eF / 2 + AF), hF[bW - 1] = EF(EF({}, iW), {}, {
            isShow: !0
          }))
        }
        for (var rW = uF ? bW - 1 : bW, gW = function(WF) {
            var CF, uF = hF[WF],
              bW = function() {
                return void 0 === CF && (CF = SF(uF, WF)), CF
              };
            if (0 === WF) {
              var iW = FF * (uF.coordinate - FF * bW() / 2 - dF);
              hF[WF] = uF = EF(EF({}, uF), {}, {
                tickCoord: iW < 0 ? uF.coordinate - iW * FF : uF.coordinate
              })
            } else hF[WF] = uF = EF(EF({}, uF), {}, {
              tickCoord: uF.coordinate
            });
            RF(FF, uF.tickCoord, bW, dF, PF) && (dF = uF.tickCoord + FF * (bW() / 2 + AF), hF[WF] = EF(EF({}, uF), {}, {
              isShow: !0
            }))
          }, tW = 0; tW < rW; tW++) gW(tW);
        return hF
      }(DF, LF, NF, iW, QF, "preserveStartEnd" === gW) : function(FF, WF, SF, CF, AF) {
        for (var uF = (CF || []).slice(), hF = uF.length, bW = WF.start, dF = WF.end, PF = function(WF) {
            var CF, PF = uF[WF],
              iW = function() {
                return void 0 === CF && (CF = SF(PF, WF)), CF
              };
            if (WF === hF - 1) {
              var eF = FF * (PF.coordinate + FF * iW() / 2 - dF);
              uF[WF] = PF = EF(EF({}, PF), {}, {
                tickCoord: eF > 0 ? PF.coordinate - eF * FF : PF.coordinate
              })
            } else uF[WF] = PF = EF(EF({}, PF), {}, {
              tickCoord: PF.coordinate
            });
            RF(FF, PF.tickCoord, iW, bW, dF) && (dF = PF.tickCoord - FF * (iW() / 2 + AF), uF[WF] = EF(EF({}, PF), {}, {
              isShow: !0
            }))
          }, iW = hF - 1; iW >= 0; iW--) PF(iW);
        return uF
      }(DF, LF, NF, iW, QF), kW.filter((function(FF) {
        return FF.isShow
      })))
    }
  },
  5385: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF
    });
    var CF = SF(4430),
      AF = SF(5238),
      uF = SF(5365),
      hF = SF(5380),
      bW = SF(5205),
      dF = (0, CF.c)({
        chartName: "BarChart",
        GraphicalChild: AF.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: uF.e
        }, {
          axisType: "yAxis",
          AxisComp: hF.d
        }],
        formatAxisMap: bW.f
      })
  },
  4426: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AW
    });
    var CF = SF(4430),
      AF = SF(5350),
      uF = SF(5238),
      hF = SF(5356),
      bW = SF(46),
      dF = SF(5089),
      PF = SF(4392),
      RF = SF.n(PF),
      iW = SF(5156),
      eF = SF.n(iW),
      EF = SF(4241),
      QF = SF.n(EF),
      rW = SF(4058),
      gW = SF(4941),
      tW = SF(5249),
      TF = SF(4398),
      aW = SF(4949);

    function kW(FF) {
      return kW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, kW(FF)
    }

    function qW(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, OF(CF.key), CF)
      }
    }

    function VF(FF, WF, SF) {
      return WF = DF(WF),
        function(FF, WF) {
          if (WF && ("object" === kW(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, NF() ? Reflect.construct(WF, SF || [], DF(FF).constructor) : WF.apply(FF, SF))
    }

    function NF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (NF = function() {
        return !!FF
      })()
    }

    function DF(FF) {
      return DF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, DF(FF)
    }

    function LF(FF, WF) {
      return LF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, LF(FF, WF)
    }

    function mW(FF, WF, SF) {
      return (WF = OF(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function OF(FF) {
      var WF = function(FF, WF) {
        if ("object" != kW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != kW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == kW(WF) ? WF : WF + ""
    }
    var xW = function(FF) {
      function WF() {
        return function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF), VF(this, WF, arguments)
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && LF(FF, WF)
      }(WF, FF), SF = WF, (CF = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && qW(SF.prototype, CF), AF && qW(SF, AF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, CF, AF
    }(bW.Component);
    mW(xW, "displayName", "ZAxis"), mW(xW, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var ZF = SF(5341),
      oF = SF(5169),
      YF = SF(5246),
      MF = SF(4132),
      cW = SF(5107),
      GF = SF(4419),
      zW = SF(5023),
      IF = SF(5258),
      fF = ["option", "isActive"];

    function yW() {
      return yW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, yW.apply(this, arguments)
    }

    function sF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function nF(FF) {
      var WF = FF.option,
        SF = FF.isActive,
        CF = sF(FF, fF);
      return "string" === typeof WF ? bW.createElement(IF.c, yW({
        option: bW.createElement(zW.e, yW({
          type: WF
        }, CF)),
        isActive: SF,
        shapeType: "symbols"
      }, CF)) : bW.createElement(IF.c, yW({
        option: WF,
        isActive: SF,
        shapeType: "symbols"
      }, CF))
    }

    function HF(FF) {
      return HF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, HF(FF)
    }

    function KF() {
      return KF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, KF.apply(this, arguments)
    }

    function wF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function XF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? wF(Object(SF), !0).forEach((function(WF) {
          pF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : wF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function UF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, lF(CF.key), CF)
      }
    }

    function BF(FF, WF, SF) {
      return WF = vW(WF),
        function(FF, WF) {
          if (WF && ("object" === HF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, jW() ? Reflect.construct(WF, SF || [], vW(FF).constructor) : WF.apply(FF, SF))
    }

    function jW() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (jW = function() {
        return !!FF
      })()
    }

    function vW(FF) {
      return vW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, vW(FF)
    }

    function JF(FF, WF) {
      return JF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, JF(FF, WF)
    }

    function pF(FF, WF, SF) {
      return (WF = lF(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function lF(FF) {
      var WF = function(FF, WF) {
        if ("object" != HF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != HF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == HF(WF) ? WF : WF + ""
    }
    var FW = function(FF) {
      function WF() {
        var FF;
        ! function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF);
        for (var SF = arguments.length, CF = new Array(SF), AF = 0; AF < SF; AF++) CF[AF] = arguments[AF];
        return pF(FF = BF(this, WF, [].concat(CF)), "state", {
          isAnimationFinished: !1
        }), pF(FF, "handleAnimationEnd", (function() {
          FF.setState({
            isAnimationFinished: !0
          })
        })), pF(FF, "handleAnimationStart", (function() {
          FF.setState({
            isAnimationFinished: !1
          })
        })), pF(FF, "id", (0, MF.C)("recharts-scatter-")), FF
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && JF(FF, WF)
      }(WF, FF), SF = WF, CF = [{
        key: "renderSymbolsStatically",
        value: function(FF) {
          var WF = this,
            SF = this.props,
            CF = SF.shape,
            AF = SF.activeShape,
            uF = SF.activeIndex,
            hF = (0, TF.e)(this.props, !1);
          return FF.map((function(FF, SF) {
            var dF = uF === SF,
              PF = dF ? AF : CF,
              RF = XF(XF({}, hF), FF);
            return bW.createElement(gW.c, KF({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === FF || void 0 === FF ? void 0 : FF.cx, "-").concat(null === FF || void 0 === FF ? void 0 : FF.cy, "-").concat(null === FF || void 0 === FF ? void 0 : FF.size, "-").concat(SF)
            }, (0, GF.l)(WF.props, FF, SF), {
              role: "img"
            }), bW.createElement(nF, KF({
              option: PF,
              isActive: dF,
              key: "symbol-".concat(SF)
            }, RF)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var FF = this,
            WF = this.props,
            SF = WF.points,
            CF = WF.isAnimationActive,
            AF = WF.animationBegin,
            uF = WF.animationDuration,
            hF = WF.animationEasing,
            PF = WF.animationId,
            RF = this.state.prevPoints;
          return bW.createElement(dF.e, {
            aC: AF,
            duration: uF,
            isActive: CF,
            easing: hF,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(PF),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(WF) {
            var CF = WF.t,
              AF = SF.map((function(FF, WF) {
                var SF = RF && RF[WF];
                if (SF) {
                  var AF = (0, MF.j)(SF.cx, FF.cx),
                    uF = (0, MF.j)(SF.cy, FF.cy),
                    hF = (0, MF.j)(SF.size, FF.size);
                  return XF(XF({}, FF), {}, {
                    cx: AF(CF),
                    cy: uF(CF),
                    size: hF(CF)
                  })
                }
                var bW = (0, MF.j)(0, FF.size);
                return XF(XF({}, FF), {}, {
                  size: bW(CF)
                })
              }));
            return bW.createElement(gW.c, null, FF.renderSymbolsStatically(AF))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var FF = this.props,
            WF = FF.points,
            SF = FF.isAnimationActive,
            CF = this.state.prevPoints;
          return !(SF && WF && WF.length) || CF && eF()(CF, WF) ? this.renderSymbolsStatically(WF) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var FF = this.props,
            WF = FF.points,
            SF = FF.xAxis,
            CF = FF.yAxis,
            AF = FF.children,
            uF = (0, TF.h)(AF, oF.e);
          return uF ? uF.map((function(FF, AF) {
            var uF = FF.props,
              hF = uF.direction,
              dF = uF.dataKey;
            return bW.cloneElement(FF, {
              key: "".concat(hF, "-").concat(dF, "-").concat(WF[AF]),
              data: WF,
              xAxis: SF,
              yAxis: CF,
              layout: "x" === hF ? "vertical" : "horizontal",
              dataPointFormatter: function(FF, WF) {
                return {
                  x: FF.cx,
                  y: FF.cy,
                  value: "x" === hF ? +FF.node.x : +FF.node.y,
                  errorVal: (0, cW.$)(FF, WF)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var FF, WF, SF = this.props,
            CF = SF.points,
            AF = SF.line,
            uF = SF.lineType,
            hF = SF.lineJointType,
            dF = (0, TF.e)(this.props, !1),
            PF = (0, TF.e)(AF, !1);
          if ("joint" === uF) FF = CF.map((function(FF) {
            return {
              x: FF.cx,
              y: FF.cy
            }
          }));
          else if ("fitting" === uF) {
            var RF = (0, MF.g)(CF),
              iW = RF.xmin,
              eF = RF.xmax,
              EF = RF.a,
              rW = RF.b,
              tW = function(FF) {
                return EF * FF + rW
              };
            FF = [{
              x: iW,
              y: tW(iW)
            }, {
              x: eF,
              y: tW(eF)
            }]
          }
          var aW = XF(XF(XF({}, dF), {}, {
            fill: "none",
            stroke: dF && dF.fill
          }, PF), {}, {
            points: FF
          });
          return WF = bW.isValidElement(AF) ? bW.cloneElement(AF, aW) : QF()(AF) ? AF(aW) : bW.createElement(ZF.b, KF({}, aW, {
            type: hF
          })), bW.createElement(gW.c, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, WF)
        }
      }, {
        key: "render",
        value: function() {
          var FF = this.props,
            WF = FF.hide,
            SF = FF.points,
            CF = FF.line,
            AF = FF.className,
            uF = FF.xAxis,
            hF = FF.yAxis,
            dF = FF.left,
            PF = FF.top,
            iW = FF.width,
            eF = FF.height,
            EF = FF.id,
            QF = FF.isAnimationActive;
          if (WF || !SF || !SF.length) return null;
          var TF = this.state.isAnimationFinished,
            aW = (0, rW.d)("recharts-scatter", AF),
            kW = uF && uF.allowDataOverflow,
            qW = hF && hF.allowDataOverflow,
            VF = kW || qW,
            NF = RF()(EF) ? this.id : EF;
          return bW.createElement(gW.c, {
            className: aW,
            clipPath: VF ? "url(#clipPath-".concat(NF, ")") : null
          }, kW || qW ? bW.createElement("defs", null, bW.createElement("clipPath", {
            id: "clipPath-".concat(NF)
          }, bW.createElement("rect", {
            x: kW ? dF : dF - iW / 2,
            y: qW ? PF : PF - eF / 2,
            width: kW ? iW : 2 * iW,
            height: qW ? eF : 2 * eF
          }))) : null, CF && this.renderLine(), this.renderErrorBar(), bW.createElement(gW.c, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!QF || TF) && tW.d.renderCallByParent(this.props, SF))
        }
      }], AF = [{
        key: "getDerivedStateFromProps",
        value: function(FF, WF) {
          return FF.animationId !== WF.prevAnimationId ? {
            prevAnimationId: FF.animationId,
            curPoints: FF.points,
            prevPoints: WF.curPoints
          } : FF.points !== WF.curPoints ? {
            curPoints: FF.points
          } : null
        }
      }], CF && UF(SF.prototype, CF), AF && UF(SF, AF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, CF, AF
    }(bW.PureComponent);
    pF(FW, "displayName", "Scatter"), pF(FW, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !aW.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), pF(FW, "getComposedData", (function(FF) {
      var WF = FF.xAxis,
        SF = FF.yAxis,
        CF = FF.zAxis,
        AF = FF.item,
        uF = FF.displayedData,
        hF = FF.xAxisTicks,
        bW = FF.yAxisTicks,
        dF = FF.offset,
        PF = AF.props.tooltipType,
        iW = (0, TF.h)(AF.props.children, YF.b),
        eF = RF()(WF.dataKey) ? AF.props.dataKey : WF.dataKey,
        EF = RF()(SF.dataKey) ? AF.props.dataKey : SF.dataKey,
        QF = CF && CF.dataKey,
        rW = CF ? CF.range : xW.defaultProps.range,
        gW = rW && rW[0],
        tW = WF.scale.bandwidth ? WF.scale.bandwidth() : 0,
        aW = SF.scale.bandwidth ? SF.scale.bandwidth() : 0,
        kW = uF.map((function(FF, uF) {
          var dF = (0, cW.$)(FF, eF),
            rW = (0, cW.$)(FF, EF),
            TF = !RF()(QF) && (0, cW.$)(FF, QF) || "-",
            kW = [{
              name: RF()(WF.dataKey) ? AF.props.name : WF.name || WF.dataKey,
              unit: WF.unit || "",
              value: dF,
              payload: FF,
              dataKey: eF,
              type: PF
            }, {
              name: RF()(SF.dataKey) ? AF.props.name : SF.name || SF.dataKey,
              unit: SF.unit || "",
              value: rW,
              payload: FF,
              dataKey: EF,
              type: PF
            }];
          "-" !== TF && kW.push({
            name: CF.name || CF.dataKey,
            unit: CF.unit || "",
            value: TF,
            payload: FF,
            dataKey: QF,
            type: PF
          });
          var qW = (0, cW.z)({
              axis: WF,
              ticks: hF,
              bandSize: tW,
              entry: FF,
              index: uF,
              dataKey: eF
            }),
            VF = (0, cW.z)({
              axis: SF,
              ticks: bW,
              bandSize: aW,
              entry: FF,
              index: uF,
              dataKey: EF
            }),
            NF = "-" !== TF ? CF.scale(TF) : gW,
            DF = Math.sqrt(Math.max(NF, 0) / Math.PI);
          return XF(XF({}, FF), {}, {
            cx: qW,
            cy: VF,
            x: qW - DF,
            y: VF - DF,
            xAxis: WF,
            yAxis: SF,
            zAxis: CF,
            width: 2 * DF,
            height: 2 * DF,
            size: NF,
            node: {
              x: dF,
              y: rW,
              z: TF
            },
            tooltipPayload: kW,
            tooltipPosition: {
              x: qW,
              y: VF
            },
            payload: FF
          }, iW && iW[uF] && iW[uF].props)
        }));
      return XF({
        points: kW
      }, dF)
    }));
    var WW = SF(5365),
      SW = SF(5380),
      CW = SF(5205),
      AW = (0, CF.c)({
        chartName: "ComposedChart",
        GraphicalChild: [hF.e, AF.d, uF.b, FW],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: WW.e
        }, {
          axisType: "yAxis",
          AxisComp: SW.d
        }, {
          axisType: "zAxis",
          AxisComp: xW
        }],
        formatAxisMap: CW.f
      })
  },
  4430: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => yC
    });
    var CF = SF(46),
      AF = SF(4392),
      uF = SF.n(AF),
      hF = SF(4241),
      bW = SF.n(hF),
      dF = SF(4433),
      PF = SF.n(dF),
      RF = SF(4162),
      iW = SF.n(RF),
      eF = SF(4476),
      EF = SF.n(eF),
      QF = SF(4062),
      rW = SF.n(QF),
      gW = SF(4058),
      tW = SF(4927),
      TF = SF(4934),
      aW = SF(4941),
      kW = SF(4946),
      qW = SF(5017),
      VF = SF(5080),
      NF = SF(5082),
      DF = SF(4398),
      LF = SF(5110),
      mW = SF(5092),
      OF = SF(5107),
      xW = SF(4132);

    function ZF(FF) {
      return ZF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, ZF(FF)
    }

    function oF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function YF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? oF(Object(SF), !0).forEach((function(WF) {
          MF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : oF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function MF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != ZF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != ZF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == ZF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var cW = ["Webkit", "Moz", "O", "ms"];

    function GF(FF) {
      return GF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, GF(FF)
    }

    function zW() {
      return zW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, zW.apply(this, arguments)
    }

    function IF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function fF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? IF(Object(SF), !0).forEach((function(WF) {
          wF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : IF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function yW(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, XF(CF.key), CF)
      }
    }

    function sF(FF, WF, SF) {
      return WF = HF(WF),
        function(FF, WF) {
          if (WF && ("object" === GF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, nF() ? Reflect.construct(WF, SF || [], HF(FF).constructor) : WF.apply(FF, SF))
    }

    function nF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (nF = function() {
        return !!FF
      })()
    }

    function HF(FF) {
      return HF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, HF(FF)
    }

    function KF(FF, WF) {
      return KF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, KF(FF, WF)
    }

    function wF(FF, WF, SF) {
      return (WF = XF(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function XF(FF) {
      var WF = function(FF, WF) {
        if ("object" != GF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != GF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == GF(WF) ? WF : WF + ""
    }
    var UF = function(FF) {
        return FF.changedTouches && !!FF.changedTouches.length
      },
      BF = function(FF) {
        function WF(FF) {
          var SF;
          return function(FF, WF) {
            if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
          }(this, WF), wF(SF = sF(this, WF, [FF]), "handleDrag", (function(FF) {
            SF.leaveTimer && (clearTimeout(SF.leaveTimer), SF.leaveTimer = null), SF.state.isTravellerMoving ? SF.handleTravellerMove(FF) : SF.state.isSlideMoving && SF.handleSlideDrag(FF)
          })), wF(SF, "handleTouchMove", (function(FF) {
            null != FF.changedTouches && FF.changedTouches.length > 0 && SF.handleDrag(FF.changedTouches[0])
          })), wF(SF, "handleDragEnd", (function() {
            SF.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var FF = SF.props,
                WF = FF.endIndex,
                CF = FF.onDragEnd,
                AF = FF.startIndex;
              null === CF || void 0 === CF || CF({
                endIndex: WF,
                startIndex: AF
              })
            })), SF.detachDragEndListener()
          })), wF(SF, "handleLeaveWrapper", (function() {
            (SF.state.isTravellerMoving || SF.state.isSlideMoving) && (SF.leaveTimer = window.setTimeout(SF.handleDragEnd, SF.props.leaveTimeOut))
          })), wF(SF, "handleEnterSlideOrTraveller", (function() {
            SF.setState({
              isTextActive: !0
            })
          })), wF(SF, "handleLeaveSlideOrTraveller", (function() {
            SF.setState({
              isTextActive: !1
            })
          })), wF(SF, "handleSlideDragStart", (function(FF) {
            var WF = UF(FF) ? FF.changedTouches[0] : FF;
            SF.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: WF.pageX
            }), SF.attachDragEndListener()
          })), SF.travellerDragStartHandlers = {
            startX: SF.handleTravellerDragStart.bind(SF, "startX"),
            endX: SF.handleTravellerDragStart.bind(SF, "endX")
          }, SF.state = {}, SF
        }
        return function(FF, WF) {
          if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
          FF.prototype = Object.create(WF && WF.prototype, {
            constructor: {
              value: FF,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(FF, "prototype", {
            writable: !1
          }), WF && KF(FF, WF)
        }(WF, FF), SF = WF, AF = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(FF) {
            var SF = FF.startX,
              CF = FF.endX,
              AF = this.state.scaleValues,
              uF = this.props,
              hF = uF.gap,
              bW = uF.data.length - 1,
              dF = Math.min(SF, CF),
              PF = Math.max(SF, CF),
              RF = WF.getIndexInRange(AF, dF),
              iW = WF.getIndexInRange(AF, PF);
            return {
              startIndex: RF - RF % hF,
              endIndex: iW === bW ? bW : iW - iW % hF
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(FF) {
            var WF = this.props,
              SF = WF.data,
              CF = WF.tickFormatter,
              AF = WF.dataKey,
              uF = (0, OF.$)(SF[FF], AF, FF);
            return bW()(CF) ? CF(uF, FF) : uF
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
          value: function(FF) {
            var WF = this.state,
              SF = WF.slideMoveStartX,
              CF = WF.startX,
              AF = WF.endX,
              uF = this.props,
              hF = uF.x,
              bW = uF.width,
              dF = uF.travellerWidth,
              PF = uF.startIndex,
              RF = uF.endIndex,
              iW = uF.onChange,
              eF = FF.pageX - SF;
            eF > 0 ? eF = Math.min(eF, hF + bW - dF - AF, hF + bW - dF - CF) : eF < 0 && (eF = Math.max(eF, hF - CF, hF - AF));
            var EF = this.getIndex({
              startX: CF + eF,
              endX: AF + eF
            });
            EF.startIndex === PF && EF.endIndex === RF || !iW || iW(EF), this.setState({
              startX: CF + eF,
              endX: AF + eF,
              slideMoveStartX: FF.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(FF, WF) {
            var SF = UF(WF) ? WF.changedTouches[0] : WF;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: FF,
              brushMoveStartX: SF.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(FF) {
            var WF = this.state,
              SF = WF.brushMoveStartX,
              CF = WF.movingTravellerId,
              AF = WF.endX,
              uF = WF.startX,
              hF = this.state[CF],
              bW = this.props,
              dF = bW.x,
              PF = bW.width,
              RF = bW.travellerWidth,
              iW = bW.onChange,
              eF = bW.gap,
              EF = bW.data,
              QF = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              rW = FF.pageX - SF;
            rW > 0 ? rW = Math.min(rW, dF + PF - RF - hF) : rW < 0 && (rW = Math.max(rW, dF - hF)), QF[CF] = hF + rW;
            var gW = this.getIndex(QF),
              tW = gW.startIndex,
              TF = gW.endIndex;
            this.setState(wF(wF({}, CF, hF + rW), "brushMoveStartX", FF.pageX), (function() {
              iW && function() {
                var FF = EF.length - 1;
                return "startX" === CF && (AF > uF ? tW % eF === 0 : TF % eF === 0) || AF < uF && TF === FF || "endX" === CF && (AF > uF ? TF % eF === 0 : tW % eF === 0) || AF > uF && TF === FF
              }() && iW(gW)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(FF, WF) {
            var SF = this,
              CF = this.state,
              AF = CF.scaleValues,
              uF = CF.startX,
              hF = CF.endX,
              bW = this.state[WF],
              dF = AF.indexOf(bW);
            if (-1 !== dF) {
              var PF = dF + FF;
              if (!(-1 === PF || PF >= AF.length)) {
                var RF = AF[PF];
                "startX" === WF && RF >= hF || "endX" === WF && RF <= uF || this.setState(wF({}, WF, RF), (function() {
                  SF.props.onChange(SF.getIndex({
                    startX: SF.state.startX,
                    endX: SF.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var FF = this.props,
              WF = FF.x,
              SF = FF.y,
              AF = FF.width,
              uF = FF.height,
              hF = FF.fill,
              bW = FF.stroke;
            return CF.createElement("rect", {
              stroke: bW,
              fill: hF,
              x: WF,
              y: SF,
              width: AF,
              height: uF
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var FF = this.props,
              WF = FF.x,
              SF = FF.y,
              AF = FF.width,
              uF = FF.height,
              hF = FF.data,
              bW = FF.children,
              dF = FF.padding,
              PF = CF.Children.only(bW);
            return PF ? CF.cloneElement(PF, {
              x: WF,
              y: SF,
              width: AF,
              height: uF,
              margin: dF,
              compact: !0,
              data: hF
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(FF, SF) {
            var AF, uF, hF = this,
              bW = this.props,
              dF = bW.y,
              PF = bW.travellerWidth,
              RF = bW.height,
              iW = bW.traveller,
              eF = bW.ariaLabel,
              EF = bW.data,
              QF = bW.startIndex,
              rW = bW.endIndex,
              gW = Math.max(FF, this.props.x),
              tW = fF(fF({}, (0, DF.e)(this.props, !1)), {}, {
                x: gW,
                y: dF,
                width: PF,
                height: RF
              }),
              TF = eF || "Min value: ".concat(null === (AF = EF[QF]) || void 0 === AF ? void 0 : AF.name, ", Max value: ").concat(null === (uF = EF[rW]) || void 0 === uF ? void 0 : uF.name);
            return CF.createElement(aW.c, {
              tabIndex: 0,
              role: "slider",
              "aria-label": TF,
              "aria-valuenow": FF,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[SF],
              onTouchStart: this.travellerDragStartHandlers[SF],
              onKeyDown: function(FF) {
                ["ArrowLeft", "ArrowRight"].includes(FF.key) && (FF.preventDefault(), FF.stopPropagation(), hF.handleTravellerMoveKeyboard("ArrowRight" === FF.key ? 1 : -1, SF))
              },
              onFocus: function() {
                hF.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                hF.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, WF.renderTraveller(iW, tW))
          }
        }, {
          key: "renderSlide",
          value: function(FF, WF) {
            var SF = this.props,
              AF = SF.y,
              uF = SF.height,
              hF = SF.stroke,
              bW = SF.travellerWidth,
              dF = Math.min(FF, WF) + bW,
              PF = Math.max(Math.abs(WF - FF) - bW, 0);
            return CF.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: hF,
              fillOpacity: .2,
              x: dF,
              y: AF,
              width: PF,
              height: uF
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var FF = this.props,
              WF = FF.startIndex,
              SF = FF.endIndex,
              AF = FF.y,
              uF = FF.height,
              hF = FF.travellerWidth,
              bW = FF.stroke,
              dF = this.state,
              PF = dF.startX,
              RF = dF.endX,
              iW = {
                pointerEvents: "none",
                fill: bW
              };
            return CF.createElement(aW.c, {
              className: "recharts-brush-texts"
            }, CF.createElement(mW.e, zW({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(PF, RF) - 5,
              y: AF + uF / 2
            }, iW), this.getTextOfTick(WF)), CF.createElement(mW.e, zW({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(PF, RF) + hF + 5,
              y: AF + uF / 2
            }, iW), this.getTextOfTick(SF)))
          }
        }, {
          key: "render",
          value: function() {
            var FF = this.props,
              WF = FF.data,
              SF = FF.className,
              AF = FF.children,
              uF = FF.x,
              hF = FF.y,
              bW = FF.width,
              dF = FF.height,
              PF = FF.alwaysShowText,
              RF = this.state,
              iW = RF.startX,
              eF = RF.endX,
              EF = RF.isTextActive,
              QF = RF.isSlideMoving,
              rW = RF.isTravellerMoving,
              tW = RF.isTravellerFocused;
            if (!WF || !WF.length || !(0, xW.t)(uF) || !(0, xW.t)(hF) || !(0, xW.t)(bW) || !(0, xW.t)(dF) || bW <= 0 || dF <= 0) return null;
            var TF = (0, gW.d)("recharts-brush", SF),
              kW = 1 === CF.Children.count(AF),
              qW = function(FF, WF) {
                if (!FF) return null;
                var SF = FF.replace(/(\w)/, (function(FF) {
                    return FF.toUpperCase()
                  })),
                  CF = cW.reduce((function(FF, CF) {
                    return YF(YF({}, FF), {}, MF({}, CF + SF, WF))
                  }), {});
                return CF[FF] = WF, CF
              }("userSelect", "none");
            return CF.createElement(aW.c, {
              className: TF,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: qW
            }, this.renderBackground(), kW && this.renderPanorama(), this.renderSlide(iW, eF), this.renderTravellerLayer(iW, "startX"), this.renderTravellerLayer(eF, "endX"), (EF || QF || rW || tW || PF) && this.renderText())
          }
        }], uF = [{
          key: "renderDefaultTraveller",
          value: function(FF) {
            var WF = FF.x,
              SF = FF.y,
              AF = FF.width,
              uF = FF.height,
              hF = FF.stroke,
              bW = Math.floor(SF + uF / 2) - 1;
            return CF.createElement(CF.Fragment, null, CF.createElement("rect", {
              x: WF,
              y: SF,
              width: AF,
              height: uF,
              fill: hF,
              stroke: "none"
            }), CF.createElement("line", {
              x1: WF + 1,
              y1: bW,
              x2: WF + AF - 1,
              y2: bW,
              fill: "none",
              stroke: "#fff"
            }), CF.createElement("line", {
              x1: WF + 1,
              y1: bW + 2,
              x2: WF + AF - 1,
              y2: bW + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(FF, SF) {
            return CF.isValidElement(FF) ? CF.cloneElement(FF, SF) : bW()(FF) ? FF(SF) : WF.renderDefaultTraveller(SF)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(FF, WF) {
            var SF = FF.data,
              CF = FF.width,
              AF = FF.x,
              uF = FF.travellerWidth,
              hF = FF.updateId,
              bW = FF.startIndex,
              dF = FF.endIndex;
            if (SF !== WF.prevData || hF !== WF.prevUpdateId) return fF({
              prevData: SF,
              prevTravellerWidth: uF,
              prevUpdateId: hF,
              prevX: AF,
              prevWidth: CF
            }, SF && SF.length ? function(FF) {
              var WF = FF.data,
                SF = FF.startIndex,
                CF = FF.endIndex,
                AF = FF.x,
                uF = FF.width,
                hF = FF.travellerWidth;
              if (!WF || !WF.length) return {};
              var bW = WF.length,
                dF = (0, LF.e)().domain(PF()(0, bW)).range([AF, AF + uF - hF]),
                RF = dF.domain().map((function(FF) {
                  return dF(FF)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: dF(SF),
                endX: dF(CF),
                scale: dF,
                scaleValues: RF
              }
            }({
              data: SF,
              width: CF,
              x: AF,
              travellerWidth: uF,
              startIndex: bW,
              endIndex: dF
            }) : {
              scale: null,
              scaleValues: null
            });
            if (WF.scale && (CF !== WF.prevWidth || AF !== WF.prevX || uF !== WF.prevTravellerWidth)) {
              WF.scale.range([AF, AF + CF - uF]);
              var RF = WF.scale.domain().map((function(FF) {
                return WF.scale(FF)
              }));
              return {
                prevData: SF,
                prevTravellerWidth: uF,
                prevUpdateId: hF,
                prevX: AF,
                prevWidth: CF,
                startX: WF.scale(FF.startIndex),
                endX: WF.scale(FF.endIndex),
                scaleValues: RF
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(FF, WF) {
            for (var SF = 0, CF = FF.length - 1; CF - SF > 1;) {
              var AF = Math.floor((SF + CF) / 2);
              FF[AF] > WF ? CF = AF : SF = AF
            }
            return WF >= FF[CF] ? CF : SF
          }
        }], AF && yW(SF.prototype, AF), uF && yW(SF, uF), Object.defineProperty(SF, "prototype", {
          writable: !1
        }), SF;
        var SF, AF, uF
      }(CF.PureComponent);
    wF(BF, "displayName", "Brush"), wF(BF, "defaultProps", {
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
    var jW = SF(5098),
      vW = SF(5175),
      JF = SF(5187),
      pF = SF(5200),
      lF = SF(5205),
      FW = SF(4396);

    function WW() {
      return WW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, WW.apply(this, arguments)
    }

    function SW(FF) {
      return SW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, SW(FF)
    }

    function CW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function AW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? CW(Object(SF), !0).forEach((function(WF) {
          RW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : CW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function uW(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, iS(CF.key), CF)
      }
    }

    function hW(FF, WF, SF) {
      return WF = dW(WF),
        function(FF, WF) {
          if (WF && ("object" === SW(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, bS() ? Reflect.construct(WF, SF || [], dW(FF).constructor) : WF.apply(FF, SF))
    }

    function bS() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (bS = function() {
        return !!FF
      })()
    }

    function dW(FF) {
      return dW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, dW(FF)
    }

    function PW(FF, WF) {
      return PW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, PW(FF, WF)
    }

    function RW(FF, WF, SF) {
      return (WF = iS(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function iS(FF) {
      var WF = function(FF, WF) {
        if ("object" != SW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != SW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == SW(WF) ? WF : WF + ""
    }
    var eW = function(FF) {
      function WF() {
        return function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF), hW(this, WF, arguments)
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && PW(FF, WF)
      }(WF, FF), SF = WF, (AF = [{
        key: "render",
        value: function() {
          var FF = this.props,
            SF = FF.x,
            AF = FF.y,
            uF = FF.r,
            hF = FF.alwaysShow,
            bW = FF.clipPathId,
            dF = (0, xW.p)(SF),
            PF = (0, xW.p)(AF);
          if ((0, FW.c)(void 0 === hF, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !dF || !PF) return null;
          var RF = function(FF) {
            var WF = FF.x,
              SF = FF.y,
              CF = FF.xAxis,
              AF = FF.yAxis,
              uF = (0, lF.b)({
                x: CF.scale,
                y: AF.scale
              }),
              hF = uF.apply({
                x: WF,
                y: SF
              }, {
                bandAware: !0
              });
            return (0, pF.b)(FF, "discard") && !uF.isInRange(hF) ? null : hF
          }(this.props);
          if (!RF) return null;
          var iW = RF.x,
            eF = RF.y,
            EF = this.props,
            QF = EF.shape,
            rW = EF.className,
            tW = AW(AW({
              clipPath: (0, pF.b)(this.props, "hidden") ? "url(#".concat(bW, ")") : void 0
            }, (0, DF.e)(this.props, !0)), {}, {
              cx: iW,
              cy: eF
            });
          return CF.createElement(aW.c, {
            className: (0, gW.d)("recharts-reference-dot", rW)
          }, WF.renderDot(QF, tW), JF.c.renderCallByParent(this.props, {
            x: iW - uF,
            y: eF - uF,
            width: 2 * uF,
            height: 2 * uF
          }))
        }
      }]) && uW(SF.prototype, AF), uF && uW(SF, uF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, AF, uF
    }(CF.Component);
    RW(eW, "displayName", "ReferenceDot"), RW(eW, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), RW(eW, "renderDot", (function(FF, WF) {
      return CF.isValidElement(FF) ? CF.cloneElement(FF, WF) : bW()(FF) ? FF(WF) : CF.createElement(VF.c, WW({}, WF, {
        cx: WF.cx,
        cy: WF.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var EW = SF(5288);

    function QW() {
      return QW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, QW.apply(this, arguments)
    }

    function rS(FF) {
      return rS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, rS(FF)
    }

    function gS(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function tS(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? gS(Object(SF), !0).forEach((function(WF) {
          NW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : gS(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function TW(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, DW(CF.key), CF)
      }
    }

    function aS(FF, WF, SF) {
      return WF = qS(WF),
        function(FF, WF) {
          if (WF && ("object" === rS(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, kS() ? Reflect.construct(WF, SF || [], qS(FF).constructor) : WF.apply(FF, SF))
    }

    function kS() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (kS = function() {
        return !!FF
      })()
    }

    function qS(FF) {
      return qS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, qS(FF)
    }

    function VW(FF, WF) {
      return VW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, VW(FF, WF)
    }

    function NW(FF, WF, SF) {
      return (WF = DW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function DW(FF) {
      var WF = function(FF, WF) {
        if ("object" != rS(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != rS(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == rS(WF) ? WF : WF + ""
    }
    var LW = function(FF) {
      function WF() {
        return function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF), aS(this, WF, arguments)
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && VW(FF, WF)
      }(WF, FF), SF = WF, (AF = [{
        key: "render",
        value: function() {
          var FF = this.props,
            SF = FF.x1,
            AF = FF.x2,
            uF = FF.y1,
            hF = FF.y2,
            bW = FF.className,
            dF = FF.alwaysShow,
            PF = FF.clipPathId;
          (0, FW.c)(void 0 === dF, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var RF = (0, xW.p)(SF),
            iW = (0, xW.p)(AF),
            eF = (0, xW.p)(uF),
            EF = (0, xW.p)(hF),
            QF = this.props.shape;
          if (!RF && !iW && !eF && !EF && !QF) return null;
          var rW = function(FF, WF, SF, CF, AF) {
            var uF = AF.x1,
              hF = AF.x2,
              bW = AF.y1,
              dF = AF.y2,
              PF = AF.xAxis,
              RF = AF.yAxis;
            if (!PF || !RF) return null;
            var iW = (0, lF.b)({
                x: PF.scale,
                y: RF.scale
              }),
              eF = {
                x: FF ? iW.x.apply(uF, {
                  position: "start"
                }) : iW.x.rangeMin,
                y: SF ? iW.y.apply(bW, {
                  position: "start"
                }) : iW.y.rangeMin
              },
              EF = {
                x: WF ? iW.x.apply(hF, {
                  position: "end"
                }) : iW.x.rangeMax,
                y: CF ? iW.y.apply(dF, {
                  position: "end"
                }) : iW.y.rangeMax
              };
            return !(0, pF.b)(AF, "discard") || iW.isInRange(eF) && iW.isInRange(EF) ? (0, lF.i)(eF, EF) : null
          }(RF, iW, eF, EF, this.props);
          if (!rW && !QF) return null;
          var tW = (0, pF.b)(this.props, "hidden") ? "url(#".concat(PF, ")") : void 0;
          return CF.createElement(aW.c, {
            className: (0, gW.d)("recharts-reference-area", bW)
          }, WF.renderRect(QF, tS(tS({
            clipPath: tW
          }, (0, DF.e)(this.props, !0)), rW)), JF.c.renderCallByParent(this.props, rW))
        }
      }]) && TW(SF.prototype, AF), uF && TW(SF, uF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, AF, uF
    }(CF.Component);

    function mS(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return OW(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return OW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return OW(FF, WF)
      }(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }
    NW(LW, "displayName", "ReferenceArea"), NW(LW, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), NW(LW, "renderRect", (function(FF, WF) {
      return CF.isValidElement(FF) ? CF.cloneElement(FF, WF) : bW()(FF) ? FF(WF) : CF.createElement(NF.d, QW({}, WF, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var xS = function(FF, WF, SF, CF, AF) {
        var uF = (0, DF.h)(FF, EW.d),
          hF = (0, DF.h)(FF, eW),
          bW = [].concat(mS(uF), mS(hF)),
          dF = (0, DF.h)(FF, LW),
          PF = "".concat(CF, "Id"),
          RF = CF[0],
          iW = WF;
        if (bW.length && (iW = bW.reduce((function(FF, WF) {
            if (WF.props[PF] === SF && (0, pF.b)(WF.props, "extendDomain") && (0, xW.t)(WF.props[RF])) {
              var CF = WF.props[RF];
              return [Math.min(FF[0], CF), Math.max(FF[1], CF)]
            }
            return FF
          }), iW)), dF.length) {
          var eF = "".concat(RF, "1"),
            EF = "".concat(RF, "2");
          iW = dF.reduce((function(FF, WF) {
            if (WF.props[PF] === SF && (0, pF.b)(WF.props, "extendDomain") && (0, xW.t)(WF.props[eF]) && (0, xW.t)(WF.props[EF])) {
              var CF = WF.props[eF],
                AF = WF.props[EF];
              return [Math.min(FF[0], CF, AF), Math.max(FF[1], CF, AF)]
            }
            return FF
          }), iW)
        }
        return AF && AF.length && (iW = AF.reduce((function(FF, WF) {
          return (0, xW.t)(WF) ? [Math.min(FF[0], WF), Math.max(FF[1], WF)] : FF
        }), iW)), iW
      },
      ZW = SF(5195),
      oW = SF(4413),
      YW = SF(24),
      MW = new(SF.n(YW)()),
      cS = "recharts.syncMouseEvents",
      GW = SF(4419);

    function zS(FF) {
      return zS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, zS(FF)
    }

    function IW(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, yS(CF.key), CF)
      }
    }

    function fW(FF, WF, SF) {
      return (WF = yS(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function yS(FF) {
      var WF = function(FF, WF) {
        if ("object" != zS(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != zS(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == zS(WF) ? WF : WF + ""
    }
    var sW = function() {
      return FF = function FF() {
        ! function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, FF), fW(this, "activeIndex", 0), fW(this, "coordinateList", []), fW(this, "layout", "horizontal")
      }, (WF = [{
        key: "setDetails",
        value: function(FF) {
          var WF, SF = FF.coordinateList,
            CF = void 0 === SF ? null : SF,
            AF = FF.container,
            uF = void 0 === AF ? null : AF,
            hF = FF.layout,
            bW = void 0 === hF ? null : hF,
            dF = FF.offset,
            PF = void 0 === dF ? null : dF,
            RF = FF.mouseHandlerCallback,
            iW = void 0 === RF ? null : RF;
          this.coordinateList = null !== (WF = null !== CF && void 0 !== CF ? CF : this.coordinateList) && void 0 !== WF ? WF : [], this.container = null !== uF && void 0 !== uF ? uF : this.container, this.layout = null !== bW && void 0 !== bW ? bW : this.layout, this.offset = null !== PF && void 0 !== PF ? PF : this.offset, this.mouseHandlerCallback = null !== iW && void 0 !== iW ? iW : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(FF) {
          if (0 !== this.coordinateList.length) switch (FF.key) {
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
        value: function(FF) {
          this.activeIndex = FF
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var FF, WF;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var SF = this.container.getBoundingClientRect(),
              CF = SF.x,
              AF = SF.y,
              uF = SF.height,
              hF = this.coordinateList[this.activeIndex].coordinate,
              bW = (null === (FF = window) || void 0 === FF ? void 0 : FF.scrollX) || 0,
              dF = (null === (WF = window) || void 0 === WF ? void 0 : WF.scrollY) || 0,
              PF = CF + hF + bW,
              RF = AF + this.offset.top + uF / 2 + dF;
            this.mouseHandlerCallback({
              pageX: PF,
              pageY: RF
            })
          }
        }
      }]) && IW(FF.prototype, WF), SF && IW(FF, SF), Object.defineProperty(FF, "prototype", {
        writable: !1
      }), FF;
      var FF, WF, SF
    }();
    var nW = SF(5258),
      HW = SF(5341);

    function KW(FF) {
      return KW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, KW(FF)
    }
    var wW = ["x", "y", "top", "left", "width", "height", "className"];

    function XW() {
      return XW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, XW.apply(this, arguments)
    }

    function UW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function BW(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != KW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != KW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == KW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function jS(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }
    var vS = function(FF, WF, SF, CF, AF, uF) {
        return "M".concat(FF, ",").concat(AF, "v").concat(CF, "M").concat(uF, ",").concat(WF, "h").concat(SF)
      },
      JW = function(FF) {
        var WF = FF.x,
          SF = void 0 === WF ? 0 : WF,
          AF = FF.y,
          uF = void 0 === AF ? 0 : AF,
          hF = FF.top,
          bW = void 0 === hF ? 0 : hF,
          dF = FF.left,
          PF = void 0 === dF ? 0 : dF,
          RF = FF.width,
          iW = void 0 === RF ? 0 : RF,
          eF = FF.height,
          EF = void 0 === eF ? 0 : eF,
          QF = FF.className,
          rW = function(FF) {
            for (var WF = 1; WF < arguments.length; WF++) {
              var SF = null != arguments[WF] ? arguments[WF] : {};
              WF % 2 ? UW(Object(SF), !0).forEach((function(WF) {
                BW(FF, WF, SF[WF])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : UW(Object(SF)).forEach((function(WF) {
                Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
              }))
            }
            return FF
          }({
            x: SF,
            y: uF,
            top: bW,
            left: PF,
            width: iW,
            height: EF
          }, jS(FF, wW));
        return (0, xW.t)(SF) && (0, xW.t)(uF) && (0, xW.t)(iW) && (0, xW.t)(EF) && (0, xW.t)(bW) && (0, xW.t)(PF) ? CF.createElement("path", XW({}, (0, DF.e)(rW, !0), {
          className: (0, gW.d)("recharts-cross", QF),
          d: vS(SF, uF, iW, EF, bW, PF)
        })) : null
      };

    function pW(FF) {
      var WF = FF.cx,
        SF = FF.cy,
        CF = FF.radius,
        AF = FF.startAngle,
        uF = FF.endAngle;
      return {
        points: [(0, ZW.f)(WF, SF, CF, AF), (0, ZW.f)(WF, SF, CF, uF)],
        cx: WF,
        cy: SF,
        radius: CF,
        startAngle: AF,
        endAngle: uF
      }
    }
    var lW = SF(5284);

    function FS(FF, WF, SF) {
      var CF, AF, uF, hF;
      if ("horizontal" === FF) uF = CF = WF.x, AF = SF.top, hF = SF.top + SF.height;
      else if ("vertical" === FF) hF = AF = WF.y, CF = SF.left, uF = SF.left + SF.width;
      else if (null != WF.cx && null != WF.cy) {
        if ("centric" !== FF) return pW(WF);
        var bW = WF.cx,
          dF = WF.cy,
          PF = WF.innerRadius,
          RF = WF.outerRadius,
          iW = WF.angle,
          eF = (0, ZW.f)(bW, dF, PF, iW),
          EF = (0, ZW.f)(bW, dF, RF, iW);
        CF = eF.x, AF = eF.y, uF = EF.x, hF = EF.y
      }
      return [{
        x: CF,
        y: AF
      }, {
        x: uF,
        y: hF
      }]
    }

    function WS(FF) {
      return WS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, WS(FF)
    }

    function SS(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function CS(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? SS(Object(SF), !0).forEach((function(WF) {
          AS(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : SS(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function AS(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != WS(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != WS(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == WS(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function uS(FF) {
      var WF, SF, AF, uF = FF.element,
        hF = FF.tooltipEventType,
        bW = FF.isActive,
        dF = FF.activeCoordinate,
        PF = FF.activePayload,
        RF = FF.offset,
        iW = FF.activeTooltipIndex,
        eF = FF.tooltipAxisBandSize,
        EF = FF.layout,
        QF = FF.chartName,
        rW = null !== (WF = uF.props.cursor) && void 0 !== WF ? WF : null === (SF = uF.type.defaultProps) || void 0 === SF ? void 0 : SF.cursor;
      if (!uF || !rW || !bW || !dF || "ScatterChart" !== QF && "axis" !== hF) return null;
      var tW = HW.b;
      if ("ScatterChart" === QF) AF = dF, tW = JW;
      else if ("BarChart" === QF) AF = function(FF, WF, SF, CF) {
        var AF = CF / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === FF ? WF.x - AF : SF.left + .5,
          y: "horizontal" === FF ? SF.top + .5 : WF.y - AF,
          width: "horizontal" === FF ? CF : SF.width - 1,
          height: "horizontal" === FF ? SF.height - 1 : CF
        }
      }(EF, dF, RF, eF), tW = NF.d;
      else if ("radial" === EF) {
        var TF = pW(dF),
          aW = TF.cx,
          kW = TF.cy,
          qW = TF.radius;
        AF = {
          cx: aW,
          cy: kW,
          startAngle: TF.startAngle,
          endAngle: TF.endAngle,
          innerRadius: qW,
          outerRadius: qW
        }, tW = lW.e
      } else AF = {
        points: FS(EF, dF, RF)
      }, tW = HW.b;
      var VF = CS(CS(CS(CS({
        stroke: "#ccc",
        pointerEvents: "none"
      }, RF), AF), (0, DF.e)(rW, !1)), {}, {
        payload: PF,
        payloadIndex: iW,
        className: (0, gW.d)("recharts-tooltip-cursor", rW.className)
      });
      return (0, CF.isValidElement)(rW) ? (0, CF.cloneElement)(rW, VF) : (0, CF.createElement)(tW, VF)
    }
    var hS = SF(5305),
      bC = ["item"],
      dS = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function PS(FF) {
      return PS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, PS(FF)
    }

    function RS() {
      return RS = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, RS.apply(this, arguments)
    }

    function iC(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || aC(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eS(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function ES(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, DS(CF.key), CF)
      }
    }

    function QS(FF, WF, SF) {
      return WF = gC(WF),
        function(FF, WF) {
          if (WF && ("object" === PS(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, rC() ? Reflect.construct(WF, SF || [], gC(FF).constructor) : WF.apply(FF, SF))
    }

    function rC() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (rC = function() {
        return !!FF
      })()
    }

    function gC(FF) {
      return gC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, gC(FF)
    }

    function tC(FF, WF) {
      return tC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, tC(FF, WF)
    }

    function TS(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return kC(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || aC(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aC(FF, WF) {
      if (FF) {
        if ("string" === typeof FF) return kC(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        return "Object" === SF && FF.constructor && (SF = FF.constructor.name), "Map" === SF || "Set" === SF ? Array.from(FF) : "Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF) ? kC(FF, WF) : void 0
      }
    }

    function kC(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function qC(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function VS(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? qC(Object(SF), !0).forEach((function(WF) {
          NS(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : qC(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function NS(FF, WF, SF) {
      return (WF = DS(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function DS(FF) {
      var WF = function(FF, WF) {
        if ("object" != PS(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != PS(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == PS(WF) ? WF : WF + ""
    }
    var LS = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      mC = {
        width: "100%",
        height: "100%"
      },
      OS = {
        x: 0,
        y: 0
      };

    function xC(FF) {
      return FF
    }
    var ZS = function(FF, WF) {
      var SF = WF.graphicalItems,
        CF = WF.dataStartIndex,
        AF = WF.dataEndIndex,
        uF = (null !== SF && void 0 !== SF ? SF : []).reduce((function(FF, WF) {
          var SF = WF.props.data;
          return SF && SF.length ? [].concat(TS(FF), TS(SF)) : FF
        }), []);
      return uF.length > 0 ? uF : FF && FF.length && (0, xW.t)(CF) && (0, xW.t)(AF) ? FF.slice(CF, AF + 1) : []
    };

    function oS(FF) {
      return "number" === FF ? [0, "auto"] : void 0
    }
    var YS = function(FF, WF, SF, CF) {
        var AF = FF.graphicalItems,
          uF = FF.tooltipAxis,
          hF = ZS(WF, FF);
        return SF < 0 || !AF || !AF.length || SF >= hF.length ? null : AF.reduce((function(AF, bW) {
          var dF, PF, RF = null !== (dF = bW.props.data) && void 0 !== dF ? dF : WF;
          if (RF && FF.dataStartIndex + FF.dataEndIndex !== 0 && FF.dataEndIndex - FF.dataStartIndex >= SF && (RF = RF.slice(FF.dataStartIndex, FF.dataEndIndex + 1)), uF.dataKey && !uF.allowDuplicatedCategory) {
            var iW = void 0 === RF ? hF : RF;
            PF = (0, xW.e)(iW, uF.dataKey, CF)
          } else PF = RF && RF[SF] || hF[SF];
          return PF ? [].concat(TS(AF), [(0, OF.X)(bW, PF)]) : AF
        }), [])
      },
      MS = function(FF, WF, SF, CF) {
        var AF = CF || {
            x: FF.chartX,
            y: FF.chartY
          },
          uF = function(FF, WF) {
            return "horizontal" === WF ? FF.x : "vertical" === WF ? FF.y : "centric" === WF ? FF.angle : FF.radius
          }(AF, SF),
          hF = FF.orderedTooltipTicks,
          bW = FF.tooltipAxis,
          dF = FF.tooltipTicks,
          PF = (0, OF.d)(uF, hF, dF, bW);
        if (PF >= 0 && dF) {
          var RF = dF[PF] && dF[PF].value,
            iW = YS(FF, WF, PF, RF),
            eF = function(FF, WF, SF, CF) {
              var AF = WF.find((function(FF) {
                return FF && FF.index === SF
              }));
              if (AF) {
                if ("horizontal" === FF) return {
                  x: AF.coordinate,
                  y: CF.y
                };
                if ("vertical" === FF) return {
                  x: CF.x,
                  y: AF.coordinate
                };
                if ("centric" === FF) {
                  var uF = AF.coordinate,
                    hF = CF.radius;
                  return VS(VS(VS({}, CF), (0, ZW.f)(CF.cx, CF.cy, hF, uF)), {}, {
                    angle: uF,
                    radius: hF
                  })
                }
                var bW = AF.coordinate,
                  dF = CF.angle;
                return VS(VS(VS({}, CF), (0, ZW.f)(CF.cx, CF.cy, bW, dF)), {}, {
                  angle: dF,
                  radius: bW
                })
              }
              return OS
            }(SF, hF, PF, AF);
          return {
            activeTooltipIndex: PF,
            activeLabel: RF,
            activePayload: iW,
            activeCoordinate: eF
          }
        }
        return null
      },
      cC = function(FF, WF) {
        var SF = WF.axes,
          CF = WF.graphicalItems,
          AF = WF.axisType,
          hF = WF.axisIdKey,
          bW = WF.stackGroups,
          dF = WF.dataStartIndex,
          RF = WF.dataEndIndex,
          iW = FF.layout,
          eF = FF.children,
          EF = FF.stackOffset,
          QF = (0, OF.cb)(iW, AF);
        return SF.reduce((function(WF, SF) {
          var rW, gW = void 0 !== SF.type.defaultProps ? VS(VS({}, SF.type.defaultProps), SF.props) : SF.props,
            tW = gW.type,
            TF = gW.dataKey,
            aW = gW.allowDataOverflow,
            kW = gW.allowDuplicatedCategory,
            qW = gW.scale,
            VF = gW.ticks,
            NF = gW.includeHidden,
            DF = gW[hF];
          if (WF[DF]) return WF;
          var LF, mW, ZF, oF = ZS(FF.data, {
              graphicalItems: CF.filter((function(FF) {
                var WF;
                return (hF in FF.props ? FF.props[hF] : null === (WF = FF.type.defaultProps) || void 0 === WF ? void 0 : WF[hF]) === DF
              })),
              dataStartIndex: dF,
              dataEndIndex: RF
            }),
            YF = oF.length;
          (function(FF, WF, SF) {
            if ("number" === SF && !0 === WF && Array.isArray(FF)) {
              var CF = null === FF || void 0 === FF ? void 0 : FF[0],
                AF = null === FF || void 0 === FF ? void 0 : FF[1];
              if (CF && AF && (0, xW.t)(CF) && (0, xW.t)(AF)) return !0
            }
            return !1
          })(gW.domain, aW, tW) && (LF = (0, OF.pb)(gW.domain, null, aW), !QF || "number" !== tW && "auto" === qW || (ZF = (0, OF.F)(oF, TF, "category")));
          var MF = oS(tW);
          if (!LF || 0 === LF.length) {
            var cW, GF = null !== (cW = gW.domain) && void 0 !== cW ? cW : MF;
            if (TF) {
              if (LF = (0, OF.F)(oF, TF, tW), "category" === tW && QF) {
                var zW = (0, xW.i)(LF);
                kW && zW ? (mW = LF, LF = PF()(0, YF)) : kW || (LF = (0, OF.fb)(GF, LF, SF).reduce((function(FF, WF) {
                  return FF.indexOf(WF) >= 0 ? FF : [].concat(TS(FF), [WF])
                }), []))
              } else if ("category" === tW) LF = kW ? LF.filter((function(FF) {
                return "" !== FF && !uF()(FF)
              })) : (0, OF.fb)(GF, LF, SF).reduce((function(FF, WF) {
                return FF.indexOf(WF) >= 0 || "" === WF || uF()(WF) ? FF : [].concat(TS(FF), [WF])
              }), []);
              else if ("number" === tW) {
                var IF = (0, OF.ib)(oF, CF.filter((function(FF) {
                  var WF, SF, CF = hF in FF.props ? FF.props[hF] : null === (WF = FF.type.defaultProps) || void 0 === WF ? void 0 : WF[hF],
                    AF = "hide" in FF.props ? FF.props.hide : null === (SF = FF.type.defaultProps) || void 0 === SF ? void 0 : SF.hide;
                  return CF === DF && (NF || !AF)
                })), TF, AF, iW);
                IF && (LF = IF)
              }!QF || "number" !== tW && "auto" === qW || (ZF = (0, OF.F)(oF, TF, "category"))
            } else LF = QF ? PF()(0, YF) : bW && bW[DF] && bW[DF].hasStack && "number" === tW ? "expand" === EF ? [0, 1] : (0, OF.K)(bW[DF].stackGroups, dF, RF) : (0, OF.J)(oF, CF.filter((function(FF) {
              var WF = hF in FF.props ? FF.props[hF] : FF.type.defaultProps[hF],
                SF = "hide" in FF.props ? FF.props.hide : FF.type.defaultProps.hide;
              return WF === DF && (NF || !SF)
            })), tW, iW, !0);
            if ("number" === tW) LF = xS(eF, LF, DF, AF, VF), GF && (LF = (0, OF.pb)(GF, LF, aW));
            else if ("category" === tW && GF) {
              var fF = GF;
              LF.every((function(FF) {
                return fF.indexOf(FF) >= 0
              })) && (LF = fF)
            }
          }
          return VS(VS({}, WF), {}, NS({}, DF, VS(VS({}, gW), {}, {
            axisType: AF,
            domain: LF,
            categoricalDomain: ZF,
            duplicateDomain: mW,
            originalDomain: null !== (rW = gW.domain) && void 0 !== rW ? rW : MF,
            isCategorical: QF,
            layout: iW
          })))
        }), {})
      },
      GS = function(FF, WF) {
        var SF = WF.axisType,
          CF = void 0 === SF ? "xAxis" : SF,
          AF = WF.AxisComp,
          uF = WF.graphicalItems,
          hF = WF.stackGroups,
          bW = WF.dataStartIndex,
          dF = WF.dataEndIndex,
          RF = FF.children,
          eF = "".concat(CF, "Id"),
          EF = (0, DF.h)(RF, AF),
          QF = {};
        return EF && EF.length ? QF = cC(FF, {
          axes: EF,
          graphicalItems: uF,
          axisType: CF,
          axisIdKey: eF,
          stackGroups: hF,
          dataStartIndex: bW,
          dataEndIndex: dF
        }) : uF && uF.length && (QF = function(FF, WF) {
          var SF = WF.graphicalItems,
            CF = WF.Axis,
            AF = WF.axisType,
            uF = WF.axisIdKey,
            hF = WF.stackGroups,
            bW = WF.dataStartIndex,
            dF = WF.dataEndIndex,
            RF = FF.layout,
            eF = FF.children,
            EF = ZS(FF.data, {
              graphicalItems: SF,
              dataStartIndex: bW,
              dataEndIndex: dF
            }),
            QF = EF.length,
            rW = (0, OF.cb)(RF, AF),
            gW = -1;
          return SF.reduce((function(FF, WF) {
            var tW, TF = (void 0 !== WF.type.defaultProps ? VS(VS({}, WF.type.defaultProps), WF.props) : WF.props)[uF],
              aW = oS("number");
            return FF[TF] ? FF : (gW++, rW ? tW = PF()(0, QF) : hF && hF[TF] && hF[TF].hasStack ? (tW = (0, OF.K)(hF[TF].stackGroups, bW, dF), tW = xS(eF, tW, TF, AF)) : (tW = (0, OF.pb)(aW, (0, OF.J)(EF, SF.filter((function(FF) {
              var WF, SF, CF = uF in FF.props ? FF.props[uF] : null === (WF = FF.type.defaultProps) || void 0 === WF ? void 0 : WF[uF],
                AF = "hide" in FF.props ? FF.props.hide : null === (SF = FF.type.defaultProps) || void 0 === SF ? void 0 : SF.hide;
              return CF === TF && !AF
            })), "number", RF), CF.defaultProps.allowDataOverflow), tW = xS(eF, tW, TF, AF)), VS(VS({}, FF), {}, NS({}, TF, VS(VS({
              axisType: AF
            }, CF.defaultProps), {}, {
              hide: !0,
              orientation: iW()(LS, "".concat(AF, ".").concat(gW % 2), null),
              domain: tW,
              originalDomain: aW,
              isCategorical: rW,
              layout: RF
            }))))
          }), {})
        }(FF, {
          Axis: AF,
          graphicalItems: uF,
          axisType: CF,
          axisIdKey: eF,
          stackGroups: hF,
          dataStartIndex: bW,
          dataEndIndex: dF
        })), QF
      },
      zC = function(FF) {
        var WF = FF.children,
          SF = FF.defaultShowTooltip,
          CF = (0, DF.k)(WF, BF),
          AF = 0,
          uF = 0;
        return FF.data && 0 !== FF.data.length && (uF = FF.data.length - 1), CF && CF.props && (CF.props.startIndex >= 0 && (AF = CF.props.startIndex), CF.props.endIndex >= 0 && (uF = CF.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: AF,
          dataEndIndex: uF,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(SF)
        }
      },
      IS = function(FF) {
        return "horizontal" === FF ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === FF ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === FF ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      fS = function(FF, WF) {
        return "xAxis" === WF ? FF[WF].width : "yAxis" === WF ? FF[WF].height : void 0
      },
      yC = function(FF) {
        var WF = FF.chartName,
          SF = FF.GraphicalChild,
          AF = FF.defaultTooltipEventType,
          hF = void 0 === AF ? "axis" : AF,
          dF = FF.validateTooltipEventTypes,
          PF = void 0 === dF ? ["axis"] : dF,
          RF = FF.axisComponents,
          eF = FF.legendContent,
          QF = FF.formatAxisMap,
          LF = FF.defaultProps,
          mW = function(FF, WF) {
            var SF = WF.graphicalItems,
              CF = WF.stackGroups,
              AF = WF.offset,
              hF = WF.updateId,
              bW = WF.dataStartIndex,
              dF = WF.dataEndIndex,
              PF = FF.barSize,
              iW = FF.layout,
              eF = FF.barGap,
              EF = FF.barCategoryGap,
              QF = FF.maxBarSize,
              rW = IS(iW),
              gW = rW.numericAxisName,
              TF = rW.cateAxisName,
              aW = function(FF) {
                return !(!FF || !FF.length) && FF.some((function(FF) {
                  var WF = (0, DF.n)(FF && FF.type);
                  return WF && WF.indexOf("Bar") >= 0
                }))
              }(SF),
              kW = [];
            return SF.forEach((function(SF, rW) {
              var qW = ZS(FF.data, {
                  graphicalItems: [SF],
                  dataStartIndex: bW,
                  dataEndIndex: dF
                }),
                VF = void 0 !== SF.type.defaultProps ? VS(VS({}, SF.type.defaultProps), SF.props) : SF.props,
                NF = VF.dataKey,
                LF = VF.maxBarSize,
                mW = VF["".concat(gW, "Id")],
                xW = VF["".concat(TF, "Id")],
                ZF = RF.reduce((function(FF, SF) {
                  var CF = WF["".concat(SF.axisType, "Map")],
                    AF = VF["".concat(SF.axisType, "Id")];
                  CF && CF[AF] || "zAxis" === SF.axisType || (0, tW.b)(!1);
                  var uF = CF[AF];
                  return VS(VS({}, FF), {}, NS(NS({}, SF.axisType, uF), "".concat(SF.axisType, "Ticks"), (0, OF.S)(uF)))
                }), {}),
                oF = ZF[TF],
                YF = ZF["".concat(TF, "Ticks")],
                MF = CF && CF[mW] && CF[mW].hasStack && (0, OF.R)(SF, CF[mW].stackGroups),
                cW = (0, DF.n)(SF.type).indexOf("Bar") >= 0,
                GF = (0, OF.p)(oF, YF),
                zW = [],
                IF = aW && (0, OF.u)({
                  barSize: PF,
                  stackGroups: CF,
                  totalSize: fS(ZF, TF)
                });
              if (cW) {
                var fF, yW, sF = uF()(LF) ? QF : LF,
                  nF = null !== (fF = null !== (yW = (0, OF.p)(oF, YF, !0)) && void 0 !== yW ? yW : sF) && void 0 !== fF ? fF : 0;
                zW = (0, OF.r)({
                  barGap: eF,
                  barCategoryGap: EF,
                  bandSize: nF !== GF ? nF : GF,
                  sizeList: IF[xW],
                  maxBarSize: sF
                }), nF !== GF && (zW = zW.map((function(FF) {
                  return VS(VS({}, FF), {}, {
                    position: VS(VS({}, FF.position), {}, {
                      offset: FF.position.offset - nF / 2
                    })
                  })
                })))
              }
              var HF = SF && SF.type && SF.type.getComposedData;
              HF && kW.push({
                props: VS(VS({}, HF(VS(VS({}, ZF), {}, {
                  displayedData: qW,
                  props: FF,
                  dataKey: NF,
                  item: SF,
                  bandSize: GF,
                  barPosition: zW,
                  offset: AF,
                  stackedData: MF,
                  layout: iW,
                  dataStartIndex: bW,
                  dataEndIndex: dF
                }))), {}, NS(NS(NS({
                  key: SF.key || "item-".concat(rW)
                }, gW, ZF[gW]), TF, ZF[TF]), "animationId", hF)),
                childIndex: (0, DF.w)(SF, FF.children),
                item: SF
              })
            })), kW
          },
          ZF = function(FF, CF) {
            var AF = FF.props,
              uF = FF.dataStartIndex,
              hF = FF.dataEndIndex,
              bW = FF.updateId;
            if (!(0, DF.E)({
                props: AF
              })) return null;
            var dF = AF.children,
              PF = AF.layout,
              eF = AF.stackOffset,
              rW = AF.data,
              gW = AF.reverseStackOrder,
              tW = IS(PF),
              TF = tW.numericAxisName,
              aW = tW.cateAxisName,
              kW = (0, DF.h)(dF, SF),
              VF = (0, OF.O)(rW, kW, "".concat(TF, "Id"), "".concat(aW, "Id"), eF, gW),
              NF = RF.reduce((function(FF, WF) {
                var SF = "".concat(WF.axisType, "Map");
                return VS(VS({}, FF), {}, NS({}, SF, GS(AF, VS(VS({}, WF), {}, {
                  graphicalItems: kW,
                  stackGroups: WF.axisType === TF && VF,
                  dataStartIndex: uF,
                  dataEndIndex: hF
                }))))
              }), {}),
              LF = function(FF, WF) {
                var SF = FF.props,
                  CF = FF.graphicalItems,
                  AF = FF.xAxisMap,
                  uF = void 0 === AF ? {} : AF,
                  hF = FF.yAxisMap,
                  bW = void 0 === hF ? {} : hF,
                  dF = SF.width,
                  PF = SF.height,
                  RF = SF.children,
                  eF = SF.margin || {},
                  EF = (0, DF.k)(RF, BF),
                  QF = (0, DF.k)(RF, qW.d),
                  rW = Object.keys(bW).reduce((function(FF, WF) {
                    var SF = bW[WF],
                      CF = SF.orientation;
                    return SF.mirror || SF.hide ? FF : VS(VS({}, FF), {}, NS({}, CF, FF[CF] + SF.width))
                  }), {
                    left: eF.left || 0,
                    right: eF.right || 0
                  }),
                  gW = Object.keys(uF).reduce((function(FF, WF) {
                    var SF = uF[WF],
                      CF = SF.orientation;
                    return SF.mirror || SF.hide ? FF : VS(VS({}, FF), {}, NS({}, CF, iW()(FF, "".concat(CF)) + SF.height))
                  }), {
                    top: eF.top || 0,
                    bottom: eF.bottom || 0
                  }),
                  tW = VS(VS({}, gW), rW),
                  TF = tW.bottom;
                EF && (tW.bottom += EF.props.height || BF.defaultProps.height), QF && WF && (tW = (0, OF.c)(tW, CF, SF, WF));
                var aW = dF - tW.left - tW.right,
                  kW = PF - tW.top - tW.bottom;
                return VS(VS({
                  brushBottom: TF
                }, tW), {}, {
                  width: Math.max(aW, 0),
                  height: Math.max(kW, 0)
                })
              }(VS(VS({}, NF), {}, {
                props: AF,
                graphicalItems: kW
              }), null === CF || void 0 === CF ? void 0 : CF.legendBBox);
            Object.keys(NF).forEach((function(FF) {
              NF[FF] = QF(AF, NF[FF], LF, FF.replace("Map", ""), WF)
            }));
            var ZF = function(FF) {
                var WF = (0, xW.f)(FF),
                  SF = (0, OF.S)(WF, !1, !0);
                return {
                  tooltipTicks: SF,
                  orderedTooltipTicks: EF()(SF, (function(FF) {
                    return FF.coordinate
                  })),
                  tooltipAxis: WF,
                  tooltipAxisBandSize: (0, OF.p)(WF, SF)
                }
              }(NF["".concat(aW, "Map")]),
              oF = mW(AF, VS(VS({}, NF), {}, {
                dataStartIndex: uF,
                dataEndIndex: hF,
                updateId: bW,
                graphicalItems: kW,
                stackGroups: VF,
                offset: LF
              }));
            return VS(VS({
              formattedGraphicalItems: oF,
              graphicalItems: kW,
              offset: LF,
              stackGroups: VF
            }, ZF), NF)
          },
          oF = function(FF) {
            function SF(FF) {
              var AF, hF, dF;
              return function(FF, WF) {
                if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
              }(this, SF), NS(dF = QS(this, SF, [FF]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), NS(dF, "accessibilityManager", new sW), NS(dF, "handleLegendBBoxUpdate", (function(FF) {
                if (FF) {
                  var WF = dF.state,
                    SF = WF.dataStartIndex,
                    CF = WF.dataEndIndex,
                    AF = WF.updateId;
                  dF.setState(VS({
                    legendBBox: FF
                  }, ZF({
                    props: dF.props,
                    dataStartIndex: SF,
                    dataEndIndex: CF,
                    updateId: AF
                  }, VS(VS({}, dF.state), {}, {
                    legendBBox: FF
                  }))))
                }
              })), NS(dF, "handleReceiveSyncEvent", (function(FF, WF, SF) {
                if (dF.props.syncId === FF) {
                  if (SF === dF.eventEmitterSymbol && "function" !== typeof dF.props.syncMethod) return;
                  dF.applySyncEvent(WF)
                }
              })), NS(dF, "handleBrushChange", (function(FF) {
                var WF = FF.startIndex,
                  SF = FF.endIndex;
                if (WF !== dF.state.dataStartIndex || SF !== dF.state.dataEndIndex) {
                  var CF = dF.state.updateId;
                  dF.setState((function() {
                    return VS({
                      dataStartIndex: WF,
                      dataEndIndex: SF
                    }, ZF({
                      props: dF.props,
                      dataStartIndex: WF,
                      dataEndIndex: SF,
                      updateId: CF
                    }, dF.state))
                  })), dF.triggerSyncEvent({
                    dataStartIndex: WF,
                    dataEndIndex: SF
                  })
                }
              })), NS(dF, "handleMouseEnter", (function(FF) {
                var WF = dF.getMouseInfo(FF);
                if (WF) {
                  var SF = VS(VS({}, WF), {}, {
                    isTooltipActive: !0
                  });
                  dF.setState(SF), dF.triggerSyncEvent(SF);
                  var CF = dF.props.onMouseEnter;
                  bW()(CF) && CF(SF, FF)
                }
              })), NS(dF, "triggeredAfterMouseMove", (function(FF) {
                var WF = dF.getMouseInfo(FF),
                  SF = WF ? VS(VS({}, WF), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                dF.setState(SF), dF.triggerSyncEvent(SF);
                var CF = dF.props.onMouseMove;
                bW()(CF) && CF(SF, FF)
              })), NS(dF, "handleItemMouseEnter", (function(FF) {
                dF.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: FF,
                    activePayload: FF.tooltipPayload,
                    activeCoordinate: FF.tooltipPosition || {
                      x: FF.cx,
                      y: FF.cy
                    }
                  }
                }))
              })), NS(dF, "handleItemMouseLeave", (function() {
                dF.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), NS(dF, "handleMouseMove", (function(FF) {
                FF.persist(), dF.throttleTriggeredAfterMouseMove(FF)
              })), NS(dF, "handleMouseLeave", (function(FF) {
                dF.throttleTriggeredAfterMouseMove.cancel();
                var WF = {
                  isTooltipActive: !1
                };
                dF.setState(WF), dF.triggerSyncEvent(WF);
                var SF = dF.props.onMouseLeave;
                bW()(SF) && SF(WF, FF)
              })), NS(dF, "handleOuterEvent", (function(FF) {
                var WF, SF = (0, DF.o)(FF),
                  CF = iW()(dF.props, "".concat(SF));
                SF && bW()(CF) && CF(null !== (WF = /.*touch.*/i.test(SF) ? dF.getMouseInfo(FF.changedTouches[0]) : dF.getMouseInfo(FF)) && void 0 !== WF ? WF : {}, FF)
              })), NS(dF, "handleClick", (function(FF) {
                var WF = dF.getMouseInfo(FF);
                if (WF) {
                  var SF = VS(VS({}, WF), {}, {
                    isTooltipActive: !0
                  });
                  dF.setState(SF), dF.triggerSyncEvent(SF);
                  var CF = dF.props.onClick;
                  bW()(CF) && CF(SF, FF)
                }
              })), NS(dF, "handleMouseDown", (function(FF) {
                var WF = dF.props.onMouseDown;
                bW()(WF) && WF(dF.getMouseInfo(FF), FF)
              })), NS(dF, "handleMouseUp", (function(FF) {
                var WF = dF.props.onMouseUp;
                bW()(WF) && WF(dF.getMouseInfo(FF), FF)
              })), NS(dF, "handleTouchMove", (function(FF) {
                null != FF.changedTouches && FF.changedTouches.length > 0 && dF.throttleTriggeredAfterMouseMove(FF.changedTouches[0])
              })), NS(dF, "handleTouchStart", (function(FF) {
                null != FF.changedTouches && FF.changedTouches.length > 0 && dF.handleMouseDown(FF.changedTouches[0])
              })), NS(dF, "handleTouchEnd", (function(FF) {
                null != FF.changedTouches && FF.changedTouches.length > 0 && dF.handleMouseUp(FF.changedTouches[0])
              })), NS(dF, "handleDoubleClick", (function(FF) {
                var WF = dF.props.onDoubleClick;
                bW()(WF) && WF(dF.getMouseInfo(FF), FF)
              })), NS(dF, "handleContextMenu", (function(FF) {
                var WF = dF.props.onContextMenu;
                bW()(WF) && WF(dF.getMouseInfo(FF), FF)
              })), NS(dF, "triggerSyncEvent", (function(FF) {
                void 0 !== dF.props.syncId && MW.emit(cS, dF.props.syncId, FF, dF.eventEmitterSymbol)
              })), NS(dF, "applySyncEvent", (function(FF) {
                var WF = dF.props,
                  SF = WF.layout,
                  CF = WF.syncMethod,
                  AF = dF.state.updateId,
                  uF = FF.dataStartIndex,
                  hF = FF.dataEndIndex;
                if (void 0 !== FF.dataStartIndex || void 0 !== FF.dataEndIndex) dF.setState(VS({
                  dataStartIndex: uF,
                  dataEndIndex: hF
                }, ZF({
                  props: dF.props,
                  dataStartIndex: uF,
                  dataEndIndex: hF,
                  updateId: AF
                }, dF.state)));
                else if (void 0 !== FF.activeTooltipIndex) {
                  var bW = FF.chartX,
                    PF = FF.chartY,
                    RF = FF.activeTooltipIndex,
                    iW = dF.state,
                    eF = iW.offset,
                    EF = iW.tooltipTicks;
                  if (!eF) return;
                  if ("function" === typeof CF) RF = CF(EF, FF);
                  else if ("value" === CF) {
                    RF = -1;
                    for (var QF = 0; QF < EF.length; QF++)
                      if (EF[QF].value === FF.activeLabel) {
                        RF = QF;
                        break
                      }
                  }
                  var rW = VS(VS({}, eF), {}, {
                      x: eF.left,
                      y: eF.top
                    }),
                    gW = Math.min(bW, rW.x + rW.width),
                    tW = Math.min(PF, rW.y + rW.height),
                    TF = EF[RF] && EF[RF].value,
                    aW = YS(dF.state, dF.props.data, RF),
                    kW = EF[RF] ? {
                      x: "horizontal" === SF ? EF[RF].coordinate : gW,
                      y: "horizontal" === SF ? tW : EF[RF].coordinate
                    } : OS;
                  dF.setState(VS(VS({}, FF), {}, {
                    activeLabel: TF,
                    activeCoordinate: kW,
                    activePayload: aW,
                    activeTooltipIndex: RF
                  }))
                } else dF.setState(FF)
              })), NS(dF, "renderCursor", (function(FF) {
                var SF, AF = dF.state,
                  uF = AF.isTooltipActive,
                  hF = AF.activeCoordinate,
                  bW = AF.activePayload,
                  PF = AF.offset,
                  RF = AF.activeTooltipIndex,
                  iW = AF.tooltipAxisBandSize,
                  eF = dF.getTooltipEventType(),
                  EF = null !== (SF = FF.props.active) && void 0 !== SF ? SF : uF,
                  QF = dF.props.layout,
                  rW = FF.key || "_recharts-cursor";
                return CF.createElement(uS, {
                  key: rW,
                  activeCoordinate: hF,
                  activePayload: bW,
                  activeTooltipIndex: RF,
                  chartName: WF,
                  element: FF,
                  isActive: EF,
                  layout: QF,
                  offset: PF,
                  tooltipAxisBandSize: iW,
                  tooltipEventType: eF
                })
              })), NS(dF, "renderPolarAxis", (function(FF, WF, SF) {
                var AF = iW()(FF, "type.axisType"),
                  uF = iW()(dF.state, "".concat(AF, "Map")),
                  hF = FF.type.defaultProps,
                  bW = void 0 !== hF ? VS(VS({}, hF), FF.props) : FF.props,
                  PF = uF && uF[bW["".concat(AF, "Id")]];
                return (0, CF.cloneElement)(FF, VS(VS({}, PF), {}, {
                  className: (0, gW.d)(AF, PF.className),
                  key: FF.key || "".concat(WF, "-").concat(SF),
                  ticks: (0, OF.S)(PF, !0)
                }))
              })), NS(dF, "renderPolarGrid", (function(FF) {
                var WF = FF.props,
                  SF = WF.radialLines,
                  AF = WF.polarAngles,
                  uF = WF.polarRadius,
                  hF = dF.state,
                  bW = hF.radiusAxisMap,
                  PF = hF.angleAxisMap,
                  RF = (0, xW.f)(bW),
                  iW = (0, xW.f)(PF),
                  eF = iW.cx,
                  EF = iW.cy,
                  QF = iW.innerRadius,
                  rW = iW.outerRadius;
                return (0, CF.cloneElement)(FF, {
                  polarAngles: Array.isArray(AF) ? AF : (0, OF.S)(iW, !0).map((function(FF) {
                    return FF.coordinate
                  })),
                  polarRadius: Array.isArray(uF) ? uF : (0, OF.S)(RF, !0).map((function(FF) {
                    return FF.coordinate
                  })),
                  cx: eF,
                  cy: EF,
                  innerRadius: QF,
                  outerRadius: rW,
                  key: FF.key || "polar-grid",
                  radialLines: SF
                })
              })), NS(dF, "renderLegend", (function() {
                var FF = dF.state.formattedGraphicalItems,
                  WF = dF.props,
                  SF = WF.children,
                  AF = WF.width,
                  uF = WF.height,
                  hF = dF.props.margin || {},
                  bW = AF - (hF.left || 0) - (hF.right || 0),
                  PF = (0, vW.e)({
                    children: SF,
                    formattedGraphicalItems: FF,
                    legendWidth: bW,
                    legendContent: eF
                  });
                if (!PF) return null;
                var RF = PF.item,
                  iW = eS(PF, bC);
                return (0, CF.cloneElement)(RF, VS(VS({}, iW), {}, {
                  chartWidth: AF,
                  chartHeight: uF,
                  margin: hF,
                  onBBoxUpdate: dF.handleLegendBBoxUpdate
                }))
              })), NS(dF, "renderTooltip", (function() {
                var FF, WF = dF.props,
                  SF = WF.children,
                  AF = WF.accessibilityLayer,
                  uF = (0, DF.k)(SF, kW.e);
                if (!uF) return null;
                var hF = dF.state,
                  bW = hF.isTooltipActive,
                  PF = hF.activeCoordinate,
                  RF = hF.activePayload,
                  iW = hF.activeLabel,
                  eF = hF.offset,
                  EF = null !== (FF = uF.props.active) && void 0 !== FF ? FF : bW;
                return (0, CF.cloneElement)(uF, {
                  viewBox: VS(VS({}, eF), {}, {
                    x: eF.left,
                    y: eF.top
                  }),
                  active: EF,
                  label: iW,
                  payload: EF ? RF : [],
                  coordinate: PF,
                  accessibilityLayer: AF
                })
              })), NS(dF, "renderBrush", (function(FF) {
                var WF = dF.props,
                  SF = WF.margin,
                  AF = WF.data,
                  uF = dF.state,
                  hF = uF.offset,
                  bW = uF.dataStartIndex,
                  PF = uF.dataEndIndex,
                  RF = uF.updateId;
                return (0, CF.cloneElement)(FF, {
                  key: FF.key || "_recharts-brush",
                  onChange: (0, OF.j)(dF.handleBrushChange, FF.props.onChange),
                  data: AF,
                  x: (0, xW.t)(FF.props.x) ? FF.props.x : hF.left,
                  y: (0, xW.t)(FF.props.y) ? FF.props.y : hF.top + hF.height + hF.brushBottom - (SF.bottom || 0),
                  width: (0, xW.t)(FF.props.width) ? FF.props.width : hF.width,
                  startIndex: bW,
                  endIndex: PF,
                  updateId: "brush-".concat(RF)
                })
              })), NS(dF, "renderReferenceElement", (function(FF, WF, SF) {
                if (!FF) return null;
                var AF = dF.clipPathId,
                  uF = dF.state,
                  hF = uF.xAxisMap,
                  bW = uF.yAxisMap,
                  PF = uF.offset,
                  RF = FF.type.defaultProps || {},
                  iW = FF.props,
                  eF = iW.xAxisId,
                  EF = void 0 === eF ? RF.xAxisId : eF,
                  QF = iW.yAxisId,
                  rW = void 0 === QF ? RF.yAxisId : QF;
                return (0, CF.cloneElement)(FF, {
                  key: FF.key || "".concat(WF, "-").concat(SF),
                  xAxis: hF[EF],
                  yAxis: bW[rW],
                  viewBox: {
                    x: PF.left,
                    y: PF.top,
                    width: PF.width,
                    height: PF.height
                  },
                  clipPathId: AF
                })
              })), NS(dF, "renderActivePoints", (function(FF) {
                var WF = FF.item,
                  CF = FF.activePoint,
                  AF = FF.basePoint,
                  uF = FF.childIndex,
                  hF = FF.isRange,
                  bW = [],
                  dF = WF.props.key,
                  PF = void 0 !== WF.item.type.defaultProps ? VS(VS({}, WF.item.type.defaultProps), WF.item.props) : WF.item.props,
                  RF = PF.activeDot,
                  iW = VS(VS({
                    index: uF,
                    dataKey: PF.dataKey,
                    cx: CF.x,
                    cy: CF.y,
                    r: 4,
                    fill: (0, OF.N)(WF.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: CF.payload,
                    value: CF.value
                  }, (0, DF.e)(RF, !1)), (0, GW.j)(RF));
                return bW.push(SF.renderActiveDot(RF, iW, "".concat(dF, "-activePoint-").concat(uF))), AF ? bW.push(SF.renderActiveDot(RF, VS(VS({}, iW), {}, {
                  cx: AF.x,
                  cy: AF.y
                }), "".concat(dF, "-basePoint-").concat(uF))) : hF && bW.push(null), bW
              })), NS(dF, "renderGraphicChild", (function(FF, WF, SF) {
                var AF = dF.filterFormatItem(FF, WF, SF);
                if (!AF) return null;
                var hF = dF.getTooltipEventType(),
                  bW = dF.state,
                  PF = bW.isTooltipActive,
                  RF = bW.tooltipAxis,
                  iW = bW.activeTooltipIndex,
                  eF = bW.activeLabel,
                  EF = dF.props.children,
                  QF = (0, DF.k)(EF, kW.e),
                  rW = AF.props,
                  gW = rW.points,
                  tW = rW.isRange,
                  TF = rW.baseLine,
                  aW = void 0 !== AF.item.type.defaultProps ? VS(VS({}, AF.item.type.defaultProps), AF.item.props) : AF.item.props,
                  qW = aW.activeDot,
                  VF = aW.hide,
                  NF = aW.activeBar,
                  LF = aW.activeShape,
                  mW = Boolean(!VF && PF && QF && (qW || NF || LF)),
                  ZF = {};
                "axis" !== hF && QF && "click" === QF.props.trigger ? ZF = {
                  onClick: (0, OF.j)(dF.handleItemMouseEnter, FF.props.onClick)
                } : "axis" !== hF && (ZF = {
                  onMouseLeave: (0, OF.j)(dF.handleItemMouseLeave, FF.props.onMouseLeave),
                  onMouseEnter: (0, OF.j)(dF.handleItemMouseEnter, FF.props.onMouseEnter)
                });
                var oF = (0, CF.cloneElement)(FF, VS(VS({}, AF.props), ZF));
                if (mW) {
                  if (!(iW >= 0)) {
                    var YF, MF = (null !== (YF = dF.getItemByXY(dF.state.activeCoordinate)) && void 0 !== YF ? YF : {
                        graphicalItem: oF
                      }).graphicalItem,
                      cW = MF.item,
                      GF = void 0 === cW ? FF : cW,
                      zW = MF.childIndex,
                      IF = VS(VS(VS({}, AF.props), ZF), {}, {
                        activeIndex: zW
                      });
                    return [(0, CF.cloneElement)(GF, IF), null, null]
                  }
                  var fF, yW;
                  if (RF.dataKey && !RF.allowDuplicatedCategory) {
                    var sF = "function" === typeof RF.dataKey ? function(FF) {
                      return "function" === typeof RF.dataKey ? RF.dataKey(FF.payload) : null
                    } : "payload.".concat(RF.dataKey.toString());
                    fF = (0, xW.e)(gW, sF, eF), yW = tW && TF && (0, xW.e)(TF, sF, eF)
                  } else fF = null === gW || void 0 === gW ? void 0 : gW[iW], yW = tW && TF && TF[iW];
                  if (LF || NF) {
                    var nF = void 0 !== FF.props.activeIndex ? FF.props.activeIndex : iW;
                    return [(0, CF.cloneElement)(FF, VS(VS(VS({}, AF.props), ZF), {}, {
                      activeIndex: nF
                    })), null, null]
                  }
                  if (!uF()(fF)) return [oF].concat(TS(dF.renderActivePoints({
                    item: AF,
                    activePoint: fF,
                    basePoint: yW,
                    childIndex: iW,
                    isRange: tW
                  })))
                }
                return tW ? [oF, null, null] : [oF, null]
              })), NS(dF, "renderCustomized", (function(FF, WF, SF) {
                return (0, CF.cloneElement)(FF, VS(VS({
                  key: "recharts-customized-".concat(SF)
                }, dF.props), dF.state))
              })), NS(dF, "renderMap", {
                CartesianGrid: {
                  handler: xC,
                  once: !0
                },
                ReferenceArea: {
                  handler: dF.renderReferenceElement
                },
                ReferenceLine: {
                  handler: xC
                },
                ReferenceDot: {
                  handler: dF.renderReferenceElement
                },
                XAxis: {
                  handler: xC
                },
                YAxis: {
                  handler: xC
                },
                Brush: {
                  handler: dF.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: dF.renderGraphicChild
                },
                Line: {
                  handler: dF.renderGraphicChild
                },
                Area: {
                  handler: dF.renderGraphicChild
                },
                Radar: {
                  handler: dF.renderGraphicChild
                },
                RadialBar: {
                  handler: dF.renderGraphicChild
                },
                Scatter: {
                  handler: dF.renderGraphicChild
                },
                Pie: {
                  handler: dF.renderGraphicChild
                },
                Funnel: {
                  handler: dF.renderGraphicChild
                },
                Tooltip: {
                  handler: dF.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: dF.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: dF.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: dF.renderPolarAxis
                },
                Customized: {
                  handler: dF.renderCustomized
                }
              }), dF.clipPathId = "".concat(null !== (AF = FF.id) && void 0 !== AF ? AF : (0, xW.C)("recharts"), "-clip"), dF.throttleTriggeredAfterMouseMove = rW()(dF.triggeredAfterMouseMove, null !== (hF = FF.throttleDelay) && void 0 !== hF ? hF : 1e3 / 60), dF.state = {}, dF
            }
            return function(FF, WF) {
              if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
              FF.prototype = Object.create(WF && WF.prototype, {
                constructor: {
                  value: FF,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(FF, "prototype", {
                writable: !1
              }), WF && tC(FF, WF)
            }(SF, FF), AF = SF, dF = [{
              key: "componentDidMount",
              value: function() {
                var FF, WF;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (FF = this.props.margin.left) && void 0 !== FF ? FF : 0,
                    top: null !== (WF = this.props.margin.top) && void 0 !== WF ? WF : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var FF = this.props,
                  WF = FF.children,
                  SF = FF.data,
                  CF = FF.height,
                  AF = FF.layout,
                  uF = (0, DF.k)(WF, kW.e);
                if (uF) {
                  var hF = uF.props.defaultIndex;
                  if (!("number" !== typeof hF || hF < 0 || hF > this.state.tooltipTicks.length - 1)) {
                    var bW = this.state.tooltipTicks[hF] && this.state.tooltipTicks[hF].value,
                      dF = YS(this.state, SF, hF, bW),
                      PF = this.state.tooltipTicks[hF].coordinate,
                      RF = (this.state.offset.top + CF) / 2,
                      iW = "horizontal" === AF ? {
                        x: PF,
                        y: RF
                      } : {
                        y: PF,
                        x: RF
                      },
                      eF = this.state.formattedGraphicalItems.find((function(FF) {
                        return "Scatter" === FF.item.type.name
                      }));
                    eF && (iW = VS(VS({}, iW), eF.props.points[hF].tooltipPosition), dF = eF.props.points[hF].tooltipPayload);
                    var EF = {
                      activeTooltipIndex: hF,
                      isTooltipActive: !0,
                      activeLabel: bW,
                      activePayload: dF,
                      activeCoordinate: iW
                    };
                    this.setState(EF), this.renderCursor(uF), this.accessibilityManager.setIndex(hF)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(FF, WF) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== WF.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== FF.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== FF.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (SF = this.props.margin.left) && void 0 !== SF ? SF : 0,
                    top: null !== (CF = this.props.margin.top) && void 0 !== CF ? CF : 0
                  }
                }), null) : null;
                var SF, CF
              }
            }, {
              key: "componentDidUpdate",
              value: function(FF) {
                (0, DF.t)([(0, DF.k)(FF.children, kW.e)], [(0, DF.k)(this.props.children, kW.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var FF = (0, DF.k)(this.props.children, kW.e);
                if (FF && "boolean" === typeof FF.props.shared) {
                  var WF = FF.props.shared ? "axis" : "item";
                  return PF.indexOf(WF) >= 0 ? WF : hF
                }
                return hF
              }
            }, {
              key: "getMouseInfo",
              value: function(FF) {
                if (!this.container) return null;
                var WF = this.container,
                  SF = WF.getBoundingClientRect(),
                  CF = (0, jW.d)(SF),
                  AF = {
                    chartX: Math.round(FF.pageX - CF.left),
                    chartY: Math.round(FF.pageY - CF.top)
                  },
                  uF = SF.width / WF.offsetWidth || 1,
                  hF = this.inRange(AF.chartX, AF.chartY, uF);
                if (!hF) return null;
                var bW = this.state,
                  dF = bW.xAxisMap,
                  PF = bW.yAxisMap,
                  RF = this.getTooltipEventType(),
                  iW = MS(this.state, this.props.data, this.props.layout, hF);
                if ("axis" !== RF && dF && PF) {
                  var eF = (0, xW.f)(dF).scale,
                    EF = (0, xW.f)(PF).scale,
                    QF = eF && eF.invert ? eF.invert(AF.chartX) : null,
                    rW = EF && EF.invert ? EF.invert(AF.chartY) : null;
                  return VS(VS({}, AF), {}, {
                    xValue: QF,
                    yValue: rW
                  }, iW)
                }
                return iW ? VS(VS({}, AF), iW) : null
              }
            }, {
              key: "inRange",
              value: function(FF, WF) {
                var SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  CF = this.props.layout,
                  AF = FF / SF,
                  uF = WF / SF;
                if ("horizontal" === CF || "vertical" === CF) {
                  var hF = this.state.offset;
                  return AF >= hF.left && AF <= hF.left + hF.width && uF >= hF.top && uF <= hF.top + hF.height ? {
                    x: AF,
                    y: uF
                  } : null
                }
                var bW = this.state,
                  dF = bW.angleAxisMap,
                  PF = bW.radiusAxisMap;
                if (dF && PF) {
                  var RF = (0, xW.f)(dF);
                  return (0, ZW.e)({
                    x: AF,
                    y: uF
                  }, RF)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var FF = this.props.children,
                  WF = this.getTooltipEventType(),
                  SF = (0, DF.k)(FF, kW.e),
                  CF = {};
                return SF && "axis" === WF && (CF = "click" === SF.props.trigger ? {
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
                }), VS(VS({}, (0, GW.j)(this.props, this.handleOuterEvent)), CF)
              }
            }, {
              key: "addListener",
              value: function() {
                MW.on(cS, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                MW.removeListener(cS, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(FF, WF, SF) {
                for (var CF = this.state.formattedGraphicalItems, AF = 0, uF = CF.length; AF < uF; AF++) {
                  var hF = CF[AF];
                  if (hF.item === FF || hF.props.key === FF.key || WF === (0, DF.n)(hF.item.type) && SF === hF.childIndex) return hF
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var FF = this.clipPathId,
                  WF = this.state.offset,
                  SF = WF.left,
                  AF = WF.top,
                  uF = WF.height,
                  hF = WF.width;
                return CF.createElement("defs", null, CF.createElement("clipPath", {
                  id: FF
                }, CF.createElement("rect", {
                  x: SF,
                  y: AF,
                  height: uF,
                  width: hF
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var FF = this.state.xAxisMap;
                return FF ? Object.entries(FF).reduce((function(FF, WF) {
                  var SF = iC(WF, 2),
                    CF = SF[0],
                    AF = SF[1];
                  return VS(VS({}, FF), {}, NS({}, CF, AF.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var FF = this.state.yAxisMap;
                return FF ? Object.entries(FF).reduce((function(FF, WF) {
                  var SF = iC(WF, 2),
                    CF = SF[0],
                    AF = SF[1];
                  return VS(VS({}, FF), {}, NS({}, CF, AF.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(FF) {
                var WF;
                return null === (WF = this.state.xAxisMap) || void 0 === WF || null === (WF = WF[FF]) || void 0 === WF ? void 0 : WF.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(FF) {
                var WF;
                return null === (WF = this.state.yAxisMap) || void 0 === WF || null === (WF = WF[FF]) || void 0 === WF ? void 0 : WF.scale
              }
            }, {
              key: "getItemByXY",
              value: function(FF) {
                var WF = this.state,
                  SF = WF.formattedGraphicalItems,
                  CF = WF.activeItem;
                if (SF && SF.length)
                  for (var AF = 0, uF = SF.length; AF < uF; AF++) {
                    var hF = SF[AF],
                      bW = hF.props,
                      dF = hF.item,
                      PF = void 0 !== dF.type.defaultProps ? VS(VS({}, dF.type.defaultProps), dF.props) : dF.props,
                      RF = (0, DF.n)(dF.type);
                    if ("Bar" === RF) {
                      var iW = (bW.data || []).find((function(WF) {
                        return (0, NF.e)(FF, WF)
                      }));
                      if (iW) return {
                        graphicalItem: hF,
                        payload: iW
                      }
                    } else if ("RadialBar" === RF) {
                      var eF = (bW.data || []).find((function(WF) {
                        return (0, ZW.e)(FF, WF)
                      }));
                      if (eF) return {
                        graphicalItem: hF,
                        payload: eF
                      }
                    } else if ((0, nW.e)(hF, CF) || (0, nW.i)(hF, CF) || (0, nW.k)(hF, CF)) {
                      var EF = (0, nW.d)({
                          graphicalItem: hF,
                          activeTooltipItem: CF,
                          itemData: PF.data
                        }),
                        QF = void 0 === PF.activeIndex ? EF : PF.activeIndex;
                      return {
                        graphicalItem: VS(VS({}, hF), {}, {
                          childIndex: QF
                        }),
                        payload: (0, nW.k)(hF, CF) ? PF.data[EF] : hF.props.data[EF]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var FF = this;
                if (!(0, DF.E)(this)) return null;
                var WF, SF, AF = this.props,
                  uF = AF.children,
                  hF = AF.className,
                  bW = AF.width,
                  dF = AF.height,
                  PF = AF.style,
                  RF = AF.compact,
                  iW = AF.title,
                  eF = AF.desc,
                  EF = eS(AF, dS),
                  QF = (0, DF.e)(EF, !1);
                if (RF) return CF.createElement(hS.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, CF.createElement(TF.b, RS({}, QF, {
                  width: bW,
                  height: dF,
                  title: iW,
                  desc: eF
                }), this.renderClipPath(), (0, DF.A)(uF, this.renderMap)));
                this.props.accessibilityLayer && (QF.tabIndex = null !== (WF = this.props.tabIndex) && void 0 !== WF ? WF : 0, QF.role = null !== (SF = this.props.role) && void 0 !== SF ? SF : "application", QF.onKeyDown = function(WF) {
                  FF.accessibilityManager.keyboardEvent(WF)
                }, QF.onFocus = function() {
                  FF.accessibilityManager.focus()
                });
                var rW = this.parseEventsOfWrapper();
                return CF.createElement(hS.b, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, CF.createElement("div", RS({
                  className: (0, gW.d)("recharts-wrapper", hF),
                  style: VS({
                    position: "relative",
                    cursor: "default",
                    width: bW,
                    height: dF
                  }, PF)
                }, rW, {
                  ref: function(WF) {
                    FF.container = WF
                  }
                }), CF.createElement(TF.b, RS({}, QF, {
                  width: bW,
                  height: dF,
                  title: iW,
                  desc: eF,
                  style: mC
                }), this.renderClipPath(), (0, DF.A)(uF, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], dF && ES(AF.prototype, dF), RF && ES(AF, RF), Object.defineProperty(AF, "prototype", {
              writable: !1
            }), AF;
            var AF, dF, RF
          }(CF.Component);
        NS(oF, "displayName", WF), NS(oF, "defaultProps", VS({
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
        }, LF)), NS(oF, "getDerivedStateFromProps", (function(FF, WF) {
          var SF = FF.dataKey,
            CF = FF.data,
            AF = FF.children,
            hF = FF.width,
            bW = FF.height,
            dF = FF.layout,
            PF = FF.stackOffset,
            RF = FF.margin,
            iW = WF.dataStartIndex,
            eF = WF.dataEndIndex;
          if (void 0 === WF.updateId) {
            var EF = zC(FF);
            return VS(VS(VS({}, EF), {}, {
              updateId: 0
            }, ZF(VS(VS({
              props: FF
            }, EF), {}, {
              updateId: 0
            }), WF)), {}, {
              prevDataKey: SF,
              prevData: CF,
              prevWidth: hF,
              prevHeight: bW,
              prevLayout: dF,
              prevStackOffset: PF,
              prevMargin: RF,
              prevChildren: AF
            })
          }
          if (SF !== WF.prevDataKey || CF !== WF.prevData || hF !== WF.prevWidth || bW !== WF.prevHeight || dF !== WF.prevLayout || PF !== WF.prevStackOffset || !(0, oW.b)(RF, WF.prevMargin)) {
            var QF = zC(FF),
              rW = {
                chartX: WF.chartX,
                chartY: WF.chartY,
                isTooltipActive: WF.isTooltipActive
              },
              gW = VS(VS({}, MS(WF, CF, dF)), {}, {
                updateId: WF.updateId + 1
              }),
              tW = VS(VS(VS({}, QF), rW), gW);
            return VS(VS(VS({}, tW), ZF(VS({
              props: FF
            }, tW), WF)), {}, {
              prevDataKey: SF,
              prevData: CF,
              prevWidth: hF,
              prevHeight: bW,
              prevLayout: dF,
              prevStackOffset: PF,
              prevMargin: RF,
              prevChildren: AF
            })
          }
          if (!(0, DF.t)(AF, WF.prevChildren)) {
            var TF, aW, kW, qW, VF = (0, DF.k)(AF, BF),
              NF = VF && null !== (TF = null === (aW = VF.props) || void 0 === aW ? void 0 : aW.startIndex) && void 0 !== TF ? TF : iW,
              LF = VF && null !== (kW = null === (qW = VF.props) || void 0 === qW ? void 0 : qW.endIndex) && void 0 !== kW ? kW : eF,
              mW = NF !== iW || LF !== eF,
              OF = !uF()(CF) && !mW ? WF.updateId : WF.updateId + 1;
            return VS(VS({
              updateId: OF
            }, ZF(VS(VS({
              props: FF
            }, WF), {}, {
              updateId: OF,
              dataStartIndex: NF,
              dataEndIndex: LF
            }), WF)), {}, {
              prevChildren: AF,
              dataStartIndex: NF,
              dataEndIndex: LF
            })
          }
          return null
        })), NS(oF, "renderActiveDot", (function(FF, WF, SF) {
          var AF;
          return AF = (0, CF.isValidElement)(FF) ? (0, CF.cloneElement)(FF, WF) : bW()(FF) ? FF(WF) : CF.createElement(VF.c, WF), CF.createElement(aW.c, {
            className: "recharts-active-dot",
            key: SF
          }, AF)
        }));
        var YF = (0, CF.forwardRef)((function(FF, WF) {
          return CF.createElement(oF, RS({}, FF, {
            ref: WF
          }))
        }));
        return YF.displayName = oF.displayName, YF
      }
  },
  5246: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    var CF = function(FF) {
      return null
    };
    CF.displayName = "Cell"
  },
  5187: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => ZF
    });
    var CF = SF(46),
      AF = SF(4392),
      uF = SF.n(AF),
      hF = SF(4241),
      bW = SF.n(hF),
      dF = SF(4071),
      PF = SF.n(dF),
      RF = SF(4058),
      iW = SF(5092),
      eF = SF(4398),
      EF = SF(4132),
      QF = SF(5195);

    function rW(FF) {
      return rW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, rW(FF)
    }
    var gW = ["offset"];

    function tW(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return TF(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return TF(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return TF(FF, WF)
      }(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function aW(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function kW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function qW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? kW(Object(SF), !0).forEach((function(WF) {
          VF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : kW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function VF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != rW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != rW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == rW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function NF() {
      return NF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, NF.apply(this, arguments)
    }
    var DF = function(FF) {
        var WF = FF.value,
          SF = FF.formatter,
          CF = uF()(FF.children) ? WF : FF.children;
        return bW()(SF) ? SF(CF) : CF
      },
      LF = function(FF, WF, SF) {
        var AF, hF, bW = FF.position,
          dF = FF.viewBox,
          PF = FF.offset,
          iW = FF.className,
          eF = dF,
          rW = eF.cx,
          gW = eF.cy,
          tW = eF.innerRadius,
          TF = eF.outerRadius,
          aW = eF.startAngle,
          kW = eF.endAngle,
          qW = eF.clockWise,
          VF = (tW + TF) / 2,
          DF = function(FF, WF) {
            return (0, EF.y)(WF - FF) * Math.min(Math.abs(WF - FF), 360)
          }(aW, kW),
          LF = DF >= 0 ? 1 : -1;
        "insideStart" === bW ? (AF = aW + LF * PF, hF = qW) : "insideEnd" === bW ? (AF = kW - LF * PF, hF = !qW) : "end" === bW && (AF = kW + LF * PF, hF = qW), hF = DF <= 0 ? hF : !hF;
        var mW = (0, QF.f)(rW, gW, VF, AF),
          OF = (0, QF.f)(rW, gW, VF, AF + 359 * (hF ? 1 : -1)),
          xW = "M".concat(mW.x, ",").concat(mW.y, "\n    A").concat(VF, ",").concat(VF, ",0,1,").concat(hF ? 0 : 1, ",\n    ").concat(OF.x, ",").concat(OF.y),
          ZF = uF()(FF.id) ? (0, EF.C)("recharts-radial-line-") : FF.id;
        return CF.createElement("text", NF({}, SF, {
          dominantBaseline: "central",
          className: (0, RF.d)("recharts-radial-bar-label", iW)
        }), CF.createElement("defs", null, CF.createElement("path", {
          id: ZF,
          d: xW
        })), CF.createElement("textPath", {
          xlinkHref: "#".concat(ZF)
        }, WF))
      },
      mW = function(FF) {
        var WF = FF.viewBox,
          SF = FF.offset,
          CF = FF.position,
          AF = WF,
          uF = AF.cx,
          hF = AF.cy,
          bW = AF.innerRadius,
          dF = AF.outerRadius,
          PF = (AF.startAngle + AF.endAngle) / 2;
        if ("outside" === CF) {
          var RF = (0, QF.f)(uF, hF, dF + SF, PF),
            iW = RF.x;
          return {
            x: iW,
            y: RF.y,
            textAnchor: iW >= uF ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === CF) return {
          x: uF,
          y: hF,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === CF) return {
          x: uF,
          y: hF,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === CF) return {
          x: uF,
          y: hF,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var eF = (bW + dF) / 2,
          EF = (0, QF.f)(uF, hF, eF, PF);
        return {
          x: EF.x,
          y: EF.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      OF = function(FF) {
        var WF = FF.viewBox,
          SF = FF.parentViewBox,
          CF = FF.offset,
          AF = FF.position,
          uF = WF,
          hF = uF.x,
          bW = uF.y,
          dF = uF.width,
          RF = uF.height,
          iW = RF >= 0 ? 1 : -1,
          eF = iW * CF,
          QF = iW > 0 ? "end" : "start",
          rW = iW > 0 ? "start" : "end",
          gW = dF >= 0 ? 1 : -1,
          tW = gW * CF,
          TF = gW > 0 ? "end" : "start",
          aW = gW > 0 ? "start" : "end";
        if ("top" === AF) return qW(qW({}, {
          x: hF + dF / 2,
          y: bW - iW * CF,
          textAnchor: "middle",
          verticalAnchor: QF
        }), SF ? {
          height: Math.max(bW - SF.y, 0),
          width: dF
        } : {});
        if ("bottom" === AF) return qW(qW({}, {
          x: hF + dF / 2,
          y: bW + RF + eF,
          textAnchor: "middle",
          verticalAnchor: rW
        }), SF ? {
          height: Math.max(SF.y + SF.height - (bW + RF), 0),
          width: dF
        } : {});
        if ("left" === AF) {
          var kW = {
            x: hF - tW,
            y: bW + RF / 2,
            textAnchor: TF,
            verticalAnchor: "middle"
          };
          return qW(qW({}, kW), SF ? {
            width: Math.max(kW.x - SF.x, 0),
            height: RF
          } : {})
        }
        if ("right" === AF) {
          var VF = {
            x: hF + dF + tW,
            y: bW + RF / 2,
            textAnchor: aW,
            verticalAnchor: "middle"
          };
          return qW(qW({}, VF), SF ? {
            width: Math.max(SF.x + SF.width - VF.x, 0),
            height: RF
          } : {})
        }
        var NF = SF ? {
          width: dF,
          height: RF
        } : {};
        return "insideLeft" === AF ? qW({
          x: hF + tW,
          y: bW + RF / 2,
          textAnchor: aW,
          verticalAnchor: "middle"
        }, NF) : "insideRight" === AF ? qW({
          x: hF + dF - tW,
          y: bW + RF / 2,
          textAnchor: TF,
          verticalAnchor: "middle"
        }, NF) : "insideTop" === AF ? qW({
          x: hF + dF / 2,
          y: bW + eF,
          textAnchor: "middle",
          verticalAnchor: rW
        }, NF) : "insideBottom" === AF ? qW({
          x: hF + dF / 2,
          y: bW + RF - eF,
          textAnchor: "middle",
          verticalAnchor: QF
        }, NF) : "insideTopLeft" === AF ? qW({
          x: hF + tW,
          y: bW + eF,
          textAnchor: aW,
          verticalAnchor: rW
        }, NF) : "insideTopRight" === AF ? qW({
          x: hF + dF - tW,
          y: bW + eF,
          textAnchor: TF,
          verticalAnchor: rW
        }, NF) : "insideBottomLeft" === AF ? qW({
          x: hF + tW,
          y: bW + RF - eF,
          textAnchor: aW,
          verticalAnchor: QF
        }, NF) : "insideBottomRight" === AF ? qW({
          x: hF + dF - tW,
          y: bW + RF - eF,
          textAnchor: TF,
          verticalAnchor: QF
        }, NF) : PF()(AF) && ((0, EF.t)(AF.x) || (0, EF.v)(AF.x)) && ((0, EF.t)(AF.y) || (0, EF.v)(AF.y)) ? qW({
          x: hF + (0, EF.h)(AF.x, dF),
          y: bW + (0, EF.h)(AF.y, RF),
          textAnchor: "end",
          verticalAnchor: "end"
        }, NF) : qW({
          x: hF + dF / 2,
          y: bW + RF / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, NF)
      },
      xW = function(FF) {
        return "cx" in FF && (0, EF.t)(FF.cx)
      };

    function ZF(FF) {
      var WF, SF = FF.offset,
        AF = qW({
          offset: void 0 === SF ? 5 : SF
        }, aW(FF, gW)),
        hF = AF.viewBox,
        dF = AF.position,
        PF = AF.value,
        EF = AF.children,
        QF = AF.content,
        rW = AF.className,
        tW = void 0 === rW ? "" : rW,
        TF = AF.textBreakAll;
      if (!hF || uF()(PF) && uF()(EF) && !(0, CF.isValidElement)(QF) && !bW()(QF)) return null;
      if ((0, CF.isValidElement)(QF)) return (0, CF.cloneElement)(QF, AF);
      if (bW()(QF)) {
        if (WF = (0, CF.createElement)(QF, AF), (0, CF.isValidElement)(WF)) return WF
      } else WF = DF(AF);
      var kW = xW(hF),
        VF = (0, eF.e)(AF, !0);
      if (kW && ("insideStart" === dF || "insideEnd" === dF || "end" === dF)) return LF(AF, WF, VF);
      var ZF = kW ? mW(AF) : OF(AF);
      return CF.createElement(iW.e, NF({
        className: (0, RF.d)("recharts-label", tW)
      }, VF, ZF, {
        breakAll: TF
      }), WF)
    }
    ZF.displayName = "Label";
    var oF = function(FF) {
      var WF = FF.cx,
        SF = FF.cy,
        CF = FF.angle,
        AF = FF.startAngle,
        uF = FF.endAngle,
        hF = FF.r,
        bW = FF.radius,
        dF = FF.innerRadius,
        PF = FF.outerRadius,
        RF = FF.x,
        iW = FF.y,
        eF = FF.top,
        QF = FF.left,
        rW = FF.width,
        gW = FF.height,
        tW = FF.clockWise,
        TF = FF.labelViewBox;
      if (TF) return TF;
      if ((0, EF.t)(rW) && (0, EF.t)(gW)) {
        if ((0, EF.t)(RF) && (0, EF.t)(iW)) return {
          x: RF,
          y: iW,
          width: rW,
          height: gW
        };
        if ((0, EF.t)(eF) && (0, EF.t)(QF)) return {
          x: eF,
          y: QF,
          width: rW,
          height: gW
        }
      }
      return (0, EF.t)(RF) && (0, EF.t)(iW) ? {
        x: RF,
        y: iW,
        width: 0,
        height: 0
      } : (0, EF.t)(WF) && (0, EF.t)(SF) ? {
        cx: WF,
        cy: SF,
        startAngle: AF || CF || 0,
        endAngle: uF || CF || 0,
        innerRadius: dF || 0,
        outerRadius: PF || bW || hF || 0,
        clockWise: tW
      } : FF.viewBox ? FF.viewBox : {}
    };
    ZF.parseViewBox = oF, ZF.renderCallByParent = function(FF, WF) {
      var SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!FF || !FF.children && SF && !FF.label) return null;
      var AF = FF.children,
        uF = oF(FF),
        hF = (0, eF.h)(AF, ZF).map((function(FF, SF) {
          return (0, CF.cloneElement)(FF, {
            viewBox: WF || uF,
            key: "label-".concat(SF)
          })
        }));
      if (!SF) return hF;
      var dF = function(FF, WF) {
        return FF ? !0 === FF ? CF.createElement(ZF, {
          key: "label-implicit",
          viewBox: WF
        }) : (0, EF.p)(FF) ? CF.createElement(ZF, {
          key: "label-implicit",
          viewBox: WF,
          value: FF
        }) : (0, CF.isValidElement)(FF) ? FF.type === ZF ? (0, CF.cloneElement)(FF, {
          key: "label-implicit",
          viewBox: WF
        }) : CF.createElement(ZF, {
          key: "label-implicit",
          content: FF,
          viewBox: WF
        }) : bW()(FF) ? CF.createElement(ZF, {
          key: "label-implicit",
          content: FF,
          viewBox: WF
        }) : PF()(FF) ? CF.createElement(ZF, NF({
          viewBox: WF
        }, FF, {
          key: "label-implicit"
        })) : null : null
      }(FF.label, WF || uF);
      return [dF].concat(tW(hF))
    }
  },
  5249: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => OF
    });
    var CF = SF(46),
      AF = SF(4392),
      uF = SF.n(AF),
      hF = SF(4071),
      bW = SF.n(hF),
      dF = SF(4241),
      PF = SF.n(dF),
      RF = SF(5253),
      iW = SF.n(RF),
      eF = SF(5187),
      EF = SF(4941),
      QF = SF(4398),
      rW = SF(5107);

    function gW(FF) {
      return gW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, gW(FF)
    }
    var tW = ["valueAccessor"],
      TF = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function aW(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return kW(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return kW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return kW(FF, WF)
      }(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function qW() {
      return qW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, qW.apply(this, arguments)
    }

    function VF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function NF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? VF(Object(SF), !0).forEach((function(WF) {
          DF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : VF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function DF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != gW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != gW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == gW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function LF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }
    var mW = function(FF) {
      return Array.isArray(FF.value) ? iW()(FF.value) : FF.value
    };

    function OF(FF) {
      var WF = FF.valueAccessor,
        SF = void 0 === WF ? mW : WF,
        AF = LF(FF, tW),
        hF = AF.data,
        bW = AF.dataKey,
        dF = AF.clockWise,
        PF = AF.id,
        RF = AF.textBreakAll,
        iW = LF(AF, TF);
      return hF && hF.length ? CF.createElement(EF.c, {
        className: "recharts-label-list"
      }, hF.map((function(FF, WF) {
        var AF = uF()(bW) ? SF(FF, WF) : (0, rW.$)(FF && FF.payload, bW),
          hF = uF()(PF) ? {} : {
            id: "".concat(PF, "-").concat(WF)
          };
        return CF.createElement(eF.c, qW({}, (0, QF.e)(FF, !0), iW, hF, {
          parentViewBox: FF.parentViewBox,
          value: AF,
          textBreakAll: RF,
          viewBox: eF.c.parseViewBox(uF()(dF) ? FF : NF(NF({}, FF), {}, {
            clockWise: dF
          })),
          key: "label-".concat(WF),
          index: WF
        }))
      }))) : null
    }
    OF.displayName = "LabelList", OF.renderCallByParent = function(FF, WF) {
      var SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!FF || !FF.children && SF && !FF.label) return null;
      var AF = FF.children,
        uF = (0, QF.h)(AF, OF).map((function(FF, SF) {
          return (0, CF.cloneElement)(FF, {
            data: WF,
            key: "labelList-".concat(SF)
          })
        }));
      return SF ? [function(FF, WF) {
        return FF ? !0 === FF ? CF.createElement(OF, {
          key: "labelList-implicit",
          data: WF
        }) : CF.isValidElement(FF) || PF()(FF) ? CF.createElement(OF, {
          key: "labelList-implicit",
          data: WF,
          content: FF
        }) : bW()(FF) ? CF.createElement(OF, qW({
          data: WF
        }, FF, {
          key: "labelList-implicit"
        })) : null : null
      }(FF.label, WF)].concat(aW(uF)) : uF
    }
  },
  5017: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => yW
    });
    var CF = SF(46),
      AF = SF(4241),
      uF = SF.n(AF),
      hF = SF(4058),
      bW = SF(4396),
      dF = SF(4934),
      PF = SF(5023),
      RF = SF(4419);

    function iW(FF) {
      return iW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, iW(FF)
    }

    function eF() {
      return eF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, eF.apply(this, arguments)
    }

    function EF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function QF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, kW(CF.key), CF)
      }
    }

    function rW(FF, WF, SF) {
      return WF = tW(WF),
        function(FF, WF) {
          if (WF && ("object" === iW(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, gW() ? Reflect.construct(WF, SF || [], tW(FF).constructor) : WF.apply(FF, SF))
    }

    function gW() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (gW = function() {
        return !!FF
      })()
    }

    function tW(FF) {
      return tW = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, tW(FF)
    }

    function TF(FF, WF) {
      return TF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, TF(FF, WF)
    }

    function aW(FF, WF, SF) {
      return (WF = kW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function kW(FF) {
      var WF = function(FF, WF) {
        if ("object" != iW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != iW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == iW(WF) ? WF : WF + ""
    }
    var qW = 32,
      VF = function(FF) {
        function WF() {
          return function(FF, WF) {
            if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
          }(this, WF), rW(this, WF, arguments)
        }
        return function(FF, WF) {
          if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
          FF.prototype = Object.create(WF && WF.prototype, {
            constructor: {
              value: FF,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(FF, "prototype", {
            writable: !1
          }), WF && TF(FF, WF)
        }(WF, FF), SF = WF, AF = [{
          key: "renderIcon",
          value: function(FF) {
            var WF = this.props.inactiveColor,
              SF = 16,
              AF = qW / 6,
              uF = qW / 3,
              hF = FF.inactive ? WF : FF.color;
            if ("plainline" === FF.type) return CF.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: hF,
              strokeDasharray: FF.payload.strokeDasharray,
              x1: 0,
              y1: SF,
              x2: qW,
              y2: SF,
              className: "recharts-legend-icon"
            });
            if ("line" === FF.type) return CF.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: hF,
              d: "M0,".concat(SF, "h").concat(uF, "\n            A").concat(AF, ",").concat(AF, ",0,1,1,").concat(2 * uF, ",").concat(SF, "\n            H").concat(qW, "M").concat(2 * uF, ",").concat(SF, "\n            A").concat(AF, ",").concat(AF, ",0,1,1,").concat(uF, ",").concat(SF),
              className: "recharts-legend-icon"
            });
            if ("rect" === FF.type) return CF.createElement("path", {
              stroke: "none",
              fill: hF,
              d: "M0,".concat(4, "h").concat(qW, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (CF.isValidElement(FF.legendIcon)) {
              var bW = function(FF) {
                for (var WF = 1; WF < arguments.length; WF++) {
                  var SF = null != arguments[WF] ? arguments[WF] : {};
                  WF % 2 ? EF(Object(SF), !0).forEach((function(WF) {
                    aW(FF, WF, SF[WF])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : EF(Object(SF)).forEach((function(WF) {
                    Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
                  }))
                }
                return FF
              }({}, FF);
              return delete bW.legendIcon, CF.cloneElement(FF.legendIcon, bW)
            }
            return CF.createElement(PF.e, {
              fill: hF,
              cx: SF,
              cy: SF,
              size: qW,
              sizeType: "diameter",
              type: FF.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var FF = this,
              WF = this.props,
              SF = WF.payload,
              AF = WF.iconSize,
              PF = WF.layout,
              iW = WF.formatter,
              EF = WF.inactiveColor,
              QF = {
                x: 0,
                y: 0,
                width: qW,
                height: qW
              },
              rW = {
                display: "horizontal" === PF ? "inline-block" : "block",
                marginRight: 10
              },
              gW = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return SF.map((function(WF, SF) {
              var PF = WF.formatter || iW,
                tW = (0, hF.d)(aW(aW({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(SF), !0), "inactive", WF.inactive));
              if ("none" === WF.type) return null;
              var TF = uF()(WF.value) ? null : WF.value;
              (0, bW.c)(!uF()(WF.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var kW = WF.inactive ? EF : WF.color;
              return CF.createElement("li", eF({
                className: tW,
                style: rW,
                key: "legend-item-".concat(SF)
              }, (0, RF.l)(FF.props, WF, SF)), CF.createElement(dF.b, {
                width: AF,
                height: AF,
                viewBox: QF,
                style: gW
              }, FF.renderIcon(WF)), CF.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: kW
                }
              }, PF ? PF(TF, WF, SF) : TF))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var FF = this.props,
              WF = FF.payload,
              SF = FF.layout,
              AF = FF.align;
            if (!WF || !WF.length) return null;
            var uF = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === SF ? AF : "left"
            };
            return CF.createElement("ul", {
              className: "recharts-default-legend",
              style: uF
            }, this.renderItems())
          }
        }], AF && QF(SF.prototype, AF), iW && QF(SF, iW), Object.defineProperty(SF, "prototype", {
          writable: !1
        }), SF;
        var SF, AF, iW
      }(CF.PureComponent);
    aW(VF, "displayName", "Legend"), aW(VF, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var NF = SF(4132),
      DF = SF(4955);

    function LF(FF) {
      return LF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, LF(FF)
    }
    var mW = ["ref"];

    function OF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function xW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? OF(Object(SF), !0).forEach((function(WF) {
          GF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : OF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function ZF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, zW(CF.key), CF)
      }
    }

    function oF(FF, WF, SF) {
      return WF = MF(WF),
        function(FF, WF) {
          if (WF && ("object" === LF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, YF() ? Reflect.construct(WF, SF || [], MF(FF).constructor) : WF.apply(FF, SF))
    }

    function YF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (YF = function() {
        return !!FF
      })()
    }

    function MF(FF) {
      return MF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, MF(FF)
    }

    function cW(FF, WF) {
      return cW = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, cW(FF, WF)
    }

    function GF(FF, WF, SF) {
      return (WF = zW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function zW(FF) {
      var WF = function(FF, WF) {
        if ("object" != LF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != LF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == LF(WF) ? WF : WF + ""
    }

    function IF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function fF(FF) {
      return FF.value
    }
    var yW = function(FF) {
      function WF() {
        var FF;
        ! function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF);
        for (var SF = arguments.length, CF = new Array(SF), AF = 0; AF < SF; AF++) CF[AF] = arguments[AF];
        return GF(FF = oF(this, WF, [].concat(CF)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), FF
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && cW(FF, WF)
      }(WF, FF), SF = WF, uF = [{
        key: "getWithHeight",
        value: function(FF, WF) {
          var SF = xW(xW({}, this.defaultProps), FF.props).layout;
          return "vertical" === SF && (0, NF.t)(FF.props.height) ? {
            height: FF.props.height
          } : "horizontal" === SF ? {
            width: FF.props.width || WF
          } : null
        }
      }], (AF = [{
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
            var FF = this.wrapperNode.getBoundingClientRect();
            return FF.height = this.wrapperNode.offsetHeight, FF.width = this.wrapperNode.offsetWidth, FF
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var FF = this.props.onBBoxUpdate,
            WF = this.getBBox();
          WF ? (Math.abs(WF.width - this.lastBoundingBox.width) > 1 || Math.abs(WF.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = WF.width, this.lastBoundingBox.height = WF.height, FF && FF(WF)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, FF && FF(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? xW({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(FF) {
          var WF, SF, CF = this.props,
            AF = CF.layout,
            uF = CF.align,
            hF = CF.verticalAlign,
            bW = CF.margin,
            dF = CF.chartWidth,
            PF = CF.chartHeight;
          return FF && (void 0 !== FF.left && null !== FF.left || void 0 !== FF.right && null !== FF.right) || (WF = "center" === uF && "vertical" === AF ? {
            left: ((dF || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === uF ? {
            right: bW && bW.right || 0
          } : {
            left: bW && bW.left || 0
          }), FF && (void 0 !== FF.top && null !== FF.top || void 0 !== FF.bottom && null !== FF.bottom) || (SF = "middle" === hF ? {
            top: ((PF || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === hF ? {
            bottom: bW && bW.bottom || 0
          } : {
            top: bW && bW.top || 0
          }), xW(xW({}, WF), SF)
        }
      }, {
        key: "render",
        value: function() {
          var FF = this,
            WF = this.props,
            SF = WF.content,
            AF = WF.width,
            uF = WF.height,
            hF = WF.wrapperStyle,
            bW = WF.payloadUniqBy,
            dF = WF.payload,
            PF = xW(xW({
              position: "absolute",
              width: AF || "auto",
              height: uF || "auto"
            }, this.getDefaultPosition(hF)), hF);
          return CF.createElement("div", {
            className: "recharts-legend-wrapper",
            style: PF,
            ref: function(WF) {
              FF.wrapperNode = WF
            }
          }, function(FF, WF) {
            if (CF.isValidElement(FF)) return CF.cloneElement(FF, WF);
            if ("function" === typeof FF) return CF.createElement(FF, WF);
            WF.ref;
            var SF = IF(WF, mW);
            return CF.createElement(VF, SF)
          }(SF, xW(xW({}, this.props), {}, {
            payload: (0, DF.b)(dF, bW, fF)
          })))
        }
      }]) && ZF(SF.prototype, AF), uF && ZF(SF, uF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, AF, uF
    }(CF.PureComponent);
    GF(yW, "displayName", "Legend"), GF(yW, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4055: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => gW
    });
    var CF = SF(4058),
      AF = SF(46),
      uF = SF(4062),
      hF = SF.n(uF),
      bW = SF(4132),
      dF = SF(4396),
      PF = SF(4398);

    function RF(FF) {
      return RF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, RF(FF)
    }

    function iW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function eF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? iW(Object(SF), !0).forEach((function(WF) {
          EF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : iW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function EF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != RF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != RF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == RF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function QF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return rW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return rW(FF, WF)
      }(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }
    var gW = (0, AF.forwardRef)((function(FF, WF) {
      var SF = FF.aspect,
        uF = FF.initialDimension,
        RF = void 0 === uF ? {
          width: -1,
          height: -1
        } : uF,
        iW = FF.width,
        EF = void 0 === iW ? "100%" : iW,
        rW = FF.height,
        gW = void 0 === rW ? "100%" : rW,
        tW = FF.minWidth,
        TF = void 0 === tW ? 0 : tW,
        aW = FF.minHeight,
        kW = FF.maxHeight,
        qW = FF.children,
        VF = FF.debounce,
        NF = void 0 === VF ? 0 : VF,
        DF = FF.id,
        LF = FF.className,
        mW = FF.tL,
        OF = FF.style,
        xW = void 0 === OF ? {} : OF,
        ZF = (0, AF.useRef)(null),
        oF = (0, AF.useRef)();
      oF.current = mW, (0, AF.useImperativeHandle)(WF, (function() {
        return Object.defineProperty(ZF.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), ZF.current
          },
          configurable: !0
        })
      }));
      var YF = QF((0, AF.useState)({
          containerWidth: RF.width,
          containerHeight: RF.height
        }), 2),
        MF = YF[0],
        cW = YF[1],
        GF = (0, AF.useCallback)((function(FF, WF) {
          cW((function(SF) {
            var CF = Math.round(FF),
              AF = Math.round(WF);
            return SF.containerWidth === CF && SF.containerHeight === AF ? SF : {
              containerWidth: CF,
              containerHeight: AF
            }
          }))
        }), []);
      (0, AF.useEffect)((function() {
        var FF = function(FF) {
          var WF, SF = FF[0].contentRect,
            CF = SF.width,
            AF = SF.height;
          GF(CF, AF), null === (WF = oF.current) || void 0 === WF || WF.call(oF, CF, AF)
        };
        NF > 0 && (FF = hF()(FF, NF, {
          trailing: !0,
          leading: !1
        }));
        var WF = new ResizeObserver(FF),
          SF = ZF.current.getBoundingClientRect(),
          CF = SF.width,
          AF = SF.height;
        return GF(CF, AF), WF.observe(ZF.current),
          function() {
            WF.disconnect()
          }
      }), [GF, NF]);
      var zW = (0, AF.useMemo)((function() {
        var FF = MF.containerWidth,
          WF = MF.containerHeight;
        if (FF < 0 || WF < 0) return null;
        (0, dF.c)((0, bW.v)(EF) || (0, bW.v)(gW), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", EF, gW), (0, dF.c)(!SF || SF > 0, "The aspect(%s) must be greater than zero.", SF);
        var CF = (0, bW.v)(EF) ? FF : EF,
          uF = (0, bW.v)(gW) ? WF : gW;
        SF && SF > 0 && (CF ? uF = CF / SF : uF && (CF = uF * SF), kW && uF > kW && (uF = kW)), (0, dF.c)(CF > 0 || uF > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", CF, uF, EF, gW, TF, aW, SF);
        var hF = !Array.isArray(qW) && (0, PF.n)(qW.type).endsWith("Chart");
        return AF.Children.map(qW, (function(FF) {
          return AF.isValidElement(FF) ? (0, AF.cloneElement)(FF, eF({
            width: CF,
            height: uF
          }, hF ? {
            style: eF({
              height: "100%",
              width: "100%",
              maxHeight: uF,
              maxWidth: CF
            }, FF.props.style)
          } : {})) : FF
        }))
      }), [SF, qW, gW, kW, aW, TF, MF, EF]);
      return AF.createElement("div", {
        id: DF ? "".concat(DF) : void 0,
        className: (0, CF.d)("recharts-responsive-container", LF),
        style: eF(eF({}, xW), {}, {
          width: EF,
          height: gW,
          minWidth: TF,
          minHeight: aW,
          maxHeight: kW
        }),
        ref: ZF
      }, zW)
    }))
  },
  5092: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => sF
    });
    var CF = SF(46),
      AF = SF(4392),
      uF = SF.n(AF),
      hF = SF(4058),
      bW = SF(4132),
      dF = SF(4949),
      PF = SF(4398),
      RF = SF(5098);

    function iW(FF) {
      return iW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, iW(FF)
    }

    function eF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return EF(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return EF(FF, WF)
      }(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function QF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, rW(CF.key), CF)
      }
    }

    function rW(FF) {
      var WF = function(FF, WF) {
        if ("object" != iW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != iW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == iW(WF) ? WF : WF + ""
    }
    var gW = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      tW = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      TF = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      aW = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      kW = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      qW = Object.keys(kW),
      VF = "NaN";
    var NF = function() {
      function FF(WF, SF) {
        ! function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, FF), this.num = WF, this.unit = SF, this.num = WF, this.unit = SF, Number.isNaN(WF) && (this.unit = ""), "" === SF || TF.test(SF) || (this.num = NaN, this.unit = ""), qW.includes(SF) && (this.num = function(FF, WF) {
          return FF * kW[WF]
        }(WF, SF), this.unit = "px")
      }
      return WF = FF, CF = [{
        key: "parse",
        value: function(WF) {
          var SF, CF = eF(null !== (SF = aW.exec(WF)) && void 0 !== SF ? SF : [], 3),
            AF = CF[1],
            uF = CF[2];
          return new FF(parseFloat(AF), null !== uF && void 0 !== uF ? uF : "")
        }
      }], (SF = [{
        key: "add",
        value: function(WF) {
          return this.unit !== WF.unit ? new FF(NaN, "") : new FF(this.num + WF.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(WF) {
          return this.unit !== WF.unit ? new FF(NaN, "") : new FF(this.num - WF.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(WF) {
          return "" !== this.unit && "" !== WF.unit && this.unit !== WF.unit ? new FF(NaN, "") : new FF(this.num * WF.num, this.unit || WF.unit)
        }
      }, {
        key: "divide",
        value: function(WF) {
          return "" !== this.unit && "" !== WF.unit && this.unit !== WF.unit ? new FF(NaN, "") : new FF(this.num / WF.num, this.unit || WF.unit)
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
      }]) && QF(WF.prototype, SF), CF && QF(WF, CF), Object.defineProperty(WF, "prototype", {
        writable: !1
      }), WF;
      var WF, SF, CF
    }();

    function DF(FF) {
      if (FF.includes(VF)) return VF;
      for (var WF = FF; WF.includes("*") || WF.includes("/");) {
        var SF, CF = eF(null !== (SF = gW.exec(WF)) && void 0 !== SF ? SF : [], 4),
          AF = CF[1],
          uF = CF[2],
          hF = CF[3],
          bW = NF.parse(null !== AF && void 0 !== AF ? AF : ""),
          dF = NF.parse(null !== hF && void 0 !== hF ? hF : ""),
          PF = "*" === uF ? bW.multiply(dF) : bW.divide(dF);
        if (PF.isNaN()) return VF;
        WF = WF.replace(gW, PF.toString())
      }
      for (; WF.includes("+") || /.-\d+(?:\.\d+)?/.test(WF);) {
        var RF, iW = eF(null !== (RF = tW.exec(WF)) && void 0 !== RF ? RF : [], 4),
          EF = iW[1],
          QF = iW[2],
          rW = iW[3],
          TF = NF.parse(null !== EF && void 0 !== EF ? EF : ""),
          aW = NF.parse(null !== rW && void 0 !== rW ? rW : ""),
          kW = "+" === QF ? TF.add(aW) : TF.subtract(aW);
        if (kW.isNaN()) return VF;
        WF = WF.replace(tW, kW.toString())
      }
      return WF
    }
    var LF = /\(([^()]*)\)/;

    function mW(FF) {
      var WF = FF.replace(/\s+/g, "");
      return WF = function(FF) {
        for (var WF = FF; WF.includes("(");) {
          var SF = eF(LF.exec(WF), 2)[1];
          WF = WF.replace(LF, DF(SF))
        }
        return WF
      }(WF), WF = DF(WF)
    }

    function OF(FF) {
      var WF = function(FF) {
        try {
          return mW(FF)
        } catch (WF) {
          return VF
        }
      }(FF.slice(5, -1));
      return WF === VF ? "" : WF
    }
    var xW = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      ZF = ["dx", "dy", "angle", "className", "breakAll"];

    function oF() {
      return oF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, oF.apply(this, arguments)
    }

    function YF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function MF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return cW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return cW(FF, WF)
      }(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }
    var GF = /[ \f\n\r\t\v\u2028\u2029]+/,
      zW = function(FF) {
        var WF = FF.children,
          SF = FF.breakAll,
          CF = FF.style;
        try {
          var AF = [];
          return uF()(WF) || (AF = SF ? WF.toString().split("") : WF.toString().split(GF)), {
            wordsWithComputedWidth: AF.map((function(FF) {
              return {
                word: FF,
                width: (0, RF.f)(FF, CF).width
              }
            })),
            spaceWidth: SF ? 0 : (0, RF.f)("\xa0", CF).width
          }
        } catch (hF) {
          return null
        }
      },
      IF = function(FF) {
        return [{
          words: uF()(FF) ? [] : FF.toString().split(GF)
        }]
      },
      fF = function(FF) {
        var WF = FF.width,
          SF = FF.scaleToFit,
          CF = FF.children,
          AF = FF.style,
          uF = FF.breakAll,
          hF = FF.maxLines;
        if ((WF || SF) && !dF.c.isSsr) {
          var PF = zW({
            breakAll: uF,
            children: CF,
            style: AF
          });
          return PF ? function(FF, WF, SF, CF, AF) {
            var uF = FF.maxLines,
              hF = FF.children,
              dF = FF.style,
              PF = FF.breakAll,
              RF = (0, bW.t)(uF),
              iW = hF,
              eF = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(FF, WF) {
                  var uF = WF.word,
                    hF = WF.width,
                    bW = FF[FF.length - 1];
                  if (bW && (null == CF || AF || bW.width + hF + SF < Number(CF))) bW.words.push(uF), bW.width += hF + SF;
                  else {
                    var dF = {
                      words: [uF],
                      width: hF
                    };
                    FF.push(dF)
                  }
                  return FF
                }), [])
              },
              EF = eF(WF);
            if (!RF) return EF;
            for (var QF, rW = function(FF) {
                var WF = iW.slice(0, FF),
                  SF = zW({
                    breakAll: PF,
                    style: dF,
                    children: WF + "\u2026"
                  }).wordsWithComputedWidth,
                  AF = eF(SF),
                  hF = AF.length > uF || function(FF) {
                    return FF.reduce((function(FF, WF) {
                      return FF.width > WF.width ? FF : WF
                    }))
                  }(AF).width > Number(CF);
                return [hF, AF]
              }, gW = 0, tW = iW.length - 1, TF = 0; gW <= tW && TF <= iW.length - 1;) {
              var aW = Math.floor((gW + tW) / 2),
                kW = MF(rW(aW - 1), 2),
                qW = kW[0],
                VF = kW[1],
                NF = MF(rW(aW), 1)[0];
              if (qW || NF || (gW = aW + 1), qW && NF && (tW = aW - 1), !qW && NF) {
                QF = VF;
                break
              }
              TF++
            }
            return QF || EF
          }({
            breakAll: uF,
            children: CF,
            maxLines: hF,
            style: AF
          }, PF.wordsWithComputedWidth, PF.spaceWidth, WF, SF) : IF(CF)
        }
        return IF(CF)
      },
      yW = "#808080",
      sF = function(FF) {
        var WF = FF.x,
          SF = void 0 === WF ? 0 : WF,
          AF = FF.y,
          uF = void 0 === AF ? 0 : AF,
          dF = FF.lineHeight,
          RF = void 0 === dF ? "1em" : dF,
          iW = FF.capHeight,
          eF = void 0 === iW ? "0.71em" : iW,
          EF = FF.scaleToFit,
          QF = void 0 !== EF && EF,
          rW = FF.textAnchor,
          gW = void 0 === rW ? "start" : rW,
          tW = FF.verticalAnchor,
          TF = void 0 === tW ? "end" : tW,
          aW = FF.fill,
          kW = void 0 === aW ? yW : aW,
          qW = YF(FF, xW),
          VF = (0, CF.useMemo)((function() {
            return fF({
              breakAll: qW.breakAll,
              children: qW.children,
              maxLines: qW.maxLines,
              scaleToFit: QF,
              style: qW.style,
              width: qW.width
            })
          }), [qW.breakAll, qW.children, qW.maxLines, QF, qW.style, qW.width]),
          NF = qW.dx,
          DF = qW.dy,
          LF = qW.angle,
          mW = qW.className,
          MF = qW.breakAll,
          cW = YF(qW, ZF);
        if (!(0, bW.p)(SF) || !(0, bW.p)(uF)) return null;
        var GF, zW = SF + ((0, bW.t)(NF) ? NF : 0),
          IF = uF + ((0, bW.t)(DF) ? DF : 0);
        switch (TF) {
          case "start":
            GF = OF("calc(".concat(eF, ")"));
            break;
          case "middle":
            GF = OF("calc(".concat((VF.length - 1) / 2, " * -").concat(RF, " + (").concat(eF, " / 2))"));
            break;
          default:
            GF = OF("calc(".concat(VF.length - 1, " * -").concat(RF, ")"))
        }
        var sF = [];
        if (QF) {
          var nF = VF[0].width,
            HF = qW.width;
          sF.push("scale(".concat(((0, bW.t)(HF) ? HF / nF : 1) / nF, ")"))
        }
        return LF && sF.push("rotate(".concat(LF, ", ").concat(zW, ", ").concat(IF, ")")), sF.length && (cW.transform = sF.join(" ")), CF.createElement("text", oF({}, (0, PF.e)(cW, !0), {
          x: zW,
          y: IF,
          className: (0, hF.d)("recharts-text", mW),
          textAnchor: gW,
          fill: kW.includes("url") ? yW : kW
        }), VF.map((function(FF, WF) {
          var SF = FF.words.join(MF ? "" : " ");
          return CF.createElement("tspan", {
            x: zW,
            dy: 0 === WF ? GF : RF,
            key: "".concat(SF, "-").concat(WF)
          }, SF)
        })))
      }
  },
  4946: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => JF
    });
    var CF = SF(46),
      AF = SF(4476),
      uF = SF.n(AF),
      hF = SF(4392),
      bW = SF.n(hF),
      dF = SF(4058),
      PF = SF(4132);

    function RF(FF) {
      return RF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, RF(FF)
    }

    function iW() {
      return iW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, iW.apply(this, arguments)
    }

    function eF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return EF(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return EF(FF, WF)
      }(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function QF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function rW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? QF(Object(SF), !0).forEach((function(WF) {
          gW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : QF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function gW(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != RF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != RF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == RF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function tW(FF) {
      return Array.isArray(FF) && (0, PF.p)(FF[0]) && (0, PF.p)(FF[1]) ? FF.join(" ~ ") : FF
    }
    var TF = function(FF) {
      var WF = FF.separator,
        SF = void 0 === WF ? " : " : WF,
        AF = FF.contentStyle,
        hF = void 0 === AF ? {} : AF,
        RF = FF.itemStyle,
        EF = void 0 === RF ? {} : RF,
        QF = FF.labelStyle,
        gW = void 0 === QF ? {} : QF,
        TF = FF.payload,
        aW = FF.formatter,
        kW = FF.itemSorter,
        qW = FF.wrapperClassName,
        VF = FF.labelClassName,
        NF = FF.label,
        DF = FF.labelFormatter,
        LF = FF.accessibilityLayer,
        mW = void 0 !== LF && LF,
        OF = rW({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, hF),
        xW = rW({
          margin: 0
        }, gW),
        ZF = !bW()(NF),
        oF = ZF ? NF : "",
        YF = (0, dF.d)("recharts-default-tooltip", qW),
        MF = (0, dF.d)("recharts-tooltip-label", VF);
      ZF && DF && void 0 !== TF && null !== TF && (oF = DF(NF, TF));
      var cW = mW ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return CF.createElement("div", iW({
        className: YF,
        style: OF
      }, cW), CF.createElement("p", {
        className: MF,
        style: xW
      }, CF.isValidElement(oF) ? oF : "".concat(oF)), function() {
        if (TF && TF.length) {
          var FF = (kW ? uF()(TF, kW) : TF).map((function(FF, WF) {
            if ("none" === FF.type) return null;
            var AF = rW({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: FF.color || "#000"
              }, EF),
              uF = FF.formatter || aW || tW,
              hF = FF.value,
              bW = FF.name,
              dF = hF,
              RF = bW;
            if (uF && null != dF && null != RF) {
              var iW = uF(hF, bW, FF, WF, TF);
              if (Array.isArray(iW)) {
                var QF = eF(iW, 2);
                dF = QF[0], RF = QF[1]
              } else dF = iW
            }
            return CF.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(WF),
              style: AF
            }, (0, PF.p)(RF) ? CF.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, RF) : null, (0, PF.p)(RF) ? CF.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, SF) : null, CF.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, dF), CF.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, FF.unit || ""))
          }));
          return CF.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, FF)
        }
        return null
      }())
    };

    function aW(FF) {
      return aW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, aW(FF)
    }

    function kW(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != aW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != aW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == aW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var qW = "recharts-tooltip-wrapper",
      VF = {
        visibility: "hidden"
      };

    function NF(FF) {
      var WF = FF.coordinate,
        SF = FF.translateX,
        CF = FF.translateY;
      return (0, dF.d)(qW, kW(kW(kW(kW({}, "".concat(qW, "-right"), (0, PF.t)(SF) && WF && (0, PF.t)(WF.x) && SF >= WF.x), "".concat(qW, "-left"), (0, PF.t)(SF) && WF && (0, PF.t)(WF.x) && SF < WF.x), "".concat(qW, "-bottom"), (0, PF.t)(CF) && WF && (0, PF.t)(WF.y) && CF >= WF.y), "".concat(qW, "-top"), (0, PF.t)(CF) && WF && (0, PF.t)(WF.y) && CF < WF.y))
    }

    function DF(FF) {
      var WF = FF.allowEscapeViewBox,
        SF = FF.coordinate,
        CF = FF.key,
        AF = FF.offsetTopLeft,
        uF = FF.position,
        hF = FF.reverseDirection,
        bW = FF.tooltipDimension,
        dF = FF.viewBox,
        RF = FF.viewBoxDimension;
      if (uF && (0, PF.t)(uF[CF])) return uF[CF];
      var iW = SF[CF] - bW - AF,
        eF = SF[CF] + AF;
      return WF[CF] ? hF[CF] ? iW : eF : hF[CF] ? iW < dF[CF] ? Math.max(eF, dF[CF]) : Math.max(iW, dF[CF]) : eF + bW > dF[CF] + RF ? Math.max(iW, dF[CF]) : Math.max(eF, dF[CF])
    }

    function LF(FF) {
      return LF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, LF(FF)
    }

    function mW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function OF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? mW(Object(SF), !0).forEach((function(WF) {
          cW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : mW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function xW(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, GF(CF.key), CF)
      }
    }

    function ZF(FF, WF, SF) {
      return WF = YF(WF),
        function(FF, WF) {
          if (WF && ("object" === LF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, oF() ? Reflect.construct(WF, SF || [], YF(FF).constructor) : WF.apply(FF, SF))
    }

    function oF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (oF = function() {
        return !!FF
      })()
    }

    function YF(FF) {
      return YF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, YF(FF)
    }

    function MF(FF, WF) {
      return MF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, MF(FF, WF)
    }

    function cW(FF, WF, SF) {
      return (WF = GF(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function GF(FF) {
      var WF = function(FF, WF) {
        if ("object" != LF(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != LF(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == LF(WF) ? WF : WF + ""
    }
    var zW = function(FF) {
        function WF() {
          var FF;
          ! function(FF, WF) {
            if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
          }(this, WF);
          for (var SF = arguments.length, CF = new Array(SF), AF = 0; AF < SF; AF++) CF[AF] = arguments[AF];
          return cW(FF = ZF(this, WF, [].concat(CF)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), cW(FF, "handleKeyDown", (function(WF) {
            var SF, CF, AF, uF;
            "Escape" === WF.key && FF.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (SF = null === (CF = FF.props.coordinate) || void 0 === CF ? void 0 : CF.x) && void 0 !== SF ? SF : 0,
                y: null !== (AF = null === (uF = FF.props.coordinate) || void 0 === uF ? void 0 : uF.y) && void 0 !== AF ? AF : 0
              }
            })
          })), FF
        }
        return function(FF, WF) {
          if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
          FF.prototype = Object.create(WF && WF.prototype, {
            constructor: {
              value: FF,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(FF, "prototype", {
            writable: !1
          }), WF && MF(FF, WF)
        }(WF, FF), SF = WF, (AF = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var FF = this.wrapperNode.getBoundingClientRect();
              (Math.abs(FF.width - this.state.lastBoundingBox.width) > 1 || Math.abs(FF.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: FF.width,
                  height: FF.height
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
            var FF, WF;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (FF = this.props.coordinate) || void 0 === FF ? void 0 : FF.x) === this.state.dismissedAtCoordinate.x && (null === (WF = this.props.coordinate) || void 0 === WF ? void 0 : WF.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var FF = this,
              WF = this.props,
              SF = WF.active,
              AF = WF.allowEscapeViewBox,
              uF = WF.animationDuration,
              hF = WF.animationEasing,
              bW = WF.children,
              dF = WF.coordinate,
              PF = WF.hasPayload,
              RF = WF.isAnimationActive,
              iW = WF.offset,
              eF = WF.position,
              EF = WF.reverseDirection,
              QF = WF.useTranslate3d,
              rW = WF.viewBox,
              gW = WF.wrapperStyle,
              tW = function(FF) {
                var WF, SF, CF = FF.allowEscapeViewBox,
                  AF = FF.coordinate,
                  uF = FF.offsetTopLeft,
                  hF = FF.position,
                  bW = FF.reverseDirection,
                  dF = FF.tooltipBox,
                  PF = FF.useTranslate3d,
                  RF = FF.viewBox;
                return {
                  cssProperties: dF.height > 0 && dF.width > 0 && AF ? function(FF) {
                    var WF = FF.translateX,
                      SF = FF.translateY;
                    return {
                      transform: FF.useTranslate3d ? "translate3d(".concat(WF, "px, ").concat(SF, "px, 0)") : "translate(".concat(WF, "px, ").concat(SF, "px)")
                    }
                  }({
                    translateX: WF = DF({
                      allowEscapeViewBox: CF,
                      coordinate: AF,
                      key: "x",
                      offsetTopLeft: uF,
                      position: hF,
                      reverseDirection: bW,
                      tooltipDimension: dF.width,
                      viewBox: RF,
                      viewBoxDimension: RF.width
                    }),
                    translateY: SF = DF({
                      allowEscapeViewBox: CF,
                      coordinate: AF,
                      key: "y",
                      offsetTopLeft: uF,
                      position: hF,
                      reverseDirection: bW,
                      tooltipDimension: dF.height,
                      viewBox: RF,
                      viewBoxDimension: RF.height
                    }),
                    useTranslate3d: PF
                  }) : VF,
                  cssClasses: NF({
                    translateX: WF,
                    translateY: SF,
                    coordinate: AF
                  })
                }
              }({
                allowEscapeViewBox: AF,
                coordinate: dF,
                offsetTopLeft: iW,
                position: eF,
                reverseDirection: EF,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: QF,
                viewBox: rW
              }),
              TF = tW.cssClasses,
              aW = tW.cssProperties,
              kW = OF(OF({
                transition: RF && SF ? "transform ".concat(uF, "ms ").concat(hF) : void 0
              }, aW), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && SF && PF ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, gW);
            return CF.createElement("div", {
              tabIndex: -1,
              className: TF,
              style: kW,
              ref: function(WF) {
                FF.wrapperNode = WF
              }
            }, bW)
          }
        }]) && xW(SF.prototype, AF), uF && xW(SF, uF), Object.defineProperty(SF, "prototype", {
          writable: !1
        }), SF;
        var SF, AF, uF
      }(CF.PureComponent),
      IF = SF(4949),
      fF = SF(4955);

    function yW(FF) {
      return yW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, yW(FF)
    }

    function sF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function nF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? sF(Object(SF), !0).forEach((function(WF) {
          BF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : sF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function HF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, jW(CF.key), CF)
      }
    }

    function KF(FF, WF, SF) {
      return WF = XF(WF),
        function(FF, WF) {
          if (WF && ("object" === yW(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return function(FF) {
            if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return FF
          }(FF)
        }(FF, wF() ? Reflect.construct(WF, SF || [], XF(FF).constructor) : WF.apply(FF, SF))
    }

    function wF() {
      try {
        var FF = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (FF) {}
      return (wF = function() {
        return !!FF
      })()
    }

    function XF(FF) {
      return XF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, XF(FF)
    }

    function UF(FF, WF) {
      return UF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, UF(FF, WF)
    }

    function BF(FF, WF, SF) {
      return (WF = jW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function jW(FF) {
      var WF = function(FF, WF) {
        if ("object" != yW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != yW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == yW(WF) ? WF : WF + ""
    }

    function vW(FF) {
      return FF.dataKey
    }
    var JF = function(FF) {
      function WF() {
        return function(FF, WF) {
          if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
        }(this, WF), KF(this, WF, arguments)
      }
      return function(FF, WF) {
        if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
        FF.prototype = Object.create(WF && WF.prototype, {
          constructor: {
            value: FF,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(FF, "prototype", {
          writable: !1
        }), WF && UF(FF, WF)
      }(WF, FF), SF = WF, (AF = [{
        key: "render",
        value: function() {
          var FF = this,
            WF = this.props,
            SF = WF.active,
            AF = WF.allowEscapeViewBox,
            uF = WF.animationDuration,
            hF = WF.animationEasing,
            bW = WF.content,
            dF = WF.coordinate,
            PF = WF.filterNull,
            RF = WF.isAnimationActive,
            iW = WF.offset,
            eF = WF.payload,
            EF = WF.payloadUniqBy,
            QF = WF.position,
            rW = WF.reverseDirection,
            gW = WF.useTranslate3d,
            tW = WF.viewBox,
            aW = WF.wrapperStyle,
            kW = null !== eF && void 0 !== eF ? eF : [];
          PF && kW.length && (kW = (0, fF.b)(eF.filter((function(WF) {
            return null != WF.value && (!0 !== WF.hide || FF.props.includeHidden)
          })), EF, vW));
          var qW = kW.length > 0;
          return CF.createElement(zW, {
            allowEscapeViewBox: AF,
            animationDuration: uF,
            animationEasing: hF,
            isAnimationActive: RF,
            active: SF,
            coordinate: dF,
            hasPayload: qW,
            offset: iW,
            position: QF,
            reverseDirection: rW,
            useTranslate3d: gW,
            viewBox: tW,
            wrapperStyle: aW
          }, function(FF, WF) {
            return CF.isValidElement(FF) ? CF.cloneElement(FF, WF) : "function" === typeof FF ? CF.createElement(FF, WF) : CF.createElement(TF, WF)
          }(bW, nF(nF({}, this.props), {}, {
            payload: kW
          })))
        }
      }]) && HF(SF.prototype, AF), uF && HF(SF, uF), Object.defineProperty(SF, "prototype", {
        writable: !1
      }), SF;
      var SF, AF, uF
    }(CF.PureComponent);
    BF(JF, "displayName", "Tooltip"), BF(JF, "defaultProps", {
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
      isAnimationActive: !IF.c.isSsr,
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
  4941: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    var CF = SF(46),
      AF = SF(4058),
      uF = SF(4398),
      hF = ["children", "className"];

    function bW() {
      return bW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, bW.apply(this, arguments)
    }

    function dF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }
    var PF = CF.forwardRef((function(FF, WF) {
      var SF = FF.children,
        PF = FF.className,
        RF = dF(FF, hF),
        iW = (0, AF.d)("recharts-layer", PF);
      return CF.createElement("g", bW({
        className: iW
      }, (0, uF.e)(RF, !0), {
        ref: WF
      }), SF)
    }))
  },
  4934: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => PF
    });
    var CF = SF(46),
      AF = SF(4058),
      uF = SF(4398),
      hF = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function bW() {
      return bW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, bW.apply(this, arguments)
    }

    function dF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function PF(FF) {
      var WF = FF.children,
        SF = FF.width,
        PF = FF.height,
        RF = FF.viewBox,
        iW = FF.className,
        eF = FF.style,
        EF = FF.title,
        QF = FF.desc,
        rW = dF(FF, hF),
        gW = RF || {
          width: SF,
          height: PF,
          x: 0,
          y: 0
        },
        tW = (0, AF.d)("recharts-surface", iW);
      return CF.createElement("svg", bW({}, (0, uF.e)(rW, !0, "svg"), {
        className: tW,
        width: SF,
        height: PF,
        style: eF,
        viewBox: "".concat(gW.x, " ").concat(gW.y, " ").concat(gW.width, " ").concat(gW.height)
      }), CF.createElement("title", null, EF), CF.createElement("desc", null, QF), WF)
    }
  },
  5305: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => aW,
      f: () => VF,
      h: () => xW,
      k: () => OF,
      n: () => kW,
      p: () => mW,
      t: () => LF,
      w: () => qW,
      y: () => DF,
      C: () => NF
    });
    var CF = SF(46),
      AF = SF(4927),
      uF = SF(5310),
      hF = SF.n(uF),
      bW = SF(5218),
      dF = SF.n(bW),
      PF = SF(4201),
      RF = SF.n(PF)()((function(FF) {
        return {
          x: FF.left,
          y: FF.top,
          width: FF.width,
          height: FF.height
        }
      }), (function(FF) {
        return ["l", FF.left, "t", FF.top, "w", FF.width, "h", FF.height].join("")
      })),
      iW = SF(4132);
    var eF = (0, CF.createContext)(void 0),
      EF = (0, CF.createContext)(void 0),
      QF = (0, CF.createContext)(void 0),
      rW = (0, CF.createContext)({}),
      gW = (0, CF.createContext)(void 0),
      tW = (0, CF.createContext)(0),
      TF = (0, CF.createContext)(0),
      aW = function(FF) {
        var WF = FF.state,
          SF = WF.xAxisMap,
          AF = WF.yAxisMap,
          uF = WF.offset,
          hF = FF.clipPathId,
          bW = FF.children,
          dF = FF.width,
          PF = FF.height,
          iW = RF(uF);
        return CF.createElement(eF.Provider, {
          value: SF
        }, CF.createElement(EF.Provider, {
          value: AF
        }, CF.createElement(rW.Provider, {
          value: uF
        }, CF.createElement(QF.Provider, {
          value: iW
        }, CF.createElement(gW.Provider, {
          value: hF
        }, CF.createElement(tW.Provider, {
          value: PF
        }, CF.createElement(TF.Provider, {
          value: dF
        }, bW)))))))
      },
      kW = function() {
        return (0, CF.useContext)(gW)
      };
    var qW = function(FF) {
        var WF = (0, CF.useContext)(eF);
        null == WF && (0, AF.b)(!1);
        var SF = WF[FF];
        return null == SF && (0, AF.b)(!1), SF
      },
      VF = function() {
        var FF = (0, CF.useContext)(eF);
        return (0, iW.f)(FF)
      },
      NF = function() {
        var FF = (0, CF.useContext)(EF);
        return hF()(FF, (function(FF) {
          return dF()(FF.domain, Number.isFinite)
        })) || (0, iW.f)(FF)
      },
      DF = function(FF) {
        var WF = (0, CF.useContext)(EF);
        null == WF && (0, AF.b)(!1);
        var SF = WF[FF];
        return null == SF && (0, AF.b)(!1), SF
      },
      LF = function() {
        return (0, CF.useContext)(QF)
      },
      mW = function() {
        return (0, CF.useContext)(rW)
      },
      OF = function() {
        return (0, CF.useContext)(TF)
      },
      xW = function() {
        return (0, CF.useContext)(tW)
      }
  },
  5341: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => vW
    });
    var CF = SF(46);

    function AF() {}

    function uF(FF, WF, SF) {
      FF._context.bezierCurveTo((2 * FF._x0 + FF._x1) / 3, (2 * FF._y0 + FF._y1) / 3, (FF._x0 + 2 * FF._x1) / 3, (FF._y0 + 2 * FF._y1) / 3, (FF._x0 + 4 * FF._x1 + WF) / 6, (FF._y0 + 4 * FF._y1 + SF) / 6)
    }

    function hF(FF) {
      this._context = FF
    }

    function bW(FF) {
      this._context = FF
    }

    function dF(FF) {
      this._context = FF
    }
    hF.prototype = {
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
            uF(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(FF, WF) {
        switch (FF = +FF, WF = +WF, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(FF, WF) : this._context.moveTo(FF, WF);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            uF(this, FF, WF)
        }
        this._x0 = this._x1, this._x1 = FF, this._y0 = this._y1, this._y1 = WF
      }
    }, bW.prototype = {
      areaStart: AF,
      areaEnd: AF,
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
      point: function(FF, WF) {
        switch (FF = +FF, WF = +WF, this._point) {
          case 0:
            this._point = 1, this._x2 = FF, this._y2 = WF;
            break;
          case 1:
            this._point = 2, this._x3 = FF, this._y3 = WF;
            break;
          case 2:
            this._point = 3, this._x4 = FF, this._y4 = WF, this._context.moveTo((this._x0 + 4 * this._x1 + FF) / 6, (this._y0 + 4 * this._y1 + WF) / 6);
            break;
          default:
            uF(this, FF, WF)
        }
        this._x0 = this._x1, this._x1 = FF, this._y0 = this._y1, this._y1 = WF
      }
    }, dF.prototype = {
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
      point: function(FF, WF) {
        switch (FF = +FF, WF = +WF, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var SF = (this._x0 + 4 * this._x1 + FF) / 6,
              CF = (this._y0 + 4 * this._y1 + WF) / 6;
            this._line ? this._context.lineTo(SF, CF) : this._context.moveTo(SF, CF);
            break;
          case 3:
            this._point = 4;
          default:
            uF(this, FF, WF)
        }
        this._x0 = this._x1, this._x1 = FF, this._y0 = this._y1, this._y1 = WF
      }
    };
    class PF {
      constructor(FF, WF) {
        this._context = FF, this._x = WF
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
      point(FF, WF) {
        switch (FF = +FF, WF = +WF, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(FF, WF) : this._context.moveTo(FF, WF);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + FF) / 2, this._y0, this._x0, WF, FF, WF) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + WF) / 2, FF, this._y0, FF, WF)
        }
        this._x0 = FF, this._y0 = WF
      }
    }

    function RF(FF) {
      this._context = FF
    }

    function iW(FF) {
      this._context = FF
    }

    function eF(FF) {
      return new iW(FF)
    }

    function EF(FF) {
      return FF < 0 ? -1 : 1
    }

    function QF(FF, WF, SF) {
      var CF = FF._x1 - FF._x0,
        AF = WF - FF._x1,
        uF = (FF._y1 - FF._y0) / (CF || AF < 0 && -0),
        hF = (SF - FF._y1) / (AF || CF < 0 && -0),
        bW = (uF * AF + hF * CF) / (CF + AF);
      return (EF(uF) + EF(hF)) * Math.min(Math.abs(uF), Math.abs(hF), .5 * Math.abs(bW)) || 0
    }

    function rW(FF, WF) {
      var SF = FF._x1 - FF._x0;
      return SF ? (3 * (FF._y1 - FF._y0) / SF - WF) / 2 : WF
    }

    function gW(FF, WF, SF) {
      var CF = FF._x0,
        AF = FF._y0,
        uF = FF._x1,
        hF = FF._y1,
        bW = (uF - CF) / 3;
      FF._context.bezierCurveTo(CF + bW, AF + bW * WF, uF - bW, hF - bW * SF, uF, hF)
    }

    function tW(FF) {
      this._context = FF
    }

    function TF(FF) {
      this._context = new aW(FF)
    }

    function aW(FF) {
      this._context = FF
    }

    function kW(FF) {
      this._context = FF
    }

    function qW(FF) {
      var WF, SF, CF = FF.length - 1,
        AF = new Array(CF),
        uF = new Array(CF),
        hF = new Array(CF);
      for (AF[0] = 0, uF[0] = 2, hF[0] = FF[0] + 2 * FF[1], WF = 1; WF < CF - 1; ++WF) AF[WF] = 1, uF[WF] = 4, hF[WF] = 4 * FF[WF] + 2 * FF[WF + 1];
      for (AF[CF - 1] = 2, uF[CF - 1] = 7, hF[CF - 1] = 8 * FF[CF - 1] + FF[CF], WF = 1; WF < CF; ++WF) SF = AF[WF] / uF[WF - 1], uF[WF] -= SF, hF[WF] -= SF * hF[WF - 1];
      for (AF[CF - 1] = hF[CF - 1] / uF[CF - 1], WF = CF - 2; WF >= 0; --WF) AF[WF] = (hF[WF] - AF[WF + 1]) / uF[WF];
      for (uF[CF - 1] = (FF[CF] + AF[CF - 1]) / 2, WF = 0; WF < CF - 1; ++WF) uF[WF] = 2 * FF[WF + 1] - AF[WF + 1];
      return [AF, uF]
    }

    function VF(FF, WF) {
      this._context = FF, this._t = WF
    }
    RF.prototype = {
      areaStart: AF,
      areaEnd: AF,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(FF, WF) {
        FF = +FF, WF = +WF, this._point ? this._context.lineTo(FF, WF) : (this._point = 1, this._context.moveTo(FF, WF))
      }
    }, iW.prototype = {
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
      point: function(FF, WF) {
        switch (FF = +FF, WF = +WF, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(FF, WF) : this._context.moveTo(FF, WF);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(FF, WF)
        }
      }
    }, tW.prototype = {
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
            gW(this, this._t0, rW(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(FF, WF) {
        var SF = NaN;
        if (WF = +WF, (FF = +FF) !== this._x1 || WF !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(FF, WF) : this._context.moveTo(FF, WF);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, gW(this, rW(this, SF = QF(this, FF, WF)), SF);
              break;
            default:
              gW(this, this._t0, SF = QF(this, FF, WF))
          }
          this._x0 = this._x1, this._x1 = FF, this._y0 = this._y1, this._y1 = WF, this._t0 = SF
        }
      }
    }, (TF.prototype = Object.create(tW.prototype)).point = function(FF, WF) {
      tW.prototype.point.call(this, WF, FF)
    }, aW.prototype = {
      moveTo: function(FF, WF) {
        this._context.moveTo(WF, FF)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(FF, WF) {
        this._context.lineTo(WF, FF)
      },
      bezierCurveTo: function(FF, WF, SF, CF, AF, uF) {
        this._context.bezierCurveTo(WF, FF, CF, SF, uF, AF)
      }
    }, kW.prototype = {
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
        var FF = this._x,
          WF = this._y,
          SF = FF.length;
        if (SF)
          if (this._line ? this._context.lineTo(FF[0], WF[0]) : this._context.moveTo(FF[0], WF[0]), 2 === SF) this._context.lineTo(FF[1], WF[1]);
          else
            for (var CF = qW(FF), AF = qW(WF), uF = 0, hF = 1; hF < SF; ++uF, ++hF) this._context.bezierCurveTo(CF[0][uF], AF[0][uF], CF[1][uF], AF[1][uF], FF[hF], WF[hF]);
        (this._line || 0 !== this._line && 1 === SF) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(FF, WF) {
        this._x.push(+FF), this._y.push(+WF)
      }
    }, VF.prototype = {
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
      point: function(FF, WF) {
        switch (FF = +FF, WF = +WF, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(FF, WF) : this._context.moveTo(FF, WF);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, WF), this._context.lineTo(FF, WF);
            else {
              var SF = this._x * (1 - this._t) + FF * this._t;
              this._context.lineTo(SF, this._y), this._context.lineTo(SF, WF)
            }
        }
        this._x = FF, this._y = WF
      }
    };
    var NF = SF(5179),
      DF = SF(5071),
      LF = SF(5073);

    function mW(FF) {
      return FF[0]
    }

    function OF(FF) {
      return FF[1]
    }

    function xW(FF, WF) {
      var SF = (0, DF.c)(!0),
        CF = null,
        AF = eF,
        uF = null,
        hF = (0, LF.c)(bW);

      function bW(bW) {
        var dF, PF, RF, iW = (bW = (0, NF.c)(bW)).length,
          eF = !1;
        for (null == CF && (uF = AF(RF = hF())), dF = 0; dF <= iW; ++dF) !(dF < iW && SF(PF = bW[dF], dF, bW)) === eF && ((eF = !eF) ? uF.lineStart() : uF.lineEnd()), eF && uF.point(+FF(PF, dF, bW), +WF(PF, dF, bW));
        if (RF) return uF = null, RF + "" || null
      }
      return FF = "function" === typeof FF ? FF : void 0 === FF ? mW : (0, DF.c)(FF), WF = "function" === typeof WF ? WF : void 0 === WF ? OF : (0, DF.c)(WF), bW.x = function(WF) {
        return arguments.length ? (FF = "function" === typeof WF ? WF : (0, DF.c)(+WF), bW) : FF
      }, bW.y = function(FF) {
        return arguments.length ? (WF = "function" === typeof FF ? FF : (0, DF.c)(+FF), bW) : WF
      }, bW.defined = function(FF) {
        return arguments.length ? (SF = "function" === typeof FF ? FF : (0, DF.c)(!!FF), bW) : SF
      }, bW.curve = function(FF) {
        return arguments.length ? (AF = FF, null != CF && (uF = AF(CF)), bW) : AF
      }, bW.context = function(FF) {
        return arguments.length ? (null == FF ? CF = uF = null : uF = AF(CF = FF), bW) : CF
      }, bW
    }

    function ZF(FF, WF, SF) {
      var CF = null,
        AF = (0, DF.c)(!0),
        uF = null,
        hF = eF,
        bW = null,
        dF = (0, LF.c)(PF);

      function PF(PF) {
        var RF, iW, eF, EF, QF, rW = (PF = (0, NF.c)(PF)).length,
          gW = !1,
          tW = new Array(rW),
          TF = new Array(rW);
        for (null == uF && (bW = hF(QF = dF())), RF = 0; RF <= rW; ++RF) {
          if (!(RF < rW && AF(EF = PF[RF], RF, PF)) === gW)
            if (gW = !gW) iW = RF, bW.areaStart(), bW.lineStart();
            else {
              for (bW.lineEnd(), bW.lineStart(), eF = RF - 1; eF >= iW; --eF) bW.point(tW[eF], TF[eF]);
              bW.lineEnd(), bW.areaEnd()
            } gW && (tW[RF] = +FF(EF, RF, PF), TF[RF] = +WF(EF, RF, PF), bW.point(CF ? +CF(EF, RF, PF) : tW[RF], SF ? +SF(EF, RF, PF) : TF[RF]))
        }
        if (QF) return bW = null, QF + "" || null
      }

      function RF() {
        return xW().defined(AF).curve(hF).context(uF)
      }
      return FF = "function" === typeof FF ? FF : void 0 === FF ? mW : (0, DF.c)(+FF), WF = "function" === typeof WF ? WF : void 0 === WF ? (0, DF.c)(0) : (0, DF.c)(+WF), SF = "function" === typeof SF ? SF : void 0 === SF ? OF : (0, DF.c)(+SF), PF.x = function(WF) {
        return arguments.length ? (FF = "function" === typeof WF ? WF : (0, DF.c)(+WF), CF = null, PF) : FF
      }, PF.x0 = function(WF) {
        return arguments.length ? (FF = "function" === typeof WF ? WF : (0, DF.c)(+WF), PF) : FF
      }, PF.x1 = function(FF) {
        return arguments.length ? (CF = null == FF ? null : "function" === typeof FF ? FF : (0, DF.c)(+FF), PF) : CF
      }, PF.y = function(FF) {
        return arguments.length ? (WF = "function" === typeof FF ? FF : (0, DF.c)(+FF), SF = null, PF) : WF
      }, PF.y0 = function(FF) {
        return arguments.length ? (WF = "function" === typeof FF ? FF : (0, DF.c)(+FF), PF) : WF
      }, PF.y1 = function(FF) {
        return arguments.length ? (SF = null == FF ? null : "function" === typeof FF ? FF : (0, DF.c)(+FF), PF) : SF
      }, PF.lineX0 = PF.lineY0 = function() {
        return RF().x(FF).y(WF)
      }, PF.lineY1 = function() {
        return RF().x(FF).y(SF)
      }, PF.lineX1 = function() {
        return RF().x(CF).y(WF)
      }, PF.defined = function(FF) {
        return arguments.length ? (AF = "function" === typeof FF ? FF : (0, DF.c)(!!FF), PF) : AF
      }, PF.curve = function(FF) {
        return arguments.length ? (hF = FF, null != uF && (bW = hF(uF)), PF) : hF
      }, PF.context = function(FF) {
        return arguments.length ? (null == FF ? uF = bW = null : bW = hF(uF = FF), PF) : uF
      }, PF
    }
    var oF = SF(5026),
      YF = SF.n(oF),
      MF = SF(4241),
      cW = SF.n(MF),
      GF = SF(4058),
      zW = SF(4419),
      IF = SF(4398),
      fF = SF(4132);

    function yW(FF) {
      return yW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, yW(FF)
    }

    function sF() {
      return sF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, sF.apply(this, arguments)
    }

    function nF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function HF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? nF(Object(SF), !0).forEach((function(WF) {
          KF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : nF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function KF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != yW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != yW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == yW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var wF = {
        curveBasisClosed: function(FF) {
          return new bW(FF)
        },
        curveBasisOpen: function(FF) {
          return new dF(FF)
        },
        curveBasis: function(FF) {
          return new hF(FF)
        },
        curveBumpX: function(FF) {
          return new PF(FF, !0)
        },
        curveBumpY: function(FF) {
          return new PF(FF, !1)
        },
        curveLinearClosed: function(FF) {
          return new RF(FF)
        },
        curveLinear: eF,
        curveMonotoneX: function(FF) {
          return new tW(FF)
        },
        curveMonotoneY: function(FF) {
          return new TF(FF)
        },
        curveNatural: function(FF) {
          return new kW(FF)
        },
        curveStep: function(FF) {
          return new VF(FF, .5)
        },
        curveStepAfter: function(FF) {
          return new VF(FF, 1)
        },
        curveStepBefore: function(FF) {
          return new VF(FF, 0)
        }
      },
      XF = function(FF) {
        return FF.x === +FF.x && FF.y === +FF.y
      },
      UF = function(FF) {
        return FF.x
      },
      BF = function(FF) {
        return FF.y
      },
      jW = function(FF) {
        var WF, SF = FF.type,
          CF = void 0 === SF ? "linear" : SF,
          AF = FF.points,
          uF = void 0 === AF ? [] : AF,
          hF = FF.baseLine,
          bW = FF.layout,
          dF = FF.connectNulls,
          PF = void 0 !== dF && dF,
          RF = function(FF, WF) {
            if (cW()(FF)) return FF;
            var SF = "curve".concat(YF()(FF));
            return "curveMonotone" !== SF && "curveBump" !== SF || !WF ? wF[SF] || eF : wF["".concat(SF).concat("vertical" === WF ? "Y" : "X")]
          }(CF, bW),
          iW = PF ? uF.filter((function(FF) {
            return XF(FF)
          })) : uF;
        if (Array.isArray(hF)) {
          var EF = PF ? hF.filter((function(FF) {
              return XF(FF)
            })) : hF,
            QF = iW.map((function(FF, WF) {
              return HF(HF({}, FF), {}, {
                base: EF[WF]
              })
            }));
          return (WF = "vertical" === bW ? ZF().y(BF).x1(UF).x0((function(FF) {
            return FF.base.x
          })) : ZF().x(UF).y1(BF).y0((function(FF) {
            return FF.base.y
          }))).defined(XF).curve(RF), WF(QF)
        }
        return (WF = "vertical" === bW && (0, fF.t)(hF) ? ZF().y(BF).x1(UF).x0(hF) : (0, fF.t)(hF) ? ZF().x(UF).y1(BF).y0(hF) : xW().x(UF).y(BF)).defined(XF).curve(RF), WF(iW)
      },
      vW = function(FF) {
        var WF = FF.className,
          SF = FF.points,
          AF = FF.path,
          uF = FF.pathRef;
        if ((!SF || !SF.length) && !AF) return null;
        var hF = SF && SF.length ? jW(FF) : AF;
        return CF.createElement("path", sF({}, (0, IF.e)(FF, !1), (0, zW.j)(FF), {
          className: (0, GF.d)("recharts-curve", WF),
          d: hF,
          ref: uF
        }))
      }
  },
  5080: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => dF
    });
    var CF = SF(46),
      AF = SF(4058),
      uF = SF(4419),
      hF = SF(4398);

    function bW() {
      return bW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, bW.apply(this, arguments)
    }
    var dF = function(FF) {
      var WF = FF.cx,
        SF = FF.cy,
        dF = FF.r,
        PF = FF.className,
        RF = (0, AF.d)("recharts-dot", PF);
      return WF === +WF && SF === +SF && dF === +dF ? CF.createElement("circle", bW({}, (0, hF.e)(FF, !1), (0, uF.j)(FF), {
        className: RF,
        cx: WF,
        cy: SF,
        r: dF
      })) : null
    }
  },
  5082: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => tW,
      e: () => rW
    });
    var CF = SF(46),
      AF = SF(4058),
      uF = SF(5089),
      hF = SF(4398);

    function bW(FF) {
      return bW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, bW(FF)
    }

    function dF() {
      return dF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, dF.apply(this, arguments)
    }

    function PF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return RF(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return RF(FF, WF)
      }(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function iW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function eF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? iW(Object(SF), !0).forEach((function(WF) {
          EF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : iW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function EF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != bW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != bW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == bW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var QF = function(FF, WF, SF, CF, AF) {
        var uF, hF = Math.min(Math.abs(SF) / 2, Math.abs(CF) / 2),
          bW = CF >= 0 ? 1 : -1,
          dF = SF >= 0 ? 1 : -1,
          PF = CF >= 0 && SF >= 0 || CF < 0 && SF < 0 ? 1 : 0;
        if (hF > 0 && AF instanceof Array) {
          for (var RF = [0, 0, 0, 0], iW = 0; iW < 4; iW++) RF[iW] = AF[iW] > hF ? hF : AF[iW];
          uF = "M".concat(FF, ",").concat(WF + bW * RF[0]), RF[0] > 0 && (uF += "A ".concat(RF[0], ",").concat(RF[0], ",0,0,").concat(PF, ",").concat(FF + dF * RF[0], ",").concat(WF)), uF += "L ".concat(FF + SF - dF * RF[1], ",").concat(WF), RF[1] > 0 && (uF += "A ".concat(RF[1], ",").concat(RF[1], ",0,0,").concat(PF, ",\n        ").concat(FF + SF, ",").concat(WF + bW * RF[1])), uF += "L ".concat(FF + SF, ",").concat(WF + CF - bW * RF[2]), RF[2] > 0 && (uF += "A ".concat(RF[2], ",").concat(RF[2], ",0,0,").concat(PF, ",\n        ").concat(FF + SF - dF * RF[2], ",").concat(WF + CF)), uF += "L ".concat(FF + dF * RF[3], ",").concat(WF + CF), RF[3] > 0 && (uF += "A ".concat(RF[3], ",").concat(RF[3], ",0,0,").concat(PF, ",\n        ").concat(FF, ",").concat(WF + CF - bW * RF[3])), uF += "Z"
        } else if (hF > 0 && AF === +AF && AF > 0) {
          var eF = Math.min(hF, AF);
          uF = "M ".concat(FF, ",").concat(WF + bW * eF, "\n            A ").concat(eF, ",").concat(eF, ",0,0,").concat(PF, ",").concat(FF + dF * eF, ",").concat(WF, "\n            L ").concat(FF + SF - dF * eF, ",").concat(WF, "\n            A ").concat(eF, ",").concat(eF, ",0,0,").concat(PF, ",").concat(FF + SF, ",").concat(WF + bW * eF, "\n            L ").concat(FF + SF, ",").concat(WF + CF - bW * eF, "\n            A ").concat(eF, ",").concat(eF, ",0,0,").concat(PF, ",").concat(FF + SF - dF * eF, ",").concat(WF + CF, "\n            L ").concat(FF + dF * eF, ",").concat(WF + CF, "\n            A ").concat(eF, ",").concat(eF, ",0,0,").concat(PF, ",").concat(FF, ",").concat(WF + CF - bW * eF, " Z")
        } else uF = "M ".concat(FF, ",").concat(WF, " h ").concat(SF, " v ").concat(CF, " h ").concat(-SF, " Z");
        return uF
      },
      rW = function(FF, WF) {
        if (!FF || !WF) return !1;
        var SF = FF.x,
          CF = FF.y,
          AF = WF.x,
          uF = WF.y,
          hF = WF.width,
          bW = WF.height;
        if (Math.abs(hF) > 0 && Math.abs(bW) > 0) {
          var dF = Math.min(AF, AF + hF),
            PF = Math.max(AF, AF + hF),
            RF = Math.min(uF, uF + bW),
            iW = Math.max(uF, uF + bW);
          return SF >= dF && SF <= PF && CF >= RF && CF <= iW
        }
        return !1
      },
      gW = {
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
      tW = function(FF) {
        var WF = eF(eF({}, gW), FF),
          SF = (0, CF.useRef)(),
          bW = PF((0, CF.useState)(-1), 2),
          RF = bW[0],
          iW = bW[1];
        (0, CF.useEffect)((function() {
          if (SF.current && SF.current.getTotalLength) try {
            var FF = SF.current.getTotalLength();
            FF && iW(FF)
          } catch (WF) {}
        }), []);
        var EF = WF.x,
          rW = WF.y,
          tW = WF.width,
          TF = WF.height,
          aW = WF.radius,
          kW = WF.className,
          qW = WF.animationEasing,
          VF = WF.animationDuration,
          NF = WF.animationBegin,
          DF = WF.isAnimationActive,
          LF = WF.isUpdateAnimationActive;
        if (EF !== +EF || rW !== +rW || tW !== +tW || TF !== +TF || 0 === tW || 0 === TF) return null;
        var mW = (0, AF.d)("recharts-rectangle", kW);
        return LF ? CF.createElement(uF.e, {
          canBegin: RF > 0,
          from: {
            width: tW,
            height: TF,
            x: EF,
            y: rW
          },
          to: {
            width: tW,
            height: TF,
            x: EF,
            y: rW
          },
          duration: VF,
          animationEasing: qW,
          isActive: LF
        }, (function(FF) {
          var AF = FF.width,
            bW = FF.height,
            PF = FF.x,
            iW = FF.y;
          return CF.createElement(uF.e, {
            canBegin: RF > 0,
            from: "0px ".concat(-1 === RF ? 1 : RF, "px"),
            to: "".concat(RF, "px 0px"),
            attributeName: "strokeDasharray",
            aC: NF,
            duration: VF,
            isActive: DF,
            easing: qW
          }, CF.createElement("path", dF({}, (0, hF.e)(WF, !0), {
            className: mW,
            d: QF(PF, iW, AF, bW, aW),
            ref: SF
          })))
        })) : CF.createElement("path", dF({}, (0, hF.e)(WF, !0), {
          className: mW,
          d: QF(EF, rW, tW, TF, aW)
        }))
      }
  },
  5284: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => gW
    });
    var CF = SF(46),
      AF = SF(4058),
      uF = SF(4398),
      hF = SF(5195),
      bW = SF(4132);

    function dF(FF) {
      return dF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, dF(FF)
    }

    function PF() {
      return PF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, PF.apply(this, arguments)
    }

    function RF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function iW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? RF(Object(SF), !0).forEach((function(WF) {
          eF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : RF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function eF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != dF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != dF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == dF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var EF = function(FF) {
        var WF = FF.cx,
          SF = FF.cy,
          CF = FF.radius,
          AF = FF.angle,
          uF = FF.sign,
          bW = FF.isExternal,
          dF = FF.cornerRadius,
          PF = FF.cornerIsExternal,
          RF = dF * (bW ? 1 : -1) + CF,
          iW = Math.asin(dF / RF) / hF.c,
          eF = PF ? AF : AF + uF * iW,
          EF = PF ? AF - uF * iW : AF;
        return {
          center: (0, hF.f)(WF, SF, RF, eF),
          circleTangency: (0, hF.f)(WF, SF, CF, eF),
          lineTangency: (0, hF.f)(WF, SF, RF * Math.cos(iW * hF.c), EF),
          uh: iW
        }
      },
      QF = function(FF) {
        var WF = FF.cx,
          SF = FF.cy,
          CF = FF.innerRadius,
          AF = FF.outerRadius,
          uF = FF.startAngle,
          dF = function(FF, WF) {
            return (0, bW.y)(WF - FF) * Math.min(Math.abs(WF - FF), 359.999)
          }(uF, FF.endAngle),
          PF = uF + dF,
          RF = (0, hF.f)(WF, SF, AF, uF),
          iW = (0, hF.f)(WF, SF, AF, PF),
          eF = "M ".concat(RF.x, ",").concat(RF.y, "\n    A ").concat(AF, ",").concat(AF, ",0,\n    ").concat(+(Math.abs(dF) > 180), ",").concat(+(uF > PF), ",\n    ").concat(iW.x, ",").concat(iW.y, "\n  ");
        if (CF > 0) {
          var EF = (0, hF.f)(WF, SF, CF, uF),
            QF = (0, hF.f)(WF, SF, CF, PF);
          eF += "L ".concat(QF.x, ",").concat(QF.y, "\n            A ").concat(CF, ",").concat(CF, ",0,\n            ").concat(+(Math.abs(dF) > 180), ",").concat(+(uF <= PF), ",\n            ").concat(EF.x, ",").concat(EF.y, " Z")
        } else eF += "L ".concat(WF, ",").concat(SF, " Z");
        return eF
      },
      rW = {
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
      gW = function(FF) {
        var WF = iW(iW({}, rW), FF),
          SF = WF.cx,
          hF = WF.cy,
          dF = WF.innerRadius,
          RF = WF.outerRadius,
          eF = WF.cornerRadius,
          gW = WF.forceCornerRadius,
          tW = WF.cornerIsExternal,
          TF = WF.startAngle,
          aW = WF.endAngle,
          kW = WF.className;
        if (RF < dF || TF === aW) return null;
        var qW, VF = (0, AF.d)("recharts-sector", kW),
          NF = RF - dF,
          DF = (0, bW.h)(eF, NF, 0, !0);
        return qW = DF > 0 && Math.abs(TF - aW) < 360 ? function(FF) {
          var WF = FF.cx,
            SF = FF.cy,
            CF = FF.innerRadius,
            AF = FF.outerRadius,
            uF = FF.cornerRadius,
            hF = FF.forceCornerRadius,
            dF = FF.cornerIsExternal,
            PF = FF.startAngle,
            RF = FF.endAngle,
            iW = (0, bW.y)(RF - PF),
            eF = EF({
              cx: WF,
              cy: SF,
              radius: AF,
              angle: PF,
              sign: iW,
              cornerRadius: uF,
              cornerIsExternal: dF
            }),
            rW = eF.circleTangency,
            gW = eF.lineTangency,
            tW = eF.uh,
            TF = EF({
              cx: WF,
              cy: SF,
              radius: AF,
              angle: RF,
              sign: -iW,
              cornerRadius: uF,
              cornerIsExternal: dF
            }),
            aW = TF.circleTangency,
            kW = TF.lineTangency,
            qW = TF.uh,
            VF = dF ? Math.abs(PF - RF) : Math.abs(PF - RF) - tW - qW;
          if (VF < 0) return hF ? "M ".concat(gW.x, ",").concat(gW.y, "\n        a").concat(uF, ",").concat(uF, ",0,0,1,").concat(2 * uF, ",0\n        a").concat(uF, ",").concat(uF, ",0,0,1,").concat(2 * -uF, ",0\n      ") : QF({
            cx: WF,
            cy: SF,
            innerRadius: CF,
            outerRadius: AF,
            startAngle: PF,
            endAngle: RF
          });
          var NF = "M ".concat(gW.x, ",").concat(gW.y, "\n    A").concat(uF, ",").concat(uF, ",0,0,").concat(+(iW < 0), ",").concat(rW.x, ",").concat(rW.y, "\n    A").concat(AF, ",").concat(AF, ",0,").concat(+(VF > 180), ",").concat(+(iW < 0), ",").concat(aW.x, ",").concat(aW.y, "\n    A").concat(uF, ",").concat(uF, ",0,0,").concat(+(iW < 0), ",").concat(kW.x, ",").concat(kW.y, "\n  ");
          if (CF > 0) {
            var DF = EF({
                cx: WF,
                cy: SF,
                radius: CF,
                angle: PF,
                sign: iW,
                isExternal: !0,
                cornerRadius: uF,
                cornerIsExternal: dF
              }),
              LF = DF.circleTangency,
              mW = DF.lineTangency,
              OF = DF.uh,
              xW = EF({
                cx: WF,
                cy: SF,
                radius: CF,
                angle: RF,
                sign: -iW,
                isExternal: !0,
                cornerRadius: uF,
                cornerIsExternal: dF
              }),
              ZF = xW.circleTangency,
              oF = xW.lineTangency,
              YF = xW.uh,
              MF = dF ? Math.abs(PF - RF) : Math.abs(PF - RF) - OF - YF;
            if (MF < 0 && 0 === uF) return "".concat(NF, "L").concat(WF, ",").concat(SF, "Z");
            NF += "L".concat(oF.x, ",").concat(oF.y, "\n      A").concat(uF, ",").concat(uF, ",0,0,").concat(+(iW < 0), ",").concat(ZF.x, ",").concat(ZF.y, "\n      A").concat(CF, ",").concat(CF, ",0,").concat(+(MF > 180), ",").concat(+(iW > 0), ",").concat(LF.x, ",").concat(LF.y, "\n      A").concat(uF, ",").concat(uF, ",0,0,").concat(+(iW < 0), ",").concat(mW.x, ",").concat(mW.y, "Z")
          } else NF += "L".concat(WF, ",").concat(SF, "Z");
          return NF
        }({
          cx: SF,
          cy: hF,
          innerRadius: dF,
          outerRadius: RF,
          cornerRadius: Math.min(DF, NF / 2),
          forceCornerRadius: gW,
          cornerIsExternal: tW,
          startAngle: TF,
          endAngle: aW
        }) : QF({
          cx: SF,
          cy: hF,
          innerRadius: dF,
          outerRadius: RF,
          startAngle: TF,
          endAngle: aW
        }), CF.createElement("path", PF({}, (0, uF.e)(WF, !0), {
          className: VF,
          d: qW,
          role: "img"
        }))
      }
  },
  5023: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => HF
    });
    var CF = SF(46),
      AF = SF(5026),
      uF = SF.n(AF);
    Math.abs, Math.atan2;
    const hF = Math.cos,
      bW = (Math.max, Math.min, Math.sin),
      dF = Math.sqrt,
      PF = Math.PI,
      RF = 2 * PF;
    const iW = {
        draw(FF, WF) {
          const SF = dF(WF / PF);
          FF.moveTo(SF, 0), FF.arc(0, 0, SF, 0, RF)
        }
      },
      eF = {
        draw(FF, WF) {
          const SF = dF(WF / 5) / 2;
          FF.moveTo(-3 * SF, -SF), FF.lineTo(-SF, -SF), FF.lineTo(-SF, -3 * SF), FF.lineTo(SF, -3 * SF), FF.lineTo(SF, -SF), FF.lineTo(3 * SF, -SF), FF.lineTo(3 * SF, SF), FF.lineTo(SF, SF), FF.lineTo(SF, 3 * SF), FF.lineTo(-SF, 3 * SF), FF.lineTo(-SF, SF), FF.lineTo(-3 * SF, SF), FF.closePath()
        }
      },
      EF = dF(1 / 3),
      QF = 2 * EF,
      rW = {
        draw(FF, WF) {
          const SF = dF(WF / QF),
            CF = SF * EF;
          FF.moveTo(0, -SF), FF.lineTo(CF, 0), FF.lineTo(0, SF), FF.lineTo(-CF, 0), FF.closePath()
        }
      },
      gW = {
        draw(FF, WF) {
          const SF = dF(WF),
            CF = -SF / 2;
          FF.rect(CF, CF, SF, SF)
        }
      },
      tW = bW(PF / 10) / bW(7 * PF / 10),
      TF = bW(RF / 10) * tW,
      aW = -hF(RF / 10) * tW,
      kW = {
        draw(FF, WF) {
          const SF = dF(.8908130915292852 * WF),
            CF = TF * SF,
            AF = aW * SF;
          FF.moveTo(0, -SF), FF.lineTo(CF, AF);
          for (let uF = 1; uF < 5; ++uF) {
            const WF = RF * uF / 5,
              dF = hF(WF),
              PF = bW(WF);
            FF.lineTo(PF * SF, -dF * SF), FF.lineTo(dF * CF - PF * AF, PF * CF + dF * AF)
          }
          FF.closePath()
        }
      },
      qW = dF(3),
      VF = {
        draw(FF, WF) {
          const SF = -dF(WF / (3 * qW));
          FF.moveTo(0, 2 * SF), FF.lineTo(-qW * SF, -SF), FF.lineTo(qW * SF, -SF), FF.closePath()
        }
      },
      NF = -.5,
      DF = dF(3) / 2,
      LF = 1 / dF(12),
      mW = 3 * (LF / 2 + 1),
      OF = {
        draw(FF, WF) {
          const SF = dF(WF / mW),
            CF = SF / 2,
            AF = SF * LF,
            uF = CF,
            hF = SF * LF + SF,
            bW = -uF,
            PF = hF;
          FF.moveTo(CF, AF), FF.lineTo(uF, hF), FF.lineTo(bW, PF), FF.lineTo(NF * CF - DF * AF, DF * CF + NF * AF), FF.lineTo(NF * uF - DF * hF, DF * uF + NF * hF), FF.lineTo(NF * bW - DF * PF, DF * bW + NF * PF), FF.lineTo(NF * CF + DF * AF, NF * AF - DF * CF), FF.lineTo(NF * uF + DF * hF, NF * hF - DF * uF), FF.lineTo(NF * bW + DF * PF, NF * PF - DF * bW), FF.closePath()
        }
      };
    var xW = SF(5071),
      ZF = SF(5073);
    dF(3), dF(3);
    var oF = SF(4058),
      YF = SF(4398);

    function MF(FF) {
      return MF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, MF(FF)
    }
    var cW = ["type", "size", "sizeType"];

    function GF() {
      return GF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, GF.apply(this, arguments)
    }

    function zW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function IF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? zW(Object(SF), !0).forEach((function(WF) {
          fF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : zW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function fF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != MF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != MF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == MF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function yW(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }
    var sF = {
        symbolCircle: iW,
        symbolCross: eF,
        symbolDiamond: rW,
        symbolSquare: gW,
        symbolStar: kW,
        symbolTriangle: VF,
        symbolWye: OF
      },
      nF = Math.PI / 180,
      HF = function(FF) {
        var WF = FF.type,
          SF = void 0 === WF ? "circle" : WF,
          AF = FF.size,
          hF = void 0 === AF ? 64 : AF,
          bW = FF.sizeType,
          dF = void 0 === bW ? "area" : bW,
          PF = IF(IF({}, yW(FF, cW)), {}, {
            type: SF,
            size: hF,
            sizeType: dF
          }),
          RF = PF.className,
          eF = PF.cx,
          EF = PF.cy,
          QF = (0, YF.e)(PF, !0);
        return eF === +eF && EF === +EF && hF === +hF ? CF.createElement("path", GF({}, QF, {
          className: (0, oF.d)("recharts-symbols", RF),
          transform: "translate(".concat(eF, ", ").concat(EF, ")"),
          d: function() {
            var FF = function(FF) {
                var WF = "symbol".concat(uF()(FF));
                return sF[WF] || iW
              }(SF),
              WF = function(FF, WF) {
                let SF = null,
                  CF = (0, ZF.c)(AF);

                function AF() {
                  let AF;
                  if (SF || (SF = AF = CF()), FF.apply(this, arguments).draw(SF, +WF.apply(this, arguments)), AF) return SF = null, AF + "" || null
                }
                return FF = "function" === typeof FF ? FF : (0, xW.c)(FF || iW), WF = "function" === typeof WF ? WF : (0, xW.c)(void 0 === WF ? 64 : +WF), AF.type = function(WF) {
                  return arguments.length ? (FF = "function" === typeof WF ? WF : (0, xW.c)(WF), AF) : FF
                }, AF.size = function(FF) {
                  return arguments.length ? (WF = "function" === typeof FF ? FF : (0, xW.c)(+FF), AF) : WF
                }, AF.context = function(FF) {
                  return arguments.length ? (SF = null == FF ? null : FF, AF) : SF
                }, AF
              }().type(FF).size(function(FF, WF, SF) {
                if ("area" === WF) return FF;
                switch (SF) {
                  case "cross":
                    return 5 * FF * FF / 9;
                  case "diamond":
                    return .5 * FF * FF / Math.sqrt(3);
                  case "square":
                    return FF * FF;
                  case "star":
                    var CF = 18 * nF;
                    return 1.25 * FF * FF * (Math.tan(CF) - Math.tan(2 * CF) * Math.pow(Math.tan(CF), 2));
                  case "triangle":
                    return Math.sqrt(3) * FF * FF / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * FF * FF / 8;
                  default:
                    return Math.PI * FF * FF / 4
                }
              }(hF, dF, SF));
            return WF()
          }()
        })) : null
      };
    HF.registerSymbol = function(FF, WF) {
      sF["symbol".concat(uF()(FF))] = WF
    }
  },
  5258: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => fF,
      d: () => XF,
      e: () => yW,
      i: () => sF,
      k: () => nF
    });
    var CF = SF(46),
      AF = SF(4241),
      uF = SF.n(AF),
      hF = SF(5267),
      bW = SF.n(hF),
      dF = SF(5280),
      PF = SF.n(dF),
      RF = SF(5156),
      iW = SF.n(RF),
      eF = SF(5082),
      EF = SF(4058),
      QF = SF(5089),
      rW = SF(4398);

    function gW(FF) {
      return gW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, gW(FF)
    }

    function tW() {
      return tW = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF) Object.prototype.hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, tW.apply(this, arguments)
    }

    function TF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return aW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return aW(FF, WF)
      }(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function kW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function qW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? kW(Object(SF), !0).forEach((function(WF) {
          VF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : kW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function VF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != gW(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != gW(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == gW(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var NF = function(FF, WF, SF, CF, AF) {
        var uF, hF = SF - CF;
        return uF = "M ".concat(FF, ",").concat(WF), uF += "L ".concat(FF + SF, ",").concat(WF), uF += "L ".concat(FF + SF - hF / 2, ",").concat(WF + AF), uF += "L ".concat(FF + SF - hF / 2 - CF, ",").concat(WF + AF), uF += "L ".concat(FF, ",").concat(WF, " Z")
      },
      DF = {
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
      LF = function(FF) {
        var WF = qW(qW({}, DF), FF),
          SF = (0, CF.useRef)(),
          AF = TF((0, CF.useState)(-1), 2),
          uF = AF[0],
          hF = AF[1];
        (0, CF.useEffect)((function() {
          if (SF.current && SF.current.getTotalLength) try {
            var FF = SF.current.getTotalLength();
            FF && hF(FF)
          } catch (WF) {}
        }), []);
        var bW = WF.x,
          dF = WF.y,
          PF = WF.upperWidth,
          RF = WF.lowerWidth,
          iW = WF.height,
          eF = WF.className,
          gW = WF.animationEasing,
          aW = WF.animationDuration,
          kW = WF.animationBegin,
          VF = WF.isUpdateAnimationActive;
        if (bW !== +bW || dF !== +dF || PF !== +PF || RF !== +RF || iW !== +iW || 0 === PF && 0 === RF || 0 === iW) return null;
        var LF = (0, EF.d)("recharts-trapezoid", eF);
        return VF ? CF.createElement(QF.e, {
          canBegin: uF > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: iW,
            x: bW,
            y: dF
          },
          to: {
            upperWidth: PF,
            lowerWidth: RF,
            height: iW,
            x: bW,
            y: dF
          },
          duration: aW,
          animationEasing: gW,
          isActive: VF
        }, (function(FF) {
          var AF = FF.upperWidth,
            hF = FF.lowerWidth,
            bW = FF.height,
            dF = FF.x,
            PF = FF.y;
          return CF.createElement(QF.e, {
            canBegin: uF > 0,
            from: "0px ".concat(-1 === uF ? 1 : uF, "px"),
            to: "".concat(uF, "px 0px"),
            attributeName: "strokeDasharray",
            aC: kW,
            duration: aW,
            easing: gW
          }, CF.createElement("path", tW({}, (0, rW.e)(WF, !0), {
            className: LF,
            d: NF(dF, PF, AF, hF, bW),
            ref: SF
          })))
        })) : CF.createElement("g", null, CF.createElement("path", tW({}, (0, rW.e)(WF, !0), {
          className: LF,
          d: NF(bW, dF, PF, RF, iW)
        })))
      },
      mW = SF(5284),
      OF = SF(4941),
      xW = SF(5023),
      ZF = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function oF(FF) {
      return oF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, oF(FF)
    }

    function YF(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function MF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function cW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? MF(Object(SF), !0).forEach((function(WF) {
          GF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : MF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function GF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != oF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != oF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == oF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function zW(FF, WF) {
      return cW(cW({}, WF), FF)
    }

    function IF(FF) {
      var WF = FF.shapeType,
        SF = FF.elementProps;
      switch (WF) {
        case "rectangle":
          return CF.createElement(eF.d, SF);
        case "trapezoid":
          return CF.createElement(LF, SF);
        case "sector":
          return CF.createElement(mW.e, SF);
        case "symbols":
          if (function(FF) {
              return "symbols" === FF
            }(WF)) return CF.createElement(xW.e, SF);
          break;
        default:
          return null
      }
    }

    function fF(FF) {
      var WF, SF = FF.option,
        AF = FF.shapeType,
        hF = FF.propTransformer,
        dF = void 0 === hF ? zW : hF,
        RF = FF.activeClassName,
        iW = void 0 === RF ? "recharts-active-shape" : RF,
        eF = FF.isActive,
        EF = YF(FF, ZF);
      if ((0, CF.isValidElement)(SF)) WF = (0, CF.cloneElement)(SF, cW(cW({}, EF), function(FF) {
        return (0, CF.isValidElement)(FF) ? FF.props : FF
      }(SF)));
      else if (uF()(SF)) WF = SF(EF);
      else if (bW()(SF) && !PF()(SF)) {
        var QF = dF(SF, EF);
        WF = CF.createElement(IF, {
          shapeType: AF,
          elementProps: QF
        })
      } else {
        var rW = EF;
        WF = CF.createElement(IF, {
          shapeType: AF,
          elementProps: rW
        })
      }
      return eF ? CF.createElement(OF.c, {
        className: iW
      }, WF) : WF
    }

    function yW(FF, WF) {
      return null != WF && "trapezoids" in FF.props
    }

    function sF(FF, WF) {
      return null != WF && "sectors" in FF.props
    }

    function nF(FF, WF) {
      return null != WF && "points" in FF.props
    }

    function HF(FF, WF) {
      var SF, CF, AF = FF.x === (null === WF || void 0 === WF || null === (SF = WF.labelViewBox) || void 0 === SF ? void 0 : SF.x) || FF.x === WF.x,
        uF = FF.y === (null === WF || void 0 === WF || null === (CF = WF.labelViewBox) || void 0 === CF ? void 0 : CF.y) || FF.y === WF.y;
      return AF && uF
    }

    function KF(FF, WF) {
      var SF = FF.endAngle === WF.endAngle,
        CF = FF.startAngle === WF.startAngle;
      return SF && CF
    }

    function wF(FF, WF) {
      var SF = FF.x === WF.x,
        CF = FF.y === WF.y,
        AF = FF.z === WF.z;
      return SF && CF && AF
    }

    function XF(FF) {
      var WF = FF.activeTooltipItem,
        SF = FF.graphicalItem,
        CF = FF.itemData,
        AF = function(FF, WF) {
          var SF;
          return yW(FF, WF) ? SF = "trapezoids" : sF(FF, WF) ? SF = "sectors" : nF(FF, WF) && (SF = "points"), SF
        }(SF, WF),
        uF = function(FF, WF) {
          var SF, CF;
          return yW(FF, WF) ? null === (SF = WF.tooltipPayload) || void 0 === SF || null === (SF = SF[0]) || void 0 === SF || null === (SF = SF.payload) || void 0 === SF ? void 0 : SF.payload : sF(FF, WF) ? null === (CF = WF.tooltipPayload) || void 0 === CF || null === (CF = CF[0]) || void 0 === CF || null === (CF = CF.payload) || void 0 === CF ? void 0 : CF.payload : nF(FF, WF) ? WF.payload : {}
        }(SF, WF),
        hF = CF.filter((function(FF, CF) {
          var hF = iW()(uF, FF),
            bW = SF.props[AF].filter((function(FF) {
              var CF = function(FF, WF) {
                var SF;
                return yW(FF, WF) ? SF = HF : sF(FF, WF) ? SF = KF : nF(FF, WF) && (SF = wF), SF
              }(SF, WF);
              return CF(FF, WF)
            })),
            dF = SF.props[AF].indexOf(bW[bW.length - 1]);
          return hF && CF === dF
        }));
      return CF.indexOf(hF[hF.length - 1])
    }
  },
  5205: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => qW,
      f: () => tW,
      g: () => VF,
      h: () => aW,
      i: () => TF
    });
    var CF = SF(5208),
      AF = SF.n(CF),
      uF = SF(5218),
      hF = SF.n(uF),
      bW = SF(5107),
      dF = SF(4398),
      PF = SF(4132),
      RF = SF(5238);

    function iW(FF) {
      return iW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, iW(FF)
    }

    function eF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, gW(CF.key), CF)
      }
    }

    function EF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function QF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? EF(Object(SF), !0).forEach((function(WF) {
          rW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : EF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function rW(FF, WF, SF) {
      return (WF = gW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function gW(FF) {
      var WF = function(FF, WF) {
        if ("object" != iW(FF) || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != iW(CF)) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == iW(WF) ? WF : WF + ""
    }
    var tW = function(FF, WF, SF, CF, AF) {
        var uF = FF.width,
          hF = FF.height,
          iW = FF.layout,
          eF = FF.children,
          EF = Object.keys(WF),
          gW = {
            left: SF.left,
            leftMirror: SF.left,
            right: uF - SF.right,
            rightMirror: uF - SF.right,
            top: SF.top,
            topMirror: SF.top,
            bottom: hF - SF.bottom,
            bottomMirror: hF - SF.bottom
          },
          tW = !!(0, dF.k)(eF, RF.b);
        return EF.reduce((function(uF, hF) {
          var dF, RF, eF, EF, TF, aW = WF[hF],
            kW = aW.orientation,
            qW = aW.domain,
            VF = aW.padding,
            NF = void 0 === VF ? {} : VF,
            DF = aW.mirror,
            LF = aW.reversed,
            mW = "".concat(kW).concat(DF ? "Mirror" : "");
          if ("number" === aW.type && ("gap" === aW.padding || "no-gap" === aW.padding)) {
            var OF = qW[1] - qW[0],
              xW = 1 / 0,
              ZF = aW.categoricalDomain.sort(PF.c);
            if (ZF.forEach((function(FF, WF) {
                WF > 0 && (xW = Math.min((FF || 0) - (ZF[WF - 1] || 0), xW))
              })), Number.isFinite(xW)) {
              var oF = xW / OF,
                YF = "vertical" === aW.layout ? SF.height : SF.width;
              if ("gap" === aW.padding && (dF = oF * YF / 2), "no-gap" === aW.padding) {
                var MF = (0, PF.h)(FF.barCategoryGap, oF * YF),
                  cW = oF * YF / 2;
                dF = cW - MF - (cW - MF) / YF * MF
              }
            }
          }
          RF = "xAxis" === CF ? [SF.left + (NF.left || 0) + (dF || 0), SF.left + SF.width - (NF.right || 0) - (dF || 0)] : "yAxis" === CF ? "horizontal" === iW ? [SF.top + SF.height - (NF.bottom || 0), SF.top + (NF.top || 0)] : [SF.top + (NF.top || 0) + (dF || 0), SF.top + SF.height - (NF.bottom || 0) - (dF || 0)] : aW.range, LF && (RF = [RF[1], RF[0]]);
          var GF = (0, bW.mb)(aW, AF, tW),
            zW = GF.scale,
            IF = GF.realScaleType;
          zW.domain(qW).range(RF), (0, bW.f)(zW);
          var fF = (0, bW.V)(zW, QF(QF({}, aW), {}, {
            realScaleType: IF
          }));
          "xAxis" === CF ? (TF = "top" === kW && !DF || "bottom" === kW && DF, eF = SF.left, EF = gW[mW] - TF * aW.height) : "yAxis" === CF && (TF = "left" === kW && !DF || "right" === kW && DF, eF = gW[mW] - TF * aW.width, EF = SF.top);
          var yW = QF(QF(QF({}, aW), fF), {}, {
            realScaleType: IF,
            x: eF,
            y: EF,
            scale: zW,
            width: "xAxis" === CF ? SF.width : aW.width,
            height: "yAxis" === CF ? SF.height : aW.height
          });
          return yW.bandSize = (0, bW.p)(yW, fF), aW.hide || "xAxis" !== CF ? aW.hide || (gW[mW] += (TF ? -1 : 1) * yW.width) : gW[mW] += (TF ? -1 : 1) * yW.height, QF(QF({}, uF), {}, rW({}, hF, yW))
        }), {})
      },
      TF = function(FF, WF) {
        var SF = FF.x,
          CF = FF.y,
          AF = WF.x,
          uF = WF.y;
        return {
          x: Math.min(SF, AF),
          y: Math.min(CF, uF),
          width: Math.abs(AF - SF),
          height: Math.abs(uF - CF)
        }
      },
      aW = function(FF) {
        var WF = FF.x1,
          SF = FF.y1,
          CF = FF.x2,
          AF = FF.y2;
        return TF({
          x: WF,
          y: SF
        }, {
          x: CF,
          y: AF
        })
      },
      kW = function() {
        function FF(WF) {
          ! function(FF, WF) {
            if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
          }(this, FF), this.scale = WF
        }
        return WF = FF, SF = [{
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
          value: function(FF) {
            var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              SF = WF.bandAware,
              CF = WF.position;
            if (void 0 !== FF) {
              if (CF) switch (CF) {
                case "start":
                default:
                  return this.scale(FF);
                case "middle":
                  var AF = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(FF) + AF;
                case "end":
                  var uF = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(FF) + uF
              }
              if (SF) {
                var hF = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(FF) + hF
              }
              return this.scale(FF)
            }
          }
        }, {
          key: "isInRange",
          value: function(FF) {
            var WF = this.range(),
              SF = WF[0],
              CF = WF[WF.length - 1];
            return SF <= CF ? FF >= SF && FF <= CF : FF >= CF && FF <= SF
          }
        }], CF = [{
          key: "create",
          value: function(WF) {
            return new FF(WF)
          }
        }], SF && eF(WF.prototype, SF), CF && eF(WF, CF), Object.defineProperty(WF, "prototype", {
          writable: !1
        }), WF;
        var WF, SF, CF
      }();
    rW(kW, "EPS", 1e-4);
    var qW = function(FF) {
      var WF = Object.keys(FF).reduce((function(WF, SF) {
        return QF(QF({}, WF), {}, rW({}, SF, kW.create(FF[SF])))
      }), {});
      return QF(QF({}, WF), {}, {
        apply: function(FF) {
          var SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            CF = SF.bandAware,
            uF = SF.position;
          return AF()(FF, (function(FF, SF) {
            return WF[SF].apply(FF, {
              bandAware: CF,
              position: uF
            })
          }))
        },
        isInRange: function(FF) {
          return hF()(FF, (function(FF, SF) {
            return WF[SF].isInRange(FF)
          }))
        }
      })
    };
    var VF = function(FF) {
      var WF = FF.width,
        SF = FF.height,
        CF = function(FF) {
          return (FF % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        AF = CF * Math.PI / 180,
        uF = Math.atan(SF / WF),
        hF = AF > uF && AF < Math.PI - uF ? SF / Math.sin(AF) : WF / Math.cos(AF);
      return Math.abs(hF)
    }
  },
  5107: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => Yh,
      d: () => Oh,
      f: () => Kh,
      j: () => sh,
      m: () => wh,
      p: () => ub,
      r: () => oh,
      u: () => Zh,
      v: () => lh,
      y: () => ph,
      z: () => Jh,
      D: () => Ih,
      F: () => mb,
      J: () => Gh,
      K: () => Wb,
      N: () => xb,
      O: () => jb,
      R: () => Fb,
      S: () => fh,
      V: () => vb,
      X: () => bd,
      $: () => Lh,
      cb: () => zb,
      fb: () => hb,
      ib: () => cb,
      mb: () => nh,
      pb: () => Ab,
      qb: () => Xh
    });
    var CF = {};
    SF.r(CF), SF.d(CF, {
      scaleBand: () => AF.d,
      scaleDiverging: () => du,
      scaleDivergingLog: () => Pu,
      scaleDivergingPow: () => ih,
      scaleDivergingSqrt: () => eu,
      scaleDivergingSymlog: () => Ru,
      scaleIdentity: () => jS,
      scaleImplicit: () => PS.h,
      scaleLinear: () => BW,
      scaleLog: () => AS,
      scaleOrdinal: () => PS.d,
      scalePoint: () => AF.e,
      scalePow: () => QS,
      scaleQuantile: () => mC,
      scaleQuantize: () => OS,
      scaleRadial: () => tC,
      scaleSequential: () => Wu,
      scaleSequentialLog: () => Su,
      scaleSequentialPow: () => Au,
      scaleSequentialQuantile: () => hu,
      scaleSequentialSqrt: () => uu,
      scaleSequentialSymlog: () => Cu,
      scaleSqrt: () => rC,
      scaleSymlog: () => dS,
      scaleThreshold: () => xC,
      scaleTime: () => JA,
      scaleUtc: () => pA,
      tickFormat: () => XW
    });
    var AF = SF(5110);
    const uF = Math.sqrt(50),
      hF = Math.sqrt(10),
      bW = Math.sqrt(2);

    function dF(FF, WF, SF) {
      const CF = (WF - FF) / Math.max(0, SF),
        AF = Math.floor(Math.log10(CF)),
        PF = CF / Math.pow(10, AF),
        RF = PF >= uF ? 10 : PF >= hF ? 5 : PF >= bW ? 2 : 1;
      let iW, eF, EF;
      return AF < 0 ? (EF = Math.pow(10, -AF) / RF, iW = Math.round(FF * EF), eF = Math.round(WF * EF), iW / EF < FF && ++iW, eF / EF > WF && --eF, EF = -EF) : (EF = Math.pow(10, AF) * RF, iW = Math.round(FF / EF), eF = Math.round(WF / EF), iW * EF < FF && ++iW, eF * EF > WF && --eF), eF < iW && .5 <= SF && SF < 2 ? dF(FF, WF, 2 * SF) : [iW, eF, EF]
    }

    function PF(FF, WF, SF) {
      if (!((SF = +SF) > 0)) return [];
      if ((FF = +FF) === (WF = +WF)) return [FF];
      const CF = WF < FF,
        [AF, uF, hF] = CF ? dF(WF, FF, SF) : dF(FF, WF, SF);
      if (!(uF >= AF)) return [];
      const bW = uF - AF + 1,
        PF = new Array(bW);
      if (CF)
        if (hF < 0)
          for (let dF = 0; dF < bW; ++dF) PF[dF] = (uF - dF) / -hF;
        else
          for (let dF = 0; dF < bW; ++dF) PF[dF] = (uF - dF) * hF;
      else if (hF < 0)
        for (let dF = 0; dF < bW; ++dF) PF[dF] = (AF + dF) / -hF;
      else
        for (let dF = 0; dF < bW; ++dF) PF[dF] = (AF + dF) * hF;
      return PF
    }

    function RF(FF, WF, SF) {
      return dF(FF = +FF, WF = +WF, SF = +SF)[2]
    }

    function iW(FF, WF, SF) {
      SF = +SF;
      const CF = (WF = +WF) < (FF = +FF),
        AF = CF ? RF(WF, FF, SF) : RF(FF, WF, SF);
      return (CF ? -1 : 1) * (AF < 0 ? 1 / -AF : AF)
    }

    function eF(FF, WF) {
      return null == FF || null == WF ? NaN : FF < WF ? -1 : FF > WF ? 1 : FF >= WF ? 0 : NaN
    }

    function EF(FF, WF) {
      return null == FF || null == WF ? NaN : WF < FF ? -1 : WF > FF ? 1 : WF >= FF ? 0 : NaN
    }

    function QF(FF) {
      let WF, SF, CF;

      function AF(FF, CF) {
        let AF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          uF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.length;
        if (AF < uF) {
          if (0 !== WF(CF, CF)) return uF;
          do {
            const WF = AF + uF >>> 1;
            SF(FF[WF], CF) < 0 ? AF = WF + 1 : uF = WF
          } while (AF < uF)
        }
        return AF
      }
      return 2 !== FF.length ? (WF = eF, SF = (WF, SF) => eF(FF(WF), SF), CF = (WF, SF) => FF(WF) - SF) : (WF = FF === eF || FF === EF ? FF : rW, SF = FF, CF = FF), {
        left: AF,
        center: function(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const uF = AF(FF, WF, SF, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.length) - 1);
          return uF > SF && CF(FF[uF - 1], WF) > -CF(FF[uF], WF) ? uF - 1 : uF
        },
        right: function(FF, CF) {
          let AF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            uF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.length;
          if (AF < uF) {
            if (0 !== WF(CF, CF)) return uF;
            do {
              const WF = AF + uF >>> 1;
              SF(FF[WF], CF) <= 0 ? AF = WF + 1 : uF = WF
            } while (AF < uF)
          }
          return AF
        }
      }
    }

    function rW() {
      return 0
    }

    function gW(FF) {
      return null === FF ? NaN : +FF
    }
    const tW = QF(eF),
      TF = tW.right,
      aW = (tW.left, QF(gW).center, TF);

    function kW(FF, WF, SF) {
      FF.prototype = WF.prototype = SF, SF.constructor = FF
    }

    function qW(FF, WF) {
      var SF = Object.create(FF.prototype);
      for (var CF in WF) SF[CF] = WF[CF];
      return SF
    }

    function VF() {}
    var NF = .7,
      DF = 1 / NF,
      LF = "\\s*([+-]?\\d+)\\s*",
      mW = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      OF = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      xW = /^#([0-9a-f]{3,8})$/,
      ZF = new RegExp(`^rgb\\(${LF},${LF},${LF}\\)$`),
      oF = new RegExp(`^rgb\\(${OF},${OF},${OF}\\)$`),
      YF = new RegExp(`^rgba\\(${LF},${LF},${LF},${mW}\\)$`),
      MF = new RegExp(`^rgba\\(${OF},${OF},${OF},${mW}\\)$`),
      cW = new RegExp(`^hsl\\(${mW},${OF},${OF}\\)$`),
      GF = new RegExp(`^hsla\\(${mW},${OF},${OF},${mW}\\)$`),
      zW = {
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

    function IF() {
      return this.rgb().formatHex()
    }

    function fF() {
      return this.rgb().formatRgb()
    }

    function yW(FF) {
      var WF, SF;
      return FF = (FF + "").trim().toLowerCase(), (WF = xW.exec(FF)) ? (SF = WF[1].length, WF = parseInt(WF[1], 16), 6 === SF ? sF(WF) : 3 === SF ? new KF(WF >> 8 & 15 | WF >> 4 & 240, WF >> 4 & 15 | 240 & WF, (15 & WF) << 4 | 15 & WF, 1) : 8 === SF ? nF(WF >> 24 & 255, WF >> 16 & 255, WF >> 8 & 255, (255 & WF) / 255) : 4 === SF ? nF(WF >> 12 & 15 | WF >> 8 & 240, WF >> 8 & 15 | WF >> 4 & 240, WF >> 4 & 15 | 240 & WF, ((15 & WF) << 4 | 15 & WF) / 255) : null) : (WF = ZF.exec(FF)) ? new KF(WF[1], WF[2], WF[3], 1) : (WF = oF.exec(FF)) ? new KF(255 * WF[1] / 100, 255 * WF[2] / 100, 255 * WF[3] / 100, 1) : (WF = YF.exec(FF)) ? nF(WF[1], WF[2], WF[3], WF[4]) : (WF = MF.exec(FF)) ? nF(255 * WF[1] / 100, 255 * WF[2] / 100, 255 * WF[3] / 100, WF[4]) : (WF = cW.exec(FF)) ? vW(WF[1], WF[2] / 100, WF[3] / 100, 1) : (WF = GF.exec(FF)) ? vW(WF[1], WF[2] / 100, WF[3] / 100, WF[4]) : zW.hasOwnProperty(FF) ? sF(zW[FF]) : "transparent" === FF ? new KF(NaN, NaN, NaN, 0) : null
    }

    function sF(FF) {
      return new KF(FF >> 16 & 255, FF >> 8 & 255, 255 & FF, 1)
    }

    function nF(FF, WF, SF, CF) {
      return CF <= 0 && (FF = WF = SF = NaN), new KF(FF, WF, SF, CF)
    }

    function HF(FF, WF, SF, CF) {
      return 1 === arguments.length ? ((AF = FF) instanceof VF || (AF = yW(AF)), AF ? new KF((AF = AF.rgb()).r, AF.g, AF.b, AF.opacity) : new KF) : new KF(FF, WF, SF, null == CF ? 1 : CF);
      var AF
    }

    function KF(FF, WF, SF, CF) {
      this.r = +FF, this.g = +WF, this.b = +SF, this.opacity = +CF
    }

    function wF() {
      return `#${jW(this.r)}${jW(this.g)}${jW(this.b)}`
    }

    function XF() {
      const FF = UF(this.opacity);
      return `${1===FF?"rgb(":"rgba("}${BF(this.r)}, ${BF(this.g)}, ${BF(this.b)}${1===FF?")":`, ${FF})`}`
    }

    function UF(FF) {
      return isNaN(FF) ? 1 : Math.max(0, Math.min(1, FF))
    }

    function BF(FF) {
      return Math.max(0, Math.min(255, Math.round(FF) || 0))
    }

    function jW(FF) {
      return ((FF = BF(FF)) < 16 ? "0" : "") + FF.toString(16)
    }

    function vW(FF, WF, SF, CF) {
      return CF <= 0 ? FF = WF = SF = NaN : SF <= 0 || SF >= 1 ? FF = WF = NaN : WF <= 0 && (FF = NaN), new pF(FF, WF, SF, CF)
    }

    function JF(FF) {
      if (FF instanceof pF) return new pF(FF.h, FF.s, FF.l, FF.opacity);
      if (FF instanceof VF || (FF = yW(FF)), !FF) return new pF;
      if (FF instanceof pF) return FF;
      var WF = (FF = FF.rgb()).r / 255,
        SF = FF.g / 255,
        CF = FF.b / 255,
        AF = Math.min(WF, SF, CF),
        uF = Math.max(WF, SF, CF),
        hF = NaN,
        bW = uF - AF,
        dF = (uF + AF) / 2;
      return bW ? (hF = WF === uF ? (SF - CF) / bW + 6 * (SF < CF) : SF === uF ? (CF - WF) / bW + 2 : (WF - SF) / bW + 4, bW /= dF < .5 ? uF + AF : 2 - uF - AF, hF *= 60) : bW = dF > 0 && dF < 1 ? 0 : hF, new pF(hF, bW, dF, FF.opacity)
    }

    function pF(FF, WF, SF, CF) {
      this.h = +FF, this.s = +WF, this.l = +SF, this.opacity = +CF
    }

    function lF(FF) {
      return (FF = (FF || 0) % 360) < 0 ? FF + 360 : FF
    }

    function FW(FF) {
      return Math.max(0, Math.min(1, FF || 0))
    }

    function WW(FF, WF, SF) {
      return 255 * (FF < 60 ? WF + (SF - WF) * FF / 60 : FF < 180 ? SF : FF < 240 ? WF + (SF - WF) * (240 - FF) / 60 : WF)
    }

    function SW(FF, WF, SF, CF, AF) {
      var uF = FF * FF,
        hF = uF * FF;
      return ((1 - 3 * FF + 3 * uF - hF) * WF + (4 - 6 * uF + 3 * hF) * SF + (1 + 3 * FF + 3 * uF - 3 * hF) * CF + hF * AF) / 6
    }
    kW(VF, yW, {
      copy(FF) {
        return Object.assign(new this.constructor, this, FF)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: IF,
      formatHex: IF,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return JF(this).formatHsl()
      },
      formatRgb: fF,
      toString: fF
    }), kW(KF, HF, qW(VF, {
      brighter(FF) {
        return FF = null == FF ? DF : Math.pow(DF, FF), new KF(this.r * FF, this.g * FF, this.b * FF, this.opacity)
      },
      darker(FF) {
        return FF = null == FF ? NF : Math.pow(NF, FF), new KF(this.r * FF, this.g * FF, this.b * FF, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new KF(BF(this.r), BF(this.g), BF(this.b), UF(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: wF,
      formatHex: wF,
      formatHex8: function() {
        return `#${jW(this.r)}${jW(this.g)}${jW(this.b)}${jW(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: XF,
      toString: XF
    })), kW(pF, (function(FF, WF, SF, CF) {
      return 1 === arguments.length ? JF(FF) : new pF(FF, WF, SF, null == CF ? 1 : CF)
    }), qW(VF, {
      brighter(FF) {
        return FF = null == FF ? DF : Math.pow(DF, FF), new pF(this.h, this.s, this.l * FF, this.opacity)
      },
      darker(FF) {
        return FF = null == FF ? NF : Math.pow(NF, FF), new pF(this.h, this.s, this.l * FF, this.opacity)
      },
      rgb() {
        var FF = this.h % 360 + 360 * (this.h < 0),
          WF = isNaN(FF) || isNaN(this.s) ? 0 : this.s,
          SF = this.l,
          CF = SF + (SF < .5 ? SF : 1 - SF) * WF,
          AF = 2 * SF - CF;
        return new KF(WW(FF >= 240 ? FF - 240 : FF + 120, AF, CF), WW(FF, AF, CF), WW(FF < 120 ? FF + 240 : FF - 120, AF, CF), this.opacity)
      },
      clamp() {
        return new pF(lF(this.h), FW(this.s), FW(this.l), UF(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const FF = UF(this.opacity);
        return `${1===FF?"hsl(":"hsla("}${lF(this.h)}, ${100*FW(this.s)}%, ${100*FW(this.l)}%${1===FF?")":`, ${FF})`}`
      }
    }));
    const CW = FF => () => FF;

    function AW(FF, WF) {
      return function(SF) {
        return FF + SF * WF
      }
    }

    function uW(FF) {
      return 1 === (FF = +FF) ? hW : function(WF, SF) {
        return SF - WF ? function(FF, WF, SF) {
          return FF = Math.pow(FF, SF), WF = Math.pow(WF, SF) - FF, SF = 1 / SF,
            function(CF) {
              return Math.pow(FF + CF * WF, SF)
            }
        }(WF, SF, FF) : CW(isNaN(WF) ? SF : WF)
      }
    }

    function hW(FF, WF) {
      var SF = WF - FF;
      return SF ? AW(FF, SF) : CW(isNaN(FF) ? WF : FF)
    }
    const bS = function FF(WF) {
      var SF = uW(WF);

      function CF(FF, WF) {
        var CF = SF((FF = HF(FF)).r, (WF = HF(WF)).r),
          AF = SF(FF.g, WF.g),
          uF = SF(FF.b, WF.b),
          hF = hW(FF.opacity, WF.opacity);
        return function(WF) {
          return FF.r = CF(WF), FF.g = AF(WF), FF.b = uF(WF), FF.opacity = hF(WF), FF + ""
        }
      }
      return CF.gamma = FF, CF
    }(1);

    function dW(FF) {
      return function(WF) {
        var SF, CF, AF = WF.length,
          uF = new Array(AF),
          hF = new Array(AF),
          bW = new Array(AF);
        for (SF = 0; SF < AF; ++SF) CF = HF(WF[SF]), uF[SF] = CF.r || 0, hF[SF] = CF.g || 0, bW[SF] = CF.b || 0;
        return uF = FF(uF), hF = FF(hF), bW = FF(bW), CF.opacity = 1,
          function(FF) {
            return CF.r = uF(FF), CF.g = hF(FF), CF.b = bW(FF), CF + ""
          }
      }
    }
    dW((function(FF) {
      var WF = FF.length - 1;
      return function(SF) {
        var CF = SF <= 0 ? SF = 0 : SF >= 1 ? (SF = 1, WF - 1) : Math.floor(SF * WF),
          AF = FF[CF],
          uF = FF[CF + 1],
          hF = CF > 0 ? FF[CF - 1] : 2 * AF - uF,
          bW = CF < WF - 1 ? FF[CF + 2] : 2 * uF - AF;
        return SW((SF - CF / WF) * WF, hF, AF, uF, bW)
      }
    })), dW((function(FF) {
      var WF = FF.length;
      return function(SF) {
        var CF = Math.floor(((SF %= 1) < 0 ? ++SF : SF) * WF),
          AF = FF[(CF + WF - 1) % WF],
          uF = FF[CF % WF],
          hF = FF[(CF + 1) % WF],
          bW = FF[(CF + 2) % WF];
        return SW((SF - CF / WF) * WF, AF, uF, hF, bW)
      }
    }));

    function PW(FF, WF) {
      var SF, CF = WF ? WF.length : 0,
        AF = FF ? Math.min(CF, FF.length) : 0,
        uF = new Array(AF),
        hF = new Array(CF);
      for (SF = 0; SF < AF; ++SF) uF[SF] = tS(FF[SF], WF[SF]);
      for (; SF < CF; ++SF) hF[SF] = WF[SF];
      return function(FF) {
        for (SF = 0; SF < AF; ++SF) hF[SF] = uF[SF](FF);
        return hF
      }
    }

    function RW(FF, WF) {
      var SF = new Date;
      return FF = +FF, WF = +WF,
        function(CF) {
          return SF.setTime(FF * (1 - CF) + WF * CF), SF
        }
    }

    function iS(FF, WF) {
      return FF = +FF, WF = +WF,
        function(SF) {
          return FF * (1 - SF) + WF * SF
        }
    }

    function eW(FF, WF) {
      var SF, CF = {},
        AF = {};
      for (SF in null !== FF && "object" === typeof FF || (FF = {}), null !== WF && "object" === typeof WF || (WF = {}), WF) SF in FF ? CF[SF] = tS(FF[SF], WF[SF]) : AF[SF] = WF[SF];
      return function(FF) {
        for (SF in CF) AF[SF] = CF[SF](FF);
        return AF
      }
    }
    var EW = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      QW = new RegExp(EW.source, "g");

    function rS(FF, WF) {
      var SF, CF, AF, uF = EW.lastIndex = QW.lastIndex = 0,
        hF = -1,
        bW = [],
        dF = [];
      for (FF += "", WF += "";
        (SF = EW.exec(FF)) && (CF = QW.exec(WF));)(AF = CF.index) > uF && (AF = WF.slice(uF, AF), bW[hF] ? bW[hF] += AF : bW[++hF] = AF), (SF = SF[0]) === (CF = CF[0]) ? bW[hF] ? bW[hF] += CF : bW[++hF] = CF : (bW[++hF] = null, dF.push({
        i: hF,
        x: iS(SF, CF)
      })), uF = QW.lastIndex;
      return uF < WF.length && (AF = WF.slice(uF), bW[hF] ? bW[hF] += AF : bW[++hF] = AF), bW.length < 2 ? dF[0] ? function(FF) {
        return function(WF) {
          return FF(WF) + ""
        }
      }(dF[0].x) : function(FF) {
        return function() {
          return FF
        }
      }(WF) : (WF = dF.length, function(FF) {
        for (var SF, CF = 0; CF < WF; ++CF) bW[(SF = dF[CF]).i] = SF.x(FF);
        return bW.join("")
      })
    }

    function gS(FF, WF) {
      WF || (WF = []);
      var SF, CF = FF ? Math.min(WF.length, FF.length) : 0,
        AF = WF.slice();
      return function(uF) {
        for (SF = 0; SF < CF; ++SF) AF[SF] = FF[SF] * (1 - uF) + WF[SF] * uF;
        return AF
      }
    }

    function tS(FF, WF) {
      var SF, CF, AF = typeof WF;
      return null == WF || "boolean" === AF ? CW(WF) : ("number" === AF ? iS : "string" === AF ? (SF = yW(WF)) ? (WF = SF, bS) : rS : WF instanceof yW ? bS : WF instanceof Date ? RW : (CF = WF, !ArrayBuffer.isView(CF) || CF instanceof DataView ? Array.isArray(WF) ? PW : "function" !== typeof WF.valueOf && "function" !== typeof WF.toString || isNaN(WF) ? eW : iS : gS))(FF, WF)
    }

    function TW(FF, WF) {
      return FF = +FF, WF = +WF,
        function(SF) {
          return Math.round(FF * (1 - SF) + WF * SF)
        }
    }

    function aS(FF) {
      return +FF
    }
    var kS = [0, 1];

    function qS(FF) {
      return FF
    }

    function VW(FF, WF) {
      return (WF -= FF = +FF) ? function(SF) {
        return (SF - FF) / WF
      } : (SF = isNaN(WF) ? NaN : .5, function() {
        return SF
      });
      var SF
    }

    function NW(FF, WF, SF) {
      var CF = FF[0],
        AF = FF[1],
        uF = WF[0],
        hF = WF[1];
      return AF < CF ? (CF = VW(AF, CF), uF = SF(hF, uF)) : (CF = VW(CF, AF), uF = SF(uF, hF)),
        function(FF) {
          return uF(CF(FF))
        }
    }

    function DW(FF, WF, SF) {
      var CF = Math.min(FF.length, WF.length) - 1,
        AF = new Array(CF),
        uF = new Array(CF),
        hF = -1;
      for (FF[CF] < FF[0] && (FF = FF.slice().reverse(), WF = WF.slice().reverse()); ++hF < CF;) AF[hF] = VW(FF[hF], FF[hF + 1]), uF[hF] = SF(WF[hF], WF[hF + 1]);
      return function(WF) {
        var SF = aW(FF, WF, 1, CF) - 1;
        return uF[SF](AF[SF](WF))
      }
    }

    function LW(FF, WF) {
      return WF.domain(FF.domain()).range(FF.range()).interpolate(FF.interpolate()).clamp(FF.clamp()).unknown(FF.unknown())
    }

    function mS() {
      var FF, WF, SF, CF, AF, uF, hF = kS,
        bW = kS,
        dF = tS,
        PF = qS;

      function RF() {
        var FF = Math.min(hF.length, bW.length);
        return PF !== qS && (PF = function(FF, WF) {
          var SF;
          return FF > WF && (SF = FF, FF = WF, WF = SF),
            function(SF) {
              return Math.max(FF, Math.min(WF, SF))
            }
        }(hF[0], hF[FF - 1])), CF = FF > 2 ? DW : NW, AF = uF = null, iW
      }

      function iW(WF) {
        return null == WF || isNaN(WF = +WF) ? SF : (AF || (AF = CF(hF.map(FF), bW, dF)))(FF(PF(WF)))
      }
      return iW.invert = function(SF) {
          return PF(WF((uF || (uF = CF(bW, hF.map(FF), iS)))(SF)))
        }, iW.domain = function(FF) {
          return arguments.length ? (hF = Array.from(FF, aS), RF()) : hF.slice()
        }, iW.range = function(FF) {
          return arguments.length ? (bW = Array.from(FF), RF()) : bW.slice()
        }, iW.rangeRound = function(FF) {
          return bW = Array.from(FF), dF = TW, RF()
        }, iW.clamp = function(FF) {
          return arguments.length ? (PF = !!FF || qS, RF()) : PF !== qS
        }, iW.interpolate = function(FF) {
          return arguments.length ? (dF = FF, RF()) : dF
        }, iW.unknown = function(FF) {
          return arguments.length ? (SF = FF, iW) : SF
        },
        function(SF, CF) {
          return FF = SF, WF = CF, RF()
        }
    }

    function OW() {
      return mS()(qS, qS)
    }
    var xS, ZW = SF(5113),
      oW = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function YW(FF) {
      if (!(WF = oW.exec(FF))) throw new Error("invalid format: " + FF);
      var WF;
      return new MW({
        fill: WF[1],
        align: WF[2],
        sign: WF[3],
        symbol: WF[4],
        zero: WF[5],
        width: WF[6],
        comma: WF[7],
        precision: WF[8] && WF[8].slice(1),
        trim: WF[9],
        type: WF[10]
      })
    }

    function MW(FF) {
      this.fill = void 0 === FF.fill ? " " : FF.fill + "", this.align = void 0 === FF.align ? ">" : FF.align + "", this.sign = void 0 === FF.sign ? "-" : FF.sign + "", this.symbol = void 0 === FF.symbol ? "" : FF.symbol + "", this.zero = !!FF.zero, this.width = void 0 === FF.width ? void 0 : +FF.width, this.comma = !!FF.comma, this.precision = void 0 === FF.precision ? void 0 : +FF.precision, this.trim = !!FF.trim, this.type = void 0 === FF.type ? "" : FF.type + ""
    }

    function cS(FF, WF) {
      if (!isFinite(FF) || 0 === FF) return null;
      var SF = (FF = WF ? FF.toExponential(WF - 1) : FF.toExponential()).indexOf("e"),
        CF = FF.slice(0, SF);
      return [CF.length > 1 ? CF[0] + CF.slice(2) : CF, +FF.slice(SF + 1)]
    }

    function GW(FF) {
      return (FF = cS(Math.abs(FF))) ? FF[1] : NaN
    }

    function zS(FF, WF) {
      var SF = cS(FF, WF);
      if (!SF) return FF + "";
      var CF = SF[0],
        AF = SF[1];
      return AF < 0 ? "0." + new Array(-AF).join("0") + CF : CF.length > AF + 1 ? CF.slice(0, AF + 1) + "." + CF.slice(AF + 1) : CF + new Array(AF - CF.length + 2).join("0")
    }
    YW.prototype = MW.prototype, MW.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const IW = {
      "%": (FF, WF) => (100 * FF).toFixed(WF),
      b: FF => Math.round(FF).toString(2),
      c: FF => FF + "",
      d: function(FF) {
        return Math.abs(FF = Math.round(FF)) >= 1e21 ? FF.toLocaleString("en").replace(/,/g, "") : FF.toString(10)
      },
      e: (FF, WF) => FF.toExponential(WF),
      f: (FF, WF) => FF.toFixed(WF),
      g: (FF, WF) => FF.toPrecision(WF),
      o: FF => Math.round(FF).toString(8),
      p: (FF, WF) => zS(100 * FF, WF),
      r: zS,
      s: function(FF, WF) {
        var SF = cS(FF, WF);
        if (!SF) return xS = void 0, FF.toPrecision(WF);
        var CF = SF[0],
          AF = SF[1],
          uF = AF - (xS = 3 * Math.max(-8, Math.min(8, Math.floor(AF / 3)))) + 1,
          hF = CF.length;
        return uF === hF ? CF : uF > hF ? CF + new Array(uF - hF + 1).join("0") : uF > 0 ? CF.slice(0, uF) + "." + CF.slice(uF) : "0." + new Array(1 - uF).join("0") + cS(FF, Math.max(0, WF + uF - 1))[0]
      },
      X: FF => Math.round(FF).toString(16).toUpperCase(),
      x: FF => Math.round(FF).toString(16)
    };

    function fW(FF) {
      return FF
    }
    var yS, sW, nW, HW = Array.prototype.map,
      KW = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function wW(FF) {
      var WF, SF, CF = void 0 === FF.grouping || void 0 === FF.thousands ? fW : (WF = HW.call(FF.grouping, Number), SF = FF.thousands + "", function(FF, CF) {
          for (var AF = FF.length, uF = [], hF = 0, bW = WF[0], dF = 0; AF > 0 && bW > 0 && (dF + bW + 1 > CF && (bW = Math.max(1, CF - dF)), uF.push(FF.substring(AF -= bW, AF + bW)), !((dF += bW + 1) > CF));) bW = WF[hF = (hF + 1) % WF.length];
          return uF.reverse().join(SF)
        }),
        AF = void 0 === FF.currency ? "" : FF.currency[0] + "",
        uF = void 0 === FF.currency ? "" : FF.currency[1] + "",
        hF = void 0 === FF.decimal ? "." : FF.decimal + "",
        bW = void 0 === FF.numerals ? fW : function(FF) {
          return function(WF) {
            return WF.replace(/[0-9]/g, (function(WF) {
              return FF[+WF]
            }))
          }
        }(HW.call(FF.numerals, String)),
        dF = void 0 === FF.percent ? "%" : FF.percent + "",
        PF = void 0 === FF.minus ? "\u2212" : FF.minus + "",
        RF = void 0 === FF.nan ? "NaN" : FF.nan + "";

      function iW(FF, WF) {
        var SF = (FF = YW(FF)).fill,
          iW = FF.align,
          eF = FF.sign,
          EF = FF.symbol,
          QF = FF.zero,
          rW = FF.width,
          gW = FF.comma,
          tW = FF.precision,
          TF = FF.trim,
          aW = FF.type;
        "n" === aW ? (gW = !0, aW = "g") : IW[aW] || (void 0 === tW && (tW = 12), TF = !0, aW = "g"), (QF || "0" === SF && "=" === iW) && (QF = !0, SF = "0", iW = "=");
        var kW = (WF && void 0 !== WF.prefix ? WF.prefix : "") + ("$" === EF ? AF : "#" === EF && /[boxX]/.test(aW) ? "0" + aW.toLowerCase() : ""),
          qW = ("$" === EF ? uF : /[%p]/.test(aW) ? dF : "") + (WF && void 0 !== WF.suffix ? WF.suffix : ""),
          VF = IW[aW],
          NF = /[defgprs%]/.test(aW);

        function DF(FF) {
          var WF, AF, uF, dF = kW,
            EF = qW;
          if ("c" === aW) EF = VF(FF) + EF, FF = "";
          else {
            var DF = (FF = +FF) < 0 || 1 / FF < 0;
            if (FF = isNaN(FF) ? RF : VF(Math.abs(FF), tW), TF && (FF = function(FF) {
                FF: for (var WF, SF = FF.length, CF = 1, AF = -1; CF < SF; ++CF) switch (FF[CF]) {
                  case ".":
                    AF = WF = CF;
                    break;
                  case "0":
                    0 === AF && (AF = CF), WF = CF;
                    break;
                  default:
                    if (!+FF[CF]) break FF;
                    AF > 0 && (AF = 0)
                }
                return AF > 0 ? FF.slice(0, AF) + FF.slice(WF + 1) : FF
              }(FF)), DF && 0 === +FF && "+" !== eF && (DF = !1), dF = (DF ? "(" === eF ? eF : PF : "-" === eF || "(" === eF ? "" : eF) + dF, EF = ("s" !== aW || isNaN(FF) || void 0 === xS ? "" : KW[8 + xS / 3]) + EF + (DF && "(" === eF ? ")" : ""), NF)
              for (WF = -1, AF = FF.length; ++WF < AF;)
                if (48 > (uF = FF.charCodeAt(WF)) || uF > 57) {
                  EF = (46 === uF ? hF + FF.slice(WF + 1) : FF.slice(WF)) + EF, FF = FF.slice(0, WF);
                  break
                }
          }
          gW && !QF && (FF = CF(FF, 1 / 0));
          var LF = dF.length + FF.length + EF.length,
            mW = LF < rW ? new Array(rW - LF + 1).join(SF) : "";
          switch (gW && QF && (FF = CF(mW + FF, mW.length ? rW - EF.length : 1 / 0), mW = ""), iW) {
            case "<":
              FF = dF + FF + EF + mW;
              break;
            case "=":
              FF = dF + mW + FF + EF;
              break;
            case "^":
              FF = mW.slice(0, LF = mW.length >> 1) + dF + FF + EF + mW.slice(LF);
              break;
            default:
              FF = mW + dF + FF + EF
          }
          return bW(FF)
        }
        return tW = void 0 === tW ? 6 : /[gprs]/.test(aW) ? Math.max(1, Math.min(21, tW)) : Math.max(0, Math.min(20, tW)), DF.toString = function() {
          return FF + ""
        }, DF
      }
      return {
        format: iW,
        formatPrefix: function(FF, WF) {
          var SF = 3 * Math.max(-8, Math.min(8, Math.floor(GW(WF) / 3))),
            CF = Math.pow(10, -SF),
            AF = iW(((FF = YW(FF)).type = "f", FF), {
              suffix: KW[8 + SF / 3]
            });
          return function(FF) {
            return AF(CF * FF)
          }
        }
      }
    }

    function XW(FF, WF, SF, CF) {
      var AF, uF = iW(FF, WF, SF);
      switch ((CF = YW(null == CF ? ",f" : CF)).type) {
        case "s":
          var hF = Math.max(Math.abs(FF), Math.abs(WF));
          return null != CF.precision || isNaN(AF = function(FF, WF) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(GW(WF) / 3))) - GW(Math.abs(FF)))
          }(uF, hF)) || (CF.precision = AF), nW(CF, hF);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != CF.precision || isNaN(AF = function(FF, WF) {
            return FF = Math.abs(FF), WF = Math.abs(WF) - FF, Math.max(0, GW(WF) - GW(FF)) + 1
          }(uF, Math.max(Math.abs(FF), Math.abs(WF)))) || (CF.precision = AF - ("e" === CF.type));
          break;
        case "f":
        case "%":
          null != CF.precision || isNaN(AF = function(FF) {
            return Math.max(0, -GW(Math.abs(FF)))
          }(uF)) || (CF.precision = AF - 2 * ("%" === CF.type))
      }
      return sW(CF)
    }

    function UW(FF) {
      var WF = FF.domain;
      return FF.ticks = function(FF) {
        var SF = WF();
        return PF(SF[0], SF[SF.length - 1], null == FF ? 10 : FF)
      }, FF.tickFormat = function(FF, SF) {
        var CF = WF();
        return XW(CF[0], CF[CF.length - 1], null == FF ? 10 : FF, SF)
      }, FF.nice = function(SF) {
        null == SF && (SF = 10);
        var CF, AF, uF = WF(),
          hF = 0,
          bW = uF.length - 1,
          dF = uF[hF],
          PF = uF[bW],
          iW = 10;
        for (PF < dF && (AF = dF, dF = PF, PF = AF, AF = hF, hF = bW, bW = AF); iW-- > 0;) {
          if ((AF = RF(dF, PF, SF)) === CF) return uF[hF] = dF, uF[bW] = PF, WF(uF);
          if (AF > 0) dF = Math.floor(dF / AF) * AF, PF = Math.ceil(PF / AF) * AF;
          else {
            if (!(AF < 0)) break;
            dF = Math.ceil(dF * AF) / AF, PF = Math.floor(PF * AF) / AF
          }
          CF = AF
        }
        return FF
      }, FF
    }

    function BW() {
      var FF = OW();
      return FF.copy = function() {
        return LW(FF, BW())
      }, ZW.g.apply(FF, arguments), UW(FF)
    }

    function jS(FF) {
      var WF;

      function SF(FF) {
        return null == FF || isNaN(FF = +FF) ? WF : FF
      }
      return SF.invert = SF, SF.domain = SF.range = function(WF) {
        return arguments.length ? (FF = Array.from(WF, aS), SF) : FF.slice()
      }, SF.unknown = function(FF) {
        return arguments.length ? (WF = FF, SF) : WF
      }, SF.copy = function() {
        return jS(FF).unknown(WF)
      }, FF = arguments.length ? Array.from(FF, aS) : [0, 1], UW(SF)
    }

    function vS(FF, WF) {
      var SF, CF = 0,
        AF = (FF = FF.slice()).length - 1,
        uF = FF[CF],
        hF = FF[AF];
      return hF < uF && (SF = CF, CF = AF, AF = SF, SF = uF, uF = hF, hF = SF), FF[CF] = WF.floor(uF), FF[AF] = WF.ceil(hF), FF
    }

    function JW(FF) {
      return Math.log(FF)
    }

    function pW(FF) {
      return Math.exp(FF)
    }

    function lW(FF) {
      return -Math.log(-FF)
    }

    function FS(FF) {
      return -Math.exp(-FF)
    }

    function WS(FF) {
      return isFinite(FF) ? +("1e" + FF) : FF < 0 ? 0 : FF
    }

    function SS(FF) {
      return (WF, SF) => -FF(-WF, SF)
    }

    function CS(FF) {
      const WF = FF(JW, pW),
        SF = WF.domain;
      let CF, AF, uF = 10;

      function hF() {
        return CF = function(FF) {
          return FF === Math.E ? Math.log : 10 === FF && Math.log10 || 2 === FF && Math.log2 || (FF = Math.log(FF), WF => Math.log(WF) / FF)
        }(uF), AF = function(FF) {
          return 10 === FF ? WS : FF === Math.E ? Math.exp : WF => Math.pow(FF, WF)
        }(uF), SF()[0] < 0 ? (CF = SS(CF), AF = SS(AF), FF(lW, FS)) : FF(JW, pW), WF
      }
      return WF.base = function(FF) {
        return arguments.length ? (uF = +FF, hF()) : uF
      }, WF.domain = function(FF) {
        return arguments.length ? (SF(FF), hF()) : SF()
      }, WF.ticks = FF => {
        const WF = SF();
        let hF = WF[0],
          bW = WF[WF.length - 1];
        const dF = bW < hF;
        dF && ([hF, bW] = [bW, hF]);
        let RF, iW, eF = CF(hF),
          EF = CF(bW);
        const QF = null == FF ? 10 : +FF;
        let rW = [];
        if (!(uF % 1) && EF - eF < QF) {
          if (eF = Math.floor(eF), EF = Math.ceil(EF), hF > 0) {
            for (; eF <= EF; ++eF)
              for (RF = 1; RF < uF; ++RF)
                if (iW = eF < 0 ? RF / AF(-eF) : RF * AF(eF), !(iW < hF)) {
                  if (iW > bW) break;
                  rW.push(iW)
                }
          } else
            for (; eF <= EF; ++eF)
              for (RF = uF - 1; RF >= 1; --RF)
                if (iW = eF > 0 ? RF / AF(-eF) : RF * AF(eF), !(iW < hF)) {
                  if (iW > bW) break;
                  rW.push(iW)
                } 2 * rW.length < QF && (rW = PF(hF, bW, QF))
        } else rW = PF(eF, EF, Math.min(EF - eF, QF)).map(AF);
        return dF ? rW.reverse() : rW
      }, WF.tickFormat = (FF, SF) => {
        if (null == FF && (FF = 10), null == SF && (SF = 10 === uF ? "s" : ","), "function" !== typeof SF && (uF % 1 || null != (SF = YW(SF)).precision || (SF.trim = !0), SF = sW(SF)), FF === 1 / 0) return SF;
        const hF = Math.max(1, uF * FF / WF.ticks().length);
        return FF => {
          let WF = FF / AF(Math.round(CF(FF)));
          return WF * uF < uF - .5 && (WF *= uF), WF <= hF ? SF(FF) : ""
        }
      }, WF.nice = () => SF(vS(SF(), {
        floor: FF => AF(Math.floor(CF(FF))),
        ceil: FF => AF(Math.ceil(CF(FF)))
      })), WF
    }

    function AS() {
      const FF = CS(mS()).domain([1, 10]);
      return FF.copy = () => LW(FF, AS()).base(FF.base()), ZW.g.apply(FF, arguments), FF
    }

    function uS(FF) {
      return function(WF) {
        return Math.sign(WF) * Math.log1p(Math.abs(WF / FF))
      }
    }

    function hS(FF) {
      return function(WF) {
        return Math.sign(WF) * Math.expm1(Math.abs(WF)) * FF
      }
    }

    function bC(FF) {
      var WF = 1,
        SF = FF(uS(WF), hS(WF));
      return SF.constant = function(SF) {
        return arguments.length ? FF(uS(WF = +SF), hS(WF)) : WF
      }, UW(SF)
    }

    function dS() {
      var FF = bC(mS());
      return FF.copy = function() {
        return LW(FF, dS()).constant(FF.constant())
      }, ZW.g.apply(FF, arguments)
    }
    yS = wW({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), sW = yS.format, nW = yS.formatPrefix;
    var PS = SF(5117);

    function RS(FF) {
      return function(WF) {
        return WF < 0 ? -Math.pow(-WF, FF) : Math.pow(WF, FF)
      }
    }

    function iC(FF) {
      return FF < 0 ? -Math.sqrt(-FF) : Math.sqrt(FF)
    }

    function eS(FF) {
      return FF < 0 ? -FF * FF : FF * FF
    }

    function ES(FF) {
      var WF = FF(qS, qS),
        SF = 1;
      return WF.exponent = function(WF) {
        return arguments.length ? 1 === (SF = +WF) ? FF(qS, qS) : .5 === SF ? FF(iC, eS) : FF(RS(SF), RS(1 / SF)) : SF
      }, UW(WF)
    }

    function QS() {
      var FF = ES(mS());
      return FF.copy = function() {
        return LW(FF, QS()).exponent(FF.exponent())
      }, ZW.g.apply(FF, arguments), FF
    }

    function rC() {
      return QS.apply(null, arguments).exponent(.5)
    }

    function gC(FF) {
      return Math.sign(FF) * FF * FF
    }

    function tC() {
      var FF, WF = OW(),
        SF = [0, 1],
        CF = !1;

      function AF(SF) {
        var AF = function(FF) {
          return Math.sign(FF) * Math.sqrt(Math.abs(FF))
        }(WF(SF));
        return isNaN(AF) ? FF : CF ? Math.round(AF) : AF
      }
      return AF.invert = function(FF) {
        return WF.invert(gC(FF))
      }, AF.domain = function(FF) {
        return arguments.length ? (WF.domain(FF), AF) : WF.domain()
      }, AF.range = function(FF) {
        return arguments.length ? (WF.range((SF = Array.from(FF, aS)).map(gC)), AF) : SF.slice()
      }, AF.rangeRound = function(FF) {
        return AF.range(FF).round(!0)
      }, AF.round = function(FF) {
        return arguments.length ? (CF = !!FF, AF) : CF
      }, AF.clamp = function(FF) {
        return arguments.length ? (WF.clamp(FF), AF) : WF.clamp()
      }, AF.unknown = function(WF) {
        return arguments.length ? (FF = WF, AF) : FF
      }, AF.copy = function() {
        return tC(WF.domain(), SF).round(CF).clamp(WF.clamp()).unknown(FF)
      }, ZW.g.apply(AF, arguments), UW(AF)
    }

    function TS(FF, WF) {
      let SF;
      if (void 0 === WF)
        for (const CF of FF) null != CF && (SF < CF || void 0 === SF && CF >= CF) && (SF = CF);
      else {
        let CF = -1;
        for (let AF of FF) null != (AF = WF(AF, ++CF, FF)) && (SF < AF || void 0 === SF && AF >= AF) && (SF = AF)
      }
      return SF
    }

    function aC(FF, WF) {
      let SF;
      if (void 0 === WF)
        for (const CF of FF) null != CF && (SF > CF || void 0 === SF && CF >= CF) && (SF = CF);
      else {
        let CF = -1;
        for (let AF of FF) null != (AF = WF(AF, ++CF, FF)) && (SF > AF || void 0 === SF && AF >= AF) && (SF = AF)
      }
      return SF
    }

    function kC() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF;
      if (FF === eF) return qC;
      if ("function" !== typeof FF) throw new TypeError("compare is not a function");
      return (WF, SF) => {
        const CF = FF(WF, SF);
        return CF || 0 === CF ? CF : (0 === FF(SF, SF)) - (0 === FF(WF, WF))
      }
    }

    function qC(FF, WF) {
      return (null == FF || !(FF >= FF)) - (null == WF || !(WF >= WF)) || (FF < WF ? -1 : FF > WF ? 1 : 0)
    }

    function VS(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        AF = arguments.length > 4 ? arguments[4] : void 0;
      if (WF = Math.floor(WF), SF = Math.floor(Math.max(0, SF)), CF = Math.floor(Math.min(FF.length - 1, CF)), !(SF <= WF && WF <= CF)) return FF;
      for (AF = void 0 === AF ? qC : kC(AF); CF > SF;) {
        if (CF - SF > 600) {
          const uF = CF - SF + 1,
            hF = WF - SF + 1,
            bW = Math.log(uF),
            dF = .5 * Math.exp(2 * bW / 3),
            PF = .5 * Math.sqrt(bW * dF * (uF - dF) / uF) * (hF - uF / 2 < 0 ? -1 : 1);
          VS(FF, WF, Math.max(SF, Math.floor(WF - hF * dF / uF + PF)), Math.min(CF, Math.floor(WF + (uF - hF) * dF / uF + PF)), AF)
        }
        const uF = FF[WF];
        let hF = SF,
          bW = CF;
        for (NS(FF, SF, WF), AF(FF[CF], uF) > 0 && NS(FF, SF, CF); hF < bW;) {
          for (NS(FF, hF, bW), ++hF, --bW; AF(FF[hF], uF) < 0;) ++hF;
          for (; AF(FF[bW], uF) > 0;) --bW
        }
        0 === AF(FF[SF], uF) ? NS(FF, SF, bW) : (++bW, NS(FF, bW, CF)), bW <= WF && (SF = bW + 1), WF <= bW && (CF = bW - 1)
      }
      return FF
    }

    function NS(FF, WF, SF) {
      const CF = FF[WF];
      FF[WF] = FF[SF], FF[SF] = CF
    }

    function DS(FF, WF, SF) {
      if (FF = Float64Array.from(function*(FF, WF) {
          if (void 0 === WF)
            for (let SF of FF) null != SF && (SF = +SF) >= SF && (yield SF);
          else {
            let SF = -1;
            for (let CF of FF) null != (CF = WF(CF, ++SF, FF)) && (CF = +CF) >= CF && (yield CF)
          }
        }(FF, SF)), (CF = FF.length) && !isNaN(WF = +WF)) {
        if (WF <= 0 || CF < 2) return aC(FF);
        if (WF >= 1) return TS(FF);
        var CF, AF = (CF - 1) * WF,
          uF = Math.floor(AF),
          hF = TS(VS(FF, uF).subarray(0, uF + 1));
        return hF + (aC(FF.subarray(uF + 1)) - hF) * (AF - uF)
      }
    }

    function LS(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gW;
      if ((CF = FF.length) && !isNaN(WF = +WF)) {
        if (WF <= 0 || CF < 2) return +SF(FF[0], 0, FF);
        if (WF >= 1) return +SF(FF[CF - 1], CF - 1, FF);
        var CF, AF = (CF - 1) * WF,
          uF = Math.floor(AF),
          hF = +SF(FF[uF], uF, FF);
        return hF + (+SF(FF[uF + 1], uF + 1, FF) - hF) * (AF - uF)
      }
    }

    function mC() {
      var FF, WF = [],
        SF = [],
        CF = [];

      function AF() {
        var FF = 0,
          AF = Math.max(1, SF.length);
        for (CF = new Array(AF - 1); ++FF < AF;) CF[FF - 1] = LS(WF, FF / AF);
        return uF
      }

      function uF(WF) {
        return null == WF || isNaN(WF = +WF) ? FF : SF[aW(CF, WF)]
      }
      return uF.invertExtent = function(FF) {
        var AF = SF.indexOf(FF);
        return AF < 0 ? [NaN, NaN] : [AF > 0 ? CF[AF - 1] : WF[0], AF < CF.length ? CF[AF] : WF[WF.length - 1]]
      }, uF.domain = function(FF) {
        if (!arguments.length) return WF.slice();
        WF = [];
        for (let SF of FF) null == SF || isNaN(SF = +SF) || WF.push(SF);
        return WF.sort(eF), AF()
      }, uF.range = function(FF) {
        return arguments.length ? (SF = Array.from(FF), AF()) : SF.slice()
      }, uF.unknown = function(WF) {
        return arguments.length ? (FF = WF, uF) : FF
      }, uF.quantiles = function() {
        return CF.slice()
      }, uF.copy = function() {
        return mC().domain(WF).range(SF).unknown(FF)
      }, ZW.g.apply(uF, arguments)
    }

    function OS() {
      var FF, WF = 0,
        SF = 1,
        CF = 1,
        AF = [.5],
        uF = [0, 1];

      function hF(WF) {
        return null != WF && WF <= WF ? uF[aW(AF, WF, 0, CF)] : FF
      }

      function bW() {
        var FF = -1;
        for (AF = new Array(CF); ++FF < CF;) AF[FF] = ((FF + 1) * SF - (FF - CF) * WF) / (CF + 1);
        return hF
      }
      return hF.domain = function(FF) {
        return arguments.length ? ([WF, SF] = FF, WF = +WF, SF = +SF, bW()) : [WF, SF]
      }, hF.range = function(FF) {
        return arguments.length ? (CF = (uF = Array.from(FF)).length - 1, bW()) : uF.slice()
      }, hF.invertExtent = function(FF) {
        var hF = uF.indexOf(FF);
        return hF < 0 ? [NaN, NaN] : hF < 1 ? [WF, AF[0]] : hF >= CF ? [AF[CF - 1], SF] : [AF[hF - 1], AF[hF]]
      }, hF.unknown = function(WF) {
        return arguments.length ? (FF = WF, hF) : hF
      }, hF.thresholds = function() {
        return AF.slice()
      }, hF.copy = function() {
        return OS().domain([WF, SF]).range(uF).unknown(FF)
      }, ZW.g.apply(UW(hF), arguments)
    }

    function xC() {
      var FF, WF = [.5],
        SF = [0, 1],
        CF = 1;

      function AF(AF) {
        return null != AF && AF <= AF ? SF[aW(WF, AF, 0, CF)] : FF
      }
      return AF.domain = function(FF) {
        return arguments.length ? (WF = Array.from(FF), CF = Math.min(WF.length, SF.length - 1), AF) : WF.slice()
      }, AF.range = function(FF) {
        return arguments.length ? (SF = Array.from(FF), CF = Math.min(WF.length, SF.length - 1), AF) : SF.slice()
      }, AF.invertExtent = function(FF) {
        var CF = SF.indexOf(FF);
        return [WF[CF - 1], WF[CF]]
      }, AF.unknown = function(WF) {
        return arguments.length ? (FF = WF, AF) : FF
      }, AF.copy = function() {
        return xC().domain(WF).range(SF).unknown(FF)
      }, ZW.g.apply(AF, arguments)
    }
    const ZS = 1e3,
      oS = 6e4,
      YS = 36e5,
      MS = 864e5,
      cC = 6048e5,
      GS = 2592e6,
      zC = 31536e6,
      IS = new Date,
      fS = new Date;

    function yC(FF, WF, SF, CF) {
      function AF(WF) {
        return FF(WF = 0 === arguments.length ? new Date : new Date(+WF)), WF
      }
      return AF.floor = WF => (FF(WF = new Date(+WF)), WF), AF.ceil = SF => (FF(SF = new Date(SF - 1)), WF(SF, 1), FF(SF), SF), AF.round = FF => {
        const WF = AF(FF),
          SF = AF.ceil(FF);
        return FF - WF < SF - FF ? WF : SF
      }, AF.offset = (FF, SF) => (WF(FF = new Date(+FF), null == SF ? 1 : Math.floor(SF)), FF), AF.range = (SF, CF, uF) => {
        const hF = [];
        if (SF = AF.ceil(SF), uF = null == uF ? 1 : Math.floor(uF), !(SF < CF) || !(uF > 0)) return hF;
        let bW;
        do {
          hF.push(bW = new Date(+SF)), WF(SF, uF), FF(SF)
        } while (bW < SF && SF < CF);
        return hF
      }, AF.filter = SF => yC((WF => {
        if (WF >= WF)
          for (; FF(WF), !SF(WF);) WF.setTime(WF - 1)
      }), ((FF, CF) => {
        if (FF >= FF)
          if (CF < 0)
            for (; ++CF <= 0;)
              for (; WF(FF, -1), !SF(FF););
          else
            for (; --CF >= 0;)
              for (; WF(FF, 1), !SF(FF););
      })), SF && (AF.count = (WF, CF) => (IS.setTime(+WF), fS.setTime(+CF), FF(IS), FF(fS), Math.floor(SF(IS, fS))), AF.every = FF => (FF = Math.floor(FF), isFinite(FF) && FF > 0 ? FF > 1 ? AF.filter(CF ? WF => CF(WF) % FF === 0 : WF => AF.count(0, WF) % FF === 0) : AF : null)), AF
    }
    const sS = yC((() => {}), ((FF, WF) => {
      FF.setTime(+FF + WF)
    }), ((FF, WF) => WF - FF));
    sS.every = FF => (FF = Math.floor(FF), isFinite(FF) && FF > 0 ? FF > 1 ? yC((WF => {
      WF.setTime(Math.floor(WF / FF) * FF)
    }), ((WF, SF) => {
      WF.setTime(+WF + SF * FF)
    }), ((WF, SF) => (SF - WF) / FF)) : sS : null);
    sS.range;
    const nS = yC((FF => {
        FF.setTime(FF - FF.getMilliseconds())
      }), ((FF, WF) => {
        FF.setTime(+FF + WF * ZS)
      }), ((FF, WF) => (WF - FF) / ZS), (FF => FF.getUTCSeconds())),
      HS = (nS.range, yC((FF => {
        FF.setTime(FF - FF.getMilliseconds() - FF.getSeconds() * ZS)
      }), ((FF, WF) => {
        FF.setTime(+FF + WF * oS)
      }), ((FF, WF) => (WF - FF) / oS), (FF => FF.getMinutes()))),
      KS = (HS.range, yC((FF => {
        FF.setUTCSeconds(0, 0)
      }), ((FF, WF) => {
        FF.setTime(+FF + WF * oS)
      }), ((FF, WF) => (WF - FF) / oS), (FF => FF.getUTCMinutes()))),
      wS = (KS.range, yC((FF => {
        FF.setTime(FF - FF.getMilliseconds() - FF.getSeconds() * ZS - FF.getMinutes() * oS)
      }), ((FF, WF) => {
        FF.setTime(+FF + WF * YS)
      }), ((FF, WF) => (WF - FF) / YS), (FF => FF.getHours()))),
      XS = (wS.range, yC((FF => {
        FF.setUTCMinutes(0, 0, 0)
      }), ((FF, WF) => {
        FF.setTime(+FF + WF * YS)
      }), ((FF, WF) => (WF - FF) / YS), (FF => FF.getUTCHours()))),
      US = (XS.range, yC((FF => FF.setHours(0, 0, 0, 0)), ((FF, WF) => FF.setDate(FF.getDate() + WF)), ((FF, WF) => (WF - FF - (WF.getTimezoneOffset() - FF.getTimezoneOffset()) * oS) / MS), (FF => FF.getDate() - 1))),
      BS = (US.range, yC((FF => {
        FF.setUTCHours(0, 0, 0, 0)
      }), ((FF, WF) => {
        FF.setUTCDate(FF.getUTCDate() + WF)
      }), ((FF, WF) => (WF - FF) / MS), (FF => FF.getUTCDate() - 1))),
      jC = (BS.range, yC((FF => {
        FF.setUTCHours(0, 0, 0, 0)
      }), ((FF, WF) => {
        FF.setUTCDate(FF.getUTCDate() + WF)
      }), ((FF, WF) => (WF - FF) / MS), (FF => Math.floor(FF / MS))));
    jC.range;

    function vC(FF) {
      return yC((WF => {
        WF.setDate(WF.getDate() - (WF.getDay() + 7 - FF) % 7), WF.setHours(0, 0, 0, 0)
      }), ((FF, WF) => {
        FF.setDate(FF.getDate() + 7 * WF)
      }), ((FF, WF) => (WF - FF - (WF.getTimezoneOffset() - FF.getTimezoneOffset()) * oS) / cC))
    }
    const JS = vC(0),
      pS = vC(1),
      lS = vC(2),
      FC = vC(3),
      WC = vC(4),
      SC = vC(5),
      CC = vC(6);
    JS.range, pS.range, lS.range, FC.range, WC.range, SC.range, CC.range;

    function AC(FF) {
      return yC((WF => {
        WF.setUTCDate(WF.getUTCDate() - (WF.getUTCDay() + 7 - FF) % 7), WF.setUTCHours(0, 0, 0, 0)
      }), ((FF, WF) => {
        FF.setUTCDate(FF.getUTCDate() + 7 * WF)
      }), ((FF, WF) => (WF - FF) / cC))
    }
    const uC = AC(0),
      hC = AC(1),
      bA = AC(2),
      dC = AC(3),
      PC = AC(4),
      RC = AC(5),
      iA = AC(6),
      eC = (uC.range, hC.range, bA.range, dC.range, PC.range, RC.range, iA.range, yC((FF => {
        FF.setDate(1), FF.setHours(0, 0, 0, 0)
      }), ((FF, WF) => {
        FF.setMonth(FF.getMonth() + WF)
      }), ((FF, WF) => WF.getMonth() - FF.getMonth() + 12 * (WF.getFullYear() - FF.getFullYear())), (FF => FF.getMonth()))),
      EC = (eC.range, yC((FF => {
        FF.setUTCDate(1), FF.setUTCHours(0, 0, 0, 0)
      }), ((FF, WF) => {
        FF.setUTCMonth(FF.getUTCMonth() + WF)
      }), ((FF, WF) => WF.getUTCMonth() - FF.getUTCMonth() + 12 * (WF.getUTCFullYear() - FF.getUTCFullYear())), (FF => FF.getUTCMonth()))),
      QC = (EC.range, yC((FF => {
        FF.setMonth(0, 1), FF.setHours(0, 0, 0, 0)
      }), ((FF, WF) => {
        FF.setFullYear(FF.getFullYear() + WF)
      }), ((FF, WF) => WF.getFullYear() - FF.getFullYear()), (FF => FF.getFullYear())));
    QC.every = FF => isFinite(FF = Math.floor(FF)) && FF > 0 ? yC((WF => {
      WF.setFullYear(Math.floor(WF.getFullYear() / FF) * FF), WF.setMonth(0, 1), WF.setHours(0, 0, 0, 0)
    }), ((WF, SF) => {
      WF.setFullYear(WF.getFullYear() + SF * FF)
    })) : null;
    QC.range;
    const rA = yC((FF => {
      FF.setUTCMonth(0, 1), FF.setUTCHours(0, 0, 0, 0)
    }), ((FF, WF) => {
      FF.setUTCFullYear(FF.getUTCFullYear() + WF)
    }), ((FF, WF) => WF.getUTCFullYear() - FF.getUTCFullYear()), (FF => FF.getUTCFullYear()));
    rA.every = FF => isFinite(FF = Math.floor(FF)) && FF > 0 ? yC((WF => {
      WF.setUTCFullYear(Math.floor(WF.getUTCFullYear() / FF) * FF), WF.setUTCMonth(0, 1), WF.setUTCHours(0, 0, 0, 0)
    }), ((WF, SF) => {
      WF.setUTCFullYear(WF.getUTCFullYear() + SF * FF)
    })) : null;
    rA.range;

    function gA(FF, WF, SF, CF, AF, uF) {
      const hF = [
        [nS, 1, ZS],
        [nS, 5, 5e3],
        [nS, 15, 15e3],
        [nS, 30, 3e4],
        [uF, 1, oS],
        [uF, 5, 3e5],
        [uF, 15, 9e5],
        [uF, 30, 18e5],
        [AF, 1, YS],
        [AF, 3, 108e5],
        [AF, 6, 216e5],
        [AF, 12, 432e5],
        [CF, 1, MS],
        [CF, 2, 1728e5],
        [SF, 1, cC],
        [WF, 1, GS],
        [WF, 3, 7776e6],
        [FF, 1, zC]
      ];

      function bW(WF, SF, CF) {
        const AF = Math.abs(SF - WF) / CF,
          uF = QF((FF => {
            let [, , WF] = FF;
            return WF
          })).right(hF, AF);
        if (uF === hF.length) return FF.every(iW(WF / zC, SF / zC, CF));
        if (0 === uF) return sS.every(Math.max(iW(WF, SF, CF), 1));
        const [bW, dF] = hF[AF / hF[uF - 1][2] < hF[uF][2] / AF ? uF - 1 : uF];
        return bW.every(dF)
      }
      return [function(FF, WF, SF) {
        const CF = WF < FF;
        CF && ([FF, WF] = [WF, FF]);
        const AF = SF && "function" === typeof SF.range ? SF : bW(FF, WF, SF),
          uF = AF ? AF.range(FF, +WF + 1) : [];
        return CF ? uF.reverse() : uF
      }, bW]
    }
    const [tA, TC] = gA(rA, EC, uC, jC, XS, KS), [aA, kA] = gA(QC, eC, JS, US, wS, HS);

    function qA(FF) {
      if (0 <= FF.y && FF.y < 100) {
        var WF = new Date(-1, FF.m, FF.d, FF.H, FF.M, FF.S, FF.L);
        return WF.setFullYear(FF.y), WF
      }
      return new Date(FF.y, FF.m, FF.d, FF.H, FF.M, FF.S, FF.L)
    }

    function VC(FF) {
      if (0 <= FF.y && FF.y < 100) {
        var WF = new Date(Date.UTC(-1, FF.m, FF.d, FF.H, FF.M, FF.S, FF.L));
        return WF.setUTCFullYear(FF.y), WF
      }
      return new Date(Date.UTC(FF.y, FF.m, FF.d, FF.H, FF.M, FF.S, FF.L))
    }

    function NC(FF, WF, SF) {
      return {
        y: FF,
        m: WF,
        d: SF,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var DC, LC, mA, OC = {
        "-": "",
        _: " ",
        0: "0"
      },
      xA = /^\s*\d+/,
      ZC = /^%/,
      oC = /[\\^$*+?|[\]().{}]/g;

    function YC(FF, WF, SF) {
      var CF = FF < 0 ? "-" : "",
        AF = (CF ? -FF : FF) + "",
        uF = AF.length;
      return CF + (uF < SF ? new Array(SF - uF + 1).join(WF) + AF : AF)
    }

    function MC(FF) {
      return FF.replace(oC, "\\$&")
    }

    function cA(FF) {
      return new RegExp("^(?:" + FF.map(MC).join("|") + ")", "i")
    }

    function GC(FF) {
      return new Map(FF.map(((FF, WF) => [FF.toLowerCase(), WF])))
    }

    function zA(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 1));
      return CF ? (FF.w = +CF[0], SF + CF[0].length) : -1
    }

    function IC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 1));
      return CF ? (FF.u = +CF[0], SF + CF[0].length) : -1
    }

    function fC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.U = +CF[0], SF + CF[0].length) : -1
    }

    function yA(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.V = +CF[0], SF + CF[0].length) : -1
    }

    function sC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.W = +CF[0], SF + CF[0].length) : -1
    }

    function nC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 4));
      return CF ? (FF.y = +CF[0], SF + CF[0].length) : -1
    }

    function HC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.y = +CF[0] + (+CF[0] > 68 ? 1900 : 2e3), SF + CF[0].length) : -1
    }

    function KC(FF, WF, SF) {
      var CF = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(WF.slice(SF, SF + 6));
      return CF ? (FF.Z = CF[1] ? 0 : -(CF[2] + (CF[3] || "00")), SF + CF[0].length) : -1
    }

    function wC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 1));
      return CF ? (FF.q = 3 * CF[0] - 3, SF + CF[0].length) : -1
    }

    function XC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.m = CF[0] - 1, SF + CF[0].length) : -1
    }

    function UC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.d = +CF[0], SF + CF[0].length) : -1
    }

    function BC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 3));
      return CF ? (FF.m = 0, FF.d = +CF[0], SF + CF[0].length) : -1
    }

    function jA(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.H = +CF[0], SF + CF[0].length) : -1
    }

    function vA(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.M = +CF[0], SF + CF[0].length) : -1
    }

    function JC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 2));
      return CF ? (FF.S = +CF[0], SF + CF[0].length) : -1
    }

    function pC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 3));
      return CF ? (FF.L = +CF[0], SF + CF[0].length) : -1
    }

    function lC(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF, SF + 6));
      return CF ? (FF.L = Math.floor(CF[0] / 1e3), SF + CF[0].length) : -1
    }

    function FA(FF, WF, SF) {
      var CF = ZC.exec(WF.slice(SF, SF + 1));
      return CF ? SF + CF[0].length : -1
    }

    function WA(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF));
      return CF ? (FF.Q = +CF[0], SF + CF[0].length) : -1
    }

    function SA(FF, WF, SF) {
      var CF = xA.exec(WF.slice(SF));
      return CF ? (FF.s = +CF[0], SF + CF[0].length) : -1
    }

    function CA(FF, WF) {
      return YC(FF.getDate(), WF, 2)
    }

    function AA(FF, WF) {
      return YC(FF.getHours(), WF, 2)
    }

    function uA(FF, WF) {
      return YC(FF.getHours() % 12 || 12, WF, 2)
    }

    function hA(FF, WF) {
      return YC(1 + US.count(QC(FF), FF), WF, 3)
    }

    function bu(FF, WF) {
      return YC(FF.getMilliseconds(), WF, 3)
    }

    function dA(FF, WF) {
      return bu(FF, WF) + "000"
    }

    function PA(FF, WF) {
      return YC(FF.getMonth() + 1, WF, 2)
    }

    function RA(FF, WF) {
      return YC(FF.getMinutes(), WF, 2)
    }

    function iu(FF, WF) {
      return YC(FF.getSeconds(), WF, 2)
    }

    function eA(FF) {
      var WF = FF.getDay();
      return 0 === WF ? 7 : WF
    }

    function EA(FF, WF) {
      return YC(JS.count(QC(FF) - 1, FF), WF, 2)
    }

    function QA(FF) {
      var WF = FF.getDay();
      return WF >= 4 || 0 === WF ? WC(FF) : WC.ceil(FF)
    }

    function ru(FF, WF) {
      return FF = QA(FF), YC(WC.count(QC(FF), FF) + (4 === QC(FF).getDay()), WF, 2)
    }

    function gu(FF) {
      return FF.getDay()
    }

    function tu(FF, WF) {
      return YC(pS.count(QC(FF) - 1, FF), WF, 2)
    }

    function TA(FF, WF) {
      return YC(FF.getFullYear() % 100, WF, 2)
    }

    function au(FF, WF) {
      return YC((FF = QA(FF)).getFullYear() % 100, WF, 2)
    }

    function ku(FF, WF) {
      return YC(FF.getFullYear() % 1e4, WF, 4)
    }

    function qu(FF, WF) {
      var SF = FF.getDay();
      return YC((FF = SF >= 4 || 0 === SF ? WC(FF) : WC.ceil(FF)).getFullYear() % 1e4, WF, 4)
    }

    function VA(FF) {
      var WF = FF.getTimezoneOffset();
      return (WF > 0 ? "-" : (WF *= -1, "+")) + YC(WF / 60 | 0, "0", 2) + YC(WF % 60, "0", 2)
    }

    function NA(FF, WF) {
      return YC(FF.getUTCDate(), WF, 2)
    }

    function DA(FF, WF) {
      return YC(FF.getUTCHours(), WF, 2)
    }

    function LA(FF, WF) {
      return YC(FF.getUTCHours() % 12 || 12, WF, 2)
    }

    function mu(FF, WF) {
      return YC(1 + BS.count(rA(FF), FF), WF, 3)
    }

    function OA(FF, WF) {
      return YC(FF.getUTCMilliseconds(), WF, 3)
    }

    function xu(FF, WF) {
      return OA(FF, WF) + "000"
    }

    function ZA(FF, WF) {
      return YC(FF.getUTCMonth() + 1, WF, 2)
    }

    function oA(FF, WF) {
      return YC(FF.getUTCMinutes(), WF, 2)
    }

    function YA(FF, WF) {
      return YC(FF.getUTCSeconds(), WF, 2)
    }

    function MA(FF) {
      var WF = FF.getUTCDay();
      return 0 === WF ? 7 : WF
    }

    function cu(FF, WF) {
      return YC(uC.count(rA(FF) - 1, FF), WF, 2)
    }

    function GA(FF) {
      var WF = FF.getUTCDay();
      return WF >= 4 || 0 === WF ? PC(FF) : PC.ceil(FF)
    }

    function zu(FF, WF) {
      return FF = GA(FF), YC(PC.count(rA(FF), FF) + (4 === rA(FF).getUTCDay()), WF, 2)
    }

    function IA(FF) {
      return FF.getUTCDay()
    }

    function fA(FF, WF) {
      return YC(hC.count(rA(FF) - 1, FF), WF, 2)
    }

    function yu(FF, WF) {
      return YC(FF.getUTCFullYear() % 100, WF, 2)
    }

    function sA(FF, WF) {
      return YC((FF = GA(FF)).getUTCFullYear() % 100, WF, 2)
    }

    function nA(FF, WF) {
      return YC(FF.getUTCFullYear() % 1e4, WF, 4)
    }

    function HA(FF, WF) {
      var SF = FF.getUTCDay();
      return YC((FF = SF >= 4 || 0 === SF ? PC(FF) : PC.ceil(FF)).getUTCFullYear() % 1e4, WF, 4)
    }

    function KA() {
      return "+0000"
    }

    function wA() {
      return "%"
    }

    function XA(FF) {
      return +FF
    }

    function UA(FF) {
      return Math.floor(+FF / 1e3)
    }

    function BA(FF) {
      return new Date(FF)
    }

    function ju(FF) {
      return FF instanceof Date ? +FF : +new Date(+FF)
    }

    function vu(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
      var RF = OW(),
        iW = RF.invert,
        eF = RF.domain,
        EF = PF(".%L"),
        QF = PF(":%S"),
        rW = PF("%I:%M"),
        gW = PF("%I %p"),
        tW = PF("%a %d"),
        TF = PF("%b %d"),
        aW = PF("%B"),
        kW = PF("%Y");

      function qW(FF) {
        return (dF(FF) < FF ? EF : bW(FF) < FF ? QF : hF(FF) < FF ? rW : uF(FF) < FF ? gW : CF(FF) < FF ? AF(FF) < FF ? tW : TF : SF(FF) < FF ? aW : kW)(FF)
      }
      return RF.invert = function(FF) {
        return new Date(iW(FF))
      }, RF.domain = function(FF) {
        return arguments.length ? eF(Array.from(FF, ju)) : eF().map(BA)
      }, RF.ticks = function(WF) {
        var SF = eF();
        return FF(SF[0], SF[SF.length - 1], null == WF ? 10 : WF)
      }, RF.tickFormat = function(FF, WF) {
        return null == WF ? qW : PF(WF)
      }, RF.nice = function(FF) {
        var SF = eF();
        return FF && "function" === typeof FF.range || (FF = WF(SF[0], SF[SF.length - 1], null == FF ? 10 : FF)), FF ? eF(vS(SF, FF)) : RF
      }, RF.copy = function() {
        return LW(RF, vu(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF))
      }, RF
    }

    function JA() {
      return ZW.g.apply(vu(aA, kA, QC, eC, JS, US, wS, HS, nS, LC).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function pA() {
      return ZW.g.apply(vu(tA, TC, rA, EC, uC, BS, XS, KS, nS, mA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function lA() {
      var FF, WF, SF, CF, AF, uF = 0,
        hF = 1,
        bW = qS,
        dF = !1;

      function PF(WF) {
        return null == WF || isNaN(WF = +WF) ? AF : bW(0 === SF ? .5 : (WF = (CF(WF) - FF) * SF, dF ? Math.max(0, Math.min(1, WF)) : WF))
      }

      function RF(FF) {
        return function(WF) {
          var SF, CF;
          return arguments.length ? ([SF, CF] = WF, bW = FF(SF, CF), PF) : [bW(0), bW(1)]
        }
      }
      return PF.domain = function(AF) {
          return arguments.length ? ([uF, hF] = AF, FF = CF(uF = +uF), WF = CF(hF = +hF), SF = FF === WF ? 0 : 1 / (WF - FF), PF) : [uF, hF]
        }, PF.clamp = function(FF) {
          return arguments.length ? (dF = !!FF, PF) : dF
        }, PF.interpolator = function(FF) {
          return arguments.length ? (bW = FF, PF) : bW
        }, PF.range = RF(tS), PF.rangeRound = RF(TW), PF.unknown = function(FF) {
          return arguments.length ? (AF = FF, PF) : AF
        },
        function(AF) {
          return CF = AF, FF = AF(uF), WF = AF(hF), SF = FF === WF ? 0 : 1 / (WF - FF), PF
        }
    }

    function Fu(FF, WF) {
      return WF.domain(FF.domain()).interpolator(FF.interpolator()).clamp(FF.clamp()).unknown(FF.unknown())
    }

    function Wu() {
      var FF = UW(lA()(qS));
      return FF.copy = function() {
        return Fu(FF, Wu())
      }, ZW.d.apply(FF, arguments)
    }

    function Su() {
      var FF = CS(lA()).domain([1, 10]);
      return FF.copy = function() {
        return Fu(FF, Su()).base(FF.base())
      }, ZW.d.apply(FF, arguments)
    }

    function Cu() {
      var FF = bC(lA());
      return FF.copy = function() {
        return Fu(FF, Cu()).constant(FF.constant())
      }, ZW.d.apply(FF, arguments)
    }

    function Au() {
      var FF = ES(lA());
      return FF.copy = function() {
        return Fu(FF, Au()).exponent(FF.exponent())
      }, ZW.d.apply(FF, arguments)
    }

    function uu() {
      return Au.apply(null, arguments).exponent(.5)
    }

    function hu() {
      var FF = [],
        WF = qS;

      function SF(SF) {
        if (null != SF && !isNaN(SF = +SF)) return WF((aW(FF, SF, 1) - 1) / (FF.length - 1))
      }
      return SF.domain = function(WF) {
        if (!arguments.length) return FF.slice();
        FF = [];
        for (let SF of WF) null == SF || isNaN(SF = +SF) || FF.push(SF);
        return FF.sort(eF), SF
      }, SF.interpolator = function(FF) {
        return arguments.length ? (WF = FF, SF) : WF
      }, SF.range = function() {
        return FF.map(((SF, CF) => WF(CF / (FF.length - 1))))
      }, SF.quantiles = function(WF) {
        return Array.from({
          length: WF + 1
        }, ((SF, CF) => DS(FF, CF / WF)))
      }, SF.copy = function() {
        return hu(WF).domain(FF)
      }, ZW.d.apply(SF, arguments)
    }

    function bh() {
      var FF, WF, SF, CF, AF, uF, hF, bW = 0,
        dF = .5,
        PF = 1,
        RF = 1,
        iW = qS,
        eF = !1;

      function EF(FF) {
        return isNaN(FF = +FF) ? hF : (FF = .5 + ((FF = +uF(FF)) - WF) * (RF * FF < RF * WF ? CF : AF), iW(eF ? Math.max(0, Math.min(1, FF)) : FF))
      }

      function QF(FF) {
        return function(WF) {
          var SF, CF, AF;
          return arguments.length ? ([SF, CF, AF] = WF, iW = function(FF, WF) {
            void 0 === WF && (WF = FF, FF = tS);
            for (var SF = 0, CF = WF.length - 1, AF = WF[0], uF = new Array(CF < 0 ? 0 : CF); SF < CF;) uF[SF] = FF(AF, AF = WF[++SF]);
            return function(FF) {
              var WF = Math.max(0, Math.min(CF - 1, Math.floor(FF *= CF)));
              return uF[WF](FF - WF)
            }
          }(FF, [SF, CF, AF]), EF) : [iW(0), iW(.5), iW(1)]
        }
      }
      return EF.domain = function(hF) {
          return arguments.length ? ([bW, dF, PF] = hF, FF = uF(bW = +bW), WF = uF(dF = +dF), SF = uF(PF = +PF), CF = FF === WF ? 0 : .5 / (WF - FF), AF = WF === SF ? 0 : .5 / (SF - WF), RF = WF < FF ? -1 : 1, EF) : [bW, dF, PF]
        }, EF.clamp = function(FF) {
          return arguments.length ? (eF = !!FF, EF) : eF
        }, EF.interpolator = function(FF) {
          return arguments.length ? (iW = FF, EF) : iW
        }, EF.range = QF(tS), EF.rangeRound = QF(TW), EF.unknown = function(FF) {
          return arguments.length ? (hF = FF, EF) : hF
        },
        function(hF) {
          return uF = hF, FF = hF(bW), WF = hF(dF), SF = hF(PF), CF = FF === WF ? 0 : .5 / (WF - FF), AF = WF === SF ? 0 : .5 / (SF - WF), RF = WF < FF ? -1 : 1, EF
        }
    }

    function du() {
      var FF = UW(bh()(qS));
      return FF.copy = function() {
        return Fu(FF, du())
      }, ZW.d.apply(FF, arguments)
    }

    function Pu() {
      var FF = CS(bh()).domain([.1, 1, 10]);
      return FF.copy = function() {
        return Fu(FF, Pu()).base(FF.base())
      }, ZW.d.apply(FF, arguments)
    }

    function Ru() {
      var FF = bC(bh());
      return FF.copy = function() {
        return Fu(FF, Ru()).constant(FF.constant())
      }, ZW.d.apply(FF, arguments)
    }

    function ih() {
      var FF = ES(bh());
      return FF.copy = function() {
        return Fu(FF, ih()).exponent(FF.exponent())
      }, ZW.d.apply(FF, arguments)
    }

    function eu() {
      return ih.apply(null, arguments).exponent(.5)
    }

    function Eu(FF, WF) {
      if ((AF = FF.length) > 1)
        for (var SF, CF, AF, uF = 1, hF = FF[WF[0]], bW = hF.length; uF < AF; ++uF)
          for (CF = hF, hF = FF[WF[uF]], SF = 0; SF < bW; ++SF) hF[SF][1] += hF[SF][0] = isNaN(CF[SF][1]) ? CF[SF][0] : CF[SF][1]
    }! function(FF) {
      DC = function(FF) {
        var WF = FF.dateTime,
          SF = FF.date,
          CF = FF.time,
          AF = FF.periods,
          uF = FF.days,
          hF = FF.shortDays,
          bW = FF.months,
          dF = FF.shortMonths,
          PF = cA(AF),
          RF = GC(AF),
          iW = cA(uF),
          eF = GC(uF),
          EF = cA(hF),
          QF = GC(hF),
          rW = cA(bW),
          gW = GC(bW),
          tW = cA(dF),
          TF = GC(dF),
          aW = {
            a: function(FF) {
              return hF[FF.getDay()]
            },
            A: function(FF) {
              return uF[FF.getDay()]
            },
            b: function(FF) {
              return dF[FF.getMonth()]
            },
            B: function(FF) {
              return bW[FF.getMonth()]
            },
            c: null,
            d: CA,
            e: CA,
            f: dA,
            g: au,
            G: qu,
            H: AA,
            I: uA,
            j: hA,
            L: bu,
            m: PA,
            M: RA,
            p: function(FF) {
              return AF[+(FF.getHours() >= 12)]
            },
            q: function(FF) {
              return 1 + ~~(FF.getMonth() / 3)
            },
            Q: XA,
            s: UA,
            S: iu,
            u: eA,
            U: EA,
            V: ru,
            w: gu,
            W: tu,
            x: null,
            X: null,
            y: TA,
            Y: ku,
            Z: VA,
            "%": wA
          },
          kW = {
            a: function(FF) {
              return hF[FF.getUTCDay()]
            },
            A: function(FF) {
              return uF[FF.getUTCDay()]
            },
            b: function(FF) {
              return dF[FF.getUTCMonth()]
            },
            B: function(FF) {
              return bW[FF.getUTCMonth()]
            },
            c: null,
            d: NA,
            e: NA,
            f: xu,
            g: sA,
            G: HA,
            H: DA,
            I: LA,
            j: mu,
            L: OA,
            m: ZA,
            M: oA,
            p: function(FF) {
              return AF[+(FF.getUTCHours() >= 12)]
            },
            q: function(FF) {
              return 1 + ~~(FF.getUTCMonth() / 3)
            },
            Q: XA,
            s: UA,
            S: YA,
            u: MA,
            U: cu,
            V: zu,
            w: IA,
            W: fA,
            x: null,
            X: null,
            y: yu,
            Y: nA,
            Z: KA,
            "%": wA
          },
          qW = {
            a: function(FF, WF, SF) {
              var CF = EF.exec(WF.slice(SF));
              return CF ? (FF.w = QF.get(CF[0].toLowerCase()), SF + CF[0].length) : -1
            },
            A: function(FF, WF, SF) {
              var CF = iW.exec(WF.slice(SF));
              return CF ? (FF.w = eF.get(CF[0].toLowerCase()), SF + CF[0].length) : -1
            },
            b: function(FF, WF, SF) {
              var CF = tW.exec(WF.slice(SF));
              return CF ? (FF.m = TF.get(CF[0].toLowerCase()), SF + CF[0].length) : -1
            },
            B: function(FF, WF, SF) {
              var CF = rW.exec(WF.slice(SF));
              return CF ? (FF.m = gW.get(CF[0].toLowerCase()), SF + CF[0].length) : -1
            },
            c: function(FF, SF, CF) {
              return DF(FF, WF, SF, CF)
            },
            d: UC,
            e: UC,
            f: lC,
            g: HC,
            G: nC,
            H: jA,
            I: jA,
            j: BC,
            L: pC,
            m: XC,
            M: vA,
            p: function(FF, WF, SF) {
              var CF = PF.exec(WF.slice(SF));
              return CF ? (FF.p = RF.get(CF[0].toLowerCase()), SF + CF[0].length) : -1
            },
            q: wC,
            Q: WA,
            s: SA,
            S: JC,
            u: IC,
            U: fC,
            V: yA,
            w: zA,
            W: sC,
            x: function(FF, WF, CF) {
              return DF(FF, SF, WF, CF)
            },
            X: function(FF, WF, SF) {
              return DF(FF, CF, WF, SF)
            },
            y: HC,
            Y: nC,
            Z: KC,
            "%": FA
          };

        function VF(FF, WF) {
          return function(SF) {
            var CF, AF, uF, hF = [],
              bW = -1,
              dF = 0,
              PF = FF.length;
            for (SF instanceof Date || (SF = new Date(+SF)); ++bW < PF;) 37 === FF.charCodeAt(bW) && (hF.push(FF.slice(dF, bW)), null != (AF = OC[CF = FF.charAt(++bW)]) ? CF = FF.charAt(++bW) : AF = "e" === CF ? " " : "0", (uF = WF[CF]) && (CF = uF(SF, AF)), hF.push(CF), dF = bW + 1);
            return hF.push(FF.slice(dF, bW)), hF.join("")
          }
        }

        function NF(FF, WF) {
          return function(SF) {
            var CF, AF, uF = NC(1900, void 0, 1);
            if (DF(uF, FF, SF += "", 0) != SF.length) return null;
            if ("Q" in uF) return new Date(uF.Q);
            if ("s" in uF) return new Date(1e3 * uF.s + ("L" in uF ? uF.L : 0));
            if (WF && !("Z" in uF) && (uF.Z = 0), "p" in uF && (uF.H = uF.H % 12 + 12 * uF.p), void 0 === uF.m && (uF.m = "q" in uF ? uF.q : 0), "V" in uF) {
              if (uF.V < 1 || uF.V > 53) return null;
              "w" in uF || (uF.w = 1), "Z" in uF ? (AF = (CF = VC(NC(uF.y, 0, 1))).getUTCDay(), CF = AF > 4 || 0 === AF ? hC.ceil(CF) : hC(CF), CF = BS.offset(CF, 7 * (uF.V - 1)), uF.y = CF.getUTCFullYear(), uF.m = CF.getUTCMonth(), uF.d = CF.getUTCDate() + (uF.w + 6) % 7) : (AF = (CF = qA(NC(uF.y, 0, 1))).getDay(), CF = AF > 4 || 0 === AF ? pS.ceil(CF) : pS(CF), CF = US.offset(CF, 7 * (uF.V - 1)), uF.y = CF.getFullYear(), uF.m = CF.getMonth(), uF.d = CF.getDate() + (uF.w + 6) % 7)
            } else("W" in uF || "U" in uF) && ("w" in uF || (uF.w = "u" in uF ? uF.u % 7 : "W" in uF ? 1 : 0), AF = "Z" in uF ? VC(NC(uF.y, 0, 1)).getUTCDay() : qA(NC(uF.y, 0, 1)).getDay(), uF.m = 0, uF.d = "W" in uF ? (uF.w + 6) % 7 + 7 * uF.W - (AF + 5) % 7 : uF.w + 7 * uF.U - (AF + 6) % 7);
            return "Z" in uF ? (uF.H += uF.Z / 100 | 0, uF.M += uF.Z % 100, VC(uF)) : qA(uF)
          }
        }

        function DF(FF, WF, SF, CF) {
          for (var AF, uF, hF = 0, bW = WF.length, dF = SF.length; hF < bW;) {
            if (CF >= dF) return -1;
            if (37 === (AF = WF.charCodeAt(hF++))) {
              if (AF = WF.charAt(hF++), !(uF = qW[AF in OC ? WF.charAt(hF++) : AF]) || (CF = uF(FF, SF, CF)) < 0) return -1
            } else if (AF != SF.charCodeAt(CF++)) return -1
          }
          return CF
        }
        return aW.x = VF(SF, aW), aW.X = VF(CF, aW), aW.c = VF(WF, aW), kW.x = VF(SF, kW), kW.X = VF(CF, kW), kW.c = VF(WF, kW), {
          format: function(FF) {
            var WF = VF(FF += "", aW);
            return WF.toString = function() {
              return FF
            }, WF
          },
          parse: function(FF) {
            var WF = NF(FF += "", !1);
            return WF.toString = function() {
              return FF
            }, WF
          },
          utcFormat: function(FF) {
            var WF = VF(FF += "", kW);
            return WF.toString = function() {
              return FF
            }, WF
          },
          utcParse: function(FF) {
            var WF = NF(FF += "", !0);
            return WF.toString = function() {
              return FF
            }, WF
          }
        }
      }(FF), LC = DC.format, DC.parse, mA = DC.utcFormat, DC.utcParse
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
    var Qu = SF(5179),
      rh = SF(5071);

    function gh(FF) {
      for (var WF = FF.length, SF = new Array(WF); --WF >= 0;) SF[WF] = WF;
      return SF
    }

    function th(FF, WF) {
      return FF[WF]
    }

    function Tu(FF) {
      const WF = [];
      return WF.key = FF, WF
    }
    var ah = SF(5123),
      kh = SF.n(ah),
      qh = SF(5138),
      Vu = SF.n(qh),
      Nu = SF(4392),
      Du = SF.n(Nu),
      Lu = SF(4241),
      mh = SF.n(Lu),
      Ou = SF(4139),
      xh = SF.n(Ou),
      Zu = SF(4162),
      ou = SF.n(Zu),
      Yu = SF(5152),
      Mu = SF.n(Yu),
      ch = SF(4151),
      Gu = SF.n(ch),
      zh = SF(5026),
      Iu = SF.n(zh),
      fu = SF(5156),
      yh = SF.n(fu),
      su = SF(4476),
      nu = SF.n(su),
      Hu = SF(5162),
      Ku = SF.n(Hu);

    function wu(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return Xu(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(FF)) return Array.from(FF)
      }(FF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return Xu(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return Xu(FF, WF)
      }(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xu(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }
    var Uu = function(FF) {
        return FF
      },
      Bu = {
        "@@functional/placeholder": !0
      },
      jh = function(FF) {
        return FF === Bu
      },
      vh = function(FF) {
        return function WF() {
          return 0 === arguments.length || 1 === arguments.length && jh(arguments.length <= 0 ? void 0 : arguments[0]) ? WF : FF.apply(void 0, arguments)
        }
      },
      Ju = function FF(WF, SF) {
        return 1 === WF ? SF : vh((function() {
          for (var CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
          var hF = AF.filter((function(FF) {
            return FF !== Bu
          })).length;
          return hF >= WF ? SF.apply(void 0, AF) : FF(WF - hF, vh((function() {
            for (var FF = arguments.length, WF = new Array(FF), CF = 0; CF < FF; CF++) WF[CF] = arguments[CF];
            var uF = AF.map((function(FF) {
              return jh(FF) ? WF.shift() : FF
            }));
            return SF.apply(void 0, wu(uF).concat(WF))
          })))
        }))
      },
      pu = function(FF) {
        return Ju(FF.length, FF)
      },
      lu = function(FF, WF) {
        for (var SF = [], CF = FF; CF < WF; ++CF) SF[CF - FF] = CF;
        return SF
      },
      Fh = pu((function(FF, WF) {
        return Array.isArray(WF) ? WF.map(FF) : Object.keys(WF).map((function(FF) {
          return WF[FF]
        })).map(FF)
      })),
      Wh = function() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        if (!WF.length) return Uu;
        var CF = WF.reverse(),
          AF = CF[0],
          uF = CF.slice(1);
        return function() {
          return uF.reduce((function(FF, WF) {
            return WF(FF)
          }), AF.apply(void 0, arguments))
        }
      },
      Sh = function(FF) {
        return Array.isArray(FF) ? FF.reverse() : FF.split("").reverse.join("")
      },
      Ch = function(FF) {
        var WF = null,
          SF = null;
        return function() {
          for (var CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
          return WF && AF.every((function(FF, SF) {
            return FF === WF[SF]
          })) ? SF : (WF = AF, SF = FF.apply(void 0, AF))
        }
      };
    const Ah = {
      rangeStep: function(FF, WF, SF) {
        for (var CF = new(Ku())(FF), AF = 0, uF = []; CF.lt(WF) && AF < 1e5;) uF.push(CF.toNumber()), CF = CF.add(SF), AF++;
        return uF
      },
      getDigitCount: function(FF) {
        return 0 === FF ? 1 : Math.floor(new(Ku())(FF).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: pu((function(FF, WF, SF) {
        var CF = +FF;
        return CF + SF * (+WF - CF)
      })),
      uninterpolateNumber: pu((function(FF, WF, SF) {
        var CF = WF - +FF;
        return (SF - FF) / (CF = CF || 1 / 0)
      })),
      uninterpolateTruncation: pu((function(FF, WF, SF) {
        var CF = WF - +FF;
        return CF = CF || 1 / 0, Math.max(0, Math.min(1, (SF - FF) / CF))
      }))
    };

    function uh(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return dh(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(FF)) return Array.from(FF)
      }(FF) || bb(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hh(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(FF))) return;
        var SF = [],
          CF = !0,
          AF = !1,
          uF = void 0;
        try {
          for (var hF, bW = FF[Symbol.iterator](); !(CF = (hF = bW.next()).done) && (SF.push(hF.value), !WF || SF.length !== WF); CF = !0);
        } catch (dF) {
          AF = !0, uF = dF
        } finally {
          try {
            CF || null == bW.return || bW.return()
          } finally {
            if (AF) throw uF
          }
        }
        return SF
      }(FF, WF) || bb(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bb(FF, WF) {
      if (FF) {
        if ("string" === typeof FF) return dh(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        return "Object" === SF && FF.constructor && (SF = FF.constructor.name), "Map" === SF || "Set" === SF ? Array.from(FF) : "Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF) ? dh(FF, WF) : void 0
      }
    }

    function dh(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function Ph(FF) {
      var WF = hh(FF, 2),
        SF = WF[0],
        CF = WF[1],
        AF = SF,
        uF = CF;
      return SF > CF && (AF = CF, uF = SF), [AF, uF]
    }

    function Rh(FF, WF, SF) {
      if (FF.lte(0)) return new(Ku())(0);
      var CF = Ah.getDigitCount(FF.toNumber()),
        AF = new(Ku())(10).pow(CF),
        uF = FF.div(AF),
        hF = 1 !== CF ? .05 : .1,
        bW = new(Ku())(Math.ceil(uF.div(hF).toNumber())).add(SF).mul(hF).mul(AF);
      return WF ? bW : new(Ku())(Math.ceil(bW))
    }

    function ib(FF, WF, SF) {
      var CF = 1,
        AF = new(Ku())(FF);
      if (!AF.isint() && SF) {
        var uF = Math.abs(FF);
        uF < 1 ? (CF = new(Ku())(10).pow(Ah.getDigitCount(FF) - 1), AF = new(Ku())(Math.floor(AF.div(CF).toNumber())).mul(CF)) : uF > 1 && (AF = new(Ku())(Math.floor(FF)))
      } else 0 === FF ? AF = new(Ku())(Math.floor((WF - 1) / 2)) : SF || (AF = new(Ku())(Math.floor(FF)));
      var hF = Math.floor((WF - 1) / 2);
      return Wh(Fh((function(FF) {
        return AF.add(new(Ku())(FF - hF).mul(CF)).toNumber()
      })), lu)(0, WF)
    }

    function eh(FF, WF, SF, CF) {
      var AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((WF - FF) / (SF - 1))) return {
        step: new(Ku())(0),
        tickMin: new(Ku())(0),
        tickMax: new(Ku())(0)
      };
      var uF, hF = Rh(new(Ku())(WF).sub(FF).div(SF - 1), CF, AF);
      uF = FF <= 0 && WF >= 0 ? new(Ku())(0) : (uF = new(Ku())(FF).add(WF).div(2)).sub(new(Ku())(uF).mod(hF));
      var bW = Math.ceil(uF.sub(FF).div(hF).toNumber()),
        dF = Math.ceil(new(Ku())(WF).sub(uF).div(hF).toNumber()),
        PF = bW + dF + 1;
      return PF > SF ? eh(FF, WF, SF, CF, AF + 1) : (PF < SF && (dF = WF > 0 ? dF + (SF - PF) : dF, bW = WF > 0 ? bW : bW + (SF - PF)), {
        step: hF,
        tickMin: uF.sub(new(Ku())(bW).mul(hF)),
        tickMax: uF.add(new(Ku())(dF).mul(hF))
      })
    }
    var Eh = Ch((function(FF) {
        var WF = hh(FF, 2),
          SF = WF[0],
          CF = WF[1],
          AF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          uF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hF = Math.max(AF, 2),
          bW = hh(Ph([SF, CF]), 2),
          dF = bW[0],
          PF = bW[1];
        if (dF === -1 / 0 || PF === 1 / 0) {
          var RF = PF === 1 / 0 ? [dF].concat(uh(lu(0, AF - 1).map((function() {
            return 1 / 0
          })))) : [].concat(uh(lu(0, AF - 1).map((function() {
            return -1 / 0
          }))), [PF]);
          return SF > CF ? Sh(RF) : RF
        }
        if (dF === PF) return ib(dF, AF, uF);
        var iW = eh(dF, PF, hF, uF),
          eF = iW.step,
          EF = iW.tickMin,
          QF = iW.tickMax,
          rW = Ah.rangeStep(EF, QF.add(new(Ku())(.1).mul(eF)), eF);
        return SF > CF ? Sh(rW) : rW
      })),
      Qh = (Ch((function(FF) {
        var WF = hh(FF, 2),
          SF = WF[0],
          CF = WF[1],
          AF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          uF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hF = Math.max(AF, 2),
          bW = hh(Ph([SF, CF]), 2),
          dF = bW[0],
          PF = bW[1];
        if (dF === -1 / 0 || PF === 1 / 0) return [SF, CF];
        if (dF === PF) return ib(dF, AF, uF);
        var RF = Rh(new(Ku())(PF).sub(dF).div(hF - 1), uF, 0),
          iW = Wh(Fh((function(FF) {
            return new(Ku())(dF).add(new(Ku())(FF).mul(RF)).toNumber()
          })), lu)(0, hF).filter((function(FF) {
            return FF >= dF && FF <= PF
          }));
        return SF > CF ? Sh(iW) : iW
      })), Ch((function(FF, WF) {
        var SF = hh(FF, 2),
          CF = SF[0],
          AF = SF[1],
          uF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hF = hh(Ph([CF, AF]), 2),
          bW = hF[0],
          dF = hF[1];
        if (bW === -1 / 0 || dF === 1 / 0) return [CF, AF];
        if (bW === dF) return [bW];
        var PF = Math.max(WF, 2),
          RF = Rh(new(Ku())(dF).sub(bW).div(PF - 1), uF, 0),
          iW = [].concat(uh(Ah.rangeStep(new(Ku())(bW), new(Ku())(dF).sub(new(Ku())(.99).mul(RF)), RF)), [dF]);
        return CF > AF ? Sh(iW) : iW
      }))),
      rb = SF(5169),
      gb = SF(4132),
      tb = SF(4398),
      Th = SF(5175);

    function ab(FF) {
      return ab = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, ab(FF)
    }

    function kb(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return qb(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || function(FF, WF) {
        if (!FF) return;
        if ("string" === typeof FF) return qb(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        "Object" === SF && FF.constructor && (SF = FF.constructor.name);
        if ("Map" === SF || "Set" === SF) return Array.from(FF);
        if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return qb(FF, WF)
      }(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qb(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function Vh(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function Nh(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? Vh(Object(SF), !0).forEach((function(WF) {
          Dh(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : Vh(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function Dh(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != ab(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != ab(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == ab(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function Lh(FF, WF, SF) {
      return Du()(FF) || Du()(WF) ? SF : (0, gb.p)(WF) ? ou()(FF, WF, SF) : mh()(WF) ? WF(FF) : SF
    }

    function mb(FF, WF, SF, CF) {
      var AF = Mu()(FF, (function(FF) {
        return Lh(FF, WF)
      }));
      if ("number" === SF) {
        var uF = AF.filter((function(FF) {
          return (0, gb.t)(FF) || parseFloat(FF)
        }));
        return uF.length ? [Vu()(uF), kh()(uF)] : [1 / 0, -1 / 0]
      }
      return (CF ? AF.filter((function(FF) {
        return !Du()(FF)
      })) : AF).map((function(FF) {
        return (0, gb.p)(FF) || FF instanceof Date ? FF : ""
      }))
    }
    var Oh = function(FF) {
        var WF, SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          CF = arguments.length > 2 ? arguments[2] : void 0,
          AF = arguments.length > 3 ? arguments[3] : void 0,
          uF = -1,
          hF = null !== (WF = null === SF || void 0 === SF ? void 0 : SF.length) && void 0 !== WF ? WF : 0;
        if (hF <= 1) return 0;
        if (AF && "angleAxis" === AF.axisType && Math.abs(Math.abs(AF.range[1] - AF.range[0]) - 360) <= 1e-6)
          for (var bW = AF.range, dF = 0; dF < hF; dF++) {
            var PF = dF > 0 ? CF[dF - 1].coordinate : CF[hF - 1].coordinate,
              RF = CF[dF].coordinate,
              iW = dF >= hF - 1 ? CF[0].coordinate : CF[dF + 1].coordinate,
              eF = void 0;
            if ((0, gb.y)(RF - PF) !== (0, gb.y)(iW - RF)) {
              var EF = [];
              if ((0, gb.y)(iW - RF) === (0, gb.y)(bW[1] - bW[0])) {
                eF = iW;
                var QF = RF + bW[1] - bW[0];
                EF[0] = Math.min(QF, (QF + PF) / 2), EF[1] = Math.max(QF, (QF + PF) / 2)
              } else {
                eF = PF;
                var rW = iW + bW[1] - bW[0];
                EF[0] = Math.min(RF, (rW + RF) / 2), EF[1] = Math.max(RF, (rW + RF) / 2)
              }
              var gW = [Math.min(RF, (eF + RF) / 2), Math.max(RF, (eF + RF) / 2)];
              if (FF > gW[0] && FF <= gW[1] || FF >= EF[0] && FF <= EF[1]) {
                uF = CF[dF].index;
                break
              }
            } else {
              var tW = Math.min(PF, iW),
                TF = Math.max(PF, iW);
              if (FF > (tW + RF) / 2 && FF <= (TF + RF) / 2) {
                uF = CF[dF].index;
                break
              }
            }
          } else
            for (var aW = 0; aW < hF; aW++)
              if (0 === aW && FF <= (SF[aW].coordinate + SF[aW + 1].coordinate) / 2 || aW > 0 && aW < hF - 1 && FF > (SF[aW].coordinate + SF[aW - 1].coordinate) / 2 && FF <= (SF[aW].coordinate + SF[aW + 1].coordinate) / 2 || aW === hF - 1 && FF > (SF[aW].coordinate + SF[aW - 1].coordinate) / 2) {
                uF = SF[aW].index;
                break
              } return uF
      },
      xb = function(FF) {
        var WF, SF, CF = FF.type.displayName,
          AF = null !== (WF = FF.type) && void 0 !== WF && WF.defaultProps ? Nh(Nh({}, FF.type.defaultProps), FF.props) : FF.props,
          uF = AF.stroke,
          hF = AF.fill;
        switch (CF) {
          case "Line":
            SF = uF;
            break;
          case "Area":
          case "Radar":
            SF = uF && "none" !== uF ? uF : hF;
            break;
          default:
            SF = hF
        }
        return SF
      },
      Zh = function(FF) {
        var WF = FF.barSize,
          SF = FF.totalSize,
          CF = FF.stackGroups,
          AF = void 0 === CF ? {} : CF;
        if (!AF) return {};
        for (var uF = {}, hF = Object.keys(AF), bW = 0, dF = hF.length; bW < dF; bW++)
          for (var PF = AF[hF[bW]].stackGroups, RF = Object.keys(PF), iW = 0, eF = RF.length; iW < eF; iW++) {
            var EF = PF[RF[iW]],
              QF = EF.items,
              rW = EF.cateAxisId,
              gW = QF.filter((function(FF) {
                return (0, tb.n)(FF.type).indexOf("Bar") >= 0
              }));
            if (gW && gW.length) {
              var tW = gW[0].type.defaultProps,
                TF = void 0 !== tW ? Nh(Nh({}, tW), gW[0].props) : gW[0].props,
                aW = TF.barSize,
                kW = TF[rW];
              uF[kW] || (uF[kW] = []);
              var qW = Du()(aW) ? WF : aW;
              uF[kW].push({
                item: gW[0],
                stackList: gW.slice(1),
                barSize: Du()(qW) ? void 0 : (0, gb.h)(qW, SF, 0)
              })
            }
          }
        return uF
      },
      oh = function(FF) {
        var WF = FF.barGap,
          SF = FF.barCategoryGap,
          CF = FF.bandSize,
          AF = FF.sizeList,
          uF = void 0 === AF ? [] : AF,
          hF = FF.maxBarSize,
          bW = uF.length;
        if (bW < 1) return null;
        var dF, PF = (0, gb.h)(WF, CF, 0, !0),
          RF = [];
        if (uF[0].barSize === +uF[0].barSize) {
          var iW = !1,
            eF = CF / bW,
            EF = uF.reduce((function(FF, WF) {
              return FF + WF.barSize || 0
            }), 0);
          (EF += (bW - 1) * PF) >= CF && (EF -= (bW - 1) * PF, PF = 0), EF >= CF && eF > 0 && (iW = !0, EF = bW * (eF *= .9));
          var QF = {
            offset: ((CF - EF) / 2 | 0) - PF,
            size: 0
          };
          dF = uF.reduce((function(FF, WF) {
            var SF = {
                item: WF.item,
                position: {
                  offset: QF.offset + QF.size + PF,
                  size: iW ? eF : WF.barSize
                }
              },
              CF = [].concat(kb(FF), [SF]);
            return QF = CF[CF.length - 1].position, WF.stackList && WF.stackList.length && WF.stackList.forEach((function(FF) {
              CF.push({
                item: FF,
                position: QF
              })
            })), CF
          }), RF)
        } else {
          var rW = (0, gb.h)(SF, CF, 0, !0);
          CF - 2 * rW - (bW - 1) * PF <= 0 && (PF = 0);
          var gW = (CF - 2 * rW - (bW - 1) * PF) / bW;
          gW > 1 && (gW >>= 0);
          var tW = hF === +hF ? Math.min(gW, hF) : gW;
          dF = uF.reduce((function(FF, WF, SF) {
            var CF = [].concat(kb(FF), [{
              item: WF.item,
              position: {
                offset: rW + (gW + PF) * SF + (gW - tW) / 2,
                size: tW
              }
            }]);
            return WF.stackList && WF.stackList.length && WF.stackList.forEach((function(FF) {
              CF.push({
                item: FF,
                position: CF[CF.length - 1].position
              })
            })), CF
          }), RF)
        }
        return dF
      },
      Yh = function(FF, WF, SF, CF) {
        var AF = SF.children,
          uF = SF.width,
          hF = SF.margin,
          bW = uF - (hF.left || 0) - (hF.right || 0),
          dF = (0, Th.e)({
            children: AF,
            legendWidth: bW
          });
        if (dF) {
          var PF = CF || {},
            RF = PF.width,
            iW = PF.height,
            eF = dF.align,
            EF = dF.verticalAlign,
            QF = dF.layout;
          if (("vertical" === QF || "horizontal" === QF && "middle" === EF) && "center" !== eF && (0, gb.t)(FF[eF])) return Nh(Nh({}, FF), {}, Dh({}, eF, FF[eF] + (RF || 0)));
          if (("horizontal" === QF || "vertical" === QF && "center" === eF) && "middle" !== EF && (0, gb.t)(FF[EF])) return Nh(Nh({}, FF), {}, Dh({}, EF, FF[EF] + (iW || 0)))
        }
        return FF
      },
      Mh = function(FF, WF, SF, CF, AF) {
        var uF = WF.props.children,
          hF = (0, tb.h)(uF, rb.e).filter((function(FF) {
            return function(FF, WF, SF) {
              return !!Du()(WF) || ("horizontal" === FF ? "yAxis" === WF : "vertical" === FF || "x" === SF ? "xAxis" === WF : "y" !== SF || "yAxis" === WF)
            }(CF, AF, FF.props.direction)
          }));
        if (hF && hF.length) {
          var bW = hF.map((function(FF) {
            return FF.props.dataKey
          }));
          return FF.reduce((function(FF, WF) {
            var CF = Lh(WF, SF);
            if (Du()(CF)) return FF;
            var AF = Array.isArray(CF) ? [Vu()(CF), kh()(CF)] : [CF, CF],
              uF = bW.reduce((function(FF, SF) {
                var CF = Lh(WF, SF, 0),
                  uF = AF[0] - Math.abs(Array.isArray(CF) ? CF[0] : CF),
                  hF = AF[1] + Math.abs(Array.isArray(CF) ? CF[1] : CF);
                return [Math.min(uF, FF[0]), Math.max(hF, FF[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(uF[0], FF[0]), Math.max(uF[1], FF[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      cb = function(FF, WF, SF, CF, AF) {
        var uF = WF.map((function(WF) {
          return Mh(FF, WF, SF, AF, CF)
        })).filter((function(FF) {
          return !Du()(FF)
        }));
        return uF && uF.length ? uF.reduce((function(FF, WF) {
          return [Math.min(FF[0], WF[0]), Math.max(FF[1], WF[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      Gh = function(FF, WF, SF, CF, AF) {
        var uF = WF.map((function(WF) {
          var uF = WF.props.dataKey;
          return "number" === SF && uF && Mh(FF, WF, uF, CF) || mb(FF, uF, SF, AF)
        }));
        if ("number" === SF) return uF.reduce((function(FF, WF) {
          return [Math.min(FF[0], WF[0]), Math.max(FF[1], WF[1])]
        }), [1 / 0, -1 / 0]);
        var hF = {};
        return uF.reduce((function(FF, WF) {
          for (var SF = 0, CF = WF.length; SF < CF; SF++) hF[WF[SF]] || (hF[WF[SF]] = !0, FF.push(WF[SF]));
          return FF
        }), [])
      },
      zb = function(FF, WF) {
        return "horizontal" === FF && "xAxis" === WF || "vertical" === FF && "yAxis" === WF || "centric" === FF && "angleAxis" === WF || "radial" === FF && "radiusAxis" === WF
      },
      Ih = function(FF, WF, SF, CF) {
        if (CF) return FF.map((function(FF) {
          return FF.coordinate
        }));
        var AF, uF, hF = FF.map((function(FF) {
          return FF.coordinate === WF && (AF = !0), FF.coordinate === SF && (uF = !0), FF.coordinate
        }));
        return AF || hF.push(WF), uF || hF.push(SF), hF
      },
      fh = function(FF, WF, SF) {
        if (!FF) return null;
        var CF = FF.scale,
          AF = FF.duplicateDomain,
          uF = FF.type,
          hF = FF.range,
          bW = "scaleBand" === FF.realScaleType ? CF.bandwidth() / 2 : 2,
          dF = (WF || SF) && "category" === uF && CF.bandwidth ? CF.bandwidth() / bW : 0;
        return dF = "angleAxis" === FF.axisType && (null === hF || void 0 === hF ? void 0 : hF.length) >= 2 ? 2 * (0, gb.y)(hF[0] - hF[1]) * dF : dF, WF && (FF.ticks || FF.niceTicks) ? (FF.ticks || FF.niceTicks).map((function(FF) {
          var WF = AF ? AF.indexOf(FF) : FF;
          return {
            coordinate: CF(WF) + dF,
            value: FF,
            offset: dF
          }
        })).filter((function(FF) {
          return !Gu()(FF.coordinate)
        })) : FF.isCategorical && FF.categoricalDomain ? FF.categoricalDomain.map((function(FF, WF) {
          return {
            coordinate: CF(FF) + dF,
            value: FF,
            index: WF,
            offset: dF
          }
        })) : CF.ticks && !SF ? CF.ticks(FF.tickCount).map((function(FF) {
          return {
            coordinate: CF(FF) + dF,
            value: FF,
            offset: dF
          }
        })) : CF.domain().map((function(FF, WF) {
          return {
            coordinate: CF(FF) + dF,
            value: AF ? AF[FF] : FF,
            index: WF,
            offset: dF
          }
        }))
      },
      yb = new WeakMap,
      sh = function(FF, WF) {
        if ("function" !== typeof WF) return FF;
        yb.has(FF) || yb.set(FF, new WeakMap);
        var SF = yb.get(FF);
        if (SF.has(WF)) return SF.get(WF);
        var CF = function() {
          FF.apply(void 0, arguments), WF.apply(void 0, arguments)
        };
        return SF.set(WF, CF), CF
      },
      nh = function(FF, WF, SF) {
        var uF = FF.scale,
          hF = FF.type,
          bW = FF.layout,
          dF = FF.axisType;
        if ("auto" === uF) return "radial" === bW && "radiusAxis" === dF ? {
          scale: AF.d(),
          realScaleType: "band"
        } : "radial" === bW && "angleAxis" === dF ? {
          scale: BW(),
          realScaleType: "linear"
        } : "category" === hF && WF && (WF.indexOf("LineChart") >= 0 || WF.indexOf("AreaChart") >= 0 || WF.indexOf("ComposedChart") >= 0 && !SF) ? {
          scale: AF.e(),
          realScaleType: "point"
        } : "category" === hF ? {
          scale: AF.d(),
          realScaleType: "band"
        } : {
          scale: BW(),
          realScaleType: "linear"
        };
        if (xh()(uF)) {
          var PF = "scale".concat(Iu()(uF));
          return {
            scale: (CF[PF] || AF.e)(),
            realScaleType: CF[PF] ? PF : "point"
          }
        }
        return mh()(uF) ? {
          scale: uF
        } : {
          scale: AF.e(),
          realScaleType: "point"
        }
      },
      Hh = 1e-4,
      Kh = function(FF) {
        var WF = FF.domain();
        if (WF && !(WF.length <= 2)) {
          var SF = WF.length,
            CF = FF.range(),
            AF = Math.min(CF[0], CF[1]) - Hh,
            uF = Math.max(CF[0], CF[1]) + Hh,
            hF = FF(WF[0]),
            bW = FF(WF[SF - 1]);
          (hF < AF || hF > uF || bW < AF || bW > uF) && FF.domain([WF[0], WF[SF - 1]])
        }
      },
      wh = function(FF, WF) {
        if (!FF) return null;
        for (var SF = 0, CF = FF.length; SF < CF; SF++)
          if (FF[SF].item === WF) return FF[SF].position;
        return null
      },
      Xh = function(FF, WF) {
        if (!WF || 2 !== WF.length || !(0, gb.t)(WF[0]) || !(0, gb.t)(WF[1])) return FF;
        var SF = Math.min(WF[0], WF[1]),
          CF = Math.max(WF[0], WF[1]),
          AF = [FF[0], FF[1]];
        return (!(0, gb.t)(FF[0]) || FF[0] < SF) && (AF[0] = SF), (!(0, gb.t)(FF[1]) || FF[1] > CF) && (AF[1] = CF), AF[0] > CF && (AF[0] = CF), AF[1] < SF && (AF[1] = SF), AF
      },
      Uh = {
        sign: function(FF) {
          var WF = FF.length;
          if (!(WF <= 0))
            for (var SF = 0, CF = FF[0].length; SF < CF; ++SF)
              for (var AF = 0, uF = 0, hF = 0; hF < WF; ++hF) {
                var bW = Gu()(FF[hF][SF][1]) ? FF[hF][SF][0] : FF[hF][SF][1];
                bW >= 0 ? (FF[hF][SF][0] = AF, FF[hF][SF][1] = AF + bW, AF = FF[hF][SF][1]) : (FF[hF][SF][0] = uF, FF[hF][SF][1] = uF + bW, uF = FF[hF][SF][1])
              }
        },
        expand: function(FF, WF) {
          if ((CF = FF.length) > 0) {
            for (var SF, CF, AF, uF = 0, hF = FF[0].length; uF < hF; ++uF) {
              for (AF = SF = 0; SF < CF; ++SF) AF += FF[SF][uF][1] || 0;
              if (AF)
                for (SF = 0; SF < CF; ++SF) FF[SF][uF][1] /= AF
            }
            Eu(FF, WF)
          }
        },
        none: Eu,
        silhouette: function(FF, WF) {
          if ((SF = FF.length) > 0) {
            for (var SF, CF = 0, AF = FF[WF[0]], uF = AF.length; CF < uF; ++CF) {
              for (var hF = 0, bW = 0; hF < SF; ++hF) bW += FF[hF][CF][1] || 0;
              AF[CF][1] += AF[CF][0] = -bW / 2
            }
            Eu(FF, WF)
          }
        },
        wiggle: function(FF, WF) {
          if ((AF = FF.length) > 0 && (CF = (SF = FF[WF[0]]).length) > 0) {
            for (var SF, CF, AF, uF = 0, hF = 1; hF < CF; ++hF) {
              for (var bW = 0, dF = 0, PF = 0; bW < AF; ++bW) {
                for (var RF = FF[WF[bW]], iW = RF[hF][1] || 0, eF = (iW - (RF[hF - 1][1] || 0)) / 2, EF = 0; EF < bW; ++EF) {
                  var QF = FF[WF[EF]];
                  eF += (QF[hF][1] || 0) - (QF[hF - 1][1] || 0)
                }
                dF += iW, PF += eF * iW
              }
              SF[hF - 1][1] += SF[hF - 1][0] = uF, dF && (uF -= PF / dF)
            }
            SF[hF - 1][1] += SF[hF - 1][0] = uF, Eu(FF, WF)
          }
        },
        positive: function(FF) {
          var WF = FF.length;
          if (!(WF <= 0))
            for (var SF = 0, CF = FF[0].length; SF < CF; ++SF)
              for (var AF = 0, uF = 0; uF < WF; ++uF) {
                var hF = Gu()(FF[uF][SF][1]) ? FF[uF][SF][0] : FF[uF][SF][1];
                hF >= 0 ? (FF[uF][SF][0] = AF, FF[uF][SF][1] = AF + hF, AF = FF[uF][SF][1]) : (FF[uF][SF][0] = 0, FF[uF][SF][1] = 0)
              }
        }
      },
      Bh = function(FF, WF, SF) {
        var CF = WF.map((function(FF) {
            return FF.props.dataKey
          })),
          AF = Uh[SF],
          uF = function() {
            var FF = (0, rh.c)([]),
              WF = gh,
              SF = Eu,
              CF = th;

            function AF(AF) {
              var uF, hF, bW = Array.from(FF.apply(this, arguments), Tu),
                dF = bW.length,
                PF = -1;
              for (const FF of AF)
                for (uF = 0, ++PF; uF < dF; ++uF)(bW[uF][PF] = [0, +CF(FF, bW[uF].key, PF, AF)]).data = FF;
              for (uF = 0, hF = (0, Qu.c)(WF(bW)); uF < dF; ++uF) bW[hF[uF]].index = uF;
              return SF(bW, hF), bW
            }
            return AF.keys = function(WF) {
              return arguments.length ? (FF = "function" === typeof WF ? WF : (0, rh.c)(Array.from(WF)), AF) : FF
            }, AF.value = function(FF) {
              return arguments.length ? (CF = "function" === typeof FF ? FF : (0, rh.c)(+FF), AF) : CF
            }, AF.order = function(FF) {
              return arguments.length ? (WF = null == FF ? gh : "function" === typeof FF ? FF : (0, rh.c)(Array.from(FF)), AF) : WF
            }, AF.offset = function(FF) {
              return arguments.length ? (SF = null == FF ? Eu : FF, AF) : SF
            }, AF
          }().keys(CF).value((function(FF, WF) {
            return +Lh(FF, WF, 0)
          })).order(gh).offset(AF);
        return uF(FF)
      },
      jb = function(FF, WF, SF, CF, AF, uF) {
        if (!FF) return null;
        var hF = (uF ? WF.reverse() : WF).reduce((function(FF, WF) {
          var AF, uF = null !== (AF = WF.type) && void 0 !== AF && AF.defaultProps ? Nh(Nh({}, WF.type.defaultProps), WF.props) : WF.props,
            hF = uF.stackId;
          if (uF.hide) return FF;
          var bW = uF[SF],
            dF = FF[bW] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, gb.p)(hF)) {
            var PF = dF.stackGroups[hF] || {
              numericAxisId: SF,
              cateAxisId: CF,
              items: []
            };
            PF.items.push(WF), dF.hasStack = !0, dF.stackGroups[hF] = PF
          } else dF.stackGroups[(0, gb.C)("_stackId_")] = {
            numericAxisId: SF,
            cateAxisId: CF,
            items: [WF]
          };
          return Nh(Nh({}, FF), {}, Dh({}, bW, dF))
        }), {});
        return Object.keys(hF).reduce((function(WF, uF) {
          var bW = hF[uF];
          if (bW.hasStack) {
            bW.stackGroups = Object.keys(bW.stackGroups).reduce((function(WF, uF) {
              var hF = bW.stackGroups[uF];
              return Nh(Nh({}, WF), {}, Dh({}, uF, {
                numericAxisId: SF,
                cateAxisId: CF,
                items: hF.items,
                stackedData: Bh(FF, hF.items, AF)
              }))
            }), {})
          }
          return Nh(Nh({}, WF), {}, Dh({}, uF, bW))
        }), {})
      },
      vb = function(FF, WF) {
        var SF = WF.realScaleType,
          CF = WF.type,
          AF = WF.tickCount,
          uF = WF.originalDomain,
          hF = WF.allowDecimals,
          bW = SF || WF.scale;
        if ("auto" !== bW && "linear" !== bW) return null;
        if (AF && "number" === CF && uF && ("auto" === uF[0] || "auto" === uF[1])) {
          var dF = FF.domain();
          if (!dF.length) return null;
          var PF = Eh(dF, AF, hF);
          return FF.domain([Vu()(PF), kh()(PF)]), {
            niceTicks: PF
          }
        }
        if (AF && "number" === CF) {
          var RF = FF.domain();
          return {
            niceTicks: Qh(RF, AF, hF)
          }
        }
        return null
      };

    function Jh(FF) {
      var WF = FF.axis,
        SF = FF.ticks,
        CF = FF.bandSize,
        AF = FF.entry,
        uF = FF.index,
        hF = FF.dataKey;
      if ("category" === WF.type) {
        if (!WF.allowDuplicatedCategory && WF.dataKey && !Du()(AF[WF.dataKey])) {
          var bW = (0, gb.e)(SF, "value", AF[WF.dataKey]);
          if (bW) return bW.coordinate + CF / 2
        }
        return SF[uF] ? SF[uF].coordinate + CF / 2 : null
      }
      var dF = Lh(AF, Du()(hF) ? WF.dataKey : hF);
      return Du()(dF) ? null : WF.scale(dF)
    }
    var ph = function(FF) {
        var WF = FF.axis,
          SF = FF.ticks,
          CF = FF.offset,
          AF = FF.bandSize,
          uF = FF.entry,
          hF = FF.index;
        if ("category" === WF.type) return SF[hF] ? SF[hF].coordinate + CF : null;
        var bW = Lh(uF, WF.dataKey, WF.domain[hF]);
        return Du()(bW) ? null : WF.scale(bW) - AF / 2 + CF
      },
      lh = function(FF) {
        var WF = FF.numericAxis,
          SF = WF.scale.domain();
        if ("number" === WF.type) {
          var CF = Math.min(SF[0], SF[1]),
            AF = Math.max(SF[0], SF[1]);
          return CF <= 0 && AF >= 0 ? 0 : AF < 0 ? AF : CF
        }
        return SF[0]
      },
      Fb = function(FF, WF) {
        var SF, CF = (null !== (SF = FF.type) && void 0 !== SF && SF.defaultProps ? Nh(Nh({}, FF.type.defaultProps), FF.props) : FF.props).stackId;
        if ((0, gb.p)(CF)) {
          var AF = WF[CF];
          if (AF) {
            var uF = AF.items.indexOf(FF);
            return uF >= 0 ? AF.stackedData[uF] : null
          }
        }
        return null
      },
      Wb = function(FF, WF, SF) {
        return Object.keys(FF).reduce((function(CF, AF) {
          var uF = FF[AF].stackedData.reduce((function(FF, CF) {
            var AF = CF.slice(WF, SF + 1).reduce((function(FF, WF) {
              return [Vu()(WF.concat([FF[0]]).filter(gb.t)), kh()(WF.concat([FF[1]]).filter(gb.t))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(FF[0], AF[0]), Math.max(FF[1], AF[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(uF[0], CF[0]), Math.max(uF[1], CF[1])]
        }), [1 / 0, -1 / 0]).map((function(FF) {
          return FF === 1 / 0 || FF === -1 / 0 ? 0 : FF
        }))
      },
      Sb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Cb = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Ab = function(FF, WF, SF) {
        if (mh()(FF)) return FF(WF, SF);
        if (!Array.isArray(FF)) return WF;
        var CF = [];
        if ((0, gb.t)(FF[0])) CF[0] = SF ? FF[0] : Math.min(FF[0], WF[0]);
        else if (Sb.test(FF[0])) {
          var AF = +Sb.exec(FF[0])[1];
          CF[0] = WF[0] - AF
        } else mh()(FF[0]) ? CF[0] = FF[0](WF[0]) : CF[0] = WF[0];
        if ((0, gb.t)(FF[1])) CF[1] = SF ? FF[1] : Math.max(FF[1], WF[1]);
        else if (Cb.test(FF[1])) {
          var uF = +Cb.exec(FF[1])[1];
          CF[1] = WF[1] + uF
        } else mh()(FF[1]) ? CF[1] = FF[1](WF[1]) : CF[1] = WF[1];
        return CF
      },
      ub = function(FF, WF, SF) {
        if (FF && FF.scale && FF.scale.bandwidth) {
          var CF = FF.scale.bandwidth();
          if (!SF || CF > 0) return CF
        }
        if (FF && WF && WF.length >= 2) {
          for (var AF = nu()(WF, (function(FF) {
              return FF.coordinate
            })), uF = 1 / 0, hF = 1, bW = AF.length; hF < bW; hF++) {
            var dF = AF[hF],
              PF = AF[hF - 1];
            uF = Math.min((dF.coordinate || 0) - (PF.coordinate || 0), uF)
          }
          return uF === 1 / 0 ? 0 : uF
        }
        return SF ? void 0 : 0
      },
      hb = function(FF, WF, SF) {
        return FF && FF.length ? yh()(FF, ou()(SF, "type.defaultProps.domain")) ? WF : FF : WF
      },
      bd = function(FF, WF) {
        var SF = FF.type.defaultProps ? Nh(Nh({}, FF.type.defaultProps), FF.props) : FF.props,
          CF = SF.dataKey,
          AF = SF.name,
          uF = SF.unit,
          hF = SF.formatter,
          bW = SF.tooltipType,
          dF = SF.chartType,
          PF = SF.hide;
        return Nh(Nh({}, (0, tb.e)(FF, !1)), {}, {
          dataKey: CF,
          unit: uF,
          formatter: hF,
          name: AF || CF,
          color: xb(FF),
          value: Lh(WF, CF),
          type: bW,
          payload: WF,
          chartType: dF,
          hide: PF
        })
      }
  },
  5098: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => eF,
      f: () => iW
    });
    var CF = SF(4949);

    function AF(FF) {
      return AF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, AF(FF)
    }

    function uF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function hF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? uF(Object(SF), !0).forEach((function(WF) {
          bW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : uF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function bW(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != AF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != AF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == AF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var dF = {
        widthCache: {},
        cacheCount: 0
      },
      PF = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      RF = "recharts_measurement_span";
    var iW = function(FF) {
        var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === FF || null === FF || CF.c.isSsr) return {
          width: 0,
          height: 0
        };
        var SF = function(FF) {
            var WF = hF({}, FF);
            return Object.keys(WF).forEach((function(FF) {
              WF[FF] || delete WF[FF]
            })), WF
          }(WF),
          AF = JSON.stringify({
            text: FF,
            copyStyle: SF
          });
        if (dF.widthCache[AF]) return dF.widthCache[AF];
        try {
          var uF = document.getElementById(RF);
          uF || ((uF = document.createElement("span")).setAttribute("id", RF), uF.setAttribute("aria-hidden", "true"), document.body.appendChild(uF));
          var bW = hF(hF({}, PF), SF);
          Object.assign(uF.style, bW), uF.textContent = "".concat(FF);
          var iW = uF.getBoundingClientRect(),
            eF = {
              width: iW.width,
              height: iW.height
            };
          return dF.widthCache[AF] = eF, ++dF.cacheCount > 2e3 && (dF.cacheCount = 0, dF.widthCache = {}), eF
        } catch (EF) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      eF = function(FF) {
        return {
          top: FF.top + window.scrollY - document.documentElement.clientTop,
          left: FF.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4132: (FF, WF, SF) => {
    SF.d(WF, {
      C: () => aW,
      c: () => mW,
      e: () => DF,
      f: () => qW,
      g: () => LF,
      h: () => kW,
      i: () => VF,
      j: () => NF,
      l: () => gW,
      p: () => tW,
      t: () => rW,
      v: () => QF,
      y: () => EF
    });
    var CF = SF(4139),
      AF = SF.n(CF),
      uF = SF(4151),
      hF = SF.n(uF),
      bW = SF(4162),
      dF = SF.n(bW),
      PF = SF(4157),
      RF = SF.n(PF),
      iW = SF(4392),
      eF = SF.n(iW),
      EF = function(FF) {
        return 0 === FF ? 0 : FF > 0 ? 1 : -1
      },
      QF = function(FF) {
        return AF()(FF) && FF.indexOf("%") === FF.length - 1
      },
      rW = function(FF) {
        return RF()(FF) && !hF()(FF)
      },
      gW = function(FF) {
        return eF()(FF)
      },
      tW = function(FF) {
        return rW(FF) || AF()(FF)
      },
      TF = 0,
      aW = function(FF) {
        var WF = ++TF;
        return "".concat(FF || "").concat(WF)
      },
      kW = function(FF, WF) {
        var SF, CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          uF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!rW(FF) && !AF()(FF)) return CF;
        if (QF(FF)) {
          var bW = FF.indexOf("%");
          SF = WF * parseFloat(FF.slice(0, bW)) / 100
        } else SF = +FF;
        return hF()(SF) && (SF = CF), uF && SF > WF && (SF = WF), SF
      },
      qW = function(FF) {
        if (!FF) return null;
        var WF = Object.keys(FF);
        return WF && WF.length ? FF[WF[0]] : null
      },
      VF = function(FF) {
        if (!Array.isArray(FF)) return !1;
        for (var WF = FF.length, SF = {}, CF = 0; CF < WF; CF++) {
          if (SF[FF[CF]]) return !0;
          SF[FF[CF]] = !0
        }
        return !1
      },
      NF = function(FF, WF) {
        return rW(FF) && rW(WF) ? function(SF) {
          return FF + SF * (WF - FF)
        } : function() {
          return WF
        }
      };

    function DF(FF, WF, SF) {
      return FF && FF.length ? FF.find((function(FF) {
        return FF && ("function" === typeof WF ? WF(FF) : dF()(FF, WF)) === SF
      })) : null
    }
    var LF = function(FF) {
        if (!FF || !FF.length) return null;
        for (var WF = FF.length, SF = 0, CF = 0, AF = 0, uF = 0, hF = 1 / 0, bW = -1 / 0, dF = 0, PF = 0, RF = 0; RF < WF; RF++) SF += dF = FF[RF].cx || 0, CF += PF = FF[RF].cy || 0, AF += dF * PF, uF += dF * dF, hF = Math.min(hF, dF), bW = Math.max(bW, dF);
        var iW = WF * uF !== SF * SF ? (WF * AF - SF * CF) / (WF * uF - SF * SF) : 0;
        return {
          xmin: hF,
          xmax: bW,
          a: iW,
          b: (CF - iW * SF) / WF
        }
      },
      mW = function(FF, WF) {
        return rW(FF) && rW(WF) ? FF - WF : AF()(FF) && AF()(WF) ? FF.localeCompare(WF) : FF instanceof Date && WF instanceof Date ? FF.getTime() - WF.getTime() : String(FF).localeCompare(String(WF))
      }
  },
  4949: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    var CF = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(FF) {
        return CF[FF]
      },
      set: function(FF, WF) {
        if ("string" === typeof FF) CF[FF] = WF;
        else {
          var SF = Object.keys(FF);
          SF && SF.length && SF.forEach((function(WF) {
            CF[WF] = FF[WF]
          }))
        }
      }
    }
  },
  5200: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    var CF = function(FF, WF) {
      var SF = FF.alwaysShow,
        CF = FF.ifOverflow;
      return SF && (CF = "extendDomain"), CF === WF
    }
  },
  4396: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    var CF = function(FF, WF) {
      for (var SF = arguments.length, CF = new Array(SF > 2 ? SF - 2 : 0), AF = 2; AF < SF; AF++) CF[AF - 2] = arguments[AF]
    }
  },
  5195: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      e: () => eF,
      f: () => PF
    });
    SF(4392), SF(46), SF(4241);

    function CF(FF) {
      return CF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, CF(FF)
    }

    function AF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function uF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? AF(Object(SF), !0).forEach((function(WF) {
          hF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : AF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function hF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != CF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var AF = SF.call(FF, WF || "default");
            if ("object" != CF(AF)) return AF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == CF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var bW = Math.PI / 180,
      dF = function(FF) {
        return 180 * FF / Math.PI
      },
      PF = function(FF, WF, SF, CF) {
        return {
          x: FF + Math.cos(-bW * CF) * SF,
          y: WF + Math.sin(-bW * CF) * SF
        }
      },
      RF = function(FF, WF) {
        var SF = FF.x,
          CF = FF.y,
          AF = WF.cx,
          uF = WF.cy,
          hF = function(FF, WF) {
            var SF = FF.x,
              CF = FF.y,
              AF = WF.x,
              uF = WF.y;
            return Math.sqrt(Math.pow(SF - AF, 2) + Math.pow(CF - uF, 2))
          }({
            x: SF,
            y: CF
          }, {
            x: AF,
            y: uF
          });
        if (hF <= 0) return {
          radius: hF
        };
        var bW = (SF - AF) / hF,
          PF = Math.acos(bW);
        return CF > uF && (PF = 2 * Math.PI - PF), {
          radius: hF,
          angle: dF(PF),
          angleInRadian: PF
        }
      },
      iW = function(FF, WF) {
        var SF = WF.startAngle,
          CF = WF.endAngle,
          AF = Math.floor(SF / 360),
          uF = Math.floor(CF / 360);
        return FF + 360 * Math.min(AF, uF)
      },
      eF = function(FF, WF) {
        var SF = FF.x,
          CF = FF.y,
          AF = RF({
            x: SF,
            y: CF
          }, WF),
          hF = AF.radius,
          bW = AF.angle,
          dF = WF.innerRadius,
          PF = WF.outerRadius;
        if (hF < dF || hF > PF) return !1;
        if (0 === hF) return !0;
        var eF, EF = function(FF) {
            var WF = FF.startAngle,
              SF = FF.endAngle,
              CF = Math.floor(WF / 360),
              AF = Math.floor(SF / 360),
              uF = Math.min(CF, AF);
            return {
              startAngle: WF - 360 * uF,
              endAngle: SF - 360 * uF
            }
          }(WF),
          QF = EF.startAngle,
          rW = EF.endAngle,
          gW = bW;
        if (QF <= rW) {
          for (; gW > rW;) gW -= 360;
          for (; gW < QF;) gW += 360;
          eF = gW >= QF && gW <= rW
        } else {
          for (; gW > QF;) gW -= 360;
          for (; gW < rW;) gW += 360;
          eF = gW >= rW && gW <= QF
        }
        return eF ? uF(uF({}, WF), {}, {
          radius: hF,
          angle: iW(gW, WF)
        }) : null
      }
  },
  4398: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => IF,
      E: () => ZF,
      e: () => cW,
      h: () => OF,
      k: () => xW,
      n: () => NF,
      o: () => fF,
      p: () => MF,
      t: () => GF,
      w: () => yW
    });
    var CF = SF(4162),
      AF = SF.n(CF),
      uF = SF(4392),
      hF = SF.n(uF),
      bW = SF(4139),
      dF = SF.n(bW),
      PF = SF(4241),
      RF = SF.n(PF),
      iW = SF(4071),
      eF = SF.n(iW),
      EF = SF(46),
      QF = SF(4403),
      rW = SF(4132),
      gW = SF(4413),
      tW = SF(4419),
      TF = ["children"],
      aW = ["children"];

    function kW(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF = {};
        for (var CF in FF)
          if (Object.prototype.hasOwnProperty.call(FF, CF)) {
            if (WF.indexOf(CF) >= 0) continue;
            SF[CF] = FF[CF]
          } return SF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }

    function qW(FF) {
      return qW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, qW(FF)
    }
    var VF = {
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
      NF = function(FF) {
        return "string" === typeof FF ? FF : FF ? FF.displayName || FF.name || "Component" : ""
      },
      DF = null,
      LF = null,
      mW = function FF(WF) {
        if (WF === DF && Array.isArray(LF)) return LF;
        var SF = [];
        return EF.Children.forEach(WF, (function(WF) {
          hF()(WF) || ((0, QF.isFragment)(WF) ? SF = SF.concat(FF(WF.props.children)) : SF.push(WF))
        })), LF = SF, DF = WF, SF
      };

    function OF(FF, WF) {
      var SF = [],
        CF = [];
      return CF = Array.isArray(WF) ? WF.map((function(FF) {
        return NF(FF)
      })) : [NF(WF)], mW(FF).forEach((function(FF) {
        var WF = AF()(FF, "type.displayName") || AF()(FF, "type.name"); - 1 !== CF.indexOf(WF) && SF.push(FF)
      })), SF
    }

    function xW(FF, WF) {
      var SF = OF(FF, WF);
      return SF && SF[0]
    }
    var ZF = function(FF) {
        if (!FF || !FF.props) return !1;
        var WF = FF.props,
          SF = WF.width,
          CF = WF.height;
        return !(!(0, rW.t)(SF) || SF <= 0 || !(0, rW.t)(CF) || CF <= 0)
      },
      oF = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      YF = function(FF) {
        return FF && FF.type && dF()(FF.type) && oF.indexOf(FF.type) >= 0
      },
      MF = function(FF) {
        return FF && "object" === qW(FF) && "clipDot" in FF
      },
      cW = function(FF, WF, SF) {
        if (!FF || "function" === typeof FF || "boolean" === typeof FF) return null;
        var CF = FF;
        if ((0, EF.isValidElement)(FF) && (CF = FF.props), !eF()(CF)) return null;
        var AF = {};
        return Object.keys(CF).forEach((function(FF) {
          var uF;
          (function(FF, WF, SF, CF) {
            var AF, uF = null !== (AF = null === tW.h || void 0 === tW.h ? void 0 : tW.h[CF]) && void 0 !== AF ? AF : [];
            return WF.startsWith("data-") || !RF()(FF) && (CF && uF.includes(WF) || tW.i.includes(WF)) || SF && tW.d.includes(WF)
          })(null === (uF = CF) || void 0 === uF ? void 0 : uF[FF], FF, WF, SF) && (AF[FF] = CF[FF])
        })), AF
      },
      GF = function FF(WF, SF) {
        if (WF === SF) return !0;
        var CF = EF.Children.count(WF);
        if (CF !== EF.Children.count(SF)) return !1;
        if (0 === CF) return !0;
        if (1 === CF) return zW(Array.isArray(WF) ? WF[0] : WF, Array.isArray(SF) ? SF[0] : SF);
        for (var AF = 0; AF < CF; AF++) {
          var uF = WF[AF],
            hF = SF[AF];
          if (Array.isArray(uF) || Array.isArray(hF)) {
            if (!FF(uF, hF)) return !1
          } else if (!zW(uF, hF)) return !1
        }
        return !0
      },
      zW = function(FF, WF) {
        if (hF()(FF) && hF()(WF)) return !0;
        if (!hF()(FF) && !hF()(WF)) {
          var SF = FF.props || {},
            CF = SF.children,
            AF = kW(SF, TF),
            uF = WF.props || {},
            bW = uF.children,
            dF = kW(uF, aW);
          return CF && bW ? (0, gW.b)(AF, dF) && GF(CF, bW) : !CF && !bW && (0, gW.b)(AF, dF)
        }
        return !1
      },
      IF = function(FF, WF) {
        var SF = [],
          CF = {};
        return mW(FF).forEach((function(FF, AF) {
          if (YF(FF)) SF.push(FF);
          else if (FF) {
            var uF = NF(FF.type),
              hF = WF[uF] || {},
              bW = hF.handler,
              dF = hF.once;
            if (bW && (!dF || !CF[uF])) {
              var PF = bW(FF, uF, AF);
              SF.push(PF), CF[uF] = !0
            }
          }
        })), SF
      },
      fF = function(FF) {
        var WF = FF && FF.type;
        return WF && VF[WF] ? VF[WF] : null
      },
      yW = function(FF, WF) {
        return mW(WF).indexOf(FF)
      }
  },
  4413: (FF, WF, SF) => {
    function CF(FF, WF) {
      for (var SF in FF)
        if ({}.hasOwnProperty.call(FF, SF) && (!{}.hasOwnProperty.call(WF, SF) || FF[SF] !== WF[SF])) return !1;
      for (var CF in WF)
        if ({}.hasOwnProperty.call(WF, CF) && !{}.hasOwnProperty.call(FF, CF)) return !1;
      return !0
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  5175: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => RF
    });
    var CF = SF(5017),
      AF = SF(5107),
      uF = SF(4398);

    function hF(FF) {
      return hF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, hF(FF)
    }

    function bW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function dF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? bW(Object(SF), !0).forEach((function(WF) {
          PF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : bW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function PF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != hF(FF) || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != hF(CF)) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == hF(WF) ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var RF = function(FF) {
      var WF = FF.children,
        SF = FF.formattedGraphicalItems,
        hF = FF.legendWidth,
        bW = FF.legendContent,
        PF = (0, uF.k)(WF, CF.d);
      if (!PF) return null;
      var RF, iW = CF.d.defaultProps,
        eF = void 0 !== iW ? dF(dF({}, iW), PF.props) : {};
      return RF = PF.props && PF.props.payload ? PF.props && PF.props.payload : "children" === bW ? (SF || []).reduce((function(FF, WF) {
        var SF = WF.item,
          CF = WF.props,
          AF = CF.sectors || CF.data || [];
        return FF.concat(AF.map((function(FF) {
          return {
            type: PF.props.iconType || SF.props.legendType,
            value: FF.name,
            color: FF.fill,
            payload: FF
          }
        })))
      }), []) : (SF || []).map((function(FF) {
        var WF = FF.item,
          SF = WF.type.defaultProps,
          CF = void 0 !== SF ? dF(dF({}, SF), WF.props) : {},
          uF = CF.dataKey,
          hF = CF.name,
          bW = CF.legendType;
        return {
          inactive: CF.hide,
          dataKey: uF,
          type: eF.iconType || bW || "square",
          color: (0, AF.N)(WF),
          value: hF || uF,
          payload: CF
        }
      })), dF(dF(dF({}, eF), CF.d.getWithHeight(PF, hF)), {}, {
        payload: RF,
        item: PF
      })
    }
  },
  4955: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW
    });
    var CF = SF(4960),
      AF = SF.n(CF),
      uF = SF(4241),
      hF = SF.n(uF);

    function bW(FF, WF, SF) {
      return !0 === WF ? AF()(FF, SF) : hF()(WF) ? AF()(FF, WF) : FF
    }
  },
  4419: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF,
      h: () => PF,
      i: () => bW,
      j: () => iW,
      l: () => eF
    });
    var CF = SF(46),
      AF = SF(4071),
      uF = SF.n(AF);

    function hF(FF) {
      return hF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, hF(FF)
    }
    var bW = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "aC", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      dF = ["points", "pathLength"],
      PF = {
        svg: ["viewBox", "children"],
        polygon: dF,
        polyline: dF
      },
      RF = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      iW = function(FF, WF) {
        if (!FF || "function" === typeof FF || "boolean" === typeof FF) return null;
        var SF = FF;
        if ((0, CF.isValidElement)(FF) && (SF = FF.props), !uF()(SF)) return null;
        var AF = {};
        return Object.keys(SF).forEach((function(FF) {
          RF.includes(FF) && (AF[FF] = WF || function(WF) {
            return SF[FF](SF, WF)
          })
        })), AF
      },
      eF = function(FF, WF, SF) {
        if (!uF()(FF) || "object" !== hF(FF)) return null;
        var CF = null;
        return Object.keys(FF).forEach((function(AF) {
          var uF = FF[AF];
          RF.includes(AF) && "function" === typeof uF && (CF || (CF = {}), CF[AF] = function(FF, WF, SF) {
            return function(CF) {
              return FF(WF, SF, CF), null
            }
          }(uF, WF, SF))
        })), CF
      }
  },
  4406: (FF, WF) => {
    var SF, CF = Symbol.for("react.element"),
      AF = Symbol.for("react.portal"),
      uF = Symbol.for("react.fragment"),
      hF = Symbol.for("react.strict_mode"),
      bW = Symbol.for("react.profiler"),
      dF = Symbol.for("react.provider"),
      PF = Symbol.for("react.context"),
      RF = Symbol.for("react.server_context"),
      iW = Symbol.for("react.forward_ref"),
      eF = Symbol.for("react.suspense"),
      EF = Symbol.for("react.suspense_list"),
      QF = Symbol.for("react.memo"),
      rW = Symbol.for("react.lazy"),
      gW = Symbol.for("react.offscreen");

    function tW(FF) {
      if ("object" === typeof FF && null !== FF) {
        var WF = FF.$$typeof;
        switch (WF) {
          case CF:
            switch (FF = FF.type) {
              case uF:
              case bW:
              case hF:
              case eF:
              case EF:
                return FF;
              default:
                switch (FF = FF && FF.$$typeof) {
                  case RF:
                  case PF:
                  case iW:
                  case rW:
                  case QF:
                  case dF:
                    return FF;
                  default:
                    return WF
                }
            }
          case AF:
            return WF
        }
      }
    }
    SF = Symbol.for("react.module.reference"), WF.isFragment = function(FF) {
      return tW(FF) === uF
    }
  },
  4403: (FF, WF, SF) => {
    FF.exports = SF(4406)
  },
  4058: (FF, WF, SF) => {
    function CF(FF) {
      var WF, SF, AF = "";
      if ("string" == typeof FF || "number" == typeof FF) AF += FF;
      else if ("object" == typeof FF)
        if (Array.isArray(FF)) {
          var uF = FF.length;
          for (WF = 0; WF < uF; WF++) FF[WF] && (SF = CF(FF[WF])) && (AF && (AF += " "), AF += SF)
        } else
          for (SF in FF) FF[SF] && (AF && (AF += " "), AF += SF);
      return AF
    }
    SF.d(WF, {
      d: () => AF
    });
    const AF = function() {
      for (var FF, WF, SF = 0, AF = "", uF = arguments.length; SF < uF; SF++)(FF = arguments[SF]) && (WF = CF(FF)) && (AF && (AF += " "), AF += WF);
      return AF
    }
  },
  5110: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF,
      e: () => bW
    });
    var CF = SF(5113),
      AF = SF(5117);

    function uF() {
      var FF, WF, SF = (0, AF.d)().unknown(void 0),
        hF = SF.domain,
        bW = SF.range,
        dF = 0,
        PF = 1,
        RF = !1,
        iW = 0,
        eF = 0,
        EF = .5;

      function QF() {
        var SF = hF().length,
          CF = PF < dF,
          AF = CF ? PF : dF,
          uF = CF ? dF : PF;
        FF = (uF - AF) / Math.max(1, SF - iW + 2 * eF), RF && (FF = Math.floor(FF)), AF += (uF - AF - FF * (SF - iW)) * EF, WF = FF * (1 - iW), RF && (AF = Math.round(AF), WF = Math.round(WF));
        var QF = function(FF, WF, SF) {
          FF = +FF, WF = +WF, SF = (AF = arguments.length) < 2 ? (WF = FF, FF = 0, 1) : AF < 3 ? 1 : +SF;
          for (var CF = -1, AF = 0 | Math.max(0, Math.ceil((WF - FF) / SF)), uF = new Array(AF); ++CF < AF;) uF[CF] = FF + CF * SF;
          return uF
        }(SF).map((function(WF) {
          return AF + FF * WF
        }));
        return bW(CF ? QF.reverse() : QF)
      }
      return delete SF.unknown, SF.domain = function(FF) {
        return arguments.length ? (hF(FF), QF()) : hF()
      }, SF.range = function(FF) {
        return arguments.length ? ([dF, PF] = FF, dF = +dF, PF = +PF, QF()) : [dF, PF]
      }, SF.rangeRound = function(FF) {
        return [dF, PF] = FF, dF = +dF, PF = +PF, RF = !0, QF()
      }, SF.bandwidth = function() {
        return WF
      }, SF.step = function() {
        return FF
      }, SF.round = function(FF) {
        return arguments.length ? (RF = !!FF, QF()) : RF
      }, SF.padding = function(FF) {
        return arguments.length ? (iW = Math.min(1, eF = +FF), QF()) : iW
      }, SF.paddingInner = function(FF) {
        return arguments.length ? (iW = Math.min(1, FF), QF()) : iW
      }, SF.paddingOuter = function(FF) {
        return arguments.length ? (eF = +FF, QF()) : eF
      }, SF.align = function(FF) {
        return arguments.length ? (EF = Math.max(0, Math.min(1, FF)), QF()) : EF
      }, SF.copy = function() {
        return uF(hF(), [dF, PF]).round(RF).paddingInner(iW).paddingOuter(eF).align(EF)
      }, CF.g.apply(QF(), arguments)
    }

    function hF(FF) {
      var WF = FF.copy;
      return FF.padding = FF.paddingOuter, delete FF.paddingInner, delete FF.paddingOuter, FF.copy = function() {
        return hF(WF())
      }, FF
    }

    function bW() {
      return hF(uF.apply(null, arguments).paddingInner(1))
    }
  },
  5113: (FF, WF, SF) => {
    function CF(FF, WF) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(FF);
          break;
        default:
          this.range(WF).domain(FF)
      }
      return this
    }

    function AF(FF, WF) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof FF ? this.interpolator(FF) : this.range(FF);
          break;
        default:
          this.domain(FF), "function" === typeof WF ? this.interpolator(WF) : this.range(WF)
      }
      return this
    }
    SF.d(WF, {
      d: () => AF,
      g: () => CF
    })
  },
  5117: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF,
      h: () => PF
    });
    class CF extends Map {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bW;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: WF
            }
          }), null != FF)
          for (const [SF, CF] of FF) this.set(SF, CF)
      }
      get(FF) {
        return super.get(AF(this, FF))
      }
      has(FF) {
        return super.has(AF(this, FF))
      }
      set(FF, WF) {
        return super.set(uF(this, FF), WF)
      }
      delete(FF) {
        return super.delete(hF(this, FF))
      }
    }
    Set;

    function AF(FF, WF) {
      let {
        _intern: SF,
        _key: CF
      } = FF;
      const AF = CF(WF);
      return SF.has(AF) ? SF.get(AF) : WF
    }

    function uF(FF, WF) {
      let {
        _intern: SF,
        _key: CF
      } = FF;
      const AF = CF(WF);
      return SF.has(AF) ? SF.get(AF) : (SF.set(AF, WF), WF)
    }

    function hF(FF, WF) {
      let {
        _intern: SF,
        _key: CF
      } = FF;
      const AF = CF(WF);
      return SF.has(AF) && (WF = SF.get(AF), SF.delete(AF)), WF
    }

    function bW(FF) {
      return null !== FF && "object" === typeof FF ? FF.valueOf() : FF
    }
    var dF = SF(5113);
    const PF = Symbol("implicit");

    function RF() {
      var FF = new CF,
        WF = [],
        SF = [],
        AF = PF;

      function uF(CF) {
        let uF = FF.get(CF);
        if (void 0 === uF) {
          if (AF !== PF) return AF;
          FF.set(CF, uF = WF.push(CF) - 1)
        }
        return SF[uF % SF.length]
      }
      return uF.domain = function(SF) {
        if (!arguments.length) return WF.slice();
        WF = [], FF = new CF;
        for (const CF of SF) FF.has(CF) || FF.set(CF, WF.push(CF) - 1);
        return uF
      }, uF.range = function(FF) {
        return arguments.length ? (SF = Array.from(FF), uF) : SF.slice()
      }, uF.unknown = function(FF) {
        return arguments.length ? (AF = FF, uF) : AF
      }, uF.copy = function() {
        return RF(WF, SF).unknown(AF)
      }, dF.g.apply(uF, arguments), uF
    }
  },
  5179: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    Array.prototype.slice;

    function CF(FF) {
      return "object" === typeof FF && "length" in FF ? FF : Array.from(FF)
    }
  },
  5071: (FF, WF, SF) => {
    function CF(FF) {
      return function() {
        return FF
      }
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  5073: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    const CF = Math.PI,
      AF = 2 * CF,
      uF = 1e-6,
      hF = AF - uF;

    function bW(FF) {
      this._ += FF[0];
      for (let WF = 1, SF = FF.length; WF < SF; ++WF) this._ += arguments[WF] + FF[WF]
    }
    class dF {
      constructor(FF) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == FF ? bW : function(FF) {
          let WF = Math.floor(FF);
          if (!(WF >= 0)) throw new Error(`invalid digits: ${FF}`);
          if (WF > 15) return bW;
          const SF = 10 ** WF;
          return function(FF) {
            this._ += FF[0];
            for (let WF = 1, CF = FF.length; WF < CF; ++WF) this._ += Math.round(arguments[WF] * SF) / SF + FF[WF]
          }
        }(FF)
      }
      moveTo(FF, WF) {
        this._append`M${this._x0=this._x1=+FF},${this._y0=this._y1=+WF}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(FF, WF) {
        this._append`L${this._x1=+FF},${this._y1=+WF}`
      }
      quadraticCurveTo(FF, WF, SF, CF) {
        this._append`Q${+FF},${+WF},${this._x1=+SF},${this._y1=+CF}`
      }
      bezierCurveTo(FF, WF, SF, CF, AF, uF) {
        this._append`C${+FF},${+WF},${+SF},${+CF},${this._x1=+AF},${this._y1=+uF}`
      }
      arcTo(FF, WF, SF, AF, hF) {
        if (FF = +FF, WF = +WF, SF = +SF, AF = +AF, (hF = +hF) < 0) throw new Error(`negative radius: ${hF}`);
        let bW = this._x1,
          dF = this._y1,
          PF = SF - FF,
          RF = AF - WF,
          iW = bW - FF,
          eF = dF - WF,
          EF = iW * iW + eF * eF;
        if (null === this._x1) this._append`M${this._x1=FF},${this._y1=WF}`;
        else if (EF > uF)
          if (Math.abs(eF * PF - RF * iW) > uF && hF) {
            let QF = SF - bW,
              rW = AF - dF,
              gW = PF * PF + RF * RF,
              tW = QF * QF + rW * rW,
              TF = Math.sqrt(gW),
              aW = Math.sqrt(EF),
              kW = hF * Math.tan((CF - Math.acos((gW + EF - tW) / (2 * TF * aW))) / 2),
              qW = kW / aW,
              VF = kW / TF;
            Math.abs(qW - 1) > uF && this._append`L${FF+qW*iW},${WF+qW*eF}`, this._append`A${hF},${hF},0,0,${+(eF*QF>iW*rW)},${this._x1=FF+VF*PF},${this._y1=WF+VF*RF}`
          } else this._append`L${this._x1=FF},${this._y1=WF}`;
        else;
      }
      arc(FF, WF, SF, bW, dF, PF) {
        if (FF = +FF, WF = +WF, PF = !!PF, (SF = +SF) < 0) throw new Error(`negative radius: ${SF}`);
        let RF = SF * Math.cos(bW),
          iW = SF * Math.sin(bW),
          eF = FF + RF,
          EF = WF + iW,
          QF = 1 ^ PF,
          rW = PF ? bW - dF : dF - bW;
        null === this._x1 ? this._append`M${eF},${EF}` : (Math.abs(this._x1 - eF) > uF || Math.abs(this._y1 - EF) > uF) && this._append`L${eF},${EF}`, SF && (rW < 0 && (rW = rW % AF + AF), rW > hF ? this._append`A${SF},${SF},0,1,${QF},${FF-RF},${WF-iW}A${SF},${SF},0,1,${QF},${this._x1=eF},${this._y1=EF}` : rW > uF && this._append`A${SF},${SF},0,${+(rW>=CF)},${QF},${this._x1=FF+SF*Math.cos(dF)},${this._y1=WF+SF*Math.sin(dF)}`)
      }
      rect(FF, WF, SF, CF) {
        this._append`M${this._x0=this._x1=+FF},${this._y0=this._y1=+WF}h${SF=+SF}v${+CF}h${-SF}Z`
      }
      toString() {
        return this._
      }
    }

    function PF(FF) {
      let WF = 3;
      return FF.digits = function(SF) {
        if (!arguments.length) return WF;
        if (null == SF) WF = null;
        else {
          const FF = Math.floor(SF);
          if (!(FF >= 0)) throw new RangeError(`invalid digits: ${SF}`);
          WF = FF
        }
        return FF
      }, () => new dF(WF)
    }
    dF.prototype
  },
  4927: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = !0,
      AF = "Invariant failed";

    function uF(FF, WF) {
      if (!FF) {
        if (CF) throw new Error(AF);
        var SF = "function" === typeof WF ? WF() : WF,
          uF = SF ? "".concat(AF, ": ").concat(SF) : AF;
        throw new Error(uF)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);