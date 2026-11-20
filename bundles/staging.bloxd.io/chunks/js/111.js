/*! For license information please see halsg.111.96a16920.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5929: function(bb, ub, hb) {
    var Bb;
    ! function() {
      var Ob, Gb = 1e9,
        Ub = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        Lb = !0,
        Yb = "[DecimalError] ",
        Sb = Yb + "Invalid argument: ",
        ab = Yb + "Exponent out of range: ",
        Hb = Math.floor,
        wb = Math.pow,
        Zb = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        Xb = 1e7,
        pb = 9007199254740991,
        ob = Hb(1286742750677284.5),
        Ab = {};

      function lb(bb, ub) {
        var hb, Bb, Ob, Gb, Ub, Yb, Sb, ab, Hb = bb.constructor,
          wb = Hb.precision;
        if (!bb.s || !ub.s) return ub.s || (ub = new Hb(bb)), Lb ? zb(ub, wb) : ub;
        if (Sb = bb.d, ab = ub.d, Ub = bb.e, Ob = ub.e, Sb = Sb.slice(), Gb = Ub - Ob) {
          for (Gb < 0 ? (Bb = Sb, Gb = -Gb, Yb = ab.length) : (Bb = ab, Ob = Ub, Yb = Sb.length), Gb > (Yb = (Ub = Math.ceil(wb / 7)) > Yb ? Ub + 1 : Yb + 1) && (Gb = Yb, Bb.length = 1), Bb.reverse(); Gb--;) Bb.push(0);
          Bb.reverse()
        }
        for ((Yb = Sb.length) - (Gb = ab.length) < 0 && (Gb = Yb, Bb = ab, ab = Sb, Sb = Bb), hb = 0; Gb;) hb = (Sb[--Gb] = Sb[Gb] + ab[Gb] + hb) / Xb | 0, Sb[Gb] %= Xb;
        for (hb && (Sb.unshift(hb), ++Ob), Yb = Sb.length; 0 == Sb[--Yb];) Sb.pop();
        return ub.d = Sb, ub.e = Ob, Lb ? zb(ub, wb) : ub
      }

      function Kb(bb, ub, hb) {
        if (bb !== ~~bb || bb < ub || bb > hb) throw Error(Sb + bb)
      }

      function Wb(bb) {
        var ub, hb, Bb, Ob = bb.length - 1,
          Gb = "",
          Ub = bb[0];
        if (Ob > 0) {
          for (Gb += Ub, ub = 1; ub < Ob; ub++)(hb = 7 - (Bb = bb[ub] + "").length) && (Gb += nb(hb)), Gb += Bb;
          (hb = 7 - (Bb = (Ub = bb[ub]) + "").length) && (Gb += nb(hb))
        } else if (0 === Ub) return "0";
        for (; Ub % 10 === 0;) Ub /= 10;
        return Gb + Ub
      }
      Ab.absoluteValue = Ab.abs = function() {
        var bb = new this.constructor(this);
        return bb.s && (bb.s = 1), bb
      }, Ab.comparedTo = Ab.cmp = function(bb) {
        var ub, hb, Bb, Ob, Gb = this;
        if (bb = new Gb.constructor(bb), Gb.s !== bb.s) return Gb.s || -bb.s;
        if (Gb.e !== bb.e) return Gb.e > bb.e ^ Gb.s < 0 ? 1 : -1;
        for (ub = 0, hb = (Bb = Gb.d.length) < (Ob = bb.d.length) ? Bb : Ob; ub < hb; ++ub)
          if (Gb.d[ub] !== bb.d[ub]) return Gb.d[ub] > bb.d[ub] ^ Gb.s < 0 ? 1 : -1;
        return Bb === Ob ? 0 : Bb > Ob ^ Gb.s < 0 ? 1 : -1
      }, Ab.decimalPlaces = Ab.dp = function() {
        var bb = this,
          ub = bb.d.length - 1,
          hb = 7 * (ub - bb.e);
        if (ub = bb.d[ub])
          for (; ub % 10 == 0; ub /= 10) hb--;
        return hb < 0 ? 0 : hb
      }, Ab.dividedBy = Ab.div = function(bb) {
        return Cb(this, new this.constructor(bb))
      }, Ab.dividedToIntegerBy = Ab.idiv = function(bb) {
        var ub = this.constructor;
        return zb(Cb(this, new ub(bb), 0, 1), ub.precision)
      }, Ab.equals = Ab.eq = function(bb) {
        return !this.cmp(bb)
      }, Ab.exponent = function() {
        return rb(this)
      }, Ab.greaterThan = Ab.gt = function(bb) {
        return this.cmp(bb) > 0
      }, Ab.greaterThanOrEqualTo = Ab.gte = function(bb) {
        return this.cmp(bb) >= 0
      }, Ab.isInteger = Ab.isint = function() {
        return this.e > this.d.length - 2
      }, Ab.isNegative = Ab.isneg = function() {
        return this.s < 0
      }, Ab.isPositive = Ab.ispos = function() {
        return this.s > 0
      }, Ab.isZero = function() {
        return 0 === this.s
      }, Ab.lessThan = Ab.lt = function(bb) {
        return this.cmp(bb) < 0
      }, Ab.lessThanOrEqualTo = Ab.lte = function(bb) {
        return this.cmp(bb) < 1
      }, Ab.logarithm = Ab.log = function(bb) {
        var ub, hb = this,
          Bb = hb.constructor,
          Gb = Bb.precision,
          Ub = Gb + 5;
        if (void 0 === bb) bb = new Bb(10);
        else if ((bb = new Bb(bb)).s < 1 || bb.eq(Ob)) throw Error(Yb + "NaN");
        if (hb.s < 1) throw Error(Yb + (hb.s ? "NaN" : "-Infinity"));
        return hb.eq(Ob) ? new Bb(0) : (Lb = !1, ub = Cb(Db(hb, Ub), Db(bb, Ub), Ub), Lb = !0, zb(ub, Gb))
      }, Ab.minus = Ab.sub = function(bb) {
        var ub = this;
        return bb = new ub.constructor(bb), ub.s == bb.s ? gb(ub, bb) : lb(ub, (bb.s = -bb.s, bb))
      }, Ab.modulo = Ab.mod = function(bb) {
        var ub, hb = this,
          Bb = hb.constructor,
          Ob = Bb.precision;
        if (!(bb = new Bb(bb)).s) throw Error(Yb + "NaN");
        return hb.s ? (Lb = !1, ub = Cb(hb, bb, 0, 1).times(bb), Lb = !0, hb.minus(ub)) : zb(new Bb(hb), Ob)
      }, Ab.naturalExponential = Ab.exp = function() {
        return db(this)
      }, Ab.naturalLogarithm = Ab.ln = function() {
        return Db(this)
      }, Ab.negated = Ab.neg = function() {
        var bb = new this.constructor(this);
        return bb.s = -bb.s || 0, bb
      }, Ab.plus = Ab.add = function(bb) {
        var ub = this;
        return bb = new ub.constructor(bb), ub.s == bb.s ? lb(ub, bb) : gb(ub, (bb.s = -bb.s, bb))
      }, Ab.precision = Ab.sd = function(bb) {
        var ub, hb, Bb, Ob = this;
        if (void 0 !== bb && bb !== !!bb && 1 !== bb && 0 !== bb) throw Error(Sb + bb);
        if (ub = rb(Ob) + 1, hb = 7 * (Bb = Ob.d.length - 1) + 1, Bb = Ob.d[Bb]) {
          for (; Bb % 10 == 0; Bb /= 10) hb--;
          for (Bb = Ob.d[0]; Bb >= 10; Bb /= 10) hb++
        }
        return bb && ub > hb ? ub : hb
      }, Ab.squareRoot = Ab.sqrt = function() {
        var bb, ub, hb, Bb, Ob, Gb, Ub, Sb = this,
          ab = Sb.constructor;
        if (Sb.s < 1) {
          if (!Sb.s) return new ab(0);
          throw Error(Yb + "NaN")
        }
        for (bb = rb(Sb), Lb = !1, 0 == (Ob = Math.sqrt(+Sb)) || Ob == 1 / 0 ? (((ub = Wb(Sb.d)).length + bb) % 2 == 0 && (ub += "0"), Ob = Math.sqrt(ub), bb = Hb((bb + 1) / 2) - (bb < 0 || bb % 2), Bb = new ab(ub = Ob == 1 / 0 ? "1e" + bb : (ub = Ob.toExponential()).slice(0, ub.indexOf("e") + 1) + bb)) : Bb = new ab(Ob.toString()), Ob = Ub = (hb = ab.precision) + 3;;)
          if (Bb = (Gb = Bb).plus(Cb(Sb, Gb, Ub + 2)).times(.5), Wb(Gb.d).slice(0, Ub) === (ub = Wb(Bb.d)).slice(0, Ub)) {
            if (ub = ub.slice(Ub - 3, Ub + 1), Ob == Ub && "4999" == ub) {
              if (zb(Gb, hb + 1, 0), Gb.times(Gb).eq(Sb)) {
                Bb = Gb;
                break
              }
            } else if ("9999" != ub) break;
            Ub += 4
          } return Lb = !0, zb(Bb, hb)
      }, Ab.times = Ab.mul = function(bb) {
        var ub, hb, Bb, Ob, Gb, Ub, Yb, Sb, ab, Hb = this,
          wb = Hb.constructor,
          Zb = Hb.d,
          pb = (bb = new wb(bb)).d;
        if (!Hb.s || !bb.s) return new wb(0);
        for (bb.s *= Hb.s, hb = Hb.e + bb.e, (Sb = Zb.length) < (ab = pb.length) && (Gb = Zb, Zb = pb, pb = Gb, Ub = Sb, Sb = ab, ab = Ub), Gb = [], Bb = Ub = Sb + ab; Bb--;) Gb.push(0);
        for (Bb = ab; --Bb >= 0;) {
          for (ub = 0, Ob = Sb + Bb; Ob > Bb;) Yb = Gb[Ob] + pb[Bb] * Zb[Ob - Bb - 1] + ub, Gb[Ob--] = Yb % Xb | 0, ub = Yb / Xb | 0;
          Gb[Ob] = (Gb[Ob] + ub) % Xb | 0
        }
        for (; !Gb[--Ub];) Gb.pop();
        return ub ? ++hb : Gb.shift(), bb.d = Gb, bb.e = hb, Lb ? zb(bb, wb.precision) : bb
      }, Ab.toDecimalPlaces = Ab.todp = function(bb, ub) {
        var hb = this,
          Bb = hb.constructor;
        return hb = new Bb(hb), void 0 === bb ? hb : (Kb(bb, 0, Gb), void 0 === ub ? ub = Bb.rounding : Kb(ub, 0, 8), zb(hb, bb + rb(hb) + 1, ub))
      }, Ab.toExponential = function(bb, ub) {
        var hb, Bb = this,
          Ob = Bb.constructor;
        return void 0 === bb ? hb = ib(Bb, !0) : (Kb(bb, 0, Gb), void 0 === ub ? ub = Ob.rounding : Kb(ub, 0, 8), hb = ib(Bb = zb(new Ob(Bb), bb + 1, ub), !0, bb + 1)), hb
      }, Ab.toFixed = function(bb, ub) {
        var hb, Bb, Ob = this,
          Ub = Ob.constructor;
        return void 0 === bb ? ib(Ob) : (Kb(bb, 0, Gb), void 0 === ub ? ub = Ub.rounding : Kb(ub, 0, 8), hb = ib((Bb = zb(new Ub(Ob), bb + rb(Ob) + 1, ub)).abs(), !1, bb + rb(Bb) + 1), Ob.isneg() && !Ob.isZero() ? "-" + hb : hb)
      }, Ab.toInteger = Ab.toint = function() {
        var bb = this,
          ub = bb.constructor;
        return zb(new ub(bb), rb(bb) + 1, ub.rounding)
      }, Ab.toNumber = function() {
        return +this
      }, Ab.toPower = Ab.pow = function(bb) {
        var ub, hb, Bb, Gb, Ub, Sb, ab = this,
          wb = ab.constructor,
          Zb = +(bb = new wb(bb));
        if (!bb.s) return new wb(Ob);
        if (!(ab = new wb(ab)).s) {
          if (bb.s < 1) throw Error(Yb + "Infinity");
          return ab
        }
        if (ab.eq(Ob)) return ab;
        if (Bb = wb.precision, bb.eq(Ob)) return zb(ab, Bb);
        if (Sb = (ub = bb.e) >= (hb = bb.d.length - 1), Ub = ab.s, Sb) {
          if ((hb = Zb < 0 ? -Zb : Zb) <= pb) {
            for (Gb = new wb(Ob), ub = Math.ceil(Bb / 7 + 4), Lb = !1; hb % 2 && vb((Gb = Gb.times(ab)).d, ub), 0 !== (hb = Hb(hb / 2));) vb((ab = ab.times(ab)).d, ub);
            return Lb = !0, bb.s < 0 ? new wb(Ob).div(Gb) : zb(Gb, Bb)
          }
        } else if (Ub < 0) throw Error(Yb + "NaN");
        return Ub = Ub < 0 && 1 & bb.d[Math.max(ub, hb)] ? -1 : 1, ab.s = 1, Lb = !1, Gb = bb.times(Db(ab, Bb + 12)), Lb = !0, (Gb = db(Gb)).s = Ub, Gb
      }, Ab.toPrecision = function(bb, ub) {
        var hb, Bb, Ob = this,
          Ub = Ob.constructor;
        return void 0 === bb ? Bb = ib(Ob, (hb = rb(Ob)) <= Ub.toExpNeg || hb >= Ub.toExpPos) : (Kb(bb, 1, Gb), void 0 === ub ? ub = Ub.rounding : Kb(ub, 0, 8), Bb = ib(Ob = zb(new Ub(Ob), bb, ub), bb <= (hb = rb(Ob)) || hb <= Ub.toExpNeg, bb)), Bb
      }, Ab.toSignificantDigits = Ab.tosd = function(bb, ub) {
        var hb = this.constructor;
        return void 0 === bb ? (bb = hb.precision, ub = hb.rounding) : (Kb(bb, 1, Gb), void 0 === ub ? ub = hb.rounding : Kb(ub, 0, 8)), zb(new hb(this), bb, ub)
      }, Ab.toString = Ab.valueOf = Ab.val = Ab.toJSON = function() {
        var bb = this,
          ub = rb(bb),
          hb = bb.constructor;
        return ib(bb, ub <= hb.toExpNeg || ub >= hb.toExpPos)
      };
      var Cb = function() {
        function bb(bb, ub) {
          var hb, Bb = 0,
            Ob = bb.length;
          for (bb = bb.slice(); Ob--;) hb = bb[Ob] * ub + Bb, bb[Ob] = hb % Xb | 0, Bb = hb / Xb | 0;
          return Bb && bb.unshift(Bb), bb
        }

        function ub(bb, ub, hb, Bb) {
          var Ob, Gb;
          if (hb != Bb) Gb = hb > Bb ? 1 : -1;
          else
            for (Ob = Gb = 0; Ob < hb; Ob++)
              if (bb[Ob] != ub[Ob]) {
                Gb = bb[Ob] > ub[Ob] ? 1 : -1;
                break
              } return Gb
        }

        function hb(bb, ub, hb) {
          for (var Bb = 0; hb--;) bb[hb] -= Bb, Bb = bb[hb] < ub[hb] ? 1 : 0, bb[hb] = Bb * Xb + bb[hb] - ub[hb];
          for (; !bb[0] && bb.length > 1;) bb.shift()
        }
        return function(Bb, Ob, Gb, Ub) {
          var Lb, Sb, ab, Hb, wb, Zb, pb, ob, Ab, lb, Kb, Wb, Cb, db, jb, nb, Db, xb, gb = Bb.constructor,
            ib = Bb.s == Ob.s ? 1 : -1,
            vb = Bb.d,
            tb = Ob.d;
          if (!Bb.s) return new gb(Bb);
          if (!Ob.s) throw Error(Yb + "Division by zero");
          for (Sb = Bb.e - Ob.e, Db = tb.length, jb = vb.length, ob = (pb = new gb(ib)).d = [], ab = 0; tb[ab] == (vb[ab] || 0);) ++ab;
          if (tb[ab] > (vb[ab] || 0) && --Sb, (Wb = null == Gb ? Gb = gb.precision : Ub ? Gb + (rb(Bb) - rb(Ob)) + 1 : Gb) < 0) return new gb(0);
          if (Wb = Wb / 7 + 2 | 0, ab = 0, 1 == Db)
            for (Hb = 0, tb = tb[0], Wb++;
              (ab < jb || Hb) && Wb--; ab++) Cb = Hb * Xb + (vb[ab] || 0), ob[ab] = Cb / tb | 0, Hb = Cb % tb | 0;
          else {
            for ((Hb = Xb / (tb[0] + 1) | 0) > 1 && (tb = bb(tb, Hb), vb = bb(vb, Hb), Db = tb.length, jb = vb.length), db = Db, lb = (Ab = vb.slice(0, Db)).length; lb < Db;) Ab[lb++] = 0;
            (xb = tb.slice()).unshift(0), nb = tb[0], tb[1] >= Xb / 2 && ++nb;
            do {
              Hb = 0, (Lb = ub(tb, Ab, Db, lb)) < 0 ? (Kb = Ab[0], Db != lb && (Kb = Kb * Xb + (Ab[1] || 0)), (Hb = Kb / nb | 0) > 1 ? (Hb >= Xb && (Hb = Xb - 1), 1 == (Lb = ub(wb = bb(tb, Hb), Ab, Zb = wb.length, lb = Ab.length)) && (Hb--, hb(wb, Db < Zb ? xb : tb, Zb))) : (0 == Hb && (Lb = Hb = 1), wb = tb.slice()), (Zb = wb.length) < lb && wb.unshift(0), hb(Ab, wb, lb), -1 == Lb && (Lb = ub(tb, Ab, Db, lb = Ab.length)) < 1 && (Hb++, hb(Ab, Db < lb ? xb : tb, lb)), lb = Ab.length) : 0 === Lb && (Hb++, Ab = [0]), ob[ab++] = Hb, Lb && Ab[0] ? Ab[lb++] = vb[db] || 0 : (Ab = [vb[db]], lb = 1)
            } while ((db++ < jb || void 0 !== Ab[0]) && Wb--)
          }
          return ob[0] || ob.shift(), pb.e = Sb, zb(pb, Ub ? Gb + rb(pb) + 1 : Gb)
        }
      }();

      function db(bb, ub) {
        var hb, Bb, Gb, Ub, Yb, Sb = 0,
          Hb = 0,
          Zb = bb.constructor,
          Xb = Zb.precision;
        if (rb(bb) > 16) throw Error(ab + rb(bb));
        if (!bb.s) return new Zb(Ob);
        for (null == ub ? (Lb = !1, Yb = Xb) : Yb = ub, Ub = new Zb(.03125); bb.abs().gte(.1);) bb = bb.times(Ub), Hb += 5;
        for (Yb += Math.log(wb(2, Hb)) / Math.LN10 * 2 + 5 | 0, hb = Bb = Gb = new Zb(Ob), Zb.precision = Yb;;) {
          if (Bb = zb(Bb.times(bb), Yb), hb = hb.times(++Sb), Wb((Ub = Gb.plus(Cb(Bb, hb, Yb))).d).slice(0, Yb) === Wb(Gb.d).slice(0, Yb)) {
            for (; Hb--;) Gb = zb(Gb.times(Gb), Yb);
            return Zb.precision = Xb, null == ub ? (Lb = !0, zb(Gb, Xb)) : Gb
          }
          Gb = Ub
        }
      }

      function rb(bb) {
        for (var ub = 7 * bb.e, hb = bb.d[0]; hb >= 10; hb /= 10) ub++;
        return ub
      }

      function jb(bb, ub, hb) {
        if (ub > bb.LN10.sd()) throw Lb = !0, hb && (bb.precision = hb), Error(Yb + "LN10 precision limit exceeded");
        return zb(new bb(bb.LN10), ub)
      }

      function nb(bb) {
        for (var ub = ""; bb--;) ub += "0";
        return ub
      }

      function Db(bb, ub) {
        var hb, Bb, Gb, Ub, Sb, ab, Hb, wb, Zb, Xb = 1,
          pb = bb,
          ob = pb.d,
          Ab = pb.constructor,
          lb = Ab.precision;
        if (pb.s < 1) throw Error(Yb + (pb.s ? "NaN" : "-Infinity"));
        if (pb.eq(Ob)) return new Ab(0);
        if (null == ub ? (Lb = !1, wb = lb) : wb = ub, pb.eq(10)) return null == ub && (Lb = !0), jb(Ab, wb);
        if (wb += 10, Ab.precision = wb, Bb = (hb = Wb(ob)).charAt(0), Ub = rb(pb), !(Math.abs(Ub) < 15e14)) return Hb = jb(Ab, wb + 2, lb).times(Ub + ""), pb = Db(new Ab(Bb + "." + hb.slice(1)), wb - 10).plus(Hb), Ab.precision = lb, null == ub ? (Lb = !0, zb(pb, lb)) : pb;
        for (; Bb < 7 && 1 != Bb || 1 == Bb && hb.charAt(1) > 3;) Bb = (hb = Wb((pb = pb.times(bb)).d)).charAt(0), Xb++;
        for (Ub = rb(pb), Bb > 1 ? (pb = new Ab("0." + hb), Ub++) : pb = new Ab(Bb + "." + hb.slice(1)), ab = Sb = pb = Cb(pb.minus(Ob), pb.plus(Ob), wb), Zb = zb(pb.times(pb), wb), Gb = 3;;) {
          if (Sb = zb(Sb.times(Zb), wb), Wb((Hb = ab.plus(Cb(Sb, new Ab(Gb), wb))).d).slice(0, wb) === Wb(ab.d).slice(0, wb)) return ab = ab.times(2), 0 !== Ub && (ab = ab.plus(jb(Ab, wb + 2, lb).times(Ub + ""))), ab = Cb(ab, new Ab(Xb), wb), Ab.precision = lb, null == ub ? (Lb = !0, zb(ab, lb)) : ab;
          ab = Hb, Gb += 2
        }
      }

      function xb(bb, ub) {
        var hb, Bb, Ob;
        for ((hb = ub.indexOf(".")) > -1 && (ub = ub.replace(".", "")), (Bb = ub.search(/e/i)) > 0 ? (hb < 0 && (hb = Bb), hb += +ub.slice(Bb + 1), ub = ub.substring(0, Bb)) : hb < 0 && (hb = ub.length), Bb = 0; 48 === ub.charCodeAt(Bb);) ++Bb;
        for (Ob = ub.length; 48 === ub.charCodeAt(Ob - 1);) --Ob;
        if (ub = ub.slice(Bb, Ob)) {
          if (Ob -= Bb, hb = hb - Bb - 1, bb.e = Hb(hb / 7), bb.d = [], Bb = (hb + 1) % 7, hb < 0 && (Bb += 7), Bb < Ob) {
            for (Bb && bb.d.push(+ub.slice(0, Bb)), Ob -= 7; Bb < Ob;) bb.d.push(+ub.slice(Bb, Bb += 7));
            Bb = 7 - (ub = ub.slice(Bb)).length
          } else Bb -= Ob;
          for (; Bb--;) ub += "0";
          if (bb.d.push(+ub), Lb && (bb.e > ob || bb.e < -ob)) throw Error(ab + hb)
        } else bb.s = 0, bb.e = 0, bb.d = [0];
        return bb
      }

      function zb(bb, ub, hb) {
        var Bb, Ob, Gb, Ub, Yb, Sb, Zb, pb, Ab = bb.d;
        for (Ub = 1, Gb = Ab[0]; Gb >= 10; Gb /= 10) Ub++;
        if ((Bb = ub - Ub) < 0) Bb += 7, Ob = ub, Zb = Ab[pb = 0];
        else {
          if ((pb = Math.ceil((Bb + 1) / 7)) >= (Gb = Ab.length)) return bb;
          for (Zb = Gb = Ab[pb], Ub = 1; Gb >= 10; Gb /= 10) Ub++;
          Ob = (Bb %= 7) - 7 + Ub
        }
        if (void 0 !== hb && (Yb = Zb / (Gb = wb(10, Ub - Ob - 1)) % 10 | 0, Sb = ub < 0 || void 0 !== Ab[pb + 1] || Zb % Gb, Sb = hb < 4 ? (Yb || Sb) && (0 == hb || hb == (bb.s < 0 ? 3 : 2)) : Yb > 5 || 5 == Yb && (4 == hb || Sb || 6 == hb && (Bb > 0 ? Ob > 0 ? Zb / wb(10, Ub - Ob) : 0 : Ab[pb - 1]) % 10 & 1 || hb == (bb.s < 0 ? 8 : 7))), ub < 1 || !Ab[0]) return Sb ? (Gb = rb(bb), Ab.length = 1, ub = ub - Gb - 1, Ab[0] = wb(10, (7 - ub % 7) % 7), bb.e = Hb(-ub / 7) || 0) : (Ab.length = 1, Ab[0] = bb.e = bb.s = 0), bb;
        if (0 == Bb ? (Ab.length = pb, Gb = 1, pb--) : (Ab.length = pb + 1, Gb = wb(10, 7 - Bb), Ab[pb] = Ob > 0 ? (Zb / wb(10, Ub - Ob) % wb(10, Ob) | 0) * Gb : 0), Sb)
          for (;;) {
            if (0 == pb) {
              (Ab[0] += Gb) == Xb && (Ab[0] = 1, ++bb.e);
              break
            }
            if (Ab[pb] += Gb, Ab[pb] != Xb) break;
            Ab[pb--] = 0, Gb = 1
          }
        for (Bb = Ab.length; 0 === Ab[--Bb];) Ab.pop();
        if (Lb && (bb.e > ob || bb.e < -ob)) throw Error(ab + rb(bb));
        return bb
      }

      function gb(bb, ub) {
        var hb, Bb, Ob, Gb, Ub, Yb, Sb, ab, Hb, wb, Zb = bb.constructor,
          pb = Zb.precision;
        if (!bb.s || !ub.s) return ub.s ? ub.s = -ub.s : ub = new Zb(bb), Lb ? zb(ub, pb) : ub;
        if (Sb = bb.d, wb = ub.d, Bb = ub.e, ab = bb.e, Sb = Sb.slice(), Ub = ab - Bb) {
          for ((Hb = Ub < 0) ? (hb = Sb, Ub = -Ub, Yb = wb.length) : (hb = wb, Bb = ab, Yb = Sb.length), Ub > (Ob = Math.max(Math.ceil(pb / 7), Yb) + 2) && (Ub = Ob, hb.length = 1), hb.reverse(), Ob = Ub; Ob--;) hb.push(0);
          hb.reverse()
        } else {
          for ((Hb = (Ob = Sb.length) < (Yb = wb.length)) && (Yb = Ob), Ob = 0; Ob < Yb; Ob++)
            if (Sb[Ob] != wb[Ob]) {
              Hb = Sb[Ob] < wb[Ob];
              break
            } Ub = 0
        }
        for (Hb && (hb = Sb, Sb = wb, wb = hb, ub.s = -ub.s), Yb = Sb.length, Ob = wb.length - Yb; Ob > 0; --Ob) Sb[Yb++] = 0;
        for (Ob = wb.length; Ob > Ub;) {
          if (Sb[--Ob] < wb[Ob]) {
            for (Gb = Ob; Gb && 0 === Sb[--Gb];) Sb[Gb] = Xb - 1;
            --Sb[Gb], Sb[Ob] += Xb
          }
          Sb[Ob] -= wb[Ob]
        }
        for (; 0 === Sb[--Yb];) Sb.pop();
        for (; 0 === Sb[0]; Sb.shift()) --Bb;
        return Sb[0] ? (ub.d = Sb, ub.e = Bb, Lb ? zb(ub, pb) : ub) : new Zb(0)
      }

      function ib(bb, ub, hb) {
        var Bb, Ob = rb(bb),
          Gb = Wb(bb.d),
          Ub = Gb.length;
        return ub ? (hb && (Bb = hb - Ub) > 0 ? Gb = Gb.charAt(0) + "." + Gb.slice(1) + nb(Bb) : Ub > 1 && (Gb = Gb.charAt(0) + "." + Gb.slice(1)), Gb = Gb + (Ob < 0 ? "e" : "e+") + Ob) : Ob < 0 ? (Gb = "0." + nb(-Ob - 1) + Gb, hb && (Bb = hb - Ub) > 0 && (Gb += nb(Bb))) : Ob >= Ub ? (Gb += nb(Ob + 1 - Ub), hb && (Bb = hb - Ob - 1) > 0 && (Gb = Gb + "." + nb(Bb))) : ((Bb = Ob + 1) < Ub && (Gb = Gb.slice(0, Bb) + "." + Gb.slice(Bb)), hb && (Bb = hb - Ub) > 0 && (Ob + 1 === Ub && (Gb += "."), Gb += nb(Bb))), bb.s < 0 ? "-" + Gb : Gb
      }

      function vb(bb, ub) {
        if (bb.length > ub) return bb.length = ub, !0
      }

      function tb(bb) {
        if (!bb || "object" !== typeof bb) throw Error(Yb + "Object expected");
        var ub, hb, Bb, Ob = ["precision", 1, Gb, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (ub = 0; ub < Ob.length; ub += 3)
          if (void 0 !== (Bb = bb[hb = Ob[ub]])) {
            if (!(Hb(Bb) === Bb && Bb >= Ob[ub + 1] && Bb <= Ob[ub + 2])) throw Error(Sb + hb + ": " + Bb);
            this[hb] = Bb
          } if (void 0 !== (Bb = bb[hb = "LN10"])) {
          if (Bb != Math.LN10) throw Error(Sb + hb + ": " + Bb);
          this[hb] = new this(Bb)
        }
        return this
      }
      Ub = function bb(ub) {
        var hb, Bb, Ob;

        function Gb(bb) {
          var ub = this;
          if (!(ub instanceof Gb)) return new Gb(bb);
          if (ub.constructor = Gb, bb instanceof Gb) return ub.s = bb.s, ub.e = bb.e, void(ub.d = (bb = bb.d) ? bb.slice() : bb);
          if ("number" === typeof bb) {
            if (0 * bb !== 0) throw Error(Sb + bb);
            if (bb > 0) ub.s = 1;
            else {
              if (!(bb < 0)) return ub.s = 0, ub.e = 0, void(ub.d = [0]);
              bb = -bb, ub.s = -1
            }
            return bb === ~~bb && bb < 1e7 ? (ub.e = 0, void(ub.d = [bb])) : xb(ub, bb.toString())
          }
          if ("string" !== typeof bb) throw Error(Sb + bb);
          if (45 === bb.charCodeAt(0) ? (bb = bb.slice(1), ub.s = -1) : ub.s = 1, !Zb.test(bb)) throw Error(Sb + bb);
          xb(ub, bb)
        }
        if (Gb.prototype = Ab, Gb.ROUND_UP = 0, Gb.ROUND_DOWN = 1, Gb.ROUND_CEIL = 2, Gb.ROUND_FLOOR = 3, Gb.ROUND_HALF_UP = 4, Gb.ROUND_HALF_DOWN = 5, Gb.ROUND_HALF_EVEN = 6, Gb.ROUND_HALF_CEIL = 7, Gb.ROUND_HALF_FLOOR = 8, Gb.clone = bb, Gb.config = Gb.set = tb, void 0 === ub && (ub = {}), ub)
          for (Ob = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], hb = 0; hb < Ob.length;) ub.hasOwnProperty(Bb = Ob[hb++]) || (ub[Bb] = this[Bb]);
        return Gb.config(ub), Gb
      }(Ub), Ub.default = Ub.Decimal = Ub, Ob = new Ub(1), void 0 === (Bb = function() {
        return Ub
      }.call(ub, hb, ub, bb)) || (bb.exports = Bb)
    }()
  },
  5523: (bb, ub, hb) => {
    var Bb = hb(5012)(hb(4861), "DataView");
    bb.exports = Bb
  },
  4992: (bb, ub, hb) => {
    var Bb = hb(4998),
      Ob = hb(5038),
      Gb = hb(5047),
      Ub = hb(5055),
      Lb = hb(5061);

    function Yb(bb) {
      var ub = -1,
        hb = null == bb ? 0 : bb.length;
      for (this.clear(); ++ub < hb;) {
        var Bb = bb[ub];
        this.set(Bb[0], Bb[1])
      }
    }
    Yb.prototype.clear = Bb, Yb.prototype.delete = Ob, Yb.prototype.get = Gb, Yb.prototype.has = Ub, Yb.prototype.set = Lb, bb.exports = Yb
  },
  5065: (bb, ub, hb) => {
    var Bb = hb(5071),
      Ob = hb(5073),
      Gb = hb(5094),
      Ub = hb(5101),
      Lb = hb(5107);

    function Yb(bb) {
      var ub = -1,
        hb = null == bb ? 0 : bb.length;
      for (this.clear(); ++ub < hb;) {
        var Bb = bb[ub];
        this.set(Bb[0], Bb[1])
      }
    }
    Yb.prototype.clear = Bb, Yb.prototype.delete = Ob, Yb.prototype.get = Gb, Yb.prototype.has = Ub, Yb.prototype.set = Lb, bb.exports = Yb
  },
  5116: (bb, ub, hb) => {
    var Bb = hb(5012)(hb(4861), "Map");
    bb.exports = Bb
  },
  4982: (bb, ub, hb) => {
    var Bb = hb(4986),
      Ob = hb(5125),
      Gb = hb(5134),
      Ub = hb(5141),
      Lb = hb(5146);

    function Yb(bb) {
      var ub = -1,
        hb = null == bb ? 0 : bb.length;
      for (this.clear(); ++ub < hb;) {
        var Bb = bb[ub];
        this.set(Bb[0], Bb[1])
      }
    }
    Yb.prototype.clear = Bb, Yb.prototype.delete = Ob, Yb.prototype.get = Gb, Yb.prototype.has = Ub, Yb.prototype.set = Lb, bb.exports = Yb
  },
  5532: (bb, ub, hb) => {
    var Bb = hb(5012)(hb(4861), "Promise");
    bb.exports = Bb
  },
  5539: (bb, ub, hb) => {
    var Bb = hb(5012)(hb(4861), "Set");
    bb.exports = Bb
  },
  5368: (bb, ub, hb) => {
    var Bb = hb(4982),
      Ob = hb(5373),
      Gb = hb(5375);

    function Ub(bb) {
      var ub = -1,
        hb = null == bb ? 0 : bb.length;
      for (this.__data__ = new Bb; ++ub < hb;) this.add(bb[ub])
    }
    Ub.prototype.add = Ub.prototype.push = Ob, Ub.prototype.has = Gb, bb.exports = Ub
  },
  5312: (bb, ub, hb) => {
    var Bb = hb(5065),
      Ob = hb(5318),
      Gb = hb(5323),
      Ub = hb(5330),
      Lb = hb(5338),
      Yb = hb(5344);

    function Sb(bb) {
      var ub = this.__data__ = new Bb(bb);
      this.size = ub.size
    }
    Sb.prototype.clear = Ob, Sb.prototype.delete = Gb, Sb.prototype.get = Ub, Sb.prototype.has = Lb, Sb.prototype.set = Yb, bb.exports = Sb
  },
  4901: (bb, ub, hb) => {
    var Bb = hb(4861).Symbol;
    bb.exports = Bb
  },
  5399: (bb, ub, hb) => {
    var Bb = hb(4861).Uint8Array;
    bb.exports = Bb
  },
  5542: (bb, ub, hb) => {
    var Bb = hb(5012)(hb(4861), "WeakMap");
    bb.exports = Bb
  },
  5665: bb => {
    bb.exports = function(bb, ub, hb) {
      switch (hb.length) {
        case 0:
          return bb.call(ub);
        case 1:
          return bb.call(ub, hb[0]);
        case 2:
          return bb.call(ub, hb[0], hb[1]);
        case 3:
          return bb.call(ub, hb[0], hb[1], hb[2])
      }
      return bb.apply(ub, hb)
    }
  },
  5992: bb => {
    bb.exports = function(bb, ub) {
      for (var hb = -1, Bb = null == bb ? 0 : bb.length; ++hb < Bb;)
        if (!ub(bb[hb], hb, bb)) return !1;
      return !0
    }
  },
  5438: bb => {
    bb.exports = function(bb, ub) {
      for (var hb = -1, Bb = null == bb ? 0 : bb.length, Ob = 0, Gb = []; ++hb < Bb;) {
        var Ub = bb[hb];
        ub(Ub, hb, bb) && (Gb[Ob++] = Ub)
      }
      return Gb
    }
  },
  5734: (bb, ub, hb) => {
    var Bb = hb(5737);
    bb.exports = function(bb, ub) {
      return !!(null == bb ? 0 : bb.length) && Bb(bb, ub, 0) > -1
    }
  },
  5758: bb => {
    bb.exports = function(bb, ub, hb) {
      for (var Bb = -1, Ob = null == bb ? 0 : bb.length; ++Bb < Ob;)
        if (hb(ub, bb[Bb])) return !0;
      return !1
    }
  },
  5453: (bb, ub, hb) => {
    var Bb = hb(5459),
      Ob = hb(5277),
      Gb = hb(4926),
      Ub = hb(5468),
      Lb = hb(5245),
      Yb = hb(5484),
      Sb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb, ub) {
      var hb = Gb(bb),
        ab = !hb && Ob(bb),
        Hb = !hb && !ab && Ub(bb),
        wb = !hb && !ab && !Hb && Yb(bb),
        Zb = hb || ab || Hb || wb,
        Xb = Zb ? Bb(bb.length, String) : [],
        pb = Xb.length;
      for (var ob in bb) !ub && !Sb.call(bb, ob) || Zb && ("length" == ob || Hb && ("offset" == ob || "parent" == ob) || wb && ("buffer" == ob || "byteLength" == ob || "byteOffset" == ob) || Lb(ob, pb)) || Xb.push(ob);
      return Xb
    }
  },
  5165: bb => {
    bb.exports = function(bb, ub) {
      for (var hb = -1, Bb = null == bb ? 0 : bb.length, Ob = Array(Bb); ++hb < Bb;) Ob[hb] = ub(bb[hb], hb, bb);
      return Ob
    }
  },
  5263: bb => {
    bb.exports = function(bb, ub) {
      for (var hb = -1, Bb = ub.length, Ob = bb.length; ++hb < Bb;) bb[Ob + hb] = ub[hb];
      return bb
    }
  },
  5381: bb => {
    bb.exports = function(bb, ub) {
      for (var hb = -1, Bb = null == bb ? 0 : bb.length; ++hb < Bb;)
        if (ub(bb[hb], hb, bb)) return !0;
      return !1
    }
  },
  5824: bb => {
    bb.exports = function(bb) {
      return bb.split("")
    }
  },
  5082: (bb, ub, hb) => {
    var Bb = hb(5086);
    bb.exports = function(bb, ub) {
      for (var hb = bb.length; hb--;)
        if (Bb(bb[hb][0], ub)) return hb;
      return -1
    }
  },
  5983: (bb, ub, hb) => {
    var Bb = hb(5688);
    bb.exports = function(bb, ub, hb) {
      "__proto__" == ub && Bb ? Bb(bb, ub, {
        configurable: !0,
        enumerable: !0,
        value: hb,
        writable: !0
      }) : bb[ub] = hb
    }
  },
  5612: (bb, ub, hb) => {
    var Bb = hb(5621),
      Ob = hb(5637)(Bb);
    bb.exports = Ob
  },
  5999: (bb, ub, hb) => {
    var Bb = hb(5612);
    bb.exports = function(bb, ub) {
      var hb = !0;
      return Bb(bb, (function(bb, Bb, Ob) {
        return hb = !!ub(bb, Bb, Ob)
      })), hb
    }
  },
  5898: (bb, ub, hb) => {
    var Bb = hb(4890);
    bb.exports = function(bb, ub, hb) {
      for (var Ob = -1, Gb = bb.length; ++Ob < Gb;) {
        var Ub = bb[Ob],
          Lb = ub(Ub);
        if (null != Lb && (void 0 === Yb ? Lb === Lb && !Bb(Lb) : hb(Lb, Yb))) var Yb = Lb,
          Sb = Ub
      }
      return Sb
    }
  },
  5746: bb => {
    bb.exports = function(bb, ub, hb, Bb) {
      for (var Ob = bb.length, Gb = hb + (Bb ? 1 : -1); Bb ? Gb-- : ++Gb < Ob;)
        if (ub(bb[Gb], Gb, bb)) return Gb;
      return -1
    }
  },
  5259: (bb, ub, hb) => {
    var Bb = hb(5263),
      Ob = hb(5271);
    bb.exports = function bb(ub, hb, Gb, Ub, Lb) {
      var Yb = -1,
        Sb = ub.length;
      for (Gb || (Gb = Ob), Lb || (Lb = []); ++Yb < Sb;) {
        var ab = ub[Yb];
        hb > 0 && Gb(ab) ? hb > 1 ? bb(ab, hb - 1, Gb, Ub, Lb) : Bb(Lb, ab) : Ub || (Lb[Lb.length] = ab)
      }
      return Lb
    }
  },
  5628: (bb, ub, hb) => {
    var Bb = hb(5630)();
    bb.exports = Bb
  },
  5621: (bb, ub, hb) => {
    var Bb = hb(5628),
      Ob = hb(5451);
    bb.exports = function(bb, ub) {
      return bb && Bb(bb, ub, Ob)
    }
  },
  4949: (bb, ub, hb) => {
    var Bb = hb(4951),
      Ob = hb(5172);
    bb.exports = function(bb, ub) {
      for (var hb = 0, Gb = (ub = Bb(ub, bb)).length; null != bb && hb < Gb;) bb = bb[Ob(ub[hb++])];
      return hb && hb == Gb ? bb : void 0
    }
  },
  5430: (bb, ub, hb) => {
    var Bb = hb(5263),
      Ob = hb(4926);
    bb.exports = function(bb, ub, hb) {
      var Gb = ub(bb);
      return Ob(bb) ? Gb : Bb(Gb, hb(bb))
    }
  },
  4893: (bb, ub, hb) => {
    var Bb = hb(4901),
      Ob = hb(4905),
      Gb = hb(4908),
      Ub = Bb ? Bb.toStringTag : void 0;
    bb.exports = function(bb) {
      return null == bb ? void 0 === bb ? "[object Undefined]" : "[object Null]" : Ub && Ub in Object(bb) ? Ob(bb) : Gb(bb)
    }
  },
  5903: bb => {
    bb.exports = function(bb, ub) {
      return bb > ub
    }
  },
  5573: bb => {
    bb.exports = function(bb, ub) {
      return null != bb && ub in Object(bb)
    }
  },
  5737: (bb, ub, hb) => {
    var Bb = hb(5746),
      Ob = hb(5750),
      Gb = hb(5753);
    bb.exports = function(bb, ub, hb) {
      return ub === ub ? Gb(bb, ub, hb) : Bb(bb, Ob, hb)
    }
  },
  5283: (bb, ub, hb) => {
    var Bb = hb(4893),
      Ob = hb(4913);
    bb.exports = function(bb) {
      return Ob(bb) && "[object Arguments]" == Bb(bb)
    }
  },
  5347: (bb, ub, hb) => {
    var Bb = hb(5356),
      Ob = hb(4913);
    bb.exports = function bb(ub, hb, Gb, Ub, Lb) {
      return ub === hb || (null == ub || null == hb || !Ob(ub) && !Ob(hb) ? ub !== ub && hb !== hb : Bb(ub, hb, Gb, Ub, bb, Lb))
    }
  },
  5356: (bb, ub, hb) => {
    var Bb = hb(5312),
      Ob = hb(5365),
      Gb = hb(5391),
      Ub = hb(5418),
      Lb = hb(5521),
      Yb = hb(4926),
      Sb = hb(5468),
      ab = hb(5484),
      Hb = "[object Arguments]",
      wb = "[object Array]",
      Zb = "[object Object]",
      Xb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb, ub, hb, pb, ob, Ab) {
      var lb = Yb(bb),
        Kb = Yb(ub),
        Wb = lb ? wb : Lb(bb),
        Cb = Kb ? wb : Lb(ub),
        db = (Wb = Wb == Hb ? Zb : Wb) == Zb,
        rb = (Cb = Cb == Hb ? Zb : Cb) == Zb,
        jb = Wb == Cb;
      if (jb && Sb(bb)) {
        if (!Sb(ub)) return !1;
        lb = !0, db = !1
      }
      if (jb && !db) return Ab || (Ab = new Bb), lb || ab(bb) ? Ob(bb, ub, hb, pb, ob, Ab) : Gb(bb, ub, Wb, hb, pb, ob, Ab);
      if (!(1 & hb)) {
        var nb = db && Xb.call(bb, "__wrapped__"),
          Db = rb && Xb.call(ub, "__wrapped__");
        if (nb || Db) {
          var xb = nb ? bb.value() : bb,
            zb = Db ? ub.value() : ub;
          return Ab || (Ab = new Bb), ob(xb, zb, hb, pb, Ab)
        }
      }
      return !!jb && (Ab || (Ab = new Bb), Ub(bb, ub, hb, pb, ob, Ab))
    }
  },
  5303: (bb, ub, hb) => {
    var Bb = hb(5312),
      Ob = hb(5347);
    bb.exports = function(bb, ub, hb, Gb) {
      var Ub = hb.length,
        Lb = Ub,
        Yb = !Gb;
      if (null == bb) return !Lb;
      for (bb = Object(bb); Ub--;) {
        var Sb = hb[Ub];
        if (Yb && Sb[2] ? Sb[1] !== bb[Sb[0]] : !(Sb[0] in bb)) return !1
      }
      for (; ++Ub < Lb;) {
        var ab = (Sb = hb[Ub])[0],
          Hb = bb[ab],
          wb = Sb[1];
        if (Yb && Sb[2]) {
          if (void 0 === Hb && !(ab in bb)) return !1
        } else {
          var Zb = new Bb;
          if (Gb) var Xb = Gb(Hb, wb, ab, bb, ub, Zb);
          if (!(void 0 === Xb ? Ob(wb, Hb, 3, Gb, Zb) : Xb)) return !1
        }
      }
      return !0
    }
  },
  5750: bb => {
    bb.exports = function(bb) {
      return bb !== bb
    }
  },
  5016: (bb, ub, hb) => {
    var Bb = hb(5019),
      Ob = hb(5022),
      Gb = hb(4850),
      Ub = hb(5026),
      Lb = /^\[object .+?Constructor\]$/,
      Yb = Function.prototype,
      Sb = Object.prototype,
      ab = Yb.toString,
      Hb = Sb.hasOwnProperty,
      wb = RegExp("^" + ab.call(Hb).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    bb.exports = function(bb) {
      return !(!Gb(bb) || Ob(bb)) && (Bb(bb) ? wb : Lb).test(Ub(bb))
    }
  },
  5486: (bb, ub, hb) => {
    var Bb = hb(4893),
      Ob = hb(5238),
      Gb = hb(4913),
      Ub = {};
    Ub["[object Float32Array]"] = Ub["[object Float64Array]"] = Ub["[object Int8Array]"] = Ub["[object Int16Array]"] = Ub["[object Int32Array]"] = Ub["[object Uint8Array]"] = Ub["[object Uint8ClampedArray]"] = Ub["[object Uint16Array]"] = Ub["[object Uint32Array]"] = !0, Ub["[object Arguments]"] = Ub["[object Array]"] = Ub["[object ArrayBuffer]"] = Ub["[object Boolean]"] = Ub["[object DataView]"] = Ub["[object Date]"] = Ub["[object Error]"] = Ub["[object Function]"] = Ub["[object Map]"] = Ub["[object Number]"] = Ub["[object Object]"] = Ub["[object RegExp]"] = Ub["[object Set]"] = Ub["[object String]"] = Ub["[object WeakMap]"] = !1, bb.exports = function(bb) {
      return Gb(bb) && Ob(bb.length) && !!Ub[Bb(bb)]
    }
  },
  5298: (bb, ub, hb) => {
    var Bb = hb(5300),
      Ob = hb(5562),
      Gb = hb(5582),
      Ub = hb(4926),
      Lb = hb(5587);
    bb.exports = function(bb) {
      return "function" == typeof bb ? bb : null == bb ? Gb : "object" == typeof bb ? Ub(bb) ? Ob(bb[0], bb[1]) : Bb(bb) : Lb(bb)
    }
  },
  5505: (bb, ub, hb) => {
    var Bb = hb(5507),
      Ob = hb(5509),
      Gb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb) {
      if (!Bb(bb)) return Ob(bb);
      var ub = [];
      for (var hb in Object(bb)) Gb.call(bb, hb) && "constructor" != hb && ub.push(hb);
      return ub
    }
  },
  5914: bb => {
    bb.exports = function(bb, ub) {
      return bb < ub
    }
  },
  5608: (bb, ub, hb) => {
    var Bb = hb(5612),
      Ob = hb(5234);
    bb.exports = function(bb, ub) {
      var hb = -1,
        Gb = Ob(bb) ? Array(bb.length) : [];
      return Bb(bb, (function(bb, Bb, Ob) {
        Gb[++hb] = ub(bb, Bb, Ob)
      })), Gb
    }
  },
  5300: (bb, ub, hb) => {
    var Bb = hb(5303),
      Ob = hb(5545),
      Gb = hb(5560);
    bb.exports = function(bb) {
      var ub = Ob(bb);
      return 1 == ub.length && ub[0][2] ? Gb(ub[0][0], ub[0][1]) : function(hb) {
        return hb === bb || Bb(hb, bb, ub)
      }
    }
  },
  5562: (bb, ub, hb) => {
    var Bb = hb(5347),
      Ob = hb(4940),
      Gb = hb(5565),
      Ub = hb(4958),
      Lb = hb(5551),
      Yb = hb(5560),
      Sb = hb(5172);
    bb.exports = function(bb, ub) {
      return Ub(bb) && Lb(ub) ? Yb(Sb(bb), ub) : function(hb) {
        var Ub = Ob(hb, bb);
        return void 0 === Ub && Ub === ub ? Gb(hb, bb) : Bb(ub, Ub, 3)
      }
    }
  },
  5289: (bb, ub, hb) => {
    var Bb = hb(5165),
      Ob = hb(4949),
      Gb = hb(5298),
      Ub = hb(5608),
      Lb = hb(5639),
      Yb = hb(5495),
      Sb = hb(5643),
      ab = hb(5582),
      Hb = hb(4926);
    bb.exports = function(bb, ub, hb) {
      ub = ub.length ? Bb(ub, (function(bb) {
        return Hb(bb) ? function(ub) {
          return Ob(ub, 1 === bb.length ? bb[0] : bb)
        } : bb
      })) : [ab];
      var wb = -1;
      ub = Bb(ub, Yb(Gb));
      var Zb = Ub(bb, (function(bb, hb, Ob) {
        return {
          criteria: Bb(ub, (function(ub) {
            return ub(bb)
          })),
          index: ++wb,
          value: bb
        }
      }));
      return Lb(Zb, (function(bb, ub) {
        return Sb(bb, ub, hb)
      }))
    }
  },
  5596: bb => {
    bb.exports = function(bb) {
      return function(ub) {
        return null == ub ? void 0 : ub[bb]
      }
    }
  },
  5602: (bb, ub, hb) => {
    var Bb = hb(4949);
    bb.exports = function(bb) {
      return function(ub) {
        return Bb(ub, bb)
      }
    }
  },
  5225: bb => {
    var ub = Math.ceil,
      hb = Math.max;
    bb.exports = function(bb, Bb, Ob, Gb) {
      for (var Ub = -1, Lb = hb(ub((Bb - bb) / (Ob || 1)), 0), Yb = Array(Lb); Lb--;) Yb[Gb ? Lb : ++Ub] = bb, bb += Ob;
      return Yb
    }
  },
  5658: (bb, ub, hb) => {
    var Bb = hb(5582),
      Ob = hb(5661),
      Gb = hb(5667);
    bb.exports = function(bb, ub) {
      return Gb(Ob(bb, ub, Bb), bb + "")
    }
  },
  5676: (bb, ub, hb) => {
    var Bb = hb(5684),
      Ob = hb(5688),
      Gb = hb(5582),
      Ub = Ob ? function(bb, ub) {
        return Ob(bb, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Bb(ub),
          writable: !0
        })
      } : Gb;
    bb.exports = Ub
  },
  5807: bb => {
    bb.exports = function(bb, ub, hb) {
      var Bb = -1,
        Ob = bb.length;
      ub < 0 && (ub = -ub > Ob ? 0 : Ob + ub), (hb = hb > Ob ? Ob : hb) < 0 && (hb += Ob), Ob = ub > hb ? 0 : hb - ub >>> 0, ub >>>= 0;
      for (var Gb = Array(Ob); ++Bb < Ob;) Gb[Bb] = bb[Bb + ub];
      return Gb
    }
  },
  6061: (bb, ub, hb) => {
    var Bb = hb(5612);
    bb.exports = function(bb, ub) {
      var hb;
      return Bb(bb, (function(bb, Bb, Ob) {
        return !(hb = ub(bb, Bb, Ob))
      })), !!hb
    }
  },
  5639: bb => {
    bb.exports = function(bb, ub) {
      var hb = bb.length;
      for (bb.sort(ub); hb--;) bb[hb] = bb[hb].value;
      return bb
    }
  },
  5459: bb => {
    bb.exports = function(bb, ub) {
      for (var hb = -1, Bb = Array(bb); ++hb < bb;) Bb[hb] = ub(hb);
      return Bb
    }
  },
  5163: (bb, ub, hb) => {
    var Bb = hb(4901),
      Ob = hb(5165),
      Gb = hb(4926),
      Ub = hb(4890),
      Lb = Bb ? Bb.prototype : void 0,
      Yb = Lb ? Lb.toString : void 0;
    bb.exports = function bb(ub) {
      if ("string" == typeof ub) return ub;
      if (Gb(ub)) return Ob(ub, bb) + "";
      if (Ub(ub)) return Yb ? Yb.call(ub) : "";
      var hb = ub + "";
      return "0" == hb && 1 / ub == -1 / 0 ? "-0" : hb
    }
  },
  4878: (bb, ub, hb) => {
    var Bb = hb(4884),
      Ob = /^\s+/;
    bb.exports = function(bb) {
      return bb ? bb.slice(0, Bb(bb) + 1).replace(Ob, "") : bb
    }
  },
  5495: bb => {
    bb.exports = function(bb) {
      return function(ub) {
        return bb(ub)
      }
    }
  },
  5731: (bb, ub, hb) => {
    var Bb = hb(5368),
      Ob = hb(5734),
      Gb = hb(5758),
      Ub = hb(5388),
      Lb = hb(5767),
      Yb = hb(5413);
    bb.exports = function(bb, ub, hb) {
      var Sb = -1,
        ab = Ob,
        Hb = bb.length,
        wb = !0,
        Zb = [],
        Xb = Zb;
      if (hb) wb = !1, ab = Gb;
      else if (Hb >= 200) {
        var pb = ub ? null : Lb(bb);
        if (pb) return Yb(pb);
        wb = !1, ab = Ub, Xb = new Bb
      } else Xb = ub ? [] : Zb;
      bb: for (; ++Sb < Hb;) {
        var ob = bb[Sb],
          Ab = ub ? ub(ob) : ob;
        if (ob = hb || 0 !== ob ? ob : 0, wb && Ab === Ab) {
          for (var lb = Xb.length; lb--;)
            if (Xb[lb] === Ab) continue bb;
          ub && Xb.push(Ab), Zb.push(ob)
        } else ab(Xb, Ab, hb) || (Xb !== Zb && Xb.push(Ab), Zb.push(ob))
      }
      return Zb
    }
  },
  5388: bb => {
    bb.exports = function(bb, ub) {
      return bb.has(ub)
    }
  },
  4951: (bb, ub, hb) => {
    var Bb = hb(4926),
      Ob = hb(4958),
      Gb = hb(4964),
      Ub = hb(5155);
    bb.exports = function(bb, ub) {
      return Bb(bb) ? bb : Ob(bb, ub) ? [bb] : Gb(Ub(bb))
    }
  },
  5801: (bb, ub, hb) => {
    var Bb = hb(5807);
    bb.exports = function(bb, ub, hb) {
      var Ob = bb.length;
      return hb = void 0 === hb ? Ob : hb, !ub && hb >= Ob ? bb : Bb(bb, ub, hb)
    }
  },
  5651: (bb, ub, hb) => {
    var Bb = hb(4890);
    bb.exports = function(bb, ub) {
      if (bb !== ub) {
        var hb = void 0 !== bb,
          Ob = null === bb,
          Gb = bb === bb,
          Ub = Bb(bb),
          Lb = void 0 !== ub,
          Yb = null === ub,
          Sb = ub === ub,
          ab = Bb(ub);
        if (!Yb && !ab && !Ub && bb > ub || Ub && Lb && Sb && !Yb && !ab || Ob && Lb && Sb || !hb && Sb || !Gb) return 1;
        if (!Ob && !Ub && !ab && bb < ub || ab && hb && Gb && !Ob && !Ub || Yb && hb && Gb || !Lb && Gb || !Sb) return -1
      }
      return 0
    }
  },
  5643: (bb, ub, hb) => {
    var Bb = hb(5651);
    bb.exports = function(bb, ub, hb) {
      for (var Ob = -1, Gb = bb.criteria, Ub = ub.criteria, Lb = Gb.length, Yb = hb.length; ++Ob < Lb;) {
        var Sb = Bb(Gb[Ob], Ub[Ob]);
        if (Sb) return Ob >= Yb ? Sb : Sb * ("desc" == hb[Ob] ? -1 : 1)
      }
      return bb.index - ub.index
    }
  },
  5024: (bb, ub, hb) => {
    var Bb = hb(4861)["__core-js_shared__"];
    bb.exports = Bb
  },
  5637: (bb, ub, hb) => {
    var Bb = hb(5234);
    bb.exports = function(bb, ub) {
      return function(hb, Ob) {
        if (null == hb) return hb;
        if (!Bb(hb)) return bb(hb, Ob);
        for (var Gb = hb.length, Ub = ub ? Gb : -1, Lb = Object(hb);
          (ub ? Ub-- : ++Ub < Gb) && !1 !== Ob(Lb[Ub], Ub, Lb););
        return hb
      }
    }
  },
  5630: bb => {
    bb.exports = function(bb) {
      return function(ub, hb, Bb) {
        for (var Ob = -1, Gb = Object(ub), Ub = Bb(ub), Lb = Ub.length; Lb--;) {
          var Yb = Ub[bb ? Lb : ++Ob];
          if (!1 === hb(Gb[Yb], Yb, Gb)) break
        }
        return ub
      }
    }
  },
  5798: (bb, ub, hb) => {
    var Bb = hb(5801),
      Ob = hb(5813),
      Gb = hb(5815),
      Ub = hb(5155);
    bb.exports = function(bb) {
      return function(ub) {
        ub = Ub(ub);
        var hb = Ob(ub) ? Gb(ub) : void 0,
          Lb = hb ? hb[0] : ub.charAt(0),
          Yb = hb ? Bb(hb, 1).join("") : ub.slice(1);
        return Lb[bb]() + Yb
      }
    }
  },
  6074: (bb, ub, hb) => {
    var Bb = hb(5298),
      Ob = hb(5234),
      Gb = hb(5451);
    bb.exports = function(bb) {
      return function(ub, hb, Ub) {
        var Lb = Object(ub);
        if (!Ob(ub)) {
          var Yb = Bb(hb, 3);
          ub = Gb(ub), hb = function(bb) {
            return Yb(Lb[bb], bb, Lb)
          }
        }
        var Sb = bb(ub, hb, Ub);
        return Sb > -1 ? Lb[Yb ? ub[Sb] : Sb] : void 0
      }
    }
  },
  5222: (bb, ub, hb) => {
    var Bb = hb(5225),
      Ob = hb(5229),
      Gb = hb(5251);
    bb.exports = function(bb) {
      return function(ub, hb, Ub) {
        return Ub && "number" != typeof Ub && Ob(ub, hb, Ub) && (hb = Ub = void 0), ub = Gb(ub), void 0 === hb ? (hb = ub, ub = 0) : hb = Gb(hb), Ub = void 0 === Ub ? ub < hb ? 1 : -1 : Gb(Ub), Bb(ub, hb, Ub, bb)
      }
    }
  },
  5767: (bb, ub, hb) => {
    var Bb = hb(5539),
      Ob = hb(5772),
      Gb = hb(5413),
      Ub = Bb && 1 / Gb(new Bb([, -0]))[1] == 1 / 0 ? function(bb) {
        return new Bb(bb)
      } : Ob;
    bb.exports = Ub
  },
  5688: (bb, ub, hb) => {
    var Bb = hb(5012),
      Ob = function() {
        try {
          var bb = Bb(Object, "defineProperty");
          return bb({}, "", {}), bb
        } catch (ub) {}
      }();
    bb.exports = Ob
  },
  5365: (bb, ub, hb) => {
    var Bb = hb(5368),
      Ob = hb(5381),
      Gb = hb(5388);
    bb.exports = function(bb, ub, hb, Ub, Lb, Yb) {
      var Sb = 1 & hb,
        ab = bb.length,
        Hb = ub.length;
      if (ab != Hb && !(Sb && Hb > ab)) return !1;
      var wb = Yb.get(bb),
        Zb = Yb.get(ub);
      if (wb && Zb) return wb == ub && Zb == bb;
      var Xb = -1,
        pb = !0,
        ob = 2 & hb ? new Bb : void 0;
      for (Yb.set(bb, ub), Yb.set(ub, bb); ++Xb < ab;) {
        var Ab = bb[Xb],
          lb = ub[Xb];
        if (Ub) var Kb = Sb ? Ub(lb, Ab, Xb, ub, bb, Yb) : Ub(Ab, lb, Xb, bb, ub, Yb);
        if (void 0 !== Kb) {
          if (Kb) continue;
          pb = !1;
          break
        }
        if (ob) {
          if (!Ob(ub, (function(bb, ub) {
              if (!Gb(ob, ub) && (Ab === bb || Lb(Ab, bb, hb, Ub, Yb))) return ob.push(ub)
            }))) {
            pb = !1;
            break
          }
        } else if (Ab !== lb && !Lb(Ab, lb, hb, Ub, Yb)) {
          pb = !1;
          break
        }
      }
      return Yb.delete(bb), Yb.delete(ub), pb
    }
  },
  5391: (bb, ub, hb) => {
    var Bb = hb(4901),
      Ob = hb(5399),
      Gb = hb(5086),
      Ub = hb(5365),
      Lb = hb(5405),
      Yb = hb(5413),
      Sb = Bb ? Bb.prototype : void 0,
      ab = Sb ? Sb.valueOf : void 0;
    bb.exports = function(bb, ub, hb, Bb, Sb, Hb, wb) {
      switch (hb) {
        case "[object DataView]":
          if (bb.byteLength != ub.byteLength || bb.byteOffset != ub.byteOffset) return !1;
          bb = bb.buffer, ub = ub.buffer;
        case "[object ArrayBuffer]":
          return !(bb.byteLength != ub.byteLength || !Hb(new Ob(bb), new Ob(ub)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return Gb(+bb, +ub);
        case "[object Error]":
          return bb.name == ub.name && bb.message == ub.message;
        case "[object RegExp]":
        case "[object String]":
          return bb == ub + "";
        case "[object Map]":
          var Zb = Lb;
        case "[object Set]":
          var Xb = 1 & Bb;
          if (Zb || (Zb = Yb), bb.size != ub.size && !Xb) return !1;
          var pb = wb.get(bb);
          if (pb) return pb == ub;
          Bb |= 2, wb.set(bb, ub);
          var ob = Ub(Zb(bb), Zb(ub), Bb, Sb, Hb, wb);
          return wb.delete(bb), ob;
        case "[object Symbol]":
          if (ab) return ab.call(bb) == ab.call(ub)
      }
      return !1
    }
  },
  5418: (bb, ub, hb) => {
    var Bb = hb(5425),
      Ob = Object.prototype.hasOwnProperty;
    bb.exports = function(bb, ub, hb, Gb, Ub, Lb) {
      var Yb = 1 & hb,
        Sb = Bb(bb),
        ab = Sb.length;
      if (ab != Bb(ub).length && !Yb) return !1;
      for (var Hb = ab; Hb--;) {
        var wb = Sb[Hb];
        if (!(Yb ? wb in ub : Ob.call(ub, wb))) return !1
      }
      var Zb = Lb.get(bb),
        Xb = Lb.get(ub);
      if (Zb && Xb) return Zb == ub && Xb == bb;
      var pb = !0;
      Lb.set(bb, ub), Lb.set(ub, bb);
      for (var ob = Yb; ++Hb < ab;) {
        var Ab = bb[wb = Sb[Hb]],
          lb = ub[wb];
        if (Gb) var Kb = Yb ? Gb(lb, Ab, wb, ub, bb, Lb) : Gb(Ab, lb, wb, bb, ub, Lb);
        if (!(void 0 === Kb ? Ab === lb || Ub(Ab, lb, hb, Gb, Lb) : Kb)) {
          pb = !1;
          break
        }
        ob || (ob = "constructor" == wb)
      }
      if (pb && !ob) {
        var Wb = bb.constructor,
          Cb = ub.constructor;
        Wb == Cb || !("constructor" in bb) || !("constructor" in ub) || "function" == typeof Wb && Wb instanceof Wb && "function" == typeof Cb && Cb instanceof Cb || (pb = !1)
      }
      return Lb.delete(bb), Lb.delete(ub), pb
    }
  },
  4870: (bb, ub, hb) => {
    var Bb = "object" == typeof hb.g && hb.g && hb.g.Object === Object && hb.g;
    bb.exports = Bb
  },
  5425: (bb, ub, hb) => {
    var Bb = hb(5430),
      Ob = hb(5433),
      Gb = hb(5451);
    bb.exports = function(bb) {
      return Bb(bb, Gb, Ob)
    }
  },
  5128: (bb, ub, hb) => {
    var Bb = hb(5132);
    bb.exports = function(bb, ub) {
      var hb = bb.__data__;
      return Bb(ub) ? hb["string" == typeof ub ? "string" : "hash"] : hb.map
    }
  },
  5545: (bb, ub, hb) => {
    var Bb = hb(5551),
      Ob = hb(5451);
    bb.exports = function(bb) {
      for (var ub = Ob(bb), hb = ub.length; hb--;) {
        var Gb = ub[hb],
          Ub = bb[Gb];
        ub[hb] = [Gb, Ub, Bb(Ub)]
      }
      return ub
    }
  },
  5012: (bb, ub, hb) => {
    var Bb = hb(5016),
      Ob = hb(5030);
    bb.exports = function(bb, ub) {
      var hb = Ob(bb, ub);
      return Bb(hb) ? hb : void 0
    }
  },
  6035: (bb, ub, hb) => {
    var Bb = hb(5518)(Object.getPrototypeOf, Object);
    bb.exports = Bb
  },
  4905: (bb, ub, hb) => {
    var Bb = hb(4901),
      Ob = Object.prototype,
      Gb = Ob.hasOwnProperty,
      Ub = Ob.toString,
      Lb = Bb ? Bb.toStringTag : void 0;
    bb.exports = function(bb) {
      var ub = Gb.call(bb, Lb),
        hb = bb[Lb];
      try {
        bb[Lb] = void 0;
        var Bb = !0
      } catch (Yb) {}
      var Ob = Ub.call(bb);
      return Bb && (ub ? bb[Lb] = hb : delete bb[Lb]), Ob
    }
  },
  5433: (bb, ub, hb) => {
    var Bb = hb(5438),
      Ob = hb(5443),
      Gb = Object.prototype.propertyIsEnumerable,
      Ub = Object.getOwnPropertySymbols,
      Lb = Ub ? function(bb) {
        return null == bb ? [] : (bb = Object(bb), Bb(Ub(bb), (function(ub) {
          return Gb.call(bb, ub)
        })))
      } : Ob;
    bb.exports = Lb
  },
  5521: (bb, ub, hb) => {
    var Bb = hb(5523),
      Ob = hb(5116),
      Gb = hb(5532),
      Ub = hb(5539),
      Lb = hb(5542),
      Yb = hb(4893),
      Sb = hb(5026),
      ab = "[object Map]",
      Hb = "[object Promise]",
      wb = "[object Set]",
      Zb = "[object WeakMap]",
      Xb = "[object DataView]",
      pb = Sb(Bb),
      ob = Sb(Ob),
      Ab = Sb(Gb),
      lb = Sb(Ub),
      Kb = Sb(Lb),
      Wb = Yb;
    (Bb && Wb(new Bb(new ArrayBuffer(1))) != Xb || Ob && Wb(new Ob) != ab || Gb && Wb(Gb.resolve()) != Hb || Ub && Wb(new Ub) != wb || Lb && Wb(new Lb) != Zb) && (Wb = function(bb) {
      var ub = Yb(bb),
        hb = "[object Object]" == ub ? bb.constructor : void 0,
        Bb = hb ? Sb(hb) : "";
      if (Bb) switch (Bb) {
        case pb:
          return Xb;
        case ob:
          return ab;
        case Ab:
          return Hb;
        case lb:
          return wb;
        case Kb:
          return Zb
      }
      return ub
    }), bb.exports = Wb
  },
  5030: bb => {
    bb.exports = function(bb, ub) {
      return null == bb ? void 0 : bb[ub]
    }
  },
  5579: (bb, ub, hb) => {
    var Bb = hb(4951),
      Ob = hb(5277),
      Gb = hb(4926),
      Ub = hb(5245),
      Lb = hb(5238),
      Yb = hb(5172);
    bb.exports = function(bb, ub, hb) {
      for (var Sb = -1, ab = (ub = Bb(ub, bb)).length, Hb = !1; ++Sb < ab;) {
        var wb = Yb(ub[Sb]);
        if (!(Hb = null != bb && hb(bb, wb))) break;
        bb = bb[wb]
      }
      return Hb || ++Sb != ab ? Hb : !!(ab = null == bb ? 0 : bb.length) && Lb(ab) && Ub(wb, ab) && (Gb(bb) || Ob(bb))
    }
  },
  5813: bb => {
    var ub = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    bb.exports = function(bb) {
      return ub.test(bb)
    }
  },
  4998: (bb, ub, hb) => {
    var Bb = hb(5004);
    bb.exports = function() {
      this.__data__ = Bb ? Bb(null) : {}, this.size = 0
    }
  },
  5038: bb => {
    bb.exports = function(bb) {
      var ub = this.has(bb) && delete this.__data__[bb];
      return this.size -= ub ? 1 : 0, ub
    }
  },
  5047: (bb, ub, hb) => {
    var Bb = hb(5004),
      Ob = Object.prototype.hasOwnProperty;
    bb.exports = function(bb) {
      var ub = this.__data__;
      if (Bb) {
        var hb = ub[bb];
        return "__lodash_hash_undefined__" === hb ? void 0 : hb
      }
      return Ob.call(ub, bb) ? ub[bb] : void 0
    }
  },
  5055: (bb, ub, hb) => {
    var Bb = hb(5004),
      Ob = Object.prototype.hasOwnProperty;
    bb.exports = function(bb) {
      var ub = this.__data__;
      return Bb ? void 0 !== ub[bb] : Ob.call(ub, bb)
    }
  },
  5061: (bb, ub, hb) => {
    var Bb = hb(5004);
    bb.exports = function(bb, ub) {
      var hb = this.__data__;
      return this.size += this.has(bb) ? 0 : 1, hb[bb] = Bb && void 0 === ub ? "__lodash_hash_undefined__" : ub, this
    }
  },
  5271: (bb, ub, hb) => {
    var Bb = hb(4901),
      Ob = hb(5277),
      Gb = hb(4926),
      Ub = Bb ? Bb.isConcatSpreadable : void 0;
    bb.exports = function(bb) {
      return Gb(bb) || Ob(bb) || !!(Ub && bb && bb[Ub])
    }
  },
  5245: bb => {
    var ub = /^(?:0|[1-9]\d*)$/;
    bb.exports = function(bb, hb) {
      var Bb = typeof bb;
      return !!(hb = null == hb ? 9007199254740991 : hb) && ("number" == Bb || "symbol" != Bb && ub.test(bb)) && bb > -1 && bb % 1 == 0 && bb < hb
    }
  },
  5229: (bb, ub, hb) => {
    var Bb = hb(5086),
      Ob = hb(5234),
      Gb = hb(5245),
      Ub = hb(4850);
    bb.exports = function(bb, ub, hb) {
      if (!Ub(hb)) return !1;
      var Lb = typeof ub;
      return !!("number" == Lb ? Ob(hb) && Gb(ub, hb.length) : "string" == Lb && ub in hb) && Bb(hb[ub], bb)
    }
  },
  4958: (bb, ub, hb) => {
    var Bb = hb(4926),
      Ob = hb(4890),
      Gb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Ub = /^\w*$/;
    bb.exports = function(bb, ub) {
      if (Bb(bb)) return !1;
      var hb = typeof bb;
      return !("number" != hb && "symbol" != hb && "boolean" != hb && null != bb && !Ob(bb)) || (Ub.test(bb) || !Gb.test(bb) || null != ub && bb in Object(ub))
    }
  },
  5132: bb => {
    bb.exports = function(bb) {
      var ub = typeof bb;
      return "string" == ub || "number" == ub || "symbol" == ub || "boolean" == ub ? "__proto__" !== bb : null === bb
    }
  },
  5022: (bb, ub, hb) => {
    var Bb = hb(5024),
      Ob = function() {
        var bb = /[^.]+$/.exec(Bb && Bb.keys && Bb.keys.IE_PROTO || "");
        return bb ? "Symbol(src)_1." + bb : ""
      }();
    bb.exports = function(bb) {
      return !!Ob && Ob in bb
    }
  },
  5507: bb => {
    var ub = Object.prototype;
    bb.exports = function(bb) {
      var hb = bb && bb.constructor;
      return bb === ("function" == typeof hb && hb.prototype || ub)
    }
  },
  5551: (bb, ub, hb) => {
    var Bb = hb(4850);
    bb.exports = function(bb) {
      return bb === bb && !Bb(bb)
    }
  },
  5071: bb => {
    bb.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5073: (bb, ub, hb) => {
    var Bb = hb(5082),
      Ob = Array.prototype.splice;
    bb.exports = function(bb) {
      var ub = this.__data__,
        hb = Bb(ub, bb);
      return !(hb < 0) && (hb == ub.length - 1 ? ub.pop() : Ob.call(ub, hb, 1), --this.size, !0)
    }
  },
  5094: (bb, ub, hb) => {
    var Bb = hb(5082);
    bb.exports = function(bb) {
      var ub = this.__data__,
        hb = Bb(ub, bb);
      return hb < 0 ? void 0 : ub[hb][1]
    }
  },
  5101: (bb, ub, hb) => {
    var Bb = hb(5082);
    bb.exports = function(bb) {
      return Bb(this.__data__, bb) > -1
    }
  },
  5107: (bb, ub, hb) => {
    var Bb = hb(5082);
    bb.exports = function(bb, ub) {
      var hb = this.__data__,
        Ob = Bb(hb, bb);
      return Ob < 0 ? (++this.size, hb.push([bb, ub])) : hb[Ob][1] = ub, this
    }
  },
  4986: (bb, ub, hb) => {
    var Bb = hb(4992),
      Ob = hb(5065),
      Gb = hb(5116);
    bb.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new Bb,
        map: new(Gb || Ob),
        string: new Bb
      }
    }
  },
  5125: (bb, ub, hb) => {
    var Bb = hb(5128);
    bb.exports = function(bb) {
      var ub = Bb(this, bb).delete(bb);
      return this.size -= ub ? 1 : 0, ub
    }
  },
  5134: (bb, ub, hb) => {
    var Bb = hb(5128);
    bb.exports = function(bb) {
      return Bb(this, bb).get(bb)
    }
  },
  5141: (bb, ub, hb) => {
    var Bb = hb(5128);
    bb.exports = function(bb) {
      return Bb(this, bb).has(bb)
    }
  },
  5146: (bb, ub, hb) => {
    var Bb = hb(5128);
    bb.exports = function(bb, ub) {
      var hb = Bb(this, bb),
        Ob = hb.size;
      return hb.set(bb, ub), this.size += hb.size == Ob ? 0 : 1, this
    }
  },
  5405: bb => {
    bb.exports = function(bb) {
      var ub = -1,
        hb = Array(bb.size);
      return bb.forEach((function(bb, Bb) {
        hb[++ub] = [Bb, bb]
      })), hb
    }
  },
  5560: bb => {
    bb.exports = function(bb, ub) {
      return function(hb) {
        return null != hb && (hb[bb] === ub && (void 0 !== ub || bb in Object(hb)))
      }
    }
  },
  4970: (bb, ub, hb) => {
    var Bb = hb(4974);
    bb.exports = function(bb) {
      var ub = Bb(bb, (function(bb) {
          return 500 === hb.size && hb.clear(), bb
        })),
        hb = ub.cache;
      return ub
    }
  },
  5004: (bb, ub, hb) => {
    var Bb = hb(5012)(Object, "create");
    bb.exports = Bb
  },
  5509: (bb, ub, hb) => {
    var Bb = hb(5518)(Object.keys, Object);
    bb.exports = Bb
  },
  5497: (bb, ub, hb) => {
    bb = hb.nmd(bb);
    var Bb = hb(4870),
      Ob = ub && !ub.nodeType && ub,
      Gb = Ob && bb && !bb.nodeType && bb,
      Ub = Gb && Gb.exports === Ob && Bb.process,
      Lb = function() {
        try {
          var bb = Gb && Gb.require && Gb.require("util").types;
          return bb || Ub && Ub.binding && Ub.binding("util")
        } catch (ub) {}
      }();
    bb.exports = Lb
  },
  4908: bb => {
    var ub = Object.prototype.toString;
    bb.exports = function(bb) {
      return ub.call(bb)
    }
  },
  5518: bb => {
    bb.exports = function(bb, ub) {
      return function(hb) {
        return bb(ub(hb))
      }
    }
  },
  5661: (bb, ub, hb) => {
    var Bb = hb(5665),
      Ob = Math.max;
    bb.exports = function(bb, ub, hb) {
      return ub = Ob(void 0 === ub ? bb.length - 1 : ub, 0),
        function() {
          for (var Gb = arguments, Ub = -1, Lb = Ob(Gb.length - ub, 0), Yb = Array(Lb); ++Ub < Lb;) Yb[Ub] = Gb[ub + Ub];
          Ub = -1;
          for (var Sb = Array(ub + 1); ++Ub < ub;) Sb[Ub] = Gb[Ub];
          return Sb[ub] = hb(Yb), Bb(bb, this, Sb)
        }
    }
  },
  4861: (bb, ub, hb) => {
    var Bb = hb(4870),
      Ob = "object" == typeof self && self && self.Object === Object && self,
      Gb = Bb || Ob || Function("return this")();
    bb.exports = Gb
  },
  5373: bb => {
    bb.exports = function(bb) {
      return this.__data__.set(bb, "__lodash_hash_undefined__"), this
    }
  },
  5375: bb => {
    bb.exports = function(bb) {
      return this.__data__.has(bb)
    }
  },
  5413: bb => {
    bb.exports = function(bb) {
      var ub = -1,
        hb = Array(bb.size);
      return bb.forEach((function(bb) {
        hb[++ub] = bb
      })), hb
    }
  },
  5667: (bb, ub, hb) => {
    var Bb = hb(5676),
      Ob = hb(5695)(Bb);
    bb.exports = Ob
  },
  5695: bb => {
    var ub = Date.now;
    bb.exports = function(bb) {
      var hb = 0,
        Bb = 0;
      return function() {
        var Ob = ub(),
          Gb = 16 - (Ob - Bb);
        if (Bb = Ob, Gb > 0) {
          if (++hb >= 800) return arguments[0]
        } else hb = 0;
        return bb.apply(void 0, arguments)
      }
    }
  },
  5318: (bb, ub, hb) => {
    var Bb = hb(5065);
    bb.exports = function() {
      this.__data__ = new Bb, this.size = 0
    }
  },
  5323: bb => {
    bb.exports = function(bb) {
      var ub = this.__data__,
        hb = ub.delete(bb);
      return this.size = ub.size, hb
    }
  },
  5330: bb => {
    bb.exports = function(bb) {
      return this.__data__.get(bb)
    }
  },
  5338: bb => {
    bb.exports = function(bb) {
      return this.__data__.has(bb)
    }
  },
  5344: (bb, ub, hb) => {
    var Bb = hb(5065),
      Ob = hb(5116),
      Gb = hb(4982);
    bb.exports = function(bb, ub) {
      var hb = this.__data__;
      if (hb instanceof Bb) {
        var Ub = hb.__data__;
        if (!Ob || Ub.length < 199) return Ub.push([bb, ub]), this.size = ++hb.size, this;
        hb = this.__data__ = new Gb(Ub)
      }
      return hb.set(bb, ub), this.size = hb.size, this
    }
  },
  5753: bb => {
    bb.exports = function(bb, ub, hb) {
      for (var Bb = hb - 1, Ob = bb.length; ++Bb < Ob;)
        if (bb[Bb] === ub) return Bb;
      return -1
    }
  },
  5815: (bb, ub, hb) => {
    var Bb = hb(5824),
      Ob = hb(5813),
      Gb = hb(5827);
    bb.exports = function(bb) {
      return Ob(bb) ? Gb(bb) : Bb(bb)
    }
  },
  4964: (bb, ub, hb) => {
    var Bb = hb(4970),
      Ob = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Gb = /\\(\\)?/g,
      Ub = Bb((function(bb) {
        var ub = [];
        return 46 === bb.charCodeAt(0) && ub.push(""), bb.replace(Ob, (function(bb, hb, Bb, Ob) {
          ub.push(Bb ? Ob.replace(Gb, "$1") : hb || bb)
        })), ub
      }));
    bb.exports = Ub
  },
  5172: (bb, ub, hb) => {
    var Bb = hb(4890);
    bb.exports = function(bb) {
      if ("string" == typeof bb || Bb(bb)) return bb;
      var ub = bb + "";
      return "0" == ub && 1 / bb == -1 / 0 ? "-0" : ub
    }
  },
  5026: bb => {
    var ub = Function.prototype.toString;
    bb.exports = function(bb) {
      if (null != bb) {
        try {
          return ub.call(bb)
        } catch (hb) {}
        try {
          return bb + ""
        } catch (hb) {}
      }
      return ""
    }
  },
  4884: bb => {
    var ub = /\s/;
    bb.exports = function(bb) {
      for (var hb = bb.length; hb-- && ub.test(bb.charAt(hb)););
      return hb
    }
  },
  5827: bb => {
    var ub = "\\ud800-\\udfff",
      hb = "[" + ub + "]",
      Bb = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      Ob = "\\ud83c[\\udffb-\\udfff]",
      Gb = "[^" + ub + "]",
      Ub = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Lb = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Yb = "(?:" + Bb + "|" + Ob + ")" + "?",
      Sb = "[\\ufe0e\\ufe0f]?",
      ab = Sb + Yb + ("(?:\\u200d(?:" + [Gb, Ub, Lb].join("|") + ")" + Sb + Yb + ")*"),
      Hb = "(?:" + [Gb + Bb + "?", Bb, Ub, Lb, hb].join("|") + ")",
      wb = RegExp(Ob + "(?=" + Ob + ")|" + Hb + ab, "g");
    bb.exports = function(bb) {
      return bb.match(wb) || []
    }
  },
  5684: bb => {
    bb.exports = function(bb) {
      return function() {
        return bb
      }
    }
  },
  4845: (bb, ub, hb) => {
    var Bb = hb(4850),
      Ob = hb(4857),
      Gb = hb(4876),
      Ub = Math.max,
      Lb = Math.min;
    bb.exports = function(bb, ub, hb) {
      var Yb, Sb, ab, Hb, wb, Zb, Xb = 0,
        pb = !1,
        ob = !1,
        Ab = !0;
      if ("function" != typeof bb) throw new TypeError("Expected a function");

      function lb(ub) {
        var hb = Yb,
          Bb = Sb;
        return Yb = Sb = void 0, Xb = ub, Hb = bb.apply(Bb, hb)
      }

      function Kb(bb) {
        var hb = bb - Zb;
        return void 0 === Zb || hb >= ub || hb < 0 || ob && bb - Xb >= ab
      }

      function Wb() {
        var bb = Ob();
        if (Kb(bb)) return Cb(bb);
        wb = setTimeout(Wb, function(bb) {
          var hb = ub - (bb - Zb);
          return ob ? Lb(hb, ab - (bb - Xb)) : hb
        }(bb))
      }

      function Cb(bb) {
        return wb = void 0, Ab && Yb ? lb(bb) : (Yb = Sb = void 0, Hb)
      }

      function db() {
        var bb = Ob(),
          hb = Kb(bb);
        if (Yb = arguments, Sb = this, Zb = bb, hb) {
          if (void 0 === wb) return function(bb) {
            return Xb = bb, wb = setTimeout(Wb, ub), pb ? lb(bb) : Hb
          }(Zb);
          if (ob) return clearTimeout(wb), wb = setTimeout(Wb, ub), lb(Zb)
        }
        return void 0 === wb && (wb = setTimeout(Wb, ub)), Hb
      }
      return ub = Gb(ub) || 0, Bb(hb) && (pb = !!hb.leading, ab = (ob = "maxWait" in hb) ? Ub(Gb(hb.maxWait) || 0, ub) : ab, Ab = "trailing" in hb ? !!hb.trailing : Ab), db.cancel = function() {
        void 0 !== wb && clearTimeout(wb), Xb = 0, Yb = Zb = Sb = wb = void 0
      }, db.flush = function() {
        return void 0 === wb ? Hb : Cb(Ob())
      }, db
    }
  },
  5086: bb => {
    bb.exports = function(bb, ub) {
      return bb === ub || bb !== bb && ub !== ub
    }
  },
  5988: (bb, ub, hb) => {
    var Bb = hb(5992),
      Ob = hb(5999),
      Gb = hb(5298),
      Ub = hb(4926),
      Lb = hb(5229);
    bb.exports = function(bb, ub, hb) {
      var Yb = Ub(bb) ? Bb : Ob;
      return hb && Lb(bb, ub, hb) && (ub = void 0), Yb(bb, Gb(ub, 3))
    }
  },
  6071: (bb, ub, hb) => {
    var Bb = hb(6074)(hb(6078));
    bb.exports = Bb
  },
  6078: (bb, ub, hb) => {
    var Bb = hb(5746),
      Ob = hb(5298),
      Gb = hb(6086),
      Ub = Math.max;
    bb.exports = function(bb, ub, hb) {
      var Lb = null == bb ? 0 : bb.length;
      if (!Lb) return -1;
      var Yb = null == hb ? 0 : Gb(hb);
      return Yb < 0 && (Yb = Ub(Lb + Yb, 0)), Bb(bb, Ob(ub, 3), Yb)
    }
  },
  5917: (bb, ub, hb) => {
    var Bb = hb(5259),
      Ob = hb(5920);
    bb.exports = function(bb, ub) {
      return Bb(Ob(bb, ub), 1)
    }
  },
  4940: (bb, ub, hb) => {
    var Bb = hb(4949);
    bb.exports = function(bb, ub, hb) {
      var Ob = null == bb ? void 0 : Bb(bb, ub);
      return void 0 === Ob ? hb : Ob
    }
  },
  5565: (bb, ub, hb) => {
    var Bb = hb(5573),
      Ob = hb(5579);
    bb.exports = function(bb, ub) {
      return null != bb && Ob(bb, ub, Bb)
    }
  },
  5582: bb => {
    bb.exports = function(bb) {
      return bb
    }
  },
  5277: (bb, ub, hb) => {
    var Bb = hb(5283),
      Ob = hb(4913),
      Gb = Object.prototype,
      Ub = Gb.hasOwnProperty,
      Lb = Gb.propertyIsEnumerable,
      Yb = Bb(function() {
        return arguments
      }()) ? Bb : function(bb) {
        return Ob(bb) && Ub.call(bb, "callee") && !Lb.call(bb, "callee")
      };
    bb.exports = Yb
  },
  4926: bb => {
    var ub = Array.isArray;
    bb.exports = ub
  },
  5234: (bb, ub, hb) => {
    var Bb = hb(5019),
      Ob = hb(5238);
    bb.exports = function(bb) {
      return null != bb && Ob(bb.length) && !Bb(bb)
    }
  },
  6039: (bb, ub, hb) => {
    var Bb = hb(4893),
      Ob = hb(4913);
    bb.exports = function(bb) {
      return !0 === bb || !1 === bb || Ob(bb) && "[object Boolean]" == Bb(bb)
    }
  },
  5468: (bb, ub, hb) => {
    bb = hb.nmd(bb);
    var Bb = hb(4861),
      Ob = hb(5476),
      Gb = ub && !ub.nodeType && ub,
      Ub = Gb && bb && !bb.nodeType && bb,
      Lb = Ub && Ub.exports === Gb ? Bb.VZ : void 0,
      Yb = (Lb ? Lb.isBuffer : void 0) || Ob;
    bb.exports = Yb
  },
  5923: (bb, ub, hb) => {
    var Bb = hb(5347);
    bb.exports = function(bb, ub) {
      return Bb(bb, ub)
    }
  },
  5019: (bb, ub, hb) => {
    var Bb = hb(4893),
      Ob = hb(4850);
    bb.exports = function(bb) {
      if (!Ob(bb)) return !1;
      var ub = Bb(bb);
      return "[object Function]" == ub || "[object GeneratorFunction]" == ub || "[object AsyncFunction]" == ub || "[object Proxy]" == ub
    }
  },
  5238: bb => {
    bb.exports = function(bb) {
      return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= 9007199254740991
    }
  },
  4930: (bb, ub, hb) => {
    var Bb = hb(4936);
    bb.exports = function(bb) {
      return Bb(bb) && bb != +bb
    }
  },
  5175: bb => {
    bb.exports = function(bb) {
      return null == bb
    }
  },
  4936: (bb, ub, hb) => {
    var Bb = hb(4893),
      Ob = hb(4913);
    bb.exports = function(bb) {
      return "number" == typeof bb || Ob(bb) && "[object Number]" == Bb(bb)
    }
  },
  4850: bb => {
    bb.exports = function(bb) {
      var ub = typeof bb;
      return null != bb && ("object" == ub || "function" == ub)
    }
  },
  4913: bb => {
    bb.exports = function(bb) {
      return null != bb && "object" == typeof bb
    }
  },
  6029: (bb, ub, hb) => {
    var Bb = hb(4893),
      Ob = hb(6035),
      Gb = hb(4913),
      Ub = Function.prototype,
      Lb = Object.prototype,
      Yb = Ub.toString,
      Sb = Lb.hasOwnProperty,
      ab = Yb.call(Object);
    bb.exports = function(bb) {
      if (!Gb(bb) || "[object Object]" != Bb(bb)) return !1;
      var ub = Ob(bb);
      if (null === ub) return !0;
      var hb = Sb.call(ub, "constructor") && ub.constructor;
      return "function" == typeof hb && hb instanceof hb && Yb.call(hb) == ab
    }
  },
  4921: (bb, ub, hb) => {
    var Bb = hb(4893),
      Ob = hb(4926),
      Gb = hb(4913);
    bb.exports = function(bb) {
      return "string" == typeof bb || !Ob(bb) && Gb(bb) && "[object String]" == Bb(bb)
    }
  },
  4890: (bb, ub, hb) => {
    var Bb = hb(4893),
      Ob = hb(4913);
    bb.exports = function(bb) {
      return "symbol" == typeof bb || Ob(bb) && "[object Symbol]" == Bb(bb)
    }
  },
  5484: (bb, ub, hb) => {
    var Bb = hb(5486),
      Ob = hb(5495),
      Gb = hb(5497),
      Ub = Gb && Gb.isTypedArray,
      Lb = Ub ? Ob(Ub) : Bb;
    bb.exports = Lb
  },
  5451: (bb, ub, hb) => {
    var Bb = hb(5453),
      Ob = hb(5505),
      Gb = hb(5234);
    bb.exports = function(bb) {
      return Gb(bb) ? Bb(bb) : Ob(bb)
    }
  },
  6019: bb => {
    bb.exports = function(bb) {
      var ub = null == bb ? 0 : bb.length;
      return ub ? bb[ub - 1] : void 0
    }
  },
  5920: (bb, ub, hb) => {
    var Bb = hb(5165),
      Ob = hb(5298),
      Gb = hb(5608),
      Ub = hb(4926);
    bb.exports = function(bb, ub) {
      return (Ub(bb) ? Bb : Gb)(bb, Ob(ub, 3))
    }
  },
  5981: (bb, ub, hb) => {
    var Bb = hb(5983),
      Ob = hb(5621),
      Gb = hb(5298);
    bb.exports = function(bb, ub) {
      var hb = {};
      return ub = Gb(ub, 3), Ob(bb, (function(bb, Ob, Gb) {
        Bb(hb, Ob, ub(bb, Ob, Gb))
      })), hb
    }
  },
  5894: (bb, ub, hb) => {
    var Bb = hb(5898),
      Ob = hb(5903),
      Gb = hb(5582);
    bb.exports = function(bb) {
      return bb && bb.length ? Bb(bb, Gb, Ob) : void 0
    }
  },
  4974: (bb, ub, hb) => {
    var Bb = hb(4982);

    function Ob(bb, ub) {
      if ("function" != typeof bb || null != ub && "function" != typeof ub) throw new TypeError("Expected a function");
      var hb = function() {
        var Bb = arguments,
          Ob = ub ? ub.apply(this, Bb) : Bb[0],
          Gb = hb.cache;
        if (Gb.has(Ob)) return Gb.get(Ob);
        var Ub = bb.apply(this, Bb);
        return hb.cache = Gb.set(Ob, Ub) || Gb, Ub
      };
      return hb.cache = new(Ob.Cache || Bb), hb
    }
    Ob.Cache = Bb, bb.exports = Ob
  },
  5912: (bb, ub, hb) => {
    var Bb = hb(5898),
      Ob = hb(5914),
      Gb = hb(5582);
    bb.exports = function(bb) {
      return bb && bb.length ? Bb(bb, Gb, Ob) : void 0
    }
  },
  5772: bb => {
    bb.exports = function() {}
  },
  4857: (bb, ub, hb) => {
    var Bb = hb(4861);
    bb.exports = function() {
      return Bb.Date.now()
    }
  },
  5587: (bb, ub, hb) => {
    var Bb = hb(5596),
      Ob = hb(5602),
      Gb = hb(4958),
      Ub = hb(5172);
    bb.exports = function(bb) {
      return Gb(bb) ? Bb(Ub(bb)) : Ob(bb)
    }
  },
  5219: (bb, ub, hb) => {
    var Bb = hb(5222)();
    bb.exports = Bb
  },
  6055: (bb, ub, hb) => {
    var Bb = hb(5381),
      Ob = hb(5298),
      Gb = hb(6061),
      Ub = hb(4926),
      Lb = hb(5229);
    bb.exports = function(bb, ub, hb) {
      var Yb = Ub(bb) ? Bb : Gb;
      return hb && Lb(bb, ub, hb) && (ub = void 0), Yb(bb, Ob(ub, 3))
    }
  },
  5253: (bb, ub, hb) => {
    var Bb = hb(5259),
      Ob = hb(5289),
      Gb = hb(5658),
      Ub = hb(5229),
      Lb = Gb((function(bb, ub) {
        if (null == bb) return [];
        var hb = ub.length;
        return hb > 1 && Ub(bb, ub[0], ub[1]) ? ub = [] : hb > 2 && Ub(ub[0], ub[1], ub[2]) && (ub = [ub[0]]), Ob(bb, Bb(ub, 1), [])
      }));
    bb.exports = Lb
  },
  5443: bb => {
    bb.exports = function() {
      return []
    }
  },
  5476: bb => {
    bb.exports = function() {
      return !1
    }
  },
  4840: (bb, ub, hb) => {
    var Bb = hb(4845),
      Ob = hb(4850);
    bb.exports = function(bb, ub, hb) {
      var Gb = !0,
        Ub = !0;
      if ("function" != typeof bb) throw new TypeError("Expected a function");
      return Ob(hb) && (Gb = "leading" in hb ? !!hb.leading : Gb, Ub = "trailing" in hb ? !!hb.trailing : Ub), Bb(bb, ub, {
        leading: Gb,
        maxWait: ub,
        trailing: Ub
      })
    }
  },
  5251: (bb, ub, hb) => {
    var Bb = hb(4876),
      Ob = 1 / 0;
    bb.exports = function(bb) {
      return bb ? (bb = Bb(bb)) === Ob || bb === -1 / 0 ? 17976931348623157e292 * (bb < 0 ? -1 : 1) : bb === bb ? bb : 0 : 0 === bb ? bb : 0
    }
  },
  6086: (bb, ub, hb) => {
    var Bb = hb(5251);
    bb.exports = function(bb) {
      var ub = Bb(bb),
        hb = ub % 1;
      return ub === ub ? hb ? ub - hb : ub : 0
    }
  },
  4876: (bb, ub, hb) => {
    var Bb = hb(4878),
      Ob = hb(4850),
      Gb = hb(4890),
      Ub = /^[-+]0x[0-9a-f]+$/i,
      Lb = /^0b[01]+$/i,
      Yb = /^0o[0-7]+$/i,
      Sb = parseInt;
    bb.exports = function(bb) {
      if ("number" == typeof bb) return bb;
      if (Gb(bb)) return NaN;
      if (Ob(bb)) {
        var ub = "function" == typeof bb.valueOf ? bb.valueOf() : bb;
        bb = Ob(ub) ? ub + "" : ub
      }
      if ("string" != typeof bb) return 0 === bb ? bb : +bb;
      bb = Bb(bb);
      var hb = Lb.test(bb);
      return hb || Yb.test(bb) ? Sb(bb.slice(2), hb ? 2 : 8) : Ub.test(bb) ? NaN : +bb
    }
  },
  5155: (bb, ub, hb) => {
    var Bb = hb(5163);
    bb.exports = function(bb) {
      return null == bb ? "" : Bb(bb)
    }
  },
  5728: (bb, ub, hb) => {
    var Bb = hb(5298),
      Ob = hb(5731);
    bb.exports = function(bb, ub) {
      return bb && bb.length ? Ob(bb, Bb(ub, 2)) : []
    }
  },
  5791: (bb, ub, hb) => {
    var Bb = hb(5798)("toUpperCase");
    bb.exports = Bb
  },
  5855: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Nu
    });
    var Bb = hb(49),
      Ob = hb(4729),
      Gb = hb.n(Ob);
    const {
      getOwnPropertyNames: Ub,
      getOwnPropertySymbols: Lb
    } = Object, {
      hasOwnProperty: Yb
    } = Object.prototype;

    function Sb(bb, ub) {
      return function(hb, Bb, Ob) {
        return bb(hb, Bb, Ob) && ub(hb, Bb, Ob)
      }
    }

    function ab(bb) {
      return function(ub, hb, Bb) {
        if (!ub || !hb || "object" !== typeof ub || "object" !== typeof hb) return bb(ub, hb, Bb);
        const {
          cache: Ob
        } = Bb, Gb = Ob.get(ub), Ub = Ob.get(hb);
        if (Gb && Ub) return Gb === hb && Ub === ub;
        Ob.set(ub, hb), Ob.set(hb, ub);
        const Lb = bb(ub, hb, Bb);
        return Ob.delete(ub), Ob.delete(hb), Lb
      }
    }

    function Hb(bb) {
      return Ub(bb).concat(Lb(bb))
    }
    const wb = Object.hasOwn || ((bb, ub) => Yb.call(bb, ub));

    function Zb(bb, ub) {
      return bb === ub || !bb && !ub && bb !== bb && ub !== ub
    }
    const {
      getOwnPropertyDescriptor: Xb,
      keys: pb
    } = Object;

    function ob(bb, ub) {
      return bb.byteLength === ub.byteLength && gb(new Uint8Array(bb), new Uint8Array(ub))
    }

    function Ab(bb, ub, hb) {
      let Bb = bb.length;
      if (ub.length !== Bb) return !1;
      for (; Bb-- > 0;)
        if (!hb.equals(bb[Bb], ub[Bb], Bb, Bb, bb, ub, hb)) return !1;
      return !0
    }

    function lb(bb, ub) {
      return bb.byteLength === ub.byteLength && gb(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength), new Uint8Array(ub.buffer, ub.byteOffset, ub.byteLength))
    }

    function Kb(bb, ub) {
      return Zb(bb.getTime(), ub.getTime())
    }

    function Wb(bb, ub) {
      return bb.name === ub.name && bb.message === ub.message && bb.cause === ub.cause && bb.stack === ub.stack
    }

    function Cb(bb, ub) {
      return bb === ub
    }

    function db(bb, ub, hb) {
      const Bb = bb.size;
      if (Bb !== ub.size) return !1;
      if (!Bb) return !0;
      const Ob = new Array(Bb),
        Gb = bb.entries();
      let Ub, Lb, Yb = 0;
      for (;
        (Ub = Gb.next()) && !Ub.done;) {
        const Bb = ub.entries();
        let Gb = !1,
          Sb = 0;
        for (;
          (Lb = Bb.next()) && !Lb.done;) {
          if (Ob[Sb]) {
            Sb++;
            continue
          }
          const Bb = Ub.value,
            ab = Lb.value;
          if (hb.equals(Bb[0], ab[0], Yb, Sb, bb, ub, hb) && hb.equals(Bb[1], ab[1], Bb[0], ab[0], bb, ub, hb)) {
            Gb = Ob[Sb] = !0;
            break
          }
          Sb++
        }
        if (!Gb) return !1;
        Yb++
      }
      return !0
    }
    const rb = Zb;

    function jb(bb, ub, hb) {
      const Bb = pb(bb);
      let Ob = Bb.length;
      if (pb(ub).length !== Ob) return !1;
      for (; Ob-- > 0;)
        if (!vb(bb, ub, hb, Bb[Ob])) return !1;
      return !0
    }

    function nb(bb, ub, hb) {
      const Bb = Hb(bb);
      let Ob, Gb, Ub, Lb = Bb.length;
      if (Hb(ub).length !== Lb) return !1;
      for (; Lb-- > 0;) {
        if (Ob = Bb[Lb], !vb(bb, ub, hb, Ob)) return !1;
        if (Gb = Xb(bb, Ob), Ub = Xb(ub, Ob), (Gb || Ub) && (!Gb || !Ub || Gb.configurable !== Ub.configurable || Gb.enumerable !== Ub.enumerable || Gb.writable !== Ub.writable)) return !1
      }
      return !0
    }

    function Db(bb, ub) {
      return Zb(bb.valueOf(), ub.valueOf())
    }

    function xb(bb, ub) {
      return bb.source === ub.source && bb.flags === ub.flags
    }

    function zb(bb, ub, hb) {
      const Bb = bb.size;
      if (Bb !== ub.size) return !1;
      if (!Bb) return !0;
      const Ob = new Array(Bb),
        Gb = bb.values();
      let Ub, Lb;
      for (;
        (Ub = Gb.next()) && !Ub.done;) {
        const Bb = ub.values();
        let Gb = !1,
          Yb = 0;
        for (;
          (Lb = Bb.next()) && !Lb.done;) {
          if (!Ob[Yb] && hb.equals(Ub.value, Lb.value, Ub.value, Lb.value, bb, ub, hb)) {
            Gb = Ob[Yb] = !0;
            break
          }
          Yb++
        }
        if (!Gb) return !1
      }
      return !0
    }

    function gb(bb, ub) {
      let hb = bb.byteLength;
      if (ub.byteLength !== hb || bb.byteOffset !== ub.byteOffset) return !1;
      for (; hb-- > 0;)
        if (bb[hb] !== ub[hb]) return !1;
      return !0
    }

    function ib(bb, ub) {
      return bb.hostname === ub.hostname && bb.pathname === ub.pathname && bb.protocol === ub.protocol && bb.port === ub.port && bb.hash === ub.hash && bb.username === ub.username && bb.password === ub.password
    }

    function vb(bb, ub, hb, Bb) {
      return !("_owner" !== Bb && "__o" !== Bb && "__v" !== Bb || !bb.$$typeof && !ub.$$typeof) || wb(ub, Bb) && hb.equals(bb[Bb], ub[Bb], Bb, Bb, bb, ub, hb)
    }
    const tb = {
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
      Jb = Object.prototype.toString;

    function eb(bb) {
      let {
        areArrayBuffersEqual: ub,
        areArraysEqual: hb,
        areDataViewsEqual: Bb,
        areDatesEqual: Ob,
        areErrorsEqual: Gb,
        areFunctionsEqual: Ub,
        areMapsEqual: Lb,
        areNumbersEqual: Yb,
        areObjectsEqual: Sb,
        arePrimitiveWrappersEqual: ab,
        areRegExpsEqual: Hb,
        areSetsEqual: wb,
        areTypedArraysEqual: Zb,
        areUrlsEqual: Xb,
        unknownTagComparators: pb
      } = bb;
      return function(bb, ob, Ab) {
        if (bb === ob) return !0;
        if (null == bb || null == ob) return !1;
        const lb = typeof bb;
        if (lb !== typeof ob) return !1;
        if ("object" !== lb) return "number" === lb ? Yb(bb, ob, Ab) : "function" === lb && Ub(bb, ob, Ab);
        const Kb = bb.constructor;
        if (Kb !== ob.constructor) return !1;
        if (Kb === Object) return Sb(bb, ob, Ab);
        if (Array.isArray(bb)) return hb(bb, ob, Ab);
        if (Kb === Date) return Ob(bb, ob, Ab);
        if (Kb === RegExp) return Hb(bb, ob, Ab);
        if (Kb === Map) return Lb(bb, ob, Ab);
        if (Kb === Set) return wb(bb, ob, Ab);
        const Wb = Jb.call(bb);
        if ("[object Date]" === Wb) return Ob(bb, ob, Ab);
        if ("[object RegExp]" === Wb) return Hb(bb, ob, Ab);
        if ("[object Map]" === Wb) return Lb(bb, ob, Ab);
        if ("[object Set]" === Wb) return wb(bb, ob, Ab);
        if ("[object Object]" === Wb) return "function" !== typeof bb.then && "function" !== typeof ob.then && Sb(bb, ob, Ab);
        if ("[object URL]" === Wb) return Xb(bb, ob, Ab);
        if ("[object Error]" === Wb) return Gb(bb, ob, Ab);
        if ("[object Arguments]" === Wb) return Sb(bb, ob, Ab);
        if (tb[Wb]) return Zb(bb, ob, Ab);
        if ("[object ArrayBuffer]" === Wb) return ub(bb, ob, Ab);
        if ("[object DataView]" === Wb) return Bb(bb, ob, Ab);
        if ("[object Boolean]" === Wb || "[object Number]" === Wb || "[object String]" === Wb) return ab(bb, ob, Ab);
        if (pb) {
          let ub = pb[Wb];
          if (!ub) {
            const hb = null != (Cb = bb) ? Cb[Symbol.toStringTag] : void 0;
            hb && (ub = pb[hb])
          }
          if (ub) return ub(bb, ob, Ab)
        }
        var Cb;
        return !1
      }
    }
    const Nb = sb();
    sb({
      strict: !0
    }), sb({
      circular: !0
    }), sb({
      circular: !0,
      strict: !0
    }), sb({
      createInternalComparator: () => Zb
    }), sb({
      strict: !0,
      createInternalComparator: () => Zb
    }), sb({
      circular: !0,
      createInternalComparator: () => Zb
    }), sb({
      circular: !0,
      createInternalComparator: () => Zb,
      strict: !0
    });

    function sb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: ub = !1,
        createInternalComparator: hb,
        createState: Bb,
        strict: Ob = !1
      } = bb, Gb = function(bb) {
        let {
          circular: ub,
          createCustomConfig: hb,
          strict: Bb
        } = bb, Ob = {
          areArrayBuffersEqual: ob,
          areArraysEqual: Bb ? nb : Ab,
          areDataViewsEqual: lb,
          areDatesEqual: Kb,
          areErrorsEqual: Wb,
          areFunctionsEqual: Cb,
          areMapsEqual: Bb ? Sb(db, nb) : db,
          areNumbersEqual: rb,
          areObjectsEqual: Bb ? nb : jb,
          arePrimitiveWrappersEqual: Db,
          areRegExpsEqual: xb,
          areSetsEqual: Bb ? Sb(zb, nb) : zb,
          areTypedArraysEqual: Bb ? Sb(gb, nb) : gb,
          areUrlsEqual: ib,
          unknownTagComparators: void 0
        };
        if (hb && (Ob = Object.assign({}, Ob, hb(Ob))), ub) {
          const bb = ab(Ob.areArraysEqual),
            ub = ab(Ob.areMapsEqual),
            hb = ab(Ob.areObjectsEqual),
            Bb = ab(Ob.areSetsEqual);
          Ob = Object.assign({}, Ob, {
            areArraysEqual: bb,
            areMapsEqual: ub,
            areObjectsEqual: hb,
            areSetsEqual: Bb
          })
        }
        return Ob
      }(bb), Ub = eb(Gb);
      var Lb;
      return function(bb) {
        let {
          circular: ub,
          comparator: hb,
          createState: Bb,
          equals: Ob,
          strict: Gb
        } = bb;
        if (Bb) return function(bb, Ub) {
          const {
            cache: Lb = (ub ? new WeakMap : void 0),
            meta: Yb
          } = Bb();
          return hb(bb, Ub, {
            cache: Lb,
            equals: Ob,
            meta: Yb,
            strict: Gb
          })
        };
        if (ub) return function(bb, ub) {
          return hb(bb, ub, {
            cache: new WeakMap,
            equals: Ob,
            meta: void 0,
            strict: Gb
          })
        };
        const Ub = {
          cache: void 0,
          equals: Ob,
          meta: void 0,
          strict: Gb
        };
        return function(bb, ub) {
          return hb(bb, ub, Ub)
        }
      }({
        circular: ub,
        comparator: Ub,
        createState: Bb,
        equals: hb ? hb(Ub) : (Lb = Ub, function(bb, ub, hb, Bb, Ob, Gb, Ub) {
          return Lb(bb, ub, Ub)
        }),
        strict: Ob
      })
    }

    function Mb(bb) {
      var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        hb = -1;
      requestAnimationFrame((function Bb(Ob) {
        hb < 0 && (hb = Ob), Ob - hb > ub ? (bb(Ob), hb = -1) : function(bb) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(bb)
        }(Bb)
      }))
    }

    function mb(bb) {
      return mb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, mb(bb)
    }

    function Ib(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return Pb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return Pb(bb, ub)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function qb() {
      var bb = function() {
          return null
        },
        ub = !1,
        hb = function hb(Bb) {
          if (!ub) {
            if (Array.isArray(Bb)) {
              if (!Bb.length) return;
              var Ob = Ib(Bb),
                Gb = Ob[0],
                Ub = Ob.slice(1);
              return "number" === typeof Gb ? void Mb(hb.bind(null, Ub), Gb) : (hb(Gb), void Mb(hb.bind(null, Ub)))
            }
            "object" === mb(Bb) && bb(Bb), "function" === typeof Bb && Bb()
          }
        };
      return {
        stop: function() {
          ub = !0
        },
        start: function(bb) {
          ub = !1, hb(bb)
        },
        subscribe: function(ub) {
          return bb = ub,
            function() {
              bb = function() {
                return null
              }
            }
        }
      }
    }

    function Eb(bb) {
      return Eb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Eb(bb)
    }

    function yb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Vb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? yb(Object(hb), !0).forEach((function(ub) {
          Fb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : yb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Fb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" !== Eb(bb) || null === bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" !== Eb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" === Eb(ub) ? ub : String(ub)
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var fb = function(bb) {
        return bb
      },
      kb = function(bb, ub) {
        return Object.keys(ub).reduce((function(hb, Bb) {
          return Vb(Vb({}, hb), {}, Fb({}, Bb, bb(Bb, ub[Bb])))
        }), {})
      },
      Tb = function(bb, ub, hb) {
        return bb.map((function(bb) {
          return "".concat((Bb = bb, Bb.replace(/([A-Z])/g, (function(bb) {
            return "-".concat(bb.toLowerCase())
          }))), " ").concat(ub, "ms ").concat(hb);
          var Bb
        })).join(",")
      };

    function cb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || Rb(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return bu(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Rb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Rb(bb, ub) {
      if (bb) {
        if ("string" === typeof bb) return bu(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === hb && bb.constructor && (hb = bb.constructor.name), "Map" === hb || "Set" === hb ? Array.from(bb) : "Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb) ? bu(bb, ub) : void 0
      }
    }

    function bu(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }
    var uu = 1e-4,
      hu = function(bb, ub) {
        return [0, 3 * bb, 3 * ub - 6 * bb, 3 * bb - 3 * ub + 1]
      },
      Bu = function(bb, ub) {
        return bb.map((function(bb, hb) {
          return bb * Math.pow(ub, hb)
        })).reduce((function(bb, ub) {
          return bb + ub
        }))
      },
      Ou = function(bb, ub) {
        return function(hb) {
          var Bb = hu(bb, ub);
          return Bu(Bb, hb)
        }
      },
      Gu = function() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        var Bb = ub[0],
          Ob = ub[1],
          Gb = ub[2],
          Ub = ub[3];
        if (1 === ub.length) switch (ub[0]) {
          case "linear":
            Bb = 0, Ob = 0, Gb = 1, Ub = 1;
            break;
          case "ease":
            Bb = .25, Ob = .1, Gb = .25, Ub = 1;
            break;
          case "ease-in":
            Bb = .42, Ob = 0, Gb = 1, Ub = 1;
            break;
          case "ease-out":
            Bb = .42, Ob = 0, Gb = .58, Ub = 1;
            break;
          case "ease-in-out":
            Bb = 0, Ob = 0, Gb = .58, Ub = 1;
            break;
          default:
            var Lb = ub[0].split("(");
            if ("cubic-bezier" === Lb[0] && 4 === Lb[1].split(")")[0].split(",").length) {
              var Yb = cb(Lb[1].split(")")[0].split(",").map((function(bb) {
                return parseFloat(bb)
              })), 4);
              Bb = Yb[0], Ob = Yb[1], Gb = Yb[2], Ub = Yb[3]
            }
        } [Bb, Gb, Ob, Ub].every((function(bb) {
          return "number" === typeof bb && bb >= 0 && bb <= 1
        }));
        var Sb, ab, Hb = Ou(Bb, Gb),
          wb = Ou(Ob, Ub),
          Zb = (Sb = Bb, ab = Gb, function(bb) {
            var ub = hu(Sb, ab),
              hb = [].concat(Qb(ub.map((function(bb, ub) {
                return bb * ub
              })).slice(1)), [0]);
            return Bu(hb, bb)
          }),
          Xb = function(bb) {
            for (var ub, hb = bb > 1 ? 1 : bb, Bb = hb, Ob = 0; Ob < 8; ++Ob) {
              var Gb = Hb(Bb) - hb,
                Ub = Zb(Bb);
              if (Math.abs(Gb - hb) < uu || Ub < uu) return wb(Bb);
              Bb = (ub = Bb - Gb / Ub) > 1 ? 1 : ub < 0 ? 0 : ub
            }
            return wb(Bb)
          };
        return Xb.isStepper = !1, Xb
      },
      Uu = function() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        var Bb = ub[0];
        if ("string" === typeof Bb) switch (Bb) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return Gu(Bb);
          case "spring":
            return function() {
              var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                ub = bb.stiff,
                hb = void 0 === ub ? 100 : ub,
                Bb = bb.damping,
                Ob = void 0 === Bb ? 8 : Bb,
                Gb = bb.dt,
                Ub = void 0 === Gb ? 17 : Gb,
                Lb = function(bb, ub, Bb) {
                  var Gb = Bb + (-(bb - ub) * hb - Bb * Ob) * Ub / 1e3,
                    Lb = Bb * Ub / 1e3 + bb;
                  return Math.abs(Lb - ub) < uu && Math.abs(Gb) < uu ? [ub, 0] : [Lb, Gb]
                };
              return Lb.isStepper = !0, Lb.dt = Ub, Lb
            }();
          default:
            if ("cubic-bezier" === Bb.split("(")[0]) return Gu(Bb)
        }
        return "function" === typeof Bb ? Bb : null
      };

    function Lu(bb) {
      return Lu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Lu(bb)
    }

    function Yu(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Xu(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Zu(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Su(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function au(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Su(Object(hb), !0).forEach((function(ub) {
          Hu(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Su(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Hu(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" !== Lu(bb) || null === bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" !== Lu(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" === Lu(ub) ? ub : String(ub)
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function wu(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || Zu(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Zu(bb, ub) {
      if (bb) {
        if ("string" === typeof bb) return Xu(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === hb && bb.constructor && (hb = bb.constructor.name), "Map" === hb || "Set" === hb ? Array.from(bb) : "Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb) ? Xu(bb, ub) : void 0
      }
    }

    function Xu(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }
    var pu = function(bb, ub, hb) {
        return bb + (ub - bb) * hb
      },
      ou = function(bb) {
        return bb.from !== bb.to
      },
      Au = function bb(ub, hb, Bb) {
        var Ob = kb((function(bb, hb) {
          if (ou(hb)) {
            var Bb = wu(ub(hb.from, hb.to, hb.Mp), 2),
              Ob = Bb[0],
              Gb = Bb[1];
            return au(au({}, hb), {}, {
              from: Ob,
              Mp: Gb
            })
          }
          return hb
        }), hb);
        return Bb < 1 ? kb((function(bb, ub) {
          return ou(ub) ? au(au({}, ub), {}, {
            Mp: pu(ub.Mp, Ob[bb].Mp, Bb),
            from: pu(ub.from, Ob[bb].from, Bb)
          }) : ub
        }), hb) : bb(ub, Ob, Bb - 1)
      };
    const lu = function(bb, ub, hb, Bb, Ob) {
      var Gb, Ub, Lb, Yb, Sb = (Gb = bb, Ub = ub, [Object.keys(Gb), Object.keys(Ub)].reduce((function(bb, ub) {
          return bb.filter((function(bb) {
            return ub.includes(bb)
          }))
        }))),
        ab = Sb.reduce((function(hb, Bb) {
          return au(au({}, hb), {}, Hu({}, Bb, [bb[Bb], ub[Bb]]))
        }), {}),
        Hb = Sb.reduce((function(hb, Bb) {
          return au(au({}, hb), {}, Hu({}, Bb, {
            from: bb[Bb],
            Mp: 0,
            to: ub[Bb]
          }))
        }), {}),
        wb = -1,
        Zb = function() {
          return null
        };
      return Zb = hb.isStepper ? function(Bb) {
          Lb || (Lb = Bb);
          var Gb = (Bb - Lb) / hb.dt;
          Hb = Au(hb, Hb, Gb), Ob(au(au(au({}, bb), ub), kb((function(bb, ub) {
            return ub.from
          }), Hb))), Lb = Bb, Object.values(Hb).filter(ou).length && (wb = requestAnimationFrame(Zb))
        } : function(Gb) {
          Yb || (Yb = Gb);
          var Ub = (Gb - Yb) / Bb,
            Lb = kb((function(bb, ub) {
              return pu.apply(void 0, Yu(ub).concat([hb(Ub)]))
            }), ab);
          if (Ob(au(au(au({}, bb), ub), Lb)), Ub < 1) wb = requestAnimationFrame(Zb);
          else {
            var Sb = kb((function(bb, ub) {
              return pu.apply(void 0, Yu(ub).concat([hb(1)]))
            }), ab);
            Ob(au(au(au({}, bb), ub), Sb))
          }
        },
        function() {
          return requestAnimationFrame(Zb),
            function() {
              cancelAnimationFrame(wb)
            }
        }
    };

    function Ku(bb) {
      return Ku = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ku(bb)
    }
    var Wu = ["children", "kw", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function Cu(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb, Bb, Ob = {},
          Gb = Object.keys(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || (Ob[hb] = bb[hb]);
        return Ob
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function du(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return ru(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return ru(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return ru(bb, ub)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ru(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function ju(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function nu(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? ju(Object(hb), !0).forEach((function(ub) {
          Du(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : ju(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Du(bb, ub, hb) {
      return (ub = zu(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function xu(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, zu(Bb.key), Bb)
      }
    }

    function zu(bb) {
      var ub = function(bb, ub) {
        if ("object" !== Ku(bb) || null === bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" !== Ku(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" === Ku(ub) ? ub : String(ub)
    }

    function gu(bb, ub) {
      return gu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, gu(bb, ub)
    }

    function iu(bb) {
      var ub = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (bb) {
          return !1
        }
      }();
      return function() {
        var hb, Bb = Ju(bb);
        if (ub) {
          var Ob = Ju(this).constructor;
          hb = Reflect.construct(Bb, arguments, Ob)
        } else hb = Bb.apply(this, arguments);
        return vu(this, hb)
      }
    }

    function vu(bb, ub) {
      if (ub && ("object" === Ku(ub) || "function" === typeof ub)) return ub;
      if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
      return tu(bb)
    }

    function tu(bb) {
      if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return bb
    }

    function Ju(bb) {
      return Ju = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Ju(bb)
    }
    var eu = function(bb) {
      ! function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && gu(bb, ub)
      }(Ub, bb);
      var ub, hb, Ob, Gb = iu(Ub);

      function Ub(bb, ub) {
        var hb;
        ! function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, Ub);
        var Bb = (hb = Gb.call(this, bb, ub)).props,
          Ob = Bb.isActive,
          Lb = Bb.attributeName,
          Yb = Bb.from,
          Sb = Bb.to,
          ab = Bb.steps,
          Hb = Bb.children,
          wb = Bb.duration;
        if (hb.handleStyleChange = hb.handleStyleChange.bind(tu(hb)), hb.changeStyle = hb.changeStyle.bind(tu(hb)), !Ob || wb <= 0) return hb.state = {
          style: {}
        }, "function" === typeof Hb && (hb.state = {
          style: Sb
        }), vu(hb);
        if (ab && ab.length) hb.state = {
          style: ab[0].style
        };
        else if (Yb) {
          if ("function" === typeof Hb) return hb.state = {
            style: Yb
          }, vu(hb);
          hb.state = {
            style: Lb ? Du({}, Lb, Yb) : Yb
          }
        } else hb.state = {
          style: {}
        };
        return hb
      }
      return ub = Ub, (hb = [{
        key: "componentDidMount",
        value: function() {
          var bb = this.props,
            ub = bb.isActive,
            hb = bb.canBegin;
          this.mounted = !0, ub && hb && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(bb) {
          var ub = this.props,
            hb = ub.isActive,
            Bb = ub.canBegin,
            Ob = ub.attributeName,
            Gb = ub.shouldReAnimate,
            Ub = ub.to,
            Lb = ub.from,
            Yb = this.state.style;
          if (Bb)
            if (hb) {
              if (!(Nb(bb.to, Ub) && bb.canBegin && bb.isActive)) {
                var Sb = !bb.canBegin || !bb.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var ab = Sb || Gb ? Lb : bb.to;
                if (this.state && Yb) {
                  var Hb = {
                    style: Ob ? Du({}, Ob, ab) : ab
                  };
                  (Ob && Yb[Ob] !== ab || !Ob && Yb !== ab) && this.setState(Hb)
                }
                this.runAnimation(nu(nu({}, this.props), {}, {
                  from: ab,
                  kw: 0
                }))
              }
            } else {
              var wb = {
                style: Ob ? Du({}, Ob, Ub) : Ub
              };
              this.state && Yb && (Ob && Yb[Ob] !== Ub || !Ob && Yb !== Ub) && this.setState(wb)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var bb = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), bb && bb()
        }
      }, {
        key: "handleStyleChange",
        value: function(bb) {
          this.changeStyle(bb)
        }
      }, {
        key: "changeStyle",
        value: function(bb) {
          this.mounted && this.setState({
            style: bb
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(bb) {
          var ub = this,
            hb = bb.from,
            Bb = bb.to,
            Ob = bb.duration,
            Gb = bb.easing,
            Ub = bb.kw,
            Lb = bb.onAnimationEnd,
            Yb = bb.onAnimationStart,
            Sb = lu(hb, Bb, Uu(Gb), Ob, this.changeStyle);
          this.manager.start([Yb, Ub, function() {
            ub.stopJSAnimation = Sb()
          }, Ob, Lb])
        }
      }, {
        key: "runStepAnimation",
        value: function(bb) {
          var ub = this,
            hb = bb.steps,
            Bb = bb.kw,
            Ob = bb.onAnimationStart,
            Gb = hb[0],
            Ub = Gb.style,
            Lb = Gb.duration,
            Yb = void 0 === Lb ? 0 : Lb;
          return this.manager.start([Ob].concat(du(hb.reduce((function(bb, Bb, Ob) {
            if (0 === Ob) return bb;
            var Gb = Bb.duration,
              Ub = Bb.easing,
              Lb = void 0 === Ub ? "ease" : Ub,
              Yb = Bb.style,
              Sb = Bb.properties,
              ab = Bb.onAnimationEnd,
              Hb = Ob > 0 ? hb[Ob - 1] : Bb,
              wb = Sb || Object.keys(Yb);
            if ("function" === typeof Lb || "spring" === Lb) return [].concat(du(bb), [ub.runJSAnimation.bind(ub, {
              from: Hb.style,
              to: Yb,
              duration: Gb,
              easing: Lb
            }), Gb]);
            var Zb = Tb(wb, Gb, Lb),
              Xb = nu(nu(nu({}, Hb.style), Yb), {}, {
                transition: Zb
              });
            return [].concat(du(bb), [Xb, Gb, ab]).filter(fb)
          }), [Ub, Math.max(Yb, Bb)])), [bb.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(bb) {
          this.manager || (this.manager = qb());
          var ub = bb.kw,
            hb = bb.duration,
            Bb = bb.attributeName,
            Ob = bb.to,
            Gb = bb.easing,
            Ub = bb.onAnimationStart,
            Lb = bb.onAnimationEnd,
            Yb = bb.steps,
            Sb = bb.children,
            ab = this.manager;
          if (this.unSubscribe = ab.subscribe(this.handleStyleChange), "function" !== typeof Gb && "function" !== typeof Sb && "spring" !== Gb)
            if (Yb.length > 1) this.runStepAnimation(bb);
            else {
              var Hb = Bb ? Du({}, Bb, Ob) : Ob,
                wb = Tb(Object.keys(Hb), hb, Gb);
              ab.start([Ub, ub, nu(nu({}, Hb), {}, {
                transition: wb
              }), hb, Lb])
            }
          else this.runJSAnimation(bb)
        }
      }, {
        key: "render",
        value: function() {
          var bb = this.props,
            ub = bb.children,
            hb = (bb.kw, bb.duration),
            Ob = (bb.attributeName, bb.easing, bb.isActive),
            Gb = (bb.steps, bb.from, bb.to, bb.canBegin, bb.onAnimationEnd, bb.shouldReAnimate, bb.onAnimationReStart, Cu(bb, Wu)),
            Ub = Bb.Children.count(ub),
            Lb = this.state.style;
          if ("function" === typeof ub) return ub(Lb);
          if (!Ob || 0 === Ub || hb <= 0) return ub;
          var Yb = function(bb) {
            var ub = bb.props,
              hb = ub.style,
              Ob = void 0 === hb ? {} : hb,
              Ub = ub.className;
            return (0, Bb.cloneElement)(bb, nu(nu({}, Gb), {}, {
              style: nu(nu({}, Ob), Lb),
              className: Ub
            }))
          };
          return 1 === Ub ? Yb(Bb.Children.only(ub)) : Bb.createElement("div", null, Bb.Children.map(ub, (function(bb) {
            return Yb(bb)
          })))
        }
      }]) && xu(ub.prototype, hb), Ob && xu(ub, Ob), Object.defineProperty(ub, "prototype", {
        writable: !1
      }), Ub
    }(Bb.PureComponent);
    eu.displayName = "Animate", eu.defaultProps = {
      kw: 0,
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
    }, eu.propTypes = {
      from: Gb().oneOfType([Gb().object, Gb().string]),
      to: Gb().oneOfType([Gb().object, Gb().string]),
      attributeName: Gb().string,
      duration: Gb().number,
      kw: Gb().number,
      easing: Gb().oneOfType([Gb().string, Gb().func]),
      steps: Gb().arrayOf(Gb().shape({
        duration: Gb().number.isRequired,
        style: Gb().object.isRequired,
        easing: Gb().oneOfType([Gb().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Gb().func]),
        properties: Gb().arrayOf("string"),
        onAnimationEnd: Gb().func
      })),
      children: Gb().oneOfType([Gb().node, Gb().func]),
      isActive: Gb().bool,
      canBegin: Gb().bool,
      onAnimationEnd: Gb().func,
      shouldReAnimate: Gb().bool,
      onAnimationStart: Gb().func,
      onAnimationReStart: Gb().func
    };
    const Nu = eu
  },
  6097: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ib
    });
    var Bb, Ob = hb(49),
      Gb = hb(4831),
      Ub = hb(5855),
      Lb = hb(5019),
      Yb = hb.n(Lb),
      Sb = hb(5894),
      ab = hb.n(Sb),
      Hb = hb(5175),
      wb = hb.n(Hb),
      Zb = hb(4930),
      Xb = hb.n(Zb),
      pb = hb(5923),
      ob = hb.n(pb),
      Ab = hb(6088),
      lb = hb(5850),
      Kb = hb(5710),
      Wb = hb(6016),
      Cb = hb(5718),
      db = hb(4918),
      rb = hb(5871),
      jb = hb(5181),
      nb = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      Db = ["key"];

    function xb(bb) {
      return xb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, xb(bb)
    }

    function zb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function gb() {
      return gb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, gb.apply(this, arguments)
    }

    function ib(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function vb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? ib(Object(hb), !0).forEach((function(ub) {
          Mb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : ib(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function tb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, mb(Bb.key), Bb)
      }
    }

    function Jb(bb, ub, hb) {
      return ub = Nb(ub),
        function(bb, ub) {
          if (ub && ("object" === xb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, eb() ? Reflect.construct(ub, hb || [], Nb(bb).constructor) : ub.apply(bb, hb))
    }

    function eb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (eb = function() {
        return !!bb
      })()
    }

    function Nb(bb) {
      return Nb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Nb(bb)
    }

    function sb(bb, ub) {
      return sb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, sb(bb, ub)
    }

    function Mb(bb, ub, hb) {
      return (ub = mb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function mb(bb) {
      var ub = function(bb, ub) {
        if ("object" != xb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != xb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == xb(ub) ? ub : ub + ""
    }
    var Ib = function(bb) {
      function ub() {
        var bb;
        ! function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub);
        for (var hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        return Mb(bb = Jb(this, ub, [].concat(Bb)), "state", {
          isAnimationFinished: !0
        }), Mb(bb, "id", (0, db.G)("recharts-area-")), Mb(bb, "handleAnimationEnd", (function() {
          var ub = bb.props.onAnimationEnd;
          bb.setState({
            isAnimationFinished: !0
          }), Yb()(ub) && ub()
        })), Mb(bb, "handleAnimationStart", (function() {
          var ub = bb.props.onAnimationStart;
          bb.setState({
            isAnimationFinished: !1
          }), Yb()(ub) && ub()
        })), bb
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && sb(bb, ub)
      }(ub, bb), hb = ub, Bb = [{
        key: "renderDots",
        value: function(bb, hb, Bb) {
          var Gb = this.props.isAnimationActive,
            Ub = this.state.isAnimationFinished;
          if (Gb && !Ub) return null;
          var Lb = this.props,
            Yb = Lb.dot,
            Sb = Lb.points,
            ab = Lb.dataKey,
            Hb = (0, jb.b)(this.props, !1),
            wb = (0, jb.b)(Yb, !0),
            Zb = Sb.map((function(bb, hb) {
              var Bb = vb(vb(vb({
                key: "dot-".concat(hb),
                r: 3
              }, Hb), wb), {}, {
                index: hb,
                cx: bb.x,
                cy: bb.y,
                dataKey: ab,
                value: bb.value,
                payload: bb.payload,
                points: Sb
              });
              return ub.renderDotItem(Yb, Bb)
            })),
            Xb = {
              clipPath: bb ? "url(#clipPath-".concat(hb ? "" : "dots-").concat(Bb, ")") : null
            };
          return Ob.createElement(Kb.c, gb({
            className: "recharts-area-dots"
          }, Xb), Zb)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(bb) {
          var ub = this.props,
            hb = ub.baseLine,
            Bb = ub.points,
            Gb = ub.strokeWidth,
            Ub = Bb[0].x,
            Lb = Bb[Bb.length - 1].x,
            Yb = bb * Math.abs(Ub - Lb),
            Sb = ab()(Bb.map((function(bb) {
              return bb.y || 0
            })));
          return (0, db.z)(hb) && "number" === typeof hb ? Sb = Math.max(hb, Sb) : hb && Array.isArray(hb) && hb.length && (Sb = Math.max(ab()(hb.map((function(bb) {
            return bb.y || 0
          }))), Sb)), (0, db.z)(Sb) ? Ob.createElement("rect", {
            x: Ub < Lb ? Ub : Ub - Yb,
            y: 0,
            width: Yb,
            height: Math.floor(Sb + (Gb ? parseInt("".concat(Gb), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(bb) {
          var ub = this.props,
            hb = ub.baseLine,
            Bb = ub.points,
            Gb = ub.strokeWidth,
            Ub = Bb[0].y,
            Lb = Bb[Bb.length - 1].y,
            Yb = bb * Math.abs(Ub - Lb),
            Sb = ab()(Bb.map((function(bb) {
              return bb.x || 0
            })));
          return (0, db.z)(hb) && "number" === typeof hb ? Sb = Math.max(hb, Sb) : hb && Array.isArray(hb) && hb.length && (Sb = Math.max(ab()(hb.map((function(bb) {
            return bb.x || 0
          }))), Sb)), (0, db.z)(Sb) ? Ob.createElement("rect", {
            x: 0,
            y: Ub < Lb ? Ub : Ub - Yb,
            width: Sb + (Gb ? parseInt("".concat(Gb), 10) : 1),
            height: Math.floor(Yb)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(bb) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(bb) : this.renderHorizontalRect(bb)
        }
      }, {
        key: "renderAreaStatically",
        value: function(bb, ub, hb, Bb) {
          var Gb = this.props,
            Ub = Gb.layout,
            Lb = Gb.type,
            Yb = Gb.stroke,
            Sb = Gb.connectNulls,
            ab = Gb.isRange,
            Hb = (Gb.ref, zb(Gb, nb));
          return Ob.createElement(Kb.c, {
            clipPath: hb ? "url(#clipPath-".concat(Bb, ")") : null
          }, Ob.createElement(Ab.e, gb({}, (0, jb.b)(Hb, !0), {
            points: bb,
            connectNulls: Sb,
            type: Lb,
            baseLine: ub,
            layout: Ub,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== Yb && Ob.createElement(Ab.e, gb({}, (0, jb.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Ub,
            type: Lb,
            connectNulls: Sb,
            fill: "none",
            points: bb
          })), "none" !== Yb && ab && Ob.createElement(Ab.e, gb({}, (0, jb.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Ub,
            type: Lb,
            connectNulls: Sb,
            fill: "none",
            points: ub
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(bb, ub) {
          var hb = this,
            Bb = this.props,
            Gb = Bb.points,
            Lb = Bb.baseLine,
            Yb = Bb.isAnimationActive,
            Sb = Bb.animationBegin,
            ab = Bb.animationDuration,
            Hb = Bb.animationEasing,
            Zb = Bb.animationId,
            pb = this.state,
            ob = pb.prevPoints,
            Ab = pb.prevBaseLine;
          return Ob.createElement(Ub.e, {
            kw: Sb,
            duration: ab,
            isActive: Yb,
            easing: Hb,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(Zb),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Bb) {
            var Ub = Bb.t;
            if (ob) {
              var Yb, Sb = ob.length / Gb.length,
                ab = Gb.map((function(bb, ub) {
                  var hb = Math.floor(ub * Sb);
                  if (ob[hb]) {
                    var Bb = ob[hb],
                      Ob = (0, db.s)(Bb.x, bb.x),
                      Gb = (0, db.s)(Bb.y, bb.y);
                    return vb(vb({}, bb), {}, {
                      x: Ob(Ub),
                      y: Gb(Ub)
                    })
                  }
                  return bb
                }));
              return Yb = (0, db.z)(Lb) && "number" === typeof Lb ? (0, db.s)(Ab, Lb)(Ub) : wb()(Lb) || Xb()(Lb) ? (0, db.s)(Ab, 0)(Ub) : Lb.map((function(bb, ub) {
                var hb = Math.floor(ub * Sb);
                if (Ab[hb]) {
                  var Bb = Ab[hb],
                    Ob = (0, db.s)(Bb.x, bb.x),
                    Gb = (0, db.s)(Bb.y, bb.y);
                  return vb(vb({}, bb), {}, {
                    x: Ob(Ub),
                    y: Gb(Ub)
                  })
                }
                return bb
              })), hb.renderAreaStatically(ab, Yb, bb, ub)
            }
            return Ob.createElement(Kb.c, null, Ob.createElement("defs", null, Ob.createElement("clipPath", {
              id: "animationClipPath-".concat(ub)
            }, hb.renderClipRect(Ub))), Ob.createElement(Kb.c, {
              clipPath: "url(#animationClipPath-".concat(ub, ")")
            }, hb.renderAreaStatically(Gb, Lb, bb, ub)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(bb, ub) {
          var hb = this.props,
            Bb = hb.points,
            Ob = hb.baseLine,
            Gb = hb.isAnimationActive,
            Ub = this.state,
            Lb = Ub.prevPoints,
            Yb = Ub.prevBaseLine,
            Sb = Ub.totalLength;
          return Gb && Bb && Bb.length && (!Lb && Sb > 0 || !ob()(Lb, Bb) || !ob()(Yb, Ob)) ? this.renderAreaWithAnimation(bb, ub) : this.renderAreaStatically(Bb, Ob, bb, ub)
        }
      }, {
        key: "render",
        value: function() {
          var bb, ub = this.props,
            hb = ub.hide,
            Bb = ub.dot,
            Ub = ub.points,
            Lb = ub.className,
            Yb = ub.top,
            Sb = ub.left,
            ab = ub.xAxis,
            Hb = ub.yAxis,
            Zb = ub.width,
            Xb = ub.height,
            pb = ub.isAnimationActive,
            ob = ub.id;
          if (hb || !Ub || !Ub.length) return null;
          var Ab = this.state.isAnimationFinished,
            lb = 1 === Ub.length,
            Cb = (0, Gb.e)("recharts-area", Lb),
            db = ab && ab.allowDataOverflow,
            rb = Hb && Hb.allowDataOverflow,
            nb = db || rb,
            Db = wb()(ob) ? this.id : ob,
            xb = null !== (bb = (0, jb.b)(Bb, !1)) && void 0 !== bb ? bb : {
              r: 3,
              strokeWidth: 2
            },
            zb = xb.r,
            gb = void 0 === zb ? 3 : zb,
            ib = xb.strokeWidth,
            vb = void 0 === ib ? 2 : ib,
            tb = ((0, jb.l)(Bb) ? Bb : {}).clipDot,
            Jb = void 0 === tb || tb,
            eb = 2 * gb + vb;
          return Ob.createElement(Kb.c, {
            className: Cb
          }, db || rb ? Ob.createElement("defs", null, Ob.createElement("clipPath", {
            id: "clipPath-".concat(Db)
          }, Ob.createElement("rect", {
            x: db ? Sb : Sb - Zb / 2,
            y: rb ? Yb : Yb - Xb / 2,
            width: db ? Zb : 2 * Zb,
            height: rb ? Xb : 2 * Xb
          })), !Jb && Ob.createElement("clipPath", {
            id: "clipPath-dots-".concat(Db)
          }, Ob.createElement("rect", {
            x: Sb - eb / 2,
            y: Yb - eb / 2,
            width: Zb + eb,
            height: Xb + eb
          }))) : null, lb ? null : this.renderArea(nb, Db), (Bb || lb) && this.renderDots(nb, Jb, Db), (!pb || Ab) && Wb.d.renderCallByParent(this.props, Ub))
        }
      }], Lb = [{
        key: "getDerivedStateFromProps",
        value: function(bb, ub) {
          return bb.animationId !== ub.prevAnimationId ? {
            prevAnimationId: bb.animationId,
            curPoints: bb.points,
            curBaseLine: bb.baseLine,
            prevPoints: ub.curPoints,
            prevBaseLine: ub.curBaseLine
          } : bb.points !== ub.curPoints || bb.baseLine !== ub.curBaseLine ? {
            curPoints: bb.points,
            curBaseLine: bb.baseLine
          } : null
        }
      }], Bb && tb(hb.prototype, Bb), Lb && tb(hb, Lb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Bb, Lb
    }(Ob.PureComponent);
    Bb = Ib, Mb(Ib, "displayName", "Area"), Mb(Ib, "defaultProps", {
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
      isAnimationActive: !Cb.b.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), Mb(Ib, "getBaseValue", (function(bb, ub, hb, Bb) {
      var Ob = bb.layout,
        Gb = bb.baseValue,
        Ub = ub.props.baseValue,
        Lb = null !== Ub && void 0 !== Ub ? Ub : Gb;
      if ((0, db.z)(Lb) && "number" === typeof Lb) return Lb;
      var Yb = "horizontal" === Ob ? Bb : hb,
        Sb = Yb.scale.domain();
      if ("number" === Yb.type) {
        var ab = Math.max(Sb[0], Sb[1]),
          Hb = Math.min(Sb[0], Sb[1]);
        return "dataMin" === Lb ? Hb : "dataMax" === Lb || ab < 0 ? ab : Math.max(Math.min(Sb[0], Sb[1]), 0)
      }
      return "dataMin" === Lb ? Sb[0] : "dataMax" === Lb ? Sb[1] : Sb[0]
    })), Mb(Ib, "getComposedData", (function(bb) {
      var ub, hb = bb.props,
        Ob = bb.item,
        Gb = bb.xAxis,
        Ub = bb.yAxis,
        Lb = bb.xAxisTicks,
        Yb = bb.yAxisTicks,
        Sb = bb.bandSize,
        ab = bb.dataKey,
        Hb = bb.stackedData,
        wb = bb.dataStartIndex,
        Zb = bb.displayedData,
        Xb = bb.offset,
        pb = hb.layout,
        ob = Hb && Hb.length,
        Ab = Bb.getBaseValue(hb, Ob, Gb, Ub),
        lb = "horizontal" === pb,
        Kb = !1,
        Wb = Zb.map((function(bb, ub) {
          var hb;
          ob ? hb = Hb[wb + ub] : (hb = (0, rb.W)(bb, ab), Array.isArray(hb) ? Kb = !0 : hb = [Ab, hb]);
          var Bb = null == hb[1] || ob && null == (0, rb.W)(bb, ab);
          return lb ? {
            x: (0, rb.y)({
              axis: Gb,
              ticks: Lb,
              bandSize: Sb,
              entry: bb,
              index: ub
            }),
            y: Bb ? null : Ub.scale(hb[1]),
            value: hb,
            payload: bb
          } : {
            x: Bb ? null : Gb.scale(hb[1]),
            y: (0, rb.y)({
              axis: Ub,
              ticks: Yb,
              bandSize: Sb,
              entry: bb,
              index: ub
            }),
            value: hb,
            payload: bb
          }
        }));
      return ub = ob || Kb ? Wb.map((function(bb) {
        var ub = Array.isArray(bb.value) ? bb.value[0] : null;
        return lb ? {
          x: bb.x,
          y: null != ub && null != bb.y ? Ub.scale(ub) : null
        } : {
          x: null != ub ? Gb.scale(ub) : null,
          y: bb.y
        }
      })) : lb ? Ub.scale(Ab) : Gb.scale(Ab), vb({
        points: Wb,
        baseLine: ub,
        layout: pb,
        isRange: Kb
      }, Xb)
    })), Mb(Ib, "renderDotItem", (function(bb, ub) {
      var hb;
      if (Ob.isValidElement(bb)) hb = Ob.cloneElement(bb, ub);
      else if (Yb()(bb)) hb = bb(ub);
      else {
        var Bb = (0, Gb.e)("recharts-area-dot", "boolean" !== typeof bb ? bb.className : ""),
          Ub = ub.key,
          Lb = zb(ub, Db);
        hb = Ob.createElement(lb.b, gb({}, Lb, {
          key: Ub,
          className: Bb
        }))
      }
      return hb
    }))
  },
  6001: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Vb
    });
    var Bb = hb(49),
      Ob = hb(4831),
      Gb = hb(5855),
      Ub = hb(5923),
      Lb = hb.n(Ub),
      Yb = hb(5175),
      Sb = hb.n(Yb),
      ab = hb(5710),
      Hb = hb(5937),
      wb = hb(6007),
      Zb = hb(6016),
      Xb = hb(4918),
      pb = hb(5181),
      ob = hb(5718),
      Ab = hb(5871),
      lb = hb(5207),
      Kb = hb(5700),
      Wb = hb(6021),
      Cb = ["x", "y"];

    function db(bb) {
      return db = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, db(bb)
    }

    function rb() {
      return rb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, rb.apply(this, arguments)
    }

    function jb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function nb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? jb(Object(hb), !0).forEach((function(ub) {
          Db(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : jb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Db(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != db(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != db(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == db(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function xb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function zb(bb, ub) {
      var hb = bb.x,
        Bb = bb.y,
        Ob = xb(bb, Cb),
        Gb = "".concat(hb),
        Ub = parseInt(Gb, 10),
        Lb = "".concat(Bb),
        Yb = parseInt(Lb, 10),
        Sb = "".concat(ub.height || Ob.height),
        ab = parseInt(Sb, 10),
        Hb = "".concat(ub.width || Ob.width),
        wb = parseInt(Hb, 10);
      return nb(nb(nb(nb(nb({}, ub), Ob), Ub ? {
        x: Ub
      } : {}), Yb ? {
        y: Yb
      } : {}), {}, {
        height: ab,
        width: wb,
        name: ub.name,
        radius: ub.radius
      })
    }

    function gb(bb) {
      return Bb.createElement(Wb.d, rb({
        shapeType: "rectangle",
        propTransformer: zb,
        activeClassName: "recharts-active-bar"
      }, bb))
    }
    var ib, vb = ["value", "background"];

    function tb(bb) {
      return tb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, tb(bb)
    }

    function Jb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function eb() {
      return eb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, eb.apply(this, arguments)
    }

    function Nb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function sb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Nb(Object(hb), !0).forEach((function(ub) {
          Eb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Nb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Mb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, yb(Bb.key), Bb)
      }
    }

    function mb(bb, ub, hb) {
      return ub = Pb(ub),
        function(bb, ub) {
          if (ub && ("object" === tb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Ib() ? Reflect.construct(ub, hb || [], Pb(bb).constructor) : ub.apply(bb, hb))
    }

    function Ib() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Ib = function() {
        return !!bb
      })()
    }

    function Pb(bb) {
      return Pb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Pb(bb)
    }

    function qb(bb, ub) {
      return qb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, qb(bb, ub)
    }

    function Eb(bb, ub, hb) {
      return (ub = yb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function yb(bb) {
      var ub = function(bb, ub) {
        if ("object" != tb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != tb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == tb(ub) ? ub : ub + ""
    }
    var Vb = function(bb) {
      function ub() {
        var bb;
        ! function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub);
        for (var hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        return Eb(bb = mb(this, ub, [].concat(Bb)), "state", {
          isAnimationFinished: !1
        }), Eb(bb, "id", (0, Xb.G)("recharts-bar-")), Eb(bb, "handleAnimationEnd", (function() {
          var ub = bb.props.onAnimationEnd;
          bb.setState({
            isAnimationFinished: !0
          }), ub && ub()
        })), Eb(bb, "handleAnimationStart", (function() {
          var ub = bb.props.onAnimationStart;
          bb.setState({
            isAnimationFinished: !1
          }), ub && ub()
        })), bb
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && qb(bb, ub)
      }(ub, bb), hb = ub, Ub = [{
        key: "renderRectanglesStatically",
        value: function(bb) {
          var ub = this,
            hb = this.props,
            Ob = hb.shape,
            Gb = hb.dataKey,
            Ub = hb.activeIndex,
            Lb = hb.activeBar,
            Yb = (0, pb.b)(this.props, !1);
          return bb && bb.map((function(bb, hb) {
            var Sb = hb === Ub,
              Hb = Sb ? Lb : Ob,
              wb = sb(sb(sb({}, Yb), bb), {}, {
                isActive: Sb,
                option: Hb,
                index: hb,
                dataKey: Gb,
                onAnimationStart: ub.handleAnimationStart,
                onAnimationEnd: ub.handleAnimationEnd
              });
            return Bb.createElement(ab.c, eb({
              className: "recharts-bar-rectangle"
            }, (0, lb.q)(ub.props, bb, hb), {
              key: "rectangle-".concat(null === bb || void 0 === bb ? void 0 : bb.x, "-").concat(null === bb || void 0 === bb ? void 0 : bb.y, "-").concat(null === bb || void 0 === bb ? void 0 : bb.value, "-").concat(hb)
            }), Bb.createElement(gb, wb))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var bb = this,
            ub = this.props,
            hb = ub.data,
            Ob = ub.layout,
            Ub = ub.isAnimationActive,
            Lb = ub.animationBegin,
            Yb = ub.animationDuration,
            Sb = ub.animationEasing,
            Hb = ub.animationId,
            wb = this.state.prevData;
          return Bb.createElement(Gb.e, {
            kw: Lb,
            duration: Yb,
            isActive: Ub,
            easing: Sb,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(Hb),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(ub) {
            var Gb = ub.t,
              Ub = hb.map((function(bb, ub) {
                var hb = wb && wb[ub];
                if (hb) {
                  var Bb = (0, Xb.s)(hb.x, bb.x),
                    Ub = (0, Xb.s)(hb.y, bb.y),
                    Lb = (0, Xb.s)(hb.width, bb.width),
                    Yb = (0, Xb.s)(hb.height, bb.height);
                  return sb(sb({}, bb), {}, {
                    x: Bb(Gb),
                    y: Ub(Gb),
                    width: Lb(Gb),
                    height: Yb(Gb)
                  })
                }
                if ("horizontal" === Ob) {
                  var Sb = (0, Xb.s)(0, bb.height)(Gb);
                  return sb(sb({}, bb), {}, {
                    y: bb.y + bb.height - Sb,
                    height: Sb
                  })
                }
                var ab = (0, Xb.s)(0, bb.width)(Gb);
                return sb(sb({}, bb), {}, {
                  width: ab
                })
              }));
            return Bb.createElement(ab.c, null, bb.renderRectanglesStatically(Ub))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var bb = this.props,
            ub = bb.data,
            hb = bb.isAnimationActive,
            Bb = this.state.prevData;
          return !(hb && ub && ub.length) || Bb && Lb()(Bb, ub) ? this.renderRectanglesStatically(ub) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var bb = this,
            ub = this.props,
            hb = ub.data,
            Ob = ub.dataKey,
            Gb = ub.activeIndex,
            Ub = (0, pb.b)(this.props.background, !1);
          return hb.map((function(ub, hb) {
            ub.value;
            var Lb = ub.background,
              Yb = Jb(ub, vb);
            if (!Lb) return null;
            var Sb = sb(sb(sb(sb(sb({}, Yb), {}, {
              fill: "#eee"
            }, Lb), Ub), (0, lb.q)(bb.props, ub, hb)), {}, {
              onAnimationStart: bb.handleAnimationStart,
              onAnimationEnd: bb.handleAnimationEnd,
              dataKey: Ob,
              index: hb,
              className: "recharts-bar-background-rectangle"
            });
            return Bb.createElement(gb, eb({
              key: "background-bar-".concat(hb),
              option: bb.props.background,
              isActive: hb === Gb
            }, Sb))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(bb, ub) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var hb = this.props,
            Ob = hb.data,
            Gb = hb.xAxis,
            Ub = hb.yAxis,
            Lb = hb.layout,
            Yb = hb.children,
            Sb = (0, pb.c)(Yb, Hb.e);
          if (!Sb) return null;
          var wb = "vertical" === Lb ? Ob[0].height / 2 : Ob[0].width / 2,
            Zb = function(bb, ub) {
              var hb = Array.isArray(bb.value) ? bb.value[1] : bb.value;
              return {
                x: bb.x,
                y: bb.y,
                value: hb,
                errorVal: (0, Ab.W)(bb, ub)
              }
            },
            Xb = {
              clipPath: bb ? "url(#clipPath-".concat(ub, ")") : null
            };
          return Bb.createElement(ab.c, Xb, Sb.map((function(bb) {
            return Bb.cloneElement(bb, {
              key: "error-bar-".concat(ub, "-").concat(bb.props.dataKey),
              data: Ob,
              xAxis: Gb,
              yAxis: Ub,
              layout: Lb,
              offset: wb,
              dataPointFormatter: Zb
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var bb = this.props,
            ub = bb.hide,
            hb = bb.data,
            Gb = bb.className,
            Ub = bb.xAxis,
            Lb = bb.yAxis,
            Yb = bb.left,
            Hb = bb.top,
            wb = bb.width,
            Xb = bb.height,
            pb = bb.isAnimationActive,
            ob = bb.background,
            Ab = bb.id;
          if (ub || !hb || !hb.length) return null;
          var lb = this.state.isAnimationFinished,
            Kb = (0, Ob.e)("recharts-bar", Gb),
            Wb = Ub && Ub.allowDataOverflow,
            Cb = Lb && Lb.allowDataOverflow,
            db = Wb || Cb,
            rb = Sb()(Ab) ? this.id : Ab;
          return Bb.createElement(ab.c, {
            className: Kb
          }, Wb || Cb ? Bb.createElement("defs", null, Bb.createElement("clipPath", {
            id: "clipPath-".concat(rb)
          }, Bb.createElement("rect", {
            x: Wb ? Yb : Yb - wb / 2,
            y: Cb ? Hb : Hb - Xb / 2,
            width: Wb ? wb : 2 * wb,
            height: Cb ? Xb : 2 * Xb
          }))) : null, Bb.createElement(ab.c, {
            className: "recharts-bar-rectangles",
            clipPath: db ? "url(#clipPath-".concat(rb, ")") : null
          }, ob ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(db, rb), (!pb || lb) && Zb.d.renderCallByParent(this.props, hb))
        }
      }], Yb = [{
        key: "getDerivedStateFromProps",
        value: function(bb, ub) {
          return bb.animationId !== ub.prevAnimationId ? {
            prevAnimationId: bb.animationId,
            curData: bb.data,
            prevData: ub.curData
          } : bb.data !== ub.curData ? {
            curData: bb.data
          } : null
        }
      }], Ub && Mb(hb.prototype, Ub), Yb && Mb(hb, Yb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Ub, Yb
    }(Bb.PureComponent);
    ib = Vb, Eb(Vb, "displayName", "Bar"), Eb(Vb, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !ob.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), Eb(Vb, "getComposedData", (function(bb) {
      var ub = bb.props,
        hb = bb.item,
        Bb = bb.barPosition,
        Ob = bb.bandSize,
        Gb = bb.xAxis,
        Ub = bb.yAxis,
        Lb = bb.xAxisTicks,
        Yb = bb.yAxisTicks,
        Sb = bb.stackedData,
        ab = bb.dataStartIndex,
        Hb = bb.displayedData,
        Zb = bb.offset,
        ob = (0, Ab.k)(Bb, hb);
      if (!ob) return null;
      var lb = ub.layout,
        Wb = hb.type.defaultProps,
        Cb = void 0 !== Wb ? sb(sb({}, Wb), hb.props) : hb.props,
        db = Cb.dataKey,
        rb = Cb.children,
        jb = Cb.minPointSize,
        nb = "horizontal" === lb ? Ub : Gb,
        Db = Sb ? nb.scale.domain() : null,
        xb = (0, Ab.s)({
          numericAxis: nb
        }),
        zb = (0, pb.c)(rb, wb.b),
        gb = Hb.map((function(bb, ub) {
          var Bb, Hb, wb, Zb, pb, Wb;
          Sb ? Bb = (0, Ab.fb)(Sb[ab + ub], Db) : (Bb = (0, Ab.W)(bb, db), Array.isArray(Bb) || (Bb = [xb, Bb]));
          var Cb = function(bb) {
            var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(hb, Bb) {
              if ("number" === typeof bb) return bb;
              var Ob = (0, Xb.z)(hb) || (0, Xb.w)(hb);
              return Ob ? bb(hb, Bb) : (Ob || (0, Kb.e)(!1), ub)
            }
          }(jb, ib.defaultProps.minPointSize)(Bb[1], ub);
          if ("horizontal" === lb) {
            var rb, nb = [Ub.scale(Bb[0]), Ub.scale(Bb[1])],
              gb = nb[0],
              vb = nb[1];
            Hb = (0, Ab.w)({
              axis: Gb,
              ticks: Lb,
              bandSize: Ob,
              offset: ob.offset,
              entry: bb,
              index: ub
            }), wb = null !== (rb = null !== vb && void 0 !== vb ? vb : gb) && void 0 !== rb ? rb : void 0, Zb = ob.size;
            var tb = gb - vb;
            if (pb = Number.isNaN(tb) ? 0 : tb, Wb = {
                x: Hb,
                y: Ub.y,
                width: Zb,
                height: Ub.height
              }, Math.abs(Cb) > 0 && Math.abs(pb) < Math.abs(Cb)) {
              var Jb = (0, Xb.E)(pb || Cb) * (Math.abs(Cb) - Math.abs(pb));
              wb -= Jb, pb += Jb
            }
          } else {
            var eb = [Gb.scale(Bb[0]), Gb.scale(Bb[1])],
              Nb = eb[0],
              Mb = eb[1];
            if (Hb = Nb, wb = (0, Ab.w)({
                axis: Ub,
                ticks: Yb,
                bandSize: Ob,
                offset: ob.offset,
                entry: bb,
                index: ub
              }), Zb = Mb - Nb, pb = ob.size, Wb = {
                x: Gb.x,
                y: wb,
                width: Gb.width,
                height: pb
              }, Math.abs(Cb) > 0 && Math.abs(Zb) < Math.abs(Cb)) Zb += (0, Xb.E)(Zb || Cb) * (Math.abs(Cb) - Math.abs(Zb))
          }
          return sb(sb(sb({}, bb), {}, {
            x: Hb,
            y: wb,
            width: Zb,
            height: pb,
            value: Sb ? Bb : Bb[1],
            payload: bb,
            background: Wb
          }, zb && zb[ub] && zb[ub].props), {}, {
            tooltipPayload: [(0, Ab.U)(hb, bb)],
            tooltipPosition: {
              x: Hb + Zb / 2,
              y: wb + pb / 2
            }
          })
        }));
      return sb({
        data: gb,
        layout: lb
      }, Zb)
    }))
  },
  6113: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => tb
    });
    var Bb = hb(49),
      Ob = hb(5019),
      Gb = hb.n(Ob),
      Ub = hb(4940),
      Lb = hb.n(Ub),
      Yb = hb(4831),
      Sb = hb(5200),
      ab = hb(5710),
      Hb = hb(5859),
      wb = hb(5958),
      Zb = hb(4918),
      Xb = hb(5207),
      pb = hb(5181),
      ob = hb(6119),
      Ab = ["viewBox"],
      lb = ["viewBox"],
      Kb = ["ticks"];

    function Wb(bb) {
      return Wb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Wb(bb)
    }

    function Cb() {
      return Cb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Cb.apply(this, arguments)
    }

    function db(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function rb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? db(Object(hb), !0).forEach((function(ub) {
          ib(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : db(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function jb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function nb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, vb(Bb.key), Bb)
      }
    }

    function Db(bb, ub, hb) {
      return ub = zb(ub),
        function(bb, ub) {
          if (ub && ("object" === Wb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, xb() ? Reflect.construct(ub, hb || [], zb(bb).constructor) : ub.apply(bb, hb))
    }

    function xb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (xb = function() {
        return !!bb
      })()
    }

    function zb(bb) {
      return zb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, zb(bb)
    }

    function gb(bb, ub) {
      return gb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, gb(bb, ub)
    }

    function ib(bb, ub, hb) {
      return (ub = vb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function vb(bb) {
      var ub = function(bb, ub) {
        if ("object" != Wb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Wb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Wb(ub) ? ub : ub + ""
    }
    var tb = function(bb) {
      function ub(bb) {
        var hb;
        return function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub), (hb = Db(this, ub, [bb])).state = {
          fontSize: "",
          letterSpacing: ""
        }, hb
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && gb(bb, ub)
      }(ub, bb), hb = ub, Ub = [{
        key: "renderTickItem",
        value: function(bb, ub, hb) {
          var Ob = (0, Yb.e)(ub.className, "recharts-cartesian-axis-tick-value");
          return Bb.isValidElement(bb) ? Bb.cloneElement(bb, rb(rb({}, ub), {}, {
            className: Ob
          })) : Gb()(bb) ? bb(rb(rb({}, ub), {}, {
            className: Ob
          })) : Bb.createElement(Hb.e, Cb({}, ub, {
            className: "recharts-cartesian-axis-tick-value"
          }), hb)
        }
      }], (Ob = [{
        key: "shouldComponentUpdate",
        value: function(bb, ub) {
          var hb = bb.viewBox,
            Bb = jb(bb, Ab),
            Ob = this.props,
            Gb = Ob.viewBox,
            Ub = jb(Ob, lb);
          return !(0, Sb.c)(hb, Gb) || !(0, Sb.c)(Bb, Ub) || !(0, Sb.c)(ub, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var bb = this.layerReference;
          if (bb) {
            var ub = bb.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            ub && this.setState({
              fontSize: window.getComputedStyle(ub).fontSize,
              letterSpacing: window.getComputedStyle(ub).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(bb) {
          var ub, hb, Bb, Ob, Gb, Ub, Lb = this.props,
            Yb = Lb.x,
            Sb = Lb.y,
            ab = Lb.width,
            Hb = Lb.height,
            wb = Lb.orientation,
            Xb = Lb.tickSize,
            pb = Lb.mirror,
            ob = Lb.tickMargin,
            Ab = pb ? -1 : 1,
            lb = bb.tickSize || Xb,
            Kb = (0, Zb.z)(bb.tickCoord) ? bb.tickCoord : bb.coordinate;
          switch (wb) {
            case "top":
              ub = hb = bb.coordinate, Ub = (Bb = (Ob = Sb + +!pb * Hb) - Ab * lb) - Ab * ob, Gb = Kb;
              break;
            case "left":
              Bb = Ob = bb.coordinate, Gb = (ub = (hb = Yb + +!pb * ab) - Ab * lb) - Ab * ob, Ub = Kb;
              break;
            case "right":
              Bb = Ob = bb.coordinate, Gb = (ub = (hb = Yb + +pb * ab) + Ab * lb) + Ab * ob, Ub = Kb;
              break;
            default:
              ub = hb = bb.coordinate, Ub = (Bb = (Ob = Sb + +pb * Hb) + Ab * lb) + Ab * ob, Gb = Kb
          }
          return {
            line: {
              x1: ub,
              y1: Bb,
              x2: hb,
              y2: Ob
            },
            gH: {
              x: Gb,
              y: Ub
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var bb, ub = this.props,
            hb = ub.orientation,
            Bb = ub.mirror;
          switch (hb) {
            case "left":
              bb = Bb ? "start" : "end";
              break;
            case "right":
              bb = Bb ? "end" : "start";
              break;
            default:
              bb = "middle"
          }
          return bb
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var bb = this.props,
            ub = bb.orientation,
            hb = bb.mirror,
            Bb = "end";
          switch (ub) {
            case "left":
            case "right":
              Bb = "middle";
              break;
            case "top":
              Bb = hb ? "start" : "end";
              break;
            default:
              Bb = hb ? "end" : "start"
          }
          return Bb
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var bb = this.props,
            ub = bb.x,
            hb = bb.y,
            Ob = bb.width,
            Gb = bb.height,
            Ub = bb.orientation,
            Sb = bb.mirror,
            ab = bb.axisLine,
            Hb = rb(rb(rb({}, (0, pb.b)(this.props, !1)), (0, pb.b)(ab, !1)), {}, {
              fill: "none"
            });
          if ("top" === Ub || "bottom" === Ub) {
            var wb = +("top" === Ub && !Sb || "bottom" === Ub && Sb);
            Hb = rb(rb({}, Hb), {}, {
              x1: ub,
              y1: hb + wb * Gb,
              x2: ub + Ob,
              y2: hb + wb * Gb
            })
          } else {
            var Zb = +("left" === Ub && !Sb || "right" === Ub && Sb);
            Hb = rb(rb({}, Hb), {}, {
              x1: ub + Zb * Ob,
              y1: hb,
              x2: ub + Zb * Ob,
              y2: hb + Gb
            })
          }
          return Bb.createElement("line", Cb({}, Hb, {
            className: (0, Yb.e)("recharts-cartesian-axis-line", Lb()(ab, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(bb, hb, Ob) {
          var Ub = this,
            Sb = this.props,
            Hb = Sb.tickLine,
            wb = Sb.stroke,
            Zb = Sb.gH,
            Ab = Sb.tickFormatter,
            lb = Sb.unit,
            Kb = (0, ob.e)(rb(rb({}, this.props), {}, {
              ticks: bb
            }), hb, Ob),
            Wb = this.getTickTextAnchor(),
            db = this.getTickVerticalAnchor(),
            jb = (0, pb.b)(this.props, !1),
            nb = (0, pb.b)(Zb, !1),
            Db = rb(rb({}, jb), {}, {
              fill: "none"
            }, (0, pb.b)(Hb, !1)),
            xb = Kb.map((function(bb, hb) {
              var Ob = Ub.getTickLineCoord(bb),
                Sb = Ob.line,
                pb = Ob.gH,
                ob = rb(rb(rb(rb({
                  textAnchor: Wb,
                  verticalAnchor: db
                }, jb), {}, {
                  stroke: "none",
                  fill: wb
                }, nb), pb), {}, {
                  index: hb,
                  payload: bb,
                  visibleTicksCount: Kb.length,
                  tickFormatter: Ab
                });
              return Bb.createElement(ab.c, Cb({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(bb.value, "-").concat(bb.coordinate, "-").concat(bb.tickCoord)
              }, (0, Xb.q)(Ub.props, bb, hb)), Hb && Bb.createElement("line", Cb({}, Db, Sb, {
                className: (0, Yb.e)("recharts-cartesian-axis-tick-line", Lb()(Hb, "className"))
              })), Zb && ub.renderTickItem(Zb, ob, "".concat(Gb()(Ab) ? Ab(bb.value, hb) : bb.value).concat(lb || "")))
            }));
          return Bb.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, xb)
        }
      }, {
        key: "render",
        value: function() {
          var bb = this,
            ub = this.props,
            hb = ub.axisLine,
            Ob = ub.width,
            Ub = ub.height,
            Lb = ub.ticksGenerator,
            Sb = ub.className;
          if (ub.hide) return null;
          var Hb = this.props,
            Zb = Hb.ticks,
            Xb = jb(Hb, Kb),
            pb = Zb;
          return Gb()(Lb) && (pb = Zb && Zb.length > 0 ? Lb(this.props) : Lb(Xb)), Ob <= 0 || Ub <= 0 || !pb || !pb.length ? null : Bb.createElement(ab.c, {
            className: (0, Yb.e)("recharts-cartesian-axis", Sb),
            ref: function(ub) {
              bb.layerReference = ub
            }
          }, hb && this.renderAxisLine(), this.renderTicks(pb, this.state.fontSize, this.state.letterSpacing), wb.e.renderCallByParent(this.props))
        }
      }]) && nb(hb.prototype, Ob), Ub && nb(hb, Ub), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Ob, Ub
    }(Bb.Component);
    ib(tb, "displayName", "CartesianAxis"), ib(tb, "defaultProps", {
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
      gH: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6132: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ib
    });
    var Bb = hb(49),
      Ob = hb(5019),
      Gb = hb.n(Ob),
      Ub = hb(5178),
      Lb = hb(4918),
      Yb = hb(5181),
      Sb = hb(5871),
      ab = hb(6119),
      Hb = hb(6113),
      wb = hb(6067),
      Zb = ["x1", "y1", "x2", "y2", "key"],
      Xb = ["offset"];

    function pb(bb) {
      return pb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, pb(bb)
    }

    function ob(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Ab(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? ob(Object(hb), !0).forEach((function(ub) {
          lb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : ob(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function lb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != pb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != pb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == pb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Kb() {
      return Kb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Kb.apply(this, arguments)
    }

    function Wb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }
    var Cb = function(bb) {
      var ub = bb.fill;
      if (!ub || "none" === ub) return null;
      var hb = bb.fillOpacity,
        Ob = bb.x,
        Gb = bb.y,
        Ub = bb.width,
        Lb = bb.height,
        Yb = bb.ry;
      return Bb.createElement("rect", {
        x: Ob,
        y: Gb,
        ry: Yb,
        width: Ub,
        height: Lb,
        stroke: "none",
        fill: ub,
        fillOpacity: hb,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function db(bb, ub) {
      var hb;
      if (Bb.isValidElement(bb)) hb = Bb.cloneElement(bb, ub);
      else if (Gb()(bb)) hb = bb(ub);
      else {
        var Ob = ub.x1,
          Ub = ub.y1,
          Lb = ub.x2,
          Sb = ub.y2,
          ab = ub.key,
          Hb = Wb(ub, Zb),
          wb = (0, Yb.b)(Hb, !1),
          pb = (wb.offset, Wb(wb, Xb));
        hb = Bb.createElement("line", Kb({}, pb, {
          x1: Ob,
          y1: Ub,
          x2: Lb,
          y2: Sb,
          fill: "none",
          key: ab
        }))
      }
      return hb
    }

    function rb(bb) {
      var ub = bb.x,
        hb = bb.width,
        Ob = bb.horizontal,
        Gb = void 0 === Ob || Ob,
        Ub = bb.horizontalPoints;
      if (!Gb || !Ub || !Ub.length) return null;
      var Lb = Ub.map((function(Bb, Ob) {
        var Ub = Ab(Ab({}, bb), {}, {
          x1: ub,
          y1: Bb,
          x2: ub + hb,
          y2: Bb,
          key: "line-".concat(Ob),
          index: Ob
        });
        return db(Gb, Ub)
      }));
      return Bb.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, Lb)
    }

    function jb(bb) {
      var ub = bb.y,
        hb = bb.height,
        Ob = bb.vertical,
        Gb = void 0 === Ob || Ob,
        Ub = bb.verticalPoints;
      if (!Gb || !Ub || !Ub.length) return null;
      var Lb = Ub.map((function(Bb, Ob) {
        var Ub = Ab(Ab({}, bb), {}, {
          x1: Bb,
          y1: ub,
          x2: Bb,
          y2: ub + hb,
          key: "line-".concat(Ob),
          index: Ob
        });
        return db(Gb, Ub)
      }));
      return Bb.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, Lb)
    }

    function nb(bb) {
      var ub = bb.horizontalFill,
        hb = bb.fillOpacity,
        Ob = bb.x,
        Gb = bb.y,
        Ub = bb.width,
        Lb = bb.height,
        Yb = bb.horizontalPoints,
        Sb = bb.horizontal;
      if (!(void 0 === Sb || Sb) || !ub || !ub.length) return null;
      var ab = Yb.map((function(bb) {
        return Math.round(bb + Gb - Gb)
      })).sort((function(bb, ub) {
        return bb - ub
      }));
      Gb !== ab[0] && ab.unshift(0);
      var Hb = ab.map((function(bb, Yb) {
        var Sb = !ab[Yb + 1] ? Gb + Lb - bb : ab[Yb + 1] - bb;
        if (Sb <= 0) return null;
        var Hb = Yb % ub.length;
        return Bb.createElement("rect", {
          key: "react-".concat(Yb),
          y: bb,
          x: Ob,
          height: Sb,
          width: Ub,
          stroke: "none",
          fill: ub[Hb],
          fillOpacity: hb,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Bb.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, Hb)
    }

    function Db(bb) {
      var ub = bb.vertical,
        hb = void 0 === ub || ub,
        Ob = bb.verticalFill,
        Gb = bb.fillOpacity,
        Ub = bb.x,
        Lb = bb.y,
        Yb = bb.width,
        Sb = bb.height,
        ab = bb.verticalPoints;
      if (!hb || !Ob || !Ob.length) return null;
      var Hb = ab.map((function(bb) {
        return Math.round(bb + Ub - Ub)
      })).sort((function(bb, ub) {
        return bb - ub
      }));
      Ub !== Hb[0] && Hb.unshift(0);
      var wb = Hb.map((function(bb, ub) {
        var hb = !Hb[ub + 1] ? Ub + Yb - bb : Hb[ub + 1] - bb;
        if (hb <= 0) return null;
        var ab = ub % Ob.length;
        return Bb.createElement("rect", {
          key: "react-".concat(ub),
          x: bb,
          y: Lb,
          width: hb,
          height: Sb,
          stroke: "none",
          fill: Ob[ab],
          fillOpacity: Gb,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Bb.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, wb)
    }
    var xb = function(bb, ub) {
        var hb = bb.xAxis,
          Bb = bb.width,
          Ob = bb.height,
          Gb = bb.offset;
        return (0, Sb.A)((0, ab.e)(Ab(Ab(Ab({}, Hb.c.defaultProps), hb), {}, {
          ticks: (0, Sb.P)(hb, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Bb,
            height: Ob
          }
        })), Gb.left, Gb.left + Gb.width, ub)
      },
      zb = function(bb, ub) {
        var hb = bb.yAxis,
          Bb = bb.width,
          Ob = bb.height,
          Gb = bb.offset;
        return (0, Sb.A)((0, ab.e)(Ab(Ab(Ab({}, Hb.c.defaultProps), hb), {}, {
          ticks: (0, Sb.P)(hb, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Bb,
            height: Ob
          }
        })), Gb.top, Gb.top + Gb.height, ub)
      },
      gb = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function ib(bb) {
      var ub, hb, Ob, Yb, Sb, ab, Hb = (0, wb.j)(),
        Zb = (0, wb.h)(),
        Xb = (0, wb.n)(),
        ob = Ab(Ab({}, bb), {}, {
          stroke: null !== (ub = bb.stroke) && void 0 !== ub ? ub : gb.stroke,
          fill: null !== (hb = bb.fill) && void 0 !== hb ? hb : gb.fill,
          horizontal: null !== (Ob = bb.horizontal) && void 0 !== Ob ? Ob : gb.horizontal,
          horizontalFill: null !== (Yb = bb.horizontalFill) && void 0 !== Yb ? Yb : gb.horizontalFill,
          vertical: null !== (Sb = bb.vertical) && void 0 !== Sb ? Sb : gb.vertical,
          verticalFill: null !== (ab = bb.verticalFill) && void 0 !== ab ? ab : gb.verticalFill,
          x: (0, Lb.z)(bb.x) ? bb.x : Xb.left,
          y: (0, Lb.z)(bb.y) ? bb.y : Xb.top,
          width: (0, Lb.z)(bb.width) ? bb.width : Xb.width,
          height: (0, Lb.z)(bb.height) ? bb.height : Xb.height
        }),
        lb = ob.x,
        Wb = ob.y,
        db = ob.width,
        ib = ob.height,
        vb = ob.syncWithTicks,
        tb = ob.horizontalValues,
        Jb = ob.verticalValues,
        eb = (0, wb.d)(),
        Nb = (0, wb.v)();
      if (!(0, Lb.z)(db) || db <= 0 || !(0, Lb.z)(ib) || ib <= 0 || !(0, Lb.z)(lb) || lb !== +lb || !(0, Lb.z)(Wb) || Wb !== +Wb) return null;
      var sb = ob.verticalCoordinatesGenerator || xb,
        Mb = ob.horizontalCoordinatesGenerator || zb,
        mb = ob.horizontalPoints,
        Ib = ob.verticalPoints;
      if ((!mb || !mb.length) && Gb()(Mb)) {
        var Pb = tb && tb.length,
          qb = Mb({
            yAxis: Nb ? Ab(Ab({}, Nb), {}, {
              ticks: Pb ? tb : Nb.ticks
            }) : void 0,
            width: Hb,
            height: Zb,
            offset: Xb
          }, !!Pb || vb);
        (0, Ub.e)(Array.isArray(qb), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(pb(qb), "]")), Array.isArray(qb) && (mb = qb)
      }
      if ((!Ib || !Ib.length) && Gb()(sb)) {
        var Eb = Jb && Jb.length,
          yb = sb({
            xAxis: eb ? Ab(Ab({}, eb), {}, {
              ticks: Eb ? Jb : eb.ticks
            }) : void 0,
            width: Hb,
            height: Zb,
            offset: Xb
          }, !!Eb || vb);
        (0, Ub.e)(Array.isArray(yb), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(pb(yb), "]")), Array.isArray(yb) && (Ib = yb)
      }
      return Bb.createElement("g", {
        className: "recharts-cartesian-grid"
      }, Bb.createElement(Cb, {
        fill: ob.fill,
        fillOpacity: ob.fillOpacity,
        x: ob.x,
        y: ob.y,
        width: ob.width,
        height: ob.height,
        ry: ob.ry
      }), Bb.createElement(rb, Kb({}, ob, {
        offset: Xb,
        horizontalPoints: mb,
        xAxis: eb,
        yAxis: Nb
      })), Bb.createElement(jb, Kb({}, ob, {
        offset: Xb,
        verticalPoints: Ib,
        xAxis: eb,
        yAxis: Nb
      })), Bb.createElement(nb, Kb({}, ob, {
        horizontalPoints: mb
      })), Bb.createElement(Db, Kb({}, ob, {
        verticalPoints: Ib
      })))
    }
    ib.displayName = "CartesianGrid"
  },
  5937: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Wb
    });
    var Bb = hb(49),
      Ob = hb(5700),
      Gb = hb(5710),
      Ub = hb(5181),
      Lb = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function Yb(bb) {
      return Yb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Yb(bb)
    }

    function Sb() {
      return Sb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Sb.apply(this, arguments)
    }

    function ab(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return Hb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return Hb(bb, ub)
      }(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function wb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function Zb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Kb(Bb.key), Bb)
      }
    }

    function Xb(bb, ub, hb) {
      return ub = ob(ub),
        function(bb, ub) {
          if (ub && ("object" === Yb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, pb() ? Reflect.construct(ub, hb || [], ob(bb).constructor) : ub.apply(bb, hb))
    }

    function pb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (pb = function() {
        return !!bb
      })()
    }

    function ob(bb) {
      return ob = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, ob(bb)
    }

    function Ab(bb, ub) {
      return Ab = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, Ab(bb, ub)
    }

    function lb(bb, ub, hb) {
      return (ub = Kb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Kb(bb) {
      var ub = function(bb, ub) {
        if ("object" != Yb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Yb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Yb(ub) ? ub : ub + ""
    }
    var Wb = function(bb) {
      function ub() {
        return function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub), Xb(this, ub, arguments)
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && Ab(bb, ub)
      }(ub, bb), hb = ub, (Yb = [{
        key: "render",
        value: function() {
          var bb = this.props,
            ub = bb.offset,
            hb = bb.layout,
            Yb = bb.width,
            Hb = bb.dataKey,
            Zb = bb.data,
            Xb = bb.dataPointFormatter,
            pb = bb.xAxis,
            ob = bb.yAxis,
            Ab = wb(bb, Lb),
            lb = (0, Ub.b)(Ab, !1);
          "x" === this.props.direction && "number" !== pb.type && (0, Ob.e)(!1);
          var Kb = Zb.map((function(bb) {
            var Ob = Xb(bb, Hb),
              Ub = Ob.x,
              Lb = Ob.y,
              wb = Ob.value,
              Zb = Ob.errorVal;
            if (!Zb) return null;
            var Ab, Kb, Wb = [];
            if (Array.isArray(Zb)) {
              var Cb = ab(Zb, 2);
              Ab = Cb[0], Kb = Cb[1]
            } else Ab = Kb = Zb;
            if ("vertical" === hb) {
              var db = pb.scale,
                rb = Lb + ub,
                jb = rb + Yb,
                nb = rb - Yb,
                Db = db(wb - Ab),
                xb = db(wb + Kb);
              Wb.push({
                x1: xb,
                y1: jb,
                x2: xb,
                y2: nb
              }), Wb.push({
                x1: Db,
                y1: rb,
                x2: xb,
                y2: rb
              }), Wb.push({
                x1: Db,
                y1: jb,
                x2: Db,
                y2: nb
              })
            } else if ("horizontal" === hb) {
              var zb = ob.scale,
                gb = Ub + ub,
                ib = gb - Yb,
                vb = gb + Yb,
                tb = zb(wb - Ab),
                Jb = zb(wb + Kb);
              Wb.push({
                x1: ib,
                y1: Jb,
                x2: vb,
                y2: Jb
              }), Wb.push({
                x1: gb,
                y1: tb,
                x2: gb,
                y2: Jb
              }), Wb.push({
                x1: ib,
                y1: tb,
                x2: vb,
                y2: tb
              })
            }
            return Bb.createElement(Gb.c, Sb({
              className: "recharts-errorBar",
              key: "bar-".concat(Wb.map((function(bb) {
                return "".concat(bb.x1, "-").concat(bb.x2, "-").concat(bb.y1, "-").concat(bb.y2)
              })))
            }, lb), Wb.map((function(bb) {
              return Bb.createElement("line", Sb({}, bb, {
                key: "line-".concat(bb.x1, "-").concat(bb.x2, "-").concat(bb.y1, "-").concat(bb.y2)
              }))
            })))
          }));
          return Bb.createElement(Gb.c, {
            className: "recharts-errorBars"
          }, Kb)
        }
      }]) && Zb(hb.prototype, Yb), Hb && Zb(hb, Hb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Yb, Hb
    }(Bb.Component);
    lb(Wb, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), lb(Wb, "displayName", "ErrorBar")
  },
  6105: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Mb
    });
    var Bb = hb(49),
      Ob = hb(5855),
      Gb = hb(5019),
      Ub = hb.n(Gb),
      Lb = hb(5175),
      Yb = hb.n(Lb),
      Sb = hb(5923),
      ab = hb.n(Sb),
      Hb = hb(4831),
      wb = hb(6088),
      Zb = hb(5850),
      Xb = hb(5710),
      pb = hb(6016),
      ob = hb(5937),
      Ab = hb(4918),
      lb = hb(5181),
      Kb = hb(5718),
      Wb = hb(5871),
      Cb = ["type", "layout", "connectNulls", "ref"],
      db = ["key"];

    function rb(bb) {
      return rb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, rb(bb)
    }

    function jb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function nb() {
      return nb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, nb.apply(this, arguments)
    }

    function Db(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function xb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Db(Object(hb), !0).forEach((function(ub) {
          Nb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Db(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function zb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return gb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return gb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return gb(bb, ub)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function ib(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, sb(Bb.key), Bb)
      }
    }

    function vb(bb, ub, hb) {
      return ub = Jb(ub),
        function(bb, ub) {
          if (ub && ("object" === rb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, tb() ? Reflect.construct(ub, hb || [], Jb(bb).constructor) : ub.apply(bb, hb))
    }

    function tb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (tb = function() {
        return !!bb
      })()
    }

    function Jb(bb) {
      return Jb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Jb(bb)
    }

    function eb(bb, ub) {
      return eb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, eb(bb, ub)
    }

    function Nb(bb, ub, hb) {
      return (ub = sb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function sb(bb) {
      var ub = function(bb, ub) {
        if ("object" != rb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != rb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == rb(ub) ? ub : ub + ""
    }
    var Mb = function(bb) {
      function ub() {
        var bb;
        ! function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub);
        for (var hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        return Nb(bb = vb(this, ub, [].concat(Bb)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), Nb(bb, "generateSimpleStrokeDasharray", (function(bb, ub) {
          return "".concat(ub, "px ").concat(bb - ub, "px")
        })), Nb(bb, "getStrokeDasharray", (function(hb, Bb, Ob) {
          var Gb = Ob.reduce((function(bb, ub) {
            return bb + ub
          }));
          if (!Gb) return bb.generateSimpleStrokeDasharray(Bb, hb);
          for (var Ub = Math.floor(hb / Gb), Lb = hb % Gb, Yb = Bb - hb, Sb = [], ab = 0, Hb = 0; ab < Ob.length; Hb += Ob[ab], ++ab)
            if (Hb + Ob[ab] > Lb) {
              Sb = [].concat(zb(Ob.slice(0, ab)), [Lb - Hb]);
              break
            } var wb = Sb.length % 2 === 0 ? [0, Yb] : [Yb];
          return [].concat(zb(ub.repeat(Ob, Ub)), zb(Sb), wb).map((function(bb) {
            return "".concat(bb, "px")
          })).join(", ")
        })), Nb(bb, "id", (0, Ab.G)("recharts-line-")), Nb(bb, "pathRef", (function(ub) {
          bb.mainCurve = ub
        })), Nb(bb, "handleAnimationEnd", (function() {
          bb.setState({
            isAnimationFinished: !0
          }), bb.props.onAnimationEnd && bb.props.onAnimationEnd()
        })), Nb(bb, "handleAnimationStart", (function() {
          bb.setState({
            isAnimationFinished: !1
          }), bb.props.onAnimationStart && bb.props.onAnimationStart()
        })), bb
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && eb(bb, ub)
      }(ub, bb), hb = ub, Gb = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var bb = this.getTotalLength();
            this.setState({
              totalLength: bb
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var bb = this.getTotalLength();
            bb !== this.state.totalLength && this.setState({
              totalLength: bb
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var bb = this.mainCurve;
          try {
            return bb && bb.getTotalLength && bb.getTotalLength() || 0
          } catch (ub) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(bb, ub) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var hb = this.props,
            Ob = hb.points,
            Gb = hb.xAxis,
            Ub = hb.yAxis,
            Lb = hb.layout,
            Yb = hb.children,
            Sb = (0, lb.c)(Yb, ob.e);
          if (!Sb) return null;
          var ab = function(bb, ub) {
              return {
                x: bb.x,
                y: bb.y,
                value: bb.value,
                errorVal: (0, Wb.W)(bb.payload, ub)
              }
            },
            Hb = {
              clipPath: bb ? "url(#clipPath-".concat(ub, ")") : null
            };
          return Bb.createElement(Xb.c, Hb, Sb.map((function(bb) {
            return Bb.cloneElement(bb, {
              key: "bar-".concat(bb.props.dataKey),
              data: Ob,
              xAxis: Gb,
              yAxis: Ub,
              layout: Lb,
              dataPointFormatter: ab
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(bb, hb, Ob) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Gb = this.props,
            Ub = Gb.dot,
            Lb = Gb.points,
            Yb = Gb.dataKey,
            Sb = (0, lb.b)(this.props, !1),
            ab = (0, lb.b)(Ub, !0),
            Hb = Lb.map((function(bb, hb) {
              var Bb = xb(xb(xb({
                key: "dot-".concat(hb),
                r: 3
              }, Sb), ab), {}, {
                index: hb,
                cx: bb.x,
                cy: bb.y,
                value: bb.value,
                dataKey: Yb,
                payload: bb.payload,
                points: Lb
              });
              return ub.renderDotItem(Ub, Bb)
            })),
            wb = {
              clipPath: bb ? "url(#clipPath-".concat(hb ? "" : "dots-").concat(Ob, ")") : null
            };
          return Bb.createElement(Xb.c, nb({
            className: "recharts-line-dots",
            key: "dots"
          }, wb), Hb)
        }
      }, {
        key: "renderCurveStatically",
        value: function(bb, ub, hb, Ob) {
          var Gb = this.props,
            Ub = Gb.type,
            Lb = Gb.layout,
            Yb = Gb.connectNulls,
            Sb = (Gb.ref, jb(Gb, Cb)),
            ab = xb(xb(xb({}, (0, lb.b)(Sb, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: ub ? "url(#clipPath-".concat(hb, ")") : null,
              points: bb
            }, Ob), {}, {
              type: Ub,
              layout: Lb,
              connectNulls: Yb
            });
          return Bb.createElement(wb.e, nb({}, ab, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(bb, ub) {
          var hb = this,
            Gb = this.props,
            Ub = Gb.points,
            Lb = Gb.strokeDasharray,
            Yb = Gb.isAnimationActive,
            Sb = Gb.animationBegin,
            ab = Gb.animationDuration,
            Hb = Gb.animationEasing,
            wb = Gb.animationId,
            Zb = Gb.animateNewValues,
            Xb = Gb.width,
            pb = Gb.height,
            ob = this.state,
            lb = ob.prevPoints,
            Kb = ob.totalLength;
          return Bb.createElement(Ob.e, {
            kw: Sb,
            duration: ab,
            isActive: Yb,
            easing: Hb,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(wb),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Bb) {
            var Ob = Bb.t;
            if (lb) {
              var Gb = lb.length / Ub.length,
                Yb = Ub.map((function(bb, ub) {
                  var hb = Math.floor(ub * Gb);
                  if (lb[hb]) {
                    var Bb = lb[hb],
                      Ub = (0, Ab.s)(Bb.x, bb.x),
                      Lb = (0, Ab.s)(Bb.y, bb.y);
                    return xb(xb({}, bb), {}, {
                      x: Ub(Ob),
                      y: Lb(Ob)
                    })
                  }
                  if (Zb) {
                    var Yb = (0, Ab.s)(2 * Xb, bb.x),
                      Sb = (0, Ab.s)(pb / 2, bb.y);
                    return xb(xb({}, bb), {}, {
                      x: Yb(Ob),
                      y: Sb(Ob)
                    })
                  }
                  return xb(xb({}, bb), {}, {
                    x: bb.x,
                    y: bb.y
                  })
                }));
              return hb.renderCurveStatically(Yb, bb, ub)
            }
            var Sb, ab = (0, Ab.s)(0, Kb)(Ob);
            if (Lb) {
              var Hb = "".concat(Lb).split(/[,\s]+/gim).map((function(bb) {
                return parseFloat(bb)
              }));
              Sb = hb.getStrokeDasharray(ab, Kb, Hb)
            } else Sb = hb.generateSimpleStrokeDasharray(Kb, ab);
            return hb.renderCurveStatically(Ub, bb, ub, {
              strokeDasharray: Sb
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(bb, ub) {
          var hb = this.props,
            Bb = hb.points,
            Ob = hb.isAnimationActive,
            Gb = this.state,
            Ub = Gb.prevPoints,
            Lb = Gb.totalLength;
          return Ob && Bb && Bb.length && (!Ub && Lb > 0 || !ab()(Ub, Bb)) ? this.renderCurveWithAnimation(bb, ub) : this.renderCurveStatically(Bb, bb, ub)
        }
      }, {
        key: "render",
        value: function() {
          var bb, ub = this.props,
            hb = ub.hide,
            Ob = ub.dot,
            Gb = ub.points,
            Ub = ub.className,
            Lb = ub.xAxis,
            Sb = ub.yAxis,
            ab = ub.top,
            wb = ub.left,
            Zb = ub.width,
            ob = ub.height,
            Ab = ub.isAnimationActive,
            Kb = ub.id;
          if (hb || !Gb || !Gb.length) return null;
          var Wb = this.state.isAnimationFinished,
            Cb = 1 === Gb.length,
            db = (0, Hb.e)("recharts-line", Ub),
            rb = Lb && Lb.allowDataOverflow,
            jb = Sb && Sb.allowDataOverflow,
            nb = rb || jb,
            Db = Yb()(Kb) ? this.id : Kb,
            xb = null !== (bb = (0, lb.b)(Ob, !1)) && void 0 !== bb ? bb : {
              r: 3,
              strokeWidth: 2
            },
            zb = xb.r,
            gb = void 0 === zb ? 3 : zb,
            ib = xb.strokeWidth,
            vb = void 0 === ib ? 2 : ib,
            tb = ((0, lb.l)(Ob) ? Ob : {}).clipDot,
            Jb = void 0 === tb || tb,
            eb = 2 * gb + vb;
          return Bb.createElement(Xb.c, {
            className: db
          }, rb || jb ? Bb.createElement("defs", null, Bb.createElement("clipPath", {
            id: "clipPath-".concat(Db)
          }, Bb.createElement("rect", {
            x: rb ? wb : wb - Zb / 2,
            y: jb ? ab : ab - ob / 2,
            width: rb ? Zb : 2 * Zb,
            height: jb ? ob : 2 * ob
          })), !Jb && Bb.createElement("clipPath", {
            id: "clipPath-dots-".concat(Db)
          }, Bb.createElement("rect", {
            x: wb - eb / 2,
            y: ab - eb / 2,
            width: Zb + eb,
            height: ob + eb
          }))) : null, !Cb && this.renderCurve(nb, Db), this.renderErrorBar(nb, Db), (Cb || Ob) && this.renderDots(nb, Jb, Db), (!Ab || Wb) && pb.d.renderCallByParent(this.props, Gb))
        }
      }], Lb = [{
        key: "getDerivedStateFromProps",
        value: function(bb, ub) {
          return bb.animationId !== ub.prevAnimationId ? {
            prevAnimationId: bb.animationId,
            curPoints: bb.points,
            prevPoints: ub.curPoints
          } : bb.points !== ub.curPoints ? {
            curPoints: bb.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(bb, ub) {
          for (var hb = bb.length % 2 !== 0 ? [].concat(zb(bb), [0]) : bb, Bb = [], Ob = 0; Ob < ub; ++Ob) Bb = [].concat(zb(Bb), zb(hb));
          return Bb
        }
      }, {
        key: "renderDotItem",
        value: function(bb, ub) {
          var hb;
          if (Bb.isValidElement(bb)) hb = Bb.cloneElement(bb, ub);
          else if (Ub()(bb)) hb = bb(ub);
          else {
            var Ob = ub.key,
              Gb = jb(ub, db),
              Lb = (0, Hb.e)("recharts-line-dot", "boolean" !== typeof bb ? bb.className : "");
            hb = Bb.createElement(Zb.b, nb({
              key: Ob
            }, Gb, {
              className: Lb
            }))
          }
          return hb
        }
      }], Gb && ib(hb.prototype, Gb), Lb && ib(hb, Lb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Gb, Lb
    }(Bb.PureComponent);
    Nb(Mb, "displayName", "Line"), Nb(Mb, "defaultProps", {
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
      isAnimationActive: !Kb.b.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), Nb(Mb, "getComposedData", (function(bb) {
      var ub = bb.props,
        hb = bb.xAxis,
        Bb = bb.yAxis,
        Ob = bb.xAxisTicks,
        Gb = bb.yAxisTicks,
        Ub = bb.dataKey,
        Lb = bb.bandSize,
        Sb = bb.displayedData,
        ab = bb.offset,
        Hb = ub.layout;
      return xb({
        points: Sb.map((function(bb, ub) {
          var Sb = (0, Wb.W)(bb, Ub);
          return "horizontal" === Hb ? {
            x: (0, Wb.y)({
              axis: hb,
              ticks: Ob,
              bandSize: Lb,
              entry: bb,
              index: ub
            }),
            y: Yb()(Sb) ? null : Bb.scale(Sb),
            value: Sb,
            payload: bb
          } : {
            x: Yb()(Sb) ? null : hb.scale(Sb),
            y: (0, Wb.y)({
              axis: Bb,
              ticks: Gb,
              bandSize: Lb,
              entry: bb,
              index: ub
            }),
            value: Sb,
            payload: bb
          }
        })),
        layout: Hb
      }, ab)
    }))
  },
  6053: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => vb
    });
    var Bb = hb(49),
      Ob = hb(5019),
      Gb = hb.n(Ob),
      Ub = hb(6055),
      Lb = hb.n(Ub),
      Yb = hb(4831),
      Sb = hb(5710),
      ab = hb(5958),
      Hb = hb(5968),
      wb = hb(4918),
      Zb = hb(5973),
      Xb = hb(5178),
      pb = hb(5181),
      ob = hb(6067);

    function Ab(bb) {
      return Ab = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ab(bb)
    }

    function lb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Db(Bb.key), Bb)
      }
    }

    function Kb(bb, ub, hb) {
      return ub = Cb(ub),
        function(bb, ub) {
          if (ub && ("object" === Ab(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Wb() ? Reflect.construct(ub, hb || [], Cb(bb).constructor) : ub.apply(bb, hb))
    }

    function Wb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Wb = function() {
        return !!bb
      })()
    }

    function Cb(bb) {
      return Cb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Cb(bb)
    }

    function db(bb, ub) {
      return db = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, db(bb, ub)
    }

    function rb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function jb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? rb(Object(hb), !0).forEach((function(ub) {
          nb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : rb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function nb(bb, ub, hb) {
      return (ub = Db(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Db(bb) {
      var ub = function(bb, ub) {
        if ("object" != Ab(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Ab(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Ab(ub) ? ub : ub + ""
    }

    function xb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return zb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return zb(bb, ub)
      }(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function gb() {
      return gb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, gb.apply(this, arguments)
    }

    function ib(bb) {
      var ub = bb.x,
        hb = bb.y,
        Ob = bb.segment,
        Ub = bb.xAxisId,
        Ab = bb.yAxisId,
        lb = bb.shape,
        Kb = bb.className,
        Wb = bb.alwaysShow,
        Cb = (0, ob.m)(),
        db = (0, ob.r)(Ub),
        rb = (0, ob.u)(Ab),
        nb = (0, ob.p)();
      if (!Cb || !nb) return null;
      (0, Xb.e)(void 0 === Wb, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var Db = function(bb, ub, hb, Bb, Ob, Gb, Ub, Yb, Sb) {
        var ab = Ob.x,
          wb = Ob.y,
          Zb = Ob.width,
          Xb = Ob.height;
        if (hb) {
          var pb = Sb.y,
            ob = bb.y.apply(pb, {
              position: Gb
            });
          if ((0, Hb.e)(Sb, "discard") && !bb.y.isInRange(ob)) return null;
          var Ab = [{
            x: ab + Zb,
            y: ob
          }, {
            x: ab,
            y: ob
          }];
          return "left" === Yb ? Ab.reverse() : Ab
        }
        if (ub) {
          var lb = Sb.x,
            Kb = bb.x.apply(lb, {
              position: Gb
            });
          if ((0, Hb.e)(Sb, "discard") && !bb.x.isInRange(Kb)) return null;
          var Wb = [{
            x: Kb,
            y: wb + Xb
          }, {
            x: Kb,
            y: wb
          }];
          return "top" === Ub ? Wb.reverse() : Wb
        }
        if (Bb) {
          var Cb = Sb.segment.map((function(ub) {
            return bb.apply(ub, {
              position: Gb
            })
          }));
          return (0, Hb.e)(Sb, "discard") && Lb()(Cb, (function(ub) {
            return !bb.isInRange(ub)
          })) ? null : Cb
        }
        return null
      }((0, Zb.b)({
        x: db.scale,
        y: rb.scale
      }), (0, wb.x)(ub), (0, wb.x)(hb), Ob && 2 === Ob.length, nb, bb.position, db.orientation, rb.orientation, bb);
      if (!Db) return null;
      var zb = xb(Db, 2),
        ib = zb[0],
        vb = ib.x,
        tb = ib.y,
        Jb = zb[1],
        eb = Jb.x,
        Nb = Jb.y,
        sb = jb(jb({
          clipPath: (0, Hb.e)(bb, "hidden") ? "url(#".concat(Cb, ")") : void 0
        }, (0, pb.b)(bb, !0)), {}, {
          x1: vb,
          y1: tb,
          x2: eb,
          y2: Nb
        });
      return Bb.createElement(Sb.c, {
        className: (0, Yb.e)("recharts-reference-line", Kb)
      }, function(bb, ub) {
        return Bb.isValidElement(bb) ? Bb.cloneElement(bb, ub) : Gb()(bb) ? bb(ub) : Bb.createElement("line", gb({}, ub, {
          className: "recharts-reference-line-line"
        }))
      }(lb, sb), ab.e.renderCallByParent(bb, (0, Zb.j)({
        x1: vb,
        y1: tb,
        x2: eb,
        y2: Nb
      })))
    }
    var vb = function(bb) {
      function ub() {
        return function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub), Kb(this, ub, arguments)
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && db(bb, ub)
      }(ub, bb), hb = ub, (Ob = [{
        key: "render",
        value: function() {
          return Bb.createElement(ib, this.props)
        }
      }]) && lb(hb.prototype, Ob), Gb && lb(hb, Gb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Ob, Gb
    }(Bb.Component);
    nb(vb, "displayName", "ReferenceLine"), nb(vb, "defaultProps", {
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
  6109: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => lb
    });
    var Bb = hb(49),
      Ob = hb(4831),
      Gb = hb(6067),
      Ub = hb(6113),
      Lb = hb(5871);

    function Yb(bb) {
      return Yb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Yb(bb)
    }

    function Sb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, pb(Bb.key), Bb)
      }
    }

    function ab(bb, ub, hb) {
      return ub = wb(ub),
        function(bb, ub) {
          if (ub && ("object" === Yb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Hb() ? Reflect.construct(ub, hb || [], wb(bb).constructor) : ub.apply(bb, hb))
    }

    function Hb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Hb = function() {
        return !!bb
      })()
    }

    function wb(bb) {
      return wb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, wb(bb)
    }

    function Zb(bb, ub) {
      return Zb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, Zb(bb, ub)
    }

    function Xb(bb, ub, hb) {
      return (ub = pb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function pb(bb) {
      var ub = function(bb, ub) {
        if ("object" != Yb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Yb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Yb(ub) ? ub : ub + ""
    }

    function ob() {
      return ob = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, ob.apply(this, arguments)
    }

    function Ab(bb) {
      var ub = bb.xAxisId,
        hb = (0, Gb.j)(),
        Yb = (0, Gb.h)(),
        Sb = (0, Gb.r)(ub);
      return null == Sb ? null : Bb.createElement(Ub.c, ob({}, Sb, {
        className: (0, Ob.e)("recharts-".concat(Sb.axisType, " ").concat(Sb.axisType), Sb.className),
        viewBox: {
          x: 0,
          y: 0,
          width: hb,
          height: Yb
        },
        ticksGenerator: function(bb) {
          return (0, Lb.P)(bb, !0)
        }
      }))
    }
    var lb = function(bb) {
      function ub() {
        return function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub), ab(this, ub, arguments)
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && Zb(bb, ub)
      }(ub, bb), hb = ub, (Ob = [{
        key: "render",
        value: function() {
          return Bb.createElement(Ab, this.props)
        }
      }]) && Sb(hb.prototype, Ob), Gb && Sb(hb, Gb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Ob, Gb
    }(Bb.Component);
    Xb(lb, "displayName", "XAxis"), Xb(lb, "defaultProps", {
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
  6125: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => lb
    });
    var Bb = hb(49),
      Ob = hb(4831),
      Gb = hb(6067),
      Ub = hb(6113),
      Lb = hb(5871);

    function Yb(bb) {
      return Yb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Yb(bb)
    }

    function Sb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, pb(Bb.key), Bb)
      }
    }

    function ab(bb, ub, hb) {
      return ub = wb(ub),
        function(bb, ub) {
          if (ub && ("object" === Yb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Hb() ? Reflect.construct(ub, hb || [], wb(bb).constructor) : ub.apply(bb, hb))
    }

    function Hb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Hb = function() {
        return !!bb
      })()
    }

    function wb(bb) {
      return wb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, wb(bb)
    }

    function Zb(bb, ub) {
      return Zb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, Zb(bb, ub)
    }

    function Xb(bb, ub, hb) {
      return (ub = pb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function pb(bb) {
      var ub = function(bb, ub) {
        if ("object" != Yb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Yb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Yb(ub) ? ub : ub + ""
    }

    function ob() {
      return ob = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, ob.apply(this, arguments)
    }
    var Ab = function(bb) {
        var ub = bb.yAxisId,
          hb = (0, Gb.j)(),
          Yb = (0, Gb.h)(),
          Sb = (0, Gb.u)(ub);
        return null == Sb ? null : Bb.createElement(Ub.c, ob({}, Sb, {
          className: (0, Ob.e)("recharts-".concat(Sb.axisType, " ").concat(Sb.axisType), Sb.className),
          viewBox: {
            x: 0,
            y: 0,
            width: hb,
            height: Yb
          },
          ticksGenerator: function(bb) {
            return (0, Lb.P)(bb, !0)
          }
        }))
      },
      lb = function(bb) {
        function ub() {
          return function(bb, ub) {
            if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
          }(this, ub), ab(this, ub, arguments)
        }
        return function(bb, ub) {
          if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
          bb.prototype = Object.create(ub && ub.prototype, {
            constructor: {
              value: bb,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), ub && Zb(bb, ub)
        }(ub, bb), hb = ub, (Ob = [{
          key: "render",
          value: function() {
            return Bb.createElement(Ab, this.props)
          }
        }]) && Sb(hb.prototype, Ob), Gb && Sb(hb, Gb), Object.defineProperty(hb, "prototype", {
          writable: !1
        }), hb;
        var hb, Ob, Gb
      }(Bb.Component);
    Xb(lb, "displayName", "YAxis"), Xb(lb, "defaultProps", {
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
  6119: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => pb
    });
    var Bb = hb(5019),
      Ob = hb.n(Bb),
      Gb = hb(4918),
      Ub = hb(5868),
      Lb = hb(5718),
      Yb = hb(5973);

    function Sb(bb, ub, hb) {
      if (ub < 1) return [];
      if (1 === ub && void 0 === hb) return bb;
      for (var Bb = [], Ob = 0; Ob < bb.length; Ob += ub) {
        if (void 0 !== hb && !0 !== hb(bb[Ob])) return;
        Bb.push(bb[Ob])
      }
      return Bb
    }

    function ab(bb, ub, hb, Bb, Ob) {
      if (bb * ub < bb * Bb || bb * ub > bb * Ob) return !1;
      var Gb = hb();
      return bb * (ub - bb * Gb / 2 - Bb) >= 0 && bb * (ub + bb * Gb / 2 - Ob) <= 0
    }

    function Hb(bb) {
      return Hb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Hb(bb)
    }

    function wb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Zb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? wb(Object(hb), !0).forEach((function(ub) {
          Xb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : wb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Xb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != Hb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != Hb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Hb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function pb(bb, ub, hb) {
      var Bb = bb.gH,
        Hb = bb.ticks,
        wb = bb.viewBox,
        Xb = bb.minTickGap,
        pb = bb.orientation,
        ob = bb.interval,
        Ab = bb.tickFormatter,
        lb = bb.unit,
        Kb = bb.angle;
      if (!Hb || !Hb.length || !Bb) return [];
      if ((0, Gb.z)(ob) || Lb.b.isSsr) return function(bb, ub) {
        return Sb(bb, ub + 1)
      }(Hb, "number" === typeof ob && (0, Gb.z)(ob) ? ob : 0);
      var Wb = [],
        Cb = "top" === pb || "bottom" === pb ? "width" : "height",
        db = lb && "width" === Cb ? (0, Ub.g)(lb, {
          fontSize: ub,
          letterSpacing: hb
        }) : {
          width: 0,
          height: 0
        },
        rb = function(bb, Bb) {
          var Gb = Ob()(Ab) ? Ab(bb.value, Bb) : bb.value;
          return "width" === Cb ? function(bb, ub, hb) {
            var Bb = {
              width: bb.width + ub.width,
              height: bb.height + ub.height
            };
            return (0, Yb.f)(Bb, hb)
          }((0, Ub.g)(Gb, {
            fontSize: ub,
            letterSpacing: hb
          }), db, Kb) : (0, Ub.g)(Gb, {
            fontSize: ub,
            letterSpacing: hb
          })[Cb]
        },
        jb = Hb.length >= 2 ? (0, Gb.E)(Hb[1].coordinate - Hb[0].coordinate) : 1,
        nb = function(bb, ub, hb) {
          var Bb = "width" === hb,
            Ob = bb.x,
            Gb = bb.y,
            Ub = bb.width,
            Lb = bb.height;
          return 1 === ub ? {
            start: Bb ? Ob : Gb,
            end: Bb ? Ob + Ub : Gb + Lb
          } : {
            start: Bb ? Ob + Ub : Gb + Lb,
            end: Bb ? Ob : Gb
          }
        }(wb, jb, Cb);
      return "equidistantPreserveStart" === ob ? function(bb, ub, hb, Bb, Ob) {
        for (var Gb, Ub = (Bb || []).slice(), Lb = ub.start, Yb = ub.end, Hb = 0, wb = 1, Zb = Lb, Xb = function() {
            var ub = null === Bb || void 0 === Bb ? void 0 : Bb[Hb];
            if (void 0 === ub) return {
              v: Sb(Bb, wb)
            };
            var Gb, Ub = Hb,
              Xb = function() {
                return void 0 === Gb && (Gb = hb(ub, Ub)), Gb
              },
              pb = ub.coordinate,
              ob = 0 === Hb || ab(bb, pb, Xb, Zb, Yb);
            ob || (Hb = 0, Zb = Lb, wb += 1), ob && (Zb = pb + bb * (Xb() / 2 + Ob), Hb += wb)
          }; wb <= Ub.length;)
          if (Gb = Xb()) return Gb.v;
        return []
      }(jb, nb, rb, Hb, Xb) : (Wb = "preserveStart" === ob || "preserveStartEnd" === ob ? function(bb, ub, hb, Bb, Ob, Gb) {
        var Ub = (Bb || []).slice(),
          Lb = Ub.length,
          Yb = ub.start,
          Sb = ub.end;
        if (Gb) {
          var Hb = Bb[Lb - 1],
            wb = hb(Hb, Lb - 1),
            Xb = bb * (Hb.coordinate + bb * wb / 2 - Sb);
          Ub[Lb - 1] = Hb = Zb(Zb({}, Hb), {}, {
            tickCoord: Xb > 0 ? Hb.coordinate - Xb * bb : Hb.coordinate
          }), ab(bb, Hb.tickCoord, (function() {
            return wb
          }), Yb, Sb) && (Sb = Hb.tickCoord - bb * (wb / 2 + Ob), Ub[Lb - 1] = Zb(Zb({}, Hb), {}, {
            isShow: !0
          }))
        }
        for (var pb = Gb ? Lb - 1 : Lb, ob = function(ub) {
            var Bb, Gb = Ub[ub],
              Lb = function() {
                return void 0 === Bb && (Bb = hb(Gb, ub)), Bb
              };
            if (0 === ub) {
              var Hb = bb * (Gb.coordinate - bb * Lb() / 2 - Yb);
              Ub[ub] = Gb = Zb(Zb({}, Gb), {}, {
                tickCoord: Hb < 0 ? Gb.coordinate - Hb * bb : Gb.coordinate
              })
            } else Ub[ub] = Gb = Zb(Zb({}, Gb), {}, {
              tickCoord: Gb.coordinate
            });
            ab(bb, Gb.tickCoord, Lb, Yb, Sb) && (Yb = Gb.tickCoord + bb * (Lb() / 2 + Ob), Ub[ub] = Zb(Zb({}, Gb), {}, {
              isShow: !0
            }))
          }, Ab = 0; Ab < pb; Ab++) ob(Ab);
        return Ub
      }(jb, nb, rb, Hb, Xb, "preserveStartEnd" === ob) : function(bb, ub, hb, Bb, Ob) {
        for (var Gb = (Bb || []).slice(), Ub = Gb.length, Lb = ub.start, Yb = ub.end, Sb = function(ub) {
            var Bb, Sb = Gb[ub],
              Hb = function() {
                return void 0 === Bb && (Bb = hb(Sb, ub)), Bb
              };
            if (ub === Ub - 1) {
              var wb = bb * (Sb.coordinate + bb * Hb() / 2 - Yb);
              Gb[ub] = Sb = Zb(Zb({}, Sb), {}, {
                tickCoord: wb > 0 ? Sb.coordinate - wb * bb : Sb.coordinate
              })
            } else Gb[ub] = Sb = Zb(Zb({}, Sb), {}, {
              tickCoord: Sb.coordinate
            });
            ab(bb, Sb.tickCoord, Hb, Lb, Yb) && (Yb = Sb.tickCoord - bb * (Hb() / 2 + Ob), Gb[ub] = Zb(Zb({}, Sb), {}, {
              isShow: !0
            }))
          }, Hb = Ub - 1; Hb >= 0; Hb--) Sb(Hb);
        return Gb
      }(jb, nb, rb, Hb, Xb), Wb.filter((function(bb) {
        return bb.isShow
      })))
    }
  },
  6135: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb
    });
    var Bb = hb(5215),
      Ob = hb(6001),
      Gb = hb(6109),
      Ub = hb(6125),
      Lb = hb(5973),
      Yb = (0, Bb.c)({
        chartName: "BarChart",
        GraphicalChild: Ob.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: Gb.c
        }, {
          axisType: "yAxis",
          AxisComp: Ub.c
        }],
        formatAxisMap: Lb.c
      })
  },
  5209: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ou
    });
    var Bb = hb(5215),
      Ob = hb(6097),
      Gb = hb(6001),
      Ub = hb(6105),
      Lb = hb(49),
      Yb = hb(5855),
      Sb = hb(5175),
      ab = hb.n(Sb),
      Hb = hb(5923),
      wb = hb.n(Hb),
      Zb = hb(5019),
      Xb = hb.n(Zb),
      pb = hb(4831),
      ob = hb(5710),
      Ab = hb(6016),
      lb = hb(5181),
      Kb = hb(5718);

    function Wb(bb) {
      return Wb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Wb(bb)
    }

    function Cb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, xb(Bb.key), Bb)
      }
    }

    function db(bb, ub, hb) {
      return ub = jb(ub),
        function(bb, ub) {
          if (ub && ("object" === Wb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, rb() ? Reflect.construct(ub, hb || [], jb(bb).constructor) : ub.apply(bb, hb))
    }

    function rb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (rb = function() {
        return !!bb
      })()
    }

    function jb(bb) {
      return jb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, jb(bb)
    }

    function nb(bb, ub) {
      return nb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, nb(bb, ub)
    }

    function Db(bb, ub, hb) {
      return (ub = xb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function xb(bb) {
      var ub = function(bb, ub) {
        if ("object" != Wb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Wb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Wb(ub) ? ub : ub + ""
    }
    var zb = function(bb) {
      function ub() {
        return function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub), db(this, ub, arguments)
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && nb(bb, ub)
      }(ub, bb), hb = ub, (Bb = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && Cb(hb.prototype, Bb), Ob && Cb(hb, Ob), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Bb, Ob
    }(Lb.Component);
    Db(zb, "displayName", "ZAxis"), Db(zb, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var gb = hb(6088),
      ib = hb(5937),
      vb = hb(6007),
      tb = hb(4918),
      Jb = hb(5871),
      eb = hb(5207),
      Nb = hb(5787),
      sb = hb(6021),
      Mb = ["option", "isActive"];

    function mb() {
      return mb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, mb.apply(this, arguments)
    }

    function Ib(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function Pb(bb) {
      var ub = bb.option,
        hb = bb.isActive,
        Bb = Ib(bb, Mb);
      return "string" === typeof ub ? Lb.createElement(sb.d, mb({
        option: Lb.createElement(Nb.c, mb({
          type: ub
        }, Bb)),
        isActive: hb,
        shapeType: "symbols"
      }, Bb)) : Lb.createElement(sb.d, mb({
        option: ub,
        isActive: hb,
        shapeType: "symbols"
      }, Bb))
    }

    function qb(bb) {
      return qb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, qb(bb)
    }

    function Eb() {
      return Eb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Eb.apply(this, arguments)
    }

    function yb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Vb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? yb(Object(hb), !0).forEach((function(ub) {
          Qb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : yb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Fb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Rb(Bb.key), Bb)
      }
    }

    function fb(bb, ub, hb) {
      return ub = Tb(ub),
        function(bb, ub) {
          if (ub && ("object" === qb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, kb() ? Reflect.construct(ub, hb || [], Tb(bb).constructor) : ub.apply(bb, hb))
    }

    function kb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (kb = function() {
        return !!bb
      })()
    }

    function Tb(bb) {
      return Tb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Tb(bb)
    }

    function cb(bb, ub) {
      return cb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, cb(bb, ub)
    }

    function Qb(bb, ub, hb) {
      return (ub = Rb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Rb(bb) {
      var ub = function(bb, ub) {
        if ("object" != qb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != qb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == qb(ub) ? ub : ub + ""
    }
    var bu = function(bb) {
      function ub() {
        var bb;
        ! function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub);
        for (var hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        return Qb(bb = fb(this, ub, [].concat(Bb)), "state", {
          isAnimationFinished: !1
        }), Qb(bb, "handleAnimationEnd", (function() {
          bb.setState({
            isAnimationFinished: !0
          })
        })), Qb(bb, "handleAnimationStart", (function() {
          bb.setState({
            isAnimationFinished: !1
          })
        })), Qb(bb, "id", (0, tb.G)("recharts-scatter-")), bb
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && cb(bb, ub)
      }(ub, bb), hb = ub, Bb = [{
        key: "renderSymbolsStatically",
        value: function(bb) {
          var ub = this,
            hb = this.props,
            Bb = hb.shape,
            Ob = hb.activeShape,
            Gb = hb.activeIndex,
            Ub = (0, lb.b)(this.props, !1);
          return bb.map((function(bb, hb) {
            var Yb = Gb === hb,
              Sb = Yb ? Ob : Bb,
              ab = Vb(Vb({}, Ub), bb);
            return Lb.createElement(ob.c, Eb({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === bb || void 0 === bb ? void 0 : bb.cx, "-").concat(null === bb || void 0 === bb ? void 0 : bb.cy, "-").concat(null === bb || void 0 === bb ? void 0 : bb.size, "-").concat(hb)
            }, (0, eb.q)(ub.props, bb, hb), {
              role: "img"
            }), Lb.createElement(Pb, Eb({
              option: Sb,
              isActive: Yb,
              key: "symbol-".concat(hb)
            }, ab)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var bb = this,
            ub = this.props,
            hb = ub.points,
            Bb = ub.isAnimationActive,
            Ob = ub.animationBegin,
            Gb = ub.animationDuration,
            Ub = ub.animationEasing,
            Sb = ub.animationId,
            ab = this.state.prevPoints;
          return Lb.createElement(Yb.e, {
            kw: Ob,
            duration: Gb,
            isActive: Bb,
            easing: Ub,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(Sb),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(ub) {
            var Bb = ub.t,
              Ob = hb.map((function(bb, ub) {
                var hb = ab && ab[ub];
                if (hb) {
                  var Ob = (0, tb.s)(hb.cx, bb.cx),
                    Gb = (0, tb.s)(hb.cy, bb.cy),
                    Ub = (0, tb.s)(hb.size, bb.size);
                  return Vb(Vb({}, bb), {}, {
                    cx: Ob(Bb),
                    cy: Gb(Bb),
                    size: Ub(Bb)
                  })
                }
                var Lb = (0, tb.s)(0, bb.size);
                return Vb(Vb({}, bb), {}, {
                  size: Lb(Bb)
                })
              }));
            return Lb.createElement(ob.c, null, bb.renderSymbolsStatically(Ob))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var bb = this.props,
            ub = bb.points,
            hb = bb.isAnimationActive,
            Bb = this.state.prevPoints;
          return !(hb && ub && ub.length) || Bb && wb()(Bb, ub) ? this.renderSymbolsStatically(ub) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var bb = this.props,
            ub = bb.points,
            hb = bb.xAxis,
            Bb = bb.yAxis,
            Ob = bb.children,
            Gb = (0, lb.c)(Ob, ib.e);
          return Gb ? Gb.map((function(bb, Ob) {
            var Gb = bb.props,
              Ub = Gb.direction,
              Yb = Gb.dataKey;
            return Lb.cloneElement(bb, {
              key: "".concat(Ub, "-").concat(Yb, "-").concat(ub[Ob]),
              data: ub,
              xAxis: hb,
              yAxis: Bb,
              layout: "x" === Ub ? "vertical" : "horizontal",
              dataPointFormatter: function(bb, ub) {
                return {
                  x: bb.cx,
                  y: bb.cy,
                  value: "x" === Ub ? +bb.node.x : +bb.node.y,
                  errorVal: (0, Jb.W)(bb, ub)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var bb, ub, hb = this.props,
            Bb = hb.points,
            Ob = hb.line,
            Gb = hb.lineType,
            Ub = hb.lineJointType,
            Yb = (0, lb.b)(this.props, !1),
            Sb = (0, lb.b)(Ob, !1);
          if ("joint" === Gb) bb = Bb.map((function(bb) {
            return {
              x: bb.cx,
              y: bb.cy
            }
          }));
          else if ("fitting" === Gb) {
            var ab = (0, tb.l)(Bb),
              Hb = ab.xmin,
              wb = ab.xmax,
              Zb = ab.a,
              pb = ab.b,
              Ab = function(bb) {
                return Zb * bb + pb
              };
            bb = [{
              x: Hb,
              y: Ab(Hb)
            }, {
              x: wb,
              y: Ab(wb)
            }]
          }
          var Kb = Vb(Vb(Vb({}, Yb), {}, {
            fill: "none",
            stroke: Yb && Yb.fill
          }, Sb), {}, {
            points: bb
          });
          return ub = Lb.isValidElement(Ob) ? Lb.cloneElement(Ob, Kb) : Xb()(Ob) ? Ob(Kb) : Lb.createElement(gb.e, Eb({}, Kb, {
            type: Ub
          })), Lb.createElement(ob.c, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, ub)
        }
      }, {
        key: "render",
        value: function() {
          var bb = this.props,
            ub = bb.hide,
            hb = bb.points,
            Bb = bb.line,
            Ob = bb.className,
            Gb = bb.xAxis,
            Ub = bb.yAxis,
            Yb = bb.left,
            Sb = bb.top,
            Hb = bb.width,
            wb = bb.height,
            Zb = bb.id,
            Xb = bb.isAnimationActive;
          if (ub || !hb || !hb.length) return null;
          var lb = this.state.isAnimationFinished,
            Kb = (0, pb.e)("recharts-scatter", Ob),
            Wb = Gb && Gb.allowDataOverflow,
            Cb = Ub && Ub.allowDataOverflow,
            db = Wb || Cb,
            rb = ab()(Zb) ? this.id : Zb;
          return Lb.createElement(ob.c, {
            className: Kb,
            clipPath: db ? "url(#clipPath-".concat(rb, ")") : null
          }, Wb || Cb ? Lb.createElement("defs", null, Lb.createElement("clipPath", {
            id: "clipPath-".concat(rb)
          }, Lb.createElement("rect", {
            x: Wb ? Yb : Yb - Hb / 2,
            y: Cb ? Sb : Sb - wb / 2,
            width: Wb ? Hb : 2 * Hb,
            height: Cb ? wb : 2 * wb
          }))) : null, Bb && this.renderLine(), this.renderErrorBar(), Lb.createElement(ob.c, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!Xb || lb) && Ab.d.renderCallByParent(this.props, hb))
        }
      }], Ob = [{
        key: "getDerivedStateFromProps",
        value: function(bb, ub) {
          return bb.animationId !== ub.prevAnimationId ? {
            prevAnimationId: bb.animationId,
            curPoints: bb.points,
            prevPoints: ub.curPoints
          } : bb.points !== ub.curPoints ? {
            curPoints: bb.points
          } : null
        }
      }], Bb && Fb(hb.prototype, Bb), Ob && Fb(hb, Ob), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Bb, Ob
    }(Lb.PureComponent);
    Qb(bu, "displayName", "Scatter"), Qb(bu, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !Kb.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), Qb(bu, "getComposedData", (function(bb) {
      var ub = bb.xAxis,
        hb = bb.yAxis,
        Bb = bb.zAxis,
        Ob = bb.item,
        Gb = bb.displayedData,
        Ub = bb.xAxisTicks,
        Lb = bb.yAxisTicks,
        Yb = bb.offset,
        Sb = Ob.props.tooltipType,
        Hb = (0, lb.c)(Ob.props.children, vb.b),
        wb = ab()(ub.dataKey) ? Ob.props.dataKey : ub.dataKey,
        Zb = ab()(hb.dataKey) ? Ob.props.dataKey : hb.dataKey,
        Xb = Bb && Bb.dataKey,
        pb = Bb ? Bb.range : zb.defaultProps.range,
        ob = pb && pb[0],
        Ab = ub.scale.bandwidth ? ub.scale.bandwidth() : 0,
        Kb = hb.scale.bandwidth ? hb.scale.bandwidth() : 0,
        Wb = Gb.map((function(bb, Gb) {
          var Yb = (0, Jb.W)(bb, wb),
            pb = (0, Jb.W)(bb, Zb),
            lb = !ab()(Xb) && (0, Jb.W)(bb, Xb) || "-",
            Wb = [{
              name: ab()(ub.dataKey) ? Ob.props.name : ub.name || ub.dataKey,
              unit: ub.unit || "",
              value: Yb,
              payload: bb,
              dataKey: wb,
              type: Sb
            }, {
              name: ab()(hb.dataKey) ? Ob.props.name : hb.name || hb.dataKey,
              unit: hb.unit || "",
              value: pb,
              payload: bb,
              dataKey: Zb,
              type: Sb
            }];
          "-" !== lb && Wb.push({
            name: Bb.name || Bb.dataKey,
            unit: Bb.unit || "",
            value: lb,
            payload: bb,
            dataKey: Xb,
            type: Sb
          });
          var Cb = (0, Jb.y)({
              axis: ub,
              ticks: Ub,
              bandSize: Ab,
              entry: bb,
              index: Gb,
              dataKey: wb
            }),
            db = (0, Jb.y)({
              axis: hb,
              ticks: Lb,
              bandSize: Kb,
              entry: bb,
              index: Gb,
              dataKey: Zb
            }),
            rb = "-" !== lb ? Bb.scale(lb) : ob,
            jb = Math.sqrt(Math.max(rb, 0) / Math.PI);
          return Vb(Vb({}, bb), {}, {
            cx: Cb,
            cy: db,
            x: Cb - jb,
            y: db - jb,
            xAxis: ub,
            yAxis: hb,
            zAxis: Bb,
            width: 2 * jb,
            height: 2 * jb,
            size: rb,
            node: {
              x: Yb,
              y: pb,
              z: lb
            },
            tooltipPayload: Wb,
            tooltipPosition: {
              x: Cb,
              y: db
            },
            payload: bb
          }, Hb && Hb[Gb] && Hb[Gb].props)
        }));
      return Vb({
        points: Wb
      }, Yb)
    }));
    var uu = hb(6109),
      hu = hb(6125),
      Bu = hb(5973),
      Ou = (0, Bb.c)({
        chartName: "ComposedChart",
        GraphicalChild: [Ub.e, Ob.c, Gb.b, bu],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: uu.c
        }, {
          axisType: "yAxis",
          AxisComp: hu.c
        }, {
          axisType: "zAxis",
          AxisComp: zb
        }],
        formatAxisMap: Bu.c
      })
  },
  5215: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => mh
    });
    var Bb = hb(49),
      Ob = hb(5175),
      Gb = hb.n(Ob),
      Ub = hb(5019),
      Lb = hb.n(Ub),
      Yb = hb(5219),
      Sb = hb.n(Yb),
      ab = hb(4940),
      Hb = hb.n(ab),
      wb = hb(5253),
      Zb = hb.n(wb),
      Xb = hb(4840),
      pb = hb.n(Xb),
      ob = hb(4831),
      Ab = hb(5700),
      lb = hb(5704),
      Kb = hb(5710),
      Wb = hb(5714),
      Cb = hb(5781),
      db = hb(5850),
      rb = hb(5853),
      jb = hb(5181),
      nb = hb(5880),
      Db = hb(5859),
      xb = hb(5871),
      zb = hb(4918);

    function gb(bb) {
      return gb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, gb(bb)
    }

    function ib(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function vb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? ib(Object(hb), !0).forEach((function(ub) {
          tb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : ib(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function tb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != gb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != gb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == gb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var Jb = ["Webkit", "Moz", "O", "ms"];

    function eb(bb) {
      return eb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, eb(bb)
    }

    function Nb() {
      return Nb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Nb.apply(this, arguments)
    }

    function sb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Mb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? sb(Object(hb), !0).forEach((function(ub) {
          yb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : sb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function mb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Vb(Bb.key), Bb)
      }
    }

    function Ib(bb, ub, hb) {
      return ub = qb(ub),
        function(bb, ub) {
          if (ub && ("object" === eb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Pb() ? Reflect.construct(ub, hb || [], qb(bb).constructor) : ub.apply(bb, hb))
    }

    function Pb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Pb = function() {
        return !!bb
      })()
    }

    function qb(bb) {
      return qb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, qb(bb)
    }

    function Eb(bb, ub) {
      return Eb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, Eb(bb, ub)
    }

    function yb(bb, ub, hb) {
      return (ub = Vb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Vb(bb) {
      var ub = function(bb, ub) {
        if ("object" != eb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != eb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == eb(ub) ? ub : ub + ""
    }
    var Fb = function(bb) {
        return bb.changedTouches && !!bb.changedTouches.length
      },
      fb = function(bb) {
        function ub(bb) {
          var hb;
          return function(bb, ub) {
            if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
          }(this, ub), yb(hb = Ib(this, ub, [bb]), "handleDrag", (function(bb) {
            hb.leaveTimer && (clearTimeout(hb.leaveTimer), hb.leaveTimer = null), hb.state.isTravellerMoving ? hb.handleTravellerMove(bb) : hb.state.isSlideMoving && hb.handleSlideDrag(bb)
          })), yb(hb, "handleTouchMove", (function(bb) {
            null != bb.changedTouches && bb.changedTouches.length > 0 && hb.handleDrag(bb.changedTouches[0])
          })), yb(hb, "handleDragEnd", (function() {
            hb.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var bb = hb.props,
                ub = bb.endIndex,
                Bb = bb.onDragEnd,
                Ob = bb.startIndex;
              null === Bb || void 0 === Bb || Bb({
                endIndex: ub,
                startIndex: Ob
              })
            })), hb.detachDragEndListener()
          })), yb(hb, "handleLeaveWrapper", (function() {
            (hb.state.isTravellerMoving || hb.state.isSlideMoving) && (hb.leaveTimer = window.setTimeout(hb.handleDragEnd, hb.props.leaveTimeOut))
          })), yb(hb, "handleEnterSlideOrTraveller", (function() {
            hb.setState({
              isTextActive: !0
            })
          })), yb(hb, "handleLeaveSlideOrTraveller", (function() {
            hb.setState({
              isTextActive: !1
            })
          })), yb(hb, "handleSlideDragStart", (function(bb) {
            var ub = Fb(bb) ? bb.changedTouches[0] : bb;
            hb.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: ub.pageX
            }), hb.attachDragEndListener()
          })), hb.travellerDragStartHandlers = {
            startX: hb.handleTravellerDragStart.bind(hb, "startX"),
            endX: hb.handleTravellerDragStart.bind(hb, "endX")
          }, hb.state = {}, hb
        }
        return function(bb, ub) {
          if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
          bb.prototype = Object.create(ub && ub.prototype, {
            constructor: {
              value: bb,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), ub && Eb(bb, ub)
        }(ub, bb), hb = ub, Ob = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(bb) {
            var hb = bb.startX,
              Bb = bb.endX,
              Ob = this.state.scaleValues,
              Gb = this.props,
              Ub = Gb.gap,
              Lb = Gb.data.length - 1,
              Yb = Math.min(hb, Bb),
              Sb = Math.max(hb, Bb),
              ab = ub.getIndexInRange(Ob, Yb),
              Hb = ub.getIndexInRange(Ob, Sb);
            return {
              startIndex: ab - ab % Ub,
              endIndex: Hb === Lb ? Lb : Hb - Hb % Ub
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(bb) {
            var ub = this.props,
              hb = ub.data,
              Bb = ub.tickFormatter,
              Ob = ub.dataKey,
              Gb = (0, xb.W)(hb[bb], Ob, bb);
            return Lb()(Bb) ? Bb(Gb, bb) : Gb
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
          value: function(bb) {
            var ub = this.state,
              hb = ub.slideMoveStartX,
              Bb = ub.startX,
              Ob = ub.endX,
              Gb = this.props,
              Ub = Gb.x,
              Lb = Gb.width,
              Yb = Gb.travellerWidth,
              Sb = Gb.startIndex,
              ab = Gb.endIndex,
              Hb = Gb.onChange,
              wb = bb.pageX - hb;
            wb > 0 ? wb = Math.min(wb, Ub + Lb - Yb - Ob, Ub + Lb - Yb - Bb) : wb < 0 && (wb = Math.max(wb, Ub - Bb, Ub - Ob));
            var Zb = this.getIndex({
              startX: Bb + wb,
              endX: Ob + wb
            });
            Zb.startIndex === Sb && Zb.endIndex === ab || !Hb || Hb(Zb), this.setState({
              startX: Bb + wb,
              endX: Ob + wb,
              slideMoveStartX: bb.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(bb, ub) {
            var hb = Fb(ub) ? ub.changedTouches[0] : ub;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: bb,
              brushMoveStartX: hb.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(bb) {
            var ub = this.state,
              hb = ub.brushMoveStartX,
              Bb = ub.movingTravellerId,
              Ob = ub.endX,
              Gb = ub.startX,
              Ub = this.state[Bb],
              Lb = this.props,
              Yb = Lb.x,
              Sb = Lb.width,
              ab = Lb.travellerWidth,
              Hb = Lb.onChange,
              wb = Lb.gap,
              Zb = Lb.data,
              Xb = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              pb = bb.pageX - hb;
            pb > 0 ? pb = Math.min(pb, Yb + Sb - ab - Ub) : pb < 0 && (pb = Math.max(pb, Yb - Ub)), Xb[Bb] = Ub + pb;
            var ob = this.getIndex(Xb),
              Ab = ob.startIndex,
              lb = ob.endIndex;
            this.setState(yb(yb({}, Bb, Ub + pb), "brushMoveStartX", bb.pageX), (function() {
              Hb && function() {
                var bb = Zb.length - 1;
                return "startX" === Bb && (Ob > Gb ? Ab % wb === 0 : lb % wb === 0) || Ob < Gb && lb === bb || "endX" === Bb && (Ob > Gb ? lb % wb === 0 : Ab % wb === 0) || Ob > Gb && lb === bb
              }() && Hb(ob)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(bb, ub) {
            var hb = this,
              Bb = this.state,
              Ob = Bb.scaleValues,
              Gb = Bb.startX,
              Ub = Bb.endX,
              Lb = this.state[ub],
              Yb = Ob.indexOf(Lb);
            if (-1 !== Yb) {
              var Sb = Yb + bb;
              if (!(-1 === Sb || Sb >= Ob.length)) {
                var ab = Ob[Sb];
                "startX" === ub && ab >= Ub || "endX" === ub && ab <= Gb || this.setState(yb({}, ub, ab), (function() {
                  hb.props.onChange(hb.getIndex({
                    startX: hb.state.startX,
                    endX: hb.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var bb = this.props,
              ub = bb.x,
              hb = bb.y,
              Ob = bb.width,
              Gb = bb.height,
              Ub = bb.fill,
              Lb = bb.stroke;
            return Bb.createElement("rect", {
              stroke: Lb,
              fill: Ub,
              x: ub,
              y: hb,
              width: Ob,
              height: Gb
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var bb = this.props,
              ub = bb.x,
              hb = bb.y,
              Ob = bb.width,
              Gb = bb.height,
              Ub = bb.data,
              Lb = bb.children,
              Yb = bb.padding,
              Sb = Bb.Children.only(Lb);
            return Sb ? Bb.cloneElement(Sb, {
              x: ub,
              y: hb,
              width: Ob,
              height: Gb,
              margin: Yb,
              compact: !0,
              data: Ub
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(bb, hb) {
            var Ob, Gb, Ub = this,
              Lb = this.props,
              Yb = Lb.y,
              Sb = Lb.travellerWidth,
              ab = Lb.height,
              Hb = Lb.traveller,
              wb = Lb.ariaLabel,
              Zb = Lb.data,
              Xb = Lb.startIndex,
              pb = Lb.endIndex,
              ob = Math.max(bb, this.props.x),
              Ab = Mb(Mb({}, (0, jb.b)(this.props, !1)), {}, {
                x: ob,
                y: Yb,
                width: Sb,
                height: ab
              }),
              lb = wb || "Min value: ".concat(null === (Ob = Zb[Xb]) || void 0 === Ob ? void 0 : Ob.name, ", Max value: ").concat(null === (Gb = Zb[pb]) || void 0 === Gb ? void 0 : Gb.name);
            return Bb.createElement(Kb.c, {
              tabIndex: 0,
              role: "slider",
              "aria-label": lb,
              "aria-valuenow": bb,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[hb],
              onTouchStart: this.travellerDragStartHandlers[hb],
              onKeyDown: function(bb) {
                ["ArrowLeft", "ArrowRight"].includes(bb.key) && (bb.preventDefault(), bb.stopPropagation(), Ub.handleTravellerMoveKeyboard("ArrowRight" === bb.key ? 1 : -1, hb))
              },
              onFocus: function() {
                Ub.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                Ub.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, ub.renderTraveller(Hb, Ab))
          }
        }, {
          key: "renderSlide",
          value: function(bb, ub) {
            var hb = this.props,
              Ob = hb.y,
              Gb = hb.height,
              Ub = hb.stroke,
              Lb = hb.travellerWidth,
              Yb = Math.min(bb, ub) + Lb,
              Sb = Math.max(Math.abs(ub - bb) - Lb, 0);
            return Bb.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: Ub,
              fillOpacity: .2,
              x: Yb,
              y: Ob,
              width: Sb,
              height: Gb
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var bb = this.props,
              ub = bb.startIndex,
              hb = bb.endIndex,
              Ob = bb.y,
              Gb = bb.height,
              Ub = bb.travellerWidth,
              Lb = bb.stroke,
              Yb = this.state,
              Sb = Yb.startX,
              ab = Yb.endX,
              Hb = {
                pointerEvents: "none",
                fill: Lb
              };
            return Bb.createElement(Kb.c, {
              className: "recharts-brush-texts"
            }, Bb.createElement(Db.e, Nb({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(Sb, ab) - 5,
              y: Ob + Gb / 2
            }, Hb), this.getTextOfTick(ub)), Bb.createElement(Db.e, Nb({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(Sb, ab) + Ub + 5,
              y: Ob + Gb / 2
            }, Hb), this.getTextOfTick(hb)))
          }
        }, {
          key: "render",
          value: function() {
            var bb = this.props,
              ub = bb.data,
              hb = bb.className,
              Ob = bb.children,
              Gb = bb.x,
              Ub = bb.y,
              Lb = bb.width,
              Yb = bb.height,
              Sb = bb.alwaysShowText,
              ab = this.state,
              Hb = ab.startX,
              wb = ab.endX,
              Zb = ab.isTextActive,
              Xb = ab.isSlideMoving,
              pb = ab.isTravellerMoving,
              Ab = ab.isTravellerFocused;
            if (!ub || !ub.length || !(0, zb.z)(Gb) || !(0, zb.z)(Ub) || !(0, zb.z)(Lb) || !(0, zb.z)(Yb) || Lb <= 0 || Yb <= 0) return null;
            var lb = (0, ob.e)("recharts-brush", hb),
              Wb = 1 === Bb.Children.count(Ob),
              Cb = function(bb, ub) {
                if (!bb) return null;
                var hb = bb.replace(/(\w)/, (function(bb) {
                    return bb.toUpperCase()
                  })),
                  Bb = Jb.reduce((function(bb, Bb) {
                    return vb(vb({}, bb), {}, tb({}, Bb + hb, ub))
                  }), {});
                return Bb[bb] = ub, Bb
              }("userSelect", "none");
            return Bb.createElement(Kb.c, {
              className: lb,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: Cb
            }, this.renderBackground(), Wb && this.renderPanorama(), this.renderSlide(Hb, wb), this.renderTravellerLayer(Hb, "startX"), this.renderTravellerLayer(wb, "endX"), (Zb || Xb || pb || Ab || Sb) && this.renderText())
          }
        }], Gb = [{
          key: "renderDefaultTraveller",
          value: function(bb) {
            var ub = bb.x,
              hb = bb.y,
              Ob = bb.width,
              Gb = bb.height,
              Ub = bb.stroke,
              Lb = Math.floor(hb + Gb / 2) - 1;
            return Bb.createElement(Bb.Fragment, null, Bb.createElement("rect", {
              x: ub,
              y: hb,
              width: Ob,
              height: Gb,
              fill: Ub,
              stroke: "none"
            }), Bb.createElement("line", {
              x1: ub + 1,
              y1: Lb,
              x2: ub + Ob - 1,
              y2: Lb,
              fill: "none",
              stroke: "#fff"
            }), Bb.createElement("line", {
              x1: ub + 1,
              y1: Lb + 2,
              x2: ub + Ob - 1,
              y2: Lb + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(bb, hb) {
            return Bb.isValidElement(bb) ? Bb.cloneElement(bb, hb) : Lb()(bb) ? bb(hb) : ub.renderDefaultTraveller(hb)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(bb, ub) {
            var hb = bb.data,
              Bb = bb.width,
              Ob = bb.x,
              Gb = bb.travellerWidth,
              Ub = bb.updateId,
              Lb = bb.startIndex,
              Yb = bb.endIndex;
            if (hb !== ub.prevData || Ub !== ub.prevUpdateId) return Mb({
              prevData: hb,
              prevTravellerWidth: Gb,
              prevUpdateId: Ub,
              prevX: Ob,
              prevWidth: Bb
            }, hb && hb.length ? function(bb) {
              var ub = bb.data,
                hb = bb.startIndex,
                Bb = bb.endIndex,
                Ob = bb.x,
                Gb = bb.width,
                Ub = bb.travellerWidth;
              if (!ub || !ub.length) return {};
              var Lb = ub.length,
                Yb = (0, nb.g)().domain(Sb()(0, Lb)).range([Ob, Ob + Gb - Ub]),
                ab = Yb.domain().map((function(bb) {
                  return Yb(bb)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: Yb(hb),
                endX: Yb(Bb),
                scale: Yb,
                scaleValues: ab
              }
            }({
              data: hb,
              width: Bb,
              x: Ob,
              travellerWidth: Gb,
              startIndex: Lb,
              endIndex: Yb
            }) : {
              scale: null,
              scaleValues: null
            });
            if (ub.scale && (Bb !== ub.prevWidth || Ob !== ub.prevX || Gb !== ub.prevTravellerWidth)) {
              ub.scale.range([Ob, Ob + Bb - Gb]);
              var ab = ub.scale.domain().map((function(bb) {
                return ub.scale(bb)
              }));
              return {
                prevData: hb,
                prevTravellerWidth: Gb,
                prevUpdateId: Ub,
                prevX: Ob,
                prevWidth: Bb,
                startX: ub.scale(bb.startIndex),
                endX: ub.scale(bb.endIndex),
                scaleValues: ab
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(bb, ub) {
            for (var hb = 0, Bb = bb.length - 1; Bb - hb > 1;) {
              var Ob = Math.floor((hb + Bb) / 2);
              bb[Ob] > ub ? Bb = Ob : hb = Ob
            }
            return ub >= bb[Bb] ? Bb : hb
          }
        }], Ob && mb(hb.prototype, Ob), Gb && mb(hb, Gb), Object.defineProperty(hb, "prototype", {
          writable: !1
        }), hb;
        var hb, Ob, Gb
      }(Bb.PureComponent);
    yb(fb, "displayName", "Brush"), yb(fb, "defaultProps", {
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
    var kb = hb(5868),
      Tb = hb(5942),
      cb = hb(5958),
      Qb = hb(5968),
      Rb = hb(5973),
      bu = hb(5178);

    function uu() {
      return uu = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, uu.apply(this, arguments)
    }

    function hu(bb) {
      return hu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, hu(bb)
    }

    function Bu(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Ou(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Bu(Object(hb), !0).forEach((function(ub) {
          au(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Bu(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Gu(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Hu(Bb.key), Bb)
      }
    }

    function Uu(bb, ub, hb) {
      return ub = Yu(ub),
        function(bb, ub) {
          if (ub && ("object" === hu(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Lu() ? Reflect.construct(ub, hb || [], Yu(bb).constructor) : ub.apply(bb, hb))
    }

    function Lu() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Lu = function() {
        return !!bb
      })()
    }

    function Yu(bb) {
      return Yu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Yu(bb)
    }

    function Su(bb, ub) {
      return Su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, Su(bb, ub)
    }

    function au(bb, ub, hb) {
      return (ub = Hu(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Hu(bb) {
      var ub = function(bb, ub) {
        if ("object" != hu(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != hu(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == hu(ub) ? ub : ub + ""
    }
    var wu = function(bb) {
      function ub() {
        return function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub), Uu(this, ub, arguments)
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && Su(bb, ub)
      }(ub, bb), hb = ub, (Ob = [{
        key: "render",
        value: function() {
          var bb = this.props,
            hb = bb.x,
            Ob = bb.y,
            Gb = bb.r,
            Ub = bb.alwaysShow,
            Lb = bb.clipPathId,
            Yb = (0, zb.x)(hb),
            Sb = (0, zb.x)(Ob);
          if ((0, bu.e)(void 0 === Ub, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !Yb || !Sb) return null;
          var ab = function(bb) {
            var ub = bb.x,
              hb = bb.y,
              Bb = bb.xAxis,
              Ob = bb.yAxis,
              Gb = (0, Rb.b)({
                x: Bb.scale,
                y: Ob.scale
              }),
              Ub = Gb.apply({
                x: ub,
                y: hb
              }, {
                bandAware: !0
              });
            return (0, Qb.e)(bb, "discard") && !Gb.isInRange(Ub) ? null : Ub
          }(this.props);
          if (!ab) return null;
          var Hb = ab.x,
            wb = ab.y,
            Zb = this.props,
            Xb = Zb.shape,
            pb = Zb.className,
            Ab = Ou(Ou({
              clipPath: (0, Qb.e)(this.props, "hidden") ? "url(#".concat(Lb, ")") : void 0
            }, (0, jb.b)(this.props, !0)), {}, {
              cx: Hb,
              cy: wb
            });
          return Bb.createElement(Kb.c, {
            className: (0, ob.e)("recharts-reference-dot", pb)
          }, ub.renderDot(Xb, Ab), cb.e.renderCallByParent(this.props, {
            x: Hb - Gb,
            y: wb - Gb,
            width: 2 * Gb,
            height: 2 * Gb
          }))
        }
      }]) && Gu(hb.prototype, Ob), Gb && Gu(hb, Gb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Ob, Gb
    }(Bb.Component);
    au(wu, "displayName", "ReferenceDot"), au(wu, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), au(wu, "renderDot", (function(bb, ub) {
      return Bb.isValidElement(bb) ? Bb.cloneElement(bb, ub) : Lb()(bb) ? bb(ub) : Bb.createElement(db.b, uu({}, ub, {
        cx: ub.cx,
        cy: ub.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var Zu = hb(6053);

    function Xu() {
      return Xu = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Xu.apply(this, arguments)
    }

    function pu(bb) {
      return pu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, pu(bb)
    }

    function ou(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Au(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? ou(Object(hb), !0).forEach((function(ub) {
          ru(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : ou(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function lu(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, ju(Bb.key), Bb)
      }
    }

    function Ku(bb, ub, hb) {
      return ub = Cu(ub),
        function(bb, ub) {
          if (ub && ("object" === pu(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Wu() ? Reflect.construct(ub, hb || [], Cu(bb).constructor) : ub.apply(bb, hb))
    }

    function Wu() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Wu = function() {
        return !!bb
      })()
    }

    function Cu(bb) {
      return Cu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Cu(bb)
    }

    function du(bb, ub) {
      return du = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, du(bb, ub)
    }

    function ru(bb, ub, hb) {
      return (ub = ju(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function ju(bb) {
      var ub = function(bb, ub) {
        if ("object" != pu(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != pu(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == pu(ub) ? ub : ub + ""
    }
    var nu = function(bb) {
      function ub() {
        return function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub), Ku(this, ub, arguments)
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && du(bb, ub)
      }(ub, bb), hb = ub, (Ob = [{
        key: "render",
        value: function() {
          var bb = this.props,
            hb = bb.x1,
            Ob = bb.x2,
            Gb = bb.y1,
            Ub = bb.y2,
            Lb = bb.className,
            Yb = bb.alwaysShow,
            Sb = bb.clipPathId;
          (0, bu.e)(void 0 === Yb, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var ab = (0, zb.x)(hb),
            Hb = (0, zb.x)(Ob),
            wb = (0, zb.x)(Gb),
            Zb = (0, zb.x)(Ub),
            Xb = this.props.shape;
          if (!ab && !Hb && !wb && !Zb && !Xb) return null;
          var pb = function(bb, ub, hb, Bb, Ob) {
            var Gb = Ob.x1,
              Ub = Ob.x2,
              Lb = Ob.y1,
              Yb = Ob.y2,
              Sb = Ob.xAxis,
              ab = Ob.yAxis;
            if (!Sb || !ab) return null;
            var Hb = (0, Rb.b)({
                x: Sb.scale,
                y: ab.scale
              }),
              wb = {
                x: bb ? Hb.x.apply(Gb, {
                  position: "start"
                }) : Hb.x.rangeMin,
                y: hb ? Hb.y.apply(Lb, {
                  position: "start"
                }) : Hb.y.rangeMin
              },
              Zb = {
                x: ub ? Hb.x.apply(Ub, {
                  position: "end"
                }) : Hb.x.rangeMax,
                y: Bb ? Hb.y.apply(Yb, {
                  position: "end"
                }) : Hb.y.rangeMax
              };
            return !(0, Qb.e)(Ob, "discard") || Hb.isInRange(wb) && Hb.isInRange(Zb) ? (0, Rb.k)(wb, Zb) : null
          }(ab, Hb, wb, Zb, this.props);
          if (!pb && !Xb) return null;
          var Ab = (0, Qb.e)(this.props, "hidden") ? "url(#".concat(Sb, ")") : void 0;
          return Bb.createElement(Kb.c, {
            className: (0, ob.e)("recharts-reference-area", Lb)
          }, ub.renderRect(Xb, Au(Au({
            clipPath: Ab
          }, (0, jb.b)(this.props, !0)), pb)), cb.e.renderCallByParent(this.props, pb))
        }
      }]) && lu(hb.prototype, Ob), Gb && lu(hb, Gb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Ob, Gb
    }(Bb.Component);

    function Du(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return xu(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return xu(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return xu(bb, ub)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xu(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }
    ru(nu, "displayName", "ReferenceArea"), ru(nu, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), ru(nu, "renderRect", (function(bb, ub) {
      return Bb.isValidElement(bb) ? Bb.cloneElement(bb, ub) : Lb()(bb) ? bb(ub) : Bb.createElement(rb.b, Xu({}, ub, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var zu = function(bb, ub, hb, Bb, Ob) {
        var Gb = (0, jb.c)(bb, Zu.c),
          Ub = (0, jb.c)(bb, wu),
          Lb = [].concat(Du(Gb), Du(Ub)),
          Yb = (0, jb.c)(bb, nu),
          Sb = "".concat(Bb, "Id"),
          ab = Bb[0],
          Hb = ub;
        if (Lb.length && (Hb = Lb.reduce((function(bb, ub) {
            if (ub.props[Sb] === hb && (0, Qb.e)(ub.props, "extendDomain") && (0, zb.z)(ub.props[ab])) {
              var Bb = ub.props[ab];
              return [Math.min(bb[0], Bb), Math.max(bb[1], Bb)]
            }
            return bb
          }), Hb)), Yb.length) {
          var wb = "".concat(ab, "1"),
            Zb = "".concat(ab, "2");
          Hb = Yb.reduce((function(bb, ub) {
            if (ub.props[Sb] === hb && (0, Qb.e)(ub.props, "extendDomain") && (0, zb.z)(ub.props[wb]) && (0, zb.z)(ub.props[Zb])) {
              var Bb = ub.props[wb],
                Ob = ub.props[Zb];
              return [Math.min(bb[0], Bb, Ob), Math.max(bb[1], Bb, Ob)]
            }
            return bb
          }), Hb)
        }
        return Ob && Ob.length && (Hb = Ob.reduce((function(bb, ub) {
          return (0, zb.z)(ub) ? [Math.min(bb[0], ub), Math.max(bb[1], ub)] : bb
        }), Hb)), Hb
      },
      gu = hb(5963),
      iu = hb(5200),
      vu = hb(24),
      tu = new(hb.n(vu)()),
      Ju = "recharts.syncMouseEvents",
      eu = hb(5207);

    function Nu(bb) {
      return Nu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Nu(bb)
    }

    function su(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, mu(Bb.key), Bb)
      }
    }

    function Mu(bb, ub, hb) {
      return (ub = mu(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function mu(bb) {
      var ub = function(bb, ub) {
        if ("object" != Nu(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Nu(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Nu(ub) ? ub : ub + ""
    }
    var Iu = function() {
      return bb = function bb() {
        ! function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, bb), Mu(this, "activeIndex", 0), Mu(this, "coordinateList", []), Mu(this, "layout", "horizontal")
      }, (ub = [{
        key: "setDetails",
        value: function(bb) {
          var ub, hb = bb.coordinateList,
            Bb = void 0 === hb ? null : hb,
            Ob = bb.container,
            Gb = void 0 === Ob ? null : Ob,
            Ub = bb.layout,
            Lb = void 0 === Ub ? null : Ub,
            Yb = bb.offset,
            Sb = void 0 === Yb ? null : Yb,
            ab = bb.mouseHandlerCallback,
            Hb = void 0 === ab ? null : ab;
          this.coordinateList = null !== (ub = null !== Bb && void 0 !== Bb ? Bb : this.coordinateList) && void 0 !== ub ? ub : [], this.container = null !== Gb && void 0 !== Gb ? Gb : this.container, this.layout = null !== Lb && void 0 !== Lb ? Lb : this.layout, this.offset = null !== Sb && void 0 !== Sb ? Sb : this.offset, this.mouseHandlerCallback = null !== Hb && void 0 !== Hb ? Hb : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(bb) {
          if (0 !== this.coordinateList.length) switch (bb.key) {
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
        value: function(bb) {
          this.activeIndex = bb
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var bb, ub;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var hb = this.container.getBoundingClientRect(),
              Bb = hb.x,
              Ob = hb.y,
              Gb = hb.height,
              Ub = this.coordinateList[this.activeIndex].coordinate,
              Lb = (null === (bb = window) || void 0 === bb ? void 0 : bb.scrollX) || 0,
              Yb = (null === (ub = window) || void 0 === ub ? void 0 : ub.scrollY) || 0,
              Sb = Bb + Ub + Lb,
              ab = Ob + this.offset.top + Gb / 2 + Yb;
            this.mouseHandlerCallback({
              pageX: Sb,
              pageY: ab
            })
          }
        }
      }]) && su(bb.prototype, ub), hb && su(bb, hb), Object.defineProperty(bb, "prototype", {
        writable: !1
      }), bb;
      var bb, ub, hb
    }();
    var Pu = hb(6021),
      qu = hb(6088);

    function Eu(bb) {
      return Eu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Eu(bb)
    }
    var yu = ["x", "y", "top", "left", "width", "height", "className"];

    function Vu() {
      return Vu = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Vu.apply(this, arguments)
    }

    function Fu(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function fu(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != Eu(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != Eu(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Eu(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function ku(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }
    var Tu = function(bb, ub, hb, Bb, Ob, Gb) {
        return "M".concat(bb, ",").concat(Ob, "v").concat(Bb, "M").concat(Gb, ",").concat(ub, "h").concat(hb)
      },
      cu = function(bb) {
        var ub = bb.x,
          hb = void 0 === ub ? 0 : ub,
          Ob = bb.y,
          Gb = void 0 === Ob ? 0 : Ob,
          Ub = bb.top,
          Lb = void 0 === Ub ? 0 : Ub,
          Yb = bb.left,
          Sb = void 0 === Yb ? 0 : Yb,
          ab = bb.width,
          Hb = void 0 === ab ? 0 : ab,
          wb = bb.height,
          Zb = void 0 === wb ? 0 : wb,
          Xb = bb.className,
          pb = function(bb) {
            for (var ub = 1; ub < arguments.length; ub++) {
              var hb = null != arguments[ub] ? arguments[ub] : {};
              ub % 2 ? Fu(Object(hb), !0).forEach((function(ub) {
                fu(bb, ub, hb[ub])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Fu(Object(hb)).forEach((function(ub) {
                Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
              }))
            }
            return bb
          }({
            x: hb,
            y: Gb,
            top: Lb,
            left: Sb,
            width: Hb,
            height: Zb
          }, ku(bb, yu));
        return (0, zb.z)(hb) && (0, zb.z)(Gb) && (0, zb.z)(Hb) && (0, zb.z)(Zb) && (0, zb.z)(Lb) && (0, zb.z)(Sb) ? Bb.createElement("path", Vu({}, (0, jb.b)(pb, !0), {
          className: (0, ob.e)("recharts-cross", Xb),
          d: Tu(hb, Gb, Hb, Zb, Lb, Sb)
        })) : null
      };

    function Qu(bb) {
      var ub = bb.cx,
        hb = bb.cy,
        Bb = bb.radius,
        Ob = bb.startAngle,
        Gb = bb.endAngle;
      return {
        points: [(0, gu.k)(ub, hb, Bb, Ob), (0, gu.k)(ub, hb, Bb, Gb)],
        cx: ub,
        cy: hb,
        radius: Bb,
        startAngle: Ob,
        endAngle: Gb
      }
    }
    var Ru = hb(6048);

    function bh(bb, ub, hb) {
      var Bb, Ob, Gb, Ub;
      if ("horizontal" === bb) Gb = Bb = ub.x, Ob = hb.top, Ub = hb.top + hb.height;
      else if ("vertical" === bb) Ub = Ob = ub.y, Bb = hb.left, Gb = hb.left + hb.width;
      else if (null != ub.cx && null != ub.cy) {
        if ("centric" !== bb) return Qu(ub);
        var Lb = ub.cx,
          Yb = ub.cy,
          Sb = ub.innerRadius,
          ab = ub.outerRadius,
          Hb = ub.angle,
          wb = (0, gu.k)(Lb, Yb, Sb, Hb),
          Zb = (0, gu.k)(Lb, Yb, ab, Hb);
        Bb = wb.x, Ob = wb.y, Gb = Zb.x, Ub = Zb.y
      }
      return [{
        x: Bb,
        y: Ob
      }, {
        x: Gb,
        y: Ub
      }]
    }

    function uh(bb) {
      return uh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, uh(bb)
    }

    function hh(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Bh(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? hh(Object(hb), !0).forEach((function(ub) {
          Oh(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : hh(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Oh(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != uh(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != uh(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == uh(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Gh(bb) {
      var ub, hb, Ob, Gb = bb.element,
        Ub = bb.tooltipEventType,
        Lb = bb.isActive,
        Yb = bb.activeCoordinate,
        Sb = bb.activePayload,
        ab = bb.offset,
        Hb = bb.activeTooltipIndex,
        wb = bb.tooltipAxisBandSize,
        Zb = bb.layout,
        Xb = bb.chartName,
        pb = null !== (ub = Gb.props.cursor) && void 0 !== ub ? ub : null === (hb = Gb.type.defaultProps) || void 0 === hb ? void 0 : hb.cursor;
      if (!Gb || !pb || !Lb || !Yb || "ScatterChart" !== Xb && "axis" !== Ub) return null;
      var Ab = qu.e;
      if ("ScatterChart" === Xb) Ob = Yb, Ab = cu;
      else if ("BarChart" === Xb) Ob = function(bb, ub, hb, Bb) {
        var Ob = Bb / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === bb ? ub.x - Ob : hb.left + .5,
          y: "horizontal" === bb ? hb.top + .5 : ub.y - Ob,
          width: "horizontal" === bb ? Bb : hb.width - 1,
          height: "horizontal" === bb ? hb.height - 1 : Bb
        }
      }(Zb, Yb, ab, wb), Ab = rb.b;
      else if ("radial" === Zb) {
        var lb = Qu(Yb),
          Kb = lb.cx,
          Wb = lb.cy,
          Cb = lb.radius;
        Ob = {
          cx: Kb,
          cy: Wb,
          startAngle: lb.startAngle,
          endAngle: lb.endAngle,
          innerRadius: Cb,
          outerRadius: Cb
        }, Ab = Ru.e
      } else Ob = {
        points: bh(Zb, Yb, ab)
      }, Ab = qu.e;
      var db = Bh(Bh(Bh(Bh({
        stroke: "#ccc",
        pointerEvents: "none"
      }, ab), Ob), (0, jb.b)(pb, !1)), {}, {
        payload: Sb,
        payloadIndex: Hb,
        className: (0, ob.e)("recharts-tooltip-cursor", pb.className)
      });
      return (0, Bb.isValidElement)(pb) ? (0, Bb.cloneElement)(pb, db) : (0, Bb.createElement)(Ab, db)
    }
    var Uh = hb(6067),
      Lh = ["item"],
      Yh = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function Sh(bb) {
      return Sh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Sh(bb)
    }

    function ah() {
      return ah = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, ah.apply(this, arguments)
    }

    function Hh(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || Kh(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wh(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function Zh(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, jh(Bb.key), Bb)
      }
    }

    function Xh(bb, ub, hb) {
      return ub = oh(ub),
        function(bb, ub) {
          if (ub && ("object" === Sh(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, ph() ? Reflect.construct(ub, hb || [], oh(bb).constructor) : ub.apply(bb, hb))
    }

    function ph() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (ph = function() {
        return !!bb
      })()
    }

    function oh(bb) {
      return oh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, oh(bb)
    }

    function Ah(bb, ub) {
      return Ah = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, Ah(bb, ub)
    }

    function lh(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Wh(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Kh(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Kh(bb, ub) {
      if (bb) {
        if ("string" === typeof bb) return Wh(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === hb && bb.constructor && (hb = bb.constructor.name), "Map" === hb || "Set" === hb ? Array.from(bb) : "Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb) ? Wh(bb, ub) : void 0
      }
    }

    function Wh(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Ch(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function dh(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Ch(Object(hb), !0).forEach((function(ub) {
          rh(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Ch(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function rh(bb, ub, hb) {
      return (ub = jh(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function jh(bb) {
      var ub = function(bb, ub) {
        if ("object" != Sh(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Sh(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Sh(ub) ? ub : ub + ""
    }
    var nh = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      Dh = {
        width: "100%",
        height: "100%"
      },
      xh = {
        x: 0,
        y: 0
      };

    function zh(bb) {
      return bb
    }
    var gh = function(bb, ub) {
      var hb = ub.graphicalItems,
        Bb = ub.dataStartIndex,
        Ob = ub.dataEndIndex,
        Gb = (null !== hb && void 0 !== hb ? hb : []).reduce((function(bb, ub) {
          var hb = ub.props.data;
          return hb && hb.length ? [].concat(lh(bb), lh(hb)) : bb
        }), []);
      return Gb.length > 0 ? Gb : bb && bb.length && (0, zb.z)(Bb) && (0, zb.z)(Ob) ? bb.slice(Bb, Ob + 1) : []
    };

    function ih(bb) {
      return "number" === bb ? [0, "auto"] : void 0
    }
    var vh = function(bb, ub, hb, Bb) {
        var Ob = bb.graphicalItems,
          Gb = bb.tooltipAxis,
          Ub = gh(ub, bb);
        return hb < 0 || !Ob || !Ob.length || hb >= Ub.length ? null : Ob.reduce((function(Ob, Lb) {
          var Yb, Sb, ab = null !== (Yb = Lb.props.data) && void 0 !== Yb ? Yb : ub;
          if (ab && bb.dataStartIndex + bb.dataEndIndex !== 0 && bb.dataEndIndex - bb.dataStartIndex >= hb && (ab = ab.slice(bb.dataStartIndex, bb.dataEndIndex + 1)), Gb.dataKey && !Gb.allowDuplicatedCategory) {
            var Hb = void 0 === ab ? Ub : ab;
            Sb = (0, zb.i)(Hb, Gb.dataKey, Bb)
          } else Sb = ab && ab[hb] || Ub[hb];
          return Sb ? [].concat(lh(Ob), [(0, xb.U)(Lb, Sb)]) : Ob
        }), [])
      },
      th = function(bb, ub, hb, Bb) {
        var Ob = Bb || {
            x: bb.chartX,
            y: bb.chartY
          },
          Gb = function(bb, ub) {
            return "horizontal" === ub ? bb.x : "vertical" === ub ? bb.y : "centric" === ub ? bb.angle : bb.radius
          }(Ob, hb),
          Ub = bb.orderedTooltipTicks,
          Lb = bb.tooltipAxis,
          Yb = bb.tooltipTicks,
          Sb = (0, xb.g)(Gb, Ub, Yb, Lb);
        if (Sb >= 0 && Yb) {
          var ab = Yb[Sb] && Yb[Sb].value,
            Hb = vh(bb, ub, Sb, ab),
            wb = function(bb, ub, hb, Bb) {
              var Ob = ub.find((function(bb) {
                return bb && bb.index === hb
              }));
              if (Ob) {
                if ("horizontal" === bb) return {
                  x: Ob.coordinate,
                  y: Bb.y
                };
                if ("vertical" === bb) return {
                  x: Bb.x,
                  y: Ob.coordinate
                };
                if ("centric" === bb) {
                  var Gb = Ob.coordinate,
                    Ub = Bb.radius;
                  return dh(dh(dh({}, Bb), (0, gu.k)(Bb.cx, Bb.cy, Ub, Gb)), {}, {
                    angle: Gb,
                    radius: Ub
                  })
                }
                var Lb = Ob.coordinate,
                  Yb = Bb.angle;
                return dh(dh(dh({}, Bb), (0, gu.k)(Bb.cx, Bb.cy, Lb, Yb)), {}, {
                  angle: Yb,
                  radius: Lb
                })
              }
              return xh
            }(hb, Ub, Sb, Ob);
          return {
            activeTooltipIndex: Sb,
            activeLabel: ab,
            activePayload: Hb,
            activeCoordinate: wb
          }
        }
        return null
      },
      Jh = function(bb, ub) {
        var hb = ub.axes,
          Bb = ub.graphicalItems,
          Ob = ub.axisType,
          Ub = ub.axisIdKey,
          Lb = ub.stackGroups,
          Yb = ub.dataStartIndex,
          ab = ub.dataEndIndex,
          Hb = bb.layout,
          wb = bb.children,
          Zb = bb.stackOffset,
          Xb = (0, xb.X)(Hb, Ob);
        return hb.reduce((function(ub, hb) {
          var pb, ob = void 0 !== hb.type.defaultProps ? dh(dh({}, hb.type.defaultProps), hb.props) : hb.props,
            Ab = ob.type,
            lb = ob.dataKey,
            Kb = ob.allowDataOverflow,
            Wb = ob.allowDuplicatedCategory,
            Cb = ob.scale,
            db = ob.ticks,
            rb = ob.includeHidden,
            jb = ob[Ub];
          if (ub[jb]) return ub;
          var nb, Db, gb, ib = gh(bb.data, {
              graphicalItems: Bb.filter((function(bb) {
                var ub;
                return (Ub in bb.props ? bb.props[Ub] : null === (ub = bb.type.defaultProps) || void 0 === ub ? void 0 : ub[Ub]) === jb
              })),
              dataStartIndex: Yb,
              dataEndIndex: ab
            }),
            vb = ib.length;
          (function(bb, ub, hb) {
            if ("number" === hb && !0 === ub && Array.isArray(bb)) {
              var Bb = null === bb || void 0 === bb ? void 0 : bb[0],
                Ob = null === bb || void 0 === bb ? void 0 : bb[1];
              if (Bb && Ob && (0, zb.z)(Bb) && (0, zb.z)(Ob)) return !0
            }
            return !1
          })(ob.domain, Kb, Ab) && (nb = (0, xb.cb)(ob.domain, null, Kb), !Xb || "number" !== Ab && "auto" === Cb || (gb = (0, xb.C)(ib, lb, "category")));
          var tb = ih(Ab);
          if (!nb || 0 === nb.length) {
            var Jb, eb = null !== (Jb = ob.domain) && void 0 !== Jb ? Jb : tb;
            if (lb) {
              if (nb = (0, xb.C)(ib, lb, Ab), "category" === Ab && Xb) {
                var Nb = (0, zb.p)(nb);
                Wb && Nb ? (Db = nb, nb = Sb()(0, vb)) : Wb || (nb = (0, xb.$)(eb, nb, hb).reduce((function(bb, ub) {
                  return bb.indexOf(ub) >= 0 ? bb : [].concat(lh(bb), [ub])
                }), []))
              } else if ("category" === Ab) nb = Wb ? nb.filter((function(bb) {
                return "" !== bb && !Gb()(bb)
              })) : (0, xb.$)(eb, nb, hb).reduce((function(bb, ub) {
                return bb.indexOf(ub) >= 0 || "" === ub || Gb()(ub) ? bb : [].concat(lh(bb), [ub])
              }), []);
              else if ("number" === Ab) {
                var sb = (0, xb.ab)(ib, Bb.filter((function(bb) {
                  var ub, hb, Bb = Ub in bb.props ? bb.props[Ub] : null === (ub = bb.type.defaultProps) || void 0 === ub ? void 0 : ub[Ub],
                    Ob = "hide" in bb.props ? bb.props.hide : null === (hb = bb.type.defaultProps) || void 0 === hb ? void 0 : hb.hide;
                  return Bb === jb && (rb || !Ob)
                })), lb, Ob, Hb);
                sb && (nb = sb)
              }!Xb || "number" !== Ab && "auto" === Cb || (gb = (0, xb.C)(ib, lb, "category"))
            } else nb = Xb ? Sb()(0, vb) : Lb && Lb[jb] && Lb[jb].hasStack && "number" === Ab ? "expand" === Zb ? [0, 1] : (0, xb.G)(Lb[jb].stackGroups, Yb, ab) : (0, xb.E)(ib, Bb.filter((function(bb) {
              var ub = Ub in bb.props ? bb.props[Ub] : bb.type.defaultProps[Ub],
                hb = "hide" in bb.props ? bb.props.hide : bb.type.defaultProps.hide;
              return ub === jb && (rb || !hb)
            })), Ab, Hb, !0);
            if ("number" === Ab) nb = zu(wb, nb, jb, Ob, db), eb && (nb = (0, xb.cb)(eb, nb, Kb));
            else if ("category" === Ab && eb) {
              var Mb = eb;
              nb.every((function(bb) {
                return Mb.indexOf(bb) >= 0
              })) && (nb = Mb)
            }
          }
          return dh(dh({}, ub), {}, rh({}, jb, dh(dh({}, ob), {}, {
            axisType: Ob,
            domain: nb,
            categoricalDomain: gb,
            duplicateDomain: Db,
            originalDomain: null !== (pb = ob.domain) && void 0 !== pb ? pb : tb,
            isCategorical: Xb,
            layout: Hb
          })))
        }), {})
      },
      eh = function(bb, ub) {
        var hb = ub.axisType,
          Bb = void 0 === hb ? "xAxis" : hb,
          Ob = ub.AxisComp,
          Gb = ub.graphicalItems,
          Ub = ub.stackGroups,
          Lb = ub.dataStartIndex,
          Yb = ub.dataEndIndex,
          ab = bb.children,
          wb = "".concat(Bb, "Id"),
          Zb = (0, jb.c)(ab, Ob),
          Xb = {};
        return Zb && Zb.length ? Xb = Jh(bb, {
          axes: Zb,
          graphicalItems: Gb,
          axisType: Bb,
          axisIdKey: wb,
          stackGroups: Ub,
          dataStartIndex: Lb,
          dataEndIndex: Yb
        }) : Gb && Gb.length && (Xb = function(bb, ub) {
          var hb = ub.graphicalItems,
            Bb = ub.Axis,
            Ob = ub.axisType,
            Gb = ub.axisIdKey,
            Ub = ub.stackGroups,
            Lb = ub.dataStartIndex,
            Yb = ub.dataEndIndex,
            ab = bb.layout,
            wb = bb.children,
            Zb = gh(bb.data, {
              graphicalItems: hb,
              dataStartIndex: Lb,
              dataEndIndex: Yb
            }),
            Xb = Zb.length,
            pb = (0, xb.X)(ab, Ob),
            ob = -1;
          return hb.reduce((function(bb, ub) {
            var Ab, lb = (void 0 !== ub.type.defaultProps ? dh(dh({}, ub.type.defaultProps), ub.props) : ub.props)[Gb],
              Kb = ih("number");
            return bb[lb] ? bb : (ob++, pb ? Ab = Sb()(0, Xb) : Ub && Ub[lb] && Ub[lb].hasStack ? (Ab = (0, xb.G)(Ub[lb].stackGroups, Lb, Yb), Ab = zu(wb, Ab, lb, Ob)) : (Ab = (0, xb.cb)(Kb, (0, xb.E)(Zb, hb.filter((function(bb) {
              var ub, hb, Bb = Gb in bb.props ? bb.props[Gb] : null === (ub = bb.type.defaultProps) || void 0 === ub ? void 0 : ub[Gb],
                Ob = "hide" in bb.props ? bb.props.hide : null === (hb = bb.type.defaultProps) || void 0 === hb ? void 0 : hb.hide;
              return Bb === lb && !Ob
            })), "number", ab), Bb.defaultProps.allowDataOverflow), Ab = zu(wb, Ab, lb, Ob)), dh(dh({}, bb), {}, rh({}, lb, dh(dh({
              axisType: Ob
            }, Bb.defaultProps), {}, {
              hide: !0,
              orientation: Hb()(nh, "".concat(Ob, ".").concat(ob % 2), null),
              domain: Ab,
              originalDomain: Kb,
              isCategorical: pb,
              layout: ab
            }))))
          }), {})
        }(bb, {
          Axis: Ob,
          graphicalItems: Gb,
          axisType: Bb,
          axisIdKey: wb,
          stackGroups: Ub,
          dataStartIndex: Lb,
          dataEndIndex: Yb
        })), Xb
      },
      Nh = function(bb) {
        var ub = bb.children,
          hb = bb.defaultShowTooltip,
          Bb = (0, jb.d)(ub, fb),
          Ob = 0,
          Gb = 0;
        return bb.data && 0 !== bb.data.length && (Gb = bb.data.length - 1), Bb && Bb.props && (Bb.props.startIndex >= 0 && (Ob = Bb.props.startIndex), Bb.props.endIndex >= 0 && (Gb = Bb.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: Ob,
          dataEndIndex: Gb,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(hb)
        }
      },
      sh = function(bb) {
        return "horizontal" === bb ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === bb ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === bb ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      Mh = function(bb, ub) {
        return "xAxis" === ub ? bb[ub].width : "yAxis" === ub ? bb[ub].height : void 0
      },
      mh = function(bb) {
        var ub = bb.chartName,
          hb = bb.GraphicalChild,
          Ob = bb.defaultTooltipEventType,
          Ub = void 0 === Ob ? "axis" : Ob,
          Yb = bb.validateTooltipEventTypes,
          Sb = void 0 === Yb ? ["axis"] : Yb,
          ab = bb.axisComponents,
          wb = bb.legendContent,
          Xb = bb.formatAxisMap,
          nb = bb.defaultProps,
          Db = function(bb, ub) {
            var hb = ub.graphicalItems,
              Bb = ub.stackGroups,
              Ob = ub.offset,
              Ub = ub.updateId,
              Lb = ub.dataStartIndex,
              Yb = ub.dataEndIndex,
              Sb = bb.barSize,
              Hb = bb.layout,
              wb = bb.barGap,
              Zb = bb.barCategoryGap,
              Xb = bb.maxBarSize,
              pb = sh(Hb),
              ob = pb.numericAxisName,
              lb = pb.cateAxisName,
              Kb = function(bb) {
                return !(!bb || !bb.length) && bb.some((function(bb) {
                  var ub = (0, jb.g)(bb && bb.type);
                  return ub && ub.indexOf("Bar") >= 0
                }))
              }(hb),
              Wb = [];
            return hb.forEach((function(hb, pb) {
              var Cb = gh(bb.data, {
                  graphicalItems: [hb],
                  dataStartIndex: Lb,
                  dataEndIndex: Yb
                }),
                db = void 0 !== hb.type.defaultProps ? dh(dh({}, hb.type.defaultProps), hb.props) : hb.props,
                rb = db.dataKey,
                nb = db.maxBarSize,
                Db = db["".concat(ob, "Id")],
                zb = db["".concat(lb, "Id")],
                gb = ab.reduce((function(bb, hb) {
                  var Bb = ub["".concat(hb.axisType, "Map")],
                    Ob = db["".concat(hb.axisType, "Id")];
                  Bb && Bb[Ob] || "zAxis" === hb.axisType || (0, Ab.e)(!1);
                  var Gb = Bb[Ob];
                  return dh(dh({}, bb), {}, rh(rh({}, hb.axisType, Gb), "".concat(hb.axisType, "Ticks"), (0, xb.P)(Gb)))
                }), {}),
                ib = gb[lb],
                vb = gb["".concat(lb, "Ticks")],
                tb = Bb && Bb[Db] && Bb[Db].hasStack && (0, xb.O)(hb, Bb[Db].stackGroups),
                Jb = (0, jb.g)(hb.type).indexOf("Bar") >= 0,
                eb = (0, xb.m)(ib, vb),
                Nb = [],
                sb = Kb && (0, xb.p)({
                  barSize: Sb,
                  stackGroups: Bb,
                  totalSize: Mh(gb, lb)
                });
              if (Jb) {
                var Mb, mb, Ib = Gb()(nb) ? Xb : nb,
                  Pb = null !== (Mb = null !== (mb = (0, xb.m)(ib, vb, !0)) && void 0 !== mb ? mb : Ib) && void 0 !== Mb ? Mb : 0;
                Nb = (0, xb.o)({
                  barGap: wb,
                  barCategoryGap: Zb,
                  bandSize: Pb !== eb ? Pb : eb,
                  sizeList: sb[zb],
                  maxBarSize: Ib
                }), Pb !== eb && (Nb = Nb.map((function(bb) {
                  return dh(dh({}, bb), {}, {
                    position: dh(dh({}, bb.position), {}, {
                      offset: bb.position.offset - Pb / 2
                    })
                  })
                })))
              }
              var qb = hb && hb.type && hb.type.getComposedData;
              qb && Wb.push({
                props: dh(dh({}, qb(dh(dh({}, gb), {}, {
                  displayedData: Cb,
                  props: bb,
                  dataKey: rb,
                  item: hb,
                  bandSize: eb,
                  barPosition: Nb,
                  offset: Ob,
                  stackedData: tb,
                  layout: Hb,
                  dataStartIndex: Lb,
                  dataEndIndex: Yb
                }))), {}, rh(rh(rh({
                  key: hb.key || "item-".concat(pb)
                }, ob, gb[ob]), lb, gb[lb]), "animationId", Ub)),
                childIndex: (0, jb.p)(hb, bb.children),
                item: hb
              })
            })), Wb
          },
          gb = function(bb, Bb) {
            var Ob = bb.props,
              Gb = bb.dataStartIndex,
              Ub = bb.dataEndIndex,
              Lb = bb.updateId;
            if (!(0, jb.x)({
                props: Ob
              })) return null;
            var Yb = Ob.children,
              Sb = Ob.layout,
              wb = Ob.stackOffset,
              pb = Ob.data,
              ob = Ob.reverseStackOrder,
              Ab = sh(Sb),
              lb = Ab.numericAxisName,
              Kb = Ab.cateAxisName,
              Wb = (0, jb.c)(Yb, hb),
              db = (0, xb.M)(pb, Wb, "".concat(lb, "Id"), "".concat(Kb, "Id"), wb, ob),
              rb = ab.reduce((function(bb, ub) {
                var hb = "".concat(ub.axisType, "Map");
                return dh(dh({}, bb), {}, rh({}, hb, eh(Ob, dh(dh({}, ub), {}, {
                  graphicalItems: Wb,
                  stackGroups: ub.axisType === lb && db,
                  dataStartIndex: Gb,
                  dataEndIndex: Ub
                }))))
              }), {}),
              nb = function(bb, ub) {
                var hb = bb.props,
                  Bb = bb.graphicalItems,
                  Ob = bb.xAxisMap,
                  Gb = void 0 === Ob ? {} : Ob,
                  Ub = bb.yAxisMap,
                  Lb = void 0 === Ub ? {} : Ub,
                  Yb = hb.width,
                  Sb = hb.height,
                  ab = hb.children,
                  wb = hb.margin || {},
                  Zb = (0, jb.d)(ab, fb),
                  Xb = (0, jb.d)(ab, Cb.d),
                  pb = Object.keys(Lb).reduce((function(bb, ub) {
                    var hb = Lb[ub],
                      Bb = hb.orientation;
                    return hb.mirror || hb.hide ? bb : dh(dh({}, bb), {}, rh({}, Bb, bb[Bb] + hb.width))
                  }), {
                    left: wb.left || 0,
                    right: wb.right || 0
                  }),
                  ob = Object.keys(Gb).reduce((function(bb, ub) {
                    var hb = Gb[ub],
                      Bb = hb.orientation;
                    return hb.mirror || hb.hide ? bb : dh(dh({}, bb), {}, rh({}, Bb, Hb()(bb, "".concat(Bb)) + hb.height))
                  }), {
                    top: wb.top || 0,
                    bottom: wb.bottom || 0
                  }),
                  Ab = dh(dh({}, ob), pb),
                  lb = Ab.bottom;
                Zb && (Ab.bottom += Zb.props.height || fb.defaultProps.height), Xb && ub && (Ab = (0, xb.c)(Ab, Bb, hb, ub));
                var Kb = Yb - Ab.left - Ab.right,
                  Wb = Sb - Ab.top - Ab.bottom;
                return dh(dh({
                  brushBottom: lb
                }, Ab), {}, {
                  width: Math.max(Kb, 0),
                  height: Math.max(Wb, 0)
                })
              }(dh(dh({}, rb), {}, {
                props: Ob,
                graphicalItems: Wb
              }), null === Bb || void 0 === Bb ? void 0 : Bb.legendBBox);
            Object.keys(rb).forEach((function(bb) {
              rb[bb] = Xb(Ob, rb[bb], nb, bb.replace("Map", ""), ub)
            }));
            var gb = function(bb) {
                var ub = (0, zb.k)(bb),
                  hb = (0, xb.P)(ub, !1, !0);
                return {
                  tooltipTicks: hb,
                  orderedTooltipTicks: Zb()(hb, (function(bb) {
                    return bb.coordinate
                  })),
                  tooltipAxis: ub,
                  tooltipAxisBandSize: (0, xb.m)(ub, hb)
                }
              }(rb["".concat(Kb, "Map")]),
              ib = Db(Ob, dh(dh({}, rb), {}, {
                dataStartIndex: Gb,
                dataEndIndex: Ub,
                updateId: Lb,
                graphicalItems: Wb,
                stackGroups: db,
                offset: nb
              }));
            return dh(dh({
              formattedGraphicalItems: ib,
              graphicalItems: Wb,
              offset: nb,
              stackGroups: db
            }, gb), rb)
          },
          ib = function(bb) {
            function hb(bb) {
              var Ob, Ub, Yb;
              return function(bb, ub) {
                if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
              }(this, hb), rh(Yb = Xh(this, hb, [bb]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), rh(Yb, "accessibilityManager", new Iu), rh(Yb, "handleLegendBBoxUpdate", (function(bb) {
                if (bb) {
                  var ub = Yb.state,
                    hb = ub.dataStartIndex,
                    Bb = ub.dataEndIndex,
                    Ob = ub.updateId;
                  Yb.setState(dh({
                    legendBBox: bb
                  }, gb({
                    props: Yb.props,
                    dataStartIndex: hb,
                    dataEndIndex: Bb,
                    updateId: Ob
                  }, dh(dh({}, Yb.state), {}, {
                    legendBBox: bb
                  }))))
                }
              })), rh(Yb, "handleReceiveSyncEvent", (function(bb, ub, hb) {
                if (Yb.props.syncId === bb) {
                  if (hb === Yb.eventEmitterSymbol && "function" !== typeof Yb.props.syncMethod) return;
                  Yb.applySyncEvent(ub)
                }
              })), rh(Yb, "handleBrushChange", (function(bb) {
                var ub = bb.startIndex,
                  hb = bb.endIndex;
                if (ub !== Yb.state.dataStartIndex || hb !== Yb.state.dataEndIndex) {
                  var Bb = Yb.state.updateId;
                  Yb.setState((function() {
                    return dh({
                      dataStartIndex: ub,
                      dataEndIndex: hb
                    }, gb({
                      props: Yb.props,
                      dataStartIndex: ub,
                      dataEndIndex: hb,
                      updateId: Bb
                    }, Yb.state))
                  })), Yb.triggerSyncEvent({
                    dataStartIndex: ub,
                    dataEndIndex: hb
                  })
                }
              })), rh(Yb, "handleMouseEnter", (function(bb) {
                var ub = Yb.getMouseInfo(bb);
                if (ub) {
                  var hb = dh(dh({}, ub), {}, {
                    isTooltipActive: !0
                  });
                  Yb.setState(hb), Yb.triggerSyncEvent(hb);
                  var Bb = Yb.props.onMouseEnter;
                  Lb()(Bb) && Bb(hb, bb)
                }
              })), rh(Yb, "triggeredAfterMouseMove", (function(bb) {
                var ub = Yb.getMouseInfo(bb),
                  hb = ub ? dh(dh({}, ub), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                Yb.setState(hb), Yb.triggerSyncEvent(hb);
                var Bb = Yb.props.onMouseMove;
                Lb()(Bb) && Bb(hb, bb)
              })), rh(Yb, "handleItemMouseEnter", (function(bb) {
                Yb.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: bb,
                    activePayload: bb.tooltipPayload,
                    activeCoordinate: bb.tooltipPosition || {
                      x: bb.cx,
                      y: bb.cy
                    }
                  }
                }))
              })), rh(Yb, "handleItemMouseLeave", (function() {
                Yb.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), rh(Yb, "handleMouseMove", (function(bb) {
                bb.persist(), Yb.throttleTriggeredAfterMouseMove(bb)
              })), rh(Yb, "handleMouseLeave", (function(bb) {
                Yb.throttleTriggeredAfterMouseMove.cancel();
                var ub = {
                  isTooltipActive: !1
                };
                Yb.setState(ub), Yb.triggerSyncEvent(ub);
                var hb = Yb.props.onMouseLeave;
                Lb()(hb) && hb(ub, bb)
              })), rh(Yb, "handleOuterEvent", (function(bb) {
                var ub, hb = (0, jb.i)(bb),
                  Bb = Hb()(Yb.props, "".concat(hb));
                hb && Lb()(Bb) && Bb(null !== (ub = /.*touch.*/i.test(hb) ? Yb.getMouseInfo(bb.changedTouches[0]) : Yb.getMouseInfo(bb)) && void 0 !== ub ? ub : {}, bb)
              })), rh(Yb, "handleClick", (function(bb) {
                var ub = Yb.getMouseInfo(bb);
                if (ub) {
                  var hb = dh(dh({}, ub), {}, {
                    isTooltipActive: !0
                  });
                  Yb.setState(hb), Yb.triggerSyncEvent(hb);
                  var Bb = Yb.props.onClick;
                  Lb()(Bb) && Bb(hb, bb)
                }
              })), rh(Yb, "handleMouseDown", (function(bb) {
                var ub = Yb.props.onMouseDown;
                Lb()(ub) && ub(Yb.getMouseInfo(bb), bb)
              })), rh(Yb, "handleMouseUp", (function(bb) {
                var ub = Yb.props.onMouseUp;
                Lb()(ub) && ub(Yb.getMouseInfo(bb), bb)
              })), rh(Yb, "handleTouchMove", (function(bb) {
                null != bb.changedTouches && bb.changedTouches.length > 0 && Yb.throttleTriggeredAfterMouseMove(bb.changedTouches[0])
              })), rh(Yb, "handleTouchStart", (function(bb) {
                null != bb.changedTouches && bb.changedTouches.length > 0 && Yb.handleMouseDown(bb.changedTouches[0])
              })), rh(Yb, "handleTouchEnd", (function(bb) {
                null != bb.changedTouches && bb.changedTouches.length > 0 && Yb.handleMouseUp(bb.changedTouches[0])
              })), rh(Yb, "handleDoubleClick", (function(bb) {
                var ub = Yb.props.onDoubleClick;
                Lb()(ub) && ub(Yb.getMouseInfo(bb), bb)
              })), rh(Yb, "handleContextMenu", (function(bb) {
                var ub = Yb.props.onContextMenu;
                Lb()(ub) && ub(Yb.getMouseInfo(bb), bb)
              })), rh(Yb, "triggerSyncEvent", (function(bb) {
                void 0 !== Yb.props.syncId && tu.emit(Ju, Yb.props.syncId, bb, Yb.eventEmitterSymbol)
              })), rh(Yb, "applySyncEvent", (function(bb) {
                var ub = Yb.props,
                  hb = ub.layout,
                  Bb = ub.syncMethod,
                  Ob = Yb.state.updateId,
                  Gb = bb.dataStartIndex,
                  Ub = bb.dataEndIndex;
                if (void 0 !== bb.dataStartIndex || void 0 !== bb.dataEndIndex) Yb.setState(dh({
                  dataStartIndex: Gb,
                  dataEndIndex: Ub
                }, gb({
                  props: Yb.props,
                  dataStartIndex: Gb,
                  dataEndIndex: Ub,
                  updateId: Ob
                }, Yb.state)));
                else if (void 0 !== bb.activeTooltipIndex) {
                  var Lb = bb.chartX,
                    Sb = bb.chartY,
                    ab = bb.activeTooltipIndex,
                    Hb = Yb.state,
                    wb = Hb.offset,
                    Zb = Hb.tooltipTicks;
                  if (!wb) return;
                  if ("function" === typeof Bb) ab = Bb(Zb, bb);
                  else if ("value" === Bb) {
                    ab = -1;
                    for (var Xb = 0; Xb < Zb.length; Xb++)
                      if (Zb[Xb].value === bb.activeLabel) {
                        ab = Xb;
                        break
                      }
                  }
                  var pb = dh(dh({}, wb), {}, {
                      x: wb.left,
                      y: wb.top
                    }),
                    ob = Math.min(Lb, pb.x + pb.width),
                    Ab = Math.min(Sb, pb.y + pb.height),
                    lb = Zb[ab] && Zb[ab].value,
                    Kb = vh(Yb.state, Yb.props.data, ab),
                    Wb = Zb[ab] ? {
                      x: "horizontal" === hb ? Zb[ab].coordinate : ob,
                      y: "horizontal" === hb ? Ab : Zb[ab].coordinate
                    } : xh;
                  Yb.setState(dh(dh({}, bb), {}, {
                    activeLabel: lb,
                    activeCoordinate: Wb,
                    activePayload: Kb,
                    activeTooltipIndex: ab
                  }))
                } else Yb.setState(bb)
              })), rh(Yb, "renderCursor", (function(bb) {
                var hb, Ob = Yb.state,
                  Gb = Ob.isTooltipActive,
                  Ub = Ob.activeCoordinate,
                  Lb = Ob.activePayload,
                  Sb = Ob.offset,
                  ab = Ob.activeTooltipIndex,
                  Hb = Ob.tooltipAxisBandSize,
                  wb = Yb.getTooltipEventType(),
                  Zb = null !== (hb = bb.props.active) && void 0 !== hb ? hb : Gb,
                  Xb = Yb.props.layout,
                  pb = bb.key || "_recharts-cursor";
                return Bb.createElement(Gh, {
                  key: pb,
                  activeCoordinate: Ub,
                  activePayload: Lb,
                  activeTooltipIndex: ab,
                  chartName: ub,
                  element: bb,
                  isActive: Zb,
                  layout: Xb,
                  offset: Sb,
                  tooltipAxisBandSize: Hb,
                  tooltipEventType: wb
                })
              })), rh(Yb, "renderPolarAxis", (function(bb, ub, hb) {
                var Ob = Hb()(bb, "type.axisType"),
                  Gb = Hb()(Yb.state, "".concat(Ob, "Map")),
                  Ub = bb.type.defaultProps,
                  Lb = void 0 !== Ub ? dh(dh({}, Ub), bb.props) : bb.props,
                  Sb = Gb && Gb[Lb["".concat(Ob, "Id")]];
                return (0, Bb.cloneElement)(bb, dh(dh({}, Sb), {}, {
                  className: (0, ob.e)(Ob, Sb.className),
                  key: bb.key || "".concat(ub, "-").concat(hb),
                  ticks: (0, xb.P)(Sb, !0)
                }))
              })), rh(Yb, "renderPolarGrid", (function(bb) {
                var ub = bb.props,
                  hb = ub.radialLines,
                  Ob = ub.polarAngles,
                  Gb = ub.polarRadius,
                  Ub = Yb.state,
                  Lb = Ub.radiusAxisMap,
                  Sb = Ub.angleAxisMap,
                  ab = (0, zb.k)(Lb),
                  Hb = (0, zb.k)(Sb),
                  wb = Hb.cx,
                  Zb = Hb.cy,
                  Xb = Hb.innerRadius,
                  pb = Hb.outerRadius;
                return (0, Bb.cloneElement)(bb, {
                  polarAngles: Array.isArray(Ob) ? Ob : (0, xb.P)(Hb, !0).map((function(bb) {
                    return bb.coordinate
                  })),
                  polarRadius: Array.isArray(Gb) ? Gb : (0, xb.P)(ab, !0).map((function(bb) {
                    return bb.coordinate
                  })),
                  cx: wb,
                  cy: Zb,
                  innerRadius: Xb,
                  outerRadius: pb,
                  key: bb.key || "polar-grid",
                  radialLines: hb
                })
              })), rh(Yb, "renderLegend", (function() {
                var bb = Yb.state.formattedGraphicalItems,
                  ub = Yb.props,
                  hb = ub.children,
                  Ob = ub.width,
                  Gb = ub.height,
                  Ub = Yb.props.margin || {},
                  Lb = Ob - (Ub.left || 0) - (Ub.right || 0),
                  Sb = (0, Tb.d)({
                    children: hb,
                    formattedGraphicalItems: bb,
                    legendWidth: Lb,
                    legendContent: wb
                  });
                if (!Sb) return null;
                var ab = Sb.item,
                  Hb = wh(Sb, Lh);
                return (0, Bb.cloneElement)(ab, dh(dh({}, Hb), {}, {
                  chartWidth: Ob,
                  chartHeight: Gb,
                  margin: Ub,
                  onBBoxUpdate: Yb.handleLegendBBoxUpdate
                }))
              })), rh(Yb, "renderTooltip", (function() {
                var bb, ub = Yb.props,
                  hb = ub.children,
                  Ob = ub.accessibilityLayer,
                  Gb = (0, jb.d)(hb, Wb.c);
                if (!Gb) return null;
                var Ub = Yb.state,
                  Lb = Ub.isTooltipActive,
                  Sb = Ub.activeCoordinate,
                  ab = Ub.activePayload,
                  Hb = Ub.activeLabel,
                  wb = Ub.offset,
                  Zb = null !== (bb = Gb.props.active) && void 0 !== bb ? bb : Lb;
                return (0, Bb.cloneElement)(Gb, {
                  viewBox: dh(dh({}, wb), {}, {
                    x: wb.left,
                    y: wb.top
                  }),
                  active: Zb,
                  label: Hb,
                  payload: Zb ? ab : [],
                  coordinate: Sb,
                  accessibilityLayer: Ob
                })
              })), rh(Yb, "renderBrush", (function(bb) {
                var ub = Yb.props,
                  hb = ub.margin,
                  Ob = ub.data,
                  Gb = Yb.state,
                  Ub = Gb.offset,
                  Lb = Gb.dataStartIndex,
                  Sb = Gb.dataEndIndex,
                  ab = Gb.updateId;
                return (0, Bb.cloneElement)(bb, {
                  key: bb.key || "_recharts-brush",
                  onChange: (0, xb.i)(Yb.handleBrushChange, bb.props.onChange),
                  data: Ob,
                  x: (0, zb.z)(bb.props.x) ? bb.props.x : Ub.left,
                  y: (0, zb.z)(bb.props.y) ? bb.props.y : Ub.top + Ub.height + Ub.brushBottom - (hb.bottom || 0),
                  width: (0, zb.z)(bb.props.width) ? bb.props.width : Ub.width,
                  startIndex: Lb,
                  endIndex: Sb,
                  updateId: "brush-".concat(ab)
                })
              })), rh(Yb, "renderReferenceElement", (function(bb, ub, hb) {
                if (!bb) return null;
                var Ob = Yb.clipPathId,
                  Gb = Yb.state,
                  Ub = Gb.xAxisMap,
                  Lb = Gb.yAxisMap,
                  Sb = Gb.offset,
                  ab = bb.type.defaultProps || {},
                  Hb = bb.props,
                  wb = Hb.xAxisId,
                  Zb = void 0 === wb ? ab.xAxisId : wb,
                  Xb = Hb.yAxisId,
                  pb = void 0 === Xb ? ab.yAxisId : Xb;
                return (0, Bb.cloneElement)(bb, {
                  key: bb.key || "".concat(ub, "-").concat(hb),
                  xAxis: Ub[Zb],
                  yAxis: Lb[pb],
                  viewBox: {
                    x: Sb.left,
                    y: Sb.top,
                    width: Sb.width,
                    height: Sb.height
                  },
                  clipPathId: Ob
                })
              })), rh(Yb, "renderActivePoints", (function(bb) {
                var ub = bb.item,
                  Bb = bb.activePoint,
                  Ob = bb.basePoint,
                  Gb = bb.childIndex,
                  Ub = bb.isRange,
                  Lb = [],
                  Yb = ub.props.key,
                  Sb = void 0 !== ub.item.type.defaultProps ? dh(dh({}, ub.item.type.defaultProps), ub.item.props) : ub.item.props,
                  ab = Sb.activeDot,
                  Hb = dh(dh({
                    index: Gb,
                    dataKey: Sb.dataKey,
                    cx: Bb.x,
                    cy: Bb.y,
                    r: 4,
                    fill: (0, xb.I)(ub.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: Bb.payload,
                    value: Bb.value
                  }, (0, jb.b)(ab, !1)), (0, eu.m)(ab));
                return Lb.push(hb.renderActiveDot(ab, Hb, "".concat(Yb, "-activePoint-").concat(Gb))), Ob ? Lb.push(hb.renderActiveDot(ab, dh(dh({}, Hb), {}, {
                  cx: Ob.x,
                  cy: Ob.y
                }), "".concat(Yb, "-basePoint-").concat(Gb))) : Ub && Lb.push(null), Lb
              })), rh(Yb, "renderGraphicChild", (function(bb, ub, hb) {
                var Ob = Yb.filterFormatItem(bb, ub, hb);
                if (!Ob) return null;
                var Ub = Yb.getTooltipEventType(),
                  Lb = Yb.state,
                  Sb = Lb.isTooltipActive,
                  ab = Lb.tooltipAxis,
                  Hb = Lb.activeTooltipIndex,
                  wb = Lb.activeLabel,
                  Zb = Yb.props.children,
                  Xb = (0, jb.d)(Zb, Wb.c),
                  pb = Ob.props,
                  ob = pb.points,
                  Ab = pb.isRange,
                  lb = pb.baseLine,
                  Kb = void 0 !== Ob.item.type.defaultProps ? dh(dh({}, Ob.item.type.defaultProps), Ob.item.props) : Ob.item.props,
                  Cb = Kb.activeDot,
                  db = Kb.hide,
                  rb = Kb.activeBar,
                  nb = Kb.activeShape,
                  Db = Boolean(!db && Sb && Xb && (Cb || rb || nb)),
                  gb = {};
                "axis" !== Ub && Xb && "click" === Xb.props.trigger ? gb = {
                  onClick: (0, xb.i)(Yb.handleItemMouseEnter, bb.props.onClick)
                } : "axis" !== Ub && (gb = {
                  onMouseLeave: (0, xb.i)(Yb.handleItemMouseLeave, bb.props.onMouseLeave),
                  onMouseEnter: (0, xb.i)(Yb.handleItemMouseEnter, bb.props.onMouseEnter)
                });
                var ib = (0, Bb.cloneElement)(bb, dh(dh({}, Ob.props), gb));
                if (Db) {
                  if (!(Hb >= 0)) {
                    var vb, tb = (null !== (vb = Yb.getItemByXY(Yb.state.activeCoordinate)) && void 0 !== vb ? vb : {
                        graphicalItem: ib
                      }).graphicalItem,
                      Jb = tb.item,
                      eb = void 0 === Jb ? bb : Jb,
                      Nb = tb.childIndex,
                      sb = dh(dh(dh({}, Ob.props), gb), {}, {
                        activeIndex: Nb
                      });
                    return [(0, Bb.cloneElement)(eb, sb), null, null]
                  }
                  var Mb, mb;
                  if (ab.dataKey && !ab.allowDuplicatedCategory) {
                    var Ib = "function" === typeof ab.dataKey ? function(bb) {
                      return "function" === typeof ab.dataKey ? ab.dataKey(bb.payload) : null
                    } : "payload.".concat(ab.dataKey.toString());
                    Mb = (0, zb.i)(ob, Ib, wb), mb = Ab && lb && (0, zb.i)(lb, Ib, wb)
                  } else Mb = null === ob || void 0 === ob ? void 0 : ob[Hb], mb = Ab && lb && lb[Hb];
                  if (nb || rb) {
                    var Pb = void 0 !== bb.props.activeIndex ? bb.props.activeIndex : Hb;
                    return [(0, Bb.cloneElement)(bb, dh(dh(dh({}, Ob.props), gb), {}, {
                      activeIndex: Pb
                    })), null, null]
                  }
                  if (!Gb()(Mb)) return [ib].concat(lh(Yb.renderActivePoints({
                    item: Ob,
                    activePoint: Mb,
                    basePoint: mb,
                    childIndex: Hb,
                    isRange: Ab
                  })))
                }
                return Ab ? [ib, null, null] : [ib, null]
              })), rh(Yb, "renderCustomized", (function(bb, ub, hb) {
                return (0, Bb.cloneElement)(bb, dh(dh({
                  key: "recharts-customized-".concat(hb)
                }, Yb.props), Yb.state))
              })), rh(Yb, "renderMap", {
                CartesianGrid: {
                  handler: zh,
                  once: !0
                },
                ReferenceArea: {
                  handler: Yb.renderReferenceElement
                },
                ReferenceLine: {
                  handler: zh
                },
                ReferenceDot: {
                  handler: Yb.renderReferenceElement
                },
                XAxis: {
                  handler: zh
                },
                YAxis: {
                  handler: zh
                },
                Brush: {
                  handler: Yb.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: Yb.renderGraphicChild
                },
                Line: {
                  handler: Yb.renderGraphicChild
                },
                Area: {
                  handler: Yb.renderGraphicChild
                },
                Radar: {
                  handler: Yb.renderGraphicChild
                },
                RadialBar: {
                  handler: Yb.renderGraphicChild
                },
                Scatter: {
                  handler: Yb.renderGraphicChild
                },
                Pie: {
                  handler: Yb.renderGraphicChild
                },
                Funnel: {
                  handler: Yb.renderGraphicChild
                },
                Tooltip: {
                  handler: Yb.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: Yb.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: Yb.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: Yb.renderPolarAxis
                },
                Customized: {
                  handler: Yb.renderCustomized
                }
              }), Yb.clipPathId = "".concat(null !== (Ob = bb.id) && void 0 !== Ob ? Ob : (0, zb.G)("recharts"), "-clip"), Yb.throttleTriggeredAfterMouseMove = pb()(Yb.triggeredAfterMouseMove, null !== (Ub = bb.throttleDelay) && void 0 !== Ub ? Ub : 1e3 / 60), Yb.state = {}, Yb
            }
            return function(bb, ub) {
              if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
              bb.prototype = Object.create(ub && ub.prototype, {
                constructor: {
                  value: bb,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(bb, "prototype", {
                writable: !1
              }), ub && Ah(bb, ub)
            }(hb, bb), Ob = hb, Yb = [{
              key: "componentDidMount",
              value: function() {
                var bb, ub;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (bb = this.props.margin.left) && void 0 !== bb ? bb : 0,
                    top: null !== (ub = this.props.margin.top) && void 0 !== ub ? ub : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var bb = this.props,
                  ub = bb.children,
                  hb = bb.data,
                  Bb = bb.height,
                  Ob = bb.layout,
                  Gb = (0, jb.d)(ub, Wb.c);
                if (Gb) {
                  var Ub = Gb.props.defaultIndex;
                  if (!("number" !== typeof Ub || Ub < 0 || Ub > this.state.tooltipTicks.length - 1)) {
                    var Lb = this.state.tooltipTicks[Ub] && this.state.tooltipTicks[Ub].value,
                      Yb = vh(this.state, hb, Ub, Lb),
                      Sb = this.state.tooltipTicks[Ub].coordinate,
                      ab = (this.state.offset.top + Bb) / 2,
                      Hb = "horizontal" === Ob ? {
                        x: Sb,
                        y: ab
                      } : {
                        y: Sb,
                        x: ab
                      },
                      wb = this.state.formattedGraphicalItems.find((function(bb) {
                        return "Scatter" === bb.item.type.name
                      }));
                    wb && (Hb = dh(dh({}, Hb), wb.props.points[Ub].tooltipPosition), Yb = wb.props.points[Ub].tooltipPayload);
                    var Zb = {
                      activeTooltipIndex: Ub,
                      isTooltipActive: !0,
                      activeLabel: Lb,
                      activePayload: Yb,
                      activeCoordinate: Hb
                    };
                    this.setState(Zb), this.renderCursor(Gb), this.accessibilityManager.setIndex(Ub)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(bb, ub) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== ub.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== bb.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== bb.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (hb = this.props.margin.left) && void 0 !== hb ? hb : 0,
                    top: null !== (Bb = this.props.margin.top) && void 0 !== Bb ? Bb : 0
                  }
                }), null) : null;
                var hb, Bb
              }
            }, {
              key: "componentDidUpdate",
              value: function(bb) {
                (0, jb.m)([(0, jb.d)(bb.children, Wb.c)], [(0, jb.d)(this.props.children, Wb.c)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var bb = (0, jb.d)(this.props.children, Wb.c);
                if (bb && "boolean" === typeof bb.props.shared) {
                  var ub = bb.props.shared ? "axis" : "item";
                  return Sb.indexOf(ub) >= 0 ? ub : Ub
                }
                return Ub
              }
            }, {
              key: "getMouseInfo",
              value: function(bb) {
                if (!this.container) return null;
                var ub = this.container,
                  hb = ub.getBoundingClientRect(),
                  Bb = (0, kb.d)(hb),
                  Ob = {
                    chartX: Math.round(bb.pageX - Bb.left),
                    chartY: Math.round(bb.pageY - Bb.top)
                  },
                  Gb = hb.width / ub.offsetWidth || 1,
                  Ub = this.inRange(Ob.chartX, Ob.chartY, Gb);
                if (!Ub) return null;
                var Lb = this.state,
                  Yb = Lb.xAxisMap,
                  Sb = Lb.yAxisMap,
                  ab = this.getTooltipEventType(),
                  Hb = th(this.state, this.props.data, this.props.layout, Ub);
                if ("axis" !== ab && Yb && Sb) {
                  var wb = (0, zb.k)(Yb).scale,
                    Zb = (0, zb.k)(Sb).scale,
                    Xb = wb && wb.invert ? wb.invert(Ob.chartX) : null,
                    pb = Zb && Zb.invert ? Zb.invert(Ob.chartY) : null;
                  return dh(dh({}, Ob), {}, {
                    xValue: Xb,
                    yValue: pb
                  }, Hb)
                }
                return Hb ? dh(dh({}, Ob), Hb) : null
              }
            }, {
              key: "inRange",
              value: function(bb, ub) {
                var hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  Bb = this.props.layout,
                  Ob = bb / hb,
                  Gb = ub / hb;
                if ("horizontal" === Bb || "vertical" === Bb) {
                  var Ub = this.state.offset;
                  return Ob >= Ub.left && Ob <= Ub.left + Ub.width && Gb >= Ub.top && Gb <= Ub.top + Ub.height ? {
                    x: Ob,
                    y: Gb
                  } : null
                }
                var Lb = this.state,
                  Yb = Lb.angleAxisMap,
                  Sb = Lb.radiusAxisMap;
                if (Yb && Sb) {
                  var ab = (0, zb.k)(Yb);
                  return (0, gu.g)({
                    x: Ob,
                    y: Gb
                  }, ab)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var bb = this.props.children,
                  ub = this.getTooltipEventType(),
                  hb = (0, jb.d)(bb, Wb.c),
                  Bb = {};
                return hb && "axis" === ub && (Bb = "click" === hb.props.trigger ? {
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
                }), dh(dh({}, (0, eu.m)(this.props, this.handleOuterEvent)), Bb)
              }
            }, {
              key: "addListener",
              value: function() {
                tu.on(Ju, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                tu.removeListener(Ju, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(bb, ub, hb) {
                for (var Bb = this.state.formattedGraphicalItems, Ob = 0, Gb = Bb.length; Ob < Gb; Ob++) {
                  var Ub = Bb[Ob];
                  if (Ub.item === bb || Ub.props.key === bb.key || ub === (0, jb.g)(Ub.item.type) && hb === Ub.childIndex) return Ub
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var bb = this.clipPathId,
                  ub = this.state.offset,
                  hb = ub.left,
                  Ob = ub.top,
                  Gb = ub.height,
                  Ub = ub.width;
                return Bb.createElement("defs", null, Bb.createElement("clipPath", {
                  id: bb
                }, Bb.createElement("rect", {
                  x: hb,
                  y: Ob,
                  height: Gb,
                  width: Ub
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var bb = this.state.xAxisMap;
                return bb ? Object.entries(bb).reduce((function(bb, ub) {
                  var hb = Hh(ub, 2),
                    Bb = hb[0],
                    Ob = hb[1];
                  return dh(dh({}, bb), {}, rh({}, Bb, Ob.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var bb = this.state.yAxisMap;
                return bb ? Object.entries(bb).reduce((function(bb, ub) {
                  var hb = Hh(ub, 2),
                    Bb = hb[0],
                    Ob = hb[1];
                  return dh(dh({}, bb), {}, rh({}, Bb, Ob.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(bb) {
                var ub;
                return null === (ub = this.state.xAxisMap) || void 0 === ub || null === (ub = ub[bb]) || void 0 === ub ? void 0 : ub.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(bb) {
                var ub;
                return null === (ub = this.state.yAxisMap) || void 0 === ub || null === (ub = ub[bb]) || void 0 === ub ? void 0 : ub.scale
              }
            }, {
              key: "getItemByXY",
              value: function(bb) {
                var ub = this.state,
                  hb = ub.formattedGraphicalItems,
                  Bb = ub.activeItem;
                if (hb && hb.length)
                  for (var Ob = 0, Gb = hb.length; Ob < Gb; Ob++) {
                    var Ub = hb[Ob],
                      Lb = Ub.props,
                      Yb = Ub.item,
                      Sb = void 0 !== Yb.type.defaultProps ? dh(dh({}, Yb.type.defaultProps), Yb.props) : Yb.props,
                      ab = (0, jb.g)(Yb.type);
                    if ("Bar" === ab) {
                      var Hb = (Lb.data || []).find((function(ub) {
                        return (0, rb.f)(bb, ub)
                      }));
                      if (Hb) return {
                        graphicalItem: Ub,
                        payload: Hb
                      }
                    } else if ("RadialBar" === ab) {
                      var wb = (Lb.data || []).find((function(ub) {
                        return (0, gu.g)(bb, ub)
                      }));
                      if (wb) return {
                        graphicalItem: Ub,
                        payload: wb
                      }
                    } else if ((0, Pu.i)(Ub, Bb) || (0, Pu.m)(Ub, Bb) || (0, Pu.p)(Ub, Bb)) {
                      var Zb = (0, Pu.e)({
                          graphicalItem: Ub,
                          activeTooltipItem: Bb,
                          itemData: Sb.data
                        }),
                        Xb = void 0 === Sb.activeIndex ? Zb : Sb.activeIndex;
                      return {
                        graphicalItem: dh(dh({}, Ub), {}, {
                          childIndex: Xb
                        }),
                        payload: (0, Pu.p)(Ub, Bb) ? Sb.data[Zb] : Ub.props.data[Zb]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var bb = this;
                if (!(0, jb.x)(this)) return null;
                var ub, hb, Ob = this.props,
                  Gb = Ob.children,
                  Ub = Ob.className,
                  Lb = Ob.width,
                  Yb = Ob.height,
                  Sb = Ob.style,
                  ab = Ob.compact,
                  Hb = Ob.title,
                  wb = Ob.desc,
                  Zb = wh(Ob, Yh),
                  Xb = (0, jb.b)(Zb, !1);
                if (ab) return Bb.createElement(Uh.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Bb.createElement(lb.e, ah({}, Xb, {
                  width: Lb,
                  height: Yb,
                  title: Hb,
                  desc: wb
                }), this.renderClipPath(), (0, jb.t)(Gb, this.renderMap)));
                this.props.accessibilityLayer && (Xb.tabIndex = null !== (ub = this.props.tabIndex) && void 0 !== ub ? ub : 0, Xb.role = null !== (hb = this.props.role) && void 0 !== hb ? hb : "application", Xb.onKeyDown = function(ub) {
                  bb.accessibilityManager.keyboardEvent(ub)
                }, Xb.onFocus = function() {
                  bb.accessibilityManager.focus()
                });
                var pb = this.parseEventsOfWrapper();
                return Bb.createElement(Uh.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Bb.createElement("div", ah({
                  className: (0, ob.e)("recharts-wrapper", Ub),
                  style: dh({
                    position: "relative",
                    cursor: "default",
                    width: Lb,
                    height: Yb
                  }, Sb)
                }, pb, {
                  ref: function(ub) {
                    bb.container = ub
                  }
                }), Bb.createElement(lb.e, ah({}, Xb, {
                  width: Lb,
                  height: Yb,
                  title: Hb,
                  desc: wb,
                  style: Dh
                }), this.renderClipPath(), (0, jb.t)(Gb, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], Yb && Zh(Ob.prototype, Yb), ab && Zh(Ob, ab), Object.defineProperty(Ob, "prototype", {
              writable: !1
            }), Ob;
            var Ob, Yb, ab
          }(Bb.Component);
        rh(ib, "displayName", ub), rh(ib, "defaultProps", dh({
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
        }, nb)), rh(ib, "getDerivedStateFromProps", (function(bb, ub) {
          var hb = bb.dataKey,
            Bb = bb.data,
            Ob = bb.children,
            Ub = bb.width,
            Lb = bb.height,
            Yb = bb.layout,
            Sb = bb.stackOffset,
            ab = bb.margin,
            Hb = ub.dataStartIndex,
            wb = ub.dataEndIndex;
          if (void 0 === ub.updateId) {
            var Zb = Nh(bb);
            return dh(dh(dh({}, Zb), {}, {
              updateId: 0
            }, gb(dh(dh({
              props: bb
            }, Zb), {}, {
              updateId: 0
            }), ub)), {}, {
              prevDataKey: hb,
              prevData: Bb,
              prevWidth: Ub,
              prevHeight: Lb,
              prevLayout: Yb,
              prevStackOffset: Sb,
              prevMargin: ab,
              prevChildren: Ob
            })
          }
          if (hb !== ub.prevDataKey || Bb !== ub.prevData || Ub !== ub.prevWidth || Lb !== ub.prevHeight || Yb !== ub.prevLayout || Sb !== ub.prevStackOffset || !(0, iu.c)(ab, ub.prevMargin)) {
            var Xb = Nh(bb),
              pb = {
                chartX: ub.chartX,
                chartY: ub.chartY,
                isTooltipActive: ub.isTooltipActive
              },
              ob = dh(dh({}, th(ub, Bb, Yb)), {}, {
                updateId: ub.updateId + 1
              }),
              Ab = dh(dh(dh({}, Xb), pb), ob);
            return dh(dh(dh({}, Ab), gb(dh({
              props: bb
            }, Ab), ub)), {}, {
              prevDataKey: hb,
              prevData: Bb,
              prevWidth: Ub,
              prevHeight: Lb,
              prevLayout: Yb,
              prevStackOffset: Sb,
              prevMargin: ab,
              prevChildren: Ob
            })
          }
          if (!(0, jb.m)(Ob, ub.prevChildren)) {
            var lb, Kb, Wb, Cb, db = (0, jb.d)(Ob, fb),
              rb = db && null !== (lb = null === (Kb = db.props) || void 0 === Kb ? void 0 : Kb.startIndex) && void 0 !== lb ? lb : Hb,
              nb = db && null !== (Wb = null === (Cb = db.props) || void 0 === Cb ? void 0 : Cb.endIndex) && void 0 !== Wb ? Wb : wb,
              Db = rb !== Hb || nb !== wb,
              xb = !Gb()(Bb) && !Db ? ub.updateId : ub.updateId + 1;
            return dh(dh({
              updateId: xb
            }, gb(dh(dh({
              props: bb
            }, ub), {}, {
              updateId: xb,
              dataStartIndex: rb,
              dataEndIndex: nb
            }), ub)), {}, {
              prevChildren: Ob,
              dataStartIndex: rb,
              dataEndIndex: nb
            })
          }
          return null
        })), rh(ib, "renderActiveDot", (function(bb, ub, hb) {
          var Ob;
          return Ob = (0, Bb.isValidElement)(bb) ? (0, Bb.cloneElement)(bb, ub) : Lb()(bb) ? bb(ub) : Bb.createElement(db.b, ub), Bb.createElement(Kb.c, {
            className: "recharts-active-dot",
            key: hb
          }, Ob)
        }));
        var vb = (0, Bb.forwardRef)((function(bb, ub) {
          return Bb.createElement(ib, ah({}, bb, {
            ref: ub
          }))
        }));
        return vb.displayName = ib.displayName, vb
      }
  },
  6007: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    var Bb = function(bb) {
      return null
    };
    Bb.displayName = "Cell"
  },
  5958: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => gb
    });
    var Bb = hb(49),
      Ob = hb(5175),
      Gb = hb.n(Ob),
      Ub = hb(5019),
      Lb = hb.n(Ub),
      Yb = hb(4850),
      Sb = hb.n(Yb),
      ab = hb(4831),
      Hb = hb(5859),
      wb = hb(5181),
      Zb = hb(4918),
      Xb = hb(5963);

    function pb(bb) {
      return pb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, pb(bb)
    }
    var ob = ["offset"];

    function Ab(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return lb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return lb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return lb(bb, ub)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Kb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function Wb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Cb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Wb(Object(hb), !0).forEach((function(ub) {
          db(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Wb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function db(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != pb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != pb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == pb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function rb() {
      return rb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, rb.apply(this, arguments)
    }
    var jb = function(bb) {
        var ub = bb.value,
          hb = bb.formatter,
          Bb = Gb()(bb.children) ? ub : bb.children;
        return Lb()(hb) ? hb(Bb) : Bb
      },
      nb = function(bb, ub, hb) {
        var Ob, Ub, Lb = bb.position,
          Yb = bb.viewBox,
          Sb = bb.offset,
          Hb = bb.className,
          wb = Yb,
          pb = wb.cx,
          ob = wb.cy,
          Ab = wb.innerRadius,
          lb = wb.outerRadius,
          Kb = wb.startAngle,
          Wb = wb.endAngle,
          Cb = wb.clockWise,
          db = (Ab + lb) / 2,
          jb = function(bb, ub) {
            return (0, Zb.E)(ub - bb) * Math.min(Math.abs(ub - bb), 360)
          }(Kb, Wb),
          nb = jb >= 0 ? 1 : -1;
        "insideStart" === Lb ? (Ob = Kb + nb * Sb, Ub = Cb) : "insideEnd" === Lb ? (Ob = Wb - nb * Sb, Ub = !Cb) : "end" === Lb && (Ob = Wb + nb * Sb, Ub = Cb), Ub = jb <= 0 ? Ub : !Ub;
        var Db = (0, Xb.k)(pb, ob, db, Ob),
          xb = (0, Xb.k)(pb, ob, db, Ob + 359 * (Ub ? 1 : -1)),
          zb = "M".concat(Db.x, ",").concat(Db.y, "\n    A").concat(db, ",").concat(db, ",0,1,").concat(Ub ? 0 : 1, ",\n    ").concat(xb.x, ",").concat(xb.y),
          gb = Gb()(bb.id) ? (0, Zb.G)("recharts-radial-line-") : bb.id;
        return Bb.createElement("text", rb({}, hb, {
          dominantBaseline: "central",
          className: (0, ab.e)("recharts-radial-bar-label", Hb)
        }), Bb.createElement("defs", null, Bb.createElement("path", {
          id: gb,
          d: zb
        })), Bb.createElement("textPath", {
          xlinkHref: "#".concat(gb)
        }, ub))
      },
      Db = function(bb) {
        var ub = bb.viewBox,
          hb = bb.offset,
          Bb = bb.position,
          Ob = ub,
          Gb = Ob.cx,
          Ub = Ob.cy,
          Lb = Ob.innerRadius,
          Yb = Ob.outerRadius,
          Sb = (Ob.startAngle + Ob.endAngle) / 2;
        if ("outside" === Bb) {
          var ab = (0, Xb.k)(Gb, Ub, Yb + hb, Sb),
            Hb = ab.x;
          return {
            x: Hb,
            y: ab.y,
            textAnchor: Hb >= Gb ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === Bb) return {
          x: Gb,
          y: Ub,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === Bb) return {
          x: Gb,
          y: Ub,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === Bb) return {
          x: Gb,
          y: Ub,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var wb = (Lb + Yb) / 2,
          Zb = (0, Xb.k)(Gb, Ub, wb, Sb);
        return {
          x: Zb.x,
          y: Zb.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      xb = function(bb) {
        var ub = bb.viewBox,
          hb = bb.parentViewBox,
          Bb = bb.offset,
          Ob = bb.position,
          Gb = ub,
          Ub = Gb.x,
          Lb = Gb.y,
          Yb = Gb.width,
          ab = Gb.height,
          Hb = ab >= 0 ? 1 : -1,
          wb = Hb * Bb,
          Xb = Hb > 0 ? "end" : "start",
          pb = Hb > 0 ? "start" : "end",
          ob = Yb >= 0 ? 1 : -1,
          Ab = ob * Bb,
          lb = ob > 0 ? "end" : "start",
          Kb = ob > 0 ? "start" : "end";
        if ("top" === Ob) return Cb(Cb({}, {
          x: Ub + Yb / 2,
          y: Lb - Hb * Bb,
          textAnchor: "middle",
          verticalAnchor: Xb
        }), hb ? {
          height: Math.max(Lb - hb.y, 0),
          width: Yb
        } : {});
        if ("bottom" === Ob) return Cb(Cb({}, {
          x: Ub + Yb / 2,
          y: Lb + ab + wb,
          textAnchor: "middle",
          verticalAnchor: pb
        }), hb ? {
          height: Math.max(hb.y + hb.height - (Lb + ab), 0),
          width: Yb
        } : {});
        if ("left" === Ob) {
          var Wb = {
            x: Ub - Ab,
            y: Lb + ab / 2,
            textAnchor: lb,
            verticalAnchor: "middle"
          };
          return Cb(Cb({}, Wb), hb ? {
            width: Math.max(Wb.x - hb.x, 0),
            height: ab
          } : {})
        }
        if ("right" === Ob) {
          var db = {
            x: Ub + Yb + Ab,
            y: Lb + ab / 2,
            textAnchor: Kb,
            verticalAnchor: "middle"
          };
          return Cb(Cb({}, db), hb ? {
            width: Math.max(hb.x + hb.width - db.x, 0),
            height: ab
          } : {})
        }
        var rb = hb ? {
          width: Yb,
          height: ab
        } : {};
        return "insideLeft" === Ob ? Cb({
          x: Ub + Ab,
          y: Lb + ab / 2,
          textAnchor: Kb,
          verticalAnchor: "middle"
        }, rb) : "insideRight" === Ob ? Cb({
          x: Ub + Yb - Ab,
          y: Lb + ab / 2,
          textAnchor: lb,
          verticalAnchor: "middle"
        }, rb) : "insideTop" === Ob ? Cb({
          x: Ub + Yb / 2,
          y: Lb + wb,
          textAnchor: "middle",
          verticalAnchor: pb
        }, rb) : "insideBottom" === Ob ? Cb({
          x: Ub + Yb / 2,
          y: Lb + ab - wb,
          textAnchor: "middle",
          verticalAnchor: Xb
        }, rb) : "insideTopLeft" === Ob ? Cb({
          x: Ub + Ab,
          y: Lb + wb,
          textAnchor: Kb,
          verticalAnchor: pb
        }, rb) : "insideTopRight" === Ob ? Cb({
          x: Ub + Yb - Ab,
          y: Lb + wb,
          textAnchor: lb,
          verticalAnchor: pb
        }, rb) : "insideBottomLeft" === Ob ? Cb({
          x: Ub + Ab,
          y: Lb + ab - wb,
          textAnchor: Kb,
          verticalAnchor: Xb
        }, rb) : "insideBottomRight" === Ob ? Cb({
          x: Ub + Yb - Ab,
          y: Lb + ab - wb,
          textAnchor: lb,
          verticalAnchor: Xb
        }, rb) : Sb()(Ob) && ((0, Zb.z)(Ob.x) || (0, Zb.C)(Ob.x)) && ((0, Zb.z)(Ob.y) || (0, Zb.C)(Ob.y)) ? Cb({
          x: Ub + (0, Zb.m)(Ob.x, Yb),
          y: Lb + (0, Zb.m)(Ob.y, ab),
          textAnchor: "end",
          verticalAnchor: "end"
        }, rb) : Cb({
          x: Ub + Yb / 2,
          y: Lb + ab / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, rb)
      },
      zb = function(bb) {
        return "cx" in bb && (0, Zb.z)(bb.cx)
      };

    function gb(bb) {
      var ub, hb = bb.offset,
        Ob = Cb({
          offset: void 0 === hb ? 5 : hb
        }, Kb(bb, ob)),
        Ub = Ob.viewBox,
        Yb = Ob.position,
        Sb = Ob.value,
        Zb = Ob.children,
        Xb = Ob.content,
        pb = Ob.className,
        Ab = void 0 === pb ? "" : pb,
        lb = Ob.textBreakAll;
      if (!Ub || Gb()(Sb) && Gb()(Zb) && !(0, Bb.isValidElement)(Xb) && !Lb()(Xb)) return null;
      if ((0, Bb.isValidElement)(Xb)) return (0, Bb.cloneElement)(Xb, Ob);
      if (Lb()(Xb)) {
        if (ub = (0, Bb.createElement)(Xb, Ob), (0, Bb.isValidElement)(ub)) return ub
      } else ub = jb(Ob);
      var Wb = zb(Ub),
        db = (0, wb.b)(Ob, !0);
      if (Wb && ("insideStart" === Yb || "insideEnd" === Yb || "end" === Yb)) return nb(Ob, ub, db);
      var gb = Wb ? Db(Ob) : xb(Ob);
      return Bb.createElement(Hb.e, rb({
        className: (0, ab.e)("recharts-label", Ab)
      }, db, gb, {
        breakAll: lb
      }), ub)
    }
    gb.displayName = "Label";
    var ib = function(bb) {
      var ub = bb.cx,
        hb = bb.cy,
        Bb = bb.angle,
        Ob = bb.startAngle,
        Gb = bb.endAngle,
        Ub = bb.r,
        Lb = bb.radius,
        Yb = bb.innerRadius,
        Sb = bb.outerRadius,
        ab = bb.x,
        Hb = bb.y,
        wb = bb.top,
        Xb = bb.left,
        pb = bb.width,
        ob = bb.height,
        Ab = bb.clockWise,
        lb = bb.labelViewBox;
      if (lb) return lb;
      if ((0, Zb.z)(pb) && (0, Zb.z)(ob)) {
        if ((0, Zb.z)(ab) && (0, Zb.z)(Hb)) return {
          x: ab,
          y: Hb,
          width: pb,
          height: ob
        };
        if ((0, Zb.z)(wb) && (0, Zb.z)(Xb)) return {
          x: wb,
          y: Xb,
          width: pb,
          height: ob
        }
      }
      return (0, Zb.z)(ab) && (0, Zb.z)(Hb) ? {
        x: ab,
        y: Hb,
        width: 0,
        height: 0
      } : (0, Zb.z)(ub) && (0, Zb.z)(hb) ? {
        cx: ub,
        cy: hb,
        startAngle: Ob || Bb || 0,
        endAngle: Gb || Bb || 0,
        innerRadius: Yb || 0,
        outerRadius: Sb || Lb || Ub || 0,
        clockWise: Ab
      } : bb.viewBox ? bb.viewBox : {}
    };
    gb.parseViewBox = ib, gb.renderCallByParent = function(bb, ub) {
      var hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!bb || !bb.children && hb && !bb.label) return null;
      var Ob = bb.children,
        Gb = ib(bb),
        Ub = (0, wb.c)(Ob, gb).map((function(bb, hb) {
          return (0, Bb.cloneElement)(bb, {
            viewBox: ub || Gb,
            key: "label-".concat(hb)
          })
        }));
      if (!hb) return Ub;
      var Yb = function(bb, ub) {
        return bb ? !0 === bb ? Bb.createElement(gb, {
          key: "label-implicit",
          viewBox: ub
        }) : (0, Zb.x)(bb) ? Bb.createElement(gb, {
          key: "label-implicit",
          viewBox: ub,
          value: bb
        }) : (0, Bb.isValidElement)(bb) ? bb.type === gb ? (0, Bb.cloneElement)(bb, {
          key: "label-implicit",
          viewBox: ub
        }) : Bb.createElement(gb, {
          key: "label-implicit",
          content: bb,
          viewBox: ub
        }) : Lb()(bb) ? Bb.createElement(gb, {
          key: "label-implicit",
          content: bb,
          viewBox: ub
        }) : Sb()(bb) ? Bb.createElement(gb, rb({
          viewBox: ub
        }, bb, {
          key: "label-implicit"
        })) : null : null
      }(bb.label, ub || Gb);
      return [Yb].concat(Ab(Ub))
    }
  },
  6016: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => xb
    });
    var Bb = hb(49),
      Ob = hb(5175),
      Gb = hb.n(Ob),
      Ub = hb(4850),
      Lb = hb.n(Ub),
      Yb = hb(5019),
      Sb = hb.n(Yb),
      ab = hb(6019),
      Hb = hb.n(ab),
      wb = hb(5958),
      Zb = hb(5710),
      Xb = hb(5181),
      pb = hb(5871);

    function ob(bb) {
      return ob = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, ob(bb)
    }
    var Ab = ["valueAccessor"],
      lb = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function Kb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Wb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return Wb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return Wb(bb, ub)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Cb() {
      return Cb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Cb.apply(this, arguments)
    }

    function db(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function rb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? db(Object(hb), !0).forEach((function(ub) {
          jb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : db(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function jb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != ob(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != ob(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == ob(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function nb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }
    var Db = function(bb) {
      return Array.isArray(bb.value) ? Hb()(bb.value) : bb.value
    };

    function xb(bb) {
      var ub = bb.valueAccessor,
        hb = void 0 === ub ? Db : ub,
        Ob = nb(bb, Ab),
        Ub = Ob.data,
        Lb = Ob.dataKey,
        Yb = Ob.clockWise,
        Sb = Ob.id,
        ab = Ob.textBreakAll,
        Hb = nb(Ob, lb);
      return Ub && Ub.length ? Bb.createElement(Zb.c, {
        className: "recharts-label-list"
      }, Ub.map((function(bb, ub) {
        var Ob = Gb()(Lb) ? hb(bb, ub) : (0, pb.W)(bb && bb.payload, Lb),
          Ub = Gb()(Sb) ? {} : {
            id: "".concat(Sb, "-").concat(ub)
          };
        return Bb.createElement(wb.e, Cb({}, (0, Xb.b)(bb, !0), Hb, Ub, {
          parentViewBox: bb.parentViewBox,
          value: Ob,
          textBreakAll: ab,
          viewBox: wb.e.parseViewBox(Gb()(Yb) ? bb : rb(rb({}, bb), {}, {
            clockWise: Yb
          })),
          key: "label-".concat(ub),
          index: ub
        }))
      }))) : null
    }
    xb.displayName = "LabelList", xb.renderCallByParent = function(bb, ub) {
      var hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!bb || !bb.children && hb && !bb.label) return null;
      var Ob = bb.children,
        Gb = (0, Xb.c)(Ob, xb).map((function(bb, hb) {
          return (0, Bb.cloneElement)(bb, {
            data: ub,
            key: "labelList-".concat(hb)
          })
        }));
      return hb ? [function(bb, ub) {
        return bb ? !0 === bb ? Bb.createElement(xb, {
          key: "labelList-implicit",
          data: ub
        }) : Bb.isValidElement(bb) || Sb()(bb) ? Bb.createElement(xb, {
          key: "labelList-implicit",
          data: ub,
          content: bb
        }) : Lb()(bb) ? Bb.createElement(xb, Cb({
          data: ub
        }, bb, {
          key: "labelList-implicit"
        })) : null : null
      }(bb.label, ub)].concat(Kb(Gb)) : Gb
    }
  },
  5781: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => mb
    });
    var Bb = hb(49),
      Ob = hb(5019),
      Gb = hb.n(Ob),
      Ub = hb(4831),
      Lb = hb(5178),
      Yb = hb(5704),
      Sb = hb(5787),
      ab = hb(5207);

    function Hb(bb) {
      return Hb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Hb(bb)
    }

    function wb() {
      return wb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, wb.apply(this, arguments)
    }

    function Zb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Xb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Wb(Bb.key), Bb)
      }
    }

    function pb(bb, ub, hb) {
      return ub = Ab(ub),
        function(bb, ub) {
          if (ub && ("object" === Hb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, ob() ? Reflect.construct(ub, hb || [], Ab(bb).constructor) : ub.apply(bb, hb))
    }

    function ob() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (ob = function() {
        return !!bb
      })()
    }

    function Ab(bb) {
      return Ab = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Ab(bb)
    }

    function lb(bb, ub) {
      return lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, lb(bb, ub)
    }

    function Kb(bb, ub, hb) {
      return (ub = Wb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Wb(bb) {
      var ub = function(bb, ub) {
        if ("object" != Hb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Hb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Hb(ub) ? ub : ub + ""
    }
    var Cb = 32,
      db = function(bb) {
        function ub() {
          return function(bb, ub) {
            if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
          }(this, ub), pb(this, ub, arguments)
        }
        return function(bb, ub) {
          if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
          bb.prototype = Object.create(ub && ub.prototype, {
            constructor: {
              value: bb,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), ub && lb(bb, ub)
        }(ub, bb), hb = ub, Ob = [{
          key: "renderIcon",
          value: function(bb) {
            var ub = this.props.inactiveColor,
              hb = 16,
              Ob = Cb / 6,
              Gb = Cb / 3,
              Ub = bb.inactive ? ub : bb.color;
            if ("plainline" === bb.type) return Bb.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: Ub,
              strokeDasharray: bb.payload.strokeDasharray,
              x1: 0,
              y1: hb,
              x2: Cb,
              y2: hb,
              className: "recharts-legend-icon"
            });
            if ("line" === bb.type) return Bb.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: Ub,
              d: "M0,".concat(hb, "h").concat(Gb, "\n            A").concat(Ob, ",").concat(Ob, ",0,1,1,").concat(2 * Gb, ",").concat(hb, "\n            H").concat(Cb, "M").concat(2 * Gb, ",").concat(hb, "\n            A").concat(Ob, ",").concat(Ob, ",0,1,1,").concat(Gb, ",").concat(hb),
              className: "recharts-legend-icon"
            });
            if ("rect" === bb.type) return Bb.createElement("path", {
              stroke: "none",
              fill: Ub,
              d: "M0,".concat(4, "h").concat(Cb, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (Bb.isValidElement(bb.legendIcon)) {
              var Lb = function(bb) {
                for (var ub = 1; ub < arguments.length; ub++) {
                  var hb = null != arguments[ub] ? arguments[ub] : {};
                  ub % 2 ? Zb(Object(hb), !0).forEach((function(ub) {
                    Kb(bb, ub, hb[ub])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Zb(Object(hb)).forEach((function(ub) {
                    Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
                  }))
                }
                return bb
              }({}, bb);
              return delete Lb.legendIcon, Bb.cloneElement(bb.legendIcon, Lb)
            }
            return Bb.createElement(Sb.c, {
              fill: Ub,
              cx: hb,
              cy: hb,
              size: Cb,
              sizeType: "diameter",
              type: bb.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var bb = this,
              ub = this.props,
              hb = ub.payload,
              Ob = ub.iconSize,
              Sb = ub.layout,
              Hb = ub.formatter,
              Zb = ub.inactiveColor,
              Xb = {
                x: 0,
                y: 0,
                width: Cb,
                height: Cb
              },
              pb = {
                display: "horizontal" === Sb ? "inline-block" : "block",
                marginRight: 10
              },
              ob = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return hb.map((function(ub, hb) {
              var Sb = ub.formatter || Hb,
                Ab = (0, Ub.e)(Kb(Kb({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(hb), !0), "inactive", ub.inactive));
              if ("none" === ub.type) return null;
              var lb = Gb()(ub.value) ? null : ub.value;
              (0, Lb.e)(!Gb()(ub.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var Wb = ub.inactive ? Zb : ub.color;
              return Bb.createElement("li", wb({
                className: Ab,
                style: pb,
                key: "legend-item-".concat(hb)
              }, (0, ab.q)(bb.props, ub, hb)), Bb.createElement(Yb.e, {
                width: Ob,
                height: Ob,
                viewBox: Xb,
                style: ob
              }, bb.renderIcon(ub)), Bb.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: Wb
                }
              }, Sb ? Sb(lb, ub, hb) : lb))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var bb = this.props,
              ub = bb.payload,
              hb = bb.layout,
              Ob = bb.align;
            if (!ub || !ub.length) return null;
            var Gb = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === hb ? Ob : "left"
            };
            return Bb.createElement("ul", {
              className: "recharts-default-legend",
              style: Gb
            }, this.renderItems())
          }
        }], Ob && Xb(hb.prototype, Ob), Hb && Xb(hb, Hb), Object.defineProperty(hb, "prototype", {
          writable: !1
        }), hb;
        var hb, Ob, Hb
      }(Bb.PureComponent);
    Kb(db, "displayName", "Legend"), Kb(db, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var rb = hb(4918),
      jb = hb(5722);

    function nb(bb) {
      return nb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, nb(bb)
    }
    var Db = ["ref"];

    function xb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function zb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? xb(Object(hb), !0).forEach((function(ub) {
          eb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : xb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function gb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Nb(Bb.key), Bb)
      }
    }

    function ib(bb, ub, hb) {
      return ub = tb(ub),
        function(bb, ub) {
          if (ub && ("object" === nb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, vb() ? Reflect.construct(ub, hb || [], tb(bb).constructor) : ub.apply(bb, hb))
    }

    function vb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (vb = function() {
        return !!bb
      })()
    }

    function tb(bb) {
      return tb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, tb(bb)
    }

    function Jb(bb, ub) {
      return Jb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, Jb(bb, ub)
    }

    function eb(bb, ub, hb) {
      return (ub = Nb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Nb(bb) {
      var ub = function(bb, ub) {
        if ("object" != nb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != nb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == nb(ub) ? ub : ub + ""
    }

    function sb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function Mb(bb) {
      return bb.value
    }
    var mb = function(bb) {
      function ub() {
        var bb;
        ! function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub);
        for (var hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        return eb(bb = ib(this, ub, [].concat(Bb)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), bb
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && Jb(bb, ub)
      }(ub, bb), hb = ub, Gb = [{
        key: "getWithHeight",
        value: function(bb, ub) {
          var hb = zb(zb({}, this.defaultProps), bb.props).layout;
          return "vertical" === hb && (0, rb.z)(bb.props.height) ? {
            height: bb.props.height
          } : "horizontal" === hb ? {
            width: bb.props.width || ub
          } : null
        }
      }], (Ob = [{
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
            var bb = this.wrapperNode.getBoundingClientRect();
            return bb.height = this.wrapperNode.offsetHeight, bb.width = this.wrapperNode.offsetWidth, bb
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var bb = this.props.onBBoxUpdate,
            ub = this.getBBox();
          ub ? (Math.abs(ub.width - this.lastBoundingBox.width) > 1 || Math.abs(ub.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = ub.width, this.lastBoundingBox.height = ub.height, bb && bb(ub)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, bb && bb(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? zb({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(bb) {
          var ub, hb, Bb = this.props,
            Ob = Bb.layout,
            Gb = Bb.align,
            Ub = Bb.verticalAlign,
            Lb = Bb.margin,
            Yb = Bb.chartWidth,
            Sb = Bb.chartHeight;
          return bb && (void 0 !== bb.left && null !== bb.left || void 0 !== bb.right && null !== bb.right) || (ub = "center" === Gb && "vertical" === Ob ? {
            left: ((Yb || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === Gb ? {
            right: Lb && Lb.right || 0
          } : {
            left: Lb && Lb.left || 0
          }), bb && (void 0 !== bb.top && null !== bb.top || void 0 !== bb.bottom && null !== bb.bottom) || (hb = "middle" === Ub ? {
            top: ((Sb || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === Ub ? {
            bottom: Lb && Lb.bottom || 0
          } : {
            top: Lb && Lb.top || 0
          }), zb(zb({}, ub), hb)
        }
      }, {
        key: "render",
        value: function() {
          var bb = this,
            ub = this.props,
            hb = ub.content,
            Ob = ub.width,
            Gb = ub.height,
            Ub = ub.wrapperStyle,
            Lb = ub.payloadUniqBy,
            Yb = ub.payload,
            Sb = zb(zb({
              position: "absolute",
              width: Ob || "auto",
              height: Gb || "auto"
            }, this.getDefaultPosition(Ub)), Ub);
          return Bb.createElement("div", {
            className: "recharts-legend-wrapper",
            style: Sb,
            ref: function(ub) {
              bb.wrapperNode = ub
            }
          }, function(bb, ub) {
            if (Bb.isValidElement(bb)) return Bb.cloneElement(bb, ub);
            if ("function" === typeof bb) return Bb.createElement(bb, ub);
            ub.ref;
            var hb = sb(ub, Db);
            return Bb.createElement(db, hb)
          }(hb, zb(zb({}, this.props), {}, {
            payload: (0, jb.d)(Yb, Lb, Mb)
          })))
        }
      }]) && gb(hb.prototype, Ob), Gb && gb(hb, Gb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Ob, Gb
    }(Bb.PureComponent);
    eb(mb, "displayName", "Legend"), eb(mb, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4824: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ob
    });
    var Bb = hb(4831),
      Ob = hb(49),
      Gb = hb(4840),
      Ub = hb.n(Gb),
      Lb = hb(4918),
      Yb = hb(5178),
      Sb = hb(5181);

    function ab(bb) {
      return ab = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, ab(bb)
    }

    function Hb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function wb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Hb(Object(hb), !0).forEach((function(ub) {
          Zb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Hb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Zb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != ab(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != ab(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == ab(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Xb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return pb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return pb(bb, ub)
      }(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }
    var ob = (0, Ob.forwardRef)((function(bb, ub) {
      var hb = bb.aspect,
        Gb = bb.initialDimension,
        ab = void 0 === Gb ? {
          width: -1,
          height: -1
        } : Gb,
        Hb = bb.width,
        Zb = void 0 === Hb ? "100%" : Hb,
        pb = bb.height,
        ob = void 0 === pb ? "100%" : pb,
        Ab = bb.minWidth,
        lb = void 0 === Ab ? 0 : Ab,
        Kb = bb.minHeight,
        Wb = bb.maxHeight,
        Cb = bb.children,
        db = bb.debounce,
        rb = void 0 === db ? 0 : db,
        jb = bb.id,
        nb = bb.className,
        Db = bb.lK,
        xb = bb.style,
        zb = void 0 === xb ? {} : xb,
        gb = (0, Ob.useRef)(null),
        ib = (0, Ob.useRef)();
      ib.current = Db, (0, Ob.useImperativeHandle)(ub, (function() {
        return Object.defineProperty(gb.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), gb.current
          },
          configurable: !0
        })
      }));
      var vb = Xb((0, Ob.useState)({
          containerWidth: ab.width,
          containerHeight: ab.height
        }), 2),
        tb = vb[0],
        Jb = vb[1],
        eb = (0, Ob.useCallback)((function(bb, ub) {
          Jb((function(hb) {
            var Bb = Math.round(bb),
              Ob = Math.round(ub);
            return hb.containerWidth === Bb && hb.containerHeight === Ob ? hb : {
              containerWidth: Bb,
              containerHeight: Ob
            }
          }))
        }), []);
      (0, Ob.useEffect)((function() {
        var bb = function(bb) {
          var ub, hb = bb[0].contentRect,
            Bb = hb.width,
            Ob = hb.height;
          eb(Bb, Ob), null === (ub = ib.current) || void 0 === ub || ub.call(ib, Bb, Ob)
        };
        rb > 0 && (bb = Ub()(bb, rb, {
          trailing: !0,
          leading: !1
        }));
        var ub = new ResizeObserver(bb),
          hb = gb.current.getBoundingClientRect(),
          Bb = hb.width,
          Ob = hb.height;
        return eb(Bb, Ob), ub.observe(gb.current),
          function() {
            ub.disconnect()
          }
      }), [eb, rb]);
      var Nb = (0, Ob.useMemo)((function() {
        var bb = tb.containerWidth,
          ub = tb.containerHeight;
        if (bb < 0 || ub < 0) return null;
        (0, Yb.e)((0, Lb.C)(Zb) || (0, Lb.C)(ob), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", Zb, ob), (0, Yb.e)(!hb || hb > 0, "The aspect(%s) must be greater than zero.", hb);
        var Bb = (0, Lb.C)(Zb) ? bb : Zb,
          Gb = (0, Lb.C)(ob) ? ub : ob;
        hb && hb > 0 && (Bb ? Gb = Bb / hb : Gb && (Bb = Gb * hb), Wb && Gb > Wb && (Gb = Wb)), (0, Yb.e)(Bb > 0 || Gb > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", Bb, Gb, Zb, ob, lb, Kb, hb);
        var Ub = !Array.isArray(Cb) && (0, Sb.g)(Cb.type).endsWith("Chart");
        return Ob.Children.map(Cb, (function(bb) {
          return Ob.isValidElement(bb) ? (0, Ob.cloneElement)(bb, wb({
            width: Bb,
            height: Gb
          }, Ub ? {
            style: wb({
              height: "100%",
              width: "100%",
              maxHeight: Gb,
              maxWidth: Bb
            }, bb.props.style)
          } : {})) : bb
        }))
      }), [hb, Cb, ob, Wb, Kb, lb, tb, Zb]);
      return Ob.createElement("div", {
        id: jb ? "".concat(jb) : void 0,
        className: (0, Bb.e)("recharts-responsive-container", nb),
        style: wb(wb({}, zb), {}, {
          width: Zb,
          height: ob,
          minWidth: lb,
          minHeight: Kb,
          maxHeight: Wb
        }),
        ref: gb
      }, Nb)
    }))
  },
  5859: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ib
    });
    var Bb = hb(49),
      Ob = hb(5175),
      Gb = hb.n(Ob),
      Ub = hb(4831),
      Lb = hb(4918),
      Yb = hb(5718),
      Sb = hb(5181),
      ab = hb(5868);

    function Hb(bb) {
      return Hb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Hb(bb)
    }

    function wb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return Zb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return Zb(bb, ub)
      }(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Zb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Xb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, pb(Bb.key), Bb)
      }
    }

    function pb(bb) {
      var ub = function(bb, ub) {
        if ("object" != Hb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Hb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Hb(ub) ? ub : ub + ""
    }
    var ob = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      Ab = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      lb = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      Kb = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      Wb = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      Cb = Object.keys(Wb),
      db = "NaN";
    var rb = function() {
      function bb(ub, hb) {
        ! function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, bb), this.num = ub, this.unit = hb, this.num = ub, this.unit = hb, Number.isNaN(ub) && (this.unit = ""), "" === hb || lb.test(hb) || (this.num = NaN, this.unit = ""), Cb.includes(hb) && (this.num = function(bb, ub) {
          return bb * Wb[ub]
        }(ub, hb), this.unit = "px")
      }
      return ub = bb, Bb = [{
        key: "parse",
        value: function(ub) {
          var hb, Bb = wb(null !== (hb = Kb.exec(ub)) && void 0 !== hb ? hb : [], 3),
            Ob = Bb[1],
            Gb = Bb[2];
          return new bb(parseFloat(Ob), null !== Gb && void 0 !== Gb ? Gb : "")
        }
      }], (hb = [{
        key: "add",
        value: function(ub) {
          return this.unit !== ub.unit ? new bb(NaN, "") : new bb(this.num + ub.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(ub) {
          return this.unit !== ub.unit ? new bb(NaN, "") : new bb(this.num - ub.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(ub) {
          return "" !== this.unit && "" !== ub.unit && this.unit !== ub.unit ? new bb(NaN, "") : new bb(this.num * ub.num, this.unit || ub.unit)
        }
      }, {
        key: "divide",
        value: function(ub) {
          return "" !== this.unit && "" !== ub.unit && this.unit !== ub.unit ? new bb(NaN, "") : new bb(this.num / ub.num, this.unit || ub.unit)
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
      }]) && Xb(ub.prototype, hb), Bb && Xb(ub, Bb), Object.defineProperty(ub, "prototype", {
        writable: !1
      }), ub;
      var ub, hb, Bb
    }();

    function jb(bb) {
      if (bb.includes(db)) return db;
      for (var ub = bb; ub.includes("*") || ub.includes("/");) {
        var hb, Bb = wb(null !== (hb = ob.exec(ub)) && void 0 !== hb ? hb : [], 4),
          Ob = Bb[1],
          Gb = Bb[2],
          Ub = Bb[3],
          Lb = rb.parse(null !== Ob && void 0 !== Ob ? Ob : ""),
          Yb = rb.parse(null !== Ub && void 0 !== Ub ? Ub : ""),
          Sb = "*" === Gb ? Lb.multiply(Yb) : Lb.divide(Yb);
        if (Sb.isNaN()) return db;
        ub = ub.replace(ob, Sb.toString())
      }
      for (; ub.includes("+") || /.-\d+(?:\.\d+)?/.test(ub);) {
        var ab, Hb = wb(null !== (ab = Ab.exec(ub)) && void 0 !== ab ? ab : [], 4),
          Zb = Hb[1],
          Xb = Hb[2],
          pb = Hb[3],
          lb = rb.parse(null !== Zb && void 0 !== Zb ? Zb : ""),
          Kb = rb.parse(null !== pb && void 0 !== pb ? pb : ""),
          Wb = "+" === Xb ? lb.add(Kb) : lb.subtract(Kb);
        if (Wb.isNaN()) return db;
        ub = ub.replace(Ab, Wb.toString())
      }
      return ub
    }
    var nb = /\(([^()]*)\)/;

    function Db(bb) {
      var ub = bb.replace(/\s+/g, "");
      return ub = function(bb) {
        for (var ub = bb; ub.includes("(");) {
          var hb = wb(nb.exec(ub), 2)[1];
          ub = ub.replace(nb, jb(hb))
        }
        return ub
      }(ub), ub = jb(ub)
    }

    function xb(bb) {
      var ub = function(bb) {
        try {
          return Db(bb)
        } catch (ub) {
          return db
        }
      }(bb.slice(5, -1));
      return ub === db ? "" : ub
    }
    var zb = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      gb = ["dx", "dy", "angle", "className", "breakAll"];

    function ib() {
      return ib = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, ib.apply(this, arguments)
    }

    function vb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function tb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return Jb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return Jb(bb, ub)
      }(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Jb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }
    var eb = /[ \f\n\r\t\v\u2028\u2029]+/,
      Nb = function(bb) {
        var ub = bb.children,
          hb = bb.breakAll,
          Bb = bb.style;
        try {
          var Ob = [];
          return Gb()(ub) || (Ob = hb ? ub.toString().split("") : ub.toString().split(eb)), {
            wordsWithComputedWidth: Ob.map((function(bb) {
              return {
                word: bb,
                width: (0, ab.g)(bb, Bb).width
              }
            })),
            spaceWidth: hb ? 0 : (0, ab.g)("\xa0", Bb).width
          }
        } catch (Ub) {
          return null
        }
      },
      sb = function(bb) {
        return [{
          words: Gb()(bb) ? [] : bb.toString().split(eb)
        }]
      },
      Mb = function(bb) {
        var ub = bb.width,
          hb = bb.scaleToFit,
          Bb = bb.children,
          Ob = bb.style,
          Gb = bb.breakAll,
          Ub = bb.maxLines;
        if ((ub || hb) && !Yb.b.isSsr) {
          var Sb = Nb({
            breakAll: Gb,
            children: Bb,
            style: Ob
          });
          return Sb ? function(bb, ub, hb, Bb, Ob) {
            var Gb = bb.maxLines,
              Ub = bb.children,
              Yb = bb.style,
              Sb = bb.breakAll,
              ab = (0, Lb.z)(Gb),
              Hb = Ub,
              wb = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(bb, ub) {
                  var Gb = ub.word,
                    Ub = ub.width,
                    Lb = bb[bb.length - 1];
                  if (Lb && (null == Bb || Ob || Lb.width + Ub + hb < Number(Bb))) Lb.words.push(Gb), Lb.width += Ub + hb;
                  else {
                    var Yb = {
                      words: [Gb],
                      width: Ub
                    };
                    bb.push(Yb)
                  }
                  return bb
                }), [])
              },
              Zb = wb(ub);
            if (!ab) return Zb;
            for (var Xb, pb = function(bb) {
                var ub = Hb.slice(0, bb),
                  hb = Nb({
                    breakAll: Sb,
                    style: Yb,
                    children: ub + "\u2026"
                  }).wordsWithComputedWidth,
                  Ob = wb(hb),
                  Ub = Ob.length > Gb || function(bb) {
                    return bb.reduce((function(bb, ub) {
                      return bb.width > ub.width ? bb : ub
                    }))
                  }(Ob).width > Number(Bb);
                return [Ub, Ob]
              }, ob = 0, Ab = Hb.length - 1, lb = 0; ob <= Ab && lb <= Hb.length - 1;) {
              var Kb = Math.floor((ob + Ab) / 2),
                Wb = tb(pb(Kb - 1), 2),
                Cb = Wb[0],
                db = Wb[1],
                rb = tb(pb(Kb), 1)[0];
              if (Cb || rb || (ob = Kb + 1), Cb && rb && (Ab = Kb - 1), !Cb && rb) {
                Xb = db;
                break
              }
              lb++
            }
            return Xb || Zb
          }({
            breakAll: Gb,
            children: Bb,
            maxLines: Ub,
            style: Ob
          }, Sb.wordsWithComputedWidth, Sb.spaceWidth, ub, hb) : sb(Bb)
        }
        return sb(Bb)
      },
      mb = "#808080",
      Ib = function(bb) {
        var ub = bb.x,
          hb = void 0 === ub ? 0 : ub,
          Ob = bb.y,
          Gb = void 0 === Ob ? 0 : Ob,
          Yb = bb.lineHeight,
          ab = void 0 === Yb ? "1em" : Yb,
          Hb = bb.capHeight,
          wb = void 0 === Hb ? "0.71em" : Hb,
          Zb = bb.scaleToFit,
          Xb = void 0 !== Zb && Zb,
          pb = bb.textAnchor,
          ob = void 0 === pb ? "start" : pb,
          Ab = bb.verticalAnchor,
          lb = void 0 === Ab ? "end" : Ab,
          Kb = bb.fill,
          Wb = void 0 === Kb ? mb : Kb,
          Cb = vb(bb, zb),
          db = (0, Bb.useMemo)((function() {
            return Mb({
              breakAll: Cb.breakAll,
              children: Cb.children,
              maxLines: Cb.maxLines,
              scaleToFit: Xb,
              style: Cb.style,
              width: Cb.width
            })
          }), [Cb.breakAll, Cb.children, Cb.maxLines, Xb, Cb.style, Cb.width]),
          rb = Cb.dx,
          jb = Cb.dy,
          nb = Cb.angle,
          Db = Cb.className,
          tb = Cb.breakAll,
          Jb = vb(Cb, gb);
        if (!(0, Lb.x)(hb) || !(0, Lb.x)(Gb)) return null;
        var eb, Nb = hb + ((0, Lb.z)(rb) ? rb : 0),
          sb = Gb + ((0, Lb.z)(jb) ? jb : 0);
        switch (lb) {
          case "start":
            eb = xb("calc(".concat(wb, ")"));
            break;
          case "middle":
            eb = xb("calc(".concat((db.length - 1) / 2, " * -").concat(ab, " + (").concat(wb, " / 2))"));
            break;
          default:
            eb = xb("calc(".concat(db.length - 1, " * -").concat(ab, ")"))
        }
        var Ib = [];
        if (Xb) {
          var Pb = db[0].width,
            qb = Cb.width;
          Ib.push("scale(".concat(((0, Lb.z)(qb) ? qb / Pb : 1) / Pb, ")"))
        }
        return nb && Ib.push("rotate(".concat(nb, ", ").concat(Nb, ", ").concat(sb, ")")), Ib.length && (Jb.transform = Ib.join(" ")), Bb.createElement("text", ib({}, (0, Sb.b)(Jb, !0), {
          x: Nb,
          y: sb,
          className: (0, Ub.e)("recharts-text", Db),
          textAnchor: ob,
          fill: Wb.includes("url") ? mb : Wb
        }), db.map((function(bb, ub) {
          var hb = bb.words.join(tb ? "" : " ");
          return Bb.createElement("tspan", {
            x: Nb,
            dy: 0 === ub ? eb : ab,
            key: "".concat(hb, "-").concat(ub)
          }, hb)
        })))
      }
  },
  5714: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => cb
    });
    var Bb = hb(49),
      Ob = hb(5253),
      Gb = hb.n(Ob),
      Ub = hb(5175),
      Lb = hb.n(Ub),
      Yb = hb(4831),
      Sb = hb(4918);

    function ab(bb) {
      return ab = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, ab(bb)
    }

    function Hb() {
      return Hb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Hb.apply(this, arguments)
    }

    function wb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return Zb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return Zb(bb, ub)
      }(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Zb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Xb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function pb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Xb(Object(hb), !0).forEach((function(ub) {
          ob(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Xb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function ob(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != ab(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != ab(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == ab(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Ab(bb) {
      return Array.isArray(bb) && (0, Sb.x)(bb[0]) && (0, Sb.x)(bb[1]) ? bb.join(" ~ ") : bb
    }
    var lb = function(bb) {
      var ub = bb.separator,
        hb = void 0 === ub ? " : " : ub,
        Ob = bb.contentStyle,
        Ub = void 0 === Ob ? {} : Ob,
        ab = bb.itemStyle,
        Zb = void 0 === ab ? {} : ab,
        Xb = bb.labelStyle,
        ob = void 0 === Xb ? {} : Xb,
        lb = bb.payload,
        Kb = bb.formatter,
        Wb = bb.itemSorter,
        Cb = bb.wrapperClassName,
        db = bb.labelClassName,
        rb = bb.label,
        jb = bb.labelFormatter,
        nb = bb.accessibilityLayer,
        Db = void 0 !== nb && nb,
        xb = pb({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, Ub),
        zb = pb({
          margin: 0
        }, ob),
        gb = !Lb()(rb),
        ib = gb ? rb : "",
        vb = (0, Yb.e)("recharts-default-tooltip", Cb),
        tb = (0, Yb.e)("recharts-tooltip-label", db);
      gb && jb && void 0 !== lb && null !== lb && (ib = jb(rb, lb));
      var Jb = Db ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return Bb.createElement("div", Hb({
        className: vb,
        style: xb
      }, Jb), Bb.createElement("p", {
        className: tb,
        style: zb
      }, Bb.isValidElement(ib) ? ib : "".concat(ib)), function() {
        if (lb && lb.length) {
          var bb = (Wb ? Gb()(lb, Wb) : lb).map((function(bb, ub) {
            if ("none" === bb.type) return null;
            var Ob = pb({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: bb.color || "#000"
              }, Zb),
              Gb = bb.formatter || Kb || Ab,
              Ub = bb.value,
              Lb = bb.name,
              Yb = Ub,
              ab = Lb;
            if (Gb && null != Yb && null != ab) {
              var Hb = Gb(Ub, Lb, bb, ub, lb);
              if (Array.isArray(Hb)) {
                var Xb = wb(Hb, 2);
                Yb = Xb[0], ab = Xb[1]
              } else Yb = Hb
            }
            return Bb.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(ub),
              style: Ob
            }, (0, Sb.x)(ab) ? Bb.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, ab) : null, (0, Sb.x)(ab) ? Bb.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, hb) : null, Bb.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, Yb), Bb.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, bb.unit || ""))
          }));
          return Bb.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, bb)
        }
        return null
      }())
    };

    function Kb(bb) {
      return Kb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Kb(bb)
    }

    function Wb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != Kb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != Kb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Kb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var Cb = "recharts-tooltip-wrapper",
      db = {
        visibility: "hidden"
      };

    function rb(bb) {
      var ub = bb.coordinate,
        hb = bb.translateX,
        Bb = bb.translateY;
      return (0, Yb.e)(Cb, Wb(Wb(Wb(Wb({}, "".concat(Cb, "-right"), (0, Sb.z)(hb) && ub && (0, Sb.z)(ub.x) && hb >= ub.x), "".concat(Cb, "-left"), (0, Sb.z)(hb) && ub && (0, Sb.z)(ub.x) && hb < ub.x), "".concat(Cb, "-bottom"), (0, Sb.z)(Bb) && ub && (0, Sb.z)(ub.y) && Bb >= ub.y), "".concat(Cb, "-top"), (0, Sb.z)(Bb) && ub && (0, Sb.z)(ub.y) && Bb < ub.y))
    }

    function jb(bb) {
      var ub = bb.allowEscapeViewBox,
        hb = bb.coordinate,
        Bb = bb.key,
        Ob = bb.offsetTopLeft,
        Gb = bb.position,
        Ub = bb.reverseDirection,
        Lb = bb.tooltipDimension,
        Yb = bb.viewBox,
        ab = bb.viewBoxDimension;
      if (Gb && (0, Sb.z)(Gb[Bb])) return Gb[Bb];
      var Hb = hb[Bb] - Lb - Ob,
        wb = hb[Bb] + Ob;
      return ub[Bb] ? Ub[Bb] ? Hb : wb : Ub[Bb] ? Hb < Yb[Bb] ? Math.max(wb, Yb[Bb]) : Math.max(Hb, Yb[Bb]) : wb + Lb > Yb[Bb] + ab ? Math.max(Hb, Yb[Bb]) : Math.max(wb, Yb[Bb])
    }

    function nb(bb) {
      return nb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, nb(bb)
    }

    function Db(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function xb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Db(Object(hb), !0).forEach((function(ub) {
          Jb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Db(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function zb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, eb(Bb.key), Bb)
      }
    }

    function gb(bb, ub, hb) {
      return ub = vb(ub),
        function(bb, ub) {
          if (ub && ("object" === nb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, ib() ? Reflect.construct(ub, hb || [], vb(bb).constructor) : ub.apply(bb, hb))
    }

    function ib() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (ib = function() {
        return !!bb
      })()
    }

    function vb(bb) {
      return vb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, vb(bb)
    }

    function tb(bb, ub) {
      return tb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, tb(bb, ub)
    }

    function Jb(bb, ub, hb) {
      return (ub = eb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function eb(bb) {
      var ub = function(bb, ub) {
        if ("object" != nb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != nb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == nb(ub) ? ub : ub + ""
    }
    var Nb = function(bb) {
        function ub() {
          var bb;
          ! function(bb, ub) {
            if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
          }(this, ub);
          for (var hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
          return Jb(bb = gb(this, ub, [].concat(Bb)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), Jb(bb, "handleKeyDown", (function(ub) {
            var hb, Bb, Ob, Gb;
            "Escape" === ub.key && bb.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (hb = null === (Bb = bb.props.coordinate) || void 0 === Bb ? void 0 : Bb.x) && void 0 !== hb ? hb : 0,
                y: null !== (Ob = null === (Gb = bb.props.coordinate) || void 0 === Gb ? void 0 : Gb.y) && void 0 !== Ob ? Ob : 0
              }
            })
          })), bb
        }
        return function(bb, ub) {
          if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
          bb.prototype = Object.create(ub && ub.prototype, {
            constructor: {
              value: bb,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), ub && tb(bb, ub)
        }(ub, bb), hb = ub, (Ob = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var bb = this.wrapperNode.getBoundingClientRect();
              (Math.abs(bb.width - this.state.lastBoundingBox.width) > 1 || Math.abs(bb.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: bb.width,
                  height: bb.height
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
            var bb, ub;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (bb = this.props.coordinate) || void 0 === bb ? void 0 : bb.x) === this.state.dismissedAtCoordinate.x && (null === (ub = this.props.coordinate) || void 0 === ub ? void 0 : ub.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var bb = this,
              ub = this.props,
              hb = ub.active,
              Ob = ub.allowEscapeViewBox,
              Gb = ub.animationDuration,
              Ub = ub.animationEasing,
              Lb = ub.children,
              Yb = ub.coordinate,
              Sb = ub.hasPayload,
              ab = ub.isAnimationActive,
              Hb = ub.offset,
              wb = ub.position,
              Zb = ub.reverseDirection,
              Xb = ub.useTranslate3d,
              pb = ub.viewBox,
              ob = ub.wrapperStyle,
              Ab = function(bb) {
                var ub, hb, Bb = bb.allowEscapeViewBox,
                  Ob = bb.coordinate,
                  Gb = bb.offsetTopLeft,
                  Ub = bb.position,
                  Lb = bb.reverseDirection,
                  Yb = bb.tooltipBox,
                  Sb = bb.useTranslate3d,
                  ab = bb.viewBox;
                return {
                  cssProperties: Yb.height > 0 && Yb.width > 0 && Ob ? function(bb) {
                    var ub = bb.translateX,
                      hb = bb.translateY;
                    return {
                      transform: bb.useTranslate3d ? "translate3d(".concat(ub, "px, ").concat(hb, "px, 0)") : "translate(".concat(ub, "px, ").concat(hb, "px)")
                    }
                  }({
                    translateX: ub = jb({
                      allowEscapeViewBox: Bb,
                      coordinate: Ob,
                      key: "x",
                      offsetTopLeft: Gb,
                      position: Ub,
                      reverseDirection: Lb,
                      tooltipDimension: Yb.width,
                      viewBox: ab,
                      viewBoxDimension: ab.width
                    }),
                    translateY: hb = jb({
                      allowEscapeViewBox: Bb,
                      coordinate: Ob,
                      key: "y",
                      offsetTopLeft: Gb,
                      position: Ub,
                      reverseDirection: Lb,
                      tooltipDimension: Yb.height,
                      viewBox: ab,
                      viewBoxDimension: ab.height
                    }),
                    useTranslate3d: Sb
                  }) : db,
                  cssClasses: rb({
                    translateX: ub,
                    translateY: hb,
                    coordinate: Ob
                  })
                }
              }({
                allowEscapeViewBox: Ob,
                coordinate: Yb,
                offsetTopLeft: Hb,
                position: wb,
                reverseDirection: Zb,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: Xb,
                viewBox: pb
              }),
              lb = Ab.cssClasses,
              Kb = Ab.cssProperties,
              Wb = xb(xb({
                transition: ab && hb ? "transform ".concat(Gb, "ms ").concat(Ub) : void 0
              }, Kb), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && hb && Sb ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, ob);
            return Bb.createElement("div", {
              tabIndex: -1,
              className: lb,
              style: Wb,
              ref: function(ub) {
                bb.wrapperNode = ub
              }
            }, Lb)
          }
        }]) && zb(hb.prototype, Ob), Gb && zb(hb, Gb), Object.defineProperty(hb, "prototype", {
          writable: !1
        }), hb;
        var hb, Ob, Gb
      }(Bb.PureComponent),
      sb = hb(5718),
      Mb = hb(5722);

    function mb(bb) {
      return mb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, mb(bb)
    }

    function Ib(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Pb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Ib(Object(hb), !0).forEach((function(ub) {
          fb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Ib(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function qb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, kb(Bb.key), Bb)
      }
    }

    function Eb(bb, ub, hb) {
      return ub = Vb(ub),
        function(bb, ub) {
          if (ub && ("object" === mb(ub) || "function" === typeof ub)) return ub;
          if (void 0 !== ub) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, yb() ? Reflect.construct(ub, hb || [], Vb(bb).constructor) : ub.apply(bb, hb))
    }

    function yb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (yb = function() {
        return !!bb
      })()
    }

    function Vb(bb) {
      return Vb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Vb(bb)
    }

    function Fb(bb, ub) {
      return Fb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ub) {
        return bb.__proto__ = ub, bb
      }, Fb(bb, ub)
    }

    function fb(bb, ub, hb) {
      return (ub = kb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function kb(bb) {
      var ub = function(bb, ub) {
        if ("object" != mb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != mb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == mb(ub) ? ub : ub + ""
    }

    function Tb(bb) {
      return bb.dataKey
    }
    var cb = function(bb) {
      function ub() {
        return function(bb, ub) {
          if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
        }(this, ub), Eb(this, ub, arguments)
      }
      return function(bb, ub) {
        if ("function" !== typeof ub && null !== ub) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ub && ub.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ub && Fb(bb, ub)
      }(ub, bb), hb = ub, (Ob = [{
        key: "render",
        value: function() {
          var bb = this,
            ub = this.props,
            hb = ub.active,
            Ob = ub.allowEscapeViewBox,
            Gb = ub.animationDuration,
            Ub = ub.animationEasing,
            Lb = ub.content,
            Yb = ub.coordinate,
            Sb = ub.filterNull,
            ab = ub.isAnimationActive,
            Hb = ub.offset,
            wb = ub.payload,
            Zb = ub.payloadUniqBy,
            Xb = ub.position,
            pb = ub.reverseDirection,
            ob = ub.useTranslate3d,
            Ab = ub.viewBox,
            Kb = ub.wrapperStyle,
            Wb = null !== wb && void 0 !== wb ? wb : [];
          Sb && Wb.length && (Wb = (0, Mb.d)(wb.filter((function(ub) {
            return null != ub.value && (!0 !== ub.hide || bb.props.includeHidden)
          })), Zb, Tb));
          var Cb = Wb.length > 0;
          return Bb.createElement(Nb, {
            allowEscapeViewBox: Ob,
            animationDuration: Gb,
            animationEasing: Ub,
            isAnimationActive: ab,
            active: hb,
            coordinate: Yb,
            hasPayload: Cb,
            offset: Hb,
            position: Xb,
            reverseDirection: pb,
            useTranslate3d: ob,
            viewBox: Ab,
            wrapperStyle: Kb
          }, function(bb, ub) {
            return Bb.isValidElement(bb) ? Bb.cloneElement(bb, ub) : "function" === typeof bb ? Bb.createElement(bb, ub) : Bb.createElement(lb, ub)
          }(Lb, Pb(Pb({}, this.props), {}, {
            payload: Wb
          })))
        }
      }]) && qb(hb.prototype, Ob), Gb && qb(hb, Gb), Object.defineProperty(hb, "prototype", {
        writable: !1
      }), hb;
      var hb, Ob, Gb
    }(Bb.PureComponent);
    fb(cb, "displayName", "Tooltip"), fb(cb, "defaultProps", {
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
      isAnimationActive: !sb.b.isSsr,
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
  5710: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb
    });
    var Bb = hb(49),
      Ob = hb(4831),
      Gb = hb(5181),
      Ub = ["children", "className"];

    function Lb() {
      return Lb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Lb.apply(this, arguments)
    }

    function Yb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }
    var Sb = Bb.forwardRef((function(bb, ub) {
      var hb = bb.children,
        Sb = bb.className,
        ab = Yb(bb, Ub),
        Hb = (0, Ob.e)("recharts-layer", Sb);
      return Bb.createElement("g", Lb({
        className: Hb
      }, (0, Gb.b)(ab, !0), {
        ref: ub
      }), hb)
    }))
  },
  5704: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb
    });
    var Bb = hb(49),
      Ob = hb(4831),
      Gb = hb(5181),
      Ub = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function Lb() {
      return Lb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Lb.apply(this, arguments)
    }

    function Yb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function Sb(bb) {
      var ub = bb.children,
        hb = bb.width,
        Sb = bb.height,
        ab = bb.viewBox,
        Hb = bb.className,
        wb = bb.style,
        Zb = bb.title,
        Xb = bb.desc,
        pb = Yb(bb, Ub),
        ob = ab || {
          width: hb,
          height: Sb,
          x: 0,
          y: 0
        },
        Ab = (0, Ob.e)("recharts-surface", Hb);
      return Bb.createElement("svg", Lb({}, (0, Gb.b)(pb, !0, "svg"), {
        className: Ab,
        width: hb,
        height: Sb,
        style: wb,
        viewBox: "".concat(ob.x, " ").concat(ob.y, " ").concat(ob.width, " ").concat(ob.height)
      }), Bb.createElement("title", null, Zb), Bb.createElement("desc", null, Xb), ub)
    }
  },
  6067: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Kb,
      d: () => db,
      h: () => zb,
      j: () => xb,
      m: () => Wb,
      n: () => Db,
      p: () => nb,
      r: () => Cb,
      u: () => jb,
      v: () => rb
    });
    var Bb = hb(49),
      Ob = hb(5700),
      Gb = hb(6071),
      Ub = hb.n(Gb),
      Lb = hb(5988),
      Yb = hb.n(Lb),
      Sb = hb(4974),
      ab = hb.n(Sb)()((function(bb) {
        return {
          x: bb.left,
          y: bb.top,
          width: bb.width,
          height: bb.height
        }
      }), (function(bb) {
        return ["l", bb.left, "t", bb.top, "w", bb.width, "h", bb.height].join("")
      })),
      Hb = hb(4918);
    var wb = (0, Bb.createContext)(void 0),
      Zb = (0, Bb.createContext)(void 0),
      Xb = (0, Bb.createContext)(void 0),
      pb = (0, Bb.createContext)({}),
      ob = (0, Bb.createContext)(void 0),
      Ab = (0, Bb.createContext)(0),
      lb = (0, Bb.createContext)(0),
      Kb = function(bb) {
        var ub = bb.state,
          hb = ub.xAxisMap,
          Ob = ub.yAxisMap,
          Gb = ub.offset,
          Ub = bb.clipPathId,
          Lb = bb.children,
          Yb = bb.width,
          Sb = bb.height,
          Hb = ab(Gb);
        return Bb.createElement(wb.Provider, {
          value: hb
        }, Bb.createElement(Zb.Provider, {
          value: Ob
        }, Bb.createElement(pb.Provider, {
          value: Gb
        }, Bb.createElement(Xb.Provider, {
          value: Hb
        }, Bb.createElement(ob.Provider, {
          value: Ub
        }, Bb.createElement(Ab.Provider, {
          value: Sb
        }, Bb.createElement(lb.Provider, {
          value: Yb
        }, Lb)))))))
      },
      Wb = function() {
        return (0, Bb.useContext)(ob)
      };
    var Cb = function(bb) {
        var ub = (0, Bb.useContext)(wb);
        null == ub && (0, Ob.e)(!1);
        var hb = ub[bb];
        return null == hb && (0, Ob.e)(!1), hb
      },
      db = function() {
        var bb = (0, Bb.useContext)(wb);
        return (0, Hb.k)(bb)
      },
      rb = function() {
        var bb = (0, Bb.useContext)(Zb);
        return Ub()(bb, (function(bb) {
          return Yb()(bb.domain, Number.isFinite)
        })) || (0, Hb.k)(bb)
      },
      jb = function(bb) {
        var ub = (0, Bb.useContext)(Zb);
        null == ub && (0, Ob.e)(!1);
        var hb = ub[bb];
        return null == hb && (0, Ob.e)(!1), hb
      },
      nb = function() {
        return (0, Bb.useContext)(Xb)
      },
      Db = function() {
        return (0, Bb.useContext)(pb)
      },
      xb = function() {
        return (0, Bb.useContext)(lb)
      },
      zb = function() {
        return (0, Bb.useContext)(Ab)
      }
  },
  6088: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Tb
    });
    var Bb = hb(49);

    function Ob() {}

    function Gb(bb, ub, hb) {
      bb._context.bezierCurveTo((2 * bb._x0 + bb._x1) / 3, (2 * bb._y0 + bb._y1) / 3, (bb._x0 + 2 * bb._x1) / 3, (bb._y0 + 2 * bb._y1) / 3, (bb._x0 + 4 * bb._x1 + ub) / 6, (bb._y0 + 4 * bb._y1 + hb) / 6)
    }

    function Ub(bb) {
      this._context = bb
    }

    function Lb(bb) {
      this._context = bb
    }

    function Yb(bb) {
      this._context = bb
    }
    Ub.prototype = {
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
            Gb(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(bb, ub) {
        switch (bb = +bb, ub = +ub, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(bb, ub) : this._context.moveTo(bb, ub);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            Gb(this, bb, ub)
        }
        this._x0 = this._x1, this._x1 = bb, this._y0 = this._y1, this._y1 = ub
      }
    }, Lb.prototype = {
      areaStart: Ob,
      areaEnd: Ob,
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
      point: function(bb, ub) {
        switch (bb = +bb, ub = +ub, this._point) {
          case 0:
            this._point = 1, this._x2 = bb, this._y2 = ub;
            break;
          case 1:
            this._point = 2, this._x3 = bb, this._y3 = ub;
            break;
          case 2:
            this._point = 3, this._x4 = bb, this._y4 = ub, this._context.moveTo((this._x0 + 4 * this._x1 + bb) / 6, (this._y0 + 4 * this._y1 + ub) / 6);
            break;
          default:
            Gb(this, bb, ub)
        }
        this._x0 = this._x1, this._x1 = bb, this._y0 = this._y1, this._y1 = ub
      }
    }, Yb.prototype = {
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
      point: function(bb, ub) {
        switch (bb = +bb, ub = +ub, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var hb = (this._x0 + 4 * this._x1 + bb) / 6,
              Bb = (this._y0 + 4 * this._y1 + ub) / 6;
            this._line ? this._context.lineTo(hb, Bb) : this._context.moveTo(hb, Bb);
            break;
          case 3:
            this._point = 4;
          default:
            Gb(this, bb, ub)
        }
        this._x0 = this._x1, this._x1 = bb, this._y0 = this._y1, this._y1 = ub
      }
    };
    class Sb {
      constructor(bb, ub) {
        this._context = bb, this._x = ub
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
      point(bb, ub) {
        switch (bb = +bb, ub = +ub, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(bb, ub) : this._context.moveTo(bb, ub);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + bb) / 2, this._y0, this._x0, ub, bb, ub) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + ub) / 2, bb, this._y0, bb, ub)
        }
        this._x0 = bb, this._y0 = ub
      }
    }

    function ab(bb) {
      this._context = bb
    }

    function Hb(bb) {
      this._context = bb
    }

    function wb(bb) {
      return new Hb(bb)
    }

    function Zb(bb) {
      return bb < 0 ? -1 : 1
    }

    function Xb(bb, ub, hb) {
      var Bb = bb._x1 - bb._x0,
        Ob = ub - bb._x1,
        Gb = (bb._y1 - bb._y0) / (Bb || Ob < 0 && -0),
        Ub = (hb - bb._y1) / (Ob || Bb < 0 && -0),
        Lb = (Gb * Ob + Ub * Bb) / (Bb + Ob);
      return (Zb(Gb) + Zb(Ub)) * Math.min(Math.abs(Gb), Math.abs(Ub), .5 * Math.abs(Lb)) || 0
    }

    function pb(bb, ub) {
      var hb = bb._x1 - bb._x0;
      return hb ? (3 * (bb._y1 - bb._y0) / hb - ub) / 2 : ub
    }

    function ob(bb, ub, hb) {
      var Bb = bb._x0,
        Ob = bb._y0,
        Gb = bb._x1,
        Ub = bb._y1,
        Lb = (Gb - Bb) / 3;
      bb._context.bezierCurveTo(Bb + Lb, Ob + Lb * ub, Gb - Lb, Ub - Lb * hb, Gb, Ub)
    }

    function Ab(bb) {
      this._context = bb
    }

    function lb(bb) {
      this._context = new Kb(bb)
    }

    function Kb(bb) {
      this._context = bb
    }

    function Wb(bb) {
      this._context = bb
    }

    function Cb(bb) {
      var ub, hb, Bb = bb.length - 1,
        Ob = new Array(Bb),
        Gb = new Array(Bb),
        Ub = new Array(Bb);
      for (Ob[0] = 0, Gb[0] = 2, Ub[0] = bb[0] + 2 * bb[1], ub = 1; ub < Bb - 1; ++ub) Ob[ub] = 1, Gb[ub] = 4, Ub[ub] = 4 * bb[ub] + 2 * bb[ub + 1];
      for (Ob[Bb - 1] = 2, Gb[Bb - 1] = 7, Ub[Bb - 1] = 8 * bb[Bb - 1] + bb[Bb], ub = 1; ub < Bb; ++ub) hb = Ob[ub] / Gb[ub - 1], Gb[ub] -= hb, Ub[ub] -= hb * Ub[ub - 1];
      for (Ob[Bb - 1] = Ub[Bb - 1] / Gb[Bb - 1], ub = Bb - 2; ub >= 0; --ub) Ob[ub] = (Ub[ub] - Ob[ub + 1]) / Gb[ub];
      for (Gb[Bb - 1] = (bb[Bb] + Ob[Bb - 1]) / 2, ub = 0; ub < Bb - 1; ++ub) Gb[ub] = 2 * bb[ub + 1] - Ob[ub + 1];
      return [Ob, Gb]
    }

    function db(bb, ub) {
      this._context = bb, this._t = ub
    }
    ab.prototype = {
      areaStart: Ob,
      areaEnd: Ob,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(bb, ub) {
        bb = +bb, ub = +ub, this._point ? this._context.lineTo(bb, ub) : (this._point = 1, this._context.moveTo(bb, ub))
      }
    }, Hb.prototype = {
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
      point: function(bb, ub) {
        switch (bb = +bb, ub = +ub, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(bb, ub) : this._context.moveTo(bb, ub);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(bb, ub)
        }
      }
    }, Ab.prototype = {
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
            ob(this, this._t0, pb(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(bb, ub) {
        var hb = NaN;
        if (ub = +ub, (bb = +bb) !== this._x1 || ub !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(bb, ub) : this._context.moveTo(bb, ub);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, ob(this, pb(this, hb = Xb(this, bb, ub)), hb);
              break;
            default:
              ob(this, this._t0, hb = Xb(this, bb, ub))
          }
          this._x0 = this._x1, this._x1 = bb, this._y0 = this._y1, this._y1 = ub, this._t0 = hb
        }
      }
    }, (lb.prototype = Object.create(Ab.prototype)).point = function(bb, ub) {
      Ab.prototype.point.call(this, ub, bb)
    }, Kb.prototype = {
      moveTo: function(bb, ub) {
        this._context.moveTo(ub, bb)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(bb, ub) {
        this._context.lineTo(ub, bb)
      },
      bezierCurveTo: function(bb, ub, hb, Bb, Ob, Gb) {
        this._context.bezierCurveTo(ub, bb, Bb, hb, Gb, Ob)
      }
    }, Wb.prototype = {
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
        var bb = this._x,
          ub = this._y,
          hb = bb.length;
        if (hb)
          if (this._line ? this._context.lineTo(bb[0], ub[0]) : this._context.moveTo(bb[0], ub[0]), 2 === hb) this._context.lineTo(bb[1], ub[1]);
          else
            for (var Bb = Cb(bb), Ob = Cb(ub), Gb = 0, Ub = 1; Ub < hb; ++Gb, ++Ub) this._context.bezierCurveTo(Bb[0][Gb], Ob[0][Gb], Bb[1][Gb], Ob[1][Gb], bb[Ub], ub[Ub]);
        (this._line || 0 !== this._line && 1 === hb) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(bb, ub) {
        this._x.push(+bb), this._y.push(+ub)
      }
    }, db.prototype = {
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
      point: function(bb, ub) {
        switch (bb = +bb, ub = +ub, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(bb, ub) : this._context.moveTo(bb, ub);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, ub), this._context.lineTo(bb, ub);
            else {
              var hb = this._x * (1 - this._t) + bb * this._t;
              this._context.lineTo(hb, this._y), this._context.lineTo(hb, ub)
            }
        }
        this._x = bb, this._y = ub
      }
    };
    var rb = hb(5949),
      jb = hb(5834),
      nb = hb(5843);

    function Db(bb) {
      return bb[0]
    }

    function xb(bb) {
      return bb[1]
    }

    function zb(bb, ub) {
      var hb = (0, jb.d)(!0),
        Bb = null,
        Ob = wb,
        Gb = null,
        Ub = (0, nb.d)(Lb);

      function Lb(Lb) {
        var Yb, Sb, ab, Hb = (Lb = (0, rb.d)(Lb)).length,
          wb = !1;
        for (null == Bb && (Gb = Ob(ab = Ub())), Yb = 0; Yb <= Hb; ++Yb) !(Yb < Hb && hb(Sb = Lb[Yb], Yb, Lb)) === wb && ((wb = !wb) ? Gb.lineStart() : Gb.lineEnd()), wb && Gb.point(+bb(Sb, Yb, Lb), +ub(Sb, Yb, Lb));
        if (ab) return Gb = null, ab + "" || null
      }
      return bb = "function" === typeof bb ? bb : void 0 === bb ? Db : (0, jb.d)(bb), ub = "function" === typeof ub ? ub : void 0 === ub ? xb : (0, jb.d)(ub), Lb.x = function(ub) {
        return arguments.length ? (bb = "function" === typeof ub ? ub : (0, jb.d)(+ub), Lb) : bb
      }, Lb.y = function(bb) {
        return arguments.length ? (ub = "function" === typeof bb ? bb : (0, jb.d)(+bb), Lb) : ub
      }, Lb.defined = function(bb) {
        return arguments.length ? (hb = "function" === typeof bb ? bb : (0, jb.d)(!!bb), Lb) : hb
      }, Lb.curve = function(bb) {
        return arguments.length ? (Ob = bb, null != Bb && (Gb = Ob(Bb)), Lb) : Ob
      }, Lb.context = function(bb) {
        return arguments.length ? (null == bb ? Bb = Gb = null : Gb = Ob(Bb = bb), Lb) : Bb
      }, Lb
    }

    function gb(bb, ub, hb) {
      var Bb = null,
        Ob = (0, jb.d)(!0),
        Gb = null,
        Ub = wb,
        Lb = null,
        Yb = (0, nb.d)(Sb);

      function Sb(Sb) {
        var ab, Hb, wb, Zb, Xb, pb = (Sb = (0, rb.d)(Sb)).length,
          ob = !1,
          Ab = new Array(pb),
          lb = new Array(pb);
        for (null == Gb && (Lb = Ub(Xb = Yb())), ab = 0; ab <= pb; ++ab) {
          if (!(ab < pb && Ob(Zb = Sb[ab], ab, Sb)) === ob)
            if (ob = !ob) Hb = ab, Lb.areaStart(), Lb.lineStart();
            else {
              for (Lb.lineEnd(), Lb.lineStart(), wb = ab - 1; wb >= Hb; --wb) Lb.point(Ab[wb], lb[wb]);
              Lb.lineEnd(), Lb.areaEnd()
            } ob && (Ab[ab] = +bb(Zb, ab, Sb), lb[ab] = +ub(Zb, ab, Sb), Lb.point(Bb ? +Bb(Zb, ab, Sb) : Ab[ab], hb ? +hb(Zb, ab, Sb) : lb[ab]))
        }
        if (Xb) return Lb = null, Xb + "" || null
      }

      function ab() {
        return zb().defined(Ob).curve(Ub).context(Gb)
      }
      return bb = "function" === typeof bb ? bb : void 0 === bb ? Db : (0, jb.d)(+bb), ub = "function" === typeof ub ? ub : void 0 === ub ? (0, jb.d)(0) : (0, jb.d)(+ub), hb = "function" === typeof hb ? hb : void 0 === hb ? xb : (0, jb.d)(+hb), Sb.x = function(ub) {
        return arguments.length ? (bb = "function" === typeof ub ? ub : (0, jb.d)(+ub), Bb = null, Sb) : bb
      }, Sb.x0 = function(ub) {
        return arguments.length ? (bb = "function" === typeof ub ? ub : (0, jb.d)(+ub), Sb) : bb
      }, Sb.x1 = function(bb) {
        return arguments.length ? (Bb = null == bb ? null : "function" === typeof bb ? bb : (0, jb.d)(+bb), Sb) : Bb
      }, Sb.y = function(bb) {
        return arguments.length ? (ub = "function" === typeof bb ? bb : (0, jb.d)(+bb), hb = null, Sb) : ub
      }, Sb.y0 = function(bb) {
        return arguments.length ? (ub = "function" === typeof bb ? bb : (0, jb.d)(+bb), Sb) : ub
      }, Sb.y1 = function(bb) {
        return arguments.length ? (hb = null == bb ? null : "function" === typeof bb ? bb : (0, jb.d)(+bb), Sb) : hb
      }, Sb.lineX0 = Sb.lineY0 = function() {
        return ab().x(bb).y(ub)
      }, Sb.lineY1 = function() {
        return ab().x(bb).y(hb)
      }, Sb.lineX1 = function() {
        return ab().x(Bb).y(ub)
      }, Sb.defined = function(bb) {
        return arguments.length ? (Ob = "function" === typeof bb ? bb : (0, jb.d)(!!bb), Sb) : Ob
      }, Sb.curve = function(bb) {
        return arguments.length ? (Ub = bb, null != Gb && (Lb = Ub(Gb)), Sb) : Ub
      }, Sb.context = function(bb) {
        return arguments.length ? (null == bb ? Gb = Lb = null : Lb = Ub(Gb = bb), Sb) : Gb
      }, Sb
    }
    var ib = hb(5791),
      vb = hb.n(ib),
      tb = hb(5019),
      Jb = hb.n(tb),
      eb = hb(4831),
      Nb = hb(5207),
      sb = hb(5181),
      Mb = hb(4918);

    function mb(bb) {
      return mb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, mb(bb)
    }

    function Ib() {
      return Ib = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Ib.apply(this, arguments)
    }

    function Pb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function qb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Pb(Object(hb), !0).forEach((function(ub) {
          Eb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Pb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Eb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != mb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != mb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == mb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var yb = {
        curveBasisClosed: function(bb) {
          return new Lb(bb)
        },
        curveBasisOpen: function(bb) {
          return new Yb(bb)
        },
        curveBasis: function(bb) {
          return new Ub(bb)
        },
        curveBumpX: function(bb) {
          return new Sb(bb, !0)
        },
        curveBumpY: function(bb) {
          return new Sb(bb, !1)
        },
        curveLinearClosed: function(bb) {
          return new ab(bb)
        },
        curveLinear: wb,
        curveMonotoneX: function(bb) {
          return new Ab(bb)
        },
        curveMonotoneY: function(bb) {
          return new lb(bb)
        },
        curveNatural: function(bb) {
          return new Wb(bb)
        },
        curveStep: function(bb) {
          return new db(bb, .5)
        },
        curveStepAfter: function(bb) {
          return new db(bb, 1)
        },
        curveStepBefore: function(bb) {
          return new db(bb, 0)
        }
      },
      Vb = function(bb) {
        return bb.x === +bb.x && bb.y === +bb.y
      },
      Fb = function(bb) {
        return bb.x
      },
      fb = function(bb) {
        return bb.y
      },
      kb = function(bb) {
        var ub, hb = bb.type,
          Bb = void 0 === hb ? "linear" : hb,
          Ob = bb.points,
          Gb = void 0 === Ob ? [] : Ob,
          Ub = bb.baseLine,
          Lb = bb.layout,
          Yb = bb.connectNulls,
          Sb = void 0 !== Yb && Yb,
          ab = function(bb, ub) {
            if (Jb()(bb)) return bb;
            var hb = "curve".concat(vb()(bb));
            return "curveMonotone" !== hb && "curveBump" !== hb || !ub ? yb[hb] || wb : yb["".concat(hb).concat("vertical" === ub ? "Y" : "X")]
          }(Bb, Lb),
          Hb = Sb ? Gb.filter((function(bb) {
            return Vb(bb)
          })) : Gb;
        if (Array.isArray(Ub)) {
          var Zb = Sb ? Ub.filter((function(bb) {
              return Vb(bb)
            })) : Ub,
            Xb = Hb.map((function(bb, ub) {
              return qb(qb({}, bb), {}, {
                base: Zb[ub]
              })
            }));
          return (ub = "vertical" === Lb ? gb().y(fb).x1(Fb).x0((function(bb) {
            return bb.base.x
          })) : gb().x(Fb).y1(fb).y0((function(bb) {
            return bb.base.y
          }))).defined(Vb).curve(ab), ub(Xb)
        }
        return (ub = "vertical" === Lb && (0, Mb.z)(Ub) ? gb().y(fb).x1(Fb).x0(Ub) : (0, Mb.z)(Ub) ? gb().x(Fb).y1(fb).y0(Ub) : zb().x(Fb).y(fb)).defined(Vb).curve(ab), ub(Hb)
      },
      Tb = function(bb) {
        var ub = bb.className,
          hb = bb.points,
          Ob = bb.path,
          Gb = bb.pathRef;
        if ((!hb || !hb.length) && !Ob) return null;
        var Ub = hb && hb.length ? kb(bb) : Ob;
        return Bb.createElement("path", Ib({}, (0, sb.b)(bb, !1), (0, Nb.m)(bb), {
          className: (0, eb.e)("recharts-curve", ub),
          d: Ub,
          ref: Gb
        }))
      }
  },
  5850: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb
    });
    var Bb = hb(49),
      Ob = hb(4831),
      Gb = hb(5207),
      Ub = hb(5181);

    function Lb() {
      return Lb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Lb.apply(this, arguments)
    }
    var Yb = function(bb) {
      var ub = bb.cx,
        hb = bb.cy,
        Yb = bb.r,
        Sb = bb.className,
        ab = (0, Ob.e)("recharts-dot", Sb);
      return ub === +ub && hb === +hb && Yb === +Yb ? Bb.createElement("circle", Lb({}, (0, Ub.b)(bb, !1), (0, Gb.m)(bb), {
        className: ab,
        cx: ub,
        cy: hb,
        r: Yb
      })) : null
    }
  },
  5853: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ab,
      f: () => pb
    });
    var Bb = hb(49),
      Ob = hb(4831),
      Gb = hb(5855),
      Ub = hb(5181);

    function Lb(bb) {
      return Lb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Lb(bb)
    }

    function Yb() {
      return Yb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Yb.apply(this, arguments)
    }

    function Sb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return ab(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return ab(bb, ub)
      }(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ab(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Hb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function wb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Hb(Object(hb), !0).forEach((function(ub) {
          Zb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Hb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Zb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != Lb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != Lb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Lb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var Xb = function(bb, ub, hb, Bb, Ob) {
        var Gb, Ub = Math.min(Math.abs(hb) / 2, Math.abs(Bb) / 2),
          Lb = Bb >= 0 ? 1 : -1,
          Yb = hb >= 0 ? 1 : -1,
          Sb = Bb >= 0 && hb >= 0 || Bb < 0 && hb < 0 ? 1 : 0;
        if (Ub > 0 && Ob instanceof Array) {
          for (var ab = [0, 0, 0, 0], Hb = 0; Hb < 4; Hb++) ab[Hb] = Ob[Hb] > Ub ? Ub : Ob[Hb];
          Gb = "M".concat(bb, ",").concat(ub + Lb * ab[0]), ab[0] > 0 && (Gb += "A ".concat(ab[0], ",").concat(ab[0], ",0,0,").concat(Sb, ",").concat(bb + Yb * ab[0], ",").concat(ub)), Gb += "L ".concat(bb + hb - Yb * ab[1], ",").concat(ub), ab[1] > 0 && (Gb += "A ".concat(ab[1], ",").concat(ab[1], ",0,0,").concat(Sb, ",\n        ").concat(bb + hb, ",").concat(ub + Lb * ab[1])), Gb += "L ".concat(bb + hb, ",").concat(ub + Bb - Lb * ab[2]), ab[2] > 0 && (Gb += "A ".concat(ab[2], ",").concat(ab[2], ",0,0,").concat(Sb, ",\n        ").concat(bb + hb - Yb * ab[2], ",").concat(ub + Bb)), Gb += "L ".concat(bb + Yb * ab[3], ",").concat(ub + Bb), ab[3] > 0 && (Gb += "A ".concat(ab[3], ",").concat(ab[3], ",0,0,").concat(Sb, ",\n        ").concat(bb, ",").concat(ub + Bb - Lb * ab[3])), Gb += "Z"
        } else if (Ub > 0 && Ob === +Ob && Ob > 0) {
          var wb = Math.min(Ub, Ob);
          Gb = "M ".concat(bb, ",").concat(ub + Lb * wb, "\n            A ").concat(wb, ",").concat(wb, ",0,0,").concat(Sb, ",").concat(bb + Yb * wb, ",").concat(ub, "\n            L ").concat(bb + hb - Yb * wb, ",").concat(ub, "\n            A ").concat(wb, ",").concat(wb, ",0,0,").concat(Sb, ",").concat(bb + hb, ",").concat(ub + Lb * wb, "\n            L ").concat(bb + hb, ",").concat(ub + Bb - Lb * wb, "\n            A ").concat(wb, ",").concat(wb, ",0,0,").concat(Sb, ",").concat(bb + hb - Yb * wb, ",").concat(ub + Bb, "\n            L ").concat(bb + Yb * wb, ",").concat(ub + Bb, "\n            A ").concat(wb, ",").concat(wb, ",0,0,").concat(Sb, ",").concat(bb, ",").concat(ub + Bb - Lb * wb, " Z")
        } else Gb = "M ".concat(bb, ",").concat(ub, " h ").concat(hb, " v ").concat(Bb, " h ").concat(-hb, " Z");
        return Gb
      },
      pb = function(bb, ub) {
        if (!bb || !ub) return !1;
        var hb = bb.x,
          Bb = bb.y,
          Ob = ub.x,
          Gb = ub.y,
          Ub = ub.width,
          Lb = ub.height;
        if (Math.abs(Ub) > 0 && Math.abs(Lb) > 0) {
          var Yb = Math.min(Ob, Ob + Ub),
            Sb = Math.max(Ob, Ob + Ub),
            ab = Math.min(Gb, Gb + Lb),
            Hb = Math.max(Gb, Gb + Lb);
          return hb >= Yb && hb <= Sb && Bb >= ab && Bb <= Hb
        }
        return !1
      },
      ob = {
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
      Ab = function(bb) {
        var ub = wb(wb({}, ob), bb),
          hb = (0, Bb.useRef)(),
          Lb = Sb((0, Bb.useState)(-1), 2),
          ab = Lb[0],
          Hb = Lb[1];
        (0, Bb.useEffect)((function() {
          if (hb.current && hb.current.getTotalLength) try {
            var bb = hb.current.getTotalLength();
            bb && Hb(bb)
          } catch (ub) {}
        }), []);
        var Zb = ub.x,
          pb = ub.y,
          Ab = ub.width,
          lb = ub.height,
          Kb = ub.radius,
          Wb = ub.className,
          Cb = ub.animationEasing,
          db = ub.animationDuration,
          rb = ub.animationBegin,
          jb = ub.isAnimationActive,
          nb = ub.isUpdateAnimationActive;
        if (Zb !== +Zb || pb !== +pb || Ab !== +Ab || lb !== +lb || 0 === Ab || 0 === lb) return null;
        var Db = (0, Ob.e)("recharts-rectangle", Wb);
        return nb ? Bb.createElement(Gb.e, {
          canBegin: ab > 0,
          from: {
            width: Ab,
            height: lb,
            x: Zb,
            y: pb
          },
          to: {
            width: Ab,
            height: lb,
            x: Zb,
            y: pb
          },
          duration: db,
          animationEasing: Cb,
          isActive: nb
        }, (function(bb) {
          var Ob = bb.width,
            Lb = bb.height,
            Sb = bb.x,
            Hb = bb.y;
          return Bb.createElement(Gb.e, {
            canBegin: ab > 0,
            from: "0px ".concat(-1 === ab ? 1 : ab, "px"),
            to: "".concat(ab, "px 0px"),
            attributeName: "strokeDasharray",
            kw: rb,
            duration: db,
            isActive: jb,
            easing: Cb
          }, Bb.createElement("path", Yb({}, (0, Ub.b)(ub, !0), {
            className: Db,
            d: Xb(Sb, Hb, Ob, Lb, Kb),
            ref: hb
          })))
        })) : Bb.createElement("path", Yb({}, (0, Ub.b)(ub, !0), {
          className: Db,
          d: Xb(Zb, pb, Ab, lb, Kb)
        }))
      }
  },
  6048: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ob
    });
    var Bb = hb(49),
      Ob = hb(4831),
      Gb = hb(5181),
      Ub = hb(5963),
      Lb = hb(4918);

    function Yb(bb) {
      return Yb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Yb(bb)
    }

    function Sb() {
      return Sb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Sb.apply(this, arguments)
    }

    function ab(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Hb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? ab(Object(hb), !0).forEach((function(ub) {
          wb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : ab(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function wb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != Yb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != Yb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Yb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var Zb = function(bb) {
        var ub = bb.cx,
          hb = bb.cy,
          Bb = bb.radius,
          Ob = bb.angle,
          Gb = bb.sign,
          Lb = bb.isExternal,
          Yb = bb.cornerRadius,
          Sb = bb.cornerIsExternal,
          ab = Yb * (Lb ? 1 : -1) + Bb,
          Hb = Math.asin(Yb / ab) / Ub.d,
          wb = Sb ? Ob : Ob + Gb * Hb,
          Zb = Sb ? Ob - Gb * Hb : Ob;
        return {
          center: (0, Ub.k)(ub, hb, ab, wb),
          circleTangency: (0, Ub.k)(ub, hb, Bb, wb),
          lineTangency: (0, Ub.k)(ub, hb, ab * Math.cos(Hb * Ub.d), Zb),
          ta: Hb
        }
      },
      Xb = function(bb) {
        var ub = bb.cx,
          hb = bb.cy,
          Bb = bb.innerRadius,
          Ob = bb.outerRadius,
          Gb = bb.startAngle,
          Yb = function(bb, ub) {
            return (0, Lb.E)(ub - bb) * Math.min(Math.abs(ub - bb), 359.999)
          }(Gb, bb.endAngle),
          Sb = Gb + Yb,
          ab = (0, Ub.k)(ub, hb, Ob, Gb),
          Hb = (0, Ub.k)(ub, hb, Ob, Sb),
          wb = "M ".concat(ab.x, ",").concat(ab.y, "\n    A ").concat(Ob, ",").concat(Ob, ",0,\n    ").concat(+(Math.abs(Yb) > 180), ",").concat(+(Gb > Sb), ",\n    ").concat(Hb.x, ",").concat(Hb.y, "\n  ");
        if (Bb > 0) {
          var Zb = (0, Ub.k)(ub, hb, Bb, Gb),
            Xb = (0, Ub.k)(ub, hb, Bb, Sb);
          wb += "L ".concat(Xb.x, ",").concat(Xb.y, "\n            A ").concat(Bb, ",").concat(Bb, ",0,\n            ").concat(+(Math.abs(Yb) > 180), ",").concat(+(Gb <= Sb), ",\n            ").concat(Zb.x, ",").concat(Zb.y, " Z")
        } else wb += "L ".concat(ub, ",").concat(hb, " Z");
        return wb
      },
      pb = {
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
      ob = function(bb) {
        var ub = Hb(Hb({}, pb), bb),
          hb = ub.cx,
          Ub = ub.cy,
          Yb = ub.innerRadius,
          ab = ub.outerRadius,
          wb = ub.cornerRadius,
          ob = ub.forceCornerRadius,
          Ab = ub.cornerIsExternal,
          lb = ub.startAngle,
          Kb = ub.endAngle,
          Wb = ub.className;
        if (ab < Yb || lb === Kb) return null;
        var Cb, db = (0, Ob.e)("recharts-sector", Wb),
          rb = ab - Yb,
          jb = (0, Lb.m)(wb, rb, 0, !0);
        return Cb = jb > 0 && Math.abs(lb - Kb) < 360 ? function(bb) {
          var ub = bb.cx,
            hb = bb.cy,
            Bb = bb.innerRadius,
            Ob = bb.outerRadius,
            Gb = bb.cornerRadius,
            Ub = bb.forceCornerRadius,
            Yb = bb.cornerIsExternal,
            Sb = bb.startAngle,
            ab = bb.endAngle,
            Hb = (0, Lb.E)(ab - Sb),
            wb = Zb({
              cx: ub,
              cy: hb,
              radius: Ob,
              angle: Sb,
              sign: Hb,
              cornerRadius: Gb,
              cornerIsExternal: Yb
            }),
            pb = wb.circleTangency,
            ob = wb.lineTangency,
            Ab = wb.ta,
            lb = Zb({
              cx: ub,
              cy: hb,
              radius: Ob,
              angle: ab,
              sign: -Hb,
              cornerRadius: Gb,
              cornerIsExternal: Yb
            }),
            Kb = lb.circleTangency,
            Wb = lb.lineTangency,
            Cb = lb.ta,
            db = Yb ? Math.abs(Sb - ab) : Math.abs(Sb - ab) - Ab - Cb;
          if (db < 0) return Ub ? "M ".concat(ob.x, ",").concat(ob.y, "\n        a").concat(Gb, ",").concat(Gb, ",0,0,1,").concat(2 * Gb, ",0\n        a").concat(Gb, ",").concat(Gb, ",0,0,1,").concat(2 * -Gb, ",0\n      ") : Xb({
            cx: ub,
            cy: hb,
            innerRadius: Bb,
            outerRadius: Ob,
            startAngle: Sb,
            endAngle: ab
          });
          var rb = "M ".concat(ob.x, ",").concat(ob.y, "\n    A").concat(Gb, ",").concat(Gb, ",0,0,").concat(+(Hb < 0), ",").concat(pb.x, ",").concat(pb.y, "\n    A").concat(Ob, ",").concat(Ob, ",0,").concat(+(db > 180), ",").concat(+(Hb < 0), ",").concat(Kb.x, ",").concat(Kb.y, "\n    A").concat(Gb, ",").concat(Gb, ",0,0,").concat(+(Hb < 0), ",").concat(Wb.x, ",").concat(Wb.y, "\n  ");
          if (Bb > 0) {
            var jb = Zb({
                cx: ub,
                cy: hb,
                radius: Bb,
                angle: Sb,
                sign: Hb,
                isExternal: !0,
                cornerRadius: Gb,
                cornerIsExternal: Yb
              }),
              nb = jb.circleTangency,
              Db = jb.lineTangency,
              xb = jb.ta,
              zb = Zb({
                cx: ub,
                cy: hb,
                radius: Bb,
                angle: ab,
                sign: -Hb,
                isExternal: !0,
                cornerRadius: Gb,
                cornerIsExternal: Yb
              }),
              gb = zb.circleTangency,
              ib = zb.lineTangency,
              vb = zb.ta,
              tb = Yb ? Math.abs(Sb - ab) : Math.abs(Sb - ab) - xb - vb;
            if (tb < 0 && 0 === Gb) return "".concat(rb, "L").concat(ub, ",").concat(hb, "Z");
            rb += "L".concat(ib.x, ",").concat(ib.y, "\n      A").concat(Gb, ",").concat(Gb, ",0,0,").concat(+(Hb < 0), ",").concat(gb.x, ",").concat(gb.y, "\n      A").concat(Bb, ",").concat(Bb, ",0,").concat(+(tb > 180), ",").concat(+(Hb > 0), ",").concat(nb.x, ",").concat(nb.y, "\n      A").concat(Gb, ",").concat(Gb, ",0,0,").concat(+(Hb < 0), ",").concat(Db.x, ",").concat(Db.y, "Z")
          } else rb += "L".concat(ub, ",").concat(hb, "Z");
          return rb
        }({
          cx: hb,
          cy: Ub,
          innerRadius: Yb,
          outerRadius: ab,
          cornerRadius: Math.min(jb, rb / 2),
          forceCornerRadius: ob,
          cornerIsExternal: Ab,
          startAngle: lb,
          endAngle: Kb
        }) : Xb({
          cx: hb,
          cy: Ub,
          innerRadius: Yb,
          outerRadius: ab,
          startAngle: lb,
          endAngle: Kb
        }), Bb.createElement("path", Sb({}, (0, Gb.b)(ub, !0), {
          className: db,
          d: Cb,
          role: "img"
        }))
      }
  },
  5787: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => qb
    });
    var Bb = hb(49),
      Ob = hb(5791),
      Gb = hb.n(Ob);
    Math.abs, Math.atan2;
    const Ub = Math.cos,
      Lb = (Math.max, Math.min, Math.sin),
      Yb = Math.sqrt,
      Sb = Math.PI,
      ab = 2 * Sb;
    const Hb = {
        draw(bb, ub) {
          const hb = Yb(ub / Sb);
          bb.moveTo(hb, 0), bb.arc(0, 0, hb, 0, ab)
        }
      },
      wb = {
        draw(bb, ub) {
          const hb = Yb(ub / 5) / 2;
          bb.moveTo(-3 * hb, -hb), bb.lineTo(-hb, -hb), bb.lineTo(-hb, -3 * hb), bb.lineTo(hb, -3 * hb), bb.lineTo(hb, -hb), bb.lineTo(3 * hb, -hb), bb.lineTo(3 * hb, hb), bb.lineTo(hb, hb), bb.lineTo(hb, 3 * hb), bb.lineTo(-hb, 3 * hb), bb.lineTo(-hb, hb), bb.lineTo(-3 * hb, hb), bb.closePath()
        }
      },
      Zb = Yb(1 / 3),
      Xb = 2 * Zb,
      pb = {
        draw(bb, ub) {
          const hb = Yb(ub / Xb),
            Bb = hb * Zb;
          bb.moveTo(0, -hb), bb.lineTo(Bb, 0), bb.lineTo(0, hb), bb.lineTo(-Bb, 0), bb.closePath()
        }
      },
      ob = {
        draw(bb, ub) {
          const hb = Yb(ub),
            Bb = -hb / 2;
          bb.rect(Bb, Bb, hb, hb)
        }
      },
      Ab = Lb(Sb / 10) / Lb(7 * Sb / 10),
      lb = Lb(ab / 10) * Ab,
      Kb = -Ub(ab / 10) * Ab,
      Wb = {
        draw(bb, ub) {
          const hb = Yb(.8908130915292852 * ub),
            Bb = lb * hb,
            Ob = Kb * hb;
          bb.moveTo(0, -hb), bb.lineTo(Bb, Ob);
          for (let Gb = 1; Gb < 5; ++Gb) {
            const ub = ab * Gb / 5,
              Yb = Ub(ub),
              Sb = Lb(ub);
            bb.lineTo(Sb * hb, -Yb * hb), bb.lineTo(Yb * Bb - Sb * Ob, Sb * Bb + Yb * Ob)
          }
          bb.closePath()
        }
      },
      Cb = Yb(3),
      db = {
        draw(bb, ub) {
          const hb = -Yb(ub / (3 * Cb));
          bb.moveTo(0, 2 * hb), bb.lineTo(-Cb * hb, -hb), bb.lineTo(Cb * hb, -hb), bb.closePath()
        }
      },
      rb = -.5,
      jb = Yb(3) / 2,
      nb = 1 / Yb(12),
      Db = 3 * (nb / 2 + 1),
      xb = {
        draw(bb, ub) {
          const hb = Yb(ub / Db),
            Bb = hb / 2,
            Ob = hb * nb,
            Gb = Bb,
            Ub = hb * nb + hb,
            Lb = -Gb,
            Sb = Ub;
          bb.moveTo(Bb, Ob), bb.lineTo(Gb, Ub), bb.lineTo(Lb, Sb), bb.lineTo(rb * Bb - jb * Ob, jb * Bb + rb * Ob), bb.lineTo(rb * Gb - jb * Ub, jb * Gb + rb * Ub), bb.lineTo(rb * Lb - jb * Sb, jb * Lb + rb * Sb), bb.lineTo(rb * Bb + jb * Ob, rb * Ob - jb * Bb), bb.lineTo(rb * Gb + jb * Ub, rb * Ub - jb * Gb), bb.lineTo(rb * Lb + jb * Sb, rb * Sb - jb * Lb), bb.closePath()
        }
      };
    var zb = hb(5834),
      gb = hb(5843);
    Yb(3), Yb(3);
    var ib = hb(4831),
      vb = hb(5181);

    function tb(bb) {
      return tb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, tb(bb)
    }
    var Jb = ["type", "size", "sizeType"];

    function eb() {
      return eb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, eb.apply(this, arguments)
    }

    function Nb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function sb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Nb(Object(hb), !0).forEach((function(ub) {
          Mb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Nb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Mb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != tb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != tb(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == tb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function mb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }
    var Ib = {
        symbolCircle: Hb,
        symbolCross: wb,
        symbolDiamond: pb,
        symbolSquare: ob,
        symbolStar: Wb,
        symbolTriangle: db,
        symbolWye: xb
      },
      Pb = Math.PI / 180,
      qb = function(bb) {
        var ub = bb.type,
          hb = void 0 === ub ? "circle" : ub,
          Ob = bb.size,
          Ub = void 0 === Ob ? 64 : Ob,
          Lb = bb.sizeType,
          Yb = void 0 === Lb ? "area" : Lb,
          Sb = sb(sb({}, mb(bb, Jb)), {}, {
            type: hb,
            size: Ub,
            sizeType: Yb
          }),
          ab = Sb.className,
          wb = Sb.cx,
          Zb = Sb.cy,
          Xb = (0, vb.b)(Sb, !0);
        return wb === +wb && Zb === +Zb && Ub === +Ub ? Bb.createElement("path", eb({}, Xb, {
          className: (0, ib.e)("recharts-symbols", ab),
          transform: "translate(".concat(wb, ", ").concat(Zb, ")"),
          d: function() {
            var bb = function(bb) {
                var ub = "symbol".concat(Gb()(bb));
                return Ib[ub] || Hb
              }(hb),
              ub = function(bb, ub) {
                let hb = null,
                  Bb = (0, gb.d)(Ob);

                function Ob() {
                  let Ob;
                  if (hb || (hb = Ob = Bb()), bb.apply(this, arguments).draw(hb, +ub.apply(this, arguments)), Ob) return hb = null, Ob + "" || null
                }
                return bb = "function" === typeof bb ? bb : (0, zb.d)(bb || Hb), ub = "function" === typeof ub ? ub : (0, zb.d)(void 0 === ub ? 64 : +ub), Ob.type = function(ub) {
                  return arguments.length ? (bb = "function" === typeof ub ? ub : (0, zb.d)(ub), Ob) : bb
                }, Ob.size = function(bb) {
                  return arguments.length ? (ub = "function" === typeof bb ? bb : (0, zb.d)(+bb), Ob) : ub
                }, Ob.context = function(bb) {
                  return arguments.length ? (hb = null == bb ? null : bb, Ob) : hb
                }, Ob
              }().type(bb).size(function(bb, ub, hb) {
                if ("area" === ub) return bb;
                switch (hb) {
                  case "cross":
                    return 5 * bb * bb / 9;
                  case "diamond":
                    return .5 * bb * bb / Math.sqrt(3);
                  case "square":
                    return bb * bb;
                  case "star":
                    var Bb = 18 * Pb;
                    return 1.25 * bb * bb * (Math.tan(Bb) - Math.tan(2 * Bb) * Math.pow(Math.tan(Bb), 2));
                  case "triangle":
                    return Math.sqrt(3) * bb * bb / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * bb * bb / 8;
                  default:
                    return Math.PI * bb * bb / 4
                }
              }(Ub, Yb, hb));
            return ub()
          }()
        })) : null
      };
    qb.registerSymbol = function(bb, ub) {
      Ib["symbol".concat(Gb()(bb))] = ub
    }
  },
  6021: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Mb,
      e: () => Vb,
      i: () => mb,
      m: () => Ib,
      p: () => Pb
    });
    var Bb = hb(49),
      Ob = hb(5019),
      Gb = hb.n(Ob),
      Ub = hb(6029),
      Lb = hb.n(Ub),
      Yb = hb(6039),
      Sb = hb.n(Yb),
      ab = hb(5923),
      Hb = hb.n(ab),
      wb = hb(5853),
      Zb = hb(4831),
      Xb = hb(5855),
      pb = hb(5181);

    function ob(bb) {
      return ob = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, ob(bb)
    }

    function Ab() {
      return Ab = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb) Object.prototype.hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Ab.apply(this, arguments)
    }

    function lb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return Kb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return Kb(bb, ub)
      }(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Kb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Wb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Cb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Wb(Object(hb), !0).forEach((function(ub) {
          db(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Wb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function db(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != ob(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != ob(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == ob(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var rb = function(bb, ub, hb, Bb, Ob) {
        var Gb, Ub = hb - Bb;
        return Gb = "M ".concat(bb, ",").concat(ub), Gb += "L ".concat(bb + hb, ",").concat(ub), Gb += "L ".concat(bb + hb - Ub / 2, ",").concat(ub + Ob), Gb += "L ".concat(bb + hb - Ub / 2 - Bb, ",").concat(ub + Ob), Gb += "L ".concat(bb, ",").concat(ub, " Z")
      },
      jb = {
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
      nb = function(bb) {
        var ub = Cb(Cb({}, jb), bb),
          hb = (0, Bb.useRef)(),
          Ob = lb((0, Bb.useState)(-1), 2),
          Gb = Ob[0],
          Ub = Ob[1];
        (0, Bb.useEffect)((function() {
          if (hb.current && hb.current.getTotalLength) try {
            var bb = hb.current.getTotalLength();
            bb && Ub(bb)
          } catch (ub) {}
        }), []);
        var Lb = ub.x,
          Yb = ub.y,
          Sb = ub.upperWidth,
          ab = ub.lowerWidth,
          Hb = ub.height,
          wb = ub.className,
          ob = ub.animationEasing,
          Kb = ub.animationDuration,
          Wb = ub.animationBegin,
          db = ub.isUpdateAnimationActive;
        if (Lb !== +Lb || Yb !== +Yb || Sb !== +Sb || ab !== +ab || Hb !== +Hb || 0 === Sb && 0 === ab || 0 === Hb) return null;
        var nb = (0, Zb.e)("recharts-trapezoid", wb);
        return db ? Bb.createElement(Xb.e, {
          canBegin: Gb > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: Hb,
            x: Lb,
            y: Yb
          },
          to: {
            upperWidth: Sb,
            lowerWidth: ab,
            height: Hb,
            x: Lb,
            y: Yb
          },
          duration: Kb,
          animationEasing: ob,
          isActive: db
        }, (function(bb) {
          var Ob = bb.upperWidth,
            Ub = bb.lowerWidth,
            Lb = bb.height,
            Yb = bb.x,
            Sb = bb.y;
          return Bb.createElement(Xb.e, {
            canBegin: Gb > 0,
            from: "0px ".concat(-1 === Gb ? 1 : Gb, "px"),
            to: "".concat(Gb, "px 0px"),
            attributeName: "strokeDasharray",
            kw: Wb,
            duration: Kb,
            easing: ob
          }, Bb.createElement("path", Ab({}, (0, pb.b)(ub, !0), {
            className: nb,
            d: rb(Yb, Sb, Ob, Ub, Lb),
            ref: hb
          })))
        })) : Bb.createElement("g", null, Bb.createElement("path", Ab({}, (0, pb.b)(ub, !0), {
          className: nb,
          d: rb(Lb, Yb, Sb, ab, Hb)
        })))
      },
      Db = hb(6048),
      xb = hb(5710),
      zb = hb(5787),
      gb = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function ib(bb) {
      return ib = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, ib(bb)
    }

    function vb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function tb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Jb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? tb(Object(hb), !0).forEach((function(ub) {
          eb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : tb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function eb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != ib(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != ib(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == ib(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Nb(bb, ub) {
      return Jb(Jb({}, ub), bb)
    }

    function sb(bb) {
      var ub = bb.shapeType,
        hb = bb.elementProps;
      switch (ub) {
        case "rectangle":
          return Bb.createElement(wb.b, hb);
        case "trapezoid":
          return Bb.createElement(nb, hb);
        case "sector":
          return Bb.createElement(Db.e, hb);
        case "symbols":
          if (function(bb) {
              return "symbols" === bb
            }(ub)) return Bb.createElement(zb.c, hb);
          break;
        default:
          return null
      }
    }

    function Mb(bb) {
      var ub, hb = bb.option,
        Ob = bb.shapeType,
        Ub = bb.propTransformer,
        Yb = void 0 === Ub ? Nb : Ub,
        ab = bb.activeClassName,
        Hb = void 0 === ab ? "recharts-active-shape" : ab,
        wb = bb.isActive,
        Zb = vb(bb, gb);
      if ((0, Bb.isValidElement)(hb)) ub = (0, Bb.cloneElement)(hb, Jb(Jb({}, Zb), function(bb) {
        return (0, Bb.isValidElement)(bb) ? bb.props : bb
      }(hb)));
      else if (Gb()(hb)) ub = hb(Zb);
      else if (Lb()(hb) && !Sb()(hb)) {
        var Xb = Yb(hb, Zb);
        ub = Bb.createElement(sb, {
          shapeType: Ob,
          elementProps: Xb
        })
      } else {
        var pb = Zb;
        ub = Bb.createElement(sb, {
          shapeType: Ob,
          elementProps: pb
        })
      }
      return wb ? Bb.createElement(xb.c, {
        className: Hb
      }, ub) : ub
    }

    function mb(bb, ub) {
      return null != ub && "trapezoids" in bb.props
    }

    function Ib(bb, ub) {
      return null != ub && "sectors" in bb.props
    }

    function Pb(bb, ub) {
      return null != ub && "points" in bb.props
    }

    function qb(bb, ub) {
      var hb, Bb, Ob = bb.x === (null === ub || void 0 === ub || null === (hb = ub.labelViewBox) || void 0 === hb ? void 0 : hb.x) || bb.x === ub.x,
        Gb = bb.y === (null === ub || void 0 === ub || null === (Bb = ub.labelViewBox) || void 0 === Bb ? void 0 : Bb.y) || bb.y === ub.y;
      return Ob && Gb
    }

    function Eb(bb, ub) {
      var hb = bb.endAngle === ub.endAngle,
        Bb = bb.startAngle === ub.startAngle;
      return hb && Bb
    }

    function yb(bb, ub) {
      var hb = bb.x === ub.x,
        Bb = bb.y === ub.y,
        Ob = bb.z === ub.z;
      return hb && Bb && Ob
    }

    function Vb(bb) {
      var ub = bb.activeTooltipItem,
        hb = bb.graphicalItem,
        Bb = bb.itemData,
        Ob = function(bb, ub) {
          var hb;
          return mb(bb, ub) ? hb = "trapezoids" : Ib(bb, ub) ? hb = "sectors" : Pb(bb, ub) && (hb = "points"), hb
        }(hb, ub),
        Gb = function(bb, ub) {
          var hb, Bb;
          return mb(bb, ub) ? null === (hb = ub.tooltipPayload) || void 0 === hb || null === (hb = hb[0]) || void 0 === hb || null === (hb = hb.payload) || void 0 === hb ? void 0 : hb.payload : Ib(bb, ub) ? null === (Bb = ub.tooltipPayload) || void 0 === Bb || null === (Bb = Bb[0]) || void 0 === Bb || null === (Bb = Bb.payload) || void 0 === Bb ? void 0 : Bb.payload : Pb(bb, ub) ? ub.payload : {}
        }(hb, ub),
        Ub = Bb.filter((function(bb, Bb) {
          var Ub = Hb()(Gb, bb),
            Lb = hb.props[Ob].filter((function(bb) {
              var Bb = function(bb, ub) {
                var hb;
                return mb(bb, ub) ? hb = qb : Ib(bb, ub) ? hb = Eb : Pb(bb, ub) && (hb = yb), hb
              }(hb, ub);
              return Bb(bb, ub)
            })),
            Yb = hb.props[Ob].indexOf(Lb[Lb.length - 1]);
          return Ub && Bb === Yb
        }));
      return Bb.indexOf(Ub[Ub.length - 1])
    }
  },
  5973: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Cb,
      c: () => Ab,
      f: () => db,
      j: () => Kb,
      k: () => lb
    });
    var Bb = hb(5981),
      Ob = hb.n(Bb),
      Gb = hb(5988),
      Ub = hb.n(Gb),
      Lb = hb(5871),
      Yb = hb(5181),
      Sb = hb(4918),
      ab = hb(6001);

    function Hb(bb) {
      return Hb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Hb(bb)
    }

    function wb(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, ob(Bb.key), Bb)
      }
    }

    function Zb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Xb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Zb(Object(hb), !0).forEach((function(ub) {
          pb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Zb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function pb(bb, ub, hb) {
      return (ub = ob(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function ob(bb) {
      var ub = function(bb, ub) {
        if ("object" != Hb(bb) || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != Hb(Bb)) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Hb(ub) ? ub : ub + ""
    }
    var Ab = function(bb, ub, hb, Bb, Ob) {
        var Gb = bb.width,
          Ub = bb.height,
          Hb = bb.layout,
          wb = bb.children,
          Zb = Object.keys(ub),
          ob = {
            left: hb.left,
            leftMirror: hb.left,
            right: Gb - hb.right,
            rightMirror: Gb - hb.right,
            top: hb.top,
            topMirror: hb.top,
            bottom: Ub - hb.bottom,
            bottomMirror: Ub - hb.bottom
          },
          Ab = !!(0, Yb.d)(wb, ab.b);
        return Zb.reduce((function(Gb, Ub) {
          var Yb, ab, wb, Zb, lb, Kb = ub[Ub],
            Wb = Kb.orientation,
            Cb = Kb.domain,
            db = Kb.padding,
            rb = void 0 === db ? {} : db,
            jb = Kb.mirror,
            nb = Kb.reversed,
            Db = "".concat(Wb).concat(jb ? "Mirror" : "");
          if ("number" === Kb.type && ("gap" === Kb.padding || "no-gap" === Kb.padding)) {
            var xb = Cb[1] - Cb[0],
              zb = 1 / 0,
              gb = Kb.categoricalDomain.sort(Sb.e);
            if (gb.forEach((function(bb, ub) {
                ub > 0 && (zb = Math.min((bb || 0) - (gb[ub - 1] || 0), zb))
              })), Number.isFinite(zb)) {
              var ib = zb / xb,
                vb = "vertical" === Kb.layout ? hb.height : hb.width;
              if ("gap" === Kb.padding && (Yb = ib * vb / 2), "no-gap" === Kb.padding) {
                var tb = (0, Sb.m)(bb.barCategoryGap, ib * vb),
                  Jb = ib * vb / 2;
                Yb = Jb - tb - (Jb - tb) / vb * tb
              }
            }
          }
          ab = "xAxis" === Bb ? [hb.left + (rb.left || 0) + (Yb || 0), hb.left + hb.width - (rb.right || 0) - (Yb || 0)] : "yAxis" === Bb ? "horizontal" === Hb ? [hb.top + hb.height - (rb.bottom || 0), hb.top + (rb.top || 0)] : [hb.top + (rb.top || 0) + (Yb || 0), hb.top + hb.height - (rb.bottom || 0) - (Yb || 0)] : Kb.range, nb && (ab = [ab[1], ab[0]]);
          var eb = (0, Lb.bb)(Kb, Ob, Ab),
            Nb = eb.scale,
            sb = eb.realScaleType;
          Nb.domain(Cb).range(ab), (0, Lb.h)(Nb);
          var Mb = (0, Lb.T)(Nb, Xb(Xb({}, Kb), {}, {
            realScaleType: sb
          }));
          "xAxis" === Bb ? (lb = "top" === Wb && !jb || "bottom" === Wb && jb, wb = hb.left, Zb = ob[Db] - lb * Kb.height) : "yAxis" === Bb && (lb = "left" === Wb && !jb || "right" === Wb && jb, wb = ob[Db] - lb * Kb.width, Zb = hb.top);
          var mb = Xb(Xb(Xb({}, Kb), Mb), {}, {
            realScaleType: sb,
            x: wb,
            y: Zb,
            scale: Nb,
            width: "xAxis" === Bb ? hb.width : Kb.width,
            height: "yAxis" === Bb ? hb.height : Kb.height
          });
          return mb.bandSize = (0, Lb.m)(mb, Mb), Kb.hide || "xAxis" !== Bb ? Kb.hide || (ob[Db] += (lb ? -1 : 1) * mb.width) : ob[Db] += (lb ? -1 : 1) * mb.height, Xb(Xb({}, Gb), {}, pb({}, Ub, mb))
        }), {})
      },
      lb = function(bb, ub) {
        var hb = bb.x,
          Bb = bb.y,
          Ob = ub.x,
          Gb = ub.y;
        return {
          x: Math.min(hb, Ob),
          y: Math.min(Bb, Gb),
          width: Math.abs(Ob - hb),
          height: Math.abs(Gb - Bb)
        }
      },
      Kb = function(bb) {
        var ub = bb.x1,
          hb = bb.y1,
          Bb = bb.x2,
          Ob = bb.y2;
        return lb({
          x: ub,
          y: hb
        }, {
          x: Bb,
          y: Ob
        })
      },
      Wb = function() {
        function bb(ub) {
          ! function(bb, ub) {
            if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
          }(this, bb), this.scale = ub
        }
        return ub = bb, hb = [{
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
          value: function(bb) {
            var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              hb = ub.bandAware,
              Bb = ub.position;
            if (void 0 !== bb) {
              if (Bb) switch (Bb) {
                case "start":
                default:
                  return this.scale(bb);
                case "middle":
                  var Ob = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(bb) + Ob;
                case "end":
                  var Gb = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(bb) + Gb
              }
              if (hb) {
                var Ub = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(bb) + Ub
              }
              return this.scale(bb)
            }
          }
        }, {
          key: "isInRange",
          value: function(bb) {
            var ub = this.range(),
              hb = ub[0],
              Bb = ub[ub.length - 1];
            return hb <= Bb ? bb >= hb && bb <= Bb : bb >= Bb && bb <= hb
          }
        }], Bb = [{
          key: "create",
          value: function(ub) {
            return new bb(ub)
          }
        }], hb && wb(ub.prototype, hb), Bb && wb(ub, Bb), Object.defineProperty(ub, "prototype", {
          writable: !1
        }), ub;
        var ub, hb, Bb
      }();
    pb(Wb, "EPS", 1e-4);
    var Cb = function(bb) {
      var ub = Object.keys(bb).reduce((function(ub, hb) {
        return Xb(Xb({}, ub), {}, pb({}, hb, Wb.create(bb[hb])))
      }), {});
      return Xb(Xb({}, ub), {}, {
        apply: function(bb) {
          var hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Bb = hb.bandAware,
            Gb = hb.position;
          return Ob()(bb, (function(bb, hb) {
            return ub[hb].apply(bb, {
              bandAware: Bb,
              position: Gb
            })
          }))
        },
        isInRange: function(bb) {
          return Ub()(bb, (function(bb, hb) {
            return ub[hb].isInRange(bb)
          }))
        }
      })
    };
    var db = function(bb) {
      var ub = bb.width,
        hb = bb.height,
        Bb = function(bb) {
          return (bb % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        Ob = Bb * Math.PI / 180,
        Gb = Math.atan(hb / ub),
        Ub = Ob > Gb && Ob < Math.PI - Gb ? hb / Math.sin(Ob) : ub / Math.cos(Ob);
      return Math.abs(Ub)
    }
  },
  5871: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => vU,
      g: () => xU,
      h: () => EU,
      i: () => IU,
      k: () => yU,
      m: () => GL,
      o: () => iU,
      p: () => gU,
      s: () => RU,
      w: () => QU,
      y: () => cU,
      A: () => sU,
      C: () => DU,
      E: () => eU,
      G: () => uL,
      I: () => zU,
      M: () => kU,
      O: () => bL,
      P: () => MU,
      T: () => TU,
      U: () => LL,
      W: () => nU,
      X: () => NU,
      $: () => UL,
      ab: () => JU,
      bb: () => PU,
      cb: () => OL,
      fb: () => VU
    });
    var Bb = {};
    hb.r(Bb), hb.d(Bb, {
      scaleBand: () => Ob.c,
      scaleDiverging: () => YG,
      scaleDivergingLog: () => SG,
      scaleDivergingPow: () => HG,
      scaleDivergingSqrt: () => wG,
      scaleDivergingSymlog: () => aG,
      scaleIdentity: () => ku,
      scaleImplicit: () => Sh.c,
      scaleLinear: () => fu,
      scaleLog: () => Oh,
      scaleOrdinal: () => Sh.b,
      scalePoint: () => Ob.g,
      scalePow: () => Xh,
      scaleQuantile: () => Dh,
      scaleQuantize: () => xh,
      scaleRadial: () => Ah,
      scaleSequential: () => uG,
      scaleSequentialLog: () => hG,
      scaleSequentialPow: () => OG,
      scaleSequentialQuantile: () => UG,
      scaleSequentialSqrt: () => GG,
      scaleSequentialSymlog: () => BG,
      scaleSqrt: () => ph,
      scaleSymlog: () => Yh,
      scaleThreshold: () => zh,
      scaleTime: () => cO,
      scaleUtc: () => QO,
      tickFormat: () => Vu
    });
    var Ob = hb(5880);
    const Gb = Math.sqrt(50),
      Ub = Math.sqrt(10),
      Lb = Math.sqrt(2);

    function Yb(bb, ub, hb) {
      const Bb = (ub - bb) / Math.max(0, hb),
        Ob = Math.floor(Math.log10(Bb)),
        Sb = Bb / Math.pow(10, Ob),
        ab = Sb >= Gb ? 10 : Sb >= Ub ? 5 : Sb >= Lb ? 2 : 1;
      let Hb, wb, Zb;
      return Ob < 0 ? (Zb = Math.pow(10, -Ob) / ab, Hb = Math.round(bb * Zb), wb = Math.round(ub * Zb), Hb / Zb < bb && ++Hb, wb / Zb > ub && --wb, Zb = -Zb) : (Zb = Math.pow(10, Ob) * ab, Hb = Math.round(bb / Zb), wb = Math.round(ub / Zb), Hb * Zb < bb && ++Hb, wb * Zb > ub && --wb), wb < Hb && .5 <= hb && hb < 2 ? Yb(bb, ub, 2 * hb) : [Hb, wb, Zb]
    }

    function Sb(bb, ub, hb) {
      if (!((hb = +hb) > 0)) return [];
      if ((bb = +bb) === (ub = +ub)) return [bb];
      const Bb = ub < bb,
        [Ob, Gb, Ub] = Bb ? Yb(ub, bb, hb) : Yb(bb, ub, hb);
      if (!(Gb >= Ob)) return [];
      const Lb = Gb - Ob + 1,
        Sb = new Array(Lb);
      if (Bb)
        if (Ub < 0)
          for (let Yb = 0; Yb < Lb; ++Yb) Sb[Yb] = (Gb - Yb) / -Ub;
        else
          for (let Yb = 0; Yb < Lb; ++Yb) Sb[Yb] = (Gb - Yb) * Ub;
      else if (Ub < 0)
        for (let Yb = 0; Yb < Lb; ++Yb) Sb[Yb] = (Ob + Yb) / -Ub;
      else
        for (let Yb = 0; Yb < Lb; ++Yb) Sb[Yb] = (Ob + Yb) * Ub;
      return Sb
    }

    function ab(bb, ub, hb) {
      return Yb(bb = +bb, ub = +ub, hb = +hb)[2]
    }

    function Hb(bb, ub, hb) {
      hb = +hb;
      const Bb = (ub = +ub) < (bb = +bb),
        Ob = Bb ? ab(ub, bb, hb) : ab(bb, ub, hb);
      return (Bb ? -1 : 1) * (Ob < 0 ? 1 / -Ob : Ob)
    }

    function wb(bb, ub) {
      return null == bb || null == ub ? NaN : bb < ub ? -1 : bb > ub ? 1 : bb >= ub ? 0 : NaN
    }

    function Zb(bb, ub) {
      return null == bb || null == ub ? NaN : ub < bb ? -1 : ub > bb ? 1 : ub >= bb ? 0 : NaN
    }

    function Xb(bb) {
      let ub, hb, Bb;

      function Ob(bb, Bb) {
        let Ob = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
        if (Ob < Gb) {
          if (0 !== ub(Bb, Bb)) return Gb;
          do {
            const ub = Ob + Gb >>> 1;
            hb(bb[ub], Bb) < 0 ? Ob = ub + 1 : Gb = ub
          } while (Ob < Gb)
        }
        return Ob
      }
      return 2 !== bb.length ? (ub = wb, hb = (ub, hb) => wb(bb(ub), hb), Bb = (ub, hb) => bb(ub) - hb) : (ub = bb === wb || bb === Zb ? bb : pb, hb = bb, Bb = bb), {
        left: Ob,
        center: function(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const Gb = Ob(bb, ub, hb, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length) - 1);
          return Gb > hb && Bb(bb[Gb - 1], ub) > -Bb(bb[Gb], ub) ? Gb - 1 : Gb
        },
        right: function(bb, Bb) {
          let Ob = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          if (Ob < Gb) {
            if (0 !== ub(Bb, Bb)) return Gb;
            do {
              const ub = Ob + Gb >>> 1;
              hb(bb[ub], Bb) <= 0 ? Ob = ub + 1 : Gb = ub
            } while (Ob < Gb)
          }
          return Ob
        }
      }
    }

    function pb() {
      return 0
    }

    function ob(bb) {
      return null === bb ? NaN : +bb
    }
    const Ab = Xb(wb),
      lb = Ab.right,
      Kb = (Ab.left, Xb(ob).center, lb);

    function Wb(bb, ub, hb) {
      bb.prototype = ub.prototype = hb, hb.constructor = bb
    }

    function Cb(bb, ub) {
      var hb = Object.create(bb.prototype);
      for (var Bb in ub) hb[Bb] = ub[Bb];
      return hb
    }

    function db() {}
    var rb = .7,
      jb = 1 / rb,
      nb = "\\s*([+-]?\\d+)\\s*",
      Db = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      xb = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      zb = /^#([0-9a-f]{3,8})$/,
      gb = new RegExp(`^rgb\\(${nb},${nb},${nb}\\)$`),
      ib = new RegExp(`^rgb\\(${xb},${xb},${xb}\\)$`),
      vb = new RegExp(`^rgba\\(${nb},${nb},${nb},${Db}\\)$`),
      tb = new RegExp(`^rgba\\(${xb},${xb},${xb},${Db}\\)$`),
      Jb = new RegExp(`^hsl\\(${Db},${xb},${xb}\\)$`),
      eb = new RegExp(`^hsla\\(${Db},${xb},${xb},${Db}\\)$`),
      Nb = {
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

    function sb() {
      return this.rgb().formatHex()
    }

    function Mb() {
      return this.rgb().formatRgb()
    }

    function mb(bb) {
      var ub, hb;
      return bb = (bb + "").trim().toLowerCase(), (ub = zb.exec(bb)) ? (hb = ub[1].length, ub = parseInt(ub[1], 16), 6 === hb ? Ib(ub) : 3 === hb ? new Eb(ub >> 8 & 15 | ub >> 4 & 240, ub >> 4 & 15 | 240 & ub, (15 & ub) << 4 | 15 & ub, 1) : 8 === hb ? Pb(ub >> 24 & 255, ub >> 16 & 255, ub >> 8 & 255, (255 & ub) / 255) : 4 === hb ? Pb(ub >> 12 & 15 | ub >> 8 & 240, ub >> 8 & 15 | ub >> 4 & 240, ub >> 4 & 15 | 240 & ub, ((15 & ub) << 4 | 15 & ub) / 255) : null) : (ub = gb.exec(bb)) ? new Eb(ub[1], ub[2], ub[3], 1) : (ub = ib.exec(bb)) ? new Eb(255 * ub[1] / 100, 255 * ub[2] / 100, 255 * ub[3] / 100, 1) : (ub = vb.exec(bb)) ? Pb(ub[1], ub[2], ub[3], ub[4]) : (ub = tb.exec(bb)) ? Pb(255 * ub[1] / 100, 255 * ub[2] / 100, 255 * ub[3] / 100, ub[4]) : (ub = Jb.exec(bb)) ? Tb(ub[1], ub[2] / 100, ub[3] / 100, 1) : (ub = eb.exec(bb)) ? Tb(ub[1], ub[2] / 100, ub[3] / 100, ub[4]) : Nb.hasOwnProperty(bb) ? Ib(Nb[bb]) : "transparent" === bb ? new Eb(NaN, NaN, NaN, 0) : null
    }

    function Ib(bb) {
      return new Eb(bb >> 16 & 255, bb >> 8 & 255, 255 & bb, 1)
    }

    function Pb(bb, ub, hb, Bb) {
      return Bb <= 0 && (bb = ub = hb = NaN), new Eb(bb, ub, hb, Bb)
    }

    function qb(bb, ub, hb, Bb) {
      return 1 === arguments.length ? ((Ob = bb) instanceof db || (Ob = mb(Ob)), Ob ? new Eb((Ob = Ob.rgb()).r, Ob.g, Ob.b, Ob.opacity) : new Eb) : new Eb(bb, ub, hb, null == Bb ? 1 : Bb);
      var Ob
    }

    function Eb(bb, ub, hb, Bb) {
      this.r = +bb, this.g = +ub, this.b = +hb, this.opacity = +Bb
    }

    function yb() {
      return `#${kb(this.r)}${kb(this.g)}${kb(this.b)}`
    }

    function Vb() {
      const bb = Fb(this.opacity);
      return `${1===bb?"rgb(":"rgba("}${fb(this.r)}, ${fb(this.g)}, ${fb(this.b)}${1===bb?")":`, ${bb})`}`
    }

    function Fb(bb) {
      return isNaN(bb) ? 1 : Math.max(0, Math.min(1, bb))
    }

    function fb(bb) {
      return Math.max(0, Math.min(255, Math.round(bb) || 0))
    }

    function kb(bb) {
      return ((bb = fb(bb)) < 16 ? "0" : "") + bb.toString(16)
    }

    function Tb(bb, ub, hb, Bb) {
      return Bb <= 0 ? bb = ub = hb = NaN : hb <= 0 || hb >= 1 ? bb = ub = NaN : ub <= 0 && (bb = NaN), new Qb(bb, ub, hb, Bb)
    }

    function cb(bb) {
      if (bb instanceof Qb) return new Qb(bb.h, bb.s, bb.l, bb.opacity);
      if (bb instanceof db || (bb = mb(bb)), !bb) return new Qb;
      if (bb instanceof Qb) return bb;
      var ub = (bb = bb.rgb()).r / 255,
        hb = bb.g / 255,
        Bb = bb.b / 255,
        Ob = Math.min(ub, hb, Bb),
        Gb = Math.max(ub, hb, Bb),
        Ub = NaN,
        Lb = Gb - Ob,
        Yb = (Gb + Ob) / 2;
      return Lb ? (Ub = ub === Gb ? (hb - Bb) / Lb + 6 * (hb < Bb) : hb === Gb ? (Bb - ub) / Lb + 2 : (ub - hb) / Lb + 4, Lb /= Yb < .5 ? Gb + Ob : 2 - Gb - Ob, Ub *= 60) : Lb = Yb > 0 && Yb < 1 ? 0 : Ub, new Qb(Ub, Lb, Yb, bb.opacity)
    }

    function Qb(bb, ub, hb, Bb) {
      this.h = +bb, this.s = +ub, this.l = +hb, this.opacity = +Bb
    }

    function Rb(bb) {
      return (bb = (bb || 0) % 360) < 0 ? bb + 360 : bb
    }

    function bu(bb) {
      return Math.max(0, Math.min(1, bb || 0))
    }

    function uu(bb, ub, hb) {
      return 255 * (bb < 60 ? ub + (hb - ub) * bb / 60 : bb < 180 ? hb : bb < 240 ? ub + (hb - ub) * (240 - bb) / 60 : ub)
    }

    function hu(bb, ub, hb, Bb, Ob) {
      var Gb = bb * bb,
        Ub = Gb * bb;
      return ((1 - 3 * bb + 3 * Gb - Ub) * ub + (4 - 6 * Gb + 3 * Ub) * hb + (1 + 3 * bb + 3 * Gb - 3 * Ub) * Bb + Ub * Ob) / 6
    }
    Wb(db, mb, {
      copy(bb) {
        return Object.assign(new this.constructor, this, bb)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: sb,
      formatHex: sb,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return cb(this).formatHsl()
      },
      formatRgb: Mb,
      toString: Mb
    }), Wb(Eb, qb, Cb(db, {
      brighter(bb) {
        return bb = null == bb ? jb : Math.pow(jb, bb), new Eb(this.r * bb, this.g * bb, this.b * bb, this.opacity)
      },
      darker(bb) {
        return bb = null == bb ? rb : Math.pow(rb, bb), new Eb(this.r * bb, this.g * bb, this.b * bb, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new Eb(fb(this.r), fb(this.g), fb(this.b), Fb(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: yb,
      formatHex: yb,
      formatHex8: function() {
        return `#${kb(this.r)}${kb(this.g)}${kb(this.b)}${kb(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: Vb,
      toString: Vb
    })), Wb(Qb, (function(bb, ub, hb, Bb) {
      return 1 === arguments.length ? cb(bb) : new Qb(bb, ub, hb, null == Bb ? 1 : Bb)
    }), Cb(db, {
      brighter(bb) {
        return bb = null == bb ? jb : Math.pow(jb, bb), new Qb(this.h, this.s, this.l * bb, this.opacity)
      },
      darker(bb) {
        return bb = null == bb ? rb : Math.pow(rb, bb), new Qb(this.h, this.s, this.l * bb, this.opacity)
      },
      rgb() {
        var bb = this.h % 360 + 360 * (this.h < 0),
          ub = isNaN(bb) || isNaN(this.s) ? 0 : this.s,
          hb = this.l,
          Bb = hb + (hb < .5 ? hb : 1 - hb) * ub,
          Ob = 2 * hb - Bb;
        return new Eb(uu(bb >= 240 ? bb - 240 : bb + 120, Ob, Bb), uu(bb, Ob, Bb), uu(bb < 120 ? bb + 240 : bb - 120, Ob, Bb), this.opacity)
      },
      clamp() {
        return new Qb(Rb(this.h), bu(this.s), bu(this.l), Fb(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const bb = Fb(this.opacity);
        return `${1===bb?"hsl(":"hsla("}${Rb(this.h)}, ${100*bu(this.s)}%, ${100*bu(this.l)}%${1===bb?")":`, ${bb})`}`
      }
    }));
    const Bu = bb => () => bb;

    function Ou(bb, ub) {
      return function(hb) {
        return bb + hb * ub
      }
    }

    function Gu(bb) {
      return 1 === (bb = +bb) ? Uu : function(ub, hb) {
        return hb - ub ? function(bb, ub, hb) {
          return bb = Math.pow(bb, hb), ub = Math.pow(ub, hb) - bb, hb = 1 / hb,
            function(Bb) {
              return Math.pow(bb + Bb * ub, hb)
            }
        }(ub, hb, bb) : Bu(isNaN(ub) ? hb : ub)
      }
    }

    function Uu(bb, ub) {
      var hb = ub - bb;
      return hb ? Ou(bb, hb) : Bu(isNaN(bb) ? ub : bb)
    }
    const Lu = function bb(ub) {
      var hb = Gu(ub);

      function Bb(bb, ub) {
        var Bb = hb((bb = qb(bb)).r, (ub = qb(ub)).r),
          Ob = hb(bb.g, ub.g),
          Gb = hb(bb.b, ub.b),
          Ub = Uu(bb.opacity, ub.opacity);
        return function(ub) {
          return bb.r = Bb(ub), bb.g = Ob(ub), bb.b = Gb(ub), bb.opacity = Ub(ub), bb + ""
        }
      }
      return Bb.gamma = bb, Bb
    }(1);

    function Yu(bb) {
      return function(ub) {
        var hb, Bb, Ob = ub.length,
          Gb = new Array(Ob),
          Ub = new Array(Ob),
          Lb = new Array(Ob);
        for (hb = 0; hb < Ob; ++hb) Bb = qb(ub[hb]), Gb[hb] = Bb.r || 0, Ub[hb] = Bb.g || 0, Lb[hb] = Bb.b || 0;
        return Gb = bb(Gb), Ub = bb(Ub), Lb = bb(Lb), Bb.opacity = 1,
          function(bb) {
            return Bb.r = Gb(bb), Bb.g = Ub(bb), Bb.b = Lb(bb), Bb + ""
          }
      }
    }
    Yu((function(bb) {
      var ub = bb.length - 1;
      return function(hb) {
        var Bb = hb <= 0 ? hb = 0 : hb >= 1 ? (hb = 1, ub - 1) : Math.floor(hb * ub),
          Ob = bb[Bb],
          Gb = bb[Bb + 1],
          Ub = Bb > 0 ? bb[Bb - 1] : 2 * Ob - Gb,
          Lb = Bb < ub - 1 ? bb[Bb + 2] : 2 * Gb - Ob;
        return hu((hb - Bb / ub) * ub, Ub, Ob, Gb, Lb)
      }
    })), Yu((function(bb) {
      var ub = bb.length;
      return function(hb) {
        var Bb = Math.floor(((hb %= 1) < 0 ? ++hb : hb) * ub),
          Ob = bb[(Bb + ub - 1) % ub],
          Gb = bb[Bb % ub],
          Ub = bb[(Bb + 1) % ub],
          Lb = bb[(Bb + 2) % ub];
        return hu((hb - Bb / ub) * ub, Ob, Gb, Ub, Lb)
      }
    }));

    function Su(bb, ub) {
      var hb, Bb = ub ? ub.length : 0,
        Ob = bb ? Math.min(Bb, bb.length) : 0,
        Gb = new Array(Ob),
        Ub = new Array(Bb);
      for (hb = 0; hb < Ob; ++hb) Gb[hb] = Au(bb[hb], ub[hb]);
      for (; hb < Bb; ++hb) Ub[hb] = ub[hb];
      return function(bb) {
        for (hb = 0; hb < Ob; ++hb) Ub[hb] = Gb[hb](bb);
        return Ub
      }
    }

    function au(bb, ub) {
      var hb = new Date;
      return bb = +bb, ub = +ub,
        function(Bb) {
          return hb.setTime(bb * (1 - Bb) + ub * Bb), hb
        }
    }

    function Hu(bb, ub) {
      return bb = +bb, ub = +ub,
        function(hb) {
          return bb * (1 - hb) + ub * hb
        }
    }

    function wu(bb, ub) {
      var hb, Bb = {},
        Ob = {};
      for (hb in null !== bb && "object" === typeof bb || (bb = {}), null !== ub && "object" === typeof ub || (ub = {}), ub) hb in bb ? Bb[hb] = Au(bb[hb], ub[hb]) : Ob[hb] = ub[hb];
      return function(bb) {
        for (hb in Bb) Ob[hb] = Bb[hb](bb);
        return Ob
      }
    }
    var Zu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Xu = new RegExp(Zu.source, "g");

    function pu(bb, ub) {
      var hb, Bb, Ob, Gb = Zu.lastIndex = Xu.lastIndex = 0,
        Ub = -1,
        Lb = [],
        Yb = [];
      for (bb += "", ub += "";
        (hb = Zu.exec(bb)) && (Bb = Xu.exec(ub));)(Ob = Bb.index) > Gb && (Ob = ub.slice(Gb, Ob), Lb[Ub] ? Lb[Ub] += Ob : Lb[++Ub] = Ob), (hb = hb[0]) === (Bb = Bb[0]) ? Lb[Ub] ? Lb[Ub] += Bb : Lb[++Ub] = Bb : (Lb[++Ub] = null, Yb.push({
        i: Ub,
        x: Hu(hb, Bb)
      })), Gb = Xu.lastIndex;
      return Gb < ub.length && (Ob = ub.slice(Gb), Lb[Ub] ? Lb[Ub] += Ob : Lb[++Ub] = Ob), Lb.length < 2 ? Yb[0] ? function(bb) {
        return function(ub) {
          return bb(ub) + ""
        }
      }(Yb[0].x) : function(bb) {
        return function() {
          return bb
        }
      }(ub) : (ub = Yb.length, function(bb) {
        for (var hb, Bb = 0; Bb < ub; ++Bb) Lb[(hb = Yb[Bb]).i] = hb.x(bb);
        return Lb.join("")
      })
    }

    function ou(bb, ub) {
      ub || (ub = []);
      var hb, Bb = bb ? Math.min(ub.length, bb.length) : 0,
        Ob = ub.slice();
      return function(Gb) {
        for (hb = 0; hb < Bb; ++hb) Ob[hb] = bb[hb] * (1 - Gb) + ub[hb] * Gb;
        return Ob
      }
    }

    function Au(bb, ub) {
      var hb, Bb, Ob = typeof ub;
      return null == ub || "boolean" === Ob ? Bu(ub) : ("number" === Ob ? Hu : "string" === Ob ? (hb = mb(ub)) ? (ub = hb, Lu) : pu : ub instanceof mb ? Lu : ub instanceof Date ? au : (Bb = ub, !ArrayBuffer.isView(Bb) || Bb instanceof DataView ? Array.isArray(ub) ? Su : "function" !== typeof ub.valueOf && "function" !== typeof ub.toString || isNaN(ub) ? wu : Hu : ou))(bb, ub)
    }

    function lu(bb, ub) {
      return bb = +bb, ub = +ub,
        function(hb) {
          return Math.round(bb * (1 - hb) + ub * hb)
        }
    }

    function Ku(bb) {
      return +bb
    }
    var Wu = [0, 1];

    function Cu(bb) {
      return bb
    }

    function du(bb, ub) {
      return (ub -= bb = +bb) ? function(hb) {
        return (hb - bb) / ub
      } : (hb = isNaN(ub) ? NaN : .5, function() {
        return hb
      });
      var hb
    }

    function ru(bb, ub, hb) {
      var Bb = bb[0],
        Ob = bb[1],
        Gb = ub[0],
        Ub = ub[1];
      return Ob < Bb ? (Bb = du(Ob, Bb), Gb = hb(Ub, Gb)) : (Bb = du(Bb, Ob), Gb = hb(Gb, Ub)),
        function(bb) {
          return Gb(Bb(bb))
        }
    }

    function ju(bb, ub, hb) {
      var Bb = Math.min(bb.length, ub.length) - 1,
        Ob = new Array(Bb),
        Gb = new Array(Bb),
        Ub = -1;
      for (bb[Bb] < bb[0] && (bb = bb.slice().reverse(), ub = ub.slice().reverse()); ++Ub < Bb;) Ob[Ub] = du(bb[Ub], bb[Ub + 1]), Gb[Ub] = hb(ub[Ub], ub[Ub + 1]);
      return function(ub) {
        var hb = Kb(bb, ub, 1, Bb) - 1;
        return Gb[hb](Ob[hb](ub))
      }
    }

    function nu(bb, ub) {
      return ub.domain(bb.domain()).range(bb.range()).interpolate(bb.interpolate()).clamp(bb.clamp()).unknown(bb.unknown())
    }

    function Du() {
      var bb, ub, hb, Bb, Ob, Gb, Ub = Wu,
        Lb = Wu,
        Yb = Au,
        Sb = Cu;

      function ab() {
        var bb = Math.min(Ub.length, Lb.length);
        return Sb !== Cu && (Sb = function(bb, ub) {
          var hb;
          return bb > ub && (hb = bb, bb = ub, ub = hb),
            function(hb) {
              return Math.max(bb, Math.min(ub, hb))
            }
        }(Ub[0], Ub[bb - 1])), Bb = bb > 2 ? ju : ru, Ob = Gb = null, Hb
      }

      function Hb(ub) {
        return null == ub || isNaN(ub = +ub) ? hb : (Ob || (Ob = Bb(Ub.map(bb), Lb, Yb)))(bb(Sb(ub)))
      }
      return Hb.invert = function(hb) {
          return Sb(ub((Gb || (Gb = Bb(Lb, Ub.map(bb), Hu)))(hb)))
        }, Hb.domain = function(bb) {
          return arguments.length ? (Ub = Array.from(bb, Ku), ab()) : Ub.slice()
        }, Hb.range = function(bb) {
          return arguments.length ? (Lb = Array.from(bb), ab()) : Lb.slice()
        }, Hb.rangeRound = function(bb) {
          return Lb = Array.from(bb), Yb = lu, ab()
        }, Hb.clamp = function(bb) {
          return arguments.length ? (Sb = !!bb || Cu, ab()) : Sb !== Cu
        }, Hb.interpolate = function(bb) {
          return arguments.length ? (Yb = bb, ab()) : Yb
        }, Hb.unknown = function(bb) {
          return arguments.length ? (hb = bb, Hb) : hb
        },
        function(hb, Bb) {
          return bb = hb, ub = Bb, ab()
        }
    }

    function xu() {
      return Du()(Cu, Cu)
    }
    var zu, gu = hb(5883),
      iu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function vu(bb) {
      if (!(ub = iu.exec(bb))) throw new Error("invalid format: " + bb);
      var ub;
      return new tu({
        fill: ub[1],
        align: ub[2],
        sign: ub[3],
        symbol: ub[4],
        zero: ub[5],
        width: ub[6],
        comma: ub[7],
        precision: ub[8] && ub[8].slice(1),
        trim: ub[9],
        type: ub[10]
      })
    }

    function tu(bb) {
      this.fill = void 0 === bb.fill ? " " : bb.fill + "", this.align = void 0 === bb.align ? ">" : bb.align + "", this.sign = void 0 === bb.sign ? "-" : bb.sign + "", this.symbol = void 0 === bb.symbol ? "" : bb.symbol + "", this.zero = !!bb.zero, this.width = void 0 === bb.width ? void 0 : +bb.width, this.comma = !!bb.comma, this.precision = void 0 === bb.precision ? void 0 : +bb.precision, this.trim = !!bb.trim, this.type = void 0 === bb.type ? "" : bb.type + ""
    }

    function Ju(bb, ub) {
      if (!isFinite(bb) || 0 === bb) return null;
      var hb = (bb = ub ? bb.toExponential(ub - 1) : bb.toExponential()).indexOf("e"),
        Bb = bb.slice(0, hb);
      return [Bb.length > 1 ? Bb[0] + Bb.slice(2) : Bb, +bb.slice(hb + 1)]
    }

    function eu(bb) {
      return (bb = Ju(Math.abs(bb))) ? bb[1] : NaN
    }

    function Nu(bb, ub) {
      var hb = Ju(bb, ub);
      if (!hb) return bb + "";
      var Bb = hb[0],
        Ob = hb[1];
      return Ob < 0 ? "0." + new Array(-Ob).join("0") + Bb : Bb.length > Ob + 1 ? Bb.slice(0, Ob + 1) + "." + Bb.slice(Ob + 1) : Bb + new Array(Ob - Bb.length + 2).join("0")
    }
    vu.prototype = tu.prototype, tu.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const su = {
      "%": (bb, ub) => (100 * bb).toFixed(ub),
      b: bb => Math.round(bb).toString(2),
      c: bb => bb + "",
      d: function(bb) {
        return Math.abs(bb = Math.round(bb)) >= 1e21 ? bb.toLocaleString("en").replace(/,/g, "") : bb.toString(10)
      },
      e: (bb, ub) => bb.toExponential(ub),
      f: (bb, ub) => bb.toFixed(ub),
      g: (bb, ub) => bb.toPrecision(ub),
      o: bb => Math.round(bb).toString(8),
      p: (bb, ub) => Nu(100 * bb, ub),
      r: Nu,
      s: function(bb, ub) {
        var hb = Ju(bb, ub);
        if (!hb) return zu = void 0, bb.toPrecision(ub);
        var Bb = hb[0],
          Ob = hb[1],
          Gb = Ob - (zu = 3 * Math.max(-8, Math.min(8, Math.floor(Ob / 3)))) + 1,
          Ub = Bb.length;
        return Gb === Ub ? Bb : Gb > Ub ? Bb + new Array(Gb - Ub + 1).join("0") : Gb > 0 ? Bb.slice(0, Gb) + "." + Bb.slice(Gb) : "0." + new Array(1 - Gb).join("0") + Ju(bb, Math.max(0, ub + Gb - 1))[0]
      },
      X: bb => Math.round(bb).toString(16).toUpperCase(),
      x: bb => Math.round(bb).toString(16)
    };

    function Mu(bb) {
      return bb
    }
    var mu, Iu, Pu, qu = Array.prototype.map,
      Eu = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function yu(bb) {
      var ub, hb, Bb = void 0 === bb.grouping || void 0 === bb.thousands ? Mu : (ub = qu.call(bb.grouping, Number), hb = bb.thousands + "", function(bb, Bb) {
          for (var Ob = bb.length, Gb = [], Ub = 0, Lb = ub[0], Yb = 0; Ob > 0 && Lb > 0 && (Yb + Lb + 1 > Bb && (Lb = Math.max(1, Bb - Yb)), Gb.push(bb.substring(Ob -= Lb, Ob + Lb)), !((Yb += Lb + 1) > Bb));) Lb = ub[Ub = (Ub + 1) % ub.length];
          return Gb.reverse().join(hb)
        }),
        Ob = void 0 === bb.currency ? "" : bb.currency[0] + "",
        Gb = void 0 === bb.currency ? "" : bb.currency[1] + "",
        Ub = void 0 === bb.decimal ? "." : bb.decimal + "",
        Lb = void 0 === bb.numerals ? Mu : function(bb) {
          return function(ub) {
            return ub.replace(/[0-9]/g, (function(ub) {
              return bb[+ub]
            }))
          }
        }(qu.call(bb.numerals, String)),
        Yb = void 0 === bb.percent ? "%" : bb.percent + "",
        Sb = void 0 === bb.minus ? "\u2212" : bb.minus + "",
        ab = void 0 === bb.nan ? "NaN" : bb.nan + "";

      function Hb(bb, ub) {
        var hb = (bb = vu(bb)).fill,
          Hb = bb.align,
          wb = bb.sign,
          Zb = bb.symbol,
          Xb = bb.zero,
          pb = bb.width,
          ob = bb.comma,
          Ab = bb.precision,
          lb = bb.trim,
          Kb = bb.type;
        "n" === Kb ? (ob = !0, Kb = "g") : su[Kb] || (void 0 === Ab && (Ab = 12), lb = !0, Kb = "g"), (Xb || "0" === hb && "=" === Hb) && (Xb = !0, hb = "0", Hb = "=");
        var Wb = (ub && void 0 !== ub.prefix ? ub.prefix : "") + ("$" === Zb ? Ob : "#" === Zb && /[boxX]/.test(Kb) ? "0" + Kb.toLowerCase() : ""),
          Cb = ("$" === Zb ? Gb : /[%p]/.test(Kb) ? Yb : "") + (ub && void 0 !== ub.suffix ? ub.suffix : ""),
          db = su[Kb],
          rb = /[defgprs%]/.test(Kb);

        function jb(bb) {
          var ub, Ob, Gb, Yb = Wb,
            Zb = Cb;
          if ("c" === Kb) Zb = db(bb) + Zb, bb = "";
          else {
            var jb = (bb = +bb) < 0 || 1 / bb < 0;
            if (bb = isNaN(bb) ? ab : db(Math.abs(bb), Ab), lb && (bb = function(bb) {
                bb: for (var ub, hb = bb.length, Bb = 1, Ob = -1; Bb < hb; ++Bb) switch (bb[Bb]) {
                  case ".":
                    Ob = ub = Bb;
                    break;
                  case "0":
                    0 === Ob && (Ob = Bb), ub = Bb;
                    break;
                  default:
                    if (!+bb[Bb]) break bb;
                    Ob > 0 && (Ob = 0)
                }
                return Ob > 0 ? bb.slice(0, Ob) + bb.slice(ub + 1) : bb
              }(bb)), jb && 0 === +bb && "+" !== wb && (jb = !1), Yb = (jb ? "(" === wb ? wb : Sb : "-" === wb || "(" === wb ? "" : wb) + Yb, Zb = ("s" !== Kb || isNaN(bb) || void 0 === zu ? "" : Eu[8 + zu / 3]) + Zb + (jb && "(" === wb ? ")" : ""), rb)
              for (ub = -1, Ob = bb.length; ++ub < Ob;)
                if (48 > (Gb = bb.charCodeAt(ub)) || Gb > 57) {
                  Zb = (46 === Gb ? Ub + bb.slice(ub + 1) : bb.slice(ub)) + Zb, bb = bb.slice(0, ub);
                  break
                }
          }
          ob && !Xb && (bb = Bb(bb, 1 / 0));
          var nb = Yb.length + bb.length + Zb.length,
            Db = nb < pb ? new Array(pb - nb + 1).join(hb) : "";
          switch (ob && Xb && (bb = Bb(Db + bb, Db.length ? pb - Zb.length : 1 / 0), Db = ""), Hb) {
            case "<":
              bb = Yb + bb + Zb + Db;
              break;
            case "=":
              bb = Yb + Db + bb + Zb;
              break;
            case "^":
              bb = Db.slice(0, nb = Db.length >> 1) + Yb + bb + Zb + Db.slice(nb);
              break;
            default:
              bb = Db + Yb + bb + Zb
          }
          return Lb(bb)
        }
        return Ab = void 0 === Ab ? 6 : /[gprs]/.test(Kb) ? Math.max(1, Math.min(21, Ab)) : Math.max(0, Math.min(20, Ab)), jb.toString = function() {
          return bb + ""
        }, jb
      }
      return {
        format: Hb,
        formatPrefix: function(bb, ub) {
          var hb = 3 * Math.max(-8, Math.min(8, Math.floor(eu(ub) / 3))),
            Bb = Math.pow(10, -hb),
            Ob = Hb(((bb = vu(bb)).type = "f", bb), {
              suffix: Eu[8 + hb / 3]
            });
          return function(bb) {
            return Ob(Bb * bb)
          }
        }
      }
    }

    function Vu(bb, ub, hb, Bb) {
      var Ob, Gb = Hb(bb, ub, hb);
      switch ((Bb = vu(null == Bb ? ",f" : Bb)).type) {
        case "s":
          var Ub = Math.max(Math.abs(bb), Math.abs(ub));
          return null != Bb.precision || isNaN(Ob = function(bb, ub) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(eu(ub) / 3))) - eu(Math.abs(bb)))
          }(Gb, Ub)) || (Bb.precision = Ob), Pu(Bb, Ub);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != Bb.precision || isNaN(Ob = function(bb, ub) {
            return bb = Math.abs(bb), ub = Math.abs(ub) - bb, Math.max(0, eu(ub) - eu(bb)) + 1
          }(Gb, Math.max(Math.abs(bb), Math.abs(ub)))) || (Bb.precision = Ob - ("e" === Bb.type));
          break;
        case "f":
        case "%":
          null != Bb.precision || isNaN(Ob = function(bb) {
            return Math.max(0, -eu(Math.abs(bb)))
          }(Gb)) || (Bb.precision = Ob - 2 * ("%" === Bb.type))
      }
      return Iu(Bb)
    }

    function Fu(bb) {
      var ub = bb.domain;
      return bb.ticks = function(bb) {
        var hb = ub();
        return Sb(hb[0], hb[hb.length - 1], null == bb ? 10 : bb)
      }, bb.tickFormat = function(bb, hb) {
        var Bb = ub();
        return Vu(Bb[0], Bb[Bb.length - 1], null == bb ? 10 : bb, hb)
      }, bb.nice = function(hb) {
        null == hb && (hb = 10);
        var Bb, Ob, Gb = ub(),
          Ub = 0,
          Lb = Gb.length - 1,
          Yb = Gb[Ub],
          Sb = Gb[Lb],
          Hb = 10;
        for (Sb < Yb && (Ob = Yb, Yb = Sb, Sb = Ob, Ob = Ub, Ub = Lb, Lb = Ob); Hb-- > 0;) {
          if ((Ob = ab(Yb, Sb, hb)) === Bb) return Gb[Ub] = Yb, Gb[Lb] = Sb, ub(Gb);
          if (Ob > 0) Yb = Math.floor(Yb / Ob) * Ob, Sb = Math.ceil(Sb / Ob) * Ob;
          else {
            if (!(Ob < 0)) break;
            Yb = Math.ceil(Yb * Ob) / Ob, Sb = Math.floor(Sb * Ob) / Ob
          }
          Bb = Ob
        }
        return bb
      }, bb
    }

    function fu() {
      var bb = xu();
      return bb.copy = function() {
        return nu(bb, fu())
      }, gu.e.apply(bb, arguments), Fu(bb)
    }

    function ku(bb) {
      var ub;

      function hb(bb) {
        return null == bb || isNaN(bb = +bb) ? ub : bb
      }
      return hb.invert = hb, hb.domain = hb.range = function(ub) {
        return arguments.length ? (bb = Array.from(ub, Ku), hb) : bb.slice()
      }, hb.unknown = function(bb) {
        return arguments.length ? (ub = bb, hb) : ub
      }, hb.copy = function() {
        return ku(bb).unknown(ub)
      }, bb = arguments.length ? Array.from(bb, Ku) : [0, 1], Fu(hb)
    }

    function Tu(bb, ub) {
      var hb, Bb = 0,
        Ob = (bb = bb.slice()).length - 1,
        Gb = bb[Bb],
        Ub = bb[Ob];
      return Ub < Gb && (hb = Bb, Bb = Ob, Ob = hb, hb = Gb, Gb = Ub, Ub = hb), bb[Bb] = ub.floor(Gb), bb[Ob] = ub.ceil(Ub), bb
    }

    function cu(bb) {
      return Math.log(bb)
    }

    function Qu(bb) {
      return Math.exp(bb)
    }

    function Ru(bb) {
      return -Math.log(-bb)
    }

    function bh(bb) {
      return -Math.exp(-bb)
    }

    function uh(bb) {
      return isFinite(bb) ? +("1e" + bb) : bb < 0 ? 0 : bb
    }

    function hh(bb) {
      return (ub, hb) => -bb(-ub, hb)
    }

    function Bh(bb) {
      const ub = bb(cu, Qu),
        hb = ub.domain;
      let Bb, Ob, Gb = 10;

      function Ub() {
        return Bb = function(bb) {
          return bb === Math.E ? Math.log : 10 === bb && Math.log10 || 2 === bb && Math.log2 || (bb = Math.log(bb), ub => Math.log(ub) / bb)
        }(Gb), Ob = function(bb) {
          return 10 === bb ? uh : bb === Math.E ? Math.exp : ub => Math.pow(bb, ub)
        }(Gb), hb()[0] < 0 ? (Bb = hh(Bb), Ob = hh(Ob), bb(Ru, bh)) : bb(cu, Qu), ub
      }
      return ub.base = function(bb) {
        return arguments.length ? (Gb = +bb, Ub()) : Gb
      }, ub.domain = function(bb) {
        return arguments.length ? (hb(bb), Ub()) : hb()
      }, ub.ticks = bb => {
        const ub = hb();
        let Ub = ub[0],
          Lb = ub[ub.length - 1];
        const Yb = Lb < Ub;
        Yb && ([Ub, Lb] = [Lb, Ub]);
        let ab, Hb, wb = Bb(Ub),
          Zb = Bb(Lb);
        const Xb = null == bb ? 10 : +bb;
        let pb = [];
        if (!(Gb % 1) && Zb - wb < Xb) {
          if (wb = Math.floor(wb), Zb = Math.ceil(Zb), Ub > 0) {
            for (; wb <= Zb; ++wb)
              for (ab = 1; ab < Gb; ++ab)
                if (Hb = wb < 0 ? ab / Ob(-wb) : ab * Ob(wb), !(Hb < Ub)) {
                  if (Hb > Lb) break;
                  pb.push(Hb)
                }
          } else
            for (; wb <= Zb; ++wb)
              for (ab = Gb - 1; ab >= 1; --ab)
                if (Hb = wb > 0 ? ab / Ob(-wb) : ab * Ob(wb), !(Hb < Ub)) {
                  if (Hb > Lb) break;
                  pb.push(Hb)
                } 2 * pb.length < Xb && (pb = Sb(Ub, Lb, Xb))
        } else pb = Sb(wb, Zb, Math.min(Zb - wb, Xb)).map(Ob);
        return Yb ? pb.reverse() : pb
      }, ub.tickFormat = (bb, hb) => {
        if (null == bb && (bb = 10), null == hb && (hb = 10 === Gb ? "s" : ","), "function" !== typeof hb && (Gb % 1 || null != (hb = vu(hb)).precision || (hb.trim = !0), hb = Iu(hb)), bb === 1 / 0) return hb;
        const Ub = Math.max(1, Gb * bb / ub.ticks().length);
        return bb => {
          let ub = bb / Ob(Math.round(Bb(bb)));
          return ub * Gb < Gb - .5 && (ub *= Gb), ub <= Ub ? hb(bb) : ""
        }
      }, ub.nice = () => hb(Tu(hb(), {
        floor: bb => Ob(Math.floor(Bb(bb))),
        ceil: bb => Ob(Math.ceil(Bb(bb)))
      })), ub
    }

    function Oh() {
      const bb = Bh(Du()).domain([1, 10]);
      return bb.copy = () => nu(bb, Oh()).base(bb.base()), gu.e.apply(bb, arguments), bb
    }

    function Gh(bb) {
      return function(ub) {
        return Math.sign(ub) * Math.log1p(Math.abs(ub / bb))
      }
    }

    function Uh(bb) {
      return function(ub) {
        return Math.sign(ub) * Math.expm1(Math.abs(ub)) * bb
      }
    }

    function Lh(bb) {
      var ub = 1,
        hb = bb(Gh(ub), Uh(ub));
      return hb.constant = function(hb) {
        return arguments.length ? bb(Gh(ub = +hb), Uh(ub)) : ub
      }, Fu(hb)
    }

    function Yh() {
      var bb = Lh(Du());
      return bb.copy = function() {
        return nu(bb, Yh()).constant(bb.constant())
      }, gu.e.apply(bb, arguments)
    }
    mu = yu({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), Iu = mu.format, Pu = mu.formatPrefix;
    var Sh = hb(5891);

    function ah(bb) {
      return function(ub) {
        return ub < 0 ? -Math.pow(-ub, bb) : Math.pow(ub, bb)
      }
    }

    function Hh(bb) {
      return bb < 0 ? -Math.sqrt(-bb) : Math.sqrt(bb)
    }

    function wh(bb) {
      return bb < 0 ? -bb * bb : bb * bb
    }

    function Zh(bb) {
      var ub = bb(Cu, Cu),
        hb = 1;
      return ub.exponent = function(ub) {
        return arguments.length ? 1 === (hb = +ub) ? bb(Cu, Cu) : .5 === hb ? bb(Hh, wh) : bb(ah(hb), ah(1 / hb)) : hb
      }, Fu(ub)
    }

    function Xh() {
      var bb = Zh(Du());
      return bb.copy = function() {
        return nu(bb, Xh()).exponent(bb.exponent())
      }, gu.e.apply(bb, arguments), bb
    }

    function ph() {
      return Xh.apply(null, arguments).exponent(.5)
    }

    function oh(bb) {
      return Math.sign(bb) * bb * bb
    }

    function Ah() {
      var bb, ub = xu(),
        hb = [0, 1],
        Bb = !1;

      function Ob(hb) {
        var Ob = function(bb) {
          return Math.sign(bb) * Math.sqrt(Math.abs(bb))
        }(ub(hb));
        return isNaN(Ob) ? bb : Bb ? Math.round(Ob) : Ob
      }
      return Ob.invert = function(bb) {
        return ub.invert(oh(bb))
      }, Ob.domain = function(bb) {
        return arguments.length ? (ub.domain(bb), Ob) : ub.domain()
      }, Ob.range = function(bb) {
        return arguments.length ? (ub.range((hb = Array.from(bb, Ku)).map(oh)), Ob) : hb.slice()
      }, Ob.rangeRound = function(bb) {
        return Ob.range(bb).round(!0)
      }, Ob.round = function(bb) {
        return arguments.length ? (Bb = !!bb, Ob) : Bb
      }, Ob.clamp = function(bb) {
        return arguments.length ? (ub.clamp(bb), Ob) : ub.clamp()
      }, Ob.unknown = function(ub) {
        return arguments.length ? (bb = ub, Ob) : bb
      }, Ob.copy = function() {
        return Ah(ub.domain(), hb).round(Bb).clamp(ub.clamp()).unknown(bb)
      }, gu.e.apply(Ob, arguments), Fu(Ob)
    }

    function lh(bb, ub) {
      let hb;
      if (void 0 === ub)
        for (const Bb of bb) null != Bb && (hb < Bb || void 0 === hb && Bb >= Bb) && (hb = Bb);
      else {
        let Bb = -1;
        for (let Ob of bb) null != (Ob = ub(Ob, ++Bb, bb)) && (hb < Ob || void 0 === hb && Ob >= Ob) && (hb = Ob)
      }
      return hb
    }

    function Kh(bb, ub) {
      let hb;
      if (void 0 === ub)
        for (const Bb of bb) null != Bb && (hb > Bb || void 0 === hb && Bb >= Bb) && (hb = Bb);
      else {
        let Bb = -1;
        for (let Ob of bb) null != (Ob = ub(Ob, ++Bb, bb)) && (hb > Ob || void 0 === hb && Ob >= Ob) && (hb = Ob)
      }
      return hb
    }

    function Wh() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wb;
      if (bb === wb) return Ch;
      if ("function" !== typeof bb) throw new TypeError("compare is not a function");
      return (ub, hb) => {
        const Bb = bb(ub, hb);
        return Bb || 0 === Bb ? Bb : (0 === bb(hb, hb)) - (0 === bb(ub, ub))
      }
    }

    function Ch(bb, ub) {
      return (null == bb || !(bb >= bb)) - (null == ub || !(ub >= ub)) || (bb < ub ? -1 : bb > ub ? 1 : 0)
    }

    function dh(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        Ob = arguments.length > 4 ? arguments[4] : void 0;
      if (ub = Math.floor(ub), hb = Math.floor(Math.max(0, hb)), Bb = Math.floor(Math.min(bb.length - 1, Bb)), !(hb <= ub && ub <= Bb)) return bb;
      for (Ob = void 0 === Ob ? Ch : Wh(Ob); Bb > hb;) {
        if (Bb - hb > 600) {
          const Gb = Bb - hb + 1,
            Ub = ub - hb + 1,
            Lb = Math.log(Gb),
            Yb = .5 * Math.exp(2 * Lb / 3),
            Sb = .5 * Math.sqrt(Lb * Yb * (Gb - Yb) / Gb) * (Ub - Gb / 2 < 0 ? -1 : 1);
          dh(bb, ub, Math.max(hb, Math.floor(ub - Ub * Yb / Gb + Sb)), Math.min(Bb, Math.floor(ub + (Gb - Ub) * Yb / Gb + Sb)), Ob)
        }
        const Gb = bb[ub];
        let Ub = hb,
          Lb = Bb;
        for (rh(bb, hb, ub), Ob(bb[Bb], Gb) > 0 && rh(bb, hb, Bb); Ub < Lb;) {
          for (rh(bb, Ub, Lb), ++Ub, --Lb; Ob(bb[Ub], Gb) < 0;) ++Ub;
          for (; Ob(bb[Lb], Gb) > 0;) --Lb
        }
        0 === Ob(bb[hb], Gb) ? rh(bb, hb, Lb) : (++Lb, rh(bb, Lb, Bb)), Lb <= ub && (hb = Lb + 1), ub <= Lb && (Bb = Lb - 1)
      }
      return bb
    }

    function rh(bb, ub, hb) {
      const Bb = bb[ub];
      bb[ub] = bb[hb], bb[hb] = Bb
    }

    function jh(bb, ub, hb) {
      if (bb = Float64Array.from(function*(bb, ub) {
          if (void 0 === ub)
            for (let hb of bb) null != hb && (hb = +hb) >= hb && (yield hb);
          else {
            let hb = -1;
            for (let Bb of bb) null != (Bb = ub(Bb, ++hb, bb)) && (Bb = +Bb) >= Bb && (yield Bb)
          }
        }(bb, hb)), (Bb = bb.length) && !isNaN(ub = +ub)) {
        if (ub <= 0 || Bb < 2) return Kh(bb);
        if (ub >= 1) return lh(bb);
        var Bb, Ob = (Bb - 1) * ub,
          Gb = Math.floor(Ob),
          Ub = lh(dh(bb, Gb).subarray(0, Gb + 1));
        return Ub + (Kh(bb.subarray(Gb + 1)) - Ub) * (Ob - Gb)
      }
    }

    function nh(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ob;
      if ((Bb = bb.length) && !isNaN(ub = +ub)) {
        if (ub <= 0 || Bb < 2) return +hb(bb[0], 0, bb);
        if (ub >= 1) return +hb(bb[Bb - 1], Bb - 1, bb);
        var Bb, Ob = (Bb - 1) * ub,
          Gb = Math.floor(Ob),
          Ub = +hb(bb[Gb], Gb, bb);
        return Ub + (+hb(bb[Gb + 1], Gb + 1, bb) - Ub) * (Ob - Gb)
      }
    }

    function Dh() {
      var bb, ub = [],
        hb = [],
        Bb = [];

      function Ob() {
        var bb = 0,
          Ob = Math.max(1, hb.length);
        for (Bb = new Array(Ob - 1); ++bb < Ob;) Bb[bb - 1] = nh(ub, bb / Ob);
        return Gb
      }

      function Gb(ub) {
        return null == ub || isNaN(ub = +ub) ? bb : hb[Kb(Bb, ub)]
      }
      return Gb.invertExtent = function(bb) {
        var Ob = hb.indexOf(bb);
        return Ob < 0 ? [NaN, NaN] : [Ob > 0 ? Bb[Ob - 1] : ub[0], Ob < Bb.length ? Bb[Ob] : ub[ub.length - 1]]
      }, Gb.domain = function(bb) {
        if (!arguments.length) return ub.slice();
        ub = [];
        for (let hb of bb) null == hb || isNaN(hb = +hb) || ub.push(hb);
        return ub.sort(wb), Ob()
      }, Gb.range = function(bb) {
        return arguments.length ? (hb = Array.from(bb), Ob()) : hb.slice()
      }, Gb.unknown = function(ub) {
        return arguments.length ? (bb = ub, Gb) : bb
      }, Gb.quantiles = function() {
        return Bb.slice()
      }, Gb.copy = function() {
        return Dh().domain(ub).range(hb).unknown(bb)
      }, gu.e.apply(Gb, arguments)
    }

    function xh() {
      var bb, ub = 0,
        hb = 1,
        Bb = 1,
        Ob = [.5],
        Gb = [0, 1];

      function Ub(ub) {
        return null != ub && ub <= ub ? Gb[Kb(Ob, ub, 0, Bb)] : bb
      }

      function Lb() {
        var bb = -1;
        for (Ob = new Array(Bb); ++bb < Bb;) Ob[bb] = ((bb + 1) * hb - (bb - Bb) * ub) / (Bb + 1);
        return Ub
      }
      return Ub.domain = function(bb) {
        return arguments.length ? ([ub, hb] = bb, ub = +ub, hb = +hb, Lb()) : [ub, hb]
      }, Ub.range = function(bb) {
        return arguments.length ? (Bb = (Gb = Array.from(bb)).length - 1, Lb()) : Gb.slice()
      }, Ub.invertExtent = function(bb) {
        var Ub = Gb.indexOf(bb);
        return Ub < 0 ? [NaN, NaN] : Ub < 1 ? [ub, Ob[0]] : Ub >= Bb ? [Ob[Bb - 1], hb] : [Ob[Ub - 1], Ob[Ub]]
      }, Ub.unknown = function(ub) {
        return arguments.length ? (bb = ub, Ub) : Ub
      }, Ub.thresholds = function() {
        return Ob.slice()
      }, Ub.copy = function() {
        return xh().domain([ub, hb]).range(Gb).unknown(bb)
      }, gu.e.apply(Fu(Ub), arguments)
    }

    function zh() {
      var bb, ub = [.5],
        hb = [0, 1],
        Bb = 1;

      function Ob(Ob) {
        return null != Ob && Ob <= Ob ? hb[Kb(ub, Ob, 0, Bb)] : bb
      }
      return Ob.domain = function(bb) {
        return arguments.length ? (ub = Array.from(bb), Bb = Math.min(ub.length, hb.length - 1), Ob) : ub.slice()
      }, Ob.range = function(bb) {
        return arguments.length ? (hb = Array.from(bb), Bb = Math.min(ub.length, hb.length - 1), Ob) : hb.slice()
      }, Ob.invertExtent = function(bb) {
        var Bb = hb.indexOf(bb);
        return [ub[Bb - 1], ub[Bb]]
      }, Ob.unknown = function(ub) {
        return arguments.length ? (bb = ub, Ob) : bb
      }, Ob.copy = function() {
        return zh().domain(ub).range(hb).unknown(bb)
      }, gu.e.apply(Ob, arguments)
    }
    const gh = 1e3,
      ih = 6e4,
      vh = 36e5,
      th = 864e5,
      Jh = 6048e5,
      eh = 2592e6,
      Nh = 31536e6,
      sh = new Date,
      Mh = new Date;

    function mh(bb, ub, hb, Bb) {
      function Ob(ub) {
        return bb(ub = 0 === arguments.length ? new Date : new Date(+ub)), ub
      }
      return Ob.floor = ub => (bb(ub = new Date(+ub)), ub), Ob.ceil = hb => (bb(hb = new Date(hb - 1)), ub(hb, 1), bb(hb), hb), Ob.round = bb => {
        const ub = Ob(bb),
          hb = Ob.ceil(bb);
        return bb - ub < hb - bb ? ub : hb
      }, Ob.offset = (bb, hb) => (ub(bb = new Date(+bb), null == hb ? 1 : Math.floor(hb)), bb), Ob.range = (hb, Bb, Gb) => {
        const Ub = [];
        if (hb = Ob.ceil(hb), Gb = null == Gb ? 1 : Math.floor(Gb), !(hb < Bb) || !(Gb > 0)) return Ub;
        let Lb;
        do {
          Ub.push(Lb = new Date(+hb)), ub(hb, Gb), bb(hb)
        } while (Lb < hb && hb < Bb);
        return Ub
      }, Ob.filter = hb => mh((ub => {
        if (ub >= ub)
          for (; bb(ub), !hb(ub);) ub.setTime(ub - 1)
      }), ((bb, Bb) => {
        if (bb >= bb)
          if (Bb < 0)
            for (; ++Bb <= 0;)
              for (; ub(bb, -1), !hb(bb););
          else
            for (; --Bb >= 0;)
              for (; ub(bb, 1), !hb(bb););
      })), hb && (Ob.count = (ub, Bb) => (sh.setTime(+ub), Mh.setTime(+Bb), bb(sh), bb(Mh), Math.floor(hb(sh, Mh))), Ob.every = bb => (bb = Math.floor(bb), isFinite(bb) && bb > 0 ? bb > 1 ? Ob.filter(Bb ? ub => Bb(ub) % bb === 0 : ub => Ob.count(0, ub) % bb === 0) : Ob : null)), Ob
    }
    const Ih = mh((() => {}), ((bb, ub) => {
      bb.setTime(+bb + ub)
    }), ((bb, ub) => ub - bb));
    Ih.every = bb => (bb = Math.floor(bb), isFinite(bb) && bb > 0 ? bb > 1 ? mh((ub => {
      ub.setTime(Math.floor(ub / bb) * bb)
    }), ((ub, hb) => {
      ub.setTime(+ub + hb * bb)
    }), ((ub, hb) => (hb - ub) / bb)) : Ih : null);
    Ih.range;
    const Ph = mh((bb => {
        bb.setTime(bb - bb.getMilliseconds())
      }), ((bb, ub) => {
        bb.setTime(+bb + ub * gh)
      }), ((bb, ub) => (ub - bb) / gh), (bb => bb.getUTCSeconds())),
      qh = (Ph.range, mh((bb => {
        bb.setTime(bb - bb.getMilliseconds() - bb.getSeconds() * gh)
      }), ((bb, ub) => {
        bb.setTime(+bb + ub * ih)
      }), ((bb, ub) => (ub - bb) / ih), (bb => bb.getMinutes()))),
      Eh = (qh.range, mh((bb => {
        bb.setUTCSeconds(0, 0)
      }), ((bb, ub) => {
        bb.setTime(+bb + ub * ih)
      }), ((bb, ub) => (ub - bb) / ih), (bb => bb.getUTCMinutes()))),
      yh = (Eh.range, mh((bb => {
        bb.setTime(bb - bb.getMilliseconds() - bb.getSeconds() * gh - bb.getMinutes() * ih)
      }), ((bb, ub) => {
        bb.setTime(+bb + ub * vh)
      }), ((bb, ub) => (ub - bb) / vh), (bb => bb.getHours()))),
      Vh = (yh.range, mh((bb => {
        bb.setUTCMinutes(0, 0, 0)
      }), ((bb, ub) => {
        bb.setTime(+bb + ub * vh)
      }), ((bb, ub) => (ub - bb) / vh), (bb => bb.getUTCHours()))),
      Fh = (Vh.range, mh((bb => bb.setHours(0, 0, 0, 0)), ((bb, ub) => bb.setDate(bb.getDate() + ub)), ((bb, ub) => (ub - bb - (ub.getTimezoneOffset() - bb.getTimezoneOffset()) * ih) / th), (bb => bb.getDate() - 1))),
      fh = (Fh.range, mh((bb => {
        bb.setUTCHours(0, 0, 0, 0)
      }), ((bb, ub) => {
        bb.setUTCDate(bb.getUTCDate() + ub)
      }), ((bb, ub) => (ub - bb) / th), (bb => bb.getUTCDate() - 1))),
      kh = (fh.range, mh((bb => {
        bb.setUTCHours(0, 0, 0, 0)
      }), ((bb, ub) => {
        bb.setUTCDate(bb.getUTCDate() + ub)
      }), ((bb, ub) => (ub - bb) / th), (bb => Math.floor(bb / th))));
    kh.range;

    function Th(bb) {
      return mh((ub => {
        ub.setDate(ub.getDate() - (ub.getDay() + 7 - bb) % 7), ub.setHours(0, 0, 0, 0)
      }), ((bb, ub) => {
        bb.setDate(bb.getDate() + 7 * ub)
      }), ((bb, ub) => (ub - bb - (ub.getTimezoneOffset() - bb.getTimezoneOffset()) * ih) / Jh))
    }
    const ch = Th(0),
      Qh = Th(1),
      Rh = Th(2),
      bB = Th(3),
      uB = Th(4),
      hB = Th(5),
      BB = Th(6);
    ch.range, Qh.range, Rh.range, bB.range, uB.range, hB.range, BB.range;

    function OB(bb) {
      return mh((ub => {
        ub.setUTCDate(ub.getUTCDate() - (ub.getUTCDay() + 7 - bb) % 7), ub.setUTCHours(0, 0, 0, 0)
      }), ((bb, ub) => {
        bb.setUTCDate(bb.getUTCDate() + 7 * ub)
      }), ((bb, ub) => (ub - bb) / Jh))
    }
    const GB = OB(0),
      UB = OB(1),
      LB = OB(2),
      YB = OB(3),
      SB = OB(4),
      aB = OB(5),
      HB = OB(6),
      wB = (GB.range, UB.range, LB.range, YB.range, SB.range, aB.range, HB.range, mh((bb => {
        bb.setDate(1), bb.setHours(0, 0, 0, 0)
      }), ((bb, ub) => {
        bb.setMonth(bb.getMonth() + ub)
      }), ((bb, ub) => ub.getMonth() - bb.getMonth() + 12 * (ub.getFullYear() - bb.getFullYear())), (bb => bb.getMonth()))),
      ZB = (wB.range, mh((bb => {
        bb.setUTCDate(1), bb.setUTCHours(0, 0, 0, 0)
      }), ((bb, ub) => {
        bb.setUTCMonth(bb.getUTCMonth() + ub)
      }), ((bb, ub) => ub.getUTCMonth() - bb.getUTCMonth() + 12 * (ub.getUTCFullYear() - bb.getUTCFullYear())), (bb => bb.getUTCMonth()))),
      XB = (ZB.range, mh((bb => {
        bb.setMonth(0, 1), bb.setHours(0, 0, 0, 0)
      }), ((bb, ub) => {
        bb.setFullYear(bb.getFullYear() + ub)
      }), ((bb, ub) => ub.getFullYear() - bb.getFullYear()), (bb => bb.getFullYear())));
    XB.every = bb => isFinite(bb = Math.floor(bb)) && bb > 0 ? mh((ub => {
      ub.setFullYear(Math.floor(ub.getFullYear() / bb) * bb), ub.setMonth(0, 1), ub.setHours(0, 0, 0, 0)
    }), ((ub, hb) => {
      ub.setFullYear(ub.getFullYear() + hb * bb)
    })) : null;
    XB.range;
    const pB = mh((bb => {
      bb.setUTCMonth(0, 1), bb.setUTCHours(0, 0, 0, 0)
    }), ((bb, ub) => {
      bb.setUTCFullYear(bb.getUTCFullYear() + ub)
    }), ((bb, ub) => ub.getUTCFullYear() - bb.getUTCFullYear()), (bb => bb.getUTCFullYear()));
    pB.every = bb => isFinite(bb = Math.floor(bb)) && bb > 0 ? mh((ub => {
      ub.setUTCFullYear(Math.floor(ub.getUTCFullYear() / bb) * bb), ub.setUTCMonth(0, 1), ub.setUTCHours(0, 0, 0, 0)
    }), ((ub, hb) => {
      ub.setUTCFullYear(ub.getUTCFullYear() + hb * bb)
    })) : null;
    pB.range;

    function oB(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = [
        [Ph, 1, gh],
        [Ph, 5, 5e3],
        [Ph, 15, 15e3],
        [Ph, 30, 3e4],
        [Gb, 1, ih],
        [Gb, 5, 3e5],
        [Gb, 15, 9e5],
        [Gb, 30, 18e5],
        [Ob, 1, vh],
        [Ob, 3, 108e5],
        [Ob, 6, 216e5],
        [Ob, 12, 432e5],
        [Bb, 1, th],
        [Bb, 2, 1728e5],
        [hb, 1, Jh],
        [ub, 1, eh],
        [ub, 3, 7776e6],
        [bb, 1, Nh]
      ];

      function Lb(ub, hb, Bb) {
        const Ob = Math.abs(hb - ub) / Bb,
          Gb = Xb((bb => {
            let [, , ub] = bb;
            return ub
          })).right(Ub, Ob);
        if (Gb === Ub.length) return bb.every(Hb(ub / Nh, hb / Nh, Bb));
        if (0 === Gb) return Ih.every(Math.max(Hb(ub, hb, Bb), 1));
        const [Lb, Yb] = Ub[Ob / Ub[Gb - 1][2] < Ub[Gb][2] / Ob ? Gb - 1 : Gb];
        return Lb.every(Yb)
      }
      return [function(bb, ub, hb) {
        const Bb = ub < bb;
        Bb && ([bb, ub] = [ub, bb]);
        const Ob = hb && "function" === typeof hb.range ? hb : Lb(bb, ub, hb),
          Gb = Ob ? Ob.range(bb, +ub + 1) : [];
        return Bb ? Gb.reverse() : Gb
      }, Lb]
    }
    const [AB, lB] = oB(pB, ZB, GB, kh, Vh, Eh), [KB, WB] = oB(XB, wB, ch, Fh, yh, qh);

    function CB(bb) {
      if (0 <= bb.y && bb.y < 100) {
        var ub = new Date(-1, bb.m, bb.d, bb.H, bb.M, bb.S, bb.L);
        return ub.setFullYear(bb.y), ub
      }
      return new Date(bb.y, bb.m, bb.d, bb.H, bb.M, bb.S, bb.L)
    }

    function dB(bb) {
      if (0 <= bb.y && bb.y < 100) {
        var ub = new Date(Date.UTC(-1, bb.m, bb.d, bb.H, bb.M, bb.S, bb.L));
        return ub.setUTCFullYear(bb.y), ub
      }
      return new Date(Date.UTC(bb.y, bb.m, bb.d, bb.H, bb.M, bb.S, bb.L))
    }

    function rB(bb, ub, hb) {
      return {
        y: bb,
        m: ub,
        d: hb,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var jB, nB, DB, xB = {
        "-": "",
        _: " ",
        0: "0"
      },
      zB = /^\s*\d+/,
      gB = /^%/,
      iB = /[\\^$*+?|[\]().{}]/g;

    function vB(bb, ub, hb) {
      var Bb = bb < 0 ? "-" : "",
        Ob = (Bb ? -bb : bb) + "",
        Gb = Ob.length;
      return Bb + (Gb < hb ? new Array(hb - Gb + 1).join(ub) + Ob : Ob)
    }

    function tB(bb) {
      return bb.replace(iB, "\\$&")
    }

    function JB(bb) {
      return new RegExp("^(?:" + bb.map(tB).join("|") + ")", "i")
    }

    function eB(bb) {
      return new Map(bb.map(((bb, ub) => [bb.toLowerCase(), ub])))
    }

    function NB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 1));
      return Bb ? (bb.w = +Bb[0], hb + Bb[0].length) : -1
    }

    function sB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 1));
      return Bb ? (bb.u = +Bb[0], hb + Bb[0].length) : -1
    }

    function MB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.U = +Bb[0], hb + Bb[0].length) : -1
    }

    function mB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.V = +Bb[0], hb + Bb[0].length) : -1
    }

    function IB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.W = +Bb[0], hb + Bb[0].length) : -1
    }

    function PB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 4));
      return Bb ? (bb.y = +Bb[0], hb + Bb[0].length) : -1
    }

    function qB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.y = +Bb[0] + (+Bb[0] > 68 ? 1900 : 2e3), hb + Bb[0].length) : -1
    }

    function EB(bb, ub, hb) {
      var Bb = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(ub.slice(hb, hb + 6));
      return Bb ? (bb.Z = Bb[1] ? 0 : -(Bb[2] + (Bb[3] || "00")), hb + Bb[0].length) : -1
    }

    function yB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 1));
      return Bb ? (bb.q = 3 * Bb[0] - 3, hb + Bb[0].length) : -1
    }

    function VB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.m = Bb[0] - 1, hb + Bb[0].length) : -1
    }

    function FB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.d = +Bb[0], hb + Bb[0].length) : -1
    }

    function fB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 3));
      return Bb ? (bb.m = 0, bb.d = +Bb[0], hb + Bb[0].length) : -1
    }

    function kB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.H = +Bb[0], hb + Bb[0].length) : -1
    }

    function TB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.M = +Bb[0], hb + Bb[0].length) : -1
    }

    function cB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 2));
      return Bb ? (bb.S = +Bb[0], hb + Bb[0].length) : -1
    }

    function QB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 3));
      return Bb ? (bb.L = +Bb[0], hb + Bb[0].length) : -1
    }

    function RB(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb, hb + 6));
      return Bb ? (bb.L = Math.floor(Bb[0] / 1e3), hb + Bb[0].length) : -1
    }

    function bO(bb, ub, hb) {
      var Bb = gB.exec(ub.slice(hb, hb + 1));
      return Bb ? hb + Bb[0].length : -1
    }

    function uO(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb));
      return Bb ? (bb.Q = +Bb[0], hb + Bb[0].length) : -1
    }

    function hO(bb, ub, hb) {
      var Bb = zB.exec(ub.slice(hb));
      return Bb ? (bb.s = +Bb[0], hb + Bb[0].length) : -1
    }

    function BO(bb, ub) {
      return vB(bb.getDate(), ub, 2)
    }

    function OO(bb, ub) {
      return vB(bb.getHours(), ub, 2)
    }

    function GO(bb, ub) {
      return vB(bb.getHours() % 12 || 12, ub, 2)
    }

    function UO(bb, ub) {
      return vB(1 + Fh.count(XB(bb), bb), ub, 3)
    }

    function LO(bb, ub) {
      return vB(bb.getMilliseconds(), ub, 3)
    }

    function YO(bb, ub) {
      return LO(bb, ub) + "000"
    }

    function SO(bb, ub) {
      return vB(bb.getMonth() + 1, ub, 2)
    }

    function aO(bb, ub) {
      return vB(bb.getMinutes(), ub, 2)
    }

    function HO(bb, ub) {
      return vB(bb.getSeconds(), ub, 2)
    }

    function wO(bb) {
      var ub = bb.getDay();
      return 0 === ub ? 7 : ub
    }

    function ZO(bb, ub) {
      return vB(ch.count(XB(bb) - 1, bb), ub, 2)
    }

    function XO(bb) {
      var ub = bb.getDay();
      return ub >= 4 || 0 === ub ? uB(bb) : uB.ceil(bb)
    }

    function pO(bb, ub) {
      return bb = XO(bb), vB(uB.count(XB(bb), bb) + (4 === XB(bb).getDay()), ub, 2)
    }

    function oO(bb) {
      return bb.getDay()
    }

    function AO(bb, ub) {
      return vB(Qh.count(XB(bb) - 1, bb), ub, 2)
    }

    function lO(bb, ub) {
      return vB(bb.getFullYear() % 100, ub, 2)
    }

    function KO(bb, ub) {
      return vB((bb = XO(bb)).getFullYear() % 100, ub, 2)
    }

    function WO(bb, ub) {
      return vB(bb.getFullYear() % 1e4, ub, 4)
    }

    function CO(bb, ub) {
      var hb = bb.getDay();
      return vB((bb = hb >= 4 || 0 === hb ? uB(bb) : uB.ceil(bb)).getFullYear() % 1e4, ub, 4)
    }

    function dO(bb) {
      var ub = bb.getTimezoneOffset();
      return (ub > 0 ? "-" : (ub *= -1, "+")) + vB(ub / 60 | 0, "0", 2) + vB(ub % 60, "0", 2)
    }

    function rO(bb, ub) {
      return vB(bb.getUTCDate(), ub, 2)
    }

    function jO(bb, ub) {
      return vB(bb.getUTCHours(), ub, 2)
    }

    function nO(bb, ub) {
      return vB(bb.getUTCHours() % 12 || 12, ub, 2)
    }

    function DO(bb, ub) {
      return vB(1 + fh.count(pB(bb), bb), ub, 3)
    }

    function xO(bb, ub) {
      return vB(bb.getUTCMilliseconds(), ub, 3)
    }

    function zO(bb, ub) {
      return xO(bb, ub) + "000"
    }

    function gO(bb, ub) {
      return vB(bb.getUTCMonth() + 1, ub, 2)
    }

    function iO(bb, ub) {
      return vB(bb.getUTCMinutes(), ub, 2)
    }

    function vO(bb, ub) {
      return vB(bb.getUTCSeconds(), ub, 2)
    }

    function tO(bb) {
      var ub = bb.getUTCDay();
      return 0 === ub ? 7 : ub
    }

    function JO(bb, ub) {
      return vB(GB.count(pB(bb) - 1, bb), ub, 2)
    }

    function eO(bb) {
      var ub = bb.getUTCDay();
      return ub >= 4 || 0 === ub ? SB(bb) : SB.ceil(bb)
    }

    function NO(bb, ub) {
      return bb = eO(bb), vB(SB.count(pB(bb), bb) + (4 === pB(bb).getUTCDay()), ub, 2)
    }

    function sO(bb) {
      return bb.getUTCDay()
    }

    function MO(bb, ub) {
      return vB(UB.count(pB(bb) - 1, bb), ub, 2)
    }

    function mO(bb, ub) {
      return vB(bb.getUTCFullYear() % 100, ub, 2)
    }

    function IO(bb, ub) {
      return vB((bb = eO(bb)).getUTCFullYear() % 100, ub, 2)
    }

    function PO(bb, ub) {
      return vB(bb.getUTCFullYear() % 1e4, ub, 4)
    }

    function qO(bb, ub) {
      var hb = bb.getUTCDay();
      return vB((bb = hb >= 4 || 0 === hb ? SB(bb) : SB.ceil(bb)).getUTCFullYear() % 1e4, ub, 4)
    }

    function EO() {
      return "+0000"
    }

    function yO() {
      return "%"
    }

    function VO(bb) {
      return +bb
    }

    function FO(bb) {
      return Math.floor(+bb / 1e3)
    }

    function fO(bb) {
      return new Date(bb)
    }

    function kO(bb) {
      return bb instanceof Date ? +bb : +new Date(+bb)
    }

    function TO(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
      var ab = xu(),
        Hb = ab.invert,
        wb = ab.domain,
        Zb = Sb(".%L"),
        Xb = Sb(":%S"),
        pb = Sb("%I:%M"),
        ob = Sb("%I %p"),
        Ab = Sb("%a %d"),
        lb = Sb("%b %d"),
        Kb = Sb("%B"),
        Wb = Sb("%Y");

      function Cb(bb) {
        return (Yb(bb) < bb ? Zb : Lb(bb) < bb ? Xb : Ub(bb) < bb ? pb : Gb(bb) < bb ? ob : Bb(bb) < bb ? Ob(bb) < bb ? Ab : lb : hb(bb) < bb ? Kb : Wb)(bb)
      }
      return ab.invert = function(bb) {
        return new Date(Hb(bb))
      }, ab.domain = function(bb) {
        return arguments.length ? wb(Array.from(bb, kO)) : wb().map(fO)
      }, ab.ticks = function(ub) {
        var hb = wb();
        return bb(hb[0], hb[hb.length - 1], null == ub ? 10 : ub)
      }, ab.tickFormat = function(bb, ub) {
        return null == ub ? Cb : Sb(ub)
      }, ab.nice = function(bb) {
        var hb = wb();
        return bb && "function" === typeof bb.range || (bb = ub(hb[0], hb[hb.length - 1], null == bb ? 10 : bb)), bb ? wb(Tu(hb, bb)) : ab
      }, ab.copy = function() {
        return nu(ab, TO(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb))
      }, ab
    }

    function cO() {
      return gu.e.apply(TO(KB, WB, XB, wB, ch, Fh, yh, qh, Ph, nB).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function QO() {
      return gu.e.apply(TO(AB, lB, pB, ZB, GB, fh, Vh, Eh, Ph, DB).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function RO() {
      var bb, ub, hb, Bb, Ob, Gb = 0,
        Ub = 1,
        Lb = Cu,
        Yb = !1;

      function Sb(ub) {
        return null == ub || isNaN(ub = +ub) ? Ob : Lb(0 === hb ? .5 : (ub = (Bb(ub) - bb) * hb, Yb ? Math.max(0, Math.min(1, ub)) : ub))
      }

      function ab(bb) {
        return function(ub) {
          var hb, Bb;
          return arguments.length ? ([hb, Bb] = ub, Lb = bb(hb, Bb), Sb) : [Lb(0), Lb(1)]
        }
      }
      return Sb.domain = function(Ob) {
          return arguments.length ? ([Gb, Ub] = Ob, bb = Bb(Gb = +Gb), ub = Bb(Ub = +Ub), hb = bb === ub ? 0 : 1 / (ub - bb), Sb) : [Gb, Ub]
        }, Sb.clamp = function(bb) {
          return arguments.length ? (Yb = !!bb, Sb) : Yb
        }, Sb.interpolator = function(bb) {
          return arguments.length ? (Lb = bb, Sb) : Lb
        }, Sb.range = ab(Au), Sb.rangeRound = ab(lu), Sb.unknown = function(bb) {
          return arguments.length ? (Ob = bb, Sb) : Ob
        },
        function(Ob) {
          return Bb = Ob, bb = Ob(Gb), ub = Ob(Ub), hb = bb === ub ? 0 : 1 / (ub - bb), Sb
        }
    }

    function bG(bb, ub) {
      return ub.domain(bb.domain()).interpolator(bb.interpolator()).clamp(bb.clamp()).unknown(bb.unknown())
    }

    function uG() {
      var bb = Fu(RO()(Cu));
      return bb.copy = function() {
        return bG(bb, uG())
      }, gu.b.apply(bb, arguments)
    }

    function hG() {
      var bb = Bh(RO()).domain([1, 10]);
      return bb.copy = function() {
        return bG(bb, hG()).base(bb.base())
      }, gu.b.apply(bb, arguments)
    }

    function BG() {
      var bb = Lh(RO());
      return bb.copy = function() {
        return bG(bb, BG()).constant(bb.constant())
      }, gu.b.apply(bb, arguments)
    }

    function OG() {
      var bb = Zh(RO());
      return bb.copy = function() {
        return bG(bb, OG()).exponent(bb.exponent())
      }, gu.b.apply(bb, arguments)
    }

    function GG() {
      return OG.apply(null, arguments).exponent(.5)
    }

    function UG() {
      var bb = [],
        ub = Cu;

      function hb(hb) {
        if (null != hb && !isNaN(hb = +hb)) return ub((Kb(bb, hb, 1) - 1) / (bb.length - 1))
      }
      return hb.domain = function(ub) {
        if (!arguments.length) return bb.slice();
        bb = [];
        for (let hb of ub) null == hb || isNaN(hb = +hb) || bb.push(hb);
        return bb.sort(wb), hb
      }, hb.interpolator = function(bb) {
        return arguments.length ? (ub = bb, hb) : ub
      }, hb.range = function() {
        return bb.map(((hb, Bb) => ub(Bb / (bb.length - 1))))
      }, hb.quantiles = function(ub) {
        return Array.from({
          length: ub + 1
        }, ((hb, Bb) => jh(bb, Bb / ub)))
      }, hb.copy = function() {
        return UG(ub).domain(bb)
      }, gu.b.apply(hb, arguments)
    }

    function LG() {
      var bb, ub, hb, Bb, Ob, Gb, Ub, Lb = 0,
        Yb = .5,
        Sb = 1,
        ab = 1,
        Hb = Cu,
        wb = !1;

      function Zb(bb) {
        return isNaN(bb = +bb) ? Ub : (bb = .5 + ((bb = +Gb(bb)) - ub) * (ab * bb < ab * ub ? Bb : Ob), Hb(wb ? Math.max(0, Math.min(1, bb)) : bb))
      }

      function Xb(bb) {
        return function(ub) {
          var hb, Bb, Ob;
          return arguments.length ? ([hb, Bb, Ob] = ub, Hb = function(bb, ub) {
            void 0 === ub && (ub = bb, bb = Au);
            for (var hb = 0, Bb = ub.length - 1, Ob = ub[0], Gb = new Array(Bb < 0 ? 0 : Bb); hb < Bb;) Gb[hb] = bb(Ob, Ob = ub[++hb]);
            return function(bb) {
              var ub = Math.max(0, Math.min(Bb - 1, Math.floor(bb *= Bb)));
              return Gb[ub](bb - ub)
            }
          }(bb, [hb, Bb, Ob]), Zb) : [Hb(0), Hb(.5), Hb(1)]
        }
      }
      return Zb.domain = function(Ub) {
          return arguments.length ? ([Lb, Yb, Sb] = Ub, bb = Gb(Lb = +Lb), ub = Gb(Yb = +Yb), hb = Gb(Sb = +Sb), Bb = bb === ub ? 0 : .5 / (ub - bb), Ob = ub === hb ? 0 : .5 / (hb - ub), ab = ub < bb ? -1 : 1, Zb) : [Lb, Yb, Sb]
        }, Zb.clamp = function(bb) {
          return arguments.length ? (wb = !!bb, Zb) : wb
        }, Zb.interpolator = function(bb) {
          return arguments.length ? (Hb = bb, Zb) : Hb
        }, Zb.range = Xb(Au), Zb.rangeRound = Xb(lu), Zb.unknown = function(bb) {
          return arguments.length ? (Ub = bb, Zb) : Ub
        },
        function(Ub) {
          return Gb = Ub, bb = Ub(Lb), ub = Ub(Yb), hb = Ub(Sb), Bb = bb === ub ? 0 : .5 / (ub - bb), Ob = ub === hb ? 0 : .5 / (hb - ub), ab = ub < bb ? -1 : 1, Zb
        }
    }

    function YG() {
      var bb = Fu(LG()(Cu));
      return bb.copy = function() {
        return bG(bb, YG())
      }, gu.b.apply(bb, arguments)
    }

    function SG() {
      var bb = Bh(LG()).domain([.1, 1, 10]);
      return bb.copy = function() {
        return bG(bb, SG()).base(bb.base())
      }, gu.b.apply(bb, arguments)
    }

    function aG() {
      var bb = Lh(LG());
      return bb.copy = function() {
        return bG(bb, aG()).constant(bb.constant())
      }, gu.b.apply(bb, arguments)
    }

    function HG() {
      var bb = Zh(LG());
      return bb.copy = function() {
        return bG(bb, HG()).exponent(bb.exponent())
      }, gu.b.apply(bb, arguments)
    }

    function wG() {
      return HG.apply(null, arguments).exponent(.5)
    }

    function ZG(bb, ub) {
      if ((Ob = bb.length) > 1)
        for (var hb, Bb, Ob, Gb = 1, Ub = bb[ub[0]], Lb = Ub.length; Gb < Ob; ++Gb)
          for (Bb = Ub, Ub = bb[ub[Gb]], hb = 0; hb < Lb; ++hb) Ub[hb][1] += Ub[hb][0] = isNaN(Bb[hb][1]) ? Bb[hb][0] : Bb[hb][1]
    }! function(bb) {
      jB = function(bb) {
        var ub = bb.dateTime,
          hb = bb.date,
          Bb = bb.time,
          Ob = bb.periods,
          Gb = bb.days,
          Ub = bb.shortDays,
          Lb = bb.months,
          Yb = bb.shortMonths,
          Sb = JB(Ob),
          ab = eB(Ob),
          Hb = JB(Gb),
          wb = eB(Gb),
          Zb = JB(Ub),
          Xb = eB(Ub),
          pb = JB(Lb),
          ob = eB(Lb),
          Ab = JB(Yb),
          lb = eB(Yb),
          Kb = {
            a: function(bb) {
              return Ub[bb.getDay()]
            },
            A: function(bb) {
              return Gb[bb.getDay()]
            },
            b: function(bb) {
              return Yb[bb.getMonth()]
            },
            B: function(bb) {
              return Lb[bb.getMonth()]
            },
            c: null,
            d: BO,
            e: BO,
            f: YO,
            g: KO,
            G: CO,
            H: OO,
            I: GO,
            j: UO,
            L: LO,
            m: SO,
            M: aO,
            p: function(bb) {
              return Ob[+(bb.getHours() >= 12)]
            },
            q: function(bb) {
              return 1 + ~~(bb.getMonth() / 3)
            },
            Q: VO,
            s: FO,
            S: HO,
            u: wO,
            U: ZO,
            V: pO,
            w: oO,
            W: AO,
            x: null,
            X: null,
            y: lO,
            Y: WO,
            Z: dO,
            "%": yO
          },
          Wb = {
            a: function(bb) {
              return Ub[bb.getUTCDay()]
            },
            A: function(bb) {
              return Gb[bb.getUTCDay()]
            },
            b: function(bb) {
              return Yb[bb.getUTCMonth()]
            },
            B: function(bb) {
              return Lb[bb.getUTCMonth()]
            },
            c: null,
            d: rO,
            e: rO,
            f: zO,
            g: IO,
            G: qO,
            H: jO,
            I: nO,
            j: DO,
            L: xO,
            m: gO,
            M: iO,
            p: function(bb) {
              return Ob[+(bb.getUTCHours() >= 12)]
            },
            q: function(bb) {
              return 1 + ~~(bb.getUTCMonth() / 3)
            },
            Q: VO,
            s: FO,
            S: vO,
            u: tO,
            U: JO,
            V: NO,
            w: sO,
            W: MO,
            x: null,
            X: null,
            y: mO,
            Y: PO,
            Z: EO,
            "%": yO
          },
          Cb = {
            a: function(bb, ub, hb) {
              var Bb = Zb.exec(ub.slice(hb));
              return Bb ? (bb.w = Xb.get(Bb[0].toLowerCase()), hb + Bb[0].length) : -1
            },
            A: function(bb, ub, hb) {
              var Bb = Hb.exec(ub.slice(hb));
              return Bb ? (bb.w = wb.get(Bb[0].toLowerCase()), hb + Bb[0].length) : -1
            },
            b: function(bb, ub, hb) {
              var Bb = Ab.exec(ub.slice(hb));
              return Bb ? (bb.m = lb.get(Bb[0].toLowerCase()), hb + Bb[0].length) : -1
            },
            B: function(bb, ub, hb) {
              var Bb = pb.exec(ub.slice(hb));
              return Bb ? (bb.m = ob.get(Bb[0].toLowerCase()), hb + Bb[0].length) : -1
            },
            c: function(bb, hb, Bb) {
              return jb(bb, ub, hb, Bb)
            },
            d: FB,
            e: FB,
            f: RB,
            g: qB,
            G: PB,
            H: kB,
            I: kB,
            j: fB,
            L: QB,
            m: VB,
            M: TB,
            p: function(bb, ub, hb) {
              var Bb = Sb.exec(ub.slice(hb));
              return Bb ? (bb.p = ab.get(Bb[0].toLowerCase()), hb + Bb[0].length) : -1
            },
            q: yB,
            Q: uO,
            s: hO,
            S: cB,
            u: sB,
            U: MB,
            V: mB,
            w: NB,
            W: IB,
            x: function(bb, ub, Bb) {
              return jb(bb, hb, ub, Bb)
            },
            X: function(bb, ub, hb) {
              return jb(bb, Bb, ub, hb)
            },
            y: qB,
            Y: PB,
            Z: EB,
            "%": bO
          };

        function db(bb, ub) {
          return function(hb) {
            var Bb, Ob, Gb, Ub = [],
              Lb = -1,
              Yb = 0,
              Sb = bb.length;
            for (hb instanceof Date || (hb = new Date(+hb)); ++Lb < Sb;) 37 === bb.charCodeAt(Lb) && (Ub.push(bb.slice(Yb, Lb)), null != (Ob = xB[Bb = bb.charAt(++Lb)]) ? Bb = bb.charAt(++Lb) : Ob = "e" === Bb ? " " : "0", (Gb = ub[Bb]) && (Bb = Gb(hb, Ob)), Ub.push(Bb), Yb = Lb + 1);
            return Ub.push(bb.slice(Yb, Lb)), Ub.join("")
          }
        }

        function rb(bb, ub) {
          return function(hb) {
            var Bb, Ob, Gb = rB(1900, void 0, 1);
            if (jb(Gb, bb, hb += "", 0) != hb.length) return null;
            if ("Q" in Gb) return new Date(Gb.Q);
            if ("s" in Gb) return new Date(1e3 * Gb.s + ("L" in Gb ? Gb.L : 0));
            if (ub && !("Z" in Gb) && (Gb.Z = 0), "p" in Gb && (Gb.H = Gb.H % 12 + 12 * Gb.p), void 0 === Gb.m && (Gb.m = "q" in Gb ? Gb.q : 0), "V" in Gb) {
              if (Gb.V < 1 || Gb.V > 53) return null;
              "w" in Gb || (Gb.w = 1), "Z" in Gb ? (Ob = (Bb = dB(rB(Gb.y, 0, 1))).getUTCDay(), Bb = Ob > 4 || 0 === Ob ? UB.ceil(Bb) : UB(Bb), Bb = fh.offset(Bb, 7 * (Gb.V - 1)), Gb.y = Bb.getUTCFullYear(), Gb.m = Bb.getUTCMonth(), Gb.d = Bb.getUTCDate() + (Gb.w + 6) % 7) : (Ob = (Bb = CB(rB(Gb.y, 0, 1))).getDay(), Bb = Ob > 4 || 0 === Ob ? Qh.ceil(Bb) : Qh(Bb), Bb = Fh.offset(Bb, 7 * (Gb.V - 1)), Gb.y = Bb.getFullYear(), Gb.m = Bb.getMonth(), Gb.d = Bb.getDate() + (Gb.w + 6) % 7)
            } else("W" in Gb || "U" in Gb) && ("w" in Gb || (Gb.w = "u" in Gb ? Gb.u % 7 : "W" in Gb ? 1 : 0), Ob = "Z" in Gb ? dB(rB(Gb.y, 0, 1)).getUTCDay() : CB(rB(Gb.y, 0, 1)).getDay(), Gb.m = 0, Gb.d = "W" in Gb ? (Gb.w + 6) % 7 + 7 * Gb.W - (Ob + 5) % 7 : Gb.w + 7 * Gb.U - (Ob + 6) % 7);
            return "Z" in Gb ? (Gb.H += Gb.Z / 100 | 0, Gb.M += Gb.Z % 100, dB(Gb)) : CB(Gb)
          }
        }

        function jb(bb, ub, hb, Bb) {
          for (var Ob, Gb, Ub = 0, Lb = ub.length, Yb = hb.length; Ub < Lb;) {
            if (Bb >= Yb) return -1;
            if (37 === (Ob = ub.charCodeAt(Ub++))) {
              if (Ob = ub.charAt(Ub++), !(Gb = Cb[Ob in xB ? ub.charAt(Ub++) : Ob]) || (Bb = Gb(bb, hb, Bb)) < 0) return -1
            } else if (Ob != hb.charCodeAt(Bb++)) return -1
          }
          return Bb
        }
        return Kb.x = db(hb, Kb), Kb.X = db(Bb, Kb), Kb.c = db(ub, Kb), Wb.x = db(hb, Wb), Wb.X = db(Bb, Wb), Wb.c = db(ub, Wb), {
          format: function(bb) {
            var ub = db(bb += "", Kb);
            return ub.toString = function() {
              return bb
            }, ub
          },
          parse: function(bb) {
            var ub = rb(bb += "", !1);
            return ub.toString = function() {
              return bb
            }, ub
          },
          utcFormat: function(bb) {
            var ub = db(bb += "", Wb);
            return ub.toString = function() {
              return bb
            }, ub
          },
          utcParse: function(bb) {
            var ub = rb(bb += "", !0);
            return ub.toString = function() {
              return bb
            }, ub
          }
        }
      }(bb), nB = jB.format, jB.parse, DB = jB.utcFormat, jB.utcParse
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
    var XG = hb(5949),
      pG = hb(5834);

    function oG(bb) {
      for (var ub = bb.length, hb = new Array(ub); --ub >= 0;) hb[ub] = ub;
      return hb
    }

    function AG(bb, ub) {
      return bb[ub]
    }

    function lG(bb) {
      const ub = [];
      return ub.key = bb, ub
    }
    var KG = hb(5894),
      WG = hb.n(KG),
      CG = hb(5912),
      dG = hb.n(CG),
      rG = hb(5175),
      jG = hb.n(rG),
      nG = hb(5019),
      DG = hb.n(nG),
      xG = hb(4921),
      zG = hb.n(xG),
      gG = hb(4940),
      iG = hb.n(gG),
      vG = hb(5917),
      tG = hb.n(vG),
      JG = hb(4930),
      eG = hb.n(JG),
      NG = hb(5791),
      sG = hb.n(NG),
      MG = hb(5923),
      mG = hb.n(MG),
      IG = hb(5253),
      PG = hb.n(IG),
      qG = hb(5929),
      EG = hb.n(qG);

    function yG(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return VG(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(bb)) return Array.from(bb)
      }(bb) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return VG(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return VG(bb, ub)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VG(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }
    var FG = function(bb) {
        return bb
      },
      fG = {
        "@@functional/placeholder": !0
      },
      kG = function(bb) {
        return bb === fG
      },
      TG = function(bb) {
        return function ub() {
          return 0 === arguments.length || 1 === arguments.length && kG(arguments.length <= 0 ? void 0 : arguments[0]) ? ub : bb.apply(void 0, arguments)
        }
      },
      cG = function bb(ub, hb) {
        return 1 === ub ? hb : TG((function() {
          for (var Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
          var Ub = Ob.filter((function(bb) {
            return bb !== fG
          })).length;
          return Ub >= ub ? hb.apply(void 0, Ob) : bb(ub - Ub, TG((function() {
            for (var bb = arguments.length, ub = new Array(bb), Bb = 0; Bb < bb; Bb++) ub[Bb] = arguments[Bb];
            var Gb = Ob.map((function(bb) {
              return kG(bb) ? ub.shift() : bb
            }));
            return hb.apply(void 0, yG(Gb).concat(ub))
          })))
        }))
      },
      QG = function(bb) {
        return cG(bb.length, bb)
      },
      RG = function(bb, ub) {
        for (var hb = [], Bb = bb; Bb < ub; ++Bb) hb[Bb - bb] = Bb;
        return hb
      },
      bU = QG((function(bb, ub) {
        return Array.isArray(ub) ? ub.map(bb) : Object.keys(ub).map((function(bb) {
          return ub[bb]
        })).map(bb)
      })),
      uU = function() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        if (!ub.length) return FG;
        var Bb = ub.reverse(),
          Ob = Bb[0],
          Gb = Bb.slice(1);
        return function() {
          return Gb.reduce((function(bb, ub) {
            return ub(bb)
          }), Ob.apply(void 0, arguments))
        }
      },
      hU = function(bb) {
        return Array.isArray(bb) ? bb.reverse() : bb.split("").reverse.join("")
      },
      BU = function(bb) {
        var ub = null,
          hb = null;
        return function() {
          for (var Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
          return ub && Ob.every((function(bb, hb) {
            return bb === ub[hb]
          })) ? hb : (ub = Ob, hb = bb.apply(void 0, Ob))
        }
      };
    const OU = {
      rangeStep: function(bb, ub, hb) {
        for (var Bb = new(EG())(bb), Ob = 0, Gb = []; Bb.lt(ub) && Ob < 1e5;) Gb.push(Bb.toNumber()), Bb = Bb.add(hb), Ob++;
        return Gb
      },
      getDigitCount: function(bb) {
        return 0 === bb ? 1 : Math.floor(new(EG())(bb).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: QG((function(bb, ub, hb) {
        var Bb = +bb;
        return Bb + hb * (+ub - Bb)
      })),
      uninterpolateNumber: QG((function(bb, ub, hb) {
        var Bb = ub - +bb;
        return (hb - bb) / (Bb = Bb || 1 / 0)
      })),
      uninterpolateTruncation: QG((function(bb, ub, hb) {
        var Bb = ub - +bb;
        return Bb = Bb || 1 / 0, Math.max(0, Math.min(1, (hb - bb) / Bb))
      }))
    };

    function GU(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return YU(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(bb)) return Array.from(bb)
      }(bb) || LU(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function UU(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(bb))) return;
        var hb = [],
          Bb = !0,
          Ob = !1,
          Gb = void 0;
        try {
          for (var Ub, Lb = bb[Symbol.iterator](); !(Bb = (Ub = Lb.next()).done) && (hb.push(Ub.value), !ub || hb.length !== ub); Bb = !0);
        } catch (Yb) {
          Ob = !0, Gb = Yb
        } finally {
          try {
            Bb || null == Lb.return || Lb.return()
          } finally {
            if (Ob) throw Gb
          }
        }
        return hb
      }(bb, ub) || LU(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LU(bb, ub) {
      if (bb) {
        if ("string" === typeof bb) return YU(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === hb && bb.constructor && (hb = bb.constructor.name), "Map" === hb || "Set" === hb ? Array.from(bb) : "Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb) ? YU(bb, ub) : void 0
      }
    }

    function YU(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function SU(bb) {
      var ub = UU(bb, 2),
        hb = ub[0],
        Bb = ub[1],
        Ob = hb,
        Gb = Bb;
      return hb > Bb && (Ob = Bb, Gb = hb), [Ob, Gb]
    }

    function aU(bb, ub, hb) {
      if (bb.lte(0)) return new(EG())(0);
      var Bb = OU.getDigitCount(bb.toNumber()),
        Ob = new(EG())(10).pow(Bb),
        Gb = bb.div(Ob),
        Ub = 1 !== Bb ? .05 : .1,
        Lb = new(EG())(Math.ceil(Gb.div(Ub).toNumber())).add(hb).mul(Ub).mul(Ob);
      return ub ? Lb : new(EG())(Math.ceil(Lb))
    }

    function HU(bb, ub, hb) {
      var Bb = 1,
        Ob = new(EG())(bb);
      if (!Ob.isint() && hb) {
        var Gb = Math.abs(bb);
        Gb < 1 ? (Bb = new(EG())(10).pow(OU.getDigitCount(bb) - 1), Ob = new(EG())(Math.floor(Ob.div(Bb).toNumber())).mul(Bb)) : Gb > 1 && (Ob = new(EG())(Math.floor(bb)))
      } else 0 === bb ? Ob = new(EG())(Math.floor((ub - 1) / 2)) : hb || (Ob = new(EG())(Math.floor(bb)));
      var Ub = Math.floor((ub - 1) / 2);
      return uU(bU((function(bb) {
        return Ob.add(new(EG())(bb - Ub).mul(Bb)).toNumber()
      })), RG)(0, ub)
    }

    function wU(bb, ub, hb, Bb) {
      var Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((ub - bb) / (hb - 1))) return {
        step: new(EG())(0),
        tickMin: new(EG())(0),
        tickMax: new(EG())(0)
      };
      var Gb, Ub = aU(new(EG())(ub).sub(bb).div(hb - 1), Bb, Ob);
      Gb = bb <= 0 && ub >= 0 ? new(EG())(0) : (Gb = new(EG())(bb).add(ub).div(2)).sub(new(EG())(Gb).mod(Ub));
      var Lb = Math.ceil(Gb.sub(bb).div(Ub).toNumber()),
        Yb = Math.ceil(new(EG())(ub).sub(Gb).div(Ub).toNumber()),
        Sb = Lb + Yb + 1;
      return Sb > hb ? wU(bb, ub, hb, Bb, Ob + 1) : (Sb < hb && (Yb = ub > 0 ? Yb + (hb - Sb) : Yb, Lb = ub > 0 ? Lb : Lb + (hb - Sb)), {
        step: Ub,
        tickMin: Gb.sub(new(EG())(Lb).mul(Ub)),
        tickMax: Gb.add(new(EG())(Yb).mul(Ub))
      })
    }
    var ZU = BU((function(bb) {
        var ub = UU(bb, 2),
          hb = ub[0],
          Bb = ub[1],
          Ob = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Gb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ub = Math.max(Ob, 2),
          Lb = UU(SU([hb, Bb]), 2),
          Yb = Lb[0],
          Sb = Lb[1];
        if (Yb === -1 / 0 || Sb === 1 / 0) {
          var ab = Sb === 1 / 0 ? [Yb].concat(GU(RG(0, Ob - 1).map((function() {
            return 1 / 0
          })))) : [].concat(GU(RG(0, Ob - 1).map((function() {
            return -1 / 0
          }))), [Sb]);
          return hb > Bb ? hU(ab) : ab
        }
        if (Yb === Sb) return HU(Yb, Ob, Gb);
        var Hb = wU(Yb, Sb, Ub, Gb),
          wb = Hb.step,
          Zb = Hb.tickMin,
          Xb = Hb.tickMax,
          pb = OU.rangeStep(Zb, Xb.add(new(EG())(.1).mul(wb)), wb);
        return hb > Bb ? hU(pb) : pb
      })),
      XU = (BU((function(bb) {
        var ub = UU(bb, 2),
          hb = ub[0],
          Bb = ub[1],
          Ob = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Gb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ub = Math.max(Ob, 2),
          Lb = UU(SU([hb, Bb]), 2),
          Yb = Lb[0],
          Sb = Lb[1];
        if (Yb === -1 / 0 || Sb === 1 / 0) return [hb, Bb];
        if (Yb === Sb) return HU(Yb, Ob, Gb);
        var ab = aU(new(EG())(Sb).sub(Yb).div(Ub - 1), Gb, 0),
          Hb = uU(bU((function(bb) {
            return new(EG())(Yb).add(new(EG())(bb).mul(ab)).toNumber()
          })), RG)(0, Ub).filter((function(bb) {
            return bb >= Yb && bb <= Sb
          }));
        return hb > Bb ? hU(Hb) : Hb
      })), BU((function(bb, ub) {
        var hb = UU(bb, 2),
          Bb = hb[0],
          Ob = hb[1],
          Gb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Ub = UU(SU([Bb, Ob]), 2),
          Lb = Ub[0],
          Yb = Ub[1];
        if (Lb === -1 / 0 || Yb === 1 / 0) return [Bb, Ob];
        if (Lb === Yb) return [Lb];
        var Sb = Math.max(ub, 2),
          ab = aU(new(EG())(Yb).sub(Lb).div(Sb - 1), Gb, 0),
          Hb = [].concat(GU(OU.rangeStep(new(EG())(Lb), new(EG())(Yb).sub(new(EG())(.99).mul(ab)), ab)), [Yb]);
        return Bb > Ob ? hU(Hb) : Hb
      }))),
      pU = hb(5937),
      oU = hb(4918),
      AU = hb(5181),
      lU = hb(5942);

    function KU(bb) {
      return KU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, KU(bb)
    }

    function WU(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return CU(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ub) {
        if (!bb) return;
        if ("string" === typeof bb) return CU(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === hb && bb.constructor && (hb = bb.constructor.name);
        if ("Map" === hb || "Set" === hb) return Array.from(bb);
        if ("Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb)) return CU(bb, ub)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CU(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function dU(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function rU(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? dU(Object(hb), !0).forEach((function(ub) {
          jU(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : dU(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function jU(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != KU(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != KU(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == KU(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function nU(bb, ub, hb) {
      return jG()(bb) || jG()(ub) ? hb : (0, oU.x)(ub) ? iG()(bb, ub, hb) : DG()(ub) ? ub(bb) : hb
    }

    function DU(bb, ub, hb, Bb) {
      var Ob = tG()(bb, (function(bb) {
        return nU(bb, ub)
      }));
      if ("number" === hb) {
        var Gb = Ob.filter((function(bb) {
          return (0, oU.z)(bb) || parseFloat(bb)
        }));
        return Gb.length ? [dG()(Gb), WG()(Gb)] : [1 / 0, -1 / 0]
      }
      return (Bb ? Ob.filter((function(bb) {
        return !jG()(bb)
      })) : Ob).map((function(bb) {
        return (0, oU.x)(bb) || bb instanceof Date ? bb : ""
      }))
    }
    var xU = function(bb) {
        var ub, hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Bb = arguments.length > 2 ? arguments[2] : void 0,
          Ob = arguments.length > 3 ? arguments[3] : void 0,
          Gb = -1,
          Ub = null !== (ub = null === hb || void 0 === hb ? void 0 : hb.length) && void 0 !== ub ? ub : 0;
        if (Ub <= 1) return 0;
        if (Ob && "angleAxis" === Ob.axisType && Math.abs(Math.abs(Ob.range[1] - Ob.range[0]) - 360) <= 1e-6)
          for (var Lb = Ob.range, Yb = 0; Yb < Ub; Yb++) {
            var Sb = Yb > 0 ? Bb[Yb - 1].coordinate : Bb[Ub - 1].coordinate,
              ab = Bb[Yb].coordinate,
              Hb = Yb >= Ub - 1 ? Bb[0].coordinate : Bb[Yb + 1].coordinate,
              wb = void 0;
            if ((0, oU.E)(ab - Sb) !== (0, oU.E)(Hb - ab)) {
              var Zb = [];
              if ((0, oU.E)(Hb - ab) === (0, oU.E)(Lb[1] - Lb[0])) {
                wb = Hb;
                var Xb = ab + Lb[1] - Lb[0];
                Zb[0] = Math.min(Xb, (Xb + Sb) / 2), Zb[1] = Math.max(Xb, (Xb + Sb) / 2)
              } else {
                wb = Sb;
                var pb = Hb + Lb[1] - Lb[0];
                Zb[0] = Math.min(ab, (pb + ab) / 2), Zb[1] = Math.max(ab, (pb + ab) / 2)
              }
              var ob = [Math.min(ab, (wb + ab) / 2), Math.max(ab, (wb + ab) / 2)];
              if (bb > ob[0] && bb <= ob[1] || bb >= Zb[0] && bb <= Zb[1]) {
                Gb = Bb[Yb].index;
                break
              }
            } else {
              var Ab = Math.min(Sb, Hb),
                lb = Math.max(Sb, Hb);
              if (bb > (Ab + ab) / 2 && bb <= (lb + ab) / 2) {
                Gb = Bb[Yb].index;
                break
              }
            }
          } else
            for (var Kb = 0; Kb < Ub; Kb++)
              if (0 === Kb && bb <= (hb[Kb].coordinate + hb[Kb + 1].coordinate) / 2 || Kb > 0 && Kb < Ub - 1 && bb > (hb[Kb].coordinate + hb[Kb - 1].coordinate) / 2 && bb <= (hb[Kb].coordinate + hb[Kb + 1].coordinate) / 2 || Kb === Ub - 1 && bb > (hb[Kb].coordinate + hb[Kb - 1].coordinate) / 2) {
                Gb = hb[Kb].index;
                break
              } return Gb
      },
      zU = function(bb) {
        var ub, hb, Bb = bb.type.displayName,
          Ob = null !== (ub = bb.type) && void 0 !== ub && ub.defaultProps ? rU(rU({}, bb.type.defaultProps), bb.props) : bb.props,
          Gb = Ob.stroke,
          Ub = Ob.fill;
        switch (Bb) {
          case "Line":
            hb = Gb;
            break;
          case "Area":
          case "Radar":
            hb = Gb && "none" !== Gb ? Gb : Ub;
            break;
          default:
            hb = Ub
        }
        return hb
      },
      gU = function(bb) {
        var ub = bb.barSize,
          hb = bb.totalSize,
          Bb = bb.stackGroups,
          Ob = void 0 === Bb ? {} : Bb;
        if (!Ob) return {};
        for (var Gb = {}, Ub = Object.keys(Ob), Lb = 0, Yb = Ub.length; Lb < Yb; Lb++)
          for (var Sb = Ob[Ub[Lb]].stackGroups, ab = Object.keys(Sb), Hb = 0, wb = ab.length; Hb < wb; Hb++) {
            var Zb = Sb[ab[Hb]],
              Xb = Zb.items,
              pb = Zb.cateAxisId,
              ob = Xb.filter((function(bb) {
                return (0, AU.g)(bb.type).indexOf("Bar") >= 0
              }));
            if (ob && ob.length) {
              var Ab = ob[0].type.defaultProps,
                lb = void 0 !== Ab ? rU(rU({}, Ab), ob[0].props) : ob[0].props,
                Kb = lb.barSize,
                Wb = lb[pb];
              Gb[Wb] || (Gb[Wb] = []);
              var Cb = jG()(Kb) ? ub : Kb;
              Gb[Wb].push({
                item: ob[0],
                stackList: ob.slice(1),
                barSize: jG()(Cb) ? void 0 : (0, oU.m)(Cb, hb, 0)
              })
            }
          }
        return Gb
      },
      iU = function(bb) {
        var ub = bb.barGap,
          hb = bb.barCategoryGap,
          Bb = bb.bandSize,
          Ob = bb.sizeList,
          Gb = void 0 === Ob ? [] : Ob,
          Ub = bb.maxBarSize,
          Lb = Gb.length;
        if (Lb < 1) return null;
        var Yb, Sb = (0, oU.m)(ub, Bb, 0, !0),
          ab = [];
        if (Gb[0].barSize === +Gb[0].barSize) {
          var Hb = !1,
            wb = Bb / Lb,
            Zb = Gb.reduce((function(bb, ub) {
              return bb + ub.barSize || 0
            }), 0);
          (Zb += (Lb - 1) * Sb) >= Bb && (Zb -= (Lb - 1) * Sb, Sb = 0), Zb >= Bb && wb > 0 && (Hb = !0, Zb = Lb * (wb *= .9));
          var Xb = {
            offset: ((Bb - Zb) / 2 | 0) - Sb,
            size: 0
          };
          Yb = Gb.reduce((function(bb, ub) {
            var hb = {
                item: ub.item,
                position: {
                  offset: Xb.offset + Xb.size + Sb,
                  size: Hb ? wb : ub.barSize
                }
              },
              Bb = [].concat(WU(bb), [hb]);
            return Xb = Bb[Bb.length - 1].position, ub.stackList && ub.stackList.length && ub.stackList.forEach((function(bb) {
              Bb.push({
                item: bb,
                position: Xb
              })
            })), Bb
          }), ab)
        } else {
          var pb = (0, oU.m)(hb, Bb, 0, !0);
          Bb - 2 * pb - (Lb - 1) * Sb <= 0 && (Sb = 0);
          var ob = (Bb - 2 * pb - (Lb - 1) * Sb) / Lb;
          ob > 1 && (ob >>= 0);
          var Ab = Ub === +Ub ? Math.min(ob, Ub) : ob;
          Yb = Gb.reduce((function(bb, ub, hb) {
            var Bb = [].concat(WU(bb), [{
              item: ub.item,
              position: {
                offset: pb + (ob + Sb) * hb + (ob - Ab) / 2,
                size: Ab
              }
            }]);
            return ub.stackList && ub.stackList.length && ub.stackList.forEach((function(bb) {
              Bb.push({
                item: bb,
                position: Bb[Bb.length - 1].position
              })
            })), Bb
          }), ab)
        }
        return Yb
      },
      vU = function(bb, ub, hb, Bb) {
        var Ob = hb.children,
          Gb = hb.width,
          Ub = hb.margin,
          Lb = Gb - (Ub.left || 0) - (Ub.right || 0),
          Yb = (0, lU.d)({
            children: Ob,
            legendWidth: Lb
          });
        if (Yb) {
          var Sb = Bb || {},
            ab = Sb.width,
            Hb = Sb.height,
            wb = Yb.align,
            Zb = Yb.verticalAlign,
            Xb = Yb.layout;
          if (("vertical" === Xb || "horizontal" === Xb && "middle" === Zb) && "center" !== wb && (0, oU.z)(bb[wb])) return rU(rU({}, bb), {}, jU({}, wb, bb[wb] + (ab || 0)));
          if (("horizontal" === Xb || "vertical" === Xb && "center" === wb) && "middle" !== Zb && (0, oU.z)(bb[Zb])) return rU(rU({}, bb), {}, jU({}, Zb, bb[Zb] + (Hb || 0)))
        }
        return bb
      },
      tU = function(bb, ub, hb, Bb, Ob) {
        var Gb = ub.props.children,
          Ub = (0, AU.c)(Gb, pU.e).filter((function(bb) {
            return function(bb, ub, hb) {
              return !!jG()(ub) || ("horizontal" === bb ? "yAxis" === ub : "vertical" === bb || "x" === hb ? "xAxis" === ub : "y" !== hb || "yAxis" === ub)
            }(Bb, Ob, bb.props.direction)
          }));
        if (Ub && Ub.length) {
          var Lb = Ub.map((function(bb) {
            return bb.props.dataKey
          }));
          return bb.reduce((function(bb, ub) {
            var Bb = nU(ub, hb);
            if (jG()(Bb)) return bb;
            var Ob = Array.isArray(Bb) ? [dG()(Bb), WG()(Bb)] : [Bb, Bb],
              Gb = Lb.reduce((function(bb, hb) {
                var Bb = nU(ub, hb, 0),
                  Gb = Ob[0] - Math.abs(Array.isArray(Bb) ? Bb[0] : Bb),
                  Ub = Ob[1] + Math.abs(Array.isArray(Bb) ? Bb[1] : Bb);
                return [Math.min(Gb, bb[0]), Math.max(Ub, bb[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(Gb[0], bb[0]), Math.max(Gb[1], bb[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      JU = function(bb, ub, hb, Bb, Ob) {
        var Gb = ub.map((function(ub) {
          return tU(bb, ub, hb, Ob, Bb)
        })).filter((function(bb) {
          return !jG()(bb)
        }));
        return Gb && Gb.length ? Gb.reduce((function(bb, ub) {
          return [Math.min(bb[0], ub[0]), Math.max(bb[1], ub[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      eU = function(bb, ub, hb, Bb, Ob) {
        var Gb = ub.map((function(ub) {
          var Gb = ub.props.dataKey;
          return "number" === hb && Gb && tU(bb, ub, Gb, Bb) || DU(bb, Gb, hb, Ob)
        }));
        if ("number" === hb) return Gb.reduce((function(bb, ub) {
          return [Math.min(bb[0], ub[0]), Math.max(bb[1], ub[1])]
        }), [1 / 0, -1 / 0]);
        var Ub = {};
        return Gb.reduce((function(bb, ub) {
          for (var hb = 0, Bb = ub.length; hb < Bb; hb++) Ub[ub[hb]] || (Ub[ub[hb]] = !0, bb.push(ub[hb]));
          return bb
        }), [])
      },
      NU = function(bb, ub) {
        return "horizontal" === bb && "xAxis" === ub || "vertical" === bb && "yAxis" === ub || "centric" === bb && "angleAxis" === ub || "radial" === bb && "radiusAxis" === ub
      },
      sU = function(bb, ub, hb, Bb) {
        if (Bb) return bb.map((function(bb) {
          return bb.coordinate
        }));
        var Ob, Gb, Ub = bb.map((function(bb) {
          return bb.coordinate === ub && (Ob = !0), bb.coordinate === hb && (Gb = !0), bb.coordinate
        }));
        return Ob || Ub.push(ub), Gb || Ub.push(hb), Ub
      },
      MU = function(bb, ub, hb) {
        if (!bb) return null;
        var Bb = bb.scale,
          Ob = bb.duplicateDomain,
          Gb = bb.type,
          Ub = bb.range,
          Lb = "scaleBand" === bb.realScaleType ? Bb.bandwidth() / 2 : 2,
          Yb = (ub || hb) && "category" === Gb && Bb.bandwidth ? Bb.bandwidth() / Lb : 0;
        return Yb = "angleAxis" === bb.axisType && (null === Ub || void 0 === Ub ? void 0 : Ub.length) >= 2 ? 2 * (0, oU.E)(Ub[0] - Ub[1]) * Yb : Yb, ub && (bb.ticks || bb.niceTicks) ? (bb.ticks || bb.niceTicks).map((function(bb) {
          var ub = Ob ? Ob.indexOf(bb) : bb;
          return {
            coordinate: Bb(ub) + Yb,
            value: bb,
            offset: Yb
          }
        })).filter((function(bb) {
          return !eG()(bb.coordinate)
        })) : bb.isCategorical && bb.categoricalDomain ? bb.categoricalDomain.map((function(bb, ub) {
          return {
            coordinate: Bb(bb) + Yb,
            value: bb,
            index: ub,
            offset: Yb
          }
        })) : Bb.ticks && !hb ? Bb.ticks(bb.tickCount).map((function(bb) {
          return {
            coordinate: Bb(bb) + Yb,
            value: bb,
            offset: Yb
          }
        })) : Bb.domain().map((function(bb, ub) {
          return {
            coordinate: Bb(bb) + Yb,
            value: Ob ? Ob[bb] : bb,
            index: ub,
            offset: Yb
          }
        }))
      },
      mU = new WeakMap,
      IU = function(bb, ub) {
        if ("function" !== typeof ub) return bb;
        mU.has(bb) || mU.set(bb, new WeakMap);
        var hb = mU.get(bb);
        if (hb.has(ub)) return hb.get(ub);
        var Bb = function() {
          bb.apply(void 0, arguments), ub.apply(void 0, arguments)
        };
        return hb.set(ub, Bb), Bb
      },
      PU = function(bb, ub, hb) {
        var Gb = bb.scale,
          Ub = bb.type,
          Lb = bb.layout,
          Yb = bb.axisType;
        if ("auto" === Gb) return "radial" === Lb && "radiusAxis" === Yb ? {
          scale: Ob.c(),
          realScaleType: "band"
        } : "radial" === Lb && "angleAxis" === Yb ? {
          scale: fu(),
          realScaleType: "linear"
        } : "category" === Ub && ub && (ub.indexOf("LineChart") >= 0 || ub.indexOf("AreaChart") >= 0 || ub.indexOf("ComposedChart") >= 0 && !hb) ? {
          scale: Ob.g(),
          realScaleType: "point"
        } : "category" === Ub ? {
          scale: Ob.c(),
          realScaleType: "band"
        } : {
          scale: fu(),
          realScaleType: "linear"
        };
        if (zG()(Gb)) {
          var Sb = "scale".concat(sG()(Gb));
          return {
            scale: (Bb[Sb] || Ob.g)(),
            realScaleType: Bb[Sb] ? Sb : "point"
          }
        }
        return DG()(Gb) ? {
          scale: Gb
        } : {
          scale: Ob.g(),
          realScaleType: "point"
        }
      },
      qU = 1e-4,
      EU = function(bb) {
        var ub = bb.domain();
        if (ub && !(ub.length <= 2)) {
          var hb = ub.length,
            Bb = bb.range(),
            Ob = Math.min(Bb[0], Bb[1]) - qU,
            Gb = Math.max(Bb[0], Bb[1]) + qU,
            Ub = bb(ub[0]),
            Lb = bb(ub[hb - 1]);
          (Ub < Ob || Ub > Gb || Lb < Ob || Lb > Gb) && bb.domain([ub[0], ub[hb - 1]])
        }
      },
      yU = function(bb, ub) {
        if (!bb) return null;
        for (var hb = 0, Bb = bb.length; hb < Bb; hb++)
          if (bb[hb].item === ub) return bb[hb].position;
        return null
      },
      VU = function(bb, ub) {
        if (!ub || 2 !== ub.length || !(0, oU.z)(ub[0]) || !(0, oU.z)(ub[1])) return bb;
        var hb = Math.min(ub[0], ub[1]),
          Bb = Math.max(ub[0], ub[1]),
          Ob = [bb[0], bb[1]];
        return (!(0, oU.z)(bb[0]) || bb[0] < hb) && (Ob[0] = hb), (!(0, oU.z)(bb[1]) || bb[1] > Bb) && (Ob[1] = Bb), Ob[0] > Bb && (Ob[0] = Bb), Ob[1] < hb && (Ob[1] = hb), Ob
      },
      FU = {
        sign: function(bb) {
          var ub = bb.length;
          if (!(ub <= 0))
            for (var hb = 0, Bb = bb[0].length; hb < Bb; ++hb)
              for (var Ob = 0, Gb = 0, Ub = 0; Ub < ub; ++Ub) {
                var Lb = eG()(bb[Ub][hb][1]) ? bb[Ub][hb][0] : bb[Ub][hb][1];
                Lb >= 0 ? (bb[Ub][hb][0] = Ob, bb[Ub][hb][1] = Ob + Lb, Ob = bb[Ub][hb][1]) : (bb[Ub][hb][0] = Gb, bb[Ub][hb][1] = Gb + Lb, Gb = bb[Ub][hb][1])
              }
        },
        expand: function(bb, ub) {
          if ((Bb = bb.length) > 0) {
            for (var hb, Bb, Ob, Gb = 0, Ub = bb[0].length; Gb < Ub; ++Gb) {
              for (Ob = hb = 0; hb < Bb; ++hb) Ob += bb[hb][Gb][1] || 0;
              if (Ob)
                for (hb = 0; hb < Bb; ++hb) bb[hb][Gb][1] /= Ob
            }
            ZG(bb, ub)
          }
        },
        none: ZG,
        silhouette: function(bb, ub) {
          if ((hb = bb.length) > 0) {
            for (var hb, Bb = 0, Ob = bb[ub[0]], Gb = Ob.length; Bb < Gb; ++Bb) {
              for (var Ub = 0, Lb = 0; Ub < hb; ++Ub) Lb += bb[Ub][Bb][1] || 0;
              Ob[Bb][1] += Ob[Bb][0] = -Lb / 2
            }
            ZG(bb, ub)
          }
        },
        wiggle: function(bb, ub) {
          if ((Ob = bb.length) > 0 && (Bb = (hb = bb[ub[0]]).length) > 0) {
            for (var hb, Bb, Ob, Gb = 0, Ub = 1; Ub < Bb; ++Ub) {
              for (var Lb = 0, Yb = 0, Sb = 0; Lb < Ob; ++Lb) {
                for (var ab = bb[ub[Lb]], Hb = ab[Ub][1] || 0, wb = (Hb - (ab[Ub - 1][1] || 0)) / 2, Zb = 0; Zb < Lb; ++Zb) {
                  var Xb = bb[ub[Zb]];
                  wb += (Xb[Ub][1] || 0) - (Xb[Ub - 1][1] || 0)
                }
                Yb += Hb, Sb += wb * Hb
              }
              hb[Ub - 1][1] += hb[Ub - 1][0] = Gb, Yb && (Gb -= Sb / Yb)
            }
            hb[Ub - 1][1] += hb[Ub - 1][0] = Gb, ZG(bb, ub)
          }
        },
        positive: function(bb) {
          var ub = bb.length;
          if (!(ub <= 0))
            for (var hb = 0, Bb = bb[0].length; hb < Bb; ++hb)
              for (var Ob = 0, Gb = 0; Gb < ub; ++Gb) {
                var Ub = eG()(bb[Gb][hb][1]) ? bb[Gb][hb][0] : bb[Gb][hb][1];
                Ub >= 0 ? (bb[Gb][hb][0] = Ob, bb[Gb][hb][1] = Ob + Ub, Ob = bb[Gb][hb][1]) : (bb[Gb][hb][0] = 0, bb[Gb][hb][1] = 0)
              }
        }
      },
      fU = function(bb, ub, hb) {
        var Bb = ub.map((function(bb) {
            return bb.props.dataKey
          })),
          Ob = FU[hb],
          Gb = function() {
            var bb = (0, pG.d)([]),
              ub = oG,
              hb = ZG,
              Bb = AG;

            function Ob(Ob) {
              var Gb, Ub, Lb = Array.from(bb.apply(this, arguments), lG),
                Yb = Lb.length,
                Sb = -1;
              for (const bb of Ob)
                for (Gb = 0, ++Sb; Gb < Yb; ++Gb)(Lb[Gb][Sb] = [0, +Bb(bb, Lb[Gb].key, Sb, Ob)]).data = bb;
              for (Gb = 0, Ub = (0, XG.d)(ub(Lb)); Gb < Yb; ++Gb) Lb[Ub[Gb]].index = Gb;
              return hb(Lb, Ub), Lb
            }
            return Ob.keys = function(ub) {
              return arguments.length ? (bb = "function" === typeof ub ? ub : (0, pG.d)(Array.from(ub)), Ob) : bb
            }, Ob.value = function(bb) {
              return arguments.length ? (Bb = "function" === typeof bb ? bb : (0, pG.d)(+bb), Ob) : Bb
            }, Ob.order = function(bb) {
              return arguments.length ? (ub = null == bb ? oG : "function" === typeof bb ? bb : (0, pG.d)(Array.from(bb)), Ob) : ub
            }, Ob.offset = function(bb) {
              return arguments.length ? (hb = null == bb ? ZG : bb, Ob) : hb
            }, Ob
          }().keys(Bb).value((function(bb, ub) {
            return +nU(bb, ub, 0)
          })).order(oG).offset(Ob);
        return Gb(bb)
      },
      kU = function(bb, ub, hb, Bb, Ob, Gb) {
        if (!bb) return null;
        var Ub = (Gb ? ub.reverse() : ub).reduce((function(bb, ub) {
          var Ob, Gb = null !== (Ob = ub.type) && void 0 !== Ob && Ob.defaultProps ? rU(rU({}, ub.type.defaultProps), ub.props) : ub.props,
            Ub = Gb.stackId;
          if (Gb.hide) return bb;
          var Lb = Gb[hb],
            Yb = bb[Lb] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, oU.x)(Ub)) {
            var Sb = Yb.stackGroups[Ub] || {
              numericAxisId: hb,
              cateAxisId: Bb,
              items: []
            };
            Sb.items.push(ub), Yb.hasStack = !0, Yb.stackGroups[Ub] = Sb
          } else Yb.stackGroups[(0, oU.G)("_stackId_")] = {
            numericAxisId: hb,
            cateAxisId: Bb,
            items: [ub]
          };
          return rU(rU({}, bb), {}, jU({}, Lb, Yb))
        }), {});
        return Object.keys(Ub).reduce((function(ub, Gb) {
          var Lb = Ub[Gb];
          if (Lb.hasStack) {
            Lb.stackGroups = Object.keys(Lb.stackGroups).reduce((function(ub, Gb) {
              var Ub = Lb.stackGroups[Gb];
              return rU(rU({}, ub), {}, jU({}, Gb, {
                numericAxisId: hb,
                cateAxisId: Bb,
                items: Ub.items,
                stackedData: fU(bb, Ub.items, Ob)
              }))
            }), {})
          }
          return rU(rU({}, ub), {}, jU({}, Gb, Lb))
        }), {})
      },
      TU = function(bb, ub) {
        var hb = ub.realScaleType,
          Bb = ub.type,
          Ob = ub.tickCount,
          Gb = ub.originalDomain,
          Ub = ub.allowDecimals,
          Lb = hb || ub.scale;
        if ("auto" !== Lb && "linear" !== Lb) return null;
        if (Ob && "number" === Bb && Gb && ("auto" === Gb[0] || "auto" === Gb[1])) {
          var Yb = bb.domain();
          if (!Yb.length) return null;
          var Sb = ZU(Yb, Ob, Ub);
          return bb.domain([dG()(Sb), WG()(Sb)]), {
            niceTicks: Sb
          }
        }
        if (Ob && "number" === Bb) {
          var ab = bb.domain();
          return {
            niceTicks: XU(ab, Ob, Ub)
          }
        }
        return null
      };

    function cU(bb) {
      var ub = bb.axis,
        hb = bb.ticks,
        Bb = bb.bandSize,
        Ob = bb.entry,
        Gb = bb.index,
        Ub = bb.dataKey;
      if ("category" === ub.type) {
        if (!ub.allowDuplicatedCategory && ub.dataKey && !jG()(Ob[ub.dataKey])) {
          var Lb = (0, oU.i)(hb, "value", Ob[ub.dataKey]);
          if (Lb) return Lb.coordinate + Bb / 2
        }
        return hb[Gb] ? hb[Gb].coordinate + Bb / 2 : null
      }
      var Yb = nU(Ob, jG()(Ub) ? ub.dataKey : Ub);
      return jG()(Yb) ? null : ub.scale(Yb)
    }
    var QU = function(bb) {
        var ub = bb.axis,
          hb = bb.ticks,
          Bb = bb.offset,
          Ob = bb.bandSize,
          Gb = bb.entry,
          Ub = bb.index;
        if ("category" === ub.type) return hb[Ub] ? hb[Ub].coordinate + Bb : null;
        var Lb = nU(Gb, ub.dataKey, ub.domain[Ub]);
        return jG()(Lb) ? null : ub.scale(Lb) - Ob / 2 + Bb
      },
      RU = function(bb) {
        var ub = bb.numericAxis,
          hb = ub.scale.domain();
        if ("number" === ub.type) {
          var Bb = Math.min(hb[0], hb[1]),
            Ob = Math.max(hb[0], hb[1]);
          return Bb <= 0 && Ob >= 0 ? 0 : Ob < 0 ? Ob : Bb
        }
        return hb[0]
      },
      bL = function(bb, ub) {
        var hb, Bb = (null !== (hb = bb.type) && void 0 !== hb && hb.defaultProps ? rU(rU({}, bb.type.defaultProps), bb.props) : bb.props).stackId;
        if ((0, oU.x)(Bb)) {
          var Ob = ub[Bb];
          if (Ob) {
            var Gb = Ob.items.indexOf(bb);
            return Gb >= 0 ? Ob.stackedData[Gb] : null
          }
        }
        return null
      },
      uL = function(bb, ub, hb) {
        return Object.keys(bb).reduce((function(Bb, Ob) {
          var Gb = bb[Ob].stackedData.reduce((function(bb, Bb) {
            var Ob = Bb.slice(ub, hb + 1).reduce((function(bb, ub) {
              return [dG()(ub.concat([bb[0]]).filter(oU.z)), WG()(ub.concat([bb[1]]).filter(oU.z))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(bb[0], Ob[0]), Math.max(bb[1], Ob[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(Gb[0], Bb[0]), Math.max(Gb[1], Bb[1])]
        }), [1 / 0, -1 / 0]).map((function(bb) {
          return bb === 1 / 0 || bb === -1 / 0 ? 0 : bb
        }))
      },
      hL = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      BL = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      OL = function(bb, ub, hb) {
        if (DG()(bb)) return bb(ub, hb);
        if (!Array.isArray(bb)) return ub;
        var Bb = [];
        if ((0, oU.z)(bb[0])) Bb[0] = hb ? bb[0] : Math.min(bb[0], ub[0]);
        else if (hL.test(bb[0])) {
          var Ob = +hL.exec(bb[0])[1];
          Bb[0] = ub[0] - Ob
        } else DG()(bb[0]) ? Bb[0] = bb[0](ub[0]) : Bb[0] = ub[0];
        if ((0, oU.z)(bb[1])) Bb[1] = hb ? bb[1] : Math.max(bb[1], ub[1]);
        else if (BL.test(bb[1])) {
          var Gb = +BL.exec(bb[1])[1];
          Bb[1] = ub[1] + Gb
        } else DG()(bb[1]) ? Bb[1] = bb[1](ub[1]) : Bb[1] = ub[1];
        return Bb
      },
      GL = function(bb, ub, hb) {
        if (bb && bb.scale && bb.scale.bandwidth) {
          var Bb = bb.scale.bandwidth();
          if (!hb || Bb > 0) return Bb
        }
        if (bb && ub && ub.length >= 2) {
          for (var Ob = PG()(ub, (function(bb) {
              return bb.coordinate
            })), Gb = 1 / 0, Ub = 1, Lb = Ob.length; Ub < Lb; Ub++) {
            var Yb = Ob[Ub],
              Sb = Ob[Ub - 1];
            Gb = Math.min((Yb.coordinate || 0) - (Sb.coordinate || 0), Gb)
          }
          return Gb === 1 / 0 ? 0 : Gb
        }
        return hb ? void 0 : 0
      },
      UL = function(bb, ub, hb) {
        return bb && bb.length ? mG()(bb, iG()(hb, "type.defaultProps.domain")) ? ub : bb : ub
      },
      LL = function(bb, ub) {
        var hb = bb.type.defaultProps ? rU(rU({}, bb.type.defaultProps), bb.props) : bb.props,
          Bb = hb.dataKey,
          Ob = hb.name,
          Gb = hb.unit,
          Ub = hb.formatter,
          Lb = hb.tooltipType,
          Yb = hb.chartType,
          Sb = hb.hide;
        return rU(rU({}, (0, AU.b)(bb, !1)), {}, {
          dataKey: Bb,
          unit: Gb,
          formatter: Ub,
          name: Ob || Bb,
          color: zU(bb),
          value: nU(ub, Bb),
          type: Lb,
          payload: ub,
          chartType: Yb,
          hide: Sb
        })
      }
  },
  5868: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb,
      g: () => Hb
    });
    var Bb = hb(5718);

    function Ob(bb) {
      return Ob = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ob(bb)
    }

    function Gb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Ub(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Gb(Object(hb), !0).forEach((function(ub) {
          Lb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Gb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Lb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != Ob(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != Ob(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Ob(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var Yb = {
        widthCache: {},
        cacheCount: 0
      },
      Sb = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      ab = "recharts_measurement_span";
    var Hb = function(bb) {
        var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === bb || null === bb || Bb.b.isSsr) return {
          width: 0,
          height: 0
        };
        var hb = function(bb) {
            var ub = Ub({}, bb);
            return Object.keys(ub).forEach((function(bb) {
              ub[bb] || delete ub[bb]
            })), ub
          }(ub),
          Ob = JSON.stringify({
            text: bb,
            copyStyle: hb
          });
        if (Yb.widthCache[Ob]) return Yb.widthCache[Ob];
        try {
          var Gb = document.getElementById(ab);
          Gb || ((Gb = document.createElement("span")).setAttribute("id", ab), Gb.setAttribute("aria-hidden", "true"), document.body.appendChild(Gb));
          var Lb = Ub(Ub({}, Sb), hb);
          Object.assign(Gb.style, Lb), Gb.textContent = "".concat(bb);
          var Hb = Gb.getBoundingClientRect(),
            wb = {
              width: Hb.width,
              height: Hb.height
            };
          return Yb.widthCache[Ob] = wb, ++Yb.cacheCount > 2e3 && (Yb.cacheCount = 0, Yb.widthCache = {}), wb
        } catch (Zb) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      wb = function(bb) {
        return {
          top: bb.top + window.scrollY - document.documentElement.clientTop,
          left: bb.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4918: (bb, ub, hb) => {
    hb.d(ub, {
      C: () => Xb,
      E: () => Zb,
      G: () => Kb,
      e: () => Db,
      i: () => jb,
      k: () => Cb,
      l: () => nb,
      m: () => Wb,
      p: () => db,
      s: () => rb,
      w: () => ob,
      x: () => Ab,
      z: () => pb
    });
    var Bb = hb(4921),
      Ob = hb.n(Bb),
      Gb = hb(4930),
      Ub = hb.n(Gb),
      Lb = hb(4940),
      Yb = hb.n(Lb),
      Sb = hb(4936),
      ab = hb.n(Sb),
      Hb = hb(5175),
      wb = hb.n(Hb),
      Zb = function(bb) {
        return 0 === bb ? 0 : bb > 0 ? 1 : -1
      },
      Xb = function(bb) {
        return Ob()(bb) && bb.indexOf("%") === bb.length - 1
      },
      pb = function(bb) {
        return ab()(bb) && !Ub()(bb)
      },
      ob = function(bb) {
        return wb()(bb)
      },
      Ab = function(bb) {
        return pb(bb) || Ob()(bb)
      },
      lb = 0,
      Kb = function(bb) {
        var ub = ++lb;
        return "".concat(bb || "").concat(ub)
      },
      Wb = function(bb, ub) {
        var hb, Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Gb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!pb(bb) && !Ob()(bb)) return Bb;
        if (Xb(bb)) {
          var Lb = bb.indexOf("%");
          hb = ub * parseFloat(bb.slice(0, Lb)) / 100
        } else hb = +bb;
        return Ub()(hb) && (hb = Bb), Gb && hb > ub && (hb = ub), hb
      },
      Cb = function(bb) {
        if (!bb) return null;
        var ub = Object.keys(bb);
        return ub && ub.length ? bb[ub[0]] : null
      },
      db = function(bb) {
        if (!Array.isArray(bb)) return !1;
        for (var ub = bb.length, hb = {}, Bb = 0; Bb < ub; Bb++) {
          if (hb[bb[Bb]]) return !0;
          hb[bb[Bb]] = !0
        }
        return !1
      },
      rb = function(bb, ub) {
        return pb(bb) && pb(ub) ? function(hb) {
          return bb + hb * (ub - bb)
        } : function() {
          return ub
        }
      };

    function jb(bb, ub, hb) {
      return bb && bb.length ? bb.find((function(bb) {
        return bb && ("function" === typeof ub ? ub(bb) : Yb()(bb, ub)) === hb
      })) : null
    }
    var nb = function(bb) {
        if (!bb || !bb.length) return null;
        for (var ub = bb.length, hb = 0, Bb = 0, Ob = 0, Gb = 0, Ub = 1 / 0, Lb = -1 / 0, Yb = 0, Sb = 0, ab = 0; ab < ub; ab++) hb += Yb = bb[ab].cx || 0, Bb += Sb = bb[ab].cy || 0, Ob += Yb * Sb, Gb += Yb * Yb, Ub = Math.min(Ub, Yb), Lb = Math.max(Lb, Yb);
        var Hb = ub * Gb !== hb * hb ? (ub * Ob - hb * Bb) / (ub * Gb - hb * hb) : 0;
        return {
          xmin: Ub,
          xmax: Lb,
          a: Hb,
          b: (Bb - Hb * hb) / ub
        }
      },
      Db = function(bb, ub) {
        return pb(bb) && pb(ub) ? bb - ub : Ob()(bb) && Ob()(ub) ? bb.localeCompare(ub) : bb instanceof Date && ub instanceof Date ? bb.getTime() - ub.getTime() : String(bb).localeCompare(String(ub))
      }
  },
  5718: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    var Bb = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(bb) {
        return Bb[bb]
      },
      set: function(bb, ub) {
        if ("string" === typeof bb) Bb[bb] = ub;
        else {
          var hb = Object.keys(bb);
          hb && hb.length && hb.forEach((function(ub) {
            Bb[ub] = bb[ub]
          }))
        }
      }
    }
  },
  5968: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    var Bb = function(bb, ub) {
      var hb = bb.alwaysShow,
        Bb = bb.ifOverflow;
      return hb && (Bb = "extendDomain"), Bb === ub
    }
  },
  5178: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    var Bb = function(bb, ub) {
      for (var hb = arguments.length, Bb = new Array(hb > 2 ? hb - 2 : 0), Ob = 2; Ob < hb; Ob++) Bb[Ob - 2] = arguments[Ob]
    }
  },
  5963: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      g: () => wb,
      k: () => Sb
    });
    hb(5175), hb(49), hb(5019);

    function Bb(bb) {
      return Bb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Bb(bb)
    }

    function Ob(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Gb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Ob(Object(hb), !0).forEach((function(ub) {
          Ub(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Ob(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Ub(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != Bb(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Ob = hb.call(bb, ub || "default");
            if ("object" != Bb(Ob)) return Ob;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Bb(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var Lb = Math.PI / 180,
      Yb = function(bb) {
        return 180 * bb / Math.PI
      },
      Sb = function(bb, ub, hb, Bb) {
        return {
          x: bb + Math.cos(-Lb * Bb) * hb,
          y: ub + Math.sin(-Lb * Bb) * hb
        }
      },
      ab = function(bb, ub) {
        var hb = bb.x,
          Bb = bb.y,
          Ob = ub.cx,
          Gb = ub.cy,
          Ub = function(bb, ub) {
            var hb = bb.x,
              Bb = bb.y,
              Ob = ub.x,
              Gb = ub.y;
            return Math.sqrt(Math.pow(hb - Ob, 2) + Math.pow(Bb - Gb, 2))
          }({
            x: hb,
            y: Bb
          }, {
            x: Ob,
            y: Gb
          });
        if (Ub <= 0) return {
          radius: Ub
        };
        var Lb = (hb - Ob) / Ub,
          Sb = Math.acos(Lb);
        return Bb > Gb && (Sb = 2 * Math.PI - Sb), {
          radius: Ub,
          angle: Yb(Sb),
          angleInRadian: Sb
        }
      },
      Hb = function(bb, ub) {
        var hb = ub.startAngle,
          Bb = ub.endAngle,
          Ob = Math.floor(hb / 360),
          Gb = Math.floor(Bb / 360);
        return bb + 360 * Math.min(Ob, Gb)
      },
      wb = function(bb, ub) {
        var hb = bb.x,
          Bb = bb.y,
          Ob = ab({
            x: hb,
            y: Bb
          }, ub),
          Ub = Ob.radius,
          Lb = Ob.angle,
          Yb = ub.innerRadius,
          Sb = ub.outerRadius;
        if (Ub < Yb || Ub > Sb) return !1;
        if (0 === Ub) return !0;
        var wb, Zb = function(bb) {
            var ub = bb.startAngle,
              hb = bb.endAngle,
              Bb = Math.floor(ub / 360),
              Ob = Math.floor(hb / 360),
              Gb = Math.min(Bb, Ob);
            return {
              startAngle: ub - 360 * Gb,
              endAngle: hb - 360 * Gb
            }
          }(ub),
          Xb = Zb.startAngle,
          pb = Zb.endAngle,
          ob = Lb;
        if (Xb <= pb) {
          for (; ob > pb;) ob -= 360;
          for (; ob < Xb;) ob += 360;
          wb = ob >= Xb && ob <= pb
        } else {
          for (; ob > Xb;) ob -= 360;
          for (; ob < pb;) ob += 360;
          wb = ob >= pb && ob <= Xb
        }
        return wb ? Gb(Gb({}, ub), {}, {
          radius: Ub,
          angle: Hb(ob, ub)
        }) : null
      }
  },
  5181: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Jb,
      c: () => xb,
      d: () => zb,
      g: () => rb,
      i: () => Mb,
      l: () => tb,
      m: () => eb,
      p: () => mb,
      t: () => sb,
      x: () => gb
    });
    var Bb = hb(4940),
      Ob = hb.n(Bb),
      Gb = hb(5175),
      Ub = hb.n(Gb),
      Lb = hb(4921),
      Yb = hb.n(Lb),
      Sb = hb(5019),
      ab = hb.n(Sb),
      Hb = hb(4850),
      wb = hb.n(Hb),
      Zb = hb(49),
      Xb = hb(5190),
      pb = hb(4918),
      ob = hb(5200),
      Ab = hb(5207),
      lb = ["children"],
      Kb = ["children"];

    function Wb(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb = {};
        for (var Bb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Bb)) {
            if (ub.indexOf(Bb) >= 0) continue;
            hb[Bb] = bb[Bb]
          } return hb
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }

    function Cb(bb) {
      return Cb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Cb(bb)
    }
    var db = {
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
      rb = function(bb) {
        return "string" === typeof bb ? bb : bb ? bb.displayName || bb.name || "Component" : ""
      },
      jb = null,
      nb = null,
      Db = function bb(ub) {
        if (ub === jb && Array.isArray(nb)) return nb;
        var hb = [];
        return Zb.Children.forEach(ub, (function(ub) {
          Ub()(ub) || ((0, Xb.isFragment)(ub) ? hb = hb.concat(bb(ub.props.children)) : hb.push(ub))
        })), nb = hb, jb = ub, hb
      };

    function xb(bb, ub) {
      var hb = [],
        Bb = [];
      return Bb = Array.isArray(ub) ? ub.map((function(bb) {
        return rb(bb)
      })) : [rb(ub)], Db(bb).forEach((function(bb) {
        var ub = Ob()(bb, "type.displayName") || Ob()(bb, "type.name"); - 1 !== Bb.indexOf(ub) && hb.push(bb)
      })), hb
    }

    function zb(bb, ub) {
      var hb = xb(bb, ub);
      return hb && hb[0]
    }
    var gb = function(bb) {
        if (!bb || !bb.props) return !1;
        var ub = bb.props,
          hb = ub.width,
          Bb = ub.height;
        return !(!(0, pb.z)(hb) || hb <= 0 || !(0, pb.z)(Bb) || Bb <= 0)
      },
      ib = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      vb = function(bb) {
        return bb && bb.type && Yb()(bb.type) && ib.indexOf(bb.type) >= 0
      },
      tb = function(bb) {
        return bb && "object" === Cb(bb) && "clipDot" in bb
      },
      Jb = function(bb, ub, hb) {
        if (!bb || "function" === typeof bb || "boolean" === typeof bb) return null;
        var Bb = bb;
        if ((0, Zb.isValidElement)(bb) && (Bb = bb.props), !wb()(Bb)) return null;
        var Ob = {};
        return Object.keys(Bb).forEach((function(bb) {
          var Gb;
          (function(bb, ub, hb, Bb) {
            var Ob, Gb = null !== (Ob = null === Ab.h || void 0 === Ab.h ? void 0 : Ab.h[Bb]) && void 0 !== Ob ? Ob : [];
            return ub.startsWith("data-") || !ab()(bb) && (Bb && Gb.includes(ub) || Ab.k.includes(ub)) || hb && Ab.e.includes(ub)
          })(null === (Gb = Bb) || void 0 === Gb ? void 0 : Gb[bb], bb, ub, hb) && (Ob[bb] = Bb[bb])
        })), Ob
      },
      eb = function bb(ub, hb) {
        if (ub === hb) return !0;
        var Bb = Zb.Children.count(ub);
        if (Bb !== Zb.Children.count(hb)) return !1;
        if (0 === Bb) return !0;
        if (1 === Bb) return Nb(Array.isArray(ub) ? ub[0] : ub, Array.isArray(hb) ? hb[0] : hb);
        for (var Ob = 0; Ob < Bb; Ob++) {
          var Gb = ub[Ob],
            Ub = hb[Ob];
          if (Array.isArray(Gb) || Array.isArray(Ub)) {
            if (!bb(Gb, Ub)) return !1
          } else if (!Nb(Gb, Ub)) return !1
        }
        return !0
      },
      Nb = function(bb, ub) {
        if (Ub()(bb) && Ub()(ub)) return !0;
        if (!Ub()(bb) && !Ub()(ub)) {
          var hb = bb.props || {},
            Bb = hb.children,
            Ob = Wb(hb, lb),
            Gb = ub.props || {},
            Lb = Gb.children,
            Yb = Wb(Gb, Kb);
          return Bb && Lb ? (0, ob.c)(Ob, Yb) && eb(Bb, Lb) : !Bb && !Lb && (0, ob.c)(Ob, Yb)
        }
        return !1
      },
      sb = function(bb, ub) {
        var hb = [],
          Bb = {};
        return Db(bb).forEach((function(bb, Ob) {
          if (vb(bb)) hb.push(bb);
          else if (bb) {
            var Gb = rb(bb.type),
              Ub = ub[Gb] || {},
              Lb = Ub.handler,
              Yb = Ub.once;
            if (Lb && (!Yb || !Bb[Gb])) {
              var Sb = Lb(bb, Gb, Ob);
              hb.push(Sb), Bb[Gb] = !0
            }
          }
        })), hb
      },
      Mb = function(bb) {
        var ub = bb && bb.type;
        return ub && db[ub] ? db[ub] : null
      },
      mb = function(bb, ub) {
        return Db(ub).indexOf(bb)
      }
  },
  5200: (bb, ub, hb) => {
    function Bb(bb, ub) {
      for (var hb in bb)
        if ({}.hasOwnProperty.call(bb, hb) && (!{}.hasOwnProperty.call(ub, hb) || bb[hb] !== ub[hb])) return !1;
      for (var Bb in ub)
        if ({}.hasOwnProperty.call(ub, Bb) && !{}.hasOwnProperty.call(bb, Bb)) return !1;
      return !0
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  5942: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ab
    });
    var Bb = hb(5781),
      Ob = hb(5871),
      Gb = hb(5181);

    function Ub(bb) {
      return Ub = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ub(bb)
    }

    function Lb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Yb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Lb(Object(hb), !0).forEach((function(ub) {
          Sb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Lb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Sb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != Ub(bb) || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != Ub(Bb)) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Ub(ub) ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }
    var ab = function(bb) {
      var ub = bb.children,
        hb = bb.formattedGraphicalItems,
        Ub = bb.legendWidth,
        Lb = bb.legendContent,
        Sb = (0, Gb.d)(ub, Bb.d);
      if (!Sb) return null;
      var ab, Hb = Bb.d.defaultProps,
        wb = void 0 !== Hb ? Yb(Yb({}, Hb), Sb.props) : {};
      return ab = Sb.props && Sb.props.payload ? Sb.props && Sb.props.payload : "children" === Lb ? (hb || []).reduce((function(bb, ub) {
        var hb = ub.item,
          Bb = ub.props,
          Ob = Bb.sectors || Bb.data || [];
        return bb.concat(Ob.map((function(bb) {
          return {
            type: Sb.props.iconType || hb.props.legendType,
            value: bb.name,
            color: bb.fill,
            payload: bb
          }
        })))
      }), []) : (hb || []).map((function(bb) {
        var ub = bb.item,
          hb = ub.type.defaultProps,
          Bb = void 0 !== hb ? Yb(Yb({}, hb), ub.props) : {},
          Gb = Bb.dataKey,
          Ub = Bb.name,
          Lb = Bb.legendType;
        return {
          inactive: Bb.hide,
          dataKey: Gb,
          type: wb.iconType || Lb || "square",
          color: (0, Ob.I)(ub),
          value: Ub || Gb,
          payload: Bb
        }
      })), Yb(Yb(Yb({}, wb), Bb.d.getWithHeight(Sb, Ub)), {}, {
        payload: ab,
        item: Sb
      })
    }
  },
  5722: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb
    });
    var Bb = hb(5728),
      Ob = hb.n(Bb),
      Gb = hb(5019),
      Ub = hb.n(Gb);

    function Lb(bb, ub, hb) {
      return !0 === ub ? Ob()(bb, hb) : Ub()(ub) ? Ob()(bb, ub) : bb
    }
  },
  5207: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ab,
      h: () => Sb,
      k: () => Lb,
      m: () => Hb,
      q: () => wb
    });
    var Bb = hb(49),
      Ob = hb(4850),
      Gb = hb.n(Ob);

    function Ub(bb) {
      return Ub = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ub(bb)
    }
    var Lb = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "kw", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      Yb = ["points", "pathLength"],
      Sb = {
        svg: ["viewBox", "children"],
        polygon: Yb,
        polyline: Yb
      },
      ab = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      Hb = function(bb, ub) {
        if (!bb || "function" === typeof bb || "boolean" === typeof bb) return null;
        var hb = bb;
        if ((0, Bb.isValidElement)(bb) && (hb = bb.props), !Gb()(hb)) return null;
        var Ob = {};
        return Object.keys(hb).forEach((function(bb) {
          ab.includes(bb) && (Ob[bb] = ub || function(ub) {
            return hb[bb](hb, ub)
          })
        })), Ob
      },
      wb = function(bb, ub, hb) {
        if (!Gb()(bb) || "object" !== Ub(bb)) return null;
        var Bb = null;
        return Object.keys(bb).forEach((function(Ob) {
          var Gb = bb[Ob];
          ab.includes(Ob) && "function" === typeof Gb && (Bb || (Bb = {}), Bb[Ob] = function(bb, ub, hb) {
            return function(Bb) {
              return bb(ub, hb, Bb), null
            }
          }(Gb, ub, hb))
        })), Bb
      }
  },
  5195: (bb, ub) => {
    var hb, Bb = Symbol.for("react.element"),
      Ob = Symbol.for("react.portal"),
      Gb = Symbol.for("react.fragment"),
      Ub = Symbol.for("react.strict_mode"),
      Lb = Symbol.for("react.profiler"),
      Yb = Symbol.for("react.provider"),
      Sb = Symbol.for("react.context"),
      ab = Symbol.for("react.server_context"),
      Hb = Symbol.for("react.forward_ref"),
      wb = Symbol.for("react.suspense"),
      Zb = Symbol.for("react.suspense_list"),
      Xb = Symbol.for("react.memo"),
      pb = Symbol.for("react.lazy"),
      ob = Symbol.for("react.offscreen");

    function Ab(bb) {
      if ("object" === typeof bb && null !== bb) {
        var ub = bb.$$typeof;
        switch (ub) {
          case Bb:
            switch (bb = bb.type) {
              case Gb:
              case Lb:
              case Ub:
              case wb:
              case Zb:
                return bb;
              default:
                switch (bb = bb && bb.$$typeof) {
                  case ab:
                  case Sb:
                  case Hb:
                  case pb:
                  case Xb:
                  case Yb:
                    return bb;
                  default:
                    return ub
                }
            }
          case Ob:
            return ub
        }
      }
    }
    hb = Symbol.for("react.module.reference"), ub.isFragment = function(bb) {
      return Ab(bb) === Gb
    }
  },
  5190: (bb, ub, hb) => {
    bb.exports = hb(5195)
  },
  4831: (bb, ub, hb) => {
    function Bb(bb) {
      var ub, hb, Ob = "";
      if ("string" == typeof bb || "number" == typeof bb) Ob += bb;
      else if ("object" == typeof bb)
        if (Array.isArray(bb)) {
          var Gb = bb.length;
          for (ub = 0; ub < Gb; ub++) bb[ub] && (hb = Bb(bb[ub])) && (Ob && (Ob += " "), Ob += hb)
        } else
          for (hb in bb) bb[hb] && (Ob && (Ob += " "), Ob += hb);
      return Ob
    }
    hb.d(ub, {
      e: () => Ob
    });
    const Ob = function() {
      for (var bb, ub, hb = 0, Ob = "", Gb = arguments.length; hb < Gb; hb++)(bb = arguments[hb]) && (ub = Bb(bb)) && (Ob && (Ob += " "), Ob += ub);
      return Ob
    }
  },
  5880: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      g: () => Lb
    });
    var Bb = hb(5883),
      Ob = hb(5891);

    function Gb() {
      var bb, ub, hb = (0, Ob.b)().unknown(void 0),
        Ub = hb.domain,
        Lb = hb.range,
        Yb = 0,
        Sb = 1,
        ab = !1,
        Hb = 0,
        wb = 0,
        Zb = .5;

      function Xb() {
        var hb = Ub().length,
          Bb = Sb < Yb,
          Ob = Bb ? Sb : Yb,
          Gb = Bb ? Yb : Sb;
        bb = (Gb - Ob) / Math.max(1, hb - Hb + 2 * wb), ab && (bb = Math.floor(bb)), Ob += (Gb - Ob - bb * (hb - Hb)) * Zb, ub = bb * (1 - Hb), ab && (Ob = Math.round(Ob), ub = Math.round(ub));
        var Xb = function(bb, ub, hb) {
          bb = +bb, ub = +ub, hb = (Ob = arguments.length) < 2 ? (ub = bb, bb = 0, 1) : Ob < 3 ? 1 : +hb;
          for (var Bb = -1, Ob = 0 | Math.max(0, Math.ceil((ub - bb) / hb)), Gb = new Array(Ob); ++Bb < Ob;) Gb[Bb] = bb + Bb * hb;
          return Gb
        }(hb).map((function(ub) {
          return Ob + bb * ub
        }));
        return Lb(Bb ? Xb.reverse() : Xb)
      }
      return delete hb.unknown, hb.domain = function(bb) {
        return arguments.length ? (Ub(bb), Xb()) : Ub()
      }, hb.range = function(bb) {
        return arguments.length ? ([Yb, Sb] = bb, Yb = +Yb, Sb = +Sb, Xb()) : [Yb, Sb]
      }, hb.rangeRound = function(bb) {
        return [Yb, Sb] = bb, Yb = +Yb, Sb = +Sb, ab = !0, Xb()
      }, hb.bandwidth = function() {
        return ub
      }, hb.step = function() {
        return bb
      }, hb.round = function(bb) {
        return arguments.length ? (ab = !!bb, Xb()) : ab
      }, hb.padding = function(bb) {
        return arguments.length ? (Hb = Math.min(1, wb = +bb), Xb()) : Hb
      }, hb.paddingInner = function(bb) {
        return arguments.length ? (Hb = Math.min(1, bb), Xb()) : Hb
      }, hb.paddingOuter = function(bb) {
        return arguments.length ? (wb = +bb, Xb()) : wb
      }, hb.align = function(bb) {
        return arguments.length ? (Zb = Math.max(0, Math.min(1, bb)), Xb()) : Zb
      }, hb.copy = function() {
        return Gb(Ub(), [Yb, Sb]).round(ab).paddingInner(Hb).paddingOuter(wb).align(Zb)
      }, Bb.e.apply(Xb(), arguments)
    }

    function Ub(bb) {
      var ub = bb.copy;
      return bb.padding = bb.paddingOuter, delete bb.paddingInner, delete bb.paddingOuter, bb.copy = function() {
        return Ub(ub())
      }, bb
    }

    function Lb() {
      return Ub(Gb.apply(null, arguments).paddingInner(1))
    }
  },
  5883: (bb, ub, hb) => {
    function Bb(bb, ub) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(bb);
          break;
        default:
          this.range(ub).domain(bb)
      }
      return this
    }

    function Ob(bb, ub) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof bb ? this.interpolator(bb) : this.range(bb);
          break;
        default:
          this.domain(bb), "function" === typeof ub ? this.interpolator(ub) : this.range(ub)
      }
      return this
    }
    hb.d(ub, {
      b: () => Ob,
      e: () => Bb
    })
  },
  5891: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      c: () => Sb
    });
    class Bb extends Map {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lb;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: ub
            }
          }), null != bb)
          for (const [hb, Bb] of bb) this.set(hb, Bb)
      }
      get(bb) {
        return super.get(Ob(this, bb))
      }
      has(bb) {
        return super.has(Ob(this, bb))
      }
      set(bb, ub) {
        return super.set(Gb(this, bb), ub)
      }
      delete(bb) {
        return super.delete(Ub(this, bb))
      }
    }
    Set;

    function Ob(bb, ub) {
      let {
        _intern: hb,
        _key: Bb
      } = bb;
      const Ob = Bb(ub);
      return hb.has(Ob) ? hb.get(Ob) : ub
    }

    function Gb(bb, ub) {
      let {
        _intern: hb,
        _key: Bb
      } = bb;
      const Ob = Bb(ub);
      return hb.has(Ob) ? hb.get(Ob) : (hb.set(Ob, ub), ub)
    }

    function Ub(bb, ub) {
      let {
        _intern: hb,
        _key: Bb
      } = bb;
      const Ob = Bb(ub);
      return hb.has(Ob) && (ub = hb.get(Ob), hb.delete(Ob)), ub
    }

    function Lb(bb) {
      return null !== bb && "object" === typeof bb ? bb.valueOf() : bb
    }
    var Yb = hb(5883);
    const Sb = Symbol("implicit");

    function ab() {
      var bb = new Bb,
        ub = [],
        hb = [],
        Ob = Sb;

      function Gb(Bb) {
        let Gb = bb.get(Bb);
        if (void 0 === Gb) {
          if (Ob !== Sb) return Ob;
          bb.set(Bb, Gb = ub.push(Bb) - 1)
        }
        return hb[Gb % hb.length]
      }
      return Gb.domain = function(hb) {
        if (!arguments.length) return ub.slice();
        ub = [], bb = new Bb;
        for (const Bb of hb) bb.has(Bb) || bb.set(Bb, ub.push(Bb) - 1);
        return Gb
      }, Gb.range = function(bb) {
        return arguments.length ? (hb = Array.from(bb), Gb) : hb.slice()
      }, Gb.unknown = function(bb) {
        return arguments.length ? (Ob = bb, Gb) : Ob
      }, Gb.copy = function() {
        return ab(ub, hb).unknown(Ob)
      }, Yb.e.apply(Gb, arguments), Gb
    }
  },
  5949: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    Array.prototype.slice;

    function Bb(bb) {
      return "object" === typeof bb && "length" in bb ? bb : Array.from(bb)
    }
  },
  5834: (bb, ub, hb) => {
    function Bb(bb) {
      return function() {
        return bb
      }
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  5843: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb
    });
    const Bb = Math.PI,
      Ob = 2 * Bb,
      Gb = 1e-6,
      Ub = Ob - Gb;

    function Lb(bb) {
      this._ += bb[0];
      for (let ub = 1, hb = bb.length; ub < hb; ++ub) this._ += arguments[ub] + bb[ub]
    }
    class Yb {
      constructor(bb) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == bb ? Lb : function(bb) {
          let ub = Math.floor(bb);
          if (!(ub >= 0)) throw new Error(`invalid digits: ${bb}`);
          if (ub > 15) return Lb;
          const hb = 10 ** ub;
          return function(bb) {
            this._ += bb[0];
            for (let ub = 1, Bb = bb.length; ub < Bb; ++ub) this._ += Math.round(arguments[ub] * hb) / hb + bb[ub]
          }
        }(bb)
      }
      moveTo(bb, ub) {
        this._append`M${this._x0=this._x1=+bb},${this._y0=this._y1=+ub}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(bb, ub) {
        this._append`L${this._x1=+bb},${this._y1=+ub}`
      }
      quadraticCurveTo(bb, ub, hb, Bb) {
        this._append`Q${+bb},${+ub},${this._x1=+hb},${this._y1=+Bb}`
      }
      bezierCurveTo(bb, ub, hb, Bb, Ob, Gb) {
        this._append`C${+bb},${+ub},${+hb},${+Bb},${this._x1=+Ob},${this._y1=+Gb}`
      }
      arcTo(bb, ub, hb, Ob, Ub) {
        if (bb = +bb, ub = +ub, hb = +hb, Ob = +Ob, (Ub = +Ub) < 0) throw new Error(`negative radius: ${Ub}`);
        let Lb = this._x1,
          Yb = this._y1,
          Sb = hb - bb,
          ab = Ob - ub,
          Hb = Lb - bb,
          wb = Yb - ub,
          Zb = Hb * Hb + wb * wb;
        if (null === this._x1) this._append`M${this._x1=bb},${this._y1=ub}`;
        else if (Zb > Gb)
          if (Math.abs(wb * Sb - ab * Hb) > Gb && Ub) {
            let Xb = hb - Lb,
              pb = Ob - Yb,
              ob = Sb * Sb + ab * ab,
              Ab = Xb * Xb + pb * pb,
              lb = Math.sqrt(ob),
              Kb = Math.sqrt(Zb),
              Wb = Ub * Math.tan((Bb - Math.acos((ob + Zb - Ab) / (2 * lb * Kb))) / 2),
              Cb = Wb / Kb,
              db = Wb / lb;
            Math.abs(Cb - 1) > Gb && this._append`L${bb+Cb*Hb},${ub+Cb*wb}`, this._append`A${Ub},${Ub},0,0,${+(wb*Xb>Hb*pb)},${this._x1=bb+db*Sb},${this._y1=ub+db*ab}`
          } else this._append`L${this._x1=bb},${this._y1=ub}`;
        else;
      }
      arc(bb, ub, hb, Lb, Yb, Sb) {
        if (bb = +bb, ub = +ub, Sb = !!Sb, (hb = +hb) < 0) throw new Error(`negative radius: ${hb}`);
        let ab = hb * Math.cos(Lb),
          Hb = hb * Math.sin(Lb),
          wb = bb + ab,
          Zb = ub + Hb,
          Xb = 1 ^ Sb,
          pb = Sb ? Lb - Yb : Yb - Lb;
        null === this._x1 ? this._append`M${wb},${Zb}` : (Math.abs(this._x1 - wb) > Gb || Math.abs(this._y1 - Zb) > Gb) && this._append`L${wb},${Zb}`, hb && (pb < 0 && (pb = pb % Ob + Ob), pb > Ub ? this._append`A${hb},${hb},0,1,${Xb},${bb-ab},${ub-Hb}A${hb},${hb},0,1,${Xb},${this._x1=wb},${this._y1=Zb}` : pb > Gb && this._append`A${hb},${hb},0,${+(pb>=Bb)},${Xb},${this._x1=bb+hb*Math.cos(Yb)},${this._y1=ub+hb*Math.sin(Yb)}`)
      }
      rect(bb, ub, hb, Bb) {
        this._append`M${this._x0=this._x1=+bb},${this._y0=this._y1=+ub}h${hb=+hb}v${+Bb}h${-hb}Z`
      }
      toString() {
        return this._
      }
    }

    function Sb(bb) {
      let ub = 3;
      return bb.digits = function(hb) {
        if (!arguments.length) return ub;
        if (null == hb) ub = null;
        else {
          const bb = Math.floor(hb);
          if (!(bb >= 0)) throw new RangeError(`invalid digits: ${hb}`);
          ub = bb
        }
        return bb
      }, () => new Yb(ub)
    }
    Yb.prototype
  },
  5700: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb
    });
    var Bb = !0,
      Ob = "Invariant failed";

    function Gb(bb, ub) {
      if (!bb) {
        if (Bb) throw new Error(Ob);
        var hb = "function" === typeof ub ? ub() : ub,
          Gb = hb ? "".concat(Ob, ": ").concat(hb) : Ob;
        throw new Error(Gb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);