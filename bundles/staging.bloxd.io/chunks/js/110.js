/*! For license information please see teusab.110.21c36a40.chunk.js.LICENSE.txt */
export const id = 110;
export const ids = [110];
export const modules = {
  5818: function(bb, ab, Ub) {
    var Ab;
    ! function() {
      var Mb, Tb = 1e9,
        Eb = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        Yb = !0,
        Bb = "[DecimalError] ",
        eb = Bb + "Invalid argument: ",
        vb = Bb + "Exponent out of range: ",
        Lb = Math.floor,
        Pb = Math.pow,
        Xb = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        jb = 1e7,
        Rb = 9007199254740991,
        kb = Lb(1286742750677284.5),
        yb = {};

      function Zb(bb, ab) {
        var Ub, Ab, Mb, Tb, Eb, Bb, eb, vb, Lb = bb.constructor,
          Pb = Lb.precision;
        if (!bb.s || !ab.s) return ab.s || (ab = new Lb(bb)), Yb ? Hb(ab, Pb) : ab;
        if (eb = bb.d, vb = ab.d, Eb = bb.e, Mb = ab.e, eb = eb.slice(), Tb = Eb - Mb) {
          for (Tb < 0 ? (Ab = eb, Tb = -Tb, Bb = vb.length) : (Ab = vb, Mb = Eb, Bb = eb.length), Tb > (Bb = (Eb = Math.ceil(Pb / 7)) > Bb ? Eb + 1 : Bb + 1) && (Tb = Bb, Ab.length = 1), Ab.reverse(); Tb--;) Ab.push(0);
          Ab.reverse()
        }
        for ((Bb = eb.length) - (Tb = vb.length) < 0 && (Tb = Bb, Ab = vb, vb = eb, eb = Ab), Ub = 0; Tb;) Ub = (eb[--Tb] = eb[Tb] + vb[Tb] + Ub) / jb | 0, eb[Tb] %= jb;
        for (Ub && (eb.unshift(Ub), ++Mb), Bb = eb.length; 0 == eb[--Bb];) eb.pop();
        return ab.d = eb, ab.e = Mb, Yb ? Hb(ab, Pb) : ab
      }

      function Db(bb, ab, Ub) {
        if (bb !== ~~bb || bb < ab || bb > Ub) throw Error(eb + bb)
      }

      function zb(bb) {
        var ab, Ub, Ab, Mb = bb.length - 1,
          Tb = "",
          Eb = bb[0];
        if (Mb > 0) {
          for (Tb += Eb, ab = 1; ab < Mb; ab++)(Ub = 7 - (Ab = bb[ab] + "").length) && (Tb += pb(Ub)), Tb += Ab;
          (Ub = 7 - (Ab = (Eb = bb[ab]) + "").length) && (Tb += pb(Ub))
        } else if (0 === Eb) return "0";
        for (; Eb % 10 === 0;) Eb /= 10;
        return Tb + Eb
      }
      yb.absoluteValue = yb.abs = function() {
        var bb = new this.constructor(this);
        return bb.s && (bb.s = 1), bb
      }, yb.comparedTo = yb.cmp = function(bb) {
        var ab, Ub, Ab, Mb, Tb = this;
        if (bb = new Tb.constructor(bb), Tb.s !== bb.s) return Tb.s || -bb.s;
        if (Tb.e !== bb.e) return Tb.e > bb.e ^ Tb.s < 0 ? 1 : -1;
        for (ab = 0, Ub = (Ab = Tb.d.length) < (Mb = bb.d.length) ? Ab : Mb; ab < Ub; ++ab)
          if (Tb.d[ab] !== bb.d[ab]) return Tb.d[ab] > bb.d[ab] ^ Tb.s < 0 ? 1 : -1;
        return Ab === Mb ? 0 : Ab > Mb ^ Tb.s < 0 ? 1 : -1
      }, yb.decimalPlaces = yb.dp = function() {
        var bb = this,
          ab = bb.d.length - 1,
          Ub = 7 * (ab - bb.e);
        if (ab = bb.d[ab])
          for (; ab % 10 == 0; ab /= 10) Ub--;
        return Ub < 0 ? 0 : Ub
      }, yb.dividedBy = yb.div = function(bb) {
        return xb(this, new this.constructor(bb))
      }, yb.dividedToIntegerBy = yb.idiv = function(bb) {
        var ab = this.constructor;
        return Hb(xb(this, new ab(bb), 0, 1), ab.precision)
      }, yb.equals = yb.eq = function(bb) {
        return !this.cmp(bb)
      }, yb.exponent = function() {
        return fb(this)
      }, yb.greaterThan = yb.gt = function(bb) {
        return this.cmp(bb) > 0
      }, yb.greaterThanOrEqualTo = yb.gte = function(bb) {
        return this.cmp(bb) >= 0
      }, yb.isInteger = yb.isint = function() {
        return this.e > this.d.length - 2
      }, yb.isNegative = yb.isneg = function() {
        return this.s < 0
      }, yb.isPositive = yb.ispos = function() {
        return this.s > 0
      }, yb.isZero = function() {
        return 0 === this.s
      }, yb.lessThan = yb.lt = function(bb) {
        return this.cmp(bb) < 0
      }, yb.lessThanOrEqualTo = yb.lte = function(bb) {
        return this.cmp(bb) < 1
      }, yb.logarithm = yb.log = function(bb) {
        var ab, Ub = this,
          Ab = Ub.constructor,
          Tb = Ab.precision,
          Eb = Tb + 5;
        if (void 0 === bb) bb = new Ab(10);
        else if ((bb = new Ab(bb)).s < 1 || bb.eq(Mb)) throw Error(Bb + "NaN");
        if (Ub.s < 1) throw Error(Bb + (Ub.s ? "NaN" : "-Infinity"));
        return Ub.eq(Mb) ? new Ab(0) : (Yb = !1, ab = xb(Nb(Ub, Eb), Nb(bb, Eb), Eb), Yb = !0, Hb(ab, Tb))
      }, yb.minus = yb.sub = function(bb) {
        var ab = this;
        return bb = new ab.constructor(bb), ab.s == bb.s ? Ib(ab, bb) : Zb(ab, (bb.s = -bb.s, bb))
      }, yb.modulo = yb.mod = function(bb) {
        var ab, Ub = this,
          Ab = Ub.constructor,
          Mb = Ab.precision;
        if (!(bb = new Ab(bb)).s) throw Error(Bb + "NaN");
        return Ub.s ? (Yb = !1, ab = xb(Ub, bb, 0, 1).times(bb), Yb = !0, Ub.minus(ab)) : Hb(new Ab(Ub), Mb)
      }, yb.naturalExponential = yb.exp = function() {
        return ib(this)
      }, yb.naturalLogarithm = yb.ln = function() {
        return Nb(this)
      }, yb.negated = yb.neg = function() {
        var bb = new this.constructor(this);
        return bb.s = -bb.s || 0, bb
      }, yb.plus = yb.add = function(bb) {
        var ab = this;
        return bb = new ab.constructor(bb), ab.s == bb.s ? Zb(ab, bb) : Ib(ab, (bb.s = -bb.s, bb))
      }, yb.precision = yb.sd = function(bb) {
        var ab, Ub, Ab, Mb = this;
        if (void 0 !== bb && bb !== !!bb && 1 !== bb && 0 !== bb) throw Error(eb + bb);
        if (ab = fb(Mb) + 1, Ub = 7 * (Ab = Mb.d.length - 1) + 1, Ab = Mb.d[Ab]) {
          for (; Ab % 10 == 0; Ab /= 10) Ub--;
          for (Ab = Mb.d[0]; Ab >= 10; Ab /= 10) Ub++
        }
        return bb && ab > Ub ? ab : Ub
      }, yb.squareRoot = yb.sqrt = function() {
        var bb, ab, Ub, Ab, Mb, Tb, Eb, eb = this,
          vb = eb.constructor;
        if (eb.s < 1) {
          if (!eb.s) return new vb(0);
          throw Error(Bb + "NaN")
        }
        for (bb = fb(eb), Yb = !1, 0 == (Mb = Math.sqrt(+eb)) || Mb == 1 / 0 ? (((ab = zb(eb.d)).length + bb) % 2 == 0 && (ab += "0"), Mb = Math.sqrt(ab), bb = Lb((bb + 1) / 2) - (bb < 0 || bb % 2), Ab = new vb(ab = Mb == 1 / 0 ? "1e" + bb : (ab = Mb.toExponential()).slice(0, ab.indexOf("e") + 1) + bb)) : Ab = new vb(Mb.toString()), Mb = Eb = (Ub = vb.precision) + 3;;)
          if (Ab = (Tb = Ab).plus(xb(eb, Tb, Eb + 2)).times(.5), zb(Tb.d).slice(0, Eb) === (ab = zb(Ab.d)).slice(0, Eb)) {
            if (ab = ab.slice(Eb - 3, Eb + 1), Mb == Eb && "4999" == ab) {
              if (Hb(Tb, Ub + 1, 0), Tb.times(Tb).eq(eb)) {
                Ab = Tb;
                break
              }
            } else if ("9999" != ab) break;
            Eb += 4
          } return Yb = !0, Hb(Ab, Ub)
      }, yb.times = yb.mul = function(bb) {
        var ab, Ub, Ab, Mb, Tb, Eb, Bb, eb, vb, Lb = this,
          Pb = Lb.constructor,
          Xb = Lb.d,
          Rb = (bb = new Pb(bb)).d;
        if (!Lb.s || !bb.s) return new Pb(0);
        for (bb.s *= Lb.s, Ub = Lb.e + bb.e, (eb = Xb.length) < (vb = Rb.length) && (Tb = Xb, Xb = Rb, Rb = Tb, Eb = eb, eb = vb, vb = Eb), Tb = [], Ab = Eb = eb + vb; Ab--;) Tb.push(0);
        for (Ab = vb; --Ab >= 0;) {
          for (ab = 0, Mb = eb + Ab; Mb > Ab;) Bb = Tb[Mb] + Rb[Ab] * Xb[Mb - Ab - 1] + ab, Tb[Mb--] = Bb % jb | 0, ab = Bb / jb | 0;
          Tb[Mb] = (Tb[Mb] + ab) % jb | 0
        }
        for (; !Tb[--Eb];) Tb.pop();
        return ab ? ++Ub : Tb.shift(), bb.d = Tb, bb.e = Ub, Yb ? Hb(bb, Pb.precision) : bb
      }, yb.toDecimalPlaces = yb.todp = function(bb, ab) {
        var Ub = this,
          Ab = Ub.constructor;
        return Ub = new Ab(Ub), void 0 === bb ? Ub : (Db(bb, 0, Tb), void 0 === ab ? ab = Ab.rounding : Db(ab, 0, 8), Hb(Ub, bb + fb(Ub) + 1, ab))
      }, yb.toExponential = function(bb, ab) {
        var Ub, Ab = this,
          Mb = Ab.constructor;
        return void 0 === bb ? Ub = db(Ab, !0) : (Db(bb, 0, Tb), void 0 === ab ? ab = Mb.rounding : Db(ab, 0, 8), Ub = db(Ab = Hb(new Mb(Ab), bb + 1, ab), !0, bb + 1)), Ub
      }, yb.toFixed = function(bb, ab) {
        var Ub, Ab, Mb = this,
          Eb = Mb.constructor;
        return void 0 === bb ? db(Mb) : (Db(bb, 0, Tb), void 0 === ab ? ab = Eb.rounding : Db(ab, 0, 8), Ub = db((Ab = Hb(new Eb(Mb), bb + fb(Mb) + 1, ab)).abs(), !1, bb + fb(Ab) + 1), Mb.isneg() && !Mb.isZero() ? "-" + Ub : Ub)
      }, yb.toInteger = yb.toint = function() {
        var bb = this,
          ab = bb.constructor;
        return Hb(new ab(bb), fb(bb) + 1, ab.rounding)
      }, yb.toNumber = function() {
        return +this
      }, yb.toPower = yb.pow = function(bb) {
        var ab, Ub, Ab, Tb, Eb, eb, vb = this,
          Pb = vb.constructor,
          Xb = +(bb = new Pb(bb));
        if (!bb.s) return new Pb(Mb);
        if (!(vb = new Pb(vb)).s) {
          if (bb.s < 1) throw Error(Bb + "Infinity");
          return vb
        }
        if (vb.eq(Mb)) return vb;
        if (Ab = Pb.precision, bb.eq(Mb)) return Hb(vb, Ab);
        if (eb = (ab = bb.e) >= (Ub = bb.d.length - 1), Eb = vb.s, eb) {
          if ((Ub = Xb < 0 ? -Xb : Xb) <= Rb) {
            for (Tb = new Pb(Mb), ab = Math.ceil(Ab / 7 + 4), Yb = !1; Ub % 2 && Fb((Tb = Tb.times(vb)).d, ab), 0 !== (Ub = Lb(Ub / 2));) Fb((vb = vb.times(vb)).d, ab);
            return Yb = !0, bb.s < 0 ? new Pb(Mb).div(Tb) : Hb(Tb, Ab)
          }
        } else if (Eb < 0) throw Error(Bb + "NaN");
        return Eb = Eb < 0 && 1 & bb.d[Math.max(ab, Ub)] ? -1 : 1, vb.s = 1, Yb = !1, Tb = bb.times(Nb(vb, Ab + 12)), Yb = !0, (Tb = ib(Tb)).s = Eb, Tb
      }, yb.toPrecision = function(bb, ab) {
        var Ub, Ab, Mb = this,
          Eb = Mb.constructor;
        return void 0 === bb ? Ab = db(Mb, (Ub = fb(Mb)) <= Eb.toExpNeg || Ub >= Eb.toExpPos) : (Db(bb, 1, Tb), void 0 === ab ? ab = Eb.rounding : Db(ab, 0, 8), Ab = db(Mb = Hb(new Eb(Mb), bb, ab), bb <= (Ub = fb(Mb)) || Ub <= Eb.toExpNeg, bb)), Ab
      }, yb.toSignificantDigits = yb.tosd = function(bb, ab) {
        var Ub = this.constructor;
        return void 0 === bb ? (bb = Ub.precision, ab = Ub.rounding) : (Db(bb, 1, Tb), void 0 === ab ? ab = Ub.rounding : Db(ab, 0, 8)), Hb(new Ub(this), bb, ab)
      }, yb.toString = yb.valueOf = yb.val = yb.toJSON = function() {
        var bb = this,
          ab = fb(bb),
          Ub = bb.constructor;
        return db(bb, ab <= Ub.toExpNeg || ab >= Ub.toExpPos)
      };
      var xb = function() {
        function bb(bb, ab) {
          var Ub, Ab = 0,
            Mb = bb.length;
          for (bb = bb.slice(); Mb--;) Ub = bb[Mb] * ab + Ab, bb[Mb] = Ub % jb | 0, Ab = Ub / jb | 0;
          return Ab && bb.unshift(Ab), bb
        }

        function ab(bb, ab, Ub, Ab) {
          var Mb, Tb;
          if (Ub != Ab) Tb = Ub > Ab ? 1 : -1;
          else
            for (Mb = Tb = 0; Mb < Ub; Mb++)
              if (bb[Mb] != ab[Mb]) {
                Tb = bb[Mb] > ab[Mb] ? 1 : -1;
                break
              } return Tb
        }

        function Ub(bb, ab, Ub) {
          for (var Ab = 0; Ub--;) bb[Ub] -= Ab, Ab = bb[Ub] < ab[Ub] ? 1 : 0, bb[Ub] = Ab * jb + bb[Ub] - ab[Ub];
          for (; !bb[0] && bb.length > 1;) bb.shift()
        }
        return function(Ab, Mb, Tb, Eb) {
          var Yb, eb, vb, Lb, Pb, Xb, Rb, kb, yb, Zb, Db, zb, xb, ib, mb, pb, Nb, Wb, Ib = Ab.constructor,
            db = Ab.s == Mb.s ? 1 : -1,
            Fb = Ab.d,
            hb = Mb.d;
          if (!Ab.s) return new Ib(Ab);
          if (!Mb.s) throw Error(Bb + "Division by zero");
          for (eb = Ab.e - Mb.e, Nb = hb.length, mb = Fb.length, kb = (Rb = new Ib(db)).d = [], vb = 0; hb[vb] == (Fb[vb] || 0);) ++vb;
          if (hb[vb] > (Fb[vb] || 0) && --eb, (zb = null == Tb ? Tb = Ib.precision : Eb ? Tb + (fb(Ab) - fb(Mb)) + 1 : Tb) < 0) return new Ib(0);
          if (zb = zb / 7 + 2 | 0, vb = 0, 1 == Nb)
            for (Lb = 0, hb = hb[0], zb++;
              (vb < mb || Lb) && zb--; vb++) xb = Lb * jb + (Fb[vb] || 0), kb[vb] = xb / hb | 0, Lb = xb % hb | 0;
          else {
            for ((Lb = jb / (hb[0] + 1) | 0) > 1 && (hb = bb(hb, Lb), Fb = bb(Fb, Lb), Nb = hb.length, mb = Fb.length), ib = Nb, Zb = (yb = Fb.slice(0, Nb)).length; Zb < Nb;) yb[Zb++] = 0;
            (Wb = hb.slice()).unshift(0), pb = hb[0], hb[1] >= jb / 2 && ++pb;
            do {
              Lb = 0, (Yb = ab(hb, yb, Nb, Zb)) < 0 ? (Db = yb[0], Nb != Zb && (Db = Db * jb + (yb[1] || 0)), (Lb = Db / pb | 0) > 1 ? (Lb >= jb && (Lb = jb - 1), 1 == (Yb = ab(Pb = bb(hb, Lb), yb, Xb = Pb.length, Zb = yb.length)) && (Lb--, Ub(Pb, Nb < Xb ? Wb : hb, Xb))) : (0 == Lb && (Yb = Lb = 1), Pb = hb.slice()), (Xb = Pb.length) < Zb && Pb.unshift(0), Ub(yb, Pb, Zb), -1 == Yb && (Yb = ab(hb, yb, Nb, Zb = yb.length)) < 1 && (Lb++, Ub(yb, Nb < Zb ? Wb : hb, Zb)), Zb = yb.length) : 0 === Yb && (Lb++, yb = [0]), kb[vb++] = Lb, Yb && yb[0] ? yb[Zb++] = Fb[ib] || 0 : (yb = [Fb[ib]], Zb = 1)
            } while ((ib++ < mb || void 0 !== yb[0]) && zb--)
          }
          return kb[0] || kb.shift(), Rb.e = eb, Hb(Rb, Eb ? Tb + fb(Rb) + 1 : Tb)
        }
      }();

      function ib(bb, ab) {
        var Ub, Ab, Tb, Eb, Bb, eb = 0,
          Lb = 0,
          Xb = bb.constructor,
          jb = Xb.precision;
        if (fb(bb) > 16) throw Error(vb + fb(bb));
        if (!bb.s) return new Xb(Mb);
        for (null == ab ? (Yb = !1, Bb = jb) : Bb = ab, Eb = new Xb(.03125); bb.abs().gte(.1);) bb = bb.times(Eb), Lb += 5;
        for (Bb += Math.log(Pb(2, Lb)) / Math.LN10 * 2 + 5 | 0, Ub = Ab = Tb = new Xb(Mb), Xb.precision = Bb;;) {
          if (Ab = Hb(Ab.times(bb), Bb), Ub = Ub.times(++eb), zb((Eb = Tb.plus(xb(Ab, Ub, Bb))).d).slice(0, Bb) === zb(Tb.d).slice(0, Bb)) {
            for (; Lb--;) Tb = Hb(Tb.times(Tb), Bb);
            return Xb.precision = jb, null == ab ? (Yb = !0, Hb(Tb, jb)) : Tb
          }
          Tb = Eb
        }
      }

      function fb(bb) {
        for (var ab = 7 * bb.e, Ub = bb.d[0]; Ub >= 10; Ub /= 10) ab++;
        return ab
      }

      function mb(bb, ab, Ub) {
        if (ab > bb.LN10.sd()) throw Yb = !0, Ub && (bb.precision = Ub), Error(Bb + "LN10 precision limit exceeded");
        return Hb(new bb(bb.LN10), ab)
      }

      function pb(bb) {
        for (var ab = ""; bb--;) ab += "0";
        return ab
      }

      function Nb(bb, ab) {
        var Ub, Ab, Tb, Eb, eb, vb, Lb, Pb, Xb, jb = 1,
          Rb = bb,
          kb = Rb.d,
          yb = Rb.constructor,
          Zb = yb.precision;
        if (Rb.s < 1) throw Error(Bb + (Rb.s ? "NaN" : "-Infinity"));
        if (Rb.eq(Mb)) return new yb(0);
        if (null == ab ? (Yb = !1, Pb = Zb) : Pb = ab, Rb.eq(10)) return null == ab && (Yb = !0), mb(yb, Pb);
        if (Pb += 10, yb.precision = Pb, Ab = (Ub = zb(kb)).charAt(0), Eb = fb(Rb), !(Math.abs(Eb) < 15e14)) return Lb = mb(yb, Pb + 2, Zb).times(Eb + ""), Rb = Nb(new yb(Ab + "." + Ub.slice(1)), Pb - 10).plus(Lb), yb.precision = Zb, null == ab ? (Yb = !0, Hb(Rb, Zb)) : Rb;
        for (; Ab < 7 && 1 != Ab || 1 == Ab && Ub.charAt(1) > 3;) Ab = (Ub = zb((Rb = Rb.times(bb)).d)).charAt(0), jb++;
        for (Eb = fb(Rb), Ab > 1 ? (Rb = new yb("0." + Ub), Eb++) : Rb = new yb(Ab + "." + Ub.slice(1)), vb = eb = Rb = xb(Rb.minus(Mb), Rb.plus(Mb), Pb), Xb = Hb(Rb.times(Rb), Pb), Tb = 3;;) {
          if (eb = Hb(eb.times(Xb), Pb), zb((Lb = vb.plus(xb(eb, new yb(Tb), Pb))).d).slice(0, Pb) === zb(vb.d).slice(0, Pb)) return vb = vb.times(2), 0 !== Eb && (vb = vb.plus(mb(yb, Pb + 2, Zb).times(Eb + ""))), vb = xb(vb, new yb(jb), Pb), yb.precision = Zb, null == ab ? (Yb = !0, Hb(vb, Zb)) : vb;
          vb = Lb, Tb += 2
        }
      }

      function Wb(bb, ab) {
        var Ub, Ab, Mb;
        for ((Ub = ab.indexOf(".")) > -1 && (ab = ab.replace(".", "")), (Ab = ab.search(/e/i)) > 0 ? (Ub < 0 && (Ub = Ab), Ub += +ab.slice(Ab + 1), ab = ab.substring(0, Ab)) : Ub < 0 && (Ub = ab.length), Ab = 0; 48 === ab.charCodeAt(Ab);) ++Ab;
        for (Mb = ab.length; 48 === ab.charCodeAt(Mb - 1);) --Mb;
        if (ab = ab.slice(Ab, Mb)) {
          if (Mb -= Ab, Ub = Ub - Ab - 1, bb.e = Lb(Ub / 7), bb.d = [], Ab = (Ub + 1) % 7, Ub < 0 && (Ab += 7), Ab < Mb) {
            for (Ab && bb.d.push(+ab.slice(0, Ab)), Mb -= 7; Ab < Mb;) bb.d.push(+ab.slice(Ab, Ab += 7));
            Ab = 7 - (ab = ab.slice(Ab)).length
          } else Ab -= Mb;
          for (; Ab--;) ab += "0";
          if (bb.d.push(+ab), Yb && (bb.e > kb || bb.e < -kb)) throw Error(vb + Ub)
        } else bb.s = 0, bb.e = 0, bb.d = [0];
        return bb
      }

      function Hb(bb, ab, Ub) {
        var Ab, Mb, Tb, Eb, Bb, eb, Xb, Rb, yb = bb.d;
        for (Eb = 1, Tb = yb[0]; Tb >= 10; Tb /= 10) Eb++;
        if ((Ab = ab - Eb) < 0) Ab += 7, Mb = ab, Xb = yb[Rb = 0];
        else {
          if ((Rb = Math.ceil((Ab + 1) / 7)) >= (Tb = yb.length)) return bb;
          for (Xb = Tb = yb[Rb], Eb = 1; Tb >= 10; Tb /= 10) Eb++;
          Mb = (Ab %= 7) - 7 + Eb
        }
        if (void 0 !== Ub && (Bb = Xb / (Tb = Pb(10, Eb - Mb - 1)) % 10 | 0, eb = ab < 0 || void 0 !== yb[Rb + 1] || Xb % Tb, eb = Ub < 4 ? (Bb || eb) && (0 == Ub || Ub == (bb.s < 0 ? 3 : 2)) : Bb > 5 || 5 == Bb && (4 == Ub || eb || 6 == Ub && (Ab > 0 ? Mb > 0 ? Xb / Pb(10, Eb - Mb) : 0 : yb[Rb - 1]) % 10 & 1 || Ub == (bb.s < 0 ? 8 : 7))), ab < 1 || !yb[0]) return eb ? (Tb = fb(bb), yb.length = 1, ab = ab - Tb - 1, yb[0] = Pb(10, (7 - ab % 7) % 7), bb.e = Lb(-ab / 7) || 0) : (yb.length = 1, yb[0] = bb.e = bb.s = 0), bb;
        if (0 == Ab ? (yb.length = Rb, Tb = 1, Rb--) : (yb.length = Rb + 1, Tb = Pb(10, 7 - Ab), yb[Rb] = Mb > 0 ? (Xb / Pb(10, Eb - Mb) % Pb(10, Mb) | 0) * Tb : 0), eb)
          for (;;) {
            if (0 == Rb) {
              (yb[0] += Tb) == jb && (yb[0] = 1, ++bb.e);
              break
            }
            if (yb[Rb] += Tb, yb[Rb] != jb) break;
            yb[Rb--] = 0, Tb = 1
          }
        for (Ab = yb.length; 0 === yb[--Ab];) yb.pop();
        if (Yb && (bb.e > kb || bb.e < -kb)) throw Error(vb + fb(bb));
        return bb
      }

      function Ib(bb, ab) {
        var Ub, Ab, Mb, Tb, Eb, Bb, eb, vb, Lb, Pb, Xb = bb.constructor,
          Rb = Xb.precision;
        if (!bb.s || !ab.s) return ab.s ? ab.s = -ab.s : ab = new Xb(bb), Yb ? Hb(ab, Rb) : ab;
        if (eb = bb.d, Pb = ab.d, Ab = ab.e, vb = bb.e, eb = eb.slice(), Eb = vb - Ab) {
          for ((Lb = Eb < 0) ? (Ub = eb, Eb = -Eb, Bb = Pb.length) : (Ub = Pb, Ab = vb, Bb = eb.length), Eb > (Mb = Math.max(Math.ceil(Rb / 7), Bb) + 2) && (Eb = Mb, Ub.length = 1), Ub.reverse(), Mb = Eb; Mb--;) Ub.push(0);
          Ub.reverse()
        } else {
          for ((Lb = (Mb = eb.length) < (Bb = Pb.length)) && (Bb = Mb), Mb = 0; Mb < Bb; Mb++)
            if (eb[Mb] != Pb[Mb]) {
              Lb = eb[Mb] < Pb[Mb];
              break
            } Eb = 0
        }
        for (Lb && (Ub = eb, eb = Pb, Pb = Ub, ab.s = -ab.s), Bb = eb.length, Mb = Pb.length - Bb; Mb > 0; --Mb) eb[Bb++] = 0;
        for (Mb = Pb.length; Mb > Eb;) {
          if (eb[--Mb] < Pb[Mb]) {
            for (Tb = Mb; Tb && 0 === eb[--Tb];) eb[Tb] = jb - 1;
            --eb[Tb], eb[Mb] += jb
          }
          eb[Mb] -= Pb[Mb]
        }
        for (; 0 === eb[--Bb];) eb.pop();
        for (; 0 === eb[0]; eb.shift()) --Ab;
        return eb[0] ? (ab.d = eb, ab.e = Ab, Yb ? Hb(ab, Rb) : ab) : new Xb(0)
      }

      function db(bb, ab, Ub) {
        var Ab, Mb = fb(bb),
          Tb = zb(bb.d),
          Eb = Tb.length;
        return ab ? (Ub && (Ab = Ub - Eb) > 0 ? Tb = Tb.charAt(0) + "." + Tb.slice(1) + pb(Ab) : Eb > 1 && (Tb = Tb.charAt(0) + "." + Tb.slice(1)), Tb = Tb + (Mb < 0 ? "e" : "e+") + Mb) : Mb < 0 ? (Tb = "0." + pb(-Mb - 1) + Tb, Ub && (Ab = Ub - Eb) > 0 && (Tb += pb(Ab))) : Mb >= Eb ? (Tb += pb(Mb + 1 - Eb), Ub && (Ab = Ub - Mb - 1) > 0 && (Tb = Tb + "." + pb(Ab))) : ((Ab = Mb + 1) < Eb && (Tb = Tb.slice(0, Ab) + "." + Tb.slice(Ab)), Ub && (Ab = Ub - Eb) > 0 && (Mb + 1 === Eb && (Tb += "."), Tb += pb(Ab))), bb.s < 0 ? "-" + Tb : Tb
      }

      function Fb(bb, ab) {
        if (bb.length > ab) return bb.length = ab, !0
      }

      function hb(bb) {
        if (!bb || "object" !== typeof bb) throw Error(Bb + "Object expected");
        var ab, Ub, Ab, Mb = ["precision", 1, Tb, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (ab = 0; ab < Mb.length; ab += 3)
          if (void 0 !== (Ab = bb[Ub = Mb[ab]])) {
            if (!(Lb(Ab) === Ab && Ab >= Mb[ab + 1] && Ab <= Mb[ab + 2])) throw Error(eb + Ub + ": " + Ab);
            this[Ub] = Ab
          } if (void 0 !== (Ab = bb[Ub = "LN10"])) {
          if (Ab != Math.LN10) throw Error(eb + Ub + ": " + Ab);
          this[Ub] = new this(Ab)
        }
        return this
      }
      Eb = function bb(ab) {
        var Ub, Ab, Mb;

        function Tb(bb) {
          var ab = this;
          if (!(ab instanceof Tb)) return new Tb(bb);
          if (ab.constructor = Tb, bb instanceof Tb) return ab.s = bb.s, ab.e = bb.e, void(ab.d = (bb = bb.d) ? bb.slice() : bb);
          if ("number" === typeof bb) {
            if (0 * bb !== 0) throw Error(eb + bb);
            if (bb > 0) ab.s = 1;
            else {
              if (!(bb < 0)) return ab.s = 0, ab.e = 0, void(ab.d = [0]);
              bb = -bb, ab.s = -1
            }
            return bb === ~~bb && bb < 1e7 ? (ab.e = 0, void(ab.d = [bb])) : Wb(ab, bb.toString())
          }
          if ("string" !== typeof bb) throw Error(eb + bb);
          if (45 === bb.charCodeAt(0) ? (bb = bb.slice(1), ab.s = -1) : ab.s = 1, !Xb.test(bb)) throw Error(eb + bb);
          Wb(ab, bb)
        }
        if (Tb.prototype = yb, Tb.ROUND_UP = 0, Tb.ROUND_DOWN = 1, Tb.ROUND_CEIL = 2, Tb.ROUND_FLOOR = 3, Tb.ROUND_HALF_UP = 4, Tb.ROUND_HALF_DOWN = 5, Tb.ROUND_HALF_EVEN = 6, Tb.ROUND_HALF_CEIL = 7, Tb.ROUND_HALF_FLOOR = 8, Tb.clone = bb, Tb.config = Tb.set = hb, void 0 === ab && (ab = {}), ab)
          for (Mb = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Ub = 0; Ub < Mb.length;) ab.hasOwnProperty(Ab = Mb[Ub++]) || (ab[Ab] = this[Ab]);
        return Tb.config(ab), Tb
      }(Eb), Eb.default = Eb.Decimal = Eb, Mb = new Eb(1), void 0 === (Ab = function() {
        return Eb
      }.call(ab, Ub, ab, bb)) || (bb.exports = Ab)
    }()
  },
  5387: (bb, ab, Ub) => {
    var Ab = Ub(4899)(Ub(4749), "DataView");
    bb.exports = Ab
  },
  4886: (bb, ab, Ub) => {
    var Ab = Ub(4889),
      Mb = Ub(4927),
      Tb = Ub(4929),
      Eb = Ub(4938),
      Yb = Ub(4945);

    function Bb(bb) {
      var ab = -1,
        Ub = null == bb ? 0 : bb.length;
      for (this.clear(); ++ab < Ub;) {
        var Ab = bb[ab];
        this.set(Ab[0], Ab[1])
      }
    }
    Bb.prototype.clear = Ab, Bb.prototype.delete = Mb, Bb.prototype.get = Tb, Bb.prototype.has = Eb, Bb.prototype.set = Yb, bb.exports = Bb
  },
  4950: (bb, ab, Ub) => {
    var Ab = Ub(4957),
      Mb = Ub(4959),
      Tb = Ub(4970),
      Eb = Ub(4976),
      Yb = Ub(4984);

    function Bb(bb) {
      var ab = -1,
        Ub = null == bb ? 0 : bb.length;
      for (this.clear(); ++ab < Ub;) {
        var Ab = bb[ab];
        this.set(Ab[0], Ab[1])
      }
    }
    Bb.prototype.clear = Ab, Bb.prototype.delete = Mb, Bb.prototype.get = Tb, Bb.prototype.has = Eb, Bb.prototype.set = Yb, bb.exports = Bb
  },
  4986: (bb, ab, Ub) => {
    var Ab = Ub(4899)(Ub(4749), "Map");
    bb.exports = Ab
  },
  4879: (bb, ab, Ub) => {
    var Ab = Ub(4882),
      Mb = Ub(4991),
      Tb = Ub(5006),
      Eb = Ub(5010),
      Yb = Ub(5014);

    function Bb(bb) {
      var ab = -1,
        Ub = null == bb ? 0 : bb.length;
      for (this.clear(); ++ab < Ub;) {
        var Ab = bb[ab];
        this.set(Ab[0], Ab[1])
      }
    }
    Bb.prototype.clear = Ab, Bb.prototype.delete = Mb, Bb.prototype.get = Tb, Bb.prototype.has = Eb, Bb.prototype.set = Yb, bb.exports = Bb
  },
  5391: (bb, ab, Ub) => {
    var Ab = Ub(4899)(Ub(4749), "Promise");
    bb.exports = Ab
  },
  5396: (bb, ab, Ub) => {
    var Ab = Ub(4899)(Ub(4749), "Set");
    bb.exports = Ab
  },
  5238: (bb, ab, Ub) => {
    var Ab = Ub(4879),
      Mb = Ub(5240),
      Tb = Ub(5247);

    function Eb(bb) {
      var ab = -1,
        Ub = null == bb ? 0 : bb.length;
      for (this.__data__ = new Ab; ++ab < Ub;) this.add(bb[ab])
    }
    Eb.prototype.add = Eb.prototype.push = Mb, Eb.prototype.has = Tb, bb.exports = Eb
  },
  5185: (bb, ab, Ub) => {
    var Ab = Ub(4950),
      Mb = Ub(5187),
      Tb = Ub(5194),
      Eb = Ub(5199),
      Yb = Ub(5208),
      Bb = Ub(5215);

    function eb(bb) {
      var ab = this.__data__ = new Ab(bb);
      this.size = ab.size
    }
    eb.prototype.clear = Mb, eb.prototype.delete = Tb, eb.prototype.get = Eb, eb.prototype.has = Yb, eb.prototype.set = Bb, bb.exports = eb
  },
  4792: (bb, ab, Ub) => {
    var Ab = Ub(4749).Symbol;
    bb.exports = Ab
  },
  5269: (bb, ab, Ub) => {
    var Ab = Ub(4749).Uint8Array;
    bb.exports = Ab
  },
  5404: (bb, ab, Ub) => {
    var Ab = Ub(4899)(Ub(4749), "WeakMap");
    bb.exports = Ab
  },
  5514: bb => {
    bb.exports = function(bb, ab, Ub) {
      switch (Ub.length) {
        case 0:
          return bb.call(ab);
        case 1:
          return bb.call(ab, Ub[0]);
        case 2:
          return bb.call(ab, Ub[0], Ub[1]);
        case 3:
          return bb.call(ab, Ub[0], Ub[1], Ub[2])
      }
      return bb.apply(ab, Ub)
    }
  },
  5894: bb => {
    bb.exports = function(bb, ab) {
      for (var Ub = -1, Ab = null == bb ? 0 : bb.length; ++Ub < Ab;)
        if (!ab(bb[Ub], Ub, bb)) return !1;
      return !0
    }
  },
  5301: bb => {
    bb.exports = function(bb, ab) {
      for (var Ub = -1, Ab = null == bb ? 0 : bb.length, Mb = 0, Tb = []; ++Ub < Ab;) {
        var Eb = bb[Ub];
        ab(Eb, Ub, bb) && (Tb[Mb++] = Eb)
      }
      return Tb
    }
  },
  5591: (bb, ab, Ub) => {
    var Ab = Ub(5593);
    bb.exports = function(bb, ab) {
      return !!(null == bb ? 0 : bb.length) && Ab(bb, ab, 0) > -1
    }
  },
  5622: bb => {
    bb.exports = function(bb, ab, Ub) {
      for (var Ab = -1, Mb = null == bb ? 0 : bb.length; ++Ab < Mb;)
        if (Ub(ab, bb[Ab])) return !0;
      return !1
    }
  },
  5318: (bb, ab, Ub) => {
    var Ab = Ub(5323),
      Mb = Ub(5166),
      Tb = Ub(4824),
      Eb = Ub(5326),
      Yb = Ub(5138),
      Bb = Ub(5334),
      eb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb, ab) {
      var Ub = Tb(bb),
        vb = !Ub && Mb(bb),
        Lb = !Ub && !vb && Eb(bb),
        Pb = !Ub && !vb && !Lb && Bb(bb),
        Xb = Ub || vb || Lb || Pb,
        jb = Xb ? Ab(bb.length, String) : [],
        Rb = jb.length;
      for (var kb in bb) !ab && !eb.call(bb, kb) || Xb && ("length" == kb || Lb && ("offset" == kb || "parent" == kb) || Pb && ("buffer" == kb || "byteLength" == kb || "byteOffset" == kb) || Yb(kb, Rb)) || jb.push(kb);
      return jb
    }
  },
  5031: bb => {
    bb.exports = function(bb, ab) {
      for (var Ub = -1, Ab = null == bb ? 0 : bb.length, Mb = Array(Ab); ++Ub < Ab;) Mb[Ub] = ab(bb[Ub], Ub, bb);
      return Mb
    }
  },
  5160: bb => {
    bb.exports = function(bb, ab) {
      for (var Ub = -1, Ab = ab.length, Mb = bb.length; ++Ub < Ab;) bb[Mb + Ub] = ab[Ub];
      return bb
    }
  },
  5256: bb => {
    bb.exports = function(bb, ab) {
      for (var Ub = -1, Ab = null == bb ? 0 : bb.length; ++Ub < Ab;)
        if (ab(bb[Ub], Ub, bb)) return !0;
      return !1
    }
  },
  5695: bb => {
    bb.exports = function(bb) {
      return bb.split("")
    }
  },
  4963: (bb, ab, Ub) => {
    var Ab = Ub(4966);
    bb.exports = function(bb, ab) {
      for (var Ub = bb.length; Ub--;)
        if (Ab(bb[Ub][0], ab)) return Ub;
      return -1
    }
  },
  5877: (bb, ab, Ub) => {
    var Ab = Ub(5535);
    bb.exports = function(bb, ab, Ub) {
      "__proto__" == ab && Ab ? Ab(bb, ab, {
        configurable: !0,
        enumerable: !0,
        value: Ub,
        writable: !0
      }) : bb[ab] = Ub
    }
  },
  5463: (bb, ab, Ub) => {
    var Ab = Ub(5465),
      Mb = Ub(5481)(Ab);
    bb.exports = Mb
  },
  5897: (bb, ab, Ub) => {
    var Ab = Ub(5463);
    bb.exports = function(bb, ab) {
      var Ub = !0;
      return Ab(bb, (function(bb, Ab, Mb) {
        return Ub = !!ab(bb, Ab, Mb)
      })), Ub
    }
  },
  5777: (bb, ab, Ub) => {
    var Ab = Ub(4776);
    bb.exports = function(bb, ab, Ub) {
      for (var Mb = -1, Tb = bb.length; ++Mb < Tb;) {
        var Eb = bb[Mb],
          Yb = ab(Eb);
        if (null != Yb && (void 0 === Bb ? Yb === Yb && !Ab(Yb) : Ub(Yb, Bb))) var Bb = Yb,
          eb = Eb
      }
      return eb
    }
  },
  5602: bb => {
    bb.exports = function(bb, ab, Ub, Ab) {
      for (var Mb = bb.length, Tb = Ub + (Ab ? 1 : -1); Ab ? Tb-- : ++Tb < Mb;)
        if (ab(bb[Tb], Tb, bb)) return Tb;
      return -1
    }
  },
  5155: (bb, ab, Ub) => {
    var Ab = Ub(5160),
      Mb = Ub(5164);
    bb.exports = function bb(ab, Ub, Tb, Eb, Yb) {
      var Bb = -1,
        eb = ab.length;
      for (Tb || (Tb = Mb), Yb || (Yb = []); ++Bb < eb;) {
        var vb = ab[Bb];
        Ub > 0 && Tb(vb) ? Ub > 1 ? bb(vb, Ub - 1, Tb, Eb, Yb) : Ab(Yb, vb) : Eb || (Yb[Yb.length] = vb)
      }
      return Yb
    }
  },
  5470: (bb, ab, Ub) => {
    var Ab = Ub(5472)();
    bb.exports = Ab
  },
  5465: (bb, ab, Ub) => {
    var Ab = Ub(5470),
      Mb = Ub(5312);
    bb.exports = function(bb, ab) {
      return bb && Ab(bb, ab, Mb)
    }
  },
  4840: (bb, ab, Ub) => {
    var Ab = Ub(4848),
      Mb = Ub(5034);
    bb.exports = function(bb, ab) {
      for (var Ub = 0, Tb = (ab = Ab(ab, bb)).length; null != bb && Ub < Tb;) bb = bb[Mb(ab[Ub++])];
      return Ub && Ub == Tb ? bb : void 0
    }
  },
  5291: (bb, ab, Ub) => {
    var Ab = Ub(5160),
      Mb = Ub(4824);
    bb.exports = function(bb, ab, Ub) {
      var Tb = ab(bb);
      return Mb(bb) ? Tb : Ab(Tb, Ub(bb))
    }
  },
  4784: (bb, ab, Ub) => {
    var Ab = Ub(4792),
      Mb = Ub(4795),
      Tb = Ub(4799),
      Eb = Ab ? Ab.toStringTag : void 0;
    bb.exports = function(bb) {
      return null == bb ? void 0 === bb ? "[object Undefined]" : "[object Null]" : Eb && Eb in Object(bb) ? Mb(bb) : Tb(bb)
    }
  },
  5782: bb => {
    bb.exports = function(bb, ab) {
      return bb > ab
    }
  },
  5428: bb => {
    bb.exports = function(bb, ab) {
      return null != bb && ab in Object(bb)
    }
  },
  5593: (bb, ab, Ub) => {
    var Ab = Ub(5602),
      Mb = Ub(5604),
      Tb = Ub(5613);
    bb.exports = function(bb, ab, Ub) {
      return ab === ab ? Tb(bb, ab, Ub) : Ab(bb, Mb, Ub)
    }
  },
  5169: (bb, ab, Ub) => {
    var Ab = Ub(4784),
      Mb = Ub(4807);
    bb.exports = function(bb) {
      return Mb(bb) && "[object Arguments]" == Ab(bb)
    }
  },
  5223: (bb, ab, Ub) => {
    var Ab = Ub(5225),
      Mb = Ub(4807);
    bb.exports = function bb(ab, Ub, Tb, Eb, Yb) {
      return ab === Ub || (null == ab || null == Ub || !Mb(ab) && !Mb(Ub) ? ab !== ab && Ub !== Ub : Ab(ab, Ub, Tb, Eb, bb, Yb))
    }
  },
  5225: (bb, ab, Ub) => {
    var Ab = Ub(5185),
      Mb = Ub(5229),
      Tb = Ub(5265),
      Eb = Ub(5282),
      Yb = Ub(5380),
      Bb = Ub(4824),
      eb = Ub(5326),
      vb = Ub(5334),
      Lb = "[object Arguments]",
      Pb = "[object Array]",
      Xb = "[object Object]",
      jb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb, ab, Ub, Rb, kb, yb) {
      var Zb = Bb(bb),
        Db = Bb(ab),
        zb = Zb ? Pb : Yb(bb),
        xb = Db ? Pb : Yb(ab),
        ib = (zb = zb == Lb ? Xb : zb) == Xb,
        fb = (xb = xb == Lb ? Xb : xb) == Xb,
        mb = zb == xb;
      if (mb && eb(bb)) {
        if (!eb(ab)) return !1;
        Zb = !0, ib = !1
      }
      if (mb && !ib) return yb || (yb = new Ab), Zb || vb(bb) ? Mb(bb, ab, Ub, Rb, kb, yb) : Tb(bb, ab, zb, Ub, Rb, kb, yb);
      if (!(1 & Ub)) {
        var pb = ib && jb.call(bb, "__wrapped__"),
          Nb = fb && jb.call(ab, "__wrapped__");
        if (pb || Nb) {
          var Wb = pb ? bb.value() : bb,
            Hb = Nb ? ab.value() : ab;
          return yb || (yb = new Ab), kb(Wb, Hb, Ub, Rb, yb)
        }
      }
      return !!mb && (yb || (yb = new Ab), Eb(bb, ab, Ub, Rb, kb, yb))
    }
  },
  5183: (bb, ab, Ub) => {
    var Ab = Ub(5185),
      Mb = Ub(5223);
    bb.exports = function(bb, ab, Ub, Tb) {
      var Eb = Ub.length,
        Yb = Eb,
        Bb = !Tb;
      if (null == bb) return !Yb;
      for (bb = Object(bb); Eb--;) {
        var eb = Ub[Eb];
        if (Bb && eb[2] ? eb[1] !== bb[eb[0]] : !(eb[0] in bb)) return !1
      }
      for (; ++Eb < Yb;) {
        var vb = (eb = Ub[Eb])[0],
          Lb = bb[vb],
          Pb = eb[1];
        if (Bb && eb[2]) {
          if (void 0 === Lb && !(vb in bb)) return !1
        } else {
          var Xb = new Ab;
          if (Tb) var jb = Tb(Lb, Pb, vb, bb, ab, Xb);
          if (!(void 0 === jb ? Mb(Pb, Lb, 3, Tb, Xb) : jb)) return !1
        }
      }
      return !0
    }
  },
  5604: bb => {
    bb.exports = function(bb) {
      return bb !== bb
    }
  },
  4902: (bb, ab, Ub) => {
    var Ab = Ub(4904),
      Mb = Ub(4910),
      Tb = Ub(4734),
      Eb = Ub(4918),
      Yb = /^\[object .+?Constructor\]$/,
      Bb = Function.prototype,
      eb = Object.prototype,
      vb = Bb.toString,
      Lb = eb.hasOwnProperty,
      Pb = RegExp("^" + vb.call(Lb).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    bb.exports = function(bb) {
      return !(!Tb(bb) || Mb(bb)) && (Ab(bb) ? Pb : Yb).test(Eb(bb))
    }
  },
  5337: (bb, ab, Ub) => {
    var Ab = Ub(4784),
      Mb = Ub(5129),
      Tb = Ub(4807),
      Eb = {};
    Eb["[object Float32Array]"] = Eb["[object Float64Array]"] = Eb["[object Int8Array]"] = Eb["[object Int16Array]"] = Eb["[object Int32Array]"] = Eb["[object Uint8Array]"] = Eb["[object Uint8ClampedArray]"] = Eb["[object Uint16Array]"] = Eb["[object Uint32Array]"] = !0, Eb["[object Arguments]"] = Eb["[object Array]"] = Eb["[object ArrayBuffer]"] = Eb["[object Boolean]"] = Eb["[object DataView]"] = Eb["[object Date]"] = Eb["[object Error]"] = Eb["[object Function]"] = Eb["[object Map]"] = Eb["[object Number]"] = Eb["[object Object]"] = Eb["[object RegExp]"] = Eb["[object Set]"] = Eb["[object String]"] = Eb["[object WeakMap]"] = !1, bb.exports = function(bb) {
      return Tb(bb) && Mb(bb.length) && !!Eb[Ab(bb)]
    }
  },
  5177: (bb, ab, Ub) => {
    var Ab = Ub(5180),
      Mb = Ub(5421),
      Tb = Ub(5437),
      Eb = Ub(4824),
      Yb = Ub(5439);
    bb.exports = function(bb) {
      return "function" == typeof bb ? bb : null == bb ? Tb : "object" == typeof bb ? Eb(bb) ? Mb(bb[0], bb[1]) : Ab(bb) : Yb(bb)
    }
  },
  5358: (bb, ab, Ub) => {
    var Ab = Ub(5364),
      Mb = Ub(5367),
      Tb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb) {
      if (!Ab(bb)) return Mb(bb);
      var ab = [];
      for (var Ub in Object(bb)) Tb.call(bb, Ub) && "constructor" != Ub && ab.push(Ub);
      return ab
    }
  },
  5789: bb => {
    bb.exports = function(bb, ab) {
      return bb < ab
    }
  },
  5458: (bb, ab, Ub) => {
    var Ab = Ub(5463),
      Mb = Ub(5125);
    bb.exports = function(bb, ab) {
      var Ub = -1,
        Tb = Mb(bb) ? Array(bb.length) : [];
      return Ab(bb, (function(bb, Ab, Mb) {
        Tb[++Ub] = ab(bb, Ab, Mb)
      })), Tb
    }
  },
  5180: (bb, ab, Ub) => {
    var Ab = Ub(5183),
      Mb = Ub(5408),
      Tb = Ub(5417);
    bb.exports = function(bb) {
      var ab = Mb(bb);
      return 1 == ab.length && ab[0][2] ? Tb(ab[0][0], ab[0][1]) : function(Ub) {
        return Ub === bb || Ab(Ub, bb, ab)
      }
    }
  },
  5421: (bb, ab, Ub) => {
    var Ab = Ub(5223),
      Mb = Ub(4838),
      Tb = Ub(5424),
      Eb = Ub(4854),
      Yb = Ub(5414),
      Bb = Ub(5417),
      eb = Ub(5034);
    bb.exports = function(bb, ab) {
      return Eb(bb) && Yb(ab) ? Bb(eb(bb), ab) : function(Ub) {
        var Eb = Mb(Ub, bb);
        return void 0 === Eb && Eb === ab ? Tb(Ub, bb) : Ab(ab, Eb, 3)
      }
    }
  },
  5172: (bb, ab, Ub) => {
    var Ab = Ub(5031),
      Mb = Ub(4840),
      Tb = Ub(5177),
      Eb = Ub(5458),
      Yb = Ub(5487),
      Bb = Ub(5345),
      eb = Ub(5495),
      vb = Ub(5437),
      Lb = Ub(4824);
    bb.exports = function(bb, ab, Ub) {
      ab = ab.length ? Ab(ab, (function(bb) {
        return Lb(bb) ? function(ab) {
          return Mb(ab, 1 === bb.length ? bb[0] : bb)
        } : bb
      })) : [vb];
      var Pb = -1;
      ab = Ab(ab, Bb(Tb));
      var Xb = Eb(bb, (function(bb, Ub, Mb) {
        return {
          criteria: Ab(ab, (function(ab) {
            return ab(bb)
          })),
          index: ++Pb,
          value: bb
        }
      }));
      return Yb(Xb, (function(bb, ab) {
        return eb(bb, ab, Ub)
      }))
    }
  },
  5447: bb => {
    bb.exports = function(bb) {
      return function(ab) {
        return null == ab ? void 0 : ab[bb]
      }
    }
  },
  5451: (bb, ab, Ub) => {
    var Ab = Ub(4840);
    bb.exports = function(bb) {
      return function(ab) {
        return Ab(ab, bb)
      }
    }
  },
  5111: bb => {
    var ab = Math.ceil,
      Ub = Math.max;
    bb.exports = function(bb, Ab, Mb, Tb) {
      for (var Eb = -1, Yb = Ub(ab((Ab - bb) / (Mb || 1)), 0), Bb = Array(Yb); Yb--;) Bb[Tb ? Yb : ++Eb] = bb, bb += Mb;
      return Bb
    }
  },
  5504: (bb, ab, Ub) => {
    var Ab = Ub(5437),
      Mb = Ub(5508),
      Tb = Ub(5520);
    bb.exports = function(bb, ab) {
      return Tb(Mb(bb, ab, Ab), bb + "")
    }
  },
  5529: (bb, ab, Ub) => {
    var Ab = Ub(5532),
      Mb = Ub(5535),
      Tb = Ub(5437),
      Eb = Mb ? function(bb, ab) {
        return Mb(bb, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ab(ab),
          writable: !0
        })
      } : Tb;
    bb.exports = Eb
  },
  5673: bb => {
    bb.exports = function(bb, ab, Ub) {
      var Ab = -1,
        Mb = bb.length;
      ab < 0 && (ab = -ab > Mb ? 0 : Mb + ab), (Ub = Ub > Mb ? Mb : Ub) < 0 && (Ub += Mb), Mb = ab > Ub ? 0 : Ub - ab >>> 0, ab >>>= 0;
      for (var Tb = Array(Mb); ++Ab < Mb;) Tb[Ab] = bb[Ab + ab];
      return Tb
    }
  },
  5944: (bb, ab, Ub) => {
    var Ab = Ub(5463);
    bb.exports = function(bb, ab) {
      var Ub;
      return Ab(bb, (function(bb, Ab, Mb) {
        return !(Ub = ab(bb, Ab, Mb))
      })), !!Ub
    }
  },
  5487: bb => {
    bb.exports = function(bb, ab) {
      var Ub = bb.length;
      for (bb.sort(ab); Ub--;) bb[Ub] = bb[Ub].value;
      return bb
    }
  },
  5323: bb => {
    bb.exports = function(bb, ab) {
      for (var Ub = -1, Ab = Array(bb); ++Ub < bb;) Ab[Ub] = ab(Ub);
      return Ab
    }
  },
  5022: (bb, ab, Ub) => {
    var Ab = Ub(4792),
      Mb = Ub(5031),
      Tb = Ub(4824),
      Eb = Ub(4776),
      Yb = Ab ? Ab.prototype : void 0,
      Bb = Yb ? Yb.toString : void 0;
    bb.exports = function bb(ab) {
      if ("string" == typeof ab) return ab;
      if (Tb(ab)) return Mb(ab, bb) + "";
      if (Eb(ab)) return Bb ? Bb.call(ab) : "";
      var Ub = ab + "";
      return "0" == Ub && 1 / ab == -1 / 0 ? "-0" : Ub
    }
  },
  4766: (bb, ab, Ub) => {
    var Ab = Ub(4768),
      Mb = /^\s+/;
    bb.exports = function(bb) {
      return bb ? bb.slice(0, Ab(bb) + 1).replace(Mb, "") : bb
    }
  },
  5345: bb => {
    bb.exports = function(bb) {
      return function(ab) {
        return bb(ab)
      }
    }
  },
  5588: (bb, ab, Ub) => {
    var Ab = Ub(5238),
      Mb = Ub(5591),
      Tb = Ub(5622),
      Eb = Ub(5261),
      Yb = Ub(5629),
      Bb = Ub(5276);
    bb.exports = function(bb, ab, Ub) {
      var eb = -1,
        vb = Mb,
        Lb = bb.length,
        Pb = !0,
        Xb = [],
        jb = Xb;
      if (Ub) Pb = !1, vb = Tb;
      else if (Lb >= 200) {
        var Rb = ab ? null : Yb(bb);
        if (Rb) return Bb(Rb);
        Pb = !1, vb = Eb, jb = new Ab
      } else jb = ab ? [] : Xb;
      bb: for (; ++eb < Lb;) {
        var kb = bb[eb],
          yb = ab ? ab(kb) : kb;
        if (kb = Ub || 0 !== kb ? kb : 0, Pb && yb === yb) {
          for (var Zb = jb.length; Zb--;)
            if (jb[Zb] === yb) continue bb;
          ab && jb.push(yb), Xb.push(kb)
        } else vb(jb, yb, Ub) || (jb !== Xb && jb.push(yb), Xb.push(kb))
      }
      return Xb
    }
  },
  5261: bb => {
    bb.exports = function(bb, ab) {
      return bb.has(ab)
    }
  },
  4848: (bb, ab, Ub) => {
    var Ab = Ub(4824),
      Mb = Ub(4854),
      Tb = Ub(4860),
      Eb = Ub(5016);
    bb.exports = function(bb, ab) {
      return Ab(bb) ? bb : Mb(bb, ab) ? [bb] : Tb(Eb(bb))
    }
  },
  5669: (bb, ab, Ub) => {
    var Ab = Ub(5673);
    bb.exports = function(bb, ab, Ub) {
      var Mb = bb.length;
      return Ub = void 0 === Ub ? Mb : Ub, !ab && Ub >= Mb ? bb : Ab(bb, ab, Ub)
    }
  },
  5501: (bb, ab, Ub) => {
    var Ab = Ub(4776);
    bb.exports = function(bb, ab) {
      if (bb !== ab) {
        var Ub = void 0 !== bb,
          Mb = null === bb,
          Tb = bb === bb,
          Eb = Ab(bb),
          Yb = void 0 !== ab,
          Bb = null === ab,
          eb = ab === ab,
          vb = Ab(ab);
        if (!Bb && !vb && !Eb && bb > ab || Eb && Yb && eb && !Bb && !vb || Mb && Yb && eb || !Ub && eb || !Tb) return 1;
        if (!Mb && !Eb && !vb && bb < ab || vb && Ub && Tb && !Mb && !Eb || Bb && Ub && Tb || !Yb && Tb || !eb) return -1
      }
      return 0
    }
  },
  5495: (bb, ab, Ub) => {
    var Ab = Ub(5501);
    bb.exports = function(bb, ab, Ub) {
      for (var Mb = -1, Tb = bb.criteria, Eb = ab.criteria, Yb = Tb.length, Bb = Ub.length; ++Mb < Yb;) {
        var eb = Ab(Tb[Mb], Eb[Mb]);
        if (eb) return Mb >= Bb ? eb : eb * ("desc" == Ub[Mb] ? -1 : 1)
      }
      return bb.index - ab.index
    }
  },
  4914: (bb, ab, Ub) => {
    var Ab = Ub(4749)["__core-js_shared__"];
    bb.exports = Ab
  },
  5481: (bb, ab, Ub) => {
    var Ab = Ub(5125);
    bb.exports = function(bb, ab) {
      return function(Ub, Mb) {
        if (null == Ub) return Ub;
        if (!Ab(Ub)) return bb(Ub, Mb);
        for (var Tb = Ub.length, Eb = ab ? Tb : -1, Yb = Object(Ub);
          (ab ? Eb-- : ++Eb < Tb) && !1 !== Mb(Yb[Eb], Eb, Yb););
        return Ub
      }
    }
  },
  5472: bb => {
    bb.exports = function(bb) {
      return function(ab, Ub, Ab) {
        for (var Mb = -1, Tb = Object(ab), Eb = Ab(ab), Yb = Eb.length; Yb--;) {
          var Bb = Eb[bb ? Yb : ++Mb];
          if (!1 === Ub(Tb[Bb], Bb, Tb)) break
        }
        return ab
      }
    }
  },
  5662: (bb, ab, Ub) => {
    var Ab = Ub(5669),
      Mb = Ub(5682),
      Tb = Ub(5687),
      Eb = Ub(5016);
    bb.exports = function(bb) {
      return function(ab) {
        ab = Eb(ab);
        var Ub = Mb(ab) ? Tb(ab) : void 0,
          Yb = Ub ? Ub[0] : ab.charAt(0),
          Bb = Ub ? Ab(Ub, 1).join("") : ab.slice(1);
        return Yb[bb]() + Bb
      }
    }
  },
  5960: (bb, ab, Ub) => {
    var Ab = Ub(5177),
      Mb = Ub(5125),
      Tb = Ub(5312);
    bb.exports = function(bb) {
      return function(ab, Ub, Eb) {
        var Yb = Object(ab);
        if (!Mb(ab)) {
          var Bb = Ab(Ub, 3);
          ab = Tb(ab), Ub = function(bb) {
            return Bb(Yb[bb], bb, Yb)
          }
        }
        var eb = bb(ab, Ub, Eb);
        return eb > -1 ? Yb[Bb ? ab[eb] : eb] : void 0
      }
    }
  },
  5102: (bb, ab, Ub) => {
    var Ab = Ub(5111),
      Mb = Ub(5117),
      Tb = Ub(5145);
    bb.exports = function(bb) {
      return function(ab, Ub, Eb) {
        return Eb && "number" != typeof Eb && Mb(ab, Ub, Eb) && (Ub = Eb = void 0), ab = Tb(ab), void 0 === Ub ? (Ub = ab, ab = 0) : Ub = Tb(Ub), Eb = void 0 === Eb ? ab < Ub ? 1 : -1 : Tb(Eb), Ab(ab, Ub, Eb, bb)
      }
    }
  },
  5629: (bb, ab, Ub) => {
    var Ab = Ub(5396),
      Mb = Ub(5635),
      Tb = Ub(5276),
      Eb = Ab && 1 / Tb(new Ab([, -0]))[1] == 1 / 0 ? function(bb) {
        return new Ab(bb)
      } : Mb;
    bb.exports = Eb
  },
  5535: (bb, ab, Ub) => {
    var Ab = Ub(4899),
      Mb = function() {
        try {
          var bb = Ab(Object, "defineProperty");
          return bb({}, "", {}), bb
        } catch (ab) {}
      }();
    bb.exports = Mb
  },
  5229: (bb, ab, Ub) => {
    var Ab = Ub(5238),
      Mb = Ub(5256),
      Tb = Ub(5261);
    bb.exports = function(bb, ab, Ub, Eb, Yb, Bb) {
      var eb = 1 & Ub,
        vb = bb.length,
        Lb = ab.length;
      if (vb != Lb && !(eb && Lb > vb)) return !1;
      var Pb = Bb.get(bb),
        Xb = Bb.get(ab);
      if (Pb && Xb) return Pb == ab && Xb == bb;
      var jb = -1,
        Rb = !0,
        kb = 2 & Ub ? new Ab : void 0;
      for (Bb.set(bb, ab), Bb.set(ab, bb); ++jb < vb;) {
        var yb = bb[jb],
          Zb = ab[jb];
        if (Eb) var Db = eb ? Eb(Zb, yb, jb, ab, bb, Bb) : Eb(yb, Zb, jb, bb, ab, Bb);
        if (void 0 !== Db) {
          if (Db) continue;
          Rb = !1;
          break
        }
        if (kb) {
          if (!Mb(ab, (function(bb, ab) {
              if (!Tb(kb, ab) && (yb === bb || Yb(yb, bb, Ub, Eb, Bb))) return kb.push(ab)
            }))) {
            Rb = !1;
            break
          }
        } else if (yb !== Zb && !Yb(yb, Zb, Ub, Eb, Bb)) {
          Rb = !1;
          break
        }
      }
      return Bb.delete(bb), Bb.delete(ab), Rb
    }
  },
  5265: (bb, ab, Ub) => {
    var Ab = Ub(4792),
      Mb = Ub(5269),
      Tb = Ub(4966),
      Eb = Ub(5229),
      Yb = Ub(5273),
      Bb = Ub(5276),
      eb = Ab ? Ab.prototype : void 0,
      vb = eb ? eb.valueOf : void 0;
    bb.exports = function(bb, ab, Ub, Ab, eb, Lb, Pb) {
      switch (Ub) {
        case "[object DataView]":
          if (bb.byteLength != ab.byteLength || bb.byteOffset != ab.byteOffset) return !1;
          bb = bb.buffer, ab = ab.buffer;
        case "[object ArrayBuffer]":
          return !(bb.byteLength != ab.byteLength || !Lb(new Mb(bb), new Mb(ab)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return Tb(+bb, +ab);
        case "[object Error]":
          return bb.name == ab.name && bb.message == ab.message;
        case "[object RegExp]":
        case "[object String]":
          return bb == ab + "";
        case "[object Map]":
          var Xb = Yb;
        case "[object Set]":
          var jb = 1 & Ab;
          if (Xb || (Xb = Bb), bb.size != ab.size && !jb) return !1;
          var Rb = Pb.get(bb);
          if (Rb) return Rb == ab;
          Ab |= 2, Pb.set(bb, ab);
          var kb = Eb(Xb(bb), Xb(ab), Ab, eb, Lb, Pb);
          return Pb.delete(bb), kb;
        case "[object Symbol]":
          if (vb) return vb.call(bb) == vb.call(ab)
      }
      return !1
    }
  },
  5282: (bb, ab, Ub) => {
    var Ab = Ub(5284),
      Mb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb, ab, Ub, Tb, Eb, Yb) {
      var Bb = 1 & Ub,
        eb = Ab(bb),
        vb = eb.length;
      if (vb != Ab(ab).length && !Bb) return !1;
      for (var Lb = vb; Lb--;) {
        var Pb = eb[Lb];
        if (!(Bb ? Pb in ab : Mb.call(ab, Pb))) return !1
      }
      var Xb = Yb.get(bb),
        jb = Yb.get(ab);
      if (Xb && jb) return Xb == ab && jb == bb;
      var Rb = !0;
      Yb.set(bb, ab), Yb.set(ab, bb);
      for (var kb = Bb; ++Lb < vb;) {
        var yb = bb[Pb = eb[Lb]],
          Zb = ab[Pb];
        if (Tb) var Db = Bb ? Tb(Zb, yb, Pb, ab, bb, Yb) : Tb(yb, Zb, Pb, bb, ab, Yb);
        if (!(void 0 === Db ? yb === Zb || Eb(yb, Zb, Ub, Tb, Yb) : Db)) {
          Rb = !1;
          break
        }
        kb || (kb = "constructor" == Pb)
      }
      if (Rb && !kb) {
        var zb = bb.constructor,
          xb = ab.constructor;
        zb == xb || !("constructor" in bb) || !("constructor" in ab) || "function" == typeof zb && zb instanceof zb && "function" == typeof xb && xb instanceof xb || (Rb = !1)
      }
      return Yb.delete(bb), Yb.delete(ab), Rb
    }
  },
  4758: (bb, ab, Ub) => {
    var Ab = "object" == typeof Ub.g && Ub.g && Ub.g.Object === Object && Ub.g;
    bb.exports = Ab
  },
  5284: (bb, ab, Ub) => {
    var Ab = Ub(5291),
      Mb = Ub(5295),
      Tb = Ub(5312);
    bb.exports = function(bb) {
      return Ab(bb, Tb, Mb)
    }
  },
  4998: (bb, ab, Ub) => {
    var Ab = Ub(5003);
    bb.exports = function(bb, ab) {
      var Ub = bb.__data__;
      return Ab(ab) ? Ub["string" == typeof ab ? "string" : "hash"] : Ub.map
    }
  },
  5408: (bb, ab, Ub) => {
    var Ab = Ub(5414),
      Mb = Ub(5312);
    bb.exports = function(bb) {
      for (var ab = Mb(bb), Ub = ab.length; Ub--;) {
        var Tb = ab[Ub],
          Eb = bb[Tb];
        ab[Ub] = [Tb, Eb, Ab(Eb)]
      }
      return ab
    }
  },
  4899: (bb, ab, Ub) => {
    var Ab = Ub(4902),
      Mb = Ub(4925);
    bb.exports = function(bb, ab) {
      var Ub = Mb(bb, ab);
      return Ab(Ub) ? Ub : void 0
    }
  },
  5918: (bb, ab, Ub) => {
    var Ab = Ub(5376)(Object.getPrototypeOf, Object);
    bb.exports = Ab
  },
  4795: (bb, ab, Ub) => {
    var Ab = Ub(4792),
      Mb = Object.prototype,
      Tb = Mb.hasOwnProperty,
      Eb = Mb.toString,
      Yb = Ab ? Ab.toStringTag : void 0;
    bb.exports = function(bb) {
      var ab = Tb.call(bb, Yb),
        Ub = bb[Yb];
      try {
        bb[Yb] = void 0;
        var Ab = !0
      } catch (Bb) {}
      var Mb = Eb.call(bb);
      return Ab && (ab ? bb[Yb] = Ub : delete bb[Yb]), Mb
    }
  },
  5295: (bb, ab, Ub) => {
    var Ab = Ub(5301),
      Mb = Ub(5305),
      Tb = Object.prototype.propertyIsEnumerable,
      Eb = Object.getOwnPropertySymbols,
      Yb = Eb ? function(bb) {
        return null == bb ? [] : (bb = Object(bb), Ab(Eb(bb), (function(ab) {
          return Tb.call(bb, ab)
        })))
      } : Mb;
    bb.exports = Yb
  },
  5380: (bb, ab, Ub) => {
    var Ab = Ub(5387),
      Mb = Ub(4986),
      Tb = Ub(5391),
      Eb = Ub(5396),
      Yb = Ub(5404),
      Bb = Ub(4784),
      eb = Ub(4918),
      vb = "[object Map]",
      Lb = "[object Promise]",
      Pb = "[object Set]",
      Xb = "[object WeakMap]",
      jb = "[object DataView]",
      Rb = eb(Ab),
      kb = eb(Mb),
      yb = eb(Tb),
      Zb = eb(Eb),
      Db = eb(Yb),
      zb = Bb;
    (Ab && zb(new Ab(new ArrayBuffer(1))) != jb || Mb && zb(new Mb) != vb || Tb && zb(Tb.resolve()) != Lb || Eb && zb(new Eb) != Pb || Yb && zb(new Yb) != Xb) && (zb = function(bb) {
      var ab = Bb(bb),
        Ub = "[object Object]" == ab ? bb.constructor : void 0,
        Ab = Ub ? eb(Ub) : "";
      if (Ab) switch (Ab) {
        case Rb:
          return jb;
        case kb:
          return vb;
        case yb:
          return Lb;
        case Zb:
          return Pb;
        case Db:
          return Xb
      }
      return ab
    }), bb.exports = zb
  },
  4925: bb => {
    bb.exports = function(bb, ab) {
      return null == bb ? void 0 : bb[ab]
    }
  },
  5435: (bb, ab, Ub) => {
    var Ab = Ub(4848),
      Mb = Ub(5166),
      Tb = Ub(4824),
      Eb = Ub(5138),
      Yb = Ub(5129),
      Bb = Ub(5034);
    bb.exports = function(bb, ab, Ub) {
      for (var eb = -1, vb = (ab = Ab(ab, bb)).length, Lb = !1; ++eb < vb;) {
        var Pb = Bb(ab[eb]);
        if (!(Lb = null != bb && Ub(bb, Pb))) break;
        bb = bb[Pb]
      }
      return Lb || ++eb != vb ? Lb : !!(vb = null == bb ? 0 : bb.length) && Yb(vb) && Eb(Pb, vb) && (Tb(bb) || Mb(bb))
    }
  },
  5682: bb => {
    var ab = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    bb.exports = function(bb) {
      return ab.test(bb)
    }
  },
  4889: (bb, ab, Ub) => {
    var Ab = Ub(4892);
    bb.exports = function() {
      this.__data__ = Ab ? Ab(null) : {}, this.size = 0
    }
  },
  4927: bb => {
    bb.exports = function(bb) {
      var ab = this.has(bb) && delete this.__data__[bb];
      return this.size -= ab ? 1 : 0, ab
    }
  },
  4929: (bb, ab, Ub) => {
    var Ab = Ub(4892),
      Mb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb) {
      var ab = this.__data__;
      if (Ab) {
        var Ub = ab[bb];
        return "__lodash_hash_undefined__" === Ub ? void 0 : Ub
      }
      return Mb.call(ab, bb) ? ab[bb] : void 0
    }
  },
  4938: (bb, ab, Ub) => {
    var Ab = Ub(4892),
      Mb = Object.prototype.hasOwnProperty;
    bb.exports = function(bb) {
      var ab = this.__data__;
      return Ab ? void 0 !== ab[bb] : Mb.call(ab, bb)
    }
  },
  4945: (bb, ab, Ub) => {
    var Ab = Ub(4892);
    bb.exports = function(bb, ab) {
      var Ub = this.__data__;
      return this.size += this.has(bb) ? 0 : 1, Ub[bb] = Ab && void 0 === ab ? "__lodash_hash_undefined__" : ab, this
    }
  },
  5164: (bb, ab, Ub) => {
    var Ab = Ub(4792),
      Mb = Ub(5166),
      Tb = Ub(4824),
      Eb = Ab ? Ab.isConcatSpreadable : void 0;
    bb.exports = function(bb) {
      return Tb(bb) || Mb(bb) || !!(Eb && bb && bb[Eb])
    }
  },
  5138: bb => {
    var ab = /^(?:0|[1-9]\d*)$/;
    bb.exports = function(bb, Ub) {
      var Ab = typeof bb;
      return !!(Ub = null == Ub ? 9007199254740991 : Ub) && ("number" == Ab || "symbol" != Ab && ab.test(bb)) && bb > -1 && bb % 1 == 0 && bb < Ub
    }
  },
  5117: (bb, ab, Ub) => {
    var Ab = Ub(4966),
      Mb = Ub(5125),
      Tb = Ub(5138),
      Eb = Ub(4734);
    bb.exports = function(bb, ab, Ub) {
      if (!Eb(Ub)) return !1;
      var Yb = typeof ab;
      return !!("number" == Yb ? Mb(Ub) && Tb(ab, Ub.length) : "string" == Yb && ab in Ub) && Ab(Ub[ab], bb)
    }
  },
  4854: (bb, ab, Ub) => {
    var Ab = Ub(4824),
      Mb = Ub(4776),
      Tb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Eb = /^\w*$/;
    bb.exports = function(bb, ab) {
      if (Ab(bb)) return !1;
      var Ub = typeof bb;
      return !("number" != Ub && "symbol" != Ub && "boolean" != Ub && null != bb && !Mb(bb)) || (Eb.test(bb) || !Tb.test(bb) || null != ab && bb in Object(ab))
    }
  },
  5003: bb => {
    bb.exports = function(bb) {
      var ab = typeof bb;
      return "string" == ab || "number" == ab || "symbol" == ab || "boolean" == ab ? "__proto__" !== bb : null === bb
    }
  },
  4910: (bb, ab, Ub) => {
    var Ab = Ub(4914),
      Mb = function() {
        var bb = /[^.]+$/.exec(Ab && Ab.keys && Ab.keys.IE_PROTO || "");
        return bb ? "Symbol(src)_1." + bb : ""
      }();
    bb.exports = function(bb) {
      return !!Mb && Mb in bb
    }
  },
  5364: bb => {
    var ab = Object.prototype;
    bb.exports = function(bb) {
      var Ub = bb && bb.constructor;
      return bb === ("function" == typeof Ub && Ub.prototype || ab)
    }
  },
  5414: (bb, ab, Ub) => {
    var Ab = Ub(4734);
    bb.exports = function(bb) {
      return bb === bb && !Ab(bb)
    }
  },
  4957: bb => {
    bb.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  4959: (bb, ab, Ub) => {
    var Ab = Ub(4963),
      Mb = Array.prototype.splice;
    bb.exports = function(bb) {
      var ab = this.__data__,
        Ub = Ab(ab, bb);
      return !(Ub < 0) && (Ub == ab.length - 1 ? ab.pop() : Mb.call(ab, Ub, 1), --this.size, !0)
    }
  },
  4970: (bb, ab, Ub) => {
    var Ab = Ub(4963);
    bb.exports = function(bb) {
      var ab = this.__data__,
        Ub = Ab(ab, bb);
      return Ub < 0 ? void 0 : ab[Ub][1]
    }
  },
  4976: (bb, ab, Ub) => {
    var Ab = Ub(4963);
    bb.exports = function(bb) {
      return Ab(this.__data__, bb) > -1
    }
  },
  4984: (bb, ab, Ub) => {
    var Ab = Ub(4963);
    bb.exports = function(bb, ab) {
      var Ub = this.__data__,
        Mb = Ab(Ub, bb);
      return Mb < 0 ? (++this.size, Ub.push([bb, ab])) : Ub[Mb][1] = ab, this
    }
  },
  4882: (bb, ab, Ub) => {
    var Ab = Ub(4886),
      Mb = Ub(4950),
      Tb = Ub(4986);
    bb.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new Ab,
        map: new(Tb || Mb),
        string: new Ab
      }
    }
  },
  4991: (bb, ab, Ub) => {
    var Ab = Ub(4998);
    bb.exports = function(bb) {
      var ab = Ab(this, bb).delete(bb);
      return this.size -= ab ? 1 : 0, ab
    }
  },
  5006: (bb, ab, Ub) => {
    var Ab = Ub(4998);
    bb.exports = function(bb) {
      return Ab(this, bb).get(bb)
    }
  },
  5010: (bb, ab, Ub) => {
    var Ab = Ub(4998);
    bb.exports = function(bb) {
      return Ab(this, bb).has(bb)
    }
  },
  5014: (bb, ab, Ub) => {
    var Ab = Ub(4998);
    bb.exports = function(bb, ab) {
      var Ub = Ab(this, bb),
        Mb = Ub.size;
      return Ub.set(bb, ab), this.size += Ub.size == Mb ? 0 : 1, this
    }
  },
  5273: bb => {
    bb.exports = function(bb) {
      var ab = -1,
        Ub = Array(bb.size);
      return bb.forEach((function(bb, Ab) {
        Ub[++ab] = [Ab, bb]
      })), Ub
    }
  },
  5417: bb => {
    bb.exports = function(bb, ab) {
      return function(Ub) {
        return null != Ub && (Ub[bb] === ab && (void 0 !== ab || bb in Object(Ub)))
      }
    }
  },
  4863: (bb, ab, Ub) => {
    var Ab = Ub(4870);
    bb.exports = function(bb) {
      var ab = Ab(bb, (function(bb) {
          return 500 === Ub.size && Ub.clear(), bb
        })),
        Ub = ab.cache;
      return ab
    }
  },
  4892: (bb, ab, Ub) => {
    var Ab = Ub(4899)(Object, "create");
    bb.exports = Ab
  },
  5367: (bb, ab, Ub) => {
    var Ab = Ub(5376)(Object.keys, Object);
    bb.exports = Ab
  },
  5349: (bb, ab, Ub) => {
    bb = Ub.nmd(bb);
    var Ab = Ub(4758),
      Mb = ab && !ab.nodeType && ab,
      Tb = Mb && bb && !bb.nodeType && bb,
      Eb = Tb && Tb.exports === Mb && Ab.process,
      Yb = function() {
        try {
          var bb = Tb && Tb.require && Tb.require("util").types;
          return bb || Eb && Eb.binding && Eb.binding("util")
        } catch (ab) {}
      }();
    bb.exports = Yb
  },
  4799: bb => {
    var ab = Object.prototype.toString;
    bb.exports = function(bb) {
      return ab.call(bb)
    }
  },
  5376: bb => {
    bb.exports = function(bb, ab) {
      return function(Ub) {
        return bb(ab(Ub))
      }
    }
  },
  5508: (bb, ab, Ub) => {
    var Ab = Ub(5514),
      Mb = Math.max;
    bb.exports = function(bb, ab, Ub) {
      return ab = Mb(void 0 === ab ? bb.length - 1 : ab, 0),
        function() {
          for (var Tb = arguments, Eb = -1, Yb = Mb(Tb.length - ab, 0), Bb = Array(Yb); ++Eb < Yb;) Bb[Eb] = Tb[ab + Eb];
          Eb = -1;
          for (var eb = Array(ab + 1); ++Eb < ab;) eb[Eb] = Tb[Eb];
          return eb[ab] = Ub(Bb), Ab(bb, this, eb)
        }
    }
  },
  4749: (bb, ab, Ub) => {
    var Ab = Ub(4758),
      Mb = "object" == typeof self && self && self.Object === Object && self,
      Tb = Ab || Mb || Function("return this")();
    bb.exports = Tb
  },
  5240: bb => {
    bb.exports = function(bb) {
      return this.__data__.set(bb, "__lodash_hash_undefined__"), this
    }
  },
  5247: bb => {
    bb.exports = function(bb) {
      return this.__data__.has(bb)
    }
  },
  5276: bb => {
    bb.exports = function(bb) {
      var ab = -1,
        Ub = Array(bb.size);
      return bb.forEach((function(bb) {
        Ub[++ab] = bb
      })), Ub
    }
  },
  5520: (bb, ab, Ub) => {
    var Ab = Ub(5529),
      Mb = Ub(5539)(Ab);
    bb.exports = Mb
  },
  5539: bb => {
    var ab = Date.now;
    bb.exports = function(bb) {
      var Ub = 0,
        Ab = 0;
      return function() {
        var Mb = ab(),
          Tb = 16 - (Mb - Ab);
        if (Ab = Mb, Tb > 0) {
          if (++Ub >= 800) return arguments[0]
        } else Ub = 0;
        return bb.apply(void 0, arguments)
      }
    }
  },
  5187: (bb, ab, Ub) => {
    var Ab = Ub(4950);
    bb.exports = function() {
      this.__data__ = new Ab, this.size = 0
    }
  },
  5194: bb => {
    bb.exports = function(bb) {
      var ab = this.__data__,
        Ub = ab.delete(bb);
      return this.size = ab.size, Ub
    }
  },
  5199: bb => {
    bb.exports = function(bb) {
      return this.__data__.get(bb)
    }
  },
  5208: bb => {
    bb.exports = function(bb) {
      return this.__data__.has(bb)
    }
  },
  5215: (bb, ab, Ub) => {
    var Ab = Ub(4950),
      Mb = Ub(4986),
      Tb = Ub(4879);
    bb.exports = function(bb, ab) {
      var Ub = this.__data__;
      if (Ub instanceof Ab) {
        var Eb = Ub.__data__;
        if (!Mb || Eb.length < 199) return Eb.push([bb, ab]), this.size = ++Ub.size, this;
        Ub = this.__data__ = new Tb(Eb)
      }
      return Ub.set(bb, ab), this.size = Ub.size, this
    }
  },
  5613: bb => {
    bb.exports = function(bb, ab, Ub) {
      for (var Ab = Ub - 1, Mb = bb.length; ++Ab < Mb;)
        if (bb[Ab] === ab) return Ab;
      return -1
    }
  },
  5687: (bb, ab, Ub) => {
    var Ab = Ub(5695),
      Mb = Ub(5682),
      Tb = Ub(5702);
    bb.exports = function(bb) {
      return Mb(bb) ? Tb(bb) : Ab(bb)
    }
  },
  4860: (bb, ab, Ub) => {
    var Ab = Ub(4863),
      Mb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Tb = /\\(\\)?/g,
      Eb = Ab((function(bb) {
        var ab = [];
        return 46 === bb.charCodeAt(0) && ab.push(""), bb.replace(Mb, (function(bb, Ub, Ab, Mb) {
          ab.push(Ab ? Mb.replace(Tb, "$1") : Ub || bb)
        })), ab
      }));
    bb.exports = Eb
  },
  5034: (bb, ab, Ub) => {
    var Ab = Ub(4776);
    bb.exports = function(bb) {
      if ("string" == typeof bb || Ab(bb)) return bb;
      var ab = bb + "";
      return "0" == ab && 1 / bb == -1 / 0 ? "-0" : ab
    }
  },
  4918: bb => {
    var ab = Function.prototype.toString;
    bb.exports = function(bb) {
      if (null != bb) {
        try {
          return ab.call(bb)
        } catch (Ub) {}
        try {
          return bb + ""
        } catch (Ub) {}
      }
      return ""
    }
  },
  4768: bb => {
    var ab = /\s/;
    bb.exports = function(bb) {
      for (var Ub = bb.length; Ub-- && ab.test(bb.charAt(Ub)););
      return Ub
    }
  },
  5702: bb => {
    var ab = "\\ud800-\\udfff",
      Ub = "[" + ab + "]",
      Ab = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      Mb = "\\ud83c[\\udffb-\\udfff]",
      Tb = "[^" + ab + "]",
      Eb = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Yb = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Bb = "(?:" + Ab + "|" + Mb + ")" + "?",
      eb = "[\\ufe0e\\ufe0f]?",
      vb = eb + Bb + ("(?:\\u200d(?:" + [Tb, Eb, Yb].join("|") + ")" + eb + Bb + ")*"),
      Lb = "(?:" + [Tb + Ab + "?", Ab, Eb, Yb, Ub].join("|") + ")",
      Pb = RegExp(Mb + "(?=" + Mb + ")|" + Lb + vb, "g");
    bb.exports = function(bb) {
      return bb.match(Pb) || []
    }
  },
  5532: bb => {
    bb.exports = function(bb) {
      return function() {
        return bb
      }
    }
  },
  4731: (bb, ab, Ub) => {
    var Ab = Ub(4734),
      Mb = Ub(4741),
      Tb = Ub(4763),
      Eb = Math.max,
      Yb = Math.min;
    bb.exports = function(bb, ab, Ub) {
      var Bb, eb, vb, Lb, Pb, Xb, jb = 0,
        Rb = !1,
        kb = !1,
        yb = !0;
      if ("function" != typeof bb) throw new TypeError("Expected a function");

      function Zb(ab) {
        var Ub = Bb,
          Ab = eb;
        return Bb = eb = void 0, jb = ab, Lb = bb.apply(Ab, Ub)
      }

      function Db(bb) {
        var Ub = bb - Xb;
        return void 0 === Xb || Ub >= ab || Ub < 0 || kb && bb - jb >= vb
      }

      function zb() {
        var bb = Mb();
        if (Db(bb)) return xb(bb);
        Pb = setTimeout(zb, function(bb) {
          var Ub = ab - (bb - Xb);
          return kb ? Yb(Ub, vb - (bb - jb)) : Ub
        }(bb))
      }

      function xb(bb) {
        return Pb = void 0, yb && Bb ? Zb(bb) : (Bb = eb = void 0, Lb)
      }

      function ib() {
        var bb = Mb(),
          Ub = Db(bb);
        if (Bb = arguments, eb = this, Xb = bb, Ub) {
          if (void 0 === Pb) return function(bb) {
            return jb = bb, Pb = setTimeout(zb, ab), Rb ? Zb(bb) : Lb
          }(Xb);
          if (kb) return clearTimeout(Pb), Pb = setTimeout(zb, ab), Zb(Xb)
        }
        return void 0 === Pb && (Pb = setTimeout(zb, ab)), Lb
      }
      return ab = Tb(ab) || 0, Ab(Ub) && (Rb = !!Ub.leading, vb = (kb = "maxWait" in Ub) ? Eb(Tb(Ub.maxWait) || 0, ab) : vb, yb = "trailing" in Ub ? !!Ub.trailing : yb), ib.cancel = function() {
        void 0 !== Pb && clearTimeout(Pb), jb = 0, Bb = Xb = eb = Pb = void 0
      }, ib.flush = function() {
        return void 0 === Pb ? Lb : xb(Mb())
      }, ib
    }
  },
  4966: bb => {
    bb.exports = function(bb, ab) {
      return bb === ab || bb !== bb && ab !== ab
    }
  },
  5886: (bb, ab, Ub) => {
    var Ab = Ub(5894),
      Mb = Ub(5897),
      Tb = Ub(5177),
      Eb = Ub(4824),
      Yb = Ub(5117);
    bb.exports = function(bb, ab, Ub) {
      var Bb = Eb(bb) ? Ab : Mb;
      return Ub && Yb(bb, ab, Ub) && (ab = void 0), Bb(bb, Tb(ab, 3))
    }
  },
  5954: (bb, ab, Ub) => {
    var Ab = Ub(5960)(Ub(5964));
    bb.exports = Ab
  },
  5964: (bb, ab, Ub) => {
    var Ab = Ub(5602),
      Mb = Ub(5177),
      Tb = Ub(5970),
      Eb = Math.max;
    bb.exports = function(bb, ab, Ub) {
      var Yb = null == bb ? 0 : bb.length;
      if (!Yb) return -1;
      var Bb = null == Ub ? 0 : Tb(Ub);
      return Bb < 0 && (Bb = Eb(Yb + Bb, 0)), Ab(bb, Mb(ab, 3), Bb)
    }
  },
  5797: (bb, ab, Ub) => {
    var Ab = Ub(5155),
      Mb = Ub(5801);
    bb.exports = function(bb, ab) {
      return Ab(Mb(bb, ab), 1)
    }
  },
  4838: (bb, ab, Ub) => {
    var Ab = Ub(4840);
    bb.exports = function(bb, ab, Ub) {
      var Mb = null == bb ? void 0 : Ab(bb, ab);
      return void 0 === Mb ? Ub : Mb
    }
  },
  5424: (bb, ab, Ub) => {
    var Ab = Ub(5428),
      Mb = Ub(5435);
    bb.exports = function(bb, ab) {
      return null != bb && Mb(bb, ab, Ab)
    }
  },
  5437: bb => {
    bb.exports = function(bb) {
      return bb
    }
  },
  5166: (bb, ab, Ub) => {
    var Ab = Ub(5169),
      Mb = Ub(4807),
      Tb = Object.prototype,
      Eb = Tb.hasOwnProperty,
      Yb = Tb.propertyIsEnumerable,
      Bb = Ab(function() {
        return arguments
      }()) ? Ab : function(bb) {
        return Mb(bb) && Eb.call(bb, "callee") && !Yb.call(bb, "callee")
      };
    bb.exports = Bb
  },
  4824: bb => {
    var ab = Array.isArray;
    bb.exports = ab
  },
  5125: (bb, ab, Ub) => {
    var Ab = Ub(4904),
      Mb = Ub(5129);
    bb.exports = function(bb) {
      return null != bb && Mb(bb.length) && !Ab(bb)
    }
  },
  5920: (bb, ab, Ub) => {
    var Ab = Ub(4784),
      Mb = Ub(4807);
    bb.exports = function(bb) {
      return !0 === bb || !1 === bb || Mb(bb) && "[object Boolean]" == Ab(bb)
    }
  },
  5326: (bb, ab, Ub) => {
    bb = Ub.nmd(bb);
    var Ab = Ub(4749),
      Mb = Ub(5331),
      Tb = ab && !ab.nodeType && ab,
      Eb = Tb && bb && !bb.nodeType && bb,
      Yb = Eb && Eb.exports === Tb ? Ab.OX : void 0,
      Bb = (Yb ? Yb.isBuffer : void 0) || Mb;
    bb.exports = Bb
  },
  5809: (bb, ab, Ub) => {
    var Ab = Ub(5223);
    bb.exports = function(bb, ab) {
      return Ab(bb, ab)
    }
  },
  4904: (bb, ab, Ub) => {
    var Ab = Ub(4784),
      Mb = Ub(4734);
    bb.exports = function(bb) {
      if (!Mb(bb)) return !1;
      var ab = Ab(bb);
      return "[object Function]" == ab || "[object GeneratorFunction]" == ab || "[object AsyncFunction]" == ab || "[object Proxy]" == ab
    }
  },
  5129: bb => {
    bb.exports = function(bb) {
      return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= 9007199254740991
    }
  },
  4831: (bb, ab, Ub) => {
    var Ab = Ub(4834);
    bb.exports = function(bb) {
      return Ab(bb) && bb != +bb
    }
  },
  5041: bb => {
    bb.exports = function(bb) {
      return null == bb
    }
  },
  4834: (bb, ab, Ub) => {
    var Ab = Ub(4784),
      Mb = Ub(4807);
    bb.exports = function(bb) {
      return "number" == typeof bb || Mb(bb) && "[object Number]" == Ab(bb)
    }
  },
  4734: bb => {
    bb.exports = function(bb) {
      var ab = typeof bb;
      return null != bb && ("object" == ab || "function" == ab)
    }
  },
  4807: bb => {
    bb.exports = function(bb) {
      return null != bb && "object" == typeof bb
    }
  },
  5915: (bb, ab, Ub) => {
    var Ab = Ub(4784),
      Mb = Ub(5918),
      Tb = Ub(4807),
      Eb = Function.prototype,
      Yb = Object.prototype,
      Bb = Eb.toString,
      eb = Yb.hasOwnProperty,
      vb = Bb.call(Object);
    bb.exports = function(bb) {
      if (!Tb(bb) || "[object Object]" != Ab(bb)) return !1;
      var ab = Mb(bb);
      if (null === ab) return !0;
      var Ub = eb.call(ab, "constructor") && ab.constructor;
      return "function" == typeof Ub && Ub instanceof Ub && Bb.call(Ub) == vb
    }
  },
  4821: (bb, ab, Ub) => {
    var Ab = Ub(4784),
      Mb = Ub(4824),
      Tb = Ub(4807);
    bb.exports = function(bb) {
      return "string" == typeof bb || !Mb(bb) && Tb(bb) && "[object String]" == Ab(bb)
    }
  },
  4776: (bb, ab, Ub) => {
    var Ab = Ub(4784),
      Mb = Ub(4807);
    bb.exports = function(bb) {
      return "symbol" == typeof bb || Mb(bb) && "[object Symbol]" == Ab(bb)
    }
  },
  5334: (bb, ab, Ub) => {
    var Ab = Ub(5337),
      Mb = Ub(5345),
      Tb = Ub(5349),
      Eb = Tb && Tb.isTypedArray,
      Yb = Eb ? Mb(Eb) : Ab;
    bb.exports = Yb
  },
  5312: (bb, ab, Ub) => {
    var Ab = Ub(5318),
      Mb = Ub(5358),
      Tb = Ub(5125);
    bb.exports = function(bb) {
      return Tb(bb) ? Ab(bb) : Mb(bb)
    }
  },
  5909: bb => {
    bb.exports = function(bb) {
      var ab = null == bb ? 0 : bb.length;
      return ab ? bb[ab - 1] : void 0
    }
  },
  5801: (bb, ab, Ub) => {
    var Ab = Ub(5031),
      Mb = Ub(5177),
      Tb = Ub(5458),
      Eb = Ub(4824);
    bb.exports = function(bb, ab) {
      return (Eb(bb) ? Ab : Tb)(bb, Mb(ab, 3))
    }
  },
  5872: (bb, ab, Ub) => {
    var Ab = Ub(5877),
      Mb = Ub(5465),
      Tb = Ub(5177);
    bb.exports = function(bb, ab) {
      var Ub = {};
      return ab = Tb(ab, 3), Mb(bb, (function(bb, Mb, Tb) {
        Ab(Ub, Mb, ab(bb, Mb, Tb))
      })), Ub
    }
  },
  5772: (bb, ab, Ub) => {
    var Ab = Ub(5777),
      Mb = Ub(5782),
      Tb = Ub(5437);
    bb.exports = function(bb) {
      return bb && bb.length ? Ab(bb, Tb, Mb) : void 0
    }
  },
  4870: (bb, ab, Ub) => {
    var Ab = Ub(4879);

    function Mb(bb, ab) {
      if ("function" != typeof bb || null != ab && "function" != typeof ab) throw new TypeError("Expected a function");
      var Ub = function() {
        var Ab = arguments,
          Mb = ab ? ab.apply(this, Ab) : Ab[0],
          Tb = Ub.cache;
        if (Tb.has(Mb)) return Tb.get(Mb);
        var Eb = bb.apply(this, Ab);
        return Ub.cache = Tb.set(Mb, Eb) || Tb, Eb
      };
      return Ub.cache = new(Mb.Cache || Ab), Ub
    }
    Mb.Cache = Ab, bb.exports = Mb
  },
  5784: (bb, ab, Ub) => {
    var Ab = Ub(5777),
      Mb = Ub(5789),
      Tb = Ub(5437);
    bb.exports = function(bb) {
      return bb && bb.length ? Ab(bb, Tb, Mb) : void 0
    }
  },
  5635: bb => {
    bb.exports = function() {}
  },
  4741: (bb, ab, Ub) => {
    var Ab = Ub(4749);
    bb.exports = function() {
      return Ab.Date.now()
    }
  },
  5439: (bb, ab, Ub) => {
    var Ab = Ub(5447),
      Mb = Ub(5451),
      Tb = Ub(4854),
      Eb = Ub(5034);
    bb.exports = function(bb) {
      return Tb(bb) ? Ab(Eb(bb)) : Mb(bb)
    }
  },
  5094: (bb, ab, Ub) => {
    var Ab = Ub(5102)();
    bb.exports = Ab
  },
  5937: (bb, ab, Ub) => {
    var Ab = Ub(5256),
      Mb = Ub(5177),
      Tb = Ub(5944),
      Eb = Ub(4824),
      Yb = Ub(5117);
    bb.exports = function(bb, ab, Ub) {
      var Bb = Eb(bb) ? Ab : Tb;
      return Ub && Yb(bb, ab, Ub) && (ab = void 0), Bb(bb, Mb(ab, 3))
    }
  },
  5153: (bb, ab, Ub) => {
    var Ab = Ub(5155),
      Mb = Ub(5172),
      Tb = Ub(5504),
      Eb = Ub(5117),
      Yb = Tb((function(bb, ab) {
        if (null == bb) return [];
        var Ub = ab.length;
        return Ub > 1 && Eb(bb, ab[0], ab[1]) ? ab = [] : Ub > 2 && Eb(ab[0], ab[1], ab[2]) && (ab = [ab[0]]), Mb(bb, Ab(ab, 1), [])
      }));
    bb.exports = Yb
  },
  5305: bb => {
    bb.exports = function() {
      return []
    }
  },
  5331: bb => {
    bb.exports = function() {
      return !1
    }
  },
  4725: (bb, ab, Ub) => {
    var Ab = Ub(4731),
      Mb = Ub(4734);
    bb.exports = function(bb, ab, Ub) {
      var Tb = !0,
        Eb = !0;
      if ("function" != typeof bb) throw new TypeError("Expected a function");
      return Mb(Ub) && (Tb = "leading" in Ub ? !!Ub.leading : Tb, Eb = "trailing" in Ub ? !!Ub.trailing : Eb), Ab(bb, ab, {
        leading: Tb,
        maxWait: ab,
        trailing: Eb
      })
    }
  },
  5145: (bb, ab, Ub) => {
    var Ab = Ub(4763),
      Mb = 1 / 0;
    bb.exports = function(bb) {
      return bb ? (bb = Ab(bb)) === Mb || bb === -1 / 0 ? 17976931348623157e292 * (bb < 0 ? -1 : 1) : bb === bb ? bb : 0 : 0 === bb ? bb : 0
    }
  },
  5970: (bb, ab, Ub) => {
    var Ab = Ub(5145);
    bb.exports = function(bb) {
      var ab = Ab(bb),
        Ub = ab % 1;
      return ab === ab ? Ub ? ab - Ub : ab : 0
    }
  },
  4763: (bb, ab, Ub) => {
    var Ab = Ub(4766),
      Mb = Ub(4734),
      Tb = Ub(4776),
      Eb = /^[-+]0x[0-9a-f]+$/i,
      Yb = /^0b[01]+$/i,
      Bb = /^0o[0-7]+$/i,
      eb = parseInt;
    bb.exports = function(bb) {
      if ("number" == typeof bb) return bb;
      if (Tb(bb)) return NaN;
      if (Mb(bb)) {
        var ab = "function" == typeof bb.valueOf ? bb.valueOf() : bb;
        bb = Mb(ab) ? ab + "" : ab
      }
      if ("string" != typeof bb) return 0 === bb ? bb : +bb;
      bb = Ab(bb);
      var Ub = Yb.test(bb);
      return Ub || Bb.test(bb) ? eb(bb.slice(2), Ub ? 2 : 8) : Eb.test(bb) ? NaN : +bb
    }
  },
  5016: (bb, ab, Ub) => {
    var Ab = Ub(5022);
    bb.exports = function(bb) {
      return null == bb ? "" : Ab(bb)
    }
  },
  5583: (bb, ab, Ub) => {
    var Ab = Ub(5177),
      Mb = Ub(5588);
    bb.exports = function(bb, ab) {
      return bb && bb.length ? Mb(bb, Ab(ab, 2)) : []
    }
  },
  5656: (bb, ab, Ub) => {
    var Ab = Ub(5662)("toUpperCase");
    bb.exports = Ab
  },
  5735: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => qa
    });
    var Ab = Ub(52),
      Mb = Ub(4642),
      Tb = Ub.n(Mb);
    const {
      getOwnPropertyNames: Eb,
      getOwnPropertySymbols: Yb
    } = Object, {
      hasOwnProperty: Bb
    } = Object.prototype;

    function eb(bb, ab) {
      return function(Ub, Ab, Mb) {
        return bb(Ub, Ab, Mb) && ab(Ub, Ab, Mb)
      }
    }

    function vb(bb) {
      return function(ab, Ub, Ab) {
        if (!ab || !Ub || "object" !== typeof ab || "object" !== typeof Ub) return bb(ab, Ub, Ab);
        const {
          cache: Mb
        } = Ab, Tb = Mb.get(ab), Eb = Mb.get(Ub);
        if (Tb && Eb) return Tb === Ub && Eb === ab;
        Mb.set(ab, Ub), Mb.set(Ub, ab);
        const Yb = bb(ab, Ub, Ab);
        return Mb.delete(ab), Mb.delete(Ub), Yb
      }
    }

    function Lb(bb) {
      return Eb(bb).concat(Yb(bb))
    }
    const Pb = Object.hasOwn || ((bb, ab) => Bb.call(bb, ab));

    function Xb(bb, ab) {
      return bb === ab || !bb && !ab && bb !== bb && ab !== ab
    }
    const {
      getOwnPropertyDescriptor: jb,
      keys: Rb
    } = Object;

    function kb(bb, ab) {
      return bb.byteLength === ab.byteLength && Ib(new Uint8Array(bb), new Uint8Array(ab))
    }

    function yb(bb, ab, Ub) {
      let Ab = bb.length;
      if (ab.length !== Ab) return !1;
      for (; Ab-- > 0;)
        if (!Ub.equals(bb[Ab], ab[Ab], Ab, Ab, bb, ab, Ub)) return !1;
      return !0
    }

    function Zb(bb, ab) {
      return bb.byteLength === ab.byteLength && Ib(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength), new Uint8Array(ab.buffer, ab.byteOffset, ab.byteLength))
    }

    function Db(bb, ab) {
      return Xb(bb.getTime(), ab.getTime())
    }

    function zb(bb, ab) {
      return bb.name === ab.name && bb.message === ab.message && bb.cause === ab.cause && bb.stack === ab.stack
    }

    function xb(bb, ab) {
      return bb === ab
    }

    function ib(bb, ab, Ub) {
      const Ab = bb.size;
      if (Ab !== ab.size) return !1;
      if (!Ab) return !0;
      const Mb = new Array(Ab),
        Tb = bb.entries();
      let Eb, Yb, Bb = 0;
      for (;
        (Eb = Tb.next()) && !Eb.done;) {
        const Ab = ab.entries();
        let Tb = !1,
          eb = 0;
        for (;
          (Yb = Ab.next()) && !Yb.done;) {
          if (Mb[eb]) {
            eb++;
            continue
          }
          const Ab = Eb.value,
            vb = Yb.value;
          if (Ub.equals(Ab[0], vb[0], Bb, eb, bb, ab, Ub) && Ub.equals(Ab[1], vb[1], Ab[0], vb[0], bb, ab, Ub)) {
            Tb = Mb[eb] = !0;
            break
          }
          eb++
        }
        if (!Tb) return !1;
        Bb++
      }
      return !0
    }
    const fb = Xb;

    function mb(bb, ab, Ub) {
      const Ab = Rb(bb);
      let Mb = Ab.length;
      if (Rb(ab).length !== Mb) return !1;
      for (; Mb-- > 0;)
        if (!Fb(bb, ab, Ub, Ab[Mb])) return !1;
      return !0
    }

    function pb(bb, ab, Ub) {
      const Ab = Lb(bb);
      let Mb, Tb, Eb, Yb = Ab.length;
      if (Lb(ab).length !== Yb) return !1;
      for (; Yb-- > 0;) {
        if (Mb = Ab[Yb], !Fb(bb, ab, Ub, Mb)) return !1;
        if (Tb = jb(bb, Mb), Eb = jb(ab, Mb), (Tb || Eb) && (!Tb || !Eb || Tb.configurable !== Eb.configurable || Tb.enumerable !== Eb.enumerable || Tb.writable !== Eb.writable)) return !1
      }
      return !0
    }

    function Nb(bb, ab) {
      return Xb(bb.valueOf(), ab.valueOf())
    }

    function Wb(bb, ab) {
      return bb.source === ab.source && bb.flags === ab.flags
    }

    function Hb(bb, ab, Ub) {
      const Ab = bb.size;
      if (Ab !== ab.size) return !1;
      if (!Ab) return !0;
      const Mb = new Array(Ab),
        Tb = bb.values();
      let Eb, Yb;
      for (;
        (Eb = Tb.next()) && !Eb.done;) {
        const Ab = ab.values();
        let Tb = !1,
          Bb = 0;
        for (;
          (Yb = Ab.next()) && !Yb.done;) {
          if (!Mb[Bb] && Ub.equals(Eb.value, Yb.value, Eb.value, Yb.value, bb, ab, Ub)) {
            Tb = Mb[Bb] = !0;
            break
          }
          Bb++
        }
        if (!Tb) return !1
      }
      return !0
    }

    function Ib(bb, ab) {
      let Ub = bb.byteLength;
      if (ab.byteLength !== Ub || bb.byteOffset !== ab.byteOffset) return !1;
      for (; Ub-- > 0;)
        if (bb[Ub] !== ab[Ub]) return !1;
      return !0
    }

    function db(bb, ab) {
      return bb.hostname === ab.hostname && bb.pathname === ab.pathname && bb.protocol === ab.protocol && bb.port === ab.port && bb.hash === ab.hash && bb.username === ab.username && bb.password === ab.password
    }

    function Fb(bb, ab, Ub, Ab) {
      return !("_owner" !== Ab && "__o" !== Ab && "__v" !== Ab || !bb.$$typeof && !ab.$$typeof) || Pb(ab, Ab) && Ub.equals(bb[Ab], ab[Ab], Ab, Ab, bb, ab, Ub)
    }
    const hb = {
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
      Gb = Object.prototype.toString;

    function Qb(bb) {
      let {
        areArrayBuffersEqual: ab,
        areArraysEqual: Ub,
        areDataViewsEqual: Ab,
        areDatesEqual: Mb,
        areErrorsEqual: Tb,
        areFunctionsEqual: Eb,
        areMapsEqual: Yb,
        areNumbersEqual: Bb,
        areObjectsEqual: eb,
        arePrimitiveWrappersEqual: vb,
        areRegExpsEqual: Lb,
        areSetsEqual: Pb,
        areTypedArraysEqual: Xb,
        areUrlsEqual: jb,
        unknownTagComparators: Rb
      } = bb;
      return function(bb, kb, yb) {
        if (bb === kb) return !0;
        if (null == bb || null == kb) return !1;
        const Zb = typeof bb;
        if (Zb !== typeof kb) return !1;
        if ("object" !== Zb) return "number" === Zb ? Bb(bb, kb, yb) : "function" === Zb && Eb(bb, kb, yb);
        const Db = bb.constructor;
        if (Db !== kb.constructor) return !1;
        if (Db === Object) return eb(bb, kb, yb);
        if (Array.isArray(bb)) return Ub(bb, kb, yb);
        if (Db === Date) return Mb(bb, kb, yb);
        if (Db === RegExp) return Lb(bb, kb, yb);
        if (Db === Map) return Yb(bb, kb, yb);
        if (Db === Set) return Pb(bb, kb, yb);
        const zb = Gb.call(bb);
        if ("[object Date]" === zb) return Mb(bb, kb, yb);
        if ("[object RegExp]" === zb) return Lb(bb, kb, yb);
        if ("[object Map]" === zb) return Yb(bb, kb, yb);
        if ("[object Set]" === zb) return Pb(bb, kb, yb);
        if ("[object Object]" === zb) return "function" !== typeof bb.then && "function" !== typeof kb.then && eb(bb, kb, yb);
        if ("[object URL]" === zb) return jb(bb, kb, yb);
        if ("[object Error]" === zb) return Tb(bb, kb, yb);
        if ("[object Arguments]" === zb) return eb(bb, kb, yb);
        if (hb[zb]) return Xb(bb, kb, yb);
        if ("[object ArrayBuffer]" === zb) return ab(bb, kb, yb);
        if ("[object DataView]" === zb) return Ab(bb, kb, yb);
        if ("[object Boolean]" === zb || "[object Number]" === zb || "[object String]" === zb) return vb(bb, kb, yb);
        if (Rb) {
          let ab = Rb[zb];
          if (!ab) {
            const Ub = null != (xb = bb) ? xb[Symbol.toStringTag] : void 0;
            Ub && (ab = Rb[Ub])
          }
          if (ab) return ab(bb, kb, yb)
        }
        var xb;
        return !1
      }
    }
    const qb = ub();
    ub({
      strict: !0
    }), ub({
      circular: !0
    }), ub({
      circular: !0,
      strict: !0
    }), ub({
      createInternalComparator: () => Xb
    }), ub({
      strict: !0,
      createInternalComparator: () => Xb
    }), ub({
      circular: !0,
      createInternalComparator: () => Xb
    }), ub({
      circular: !0,
      createInternalComparator: () => Xb,
      strict: !0
    });

    function ub() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: ab = !1,
        createInternalComparator: Ub,
        createState: Ab,
        strict: Mb = !1
      } = bb, Tb = function(bb) {
        let {
          circular: ab,
          createCustomConfig: Ub,
          strict: Ab
        } = bb, Mb = {
          areArrayBuffersEqual: kb,
          areArraysEqual: Ab ? pb : yb,
          areDataViewsEqual: Zb,
          areDatesEqual: Db,
          areErrorsEqual: zb,
          areFunctionsEqual: xb,
          areMapsEqual: Ab ? eb(ib, pb) : ib,
          areNumbersEqual: fb,
          areObjectsEqual: Ab ? pb : mb,
          arePrimitiveWrappersEqual: Nb,
          areRegExpsEqual: Wb,
          areSetsEqual: Ab ? eb(Hb, pb) : Hb,
          areTypedArraysEqual: Ab ? eb(Ib, pb) : Ib,
          areUrlsEqual: db,
          unknownTagComparators: void 0
        };
        if (Ub && (Mb = Object.assign({}, Mb, Ub(Mb))), ab) {
          const bb = vb(Mb.areArraysEqual),
            ab = vb(Mb.areMapsEqual),
            Ub = vb(Mb.areObjectsEqual),
            Ab = vb(Mb.areSetsEqual);
          Mb = Object.assign({}, Mb, {
            areArraysEqual: bb,
            areMapsEqual: ab,
            areObjectsEqual: Ub,
            areSetsEqual: Ab
          })
        }
        return Mb
      }(bb), Eb = Qb(Tb);
      var Yb;
      return function(bb) {
        let {
          circular: ab,
          comparator: Ub,
          createState: Ab,
          equals: Mb,
          strict: Tb
        } = bb;
        if (Ab) return function(bb, Eb) {
          const {
            cache: Yb = (ab ? new WeakMap : void 0),
            meta: Bb
          } = Ab();
          return Ub(bb, Eb, {
            cache: Yb,
            equals: Mb,
            meta: Bb,
            strict: Tb
          })
        };
        if (ab) return function(bb, ab) {
          return Ub(bb, ab, {
            cache: new WeakMap,
            equals: Mb,
            meta: void 0,
            strict: Tb
          })
        };
        const Eb = {
          cache: void 0,
          equals: Mb,
          meta: void 0,
          strict: Tb
        };
        return function(bb, ab) {
          return Ub(bb, ab, Eb)
        }
      }({
        circular: ab,
        comparator: Eb,
        createState: Ab,
        equals: Ub ? Ub(Eb) : (Yb = Eb, function(bb, ab, Ub, Ab, Mb, Tb, Eb) {
          return Yb(bb, ab, Eb)
        }),
        strict: Mb
      })
    }

    function rb(bb) {
      var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ub = -1;
      requestAnimationFrame((function Ab(Mb) {
        Ub < 0 && (Ub = Mb), Mb - Ub > ab ? (bb(Mb), Ub = -1) : function(bb) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(bb)
        }(Ab)
      }))
    }

    function Kb(bb) {
      return Kb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Kb(bb)
    }

    function ob(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return lb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return lb(bb, ab)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function tb() {
      var bb = function() {
          return null
        },
        ab = !1,
        Ub = function Ub(Ab) {
          if (!ab) {
            if (Array.isArray(Ab)) {
              if (!Ab.length) return;
              var Mb = ob(Ab),
                Tb = Mb[0],
                Eb = Mb.slice(1);
              return "number" === typeof Tb ? void rb(Ub.bind(null, Eb), Tb) : (Ub(Tb), void rb(Ub.bind(null, Eb)))
            }
            "object" === Kb(Ab) && bb(Ab), "function" === typeof Ab && Ab()
          }
        };
      return {
        stop: function() {
          ab = !0
        },
        start: function(bb) {
          ab = !1, Ub(bb)
        },
        subscribe: function(ab) {
          return bb = ab,
            function() {
              bb = function() {
                return null
              }
            }
        }
      }
    }

    function wb(bb) {
      return wb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, wb(bb)
    }

    function sb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function gb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? sb(Object(Ub), !0).forEach((function(ab) {
          Cb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : sb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Cb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" !== wb(bb) || null === bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" !== wb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" === wb(ab) ? ab : String(ab)
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var Vb = function(bb) {
        return bb
      },
      Ob = function(bb, ab) {
        return Object.keys(ab).reduce((function(Ub, Ab) {
          return gb(gb({}, Ub), {}, Cb({}, Ab, bb(Ab, ab[Ab])))
        }), {})
      },
      cb = function(bb, ab, Ub) {
        return bb.map((function(bb) {
          return "".concat((Ab = bb, Ab.replace(/([A-Z])/g, (function(bb) {
            return "-".concat(bb.toLowerCase())
          }))), " ").concat(ab, "ms ").concat(Ub);
          var Ab
        })).join(",")
      };

    function Jb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || Sb(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return ba(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Sb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Sb(bb, ab) {
      if (bb) {
        if ("string" === typeof bb) return ba(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === Ub && bb.constructor && (Ub = bb.constructor.name), "Map" === Ub || "Set" === Ub ? Array.from(bb) : "Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub) ? ba(bb, ab) : void 0
      }
    }

    function ba(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }
    var aa = 1e-4,
      Ua = function(bb, ab) {
        return [0, 3 * bb, 3 * ab - 6 * bb, 3 * bb - 3 * ab + 1]
      },
      Aa = function(bb, ab) {
        return bb.map((function(bb, Ub) {
          return bb * Math.pow(ab, Ub)
        })).reduce((function(bb, ab) {
          return bb + ab
        }))
      },
      Ma = function(bb, ab) {
        return function(Ub) {
          var Ab = Ua(bb, ab);
          return Aa(Ab, Ub)
        }
      },
      Ta = function() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        var Ab = ab[0],
          Mb = ab[1],
          Tb = ab[2],
          Eb = ab[3];
        if (1 === ab.length) switch (ab[0]) {
          case "linear":
            Ab = 0, Mb = 0, Tb = 1, Eb = 1;
            break;
          case "ease":
            Ab = .25, Mb = .1, Tb = .25, Eb = 1;
            break;
          case "ease-in":
            Ab = .42, Mb = 0, Tb = 1, Eb = 1;
            break;
          case "ease-out":
            Ab = .42, Mb = 0, Tb = .58, Eb = 1;
            break;
          case "ease-in-out":
            Ab = 0, Mb = 0, Tb = .58, Eb = 1;
            break;
          default:
            var Yb = ab[0].split("(");
            if ("cubic-bezier" === Yb[0] && 4 === Yb[1].split(")")[0].split(",").length) {
              var Bb = Jb(Yb[1].split(")")[0].split(",").map((function(bb) {
                return parseFloat(bb)
              })), 4);
              Ab = Bb[0], Mb = Bb[1], Tb = Bb[2], Eb = Bb[3]
            }
        } [Ab, Tb, Mb, Eb].every((function(bb) {
          return "number" === typeof bb && bb >= 0 && bb <= 1
        }));
        var eb, vb, Lb = Ma(Ab, Tb),
          Pb = Ma(Mb, Eb),
          Xb = (eb = Ab, vb = Tb, function(bb) {
            var ab = Ua(eb, vb),
              Ub = [].concat(nb(ab.map((function(bb, ab) {
                return bb * ab
              })).slice(1)), [0]);
            return Aa(Ub, bb)
          }),
          jb = function(bb) {
            for (var ab, Ub = bb > 1 ? 1 : bb, Ab = Ub, Mb = 0; Mb < 8; ++Mb) {
              var Tb = Lb(Ab) - Ub,
                Eb = Xb(Ab);
              if (Math.abs(Tb - Ub) < aa || Eb < aa) return Pb(Ab);
              Ab = (ab = Ab - Tb / Eb) > 1 ? 1 : ab < 0 ? 0 : ab
            }
            return Pb(Ab)
          };
        return jb.isStepper = !1, jb
      },
      Ea = function() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        var Ab = ab[0];
        if ("string" === typeof Ab) switch (Ab) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return Ta(Ab);
          case "spring":
            return function() {
              var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                ab = bb.stiff,
                Ub = void 0 === ab ? 100 : ab,
                Ab = bb.damping,
                Mb = void 0 === Ab ? 8 : Ab,
                Tb = bb.dt,
                Eb = void 0 === Tb ? 17 : Tb,
                Yb = function(bb, ab, Ab) {
                  var Tb = Ab + (-(bb - ab) * Ub - Ab * Mb) * Eb / 1e3,
                    Yb = Ab * Eb / 1e3 + bb;
                  return Math.abs(Yb - ab) < aa && Math.abs(Tb) < aa ? [ab, 0] : [Yb, Tb]
                };
              return Yb.isStepper = !0, Yb.dt = Eb, Yb
            }();
          default:
            if ("cubic-bezier" === Ab.split("(")[0]) return Ta(Ab)
        }
        return "function" === typeof Ab ? Ab : null
      };

    function Ya(bb) {
      return Ya = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ya(bb)
    }

    function Ba(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return ja(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Xa(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ea(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function va(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? ea(Object(Ub), !0).forEach((function(ab) {
          La(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : ea(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function La(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" !== Ya(bb) || null === bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" !== Ya(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" === Ya(ab) ? ab : String(ab)
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Pa(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || Xa(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xa(bb, ab) {
      if (bb) {
        if ("string" === typeof bb) return ja(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === Ub && bb.constructor && (Ub = bb.constructor.name), "Map" === Ub || "Set" === Ub ? Array.from(bb) : "Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub) ? ja(bb, ab) : void 0
      }
    }

    function ja(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }
    var Ra = function(bb, ab, Ub) {
        return bb + (ab - bb) * Ub
      },
      ka = function(bb) {
        return bb.from !== bb.to
      },
      ya = function bb(ab, Ub, Ab) {
        var Mb = Ob((function(bb, Ub) {
          if (ka(Ub)) {
            var Ab = Pa(ab(Ub.from, Ub.to, Ub.QR), 2),
              Mb = Ab[0],
              Tb = Ab[1];
            return va(va({}, Ub), {}, {
              from: Mb,
              QR: Tb
            })
          }
          return Ub
        }), Ub);
        return Ab < 1 ? Ob((function(bb, ab) {
          return ka(ab) ? va(va({}, ab), {}, {
            QR: Ra(ab.QR, Mb[bb].QR, Ab),
            from: Ra(ab.from, Mb[bb].from, Ab)
          }) : ab
        }), Ub) : bb(ab, Mb, Ab - 1)
      };
    const Za = function(bb, ab, Ub, Ab, Mb) {
      var Tb, Eb, Yb, Bb, eb = (Tb = bb, Eb = ab, [Object.keys(Tb), Object.keys(Eb)].reduce((function(bb, ab) {
          return bb.filter((function(bb) {
            return ab.includes(bb)
          }))
        }))),
        vb = eb.reduce((function(Ub, Ab) {
          return va(va({}, Ub), {}, La({}, Ab, [bb[Ab], ab[Ab]]))
        }), {}),
        Lb = eb.reduce((function(Ub, Ab) {
          return va(va({}, Ub), {}, La({}, Ab, {
            from: bb[Ab],
            QR: 0,
            to: ab[Ab]
          }))
        }), {}),
        Pb = -1,
        Xb = function() {
          return null
        };
      return Xb = Ub.isStepper ? function(Ab) {
          Yb || (Yb = Ab);
          var Tb = (Ab - Yb) / Ub.dt;
          Lb = ya(Ub, Lb, Tb), Mb(va(va(va({}, bb), ab), Ob((function(bb, ab) {
            return ab.from
          }), Lb))), Yb = Ab, Object.values(Lb).filter(ka).length && (Pb = requestAnimationFrame(Xb))
        } : function(Tb) {
          Bb || (Bb = Tb);
          var Eb = (Tb - Bb) / Ab,
            Yb = Ob((function(bb, ab) {
              return Ra.apply(void 0, Ba(ab).concat([Ub(Eb)]))
            }), vb);
          if (Mb(va(va(va({}, bb), ab), Yb)), Eb < 1) Pb = requestAnimationFrame(Xb);
          else {
            var eb = Ob((function(bb, ab) {
              return Ra.apply(void 0, Ba(ab).concat([Ub(1)]))
            }), vb);
            Mb(va(va(va({}, bb), ab), eb))
          }
        },
        function() {
          return requestAnimationFrame(Xb),
            function() {
              cancelAnimationFrame(Pb)
            }
        }
    };

    function Da(bb) {
      return Da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Da(bb)
    }
    var za = ["children", "bX", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function xa(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub, Ab, Mb = {},
          Tb = Object.keys(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || (Mb[Ub] = bb[Ub]);
        return Mb
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function ia(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return fa(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return fa(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return fa(bb, ab)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fa(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function ma(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function pa(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? ma(Object(Ub), !0).forEach((function(ab) {
          Na(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : ma(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Na(bb, ab, Ub) {
      return (ab = Ha(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Wa(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Ha(Ab.key), Ab)
      }
    }

    function Ha(bb) {
      var ab = function(bb, ab) {
        if ("object" !== Da(bb) || null === bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" !== Da(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" === Da(ab) ? ab : String(ab)
    }

    function Ia(bb, ab) {
      return Ia = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Ia(bb, ab)
    }

    function da(bb) {
      var ab = function() {
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
        var Ub, Ab = Ga(bb);
        if (ab) {
          var Mb = Ga(this).constructor;
          Ub = Reflect.construct(Ab, arguments, Mb)
        } else Ub = Ab.apply(this, arguments);
        return Fa(this, Ub)
      }
    }

    function Fa(bb, ab) {
      if (ab && ("object" === Da(ab) || "function" === typeof ab)) return ab;
      if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
      return ha(bb)
    }

    function ha(bb) {
      if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return bb
    }

    function Ga(bb) {
      return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Ga(bb)
    }
    var Qa = function(bb) {
      ! function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && Ia(bb, ab)
      }(Eb, bb);
      var ab, Ub, Mb, Tb = da(Eb);

      function Eb(bb, ab) {
        var Ub;
        ! function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, Eb);
        var Ab = (Ub = Tb.call(this, bb, ab)).props,
          Mb = Ab.isActive,
          Yb = Ab.attributeName,
          Bb = Ab.from,
          eb = Ab.to,
          vb = Ab.steps,
          Lb = Ab.children,
          Pb = Ab.duration;
        if (Ub.handleStyleChange = Ub.handleStyleChange.bind(ha(Ub)), Ub.changeStyle = Ub.changeStyle.bind(ha(Ub)), !Mb || Pb <= 0) return Ub.state = {
          style: {}
        }, "function" === typeof Lb && (Ub.state = {
          style: eb
        }), Fa(Ub);
        if (vb && vb.length) Ub.state = {
          style: vb[0].style
        };
        else if (Bb) {
          if ("function" === typeof Lb) return Ub.state = {
            style: Bb
          }, Fa(Ub);
          Ub.state = {
            style: Yb ? Na({}, Yb, Bb) : Bb
          }
        } else Ub.state = {
          style: {}
        };
        return Ub
      }
      return ab = Eb, (Ub = [{
        key: "componentDidMount",
        value: function() {
          var bb = this.props,
            ab = bb.isActive,
            Ub = bb.canBegin;
          this.mounted = !0, ab && Ub && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(bb) {
          var ab = this.props,
            Ub = ab.isActive,
            Ab = ab.canBegin,
            Mb = ab.attributeName,
            Tb = ab.shouldReAnimate,
            Eb = ab.to,
            Yb = ab.from,
            Bb = this.state.style;
          if (Ab)
            if (Ub) {
              if (!(qb(bb.to, Eb) && bb.canBegin && bb.isActive)) {
                var eb = !bb.canBegin || !bb.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var vb = eb || Tb ? Yb : bb.to;
                if (this.state && Bb) {
                  var Lb = {
                    style: Mb ? Na({}, Mb, vb) : vb
                  };
                  (Mb && Bb[Mb] !== vb || !Mb && Bb !== vb) && this.setState(Lb)
                }
                this.runAnimation(pa(pa({}, this.props), {}, {
                  from: vb,
                  bX: 0
                }))
              }
            } else {
              var Pb = {
                style: Mb ? Na({}, Mb, Eb) : Eb
              };
              this.state && Bb && (Mb && Bb[Mb] !== Eb || !Mb && Bb !== Eb) && this.setState(Pb)
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
          var ab = this,
            Ub = bb.from,
            Ab = bb.to,
            Mb = bb.duration,
            Tb = bb.easing,
            Eb = bb.bX,
            Yb = bb.onAnimationEnd,
            Bb = bb.onAnimationStart,
            eb = Za(Ub, Ab, Ea(Tb), Mb, this.changeStyle);
          this.manager.start([Bb, Eb, function() {
            ab.stopJSAnimation = eb()
          }, Mb, Yb])
        }
      }, {
        key: "runStepAnimation",
        value: function(bb) {
          var ab = this,
            Ub = bb.steps,
            Ab = bb.bX,
            Mb = bb.onAnimationStart,
            Tb = Ub[0],
            Eb = Tb.style,
            Yb = Tb.duration,
            Bb = void 0 === Yb ? 0 : Yb;
          return this.manager.start([Mb].concat(ia(Ub.reduce((function(bb, Ab, Mb) {
            if (0 === Mb) return bb;
            var Tb = Ab.duration,
              Eb = Ab.easing,
              Yb = void 0 === Eb ? "ease" : Eb,
              Bb = Ab.style,
              eb = Ab.properties,
              vb = Ab.onAnimationEnd,
              Lb = Mb > 0 ? Ub[Mb - 1] : Ab,
              Pb = eb || Object.keys(Bb);
            if ("function" === typeof Yb || "spring" === Yb) return [].concat(ia(bb), [ab.runJSAnimation.bind(ab, {
              from: Lb.style,
              to: Bb,
              duration: Tb,
              easing: Yb
            }), Tb]);
            var Xb = cb(Pb, Tb, Yb),
              jb = pa(pa(pa({}, Lb.style), Bb), {}, {
                transition: Xb
              });
            return [].concat(ia(bb), [jb, Tb, vb]).filter(Vb)
          }), [Eb, Math.max(Bb, Ab)])), [bb.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(bb) {
          this.manager || (this.manager = tb());
          var ab = bb.bX,
            Ub = bb.duration,
            Ab = bb.attributeName,
            Mb = bb.to,
            Tb = bb.easing,
            Eb = bb.onAnimationStart,
            Yb = bb.onAnimationEnd,
            Bb = bb.steps,
            eb = bb.children,
            vb = this.manager;
          if (this.unSubscribe = vb.subscribe(this.handleStyleChange), "function" !== typeof Tb && "function" !== typeof eb && "spring" !== Tb)
            if (Bb.length > 1) this.runStepAnimation(bb);
            else {
              var Lb = Ab ? Na({}, Ab, Mb) : Mb,
                Pb = cb(Object.keys(Lb), Ub, Tb);
              vb.start([Eb, ab, pa(pa({}, Lb), {}, {
                transition: Pb
              }), Ub, Yb])
            }
          else this.runJSAnimation(bb)
        }
      }, {
        key: "render",
        value: function() {
          var bb = this.props,
            ab = bb.children,
            Ub = (bb.bX, bb.duration),
            Mb = (bb.attributeName, bb.easing, bb.isActive),
            Tb = (bb.steps, bb.from, bb.to, bb.canBegin, bb.onAnimationEnd, bb.shouldReAnimate, bb.onAnimationReStart, xa(bb, za)),
            Eb = Ab.Children.count(ab),
            Yb = this.state.style;
          if ("function" === typeof ab) return ab(Yb);
          if (!Mb || 0 === Eb || Ub <= 0) return ab;
          var Bb = function(bb) {
            var ab = bb.props,
              Ub = ab.style,
              Mb = void 0 === Ub ? {} : Ub,
              Eb = ab.className;
            return (0, Ab.cloneElement)(bb, pa(pa({}, Tb), {}, {
              style: pa(pa({}, Mb), Yb),
              className: Eb
            }))
          };
          return 1 === Eb ? Bb(Ab.Children.only(ab)) : Ab.createElement("div", null, Ab.Children.map(ab, (function(bb) {
            return Bb(bb)
          })))
        }
      }]) && Wa(ab.prototype, Ub), Mb && Wa(ab, Mb), Object.defineProperty(ab, "prototype", {
        writable: !1
      }), Eb
    }(Ab.PureComponent);
    Qa.displayName = "Animate", Qa.defaultProps = {
      bX: 0,
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
    }, Qa.propTypes = {
      from: Tb().oneOfType([Tb().object, Tb().string]),
      to: Tb().oneOfType([Tb().object, Tb().string]),
      attributeName: Tb().string,
      duration: Tb().number,
      bX: Tb().number,
      easing: Tb().oneOfType([Tb().string, Tb().func]),
      steps: Tb().arrayOf(Tb().shape({
        duration: Tb().number.isRequired,
        style: Tb().object.isRequired,
        easing: Tb().oneOfType([Tb().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Tb().func]),
        properties: Tb().arrayOf("string"),
        onAnimationEnd: Tb().func
      })),
      children: Tb().oneOfType([Tb().node, Tb().func]),
      isActive: Tb().bool,
      canBegin: Tb().bool,
      onAnimationEnd: Tb().func,
      shouldReAnimate: Tb().bool,
      onAnimationStart: Tb().func,
      onAnimationReStart: Tb().func
    };
    const qa = Qa
  },
  5977: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => ob
    });
    var Ab, Mb = Ub(52),
      Tb = Ub(4721),
      Eb = Ub(5735),
      Yb = Ub(4904),
      Bb = Ub.n(Yb),
      eb = Ub(5772),
      vb = Ub.n(eb),
      Lb = Ub(5041),
      Pb = Ub.n(Lb),
      Xb = Ub(4831),
      jb = Ub.n(Xb),
      Rb = Ub(5809),
      kb = Ub.n(Rb),
      yb = Ub(5975),
      Zb = Ub(5723),
      Db = Ub(5553),
      zb = Ub(5907),
      xb = Ub(5567),
      ib = Ub(4813),
      fb = Ub(5754),
      mb = Ub(5058),
      pb = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      Nb = ["key"];

    function Wb(bb) {
      return Wb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Wb(bb)
    }

    function Hb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function Ib() {
      return Ib = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Ib.apply(this, arguments)
    }

    function db(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Fb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? db(Object(Ub), !0).forEach((function(ab) {
          rb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : db(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function hb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Kb(Ab.key), Ab)
      }
    }

    function Gb(bb, ab, Ub) {
      return ab = qb(ab),
        function(bb, ab) {
          if (ab && ("object" === Wb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Qb() ? Reflect.construct(ab, Ub || [], qb(bb).constructor) : ab.apply(bb, Ub))
    }

    function Qb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Qb = function() {
        return !!bb
      })()
    }

    function qb(bb) {
      return qb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, qb(bb)
    }

    function ub(bb, ab) {
      return ub = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, ub(bb, ab)
    }

    function rb(bb, ab, Ub) {
      return (ab = Kb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Kb(bb) {
      var ab = function(bb, ab) {
        if ("object" != Wb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Wb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Wb(ab) ? ab : ab + ""
    }
    var ob = function(bb) {
      function ab() {
        var bb;
        ! function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab);
        for (var Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        return rb(bb = Gb(this, ab, [].concat(Ab)), "state", {
          isAnimationFinished: !0
        }), rb(bb, "id", (0, ib.J)("recharts-area-")), rb(bb, "handleAnimationEnd", (function() {
          var ab = bb.props.onAnimationEnd;
          bb.setState({
            isAnimationFinished: !0
          }), Bb()(ab) && ab()
        })), rb(bb, "handleAnimationStart", (function() {
          var ab = bb.props.onAnimationStart;
          bb.setState({
            isAnimationFinished: !1
          }), Bb()(ab) && ab()
        })), bb
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && ub(bb, ab)
      }(ab, bb), Ub = ab, Ab = [{
        key: "renderDots",
        value: function(bb, Ub, Ab) {
          var Tb = this.props.isAnimationActive,
            Eb = this.state.isAnimationFinished;
          if (Tb && !Eb) return null;
          var Yb = this.props,
            Bb = Yb.dot,
            eb = Yb.points,
            vb = Yb.dataKey,
            Lb = (0, mb.d)(this.props, !1),
            Pb = (0, mb.d)(Bb, !0),
            Xb = eb.map((function(bb, Ub) {
              var Ab = Fb(Fb(Fb({
                key: "dot-".concat(Ub),
                r: 3
              }, Lb), Pb), {}, {
                index: Ub,
                cx: bb.x,
                cy: bb.y,
                dataKey: vb,
                value: bb.value,
                payload: bb.payload,
                points: eb
              });
              return ab.renderDotItem(Bb, Ab)
            })),
            jb = {
              clipPath: bb ? "url(#clipPath-".concat(Ub ? "" : "dots-").concat(Ab, ")") : null
            };
          return Mb.createElement(Db.c, Ib({
            className: "recharts-area-dots"
          }, jb), Xb)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(bb) {
          var ab = this.props,
            Ub = ab.baseLine,
            Ab = ab.points,
            Tb = ab.strokeWidth,
            Eb = Ab[0].x,
            Yb = Ab[Ab.length - 1].x,
            Bb = bb * Math.abs(Eb - Yb),
            eb = vb()(Ab.map((function(bb) {
              return bb.y || 0
            })));
          return (0, ib.E)(Ub) && "number" === typeof Ub ? eb = Math.max(Ub, eb) : Ub && Array.isArray(Ub) && Ub.length && (eb = Math.max(vb()(Ub.map((function(bb) {
            return bb.y || 0
          }))), eb)), (0, ib.E)(eb) ? Mb.createElement("rect", {
            x: Eb < Yb ? Eb : Eb - Bb,
            y: 0,
            width: Bb,
            height: Math.floor(eb + (Tb ? parseInt("".concat(Tb), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(bb) {
          var ab = this.props,
            Ub = ab.baseLine,
            Ab = ab.points,
            Tb = ab.strokeWidth,
            Eb = Ab[0].y,
            Yb = Ab[Ab.length - 1].y,
            Bb = bb * Math.abs(Eb - Yb),
            eb = vb()(Ab.map((function(bb) {
              return bb.x || 0
            })));
          return (0, ib.E)(Ub) && "number" === typeof Ub ? eb = Math.max(Ub, eb) : Ub && Array.isArray(Ub) && Ub.length && (eb = Math.max(vb()(Ub.map((function(bb) {
            return bb.x || 0
          }))), eb)), (0, ib.E)(eb) ? Mb.createElement("rect", {
            x: 0,
            y: Eb < Yb ? Eb : Eb - Bb,
            width: eb + (Tb ? parseInt("".concat(Tb), 10) : 1),
            height: Math.floor(Bb)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(bb) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(bb) : this.renderHorizontalRect(bb)
        }
      }, {
        key: "renderAreaStatically",
        value: function(bb, ab, Ub, Ab) {
          var Tb = this.props,
            Eb = Tb.layout,
            Yb = Tb.type,
            Bb = Tb.stroke,
            eb = Tb.connectNulls,
            vb = Tb.isRange,
            Lb = (Tb.ref, Hb(Tb, pb));
          return Mb.createElement(Db.c, {
            clipPath: Ub ? "url(#clipPath-".concat(Ab, ")") : null
          }, Mb.createElement(yb.c, Ib({}, (0, mb.d)(Lb, !0), {
            points: bb,
            connectNulls: eb,
            type: Yb,
            baseLine: ab,
            layout: Eb,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== Bb && Mb.createElement(yb.c, Ib({}, (0, mb.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Eb,
            type: Yb,
            connectNulls: eb,
            fill: "none",
            points: bb
          })), "none" !== Bb && vb && Mb.createElement(yb.c, Ib({}, (0, mb.d)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Eb,
            type: Yb,
            connectNulls: eb,
            fill: "none",
            points: ab
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(bb, ab) {
          var Ub = this,
            Ab = this.props,
            Tb = Ab.points,
            Yb = Ab.baseLine,
            Bb = Ab.isAnimationActive,
            eb = Ab.animationBegin,
            vb = Ab.animationDuration,
            Lb = Ab.animationEasing,
            Xb = Ab.animationId,
            Rb = this.state,
            kb = Rb.prevPoints,
            yb = Rb.prevBaseLine;
          return Mb.createElement(Eb.e, {
            bX: eb,
            duration: vb,
            isActive: Bb,
            easing: Lb,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(Xb),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Ab) {
            var Eb = Ab.t;
            if (kb) {
              var Bb, eb = kb.length / Tb.length,
                vb = Tb.map((function(bb, ab) {
                  var Ub = Math.floor(ab * eb);
                  if (kb[Ub]) {
                    var Ab = kb[Ub],
                      Mb = (0, ib.u)(Ab.x, bb.x),
                      Tb = (0, ib.u)(Ab.y, bb.y);
                    return Fb(Fb({}, bb), {}, {
                      x: Mb(Eb),
                      y: Tb(Eb)
                    })
                  }
                  return bb
                }));
              return Bb = (0, ib.E)(Yb) && "number" === typeof Yb ? (0, ib.u)(yb, Yb)(Eb) : Pb()(Yb) || jb()(Yb) ? (0, ib.u)(yb, 0)(Eb) : Yb.map((function(bb, ab) {
                var Ub = Math.floor(ab * eb);
                if (yb[Ub]) {
                  var Ab = yb[Ub],
                    Mb = (0, ib.u)(Ab.x, bb.x),
                    Tb = (0, ib.u)(Ab.y, bb.y);
                  return Fb(Fb({}, bb), {}, {
                    x: Mb(Eb),
                    y: Tb(Eb)
                  })
                }
                return bb
              })), Ub.renderAreaStatically(vb, Bb, bb, ab)
            }
            return Mb.createElement(Db.c, null, Mb.createElement("defs", null, Mb.createElement("clipPath", {
              id: "animationClipPath-".concat(ab)
            }, Ub.renderClipRect(Eb))), Mb.createElement(Db.c, {
              clipPath: "url(#animationClipPath-".concat(ab, ")")
            }, Ub.renderAreaStatically(Tb, Yb, bb, ab)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(bb, ab) {
          var Ub = this.props,
            Ab = Ub.points,
            Mb = Ub.baseLine,
            Tb = Ub.isAnimationActive,
            Eb = this.state,
            Yb = Eb.prevPoints,
            Bb = Eb.prevBaseLine,
            eb = Eb.totalLength;
          return Tb && Ab && Ab.length && (!Yb && eb > 0 || !kb()(Yb, Ab) || !kb()(Bb, Mb)) ? this.renderAreaWithAnimation(bb, ab) : this.renderAreaStatically(Ab, Mb, bb, ab)
        }
      }, {
        key: "render",
        value: function() {
          var bb, ab = this.props,
            Ub = ab.hide,
            Ab = ab.dot,
            Eb = ab.points,
            Yb = ab.className,
            Bb = ab.top,
            eb = ab.left,
            vb = ab.xAxis,
            Lb = ab.yAxis,
            Xb = ab.width,
            jb = ab.height,
            Rb = ab.isAnimationActive,
            kb = ab.id;
          if (Ub || !Eb || !Eb.length) return null;
          var yb = this.state.isAnimationFinished,
            Zb = 1 === Eb.length,
            xb = (0, Tb.d)("recharts-area", Yb),
            ib = vb && vb.allowDataOverflow,
            fb = Lb && Lb.allowDataOverflow,
            pb = ib || fb,
            Nb = Pb()(kb) ? this.id : kb,
            Wb = null !== (bb = (0, mb.d)(Ab, !1)) && void 0 !== bb ? bb : {
              r: 3,
              strokeWidth: 2
            },
            Hb = Wb.r,
            Ib = void 0 === Hb ? 3 : Hb,
            db = Wb.strokeWidth,
            Fb = void 0 === db ? 2 : db,
            hb = ((0, mb.l)(Ab) ? Ab : {}).clipDot,
            Gb = void 0 === hb || hb,
            Qb = 2 * Ib + Fb;
          return Mb.createElement(Db.c, {
            className: xb
          }, ib || fb ? Mb.createElement("defs", null, Mb.createElement("clipPath", {
            id: "clipPath-".concat(Nb)
          }, Mb.createElement("rect", {
            x: ib ? eb : eb - Xb / 2,
            y: fb ? Bb : Bb - jb / 2,
            width: ib ? Xb : 2 * Xb,
            height: fb ? jb : 2 * jb
          })), !Gb && Mb.createElement("clipPath", {
            id: "clipPath-dots-".concat(Nb)
          }, Mb.createElement("rect", {
            x: eb - Qb / 2,
            y: Bb - Qb / 2,
            width: Xb + Qb,
            height: jb + Qb
          }))) : null, Zb ? null : this.renderArea(pb, Nb), (Ab || Zb) && this.renderDots(pb, Gb, Nb), (!Rb || yb) && zb.e.renderCallByParent(this.props, Eb))
        }
      }], Yb = [{
        key: "getDerivedStateFromProps",
        value: function(bb, ab) {
          return bb.animationId !== ab.prevAnimationId ? {
            prevAnimationId: bb.animationId,
            curPoints: bb.points,
            curBaseLine: bb.baseLine,
            prevPoints: ab.curPoints,
            prevBaseLine: ab.curBaseLine
          } : bb.points !== ab.curPoints || bb.baseLine !== ab.curBaseLine ? {
            curPoints: bb.points,
            curBaseLine: bb.baseLine
          } : null
        }
      }], Ab && hb(Ub.prototype, Ab), Yb && hb(Ub, Yb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Ab, Yb
    }(Mb.PureComponent);
    Ab = ob, rb(ob, "displayName", "Area"), rb(ob, "defaultProps", {
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
      isAnimationActive: !xb.b.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), rb(ob, "getBaseValue", (function(bb, ab, Ub, Ab) {
      var Mb = bb.layout,
        Tb = bb.baseValue,
        Eb = ab.props.baseValue,
        Yb = null !== Eb && void 0 !== Eb ? Eb : Tb;
      if ((0, ib.E)(Yb) && "number" === typeof Yb) return Yb;
      var Bb = "horizontal" === Mb ? Ab : Ub,
        eb = Bb.scale.domain();
      if ("number" === Bb.type) {
        var vb = Math.max(eb[0], eb[1]),
          Lb = Math.min(eb[0], eb[1]);
        return "dataMin" === Yb ? Lb : "dataMax" === Yb || vb < 0 ? vb : Math.max(Math.min(eb[0], eb[1]), 0)
      }
      return "dataMin" === Yb ? eb[0] : "dataMax" === Yb ? eb[1] : eb[0]
    })), rb(ob, "getComposedData", (function(bb) {
      var ab, Ub = bb.props,
        Mb = bb.item,
        Tb = bb.xAxis,
        Eb = bb.yAxis,
        Yb = bb.xAxisTicks,
        Bb = bb.yAxisTicks,
        eb = bb.bandSize,
        vb = bb.dataKey,
        Lb = bb.stackedData,
        Pb = bb.dataStartIndex,
        Xb = bb.displayedData,
        jb = bb.offset,
        Rb = Ub.layout,
        kb = Lb && Lb.length,
        yb = Ab.getBaseValue(Ub, Mb, Tb, Eb),
        Zb = "horizontal" === Rb,
        Db = !1,
        zb = Xb.map((function(bb, ab) {
          var Ub;
          kb ? Ub = Lb[Pb + ab] : (Ub = (0, fb.cb)(bb, vb), Array.isArray(Ub) ? Db = !0 : Ub = [yb, Ub]);
          var Ab = null == Ub[1] || kb && null == (0, fb.cb)(bb, vb);
          return Zb ? {
            x: (0, fb.A)({
              axis: Tb,
              ticks: Yb,
              bandSize: eb,
              entry: bb,
              index: ab
            }),
            y: Ab ? null : Eb.scale(Ub[1]),
            value: Ub,
            payload: bb
          } : {
            x: Ab ? null : Tb.scale(Ub[1]),
            y: (0, fb.A)({
              axis: Eb,
              ticks: Bb,
              bandSize: eb,
              entry: bb,
              index: ab
            }),
            value: Ub,
            payload: bb
          }
        }));
      return ab = kb || Db ? zb.map((function(bb) {
        var ab = Array.isArray(bb.value) ? bb.value[0] : null;
        return Zb ? {
          x: bb.x,
          y: null != ab && null != bb.y ? Eb.scale(ab) : null
        } : {
          x: null != ab ? Tb.scale(ab) : null,
          y: bb.y
        }
      })) : Zb ? Eb.scale(yb) : Tb.scale(yb), Fb({
        points: zb,
        baseLine: ab,
        layout: Rb,
        isRange: Db
      }, jb)
    })), rb(ob, "renderDotItem", (function(bb, ab) {
      var Ub;
      if (Mb.isValidElement(bb)) Ub = Mb.cloneElement(bb, ab);
      else if (Bb()(bb)) Ub = bb(ab);
      else {
        var Ab = (0, Tb.d)("recharts-area-dot", "boolean" !== typeof bb ? bb.className : ""),
          Eb = ab.key,
          Yb = Hb(ab, Nb);
        Ub = Mb.createElement(Zb.d, Ib({}, Yb, {
          key: Eb,
          className: Ab
        }))
      }
      return Ub
    }))
  },
  5900: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => gb
    });
    var Ab = Ub(52),
      Mb = Ub(4721),
      Tb = Ub(5735),
      Eb = Ub(5809),
      Yb = Ub.n(Eb),
      Bb = Ub(5041),
      eb = Ub.n(Bb),
      vb = Ub(5553),
      Lb = Ub(5820),
      Pb = Ub(5902),
      Xb = Ub(5907),
      jb = Ub(4813),
      Rb = Ub(5058),
      kb = Ub(5567),
      yb = Ub(5754),
      Zb = Ub(5080),
      Db = Ub(5542),
      zb = Ub(5913),
      xb = ["x", "y"];

    function ib(bb) {
      return ib = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, ib(bb)
    }

    function fb() {
      return fb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, fb.apply(this, arguments)
    }

    function mb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function pb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? mb(Object(Ub), !0).forEach((function(ab) {
          Nb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : mb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Nb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != ib(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != ib(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == ib(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Wb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function Hb(bb, ab) {
      var Ub = bb.x,
        Ab = bb.y,
        Mb = Wb(bb, xb),
        Tb = "".concat(Ub),
        Eb = parseInt(Tb, 10),
        Yb = "".concat(Ab),
        Bb = parseInt(Yb, 10),
        eb = "".concat(ab.height || Mb.height),
        vb = parseInt(eb, 10),
        Lb = "".concat(ab.width || Mb.width),
        Pb = parseInt(Lb, 10);
      return pb(pb(pb(pb(pb({}, ab), Mb), Eb ? {
        x: Eb
      } : {}), Bb ? {
        y: Bb
      } : {}), {}, {
        height: vb,
        width: Pb,
        name: ab.name,
        radius: ab.radius
      })
    }

    function Ib(bb) {
      return Ab.createElement(zb.c, fb({
        shapeType: "rectangle",
        propTransformer: Hb,
        activeClassName: "recharts-active-bar"
      }, bb))
    }
    var db, Fb = ["value", "background"];

    function hb(bb) {
      return hb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, hb(bb)
    }

    function Gb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function Qb() {
      return Qb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Qb.apply(this, arguments)
    }

    function qb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function ub(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? qb(Object(Ub), !0).forEach((function(ab) {
          wb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : qb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function rb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, sb(Ab.key), Ab)
      }
    }

    function Kb(bb, ab, Ub) {
      return ab = lb(ab),
        function(bb, ab) {
          if (ab && ("object" === hb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, ob() ? Reflect.construct(ab, Ub || [], lb(bb).constructor) : ab.apply(bb, Ub))
    }

    function ob() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (ob = function() {
        return !!bb
      })()
    }

    function lb(bb) {
      return lb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, lb(bb)
    }

    function tb(bb, ab) {
      return tb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, tb(bb, ab)
    }

    function wb(bb, ab, Ub) {
      return (ab = sb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function sb(bb) {
      var ab = function(bb, ab) {
        if ("object" != hb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != hb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == hb(ab) ? ab : ab + ""
    }
    var gb = function(bb) {
      function ab() {
        var bb;
        ! function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab);
        for (var Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        return wb(bb = Kb(this, ab, [].concat(Ab)), "state", {
          isAnimationFinished: !1
        }), wb(bb, "id", (0, jb.J)("recharts-bar-")), wb(bb, "handleAnimationEnd", (function() {
          var ab = bb.props.onAnimationEnd;
          bb.setState({
            isAnimationFinished: !0
          }), ab && ab()
        })), wb(bb, "handleAnimationStart", (function() {
          var ab = bb.props.onAnimationStart;
          bb.setState({
            isAnimationFinished: !1
          }), ab && ab()
        })), bb
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && tb(bb, ab)
      }(ab, bb), Ub = ab, Eb = [{
        key: "renderRectanglesStatically",
        value: function(bb) {
          var ab = this,
            Ub = this.props,
            Mb = Ub.shape,
            Tb = Ub.dataKey,
            Eb = Ub.activeIndex,
            Yb = Ub.activeBar,
            Bb = (0, Rb.d)(this.props, !1);
          return bb && bb.map((function(bb, Ub) {
            var eb = Ub === Eb,
              Lb = eb ? Yb : Mb,
              Pb = ub(ub(ub({}, Bb), bb), {}, {
                isActive: eb,
                option: Lb,
                index: Ub,
                dataKey: Tb,
                onAnimationStart: ab.handleAnimationStart,
                onAnimationEnd: ab.handleAnimationEnd
              });
            return Ab.createElement(vb.c, Qb({
              className: "recharts-bar-rectangle"
            }, (0, Zb.r)(ab.props, bb, Ub), {
              key: "rectangle-".concat(null === bb || void 0 === bb ? void 0 : bb.x, "-").concat(null === bb || void 0 === bb ? void 0 : bb.y, "-").concat(null === bb || void 0 === bb ? void 0 : bb.value, "-").concat(Ub)
            }), Ab.createElement(Ib, Pb))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var bb = this,
            ab = this.props,
            Ub = ab.data,
            Mb = ab.layout,
            Eb = ab.isAnimationActive,
            Yb = ab.animationBegin,
            Bb = ab.animationDuration,
            eb = ab.animationEasing,
            Lb = ab.animationId,
            Pb = this.state.prevData;
          return Ab.createElement(Tb.e, {
            bX: Yb,
            duration: Bb,
            isActive: Eb,
            easing: eb,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(Lb),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(ab) {
            var Tb = ab.t,
              Eb = Ub.map((function(bb, ab) {
                var Ub = Pb && Pb[ab];
                if (Ub) {
                  var Ab = (0, jb.u)(Ub.x, bb.x),
                    Eb = (0, jb.u)(Ub.y, bb.y),
                    Yb = (0, jb.u)(Ub.width, bb.width),
                    Bb = (0, jb.u)(Ub.height, bb.height);
                  return ub(ub({}, bb), {}, {
                    x: Ab(Tb),
                    y: Eb(Tb),
                    width: Yb(Tb),
                    height: Bb(Tb)
                  })
                }
                if ("horizontal" === Mb) {
                  var eb = (0, jb.u)(0, bb.height)(Tb);
                  return ub(ub({}, bb), {}, {
                    y: bb.y + bb.height - eb,
                    height: eb
                  })
                }
                var vb = (0, jb.u)(0, bb.width)(Tb);
                return ub(ub({}, bb), {}, {
                  width: vb
                })
              }));
            return Ab.createElement(vb.c, null, bb.renderRectanglesStatically(Eb))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var bb = this.props,
            ab = bb.data,
            Ub = bb.isAnimationActive,
            Ab = this.state.prevData;
          return !(Ub && ab && ab.length) || Ab && Yb()(Ab, ab) ? this.renderRectanglesStatically(ab) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var bb = this,
            ab = this.props,
            Ub = ab.data,
            Mb = ab.dataKey,
            Tb = ab.activeIndex,
            Eb = (0, Rb.d)(this.props.background, !1);
          return Ub.map((function(ab, Ub) {
            ab.value;
            var Yb = ab.background,
              Bb = Gb(ab, Fb);
            if (!Yb) return null;
            var eb = ub(ub(ub(ub(ub({}, Bb), {}, {
              fill: "#eee"
            }, Yb), Eb), (0, Zb.r)(bb.props, ab, Ub)), {}, {
              onAnimationStart: bb.handleAnimationStart,
              onAnimationEnd: bb.handleAnimationEnd,
              dataKey: Mb,
              index: Ub,
              className: "recharts-bar-background-rectangle"
            });
            return Ab.createElement(Ib, Qb({
              key: "background-bar-".concat(Ub),
              option: bb.props.background,
              isActive: Ub === Tb
            }, eb))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(bb, ab) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Ub = this.props,
            Mb = Ub.data,
            Tb = Ub.xAxis,
            Eb = Ub.yAxis,
            Yb = Ub.layout,
            Bb = Ub.children,
            eb = (0, Rb.e)(Bb, Lb.d);
          if (!eb) return null;
          var Pb = "vertical" === Yb ? Mb[0].height / 2 : Mb[0].width / 2,
            Xb = function(bb, ab) {
              var Ub = Array.isArray(bb.value) ? bb.value[1] : bb.value;
              return {
                x: bb.x,
                y: bb.y,
                value: Ub,
                errorVal: (0, yb.cb)(bb, ab)
              }
            },
            jb = {
              clipPath: bb ? "url(#clipPath-".concat(ab, ")") : null
            };
          return Ab.createElement(vb.c, jb, eb.map((function(bb) {
            return Ab.cloneElement(bb, {
              key: "error-bar-".concat(ab, "-").concat(bb.props.dataKey),
              data: Mb,
              xAxis: Tb,
              yAxis: Eb,
              layout: Yb,
              offset: Pb,
              dataPointFormatter: Xb
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var bb = this.props,
            ab = bb.hide,
            Ub = bb.data,
            Tb = bb.className,
            Eb = bb.xAxis,
            Yb = bb.yAxis,
            Bb = bb.left,
            Lb = bb.top,
            Pb = bb.width,
            jb = bb.height,
            Rb = bb.isAnimationActive,
            kb = bb.background,
            yb = bb.id;
          if (ab || !Ub || !Ub.length) return null;
          var Zb = this.state.isAnimationFinished,
            Db = (0, Mb.d)("recharts-bar", Tb),
            zb = Eb && Eb.allowDataOverflow,
            xb = Yb && Yb.allowDataOverflow,
            ib = zb || xb,
            fb = eb()(yb) ? this.id : yb;
          return Ab.createElement(vb.c, {
            className: Db
          }, zb || xb ? Ab.createElement("defs", null, Ab.createElement("clipPath", {
            id: "clipPath-".concat(fb)
          }, Ab.createElement("rect", {
            x: zb ? Bb : Bb - Pb / 2,
            y: xb ? Lb : Lb - jb / 2,
            width: zb ? Pb : 2 * Pb,
            height: xb ? jb : 2 * jb
          }))) : null, Ab.createElement(vb.c, {
            className: "recharts-bar-rectangles",
            clipPath: ib ? "url(#clipPath-".concat(fb, ")") : null
          }, kb ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(ib, fb), (!Rb || Zb) && Xb.e.renderCallByParent(this.props, Ub))
        }
      }], Bb = [{
        key: "getDerivedStateFromProps",
        value: function(bb, ab) {
          return bb.animationId !== ab.prevAnimationId ? {
            prevAnimationId: bb.animationId,
            curData: bb.data,
            prevData: ab.curData
          } : bb.data !== ab.curData ? {
            curData: bb.data
          } : null
        }
      }], Eb && rb(Ub.prototype, Eb), Bb && rb(Ub, Bb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Eb, Bb
    }(Ab.PureComponent);
    db = gb, wb(gb, "displayName", "Bar"), wb(gb, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !kb.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), wb(gb, "getComposedData", (function(bb) {
      var ab = bb.props,
        Ub = bb.item,
        Ab = bb.barPosition,
        Mb = bb.bandSize,
        Tb = bb.xAxis,
        Eb = bb.yAxis,
        Yb = bb.xAxisTicks,
        Bb = bb.yAxisTicks,
        eb = bb.stackedData,
        vb = bb.dataStartIndex,
        Lb = bb.displayedData,
        Xb = bb.offset,
        kb = (0, yb.m)(Ab, Ub);
      if (!kb) return null;
      var Zb = ab.layout,
        zb = Ub.type.defaultProps,
        xb = void 0 !== zb ? ub(ub({}, zb), Ub.props) : Ub.props,
        ib = xb.dataKey,
        fb = xb.children,
        mb = xb.minPointSize,
        pb = "horizontal" === Zb ? Eb : Tb,
        Nb = eb ? pb.scale.domain() : null,
        Wb = (0, yb.w)({
          numericAxis: pb
        }),
        Hb = (0, Rb.e)(fb, Pb.e),
        Ib = Lb.map((function(bb, ab) {
          var Ab, Lb, Pb, Xb, Rb, zb;
          eb ? Ab = (0, yb.sb)(eb[vb + ab], Nb) : (Ab = (0, yb.cb)(bb, ib), Array.isArray(Ab) || (Ab = [Wb, Ab]));
          var xb = function(bb) {
            var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(Ub, Ab) {
              if ("number" === typeof bb) return bb;
              var Mb = (0, jb.E)(Ub) || (0, jb.y)(Ub);
              return Mb ? bb(Ub, Ab) : (Mb || (0, Db.b)(!1), ab)
            }
          }(mb, db.defaultProps.minPointSize)(Ab[1], ab);
          if ("horizontal" === Zb) {
            var fb, pb = [Eb.scale(Ab[0]), Eb.scale(Ab[1])],
              Ib = pb[0],
              Fb = pb[1];
            Lb = (0, yb.x)({
              axis: Tb,
              ticks: Yb,
              bandSize: Mb,
              offset: kb.offset,
              entry: bb,
              index: ab
            }), Pb = null !== (fb = null !== Fb && void 0 !== Fb ? Fb : Ib) && void 0 !== fb ? fb : void 0, Xb = kb.size;
            var hb = Ib - Fb;
            if (Rb = Number.isNaN(hb) ? 0 : hb, zb = {
                x: Lb,
                y: Eb.y,
                width: Xb,
                height: Eb.height
              }, Math.abs(xb) > 0 && Math.abs(Rb) < Math.abs(xb)) {
              var Gb = (0, jb.I)(Rb || xb) * (Math.abs(xb) - Math.abs(Rb));
              Pb -= Gb, Rb += Gb
            }
          } else {
            var Qb = [Tb.scale(Ab[0]), Tb.scale(Ab[1])],
              qb = Qb[0],
              rb = Qb[1];
            if (Lb = qb, Pb = (0, yb.x)({
                axis: Eb,
                ticks: Bb,
                bandSize: Mb,
                offset: kb.offset,
                entry: bb,
                index: ab
              }), Xb = rb - qb, Rb = kb.size, zb = {
                x: Tb.x,
                y: Pb,
                width: Tb.width,
                height: Rb
              }, Math.abs(xb) > 0 && Math.abs(Xb) < Math.abs(xb)) Xb += (0, jb.I)(Xb || xb) * (Math.abs(xb) - Math.abs(Xb))
          }
          return ub(ub(ub({}, bb), {}, {
            x: Lb,
            y: Pb,
            width: Xb,
            height: Rb,
            value: eb ? Ab : Ab[1],
            payload: bb,
            background: zb
          }, Hb && Hb[ab] && Hb[ab].props), {}, {
            tooltipPayload: [(0, yb._)(Ub, bb)],
            tooltipPosition: {
              x: Lb + Xb / 2,
              y: Pb + Rb / 2
            }
          })
        }));
      return ub({
        data: Ib,
        layout: Zb
      }, Xb)
    }))
  },
  5993: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => hb
    });
    var Ab = Ub(52),
      Mb = Ub(4904),
      Tb = Ub.n(Mb),
      Eb = Ub(4838),
      Yb = Ub.n(Eb),
      Bb = Ub(4721),
      eb = Ub(5073),
      vb = Ub(5553),
      Lb = Ub(5741),
      Pb = Ub(5842),
      Xb = Ub(4813),
      jb = Ub(5080),
      Rb = Ub(5058),
      kb = Ub(6e3),
      yb = ["viewBox"],
      Zb = ["viewBox"],
      Db = ["ticks"];

    function zb(bb) {
      return zb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, zb(bb)
    }

    function xb() {
      return xb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, xb.apply(this, arguments)
    }

    function ib(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function fb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? ib(Object(Ub), !0).forEach((function(ab) {
          db(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : ib(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function mb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function pb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Fb(Ab.key), Ab)
      }
    }

    function Nb(bb, ab, Ub) {
      return ab = Hb(ab),
        function(bb, ab) {
          if (ab && ("object" === zb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Wb() ? Reflect.construct(ab, Ub || [], Hb(bb).constructor) : ab.apply(bb, Ub))
    }

    function Wb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Wb = function() {
        return !!bb
      })()
    }

    function Hb(bb) {
      return Hb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Hb(bb)
    }

    function Ib(bb, ab) {
      return Ib = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Ib(bb, ab)
    }

    function db(bb, ab, Ub) {
      return (ab = Fb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Fb(bb) {
      var ab = function(bb, ab) {
        if ("object" != zb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != zb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == zb(ab) ? ab : ab + ""
    }
    var hb = function(bb) {
      function ab(bb) {
        var Ub;
        return function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab), (Ub = Nb(this, ab, [bb])).state = {
          fontSize: "",
          letterSpacing: ""
        }, Ub
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && Ib(bb, ab)
      }(ab, bb), Ub = ab, Eb = [{
        key: "renderTickItem",
        value: function(bb, ab, Ub) {
          var Mb = (0, Bb.d)(ab.className, "recharts-cartesian-axis-tick-value");
          return Ab.isValidElement(bb) ? Ab.cloneElement(bb, fb(fb({}, ab), {}, {
            className: Mb
          })) : Tb()(bb) ? bb(fb(fb({}, ab), {}, {
            className: Mb
          })) : Ab.createElement(Lb.e, xb({}, ab, {
            className: "recharts-cartesian-axis-tick-value"
          }), Ub)
        }
      }], (Mb = [{
        key: "shouldComponentUpdate",
        value: function(bb, ab) {
          var Ub = bb.viewBox,
            Ab = mb(bb, yb),
            Mb = this.props,
            Tb = Mb.viewBox,
            Eb = mb(Mb, Zb);
          return !(0, eb.b)(Ub, Tb) || !(0, eb.b)(Ab, Eb) || !(0, eb.b)(ab, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var bb = this.layerReference;
          if (bb) {
            var ab = bb.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            ab && this.setState({
              fontSize: window.getComputedStyle(ab).fontSize,
              letterSpacing: window.getComputedStyle(ab).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(bb) {
          var ab, Ub, Ab, Mb, Tb, Eb, Yb = this.props,
            Bb = Yb.x,
            eb = Yb.y,
            vb = Yb.width,
            Lb = Yb.height,
            Pb = Yb.orientation,
            jb = Yb.tickSize,
            Rb = Yb.mirror,
            kb = Yb.tickMargin,
            yb = Rb ? -1 : 1,
            Zb = bb.tickSize || jb,
            Db = (0, Xb.E)(bb.tickCoord) ? bb.tickCoord : bb.coordinate;
          switch (Pb) {
            case "top":
              ab = Ub = bb.coordinate, Eb = (Ab = (Mb = eb + +!Rb * Lb) - yb * Zb) - yb * kb, Tb = Db;
              break;
            case "left":
              Ab = Mb = bb.coordinate, Tb = (ab = (Ub = Bb + +!Rb * vb) - yb * Zb) - yb * kb, Eb = Db;
              break;
            case "right":
              Ab = Mb = bb.coordinate, Tb = (ab = (Ub = Bb + +Rb * vb) + yb * Zb) + yb * kb, Eb = Db;
              break;
            default:
              ab = Ub = bb.coordinate, Eb = (Ab = (Mb = eb + +Rb * Lb) + yb * Zb) + yb * kb, Tb = Db
          }
          return {
            line: {
              x1: ab,
              y1: Ab,
              x2: Ub,
              y2: Mb
            },
            qL: {
              x: Tb,
              y: Eb
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var bb, ab = this.props,
            Ub = ab.orientation,
            Ab = ab.mirror;
          switch (Ub) {
            case "left":
              bb = Ab ? "start" : "end";
              break;
            case "right":
              bb = Ab ? "end" : "start";
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
            ab = bb.orientation,
            Ub = bb.mirror,
            Ab = "end";
          switch (ab) {
            case "left":
            case "right":
              Ab = "middle";
              break;
            case "top":
              Ab = Ub ? "start" : "end";
              break;
            default:
              Ab = Ub ? "end" : "start"
          }
          return Ab
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var bb = this.props,
            ab = bb.x,
            Ub = bb.y,
            Mb = bb.width,
            Tb = bb.height,
            Eb = bb.orientation,
            eb = bb.mirror,
            vb = bb.axisLine,
            Lb = fb(fb(fb({}, (0, Rb.d)(this.props, !1)), (0, Rb.d)(vb, !1)), {}, {
              fill: "none"
            });
          if ("top" === Eb || "bottom" === Eb) {
            var Pb = +("top" === Eb && !eb || "bottom" === Eb && eb);
            Lb = fb(fb({}, Lb), {}, {
              x1: ab,
              y1: Ub + Pb * Tb,
              x2: ab + Mb,
              y2: Ub + Pb * Tb
            })
          } else {
            var Xb = +("left" === Eb && !eb || "right" === Eb && eb);
            Lb = fb(fb({}, Lb), {}, {
              x1: ab + Xb * Mb,
              y1: Ub,
              x2: ab + Xb * Mb,
              y2: Ub + Tb
            })
          }
          return Ab.createElement("line", xb({}, Lb, {
            className: (0, Bb.d)("recharts-cartesian-axis-line", Yb()(vb, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(bb, Ub, Mb) {
          var Eb = this,
            eb = this.props,
            Lb = eb.tickLine,
            Pb = eb.stroke,
            Xb = eb.qL,
            yb = eb.tickFormatter,
            Zb = eb.unit,
            Db = (0, kb.d)(fb(fb({}, this.props), {}, {
              ticks: bb
            }), Ub, Mb),
            zb = this.getTickTextAnchor(),
            ib = this.getTickVerticalAnchor(),
            mb = (0, Rb.d)(this.props, !1),
            pb = (0, Rb.d)(Xb, !1),
            Nb = fb(fb({}, mb), {}, {
              fill: "none"
            }, (0, Rb.d)(Lb, !1)),
            Wb = Db.map((function(bb, Ub) {
              var Mb = Eb.getTickLineCoord(bb),
                eb = Mb.line,
                Rb = Mb.qL,
                kb = fb(fb(fb(fb({
                  textAnchor: zb,
                  verticalAnchor: ib
                }, mb), {}, {
                  stroke: "none",
                  fill: Pb
                }, pb), Rb), {}, {
                  index: Ub,
                  payload: bb,
                  visibleTicksCount: Db.length,
                  tickFormatter: yb
                });
              return Ab.createElement(vb.c, xb({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(bb.value, "-").concat(bb.coordinate, "-").concat(bb.tickCoord)
              }, (0, jb.r)(Eb.props, bb, Ub)), Lb && Ab.createElement("line", xb({}, Nb, eb, {
                className: (0, Bb.d)("recharts-cartesian-axis-tick-line", Yb()(Lb, "className"))
              })), Xb && ab.renderTickItem(Xb, kb, "".concat(Tb()(yb) ? yb(bb.value, Ub) : bb.value).concat(Zb || "")))
            }));
          return Ab.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, Wb)
        }
      }, {
        key: "render",
        value: function() {
          var bb = this,
            ab = this.props,
            Ub = ab.axisLine,
            Mb = ab.width,
            Eb = ab.height,
            Yb = ab.ticksGenerator,
            eb = ab.className;
          if (ab.hide) return null;
          var Lb = this.props,
            Xb = Lb.ticks,
            jb = mb(Lb, Db),
            Rb = Xb;
          return Tb()(Yb) && (Rb = Xb && Xb.length > 0 ? Yb(this.props) : Yb(jb)), Mb <= 0 || Eb <= 0 || !Rb || !Rb.length ? null : Ab.createElement(vb.c, {
            className: (0, Bb.d)("recharts-cartesian-axis", eb),
            ref: function(ab) {
              bb.layerReference = ab
            }
          }, Ub && this.renderAxisLine(), this.renderTicks(Rb, this.state.fontSize, this.state.letterSpacing), Pb.e.renderCallByParent(this.props))
        }
      }]) && pb(Ub.prototype, Mb), Eb && pb(Ub, Eb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Mb, Eb
    }(Ab.Component);
    db(hb, "displayName", "CartesianAxis"), db(hb, "defaultProps", {
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
      qL: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6013: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => db
    });
    var Ab = Ub(52),
      Mb = Ub(4904),
      Tb = Ub.n(Mb),
      Eb = Ub(5050),
      Yb = Ub(4813),
      Bb = Ub(5058),
      eb = Ub(5754),
      vb = Ub(6e3),
      Lb = Ub(5993),
      Pb = Ub(5948),
      Xb = ["x1", "y1", "x2", "y2", "key"],
      jb = ["offset"];

    function Rb(bb) {
      return Rb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Rb(bb)
    }

    function kb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function yb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? kb(Object(Ub), !0).forEach((function(ab) {
          Zb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : kb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Zb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Rb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Rb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Rb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Db() {
      return Db = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Db.apply(this, arguments)
    }

    function zb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }
    var xb = function(bb) {
      var ab = bb.fill;
      if (!ab || "none" === ab) return null;
      var Ub = bb.fillOpacity,
        Mb = bb.x,
        Tb = bb.y,
        Eb = bb.width,
        Yb = bb.height,
        Bb = bb.ry;
      return Ab.createElement("rect", {
        x: Mb,
        y: Tb,
        ry: Bb,
        width: Eb,
        height: Yb,
        stroke: "none",
        fill: ab,
        fillOpacity: Ub,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function ib(bb, ab) {
      var Ub;
      if (Ab.isValidElement(bb)) Ub = Ab.cloneElement(bb, ab);
      else if (Tb()(bb)) Ub = bb(ab);
      else {
        var Mb = ab.x1,
          Eb = ab.y1,
          Yb = ab.x2,
          eb = ab.y2,
          vb = ab.key,
          Lb = zb(ab, Xb),
          Pb = (0, Bb.d)(Lb, !1),
          Rb = (Pb.offset, zb(Pb, jb));
        Ub = Ab.createElement("line", Db({}, Rb, {
          x1: Mb,
          y1: Eb,
          x2: Yb,
          y2: eb,
          fill: "none",
          key: vb
        }))
      }
      return Ub
    }

    function fb(bb) {
      var ab = bb.x,
        Ub = bb.width,
        Mb = bb.horizontal,
        Tb = void 0 === Mb || Mb,
        Eb = bb.horizontalPoints;
      if (!Tb || !Eb || !Eb.length) return null;
      var Yb = Eb.map((function(Ab, Mb) {
        var Eb = yb(yb({}, bb), {}, {
          x1: ab,
          y1: Ab,
          x2: ab + Ub,
          y2: Ab,
          key: "line-".concat(Mb),
          index: Mb
        });
        return ib(Tb, Eb)
      }));
      return Ab.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, Yb)
    }

    function mb(bb) {
      var ab = bb.y,
        Ub = bb.height,
        Mb = bb.vertical,
        Tb = void 0 === Mb || Mb,
        Eb = bb.verticalPoints;
      if (!Tb || !Eb || !Eb.length) return null;
      var Yb = Eb.map((function(Ab, Mb) {
        var Eb = yb(yb({}, bb), {}, {
          x1: Ab,
          y1: ab,
          x2: Ab,
          y2: ab + Ub,
          key: "line-".concat(Mb),
          index: Mb
        });
        return ib(Tb, Eb)
      }));
      return Ab.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, Yb)
    }

    function pb(bb) {
      var ab = bb.horizontalFill,
        Ub = bb.fillOpacity,
        Mb = bb.x,
        Tb = bb.y,
        Eb = bb.width,
        Yb = bb.height,
        Bb = bb.horizontalPoints,
        eb = bb.horizontal;
      if (!(void 0 === eb || eb) || !ab || !ab.length) return null;
      var vb = Bb.map((function(bb) {
        return Math.round(bb + Tb - Tb)
      })).sort((function(bb, ab) {
        return bb - ab
      }));
      Tb !== vb[0] && vb.unshift(0);
      var Lb = vb.map((function(bb, Bb) {
        var eb = !vb[Bb + 1] ? Tb + Yb - bb : vb[Bb + 1] - bb;
        if (eb <= 0) return null;
        var Lb = Bb % ab.length;
        return Ab.createElement("rect", {
          key: "react-".concat(Bb),
          y: bb,
          x: Mb,
          height: eb,
          width: Eb,
          stroke: "none",
          fill: ab[Lb],
          fillOpacity: Ub,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Ab.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, Lb)
    }

    function Nb(bb) {
      var ab = bb.vertical,
        Ub = void 0 === ab || ab,
        Mb = bb.verticalFill,
        Tb = bb.fillOpacity,
        Eb = bb.x,
        Yb = bb.y,
        Bb = bb.width,
        eb = bb.height,
        vb = bb.verticalPoints;
      if (!Ub || !Mb || !Mb.length) return null;
      var Lb = vb.map((function(bb) {
        return Math.round(bb + Eb - Eb)
      })).sort((function(bb, ab) {
        return bb - ab
      }));
      Eb !== Lb[0] && Lb.unshift(0);
      var Pb = Lb.map((function(bb, ab) {
        var Ub = !Lb[ab + 1] ? Eb + Bb - bb : Lb[ab + 1] - bb;
        if (Ub <= 0) return null;
        var vb = ab % Mb.length;
        return Ab.createElement("rect", {
          key: "react-".concat(ab),
          x: bb,
          y: Yb,
          width: Ub,
          height: eb,
          stroke: "none",
          fill: Mb[vb],
          fillOpacity: Tb,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Ab.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, Pb)
    }
    var Wb = function(bb, ab) {
        var Ub = bb.xAxis,
          Ab = bb.width,
          Mb = bb.height,
          Tb = bb.offset;
        return (0, eb.D)((0, vb.d)(yb(yb(yb({}, Lb.b.defaultProps), Ub), {}, {
          ticks: (0, eb.V)(Ub, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Ab,
            height: Mb
          }
        })), Tb.left, Tb.left + Tb.width, ab)
      },
      Hb = function(bb, ab) {
        var Ub = bb.yAxis,
          Ab = bb.width,
          Mb = bb.height,
          Tb = bb.offset;
        return (0, eb.D)((0, vb.d)(yb(yb(yb({}, Lb.b.defaultProps), Ub), {}, {
          ticks: (0, eb.V)(Ub, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Ab,
            height: Mb
          }
        })), Tb.top, Tb.top + Tb.height, ab)
      },
      Ib = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function db(bb) {
      var ab, Ub, Mb, Bb, eb, vb, Lb = (0, Pb.n)(),
        Xb = (0, Pb.k)(),
        jb = (0, Pb.t)(),
        kb = yb(yb({}, bb), {}, {
          stroke: null !== (ab = bb.stroke) && void 0 !== ab ? ab : Ib.stroke,
          fill: null !== (Ub = bb.fill) && void 0 !== Ub ? Ub : Ib.fill,
          horizontal: null !== (Mb = bb.horizontal) && void 0 !== Mb ? Mb : Ib.horizontal,
          horizontalFill: null !== (Bb = bb.horizontalFill) && void 0 !== Bb ? Bb : Ib.horizontalFill,
          vertical: null !== (eb = bb.vertical) && void 0 !== eb ? eb : Ib.vertical,
          verticalFill: null !== (vb = bb.verticalFill) && void 0 !== vb ? vb : Ib.verticalFill,
          x: (0, Yb.E)(bb.x) ? bb.x : jb.left,
          y: (0, Yb.E)(bb.y) ? bb.y : jb.top,
          width: (0, Yb.E)(bb.width) ? bb.width : jb.width,
          height: (0, Yb.E)(bb.height) ? bb.height : jb.height
        }),
        Zb = kb.x,
        zb = kb.y,
        ib = kb.width,
        db = kb.height,
        Fb = kb.syncWithTicks,
        hb = kb.horizontalValues,
        Gb = kb.verticalValues,
        Qb = (0, Pb.h)(),
        qb = (0, Pb.D)();
      if (!(0, Yb.E)(ib) || ib <= 0 || !(0, Yb.E)(db) || db <= 0 || !(0, Yb.E)(Zb) || Zb !== +Zb || !(0, Yb.E)(zb) || zb !== +zb) return null;
      var ub = kb.verticalCoordinatesGenerator || Wb,
        rb = kb.horizontalCoordinatesGenerator || Hb,
        Kb = kb.horizontalPoints,
        ob = kb.verticalPoints;
      if ((!Kb || !Kb.length) && Tb()(rb)) {
        var lb = hb && hb.length,
          tb = rb({
            yAxis: qb ? yb(yb({}, qb), {}, {
              ticks: lb ? hb : qb.ticks
            }) : void 0,
            width: Lb,
            height: Xb,
            offset: jb
          }, !!lb || Fb);
        (0, Eb.b)(Array.isArray(tb), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Rb(tb), "]")), Array.isArray(tb) && (Kb = tb)
      }
      if ((!ob || !ob.length) && Tb()(ub)) {
        var wb = Gb && Gb.length,
          sb = ub({
            xAxis: Qb ? yb(yb({}, Qb), {}, {
              ticks: wb ? Gb : Qb.ticks
            }) : void 0,
            width: Lb,
            height: Xb,
            offset: jb
          }, !!wb || Fb);
        (0, Eb.b)(Array.isArray(sb), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Rb(sb), "]")), Array.isArray(sb) && (ob = sb)
      }
      return Ab.createElement("g", {
        className: "recharts-cartesian-grid"
      }, Ab.createElement(xb, {
        fill: kb.fill,
        fillOpacity: kb.fillOpacity,
        x: kb.x,
        y: kb.y,
        width: kb.width,
        height: kb.height,
        ry: kb.ry
      }), Ab.createElement(fb, Db({}, kb, {
        offset: jb,
        horizontalPoints: Kb,
        xAxis: Qb,
        yAxis: qb
      })), Ab.createElement(mb, Db({}, kb, {
        offset: jb,
        verticalPoints: ob,
        xAxis: Qb,
        yAxis: qb
      })), Ab.createElement(pb, Db({}, kb, {
        horizontalPoints: Kb
      })), Ab.createElement(Nb, Db({}, kb, {
        verticalPoints: ob
      })))
    }
    db.displayName = "CartesianGrid"
  },
  5820: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => zb
    });
    var Ab = Ub(52),
      Mb = Ub(5542),
      Tb = Ub(5553),
      Eb = Ub(5058),
      Yb = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function Bb(bb) {
      return Bb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Bb(bb)
    }

    function eb() {
      return eb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, eb.apply(this, arguments)
    }

    function vb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Lb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Lb(bb, ab)
      }(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Lb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function Pb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function Xb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Db(Ab.key), Ab)
      }
    }

    function jb(bb, ab, Ub) {
      return ab = kb(ab),
        function(bb, ab) {
          if (ab && ("object" === Bb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Rb() ? Reflect.construct(ab, Ub || [], kb(bb).constructor) : ab.apply(bb, Ub))
    }

    function Rb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Rb = function() {
        return !!bb
      })()
    }

    function kb(bb) {
      return kb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, kb(bb)
    }

    function yb(bb, ab) {
      return yb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, yb(bb, ab)
    }

    function Zb(bb, ab, Ub) {
      return (ab = Db(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Db(bb) {
      var ab = function(bb, ab) {
        if ("object" != Bb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Bb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Bb(ab) ? ab : ab + ""
    }
    var zb = function(bb) {
      function ab() {
        return function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab), jb(this, ab, arguments)
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && yb(bb, ab)
      }(ab, bb), Ub = ab, (Bb = [{
        key: "render",
        value: function() {
          var bb = this.props,
            ab = bb.offset,
            Ub = bb.layout,
            Bb = bb.width,
            Lb = bb.dataKey,
            Xb = bb.data,
            jb = bb.dataPointFormatter,
            Rb = bb.xAxis,
            kb = bb.yAxis,
            yb = Pb(bb, Yb),
            Zb = (0, Eb.d)(yb, !1);
          "x" === this.props.direction && "number" !== Rb.type && (0, Mb.b)(!1);
          var Db = Xb.map((function(bb) {
            var Mb = jb(bb, Lb),
              Eb = Mb.x,
              Yb = Mb.y,
              Pb = Mb.value,
              Xb = Mb.errorVal;
            if (!Xb) return null;
            var yb, Db, zb = [];
            if (Array.isArray(Xb)) {
              var xb = vb(Xb, 2);
              yb = xb[0], Db = xb[1]
            } else yb = Db = Xb;
            if ("vertical" === Ub) {
              var ib = Rb.scale,
                fb = Yb + ab,
                mb = fb + Bb,
                pb = fb - Bb,
                Nb = ib(Pb - yb),
                Wb = ib(Pb + Db);
              zb.push({
                x1: Wb,
                y1: mb,
                x2: Wb,
                y2: pb
              }), zb.push({
                x1: Nb,
                y1: fb,
                x2: Wb,
                y2: fb
              }), zb.push({
                x1: Nb,
                y1: mb,
                x2: Nb,
                y2: pb
              })
            } else if ("horizontal" === Ub) {
              var Hb = kb.scale,
                Ib = Eb + ab,
                db = Ib - Bb,
                Fb = Ib + Bb,
                hb = Hb(Pb - yb),
                Gb = Hb(Pb + Db);
              zb.push({
                x1: db,
                y1: Gb,
                x2: Fb,
                y2: Gb
              }), zb.push({
                x1: Ib,
                y1: hb,
                x2: Ib,
                y2: Gb
              }), zb.push({
                x1: db,
                y1: hb,
                x2: Fb,
                y2: hb
              })
            }
            return Ab.createElement(Tb.c, eb({
              className: "recharts-errorBar",
              key: "bar-".concat(zb.map((function(bb) {
                return "".concat(bb.x1, "-").concat(bb.x2, "-").concat(bb.y1, "-").concat(bb.y2)
              })))
            }, Zb), zb.map((function(bb) {
              return Ab.createElement("line", eb({}, bb, {
                key: "line-".concat(bb.x1, "-").concat(bb.x2, "-").concat(bb.y1, "-").concat(bb.y2)
              }))
            })))
          }));
          return Ab.createElement(Tb.c, {
            className: "recharts-errorBars"
          }, Db)
        }
      }]) && Xb(Ub.prototype, Bb), Lb && Xb(Ub, Lb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Bb, Lb
    }(Ab.Component);
    Zb(zb, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), Zb(zb, "displayName", "ErrorBar")
  },
  5981: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => rb
    });
    var Ab = Ub(52),
      Mb = Ub(5735),
      Tb = Ub(4904),
      Eb = Ub.n(Tb),
      Yb = Ub(5041),
      Bb = Ub.n(Yb),
      eb = Ub(5809),
      vb = Ub.n(eb),
      Lb = Ub(4721),
      Pb = Ub(5975),
      Xb = Ub(5723),
      jb = Ub(5553),
      Rb = Ub(5907),
      kb = Ub(5820),
      yb = Ub(4813),
      Zb = Ub(5058),
      Db = Ub(5567),
      zb = Ub(5754),
      xb = ["type", "layout", "connectNulls", "ref"],
      ib = ["key"];

    function fb(bb) {
      return fb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, fb(bb)
    }

    function mb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function pb() {
      return pb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, pb.apply(this, arguments)
    }

    function Nb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Wb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Nb(Object(Ub), !0).forEach((function(ab) {
          qb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Nb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Hb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Ib(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Ib(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Ib(bb, ab)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ib(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function db(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, ub(Ab.key), Ab)
      }
    }

    function Fb(bb, ab, Ub) {
      return ab = Gb(ab),
        function(bb, ab) {
          if (ab && ("object" === fb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, hb() ? Reflect.construct(ab, Ub || [], Gb(bb).constructor) : ab.apply(bb, Ub))
    }

    function hb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (hb = function() {
        return !!bb
      })()
    }

    function Gb(bb) {
      return Gb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Gb(bb)
    }

    function Qb(bb, ab) {
      return Qb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Qb(bb, ab)
    }

    function qb(bb, ab, Ub) {
      return (ab = ub(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function ub(bb) {
      var ab = function(bb, ab) {
        if ("object" != fb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != fb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == fb(ab) ? ab : ab + ""
    }
    var rb = function(bb) {
      function ab() {
        var bb;
        ! function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab);
        for (var Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        return qb(bb = Fb(this, ab, [].concat(Ab)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), qb(bb, "generateSimpleStrokeDasharray", (function(bb, ab) {
          return "".concat(ab, "px ").concat(bb - ab, "px")
        })), qb(bb, "getStrokeDasharray", (function(Ub, Ab, Mb) {
          var Tb = Mb.reduce((function(bb, ab) {
            return bb + ab
          }));
          if (!Tb) return bb.generateSimpleStrokeDasharray(Ab, Ub);
          for (var Eb = Math.floor(Ub / Tb), Yb = Ub % Tb, Bb = Ab - Ub, eb = [], vb = 0, Lb = 0; vb < Mb.length; Lb += Mb[vb], ++vb)
            if (Lb + Mb[vb] > Yb) {
              eb = [].concat(Hb(Mb.slice(0, vb)), [Yb - Lb]);
              break
            } var Pb = eb.length % 2 === 0 ? [0, Bb] : [Bb];
          return [].concat(Hb(ab.repeat(Mb, Eb)), Hb(eb), Pb).map((function(bb) {
            return "".concat(bb, "px")
          })).join(", ")
        })), qb(bb, "id", (0, yb.J)("recharts-line-")), qb(bb, "pathRef", (function(ab) {
          bb.mainCurve = ab
        })), qb(bb, "handleAnimationEnd", (function() {
          bb.setState({
            isAnimationFinished: !0
          }), bb.props.onAnimationEnd && bb.props.onAnimationEnd()
        })), qb(bb, "handleAnimationStart", (function() {
          bb.setState({
            isAnimationFinished: !1
          }), bb.props.onAnimationStart && bb.props.onAnimationStart()
        })), bb
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && Qb(bb, ab)
      }(ab, bb), Ub = ab, Tb = [{
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
          } catch (ab) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(bb, ab) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Ub = this.props,
            Mb = Ub.points,
            Tb = Ub.xAxis,
            Eb = Ub.yAxis,
            Yb = Ub.layout,
            Bb = Ub.children,
            eb = (0, Zb.e)(Bb, kb.d);
          if (!eb) return null;
          var vb = function(bb, ab) {
              return {
                x: bb.x,
                y: bb.y,
                value: bb.value,
                errorVal: (0, zb.cb)(bb.payload, ab)
              }
            },
            Lb = {
              clipPath: bb ? "url(#clipPath-".concat(ab, ")") : null
            };
          return Ab.createElement(jb.c, Lb, eb.map((function(bb) {
            return Ab.cloneElement(bb, {
              key: "bar-".concat(bb.props.dataKey),
              data: Mb,
              xAxis: Tb,
              yAxis: Eb,
              layout: Yb,
              dataPointFormatter: vb
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(bb, Ub, Mb) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Tb = this.props,
            Eb = Tb.dot,
            Yb = Tb.points,
            Bb = Tb.dataKey,
            eb = (0, Zb.d)(this.props, !1),
            vb = (0, Zb.d)(Eb, !0),
            Lb = Yb.map((function(bb, Ub) {
              var Ab = Wb(Wb(Wb({
                key: "dot-".concat(Ub),
                r: 3
              }, eb), vb), {}, {
                index: Ub,
                cx: bb.x,
                cy: bb.y,
                value: bb.value,
                dataKey: Bb,
                payload: bb.payload,
                points: Yb
              });
              return ab.renderDotItem(Eb, Ab)
            })),
            Pb = {
              clipPath: bb ? "url(#clipPath-".concat(Ub ? "" : "dots-").concat(Mb, ")") : null
            };
          return Ab.createElement(jb.c, pb({
            className: "recharts-line-dots",
            key: "dots"
          }, Pb), Lb)
        }
      }, {
        key: "renderCurveStatically",
        value: function(bb, ab, Ub, Mb) {
          var Tb = this.props,
            Eb = Tb.type,
            Yb = Tb.layout,
            Bb = Tb.connectNulls,
            eb = (Tb.ref, mb(Tb, xb)),
            vb = Wb(Wb(Wb({}, (0, Zb.d)(eb, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: ab ? "url(#clipPath-".concat(Ub, ")") : null,
              points: bb
            }, Mb), {}, {
              type: Eb,
              layout: Yb,
              connectNulls: Bb
            });
          return Ab.createElement(Pb.c, pb({}, vb, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(bb, ab) {
          var Ub = this,
            Tb = this.props,
            Eb = Tb.points,
            Yb = Tb.strokeDasharray,
            Bb = Tb.isAnimationActive,
            eb = Tb.animationBegin,
            vb = Tb.animationDuration,
            Lb = Tb.animationEasing,
            Pb = Tb.animationId,
            Xb = Tb.animateNewValues,
            jb = Tb.width,
            Rb = Tb.height,
            kb = this.state,
            Zb = kb.prevPoints,
            Db = kb.totalLength;
          return Ab.createElement(Mb.e, {
            bX: eb,
            duration: vb,
            isActive: Bb,
            easing: Lb,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(Pb),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Ab) {
            var Mb = Ab.t;
            if (Zb) {
              var Tb = Zb.length / Eb.length,
                Bb = Eb.map((function(bb, ab) {
                  var Ub = Math.floor(ab * Tb);
                  if (Zb[Ub]) {
                    var Ab = Zb[Ub],
                      Eb = (0, yb.u)(Ab.x, bb.x),
                      Yb = (0, yb.u)(Ab.y, bb.y);
                    return Wb(Wb({}, bb), {}, {
                      x: Eb(Mb),
                      y: Yb(Mb)
                    })
                  }
                  if (Xb) {
                    var Bb = (0, yb.u)(2 * jb, bb.x),
                      eb = (0, yb.u)(Rb / 2, bb.y);
                    return Wb(Wb({}, bb), {}, {
                      x: Bb(Mb),
                      y: eb(Mb)
                    })
                  }
                  return Wb(Wb({}, bb), {}, {
                    x: bb.x,
                    y: bb.y
                  })
                }));
              return Ub.renderCurveStatically(Bb, bb, ab)
            }
            var eb, vb = (0, yb.u)(0, Db)(Mb);
            if (Yb) {
              var Lb = "".concat(Yb).split(/[,\s]+/gim).map((function(bb) {
                return parseFloat(bb)
              }));
              eb = Ub.getStrokeDasharray(vb, Db, Lb)
            } else eb = Ub.generateSimpleStrokeDasharray(Db, vb);
            return Ub.renderCurveStatically(Eb, bb, ab, {
              strokeDasharray: eb
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(bb, ab) {
          var Ub = this.props,
            Ab = Ub.points,
            Mb = Ub.isAnimationActive,
            Tb = this.state,
            Eb = Tb.prevPoints,
            Yb = Tb.totalLength;
          return Mb && Ab && Ab.length && (!Eb && Yb > 0 || !vb()(Eb, Ab)) ? this.renderCurveWithAnimation(bb, ab) : this.renderCurveStatically(Ab, bb, ab)
        }
      }, {
        key: "render",
        value: function() {
          var bb, ab = this.props,
            Ub = ab.hide,
            Mb = ab.dot,
            Tb = ab.points,
            Eb = ab.className,
            Yb = ab.xAxis,
            eb = ab.yAxis,
            vb = ab.top,
            Pb = ab.left,
            Xb = ab.width,
            kb = ab.height,
            yb = ab.isAnimationActive,
            Db = ab.id;
          if (Ub || !Tb || !Tb.length) return null;
          var zb = this.state.isAnimationFinished,
            xb = 1 === Tb.length,
            ib = (0, Lb.d)("recharts-line", Eb),
            fb = Yb && Yb.allowDataOverflow,
            mb = eb && eb.allowDataOverflow,
            pb = fb || mb,
            Nb = Bb()(Db) ? this.id : Db,
            Wb = null !== (bb = (0, Zb.d)(Mb, !1)) && void 0 !== bb ? bb : {
              r: 3,
              strokeWidth: 2
            },
            Hb = Wb.r,
            Ib = void 0 === Hb ? 3 : Hb,
            db = Wb.strokeWidth,
            Fb = void 0 === db ? 2 : db,
            hb = ((0, Zb.l)(Mb) ? Mb : {}).clipDot,
            Gb = void 0 === hb || hb,
            Qb = 2 * Ib + Fb;
          return Ab.createElement(jb.c, {
            className: ib
          }, fb || mb ? Ab.createElement("defs", null, Ab.createElement("clipPath", {
            id: "clipPath-".concat(Nb)
          }, Ab.createElement("rect", {
            x: fb ? Pb : Pb - Xb / 2,
            y: mb ? vb : vb - kb / 2,
            width: fb ? Xb : 2 * Xb,
            height: mb ? kb : 2 * kb
          })), !Gb && Ab.createElement("clipPath", {
            id: "clipPath-dots-".concat(Nb)
          }, Ab.createElement("rect", {
            x: Pb - Qb / 2,
            y: vb - Qb / 2,
            width: Xb + Qb,
            height: kb + Qb
          }))) : null, !xb && this.renderCurve(pb, Nb), this.renderErrorBar(pb, Nb), (xb || Mb) && this.renderDots(pb, Gb, Nb), (!yb || zb) && Rb.e.renderCallByParent(this.props, Tb))
        }
      }], Yb = [{
        key: "getDerivedStateFromProps",
        value: function(bb, ab) {
          return bb.animationId !== ab.prevAnimationId ? {
            prevAnimationId: bb.animationId,
            curPoints: bb.points,
            prevPoints: ab.curPoints
          } : bb.points !== ab.curPoints ? {
            curPoints: bb.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(bb, ab) {
          for (var Ub = bb.length % 2 !== 0 ? [].concat(Hb(bb), [0]) : bb, Ab = [], Mb = 0; Mb < ab; ++Mb) Ab = [].concat(Hb(Ab), Hb(Ub));
          return Ab
        }
      }, {
        key: "renderDotItem",
        value: function(bb, ab) {
          var Ub;
          if (Ab.isValidElement(bb)) Ub = Ab.cloneElement(bb, ab);
          else if (Eb()(bb)) Ub = bb(ab);
          else {
            var Mb = ab.key,
              Tb = mb(ab, ib),
              Yb = (0, Lb.d)("recharts-line-dot", "boolean" !== typeof bb ? bb.className : "");
            Ub = Ab.createElement(Xb.d, pb({
              key: Mb
            }, Tb, {
              className: Yb
            }))
          }
          return Ub
        }
      }], Tb && db(Ub.prototype, Tb), Yb && db(Ub, Yb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Tb, Yb
    }(Ab.PureComponent);
    qb(rb, "displayName", "Line"), qb(rb, "defaultProps", {
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
      isAnimationActive: !Db.b.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), qb(rb, "getComposedData", (function(bb) {
      var ab = bb.props,
        Ub = bb.xAxis,
        Ab = bb.yAxis,
        Mb = bb.xAxisTicks,
        Tb = bb.yAxisTicks,
        Eb = bb.dataKey,
        Yb = bb.bandSize,
        eb = bb.displayedData,
        vb = bb.offset,
        Lb = ab.layout;
      return Wb({
        points: eb.map((function(bb, ab) {
          var eb = (0, zb.cb)(bb, Eb);
          return "horizontal" === Lb ? {
            x: (0, zb.A)({
              axis: Ub,
              ticks: Mb,
              bandSize: Yb,
              entry: bb,
              index: ab
            }),
            y: Bb()(eb) ? null : Ab.scale(eb),
            value: eb,
            payload: bb
          } : {
            x: Bb()(eb) ? null : Ub.scale(eb),
            y: (0, zb.A)({
              axis: Ab,
              ticks: Tb,
              bandSize: Yb,
              entry: bb,
              index: ab
            }),
            value: eb,
            payload: bb
          }
        })),
        layout: Lb
      }, vb)
    }))
  },
  5935: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Fb
    });
    var Ab = Ub(52),
      Mb = Ub(4904),
      Tb = Ub.n(Mb),
      Eb = Ub(5937),
      Yb = Ub.n(Eb),
      Bb = Ub(4721),
      eb = Ub(5553),
      vb = Ub(5842),
      Lb = Ub(5857),
      Pb = Ub(4813),
      Xb = Ub(5866),
      jb = Ub(5050),
      Rb = Ub(5058),
      kb = Ub(5948);

    function yb(bb) {
      return yb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, yb(bb)
    }

    function Zb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Nb(Ab.key), Ab)
      }
    }

    function Db(bb, ab, Ub) {
      return ab = xb(ab),
        function(bb, ab) {
          if (ab && ("object" === yb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, zb() ? Reflect.construct(ab, Ub || [], xb(bb).constructor) : ab.apply(bb, Ub))
    }

    function zb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (zb = function() {
        return !!bb
      })()
    }

    function xb(bb) {
      return xb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, xb(bb)
    }

    function ib(bb, ab) {
      return ib = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, ib(bb, ab)
    }

    function fb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function mb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? fb(Object(Ub), !0).forEach((function(ab) {
          pb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : fb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function pb(bb, ab, Ub) {
      return (ab = Nb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Nb(bb) {
      var ab = function(bb, ab) {
        if ("object" != yb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != yb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == yb(ab) ? ab : ab + ""
    }

    function Wb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Hb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Hb(bb, ab)
      }(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function Ib() {
      return Ib = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Ib.apply(this, arguments)
    }

    function db(bb) {
      var ab = bb.x,
        Ub = bb.y,
        Mb = bb.segment,
        Eb = bb.xAxisId,
        yb = bb.yAxisId,
        Zb = bb.shape,
        Db = bb.className,
        zb = bb.alwaysShow,
        xb = (0, kb.p)(),
        ib = (0, kb.z)(Eb),
        fb = (0, kb.C)(yb),
        pb = (0, kb.v)();
      if (!xb || !pb) return null;
      (0, jb.b)(void 0 === zb, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var Nb = function(bb, ab, Ub, Ab, Mb, Tb, Eb, Bb, eb) {
        var vb = Mb.x,
          Pb = Mb.y,
          Xb = Mb.width,
          jb = Mb.height;
        if (Ub) {
          var Rb = eb.y,
            kb = bb.y.apply(Rb, {
              position: Tb
            });
          if ((0, Lb.b)(eb, "discard") && !bb.y.isInRange(kb)) return null;
          var yb = [{
            x: vb + Xb,
            y: kb
          }, {
            x: vb,
            y: kb
          }];
          return "left" === Bb ? yb.reverse() : yb
        }
        if (ab) {
          var Zb = eb.x,
            Db = bb.x.apply(Zb, {
              position: Tb
            });
          if ((0, Lb.b)(eb, "discard") && !bb.x.isInRange(Db)) return null;
          var zb = [{
            x: Db,
            y: Pb + jb
          }, {
            x: Db,
            y: Pb
          }];
          return "top" === Eb ? zb.reverse() : zb
        }
        if (Ab) {
          var xb = eb.segment.map((function(ab) {
            return bb.apply(ab, {
              position: Tb
            })
          }));
          return (0, Lb.b)(eb, "discard") && Yb()(xb, (function(ab) {
            return !bb.isInRange(ab)
          })) ? null : xb
        }
        return null
      }((0, Xb.e)({
        x: ib.scale,
        y: fb.scale
      }), (0, Pb.B)(ab), (0, Pb.B)(Ub), Mb && 2 === Mb.length, pb, bb.position, ib.orientation, fb.orientation, bb);
      if (!Nb) return null;
      var Hb = Wb(Nb, 2),
        db = Hb[0],
        Fb = db.x,
        hb = db.y,
        Gb = Hb[1],
        Qb = Gb.x,
        qb = Gb.y,
        ub = mb(mb({
          clipPath: (0, Lb.b)(bb, "hidden") ? "url(#".concat(xb, ")") : void 0
        }, (0, Rb.d)(bb, !0)), {}, {
          x1: Fb,
          y1: hb,
          x2: Qb,
          y2: qb
        });
      return Ab.createElement(eb.c, {
        className: (0, Bb.d)("recharts-reference-line", Db)
      }, function(bb, ab) {
        return Ab.isValidElement(bb) ? Ab.cloneElement(bb, ab) : Tb()(bb) ? bb(ab) : Ab.createElement("line", Ib({}, ab, {
          className: "recharts-reference-line-line"
        }))
      }(Zb, ub), vb.e.renderCallByParent(bb, (0, Xb.k)({
        x1: Fb,
        y1: hb,
        x2: Qb,
        y2: qb
      })))
    }
    var Fb = function(bb) {
      function ab() {
        return function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab), Db(this, ab, arguments)
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && ib(bb, ab)
      }(ab, bb), Ub = ab, (Mb = [{
        key: "render",
        value: function() {
          return Ab.createElement(db, this.props)
        }
      }]) && Zb(Ub.prototype, Mb), Tb && Zb(Ub, Tb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Mb, Tb
    }(Ab.Component);
    pb(Fb, "displayName", "ReferenceLine"), pb(Fb, "defaultProps", {
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
  5986: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Zb
    });
    var Ab = Ub(52),
      Mb = Ub(4721),
      Tb = Ub(5948),
      Eb = Ub(5993),
      Yb = Ub(5754);

    function Bb(bb) {
      return Bb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Bb(bb)
    }

    function eb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Rb(Ab.key), Ab)
      }
    }

    function vb(bb, ab, Ub) {
      return ab = Pb(ab),
        function(bb, ab) {
          if (ab && ("object" === Bb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Lb() ? Reflect.construct(ab, Ub || [], Pb(bb).constructor) : ab.apply(bb, Ub))
    }

    function Lb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Lb = function() {
        return !!bb
      })()
    }

    function Pb(bb) {
      return Pb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Pb(bb)
    }

    function Xb(bb, ab) {
      return Xb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Xb(bb, ab)
    }

    function jb(bb, ab, Ub) {
      return (ab = Rb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Rb(bb) {
      var ab = function(bb, ab) {
        if ("object" != Bb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Bb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Bb(ab) ? ab : ab + ""
    }

    function kb() {
      return kb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, kb.apply(this, arguments)
    }

    function yb(bb) {
      var ab = bb.xAxisId,
        Ub = (0, Tb.n)(),
        Bb = (0, Tb.k)(),
        eb = (0, Tb.z)(ab);
      return null == eb ? null : Ab.createElement(Eb.b, kb({}, eb, {
        className: (0, Mb.d)("recharts-".concat(eb.axisType, " ").concat(eb.axisType), eb.className),
        viewBox: {
          x: 0,
          y: 0,
          width: Ub,
          height: Bb
        },
        ticksGenerator: function(bb) {
          return (0, Yb.V)(bb, !0)
        }
      }))
    }
    var Zb = function(bb) {
      function ab() {
        return function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab), vb(this, ab, arguments)
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && Xb(bb, ab)
      }(ab, bb), Ub = ab, (Mb = [{
        key: "render",
        value: function() {
          return Ab.createElement(yb, this.props)
        }
      }]) && eb(Ub.prototype, Mb), Tb && eb(Ub, Tb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Mb, Tb
    }(Ab.Component);
    jb(Zb, "displayName", "XAxis"), jb(Zb, "defaultProps", {
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
  6005: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Zb
    });
    var Ab = Ub(52),
      Mb = Ub(4721),
      Tb = Ub(5948),
      Eb = Ub(5993),
      Yb = Ub(5754);

    function Bb(bb) {
      return Bb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Bb(bb)
    }

    function eb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Rb(Ab.key), Ab)
      }
    }

    function vb(bb, ab, Ub) {
      return ab = Pb(ab),
        function(bb, ab) {
          if (ab && ("object" === Bb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Lb() ? Reflect.construct(ab, Ub || [], Pb(bb).constructor) : ab.apply(bb, Ub))
    }

    function Lb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Lb = function() {
        return !!bb
      })()
    }

    function Pb(bb) {
      return Pb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Pb(bb)
    }

    function Xb(bb, ab) {
      return Xb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Xb(bb, ab)
    }

    function jb(bb, ab, Ub) {
      return (ab = Rb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Rb(bb) {
      var ab = function(bb, ab) {
        if ("object" != Bb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Bb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Bb(ab) ? ab : ab + ""
    }

    function kb() {
      return kb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, kb.apply(this, arguments)
    }
    var yb = function(bb) {
        var ab = bb.yAxisId,
          Ub = (0, Tb.n)(),
          Bb = (0, Tb.k)(),
          eb = (0, Tb.C)(ab);
        return null == eb ? null : Ab.createElement(Eb.b, kb({}, eb, {
          className: (0, Mb.d)("recharts-".concat(eb.axisType, " ").concat(eb.axisType), eb.className),
          viewBox: {
            x: 0,
            y: 0,
            width: Ub,
            height: Bb
          },
          ticksGenerator: function(bb) {
            return (0, Yb.V)(bb, !0)
          }
        }))
      },
      Zb = function(bb) {
        function ab() {
          return function(bb, ab) {
            if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
          }(this, ab), vb(this, ab, arguments)
        }
        return function(bb, ab) {
          if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
          bb.prototype = Object.create(ab && ab.prototype, {
            constructor: {
              value: bb,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), ab && Xb(bb, ab)
        }(ab, bb), Ub = ab, (Mb = [{
          key: "render",
          value: function() {
            return Ab.createElement(yb, this.props)
          }
        }]) && eb(Ub.prototype, Mb), Tb && eb(Ub, Tb), Object.defineProperty(Ub, "prototype", {
          writable: !1
        }), Ub;
        var Ub, Mb, Tb
      }(Ab.Component);
    jb(Zb, "displayName", "YAxis"), jb(Zb, "defaultProps", {
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
  6e3: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Rb
    });
    var Ab = Ub(4904),
      Mb = Ub.n(Ab),
      Tb = Ub(4813),
      Eb = Ub(5748),
      Yb = Ub(5567),
      Bb = Ub(5866);

    function eb(bb, ab, Ub) {
      if (ab < 1) return [];
      if (1 === ab && void 0 === Ub) return bb;
      for (var Ab = [], Mb = 0; Mb < bb.length; Mb += ab) {
        if (void 0 !== Ub && !0 !== Ub(bb[Mb])) return;
        Ab.push(bb[Mb])
      }
      return Ab
    }

    function vb(bb, ab, Ub, Ab, Mb) {
      if (bb * ab < bb * Ab || bb * ab > bb * Mb) return !1;
      var Tb = Ub();
      return bb * (ab - bb * Tb / 2 - Ab) >= 0 && bb * (ab + bb * Tb / 2 - Mb) <= 0
    }

    function Lb(bb) {
      return Lb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Lb(bb)
    }

    function Pb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Xb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Pb(Object(Ub), !0).forEach((function(ab) {
          jb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Pb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function jb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Lb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Lb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Lb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Rb(bb, ab, Ub) {
      var Ab = bb.qL,
        Lb = bb.ticks,
        Pb = bb.viewBox,
        jb = bb.minTickGap,
        Rb = bb.orientation,
        kb = bb.interval,
        yb = bb.tickFormatter,
        Zb = bb.unit,
        Db = bb.angle;
      if (!Lb || !Lb.length || !Ab) return [];
      if ((0, Tb.E)(kb) || Yb.b.isSsr) return function(bb, ab) {
        return eb(bb, ab + 1)
      }(Lb, "number" === typeof kb && (0, Tb.E)(kb) ? kb : 0);
      var zb = [],
        xb = "top" === Rb || "bottom" === Rb ? "width" : "height",
        ib = Zb && "width" === xb ? (0, Eb.e)(Zb, {
          fontSize: ab,
          letterSpacing: Ub
        }) : {
          width: 0,
          height: 0
        },
        fb = function(bb, Ab) {
          var Tb = Mb()(yb) ? yb(bb.value, Ab) : bb.value;
          return "width" === xb ? function(bb, ab, Ub) {
            var Ab = {
              width: bb.width + ab.width,
              height: bb.height + ab.height
            };
            return (0, Bb.h)(Ab, Ub)
          }((0, Eb.e)(Tb, {
            fontSize: ab,
            letterSpacing: Ub
          }), ib, Db) : (0, Eb.e)(Tb, {
            fontSize: ab,
            letterSpacing: Ub
          })[xb]
        },
        mb = Lb.length >= 2 ? (0, Tb.I)(Lb[1].coordinate - Lb[0].coordinate) : 1,
        pb = function(bb, ab, Ub) {
          var Ab = "width" === Ub,
            Mb = bb.x,
            Tb = bb.y,
            Eb = bb.width,
            Yb = bb.height;
          return 1 === ab ? {
            start: Ab ? Mb : Tb,
            end: Ab ? Mb + Eb : Tb + Yb
          } : {
            start: Ab ? Mb + Eb : Tb + Yb,
            end: Ab ? Mb : Tb
          }
        }(Pb, mb, xb);
      return "equidistantPreserveStart" === kb ? function(bb, ab, Ub, Ab, Mb) {
        for (var Tb, Eb = (Ab || []).slice(), Yb = ab.start, Bb = ab.end, Lb = 0, Pb = 1, Xb = Yb, jb = function() {
            var ab = null === Ab || void 0 === Ab ? void 0 : Ab[Lb];
            if (void 0 === ab) return {
              v: eb(Ab, Pb)
            };
            var Tb, Eb = Lb,
              jb = function() {
                return void 0 === Tb && (Tb = Ub(ab, Eb)), Tb
              },
              Rb = ab.coordinate,
              kb = 0 === Lb || vb(bb, Rb, jb, Xb, Bb);
            kb || (Lb = 0, Xb = Yb, Pb += 1), kb && (Xb = Rb + bb * (jb() / 2 + Mb), Lb += Pb)
          }; Pb <= Eb.length;)
          if (Tb = jb()) return Tb.v;
        return []
      }(mb, pb, fb, Lb, jb) : (zb = "preserveStart" === kb || "preserveStartEnd" === kb ? function(bb, ab, Ub, Ab, Mb, Tb) {
        var Eb = (Ab || []).slice(),
          Yb = Eb.length,
          Bb = ab.start,
          eb = ab.end;
        if (Tb) {
          var Lb = Ab[Yb - 1],
            Pb = Ub(Lb, Yb - 1),
            jb = bb * (Lb.coordinate + bb * Pb / 2 - eb);
          Eb[Yb - 1] = Lb = Xb(Xb({}, Lb), {}, {
            tickCoord: jb > 0 ? Lb.coordinate - jb * bb : Lb.coordinate
          }), vb(bb, Lb.tickCoord, (function() {
            return Pb
          }), Bb, eb) && (eb = Lb.tickCoord - bb * (Pb / 2 + Mb), Eb[Yb - 1] = Xb(Xb({}, Lb), {}, {
            isShow: !0
          }))
        }
        for (var Rb = Tb ? Yb - 1 : Yb, kb = function(ab) {
            var Ab, Tb = Eb[ab],
              Yb = function() {
                return void 0 === Ab && (Ab = Ub(Tb, ab)), Ab
              };
            if (0 === ab) {
              var Lb = bb * (Tb.coordinate - bb * Yb() / 2 - Bb);
              Eb[ab] = Tb = Xb(Xb({}, Tb), {}, {
                tickCoord: Lb < 0 ? Tb.coordinate - Lb * bb : Tb.coordinate
              })
            } else Eb[ab] = Tb = Xb(Xb({}, Tb), {}, {
              tickCoord: Tb.coordinate
            });
            vb(bb, Tb.tickCoord, Yb, Bb, eb) && (Bb = Tb.tickCoord + bb * (Yb() / 2 + Mb), Eb[ab] = Xb(Xb({}, Tb), {}, {
              isShow: !0
            }))
          }, yb = 0; yb < Rb; yb++) kb(yb);
        return Eb
      }(mb, pb, fb, Lb, jb, "preserveStartEnd" === kb) : function(bb, ab, Ub, Ab, Mb) {
        for (var Tb = (Ab || []).slice(), Eb = Tb.length, Yb = ab.start, Bb = ab.end, eb = function(ab) {
            var Ab, eb = Tb[ab],
              Lb = function() {
                return void 0 === Ab && (Ab = Ub(eb, ab)), Ab
              };
            if (ab === Eb - 1) {
              var Pb = bb * (eb.coordinate + bb * Lb() / 2 - Bb);
              Tb[ab] = eb = Xb(Xb({}, eb), {}, {
                tickCoord: Pb > 0 ? eb.coordinate - Pb * bb : eb.coordinate
              })
            } else Tb[ab] = eb = Xb(Xb({}, eb), {}, {
              tickCoord: eb.coordinate
            });
            vb(bb, eb.tickCoord, Lb, Yb, Bb) && (Bb = eb.tickCoord - bb * (Lb() / 2 + Mb), Tb[ab] = Xb(Xb({}, eb), {}, {
              isShow: !0
            }))
          }, Lb = Eb - 1; Lb >= 0; Lb--) eb(Lb);
        return Tb
      }(mb, pb, fb, Lb, jb), zb.filter((function(bb) {
        return bb.isShow
      })))
    }
  },
  6016: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb
    });
    var Ab = Ub(5089),
      Mb = Ub(5900),
      Tb = Ub(5986),
      Eb = Ub(6005),
      Yb = Ub(5866),
      Bb = (0, Ab.c)({
        chartName: "BarChart",
        GraphicalChild: Mb.c,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: Tb.b
        }, {
          axisType: "yAxis",
          AxisComp: Eb.e
        }],
        formatAxisMap: Yb.f
      })
  },
  5082: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ma
    });
    var Ab = Ub(5089),
      Mb = Ub(5977),
      Tb = Ub(5900),
      Eb = Ub(5981),
      Yb = Ub(52),
      Bb = Ub(5735),
      eb = Ub(5041),
      vb = Ub.n(eb),
      Lb = Ub(5809),
      Pb = Ub.n(Lb),
      Xb = Ub(4904),
      jb = Ub.n(Xb),
      Rb = Ub(4721),
      kb = Ub(5553),
      yb = Ub(5907),
      Zb = Ub(5058),
      Db = Ub(5567);

    function zb(bb) {
      return zb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, zb(bb)
    }

    function xb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Wb(Ab.key), Ab)
      }
    }

    function ib(bb, ab, Ub) {
      return ab = mb(ab),
        function(bb, ab) {
          if (ab && ("object" === zb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, fb() ? Reflect.construct(ab, Ub || [], mb(bb).constructor) : ab.apply(bb, Ub))
    }

    function fb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (fb = function() {
        return !!bb
      })()
    }

    function mb(bb) {
      return mb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, mb(bb)
    }

    function pb(bb, ab) {
      return pb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, pb(bb, ab)
    }

    function Nb(bb, ab, Ub) {
      return (ab = Wb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Wb(bb) {
      var ab = function(bb, ab) {
        if ("object" != zb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != zb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == zb(ab) ? ab : ab + ""
    }
    var Hb = function(bb) {
      function ab() {
        return function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab), ib(this, ab, arguments)
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && pb(bb, ab)
      }(ab, bb), Ub = ab, (Ab = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && xb(Ub.prototype, Ab), Mb && xb(Ub, Mb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Ab, Mb
    }(Yb.Component);
    Nb(Hb, "displayName", "ZAxis"), Nb(Hb, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var Ib = Ub(5975),
      db = Ub(5820),
      Fb = Ub(5902),
      hb = Ub(4813),
      Gb = Ub(5754),
      Qb = Ub(5080),
      qb = Ub(5647),
      ub = Ub(5913),
      rb = ["option", "isActive"];

    function Kb() {
      return Kb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Kb.apply(this, arguments)
    }

    function ob(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function lb(bb) {
      var ab = bb.option,
        Ub = bb.isActive,
        Ab = ob(bb, rb);
      return "string" === typeof ab ? Yb.createElement(ub.c, Kb({
        option: Yb.createElement(qb.c, Kb({
          type: ab
        }, Ab)),
        isActive: Ub,
        shapeType: "symbols"
      }, Ab)) : Yb.createElement(ub.c, Kb({
        option: ab,
        isActive: Ub,
        shapeType: "symbols"
      }, Ab))
    }

    function tb(bb) {
      return tb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, tb(bb)
    }

    function wb() {
      return wb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, wb.apply(this, arguments)
    }

    function sb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function gb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? sb(Object(Ub), !0).forEach((function(ab) {
          nb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : sb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Cb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Sb(Ab.key), Ab)
      }
    }

    function Vb(bb, ab, Ub) {
      return ab = cb(ab),
        function(bb, ab) {
          if (ab && ("object" === tb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Ob() ? Reflect.construct(ab, Ub || [], cb(bb).constructor) : ab.apply(bb, Ub))
    }

    function Ob() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Ob = function() {
        return !!bb
      })()
    }

    function cb(bb) {
      return cb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, cb(bb)
    }

    function Jb(bb, ab) {
      return Jb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Jb(bb, ab)
    }

    function nb(bb, ab, Ub) {
      return (ab = Sb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Sb(bb) {
      var ab = function(bb, ab) {
        if ("object" != tb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != tb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == tb(ab) ? ab : ab + ""
    }
    var ba = function(bb) {
      function ab() {
        var bb;
        ! function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab);
        for (var Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        return nb(bb = Vb(this, ab, [].concat(Ab)), "state", {
          isAnimationFinished: !1
        }), nb(bb, "handleAnimationEnd", (function() {
          bb.setState({
            isAnimationFinished: !0
          })
        })), nb(bb, "handleAnimationStart", (function() {
          bb.setState({
            isAnimationFinished: !1
          })
        })), nb(bb, "id", (0, hb.J)("recharts-scatter-")), bb
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && Jb(bb, ab)
      }(ab, bb), Ub = ab, Ab = [{
        key: "renderSymbolsStatically",
        value: function(bb) {
          var ab = this,
            Ub = this.props,
            Ab = Ub.shape,
            Mb = Ub.activeShape,
            Tb = Ub.activeIndex,
            Eb = (0, Zb.d)(this.props, !1);
          return bb.map((function(bb, Ub) {
            var Bb = Tb === Ub,
              eb = Bb ? Mb : Ab,
              vb = gb(gb({}, Eb), bb);
            return Yb.createElement(kb.c, wb({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === bb || void 0 === bb ? void 0 : bb.cx, "-").concat(null === bb || void 0 === bb ? void 0 : bb.cy, "-").concat(null === bb || void 0 === bb ? void 0 : bb.size, "-").concat(Ub)
            }, (0, Qb.r)(ab.props, bb, Ub), {
              role: "img"
            }), Yb.createElement(lb, wb({
              option: eb,
              isActive: Bb,
              key: "symbol-".concat(Ub)
            }, vb)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var bb = this,
            ab = this.props,
            Ub = ab.points,
            Ab = ab.isAnimationActive,
            Mb = ab.animationBegin,
            Tb = ab.animationDuration,
            Eb = ab.animationEasing,
            eb = ab.animationId,
            vb = this.state.prevPoints;
          return Yb.createElement(Bb.e, {
            bX: Mb,
            duration: Tb,
            isActive: Ab,
            easing: Eb,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(eb),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(ab) {
            var Ab = ab.t,
              Mb = Ub.map((function(bb, ab) {
                var Ub = vb && vb[ab];
                if (Ub) {
                  var Mb = (0, hb.u)(Ub.cx, bb.cx),
                    Tb = (0, hb.u)(Ub.cy, bb.cy),
                    Eb = (0, hb.u)(Ub.size, bb.size);
                  return gb(gb({}, bb), {}, {
                    cx: Mb(Ab),
                    cy: Tb(Ab),
                    size: Eb(Ab)
                  })
                }
                var Yb = (0, hb.u)(0, bb.size);
                return gb(gb({}, bb), {}, {
                  size: Yb(Ab)
                })
              }));
            return Yb.createElement(kb.c, null, bb.renderSymbolsStatically(Mb))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var bb = this.props,
            ab = bb.points,
            Ub = bb.isAnimationActive,
            Ab = this.state.prevPoints;
          return !(Ub && ab && ab.length) || Ab && Pb()(Ab, ab) ? this.renderSymbolsStatically(ab) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var bb = this.props,
            ab = bb.points,
            Ub = bb.xAxis,
            Ab = bb.yAxis,
            Mb = bb.children,
            Tb = (0, Zb.e)(Mb, db.d);
          return Tb ? Tb.map((function(bb, Mb) {
            var Tb = bb.props,
              Eb = Tb.direction,
              Bb = Tb.dataKey;
            return Yb.cloneElement(bb, {
              key: "".concat(Eb, "-").concat(Bb, "-").concat(ab[Mb]),
              data: ab,
              xAxis: Ub,
              yAxis: Ab,
              layout: "x" === Eb ? "vertical" : "horizontal",
              dataPointFormatter: function(bb, ab) {
                return {
                  x: bb.cx,
                  y: bb.cy,
                  value: "x" === Eb ? +bb.node.x : +bb.node.y,
                  errorVal: (0, Gb.cb)(bb, ab)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var bb, ab, Ub = this.props,
            Ab = Ub.points,
            Mb = Ub.line,
            Tb = Ub.lineType,
            Eb = Ub.lineJointType,
            Bb = (0, Zb.d)(this.props, !1),
            eb = (0, Zb.d)(Mb, !1);
          if ("joint" === Tb) bb = Ab.map((function(bb) {
            return {
              x: bb.cx,
              y: bb.cy
            }
          }));
          else if ("fitting" === Tb) {
            var vb = (0, hb.n)(Ab),
              Lb = vb.xmin,
              Pb = vb.xmax,
              Xb = vb.a,
              Rb = vb.b,
              yb = function(bb) {
                return Xb * bb + Rb
              };
            bb = [{
              x: Lb,
              y: yb(Lb)
            }, {
              x: Pb,
              y: yb(Pb)
            }]
          }
          var Db = gb(gb(gb({}, Bb), {}, {
            fill: "none",
            stroke: Bb && Bb.fill
          }, eb), {}, {
            points: bb
          });
          return ab = Yb.isValidElement(Mb) ? Yb.cloneElement(Mb, Db) : jb()(Mb) ? Mb(Db) : Yb.createElement(Ib.c, wb({}, Db, {
            type: Eb
          })), Yb.createElement(kb.c, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, ab)
        }
      }, {
        key: "render",
        value: function() {
          var bb = this.props,
            ab = bb.hide,
            Ub = bb.points,
            Ab = bb.line,
            Mb = bb.className,
            Tb = bb.xAxis,
            Eb = bb.yAxis,
            Bb = bb.left,
            eb = bb.top,
            Lb = bb.width,
            Pb = bb.height,
            Xb = bb.id,
            jb = bb.isAnimationActive;
          if (ab || !Ub || !Ub.length) return null;
          var Zb = this.state.isAnimationFinished,
            Db = (0, Rb.d)("recharts-scatter", Mb),
            zb = Tb && Tb.allowDataOverflow,
            xb = Eb && Eb.allowDataOverflow,
            ib = zb || xb,
            fb = vb()(Xb) ? this.id : Xb;
          return Yb.createElement(kb.c, {
            className: Db,
            clipPath: ib ? "url(#clipPath-".concat(fb, ")") : null
          }, zb || xb ? Yb.createElement("defs", null, Yb.createElement("clipPath", {
            id: "clipPath-".concat(fb)
          }, Yb.createElement("rect", {
            x: zb ? Bb : Bb - Lb / 2,
            y: xb ? eb : eb - Pb / 2,
            width: zb ? Lb : 2 * Lb,
            height: xb ? Pb : 2 * Pb
          }))) : null, Ab && this.renderLine(), this.renderErrorBar(), Yb.createElement(kb.c, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!jb || Zb) && yb.e.renderCallByParent(this.props, Ub))
        }
      }], Mb = [{
        key: "getDerivedStateFromProps",
        value: function(bb, ab) {
          return bb.animationId !== ab.prevAnimationId ? {
            prevAnimationId: bb.animationId,
            curPoints: bb.points,
            prevPoints: ab.curPoints
          } : bb.points !== ab.curPoints ? {
            curPoints: bb.points
          } : null
        }
      }], Ab && Cb(Ub.prototype, Ab), Mb && Cb(Ub, Mb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Ab, Mb
    }(Yb.PureComponent);
    nb(ba, "displayName", "Scatter"), nb(ba, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !Db.b.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), nb(ba, "getComposedData", (function(bb) {
      var ab = bb.xAxis,
        Ub = bb.yAxis,
        Ab = bb.zAxis,
        Mb = bb.item,
        Tb = bb.displayedData,
        Eb = bb.xAxisTicks,
        Yb = bb.yAxisTicks,
        Bb = bb.offset,
        eb = Mb.props.tooltipType,
        Lb = (0, Zb.e)(Mb.props.children, Fb.e),
        Pb = vb()(ab.dataKey) ? Mb.props.dataKey : ab.dataKey,
        Xb = vb()(Ub.dataKey) ? Mb.props.dataKey : Ub.dataKey,
        jb = Ab && Ab.dataKey,
        Rb = Ab ? Ab.range : Hb.defaultProps.range,
        kb = Rb && Rb[0],
        yb = ab.scale.bandwidth ? ab.scale.bandwidth() : 0,
        Db = Ub.scale.bandwidth ? Ub.scale.bandwidth() : 0,
        zb = Tb.map((function(bb, Tb) {
          var Bb = (0, Gb.cb)(bb, Pb),
            Rb = (0, Gb.cb)(bb, Xb),
            Zb = !vb()(jb) && (0, Gb.cb)(bb, jb) || "-",
            zb = [{
              name: vb()(ab.dataKey) ? Mb.props.name : ab.name || ab.dataKey,
              unit: ab.unit || "",
              value: Bb,
              payload: bb,
              dataKey: Pb,
              type: eb
            }, {
              name: vb()(Ub.dataKey) ? Mb.props.name : Ub.name || Ub.dataKey,
              unit: Ub.unit || "",
              value: Rb,
              payload: bb,
              dataKey: Xb,
              type: eb
            }];
          "-" !== Zb && zb.push({
            name: Ab.name || Ab.dataKey,
            unit: Ab.unit || "",
            value: Zb,
            payload: bb,
            dataKey: jb,
            type: eb
          });
          var xb = (0, Gb.A)({
              axis: ab,
              ticks: Eb,
              bandSize: yb,
              entry: bb,
              index: Tb,
              dataKey: Pb
            }),
            ib = (0, Gb.A)({
              axis: Ub,
              ticks: Yb,
              bandSize: Db,
              entry: bb,
              index: Tb,
              dataKey: Xb
            }),
            fb = "-" !== Zb ? Ab.scale(Zb) : kb,
            mb = Math.sqrt(Math.max(fb, 0) / Math.PI);
          return gb(gb({}, bb), {}, {
            cx: xb,
            cy: ib,
            x: xb - mb,
            y: ib - mb,
            xAxis: ab,
            yAxis: Ub,
            zAxis: Ab,
            width: 2 * mb,
            height: 2 * mb,
            size: fb,
            node: {
              x: Bb,
              y: Rb,
              z: Zb
            },
            tooltipPayload: zb,
            tooltipPosition: {
              x: xb,
              y: ib
            },
            payload: bb
          }, Lb && Lb[Tb] && Lb[Tb].props)
        }));
      return gb({
        points: zb
      }, Bb)
    }));
    var aa = Ub(5986),
      Ua = Ub(6005),
      Aa = Ub(5866),
      Ma = (0, Ab.c)({
        chartName: "ComposedChart",
        GraphicalChild: [Eb.d, Mb.d, Tb.c, ba],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: aa.b
        }, {
          axisType: "yAxis",
          AxisComp: Ua.e
        }, {
          axisType: "zAxis",
          AxisComp: Hb
        }],
        formatAxisMap: Aa.f
      })
  },
  5089: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => KU
    });
    var Ab = Ub(52),
      Mb = Ub(5041),
      Tb = Ub.n(Mb),
      Eb = Ub(4904),
      Yb = Ub.n(Eb),
      Bb = Ub(5094),
      eb = Ub.n(Bb),
      vb = Ub(4838),
      Lb = Ub.n(vb),
      Pb = Ub(5153),
      Xb = Ub.n(Pb),
      jb = Ub(4725),
      Rb = Ub.n(jb),
      kb = Ub(4721),
      yb = Ub(5542),
      Zb = Ub(5546),
      Db = Ub(5553),
      zb = Ub(5561),
      xb = Ub(5642),
      ib = Ub(5723),
      fb = Ub(5730),
      mb = Ub(5058),
      pb = Ub(5758),
      Nb = Ub(5741),
      Wb = Ub(5754),
      Hb = Ub(4813);

    function Ib(bb) {
      return Ib = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ib(bb)
    }

    function db(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Fb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? db(Object(Ub), !0).forEach((function(ab) {
          hb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : db(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function hb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Ib(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Ib(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Ib(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var Gb = ["Webkit", "Moz", "O", "ms"];

    function Qb(bb) {
      return Qb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Qb(bb)
    }

    function qb() {
      return qb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, qb.apply(this, arguments)
    }

    function ub(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function rb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? ub(Object(Ub), !0).forEach((function(ab) {
          sb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : ub(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Kb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, gb(Ab.key), Ab)
      }
    }

    function ob(bb, ab, Ub) {
      return ab = tb(ab),
        function(bb, ab) {
          if (ab && ("object" === Qb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, lb() ? Reflect.construct(ab, Ub || [], tb(bb).constructor) : ab.apply(bb, Ub))
    }

    function lb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (lb = function() {
        return !!bb
      })()
    }

    function tb(bb) {
      return tb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, tb(bb)
    }

    function wb(bb, ab) {
      return wb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, wb(bb, ab)
    }

    function sb(bb, ab, Ub) {
      return (ab = gb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function gb(bb) {
      var ab = function(bb, ab) {
        if ("object" != Qb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Qb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Qb(ab) ? ab : ab + ""
    }
    var Cb = function(bb) {
        return bb.changedTouches && !!bb.changedTouches.length
      },
      Vb = function(bb) {
        function ab(bb) {
          var Ub;
          return function(bb, ab) {
            if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
          }(this, ab), sb(Ub = ob(this, ab, [bb]), "handleDrag", (function(bb) {
            Ub.leaveTimer && (clearTimeout(Ub.leaveTimer), Ub.leaveTimer = null), Ub.state.isTravellerMoving ? Ub.handleTravellerMove(bb) : Ub.state.isSlideMoving && Ub.handleSlideDrag(bb)
          })), sb(Ub, "handleTouchMove", (function(bb) {
            null != bb.changedTouches && bb.changedTouches.length > 0 && Ub.handleDrag(bb.changedTouches[0])
          })), sb(Ub, "handleDragEnd", (function() {
            Ub.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var bb = Ub.props,
                ab = bb.endIndex,
                Ab = bb.onDragEnd,
                Mb = bb.startIndex;
              null === Ab || void 0 === Ab || Ab({
                endIndex: ab,
                startIndex: Mb
              })
            })), Ub.detachDragEndListener()
          })), sb(Ub, "handleLeaveWrapper", (function() {
            (Ub.state.isTravellerMoving || Ub.state.isSlideMoving) && (Ub.leaveTimer = window.setTimeout(Ub.handleDragEnd, Ub.props.leaveTimeOut))
          })), sb(Ub, "handleEnterSlideOrTraveller", (function() {
            Ub.setState({
              isTextActive: !0
            })
          })), sb(Ub, "handleLeaveSlideOrTraveller", (function() {
            Ub.setState({
              isTextActive: !1
            })
          })), sb(Ub, "handleSlideDragStart", (function(bb) {
            var ab = Cb(bb) ? bb.changedTouches[0] : bb;
            Ub.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: ab.pageX
            }), Ub.attachDragEndListener()
          })), Ub.travellerDragStartHandlers = {
            startX: Ub.handleTravellerDragStart.bind(Ub, "startX"),
            endX: Ub.handleTravellerDragStart.bind(Ub, "endX")
          }, Ub.state = {}, Ub
        }
        return function(bb, ab) {
          if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
          bb.prototype = Object.create(ab && ab.prototype, {
            constructor: {
              value: bb,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), ab && wb(bb, ab)
        }(ab, bb), Ub = ab, Mb = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(bb) {
            var Ub = bb.startX,
              Ab = bb.endX,
              Mb = this.state.scaleValues,
              Tb = this.props,
              Eb = Tb.gap,
              Yb = Tb.data.length - 1,
              Bb = Math.min(Ub, Ab),
              eb = Math.max(Ub, Ab),
              vb = ab.getIndexInRange(Mb, Bb),
              Lb = ab.getIndexInRange(Mb, eb);
            return {
              startIndex: vb - vb % Eb,
              endIndex: Lb === Yb ? Yb : Lb - Lb % Eb
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(bb) {
            var ab = this.props,
              Ub = ab.data,
              Ab = ab.tickFormatter,
              Mb = ab.dataKey,
              Tb = (0, Wb.cb)(Ub[bb], Mb, bb);
            return Yb()(Ab) ? Ab(Tb, bb) : Tb
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
            var ab = this.state,
              Ub = ab.slideMoveStartX,
              Ab = ab.startX,
              Mb = ab.endX,
              Tb = this.props,
              Eb = Tb.x,
              Yb = Tb.width,
              Bb = Tb.travellerWidth,
              eb = Tb.startIndex,
              vb = Tb.endIndex,
              Lb = Tb.onChange,
              Pb = bb.pageX - Ub;
            Pb > 0 ? Pb = Math.min(Pb, Eb + Yb - Bb - Mb, Eb + Yb - Bb - Ab) : Pb < 0 && (Pb = Math.max(Pb, Eb - Ab, Eb - Mb));
            var Xb = this.getIndex({
              startX: Ab + Pb,
              endX: Mb + Pb
            });
            Xb.startIndex === eb && Xb.endIndex === vb || !Lb || Lb(Xb), this.setState({
              startX: Ab + Pb,
              endX: Mb + Pb,
              slideMoveStartX: bb.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(bb, ab) {
            var Ub = Cb(ab) ? ab.changedTouches[0] : ab;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: bb,
              brushMoveStartX: Ub.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(bb) {
            var ab = this.state,
              Ub = ab.brushMoveStartX,
              Ab = ab.movingTravellerId,
              Mb = ab.endX,
              Tb = ab.startX,
              Eb = this.state[Ab],
              Yb = this.props,
              Bb = Yb.x,
              eb = Yb.width,
              vb = Yb.travellerWidth,
              Lb = Yb.onChange,
              Pb = Yb.gap,
              Xb = Yb.data,
              jb = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              Rb = bb.pageX - Ub;
            Rb > 0 ? Rb = Math.min(Rb, Bb + eb - vb - Eb) : Rb < 0 && (Rb = Math.max(Rb, Bb - Eb)), jb[Ab] = Eb + Rb;
            var kb = this.getIndex(jb),
              yb = kb.startIndex,
              Zb = kb.endIndex;
            this.setState(sb(sb({}, Ab, Eb + Rb), "brushMoveStartX", bb.pageX), (function() {
              Lb && function() {
                var bb = Xb.length - 1;
                return "startX" === Ab && (Mb > Tb ? yb % Pb === 0 : Zb % Pb === 0) || Mb < Tb && Zb === bb || "endX" === Ab && (Mb > Tb ? Zb % Pb === 0 : yb % Pb === 0) || Mb > Tb && Zb === bb
              }() && Lb(kb)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(bb, ab) {
            var Ub = this,
              Ab = this.state,
              Mb = Ab.scaleValues,
              Tb = Ab.startX,
              Eb = Ab.endX,
              Yb = this.state[ab],
              Bb = Mb.indexOf(Yb);
            if (-1 !== Bb) {
              var eb = Bb + bb;
              if (!(-1 === eb || eb >= Mb.length)) {
                var vb = Mb[eb];
                "startX" === ab && vb >= Eb || "endX" === ab && vb <= Tb || this.setState(sb({}, ab, vb), (function() {
                  Ub.props.onChange(Ub.getIndex({
                    startX: Ub.state.startX,
                    endX: Ub.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var bb = this.props,
              ab = bb.x,
              Ub = bb.y,
              Mb = bb.width,
              Tb = bb.height,
              Eb = bb.fill,
              Yb = bb.stroke;
            return Ab.createElement("rect", {
              stroke: Yb,
              fill: Eb,
              x: ab,
              y: Ub,
              width: Mb,
              height: Tb
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var bb = this.props,
              ab = bb.x,
              Ub = bb.y,
              Mb = bb.width,
              Tb = bb.height,
              Eb = bb.data,
              Yb = bb.children,
              Bb = bb.padding,
              eb = Ab.Children.only(Yb);
            return eb ? Ab.cloneElement(eb, {
              x: ab,
              y: Ub,
              width: Mb,
              height: Tb,
              margin: Bb,
              compact: !0,
              data: Eb
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(bb, Ub) {
            var Mb, Tb, Eb = this,
              Yb = this.props,
              Bb = Yb.y,
              eb = Yb.travellerWidth,
              vb = Yb.height,
              Lb = Yb.traveller,
              Pb = Yb.ariaLabel,
              Xb = Yb.data,
              jb = Yb.startIndex,
              Rb = Yb.endIndex,
              kb = Math.max(bb, this.props.x),
              yb = rb(rb({}, (0, mb.d)(this.props, !1)), {}, {
                x: kb,
                y: Bb,
                width: eb,
                height: vb
              }),
              Zb = Pb || "Min value: ".concat(null === (Mb = Xb[jb]) || void 0 === Mb ? void 0 : Mb.name, ", Max value: ").concat(null === (Tb = Xb[Rb]) || void 0 === Tb ? void 0 : Tb.name);
            return Ab.createElement(Db.c, {
              tabIndex: 0,
              role: "slider",
              "aria-label": Zb,
              "aria-valuenow": bb,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[Ub],
              onTouchStart: this.travellerDragStartHandlers[Ub],
              onKeyDown: function(bb) {
                ["ArrowLeft", "ArrowRight"].includes(bb.key) && (bb.preventDefault(), bb.stopPropagation(), Eb.handleTravellerMoveKeyboard("ArrowRight" === bb.key ? 1 : -1, Ub))
              },
              onFocus: function() {
                Eb.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                Eb.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, ab.renderTraveller(Lb, yb))
          }
        }, {
          key: "renderSlide",
          value: function(bb, ab) {
            var Ub = this.props,
              Mb = Ub.y,
              Tb = Ub.height,
              Eb = Ub.stroke,
              Yb = Ub.travellerWidth,
              Bb = Math.min(bb, ab) + Yb,
              eb = Math.max(Math.abs(ab - bb) - Yb, 0);
            return Ab.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: Eb,
              fillOpacity: .2,
              x: Bb,
              y: Mb,
              width: eb,
              height: Tb
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var bb = this.props,
              ab = bb.startIndex,
              Ub = bb.endIndex,
              Mb = bb.y,
              Tb = bb.height,
              Eb = bb.travellerWidth,
              Yb = bb.stroke,
              Bb = this.state,
              eb = Bb.startX,
              vb = Bb.endX,
              Lb = {
                pointerEvents: "none",
                fill: Yb
              };
            return Ab.createElement(Db.c, {
              className: "recharts-brush-texts"
            }, Ab.createElement(Nb.e, qb({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(eb, vb) - 5,
              y: Mb + Tb / 2
            }, Lb), this.getTextOfTick(ab)), Ab.createElement(Nb.e, qb({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(eb, vb) + Eb + 5,
              y: Mb + Tb / 2
            }, Lb), this.getTextOfTick(Ub)))
          }
        }, {
          key: "render",
          value: function() {
            var bb = this.props,
              ab = bb.data,
              Ub = bb.className,
              Mb = bb.children,
              Tb = bb.x,
              Eb = bb.y,
              Yb = bb.width,
              Bb = bb.height,
              eb = bb.alwaysShowText,
              vb = this.state,
              Lb = vb.startX,
              Pb = vb.endX,
              Xb = vb.isTextActive,
              jb = vb.isSlideMoving,
              Rb = vb.isTravellerMoving,
              yb = vb.isTravellerFocused;
            if (!ab || !ab.length || !(0, Hb.E)(Tb) || !(0, Hb.E)(Eb) || !(0, Hb.E)(Yb) || !(0, Hb.E)(Bb) || Yb <= 0 || Bb <= 0) return null;
            var Zb = (0, kb.d)("recharts-brush", Ub),
              zb = 1 === Ab.Children.count(Mb),
              xb = function(bb, ab) {
                if (!bb) return null;
                var Ub = bb.replace(/(\w)/, (function(bb) {
                    return bb.toUpperCase()
                  })),
                  Ab = Gb.reduce((function(bb, Ab) {
                    return Fb(Fb({}, bb), {}, hb({}, Ab + Ub, ab))
                  }), {});
                return Ab[bb] = ab, Ab
              }("userSelect", "none");
            return Ab.createElement(Db.c, {
              className: Zb,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: xb
            }, this.renderBackground(), zb && this.renderPanorama(), this.renderSlide(Lb, Pb), this.renderTravellerLayer(Lb, "startX"), this.renderTravellerLayer(Pb, "endX"), (Xb || jb || Rb || yb || eb) && this.renderText())
          }
        }], Tb = [{
          key: "renderDefaultTraveller",
          value: function(bb) {
            var ab = bb.x,
              Ub = bb.y,
              Mb = bb.width,
              Tb = bb.height,
              Eb = bb.stroke,
              Yb = Math.floor(Ub + Tb / 2) - 1;
            return Ab.createElement(Ab.Fragment, null, Ab.createElement("rect", {
              x: ab,
              y: Ub,
              width: Mb,
              height: Tb,
              fill: Eb,
              stroke: "none"
            }), Ab.createElement("line", {
              x1: ab + 1,
              y1: Yb,
              x2: ab + Mb - 1,
              y2: Yb,
              fill: "none",
              stroke: "#fff"
            }), Ab.createElement("line", {
              x1: ab + 1,
              y1: Yb + 2,
              x2: ab + Mb - 1,
              y2: Yb + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(bb, Ub) {
            return Ab.isValidElement(bb) ? Ab.cloneElement(bb, Ub) : Yb()(bb) ? bb(Ub) : ab.renderDefaultTraveller(Ub)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(bb, ab) {
            var Ub = bb.data,
              Ab = bb.width,
              Mb = bb.x,
              Tb = bb.travellerWidth,
              Eb = bb.updateId,
              Yb = bb.startIndex,
              Bb = bb.endIndex;
            if (Ub !== ab.prevData || Eb !== ab.prevUpdateId) return rb({
              prevData: Ub,
              prevTravellerWidth: Tb,
              prevUpdateId: Eb,
              prevX: Mb,
              prevWidth: Ab
            }, Ub && Ub.length ? function(bb) {
              var ab = bb.data,
                Ub = bb.startIndex,
                Ab = bb.endIndex,
                Mb = bb.x,
                Tb = bb.width,
                Eb = bb.travellerWidth;
              if (!ab || !ab.length) return {};
              var Yb = ab.length,
                Bb = (0, pb.c)().domain(eb()(0, Yb)).range([Mb, Mb + Tb - Eb]),
                vb = Bb.domain().map((function(bb) {
                  return Bb(bb)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: Bb(Ub),
                endX: Bb(Ab),
                scale: Bb,
                scaleValues: vb
              }
            }({
              data: Ub,
              width: Ab,
              x: Mb,
              travellerWidth: Tb,
              startIndex: Yb,
              endIndex: Bb
            }) : {
              scale: null,
              scaleValues: null
            });
            if (ab.scale && (Ab !== ab.prevWidth || Mb !== ab.prevX || Tb !== ab.prevTravellerWidth)) {
              ab.scale.range([Mb, Mb + Ab - Tb]);
              var vb = ab.scale.domain().map((function(bb) {
                return ab.scale(bb)
              }));
              return {
                prevData: Ub,
                prevTravellerWidth: Tb,
                prevUpdateId: Eb,
                prevX: Mb,
                prevWidth: Ab,
                startX: ab.scale(bb.startIndex),
                endX: ab.scale(bb.endIndex),
                scaleValues: vb
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(bb, ab) {
            for (var Ub = 0, Ab = bb.length - 1; Ab - Ub > 1;) {
              var Mb = Math.floor((Ub + Ab) / 2);
              bb[Mb] > ab ? Ab = Mb : Ub = Mb
            }
            return ab >= bb[Ab] ? Ab : Ub
          }
        }], Mb && Kb(Ub.prototype, Mb), Tb && Kb(Ub, Tb), Object.defineProperty(Ub, "prototype", {
          writable: !1
        }), Ub;
        var Ub, Mb, Tb
      }(Ab.PureComponent);
    sb(Vb, "displayName", "Brush"), sb(Vb, "defaultProps", {
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
    var Ob = Ub(5748),
      cb = Ub(5825),
      Jb = Ub(5842),
      nb = Ub(5857),
      Sb = Ub(5866),
      ba = Ub(5050);

    function aa() {
      return aa = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, aa.apply(this, arguments)
    }

    function Ua(bb) {
      return Ua = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ua(bb)
    }

    function Aa(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Ma(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Aa(Object(Ub), !0).forEach((function(ab) {
          va(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Aa(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Ta(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, La(Ab.key), Ab)
      }
    }

    function Ea(bb, ab, Ub) {
      return ab = Ba(ab),
        function(bb, ab) {
          if (ab && ("object" === Ua(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Ya() ? Reflect.construct(ab, Ub || [], Ba(bb).constructor) : ab.apply(bb, Ub))
    }

    function Ya() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Ya = function() {
        return !!bb
      })()
    }

    function Ba(bb) {
      return Ba = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Ba(bb)
    }

    function ea(bb, ab) {
      return ea = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, ea(bb, ab)
    }

    function va(bb, ab, Ub) {
      return (ab = La(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function La(bb) {
      var ab = function(bb, ab) {
        if ("object" != Ua(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Ua(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Ua(ab) ? ab : ab + ""
    }
    var Pa = function(bb) {
      function ab() {
        return function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab), Ea(this, ab, arguments)
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && ea(bb, ab)
      }(ab, bb), Ub = ab, (Mb = [{
        key: "render",
        value: function() {
          var bb = this.props,
            Ub = bb.x,
            Mb = bb.y,
            Tb = bb.r,
            Eb = bb.alwaysShow,
            Yb = bb.clipPathId,
            Bb = (0, Hb.B)(Ub),
            eb = (0, Hb.B)(Mb);
          if ((0, ba.b)(void 0 === Eb, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !Bb || !eb) return null;
          var vb = function(bb) {
            var ab = bb.x,
              Ub = bb.y,
              Ab = bb.xAxis,
              Mb = bb.yAxis,
              Tb = (0, Sb.e)({
                x: Ab.scale,
                y: Mb.scale
              }),
              Eb = Tb.apply({
                x: ab,
                y: Ub
              }, {
                bandAware: !0
              });
            return (0, nb.b)(bb, "discard") && !Tb.isInRange(Eb) ? null : Eb
          }(this.props);
          if (!vb) return null;
          var Lb = vb.x,
            Pb = vb.y,
            Xb = this.props,
            jb = Xb.shape,
            Rb = Xb.className,
            yb = Ma(Ma({
              clipPath: (0, nb.b)(this.props, "hidden") ? "url(#".concat(Yb, ")") : void 0
            }, (0, mb.d)(this.props, !0)), {}, {
              cx: Lb,
              cy: Pb
            });
          return Ab.createElement(Db.c, {
            className: (0, kb.d)("recharts-reference-dot", Rb)
          }, ab.renderDot(jb, yb), Jb.e.renderCallByParent(this.props, {
            x: Lb - Tb,
            y: Pb - Tb,
            width: 2 * Tb,
            height: 2 * Tb
          }))
        }
      }]) && Ta(Ub.prototype, Mb), Tb && Ta(Ub, Tb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Mb, Tb
    }(Ab.Component);
    va(Pa, "displayName", "ReferenceDot"), va(Pa, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), va(Pa, "renderDot", (function(bb, ab) {
      return Ab.isValidElement(bb) ? Ab.cloneElement(bb, ab) : Yb()(bb) ? bb(ab) : Ab.createElement(ib.d, aa({}, ab, {
        cx: ab.cx,
        cy: ab.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var Xa = Ub(5935);

    function ja() {
      return ja = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, ja.apply(this, arguments)
    }

    function Ra(bb) {
      return Ra = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ra(bb)
    }

    function ka(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function ya(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? ka(Object(Ub), !0).forEach((function(ab) {
          fa(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : ka(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Za(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, ma(Ab.key), Ab)
      }
    }

    function Da(bb, ab, Ub) {
      return ab = xa(ab),
        function(bb, ab) {
          if (ab && ("object" === Ra(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, za() ? Reflect.construct(ab, Ub || [], xa(bb).constructor) : ab.apply(bb, Ub))
    }

    function za() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (za = function() {
        return !!bb
      })()
    }

    function xa(bb) {
      return xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, xa(bb)
    }

    function ia(bb, ab) {
      return ia = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, ia(bb, ab)
    }

    function fa(bb, ab, Ub) {
      return (ab = ma(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function ma(bb) {
      var ab = function(bb, ab) {
        if ("object" != Ra(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Ra(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Ra(ab) ? ab : ab + ""
    }
    var pa = function(bb) {
      function ab() {
        return function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab), Da(this, ab, arguments)
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && ia(bb, ab)
      }(ab, bb), Ub = ab, (Mb = [{
        key: "render",
        value: function() {
          var bb = this.props,
            Ub = bb.x1,
            Mb = bb.x2,
            Tb = bb.y1,
            Eb = bb.y2,
            Yb = bb.className,
            Bb = bb.alwaysShow,
            eb = bb.clipPathId;
          (0, ba.b)(void 0 === Bb, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var vb = (0, Hb.B)(Ub),
            Lb = (0, Hb.B)(Mb),
            Pb = (0, Hb.B)(Tb),
            Xb = (0, Hb.B)(Eb),
            jb = this.props.shape;
          if (!vb && !Lb && !Pb && !Xb && !jb) return null;
          var Rb = function(bb, ab, Ub, Ab, Mb) {
            var Tb = Mb.x1,
              Eb = Mb.x2,
              Yb = Mb.y1,
              Bb = Mb.y2,
              eb = Mb.xAxis,
              vb = Mb.yAxis;
            if (!eb || !vb) return null;
            var Lb = (0, Sb.e)({
                x: eb.scale,
                y: vb.scale
              }),
              Pb = {
                x: bb ? Lb.x.apply(Tb, {
                  position: "start"
                }) : Lb.x.rangeMin,
                y: Ub ? Lb.y.apply(Yb, {
                  position: "start"
                }) : Lb.y.rangeMin
              },
              Xb = {
                x: ab ? Lb.x.apply(Eb, {
                  position: "end"
                }) : Lb.x.rangeMax,
                y: Ab ? Lb.y.apply(Bb, {
                  position: "end"
                }) : Lb.y.rangeMax
              };
            return !(0, nb.b)(Mb, "discard") || Lb.isInRange(Pb) && Lb.isInRange(Xb) ? (0, Sb.l)(Pb, Xb) : null
          }(vb, Lb, Pb, Xb, this.props);
          if (!Rb && !jb) return null;
          var yb = (0, nb.b)(this.props, "hidden") ? "url(#".concat(eb, ")") : void 0;
          return Ab.createElement(Db.c, {
            className: (0, kb.d)("recharts-reference-area", Yb)
          }, ab.renderRect(jb, ya(ya({
            clipPath: yb
          }, (0, mb.d)(this.props, !0)), Rb)), Jb.e.renderCallByParent(this.props, Rb))
        }
      }]) && Za(Ub.prototype, Mb), Tb && Za(Ub, Tb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Mb, Tb
    }(Ab.Component);

    function Na(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Wa(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Wa(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Wa(bb, ab)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wa(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }
    fa(pa, "displayName", "ReferenceArea"), fa(pa, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), fa(pa, "renderRect", (function(bb, ab) {
      return Ab.isValidElement(bb) ? Ab.cloneElement(bb, ab) : Yb()(bb) ? bb(ab) : Ab.createElement(fb.e, ja({}, ab, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var Ha = function(bb, ab, Ub, Ab, Mb) {
        var Tb = (0, mb.e)(bb, Xa.e),
          Eb = (0, mb.e)(bb, Pa),
          Yb = [].concat(Na(Tb), Na(Eb)),
          Bb = (0, mb.e)(bb, pa),
          eb = "".concat(Ab, "Id"),
          vb = Ab[0],
          Lb = ab;
        if (Yb.length && (Lb = Yb.reduce((function(bb, ab) {
            if (ab.props[eb] === Ub && (0, nb.b)(ab.props, "extendDomain") && (0, Hb.E)(ab.props[vb])) {
              var Ab = ab.props[vb];
              return [Math.min(bb[0], Ab), Math.max(bb[1], Ab)]
            }
            return bb
          }), Lb)), Bb.length) {
          var Pb = "".concat(vb, "1"),
            Xb = "".concat(vb, "2");
          Lb = Bb.reduce((function(bb, ab) {
            if (ab.props[eb] === Ub && (0, nb.b)(ab.props, "extendDomain") && (0, Hb.E)(ab.props[Pb]) && (0, Hb.E)(ab.props[Xb])) {
              var Ab = ab.props[Pb],
                Mb = ab.props[Xb];
              return [Math.min(bb[0], Ab, Mb), Math.max(bb[1], Ab, Mb)]
            }
            return bb
          }), Lb)
        }
        return Mb && Mb.length && (Lb = Mb.reduce((function(bb, ab) {
          return (0, Hb.E)(ab) ? [Math.min(bb[0], ab), Math.max(bb[1], ab)] : bb
        }), Lb)), Lb
      },
      Ia = Ub(5849),
      da = Ub(5073),
      Fa = Ub(24),
      ha = new(Ub.n(Fa)()),
      Ga = "recharts.syncMouseEvents",
      Qa = Ub(5080);

    function qa(bb) {
      return qa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, qa(bb)
    }

    function ua(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Ka(Ab.key), Ab)
      }
    }

    function ra(bb, ab, Ub) {
      return (ab = Ka(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Ka(bb) {
      var ab = function(bb, ab) {
        if ("object" != qa(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != qa(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == qa(ab) ? ab : ab + ""
    }
    var oa = function() {
      return bb = function bb() {
        ! function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, bb), ra(this, "activeIndex", 0), ra(this, "coordinateList", []), ra(this, "layout", "horizontal")
      }, (ab = [{
        key: "setDetails",
        value: function(bb) {
          var ab, Ub = bb.coordinateList,
            Ab = void 0 === Ub ? null : Ub,
            Mb = bb.container,
            Tb = void 0 === Mb ? null : Mb,
            Eb = bb.layout,
            Yb = void 0 === Eb ? null : Eb,
            Bb = bb.offset,
            eb = void 0 === Bb ? null : Bb,
            vb = bb.mouseHandlerCallback,
            Lb = void 0 === vb ? null : vb;
          this.coordinateList = null !== (ab = null !== Ab && void 0 !== Ab ? Ab : this.coordinateList) && void 0 !== ab ? ab : [], this.container = null !== Tb && void 0 !== Tb ? Tb : this.container, this.layout = null !== Yb && void 0 !== Yb ? Yb : this.layout, this.offset = null !== eb && void 0 !== eb ? eb : this.offset, this.mouseHandlerCallback = null !== Lb && void 0 !== Lb ? Lb : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
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
          var bb, ab;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var Ub = this.container.getBoundingClientRect(),
              Ab = Ub.x,
              Mb = Ub.y,
              Tb = Ub.height,
              Eb = this.coordinateList[this.activeIndex].coordinate,
              Yb = (null === (bb = window) || void 0 === bb ? void 0 : bb.scrollX) || 0,
              Bb = (null === (ab = window) || void 0 === ab ? void 0 : ab.scrollY) || 0,
              eb = Ab + Eb + Yb,
              vb = Mb + this.offset.top + Tb / 2 + Bb;
            this.mouseHandlerCallback({
              pageX: eb,
              pageY: vb
            })
          }
        }
      }]) && ua(bb.prototype, ab), Ub && ua(bb, Ub), Object.defineProperty(bb, "prototype", {
        writable: !1
      }), bb;
      var bb, ab, Ub
    }();
    var la = Ub(5913),
      ta = Ub(5975);

    function wa(bb) {
      return wa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, wa(bb)
    }
    var sa = ["x", "y", "top", "left", "width", "height", "className"];

    function ga() {
      return ga = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, ga.apply(this, arguments)
    }

    function Ca(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Va(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != wa(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != wa(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == wa(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Oa(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }
    var ca = function(bb, ab, Ub, Ab, Mb, Tb) {
        return "M".concat(bb, ",").concat(Mb, "v").concat(Ab, "M").concat(Tb, ",").concat(ab, "h").concat(Ub)
      },
      Ja = function(bb) {
        var ab = bb.x,
          Ub = void 0 === ab ? 0 : ab,
          Mb = bb.y,
          Tb = void 0 === Mb ? 0 : Mb,
          Eb = bb.top,
          Yb = void 0 === Eb ? 0 : Eb,
          Bb = bb.left,
          eb = void 0 === Bb ? 0 : Bb,
          vb = bb.width,
          Lb = void 0 === vb ? 0 : vb,
          Pb = bb.height,
          Xb = void 0 === Pb ? 0 : Pb,
          jb = bb.className,
          Rb = function(bb) {
            for (var ab = 1; ab < arguments.length; ab++) {
              var Ub = null != arguments[ab] ? arguments[ab] : {};
              ab % 2 ? Ca(Object(Ub), !0).forEach((function(ab) {
                Va(bb, ab, Ub[ab])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Ca(Object(Ub)).forEach((function(ab) {
                Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
              }))
            }
            return bb
          }({
            x: Ub,
            y: Tb,
            top: Yb,
            left: eb,
            width: Lb,
            height: Xb
          }, Oa(bb, sa));
        return (0, Hb.E)(Ub) && (0, Hb.E)(Tb) && (0, Hb.E)(Lb) && (0, Hb.E)(Xb) && (0, Hb.E)(Yb) && (0, Hb.E)(eb) ? Ab.createElement("path", ga({}, (0, mb.d)(Rb, !0), {
          className: (0, kb.d)("recharts-cross", jb),
          d: ca(Ub, Tb, Lb, Xb, Yb, eb)
        })) : null
      };

    function na(bb) {
      var ab = bb.cx,
        Ub = bb.cy,
        Ab = bb.radius,
        Mb = bb.startAngle,
        Tb = bb.endAngle;
      return {
        points: [(0, Ia.i)(ab, Ub, Ab, Mb), (0, Ia.i)(ab, Ub, Ab, Tb)],
        cx: ab,
        cy: Ub,
        radius: Ab,
        startAngle: Mb,
        endAngle: Tb
      }
    }
    var Sa = Ub(5927);

    function bU(bb, ab, Ub) {
      var Ab, Mb, Tb, Eb;
      if ("horizontal" === bb) Tb = Ab = ab.x, Mb = Ub.top, Eb = Ub.top + Ub.height;
      else if ("vertical" === bb) Eb = Mb = ab.y, Ab = Ub.left, Tb = Ub.left + Ub.width;
      else if (null != ab.cx && null != ab.cy) {
        if ("centric" !== bb) return na(ab);
        var Yb = ab.cx,
          Bb = ab.cy,
          eb = ab.innerRadius,
          vb = ab.outerRadius,
          Lb = ab.angle,
          Pb = (0, Ia.i)(Yb, Bb, eb, Lb),
          Xb = (0, Ia.i)(Yb, Bb, vb, Lb);
        Ab = Pb.x, Mb = Pb.y, Tb = Xb.x, Eb = Xb.y
      }
      return [{
        x: Ab,
        y: Mb
      }, {
        x: Tb,
        y: Eb
      }]
    }

    function aU(bb) {
      return aU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, aU(bb)
    }

    function UU(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function AU(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? UU(Object(Ub), !0).forEach((function(ab) {
          MU(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : UU(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function MU(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != aU(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != aU(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == aU(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function TU(bb) {
      var ab, Ub, Mb, Tb = bb.element,
        Eb = bb.tooltipEventType,
        Yb = bb.isActive,
        Bb = bb.activeCoordinate,
        eb = bb.activePayload,
        vb = bb.offset,
        Lb = bb.activeTooltipIndex,
        Pb = bb.tooltipAxisBandSize,
        Xb = bb.layout,
        jb = bb.chartName,
        Rb = null !== (ab = Tb.props.cursor) && void 0 !== ab ? ab : null === (Ub = Tb.type.defaultProps) || void 0 === Ub ? void 0 : Ub.cursor;
      if (!Tb || !Rb || !Yb || !Bb || "ScatterChart" !== jb && "axis" !== Eb) return null;
      var yb = ta.c;
      if ("ScatterChart" === jb) Mb = Bb, yb = Ja;
      else if ("BarChart" === jb) Mb = function(bb, ab, Ub, Ab) {
        var Mb = Ab / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === bb ? ab.x - Mb : Ub.left + .5,
          y: "horizontal" === bb ? Ub.top + .5 : ab.y - Mb,
          width: "horizontal" === bb ? Ab : Ub.width - 1,
          height: "horizontal" === bb ? Ub.height - 1 : Ab
        }
      }(Xb, Bb, vb, Pb), yb = fb.e;
      else if ("radial" === Xb) {
        var Zb = na(Bb),
          Db = Zb.cx,
          zb = Zb.cy,
          xb = Zb.radius;
        Mb = {
          cx: Db,
          cy: zb,
          startAngle: Zb.startAngle,
          endAngle: Zb.endAngle,
          innerRadius: xb,
          outerRadius: xb
        }, yb = Sa.d
      } else Mb = {
        points: bU(Xb, Bb, vb)
      }, yb = ta.c;
      var ib = AU(AU(AU(AU({
        stroke: "#ccc",
        pointerEvents: "none"
      }, vb), Mb), (0, mb.d)(Rb, !1)), {}, {
        payload: eb,
        payloadIndex: Lb,
        className: (0, kb.d)("recharts-tooltip-cursor", Rb.className)
      });
      return (0, Ab.isValidElement)(Rb) ? (0, Ab.cloneElement)(Rb, ib) : (0, Ab.createElement)(yb, ib)
    }
    var EU = Ub(5948),
      YU = ["item"],
      BU = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function eU(bb) {
      return eU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, eU(bb)
    }

    function vU() {
      return vU = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, vU.apply(this, arguments)
    }

    function LU(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || DU(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PU(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function XU(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, mU(Ab.key), Ab)
      }
    }

    function jU(bb, ab, Ub) {
      return ab = kU(ab),
        function(bb, ab) {
          if (ab && ("object" === eU(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, RU() ? Reflect.construct(ab, Ub || [], kU(bb).constructor) : ab.apply(bb, Ub))
    }

    function RU() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (RU = function() {
        return !!bb
      })()
    }

    function kU(bb) {
      return kU = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, kU(bb)
    }

    function yU(bb, ab) {
      return yU = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, yU(bb, ab)
    }

    function ZU(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return zU(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || DU(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DU(bb, ab) {
      if (bb) {
        if ("string" === typeof bb) return zU(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === Ub && bb.constructor && (Ub = bb.constructor.name), "Map" === Ub || "Set" === Ub ? Array.from(bb) : "Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub) ? zU(bb, ab) : void 0
      }
    }

    function zU(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function xU(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function iU(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? xU(Object(Ub), !0).forEach((function(ab) {
          fU(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : xU(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function fU(bb, ab, Ub) {
      return (ab = mU(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function mU(bb) {
      var ab = function(bb, ab) {
        if ("object" != eU(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != eU(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == eU(ab) ? ab : ab + ""
    }
    var pU = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      NU = {
        width: "100%",
        height: "100%"
      },
      WU = {
        x: 0,
        y: 0
      };

    function HU(bb) {
      return bb
    }
    var IU = function(bb, ab) {
      var Ub = ab.graphicalItems,
        Ab = ab.dataStartIndex,
        Mb = ab.dataEndIndex,
        Tb = (null !== Ub && void 0 !== Ub ? Ub : []).reduce((function(bb, ab) {
          var Ub = ab.props.data;
          return Ub && Ub.length ? [].concat(ZU(bb), ZU(Ub)) : bb
        }), []);
      return Tb.length > 0 ? Tb : bb && bb.length && (0, Hb.E)(Ab) && (0, Hb.E)(Mb) ? bb.slice(Ab, Mb + 1) : []
    };

    function dU(bb) {
      return "number" === bb ? [0, "auto"] : void 0
    }
    var FU = function(bb, ab, Ub, Ab) {
        var Mb = bb.graphicalItems,
          Tb = bb.tooltipAxis,
          Eb = IU(ab, bb);
        return Ub < 0 || !Mb || !Mb.length || Ub >= Eb.length ? null : Mb.reduce((function(Mb, Yb) {
          var Bb, eb, vb = null !== (Bb = Yb.props.data) && void 0 !== Bb ? Bb : ab;
          if (vb && bb.dataStartIndex + bb.dataEndIndex !== 0 && bb.dataEndIndex - bb.dataStartIndex >= Ub && (vb = vb.slice(bb.dataStartIndex, bb.dataEndIndex + 1)), Tb.dataKey && !Tb.allowDuplicatedCategory) {
            var Lb = void 0 === vb ? Eb : vb;
            eb = (0, Hb.f)(Lb, Tb.dataKey, Ab)
          } else eb = vb && vb[Ub] || Eb[Ub];
          return eb ? [].concat(ZU(Mb), [(0, Wb._)(Yb, eb)]) : Mb
        }), [])
      },
      hU = function(bb, ab, Ub, Ab) {
        var Mb = Ab || {
            x: bb.chartX,
            y: bb.chartY
          },
          Tb = function(bb, ab) {
            return "horizontal" === ab ? bb.x : "vertical" === ab ? bb.y : "centric" === ab ? bb.angle : bb.radius
          }(Mb, Ub),
          Eb = bb.orderedTooltipTicks,
          Yb = bb.tooltipAxis,
          Bb = bb.tooltipTicks,
          eb = (0, Wb.e)(Tb, Eb, Bb, Yb);
        if (eb >= 0 && Bb) {
          var vb = Bb[eb] && Bb[eb].value,
            Lb = FU(bb, ab, eb, vb),
            Pb = function(bb, ab, Ub, Ab) {
              var Mb = ab.find((function(bb) {
                return bb && bb.index === Ub
              }));
              if (Mb) {
                if ("horizontal" === bb) return {
                  x: Mb.coordinate,
                  y: Ab.y
                };
                if ("vertical" === bb) return {
                  x: Ab.x,
                  y: Mb.coordinate
                };
                if ("centric" === bb) {
                  var Tb = Mb.coordinate,
                    Eb = Ab.radius;
                  return iU(iU(iU({}, Ab), (0, Ia.i)(Ab.cx, Ab.cy, Eb, Tb)), {}, {
                    angle: Tb,
                    radius: Eb
                  })
                }
                var Yb = Mb.coordinate,
                  Bb = Ab.angle;
                return iU(iU(iU({}, Ab), (0, Ia.i)(Ab.cx, Ab.cy, Yb, Bb)), {}, {
                  angle: Bb,
                  radius: Yb
                })
              }
              return WU
            }(Ub, Eb, eb, Mb);
          return {
            activeTooltipIndex: eb,
            activeLabel: vb,
            activePayload: Lb,
            activeCoordinate: Pb
          }
        }
        return null
      },
      GU = function(bb, ab) {
        var Ub = ab.axes,
          Ab = ab.graphicalItems,
          Mb = ab.axisType,
          Eb = ab.axisIdKey,
          Yb = ab.stackGroups,
          Bb = ab.dataStartIndex,
          vb = ab.dataEndIndex,
          Lb = bb.layout,
          Pb = bb.children,
          Xb = bb.stackOffset,
          jb = (0, Wb.fb)(Lb, Mb);
        return Ub.reduce((function(ab, Ub) {
          var Rb, kb = void 0 !== Ub.type.defaultProps ? iU(iU({}, Ub.type.defaultProps), Ub.props) : Ub.props,
            yb = kb.type,
            Zb = kb.dataKey,
            Db = kb.allowDataOverflow,
            zb = kb.allowDuplicatedCategory,
            xb = kb.scale,
            ib = kb.ticks,
            fb = kb.includeHidden,
            mb = kb[Eb];
          if (ab[mb]) return ab;
          var pb, Nb, Ib, db = IU(bb.data, {
              graphicalItems: Ab.filter((function(bb) {
                var ab;
                return (Eb in bb.props ? bb.props[Eb] : null === (ab = bb.type.defaultProps) || void 0 === ab ? void 0 : ab[Eb]) === mb
              })),
              dataStartIndex: Bb,
              dataEndIndex: vb
            }),
            Fb = db.length;
          (function(bb, ab, Ub) {
            if ("number" === Ub && !0 === ab && Array.isArray(bb)) {
              var Ab = null === bb || void 0 === bb ? void 0 : bb[0],
                Mb = null === bb || void 0 === bb ? void 0 : bb[1];
              if (Ab && Mb && (0, Hb.E)(Ab) && (0, Hb.E)(Mb)) return !0
            }
            return !1
          })(kb.domain, Db, yb) && (pb = (0, Wb.qb)(kb.domain, null, Db), !jb || "number" !== yb && "auto" === xb || (Ib = (0, Wb.E)(db, Zb, "category")));
          var hb = dU(yb);
          if (!pb || 0 === pb.length) {
            var Gb, Qb = null !== (Gb = kb.domain) && void 0 !== Gb ? Gb : hb;
            if (Zb) {
              if (pb = (0, Wb.E)(db, Zb, yb), "category" === yb && jb) {
                var qb = (0, Hb.r)(pb);
                zb && qb ? (Nb = pb, pb = eb()(0, Fb)) : zb || (pb = (0, Wb.hb)(Qb, pb, Ub).reduce((function(bb, ab) {
                  return bb.indexOf(ab) >= 0 ? bb : [].concat(ZU(bb), [ab])
                }), []))
              } else if ("category" === yb) pb = zb ? pb.filter((function(bb) {
                return "" !== bb && !Tb()(bb)
              })) : (0, Wb.hb)(Qb, pb, Ub).reduce((function(bb, ab) {
                return bb.indexOf(ab) >= 0 || "" === ab || Tb()(ab) ? bb : [].concat(ZU(bb), [ab])
              }), []);
              else if ("number" === yb) {
                var ub = (0, Wb.jb)(db, Ab.filter((function(bb) {
                  var ab, Ub, Ab = Eb in bb.props ? bb.props[Eb] : null === (ab = bb.type.defaultProps) || void 0 === ab ? void 0 : ab[Eb],
                    Mb = "hide" in bb.props ? bb.props.hide : null === (Ub = bb.type.defaultProps) || void 0 === Ub ? void 0 : Ub.hide;
                  return Ab === mb && (fb || !Mb)
                })), Zb, Mb, Lb);
                ub && (pb = ub)
              }!jb || "number" !== yb && "auto" === xb || (Ib = (0, Wb.E)(db, Zb, "category"))
            } else pb = jb ? eb()(0, Fb) : Yb && Yb[mb] && Yb[mb].hasStack && "number" === yb ? "expand" === Xb ? [0, 1] : (0, Wb.L)(Yb[mb].stackGroups, Bb, vb) : (0, Wb.I)(db, Ab.filter((function(bb) {
              var ab = Eb in bb.props ? bb.props[Eb] : bb.type.defaultProps[Eb],
                Ub = "hide" in bb.props ? bb.props.hide : bb.type.defaultProps.hide;
              return ab === mb && (fb || !Ub)
            })), yb, Lb, !0);
            if ("number" === yb) pb = Ha(Pb, pb, mb, Mb, ib), Qb && (pb = (0, Wb.qb)(Qb, pb, Db));
            else if ("category" === yb && Qb) {
              var rb = Qb;
              pb.every((function(bb) {
                return rb.indexOf(bb) >= 0
              })) && (pb = rb)
            }
          }
          return iU(iU({}, ab), {}, fU({}, mb, iU(iU({}, kb), {}, {
            axisType: Mb,
            domain: pb,
            categoricalDomain: Ib,
            duplicateDomain: Nb,
            originalDomain: null !== (Rb = kb.domain) && void 0 !== Rb ? Rb : hb,
            isCategorical: jb,
            layout: Lb
          })))
        }), {})
      },
      QU = function(bb, ab) {
        var Ub = ab.axisType,
          Ab = void 0 === Ub ? "xAxis" : Ub,
          Mb = ab.AxisComp,
          Tb = ab.graphicalItems,
          Eb = ab.stackGroups,
          Yb = ab.dataStartIndex,
          Bb = ab.dataEndIndex,
          vb = bb.children,
          Pb = "".concat(Ab, "Id"),
          Xb = (0, mb.e)(vb, Mb),
          jb = {};
        return Xb && Xb.length ? jb = GU(bb, {
          axes: Xb,
          graphicalItems: Tb,
          axisType: Ab,
          axisIdKey: Pb,
          stackGroups: Eb,
          dataStartIndex: Yb,
          dataEndIndex: Bb
        }) : Tb && Tb.length && (jb = function(bb, ab) {
          var Ub = ab.graphicalItems,
            Ab = ab.Axis,
            Mb = ab.axisType,
            Tb = ab.axisIdKey,
            Eb = ab.stackGroups,
            Yb = ab.dataStartIndex,
            Bb = ab.dataEndIndex,
            vb = bb.layout,
            Pb = bb.children,
            Xb = IU(bb.data, {
              graphicalItems: Ub,
              dataStartIndex: Yb,
              dataEndIndex: Bb
            }),
            jb = Xb.length,
            Rb = (0, Wb.fb)(vb, Mb),
            kb = -1;
          return Ub.reduce((function(bb, ab) {
            var yb, Zb = (void 0 !== ab.type.defaultProps ? iU(iU({}, ab.type.defaultProps), ab.props) : ab.props)[Tb],
              Db = dU("number");
            return bb[Zb] ? bb : (kb++, Rb ? yb = eb()(0, jb) : Eb && Eb[Zb] && Eb[Zb].hasStack ? (yb = (0, Wb.L)(Eb[Zb].stackGroups, Yb, Bb), yb = Ha(Pb, yb, Zb, Mb)) : (yb = (0, Wb.qb)(Db, (0, Wb.I)(Xb, Ub.filter((function(bb) {
              var ab, Ub, Ab = Tb in bb.props ? bb.props[Tb] : null === (ab = bb.type.defaultProps) || void 0 === ab ? void 0 : ab[Tb],
                Mb = "hide" in bb.props ? bb.props.hide : null === (Ub = bb.type.defaultProps) || void 0 === Ub ? void 0 : Ub.hide;
              return Ab === Zb && !Mb
            })), "number", vb), Ab.defaultProps.allowDataOverflow), yb = Ha(Pb, yb, Zb, Mb)), iU(iU({}, bb), {}, fU({}, Zb, iU(iU({
              axisType: Mb
            }, Ab.defaultProps), {}, {
              hide: !0,
              orientation: Lb()(pU, "".concat(Mb, ".").concat(kb % 2), null),
              domain: yb,
              originalDomain: Db,
              isCategorical: Rb,
              layout: vb
            }))))
          }), {})
        }(bb, {
          Axis: Mb,
          graphicalItems: Tb,
          axisType: Ab,
          axisIdKey: Pb,
          stackGroups: Eb,
          dataStartIndex: Yb,
          dataEndIndex: Bb
        })), jb
      },
      qU = function(bb) {
        var ab = bb.children,
          Ub = bb.defaultShowTooltip,
          Ab = (0, mb.g)(ab, Vb),
          Mb = 0,
          Tb = 0;
        return bb.data && 0 !== bb.data.length && (Tb = bb.data.length - 1), Ab && Ab.props && (Ab.props.startIndex >= 0 && (Mb = Ab.props.startIndex), Ab.props.endIndex >= 0 && (Tb = Ab.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: Mb,
          dataEndIndex: Tb,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(Ub)
        }
      },
      uU = function(bb) {
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
      rU = function(bb, ab) {
        return "xAxis" === ab ? bb[ab].width : "yAxis" === ab ? bb[ab].height : void 0
      },
      KU = function(bb) {
        var ab = bb.chartName,
          Ub = bb.GraphicalChild,
          Mb = bb.defaultTooltipEventType,
          Eb = void 0 === Mb ? "axis" : Mb,
          Bb = bb.validateTooltipEventTypes,
          eb = void 0 === Bb ? ["axis"] : Bb,
          vb = bb.axisComponents,
          Pb = bb.legendContent,
          jb = bb.formatAxisMap,
          pb = bb.defaultProps,
          Nb = function(bb, ab) {
            var Ub = ab.graphicalItems,
              Ab = ab.stackGroups,
              Mb = ab.offset,
              Eb = ab.updateId,
              Yb = ab.dataStartIndex,
              Bb = ab.dataEndIndex,
              eb = bb.barSize,
              Lb = bb.layout,
              Pb = bb.barGap,
              Xb = bb.barCategoryGap,
              jb = bb.maxBarSize,
              Rb = uU(Lb),
              kb = Rb.numericAxisName,
              Zb = Rb.cateAxisName,
              Db = function(bb) {
                return !(!bb || !bb.length) && bb.some((function(bb) {
                  var ab = (0, mb.i)(bb && bb.type);
                  return ab && ab.indexOf("Bar") >= 0
                }))
              }(Ub),
              zb = [];
            return Ub.forEach((function(Ub, Rb) {
              var xb = IU(bb.data, {
                  graphicalItems: [Ub],
                  dataStartIndex: Yb,
                  dataEndIndex: Bb
                }),
                ib = void 0 !== Ub.type.defaultProps ? iU(iU({}, Ub.type.defaultProps), Ub.props) : Ub.props,
                fb = ib.dataKey,
                pb = ib.maxBarSize,
                Nb = ib["".concat(kb, "Id")],
                Hb = ib["".concat(Zb, "Id")],
                Ib = vb.reduce((function(bb, Ub) {
                  var Ab = ab["".concat(Ub.axisType, "Map")],
                    Mb = ib["".concat(Ub.axisType, "Id")];
                  Ab && Ab[Mb] || "zAxis" === Ub.axisType || (0, yb.b)(!1);
                  var Tb = Ab[Mb];
                  return iU(iU({}, bb), {}, fU(fU({}, Ub.axisType, Tb), "".concat(Ub.axisType, "Ticks"), (0, Wb.V)(Tb)))
                }), {}),
                db = Ib[Zb],
                Fb = Ib["".concat(Zb, "Ticks")],
                hb = Ab && Ab[Nb] && Ab[Nb].hasStack && (0, Wb.S)(Ub, Ab[Nb].stackGroups),
                Gb = (0, mb.i)(Ub.type).indexOf("Bar") >= 0,
                Qb = (0, Wb.o)(db, Fb),
                qb = [],
                ub = Db && (0, Wb.v)({
                  barSize: eb,
                  stackGroups: Ab,
                  totalSize: rU(Ib, Zb)
                });
              if (Gb) {
                var rb, Kb, ob = Tb()(pb) ? jb : pb,
                  lb = null !== (rb = null !== (Kb = (0, Wb.o)(db, Fb, !0)) && void 0 !== Kb ? Kb : ob) && void 0 !== rb ? rb : 0;
                qb = (0, Wb.r)({
                  barGap: Pb,
                  barCategoryGap: Xb,
                  bandSize: lb !== Qb ? lb : Qb,
                  sizeList: ub[Hb],
                  maxBarSize: ob
                }), lb !== Qb && (qb = qb.map((function(bb) {
                  return iU(iU({}, bb), {}, {
                    position: iU(iU({}, bb.position), {}, {
                      offset: bb.position.offset - lb / 2
                    })
                  })
                })))
              }
              var tb = Ub && Ub.type && Ub.type.getComposedData;
              tb && zb.push({
                props: iU(iU({}, tb(iU(iU({}, Ib), {}, {
                  displayedData: xb,
                  props: bb,
                  dataKey: fb,
                  item: Ub,
                  bandSize: Qb,
                  barPosition: qb,
                  offset: Mb,
                  stackedData: hb,
                  layout: Lb,
                  dataStartIndex: Yb,
                  dataEndIndex: Bb
                }))), {}, fU(fU(fU({
                  key: Ub.key || "item-".concat(Rb)
                }, kb, Ib[kb]), Zb, Ib[Zb]), "animationId", Eb)),
                childIndex: (0, mb.q)(Ub, bb.children),
                item: Ub
              })
            })), zb
          },
          Ib = function(bb, Ab) {
            var Mb = bb.props,
              Tb = bb.dataStartIndex,
              Eb = bb.dataEndIndex,
              Yb = bb.updateId;
            if (!(0, mb.x)({
                props: Mb
              })) return null;
            var Bb = Mb.children,
              eb = Mb.layout,
              Pb = Mb.stackOffset,
              Rb = Mb.data,
              kb = Mb.reverseStackOrder,
              yb = uU(eb),
              Zb = yb.numericAxisName,
              Db = yb.cateAxisName,
              zb = (0, mb.e)(Bb, Ub),
              ib = (0, Wb.R)(Rb, zb, "".concat(Zb, "Id"), "".concat(Db, "Id"), Pb, kb),
              fb = vb.reduce((function(bb, ab) {
                var Ub = "".concat(ab.axisType, "Map");
                return iU(iU({}, bb), {}, fU({}, Ub, QU(Mb, iU(iU({}, ab), {}, {
                  graphicalItems: zb,
                  stackGroups: ab.axisType === Zb && ib,
                  dataStartIndex: Tb,
                  dataEndIndex: Eb
                }))))
              }), {}),
              pb = function(bb, ab) {
                var Ub = bb.props,
                  Ab = bb.graphicalItems,
                  Mb = bb.xAxisMap,
                  Tb = void 0 === Mb ? {} : Mb,
                  Eb = bb.yAxisMap,
                  Yb = void 0 === Eb ? {} : Eb,
                  Bb = Ub.width,
                  eb = Ub.height,
                  vb = Ub.children,
                  Pb = Ub.margin || {},
                  Xb = (0, mb.g)(vb, Vb),
                  jb = (0, mb.g)(vb, xb.d),
                  Rb = Object.keys(Yb).reduce((function(bb, ab) {
                    var Ub = Yb[ab],
                      Ab = Ub.orientation;
                    return Ub.mirror || Ub.hide ? bb : iU(iU({}, bb), {}, fU({}, Ab, bb[Ab] + Ub.width))
                  }), {
                    left: Pb.left || 0,
                    right: Pb.right || 0
                  }),
                  kb = Object.keys(Tb).reduce((function(bb, ab) {
                    var Ub = Tb[ab],
                      Ab = Ub.orientation;
                    return Ub.mirror || Ub.hide ? bb : iU(iU({}, bb), {}, fU({}, Ab, Lb()(bb, "".concat(Ab)) + Ub.height))
                  }), {
                    top: Pb.top || 0,
                    bottom: Pb.bottom || 0
                  }),
                  yb = iU(iU({}, kb), Rb),
                  Zb = yb.bottom;
                Xb && (yb.bottom += Xb.props.height || Vb.defaultProps.height), jb && ab && (yb = (0, Wb.c)(yb, Ab, Ub, ab));
                var Db = Bb - yb.left - yb.right,
                  zb = eb - yb.top - yb.bottom;
                return iU(iU({
                  brushBottom: Zb
                }, yb), {}, {
                  width: Math.max(Db, 0),
                  height: Math.max(zb, 0)
                })
              }(iU(iU({}, fb), {}, {
                props: Mb,
                graphicalItems: zb
              }), null === Ab || void 0 === Ab ? void 0 : Ab.legendBBox);
            Object.keys(fb).forEach((function(bb) {
              fb[bb] = jb(Mb, fb[bb], pb, bb.replace("Map", ""), ab)
            }));
            var Ib = function(bb) {
                var ab = (0, Hb.j)(bb),
                  Ub = (0, Wb.V)(ab, !1, !0);
                return {
                  tooltipTicks: Ub,
                  orderedTooltipTicks: Xb()(Ub, (function(bb) {
                    return bb.coordinate
                  })),
                  tooltipAxis: ab,
                  tooltipAxisBandSize: (0, Wb.o)(ab, Ub)
                }
              }(fb["".concat(Db, "Map")]),
              db = Nb(Mb, iU(iU({}, fb), {}, {
                dataStartIndex: Tb,
                dataEndIndex: Eb,
                updateId: Yb,
                graphicalItems: zb,
                stackGroups: ib,
                offset: pb
              }));
            return iU(iU({
              formattedGraphicalItems: db,
              graphicalItems: zb,
              offset: pb,
              stackGroups: ib
            }, Ib), fb)
          },
          db = function(bb) {
            function Ub(bb) {
              var Mb, Eb, Bb;
              return function(bb, ab) {
                if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
              }(this, Ub), fU(Bb = jU(this, Ub, [bb]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), fU(Bb, "accessibilityManager", new oa), fU(Bb, "handleLegendBBoxUpdate", (function(bb) {
                if (bb) {
                  var ab = Bb.state,
                    Ub = ab.dataStartIndex,
                    Ab = ab.dataEndIndex,
                    Mb = ab.updateId;
                  Bb.setState(iU({
                    legendBBox: bb
                  }, Ib({
                    props: Bb.props,
                    dataStartIndex: Ub,
                    dataEndIndex: Ab,
                    updateId: Mb
                  }, iU(iU({}, Bb.state), {}, {
                    legendBBox: bb
                  }))))
                }
              })), fU(Bb, "handleReceiveSyncEvent", (function(bb, ab, Ub) {
                if (Bb.props.syncId === bb) {
                  if (Ub === Bb.eventEmitterSymbol && "function" !== typeof Bb.props.syncMethod) return;
                  Bb.applySyncEvent(ab)
                }
              })), fU(Bb, "handleBrushChange", (function(bb) {
                var ab = bb.startIndex,
                  Ub = bb.endIndex;
                if (ab !== Bb.state.dataStartIndex || Ub !== Bb.state.dataEndIndex) {
                  var Ab = Bb.state.updateId;
                  Bb.setState((function() {
                    return iU({
                      dataStartIndex: ab,
                      dataEndIndex: Ub
                    }, Ib({
                      props: Bb.props,
                      dataStartIndex: ab,
                      dataEndIndex: Ub,
                      updateId: Ab
                    }, Bb.state))
                  })), Bb.triggerSyncEvent({
                    dataStartIndex: ab,
                    dataEndIndex: Ub
                  })
                }
              })), fU(Bb, "handleMouseEnter", (function(bb) {
                var ab = Bb.getMouseInfo(bb);
                if (ab) {
                  var Ub = iU(iU({}, ab), {}, {
                    isTooltipActive: !0
                  });
                  Bb.setState(Ub), Bb.triggerSyncEvent(Ub);
                  var Ab = Bb.props.onMouseEnter;
                  Yb()(Ab) && Ab(Ub, bb)
                }
              })), fU(Bb, "triggeredAfterMouseMove", (function(bb) {
                var ab = Bb.getMouseInfo(bb),
                  Ub = ab ? iU(iU({}, ab), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                Bb.setState(Ub), Bb.triggerSyncEvent(Ub);
                var Ab = Bb.props.onMouseMove;
                Yb()(Ab) && Ab(Ub, bb)
              })), fU(Bb, "handleItemMouseEnter", (function(bb) {
                Bb.setState((function() {
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
              })), fU(Bb, "handleItemMouseLeave", (function() {
                Bb.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), fU(Bb, "handleMouseMove", (function(bb) {
                bb.persist(), Bb.throttleTriggeredAfterMouseMove(bb)
              })), fU(Bb, "handleMouseLeave", (function(bb) {
                Bb.throttleTriggeredAfterMouseMove.cancel();
                var ab = {
                  isTooltipActive: !1
                };
                Bb.setState(ab), Bb.triggerSyncEvent(ab);
                var Ub = Bb.props.onMouseLeave;
                Yb()(Ub) && Ub(ab, bb)
              })), fU(Bb, "handleOuterEvent", (function(bb) {
                var ab, Ub = (0, mb.k)(bb),
                  Ab = Lb()(Bb.props, "".concat(Ub));
                Ub && Yb()(Ab) && Ab(null !== (ab = /.*touch.*/i.test(Ub) ? Bb.getMouseInfo(bb.changedTouches[0]) : Bb.getMouseInfo(bb)) && void 0 !== ab ? ab : {}, bb)
              })), fU(Bb, "handleClick", (function(bb) {
                var ab = Bb.getMouseInfo(bb);
                if (ab) {
                  var Ub = iU(iU({}, ab), {}, {
                    isTooltipActive: !0
                  });
                  Bb.setState(Ub), Bb.triggerSyncEvent(Ub);
                  var Ab = Bb.props.onClick;
                  Yb()(Ab) && Ab(Ub, bb)
                }
              })), fU(Bb, "handleMouseDown", (function(bb) {
                var ab = Bb.props.onMouseDown;
                Yb()(ab) && ab(Bb.getMouseInfo(bb), bb)
              })), fU(Bb, "handleMouseUp", (function(bb) {
                var ab = Bb.props.onMouseUp;
                Yb()(ab) && ab(Bb.getMouseInfo(bb), bb)
              })), fU(Bb, "handleTouchMove", (function(bb) {
                null != bb.changedTouches && bb.changedTouches.length > 0 && Bb.throttleTriggeredAfterMouseMove(bb.changedTouches[0])
              })), fU(Bb, "handleTouchStart", (function(bb) {
                null != bb.changedTouches && bb.changedTouches.length > 0 && Bb.handleMouseDown(bb.changedTouches[0])
              })), fU(Bb, "handleTouchEnd", (function(bb) {
                null != bb.changedTouches && bb.changedTouches.length > 0 && Bb.handleMouseUp(bb.changedTouches[0])
              })), fU(Bb, "handleDoubleClick", (function(bb) {
                var ab = Bb.props.onDoubleClick;
                Yb()(ab) && ab(Bb.getMouseInfo(bb), bb)
              })), fU(Bb, "handleContextMenu", (function(bb) {
                var ab = Bb.props.onContextMenu;
                Yb()(ab) && ab(Bb.getMouseInfo(bb), bb)
              })), fU(Bb, "triggerSyncEvent", (function(bb) {
                void 0 !== Bb.props.syncId && ha.emit(Ga, Bb.props.syncId, bb, Bb.eventEmitterSymbol)
              })), fU(Bb, "applySyncEvent", (function(bb) {
                var ab = Bb.props,
                  Ub = ab.layout,
                  Ab = ab.syncMethod,
                  Mb = Bb.state.updateId,
                  Tb = bb.dataStartIndex,
                  Eb = bb.dataEndIndex;
                if (void 0 !== bb.dataStartIndex || void 0 !== bb.dataEndIndex) Bb.setState(iU({
                  dataStartIndex: Tb,
                  dataEndIndex: Eb
                }, Ib({
                  props: Bb.props,
                  dataStartIndex: Tb,
                  dataEndIndex: Eb,
                  updateId: Mb
                }, Bb.state)));
                else if (void 0 !== bb.activeTooltipIndex) {
                  var Yb = bb.chartX,
                    eb = bb.chartY,
                    vb = bb.activeTooltipIndex,
                    Lb = Bb.state,
                    Pb = Lb.offset,
                    Xb = Lb.tooltipTicks;
                  if (!Pb) return;
                  if ("function" === typeof Ab) vb = Ab(Xb, bb);
                  else if ("value" === Ab) {
                    vb = -1;
                    for (var jb = 0; jb < Xb.length; jb++)
                      if (Xb[jb].value === bb.activeLabel) {
                        vb = jb;
                        break
                      }
                  }
                  var Rb = iU(iU({}, Pb), {}, {
                      x: Pb.left,
                      y: Pb.top
                    }),
                    kb = Math.min(Yb, Rb.x + Rb.width),
                    yb = Math.min(eb, Rb.y + Rb.height),
                    Zb = Xb[vb] && Xb[vb].value,
                    Db = FU(Bb.state, Bb.props.data, vb),
                    zb = Xb[vb] ? {
                      x: "horizontal" === Ub ? Xb[vb].coordinate : kb,
                      y: "horizontal" === Ub ? yb : Xb[vb].coordinate
                    } : WU;
                  Bb.setState(iU(iU({}, bb), {}, {
                    activeLabel: Zb,
                    activeCoordinate: zb,
                    activePayload: Db,
                    activeTooltipIndex: vb
                  }))
                } else Bb.setState(bb)
              })), fU(Bb, "renderCursor", (function(bb) {
                var Ub, Mb = Bb.state,
                  Tb = Mb.isTooltipActive,
                  Eb = Mb.activeCoordinate,
                  Yb = Mb.activePayload,
                  eb = Mb.offset,
                  vb = Mb.activeTooltipIndex,
                  Lb = Mb.tooltipAxisBandSize,
                  Pb = Bb.getTooltipEventType(),
                  Xb = null !== (Ub = bb.props.active) && void 0 !== Ub ? Ub : Tb,
                  jb = Bb.props.layout,
                  Rb = bb.key || "_recharts-cursor";
                return Ab.createElement(TU, {
                  key: Rb,
                  activeCoordinate: Eb,
                  activePayload: Yb,
                  activeTooltipIndex: vb,
                  chartName: ab,
                  element: bb,
                  isActive: Xb,
                  layout: jb,
                  offset: eb,
                  tooltipAxisBandSize: Lb,
                  tooltipEventType: Pb
                })
              })), fU(Bb, "renderPolarAxis", (function(bb, ab, Ub) {
                var Mb = Lb()(bb, "type.axisType"),
                  Tb = Lb()(Bb.state, "".concat(Mb, "Map")),
                  Eb = bb.type.defaultProps,
                  Yb = void 0 !== Eb ? iU(iU({}, Eb), bb.props) : bb.props,
                  eb = Tb && Tb[Yb["".concat(Mb, "Id")]];
                return (0, Ab.cloneElement)(bb, iU(iU({}, eb), {}, {
                  className: (0, kb.d)(Mb, eb.className),
                  key: bb.key || "".concat(ab, "-").concat(Ub),
                  ticks: (0, Wb.V)(eb, !0)
                }))
              })), fU(Bb, "renderPolarGrid", (function(bb) {
                var ab = bb.props,
                  Ub = ab.radialLines,
                  Mb = ab.polarAngles,
                  Tb = ab.polarRadius,
                  Eb = Bb.state,
                  Yb = Eb.radiusAxisMap,
                  eb = Eb.angleAxisMap,
                  vb = (0, Hb.j)(Yb),
                  Lb = (0, Hb.j)(eb),
                  Pb = Lb.cx,
                  Xb = Lb.cy,
                  jb = Lb.innerRadius,
                  Rb = Lb.outerRadius;
                return (0, Ab.cloneElement)(bb, {
                  polarAngles: Array.isArray(Mb) ? Mb : (0, Wb.V)(Lb, !0).map((function(bb) {
                    return bb.coordinate
                  })),
                  polarRadius: Array.isArray(Tb) ? Tb : (0, Wb.V)(vb, !0).map((function(bb) {
                    return bb.coordinate
                  })),
                  cx: Pb,
                  cy: Xb,
                  innerRadius: jb,
                  outerRadius: Rb,
                  key: bb.key || "polar-grid",
                  radialLines: Ub
                })
              })), fU(Bb, "renderLegend", (function() {
                var bb = Bb.state.formattedGraphicalItems,
                  ab = Bb.props,
                  Ub = ab.children,
                  Mb = ab.width,
                  Tb = ab.height,
                  Eb = Bb.props.margin || {},
                  Yb = Mb - (Eb.left || 0) - (Eb.right || 0),
                  eb = (0, cb.c)({
                    children: Ub,
                    formattedGraphicalItems: bb,
                    legendWidth: Yb,
                    legendContent: Pb
                  });
                if (!eb) return null;
                var vb = eb.item,
                  Lb = PU(eb, YU);
                return (0, Ab.cloneElement)(vb, iU(iU({}, Lb), {}, {
                  chartWidth: Mb,
                  chartHeight: Tb,
                  margin: Eb,
                  onBBoxUpdate: Bb.handleLegendBBoxUpdate
                }))
              })), fU(Bb, "renderTooltip", (function() {
                var bb, ab = Bb.props,
                  Ub = ab.children,
                  Mb = ab.accessibilityLayer,
                  Tb = (0, mb.g)(Ub, zb.b);
                if (!Tb) return null;
                var Eb = Bb.state,
                  Yb = Eb.isTooltipActive,
                  eb = Eb.activeCoordinate,
                  vb = Eb.activePayload,
                  Lb = Eb.activeLabel,
                  Pb = Eb.offset,
                  Xb = null !== (bb = Tb.props.active) && void 0 !== bb ? bb : Yb;
                return (0, Ab.cloneElement)(Tb, {
                  viewBox: iU(iU({}, Pb), {}, {
                    x: Pb.left,
                    y: Pb.top
                  }),
                  active: Xb,
                  label: Lb,
                  payload: Xb ? vb : [],
                  coordinate: eb,
                  accessibilityLayer: Mb
                })
              })), fU(Bb, "renderBrush", (function(bb) {
                var ab = Bb.props,
                  Ub = ab.margin,
                  Mb = ab.data,
                  Tb = Bb.state,
                  Eb = Tb.offset,
                  Yb = Tb.dataStartIndex,
                  eb = Tb.dataEndIndex,
                  vb = Tb.updateId;
                return (0, Ab.cloneElement)(bb, {
                  key: bb.key || "_recharts-brush",
                  onChange: (0, Wb.j)(Bb.handleBrushChange, bb.props.onChange),
                  data: Mb,
                  x: (0, Hb.E)(bb.props.x) ? bb.props.x : Eb.left,
                  y: (0, Hb.E)(bb.props.y) ? bb.props.y : Eb.top + Eb.height + Eb.brushBottom - (Ub.bottom || 0),
                  width: (0, Hb.E)(bb.props.width) ? bb.props.width : Eb.width,
                  startIndex: Yb,
                  endIndex: eb,
                  updateId: "brush-".concat(vb)
                })
              })), fU(Bb, "renderReferenceElement", (function(bb, ab, Ub) {
                if (!bb) return null;
                var Mb = Bb.clipPathId,
                  Tb = Bb.state,
                  Eb = Tb.xAxisMap,
                  Yb = Tb.yAxisMap,
                  eb = Tb.offset,
                  vb = bb.type.defaultProps || {},
                  Lb = bb.props,
                  Pb = Lb.xAxisId,
                  Xb = void 0 === Pb ? vb.xAxisId : Pb,
                  jb = Lb.yAxisId,
                  Rb = void 0 === jb ? vb.yAxisId : jb;
                return (0, Ab.cloneElement)(bb, {
                  key: bb.key || "".concat(ab, "-").concat(Ub),
                  xAxis: Eb[Xb],
                  yAxis: Yb[Rb],
                  viewBox: {
                    x: eb.left,
                    y: eb.top,
                    width: eb.width,
                    height: eb.height
                  },
                  clipPathId: Mb
                })
              })), fU(Bb, "renderActivePoints", (function(bb) {
                var ab = bb.item,
                  Ab = bb.activePoint,
                  Mb = bb.basePoint,
                  Tb = bb.childIndex,
                  Eb = bb.isRange,
                  Yb = [],
                  Bb = ab.props.key,
                  eb = void 0 !== ab.item.type.defaultProps ? iU(iU({}, ab.item.type.defaultProps), ab.item.props) : ab.item.props,
                  vb = eb.activeDot,
                  Lb = iU(iU({
                    index: Tb,
                    dataKey: eb.dataKey,
                    cx: Ab.x,
                    cy: Ab.y,
                    r: 4,
                    fill: (0, Wb.N)(ab.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: Ab.payload,
                    value: Ab.value
                  }, (0, mb.d)(vb, !1)), (0, Qa.o)(vb));
                return Yb.push(Ub.renderActiveDot(vb, Lb, "".concat(Bb, "-activePoint-").concat(Tb))), Mb ? Yb.push(Ub.renderActiveDot(vb, iU(iU({}, Lb), {}, {
                  cx: Mb.x,
                  cy: Mb.y
                }), "".concat(Bb, "-basePoint-").concat(Tb))) : Eb && Yb.push(null), Yb
              })), fU(Bb, "renderGraphicChild", (function(bb, ab, Ub) {
                var Mb = Bb.filterFormatItem(bb, ab, Ub);
                if (!Mb) return null;
                var Eb = Bb.getTooltipEventType(),
                  Yb = Bb.state,
                  eb = Yb.isTooltipActive,
                  vb = Yb.tooltipAxis,
                  Lb = Yb.activeTooltipIndex,
                  Pb = Yb.activeLabel,
                  Xb = Bb.props.children,
                  jb = (0, mb.g)(Xb, zb.b),
                  Rb = Mb.props,
                  kb = Rb.points,
                  yb = Rb.isRange,
                  Zb = Rb.baseLine,
                  Db = void 0 !== Mb.item.type.defaultProps ? iU(iU({}, Mb.item.type.defaultProps), Mb.item.props) : Mb.item.props,
                  xb = Db.activeDot,
                  ib = Db.hide,
                  fb = Db.activeBar,
                  pb = Db.activeShape,
                  Nb = Boolean(!ib && eb && jb && (xb || fb || pb)),
                  Ib = {};
                "axis" !== Eb && jb && "click" === jb.props.trigger ? Ib = {
                  onClick: (0, Wb.j)(Bb.handleItemMouseEnter, bb.props.onClick)
                } : "axis" !== Eb && (Ib = {
                  onMouseLeave: (0, Wb.j)(Bb.handleItemMouseLeave, bb.props.onMouseLeave),
                  onMouseEnter: (0, Wb.j)(Bb.handleItemMouseEnter, bb.props.onMouseEnter)
                });
                var db = (0, Ab.cloneElement)(bb, iU(iU({}, Mb.props), Ib));
                if (Nb) {
                  if (!(Lb >= 0)) {
                    var Fb, hb = (null !== (Fb = Bb.getItemByXY(Bb.state.activeCoordinate)) && void 0 !== Fb ? Fb : {
                        graphicalItem: db
                      }).graphicalItem,
                      Gb = hb.item,
                      Qb = void 0 === Gb ? bb : Gb,
                      qb = hb.childIndex,
                      ub = iU(iU(iU({}, Mb.props), Ib), {}, {
                        activeIndex: qb
                      });
                    return [(0, Ab.cloneElement)(Qb, ub), null, null]
                  }
                  var rb, Kb;
                  if (vb.dataKey && !vb.allowDuplicatedCategory) {
                    var ob = "function" === typeof vb.dataKey ? function(bb) {
                      return "function" === typeof vb.dataKey ? vb.dataKey(bb.payload) : null
                    } : "payload.".concat(vb.dataKey.toString());
                    rb = (0, Hb.f)(kb, ob, Pb), Kb = yb && Zb && (0, Hb.f)(Zb, ob, Pb)
                  } else rb = null === kb || void 0 === kb ? void 0 : kb[Lb], Kb = yb && Zb && Zb[Lb];
                  if (pb || fb) {
                    var lb = void 0 !== bb.props.activeIndex ? bb.props.activeIndex : Lb;
                    return [(0, Ab.cloneElement)(bb, iU(iU(iU({}, Mb.props), Ib), {}, {
                      activeIndex: lb
                    })), null, null]
                  }
                  if (!Tb()(rb)) return [db].concat(ZU(Bb.renderActivePoints({
                    item: Mb,
                    activePoint: rb,
                    basePoint: Kb,
                    childIndex: Lb,
                    isRange: yb
                  })))
                }
                return yb ? [db, null, null] : [db, null]
              })), fU(Bb, "renderCustomized", (function(bb, ab, Ub) {
                return (0, Ab.cloneElement)(bb, iU(iU({
                  key: "recharts-customized-".concat(Ub)
                }, Bb.props), Bb.state))
              })), fU(Bb, "renderMap", {
                CartesianGrid: {
                  handler: HU,
                  once: !0
                },
                ReferenceArea: {
                  handler: Bb.renderReferenceElement
                },
                ReferenceLine: {
                  handler: HU
                },
                ReferenceDot: {
                  handler: Bb.renderReferenceElement
                },
                XAxis: {
                  handler: HU
                },
                YAxis: {
                  handler: HU
                },
                Brush: {
                  handler: Bb.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: Bb.renderGraphicChild
                },
                Line: {
                  handler: Bb.renderGraphicChild
                },
                Area: {
                  handler: Bb.renderGraphicChild
                },
                Radar: {
                  handler: Bb.renderGraphicChild
                },
                RadialBar: {
                  handler: Bb.renderGraphicChild
                },
                Scatter: {
                  handler: Bb.renderGraphicChild
                },
                Pie: {
                  handler: Bb.renderGraphicChild
                },
                Funnel: {
                  handler: Bb.renderGraphicChild
                },
                Tooltip: {
                  handler: Bb.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: Bb.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: Bb.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: Bb.renderPolarAxis
                },
                Customized: {
                  handler: Bb.renderCustomized
                }
              }), Bb.clipPathId = "".concat(null !== (Mb = bb.id) && void 0 !== Mb ? Mb : (0, Hb.J)("recharts"), "-clip"), Bb.throttleTriggeredAfterMouseMove = Rb()(Bb.triggeredAfterMouseMove, null !== (Eb = bb.throttleDelay) && void 0 !== Eb ? Eb : 1e3 / 60), Bb.state = {}, Bb
            }
            return function(bb, ab) {
              if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
              bb.prototype = Object.create(ab && ab.prototype, {
                constructor: {
                  value: bb,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(bb, "prototype", {
                writable: !1
              }), ab && yU(bb, ab)
            }(Ub, bb), Mb = Ub, Bb = [{
              key: "componentDidMount",
              value: function() {
                var bb, ab;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (bb = this.props.margin.left) && void 0 !== bb ? bb : 0,
                    top: null !== (ab = this.props.margin.top) && void 0 !== ab ? ab : 0
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
                  ab = bb.children,
                  Ub = bb.data,
                  Ab = bb.height,
                  Mb = bb.layout,
                  Tb = (0, mb.g)(ab, zb.b);
                if (Tb) {
                  var Eb = Tb.props.defaultIndex;
                  if (!("number" !== typeof Eb || Eb < 0 || Eb > this.state.tooltipTicks.length - 1)) {
                    var Yb = this.state.tooltipTicks[Eb] && this.state.tooltipTicks[Eb].value,
                      Bb = FU(this.state, Ub, Eb, Yb),
                      eb = this.state.tooltipTicks[Eb].coordinate,
                      vb = (this.state.offset.top + Ab) / 2,
                      Lb = "horizontal" === Mb ? {
                        x: eb,
                        y: vb
                      } : {
                        y: eb,
                        x: vb
                      },
                      Pb = this.state.formattedGraphicalItems.find((function(bb) {
                        return "Scatter" === bb.item.type.name
                      }));
                    Pb && (Lb = iU(iU({}, Lb), Pb.props.points[Eb].tooltipPosition), Bb = Pb.props.points[Eb].tooltipPayload);
                    var Xb = {
                      activeTooltipIndex: Eb,
                      isTooltipActive: !0,
                      activeLabel: Yb,
                      activePayload: Bb,
                      activeCoordinate: Lb
                    };
                    this.setState(Xb), this.renderCursor(Tb), this.accessibilityManager.setIndex(Eb)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(bb, ab) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== ab.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== bb.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== bb.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (Ub = this.props.margin.left) && void 0 !== Ub ? Ub : 0,
                    top: null !== (Ab = this.props.margin.top) && void 0 !== Ab ? Ab : 0
                  }
                }), null) : null;
                var Ub, Ab
              }
            }, {
              key: "componentDidUpdate",
              value: function(bb) {
                (0, mb.p)([(0, mb.g)(bb.children, zb.b)], [(0, mb.g)(this.props.children, zb.b)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var bb = (0, mb.g)(this.props.children, zb.b);
                if (bb && "boolean" === typeof bb.props.shared) {
                  var ab = bb.props.shared ? "axis" : "item";
                  return eb.indexOf(ab) >= 0 ? ab : Eb
                }
                return Eb
              }
            }, {
              key: "getMouseInfo",
              value: function(bb) {
                if (!this.container) return null;
                var ab = this.container,
                  Ub = ab.getBoundingClientRect(),
                  Ab = (0, Ob.d)(Ub),
                  Mb = {
                    chartX: Math.round(bb.pageX - Ab.left),
                    chartY: Math.round(bb.pageY - Ab.top)
                  },
                  Tb = Ub.width / ab.offsetWidth || 1,
                  Eb = this.inRange(Mb.chartX, Mb.chartY, Tb);
                if (!Eb) return null;
                var Yb = this.state,
                  Bb = Yb.xAxisMap,
                  eb = Yb.yAxisMap,
                  vb = this.getTooltipEventType(),
                  Lb = hU(this.state, this.props.data, this.props.layout, Eb);
                if ("axis" !== vb && Bb && eb) {
                  var Pb = (0, Hb.j)(Bb).scale,
                    Xb = (0, Hb.j)(eb).scale,
                    jb = Pb && Pb.invert ? Pb.invert(Mb.chartX) : null,
                    Rb = Xb && Xb.invert ? Xb.invert(Mb.chartY) : null;
                  return iU(iU({}, Mb), {}, {
                    xValue: jb,
                    yValue: Rb
                  }, Lb)
                }
                return Lb ? iU(iU({}, Mb), Lb) : null
              }
            }, {
              key: "inRange",
              value: function(bb, ab) {
                var Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  Ab = this.props.layout,
                  Mb = bb / Ub,
                  Tb = ab / Ub;
                if ("horizontal" === Ab || "vertical" === Ab) {
                  var Eb = this.state.offset;
                  return Mb >= Eb.left && Mb <= Eb.left + Eb.width && Tb >= Eb.top && Tb <= Eb.top + Eb.height ? {
                    x: Mb,
                    y: Tb
                  } : null
                }
                var Yb = this.state,
                  Bb = Yb.angleAxisMap,
                  eb = Yb.radiusAxisMap;
                if (Bb && eb) {
                  var vb = (0, Hb.j)(Bb);
                  return (0, Ia.f)({
                    x: Mb,
                    y: Tb
                  }, vb)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var bb = this.props.children,
                  ab = this.getTooltipEventType(),
                  Ub = (0, mb.g)(bb, zb.b),
                  Ab = {};
                return Ub && "axis" === ab && (Ab = "click" === Ub.props.trigger ? {
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
                }), iU(iU({}, (0, Qa.o)(this.props, this.handleOuterEvent)), Ab)
              }
            }, {
              key: "addListener",
              value: function() {
                ha.on(Ga, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                ha.removeListener(Ga, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(bb, ab, Ub) {
                for (var Ab = this.state.formattedGraphicalItems, Mb = 0, Tb = Ab.length; Mb < Tb; Mb++) {
                  var Eb = Ab[Mb];
                  if (Eb.item === bb || Eb.props.key === bb.key || ab === (0, mb.i)(Eb.item.type) && Ub === Eb.childIndex) return Eb
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var bb = this.clipPathId,
                  ab = this.state.offset,
                  Ub = ab.left,
                  Mb = ab.top,
                  Tb = ab.height,
                  Eb = ab.width;
                return Ab.createElement("defs", null, Ab.createElement("clipPath", {
                  id: bb
                }, Ab.createElement("rect", {
                  x: Ub,
                  y: Mb,
                  height: Tb,
                  width: Eb
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var bb = this.state.xAxisMap;
                return bb ? Object.entries(bb).reduce((function(bb, ab) {
                  var Ub = LU(ab, 2),
                    Ab = Ub[0],
                    Mb = Ub[1];
                  return iU(iU({}, bb), {}, fU({}, Ab, Mb.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var bb = this.state.yAxisMap;
                return bb ? Object.entries(bb).reduce((function(bb, ab) {
                  var Ub = LU(ab, 2),
                    Ab = Ub[0],
                    Mb = Ub[1];
                  return iU(iU({}, bb), {}, fU({}, Ab, Mb.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(bb) {
                var ab;
                return null === (ab = this.state.xAxisMap) || void 0 === ab || null === (ab = ab[bb]) || void 0 === ab ? void 0 : ab.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(bb) {
                var ab;
                return null === (ab = this.state.yAxisMap) || void 0 === ab || null === (ab = ab[bb]) || void 0 === ab ? void 0 : ab.scale
              }
            }, {
              key: "getItemByXY",
              value: function(bb) {
                var ab = this.state,
                  Ub = ab.formattedGraphicalItems,
                  Ab = ab.activeItem;
                if (Ub && Ub.length)
                  for (var Mb = 0, Tb = Ub.length; Mb < Tb; Mb++) {
                    var Eb = Ub[Mb],
                      Yb = Eb.props,
                      Bb = Eb.item,
                      eb = void 0 !== Bb.type.defaultProps ? iU(iU({}, Bb.type.defaultProps), Bb.props) : Bb.props,
                      vb = (0, mb.i)(Bb.type);
                    if ("Bar" === vb) {
                      var Lb = (Yb.data || []).find((function(ab) {
                        return (0, fb.h)(bb, ab)
                      }));
                      if (Lb) return {
                        graphicalItem: Eb,
                        payload: Lb
                      }
                    } else if ("RadialBar" === vb) {
                      var Pb = (Yb.data || []).find((function(ab) {
                        return (0, Ia.f)(bb, ab)
                      }));
                      if (Pb) return {
                        graphicalItem: Eb,
                        payload: Pb
                      }
                    } else if ((0, la.h)(Eb, Ab) || (0, la.l)(Eb, Ab) || (0, la.n)(Eb, Ab)) {
                      var Xb = (0, la.f)({
                          graphicalItem: Eb,
                          activeTooltipItem: Ab,
                          itemData: eb.data
                        }),
                        jb = void 0 === eb.activeIndex ? Xb : eb.activeIndex;
                      return {
                        graphicalItem: iU(iU({}, Eb), {}, {
                          childIndex: jb
                        }),
                        payload: (0, la.n)(Eb, Ab) ? eb.data[Xb] : Eb.props.data[Xb]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var bb = this;
                if (!(0, mb.x)(this)) return null;
                var ab, Ub, Mb = this.props,
                  Tb = Mb.children,
                  Eb = Mb.className,
                  Yb = Mb.width,
                  Bb = Mb.height,
                  eb = Mb.style,
                  vb = Mb.compact,
                  Lb = Mb.title,
                  Pb = Mb.desc,
                  Xb = PU(Mb, BU),
                  jb = (0, mb.d)(Xb, !1);
                if (vb) return Ab.createElement(EU.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Ab.createElement(Zb.b, vU({}, jb, {
                  width: Yb,
                  height: Bb,
                  title: Lb,
                  desc: Pb
                }), this.renderClipPath(), (0, mb.t)(Tb, this.renderMap)));
                this.props.accessibilityLayer && (jb.tabIndex = null !== (ab = this.props.tabIndex) && void 0 !== ab ? ab : 0, jb.role = null !== (Ub = this.props.role) && void 0 !== Ub ? Ub : "application", jb.onKeyDown = function(ab) {
                  bb.accessibilityManager.keyboardEvent(ab)
                }, jb.onFocus = function() {
                  bb.accessibilityManager.focus()
                });
                var Rb = this.parseEventsOfWrapper();
                return Ab.createElement(EU.e, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Ab.createElement("div", vU({
                  className: (0, kb.d)("recharts-wrapper", Eb),
                  style: iU({
                    position: "relative",
                    cursor: "default",
                    width: Yb,
                    height: Bb
                  }, eb)
                }, Rb, {
                  ref: function(ab) {
                    bb.container = ab
                  }
                }), Ab.createElement(Zb.b, vU({}, jb, {
                  width: Yb,
                  height: Bb,
                  title: Lb,
                  desc: Pb,
                  style: NU
                }), this.renderClipPath(), (0, mb.t)(Tb, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], Bb && XU(Mb.prototype, Bb), vb && XU(Mb, vb), Object.defineProperty(Mb, "prototype", {
              writable: !1
            }), Mb;
            var Mb, Bb, vb
          }(Ab.Component);
        fU(db, "displayName", ab), fU(db, "defaultProps", iU({
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
        }, pb)), fU(db, "getDerivedStateFromProps", (function(bb, ab) {
          var Ub = bb.dataKey,
            Ab = bb.data,
            Mb = bb.children,
            Eb = bb.width,
            Yb = bb.height,
            Bb = bb.layout,
            eb = bb.stackOffset,
            vb = bb.margin,
            Lb = ab.dataStartIndex,
            Pb = ab.dataEndIndex;
          if (void 0 === ab.updateId) {
            var Xb = qU(bb);
            return iU(iU(iU({}, Xb), {}, {
              updateId: 0
            }, Ib(iU(iU({
              props: bb
            }, Xb), {}, {
              updateId: 0
            }), ab)), {}, {
              prevDataKey: Ub,
              prevData: Ab,
              prevWidth: Eb,
              prevHeight: Yb,
              prevLayout: Bb,
              prevStackOffset: eb,
              prevMargin: vb,
              prevChildren: Mb
            })
          }
          if (Ub !== ab.prevDataKey || Ab !== ab.prevData || Eb !== ab.prevWidth || Yb !== ab.prevHeight || Bb !== ab.prevLayout || eb !== ab.prevStackOffset || !(0, da.b)(vb, ab.prevMargin)) {
            var jb = qU(bb),
              Rb = {
                chartX: ab.chartX,
                chartY: ab.chartY,
                isTooltipActive: ab.isTooltipActive
              },
              kb = iU(iU({}, hU(ab, Ab, Bb)), {}, {
                updateId: ab.updateId + 1
              }),
              yb = iU(iU(iU({}, jb), Rb), kb);
            return iU(iU(iU({}, yb), Ib(iU({
              props: bb
            }, yb), ab)), {}, {
              prevDataKey: Ub,
              prevData: Ab,
              prevWidth: Eb,
              prevHeight: Yb,
              prevLayout: Bb,
              prevStackOffset: eb,
              prevMargin: vb,
              prevChildren: Mb
            })
          }
          if (!(0, mb.p)(Mb, ab.prevChildren)) {
            var Zb, Db, zb, xb, ib = (0, mb.g)(Mb, Vb),
              fb = ib && null !== (Zb = null === (Db = ib.props) || void 0 === Db ? void 0 : Db.startIndex) && void 0 !== Zb ? Zb : Lb,
              pb = ib && null !== (zb = null === (xb = ib.props) || void 0 === xb ? void 0 : xb.endIndex) && void 0 !== zb ? zb : Pb,
              Nb = fb !== Lb || pb !== Pb,
              Wb = !Tb()(Ab) && !Nb ? ab.updateId : ab.updateId + 1;
            return iU(iU({
              updateId: Wb
            }, Ib(iU(iU({
              props: bb
            }, ab), {}, {
              updateId: Wb,
              dataStartIndex: fb,
              dataEndIndex: pb
            }), ab)), {}, {
              prevChildren: Mb,
              dataStartIndex: fb,
              dataEndIndex: pb
            })
          }
          return null
        })), fU(db, "renderActiveDot", (function(bb, ab, Ub) {
          var Mb;
          return Mb = (0, Ab.isValidElement)(bb) ? (0, Ab.cloneElement)(bb, ab) : Yb()(bb) ? bb(ab) : Ab.createElement(ib.d, ab), Ab.createElement(Db.c, {
            className: "recharts-active-dot",
            key: Ub
          }, Mb)
        }));
        var Fb = (0, Ab.forwardRef)((function(bb, ab) {
          return Ab.createElement(db, vU({}, bb, {
            ref: ab
          }))
        }));
        return Fb.displayName = db.displayName, Fb
      }
  },
  5902: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    var Ab = function(bb) {
      return null
    };
    Ab.displayName = "Cell"
  },
  5842: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ib
    });
    var Ab = Ub(52),
      Mb = Ub(5041),
      Tb = Ub.n(Mb),
      Eb = Ub(4904),
      Yb = Ub.n(Eb),
      Bb = Ub(4734),
      eb = Ub.n(Bb),
      vb = Ub(4721),
      Lb = Ub(5741),
      Pb = Ub(5058),
      Xb = Ub(4813),
      jb = Ub(5849);

    function Rb(bb) {
      return Rb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Rb(bb)
    }
    var kb = ["offset"];

    function yb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Zb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Zb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Zb(bb, ab)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Zb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function Db(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function zb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function xb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? zb(Object(Ub), !0).forEach((function(ab) {
          ib(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : zb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function ib(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Rb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Rb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Rb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function fb() {
      return fb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, fb.apply(this, arguments)
    }
    var mb = function(bb) {
        var ab = bb.value,
          Ub = bb.formatter,
          Ab = Tb()(bb.children) ? ab : bb.children;
        return Yb()(Ub) ? Ub(Ab) : Ab
      },
      pb = function(bb, ab, Ub) {
        var Mb, Eb, Yb = bb.position,
          Bb = bb.viewBox,
          eb = bb.offset,
          Lb = bb.className,
          Pb = Bb,
          Rb = Pb.cx,
          kb = Pb.cy,
          yb = Pb.innerRadius,
          Zb = Pb.outerRadius,
          Db = Pb.startAngle,
          zb = Pb.endAngle,
          xb = Pb.clockWise,
          ib = (yb + Zb) / 2,
          mb = function(bb, ab) {
            return (0, Xb.I)(ab - bb) * Math.min(Math.abs(ab - bb), 360)
          }(Db, zb),
          pb = mb >= 0 ? 1 : -1;
        "insideStart" === Yb ? (Mb = Db + pb * eb, Eb = xb) : "insideEnd" === Yb ? (Mb = zb - pb * eb, Eb = !xb) : "end" === Yb && (Mb = zb + pb * eb, Eb = xb), Eb = mb <= 0 ? Eb : !Eb;
        var Nb = (0, jb.i)(Rb, kb, ib, Mb),
          Wb = (0, jb.i)(Rb, kb, ib, Mb + 359 * (Eb ? 1 : -1)),
          Hb = "M".concat(Nb.x, ",").concat(Nb.y, "\n    A").concat(ib, ",").concat(ib, ",0,1,").concat(Eb ? 0 : 1, ",\n    ").concat(Wb.x, ",").concat(Wb.y),
          Ib = Tb()(bb.id) ? (0, Xb.J)("recharts-radial-line-") : bb.id;
        return Ab.createElement("text", fb({}, Ub, {
          dominantBaseline: "central",
          className: (0, vb.d)("recharts-radial-bar-label", Lb)
        }), Ab.createElement("defs", null, Ab.createElement("path", {
          id: Ib,
          d: Hb
        })), Ab.createElement("textPath", {
          xlinkHref: "#".concat(Ib)
        }, ab))
      },
      Nb = function(bb) {
        var ab = bb.viewBox,
          Ub = bb.offset,
          Ab = bb.position,
          Mb = ab,
          Tb = Mb.cx,
          Eb = Mb.cy,
          Yb = Mb.innerRadius,
          Bb = Mb.outerRadius,
          eb = (Mb.startAngle + Mb.endAngle) / 2;
        if ("outside" === Ab) {
          var vb = (0, jb.i)(Tb, Eb, Bb + Ub, eb),
            Lb = vb.x;
          return {
            x: Lb,
            y: vb.y,
            textAnchor: Lb >= Tb ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === Ab) return {
          x: Tb,
          y: Eb,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === Ab) return {
          x: Tb,
          y: Eb,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === Ab) return {
          x: Tb,
          y: Eb,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var Pb = (Yb + Bb) / 2,
          Xb = (0, jb.i)(Tb, Eb, Pb, eb);
        return {
          x: Xb.x,
          y: Xb.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      Wb = function(bb) {
        var ab = bb.viewBox,
          Ub = bb.parentViewBox,
          Ab = bb.offset,
          Mb = bb.position,
          Tb = ab,
          Eb = Tb.x,
          Yb = Tb.y,
          Bb = Tb.width,
          vb = Tb.height,
          Lb = vb >= 0 ? 1 : -1,
          Pb = Lb * Ab,
          jb = Lb > 0 ? "end" : "start",
          Rb = Lb > 0 ? "start" : "end",
          kb = Bb >= 0 ? 1 : -1,
          yb = kb * Ab,
          Zb = kb > 0 ? "end" : "start",
          Db = kb > 0 ? "start" : "end";
        if ("top" === Mb) return xb(xb({}, {
          x: Eb + Bb / 2,
          y: Yb - Lb * Ab,
          textAnchor: "middle",
          verticalAnchor: jb
        }), Ub ? {
          height: Math.max(Yb - Ub.y, 0),
          width: Bb
        } : {});
        if ("bottom" === Mb) return xb(xb({}, {
          x: Eb + Bb / 2,
          y: Yb + vb + Pb,
          textAnchor: "middle",
          verticalAnchor: Rb
        }), Ub ? {
          height: Math.max(Ub.y + Ub.height - (Yb + vb), 0),
          width: Bb
        } : {});
        if ("left" === Mb) {
          var zb = {
            x: Eb - yb,
            y: Yb + vb / 2,
            textAnchor: Zb,
            verticalAnchor: "middle"
          };
          return xb(xb({}, zb), Ub ? {
            width: Math.max(zb.x - Ub.x, 0),
            height: vb
          } : {})
        }
        if ("right" === Mb) {
          var ib = {
            x: Eb + Bb + yb,
            y: Yb + vb / 2,
            textAnchor: Db,
            verticalAnchor: "middle"
          };
          return xb(xb({}, ib), Ub ? {
            width: Math.max(Ub.x + Ub.width - ib.x, 0),
            height: vb
          } : {})
        }
        var fb = Ub ? {
          width: Bb,
          height: vb
        } : {};
        return "insideLeft" === Mb ? xb({
          x: Eb + yb,
          y: Yb + vb / 2,
          textAnchor: Db,
          verticalAnchor: "middle"
        }, fb) : "insideRight" === Mb ? xb({
          x: Eb + Bb - yb,
          y: Yb + vb / 2,
          textAnchor: Zb,
          verticalAnchor: "middle"
        }, fb) : "insideTop" === Mb ? xb({
          x: Eb + Bb / 2,
          y: Yb + Pb,
          textAnchor: "middle",
          verticalAnchor: Rb
        }, fb) : "insideBottom" === Mb ? xb({
          x: Eb + Bb / 2,
          y: Yb + vb - Pb,
          textAnchor: "middle",
          verticalAnchor: jb
        }, fb) : "insideTopLeft" === Mb ? xb({
          x: Eb + yb,
          y: Yb + Pb,
          textAnchor: Db,
          verticalAnchor: Rb
        }, fb) : "insideTopRight" === Mb ? xb({
          x: Eb + Bb - yb,
          y: Yb + Pb,
          textAnchor: Zb,
          verticalAnchor: Rb
        }, fb) : "insideBottomLeft" === Mb ? xb({
          x: Eb + yb,
          y: Yb + vb - Pb,
          textAnchor: Db,
          verticalAnchor: jb
        }, fb) : "insideBottomRight" === Mb ? xb({
          x: Eb + Bb - yb,
          y: Yb + vb - Pb,
          textAnchor: Zb,
          verticalAnchor: jb
        }, fb) : eb()(Mb) && ((0, Xb.E)(Mb.x) || (0, Xb.F)(Mb.x)) && ((0, Xb.E)(Mb.y) || (0, Xb.F)(Mb.y)) ? xb({
          x: Eb + (0, Xb.o)(Mb.x, Bb),
          y: Yb + (0, Xb.o)(Mb.y, vb),
          textAnchor: "end",
          verticalAnchor: "end"
        }, fb) : xb({
          x: Eb + Bb / 2,
          y: Yb + vb / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, fb)
      },
      Hb = function(bb) {
        return "cx" in bb && (0, Xb.E)(bb.cx)
      };

    function Ib(bb) {
      var ab, Ub = bb.offset,
        Mb = xb({
          offset: void 0 === Ub ? 5 : Ub
        }, Db(bb, kb)),
        Eb = Mb.viewBox,
        Bb = Mb.position,
        eb = Mb.value,
        Xb = Mb.children,
        jb = Mb.content,
        Rb = Mb.className,
        yb = void 0 === Rb ? "" : Rb,
        Zb = Mb.textBreakAll;
      if (!Eb || Tb()(eb) && Tb()(Xb) && !(0, Ab.isValidElement)(jb) && !Yb()(jb)) return null;
      if ((0, Ab.isValidElement)(jb)) return (0, Ab.cloneElement)(jb, Mb);
      if (Yb()(jb)) {
        if (ab = (0, Ab.createElement)(jb, Mb), (0, Ab.isValidElement)(ab)) return ab
      } else ab = mb(Mb);
      var zb = Hb(Eb),
        ib = (0, Pb.d)(Mb, !0);
      if (zb && ("insideStart" === Bb || "insideEnd" === Bb || "end" === Bb)) return pb(Mb, ab, ib);
      var Ib = zb ? Nb(Mb) : Wb(Mb);
      return Ab.createElement(Lb.e, fb({
        className: (0, vb.d)("recharts-label", yb)
      }, ib, Ib, {
        breakAll: Zb
      }), ab)
    }
    Ib.displayName = "Label";
    var db = function(bb) {
      var ab = bb.cx,
        Ub = bb.cy,
        Ab = bb.angle,
        Mb = bb.startAngle,
        Tb = bb.endAngle,
        Eb = bb.r,
        Yb = bb.radius,
        Bb = bb.innerRadius,
        eb = bb.outerRadius,
        vb = bb.x,
        Lb = bb.y,
        Pb = bb.top,
        jb = bb.left,
        Rb = bb.width,
        kb = bb.height,
        yb = bb.clockWise,
        Zb = bb.labelViewBox;
      if (Zb) return Zb;
      if ((0, Xb.E)(Rb) && (0, Xb.E)(kb)) {
        if ((0, Xb.E)(vb) && (0, Xb.E)(Lb)) return {
          x: vb,
          y: Lb,
          width: Rb,
          height: kb
        };
        if ((0, Xb.E)(Pb) && (0, Xb.E)(jb)) return {
          x: Pb,
          y: jb,
          width: Rb,
          height: kb
        }
      }
      return (0, Xb.E)(vb) && (0, Xb.E)(Lb) ? {
        x: vb,
        y: Lb,
        width: 0,
        height: 0
      } : (0, Xb.E)(ab) && (0, Xb.E)(Ub) ? {
        cx: ab,
        cy: Ub,
        startAngle: Mb || Ab || 0,
        endAngle: Tb || Ab || 0,
        innerRadius: Bb || 0,
        outerRadius: eb || Yb || Eb || 0,
        clockWise: yb
      } : bb.viewBox ? bb.viewBox : {}
    };
    Ib.parseViewBox = db, Ib.renderCallByParent = function(bb, ab) {
      var Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!bb || !bb.children && Ub && !bb.label) return null;
      var Mb = bb.children,
        Tb = db(bb),
        Eb = (0, Pb.e)(Mb, Ib).map((function(bb, Ub) {
          return (0, Ab.cloneElement)(bb, {
            viewBox: ab || Tb,
            key: "label-".concat(Ub)
          })
        }));
      if (!Ub) return Eb;
      var Bb = function(bb, ab) {
        return bb ? !0 === bb ? Ab.createElement(Ib, {
          key: "label-implicit",
          viewBox: ab
        }) : (0, Xb.B)(bb) ? Ab.createElement(Ib, {
          key: "label-implicit",
          viewBox: ab,
          value: bb
        }) : (0, Ab.isValidElement)(bb) ? bb.type === Ib ? (0, Ab.cloneElement)(bb, {
          key: "label-implicit",
          viewBox: ab
        }) : Ab.createElement(Ib, {
          key: "label-implicit",
          content: bb,
          viewBox: ab
        }) : Yb()(bb) ? Ab.createElement(Ib, {
          key: "label-implicit",
          content: bb,
          viewBox: ab
        }) : eb()(bb) ? Ab.createElement(Ib, fb({
          viewBox: ab
        }, bb, {
          key: "label-implicit"
        })) : null : null
      }(bb.label, ab || Tb);
      return [Bb].concat(yb(Eb))
    }
  },
  5907: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Wb
    });
    var Ab = Ub(52),
      Mb = Ub(5041),
      Tb = Ub.n(Mb),
      Eb = Ub(4734),
      Yb = Ub.n(Eb),
      Bb = Ub(4904),
      eb = Ub.n(Bb),
      vb = Ub(5909),
      Lb = Ub.n(vb),
      Pb = Ub(5842),
      Xb = Ub(5553),
      jb = Ub(5058),
      Rb = Ub(5754);

    function kb(bb) {
      return kb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, kb(bb)
    }
    var yb = ["valueAccessor"],
      Zb = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function Db(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return zb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return zb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return zb(bb, ab)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function xb() {
      return xb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, xb.apply(this, arguments)
    }

    function ib(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function fb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? ib(Object(Ub), !0).forEach((function(ab) {
          mb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : ib(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function mb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != kb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != kb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == kb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function pb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }
    var Nb = function(bb) {
      return Array.isArray(bb.value) ? Lb()(bb.value) : bb.value
    };

    function Wb(bb) {
      var ab = bb.valueAccessor,
        Ub = void 0 === ab ? Nb : ab,
        Mb = pb(bb, yb),
        Eb = Mb.data,
        Yb = Mb.dataKey,
        Bb = Mb.clockWise,
        eb = Mb.id,
        vb = Mb.textBreakAll,
        Lb = pb(Mb, Zb);
      return Eb && Eb.length ? Ab.createElement(Xb.c, {
        className: "recharts-label-list"
      }, Eb.map((function(bb, ab) {
        var Mb = Tb()(Yb) ? Ub(bb, ab) : (0, Rb.cb)(bb && bb.payload, Yb),
          Eb = Tb()(eb) ? {} : {
            id: "".concat(eb, "-").concat(ab)
          };
        return Ab.createElement(Pb.e, xb({}, (0, jb.d)(bb, !0), Lb, Eb, {
          parentViewBox: bb.parentViewBox,
          value: Mb,
          textBreakAll: vb,
          viewBox: Pb.e.parseViewBox(Tb()(Bb) ? bb : fb(fb({}, bb), {}, {
            clockWise: Bb
          })),
          key: "label-".concat(ab),
          index: ab
        }))
      }))) : null
    }
    Wb.displayName = "LabelList", Wb.renderCallByParent = function(bb, ab) {
      var Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!bb || !bb.children && Ub && !bb.label) return null;
      var Mb = bb.children,
        Tb = (0, jb.e)(Mb, Wb).map((function(bb, Ub) {
          return (0, Ab.cloneElement)(bb, {
            data: ab,
            key: "labelList-".concat(Ub)
          })
        }));
      return Ub ? [function(bb, ab) {
        return bb ? !0 === bb ? Ab.createElement(Wb, {
          key: "labelList-implicit",
          data: ab
        }) : Ab.isValidElement(bb) || eb()(bb) ? Ab.createElement(Wb, {
          key: "labelList-implicit",
          data: ab,
          content: bb
        }) : Yb()(bb) ? Ab.createElement(Wb, xb({
          data: ab
        }, bb, {
          key: "labelList-implicit"
        })) : null : null
      }(bb.label, ab)].concat(Db(Tb)) : Tb
    }
  },
  5642: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Kb
    });
    var Ab = Ub(52),
      Mb = Ub(4904),
      Tb = Ub.n(Mb),
      Eb = Ub(4721),
      Yb = Ub(5050),
      Bb = Ub(5546),
      eb = Ub(5647),
      vb = Ub(5080);

    function Lb(bb) {
      return Lb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Lb(bb)
    }

    function Pb() {
      return Pb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Pb.apply(this, arguments)
    }

    function Xb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function jb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, zb(Ab.key), Ab)
      }
    }

    function Rb(bb, ab, Ub) {
      return ab = yb(ab),
        function(bb, ab) {
          if (ab && ("object" === Lb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, kb() ? Reflect.construct(ab, Ub || [], yb(bb).constructor) : ab.apply(bb, Ub))
    }

    function kb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (kb = function() {
        return !!bb
      })()
    }

    function yb(bb) {
      return yb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, yb(bb)
    }

    function Zb(bb, ab) {
      return Zb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Zb(bb, ab)
    }

    function Db(bb, ab, Ub) {
      return (ab = zb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function zb(bb) {
      var ab = function(bb, ab) {
        if ("object" != Lb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Lb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Lb(ab) ? ab : ab + ""
    }
    var xb = 32,
      ib = function(bb) {
        function ab() {
          return function(bb, ab) {
            if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
          }(this, ab), Rb(this, ab, arguments)
        }
        return function(bb, ab) {
          if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
          bb.prototype = Object.create(ab && ab.prototype, {
            constructor: {
              value: bb,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), ab && Zb(bb, ab)
        }(ab, bb), Ub = ab, Mb = [{
          key: "renderIcon",
          value: function(bb) {
            var ab = this.props.inactiveColor,
              Ub = 16,
              Mb = xb / 6,
              Tb = xb / 3,
              Eb = bb.inactive ? ab : bb.color;
            if ("plainline" === bb.type) return Ab.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: Eb,
              strokeDasharray: bb.payload.strokeDasharray,
              x1: 0,
              y1: Ub,
              x2: xb,
              y2: Ub,
              className: "recharts-legend-icon"
            });
            if ("line" === bb.type) return Ab.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: Eb,
              d: "M0,".concat(Ub, "h").concat(Tb, "\n            A").concat(Mb, ",").concat(Mb, ",0,1,1,").concat(2 * Tb, ",").concat(Ub, "\n            H").concat(xb, "M").concat(2 * Tb, ",").concat(Ub, "\n            A").concat(Mb, ",").concat(Mb, ",0,1,1,").concat(Tb, ",").concat(Ub),
              className: "recharts-legend-icon"
            });
            if ("rect" === bb.type) return Ab.createElement("path", {
              stroke: "none",
              fill: Eb,
              d: "M0,".concat(4, "h").concat(xb, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (Ab.isValidElement(bb.legendIcon)) {
              var Yb = function(bb) {
                for (var ab = 1; ab < arguments.length; ab++) {
                  var Ub = null != arguments[ab] ? arguments[ab] : {};
                  ab % 2 ? Xb(Object(Ub), !0).forEach((function(ab) {
                    Db(bb, ab, Ub[ab])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Xb(Object(Ub)).forEach((function(ab) {
                    Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
                  }))
                }
                return bb
              }({}, bb);
              return delete Yb.legendIcon, Ab.cloneElement(bb.legendIcon, Yb)
            }
            return Ab.createElement(eb.c, {
              fill: Eb,
              cx: Ub,
              cy: Ub,
              size: xb,
              sizeType: "diameter",
              type: bb.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var bb = this,
              ab = this.props,
              Ub = ab.payload,
              Mb = ab.iconSize,
              eb = ab.layout,
              Lb = ab.formatter,
              Xb = ab.inactiveColor,
              jb = {
                x: 0,
                y: 0,
                width: xb,
                height: xb
              },
              Rb = {
                display: "horizontal" === eb ? "inline-block" : "block",
                marginRight: 10
              },
              kb = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return Ub.map((function(ab, Ub) {
              var eb = ab.formatter || Lb,
                yb = (0, Eb.d)(Db(Db({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(Ub), !0), "inactive", ab.inactive));
              if ("none" === ab.type) return null;
              var Zb = Tb()(ab.value) ? null : ab.value;
              (0, Yb.b)(!Tb()(ab.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var zb = ab.inactive ? Xb : ab.color;
              return Ab.createElement("li", Pb({
                className: yb,
                style: Rb,
                key: "legend-item-".concat(Ub)
              }, (0, vb.r)(bb.props, ab, Ub)), Ab.createElement(Bb.b, {
                width: Mb,
                height: Mb,
                viewBox: jb,
                style: kb
              }, bb.renderIcon(ab)), Ab.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: zb
                }
              }, eb ? eb(Zb, ab, Ub) : Zb))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var bb = this.props,
              ab = bb.payload,
              Ub = bb.layout,
              Mb = bb.align;
            if (!ab || !ab.length) return null;
            var Tb = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === Ub ? Mb : "left"
            };
            return Ab.createElement("ul", {
              className: "recharts-default-legend",
              style: Tb
            }, this.renderItems())
          }
        }], Mb && jb(Ub.prototype, Mb), Lb && jb(Ub, Lb), Object.defineProperty(Ub, "prototype", {
          writable: !1
        }), Ub;
        var Ub, Mb, Lb
      }(Ab.PureComponent);
    Db(ib, "displayName", "Legend"), Db(ib, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var fb = Ub(4813),
      mb = Ub(5575);

    function pb(bb) {
      return pb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, pb(bb)
    }
    var Nb = ["ref"];

    function Wb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Hb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Wb(Object(Ub), !0).forEach((function(ab) {
          Qb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Wb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Ib(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, qb(Ab.key), Ab)
      }
    }

    function db(bb, ab, Ub) {
      return ab = hb(ab),
        function(bb, ab) {
          if (ab && ("object" === pb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, Fb() ? Reflect.construct(ab, Ub || [], hb(bb).constructor) : ab.apply(bb, Ub))
    }

    function Fb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (Fb = function() {
        return !!bb
      })()
    }

    function hb(bb) {
      return hb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, hb(bb)
    }

    function Gb(bb, ab) {
      return Gb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Gb(bb, ab)
    }

    function Qb(bb, ab, Ub) {
      return (ab = qb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function qb(bb) {
      var ab = function(bb, ab) {
        if ("object" != pb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != pb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == pb(ab) ? ab : ab + ""
    }

    function ub(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function rb(bb) {
      return bb.value
    }
    var Kb = function(bb) {
      function ab() {
        var bb;
        ! function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab);
        for (var Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        return Qb(bb = db(this, ab, [].concat(Ab)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), bb
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && Gb(bb, ab)
      }(ab, bb), Ub = ab, Tb = [{
        key: "getWithHeight",
        value: function(bb, ab) {
          var Ub = Hb(Hb({}, this.defaultProps), bb.props).layout;
          return "vertical" === Ub && (0, fb.E)(bb.props.height) ? {
            height: bb.props.height
          } : "horizontal" === Ub ? {
            width: bb.props.width || ab
          } : null
        }
      }], (Mb = [{
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
            ab = this.getBBox();
          ab ? (Math.abs(ab.width - this.lastBoundingBox.width) > 1 || Math.abs(ab.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = ab.width, this.lastBoundingBox.height = ab.height, bb && bb(ab)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, bb && bb(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Hb({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(bb) {
          var ab, Ub, Ab = this.props,
            Mb = Ab.layout,
            Tb = Ab.align,
            Eb = Ab.verticalAlign,
            Yb = Ab.margin,
            Bb = Ab.chartWidth,
            eb = Ab.chartHeight;
          return bb && (void 0 !== bb.left && null !== bb.left || void 0 !== bb.right && null !== bb.right) || (ab = "center" === Tb && "vertical" === Mb ? {
            left: ((Bb || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === Tb ? {
            right: Yb && Yb.right || 0
          } : {
            left: Yb && Yb.left || 0
          }), bb && (void 0 !== bb.top && null !== bb.top || void 0 !== bb.bottom && null !== bb.bottom) || (Ub = "middle" === Eb ? {
            top: ((eb || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === Eb ? {
            bottom: Yb && Yb.bottom || 0
          } : {
            top: Yb && Yb.top || 0
          }), Hb(Hb({}, ab), Ub)
        }
      }, {
        key: "render",
        value: function() {
          var bb = this,
            ab = this.props,
            Ub = ab.content,
            Mb = ab.width,
            Tb = ab.height,
            Eb = ab.wrapperStyle,
            Yb = ab.payloadUniqBy,
            Bb = ab.payload,
            eb = Hb(Hb({
              position: "absolute",
              width: Mb || "auto",
              height: Tb || "auto"
            }, this.getDefaultPosition(Eb)), Eb);
          return Ab.createElement("div", {
            className: "recharts-legend-wrapper",
            style: eb,
            ref: function(ab) {
              bb.wrapperNode = ab
            }
          }, function(bb, ab) {
            if (Ab.isValidElement(bb)) return Ab.cloneElement(bb, ab);
            if ("function" === typeof bb) return Ab.createElement(bb, ab);
            ab.ref;
            var Ub = ub(ab, Nb);
            return Ab.createElement(ib, Ub)
          }(Ub, Hb(Hb({}, this.props), {}, {
            payload: (0, mb.d)(Bb, Yb, rb)
          })))
        }
      }]) && Ib(Ub.prototype, Mb), Tb && Ib(Ub, Tb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Mb, Tb
    }(Ab.PureComponent);
    Qb(Kb, "displayName", "Legend"), Qb(Kb, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4717: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => kb
    });
    var Ab = Ub(4721),
      Mb = Ub(52),
      Tb = Ub(4725),
      Eb = Ub.n(Tb),
      Yb = Ub(4813),
      Bb = Ub(5050),
      eb = Ub(5058);

    function vb(bb) {
      return vb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, vb(bb)
    }

    function Lb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Pb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Lb(Object(Ub), !0).forEach((function(ab) {
          Xb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Lb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Xb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != vb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != vb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == vb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function jb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Rb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Rb(bb, ab)
      }(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Rb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }
    var kb = (0, Mb.forwardRef)((function(bb, ab) {
      var Ub = bb.aspect,
        Tb = bb.initialDimension,
        vb = void 0 === Tb ? {
          width: -1,
          height: -1
        } : Tb,
        Lb = bb.width,
        Xb = void 0 === Lb ? "100%" : Lb,
        Rb = bb.height,
        kb = void 0 === Rb ? "100%" : Rb,
        yb = bb.minWidth,
        Zb = void 0 === yb ? 0 : yb,
        Db = bb.minHeight,
        zb = bb.maxHeight,
        xb = bb.children,
        ib = bb.debounce,
        fb = void 0 === ib ? 0 : ib,
        mb = bb.id,
        pb = bb.className,
        Nb = bb.bZ,
        Wb = bb.style,
        Hb = void 0 === Wb ? {} : Wb,
        Ib = (0, Mb.useRef)(null),
        db = (0, Mb.useRef)();
      db.current = Nb, (0, Mb.useImperativeHandle)(ab, (function() {
        return Object.defineProperty(Ib.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), Ib.current
          },
          configurable: !0
        })
      }));
      var Fb = jb((0, Mb.useState)({
          containerWidth: vb.width,
          containerHeight: vb.height
        }), 2),
        hb = Fb[0],
        Gb = Fb[1],
        Qb = (0, Mb.useCallback)((function(bb, ab) {
          Gb((function(Ub) {
            var Ab = Math.round(bb),
              Mb = Math.round(ab);
            return Ub.containerWidth === Ab && Ub.containerHeight === Mb ? Ub : {
              containerWidth: Ab,
              containerHeight: Mb
            }
          }))
        }), []);
      (0, Mb.useEffect)((function() {
        var bb = function(bb) {
          var ab, Ub = bb[0].contentRect,
            Ab = Ub.width,
            Mb = Ub.height;
          Qb(Ab, Mb), null === (ab = db.current) || void 0 === ab || ab.call(db, Ab, Mb)
        };
        fb > 0 && (bb = Eb()(bb, fb, {
          trailing: !0,
          leading: !1
        }));
        var ab = new ResizeObserver(bb),
          Ub = Ib.current.getBoundingClientRect(),
          Ab = Ub.width,
          Mb = Ub.height;
        return Qb(Ab, Mb), ab.observe(Ib.current),
          function() {
            ab.disconnect()
          }
      }), [Qb, fb]);
      var qb = (0, Mb.useMemo)((function() {
        var bb = hb.containerWidth,
          ab = hb.containerHeight;
        if (bb < 0 || ab < 0) return null;
        (0, Bb.b)((0, Yb.F)(Xb) || (0, Yb.F)(kb), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", Xb, kb), (0, Bb.b)(!Ub || Ub > 0, "The aspect(%s) must be greater than zero.", Ub);
        var Ab = (0, Yb.F)(Xb) ? bb : Xb,
          Tb = (0, Yb.F)(kb) ? ab : kb;
        Ub && Ub > 0 && (Ab ? Tb = Ab / Ub : Tb && (Ab = Tb * Ub), zb && Tb > zb && (Tb = zb)), (0, Bb.b)(Ab > 0 || Tb > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", Ab, Tb, Xb, kb, Zb, Db, Ub);
        var Eb = !Array.isArray(xb) && (0, eb.i)(xb.type).endsWith("Chart");
        return Mb.Children.map(xb, (function(bb) {
          return Mb.isValidElement(bb) ? (0, Mb.cloneElement)(bb, Pb({
            width: Ab,
            height: Tb
          }, Eb ? {
            style: Pb({
              height: "100%",
              width: "100%",
              maxHeight: Tb,
              maxWidth: Ab
            }, bb.props.style)
          } : {})) : bb
        }))
      }), [Ub, xb, kb, zb, Db, Zb, hb, Xb]);
      return Mb.createElement("div", {
        id: mb ? "".concat(mb) : void 0,
        className: (0, Ab.d)("recharts-responsive-container", pb),
        style: Pb(Pb({}, Hb), {}, {
          width: Xb,
          height: kb,
          minWidth: Zb,
          minHeight: Db,
          maxHeight: zb
        }),
        ref: Ib
      }, qb)
    }))
  },
  5741: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => ob
    });
    var Ab = Ub(52),
      Mb = Ub(5041),
      Tb = Ub.n(Mb),
      Eb = Ub(4721),
      Yb = Ub(4813),
      Bb = Ub(5567),
      eb = Ub(5058),
      vb = Ub(5748);

    function Lb(bb) {
      return Lb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Lb(bb)
    }

    function Pb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Xb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Xb(bb, ab)
      }(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function jb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Rb(Ab.key), Ab)
      }
    }

    function Rb(bb) {
      var ab = function(bb, ab) {
        if ("object" != Lb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Lb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Lb(ab) ? ab : ab + ""
    }
    var kb = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      yb = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      Zb = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      Db = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      zb = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      xb = Object.keys(zb),
      ib = "NaN";
    var fb = function() {
      function bb(ab, Ub) {
        ! function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, bb), this.num = ab, this.unit = Ub, this.num = ab, this.unit = Ub, Number.isNaN(ab) && (this.unit = ""), "" === Ub || Zb.test(Ub) || (this.num = NaN, this.unit = ""), xb.includes(Ub) && (this.num = function(bb, ab) {
          return bb * zb[ab]
        }(ab, Ub), this.unit = "px")
      }
      return ab = bb, Ab = [{
        key: "parse",
        value: function(ab) {
          var Ub, Ab = Pb(null !== (Ub = Db.exec(ab)) && void 0 !== Ub ? Ub : [], 3),
            Mb = Ab[1],
            Tb = Ab[2];
          return new bb(parseFloat(Mb), null !== Tb && void 0 !== Tb ? Tb : "")
        }
      }], (Ub = [{
        key: "add",
        value: function(ab) {
          return this.unit !== ab.unit ? new bb(NaN, "") : new bb(this.num + ab.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(ab) {
          return this.unit !== ab.unit ? new bb(NaN, "") : new bb(this.num - ab.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(ab) {
          return "" !== this.unit && "" !== ab.unit && this.unit !== ab.unit ? new bb(NaN, "") : new bb(this.num * ab.num, this.unit || ab.unit)
        }
      }, {
        key: "divide",
        value: function(ab) {
          return "" !== this.unit && "" !== ab.unit && this.unit !== ab.unit ? new bb(NaN, "") : new bb(this.num / ab.num, this.unit || ab.unit)
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
      }]) && jb(ab.prototype, Ub), Ab && jb(ab, Ab), Object.defineProperty(ab, "prototype", {
        writable: !1
      }), ab;
      var ab, Ub, Ab
    }();

    function mb(bb) {
      if (bb.includes(ib)) return ib;
      for (var ab = bb; ab.includes("*") || ab.includes("/");) {
        var Ub, Ab = Pb(null !== (Ub = kb.exec(ab)) && void 0 !== Ub ? Ub : [], 4),
          Mb = Ab[1],
          Tb = Ab[2],
          Eb = Ab[3],
          Yb = fb.parse(null !== Mb && void 0 !== Mb ? Mb : ""),
          Bb = fb.parse(null !== Eb && void 0 !== Eb ? Eb : ""),
          eb = "*" === Tb ? Yb.multiply(Bb) : Yb.divide(Bb);
        if (eb.isNaN()) return ib;
        ab = ab.replace(kb, eb.toString())
      }
      for (; ab.includes("+") || /.-\d+(?:\.\d+)?/.test(ab);) {
        var vb, Lb = Pb(null !== (vb = yb.exec(ab)) && void 0 !== vb ? vb : [], 4),
          Xb = Lb[1],
          jb = Lb[2],
          Rb = Lb[3],
          Zb = fb.parse(null !== Xb && void 0 !== Xb ? Xb : ""),
          Db = fb.parse(null !== Rb && void 0 !== Rb ? Rb : ""),
          zb = "+" === jb ? Zb.add(Db) : Zb.subtract(Db);
        if (zb.isNaN()) return ib;
        ab = ab.replace(yb, zb.toString())
      }
      return ab
    }
    var pb = /\(([^()]*)\)/;

    function Nb(bb) {
      var ab = bb.replace(/\s+/g, "");
      return ab = function(bb) {
        for (var ab = bb; ab.includes("(");) {
          var Ub = Pb(pb.exec(ab), 2)[1];
          ab = ab.replace(pb, mb(Ub))
        }
        return ab
      }(ab), ab = mb(ab)
    }

    function Wb(bb) {
      var ab = function(bb) {
        try {
          return Nb(bb)
        } catch (ab) {
          return ib
        }
      }(bb.slice(5, -1));
      return ab === ib ? "" : ab
    }
    var Hb = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      Ib = ["dx", "dy", "angle", "className", "breakAll"];

    function db() {
      return db = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, db.apply(this, arguments)
    }

    function Fb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function hb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Gb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Gb(bb, ab)
      }(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Gb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }
    var Qb = /[ \f\n\r\t\v\u2028\u2029]+/,
      qb = function(bb) {
        var ab = bb.children,
          Ub = bb.breakAll,
          Ab = bb.style;
        try {
          var Mb = [];
          return Tb()(ab) || (Mb = Ub ? ab.toString().split("") : ab.toString().split(Qb)), {
            wordsWithComputedWidth: Mb.map((function(bb) {
              return {
                word: bb,
                width: (0, vb.e)(bb, Ab).width
              }
            })),
            spaceWidth: Ub ? 0 : (0, vb.e)("\xa0", Ab).width
          }
        } catch (Eb) {
          return null
        }
      },
      ub = function(bb) {
        return [{
          words: Tb()(bb) ? [] : bb.toString().split(Qb)
        }]
      },
      rb = function(bb) {
        var ab = bb.width,
          Ub = bb.scaleToFit,
          Ab = bb.children,
          Mb = bb.style,
          Tb = bb.breakAll,
          Eb = bb.maxLines;
        if ((ab || Ub) && !Bb.b.isSsr) {
          var eb = qb({
            breakAll: Tb,
            children: Ab,
            style: Mb
          });
          return eb ? function(bb, ab, Ub, Ab, Mb) {
            var Tb = bb.maxLines,
              Eb = bb.children,
              Bb = bb.style,
              eb = bb.breakAll,
              vb = (0, Yb.E)(Tb),
              Lb = Eb,
              Pb = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(bb, ab) {
                  var Tb = ab.word,
                    Eb = ab.width,
                    Yb = bb[bb.length - 1];
                  if (Yb && (null == Ab || Mb || Yb.width + Eb + Ub < Number(Ab))) Yb.words.push(Tb), Yb.width += Eb + Ub;
                  else {
                    var Bb = {
                      words: [Tb],
                      width: Eb
                    };
                    bb.push(Bb)
                  }
                  return bb
                }), [])
              },
              Xb = Pb(ab);
            if (!vb) return Xb;
            for (var jb, Rb = function(bb) {
                var ab = Lb.slice(0, bb),
                  Ub = qb({
                    breakAll: eb,
                    style: Bb,
                    children: ab + "\u2026"
                  }).wordsWithComputedWidth,
                  Mb = Pb(Ub),
                  Eb = Mb.length > Tb || function(bb) {
                    return bb.reduce((function(bb, ab) {
                      return bb.width > ab.width ? bb : ab
                    }))
                  }(Mb).width > Number(Ab);
                return [Eb, Mb]
              }, kb = 0, yb = Lb.length - 1, Zb = 0; kb <= yb && Zb <= Lb.length - 1;) {
              var Db = Math.floor((kb + yb) / 2),
                zb = hb(Rb(Db - 1), 2),
                xb = zb[0],
                ib = zb[1],
                fb = hb(Rb(Db), 1)[0];
              if (xb || fb || (kb = Db + 1), xb && fb && (yb = Db - 1), !xb && fb) {
                jb = ib;
                break
              }
              Zb++
            }
            return jb || Xb
          }({
            breakAll: Tb,
            children: Ab,
            maxLines: Eb,
            style: Mb
          }, eb.wordsWithComputedWidth, eb.spaceWidth, ab, Ub) : ub(Ab)
        }
        return ub(Ab)
      },
      Kb = "#808080",
      ob = function(bb) {
        var ab = bb.x,
          Ub = void 0 === ab ? 0 : ab,
          Mb = bb.y,
          Tb = void 0 === Mb ? 0 : Mb,
          Bb = bb.lineHeight,
          vb = void 0 === Bb ? "1em" : Bb,
          Lb = bb.capHeight,
          Pb = void 0 === Lb ? "0.71em" : Lb,
          Xb = bb.scaleToFit,
          jb = void 0 !== Xb && Xb,
          Rb = bb.textAnchor,
          kb = void 0 === Rb ? "start" : Rb,
          yb = bb.verticalAnchor,
          Zb = void 0 === yb ? "end" : yb,
          Db = bb.fill,
          zb = void 0 === Db ? Kb : Db,
          xb = Fb(bb, Hb),
          ib = (0, Ab.useMemo)((function() {
            return rb({
              breakAll: xb.breakAll,
              children: xb.children,
              maxLines: xb.maxLines,
              scaleToFit: jb,
              style: xb.style,
              width: xb.width
            })
          }), [xb.breakAll, xb.children, xb.maxLines, jb, xb.style, xb.width]),
          fb = xb.dx,
          mb = xb.dy,
          pb = xb.angle,
          Nb = xb.className,
          hb = xb.breakAll,
          Gb = Fb(xb, Ib);
        if (!(0, Yb.B)(Ub) || !(0, Yb.B)(Tb)) return null;
        var Qb, qb = Ub + ((0, Yb.E)(fb) ? fb : 0),
          ub = Tb + ((0, Yb.E)(mb) ? mb : 0);
        switch (Zb) {
          case "start":
            Qb = Wb("calc(".concat(Pb, ")"));
            break;
          case "middle":
            Qb = Wb("calc(".concat((ib.length - 1) / 2, " * -").concat(vb, " + (").concat(Pb, " / 2))"));
            break;
          default:
            Qb = Wb("calc(".concat(ib.length - 1, " * -").concat(vb, ")"))
        }
        var ob = [];
        if (jb) {
          var lb = ib[0].width,
            tb = xb.width;
          ob.push("scale(".concat(((0, Yb.E)(tb) ? tb / lb : 1) / lb, ")"))
        }
        return pb && ob.push("rotate(".concat(pb, ", ").concat(qb, ", ").concat(ub, ")")), ob.length && (Gb.transform = ob.join(" ")), Ab.createElement("text", db({}, (0, eb.d)(Gb, !0), {
          x: qb,
          y: ub,
          className: (0, Eb.d)("recharts-text", Nb),
          textAnchor: kb,
          fill: zb.includes("url") ? Kb : zb
        }), ib.map((function(bb, ab) {
          var Ub = bb.words.join(hb ? "" : " ");
          return Ab.createElement("tspan", {
            x: qb,
            dy: 0 === ab ? Qb : vb,
            key: "".concat(Ub, "-").concat(ab)
          }, Ub)
        })))
      }
  },
  5561: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Jb
    });
    var Ab = Ub(52),
      Mb = Ub(5153),
      Tb = Ub.n(Mb),
      Eb = Ub(5041),
      Yb = Ub.n(Eb),
      Bb = Ub(4721),
      eb = Ub(4813);

    function vb(bb) {
      return vb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, vb(bb)
    }

    function Lb() {
      return Lb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Lb.apply(this, arguments)
    }

    function Pb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Xb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Xb(bb, ab)
      }(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function jb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Rb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? jb(Object(Ub), !0).forEach((function(ab) {
          kb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : jb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function kb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != vb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != vb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == vb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function yb(bb) {
      return Array.isArray(bb) && (0, eb.B)(bb[0]) && (0, eb.B)(bb[1]) ? bb.join(" ~ ") : bb
    }
    var Zb = function(bb) {
      var ab = bb.separator,
        Ub = void 0 === ab ? " : " : ab,
        Mb = bb.contentStyle,
        Eb = void 0 === Mb ? {} : Mb,
        vb = bb.itemStyle,
        Xb = void 0 === vb ? {} : vb,
        jb = bb.labelStyle,
        kb = void 0 === jb ? {} : jb,
        Zb = bb.payload,
        Db = bb.formatter,
        zb = bb.itemSorter,
        xb = bb.wrapperClassName,
        ib = bb.labelClassName,
        fb = bb.label,
        mb = bb.labelFormatter,
        pb = bb.accessibilityLayer,
        Nb = void 0 !== pb && pb,
        Wb = Rb({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, Eb),
        Hb = Rb({
          margin: 0
        }, kb),
        Ib = !Yb()(fb),
        db = Ib ? fb : "",
        Fb = (0, Bb.d)("recharts-default-tooltip", xb),
        hb = (0, Bb.d)("recharts-tooltip-label", ib);
      Ib && mb && void 0 !== Zb && null !== Zb && (db = mb(fb, Zb));
      var Gb = Nb ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return Ab.createElement("div", Lb({
        className: Fb,
        style: Wb
      }, Gb), Ab.createElement("p", {
        className: hb,
        style: Hb
      }, Ab.isValidElement(db) ? db : "".concat(db)), function() {
        if (Zb && Zb.length) {
          var bb = (zb ? Tb()(Zb, zb) : Zb).map((function(bb, ab) {
            if ("none" === bb.type) return null;
            var Mb = Rb({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: bb.color || "#000"
              }, Xb),
              Tb = bb.formatter || Db || yb,
              Eb = bb.value,
              Yb = bb.name,
              Bb = Eb,
              vb = Yb;
            if (Tb && null != Bb && null != vb) {
              var Lb = Tb(Eb, Yb, bb, ab, Zb);
              if (Array.isArray(Lb)) {
                var jb = Pb(Lb, 2);
                Bb = jb[0], vb = jb[1]
              } else Bb = Lb
            }
            return Ab.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(ab),
              style: Mb
            }, (0, eb.B)(vb) ? Ab.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, vb) : null, (0, eb.B)(vb) ? Ab.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, Ub) : null, Ab.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, Bb), Ab.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, bb.unit || ""))
          }));
          return Ab.createElement("ul", {
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

    function Db(bb) {
      return Db = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Db(bb)
    }

    function zb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Db(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Db(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Db(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var xb = "recharts-tooltip-wrapper",
      ib = {
        visibility: "hidden"
      };

    function fb(bb) {
      var ab = bb.coordinate,
        Ub = bb.translateX,
        Ab = bb.translateY;
      return (0, Bb.d)(xb, zb(zb(zb(zb({}, "".concat(xb, "-right"), (0, eb.E)(Ub) && ab && (0, eb.E)(ab.x) && Ub >= ab.x), "".concat(xb, "-left"), (0, eb.E)(Ub) && ab && (0, eb.E)(ab.x) && Ub < ab.x), "".concat(xb, "-bottom"), (0, eb.E)(Ab) && ab && (0, eb.E)(ab.y) && Ab >= ab.y), "".concat(xb, "-top"), (0, eb.E)(Ab) && ab && (0, eb.E)(ab.y) && Ab < ab.y))
    }

    function mb(bb) {
      var ab = bb.allowEscapeViewBox,
        Ub = bb.coordinate,
        Ab = bb.key,
        Mb = bb.offsetTopLeft,
        Tb = bb.position,
        Eb = bb.reverseDirection,
        Yb = bb.tooltipDimension,
        Bb = bb.viewBox,
        vb = bb.viewBoxDimension;
      if (Tb && (0, eb.E)(Tb[Ab])) return Tb[Ab];
      var Lb = Ub[Ab] - Yb - Mb,
        Pb = Ub[Ab] + Mb;
      return ab[Ab] ? Eb[Ab] ? Lb : Pb : Eb[Ab] ? Lb < Bb[Ab] ? Math.max(Pb, Bb[Ab]) : Math.max(Lb, Bb[Ab]) : Pb + Yb > Bb[Ab] + vb ? Math.max(Lb, Bb[Ab]) : Math.max(Pb, Bb[Ab])
    }

    function pb(bb) {
      return pb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, pb(bb)
    }

    function Nb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Wb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Nb(Object(Ub), !0).forEach((function(ab) {
          Gb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Nb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Hb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Qb(Ab.key), Ab)
      }
    }

    function Ib(bb, ab, Ub) {
      return ab = Fb(ab),
        function(bb, ab) {
          if (ab && ("object" === pb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, db() ? Reflect.construct(ab, Ub || [], Fb(bb).constructor) : ab.apply(bb, Ub))
    }

    function db() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (db = function() {
        return !!bb
      })()
    }

    function Fb(bb) {
      return Fb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, Fb(bb)
    }

    function hb(bb, ab) {
      return hb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, hb(bb, ab)
    }

    function Gb(bb, ab, Ub) {
      return (ab = Qb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Qb(bb) {
      var ab = function(bb, ab) {
        if ("object" != pb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != pb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == pb(ab) ? ab : ab + ""
    }
    var qb = function(bb) {
        function ab() {
          var bb;
          ! function(bb, ab) {
            if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
          }(this, ab);
          for (var Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
          return Gb(bb = Ib(this, ab, [].concat(Ab)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), Gb(bb, "handleKeyDown", (function(ab) {
            var Ub, Ab, Mb, Tb;
            "Escape" === ab.key && bb.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (Ub = null === (Ab = bb.props.coordinate) || void 0 === Ab ? void 0 : Ab.x) && void 0 !== Ub ? Ub : 0,
                y: null !== (Mb = null === (Tb = bb.props.coordinate) || void 0 === Tb ? void 0 : Tb.y) && void 0 !== Mb ? Mb : 0
              }
            })
          })), bb
        }
        return function(bb, ab) {
          if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
          bb.prototype = Object.create(ab && ab.prototype, {
            constructor: {
              value: bb,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), ab && hb(bb, ab)
        }(ab, bb), Ub = ab, (Mb = [{
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
            var bb, ab;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (bb = this.props.coordinate) || void 0 === bb ? void 0 : bb.x) === this.state.dismissedAtCoordinate.x && (null === (ab = this.props.coordinate) || void 0 === ab ? void 0 : ab.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var bb = this,
              ab = this.props,
              Ub = ab.active,
              Mb = ab.allowEscapeViewBox,
              Tb = ab.animationDuration,
              Eb = ab.animationEasing,
              Yb = ab.children,
              Bb = ab.coordinate,
              eb = ab.hasPayload,
              vb = ab.isAnimationActive,
              Lb = ab.offset,
              Pb = ab.position,
              Xb = ab.reverseDirection,
              jb = ab.useTranslate3d,
              Rb = ab.viewBox,
              kb = ab.wrapperStyle,
              yb = function(bb) {
                var ab, Ub, Ab = bb.allowEscapeViewBox,
                  Mb = bb.coordinate,
                  Tb = bb.offsetTopLeft,
                  Eb = bb.position,
                  Yb = bb.reverseDirection,
                  Bb = bb.tooltipBox,
                  eb = bb.useTranslate3d,
                  vb = bb.viewBox;
                return {
                  cssProperties: Bb.height > 0 && Bb.width > 0 && Mb ? function(bb) {
                    var ab = bb.translateX,
                      Ub = bb.translateY;
                    return {
                      transform: bb.useTranslate3d ? "translate3d(".concat(ab, "px, ").concat(Ub, "px, 0)") : "translate(".concat(ab, "px, ").concat(Ub, "px)")
                    }
                  }({
                    translateX: ab = mb({
                      allowEscapeViewBox: Ab,
                      coordinate: Mb,
                      key: "x",
                      offsetTopLeft: Tb,
                      position: Eb,
                      reverseDirection: Yb,
                      tooltipDimension: Bb.width,
                      viewBox: vb,
                      viewBoxDimension: vb.width
                    }),
                    translateY: Ub = mb({
                      allowEscapeViewBox: Ab,
                      coordinate: Mb,
                      key: "y",
                      offsetTopLeft: Tb,
                      position: Eb,
                      reverseDirection: Yb,
                      tooltipDimension: Bb.height,
                      viewBox: vb,
                      viewBoxDimension: vb.height
                    }),
                    useTranslate3d: eb
                  }) : ib,
                  cssClasses: fb({
                    translateX: ab,
                    translateY: Ub,
                    coordinate: Mb
                  })
                }
              }({
                allowEscapeViewBox: Mb,
                coordinate: Bb,
                offsetTopLeft: Lb,
                position: Pb,
                reverseDirection: Xb,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: jb,
                viewBox: Rb
              }),
              Zb = yb.cssClasses,
              Db = yb.cssProperties,
              zb = Wb(Wb({
                transition: vb && Ub ? "transform ".concat(Tb, "ms ").concat(Eb) : void 0
              }, Db), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && Ub && eb ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, kb);
            return Ab.createElement("div", {
              tabIndex: -1,
              className: Zb,
              style: zb,
              ref: function(ab) {
                bb.wrapperNode = ab
              }
            }, Yb)
          }
        }]) && Hb(Ub.prototype, Mb), Tb && Hb(Ub, Tb), Object.defineProperty(Ub, "prototype", {
          writable: !1
        }), Ub;
        var Ub, Mb, Tb
      }(Ab.PureComponent),
      ub = Ub(5567),
      rb = Ub(5575);

    function Kb(bb) {
      return Kb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Kb(bb)
    }

    function ob(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function lb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? ob(Object(Ub), !0).forEach((function(ab) {
          Vb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : ob(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function tb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Ob(Ab.key), Ab)
      }
    }

    function wb(bb, ab, Ub) {
      return ab = gb(ab),
        function(bb, ab) {
          if (ab && ("object" === Kb(ab) || "function" === typeof ab)) return ab;
          if (void 0 !== ab) throw new TypeError("Derived constructors may only return object or undefined");
          return function(bb) {
            if (void 0 === bb) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return bb
          }(bb)
        }(bb, sb() ? Reflect.construct(ab, Ub || [], gb(bb).constructor) : ab.apply(bb, Ub))
    }

    function sb() {
      try {
        var bb = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (bb) {}
      return (sb = function() {
        return !!bb
      })()
    }

    function gb(bb) {
      return gb = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(bb) {
        return bb.__proto__ || Object.getPrototypeOf(bb)
      }, gb(bb)
    }

    function Cb(bb, ab) {
      return Cb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(bb, ab) {
        return bb.__proto__ = ab, bb
      }, Cb(bb, ab)
    }

    function Vb(bb, ab, Ub) {
      return (ab = Ob(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Ob(bb) {
      var ab = function(bb, ab) {
        if ("object" != Kb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Kb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Kb(ab) ? ab : ab + ""
    }

    function cb(bb) {
      return bb.dataKey
    }
    var Jb = function(bb) {
      function ab() {
        return function(bb, ab) {
          if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
        }(this, ab), wb(this, ab, arguments)
      }
      return function(bb, ab) {
        if ("function" !== typeof ab && null !== ab) throw new TypeError("Super expression must either be null or a function");
        bb.prototype = Object.create(ab && ab.prototype, {
          constructor: {
            value: bb,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(bb, "prototype", {
          writable: !1
        }), ab && Cb(bb, ab)
      }(ab, bb), Ub = ab, (Mb = [{
        key: "render",
        value: function() {
          var bb = this,
            ab = this.props,
            Ub = ab.active,
            Mb = ab.allowEscapeViewBox,
            Tb = ab.animationDuration,
            Eb = ab.animationEasing,
            Yb = ab.content,
            Bb = ab.coordinate,
            eb = ab.filterNull,
            vb = ab.isAnimationActive,
            Lb = ab.offset,
            Pb = ab.payload,
            Xb = ab.payloadUniqBy,
            jb = ab.position,
            Rb = ab.reverseDirection,
            kb = ab.useTranslate3d,
            yb = ab.viewBox,
            Db = ab.wrapperStyle,
            zb = null !== Pb && void 0 !== Pb ? Pb : [];
          eb && zb.length && (zb = (0, rb.d)(Pb.filter((function(ab) {
            return null != ab.value && (!0 !== ab.hide || bb.props.includeHidden)
          })), Xb, cb));
          var xb = zb.length > 0;
          return Ab.createElement(qb, {
            allowEscapeViewBox: Mb,
            animationDuration: Tb,
            animationEasing: Eb,
            isAnimationActive: vb,
            active: Ub,
            coordinate: Bb,
            hasPayload: xb,
            offset: Lb,
            position: jb,
            reverseDirection: Rb,
            useTranslate3d: kb,
            viewBox: yb,
            wrapperStyle: Db
          }, function(bb, ab) {
            return Ab.isValidElement(bb) ? Ab.cloneElement(bb, ab) : "function" === typeof bb ? Ab.createElement(bb, ab) : Ab.createElement(Zb, ab)
          }(Yb, lb(lb({}, this.props), {}, {
            payload: zb
          })))
        }
      }]) && tb(Ub.prototype, Mb), Tb && tb(Ub, Tb), Object.defineProperty(Ub, "prototype", {
        writable: !1
      }), Ub;
      var Ub, Mb, Tb
    }(Ab.PureComponent);
    Vb(Jb, "displayName", "Tooltip"), Vb(Jb, "defaultProps", {
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
      isAnimationActive: !ub.b.isSsr,
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
  5553: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb
    });
    var Ab = Ub(52),
      Mb = Ub(4721),
      Tb = Ub(5058),
      Eb = ["children", "className"];

    function Yb() {
      return Yb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Yb.apply(this, arguments)
    }

    function Bb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }
    var eb = Ab.forwardRef((function(bb, ab) {
      var Ub = bb.children,
        eb = bb.className,
        vb = Bb(bb, Eb),
        Lb = (0, Mb.d)("recharts-layer", eb);
      return Ab.createElement("g", Yb({
        className: Lb
      }, (0, Tb.d)(vb, !0), {
        ref: ab
      }), Ub)
    }))
  },
  5546: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb
    });
    var Ab = Ub(52),
      Mb = Ub(4721),
      Tb = Ub(5058),
      Eb = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function Yb() {
      return Yb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Yb.apply(this, arguments)
    }

    function Bb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function eb(bb) {
      var ab = bb.children,
        Ub = bb.width,
        eb = bb.height,
        vb = bb.viewBox,
        Lb = bb.className,
        Pb = bb.style,
        Xb = bb.title,
        jb = bb.desc,
        Rb = Bb(bb, Eb),
        kb = vb || {
          width: Ub,
          height: eb,
          x: 0,
          y: 0
        },
        yb = (0, Mb.d)("recharts-surface", Lb);
      return Ab.createElement("svg", Yb({}, (0, Tb.d)(Rb, !0, "svg"), {
        className: yb,
        width: Ub,
        height: eb,
        style: Pb,
        viewBox: "".concat(kb.x, " ").concat(kb.y, " ").concat(kb.width, " ").concat(kb.height)
      }), Ab.createElement("title", null, Xb), Ab.createElement("desc", null, jb), ab)
    }
  },
  5948: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Db,
      h: () => ib,
      k: () => Hb,
      n: () => Wb,
      p: () => zb,
      t: () => Nb,
      v: () => pb,
      z: () => xb,
      C: () => mb,
      D: () => fb
    });
    var Ab = Ub(52),
      Mb = Ub(5542),
      Tb = Ub(5954),
      Eb = Ub.n(Tb),
      Yb = Ub(5886),
      Bb = Ub.n(Yb),
      eb = Ub(4870),
      vb = Ub.n(eb)()((function(bb) {
        return {
          x: bb.left,
          y: bb.top,
          width: bb.width,
          height: bb.height
        }
      }), (function(bb) {
        return ["l", bb.left, "t", bb.top, "w", bb.width, "h", bb.height].join("")
      })),
      Lb = Ub(4813);
    var Pb = (0, Ab.createContext)(void 0),
      Xb = (0, Ab.createContext)(void 0),
      jb = (0, Ab.createContext)(void 0),
      Rb = (0, Ab.createContext)({}),
      kb = (0, Ab.createContext)(void 0),
      yb = (0, Ab.createContext)(0),
      Zb = (0, Ab.createContext)(0),
      Db = function(bb) {
        var ab = bb.state,
          Ub = ab.xAxisMap,
          Mb = ab.yAxisMap,
          Tb = ab.offset,
          Eb = bb.clipPathId,
          Yb = bb.children,
          Bb = bb.width,
          eb = bb.height,
          Lb = vb(Tb);
        return Ab.createElement(Pb.Provider, {
          value: Ub
        }, Ab.createElement(Xb.Provider, {
          value: Mb
        }, Ab.createElement(Rb.Provider, {
          value: Tb
        }, Ab.createElement(jb.Provider, {
          value: Lb
        }, Ab.createElement(kb.Provider, {
          value: Eb
        }, Ab.createElement(yb.Provider, {
          value: eb
        }, Ab.createElement(Zb.Provider, {
          value: Bb
        }, Yb)))))))
      },
      zb = function() {
        return (0, Ab.useContext)(kb)
      };
    var xb = function(bb) {
        var ab = (0, Ab.useContext)(Pb);
        null == ab && (0, Mb.b)(!1);
        var Ub = ab[bb];
        return null == Ub && (0, Mb.b)(!1), Ub
      },
      ib = function() {
        var bb = (0, Ab.useContext)(Pb);
        return (0, Lb.j)(bb)
      },
      fb = function() {
        var bb = (0, Ab.useContext)(Xb);
        return Eb()(bb, (function(bb) {
          return Bb()(bb.domain, Number.isFinite)
        })) || (0, Lb.j)(bb)
      },
      mb = function(bb) {
        var ab = (0, Ab.useContext)(Xb);
        null == ab && (0, Mb.b)(!1);
        var Ub = ab[bb];
        return null == Ub && (0, Mb.b)(!1), Ub
      },
      pb = function() {
        return (0, Ab.useContext)(jb)
      },
      Nb = function() {
        return (0, Ab.useContext)(Rb)
      },
      Wb = function() {
        return (0, Ab.useContext)(Zb)
      },
      Hb = function() {
        return (0, Ab.useContext)(yb)
      }
  },
  5975: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => cb
    });
    var Ab = Ub(52);

    function Mb() {}

    function Tb(bb, ab, Ub) {
      bb._context.bezierCurveTo((2 * bb._x0 + bb._x1) / 3, (2 * bb._y0 + bb._y1) / 3, (bb._x0 + 2 * bb._x1) / 3, (bb._y0 + 2 * bb._y1) / 3, (bb._x0 + 4 * bb._x1 + ab) / 6, (bb._y0 + 4 * bb._y1 + Ub) / 6)
    }

    function Eb(bb) {
      this._context = bb
    }

    function Yb(bb) {
      this._context = bb
    }

    function Bb(bb) {
      this._context = bb
    }
    Eb.prototype = {
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
            Tb(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(bb, ab) {
        switch (bb = +bb, ab = +ab, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(bb, ab) : this._context.moveTo(bb, ab);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            Tb(this, bb, ab)
        }
        this._x0 = this._x1, this._x1 = bb, this._y0 = this._y1, this._y1 = ab
      }
    }, Yb.prototype = {
      areaStart: Mb,
      areaEnd: Mb,
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
      point: function(bb, ab) {
        switch (bb = +bb, ab = +ab, this._point) {
          case 0:
            this._point = 1, this._x2 = bb, this._y2 = ab;
            break;
          case 1:
            this._point = 2, this._x3 = bb, this._y3 = ab;
            break;
          case 2:
            this._point = 3, this._x4 = bb, this._y4 = ab, this._context.moveTo((this._x0 + 4 * this._x1 + bb) / 6, (this._y0 + 4 * this._y1 + ab) / 6);
            break;
          default:
            Tb(this, bb, ab)
        }
        this._x0 = this._x1, this._x1 = bb, this._y0 = this._y1, this._y1 = ab
      }
    }, Bb.prototype = {
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
      point: function(bb, ab) {
        switch (bb = +bb, ab = +ab, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var Ub = (this._x0 + 4 * this._x1 + bb) / 6,
              Ab = (this._y0 + 4 * this._y1 + ab) / 6;
            this._line ? this._context.lineTo(Ub, Ab) : this._context.moveTo(Ub, Ab);
            break;
          case 3:
            this._point = 4;
          default:
            Tb(this, bb, ab)
        }
        this._x0 = this._x1, this._x1 = bb, this._y0 = this._y1, this._y1 = ab
      }
    };
    class eb {
      constructor(bb, ab) {
        this._context = bb, this._x = ab
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
      point(bb, ab) {
        switch (bb = +bb, ab = +ab, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(bb, ab) : this._context.moveTo(bb, ab);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + bb) / 2, this._y0, this._x0, ab, bb, ab) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + ab) / 2, bb, this._y0, bb, ab)
        }
        this._x0 = bb, this._y0 = ab
      }
    }

    function vb(bb) {
      this._context = bb
    }

    function Lb(bb) {
      this._context = bb
    }

    function Pb(bb) {
      return new Lb(bb)
    }

    function Xb(bb) {
      return bb < 0 ? -1 : 1
    }

    function jb(bb, ab, Ub) {
      var Ab = bb._x1 - bb._x0,
        Mb = ab - bb._x1,
        Tb = (bb._y1 - bb._y0) / (Ab || Mb < 0 && -0),
        Eb = (Ub - bb._y1) / (Mb || Ab < 0 && -0),
        Yb = (Tb * Mb + Eb * Ab) / (Ab + Mb);
      return (Xb(Tb) + Xb(Eb)) * Math.min(Math.abs(Tb), Math.abs(Eb), .5 * Math.abs(Yb)) || 0
    }

    function Rb(bb, ab) {
      var Ub = bb._x1 - bb._x0;
      return Ub ? (3 * (bb._y1 - bb._y0) / Ub - ab) / 2 : ab
    }

    function kb(bb, ab, Ub) {
      var Ab = bb._x0,
        Mb = bb._y0,
        Tb = bb._x1,
        Eb = bb._y1,
        Yb = (Tb - Ab) / 3;
      bb._context.bezierCurveTo(Ab + Yb, Mb + Yb * ab, Tb - Yb, Eb - Yb * Ub, Tb, Eb)
    }

    function yb(bb) {
      this._context = bb
    }

    function Zb(bb) {
      this._context = new Db(bb)
    }

    function Db(bb) {
      this._context = bb
    }

    function zb(bb) {
      this._context = bb
    }

    function xb(bb) {
      var ab, Ub, Ab = bb.length - 1,
        Mb = new Array(Ab),
        Tb = new Array(Ab),
        Eb = new Array(Ab);
      for (Mb[0] = 0, Tb[0] = 2, Eb[0] = bb[0] + 2 * bb[1], ab = 1; ab < Ab - 1; ++ab) Mb[ab] = 1, Tb[ab] = 4, Eb[ab] = 4 * bb[ab] + 2 * bb[ab + 1];
      for (Mb[Ab - 1] = 2, Tb[Ab - 1] = 7, Eb[Ab - 1] = 8 * bb[Ab - 1] + bb[Ab], ab = 1; ab < Ab; ++ab) Ub = Mb[ab] / Tb[ab - 1], Tb[ab] -= Ub, Eb[ab] -= Ub * Eb[ab - 1];
      for (Mb[Ab - 1] = Eb[Ab - 1] / Tb[Ab - 1], ab = Ab - 2; ab >= 0; --ab) Mb[ab] = (Eb[ab] - Mb[ab + 1]) / Tb[ab];
      for (Tb[Ab - 1] = (bb[Ab] + Mb[Ab - 1]) / 2, ab = 0; ab < Ab - 1; ++ab) Tb[ab] = 2 * bb[ab + 1] - Mb[ab + 1];
      return [Mb, Tb]
    }

    function ib(bb, ab) {
      this._context = bb, this._t = ab
    }
    vb.prototype = {
      areaStart: Mb,
      areaEnd: Mb,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(bb, ab) {
        bb = +bb, ab = +ab, this._point ? this._context.lineTo(bb, ab) : (this._point = 1, this._context.moveTo(bb, ab))
      }
    }, Lb.prototype = {
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
      point: function(bb, ab) {
        switch (bb = +bb, ab = +ab, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(bb, ab) : this._context.moveTo(bb, ab);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(bb, ab)
        }
      }
    }, yb.prototype = {
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
            kb(this, this._t0, Rb(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(bb, ab) {
        var Ub = NaN;
        if (ab = +ab, (bb = +bb) !== this._x1 || ab !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(bb, ab) : this._context.moveTo(bb, ab);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, kb(this, Rb(this, Ub = jb(this, bb, ab)), Ub);
              break;
            default:
              kb(this, this._t0, Ub = jb(this, bb, ab))
          }
          this._x0 = this._x1, this._x1 = bb, this._y0 = this._y1, this._y1 = ab, this._t0 = Ub
        }
      }
    }, (Zb.prototype = Object.create(yb.prototype)).point = function(bb, ab) {
      yb.prototype.point.call(this, ab, bb)
    }, Db.prototype = {
      moveTo: function(bb, ab) {
        this._context.moveTo(ab, bb)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(bb, ab) {
        this._context.lineTo(ab, bb)
      },
      bezierCurveTo: function(bb, ab, Ub, Ab, Mb, Tb) {
        this._context.bezierCurveTo(ab, bb, Ab, Ub, Tb, Mb)
      }
    }, zb.prototype = {
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
          ab = this._y,
          Ub = bb.length;
        if (Ub)
          if (this._line ? this._context.lineTo(bb[0], ab[0]) : this._context.moveTo(bb[0], ab[0]), 2 === Ub) this._context.lineTo(bb[1], ab[1]);
          else
            for (var Ab = xb(bb), Mb = xb(ab), Tb = 0, Eb = 1; Eb < Ub; ++Tb, ++Eb) this._context.bezierCurveTo(Ab[0][Tb], Mb[0][Tb], Ab[1][Tb], Mb[1][Tb], bb[Eb], ab[Eb]);
        (this._line || 0 !== this._line && 1 === Ub) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(bb, ab) {
        this._x.push(+bb), this._y.push(+ab)
      }
    }, ib.prototype = {
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
      point: function(bb, ab) {
        switch (bb = +bb, ab = +ab, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(bb, ab) : this._context.moveTo(bb, ab);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, ab), this._context.lineTo(bb, ab);
            else {
              var Ub = this._x * (1 - this._t) + bb * this._t;
              this._context.lineTo(Ub, this._y), this._context.lineTo(Ub, ab)
            }
        }
        this._x = bb, this._y = ab
      }
    };
    var fb = Ub(5834),
      mb = Ub(5709),
      pb = Ub(5717);

    function Nb(bb) {
      return bb[0]
    }

    function Wb(bb) {
      return bb[1]
    }

    function Hb(bb, ab) {
      var Ub = (0, mb.d)(!0),
        Ab = null,
        Mb = Pb,
        Tb = null,
        Eb = (0, pb.b)(Yb);

      function Yb(Yb) {
        var Bb, eb, vb, Lb = (Yb = (0, fb.b)(Yb)).length,
          Pb = !1;
        for (null == Ab && (Tb = Mb(vb = Eb())), Bb = 0; Bb <= Lb; ++Bb) !(Bb < Lb && Ub(eb = Yb[Bb], Bb, Yb)) === Pb && ((Pb = !Pb) ? Tb.lineStart() : Tb.lineEnd()), Pb && Tb.point(+bb(eb, Bb, Yb), +ab(eb, Bb, Yb));
        if (vb) return Tb = null, vb + "" || null
      }
      return bb = "function" === typeof bb ? bb : void 0 === bb ? Nb : (0, mb.d)(bb), ab = "function" === typeof ab ? ab : void 0 === ab ? Wb : (0, mb.d)(ab), Yb.x = function(ab) {
        return arguments.length ? (bb = "function" === typeof ab ? ab : (0, mb.d)(+ab), Yb) : bb
      }, Yb.y = function(bb) {
        return arguments.length ? (ab = "function" === typeof bb ? bb : (0, mb.d)(+bb), Yb) : ab
      }, Yb.defined = function(bb) {
        return arguments.length ? (Ub = "function" === typeof bb ? bb : (0, mb.d)(!!bb), Yb) : Ub
      }, Yb.curve = function(bb) {
        return arguments.length ? (Mb = bb, null != Ab && (Tb = Mb(Ab)), Yb) : Mb
      }, Yb.context = function(bb) {
        return arguments.length ? (null == bb ? Ab = Tb = null : Tb = Mb(Ab = bb), Yb) : Ab
      }, Yb
    }

    function Ib(bb, ab, Ub) {
      var Ab = null,
        Mb = (0, mb.d)(!0),
        Tb = null,
        Eb = Pb,
        Yb = null,
        Bb = (0, pb.b)(eb);

      function eb(eb) {
        var vb, Lb, Pb, Xb, jb, Rb = (eb = (0, fb.b)(eb)).length,
          kb = !1,
          yb = new Array(Rb),
          Zb = new Array(Rb);
        for (null == Tb && (Yb = Eb(jb = Bb())), vb = 0; vb <= Rb; ++vb) {
          if (!(vb < Rb && Mb(Xb = eb[vb], vb, eb)) === kb)
            if (kb = !kb) Lb = vb, Yb.areaStart(), Yb.lineStart();
            else {
              for (Yb.lineEnd(), Yb.lineStart(), Pb = vb - 1; Pb >= Lb; --Pb) Yb.point(yb[Pb], Zb[Pb]);
              Yb.lineEnd(), Yb.areaEnd()
            } kb && (yb[vb] = +bb(Xb, vb, eb), Zb[vb] = +ab(Xb, vb, eb), Yb.point(Ab ? +Ab(Xb, vb, eb) : yb[vb], Ub ? +Ub(Xb, vb, eb) : Zb[vb]))
        }
        if (jb) return Yb = null, jb + "" || null
      }

      function vb() {
        return Hb().defined(Mb).curve(Eb).context(Tb)
      }
      return bb = "function" === typeof bb ? bb : void 0 === bb ? Nb : (0, mb.d)(+bb), ab = "function" === typeof ab ? ab : void 0 === ab ? (0, mb.d)(0) : (0, mb.d)(+ab), Ub = "function" === typeof Ub ? Ub : void 0 === Ub ? Wb : (0, mb.d)(+Ub), eb.x = function(ab) {
        return arguments.length ? (bb = "function" === typeof ab ? ab : (0, mb.d)(+ab), Ab = null, eb) : bb
      }, eb.x0 = function(ab) {
        return arguments.length ? (bb = "function" === typeof ab ? ab : (0, mb.d)(+ab), eb) : bb
      }, eb.x1 = function(bb) {
        return arguments.length ? (Ab = null == bb ? null : "function" === typeof bb ? bb : (0, mb.d)(+bb), eb) : Ab
      }, eb.y = function(bb) {
        return arguments.length ? (ab = "function" === typeof bb ? bb : (0, mb.d)(+bb), Ub = null, eb) : ab
      }, eb.y0 = function(bb) {
        return arguments.length ? (ab = "function" === typeof bb ? bb : (0, mb.d)(+bb), eb) : ab
      }, eb.y1 = function(bb) {
        return arguments.length ? (Ub = null == bb ? null : "function" === typeof bb ? bb : (0, mb.d)(+bb), eb) : Ub
      }, eb.lineX0 = eb.lineY0 = function() {
        return vb().x(bb).y(ab)
      }, eb.lineY1 = function() {
        return vb().x(bb).y(Ub)
      }, eb.lineX1 = function() {
        return vb().x(Ab).y(ab)
      }, eb.defined = function(bb) {
        return arguments.length ? (Mb = "function" === typeof bb ? bb : (0, mb.d)(!!bb), eb) : Mb
      }, eb.curve = function(bb) {
        return arguments.length ? (Eb = bb, null != Tb && (Yb = Eb(Tb)), eb) : Eb
      }, eb.context = function(bb) {
        return arguments.length ? (null == bb ? Tb = Yb = null : Yb = Eb(Tb = bb), eb) : Tb
      }, eb
    }
    var db = Ub(5656),
      Fb = Ub.n(db),
      hb = Ub(4904),
      Gb = Ub.n(hb),
      Qb = Ub(4721),
      qb = Ub(5080),
      ub = Ub(5058),
      rb = Ub(4813);

    function Kb(bb) {
      return Kb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Kb(bb)
    }

    function ob() {
      return ob = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, ob.apply(this, arguments)
    }

    function lb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function tb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? lb(Object(Ub), !0).forEach((function(ab) {
          wb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : lb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function wb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Kb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Kb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Kb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var sb = {
        curveBasisClosed: function(bb) {
          return new Yb(bb)
        },
        curveBasisOpen: function(bb) {
          return new Bb(bb)
        },
        curveBasis: function(bb) {
          return new Eb(bb)
        },
        curveBumpX: function(bb) {
          return new eb(bb, !0)
        },
        curveBumpY: function(bb) {
          return new eb(bb, !1)
        },
        curveLinearClosed: function(bb) {
          return new vb(bb)
        },
        curveLinear: Pb,
        curveMonotoneX: function(bb) {
          return new yb(bb)
        },
        curveMonotoneY: function(bb) {
          return new Zb(bb)
        },
        curveNatural: function(bb) {
          return new zb(bb)
        },
        curveStep: function(bb) {
          return new ib(bb, .5)
        },
        curveStepAfter: function(bb) {
          return new ib(bb, 1)
        },
        curveStepBefore: function(bb) {
          return new ib(bb, 0)
        }
      },
      gb = function(bb) {
        return bb.x === +bb.x && bb.y === +bb.y
      },
      Cb = function(bb) {
        return bb.x
      },
      Vb = function(bb) {
        return bb.y
      },
      Ob = function(bb) {
        var ab, Ub = bb.type,
          Ab = void 0 === Ub ? "linear" : Ub,
          Mb = bb.points,
          Tb = void 0 === Mb ? [] : Mb,
          Eb = bb.baseLine,
          Yb = bb.layout,
          Bb = bb.connectNulls,
          eb = void 0 !== Bb && Bb,
          vb = function(bb, ab) {
            if (Gb()(bb)) return bb;
            var Ub = "curve".concat(Fb()(bb));
            return "curveMonotone" !== Ub && "curveBump" !== Ub || !ab ? sb[Ub] || Pb : sb["".concat(Ub).concat("vertical" === ab ? "Y" : "X")]
          }(Ab, Yb),
          Lb = eb ? Tb.filter((function(bb) {
            return gb(bb)
          })) : Tb;
        if (Array.isArray(Eb)) {
          var Xb = eb ? Eb.filter((function(bb) {
              return gb(bb)
            })) : Eb,
            jb = Lb.map((function(bb, ab) {
              return tb(tb({}, bb), {}, {
                base: Xb[ab]
              })
            }));
          return (ab = "vertical" === Yb ? Ib().y(Vb).x1(Cb).x0((function(bb) {
            return bb.base.x
          })) : Ib().x(Cb).y1(Vb).y0((function(bb) {
            return bb.base.y
          }))).defined(gb).curve(vb), ab(jb)
        }
        return (ab = "vertical" === Yb && (0, rb.E)(Eb) ? Ib().y(Vb).x1(Cb).x0(Eb) : (0, rb.E)(Eb) ? Ib().x(Cb).y1(Vb).y0(Eb) : Hb().x(Cb).y(Vb)).defined(gb).curve(vb), ab(Lb)
      },
      cb = function(bb) {
        var ab = bb.className,
          Ub = bb.points,
          Mb = bb.path,
          Tb = bb.pathRef;
        if ((!Ub || !Ub.length) && !Mb) return null;
        var Eb = Ub && Ub.length ? Ob(bb) : Mb;
        return Ab.createElement("path", ob({}, (0, ub.d)(bb, !1), (0, qb.o)(bb), {
          className: (0, Qb.d)("recharts-curve", ab),
          d: Eb,
          ref: Tb
        }))
      }
  },
  5723: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Bb
    });
    var Ab = Ub(52),
      Mb = Ub(4721),
      Tb = Ub(5080),
      Eb = Ub(5058);

    function Yb() {
      return Yb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Yb.apply(this, arguments)
    }
    var Bb = function(bb) {
      var ab = bb.cx,
        Ub = bb.cy,
        Bb = bb.r,
        eb = bb.className,
        vb = (0, Mb.d)("recharts-dot", eb);
      return ab === +ab && Ub === +Ub && Bb === +Bb ? Ab.createElement("circle", Yb({}, (0, Eb.d)(bb, !1), (0, Tb.o)(bb), {
        className: vb,
        cx: ab,
        cy: Ub,
        r: Bb
      })) : null
    }
  },
  5730: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => yb,
      h: () => Rb
    });
    var Ab = Ub(52),
      Mb = Ub(4721),
      Tb = Ub(5735),
      Eb = Ub(5058);

    function Yb(bb) {
      return Yb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Yb(bb)
    }

    function Bb() {
      return Bb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Bb.apply(this, arguments)
    }

    function eb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return vb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return vb(bb, ab)
      }(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function Lb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Pb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Lb(Object(Ub), !0).forEach((function(ab) {
          Xb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Lb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Xb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Yb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Yb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Yb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var jb = function(bb, ab, Ub, Ab, Mb) {
        var Tb, Eb = Math.min(Math.abs(Ub) / 2, Math.abs(Ab) / 2),
          Yb = Ab >= 0 ? 1 : -1,
          Bb = Ub >= 0 ? 1 : -1,
          eb = Ab >= 0 && Ub >= 0 || Ab < 0 && Ub < 0 ? 1 : 0;
        if (Eb > 0 && Mb instanceof Array) {
          for (var vb = [0, 0, 0, 0], Lb = 0; Lb < 4; Lb++) vb[Lb] = Mb[Lb] > Eb ? Eb : Mb[Lb];
          Tb = "M".concat(bb, ",").concat(ab + Yb * vb[0]), vb[0] > 0 && (Tb += "A ".concat(vb[0], ",").concat(vb[0], ",0,0,").concat(eb, ",").concat(bb + Bb * vb[0], ",").concat(ab)), Tb += "L ".concat(bb + Ub - Bb * vb[1], ",").concat(ab), vb[1] > 0 && (Tb += "A ".concat(vb[1], ",").concat(vb[1], ",0,0,").concat(eb, ",\n        ").concat(bb + Ub, ",").concat(ab + Yb * vb[1])), Tb += "L ".concat(bb + Ub, ",").concat(ab + Ab - Yb * vb[2]), vb[2] > 0 && (Tb += "A ".concat(vb[2], ",").concat(vb[2], ",0,0,").concat(eb, ",\n        ").concat(bb + Ub - Bb * vb[2], ",").concat(ab + Ab)), Tb += "L ".concat(bb + Bb * vb[3], ",").concat(ab + Ab), vb[3] > 0 && (Tb += "A ".concat(vb[3], ",").concat(vb[3], ",0,0,").concat(eb, ",\n        ").concat(bb, ",").concat(ab + Ab - Yb * vb[3])), Tb += "Z"
        } else if (Eb > 0 && Mb === +Mb && Mb > 0) {
          var Pb = Math.min(Eb, Mb);
          Tb = "M ".concat(bb, ",").concat(ab + Yb * Pb, "\n            A ").concat(Pb, ",").concat(Pb, ",0,0,").concat(eb, ",").concat(bb + Bb * Pb, ",").concat(ab, "\n            L ").concat(bb + Ub - Bb * Pb, ",").concat(ab, "\n            A ").concat(Pb, ",").concat(Pb, ",0,0,").concat(eb, ",").concat(bb + Ub, ",").concat(ab + Yb * Pb, "\n            L ").concat(bb + Ub, ",").concat(ab + Ab - Yb * Pb, "\n            A ").concat(Pb, ",").concat(Pb, ",0,0,").concat(eb, ",").concat(bb + Ub - Bb * Pb, ",").concat(ab + Ab, "\n            L ").concat(bb + Bb * Pb, ",").concat(ab + Ab, "\n            A ").concat(Pb, ",").concat(Pb, ",0,0,").concat(eb, ",").concat(bb, ",").concat(ab + Ab - Yb * Pb, " Z")
        } else Tb = "M ".concat(bb, ",").concat(ab, " h ").concat(Ub, " v ").concat(Ab, " h ").concat(-Ub, " Z");
        return Tb
      },
      Rb = function(bb, ab) {
        if (!bb || !ab) return !1;
        var Ub = bb.x,
          Ab = bb.y,
          Mb = ab.x,
          Tb = ab.y,
          Eb = ab.width,
          Yb = ab.height;
        if (Math.abs(Eb) > 0 && Math.abs(Yb) > 0) {
          var Bb = Math.min(Mb, Mb + Eb),
            eb = Math.max(Mb, Mb + Eb),
            vb = Math.min(Tb, Tb + Yb),
            Lb = Math.max(Tb, Tb + Yb);
          return Ub >= Bb && Ub <= eb && Ab >= vb && Ab <= Lb
        }
        return !1
      },
      kb = {
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
      yb = function(bb) {
        var ab = Pb(Pb({}, kb), bb),
          Ub = (0, Ab.useRef)(),
          Yb = eb((0, Ab.useState)(-1), 2),
          vb = Yb[0],
          Lb = Yb[1];
        (0, Ab.useEffect)((function() {
          if (Ub.current && Ub.current.getTotalLength) try {
            var bb = Ub.current.getTotalLength();
            bb && Lb(bb)
          } catch (ab) {}
        }), []);
        var Xb = ab.x,
          Rb = ab.y,
          yb = ab.width,
          Zb = ab.height,
          Db = ab.radius,
          zb = ab.className,
          xb = ab.animationEasing,
          ib = ab.animationDuration,
          fb = ab.animationBegin,
          mb = ab.isAnimationActive,
          pb = ab.isUpdateAnimationActive;
        if (Xb !== +Xb || Rb !== +Rb || yb !== +yb || Zb !== +Zb || 0 === yb || 0 === Zb) return null;
        var Nb = (0, Mb.d)("recharts-rectangle", zb);
        return pb ? Ab.createElement(Tb.e, {
          canBegin: vb > 0,
          from: {
            width: yb,
            height: Zb,
            x: Xb,
            y: Rb
          },
          to: {
            width: yb,
            height: Zb,
            x: Xb,
            y: Rb
          },
          duration: ib,
          animationEasing: xb,
          isActive: pb
        }, (function(bb) {
          var Mb = bb.width,
            Yb = bb.height,
            eb = bb.x,
            Lb = bb.y;
          return Ab.createElement(Tb.e, {
            canBegin: vb > 0,
            from: "0px ".concat(-1 === vb ? 1 : vb, "px"),
            to: "".concat(vb, "px 0px"),
            attributeName: "strokeDasharray",
            bX: fb,
            duration: ib,
            isActive: mb,
            easing: xb
          }, Ab.createElement("path", Bb({}, (0, Eb.d)(ab, !0), {
            className: Nb,
            d: jb(eb, Lb, Mb, Yb, Db),
            ref: Ub
          })))
        })) : Ab.createElement("path", Bb({}, (0, Eb.d)(ab, !0), {
          className: Nb,
          d: jb(Xb, Rb, yb, Zb, Db)
        }))
      }
  },
  5927: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => kb
    });
    var Ab = Ub(52),
      Mb = Ub(4721),
      Tb = Ub(5058),
      Eb = Ub(5849),
      Yb = Ub(4813);

    function Bb(bb) {
      return Bb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Bb(bb)
    }

    function eb() {
      return eb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, eb.apply(this, arguments)
    }

    function vb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Lb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? vb(Object(Ub), !0).forEach((function(ab) {
          Pb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : vb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Pb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Bb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Bb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Bb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var Xb = function(bb) {
        var ab = bb.cx,
          Ub = bb.cy,
          Ab = bb.radius,
          Mb = bb.angle,
          Tb = bb.sign,
          Yb = bb.isExternal,
          Bb = bb.cornerRadius,
          eb = bb.cornerIsExternal,
          vb = Bb * (Yb ? 1 : -1) + Ab,
          Lb = Math.asin(Bb / vb) / Eb.e,
          Pb = eb ? Mb : Mb + Tb * Lb,
          Xb = eb ? Mb - Tb * Lb : Mb;
        return {
          center: (0, Eb.i)(ab, Ub, vb, Pb),
          circleTangency: (0, Eb.i)(ab, Ub, Ab, Pb),
          lineTangency: (0, Eb.i)(ab, Ub, vb * Math.cos(Lb * Eb.e), Xb),
          Re: Lb
        }
      },
      jb = function(bb) {
        var ab = bb.cx,
          Ub = bb.cy,
          Ab = bb.innerRadius,
          Mb = bb.outerRadius,
          Tb = bb.startAngle,
          Bb = function(bb, ab) {
            return (0, Yb.I)(ab - bb) * Math.min(Math.abs(ab - bb), 359.999)
          }(Tb, bb.endAngle),
          eb = Tb + Bb,
          vb = (0, Eb.i)(ab, Ub, Mb, Tb),
          Lb = (0, Eb.i)(ab, Ub, Mb, eb),
          Pb = "M ".concat(vb.x, ",").concat(vb.y, "\n    A ").concat(Mb, ",").concat(Mb, ",0,\n    ").concat(+(Math.abs(Bb) > 180), ",").concat(+(Tb > eb), ",\n    ").concat(Lb.x, ",").concat(Lb.y, "\n  ");
        if (Ab > 0) {
          var Xb = (0, Eb.i)(ab, Ub, Ab, Tb),
            jb = (0, Eb.i)(ab, Ub, Ab, eb);
          Pb += "L ".concat(jb.x, ",").concat(jb.y, "\n            A ").concat(Ab, ",").concat(Ab, ",0,\n            ").concat(+(Math.abs(Bb) > 180), ",").concat(+(Tb <= eb), ",\n            ").concat(Xb.x, ",").concat(Xb.y, " Z")
        } else Pb += "L ".concat(ab, ",").concat(Ub, " Z");
        return Pb
      },
      Rb = {
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
      kb = function(bb) {
        var ab = Lb(Lb({}, Rb), bb),
          Ub = ab.cx,
          Eb = ab.cy,
          Bb = ab.innerRadius,
          vb = ab.outerRadius,
          Pb = ab.cornerRadius,
          kb = ab.forceCornerRadius,
          yb = ab.cornerIsExternal,
          Zb = ab.startAngle,
          Db = ab.endAngle,
          zb = ab.className;
        if (vb < Bb || Zb === Db) return null;
        var xb, ib = (0, Mb.d)("recharts-sector", zb),
          fb = vb - Bb,
          mb = (0, Yb.o)(Pb, fb, 0, !0);
        return xb = mb > 0 && Math.abs(Zb - Db) < 360 ? function(bb) {
          var ab = bb.cx,
            Ub = bb.cy,
            Ab = bb.innerRadius,
            Mb = bb.outerRadius,
            Tb = bb.cornerRadius,
            Eb = bb.forceCornerRadius,
            Bb = bb.cornerIsExternal,
            eb = bb.startAngle,
            vb = bb.endAngle,
            Lb = (0, Yb.I)(vb - eb),
            Pb = Xb({
              cx: ab,
              cy: Ub,
              radius: Mb,
              angle: eb,
              sign: Lb,
              cornerRadius: Tb,
              cornerIsExternal: Bb
            }),
            Rb = Pb.circleTangency,
            kb = Pb.lineTangency,
            yb = Pb.Re,
            Zb = Xb({
              cx: ab,
              cy: Ub,
              radius: Mb,
              angle: vb,
              sign: -Lb,
              cornerRadius: Tb,
              cornerIsExternal: Bb
            }),
            Db = Zb.circleTangency,
            zb = Zb.lineTangency,
            xb = Zb.Re,
            ib = Bb ? Math.abs(eb - vb) : Math.abs(eb - vb) - yb - xb;
          if (ib < 0) return Eb ? "M ".concat(kb.x, ",").concat(kb.y, "\n        a").concat(Tb, ",").concat(Tb, ",0,0,1,").concat(2 * Tb, ",0\n        a").concat(Tb, ",").concat(Tb, ",0,0,1,").concat(2 * -Tb, ",0\n      ") : jb({
            cx: ab,
            cy: Ub,
            innerRadius: Ab,
            outerRadius: Mb,
            startAngle: eb,
            endAngle: vb
          });
          var fb = "M ".concat(kb.x, ",").concat(kb.y, "\n    A").concat(Tb, ",").concat(Tb, ",0,0,").concat(+(Lb < 0), ",").concat(Rb.x, ",").concat(Rb.y, "\n    A").concat(Mb, ",").concat(Mb, ",0,").concat(+(ib > 180), ",").concat(+(Lb < 0), ",").concat(Db.x, ",").concat(Db.y, "\n    A").concat(Tb, ",").concat(Tb, ",0,0,").concat(+(Lb < 0), ",").concat(zb.x, ",").concat(zb.y, "\n  ");
          if (Ab > 0) {
            var mb = Xb({
                cx: ab,
                cy: Ub,
                radius: Ab,
                angle: eb,
                sign: Lb,
                isExternal: !0,
                cornerRadius: Tb,
                cornerIsExternal: Bb
              }),
              pb = mb.circleTangency,
              Nb = mb.lineTangency,
              Wb = mb.Re,
              Hb = Xb({
                cx: ab,
                cy: Ub,
                radius: Ab,
                angle: vb,
                sign: -Lb,
                isExternal: !0,
                cornerRadius: Tb,
                cornerIsExternal: Bb
              }),
              Ib = Hb.circleTangency,
              db = Hb.lineTangency,
              Fb = Hb.Re,
              hb = Bb ? Math.abs(eb - vb) : Math.abs(eb - vb) - Wb - Fb;
            if (hb < 0 && 0 === Tb) return "".concat(fb, "L").concat(ab, ",").concat(Ub, "Z");
            fb += "L".concat(db.x, ",").concat(db.y, "\n      A").concat(Tb, ",").concat(Tb, ",0,0,").concat(+(Lb < 0), ",").concat(Ib.x, ",").concat(Ib.y, "\n      A").concat(Ab, ",").concat(Ab, ",0,").concat(+(hb > 180), ",").concat(+(Lb > 0), ",").concat(pb.x, ",").concat(pb.y, "\n      A").concat(Tb, ",").concat(Tb, ",0,0,").concat(+(Lb < 0), ",").concat(Nb.x, ",").concat(Nb.y, "Z")
          } else fb += "L".concat(ab, ",").concat(Ub, "Z");
          return fb
        }({
          cx: Ub,
          cy: Eb,
          innerRadius: Bb,
          outerRadius: vb,
          cornerRadius: Math.min(mb, fb / 2),
          forceCornerRadius: kb,
          cornerIsExternal: yb,
          startAngle: Zb,
          endAngle: Db
        }) : jb({
          cx: Ub,
          cy: Eb,
          innerRadius: Bb,
          outerRadius: vb,
          startAngle: Zb,
          endAngle: Db
        }), Ab.createElement("path", eb({}, (0, Tb.d)(ab, !0), {
          className: ib,
          d: xb,
          role: "img"
        }))
      }
  },
  5647: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => tb
    });
    var Ab = Ub(52),
      Mb = Ub(5656),
      Tb = Ub.n(Mb);
    Math.abs, Math.atan2;
    const Eb = Math.cos,
      Yb = (Math.max, Math.min, Math.sin),
      Bb = Math.sqrt,
      eb = Math.PI,
      vb = 2 * eb;
    const Lb = {
        draw(bb, ab) {
          const Ub = Bb(ab / eb);
          bb.moveTo(Ub, 0), bb.arc(0, 0, Ub, 0, vb)
        }
      },
      Pb = {
        draw(bb, ab) {
          const Ub = Bb(ab / 5) / 2;
          bb.moveTo(-3 * Ub, -Ub), bb.lineTo(-Ub, -Ub), bb.lineTo(-Ub, -3 * Ub), bb.lineTo(Ub, -3 * Ub), bb.lineTo(Ub, -Ub), bb.lineTo(3 * Ub, -Ub), bb.lineTo(3 * Ub, Ub), bb.lineTo(Ub, Ub), bb.lineTo(Ub, 3 * Ub), bb.lineTo(-Ub, 3 * Ub), bb.lineTo(-Ub, Ub), bb.lineTo(-3 * Ub, Ub), bb.closePath()
        }
      },
      Xb = Bb(1 / 3),
      jb = 2 * Xb,
      Rb = {
        draw(bb, ab) {
          const Ub = Bb(ab / jb),
            Ab = Ub * Xb;
          bb.moveTo(0, -Ub), bb.lineTo(Ab, 0), bb.lineTo(0, Ub), bb.lineTo(-Ab, 0), bb.closePath()
        }
      },
      kb = {
        draw(bb, ab) {
          const Ub = Bb(ab),
            Ab = -Ub / 2;
          bb.rect(Ab, Ab, Ub, Ub)
        }
      },
      yb = Yb(eb / 10) / Yb(7 * eb / 10),
      Zb = Yb(vb / 10) * yb,
      Db = -Eb(vb / 10) * yb,
      zb = {
        draw(bb, ab) {
          const Ub = Bb(.8908130915292852 * ab),
            Ab = Zb * Ub,
            Mb = Db * Ub;
          bb.moveTo(0, -Ub), bb.lineTo(Ab, Mb);
          for (let Tb = 1; Tb < 5; ++Tb) {
            const ab = vb * Tb / 5,
              Bb = Eb(ab),
              eb = Yb(ab);
            bb.lineTo(eb * Ub, -Bb * Ub), bb.lineTo(Bb * Ab - eb * Mb, eb * Ab + Bb * Mb)
          }
          bb.closePath()
        }
      },
      xb = Bb(3),
      ib = {
        draw(bb, ab) {
          const Ub = -Bb(ab / (3 * xb));
          bb.moveTo(0, 2 * Ub), bb.lineTo(-xb * Ub, -Ub), bb.lineTo(xb * Ub, -Ub), bb.closePath()
        }
      },
      fb = -.5,
      mb = Bb(3) / 2,
      pb = 1 / Bb(12),
      Nb = 3 * (pb / 2 + 1),
      Wb = {
        draw(bb, ab) {
          const Ub = Bb(ab / Nb),
            Ab = Ub / 2,
            Mb = Ub * pb,
            Tb = Ab,
            Eb = Ub * pb + Ub,
            Yb = -Tb,
            eb = Eb;
          bb.moveTo(Ab, Mb), bb.lineTo(Tb, Eb), bb.lineTo(Yb, eb), bb.lineTo(fb * Ab - mb * Mb, mb * Ab + fb * Mb), bb.lineTo(fb * Tb - mb * Eb, mb * Tb + fb * Eb), bb.lineTo(fb * Yb - mb * eb, mb * Yb + fb * eb), bb.lineTo(fb * Ab + mb * Mb, fb * Mb - mb * Ab), bb.lineTo(fb * Tb + mb * Eb, fb * Eb - mb * Tb), bb.lineTo(fb * Yb + mb * eb, fb * eb - mb * Yb), bb.closePath()
        }
      };
    var Hb = Ub(5709),
      Ib = Ub(5717);
    Bb(3), Bb(3);
    var db = Ub(4721),
      Fb = Ub(5058);

    function hb(bb) {
      return hb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, hb(bb)
    }
    var Gb = ["type", "size", "sizeType"];

    function Qb() {
      return Qb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Qb.apply(this, arguments)
    }

    function qb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function ub(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? qb(Object(Ub), !0).forEach((function(ab) {
          rb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : qb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function rb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != hb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != hb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == hb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Kb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }
    var ob = {
        symbolCircle: Lb,
        symbolCross: Pb,
        symbolDiamond: Rb,
        symbolSquare: kb,
        symbolStar: zb,
        symbolTriangle: ib,
        symbolWye: Wb
      },
      lb = Math.PI / 180,
      tb = function(bb) {
        var ab = bb.type,
          Ub = void 0 === ab ? "circle" : ab,
          Mb = bb.size,
          Eb = void 0 === Mb ? 64 : Mb,
          Yb = bb.sizeType,
          Bb = void 0 === Yb ? "area" : Yb,
          eb = ub(ub({}, Kb(bb, Gb)), {}, {
            type: Ub,
            size: Eb,
            sizeType: Bb
          }),
          vb = eb.className,
          Pb = eb.cx,
          Xb = eb.cy,
          jb = (0, Fb.d)(eb, !0);
        return Pb === +Pb && Xb === +Xb && Eb === +Eb ? Ab.createElement("path", Qb({}, jb, {
          className: (0, db.d)("recharts-symbols", vb),
          transform: "translate(".concat(Pb, ", ").concat(Xb, ")"),
          d: function() {
            var bb = function(bb) {
                var ab = "symbol".concat(Tb()(bb));
                return ob[ab] || Lb
              }(Ub),
              ab = function(bb, ab) {
                let Ub = null,
                  Ab = (0, Ib.b)(Mb);

                function Mb() {
                  let Mb;
                  if (Ub || (Ub = Mb = Ab()), bb.apply(this, arguments).draw(Ub, +ab.apply(this, arguments)), Mb) return Ub = null, Mb + "" || null
                }
                return bb = "function" === typeof bb ? bb : (0, Hb.d)(bb || Lb), ab = "function" === typeof ab ? ab : (0, Hb.d)(void 0 === ab ? 64 : +ab), Mb.type = function(ab) {
                  return arguments.length ? (bb = "function" === typeof ab ? ab : (0, Hb.d)(ab), Mb) : bb
                }, Mb.size = function(bb) {
                  return arguments.length ? (ab = "function" === typeof bb ? bb : (0, Hb.d)(+bb), Mb) : ab
                }, Mb.context = function(bb) {
                  return arguments.length ? (Ub = null == bb ? null : bb, Mb) : Ub
                }, Mb
              }().type(bb).size(function(bb, ab, Ub) {
                if ("area" === ab) return bb;
                switch (Ub) {
                  case "cross":
                    return 5 * bb * bb / 9;
                  case "diamond":
                    return .5 * bb * bb / Math.sqrt(3);
                  case "square":
                    return bb * bb;
                  case "star":
                    var Ab = 18 * lb;
                    return 1.25 * bb * bb * (Math.tan(Ab) - Math.tan(2 * Ab) * Math.pow(Math.tan(Ab), 2));
                  case "triangle":
                    return Math.sqrt(3) * bb * bb / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * bb * bb / 8;
                  default:
                    return Math.PI * bb * bb / 4
                }
              }(Eb, Bb, Ub));
            return ab()
          }()
        })) : null
      };
    tb.registerSymbol = function(bb, ab) {
      ob["symbol".concat(Tb()(bb))] = ab
    }
  },
  5913: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => rb,
      f: () => gb,
      h: () => Kb,
      l: () => ob,
      n: () => lb
    });
    var Ab = Ub(52),
      Mb = Ub(4904),
      Tb = Ub.n(Mb),
      Eb = Ub(5915),
      Yb = Ub.n(Eb),
      Bb = Ub(5920),
      eb = Ub.n(Bb),
      vb = Ub(5809),
      Lb = Ub.n(vb),
      Pb = Ub(5730),
      Xb = Ub(4721),
      jb = Ub(5735),
      Rb = Ub(5058);

    function kb(bb) {
      return kb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, kb(bb)
    }

    function yb() {
      return yb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub) Object.prototype.hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, yb.apply(this, arguments)
    }

    function Zb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return Db(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return Db(bb, ab)
      }(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Db(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function zb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function xb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? zb(Object(Ub), !0).forEach((function(ab) {
          ib(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : zb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function ib(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != kb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != kb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == kb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var fb = function(bb, ab, Ub, Ab, Mb) {
        var Tb, Eb = Ub - Ab;
        return Tb = "M ".concat(bb, ",").concat(ab), Tb += "L ".concat(bb + Ub, ",").concat(ab), Tb += "L ".concat(bb + Ub - Eb / 2, ",").concat(ab + Mb), Tb += "L ".concat(bb + Ub - Eb / 2 - Ab, ",").concat(ab + Mb), Tb += "L ".concat(bb, ",").concat(ab, " Z")
      },
      mb = {
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
      pb = function(bb) {
        var ab = xb(xb({}, mb), bb),
          Ub = (0, Ab.useRef)(),
          Mb = Zb((0, Ab.useState)(-1), 2),
          Tb = Mb[0],
          Eb = Mb[1];
        (0, Ab.useEffect)((function() {
          if (Ub.current && Ub.current.getTotalLength) try {
            var bb = Ub.current.getTotalLength();
            bb && Eb(bb)
          } catch (ab) {}
        }), []);
        var Yb = ab.x,
          Bb = ab.y,
          eb = ab.upperWidth,
          vb = ab.lowerWidth,
          Lb = ab.height,
          Pb = ab.className,
          kb = ab.animationEasing,
          Db = ab.animationDuration,
          zb = ab.animationBegin,
          ib = ab.isUpdateAnimationActive;
        if (Yb !== +Yb || Bb !== +Bb || eb !== +eb || vb !== +vb || Lb !== +Lb || 0 === eb && 0 === vb || 0 === Lb) return null;
        var pb = (0, Xb.d)("recharts-trapezoid", Pb);
        return ib ? Ab.createElement(jb.e, {
          canBegin: Tb > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: Lb,
            x: Yb,
            y: Bb
          },
          to: {
            upperWidth: eb,
            lowerWidth: vb,
            height: Lb,
            x: Yb,
            y: Bb
          },
          duration: Db,
          animationEasing: kb,
          isActive: ib
        }, (function(bb) {
          var Mb = bb.upperWidth,
            Eb = bb.lowerWidth,
            Yb = bb.height,
            Bb = bb.x,
            eb = bb.y;
          return Ab.createElement(jb.e, {
            canBegin: Tb > 0,
            from: "0px ".concat(-1 === Tb ? 1 : Tb, "px"),
            to: "".concat(Tb, "px 0px"),
            attributeName: "strokeDasharray",
            bX: zb,
            duration: Db,
            easing: kb
          }, Ab.createElement("path", yb({}, (0, Rb.d)(ab, !0), {
            className: pb,
            d: fb(Bb, eb, Mb, Eb, Yb),
            ref: Ub
          })))
        })) : Ab.createElement("g", null, Ab.createElement("path", yb({}, (0, Rb.d)(ab, !0), {
          className: pb,
          d: fb(Yb, Bb, eb, vb, Lb)
        })))
      },
      Nb = Ub(5927),
      Wb = Ub(5553),
      Hb = Ub(5647),
      Ib = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function db(bb) {
      return db = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, db(bb)
    }

    function Fb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function hb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Gb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? hb(Object(Ub), !0).forEach((function(ab) {
          Qb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : hb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Qb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != db(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != db(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == db(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function qb(bb, ab) {
      return Gb(Gb({}, ab), bb)
    }

    function ub(bb) {
      var ab = bb.shapeType,
        Ub = bb.elementProps;
      switch (ab) {
        case "rectangle":
          return Ab.createElement(Pb.e, Ub);
        case "trapezoid":
          return Ab.createElement(pb, Ub);
        case "sector":
          return Ab.createElement(Nb.d, Ub);
        case "symbols":
          if (function(bb) {
              return "symbols" === bb
            }(ab)) return Ab.createElement(Hb.c, Ub);
          break;
        default:
          return null
      }
    }

    function rb(bb) {
      var ab, Ub = bb.option,
        Mb = bb.shapeType,
        Eb = bb.propTransformer,
        Bb = void 0 === Eb ? qb : Eb,
        vb = bb.activeClassName,
        Lb = void 0 === vb ? "recharts-active-shape" : vb,
        Pb = bb.isActive,
        Xb = Fb(bb, Ib);
      if ((0, Ab.isValidElement)(Ub)) ab = (0, Ab.cloneElement)(Ub, Gb(Gb({}, Xb), function(bb) {
        return (0, Ab.isValidElement)(bb) ? bb.props : bb
      }(Ub)));
      else if (Tb()(Ub)) ab = Ub(Xb);
      else if (Yb()(Ub) && !eb()(Ub)) {
        var jb = Bb(Ub, Xb);
        ab = Ab.createElement(ub, {
          shapeType: Mb,
          elementProps: jb
        })
      } else {
        var Rb = Xb;
        ab = Ab.createElement(ub, {
          shapeType: Mb,
          elementProps: Rb
        })
      }
      return Pb ? Ab.createElement(Wb.c, {
        className: Lb
      }, ab) : ab
    }

    function Kb(bb, ab) {
      return null != ab && "trapezoids" in bb.props
    }

    function ob(bb, ab) {
      return null != ab && "sectors" in bb.props
    }

    function lb(bb, ab) {
      return null != ab && "points" in bb.props
    }

    function tb(bb, ab) {
      var Ub, Ab, Mb = bb.x === (null === ab || void 0 === ab || null === (Ub = ab.labelViewBox) || void 0 === Ub ? void 0 : Ub.x) || bb.x === ab.x,
        Tb = bb.y === (null === ab || void 0 === ab || null === (Ab = ab.labelViewBox) || void 0 === Ab ? void 0 : Ab.y) || bb.y === ab.y;
      return Mb && Tb
    }

    function wb(bb, ab) {
      var Ub = bb.endAngle === ab.endAngle,
        Ab = bb.startAngle === ab.startAngle;
      return Ub && Ab
    }

    function sb(bb, ab) {
      var Ub = bb.x === ab.x,
        Ab = bb.y === ab.y,
        Mb = bb.z === ab.z;
      return Ub && Ab && Mb
    }

    function gb(bb) {
      var ab = bb.activeTooltipItem,
        Ub = bb.graphicalItem,
        Ab = bb.itemData,
        Mb = function(bb, ab) {
          var Ub;
          return Kb(bb, ab) ? Ub = "trapezoids" : ob(bb, ab) ? Ub = "sectors" : lb(bb, ab) && (Ub = "points"), Ub
        }(Ub, ab),
        Tb = function(bb, ab) {
          var Ub, Ab;
          return Kb(bb, ab) ? null === (Ub = ab.tooltipPayload) || void 0 === Ub || null === (Ub = Ub[0]) || void 0 === Ub || null === (Ub = Ub.payload) || void 0 === Ub ? void 0 : Ub.payload : ob(bb, ab) ? null === (Ab = ab.tooltipPayload) || void 0 === Ab || null === (Ab = Ab[0]) || void 0 === Ab || null === (Ab = Ab.payload) || void 0 === Ab ? void 0 : Ab.payload : lb(bb, ab) ? ab.payload : {}
        }(Ub, ab),
        Eb = Ab.filter((function(bb, Ab) {
          var Eb = Lb()(Tb, bb),
            Yb = Ub.props[Mb].filter((function(bb) {
              var Ab = function(bb, ab) {
                var Ub;
                return Kb(bb, ab) ? Ub = tb : ob(bb, ab) ? Ub = wb : lb(bb, ab) && (Ub = sb), Ub
              }(Ub, ab);
              return Ab(bb, ab)
            })),
            Bb = Ub.props[Mb].indexOf(Yb[Yb.length - 1]);
          return Eb && Ab === Bb
        }));
      return Ab.indexOf(Eb[Eb.length - 1])
    }
  },
  5866: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => xb,
      f: () => yb,
      h: () => ib,
      k: () => Db,
      l: () => Zb
    });
    var Ab = Ub(5872),
      Mb = Ub.n(Ab),
      Tb = Ub(5886),
      Eb = Ub.n(Tb),
      Yb = Ub(5754),
      Bb = Ub(5058),
      eb = Ub(4813),
      vb = Ub(5900);

    function Lb(bb) {
      return Lb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Lb(bb)
    }

    function Pb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, kb(Ab.key), Ab)
      }
    }

    function Xb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function jb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Xb(Object(Ub), !0).forEach((function(ab) {
          Rb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Xb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Rb(bb, ab, Ub) {
      return (ab = kb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function kb(bb) {
      var ab = function(bb, ab) {
        if ("object" != Lb(bb) || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != Lb(Ab)) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == Lb(ab) ? ab : ab + ""
    }
    var yb = function(bb, ab, Ub, Ab, Mb) {
        var Tb = bb.width,
          Eb = bb.height,
          Lb = bb.layout,
          Pb = bb.children,
          Xb = Object.keys(ab),
          kb = {
            left: Ub.left,
            leftMirror: Ub.left,
            right: Tb - Ub.right,
            rightMirror: Tb - Ub.right,
            top: Ub.top,
            topMirror: Ub.top,
            bottom: Eb - Ub.bottom,
            bottomMirror: Eb - Ub.bottom
          },
          yb = !!(0, Bb.g)(Pb, vb.c);
        return Xb.reduce((function(Tb, Eb) {
          var Bb, vb, Pb, Xb, Zb, Db = ab[Eb],
            zb = Db.orientation,
            xb = Db.domain,
            ib = Db.padding,
            fb = void 0 === ib ? {} : ib,
            mb = Db.mirror,
            pb = Db.reversed,
            Nb = "".concat(zb).concat(mb ? "Mirror" : "");
          if ("number" === Db.type && ("gap" === Db.padding || "no-gap" === Db.padding)) {
            var Wb = xb[1] - xb[0],
              Hb = 1 / 0,
              Ib = Db.categoricalDomain.sort(eb.e);
            if (Ib.forEach((function(bb, ab) {
                ab > 0 && (Hb = Math.min((bb || 0) - (Ib[ab - 1] || 0), Hb))
              })), Number.isFinite(Hb)) {
              var db = Hb / Wb,
                Fb = "vertical" === Db.layout ? Ub.height : Ub.width;
              if ("gap" === Db.padding && (Bb = db * Fb / 2), "no-gap" === Db.padding) {
                var hb = (0, eb.o)(bb.barCategoryGap, db * Fb),
                  Gb = db * Fb / 2;
                Bb = Gb - hb - (Gb - hb) / Fb * hb
              }
            }
          }
          vb = "xAxis" === Ab ? [Ub.left + (fb.left || 0) + (Bb || 0), Ub.left + Ub.width - (fb.right || 0) - (Bb || 0)] : "yAxis" === Ab ? "horizontal" === Lb ? [Ub.top + Ub.height - (fb.bottom || 0), Ub.top + (fb.top || 0)] : [Ub.top + (fb.top || 0) + (Bb || 0), Ub.top + Ub.height - (fb.bottom || 0) - (Bb || 0)] : Db.range, pb && (vb = [vb[1], vb[0]]);
          var Qb = (0, Yb.nb)(Db, Mb, yb),
            qb = Qb.scale,
            ub = Qb.realScaleType;
          qb.domain(xb).range(vb), (0, Yb.i)(qb);
          var rb = (0, Yb.Y)(qb, jb(jb({}, Db), {}, {
            realScaleType: ub
          }));
          "xAxis" === Ab ? (Zb = "top" === zb && !mb || "bottom" === zb && mb, Pb = Ub.left, Xb = kb[Nb] - Zb * Db.height) : "yAxis" === Ab && (Zb = "left" === zb && !mb || "right" === zb && mb, Pb = kb[Nb] - Zb * Db.width, Xb = Ub.top);
          var Kb = jb(jb(jb({}, Db), rb), {}, {
            realScaleType: ub,
            x: Pb,
            y: Xb,
            scale: qb,
            width: "xAxis" === Ab ? Ub.width : Db.width,
            height: "yAxis" === Ab ? Ub.height : Db.height
          });
          return Kb.bandSize = (0, Yb.o)(Kb, rb), Db.hide || "xAxis" !== Ab ? Db.hide || (kb[Nb] += (Zb ? -1 : 1) * Kb.width) : kb[Nb] += (Zb ? -1 : 1) * Kb.height, jb(jb({}, Tb), {}, Rb({}, Eb, Kb))
        }), {})
      },
      Zb = function(bb, ab) {
        var Ub = bb.x,
          Ab = bb.y,
          Mb = ab.x,
          Tb = ab.y;
        return {
          x: Math.min(Ub, Mb),
          y: Math.min(Ab, Tb),
          width: Math.abs(Mb - Ub),
          height: Math.abs(Tb - Ab)
        }
      },
      Db = function(bb) {
        var ab = bb.x1,
          Ub = bb.y1,
          Ab = bb.x2,
          Mb = bb.y2;
        return Zb({
          x: ab,
          y: Ub
        }, {
          x: Ab,
          y: Mb
        })
      },
      zb = function() {
        function bb(ab) {
          ! function(bb, ab) {
            if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
          }(this, bb), this.scale = ab
        }
        return ab = bb, Ub = [{
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
            var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              Ub = ab.bandAware,
              Ab = ab.position;
            if (void 0 !== bb) {
              if (Ab) switch (Ab) {
                case "start":
                default:
                  return this.scale(bb);
                case "middle":
                  var Mb = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(bb) + Mb;
                case "end":
                  var Tb = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(bb) + Tb
              }
              if (Ub) {
                var Eb = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(bb) + Eb
              }
              return this.scale(bb)
            }
          }
        }, {
          key: "isInRange",
          value: function(bb) {
            var ab = this.range(),
              Ub = ab[0],
              Ab = ab[ab.length - 1];
            return Ub <= Ab ? bb >= Ub && bb <= Ab : bb >= Ab && bb <= Ub
          }
        }], Ab = [{
          key: "create",
          value: function(ab) {
            return new bb(ab)
          }
        }], Ub && Pb(ab.prototype, Ub), Ab && Pb(ab, Ab), Object.defineProperty(ab, "prototype", {
          writable: !1
        }), ab;
        var ab, Ub, Ab
      }();
    Rb(zb, "EPS", 1e-4);
    var xb = function(bb) {
      var ab = Object.keys(bb).reduce((function(ab, Ub) {
        return jb(jb({}, ab), {}, Rb({}, Ub, zb.create(bb[Ub])))
      }), {});
      return jb(jb({}, ab), {}, {
        apply: function(bb) {
          var Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Ab = Ub.bandAware,
            Tb = Ub.position;
          return Mb()(bb, (function(bb, Ub) {
            return ab[Ub].apply(bb, {
              bandAware: Ab,
              position: Tb
            })
          }))
        },
        isInRange: function(bb) {
          return Eb()(bb, (function(bb, Ub) {
            return ab[Ub].isInRange(bb)
          }))
        }
      })
    };
    var ib = function(bb) {
      var ab = bb.width,
        Ub = bb.height,
        Ab = function(bb) {
          return (bb % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        Mb = Ab * Math.PI / 180,
        Tb = Math.atan(Ub / ab),
        Eb = Mb > Tb && Mb < Math.PI - Tb ? Ub / Math.sin(Mb) : ab / Math.cos(Mb);
      return Math.abs(Eb)
    }
  },
  5754: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => FE,
      e: () => WE,
      i: () => wE,
      j: () => oE,
      m: () => sE,
      o: () => TY,
      r: () => dE,
      v: () => IE,
      w: () => SE,
      x: () => nE,
      A: () => JE,
      D: () => uE,
      E: () => NE,
      I: () => QE,
      L: () => aY,
      N: () => HE,
      R: () => OE,
      S: () => bY,
      V: () => rE,
      Y: () => cE,
      _: () => YY,
      cb: () => pE,
      fb: () => qE,
      hb: () => EY,
      jb: () => GE,
      nb: () => lE,
      qb: () => MY,
      sb: () => gE
    });
    var Ab = {};
    Ub.r(Ab), Ub.d(Ab, {
      scaleBand: () => Mb.b,
      scaleDiverging: () => BT,
      scaleDivergingLog: () => eT,
      scaleDivergingPow: () => LT,
      scaleDivergingSqrt: () => PT,
      scaleDivergingSymlog: () => vT,
      scaleIdentity: () => Oa,
      scaleImplicit: () => eU.g,
      scaleLinear: () => Va,
      scaleLog: () => MU,
      scaleOrdinal: () => eU.d,
      scalePoint: () => Mb.c,
      scalePow: () => jU,
      scaleQuantile: () => NU,
      scaleQuantize: () => WU,
      scaleRadial: () => yU,
      scaleSequential: () => aT,
      scaleSequentialLog: () => UT,
      scaleSequentialPow: () => MT,
      scaleSequentialQuantile: () => ET,
      scaleSequentialSqrt: () => TT,
      scaleSequentialSymlog: () => AT,
      scaleSqrt: () => RU,
      scaleSymlog: () => BU,
      scaleThreshold: () => HU,
      scaleTime: () => JM,
      scaleUtc: () => nM,
      tickFormat: () => ga
    });
    var Mb = Ub(5758);
    const Tb = Math.sqrt(50),
      Eb = Math.sqrt(10),
      Yb = Math.sqrt(2);

    function Bb(bb, ab, Ub) {
      const Ab = (ab - bb) / Math.max(0, Ub),
        Mb = Math.floor(Math.log10(Ab)),
        eb = Ab / Math.pow(10, Mb),
        vb = eb >= Tb ? 10 : eb >= Eb ? 5 : eb >= Yb ? 2 : 1;
      let Lb, Pb, Xb;
      return Mb < 0 ? (Xb = Math.pow(10, -Mb) / vb, Lb = Math.round(bb * Xb), Pb = Math.round(ab * Xb), Lb / Xb < bb && ++Lb, Pb / Xb > ab && --Pb, Xb = -Xb) : (Xb = Math.pow(10, Mb) * vb, Lb = Math.round(bb / Xb), Pb = Math.round(ab / Xb), Lb * Xb < bb && ++Lb, Pb * Xb > ab && --Pb), Pb < Lb && .5 <= Ub && Ub < 2 ? Bb(bb, ab, 2 * Ub) : [Lb, Pb, Xb]
    }

    function eb(bb, ab, Ub) {
      if (!((Ub = +Ub) > 0)) return [];
      if ((bb = +bb) === (ab = +ab)) return [bb];
      const Ab = ab < bb,
        [Mb, Tb, Eb] = Ab ? Bb(ab, bb, Ub) : Bb(bb, ab, Ub);
      if (!(Tb >= Mb)) return [];
      const Yb = Tb - Mb + 1,
        eb = new Array(Yb);
      if (Ab)
        if (Eb < 0)
          for (let Bb = 0; Bb < Yb; ++Bb) eb[Bb] = (Tb - Bb) / -Eb;
        else
          for (let Bb = 0; Bb < Yb; ++Bb) eb[Bb] = (Tb - Bb) * Eb;
      else if (Eb < 0)
        for (let Bb = 0; Bb < Yb; ++Bb) eb[Bb] = (Mb + Bb) / -Eb;
      else
        for (let Bb = 0; Bb < Yb; ++Bb) eb[Bb] = (Mb + Bb) * Eb;
      return eb
    }

    function vb(bb, ab, Ub) {
      return Bb(bb = +bb, ab = +ab, Ub = +Ub)[2]
    }

    function Lb(bb, ab, Ub) {
      Ub = +Ub;
      const Ab = (ab = +ab) < (bb = +bb),
        Mb = Ab ? vb(ab, bb, Ub) : vb(bb, ab, Ub);
      return (Ab ? -1 : 1) * (Mb < 0 ? 1 / -Mb : Mb)
    }

    function Pb(bb, ab) {
      return null == bb || null == ab ? NaN : bb < ab ? -1 : bb > ab ? 1 : bb >= ab ? 0 : NaN
    }

    function Xb(bb, ab) {
      return null == bb || null == ab ? NaN : ab < bb ? -1 : ab > bb ? 1 : ab >= bb ? 0 : NaN
    }

    function jb(bb) {
      let ab, Ub, Ab;

      function Mb(bb, Ab) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
        if (Mb < Tb) {
          if (0 !== ab(Ab, Ab)) return Tb;
          do {
            const ab = Mb + Tb >>> 1;
            Ub(bb[ab], Ab) < 0 ? Mb = ab + 1 : Tb = ab
          } while (Mb < Tb)
        }
        return Mb
      }
      return 2 !== bb.length ? (ab = Pb, Ub = (ab, Ub) => Pb(bb(ab), Ub), Ab = (ab, Ub) => bb(ab) - Ub) : (ab = bb === Pb || bb === Xb ? bb : Rb, Ub = bb, Ab = bb), {
        left: Mb,
        center: function(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const Tb = Mb(bb, ab, Ub, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length) - 1);
          return Tb > Ub && Ab(bb[Tb - 1], ab) > -Ab(bb[Tb], ab) ? Tb - 1 : Tb
        },
        right: function(bb, Ab) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bb.length;
          if (Mb < Tb) {
            if (0 !== ab(Ab, Ab)) return Tb;
            do {
              const ab = Mb + Tb >>> 1;
              Ub(bb[ab], Ab) <= 0 ? Mb = ab + 1 : Tb = ab
            } while (Mb < Tb)
          }
          return Mb
        }
      }
    }

    function Rb() {
      return 0
    }

    function kb(bb) {
      return null === bb ? NaN : +bb
    }
    const yb = jb(Pb),
      Zb = yb.right,
      Db = (yb.left, jb(kb).center, Zb);

    function zb(bb, ab, Ub) {
      bb.prototype = ab.prototype = Ub, Ub.constructor = bb
    }

    function xb(bb, ab) {
      var Ub = Object.create(bb.prototype);
      for (var Ab in ab) Ub[Ab] = ab[Ab];
      return Ub
    }

    function ib() {}
    var fb = .7,
      mb = 1 / fb,
      pb = "\\s*([+-]?\\d+)\\s*",
      Nb = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Wb = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Hb = /^#([0-9a-f]{3,8})$/,
      Ib = new RegExp(`^rgb\\(${pb},${pb},${pb}\\)$`),
      db = new RegExp(`^rgb\\(${Wb},${Wb},${Wb}\\)$`),
      Fb = new RegExp(`^rgba\\(${pb},${pb},${pb},${Nb}\\)$`),
      hb = new RegExp(`^rgba\\(${Wb},${Wb},${Wb},${Nb}\\)$`),
      Gb = new RegExp(`^hsl\\(${Nb},${Wb},${Wb}\\)$`),
      Qb = new RegExp(`^hsla\\(${Nb},${Wb},${Wb},${Nb}\\)$`),
      qb = {
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

    function ub() {
      return this.rgb().formatHex()
    }

    function rb() {
      return this.rgb().formatRgb()
    }

    function Kb(bb) {
      var ab, Ub;
      return bb = (bb + "").trim().toLowerCase(), (ab = Hb.exec(bb)) ? (Ub = ab[1].length, ab = parseInt(ab[1], 16), 6 === Ub ? ob(ab) : 3 === Ub ? new wb(ab >> 8 & 15 | ab >> 4 & 240, ab >> 4 & 15 | 240 & ab, (15 & ab) << 4 | 15 & ab, 1) : 8 === Ub ? lb(ab >> 24 & 255, ab >> 16 & 255, ab >> 8 & 255, (255 & ab) / 255) : 4 === Ub ? lb(ab >> 12 & 15 | ab >> 8 & 240, ab >> 8 & 15 | ab >> 4 & 240, ab >> 4 & 15 | 240 & ab, ((15 & ab) << 4 | 15 & ab) / 255) : null) : (ab = Ib.exec(bb)) ? new wb(ab[1], ab[2], ab[3], 1) : (ab = db.exec(bb)) ? new wb(255 * ab[1] / 100, 255 * ab[2] / 100, 255 * ab[3] / 100, 1) : (ab = Fb.exec(bb)) ? lb(ab[1], ab[2], ab[3], ab[4]) : (ab = hb.exec(bb)) ? lb(255 * ab[1] / 100, 255 * ab[2] / 100, 255 * ab[3] / 100, ab[4]) : (ab = Gb.exec(bb)) ? cb(ab[1], ab[2] / 100, ab[3] / 100, 1) : (ab = Qb.exec(bb)) ? cb(ab[1], ab[2] / 100, ab[3] / 100, ab[4]) : qb.hasOwnProperty(bb) ? ob(qb[bb]) : "transparent" === bb ? new wb(NaN, NaN, NaN, 0) : null
    }

    function ob(bb) {
      return new wb(bb >> 16 & 255, bb >> 8 & 255, 255 & bb, 1)
    }

    function lb(bb, ab, Ub, Ab) {
      return Ab <= 0 && (bb = ab = Ub = NaN), new wb(bb, ab, Ub, Ab)
    }

    function tb(bb, ab, Ub, Ab) {
      return 1 === arguments.length ? ((Mb = bb) instanceof ib || (Mb = Kb(Mb)), Mb ? new wb((Mb = Mb.rgb()).r, Mb.g, Mb.b, Mb.opacity) : new wb) : new wb(bb, ab, Ub, null == Ab ? 1 : Ab);
      var Mb
    }

    function wb(bb, ab, Ub, Ab) {
      this.r = +bb, this.g = +ab, this.b = +Ub, this.opacity = +Ab
    }

    function sb() {
      return `#${Ob(this.r)}${Ob(this.g)}${Ob(this.b)}`
    }

    function gb() {
      const bb = Cb(this.opacity);
      return `${1===bb?"rgb(":"rgba("}${Vb(this.r)}, ${Vb(this.g)}, ${Vb(this.b)}${1===bb?")":`, ${bb})`}`
    }

    function Cb(bb) {
      return isNaN(bb) ? 1 : Math.max(0, Math.min(1, bb))
    }

    function Vb(bb) {
      return Math.max(0, Math.min(255, Math.round(bb) || 0))
    }

    function Ob(bb) {
      return ((bb = Vb(bb)) < 16 ? "0" : "") + bb.toString(16)
    }

    function cb(bb, ab, Ub, Ab) {
      return Ab <= 0 ? bb = ab = Ub = NaN : Ub <= 0 || Ub >= 1 ? bb = ab = NaN : ab <= 0 && (bb = NaN), new nb(bb, ab, Ub, Ab)
    }

    function Jb(bb) {
      if (bb instanceof nb) return new nb(bb.h, bb.s, bb.l, bb.opacity);
      if (bb instanceof ib || (bb = Kb(bb)), !bb) return new nb;
      if (bb instanceof nb) return bb;
      var ab = (bb = bb.rgb()).r / 255,
        Ub = bb.g / 255,
        Ab = bb.b / 255,
        Mb = Math.min(ab, Ub, Ab),
        Tb = Math.max(ab, Ub, Ab),
        Eb = NaN,
        Yb = Tb - Mb,
        Bb = (Tb + Mb) / 2;
      return Yb ? (Eb = ab === Tb ? (Ub - Ab) / Yb + 6 * (Ub < Ab) : Ub === Tb ? (Ab - ab) / Yb + 2 : (ab - Ub) / Yb + 4, Yb /= Bb < .5 ? Tb + Mb : 2 - Tb - Mb, Eb *= 60) : Yb = Bb > 0 && Bb < 1 ? 0 : Eb, new nb(Eb, Yb, Bb, bb.opacity)
    }

    function nb(bb, ab, Ub, Ab) {
      this.h = +bb, this.s = +ab, this.l = +Ub, this.opacity = +Ab
    }

    function Sb(bb) {
      return (bb = (bb || 0) % 360) < 0 ? bb + 360 : bb
    }

    function ba(bb) {
      return Math.max(0, Math.min(1, bb || 0))
    }

    function aa(bb, ab, Ub) {
      return 255 * (bb < 60 ? ab + (Ub - ab) * bb / 60 : bb < 180 ? Ub : bb < 240 ? ab + (Ub - ab) * (240 - bb) / 60 : ab)
    }

    function Ua(bb, ab, Ub, Ab, Mb) {
      var Tb = bb * bb,
        Eb = Tb * bb;
      return ((1 - 3 * bb + 3 * Tb - Eb) * ab + (4 - 6 * Tb + 3 * Eb) * Ub + (1 + 3 * bb + 3 * Tb - 3 * Eb) * Ab + Eb * Mb) / 6
    }
    zb(ib, Kb, {
      copy(bb) {
        return Object.assign(new this.constructor, this, bb)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: ub,
      formatHex: ub,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return Jb(this).formatHsl()
      },
      formatRgb: rb,
      toString: rb
    }), zb(wb, tb, xb(ib, {
      brighter(bb) {
        return bb = null == bb ? mb : Math.pow(mb, bb), new wb(this.r * bb, this.g * bb, this.b * bb, this.opacity)
      },
      darker(bb) {
        return bb = null == bb ? fb : Math.pow(fb, bb), new wb(this.r * bb, this.g * bb, this.b * bb, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new wb(Vb(this.r), Vb(this.g), Vb(this.b), Cb(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: sb,
      formatHex: sb,
      formatHex8: function() {
        return `#${Ob(this.r)}${Ob(this.g)}${Ob(this.b)}${Ob(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: gb,
      toString: gb
    })), zb(nb, (function(bb, ab, Ub, Ab) {
      return 1 === arguments.length ? Jb(bb) : new nb(bb, ab, Ub, null == Ab ? 1 : Ab)
    }), xb(ib, {
      brighter(bb) {
        return bb = null == bb ? mb : Math.pow(mb, bb), new nb(this.h, this.s, this.l * bb, this.opacity)
      },
      darker(bb) {
        return bb = null == bb ? fb : Math.pow(fb, bb), new nb(this.h, this.s, this.l * bb, this.opacity)
      },
      rgb() {
        var bb = this.h % 360 + 360 * (this.h < 0),
          ab = isNaN(bb) || isNaN(this.s) ? 0 : this.s,
          Ub = this.l,
          Ab = Ub + (Ub < .5 ? Ub : 1 - Ub) * ab,
          Mb = 2 * Ub - Ab;
        return new wb(aa(bb >= 240 ? bb - 240 : bb + 120, Mb, Ab), aa(bb, Mb, Ab), aa(bb < 120 ? bb + 240 : bb - 120, Mb, Ab), this.opacity)
      },
      clamp() {
        return new nb(Sb(this.h), ba(this.s), ba(this.l), Cb(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const bb = Cb(this.opacity);
        return `${1===bb?"hsl(":"hsla("}${Sb(this.h)}, ${100*ba(this.s)}%, ${100*ba(this.l)}%${1===bb?")":`, ${bb})`}`
      }
    }));
    const Aa = bb => () => bb;

    function Ma(bb, ab) {
      return function(Ub) {
        return bb + Ub * ab
      }
    }

    function Ta(bb) {
      return 1 === (bb = +bb) ? Ea : function(ab, Ub) {
        return Ub - ab ? function(bb, ab, Ub) {
          return bb = Math.pow(bb, Ub), ab = Math.pow(ab, Ub) - bb, Ub = 1 / Ub,
            function(Ab) {
              return Math.pow(bb + Ab * ab, Ub)
            }
        }(ab, Ub, bb) : Aa(isNaN(ab) ? Ub : ab)
      }
    }

    function Ea(bb, ab) {
      var Ub = ab - bb;
      return Ub ? Ma(bb, Ub) : Aa(isNaN(bb) ? ab : bb)
    }
    const Ya = function bb(ab) {
      var Ub = Ta(ab);

      function Ab(bb, ab) {
        var Ab = Ub((bb = tb(bb)).r, (ab = tb(ab)).r),
          Mb = Ub(bb.g, ab.g),
          Tb = Ub(bb.b, ab.b),
          Eb = Ea(bb.opacity, ab.opacity);
        return function(ab) {
          return bb.r = Ab(ab), bb.g = Mb(ab), bb.b = Tb(ab), bb.opacity = Eb(ab), bb + ""
        }
      }
      return Ab.gamma = bb, Ab
    }(1);

    function Ba(bb) {
      return function(ab) {
        var Ub, Ab, Mb = ab.length,
          Tb = new Array(Mb),
          Eb = new Array(Mb),
          Yb = new Array(Mb);
        for (Ub = 0; Ub < Mb; ++Ub) Ab = tb(ab[Ub]), Tb[Ub] = Ab.r || 0, Eb[Ub] = Ab.g || 0, Yb[Ub] = Ab.b || 0;
        return Tb = bb(Tb), Eb = bb(Eb), Yb = bb(Yb), Ab.opacity = 1,
          function(bb) {
            return Ab.r = Tb(bb), Ab.g = Eb(bb), Ab.b = Yb(bb), Ab + ""
          }
      }
    }
    Ba((function(bb) {
      var ab = bb.length - 1;
      return function(Ub) {
        var Ab = Ub <= 0 ? Ub = 0 : Ub >= 1 ? (Ub = 1, ab - 1) : Math.floor(Ub * ab),
          Mb = bb[Ab],
          Tb = bb[Ab + 1],
          Eb = Ab > 0 ? bb[Ab - 1] : 2 * Mb - Tb,
          Yb = Ab < ab - 1 ? bb[Ab + 2] : 2 * Tb - Mb;
        return Ua((Ub - Ab / ab) * ab, Eb, Mb, Tb, Yb)
      }
    })), Ba((function(bb) {
      var ab = bb.length;
      return function(Ub) {
        var Ab = Math.floor(((Ub %= 1) < 0 ? ++Ub : Ub) * ab),
          Mb = bb[(Ab + ab - 1) % ab],
          Tb = bb[Ab % ab],
          Eb = bb[(Ab + 1) % ab],
          Yb = bb[(Ab + 2) % ab];
        return Ua((Ub - Ab / ab) * ab, Mb, Tb, Eb, Yb)
      }
    }));

    function ea(bb, ab) {
      var Ub, Ab = ab ? ab.length : 0,
        Mb = bb ? Math.min(Ab, bb.length) : 0,
        Tb = new Array(Mb),
        Eb = new Array(Ab);
      for (Ub = 0; Ub < Mb; ++Ub) Tb[Ub] = ya(bb[Ub], ab[Ub]);
      for (; Ub < Ab; ++Ub) Eb[Ub] = ab[Ub];
      return function(bb) {
        for (Ub = 0; Ub < Mb; ++Ub) Eb[Ub] = Tb[Ub](bb);
        return Eb
      }
    }

    function va(bb, ab) {
      var Ub = new Date;
      return bb = +bb, ab = +ab,
        function(Ab) {
          return Ub.setTime(bb * (1 - Ab) + ab * Ab), Ub
        }
    }

    function La(bb, ab) {
      return bb = +bb, ab = +ab,
        function(Ub) {
          return bb * (1 - Ub) + ab * Ub
        }
    }

    function Pa(bb, ab) {
      var Ub, Ab = {},
        Mb = {};
      for (Ub in null !== bb && "object" === typeof bb || (bb = {}), null !== ab && "object" === typeof ab || (ab = {}), ab) Ub in bb ? Ab[Ub] = ya(bb[Ub], ab[Ub]) : Mb[Ub] = ab[Ub];
      return function(bb) {
        for (Ub in Ab) Mb[Ub] = Ab[Ub](bb);
        return Mb
      }
    }
    var Xa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      ja = new RegExp(Xa.source, "g");

    function Ra(bb, ab) {
      var Ub, Ab, Mb, Tb = Xa.lastIndex = ja.lastIndex = 0,
        Eb = -1,
        Yb = [],
        Bb = [];
      for (bb += "", ab += "";
        (Ub = Xa.exec(bb)) && (Ab = ja.exec(ab));)(Mb = Ab.index) > Tb && (Mb = ab.slice(Tb, Mb), Yb[Eb] ? Yb[Eb] += Mb : Yb[++Eb] = Mb), (Ub = Ub[0]) === (Ab = Ab[0]) ? Yb[Eb] ? Yb[Eb] += Ab : Yb[++Eb] = Ab : (Yb[++Eb] = null, Bb.push({
        i: Eb,
        x: La(Ub, Ab)
      })), Tb = ja.lastIndex;
      return Tb < ab.length && (Mb = ab.slice(Tb), Yb[Eb] ? Yb[Eb] += Mb : Yb[++Eb] = Mb), Yb.length < 2 ? Bb[0] ? function(bb) {
        return function(ab) {
          return bb(ab) + ""
        }
      }(Bb[0].x) : function(bb) {
        return function() {
          return bb
        }
      }(ab) : (ab = Bb.length, function(bb) {
        for (var Ub, Ab = 0; Ab < ab; ++Ab) Yb[(Ub = Bb[Ab]).i] = Ub.x(bb);
        return Yb.join("")
      })
    }

    function ka(bb, ab) {
      ab || (ab = []);
      var Ub, Ab = bb ? Math.min(ab.length, bb.length) : 0,
        Mb = ab.slice();
      return function(Tb) {
        for (Ub = 0; Ub < Ab; ++Ub) Mb[Ub] = bb[Ub] * (1 - Tb) + ab[Ub] * Tb;
        return Mb
      }
    }

    function ya(bb, ab) {
      var Ub, Ab, Mb = typeof ab;
      return null == ab || "boolean" === Mb ? Aa(ab) : ("number" === Mb ? La : "string" === Mb ? (Ub = Kb(ab)) ? (ab = Ub, Ya) : Ra : ab instanceof Kb ? Ya : ab instanceof Date ? va : (Ab = ab, !ArrayBuffer.isView(Ab) || Ab instanceof DataView ? Array.isArray(ab) ? ea : "function" !== typeof ab.valueOf && "function" !== typeof ab.toString || isNaN(ab) ? Pa : La : ka))(bb, ab)
    }

    function Za(bb, ab) {
      return bb = +bb, ab = +ab,
        function(Ub) {
          return Math.round(bb * (1 - Ub) + ab * Ub)
        }
    }

    function Da(bb) {
      return +bb
    }
    var za = [0, 1];

    function xa(bb) {
      return bb
    }

    function ia(bb, ab) {
      return (ab -= bb = +bb) ? function(Ub) {
        return (Ub - bb) / ab
      } : (Ub = isNaN(ab) ? NaN : .5, function() {
        return Ub
      });
      var Ub
    }

    function fa(bb, ab, Ub) {
      var Ab = bb[0],
        Mb = bb[1],
        Tb = ab[0],
        Eb = ab[1];
      return Mb < Ab ? (Ab = ia(Mb, Ab), Tb = Ub(Eb, Tb)) : (Ab = ia(Ab, Mb), Tb = Ub(Tb, Eb)),
        function(bb) {
          return Tb(Ab(bb))
        }
    }

    function ma(bb, ab, Ub) {
      var Ab = Math.min(bb.length, ab.length) - 1,
        Mb = new Array(Ab),
        Tb = new Array(Ab),
        Eb = -1;
      for (bb[Ab] < bb[0] && (bb = bb.slice().reverse(), ab = ab.slice().reverse()); ++Eb < Ab;) Mb[Eb] = ia(bb[Eb], bb[Eb + 1]), Tb[Eb] = Ub(ab[Eb], ab[Eb + 1]);
      return function(ab) {
        var Ub = Db(bb, ab, 1, Ab) - 1;
        return Tb[Ub](Mb[Ub](ab))
      }
    }

    function pa(bb, ab) {
      return ab.domain(bb.domain()).range(bb.range()).interpolate(bb.interpolate()).clamp(bb.clamp()).unknown(bb.unknown())
    }

    function Na() {
      var bb, ab, Ub, Ab, Mb, Tb, Eb = za,
        Yb = za,
        Bb = ya,
        eb = xa;

      function vb() {
        var bb = Math.min(Eb.length, Yb.length);
        return eb !== xa && (eb = function(bb, ab) {
          var Ub;
          return bb > ab && (Ub = bb, bb = ab, ab = Ub),
            function(Ub) {
              return Math.max(bb, Math.min(ab, Ub))
            }
        }(Eb[0], Eb[bb - 1])), Ab = bb > 2 ? ma : fa, Mb = Tb = null, Lb
      }

      function Lb(ab) {
        return null == ab || isNaN(ab = +ab) ? Ub : (Mb || (Mb = Ab(Eb.map(bb), Yb, Bb)))(bb(eb(ab)))
      }
      return Lb.invert = function(Ub) {
          return eb(ab((Tb || (Tb = Ab(Yb, Eb.map(bb), La)))(Ub)))
        }, Lb.domain = function(bb) {
          return arguments.length ? (Eb = Array.from(bb, Da), vb()) : Eb.slice()
        }, Lb.range = function(bb) {
          return arguments.length ? (Yb = Array.from(bb), vb()) : Yb.slice()
        }, Lb.rangeRound = function(bb) {
          return Yb = Array.from(bb), Bb = Za, vb()
        }, Lb.clamp = function(bb) {
          return arguments.length ? (eb = !!bb || xa, vb()) : eb !== xa
        }, Lb.interpolate = function(bb) {
          return arguments.length ? (Bb = bb, vb()) : Bb
        }, Lb.unknown = function(bb) {
          return arguments.length ? (Ub = bb, Lb) : Ub
        },
        function(Ub, Ab) {
          return bb = Ub, ab = Ab, vb()
        }
    }

    function Wa() {
      return Na()(xa, xa)
    }
    var Ha, Ia = Ub(5766),
      da = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Fa(bb) {
      if (!(ab = da.exec(bb))) throw new Error("invalid format: " + bb);
      var ab;
      return new ha({
        fill: ab[1],
        align: ab[2],
        sign: ab[3],
        symbol: ab[4],
        zero: ab[5],
        width: ab[6],
        comma: ab[7],
        precision: ab[8] && ab[8].slice(1),
        trim: ab[9],
        type: ab[10]
      })
    }

    function ha(bb) {
      this.fill = void 0 === bb.fill ? " " : bb.fill + "", this.align = void 0 === bb.align ? ">" : bb.align + "", this.sign = void 0 === bb.sign ? "-" : bb.sign + "", this.symbol = void 0 === bb.symbol ? "" : bb.symbol + "", this.zero = !!bb.zero, this.width = void 0 === bb.width ? void 0 : +bb.width, this.comma = !!bb.comma, this.precision = void 0 === bb.precision ? void 0 : +bb.precision, this.trim = !!bb.trim, this.type = void 0 === bb.type ? "" : bb.type + ""
    }

    function Ga(bb, ab) {
      if (!isFinite(bb) || 0 === bb) return null;
      var Ub = (bb = ab ? bb.toExponential(ab - 1) : bb.toExponential()).indexOf("e"),
        Ab = bb.slice(0, Ub);
      return [Ab.length > 1 ? Ab[0] + Ab.slice(2) : Ab, +bb.slice(Ub + 1)]
    }

    function Qa(bb) {
      return (bb = Ga(Math.abs(bb))) ? bb[1] : NaN
    }

    function qa(bb, ab) {
      var Ub = Ga(bb, ab);
      if (!Ub) return bb + "";
      var Ab = Ub[0],
        Mb = Ub[1];
      return Mb < 0 ? "0." + new Array(-Mb).join("0") + Ab : Ab.length > Mb + 1 ? Ab.slice(0, Mb + 1) + "." + Ab.slice(Mb + 1) : Ab + new Array(Mb - Ab.length + 2).join("0")
    }
    Fa.prototype = ha.prototype, ha.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const ua = {
      "%": (bb, ab) => (100 * bb).toFixed(ab),
      b: bb => Math.round(bb).toString(2),
      c: bb => bb + "",
      d: function(bb) {
        return Math.abs(bb = Math.round(bb)) >= 1e21 ? bb.toLocaleString("en").replace(/,/g, "") : bb.toString(10)
      },
      e: (bb, ab) => bb.toExponential(ab),
      f: (bb, ab) => bb.toFixed(ab),
      g: (bb, ab) => bb.toPrecision(ab),
      o: bb => Math.round(bb).toString(8),
      p: (bb, ab) => qa(100 * bb, ab),
      r: qa,
      s: function(bb, ab) {
        var Ub = Ga(bb, ab);
        if (!Ub) return Ha = void 0, bb.toPrecision(ab);
        var Ab = Ub[0],
          Mb = Ub[1],
          Tb = Mb - (Ha = 3 * Math.max(-8, Math.min(8, Math.floor(Mb / 3)))) + 1,
          Eb = Ab.length;
        return Tb === Eb ? Ab : Tb > Eb ? Ab + new Array(Tb - Eb + 1).join("0") : Tb > 0 ? Ab.slice(0, Tb) + "." + Ab.slice(Tb) : "0." + new Array(1 - Tb).join("0") + Ga(bb, Math.max(0, ab + Tb - 1))[0]
      },
      X: bb => Math.round(bb).toString(16).toUpperCase(),
      x: bb => Math.round(bb).toString(16)
    };

    function ra(bb) {
      return bb
    }
    var Ka, oa, la, ta = Array.prototype.map,
      wa = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function sa(bb) {
      var ab, Ub, Ab = void 0 === bb.grouping || void 0 === bb.thousands ? ra : (ab = ta.call(bb.grouping, Number), Ub = bb.thousands + "", function(bb, Ab) {
          for (var Mb = bb.length, Tb = [], Eb = 0, Yb = ab[0], Bb = 0; Mb > 0 && Yb > 0 && (Bb + Yb + 1 > Ab && (Yb = Math.max(1, Ab - Bb)), Tb.push(bb.substring(Mb -= Yb, Mb + Yb)), !((Bb += Yb + 1) > Ab));) Yb = ab[Eb = (Eb + 1) % ab.length];
          return Tb.reverse().join(Ub)
        }),
        Mb = void 0 === bb.currency ? "" : bb.currency[0] + "",
        Tb = void 0 === bb.currency ? "" : bb.currency[1] + "",
        Eb = void 0 === bb.decimal ? "." : bb.decimal + "",
        Yb = void 0 === bb.numerals ? ra : function(bb) {
          return function(ab) {
            return ab.replace(/[0-9]/g, (function(ab) {
              return bb[+ab]
            }))
          }
        }(ta.call(bb.numerals, String)),
        Bb = void 0 === bb.percent ? "%" : bb.percent + "",
        eb = void 0 === bb.minus ? "\u2212" : bb.minus + "",
        vb = void 0 === bb.nan ? "NaN" : bb.nan + "";

      function Lb(bb, ab) {
        var Ub = (bb = Fa(bb)).fill,
          Lb = bb.align,
          Pb = bb.sign,
          Xb = bb.symbol,
          jb = bb.zero,
          Rb = bb.width,
          kb = bb.comma,
          yb = bb.precision,
          Zb = bb.trim,
          Db = bb.type;
        "n" === Db ? (kb = !0, Db = "g") : ua[Db] || (void 0 === yb && (yb = 12), Zb = !0, Db = "g"), (jb || "0" === Ub && "=" === Lb) && (jb = !0, Ub = "0", Lb = "=");
        var zb = (ab && void 0 !== ab.prefix ? ab.prefix : "") + ("$" === Xb ? Mb : "#" === Xb && /[boxX]/.test(Db) ? "0" + Db.toLowerCase() : ""),
          xb = ("$" === Xb ? Tb : /[%p]/.test(Db) ? Bb : "") + (ab && void 0 !== ab.suffix ? ab.suffix : ""),
          ib = ua[Db],
          fb = /[defgprs%]/.test(Db);

        function mb(bb) {
          var ab, Mb, Tb, Bb = zb,
            Xb = xb;
          if ("c" === Db) Xb = ib(bb) + Xb, bb = "";
          else {
            var mb = (bb = +bb) < 0 || 1 / bb < 0;
            if (bb = isNaN(bb) ? vb : ib(Math.abs(bb), yb), Zb && (bb = function(bb) {
                bb: for (var ab, Ub = bb.length, Ab = 1, Mb = -1; Ab < Ub; ++Ab) switch (bb[Ab]) {
                  case ".":
                    Mb = ab = Ab;
                    break;
                  case "0":
                    0 === Mb && (Mb = Ab), ab = Ab;
                    break;
                  default:
                    if (!+bb[Ab]) break bb;
                    Mb > 0 && (Mb = 0)
                }
                return Mb > 0 ? bb.slice(0, Mb) + bb.slice(ab + 1) : bb
              }(bb)), mb && 0 === +bb && "+" !== Pb && (mb = !1), Bb = (mb ? "(" === Pb ? Pb : eb : "-" === Pb || "(" === Pb ? "" : Pb) + Bb, Xb = ("s" !== Db || isNaN(bb) || void 0 === Ha ? "" : wa[8 + Ha / 3]) + Xb + (mb && "(" === Pb ? ")" : ""), fb)
              for (ab = -1, Mb = bb.length; ++ab < Mb;)
                if (48 > (Tb = bb.charCodeAt(ab)) || Tb > 57) {
                  Xb = (46 === Tb ? Eb + bb.slice(ab + 1) : bb.slice(ab)) + Xb, bb = bb.slice(0, ab);
                  break
                }
          }
          kb && !jb && (bb = Ab(bb, 1 / 0));
          var pb = Bb.length + bb.length + Xb.length,
            Nb = pb < Rb ? new Array(Rb - pb + 1).join(Ub) : "";
          switch (kb && jb && (bb = Ab(Nb + bb, Nb.length ? Rb - Xb.length : 1 / 0), Nb = ""), Lb) {
            case "<":
              bb = Bb + bb + Xb + Nb;
              break;
            case "=":
              bb = Bb + Nb + bb + Xb;
              break;
            case "^":
              bb = Nb.slice(0, pb = Nb.length >> 1) + Bb + bb + Xb + Nb.slice(pb);
              break;
            default:
              bb = Nb + Bb + bb + Xb
          }
          return Yb(bb)
        }
        return yb = void 0 === yb ? 6 : /[gprs]/.test(Db) ? Math.max(1, Math.min(21, yb)) : Math.max(0, Math.min(20, yb)), mb.toString = function() {
          return bb + ""
        }, mb
      }
      return {
        format: Lb,
        formatPrefix: function(bb, ab) {
          var Ub = 3 * Math.max(-8, Math.min(8, Math.floor(Qa(ab) / 3))),
            Ab = Math.pow(10, -Ub),
            Mb = Lb(((bb = Fa(bb)).type = "f", bb), {
              suffix: wa[8 + Ub / 3]
            });
          return function(bb) {
            return Mb(Ab * bb)
          }
        }
      }
    }

    function ga(bb, ab, Ub, Ab) {
      var Mb, Tb = Lb(bb, ab, Ub);
      switch ((Ab = Fa(null == Ab ? ",f" : Ab)).type) {
        case "s":
          var Eb = Math.max(Math.abs(bb), Math.abs(ab));
          return null != Ab.precision || isNaN(Mb = function(bb, ab) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Qa(ab) / 3))) - Qa(Math.abs(bb)))
          }(Tb, Eb)) || (Ab.precision = Mb), la(Ab, Eb);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != Ab.precision || isNaN(Mb = function(bb, ab) {
            return bb = Math.abs(bb), ab = Math.abs(ab) - bb, Math.max(0, Qa(ab) - Qa(bb)) + 1
          }(Tb, Math.max(Math.abs(bb), Math.abs(ab)))) || (Ab.precision = Mb - ("e" === Ab.type));
          break;
        case "f":
        case "%":
          null != Ab.precision || isNaN(Mb = function(bb) {
            return Math.max(0, -Qa(Math.abs(bb)))
          }(Tb)) || (Ab.precision = Mb - 2 * ("%" === Ab.type))
      }
      return oa(Ab)
    }

    function Ca(bb) {
      var ab = bb.domain;
      return bb.ticks = function(bb) {
        var Ub = ab();
        return eb(Ub[0], Ub[Ub.length - 1], null == bb ? 10 : bb)
      }, bb.tickFormat = function(bb, Ub) {
        var Ab = ab();
        return ga(Ab[0], Ab[Ab.length - 1], null == bb ? 10 : bb, Ub)
      }, bb.nice = function(Ub) {
        null == Ub && (Ub = 10);
        var Ab, Mb, Tb = ab(),
          Eb = 0,
          Yb = Tb.length - 1,
          Bb = Tb[Eb],
          eb = Tb[Yb],
          Lb = 10;
        for (eb < Bb && (Mb = Bb, Bb = eb, eb = Mb, Mb = Eb, Eb = Yb, Yb = Mb); Lb-- > 0;) {
          if ((Mb = vb(Bb, eb, Ub)) === Ab) return Tb[Eb] = Bb, Tb[Yb] = eb, ab(Tb);
          if (Mb > 0) Bb = Math.floor(Bb / Mb) * Mb, eb = Math.ceil(eb / Mb) * Mb;
          else {
            if (!(Mb < 0)) break;
            Bb = Math.ceil(Bb * Mb) / Mb, eb = Math.floor(eb * Mb) / Mb
          }
          Ab = Mb
        }
        return bb
      }, bb
    }

    function Va() {
      var bb = Wa();
      return bb.copy = function() {
        return pa(bb, Va())
      }, Ia.f.apply(bb, arguments), Ca(bb)
    }

    function Oa(bb) {
      var ab;

      function Ub(bb) {
        return null == bb || isNaN(bb = +bb) ? ab : bb
      }
      return Ub.invert = Ub, Ub.domain = Ub.range = function(ab) {
        return arguments.length ? (bb = Array.from(ab, Da), Ub) : bb.slice()
      }, Ub.unknown = function(bb) {
        return arguments.length ? (ab = bb, Ub) : ab
      }, Ub.copy = function() {
        return Oa(bb).unknown(ab)
      }, bb = arguments.length ? Array.from(bb, Da) : [0, 1], Ca(Ub)
    }

    function ca(bb, ab) {
      var Ub, Ab = 0,
        Mb = (bb = bb.slice()).length - 1,
        Tb = bb[Ab],
        Eb = bb[Mb];
      return Eb < Tb && (Ub = Ab, Ab = Mb, Mb = Ub, Ub = Tb, Tb = Eb, Eb = Ub), bb[Ab] = ab.floor(Tb), bb[Mb] = ab.ceil(Eb), bb
    }

    function Ja(bb) {
      return Math.log(bb)
    }

    function na(bb) {
      return Math.exp(bb)
    }

    function Sa(bb) {
      return -Math.log(-bb)
    }

    function bU(bb) {
      return -Math.exp(-bb)
    }

    function aU(bb) {
      return isFinite(bb) ? +("1e" + bb) : bb < 0 ? 0 : bb
    }

    function UU(bb) {
      return (ab, Ub) => -bb(-ab, Ub)
    }

    function AU(bb) {
      const ab = bb(Ja, na),
        Ub = ab.domain;
      let Ab, Mb, Tb = 10;

      function Eb() {
        return Ab = function(bb) {
          return bb === Math.E ? Math.log : 10 === bb && Math.log10 || 2 === bb && Math.log2 || (bb = Math.log(bb), ab => Math.log(ab) / bb)
        }(Tb), Mb = function(bb) {
          return 10 === bb ? aU : bb === Math.E ? Math.exp : ab => Math.pow(bb, ab)
        }(Tb), Ub()[0] < 0 ? (Ab = UU(Ab), Mb = UU(Mb), bb(Sa, bU)) : bb(Ja, na), ab
      }
      return ab.base = function(bb) {
        return arguments.length ? (Tb = +bb, Eb()) : Tb
      }, ab.domain = function(bb) {
        return arguments.length ? (Ub(bb), Eb()) : Ub()
      }, ab.ticks = bb => {
        const ab = Ub();
        let Eb = ab[0],
          Yb = ab[ab.length - 1];
        const Bb = Yb < Eb;
        Bb && ([Eb, Yb] = [Yb, Eb]);
        let vb, Lb, Pb = Ab(Eb),
          Xb = Ab(Yb);
        const jb = null == bb ? 10 : +bb;
        let Rb = [];
        if (!(Tb % 1) && Xb - Pb < jb) {
          if (Pb = Math.floor(Pb), Xb = Math.ceil(Xb), Eb > 0) {
            for (; Pb <= Xb; ++Pb)
              for (vb = 1; vb < Tb; ++vb)
                if (Lb = Pb < 0 ? vb / Mb(-Pb) : vb * Mb(Pb), !(Lb < Eb)) {
                  if (Lb > Yb) break;
                  Rb.push(Lb)
                }
          } else
            for (; Pb <= Xb; ++Pb)
              for (vb = Tb - 1; vb >= 1; --vb)
                if (Lb = Pb > 0 ? vb / Mb(-Pb) : vb * Mb(Pb), !(Lb < Eb)) {
                  if (Lb > Yb) break;
                  Rb.push(Lb)
                } 2 * Rb.length < jb && (Rb = eb(Eb, Yb, jb))
        } else Rb = eb(Pb, Xb, Math.min(Xb - Pb, jb)).map(Mb);
        return Bb ? Rb.reverse() : Rb
      }, ab.tickFormat = (bb, Ub) => {
        if (null == bb && (bb = 10), null == Ub && (Ub = 10 === Tb ? "s" : ","), "function" !== typeof Ub && (Tb % 1 || null != (Ub = Fa(Ub)).precision || (Ub.trim = !0), Ub = oa(Ub)), bb === 1 / 0) return Ub;
        const Eb = Math.max(1, Tb * bb / ab.ticks().length);
        return bb => {
          let ab = bb / Mb(Math.round(Ab(bb)));
          return ab * Tb < Tb - .5 && (ab *= Tb), ab <= Eb ? Ub(bb) : ""
        }
      }, ab.nice = () => Ub(ca(Ub(), {
        floor: bb => Mb(Math.floor(Ab(bb))),
        ceil: bb => Mb(Math.ceil(Ab(bb)))
      })), ab
    }

    function MU() {
      const bb = AU(Na()).domain([1, 10]);
      return bb.copy = () => pa(bb, MU()).base(bb.base()), Ia.f.apply(bb, arguments), bb
    }

    function TU(bb) {
      return function(ab) {
        return Math.sign(ab) * Math.log1p(Math.abs(ab / bb))
      }
    }

    function EU(bb) {
      return function(ab) {
        return Math.sign(ab) * Math.expm1(Math.abs(ab)) * bb
      }
    }

    function YU(bb) {
      var ab = 1,
        Ub = bb(TU(ab), EU(ab));
      return Ub.constant = function(Ub) {
        return arguments.length ? bb(TU(ab = +Ub), EU(ab)) : ab
      }, Ca(Ub)
    }

    function BU() {
      var bb = YU(Na());
      return bb.copy = function() {
        return pa(bb, BU()).constant(bb.constant())
      }, Ia.f.apply(bb, arguments)
    }
    Ka = sa({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), oa = Ka.format, la = Ka.formatPrefix;
    var eU = Ub(5769);

    function vU(bb) {
      return function(ab) {
        return ab < 0 ? -Math.pow(-ab, bb) : Math.pow(ab, bb)
      }
    }

    function LU(bb) {
      return bb < 0 ? -Math.sqrt(-bb) : Math.sqrt(bb)
    }

    function PU(bb) {
      return bb < 0 ? -bb * bb : bb * bb
    }

    function XU(bb) {
      var ab = bb(xa, xa),
        Ub = 1;
      return ab.exponent = function(ab) {
        return arguments.length ? 1 === (Ub = +ab) ? bb(xa, xa) : .5 === Ub ? bb(LU, PU) : bb(vU(Ub), vU(1 / Ub)) : Ub
      }, Ca(ab)
    }

    function jU() {
      var bb = XU(Na());
      return bb.copy = function() {
        return pa(bb, jU()).exponent(bb.exponent())
      }, Ia.f.apply(bb, arguments), bb
    }

    function RU() {
      return jU.apply(null, arguments).exponent(.5)
    }

    function kU(bb) {
      return Math.sign(bb) * bb * bb
    }

    function yU() {
      var bb, ab = Wa(),
        Ub = [0, 1],
        Ab = !1;

      function Mb(Ub) {
        var Mb = function(bb) {
          return Math.sign(bb) * Math.sqrt(Math.abs(bb))
        }(ab(Ub));
        return isNaN(Mb) ? bb : Ab ? Math.round(Mb) : Mb
      }
      return Mb.invert = function(bb) {
        return ab.invert(kU(bb))
      }, Mb.domain = function(bb) {
        return arguments.length ? (ab.domain(bb), Mb) : ab.domain()
      }, Mb.range = function(bb) {
        return arguments.length ? (ab.range((Ub = Array.from(bb, Da)).map(kU)), Mb) : Ub.slice()
      }, Mb.rangeRound = function(bb) {
        return Mb.range(bb).round(!0)
      }, Mb.round = function(bb) {
        return arguments.length ? (Ab = !!bb, Mb) : Ab
      }, Mb.clamp = function(bb) {
        return arguments.length ? (ab.clamp(bb), Mb) : ab.clamp()
      }, Mb.unknown = function(ab) {
        return arguments.length ? (bb = ab, Mb) : bb
      }, Mb.copy = function() {
        return yU(ab.domain(), Ub).round(Ab).clamp(ab.clamp()).unknown(bb)
      }, Ia.f.apply(Mb, arguments), Ca(Mb)
    }

    function ZU(bb, ab) {
      let Ub;
      if (void 0 === ab)
        for (const Ab of bb) null != Ab && (Ub < Ab || void 0 === Ub && Ab >= Ab) && (Ub = Ab);
      else {
        let Ab = -1;
        for (let Mb of bb) null != (Mb = ab(Mb, ++Ab, bb)) && (Ub < Mb || void 0 === Ub && Mb >= Mb) && (Ub = Mb)
      }
      return Ub
    }

    function DU(bb, ab) {
      let Ub;
      if (void 0 === ab)
        for (const Ab of bb) null != Ab && (Ub > Ab || void 0 === Ub && Ab >= Ab) && (Ub = Ab);
      else {
        let Ab = -1;
        for (let Mb of bb) null != (Mb = ab(Mb, ++Ab, bb)) && (Ub > Mb || void 0 === Ub && Mb >= Mb) && (Ub = Mb)
      }
      return Ub
    }

    function zU() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pb;
      if (bb === Pb) return xU;
      if ("function" !== typeof bb) throw new TypeError("compare is not a function");
      return (ab, Ub) => {
        const Ab = bb(ab, Ub);
        return Ab || 0 === Ab ? Ab : (0 === bb(Ub, Ub)) - (0 === bb(ab, ab))
      }
    }

    function xU(bb, ab) {
      return (null == bb || !(bb >= bb)) - (null == ab || !(ab >= ab)) || (bb < ab ? -1 : bb > ab ? 1 : 0)
    }

    function iU(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        Mb = arguments.length > 4 ? arguments[4] : void 0;
      if (ab = Math.floor(ab), Ub = Math.floor(Math.max(0, Ub)), Ab = Math.floor(Math.min(bb.length - 1, Ab)), !(Ub <= ab && ab <= Ab)) return bb;
      for (Mb = void 0 === Mb ? xU : zU(Mb); Ab > Ub;) {
        if (Ab - Ub > 600) {
          const Tb = Ab - Ub + 1,
            Eb = ab - Ub + 1,
            Yb = Math.log(Tb),
            Bb = .5 * Math.exp(2 * Yb / 3),
            eb = .5 * Math.sqrt(Yb * Bb * (Tb - Bb) / Tb) * (Eb - Tb / 2 < 0 ? -1 : 1);
          iU(bb, ab, Math.max(Ub, Math.floor(ab - Eb * Bb / Tb + eb)), Math.min(Ab, Math.floor(ab + (Tb - Eb) * Bb / Tb + eb)), Mb)
        }
        const Tb = bb[ab];
        let Eb = Ub,
          Yb = Ab;
        for (fU(bb, Ub, ab), Mb(bb[Ab], Tb) > 0 && fU(bb, Ub, Ab); Eb < Yb;) {
          for (fU(bb, Eb, Yb), ++Eb, --Yb; Mb(bb[Eb], Tb) < 0;) ++Eb;
          for (; Mb(bb[Yb], Tb) > 0;) --Yb
        }
        0 === Mb(bb[Ub], Tb) ? fU(bb, Ub, Yb) : (++Yb, fU(bb, Yb, Ab)), Yb <= ab && (Ub = Yb + 1), ab <= Yb && (Ab = Yb - 1)
      }
      return bb
    }

    function fU(bb, ab, Ub) {
      const Ab = bb[ab];
      bb[ab] = bb[Ub], bb[Ub] = Ab
    }

    function mU(bb, ab, Ub) {
      if (bb = Float64Array.from(function*(bb, ab) {
          if (void 0 === ab)
            for (let Ub of bb) null != Ub && (Ub = +Ub) >= Ub && (yield Ub);
          else {
            let Ub = -1;
            for (let Ab of bb) null != (Ab = ab(Ab, ++Ub, bb)) && (Ab = +Ab) >= Ab && (yield Ab)
          }
        }(bb, Ub)), (Ab = bb.length) && !isNaN(ab = +ab)) {
        if (ab <= 0 || Ab < 2) return DU(bb);
        if (ab >= 1) return ZU(bb);
        var Ab, Mb = (Ab - 1) * ab,
          Tb = Math.floor(Mb),
          Eb = ZU(iU(bb, Tb).subarray(0, Tb + 1));
        return Eb + (DU(bb.subarray(Tb + 1)) - Eb) * (Mb - Tb)
      }
    }

    function pU(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kb;
      if ((Ab = bb.length) && !isNaN(ab = +ab)) {
        if (ab <= 0 || Ab < 2) return +Ub(bb[0], 0, bb);
        if (ab >= 1) return +Ub(bb[Ab - 1], Ab - 1, bb);
        var Ab, Mb = (Ab - 1) * ab,
          Tb = Math.floor(Mb),
          Eb = +Ub(bb[Tb], Tb, bb);
        return Eb + (+Ub(bb[Tb + 1], Tb + 1, bb) - Eb) * (Mb - Tb)
      }
    }

    function NU() {
      var bb, ab = [],
        Ub = [],
        Ab = [];

      function Mb() {
        var bb = 0,
          Mb = Math.max(1, Ub.length);
        for (Ab = new Array(Mb - 1); ++bb < Mb;) Ab[bb - 1] = pU(ab, bb / Mb);
        return Tb
      }

      function Tb(ab) {
        return null == ab || isNaN(ab = +ab) ? bb : Ub[Db(Ab, ab)]
      }
      return Tb.invertExtent = function(bb) {
        var Mb = Ub.indexOf(bb);
        return Mb < 0 ? [NaN, NaN] : [Mb > 0 ? Ab[Mb - 1] : ab[0], Mb < Ab.length ? Ab[Mb] : ab[ab.length - 1]]
      }, Tb.domain = function(bb) {
        if (!arguments.length) return ab.slice();
        ab = [];
        for (let Ub of bb) null == Ub || isNaN(Ub = +Ub) || ab.push(Ub);
        return ab.sort(Pb), Mb()
      }, Tb.range = function(bb) {
        return arguments.length ? (Ub = Array.from(bb), Mb()) : Ub.slice()
      }, Tb.unknown = function(ab) {
        return arguments.length ? (bb = ab, Tb) : bb
      }, Tb.quantiles = function() {
        return Ab.slice()
      }, Tb.copy = function() {
        return NU().domain(ab).range(Ub).unknown(bb)
      }, Ia.f.apply(Tb, arguments)
    }

    function WU() {
      var bb, ab = 0,
        Ub = 1,
        Ab = 1,
        Mb = [.5],
        Tb = [0, 1];

      function Eb(ab) {
        return null != ab && ab <= ab ? Tb[Db(Mb, ab, 0, Ab)] : bb
      }

      function Yb() {
        var bb = -1;
        for (Mb = new Array(Ab); ++bb < Ab;) Mb[bb] = ((bb + 1) * Ub - (bb - Ab) * ab) / (Ab + 1);
        return Eb
      }
      return Eb.domain = function(bb) {
        return arguments.length ? ([ab, Ub] = bb, ab = +ab, Ub = +Ub, Yb()) : [ab, Ub]
      }, Eb.range = function(bb) {
        return arguments.length ? (Ab = (Tb = Array.from(bb)).length - 1, Yb()) : Tb.slice()
      }, Eb.invertExtent = function(bb) {
        var Eb = Tb.indexOf(bb);
        return Eb < 0 ? [NaN, NaN] : Eb < 1 ? [ab, Mb[0]] : Eb >= Ab ? [Mb[Ab - 1], Ub] : [Mb[Eb - 1], Mb[Eb]]
      }, Eb.unknown = function(ab) {
        return arguments.length ? (bb = ab, Eb) : Eb
      }, Eb.thresholds = function() {
        return Mb.slice()
      }, Eb.copy = function() {
        return WU().domain([ab, Ub]).range(Tb).unknown(bb)
      }, Ia.f.apply(Ca(Eb), arguments)
    }

    function HU() {
      var bb, ab = [.5],
        Ub = [0, 1],
        Ab = 1;

      function Mb(Mb) {
        return null != Mb && Mb <= Mb ? Ub[Db(ab, Mb, 0, Ab)] : bb
      }
      return Mb.domain = function(bb) {
        return arguments.length ? (ab = Array.from(bb), Ab = Math.min(ab.length, Ub.length - 1), Mb) : ab.slice()
      }, Mb.range = function(bb) {
        return arguments.length ? (Ub = Array.from(bb), Ab = Math.min(ab.length, Ub.length - 1), Mb) : Ub.slice()
      }, Mb.invertExtent = function(bb) {
        var Ab = Ub.indexOf(bb);
        return [ab[Ab - 1], ab[Ab]]
      }, Mb.unknown = function(ab) {
        return arguments.length ? (bb = ab, Mb) : bb
      }, Mb.copy = function() {
        return HU().domain(ab).range(Ub).unknown(bb)
      }, Ia.f.apply(Mb, arguments)
    }
    const IU = 1e3,
      dU = 6e4,
      FU = 36e5,
      hU = 864e5,
      GU = 6048e5,
      QU = 2592e6,
      qU = 31536e6,
      uU = new Date,
      rU = new Date;

    function KU(bb, ab, Ub, Ab) {
      function Mb(ab) {
        return bb(ab = 0 === arguments.length ? new Date : new Date(+ab)), ab
      }
      return Mb.floor = ab => (bb(ab = new Date(+ab)), ab), Mb.ceil = Ub => (bb(Ub = new Date(Ub - 1)), ab(Ub, 1), bb(Ub), Ub), Mb.round = bb => {
        const ab = Mb(bb),
          Ub = Mb.ceil(bb);
        return bb - ab < Ub - bb ? ab : Ub
      }, Mb.offset = (bb, Ub) => (ab(bb = new Date(+bb), null == Ub ? 1 : Math.floor(Ub)), bb), Mb.range = (Ub, Ab, Tb) => {
        const Eb = [];
        if (Ub = Mb.ceil(Ub), Tb = null == Tb ? 1 : Math.floor(Tb), !(Ub < Ab) || !(Tb > 0)) return Eb;
        let Yb;
        do {
          Eb.push(Yb = new Date(+Ub)), ab(Ub, Tb), bb(Ub)
        } while (Yb < Ub && Ub < Ab);
        return Eb
      }, Mb.filter = Ub => KU((ab => {
        if (ab >= ab)
          for (; bb(ab), !Ub(ab);) ab.setTime(ab - 1)
      }), ((bb, Ab) => {
        if (bb >= bb)
          if (Ab < 0)
            for (; ++Ab <= 0;)
              for (; ab(bb, -1), !Ub(bb););
          else
            for (; --Ab >= 0;)
              for (; ab(bb, 1), !Ub(bb););
      })), Ub && (Mb.count = (ab, Ab) => (uU.setTime(+ab), rU.setTime(+Ab), bb(uU), bb(rU), Math.floor(Ub(uU, rU))), Mb.every = bb => (bb = Math.floor(bb), isFinite(bb) && bb > 0 ? bb > 1 ? Mb.filter(Ab ? ab => Ab(ab) % bb === 0 : ab => Mb.count(0, ab) % bb === 0) : Mb : null)), Mb
    }
    const oU = KU((() => {}), ((bb, ab) => {
      bb.setTime(+bb + ab)
    }), ((bb, ab) => ab - bb));
    oU.every = bb => (bb = Math.floor(bb), isFinite(bb) && bb > 0 ? bb > 1 ? KU((ab => {
      ab.setTime(Math.floor(ab / bb) * bb)
    }), ((ab, Ub) => {
      ab.setTime(+ab + Ub * bb)
    }), ((ab, Ub) => (Ub - ab) / bb)) : oU : null);
    oU.range;
    const lU = KU((bb => {
        bb.setTime(bb - bb.getMilliseconds())
      }), ((bb, ab) => {
        bb.setTime(+bb + ab * IU)
      }), ((bb, ab) => (ab - bb) / IU), (bb => bb.getUTCSeconds())),
      tU = (lU.range, KU((bb => {
        bb.setTime(bb - bb.getMilliseconds() - bb.getSeconds() * IU)
      }), ((bb, ab) => {
        bb.setTime(+bb + ab * dU)
      }), ((bb, ab) => (ab - bb) / dU), (bb => bb.getMinutes()))),
      wU = (tU.range, KU((bb => {
        bb.setUTCSeconds(0, 0)
      }), ((bb, ab) => {
        bb.setTime(+bb + ab * dU)
      }), ((bb, ab) => (ab - bb) / dU), (bb => bb.getUTCMinutes()))),
      sU = (wU.range, KU((bb => {
        bb.setTime(bb - bb.getMilliseconds() - bb.getSeconds() * IU - bb.getMinutes() * dU)
      }), ((bb, ab) => {
        bb.setTime(+bb + ab * FU)
      }), ((bb, ab) => (ab - bb) / FU), (bb => bb.getHours()))),
      gU = (sU.range, KU((bb => {
        bb.setUTCMinutes(0, 0, 0)
      }), ((bb, ab) => {
        bb.setTime(+bb + ab * FU)
      }), ((bb, ab) => (ab - bb) / FU), (bb => bb.getUTCHours()))),
      CU = (gU.range, KU((bb => bb.setHours(0, 0, 0, 0)), ((bb, ab) => bb.setDate(bb.getDate() + ab)), ((bb, ab) => (ab - bb - (ab.getTimezoneOffset() - bb.getTimezoneOffset()) * dU) / hU), (bb => bb.getDate() - 1))),
      VU = (CU.range, KU((bb => {
        bb.setUTCHours(0, 0, 0, 0)
      }), ((bb, ab) => {
        bb.setUTCDate(bb.getUTCDate() + ab)
      }), ((bb, ab) => (ab - bb) / hU), (bb => bb.getUTCDate() - 1))),
      OU = (VU.range, KU((bb => {
        bb.setUTCHours(0, 0, 0, 0)
      }), ((bb, ab) => {
        bb.setUTCDate(bb.getUTCDate() + ab)
      }), ((bb, ab) => (ab - bb) / hU), (bb => Math.floor(bb / hU))));
    OU.range;

    function cU(bb) {
      return KU((ab => {
        ab.setDate(ab.getDate() - (ab.getDay() + 7 - bb) % 7), ab.setHours(0, 0, 0, 0)
      }), ((bb, ab) => {
        bb.setDate(bb.getDate() + 7 * ab)
      }), ((bb, ab) => (ab - bb - (ab.getTimezoneOffset() - bb.getTimezoneOffset()) * dU) / GU))
    }
    const JU = cU(0),
      nU = cU(1),
      SU = cU(2),
      bA = cU(3),
      aA = cU(4),
      UA = cU(5),
      AA = cU(6);
    JU.range, nU.range, SU.range, bA.range, aA.range, UA.range, AA.range;

    function MA(bb) {
      return KU((ab => {
        ab.setUTCDate(ab.getUTCDate() - (ab.getUTCDay() + 7 - bb) % 7), ab.setUTCHours(0, 0, 0, 0)
      }), ((bb, ab) => {
        bb.setUTCDate(bb.getUTCDate() + 7 * ab)
      }), ((bb, ab) => (ab - bb) / GU))
    }
    const TA = MA(0),
      EA = MA(1),
      YA = MA(2),
      BA = MA(3),
      eA = MA(4),
      vA = MA(5),
      LA = MA(6),
      PA = (TA.range, EA.range, YA.range, BA.range, eA.range, vA.range, LA.range, KU((bb => {
        bb.setDate(1), bb.setHours(0, 0, 0, 0)
      }), ((bb, ab) => {
        bb.setMonth(bb.getMonth() + ab)
      }), ((bb, ab) => ab.getMonth() - bb.getMonth() + 12 * (ab.getFullYear() - bb.getFullYear())), (bb => bb.getMonth()))),
      XA = (PA.range, KU((bb => {
        bb.setUTCDate(1), bb.setUTCHours(0, 0, 0, 0)
      }), ((bb, ab) => {
        bb.setUTCMonth(bb.getUTCMonth() + ab)
      }), ((bb, ab) => ab.getUTCMonth() - bb.getUTCMonth() + 12 * (ab.getUTCFullYear() - bb.getUTCFullYear())), (bb => bb.getUTCMonth()))),
      jA = (XA.range, KU((bb => {
        bb.setMonth(0, 1), bb.setHours(0, 0, 0, 0)
      }), ((bb, ab) => {
        bb.setFullYear(bb.getFullYear() + ab)
      }), ((bb, ab) => ab.getFullYear() - bb.getFullYear()), (bb => bb.getFullYear())));
    jA.every = bb => isFinite(bb = Math.floor(bb)) && bb > 0 ? KU((ab => {
      ab.setFullYear(Math.floor(ab.getFullYear() / bb) * bb), ab.setMonth(0, 1), ab.setHours(0, 0, 0, 0)
    }), ((ab, Ub) => {
      ab.setFullYear(ab.getFullYear() + Ub * bb)
    })) : null;
    jA.range;
    const RA = KU((bb => {
      bb.setUTCMonth(0, 1), bb.setUTCHours(0, 0, 0, 0)
    }), ((bb, ab) => {
      bb.setUTCFullYear(bb.getUTCFullYear() + ab)
    }), ((bb, ab) => ab.getUTCFullYear() - bb.getUTCFullYear()), (bb => bb.getUTCFullYear()));
    RA.every = bb => isFinite(bb = Math.floor(bb)) && bb > 0 ? KU((ab => {
      ab.setUTCFullYear(Math.floor(ab.getUTCFullYear() / bb) * bb), ab.setUTCMonth(0, 1), ab.setUTCHours(0, 0, 0, 0)
    }), ((ab, Ub) => {
      ab.setUTCFullYear(ab.getUTCFullYear() + Ub * bb)
    })) : null;
    RA.range;

    function kA(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = [
        [lU, 1, IU],
        [lU, 5, 5e3],
        [lU, 15, 15e3],
        [lU, 30, 3e4],
        [Tb, 1, dU],
        [Tb, 5, 3e5],
        [Tb, 15, 9e5],
        [Tb, 30, 18e5],
        [Mb, 1, FU],
        [Mb, 3, 108e5],
        [Mb, 6, 216e5],
        [Mb, 12, 432e5],
        [Ab, 1, hU],
        [Ab, 2, 1728e5],
        [Ub, 1, GU],
        [ab, 1, QU],
        [ab, 3, 7776e6],
        [bb, 1, qU]
      ];

      function Yb(ab, Ub, Ab) {
        const Mb = Math.abs(Ub - ab) / Ab,
          Tb = jb((bb => {
            let [, , ab] = bb;
            return ab
          })).right(Eb, Mb);
        if (Tb === Eb.length) return bb.every(Lb(ab / qU, Ub / qU, Ab));
        if (0 === Tb) return oU.every(Math.max(Lb(ab, Ub, Ab), 1));
        const [Yb, Bb] = Eb[Mb / Eb[Tb - 1][2] < Eb[Tb][2] / Mb ? Tb - 1 : Tb];
        return Yb.every(Bb)
      }
      return [function(bb, ab, Ub) {
        const Ab = ab < bb;
        Ab && ([bb, ab] = [ab, bb]);
        const Mb = Ub && "function" === typeof Ub.range ? Ub : Yb(bb, ab, Ub),
          Tb = Mb ? Mb.range(bb, +ab + 1) : [];
        return Ab ? Tb.reverse() : Tb
      }, Yb]
    }
    const [yA, ZA] = kA(RA, XA, TA, OU, gU, wU), [DA, zA] = kA(jA, PA, JU, CU, sU, tU);

    function xA(bb) {
      if (0 <= bb.y && bb.y < 100) {
        var ab = new Date(-1, bb.m, bb.d, bb.H, bb.M, bb.S, bb.L);
        return ab.setFullYear(bb.y), ab
      }
      return new Date(bb.y, bb.m, bb.d, bb.H, bb.M, bb.S, bb.L)
    }

    function iA(bb) {
      if (0 <= bb.y && bb.y < 100) {
        var ab = new Date(Date.UTC(-1, bb.m, bb.d, bb.H, bb.M, bb.S, bb.L));
        return ab.setUTCFullYear(bb.y), ab
      }
      return new Date(Date.UTC(bb.y, bb.m, bb.d, bb.H, bb.M, bb.S, bb.L))
    }

    function fA(bb, ab, Ub) {
      return {
        y: bb,
        m: ab,
        d: Ub,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var mA, pA, NA, WA = {
        "-": "",
        _: " ",
        0: "0"
      },
      HA = /^\s*\d+/,
      IA = /^%/,
      dA = /[\\^$*+?|[\]().{}]/g;

    function FA(bb, ab, Ub) {
      var Ab = bb < 0 ? "-" : "",
        Mb = (Ab ? -bb : bb) + "",
        Tb = Mb.length;
      return Ab + (Tb < Ub ? new Array(Ub - Tb + 1).join(ab) + Mb : Mb)
    }

    function hA(bb) {
      return bb.replace(dA, "\\$&")
    }

    function GA(bb) {
      return new RegExp("^(?:" + bb.map(hA).join("|") + ")", "i")
    }

    function QA(bb) {
      return new Map(bb.map(((bb, ab) => [bb.toLowerCase(), ab])))
    }

    function qA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 1));
      return Ab ? (bb.w = +Ab[0], Ub + Ab[0].length) : -1
    }

    function uA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 1));
      return Ab ? (bb.u = +Ab[0], Ub + Ab[0].length) : -1
    }

    function rA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.U = +Ab[0], Ub + Ab[0].length) : -1
    }

    function KA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.V = +Ab[0], Ub + Ab[0].length) : -1
    }

    function oA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.W = +Ab[0], Ub + Ab[0].length) : -1
    }

    function lA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 4));
      return Ab ? (bb.y = +Ab[0], Ub + Ab[0].length) : -1
    }

    function tA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.y = +Ab[0] + (+Ab[0] > 68 ? 1900 : 2e3), Ub + Ab[0].length) : -1
    }

    function wA(bb, ab, Ub) {
      var Ab = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(ab.slice(Ub, Ub + 6));
      return Ab ? (bb.Z = Ab[1] ? 0 : -(Ab[2] + (Ab[3] || "00")), Ub + Ab[0].length) : -1
    }

    function sA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 1));
      return Ab ? (bb.q = 3 * Ab[0] - 3, Ub + Ab[0].length) : -1
    }

    function gA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.m = Ab[0] - 1, Ub + Ab[0].length) : -1
    }

    function CA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.d = +Ab[0], Ub + Ab[0].length) : -1
    }

    function VA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 3));
      return Ab ? (bb.m = 0, bb.d = +Ab[0], Ub + Ab[0].length) : -1
    }

    function OA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.H = +Ab[0], Ub + Ab[0].length) : -1
    }

    function cA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.M = +Ab[0], Ub + Ab[0].length) : -1
    }

    function JA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 2));
      return Ab ? (bb.S = +Ab[0], Ub + Ab[0].length) : -1
    }

    function nA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 3));
      return Ab ? (bb.L = +Ab[0], Ub + Ab[0].length) : -1
    }

    function SA(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub, Ub + 6));
      return Ab ? (bb.L = Math.floor(Ab[0] / 1e3), Ub + Ab[0].length) : -1
    }

    function bM(bb, ab, Ub) {
      var Ab = IA.exec(ab.slice(Ub, Ub + 1));
      return Ab ? Ub + Ab[0].length : -1
    }

    function aM(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub));
      return Ab ? (bb.Q = +Ab[0], Ub + Ab[0].length) : -1
    }

    function UM(bb, ab, Ub) {
      var Ab = HA.exec(ab.slice(Ub));
      return Ab ? (bb.s = +Ab[0], Ub + Ab[0].length) : -1
    }

    function AM(bb, ab) {
      return FA(bb.getDate(), ab, 2)
    }

    function MM(bb, ab) {
      return FA(bb.getHours(), ab, 2)
    }

    function TM(bb, ab) {
      return FA(bb.getHours() % 12 || 12, ab, 2)
    }

    function EM(bb, ab) {
      return FA(1 + CU.count(jA(bb), bb), ab, 3)
    }

    function YM(bb, ab) {
      return FA(bb.getMilliseconds(), ab, 3)
    }

    function BM(bb, ab) {
      return YM(bb, ab) + "000"
    }

    function eM(bb, ab) {
      return FA(bb.getMonth() + 1, ab, 2)
    }

    function vM(bb, ab) {
      return FA(bb.getMinutes(), ab, 2)
    }

    function LM(bb, ab) {
      return FA(bb.getSeconds(), ab, 2)
    }

    function PM(bb) {
      var ab = bb.getDay();
      return 0 === ab ? 7 : ab
    }

    function XM(bb, ab) {
      return FA(JU.count(jA(bb) - 1, bb), ab, 2)
    }

    function jM(bb) {
      var ab = bb.getDay();
      return ab >= 4 || 0 === ab ? aA(bb) : aA.ceil(bb)
    }

    function RM(bb, ab) {
      return bb = jM(bb), FA(aA.count(jA(bb), bb) + (4 === jA(bb).getDay()), ab, 2)
    }

    function kM(bb) {
      return bb.getDay()
    }

    function yM(bb, ab) {
      return FA(nU.count(jA(bb) - 1, bb), ab, 2)
    }

    function ZM(bb, ab) {
      return FA(bb.getFullYear() % 100, ab, 2)
    }

    function DM(bb, ab) {
      return FA((bb = jM(bb)).getFullYear() % 100, ab, 2)
    }

    function zM(bb, ab) {
      return FA(bb.getFullYear() % 1e4, ab, 4)
    }

    function xM(bb, ab) {
      var Ub = bb.getDay();
      return FA((bb = Ub >= 4 || 0 === Ub ? aA(bb) : aA.ceil(bb)).getFullYear() % 1e4, ab, 4)
    }

    function iM(bb) {
      var ab = bb.getTimezoneOffset();
      return (ab > 0 ? "-" : (ab *= -1, "+")) + FA(ab / 60 | 0, "0", 2) + FA(ab % 60, "0", 2)
    }

    function fM(bb, ab) {
      return FA(bb.getUTCDate(), ab, 2)
    }

    function mM(bb, ab) {
      return FA(bb.getUTCHours(), ab, 2)
    }

    function pM(bb, ab) {
      return FA(bb.getUTCHours() % 12 || 12, ab, 2)
    }

    function NM(bb, ab) {
      return FA(1 + VU.count(RA(bb), bb), ab, 3)
    }

    function WM(bb, ab) {
      return FA(bb.getUTCMilliseconds(), ab, 3)
    }

    function HM(bb, ab) {
      return WM(bb, ab) + "000"
    }

    function IM(bb, ab) {
      return FA(bb.getUTCMonth() + 1, ab, 2)
    }

    function dM(bb, ab) {
      return FA(bb.getUTCMinutes(), ab, 2)
    }

    function FM(bb, ab) {
      return FA(bb.getUTCSeconds(), ab, 2)
    }

    function hM(bb) {
      var ab = bb.getUTCDay();
      return 0 === ab ? 7 : ab
    }

    function GM(bb, ab) {
      return FA(TA.count(RA(bb) - 1, bb), ab, 2)
    }

    function QM(bb) {
      var ab = bb.getUTCDay();
      return ab >= 4 || 0 === ab ? eA(bb) : eA.ceil(bb)
    }

    function qM(bb, ab) {
      return bb = QM(bb), FA(eA.count(RA(bb), bb) + (4 === RA(bb).getUTCDay()), ab, 2)
    }

    function uM(bb) {
      return bb.getUTCDay()
    }

    function rM(bb, ab) {
      return FA(EA.count(RA(bb) - 1, bb), ab, 2)
    }

    function KM(bb, ab) {
      return FA(bb.getUTCFullYear() % 100, ab, 2)
    }

    function oM(bb, ab) {
      return FA((bb = QM(bb)).getUTCFullYear() % 100, ab, 2)
    }

    function lM(bb, ab) {
      return FA(bb.getUTCFullYear() % 1e4, ab, 4)
    }

    function tM(bb, ab) {
      var Ub = bb.getUTCDay();
      return FA((bb = Ub >= 4 || 0 === Ub ? eA(bb) : eA.ceil(bb)).getUTCFullYear() % 1e4, ab, 4)
    }

    function wM() {
      return "+0000"
    }

    function sM() {
      return "%"
    }

    function gM(bb) {
      return +bb
    }

    function CM(bb) {
      return Math.floor(+bb / 1e3)
    }

    function VM(bb) {
      return new Date(bb)
    }

    function OM(bb) {
      return bb instanceof Date ? +bb : +new Date(+bb)
    }

    function cM(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
      var vb = Wa(),
        Lb = vb.invert,
        Pb = vb.domain,
        Xb = eb(".%L"),
        jb = eb(":%S"),
        Rb = eb("%I:%M"),
        kb = eb("%I %p"),
        yb = eb("%a %d"),
        Zb = eb("%b %d"),
        Db = eb("%B"),
        zb = eb("%Y");

      function xb(bb) {
        return (Bb(bb) < bb ? Xb : Yb(bb) < bb ? jb : Eb(bb) < bb ? Rb : Tb(bb) < bb ? kb : Ab(bb) < bb ? Mb(bb) < bb ? yb : Zb : Ub(bb) < bb ? Db : zb)(bb)
      }
      return vb.invert = function(bb) {
        return new Date(Lb(bb))
      }, vb.domain = function(bb) {
        return arguments.length ? Pb(Array.from(bb, OM)) : Pb().map(VM)
      }, vb.ticks = function(ab) {
        var Ub = Pb();
        return bb(Ub[0], Ub[Ub.length - 1], null == ab ? 10 : ab)
      }, vb.tickFormat = function(bb, ab) {
        return null == ab ? xb : eb(ab)
      }, vb.nice = function(bb) {
        var Ub = Pb();
        return bb && "function" === typeof bb.range || (bb = ab(Ub[0], Ub[Ub.length - 1], null == bb ? 10 : bb)), bb ? Pb(ca(Ub, bb)) : vb
      }, vb.copy = function() {
        return pa(vb, cM(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb))
      }, vb
    }

    function JM() {
      return Ia.f.apply(cM(DA, zA, jA, PA, JU, CU, sU, tU, lU, pA).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function nM() {
      return Ia.f.apply(cM(yA, ZA, RA, XA, TA, VU, gU, wU, lU, NA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function SM() {
      var bb, ab, Ub, Ab, Mb, Tb = 0,
        Eb = 1,
        Yb = xa,
        Bb = !1;

      function eb(ab) {
        return null == ab || isNaN(ab = +ab) ? Mb : Yb(0 === Ub ? .5 : (ab = (Ab(ab) - bb) * Ub, Bb ? Math.max(0, Math.min(1, ab)) : ab))
      }

      function vb(bb) {
        return function(ab) {
          var Ub, Ab;
          return arguments.length ? ([Ub, Ab] = ab, Yb = bb(Ub, Ab), eb) : [Yb(0), Yb(1)]
        }
      }
      return eb.domain = function(Mb) {
          return arguments.length ? ([Tb, Eb] = Mb, bb = Ab(Tb = +Tb), ab = Ab(Eb = +Eb), Ub = bb === ab ? 0 : 1 / (ab - bb), eb) : [Tb, Eb]
        }, eb.clamp = function(bb) {
          return arguments.length ? (Bb = !!bb, eb) : Bb
        }, eb.interpolator = function(bb) {
          return arguments.length ? (Yb = bb, eb) : Yb
        }, eb.range = vb(ya), eb.rangeRound = vb(Za), eb.unknown = function(bb) {
          return arguments.length ? (Mb = bb, eb) : Mb
        },
        function(Mb) {
          return Ab = Mb, bb = Mb(Tb), ab = Mb(Eb), Ub = bb === ab ? 0 : 1 / (ab - bb), eb
        }
    }

    function bT(bb, ab) {
      return ab.domain(bb.domain()).interpolator(bb.interpolator()).clamp(bb.clamp()).unknown(bb.unknown())
    }

    function aT() {
      var bb = Ca(SM()(xa));
      return bb.copy = function() {
        return bT(bb, aT())
      }, Ia.d.apply(bb, arguments)
    }

    function UT() {
      var bb = AU(SM()).domain([1, 10]);
      return bb.copy = function() {
        return bT(bb, UT()).base(bb.base())
      }, Ia.d.apply(bb, arguments)
    }

    function AT() {
      var bb = YU(SM());
      return bb.copy = function() {
        return bT(bb, AT()).constant(bb.constant())
      }, Ia.d.apply(bb, arguments)
    }

    function MT() {
      var bb = XU(SM());
      return bb.copy = function() {
        return bT(bb, MT()).exponent(bb.exponent())
      }, Ia.d.apply(bb, arguments)
    }

    function TT() {
      return MT.apply(null, arguments).exponent(.5)
    }

    function ET() {
      var bb = [],
        ab = xa;

      function Ub(Ub) {
        if (null != Ub && !isNaN(Ub = +Ub)) return ab((Db(bb, Ub, 1) - 1) / (bb.length - 1))
      }
      return Ub.domain = function(ab) {
        if (!arguments.length) return bb.slice();
        bb = [];
        for (let Ub of ab) null == Ub || isNaN(Ub = +Ub) || bb.push(Ub);
        return bb.sort(Pb), Ub
      }, Ub.interpolator = function(bb) {
        return arguments.length ? (ab = bb, Ub) : ab
      }, Ub.range = function() {
        return bb.map(((Ub, Ab) => ab(Ab / (bb.length - 1))))
      }, Ub.quantiles = function(ab) {
        return Array.from({
          length: ab + 1
        }, ((Ub, Ab) => mU(bb, Ab / ab)))
      }, Ub.copy = function() {
        return ET(ab).domain(bb)
      }, Ia.d.apply(Ub, arguments)
    }

    function YT() {
      var bb, ab, Ub, Ab, Mb, Tb, Eb, Yb = 0,
        Bb = .5,
        eb = 1,
        vb = 1,
        Lb = xa,
        Pb = !1;

      function Xb(bb) {
        return isNaN(bb = +bb) ? Eb : (bb = .5 + ((bb = +Tb(bb)) - ab) * (vb * bb < vb * ab ? Ab : Mb), Lb(Pb ? Math.max(0, Math.min(1, bb)) : bb))
      }

      function jb(bb) {
        return function(ab) {
          var Ub, Ab, Mb;
          return arguments.length ? ([Ub, Ab, Mb] = ab, Lb = function(bb, ab) {
            void 0 === ab && (ab = bb, bb = ya);
            for (var Ub = 0, Ab = ab.length - 1, Mb = ab[0], Tb = new Array(Ab < 0 ? 0 : Ab); Ub < Ab;) Tb[Ub] = bb(Mb, Mb = ab[++Ub]);
            return function(bb) {
              var ab = Math.max(0, Math.min(Ab - 1, Math.floor(bb *= Ab)));
              return Tb[ab](bb - ab)
            }
          }(bb, [Ub, Ab, Mb]), Xb) : [Lb(0), Lb(.5), Lb(1)]
        }
      }
      return Xb.domain = function(Eb) {
          return arguments.length ? ([Yb, Bb, eb] = Eb, bb = Tb(Yb = +Yb), ab = Tb(Bb = +Bb), Ub = Tb(eb = +eb), Ab = bb === ab ? 0 : .5 / (ab - bb), Mb = ab === Ub ? 0 : .5 / (Ub - ab), vb = ab < bb ? -1 : 1, Xb) : [Yb, Bb, eb]
        }, Xb.clamp = function(bb) {
          return arguments.length ? (Pb = !!bb, Xb) : Pb
        }, Xb.interpolator = function(bb) {
          return arguments.length ? (Lb = bb, Xb) : Lb
        }, Xb.range = jb(ya), Xb.rangeRound = jb(Za), Xb.unknown = function(bb) {
          return arguments.length ? (Eb = bb, Xb) : Eb
        },
        function(Eb) {
          return Tb = Eb, bb = Eb(Yb), ab = Eb(Bb), Ub = Eb(eb), Ab = bb === ab ? 0 : .5 / (ab - bb), Mb = ab === Ub ? 0 : .5 / (Ub - ab), vb = ab < bb ? -1 : 1, Xb
        }
    }

    function BT() {
      var bb = Ca(YT()(xa));
      return bb.copy = function() {
        return bT(bb, BT())
      }, Ia.d.apply(bb, arguments)
    }

    function eT() {
      var bb = AU(YT()).domain([.1, 1, 10]);
      return bb.copy = function() {
        return bT(bb, eT()).base(bb.base())
      }, Ia.d.apply(bb, arguments)
    }

    function vT() {
      var bb = YU(YT());
      return bb.copy = function() {
        return bT(bb, vT()).constant(bb.constant())
      }, Ia.d.apply(bb, arguments)
    }

    function LT() {
      var bb = XU(YT());
      return bb.copy = function() {
        return bT(bb, LT()).exponent(bb.exponent())
      }, Ia.d.apply(bb, arguments)
    }

    function PT() {
      return LT.apply(null, arguments).exponent(.5)
    }

    function XT(bb, ab) {
      if ((Mb = bb.length) > 1)
        for (var Ub, Ab, Mb, Tb = 1, Eb = bb[ab[0]], Yb = Eb.length; Tb < Mb; ++Tb)
          for (Ab = Eb, Eb = bb[ab[Tb]], Ub = 0; Ub < Yb; ++Ub) Eb[Ub][1] += Eb[Ub][0] = isNaN(Ab[Ub][1]) ? Ab[Ub][0] : Ab[Ub][1]
    }! function(bb) {
      mA = function(bb) {
        var ab = bb.dateTime,
          Ub = bb.date,
          Ab = bb.time,
          Mb = bb.periods,
          Tb = bb.days,
          Eb = bb.shortDays,
          Yb = bb.months,
          Bb = bb.shortMonths,
          eb = GA(Mb),
          vb = QA(Mb),
          Lb = GA(Tb),
          Pb = QA(Tb),
          Xb = GA(Eb),
          jb = QA(Eb),
          Rb = GA(Yb),
          kb = QA(Yb),
          yb = GA(Bb),
          Zb = QA(Bb),
          Db = {
            a: function(bb) {
              return Eb[bb.getDay()]
            },
            A: function(bb) {
              return Tb[bb.getDay()]
            },
            b: function(bb) {
              return Bb[bb.getMonth()]
            },
            B: function(bb) {
              return Yb[bb.getMonth()]
            },
            c: null,
            d: AM,
            e: AM,
            f: BM,
            g: DM,
            G: xM,
            H: MM,
            I: TM,
            j: EM,
            L: YM,
            m: eM,
            M: vM,
            p: function(bb) {
              return Mb[+(bb.getHours() >= 12)]
            },
            q: function(bb) {
              return 1 + ~~(bb.getMonth() / 3)
            },
            Q: gM,
            s: CM,
            S: LM,
            u: PM,
            U: XM,
            V: RM,
            w: kM,
            W: yM,
            x: null,
            X: null,
            y: ZM,
            Y: zM,
            Z: iM,
            "%": sM
          },
          zb = {
            a: function(bb) {
              return Eb[bb.getUTCDay()]
            },
            A: function(bb) {
              return Tb[bb.getUTCDay()]
            },
            b: function(bb) {
              return Bb[bb.getUTCMonth()]
            },
            B: function(bb) {
              return Yb[bb.getUTCMonth()]
            },
            c: null,
            d: fM,
            e: fM,
            f: HM,
            g: oM,
            G: tM,
            H: mM,
            I: pM,
            j: NM,
            L: WM,
            m: IM,
            M: dM,
            p: function(bb) {
              return Mb[+(bb.getUTCHours() >= 12)]
            },
            q: function(bb) {
              return 1 + ~~(bb.getUTCMonth() / 3)
            },
            Q: gM,
            s: CM,
            S: FM,
            u: hM,
            U: GM,
            V: qM,
            w: uM,
            W: rM,
            x: null,
            X: null,
            y: KM,
            Y: lM,
            Z: wM,
            "%": sM
          },
          xb = {
            a: function(bb, ab, Ub) {
              var Ab = Xb.exec(ab.slice(Ub));
              return Ab ? (bb.w = jb.get(Ab[0].toLowerCase()), Ub + Ab[0].length) : -1
            },
            A: function(bb, ab, Ub) {
              var Ab = Lb.exec(ab.slice(Ub));
              return Ab ? (bb.w = Pb.get(Ab[0].toLowerCase()), Ub + Ab[0].length) : -1
            },
            b: function(bb, ab, Ub) {
              var Ab = yb.exec(ab.slice(Ub));
              return Ab ? (bb.m = Zb.get(Ab[0].toLowerCase()), Ub + Ab[0].length) : -1
            },
            B: function(bb, ab, Ub) {
              var Ab = Rb.exec(ab.slice(Ub));
              return Ab ? (bb.m = kb.get(Ab[0].toLowerCase()), Ub + Ab[0].length) : -1
            },
            c: function(bb, Ub, Ab) {
              return mb(bb, ab, Ub, Ab)
            },
            d: CA,
            e: CA,
            f: SA,
            g: tA,
            G: lA,
            H: OA,
            I: OA,
            j: VA,
            L: nA,
            m: gA,
            M: cA,
            p: function(bb, ab, Ub) {
              var Ab = eb.exec(ab.slice(Ub));
              return Ab ? (bb.p = vb.get(Ab[0].toLowerCase()), Ub + Ab[0].length) : -1
            },
            q: sA,
            Q: aM,
            s: UM,
            S: JA,
            u: uA,
            U: rA,
            V: KA,
            w: qA,
            W: oA,
            x: function(bb, ab, Ab) {
              return mb(bb, Ub, ab, Ab)
            },
            X: function(bb, ab, Ub) {
              return mb(bb, Ab, ab, Ub)
            },
            y: tA,
            Y: lA,
            Z: wA,
            "%": bM
          };

        function ib(bb, ab) {
          return function(Ub) {
            var Ab, Mb, Tb, Eb = [],
              Yb = -1,
              Bb = 0,
              eb = bb.length;
            for (Ub instanceof Date || (Ub = new Date(+Ub)); ++Yb < eb;) 37 === bb.charCodeAt(Yb) && (Eb.push(bb.slice(Bb, Yb)), null != (Mb = WA[Ab = bb.charAt(++Yb)]) ? Ab = bb.charAt(++Yb) : Mb = "e" === Ab ? " " : "0", (Tb = ab[Ab]) && (Ab = Tb(Ub, Mb)), Eb.push(Ab), Bb = Yb + 1);
            return Eb.push(bb.slice(Bb, Yb)), Eb.join("")
          }
        }

        function fb(bb, ab) {
          return function(Ub) {
            var Ab, Mb, Tb = fA(1900, void 0, 1);
            if (mb(Tb, bb, Ub += "", 0) != Ub.length) return null;
            if ("Q" in Tb) return new Date(Tb.Q);
            if ("s" in Tb) return new Date(1e3 * Tb.s + ("L" in Tb ? Tb.L : 0));
            if (ab && !("Z" in Tb) && (Tb.Z = 0), "p" in Tb && (Tb.H = Tb.H % 12 + 12 * Tb.p), void 0 === Tb.m && (Tb.m = "q" in Tb ? Tb.q : 0), "V" in Tb) {
              if (Tb.V < 1 || Tb.V > 53) return null;
              "w" in Tb || (Tb.w = 1), "Z" in Tb ? (Mb = (Ab = iA(fA(Tb.y, 0, 1))).getUTCDay(), Ab = Mb > 4 || 0 === Mb ? EA.ceil(Ab) : EA(Ab), Ab = VU.offset(Ab, 7 * (Tb.V - 1)), Tb.y = Ab.getUTCFullYear(), Tb.m = Ab.getUTCMonth(), Tb.d = Ab.getUTCDate() + (Tb.w + 6) % 7) : (Mb = (Ab = xA(fA(Tb.y, 0, 1))).getDay(), Ab = Mb > 4 || 0 === Mb ? nU.ceil(Ab) : nU(Ab), Ab = CU.offset(Ab, 7 * (Tb.V - 1)), Tb.y = Ab.getFullYear(), Tb.m = Ab.getMonth(), Tb.d = Ab.getDate() + (Tb.w + 6) % 7)
            } else("W" in Tb || "U" in Tb) && ("w" in Tb || (Tb.w = "u" in Tb ? Tb.u % 7 : "W" in Tb ? 1 : 0), Mb = "Z" in Tb ? iA(fA(Tb.y, 0, 1)).getUTCDay() : xA(fA(Tb.y, 0, 1)).getDay(), Tb.m = 0, Tb.d = "W" in Tb ? (Tb.w + 6) % 7 + 7 * Tb.W - (Mb + 5) % 7 : Tb.w + 7 * Tb.U - (Mb + 6) % 7);
            return "Z" in Tb ? (Tb.H += Tb.Z / 100 | 0, Tb.M += Tb.Z % 100, iA(Tb)) : xA(Tb)
          }
        }

        function mb(bb, ab, Ub, Ab) {
          for (var Mb, Tb, Eb = 0, Yb = ab.length, Bb = Ub.length; Eb < Yb;) {
            if (Ab >= Bb) return -1;
            if (37 === (Mb = ab.charCodeAt(Eb++))) {
              if (Mb = ab.charAt(Eb++), !(Tb = xb[Mb in WA ? ab.charAt(Eb++) : Mb]) || (Ab = Tb(bb, Ub, Ab)) < 0) return -1
            } else if (Mb != Ub.charCodeAt(Ab++)) return -1
          }
          return Ab
        }
        return Db.x = ib(Ub, Db), Db.X = ib(Ab, Db), Db.c = ib(ab, Db), zb.x = ib(Ub, zb), zb.X = ib(Ab, zb), zb.c = ib(ab, zb), {
          format: function(bb) {
            var ab = ib(bb += "", Db);
            return ab.toString = function() {
              return bb
            }, ab
          },
          parse: function(bb) {
            var ab = fb(bb += "", !1);
            return ab.toString = function() {
              return bb
            }, ab
          },
          utcFormat: function(bb) {
            var ab = ib(bb += "", zb);
            return ab.toString = function() {
              return bb
            }, ab
          },
          utcParse: function(bb) {
            var ab = fb(bb += "", !0);
            return ab.toString = function() {
              return bb
            }, ab
          }
        }
      }(bb), pA = mA.format, mA.parse, NA = mA.utcFormat, mA.utcParse
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
    var jT = Ub(5834),
      RT = Ub(5709);

    function kT(bb) {
      for (var ab = bb.length, Ub = new Array(ab); --ab >= 0;) Ub[ab] = ab;
      return Ub
    }

    function yT(bb, ab) {
      return bb[ab]
    }

    function ZT(bb) {
      const ab = [];
      return ab.key = bb, ab
    }
    var DT = Ub(5772),
      zT = Ub.n(DT),
      xT = Ub(5784),
      iT = Ub.n(xT),
      fT = Ub(5041),
      mT = Ub.n(fT),
      pT = Ub(4904),
      NT = Ub.n(pT),
      WT = Ub(4821),
      HT = Ub.n(WT),
      IT = Ub(4838),
      dT = Ub.n(IT),
      FT = Ub(5797),
      hT = Ub.n(FT),
      GT = Ub(4831),
      QT = Ub.n(GT),
      qT = Ub(5656),
      uT = Ub.n(qT),
      rT = Ub(5809),
      KT = Ub.n(rT),
      oT = Ub(5153),
      lT = Ub.n(oT),
      tT = Ub(5818),
      wT = Ub.n(tT);

    function sT(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return gT(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(bb)) return Array.from(bb)
      }(bb) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return gT(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return gT(bb, ab)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gT(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }
    var CT = function(bb) {
        return bb
      },
      VT = {
        "@@functional/placeholder": !0
      },
      OT = function(bb) {
        return bb === VT
      },
      cT = function(bb) {
        return function ab() {
          return 0 === arguments.length || 1 === arguments.length && OT(arguments.length <= 0 ? void 0 : arguments[0]) ? ab : bb.apply(void 0, arguments)
        }
      },
      JT = function bb(ab, Ub) {
        return 1 === ab ? Ub : cT((function() {
          for (var Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
          var Eb = Mb.filter((function(bb) {
            return bb !== VT
          })).length;
          return Eb >= ab ? Ub.apply(void 0, Mb) : bb(ab - Eb, cT((function() {
            for (var bb = arguments.length, ab = new Array(bb), Ab = 0; Ab < bb; Ab++) ab[Ab] = arguments[Ab];
            var Tb = Mb.map((function(bb) {
              return OT(bb) ? ab.shift() : bb
            }));
            return Ub.apply(void 0, sT(Tb).concat(ab))
          })))
        }))
      },
      nT = function(bb) {
        return JT(bb.length, bb)
      },
      ST = function(bb, ab) {
        for (var Ub = [], Ab = bb; Ab < ab; ++Ab) Ub[Ab - bb] = Ab;
        return Ub
      },
      bE = nT((function(bb, ab) {
        return Array.isArray(ab) ? ab.map(bb) : Object.keys(ab).map((function(bb) {
          return ab[bb]
        })).map(bb)
      })),
      aE = function() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        if (!ab.length) return CT;
        var Ab = ab.reverse(),
          Mb = Ab[0],
          Tb = Ab.slice(1);
        return function() {
          return Tb.reduce((function(bb, ab) {
            return ab(bb)
          }), Mb.apply(void 0, arguments))
        }
      },
      UE = function(bb) {
        return Array.isArray(bb) ? bb.reverse() : bb.split("").reverse.join("")
      },
      AE = function(bb) {
        var ab = null,
          Ub = null;
        return function() {
          for (var Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
          return ab && Mb.every((function(bb, Ub) {
            return bb === ab[Ub]
          })) ? Ub : (ab = Mb, Ub = bb.apply(void 0, Mb))
        }
      };
    const ME = {
      rangeStep: function(bb, ab, Ub) {
        for (var Ab = new(wT())(bb), Mb = 0, Tb = []; Ab.lt(ab) && Mb < 1e5;) Tb.push(Ab.toNumber()), Ab = Ab.add(Ub), Mb++;
        return Tb
      },
      getDigitCount: function(bb) {
        return 0 === bb ? 1 : Math.floor(new(wT())(bb).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: nT((function(bb, ab, Ub) {
        var Ab = +bb;
        return Ab + Ub * (+ab - Ab)
      })),
      uninterpolateNumber: nT((function(bb, ab, Ub) {
        var Ab = ab - +bb;
        return (Ub - bb) / (Ab = Ab || 1 / 0)
      })),
      uninterpolateTruncation: nT((function(bb, ab, Ub) {
        var Ab = ab - +bb;
        return Ab = Ab || 1 / 0, Math.max(0, Math.min(1, (Ub - bb) / Ab))
      }))
    };

    function TE(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return BE(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(bb)) return Array.from(bb)
      }(bb) || YE(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EE(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(bb))) return;
        var Ub = [],
          Ab = !0,
          Mb = !1,
          Tb = void 0;
        try {
          for (var Eb, Yb = bb[Symbol.iterator](); !(Ab = (Eb = Yb.next()).done) && (Ub.push(Eb.value), !ab || Ub.length !== ab); Ab = !0);
        } catch (Bb) {
          Mb = !0, Tb = Bb
        } finally {
          try {
            Ab || null == Yb.return || Yb.return()
          } finally {
            if (Mb) throw Tb
          }
        }
        return Ub
      }(bb, ab) || YE(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YE(bb, ab) {
      if (bb) {
        if ("string" === typeof bb) return BE(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === Ub && bb.constructor && (Ub = bb.constructor.name), "Map" === Ub || "Set" === Ub ? Array.from(bb) : "Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub) ? BE(bb, ab) : void 0
      }
    }

    function BE(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function eE(bb) {
      var ab = EE(bb, 2),
        Ub = ab[0],
        Ab = ab[1],
        Mb = Ub,
        Tb = Ab;
      return Ub > Ab && (Mb = Ab, Tb = Ub), [Mb, Tb]
    }

    function vE(bb, ab, Ub) {
      if (bb.lte(0)) return new(wT())(0);
      var Ab = ME.getDigitCount(bb.toNumber()),
        Mb = new(wT())(10).pow(Ab),
        Tb = bb.div(Mb),
        Eb = 1 !== Ab ? .05 : .1,
        Yb = new(wT())(Math.ceil(Tb.div(Eb).toNumber())).add(Ub).mul(Eb).mul(Mb);
      return ab ? Yb : new(wT())(Math.ceil(Yb))
    }

    function LE(bb, ab, Ub) {
      var Ab = 1,
        Mb = new(wT())(bb);
      if (!Mb.isint() && Ub) {
        var Tb = Math.abs(bb);
        Tb < 1 ? (Ab = new(wT())(10).pow(ME.getDigitCount(bb) - 1), Mb = new(wT())(Math.floor(Mb.div(Ab).toNumber())).mul(Ab)) : Tb > 1 && (Mb = new(wT())(Math.floor(bb)))
      } else 0 === bb ? Mb = new(wT())(Math.floor((ab - 1) / 2)) : Ub || (Mb = new(wT())(Math.floor(bb)));
      var Eb = Math.floor((ab - 1) / 2);
      return aE(bE((function(bb) {
        return Mb.add(new(wT())(bb - Eb).mul(Ab)).toNumber()
      })), ST)(0, ab)
    }

    function PE(bb, ab, Ub, Ab) {
      var Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((ab - bb) / (Ub - 1))) return {
        step: new(wT())(0),
        tickMin: new(wT())(0),
        tickMax: new(wT())(0)
      };
      var Tb, Eb = vE(new(wT())(ab).sub(bb).div(Ub - 1), Ab, Mb);
      Tb = bb <= 0 && ab >= 0 ? new(wT())(0) : (Tb = new(wT())(bb).add(ab).div(2)).sub(new(wT())(Tb).mod(Eb));
      var Yb = Math.ceil(Tb.sub(bb).div(Eb).toNumber()),
        Bb = Math.ceil(new(wT())(ab).sub(Tb).div(Eb).toNumber()),
        eb = Yb + Bb + 1;
      return eb > Ub ? PE(bb, ab, Ub, Ab, Mb + 1) : (eb < Ub && (Bb = ab > 0 ? Bb + (Ub - eb) : Bb, Yb = ab > 0 ? Yb : Yb + (Ub - eb)), {
        step: Eb,
        tickMin: Tb.sub(new(wT())(Yb).mul(Eb)),
        tickMax: Tb.add(new(wT())(Bb).mul(Eb))
      })
    }
    var XE = AE((function(bb) {
        var ab = EE(bb, 2),
          Ub = ab[0],
          Ab = ab[1],
          Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Tb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Eb = Math.max(Mb, 2),
          Yb = EE(eE([Ub, Ab]), 2),
          Bb = Yb[0],
          eb = Yb[1];
        if (Bb === -1 / 0 || eb === 1 / 0) {
          var vb = eb === 1 / 0 ? [Bb].concat(TE(ST(0, Mb - 1).map((function() {
            return 1 / 0
          })))) : [].concat(TE(ST(0, Mb - 1).map((function() {
            return -1 / 0
          }))), [eb]);
          return Ub > Ab ? UE(vb) : vb
        }
        if (Bb === eb) return LE(Bb, Mb, Tb);
        var Lb = PE(Bb, eb, Eb, Tb),
          Pb = Lb.step,
          Xb = Lb.tickMin,
          jb = Lb.tickMax,
          Rb = ME.rangeStep(Xb, jb.add(new(wT())(.1).mul(Pb)), Pb);
        return Ub > Ab ? UE(Rb) : Rb
      })),
      jE = (AE((function(bb) {
        var ab = EE(bb, 2),
          Ub = ab[0],
          Ab = ab[1],
          Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          Tb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Eb = Math.max(Mb, 2),
          Yb = EE(eE([Ub, Ab]), 2),
          Bb = Yb[0],
          eb = Yb[1];
        if (Bb === -1 / 0 || eb === 1 / 0) return [Ub, Ab];
        if (Bb === eb) return LE(Bb, Mb, Tb);
        var vb = vE(new(wT())(eb).sub(Bb).div(Eb - 1), Tb, 0),
          Lb = aE(bE((function(bb) {
            return new(wT())(Bb).add(new(wT())(bb).mul(vb)).toNumber()
          })), ST)(0, Eb).filter((function(bb) {
            return bb >= Bb && bb <= eb
          }));
        return Ub > Ab ? UE(Lb) : Lb
      })), AE((function(bb, ab) {
        var Ub = EE(bb, 2),
          Ab = Ub[0],
          Mb = Ub[1],
          Tb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Eb = EE(eE([Ab, Mb]), 2),
          Yb = Eb[0],
          Bb = Eb[1];
        if (Yb === -1 / 0 || Bb === 1 / 0) return [Ab, Mb];
        if (Yb === Bb) return [Yb];
        var eb = Math.max(ab, 2),
          vb = vE(new(wT())(Bb).sub(Yb).div(eb - 1), Tb, 0),
          Lb = [].concat(TE(ME.rangeStep(new(wT())(Yb), new(wT())(Bb).sub(new(wT())(.99).mul(vb)), vb)), [Bb]);
        return Ab > Mb ? UE(Lb) : Lb
      }))),
      RE = Ub(5820),
      kE = Ub(4813),
      yE = Ub(5058),
      ZE = Ub(5825);

    function DE(bb) {
      return DE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, DE(bb)
    }

    function zE(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return xE(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || function(bb, ab) {
        if (!bb) return;
        if ("string" === typeof bb) return xE(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        "Object" === Ub && bb.constructor && (Ub = bb.constructor.name);
        if ("Map" === Ub || "Set" === Ub) return Array.from(bb);
        if ("Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub)) return xE(bb, ab)
      }(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xE(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function iE(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function fE(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? iE(Object(Ub), !0).forEach((function(ab) {
          mE(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : iE(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function mE(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != DE(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != DE(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == DE(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function pE(bb, ab, Ub) {
      return mT()(bb) || mT()(ab) ? Ub : (0, kE.B)(ab) ? dT()(bb, ab, Ub) : NT()(ab) ? ab(bb) : Ub
    }

    function NE(bb, ab, Ub, Ab) {
      var Mb = hT()(bb, (function(bb) {
        return pE(bb, ab)
      }));
      if ("number" === Ub) {
        var Tb = Mb.filter((function(bb) {
          return (0, kE.E)(bb) || parseFloat(bb)
        }));
        return Tb.length ? [iT()(Tb), zT()(Tb)] : [1 / 0, -1 / 0]
      }
      return (Ab ? Mb.filter((function(bb) {
        return !mT()(bb)
      })) : Mb).map((function(bb) {
        return (0, kE.B)(bb) || bb instanceof Date ? bb : ""
      }))
    }
    var WE = function(bb) {
        var ab, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ab = arguments.length > 2 ? arguments[2] : void 0,
          Mb = arguments.length > 3 ? arguments[3] : void 0,
          Tb = -1,
          Eb = null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.length) && void 0 !== ab ? ab : 0;
        if (Eb <= 1) return 0;
        if (Mb && "angleAxis" === Mb.axisType && Math.abs(Math.abs(Mb.range[1] - Mb.range[0]) - 360) <= 1e-6)
          for (var Yb = Mb.range, Bb = 0; Bb < Eb; Bb++) {
            var eb = Bb > 0 ? Ab[Bb - 1].coordinate : Ab[Eb - 1].coordinate,
              vb = Ab[Bb].coordinate,
              Lb = Bb >= Eb - 1 ? Ab[0].coordinate : Ab[Bb + 1].coordinate,
              Pb = void 0;
            if ((0, kE.I)(vb - eb) !== (0, kE.I)(Lb - vb)) {
              var Xb = [];
              if ((0, kE.I)(Lb - vb) === (0, kE.I)(Yb[1] - Yb[0])) {
                Pb = Lb;
                var jb = vb + Yb[1] - Yb[0];
                Xb[0] = Math.min(jb, (jb + eb) / 2), Xb[1] = Math.max(jb, (jb + eb) / 2)
              } else {
                Pb = eb;
                var Rb = Lb + Yb[1] - Yb[0];
                Xb[0] = Math.min(vb, (Rb + vb) / 2), Xb[1] = Math.max(vb, (Rb + vb) / 2)
              }
              var kb = [Math.min(vb, (Pb + vb) / 2), Math.max(vb, (Pb + vb) / 2)];
              if (bb > kb[0] && bb <= kb[1] || bb >= Xb[0] && bb <= Xb[1]) {
                Tb = Ab[Bb].index;
                break
              }
            } else {
              var yb = Math.min(eb, Lb),
                Zb = Math.max(eb, Lb);
              if (bb > (yb + vb) / 2 && bb <= (Zb + vb) / 2) {
                Tb = Ab[Bb].index;
                break
              }
            }
          } else
            for (var Db = 0; Db < Eb; Db++)
              if (0 === Db && bb <= (Ub[Db].coordinate + Ub[Db + 1].coordinate) / 2 || Db > 0 && Db < Eb - 1 && bb > (Ub[Db].coordinate + Ub[Db - 1].coordinate) / 2 && bb <= (Ub[Db].coordinate + Ub[Db + 1].coordinate) / 2 || Db === Eb - 1 && bb > (Ub[Db].coordinate + Ub[Db - 1].coordinate) / 2) {
                Tb = Ub[Db].index;
                break
              } return Tb
      },
      HE = function(bb) {
        var ab, Ub, Ab = bb.type.displayName,
          Mb = null !== (ab = bb.type) && void 0 !== ab && ab.defaultProps ? fE(fE({}, bb.type.defaultProps), bb.props) : bb.props,
          Tb = Mb.stroke,
          Eb = Mb.fill;
        switch (Ab) {
          case "Line":
            Ub = Tb;
            break;
          case "Area":
          case "Radar":
            Ub = Tb && "none" !== Tb ? Tb : Eb;
            break;
          default:
            Ub = Eb
        }
        return Ub
      },
      IE = function(bb) {
        var ab = bb.barSize,
          Ub = bb.totalSize,
          Ab = bb.stackGroups,
          Mb = void 0 === Ab ? {} : Ab;
        if (!Mb) return {};
        for (var Tb = {}, Eb = Object.keys(Mb), Yb = 0, Bb = Eb.length; Yb < Bb; Yb++)
          for (var eb = Mb[Eb[Yb]].stackGroups, vb = Object.keys(eb), Lb = 0, Pb = vb.length; Lb < Pb; Lb++) {
            var Xb = eb[vb[Lb]],
              jb = Xb.items,
              Rb = Xb.cateAxisId,
              kb = jb.filter((function(bb) {
                return (0, yE.i)(bb.type).indexOf("Bar") >= 0
              }));
            if (kb && kb.length) {
              var yb = kb[0].type.defaultProps,
                Zb = void 0 !== yb ? fE(fE({}, yb), kb[0].props) : kb[0].props,
                Db = Zb.barSize,
                zb = Zb[Rb];
              Tb[zb] || (Tb[zb] = []);
              var xb = mT()(Db) ? ab : Db;
              Tb[zb].push({
                item: kb[0],
                stackList: kb.slice(1),
                barSize: mT()(xb) ? void 0 : (0, kE.o)(xb, Ub, 0)
              })
            }
          }
        return Tb
      },
      dE = function(bb) {
        var ab = bb.barGap,
          Ub = bb.barCategoryGap,
          Ab = bb.bandSize,
          Mb = bb.sizeList,
          Tb = void 0 === Mb ? [] : Mb,
          Eb = bb.maxBarSize,
          Yb = Tb.length;
        if (Yb < 1) return null;
        var Bb, eb = (0, kE.o)(ab, Ab, 0, !0),
          vb = [];
        if (Tb[0].barSize === +Tb[0].barSize) {
          var Lb = !1,
            Pb = Ab / Yb,
            Xb = Tb.reduce((function(bb, ab) {
              return bb + ab.barSize || 0
            }), 0);
          (Xb += (Yb - 1) * eb) >= Ab && (Xb -= (Yb - 1) * eb, eb = 0), Xb >= Ab && Pb > 0 && (Lb = !0, Xb = Yb * (Pb *= .9));
          var jb = {
            offset: ((Ab - Xb) / 2 | 0) - eb,
            size: 0
          };
          Bb = Tb.reduce((function(bb, ab) {
            var Ub = {
                item: ab.item,
                position: {
                  offset: jb.offset + jb.size + eb,
                  size: Lb ? Pb : ab.barSize
                }
              },
              Ab = [].concat(zE(bb), [Ub]);
            return jb = Ab[Ab.length - 1].position, ab.stackList && ab.stackList.length && ab.stackList.forEach((function(bb) {
              Ab.push({
                item: bb,
                position: jb
              })
            })), Ab
          }), vb)
        } else {
          var Rb = (0, kE.o)(Ub, Ab, 0, !0);
          Ab - 2 * Rb - (Yb - 1) * eb <= 0 && (eb = 0);
          var kb = (Ab - 2 * Rb - (Yb - 1) * eb) / Yb;
          kb > 1 && (kb >>= 0);
          var yb = Eb === +Eb ? Math.min(kb, Eb) : kb;
          Bb = Tb.reduce((function(bb, ab, Ub) {
            var Ab = [].concat(zE(bb), [{
              item: ab.item,
              position: {
                offset: Rb + (kb + eb) * Ub + (kb - yb) / 2,
                size: yb
              }
            }]);
            return ab.stackList && ab.stackList.length && ab.stackList.forEach((function(bb) {
              Ab.push({
                item: bb,
                position: Ab[Ab.length - 1].position
              })
            })), Ab
          }), vb)
        }
        return Bb
      },
      FE = function(bb, ab, Ub, Ab) {
        var Mb = Ub.children,
          Tb = Ub.width,
          Eb = Ub.margin,
          Yb = Tb - (Eb.left || 0) - (Eb.right || 0),
          Bb = (0, ZE.c)({
            children: Mb,
            legendWidth: Yb
          });
        if (Bb) {
          var eb = Ab || {},
            vb = eb.width,
            Lb = eb.height,
            Pb = Bb.align,
            Xb = Bb.verticalAlign,
            jb = Bb.layout;
          if (("vertical" === jb || "horizontal" === jb && "middle" === Xb) && "center" !== Pb && (0, kE.E)(bb[Pb])) return fE(fE({}, bb), {}, mE({}, Pb, bb[Pb] + (vb || 0)));
          if (("horizontal" === jb || "vertical" === jb && "center" === Pb) && "middle" !== Xb && (0, kE.E)(bb[Xb])) return fE(fE({}, bb), {}, mE({}, Xb, bb[Xb] + (Lb || 0)))
        }
        return bb
      },
      hE = function(bb, ab, Ub, Ab, Mb) {
        var Tb = ab.props.children,
          Eb = (0, yE.e)(Tb, RE.d).filter((function(bb) {
            return function(bb, ab, Ub) {
              return !!mT()(ab) || ("horizontal" === bb ? "yAxis" === ab : "vertical" === bb || "x" === Ub ? "xAxis" === ab : "y" !== Ub || "yAxis" === ab)
            }(Ab, Mb, bb.props.direction)
          }));
        if (Eb && Eb.length) {
          var Yb = Eb.map((function(bb) {
            return bb.props.dataKey
          }));
          return bb.reduce((function(bb, ab) {
            var Ab = pE(ab, Ub);
            if (mT()(Ab)) return bb;
            var Mb = Array.isArray(Ab) ? [iT()(Ab), zT()(Ab)] : [Ab, Ab],
              Tb = Yb.reduce((function(bb, Ub) {
                var Ab = pE(ab, Ub, 0),
                  Tb = Mb[0] - Math.abs(Array.isArray(Ab) ? Ab[0] : Ab),
                  Eb = Mb[1] + Math.abs(Array.isArray(Ab) ? Ab[1] : Ab);
                return [Math.min(Tb, bb[0]), Math.max(Eb, bb[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(Tb[0], bb[0]), Math.max(Tb[1], bb[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      GE = function(bb, ab, Ub, Ab, Mb) {
        var Tb = ab.map((function(ab) {
          return hE(bb, ab, Ub, Mb, Ab)
        })).filter((function(bb) {
          return !mT()(bb)
        }));
        return Tb && Tb.length ? Tb.reduce((function(bb, ab) {
          return [Math.min(bb[0], ab[0]), Math.max(bb[1], ab[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      QE = function(bb, ab, Ub, Ab, Mb) {
        var Tb = ab.map((function(ab) {
          var Tb = ab.props.dataKey;
          return "number" === Ub && Tb && hE(bb, ab, Tb, Ab) || NE(bb, Tb, Ub, Mb)
        }));
        if ("number" === Ub) return Tb.reduce((function(bb, ab) {
          return [Math.min(bb[0], ab[0]), Math.max(bb[1], ab[1])]
        }), [1 / 0, -1 / 0]);
        var Eb = {};
        return Tb.reduce((function(bb, ab) {
          for (var Ub = 0, Ab = ab.length; Ub < Ab; Ub++) Eb[ab[Ub]] || (Eb[ab[Ub]] = !0, bb.push(ab[Ub]));
          return bb
        }), [])
      },
      qE = function(bb, ab) {
        return "horizontal" === bb && "xAxis" === ab || "vertical" === bb && "yAxis" === ab || "centric" === bb && "angleAxis" === ab || "radial" === bb && "radiusAxis" === ab
      },
      uE = function(bb, ab, Ub, Ab) {
        if (Ab) return bb.map((function(bb) {
          return bb.coordinate
        }));
        var Mb, Tb, Eb = bb.map((function(bb) {
          return bb.coordinate === ab && (Mb = !0), bb.coordinate === Ub && (Tb = !0), bb.coordinate
        }));
        return Mb || Eb.push(ab), Tb || Eb.push(Ub), Eb
      },
      rE = function(bb, ab, Ub) {
        if (!bb) return null;
        var Ab = bb.scale,
          Mb = bb.duplicateDomain,
          Tb = bb.type,
          Eb = bb.range,
          Yb = "scaleBand" === bb.realScaleType ? Ab.bandwidth() / 2 : 2,
          Bb = (ab || Ub) && "category" === Tb && Ab.bandwidth ? Ab.bandwidth() / Yb : 0;
        return Bb = "angleAxis" === bb.axisType && (null === Eb || void 0 === Eb ? void 0 : Eb.length) >= 2 ? 2 * (0, kE.I)(Eb[0] - Eb[1]) * Bb : Bb, ab && (bb.ticks || bb.niceTicks) ? (bb.ticks || bb.niceTicks).map((function(bb) {
          var ab = Mb ? Mb.indexOf(bb) : bb;
          return {
            coordinate: Ab(ab) + Bb,
            value: bb,
            offset: Bb
          }
        })).filter((function(bb) {
          return !QT()(bb.coordinate)
        })) : bb.isCategorical && bb.categoricalDomain ? bb.categoricalDomain.map((function(bb, ab) {
          return {
            coordinate: Ab(bb) + Bb,
            value: bb,
            index: ab,
            offset: Bb
          }
        })) : Ab.ticks && !Ub ? Ab.ticks(bb.tickCount).map((function(bb) {
          return {
            coordinate: Ab(bb) + Bb,
            value: bb,
            offset: Bb
          }
        })) : Ab.domain().map((function(bb, ab) {
          return {
            coordinate: Ab(bb) + Bb,
            value: Mb ? Mb[bb] : bb,
            index: ab,
            offset: Bb
          }
        }))
      },
      KE = new WeakMap,
      oE = function(bb, ab) {
        if ("function" !== typeof ab) return bb;
        KE.has(bb) || KE.set(bb, new WeakMap);
        var Ub = KE.get(bb);
        if (Ub.has(ab)) return Ub.get(ab);
        var Ab = function() {
          bb.apply(void 0, arguments), ab.apply(void 0, arguments)
        };
        return Ub.set(ab, Ab), Ab
      },
      lE = function(bb, ab, Ub) {
        var Tb = bb.scale,
          Eb = bb.type,
          Yb = bb.layout,
          Bb = bb.axisType;
        if ("auto" === Tb) return "radial" === Yb && "radiusAxis" === Bb ? {
          scale: Mb.b(),
          realScaleType: "band"
        } : "radial" === Yb && "angleAxis" === Bb ? {
          scale: Va(),
          realScaleType: "linear"
        } : "category" === Eb && ab && (ab.indexOf("LineChart") >= 0 || ab.indexOf("AreaChart") >= 0 || ab.indexOf("ComposedChart") >= 0 && !Ub) ? {
          scale: Mb.c(),
          realScaleType: "point"
        } : "category" === Eb ? {
          scale: Mb.b(),
          realScaleType: "band"
        } : {
          scale: Va(),
          realScaleType: "linear"
        };
        if (HT()(Tb)) {
          var eb = "scale".concat(uT()(Tb));
          return {
            scale: (Ab[eb] || Mb.c)(),
            realScaleType: Ab[eb] ? eb : "point"
          }
        }
        return NT()(Tb) ? {
          scale: Tb
        } : {
          scale: Mb.c(),
          realScaleType: "point"
        }
      },
      tE = 1e-4,
      wE = function(bb) {
        var ab = bb.domain();
        if (ab && !(ab.length <= 2)) {
          var Ub = ab.length,
            Ab = bb.range(),
            Mb = Math.min(Ab[0], Ab[1]) - tE,
            Tb = Math.max(Ab[0], Ab[1]) + tE,
            Eb = bb(ab[0]),
            Yb = bb(ab[Ub - 1]);
          (Eb < Mb || Eb > Tb || Yb < Mb || Yb > Tb) && bb.domain([ab[0], ab[Ub - 1]])
        }
      },
      sE = function(bb, ab) {
        if (!bb) return null;
        for (var Ub = 0, Ab = bb.length; Ub < Ab; Ub++)
          if (bb[Ub].item === ab) return bb[Ub].position;
        return null
      },
      gE = function(bb, ab) {
        if (!ab || 2 !== ab.length || !(0, kE.E)(ab[0]) || !(0, kE.E)(ab[1])) return bb;
        var Ub = Math.min(ab[0], ab[1]),
          Ab = Math.max(ab[0], ab[1]),
          Mb = [bb[0], bb[1]];
        return (!(0, kE.E)(bb[0]) || bb[0] < Ub) && (Mb[0] = Ub), (!(0, kE.E)(bb[1]) || bb[1] > Ab) && (Mb[1] = Ab), Mb[0] > Ab && (Mb[0] = Ab), Mb[1] < Ub && (Mb[1] = Ub), Mb
      },
      CE = {
        sign: function(bb) {
          var ab = bb.length;
          if (!(ab <= 0))
            for (var Ub = 0, Ab = bb[0].length; Ub < Ab; ++Ub)
              for (var Mb = 0, Tb = 0, Eb = 0; Eb < ab; ++Eb) {
                var Yb = QT()(bb[Eb][Ub][1]) ? bb[Eb][Ub][0] : bb[Eb][Ub][1];
                Yb >= 0 ? (bb[Eb][Ub][0] = Mb, bb[Eb][Ub][1] = Mb + Yb, Mb = bb[Eb][Ub][1]) : (bb[Eb][Ub][0] = Tb, bb[Eb][Ub][1] = Tb + Yb, Tb = bb[Eb][Ub][1])
              }
        },
        expand: function(bb, ab) {
          if ((Ab = bb.length) > 0) {
            for (var Ub, Ab, Mb, Tb = 0, Eb = bb[0].length; Tb < Eb; ++Tb) {
              for (Mb = Ub = 0; Ub < Ab; ++Ub) Mb += bb[Ub][Tb][1] || 0;
              if (Mb)
                for (Ub = 0; Ub < Ab; ++Ub) bb[Ub][Tb][1] /= Mb
            }
            XT(bb, ab)
          }
        },
        none: XT,
        silhouette: function(bb, ab) {
          if ((Ub = bb.length) > 0) {
            for (var Ub, Ab = 0, Mb = bb[ab[0]], Tb = Mb.length; Ab < Tb; ++Ab) {
              for (var Eb = 0, Yb = 0; Eb < Ub; ++Eb) Yb += bb[Eb][Ab][1] || 0;
              Mb[Ab][1] += Mb[Ab][0] = -Yb / 2
            }
            XT(bb, ab)
          }
        },
        wiggle: function(bb, ab) {
          if ((Mb = bb.length) > 0 && (Ab = (Ub = bb[ab[0]]).length) > 0) {
            for (var Ub, Ab, Mb, Tb = 0, Eb = 1; Eb < Ab; ++Eb) {
              for (var Yb = 0, Bb = 0, eb = 0; Yb < Mb; ++Yb) {
                for (var vb = bb[ab[Yb]], Lb = vb[Eb][1] || 0, Pb = (Lb - (vb[Eb - 1][1] || 0)) / 2, Xb = 0; Xb < Yb; ++Xb) {
                  var jb = bb[ab[Xb]];
                  Pb += (jb[Eb][1] || 0) - (jb[Eb - 1][1] || 0)
                }
                Bb += Lb, eb += Pb * Lb
              }
              Ub[Eb - 1][1] += Ub[Eb - 1][0] = Tb, Bb && (Tb -= eb / Bb)
            }
            Ub[Eb - 1][1] += Ub[Eb - 1][0] = Tb, XT(bb, ab)
          }
        },
        positive: function(bb) {
          var ab = bb.length;
          if (!(ab <= 0))
            for (var Ub = 0, Ab = bb[0].length; Ub < Ab; ++Ub)
              for (var Mb = 0, Tb = 0; Tb < ab; ++Tb) {
                var Eb = QT()(bb[Tb][Ub][1]) ? bb[Tb][Ub][0] : bb[Tb][Ub][1];
                Eb >= 0 ? (bb[Tb][Ub][0] = Mb, bb[Tb][Ub][1] = Mb + Eb, Mb = bb[Tb][Ub][1]) : (bb[Tb][Ub][0] = 0, bb[Tb][Ub][1] = 0)
              }
        }
      },
      VE = function(bb, ab, Ub) {
        var Ab = ab.map((function(bb) {
            return bb.props.dataKey
          })),
          Mb = CE[Ub],
          Tb = function() {
            var bb = (0, RT.d)([]),
              ab = kT,
              Ub = XT,
              Ab = yT;

            function Mb(Mb) {
              var Tb, Eb, Yb = Array.from(bb.apply(this, arguments), ZT),
                Bb = Yb.length,
                eb = -1;
              for (const bb of Mb)
                for (Tb = 0, ++eb; Tb < Bb; ++Tb)(Yb[Tb][eb] = [0, +Ab(bb, Yb[Tb].key, eb, Mb)]).data = bb;
              for (Tb = 0, Eb = (0, jT.b)(ab(Yb)); Tb < Bb; ++Tb) Yb[Eb[Tb]].index = Tb;
              return Ub(Yb, Eb), Yb
            }
            return Mb.keys = function(ab) {
              return arguments.length ? (bb = "function" === typeof ab ? ab : (0, RT.d)(Array.from(ab)), Mb) : bb
            }, Mb.value = function(bb) {
              return arguments.length ? (Ab = "function" === typeof bb ? bb : (0, RT.d)(+bb), Mb) : Ab
            }, Mb.order = function(bb) {
              return arguments.length ? (ab = null == bb ? kT : "function" === typeof bb ? bb : (0, RT.d)(Array.from(bb)), Mb) : ab
            }, Mb.offset = function(bb) {
              return arguments.length ? (Ub = null == bb ? XT : bb, Mb) : Ub
            }, Mb
          }().keys(Ab).value((function(bb, ab) {
            return +pE(bb, ab, 0)
          })).order(kT).offset(Mb);
        return Tb(bb)
      },
      OE = function(bb, ab, Ub, Ab, Mb, Tb) {
        if (!bb) return null;
        var Eb = (Tb ? ab.reverse() : ab).reduce((function(bb, ab) {
          var Mb, Tb = null !== (Mb = ab.type) && void 0 !== Mb && Mb.defaultProps ? fE(fE({}, ab.type.defaultProps), ab.props) : ab.props,
            Eb = Tb.stackId;
          if (Tb.hide) return bb;
          var Yb = Tb[Ub],
            Bb = bb[Yb] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, kE.B)(Eb)) {
            var eb = Bb.stackGroups[Eb] || {
              numericAxisId: Ub,
              cateAxisId: Ab,
              items: []
            };
            eb.items.push(ab), Bb.hasStack = !0, Bb.stackGroups[Eb] = eb
          } else Bb.stackGroups[(0, kE.J)("_stackId_")] = {
            numericAxisId: Ub,
            cateAxisId: Ab,
            items: [ab]
          };
          return fE(fE({}, bb), {}, mE({}, Yb, Bb))
        }), {});
        return Object.keys(Eb).reduce((function(ab, Tb) {
          var Yb = Eb[Tb];
          if (Yb.hasStack) {
            Yb.stackGroups = Object.keys(Yb.stackGroups).reduce((function(ab, Tb) {
              var Eb = Yb.stackGroups[Tb];
              return fE(fE({}, ab), {}, mE({}, Tb, {
                numericAxisId: Ub,
                cateAxisId: Ab,
                items: Eb.items,
                stackedData: VE(bb, Eb.items, Mb)
              }))
            }), {})
          }
          return fE(fE({}, ab), {}, mE({}, Tb, Yb))
        }), {})
      },
      cE = function(bb, ab) {
        var Ub = ab.realScaleType,
          Ab = ab.type,
          Mb = ab.tickCount,
          Tb = ab.originalDomain,
          Eb = ab.allowDecimals,
          Yb = Ub || ab.scale;
        if ("auto" !== Yb && "linear" !== Yb) return null;
        if (Mb && "number" === Ab && Tb && ("auto" === Tb[0] || "auto" === Tb[1])) {
          var Bb = bb.domain();
          if (!Bb.length) return null;
          var eb = XE(Bb, Mb, Eb);
          return bb.domain([iT()(eb), zT()(eb)]), {
            niceTicks: eb
          }
        }
        if (Mb && "number" === Ab) {
          var vb = bb.domain();
          return {
            niceTicks: jE(vb, Mb, Eb)
          }
        }
        return null
      };

    function JE(bb) {
      var ab = bb.axis,
        Ub = bb.ticks,
        Ab = bb.bandSize,
        Mb = bb.entry,
        Tb = bb.index,
        Eb = bb.dataKey;
      if ("category" === ab.type) {
        if (!ab.allowDuplicatedCategory && ab.dataKey && !mT()(Mb[ab.dataKey])) {
          var Yb = (0, kE.f)(Ub, "value", Mb[ab.dataKey]);
          if (Yb) return Yb.coordinate + Ab / 2
        }
        return Ub[Tb] ? Ub[Tb].coordinate + Ab / 2 : null
      }
      var Bb = pE(Mb, mT()(Eb) ? ab.dataKey : Eb);
      return mT()(Bb) ? null : ab.scale(Bb)
    }
    var nE = function(bb) {
        var ab = bb.axis,
          Ub = bb.ticks,
          Ab = bb.offset,
          Mb = bb.bandSize,
          Tb = bb.entry,
          Eb = bb.index;
        if ("category" === ab.type) return Ub[Eb] ? Ub[Eb].coordinate + Ab : null;
        var Yb = pE(Tb, ab.dataKey, ab.domain[Eb]);
        return mT()(Yb) ? null : ab.scale(Yb) - Mb / 2 + Ab
      },
      SE = function(bb) {
        var ab = bb.numericAxis,
          Ub = ab.scale.domain();
        if ("number" === ab.type) {
          var Ab = Math.min(Ub[0], Ub[1]),
            Mb = Math.max(Ub[0], Ub[1]);
          return Ab <= 0 && Mb >= 0 ? 0 : Mb < 0 ? Mb : Ab
        }
        return Ub[0]
      },
      bY = function(bb, ab) {
        var Ub, Ab = (null !== (Ub = bb.type) && void 0 !== Ub && Ub.defaultProps ? fE(fE({}, bb.type.defaultProps), bb.props) : bb.props).stackId;
        if ((0, kE.B)(Ab)) {
          var Mb = ab[Ab];
          if (Mb) {
            var Tb = Mb.items.indexOf(bb);
            return Tb >= 0 ? Mb.stackedData[Tb] : null
          }
        }
        return null
      },
      aY = function(bb, ab, Ub) {
        return Object.keys(bb).reduce((function(Ab, Mb) {
          var Tb = bb[Mb].stackedData.reduce((function(bb, Ab) {
            var Mb = Ab.slice(ab, Ub + 1).reduce((function(bb, ab) {
              return [iT()(ab.concat([bb[0]]).filter(kE.E)), zT()(ab.concat([bb[1]]).filter(kE.E))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(bb[0], Mb[0]), Math.max(bb[1], Mb[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(Tb[0], Ab[0]), Math.max(Tb[1], Ab[1])]
        }), [1 / 0, -1 / 0]).map((function(bb) {
          return bb === 1 / 0 || bb === -1 / 0 ? 0 : bb
        }))
      },
      UY = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      AY = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      MY = function(bb, ab, Ub) {
        if (NT()(bb)) return bb(ab, Ub);
        if (!Array.isArray(bb)) return ab;
        var Ab = [];
        if ((0, kE.E)(bb[0])) Ab[0] = Ub ? bb[0] : Math.min(bb[0], ab[0]);
        else if (UY.test(bb[0])) {
          var Mb = +UY.exec(bb[0])[1];
          Ab[0] = ab[0] - Mb
        } else NT()(bb[0]) ? Ab[0] = bb[0](ab[0]) : Ab[0] = ab[0];
        if ((0, kE.E)(bb[1])) Ab[1] = Ub ? bb[1] : Math.max(bb[1], ab[1]);
        else if (AY.test(bb[1])) {
          var Tb = +AY.exec(bb[1])[1];
          Ab[1] = ab[1] + Tb
        } else NT()(bb[1]) ? Ab[1] = bb[1](ab[1]) : Ab[1] = ab[1];
        return Ab
      },
      TY = function(bb, ab, Ub) {
        if (bb && bb.scale && bb.scale.bandwidth) {
          var Ab = bb.scale.bandwidth();
          if (!Ub || Ab > 0) return Ab
        }
        if (bb && ab && ab.length >= 2) {
          for (var Mb = lT()(ab, (function(bb) {
              return bb.coordinate
            })), Tb = 1 / 0, Eb = 1, Yb = Mb.length; Eb < Yb; Eb++) {
            var Bb = Mb[Eb],
              eb = Mb[Eb - 1];
            Tb = Math.min((Bb.coordinate || 0) - (eb.coordinate || 0), Tb)
          }
          return Tb === 1 / 0 ? 0 : Tb
        }
        return Ub ? void 0 : 0
      },
      EY = function(bb, ab, Ub) {
        return bb && bb.length ? KT()(bb, dT()(Ub, "type.defaultProps.domain")) ? ab : bb : ab
      },
      YY = function(bb, ab) {
        var Ub = bb.type.defaultProps ? fE(fE({}, bb.type.defaultProps), bb.props) : bb.props,
          Ab = Ub.dataKey,
          Mb = Ub.name,
          Tb = Ub.unit,
          Eb = Ub.formatter,
          Yb = Ub.tooltipType,
          Bb = Ub.chartType,
          eb = Ub.hide;
        return fE(fE({}, (0, yE.d)(bb, !1)), {}, {
          dataKey: Ab,
          unit: Tb,
          formatter: Eb,
          name: Mb || Ab,
          color: HE(bb),
          value: pE(ab, Ab),
          type: Yb,
          payload: ab,
          chartType: Bb,
          hide: eb
        })
      }
  },
  5748: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb,
      e: () => Lb
    });
    var Ab = Ub(5567);

    function Mb(bb) {
      return Mb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Mb(bb)
    }

    function Tb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Eb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Tb(Object(Ub), !0).forEach((function(ab) {
          Yb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Tb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Yb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Mb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Mb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Mb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var Bb = {
        widthCache: {},
        cacheCount: 0
      },
      eb = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      vb = "recharts_measurement_span";
    var Lb = function(bb) {
        var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === bb || null === bb || Ab.b.isSsr) return {
          width: 0,
          height: 0
        };
        var Ub = function(bb) {
            var ab = Eb({}, bb);
            return Object.keys(ab).forEach((function(bb) {
              ab[bb] || delete ab[bb]
            })), ab
          }(ab),
          Mb = JSON.stringify({
            text: bb,
            copyStyle: Ub
          });
        if (Bb.widthCache[Mb]) return Bb.widthCache[Mb];
        try {
          var Tb = document.getElementById(vb);
          Tb || ((Tb = document.createElement("span")).setAttribute("id", vb), Tb.setAttribute("aria-hidden", "true"), document.body.appendChild(Tb));
          var Yb = Eb(Eb({}, eb), Ub);
          Object.assign(Tb.style, Yb), Tb.textContent = "".concat(bb);
          var Lb = Tb.getBoundingClientRect(),
            Pb = {
              width: Lb.width,
              height: Lb.height
            };
          return Bb.widthCache[Mb] = Pb, ++Bb.cacheCount > 2e3 && (Bb.cacheCount = 0, Bb.widthCache = {}), Pb
        } catch (Xb) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      Pb = function(bb) {
        return {
          top: bb.top + window.scrollY - document.documentElement.clientTop,
          left: bb.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4813: (bb, ab, Ub) => {
    Ub.d(ab, {
      B: () => yb,
      E: () => Rb,
      F: () => jb,
      I: () => Xb,
      J: () => Db,
      e: () => Nb,
      f: () => mb,
      j: () => xb,
      n: () => pb,
      o: () => zb,
      r: () => ib,
      u: () => fb,
      y: () => kb
    });
    var Ab = Ub(4821),
      Mb = Ub.n(Ab),
      Tb = Ub(4831),
      Eb = Ub.n(Tb),
      Yb = Ub(4838),
      Bb = Ub.n(Yb),
      eb = Ub(4834),
      vb = Ub.n(eb),
      Lb = Ub(5041),
      Pb = Ub.n(Lb),
      Xb = function(bb) {
        return 0 === bb ? 0 : bb > 0 ? 1 : -1
      },
      jb = function(bb) {
        return Mb()(bb) && bb.indexOf("%") === bb.length - 1
      },
      Rb = function(bb) {
        return vb()(bb) && !Eb()(bb)
      },
      kb = function(bb) {
        return Pb()(bb)
      },
      yb = function(bb) {
        return Rb(bb) || Mb()(bb)
      },
      Zb = 0,
      Db = function(bb) {
        var ab = ++Zb;
        return "".concat(bb || "").concat(ab)
      },
      zb = function(bb, ab) {
        var Ub, Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Tb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Rb(bb) && !Mb()(bb)) return Ab;
        if (jb(bb)) {
          var Yb = bb.indexOf("%");
          Ub = ab * parseFloat(bb.slice(0, Yb)) / 100
        } else Ub = +bb;
        return Eb()(Ub) && (Ub = Ab), Tb && Ub > ab && (Ub = ab), Ub
      },
      xb = function(bb) {
        if (!bb) return null;
        var ab = Object.keys(bb);
        return ab && ab.length ? bb[ab[0]] : null
      },
      ib = function(bb) {
        if (!Array.isArray(bb)) return !1;
        for (var ab = bb.length, Ub = {}, Ab = 0; Ab < ab; Ab++) {
          if (Ub[bb[Ab]]) return !0;
          Ub[bb[Ab]] = !0
        }
        return !1
      },
      fb = function(bb, ab) {
        return Rb(bb) && Rb(ab) ? function(Ub) {
          return bb + Ub * (ab - bb)
        } : function() {
          return ab
        }
      };

    function mb(bb, ab, Ub) {
      return bb && bb.length ? bb.find((function(bb) {
        return bb && ("function" === typeof ab ? ab(bb) : Bb()(bb, ab)) === Ub
      })) : null
    }
    var pb = function(bb) {
        if (!bb || !bb.length) return null;
        for (var ab = bb.length, Ub = 0, Ab = 0, Mb = 0, Tb = 0, Eb = 1 / 0, Yb = -1 / 0, Bb = 0, eb = 0, vb = 0; vb < ab; vb++) Ub += Bb = bb[vb].cx || 0, Ab += eb = bb[vb].cy || 0, Mb += Bb * eb, Tb += Bb * Bb, Eb = Math.min(Eb, Bb), Yb = Math.max(Yb, Bb);
        var Lb = ab * Tb !== Ub * Ub ? (ab * Mb - Ub * Ab) / (ab * Tb - Ub * Ub) : 0;
        return {
          xmin: Eb,
          xmax: Yb,
          a: Lb,
          b: (Ab - Lb * Ub) / ab
        }
      },
      Nb = function(bb, ab) {
        return Rb(bb) && Rb(ab) ? bb - ab : Mb()(bb) && Mb()(ab) ? bb.localeCompare(ab) : bb instanceof Date && ab instanceof Date ? bb.getTime() - ab.getTime() : String(bb).localeCompare(String(ab))
      }
  },
  5567: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    var Ab = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(bb) {
        return Ab[bb]
      },
      set: function(bb, ab) {
        if ("string" === typeof bb) Ab[bb] = ab;
        else {
          var Ub = Object.keys(bb);
          Ub && Ub.length && Ub.forEach((function(ab) {
            Ab[ab] = bb[ab]
          }))
        }
      }
    }
  },
  5857: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    var Ab = function(bb, ab) {
      var Ub = bb.alwaysShow,
        Ab = bb.ifOverflow;
      return Ub && (Ab = "extendDomain"), Ab === ab
    }
  },
  5050: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    var Ab = function(bb, ab) {
      for (var Ub = arguments.length, Ab = new Array(Ub > 2 ? Ub - 2 : 0), Mb = 2; Mb < Ub; Mb++) Ab[Mb - 2] = arguments[Mb]
    }
  },
  5849: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb,
      f: () => Pb,
      i: () => eb
    });
    Ub(5041), Ub(52), Ub(4904);

    function Ab(bb) {
      return Ab = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ab(bb)
    }

    function Mb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Tb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Mb(Object(Ub), !0).forEach((function(ab) {
          Eb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Mb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Eb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Ab(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Mb = Ub.call(bb, ab || "default");
            if ("object" != Ab(Mb)) return Mb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Ab(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var Yb = Math.PI / 180,
      Bb = function(bb) {
        return 180 * bb / Math.PI
      },
      eb = function(bb, ab, Ub, Ab) {
        return {
          x: bb + Math.cos(-Yb * Ab) * Ub,
          y: ab + Math.sin(-Yb * Ab) * Ub
        }
      },
      vb = function(bb, ab) {
        var Ub = bb.x,
          Ab = bb.y,
          Mb = ab.cx,
          Tb = ab.cy,
          Eb = function(bb, ab) {
            var Ub = bb.x,
              Ab = bb.y,
              Mb = ab.x,
              Tb = ab.y;
            return Math.sqrt(Math.pow(Ub - Mb, 2) + Math.pow(Ab - Tb, 2))
          }({
            x: Ub,
            y: Ab
          }, {
            x: Mb,
            y: Tb
          });
        if (Eb <= 0) return {
          radius: Eb
        };
        var Yb = (Ub - Mb) / Eb,
          eb = Math.acos(Yb);
        return Ab > Tb && (eb = 2 * Math.PI - eb), {
          radius: Eb,
          angle: Bb(eb),
          angleInRadian: eb
        }
      },
      Lb = function(bb, ab) {
        var Ub = ab.startAngle,
          Ab = ab.endAngle,
          Mb = Math.floor(Ub / 360),
          Tb = Math.floor(Ab / 360);
        return bb + 360 * Math.min(Mb, Tb)
      },
      Pb = function(bb, ab) {
        var Ub = bb.x,
          Ab = bb.y,
          Mb = vb({
            x: Ub,
            y: Ab
          }, ab),
          Eb = Mb.radius,
          Yb = Mb.angle,
          Bb = ab.innerRadius,
          eb = ab.outerRadius;
        if (Eb < Bb || Eb > eb) return !1;
        if (0 === Eb) return !0;
        var Pb, Xb = function(bb) {
            var ab = bb.startAngle,
              Ub = bb.endAngle,
              Ab = Math.floor(ab / 360),
              Mb = Math.floor(Ub / 360),
              Tb = Math.min(Ab, Mb);
            return {
              startAngle: ab - 360 * Tb,
              endAngle: Ub - 360 * Tb
            }
          }(ab),
          jb = Xb.startAngle,
          Rb = Xb.endAngle,
          kb = Yb;
        if (jb <= Rb) {
          for (; kb > Rb;) kb -= 360;
          for (; kb < jb;) kb += 360;
          Pb = kb >= jb && kb <= Rb
        } else {
          for (; kb > jb;) kb -= 360;
          for (; kb < Rb;) kb += 360;
          Pb = kb >= Rb && kb <= jb
        }
        return Pb ? Tb(Tb({}, ab), {}, {
          radius: Eb,
          angle: Lb(kb, ab)
        }) : null
      }
  },
  5058: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Gb,
      e: () => Wb,
      g: () => Hb,
      i: () => fb,
      k: () => rb,
      l: () => hb,
      p: () => Qb,
      q: () => Kb,
      t: () => ub,
      x: () => Ib
    });
    var Ab = Ub(4838),
      Mb = Ub.n(Ab),
      Tb = Ub(5041),
      Eb = Ub.n(Tb),
      Yb = Ub(4821),
      Bb = Ub.n(Yb),
      eb = Ub(4904),
      vb = Ub.n(eb),
      Lb = Ub(4734),
      Pb = Ub.n(Lb),
      Xb = Ub(52),
      jb = Ub(5060),
      Rb = Ub(4813),
      kb = Ub(5073),
      yb = Ub(5080),
      Zb = ["children"],
      Db = ["children"];

    function zb(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub = {};
        for (var Ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, Ab)) {
            if (ab.indexOf(Ab) >= 0) continue;
            Ub[Ab] = bb[Ab]
          } return Ub
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }

    function xb(bb) {
      return xb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, xb(bb)
    }
    var ib = {
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
      fb = function(bb) {
        return "string" === typeof bb ? bb : bb ? bb.displayName || bb.name || "Component" : ""
      },
      mb = null,
      pb = null,
      Nb = function bb(ab) {
        if (ab === mb && Array.isArray(pb)) return pb;
        var Ub = [];
        return Xb.Children.forEach(ab, (function(ab) {
          Eb()(ab) || ((0, jb.isFragment)(ab) ? Ub = Ub.concat(bb(ab.props.children)) : Ub.push(ab))
        })), pb = Ub, mb = ab, Ub
      };

    function Wb(bb, ab) {
      var Ub = [],
        Ab = [];
      return Ab = Array.isArray(ab) ? ab.map((function(bb) {
        return fb(bb)
      })) : [fb(ab)], Nb(bb).forEach((function(bb) {
        var ab = Mb()(bb, "type.displayName") || Mb()(bb, "type.name"); - 1 !== Ab.indexOf(ab) && Ub.push(bb)
      })), Ub
    }

    function Hb(bb, ab) {
      var Ub = Wb(bb, ab);
      return Ub && Ub[0]
    }
    var Ib = function(bb) {
        if (!bb || !bb.props) return !1;
        var ab = bb.props,
          Ub = ab.width,
          Ab = ab.height;
        return !(!(0, Rb.E)(Ub) || Ub <= 0 || !(0, Rb.E)(Ab) || Ab <= 0)
      },
      db = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      Fb = function(bb) {
        return bb && bb.type && Bb()(bb.type) && db.indexOf(bb.type) >= 0
      },
      hb = function(bb) {
        return bb && "object" === xb(bb) && "clipDot" in bb
      },
      Gb = function(bb, ab, Ub) {
        if (!bb || "function" === typeof bb || "boolean" === typeof bb) return null;
        var Ab = bb;
        if ((0, Xb.isValidElement)(bb) && (Ab = bb.props), !Pb()(Ab)) return null;
        var Mb = {};
        return Object.keys(Ab).forEach((function(bb) {
          var Tb;
          (function(bb, ab, Ub, Ab) {
            var Mb, Tb = null !== (Mb = null === yb.i || void 0 === yb.i ? void 0 : yb.i[Ab]) && void 0 !== Mb ? Mb : [];
            return ab.startsWith("data-") || !vb()(bb) && (Ab && Tb.includes(ab) || yb.m.includes(ab)) || Ub && yb.e.includes(ab)
          })(null === (Tb = Ab) || void 0 === Tb ? void 0 : Tb[bb], bb, ab, Ub) && (Mb[bb] = Ab[bb])
        })), Mb
      },
      Qb = function bb(ab, Ub) {
        if (ab === Ub) return !0;
        var Ab = Xb.Children.count(ab);
        if (Ab !== Xb.Children.count(Ub)) return !1;
        if (0 === Ab) return !0;
        if (1 === Ab) return qb(Array.isArray(ab) ? ab[0] : ab, Array.isArray(Ub) ? Ub[0] : Ub);
        for (var Mb = 0; Mb < Ab; Mb++) {
          var Tb = ab[Mb],
            Eb = Ub[Mb];
          if (Array.isArray(Tb) || Array.isArray(Eb)) {
            if (!bb(Tb, Eb)) return !1
          } else if (!qb(Tb, Eb)) return !1
        }
        return !0
      },
      qb = function(bb, ab) {
        if (Eb()(bb) && Eb()(ab)) return !0;
        if (!Eb()(bb) && !Eb()(ab)) {
          var Ub = bb.props || {},
            Ab = Ub.children,
            Mb = zb(Ub, Zb),
            Tb = ab.props || {},
            Yb = Tb.children,
            Bb = zb(Tb, Db);
          return Ab && Yb ? (0, kb.b)(Mb, Bb) && Qb(Ab, Yb) : !Ab && !Yb && (0, kb.b)(Mb, Bb)
        }
        return !1
      },
      ub = function(bb, ab) {
        var Ub = [],
          Ab = {};
        return Nb(bb).forEach((function(bb, Mb) {
          if (Fb(bb)) Ub.push(bb);
          else if (bb) {
            var Tb = fb(bb.type),
              Eb = ab[Tb] || {},
              Yb = Eb.handler,
              Bb = Eb.once;
            if (Yb && (!Bb || !Ab[Tb])) {
              var eb = Yb(bb, Tb, Mb);
              Ub.push(eb), Ab[Tb] = !0
            }
          }
        })), Ub
      },
      rb = function(bb) {
        var ab = bb && bb.type;
        return ab && ib[ab] ? ib[ab] : null
      },
      Kb = function(bb, ab) {
        return Nb(ab).indexOf(bb)
      }
  },
  5073: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      for (var Ub in bb)
        if ({}.hasOwnProperty.call(bb, Ub) && (!{}.hasOwnProperty.call(ab, Ub) || bb[Ub] !== ab[Ub])) return !1;
      for (var Ab in ab)
        if ({}.hasOwnProperty.call(ab, Ab) && !{}.hasOwnProperty.call(bb, Ab)) return !1;
      return !0
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  5825: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => vb
    });
    var Ab = Ub(5642),
      Mb = Ub(5754),
      Tb = Ub(5058);

    function Eb(bb) {
      return Eb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Eb(bb)
    }

    function Yb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Bb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Yb(Object(Ub), !0).forEach((function(ab) {
          eb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Yb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function eb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != Eb(bb) || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != Eb(Ab)) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == Eb(ab) ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }
    var vb = function(bb) {
      var ab = bb.children,
        Ub = bb.formattedGraphicalItems,
        Eb = bb.legendWidth,
        Yb = bb.legendContent,
        eb = (0, Tb.g)(ab, Ab.d);
      if (!eb) return null;
      var vb, Lb = Ab.d.defaultProps,
        Pb = void 0 !== Lb ? Bb(Bb({}, Lb), eb.props) : {};
      return vb = eb.props && eb.props.payload ? eb.props && eb.props.payload : "children" === Yb ? (Ub || []).reduce((function(bb, ab) {
        var Ub = ab.item,
          Ab = ab.props,
          Mb = Ab.sectors || Ab.data || [];
        return bb.concat(Mb.map((function(bb) {
          return {
            type: eb.props.iconType || Ub.props.legendType,
            value: bb.name,
            color: bb.fill,
            payload: bb
          }
        })))
      }), []) : (Ub || []).map((function(bb) {
        var ab = bb.item,
          Ub = ab.type.defaultProps,
          Ab = void 0 !== Ub ? Bb(Bb({}, Ub), ab.props) : {},
          Tb = Ab.dataKey,
          Eb = Ab.name,
          Yb = Ab.legendType;
        return {
          inactive: Ab.hide,
          dataKey: Tb,
          type: Pb.iconType || Yb || "square",
          color: (0, Mb.N)(ab),
          value: Eb || Tb,
          payload: Ab
        }
      })), Bb(Bb(Bb({}, Pb), Ab.d.getWithHeight(eb, Eb)), {}, {
        payload: vb,
        item: eb
      })
    }
  },
  5575: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb
    });
    var Ab = Ub(5583),
      Mb = Ub.n(Ab),
      Tb = Ub(4904),
      Eb = Ub.n(Tb);

    function Yb(bb, ab, Ub) {
      return !0 === ab ? Mb()(bb, Ub) : Eb()(ab) ? Mb()(bb, ab) : bb
    }
  },
  5080: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb,
      i: () => eb,
      m: () => Yb,
      o: () => Lb,
      r: () => Pb
    });
    var Ab = Ub(52),
      Mb = Ub(4734),
      Tb = Ub.n(Mb);

    function Eb(bb) {
      return Eb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Eb(bb)
    }
    var Yb = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "bX", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      Bb = ["points", "pathLength"],
      eb = {
        svg: ["viewBox", "children"],
        polygon: Bb,
        polyline: Bb
      },
      vb = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      Lb = function(bb, ab) {
        if (!bb || "function" === typeof bb || "boolean" === typeof bb) return null;
        var Ub = bb;
        if ((0, Ab.isValidElement)(bb) && (Ub = bb.props), !Tb()(Ub)) return null;
        var Mb = {};
        return Object.keys(Ub).forEach((function(bb) {
          vb.includes(bb) && (Mb[bb] = ab || function(ab) {
            return Ub[bb](Ub, ab)
          })
        })), Mb
      },
      Pb = function(bb, ab, Ub) {
        if (!Tb()(bb) || "object" !== Eb(bb)) return null;
        var Ab = null;
        return Object.keys(bb).forEach((function(Mb) {
          var Tb = bb[Mb];
          vb.includes(Mb) && "function" === typeof Tb && (Ab || (Ab = {}), Ab[Mb] = function(bb, ab, Ub) {
            return function(Ab) {
              return bb(ab, Ub, Ab), null
            }
          }(Tb, ab, Ub))
        })), Ab
      }
  },
  5069: (bb, ab) => {
    var Ub, Ab = Symbol.for("react.element"),
      Mb = Symbol.for("react.portal"),
      Tb = Symbol.for("react.fragment"),
      Eb = Symbol.for("react.strict_mode"),
      Yb = Symbol.for("react.profiler"),
      Bb = Symbol.for("react.provider"),
      eb = Symbol.for("react.context"),
      vb = Symbol.for("react.server_context"),
      Lb = Symbol.for("react.forward_ref"),
      Pb = Symbol.for("react.suspense"),
      Xb = Symbol.for("react.suspense_list"),
      jb = Symbol.for("react.memo"),
      Rb = Symbol.for("react.lazy"),
      kb = Symbol.for("react.offscreen");

    function yb(bb) {
      if ("object" === typeof bb && null !== bb) {
        var ab = bb.$$typeof;
        switch (ab) {
          case Ab:
            switch (bb = bb.type) {
              case Tb:
              case Yb:
              case Eb:
              case Pb:
              case Xb:
                return bb;
              default:
                switch (bb = bb && bb.$$typeof) {
                  case vb:
                  case eb:
                  case Lb:
                  case Rb:
                  case jb:
                  case Bb:
                    return bb;
                  default:
                    return ab
                }
            }
          case Mb:
            return ab
        }
      }
    }
    Ub = Symbol.for("react.module.reference"), ab.isFragment = function(bb) {
      return yb(bb) === Tb
    }
  },
  5060: (bb, ab, Ub) => {
    bb.exports = Ub(5069)
  },
  4721: (bb, ab, Ub) => {
    function Ab(bb) {
      var ab, Ub, Mb = "";
      if ("string" == typeof bb || "number" == typeof bb) Mb += bb;
      else if ("object" == typeof bb)
        if (Array.isArray(bb)) {
          var Tb = bb.length;
          for (ab = 0; ab < Tb; ab++) bb[ab] && (Ub = Ab(bb[ab])) && (Mb && (Mb += " "), Mb += Ub)
        } else
          for (Ub in bb) bb[Ub] && (Mb && (Mb += " "), Mb += Ub);
      return Mb
    }
    Ub.d(ab, {
      d: () => Mb
    });
    const Mb = function() {
      for (var bb, ab, Ub = 0, Mb = "", Tb = arguments.length; Ub < Tb; Ub++)(bb = arguments[Ub]) && (ab = Ab(bb)) && (Mb && (Mb += " "), Mb += ab);
      return Mb
    }
  },
  5758: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      c: () => Yb
    });
    var Ab = Ub(5766),
      Mb = Ub(5769);

    function Tb() {
      var bb, ab, Ub = (0, Mb.d)().unknown(void 0),
        Eb = Ub.domain,
        Yb = Ub.range,
        Bb = 0,
        eb = 1,
        vb = !1,
        Lb = 0,
        Pb = 0,
        Xb = .5;

      function jb() {
        var Ub = Eb().length,
          Ab = eb < Bb,
          Mb = Ab ? eb : Bb,
          Tb = Ab ? Bb : eb;
        bb = (Tb - Mb) / Math.max(1, Ub - Lb + 2 * Pb), vb && (bb = Math.floor(bb)), Mb += (Tb - Mb - bb * (Ub - Lb)) * Xb, ab = bb * (1 - Lb), vb && (Mb = Math.round(Mb), ab = Math.round(ab));
        var jb = function(bb, ab, Ub) {
          bb = +bb, ab = +ab, Ub = (Mb = arguments.length) < 2 ? (ab = bb, bb = 0, 1) : Mb < 3 ? 1 : +Ub;
          for (var Ab = -1, Mb = 0 | Math.max(0, Math.ceil((ab - bb) / Ub)), Tb = new Array(Mb); ++Ab < Mb;) Tb[Ab] = bb + Ab * Ub;
          return Tb
        }(Ub).map((function(ab) {
          return Mb + bb * ab
        }));
        return Yb(Ab ? jb.reverse() : jb)
      }
      return delete Ub.unknown, Ub.domain = function(bb) {
        return arguments.length ? (Eb(bb), jb()) : Eb()
      }, Ub.range = function(bb) {
        return arguments.length ? ([Bb, eb] = bb, Bb = +Bb, eb = +eb, jb()) : [Bb, eb]
      }, Ub.rangeRound = function(bb) {
        return [Bb, eb] = bb, Bb = +Bb, eb = +eb, vb = !0, jb()
      }, Ub.bandwidth = function() {
        return ab
      }, Ub.step = function() {
        return bb
      }, Ub.round = function(bb) {
        return arguments.length ? (vb = !!bb, jb()) : vb
      }, Ub.padding = function(bb) {
        return arguments.length ? (Lb = Math.min(1, Pb = +bb), jb()) : Lb
      }, Ub.paddingInner = function(bb) {
        return arguments.length ? (Lb = Math.min(1, bb), jb()) : Lb
      }, Ub.paddingOuter = function(bb) {
        return arguments.length ? (Pb = +bb, jb()) : Pb
      }, Ub.align = function(bb) {
        return arguments.length ? (Xb = Math.max(0, Math.min(1, bb)), jb()) : Xb
      }, Ub.copy = function() {
        return Tb(Eb(), [Bb, eb]).round(vb).paddingInner(Lb).paddingOuter(Pb).align(Xb)
      }, Ab.f.apply(jb(), arguments)
    }

    function Eb(bb) {
      var ab = bb.copy;
      return bb.padding = bb.paddingOuter, delete bb.paddingInner, delete bb.paddingOuter, bb.copy = function() {
        return Eb(ab())
      }, bb
    }

    function Yb() {
      return Eb(Tb.apply(null, arguments).paddingInner(1))
    }
  },
  5766: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(bb);
          break;
        default:
          this.range(ab).domain(bb)
      }
      return this
    }

    function Mb(bb, ab) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof bb ? this.interpolator(bb) : this.range(bb);
          break;
        default:
          this.domain(bb), "function" === typeof ab ? this.interpolator(ab) : this.range(ab)
      }
      return this
    }
    Ub.d(ab, {
      d: () => Mb,
      f: () => Ab
    })
  },
  5769: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      g: () => eb
    });
    class Ab extends Map {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yb;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: ab
            }
          }), null != bb)
          for (const [Ub, Ab] of bb) this.set(Ub, Ab)
      }
      get(bb) {
        return super.get(Mb(this, bb))
      }
      has(bb) {
        return super.has(Mb(this, bb))
      }
      set(bb, ab) {
        return super.set(Tb(this, bb), ab)
      }
      delete(bb) {
        return super.delete(Eb(this, bb))
      }
    }
    Set;

    function Mb(bb, ab) {
      let {
        _intern: Ub,
        _key: Ab
      } = bb;
      const Mb = Ab(ab);
      return Ub.has(Mb) ? Ub.get(Mb) : ab
    }

    function Tb(bb, ab) {
      let {
        _intern: Ub,
        _key: Ab
      } = bb;
      const Mb = Ab(ab);
      return Ub.has(Mb) ? Ub.get(Mb) : (Ub.set(Mb, ab), ab)
    }

    function Eb(bb, ab) {
      let {
        _intern: Ub,
        _key: Ab
      } = bb;
      const Mb = Ab(ab);
      return Ub.has(Mb) && (ab = Ub.get(Mb), Ub.delete(Mb)), ab
    }

    function Yb(bb) {
      return null !== bb && "object" === typeof bb ? bb.valueOf() : bb
    }
    var Bb = Ub(5766);
    const eb = Symbol("implicit");

    function vb() {
      var bb = new Ab,
        ab = [],
        Ub = [],
        Mb = eb;

      function Tb(Ab) {
        let Tb = bb.get(Ab);
        if (void 0 === Tb) {
          if (Mb !== eb) return Mb;
          bb.set(Ab, Tb = ab.push(Ab) - 1)
        }
        return Ub[Tb % Ub.length]
      }
      return Tb.domain = function(Ub) {
        if (!arguments.length) return ab.slice();
        ab = [], bb = new Ab;
        for (const Ab of Ub) bb.has(Ab) || bb.set(Ab, ab.push(Ab) - 1);
        return Tb
      }, Tb.range = function(bb) {
        return arguments.length ? (Ub = Array.from(bb), Tb) : Ub.slice()
      }, Tb.unknown = function(bb) {
        return arguments.length ? (Mb = bb, Tb) : Mb
      }, Tb.copy = function() {
        return vb(ab, Ub).unknown(Mb)
      }, Bb.f.apply(Tb, arguments), Tb
    }
  },
  5834: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    Array.prototype.slice;

    function Ab(bb) {
      return "object" === typeof bb && "length" in bb ? bb : Array.from(bb)
    }
  },
  5709: (bb, ab, Ub) => {
    function Ab(bb) {
      return function() {
        return bb
      }
    }
    Ub.d(ab, {
      d: () => Ab
    })
  },
  5717: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb
    });
    const Ab = Math.PI,
      Mb = 2 * Ab,
      Tb = 1e-6,
      Eb = Mb - Tb;

    function Yb(bb) {
      this._ += bb[0];
      for (let ab = 1, Ub = bb.length; ab < Ub; ++ab) this._ += arguments[ab] + bb[ab]
    }
    class Bb {
      constructor(bb) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == bb ? Yb : function(bb) {
          let ab = Math.floor(bb);
          if (!(ab >= 0)) throw new Error(`invalid digits: ${bb}`);
          if (ab > 15) return Yb;
          const Ub = 10 ** ab;
          return function(bb) {
            this._ += bb[0];
            for (let ab = 1, Ab = bb.length; ab < Ab; ++ab) this._ += Math.round(arguments[ab] * Ub) / Ub + bb[ab]
          }
        }(bb)
      }
      moveTo(bb, ab) {
        this._append`M${this._x0=this._x1=+bb},${this._y0=this._y1=+ab}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(bb, ab) {
        this._append`L${this._x1=+bb},${this._y1=+ab}`
      }
      quadraticCurveTo(bb, ab, Ub, Ab) {
        this._append`Q${+bb},${+ab},${this._x1=+Ub},${this._y1=+Ab}`
      }
      bezierCurveTo(bb, ab, Ub, Ab, Mb, Tb) {
        this._append`C${+bb},${+ab},${+Ub},${+Ab},${this._x1=+Mb},${this._y1=+Tb}`
      }
      arcTo(bb, ab, Ub, Mb, Eb) {
        if (bb = +bb, ab = +ab, Ub = +Ub, Mb = +Mb, (Eb = +Eb) < 0) throw new Error(`negative radius: ${Eb}`);
        let Yb = this._x1,
          Bb = this._y1,
          eb = Ub - bb,
          vb = Mb - ab,
          Lb = Yb - bb,
          Pb = Bb - ab,
          Xb = Lb * Lb + Pb * Pb;
        if (null === this._x1) this._append`M${this._x1=bb},${this._y1=ab}`;
        else if (Xb > Tb)
          if (Math.abs(Pb * eb - vb * Lb) > Tb && Eb) {
            let jb = Ub - Yb,
              Rb = Mb - Bb,
              kb = eb * eb + vb * vb,
              yb = jb * jb + Rb * Rb,
              Zb = Math.sqrt(kb),
              Db = Math.sqrt(Xb),
              zb = Eb * Math.tan((Ab - Math.acos((kb + Xb - yb) / (2 * Zb * Db))) / 2),
              xb = zb / Db,
              ib = zb / Zb;
            Math.abs(xb - 1) > Tb && this._append`L${bb+xb*Lb},${ab+xb*Pb}`, this._append`A${Eb},${Eb},0,0,${+(Pb*jb>Lb*Rb)},${this._x1=bb+ib*eb},${this._y1=ab+ib*vb}`
          } else this._append`L${this._x1=bb},${this._y1=ab}`;
        else;
      }
      arc(bb, ab, Ub, Yb, Bb, eb) {
        if (bb = +bb, ab = +ab, eb = !!eb, (Ub = +Ub) < 0) throw new Error(`negative radius: ${Ub}`);
        let vb = Ub * Math.cos(Yb),
          Lb = Ub * Math.sin(Yb),
          Pb = bb + vb,
          Xb = ab + Lb,
          jb = 1 ^ eb,
          Rb = eb ? Yb - Bb : Bb - Yb;
        null === this._x1 ? this._append`M${Pb},${Xb}` : (Math.abs(this._x1 - Pb) > Tb || Math.abs(this._y1 - Xb) > Tb) && this._append`L${Pb},${Xb}`, Ub && (Rb < 0 && (Rb = Rb % Mb + Mb), Rb > Eb ? this._append`A${Ub},${Ub},0,1,${jb},${bb-vb},${ab-Lb}A${Ub},${Ub},0,1,${jb},${this._x1=Pb},${this._y1=Xb}` : Rb > Tb && this._append`A${Ub},${Ub},0,${+(Rb>=Ab)},${jb},${this._x1=bb+Ub*Math.cos(Bb)},${this._y1=ab+Ub*Math.sin(Bb)}`)
      }
      rect(bb, ab, Ub, Ab) {
        this._append`M${this._x0=this._x1=+bb},${this._y0=this._y1=+ab}h${Ub=+Ub}v${+Ab}h${-Ub}Z`
      }
      toString() {
        return this._
      }
    }

    function eb(bb) {
      let ab = 3;
      return bb.digits = function(Ub) {
        if (!arguments.length) return ab;
        if (null == Ub) ab = null;
        else {
          const bb = Math.floor(Ub);
          if (!(bb >= 0)) throw new RangeError(`invalid digits: ${Ub}`);
          ab = bb
        }
        return bb
      }, () => new Bb(ab)
    }
    Bb.prototype
  },
  5542: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = !0,
      Mb = "Invariant failed";

    function Tb(bb, ab) {
      if (!bb) {
        if (Ab) throw new Error(Mb);
        var Ub = "function" === typeof ab ? ab() : ab,
          Tb = Ub ? "".concat(Mb, ": ").concat(Ub) : Mb;
        throw new Error(Tb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);