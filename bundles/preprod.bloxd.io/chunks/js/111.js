/*! For license information please see bbb6l5.111.fd0d65c0.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6085: function(qq, Eq, gq) {
    var Yq;
    ! function() {
      var lq, Oq = 1e9,
        mq = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        xq = !0,
        Aq = "[DecimalError] ",
        cq = Aq + "Invalid argument: ",
        uq = Aq + "Exponent out of range: ",
        Bq = Math.floor,
        Wq = Math.pow,
        Nq = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        aq = 1e7,
        Vq = 9007199254740991,
        dq = Bq(1286742750677284.5),
        jq = {};

      function Hq(qq, Eq) {
        var gq, Yq, lq, Oq, mq, Aq, cq, uq, Bq = qq.constructor,
          Wq = Bq.precision;
        if (!qq.s || !Eq.s) return Eq.s || (Eq = new Bq(qq)), xq ? bq(Eq, Wq) : Eq;
        if (cq = qq.d, uq = Eq.d, mq = qq.e, lq = Eq.e, cq = cq.slice(), Oq = mq - lq) {
          for (Oq < 0 ? (Yq = cq, Oq = -Oq, Aq = uq.length) : (Yq = uq, lq = mq, Aq = cq.length), Oq > (Aq = (mq = Math.ceil(Wq / 7)) > Aq ? mq + 1 : Aq + 1) && (Oq = Aq, Yq.length = 1), Yq.reverse(); Oq--;) Yq.push(0);
          Yq.reverse()
        }
        for ((Aq = cq.length) - (Oq = uq.length) < 0 && (Oq = Aq, Yq = uq, uq = cq, cq = Yq), gq = 0; Oq;) gq = (cq[--Oq] = cq[Oq] + uq[Oq] + gq) / aq | 0, cq[Oq] %= aq;
        for (gq && (cq.unshift(gq), ++lq), Aq = cq.length; 0 == cq[--Aq];) cq.pop();
        return Eq.d = cq, Eq.e = lq, xq ? bq(Eq, Wq) : Eq
      }

      function oq(qq, Eq, gq) {
        if (qq !== ~~qq || qq < Eq || qq > gq) throw Error(cq + qq)
      }

      function Pq(qq) {
        var Eq, gq, Yq, lq = qq.length - 1,
          Oq = "",
          mq = qq[0];
        if (lq > 0) {
          for (Oq += mq, Eq = 1; Eq < lq; Eq++)(gq = 7 - (Yq = qq[Eq] + "").length) && (Oq += vq(gq)), Oq += Yq;
          (gq = 7 - (Yq = (mq = qq[Eq]) + "").length) && (Oq += vq(gq))
        } else if (0 === mq) return "0";
        for (; mq % 10 === 0;) mq /= 10;
        return Oq + mq
      }
      jq.absoluteValue = jq.abs = function() {
        var qq = new this.constructor(this);
        return qq.s && (qq.s = 1), qq
      }, jq.comparedTo = jq.cmp = function(qq) {
        var Eq, gq, Yq, lq, Oq = this;
        if (qq = new Oq.constructor(qq), Oq.s !== qq.s) return Oq.s || -qq.s;
        if (Oq.e !== qq.e) return Oq.e > qq.e ^ Oq.s < 0 ? 1 : -1;
        for (Eq = 0, gq = (Yq = Oq.d.length) < (lq = qq.d.length) ? Yq : lq; Eq < gq; ++Eq)
          if (Oq.d[Eq] !== qq.d[Eq]) return Oq.d[Eq] > qq.d[Eq] ^ Oq.s < 0 ? 1 : -1;
        return Yq === lq ? 0 : Yq > lq ^ Oq.s < 0 ? 1 : -1
      }, jq.decimalPlaces = jq.dp = function() {
        var qq = this,
          Eq = qq.d.length - 1,
          gq = 7 * (Eq - qq.e);
        if (Eq = qq.d[Eq])
          for (; Eq % 10 == 0; Eq /= 10) gq--;
        return gq < 0 ? 0 : gq
      }, jq.dividedBy = jq.div = function(qq) {
        return Qq(this, new this.constructor(qq))
      }, jq.dividedToIntegerBy = jq.idiv = function(qq) {
        var Eq = this.constructor;
        return bq(Qq(this, new Eq(qq), 0, 1), Eq.precision)
      }, jq.equals = jq.eq = function(qq) {
        return !this.cmp(qq)
      }, jq.exponent = function() {
        return tq(this)
      }, jq.greaterThan = jq.gt = function(qq) {
        return this.cmp(qq) > 0
      }, jq.greaterThanOrEqualTo = jq.gte = function(qq) {
        return this.cmp(qq) >= 0
      }, jq.isInteger = jq.isint = function() {
        return this.e > this.d.length - 2
      }, jq.isNegative = jq.isneg = function() {
        return this.s < 0
      }, jq.isPositive = jq.ispos = function() {
        return this.s > 0
      }, jq.isZero = function() {
        return 0 === this.s
      }, jq.lessThan = jq.lt = function(qq) {
        return this.cmp(qq) < 0
      }, jq.lessThanOrEqualTo = jq.lte = function(qq) {
        return this.cmp(qq) < 1
      }, jq.logarithm = jq.log = function(qq) {
        var Eq, gq = this,
          Yq = gq.constructor,
          Oq = Yq.precision,
          mq = Oq + 5;
        if (void 0 === qq) qq = new Yq(10);
        else if ((qq = new Yq(qq)).s < 1 || qq.eq(lq)) throw Error(Aq + "NaN");
        if (gq.s < 1) throw Error(Aq + (gq.s ? "NaN" : "-Infinity"));
        return gq.eq(lq) ? new Yq(0) : (xq = !1, Eq = Qq(hq(gq, mq), hq(qq, mq), mq), xq = !0, bq(Eq, Oq))
      }, jq.minus = jq.sub = function(qq) {
        var Eq = this;
        return qq = new Eq.constructor(qq), Eq.s == qq.s ? iq(Eq, qq) : Hq(Eq, (qq.s = -qq.s, qq))
      }, jq.modulo = jq.mod = function(qq) {
        var Eq, gq = this,
          Yq = gq.constructor,
          lq = Yq.precision;
        if (!(qq = new Yq(qq)).s) throw Error(Aq + "NaN");
        return gq.s ? (xq = !1, Eq = Qq(gq, qq, 0, 1).times(qq), xq = !0, gq.minus(Eq)) : bq(new Yq(gq), lq)
      }, jq.naturalExponential = jq.exp = function() {
        return yq(this)
      }, jq.naturalLogarithm = jq.ln = function() {
        return hq(this)
      }, jq.negated = jq.neg = function() {
        var qq = new this.constructor(this);
        return qq.s = -qq.s || 0, qq
      }, jq.plus = jq.add = function(qq) {
        var Eq = this;
        return qq = new Eq.constructor(qq), Eq.s == qq.s ? Hq(Eq, qq) : iq(Eq, (qq.s = -qq.s, qq))
      }, jq.precision = jq.sd = function(qq) {
        var Eq, gq, Yq, lq = this;
        if (void 0 !== qq && qq !== !!qq && 1 !== qq && 0 !== qq) throw Error(cq + qq);
        if (Eq = tq(lq) + 1, gq = 7 * (Yq = lq.d.length - 1) + 1, Yq = lq.d[Yq]) {
          for (; Yq % 10 == 0; Yq /= 10) gq--;
          for (Yq = lq.d[0]; Yq >= 10; Yq /= 10) gq++
        }
        return qq && Eq > gq ? Eq : gq
      }, jq.squareRoot = jq.sqrt = function() {
        var qq, Eq, gq, Yq, lq, Oq, mq, cq = this,
          uq = cq.constructor;
        if (cq.s < 1) {
          if (!cq.s) return new uq(0);
          throw Error(Aq + "NaN")
        }
        for (qq = tq(cq), xq = !1, 0 == (lq = Math.sqrt(+cq)) || lq == 1 / 0 ? (((Eq = Pq(cq.d)).length + qq) % 2 == 0 && (Eq += "0"), lq = Math.sqrt(Eq), qq = Bq((qq + 1) / 2) - (qq < 0 || qq % 2), Yq = new uq(Eq = lq == 1 / 0 ? "1e" + qq : (Eq = lq.toExponential()).slice(0, Eq.indexOf("e") + 1) + qq)) : Yq = new uq(lq.toString()), lq = mq = (gq = uq.precision) + 3;;)
          if (Yq = (Oq = Yq).plus(Qq(cq, Oq, mq + 2)).times(.5), Pq(Oq.d).slice(0, mq) === (Eq = Pq(Yq.d)).slice(0, mq)) {
            if (Eq = Eq.slice(mq - 3, mq + 1), lq == mq && "4999" == Eq) {
              if (bq(Oq, gq + 1, 0), Oq.times(Oq).eq(cq)) {
                Yq = Oq;
                break
              }
            } else if ("9999" != Eq) break;
            mq += 4
          } return xq = !0, bq(Yq, gq)
      }, jq.times = jq.mul = function(qq) {
        var Eq, gq, Yq, lq, Oq, mq, Aq, cq, uq, Bq = this,
          Wq = Bq.constructor,
          Nq = Bq.d,
          Vq = (qq = new Wq(qq)).d;
        if (!Bq.s || !qq.s) return new Wq(0);
        for (qq.s *= Bq.s, gq = Bq.e + qq.e, (cq = Nq.length) < (uq = Vq.length) && (Oq = Nq, Nq = Vq, Vq = Oq, mq = cq, cq = uq, uq = mq), Oq = [], Yq = mq = cq + uq; Yq--;) Oq.push(0);
        for (Yq = uq; --Yq >= 0;) {
          for (Eq = 0, lq = cq + Yq; lq > Yq;) Aq = Oq[lq] + Vq[Yq] * Nq[lq - Yq - 1] + Eq, Oq[lq--] = Aq % aq | 0, Eq = Aq / aq | 0;
          Oq[lq] = (Oq[lq] + Eq) % aq | 0
        }
        for (; !Oq[--mq];) Oq.pop();
        return Eq ? ++gq : Oq.shift(), qq.d = Oq, qq.e = gq, xq ? bq(qq, Wq.precision) : qq
      }, jq.toDecimalPlaces = jq.todp = function(qq, Eq) {
        var gq = this,
          Yq = gq.constructor;
        return gq = new Yq(gq), void 0 === qq ? gq : (oq(qq, 0, Oq), void 0 === Eq ? Eq = Yq.rounding : oq(Eq, 0, 8), bq(gq, qq + tq(gq) + 1, Eq))
      }, jq.toExponential = function(qq, Eq) {
        var gq, Yq = this,
          lq = Yq.constructor;
        return void 0 === qq ? gq = Zq(Yq, !0) : (oq(qq, 0, Oq), void 0 === Eq ? Eq = lq.rounding : oq(Eq, 0, 8), gq = Zq(Yq = bq(new lq(Yq), qq + 1, Eq), !0, qq + 1)), gq
      }, jq.toFixed = function(qq, Eq) {
        var gq, Yq, lq = this,
          mq = lq.constructor;
        return void 0 === qq ? Zq(lq) : (oq(qq, 0, Oq), void 0 === Eq ? Eq = mq.rounding : oq(Eq, 0, 8), gq = Zq((Yq = bq(new mq(lq), qq + tq(lq) + 1, Eq)).abs(), !1, qq + tq(Yq) + 1), lq.isneg() && !lq.isZero() ? "-" + gq : gq)
      }, jq.toInteger = jq.toint = function() {
        var qq = this,
          Eq = qq.constructor;
        return bq(new Eq(qq), tq(qq) + 1, Eq.rounding)
      }, jq.toNumber = function() {
        return +this
      }, jq.toPower = jq.pow = function(qq) {
        var Eq, gq, Yq, Oq, mq, cq, uq = this,
          Wq = uq.constructor,
          Nq = +(qq = new Wq(qq));
        if (!qq.s) return new Wq(lq);
        if (!(uq = new Wq(uq)).s) {
          if (qq.s < 1) throw Error(Aq + "Infinity");
          return uq
        }
        if (uq.eq(lq)) return uq;
        if (Yq = Wq.precision, qq.eq(lq)) return bq(uq, Yq);
        if (cq = (Eq = qq.e) >= (gq = qq.d.length - 1), mq = uq.s, cq) {
          if ((gq = Nq < 0 ? -Nq : Nq) <= Vq) {
            for (Oq = new Wq(lq), Eq = Math.ceil(Yq / 7 + 4), xq = !1; gq % 2 && fq((Oq = Oq.times(uq)).d, Eq), 0 !== (gq = Bq(gq / 2));) fq((uq = uq.times(uq)).d, Eq);
            return xq = !0, qq.s < 0 ? new Wq(lq).div(Oq) : bq(Oq, Yq)
          }
        } else if (mq < 0) throw Error(Aq + "NaN");
        return mq = mq < 0 && 1 & qq.d[Math.max(Eq, gq)] ? -1 : 1, uq.s = 1, xq = !1, Oq = qq.times(hq(uq, Yq + 12)), xq = !0, (Oq = yq(Oq)).s = mq, Oq
      }, jq.toPrecision = function(qq, Eq) {
        var gq, Yq, lq = this,
          mq = lq.constructor;
        return void 0 === qq ? Yq = Zq(lq, (gq = tq(lq)) <= mq.toExpNeg || gq >= mq.toExpPos) : (oq(qq, 1, Oq), void 0 === Eq ? Eq = mq.rounding : oq(Eq, 0, 8), Yq = Zq(lq = bq(new mq(lq), qq, Eq), qq <= (gq = tq(lq)) || gq <= mq.toExpNeg, qq)), Yq
      }, jq.toSignificantDigits = jq.tosd = function(qq, Eq) {
        var gq = this.constructor;
        return void 0 === qq ? (qq = gq.precision, Eq = gq.rounding) : (oq(qq, 1, Oq), void 0 === Eq ? Eq = gq.rounding : oq(Eq, 0, 8)), bq(new gq(this), qq, Eq)
      }, jq.toString = jq.valueOf = jq.val = jq.toJSON = function() {
        var qq = this,
          Eq = tq(qq),
          gq = qq.constructor;
        return Zq(qq, Eq <= gq.toExpNeg || Eq >= gq.toExpPos)
      };
      var Qq = function() {
        function qq(qq, Eq) {
          var gq, Yq = 0,
            lq = qq.length;
          for (qq = qq.slice(); lq--;) gq = qq[lq] * Eq + Yq, qq[lq] = gq % aq | 0, Yq = gq / aq | 0;
          return Yq && qq.unshift(Yq), qq
        }

        function Eq(qq, Eq, gq, Yq) {
          var lq, Oq;
          if (gq != Yq) Oq = gq > Yq ? 1 : -1;
          else
            for (lq = Oq = 0; lq < gq; lq++)
              if (qq[lq] != Eq[lq]) {
                Oq = qq[lq] > Eq[lq] ? 1 : -1;
                break
              } return Oq
        }

        function gq(qq, Eq, gq) {
          for (var Yq = 0; gq--;) qq[gq] -= Yq, Yq = qq[gq] < Eq[gq] ? 1 : 0, qq[gq] = Yq * aq + qq[gq] - Eq[gq];
          for (; !qq[0] && qq.length > 1;) qq.shift()
        }
        return function(Yq, lq, Oq, mq) {
          var xq, cq, uq, Bq, Wq, Nq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, rq, vq, hq, nq, iq = Yq.constructor,
            Zq = Yq.s == lq.s ? 1 : -1,
            fq = Yq.d,
            Mq = lq.d;
          if (!Yq.s) return new iq(Yq);
          if (!lq.s) throw Error(Aq + "Division by zero");
          for (cq = Yq.e - lq.e, hq = Mq.length, rq = fq.length, dq = (Vq = new iq(Zq)).d = [], uq = 0; Mq[uq] == (fq[uq] || 0);) ++uq;
          if (Mq[uq] > (fq[uq] || 0) && --cq, (Pq = null == Oq ? Oq = iq.precision : mq ? Oq + (tq(Yq) - tq(lq)) + 1 : Oq) < 0) return new iq(0);
          if (Pq = Pq / 7 + 2 | 0, uq = 0, 1 == hq)
            for (Bq = 0, Mq = Mq[0], Pq++;
              (uq < rq || Bq) && Pq--; uq++) Qq = Bq * aq + (fq[uq] || 0), dq[uq] = Qq / Mq | 0, Bq = Qq % Mq | 0;
          else {
            for ((Bq = aq / (Mq[0] + 1) | 0) > 1 && (Mq = qq(Mq, Bq), fq = qq(fq, Bq), hq = Mq.length, rq = fq.length), yq = hq, Hq = (jq = fq.slice(0, hq)).length; Hq < hq;) jq[Hq++] = 0;
            (nq = Mq.slice()).unshift(0), vq = Mq[0], Mq[1] >= aq / 2 && ++vq;
            do {
              Bq = 0, (xq = Eq(Mq, jq, hq, Hq)) < 0 ? (oq = jq[0], hq != Hq && (oq = oq * aq + (jq[1] || 0)), (Bq = oq / vq | 0) > 1 ? (Bq >= aq && (Bq = aq - 1), 1 == (xq = Eq(Wq = qq(Mq, Bq), jq, Nq = Wq.length, Hq = jq.length)) && (Bq--, gq(Wq, hq < Nq ? nq : Mq, Nq))) : (0 == Bq && (xq = Bq = 1), Wq = Mq.slice()), (Nq = Wq.length) < Hq && Wq.unshift(0), gq(jq, Wq, Hq), -1 == xq && (xq = Eq(Mq, jq, hq, Hq = jq.length)) < 1 && (Bq++, gq(jq, hq < Hq ? nq : Mq, Hq)), Hq = jq.length) : 0 === xq && (Bq++, jq = [0]), dq[uq++] = Bq, xq && jq[0] ? jq[Hq++] = fq[yq] || 0 : (jq = [fq[yq]], Hq = 1)
            } while ((yq++ < rq || void 0 !== jq[0]) && Pq--)
          }
          return dq[0] || dq.shift(), Vq.e = cq, bq(Vq, mq ? Oq + tq(Vq) + 1 : Oq)
        }
      }();

      function yq(qq, Eq) {
        var gq, Yq, Oq, mq, Aq, cq = 0,
          Bq = 0,
          Nq = qq.constructor,
          aq = Nq.precision;
        if (tq(qq) > 16) throw Error(uq + tq(qq));
        if (!qq.s) return new Nq(lq);
        for (null == Eq ? (xq = !1, Aq = aq) : Aq = Eq, mq = new Nq(.03125); qq.abs().gte(.1);) qq = qq.times(mq), Bq += 5;
        for (Aq += Math.log(Wq(2, Bq)) / Math.LN10 * 2 + 5 | 0, gq = Yq = Oq = new Nq(lq), Nq.precision = Aq;;) {
          if (Yq = bq(Yq.times(qq), Aq), gq = gq.times(++cq), Pq((mq = Oq.plus(Qq(Yq, gq, Aq))).d).slice(0, Aq) === Pq(Oq.d).slice(0, Aq)) {
            for (; Bq--;) Oq = bq(Oq.times(Oq), Aq);
            return Nq.precision = aq, null == Eq ? (xq = !0, bq(Oq, aq)) : Oq
          }
          Oq = mq
        }
      }

      function tq(qq) {
        for (var Eq = 7 * qq.e, gq = qq.d[0]; gq >= 10; gq /= 10) Eq++;
        return Eq
      }

      function rq(qq, Eq, gq) {
        if (Eq > qq.LN10.sd()) throw xq = !0, gq && (qq.precision = gq), Error(Aq + "LN10 precision limit exceeded");
        return bq(new qq(qq.LN10), Eq)
      }

      function vq(qq) {
        for (var Eq = ""; qq--;) Eq += "0";
        return Eq
      }

      function hq(qq, Eq) {
        var gq, Yq, Oq, mq, cq, uq, Bq, Wq, Nq, aq = 1,
          Vq = qq,
          dq = Vq.d,
          jq = Vq.constructor,
          Hq = jq.precision;
        if (Vq.s < 1) throw Error(Aq + (Vq.s ? "NaN" : "-Infinity"));
        if (Vq.eq(lq)) return new jq(0);
        if (null == Eq ? (xq = !1, Wq = Hq) : Wq = Eq, Vq.eq(10)) return null == Eq && (xq = !0), rq(jq, Wq);
        if (Wq += 10, jq.precision = Wq, Yq = (gq = Pq(dq)).charAt(0), mq = tq(Vq), !(Math.abs(mq) < 15e14)) return Bq = rq(jq, Wq + 2, Hq).times(mq + ""), Vq = hq(new jq(Yq + "." + gq.slice(1)), Wq - 10).plus(Bq), jq.precision = Hq, null == Eq ? (xq = !0, bq(Vq, Hq)) : Vq;
        for (; Yq < 7 && 1 != Yq || 1 == Yq && gq.charAt(1) > 3;) Yq = (gq = Pq((Vq = Vq.times(qq)).d)).charAt(0), aq++;
        for (mq = tq(Vq), Yq > 1 ? (Vq = new jq("0." + gq), mq++) : Vq = new jq(Yq + "." + gq.slice(1)), uq = cq = Vq = Qq(Vq.minus(lq), Vq.plus(lq), Wq), Nq = bq(Vq.times(Vq), Wq), Oq = 3;;) {
          if (cq = bq(cq.times(Nq), Wq), Pq((Bq = uq.plus(Qq(cq, new jq(Oq), Wq))).d).slice(0, Wq) === Pq(uq.d).slice(0, Wq)) return uq = uq.times(2), 0 !== mq && (uq = uq.plus(rq(jq, Wq + 2, Hq).times(mq + ""))), uq = Qq(uq, new jq(aq), Wq), jq.precision = Hq, null == Eq ? (xq = !0, bq(uq, Hq)) : uq;
          uq = Bq, Oq += 2
        }
      }

      function nq(qq, Eq) {
        var gq, Yq, lq;
        for ((gq = Eq.indexOf(".")) > -1 && (Eq = Eq.replace(".", "")), (Yq = Eq.search(/e/i)) > 0 ? (gq < 0 && (gq = Yq), gq += +Eq.slice(Yq + 1), Eq = Eq.substring(0, Yq)) : gq < 0 && (gq = Eq.length), Yq = 0; 48 === Eq.charCodeAt(Yq);) ++Yq;
        for (lq = Eq.length; 48 === Eq.charCodeAt(lq - 1);) --lq;
        if (Eq = Eq.slice(Yq, lq)) {
          if (lq -= Yq, gq = gq - Yq - 1, qq.e = Bq(gq / 7), qq.d = [], Yq = (gq + 1) % 7, gq < 0 && (Yq += 7), Yq < lq) {
            for (Yq && qq.d.push(+Eq.slice(0, Yq)), lq -= 7; Yq < lq;) qq.d.push(+Eq.slice(Yq, Yq += 7));
            Yq = 7 - (Eq = Eq.slice(Yq)).length
          } else Yq -= lq;
          for (; Yq--;) Eq += "0";
          if (qq.d.push(+Eq), xq && (qq.e > dq || qq.e < -dq)) throw Error(uq + gq)
        } else qq.s = 0, qq.e = 0, qq.d = [0];
        return qq
      }

      function bq(qq, Eq, gq) {
        var Yq, lq, Oq, mq, Aq, cq, Nq, Vq, jq = qq.d;
        for (mq = 1, Oq = jq[0]; Oq >= 10; Oq /= 10) mq++;
        if ((Yq = Eq - mq) < 0) Yq += 7, lq = Eq, Nq = jq[Vq = 0];
        else {
          if ((Vq = Math.ceil((Yq + 1) / 7)) >= (Oq = jq.length)) return qq;
          for (Nq = Oq = jq[Vq], mq = 1; Oq >= 10; Oq /= 10) mq++;
          lq = (Yq %= 7) - 7 + mq
        }
        if (void 0 !== gq && (Aq = Nq / (Oq = Wq(10, mq - lq - 1)) % 10 | 0, cq = Eq < 0 || void 0 !== jq[Vq + 1] || Nq % Oq, cq = gq < 4 ? (Aq || cq) && (0 == gq || gq == (qq.s < 0 ? 3 : 2)) : Aq > 5 || 5 == Aq && (4 == gq || cq || 6 == gq && (Yq > 0 ? lq > 0 ? Nq / Wq(10, mq - lq) : 0 : jq[Vq - 1]) % 10 & 1 || gq == (qq.s < 0 ? 8 : 7))), Eq < 1 || !jq[0]) return cq ? (Oq = tq(qq), jq.length = 1, Eq = Eq - Oq - 1, jq[0] = Wq(10, (7 - Eq % 7) % 7), qq.e = Bq(-Eq / 7) || 0) : (jq.length = 1, jq[0] = qq.e = qq.s = 0), qq;
        if (0 == Yq ? (jq.length = Vq, Oq = 1, Vq--) : (jq.length = Vq + 1, Oq = Wq(10, 7 - Yq), jq[Vq] = lq > 0 ? (Nq / Wq(10, mq - lq) % Wq(10, lq) | 0) * Oq : 0), cq)
          for (;;) {
            if (0 == Vq) {
              (jq[0] += Oq) == aq && (jq[0] = 1, ++qq.e);
              break
            }
            if (jq[Vq] += Oq, jq[Vq] != aq) break;
            jq[Vq--] = 0, Oq = 1
          }
        for (Yq = jq.length; 0 === jq[--Yq];) jq.pop();
        if (xq && (qq.e > dq || qq.e < -dq)) throw Error(uq + tq(qq));
        return qq
      }

      function iq(qq, Eq) {
        var gq, Yq, lq, Oq, mq, Aq, cq, uq, Bq, Wq, Nq = qq.constructor,
          Vq = Nq.precision;
        if (!qq.s || !Eq.s) return Eq.s ? Eq.s = -Eq.s : Eq = new Nq(qq), xq ? bq(Eq, Vq) : Eq;
        if (cq = qq.d, Wq = Eq.d, Yq = Eq.e, uq = qq.e, cq = cq.slice(), mq = uq - Yq) {
          for ((Bq = mq < 0) ? (gq = cq, mq = -mq, Aq = Wq.length) : (gq = Wq, Yq = uq, Aq = cq.length), mq > (lq = Math.max(Math.ceil(Vq / 7), Aq) + 2) && (mq = lq, gq.length = 1), gq.reverse(), lq = mq; lq--;) gq.push(0);
          gq.reverse()
        } else {
          for ((Bq = (lq = cq.length) < (Aq = Wq.length)) && (Aq = lq), lq = 0; lq < Aq; lq++)
            if (cq[lq] != Wq[lq]) {
              Bq = cq[lq] < Wq[lq];
              break
            } mq = 0
        }
        for (Bq && (gq = cq, cq = Wq, Wq = gq, Eq.s = -Eq.s), Aq = cq.length, lq = Wq.length - Aq; lq > 0; --lq) cq[Aq++] = 0;
        for (lq = Wq.length; lq > mq;) {
          if (cq[--lq] < Wq[lq]) {
            for (Oq = lq; Oq && 0 === cq[--Oq];) cq[Oq] = aq - 1;
            --cq[Oq], cq[lq] += aq
          }
          cq[lq] -= Wq[lq]
        }
        for (; 0 === cq[--Aq];) cq.pop();
        for (; 0 === cq[0]; cq.shift()) --Yq;
        return cq[0] ? (Eq.d = cq, Eq.e = Yq, xq ? bq(Eq, Vq) : Eq) : new Nq(0)
      }

      function Zq(qq, Eq, gq) {
        var Yq, lq = tq(qq),
          Oq = Pq(qq.d),
          mq = Oq.length;
        return Eq ? (gq && (Yq = gq - mq) > 0 ? Oq = Oq.charAt(0) + "." + Oq.slice(1) + vq(Yq) : mq > 1 && (Oq = Oq.charAt(0) + "." + Oq.slice(1)), Oq = Oq + (lq < 0 ? "e" : "e+") + lq) : lq < 0 ? (Oq = "0." + vq(-lq - 1) + Oq, gq && (Yq = gq - mq) > 0 && (Oq += vq(Yq))) : lq >= mq ? (Oq += vq(lq + 1 - mq), gq && (Yq = gq - lq - 1) > 0 && (Oq = Oq + "." + vq(Yq))) : ((Yq = lq + 1) < mq && (Oq = Oq.slice(0, Yq) + "." + Oq.slice(Yq)), gq && (Yq = gq - mq) > 0 && (lq + 1 === mq && (Oq += "."), Oq += vq(Yq))), qq.s < 0 ? "-" + Oq : Oq
      }

      function fq(qq, Eq) {
        if (qq.length > Eq) return qq.length = Eq, !0
      }

      function Mq(qq) {
        if (!qq || "object" !== typeof qq) throw Error(Aq + "Object expected");
        var Eq, gq, Yq, lq = ["precision", 1, Oq, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (Eq = 0; Eq < lq.length; Eq += 3)
          if (void 0 !== (Yq = qq[gq = lq[Eq]])) {
            if (!(Bq(Yq) === Yq && Yq >= lq[Eq + 1] && Yq <= lq[Eq + 2])) throw Error(cq + gq + ": " + Yq);
            this[gq] = Yq
          } if (void 0 !== (Yq = qq[gq = "LN10"])) {
          if (Yq != Math.LN10) throw Error(cq + gq + ": " + Yq);
          this[gq] = new this(Yq)
        }
        return this
      }
      mq = function qq(Eq) {
        var gq, Yq, lq;

        function Oq(qq) {
          var Eq = this;
          if (!(Eq instanceof Oq)) return new Oq(qq);
          if (Eq.constructor = Oq, qq instanceof Oq) return Eq.s = qq.s, Eq.e = qq.e, void(Eq.d = (qq = qq.d) ? qq.slice() : qq);
          if ("number" === typeof qq) {
            if (0 * qq !== 0) throw Error(cq + qq);
            if (qq > 0) Eq.s = 1;
            else {
              if (!(qq < 0)) return Eq.s = 0, Eq.e = 0, void(Eq.d = [0]);
              qq = -qq, Eq.s = -1
            }
            return qq === ~~qq && qq < 1e7 ? (Eq.e = 0, void(Eq.d = [qq])) : nq(Eq, qq.toString())
          }
          if ("string" !== typeof qq) throw Error(cq + qq);
          if (45 === qq.charCodeAt(0) ? (qq = qq.slice(1), Eq.s = -1) : Eq.s = 1, !Nq.test(qq)) throw Error(cq + qq);
          nq(Eq, qq)
        }
        if (Oq.prototype = jq, Oq.ROUND_UP = 0, Oq.ROUND_DOWN = 1, Oq.ROUND_CEIL = 2, Oq.ROUND_FLOOR = 3, Oq.ROUND_HALF_UP = 4, Oq.ROUND_HALF_DOWN = 5, Oq.ROUND_HALF_EVEN = 6, Oq.ROUND_HALF_CEIL = 7, Oq.ROUND_HALF_FLOOR = 8, Oq.clone = qq, Oq.config = Oq.set = Mq, void 0 === Eq && (Eq = {}), Eq)
          for (lq = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], gq = 0; gq < lq.length;) Eq.hasOwnProperty(Yq = lq[gq++]) || (Eq[Yq] = this[Yq]);
        return Oq.config(Eq), Oq
      }(mq), mq.default = mq.Decimal = mq, lq = new mq(1), void 0 === (Yq = function() {
        return mq
      }.call(Eq, gq, Eq, qq)) || (qq.exports = Yq)
    }()
  },
  5652: (qq, Eq, gq) => {
    var Yq = gq(5092)(gq(4935), "DataView");
    qq.exports = Yq
  },
  5071: (qq, Eq, gq) => {
    var Yq = gq(5075),
      lq = gq(5129),
      Oq = gq(5134),
      mq = gq(5143),
      xq = gq(5148);

    function Aq(qq) {
      var Eq = -1,
        gq = null == qq ? 0 : qq.length;
      for (this.clear(); ++Eq < gq;) {
        var Yq = qq[Eq];
        this.set(Yq[0], Yq[1])
      }
    }
    Aq.prototype.clear = Yq, Aq.prototype.delete = lq, Aq.prototype.get = Oq, Aq.prototype.has = mq, Aq.prototype.set = xq, qq.exports = Aq
  },
  5153: (qq, Eq, gq) => {
    var Yq = gq(5161),
      lq = gq(5170),
      Oq = gq(5191),
      mq = gq(5195),
      xq = gq(5204);

    function Aq(qq) {
      var Eq = -1,
        gq = null == qq ? 0 : qq.length;
      for (this.clear(); ++Eq < gq;) {
        var Yq = qq[Eq];
        this.set(Yq[0], Yq[1])
      }
    }
    Aq.prototype.clear = Yq, Aq.prototype.delete = lq, Aq.prototype.get = Oq, Aq.prototype.has = mq, Aq.prototype.set = xq, qq.exports = Aq
  },
  5211: (qq, Eq, gq) => {
    var Yq = gq(5092)(gq(4935), "Map");
    qq.exports = Yq
  },
  5060: (qq, Eq, gq) => {
    var Yq = gq(5064),
      lq = gq(5220),
      Oq = gq(5239),
      mq = gq(5242),
      xq = gq(5249);

    function Aq(qq) {
      var Eq = -1,
        gq = null == qq ? 0 : qq.length;
      for (this.clear(); ++Eq < gq;) {
        var Yq = qq[Eq];
        this.set(Yq[0], Yq[1])
      }
    }
    Aq.prototype.clear = Yq, Aq.prototype.delete = lq, Aq.prototype.get = Oq, Aq.prototype.has = mq, Aq.prototype.set = xq, qq.exports = Aq
  },
  5661: (qq, Eq, gq) => {
    var Yq = gq(5092)(gq(4935), "Promise");
    qq.exports = Yq
  },
  5663: (qq, Eq, gq) => {
    var Yq = gq(5092)(gq(4935), "Set");
    qq.exports = Yq
  },
  5467: (qq, Eq, gq) => {
    var Yq = gq(5060),
      lq = gq(5476),
      Oq = gq(5484);

    function mq(qq) {
      var Eq = -1,
        gq = null == qq ? 0 : qq.length;
      for (this.__data__ = new Yq; ++Eq < gq;) this.add(qq[Eq])
    }
    mq.prototype.add = mq.prototype.push = lq, mq.prototype.has = Oq, qq.exports = mq
  },
  5435: (qq, Eq, gq) => {
    var Yq = gq(5153),
      lq = gq(5438),
      Oq = gq(5440),
      mq = gq(5443),
      xq = gq(5445),
      Aq = gq(5447);

    function cq(qq) {
      var Eq = this.__data__ = new Yq(qq);
      this.size = Eq.size
    }
    cq.prototype.clear = lq, cq.prototype.delete = Oq, cq.prototype.get = mq, cq.prototype.has = xq, cq.prototype.set = Aq, qq.exports = cq
  },
  4976: (qq, Eq, gq) => {
    var Yq = gq(4935).Symbol;
    qq.exports = Yq
  },
  5510: (qq, Eq, gq) => {
    var Yq = gq(4935).Uint8Array;
    qq.exports = Yq
  },
  5665: (qq, Eq, gq) => {
    var Yq = gq(5092)(gq(4935), "WeakMap");
    qq.exports = Yq
  },
  5799: qq => {
    qq.exports = function(qq, Eq, gq) {
      switch (gq.length) {
        case 0:
          return qq.call(Eq);
        case 1:
          return qq.call(Eq, gq[0]);
        case 2:
          return qq.call(Eq, gq[0], gq[1]);
        case 3:
          return qq.call(Eq, gq[0], gq[1], gq[2])
      }
      return qq.apply(Eq, gq)
    }
  },
  6143: qq => {
    qq.exports = function(qq, Eq) {
      for (var gq = -1, Yq = null == qq ? 0 : qq.length; ++gq < Yq;)
        if (!Eq(qq[gq], gq, qq)) return !1;
      return !0
    }
  },
  5559: qq => {
    qq.exports = function(qq, Eq) {
      for (var gq = -1, Yq = null == qq ? 0 : qq.length, lq = 0, Oq = []; ++gq < Yq;) {
        var mq = qq[gq];
        Eq(mq, gq, qq) && (Oq[lq++] = mq)
      }
      return Oq
    }
  },
  5877: (qq, Eq, gq) => {
    var Yq = gq(5882);
    qq.exports = function(qq, Eq) {
      return !!(null == qq ? 0 : qq.length) && Yq(qq, Eq, 0) > -1
    }
  },
  5914: qq => {
    qq.exports = function(qq, Eq, gq) {
      for (var Yq = -1, lq = null == qq ? 0 : qq.length; ++Yq < lq;)
        if (gq(Eq, qq[Yq])) return !0;
      return !1
    }
  },
  5581: (qq, Eq, gq) => {
    var Yq = gq(5583),
      lq = gq(5401),
      Oq = gq(4994),
      mq = gq(5589),
      xq = gq(5369),
      Aq = gq(5599),
      cq = Object.prototype.hasOwnProperty;
    qq.exports = function(qq, Eq) {
      var gq = Oq(qq),
        uq = !gq && lq(qq),
        Bq = !gq && !uq && mq(qq),
        Wq = !gq && !uq && !Bq && Aq(qq),
        Nq = gq || uq || Bq || Wq,
        aq = Nq ? Yq(qq.length, String) : [],
        Vq = aq.length;
      for (var dq in qq) !Eq && !cq.call(qq, dq) || Nq && ("length" == dq || Bq && ("offset" == dq || "parent" == dq) || Wq && ("buffer" == dq || "byteLength" == dq || "byteOffset" == dq) || xq(dq, Vq)) || aq.push(dq);
      return aq
    }
  },
  5269: qq => {
    qq.exports = function(qq, Eq) {
      for (var gq = -1, Yq = null == qq ? 0 : qq.length, lq = Array(Yq); ++gq < Yq;) lq[gq] = Eq(qq[gq], gq, qq);
      return lq
    }
  },
  5383: qq => {
    qq.exports = function(qq, Eq) {
      for (var gq = -1, Yq = Eq.length, lq = qq.length; ++gq < Yq;) qq[lq + gq] = Eq[gq];
      return qq
    }
  },
  5490: qq => {
    qq.exports = function(qq, Eq) {
      for (var gq = -1, Yq = null == qq ? 0 : qq.length; ++gq < Yq;)
        if (Eq(qq[gq], gq, qq)) return !0;
      return !1
    }
  },
  5967: qq => {
    qq.exports = function(qq) {
      return qq.split("")
    }
  },
  5175: (qq, Eq, gq) => {
    var Yq = gq(5182);
    qq.exports = function(qq, Eq) {
      for (var gq = qq.length; gq--;)
        if (Yq(qq[gq][0], Eq)) return gq;
      return -1
    }
  },
  6138: (qq, Eq, gq) => {
    var Yq = gq(5817);
    qq.exports = function(qq, Eq, gq) {
      "__proto__" == Eq && Yq ? Yq(qq, Eq, {
        configurable: !0,
        enumerable: !0,
        value: gq,
        writable: !0
      }) : qq[Eq] = gq
    }
  },
  5741: (qq, Eq, gq) => {
    var Yq = gq(5746),
      lq = gq(5767)(Yq);
    qq.exports = lq
  },
  6152: (qq, Eq, gq) => {
    var Yq = gq(5741);
    qq.exports = function(qq, Eq) {
      var gq = !0;
      return Yq(qq, (function(qq, Yq, lq) {
        return gq = !!Eq(qq, Yq, lq)
      })), gq
    }
  },
  6037: (qq, Eq, gq) => {
    var Yq = gq(4964);
    qq.exports = function(qq, Eq, gq) {
      for (var lq = -1, Oq = qq.length; ++lq < Oq;) {
        var mq = qq[lq],
          xq = Eq(mq);
        if (null != xq && (void 0 === Aq ? xq === xq && !Yq(xq) : gq(xq, Aq))) var Aq = xq,
          cq = mq
      }
      return cq
    }
  },
  5888: qq => {
    qq.exports = function(qq, Eq, gq, Yq) {
      for (var lq = qq.length, Oq = gq + (Yq ? 1 : -1); Yq ? Oq-- : ++Oq < lq;)
        if (Eq(qq[Oq], Oq, qq)) return Oq;
      return -1
    }
  },
  5380: (qq, Eq, gq) => {
    var Yq = gq(5383),
      lq = gq(5392);
    qq.exports = function qq(Eq, gq, Oq, mq, xq) {
      var Aq = -1,
        cq = Eq.length;
      for (Oq || (Oq = lq), xq || (xq = []); ++Aq < cq;) {
        var uq = Eq[Aq];
        gq > 0 && Oq(uq) ? gq > 1 ? qq(uq, gq - 1, Oq, mq, xq) : Yq(xq, uq) : mq || (xq[xq.length] = uq)
      }
      return xq
    }
  },
  5754: (qq, Eq, gq) => {
    var Yq = gq(5763)();
    qq.exports = Yq
  },
  5746: (qq, Eq, gq) => {
    var Yq = gq(5754),
      lq = gq(5575);
    qq.exports = function(qq, Eq) {
      return qq && Yq(qq, Eq, lq)
    }
  },
  5015: (qq, Eq, gq) => {
    var Yq = gq(5021),
      lq = gq(5278);
    qq.exports = function(qq, Eq) {
      for (var gq = 0, Oq = (Eq = Yq(Eq, qq)).length; null != qq && gq < Oq;) qq = qq[lq(Eq[gq++])];
      return gq && gq == Oq ? qq : void 0
    }
  },
  5545: (qq, Eq, gq) => {
    var Yq = gq(5383),
      lq = gq(4994);
    qq.exports = function(qq, Eq, gq) {
      var Oq = Eq(qq);
      return lq(qq) ? Oq : Yq(Oq, gq(qq))
    }
  },
  4969: (qq, Eq, gq) => {
    var Yq = gq(4976),
      lq = gq(4983),
      Oq = gq(4985),
      mq = Yq ? Yq.toStringTag : void 0;
    qq.exports = function(qq) {
      return null == qq ? void 0 === qq ? "[object Undefined]" : "[object Null]" : mq && mq in Object(qq) ? lq(qq) : Oq(qq)
    }
  },
  6043: qq => {
    qq.exports = function(qq, Eq) {
      return qq > Eq
    }
  },
  5701: qq => {
    qq.exports = function(qq, Eq) {
      return null != qq && Eq in Object(qq)
    }
  },
  5882: (qq, Eq, gq) => {
    var Yq = gq(5888),
      lq = gq(5897),
      Oq = gq(5905);
    qq.exports = function(qq, Eq, gq) {
      return Eq === Eq ? Oq(qq, Eq, gq) : Yq(qq, lq, gq)
    }
  },
  5407: (qq, Eq, gq) => {
    var Yq = gq(4969),
      lq = gq(4988);
    qq.exports = function(qq) {
      return lq(qq) && "[object Arguments]" == Yq(qq)
    }
  },
  5455: (qq, Eq, gq) => {
    var Yq = gq(5460),
      lq = gq(4988);
    qq.exports = function qq(Eq, gq, Oq, mq, xq) {
      return Eq === gq || (null == Eq || null == gq || !lq(Eq) && !lq(gq) ? Eq !== Eq && gq !== gq : Yq(Eq, gq, Oq, mq, qq, xq))
    }
  },
  5460: (qq, Eq, gq) => {
    var Yq = gq(5435),
      lq = gq(5464),
      Oq = gq(5506),
      mq = gq(5533),
      xq = gq(5643),
      Aq = gq(4994),
      cq = gq(5589),
      uq = gq(5599),
      Bq = "[object Arguments]",
      Wq = "[object Array]",
      Nq = "[object Object]",
      aq = Object.prototype.hasOwnProperty;
    qq.exports = function(qq, Eq, gq, Vq, dq, jq) {
      var Hq = Aq(qq),
        oq = Aq(Eq),
        Pq = Hq ? Wq : xq(qq),
        Qq = oq ? Wq : xq(Eq),
        yq = (Pq = Pq == Bq ? Nq : Pq) == Nq,
        tq = (Qq = Qq == Bq ? Nq : Qq) == Nq,
        rq = Pq == Qq;
      if (rq && cq(qq)) {
        if (!cq(Eq)) return !1;
        Hq = !0, yq = !1
      }
      if (rq && !yq) return jq || (jq = new Yq), Hq || uq(qq) ? lq(qq, Eq, gq, Vq, dq, jq) : Oq(qq, Eq, Pq, gq, Vq, dq, jq);
      if (!(1 & gq)) {
        var vq = yq && aq.call(qq, "__wrapped__"),
          hq = tq && aq.call(Eq, "__wrapped__");
        if (vq || hq) {
          var nq = vq ? qq.value() : qq,
            bq = hq ? Eq.value() : Eq;
          return jq || (jq = new Yq), dq(nq, bq, gq, Vq, jq)
        }
      }
      return !!rq && (jq || (jq = new Yq), mq(qq, Eq, gq, Vq, dq, jq))
    }
  },
  5426: (qq, Eq, gq) => {
    var Yq = gq(5435),
      lq = gq(5455);
    qq.exports = function(qq, Eq, gq, Oq) {
      var mq = gq.length,
        xq = mq,
        Aq = !Oq;
      if (null == qq) return !xq;
      for (qq = Object(qq); mq--;) {
        var cq = gq[mq];
        if (Aq && cq[2] ? cq[1] !== qq[cq[0]] : !(cq[0] in qq)) return !1
      }
      for (; ++mq < xq;) {
        var uq = (cq = gq[mq])[0],
          Bq = qq[uq],
          Wq = cq[1];
        if (Aq && cq[2]) {
          if (void 0 === Bq && !(uq in qq)) return !1
        } else {
          var Nq = new Yq;
          if (Oq) var aq = Oq(Bq, Wq, uq, qq, Eq, Nq);
          if (!(void 0 === aq ? lq(Wq, Bq, 3, Oq, Nq) : aq)) return !1
        }
      }
      return !0
    }
  },
  5897: qq => {
    qq.exports = function(qq) {
      return qq !== qq
    }
  },
  5097: (qq, Eq, gq) => {
    var Yq = gq(5105),
      lq = gq(5108),
      Oq = gq(4920),
      mq = gq(5120),
      xq = /^\[object .+?Constructor\]$/,
      Aq = Function.prototype,
      cq = Object.prototype,
      uq = Aq.toString,
      Bq = cq.hasOwnProperty,
      Wq = RegExp("^" + uq.call(Bq).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    qq.exports = function(qq) {
      return !(!Oq(qq) || lq(qq)) && (Yq(qq) ? Wq : xq).test(mq(qq))
    }
  },
  5607: (qq, Eq, gq) => {
    var Yq = gq(4969),
      lq = gq(5365),
      Oq = gq(4988),
      mq = {};
    mq["[object Float32Array]"] = mq["[object Float64Array]"] = mq["[object Int8Array]"] = mq["[object Int16Array]"] = mq["[object Int32Array]"] = mq["[object Uint8Array]"] = mq["[object Uint8ClampedArray]"] = mq["[object Uint16Array]"] = mq["[object Uint32Array]"] = !0, mq["[object Arguments]"] = mq["[object Array]"] = mq["[object ArrayBuffer]"] = mq["[object Boolean]"] = mq["[object DataView]"] = mq["[object Date]"] = mq["[object Error]"] = mq["[object Function]"] = mq["[object Map]"] = mq["[object Number]"] = mq["[object Object]"] = mq["[object RegExp]"] = mq["[object Set]"] = mq["[object String]"] = mq["[object WeakMap]"] = !1, qq.exports = function(qq) {
      return Oq(qq) && lq(qq.length) && !!mq[Yq(qq)]
    }
  },
  5418: (qq, Eq, gq) => {
    var Yq = gq(5420),
      lq = gq(5687),
      Oq = gq(5712),
      mq = gq(4994),
      xq = gq(5720);
    qq.exports = function(qq) {
      return "function" == typeof qq ? qq : null == qq ? Oq : "object" == typeof qq ? mq(qq) ? lq(qq[0], qq[1]) : Yq(qq) : xq(qq)
    }
  },
  5628: (qq, Eq, gq) => {
    var Yq = gq(5632),
      lq = gq(5634),
      Oq = Object.prototype.hasOwnProperty;
    qq.exports = function(qq) {
      if (!Yq(qq)) return lq(qq);
      var Eq = [];
      for (var gq in Object(qq)) Oq.call(qq, gq) && "constructor" != gq && Eq.push(gq);
      return Eq
    }
  },
  6054: qq => {
    qq.exports = function(qq, Eq) {
      return qq < Eq
    }
  },
  5735: (qq, Eq, gq) => {
    var Yq = gq(5741),
      lq = gq(5360);
    qq.exports = function(qq, Eq) {
      var gq = -1,
        Oq = lq(qq) ? Array(qq.length) : [];
      return Yq(qq, (function(qq, Yq, lq) {
        Oq[++gq] = Eq(qq, Yq, lq)
      })), Oq
    }
  },
  5420: (qq, Eq, gq) => {
    var Yq = gq(5426),
      lq = gq(5672),
      Oq = gq(5680);
    qq.exports = function(qq) {
      var Eq = lq(qq);
      return 1 == Eq.length && Eq[0][2] ? Oq(Eq[0][0], Eq[0][1]) : function(gq) {
        return gq === qq || Yq(gq, qq, Eq)
      }
    }
  },
  5687: (qq, Eq, gq) => {
    var Yq = gq(5455),
      lq = gq(5010),
      Oq = gq(5693),
      mq = gq(5028),
      xq = gq(5677),
      Aq = gq(5680),
      cq = gq(5278);
    qq.exports = function(qq, Eq) {
      return mq(qq) && xq(Eq) ? Aq(cq(qq), Eq) : function(gq) {
        var mq = lq(gq, qq);
        return void 0 === mq && mq === Eq ? Oq(gq, qq) : Yq(Eq, mq, 3)
      }
    }
  },
  5413: (qq, Eq, gq) => {
    var Yq = gq(5269),
      lq = gq(5015),
      Oq = gq(5418),
      mq = gq(5735),
      xq = gq(5775),
      Aq = gq(5613),
      cq = gq(5783),
      uq = gq(5712),
      Bq = gq(4994);
    qq.exports = function(qq, Eq, gq) {
      Eq = Eq.length ? Yq(Eq, (function(qq) {
        return Bq(qq) ? function(Eq) {
          return lq(Eq, 1 === qq.length ? qq[0] : qq)
        } : qq
      })) : [uq];
      var Wq = -1;
      Eq = Yq(Eq, Aq(Oq));
      var Nq = mq(qq, (function(qq, gq, lq) {
        return {
          criteria: Yq(Eq, (function(Eq) {
            return Eq(qq)
          })),
          index: ++Wq,
          value: qq
        }
      }));
      return xq(Nq, (function(qq, Eq) {
        return cq(qq, Eq, gq)
      }))
    }
  },
  5724: qq => {
    qq.exports = function(qq) {
      return function(Eq) {
        return null == Eq ? void 0 : Eq[qq]
      }
    }
  },
  5726: (qq, Eq, gq) => {
    var Yq = gq(5015);
    qq.exports = function(qq) {
      return function(Eq) {
        return Yq(Eq, qq)
      }
    }
  },
  5352: qq => {
    var Eq = Math.ceil,
      gq = Math.max;
    qq.exports = function(qq, Yq, lq, Oq) {
      for (var mq = -1, xq = gq(Eq((Yq - qq) / (lq || 1)), 0), Aq = Array(xq); xq--;) Aq[Oq ? xq : ++mq] = qq, qq += lq;
      return Aq
    }
  },
  5788: (qq, Eq, gq) => {
    var Yq = gq(5712),
      lq = gq(5795),
      Oq = gq(5802);
    qq.exports = function(qq, Eq) {
      return Oq(lq(qq, Eq, Yq), qq + "")
    }
  },
  5807: (qq, Eq, gq) => {
    var Yq = gq(5815),
      lq = gq(5817),
      Oq = gq(5712),
      mq = lq ? function(qq, Eq) {
        return lq(qq, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Yq(Eq),
          writable: !0
        })
      } : Oq;
    qq.exports = mq
  },
  5955: qq => {
    qq.exports = function(qq, Eq, gq) {
      var Yq = -1,
        lq = qq.length;
      Eq < 0 && (Eq = -Eq > lq ? 0 : lq + Eq), (gq = gq > lq ? lq : gq) < 0 && (gq += lq), lq = Eq > gq ? 0 : gq - Eq >>> 0, Eq >>>= 0;
      for (var Oq = Array(lq); ++Yq < lq;) Oq[Yq] = qq[Yq + Eq];
      return Oq
    }
  },
  6222: (qq, Eq, gq) => {
    var Yq = gq(5741);
    qq.exports = function(qq, Eq) {
      var gq;
      return Yq(qq, (function(qq, Yq, lq) {
        return !(gq = Eq(qq, Yq, lq))
      })), !!gq
    }
  },
  5775: qq => {
    qq.exports = function(qq, Eq) {
      var gq = qq.length;
      for (qq.sort(Eq); gq--;) qq[gq] = qq[gq].value;
      return qq
    }
  },
  5583: qq => {
    qq.exports = function(qq, Eq) {
      for (var gq = -1, Yq = Array(qq); ++gq < qq;) Yq[gq] = Eq(gq);
      return Yq
    }
  },
  5261: (qq, Eq, gq) => {
    var Yq = gq(4976),
      lq = gq(5269),
      Oq = gq(4994),
      mq = gq(4964),
      xq = Yq ? Yq.prototype : void 0,
      Aq = xq ? xq.toString : void 0;
    qq.exports = function qq(Eq) {
      if ("string" == typeof Eq) return Eq;
      if (Oq(Eq)) return lq(Eq, qq) + "";
      if (mq(Eq)) return Aq ? Aq.call(Eq) : "";
      var gq = Eq + "";
      return "0" == gq && 1 / Eq == -1 / 0 ? "-0" : gq
    }
  },
  4951: (qq, Eq, gq) => {
    var Yq = gq(4957),
      lq = /^\s+/;
    qq.exports = function(qq) {
      return qq ? qq.slice(0, Yq(qq) + 1).replace(lq, "") : qq
    }
  },
  5613: qq => {
    qq.exports = function(qq) {
      return function(Eq) {
        return qq(Eq)
      }
    }
  },
  5871: (qq, Eq, gq) => {
    var Yq = gq(5467),
      lq = gq(5877),
      Oq = gq(5914),
      mq = gq(5499),
      xq = gq(5920),
      Aq = gq(5524);
    qq.exports = function(qq, Eq, gq) {
      var cq = -1,
        uq = lq,
        Bq = qq.length,
        Wq = !0,
        Nq = [],
        aq = Nq;
      if (gq) Wq = !1, uq = Oq;
      else if (Bq >= 200) {
        var Vq = Eq ? null : xq(qq);
        if (Vq) return Aq(Vq);
        Wq = !1, uq = mq, aq = new Yq
      } else aq = Eq ? [] : Nq;
      qq: for (; ++cq < Bq;) {
        var dq = qq[cq],
          jq = Eq ? Eq(dq) : dq;
        if (dq = gq || 0 !== dq ? dq : 0, Wq && jq === jq) {
          for (var Hq = aq.length; Hq--;)
            if (aq[Hq] === jq) continue qq;
          Eq && aq.push(jq), Nq.push(dq)
        } else uq(aq, jq, gq) || (aq !== Nq && aq.push(jq), Nq.push(dq))
      }
      return Nq
    }
  },
  5499: qq => {
    qq.exports = function(qq, Eq) {
      return qq.has(Eq)
    }
  },
  5021: (qq, Eq, gq) => {
    var Yq = gq(4994),
      lq = gq(5028),
      Oq = gq(5035),
      mq = gq(5258);
    qq.exports = function(qq, Eq) {
      return Yq(qq) ? qq : lq(qq, Eq) ? [qq] : Oq(mq(qq))
    }
  },
  5952: (qq, Eq, gq) => {
    var Yq = gq(5955);
    qq.exports = function(qq, Eq, gq) {
      var lq = qq.length;
      return gq = void 0 === gq ? lq : gq, !Eq && gq >= lq ? qq : Yq(qq, Eq, gq)
    }
  },
  5786: (qq, Eq, gq) => {
    var Yq = gq(4964);
    qq.exports = function(qq, Eq) {
      if (qq !== Eq) {
        var gq = void 0 !== qq,
          lq = null === qq,
          Oq = qq === qq,
          mq = Yq(qq),
          xq = void 0 !== Eq,
          Aq = null === Eq,
          cq = Eq === Eq,
          uq = Yq(Eq);
        if (!Aq && !uq && !mq && qq > Eq || mq && xq && cq && !Aq && !uq || lq && xq && cq || !gq && cq || !Oq) return 1;
        if (!lq && !mq && !uq && qq < Eq || uq && gq && Oq && !lq && !mq || Aq && gq && Oq || !xq && Oq || !cq) return -1
      }
      return 0
    }
  },
  5783: (qq, Eq, gq) => {
    var Yq = gq(5786);
    qq.exports = function(qq, Eq, gq) {
      for (var lq = -1, Oq = qq.criteria, mq = Eq.criteria, xq = Oq.length, Aq = gq.length; ++lq < xq;) {
        var cq = Yq(Oq[lq], mq[lq]);
        if (cq) return lq >= Aq ? cq : cq * ("desc" == gq[lq] ? -1 : 1)
      }
      return qq.index - Eq.index
    }
  },
  5112: (qq, Eq, gq) => {
    var Yq = gq(4935)["__core-js_shared__"];
    qq.exports = Yq
  },
  5767: (qq, Eq, gq) => {
    var Yq = gq(5360);
    qq.exports = function(qq, Eq) {
      return function(gq, lq) {
        if (null == gq) return gq;
        if (!Yq(gq)) return qq(gq, lq);
        for (var Oq = gq.length, mq = Eq ? Oq : -1, xq = Object(gq);
          (Eq ? mq-- : ++mq < Oq) && !1 !== lq(xq[mq], mq, xq););
        return gq
      }
    }
  },
  5763: qq => {
    qq.exports = function(qq) {
      return function(Eq, gq, Yq) {
        for (var lq = -1, Oq = Object(Eq), mq = Yq(Eq), xq = mq.length; xq--;) {
          var Aq = mq[qq ? xq : ++lq];
          if (!1 === gq(Oq[Aq], Aq, Oq)) break
        }
        return Eq
      }
    }
  },
  5944: (qq, Eq, gq) => {
    var Yq = gq(5952),
      lq = gq(5957),
      Oq = gq(5963),
      mq = gq(5258);
    qq.exports = function(qq) {
      return function(Eq) {
        Eq = mq(Eq);
        var gq = lq(Eq) ? Oq(Eq) : void 0,
          xq = gq ? gq[0] : Eq.charAt(0),
          Aq = gq ? Yq(gq, 1).join("") : Eq.slice(1);
        return xq[qq]() + Aq
      }
    }
  },
  6237: (qq, Eq, gq) => {
    var Yq = gq(5418),
      lq = gq(5360),
      Oq = gq(5575);
    qq.exports = function(qq) {
      return function(Eq, gq, mq) {
        var xq = Object(Eq);
        if (!lq(Eq)) {
          var Aq = Yq(gq, 3);
          Eq = Oq(Eq), gq = function(qq) {
            return Aq(xq[qq], qq, xq)
          }
        }
        var cq = qq(Eq, gq, mq);
        return cq > -1 ? xq[Aq ? Eq[cq] : cq] : void 0
      }
    }
  },
  5346: (qq, Eq, gq) => {
    var Yq = gq(5352),
      lq = gq(5357),
      Oq = gq(5372);
    qq.exports = function(qq) {
      return function(Eq, gq, mq) {
        return mq && "number" != typeof mq && lq(Eq, gq, mq) && (gq = mq = void 0), Eq = Oq(Eq), void 0 === gq ? (gq = Eq, Eq = 0) : gq = Oq(gq), mq = void 0 === mq ? Eq < gq ? 1 : -1 : Oq(mq), Yq(Eq, gq, mq, qq)
      }
    }
  },
  5920: (qq, Eq, gq) => {
    var Yq = gq(5663),
      lq = gq(5922),
      Oq = gq(5524),
      mq = Yq && 1 / Oq(new Yq([, -0]))[1] == 1 / 0 ? function(qq) {
        return new Yq(qq)
      } : lq;
    qq.exports = mq
  },
  5817: (qq, Eq, gq) => {
    var Yq = gq(5092),
      lq = function() {
        try {
          var qq = Yq(Object, "defineProperty");
          return qq({}, "", {}), qq
        } catch (Eq) {}
      }();
    qq.exports = lq
  },
  5464: (qq, Eq, gq) => {
    var Yq = gq(5467),
      lq = gq(5490),
      Oq = gq(5499);
    qq.exports = function(qq, Eq, gq, mq, xq, Aq) {
      var cq = 1 & gq,
        uq = qq.length,
        Bq = Eq.length;
      if (uq != Bq && !(cq && Bq > uq)) return !1;
      var Wq = Aq.get(qq),
        Nq = Aq.get(Eq);
      if (Wq && Nq) return Wq == Eq && Nq == qq;
      var aq = -1,
        Vq = !0,
        dq = 2 & gq ? new Yq : void 0;
      for (Aq.set(qq, Eq), Aq.set(Eq, qq); ++aq < uq;) {
        var jq = qq[aq],
          Hq = Eq[aq];
        if (mq) var oq = cq ? mq(Hq, jq, aq, Eq, qq, Aq) : mq(jq, Hq, aq, qq, Eq, Aq);
        if (void 0 !== oq) {
          if (oq) continue;
          Vq = !1;
          break
        }
        if (dq) {
          if (!lq(Eq, (function(qq, Eq) {
              if (!Oq(dq, Eq) && (jq === qq || xq(jq, qq, gq, mq, Aq))) return dq.push(Eq)
            }))) {
            Vq = !1;
            break
          }
        } else if (jq !== Hq && !xq(jq, Hq, gq, mq, Aq)) {
          Vq = !1;
          break
        }
      }
      return Aq.delete(qq), Aq.delete(Eq), Vq
    }
  },
  5506: (qq, Eq, gq) => {
    var Yq = gq(4976),
      lq = gq(5510),
      Oq = gq(5182),
      mq = gq(5464),
      xq = gq(5516),
      Aq = gq(5524),
      cq = Yq ? Yq.prototype : void 0,
      uq = cq ? cq.valueOf : void 0;
    qq.exports = function(qq, Eq, gq, Yq, cq, Bq, Wq) {
      switch (gq) {
        case "[object DataView]":
          if (qq.byteLength != Eq.byteLength || qq.byteOffset != Eq.byteOffset) return !1;
          qq = qq.buffer, Eq = Eq.buffer;
        case "[object ArrayBuffer]":
          return !(qq.byteLength != Eq.byteLength || !Bq(new lq(qq), new lq(Eq)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return Oq(+qq, +Eq);
        case "[object Error]":
          return qq.name == Eq.name && qq.message == Eq.message;
        case "[object RegExp]":
        case "[object String]":
          return qq == Eq + "";
        case "[object Map]":
          var Nq = xq;
        case "[object Set]":
          var aq = 1 & Yq;
          if (Nq || (Nq = Aq), qq.size != Eq.size && !aq) return !1;
          var Vq = Wq.get(qq);
          if (Vq) return Vq == Eq;
          Yq |= 2, Wq.set(qq, Eq);
          var dq = mq(Nq(qq), Nq(Eq), Yq, cq, Bq, Wq);
          return Wq.delete(qq), dq;
        case "[object Symbol]":
          if (uq) return uq.call(qq) == uq.call(Eq)
      }
      return !1
    }
  },
  5533: (qq, Eq, gq) => {
    var Yq = gq(5536),
      lq = Object.prototype.hasOwnProperty;
    qq.exports = function(qq, Eq, gq, Oq, mq, xq) {
      var Aq = 1 & gq,
        cq = Yq(qq),
        uq = cq.length;
      if (uq != Yq(Eq).length && !Aq) return !1;
      for (var Bq = uq; Bq--;) {
        var Wq = cq[Bq];
        if (!(Aq ? Wq in Eq : lq.call(Eq, Wq))) return !1
      }
      var Nq = xq.get(qq),
        aq = xq.get(Eq);
      if (Nq && aq) return Nq == Eq && aq == qq;
      var Vq = !0;
      xq.set(qq, Eq), xq.set(Eq, qq);
      for (var dq = Aq; ++Bq < uq;) {
        var jq = qq[Wq = cq[Bq]],
          Hq = Eq[Wq];
        if (Oq) var oq = Aq ? Oq(Hq, jq, Wq, Eq, qq, xq) : Oq(jq, Hq, Wq, qq, Eq, xq);
        if (!(void 0 === oq ? jq === Hq || mq(jq, Hq, gq, Oq, xq) : oq)) {
          Vq = !1;
          break
        }
        dq || (dq = "constructor" == Wq)
      }
      if (Vq && !dq) {
        var Pq = qq.constructor,
          Qq = Eq.constructor;
        Pq == Qq || !("constructor" in qq) || !("constructor" in Eq) || "function" == typeof Pq && Pq instanceof Pq && "function" == typeof Qq && Qq instanceof Qq || (Vq = !1)
      }
      return xq.delete(qq), xq.delete(Eq), Vq
    }
  },
  4944: (qq, Eq, gq) => {
    var Yq = "object" == typeof gq.g && gq.g && gq.g.Object === Object && gq.g;
    qq.exports = Yq
  },
  5536: (qq, Eq, gq) => {
    var Yq = gq(5545),
      lq = gq(5554),
      Oq = gq(5575);
    qq.exports = function(qq) {
      return Yq(qq, Oq, lq)
    }
  },
  5228: (qq, Eq, gq) => {
    var Yq = gq(5236);
    qq.exports = function(qq, Eq) {
      var gq = qq.__data__;
      return Yq(Eq) ? gq["string" == typeof Eq ? "string" : "hash"] : gq.map
    }
  },
  5672: (qq, Eq, gq) => {
    var Yq = gq(5677),
      lq = gq(5575);
    qq.exports = function(qq) {
      for (var Eq = lq(qq), gq = Eq.length; gq--;) {
        var Oq = Eq[gq],
          mq = qq[Oq];
        Eq[gq] = [Oq, mq, Yq(mq)]
      }
      return Eq
    }
  },
  5092: (qq, Eq, gq) => {
    var Yq = gq(5097),
      lq = gq(5126);
    qq.exports = function(qq, Eq) {
      var gq = lq(qq, Eq);
      return Yq(gq) ? gq : void 0
    }
  },
  6199: (qq, Eq, gq) => {
    var Yq = gq(5637)(Object.getPrototypeOf, Object);
    qq.exports = Yq
  },
  4983: (qq, Eq, gq) => {
    var Yq = gq(4976),
      lq = Object.prototype,
      Oq = lq.hasOwnProperty,
      mq = lq.toString,
      xq = Yq ? Yq.toStringTag : void 0;
    qq.exports = function(qq) {
      var Eq = Oq.call(qq, xq),
        gq = qq[xq];
      try {
        qq[xq] = void 0;
        var Yq = !0
      } catch (Aq) {}
      var lq = mq.call(qq);
      return Yq && (Eq ? qq[xq] = gq : delete qq[xq]), lq
    }
  },
  5554: (qq, Eq, gq) => {
    var Yq = gq(5559),
      lq = gq(5566),
      Oq = Object.prototype.propertyIsEnumerable,
      mq = Object.getOwnPropertySymbols,
      xq = mq ? function(qq) {
        return null == qq ? [] : (qq = Object(qq), Yq(mq(qq), (function(Eq) {
          return Oq.call(qq, Eq)
        })))
      } : lq;
    qq.exports = xq
  },
  5643: (qq, Eq, gq) => {
    var Yq = gq(5652),
      lq = gq(5211),
      Oq = gq(5661),
      mq = gq(5663),
      xq = gq(5665),
      Aq = gq(4969),
      cq = gq(5120),
      uq = "[object Map]",
      Bq = "[object Promise]",
      Wq = "[object Set]",
      Nq = "[object WeakMap]",
      aq = "[object DataView]",
      Vq = cq(Yq),
      dq = cq(lq),
      jq = cq(Oq),
      Hq = cq(mq),
      oq = cq(xq),
      Pq = Aq;
    (Yq && Pq(new Yq(new ArrayBuffer(1))) != aq || lq && Pq(new lq) != uq || Oq && Pq(Oq.resolve()) != Bq || mq && Pq(new mq) != Wq || xq && Pq(new xq) != Nq) && (Pq = function(qq) {
      var Eq = Aq(qq),
        gq = "[object Object]" == Eq ? qq.constructor : void 0,
        Yq = gq ? cq(gq) : "";
      if (Yq) switch (Yq) {
        case Vq:
          return aq;
        case dq:
          return uq;
        case jq:
          return Bq;
        case Hq:
          return Wq;
        case oq:
          return Nq
      }
      return Eq
    }), qq.exports = Pq
  },
  5126: qq => {
    qq.exports = function(qq, Eq) {
      return null == qq ? void 0 : qq[Eq]
    }
  },
  5710: (qq, Eq, gq) => {
    var Yq = gq(5021),
      lq = gq(5401),
      Oq = gq(4994),
      mq = gq(5369),
      xq = gq(5365),
      Aq = gq(5278);
    qq.exports = function(qq, Eq, gq) {
      for (var cq = -1, uq = (Eq = Yq(Eq, qq)).length, Bq = !1; ++cq < uq;) {
        var Wq = Aq(Eq[cq]);
        if (!(Bq = null != qq && gq(qq, Wq))) break;
        qq = qq[Wq]
      }
      return Bq || ++cq != uq ? Bq : !!(uq = null == qq ? 0 : qq.length) && xq(uq) && mq(Wq, uq) && (Oq(qq) || lq(qq))
    }
  },
  5957: qq => {
    var Eq = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    qq.exports = function(qq) {
      return Eq.test(qq)
    }
  },
  5075: (qq, Eq, gq) => {
    var Yq = gq(5083);
    qq.exports = function() {
      this.__data__ = Yq ? Yq(null) : {}, this.size = 0
    }
  },
  5129: qq => {
    qq.exports = function(qq) {
      var Eq = this.has(qq) && delete this.__data__[qq];
      return this.size -= Eq ? 1 : 0, Eq
    }
  },
  5134: (qq, Eq, gq) => {
    var Yq = gq(5083),
      lq = Object.prototype.hasOwnProperty;
    qq.exports = function(qq) {
      var Eq = this.__data__;
      if (Yq) {
        var gq = Eq[qq];
        return "__lodash_hash_undefined__" === gq ? void 0 : gq
      }
      return lq.call(Eq, qq) ? Eq[qq] : void 0
    }
  },
  5143: (qq, Eq, gq) => {
    var Yq = gq(5083),
      lq = Object.prototype.hasOwnProperty;
    qq.exports = function(qq) {
      var Eq = this.__data__;
      return Yq ? void 0 !== Eq[qq] : lq.call(Eq, qq)
    }
  },
  5148: (qq, Eq, gq) => {
    var Yq = gq(5083);
    qq.exports = function(qq, Eq) {
      var gq = this.__data__;
      return this.size += this.has(qq) ? 0 : 1, gq[qq] = Yq && void 0 === Eq ? "__lodash_hash_undefined__" : Eq, this
    }
  },
  5392: (qq, Eq, gq) => {
    var Yq = gq(4976),
      lq = gq(5401),
      Oq = gq(4994),
      mq = Yq ? Yq.isConcatSpreadable : void 0;
    qq.exports = function(qq) {
      return Oq(qq) || lq(qq) || !!(mq && qq && qq[mq])
    }
  },
  5369: qq => {
    var Eq = /^(?:0|[1-9]\d*)$/;
    qq.exports = function(qq, gq) {
      var Yq = typeof qq;
      return !!(gq = null == gq ? 9007199254740991 : gq) && ("number" == Yq || "symbol" != Yq && Eq.test(qq)) && qq > -1 && qq % 1 == 0 && qq < gq
    }
  },
  5357: (qq, Eq, gq) => {
    var Yq = gq(5182),
      lq = gq(5360),
      Oq = gq(5369),
      mq = gq(4920);
    qq.exports = function(qq, Eq, gq) {
      if (!mq(gq)) return !1;
      var xq = typeof Eq;
      return !!("number" == xq ? lq(gq) && Oq(Eq, gq.length) : "string" == xq && Eq in gq) && Yq(gq[Eq], qq)
    }
  },
  5028: (qq, Eq, gq) => {
    var Yq = gq(4994),
      lq = gq(4964),
      Oq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      mq = /^\w*$/;
    qq.exports = function(qq, Eq) {
      if (Yq(qq)) return !1;
      var gq = typeof qq;
      return !("number" != gq && "symbol" != gq && "boolean" != gq && null != qq && !lq(qq)) || (mq.test(qq) || !Oq.test(qq) || null != Eq && qq in Object(Eq))
    }
  },
  5236: qq => {
    qq.exports = function(qq) {
      var Eq = typeof qq;
      return "string" == Eq || "number" == Eq || "symbol" == Eq || "boolean" == Eq ? "__proto__" !== qq : null === qq
    }
  },
  5108: (qq, Eq, gq) => {
    var Yq = gq(5112),
      lq = function() {
        var qq = /[^.]+$/.exec(Yq && Yq.keys && Yq.keys.IE_PROTO || "");
        return qq ? "Symbol(src)_1." + qq : ""
      }();
    qq.exports = function(qq) {
      return !!lq && lq in qq
    }
  },
  5632: qq => {
    var Eq = Object.prototype;
    qq.exports = function(qq) {
      var gq = qq && qq.constructor;
      return qq === ("function" == typeof gq && gq.prototype || Eq)
    }
  },
  5677: (qq, Eq, gq) => {
    var Yq = gq(4920);
    qq.exports = function(qq) {
      return qq === qq && !Yq(qq)
    }
  },
  5161: qq => {
    qq.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5170: (qq, Eq, gq) => {
    var Yq = gq(5175),
      lq = Array.prototype.splice;
    qq.exports = function(qq) {
      var Eq = this.__data__,
        gq = Yq(Eq, qq);
      return !(gq < 0) && (gq == Eq.length - 1 ? Eq.pop() : lq.call(Eq, gq, 1), --this.size, !0)
    }
  },
  5191: (qq, Eq, gq) => {
    var Yq = gq(5175);
    qq.exports = function(qq) {
      var Eq = this.__data__,
        gq = Yq(Eq, qq);
      return gq < 0 ? void 0 : Eq[gq][1]
    }
  },
  5195: (qq, Eq, gq) => {
    var Yq = gq(5175);
    qq.exports = function(qq) {
      return Yq(this.__data__, qq) > -1
    }
  },
  5204: (qq, Eq, gq) => {
    var Yq = gq(5175);
    qq.exports = function(qq, Eq) {
      var gq = this.__data__,
        lq = Yq(gq, qq);
      return lq < 0 ? (++this.size, gq.push([qq, Eq])) : gq[lq][1] = Eq, this
    }
  },
  5064: (qq, Eq, gq) => {
    var Yq = gq(5071),
      lq = gq(5153),
      Oq = gq(5211);
    qq.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new Yq,
        map: new(Oq || lq),
        string: new Yq
      }
    }
  },
  5220: (qq, Eq, gq) => {
    var Yq = gq(5228);
    qq.exports = function(qq) {
      var Eq = Yq(this, qq).delete(qq);
      return this.size -= Eq ? 1 : 0, Eq
    }
  },
  5239: (qq, Eq, gq) => {
    var Yq = gq(5228);
    qq.exports = function(qq) {
      return Yq(this, qq).get(qq)
    }
  },
  5242: (qq, Eq, gq) => {
    var Yq = gq(5228);
    qq.exports = function(qq) {
      return Yq(this, qq).has(qq)
    }
  },
  5249: (qq, Eq, gq) => {
    var Yq = gq(5228);
    qq.exports = function(qq, Eq) {
      var gq = Yq(this, qq),
        lq = gq.size;
      return gq.set(qq, Eq), this.size += gq.size == lq ? 0 : 1, this
    }
  },
  5516: qq => {
    qq.exports = function(qq) {
      var Eq = -1,
        gq = Array(qq.size);
      return qq.forEach((function(qq, Yq) {
        gq[++Eq] = [Yq, qq]
      })), gq
    }
  },
  5680: qq => {
    qq.exports = function(qq, Eq) {
      return function(gq) {
        return null != gq && (gq[qq] === Eq && (void 0 !== Eq || qq in Object(gq)))
      }
    }
  },
  5044: (qq, Eq, gq) => {
    var Yq = gq(5053);
    qq.exports = function(qq) {
      var Eq = Yq(qq, (function(qq) {
          return 500 === gq.size && gq.clear(), qq
        })),
        gq = Eq.cache;
      return Eq
    }
  },
  5083: (qq, Eq, gq) => {
    var Yq = gq(5092)(Object, "create");
    qq.exports = Yq
  },
  5634: (qq, Eq, gq) => {
    var Yq = gq(5637)(Object.keys, Object);
    qq.exports = Yq
  },
  5619: (qq, Eq, gq) => {
    qq = gq.nmd(qq);
    var Yq = gq(4944),
      lq = Eq && !Eq.nodeType && Eq,
      Oq = lq && qq && !qq.nodeType && qq,
      mq = Oq && Oq.exports === lq && Yq.process,
      xq = function() {
        try {
          var qq = Oq && Oq.require && Oq.require("util").types;
          return qq || mq && mq.binding && mq.binding("util")
        } catch (Eq) {}
      }();
    qq.exports = xq
  },
  4985: qq => {
    var Eq = Object.prototype.toString;
    qq.exports = function(qq) {
      return Eq.call(qq)
    }
  },
  5637: qq => {
    qq.exports = function(qq, Eq) {
      return function(gq) {
        return qq(Eq(gq))
      }
    }
  },
  5795: (qq, Eq, gq) => {
    var Yq = gq(5799),
      lq = Math.max;
    qq.exports = function(qq, Eq, gq) {
      return Eq = lq(void 0 === Eq ? qq.length - 1 : Eq, 0),
        function() {
          for (var Oq = arguments, mq = -1, xq = lq(Oq.length - Eq, 0), Aq = Array(xq); ++mq < xq;) Aq[mq] = Oq[Eq + mq];
          mq = -1;
          for (var cq = Array(Eq + 1); ++mq < Eq;) cq[mq] = Oq[mq];
          return cq[Eq] = gq(Aq), Yq(qq, this, cq)
        }
    }
  },
  4935: (qq, Eq, gq) => {
    var Yq = gq(4944),
      lq = "object" == typeof self && self && self.Object === Object && self,
      Oq = Yq || lq || Function("return this")();
    qq.exports = Oq
  },
  5476: qq => {
    qq.exports = function(qq) {
      return this.__data__.set(qq, "__lodash_hash_undefined__"), this
    }
  },
  5484: qq => {
    qq.exports = function(qq) {
      return this.__data__.has(qq)
    }
  },
  5524: qq => {
    qq.exports = function(qq) {
      var Eq = -1,
        gq = Array(qq.size);
      return qq.forEach((function(qq) {
        gq[++Eq] = qq
      })), gq
    }
  },
  5802: (qq, Eq, gq) => {
    var Yq = gq(5807),
      lq = gq(5824)(Yq);
    qq.exports = lq
  },
  5824: qq => {
    var Eq = Date.now;
    qq.exports = function(qq) {
      var gq = 0,
        Yq = 0;
      return function() {
        var lq = Eq(),
          Oq = 16 - (lq - Yq);
        if (Yq = lq, Oq > 0) {
          if (++gq >= 800) return arguments[0]
        } else gq = 0;
        return qq.apply(void 0, arguments)
      }
    }
  },
  5438: (qq, Eq, gq) => {
    var Yq = gq(5153);
    qq.exports = function() {
      this.__data__ = new Yq, this.size = 0
    }
  },
  5440: qq => {
    qq.exports = function(qq) {
      var Eq = this.__data__,
        gq = Eq.delete(qq);
      return this.size = Eq.size, gq
    }
  },
  5443: qq => {
    qq.exports = function(qq) {
      return this.__data__.get(qq)
    }
  },
  5445: qq => {
    qq.exports = function(qq) {
      return this.__data__.has(qq)
    }
  },
  5447: (qq, Eq, gq) => {
    var Yq = gq(5153),
      lq = gq(5211),
      Oq = gq(5060);
    qq.exports = function(qq, Eq) {
      var gq = this.__data__;
      if (gq instanceof Yq) {
        var mq = gq.__data__;
        if (!lq || mq.length < 199) return mq.push([qq, Eq]), this.size = ++gq.size, this;
        gq = this.__data__ = new Oq(mq)
      }
      return gq.set(qq, Eq), this.size = gq.size, this
    }
  },
  5905: qq => {
    qq.exports = function(qq, Eq, gq) {
      for (var Yq = gq - 1, lq = qq.length; ++Yq < lq;)
        if (qq[Yq] === Eq) return Yq;
      return -1
    }
  },
  5963: (qq, Eq, gq) => {
    var Yq = gq(5967),
      lq = gq(5957),
      Oq = gq(5973);
    qq.exports = function(qq) {
      return lq(qq) ? Oq(qq) : Yq(qq)
    }
  },
  5035: (qq, Eq, gq) => {
    var Yq = gq(5044),
      lq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Oq = /\\(\\)?/g,
      mq = Yq((function(qq) {
        var Eq = [];
        return 46 === qq.charCodeAt(0) && Eq.push(""), qq.replace(lq, (function(qq, gq, Yq, lq) {
          Eq.push(Yq ? lq.replace(Oq, "$1") : gq || qq)
        })), Eq
      }));
    qq.exports = mq
  },
  5278: (qq, Eq, gq) => {
    var Yq = gq(4964);
    qq.exports = function(qq) {
      if ("string" == typeof qq || Yq(qq)) return qq;
      var Eq = qq + "";
      return "0" == Eq && 1 / qq == -1 / 0 ? "-0" : Eq
    }
  },
  5120: qq => {
    var Eq = Function.prototype.toString;
    qq.exports = function(qq) {
      if (null != qq) {
        try {
          return Eq.call(qq)
        } catch (gq) {}
        try {
          return qq + ""
        } catch (gq) {}
      }
      return ""
    }
  },
  4957: qq => {
    var Eq = /\s/;
    qq.exports = function(qq) {
      for (var gq = qq.length; gq-- && Eq.test(qq.charAt(gq)););
      return gq
    }
  },
  5973: qq => {
    var Eq = "\\ud800-\\udfff",
      gq = "[" + Eq + "]",
      Yq = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      lq = "\\ud83c[\\udffb-\\udfff]",
      Oq = "[^" + Eq + "]",
      mq = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      xq = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Aq = "(?:" + Yq + "|" + lq + ")" + "?",
      cq = "[\\ufe0e\\ufe0f]?",
      uq = cq + Aq + ("(?:\\u200d(?:" + [Oq, mq, xq].join("|") + ")" + cq + Aq + ")*"),
      Bq = "(?:" + [Oq + Yq + "?", Yq, mq, xq, gq].join("|") + ")",
      Wq = RegExp(lq + "(?=" + lq + ")|" + Bq + uq, "g");
    qq.exports = function(qq) {
      return qq.match(Wq) || []
    }
  },
  5815: qq => {
    qq.exports = function(qq) {
      return function() {
        return qq
      }
    }
  },
  4917: (qq, Eq, gq) => {
    var Yq = gq(4920),
      lq = gq(4929),
      Oq = gq(4949),
      mq = Math.max,
      xq = Math.min;
    qq.exports = function(qq, Eq, gq) {
      var Aq, cq, uq, Bq, Wq, Nq, aq = 0,
        Vq = !1,
        dq = !1,
        jq = !0;
      if ("function" != typeof qq) throw new TypeError("Expected a function");

      function Hq(Eq) {
        var gq = Aq,
          Yq = cq;
        return Aq = cq = void 0, aq = Eq, Bq = qq.apply(Yq, gq)
      }

      function oq(qq) {
        var gq = qq - Nq;
        return void 0 === Nq || gq >= Eq || gq < 0 || dq && qq - aq >= uq
      }

      function Pq() {
        var qq = lq();
        if (oq(qq)) return Qq(qq);
        Wq = setTimeout(Pq, function(qq) {
          var gq = Eq - (qq - Nq);
          return dq ? xq(gq, uq - (qq - aq)) : gq
        }(qq))
      }

      function Qq(qq) {
        return Wq = void 0, jq && Aq ? Hq(qq) : (Aq = cq = void 0, Bq)
      }

      function yq() {
        var qq = lq(),
          gq = oq(qq);
        if (Aq = arguments, cq = this, Nq = qq, gq) {
          if (void 0 === Wq) return function(qq) {
            return aq = qq, Wq = setTimeout(Pq, Eq), Vq ? Hq(qq) : Bq
          }(Nq);
          if (dq) return clearTimeout(Wq), Wq = setTimeout(Pq, Eq), Hq(Nq)
        }
        return void 0 === Wq && (Wq = setTimeout(Pq, Eq)), Bq
      }
      return Eq = Oq(Eq) || 0, Yq(gq) && (Vq = !!gq.leading, uq = (dq = "maxWait" in gq) ? mq(Oq(gq.maxWait) || 0, Eq) : uq, jq = "trailing" in gq ? !!gq.trailing : jq), yq.cancel = function() {
        void 0 !== Wq && clearTimeout(Wq), aq = 0, Aq = Nq = cq = Wq = void 0
      }, yq.flush = function() {
        return void 0 === Wq ? Bq : Qq(lq())
      }, yq
    }
  },
  5182: qq => {
    qq.exports = function(qq, Eq) {
      return qq === Eq || qq !== qq && Eq !== Eq
    }
  },
  6140: (qq, Eq, gq) => {
    var Yq = gq(6143),
      lq = gq(6152),
      Oq = gq(5418),
      mq = gq(4994),
      xq = gq(5357);
    qq.exports = function(qq, Eq, gq) {
      var Aq = mq(qq) ? Yq : lq;
      return gq && xq(qq, Eq, gq) && (Eq = void 0), Aq(qq, Oq(Eq, 3))
    }
  },
  6235: (qq, Eq, gq) => {
    var Yq = gq(6237)(gq(6242));
    qq.exports = Yq
  },
  6242: (qq, Eq, gq) => {
    var Yq = gq(5888),
      lq = gq(5418),
      Oq = gq(6246),
      mq = Math.max;
    qq.exports = function(qq, Eq, gq) {
      var xq = null == qq ? 0 : qq.length;
      if (!xq) return -1;
      var Aq = null == gq ? 0 : Oq(gq);
      return Aq < 0 && (Aq = mq(xq + Aq, 0)), Yq(qq, lq(Eq, 3), Aq)
    }
  },
  6060: (qq, Eq, gq) => {
    var Yq = gq(5380),
      lq = gq(6069);
    qq.exports = function(qq, Eq) {
      return Yq(lq(qq, Eq), 1)
    }
  },
  5010: (qq, Eq, gq) => {
    var Yq = gq(5015);
    qq.exports = function(qq, Eq, gq) {
      var lq = null == qq ? void 0 : Yq(qq, Eq);
      return void 0 === lq ? gq : lq
    }
  },
  5693: (qq, Eq, gq) => {
    var Yq = gq(5701),
      lq = gq(5710);
    qq.exports = function(qq, Eq) {
      return null != qq && lq(qq, Eq, Yq)
    }
  },
  5712: qq => {
    qq.exports = function(qq) {
      return qq
    }
  },
  5401: (qq, Eq, gq) => {
    var Yq = gq(5407),
      lq = gq(4988),
      Oq = Object.prototype,
      mq = Oq.hasOwnProperty,
      xq = Oq.propertyIsEnumerable,
      Aq = Yq(function() {
        return arguments
      }()) ? Yq : function(qq) {
        return lq(qq) && mq.call(qq, "callee") && !xq.call(qq, "callee")
      };
    qq.exports = Aq
  },
  4994: qq => {
    var Eq = Array.isArray;
    qq.exports = Eq
  },
  5360: (qq, Eq, gq) => {
    var Yq = gq(5105),
      lq = gq(5365);
    qq.exports = function(qq) {
      return null != qq && lq(qq.length) && !Yq(qq)
    }
  },
  6201: (qq, Eq, gq) => {
    var Yq = gq(4969),
      lq = gq(4988);
    qq.exports = function(qq) {
      return !0 === qq || !1 === qq || lq(qq) && "[object Boolean]" == Yq(qq)
    }
  },
  5589: (qq, Eq, gq) => {
    qq = gq.nmd(qq);
    var Yq = gq(4935),
      lq = gq(5593),
      Oq = Eq && !Eq.nodeType && Eq,
      mq = Oq && qq && !qq.nodeType && qq,
      xq = mq && mq.exports === Oq ? Yq.IN : void 0,
      Aq = (xq ? xq.isBuffer : void 0) || lq;
    qq.exports = Aq
  },
  6078: (qq, Eq, gq) => {
    var Yq = gq(5455);
    qq.exports = function(qq, Eq) {
      return Yq(qq, Eq)
    }
  },
  5105: (qq, Eq, gq) => {
    var Yq = gq(4969),
      lq = gq(4920);
    qq.exports = function(qq) {
      if (!lq(qq)) return !1;
      var Eq = Yq(qq);
      return "[object Function]" == Eq || "[object GeneratorFunction]" == Eq || "[object AsyncFunction]" == Eq || "[object Proxy]" == Eq
    }
  },
  5365: qq => {
    qq.exports = function(qq) {
      return "number" == typeof qq && qq > -1 && qq % 1 == 0 && qq <= 9007199254740991
    }
  },
  4998: (qq, Eq, gq) => {
    var Yq = gq(5001);
    qq.exports = function(qq) {
      return Yq(qq) && qq != +qq
    }
  },
  5285: qq => {
    qq.exports = function(qq) {
      return null == qq
    }
  },
  5001: (qq, Eq, gq) => {
    var Yq = gq(4969),
      lq = gq(4988);
    qq.exports = function(qq) {
      return "number" == typeof qq || lq(qq) && "[object Number]" == Yq(qq)
    }
  },
  4920: qq => {
    qq.exports = function(qq) {
      var Eq = typeof qq;
      return null != qq && ("object" == Eq || "function" == Eq)
    }
  },
  4988: qq => {
    qq.exports = function(qq) {
      return null != qq && "object" == typeof qq
    }
  },
  6192: (qq, Eq, gq) => {
    var Yq = gq(4969),
      lq = gq(6199),
      Oq = gq(4988),
      mq = Function.prototype,
      xq = Object.prototype,
      Aq = mq.toString,
      cq = xq.hasOwnProperty,
      uq = Aq.call(Object);
    qq.exports = function(qq) {
      if (!Oq(qq) || "[object Object]" != Yq(qq)) return !1;
      var Eq = lq(qq);
      if (null === Eq) return !0;
      var gq = cq.call(Eq, "constructor") && Eq.constructor;
      return "function" == typeof gq && gq instanceof gq && Aq.call(gq) == uq
    }
  },
  4992: (qq, Eq, gq) => {
    var Yq = gq(4969),
      lq = gq(4994),
      Oq = gq(4988);
    qq.exports = function(qq) {
      return "string" == typeof qq || !lq(qq) && Oq(qq) && "[object String]" == Yq(qq)
    }
  },
  4964: (qq, Eq, gq) => {
    var Yq = gq(4969),
      lq = gq(4988);
    qq.exports = function(qq) {
      return "symbol" == typeof qq || lq(qq) && "[object Symbol]" == Yq(qq)
    }
  },
  5599: (qq, Eq, gq) => {
    var Yq = gq(5607),
      lq = gq(5613),
      Oq = gq(5619),
      mq = Oq && Oq.isTypedArray,
      xq = mq ? lq(mq) : Yq;
    qq.exports = xq
  },
  5575: (qq, Eq, gq) => {
    var Yq = gq(5581),
      lq = gq(5628),
      Oq = gq(5360);
    qq.exports = function(qq) {
      return Oq(qq) ? Yq(qq) : lq(qq)
    }
  },
  6179: qq => {
    qq.exports = function(qq) {
      var Eq = null == qq ? 0 : qq.length;
      return Eq ? qq[Eq - 1] : void 0
    }
  },
  6069: (qq, Eq, gq) => {
    var Yq = gq(5269),
      lq = gq(5418),
      Oq = gq(5735),
      mq = gq(4994);
    qq.exports = function(qq, Eq) {
      return (mq(qq) ? Yq : Oq)(qq, lq(Eq, 3))
    }
  },
  6133: (qq, Eq, gq) => {
    var Yq = gq(6138),
      lq = gq(5746),
      Oq = gq(5418);
    qq.exports = function(qq, Eq) {
      var gq = {};
      return Eq = Oq(Eq, 3), lq(qq, (function(qq, lq, Oq) {
        Yq(gq, lq, Eq(qq, lq, Oq))
      })), gq
    }
  },
  6031: (qq, Eq, gq) => {
    var Yq = gq(6037),
      lq = gq(6043),
      Oq = gq(5712);
    qq.exports = function(qq) {
      return qq && qq.length ? Yq(qq, Oq, lq) : void 0
    }
  },
  5053: (qq, Eq, gq) => {
    var Yq = gq(5060);

    function lq(qq, Eq) {
      if ("function" != typeof qq || null != Eq && "function" != typeof Eq) throw new TypeError("Expected a function");
      var gq = function() {
        var Yq = arguments,
          lq = Eq ? Eq.apply(this, Yq) : Yq[0],
          Oq = gq.cache;
        if (Oq.has(lq)) return Oq.get(lq);
        var mq = qq.apply(this, Yq);
        return gq.cache = Oq.set(lq, mq) || Oq, mq
      };
      return gq.cache = new(lq.Cache || Yq), gq
    }
    lq.Cache = Yq, qq.exports = lq
  },
  6045: (qq, Eq, gq) => {
    var Yq = gq(6037),
      lq = gq(6054),
      Oq = gq(5712);
    qq.exports = function(qq) {
      return qq && qq.length ? Yq(qq, Oq, lq) : void 0
    }
  },
  5922: qq => {
    qq.exports = function() {}
  },
  4929: (qq, Eq, gq) => {
    var Yq = gq(4935);
    qq.exports = function() {
      return Yq.Date.now()
    }
  },
  5720: (qq, Eq, gq) => {
    var Yq = gq(5724),
      lq = gq(5726),
      Oq = gq(5028),
      mq = gq(5278);
    qq.exports = function(qq) {
      return Oq(qq) ? Yq(mq(qq)) : lq(qq)
    }
  },
  5344: (qq, Eq, gq) => {
    var Yq = gq(5346)();
    qq.exports = Yq
  },
  6216: (qq, Eq, gq) => {
    var Yq = gq(5490),
      lq = gq(5418),
      Oq = gq(6222),
      mq = gq(4994),
      xq = gq(5357);
    qq.exports = function(qq, Eq, gq) {
      var Aq = mq(qq) ? Yq : Oq;
      return gq && xq(qq, Eq, gq) && (Eq = void 0), Aq(qq, lq(Eq, 3))
    }
  },
  5377: (qq, Eq, gq) => {
    var Yq = gq(5380),
      lq = gq(5413),
      Oq = gq(5788),
      mq = gq(5357),
      xq = Oq((function(qq, Eq) {
        if (null == qq) return [];
        var gq = Eq.length;
        return gq > 1 && mq(qq, Eq[0], Eq[1]) ? Eq = [] : gq > 2 && mq(Eq[0], Eq[1], Eq[2]) && (Eq = [Eq[0]]), lq(qq, Yq(Eq, 1), [])
      }));
    qq.exports = xq
  },
  5566: qq => {
    qq.exports = function() {
      return []
    }
  },
  5593: qq => {
    qq.exports = function() {
      return !1
    }
  },
  4912: (qq, Eq, gq) => {
    var Yq = gq(4917),
      lq = gq(4920);
    qq.exports = function(qq, Eq, gq) {
      var Oq = !0,
        mq = !0;
      if ("function" != typeof qq) throw new TypeError("Expected a function");
      return lq(gq) && (Oq = "leading" in gq ? !!gq.leading : Oq, mq = "trailing" in gq ? !!gq.trailing : mq), Yq(qq, Eq, {
        leading: Oq,
        maxWait: Eq,
        trailing: mq
      })
    }
  },
  5372: (qq, Eq, gq) => {
    var Yq = gq(4949),
      lq = 1 / 0;
    qq.exports = function(qq) {
      return qq ? (qq = Yq(qq)) === lq || qq === -1 / 0 ? 17976931348623157e292 * (qq < 0 ? -1 : 1) : qq === qq ? qq : 0 : 0 === qq ? qq : 0
    }
  },
  6246: (qq, Eq, gq) => {
    var Yq = gq(5372);
    qq.exports = function(qq) {
      var Eq = Yq(qq),
        gq = Eq % 1;
      return Eq === Eq ? gq ? Eq - gq : Eq : 0
    }
  },
  4949: (qq, Eq, gq) => {
    var Yq = gq(4951),
      lq = gq(4920),
      Oq = gq(4964),
      mq = /^[-+]0x[0-9a-f]+$/i,
      xq = /^0b[01]+$/i,
      Aq = /^0o[0-7]+$/i,
      cq = parseInt;
    qq.exports = function(qq) {
      if ("number" == typeof qq) return qq;
      if (Oq(qq)) return NaN;
      if (lq(qq)) {
        var Eq = "function" == typeof qq.valueOf ? qq.valueOf() : qq;
        qq = lq(Eq) ? Eq + "" : Eq
      }
      if ("string" != typeof qq) return 0 === qq ? qq : +qq;
      qq = Yq(qq);
      var gq = xq.test(qq);
      return gq || Aq.test(qq) ? cq(qq.slice(2), gq ? 2 : 8) : mq.test(qq) ? NaN : +qq
    }
  },
  5258: (qq, Eq, gq) => {
    var Yq = gq(5261);
    qq.exports = function(qq) {
      return null == qq ? "" : Yq(qq)
    }
  },
  5864: (qq, Eq, gq) => {
    var Yq = gq(5418),
      lq = gq(5871);
    qq.exports = function(qq, Eq) {
      return qq && qq.length ? lq(qq, Yq(Eq, 2)) : []
    }
  },
  5941: (qq, Eq, gq) => {
    var Yq = gq(5944)("toUpperCase");
    qq.exports = Yq
  },
  5994: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => SE
    });
    var Yq = gq(57),
      lq = gq(4800),
      Oq = gq.n(lq);
    const {
      getOwnPropertyNames: mq,
      getOwnPropertySymbols: xq
    } = Object, {
      hasOwnProperty: Aq
    } = Object.prototype;

    function cq(qq, Eq) {
      return function(gq, Yq, lq) {
        return qq(gq, Yq, lq) && Eq(gq, Yq, lq)
      }
    }

    function uq(qq) {
      return function(Eq, gq, Yq) {
        if (!Eq || !gq || "object" !== typeof Eq || "object" !== typeof gq) return qq(Eq, gq, Yq);
        const {
          cache: lq
        } = Yq, Oq = lq.get(Eq), mq = lq.get(gq);
        if (Oq && mq) return Oq === gq && mq === Eq;
        lq.set(Eq, gq), lq.set(gq, Eq);
        const xq = qq(Eq, gq, Yq);
        return lq.delete(Eq), lq.delete(gq), xq
      }
    }

    function Bq(qq) {
      return mq(qq).concat(xq(qq))
    }
    const Wq = Object.hasOwn || ((qq, Eq) => Aq.call(qq, Eq));

    function Nq(qq, Eq) {
      return qq === Eq || !qq && !Eq && qq !== qq && Eq !== Eq
    }
    const {
      getOwnPropertyDescriptor: aq,
      keys: Vq
    } = Object;

    function dq(qq, Eq) {
      return qq.byteLength === Eq.byteLength && iq(new Uint8Array(qq), new Uint8Array(Eq))
    }

    function jq(qq, Eq, gq) {
      let Yq = qq.length;
      if (Eq.length !== Yq) return !1;
      for (; Yq-- > 0;)
        if (!gq.equals(qq[Yq], Eq[Yq], Yq, Yq, qq, Eq, gq)) return !1;
      return !0
    }

    function Hq(qq, Eq) {
      return qq.byteLength === Eq.byteLength && iq(new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength), new Uint8Array(Eq.buffer, Eq.byteOffset, Eq.byteLength))
    }

    function oq(qq, Eq) {
      return Nq(qq.getTime(), Eq.getTime())
    }

    function Pq(qq, Eq) {
      return qq.name === Eq.name && qq.message === Eq.message && qq.cause === Eq.cause && qq.stack === Eq.stack
    }

    function Qq(qq, Eq) {
      return qq === Eq
    }

    function yq(qq, Eq, gq) {
      const Yq = qq.size;
      if (Yq !== Eq.size) return !1;
      if (!Yq) return !0;
      const lq = new Array(Yq),
        Oq = qq.entries();
      let mq, xq, Aq = 0;
      for (;
        (mq = Oq.next()) && !mq.done;) {
        const Yq = Eq.entries();
        let Oq = !1,
          cq = 0;
        for (;
          (xq = Yq.next()) && !xq.done;) {
          if (lq[cq]) {
            cq++;
            continue
          }
          const Yq = mq.value,
            uq = xq.value;
          if (gq.equals(Yq[0], uq[0], Aq, cq, qq, Eq, gq) && gq.equals(Yq[1], uq[1], Yq[0], uq[0], qq, Eq, gq)) {
            Oq = lq[cq] = !0;
            break
          }
          cq++
        }
        if (!Oq) return !1;
        Aq++
      }
      return !0
    }
    const tq = Nq;

    function rq(qq, Eq, gq) {
      const Yq = Vq(qq);
      let lq = Yq.length;
      if (Vq(Eq).length !== lq) return !1;
      for (; lq-- > 0;)
        if (!fq(qq, Eq, gq, Yq[lq])) return !1;
      return !0
    }

    function vq(qq, Eq, gq) {
      const Yq = Bq(qq);
      let lq, Oq, mq, xq = Yq.length;
      if (Bq(Eq).length !== xq) return !1;
      for (; xq-- > 0;) {
        if (lq = Yq[xq], !fq(qq, Eq, gq, lq)) return !1;
        if (Oq = aq(qq, lq), mq = aq(Eq, lq), (Oq || mq) && (!Oq || !mq || Oq.configurable !== mq.configurable || Oq.enumerable !== mq.enumerable || Oq.writable !== mq.writable)) return !1
      }
      return !0
    }

    function hq(qq, Eq) {
      return Nq(qq.valueOf(), Eq.valueOf())
    }

    function nq(qq, Eq) {
      return qq.source === Eq.source && qq.flags === Eq.flags
    }

    function bq(qq, Eq, gq) {
      const Yq = qq.size;
      if (Yq !== Eq.size) return !1;
      if (!Yq) return !0;
      const lq = new Array(Yq),
        Oq = qq.values();
      let mq, xq;
      for (;
        (mq = Oq.next()) && !mq.done;) {
        const Yq = Eq.values();
        let Oq = !1,
          Aq = 0;
        for (;
          (xq = Yq.next()) && !xq.done;) {
          if (!lq[Aq] && gq.equals(mq.value, xq.value, mq.value, xq.value, qq, Eq, gq)) {
            Oq = lq[Aq] = !0;
            break
          }
          Aq++
        }
        if (!Oq) return !1
      }
      return !0
    }

    function iq(qq, Eq) {
      let gq = qq.byteLength;
      if (Eq.byteLength !== gq || qq.byteOffset !== Eq.byteOffset) return !1;
      for (; gq-- > 0;)
        if (qq[gq] !== Eq[gq]) return !1;
      return !0
    }

    function Zq(qq, Eq) {
      return qq.hostname === Eq.hostname && qq.pathname === Eq.pathname && qq.protocol === Eq.protocol && qq.port === Eq.port && qq.hash === Eq.hash && qq.username === Eq.username && qq.password === Eq.password
    }

    function fq(qq, Eq, gq, Yq) {
      return !("_owner" !== Yq && "__o" !== Yq && "__v" !== Yq || !qq.$$typeof && !Eq.$$typeof) || Wq(Eq, Yq) && gq.equals(qq[Yq], Eq[Yq], Yq, Yq, qq, Eq, gq)
    }
    const Mq = {
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
      Tq = Object.prototype.toString;

    function zq(qq) {
      let {
        areArrayBuffersEqual: Eq,
        areArraysEqual: gq,
        areDataViewsEqual: Yq,
        areDatesEqual: lq,
        areErrorsEqual: Oq,
        areFunctionsEqual: mq,
        areMapsEqual: xq,
        areNumbersEqual: Aq,
        areObjectsEqual: cq,
        arePrimitiveWrappersEqual: uq,
        areRegExpsEqual: Bq,
        areSetsEqual: Wq,
        areTypedArraysEqual: Nq,
        areUrlsEqual: aq,
        unknownTagComparators: Vq
      } = qq;
      return function(qq, dq, jq) {
        if (qq === dq) return !0;
        if (null == qq || null == dq) return !1;
        const Hq = typeof qq;
        if (Hq !== typeof dq) return !1;
        if ("object" !== Hq) return "number" === Hq ? Aq(qq, dq, jq) : "function" === Hq && mq(qq, dq, jq);
        const oq = qq.constructor;
        if (oq !== dq.constructor) return !1;
        if (oq === Object) return cq(qq, dq, jq);
        if (Array.isArray(qq)) return gq(qq, dq, jq);
        if (oq === Date) return lq(qq, dq, jq);
        if (oq === RegExp) return Bq(qq, dq, jq);
        if (oq === Map) return xq(qq, dq, jq);
        if (oq === Set) return Wq(qq, dq, jq);
        const Pq = Tq.call(qq);
        if ("[object Date]" === Pq) return lq(qq, dq, jq);
        if ("[object RegExp]" === Pq) return Bq(qq, dq, jq);
        if ("[object Map]" === Pq) return xq(qq, dq, jq);
        if ("[object Set]" === Pq) return Wq(qq, dq, jq);
        if ("[object Object]" === Pq) return "function" !== typeof qq.then && "function" !== typeof dq.then && cq(qq, dq, jq);
        if ("[object URL]" === Pq) return aq(qq, dq, jq);
        if ("[object Error]" === Pq) return Oq(qq, dq, jq);
        if ("[object Arguments]" === Pq) return cq(qq, dq, jq);
        if (Mq[Pq]) return Nq(qq, dq, jq);
        if ("[object ArrayBuffer]" === Pq) return Eq(qq, dq, jq);
        if ("[object DataView]" === Pq) return Yq(qq, dq, jq);
        if ("[object Boolean]" === Pq || "[object Number]" === Pq || "[object String]" === Pq) return uq(qq, dq, jq);
        if (Vq) {
          let Eq = Vq[Pq];
          if (!Eq) {
            const gq = null != (Qq = qq) ? Qq[Symbol.toStringTag] : void 0;
            gq && (Eq = Vq[gq])
          }
          if (Eq) return Eq(qq, dq, jq)
        }
        var Qq;
        return !1
      }
    }
    const Sq = pq();
    pq({
      strict: !0
    }), pq({
      circular: !0
    }), pq({
      circular: !0,
      strict: !0
    }), pq({
      createInternalComparator: () => Nq
    }), pq({
      strict: !0,
      createInternalComparator: () => Nq
    }), pq({
      circular: !0,
      createInternalComparator: () => Nq
    }), pq({
      circular: !0,
      createInternalComparator: () => Nq,
      strict: !0
    });

    function pq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: Eq = !1,
        createInternalComparator: gq,
        createState: Yq,
        strict: lq = !1
      } = qq, Oq = function(qq) {
        let {
          circular: Eq,
          createCustomConfig: gq,
          strict: Yq
        } = qq, lq = {
          areArrayBuffersEqual: dq,
          areArraysEqual: Yq ? vq : jq,
          areDataViewsEqual: Hq,
          areDatesEqual: oq,
          areErrorsEqual: Pq,
          areFunctionsEqual: Qq,
          areMapsEqual: Yq ? cq(yq, vq) : yq,
          areNumbersEqual: tq,
          areObjectsEqual: Yq ? vq : rq,
          arePrimitiveWrappersEqual: hq,
          areRegExpsEqual: nq,
          areSetsEqual: Yq ? cq(bq, vq) : bq,
          areTypedArraysEqual: Yq ? cq(iq, vq) : iq,
          areUrlsEqual: Zq,
          unknownTagComparators: void 0
        };
        if (gq && (lq = Object.assign({}, lq, gq(lq))), Eq) {
          const qq = uq(lq.areArraysEqual),
            Eq = uq(lq.areMapsEqual),
            gq = uq(lq.areObjectsEqual),
            Yq = uq(lq.areSetsEqual);
          lq = Object.assign({}, lq, {
            areArraysEqual: qq,
            areMapsEqual: Eq,
            areObjectsEqual: gq,
            areSetsEqual: Yq
          })
        }
        return lq
      }(qq), mq = zq(Oq);
      var xq;
      return function(qq) {
        let {
          circular: Eq,
          comparator: gq,
          createState: Yq,
          equals: lq,
          strict: Oq
        } = qq;
        if (Yq) return function(qq, mq) {
          const {
            cache: xq = (Eq ? new WeakMap : void 0),
            meta: Aq
          } = Yq();
          return gq(qq, mq, {
            cache: xq,
            equals: lq,
            meta: Aq,
            strict: Oq
          })
        };
        if (Eq) return function(qq, Eq) {
          return gq(qq, Eq, {
            cache: new WeakMap,
            equals: lq,
            meta: void 0,
            strict: Oq
          })
        };
        const mq = {
          cache: void 0,
          equals: lq,
          meta: void 0,
          strict: Oq
        };
        return function(qq, Eq) {
          return gq(qq, Eq, mq)
        }
      }({
        circular: Eq,
        comparator: mq,
        createState: Yq,
        equals: gq ? gq(mq) : (xq = mq, function(qq, Eq, gq, Yq, lq, Oq, mq) {
          return xq(qq, Eq, mq)
        }),
        strict: lq
      })
    }

    function Gq(qq) {
      var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gq = -1;
      requestAnimationFrame((function Yq(lq) {
        gq < 0 && (gq = lq), lq - gq > Eq ? (qq(lq), gq = -1) : function(qq) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(qq)
        }(Yq)
      }))
    }

    function Lq(qq) {
      return Lq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Lq(qq)
    }

    function Jq(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return kq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return kq(qq, Eq)
      }(qq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function Rq() {
      var qq = function() {
          return null
        },
        Eq = !1,
        gq = function gq(Yq) {
          if (!Eq) {
            if (Array.isArray(Yq)) {
              if (!Yq.length) return;
              var lq = Jq(Yq),
                Oq = lq[0],
                mq = lq.slice(1);
              return "number" === typeof Oq ? void Gq(gq.bind(null, mq), Oq) : (gq(Oq), void Gq(gq.bind(null, mq)))
            }
            "object" === Lq(Yq) && qq(Yq), "function" === typeof Yq && Yq()
          }
        };
      return {
        stop: function() {
          Eq = !0
        },
        start: function(qq) {
          Eq = !1, gq(qq)
        },
        subscribe: function(Eq) {
          return qq = Eq,
            function() {
              qq = function() {
                return null
              }
            }
        }
      }
    }

    function Uq(qq) {
      return Uq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Uq(qq)
    }

    function Fq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function sq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Fq(Object(gq), !0).forEach((function(Eq) {
          Xq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Fq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Xq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" !== Uq(qq) || null === qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" !== Uq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" === Uq(Eq) ? Eq : String(Eq)
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var wq = function(qq) {
        return qq
      },
      Kq = function(qq, Eq) {
        return Object.keys(Eq).reduce((function(gq, Yq) {
          return sq(sq({}, gq), {}, Xq({}, Yq, qq(Yq, Eq[Yq])))
        }), {})
      },
      Cq = function(qq, Eq, gq) {
        return qq.map((function(qq) {
          return "".concat((Yq = qq, Yq.replace(/([A-Z])/g, (function(qq) {
            return "-".concat(qq.toLowerCase())
          }))), " ").concat(Eq, "ms ").concat(gq);
          var Yq
        })).join(",")
      };

    function Iq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || Dq(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eq(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return qE(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || Dq(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Dq(qq, Eq) {
      if (qq) {
        if ("string" === typeof qq) return qE(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? qE(qq, Eq) : void 0
      }
    }

    function qE(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }
    var EE = 1e-4,
      gE = function(qq, Eq) {
        return [0, 3 * qq, 3 * Eq - 6 * qq, 3 * qq - 3 * Eq + 1]
      },
      YE = function(qq, Eq) {
        return qq.map((function(qq, gq) {
          return qq * Math.pow(Eq, gq)
        })).reduce((function(qq, Eq) {
          return qq + Eq
        }))
      },
      lE = function(qq, Eq) {
        return function(gq) {
          var Yq = gE(qq, Eq);
          return YE(Yq, gq)
        }
      },
      OE = function() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        var Yq = Eq[0],
          lq = Eq[1],
          Oq = Eq[2],
          mq = Eq[3];
        if (1 === Eq.length) switch (Eq[0]) {
          case "linear":
            Yq = 0, lq = 0, Oq = 1, mq = 1;
            break;
          case "ease":
            Yq = .25, lq = .1, Oq = .25, mq = 1;
            break;
          case "ease-in":
            Yq = .42, lq = 0, Oq = 1, mq = 1;
            break;
          case "ease-out":
            Yq = .42, lq = 0, Oq = .58, mq = 1;
            break;
          case "ease-in-out":
            Yq = 0, lq = 0, Oq = .58, mq = 1;
            break;
          default:
            var xq = Eq[0].split("(");
            if ("cubic-bezier" === xq[0] && 4 === xq[1].split(")")[0].split(",").length) {
              var Aq = Iq(xq[1].split(")")[0].split(",").map((function(qq) {
                return parseFloat(qq)
              })), 4);
              Yq = Aq[0], lq = Aq[1], Oq = Aq[2], mq = Aq[3]
            }
        } [Yq, Oq, lq, mq].every((function(qq) {
          return "number" === typeof qq && qq >= 0 && qq <= 1
        }));
        var cq, uq, Bq = lE(Yq, Oq),
          Wq = lE(lq, mq),
          Nq = (cq = Yq, uq = Oq, function(qq) {
            var Eq = gE(cq, uq),
              gq = [].concat(eq(Eq.map((function(qq, Eq) {
                return qq * Eq
              })).slice(1)), [0]);
            return YE(gq, qq)
          }),
          aq = function(qq) {
            for (var Eq, gq = qq > 1 ? 1 : qq, Yq = gq, lq = 0; lq < 8; ++lq) {
              var Oq = Bq(Yq) - gq,
                mq = Nq(Yq);
              if (Math.abs(Oq - gq) < EE || mq < EE) return Wq(Yq);
              Yq = (Eq = Yq - Oq / mq) > 1 ? 1 : Eq < 0 ? 0 : Eq
            }
            return Wq(Yq)
          };
        return aq.isStepper = !1, aq
      },
      mE = function() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        var Yq = Eq[0];
        if ("string" === typeof Yq) switch (Yq) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return OE(Yq);
          case "spring":
            return function() {
              var qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                Eq = qq.stiff,
                gq = void 0 === Eq ? 100 : Eq,
                Yq = qq.damping,
                lq = void 0 === Yq ? 8 : Yq,
                Oq = qq.dt,
                mq = void 0 === Oq ? 17 : Oq,
                xq = function(qq, Eq, Yq) {
                  var Oq = Yq + (-(qq - Eq) * gq - Yq * lq) * mq / 1e3,
                    xq = Yq * mq / 1e3 + qq;
                  return Math.abs(xq - Eq) < EE && Math.abs(Oq) < EE ? [Eq, 0] : [xq, Oq]
                };
              return xq.isStepper = !0, xq.dt = mq, xq
            }();
          default:
            if ("cubic-bezier" === Yq.split("(")[0]) return OE(Yq)
        }
        return "function" === typeof Yq ? Yq : null
      };

    function xE(qq) {
      return xE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, xE(qq)
    }

    function AE(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return aE(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || NE(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cE(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function uE(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? cE(Object(gq), !0).forEach((function(Eq) {
          BE(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : cE(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function BE(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" !== xE(qq) || null === qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" !== xE(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" === xE(Eq) ? Eq : String(Eq)
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function WE(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || NE(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function NE(qq, Eq) {
      if (qq) {
        if ("string" === typeof qq) return aE(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? aE(qq, Eq) : void 0
      }
    }

    function aE(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }
    var VE = function(qq, Eq, gq) {
        return qq + (Eq - qq) * gq
      },
      dE = function(qq) {
        return qq.from !== qq.to
      },
      jE = function qq(Eq, gq, Yq) {
        var lq = Kq((function(qq, gq) {
          if (dE(gq)) {
            var Yq = WE(Eq(gq.from, gq.to, gq.JV), 2),
              lq = Yq[0],
              Oq = Yq[1];
            return uE(uE({}, gq), {}, {
              from: lq,
              JV: Oq
            })
          }
          return gq
        }), gq);
        return Yq < 1 ? Kq((function(qq, Eq) {
          return dE(Eq) ? uE(uE({}, Eq), {}, {
            JV: VE(Eq.JV, lq[qq].JV, Yq),
            from: VE(Eq.from, lq[qq].from, Yq)
          }) : Eq
        }), gq) : qq(Eq, lq, Yq - 1)
      };
    const HE = function(qq, Eq, gq, Yq, lq) {
      var Oq, mq, xq, Aq, cq = (Oq = qq, mq = Eq, [Object.keys(Oq), Object.keys(mq)].reduce((function(qq, Eq) {
          return qq.filter((function(qq) {
            return Eq.includes(qq)
          }))
        }))),
        uq = cq.reduce((function(gq, Yq) {
          return uE(uE({}, gq), {}, BE({}, Yq, [qq[Yq], Eq[Yq]]))
        }), {}),
        Bq = cq.reduce((function(gq, Yq) {
          return uE(uE({}, gq), {}, BE({}, Yq, {
            from: qq[Yq],
            JV: 0,
            to: Eq[Yq]
          }))
        }), {}),
        Wq = -1,
        Nq = function() {
          return null
        };
      return Nq = gq.isStepper ? function(Yq) {
          xq || (xq = Yq);
          var Oq = (Yq - xq) / gq.dt;
          Bq = jE(gq, Bq, Oq), lq(uE(uE(uE({}, qq), Eq), Kq((function(qq, Eq) {
            return Eq.from
          }), Bq))), xq = Yq, Object.values(Bq).filter(dE).length && (Wq = requestAnimationFrame(Nq))
        } : function(Oq) {
          Aq || (Aq = Oq);
          var mq = (Oq - Aq) / Yq,
            xq = Kq((function(qq, Eq) {
              return VE.apply(void 0, AE(Eq).concat([gq(mq)]))
            }), uq);
          if (lq(uE(uE(uE({}, qq), Eq), xq)), mq < 1) Wq = requestAnimationFrame(Nq);
          else {
            var cq = Kq((function(qq, Eq) {
              return VE.apply(void 0, AE(Eq).concat([gq(1)]))
            }), uq);
            lq(uE(uE(uE({}, qq), Eq), cq))
          }
        },
        function() {
          return requestAnimationFrame(Nq),
            function() {
              cancelAnimationFrame(Wq)
            }
        }
    };

    function oE(qq) {
      return oE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, oE(qq)
    }
    var PE = ["children", "gN", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function QE(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq, Yq, lq = {},
          Oq = Object.keys(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || (lq[gq] = qq[gq]);
        return lq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function yE(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return tE(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return tE(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return tE(qq, Eq)
      }(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tE(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function rE(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function vE(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? rE(Object(gq), !0).forEach((function(Eq) {
          hE(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : rE(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function hE(qq, Eq, gq) {
      return (Eq = bE(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function nE(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, bE(Yq.key), Yq)
      }
    }

    function bE(qq) {
      var Eq = function(qq, Eq) {
        if ("object" !== oE(qq) || null === qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" !== oE(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" === oE(Eq) ? Eq : String(Eq)
    }

    function iE(qq, Eq) {
      return iE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, iE(qq, Eq)
    }

    function ZE(qq) {
      var Eq = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (qq) {
          return !1
        }
      }();
      return function() {
        var gq, Yq = TE(qq);
        if (Eq) {
          var lq = TE(this).constructor;
          gq = Reflect.construct(Yq, arguments, lq)
        } else gq = Yq.apply(this, arguments);
        return fE(this, gq)
      }
    }

    function fE(qq, Eq) {
      if (Eq && ("object" === oE(Eq) || "function" === typeof Eq)) return Eq;
      if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
      return ME(qq)
    }

    function ME(qq) {
      if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return qq
    }

    function TE(qq) {
      return TE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, TE(qq)
    }
    var zE = function(qq) {
      ! function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && iE(qq, Eq)
      }(mq, qq);
      var Eq, gq, lq, Oq = ZE(mq);

      function mq(qq, Eq) {
        var gq;
        ! function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, mq);
        var Yq = (gq = Oq.call(this, qq, Eq)).props,
          lq = Yq.isActive,
          xq = Yq.attributeName,
          Aq = Yq.from,
          cq = Yq.to,
          uq = Yq.steps,
          Bq = Yq.children,
          Wq = Yq.duration;
        if (gq.handleStyleChange = gq.handleStyleChange.bind(ME(gq)), gq.changeStyle = gq.changeStyle.bind(ME(gq)), !lq || Wq <= 0) return gq.state = {
          style: {}
        }, "function" === typeof Bq && (gq.state = {
          style: cq
        }), fE(gq);
        if (uq && uq.length) gq.state = {
          style: uq[0].style
        };
        else if (Aq) {
          if ("function" === typeof Bq) return gq.state = {
            style: Aq
          }, fE(gq);
          gq.state = {
            style: xq ? hE({}, xq, Aq) : Aq
          }
        } else gq.state = {
          style: {}
        };
        return gq
      }
      return Eq = mq, (gq = [{
        key: "componentDidMount",
        value: function() {
          var qq = this.props,
            Eq = qq.isActive,
            gq = qq.canBegin;
          this.mounted = !0, Eq && gq && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(qq) {
          var Eq = this.props,
            gq = Eq.isActive,
            Yq = Eq.canBegin,
            lq = Eq.attributeName,
            Oq = Eq.shouldReAnimate,
            mq = Eq.to,
            xq = Eq.from,
            Aq = this.state.style;
          if (Yq)
            if (gq) {
              if (!(Sq(qq.to, mq) && qq.canBegin && qq.isActive)) {
                var cq = !qq.canBegin || !qq.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var uq = cq || Oq ? xq : qq.to;
                if (this.state && Aq) {
                  var Bq = {
                    style: lq ? hE({}, lq, uq) : uq
                  };
                  (lq && Aq[lq] !== uq || !lq && Aq !== uq) && this.setState(Bq)
                }
                this.runAnimation(vE(vE({}, this.props), {}, {
                  from: uq,
                  gN: 0
                }))
              }
            } else {
              var Wq = {
                style: lq ? hE({}, lq, mq) : mq
              };
              this.state && Aq && (lq && Aq[lq] !== mq || !lq && Aq !== mq) && this.setState(Wq)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var qq = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), qq && qq()
        }
      }, {
        key: "handleStyleChange",
        value: function(qq) {
          this.changeStyle(qq)
        }
      }, {
        key: "changeStyle",
        value: function(qq) {
          this.mounted && this.setState({
            style: qq
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(qq) {
          var Eq = this,
            gq = qq.from,
            Yq = qq.to,
            lq = qq.duration,
            Oq = qq.easing,
            mq = qq.gN,
            xq = qq.onAnimationEnd,
            Aq = qq.onAnimationStart,
            cq = HE(gq, Yq, mE(Oq), lq, this.changeStyle);
          this.manager.start([Aq, mq, function() {
            Eq.stopJSAnimation = cq()
          }, lq, xq])
        }
      }, {
        key: "runStepAnimation",
        value: function(qq) {
          var Eq = this,
            gq = qq.steps,
            Yq = qq.gN,
            lq = qq.onAnimationStart,
            Oq = gq[0],
            mq = Oq.style,
            xq = Oq.duration,
            Aq = void 0 === xq ? 0 : xq;
          return this.manager.start([lq].concat(yE(gq.reduce((function(qq, Yq, lq) {
            if (0 === lq) return qq;
            var Oq = Yq.duration,
              mq = Yq.easing,
              xq = void 0 === mq ? "ease" : mq,
              Aq = Yq.style,
              cq = Yq.properties,
              uq = Yq.onAnimationEnd,
              Bq = lq > 0 ? gq[lq - 1] : Yq,
              Wq = cq || Object.keys(Aq);
            if ("function" === typeof xq || "spring" === xq) return [].concat(yE(qq), [Eq.runJSAnimation.bind(Eq, {
              from: Bq.style,
              to: Aq,
              duration: Oq,
              easing: xq
            }), Oq]);
            var Nq = Cq(Wq, Oq, xq),
              aq = vE(vE(vE({}, Bq.style), Aq), {}, {
                transition: Nq
              });
            return [].concat(yE(qq), [aq, Oq, uq]).filter(wq)
          }), [mq, Math.max(Aq, Yq)])), [qq.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(qq) {
          this.manager || (this.manager = Rq());
          var Eq = qq.gN,
            gq = qq.duration,
            Yq = qq.attributeName,
            lq = qq.to,
            Oq = qq.easing,
            mq = qq.onAnimationStart,
            xq = qq.onAnimationEnd,
            Aq = qq.steps,
            cq = qq.children,
            uq = this.manager;
          if (this.unSubscribe = uq.subscribe(this.handleStyleChange), "function" !== typeof Oq && "function" !== typeof cq && "spring" !== Oq)
            if (Aq.length > 1) this.runStepAnimation(qq);
            else {
              var Bq = Yq ? hE({}, Yq, lq) : lq,
                Wq = Cq(Object.keys(Bq), gq, Oq);
              uq.start([mq, Eq, vE(vE({}, Bq), {}, {
                transition: Wq
              }), gq, xq])
            }
          else this.runJSAnimation(qq)
        }
      }, {
        key: "render",
        value: function() {
          var qq = this.props,
            Eq = qq.children,
            gq = (qq.gN, qq.duration),
            lq = (qq.attributeName, qq.easing, qq.isActive),
            Oq = (qq.steps, qq.from, qq.to, qq.canBegin, qq.onAnimationEnd, qq.shouldReAnimate, qq.onAnimationReStart, QE(qq, PE)),
            mq = Yq.Children.count(Eq),
            xq = this.state.style;
          if ("function" === typeof Eq) return Eq(xq);
          if (!lq || 0 === mq || gq <= 0) return Eq;
          var Aq = function(qq) {
            var Eq = qq.props,
              gq = Eq.style,
              lq = void 0 === gq ? {} : gq,
              mq = Eq.className;
            return (0, Yq.cloneElement)(qq, vE(vE({}, Oq), {}, {
              style: vE(vE({}, lq), xq),
              className: mq
            }))
          };
          return 1 === mq ? Aq(Yq.Children.only(Eq)) : Yq.createElement("div", null, Yq.Children.map(Eq, (function(qq) {
            return Aq(qq)
          })))
        }
      }]) && nE(Eq.prototype, gq), lq && nE(Eq, lq), Object.defineProperty(Eq, "prototype", {
        writable: !1
      }), mq
    }(Yq.PureComponent);
    zE.displayName = "Animate", zE.defaultProps = {
      gN: 0,
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
    }, zE.propTypes = {
      from: Oq().oneOfType([Oq().object, Oq().string]),
      to: Oq().oneOfType([Oq().object, Oq().string]),
      attributeName: Oq().string,
      duration: Oq().number,
      gN: Oq().number,
      easing: Oq().oneOfType([Oq().string, Oq().func]),
      steps: Oq().arrayOf(Oq().shape({
        duration: Oq().number.isRequired,
        style: Oq().object.isRequired,
        easing: Oq().oneOfType([Oq().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Oq().func]),
        properties: Oq().arrayOf("string"),
        onAnimationEnd: Oq().func
      })),
      children: Oq().oneOfType([Oq().node, Oq().func]),
      isActive: Oq().bool,
      canBegin: Oq().bool,
      onAnimationEnd: Oq().func,
      shouldReAnimate: Oq().bool,
      onAnimationStart: Oq().func,
      onAnimationReStart: Oq().func
    };
    const SE = zE
  },
  6258: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Jq
    });
    var Yq, lq = gq(57),
      Oq = gq(4907),
      mq = gq(5994),
      xq = gq(5105),
      Aq = gq.n(xq),
      cq = gq(6031),
      uq = gq.n(cq),
      Bq = gq(5285),
      Wq = gq.n(Bq),
      Nq = gq(4998),
      aq = gq.n(Nq),
      Vq = gq(6078),
      dq = gq.n(Vq),
      jq = gq(6255),
      Hq = gq(5985),
      oq = gq(5842),
      Pq = gq(6177),
      Qq = gq(5856),
      yq = gq(4990),
      tq = gq(6014),
      rq = gq(5297),
      vq = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      hq = ["key"];

    function nq(qq) {
      return nq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, nq(qq)
    }

    function bq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function iq() {
      return iq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, iq.apply(this, arguments)
    }

    function Zq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function fq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Zq(Object(gq), !0).forEach((function(Eq) {
          Gq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Zq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Mq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Lq(Yq.key), Yq)
      }
    }

    function Tq(qq, Eq, gq) {
      return Eq = Sq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === nq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, zq() ? Reflect.construct(Eq, gq || [], Sq(qq).constructor) : Eq.apply(qq, gq))
    }

    function zq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (zq = function() {
        return !!qq
      })()
    }

    function Sq(qq) {
      return Sq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Sq(qq)
    }

    function pq(qq, Eq) {
      return pq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, pq(qq, Eq)
    }

    function Gq(qq, Eq, gq) {
      return (Eq = Lq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Lq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != nq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != nq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == nq(Eq) ? Eq : Eq + ""
    }
    var Jq = function(qq) {
      function Eq() {
        var qq;
        ! function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq);
        for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        return Gq(qq = Tq(this, Eq, [].concat(Yq)), "state", {
          isAnimationFinished: !0
        }), Gq(qq, "id", (0, yq.N)("recharts-area-")), Gq(qq, "handleAnimationEnd", (function() {
          var Eq = qq.props.onAnimationEnd;
          qq.setState({
            isAnimationFinished: !0
          }), Aq()(Eq) && Eq()
        })), Gq(qq, "handleAnimationStart", (function() {
          var Eq = qq.props.onAnimationStart;
          qq.setState({
            isAnimationFinished: !1
          }), Aq()(Eq) && Eq()
        })), qq
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && pq(qq, Eq)
      }(Eq, qq), gq = Eq, Yq = [{
        key: "renderDots",
        value: function(qq, gq, Yq) {
          var Oq = this.props.isAnimationActive,
            mq = this.state.isAnimationFinished;
          if (Oq && !mq) return null;
          var xq = this.props,
            Aq = xq.dot,
            cq = xq.points,
            uq = xq.dataKey,
            Bq = (0, rq.e)(this.props, !1),
            Wq = (0, rq.e)(Aq, !0),
            Nq = cq.map((function(qq, gq) {
              var Yq = fq(fq(fq({
                key: "dot-".concat(gq),
                r: 3
              }, Bq), Wq), {}, {
                index: gq,
                cx: qq.x,
                cy: qq.y,
                dataKey: uq,
                value: qq.value,
                payload: qq.payload,
                points: cq
              });
              return Eq.renderDotItem(Aq, Yq)
            })),
            aq = {
              clipPath: qq ? "url(#clipPath-".concat(gq ? "" : "dots-").concat(Yq, ")") : null
            };
          return lq.createElement(oq.d, iq({
            className: "recharts-area-dots"
          }, aq), Nq)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(qq) {
          var Eq = this.props,
            gq = Eq.baseLine,
            Yq = Eq.points,
            Oq = Eq.strokeWidth,
            mq = Yq[0].x,
            xq = Yq[Yq.length - 1].x,
            Aq = qq * Math.abs(mq - xq),
            cq = uq()(Yq.map((function(qq) {
              return qq.y || 0
            })));
          return (0, yq.D)(gq) && "number" === typeof gq ? cq = Math.max(gq, cq) : gq && Array.isArray(gq) && gq.length && (cq = Math.max(uq()(gq.map((function(qq) {
            return qq.y || 0
          }))), cq)), (0, yq.D)(cq) ? lq.createElement("rect", {
            x: mq < xq ? mq : mq - Aq,
            y: 0,
            width: Aq,
            height: Math.floor(cq + (Oq ? parseInt("".concat(Oq), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(qq) {
          var Eq = this.props,
            gq = Eq.baseLine,
            Yq = Eq.points,
            Oq = Eq.strokeWidth,
            mq = Yq[0].y,
            xq = Yq[Yq.length - 1].y,
            Aq = qq * Math.abs(mq - xq),
            cq = uq()(Yq.map((function(qq) {
              return qq.x || 0
            })));
          return (0, yq.D)(gq) && "number" === typeof gq ? cq = Math.max(gq, cq) : gq && Array.isArray(gq) && gq.length && (cq = Math.max(uq()(gq.map((function(qq) {
            return qq.x || 0
          }))), cq)), (0, yq.D)(cq) ? lq.createElement("rect", {
            x: 0,
            y: mq < xq ? mq : mq - Aq,
            width: cq + (Oq ? parseInt("".concat(Oq), 10) : 1),
            height: Math.floor(Aq)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(qq) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(qq) : this.renderHorizontalRect(qq)
        }
      }, {
        key: "renderAreaStatically",
        value: function(qq, Eq, gq, Yq) {
          var Oq = this.props,
            mq = Oq.layout,
            xq = Oq.type,
            Aq = Oq.stroke,
            cq = Oq.connectNulls,
            uq = Oq.isRange,
            Bq = (Oq.ref, bq(Oq, vq));
          return lq.createElement(oq.d, {
            clipPath: gq ? "url(#clipPath-".concat(Yq, ")") : null
          }, lq.createElement(jq.e, iq({}, (0, rq.e)(Bq, !0), {
            points: qq,
            connectNulls: cq,
            type: xq,
            baseLine: Eq,
            layout: mq,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== Aq && lq.createElement(jq.e, iq({}, (0, rq.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: mq,
            type: xq,
            connectNulls: cq,
            fill: "none",
            points: qq
          })), "none" !== Aq && uq && lq.createElement(jq.e, iq({}, (0, rq.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: mq,
            type: xq,
            connectNulls: cq,
            fill: "none",
            points: Eq
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(qq, Eq) {
          var gq = this,
            Yq = this.props,
            Oq = Yq.points,
            xq = Yq.baseLine,
            Aq = Yq.isAnimationActive,
            cq = Yq.animationBegin,
            uq = Yq.animationDuration,
            Bq = Yq.animationEasing,
            Nq = Yq.animationId,
            Vq = this.state,
            dq = Vq.prevPoints,
            jq = Vq.prevBaseLine;
          return lq.createElement(mq.d, {
            gN: cq,
            duration: uq,
            isActive: Aq,
            easing: Bq,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(Nq),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Yq) {
            var mq = Yq.t;
            if (dq) {
              var Aq, cq = dq.length / Oq.length,
                uq = Oq.map((function(qq, Eq) {
                  var gq = Math.floor(Eq * cq);
                  if (dq[gq]) {
                    var Yq = dq[gq],
                      lq = (0, yq.r)(Yq.x, qq.x),
                      Oq = (0, yq.r)(Yq.y, qq.y);
                    return fq(fq({}, qq), {}, {
                      x: lq(mq),
                      y: Oq(mq)
                    })
                  }
                  return qq
                }));
              return Aq = (0, yq.D)(xq) && "number" === typeof xq ? (0, yq.r)(jq, xq)(mq) : Wq()(xq) || aq()(xq) ? (0, yq.r)(jq, 0)(mq) : xq.map((function(qq, Eq) {
                var gq = Math.floor(Eq * cq);
                if (jq[gq]) {
                  var Yq = jq[gq],
                    lq = (0, yq.r)(Yq.x, qq.x),
                    Oq = (0, yq.r)(Yq.y, qq.y);
                  return fq(fq({}, qq), {}, {
                    x: lq(mq),
                    y: Oq(mq)
                  })
                }
                return qq
              })), gq.renderAreaStatically(uq, Aq, qq, Eq)
            }
            return lq.createElement(oq.d, null, lq.createElement("defs", null, lq.createElement("clipPath", {
              id: "animationClipPath-".concat(Eq)
            }, gq.renderClipRect(mq))), lq.createElement(oq.d, {
              clipPath: "url(#animationClipPath-".concat(Eq, ")")
            }, gq.renderAreaStatically(Oq, xq, qq, Eq)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(qq, Eq) {
          var gq = this.props,
            Yq = gq.points,
            lq = gq.baseLine,
            Oq = gq.isAnimationActive,
            mq = this.state,
            xq = mq.prevPoints,
            Aq = mq.prevBaseLine,
            cq = mq.totalLength;
          return Oq && Yq && Yq.length && (!xq && cq > 0 || !dq()(xq, Yq) || !dq()(Aq, lq)) ? this.renderAreaWithAnimation(qq, Eq) : this.renderAreaStatically(Yq, lq, qq, Eq)
        }
      }, {
        key: "render",
        value: function() {
          var qq, Eq = this.props,
            gq = Eq.hide,
            Yq = Eq.dot,
            mq = Eq.points,
            xq = Eq.className,
            Aq = Eq.top,
            cq = Eq.left,
            uq = Eq.xAxis,
            Bq = Eq.yAxis,
            Nq = Eq.width,
            aq = Eq.height,
            Vq = Eq.isAnimationActive,
            dq = Eq.id;
          if (gq || !mq || !mq.length) return null;
          var jq = this.state.isAnimationFinished,
            Hq = 1 === mq.length,
            Qq = (0, Oq.d)("recharts-area", xq),
            yq = uq && uq.allowDataOverflow,
            tq = Bq && Bq.allowDataOverflow,
            vq = yq || tq,
            hq = Wq()(dq) ? this.id : dq,
            nq = null !== (qq = (0, rq.e)(Yq, !1)) && void 0 !== qq ? qq : {
              r: 3,
              strokeWidth: 2
            },
            bq = nq.r,
            iq = void 0 === bq ? 3 : bq,
            Zq = nq.strokeWidth,
            fq = void 0 === Zq ? 2 : Zq,
            Mq = ((0, rq.p)(Yq) ? Yq : {}).clipDot,
            Tq = void 0 === Mq || Mq,
            zq = 2 * iq + fq;
          return lq.createElement(oq.d, {
            className: Qq
          }, yq || tq ? lq.createElement("defs", null, lq.createElement("clipPath", {
            id: "clipPath-".concat(hq)
          }, lq.createElement("rect", {
            x: yq ? cq : cq - Nq / 2,
            y: tq ? Aq : Aq - aq / 2,
            width: yq ? Nq : 2 * Nq,
            height: tq ? aq : 2 * aq
          })), !Tq && lq.createElement("clipPath", {
            id: "clipPath-dots-".concat(hq)
          }, lq.createElement("rect", {
            x: cq - zq / 2,
            y: Aq - zq / 2,
            width: Nq + zq,
            height: aq + zq
          }))) : null, Hq ? null : this.renderArea(vq, hq), (Yq || Hq) && this.renderDots(vq, Tq, hq), (!Vq || jq) && Pq.d.renderCallByParent(this.props, mq))
        }
      }], xq = [{
        key: "getDerivedStateFromProps",
        value: function(qq, Eq) {
          return qq.animationId !== Eq.prevAnimationId ? {
            prevAnimationId: qq.animationId,
            curPoints: qq.points,
            curBaseLine: qq.baseLine,
            prevPoints: Eq.curPoints,
            prevBaseLine: Eq.curBaseLine
          } : qq.points !== Eq.curPoints || qq.baseLine !== Eq.curBaseLine ? {
            curPoints: qq.points,
            curBaseLine: qq.baseLine
          } : null
        }
      }], Yq && Mq(gq.prototype, Yq), xq && Mq(gq, xq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, Yq, xq
    }(lq.PureComponent);
    Yq = Jq, Gq(Jq, "displayName", "Area"), Gq(Jq, "defaultProps", {
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
      isAnimationActive: !Qq.d.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), Gq(Jq, "getBaseValue", (function(qq, Eq, gq, Yq) {
      var lq = qq.layout,
        Oq = qq.baseValue,
        mq = Eq.props.baseValue,
        xq = null !== mq && void 0 !== mq ? mq : Oq;
      if ((0, yq.D)(xq) && "number" === typeof xq) return xq;
      var Aq = "horizontal" === lq ? Yq : gq,
        cq = Aq.scale.domain();
      if ("number" === Aq.type) {
        var uq = Math.max(cq[0], cq[1]),
          Bq = Math.min(cq[0], cq[1]);
        return "dataMin" === xq ? Bq : "dataMax" === xq || uq < 0 ? uq : Math.max(Math.min(cq[0], cq[1]), 0)
      }
      return "dataMin" === xq ? cq[0] : "dataMax" === xq ? cq[1] : cq[0]
    })), Gq(Jq, "getComposedData", (function(qq) {
      var Eq, gq = qq.props,
        lq = qq.item,
        Oq = qq.xAxis,
        mq = qq.yAxis,
        xq = qq.xAxisTicks,
        Aq = qq.yAxisTicks,
        cq = qq.bandSize,
        uq = qq.dataKey,
        Bq = qq.stackedData,
        Wq = qq.dataStartIndex,
        Nq = qq.displayedData,
        aq = qq.offset,
        Vq = gq.layout,
        dq = Bq && Bq.length,
        jq = Yq.getBaseValue(gq, lq, Oq, mq),
        Hq = "horizontal" === Vq,
        oq = !1,
        Pq = Nq.map((function(qq, Eq) {
          var gq;
          dq ? gq = Bq[Wq + Eq] : (gq = (0, tq.$)(qq, uq), Array.isArray(gq) ? oq = !0 : gq = [jq, gq]);
          var Yq = null == gq[1] || dq && null == (0, tq.$)(qq, uq);
          return Hq ? {
            x: (0, tq.x)({
              axis: Oq,
              ticks: xq,
              bandSize: cq,
              entry: qq,
              index: Eq
            }),
            y: Yq ? null : mq.scale(gq[1]),
            value: gq,
            payload: qq
          } : {
            x: Yq ? null : Oq.scale(gq[1]),
            y: (0, tq.x)({
              axis: mq,
              ticks: Aq,
              bandSize: cq,
              entry: qq,
              index: Eq
            }),
            value: gq,
            payload: qq
          }
        }));
      return Eq = dq || oq ? Pq.map((function(qq) {
        var Eq = Array.isArray(qq.value) ? qq.value[0] : null;
        return Hq ? {
          x: qq.x,
          y: null != Eq && null != qq.y ? mq.scale(Eq) : null
        } : {
          x: null != Eq ? Oq.scale(Eq) : null,
          y: qq.y
        }
      })) : Hq ? mq.scale(jq) : Oq.scale(jq), fq({
        points: Pq,
        baseLine: Eq,
        layout: Vq,
        isRange: oq
      }, aq)
    })), Gq(Jq, "renderDotItem", (function(qq, Eq) {
      var gq;
      if (lq.isValidElement(qq)) gq = lq.cloneElement(qq, Eq);
      else if (Aq()(qq)) gq = qq(Eq);
      else {
        var Yq = (0, Oq.d)("recharts-area-dot", "boolean" !== typeof qq ? qq.className : ""),
          mq = Eq.key,
          xq = bq(Eq, hq);
        gq = lq.createElement(Hq.d, iq({}, xq, {
          key: mq,
          className: Yq
        }))
      }
      return gq
    }))
  },
  6161: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => sq
    });
    var Yq = gq(57),
      lq = gq(4907),
      Oq = gq(5994),
      mq = gq(6078),
      xq = gq.n(mq),
      Aq = gq(5285),
      cq = gq.n(Aq),
      uq = gq(5842),
      Bq = gq(6091),
      Wq = gq(6170),
      Nq = gq(6177),
      aq = gq(4990),
      Vq = gq(5297),
      dq = gq(5856),
      jq = gq(6014),
      Hq = gq(5324),
      oq = gq(5831),
      Pq = gq(6187),
      Qq = ["x", "y"];

    function yq(qq) {
      return yq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, yq(qq)
    }

    function tq() {
      return tq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, tq.apply(this, arguments)
    }

    function rq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function vq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? rq(Object(gq), !0).forEach((function(Eq) {
          hq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : rq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function hq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != yq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != yq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == yq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function nq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function bq(qq, Eq) {
      var gq = qq.x,
        Yq = qq.y,
        lq = nq(qq, Qq),
        Oq = "".concat(gq),
        mq = parseInt(Oq, 10),
        xq = "".concat(Yq),
        Aq = parseInt(xq, 10),
        cq = "".concat(Eq.height || lq.height),
        uq = parseInt(cq, 10),
        Bq = "".concat(Eq.width || lq.width),
        Wq = parseInt(Bq, 10);
      return vq(vq(vq(vq(vq({}, Eq), lq), mq ? {
        x: mq
      } : {}), Aq ? {
        y: Aq
      } : {}), {}, {
        height: uq,
        width: Wq,
        name: Eq.name,
        radius: Eq.radius
      })
    }

    function iq(qq) {
      return Yq.createElement(Pq.b, tq({
        shapeType: "rectangle",
        propTransformer: bq,
        activeClassName: "recharts-active-bar"
      }, qq))
    }
    var Zq, fq = ["value", "background"];

    function Mq(qq) {
      return Mq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Mq(qq)
    }

    function Tq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function zq() {
      return zq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, zq.apply(this, arguments)
    }

    function Sq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function pq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Sq(Object(gq), !0).forEach((function(Eq) {
          Uq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Sq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Gq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Fq(Yq.key), Yq)
      }
    }

    function Lq(qq, Eq, gq) {
      return Eq = kq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Mq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Jq() ? Reflect.construct(Eq, gq || [], kq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Jq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Jq = function() {
        return !!qq
      })()
    }

    function kq(qq) {
      return kq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, kq(qq)
    }

    function Rq(qq, Eq) {
      return Rq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Rq(qq, Eq)
    }

    function Uq(qq, Eq, gq) {
      return (Eq = Fq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Fq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Mq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Mq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Mq(Eq) ? Eq : Eq + ""
    }
    var sq = function(qq) {
      function Eq() {
        var qq;
        ! function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq);
        for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        return Uq(qq = Lq(this, Eq, [].concat(Yq)), "state", {
          isAnimationFinished: !1
        }), Uq(qq, "id", (0, aq.N)("recharts-bar-")), Uq(qq, "handleAnimationEnd", (function() {
          var Eq = qq.props.onAnimationEnd;
          qq.setState({
            isAnimationFinished: !0
          }), Eq && Eq()
        })), Uq(qq, "handleAnimationStart", (function() {
          var Eq = qq.props.onAnimationStart;
          qq.setState({
            isAnimationFinished: !1
          }), Eq && Eq()
        })), qq
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && Rq(qq, Eq)
      }(Eq, qq), gq = Eq, mq = [{
        key: "renderRectanglesStatically",
        value: function(qq) {
          var Eq = this,
            gq = this.props,
            lq = gq.shape,
            Oq = gq.dataKey,
            mq = gq.activeIndex,
            xq = gq.activeBar,
            Aq = (0, Vq.e)(this.props, !1);
          return qq && qq.map((function(qq, gq) {
            var cq = gq === mq,
              Bq = cq ? xq : lq,
              Wq = pq(pq(pq({}, Aq), qq), {}, {
                isActive: cq,
                option: Bq,
                index: gq,
                dataKey: Oq,
                onAnimationStart: Eq.handleAnimationStart,
                onAnimationEnd: Eq.handleAnimationEnd
              });
            return Yq.createElement(uq.d, zq({
              className: "recharts-bar-rectangle"
            }, (0, Hq.n)(Eq.props, qq, gq), {
              key: "rectangle-".concat(null === qq || void 0 === qq ? void 0 : qq.x, "-").concat(null === qq || void 0 === qq ? void 0 : qq.y, "-").concat(null === qq || void 0 === qq ? void 0 : qq.value, "-").concat(gq)
            }), Yq.createElement(iq, Wq))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var qq = this,
            Eq = this.props,
            gq = Eq.data,
            lq = Eq.layout,
            mq = Eq.isAnimationActive,
            xq = Eq.animationBegin,
            Aq = Eq.animationDuration,
            cq = Eq.animationEasing,
            Bq = Eq.animationId,
            Wq = this.state.prevData;
          return Yq.createElement(Oq.d, {
            gN: xq,
            duration: Aq,
            isActive: mq,
            easing: cq,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(Bq),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Eq) {
            var Oq = Eq.t,
              mq = gq.map((function(qq, Eq) {
                var gq = Wq && Wq[Eq];
                if (gq) {
                  var Yq = (0, aq.r)(gq.x, qq.x),
                    mq = (0, aq.r)(gq.y, qq.y),
                    xq = (0, aq.r)(gq.width, qq.width),
                    Aq = (0, aq.r)(gq.height, qq.height);
                  return pq(pq({}, qq), {}, {
                    x: Yq(Oq),
                    y: mq(Oq),
                    width: xq(Oq),
                    height: Aq(Oq)
                  })
                }
                if ("horizontal" === lq) {
                  var cq = (0, aq.r)(0, qq.height)(Oq);
                  return pq(pq({}, qq), {}, {
                    y: qq.y + qq.height - cq,
                    height: cq
                  })
                }
                var uq = (0, aq.r)(0, qq.width)(Oq);
                return pq(pq({}, qq), {}, {
                  width: uq
                })
              }));
            return Yq.createElement(uq.d, null, qq.renderRectanglesStatically(mq))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var qq = this.props,
            Eq = qq.data,
            gq = qq.isAnimationActive,
            Yq = this.state.prevData;
          return !(gq && Eq && Eq.length) || Yq && xq()(Yq, Eq) ? this.renderRectanglesStatically(Eq) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var qq = this,
            Eq = this.props,
            gq = Eq.data,
            lq = Eq.dataKey,
            Oq = Eq.activeIndex,
            mq = (0, Vq.e)(this.props.background, !1);
          return gq.map((function(Eq, gq) {
            Eq.value;
            var xq = Eq.background,
              Aq = Tq(Eq, fq);
            if (!xq) return null;
            var cq = pq(pq(pq(pq(pq({}, Aq), {}, {
              fill: "#eee"
            }, xq), mq), (0, Hq.n)(qq.props, Eq, gq)), {}, {
              onAnimationStart: qq.handleAnimationStart,
              onAnimationEnd: qq.handleAnimationEnd,
              dataKey: lq,
              index: gq,
              className: "recharts-bar-background-rectangle"
            });
            return Yq.createElement(iq, zq({
              key: "background-bar-".concat(gq),
              option: qq.props.background,
              isActive: gq === Oq
            }, cq))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(qq, Eq) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var gq = this.props,
            lq = gq.data,
            Oq = gq.xAxis,
            mq = gq.yAxis,
            xq = gq.layout,
            Aq = gq.children,
            cq = (0, Vq.g)(Aq, Bq.e);
          if (!cq) return null;
          var Wq = "vertical" === xq ? lq[0].height / 2 : lq[0].width / 2,
            Nq = function(qq, Eq) {
              var gq = Array.isArray(qq.value) ? qq.value[1] : qq.value;
              return {
                x: qq.x,
                y: qq.y,
                value: gq,
                errorVal: (0, jq.$)(qq, Eq)
              }
            },
            aq = {
              clipPath: qq ? "url(#clipPath-".concat(Eq, ")") : null
            };
          return Yq.createElement(uq.d, aq, cq.map((function(qq) {
            return Yq.cloneElement(qq, {
              key: "error-bar-".concat(Eq, "-").concat(qq.props.dataKey),
              data: lq,
              xAxis: Oq,
              yAxis: mq,
              layout: xq,
              offset: Wq,
              dataPointFormatter: Nq
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var qq = this.props,
            Eq = qq.hide,
            gq = qq.data,
            Oq = qq.className,
            mq = qq.xAxis,
            xq = qq.yAxis,
            Aq = qq.left,
            Bq = qq.top,
            Wq = qq.width,
            aq = qq.height,
            Vq = qq.isAnimationActive,
            dq = qq.background,
            jq = qq.id;
          if (Eq || !gq || !gq.length) return null;
          var Hq = this.state.isAnimationFinished,
            oq = (0, lq.d)("recharts-bar", Oq),
            Pq = mq && mq.allowDataOverflow,
            Qq = xq && xq.allowDataOverflow,
            yq = Pq || Qq,
            tq = cq()(jq) ? this.id : jq;
          return Yq.createElement(uq.d, {
            className: oq
          }, Pq || Qq ? Yq.createElement("defs", null, Yq.createElement("clipPath", {
            id: "clipPath-".concat(tq)
          }, Yq.createElement("rect", {
            x: Pq ? Aq : Aq - Wq / 2,
            y: Qq ? Bq : Bq - aq / 2,
            width: Pq ? Wq : 2 * Wq,
            height: Qq ? aq : 2 * aq
          }))) : null, Yq.createElement(uq.d, {
            className: "recharts-bar-rectangles",
            clipPath: yq ? "url(#clipPath-".concat(tq, ")") : null
          }, dq ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(yq, tq), (!Vq || Hq) && Nq.d.renderCallByParent(this.props, gq))
        }
      }], Aq = [{
        key: "getDerivedStateFromProps",
        value: function(qq, Eq) {
          return qq.animationId !== Eq.prevAnimationId ? {
            prevAnimationId: qq.animationId,
            curData: qq.data,
            prevData: Eq.curData
          } : qq.data !== Eq.curData ? {
            curData: qq.data
          } : null
        }
      }], mq && Gq(gq.prototype, mq), Aq && Gq(gq, Aq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, mq, Aq
    }(Yq.PureComponent);
    Zq = sq, Uq(sq, "displayName", "Bar"), Uq(sq, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !dq.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), Uq(sq, "getComposedData", (function(qq) {
      var Eq = qq.props,
        gq = qq.item,
        Yq = qq.barPosition,
        lq = qq.bandSize,
        Oq = qq.xAxis,
        mq = qq.yAxis,
        xq = qq.xAxisTicks,
        Aq = qq.yAxisTicks,
        cq = qq.stackedData,
        uq = qq.dataStartIndex,
        Bq = qq.displayedData,
        Nq = qq.offset,
        dq = (0, jq.j)(Yq, gq);
      if (!dq) return null;
      var Hq = Eq.layout,
        Pq = gq.type.defaultProps,
        Qq = void 0 !== Pq ? pq(pq({}, Pq), gq.props) : gq.props,
        yq = Qq.dataKey,
        tq = Qq.children,
        rq = Qq.minPointSize,
        vq = "horizontal" === Hq ? mq : Oq,
        hq = cq ? vq.scale.domain() : null,
        nq = (0, jq.r)({
          numericAxis: vq
        }),
        bq = (0, Vq.g)(tq, Wq.c),
        iq = Bq.map((function(qq, Eq) {
          var Yq, Bq, Wq, Nq, Vq, Pq;
          cq ? Yq = (0, jq.rb)(cq[uq + Eq], hq) : (Yq = (0, jq.$)(qq, yq), Array.isArray(Yq) || (Yq = [nq, Yq]));
          var Qq = function(qq) {
            var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(gq, Yq) {
              if ("number" === typeof qq) return qq;
              var lq = (0, aq.D)(gq) || (0, aq.v)(gq);
              return lq ? qq(gq, Yq) : (lq || (0, oq.d)(!1), Eq)
            }
          }(rq, Zq.defaultProps.minPointSize)(Yq[1], Eq);
          if ("horizontal" === Hq) {
            var tq, vq = [mq.scale(Yq[0]), mq.scale(Yq[1])],
              iq = vq[0],
              fq = vq[1];
            Bq = (0, jq.t)({
              axis: Oq,
              ticks: xq,
              bandSize: lq,
              offset: dq.offset,
              entry: qq,
              index: Eq
            }), Wq = null !== (tq = null !== fq && void 0 !== fq ? fq : iq) && void 0 !== tq ? tq : void 0, Nq = dq.size;
            var Mq = iq - fq;
            if (Vq = Number.isNaN(Mq) ? 0 : Mq, Pq = {
                x: Bq,
                y: mq.y,
                width: Nq,
                height: mq.height
              }, Math.abs(Qq) > 0 && Math.abs(Vq) < Math.abs(Qq)) {
              var Tq = (0, aq.J)(Vq || Qq) * (Math.abs(Qq) - Math.abs(Vq));
              Wq -= Tq, Vq += Tq
            }
          } else {
            var zq = [Oq.scale(Yq[0]), Oq.scale(Yq[1])],
              Sq = zq[0],
              Gq = zq[1];
            if (Bq = Sq, Wq = (0, jq.t)({
                axis: mq,
                ticks: Aq,
                bandSize: lq,
                offset: dq.offset,
                entry: qq,
                index: Eq
              }), Nq = Gq - Sq, Vq = dq.size, Pq = {
                x: Oq.x,
                y: Wq,
                width: Oq.width,
                height: Vq
              }, Math.abs(Qq) > 0 && Math.abs(Nq) < Math.abs(Qq)) Nq += (0, aq.J)(Nq || Qq) * (Math.abs(Qq) - Math.abs(Nq))
          }
          return pq(pq(pq({}, qq), {}, {
            x: Bq,
            y: Wq,
            width: Nq,
            height: Vq,
            value: cq ? Yq : Yq[1],
            payload: qq,
            background: Pq
          }, bq && bq[Eq] && bq[Eq].props), {}, {
            tooltipPayload: [(0, jq.Y)(gq, qq)],
            tooltipPosition: {
              x: Bq + Nq / 2,
              y: Wq + Vq / 2
            }
          })
        }));
      return pq({
        data: iq,
        layout: Hq
      }, Nq)
    }))
  },
  6277: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Mq
    });
    var Yq = gq(57),
      lq = gq(5105),
      Oq = gq.n(lq),
      mq = gq(5010),
      xq = gq.n(mq),
      Aq = gq(4907),
      cq = gq(5318),
      uq = gq(5842),
      Bq = gq(6001),
      Wq = gq(6105),
      Nq = gq(4990),
      aq = gq(5324),
      Vq = gq(5297),
      dq = gq(6280),
      jq = ["viewBox"],
      Hq = ["viewBox"],
      oq = ["ticks"];

    function Pq(qq) {
      return Pq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Pq(qq)
    }

    function Qq() {
      return Qq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Qq.apply(this, arguments)
    }

    function yq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function tq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? yq(Object(gq), !0).forEach((function(Eq) {
          Zq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : yq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function rq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function vq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, fq(Yq.key), Yq)
      }
    }

    function hq(qq, Eq, gq) {
      return Eq = bq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Pq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, nq() ? Reflect.construct(Eq, gq || [], bq(qq).constructor) : Eq.apply(qq, gq))
    }

    function nq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (nq = function() {
        return !!qq
      })()
    }

    function bq(qq) {
      return bq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, bq(qq)
    }

    function iq(qq, Eq) {
      return iq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, iq(qq, Eq)
    }

    function Zq(qq, Eq, gq) {
      return (Eq = fq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function fq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Pq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Pq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Pq(Eq) ? Eq : Eq + ""
    }
    var Mq = function(qq) {
      function Eq(qq) {
        var gq;
        return function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq), (gq = hq(this, Eq, [qq])).state = {
          fontSize: "",
          letterSpacing: ""
        }, gq
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && iq(qq, Eq)
      }(Eq, qq), gq = Eq, mq = [{
        key: "renderTickItem",
        value: function(qq, Eq, gq) {
          var lq = (0, Aq.d)(Eq.className, "recharts-cartesian-axis-tick-value");
          return Yq.isValidElement(qq) ? Yq.cloneElement(qq, tq(tq({}, Eq), {}, {
            className: lq
          })) : Oq()(qq) ? qq(tq(tq({}, Eq), {}, {
            className: lq
          })) : Yq.createElement(Bq.d, Qq({}, Eq, {
            className: "recharts-cartesian-axis-tick-value"
          }), gq)
        }
      }], (lq = [{
        key: "shouldComponentUpdate",
        value: function(qq, Eq) {
          var gq = qq.viewBox,
            Yq = rq(qq, jq),
            lq = this.props,
            Oq = lq.viewBox,
            mq = rq(lq, Hq);
          return !(0, cq.b)(gq, Oq) || !(0, cq.b)(Yq, mq) || !(0, cq.b)(Eq, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var qq = this.layerReference;
          if (qq) {
            var Eq = qq.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            Eq && this.setState({
              fontSize: window.getComputedStyle(Eq).fontSize,
              letterSpacing: window.getComputedStyle(Eq).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(qq) {
          var Eq, gq, Yq, lq, Oq, mq, xq = this.props,
            Aq = xq.x,
            cq = xq.y,
            uq = xq.width,
            Bq = xq.height,
            Wq = xq.orientation,
            aq = xq.tickSize,
            Vq = xq.mirror,
            dq = xq.tickMargin,
            jq = Vq ? -1 : 1,
            Hq = qq.tickSize || aq,
            oq = (0, Nq.D)(qq.tickCoord) ? qq.tickCoord : qq.coordinate;
          switch (Wq) {
            case "top":
              Eq = gq = qq.coordinate, mq = (Yq = (lq = cq + +!Vq * Bq) - jq * Hq) - jq * dq, Oq = oq;
              break;
            case "left":
              Yq = lq = qq.coordinate, Oq = (Eq = (gq = Aq + +!Vq * uq) - jq * Hq) - jq * dq, mq = oq;
              break;
            case "right":
              Yq = lq = qq.coordinate, Oq = (Eq = (gq = Aq + +Vq * uq) + jq * Hq) + jq * dq, mq = oq;
              break;
            default:
              Eq = gq = qq.coordinate, mq = (Yq = (lq = cq + +Vq * Bq) + jq * Hq) + jq * dq, Oq = oq
          }
          return {
            line: {
              x1: Eq,
              y1: Yq,
              x2: gq,
              y2: lq
            },
            SB: {
              x: Oq,
              y: mq
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var qq, Eq = this.props,
            gq = Eq.orientation,
            Yq = Eq.mirror;
          switch (gq) {
            case "left":
              qq = Yq ? "start" : "end";
              break;
            case "right":
              qq = Yq ? "end" : "start";
              break;
            default:
              qq = "middle"
          }
          return qq
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var qq = this.props,
            Eq = qq.orientation,
            gq = qq.mirror,
            Yq = "end";
          switch (Eq) {
            case "left":
            case "right":
              Yq = "middle";
              break;
            case "top":
              Yq = gq ? "start" : "end";
              break;
            default:
              Yq = gq ? "end" : "start"
          }
          return Yq
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var qq = this.props,
            Eq = qq.x,
            gq = qq.y,
            lq = qq.width,
            Oq = qq.height,
            mq = qq.orientation,
            cq = qq.mirror,
            uq = qq.axisLine,
            Bq = tq(tq(tq({}, (0, Vq.e)(this.props, !1)), (0, Vq.e)(uq, !1)), {}, {
              fill: "none"
            });
          if ("top" === mq || "bottom" === mq) {
            var Wq = +("top" === mq && !cq || "bottom" === mq && cq);
            Bq = tq(tq({}, Bq), {}, {
              x1: Eq,
              y1: gq + Wq * Oq,
              x2: Eq + lq,
              y2: gq + Wq * Oq
            })
          } else {
            var Nq = +("left" === mq && !cq || "right" === mq && cq);
            Bq = tq(tq({}, Bq), {}, {
              x1: Eq + Nq * lq,
              y1: gq,
              x2: Eq + Nq * lq,
              y2: gq + Oq
            })
          }
          return Yq.createElement("line", Qq({}, Bq, {
            className: (0, Aq.d)("recharts-cartesian-axis-line", xq()(uq, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(qq, gq, lq) {
          var mq = this,
            cq = this.props,
            Bq = cq.tickLine,
            Wq = cq.stroke,
            Nq = cq.SB,
            jq = cq.tickFormatter,
            Hq = cq.unit,
            oq = (0, dq.e)(tq(tq({}, this.props), {}, {
              ticks: qq
            }), gq, lq),
            Pq = this.getTickTextAnchor(),
            yq = this.getTickVerticalAnchor(),
            rq = (0, Vq.e)(this.props, !1),
            vq = (0, Vq.e)(Nq, !1),
            hq = tq(tq({}, rq), {}, {
              fill: "none"
            }, (0, Vq.e)(Bq, !1)),
            nq = oq.map((function(qq, gq) {
              var lq = mq.getTickLineCoord(qq),
                cq = lq.line,
                Vq = lq.SB,
                dq = tq(tq(tq(tq({
                  textAnchor: Pq,
                  verticalAnchor: yq
                }, rq), {}, {
                  stroke: "none",
                  fill: Wq
                }, vq), Vq), {}, {
                  index: gq,
                  payload: qq,
                  visibleTicksCount: oq.length,
                  tickFormatter: jq
                });
              return Yq.createElement(uq.d, Qq({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(qq.value, "-").concat(qq.coordinate, "-").concat(qq.tickCoord)
              }, (0, aq.n)(mq.props, qq, gq)), Bq && Yq.createElement("line", Qq({}, hq, cq, {
                className: (0, Aq.d)("recharts-cartesian-axis-tick-line", xq()(Bq, "className"))
              })), Nq && Eq.renderTickItem(Nq, dq, "".concat(Oq()(jq) ? jq(qq.value, gq) : qq.value).concat(Hq || "")))
            }));
          return Yq.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, nq)
        }
      }, {
        key: "render",
        value: function() {
          var qq = this,
            Eq = this.props,
            gq = Eq.axisLine,
            lq = Eq.width,
            mq = Eq.height,
            xq = Eq.ticksGenerator,
            cq = Eq.className;
          if (Eq.hide) return null;
          var Bq = this.props,
            Nq = Bq.ticks,
            aq = rq(Bq, oq),
            Vq = Nq;
          return Oq()(xq) && (Vq = Nq && Nq.length > 0 ? xq(this.props) : xq(aq)), lq <= 0 || mq <= 0 || !Vq || !Vq.length ? null : Yq.createElement(uq.d, {
            className: (0, Aq.d)("recharts-cartesian-axis", cq),
            ref: function(Eq) {
              qq.layerReference = Eq
            }
          }, gq && this.renderAxisLine(), this.renderTicks(Vq, this.state.fontSize, this.state.letterSpacing), Wq.e.renderCallByParent(this.props))
        }
      }]) && vq(gq.prototype, lq), mq && vq(gq, mq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, lq, mq
    }(Yq.Component);
    Zq(Mq, "displayName", "CartesianAxis"), Zq(Mq, "defaultProps", {
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
      SB: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6285: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Zq
    });
    var Yq = gq(57),
      lq = gq(5105),
      Oq = gq.n(lq),
      mq = gq(5290),
      xq = gq(4990),
      Aq = gq(5297),
      cq = gq(6014),
      uq = gq(6280),
      Bq = gq(6277),
      Wq = gq(6230),
      Nq = ["x1", "y1", "x2", "y2", "key"],
      aq = ["offset"];

    function Vq(qq) {
      return Vq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Vq(qq)
    }

    function dq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function jq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? dq(Object(gq), !0).forEach((function(Eq) {
          Hq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : dq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Hq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Vq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != Vq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Vq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function oq() {
      return oq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, oq.apply(this, arguments)
    }

    function Pq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }
    var Qq = function(qq) {
      var Eq = qq.fill;
      if (!Eq || "none" === Eq) return null;
      var gq = qq.fillOpacity,
        lq = qq.x,
        Oq = qq.y,
        mq = qq.width,
        xq = qq.height,
        Aq = qq.ry;
      return Yq.createElement("rect", {
        x: lq,
        y: Oq,
        ry: Aq,
        width: mq,
        height: xq,
        stroke: "none",
        fill: Eq,
        fillOpacity: gq,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function yq(qq, Eq) {
      var gq;
      if (Yq.isValidElement(qq)) gq = Yq.cloneElement(qq, Eq);
      else if (Oq()(qq)) gq = qq(Eq);
      else {
        var lq = Eq.x1,
          mq = Eq.y1,
          xq = Eq.x2,
          cq = Eq.y2,
          uq = Eq.key,
          Bq = Pq(Eq, Nq),
          Wq = (0, Aq.e)(Bq, !1),
          Vq = (Wq.offset, Pq(Wq, aq));
        gq = Yq.createElement("line", oq({}, Vq, {
          x1: lq,
          y1: mq,
          x2: xq,
          y2: cq,
          fill: "none",
          key: uq
        }))
      }
      return gq
    }

    function tq(qq) {
      var Eq = qq.x,
        gq = qq.width,
        lq = qq.horizontal,
        Oq = void 0 === lq || lq,
        mq = qq.horizontalPoints;
      if (!Oq || !mq || !mq.length) return null;
      var xq = mq.map((function(Yq, lq) {
        var mq = jq(jq({}, qq), {}, {
          x1: Eq,
          y1: Yq,
          x2: Eq + gq,
          y2: Yq,
          key: "line-".concat(lq),
          index: lq
        });
        return yq(Oq, mq)
      }));
      return Yq.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, xq)
    }

    function rq(qq) {
      var Eq = qq.y,
        gq = qq.height,
        lq = qq.vertical,
        Oq = void 0 === lq || lq,
        mq = qq.verticalPoints;
      if (!Oq || !mq || !mq.length) return null;
      var xq = mq.map((function(Yq, lq) {
        var mq = jq(jq({}, qq), {}, {
          x1: Yq,
          y1: Eq,
          x2: Yq,
          y2: Eq + gq,
          key: "line-".concat(lq),
          index: lq
        });
        return yq(Oq, mq)
      }));
      return Yq.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, xq)
    }

    function vq(qq) {
      var Eq = qq.horizontalFill,
        gq = qq.fillOpacity,
        lq = qq.x,
        Oq = qq.y,
        mq = qq.width,
        xq = qq.height,
        Aq = qq.horizontalPoints,
        cq = qq.horizontal;
      if (!(void 0 === cq || cq) || !Eq || !Eq.length) return null;
      var uq = Aq.map((function(qq) {
        return Math.round(qq + Oq - Oq)
      })).sort((function(qq, Eq) {
        return qq - Eq
      }));
      Oq !== uq[0] && uq.unshift(0);
      var Bq = uq.map((function(qq, Aq) {
        var cq = !uq[Aq + 1] ? Oq + xq - qq : uq[Aq + 1] - qq;
        if (cq <= 0) return null;
        var Bq = Aq % Eq.length;
        return Yq.createElement("rect", {
          key: "react-".concat(Aq),
          y: qq,
          x: lq,
          height: cq,
          width: mq,
          stroke: "none",
          fill: Eq[Bq],
          fillOpacity: gq,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Yq.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, Bq)
    }

    function hq(qq) {
      var Eq = qq.vertical,
        gq = void 0 === Eq || Eq,
        lq = qq.verticalFill,
        Oq = qq.fillOpacity,
        mq = qq.x,
        xq = qq.y,
        Aq = qq.width,
        cq = qq.height,
        uq = qq.verticalPoints;
      if (!gq || !lq || !lq.length) return null;
      var Bq = uq.map((function(qq) {
        return Math.round(qq + mq - mq)
      })).sort((function(qq, Eq) {
        return qq - Eq
      }));
      mq !== Bq[0] && Bq.unshift(0);
      var Wq = Bq.map((function(qq, Eq) {
        var gq = !Bq[Eq + 1] ? mq + Aq - qq : Bq[Eq + 1] - qq;
        if (gq <= 0) return null;
        var uq = Eq % lq.length;
        return Yq.createElement("rect", {
          key: "react-".concat(Eq),
          x: qq,
          y: xq,
          width: gq,
          height: cq,
          stroke: "none",
          fill: lq[uq],
          fillOpacity: Oq,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Yq.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, Wq)
    }
    var nq = function(qq, Eq) {
        var gq = qq.xAxis,
          Yq = qq.width,
          lq = qq.height,
          Oq = qq.offset;
        return (0, cq.z)((0, uq.e)(jq(jq(jq({}, Bq.b.defaultProps), gq), {}, {
          ticks: (0, cq.R)(gq, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Yq,
            height: lq
          }
        })), Oq.left, Oq.left + Oq.width, Eq)
      },
      bq = function(qq, Eq) {
        var gq = qq.yAxis,
          Yq = qq.width,
          lq = qq.height,
          Oq = qq.offset;
        return (0, cq.z)((0, uq.e)(jq(jq(jq({}, Bq.b.defaultProps), gq), {}, {
          ticks: (0, cq.R)(gq, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Yq,
            height: lq
          }
        })), Oq.top, Oq.top + Oq.height, Eq)
      },
      iq = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function Zq(qq) {
      var Eq, gq, lq, Aq, cq, uq, Bq = (0, Wq.l)(),
        Nq = (0, Wq.i)(),
        aq = (0, Wq.t)(),
        dq = jq(jq({}, qq), {}, {
          stroke: null !== (Eq = qq.stroke) && void 0 !== Eq ? Eq : iq.stroke,
          fill: null !== (gq = qq.fill) && void 0 !== gq ? gq : iq.fill,
          horizontal: null !== (lq = qq.horizontal) && void 0 !== lq ? lq : iq.horizontal,
          horizontalFill: null !== (Aq = qq.horizontalFill) && void 0 !== Aq ? Aq : iq.horizontalFill,
          vertical: null !== (cq = qq.vertical) && void 0 !== cq ? cq : iq.vertical,
          verticalFill: null !== (uq = qq.verticalFill) && void 0 !== uq ? uq : iq.verticalFill,
          x: (0, xq.D)(qq.x) ? qq.x : aq.left,
          y: (0, xq.D)(qq.y) ? qq.y : aq.top,
          width: (0, xq.D)(qq.width) ? qq.width : aq.width,
          height: (0, xq.D)(qq.height) ? qq.height : aq.height
        }),
        Hq = dq.x,
        Pq = dq.y,
        yq = dq.width,
        Zq = dq.height,
        fq = dq.syncWithTicks,
        Mq = dq.horizontalValues,
        Tq = dq.verticalValues,
        zq = (0, Wq.g)(),
        Sq = (0, Wq.z)();
      if (!(0, xq.D)(yq) || yq <= 0 || !(0, xq.D)(Zq) || Zq <= 0 || !(0, xq.D)(Hq) || Hq !== +Hq || !(0, xq.D)(Pq) || Pq !== +Pq) return null;
      var pq = dq.verticalCoordinatesGenerator || nq,
        Gq = dq.horizontalCoordinatesGenerator || bq,
        Lq = dq.horizontalPoints,
        Jq = dq.verticalPoints;
      if ((!Lq || !Lq.length) && Oq()(Gq)) {
        var kq = Mq && Mq.length,
          Rq = Gq({
            yAxis: Sq ? jq(jq({}, Sq), {}, {
              ticks: kq ? Mq : Sq.ticks
            }) : void 0,
            width: Bq,
            height: Nq,
            offset: aq
          }, !!kq || fq);
        (0, mq.e)(Array.isArray(Rq), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Vq(Rq), "]")), Array.isArray(Rq) && (Lq = Rq)
      }
      if ((!Jq || !Jq.length) && Oq()(pq)) {
        var Uq = Tq && Tq.length,
          Fq = pq({
            xAxis: zq ? jq(jq({}, zq), {}, {
              ticks: Uq ? Tq : zq.ticks
            }) : void 0,
            width: Bq,
            height: Nq,
            offset: aq
          }, !!Uq || fq);
        (0, mq.e)(Array.isArray(Fq), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Vq(Fq), "]")), Array.isArray(Fq) && (Jq = Fq)
      }
      return Yq.createElement("g", {
        className: "recharts-cartesian-grid"
      }, Yq.createElement(Qq, {
        fill: dq.fill,
        fillOpacity: dq.fillOpacity,
        x: dq.x,
        y: dq.y,
        width: dq.width,
        height: dq.height,
        ry: dq.ry
      }), Yq.createElement(tq, oq({}, dq, {
        offset: aq,
        horizontalPoints: Lq,
        xAxis: zq,
        yAxis: Sq
      })), Yq.createElement(rq, oq({}, dq, {
        offset: aq,
        verticalPoints: Jq,
        xAxis: zq,
        yAxis: Sq
      })), Yq.createElement(vq, oq({}, dq, {
        horizontalPoints: Lq
      })), Yq.createElement(hq, oq({}, dq, {
        verticalPoints: Jq
      })))
    }
    Zq.displayName = "CartesianGrid"
  },
  6091: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Pq
    });
    var Yq = gq(57),
      lq = gq(5831),
      Oq = gq(5842),
      mq = gq(5297),
      xq = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function Aq(qq) {
      return Aq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Aq(qq)
    }

    function cq() {
      return cq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, cq.apply(this, arguments)
    }

    function uq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return Bq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Bq(qq, Eq)
      }(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Bq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function Wq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function Nq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, oq(Yq.key), Yq)
      }
    }

    function aq(qq, Eq, gq) {
      return Eq = dq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Aq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Vq() ? Reflect.construct(Eq, gq || [], dq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Vq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Vq = function() {
        return !!qq
      })()
    }

    function dq(qq) {
      return dq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, dq(qq)
    }

    function jq(qq, Eq) {
      return jq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, jq(qq, Eq)
    }

    function Hq(qq, Eq, gq) {
      return (Eq = oq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function oq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Aq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Aq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Aq(Eq) ? Eq : Eq + ""
    }
    var Pq = function(qq) {
      function Eq() {
        return function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq), aq(this, Eq, arguments)
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && jq(qq, Eq)
      }(Eq, qq), gq = Eq, (Aq = [{
        key: "render",
        value: function() {
          var qq = this.props,
            Eq = qq.offset,
            gq = qq.layout,
            Aq = qq.width,
            Bq = qq.dataKey,
            Nq = qq.data,
            aq = qq.dataPointFormatter,
            Vq = qq.xAxis,
            dq = qq.yAxis,
            jq = Wq(qq, xq),
            Hq = (0, mq.e)(jq, !1);
          "x" === this.props.direction && "number" !== Vq.type && (0, lq.d)(!1);
          var oq = Nq.map((function(qq) {
            var lq = aq(qq, Bq),
              mq = lq.x,
              xq = lq.y,
              Wq = lq.value,
              Nq = lq.errorVal;
            if (!Nq) return null;
            var jq, oq, Pq = [];
            if (Array.isArray(Nq)) {
              var Qq = uq(Nq, 2);
              jq = Qq[0], oq = Qq[1]
            } else jq = oq = Nq;
            if ("vertical" === gq) {
              var yq = Vq.scale,
                tq = xq + Eq,
                rq = tq + Aq,
                vq = tq - Aq,
                hq = yq(Wq - jq),
                nq = yq(Wq + oq);
              Pq.push({
                x1: nq,
                y1: rq,
                x2: nq,
                y2: vq
              }), Pq.push({
                x1: hq,
                y1: tq,
                x2: nq,
                y2: tq
              }), Pq.push({
                x1: hq,
                y1: rq,
                x2: hq,
                y2: vq
              })
            } else if ("horizontal" === gq) {
              var bq = dq.scale,
                iq = mq + Eq,
                Zq = iq - Aq,
                fq = iq + Aq,
                Mq = bq(Wq - jq),
                Tq = bq(Wq + oq);
              Pq.push({
                x1: Zq,
                y1: Tq,
                x2: fq,
                y2: Tq
              }), Pq.push({
                x1: iq,
                y1: Mq,
                x2: iq,
                y2: Tq
              }), Pq.push({
                x1: Zq,
                y1: Mq,
                x2: fq,
                y2: Mq
              })
            }
            return Yq.createElement(Oq.d, cq({
              className: "recharts-errorBar",
              key: "bar-".concat(Pq.map((function(qq) {
                return "".concat(qq.x1, "-").concat(qq.x2, "-").concat(qq.y1, "-").concat(qq.y2)
              })))
            }, Hq), Pq.map((function(qq) {
              return Yq.createElement("line", cq({}, qq, {
                key: "line-".concat(qq.x1, "-").concat(qq.x2, "-").concat(qq.y1, "-").concat(qq.y2)
              }))
            })))
          }));
          return Yq.createElement(Oq.d, {
            className: "recharts-errorBars"
          }, oq)
        }
      }]) && Nq(gq.prototype, Aq), Bq && Nq(gq, Bq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, Aq, Bq
    }(Yq.Component);
    Hq(Pq, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), Hq(Pq, "displayName", "ErrorBar")
  },
  6265: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Gq
    });
    var Yq = gq(57),
      lq = gq(5994),
      Oq = gq(5105),
      mq = gq.n(Oq),
      xq = gq(5285),
      Aq = gq.n(xq),
      cq = gq(6078),
      uq = gq.n(cq),
      Bq = gq(4907),
      Wq = gq(6255),
      Nq = gq(5985),
      aq = gq(5842),
      Vq = gq(6177),
      dq = gq(6091),
      jq = gq(4990),
      Hq = gq(5297),
      oq = gq(5856),
      Pq = gq(6014),
      Qq = ["type", "layout", "connectNulls", "ref"],
      yq = ["key"];

    function tq(qq) {
      return tq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, tq(qq)
    }

    function rq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function vq() {
      return vq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, vq.apply(this, arguments)
    }

    function hq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function nq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? hq(Object(gq), !0).forEach((function(Eq) {
          Sq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : hq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function bq(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return iq(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return iq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return iq(qq, Eq)
      }(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function Zq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, pq(Yq.key), Yq)
      }
    }

    function fq(qq, Eq, gq) {
      return Eq = Tq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === tq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Mq() ? Reflect.construct(Eq, gq || [], Tq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Mq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Mq = function() {
        return !!qq
      })()
    }

    function Tq(qq) {
      return Tq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Tq(qq)
    }

    function zq(qq, Eq) {
      return zq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, zq(qq, Eq)
    }

    function Sq(qq, Eq, gq) {
      return (Eq = pq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function pq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != tq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != tq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == tq(Eq) ? Eq : Eq + ""
    }
    var Gq = function(qq) {
      function Eq() {
        var qq;
        ! function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq);
        for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        return Sq(qq = fq(this, Eq, [].concat(Yq)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), Sq(qq, "generateSimpleStrokeDasharray", (function(qq, Eq) {
          return "".concat(Eq, "px ").concat(qq - Eq, "px")
        })), Sq(qq, "getStrokeDasharray", (function(gq, Yq, lq) {
          var Oq = lq.reduce((function(qq, Eq) {
            return qq + Eq
          }));
          if (!Oq) return qq.generateSimpleStrokeDasharray(Yq, gq);
          for (var mq = Math.floor(gq / Oq), xq = gq % Oq, Aq = Yq - gq, cq = [], uq = 0, Bq = 0; uq < lq.length; Bq += lq[uq], ++uq)
            if (Bq + lq[uq] > xq) {
              cq = [].concat(bq(lq.slice(0, uq)), [xq - Bq]);
              break
            } var Wq = cq.length % 2 === 0 ? [0, Aq] : [Aq];
          return [].concat(bq(Eq.repeat(lq, mq)), bq(cq), Wq).map((function(qq) {
            return "".concat(qq, "px")
          })).join(", ")
        })), Sq(qq, "id", (0, jq.N)("recharts-line-")), Sq(qq, "pathRef", (function(Eq) {
          qq.mainCurve = Eq
        })), Sq(qq, "handleAnimationEnd", (function() {
          qq.setState({
            isAnimationFinished: !0
          }), qq.props.onAnimationEnd && qq.props.onAnimationEnd()
        })), Sq(qq, "handleAnimationStart", (function() {
          qq.setState({
            isAnimationFinished: !1
          }), qq.props.onAnimationStart && qq.props.onAnimationStart()
        })), qq
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && zq(qq, Eq)
      }(Eq, qq), gq = Eq, Oq = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var qq = this.getTotalLength();
            this.setState({
              totalLength: qq
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var qq = this.getTotalLength();
            qq !== this.state.totalLength && this.setState({
              totalLength: qq
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var qq = this.mainCurve;
          try {
            return qq && qq.getTotalLength && qq.getTotalLength() || 0
          } catch (Eq) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(qq, Eq) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var gq = this.props,
            lq = gq.points,
            Oq = gq.xAxis,
            mq = gq.yAxis,
            xq = gq.layout,
            Aq = gq.children,
            cq = (0, Hq.g)(Aq, dq.e);
          if (!cq) return null;
          var uq = function(qq, Eq) {
              return {
                x: qq.x,
                y: qq.y,
                value: qq.value,
                errorVal: (0, Pq.$)(qq.payload, Eq)
              }
            },
            Bq = {
              clipPath: qq ? "url(#clipPath-".concat(Eq, ")") : null
            };
          return Yq.createElement(aq.d, Bq, cq.map((function(qq) {
            return Yq.cloneElement(qq, {
              key: "bar-".concat(qq.props.dataKey),
              data: lq,
              xAxis: Oq,
              yAxis: mq,
              layout: xq,
              dataPointFormatter: uq
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(qq, gq, lq) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Oq = this.props,
            mq = Oq.dot,
            xq = Oq.points,
            Aq = Oq.dataKey,
            cq = (0, Hq.e)(this.props, !1),
            uq = (0, Hq.e)(mq, !0),
            Bq = xq.map((function(qq, gq) {
              var Yq = nq(nq(nq({
                key: "dot-".concat(gq),
                r: 3
              }, cq), uq), {}, {
                index: gq,
                cx: qq.x,
                cy: qq.y,
                value: qq.value,
                dataKey: Aq,
                payload: qq.payload,
                points: xq
              });
              return Eq.renderDotItem(mq, Yq)
            })),
            Wq = {
              clipPath: qq ? "url(#clipPath-".concat(gq ? "" : "dots-").concat(lq, ")") : null
            };
          return Yq.createElement(aq.d, vq({
            className: "recharts-line-dots",
            key: "dots"
          }, Wq), Bq)
        }
      }, {
        key: "renderCurveStatically",
        value: function(qq, Eq, gq, lq) {
          var Oq = this.props,
            mq = Oq.type,
            xq = Oq.layout,
            Aq = Oq.connectNulls,
            cq = (Oq.ref, rq(Oq, Qq)),
            uq = nq(nq(nq({}, (0, Hq.e)(cq, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: Eq ? "url(#clipPath-".concat(gq, ")") : null,
              points: qq
            }, lq), {}, {
              type: mq,
              layout: xq,
              connectNulls: Aq
            });
          return Yq.createElement(Wq.e, vq({}, uq, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(qq, Eq) {
          var gq = this,
            Oq = this.props,
            mq = Oq.points,
            xq = Oq.strokeDasharray,
            Aq = Oq.isAnimationActive,
            cq = Oq.animationBegin,
            uq = Oq.animationDuration,
            Bq = Oq.animationEasing,
            Wq = Oq.animationId,
            Nq = Oq.animateNewValues,
            aq = Oq.width,
            Vq = Oq.height,
            dq = this.state,
            Hq = dq.prevPoints,
            oq = dq.totalLength;
          return Yq.createElement(lq.d, {
            gN: cq,
            duration: uq,
            isActive: Aq,
            easing: Bq,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(Wq),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Yq) {
            var lq = Yq.t;
            if (Hq) {
              var Oq = Hq.length / mq.length,
                Aq = mq.map((function(qq, Eq) {
                  var gq = Math.floor(Eq * Oq);
                  if (Hq[gq]) {
                    var Yq = Hq[gq],
                      mq = (0, jq.r)(Yq.x, qq.x),
                      xq = (0, jq.r)(Yq.y, qq.y);
                    return nq(nq({}, qq), {}, {
                      x: mq(lq),
                      y: xq(lq)
                    })
                  }
                  if (Nq) {
                    var Aq = (0, jq.r)(2 * aq, qq.x),
                      cq = (0, jq.r)(Vq / 2, qq.y);
                    return nq(nq({}, qq), {}, {
                      x: Aq(lq),
                      y: cq(lq)
                    })
                  }
                  return nq(nq({}, qq), {}, {
                    x: qq.x,
                    y: qq.y
                  })
                }));
              return gq.renderCurveStatically(Aq, qq, Eq)
            }
            var cq, uq = (0, jq.r)(0, oq)(lq);
            if (xq) {
              var Bq = "".concat(xq).split(/[,\s]+/gim).map((function(qq) {
                return parseFloat(qq)
              }));
              cq = gq.getStrokeDasharray(uq, oq, Bq)
            } else cq = gq.generateSimpleStrokeDasharray(oq, uq);
            return gq.renderCurveStatically(mq, qq, Eq, {
              strokeDasharray: cq
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(qq, Eq) {
          var gq = this.props,
            Yq = gq.points,
            lq = gq.isAnimationActive,
            Oq = this.state,
            mq = Oq.prevPoints,
            xq = Oq.totalLength;
          return lq && Yq && Yq.length && (!mq && xq > 0 || !uq()(mq, Yq)) ? this.renderCurveWithAnimation(qq, Eq) : this.renderCurveStatically(Yq, qq, Eq)
        }
      }, {
        key: "render",
        value: function() {
          var qq, Eq = this.props,
            gq = Eq.hide,
            lq = Eq.dot,
            Oq = Eq.points,
            mq = Eq.className,
            xq = Eq.xAxis,
            cq = Eq.yAxis,
            uq = Eq.top,
            Wq = Eq.left,
            Nq = Eq.width,
            dq = Eq.height,
            jq = Eq.isAnimationActive,
            oq = Eq.id;
          if (gq || !Oq || !Oq.length) return null;
          var Pq = this.state.isAnimationFinished,
            Qq = 1 === Oq.length,
            yq = (0, Bq.d)("recharts-line", mq),
            tq = xq && xq.allowDataOverflow,
            rq = cq && cq.allowDataOverflow,
            vq = tq || rq,
            hq = Aq()(oq) ? this.id : oq,
            nq = null !== (qq = (0, Hq.e)(lq, !1)) && void 0 !== qq ? qq : {
              r: 3,
              strokeWidth: 2
            },
            bq = nq.r,
            iq = void 0 === bq ? 3 : bq,
            Zq = nq.strokeWidth,
            fq = void 0 === Zq ? 2 : Zq,
            Mq = ((0, Hq.p)(lq) ? lq : {}).clipDot,
            Tq = void 0 === Mq || Mq,
            zq = 2 * iq + fq;
          return Yq.createElement(aq.d, {
            className: yq
          }, tq || rq ? Yq.createElement("defs", null, Yq.createElement("clipPath", {
            id: "clipPath-".concat(hq)
          }, Yq.createElement("rect", {
            x: tq ? Wq : Wq - Nq / 2,
            y: rq ? uq : uq - dq / 2,
            width: tq ? Nq : 2 * Nq,
            height: rq ? dq : 2 * dq
          })), !Tq && Yq.createElement("clipPath", {
            id: "clipPath-dots-".concat(hq)
          }, Yq.createElement("rect", {
            x: Wq - zq / 2,
            y: uq - zq / 2,
            width: Nq + zq,
            height: dq + zq
          }))) : null, !Qq && this.renderCurve(vq, hq), this.renderErrorBar(vq, hq), (Qq || lq) && this.renderDots(vq, Tq, hq), (!jq || Pq) && Vq.d.renderCallByParent(this.props, Oq))
        }
      }], xq = [{
        key: "getDerivedStateFromProps",
        value: function(qq, Eq) {
          return qq.animationId !== Eq.prevAnimationId ? {
            prevAnimationId: qq.animationId,
            curPoints: qq.points,
            prevPoints: Eq.curPoints
          } : qq.points !== Eq.curPoints ? {
            curPoints: qq.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(qq, Eq) {
          for (var gq = qq.length % 2 !== 0 ? [].concat(bq(qq), [0]) : qq, Yq = [], lq = 0; lq < Eq; ++lq) Yq = [].concat(bq(Yq), bq(gq));
          return Yq
        }
      }, {
        key: "renderDotItem",
        value: function(qq, Eq) {
          var gq;
          if (Yq.isValidElement(qq)) gq = Yq.cloneElement(qq, Eq);
          else if (mq()(qq)) gq = qq(Eq);
          else {
            var lq = Eq.key,
              Oq = rq(Eq, yq),
              xq = (0, Bq.d)("recharts-line-dot", "boolean" !== typeof qq ? qq.className : "");
            gq = Yq.createElement(Nq.d, vq({
              key: lq
            }, Oq, {
              className: xq
            }))
          }
          return gq
        }
      }], Oq && Zq(gq.prototype, Oq), xq && Zq(gq, xq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, Oq, xq
    }(Yq.PureComponent);
    Sq(Gq, "displayName", "Line"), Sq(Gq, "defaultProps", {
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
      isAnimationActive: !oq.d.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), Sq(Gq, "getComposedData", (function(qq) {
      var Eq = qq.props,
        gq = qq.xAxis,
        Yq = qq.yAxis,
        lq = qq.xAxisTicks,
        Oq = qq.yAxisTicks,
        mq = qq.dataKey,
        xq = qq.bandSize,
        cq = qq.displayedData,
        uq = qq.offset,
        Bq = Eq.layout;
      return nq({
        points: cq.map((function(qq, Eq) {
          var cq = (0, Pq.$)(qq, mq);
          return "horizontal" === Bq ? {
            x: (0, Pq.x)({
              axis: gq,
              ticks: lq,
              bandSize: xq,
              entry: qq,
              index: Eq
            }),
            y: Aq()(cq) ? null : Yq.scale(cq),
            value: cq,
            payload: qq
          } : {
            x: Aq()(cq) ? null : gq.scale(cq),
            y: (0, Pq.x)({
              axis: Yq,
              ticks: Oq,
              bandSize: xq,
              entry: qq,
              index: Eq
            }),
            value: cq,
            payload: qq
          }
        })),
        layout: Bq
      }, uq)
    }))
  },
  6207: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => fq
    });
    var Yq = gq(57),
      lq = gq(5105),
      Oq = gq.n(lq),
      mq = gq(6216),
      xq = gq.n(mq),
      Aq = gq(4907),
      cq = gq(5842),
      uq = gq(6105),
      Bq = gq(6123),
      Wq = gq(4990),
      Nq = gq(6127),
      aq = gq(5290),
      Vq = gq(5297),
      dq = gq(6230);

    function jq(qq) {
      return jq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, jq(qq)
    }

    function Hq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, hq(Yq.key), Yq)
      }
    }

    function oq(qq, Eq, gq) {
      return Eq = Qq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === jq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Pq() ? Reflect.construct(Eq, gq || [], Qq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Pq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Pq = function() {
        return !!qq
      })()
    }

    function Qq(qq) {
      return Qq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Qq(qq)
    }

    function yq(qq, Eq) {
      return yq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, yq(qq, Eq)
    }

    function tq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function rq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? tq(Object(gq), !0).forEach((function(Eq) {
          vq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : tq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function vq(qq, Eq, gq) {
      return (Eq = hq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function hq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != jq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != jq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == jq(Eq) ? Eq : Eq + ""
    }

    function nq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return bq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return bq(qq, Eq)
      }(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function iq() {
      return iq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, iq.apply(this, arguments)
    }

    function Zq(qq) {
      var Eq = qq.x,
        gq = qq.y,
        lq = qq.segment,
        mq = qq.xAxisId,
        jq = qq.yAxisId,
        Hq = qq.shape,
        oq = qq.className,
        Pq = qq.alwaysShow,
        Qq = (0, dq.p)(),
        yq = (0, dq.v)(mq),
        tq = (0, dq.y)(jq),
        vq = (0, dq.u)();
      if (!Qq || !vq) return null;
      (0, aq.e)(void 0 === Pq, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var hq = function(qq, Eq, gq, Yq, lq, Oq, mq, Aq, cq) {
        var uq = lq.x,
          Wq = lq.y,
          Nq = lq.width,
          aq = lq.height;
        if (gq) {
          var Vq = cq.y,
            dq = qq.y.apply(Vq, {
              position: Oq
            });
          if ((0, Bq.b)(cq, "discard") && !qq.y.isInRange(dq)) return null;
          var jq = [{
            x: uq + Nq,
            y: dq
          }, {
            x: uq,
            y: dq
          }];
          return "left" === Aq ? jq.reverse() : jq
        }
        if (Eq) {
          var Hq = cq.x,
            oq = qq.x.apply(Hq, {
              position: Oq
            });
          if ((0, Bq.b)(cq, "discard") && !qq.x.isInRange(oq)) return null;
          var Pq = [{
            x: oq,
            y: Wq + aq
          }, {
            x: oq,
            y: Wq
          }];
          return "top" === mq ? Pq.reverse() : Pq
        }
        if (Yq) {
          var Qq = cq.segment.map((function(Eq) {
            return qq.apply(Eq, {
              position: Oq
            })
          }));
          return (0, Bq.b)(cq, "discard") && xq()(Qq, (function(Eq) {
            return !qq.isInRange(Eq)
          })) ? null : Qq
        }
        return null
      }((0, Nq.c)({
        x: yq.scale,
        y: tq.scale
      }), (0, Wq.z)(Eq), (0, Wq.z)(gq), lq && 2 === lq.length, vq, qq.position, yq.orientation, tq.orientation, qq);
      if (!hq) return null;
      var bq = nq(hq, 2),
        Zq = bq[0],
        fq = Zq.x,
        Mq = Zq.y,
        Tq = bq[1],
        zq = Tq.x,
        Sq = Tq.y,
        pq = rq(rq({
          clipPath: (0, Bq.b)(qq, "hidden") ? "url(#".concat(Qq, ")") : void 0
        }, (0, Vq.e)(qq, !0)), {}, {
          x1: fq,
          y1: Mq,
          x2: zq,
          y2: Sq
        });
      return Yq.createElement(cq.d, {
        className: (0, Aq.d)("recharts-reference-line", oq)
      }, function(qq, Eq) {
        return Yq.isValidElement(qq) ? Yq.cloneElement(qq, Eq) : Oq()(qq) ? qq(Eq) : Yq.createElement("line", iq({}, Eq, {
          className: "recharts-reference-line-line"
        }))
      }(Hq, pq), uq.e.renderCallByParent(qq, (0, Nq.h)({
        x1: fq,
        y1: Mq,
        x2: zq,
        y2: Sq
      })))
    }
    var fq = function(qq) {
      function Eq() {
        return function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq), oq(this, Eq, arguments)
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && yq(qq, Eq)
      }(Eq, qq), gq = Eq, (lq = [{
        key: "render",
        value: function() {
          return Yq.createElement(Zq, this.props)
        }
      }]) && Hq(gq.prototype, lq), Oq && Hq(gq, Oq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, lq, Oq
    }(Yq.Component);
    vq(fq, "displayName", "ReferenceLine"), vq(fq, "defaultProps", {
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
  6269: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Hq
    });
    var Yq = gq(57),
      lq = gq(4907),
      Oq = gq(6230),
      mq = gq(6277),
      xq = gq(6014);

    function Aq(qq) {
      return Aq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Aq(qq)
    }

    function cq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Vq(Yq.key), Yq)
      }
    }

    function uq(qq, Eq, gq) {
      return Eq = Wq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Aq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Bq() ? Reflect.construct(Eq, gq || [], Wq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Bq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Bq = function() {
        return !!qq
      })()
    }

    function Wq(qq) {
      return Wq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Wq(qq)
    }

    function Nq(qq, Eq) {
      return Nq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Nq(qq, Eq)
    }

    function aq(qq, Eq, gq) {
      return (Eq = Vq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Vq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Aq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Aq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Aq(Eq) ? Eq : Eq + ""
    }

    function dq() {
      return dq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, dq.apply(this, arguments)
    }

    function jq(qq) {
      var Eq = qq.xAxisId,
        gq = (0, Oq.l)(),
        Aq = (0, Oq.i)(),
        cq = (0, Oq.v)(Eq);
      return null == cq ? null : Yq.createElement(mq.b, dq({}, cq, {
        className: (0, lq.d)("recharts-".concat(cq.axisType, " ").concat(cq.axisType), cq.className),
        viewBox: {
          x: 0,
          y: 0,
          width: gq,
          height: Aq
        },
        ticksGenerator: function(qq) {
          return (0, xq.R)(qq, !0)
        }
      }))
    }
    var Hq = function(qq) {
      function Eq() {
        return function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq), uq(this, Eq, arguments)
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && Nq(qq, Eq)
      }(Eq, qq), gq = Eq, (lq = [{
        key: "render",
        value: function() {
          return Yq.createElement(jq, this.props)
        }
      }]) && cq(gq.prototype, lq), Oq && cq(gq, Oq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, lq, Oq
    }(Yq.Component);
    aq(Hq, "displayName", "XAxis"), aq(Hq, "defaultProps", {
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
  6283: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Hq
    });
    var Yq = gq(57),
      lq = gq(4907),
      Oq = gq(6230),
      mq = gq(6277),
      xq = gq(6014);

    function Aq(qq) {
      return Aq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Aq(qq)
    }

    function cq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Vq(Yq.key), Yq)
      }
    }

    function uq(qq, Eq, gq) {
      return Eq = Wq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Aq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Bq() ? Reflect.construct(Eq, gq || [], Wq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Bq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Bq = function() {
        return !!qq
      })()
    }

    function Wq(qq) {
      return Wq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Wq(qq)
    }

    function Nq(qq, Eq) {
      return Nq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Nq(qq, Eq)
    }

    function aq(qq, Eq, gq) {
      return (Eq = Vq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Vq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Aq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Aq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Aq(Eq) ? Eq : Eq + ""
    }

    function dq() {
      return dq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, dq.apply(this, arguments)
    }
    var jq = function(qq) {
        var Eq = qq.yAxisId,
          gq = (0, Oq.l)(),
          Aq = (0, Oq.i)(),
          cq = (0, Oq.y)(Eq);
        return null == cq ? null : Yq.createElement(mq.b, dq({}, cq, {
          className: (0, lq.d)("recharts-".concat(cq.axisType, " ").concat(cq.axisType), cq.className),
          viewBox: {
            x: 0,
            y: 0,
            width: gq,
            height: Aq
          },
          ticksGenerator: function(qq) {
            return (0, xq.R)(qq, !0)
          }
        }))
      },
      Hq = function(qq) {
        function Eq() {
          return function(qq, Eq) {
            if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
          }(this, Eq), uq(this, Eq, arguments)
        }
        return function(qq, Eq) {
          if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
          qq.prototype = Object.create(Eq && Eq.prototype, {
            constructor: {
              value: qq,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(qq, "prototype", {
            writable: !1
          }), Eq && Nq(qq, Eq)
        }(Eq, qq), gq = Eq, (lq = [{
          key: "render",
          value: function() {
            return Yq.createElement(jq, this.props)
          }
        }]) && cq(gq.prototype, lq), Oq && cq(gq, Oq), Object.defineProperty(gq, "prototype", {
          writable: !1
        }), gq;
        var gq, lq, Oq
      }(Yq.Component);
    aq(Hq, "displayName", "YAxis"), aq(Hq, "defaultProps", {
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
  6280: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Vq
    });
    var Yq = gq(5105),
      lq = gq.n(Yq),
      Oq = gq(4990),
      mq = gq(6007),
      xq = gq(5856),
      Aq = gq(6127);

    function cq(qq, Eq, gq) {
      if (Eq < 1) return [];
      if (1 === Eq && void 0 === gq) return qq;
      for (var Yq = [], lq = 0; lq < qq.length; lq += Eq) {
        if (void 0 !== gq && !0 !== gq(qq[lq])) return;
        Yq.push(qq[lq])
      }
      return Yq
    }

    function uq(qq, Eq, gq, Yq, lq) {
      if (qq * Eq < qq * Yq || qq * Eq > qq * lq) return !1;
      var Oq = gq();
      return qq * (Eq - qq * Oq / 2 - Yq) >= 0 && qq * (Eq + qq * Oq / 2 - lq) <= 0
    }

    function Bq(qq) {
      return Bq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Bq(qq)
    }

    function Wq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Nq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Wq(Object(gq), !0).forEach((function(Eq) {
          aq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Wq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function aq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Bq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != Bq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Bq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Vq(qq, Eq, gq) {
      var Yq = qq.SB,
        Bq = qq.ticks,
        Wq = qq.viewBox,
        aq = qq.minTickGap,
        Vq = qq.orientation,
        dq = qq.interval,
        jq = qq.tickFormatter,
        Hq = qq.unit,
        oq = qq.angle;
      if (!Bq || !Bq.length || !Yq) return [];
      if ((0, Oq.D)(dq) || xq.d.isSsr) return function(qq, Eq) {
        return cq(qq, Eq + 1)
      }(Bq, "number" === typeof dq && (0, Oq.D)(dq) ? dq : 0);
      var Pq = [],
        Qq = "top" === Vq || "bottom" === Vq ? "width" : "height",
        yq = Hq && "width" === Qq ? (0, mq.h)(Hq, {
          fontSize: Eq,
          letterSpacing: gq
        }) : {
          width: 0,
          height: 0
        },
        tq = function(qq, Yq) {
          var Oq = lq()(jq) ? jq(qq.value, Yq) : qq.value;
          return "width" === Qq ? function(qq, Eq, gq) {
            var Yq = {
              width: qq.width + Eq.width,
              height: qq.height + Eq.height
            };
            return (0, Aq.g)(Yq, gq)
          }((0, mq.h)(Oq, {
            fontSize: Eq,
            letterSpacing: gq
          }), yq, oq) : (0, mq.h)(Oq, {
            fontSize: Eq,
            letterSpacing: gq
          })[Qq]
        },
        rq = Bq.length >= 2 ? (0, Oq.J)(Bq[1].coordinate - Bq[0].coordinate) : 1,
        vq = function(qq, Eq, gq) {
          var Yq = "width" === gq,
            lq = qq.x,
            Oq = qq.y,
            mq = qq.width,
            xq = qq.height;
          return 1 === Eq ? {
            start: Yq ? lq : Oq,
            end: Yq ? lq + mq : Oq + xq
          } : {
            start: Yq ? lq + mq : Oq + xq,
            end: Yq ? lq : Oq
          }
        }(Wq, rq, Qq);
      return "equidistantPreserveStart" === dq ? function(qq, Eq, gq, Yq, lq) {
        for (var Oq, mq = (Yq || []).slice(), xq = Eq.start, Aq = Eq.end, Bq = 0, Wq = 1, Nq = xq, aq = function() {
            var Eq = null === Yq || void 0 === Yq ? void 0 : Yq[Bq];
            if (void 0 === Eq) return {
              v: cq(Yq, Wq)
            };
            var Oq, mq = Bq,
              aq = function() {
                return void 0 === Oq && (Oq = gq(Eq, mq)), Oq
              },
              Vq = Eq.coordinate,
              dq = 0 === Bq || uq(qq, Vq, aq, Nq, Aq);
            dq || (Bq = 0, Nq = xq, Wq += 1), dq && (Nq = Vq + qq * (aq() / 2 + lq), Bq += Wq)
          }; Wq <= mq.length;)
          if (Oq = aq()) return Oq.v;
        return []
      }(rq, vq, tq, Bq, aq) : (Pq = "preserveStart" === dq || "preserveStartEnd" === dq ? function(qq, Eq, gq, Yq, lq, Oq) {
        var mq = (Yq || []).slice(),
          xq = mq.length,
          Aq = Eq.start,
          cq = Eq.end;
        if (Oq) {
          var Bq = Yq[xq - 1],
            Wq = gq(Bq, xq - 1),
            aq = qq * (Bq.coordinate + qq * Wq / 2 - cq);
          mq[xq - 1] = Bq = Nq(Nq({}, Bq), {}, {
            tickCoord: aq > 0 ? Bq.coordinate - aq * qq : Bq.coordinate
          }), uq(qq, Bq.tickCoord, (function() {
            return Wq
          }), Aq, cq) && (cq = Bq.tickCoord - qq * (Wq / 2 + lq), mq[xq - 1] = Nq(Nq({}, Bq), {}, {
            isShow: !0
          }))
        }
        for (var Vq = Oq ? xq - 1 : xq, dq = function(Eq) {
            var Yq, Oq = mq[Eq],
              xq = function() {
                return void 0 === Yq && (Yq = gq(Oq, Eq)), Yq
              };
            if (0 === Eq) {
              var Bq = qq * (Oq.coordinate - qq * xq() / 2 - Aq);
              mq[Eq] = Oq = Nq(Nq({}, Oq), {}, {
                tickCoord: Bq < 0 ? Oq.coordinate - Bq * qq : Oq.coordinate
              })
            } else mq[Eq] = Oq = Nq(Nq({}, Oq), {}, {
              tickCoord: Oq.coordinate
            });
            uq(qq, Oq.tickCoord, xq, Aq, cq) && (Aq = Oq.tickCoord + qq * (xq() / 2 + lq), mq[Eq] = Nq(Nq({}, Oq), {}, {
              isShow: !0
            }))
          }, jq = 0; jq < Vq; jq++) dq(jq);
        return mq
      }(rq, vq, tq, Bq, aq, "preserveStartEnd" === dq) : function(qq, Eq, gq, Yq, lq) {
        for (var Oq = (Yq || []).slice(), mq = Oq.length, xq = Eq.start, Aq = Eq.end, cq = function(Eq) {
            var Yq, cq = Oq[Eq],
              Bq = function() {
                return void 0 === Yq && (Yq = gq(cq, Eq)), Yq
              };
            if (Eq === mq - 1) {
              var Wq = qq * (cq.coordinate + qq * Bq() / 2 - Aq);
              Oq[Eq] = cq = Nq(Nq({}, cq), {}, {
                tickCoord: Wq > 0 ? cq.coordinate - Wq * qq : cq.coordinate
              })
            } else Oq[Eq] = cq = Nq(Nq({}, cq), {}, {
              tickCoord: cq.coordinate
            });
            uq(qq, cq.tickCoord, Bq, xq, Aq) && (Aq = cq.tickCoord - qq * (Bq() / 2 + lq), Oq[Eq] = Nq(Nq({}, cq), {}, {
              isShow: !0
            }))
          }, Bq = mq - 1; Bq >= 0; Bq--) cq(Bq);
        return Oq
      }(rq, vq, tq, Bq, aq), Pq.filter((function(qq) {
        return qq.isShow
      })))
    }
  },
  6288: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq
    });
    var Yq = gq(5338),
      lq = gq(6161),
      Oq = gq(6269),
      mq = gq(6283),
      xq = gq(6127),
      Aq = (0, Yq.d)({
        chartName: "BarChart",
        GraphicalChild: lq.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: Oq.b
        }, {
          axisType: "yAxis",
          AxisComp: mq.e
        }],
        formatAxisMap: xq.f
      })
  },
  5329: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lE
    });
    var Yq = gq(5338),
      lq = gq(6258),
      Oq = gq(6161),
      mq = gq(6265),
      xq = gq(57),
      Aq = gq(5994),
      cq = gq(5285),
      uq = gq.n(cq),
      Bq = gq(6078),
      Wq = gq.n(Bq),
      Nq = gq(5105),
      aq = gq.n(Nq),
      Vq = gq(4907),
      dq = gq(5842),
      jq = gq(6177),
      Hq = gq(5297),
      oq = gq(5856);

    function Pq(qq) {
      return Pq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Pq(qq)
    }

    function Qq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, nq(Yq.key), Yq)
      }
    }

    function yq(qq, Eq, gq) {
      return Eq = rq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Pq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, tq() ? Reflect.construct(Eq, gq || [], rq(qq).constructor) : Eq.apply(qq, gq))
    }

    function tq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (tq = function() {
        return !!qq
      })()
    }

    function rq(qq) {
      return rq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, rq(qq)
    }

    function vq(qq, Eq) {
      return vq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, vq(qq, Eq)
    }

    function hq(qq, Eq, gq) {
      return (Eq = nq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function nq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Pq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Pq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Pq(Eq) ? Eq : Eq + ""
    }
    var bq = function(qq) {
      function Eq() {
        return function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq), yq(this, Eq, arguments)
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && vq(qq, Eq)
      }(Eq, qq), gq = Eq, (Yq = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && Qq(gq.prototype, Yq), lq && Qq(gq, lq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, Yq, lq
    }(xq.Component);
    hq(bq, "displayName", "ZAxis"), hq(bq, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var iq = gq(6255),
      Zq = gq(6091),
      fq = gq(6170),
      Mq = gq(4990),
      Tq = gq(6014),
      zq = gq(5324),
      Sq = gq(5935),
      pq = gq(6187),
      Gq = ["option", "isActive"];

    function Lq() {
      return Lq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Lq.apply(this, arguments)
    }

    function Jq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function kq(qq) {
      var Eq = qq.option,
        gq = qq.isActive,
        Yq = Jq(qq, Gq);
      return "string" === typeof Eq ? xq.createElement(pq.b, Lq({
        option: xq.createElement(Sq.b, Lq({
          type: Eq
        }, Yq)),
        isActive: gq,
        shapeType: "symbols"
      }, Yq)) : xq.createElement(pq.b, Lq({
        option: Eq,
        isActive: gq,
        shapeType: "symbols"
      }, Yq))
    }

    function Rq(qq) {
      return Rq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Rq(qq)
    }

    function Uq() {
      return Uq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Uq.apply(this, arguments)
    }

    function Fq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function sq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Fq(Object(gq), !0).forEach((function(Eq) {
          eq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Fq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Xq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Dq(Yq.key), Yq)
      }
    }

    function wq(qq, Eq, gq) {
      return Eq = Cq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Rq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Kq() ? Reflect.construct(Eq, gq || [], Cq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Kq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Kq = function() {
        return !!qq
      })()
    }

    function Cq(qq) {
      return Cq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Cq(qq)
    }

    function Iq(qq, Eq) {
      return Iq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Iq(qq, Eq)
    }

    function eq(qq, Eq, gq) {
      return (Eq = Dq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Dq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Rq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Rq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Rq(Eq) ? Eq : Eq + ""
    }
    var qE = function(qq) {
      function Eq() {
        var qq;
        ! function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq);
        for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        return eq(qq = wq(this, Eq, [].concat(Yq)), "state", {
          isAnimationFinished: !1
        }), eq(qq, "handleAnimationEnd", (function() {
          qq.setState({
            isAnimationFinished: !0
          })
        })), eq(qq, "handleAnimationStart", (function() {
          qq.setState({
            isAnimationFinished: !1
          })
        })), eq(qq, "id", (0, Mq.N)("recharts-scatter-")), qq
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && Iq(qq, Eq)
      }(Eq, qq), gq = Eq, Yq = [{
        key: "renderSymbolsStatically",
        value: function(qq) {
          var Eq = this,
            gq = this.props,
            Yq = gq.shape,
            lq = gq.activeShape,
            Oq = gq.activeIndex,
            mq = (0, Hq.e)(this.props, !1);
          return qq.map((function(qq, gq) {
            var Aq = Oq === gq,
              cq = Aq ? lq : Yq,
              uq = sq(sq({}, mq), qq);
            return xq.createElement(dq.d, Uq({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === qq || void 0 === qq ? void 0 : qq.cx, "-").concat(null === qq || void 0 === qq ? void 0 : qq.cy, "-").concat(null === qq || void 0 === qq ? void 0 : qq.size, "-").concat(gq)
            }, (0, zq.n)(Eq.props, qq, gq), {
              role: "img"
            }), xq.createElement(kq, Uq({
              option: cq,
              isActive: Aq,
              key: "symbol-".concat(gq)
            }, uq)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var qq = this,
            Eq = this.props,
            gq = Eq.points,
            Yq = Eq.isAnimationActive,
            lq = Eq.animationBegin,
            Oq = Eq.animationDuration,
            mq = Eq.animationEasing,
            cq = Eq.animationId,
            uq = this.state.prevPoints;
          return xq.createElement(Aq.d, {
            gN: lq,
            duration: Oq,
            isActive: Yq,
            easing: mq,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(cq),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Eq) {
            var Yq = Eq.t,
              lq = gq.map((function(qq, Eq) {
                var gq = uq && uq[Eq];
                if (gq) {
                  var lq = (0, Mq.r)(gq.cx, qq.cx),
                    Oq = (0, Mq.r)(gq.cy, qq.cy),
                    mq = (0, Mq.r)(gq.size, qq.size);
                  return sq(sq({}, qq), {}, {
                    cx: lq(Yq),
                    cy: Oq(Yq),
                    size: mq(Yq)
                  })
                }
                var xq = (0, Mq.r)(0, qq.size);
                return sq(sq({}, qq), {}, {
                  size: xq(Yq)
                })
              }));
            return xq.createElement(dq.d, null, qq.renderSymbolsStatically(lq))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var qq = this.props,
            Eq = qq.points,
            gq = qq.isAnimationActive,
            Yq = this.state.prevPoints;
          return !(gq && Eq && Eq.length) || Yq && Wq()(Yq, Eq) ? this.renderSymbolsStatically(Eq) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var qq = this.props,
            Eq = qq.points,
            gq = qq.xAxis,
            Yq = qq.yAxis,
            lq = qq.children,
            Oq = (0, Hq.g)(lq, Zq.e);
          return Oq ? Oq.map((function(qq, lq) {
            var Oq = qq.props,
              mq = Oq.direction,
              Aq = Oq.dataKey;
            return xq.cloneElement(qq, {
              key: "".concat(mq, "-").concat(Aq, "-").concat(Eq[lq]),
              data: Eq,
              xAxis: gq,
              yAxis: Yq,
              layout: "x" === mq ? "vertical" : "horizontal",
              dataPointFormatter: function(qq, Eq) {
                return {
                  x: qq.cx,
                  y: qq.cy,
                  value: "x" === mq ? +qq.node.x : +qq.node.y,
                  errorVal: (0, Tq.$)(qq, Eq)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var qq, Eq, gq = this.props,
            Yq = gq.points,
            lq = gq.line,
            Oq = gq.lineType,
            mq = gq.lineJointType,
            Aq = (0, Hq.e)(this.props, !1),
            cq = (0, Hq.e)(lq, !1);
          if ("joint" === Oq) qq = Yq.map((function(qq) {
            return {
              x: qq.cx,
              y: qq.cy
            }
          }));
          else if ("fitting" === Oq) {
            var uq = (0, Mq.l)(Yq),
              Bq = uq.xmin,
              Wq = uq.xmax,
              Nq = uq.a,
              Vq = uq.b,
              jq = function(qq) {
                return Nq * qq + Vq
              };
            qq = [{
              x: Bq,
              y: jq(Bq)
            }, {
              x: Wq,
              y: jq(Wq)
            }]
          }
          var oq = sq(sq(sq({}, Aq), {}, {
            fill: "none",
            stroke: Aq && Aq.fill
          }, cq), {}, {
            points: qq
          });
          return Eq = xq.isValidElement(lq) ? xq.cloneElement(lq, oq) : aq()(lq) ? lq(oq) : xq.createElement(iq.e, Uq({}, oq, {
            type: mq
          })), xq.createElement(dq.d, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, Eq)
        }
      }, {
        key: "render",
        value: function() {
          var qq = this.props,
            Eq = qq.hide,
            gq = qq.points,
            Yq = qq.line,
            lq = qq.className,
            Oq = qq.xAxis,
            mq = qq.yAxis,
            Aq = qq.left,
            cq = qq.top,
            Bq = qq.width,
            Wq = qq.height,
            Nq = qq.id,
            aq = qq.isAnimationActive;
          if (Eq || !gq || !gq.length) return null;
          var Hq = this.state.isAnimationFinished,
            oq = (0, Vq.d)("recharts-scatter", lq),
            Pq = Oq && Oq.allowDataOverflow,
            Qq = mq && mq.allowDataOverflow,
            yq = Pq || Qq,
            tq = uq()(Nq) ? this.id : Nq;
          return xq.createElement(dq.d, {
            className: oq,
            clipPath: yq ? "url(#clipPath-".concat(tq, ")") : null
          }, Pq || Qq ? xq.createElement("defs", null, xq.createElement("clipPath", {
            id: "clipPath-".concat(tq)
          }, xq.createElement("rect", {
            x: Pq ? Aq : Aq - Bq / 2,
            y: Qq ? cq : cq - Wq / 2,
            width: Pq ? Bq : 2 * Bq,
            height: Qq ? Wq : 2 * Wq
          }))) : null, Yq && this.renderLine(), this.renderErrorBar(), xq.createElement(dq.d, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!aq || Hq) && jq.d.renderCallByParent(this.props, gq))
        }
      }], lq = [{
        key: "getDerivedStateFromProps",
        value: function(qq, Eq) {
          return qq.animationId !== Eq.prevAnimationId ? {
            prevAnimationId: qq.animationId,
            curPoints: qq.points,
            prevPoints: Eq.curPoints
          } : qq.points !== Eq.curPoints ? {
            curPoints: qq.points
          } : null
        }
      }], Yq && Xq(gq.prototype, Yq), lq && Xq(gq, lq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, Yq, lq
    }(xq.PureComponent);
    eq(qE, "displayName", "Scatter"), eq(qE, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !oq.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), eq(qE, "getComposedData", (function(qq) {
      var Eq = qq.xAxis,
        gq = qq.yAxis,
        Yq = qq.zAxis,
        lq = qq.item,
        Oq = qq.displayedData,
        mq = qq.xAxisTicks,
        xq = qq.yAxisTicks,
        Aq = qq.offset,
        cq = lq.props.tooltipType,
        Bq = (0, Hq.g)(lq.props.children, fq.c),
        Wq = uq()(Eq.dataKey) ? lq.props.dataKey : Eq.dataKey,
        Nq = uq()(gq.dataKey) ? lq.props.dataKey : gq.dataKey,
        aq = Yq && Yq.dataKey,
        Vq = Yq ? Yq.range : bq.defaultProps.range,
        dq = Vq && Vq[0],
        jq = Eq.scale.bandwidth ? Eq.scale.bandwidth() : 0,
        oq = gq.scale.bandwidth ? gq.scale.bandwidth() : 0,
        Pq = Oq.map((function(qq, Oq) {
          var Aq = (0, Tq.$)(qq, Wq),
            Vq = (0, Tq.$)(qq, Nq),
            Hq = !uq()(aq) && (0, Tq.$)(qq, aq) || "-",
            Pq = [{
              name: uq()(Eq.dataKey) ? lq.props.name : Eq.name || Eq.dataKey,
              unit: Eq.unit || "",
              value: Aq,
              payload: qq,
              dataKey: Wq,
              type: cq
            }, {
              name: uq()(gq.dataKey) ? lq.props.name : gq.name || gq.dataKey,
              unit: gq.unit || "",
              value: Vq,
              payload: qq,
              dataKey: Nq,
              type: cq
            }];
          "-" !== Hq && Pq.push({
            name: Yq.name || Yq.dataKey,
            unit: Yq.unit || "",
            value: Hq,
            payload: qq,
            dataKey: aq,
            type: cq
          });
          var Qq = (0, Tq.x)({
              axis: Eq,
              ticks: mq,
              bandSize: jq,
              entry: qq,
              index: Oq,
              dataKey: Wq
            }),
            yq = (0, Tq.x)({
              axis: gq,
              ticks: xq,
              bandSize: oq,
              entry: qq,
              index: Oq,
              dataKey: Nq
            }),
            tq = "-" !== Hq ? Yq.scale(Hq) : dq,
            rq = Math.sqrt(Math.max(tq, 0) / Math.PI);
          return sq(sq({}, qq), {}, {
            cx: Qq,
            cy: yq,
            x: Qq - rq,
            y: yq - rq,
            xAxis: Eq,
            yAxis: gq,
            zAxis: Yq,
            width: 2 * rq,
            height: 2 * rq,
            size: tq,
            node: {
              x: Aq,
              y: Vq,
              z: Hq
            },
            tooltipPayload: Pq,
            tooltipPosition: {
              x: Qq,
              y: yq
            },
            payload: qq
          }, Bq && Bq[Oq] && Bq[Oq].props)
        }));
      return sq({
        points: Pq
      }, Aq)
    }));
    var EE = gq(6269),
      gE = gq(6283),
      YE = gq(6127),
      lE = (0, Yq.d)({
        chartName: "ComposedChart",
        GraphicalChild: [mq.b, lq.d, Oq.b, qE],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: EE.b
        }, {
          axisType: "yAxis",
          AxisComp: gE.e
        }, {
          axisType: "zAxis",
          AxisComp: bq
        }],
        formatAxisMap: YE.f
      })
  },
  5338: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Lg
    });
    var Yq = gq(57),
      lq = gq(5285),
      Oq = gq.n(lq),
      mq = gq(5105),
      xq = gq.n(mq),
      Aq = gq(5344),
      cq = gq.n(Aq),
      uq = gq(5010),
      Bq = gq.n(uq),
      Wq = gq(5377),
      Nq = gq.n(Wq),
      aq = gq(4912),
      Vq = gq.n(aq),
      dq = gq(4907),
      jq = gq(5831),
      Hq = gq(5833),
      oq = gq(5842),
      Pq = gq(5847),
      Qq = gq(5931),
      yq = gq(5985),
      tq = gq(5991),
      rq = gq(5297),
      vq = gq(6017),
      hq = gq(6001),
      nq = gq(6014),
      bq = gq(4990);

    function iq(qq) {
      return iq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, iq(qq)
    }

    function Zq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function fq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Zq(Object(gq), !0).forEach((function(Eq) {
          Mq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Zq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Mq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != iq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != iq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == iq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var Tq = ["Webkit", "Moz", "O", "ms"];

    function zq(qq) {
      return zq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, zq(qq)
    }

    function Sq() {
      return Sq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Sq.apply(this, arguments)
    }

    function pq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Gq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? pq(Object(gq), !0).forEach((function(Eq) {
          Fq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : pq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Lq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, sq(Yq.key), Yq)
      }
    }

    function Jq(qq, Eq, gq) {
      return Eq = Rq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === zq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, kq() ? Reflect.construct(Eq, gq || [], Rq(qq).constructor) : Eq.apply(qq, gq))
    }

    function kq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (kq = function() {
        return !!qq
      })()
    }

    function Rq(qq) {
      return Rq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Rq(qq)
    }

    function Uq(qq, Eq) {
      return Uq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Uq(qq, Eq)
    }

    function Fq(qq, Eq, gq) {
      return (Eq = sq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function sq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != zq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != zq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == zq(Eq) ? Eq : Eq + ""
    }
    var Xq = function(qq) {
        return qq.changedTouches && !!qq.changedTouches.length
      },
      wq = function(qq) {
        function Eq(qq) {
          var gq;
          return function(qq, Eq) {
            if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
          }(this, Eq), Fq(gq = Jq(this, Eq, [qq]), "handleDrag", (function(qq) {
            gq.leaveTimer && (clearTimeout(gq.leaveTimer), gq.leaveTimer = null), gq.state.isTravellerMoving ? gq.handleTravellerMove(qq) : gq.state.isSlideMoving && gq.handleSlideDrag(qq)
          })), Fq(gq, "handleTouchMove", (function(qq) {
            null != qq.changedTouches && qq.changedTouches.length > 0 && gq.handleDrag(qq.changedTouches[0])
          })), Fq(gq, "handleDragEnd", (function() {
            gq.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var qq = gq.props,
                Eq = qq.endIndex,
                Yq = qq.onDragEnd,
                lq = qq.startIndex;
              null === Yq || void 0 === Yq || Yq({
                endIndex: Eq,
                startIndex: lq
              })
            })), gq.detachDragEndListener()
          })), Fq(gq, "handleLeaveWrapper", (function() {
            (gq.state.isTravellerMoving || gq.state.isSlideMoving) && (gq.leaveTimer = window.setTimeout(gq.handleDragEnd, gq.props.leaveTimeOut))
          })), Fq(gq, "handleEnterSlideOrTraveller", (function() {
            gq.setState({
              isTextActive: !0
            })
          })), Fq(gq, "handleLeaveSlideOrTraveller", (function() {
            gq.setState({
              isTextActive: !1
            })
          })), Fq(gq, "handleSlideDragStart", (function(qq) {
            var Eq = Xq(qq) ? qq.changedTouches[0] : qq;
            gq.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: Eq.pageX
            }), gq.attachDragEndListener()
          })), gq.travellerDragStartHandlers = {
            startX: gq.handleTravellerDragStart.bind(gq, "startX"),
            endX: gq.handleTravellerDragStart.bind(gq, "endX")
          }, gq.state = {}, gq
        }
        return function(qq, Eq) {
          if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
          qq.prototype = Object.create(Eq && Eq.prototype, {
            constructor: {
              value: qq,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(qq, "prototype", {
            writable: !1
          }), Eq && Uq(qq, Eq)
        }(Eq, qq), gq = Eq, lq = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(qq) {
            var gq = qq.startX,
              Yq = qq.endX,
              lq = this.state.scaleValues,
              Oq = this.props,
              mq = Oq.gap,
              xq = Oq.data.length - 1,
              Aq = Math.min(gq, Yq),
              cq = Math.max(gq, Yq),
              uq = Eq.getIndexInRange(lq, Aq),
              Bq = Eq.getIndexInRange(lq, cq);
            return {
              startIndex: uq - uq % mq,
              endIndex: Bq === xq ? xq : Bq - Bq % mq
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(qq) {
            var Eq = this.props,
              gq = Eq.data,
              Yq = Eq.tickFormatter,
              lq = Eq.dataKey,
              Oq = (0, nq.$)(gq[qq], lq, qq);
            return xq()(Yq) ? Yq(Oq, qq) : Oq
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
          value: function(qq) {
            var Eq = this.state,
              gq = Eq.slideMoveStartX,
              Yq = Eq.startX,
              lq = Eq.endX,
              Oq = this.props,
              mq = Oq.x,
              xq = Oq.width,
              Aq = Oq.travellerWidth,
              cq = Oq.startIndex,
              uq = Oq.endIndex,
              Bq = Oq.onChange,
              Wq = qq.pageX - gq;
            Wq > 0 ? Wq = Math.min(Wq, mq + xq - Aq - lq, mq + xq - Aq - Yq) : Wq < 0 && (Wq = Math.max(Wq, mq - Yq, mq - lq));
            var Nq = this.getIndex({
              startX: Yq + Wq,
              endX: lq + Wq
            });
            Nq.startIndex === cq && Nq.endIndex === uq || !Bq || Bq(Nq), this.setState({
              startX: Yq + Wq,
              endX: lq + Wq,
              slideMoveStartX: qq.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(qq, Eq) {
            var gq = Xq(Eq) ? Eq.changedTouches[0] : Eq;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: qq,
              brushMoveStartX: gq.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(qq) {
            var Eq = this.state,
              gq = Eq.brushMoveStartX,
              Yq = Eq.movingTravellerId,
              lq = Eq.endX,
              Oq = Eq.startX,
              mq = this.state[Yq],
              xq = this.props,
              Aq = xq.x,
              cq = xq.width,
              uq = xq.travellerWidth,
              Bq = xq.onChange,
              Wq = xq.gap,
              Nq = xq.data,
              aq = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              Vq = qq.pageX - gq;
            Vq > 0 ? Vq = Math.min(Vq, Aq + cq - uq - mq) : Vq < 0 && (Vq = Math.max(Vq, Aq - mq)), aq[Yq] = mq + Vq;
            var dq = this.getIndex(aq),
              jq = dq.startIndex,
              Hq = dq.endIndex;
            this.setState(Fq(Fq({}, Yq, mq + Vq), "brushMoveStartX", qq.pageX), (function() {
              Bq && function() {
                var qq = Nq.length - 1;
                return "startX" === Yq && (lq > Oq ? jq % Wq === 0 : Hq % Wq === 0) || lq < Oq && Hq === qq || "endX" === Yq && (lq > Oq ? Hq % Wq === 0 : jq % Wq === 0) || lq > Oq && Hq === qq
              }() && Bq(dq)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(qq, Eq) {
            var gq = this,
              Yq = this.state,
              lq = Yq.scaleValues,
              Oq = Yq.startX,
              mq = Yq.endX,
              xq = this.state[Eq],
              Aq = lq.indexOf(xq);
            if (-1 !== Aq) {
              var cq = Aq + qq;
              if (!(-1 === cq || cq >= lq.length)) {
                var uq = lq[cq];
                "startX" === Eq && uq >= mq || "endX" === Eq && uq <= Oq || this.setState(Fq({}, Eq, uq), (function() {
                  gq.props.onChange(gq.getIndex({
                    startX: gq.state.startX,
                    endX: gq.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var qq = this.props,
              Eq = qq.x,
              gq = qq.y,
              lq = qq.width,
              Oq = qq.height,
              mq = qq.fill,
              xq = qq.stroke;
            return Yq.createElement("rect", {
              stroke: xq,
              fill: mq,
              x: Eq,
              y: gq,
              width: lq,
              height: Oq
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var qq = this.props,
              Eq = qq.x,
              gq = qq.y,
              lq = qq.width,
              Oq = qq.height,
              mq = qq.data,
              xq = qq.children,
              Aq = qq.padding,
              cq = Yq.Children.only(xq);
            return cq ? Yq.cloneElement(cq, {
              x: Eq,
              y: gq,
              width: lq,
              height: Oq,
              margin: Aq,
              compact: !0,
              data: mq
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(qq, gq) {
            var lq, Oq, mq = this,
              xq = this.props,
              Aq = xq.y,
              cq = xq.travellerWidth,
              uq = xq.height,
              Bq = xq.traveller,
              Wq = xq.ariaLabel,
              Nq = xq.data,
              aq = xq.startIndex,
              Vq = xq.endIndex,
              dq = Math.max(qq, this.props.x),
              jq = Gq(Gq({}, (0, rq.e)(this.props, !1)), {}, {
                x: dq,
                y: Aq,
                width: cq,
                height: uq
              }),
              Hq = Wq || "Min value: ".concat(null === (lq = Nq[aq]) || void 0 === lq ? void 0 : lq.name, ", Max value: ").concat(null === (Oq = Nq[Vq]) || void 0 === Oq ? void 0 : Oq.name);
            return Yq.createElement(oq.d, {
              tabIndex: 0,
              role: "slider",
              "aria-label": Hq,
              "aria-valuenow": qq,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[gq],
              onTouchStart: this.travellerDragStartHandlers[gq],
              onKeyDown: function(qq) {
                ["ArrowLeft", "ArrowRight"].includes(qq.key) && (qq.preventDefault(), qq.stopPropagation(), mq.handleTravellerMoveKeyboard("ArrowRight" === qq.key ? 1 : -1, gq))
              },
              onFocus: function() {
                mq.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                mq.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, Eq.renderTraveller(Bq, jq))
          }
        }, {
          key: "renderSlide",
          value: function(qq, Eq) {
            var gq = this.props,
              lq = gq.y,
              Oq = gq.height,
              mq = gq.stroke,
              xq = gq.travellerWidth,
              Aq = Math.min(qq, Eq) + xq,
              cq = Math.max(Math.abs(Eq - qq) - xq, 0);
            return Yq.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: mq,
              fillOpacity: .2,
              x: Aq,
              y: lq,
              width: cq,
              height: Oq
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var qq = this.props,
              Eq = qq.startIndex,
              gq = qq.endIndex,
              lq = qq.y,
              Oq = qq.height,
              mq = qq.travellerWidth,
              xq = qq.stroke,
              Aq = this.state,
              cq = Aq.startX,
              uq = Aq.endX,
              Bq = {
                pointerEvents: "none",
                fill: xq
              };
            return Yq.createElement(oq.d, {
              className: "recharts-brush-texts"
            }, Yq.createElement(hq.d, Sq({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(cq, uq) - 5,
              y: lq + Oq / 2
            }, Bq), this.getTextOfTick(Eq)), Yq.createElement(hq.d, Sq({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(cq, uq) + mq + 5,
              y: lq + Oq / 2
            }, Bq), this.getTextOfTick(gq)))
          }
        }, {
          key: "render",
          value: function() {
            var qq = this.props,
              Eq = qq.data,
              gq = qq.className,
              lq = qq.children,
              Oq = qq.x,
              mq = qq.y,
              xq = qq.width,
              Aq = qq.height,
              cq = qq.alwaysShowText,
              uq = this.state,
              Bq = uq.startX,
              Wq = uq.endX,
              Nq = uq.isTextActive,
              aq = uq.isSlideMoving,
              Vq = uq.isTravellerMoving,
              jq = uq.isTravellerFocused;
            if (!Eq || !Eq.length || !(0, bq.D)(Oq) || !(0, bq.D)(mq) || !(0, bq.D)(xq) || !(0, bq.D)(Aq) || xq <= 0 || Aq <= 0) return null;
            var Hq = (0, dq.d)("recharts-brush", gq),
              Pq = 1 === Yq.Children.count(lq),
              Qq = function(qq, Eq) {
                if (!qq) return null;
                var gq = qq.replace(/(\w)/, (function(qq) {
                    return qq.toUpperCase()
                  })),
                  Yq = Tq.reduce((function(qq, Yq) {
                    return fq(fq({}, qq), {}, Mq({}, Yq + gq, Eq))
                  }), {});
                return Yq[qq] = Eq, Yq
              }("userSelect", "none");
            return Yq.createElement(oq.d, {
              className: Hq,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: Qq
            }, this.renderBackground(), Pq && this.renderPanorama(), this.renderSlide(Bq, Wq), this.renderTravellerLayer(Bq, "startX"), this.renderTravellerLayer(Wq, "endX"), (Nq || aq || Vq || jq || cq) && this.renderText())
          }
        }], Oq = [{
          key: "renderDefaultTraveller",
          value: function(qq) {
            var Eq = qq.x,
              gq = qq.y,
              lq = qq.width,
              Oq = qq.height,
              mq = qq.stroke,
              xq = Math.floor(gq + Oq / 2) - 1;
            return Yq.createElement(Yq.Fragment, null, Yq.createElement("rect", {
              x: Eq,
              y: gq,
              width: lq,
              height: Oq,
              fill: mq,
              stroke: "none"
            }), Yq.createElement("line", {
              x1: Eq + 1,
              y1: xq,
              x2: Eq + lq - 1,
              y2: xq,
              fill: "none",
              stroke: "#fff"
            }), Yq.createElement("line", {
              x1: Eq + 1,
              y1: xq + 2,
              x2: Eq + lq - 1,
              y2: xq + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(qq, gq) {
            return Yq.isValidElement(qq) ? Yq.cloneElement(qq, gq) : xq()(qq) ? qq(gq) : Eq.renderDefaultTraveller(gq)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(qq, Eq) {
            var gq = qq.data,
              Yq = qq.width,
              lq = qq.x,
              Oq = qq.travellerWidth,
              mq = qq.updateId,
              xq = qq.startIndex,
              Aq = qq.endIndex;
            if (gq !== Eq.prevData || mq !== Eq.prevUpdateId) return Gq({
              prevData: gq,
              prevTravellerWidth: Oq,
              prevUpdateId: mq,
              prevX: lq,
              prevWidth: Yq
            }, gq && gq.length ? function(qq) {
              var Eq = qq.data,
                gq = qq.startIndex,
                Yq = qq.endIndex,
                lq = qq.x,
                Oq = qq.width,
                mq = qq.travellerWidth;
              if (!Eq || !Eq.length) return {};
              var xq = Eq.length,
                Aq = (0, vq.i)().domain(cq()(0, xq)).range([lq, lq + Oq - mq]),
                uq = Aq.domain().map((function(qq) {
                  return Aq(qq)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: Aq(gq),
                endX: Aq(Yq),
                scale: Aq,
                scaleValues: uq
              }
            }({
              data: gq,
              width: Yq,
              x: lq,
              travellerWidth: Oq,
              startIndex: xq,
              endIndex: Aq
            }) : {
              scale: null,
              scaleValues: null
            });
            if (Eq.scale && (Yq !== Eq.prevWidth || lq !== Eq.prevX || Oq !== Eq.prevTravellerWidth)) {
              Eq.scale.range([lq, lq + Yq - Oq]);
              var uq = Eq.scale.domain().map((function(qq) {
                return Eq.scale(qq)
              }));
              return {
                prevData: gq,
                prevTravellerWidth: Oq,
                prevUpdateId: mq,
                prevX: lq,
                prevWidth: Yq,
                startX: Eq.scale(qq.startIndex),
                endX: Eq.scale(qq.endIndex),
                scaleValues: uq
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(qq, Eq) {
            for (var gq = 0, Yq = qq.length - 1; Yq - gq > 1;) {
              var lq = Math.floor((gq + Yq) / 2);
              qq[lq] > Eq ? Yq = lq : gq = lq
            }
            return Eq >= qq[Yq] ? Yq : gq
          }
        }], lq && Lq(gq.prototype, lq), Oq && Lq(gq, Oq), Object.defineProperty(gq, "prototype", {
          writable: !1
        }), gq;
        var gq, lq, Oq
      }(Yq.PureComponent);
    Fq(wq, "displayName", "Brush"), Fq(wq, "defaultProps", {
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
    var Kq = gq(6007),
      Cq = gq(6095),
      Iq = gq(6105),
      eq = gq(6123),
      Dq = gq(6127),
      qE = gq(5290);

    function EE() {
      return EE = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, EE.apply(this, arguments)
    }

    function gE(qq) {
      return gE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, gE(qq)
    }

    function YE(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function lE(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? YE(Object(gq), !0).forEach((function(Eq) {
          uE(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : YE(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function OE(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, BE(Yq.key), Yq)
      }
    }

    function mE(qq, Eq, gq) {
      return Eq = AE(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === gE(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, xE() ? Reflect.construct(Eq, gq || [], AE(qq).constructor) : Eq.apply(qq, gq))
    }

    function xE() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (xE = function() {
        return !!qq
      })()
    }

    function AE(qq) {
      return AE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, AE(qq)
    }

    function cE(qq, Eq) {
      return cE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, cE(qq, Eq)
    }

    function uE(qq, Eq, gq) {
      return (Eq = BE(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function BE(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != gE(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != gE(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == gE(Eq) ? Eq : Eq + ""
    }
    var WE = function(qq) {
      function Eq() {
        return function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq), mE(this, Eq, arguments)
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && cE(qq, Eq)
      }(Eq, qq), gq = Eq, (lq = [{
        key: "render",
        value: function() {
          var qq = this.props,
            gq = qq.x,
            lq = qq.y,
            Oq = qq.r,
            mq = qq.alwaysShow,
            xq = qq.clipPathId,
            Aq = (0, bq.z)(gq),
            cq = (0, bq.z)(lq);
          if ((0, qE.e)(void 0 === mq, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !Aq || !cq) return null;
          var uq = function(qq) {
            var Eq = qq.x,
              gq = qq.y,
              Yq = qq.xAxis,
              lq = qq.yAxis,
              Oq = (0, Dq.c)({
                x: Yq.scale,
                y: lq.scale
              }),
              mq = Oq.apply({
                x: Eq,
                y: gq
              }, {
                bandAware: !0
              });
            return (0, eq.b)(qq, "discard") && !Oq.isInRange(mq) ? null : mq
          }(this.props);
          if (!uq) return null;
          var Bq = uq.x,
            Wq = uq.y,
            Nq = this.props,
            aq = Nq.shape,
            Vq = Nq.className,
            jq = lE(lE({
              clipPath: (0, eq.b)(this.props, "hidden") ? "url(#".concat(xq, ")") : void 0
            }, (0, rq.e)(this.props, !0)), {}, {
              cx: Bq,
              cy: Wq
            });
          return Yq.createElement(oq.d, {
            className: (0, dq.d)("recharts-reference-dot", Vq)
          }, Eq.renderDot(aq, jq), Iq.e.renderCallByParent(this.props, {
            x: Bq - Oq,
            y: Wq - Oq,
            width: 2 * Oq,
            height: 2 * Oq
          }))
        }
      }]) && OE(gq.prototype, lq), Oq && OE(gq, Oq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, lq, Oq
    }(Yq.Component);
    uE(WE, "displayName", "ReferenceDot"), uE(WE, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), uE(WE, "renderDot", (function(qq, Eq) {
      return Yq.isValidElement(qq) ? Yq.cloneElement(qq, Eq) : xq()(qq) ? qq(Eq) : Yq.createElement(yq.d, EE({}, Eq, {
        cx: Eq.cx,
        cy: Eq.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var NE = gq(6207);

    function aE() {
      return aE = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, aE.apply(this, arguments)
    }

    function VE(qq) {
      return VE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, VE(qq)
    }

    function dE(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function jE(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? dE(Object(gq), !0).forEach((function(Eq) {
          tE(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : dE(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function HE(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, rE(Yq.key), Yq)
      }
    }

    function oE(qq, Eq, gq) {
      return Eq = QE(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === VE(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, PE() ? Reflect.construct(Eq, gq || [], QE(qq).constructor) : Eq.apply(qq, gq))
    }

    function PE() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (PE = function() {
        return !!qq
      })()
    }

    function QE(qq) {
      return QE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, QE(qq)
    }

    function yE(qq, Eq) {
      return yE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, yE(qq, Eq)
    }

    function tE(qq, Eq, gq) {
      return (Eq = rE(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function rE(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != VE(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != VE(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == VE(Eq) ? Eq : Eq + ""
    }
    var vE = function(qq) {
      function Eq() {
        return function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq), oE(this, Eq, arguments)
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && yE(qq, Eq)
      }(Eq, qq), gq = Eq, (lq = [{
        key: "render",
        value: function() {
          var qq = this.props,
            gq = qq.x1,
            lq = qq.x2,
            Oq = qq.y1,
            mq = qq.y2,
            xq = qq.className,
            Aq = qq.alwaysShow,
            cq = qq.clipPathId;
          (0, qE.e)(void 0 === Aq, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var uq = (0, bq.z)(gq),
            Bq = (0, bq.z)(lq),
            Wq = (0, bq.z)(Oq),
            Nq = (0, bq.z)(mq),
            aq = this.props.shape;
          if (!uq && !Bq && !Wq && !Nq && !aq) return null;
          var Vq = function(qq, Eq, gq, Yq, lq) {
            var Oq = lq.x1,
              mq = lq.x2,
              xq = lq.y1,
              Aq = lq.y2,
              cq = lq.xAxis,
              uq = lq.yAxis;
            if (!cq || !uq) return null;
            var Bq = (0, Dq.c)({
                x: cq.scale,
                y: uq.scale
              }),
              Wq = {
                x: qq ? Bq.x.apply(Oq, {
                  position: "start"
                }) : Bq.x.rangeMin,
                y: gq ? Bq.y.apply(xq, {
                  position: "start"
                }) : Bq.y.rangeMin
              },
              Nq = {
                x: Eq ? Bq.x.apply(mq, {
                  position: "end"
                }) : Bq.x.rangeMax,
                y: Yq ? Bq.y.apply(Aq, {
                  position: "end"
                }) : Bq.y.rangeMax
              };
            return !(0, eq.b)(lq, "discard") || Bq.isInRange(Wq) && Bq.isInRange(Nq) ? (0, Dq.l)(Wq, Nq) : null
          }(uq, Bq, Wq, Nq, this.props);
          if (!Vq && !aq) return null;
          var jq = (0, eq.b)(this.props, "hidden") ? "url(#".concat(cq, ")") : void 0;
          return Yq.createElement(oq.d, {
            className: (0, dq.d)("recharts-reference-area", xq)
          }, Eq.renderRect(aq, jE(jE({
            clipPath: jq
          }, (0, rq.e)(this.props, !0)), Vq)), Iq.e.renderCallByParent(this.props, Vq))
        }
      }]) && HE(gq.prototype, lq), Oq && HE(gq, Oq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, lq, Oq
    }(Yq.Component);

    function hE(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return nE(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return nE(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return nE(qq, Eq)
      }(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nE(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }
    tE(vE, "displayName", "ReferenceArea"), tE(vE, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), tE(vE, "renderRect", (function(qq, Eq) {
      return Yq.isValidElement(qq) ? Yq.cloneElement(qq, Eq) : xq()(qq) ? qq(Eq) : Yq.createElement(tq.b, aE({}, Eq, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var bE = function(qq, Eq, gq, Yq, lq) {
        var Oq = (0, rq.g)(qq, NE.c),
          mq = (0, rq.g)(qq, WE),
          xq = [].concat(hE(Oq), hE(mq)),
          Aq = (0, rq.g)(qq, vE),
          cq = "".concat(Yq, "Id"),
          uq = Yq[0],
          Bq = Eq;
        if (xq.length && (Bq = xq.reduce((function(qq, Eq) {
            if (Eq.props[cq] === gq && (0, eq.b)(Eq.props, "extendDomain") && (0, bq.D)(Eq.props[uq])) {
              var Yq = Eq.props[uq];
              return [Math.min(qq[0], Yq), Math.max(qq[1], Yq)]
            }
            return qq
          }), Bq)), Aq.length) {
          var Wq = "".concat(uq, "1"),
            Nq = "".concat(uq, "2");
          Bq = Aq.reduce((function(qq, Eq) {
            if (Eq.props[cq] === gq && (0, eq.b)(Eq.props, "extendDomain") && (0, bq.D)(Eq.props[Wq]) && (0, bq.D)(Eq.props[Nq])) {
              var Yq = Eq.props[Wq],
                lq = Eq.props[Nq];
              return [Math.min(qq[0], Yq, lq), Math.max(qq[1], Yq, lq)]
            }
            return qq
          }), Bq)
        }
        return lq && lq.length && (Bq = lq.reduce((function(qq, Eq) {
          return (0, bq.D)(Eq) ? [Math.min(qq[0], Eq), Math.max(qq[1], Eq)] : qq
        }), Bq)), Bq
      },
      iE = gq(6114),
      ZE = gq(5318),
      fE = gq(36),
      ME = new(gq.n(fE)()),
      TE = "recharts.syncMouseEvents",
      zE = gq(5324);

    function SE(qq) {
      return SE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, SE(qq)
    }

    function pE(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, LE(Yq.key), Yq)
      }
    }

    function GE(qq, Eq, gq) {
      return (Eq = LE(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function LE(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != SE(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != SE(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == SE(Eq) ? Eq : Eq + ""
    }
    var JE = function() {
      return qq = function qq() {
        ! function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, qq), GE(this, "activeIndex", 0), GE(this, "coordinateList", []), GE(this, "layout", "horizontal")
      }, (Eq = [{
        key: "setDetails",
        value: function(qq) {
          var Eq, gq = qq.coordinateList,
            Yq = void 0 === gq ? null : gq,
            lq = qq.container,
            Oq = void 0 === lq ? null : lq,
            mq = qq.layout,
            xq = void 0 === mq ? null : mq,
            Aq = qq.offset,
            cq = void 0 === Aq ? null : Aq,
            uq = qq.mouseHandlerCallback,
            Bq = void 0 === uq ? null : uq;
          this.coordinateList = null !== (Eq = null !== Yq && void 0 !== Yq ? Yq : this.coordinateList) && void 0 !== Eq ? Eq : [], this.container = null !== Oq && void 0 !== Oq ? Oq : this.container, this.layout = null !== xq && void 0 !== xq ? xq : this.layout, this.offset = null !== cq && void 0 !== cq ? cq : this.offset, this.mouseHandlerCallback = null !== Bq && void 0 !== Bq ? Bq : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(qq) {
          if (0 !== this.coordinateList.length) switch (qq.key) {
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
        value: function(qq) {
          this.activeIndex = qq
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var qq, Eq;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var gq = this.container.getBoundingClientRect(),
              Yq = gq.x,
              lq = gq.y,
              Oq = gq.height,
              mq = this.coordinateList[this.activeIndex].coordinate,
              xq = (null === (qq = window) || void 0 === qq ? void 0 : qq.scrollX) || 0,
              Aq = (null === (Eq = window) || void 0 === Eq ? void 0 : Eq.scrollY) || 0,
              cq = Yq + mq + xq,
              uq = lq + this.offset.top + Oq / 2 + Aq;
            this.mouseHandlerCallback({
              pageX: cq,
              pageY: uq
            })
          }
        }
      }]) && pE(qq.prototype, Eq), gq && pE(qq, gq), Object.defineProperty(qq, "prototype", {
        writable: !1
      }), qq;
      var qq, Eq, gq
    }();
    var kE = gq(6187),
      RE = gq(6255);

    function UE(qq) {
      return UE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, UE(qq)
    }
    var FE = ["x", "y", "top", "left", "width", "height", "className"];

    function sE() {
      return sE = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, sE.apply(this, arguments)
    }

    function XE(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function wE(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != UE(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != UE(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == UE(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function KE(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }
    var CE = function(qq, Eq, gq, Yq, lq, Oq) {
        return "M".concat(qq, ",").concat(lq, "v").concat(Yq, "M").concat(Oq, ",").concat(Eq, "h").concat(gq)
      },
      IE = function(qq) {
        var Eq = qq.x,
          gq = void 0 === Eq ? 0 : Eq,
          lq = qq.y,
          Oq = void 0 === lq ? 0 : lq,
          mq = qq.top,
          xq = void 0 === mq ? 0 : mq,
          Aq = qq.left,
          cq = void 0 === Aq ? 0 : Aq,
          uq = qq.width,
          Bq = void 0 === uq ? 0 : uq,
          Wq = qq.height,
          Nq = void 0 === Wq ? 0 : Wq,
          aq = qq.className,
          Vq = function(qq) {
            for (var Eq = 1; Eq < arguments.length; Eq++) {
              var gq = null != arguments[Eq] ? arguments[Eq] : {};
              Eq % 2 ? XE(Object(gq), !0).forEach((function(Eq) {
                wE(qq, Eq, gq[Eq])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : XE(Object(gq)).forEach((function(Eq) {
                Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
              }))
            }
            return qq
          }({
            x: gq,
            y: Oq,
            top: xq,
            left: cq,
            width: Bq,
            height: Nq
          }, KE(qq, FE));
        return (0, bq.D)(gq) && (0, bq.D)(Oq) && (0, bq.D)(Bq) && (0, bq.D)(Nq) && (0, bq.D)(xq) && (0, bq.D)(cq) ? Yq.createElement("path", sE({}, (0, rq.e)(Vq, !0), {
          className: (0, dq.d)("recharts-cross", aq),
          d: CE(gq, Oq, Bq, Nq, xq, cq)
        })) : null
      };

    function eE(qq) {
      var Eq = qq.cx,
        gq = qq.cy,
        Yq = qq.radius,
        lq = qq.startAngle,
        Oq = qq.endAngle;
      return {
        points: [(0, iE.l)(Eq, gq, Yq, lq), (0, iE.l)(Eq, gq, Yq, Oq)],
        cx: Eq,
        cy: gq,
        radius: Yq,
        startAngle: lq,
        endAngle: Oq
      }
    }
    var DE = gq(6203);

    function qg(qq, Eq, gq) {
      var Yq, lq, Oq, mq;
      if ("horizontal" === qq) Oq = Yq = Eq.x, lq = gq.top, mq = gq.top + gq.height;
      else if ("vertical" === qq) mq = lq = Eq.y, Yq = gq.left, Oq = gq.left + gq.width;
      else if (null != Eq.cx && null != Eq.cy) {
        if ("centric" !== qq) return eE(Eq);
        var xq = Eq.cx,
          Aq = Eq.cy,
          cq = Eq.innerRadius,
          uq = Eq.outerRadius,
          Bq = Eq.angle,
          Wq = (0, iE.l)(xq, Aq, cq, Bq),
          Nq = (0, iE.l)(xq, Aq, uq, Bq);
        Yq = Wq.x, lq = Wq.y, Oq = Nq.x, mq = Nq.y
      }
      return [{
        x: Yq,
        y: lq
      }, {
        x: Oq,
        y: mq
      }]
    }

    function Eg(qq) {
      return Eg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Eg(qq)
    }

    function gg(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Yg(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? gg(Object(gq), !0).forEach((function(Eq) {
          lg(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : gg(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function lg(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Eg(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != Eg(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Eg(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Og(qq) {
      var Eq, gq, lq, Oq = qq.element,
        mq = qq.tooltipEventType,
        xq = qq.isActive,
        Aq = qq.activeCoordinate,
        cq = qq.activePayload,
        uq = qq.offset,
        Bq = qq.activeTooltipIndex,
        Wq = qq.tooltipAxisBandSize,
        Nq = qq.layout,
        aq = qq.chartName,
        Vq = null !== (Eq = Oq.props.cursor) && void 0 !== Eq ? Eq : null === (gq = Oq.type.defaultProps) || void 0 === gq ? void 0 : gq.cursor;
      if (!Oq || !Vq || !xq || !Aq || "ScatterChart" !== aq && "axis" !== mq) return null;
      var jq = RE.e;
      if ("ScatterChart" === aq) lq = Aq, jq = IE;
      else if ("BarChart" === aq) lq = function(qq, Eq, gq, Yq) {
        var lq = Yq / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === qq ? Eq.x - lq : gq.left + .5,
          y: "horizontal" === qq ? gq.top + .5 : Eq.y - lq,
          width: "horizontal" === qq ? Yq : gq.width - 1,
          height: "horizontal" === qq ? gq.height - 1 : Yq
        }
      }(Nq, Aq, uq, Wq), jq = tq.b;
      else if ("radial" === Nq) {
        var Hq = eE(Aq),
          oq = Hq.cx,
          Pq = Hq.cy,
          Qq = Hq.radius;
        lq = {
          cx: oq,
          cy: Pq,
          startAngle: Hq.startAngle,
          endAngle: Hq.endAngle,
          innerRadius: Qq,
          outerRadius: Qq
        }, jq = DE.c
      } else lq = {
        points: qg(Nq, Aq, uq)
      }, jq = RE.e;
      var yq = Yg(Yg(Yg(Yg({
        stroke: "#ccc",
        pointerEvents: "none"
      }, uq), lq), (0, rq.e)(Vq, !1)), {}, {
        payload: cq,
        payloadIndex: Bq,
        className: (0, dq.d)("recharts-tooltip-cursor", Vq.className)
      });
      return (0, Yq.isValidElement)(Vq) ? (0, Yq.cloneElement)(Vq, yq) : (0, Yq.createElement)(jq, yq)
    }
    var mg = gq(6230),
      xg = ["item"],
      Ag = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function cg(qq) {
      return cg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, cg(qq)
    }

    function ug() {
      return ug = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, ug.apply(this, arguments)
    }

    function Bg(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || og(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wg(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function Ng(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, rg(Yq.key), Yq)
      }
    }

    function ag(qq, Eq, gq) {
      return Eq = dg(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === cg(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Vg() ? Reflect.construct(Eq, gq || [], dg(qq).constructor) : Eq.apply(qq, gq))
    }

    function Vg() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Vg = function() {
        return !!qq
      })()
    }

    function dg(qq) {
      return dg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, dg(qq)
    }

    function jg(qq, Eq) {
      return jg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, jg(qq, Eq)
    }

    function Hg(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return Pg(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || og(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function og(qq, Eq) {
      if (qq) {
        if ("string" === typeof qq) return Pg(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? Pg(qq, Eq) : void 0
      }
    }

    function Pg(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function Qg(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function yg(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Qg(Object(gq), !0).forEach((function(Eq) {
          tg(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Qg(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function tg(qq, Eq, gq) {
      return (Eq = rg(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function rg(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != cg(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != cg(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == cg(Eq) ? Eq : Eq + ""
    }
    var vg = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      hg = {
        width: "100%",
        height: "100%"
      },
      ng = {
        x: 0,
        y: 0
      };

    function bg(qq) {
      return qq
    }
    var ig = function(qq, Eq) {
      var gq = Eq.graphicalItems,
        Yq = Eq.dataStartIndex,
        lq = Eq.dataEndIndex,
        Oq = (null !== gq && void 0 !== gq ? gq : []).reduce((function(qq, Eq) {
          var gq = Eq.props.data;
          return gq && gq.length ? [].concat(Hg(qq), Hg(gq)) : qq
        }), []);
      return Oq.length > 0 ? Oq : qq && qq.length && (0, bq.D)(Yq) && (0, bq.D)(lq) ? qq.slice(Yq, lq + 1) : []
    };

    function Zg(qq) {
      return "number" === qq ? [0, "auto"] : void 0
    }
    var fg = function(qq, Eq, gq, Yq) {
        var lq = qq.graphicalItems,
          Oq = qq.tooltipAxis,
          mq = ig(Eq, qq);
        return gq < 0 || !lq || !lq.length || gq >= mq.length ? null : lq.reduce((function(lq, xq) {
          var Aq, cq, uq = null !== (Aq = xq.props.data) && void 0 !== Aq ? Aq : Eq;
          if (uq && qq.dataStartIndex + qq.dataEndIndex !== 0 && qq.dataEndIndex - qq.dataStartIndex >= gq && (uq = uq.slice(qq.dataStartIndex, qq.dataEndIndex + 1)), Oq.dataKey && !Oq.allowDuplicatedCategory) {
            var Bq = void 0 === uq ? mq : uq;
            cq = (0, bq.i)(Bq, Oq.dataKey, Yq)
          } else cq = uq && uq[gq] || mq[gq];
          return cq ? [].concat(Hg(lq), [(0, nq.Y)(xq, cq)]) : lq
        }), [])
      },
      Mg = function(qq, Eq, gq, Yq) {
        var lq = Yq || {
            x: qq.chartX,
            y: qq.chartY
          },
          Oq = function(qq, Eq) {
            return "horizontal" === Eq ? qq.x : "vertical" === Eq ? qq.y : "centric" === Eq ? qq.angle : qq.radius
          }(lq, gq),
          mq = qq.orderedTooltipTicks,
          xq = qq.tooltipAxis,
          Aq = qq.tooltipTicks,
          cq = (0, nq.g)(Oq, mq, Aq, xq);
        if (cq >= 0 && Aq) {
          var uq = Aq[cq] && Aq[cq].value,
            Bq = fg(qq, Eq, cq, uq),
            Wq = function(qq, Eq, gq, Yq) {
              var lq = Eq.find((function(qq) {
                return qq && qq.index === gq
              }));
              if (lq) {
                if ("horizontal" === qq) return {
                  x: lq.coordinate,
                  y: Yq.y
                };
                if ("vertical" === qq) return {
                  x: Yq.x,
                  y: lq.coordinate
                };
                if ("centric" === qq) {
                  var Oq = lq.coordinate,
                    mq = Yq.radius;
                  return yg(yg(yg({}, Yq), (0, iE.l)(Yq.cx, Yq.cy, mq, Oq)), {}, {
                    angle: Oq,
                    radius: mq
                  })
                }
                var xq = lq.coordinate,
                  Aq = Yq.angle;
                return yg(yg(yg({}, Yq), (0, iE.l)(Yq.cx, Yq.cy, xq, Aq)), {}, {
                  angle: Aq,
                  radius: xq
                })
              }
              return ng
            }(gq, mq, cq, lq);
          return {
            activeTooltipIndex: cq,
            activeLabel: uq,
            activePayload: Bq,
            activeCoordinate: Wq
          }
        }
        return null
      },
      Tg = function(qq, Eq) {
        var gq = Eq.axes,
          Yq = Eq.graphicalItems,
          lq = Eq.axisType,
          mq = Eq.axisIdKey,
          xq = Eq.stackGroups,
          Aq = Eq.dataStartIndex,
          uq = Eq.dataEndIndex,
          Bq = qq.layout,
          Wq = qq.children,
          Nq = qq.stackOffset,
          aq = (0, nq.db)(Bq, lq);
        return gq.reduce((function(Eq, gq) {
          var Vq, dq = void 0 !== gq.type.defaultProps ? yg(yg({}, gq.type.defaultProps), gq.props) : gq.props,
            jq = dq.type,
            Hq = dq.dataKey,
            oq = dq.allowDataOverflow,
            Pq = dq.allowDuplicatedCategory,
            Qq = dq.scale,
            yq = dq.ticks,
            tq = dq.includeHidden,
            rq = dq[mq];
          if (Eq[rq]) return Eq;
          var vq, hq, iq, Zq = ig(qq.data, {
              graphicalItems: Yq.filter((function(qq) {
                var Eq;
                return (mq in qq.props ? qq.props[mq] : null === (Eq = qq.type.defaultProps) || void 0 === Eq ? void 0 : Eq[mq]) === rq
              })),
              dataStartIndex: Aq,
              dataEndIndex: uq
            }),
            fq = Zq.length;
          (function(qq, Eq, gq) {
            if ("number" === gq && !0 === Eq && Array.isArray(qq)) {
              var Yq = null === qq || void 0 === qq ? void 0 : qq[0],
                lq = null === qq || void 0 === qq ? void 0 : qq[1];
              if (Yq && lq && (0, bq.D)(Yq) && (0, bq.D)(lq)) return !0
            }
            return !1
          })(dq.domain, oq, jq) && (vq = (0, nq.nb)(dq.domain, null, oq), !aq || "number" !== jq && "auto" === Qq || (iq = (0, nq.B)(Zq, Hq, "category")));
          var Mq = Zg(jq);
          if (!vq || 0 === vq.length) {
            var Tq, zq = null !== (Tq = dq.domain) && void 0 !== Tq ? Tq : Mq;
            if (Hq) {
              if (vq = (0, nq.B)(Zq, Hq, jq), "category" === jq && aq) {
                var Sq = (0, bq.q)(vq);
                Pq && Sq ? (hq = vq, vq = cq()(0, fq)) : Pq || (vq = (0, nq.hb)(zq, vq, gq).reduce((function(qq, Eq) {
                  return qq.indexOf(Eq) >= 0 ? qq : [].concat(Hg(qq), [Eq])
                }), []))
              } else if ("category" === jq) vq = Pq ? vq.filter((function(qq) {
                return "" !== qq && !Oq()(qq)
              })) : (0, nq.hb)(zq, vq, gq).reduce((function(qq, Eq) {
                return qq.indexOf(Eq) >= 0 || "" === Eq || Oq()(Eq) ? qq : [].concat(Hg(qq), [Eq])
              }), []);
              else if ("number" === jq) {
                var pq = (0, nq.jb)(Zq, Yq.filter((function(qq) {
                  var Eq, gq, Yq = mq in qq.props ? qq.props[mq] : null === (Eq = qq.type.defaultProps) || void 0 === Eq ? void 0 : Eq[mq],
                    lq = "hide" in qq.props ? qq.props.hide : null === (gq = qq.type.defaultProps) || void 0 === gq ? void 0 : gq.hide;
                  return Yq === rq && (tq || !lq)
                })), Hq, lq, Bq);
                pq && (vq = pq)
              }!aq || "number" !== jq && "auto" === Qq || (iq = (0, nq.B)(Zq, Hq, "category"))
            } else vq = aq ? cq()(0, fq) : xq && xq[rq] && xq[rq].hasStack && "number" === jq ? "expand" === Nq ? [0, 1] : (0, nq.I)(xq[rq].stackGroups, Aq, uq) : (0, nq.E)(Zq, Yq.filter((function(qq) {
              var Eq = mq in qq.props ? qq.props[mq] : qq.type.defaultProps[mq],
                gq = "hide" in qq.props ? qq.props.hide : qq.type.defaultProps.hide;
              return Eq === rq && (tq || !gq)
            })), jq, Bq, !0);
            if ("number" === jq) vq = bE(Wq, vq, rq, lq, yq), zq && (vq = (0, nq.nb)(zq, vq, oq));
            else if ("category" === jq && zq) {
              var Gq = zq;
              vq.every((function(qq) {
                return Gq.indexOf(qq) >= 0
              })) && (vq = Gq)
            }
          }
          return yg(yg({}, Eq), {}, tg({}, rq, yg(yg({}, dq), {}, {
            axisType: lq,
            domain: vq,
            categoricalDomain: iq,
            duplicateDomain: hq,
            originalDomain: null !== (Vq = dq.domain) && void 0 !== Vq ? Vq : Mq,
            isCategorical: aq,
            layout: Bq
          })))
        }), {})
      },
      zg = function(qq, Eq) {
        var gq = Eq.axisType,
          Yq = void 0 === gq ? "xAxis" : gq,
          lq = Eq.AxisComp,
          Oq = Eq.graphicalItems,
          mq = Eq.stackGroups,
          xq = Eq.dataStartIndex,
          Aq = Eq.dataEndIndex,
          uq = qq.children,
          Wq = "".concat(Yq, "Id"),
          Nq = (0, rq.g)(uq, lq),
          aq = {};
        return Nq && Nq.length ? aq = Tg(qq, {
          axes: Nq,
          graphicalItems: Oq,
          axisType: Yq,
          axisIdKey: Wq,
          stackGroups: mq,
          dataStartIndex: xq,
          dataEndIndex: Aq
        }) : Oq && Oq.length && (aq = function(qq, Eq) {
          var gq = Eq.graphicalItems,
            Yq = Eq.Axis,
            lq = Eq.axisType,
            Oq = Eq.axisIdKey,
            mq = Eq.stackGroups,
            xq = Eq.dataStartIndex,
            Aq = Eq.dataEndIndex,
            uq = qq.layout,
            Wq = qq.children,
            Nq = ig(qq.data, {
              graphicalItems: gq,
              dataStartIndex: xq,
              dataEndIndex: Aq
            }),
            aq = Nq.length,
            Vq = (0, nq.db)(uq, lq),
            dq = -1;
          return gq.reduce((function(qq, Eq) {
            var jq, Hq = (void 0 !== Eq.type.defaultProps ? yg(yg({}, Eq.type.defaultProps), Eq.props) : Eq.props)[Oq],
              oq = Zg("number");
            return qq[Hq] ? qq : (dq++, Vq ? jq = cq()(0, aq) : mq && mq[Hq] && mq[Hq].hasStack ? (jq = (0, nq.I)(mq[Hq].stackGroups, xq, Aq), jq = bE(Wq, jq, Hq, lq)) : (jq = (0, nq.nb)(oq, (0, nq.E)(Nq, gq.filter((function(qq) {
              var Eq, gq, Yq = Oq in qq.props ? qq.props[Oq] : null === (Eq = qq.type.defaultProps) || void 0 === Eq ? void 0 : Eq[Oq],
                lq = "hide" in qq.props ? qq.props.hide : null === (gq = qq.type.defaultProps) || void 0 === gq ? void 0 : gq.hide;
              return Yq === Hq && !lq
            })), "number", uq), Yq.defaultProps.allowDataOverflow), jq = bE(Wq, jq, Hq, lq)), yg(yg({}, qq), {}, tg({}, Hq, yg(yg({
              axisType: lq
            }, Yq.defaultProps), {}, {
              hide: !0,
              orientation: Bq()(vg, "".concat(lq, ".").concat(dq % 2), null),
              domain: jq,
              originalDomain: oq,
              isCategorical: Vq,
              layout: uq
            }))))
          }), {})
        }(qq, {
          Axis: lq,
          graphicalItems: Oq,
          axisType: Yq,
          axisIdKey: Wq,
          stackGroups: mq,
          dataStartIndex: xq,
          dataEndIndex: Aq
        })), aq
      },
      Sg = function(qq) {
        var Eq = qq.children,
          gq = qq.defaultShowTooltip,
          Yq = (0, rq.j)(Eq, wq),
          lq = 0,
          Oq = 0;
        return qq.data && 0 !== qq.data.length && (Oq = qq.data.length - 1), Yq && Yq.props && (Yq.props.startIndex >= 0 && (lq = Yq.props.startIndex), Yq.props.endIndex >= 0 && (Oq = Yq.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: lq,
          dataEndIndex: Oq,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(gq)
        }
      },
      pg = function(qq) {
        return "horizontal" === qq ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === qq ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === qq ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      Gg = function(qq, Eq) {
        return "xAxis" === Eq ? qq[Eq].width : "yAxis" === Eq ? qq[Eq].height : void 0
      },
      Lg = function(qq) {
        var Eq = qq.chartName,
          gq = qq.GraphicalChild,
          lq = qq.defaultTooltipEventType,
          mq = void 0 === lq ? "axis" : lq,
          Aq = qq.validateTooltipEventTypes,
          cq = void 0 === Aq ? ["axis"] : Aq,
          uq = qq.axisComponents,
          Wq = qq.legendContent,
          aq = qq.formatAxisMap,
          vq = qq.defaultProps,
          hq = function(qq, Eq) {
            var gq = Eq.graphicalItems,
              Yq = Eq.stackGroups,
              lq = Eq.offset,
              mq = Eq.updateId,
              xq = Eq.dataStartIndex,
              Aq = Eq.dataEndIndex,
              cq = qq.barSize,
              Bq = qq.layout,
              Wq = qq.barGap,
              Nq = qq.barCategoryGap,
              aq = qq.maxBarSize,
              Vq = pg(Bq),
              dq = Vq.numericAxisName,
              Hq = Vq.cateAxisName,
              oq = function(qq) {
                return !(!qq || !qq.length) && qq.some((function(qq) {
                  var Eq = (0, rq.l)(qq && qq.type);
                  return Eq && Eq.indexOf("Bar") >= 0
                }))
              }(gq),
              Pq = [];
            return gq.forEach((function(gq, Vq) {
              var Qq = ig(qq.data, {
                  graphicalItems: [gq],
                  dataStartIndex: xq,
                  dataEndIndex: Aq
                }),
                yq = void 0 !== gq.type.defaultProps ? yg(yg({}, gq.type.defaultProps), gq.props) : gq.props,
                tq = yq.dataKey,
                vq = yq.maxBarSize,
                hq = yq["".concat(dq, "Id")],
                bq = yq["".concat(Hq, "Id")],
                iq = uq.reduce((function(qq, gq) {
                  var Yq = Eq["".concat(gq.axisType, "Map")],
                    lq = yq["".concat(gq.axisType, "Id")];
                  Yq && Yq[lq] || "zAxis" === gq.axisType || (0, jq.d)(!1);
                  var Oq = Yq[lq];
                  return yg(yg({}, qq), {}, tg(tg({}, gq.axisType, Oq), "".concat(gq.axisType, "Ticks"), (0, nq.R)(Oq)))
                }), {}),
                Zq = iq[Hq],
                fq = iq["".concat(Hq, "Ticks")],
                Mq = Yq && Yq[hq] && Yq[hq].hasStack && (0, nq.P)(gq, Yq[hq].stackGroups),
                Tq = (0, rq.l)(gq.type).indexOf("Bar") >= 0,
                zq = (0, nq.l)(Zq, fq),
                Sq = [],
                pq = oq && (0, nq.o)({
                  barSize: cq,
                  stackGroups: Yq,
                  totalSize: Gg(iq, Hq)
                });
              if (Tq) {
                var Gq, Lq, Jq = Oq()(vq) ? aq : vq,
                  kq = null !== (Gq = null !== (Lq = (0, nq.l)(Zq, fq, !0)) && void 0 !== Lq ? Lq : Jq) && void 0 !== Gq ? Gq : 0;
                Sq = (0, nq.n)({
                  barGap: Wq,
                  barCategoryGap: Nq,
                  bandSize: kq !== zq ? kq : zq,
                  sizeList: pq[bq],
                  maxBarSize: Jq
                }), kq !== zq && (Sq = Sq.map((function(qq) {
                  return yg(yg({}, qq), {}, {
                    position: yg(yg({}, qq.position), {}, {
                      offset: qq.position.offset - kq / 2
                    })
                  })
                })))
              }
              var Rq = gq && gq.type && gq.type.getComposedData;
              Rq && Pq.push({
                props: yg(yg({}, Rq(yg(yg({}, iq), {}, {
                  displayedData: Qq,
                  props: qq,
                  dataKey: tq,
                  item: gq,
                  bandSize: zq,
                  barPosition: Sq,
                  offset: lq,
                  stackedData: Mq,
                  layout: Bq,
                  dataStartIndex: xq,
                  dataEndIndex: Aq
                }))), {}, tg(tg(tg({
                  key: gq.key || "item-".concat(Vq)
                }, dq, iq[dq]), Hq, iq[Hq]), "animationId", mq)),
                childIndex: (0, rq.s)(gq, qq.children),
                item: gq
              })
            })), Pq
          },
          iq = function(qq, Yq) {
            var lq = qq.props,
              Oq = qq.dataStartIndex,
              mq = qq.dataEndIndex,
              xq = qq.updateId;
            if (!(0, rq.y)({
                props: lq
              })) return null;
            var Aq = lq.children,
              cq = lq.layout,
              Wq = lq.stackOffset,
              Vq = lq.data,
              dq = lq.reverseStackOrder,
              jq = pg(cq),
              Hq = jq.numericAxisName,
              oq = jq.cateAxisName,
              Pq = (0, rq.g)(Aq, gq),
              yq = (0, nq.O)(Vq, Pq, "".concat(Hq, "Id"), "".concat(oq, "Id"), Wq, dq),
              tq = uq.reduce((function(qq, Eq) {
                var gq = "".concat(Eq.axisType, "Map");
                return yg(yg({}, qq), {}, tg({}, gq, zg(lq, yg(yg({}, Eq), {}, {
                  graphicalItems: Pq,
                  stackGroups: Eq.axisType === Hq && yq,
                  dataStartIndex: Oq,
                  dataEndIndex: mq
                }))))
              }), {}),
              vq = function(qq, Eq) {
                var gq = qq.props,
                  Yq = qq.graphicalItems,
                  lq = qq.xAxisMap,
                  Oq = void 0 === lq ? {} : lq,
                  mq = qq.yAxisMap,
                  xq = void 0 === mq ? {} : mq,
                  Aq = gq.width,
                  cq = gq.height,
                  uq = gq.children,
                  Wq = gq.margin || {},
                  Nq = (0, rq.j)(uq, wq),
                  aq = (0, rq.j)(uq, Qq.d),
                  Vq = Object.keys(xq).reduce((function(qq, Eq) {
                    var gq = xq[Eq],
                      Yq = gq.orientation;
                    return gq.mirror || gq.hide ? qq : yg(yg({}, qq), {}, tg({}, Yq, qq[Yq] + gq.width))
                  }), {
                    left: Wq.left || 0,
                    right: Wq.right || 0
                  }),
                  dq = Object.keys(Oq).reduce((function(qq, Eq) {
                    var gq = Oq[Eq],
                      Yq = gq.orientation;
                    return gq.mirror || gq.hide ? qq : yg(yg({}, qq), {}, tg({}, Yq, Bq()(qq, "".concat(Yq)) + gq.height))
                  }), {
                    top: Wq.top || 0,
                    bottom: Wq.bottom || 0
                  }),
                  jq = yg(yg({}, dq), Vq),
                  Hq = jq.bottom;
                Nq && (jq.bottom += Nq.props.height || wq.defaultProps.height), aq && Eq && (jq = (0, nq.e)(jq, Yq, gq, Eq));
                var oq = Aq - jq.left - jq.right,
                  Pq = cq - jq.top - jq.bottom;
                return yg(yg({
                  brushBottom: Hq
                }, jq), {}, {
                  width: Math.max(oq, 0),
                  height: Math.max(Pq, 0)
                })
              }(yg(yg({}, tq), {}, {
                props: lq,
                graphicalItems: Pq
              }), null === Yq || void 0 === Yq ? void 0 : Yq.legendBBox);
            Object.keys(tq).forEach((function(qq) {
              tq[qq] = aq(lq, tq[qq], vq, qq.replace("Map", ""), Eq)
            }));
            var iq = function(qq) {
                var Eq = (0, bq.j)(qq),
                  gq = (0, nq.R)(Eq, !1, !0);
                return {
                  tooltipTicks: gq,
                  orderedTooltipTicks: Nq()(gq, (function(qq) {
                    return qq.coordinate
                  })),
                  tooltipAxis: Eq,
                  tooltipAxisBandSize: (0, nq.l)(Eq, gq)
                }
              }(tq["".concat(oq, "Map")]),
              Zq = hq(lq, yg(yg({}, tq), {}, {
                dataStartIndex: Oq,
                dataEndIndex: mq,
                updateId: xq,
                graphicalItems: Pq,
                stackGroups: yq,
                offset: vq
              }));
            return yg(yg({
              formattedGraphicalItems: Zq,
              graphicalItems: Pq,
              offset: vq,
              stackGroups: yq
            }, iq), tq)
          },
          Zq = function(qq) {
            function gq(qq) {
              var lq, mq, Aq;
              return function(qq, Eq) {
                if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
              }(this, gq), tg(Aq = ag(this, gq, [qq]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), tg(Aq, "accessibilityManager", new JE), tg(Aq, "handleLegendBBoxUpdate", (function(qq) {
                if (qq) {
                  var Eq = Aq.state,
                    gq = Eq.dataStartIndex,
                    Yq = Eq.dataEndIndex,
                    lq = Eq.updateId;
                  Aq.setState(yg({
                    legendBBox: qq
                  }, iq({
                    props: Aq.props,
                    dataStartIndex: gq,
                    dataEndIndex: Yq,
                    updateId: lq
                  }, yg(yg({}, Aq.state), {}, {
                    legendBBox: qq
                  }))))
                }
              })), tg(Aq, "handleReceiveSyncEvent", (function(qq, Eq, gq) {
                if (Aq.props.syncId === qq) {
                  if (gq === Aq.eventEmitterSymbol && "function" !== typeof Aq.props.syncMethod) return;
                  Aq.applySyncEvent(Eq)
                }
              })), tg(Aq, "handleBrushChange", (function(qq) {
                var Eq = qq.startIndex,
                  gq = qq.endIndex;
                if (Eq !== Aq.state.dataStartIndex || gq !== Aq.state.dataEndIndex) {
                  var Yq = Aq.state.updateId;
                  Aq.setState((function() {
                    return yg({
                      dataStartIndex: Eq,
                      dataEndIndex: gq
                    }, iq({
                      props: Aq.props,
                      dataStartIndex: Eq,
                      dataEndIndex: gq,
                      updateId: Yq
                    }, Aq.state))
                  })), Aq.triggerSyncEvent({
                    dataStartIndex: Eq,
                    dataEndIndex: gq
                  })
                }
              })), tg(Aq, "handleMouseEnter", (function(qq) {
                var Eq = Aq.getMouseInfo(qq);
                if (Eq) {
                  var gq = yg(yg({}, Eq), {}, {
                    isTooltipActive: !0
                  });
                  Aq.setState(gq), Aq.triggerSyncEvent(gq);
                  var Yq = Aq.props.onMouseEnter;
                  xq()(Yq) && Yq(gq, qq)
                }
              })), tg(Aq, "triggeredAfterMouseMove", (function(qq) {
                var Eq = Aq.getMouseInfo(qq),
                  gq = Eq ? yg(yg({}, Eq), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                Aq.setState(gq), Aq.triggerSyncEvent(gq);
                var Yq = Aq.props.onMouseMove;
                xq()(Yq) && Yq(gq, qq)
              })), tg(Aq, "handleItemMouseEnter", (function(qq) {
                Aq.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: qq,
                    activePayload: qq.tooltipPayload,
                    activeCoordinate: qq.tooltipPosition || {
                      x: qq.cx,
                      y: qq.cy
                    }
                  }
                }))
              })), tg(Aq, "handleItemMouseLeave", (function() {
                Aq.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), tg(Aq, "handleMouseMove", (function(qq) {
                qq.persist(), Aq.throttleTriggeredAfterMouseMove(qq)
              })), tg(Aq, "handleMouseLeave", (function(qq) {
                Aq.throttleTriggeredAfterMouseMove.cancel();
                var Eq = {
                  isTooltipActive: !1
                };
                Aq.setState(Eq), Aq.triggerSyncEvent(Eq);
                var gq = Aq.props.onMouseLeave;
                xq()(gq) && gq(Eq, qq)
              })), tg(Aq, "handleOuterEvent", (function(qq) {
                var Eq, gq = (0, rq.o)(qq),
                  Yq = Bq()(Aq.props, "".concat(gq));
                gq && xq()(Yq) && Yq(null !== (Eq = /.*touch.*/i.test(gq) ? Aq.getMouseInfo(qq.changedTouches[0]) : Aq.getMouseInfo(qq)) && void 0 !== Eq ? Eq : {}, qq)
              })), tg(Aq, "handleClick", (function(qq) {
                var Eq = Aq.getMouseInfo(qq);
                if (Eq) {
                  var gq = yg(yg({}, Eq), {}, {
                    isTooltipActive: !0
                  });
                  Aq.setState(gq), Aq.triggerSyncEvent(gq);
                  var Yq = Aq.props.onClick;
                  xq()(Yq) && Yq(gq, qq)
                }
              })), tg(Aq, "handleMouseDown", (function(qq) {
                var Eq = Aq.props.onMouseDown;
                xq()(Eq) && Eq(Aq.getMouseInfo(qq), qq)
              })), tg(Aq, "handleMouseUp", (function(qq) {
                var Eq = Aq.props.onMouseUp;
                xq()(Eq) && Eq(Aq.getMouseInfo(qq), qq)
              })), tg(Aq, "handleTouchMove", (function(qq) {
                null != qq.changedTouches && qq.changedTouches.length > 0 && Aq.throttleTriggeredAfterMouseMove(qq.changedTouches[0])
              })), tg(Aq, "handleTouchStart", (function(qq) {
                null != qq.changedTouches && qq.changedTouches.length > 0 && Aq.handleMouseDown(qq.changedTouches[0])
              })), tg(Aq, "handleTouchEnd", (function(qq) {
                null != qq.changedTouches && qq.changedTouches.length > 0 && Aq.handleMouseUp(qq.changedTouches[0])
              })), tg(Aq, "handleDoubleClick", (function(qq) {
                var Eq = Aq.props.onDoubleClick;
                xq()(Eq) && Eq(Aq.getMouseInfo(qq), qq)
              })), tg(Aq, "handleContextMenu", (function(qq) {
                var Eq = Aq.props.onContextMenu;
                xq()(Eq) && Eq(Aq.getMouseInfo(qq), qq)
              })), tg(Aq, "triggerSyncEvent", (function(qq) {
                void 0 !== Aq.props.syncId && ME.emit(TE, Aq.props.syncId, qq, Aq.eventEmitterSymbol)
              })), tg(Aq, "applySyncEvent", (function(qq) {
                var Eq = Aq.props,
                  gq = Eq.layout,
                  Yq = Eq.syncMethod,
                  lq = Aq.state.updateId,
                  Oq = qq.dataStartIndex,
                  mq = qq.dataEndIndex;
                if (void 0 !== qq.dataStartIndex || void 0 !== qq.dataEndIndex) Aq.setState(yg({
                  dataStartIndex: Oq,
                  dataEndIndex: mq
                }, iq({
                  props: Aq.props,
                  dataStartIndex: Oq,
                  dataEndIndex: mq,
                  updateId: lq
                }, Aq.state)));
                else if (void 0 !== qq.activeTooltipIndex) {
                  var xq = qq.chartX,
                    cq = qq.chartY,
                    uq = qq.activeTooltipIndex,
                    Bq = Aq.state,
                    Wq = Bq.offset,
                    Nq = Bq.tooltipTicks;
                  if (!Wq) return;
                  if ("function" === typeof Yq) uq = Yq(Nq, qq);
                  else if ("value" === Yq) {
                    uq = -1;
                    for (var aq = 0; aq < Nq.length; aq++)
                      if (Nq[aq].value === qq.activeLabel) {
                        uq = aq;
                        break
                      }
                  }
                  var Vq = yg(yg({}, Wq), {}, {
                      x: Wq.left,
                      y: Wq.top
                    }),
                    dq = Math.min(xq, Vq.x + Vq.width),
                    jq = Math.min(cq, Vq.y + Vq.height),
                    Hq = Nq[uq] && Nq[uq].value,
                    oq = fg(Aq.state, Aq.props.data, uq),
                    Pq = Nq[uq] ? {
                      x: "horizontal" === gq ? Nq[uq].coordinate : dq,
                      y: "horizontal" === gq ? jq : Nq[uq].coordinate
                    } : ng;
                  Aq.setState(yg(yg({}, qq), {}, {
                    activeLabel: Hq,
                    activeCoordinate: Pq,
                    activePayload: oq,
                    activeTooltipIndex: uq
                  }))
                } else Aq.setState(qq)
              })), tg(Aq, "renderCursor", (function(qq) {
                var gq, lq = Aq.state,
                  Oq = lq.isTooltipActive,
                  mq = lq.activeCoordinate,
                  xq = lq.activePayload,
                  cq = lq.offset,
                  uq = lq.activeTooltipIndex,
                  Bq = lq.tooltipAxisBandSize,
                  Wq = Aq.getTooltipEventType(),
                  Nq = null !== (gq = qq.props.active) && void 0 !== gq ? gq : Oq,
                  aq = Aq.props.layout,
                  Vq = qq.key || "_recharts-cursor";
                return Yq.createElement(Og, {
                  key: Vq,
                  activeCoordinate: mq,
                  activePayload: xq,
                  activeTooltipIndex: uq,
                  chartName: Eq,
                  element: qq,
                  isActive: Nq,
                  layout: aq,
                  offset: cq,
                  tooltipAxisBandSize: Bq,
                  tooltipEventType: Wq
                })
              })), tg(Aq, "renderPolarAxis", (function(qq, Eq, gq) {
                var lq = Bq()(qq, "type.axisType"),
                  Oq = Bq()(Aq.state, "".concat(lq, "Map")),
                  mq = qq.type.defaultProps,
                  xq = void 0 !== mq ? yg(yg({}, mq), qq.props) : qq.props,
                  cq = Oq && Oq[xq["".concat(lq, "Id")]];
                return (0, Yq.cloneElement)(qq, yg(yg({}, cq), {}, {
                  className: (0, dq.d)(lq, cq.className),
                  key: qq.key || "".concat(Eq, "-").concat(gq),
                  ticks: (0, nq.R)(cq, !0)
                }))
              })), tg(Aq, "renderPolarGrid", (function(qq) {
                var Eq = qq.props,
                  gq = Eq.radialLines,
                  lq = Eq.polarAngles,
                  Oq = Eq.polarRadius,
                  mq = Aq.state,
                  xq = mq.radiusAxisMap,
                  cq = mq.angleAxisMap,
                  uq = (0, bq.j)(xq),
                  Bq = (0, bq.j)(cq),
                  Wq = Bq.cx,
                  Nq = Bq.cy,
                  aq = Bq.innerRadius,
                  Vq = Bq.outerRadius;
                return (0, Yq.cloneElement)(qq, {
                  polarAngles: Array.isArray(lq) ? lq : (0, nq.R)(Bq, !0).map((function(qq) {
                    return qq.coordinate
                  })),
                  polarRadius: Array.isArray(Oq) ? Oq : (0, nq.R)(uq, !0).map((function(qq) {
                    return qq.coordinate
                  })),
                  cx: Wq,
                  cy: Nq,
                  innerRadius: aq,
                  outerRadius: Vq,
                  key: qq.key || "polar-grid",
                  radialLines: gq
                })
              })), tg(Aq, "renderLegend", (function() {
                var qq = Aq.state.formattedGraphicalItems,
                  Eq = Aq.props,
                  gq = Eq.children,
                  lq = Eq.width,
                  Oq = Eq.height,
                  mq = Aq.props.margin || {},
                  xq = lq - (mq.left || 0) - (mq.right || 0),
                  cq = (0, Cq.c)({
                    children: gq,
                    formattedGraphicalItems: qq,
                    legendWidth: xq,
                    legendContent: Wq
                  });
                if (!cq) return null;
                var uq = cq.item,
                  Bq = Wg(cq, xg);
                return (0, Yq.cloneElement)(uq, yg(yg({}, Bq), {}, {
                  chartWidth: lq,
                  chartHeight: Oq,
                  margin: mq,
                  onBBoxUpdate: Aq.handleLegendBBoxUpdate
                }))
              })), tg(Aq, "renderTooltip", (function() {
                var qq, Eq = Aq.props,
                  gq = Eq.children,
                  lq = Eq.accessibilityLayer,
                  Oq = (0, rq.j)(gq, Pq.e);
                if (!Oq) return null;
                var mq = Aq.state,
                  xq = mq.isTooltipActive,
                  cq = mq.activeCoordinate,
                  uq = mq.activePayload,
                  Bq = mq.activeLabel,
                  Wq = mq.offset,
                  Nq = null !== (qq = Oq.props.active) && void 0 !== qq ? qq : xq;
                return (0, Yq.cloneElement)(Oq, {
                  viewBox: yg(yg({}, Wq), {}, {
                    x: Wq.left,
                    y: Wq.top
                  }),
                  active: Nq,
                  label: Bq,
                  payload: Nq ? uq : [],
                  coordinate: cq,
                  accessibilityLayer: lq
                })
              })), tg(Aq, "renderBrush", (function(qq) {
                var Eq = Aq.props,
                  gq = Eq.margin,
                  lq = Eq.data,
                  Oq = Aq.state,
                  mq = Oq.offset,
                  xq = Oq.dataStartIndex,
                  cq = Oq.dataEndIndex,
                  uq = Oq.updateId;
                return (0, Yq.cloneElement)(qq, {
                  key: qq.key || "_recharts-brush",
                  onChange: (0, nq.i)(Aq.handleBrushChange, qq.props.onChange),
                  data: lq,
                  x: (0, bq.D)(qq.props.x) ? qq.props.x : mq.left,
                  y: (0, bq.D)(qq.props.y) ? qq.props.y : mq.top + mq.height + mq.brushBottom - (gq.bottom || 0),
                  width: (0, bq.D)(qq.props.width) ? qq.props.width : mq.width,
                  startIndex: xq,
                  endIndex: cq,
                  updateId: "brush-".concat(uq)
                })
              })), tg(Aq, "renderReferenceElement", (function(qq, Eq, gq) {
                if (!qq) return null;
                var lq = Aq.clipPathId,
                  Oq = Aq.state,
                  mq = Oq.xAxisMap,
                  xq = Oq.yAxisMap,
                  cq = Oq.offset,
                  uq = qq.type.defaultProps || {},
                  Bq = qq.props,
                  Wq = Bq.xAxisId,
                  Nq = void 0 === Wq ? uq.xAxisId : Wq,
                  aq = Bq.yAxisId,
                  Vq = void 0 === aq ? uq.yAxisId : aq;
                return (0, Yq.cloneElement)(qq, {
                  key: qq.key || "".concat(Eq, "-").concat(gq),
                  xAxis: mq[Nq],
                  yAxis: xq[Vq],
                  viewBox: {
                    x: cq.left,
                    y: cq.top,
                    width: cq.width,
                    height: cq.height
                  },
                  clipPathId: lq
                })
              })), tg(Aq, "renderActivePoints", (function(qq) {
                var Eq = qq.item,
                  Yq = qq.activePoint,
                  lq = qq.basePoint,
                  Oq = qq.childIndex,
                  mq = qq.isRange,
                  xq = [],
                  Aq = Eq.props.key,
                  cq = void 0 !== Eq.item.type.defaultProps ? yg(yg({}, Eq.item.type.defaultProps), Eq.item.props) : Eq.item.props,
                  uq = cq.activeDot,
                  Bq = yg(yg({
                    index: Oq,
                    dataKey: cq.dataKey,
                    cx: Yq.x,
                    cy: Yq.y,
                    r: 4,
                    fill: (0, nq.K)(Eq.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: Yq.payload,
                    value: Yq.value
                  }, (0, rq.e)(uq, !1)), (0, zE.m)(uq));
                return xq.push(gq.renderActiveDot(uq, Bq, "".concat(Aq, "-activePoint-").concat(Oq))), lq ? xq.push(gq.renderActiveDot(uq, yg(yg({}, Bq), {}, {
                  cx: lq.x,
                  cy: lq.y
                }), "".concat(Aq, "-basePoint-").concat(Oq))) : mq && xq.push(null), xq
              })), tg(Aq, "renderGraphicChild", (function(qq, Eq, gq) {
                var lq = Aq.filterFormatItem(qq, Eq, gq);
                if (!lq) return null;
                var mq = Aq.getTooltipEventType(),
                  xq = Aq.state,
                  cq = xq.isTooltipActive,
                  uq = xq.tooltipAxis,
                  Bq = xq.activeTooltipIndex,
                  Wq = xq.activeLabel,
                  Nq = Aq.props.children,
                  aq = (0, rq.j)(Nq, Pq.e),
                  Vq = lq.props,
                  dq = Vq.points,
                  jq = Vq.isRange,
                  Hq = Vq.baseLine,
                  oq = void 0 !== lq.item.type.defaultProps ? yg(yg({}, lq.item.type.defaultProps), lq.item.props) : lq.item.props,
                  Qq = oq.activeDot,
                  yq = oq.hide,
                  tq = oq.activeBar,
                  vq = oq.activeShape,
                  hq = Boolean(!yq && cq && aq && (Qq || tq || vq)),
                  iq = {};
                "axis" !== mq && aq && "click" === aq.props.trigger ? iq = {
                  onClick: (0, nq.i)(Aq.handleItemMouseEnter, qq.props.onClick)
                } : "axis" !== mq && (iq = {
                  onMouseLeave: (0, nq.i)(Aq.handleItemMouseLeave, qq.props.onMouseLeave),
                  onMouseEnter: (0, nq.i)(Aq.handleItemMouseEnter, qq.props.onMouseEnter)
                });
                var Zq = (0, Yq.cloneElement)(qq, yg(yg({}, lq.props), iq));
                if (hq) {
                  if (!(Bq >= 0)) {
                    var fq, Mq = (null !== (fq = Aq.getItemByXY(Aq.state.activeCoordinate)) && void 0 !== fq ? fq : {
                        graphicalItem: Zq
                      }).graphicalItem,
                      Tq = Mq.item,
                      zq = void 0 === Tq ? qq : Tq,
                      Sq = Mq.childIndex,
                      pq = yg(yg(yg({}, lq.props), iq), {}, {
                        activeIndex: Sq
                      });
                    return [(0, Yq.cloneElement)(zq, pq), null, null]
                  }
                  var Gq, Lq;
                  if (uq.dataKey && !uq.allowDuplicatedCategory) {
                    var Jq = "function" === typeof uq.dataKey ? function(qq) {
                      return "function" === typeof uq.dataKey ? uq.dataKey(qq.payload) : null
                    } : "payload.".concat(uq.dataKey.toString());
                    Gq = (0, bq.i)(dq, Jq, Wq), Lq = jq && Hq && (0, bq.i)(Hq, Jq, Wq)
                  } else Gq = null === dq || void 0 === dq ? void 0 : dq[Bq], Lq = jq && Hq && Hq[Bq];
                  if (vq || tq) {
                    var kq = void 0 !== qq.props.activeIndex ? qq.props.activeIndex : Bq;
                    return [(0, Yq.cloneElement)(qq, yg(yg(yg({}, lq.props), iq), {}, {
                      activeIndex: kq
                    })), null, null]
                  }
                  if (!Oq()(Gq)) return [Zq].concat(Hg(Aq.renderActivePoints({
                    item: lq,
                    activePoint: Gq,
                    basePoint: Lq,
                    childIndex: Bq,
                    isRange: jq
                  })))
                }
                return jq ? [Zq, null, null] : [Zq, null]
              })), tg(Aq, "renderCustomized", (function(qq, Eq, gq) {
                return (0, Yq.cloneElement)(qq, yg(yg({
                  key: "recharts-customized-".concat(gq)
                }, Aq.props), Aq.state))
              })), tg(Aq, "renderMap", {
                CartesianGrid: {
                  handler: bg,
                  once: !0
                },
                ReferenceArea: {
                  handler: Aq.renderReferenceElement
                },
                ReferenceLine: {
                  handler: bg
                },
                ReferenceDot: {
                  handler: Aq.renderReferenceElement
                },
                XAxis: {
                  handler: bg
                },
                YAxis: {
                  handler: bg
                },
                Brush: {
                  handler: Aq.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: Aq.renderGraphicChild
                },
                Line: {
                  handler: Aq.renderGraphicChild
                },
                Area: {
                  handler: Aq.renderGraphicChild
                },
                Radar: {
                  handler: Aq.renderGraphicChild
                },
                RadialBar: {
                  handler: Aq.renderGraphicChild
                },
                Scatter: {
                  handler: Aq.renderGraphicChild
                },
                Pie: {
                  handler: Aq.renderGraphicChild
                },
                Funnel: {
                  handler: Aq.renderGraphicChild
                },
                Tooltip: {
                  handler: Aq.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: Aq.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: Aq.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: Aq.renderPolarAxis
                },
                Customized: {
                  handler: Aq.renderCustomized
                }
              }), Aq.clipPathId = "".concat(null !== (lq = qq.id) && void 0 !== lq ? lq : (0, bq.N)("recharts"), "-clip"), Aq.throttleTriggeredAfterMouseMove = Vq()(Aq.triggeredAfterMouseMove, null !== (mq = qq.throttleDelay) && void 0 !== mq ? mq : 1e3 / 60), Aq.state = {}, Aq
            }
            return function(qq, Eq) {
              if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
              qq.prototype = Object.create(Eq && Eq.prototype, {
                constructor: {
                  value: qq,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(qq, "prototype", {
                writable: !1
              }), Eq && jg(qq, Eq)
            }(gq, qq), lq = gq, Aq = [{
              key: "componentDidMount",
              value: function() {
                var qq, Eq;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (qq = this.props.margin.left) && void 0 !== qq ? qq : 0,
                    top: null !== (Eq = this.props.margin.top) && void 0 !== Eq ? Eq : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var qq = this.props,
                  Eq = qq.children,
                  gq = qq.data,
                  Yq = qq.height,
                  lq = qq.layout,
                  Oq = (0, rq.j)(Eq, Pq.e);
                if (Oq) {
                  var mq = Oq.props.defaultIndex;
                  if (!("number" !== typeof mq || mq < 0 || mq > this.state.tooltipTicks.length - 1)) {
                    var xq = this.state.tooltipTicks[mq] && this.state.tooltipTicks[mq].value,
                      Aq = fg(this.state, gq, mq, xq),
                      cq = this.state.tooltipTicks[mq].coordinate,
                      uq = (this.state.offset.top + Yq) / 2,
                      Bq = "horizontal" === lq ? {
                        x: cq,
                        y: uq
                      } : {
                        y: cq,
                        x: uq
                      },
                      Wq = this.state.formattedGraphicalItems.find((function(qq) {
                        return "Scatter" === qq.item.type.name
                      }));
                    Wq && (Bq = yg(yg({}, Bq), Wq.props.points[mq].tooltipPosition), Aq = Wq.props.points[mq].tooltipPayload);
                    var Nq = {
                      activeTooltipIndex: mq,
                      isTooltipActive: !0,
                      activeLabel: xq,
                      activePayload: Aq,
                      activeCoordinate: Bq
                    };
                    this.setState(Nq), this.renderCursor(Oq), this.accessibilityManager.setIndex(mq)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(qq, Eq) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== Eq.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== qq.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== qq.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (gq = this.props.margin.left) && void 0 !== gq ? gq : 0,
                    top: null !== (Yq = this.props.margin.top) && void 0 !== Yq ? Yq : 0
                  }
                }), null) : null;
                var gq, Yq
              }
            }, {
              key: "componentDidUpdate",
              value: function(qq) {
                (0, rq.r)([(0, rq.j)(qq.children, Pq.e)], [(0, rq.j)(this.props.children, Pq.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var qq = (0, rq.j)(this.props.children, Pq.e);
                if (qq && "boolean" === typeof qq.props.shared) {
                  var Eq = qq.props.shared ? "axis" : "item";
                  return cq.indexOf(Eq) >= 0 ? Eq : mq
                }
                return mq
              }
            }, {
              key: "getMouseInfo",
              value: function(qq) {
                if (!this.container) return null;
                var Eq = this.container,
                  gq = Eq.getBoundingClientRect(),
                  Yq = (0, Kq.e)(gq),
                  lq = {
                    chartX: Math.round(qq.pageX - Yq.left),
                    chartY: Math.round(qq.pageY - Yq.top)
                  },
                  Oq = gq.width / Eq.offsetWidth || 1,
                  mq = this.inRange(lq.chartX, lq.chartY, Oq);
                if (!mq) return null;
                var xq = this.state,
                  Aq = xq.xAxisMap,
                  cq = xq.yAxisMap,
                  uq = this.getTooltipEventType(),
                  Bq = Mg(this.state, this.props.data, this.props.layout, mq);
                if ("axis" !== uq && Aq && cq) {
                  var Wq = (0, bq.j)(Aq).scale,
                    Nq = (0, bq.j)(cq).scale,
                    aq = Wq && Wq.invert ? Wq.invert(lq.chartX) : null,
                    Vq = Nq && Nq.invert ? Nq.invert(lq.chartY) : null;
                  return yg(yg({}, lq), {}, {
                    xValue: aq,
                    yValue: Vq
                  }, Bq)
                }
                return Bq ? yg(yg({}, lq), Bq) : null
              }
            }, {
              key: "inRange",
              value: function(qq, Eq) {
                var gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  Yq = this.props.layout,
                  lq = qq / gq,
                  Oq = Eq / gq;
                if ("horizontal" === Yq || "vertical" === Yq) {
                  var mq = this.state.offset;
                  return lq >= mq.left && lq <= mq.left + mq.width && Oq >= mq.top && Oq <= mq.top + mq.height ? {
                    x: lq,
                    y: Oq
                  } : null
                }
                var xq = this.state,
                  Aq = xq.angleAxisMap,
                  cq = xq.radiusAxisMap;
                if (Aq && cq) {
                  var uq = (0, bq.j)(Aq);
                  return (0, iE.h)({
                    x: lq,
                    y: Oq
                  }, uq)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var qq = this.props.children,
                  Eq = this.getTooltipEventType(),
                  gq = (0, rq.j)(qq, Pq.e),
                  Yq = {};
                return gq && "axis" === Eq && (Yq = "click" === gq.props.trigger ? {
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
                }), yg(yg({}, (0, zE.m)(this.props, this.handleOuterEvent)), Yq)
              }
            }, {
              key: "addListener",
              value: function() {
                ME.on(TE, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                ME.removeListener(TE, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(qq, Eq, gq) {
                for (var Yq = this.state.formattedGraphicalItems, lq = 0, Oq = Yq.length; lq < Oq; lq++) {
                  var mq = Yq[lq];
                  if (mq.item === qq || mq.props.key === qq.key || Eq === (0, rq.l)(mq.item.type) && gq === mq.childIndex) return mq
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var qq = this.clipPathId,
                  Eq = this.state.offset,
                  gq = Eq.left,
                  lq = Eq.top,
                  Oq = Eq.height,
                  mq = Eq.width;
                return Yq.createElement("defs", null, Yq.createElement("clipPath", {
                  id: qq
                }, Yq.createElement("rect", {
                  x: gq,
                  y: lq,
                  height: Oq,
                  width: mq
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var qq = this.state.xAxisMap;
                return qq ? Object.entries(qq).reduce((function(qq, Eq) {
                  var gq = Bg(Eq, 2),
                    Yq = gq[0],
                    lq = gq[1];
                  return yg(yg({}, qq), {}, tg({}, Yq, lq.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var qq = this.state.yAxisMap;
                return qq ? Object.entries(qq).reduce((function(qq, Eq) {
                  var gq = Bg(Eq, 2),
                    Yq = gq[0],
                    lq = gq[1];
                  return yg(yg({}, qq), {}, tg({}, Yq, lq.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(qq) {
                var Eq;
                return null === (Eq = this.state.xAxisMap) || void 0 === Eq || null === (Eq = Eq[qq]) || void 0 === Eq ? void 0 : Eq.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(qq) {
                var Eq;
                return null === (Eq = this.state.yAxisMap) || void 0 === Eq || null === (Eq = Eq[qq]) || void 0 === Eq ? void 0 : Eq.scale
              }
            }, {
              key: "getItemByXY",
              value: function(qq) {
                var Eq = this.state,
                  gq = Eq.formattedGraphicalItems,
                  Yq = Eq.activeItem;
                if (gq && gq.length)
                  for (var lq = 0, Oq = gq.length; lq < Oq; lq++) {
                    var mq = gq[lq],
                      xq = mq.props,
                      Aq = mq.item,
                      cq = void 0 !== Aq.type.defaultProps ? yg(yg({}, Aq.type.defaultProps), Aq.props) : Aq.props,
                      uq = (0, rq.l)(Aq.type);
                    if ("Bar" === uq) {
                      var Bq = (xq.data || []).find((function(Eq) {
                        return (0, tq.f)(qq, Eq)
                      }));
                      if (Bq) return {
                        graphicalItem: mq,
                        payload: Bq
                      }
                    } else if ("RadialBar" === uq) {
                      var Wq = (xq.data || []).find((function(Eq) {
                        return (0, iE.h)(qq, Eq)
                      }));
                      if (Wq) return {
                        graphicalItem: mq,
                        payload: Wq
                      }
                    } else if ((0, kE.j)(mq, Yq) || (0, kE.m)(mq, Yq) || (0, kE.q)(mq, Yq)) {
                      var Nq = (0, kE.f)({
                          graphicalItem: mq,
                          activeTooltipItem: Yq,
                          itemData: cq.data
                        }),
                        aq = void 0 === cq.activeIndex ? Nq : cq.activeIndex;
                      return {
                        graphicalItem: yg(yg({}, mq), {}, {
                          childIndex: aq
                        }),
                        payload: (0, kE.q)(mq, Yq) ? cq.data[Nq] : mq.props.data[Nq]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var qq = this;
                if (!(0, rq.y)(this)) return null;
                var Eq, gq, lq = this.props,
                  Oq = lq.children,
                  mq = lq.className,
                  xq = lq.width,
                  Aq = lq.height,
                  cq = lq.style,
                  uq = lq.compact,
                  Bq = lq.title,
                  Wq = lq.desc,
                  Nq = Wg(lq, Ag),
                  aq = (0, rq.e)(Nq, !1);
                if (uq) return Yq.createElement(mg.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Yq.createElement(Hq.c, ug({}, aq, {
                  width: xq,
                  height: Aq,
                  title: Bq,
                  desc: Wq
                }), this.renderClipPath(), (0, rq.w)(Oq, this.renderMap)));
                this.props.accessibilityLayer && (aq.tabIndex = null !== (Eq = this.props.tabIndex) && void 0 !== Eq ? Eq : 0, aq.role = null !== (gq = this.props.role) && void 0 !== gq ? gq : "application", aq.onKeyDown = function(Eq) {
                  qq.accessibilityManager.keyboardEvent(Eq)
                }, aq.onFocus = function() {
                  qq.accessibilityManager.focus()
                });
                var Vq = this.parseEventsOfWrapper();
                return Yq.createElement(mg.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Yq.createElement("div", ug({
                  className: (0, dq.d)("recharts-wrapper", mq),
                  style: yg({
                    position: "relative",
                    cursor: "default",
                    width: xq,
                    height: Aq
                  }, cq)
                }, Vq, {
                  ref: function(Eq) {
                    qq.container = Eq
                  }
                }), Yq.createElement(Hq.c, ug({}, aq, {
                  width: xq,
                  height: Aq,
                  title: Bq,
                  desc: Wq,
                  style: hg
                }), this.renderClipPath(), (0, rq.w)(Oq, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], Aq && Ng(lq.prototype, Aq), uq && Ng(lq, uq), Object.defineProperty(lq, "prototype", {
              writable: !1
            }), lq;
            var lq, Aq, uq
          }(Yq.Component);
        tg(Zq, "displayName", Eq), tg(Zq, "defaultProps", yg({
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
        }, vq)), tg(Zq, "getDerivedStateFromProps", (function(qq, Eq) {
          var gq = qq.dataKey,
            Yq = qq.data,
            lq = qq.children,
            mq = qq.width,
            xq = qq.height,
            Aq = qq.layout,
            cq = qq.stackOffset,
            uq = qq.margin,
            Bq = Eq.dataStartIndex,
            Wq = Eq.dataEndIndex;
          if (void 0 === Eq.updateId) {
            var Nq = Sg(qq);
            return yg(yg(yg({}, Nq), {}, {
              updateId: 0
            }, iq(yg(yg({
              props: qq
            }, Nq), {}, {
              updateId: 0
            }), Eq)), {}, {
              prevDataKey: gq,
              prevData: Yq,
              prevWidth: mq,
              prevHeight: xq,
              prevLayout: Aq,
              prevStackOffset: cq,
              prevMargin: uq,
              prevChildren: lq
            })
          }
          if (gq !== Eq.prevDataKey || Yq !== Eq.prevData || mq !== Eq.prevWidth || xq !== Eq.prevHeight || Aq !== Eq.prevLayout || cq !== Eq.prevStackOffset || !(0, ZE.b)(uq, Eq.prevMargin)) {
            var aq = Sg(qq),
              Vq = {
                chartX: Eq.chartX,
                chartY: Eq.chartY,
                isTooltipActive: Eq.isTooltipActive
              },
              dq = yg(yg({}, Mg(Eq, Yq, Aq)), {}, {
                updateId: Eq.updateId + 1
              }),
              jq = yg(yg(yg({}, aq), Vq), dq);
            return yg(yg(yg({}, jq), iq(yg({
              props: qq
            }, jq), Eq)), {}, {
              prevDataKey: gq,
              prevData: Yq,
              prevWidth: mq,
              prevHeight: xq,
              prevLayout: Aq,
              prevStackOffset: cq,
              prevMargin: uq,
              prevChildren: lq
            })
          }
          if (!(0, rq.r)(lq, Eq.prevChildren)) {
            var Hq, oq, Pq, Qq, yq = (0, rq.j)(lq, wq),
              tq = yq && null !== (Hq = null === (oq = yq.props) || void 0 === oq ? void 0 : oq.startIndex) && void 0 !== Hq ? Hq : Bq,
              vq = yq && null !== (Pq = null === (Qq = yq.props) || void 0 === Qq ? void 0 : Qq.endIndex) && void 0 !== Pq ? Pq : Wq,
              hq = tq !== Bq || vq !== Wq,
              nq = !Oq()(Yq) && !hq ? Eq.updateId : Eq.updateId + 1;
            return yg(yg({
              updateId: nq
            }, iq(yg(yg({
              props: qq
            }, Eq), {}, {
              updateId: nq,
              dataStartIndex: tq,
              dataEndIndex: vq
            }), Eq)), {}, {
              prevChildren: lq,
              dataStartIndex: tq,
              dataEndIndex: vq
            })
          }
          return null
        })), tg(Zq, "renderActiveDot", (function(qq, Eq, gq) {
          var lq;
          return lq = (0, Yq.isValidElement)(qq) ? (0, Yq.cloneElement)(qq, Eq) : xq()(qq) ? qq(Eq) : Yq.createElement(yq.d, Eq), Yq.createElement(oq.d, {
            className: "recharts-active-dot",
            key: gq
          }, lq)
        }));
        var fq = (0, Yq.forwardRef)((function(qq, Eq) {
          return Yq.createElement(Zq, ug({}, qq, {
            ref: Eq
          }))
        }));
        return fq.displayName = Zq.displayName, fq
      }
  },
  6170: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    var Yq = function(qq) {
      return null
    };
    Yq.displayName = "Cell"
  },
  6105: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => iq
    });
    var Yq = gq(57),
      lq = gq(5285),
      Oq = gq.n(lq),
      mq = gq(5105),
      xq = gq.n(mq),
      Aq = gq(4920),
      cq = gq.n(Aq),
      uq = gq(4907),
      Bq = gq(6001),
      Wq = gq(5297),
      Nq = gq(4990),
      aq = gq(6114);

    function Vq(qq) {
      return Vq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Vq(qq)
    }
    var dq = ["offset"];

    function jq(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return Hq(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return Hq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Hq(qq, Eq)
      }(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function oq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function Pq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Qq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Pq(Object(gq), !0).forEach((function(Eq) {
          yq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Pq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function yq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Vq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != Vq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Vq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function tq() {
      return tq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, tq.apply(this, arguments)
    }
    var rq = function(qq) {
        var Eq = qq.value,
          gq = qq.formatter,
          Yq = Oq()(qq.children) ? Eq : qq.children;
        return xq()(gq) ? gq(Yq) : Yq
      },
      vq = function(qq, Eq, gq) {
        var lq, mq, xq = qq.position,
          Aq = qq.viewBox,
          cq = qq.offset,
          Bq = qq.className,
          Wq = Aq,
          Vq = Wq.cx,
          dq = Wq.cy,
          jq = Wq.innerRadius,
          Hq = Wq.outerRadius,
          oq = Wq.startAngle,
          Pq = Wq.endAngle,
          Qq = Wq.clockWise,
          yq = (jq + Hq) / 2,
          rq = function(qq, Eq) {
            return (0, Nq.J)(Eq - qq) * Math.min(Math.abs(Eq - qq), 360)
          }(oq, Pq),
          vq = rq >= 0 ? 1 : -1;
        "insideStart" === xq ? (lq = oq + vq * cq, mq = Qq) : "insideEnd" === xq ? (lq = Pq - vq * cq, mq = !Qq) : "end" === xq && (lq = Pq + vq * cq, mq = Qq), mq = rq <= 0 ? mq : !mq;
        var hq = (0, aq.l)(Vq, dq, yq, lq),
          nq = (0, aq.l)(Vq, dq, yq, lq + 359 * (mq ? 1 : -1)),
          bq = "M".concat(hq.x, ",").concat(hq.y, "\n    A").concat(yq, ",").concat(yq, ",0,1,").concat(mq ? 0 : 1, ",\n    ").concat(nq.x, ",").concat(nq.y),
          iq = Oq()(qq.id) ? (0, Nq.N)("recharts-radial-line-") : qq.id;
        return Yq.createElement("text", tq({}, gq, {
          dominantBaseline: "central",
          className: (0, uq.d)("recharts-radial-bar-label", Bq)
        }), Yq.createElement("defs", null, Yq.createElement("path", {
          id: iq,
          d: bq
        })), Yq.createElement("textPath", {
          xlinkHref: "#".concat(iq)
        }, Eq))
      },
      hq = function(qq) {
        var Eq = qq.viewBox,
          gq = qq.offset,
          Yq = qq.position,
          lq = Eq,
          Oq = lq.cx,
          mq = lq.cy,
          xq = lq.innerRadius,
          Aq = lq.outerRadius,
          cq = (lq.startAngle + lq.endAngle) / 2;
        if ("outside" === Yq) {
          var uq = (0, aq.l)(Oq, mq, Aq + gq, cq),
            Bq = uq.x;
          return {
            x: Bq,
            y: uq.y,
            textAnchor: Bq >= Oq ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === Yq) return {
          x: Oq,
          y: mq,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === Yq) return {
          x: Oq,
          y: mq,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === Yq) return {
          x: Oq,
          y: mq,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var Wq = (xq + Aq) / 2,
          Nq = (0, aq.l)(Oq, mq, Wq, cq);
        return {
          x: Nq.x,
          y: Nq.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      nq = function(qq) {
        var Eq = qq.viewBox,
          gq = qq.parentViewBox,
          Yq = qq.offset,
          lq = qq.position,
          Oq = Eq,
          mq = Oq.x,
          xq = Oq.y,
          Aq = Oq.width,
          uq = Oq.height,
          Bq = uq >= 0 ? 1 : -1,
          Wq = Bq * Yq,
          aq = Bq > 0 ? "end" : "start",
          Vq = Bq > 0 ? "start" : "end",
          dq = Aq >= 0 ? 1 : -1,
          jq = dq * Yq,
          Hq = dq > 0 ? "end" : "start",
          oq = dq > 0 ? "start" : "end";
        if ("top" === lq) return Qq(Qq({}, {
          x: mq + Aq / 2,
          y: xq - Bq * Yq,
          textAnchor: "middle",
          verticalAnchor: aq
        }), gq ? {
          height: Math.max(xq - gq.y, 0),
          width: Aq
        } : {});
        if ("bottom" === lq) return Qq(Qq({}, {
          x: mq + Aq / 2,
          y: xq + uq + Wq,
          textAnchor: "middle",
          verticalAnchor: Vq
        }), gq ? {
          height: Math.max(gq.y + gq.height - (xq + uq), 0),
          width: Aq
        } : {});
        if ("left" === lq) {
          var Pq = {
            x: mq - jq,
            y: xq + uq / 2,
            textAnchor: Hq,
            verticalAnchor: "middle"
          };
          return Qq(Qq({}, Pq), gq ? {
            width: Math.max(Pq.x - gq.x, 0),
            height: uq
          } : {})
        }
        if ("right" === lq) {
          var yq = {
            x: mq + Aq + jq,
            y: xq + uq / 2,
            textAnchor: oq,
            verticalAnchor: "middle"
          };
          return Qq(Qq({}, yq), gq ? {
            width: Math.max(gq.x + gq.width - yq.x, 0),
            height: uq
          } : {})
        }
        var tq = gq ? {
          width: Aq,
          height: uq
        } : {};
        return "insideLeft" === lq ? Qq({
          x: mq + jq,
          y: xq + uq / 2,
          textAnchor: oq,
          verticalAnchor: "middle"
        }, tq) : "insideRight" === lq ? Qq({
          x: mq + Aq - jq,
          y: xq + uq / 2,
          textAnchor: Hq,
          verticalAnchor: "middle"
        }, tq) : "insideTop" === lq ? Qq({
          x: mq + Aq / 2,
          y: xq + Wq,
          textAnchor: "middle",
          verticalAnchor: Vq
        }, tq) : "insideBottom" === lq ? Qq({
          x: mq + Aq / 2,
          y: xq + uq - Wq,
          textAnchor: "middle",
          verticalAnchor: aq
        }, tq) : "insideTopLeft" === lq ? Qq({
          x: mq + jq,
          y: xq + Wq,
          textAnchor: oq,
          verticalAnchor: Vq
        }, tq) : "insideTopRight" === lq ? Qq({
          x: mq + Aq - jq,
          y: xq + Wq,
          textAnchor: Hq,
          verticalAnchor: Vq
        }, tq) : "insideBottomLeft" === lq ? Qq({
          x: mq + jq,
          y: xq + uq - Wq,
          textAnchor: oq,
          verticalAnchor: aq
        }, tq) : "insideBottomRight" === lq ? Qq({
          x: mq + Aq - jq,
          y: xq + uq - Wq,
          textAnchor: Hq,
          verticalAnchor: aq
        }, tq) : cq()(lq) && ((0, Nq.D)(lq.x) || (0, Nq.G)(lq.x)) && ((0, Nq.D)(lq.y) || (0, Nq.G)(lq.y)) ? Qq({
          x: mq + (0, Nq.p)(lq.x, Aq),
          y: xq + (0, Nq.p)(lq.y, uq),
          textAnchor: "end",
          verticalAnchor: "end"
        }, tq) : Qq({
          x: mq + Aq / 2,
          y: xq + uq / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, tq)
      },
      bq = function(qq) {
        return "cx" in qq && (0, Nq.D)(qq.cx)
      };

    function iq(qq) {
      var Eq, gq = qq.offset,
        lq = Qq({
          offset: void 0 === gq ? 5 : gq
        }, oq(qq, dq)),
        mq = lq.viewBox,
        Aq = lq.position,
        cq = lq.value,
        Nq = lq.children,
        aq = lq.content,
        Vq = lq.className,
        jq = void 0 === Vq ? "" : Vq,
        Hq = lq.textBreakAll;
      if (!mq || Oq()(cq) && Oq()(Nq) && !(0, Yq.isValidElement)(aq) && !xq()(aq)) return null;
      if ((0, Yq.isValidElement)(aq)) return (0, Yq.cloneElement)(aq, lq);
      if (xq()(aq)) {
        if (Eq = (0, Yq.createElement)(aq, lq), (0, Yq.isValidElement)(Eq)) return Eq
      } else Eq = rq(lq);
      var Pq = bq(mq),
        yq = (0, Wq.e)(lq, !0);
      if (Pq && ("insideStart" === Aq || "insideEnd" === Aq || "end" === Aq)) return vq(lq, Eq, yq);
      var iq = Pq ? hq(lq) : nq(lq);
      return Yq.createElement(Bq.d, tq({
        className: (0, uq.d)("recharts-label", jq)
      }, yq, iq, {
        breakAll: Hq
      }), Eq)
    }
    iq.displayName = "Label";
    var Zq = function(qq) {
      var Eq = qq.cx,
        gq = qq.cy,
        Yq = qq.angle,
        lq = qq.startAngle,
        Oq = qq.endAngle,
        mq = qq.r,
        xq = qq.radius,
        Aq = qq.innerRadius,
        cq = qq.outerRadius,
        uq = qq.x,
        Bq = qq.y,
        Wq = qq.top,
        aq = qq.left,
        Vq = qq.width,
        dq = qq.height,
        jq = qq.clockWise,
        Hq = qq.labelViewBox;
      if (Hq) return Hq;
      if ((0, Nq.D)(Vq) && (0, Nq.D)(dq)) {
        if ((0, Nq.D)(uq) && (0, Nq.D)(Bq)) return {
          x: uq,
          y: Bq,
          width: Vq,
          height: dq
        };
        if ((0, Nq.D)(Wq) && (0, Nq.D)(aq)) return {
          x: Wq,
          y: aq,
          width: Vq,
          height: dq
        }
      }
      return (0, Nq.D)(uq) && (0, Nq.D)(Bq) ? {
        x: uq,
        y: Bq,
        width: 0,
        height: 0
      } : (0, Nq.D)(Eq) && (0, Nq.D)(gq) ? {
        cx: Eq,
        cy: gq,
        startAngle: lq || Yq || 0,
        endAngle: Oq || Yq || 0,
        innerRadius: Aq || 0,
        outerRadius: cq || xq || mq || 0,
        clockWise: jq
      } : qq.viewBox ? qq.viewBox : {}
    };
    iq.parseViewBox = Zq, iq.renderCallByParent = function(qq, Eq) {
      var gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!qq || !qq.children && gq && !qq.label) return null;
      var lq = qq.children,
        Oq = Zq(qq),
        mq = (0, Wq.g)(lq, iq).map((function(qq, gq) {
          return (0, Yq.cloneElement)(qq, {
            viewBox: Eq || Oq,
            key: "label-".concat(gq)
          })
        }));
      if (!gq) return mq;
      var Aq = function(qq, Eq) {
        return qq ? !0 === qq ? Yq.createElement(iq, {
          key: "label-implicit",
          viewBox: Eq
        }) : (0, Nq.z)(qq) ? Yq.createElement(iq, {
          key: "label-implicit",
          viewBox: Eq,
          value: qq
        }) : (0, Yq.isValidElement)(qq) ? qq.type === iq ? (0, Yq.cloneElement)(qq, {
          key: "label-implicit",
          viewBox: Eq
        }) : Yq.createElement(iq, {
          key: "label-implicit",
          content: qq,
          viewBox: Eq
        }) : xq()(qq) ? Yq.createElement(iq, {
          key: "label-implicit",
          content: qq,
          viewBox: Eq
        }) : cq()(qq) ? Yq.createElement(iq, tq({
          viewBox: Eq
        }, qq, {
          key: "label-implicit"
        })) : null : null
      }(qq.label, Eq || Oq);
      return [Aq].concat(jq(mq))
    }
  },
  6177: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => nq
    });
    var Yq = gq(57),
      lq = gq(5285),
      Oq = gq.n(lq),
      mq = gq(4920),
      xq = gq.n(mq),
      Aq = gq(5105),
      cq = gq.n(Aq),
      uq = gq(6179),
      Bq = gq.n(uq),
      Wq = gq(6105),
      Nq = gq(5842),
      aq = gq(5297),
      Vq = gq(6014);

    function dq(qq) {
      return dq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, dq(qq)
    }
    var jq = ["valueAccessor"],
      Hq = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function oq(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return Pq(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return Pq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Pq(qq, Eq)
      }(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function Qq() {
      return Qq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Qq.apply(this, arguments)
    }

    function yq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function tq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? yq(Object(gq), !0).forEach((function(Eq) {
          rq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : yq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function rq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != dq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != dq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == dq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function vq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }
    var hq = function(qq) {
      return Array.isArray(qq.value) ? Bq()(qq.value) : qq.value
    };

    function nq(qq) {
      var Eq = qq.valueAccessor,
        gq = void 0 === Eq ? hq : Eq,
        lq = vq(qq, jq),
        mq = lq.data,
        xq = lq.dataKey,
        Aq = lq.clockWise,
        cq = lq.id,
        uq = lq.textBreakAll,
        Bq = vq(lq, Hq);
      return mq && mq.length ? Yq.createElement(Nq.d, {
        className: "recharts-label-list"
      }, mq.map((function(qq, Eq) {
        var lq = Oq()(xq) ? gq(qq, Eq) : (0, Vq.$)(qq && qq.payload, xq),
          mq = Oq()(cq) ? {} : {
            id: "".concat(cq, "-").concat(Eq)
          };
        return Yq.createElement(Wq.e, Qq({}, (0, aq.e)(qq, !0), Bq, mq, {
          parentViewBox: qq.parentViewBox,
          value: lq,
          textBreakAll: uq,
          viewBox: Wq.e.parseViewBox(Oq()(Aq) ? qq : tq(tq({}, qq), {}, {
            clockWise: Aq
          })),
          key: "label-".concat(Eq),
          index: Eq
        }))
      }))) : null
    }
    nq.displayName = "LabelList", nq.renderCallByParent = function(qq, Eq) {
      var gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!qq || !qq.children && gq && !qq.label) return null;
      var lq = qq.children,
        Oq = (0, aq.g)(lq, nq).map((function(qq, gq) {
          return (0, Yq.cloneElement)(qq, {
            data: Eq,
            key: "labelList-".concat(gq)
          })
        }));
      return gq ? [function(qq, Eq) {
        return qq ? !0 === qq ? Yq.createElement(nq, {
          key: "labelList-implicit",
          data: Eq
        }) : Yq.isValidElement(qq) || cq()(qq) ? Yq.createElement(nq, {
          key: "labelList-implicit",
          data: Eq,
          content: qq
        }) : xq()(qq) ? Yq.createElement(nq, Qq({
          data: Eq
        }, qq, {
          key: "labelList-implicit"
        })) : null : null
      }(qq.label, Eq)].concat(oq(Oq)) : Oq
    }
  },
  5931: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Lq
    });
    var Yq = gq(57),
      lq = gq(5105),
      Oq = gq.n(lq),
      mq = gq(4907),
      xq = gq(5290),
      Aq = gq(5833),
      cq = gq(5935),
      uq = gq(5324);

    function Bq(qq) {
      return Bq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Bq(qq)
    }

    function Wq() {
      return Wq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Wq.apply(this, arguments)
    }

    function Nq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function aq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Pq(Yq.key), Yq)
      }
    }

    function Vq(qq, Eq, gq) {
      return Eq = jq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Bq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, dq() ? Reflect.construct(Eq, gq || [], jq(qq).constructor) : Eq.apply(qq, gq))
    }

    function dq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (dq = function() {
        return !!qq
      })()
    }

    function jq(qq) {
      return jq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, jq(qq)
    }

    function Hq(qq, Eq) {
      return Hq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Hq(qq, Eq)
    }

    function oq(qq, Eq, gq) {
      return (Eq = Pq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Pq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Bq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Bq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Bq(Eq) ? Eq : Eq + ""
    }
    var Qq = 32,
      yq = function(qq) {
        function Eq() {
          return function(qq, Eq) {
            if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
          }(this, Eq), Vq(this, Eq, arguments)
        }
        return function(qq, Eq) {
          if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
          qq.prototype = Object.create(Eq && Eq.prototype, {
            constructor: {
              value: qq,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(qq, "prototype", {
            writable: !1
          }), Eq && Hq(qq, Eq)
        }(Eq, qq), gq = Eq, lq = [{
          key: "renderIcon",
          value: function(qq) {
            var Eq = this.props.inactiveColor,
              gq = 16,
              lq = Qq / 6,
              Oq = Qq / 3,
              mq = qq.inactive ? Eq : qq.color;
            if ("plainline" === qq.type) return Yq.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: mq,
              strokeDasharray: qq.payload.strokeDasharray,
              x1: 0,
              y1: gq,
              x2: Qq,
              y2: gq,
              className: "recharts-legend-icon"
            });
            if ("line" === qq.type) return Yq.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: mq,
              d: "M0,".concat(gq, "h").concat(Oq, "\n            A").concat(lq, ",").concat(lq, ",0,1,1,").concat(2 * Oq, ",").concat(gq, "\n            H").concat(Qq, "M").concat(2 * Oq, ",").concat(gq, "\n            A").concat(lq, ",").concat(lq, ",0,1,1,").concat(Oq, ",").concat(gq),
              className: "recharts-legend-icon"
            });
            if ("rect" === qq.type) return Yq.createElement("path", {
              stroke: "none",
              fill: mq,
              d: "M0,".concat(4, "h").concat(Qq, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (Yq.isValidElement(qq.legendIcon)) {
              var xq = function(qq) {
                for (var Eq = 1; Eq < arguments.length; Eq++) {
                  var gq = null != arguments[Eq] ? arguments[Eq] : {};
                  Eq % 2 ? Nq(Object(gq), !0).forEach((function(Eq) {
                    oq(qq, Eq, gq[Eq])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Nq(Object(gq)).forEach((function(Eq) {
                    Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
                  }))
                }
                return qq
              }({}, qq);
              return delete xq.legendIcon, Yq.cloneElement(qq.legendIcon, xq)
            }
            return Yq.createElement(cq.b, {
              fill: mq,
              cx: gq,
              cy: gq,
              size: Qq,
              sizeType: "diameter",
              type: qq.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var qq = this,
              Eq = this.props,
              gq = Eq.payload,
              lq = Eq.iconSize,
              cq = Eq.layout,
              Bq = Eq.formatter,
              Nq = Eq.inactiveColor,
              aq = {
                x: 0,
                y: 0,
                width: Qq,
                height: Qq
              },
              Vq = {
                display: "horizontal" === cq ? "inline-block" : "block",
                marginRight: 10
              },
              dq = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return gq.map((function(Eq, gq) {
              var cq = Eq.formatter || Bq,
                jq = (0, mq.d)(oq(oq({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(gq), !0), "inactive", Eq.inactive));
              if ("none" === Eq.type) return null;
              var Hq = Oq()(Eq.value) ? null : Eq.value;
              (0, xq.e)(!Oq()(Eq.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var Pq = Eq.inactive ? Nq : Eq.color;
              return Yq.createElement("li", Wq({
                className: jq,
                style: Vq,
                key: "legend-item-".concat(gq)
              }, (0, uq.n)(qq.props, Eq, gq)), Yq.createElement(Aq.c, {
                width: lq,
                height: lq,
                viewBox: aq,
                style: dq
              }, qq.renderIcon(Eq)), Yq.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: Pq
                }
              }, cq ? cq(Hq, Eq, gq) : Hq))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var qq = this.props,
              Eq = qq.payload,
              gq = qq.layout,
              lq = qq.align;
            if (!Eq || !Eq.length) return null;
            var Oq = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === gq ? lq : "left"
            };
            return Yq.createElement("ul", {
              className: "recharts-default-legend",
              style: Oq
            }, this.renderItems())
          }
        }], lq && aq(gq.prototype, lq), Bq && aq(gq, Bq), Object.defineProperty(gq, "prototype", {
          writable: !1
        }), gq;
        var gq, lq, Bq
      }(Yq.PureComponent);
    oq(yq, "displayName", "Legend"), oq(yq, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var tq = gq(4990),
      rq = gq(5860);

    function vq(qq) {
      return vq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, vq(qq)
    }
    var hq = ["ref"];

    function nq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function bq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? nq(Object(gq), !0).forEach((function(Eq) {
          zq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : nq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function iq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Sq(Yq.key), Yq)
      }
    }

    function Zq(qq, Eq, gq) {
      return Eq = Mq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === vq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, fq() ? Reflect.construct(Eq, gq || [], Mq(qq).constructor) : Eq.apply(qq, gq))
    }

    function fq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (fq = function() {
        return !!qq
      })()
    }

    function Mq(qq) {
      return Mq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, Mq(qq)
    }

    function Tq(qq, Eq) {
      return Tq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Tq(qq, Eq)
    }

    function zq(qq, Eq, gq) {
      return (Eq = Sq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Sq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != vq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != vq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == vq(Eq) ? Eq : Eq + ""
    }

    function pq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function Gq(qq) {
      return qq.value
    }
    var Lq = function(qq) {
      function Eq() {
        var qq;
        ! function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq);
        for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        return zq(qq = Zq(this, Eq, [].concat(Yq)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), qq
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && Tq(qq, Eq)
      }(Eq, qq), gq = Eq, Oq = [{
        key: "getWithHeight",
        value: function(qq, Eq) {
          var gq = bq(bq({}, this.defaultProps), qq.props).layout;
          return "vertical" === gq && (0, tq.D)(qq.props.height) ? {
            height: qq.props.height
          } : "horizontal" === gq ? {
            width: qq.props.width || Eq
          } : null
        }
      }], (lq = [{
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
            var qq = this.wrapperNode.getBoundingClientRect();
            return qq.height = this.wrapperNode.offsetHeight, qq.width = this.wrapperNode.offsetWidth, qq
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var qq = this.props.onBBoxUpdate,
            Eq = this.getBBox();
          Eq ? (Math.abs(Eq.width - this.lastBoundingBox.width) > 1 || Math.abs(Eq.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = Eq.width, this.lastBoundingBox.height = Eq.height, qq && qq(Eq)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, qq && qq(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? bq({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(qq) {
          var Eq, gq, Yq = this.props,
            lq = Yq.layout,
            Oq = Yq.align,
            mq = Yq.verticalAlign,
            xq = Yq.margin,
            Aq = Yq.chartWidth,
            cq = Yq.chartHeight;
          return qq && (void 0 !== qq.left && null !== qq.left || void 0 !== qq.right && null !== qq.right) || (Eq = "center" === Oq && "vertical" === lq ? {
            left: ((Aq || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === Oq ? {
            right: xq && xq.right || 0
          } : {
            left: xq && xq.left || 0
          }), qq && (void 0 !== qq.top && null !== qq.top || void 0 !== qq.bottom && null !== qq.bottom) || (gq = "middle" === mq ? {
            top: ((cq || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === mq ? {
            bottom: xq && xq.bottom || 0
          } : {
            top: xq && xq.top || 0
          }), bq(bq({}, Eq), gq)
        }
      }, {
        key: "render",
        value: function() {
          var qq = this,
            Eq = this.props,
            gq = Eq.content,
            lq = Eq.width,
            Oq = Eq.height,
            mq = Eq.wrapperStyle,
            xq = Eq.payloadUniqBy,
            Aq = Eq.payload,
            cq = bq(bq({
              position: "absolute",
              width: lq || "auto",
              height: Oq || "auto"
            }, this.getDefaultPosition(mq)), mq);
          return Yq.createElement("div", {
            className: "recharts-legend-wrapper",
            style: cq,
            ref: function(Eq) {
              qq.wrapperNode = Eq
            }
          }, function(qq, Eq) {
            if (Yq.isValidElement(qq)) return Yq.cloneElement(qq, Eq);
            if ("function" === typeof qq) return Yq.createElement(qq, Eq);
            Eq.ref;
            var gq = pq(Eq, hq);
            return Yq.createElement(yq, gq)
          }(gq, bq(bq({}, this.props), {}, {
            payload: (0, rq.d)(Aq, xq, Gq)
          })))
        }
      }]) && iq(gq.prototype, lq), Oq && iq(gq, Oq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, lq, Oq
    }(Yq.PureComponent);
    zq(Lq, "displayName", "Legend"), zq(Lq, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4902: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => dq
    });
    var Yq = gq(4907),
      lq = gq(57),
      Oq = gq(4912),
      mq = gq.n(Oq),
      xq = gq(4990),
      Aq = gq(5290),
      cq = gq(5297);

    function uq(qq) {
      return uq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, uq(qq)
    }

    function Bq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Wq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Bq(Object(gq), !0).forEach((function(Eq) {
          Nq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Bq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Nq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != uq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != uq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == uq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function aq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return Vq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Vq(qq, Eq)
      }(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }
    var dq = (0, lq.forwardRef)((function(qq, Eq) {
      var gq = qq.aspect,
        Oq = qq.initialDimension,
        uq = void 0 === Oq ? {
          width: -1,
          height: -1
        } : Oq,
        Bq = qq.width,
        Nq = void 0 === Bq ? "100%" : Bq,
        Vq = qq.height,
        dq = void 0 === Vq ? "100%" : Vq,
        jq = qq.minWidth,
        Hq = void 0 === jq ? 0 : jq,
        oq = qq.minHeight,
        Pq = qq.maxHeight,
        Qq = qq.children,
        yq = qq.debounce,
        tq = void 0 === yq ? 0 : yq,
        rq = qq.id,
        vq = qq.className,
        hq = qq.EQ,
        nq = qq.style,
        bq = void 0 === nq ? {} : nq,
        iq = (0, lq.useRef)(null),
        Zq = (0, lq.useRef)();
      Zq.current = hq, (0, lq.useImperativeHandle)(Eq, (function() {
        return Object.defineProperty(iq.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), iq.current
          },
          configurable: !0
        })
      }));
      var fq = aq((0, lq.useState)({
          containerWidth: uq.width,
          containerHeight: uq.height
        }), 2),
        Mq = fq[0],
        Tq = fq[1],
        zq = (0, lq.useCallback)((function(qq, Eq) {
          Tq((function(gq) {
            var Yq = Math.round(qq),
              lq = Math.round(Eq);
            return gq.containerWidth === Yq && gq.containerHeight === lq ? gq : {
              containerWidth: Yq,
              containerHeight: lq
            }
          }))
        }), []);
      (0, lq.useEffect)((function() {
        var qq = function(qq) {
          var Eq, gq = qq[0].contentRect,
            Yq = gq.width,
            lq = gq.height;
          zq(Yq, lq), null === (Eq = Zq.current) || void 0 === Eq || Eq.call(Zq, Yq, lq)
        };
        tq > 0 && (qq = mq()(qq, tq, {
          trailing: !0,
          leading: !1
        }));
        var Eq = new ResizeObserver(qq),
          gq = iq.current.getBoundingClientRect(),
          Yq = gq.width,
          lq = gq.height;
        return zq(Yq, lq), Eq.observe(iq.current),
          function() {
            Eq.disconnect()
          }
      }), [zq, tq]);
      var Sq = (0, lq.useMemo)((function() {
        var qq = Mq.containerWidth,
          Eq = Mq.containerHeight;
        if (qq < 0 || Eq < 0) return null;
        (0, Aq.e)((0, xq.G)(Nq) || (0, xq.G)(dq), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", Nq, dq), (0, Aq.e)(!gq || gq > 0, "The aspect(%s) must be greater than zero.", gq);
        var Yq = (0, xq.G)(Nq) ? qq : Nq,
          Oq = (0, xq.G)(dq) ? Eq : dq;
        gq && gq > 0 && (Yq ? Oq = Yq / gq : Oq && (Yq = Oq * gq), Pq && Oq > Pq && (Oq = Pq)), (0, Aq.e)(Yq > 0 || Oq > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", Yq, Oq, Nq, dq, Hq, oq, gq);
        var mq = !Array.isArray(Qq) && (0, cq.l)(Qq.type).endsWith("Chart");
        return lq.Children.map(Qq, (function(qq) {
          return lq.isValidElement(qq) ? (0, lq.cloneElement)(qq, Wq({
            width: Yq,
            height: Oq
          }, mq ? {
            style: Wq({
              height: "100%",
              width: "100%",
              maxHeight: Oq,
              maxWidth: Yq
            }, qq.props.style)
          } : {})) : qq
        }))
      }), [gq, Qq, dq, Pq, oq, Hq, Mq, Nq]);
      return lq.createElement("div", {
        id: rq ? "".concat(rq) : void 0,
        className: (0, Yq.d)("recharts-responsive-container", vq),
        style: Wq(Wq({}, bq), {}, {
          width: Nq,
          height: dq,
          minWidth: Hq,
          minHeight: oq,
          maxHeight: Pq
        }),
        ref: iq
      }, Sq)
    }))
  },
  6001: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Jq
    });
    var Yq = gq(57),
      lq = gq(5285),
      Oq = gq.n(lq),
      mq = gq(4907),
      xq = gq(4990),
      Aq = gq(5856),
      cq = gq(5297),
      uq = gq(6007);

    function Bq(qq) {
      return Bq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Bq(qq)
    }

    function Wq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return Nq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Nq(qq, Eq)
      }(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function aq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Vq(Yq.key), Yq)
      }
    }

    function Vq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Bq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Bq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Bq(Eq) ? Eq : Eq + ""
    }
    var dq = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      jq = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      Hq = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      oq = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      Pq = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      Qq = Object.keys(Pq),
      yq = "NaN";
    var tq = function() {
      function qq(Eq, gq) {
        ! function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, qq), this.num = Eq, this.unit = gq, this.num = Eq, this.unit = gq, Number.isNaN(Eq) && (this.unit = ""), "" === gq || Hq.test(gq) || (this.num = NaN, this.unit = ""), Qq.includes(gq) && (this.num = function(qq, Eq) {
          return qq * Pq[Eq]
        }(Eq, gq), this.unit = "px")
      }
      return Eq = qq, Yq = [{
        key: "parse",
        value: function(Eq) {
          var gq, Yq = Wq(null !== (gq = oq.exec(Eq)) && void 0 !== gq ? gq : [], 3),
            lq = Yq[1],
            Oq = Yq[2];
          return new qq(parseFloat(lq), null !== Oq && void 0 !== Oq ? Oq : "")
        }
      }], (gq = [{
        key: "add",
        value: function(Eq) {
          return this.unit !== Eq.unit ? new qq(NaN, "") : new qq(this.num + Eq.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(Eq) {
          return this.unit !== Eq.unit ? new qq(NaN, "") : new qq(this.num - Eq.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(Eq) {
          return "" !== this.unit && "" !== Eq.unit && this.unit !== Eq.unit ? new qq(NaN, "") : new qq(this.num * Eq.num, this.unit || Eq.unit)
        }
      }, {
        key: "divide",
        value: function(Eq) {
          return "" !== this.unit && "" !== Eq.unit && this.unit !== Eq.unit ? new qq(NaN, "") : new qq(this.num / Eq.num, this.unit || Eq.unit)
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
      }]) && aq(Eq.prototype, gq), Yq && aq(Eq, Yq), Object.defineProperty(Eq, "prototype", {
        writable: !1
      }), Eq;
      var Eq, gq, Yq
    }();

    function rq(qq) {
      if (qq.includes(yq)) return yq;
      for (var Eq = qq; Eq.includes("*") || Eq.includes("/");) {
        var gq, Yq = Wq(null !== (gq = dq.exec(Eq)) && void 0 !== gq ? gq : [], 4),
          lq = Yq[1],
          Oq = Yq[2],
          mq = Yq[3],
          xq = tq.parse(null !== lq && void 0 !== lq ? lq : ""),
          Aq = tq.parse(null !== mq && void 0 !== mq ? mq : ""),
          cq = "*" === Oq ? xq.multiply(Aq) : xq.divide(Aq);
        if (cq.isNaN()) return yq;
        Eq = Eq.replace(dq, cq.toString())
      }
      for (; Eq.includes("+") || /.-\d+(?:\.\d+)?/.test(Eq);) {
        var uq, Bq = Wq(null !== (uq = jq.exec(Eq)) && void 0 !== uq ? uq : [], 4),
          Nq = Bq[1],
          aq = Bq[2],
          Vq = Bq[3],
          Hq = tq.parse(null !== Nq && void 0 !== Nq ? Nq : ""),
          oq = tq.parse(null !== Vq && void 0 !== Vq ? Vq : ""),
          Pq = "+" === aq ? Hq.add(oq) : Hq.subtract(oq);
        if (Pq.isNaN()) return yq;
        Eq = Eq.replace(jq, Pq.toString())
      }
      return Eq
    }
    var vq = /\(([^()]*)\)/;

    function hq(qq) {
      var Eq = qq.replace(/\s+/g, "");
      return Eq = function(qq) {
        for (var Eq = qq; Eq.includes("(");) {
          var gq = Wq(vq.exec(Eq), 2)[1];
          Eq = Eq.replace(vq, rq(gq))
        }
        return Eq
      }(Eq), Eq = rq(Eq)
    }

    function nq(qq) {
      var Eq = function(qq) {
        try {
          return hq(qq)
        } catch (Eq) {
          return yq
        }
      }(qq.slice(5, -1));
      return Eq === yq ? "" : Eq
    }
    var bq = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      iq = ["dx", "dy", "angle", "className", "breakAll"];

    function Zq() {
      return Zq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Zq.apply(this, arguments)
    }

    function fq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function Mq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return Tq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Tq(qq, Eq)
      }(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Tq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }
    var zq = /[ \f\n\r\t\v\u2028\u2029]+/,
      Sq = function(qq) {
        var Eq = qq.children,
          gq = qq.breakAll,
          Yq = qq.style;
        try {
          var lq = [];
          return Oq()(Eq) || (lq = gq ? Eq.toString().split("") : Eq.toString().split(zq)), {
            wordsWithComputedWidth: lq.map((function(qq) {
              return {
                word: qq,
                width: (0, uq.h)(qq, Yq).width
              }
            })),
            spaceWidth: gq ? 0 : (0, uq.h)("\xa0", Yq).width
          }
        } catch (mq) {
          return null
        }
      },
      pq = function(qq) {
        return [{
          words: Oq()(qq) ? [] : qq.toString().split(zq)
        }]
      },
      Gq = function(qq) {
        var Eq = qq.width,
          gq = qq.scaleToFit,
          Yq = qq.children,
          lq = qq.style,
          Oq = qq.breakAll,
          mq = qq.maxLines;
        if ((Eq || gq) && !Aq.d.isSsr) {
          var cq = Sq({
            breakAll: Oq,
            children: Yq,
            style: lq
          });
          return cq ? function(qq, Eq, gq, Yq, lq) {
            var Oq = qq.maxLines,
              mq = qq.children,
              Aq = qq.style,
              cq = qq.breakAll,
              uq = (0, xq.D)(Oq),
              Bq = mq,
              Wq = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(qq, Eq) {
                  var Oq = Eq.word,
                    mq = Eq.width,
                    xq = qq[qq.length - 1];
                  if (xq && (null == Yq || lq || xq.width + mq + gq < Number(Yq))) xq.words.push(Oq), xq.width += mq + gq;
                  else {
                    var Aq = {
                      words: [Oq],
                      width: mq
                    };
                    qq.push(Aq)
                  }
                  return qq
                }), [])
              },
              Nq = Wq(Eq);
            if (!uq) return Nq;
            for (var aq, Vq = function(qq) {
                var Eq = Bq.slice(0, qq),
                  gq = Sq({
                    breakAll: cq,
                    style: Aq,
                    children: Eq + "\u2026"
                  }).wordsWithComputedWidth,
                  lq = Wq(gq),
                  mq = lq.length > Oq || function(qq) {
                    return qq.reduce((function(qq, Eq) {
                      return qq.width > Eq.width ? qq : Eq
                    }))
                  }(lq).width > Number(Yq);
                return [mq, lq]
              }, dq = 0, jq = Bq.length - 1, Hq = 0; dq <= jq && Hq <= Bq.length - 1;) {
              var oq = Math.floor((dq + jq) / 2),
                Pq = Mq(Vq(oq - 1), 2),
                Qq = Pq[0],
                yq = Pq[1],
                tq = Mq(Vq(oq), 1)[0];
              if (Qq || tq || (dq = oq + 1), Qq && tq && (jq = oq - 1), !Qq && tq) {
                aq = yq;
                break
              }
              Hq++
            }
            return aq || Nq
          }({
            breakAll: Oq,
            children: Yq,
            maxLines: mq,
            style: lq
          }, cq.wordsWithComputedWidth, cq.spaceWidth, Eq, gq) : pq(Yq)
        }
        return pq(Yq)
      },
      Lq = "#808080",
      Jq = function(qq) {
        var Eq = qq.x,
          gq = void 0 === Eq ? 0 : Eq,
          lq = qq.y,
          Oq = void 0 === lq ? 0 : lq,
          Aq = qq.lineHeight,
          uq = void 0 === Aq ? "1em" : Aq,
          Bq = qq.capHeight,
          Wq = void 0 === Bq ? "0.71em" : Bq,
          Nq = qq.scaleToFit,
          aq = void 0 !== Nq && Nq,
          Vq = qq.textAnchor,
          dq = void 0 === Vq ? "start" : Vq,
          jq = qq.verticalAnchor,
          Hq = void 0 === jq ? "end" : jq,
          oq = qq.fill,
          Pq = void 0 === oq ? Lq : oq,
          Qq = fq(qq, bq),
          yq = (0, Yq.useMemo)((function() {
            return Gq({
              breakAll: Qq.breakAll,
              children: Qq.children,
              maxLines: Qq.maxLines,
              scaleToFit: aq,
              style: Qq.style,
              width: Qq.width
            })
          }), [Qq.breakAll, Qq.children, Qq.maxLines, aq, Qq.style, Qq.width]),
          tq = Qq.dx,
          rq = Qq.dy,
          vq = Qq.angle,
          hq = Qq.className,
          Mq = Qq.breakAll,
          Tq = fq(Qq, iq);
        if (!(0, xq.z)(gq) || !(0, xq.z)(Oq)) return null;
        var zq, Sq = gq + ((0, xq.D)(tq) ? tq : 0),
          pq = Oq + ((0, xq.D)(rq) ? rq : 0);
        switch (Hq) {
          case "start":
            zq = nq("calc(".concat(Wq, ")"));
            break;
          case "middle":
            zq = nq("calc(".concat((yq.length - 1) / 2, " * -").concat(uq, " + (").concat(Wq, " / 2))"));
            break;
          default:
            zq = nq("calc(".concat(yq.length - 1, " * -").concat(uq, ")"))
        }
        var Jq = [];
        if (aq) {
          var kq = yq[0].width,
            Rq = Qq.width;
          Jq.push("scale(".concat(((0, xq.D)(Rq) ? Rq / kq : 1) / kq, ")"))
        }
        return vq && Jq.push("rotate(".concat(vq, ", ").concat(Sq, ", ").concat(pq, ")")), Jq.length && (Tq.transform = Jq.join(" ")), Yq.createElement("text", Zq({}, (0, cq.e)(Tq, !0), {
          x: Sq,
          y: pq,
          className: (0, mq.d)("recharts-text", hq),
          textAnchor: dq,
          fill: Pq.includes("url") ? Lq : Pq
        }), yq.map((function(qq, Eq) {
          var gq = qq.words.join(Mq ? "" : " ");
          return Yq.createElement("tspan", {
            x: Sq,
            dy: 0 === Eq ? zq : uq,
            key: "".concat(gq, "-").concat(Eq)
          }, gq)
        })))
      }
  },
  5847: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Iq
    });
    var Yq = gq(57),
      lq = gq(5377),
      Oq = gq.n(lq),
      mq = gq(5285),
      xq = gq.n(mq),
      Aq = gq(4907),
      cq = gq(4990);

    function uq(qq) {
      return uq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, uq(qq)
    }

    function Bq() {
      return Bq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Bq.apply(this, arguments)
    }

    function Wq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return Nq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Nq(qq, Eq)
      }(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function aq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Vq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? aq(Object(gq), !0).forEach((function(Eq) {
          dq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : aq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function dq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != uq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != uq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == uq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function jq(qq) {
      return Array.isArray(qq) && (0, cq.z)(qq[0]) && (0, cq.z)(qq[1]) ? qq.join(" ~ ") : qq
    }
    var Hq = function(qq) {
      var Eq = qq.separator,
        gq = void 0 === Eq ? " : " : Eq,
        lq = qq.contentStyle,
        mq = void 0 === lq ? {} : lq,
        uq = qq.itemStyle,
        Nq = void 0 === uq ? {} : uq,
        aq = qq.labelStyle,
        dq = void 0 === aq ? {} : aq,
        Hq = qq.payload,
        oq = qq.formatter,
        Pq = qq.itemSorter,
        Qq = qq.wrapperClassName,
        yq = qq.labelClassName,
        tq = qq.label,
        rq = qq.labelFormatter,
        vq = qq.accessibilityLayer,
        hq = void 0 !== vq && vq,
        nq = Vq({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, mq),
        bq = Vq({
          margin: 0
        }, dq),
        iq = !xq()(tq),
        Zq = iq ? tq : "",
        fq = (0, Aq.d)("recharts-default-tooltip", Qq),
        Mq = (0, Aq.d)("recharts-tooltip-label", yq);
      iq && rq && void 0 !== Hq && null !== Hq && (Zq = rq(tq, Hq));
      var Tq = hq ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return Yq.createElement("div", Bq({
        className: fq,
        style: nq
      }, Tq), Yq.createElement("p", {
        className: Mq,
        style: bq
      }, Yq.isValidElement(Zq) ? Zq : "".concat(Zq)), function() {
        if (Hq && Hq.length) {
          var qq = (Pq ? Oq()(Hq, Pq) : Hq).map((function(qq, Eq) {
            if ("none" === qq.type) return null;
            var lq = Vq({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: qq.color || "#000"
              }, Nq),
              Oq = qq.formatter || oq || jq,
              mq = qq.value,
              xq = qq.name,
              Aq = mq,
              uq = xq;
            if (Oq && null != Aq && null != uq) {
              var Bq = Oq(mq, xq, qq, Eq, Hq);
              if (Array.isArray(Bq)) {
                var aq = Wq(Bq, 2);
                Aq = aq[0], uq = aq[1]
              } else Aq = Bq
            }
            return Yq.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(Eq),
              style: lq
            }, (0, cq.z)(uq) ? Yq.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, uq) : null, (0, cq.z)(uq) ? Yq.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, gq) : null, Yq.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, Aq), Yq.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, qq.unit || ""))
          }));
          return Yq.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, qq)
        }
        return null
      }())
    };

    function oq(qq) {
      return oq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, oq(qq)
    }

    function Pq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != oq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != oq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == oq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var Qq = "recharts-tooltip-wrapper",
      yq = {
        visibility: "hidden"
      };

    function tq(qq) {
      var Eq = qq.coordinate,
        gq = qq.translateX,
        Yq = qq.translateY;
      return (0, Aq.d)(Qq, Pq(Pq(Pq(Pq({}, "".concat(Qq, "-right"), (0, cq.D)(gq) && Eq && (0, cq.D)(Eq.x) && gq >= Eq.x), "".concat(Qq, "-left"), (0, cq.D)(gq) && Eq && (0, cq.D)(Eq.x) && gq < Eq.x), "".concat(Qq, "-bottom"), (0, cq.D)(Yq) && Eq && (0, cq.D)(Eq.y) && Yq >= Eq.y), "".concat(Qq, "-top"), (0, cq.D)(Yq) && Eq && (0, cq.D)(Eq.y) && Yq < Eq.y))
    }

    function rq(qq) {
      var Eq = qq.allowEscapeViewBox,
        gq = qq.coordinate,
        Yq = qq.key,
        lq = qq.offsetTopLeft,
        Oq = qq.position,
        mq = qq.reverseDirection,
        xq = qq.tooltipDimension,
        Aq = qq.viewBox,
        uq = qq.viewBoxDimension;
      if (Oq && (0, cq.D)(Oq[Yq])) return Oq[Yq];
      var Bq = gq[Yq] - xq - lq,
        Wq = gq[Yq] + lq;
      return Eq[Yq] ? mq[Yq] ? Bq : Wq : mq[Yq] ? Bq < Aq[Yq] ? Math.max(Wq, Aq[Yq]) : Math.max(Bq, Aq[Yq]) : Wq + xq > Aq[Yq] + uq ? Math.max(Bq, Aq[Yq]) : Math.max(Wq, Aq[Yq])
    }

    function vq(qq) {
      return vq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, vq(qq)
    }

    function hq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function nq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? hq(Object(gq), !0).forEach((function(Eq) {
          Tq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : hq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function bq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, zq(Yq.key), Yq)
      }
    }

    function iq(qq, Eq, gq) {
      return Eq = fq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === vq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Zq() ? Reflect.construct(Eq, gq || [], fq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Zq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Zq = function() {
        return !!qq
      })()
    }

    function fq(qq) {
      return fq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, fq(qq)
    }

    function Mq(qq, Eq) {
      return Mq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Mq(qq, Eq)
    }

    function Tq(qq, Eq, gq) {
      return (Eq = zq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function zq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != vq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != vq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == vq(Eq) ? Eq : Eq + ""
    }
    var Sq = function(qq) {
        function Eq() {
          var qq;
          ! function(qq, Eq) {
            if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
          }(this, Eq);
          for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
          return Tq(qq = iq(this, Eq, [].concat(Yq)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), Tq(qq, "handleKeyDown", (function(Eq) {
            var gq, Yq, lq, Oq;
            "Escape" === Eq.key && qq.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (gq = null === (Yq = qq.props.coordinate) || void 0 === Yq ? void 0 : Yq.x) && void 0 !== gq ? gq : 0,
                y: null !== (lq = null === (Oq = qq.props.coordinate) || void 0 === Oq ? void 0 : Oq.y) && void 0 !== lq ? lq : 0
              }
            })
          })), qq
        }
        return function(qq, Eq) {
          if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
          qq.prototype = Object.create(Eq && Eq.prototype, {
            constructor: {
              value: qq,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(qq, "prototype", {
            writable: !1
          }), Eq && Mq(qq, Eq)
        }(Eq, qq), gq = Eq, (lq = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var qq = this.wrapperNode.getBoundingClientRect();
              (Math.abs(qq.width - this.state.lastBoundingBox.width) > 1 || Math.abs(qq.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: qq.width,
                  height: qq.height
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
            var qq, Eq;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (qq = this.props.coordinate) || void 0 === qq ? void 0 : qq.x) === this.state.dismissedAtCoordinate.x && (null === (Eq = this.props.coordinate) || void 0 === Eq ? void 0 : Eq.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var qq = this,
              Eq = this.props,
              gq = Eq.active,
              lq = Eq.allowEscapeViewBox,
              Oq = Eq.animationDuration,
              mq = Eq.animationEasing,
              xq = Eq.children,
              Aq = Eq.coordinate,
              cq = Eq.hasPayload,
              uq = Eq.isAnimationActive,
              Bq = Eq.offset,
              Wq = Eq.position,
              Nq = Eq.reverseDirection,
              aq = Eq.useTranslate3d,
              Vq = Eq.viewBox,
              dq = Eq.wrapperStyle,
              jq = function(qq) {
                var Eq, gq, Yq = qq.allowEscapeViewBox,
                  lq = qq.coordinate,
                  Oq = qq.offsetTopLeft,
                  mq = qq.position,
                  xq = qq.reverseDirection,
                  Aq = qq.tooltipBox,
                  cq = qq.useTranslate3d,
                  uq = qq.viewBox;
                return {
                  cssProperties: Aq.height > 0 && Aq.width > 0 && lq ? function(qq) {
                    var Eq = qq.translateX,
                      gq = qq.translateY;
                    return {
                      transform: qq.useTranslate3d ? "translate3d(".concat(Eq, "px, ").concat(gq, "px, 0)") : "translate(".concat(Eq, "px, ").concat(gq, "px)")
                    }
                  }({
                    translateX: Eq = rq({
                      allowEscapeViewBox: Yq,
                      coordinate: lq,
                      key: "x",
                      offsetTopLeft: Oq,
                      position: mq,
                      reverseDirection: xq,
                      tooltipDimension: Aq.width,
                      viewBox: uq,
                      viewBoxDimension: uq.width
                    }),
                    translateY: gq = rq({
                      allowEscapeViewBox: Yq,
                      coordinate: lq,
                      key: "y",
                      offsetTopLeft: Oq,
                      position: mq,
                      reverseDirection: xq,
                      tooltipDimension: Aq.height,
                      viewBox: uq,
                      viewBoxDimension: uq.height
                    }),
                    useTranslate3d: cq
                  }) : yq,
                  cssClasses: tq({
                    translateX: Eq,
                    translateY: gq,
                    coordinate: lq
                  })
                }
              }({
                allowEscapeViewBox: lq,
                coordinate: Aq,
                offsetTopLeft: Bq,
                position: Wq,
                reverseDirection: Nq,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: aq,
                viewBox: Vq
              }),
              Hq = jq.cssClasses,
              oq = jq.cssProperties,
              Pq = nq(nq({
                transition: uq && gq ? "transform ".concat(Oq, "ms ").concat(mq) : void 0
              }, oq), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && gq && cq ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, dq);
            return Yq.createElement("div", {
              tabIndex: -1,
              className: Hq,
              style: Pq,
              ref: function(Eq) {
                qq.wrapperNode = Eq
              }
            }, xq)
          }
        }]) && bq(gq.prototype, lq), Oq && bq(gq, Oq), Object.defineProperty(gq, "prototype", {
          writable: !1
        }), gq;
        var gq, lq, Oq
      }(Yq.PureComponent),
      pq = gq(5856),
      Gq = gq(5860);

    function Lq(qq) {
      return Lq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Lq(qq)
    }

    function Jq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function kq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Jq(Object(gq), !0).forEach((function(Eq) {
          wq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Jq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Rq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Kq(Yq.key), Yq)
      }
    }

    function Uq(qq, Eq, gq) {
      return Eq = sq(Eq),
        function(qq, Eq) {
          if (Eq && ("object" === Lq(Eq) || "function" === typeof Eq)) return Eq;
          if (void 0 !== Eq) throw new TypeError("Derived constructors may only return object or undefined");
          return function(qq) {
            if (void 0 === qq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return qq
          }(qq)
        }(qq, Fq() ? Reflect.construct(Eq, gq || [], sq(qq).constructor) : Eq.apply(qq, gq))
    }

    function Fq() {
      try {
        var qq = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (qq) {}
      return (Fq = function() {
        return !!qq
      })()
    }

    function sq(qq) {
      return sq = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(qq) {
        return qq.__proto__ || Object.getPrototypeOf(qq)
      }, sq(qq)
    }

    function Xq(qq, Eq) {
      return Xq = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(qq, Eq) {
        return qq.__proto__ = Eq, qq
      }, Xq(qq, Eq)
    }

    function wq(qq, Eq, gq) {
      return (Eq = Kq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Kq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Lq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Lq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Lq(Eq) ? Eq : Eq + ""
    }

    function Cq(qq) {
      return qq.dataKey
    }
    var Iq = function(qq) {
      function Eq() {
        return function(qq, Eq) {
          if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
        }(this, Eq), Uq(this, Eq, arguments)
      }
      return function(qq, Eq) {
        if ("function" !== typeof Eq && null !== Eq) throw new TypeError("Super expression must either be null or a function");
        qq.prototype = Object.create(Eq && Eq.prototype, {
          constructor: {
            value: qq,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(qq, "prototype", {
          writable: !1
        }), Eq && Xq(qq, Eq)
      }(Eq, qq), gq = Eq, (lq = [{
        key: "render",
        value: function() {
          var qq = this,
            Eq = this.props,
            gq = Eq.active,
            lq = Eq.allowEscapeViewBox,
            Oq = Eq.animationDuration,
            mq = Eq.animationEasing,
            xq = Eq.content,
            Aq = Eq.coordinate,
            cq = Eq.filterNull,
            uq = Eq.isAnimationActive,
            Bq = Eq.offset,
            Wq = Eq.payload,
            Nq = Eq.payloadUniqBy,
            aq = Eq.position,
            Vq = Eq.reverseDirection,
            dq = Eq.useTranslate3d,
            jq = Eq.viewBox,
            oq = Eq.wrapperStyle,
            Pq = null !== Wq && void 0 !== Wq ? Wq : [];
          cq && Pq.length && (Pq = (0, Gq.d)(Wq.filter((function(Eq) {
            return null != Eq.value && (!0 !== Eq.hide || qq.props.includeHidden)
          })), Nq, Cq));
          var Qq = Pq.length > 0;
          return Yq.createElement(Sq, {
            allowEscapeViewBox: lq,
            animationDuration: Oq,
            animationEasing: mq,
            isAnimationActive: uq,
            active: gq,
            coordinate: Aq,
            hasPayload: Qq,
            offset: Bq,
            position: aq,
            reverseDirection: Vq,
            useTranslate3d: dq,
            viewBox: jq,
            wrapperStyle: oq
          }, function(qq, Eq) {
            return Yq.isValidElement(qq) ? Yq.cloneElement(qq, Eq) : "function" === typeof qq ? Yq.createElement(qq, Eq) : Yq.createElement(Hq, Eq)
          }(xq, kq(kq({}, this.props), {}, {
            payload: Pq
          })))
        }
      }]) && Rq(gq.prototype, lq), Oq && Rq(gq, Oq), Object.defineProperty(gq, "prototype", {
        writable: !1
      }), gq;
      var gq, lq, Oq
    }(Yq.PureComponent);
    wq(Iq, "displayName", "Tooltip"), wq(Iq, "defaultProps", {
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
      isAnimationActive: !pq.d.isSsr,
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
  5842: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq
    });
    var Yq = gq(57),
      lq = gq(4907),
      Oq = gq(5297),
      mq = ["children", "className"];

    function xq() {
      return xq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, xq.apply(this, arguments)
    }

    function Aq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }
    var cq = Yq.forwardRef((function(qq, Eq) {
      var gq = qq.children,
        cq = qq.className,
        uq = Aq(qq, mq),
        Bq = (0, lq.d)("recharts-layer", cq);
      return Yq.createElement("g", xq({
        className: Bq
      }, (0, Oq.e)(uq, !0), {
        ref: Eq
      }), gq)
    }))
  },
  5833: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq
    });
    var Yq = gq(57),
      lq = gq(4907),
      Oq = gq(5297),
      mq = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function xq() {
      return xq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, xq.apply(this, arguments)
    }

    function Aq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function cq(qq) {
      var Eq = qq.children,
        gq = qq.width,
        cq = qq.height,
        uq = qq.viewBox,
        Bq = qq.className,
        Wq = qq.style,
        Nq = qq.title,
        aq = qq.desc,
        Vq = Aq(qq, mq),
        dq = uq || {
          width: gq,
          height: cq,
          x: 0,
          y: 0
        },
        jq = (0, lq.d)("recharts-surface", Bq);
      return Yq.createElement("svg", xq({}, (0, Oq.e)(Vq, !0, "svg"), {
        className: jq,
        width: gq,
        height: cq,
        style: Wq,
        viewBox: "".concat(dq.x, " ").concat(dq.y, " ").concat(dq.width, " ").concat(dq.height)
      }), Yq.createElement("title", null, Nq), Yq.createElement("desc", null, aq), Eq)
    }
  },
  6230: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => oq,
      g: () => yq,
      i: () => bq,
      l: () => nq,
      p: () => Pq,
      t: () => hq,
      u: () => vq,
      v: () => Qq,
      y: () => rq,
      z: () => tq
    });
    var Yq = gq(57),
      lq = gq(5831),
      Oq = gq(6235),
      mq = gq.n(Oq),
      xq = gq(6140),
      Aq = gq.n(xq),
      cq = gq(5053),
      uq = gq.n(cq)()((function(qq) {
        return {
          x: qq.left,
          y: qq.top,
          width: qq.width,
          height: qq.height
        }
      }), (function(qq) {
        return ["l", qq.left, "t", qq.top, "w", qq.width, "h", qq.height].join("")
      })),
      Bq = gq(4990);
    var Wq = (0, Yq.createContext)(void 0),
      Nq = (0, Yq.createContext)(void 0),
      aq = (0, Yq.createContext)(void 0),
      Vq = (0, Yq.createContext)({}),
      dq = (0, Yq.createContext)(void 0),
      jq = (0, Yq.createContext)(0),
      Hq = (0, Yq.createContext)(0),
      oq = function(qq) {
        var Eq = qq.state,
          gq = Eq.xAxisMap,
          lq = Eq.yAxisMap,
          Oq = Eq.offset,
          mq = qq.clipPathId,
          xq = qq.children,
          Aq = qq.width,
          cq = qq.height,
          Bq = uq(Oq);
        return Yq.createElement(Wq.Provider, {
          value: gq
        }, Yq.createElement(Nq.Provider, {
          value: lq
        }, Yq.createElement(Vq.Provider, {
          value: Oq
        }, Yq.createElement(aq.Provider, {
          value: Bq
        }, Yq.createElement(dq.Provider, {
          value: mq
        }, Yq.createElement(jq.Provider, {
          value: cq
        }, Yq.createElement(Hq.Provider, {
          value: Aq
        }, xq)))))))
      },
      Pq = function() {
        return (0, Yq.useContext)(dq)
      };
    var Qq = function(qq) {
        var Eq = (0, Yq.useContext)(Wq);
        null == Eq && (0, lq.d)(!1);
        var gq = Eq[qq];
        return null == gq && (0, lq.d)(!1), gq
      },
      yq = function() {
        var qq = (0, Yq.useContext)(Wq);
        return (0, Bq.j)(qq)
      },
      tq = function() {
        var qq = (0, Yq.useContext)(Nq);
        return mq()(qq, (function(qq) {
          return Aq()(qq.domain, Number.isFinite)
        })) || (0, Bq.j)(qq)
      },
      rq = function(qq) {
        var Eq = (0, Yq.useContext)(Nq);
        null == Eq && (0, lq.d)(!1);
        var gq = Eq[qq];
        return null == gq && (0, lq.d)(!1), gq
      },
      vq = function() {
        return (0, Yq.useContext)(aq)
      },
      hq = function() {
        return (0, Yq.useContext)(Vq)
      },
      nq = function() {
        return (0, Yq.useContext)(Hq)
      },
      bq = function() {
        return (0, Yq.useContext)(jq)
      }
  },
  6255: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Cq
    });
    var Yq = gq(57);

    function lq() {}

    function Oq(qq, Eq, gq) {
      qq._context.bezierCurveTo((2 * qq._x0 + qq._x1) / 3, (2 * qq._y0 + qq._y1) / 3, (qq._x0 + 2 * qq._x1) / 3, (qq._y0 + 2 * qq._y1) / 3, (qq._x0 + 4 * qq._x1 + Eq) / 6, (qq._y0 + 4 * qq._y1 + gq) / 6)
    }

    function mq(qq) {
      this._context = qq
    }

    function xq(qq) {
      this._context = qq
    }

    function Aq(qq) {
      this._context = qq
    }
    mq.prototype = {
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
            Oq(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(qq, Eq) {
        switch (qq = +qq, Eq = +Eq, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(qq, Eq) : this._context.moveTo(qq, Eq);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            Oq(this, qq, Eq)
        }
        this._x0 = this._x1, this._x1 = qq, this._y0 = this._y1, this._y1 = Eq
      }
    }, xq.prototype = {
      areaStart: lq,
      areaEnd: lq,
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
      point: function(qq, Eq) {
        switch (qq = +qq, Eq = +Eq, this._point) {
          case 0:
            this._point = 1, this._x2 = qq, this._y2 = Eq;
            break;
          case 1:
            this._point = 2, this._x3 = qq, this._y3 = Eq;
            break;
          case 2:
            this._point = 3, this._x4 = qq, this._y4 = Eq, this._context.moveTo((this._x0 + 4 * this._x1 + qq) / 6, (this._y0 + 4 * this._y1 + Eq) / 6);
            break;
          default:
            Oq(this, qq, Eq)
        }
        this._x0 = this._x1, this._x1 = qq, this._y0 = this._y1, this._y1 = Eq
      }
    }, Aq.prototype = {
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
      point: function(qq, Eq) {
        switch (qq = +qq, Eq = +Eq, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var gq = (this._x0 + 4 * this._x1 + qq) / 6,
              Yq = (this._y0 + 4 * this._y1 + Eq) / 6;
            this._line ? this._context.lineTo(gq, Yq) : this._context.moveTo(gq, Yq);
            break;
          case 3:
            this._point = 4;
          default:
            Oq(this, qq, Eq)
        }
        this._x0 = this._x1, this._x1 = qq, this._y0 = this._y1, this._y1 = Eq
      }
    };
    class cq {
      constructor(qq, Eq) {
        this._context = qq, this._x = Eq
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
      point(qq, Eq) {
        switch (qq = +qq, Eq = +Eq, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(qq, Eq) : this._context.moveTo(qq, Eq);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + qq) / 2, this._y0, this._x0, Eq, qq, Eq) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + Eq) / 2, qq, this._y0, qq, Eq)
        }
        this._x0 = qq, this._y0 = Eq
      }
    }

    function uq(qq) {
      this._context = qq
    }

    function Bq(qq) {
      this._context = qq
    }

    function Wq(qq) {
      return new Bq(qq)
    }

    function Nq(qq) {
      return qq < 0 ? -1 : 1
    }

    function aq(qq, Eq, gq) {
      var Yq = qq._x1 - qq._x0,
        lq = Eq - qq._x1,
        Oq = (qq._y1 - qq._y0) / (Yq || lq < 0 && -0),
        mq = (gq - qq._y1) / (lq || Yq < 0 && -0),
        xq = (Oq * lq + mq * Yq) / (Yq + lq);
      return (Nq(Oq) + Nq(mq)) * Math.min(Math.abs(Oq), Math.abs(mq), .5 * Math.abs(xq)) || 0
    }

    function Vq(qq, Eq) {
      var gq = qq._x1 - qq._x0;
      return gq ? (3 * (qq._y1 - qq._y0) / gq - Eq) / 2 : Eq
    }

    function dq(qq, Eq, gq) {
      var Yq = qq._x0,
        lq = qq._y0,
        Oq = qq._x1,
        mq = qq._y1,
        xq = (Oq - Yq) / 3;
      qq._context.bezierCurveTo(Yq + xq, lq + xq * Eq, Oq - xq, mq - xq * gq, Oq, mq)
    }

    function jq(qq) {
      this._context = qq
    }

    function Hq(qq) {
      this._context = new oq(qq)
    }

    function oq(qq) {
      this._context = qq
    }

    function Pq(qq) {
      this._context = qq
    }

    function Qq(qq) {
      var Eq, gq, Yq = qq.length - 1,
        lq = new Array(Yq),
        Oq = new Array(Yq),
        mq = new Array(Yq);
      for (lq[0] = 0, Oq[0] = 2, mq[0] = qq[0] + 2 * qq[1], Eq = 1; Eq < Yq - 1; ++Eq) lq[Eq] = 1, Oq[Eq] = 4, mq[Eq] = 4 * qq[Eq] + 2 * qq[Eq + 1];
      for (lq[Yq - 1] = 2, Oq[Yq - 1] = 7, mq[Yq - 1] = 8 * qq[Yq - 1] + qq[Yq], Eq = 1; Eq < Yq; ++Eq) gq = lq[Eq] / Oq[Eq - 1], Oq[Eq] -= gq, mq[Eq] -= gq * mq[Eq - 1];
      for (lq[Yq - 1] = mq[Yq - 1] / Oq[Yq - 1], Eq = Yq - 2; Eq >= 0; --Eq) lq[Eq] = (mq[Eq] - lq[Eq + 1]) / Oq[Eq];
      for (Oq[Yq - 1] = (qq[Yq] + lq[Yq - 1]) / 2, Eq = 0; Eq < Yq - 1; ++Eq) Oq[Eq] = 2 * qq[Eq + 1] - lq[Eq + 1];
      return [lq, Oq]
    }

    function yq(qq, Eq) {
      this._context = qq, this._t = Eq
    }
    uq.prototype = {
      areaStart: lq,
      areaEnd: lq,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(qq, Eq) {
        qq = +qq, Eq = +Eq, this._point ? this._context.lineTo(qq, Eq) : (this._point = 1, this._context.moveTo(qq, Eq))
      }
    }, Bq.prototype = {
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
      point: function(qq, Eq) {
        switch (qq = +qq, Eq = +Eq, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(qq, Eq) : this._context.moveTo(qq, Eq);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(qq, Eq)
        }
      }
    }, jq.prototype = {
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
            dq(this, this._t0, Vq(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(qq, Eq) {
        var gq = NaN;
        if (Eq = +Eq, (qq = +qq) !== this._x1 || Eq !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(qq, Eq) : this._context.moveTo(qq, Eq);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, dq(this, Vq(this, gq = aq(this, qq, Eq)), gq);
              break;
            default:
              dq(this, this._t0, gq = aq(this, qq, Eq))
          }
          this._x0 = this._x1, this._x1 = qq, this._y0 = this._y1, this._y1 = Eq, this._t0 = gq
        }
      }
    }, (Hq.prototype = Object.create(jq.prototype)).point = function(qq, Eq) {
      jq.prototype.point.call(this, Eq, qq)
    }, oq.prototype = {
      moveTo: function(qq, Eq) {
        this._context.moveTo(Eq, qq)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(qq, Eq) {
        this._context.lineTo(Eq, qq)
      },
      bezierCurveTo: function(qq, Eq, gq, Yq, lq, Oq) {
        this._context.bezierCurveTo(Eq, qq, Yq, gq, Oq, lq)
      }
    }, Pq.prototype = {
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
        var qq = this._x,
          Eq = this._y,
          gq = qq.length;
        if (gq)
          if (this._line ? this._context.lineTo(qq[0], Eq[0]) : this._context.moveTo(qq[0], Eq[0]), 2 === gq) this._context.lineTo(qq[1], Eq[1]);
          else
            for (var Yq = Qq(qq), lq = Qq(Eq), Oq = 0, mq = 1; mq < gq; ++Oq, ++mq) this._context.bezierCurveTo(Yq[0][Oq], lq[0][Oq], Yq[1][Oq], lq[1][Oq], qq[mq], Eq[mq]);
        (this._line || 0 !== this._line && 1 === gq) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(qq, Eq) {
        this._x.push(+qq), this._y.push(+Eq)
      }
    }, yq.prototype = {
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
      point: function(qq, Eq) {
        switch (qq = +qq, Eq = +Eq, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(qq, Eq) : this._context.moveTo(qq, Eq);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, Eq), this._context.lineTo(qq, Eq);
            else {
              var gq = this._x * (1 - this._t) + qq * this._t;
              this._context.lineTo(gq, this._y), this._context.lineTo(gq, Eq)
            }
        }
        this._x = qq, this._y = Eq
      }
    };
    var tq = gq(6098),
      rq = gq(5979),
      vq = gq(5982);

    function hq(qq) {
      return qq[0]
    }

    function nq(qq) {
      return qq[1]
    }

    function bq(qq, Eq) {
      var gq = (0, rq.c)(!0),
        Yq = null,
        lq = Wq,
        Oq = null,
        mq = (0, vq.c)(xq);

      function xq(xq) {
        var Aq, cq, uq, Bq = (xq = (0, tq.e)(xq)).length,
          Wq = !1;
        for (null == Yq && (Oq = lq(uq = mq())), Aq = 0; Aq <= Bq; ++Aq) !(Aq < Bq && gq(cq = xq[Aq], Aq, xq)) === Wq && ((Wq = !Wq) ? Oq.lineStart() : Oq.lineEnd()), Wq && Oq.point(+qq(cq, Aq, xq), +Eq(cq, Aq, xq));
        if (uq) return Oq = null, uq + "" || null
      }
      return qq = "function" === typeof qq ? qq : void 0 === qq ? hq : (0, rq.c)(qq), Eq = "function" === typeof Eq ? Eq : void 0 === Eq ? nq : (0, rq.c)(Eq), xq.x = function(Eq) {
        return arguments.length ? (qq = "function" === typeof Eq ? Eq : (0, rq.c)(+Eq), xq) : qq
      }, xq.y = function(qq) {
        return arguments.length ? (Eq = "function" === typeof qq ? qq : (0, rq.c)(+qq), xq) : Eq
      }, xq.defined = function(qq) {
        return arguments.length ? (gq = "function" === typeof qq ? qq : (0, rq.c)(!!qq), xq) : gq
      }, xq.curve = function(qq) {
        return arguments.length ? (lq = qq, null != Yq && (Oq = lq(Yq)), xq) : lq
      }, xq.context = function(qq) {
        return arguments.length ? (null == qq ? Yq = Oq = null : Oq = lq(Yq = qq), xq) : Yq
      }, xq
    }

    function iq(qq, Eq, gq) {
      var Yq = null,
        lq = (0, rq.c)(!0),
        Oq = null,
        mq = Wq,
        xq = null,
        Aq = (0, vq.c)(cq);

      function cq(cq) {
        var uq, Bq, Wq, Nq, aq, Vq = (cq = (0, tq.e)(cq)).length,
          dq = !1,
          jq = new Array(Vq),
          Hq = new Array(Vq);
        for (null == Oq && (xq = mq(aq = Aq())), uq = 0; uq <= Vq; ++uq) {
          if (!(uq < Vq && lq(Nq = cq[uq], uq, cq)) === dq)
            if (dq = !dq) Bq = uq, xq.areaStart(), xq.lineStart();
            else {
              for (xq.lineEnd(), xq.lineStart(), Wq = uq - 1; Wq >= Bq; --Wq) xq.point(jq[Wq], Hq[Wq]);
              xq.lineEnd(), xq.areaEnd()
            } dq && (jq[uq] = +qq(Nq, uq, cq), Hq[uq] = +Eq(Nq, uq, cq), xq.point(Yq ? +Yq(Nq, uq, cq) : jq[uq], gq ? +gq(Nq, uq, cq) : Hq[uq]))
        }
        if (aq) return xq = null, aq + "" || null
      }

      function uq() {
        return bq().defined(lq).curve(mq).context(Oq)
      }
      return qq = "function" === typeof qq ? qq : void 0 === qq ? hq : (0, rq.c)(+qq), Eq = "function" === typeof Eq ? Eq : void 0 === Eq ? (0, rq.c)(0) : (0, rq.c)(+Eq), gq = "function" === typeof gq ? gq : void 0 === gq ? nq : (0, rq.c)(+gq), cq.x = function(Eq) {
        return arguments.length ? (qq = "function" === typeof Eq ? Eq : (0, rq.c)(+Eq), Yq = null, cq) : qq
      }, cq.x0 = function(Eq) {
        return arguments.length ? (qq = "function" === typeof Eq ? Eq : (0, rq.c)(+Eq), cq) : qq
      }, cq.x1 = function(qq) {
        return arguments.length ? (Yq = null == qq ? null : "function" === typeof qq ? qq : (0, rq.c)(+qq), cq) : Yq
      }, cq.y = function(qq) {
        return arguments.length ? (Eq = "function" === typeof qq ? qq : (0, rq.c)(+qq), gq = null, cq) : Eq
      }, cq.y0 = function(qq) {
        return arguments.length ? (Eq = "function" === typeof qq ? qq : (0, rq.c)(+qq), cq) : Eq
      }, cq.y1 = function(qq) {
        return arguments.length ? (gq = null == qq ? null : "function" === typeof qq ? qq : (0, rq.c)(+qq), cq) : gq
      }, cq.lineX0 = cq.lineY0 = function() {
        return uq().x(qq).y(Eq)
      }, cq.lineY1 = function() {
        return uq().x(qq).y(gq)
      }, cq.lineX1 = function() {
        return uq().x(Yq).y(Eq)
      }, cq.defined = function(qq) {
        return arguments.length ? (lq = "function" === typeof qq ? qq : (0, rq.c)(!!qq), cq) : lq
      }, cq.curve = function(qq) {
        return arguments.length ? (mq = qq, null != Oq && (xq = mq(Oq)), cq) : mq
      }, cq.context = function(qq) {
        return arguments.length ? (null == qq ? Oq = xq = null : xq = mq(Oq = qq), cq) : Oq
      }, cq
    }
    var Zq = gq(5941),
      fq = gq.n(Zq),
      Mq = gq(5105),
      Tq = gq.n(Mq),
      zq = gq(4907),
      Sq = gq(5324),
      pq = gq(5297),
      Gq = gq(4990);

    function Lq(qq) {
      return Lq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Lq(qq)
    }

    function Jq() {
      return Jq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Jq.apply(this, arguments)
    }

    function kq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Rq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? kq(Object(gq), !0).forEach((function(Eq) {
          Uq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : kq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Uq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Lq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != Lq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Lq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var Fq = {
        curveBasisClosed: function(qq) {
          return new xq(qq)
        },
        curveBasisOpen: function(qq) {
          return new Aq(qq)
        },
        curveBasis: function(qq) {
          return new mq(qq)
        },
        curveBumpX: function(qq) {
          return new cq(qq, !0)
        },
        curveBumpY: function(qq) {
          return new cq(qq, !1)
        },
        curveLinearClosed: function(qq) {
          return new uq(qq)
        },
        curveLinear: Wq,
        curveMonotoneX: function(qq) {
          return new jq(qq)
        },
        curveMonotoneY: function(qq) {
          return new Hq(qq)
        },
        curveNatural: function(qq) {
          return new Pq(qq)
        },
        curveStep: function(qq) {
          return new yq(qq, .5)
        },
        curveStepAfter: function(qq) {
          return new yq(qq, 1)
        },
        curveStepBefore: function(qq) {
          return new yq(qq, 0)
        }
      },
      sq = function(qq) {
        return qq.x === +qq.x && qq.y === +qq.y
      },
      Xq = function(qq) {
        return qq.x
      },
      wq = function(qq) {
        return qq.y
      },
      Kq = function(qq) {
        var Eq, gq = qq.type,
          Yq = void 0 === gq ? "linear" : gq,
          lq = qq.points,
          Oq = void 0 === lq ? [] : lq,
          mq = qq.baseLine,
          xq = qq.layout,
          Aq = qq.connectNulls,
          cq = void 0 !== Aq && Aq,
          uq = function(qq, Eq) {
            if (Tq()(qq)) return qq;
            var gq = "curve".concat(fq()(qq));
            return "curveMonotone" !== gq && "curveBump" !== gq || !Eq ? Fq[gq] || Wq : Fq["".concat(gq).concat("vertical" === Eq ? "Y" : "X")]
          }(Yq, xq),
          Bq = cq ? Oq.filter((function(qq) {
            return sq(qq)
          })) : Oq;
        if (Array.isArray(mq)) {
          var Nq = cq ? mq.filter((function(qq) {
              return sq(qq)
            })) : mq,
            aq = Bq.map((function(qq, Eq) {
              return Rq(Rq({}, qq), {}, {
                base: Nq[Eq]
              })
            }));
          return (Eq = "vertical" === xq ? iq().y(wq).x1(Xq).x0((function(qq) {
            return qq.base.x
          })) : iq().x(Xq).y1(wq).y0((function(qq) {
            return qq.base.y
          }))).defined(sq).curve(uq), Eq(aq)
        }
        return (Eq = "vertical" === xq && (0, Gq.D)(mq) ? iq().y(wq).x1(Xq).x0(mq) : (0, Gq.D)(mq) ? iq().x(Xq).y1(wq).y0(mq) : bq().x(Xq).y(wq)).defined(sq).curve(uq), Eq(Bq)
      },
      Cq = function(qq) {
        var Eq = qq.className,
          gq = qq.points,
          lq = qq.path,
          Oq = qq.pathRef;
        if ((!gq || !gq.length) && !lq) return null;
        var mq = gq && gq.length ? Kq(qq) : lq;
        return Yq.createElement("path", Jq({}, (0, pq.e)(qq, !1), (0, Sq.m)(qq), {
          className: (0, zq.d)("recharts-curve", Eq),
          d: mq,
          ref: Oq
        }))
      }
  },
  5985: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq
    });
    var Yq = gq(57),
      lq = gq(4907),
      Oq = gq(5324),
      mq = gq(5297);

    function xq() {
      return xq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, xq.apply(this, arguments)
    }
    var Aq = function(qq) {
      var Eq = qq.cx,
        gq = qq.cy,
        Aq = qq.r,
        cq = qq.className,
        uq = (0, lq.d)("recharts-dot", cq);
      return Eq === +Eq && gq === +gq && Aq === +Aq ? Yq.createElement("circle", xq({}, (0, mq.e)(qq, !1), (0, Oq.m)(qq), {
        className: uq,
        cx: Eq,
        cy: gq,
        r: Aq
      })) : null
    }
  },
  5991: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => jq,
      f: () => Vq
    });
    var Yq = gq(57),
      lq = gq(4907),
      Oq = gq(5994),
      mq = gq(5297);

    function xq(qq) {
      return xq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, xq(qq)
    }

    function Aq() {
      return Aq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Aq.apply(this, arguments)
    }

    function cq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return uq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return uq(qq, Eq)
      }(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function Bq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Wq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Bq(Object(gq), !0).forEach((function(Eq) {
          Nq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Bq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Nq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != xq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != xq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == xq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var aq = function(qq, Eq, gq, Yq, lq) {
        var Oq, mq = Math.min(Math.abs(gq) / 2, Math.abs(Yq) / 2),
          xq = Yq >= 0 ? 1 : -1,
          Aq = gq >= 0 ? 1 : -1,
          cq = Yq >= 0 && gq >= 0 || Yq < 0 && gq < 0 ? 1 : 0;
        if (mq > 0 && lq instanceof Array) {
          for (var uq = [0, 0, 0, 0], Bq = 0; Bq < 4; Bq++) uq[Bq] = lq[Bq] > mq ? mq : lq[Bq];
          Oq = "M".concat(qq, ",").concat(Eq + xq * uq[0]), uq[0] > 0 && (Oq += "A ".concat(uq[0], ",").concat(uq[0], ",0,0,").concat(cq, ",").concat(qq + Aq * uq[0], ",").concat(Eq)), Oq += "L ".concat(qq + gq - Aq * uq[1], ",").concat(Eq), uq[1] > 0 && (Oq += "A ".concat(uq[1], ",").concat(uq[1], ",0,0,").concat(cq, ",\n        ").concat(qq + gq, ",").concat(Eq + xq * uq[1])), Oq += "L ".concat(qq + gq, ",").concat(Eq + Yq - xq * uq[2]), uq[2] > 0 && (Oq += "A ".concat(uq[2], ",").concat(uq[2], ",0,0,").concat(cq, ",\n        ").concat(qq + gq - Aq * uq[2], ",").concat(Eq + Yq)), Oq += "L ".concat(qq + Aq * uq[3], ",").concat(Eq + Yq), uq[3] > 0 && (Oq += "A ".concat(uq[3], ",").concat(uq[3], ",0,0,").concat(cq, ",\n        ").concat(qq, ",").concat(Eq + Yq - xq * uq[3])), Oq += "Z"
        } else if (mq > 0 && lq === +lq && lq > 0) {
          var Wq = Math.min(mq, lq);
          Oq = "M ".concat(qq, ",").concat(Eq + xq * Wq, "\n            A ").concat(Wq, ",").concat(Wq, ",0,0,").concat(cq, ",").concat(qq + Aq * Wq, ",").concat(Eq, "\n            L ").concat(qq + gq - Aq * Wq, ",").concat(Eq, "\n            A ").concat(Wq, ",").concat(Wq, ",0,0,").concat(cq, ",").concat(qq + gq, ",").concat(Eq + xq * Wq, "\n            L ").concat(qq + gq, ",").concat(Eq + Yq - xq * Wq, "\n            A ").concat(Wq, ",").concat(Wq, ",0,0,").concat(cq, ",").concat(qq + gq - Aq * Wq, ",").concat(Eq + Yq, "\n            L ").concat(qq + Aq * Wq, ",").concat(Eq + Yq, "\n            A ").concat(Wq, ",").concat(Wq, ",0,0,").concat(cq, ",").concat(qq, ",").concat(Eq + Yq - xq * Wq, " Z")
        } else Oq = "M ".concat(qq, ",").concat(Eq, " h ").concat(gq, " v ").concat(Yq, " h ").concat(-gq, " Z");
        return Oq
      },
      Vq = function(qq, Eq) {
        if (!qq || !Eq) return !1;
        var gq = qq.x,
          Yq = qq.y,
          lq = Eq.x,
          Oq = Eq.y,
          mq = Eq.width,
          xq = Eq.height;
        if (Math.abs(mq) > 0 && Math.abs(xq) > 0) {
          var Aq = Math.min(lq, lq + mq),
            cq = Math.max(lq, lq + mq),
            uq = Math.min(Oq, Oq + xq),
            Bq = Math.max(Oq, Oq + xq);
          return gq >= Aq && gq <= cq && Yq >= uq && Yq <= Bq
        }
        return !1
      },
      dq = {
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
      jq = function(qq) {
        var Eq = Wq(Wq({}, dq), qq),
          gq = (0, Yq.useRef)(),
          xq = cq((0, Yq.useState)(-1), 2),
          uq = xq[0],
          Bq = xq[1];
        (0, Yq.useEffect)((function() {
          if (gq.current && gq.current.getTotalLength) try {
            var qq = gq.current.getTotalLength();
            qq && Bq(qq)
          } catch (Eq) {}
        }), []);
        var Nq = Eq.x,
          Vq = Eq.y,
          jq = Eq.width,
          Hq = Eq.height,
          oq = Eq.radius,
          Pq = Eq.className,
          Qq = Eq.animationEasing,
          yq = Eq.animationDuration,
          tq = Eq.animationBegin,
          rq = Eq.isAnimationActive,
          vq = Eq.isUpdateAnimationActive;
        if (Nq !== +Nq || Vq !== +Vq || jq !== +jq || Hq !== +Hq || 0 === jq || 0 === Hq) return null;
        var hq = (0, lq.d)("recharts-rectangle", Pq);
        return vq ? Yq.createElement(Oq.d, {
          canBegin: uq > 0,
          from: {
            width: jq,
            height: Hq,
            x: Nq,
            y: Vq
          },
          to: {
            width: jq,
            height: Hq,
            x: Nq,
            y: Vq
          },
          duration: yq,
          animationEasing: Qq,
          isActive: vq
        }, (function(qq) {
          var lq = qq.width,
            xq = qq.height,
            cq = qq.x,
            Bq = qq.y;
          return Yq.createElement(Oq.d, {
            canBegin: uq > 0,
            from: "0px ".concat(-1 === uq ? 1 : uq, "px"),
            to: "".concat(uq, "px 0px"),
            attributeName: "strokeDasharray",
            gN: tq,
            duration: yq,
            isActive: rq,
            easing: Qq
          }, Yq.createElement("path", Aq({}, (0, mq.e)(Eq, !0), {
            className: hq,
            d: aq(cq, Bq, lq, xq, oq),
            ref: gq
          })))
        })) : Yq.createElement("path", Aq({}, (0, mq.e)(Eq, !0), {
          className: hq,
          d: aq(Nq, Vq, jq, Hq, oq)
        }))
      }
  },
  6203: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => dq
    });
    var Yq = gq(57),
      lq = gq(4907),
      Oq = gq(5297),
      mq = gq(6114),
      xq = gq(4990);

    function Aq(qq) {
      return Aq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Aq(qq)
    }

    function cq() {
      return cq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, cq.apply(this, arguments)
    }

    function uq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Bq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? uq(Object(gq), !0).forEach((function(Eq) {
          Wq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : uq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Wq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Aq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != Aq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Aq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var Nq = function(qq) {
        var Eq = qq.cx,
          gq = qq.cy,
          Yq = qq.radius,
          lq = qq.angle,
          Oq = qq.sign,
          xq = qq.isExternal,
          Aq = qq.cornerRadius,
          cq = qq.cornerIsExternal,
          uq = Aq * (xq ? 1 : -1) + Yq,
          Bq = Math.asin(Aq / uq) / mq.d,
          Wq = cq ? lq : lq + Oq * Bq,
          Nq = cq ? lq - Oq * Bq : lq;
        return {
          center: (0, mq.l)(Eq, gq, uq, Wq),
          circleTangency: (0, mq.l)(Eq, gq, Yq, Wq),
          lineTangency: (0, mq.l)(Eq, gq, uq * Math.cos(Bq * mq.d), Nq),
          du: Bq
        }
      },
      aq = function(qq) {
        var Eq = qq.cx,
          gq = qq.cy,
          Yq = qq.innerRadius,
          lq = qq.outerRadius,
          Oq = qq.startAngle,
          Aq = function(qq, Eq) {
            return (0, xq.J)(Eq - qq) * Math.min(Math.abs(Eq - qq), 359.999)
          }(Oq, qq.endAngle),
          cq = Oq + Aq,
          uq = (0, mq.l)(Eq, gq, lq, Oq),
          Bq = (0, mq.l)(Eq, gq, lq, cq),
          Wq = "M ".concat(uq.x, ",").concat(uq.y, "\n    A ").concat(lq, ",").concat(lq, ",0,\n    ").concat(+(Math.abs(Aq) > 180), ",").concat(+(Oq > cq), ",\n    ").concat(Bq.x, ",").concat(Bq.y, "\n  ");
        if (Yq > 0) {
          var Nq = (0, mq.l)(Eq, gq, Yq, Oq),
            aq = (0, mq.l)(Eq, gq, Yq, cq);
          Wq += "L ".concat(aq.x, ",").concat(aq.y, "\n            A ").concat(Yq, ",").concat(Yq, ",0,\n            ").concat(+(Math.abs(Aq) > 180), ",").concat(+(Oq <= cq), ",\n            ").concat(Nq.x, ",").concat(Nq.y, " Z")
        } else Wq += "L ".concat(Eq, ",").concat(gq, " Z");
        return Wq
      },
      Vq = {
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
      dq = function(qq) {
        var Eq = Bq(Bq({}, Vq), qq),
          gq = Eq.cx,
          mq = Eq.cy,
          Aq = Eq.innerRadius,
          uq = Eq.outerRadius,
          Wq = Eq.cornerRadius,
          dq = Eq.forceCornerRadius,
          jq = Eq.cornerIsExternal,
          Hq = Eq.startAngle,
          oq = Eq.endAngle,
          Pq = Eq.className;
        if (uq < Aq || Hq === oq) return null;
        var Qq, yq = (0, lq.d)("recharts-sector", Pq),
          tq = uq - Aq,
          rq = (0, xq.p)(Wq, tq, 0, !0);
        return Qq = rq > 0 && Math.abs(Hq - oq) < 360 ? function(qq) {
          var Eq = qq.cx,
            gq = qq.cy,
            Yq = qq.innerRadius,
            lq = qq.outerRadius,
            Oq = qq.cornerRadius,
            mq = qq.forceCornerRadius,
            Aq = qq.cornerIsExternal,
            cq = qq.startAngle,
            uq = qq.endAngle,
            Bq = (0, xq.J)(uq - cq),
            Wq = Nq({
              cx: Eq,
              cy: gq,
              radius: lq,
              angle: cq,
              sign: Bq,
              cornerRadius: Oq,
              cornerIsExternal: Aq
            }),
            Vq = Wq.circleTangency,
            dq = Wq.lineTangency,
            jq = Wq.du,
            Hq = Nq({
              cx: Eq,
              cy: gq,
              radius: lq,
              angle: uq,
              sign: -Bq,
              cornerRadius: Oq,
              cornerIsExternal: Aq
            }),
            oq = Hq.circleTangency,
            Pq = Hq.lineTangency,
            Qq = Hq.du,
            yq = Aq ? Math.abs(cq - uq) : Math.abs(cq - uq) - jq - Qq;
          if (yq < 0) return mq ? "M ".concat(dq.x, ",").concat(dq.y, "\n        a").concat(Oq, ",").concat(Oq, ",0,0,1,").concat(2 * Oq, ",0\n        a").concat(Oq, ",").concat(Oq, ",0,0,1,").concat(2 * -Oq, ",0\n      ") : aq({
            cx: Eq,
            cy: gq,
            innerRadius: Yq,
            outerRadius: lq,
            startAngle: cq,
            endAngle: uq
          });
          var tq = "M ".concat(dq.x, ",").concat(dq.y, "\n    A").concat(Oq, ",").concat(Oq, ",0,0,").concat(+(Bq < 0), ",").concat(Vq.x, ",").concat(Vq.y, "\n    A").concat(lq, ",").concat(lq, ",0,").concat(+(yq > 180), ",").concat(+(Bq < 0), ",").concat(oq.x, ",").concat(oq.y, "\n    A").concat(Oq, ",").concat(Oq, ",0,0,").concat(+(Bq < 0), ",").concat(Pq.x, ",").concat(Pq.y, "\n  ");
          if (Yq > 0) {
            var rq = Nq({
                cx: Eq,
                cy: gq,
                radius: Yq,
                angle: cq,
                sign: Bq,
                isExternal: !0,
                cornerRadius: Oq,
                cornerIsExternal: Aq
              }),
              vq = rq.circleTangency,
              hq = rq.lineTangency,
              nq = rq.du,
              bq = Nq({
                cx: Eq,
                cy: gq,
                radius: Yq,
                angle: uq,
                sign: -Bq,
                isExternal: !0,
                cornerRadius: Oq,
                cornerIsExternal: Aq
              }),
              iq = bq.circleTangency,
              Zq = bq.lineTangency,
              fq = bq.du,
              Mq = Aq ? Math.abs(cq - uq) : Math.abs(cq - uq) - nq - fq;
            if (Mq < 0 && 0 === Oq) return "".concat(tq, "L").concat(Eq, ",").concat(gq, "Z");
            tq += "L".concat(Zq.x, ",").concat(Zq.y, "\n      A").concat(Oq, ",").concat(Oq, ",0,0,").concat(+(Bq < 0), ",").concat(iq.x, ",").concat(iq.y, "\n      A").concat(Yq, ",").concat(Yq, ",0,").concat(+(Mq > 180), ",").concat(+(Bq > 0), ",").concat(vq.x, ",").concat(vq.y, "\n      A").concat(Oq, ",").concat(Oq, ",0,0,").concat(+(Bq < 0), ",").concat(hq.x, ",").concat(hq.y, "Z")
          } else tq += "L".concat(Eq, ",").concat(gq, "Z");
          return tq
        }({
          cx: gq,
          cy: mq,
          innerRadius: Aq,
          outerRadius: uq,
          cornerRadius: Math.min(rq, tq / 2),
          forceCornerRadius: dq,
          cornerIsExternal: jq,
          startAngle: Hq,
          endAngle: oq
        }) : aq({
          cx: gq,
          cy: mq,
          innerRadius: Aq,
          outerRadius: uq,
          startAngle: Hq,
          endAngle: oq
        }), Yq.createElement("path", cq({}, (0, Oq.e)(Eq, !0), {
          className: yq,
          d: Qq,
          role: "img"
        }))
      }
  },
  5935: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Rq
    });
    var Yq = gq(57),
      lq = gq(5941),
      Oq = gq.n(lq);
    Math.abs, Math.atan2;
    const mq = Math.cos,
      xq = (Math.max, Math.min, Math.sin),
      Aq = Math.sqrt,
      cq = Math.PI,
      uq = 2 * cq;
    const Bq = {
        draw(qq, Eq) {
          const gq = Aq(Eq / cq);
          qq.moveTo(gq, 0), qq.arc(0, 0, gq, 0, uq)
        }
      },
      Wq = {
        draw(qq, Eq) {
          const gq = Aq(Eq / 5) / 2;
          qq.moveTo(-3 * gq, -gq), qq.lineTo(-gq, -gq), qq.lineTo(-gq, -3 * gq), qq.lineTo(gq, -3 * gq), qq.lineTo(gq, -gq), qq.lineTo(3 * gq, -gq), qq.lineTo(3 * gq, gq), qq.lineTo(gq, gq), qq.lineTo(gq, 3 * gq), qq.lineTo(-gq, 3 * gq), qq.lineTo(-gq, gq), qq.lineTo(-3 * gq, gq), qq.closePath()
        }
      },
      Nq = Aq(1 / 3),
      aq = 2 * Nq,
      Vq = {
        draw(qq, Eq) {
          const gq = Aq(Eq / aq),
            Yq = gq * Nq;
          qq.moveTo(0, -gq), qq.lineTo(Yq, 0), qq.lineTo(0, gq), qq.lineTo(-Yq, 0), qq.closePath()
        }
      },
      dq = {
        draw(qq, Eq) {
          const gq = Aq(Eq),
            Yq = -gq / 2;
          qq.rect(Yq, Yq, gq, gq)
        }
      },
      jq = xq(cq / 10) / xq(7 * cq / 10),
      Hq = xq(uq / 10) * jq,
      oq = -mq(uq / 10) * jq,
      Pq = {
        draw(qq, Eq) {
          const gq = Aq(.8908130915292852 * Eq),
            Yq = Hq * gq,
            lq = oq * gq;
          qq.moveTo(0, -gq), qq.lineTo(Yq, lq);
          for (let Oq = 1; Oq < 5; ++Oq) {
            const Eq = uq * Oq / 5,
              Aq = mq(Eq),
              cq = xq(Eq);
            qq.lineTo(cq * gq, -Aq * gq), qq.lineTo(Aq * Yq - cq * lq, cq * Yq + Aq * lq)
          }
          qq.closePath()
        }
      },
      Qq = Aq(3),
      yq = {
        draw(qq, Eq) {
          const gq = -Aq(Eq / (3 * Qq));
          qq.moveTo(0, 2 * gq), qq.lineTo(-Qq * gq, -gq), qq.lineTo(Qq * gq, -gq), qq.closePath()
        }
      },
      tq = -.5,
      rq = Aq(3) / 2,
      vq = 1 / Aq(12),
      hq = 3 * (vq / 2 + 1),
      nq = {
        draw(qq, Eq) {
          const gq = Aq(Eq / hq),
            Yq = gq / 2,
            lq = gq * vq,
            Oq = Yq,
            mq = gq * vq + gq,
            xq = -Oq,
            cq = mq;
          qq.moveTo(Yq, lq), qq.lineTo(Oq, mq), qq.lineTo(xq, cq), qq.lineTo(tq * Yq - rq * lq, rq * Yq + tq * lq), qq.lineTo(tq * Oq - rq * mq, rq * Oq + tq * mq), qq.lineTo(tq * xq - rq * cq, rq * xq + tq * cq), qq.lineTo(tq * Yq + rq * lq, tq * lq - rq * Yq), qq.lineTo(tq * Oq + rq * mq, tq * mq - rq * Oq), qq.lineTo(tq * xq + rq * cq, tq * cq - rq * xq), qq.closePath()
        }
      };
    var bq = gq(5979),
      iq = gq(5982);
    Aq(3), Aq(3);
    var Zq = gq(4907),
      fq = gq(5297);

    function Mq(qq) {
      return Mq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Mq(qq)
    }
    var Tq = ["type", "size", "sizeType"];

    function zq() {
      return zq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, zq.apply(this, arguments)
    }

    function Sq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function pq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Sq(Object(gq), !0).forEach((function(Eq) {
          Gq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Sq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Gq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Mq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != Mq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Mq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Lq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }
    var Jq = {
        symbolCircle: Bq,
        symbolCross: Wq,
        symbolDiamond: Vq,
        symbolSquare: dq,
        symbolStar: Pq,
        symbolTriangle: yq,
        symbolWye: nq
      },
      kq = Math.PI / 180,
      Rq = function(qq) {
        var Eq = qq.type,
          gq = void 0 === Eq ? "circle" : Eq,
          lq = qq.size,
          mq = void 0 === lq ? 64 : lq,
          xq = qq.sizeType,
          Aq = void 0 === xq ? "area" : xq,
          cq = pq(pq({}, Lq(qq, Tq)), {}, {
            type: gq,
            size: mq,
            sizeType: Aq
          }),
          uq = cq.className,
          Wq = cq.cx,
          Nq = cq.cy,
          aq = (0, fq.e)(cq, !0);
        return Wq === +Wq && Nq === +Nq && mq === +mq ? Yq.createElement("path", zq({}, aq, {
          className: (0, Zq.d)("recharts-symbols", uq),
          transform: "translate(".concat(Wq, ", ").concat(Nq, ")"),
          d: function() {
            var qq = function(qq) {
                var Eq = "symbol".concat(Oq()(qq));
                return Jq[Eq] || Bq
              }(gq),
              Eq = function(qq, Eq) {
                let gq = null,
                  Yq = (0, iq.c)(lq);

                function lq() {
                  let lq;
                  if (gq || (gq = lq = Yq()), qq.apply(this, arguments).draw(gq, +Eq.apply(this, arguments)), lq) return gq = null, lq + "" || null
                }
                return qq = "function" === typeof qq ? qq : (0, bq.c)(qq || Bq), Eq = "function" === typeof Eq ? Eq : (0, bq.c)(void 0 === Eq ? 64 : +Eq), lq.type = function(Eq) {
                  return arguments.length ? (qq = "function" === typeof Eq ? Eq : (0, bq.c)(Eq), lq) : qq
                }, lq.size = function(qq) {
                  return arguments.length ? (Eq = "function" === typeof qq ? qq : (0, bq.c)(+qq), lq) : Eq
                }, lq.context = function(qq) {
                  return arguments.length ? (gq = null == qq ? null : qq, lq) : gq
                }, lq
              }().type(qq).size(function(qq, Eq, gq) {
                if ("area" === Eq) return qq;
                switch (gq) {
                  case "cross":
                    return 5 * qq * qq / 9;
                  case "diamond":
                    return .5 * qq * qq / Math.sqrt(3);
                  case "square":
                    return qq * qq;
                  case "star":
                    var Yq = 18 * kq;
                    return 1.25 * qq * qq * (Math.tan(Yq) - Math.tan(2 * Yq) * Math.pow(Math.tan(Yq), 2));
                  case "triangle":
                    return Math.sqrt(3) * qq * qq / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * qq * qq / 8;
                  default:
                    return Math.PI * qq * qq / 4
                }
              }(mq, Aq, gq));
            return Eq()
          }()
        })) : null
      };
    Rq.registerSymbol = function(qq, Eq) {
      Jq["symbol".concat(Oq()(qq))] = Eq
    }
  },
  6187: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Gq,
      f: () => sq,
      j: () => Lq,
      m: () => Jq,
      q: () => kq
    });
    var Yq = gq(57),
      lq = gq(5105),
      Oq = gq.n(lq),
      mq = gq(6192),
      xq = gq.n(mq),
      Aq = gq(6201),
      cq = gq.n(Aq),
      uq = gq(6078),
      Bq = gq.n(uq),
      Wq = gq(5991),
      Nq = gq(4907),
      aq = gq(5994),
      Vq = gq(5297);

    function dq(qq) {
      return dq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, dq(qq)
    }

    function jq() {
      return jq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq) Object.prototype.hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, jq.apply(this, arguments)
    }

    function Hq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return oq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return oq(qq, Eq)
      }(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function Pq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Qq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Pq(Object(gq), !0).forEach((function(Eq) {
          yq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Pq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function yq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != dq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != dq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == dq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var tq = function(qq, Eq, gq, Yq, lq) {
        var Oq, mq = gq - Yq;
        return Oq = "M ".concat(qq, ",").concat(Eq), Oq += "L ".concat(qq + gq, ",").concat(Eq), Oq += "L ".concat(qq + gq - mq / 2, ",").concat(Eq + lq), Oq += "L ".concat(qq + gq - mq / 2 - Yq, ",").concat(Eq + lq), Oq += "L ".concat(qq, ",").concat(Eq, " Z")
      },
      rq = {
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
      vq = function(qq) {
        var Eq = Qq(Qq({}, rq), qq),
          gq = (0, Yq.useRef)(),
          lq = Hq((0, Yq.useState)(-1), 2),
          Oq = lq[0],
          mq = lq[1];
        (0, Yq.useEffect)((function() {
          if (gq.current && gq.current.getTotalLength) try {
            var qq = gq.current.getTotalLength();
            qq && mq(qq)
          } catch (Eq) {}
        }), []);
        var xq = Eq.x,
          Aq = Eq.y,
          cq = Eq.upperWidth,
          uq = Eq.lowerWidth,
          Bq = Eq.height,
          Wq = Eq.className,
          dq = Eq.animationEasing,
          oq = Eq.animationDuration,
          Pq = Eq.animationBegin,
          yq = Eq.isUpdateAnimationActive;
        if (xq !== +xq || Aq !== +Aq || cq !== +cq || uq !== +uq || Bq !== +Bq || 0 === cq && 0 === uq || 0 === Bq) return null;
        var vq = (0, Nq.d)("recharts-trapezoid", Wq);
        return yq ? Yq.createElement(aq.d, {
          canBegin: Oq > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: Bq,
            x: xq,
            y: Aq
          },
          to: {
            upperWidth: cq,
            lowerWidth: uq,
            height: Bq,
            x: xq,
            y: Aq
          },
          duration: oq,
          animationEasing: dq,
          isActive: yq
        }, (function(qq) {
          var lq = qq.upperWidth,
            mq = qq.lowerWidth,
            xq = qq.height,
            Aq = qq.x,
            cq = qq.y;
          return Yq.createElement(aq.d, {
            canBegin: Oq > 0,
            from: "0px ".concat(-1 === Oq ? 1 : Oq, "px"),
            to: "".concat(Oq, "px 0px"),
            attributeName: "strokeDasharray",
            gN: Pq,
            duration: oq,
            easing: dq
          }, Yq.createElement("path", jq({}, (0, Vq.e)(Eq, !0), {
            className: vq,
            d: tq(Aq, cq, lq, mq, xq),
            ref: gq
          })))
        })) : Yq.createElement("g", null, Yq.createElement("path", jq({}, (0, Vq.e)(Eq, !0), {
          className: vq,
          d: tq(xq, Aq, cq, uq, Bq)
        })))
      },
      hq = gq(6203),
      nq = gq(5842),
      bq = gq(5935),
      iq = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function Zq(qq) {
      return Zq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Zq(qq)
    }

    function fq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function Mq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Tq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Mq(Object(gq), !0).forEach((function(Eq) {
          zq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Mq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function zq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Zq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != Zq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Zq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Sq(qq, Eq) {
      return Tq(Tq({}, Eq), qq)
    }

    function pq(qq) {
      var Eq = qq.shapeType,
        gq = qq.elementProps;
      switch (Eq) {
        case "rectangle":
          return Yq.createElement(Wq.b, gq);
        case "trapezoid":
          return Yq.createElement(vq, gq);
        case "sector":
          return Yq.createElement(hq.c, gq);
        case "symbols":
          if (function(qq) {
              return "symbols" === qq
            }(Eq)) return Yq.createElement(bq.b, gq);
          break;
        default:
          return null
      }
    }

    function Gq(qq) {
      var Eq, gq = qq.option,
        lq = qq.shapeType,
        mq = qq.propTransformer,
        Aq = void 0 === mq ? Sq : mq,
        uq = qq.activeClassName,
        Bq = void 0 === uq ? "recharts-active-shape" : uq,
        Wq = qq.isActive,
        Nq = fq(qq, iq);
      if ((0, Yq.isValidElement)(gq)) Eq = (0, Yq.cloneElement)(gq, Tq(Tq({}, Nq), function(qq) {
        return (0, Yq.isValidElement)(qq) ? qq.props : qq
      }(gq)));
      else if (Oq()(gq)) Eq = gq(Nq);
      else if (xq()(gq) && !cq()(gq)) {
        var aq = Aq(gq, Nq);
        Eq = Yq.createElement(pq, {
          shapeType: lq,
          elementProps: aq
        })
      } else {
        var Vq = Nq;
        Eq = Yq.createElement(pq, {
          shapeType: lq,
          elementProps: Vq
        })
      }
      return Wq ? Yq.createElement(nq.d, {
        className: Bq
      }, Eq) : Eq
    }

    function Lq(qq, Eq) {
      return null != Eq && "trapezoids" in qq.props
    }

    function Jq(qq, Eq) {
      return null != Eq && "sectors" in qq.props
    }

    function kq(qq, Eq) {
      return null != Eq && "points" in qq.props
    }

    function Rq(qq, Eq) {
      var gq, Yq, lq = qq.x === (null === Eq || void 0 === Eq || null === (gq = Eq.labelViewBox) || void 0 === gq ? void 0 : gq.x) || qq.x === Eq.x,
        Oq = qq.y === (null === Eq || void 0 === Eq || null === (Yq = Eq.labelViewBox) || void 0 === Yq ? void 0 : Yq.y) || qq.y === Eq.y;
      return lq && Oq
    }

    function Uq(qq, Eq) {
      var gq = qq.endAngle === Eq.endAngle,
        Yq = qq.startAngle === Eq.startAngle;
      return gq && Yq
    }

    function Fq(qq, Eq) {
      var gq = qq.x === Eq.x,
        Yq = qq.y === Eq.y,
        lq = qq.z === Eq.z;
      return gq && Yq && lq
    }

    function sq(qq) {
      var Eq = qq.activeTooltipItem,
        gq = qq.graphicalItem,
        Yq = qq.itemData,
        lq = function(qq, Eq) {
          var gq;
          return Lq(qq, Eq) ? gq = "trapezoids" : Jq(qq, Eq) ? gq = "sectors" : kq(qq, Eq) && (gq = "points"), gq
        }(gq, Eq),
        Oq = function(qq, Eq) {
          var gq, Yq;
          return Lq(qq, Eq) ? null === (gq = Eq.tooltipPayload) || void 0 === gq || null === (gq = gq[0]) || void 0 === gq || null === (gq = gq.payload) || void 0 === gq ? void 0 : gq.payload : Jq(qq, Eq) ? null === (Yq = Eq.tooltipPayload) || void 0 === Yq || null === (Yq = Yq[0]) || void 0 === Yq || null === (Yq = Yq.payload) || void 0 === Yq ? void 0 : Yq.payload : kq(qq, Eq) ? Eq.payload : {}
        }(gq, Eq),
        mq = Yq.filter((function(qq, Yq) {
          var mq = Bq()(Oq, qq),
            xq = gq.props[lq].filter((function(qq) {
              var Yq = function(qq, Eq) {
                var gq;
                return Lq(qq, Eq) ? gq = Rq : Jq(qq, Eq) ? gq = Uq : kq(qq, Eq) && (gq = Fq), gq
              }(gq, Eq);
              return Yq(qq, Eq)
            })),
            Aq = gq.props[lq].indexOf(xq[xq.length - 1]);
          return mq && Yq === Aq
        }));
      return Yq.indexOf(mq[mq.length - 1])
    }
  },
  6127: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Qq,
      f: () => jq,
      g: () => yq,
      h: () => oq,
      l: () => Hq
    });
    var Yq = gq(6133),
      lq = gq.n(Yq),
      Oq = gq(6140),
      mq = gq.n(Oq),
      xq = gq(6014),
      Aq = gq(5297),
      cq = gq(4990),
      uq = gq(6161);

    function Bq(qq) {
      return Bq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Bq(qq)
    }

    function Wq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, dq(Yq.key), Yq)
      }
    }

    function Nq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function aq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Nq(Object(gq), !0).forEach((function(Eq) {
          Vq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Nq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Vq(qq, Eq, gq) {
      return (Eq = dq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function dq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != Bq(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != Bq(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == Bq(Eq) ? Eq : Eq + ""
    }
    var jq = function(qq, Eq, gq, Yq, lq) {
        var Oq = qq.width,
          mq = qq.height,
          Bq = qq.layout,
          Wq = qq.children,
          Nq = Object.keys(Eq),
          dq = {
            left: gq.left,
            leftMirror: gq.left,
            right: Oq - gq.right,
            rightMirror: Oq - gq.right,
            top: gq.top,
            topMirror: gq.top,
            bottom: mq - gq.bottom,
            bottomMirror: mq - gq.bottom
          },
          jq = !!(0, Aq.j)(Wq, uq.b);
        return Nq.reduce((function(Oq, mq) {
          var Aq, uq, Wq, Nq, Hq, oq = Eq[mq],
            Pq = oq.orientation,
            Qq = oq.domain,
            yq = oq.padding,
            tq = void 0 === yq ? {} : yq,
            rq = oq.mirror,
            vq = oq.reversed,
            hq = "".concat(Pq).concat(rq ? "Mirror" : "");
          if ("number" === oq.type && ("gap" === oq.padding || "no-gap" === oq.padding)) {
            var nq = Qq[1] - Qq[0],
              bq = 1 / 0,
              iq = oq.categoricalDomain.sort(cq.e);
            if (iq.forEach((function(qq, Eq) {
                Eq > 0 && (bq = Math.min((qq || 0) - (iq[Eq - 1] || 0), bq))
              })), Number.isFinite(bq)) {
              var Zq = bq / nq,
                fq = "vertical" === oq.layout ? gq.height : gq.width;
              if ("gap" === oq.padding && (Aq = Zq * fq / 2), "no-gap" === oq.padding) {
                var Mq = (0, cq.p)(qq.barCategoryGap, Zq * fq),
                  Tq = Zq * fq / 2;
                Aq = Tq - Mq - (Tq - Mq) / fq * Mq
              }
            }
          }
          uq = "xAxis" === Yq ? [gq.left + (tq.left || 0) + (Aq || 0), gq.left + gq.width - (tq.right || 0) - (Aq || 0)] : "yAxis" === Yq ? "horizontal" === Bq ? [gq.top + gq.height - (tq.bottom || 0), gq.top + (tq.top || 0)] : [gq.top + (tq.top || 0) + (Aq || 0), gq.top + gq.height - (tq.bottom || 0) - (Aq || 0)] : oq.range, vq && (uq = [uq[1], uq[0]]);
          var zq = (0, xq.mb)(oq, lq, jq),
            Sq = zq.scale,
            pq = zq.realScaleType;
          Sq.domain(Qq).range(uq), (0, xq.h)(Sq);
          var Gq = (0, xq.U)(Sq, aq(aq({}, oq), {}, {
            realScaleType: pq
          }));
          "xAxis" === Yq ? (Hq = "top" === Pq && !rq || "bottom" === Pq && rq, Wq = gq.left, Nq = dq[hq] - Hq * oq.height) : "yAxis" === Yq && (Hq = "left" === Pq && !rq || "right" === Pq && rq, Wq = dq[hq] - Hq * oq.width, Nq = gq.top);
          var Lq = aq(aq(aq({}, oq), Gq), {}, {
            realScaleType: pq,
            x: Wq,
            y: Nq,
            scale: Sq,
            width: "xAxis" === Yq ? gq.width : oq.width,
            height: "yAxis" === Yq ? gq.height : oq.height
          });
          return Lq.bandSize = (0, xq.l)(Lq, Gq), oq.hide || "xAxis" !== Yq ? oq.hide || (dq[hq] += (Hq ? -1 : 1) * Lq.width) : dq[hq] += (Hq ? -1 : 1) * Lq.height, aq(aq({}, Oq), {}, Vq({}, mq, Lq))
        }), {})
      },
      Hq = function(qq, Eq) {
        var gq = qq.x,
          Yq = qq.y,
          lq = Eq.x,
          Oq = Eq.y;
        return {
          x: Math.min(gq, lq),
          y: Math.min(Yq, Oq),
          width: Math.abs(lq - gq),
          height: Math.abs(Oq - Yq)
        }
      },
      oq = function(qq) {
        var Eq = qq.x1,
          gq = qq.y1,
          Yq = qq.x2,
          lq = qq.y2;
        return Hq({
          x: Eq,
          y: gq
        }, {
          x: Yq,
          y: lq
        })
      },
      Pq = function() {
        function qq(Eq) {
          ! function(qq, Eq) {
            if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
          }(this, qq), this.scale = Eq
        }
        return Eq = qq, gq = [{
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
          value: function(qq) {
            var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              gq = Eq.bandAware,
              Yq = Eq.position;
            if (void 0 !== qq) {
              if (Yq) switch (Yq) {
                case "start":
                default:
                  return this.scale(qq);
                case "middle":
                  var lq = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(qq) + lq;
                case "end":
                  var Oq = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(qq) + Oq
              }
              if (gq) {
                var mq = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(qq) + mq
              }
              return this.scale(qq)
            }
          }
        }, {
          key: "isInRange",
          value: function(qq) {
            var Eq = this.range(),
              gq = Eq[0],
              Yq = Eq[Eq.length - 1];
            return gq <= Yq ? qq >= gq && qq <= Yq : qq >= Yq && qq <= gq
          }
        }], Yq = [{
          key: "create",
          value: function(Eq) {
            return new qq(Eq)
          }
        }], gq && Wq(Eq.prototype, gq), Yq && Wq(Eq, Yq), Object.defineProperty(Eq, "prototype", {
          writable: !1
        }), Eq;
        var Eq, gq, Yq
      }();
    Vq(Pq, "EPS", 1e-4);
    var Qq = function(qq) {
      var Eq = Object.keys(qq).reduce((function(Eq, gq) {
        return aq(aq({}, Eq), {}, Vq({}, gq, Pq.create(qq[gq])))
      }), {});
      return aq(aq({}, Eq), {}, {
        apply: function(qq) {
          var gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Yq = gq.bandAware,
            Oq = gq.position;
          return lq()(qq, (function(qq, gq) {
            return Eq[gq].apply(qq, {
              bandAware: Yq,
              position: Oq
            })
          }))
        },
        isInRange: function(qq) {
          return mq()(qq, (function(qq, gq) {
            return Eq[gq].isInRange(qq)
          }))
        }
      })
    };
    var yq = function(qq) {
      var Eq = qq.width,
        gq = qq.height,
        Yq = function(qq) {
          return (qq % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        lq = Yq * Math.PI / 180,
        Oq = Math.atan(gq / Eq),
        mq = lq > Oq && lq < Math.PI - Oq ? gq / Math.sin(lq) : Eq / Math.cos(lq);
      return Math.abs(mq)
    }
  },
  6014: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Mm,
      g: () => bm,
      h: () => Fm,
      i: () => km,
      j: () => sm,
      l: () => mx,
      n: () => fm,
      o: () => Zm,
      r: () => qx,
      t: () => Dm,
      x: () => em,
      z: () => Gm,
      B: () => nm,
      E: () => Sm,
      I: () => gx,
      K: () => im,
      O: () => Cm,
      P: () => Ex,
      R: () => Lm,
      U: () => Im,
      Y: () => Ax,
      $: () => hm,
      db: () => pm,
      hb: () => xx,
      jb: () => zm,
      mb: () => Rm,
      nb: () => Ox,
      rb: () => Xm
    });
    var Yq = {};
    gq.r(Yq), gq.d(Yq, {
      scaleBand: () => lq.e,
      scaleDiverging: () => AO,
      scaleDivergingLog: () => cO,
      scaleDivergingPow: () => BO,
      scaleDivergingSqrt: () => WO,
      scaleDivergingSymlog: () => uO,
      scaleIdentity: () => KE,
      scaleImplicit: () => cg.g,
      scaleLinear: () => wE,
      scaleLog: () => lg,
      scaleOrdinal: () => cg.e,
      scalePoint: () => lq.i,
      scalePow: () => ag,
      scaleQuantile: () => hg,
      scaleQuantize: () => ng,
      scaleRadial: () => jg,
      scaleSequential: () => EO,
      scaleSequentialLog: () => gO,
      scaleSequentialPow: () => lO,
      scaleSequentialQuantile: () => mO,
      scaleSequentialSqrt: () => OO,
      scaleSequentialSymlog: () => YO,
      scaleSqrt: () => Vg,
      scaleSymlog: () => Ag,
      scaleThreshold: () => bg,
      scaleTime: () => Il,
      scaleUtc: () => el,
      tickFormat: () => sE
    });
    var lq = gq(6017);
    const Oq = Math.sqrt(50),
      mq = Math.sqrt(10),
      xq = Math.sqrt(2);

    function Aq(qq, Eq, gq) {
      const Yq = (Eq - qq) / Math.max(0, gq),
        lq = Math.floor(Math.log10(Yq)),
        cq = Yq / Math.pow(10, lq),
        uq = cq >= Oq ? 10 : cq >= mq ? 5 : cq >= xq ? 2 : 1;
      let Bq, Wq, Nq;
      return lq < 0 ? (Nq = Math.pow(10, -lq) / uq, Bq = Math.round(qq * Nq), Wq = Math.round(Eq * Nq), Bq / Nq < qq && ++Bq, Wq / Nq > Eq && --Wq, Nq = -Nq) : (Nq = Math.pow(10, lq) * uq, Bq = Math.round(qq / Nq), Wq = Math.round(Eq / Nq), Bq * Nq < qq && ++Bq, Wq * Nq > Eq && --Wq), Wq < Bq && .5 <= gq && gq < 2 ? Aq(qq, Eq, 2 * gq) : [Bq, Wq, Nq]
    }

    function cq(qq, Eq, gq) {
      if (!((gq = +gq) > 0)) return [];
      if ((qq = +qq) === (Eq = +Eq)) return [qq];
      const Yq = Eq < qq,
        [lq, Oq, mq] = Yq ? Aq(Eq, qq, gq) : Aq(qq, Eq, gq);
      if (!(Oq >= lq)) return [];
      const xq = Oq - lq + 1,
        cq = new Array(xq);
      if (Yq)
        if (mq < 0)
          for (let Aq = 0; Aq < xq; ++Aq) cq[Aq] = (Oq - Aq) / -mq;
        else
          for (let Aq = 0; Aq < xq; ++Aq) cq[Aq] = (Oq - Aq) * mq;
      else if (mq < 0)
        for (let Aq = 0; Aq < xq; ++Aq) cq[Aq] = (lq + Aq) / -mq;
      else
        for (let Aq = 0; Aq < xq; ++Aq) cq[Aq] = (lq + Aq) * mq;
      return cq
    }

    function uq(qq, Eq, gq) {
      return Aq(qq = +qq, Eq = +Eq, gq = +gq)[2]
    }

    function Bq(qq, Eq, gq) {
      gq = +gq;
      const Yq = (Eq = +Eq) < (qq = +qq),
        lq = Yq ? uq(Eq, qq, gq) : uq(qq, Eq, gq);
      return (Yq ? -1 : 1) * (lq < 0 ? 1 / -lq : lq)
    }

    function Wq(qq, Eq) {
      return null == qq || null == Eq ? NaN : qq < Eq ? -1 : qq > Eq ? 1 : qq >= Eq ? 0 : NaN
    }

    function Nq(qq, Eq) {
      return null == qq || null == Eq ? NaN : Eq < qq ? -1 : Eq > qq ? 1 : Eq >= qq ? 0 : NaN
    }

    function aq(qq) {
      let Eq, gq, Yq;

      function lq(qq, Yq) {
        let lq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.length;
        if (lq < Oq) {
          if (0 !== Eq(Yq, Yq)) return Oq;
          do {
            const Eq = lq + Oq >>> 1;
            gq(qq[Eq], Yq) < 0 ? lq = Eq + 1 : Oq = Eq
          } while (lq < Oq)
        }
        return lq
      }
      return 2 !== qq.length ? (Eq = Wq, gq = (Eq, gq) => Wq(qq(Eq), gq), Yq = (Eq, gq) => qq(Eq) - gq) : (Eq = qq === Wq || qq === Nq ? qq : Vq, gq = qq, Yq = qq), {
        left: lq,
        center: function(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const Oq = lq(qq, Eq, gq, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.length) - 1);
          return Oq > gq && Yq(qq[Oq - 1], Eq) > -Yq(qq[Oq], Eq) ? Oq - 1 : Oq
        },
        right: function(qq, Yq) {
          let lq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qq.length;
          if (lq < Oq) {
            if (0 !== Eq(Yq, Yq)) return Oq;
            do {
              const Eq = lq + Oq >>> 1;
              gq(qq[Eq], Yq) <= 0 ? lq = Eq + 1 : Oq = Eq
            } while (lq < Oq)
          }
          return lq
        }
      }
    }

    function Vq() {
      return 0
    }

    function dq(qq) {
      return null === qq ? NaN : +qq
    }
    const jq = aq(Wq),
      Hq = jq.right,
      oq = (jq.left, aq(dq).center, Hq);

    function Pq(qq, Eq, gq) {
      qq.prototype = Eq.prototype = gq, gq.constructor = qq
    }

    function Qq(qq, Eq) {
      var gq = Object.create(qq.prototype);
      for (var Yq in Eq) gq[Yq] = Eq[Yq];
      return gq
    }

    function yq() {}
    var tq = .7,
      rq = 1 / tq,
      vq = "\\s*([+-]?\\d+)\\s*",
      hq = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      nq = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      bq = /^#([0-9a-f]{3,8})$/,
      iq = new RegExp(`^rgb\\(${vq},${vq},${vq}\\)$`),
      Zq = new RegExp(`^rgb\\(${nq},${nq},${nq}\\)$`),
      fq = new RegExp(`^rgba\\(${vq},${vq},${vq},${hq}\\)$`),
      Mq = new RegExp(`^rgba\\(${nq},${nq},${nq},${hq}\\)$`),
      Tq = new RegExp(`^hsl\\(${hq},${nq},${nq}\\)$`),
      zq = new RegExp(`^hsla\\(${hq},${nq},${nq},${hq}\\)$`),
      Sq = {
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

    function pq() {
      return this.rgb().formatHex()
    }

    function Gq() {
      return this.rgb().formatRgb()
    }

    function Lq(qq) {
      var Eq, gq;
      return qq = (qq + "").trim().toLowerCase(), (Eq = bq.exec(qq)) ? (gq = Eq[1].length, Eq = parseInt(Eq[1], 16), 6 === gq ? Jq(Eq) : 3 === gq ? new Uq(Eq >> 8 & 15 | Eq >> 4 & 240, Eq >> 4 & 15 | 240 & Eq, (15 & Eq) << 4 | 15 & Eq, 1) : 8 === gq ? kq(Eq >> 24 & 255, Eq >> 16 & 255, Eq >> 8 & 255, (255 & Eq) / 255) : 4 === gq ? kq(Eq >> 12 & 15 | Eq >> 8 & 240, Eq >> 8 & 15 | Eq >> 4 & 240, Eq >> 4 & 15 | 240 & Eq, ((15 & Eq) << 4 | 15 & Eq) / 255) : null) : (Eq = iq.exec(qq)) ? new Uq(Eq[1], Eq[2], Eq[3], 1) : (Eq = Zq.exec(qq)) ? new Uq(255 * Eq[1] / 100, 255 * Eq[2] / 100, 255 * Eq[3] / 100, 1) : (Eq = fq.exec(qq)) ? kq(Eq[1], Eq[2], Eq[3], Eq[4]) : (Eq = Mq.exec(qq)) ? kq(255 * Eq[1] / 100, 255 * Eq[2] / 100, 255 * Eq[3] / 100, Eq[4]) : (Eq = Tq.exec(qq)) ? Cq(Eq[1], Eq[2] / 100, Eq[3] / 100, 1) : (Eq = zq.exec(qq)) ? Cq(Eq[1], Eq[2] / 100, Eq[3] / 100, Eq[4]) : Sq.hasOwnProperty(qq) ? Jq(Sq[qq]) : "transparent" === qq ? new Uq(NaN, NaN, NaN, 0) : null
    }

    function Jq(qq) {
      return new Uq(qq >> 16 & 255, qq >> 8 & 255, 255 & qq, 1)
    }

    function kq(qq, Eq, gq, Yq) {
      return Yq <= 0 && (qq = Eq = gq = NaN), new Uq(qq, Eq, gq, Yq)
    }

    function Rq(qq, Eq, gq, Yq) {
      return 1 === arguments.length ? ((lq = qq) instanceof yq || (lq = Lq(lq)), lq ? new Uq((lq = lq.rgb()).r, lq.g, lq.b, lq.opacity) : new Uq) : new Uq(qq, Eq, gq, null == Yq ? 1 : Yq);
      var lq
    }

    function Uq(qq, Eq, gq, Yq) {
      this.r = +qq, this.g = +Eq, this.b = +gq, this.opacity = +Yq
    }

    function Fq() {
      return `#${Kq(this.r)}${Kq(this.g)}${Kq(this.b)}`
    }

    function sq() {
      const qq = Xq(this.opacity);
      return `${1===qq?"rgb(":"rgba("}${wq(this.r)}, ${wq(this.g)}, ${wq(this.b)}${1===qq?")":`, ${qq})`}`
    }

    function Xq(qq) {
      return isNaN(qq) ? 1 : Math.max(0, Math.min(1, qq))
    }

    function wq(qq) {
      return Math.max(0, Math.min(255, Math.round(qq) || 0))
    }

    function Kq(qq) {
      return ((qq = wq(qq)) < 16 ? "0" : "") + qq.toString(16)
    }

    function Cq(qq, Eq, gq, Yq) {
      return Yq <= 0 ? qq = Eq = gq = NaN : gq <= 0 || gq >= 1 ? qq = Eq = NaN : Eq <= 0 && (qq = NaN), new eq(qq, Eq, gq, Yq)
    }

    function Iq(qq) {
      if (qq instanceof eq) return new eq(qq.h, qq.s, qq.l, qq.opacity);
      if (qq instanceof yq || (qq = Lq(qq)), !qq) return new eq;
      if (qq instanceof eq) return qq;
      var Eq = (qq = qq.rgb()).r / 255,
        gq = qq.g / 255,
        Yq = qq.b / 255,
        lq = Math.min(Eq, gq, Yq),
        Oq = Math.max(Eq, gq, Yq),
        mq = NaN,
        xq = Oq - lq,
        Aq = (Oq + lq) / 2;
      return xq ? (mq = Eq === Oq ? (gq - Yq) / xq + 6 * (gq < Yq) : gq === Oq ? (Yq - Eq) / xq + 2 : (Eq - gq) / xq + 4, xq /= Aq < .5 ? Oq + lq : 2 - Oq - lq, mq *= 60) : xq = Aq > 0 && Aq < 1 ? 0 : mq, new eq(mq, xq, Aq, qq.opacity)
    }

    function eq(qq, Eq, gq, Yq) {
      this.h = +qq, this.s = +Eq, this.l = +gq, this.opacity = +Yq
    }

    function Dq(qq) {
      return (qq = (qq || 0) % 360) < 0 ? qq + 360 : qq
    }

    function qE(qq) {
      return Math.max(0, Math.min(1, qq || 0))
    }

    function EE(qq, Eq, gq) {
      return 255 * (qq < 60 ? Eq + (gq - Eq) * qq / 60 : qq < 180 ? gq : qq < 240 ? Eq + (gq - Eq) * (240 - qq) / 60 : Eq)
    }

    function gE(qq, Eq, gq, Yq, lq) {
      var Oq = qq * qq,
        mq = Oq * qq;
      return ((1 - 3 * qq + 3 * Oq - mq) * Eq + (4 - 6 * Oq + 3 * mq) * gq + (1 + 3 * qq + 3 * Oq - 3 * mq) * Yq + mq * lq) / 6
    }
    Pq(yq, Lq, {
      copy(qq) {
        return Object.assign(new this.constructor, this, qq)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: pq,
      formatHex: pq,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return Iq(this).formatHsl()
      },
      formatRgb: Gq,
      toString: Gq
    }), Pq(Uq, Rq, Qq(yq, {
      brighter(qq) {
        return qq = null == qq ? rq : Math.pow(rq, qq), new Uq(this.r * qq, this.g * qq, this.b * qq, this.opacity)
      },
      darker(qq) {
        return qq = null == qq ? tq : Math.pow(tq, qq), new Uq(this.r * qq, this.g * qq, this.b * qq, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new Uq(wq(this.r), wq(this.g), wq(this.b), Xq(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: Fq,
      formatHex: Fq,
      formatHex8: function() {
        return `#${Kq(this.r)}${Kq(this.g)}${Kq(this.b)}${Kq(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: sq,
      toString: sq
    })), Pq(eq, (function(qq, Eq, gq, Yq) {
      return 1 === arguments.length ? Iq(qq) : new eq(qq, Eq, gq, null == Yq ? 1 : Yq)
    }), Qq(yq, {
      brighter(qq) {
        return qq = null == qq ? rq : Math.pow(rq, qq), new eq(this.h, this.s, this.l * qq, this.opacity)
      },
      darker(qq) {
        return qq = null == qq ? tq : Math.pow(tq, qq), new eq(this.h, this.s, this.l * qq, this.opacity)
      },
      rgb() {
        var qq = this.h % 360 + 360 * (this.h < 0),
          Eq = isNaN(qq) || isNaN(this.s) ? 0 : this.s,
          gq = this.l,
          Yq = gq + (gq < .5 ? gq : 1 - gq) * Eq,
          lq = 2 * gq - Yq;
        return new Uq(EE(qq >= 240 ? qq - 240 : qq + 120, lq, Yq), EE(qq, lq, Yq), EE(qq < 120 ? qq + 240 : qq - 120, lq, Yq), this.opacity)
      },
      clamp() {
        return new eq(Dq(this.h), qE(this.s), qE(this.l), Xq(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const qq = Xq(this.opacity);
        return `${1===qq?"hsl(":"hsla("}${Dq(this.h)}, ${100*qE(this.s)}%, ${100*qE(this.l)}%${1===qq?")":`, ${qq})`}`
      }
    }));
    const YE = qq => () => qq;

    function lE(qq, Eq) {
      return function(gq) {
        return qq + gq * Eq
      }
    }

    function OE(qq) {
      return 1 === (qq = +qq) ? mE : function(Eq, gq) {
        return gq - Eq ? function(qq, Eq, gq) {
          return qq = Math.pow(qq, gq), Eq = Math.pow(Eq, gq) - qq, gq = 1 / gq,
            function(Yq) {
              return Math.pow(qq + Yq * Eq, gq)
            }
        }(Eq, gq, qq) : YE(isNaN(Eq) ? gq : Eq)
      }
    }

    function mE(qq, Eq) {
      var gq = Eq - qq;
      return gq ? lE(qq, gq) : YE(isNaN(qq) ? Eq : qq)
    }
    const xE = function qq(Eq) {
      var gq = OE(Eq);

      function Yq(qq, Eq) {
        var Yq = gq((qq = Rq(qq)).r, (Eq = Rq(Eq)).r),
          lq = gq(qq.g, Eq.g),
          Oq = gq(qq.b, Eq.b),
          mq = mE(qq.opacity, Eq.opacity);
        return function(Eq) {
          return qq.r = Yq(Eq), qq.g = lq(Eq), qq.b = Oq(Eq), qq.opacity = mq(Eq), qq + ""
        }
      }
      return Yq.gamma = qq, Yq
    }(1);

    function AE(qq) {
      return function(Eq) {
        var gq, Yq, lq = Eq.length,
          Oq = new Array(lq),
          mq = new Array(lq),
          xq = new Array(lq);
        for (gq = 0; gq < lq; ++gq) Yq = Rq(Eq[gq]), Oq[gq] = Yq.r || 0, mq[gq] = Yq.g || 0, xq[gq] = Yq.b || 0;
        return Oq = qq(Oq), mq = qq(mq), xq = qq(xq), Yq.opacity = 1,
          function(qq) {
            return Yq.r = Oq(qq), Yq.g = mq(qq), Yq.b = xq(qq), Yq + ""
          }
      }
    }
    AE((function(qq) {
      var Eq = qq.length - 1;
      return function(gq) {
        var Yq = gq <= 0 ? gq = 0 : gq >= 1 ? (gq = 1, Eq - 1) : Math.floor(gq * Eq),
          lq = qq[Yq],
          Oq = qq[Yq + 1],
          mq = Yq > 0 ? qq[Yq - 1] : 2 * lq - Oq,
          xq = Yq < Eq - 1 ? qq[Yq + 2] : 2 * Oq - lq;
        return gE((gq - Yq / Eq) * Eq, mq, lq, Oq, xq)
      }
    })), AE((function(qq) {
      var Eq = qq.length;
      return function(gq) {
        var Yq = Math.floor(((gq %= 1) < 0 ? ++gq : gq) * Eq),
          lq = qq[(Yq + Eq - 1) % Eq],
          Oq = qq[Yq % Eq],
          mq = qq[(Yq + 1) % Eq],
          xq = qq[(Yq + 2) % Eq];
        return gE((gq - Yq / Eq) * Eq, lq, Oq, mq, xq)
      }
    }));

    function cE(qq, Eq) {
      var gq, Yq = Eq ? Eq.length : 0,
        lq = qq ? Math.min(Yq, qq.length) : 0,
        Oq = new Array(lq),
        mq = new Array(Yq);
      for (gq = 0; gq < lq; ++gq) Oq[gq] = jE(qq[gq], Eq[gq]);
      for (; gq < Yq; ++gq) mq[gq] = Eq[gq];
      return function(qq) {
        for (gq = 0; gq < lq; ++gq) mq[gq] = Oq[gq](qq);
        return mq
      }
    }

    function uE(qq, Eq) {
      var gq = new Date;
      return qq = +qq, Eq = +Eq,
        function(Yq) {
          return gq.setTime(qq * (1 - Yq) + Eq * Yq), gq
        }
    }

    function BE(qq, Eq) {
      return qq = +qq, Eq = +Eq,
        function(gq) {
          return qq * (1 - gq) + Eq * gq
        }
    }

    function WE(qq, Eq) {
      var gq, Yq = {},
        lq = {};
      for (gq in null !== qq && "object" === typeof qq || (qq = {}), null !== Eq && "object" === typeof Eq || (Eq = {}), Eq) gq in qq ? Yq[gq] = jE(qq[gq], Eq[gq]) : lq[gq] = Eq[gq];
      return function(qq) {
        for (gq in Yq) lq[gq] = Yq[gq](qq);
        return lq
      }
    }
    var NE = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      aE = new RegExp(NE.source, "g");

    function VE(qq, Eq) {
      var gq, Yq, lq, Oq = NE.lastIndex = aE.lastIndex = 0,
        mq = -1,
        xq = [],
        Aq = [];
      for (qq += "", Eq += "";
        (gq = NE.exec(qq)) && (Yq = aE.exec(Eq));)(lq = Yq.index) > Oq && (lq = Eq.slice(Oq, lq), xq[mq] ? xq[mq] += lq : xq[++mq] = lq), (gq = gq[0]) === (Yq = Yq[0]) ? xq[mq] ? xq[mq] += Yq : xq[++mq] = Yq : (xq[++mq] = null, Aq.push({
        i: mq,
        x: BE(gq, Yq)
      })), Oq = aE.lastIndex;
      return Oq < Eq.length && (lq = Eq.slice(Oq), xq[mq] ? xq[mq] += lq : xq[++mq] = lq), xq.length < 2 ? Aq[0] ? function(qq) {
        return function(Eq) {
          return qq(Eq) + ""
        }
      }(Aq[0].x) : function(qq) {
        return function() {
          return qq
        }
      }(Eq) : (Eq = Aq.length, function(qq) {
        for (var gq, Yq = 0; Yq < Eq; ++Yq) xq[(gq = Aq[Yq]).i] = gq.x(qq);
        return xq.join("")
      })
    }

    function dE(qq, Eq) {
      Eq || (Eq = []);
      var gq, Yq = qq ? Math.min(Eq.length, qq.length) : 0,
        lq = Eq.slice();
      return function(Oq) {
        for (gq = 0; gq < Yq; ++gq) lq[gq] = qq[gq] * (1 - Oq) + Eq[gq] * Oq;
        return lq
      }
    }

    function jE(qq, Eq) {
      var gq, Yq, lq = typeof Eq;
      return null == Eq || "boolean" === lq ? YE(Eq) : ("number" === lq ? BE : "string" === lq ? (gq = Lq(Eq)) ? (Eq = gq, xE) : VE : Eq instanceof Lq ? xE : Eq instanceof Date ? uE : (Yq = Eq, !ArrayBuffer.isView(Yq) || Yq instanceof DataView ? Array.isArray(Eq) ? cE : "function" !== typeof Eq.valueOf && "function" !== typeof Eq.toString || isNaN(Eq) ? WE : BE : dE))(qq, Eq)
    }

    function HE(qq, Eq) {
      return qq = +qq, Eq = +Eq,
        function(gq) {
          return Math.round(qq * (1 - gq) + Eq * gq)
        }
    }

    function oE(qq) {
      return +qq
    }
    var PE = [0, 1];

    function QE(qq) {
      return qq
    }

    function yE(qq, Eq) {
      return (Eq -= qq = +qq) ? function(gq) {
        return (gq - qq) / Eq
      } : (gq = isNaN(Eq) ? NaN : .5, function() {
        return gq
      });
      var gq
    }

    function tE(qq, Eq, gq) {
      var Yq = qq[0],
        lq = qq[1],
        Oq = Eq[0],
        mq = Eq[1];
      return lq < Yq ? (Yq = yE(lq, Yq), Oq = gq(mq, Oq)) : (Yq = yE(Yq, lq), Oq = gq(Oq, mq)),
        function(qq) {
          return Oq(Yq(qq))
        }
    }

    function rE(qq, Eq, gq) {
      var Yq = Math.min(qq.length, Eq.length) - 1,
        lq = new Array(Yq),
        Oq = new Array(Yq),
        mq = -1;
      for (qq[Yq] < qq[0] && (qq = qq.slice().reverse(), Eq = Eq.slice().reverse()); ++mq < Yq;) lq[mq] = yE(qq[mq], qq[mq + 1]), Oq[mq] = gq(Eq[mq], Eq[mq + 1]);
      return function(Eq) {
        var gq = oq(qq, Eq, 1, Yq) - 1;
        return Oq[gq](lq[gq](Eq))
      }
    }

    function vE(qq, Eq) {
      return Eq.domain(qq.domain()).range(qq.range()).interpolate(qq.interpolate()).clamp(qq.clamp()).unknown(qq.unknown())
    }

    function hE() {
      var qq, Eq, gq, Yq, lq, Oq, mq = PE,
        xq = PE,
        Aq = jE,
        cq = QE;

      function uq() {
        var qq = Math.min(mq.length, xq.length);
        return cq !== QE && (cq = function(qq, Eq) {
          var gq;
          return qq > Eq && (gq = qq, qq = Eq, Eq = gq),
            function(gq) {
              return Math.max(qq, Math.min(Eq, gq))
            }
        }(mq[0], mq[qq - 1])), Yq = qq > 2 ? rE : tE, lq = Oq = null, Bq
      }

      function Bq(Eq) {
        return null == Eq || isNaN(Eq = +Eq) ? gq : (lq || (lq = Yq(mq.map(qq), xq, Aq)))(qq(cq(Eq)))
      }
      return Bq.invert = function(gq) {
          return cq(Eq((Oq || (Oq = Yq(xq, mq.map(qq), BE)))(gq)))
        }, Bq.domain = function(qq) {
          return arguments.length ? (mq = Array.from(qq, oE), uq()) : mq.slice()
        }, Bq.range = function(qq) {
          return arguments.length ? (xq = Array.from(qq), uq()) : xq.slice()
        }, Bq.rangeRound = function(qq) {
          return xq = Array.from(qq), Aq = HE, uq()
        }, Bq.clamp = function(qq) {
          return arguments.length ? (cq = !!qq || QE, uq()) : cq !== QE
        }, Bq.interpolate = function(qq) {
          return arguments.length ? (Aq = qq, uq()) : Aq
        }, Bq.unknown = function(qq) {
          return arguments.length ? (gq = qq, Bq) : gq
        },
        function(gq, Yq) {
          return qq = gq, Eq = Yq, uq()
        }
    }

    function nE() {
      return hE()(QE, QE)
    }
    var bE, iE = gq(6021),
      ZE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function fE(qq) {
      if (!(Eq = ZE.exec(qq))) throw new Error("invalid format: " + qq);
      var Eq;
      return new ME({
        fill: Eq[1],
        align: Eq[2],
        sign: Eq[3],
        symbol: Eq[4],
        zero: Eq[5],
        width: Eq[6],
        comma: Eq[7],
        precision: Eq[8] && Eq[8].slice(1),
        trim: Eq[9],
        type: Eq[10]
      })
    }

    function ME(qq) {
      this.fill = void 0 === qq.fill ? " " : qq.fill + "", this.align = void 0 === qq.align ? ">" : qq.align + "", this.sign = void 0 === qq.sign ? "-" : qq.sign + "", this.symbol = void 0 === qq.symbol ? "" : qq.symbol + "", this.zero = !!qq.zero, this.width = void 0 === qq.width ? void 0 : +qq.width, this.comma = !!qq.comma, this.precision = void 0 === qq.precision ? void 0 : +qq.precision, this.trim = !!qq.trim, this.type = void 0 === qq.type ? "" : qq.type + ""
    }

    function TE(qq, Eq) {
      if (!isFinite(qq) || 0 === qq) return null;
      var gq = (qq = Eq ? qq.toExponential(Eq - 1) : qq.toExponential()).indexOf("e"),
        Yq = qq.slice(0, gq);
      return [Yq.length > 1 ? Yq[0] + Yq.slice(2) : Yq, +qq.slice(gq + 1)]
    }

    function zE(qq) {
      return (qq = TE(Math.abs(qq))) ? qq[1] : NaN
    }

    function SE(qq, Eq) {
      var gq = TE(qq, Eq);
      if (!gq) return qq + "";
      var Yq = gq[0],
        lq = gq[1];
      return lq < 0 ? "0." + new Array(-lq).join("0") + Yq : Yq.length > lq + 1 ? Yq.slice(0, lq + 1) + "." + Yq.slice(lq + 1) : Yq + new Array(lq - Yq.length + 2).join("0")
    }
    fE.prototype = ME.prototype, ME.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const pE = {
      "%": (qq, Eq) => (100 * qq).toFixed(Eq),
      b: qq => Math.round(qq).toString(2),
      c: qq => qq + "",
      d: function(qq) {
        return Math.abs(qq = Math.round(qq)) >= 1e21 ? qq.toLocaleString("en").replace(/,/g, "") : qq.toString(10)
      },
      e: (qq, Eq) => qq.toExponential(Eq),
      f: (qq, Eq) => qq.toFixed(Eq),
      g: (qq, Eq) => qq.toPrecision(Eq),
      o: qq => Math.round(qq).toString(8),
      p: (qq, Eq) => SE(100 * qq, Eq),
      r: SE,
      s: function(qq, Eq) {
        var gq = TE(qq, Eq);
        if (!gq) return bE = void 0, qq.toPrecision(Eq);
        var Yq = gq[0],
          lq = gq[1],
          Oq = lq - (bE = 3 * Math.max(-8, Math.min(8, Math.floor(lq / 3)))) + 1,
          mq = Yq.length;
        return Oq === mq ? Yq : Oq > mq ? Yq + new Array(Oq - mq + 1).join("0") : Oq > 0 ? Yq.slice(0, Oq) + "." + Yq.slice(Oq) : "0." + new Array(1 - Oq).join("0") + TE(qq, Math.max(0, Eq + Oq - 1))[0]
      },
      X: qq => Math.round(qq).toString(16).toUpperCase(),
      x: qq => Math.round(qq).toString(16)
    };

    function GE(qq) {
      return qq
    }
    var LE, JE, kE, RE = Array.prototype.map,
      UE = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function FE(qq) {
      var Eq, gq, Yq = void 0 === qq.grouping || void 0 === qq.thousands ? GE : (Eq = RE.call(qq.grouping, Number), gq = qq.thousands + "", function(qq, Yq) {
          for (var lq = qq.length, Oq = [], mq = 0, xq = Eq[0], Aq = 0; lq > 0 && xq > 0 && (Aq + xq + 1 > Yq && (xq = Math.max(1, Yq - Aq)), Oq.push(qq.substring(lq -= xq, lq + xq)), !((Aq += xq + 1) > Yq));) xq = Eq[mq = (mq + 1) % Eq.length];
          return Oq.reverse().join(gq)
        }),
        lq = void 0 === qq.currency ? "" : qq.currency[0] + "",
        Oq = void 0 === qq.currency ? "" : qq.currency[1] + "",
        mq = void 0 === qq.decimal ? "." : qq.decimal + "",
        xq = void 0 === qq.numerals ? GE : function(qq) {
          return function(Eq) {
            return Eq.replace(/[0-9]/g, (function(Eq) {
              return qq[+Eq]
            }))
          }
        }(RE.call(qq.numerals, String)),
        Aq = void 0 === qq.percent ? "%" : qq.percent + "",
        cq = void 0 === qq.minus ? "\u2212" : qq.minus + "",
        uq = void 0 === qq.nan ? "NaN" : qq.nan + "";

      function Bq(qq, Eq) {
        var gq = (qq = fE(qq)).fill,
          Bq = qq.align,
          Wq = qq.sign,
          Nq = qq.symbol,
          aq = qq.zero,
          Vq = qq.width,
          dq = qq.comma,
          jq = qq.precision,
          Hq = qq.trim,
          oq = qq.type;
        "n" === oq ? (dq = !0, oq = "g") : pE[oq] || (void 0 === jq && (jq = 12), Hq = !0, oq = "g"), (aq || "0" === gq && "=" === Bq) && (aq = !0, gq = "0", Bq = "=");
        var Pq = (Eq && void 0 !== Eq.prefix ? Eq.prefix : "") + ("$" === Nq ? lq : "#" === Nq && /[boxX]/.test(oq) ? "0" + oq.toLowerCase() : ""),
          Qq = ("$" === Nq ? Oq : /[%p]/.test(oq) ? Aq : "") + (Eq && void 0 !== Eq.suffix ? Eq.suffix : ""),
          yq = pE[oq],
          tq = /[defgprs%]/.test(oq);

        function rq(qq) {
          var Eq, lq, Oq, Aq = Pq,
            Nq = Qq;
          if ("c" === oq) Nq = yq(qq) + Nq, qq = "";
          else {
            var rq = (qq = +qq) < 0 || 1 / qq < 0;
            if (qq = isNaN(qq) ? uq : yq(Math.abs(qq), jq), Hq && (qq = function(qq) {
                qq: for (var Eq, gq = qq.length, Yq = 1, lq = -1; Yq < gq; ++Yq) switch (qq[Yq]) {
                  case ".":
                    lq = Eq = Yq;
                    break;
                  case "0":
                    0 === lq && (lq = Yq), Eq = Yq;
                    break;
                  default:
                    if (!+qq[Yq]) break qq;
                    lq > 0 && (lq = 0)
                }
                return lq > 0 ? qq.slice(0, lq) + qq.slice(Eq + 1) : qq
              }(qq)), rq && 0 === +qq && "+" !== Wq && (rq = !1), Aq = (rq ? "(" === Wq ? Wq : cq : "-" === Wq || "(" === Wq ? "" : Wq) + Aq, Nq = ("s" !== oq || isNaN(qq) || void 0 === bE ? "" : UE[8 + bE / 3]) + Nq + (rq && "(" === Wq ? ")" : ""), tq)
              for (Eq = -1, lq = qq.length; ++Eq < lq;)
                if (48 > (Oq = qq.charCodeAt(Eq)) || Oq > 57) {
                  Nq = (46 === Oq ? mq + qq.slice(Eq + 1) : qq.slice(Eq)) + Nq, qq = qq.slice(0, Eq);
                  break
                }
          }
          dq && !aq && (qq = Yq(qq, 1 / 0));
          var vq = Aq.length + qq.length + Nq.length,
            hq = vq < Vq ? new Array(Vq - vq + 1).join(gq) : "";
          switch (dq && aq && (qq = Yq(hq + qq, hq.length ? Vq - Nq.length : 1 / 0), hq = ""), Bq) {
            case "<":
              qq = Aq + qq + Nq + hq;
              break;
            case "=":
              qq = Aq + hq + qq + Nq;
              break;
            case "^":
              qq = hq.slice(0, vq = hq.length >> 1) + Aq + qq + Nq + hq.slice(vq);
              break;
            default:
              qq = hq + Aq + qq + Nq
          }
          return xq(qq)
        }
        return jq = void 0 === jq ? 6 : /[gprs]/.test(oq) ? Math.max(1, Math.min(21, jq)) : Math.max(0, Math.min(20, jq)), rq.toString = function() {
          return qq + ""
        }, rq
      }
      return {
        format: Bq,
        formatPrefix: function(qq, Eq) {
          var gq = 3 * Math.max(-8, Math.min(8, Math.floor(zE(Eq) / 3))),
            Yq = Math.pow(10, -gq),
            lq = Bq(((qq = fE(qq)).type = "f", qq), {
              suffix: UE[8 + gq / 3]
            });
          return function(qq) {
            return lq(Yq * qq)
          }
        }
      }
    }

    function sE(qq, Eq, gq, Yq) {
      var lq, Oq = Bq(qq, Eq, gq);
      switch ((Yq = fE(null == Yq ? ",f" : Yq)).type) {
        case "s":
          var mq = Math.max(Math.abs(qq), Math.abs(Eq));
          return null != Yq.precision || isNaN(lq = function(qq, Eq) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(zE(Eq) / 3))) - zE(Math.abs(qq)))
          }(Oq, mq)) || (Yq.precision = lq), kE(Yq, mq);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != Yq.precision || isNaN(lq = function(qq, Eq) {
            return qq = Math.abs(qq), Eq = Math.abs(Eq) - qq, Math.max(0, zE(Eq) - zE(qq)) + 1
          }(Oq, Math.max(Math.abs(qq), Math.abs(Eq)))) || (Yq.precision = lq - ("e" === Yq.type));
          break;
        case "f":
        case "%":
          null != Yq.precision || isNaN(lq = function(qq) {
            return Math.max(0, -zE(Math.abs(qq)))
          }(Oq)) || (Yq.precision = lq - 2 * ("%" === Yq.type))
      }
      return JE(Yq)
    }

    function XE(qq) {
      var Eq = qq.domain;
      return qq.ticks = function(qq) {
        var gq = Eq();
        return cq(gq[0], gq[gq.length - 1], null == qq ? 10 : qq)
      }, qq.tickFormat = function(qq, gq) {
        var Yq = Eq();
        return sE(Yq[0], Yq[Yq.length - 1], null == qq ? 10 : qq, gq)
      }, qq.nice = function(gq) {
        null == gq && (gq = 10);
        var Yq, lq, Oq = Eq(),
          mq = 0,
          xq = Oq.length - 1,
          Aq = Oq[mq],
          cq = Oq[xq],
          Bq = 10;
        for (cq < Aq && (lq = Aq, Aq = cq, cq = lq, lq = mq, mq = xq, xq = lq); Bq-- > 0;) {
          if ((lq = uq(Aq, cq, gq)) === Yq) return Oq[mq] = Aq, Oq[xq] = cq, Eq(Oq);
          if (lq > 0) Aq = Math.floor(Aq / lq) * lq, cq = Math.ceil(cq / lq) * lq;
          else {
            if (!(lq < 0)) break;
            Aq = Math.ceil(Aq * lq) / lq, cq = Math.floor(cq * lq) / lq
          }
          Yq = lq
        }
        return qq
      }, qq
    }

    function wE() {
      var qq = nE();
      return qq.copy = function() {
        return vE(qq, wE())
      }, iE.e.apply(qq, arguments), XE(qq)
    }

    function KE(qq) {
      var Eq;

      function gq(qq) {
        return null == qq || isNaN(qq = +qq) ? Eq : qq
      }
      return gq.invert = gq, gq.domain = gq.range = function(Eq) {
        return arguments.length ? (qq = Array.from(Eq, oE), gq) : qq.slice()
      }, gq.unknown = function(qq) {
        return arguments.length ? (Eq = qq, gq) : Eq
      }, gq.copy = function() {
        return KE(qq).unknown(Eq)
      }, qq = arguments.length ? Array.from(qq, oE) : [0, 1], XE(gq)
    }

    function CE(qq, Eq) {
      var gq, Yq = 0,
        lq = (qq = qq.slice()).length - 1,
        Oq = qq[Yq],
        mq = qq[lq];
      return mq < Oq && (gq = Yq, Yq = lq, lq = gq, gq = Oq, Oq = mq, mq = gq), qq[Yq] = Eq.floor(Oq), qq[lq] = Eq.ceil(mq), qq
    }

    function IE(qq) {
      return Math.log(qq)
    }

    function eE(qq) {
      return Math.exp(qq)
    }

    function DE(qq) {
      return -Math.log(-qq)
    }

    function qg(qq) {
      return -Math.exp(-qq)
    }

    function Eg(qq) {
      return isFinite(qq) ? +("1e" + qq) : qq < 0 ? 0 : qq
    }

    function gg(qq) {
      return (Eq, gq) => -qq(-Eq, gq)
    }

    function Yg(qq) {
      const Eq = qq(IE, eE),
        gq = Eq.domain;
      let Yq, lq, Oq = 10;

      function mq() {
        return Yq = function(qq) {
          return qq === Math.E ? Math.log : 10 === qq && Math.log10 || 2 === qq && Math.log2 || (qq = Math.log(qq), Eq => Math.log(Eq) / qq)
        }(Oq), lq = function(qq) {
          return 10 === qq ? Eg : qq === Math.E ? Math.exp : Eq => Math.pow(qq, Eq)
        }(Oq), gq()[0] < 0 ? (Yq = gg(Yq), lq = gg(lq), qq(DE, qg)) : qq(IE, eE), Eq
      }
      return Eq.base = function(qq) {
        return arguments.length ? (Oq = +qq, mq()) : Oq
      }, Eq.domain = function(qq) {
        return arguments.length ? (gq(qq), mq()) : gq()
      }, Eq.ticks = qq => {
        const Eq = gq();
        let mq = Eq[0],
          xq = Eq[Eq.length - 1];
        const Aq = xq < mq;
        Aq && ([mq, xq] = [xq, mq]);
        let uq, Bq, Wq = Yq(mq),
          Nq = Yq(xq);
        const aq = null == qq ? 10 : +qq;
        let Vq = [];
        if (!(Oq % 1) && Nq - Wq < aq) {
          if (Wq = Math.floor(Wq), Nq = Math.ceil(Nq), mq > 0) {
            for (; Wq <= Nq; ++Wq)
              for (uq = 1; uq < Oq; ++uq)
                if (Bq = Wq < 0 ? uq / lq(-Wq) : uq * lq(Wq), !(Bq < mq)) {
                  if (Bq > xq) break;
                  Vq.push(Bq)
                }
          } else
            for (; Wq <= Nq; ++Wq)
              for (uq = Oq - 1; uq >= 1; --uq)
                if (Bq = Wq > 0 ? uq / lq(-Wq) : uq * lq(Wq), !(Bq < mq)) {
                  if (Bq > xq) break;
                  Vq.push(Bq)
                } 2 * Vq.length < aq && (Vq = cq(mq, xq, aq))
        } else Vq = cq(Wq, Nq, Math.min(Nq - Wq, aq)).map(lq);
        return Aq ? Vq.reverse() : Vq
      }, Eq.tickFormat = (qq, gq) => {
        if (null == qq && (qq = 10), null == gq && (gq = 10 === Oq ? "s" : ","), "function" !== typeof gq && (Oq % 1 || null != (gq = fE(gq)).precision || (gq.trim = !0), gq = JE(gq)), qq === 1 / 0) return gq;
        const mq = Math.max(1, Oq * qq / Eq.ticks().length);
        return qq => {
          let Eq = qq / lq(Math.round(Yq(qq)));
          return Eq * Oq < Oq - .5 && (Eq *= Oq), Eq <= mq ? gq(qq) : ""
        }
      }, Eq.nice = () => gq(CE(gq(), {
        floor: qq => lq(Math.floor(Yq(qq))),
        ceil: qq => lq(Math.ceil(Yq(qq)))
      })), Eq
    }

    function lg() {
      const qq = Yg(hE()).domain([1, 10]);
      return qq.copy = () => vE(qq, lg()).base(qq.base()), iE.e.apply(qq, arguments), qq
    }

    function Og(qq) {
      return function(Eq) {
        return Math.sign(Eq) * Math.log1p(Math.abs(Eq / qq))
      }
    }

    function mg(qq) {
      return function(Eq) {
        return Math.sign(Eq) * Math.expm1(Math.abs(Eq)) * qq
      }
    }

    function xg(qq) {
      var Eq = 1,
        gq = qq(Og(Eq), mg(Eq));
      return gq.constant = function(gq) {
        return arguments.length ? qq(Og(Eq = +gq), mg(Eq)) : Eq
      }, XE(gq)
    }

    function Ag() {
      var qq = xg(hE());
      return qq.copy = function() {
        return vE(qq, Ag()).constant(qq.constant())
      }, iE.e.apply(qq, arguments)
    }
    LE = FE({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), JE = LE.format, kE = LE.formatPrefix;
    var cg = gq(6025);

    function ug(qq) {
      return function(Eq) {
        return Eq < 0 ? -Math.pow(-Eq, qq) : Math.pow(Eq, qq)
      }
    }

    function Bg(qq) {
      return qq < 0 ? -Math.sqrt(-qq) : Math.sqrt(qq)
    }

    function Wg(qq) {
      return qq < 0 ? -qq * qq : qq * qq
    }

    function Ng(qq) {
      var Eq = qq(QE, QE),
        gq = 1;
      return Eq.exponent = function(Eq) {
        return arguments.length ? 1 === (gq = +Eq) ? qq(QE, QE) : .5 === gq ? qq(Bg, Wg) : qq(ug(gq), ug(1 / gq)) : gq
      }, XE(Eq)
    }

    function ag() {
      var qq = Ng(hE());
      return qq.copy = function() {
        return vE(qq, ag()).exponent(qq.exponent())
      }, iE.e.apply(qq, arguments), qq
    }

    function Vg() {
      return ag.apply(null, arguments).exponent(.5)
    }

    function dg(qq) {
      return Math.sign(qq) * qq * qq
    }

    function jg() {
      var qq, Eq = nE(),
        gq = [0, 1],
        Yq = !1;

      function lq(gq) {
        var lq = function(qq) {
          return Math.sign(qq) * Math.sqrt(Math.abs(qq))
        }(Eq(gq));
        return isNaN(lq) ? qq : Yq ? Math.round(lq) : lq
      }
      return lq.invert = function(qq) {
        return Eq.invert(dg(qq))
      }, lq.domain = function(qq) {
        return arguments.length ? (Eq.domain(qq), lq) : Eq.domain()
      }, lq.range = function(qq) {
        return arguments.length ? (Eq.range((gq = Array.from(qq, oE)).map(dg)), lq) : gq.slice()
      }, lq.rangeRound = function(qq) {
        return lq.range(qq).round(!0)
      }, lq.round = function(qq) {
        return arguments.length ? (Yq = !!qq, lq) : Yq
      }, lq.clamp = function(qq) {
        return arguments.length ? (Eq.clamp(qq), lq) : Eq.clamp()
      }, lq.unknown = function(Eq) {
        return arguments.length ? (qq = Eq, lq) : qq
      }, lq.copy = function() {
        return jg(Eq.domain(), gq).round(Yq).clamp(Eq.clamp()).unknown(qq)
      }, iE.e.apply(lq, arguments), XE(lq)
    }

    function Hg(qq, Eq) {
      let gq;
      if (void 0 === Eq)
        for (const Yq of qq) null != Yq && (gq < Yq || void 0 === gq && Yq >= Yq) && (gq = Yq);
      else {
        let Yq = -1;
        for (let lq of qq) null != (lq = Eq(lq, ++Yq, qq)) && (gq < lq || void 0 === gq && lq >= lq) && (gq = lq)
      }
      return gq
    }

    function og(qq, Eq) {
      let gq;
      if (void 0 === Eq)
        for (const Yq of qq) null != Yq && (gq > Yq || void 0 === gq && Yq >= Yq) && (gq = Yq);
      else {
        let Yq = -1;
        for (let lq of qq) null != (lq = Eq(lq, ++Yq, qq)) && (gq > lq || void 0 === gq && lq >= lq) && (gq = lq)
      }
      return gq
    }

    function Pg() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wq;
      if (qq === Wq) return Qg;
      if ("function" !== typeof qq) throw new TypeError("compare is not a function");
      return (Eq, gq) => {
        const Yq = qq(Eq, gq);
        return Yq || 0 === Yq ? Yq : (0 === qq(gq, gq)) - (0 === qq(Eq, Eq))
      }
    }

    function Qg(qq, Eq) {
      return (null == qq || !(qq >= qq)) - (null == Eq || !(Eq >= Eq)) || (qq < Eq ? -1 : qq > Eq ? 1 : 0)
    }

    function yg(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        lq = arguments.length > 4 ? arguments[4] : void 0;
      if (Eq = Math.floor(Eq), gq = Math.floor(Math.max(0, gq)), Yq = Math.floor(Math.min(qq.length - 1, Yq)), !(gq <= Eq && Eq <= Yq)) return qq;
      for (lq = void 0 === lq ? Qg : Pg(lq); Yq > gq;) {
        if (Yq - gq > 600) {
          const Oq = Yq - gq + 1,
            mq = Eq - gq + 1,
            xq = Math.log(Oq),
            Aq = .5 * Math.exp(2 * xq / 3),
            cq = .5 * Math.sqrt(xq * Aq * (Oq - Aq) / Oq) * (mq - Oq / 2 < 0 ? -1 : 1);
          yg(qq, Eq, Math.max(gq, Math.floor(Eq - mq * Aq / Oq + cq)), Math.min(Yq, Math.floor(Eq + (Oq - mq) * Aq / Oq + cq)), lq)
        }
        const Oq = qq[Eq];
        let mq = gq,
          xq = Yq;
        for (tg(qq, gq, Eq), lq(qq[Yq], Oq) > 0 && tg(qq, gq, Yq); mq < xq;) {
          for (tg(qq, mq, xq), ++mq, --xq; lq(qq[mq], Oq) < 0;) ++mq;
          for (; lq(qq[xq], Oq) > 0;) --xq
        }
        0 === lq(qq[gq], Oq) ? tg(qq, gq, xq) : (++xq, tg(qq, xq, Yq)), xq <= Eq && (gq = xq + 1), Eq <= xq && (Yq = xq - 1)
      }
      return qq
    }

    function tg(qq, Eq, gq) {
      const Yq = qq[Eq];
      qq[Eq] = qq[gq], qq[gq] = Yq
    }

    function rg(qq, Eq, gq) {
      if (qq = Float64Array.from(function*(qq, Eq) {
          if (void 0 === Eq)
            for (let gq of qq) null != gq && (gq = +gq) >= gq && (yield gq);
          else {
            let gq = -1;
            for (let Yq of qq) null != (Yq = Eq(Yq, ++gq, qq)) && (Yq = +Yq) >= Yq && (yield Yq)
          }
        }(qq, gq)), (Yq = qq.length) && !isNaN(Eq = +Eq)) {
        if (Eq <= 0 || Yq < 2) return og(qq);
        if (Eq >= 1) return Hg(qq);
        var Yq, lq = (Yq - 1) * Eq,
          Oq = Math.floor(lq),
          mq = Hg(yg(qq, Oq).subarray(0, Oq + 1));
        return mq + (og(qq.subarray(Oq + 1)) - mq) * (lq - Oq)
      }
    }

    function vg(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dq;
      if ((Yq = qq.length) && !isNaN(Eq = +Eq)) {
        if (Eq <= 0 || Yq < 2) return +gq(qq[0], 0, qq);
        if (Eq >= 1) return +gq(qq[Yq - 1], Yq - 1, qq);
        var Yq, lq = (Yq - 1) * Eq,
          Oq = Math.floor(lq),
          mq = +gq(qq[Oq], Oq, qq);
        return mq + (+gq(qq[Oq + 1], Oq + 1, qq) - mq) * (lq - Oq)
      }
    }

    function hg() {
      var qq, Eq = [],
        gq = [],
        Yq = [];

      function lq() {
        var qq = 0,
          lq = Math.max(1, gq.length);
        for (Yq = new Array(lq - 1); ++qq < lq;) Yq[qq - 1] = vg(Eq, qq / lq);
        return Oq
      }

      function Oq(Eq) {
        return null == Eq || isNaN(Eq = +Eq) ? qq : gq[oq(Yq, Eq)]
      }
      return Oq.invertExtent = function(qq) {
        var lq = gq.indexOf(qq);
        return lq < 0 ? [NaN, NaN] : [lq > 0 ? Yq[lq - 1] : Eq[0], lq < Yq.length ? Yq[lq] : Eq[Eq.length - 1]]
      }, Oq.domain = function(qq) {
        if (!arguments.length) return Eq.slice();
        Eq = [];
        for (let gq of qq) null == gq || isNaN(gq = +gq) || Eq.push(gq);
        return Eq.sort(Wq), lq()
      }, Oq.range = function(qq) {
        return arguments.length ? (gq = Array.from(qq), lq()) : gq.slice()
      }, Oq.unknown = function(Eq) {
        return arguments.length ? (qq = Eq, Oq) : qq
      }, Oq.quantiles = function() {
        return Yq.slice()
      }, Oq.copy = function() {
        return hg().domain(Eq).range(gq).unknown(qq)
      }, iE.e.apply(Oq, arguments)
    }

    function ng() {
      var qq, Eq = 0,
        gq = 1,
        Yq = 1,
        lq = [.5],
        Oq = [0, 1];

      function mq(Eq) {
        return null != Eq && Eq <= Eq ? Oq[oq(lq, Eq, 0, Yq)] : qq
      }

      function xq() {
        var qq = -1;
        for (lq = new Array(Yq); ++qq < Yq;) lq[qq] = ((qq + 1) * gq - (qq - Yq) * Eq) / (Yq + 1);
        return mq
      }
      return mq.domain = function(qq) {
        return arguments.length ? ([Eq, gq] = qq, Eq = +Eq, gq = +gq, xq()) : [Eq, gq]
      }, mq.range = function(qq) {
        return arguments.length ? (Yq = (Oq = Array.from(qq)).length - 1, xq()) : Oq.slice()
      }, mq.invertExtent = function(qq) {
        var mq = Oq.indexOf(qq);
        return mq < 0 ? [NaN, NaN] : mq < 1 ? [Eq, lq[0]] : mq >= Yq ? [lq[Yq - 1], gq] : [lq[mq - 1], lq[mq]]
      }, mq.unknown = function(Eq) {
        return arguments.length ? (qq = Eq, mq) : mq
      }, mq.thresholds = function() {
        return lq.slice()
      }, mq.copy = function() {
        return ng().domain([Eq, gq]).range(Oq).unknown(qq)
      }, iE.e.apply(XE(mq), arguments)
    }

    function bg() {
      var qq, Eq = [.5],
        gq = [0, 1],
        Yq = 1;

      function lq(lq) {
        return null != lq && lq <= lq ? gq[oq(Eq, lq, 0, Yq)] : qq
      }
      return lq.domain = function(qq) {
        return arguments.length ? (Eq = Array.from(qq), Yq = Math.min(Eq.length, gq.length - 1), lq) : Eq.slice()
      }, lq.range = function(qq) {
        return arguments.length ? (gq = Array.from(qq), Yq = Math.min(Eq.length, gq.length - 1), lq) : gq.slice()
      }, lq.invertExtent = function(qq) {
        var Yq = gq.indexOf(qq);
        return [Eq[Yq - 1], Eq[Yq]]
      }, lq.unknown = function(Eq) {
        return arguments.length ? (qq = Eq, lq) : qq
      }, lq.copy = function() {
        return bg().domain(Eq).range(gq).unknown(qq)
      }, iE.e.apply(lq, arguments)
    }
    const ig = 1e3,
      Zg = 6e4,
      fg = 36e5,
      Mg = 864e5,
      Tg = 6048e5,
      zg = 2592e6,
      Sg = 31536e6,
      pg = new Date,
      Gg = new Date;

    function Lg(qq, Eq, gq, Yq) {
      function lq(Eq) {
        return qq(Eq = 0 === arguments.length ? new Date : new Date(+Eq)), Eq
      }
      return lq.floor = Eq => (qq(Eq = new Date(+Eq)), Eq), lq.ceil = gq => (qq(gq = new Date(gq - 1)), Eq(gq, 1), qq(gq), gq), lq.round = qq => {
        const Eq = lq(qq),
          gq = lq.ceil(qq);
        return qq - Eq < gq - qq ? Eq : gq
      }, lq.offset = (qq, gq) => (Eq(qq = new Date(+qq), null == gq ? 1 : Math.floor(gq)), qq), lq.range = (gq, Yq, Oq) => {
        const mq = [];
        if (gq = lq.ceil(gq), Oq = null == Oq ? 1 : Math.floor(Oq), !(gq < Yq) || !(Oq > 0)) return mq;
        let xq;
        do {
          mq.push(xq = new Date(+gq)), Eq(gq, Oq), qq(gq)
        } while (xq < gq && gq < Yq);
        return mq
      }, lq.filter = gq => Lg((Eq => {
        if (Eq >= Eq)
          for (; qq(Eq), !gq(Eq);) Eq.setTime(Eq - 1)
      }), ((qq, Yq) => {
        if (qq >= qq)
          if (Yq < 0)
            for (; ++Yq <= 0;)
              for (; Eq(qq, -1), !gq(qq););
          else
            for (; --Yq >= 0;)
              for (; Eq(qq, 1), !gq(qq););
      })), gq && (lq.count = (Eq, Yq) => (pg.setTime(+Eq), Gg.setTime(+Yq), qq(pg), qq(Gg), Math.floor(gq(pg, Gg))), lq.every = qq => (qq = Math.floor(qq), isFinite(qq) && qq > 0 ? qq > 1 ? lq.filter(Yq ? Eq => Yq(Eq) % qq === 0 : Eq => lq.count(0, Eq) % qq === 0) : lq : null)), lq
    }
    const Jg = Lg((() => {}), ((qq, Eq) => {
      qq.setTime(+qq + Eq)
    }), ((qq, Eq) => Eq - qq));
    Jg.every = qq => (qq = Math.floor(qq), isFinite(qq) && qq > 0 ? qq > 1 ? Lg((Eq => {
      Eq.setTime(Math.floor(Eq / qq) * qq)
    }), ((Eq, gq) => {
      Eq.setTime(+Eq + gq * qq)
    }), ((Eq, gq) => (gq - Eq) / qq)) : Jg : null);
    Jg.range;
    const kg = Lg((qq => {
        qq.setTime(qq - qq.getMilliseconds())
      }), ((qq, Eq) => {
        qq.setTime(+qq + Eq * ig)
      }), ((qq, Eq) => (Eq - qq) / ig), (qq => qq.getUTCSeconds())),
      Rg = (kg.range, Lg((qq => {
        qq.setTime(qq - qq.getMilliseconds() - qq.getSeconds() * ig)
      }), ((qq, Eq) => {
        qq.setTime(+qq + Eq * Zg)
      }), ((qq, Eq) => (Eq - qq) / Zg), (qq => qq.getMinutes()))),
      Ug = (Rg.range, Lg((qq => {
        qq.setUTCSeconds(0, 0)
      }), ((qq, Eq) => {
        qq.setTime(+qq + Eq * Zg)
      }), ((qq, Eq) => (Eq - qq) / Zg), (qq => qq.getUTCMinutes()))),
      Fg = (Ug.range, Lg((qq => {
        qq.setTime(qq - qq.getMilliseconds() - qq.getSeconds() * ig - qq.getMinutes() * Zg)
      }), ((qq, Eq) => {
        qq.setTime(+qq + Eq * fg)
      }), ((qq, Eq) => (Eq - qq) / fg), (qq => qq.getHours()))),
      sg = (Fg.range, Lg((qq => {
        qq.setUTCMinutes(0, 0, 0)
      }), ((qq, Eq) => {
        qq.setTime(+qq + Eq * fg)
      }), ((qq, Eq) => (Eq - qq) / fg), (qq => qq.getUTCHours()))),
      Xg = (sg.range, Lg((qq => qq.setHours(0, 0, 0, 0)), ((qq, Eq) => qq.setDate(qq.getDate() + Eq)), ((qq, Eq) => (Eq - qq - (Eq.getTimezoneOffset() - qq.getTimezoneOffset()) * Zg) / Mg), (qq => qq.getDate() - 1))),
      wg = (Xg.range, Lg((qq => {
        qq.setUTCHours(0, 0, 0, 0)
      }), ((qq, Eq) => {
        qq.setUTCDate(qq.getUTCDate() + Eq)
      }), ((qq, Eq) => (Eq - qq) / Mg), (qq => qq.getUTCDate() - 1))),
      Kg = (wg.range, Lg((qq => {
        qq.setUTCHours(0, 0, 0, 0)
      }), ((qq, Eq) => {
        qq.setUTCDate(qq.getUTCDate() + Eq)
      }), ((qq, Eq) => (Eq - qq) / Mg), (qq => Math.floor(qq / Mg))));
    Kg.range;

    function Cg(qq) {
      return Lg((Eq => {
        Eq.setDate(Eq.getDate() - (Eq.getDay() + 7 - qq) % 7), Eq.setHours(0, 0, 0, 0)
      }), ((qq, Eq) => {
        qq.setDate(qq.getDate() + 7 * Eq)
      }), ((qq, Eq) => (Eq - qq - (Eq.getTimezoneOffset() - qq.getTimezoneOffset()) * Zg) / Tg))
    }
    const Ig = Cg(0),
      eg = Cg(1),
      Dg = Cg(2),
      qY = Cg(3),
      EY = Cg(4),
      gY = Cg(5),
      YY = Cg(6);
    Ig.range, eg.range, Dg.range, qY.range, EY.range, gY.range, YY.range;

    function lY(qq) {
      return Lg((Eq => {
        Eq.setUTCDate(Eq.getUTCDate() - (Eq.getUTCDay() + 7 - qq) % 7), Eq.setUTCHours(0, 0, 0, 0)
      }), ((qq, Eq) => {
        qq.setUTCDate(qq.getUTCDate() + 7 * Eq)
      }), ((qq, Eq) => (Eq - qq) / Tg))
    }
    const OY = lY(0),
      mY = lY(1),
      xY = lY(2),
      AY = lY(3),
      cY = lY(4),
      uY = lY(5),
      BY = lY(6),
      WY = (OY.range, mY.range, xY.range, AY.range, cY.range, uY.range, BY.range, Lg((qq => {
        qq.setDate(1), qq.setHours(0, 0, 0, 0)
      }), ((qq, Eq) => {
        qq.setMonth(qq.getMonth() + Eq)
      }), ((qq, Eq) => Eq.getMonth() - qq.getMonth() + 12 * (Eq.getFullYear() - qq.getFullYear())), (qq => qq.getMonth()))),
      NY = (WY.range, Lg((qq => {
        qq.setUTCDate(1), qq.setUTCHours(0, 0, 0, 0)
      }), ((qq, Eq) => {
        qq.setUTCMonth(qq.getUTCMonth() + Eq)
      }), ((qq, Eq) => Eq.getUTCMonth() - qq.getUTCMonth() + 12 * (Eq.getUTCFullYear() - qq.getUTCFullYear())), (qq => qq.getUTCMonth()))),
      aY = (NY.range, Lg((qq => {
        qq.setMonth(0, 1), qq.setHours(0, 0, 0, 0)
      }), ((qq, Eq) => {
        qq.setFullYear(qq.getFullYear() + Eq)
      }), ((qq, Eq) => Eq.getFullYear() - qq.getFullYear()), (qq => qq.getFullYear())));
    aY.every = qq => isFinite(qq = Math.floor(qq)) && qq > 0 ? Lg((Eq => {
      Eq.setFullYear(Math.floor(Eq.getFullYear() / qq) * qq), Eq.setMonth(0, 1), Eq.setHours(0, 0, 0, 0)
    }), ((Eq, gq) => {
      Eq.setFullYear(Eq.getFullYear() + gq * qq)
    })) : null;
    aY.range;
    const VY = Lg((qq => {
      qq.setUTCMonth(0, 1), qq.setUTCHours(0, 0, 0, 0)
    }), ((qq, Eq) => {
      qq.setUTCFullYear(qq.getUTCFullYear() + Eq)
    }), ((qq, Eq) => Eq.getUTCFullYear() - qq.getUTCFullYear()), (qq => qq.getUTCFullYear()));
    VY.every = qq => isFinite(qq = Math.floor(qq)) && qq > 0 ? Lg((Eq => {
      Eq.setUTCFullYear(Math.floor(Eq.getUTCFullYear() / qq) * qq), Eq.setUTCMonth(0, 1), Eq.setUTCHours(0, 0, 0, 0)
    }), ((Eq, gq) => {
      Eq.setUTCFullYear(Eq.getUTCFullYear() + gq * qq)
    })) : null;
    VY.range;

    function dY(qq, Eq, gq, Yq, lq, Oq) {
      const mq = [
        [kg, 1, ig],
        [kg, 5, 5e3],
        [kg, 15, 15e3],
        [kg, 30, 3e4],
        [Oq, 1, Zg],
        [Oq, 5, 3e5],
        [Oq, 15, 9e5],
        [Oq, 30, 18e5],
        [lq, 1, fg],
        [lq, 3, 108e5],
        [lq, 6, 216e5],
        [lq, 12, 432e5],
        [Yq, 1, Mg],
        [Yq, 2, 1728e5],
        [gq, 1, Tg],
        [Eq, 1, zg],
        [Eq, 3, 7776e6],
        [qq, 1, Sg]
      ];

      function xq(Eq, gq, Yq) {
        const lq = Math.abs(gq - Eq) / Yq,
          Oq = aq((qq => {
            let [, , Eq] = qq;
            return Eq
          })).right(mq, lq);
        if (Oq === mq.length) return qq.every(Bq(Eq / Sg, gq / Sg, Yq));
        if (0 === Oq) return Jg.every(Math.max(Bq(Eq, gq, Yq), 1));
        const [xq, Aq] = mq[lq / mq[Oq - 1][2] < mq[Oq][2] / lq ? Oq - 1 : Oq];
        return xq.every(Aq)
      }
      return [function(qq, Eq, gq) {
        const Yq = Eq < qq;
        Yq && ([qq, Eq] = [Eq, qq]);
        const lq = gq && "function" === typeof gq.range ? gq : xq(qq, Eq, gq),
          Oq = lq ? lq.range(qq, +Eq + 1) : [];
        return Yq ? Oq.reverse() : Oq
      }, xq]
    }
    const [jY, HY] = dY(VY, NY, OY, Kg, sg, Ug), [oY, PY] = dY(aY, WY, Ig, Xg, Fg, Rg);

    function QY(qq) {
      if (0 <= qq.y && qq.y < 100) {
        var Eq = new Date(-1, qq.m, qq.d, qq.H, qq.M, qq.S, qq.L);
        return Eq.setFullYear(qq.y), Eq
      }
      return new Date(qq.y, qq.m, qq.d, qq.H, qq.M, qq.S, qq.L)
    }

    function yY(qq) {
      if (0 <= qq.y && qq.y < 100) {
        var Eq = new Date(Date.UTC(-1, qq.m, qq.d, qq.H, qq.M, qq.S, qq.L));
        return Eq.setUTCFullYear(qq.y), Eq
      }
      return new Date(Date.UTC(qq.y, qq.m, qq.d, qq.H, qq.M, qq.S, qq.L))
    }

    function tY(qq, Eq, gq) {
      return {
        y: qq,
        m: Eq,
        d: gq,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var rY, vY, hY, nY = {
        "-": "",
        _: " ",
        0: "0"
      },
      bY = /^\s*\d+/,
      iY = /^%/,
      ZY = /[\\^$*+?|[\]().{}]/g;

    function fY(qq, Eq, gq) {
      var Yq = qq < 0 ? "-" : "",
        lq = (Yq ? -qq : qq) + "",
        Oq = lq.length;
      return Yq + (Oq < gq ? new Array(gq - Oq + 1).join(Eq) + lq : lq)
    }

    function MY(qq) {
      return qq.replace(ZY, "\\$&")
    }

    function TY(qq) {
      return new RegExp("^(?:" + qq.map(MY).join("|") + ")", "i")
    }

    function zY(qq) {
      return new Map(qq.map(((qq, Eq) => [qq.toLowerCase(), Eq])))
    }

    function SY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 1));
      return Yq ? (qq.w = +Yq[0], gq + Yq[0].length) : -1
    }

    function pY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 1));
      return Yq ? (qq.u = +Yq[0], gq + Yq[0].length) : -1
    }

    function GY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.U = +Yq[0], gq + Yq[0].length) : -1
    }

    function LY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.V = +Yq[0], gq + Yq[0].length) : -1
    }

    function JY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.W = +Yq[0], gq + Yq[0].length) : -1
    }

    function kY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 4));
      return Yq ? (qq.y = +Yq[0], gq + Yq[0].length) : -1
    }

    function RY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.y = +Yq[0] + (+Yq[0] > 68 ? 1900 : 2e3), gq + Yq[0].length) : -1
    }

    function UY(qq, Eq, gq) {
      var Yq = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(Eq.slice(gq, gq + 6));
      return Yq ? (qq.Z = Yq[1] ? 0 : -(Yq[2] + (Yq[3] || "00")), gq + Yq[0].length) : -1
    }

    function FY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 1));
      return Yq ? (qq.q = 3 * Yq[0] - 3, gq + Yq[0].length) : -1
    }

    function sY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.m = Yq[0] - 1, gq + Yq[0].length) : -1
    }

    function XY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.d = +Yq[0], gq + Yq[0].length) : -1
    }

    function wY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 3));
      return Yq ? (qq.m = 0, qq.d = +Yq[0], gq + Yq[0].length) : -1
    }

    function KY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.H = +Yq[0], gq + Yq[0].length) : -1
    }

    function CY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.M = +Yq[0], gq + Yq[0].length) : -1
    }

    function IY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 2));
      return Yq ? (qq.S = +Yq[0], gq + Yq[0].length) : -1
    }

    function eY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 3));
      return Yq ? (qq.L = +Yq[0], gq + Yq[0].length) : -1
    }

    function DY(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq, gq + 6));
      return Yq ? (qq.L = Math.floor(Yq[0] / 1e3), gq + Yq[0].length) : -1
    }

    function ql(qq, Eq, gq) {
      var Yq = iY.exec(Eq.slice(gq, gq + 1));
      return Yq ? gq + Yq[0].length : -1
    }

    function El(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq));
      return Yq ? (qq.Q = +Yq[0], gq + Yq[0].length) : -1
    }

    function gl(qq, Eq, gq) {
      var Yq = bY.exec(Eq.slice(gq));
      return Yq ? (qq.s = +Yq[0], gq + Yq[0].length) : -1
    }

    function Yl(qq, Eq) {
      return fY(qq.getDate(), Eq, 2)
    }

    function ll(qq, Eq) {
      return fY(qq.getHours(), Eq, 2)
    }

    function Ol(qq, Eq) {
      return fY(qq.getHours() % 12 || 12, Eq, 2)
    }

    function ml(qq, Eq) {
      return fY(1 + Xg.count(aY(qq), qq), Eq, 3)
    }

    function xl(qq, Eq) {
      return fY(qq.getMilliseconds(), Eq, 3)
    }

    function Al(qq, Eq) {
      return xl(qq, Eq) + "000"
    }

    function cl(qq, Eq) {
      return fY(qq.getMonth() + 1, Eq, 2)
    }

    function ul(qq, Eq) {
      return fY(qq.getMinutes(), Eq, 2)
    }

    function Bl(qq, Eq) {
      return fY(qq.getSeconds(), Eq, 2)
    }

    function Wl(qq) {
      var Eq = qq.getDay();
      return 0 === Eq ? 7 : Eq
    }

    function Nl(qq, Eq) {
      return fY(Ig.count(aY(qq) - 1, qq), Eq, 2)
    }

    function al(qq) {
      var Eq = qq.getDay();
      return Eq >= 4 || 0 === Eq ? EY(qq) : EY.ceil(qq)
    }

    function Vl(qq, Eq) {
      return qq = al(qq), fY(EY.count(aY(qq), qq) + (4 === aY(qq).getDay()), Eq, 2)
    }

    function dl(qq) {
      return qq.getDay()
    }

    function jl(qq, Eq) {
      return fY(eg.count(aY(qq) - 1, qq), Eq, 2)
    }

    function Hl(qq, Eq) {
      return fY(qq.getFullYear() % 100, Eq, 2)
    }

    function ol(qq, Eq) {
      return fY((qq = al(qq)).getFullYear() % 100, Eq, 2)
    }

    function Pl(qq, Eq) {
      return fY(qq.getFullYear() % 1e4, Eq, 4)
    }

    function Ql(qq, Eq) {
      var gq = qq.getDay();
      return fY((qq = gq >= 4 || 0 === gq ? EY(qq) : EY.ceil(qq)).getFullYear() % 1e4, Eq, 4)
    }

    function yl(qq) {
      var Eq = qq.getTimezoneOffset();
      return (Eq > 0 ? "-" : (Eq *= -1, "+")) + fY(Eq / 60 | 0, "0", 2) + fY(Eq % 60, "0", 2)
    }

    function tl(qq, Eq) {
      return fY(qq.getUTCDate(), Eq, 2)
    }

    function rl(qq, Eq) {
      return fY(qq.getUTCHours(), Eq, 2)
    }

    function vl(qq, Eq) {
      return fY(qq.getUTCHours() % 12 || 12, Eq, 2)
    }

    function hl(qq, Eq) {
      return fY(1 + wg.count(VY(qq), qq), Eq, 3)
    }

    function nl(qq, Eq) {
      return fY(qq.getUTCMilliseconds(), Eq, 3)
    }

    function bl(qq, Eq) {
      return nl(qq, Eq) + "000"
    }

    function il(qq, Eq) {
      return fY(qq.getUTCMonth() + 1, Eq, 2)
    }

    function Zl(qq, Eq) {
      return fY(qq.getUTCMinutes(), Eq, 2)
    }

    function fl(qq, Eq) {
      return fY(qq.getUTCSeconds(), Eq, 2)
    }

    function Ml(qq) {
      var Eq = qq.getUTCDay();
      return 0 === Eq ? 7 : Eq
    }

    function Tl(qq, Eq) {
      return fY(OY.count(VY(qq) - 1, qq), Eq, 2)
    }

    function zl(qq) {
      var Eq = qq.getUTCDay();
      return Eq >= 4 || 0 === Eq ? cY(qq) : cY.ceil(qq)
    }

    function Sl(qq, Eq) {
      return qq = zl(qq), fY(cY.count(VY(qq), qq) + (4 === VY(qq).getUTCDay()), Eq, 2)
    }

    function pl(qq) {
      return qq.getUTCDay()
    }

    function Gl(qq, Eq) {
      return fY(mY.count(VY(qq) - 1, qq), Eq, 2)
    }

    function Ll(qq, Eq) {
      return fY(qq.getUTCFullYear() % 100, Eq, 2)
    }

    function Jl(qq, Eq) {
      return fY((qq = zl(qq)).getUTCFullYear() % 100, Eq, 2)
    }

    function kl(qq, Eq) {
      return fY(qq.getUTCFullYear() % 1e4, Eq, 4)
    }

    function Rl(qq, Eq) {
      var gq = qq.getUTCDay();
      return fY((qq = gq >= 4 || 0 === gq ? cY(qq) : cY.ceil(qq)).getUTCFullYear() % 1e4, Eq, 4)
    }

    function Ul() {
      return "+0000"
    }

    function Fl() {
      return "%"
    }

    function sl(qq) {
      return +qq
    }

    function Xl(qq) {
      return Math.floor(+qq / 1e3)
    }

    function wl(qq) {
      return new Date(qq)
    }

    function Kl(qq) {
      return qq instanceof Date ? +qq : +new Date(+qq)
    }

    function Cl(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
      var uq = nE(),
        Bq = uq.invert,
        Wq = uq.domain,
        Nq = cq(".%L"),
        aq = cq(":%S"),
        Vq = cq("%I:%M"),
        dq = cq("%I %p"),
        jq = cq("%a %d"),
        Hq = cq("%b %d"),
        oq = cq("%B"),
        Pq = cq("%Y");

      function Qq(qq) {
        return (Aq(qq) < qq ? Nq : xq(qq) < qq ? aq : mq(qq) < qq ? Vq : Oq(qq) < qq ? dq : Yq(qq) < qq ? lq(qq) < qq ? jq : Hq : gq(qq) < qq ? oq : Pq)(qq)
      }
      return uq.invert = function(qq) {
        return new Date(Bq(qq))
      }, uq.domain = function(qq) {
        return arguments.length ? Wq(Array.from(qq, Kl)) : Wq().map(wl)
      }, uq.ticks = function(Eq) {
        var gq = Wq();
        return qq(gq[0], gq[gq.length - 1], null == Eq ? 10 : Eq)
      }, uq.tickFormat = function(qq, Eq) {
        return null == Eq ? Qq : cq(Eq)
      }, uq.nice = function(qq) {
        var gq = Wq();
        return qq && "function" === typeof qq.range || (qq = Eq(gq[0], gq[gq.length - 1], null == qq ? 10 : qq)), qq ? Wq(CE(gq, qq)) : uq
      }, uq.copy = function() {
        return vE(uq, Cl(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq))
      }, uq
    }

    function Il() {
      return iE.e.apply(Cl(oY, PY, aY, WY, Ig, Xg, Fg, Rg, kg, vY).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function el() {
      return iE.e.apply(Cl(jY, HY, VY, NY, OY, wg, sg, Ug, kg, hY).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function Dl() {
      var qq, Eq, gq, Yq, lq, Oq = 0,
        mq = 1,
        xq = QE,
        Aq = !1;

      function cq(Eq) {
        return null == Eq || isNaN(Eq = +Eq) ? lq : xq(0 === gq ? .5 : (Eq = (Yq(Eq) - qq) * gq, Aq ? Math.max(0, Math.min(1, Eq)) : Eq))
      }

      function uq(qq) {
        return function(Eq) {
          var gq, Yq;
          return arguments.length ? ([gq, Yq] = Eq, xq = qq(gq, Yq), cq) : [xq(0), xq(1)]
        }
      }
      return cq.domain = function(lq) {
          return arguments.length ? ([Oq, mq] = lq, qq = Yq(Oq = +Oq), Eq = Yq(mq = +mq), gq = qq === Eq ? 0 : 1 / (Eq - qq), cq) : [Oq, mq]
        }, cq.clamp = function(qq) {
          return arguments.length ? (Aq = !!qq, cq) : Aq
        }, cq.interpolator = function(qq) {
          return arguments.length ? (xq = qq, cq) : xq
        }, cq.range = uq(jE), cq.rangeRound = uq(HE), cq.unknown = function(qq) {
          return arguments.length ? (lq = qq, cq) : lq
        },
        function(lq) {
          return Yq = lq, qq = lq(Oq), Eq = lq(mq), gq = qq === Eq ? 0 : 1 / (Eq - qq), cq
        }
    }

    function qO(qq, Eq) {
      return Eq.domain(qq.domain()).interpolator(qq.interpolator()).clamp(qq.clamp()).unknown(qq.unknown())
    }

    function EO() {
      var qq = XE(Dl()(QE));
      return qq.copy = function() {
        return qO(qq, EO())
      }, iE.c.apply(qq, arguments)
    }

    function gO() {
      var qq = Yg(Dl()).domain([1, 10]);
      return qq.copy = function() {
        return qO(qq, gO()).base(qq.base())
      }, iE.c.apply(qq, arguments)
    }

    function YO() {
      var qq = xg(Dl());
      return qq.copy = function() {
        return qO(qq, YO()).constant(qq.constant())
      }, iE.c.apply(qq, arguments)
    }

    function lO() {
      var qq = Ng(Dl());
      return qq.copy = function() {
        return qO(qq, lO()).exponent(qq.exponent())
      }, iE.c.apply(qq, arguments)
    }

    function OO() {
      return lO.apply(null, arguments).exponent(.5)
    }

    function mO() {
      var qq = [],
        Eq = QE;

      function gq(gq) {
        if (null != gq && !isNaN(gq = +gq)) return Eq((oq(qq, gq, 1) - 1) / (qq.length - 1))
      }
      return gq.domain = function(Eq) {
        if (!arguments.length) return qq.slice();
        qq = [];
        for (let gq of Eq) null == gq || isNaN(gq = +gq) || qq.push(gq);
        return qq.sort(Wq), gq
      }, gq.interpolator = function(qq) {
        return arguments.length ? (Eq = qq, gq) : Eq
      }, gq.range = function() {
        return qq.map(((gq, Yq) => Eq(Yq / (qq.length - 1))))
      }, gq.quantiles = function(Eq) {
        return Array.from({
          length: Eq + 1
        }, ((gq, Yq) => rg(qq, Yq / Eq)))
      }, gq.copy = function() {
        return mO(Eq).domain(qq)
      }, iE.c.apply(gq, arguments)
    }

    function xO() {
      var qq, Eq, gq, Yq, lq, Oq, mq, xq = 0,
        Aq = .5,
        cq = 1,
        uq = 1,
        Bq = QE,
        Wq = !1;

      function Nq(qq) {
        return isNaN(qq = +qq) ? mq : (qq = .5 + ((qq = +Oq(qq)) - Eq) * (uq * qq < uq * Eq ? Yq : lq), Bq(Wq ? Math.max(0, Math.min(1, qq)) : qq))
      }

      function aq(qq) {
        return function(Eq) {
          var gq, Yq, lq;
          return arguments.length ? ([gq, Yq, lq] = Eq, Bq = function(qq, Eq) {
            void 0 === Eq && (Eq = qq, qq = jE);
            for (var gq = 0, Yq = Eq.length - 1, lq = Eq[0], Oq = new Array(Yq < 0 ? 0 : Yq); gq < Yq;) Oq[gq] = qq(lq, lq = Eq[++gq]);
            return function(qq) {
              var Eq = Math.max(0, Math.min(Yq - 1, Math.floor(qq *= Yq)));
              return Oq[Eq](qq - Eq)
            }
          }(qq, [gq, Yq, lq]), Nq) : [Bq(0), Bq(.5), Bq(1)]
        }
      }
      return Nq.domain = function(mq) {
          return arguments.length ? ([xq, Aq, cq] = mq, qq = Oq(xq = +xq), Eq = Oq(Aq = +Aq), gq = Oq(cq = +cq), Yq = qq === Eq ? 0 : .5 / (Eq - qq), lq = Eq === gq ? 0 : .5 / (gq - Eq), uq = Eq < qq ? -1 : 1, Nq) : [xq, Aq, cq]
        }, Nq.clamp = function(qq) {
          return arguments.length ? (Wq = !!qq, Nq) : Wq
        }, Nq.interpolator = function(qq) {
          return arguments.length ? (Bq = qq, Nq) : Bq
        }, Nq.range = aq(jE), Nq.rangeRound = aq(HE), Nq.unknown = function(qq) {
          return arguments.length ? (mq = qq, Nq) : mq
        },
        function(mq) {
          return Oq = mq, qq = mq(xq), Eq = mq(Aq), gq = mq(cq), Yq = qq === Eq ? 0 : .5 / (Eq - qq), lq = Eq === gq ? 0 : .5 / (gq - Eq), uq = Eq < qq ? -1 : 1, Nq
        }
    }

    function AO() {
      var qq = XE(xO()(QE));
      return qq.copy = function() {
        return qO(qq, AO())
      }, iE.c.apply(qq, arguments)
    }

    function cO() {
      var qq = Yg(xO()).domain([.1, 1, 10]);
      return qq.copy = function() {
        return qO(qq, cO()).base(qq.base())
      }, iE.c.apply(qq, arguments)
    }

    function uO() {
      var qq = xg(xO());
      return qq.copy = function() {
        return qO(qq, uO()).constant(qq.constant())
      }, iE.c.apply(qq, arguments)
    }

    function BO() {
      var qq = Ng(xO());
      return qq.copy = function() {
        return qO(qq, BO()).exponent(qq.exponent())
      }, iE.c.apply(qq, arguments)
    }

    function WO() {
      return BO.apply(null, arguments).exponent(.5)
    }

    function NO(qq, Eq) {
      if ((lq = qq.length) > 1)
        for (var gq, Yq, lq, Oq = 1, mq = qq[Eq[0]], xq = mq.length; Oq < lq; ++Oq)
          for (Yq = mq, mq = qq[Eq[Oq]], gq = 0; gq < xq; ++gq) mq[gq][1] += mq[gq][0] = isNaN(Yq[gq][1]) ? Yq[gq][0] : Yq[gq][1]
    }! function(qq) {
      rY = function(qq) {
        var Eq = qq.dateTime,
          gq = qq.date,
          Yq = qq.time,
          lq = qq.periods,
          Oq = qq.days,
          mq = qq.shortDays,
          xq = qq.months,
          Aq = qq.shortMonths,
          cq = TY(lq),
          uq = zY(lq),
          Bq = TY(Oq),
          Wq = zY(Oq),
          Nq = TY(mq),
          aq = zY(mq),
          Vq = TY(xq),
          dq = zY(xq),
          jq = TY(Aq),
          Hq = zY(Aq),
          oq = {
            a: function(qq) {
              return mq[qq.getDay()]
            },
            A: function(qq) {
              return Oq[qq.getDay()]
            },
            b: function(qq) {
              return Aq[qq.getMonth()]
            },
            B: function(qq) {
              return xq[qq.getMonth()]
            },
            c: null,
            d: Yl,
            e: Yl,
            f: Al,
            g: ol,
            G: Ql,
            H: ll,
            I: Ol,
            j: ml,
            L: xl,
            m: cl,
            M: ul,
            p: function(qq) {
              return lq[+(qq.getHours() >= 12)]
            },
            q: function(qq) {
              return 1 + ~~(qq.getMonth() / 3)
            },
            Q: sl,
            s: Xl,
            S: Bl,
            u: Wl,
            U: Nl,
            V: Vl,
            w: dl,
            W: jl,
            x: null,
            X: null,
            y: Hl,
            Y: Pl,
            Z: yl,
            "%": Fl
          },
          Pq = {
            a: function(qq) {
              return mq[qq.getUTCDay()]
            },
            A: function(qq) {
              return Oq[qq.getUTCDay()]
            },
            b: function(qq) {
              return Aq[qq.getUTCMonth()]
            },
            B: function(qq) {
              return xq[qq.getUTCMonth()]
            },
            c: null,
            d: tl,
            e: tl,
            f: bl,
            g: Jl,
            G: Rl,
            H: rl,
            I: vl,
            j: hl,
            L: nl,
            m: il,
            M: Zl,
            p: function(qq) {
              return lq[+(qq.getUTCHours() >= 12)]
            },
            q: function(qq) {
              return 1 + ~~(qq.getUTCMonth() / 3)
            },
            Q: sl,
            s: Xl,
            S: fl,
            u: Ml,
            U: Tl,
            V: Sl,
            w: pl,
            W: Gl,
            x: null,
            X: null,
            y: Ll,
            Y: kl,
            Z: Ul,
            "%": Fl
          },
          Qq = {
            a: function(qq, Eq, gq) {
              var Yq = Nq.exec(Eq.slice(gq));
              return Yq ? (qq.w = aq.get(Yq[0].toLowerCase()), gq + Yq[0].length) : -1
            },
            A: function(qq, Eq, gq) {
              var Yq = Bq.exec(Eq.slice(gq));
              return Yq ? (qq.w = Wq.get(Yq[0].toLowerCase()), gq + Yq[0].length) : -1
            },
            b: function(qq, Eq, gq) {
              var Yq = jq.exec(Eq.slice(gq));
              return Yq ? (qq.m = Hq.get(Yq[0].toLowerCase()), gq + Yq[0].length) : -1
            },
            B: function(qq, Eq, gq) {
              var Yq = Vq.exec(Eq.slice(gq));
              return Yq ? (qq.m = dq.get(Yq[0].toLowerCase()), gq + Yq[0].length) : -1
            },
            c: function(qq, gq, Yq) {
              return rq(qq, Eq, gq, Yq)
            },
            d: XY,
            e: XY,
            f: DY,
            g: RY,
            G: kY,
            H: KY,
            I: KY,
            j: wY,
            L: eY,
            m: sY,
            M: CY,
            p: function(qq, Eq, gq) {
              var Yq = cq.exec(Eq.slice(gq));
              return Yq ? (qq.p = uq.get(Yq[0].toLowerCase()), gq + Yq[0].length) : -1
            },
            q: FY,
            Q: El,
            s: gl,
            S: IY,
            u: pY,
            U: GY,
            V: LY,
            w: SY,
            W: JY,
            x: function(qq, Eq, Yq) {
              return rq(qq, gq, Eq, Yq)
            },
            X: function(qq, Eq, gq) {
              return rq(qq, Yq, Eq, gq)
            },
            y: RY,
            Y: kY,
            Z: UY,
            "%": ql
          };

        function yq(qq, Eq) {
          return function(gq) {
            var Yq, lq, Oq, mq = [],
              xq = -1,
              Aq = 0,
              cq = qq.length;
            for (gq instanceof Date || (gq = new Date(+gq)); ++xq < cq;) 37 === qq.charCodeAt(xq) && (mq.push(qq.slice(Aq, xq)), null != (lq = nY[Yq = qq.charAt(++xq)]) ? Yq = qq.charAt(++xq) : lq = "e" === Yq ? " " : "0", (Oq = Eq[Yq]) && (Yq = Oq(gq, lq)), mq.push(Yq), Aq = xq + 1);
            return mq.push(qq.slice(Aq, xq)), mq.join("")
          }
        }

        function tq(qq, Eq) {
          return function(gq) {
            var Yq, lq, Oq = tY(1900, void 0, 1);
            if (rq(Oq, qq, gq += "", 0) != gq.length) return null;
            if ("Q" in Oq) return new Date(Oq.Q);
            if ("s" in Oq) return new Date(1e3 * Oq.s + ("L" in Oq ? Oq.L : 0));
            if (Eq && !("Z" in Oq) && (Oq.Z = 0), "p" in Oq && (Oq.H = Oq.H % 12 + 12 * Oq.p), void 0 === Oq.m && (Oq.m = "q" in Oq ? Oq.q : 0), "V" in Oq) {
              if (Oq.V < 1 || Oq.V > 53) return null;
              "w" in Oq || (Oq.w = 1), "Z" in Oq ? (lq = (Yq = yY(tY(Oq.y, 0, 1))).getUTCDay(), Yq = lq > 4 || 0 === lq ? mY.ceil(Yq) : mY(Yq), Yq = wg.offset(Yq, 7 * (Oq.V - 1)), Oq.y = Yq.getUTCFullYear(), Oq.m = Yq.getUTCMonth(), Oq.d = Yq.getUTCDate() + (Oq.w + 6) % 7) : (lq = (Yq = QY(tY(Oq.y, 0, 1))).getDay(), Yq = lq > 4 || 0 === lq ? eg.ceil(Yq) : eg(Yq), Yq = Xg.offset(Yq, 7 * (Oq.V - 1)), Oq.y = Yq.getFullYear(), Oq.m = Yq.getMonth(), Oq.d = Yq.getDate() + (Oq.w + 6) % 7)
            } else("W" in Oq || "U" in Oq) && ("w" in Oq || (Oq.w = "u" in Oq ? Oq.u % 7 : "W" in Oq ? 1 : 0), lq = "Z" in Oq ? yY(tY(Oq.y, 0, 1)).getUTCDay() : QY(tY(Oq.y, 0, 1)).getDay(), Oq.m = 0, Oq.d = "W" in Oq ? (Oq.w + 6) % 7 + 7 * Oq.W - (lq + 5) % 7 : Oq.w + 7 * Oq.U - (lq + 6) % 7);
            return "Z" in Oq ? (Oq.H += Oq.Z / 100 | 0, Oq.M += Oq.Z % 100, yY(Oq)) : QY(Oq)
          }
        }

        function rq(qq, Eq, gq, Yq) {
          for (var lq, Oq, mq = 0, xq = Eq.length, Aq = gq.length; mq < xq;) {
            if (Yq >= Aq) return -1;
            if (37 === (lq = Eq.charCodeAt(mq++))) {
              if (lq = Eq.charAt(mq++), !(Oq = Qq[lq in nY ? Eq.charAt(mq++) : lq]) || (Yq = Oq(qq, gq, Yq)) < 0) return -1
            } else if (lq != gq.charCodeAt(Yq++)) return -1
          }
          return Yq
        }
        return oq.x = yq(gq, oq), oq.X = yq(Yq, oq), oq.c = yq(Eq, oq), Pq.x = yq(gq, Pq), Pq.X = yq(Yq, Pq), Pq.c = yq(Eq, Pq), {
          format: function(qq) {
            var Eq = yq(qq += "", oq);
            return Eq.toString = function() {
              return qq
            }, Eq
          },
          parse: function(qq) {
            var Eq = tq(qq += "", !1);
            return Eq.toString = function() {
              return qq
            }, Eq
          },
          utcFormat: function(qq) {
            var Eq = yq(qq += "", Pq);
            return Eq.toString = function() {
              return qq
            }, Eq
          },
          utcParse: function(qq) {
            var Eq = tq(qq += "", !0);
            return Eq.toString = function() {
              return qq
            }, Eq
          }
        }
      }(qq), vY = rY.format, rY.parse, hY = rY.utcFormat, rY.utcParse
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
    var aO = gq(6098),
      VO = gq(5979);

    function dO(qq) {
      for (var Eq = qq.length, gq = new Array(Eq); --Eq >= 0;) gq[Eq] = Eq;
      return gq
    }

    function jO(qq, Eq) {
      return qq[Eq]
    }

    function HO(qq) {
      const Eq = [];
      return Eq.key = qq, Eq
    }
    var oO = gq(6031),
      PO = gq.n(oO),
      QO = gq(6045),
      yO = gq.n(QO),
      tO = gq(5285),
      rO = gq.n(tO),
      vO = gq(5105),
      hO = gq.n(vO),
      nO = gq(4992),
      bO = gq.n(nO),
      iO = gq(5010),
      ZO = gq.n(iO),
      fO = gq(6060),
      MO = gq.n(fO),
      TO = gq(4998),
      zO = gq.n(TO),
      SO = gq(5941),
      pO = gq.n(SO),
      GO = gq(6078),
      LO = gq.n(GO),
      JO = gq(5377),
      kO = gq.n(JO),
      RO = gq(6085),
      UO = gq.n(RO);

    function FO(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return sO(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(qq)) return Array.from(qq)
      }(qq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return sO(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return sO(qq, Eq)
      }(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sO(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }
    var XO = function(qq) {
        return qq
      },
      wO = {
        "@@functional/placeholder": !0
      },
      KO = function(qq) {
        return qq === wO
      },
      CO = function(qq) {
        return function Eq() {
          return 0 === arguments.length || 1 === arguments.length && KO(arguments.length <= 0 ? void 0 : arguments[0]) ? Eq : qq.apply(void 0, arguments)
        }
      },
      IO = function qq(Eq, gq) {
        return 1 === Eq ? gq : CO((function() {
          for (var Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
          var mq = lq.filter((function(qq) {
            return qq !== wO
          })).length;
          return mq >= Eq ? gq.apply(void 0, lq) : qq(Eq - mq, CO((function() {
            for (var qq = arguments.length, Eq = new Array(qq), Yq = 0; Yq < qq; Yq++) Eq[Yq] = arguments[Yq];
            var Oq = lq.map((function(qq) {
              return KO(qq) ? Eq.shift() : qq
            }));
            return gq.apply(void 0, FO(Oq).concat(Eq))
          })))
        }))
      },
      eO = function(qq) {
        return IO(qq.length, qq)
      },
      DO = function(qq, Eq) {
        for (var gq = [], Yq = qq; Yq < Eq; ++Yq) gq[Yq - qq] = Yq;
        return gq
      },
      qm = eO((function(qq, Eq) {
        return Array.isArray(Eq) ? Eq.map(qq) : Object.keys(Eq).map((function(qq) {
          return Eq[qq]
        })).map(qq)
      })),
      Em = function() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        if (!Eq.length) return XO;
        var Yq = Eq.reverse(),
          lq = Yq[0],
          Oq = Yq.slice(1);
        return function() {
          return Oq.reduce((function(qq, Eq) {
            return Eq(qq)
          }), lq.apply(void 0, arguments))
        }
      },
      gm = function(qq) {
        return Array.isArray(qq) ? qq.reverse() : qq.split("").reverse.join("")
      },
      Ym = function(qq) {
        var Eq = null,
          gq = null;
        return function() {
          for (var Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
          return Eq && lq.every((function(qq, gq) {
            return qq === Eq[gq]
          })) ? gq : (Eq = lq, gq = qq.apply(void 0, lq))
        }
      };
    const lm = {
      rangeStep: function(qq, Eq, gq) {
        for (var Yq = new(UO())(qq), lq = 0, Oq = []; Yq.lt(Eq) && lq < 1e5;) Oq.push(Yq.toNumber()), Yq = Yq.add(gq), lq++;
        return Oq
      },
      getDigitCount: function(qq) {
        return 0 === qq ? 1 : Math.floor(new(UO())(qq).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: eO((function(qq, Eq, gq) {
        var Yq = +qq;
        return Yq + gq * (+Eq - Yq)
      })),
      uninterpolateNumber: eO((function(qq, Eq, gq) {
        var Yq = Eq - +qq;
        return (gq - qq) / (Yq = Yq || 1 / 0)
      })),
      uninterpolateTruncation: eO((function(qq, Eq, gq) {
        var Yq = Eq - +qq;
        return Yq = Yq || 1 / 0, Math.max(0, Math.min(1, (gq - qq) / Yq))
      }))
    };

    function Om(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return Am(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(qq)) return Array.from(qq)
      }(qq) || xm(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mm(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(qq))) return;
        var gq = [],
          Yq = !0,
          lq = !1,
          Oq = void 0;
        try {
          for (var mq, xq = qq[Symbol.iterator](); !(Yq = (mq = xq.next()).done) && (gq.push(mq.value), !Eq || gq.length !== Eq); Yq = !0);
        } catch (Aq) {
          lq = !0, Oq = Aq
        } finally {
          try {
            Yq || null == xq.return || xq.return()
          } finally {
            if (lq) throw Oq
          }
        }
        return gq
      }(qq, Eq) || xm(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xm(qq, Eq) {
      if (qq) {
        if ("string" === typeof qq) return Am(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? Am(qq, Eq) : void 0
      }
    }

    function Am(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function cm(qq) {
      var Eq = mm(qq, 2),
        gq = Eq[0],
        Yq = Eq[1],
        lq = gq,
        Oq = Yq;
      return gq > Yq && (lq = Yq, Oq = gq), [lq, Oq]
    }

    function um(qq, Eq, gq) {
      if (qq.lte(0)) return new(UO())(0);
      var Yq = lm.getDigitCount(qq.toNumber()),
        lq = new(UO())(10).pow(Yq),
        Oq = qq.div(lq),
        mq = 1 !== Yq ? .05 : .1,
        xq = new(UO())(Math.ceil(Oq.div(mq).toNumber())).add(gq).mul(mq).mul(lq);
      return Eq ? xq : new(UO())(Math.ceil(xq))
    }

    function Bm(qq, Eq, gq) {
      var Yq = 1,
        lq = new(UO())(qq);
      if (!lq.isint() && gq) {
        var Oq = Math.abs(qq);
        Oq < 1 ? (Yq = new(UO())(10).pow(lm.getDigitCount(qq) - 1), lq = new(UO())(Math.floor(lq.div(Yq).toNumber())).mul(Yq)) : Oq > 1 && (lq = new(UO())(Math.floor(qq)))
      } else 0 === qq ? lq = new(UO())(Math.floor((Eq - 1) / 2)) : gq || (lq = new(UO())(Math.floor(qq)));
      var mq = Math.floor((Eq - 1) / 2);
      return Em(qm((function(qq) {
        return lq.add(new(UO())(qq - mq).mul(Yq)).toNumber()
      })), DO)(0, Eq)
    }

    function Wm(qq, Eq, gq, Yq) {
      var lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((Eq - qq) / (gq - 1))) return {
        step: new(UO())(0),
        tickMin: new(UO())(0),
        tickMax: new(UO())(0)
      };
      var Oq, mq = um(new(UO())(Eq).sub(qq).div(gq - 1), Yq, lq);
      Oq = qq <= 0 && Eq >= 0 ? new(UO())(0) : (Oq = new(UO())(qq).add(Eq).div(2)).sub(new(UO())(Oq).mod(mq));
      var xq = Math.ceil(Oq.sub(qq).div(mq).toNumber()),
        Aq = Math.ceil(new(UO())(Eq).sub(Oq).div(mq).toNumber()),
        cq = xq + Aq + 1;
      return cq > gq ? Wm(qq, Eq, gq, Yq, lq + 1) : (cq < gq && (Aq = Eq > 0 ? Aq + (gq - cq) : Aq, xq = Eq > 0 ? xq : xq + (gq - cq)), {
        step: mq,
        tickMin: Oq.sub(new(UO())(xq).mul(mq)),
        tickMax: Oq.add(new(UO())(Aq).mul(mq))
      })
    }
    var Nm = Ym((function(qq) {
        var Eq = mm(qq, 2),
          gq = Eq[0],
          Yq = Eq[1],
          lq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Oq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mq = Math.max(lq, 2),
          xq = mm(cm([gq, Yq]), 2),
          Aq = xq[0],
          cq = xq[1];
        if (Aq === -1 / 0 || cq === 1 / 0) {
          var uq = cq === 1 / 0 ? [Aq].concat(Om(DO(0, lq - 1).map((function() {
            return 1 / 0
          })))) : [].concat(Om(DO(0, lq - 1).map((function() {
            return -1 / 0
          }))), [cq]);
          return gq > Yq ? gm(uq) : uq
        }
        if (Aq === cq) return Bm(Aq, lq, Oq);
        var Bq = Wm(Aq, cq, mq, Oq),
          Wq = Bq.step,
          Nq = Bq.tickMin,
          aq = Bq.tickMax,
          Vq = lm.rangeStep(Nq, aq.add(new(UO())(.1).mul(Wq)), Wq);
        return gq > Yq ? gm(Vq) : Vq
      })),
      am = (Ym((function(qq) {
        var Eq = mm(qq, 2),
          gq = Eq[0],
          Yq = Eq[1],
          lq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Oq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mq = Math.max(lq, 2),
          xq = mm(cm([gq, Yq]), 2),
          Aq = xq[0],
          cq = xq[1];
        if (Aq === -1 / 0 || cq === 1 / 0) return [gq, Yq];
        if (Aq === cq) return Bm(Aq, lq, Oq);
        var uq = um(new(UO())(cq).sub(Aq).div(mq - 1), Oq, 0),
          Bq = Em(qm((function(qq) {
            return new(UO())(Aq).add(new(UO())(qq).mul(uq)).toNumber()
          })), DO)(0, mq).filter((function(qq) {
            return qq >= Aq && qq <= cq
          }));
        return gq > Yq ? gm(Bq) : Bq
      })), Ym((function(qq, Eq) {
        var gq = mm(qq, 2),
          Yq = gq[0],
          lq = gq[1],
          Oq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mq = mm(cm([Yq, lq]), 2),
          xq = mq[0],
          Aq = mq[1];
        if (xq === -1 / 0 || Aq === 1 / 0) return [Yq, lq];
        if (xq === Aq) return [xq];
        var cq = Math.max(Eq, 2),
          uq = um(new(UO())(Aq).sub(xq).div(cq - 1), Oq, 0),
          Bq = [].concat(Om(lm.rangeStep(new(UO())(xq), new(UO())(Aq).sub(new(UO())(.99).mul(uq)), uq)), [Aq]);
        return Yq > lq ? gm(Bq) : Bq
      }))),
      Vm = gq(6091),
      dm = gq(4990),
      jm = gq(5297),
      Hm = gq(6095);

    function om(qq) {
      return om = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, om(qq)
    }

    function Pm(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return Qm(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || function(qq, Eq) {
        if (!qq) return;
        if ("string" === typeof qq) return Qm(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        "Object" === gq && qq.constructor && (gq = qq.constructor.name);
        if ("Map" === gq || "Set" === gq) return Array.from(qq);
        if ("Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq)) return Qm(qq, Eq)
      }(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qm(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function ym(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function tm(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? ym(Object(gq), !0).forEach((function(Eq) {
          rm(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : ym(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function rm(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != om(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != om(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == om(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function hm(qq, Eq, gq) {
      return rO()(qq) || rO()(Eq) ? gq : (0, dm.z)(Eq) ? ZO()(qq, Eq, gq) : hO()(Eq) ? Eq(qq) : gq
    }

    function nm(qq, Eq, gq, Yq) {
      var lq = MO()(qq, (function(qq) {
        return hm(qq, Eq)
      }));
      if ("number" === gq) {
        var Oq = lq.filter((function(qq) {
          return (0, dm.D)(qq) || parseFloat(qq)
        }));
        return Oq.length ? [yO()(Oq), PO()(Oq)] : [1 / 0, -1 / 0]
      }
      return (Yq ? lq.filter((function(qq) {
        return !rO()(qq)
      })) : lq).map((function(qq) {
        return (0, dm.z)(qq) || qq instanceof Date ? qq : ""
      }))
    }
    var bm = function(qq) {
        var Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Yq = arguments.length > 2 ? arguments[2] : void 0,
          lq = arguments.length > 3 ? arguments[3] : void 0,
          Oq = -1,
          mq = null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.length) && void 0 !== Eq ? Eq : 0;
        if (mq <= 1) return 0;
        if (lq && "angleAxis" === lq.axisType && Math.abs(Math.abs(lq.range[1] - lq.range[0]) - 360) <= 1e-6)
          for (var xq = lq.range, Aq = 0; Aq < mq; Aq++) {
            var cq = Aq > 0 ? Yq[Aq - 1].coordinate : Yq[mq - 1].coordinate,
              uq = Yq[Aq].coordinate,
              Bq = Aq >= mq - 1 ? Yq[0].coordinate : Yq[Aq + 1].coordinate,
              Wq = void 0;
            if ((0, dm.J)(uq - cq) !== (0, dm.J)(Bq - uq)) {
              var Nq = [];
              if ((0, dm.J)(Bq - uq) === (0, dm.J)(xq[1] - xq[0])) {
                Wq = Bq;
                var aq = uq + xq[1] - xq[0];
                Nq[0] = Math.min(aq, (aq + cq) / 2), Nq[1] = Math.max(aq, (aq + cq) / 2)
              } else {
                Wq = cq;
                var Vq = Bq + xq[1] - xq[0];
                Nq[0] = Math.min(uq, (Vq + uq) / 2), Nq[1] = Math.max(uq, (Vq + uq) / 2)
              }
              var dq = [Math.min(uq, (Wq + uq) / 2), Math.max(uq, (Wq + uq) / 2)];
              if (qq > dq[0] && qq <= dq[1] || qq >= Nq[0] && qq <= Nq[1]) {
                Oq = Yq[Aq].index;
                break
              }
            } else {
              var jq = Math.min(cq, Bq),
                Hq = Math.max(cq, Bq);
              if (qq > (jq + uq) / 2 && qq <= (Hq + uq) / 2) {
                Oq = Yq[Aq].index;
                break
              }
            }
          } else
            for (var oq = 0; oq < mq; oq++)
              if (0 === oq && qq <= (gq[oq].coordinate + gq[oq + 1].coordinate) / 2 || oq > 0 && oq < mq - 1 && qq > (gq[oq].coordinate + gq[oq - 1].coordinate) / 2 && qq <= (gq[oq].coordinate + gq[oq + 1].coordinate) / 2 || oq === mq - 1 && qq > (gq[oq].coordinate + gq[oq - 1].coordinate) / 2) {
                Oq = gq[oq].index;
                break
              } return Oq
      },
      im = function(qq) {
        var Eq, gq, Yq = qq.type.displayName,
          lq = null !== (Eq = qq.type) && void 0 !== Eq && Eq.defaultProps ? tm(tm({}, qq.type.defaultProps), qq.props) : qq.props,
          Oq = lq.stroke,
          mq = lq.fill;
        switch (Yq) {
          case "Line":
            gq = Oq;
            break;
          case "Area":
          case "Radar":
            gq = Oq && "none" !== Oq ? Oq : mq;
            break;
          default:
            gq = mq
        }
        return gq
      },
      Zm = function(qq) {
        var Eq = qq.barSize,
          gq = qq.totalSize,
          Yq = qq.stackGroups,
          lq = void 0 === Yq ? {} : Yq;
        if (!lq) return {};
        for (var Oq = {}, mq = Object.keys(lq), xq = 0, Aq = mq.length; xq < Aq; xq++)
          for (var cq = lq[mq[xq]].stackGroups, uq = Object.keys(cq), Bq = 0, Wq = uq.length; Bq < Wq; Bq++) {
            var Nq = cq[uq[Bq]],
              aq = Nq.items,
              Vq = Nq.cateAxisId,
              dq = aq.filter((function(qq) {
                return (0, jm.l)(qq.type).indexOf("Bar") >= 0
              }));
            if (dq && dq.length) {
              var jq = dq[0].type.defaultProps,
                Hq = void 0 !== jq ? tm(tm({}, jq), dq[0].props) : dq[0].props,
                oq = Hq.barSize,
                Pq = Hq[Vq];
              Oq[Pq] || (Oq[Pq] = []);
              var Qq = rO()(oq) ? Eq : oq;
              Oq[Pq].push({
                item: dq[0],
                stackList: dq.slice(1),
                barSize: rO()(Qq) ? void 0 : (0, dm.p)(Qq, gq, 0)
              })
            }
          }
        return Oq
      },
      fm = function(qq) {
        var Eq = qq.barGap,
          gq = qq.barCategoryGap,
          Yq = qq.bandSize,
          lq = qq.sizeList,
          Oq = void 0 === lq ? [] : lq,
          mq = qq.maxBarSize,
          xq = Oq.length;
        if (xq < 1) return null;
        var Aq, cq = (0, dm.p)(Eq, Yq, 0, !0),
          uq = [];
        if (Oq[0].barSize === +Oq[0].barSize) {
          var Bq = !1,
            Wq = Yq / xq,
            Nq = Oq.reduce((function(qq, Eq) {
              return qq + Eq.barSize || 0
            }), 0);
          (Nq += (xq - 1) * cq) >= Yq && (Nq -= (xq - 1) * cq, cq = 0), Nq >= Yq && Wq > 0 && (Bq = !0, Nq = xq * (Wq *= .9));
          var aq = {
            offset: ((Yq - Nq) / 2 | 0) - cq,
            size: 0
          };
          Aq = Oq.reduce((function(qq, Eq) {
            var gq = {
                item: Eq.item,
                position: {
                  offset: aq.offset + aq.size + cq,
                  size: Bq ? Wq : Eq.barSize
                }
              },
              Yq = [].concat(Pm(qq), [gq]);
            return aq = Yq[Yq.length - 1].position, Eq.stackList && Eq.stackList.length && Eq.stackList.forEach((function(qq) {
              Yq.push({
                item: qq,
                position: aq
              })
            })), Yq
          }), uq)
        } else {
          var Vq = (0, dm.p)(gq, Yq, 0, !0);
          Yq - 2 * Vq - (xq - 1) * cq <= 0 && (cq = 0);
          var dq = (Yq - 2 * Vq - (xq - 1) * cq) / xq;
          dq > 1 && (dq >>= 0);
          var jq = mq === +mq ? Math.min(dq, mq) : dq;
          Aq = Oq.reduce((function(qq, Eq, gq) {
            var Yq = [].concat(Pm(qq), [{
              item: Eq.item,
              position: {
                offset: Vq + (dq + cq) * gq + (dq - jq) / 2,
                size: jq
              }
            }]);
            return Eq.stackList && Eq.stackList.length && Eq.stackList.forEach((function(qq) {
              Yq.push({
                item: qq,
                position: Yq[Yq.length - 1].position
              })
            })), Yq
          }), uq)
        }
        return Aq
      },
      Mm = function(qq, Eq, gq, Yq) {
        var lq = gq.children,
          Oq = gq.width,
          mq = gq.margin,
          xq = Oq - (mq.left || 0) - (mq.right || 0),
          Aq = (0, Hm.c)({
            children: lq,
            legendWidth: xq
          });
        if (Aq) {
          var cq = Yq || {},
            uq = cq.width,
            Bq = cq.height,
            Wq = Aq.align,
            Nq = Aq.verticalAlign,
            aq = Aq.layout;
          if (("vertical" === aq || "horizontal" === aq && "middle" === Nq) && "center" !== Wq && (0, dm.D)(qq[Wq])) return tm(tm({}, qq), {}, rm({}, Wq, qq[Wq] + (uq || 0)));
          if (("horizontal" === aq || "vertical" === aq && "center" === Wq) && "middle" !== Nq && (0, dm.D)(qq[Nq])) return tm(tm({}, qq), {}, rm({}, Nq, qq[Nq] + (Bq || 0)))
        }
        return qq
      },
      Tm = function(qq, Eq, gq, Yq, lq) {
        var Oq = Eq.props.children,
          mq = (0, jm.g)(Oq, Vm.e).filter((function(qq) {
            return function(qq, Eq, gq) {
              return !!rO()(Eq) || ("horizontal" === qq ? "yAxis" === Eq : "vertical" === qq || "x" === gq ? "xAxis" === Eq : "y" !== gq || "yAxis" === Eq)
            }(Yq, lq, qq.props.direction)
          }));
        if (mq && mq.length) {
          var xq = mq.map((function(qq) {
            return qq.props.dataKey
          }));
          return qq.reduce((function(qq, Eq) {
            var Yq = hm(Eq, gq);
            if (rO()(Yq)) return qq;
            var lq = Array.isArray(Yq) ? [yO()(Yq), PO()(Yq)] : [Yq, Yq],
              Oq = xq.reduce((function(qq, gq) {
                var Yq = hm(Eq, gq, 0),
                  Oq = lq[0] - Math.abs(Array.isArray(Yq) ? Yq[0] : Yq),
                  mq = lq[1] + Math.abs(Array.isArray(Yq) ? Yq[1] : Yq);
                return [Math.min(Oq, qq[0]), Math.max(mq, qq[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(Oq[0], qq[0]), Math.max(Oq[1], qq[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      zm = function(qq, Eq, gq, Yq, lq) {
        var Oq = Eq.map((function(Eq) {
          return Tm(qq, Eq, gq, lq, Yq)
        })).filter((function(qq) {
          return !rO()(qq)
        }));
        return Oq && Oq.length ? Oq.reduce((function(qq, Eq) {
          return [Math.min(qq[0], Eq[0]), Math.max(qq[1], Eq[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      Sm = function(qq, Eq, gq, Yq, lq) {
        var Oq = Eq.map((function(Eq) {
          var Oq = Eq.props.dataKey;
          return "number" === gq && Oq && Tm(qq, Eq, Oq, Yq) || nm(qq, Oq, gq, lq)
        }));
        if ("number" === gq) return Oq.reduce((function(qq, Eq) {
          return [Math.min(qq[0], Eq[0]), Math.max(qq[1], Eq[1])]
        }), [1 / 0, -1 / 0]);
        var mq = {};
        return Oq.reduce((function(qq, Eq) {
          for (var gq = 0, Yq = Eq.length; gq < Yq; gq++) mq[Eq[gq]] || (mq[Eq[gq]] = !0, qq.push(Eq[gq]));
          return qq
        }), [])
      },
      pm = function(qq, Eq) {
        return "horizontal" === qq && "xAxis" === Eq || "vertical" === qq && "yAxis" === Eq || "centric" === qq && "angleAxis" === Eq || "radial" === qq && "radiusAxis" === Eq
      },
      Gm = function(qq, Eq, gq, Yq) {
        if (Yq) return qq.map((function(qq) {
          return qq.coordinate
        }));
        var lq, Oq, mq = qq.map((function(qq) {
          return qq.coordinate === Eq && (lq = !0), qq.coordinate === gq && (Oq = !0), qq.coordinate
        }));
        return lq || mq.push(Eq), Oq || mq.push(gq), mq
      },
      Lm = function(qq, Eq, gq) {
        if (!qq) return null;
        var Yq = qq.scale,
          lq = qq.duplicateDomain,
          Oq = qq.type,
          mq = qq.range,
          xq = "scaleBand" === qq.realScaleType ? Yq.bandwidth() / 2 : 2,
          Aq = (Eq || gq) && "category" === Oq && Yq.bandwidth ? Yq.bandwidth() / xq : 0;
        return Aq = "angleAxis" === qq.axisType && (null === mq || void 0 === mq ? void 0 : mq.length) >= 2 ? 2 * (0, dm.J)(mq[0] - mq[1]) * Aq : Aq, Eq && (qq.ticks || qq.niceTicks) ? (qq.ticks || qq.niceTicks).map((function(qq) {
          var Eq = lq ? lq.indexOf(qq) : qq;
          return {
            coordinate: Yq(Eq) + Aq,
            value: qq,
            offset: Aq
          }
        })).filter((function(qq) {
          return !zO()(qq.coordinate)
        })) : qq.isCategorical && qq.categoricalDomain ? qq.categoricalDomain.map((function(qq, Eq) {
          return {
            coordinate: Yq(qq) + Aq,
            value: qq,
            index: Eq,
            offset: Aq
          }
        })) : Yq.ticks && !gq ? Yq.ticks(qq.tickCount).map((function(qq) {
          return {
            coordinate: Yq(qq) + Aq,
            value: qq,
            offset: Aq
          }
        })) : Yq.domain().map((function(qq, Eq) {
          return {
            coordinate: Yq(qq) + Aq,
            value: lq ? lq[qq] : qq,
            index: Eq,
            offset: Aq
          }
        }))
      },
      Jm = new WeakMap,
      km = function(qq, Eq) {
        if ("function" !== typeof Eq) return qq;
        Jm.has(qq) || Jm.set(qq, new WeakMap);
        var gq = Jm.get(qq);
        if (gq.has(Eq)) return gq.get(Eq);
        var Yq = function() {
          qq.apply(void 0, arguments), Eq.apply(void 0, arguments)
        };
        return gq.set(Eq, Yq), Yq
      },
      Rm = function(qq, Eq, gq) {
        var Oq = qq.scale,
          mq = qq.type,
          xq = qq.layout,
          Aq = qq.axisType;
        if ("auto" === Oq) return "radial" === xq && "radiusAxis" === Aq ? {
          scale: lq.e(),
          realScaleType: "band"
        } : "radial" === xq && "angleAxis" === Aq ? {
          scale: wE(),
          realScaleType: "linear"
        } : "category" === mq && Eq && (Eq.indexOf("LineChart") >= 0 || Eq.indexOf("AreaChart") >= 0 || Eq.indexOf("ComposedChart") >= 0 && !gq) ? {
          scale: lq.i(),
          realScaleType: "point"
        } : "category" === mq ? {
          scale: lq.e(),
          realScaleType: "band"
        } : {
          scale: wE(),
          realScaleType: "linear"
        };
        if (bO()(Oq)) {
          var cq = "scale".concat(pO()(Oq));
          return {
            scale: (Yq[cq] || lq.i)(),
            realScaleType: Yq[cq] ? cq : "point"
          }
        }
        return hO()(Oq) ? {
          scale: Oq
        } : {
          scale: lq.i(),
          realScaleType: "point"
        }
      },
      Um = 1e-4,
      Fm = function(qq) {
        var Eq = qq.domain();
        if (Eq && !(Eq.length <= 2)) {
          var gq = Eq.length,
            Yq = qq.range(),
            lq = Math.min(Yq[0], Yq[1]) - Um,
            Oq = Math.max(Yq[0], Yq[1]) + Um,
            mq = qq(Eq[0]),
            xq = qq(Eq[gq - 1]);
          (mq < lq || mq > Oq || xq < lq || xq > Oq) && qq.domain([Eq[0], Eq[gq - 1]])
        }
      },
      sm = function(qq, Eq) {
        if (!qq) return null;
        for (var gq = 0, Yq = qq.length; gq < Yq; gq++)
          if (qq[gq].item === Eq) return qq[gq].position;
        return null
      },
      Xm = function(qq, Eq) {
        if (!Eq || 2 !== Eq.length || !(0, dm.D)(Eq[0]) || !(0, dm.D)(Eq[1])) return qq;
        var gq = Math.min(Eq[0], Eq[1]),
          Yq = Math.max(Eq[0], Eq[1]),
          lq = [qq[0], qq[1]];
        return (!(0, dm.D)(qq[0]) || qq[0] < gq) && (lq[0] = gq), (!(0, dm.D)(qq[1]) || qq[1] > Yq) && (lq[1] = Yq), lq[0] > Yq && (lq[0] = Yq), lq[1] < gq && (lq[1] = gq), lq
      },
      wm = {
        sign: function(qq) {
          var Eq = qq.length;
          if (!(Eq <= 0))
            for (var gq = 0, Yq = qq[0].length; gq < Yq; ++gq)
              for (var lq = 0, Oq = 0, mq = 0; mq < Eq; ++mq) {
                var xq = zO()(qq[mq][gq][1]) ? qq[mq][gq][0] : qq[mq][gq][1];
                xq >= 0 ? (qq[mq][gq][0] = lq, qq[mq][gq][1] = lq + xq, lq = qq[mq][gq][1]) : (qq[mq][gq][0] = Oq, qq[mq][gq][1] = Oq + xq, Oq = qq[mq][gq][1])
              }
        },
        expand: function(qq, Eq) {
          if ((Yq = qq.length) > 0) {
            for (var gq, Yq, lq, Oq = 0, mq = qq[0].length; Oq < mq; ++Oq) {
              for (lq = gq = 0; gq < Yq; ++gq) lq += qq[gq][Oq][1] || 0;
              if (lq)
                for (gq = 0; gq < Yq; ++gq) qq[gq][Oq][1] /= lq
            }
            NO(qq, Eq)
          }
        },
        none: NO,
        silhouette: function(qq, Eq) {
          if ((gq = qq.length) > 0) {
            for (var gq, Yq = 0, lq = qq[Eq[0]], Oq = lq.length; Yq < Oq; ++Yq) {
              for (var mq = 0, xq = 0; mq < gq; ++mq) xq += qq[mq][Yq][1] || 0;
              lq[Yq][1] += lq[Yq][0] = -xq / 2
            }
            NO(qq, Eq)
          }
        },
        wiggle: function(qq, Eq) {
          if ((lq = qq.length) > 0 && (Yq = (gq = qq[Eq[0]]).length) > 0) {
            for (var gq, Yq, lq, Oq = 0, mq = 1; mq < Yq; ++mq) {
              for (var xq = 0, Aq = 0, cq = 0; xq < lq; ++xq) {
                for (var uq = qq[Eq[xq]], Bq = uq[mq][1] || 0, Wq = (Bq - (uq[mq - 1][1] || 0)) / 2, Nq = 0; Nq < xq; ++Nq) {
                  var aq = qq[Eq[Nq]];
                  Wq += (aq[mq][1] || 0) - (aq[mq - 1][1] || 0)
                }
                Aq += Bq, cq += Wq * Bq
              }
              gq[mq - 1][1] += gq[mq - 1][0] = Oq, Aq && (Oq -= cq / Aq)
            }
            gq[mq - 1][1] += gq[mq - 1][0] = Oq, NO(qq, Eq)
          }
        },
        positive: function(qq) {
          var Eq = qq.length;
          if (!(Eq <= 0))
            for (var gq = 0, Yq = qq[0].length; gq < Yq; ++gq)
              for (var lq = 0, Oq = 0; Oq < Eq; ++Oq) {
                var mq = zO()(qq[Oq][gq][1]) ? qq[Oq][gq][0] : qq[Oq][gq][1];
                mq >= 0 ? (qq[Oq][gq][0] = lq, qq[Oq][gq][1] = lq + mq, lq = qq[Oq][gq][1]) : (qq[Oq][gq][0] = 0, qq[Oq][gq][1] = 0)
              }
        }
      },
      Km = function(qq, Eq, gq) {
        var Yq = Eq.map((function(qq) {
            return qq.props.dataKey
          })),
          lq = wm[gq],
          Oq = function() {
            var qq = (0, VO.c)([]),
              Eq = dO,
              gq = NO,
              Yq = jO;

            function lq(lq) {
              var Oq, mq, xq = Array.from(qq.apply(this, arguments), HO),
                Aq = xq.length,
                cq = -1;
              for (const qq of lq)
                for (Oq = 0, ++cq; Oq < Aq; ++Oq)(xq[Oq][cq] = [0, +Yq(qq, xq[Oq].key, cq, lq)]).data = qq;
              for (Oq = 0, mq = (0, aO.e)(Eq(xq)); Oq < Aq; ++Oq) xq[mq[Oq]].index = Oq;
              return gq(xq, mq), xq
            }
            return lq.keys = function(Eq) {
              return arguments.length ? (qq = "function" === typeof Eq ? Eq : (0, VO.c)(Array.from(Eq)), lq) : qq
            }, lq.value = function(qq) {
              return arguments.length ? (Yq = "function" === typeof qq ? qq : (0, VO.c)(+qq), lq) : Yq
            }, lq.order = function(qq) {
              return arguments.length ? (Eq = null == qq ? dO : "function" === typeof qq ? qq : (0, VO.c)(Array.from(qq)), lq) : Eq
            }, lq.offset = function(qq) {
              return arguments.length ? (gq = null == qq ? NO : qq, lq) : gq
            }, lq
          }().keys(Yq).value((function(qq, Eq) {
            return +hm(qq, Eq, 0)
          })).order(dO).offset(lq);
        return Oq(qq)
      },
      Cm = function(qq, Eq, gq, Yq, lq, Oq) {
        if (!qq) return null;
        var mq = (Oq ? Eq.reverse() : Eq).reduce((function(qq, Eq) {
          var lq, Oq = null !== (lq = Eq.type) && void 0 !== lq && lq.defaultProps ? tm(tm({}, Eq.type.defaultProps), Eq.props) : Eq.props,
            mq = Oq.stackId;
          if (Oq.hide) return qq;
          var xq = Oq[gq],
            Aq = qq[xq] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, dm.z)(mq)) {
            var cq = Aq.stackGroups[mq] || {
              numericAxisId: gq,
              cateAxisId: Yq,
              items: []
            };
            cq.items.push(Eq), Aq.hasStack = !0, Aq.stackGroups[mq] = cq
          } else Aq.stackGroups[(0, dm.N)("_stackId_")] = {
            numericAxisId: gq,
            cateAxisId: Yq,
            items: [Eq]
          };
          return tm(tm({}, qq), {}, rm({}, xq, Aq))
        }), {});
        return Object.keys(mq).reduce((function(Eq, Oq) {
          var xq = mq[Oq];
          if (xq.hasStack) {
            xq.stackGroups = Object.keys(xq.stackGroups).reduce((function(Eq, Oq) {
              var mq = xq.stackGroups[Oq];
              return tm(tm({}, Eq), {}, rm({}, Oq, {
                numericAxisId: gq,
                cateAxisId: Yq,
                items: mq.items,
                stackedData: Km(qq, mq.items, lq)
              }))
            }), {})
          }
          return tm(tm({}, Eq), {}, rm({}, Oq, xq))
        }), {})
      },
      Im = function(qq, Eq) {
        var gq = Eq.realScaleType,
          Yq = Eq.type,
          lq = Eq.tickCount,
          Oq = Eq.originalDomain,
          mq = Eq.allowDecimals,
          xq = gq || Eq.scale;
        if ("auto" !== xq && "linear" !== xq) return null;
        if (lq && "number" === Yq && Oq && ("auto" === Oq[0] || "auto" === Oq[1])) {
          var Aq = qq.domain();
          if (!Aq.length) return null;
          var cq = Nm(Aq, lq, mq);
          return qq.domain([yO()(cq), PO()(cq)]), {
            niceTicks: cq
          }
        }
        if (lq && "number" === Yq) {
          var uq = qq.domain();
          return {
            niceTicks: am(uq, lq, mq)
          }
        }
        return null
      };

    function em(qq) {
      var Eq = qq.axis,
        gq = qq.ticks,
        Yq = qq.bandSize,
        lq = qq.entry,
        Oq = qq.index,
        mq = qq.dataKey;
      if ("category" === Eq.type) {
        if (!Eq.allowDuplicatedCategory && Eq.dataKey && !rO()(lq[Eq.dataKey])) {
          var xq = (0, dm.i)(gq, "value", lq[Eq.dataKey]);
          if (xq) return xq.coordinate + Yq / 2
        }
        return gq[Oq] ? gq[Oq].coordinate + Yq / 2 : null
      }
      var Aq = hm(lq, rO()(mq) ? Eq.dataKey : mq);
      return rO()(Aq) ? null : Eq.scale(Aq)
    }
    var Dm = function(qq) {
        var Eq = qq.axis,
          gq = qq.ticks,
          Yq = qq.offset,
          lq = qq.bandSize,
          Oq = qq.entry,
          mq = qq.index;
        if ("category" === Eq.type) return gq[mq] ? gq[mq].coordinate + Yq : null;
        var xq = hm(Oq, Eq.dataKey, Eq.domain[mq]);
        return rO()(xq) ? null : Eq.scale(xq) - lq / 2 + Yq
      },
      qx = function(qq) {
        var Eq = qq.numericAxis,
          gq = Eq.scale.domain();
        if ("number" === Eq.type) {
          var Yq = Math.min(gq[0], gq[1]),
            lq = Math.max(gq[0], gq[1]);
          return Yq <= 0 && lq >= 0 ? 0 : lq < 0 ? lq : Yq
        }
        return gq[0]
      },
      Ex = function(qq, Eq) {
        var gq, Yq = (null !== (gq = qq.type) && void 0 !== gq && gq.defaultProps ? tm(tm({}, qq.type.defaultProps), qq.props) : qq.props).stackId;
        if ((0, dm.z)(Yq)) {
          var lq = Eq[Yq];
          if (lq) {
            var Oq = lq.items.indexOf(qq);
            return Oq >= 0 ? lq.stackedData[Oq] : null
          }
        }
        return null
      },
      gx = function(qq, Eq, gq) {
        return Object.keys(qq).reduce((function(Yq, lq) {
          var Oq = qq[lq].stackedData.reduce((function(qq, Yq) {
            var lq = Yq.slice(Eq, gq + 1).reduce((function(qq, Eq) {
              return [yO()(Eq.concat([qq[0]]).filter(dm.D)), PO()(Eq.concat([qq[1]]).filter(dm.D))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(qq[0], lq[0]), Math.max(qq[1], lq[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(Oq[0], Yq[0]), Math.max(Oq[1], Yq[1])]
        }), [1 / 0, -1 / 0]).map((function(qq) {
          return qq === 1 / 0 || qq === -1 / 0 ? 0 : qq
        }))
      },
      Yx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      lx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Ox = function(qq, Eq, gq) {
        if (hO()(qq)) return qq(Eq, gq);
        if (!Array.isArray(qq)) return Eq;
        var Yq = [];
        if ((0, dm.D)(qq[0])) Yq[0] = gq ? qq[0] : Math.min(qq[0], Eq[0]);
        else if (Yx.test(qq[0])) {
          var lq = +Yx.exec(qq[0])[1];
          Yq[0] = Eq[0] - lq
        } else hO()(qq[0]) ? Yq[0] = qq[0](Eq[0]) : Yq[0] = Eq[0];
        if ((0, dm.D)(qq[1])) Yq[1] = gq ? qq[1] : Math.max(qq[1], Eq[1]);
        else if (lx.test(qq[1])) {
          var Oq = +lx.exec(qq[1])[1];
          Yq[1] = Eq[1] + Oq
        } else hO()(qq[1]) ? Yq[1] = qq[1](Eq[1]) : Yq[1] = Eq[1];
        return Yq
      },
      mx = function(qq, Eq, gq) {
        if (qq && qq.scale && qq.scale.bandwidth) {
          var Yq = qq.scale.bandwidth();
          if (!gq || Yq > 0) return Yq
        }
        if (qq && Eq && Eq.length >= 2) {
          for (var lq = kO()(Eq, (function(qq) {
              return qq.coordinate
            })), Oq = 1 / 0, mq = 1, xq = lq.length; mq < xq; mq++) {
            var Aq = lq[mq],
              cq = lq[mq - 1];
            Oq = Math.min((Aq.coordinate || 0) - (cq.coordinate || 0), Oq)
          }
          return Oq === 1 / 0 ? 0 : Oq
        }
        return gq ? void 0 : 0
      },
      xx = function(qq, Eq, gq) {
        return qq && qq.length ? LO()(qq, ZO()(gq, "type.defaultProps.domain")) ? Eq : qq : Eq
      },
      Ax = function(qq, Eq) {
        var gq = qq.type.defaultProps ? tm(tm({}, qq.type.defaultProps), qq.props) : qq.props,
          Yq = gq.dataKey,
          lq = gq.name,
          Oq = gq.unit,
          mq = gq.formatter,
          xq = gq.tooltipType,
          Aq = gq.chartType,
          cq = gq.hide;
        return tm(tm({}, (0, jm.e)(qq, !1)), {}, {
          dataKey: Yq,
          unit: Oq,
          formatter: mq,
          name: lq || Yq,
          color: im(qq),
          value: hm(Eq, Yq),
          type: xq,
          payload: Eq,
          chartType: Aq,
          hide: cq
        })
      }
  },
  6007: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      h: () => Bq
    });
    var Yq = gq(5856);

    function lq(qq) {
      return lq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, lq(qq)
    }

    function Oq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function mq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? Oq(Object(gq), !0).forEach((function(Eq) {
          xq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : Oq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function xq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != lq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != lq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == lq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var Aq = {
        widthCache: {},
        cacheCount: 0
      },
      cq = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      uq = "recharts_measurement_span";
    var Bq = function(qq) {
        var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === qq || null === qq || Yq.d.isSsr) return {
          width: 0,
          height: 0
        };
        var gq = function(qq) {
            var Eq = mq({}, qq);
            return Object.keys(Eq).forEach((function(qq) {
              Eq[qq] || delete Eq[qq]
            })), Eq
          }(Eq),
          lq = JSON.stringify({
            text: qq,
            copyStyle: gq
          });
        if (Aq.widthCache[lq]) return Aq.widthCache[lq];
        try {
          var Oq = document.getElementById(uq);
          Oq || ((Oq = document.createElement("span")).setAttribute("id", uq), Oq.setAttribute("aria-hidden", "true"), document.body.appendChild(Oq));
          var xq = mq(mq({}, cq), gq);
          Object.assign(Oq.style, xq), Oq.textContent = "".concat(qq);
          var Bq = Oq.getBoundingClientRect(),
            Wq = {
              width: Bq.width,
              height: Bq.height
            };
          return Aq.widthCache[lq] = Wq, ++Aq.cacheCount > 2e3 && (Aq.cacheCount = 0, Aq.widthCache = {}), Wq
        } catch (Nq) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      Wq = function(qq) {
        return {
          top: qq.top + window.scrollY - document.documentElement.clientTop,
          left: qq.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4990: (qq, Eq, gq) => {
    gq.d(Eq, {
      D: () => Vq,
      G: () => aq,
      J: () => Nq,
      N: () => oq,
      e: () => hq,
      i: () => rq,
      j: () => Qq,
      l: () => vq,
      p: () => Pq,
      q: () => yq,
      r: () => tq,
      v: () => dq,
      z: () => jq
    });
    var Yq = gq(4992),
      lq = gq.n(Yq),
      Oq = gq(4998),
      mq = gq.n(Oq),
      xq = gq(5010),
      Aq = gq.n(xq),
      cq = gq(5001),
      uq = gq.n(cq),
      Bq = gq(5285),
      Wq = gq.n(Bq),
      Nq = function(qq) {
        return 0 === qq ? 0 : qq > 0 ? 1 : -1
      },
      aq = function(qq) {
        return lq()(qq) && qq.indexOf("%") === qq.length - 1
      },
      Vq = function(qq) {
        return uq()(qq) && !mq()(qq)
      },
      dq = function(qq) {
        return Wq()(qq)
      },
      jq = function(qq) {
        return Vq(qq) || lq()(qq)
      },
      Hq = 0,
      oq = function(qq) {
        var Eq = ++Hq;
        return "".concat(qq || "").concat(Eq)
      },
      Pq = function(qq, Eq) {
        var gq, Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Oq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Vq(qq) && !lq()(qq)) return Yq;
        if (aq(qq)) {
          var xq = qq.indexOf("%");
          gq = Eq * parseFloat(qq.slice(0, xq)) / 100
        } else gq = +qq;
        return mq()(gq) && (gq = Yq), Oq && gq > Eq && (gq = Eq), gq
      },
      Qq = function(qq) {
        if (!qq) return null;
        var Eq = Object.keys(qq);
        return Eq && Eq.length ? qq[Eq[0]] : null
      },
      yq = function(qq) {
        if (!Array.isArray(qq)) return !1;
        for (var Eq = qq.length, gq = {}, Yq = 0; Yq < Eq; Yq++) {
          if (gq[qq[Yq]]) return !0;
          gq[qq[Yq]] = !0
        }
        return !1
      },
      tq = function(qq, Eq) {
        return Vq(qq) && Vq(Eq) ? function(gq) {
          return qq + gq * (Eq - qq)
        } : function() {
          return Eq
        }
      };

    function rq(qq, Eq, gq) {
      return qq && qq.length ? qq.find((function(qq) {
        return qq && ("function" === typeof Eq ? Eq(qq) : Aq()(qq, Eq)) === gq
      })) : null
    }
    var vq = function(qq) {
        if (!qq || !qq.length) return null;
        for (var Eq = qq.length, gq = 0, Yq = 0, lq = 0, Oq = 0, mq = 1 / 0, xq = -1 / 0, Aq = 0, cq = 0, uq = 0; uq < Eq; uq++) gq += Aq = qq[uq].cx || 0, Yq += cq = qq[uq].cy || 0, lq += Aq * cq, Oq += Aq * Aq, mq = Math.min(mq, Aq), xq = Math.max(xq, Aq);
        var Bq = Eq * Oq !== gq * gq ? (Eq * lq - gq * Yq) / (Eq * Oq - gq * gq) : 0;
        return {
          xmin: mq,
          xmax: xq,
          a: Bq,
          b: (Yq - Bq * gq) / Eq
        }
      },
      hq = function(qq, Eq) {
        return Vq(qq) && Vq(Eq) ? qq - Eq : lq()(qq) && lq()(Eq) ? qq.localeCompare(Eq) : qq instanceof Date && Eq instanceof Date ? qq.getTime() - Eq.getTime() : String(qq).localeCompare(String(Eq))
      }
  },
  5856: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    var Yq = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(qq) {
        return Yq[qq]
      },
      set: function(qq, Eq) {
        if ("string" === typeof qq) Yq[qq] = Eq;
        else {
          var gq = Object.keys(qq);
          gq && gq.length && gq.forEach((function(Eq) {
            Yq[Eq] = qq[Eq]
          }))
        }
      }
    }
  },
  6123: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    var Yq = function(qq, Eq) {
      var gq = qq.alwaysShow,
        Yq = qq.ifOverflow;
      return gq && (Yq = "extendDomain"), Yq === Eq
    }
  },
  5290: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    var Yq = function(qq, Eq) {
      for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq]
    }
  },
  6114: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      h: () => Wq,
      l: () => cq
    });
    gq(5285), gq(57), gq(5105);

    function Yq(qq) {
      return Yq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Yq(qq)
    }

    function lq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Oq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? lq(Object(gq), !0).forEach((function(Eq) {
          mq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : lq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function mq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != Yq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var lq = gq.call(qq, Eq || "default");
            if ("object" != Yq(lq)) return lq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == Yq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var xq = Math.PI / 180,
      Aq = function(qq) {
        return 180 * qq / Math.PI
      },
      cq = function(qq, Eq, gq, Yq) {
        return {
          x: qq + Math.cos(-xq * Yq) * gq,
          y: Eq + Math.sin(-xq * Yq) * gq
        }
      },
      uq = function(qq, Eq) {
        var gq = qq.x,
          Yq = qq.y,
          lq = Eq.cx,
          Oq = Eq.cy,
          mq = function(qq, Eq) {
            var gq = qq.x,
              Yq = qq.y,
              lq = Eq.x,
              Oq = Eq.y;
            return Math.sqrt(Math.pow(gq - lq, 2) + Math.pow(Yq - Oq, 2))
          }({
            x: gq,
            y: Yq
          }, {
            x: lq,
            y: Oq
          });
        if (mq <= 0) return {
          radius: mq
        };
        var xq = (gq - lq) / mq,
          cq = Math.acos(xq);
        return Yq > Oq && (cq = 2 * Math.PI - cq), {
          radius: mq,
          angle: Aq(cq),
          angleInRadian: cq
        }
      },
      Bq = function(qq, Eq) {
        var gq = Eq.startAngle,
          Yq = Eq.endAngle,
          lq = Math.floor(gq / 360),
          Oq = Math.floor(Yq / 360);
        return qq + 360 * Math.min(lq, Oq)
      },
      Wq = function(qq, Eq) {
        var gq = qq.x,
          Yq = qq.y,
          lq = uq({
            x: gq,
            y: Yq
          }, Eq),
          mq = lq.radius,
          xq = lq.angle,
          Aq = Eq.innerRadius,
          cq = Eq.outerRadius;
        if (mq < Aq || mq > cq) return !1;
        if (0 === mq) return !0;
        var Wq, Nq = function(qq) {
            var Eq = qq.startAngle,
              gq = qq.endAngle,
              Yq = Math.floor(Eq / 360),
              lq = Math.floor(gq / 360),
              Oq = Math.min(Yq, lq);
            return {
              startAngle: Eq - 360 * Oq,
              endAngle: gq - 360 * Oq
            }
          }(Eq),
          aq = Nq.startAngle,
          Vq = Nq.endAngle,
          dq = xq;
        if (aq <= Vq) {
          for (; dq > Vq;) dq -= 360;
          for (; dq < aq;) dq += 360;
          Wq = dq >= aq && dq <= Vq
        } else {
          for (; dq > aq;) dq -= 360;
          for (; dq < Vq;) dq += 360;
          Wq = dq >= Vq && dq <= aq
        }
        return Wq ? Oq(Oq({}, Eq), {}, {
          radius: mq,
          angle: Bq(dq, Eq)
        }) : null
      }
  },
  5297: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Tq,
      g: () => nq,
      j: () => bq,
      l: () => tq,
      o: () => Gq,
      p: () => Mq,
      r: () => zq,
      s: () => Lq,
      w: () => pq,
      y: () => iq
    });
    var Yq = gq(5010),
      lq = gq.n(Yq),
      Oq = gq(5285),
      mq = gq.n(Oq),
      xq = gq(4992),
      Aq = gq.n(xq),
      cq = gq(5105),
      uq = gq.n(cq),
      Bq = gq(4920),
      Wq = gq.n(Bq),
      Nq = gq(57),
      aq = gq(5305),
      Vq = gq(4990),
      dq = gq(5318),
      jq = gq(5324),
      Hq = ["children"],
      oq = ["children"];

    function Pq(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Yq)) {
            if (Eq.indexOf(Yq) >= 0) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function Qq(qq) {
      return Qq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Qq(qq)
    }
    var yq = {
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
      tq = function(qq) {
        return "string" === typeof qq ? qq : qq ? qq.displayName || qq.name || "Component" : ""
      },
      rq = null,
      vq = null,
      hq = function qq(Eq) {
        if (Eq === rq && Array.isArray(vq)) return vq;
        var gq = [];
        return Nq.Children.forEach(Eq, (function(Eq) {
          mq()(Eq) || ((0, aq.isFragment)(Eq) ? gq = gq.concat(qq(Eq.props.children)) : gq.push(Eq))
        })), vq = gq, rq = Eq, gq
      };

    function nq(qq, Eq) {
      var gq = [],
        Yq = [];
      return Yq = Array.isArray(Eq) ? Eq.map((function(qq) {
        return tq(qq)
      })) : [tq(Eq)], hq(qq).forEach((function(qq) {
        var Eq = lq()(qq, "type.displayName") || lq()(qq, "type.name"); - 1 !== Yq.indexOf(Eq) && gq.push(qq)
      })), gq
    }

    function bq(qq, Eq) {
      var gq = nq(qq, Eq);
      return gq && gq[0]
    }
    var iq = function(qq) {
        if (!qq || !qq.props) return !1;
        var Eq = qq.props,
          gq = Eq.width,
          Yq = Eq.height;
        return !(!(0, Vq.D)(gq) || gq <= 0 || !(0, Vq.D)(Yq) || Yq <= 0)
      },
      Zq = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      fq = function(qq) {
        return qq && qq.type && Aq()(qq.type) && Zq.indexOf(qq.type) >= 0
      },
      Mq = function(qq) {
        return qq && "object" === Qq(qq) && "clipDot" in qq
      },
      Tq = function(qq, Eq, gq) {
        if (!qq || "function" === typeof qq || "boolean" === typeof qq) return null;
        var Yq = qq;
        if ((0, Nq.isValidElement)(qq) && (Yq = qq.props), !Wq()(Yq)) return null;
        var lq = {};
        return Object.keys(Yq).forEach((function(qq) {
          var Oq;
          (function(qq, Eq, gq, Yq) {
            var lq, Oq = null !== (lq = null === jq.e || void 0 === jq.e ? void 0 : jq.e[Yq]) && void 0 !== lq ? lq : [];
            return Eq.startsWith("data-") || !uq()(qq) && (Yq && Oq.includes(Eq) || jq.i.includes(Eq)) || gq && jq.c.includes(Eq)
          })(null === (Oq = Yq) || void 0 === Oq ? void 0 : Oq[qq], qq, Eq, gq) && (lq[qq] = Yq[qq])
        })), lq
      },
      zq = function qq(Eq, gq) {
        if (Eq === gq) return !0;
        var Yq = Nq.Children.count(Eq);
        if (Yq !== Nq.Children.count(gq)) return !1;
        if (0 === Yq) return !0;
        if (1 === Yq) return Sq(Array.isArray(Eq) ? Eq[0] : Eq, Array.isArray(gq) ? gq[0] : gq);
        for (var lq = 0; lq < Yq; lq++) {
          var Oq = Eq[lq],
            mq = gq[lq];
          if (Array.isArray(Oq) || Array.isArray(mq)) {
            if (!qq(Oq, mq)) return !1
          } else if (!Sq(Oq, mq)) return !1
        }
        return !0
      },
      Sq = function(qq, Eq) {
        if (mq()(qq) && mq()(Eq)) return !0;
        if (!mq()(qq) && !mq()(Eq)) {
          var gq = qq.props || {},
            Yq = gq.children,
            lq = Pq(gq, Hq),
            Oq = Eq.props || {},
            xq = Oq.children,
            Aq = Pq(Oq, oq);
          return Yq && xq ? (0, dq.b)(lq, Aq) && zq(Yq, xq) : !Yq && !xq && (0, dq.b)(lq, Aq)
        }
        return !1
      },
      pq = function(qq, Eq) {
        var gq = [],
          Yq = {};
        return hq(qq).forEach((function(qq, lq) {
          if (fq(qq)) gq.push(qq);
          else if (qq) {
            var Oq = tq(qq.type),
              mq = Eq[Oq] || {},
              xq = mq.handler,
              Aq = mq.once;
            if (xq && (!Aq || !Yq[Oq])) {
              var cq = xq(qq, Oq, lq);
              gq.push(cq), Yq[Oq] = !0
            }
          }
        })), gq
      },
      Gq = function(qq) {
        var Eq = qq && qq.type;
        return Eq && yq[Eq] ? yq[Eq] : null
      },
      Lq = function(qq, Eq) {
        return hq(Eq).indexOf(qq)
      }
  },
  5318: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      for (var gq in qq)
        if ({}.hasOwnProperty.call(qq, gq) && (!{}.hasOwnProperty.call(Eq, gq) || qq[gq] !== Eq[gq])) return !1;
      for (var Yq in Eq)
        if ({}.hasOwnProperty.call(Eq, Yq) && !{}.hasOwnProperty.call(qq, Yq)) return !1;
      return !0
    }
    gq.d(Eq, {
      b: () => Yq
    })
  },
  6095: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => uq
    });
    var Yq = gq(5931),
      lq = gq(6014),
      Oq = gq(5297);

    function mq(qq) {
      return mq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, mq(qq)
    }

    function xq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Aq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? xq(Object(gq), !0).forEach((function(Eq) {
          cq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : xq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function cq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != mq(qq) || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != mq(Yq)) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == mq(Eq) ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }
    var uq = function(qq) {
      var Eq = qq.children,
        gq = qq.formattedGraphicalItems,
        mq = qq.legendWidth,
        xq = qq.legendContent,
        cq = (0, Oq.j)(Eq, Yq.d);
      if (!cq) return null;
      var uq, Bq = Yq.d.defaultProps,
        Wq = void 0 !== Bq ? Aq(Aq({}, Bq), cq.props) : {};
      return uq = cq.props && cq.props.payload ? cq.props && cq.props.payload : "children" === xq ? (gq || []).reduce((function(qq, Eq) {
        var gq = Eq.item,
          Yq = Eq.props,
          lq = Yq.sectors || Yq.data || [];
        return qq.concat(lq.map((function(qq) {
          return {
            type: cq.props.iconType || gq.props.legendType,
            value: qq.name,
            color: qq.fill,
            payload: qq
          }
        })))
      }), []) : (gq || []).map((function(qq) {
        var Eq = qq.item,
          gq = Eq.type.defaultProps,
          Yq = void 0 !== gq ? Aq(Aq({}, gq), Eq.props) : {},
          Oq = Yq.dataKey,
          mq = Yq.name,
          xq = Yq.legendType;
        return {
          inactive: Yq.hide,
          dataKey: Oq,
          type: Wq.iconType || xq || "square",
          color: (0, lq.K)(Eq),
          value: mq || Oq,
          payload: Yq
        }
      })), Aq(Aq(Aq({}, Wq), Yq.d.getWithHeight(cq, mq)), {}, {
        payload: uq,
        item: cq
      })
    }
  },
  5860: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq
    });
    var Yq = gq(5864),
      lq = gq.n(Yq),
      Oq = gq(5105),
      mq = gq.n(Oq);

    function xq(qq, Eq, gq) {
      return !0 === Eq ? lq()(qq, gq) : mq()(Eq) ? lq()(qq, Eq) : qq
    }
  },
  5324: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => uq,
      e: () => cq,
      i: () => xq,
      m: () => Bq,
      n: () => Wq
    });
    var Yq = gq(57),
      lq = gq(4920),
      Oq = gq.n(lq);

    function mq(qq) {
      return mq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, mq(qq)
    }
    var xq = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "gN", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      Aq = ["points", "pathLength"],
      cq = {
        svg: ["viewBox", "children"],
        polygon: Aq,
        polyline: Aq
      },
      uq = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      Bq = function(qq, Eq) {
        if (!qq || "function" === typeof qq || "boolean" === typeof qq) return null;
        var gq = qq;
        if ((0, Yq.isValidElement)(qq) && (gq = qq.props), !Oq()(gq)) return null;
        var lq = {};
        return Object.keys(gq).forEach((function(qq) {
          uq.includes(qq) && (lq[qq] = Eq || function(Eq) {
            return gq[qq](gq, Eq)
          })
        })), lq
      },
      Wq = function(qq, Eq, gq) {
        if (!Oq()(qq) || "object" !== mq(qq)) return null;
        var Yq = null;
        return Object.keys(qq).forEach((function(lq) {
          var Oq = qq[lq];
          uq.includes(lq) && "function" === typeof Oq && (Yq || (Yq = {}), Yq[lq] = function(qq, Eq, gq) {
            return function(Yq) {
              return qq(Eq, gq, Yq), null
            }
          }(Oq, Eq, gq))
        })), Yq
      }
  },
  5314: (qq, Eq) => {
    var gq, Yq = Symbol.for("react.element"),
      lq = Symbol.for("react.portal"),
      Oq = Symbol.for("react.fragment"),
      mq = Symbol.for("react.strict_mode"),
      xq = Symbol.for("react.profiler"),
      Aq = Symbol.for("react.provider"),
      cq = Symbol.for("react.context"),
      uq = Symbol.for("react.server_context"),
      Bq = Symbol.for("react.forward_ref"),
      Wq = Symbol.for("react.suspense"),
      Nq = Symbol.for("react.suspense_list"),
      aq = Symbol.for("react.memo"),
      Vq = Symbol.for("react.lazy"),
      dq = Symbol.for("react.offscreen");

    function jq(qq) {
      if ("object" === typeof qq && null !== qq) {
        var Eq = qq.$$typeof;
        switch (Eq) {
          case Yq:
            switch (qq = qq.type) {
              case Oq:
              case xq:
              case mq:
              case Wq:
              case Nq:
                return qq;
              default:
                switch (qq = qq && qq.$$typeof) {
                  case uq:
                  case cq:
                  case Bq:
                  case Vq:
                  case aq:
                  case Aq:
                    return qq;
                  default:
                    return Eq
                }
            }
          case lq:
            return Eq
        }
      }
    }
    gq = Symbol.for("react.module.reference"), Eq.isFragment = function(qq) {
      return jq(qq) === Oq
    }
  },
  5305: (qq, Eq, gq) => {
    qq.exports = gq(5314)
  },
  4907: (qq, Eq, gq) => {
    function Yq(qq) {
      var Eq, gq, lq = "";
      if ("string" == typeof qq || "number" == typeof qq) lq += qq;
      else if ("object" == typeof qq)
        if (Array.isArray(qq)) {
          var Oq = qq.length;
          for (Eq = 0; Eq < Oq; Eq++) qq[Eq] && (gq = Yq(qq[Eq])) && (lq && (lq += " "), lq += gq)
        } else
          for (gq in qq) qq[gq] && (lq && (lq += " "), lq += gq);
      return lq
    }
    gq.d(Eq, {
      d: () => lq
    });
    const lq = function() {
      for (var qq, Eq, gq = 0, lq = "", Oq = arguments.length; gq < Oq; gq++)(qq = arguments[gq]) && (Eq = Yq(qq)) && (lq && (lq += " "), lq += Eq);
      return lq
    }
  },
  6017: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => xq
    });
    var Yq = gq(6021),
      lq = gq(6025);

    function Oq() {
      var qq, Eq, gq = (0, lq.e)().unknown(void 0),
        mq = gq.domain,
        xq = gq.range,
        Aq = 0,
        cq = 1,
        uq = !1,
        Bq = 0,
        Wq = 0,
        Nq = .5;

      function aq() {
        var gq = mq().length,
          Yq = cq < Aq,
          lq = Yq ? cq : Aq,
          Oq = Yq ? Aq : cq;
        qq = (Oq - lq) / Math.max(1, gq - Bq + 2 * Wq), uq && (qq = Math.floor(qq)), lq += (Oq - lq - qq * (gq - Bq)) * Nq, Eq = qq * (1 - Bq), uq && (lq = Math.round(lq), Eq = Math.round(Eq));
        var aq = function(qq, Eq, gq) {
          qq = +qq, Eq = +Eq, gq = (lq = arguments.length) < 2 ? (Eq = qq, qq = 0, 1) : lq < 3 ? 1 : +gq;
          for (var Yq = -1, lq = 0 | Math.max(0, Math.ceil((Eq - qq) / gq)), Oq = new Array(lq); ++Yq < lq;) Oq[Yq] = qq + Yq * gq;
          return Oq
        }(gq).map((function(Eq) {
          return lq + qq * Eq
        }));
        return xq(Yq ? aq.reverse() : aq)
      }
      return delete gq.unknown, gq.domain = function(qq) {
        return arguments.length ? (mq(qq), aq()) : mq()
      }, gq.range = function(qq) {
        return arguments.length ? ([Aq, cq] = qq, Aq = +Aq, cq = +cq, aq()) : [Aq, cq]
      }, gq.rangeRound = function(qq) {
        return [Aq, cq] = qq, Aq = +Aq, cq = +cq, uq = !0, aq()
      }, gq.bandwidth = function() {
        return Eq
      }, gq.step = function() {
        return qq
      }, gq.round = function(qq) {
        return arguments.length ? (uq = !!qq, aq()) : uq
      }, gq.padding = function(qq) {
        return arguments.length ? (Bq = Math.min(1, Wq = +qq), aq()) : Bq
      }, gq.paddingInner = function(qq) {
        return arguments.length ? (Bq = Math.min(1, qq), aq()) : Bq
      }, gq.paddingOuter = function(qq) {
        return arguments.length ? (Wq = +qq, aq()) : Wq
      }, gq.align = function(qq) {
        return arguments.length ? (Nq = Math.max(0, Math.min(1, qq)), aq()) : Nq
      }, gq.copy = function() {
        return Oq(mq(), [Aq, cq]).round(uq).paddingInner(Bq).paddingOuter(Wq).align(Nq)
      }, Yq.e.apply(aq(), arguments)
    }

    function mq(qq) {
      var Eq = qq.copy;
      return qq.padding = qq.paddingOuter, delete qq.paddingInner, delete qq.paddingOuter, qq.copy = function() {
        return mq(Eq())
      }, qq
    }

    function xq() {
      return mq(Oq.apply(null, arguments).paddingInner(1))
    }
  },
  6021: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(qq);
          break;
        default:
          this.range(Eq).domain(qq)
      }
      return this
    }

    function lq(qq, Eq) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof qq ? this.interpolator(qq) : this.range(qq);
          break;
        default:
          this.domain(qq), "function" === typeof Eq ? this.interpolator(Eq) : this.range(Eq)
      }
      return this
    }
    gq.d(Eq, {
      c: () => lq,
      e: () => Yq
    })
  },
  6025: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq,
      g: () => cq
    });
    class Yq extends Map {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xq;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: Eq
            }
          }), null != qq)
          for (const [gq, Yq] of qq) this.set(gq, Yq)
      }
      get(qq) {
        return super.get(lq(this, qq))
      }
      has(qq) {
        return super.has(lq(this, qq))
      }
      set(qq, Eq) {
        return super.set(Oq(this, qq), Eq)
      }
      delete(qq) {
        return super.delete(mq(this, qq))
      }
    }
    Set;

    function lq(qq, Eq) {
      let {
        _intern: gq,
        _key: Yq
      } = qq;
      const lq = Yq(Eq);
      return gq.has(lq) ? gq.get(lq) : Eq
    }

    function Oq(qq, Eq) {
      let {
        _intern: gq,
        _key: Yq
      } = qq;
      const lq = Yq(Eq);
      return gq.has(lq) ? gq.get(lq) : (gq.set(lq, Eq), Eq)
    }

    function mq(qq, Eq) {
      let {
        _intern: gq,
        _key: Yq
      } = qq;
      const lq = Yq(Eq);
      return gq.has(lq) && (Eq = gq.get(lq), gq.delete(lq)), Eq
    }

    function xq(qq) {
      return null !== qq && "object" === typeof qq ? qq.valueOf() : qq
    }
    var Aq = gq(6021);
    const cq = Symbol("implicit");

    function uq() {
      var qq = new Yq,
        Eq = [],
        gq = [],
        lq = cq;

      function Oq(Yq) {
        let Oq = qq.get(Yq);
        if (void 0 === Oq) {
          if (lq !== cq) return lq;
          qq.set(Yq, Oq = Eq.push(Yq) - 1)
        }
        return gq[Oq % gq.length]
      }
      return Oq.domain = function(gq) {
        if (!arguments.length) return Eq.slice();
        Eq = [], qq = new Yq;
        for (const Yq of gq) qq.has(Yq) || qq.set(Yq, Eq.push(Yq) - 1);
        return Oq
      }, Oq.range = function(qq) {
        return arguments.length ? (gq = Array.from(qq), Oq) : gq.slice()
      }, Oq.unknown = function(qq) {
        return arguments.length ? (lq = qq, Oq) : lq
      }, Oq.copy = function() {
        return uq(Eq, gq).unknown(lq)
      }, Aq.e.apply(Oq, arguments), Oq
    }
  },
  6098: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    Array.prototype.slice;

    function Yq(qq) {
      return "object" === typeof qq && "length" in qq ? qq : Array.from(qq)
    }
  },
  5979: (qq, Eq, gq) => {
    function Yq(qq) {
      return function() {
        return qq
      }
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  5982: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq
    });
    const Yq = Math.PI,
      lq = 2 * Yq,
      Oq = 1e-6,
      mq = lq - Oq;

    function xq(qq) {
      this._ += qq[0];
      for (let Eq = 1, gq = qq.length; Eq < gq; ++Eq) this._ += arguments[Eq] + qq[Eq]
    }
    class Aq {
      constructor(qq) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == qq ? xq : function(qq) {
          let Eq = Math.floor(qq);
          if (!(Eq >= 0)) throw new Error(`invalid digits: ${qq}`);
          if (Eq > 15) return xq;
          const gq = 10 ** Eq;
          return function(qq) {
            this._ += qq[0];
            for (let Eq = 1, Yq = qq.length; Eq < Yq; ++Eq) this._ += Math.round(arguments[Eq] * gq) / gq + qq[Eq]
          }
        }(qq)
      }
      moveTo(qq, Eq) {
        this._append`M${this._x0=this._x1=+qq},${this._y0=this._y1=+Eq}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(qq, Eq) {
        this._append`L${this._x1=+qq},${this._y1=+Eq}`
      }
      quadraticCurveTo(qq, Eq, gq, Yq) {
        this._append`Q${+qq},${+Eq},${this._x1=+gq},${this._y1=+Yq}`
      }
      bezierCurveTo(qq, Eq, gq, Yq, lq, Oq) {
        this._append`C${+qq},${+Eq},${+gq},${+Yq},${this._x1=+lq},${this._y1=+Oq}`
      }
      arcTo(qq, Eq, gq, lq, mq) {
        if (qq = +qq, Eq = +Eq, gq = +gq, lq = +lq, (mq = +mq) < 0) throw new Error(`negative radius: ${mq}`);
        let xq = this._x1,
          Aq = this._y1,
          cq = gq - qq,
          uq = lq - Eq,
          Bq = xq - qq,
          Wq = Aq - Eq,
          Nq = Bq * Bq + Wq * Wq;
        if (null === this._x1) this._append`M${this._x1=qq},${this._y1=Eq}`;
        else if (Nq > Oq)
          if (Math.abs(Wq * cq - uq * Bq) > Oq && mq) {
            let aq = gq - xq,
              Vq = lq - Aq,
              dq = cq * cq + uq * uq,
              jq = aq * aq + Vq * Vq,
              Hq = Math.sqrt(dq),
              oq = Math.sqrt(Nq),
              Pq = mq * Math.tan((Yq - Math.acos((dq + Nq - jq) / (2 * Hq * oq))) / 2),
              Qq = Pq / oq,
              yq = Pq / Hq;
            Math.abs(Qq - 1) > Oq && this._append`L${qq+Qq*Bq},${Eq+Qq*Wq}`, this._append`A${mq},${mq},0,0,${+(Wq*aq>Bq*Vq)},${this._x1=qq+yq*cq},${this._y1=Eq+yq*uq}`
          } else this._append`L${this._x1=qq},${this._y1=Eq}`;
        else;
      }
      arc(qq, Eq, gq, xq, Aq, cq) {
        if (qq = +qq, Eq = +Eq, cq = !!cq, (gq = +gq) < 0) throw new Error(`negative radius: ${gq}`);
        let uq = gq * Math.cos(xq),
          Bq = gq * Math.sin(xq),
          Wq = qq + uq,
          Nq = Eq + Bq,
          aq = 1 ^ cq,
          Vq = cq ? xq - Aq : Aq - xq;
        null === this._x1 ? this._append`M${Wq},${Nq}` : (Math.abs(this._x1 - Wq) > Oq || Math.abs(this._y1 - Nq) > Oq) && this._append`L${Wq},${Nq}`, gq && (Vq < 0 && (Vq = Vq % lq + lq), Vq > mq ? this._append`A${gq},${gq},0,1,${aq},${qq-uq},${Eq-Bq}A${gq},${gq},0,1,${aq},${this._x1=Wq},${this._y1=Nq}` : Vq > Oq && this._append`A${gq},${gq},0,${+(Vq>=Yq)},${aq},${this._x1=qq+gq*Math.cos(Aq)},${this._y1=Eq+gq*Math.sin(Aq)}`)
      }
      rect(qq, Eq, gq, Yq) {
        this._append`M${this._x0=this._x1=+qq},${this._y0=this._y1=+Eq}h${gq=+gq}v${+Yq}h${-gq}Z`
      }
      toString() {
        return this._
      }
    }

    function cq(qq) {
      let Eq = 3;
      return qq.digits = function(gq) {
        if (!arguments.length) return Eq;
        if (null == gq) Eq = null;
        else {
          const qq = Math.floor(gq);
          if (!(qq >= 0)) throw new RangeError(`invalid digits: ${gq}`);
          Eq = qq
        }
        return qq
      }, () => new Aq(Eq)
    }
    Aq.prototype
  },
  5831: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = !0,
      lq = "Invariant failed";

    function Oq(qq, Eq) {
      if (!qq) {
        if (Yq) throw new Error(lq);
        var gq = "function" === typeof Eq ? Eq() : Eq,
          Oq = gq ? "".concat(lq, ": ").concat(gq) : lq;
        throw new Error(Oq)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);