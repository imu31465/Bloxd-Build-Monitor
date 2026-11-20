/*! For license information please see 6ndy1f.110.9f1e06b0.chunk.js.LICENSE.txt */
export const id = 110;
export const ids = [110];
export const modules = {
  5898: function(kk, Fk, Bk) {
    var Rk;
    ! function() {
      var tk, ak = 1e9,
        Xk = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        bk = !0,
        wk = "[DecimalError] ",
        dk = wk + "Invalid argument: ",
        sk = wk + "Exponent out of range: ",
        Vk = Math.floor,
        Jk = Math.pow,
        Ak = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        ek = 1e7,
        yk = 9007199254740991,
        fk = Vk(1286742750677284.5),
        mk = {};

      function Wk(kk, Fk) {
        var Bk, Rk, tk, ak, Xk, wk, dk, sk, Vk = kk.constructor,
          Jk = Vk.precision;
        if (!kk.s || !Fk.s) return Fk.s || (Fk = new Vk(kk)), bk ? uk(Fk, Jk) : Fk;
        if (dk = kk.d, sk = Fk.d, Xk = kk.e, tk = Fk.e, dk = dk.slice(), ak = Xk - tk) {
          for (ak < 0 ? (Rk = dk, ak = -ak, wk = sk.length) : (Rk = sk, tk = Xk, wk = dk.length), ak > (wk = (Xk = Math.ceil(Jk / 7)) > wk ? Xk + 1 : wk + 1) && (ak = wk, Rk.length = 1), Rk.reverse(); ak--;) Rk.push(0);
          Rk.reverse()
        }
        for ((wk = dk.length) - (ak = sk.length) < 0 && (ak = wk, Rk = sk, sk = dk, dk = Rk), Bk = 0; ak;) Bk = (dk[--ak] = dk[ak] + sk[ak] + Bk) / ek | 0, dk[ak] %= ek;
        for (Bk && (dk.unshift(Bk), ++tk), wk = dk.length; 0 == dk[--wk];) dk.pop();
        return Fk.d = dk, Fk.e = tk, bk ? uk(Fk, Jk) : Fk
      }

      function vk(kk, Fk, Bk) {
        if (kk !== ~~kk || kk < Fk || kk > Bk) throw Error(dk + kk)
      }

      function ik(kk) {
        var Fk, Bk, Rk, tk = kk.length - 1,
          ak = "",
          Xk = kk[0];
        if (tk > 0) {
          for (ak += Xk, Fk = 1; Fk < tk; Fk++)(Bk = 7 - (Rk = kk[Fk] + "").length) && (ak += Sk(Bk)), ak += Rk;
          (Bk = 7 - (Rk = (Xk = kk[Fk]) + "").length) && (ak += Sk(Bk))
        } else if (0 === Xk) return "0";
        for (; Xk % 10 === 0;) Xk /= 10;
        return ak + Xk
      }
      mk.absoluteValue = mk.abs = function() {
        var kk = new this.constructor(this);
        return kk.s && (kk.s = 1), kk
      }, mk.comparedTo = mk.cmp = function(kk) {
        var Fk, Bk, Rk, tk, ak = this;
        if (kk = new ak.constructor(kk), ak.s !== kk.s) return ak.s || -kk.s;
        if (ak.e !== kk.e) return ak.e > kk.e ^ ak.s < 0 ? 1 : -1;
        for (Fk = 0, Bk = (Rk = ak.d.length) < (tk = kk.d.length) ? Rk : tk; Fk < Bk; ++Fk)
          if (ak.d[Fk] !== kk.d[Fk]) return ak.d[Fk] > kk.d[Fk] ^ ak.s < 0 ? 1 : -1;
        return Rk === tk ? 0 : Rk > tk ^ ak.s < 0 ? 1 : -1
      }, mk.decimalPlaces = mk.dp = function() {
        var kk = this,
          Fk = kk.d.length - 1,
          Bk = 7 * (Fk - kk.e);
        if (Fk = kk.d[Fk])
          for (; Fk % 10 == 0; Fk /= 10) Bk--;
        return Bk < 0 ? 0 : Bk
      }, mk.dividedBy = mk.div = function(kk) {
        return Yk(this, new this.constructor(kk))
      }, mk.dividedToIntegerBy = mk.idiv = function(kk) {
        var Fk = this.constructor;
        return uk(Yk(this, new Fk(kk), 0, 1), Fk.precision)
      }, mk.equals = mk.eq = function(kk) {
        return !this.cmp(kk)
      }, mk.exponent = function() {
        return Ok(this)
      }, mk.greaterThan = mk.gt = function(kk) {
        return this.cmp(kk) > 0
      }, mk.greaterThanOrEqualTo = mk.gte = function(kk) {
        return this.cmp(kk) >= 0
      }, mk.isInteger = mk.isint = function() {
        return this.e > this.d.length - 2
      }, mk.isNegative = mk.isneg = function() {
        return this.s < 0
      }, mk.isPositive = mk.ispos = function() {
        return this.s > 0
      }, mk.isZero = function() {
        return 0 === this.s
      }, mk.lessThan = mk.lt = function(kk) {
        return this.cmp(kk) < 0
      }, mk.lessThanOrEqualTo = mk.lte = function(kk) {
        return this.cmp(kk) < 1
      }, mk.logarithm = mk.log = function(kk) {
        var Fk, Bk = this,
          Rk = Bk.constructor,
          ak = Rk.precision,
          Xk = ak + 5;
        if (void 0 === kk) kk = new Rk(10);
        else if ((kk = new Rk(kk)).s < 1 || kk.eq(tk)) throw Error(wk + "NaN");
        if (Bk.s < 1) throw Error(wk + (Bk.s ? "NaN" : "-Infinity"));
        return Bk.eq(tk) ? new Rk(0) : (bk = !1, Fk = Yk(Nk(Bk, Xk), Nk(kk, Xk), Xk), bk = !0, uk(Fk, ak))
      }, mk.minus = mk.sub = function(kk) {
        var Fk = this;
        return kk = new Fk.constructor(kk), Fk.s == kk.s ? Mk(Fk, kk) : Wk(Fk, (kk.s = -kk.s, kk))
      }, mk.modulo = mk.mod = function(kk) {
        var Fk, Bk = this,
          Rk = Bk.constructor,
          tk = Rk.precision;
        if (!(kk = new Rk(kk)).s) throw Error(wk + "NaN");
        return Bk.s ? (bk = !1, Fk = Yk(Bk, kk, 0, 1).times(kk), bk = !0, Bk.minus(Fk)) : uk(new Rk(Bk), tk)
      }, mk.naturalExponential = mk.exp = function() {
        return Lk(this)
      }, mk.naturalLogarithm = mk.ln = function() {
        return Nk(this)
      }, mk.negated = mk.neg = function() {
        var kk = new this.constructor(this);
        return kk.s = -kk.s || 0, kk
      }, mk.plus = mk.add = function(kk) {
        var Fk = this;
        return kk = new Fk.constructor(kk), Fk.s == kk.s ? Wk(Fk, kk) : Mk(Fk, (kk.s = -kk.s, kk))
      }, mk.precision = mk.sd = function(kk) {
        var Fk, Bk, Rk, tk = this;
        if (void 0 !== kk && kk !== !!kk && 1 !== kk && 0 !== kk) throw Error(dk + kk);
        if (Fk = Ok(tk) + 1, Bk = 7 * (Rk = tk.d.length - 1) + 1, Rk = tk.d[Rk]) {
          for (; Rk % 10 == 0; Rk /= 10) Bk--;
          for (Rk = tk.d[0]; Rk >= 10; Rk /= 10) Bk++
        }
        return kk && Fk > Bk ? Fk : Bk
      }, mk.squareRoot = mk.sqrt = function() {
        var kk, Fk, Bk, Rk, tk, ak, Xk, dk = this,
          sk = dk.constructor;
        if (dk.s < 1) {
          if (!dk.s) return new sk(0);
          throw Error(wk + "NaN")
        }
        for (kk = Ok(dk), bk = !1, 0 == (tk = Math.sqrt(+dk)) || tk == 1 / 0 ? (((Fk = ik(dk.d)).length + kk) % 2 == 0 && (Fk += "0"), tk = Math.sqrt(Fk), kk = Vk((kk + 1) / 2) - (kk < 0 || kk % 2), Rk = new sk(Fk = tk == 1 / 0 ? "1e" + kk : (Fk = tk.toExponential()).slice(0, Fk.indexOf("e") + 1) + kk)) : Rk = new sk(tk.toString()), tk = Xk = (Bk = sk.precision) + 3;;)
          if (Rk = (ak = Rk).plus(Yk(dk, ak, Xk + 2)).times(.5), ik(ak.d).slice(0, Xk) === (Fk = ik(Rk.d)).slice(0, Xk)) {
            if (Fk = Fk.slice(Xk - 3, Xk + 1), tk == Xk && "4999" == Fk) {
              if (uk(ak, Bk + 1, 0), ak.times(ak).eq(dk)) {
                Rk = ak;
                break
              }
            } else if ("9999" != Fk) break;
            Xk += 4
          } return bk = !0, uk(Rk, Bk)
      }, mk.times = mk.mul = function(kk) {
        var Fk, Bk, Rk, tk, ak, Xk, wk, dk, sk, Vk = this,
          Jk = Vk.constructor,
          Ak = Vk.d,
          yk = (kk = new Jk(kk)).d;
        if (!Vk.s || !kk.s) return new Jk(0);
        for (kk.s *= Vk.s, Bk = Vk.e + kk.e, (dk = Ak.length) < (sk = yk.length) && (ak = Ak, Ak = yk, yk = ak, Xk = dk, dk = sk, sk = Xk), ak = [], Rk = Xk = dk + sk; Rk--;) ak.push(0);
        for (Rk = sk; --Rk >= 0;) {
          for (Fk = 0, tk = dk + Rk; tk > Rk;) wk = ak[tk] + yk[Rk] * Ak[tk - Rk - 1] + Fk, ak[tk--] = wk % ek | 0, Fk = wk / ek | 0;
          ak[tk] = (ak[tk] + Fk) % ek | 0
        }
        for (; !ak[--Xk];) ak.pop();
        return Fk ? ++Bk : ak.shift(), kk.d = ak, kk.e = Bk, bk ? uk(kk, Jk.precision) : kk
      }, mk.toDecimalPlaces = mk.todp = function(kk, Fk) {
        var Bk = this,
          Rk = Bk.constructor;
        return Bk = new Rk(Bk), void 0 === kk ? Bk : (vk(kk, 0, ak), void 0 === Fk ? Fk = Rk.rounding : vk(Fk, 0, 8), uk(Bk, kk + Ok(Bk) + 1, Fk))
      }, mk.toExponential = function(kk, Fk) {
        var Bk, Rk = this,
          tk = Rk.constructor;
        return void 0 === kk ? Bk = gk(Rk, !0) : (vk(kk, 0, ak), void 0 === Fk ? Fk = tk.rounding : vk(Fk, 0, 8), Bk = gk(Rk = uk(new tk(Rk), kk + 1, Fk), !0, kk + 1)), Bk
      }, mk.toFixed = function(kk, Fk) {
        var Bk, Rk, tk = this,
          Xk = tk.constructor;
        return void 0 === kk ? gk(tk) : (vk(kk, 0, ak), void 0 === Fk ? Fk = Xk.rounding : vk(Fk, 0, 8), Bk = gk((Rk = uk(new Xk(tk), kk + Ok(tk) + 1, Fk)).abs(), !1, kk + Ok(Rk) + 1), tk.isneg() && !tk.isZero() ? "-" + Bk : Bk)
      }, mk.toInteger = mk.toint = function() {
        var kk = this,
          Fk = kk.constructor;
        return uk(new Fk(kk), Ok(kk) + 1, Fk.rounding)
      }, mk.toNumber = function() {
        return +this
      }, mk.toPower = mk.pow = function(kk) {
        var Fk, Bk, Rk, ak, Xk, dk, sk = this,
          Jk = sk.constructor,
          Ak = +(kk = new Jk(kk));
        if (!kk.s) return new Jk(tk);
        if (!(sk = new Jk(sk)).s) {
          if (kk.s < 1) throw Error(wk + "Infinity");
          return sk
        }
        if (sk.eq(tk)) return sk;
        if (Rk = Jk.precision, kk.eq(tk)) return uk(sk, Rk);
        if (dk = (Fk = kk.e) >= (Bk = kk.d.length - 1), Xk = sk.s, dk) {
          if ((Bk = Ak < 0 ? -Ak : Ak) <= yk) {
            for (ak = new Jk(tk), Fk = Math.ceil(Rk / 7 + 4), bk = !1; Bk % 2 && Uk((ak = ak.times(sk)).d, Fk), 0 !== (Bk = Vk(Bk / 2));) Uk((sk = sk.times(sk)).d, Fk);
            return bk = !0, kk.s < 0 ? new Jk(tk).div(ak) : uk(ak, Rk)
          }
        } else if (Xk < 0) throw Error(wk + "NaN");
        return Xk = Xk < 0 && 1 & kk.d[Math.max(Fk, Bk)] ? -1 : 1, sk.s = 1, bk = !1, ak = kk.times(Nk(sk, Rk + 12)), bk = !0, (ak = Lk(ak)).s = Xk, ak
      }, mk.toPrecision = function(kk, Fk) {
        var Bk, Rk, tk = this,
          Xk = tk.constructor;
        return void 0 === kk ? Rk = gk(tk, (Bk = Ok(tk)) <= Xk.toExpNeg || Bk >= Xk.toExpPos) : (vk(kk, 1, ak), void 0 === Fk ? Fk = Xk.rounding : vk(Fk, 0, 8), Rk = gk(tk = uk(new Xk(tk), kk, Fk), kk <= (Bk = Ok(tk)) || Bk <= Xk.toExpNeg, kk)), Rk
      }, mk.toSignificantDigits = mk.tosd = function(kk, Fk) {
        var Bk = this.constructor;
        return void 0 === kk ? (kk = Bk.precision, Fk = Bk.rounding) : (vk(kk, 1, ak), void 0 === Fk ? Fk = Bk.rounding : vk(Fk, 0, 8)), uk(new Bk(this), kk, Fk)
      }, mk.toString = mk.valueOf = mk.val = mk.toJSON = function() {
        var kk = this,
          Fk = Ok(kk),
          Bk = kk.constructor;
        return gk(kk, Fk <= Bk.toExpNeg || Fk >= Bk.toExpPos)
      };
      var Yk = function() {
        function kk(kk, Fk) {
          var Bk, Rk = 0,
            tk = kk.length;
          for (kk = kk.slice(); tk--;) Bk = kk[tk] * Fk + Rk, kk[tk] = Bk % ek | 0, Rk = Bk / ek | 0;
          return Rk && kk.unshift(Rk), kk
        }

        function Fk(kk, Fk, Bk, Rk) {
          var tk, ak;
          if (Bk != Rk) ak = Bk > Rk ? 1 : -1;
          else
            for (tk = ak = 0; tk < Bk; tk++)
              if (kk[tk] != Fk[tk]) {
                ak = kk[tk] > Fk[tk] ? 1 : -1;
                break
              } return ak
        }

        function Bk(kk, Fk, Bk) {
          for (var Rk = 0; Bk--;) kk[Bk] -= Rk, Rk = kk[Bk] < Fk[Bk] ? 1 : 0, kk[Bk] = Rk * ek + kk[Bk] - Fk[Bk];
          for (; !kk[0] && kk.length > 1;) kk.shift()
        }
        return function(Rk, tk, ak, Xk) {
          var bk, dk, sk, Vk, Jk, Ak, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ek, Sk, Nk, Hk, Mk = Rk.constructor,
            gk = Rk.s == tk.s ? 1 : -1,
            Uk = Rk.d,
            ck = tk.d;
          if (!Rk.s) return new Mk(Rk);
          if (!tk.s) throw Error(wk + "Division by zero");
          for (dk = Rk.e - tk.e, Nk = ck.length, Ek = Uk.length, fk = (yk = new Mk(gk)).d = [], sk = 0; ck[sk] == (Uk[sk] || 0);) ++sk;
          if (ck[sk] > (Uk[sk] || 0) && --dk, (ik = null == ak ? ak = Mk.precision : Xk ? ak + (Ok(Rk) - Ok(tk)) + 1 : ak) < 0) return new Mk(0);
          if (ik = ik / 7 + 2 | 0, sk = 0, 1 == Nk)
            for (Vk = 0, ck = ck[0], ik++;
              (sk < Ek || Vk) && ik--; sk++) Yk = Vk * ek + (Uk[sk] || 0), fk[sk] = Yk / ck | 0, Vk = Yk % ck | 0;
          else {
            for ((Vk = ek / (ck[0] + 1) | 0) > 1 && (ck = kk(ck, Vk), Uk = kk(Uk, Vk), Nk = ck.length, Ek = Uk.length), Lk = Nk, Wk = (mk = Uk.slice(0, Nk)).length; Wk < Nk;) mk[Wk++] = 0;
            (Hk = ck.slice()).unshift(0), Sk = ck[0], ck[1] >= ek / 2 && ++Sk;
            do {
              Vk = 0, (bk = Fk(ck, mk, Nk, Wk)) < 0 ? (vk = mk[0], Nk != Wk && (vk = vk * ek + (mk[1] || 0)), (Vk = vk / Sk | 0) > 1 ? (Vk >= ek && (Vk = ek - 1), 1 == (bk = Fk(Jk = kk(ck, Vk), mk, Ak = Jk.length, Wk = mk.length)) && (Vk--, Bk(Jk, Nk < Ak ? Hk : ck, Ak))) : (0 == Vk && (bk = Vk = 1), Jk = ck.slice()), (Ak = Jk.length) < Wk && Jk.unshift(0), Bk(mk, Jk, Wk), -1 == bk && (bk = Fk(ck, mk, Nk, Wk = mk.length)) < 1 && (Vk++, Bk(mk, Nk < Wk ? Hk : ck, Wk)), Wk = mk.length) : 0 === bk && (Vk++, mk = [0]), fk[sk++] = Vk, bk && mk[0] ? mk[Wk++] = Uk[Lk] || 0 : (mk = [Uk[Lk]], Wk = 1)
            } while ((Lk++ < Ek || void 0 !== mk[0]) && ik--)
          }
          return fk[0] || fk.shift(), yk.e = dk, uk(yk, Xk ? ak + Ok(yk) + 1 : ak)
        }
      }();

      function Lk(kk, Fk) {
        var Bk, Rk, ak, Xk, wk, dk = 0,
          Vk = 0,
          Ak = kk.constructor,
          ek = Ak.precision;
        if (Ok(kk) > 16) throw Error(sk + Ok(kk));
        if (!kk.s) return new Ak(tk);
        for (null == Fk ? (bk = !1, wk = ek) : wk = Fk, Xk = new Ak(.03125); kk.abs().gte(.1);) kk = kk.times(Xk), Vk += 5;
        for (wk += Math.log(Jk(2, Vk)) / Math.LN10 * 2 + 5 | 0, Bk = Rk = ak = new Ak(tk), Ak.precision = wk;;) {
          if (Rk = uk(Rk.times(kk), wk), Bk = Bk.times(++dk), ik((Xk = ak.plus(Yk(Rk, Bk, wk))).d).slice(0, wk) === ik(ak.d).slice(0, wk)) {
            for (; Vk--;) ak = uk(ak.times(ak), wk);
            return Ak.precision = ek, null == Fk ? (bk = !0, uk(ak, ek)) : ak
          }
          ak = Xk
        }
      }

      function Ok(kk) {
        for (var Fk = 7 * kk.e, Bk = kk.d[0]; Bk >= 10; Bk /= 10) Fk++;
        return Fk
      }

      function Ek(kk, Fk, Bk) {
        if (Fk > kk.LN10.sd()) throw bk = !0, Bk && (kk.precision = Bk), Error(wk + "LN10 precision limit exceeded");
        return uk(new kk(kk.LN10), Fk)
      }

      function Sk(kk) {
        for (var Fk = ""; kk--;) Fk += "0";
        return Fk
      }

      function Nk(kk, Fk) {
        var Bk, Rk, ak, Xk, dk, sk, Vk, Jk, Ak, ek = 1,
          yk = kk,
          fk = yk.d,
          mk = yk.constructor,
          Wk = mk.precision;
        if (yk.s < 1) throw Error(wk + (yk.s ? "NaN" : "-Infinity"));
        if (yk.eq(tk)) return new mk(0);
        if (null == Fk ? (bk = !1, Jk = Wk) : Jk = Fk, yk.eq(10)) return null == Fk && (bk = !0), Ek(mk, Jk);
        if (Jk += 10, mk.precision = Jk, Rk = (Bk = ik(fk)).charAt(0), Xk = Ok(yk), !(Math.abs(Xk) < 15e14)) return Vk = Ek(mk, Jk + 2, Wk).times(Xk + ""), yk = Nk(new mk(Rk + "." + Bk.slice(1)), Jk - 10).plus(Vk), mk.precision = Wk, null == Fk ? (bk = !0, uk(yk, Wk)) : yk;
        for (; Rk < 7 && 1 != Rk || 1 == Rk && Bk.charAt(1) > 3;) Rk = (Bk = ik((yk = yk.times(kk)).d)).charAt(0), ek++;
        for (Xk = Ok(yk), Rk > 1 ? (yk = new mk("0." + Bk), Xk++) : yk = new mk(Rk + "." + Bk.slice(1)), sk = dk = yk = Yk(yk.minus(tk), yk.plus(tk), Jk), Ak = uk(yk.times(yk), Jk), ak = 3;;) {
          if (dk = uk(dk.times(Ak), Jk), ik((Vk = sk.plus(Yk(dk, new mk(ak), Jk))).d).slice(0, Jk) === ik(sk.d).slice(0, Jk)) return sk = sk.times(2), 0 !== Xk && (sk = sk.plus(Ek(mk, Jk + 2, Wk).times(Xk + ""))), sk = Yk(sk, new mk(ek), Jk), mk.precision = Wk, null == Fk ? (bk = !0, uk(sk, Wk)) : sk;
          sk = Vk, ak += 2
        }
      }

      function Hk(kk, Fk) {
        var Bk, Rk, tk;
        for ((Bk = Fk.indexOf(".")) > -1 && (Fk = Fk.replace(".", "")), (Rk = Fk.search(/e/i)) > 0 ? (Bk < 0 && (Bk = Rk), Bk += +Fk.slice(Rk + 1), Fk = Fk.substring(0, Rk)) : Bk < 0 && (Bk = Fk.length), Rk = 0; 48 === Fk.charCodeAt(Rk);) ++Rk;
        for (tk = Fk.length; 48 === Fk.charCodeAt(tk - 1);) --tk;
        if (Fk = Fk.slice(Rk, tk)) {
          if (tk -= Rk, Bk = Bk - Rk - 1, kk.e = Vk(Bk / 7), kk.d = [], Rk = (Bk + 1) % 7, Bk < 0 && (Rk += 7), Rk < tk) {
            for (Rk && kk.d.push(+Fk.slice(0, Rk)), tk -= 7; Rk < tk;) kk.d.push(+Fk.slice(Rk, Rk += 7));
            Rk = 7 - (Fk = Fk.slice(Rk)).length
          } else Rk -= tk;
          for (; Rk--;) Fk += "0";
          if (kk.d.push(+Fk), bk && (kk.e > fk || kk.e < -fk)) throw Error(sk + Bk)
        } else kk.s = 0, kk.e = 0, kk.d = [0];
        return kk
      }

      function uk(kk, Fk, Bk) {
        var Rk, tk, ak, Xk, wk, dk, Ak, yk, mk = kk.d;
        for (Xk = 1, ak = mk[0]; ak >= 10; ak /= 10) Xk++;
        if ((Rk = Fk - Xk) < 0) Rk += 7, tk = Fk, Ak = mk[yk = 0];
        else {
          if ((yk = Math.ceil((Rk + 1) / 7)) >= (ak = mk.length)) return kk;
          for (Ak = ak = mk[yk], Xk = 1; ak >= 10; ak /= 10) Xk++;
          tk = (Rk %= 7) - 7 + Xk
        }
        if (void 0 !== Bk && (wk = Ak / (ak = Jk(10, Xk - tk - 1)) % 10 | 0, dk = Fk < 0 || void 0 !== mk[yk + 1] || Ak % ak, dk = Bk < 4 ? (wk || dk) && (0 == Bk || Bk == (kk.s < 0 ? 3 : 2)) : wk > 5 || 5 == wk && (4 == Bk || dk || 6 == Bk && (Rk > 0 ? tk > 0 ? Ak / Jk(10, Xk - tk) : 0 : mk[yk - 1]) % 10 & 1 || Bk == (kk.s < 0 ? 8 : 7))), Fk < 1 || !mk[0]) return dk ? (ak = Ok(kk), mk.length = 1, Fk = Fk - ak - 1, mk[0] = Jk(10, (7 - Fk % 7) % 7), kk.e = Vk(-Fk / 7) || 0) : (mk.length = 1, mk[0] = kk.e = kk.s = 0), kk;
        if (0 == Rk ? (mk.length = yk, ak = 1, yk--) : (mk.length = yk + 1, ak = Jk(10, 7 - Rk), mk[yk] = tk > 0 ? (Ak / Jk(10, Xk - tk) % Jk(10, tk) | 0) * ak : 0), dk)
          for (;;) {
            if (0 == yk) {
              (mk[0] += ak) == ek && (mk[0] = 1, ++kk.e);
              break
            }
            if (mk[yk] += ak, mk[yk] != ek) break;
            mk[yk--] = 0, ak = 1
          }
        for (Rk = mk.length; 0 === mk[--Rk];) mk.pop();
        if (bk && (kk.e > fk || kk.e < -fk)) throw Error(sk + Ok(kk));
        return kk
      }

      function Mk(kk, Fk) {
        var Bk, Rk, tk, ak, Xk, wk, dk, sk, Vk, Jk, Ak = kk.constructor,
          yk = Ak.precision;
        if (!kk.s || !Fk.s) return Fk.s ? Fk.s = -Fk.s : Fk = new Ak(kk), bk ? uk(Fk, yk) : Fk;
        if (dk = kk.d, Jk = Fk.d, Rk = Fk.e, sk = kk.e, dk = dk.slice(), Xk = sk - Rk) {
          for ((Vk = Xk < 0) ? (Bk = dk, Xk = -Xk, wk = Jk.length) : (Bk = Jk, Rk = sk, wk = dk.length), Xk > (tk = Math.max(Math.ceil(yk / 7), wk) + 2) && (Xk = tk, Bk.length = 1), Bk.reverse(), tk = Xk; tk--;) Bk.push(0);
          Bk.reverse()
        } else {
          for ((Vk = (tk = dk.length) < (wk = Jk.length)) && (wk = tk), tk = 0; tk < wk; tk++)
            if (dk[tk] != Jk[tk]) {
              Vk = dk[tk] < Jk[tk];
              break
            } Xk = 0
        }
        for (Vk && (Bk = dk, dk = Jk, Jk = Bk, Fk.s = -Fk.s), wk = dk.length, tk = Jk.length - wk; tk > 0; --tk) dk[wk++] = 0;
        for (tk = Jk.length; tk > Xk;) {
          if (dk[--tk] < Jk[tk]) {
            for (ak = tk; ak && 0 === dk[--ak];) dk[ak] = ek - 1;
            --dk[ak], dk[tk] += ek
          }
          dk[tk] -= Jk[tk]
        }
        for (; 0 === dk[--wk];) dk.pop();
        for (; 0 === dk[0]; dk.shift()) --Rk;
        return dk[0] ? (Fk.d = dk, Fk.e = Rk, bk ? uk(Fk, yk) : Fk) : new Ak(0)
      }

      function gk(kk, Fk, Bk) {
        var Rk, tk = Ok(kk),
          ak = ik(kk.d),
          Xk = ak.length;
        return Fk ? (Bk && (Rk = Bk - Xk) > 0 ? ak = ak.charAt(0) + "." + ak.slice(1) + Sk(Rk) : Xk > 1 && (ak = ak.charAt(0) + "." + ak.slice(1)), ak = ak + (tk < 0 ? "e" : "e+") + tk) : tk < 0 ? (ak = "0." + Sk(-tk - 1) + ak, Bk && (Rk = Bk - Xk) > 0 && (ak += Sk(Rk))) : tk >= Xk ? (ak += Sk(tk + 1 - Xk), Bk && (Rk = Bk - tk - 1) > 0 && (ak = ak + "." + Sk(Rk))) : ((Rk = tk + 1) < Xk && (ak = ak.slice(0, Rk) + "." + ak.slice(Rk)), Bk && (Rk = Bk - Xk) > 0 && (tk + 1 === Xk && (ak += "."), ak += Sk(Rk))), kk.s < 0 ? "-" + ak : ak
      }

      function Uk(kk, Fk) {
        if (kk.length > Fk) return kk.length = Fk, !0
      }

      function ck(kk) {
        if (!kk || "object" !== typeof kk) throw Error(wk + "Object expected");
        var Fk, Bk, Rk, tk = ["precision", 1, ak, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (Fk = 0; Fk < tk.length; Fk += 3)
          if (void 0 !== (Rk = kk[Bk = tk[Fk]])) {
            if (!(Vk(Rk) === Rk && Rk >= tk[Fk + 1] && Rk <= tk[Fk + 2])) throw Error(dk + Bk + ": " + Rk);
            this[Bk] = Rk
          } if (void 0 !== (Rk = kk[Bk = "LN10"])) {
          if (Rk != Math.LN10) throw Error(dk + Bk + ": " + Rk);
          this[Bk] = new this(Rk)
        }
        return this
      }
      Xk = function kk(Fk) {
        var Bk, Rk, tk;

        function ak(kk) {
          var Fk = this;
          if (!(Fk instanceof ak)) return new ak(kk);
          if (Fk.constructor = ak, kk instanceof ak) return Fk.s = kk.s, Fk.e = kk.e, void(Fk.d = (kk = kk.d) ? kk.slice() : kk);
          if ("number" === typeof kk) {
            if (0 * kk !== 0) throw Error(dk + kk);
            if (kk > 0) Fk.s = 1;
            else {
              if (!(kk < 0)) return Fk.s = 0, Fk.e = 0, void(Fk.d = [0]);
              kk = -kk, Fk.s = -1
            }
            return kk === ~~kk && kk < 1e7 ? (Fk.e = 0, void(Fk.d = [kk])) : Hk(Fk, kk.toString())
          }
          if ("string" !== typeof kk) throw Error(dk + kk);
          if (45 === kk.charCodeAt(0) ? (kk = kk.slice(1), Fk.s = -1) : Fk.s = 1, !Ak.test(kk)) throw Error(dk + kk);
          Hk(Fk, kk)
        }
        if (ak.prototype = mk, ak.ROUND_UP = 0, ak.ROUND_DOWN = 1, ak.ROUND_CEIL = 2, ak.ROUND_FLOOR = 3, ak.ROUND_HALF_UP = 4, ak.ROUND_HALF_DOWN = 5, ak.ROUND_HALF_EVEN = 6, ak.ROUND_HALF_CEIL = 7, ak.ROUND_HALF_FLOOR = 8, ak.clone = kk, ak.config = ak.set = ck, void 0 === Fk && (Fk = {}), Fk)
          for (tk = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Bk = 0; Bk < tk.length;) Fk.hasOwnProperty(Rk = tk[Bk++]) || (Fk[Rk] = this[Rk]);
        return ak.config(Fk), ak
      }(Xk), Xk.default = Xk.Decimal = Xk, tk = new Xk(1), void 0 === (Rk = function() {
        return Xk
      }.call(Fk, Bk, Fk, kk)) || (kk.exports = Rk)
    }()
  },
  5453: (kk, Fk, Bk) => {
    var Rk = Bk(4926)(Bk(4775), "DataView");
    kk.exports = Rk
  },
  4915: (kk, Fk, Bk) => {
    var Rk = Bk(4920),
      tk = Bk(4966),
      ak = Bk(4974),
      Xk = Bk(4976),
      bk = Bk(4985);

    function wk(kk) {
      var Fk = -1,
        Bk = null == kk ? 0 : kk.length;
      for (this.clear(); ++Fk < Bk;) {
        var Rk = kk[Fk];
        this.set(Rk[0], Rk[1])
      }
    }
    wk.prototype.clear = Rk, wk.prototype.delete = tk, wk.prototype.get = ak, wk.prototype.has = Xk, wk.prototype.set = bk, kk.exports = wk
  },
  4990: (kk, Fk, Bk) => {
    var Rk = Bk(4999),
      tk = Bk(5006),
      ak = Bk(5019),
      Xk = Bk(5028),
      bk = Bk(5032);

    function wk(kk) {
      var Fk = -1,
        Bk = null == kk ? 0 : kk.length;
      for (this.clear(); ++Fk < Bk;) {
        var Rk = kk[Fk];
        this.set(Rk[0], Rk[1])
      }
    }
    wk.prototype.clear = Rk, wk.prototype.delete = tk, wk.prototype.get = ak, wk.prototype.has = Xk, wk.prototype.set = bk, kk.exports = wk
  },
  5036: (kk, Fk, Bk) => {
    var Rk = Bk(4926)(Bk(4775), "Map");
    kk.exports = Rk
  },
  4903: (kk, Fk, Bk) => {
    var Rk = Bk(4906),
      tk = Bk(5043),
      ak = Bk(5058),
      Xk = Bk(5060),
      bk = Bk(5068);

    function wk(kk) {
      var Fk = -1,
        Bk = null == kk ? 0 : kk.length;
      for (this.clear(); ++Fk < Bk;) {
        var Rk = kk[Fk];
        this.set(Rk[0], Rk[1])
      }
    }
    wk.prototype.clear = Rk, wk.prototype.delete = tk, wk.prototype.get = ak, wk.prototype.has = Xk, wk.prototype.set = bk, kk.exports = wk
  },
  5462: (kk, Fk, Bk) => {
    var Rk = Bk(4926)(Bk(4775), "Promise");
    kk.exports = Rk
  },
  5469: (kk, Fk, Bk) => {
    var Rk = Bk(4926)(Bk(4775), "Set");
    kk.exports = Rk
  },
  5293: (kk, Fk, Bk) => {
    var Rk = Bk(4903),
      tk = Bk(5300),
      ak = Bk(5303);

    function Xk(kk) {
      var Fk = -1,
        Bk = null == kk ? 0 : kk.length;
      for (this.__data__ = new Rk; ++Fk < Bk;) this.add(kk[Fk])
    }
    Xk.prototype.add = Xk.prototype.push = tk, Xk.prototype.has = ak, kk.exports = Xk
  },
  5243: (kk, Fk, Bk) => {
    var Rk = Bk(4990),
      tk = Bk(5251),
      ak = Bk(5255),
      Xk = Bk(5261),
      bk = Bk(5267),
      wk = Bk(5275);

    function dk(kk) {
      var Fk = this.__data__ = new Rk(kk);
      this.size = Fk.size
    }
    dk.prototype.clear = tk, dk.prototype.delete = ak, dk.prototype.get = Xk, dk.prototype.has = bk, dk.prototype.set = wk, kk.exports = dk
  },
  4812: (kk, Fk, Bk) => {
    var Rk = Bk(4775).Symbol;
    kk.exports = Rk
  },
  5323: (kk, Fk, Bk) => {
    var Rk = Bk(4775).Uint8Array;
    kk.exports = Rk
  },
  5474: (kk, Fk, Bk) => {
    var Rk = Bk(4926)(Bk(4775), "WeakMap");
    kk.exports = Rk
  },
  5596: kk => {
    kk.exports = function(kk, Fk, Bk) {
      switch (Bk.length) {
        case 0:
          return kk.call(Fk);
        case 1:
          return kk.call(Fk, Bk[0]);
        case 2:
          return kk.call(Fk, Bk[0], Bk[1]);
        case 3:
          return kk.call(Fk, Bk[0], Bk[1], Bk[2])
      }
      return kk.apply(Fk, Bk)
    }
  },
  5963: kk => {
    kk.exports = function(kk, Fk) {
      for (var Bk = -1, Rk = null == kk ? 0 : kk.length; ++Bk < Rk;)
        if (!Fk(kk[Bk], Bk, kk)) return !1;
      return !0
    }
  },
  5358: kk => {
    kk.exports = function(kk, Fk) {
      for (var Bk = -1, Rk = null == kk ? 0 : kk.length, tk = 0, ak = []; ++Bk < Rk;) {
        var Xk = kk[Bk];
        Fk(Xk, Bk, kk) && (ak[tk++] = Xk)
      }
      return ak
    }
  },
  5686: (kk, Fk, Bk) => {
    var Rk = Bk(5690);
    kk.exports = function(kk, Fk) {
      return !!(null == kk ? 0 : kk.length) && Rk(kk, Fk, 0) > -1
    }
  },
  5702: kk => {
    kk.exports = function(kk, Fk, Bk) {
      for (var Rk = -1, tk = null == kk ? 0 : kk.length; ++Rk < tk;)
        if (Bk(Fk, kk[Rk])) return !0;
      return !1
    }
  },
  5376: (kk, Fk, Bk) => {
    var Rk = Bk(5385),
      tk = Bk(5217),
      ak = Bk(4843),
      Xk = Bk(5394),
      bk = Bk(5184),
      wk = Bk(5403),
      dk = Object.prototype.hasOwnProperty;
    kk.exports = function(kk, Fk) {
      var Bk = ak(kk),
        sk = !Bk && tk(kk),
        Vk = !Bk && !sk && Xk(kk),
        Jk = !Bk && !sk && !Vk && wk(kk),
        Ak = Bk || sk || Vk || Jk,
        ek = Ak ? Rk(kk.length, String) : [],
        yk = ek.length;
      for (var fk in kk) !Fk && !dk.call(kk, fk) || Ak && ("length" == fk || Vk && ("offset" == fk || "parent" == fk) || Jk && ("buffer" == fk || "byteLength" == fk || "byteOffset" == fk) || bk(fk, yk)) || ek.push(fk);
      return ek
    }
  },
  5089: kk => {
    kk.exports = function(kk, Fk) {
      for (var Bk = -1, Rk = null == kk ? 0 : kk.length, tk = Array(Rk); ++Bk < Rk;) tk[Bk] = Fk(kk[Bk], Bk, kk);
      return tk
    }
  },
  5205: kk => {
    kk.exports = function(kk, Fk) {
      for (var Bk = -1, Rk = Fk.length, tk = kk.length; ++Bk < Rk;) kk[tk + Bk] = Fk[Bk];
      return kk
    }
  },
  5305: kk => {
    kk.exports = function(kk, Fk) {
      for (var Bk = -1, Rk = null == kk ? 0 : kk.length; ++Bk < Rk;)
        if (Fk(kk[Bk], Bk, kk)) return !0;
      return !1
    }
  },
  5769: kk => {
    kk.exports = function(kk) {
      return kk.split("")
    }
  },
  5008: (kk, Fk, Bk) => {
    var Rk = Bk(5016);
    kk.exports = function(kk, Fk) {
      for (var Bk = kk.length; Bk--;)
        if (Rk(kk[Bk][0], Fk)) return Bk;
      return -1
    }
  },
  5955: (kk, Fk, Bk) => {
    var Rk = Bk(5623);
    kk.exports = function(kk, Fk, Bk) {
      "__proto__" == Fk && Rk ? Rk(kk, Fk, {
        configurable: !0,
        enumerable: !0,
        value: Bk,
        writable: !0
      }) : kk[Fk] = Bk
    }
  },
  5550: (kk, Fk, Bk) => {
    var Rk = Bk(5558),
      tk = Bk(5571)(Rk);
    kk.exports = tk
  },
  5971: (kk, Fk, Bk) => {
    var Rk = Bk(5550);
    kk.exports = function(kk, Fk) {
      var Bk = !0;
      return Rk(kk, (function(kk, Rk, tk) {
        return Bk = !!Fk(kk, Rk, tk)
      })), Bk
    }
  },
  5856: (kk, Fk, Bk) => {
    var Rk = Bk(4805);
    kk.exports = function(kk, Fk, Bk) {
      for (var tk = -1, ak = kk.length; ++tk < ak;) {
        var Xk = kk[tk],
          bk = Fk(Xk);
        if (null != bk && (void 0 === wk ? bk === bk && !Rk(bk) : Bk(bk, wk))) var wk = bk,
          dk = Xk
      }
      return dk
    }
  },
  5694: kk => {
    kk.exports = function(kk, Fk, Bk, Rk) {
      for (var tk = kk.length, ak = Bk + (Rk ? 1 : -1); Rk ? ak-- : ++ak < tk;)
        if (Fk(kk[ak], ak, kk)) return ak;
      return -1
    }
  },
  5201: (kk, Fk, Bk) => {
    var Rk = Bk(5205),
      tk = Bk(5212);
    kk.exports = function kk(Fk, Bk, ak, Xk, bk) {
      var wk = -1,
        dk = Fk.length;
      for (ak || (ak = tk), bk || (bk = []); ++wk < dk;) {
        var sk = Fk[wk];
        Bk > 0 && ak(sk) ? Bk > 1 ? kk(sk, Bk - 1, ak, Xk, bk) : Rk(bk, sk) : Xk || (bk[bk.length] = sk)
      }
      return bk
    }
  },
  5562: (kk, Fk, Bk) => {
    var Rk = Bk(5565)();
    kk.exports = Rk
  },
  5558: (kk, Fk, Bk) => {
    var Rk = Bk(5562),
      tk = Bk(5371);
    kk.exports = function(kk, Fk) {
      return kk && Rk(kk, Fk, tk)
    }
  },
  4865: (kk, Fk, Bk) => {
    var Rk = Bk(4873),
      tk = Bk(5094);
    kk.exports = function(kk, Fk) {
      for (var Bk = 0, ak = (Fk = Rk(Fk, kk)).length; null != kk && Bk < ak;) kk = kk[tk(Fk[Bk++])];
      return Bk && Bk == ak ? kk : void 0
    }
  },
  5346: (kk, Fk, Bk) => {
    var Rk = Bk(5205),
      tk = Bk(4843);
    kk.exports = function(kk, Fk, Bk) {
      var ak = Fk(kk);
      return tk(kk) ? ak : Rk(ak, Bk(kk))
    }
  },
  4808: (kk, Fk, Bk) => {
    var Rk = Bk(4812),
      tk = Bk(4815),
      ak = Bk(4819),
      Xk = Rk ? Rk.toStringTag : void 0;
    kk.exports = function(kk) {
      return null == kk ? void 0 === kk ? "[object Undefined]" : "[object Null]" : Xk && Xk in Object(kk) ? tk(kk) : ak(kk)
    }
  },
  5863: kk => {
    kk.exports = function(kk, Fk) {
      return kk > Fk
    }
  },
  5505: kk => {
    kk.exports = function(kk, Fk) {
      return null != kk && Fk in Object(kk)
    }
  },
  5690: (kk, Fk, Bk) => {
    var Rk = Bk(5694),
      tk = Bk(5697),
      ak = Bk(5700);
    kk.exports = function(kk, Fk, Bk) {
      return Fk === Fk ? ak(kk, Fk, Bk) : Rk(kk, tk, Bk)
    }
  },
  5221: (kk, Fk, Bk) => {
    var Rk = Bk(4808),
      tk = Bk(4823);
    kk.exports = function(kk) {
      return tk(kk) && "[object Arguments]" == Rk(kk)
    }
  },
  5282: (kk, Fk, Bk) => {
    var Rk = Bk(5288),
      tk = Bk(4823);
    kk.exports = function kk(Fk, Bk, ak, Xk, bk) {
      return Fk === Bk || (null == Fk || null == Bk || !tk(Fk) && !tk(Bk) ? Fk !== Fk && Bk !== Bk : Rk(Fk, Bk, ak, Xk, kk, bk))
    }
  },
  5288: (kk, Fk, Bk) => {
    var Rk = Bk(5243),
      tk = Bk(5290),
      ak = Bk(5316),
      Xk = Bk(5340),
      bk = Bk(5448),
      wk = Bk(4843),
      dk = Bk(5394),
      sk = Bk(5403),
      Vk = "[object Arguments]",
      Jk = "[object Array]",
      Ak = "[object Object]",
      ek = Object.prototype.hasOwnProperty;
    kk.exports = function(kk, Fk, Bk, yk, fk, mk) {
      var Wk = wk(kk),
        vk = wk(Fk),
        ik = Wk ? Jk : bk(kk),
        Yk = vk ? Jk : bk(Fk),
        Lk = (ik = ik == Vk ? Ak : ik) == Ak,
        Ok = (Yk = Yk == Vk ? Ak : Yk) == Ak,
        Ek = ik == Yk;
      if (Ek && dk(kk)) {
        if (!dk(Fk)) return !1;
        Wk = !0, Lk = !1
      }
      if (Ek && !Lk) return mk || (mk = new Rk), Wk || sk(kk) ? tk(kk, Fk, Bk, yk, fk, mk) : ak(kk, Fk, ik, Bk, yk, fk, mk);
      if (!(1 & Bk)) {
        var Sk = Lk && ek.call(kk, "__wrapped__"),
          Nk = Ok && ek.call(Fk, "__wrapped__");
        if (Sk || Nk) {
          var Hk = Sk ? kk.value() : kk,
            uk = Nk ? Fk.value() : Fk;
          return mk || (mk = new Rk), fk(Hk, uk, Bk, yk, mk)
        }
      }
      return !!Ek && (mk || (mk = new Rk), Xk(kk, Fk, Bk, yk, fk, mk))
    }
  },
  5241: (kk, Fk, Bk) => {
    var Rk = Bk(5243),
      tk = Bk(5282);
    kk.exports = function(kk, Fk, Bk, ak) {
      var Xk = Bk.length,
        bk = Xk,
        wk = !ak;
      if (null == kk) return !bk;
      for (kk = Object(kk); Xk--;) {
        var dk = Bk[Xk];
        if (wk && dk[2] ? dk[1] !== kk[dk[0]] : !(dk[0] in kk)) return !1
      }
      for (; ++Xk < bk;) {
        var sk = (dk = Bk[Xk])[0],
          Vk = kk[sk],
          Jk = dk[1];
        if (wk && dk[2]) {
          if (void 0 === Vk && !(sk in kk)) return !1
        } else {
          var Ak = new Rk;
          if (ak) var ek = ak(Vk, Jk, sk, kk, Fk, Ak);
          if (!(void 0 === ek ? tk(Jk, Vk, 3, ak, Ak) : ek)) return !1
        }
      }
      return !0
    }
  },
  5697: kk => {
    kk.exports = function(kk) {
      return kk !== kk
    }
  },
  4931: (kk, Fk, Bk) => {
    var Rk = Bk(4936),
      tk = Bk(4942),
      ak = Bk(4766),
      Xk = Bk(4953),
      bk = /^\[object .+?Constructor\]$/,
      wk = Function.prototype,
      dk = Object.prototype,
      sk = wk.toString,
      Vk = dk.hasOwnProperty,
      Jk = RegExp("^" + sk.call(Vk).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    kk.exports = function(kk) {
      return !(!ak(kk) || tk(kk)) && (Rk(kk) ? Jk : bk).test(Xk(kk))
    }
  },
  5409: (kk, Fk, Bk) => {
    var Rk = Bk(4808),
      tk = Bk(5181),
      ak = Bk(4823),
      Xk = {};
    Xk["[object Float32Array]"] = Xk["[object Float64Array]"] = Xk["[object Int8Array]"] = Xk["[object Int16Array]"] = Xk["[object Int32Array]"] = Xk["[object Uint8Array]"] = Xk["[object Uint8ClampedArray]"] = Xk["[object Uint16Array]"] = Xk["[object Uint32Array]"] = !0, Xk["[object Arguments]"] = Xk["[object Array]"] = Xk["[object ArrayBuffer]"] = Xk["[object Boolean]"] = Xk["[object DataView]"] = Xk["[object Date]"] = Xk["[object Error]"] = Xk["[object Function]"] = Xk["[object Map]"] = Xk["[object Number]"] = Xk["[object Object]"] = Xk["[object RegExp]"] = Xk["[object Set]"] = Xk["[object String]"] = Xk["[object WeakMap]"] = !1, kk.exports = function(kk) {
      return ak(kk) && tk(kk.length) && !!Xk[Rk(kk)]
    }
  },
  5235: (kk, Fk, Bk) => {
    var Rk = Bk(5237),
      tk = Bk(5496),
      ak = Bk(5518),
      Xk = Bk(4843),
      bk = Bk(5521);
    kk.exports = function(kk) {
      return "function" == typeof kk ? kk : null == kk ? ak : "object" == typeof kk ? Xk(kk) ? tk(kk[0], kk[1]) : Rk(kk) : bk(kk)
    }
  },
  5422: (kk, Fk, Bk) => {
    var Rk = Bk(5427),
      tk = Bk(5435),
      ak = Object.prototype.hasOwnProperty;
    kk.exports = function(kk) {
      if (!Rk(kk)) return tk(kk);
      var Fk = [];
      for (var Bk in Object(kk)) ak.call(kk, Bk) && "constructor" != Bk && Fk.push(Bk);
      return Fk
    }
  },
  5877: kk => {
    kk.exports = function(kk, Fk) {
      return kk < Fk
    }
  },
  5541: (kk, Fk, Bk) => {
    var Rk = Bk(5550),
      tk = Bk(5172);
    kk.exports = function(kk, Fk) {
      var Bk = -1,
        ak = tk(kk) ? Array(kk.length) : [];
      return Rk(kk, (function(kk, Rk, tk) {
        ak[++Bk] = Fk(kk, Rk, tk)
      })), ak
    }
  },
  5237: (kk, Fk, Bk) => {
    var Rk = Bk(5241),
      tk = Bk(5481),
      ak = Bk(5493);
    kk.exports = function(kk) {
      var Fk = tk(kk);
      return 1 == Fk.length && Fk[0][2] ? ak(Fk[0][0], Fk[0][1]) : function(Bk) {
        return Bk === kk || Rk(Bk, kk, Fk)
      }
    }
  },
  5496: (kk, Fk, Bk) => {
    var Rk = Bk(5282),
      tk = Bk(4863),
      ak = Bk(5501),
      Xk = Bk(4879),
      bk = Bk(5487),
      wk = Bk(5493),
      dk = Bk(5094);
    kk.exports = function(kk, Fk) {
      return Xk(kk) && bk(Fk) ? wk(dk(kk), Fk) : function(Bk) {
        var Xk = tk(Bk, kk);
        return void 0 === Xk && Xk === Fk ? ak(Bk, kk) : Rk(Fk, Xk, 3)
      }
    }
  },
  5227: (kk, Fk, Bk) => {
    var Rk = Bk(5089),
      tk = Bk(4865),
      ak = Bk(5235),
      Xk = Bk(5541),
      bk = Bk(5574),
      wk = Bk(5411),
      dk = Bk(5576),
      sk = Bk(5518),
      Vk = Bk(4843);
    kk.exports = function(kk, Fk, Bk) {
      Fk = Fk.length ? Rk(Fk, (function(kk) {
        return Vk(kk) ? function(Fk) {
          return tk(Fk, 1 === kk.length ? kk[0] : kk)
        } : kk
      })) : [sk];
      var Jk = -1;
      Fk = Rk(Fk, wk(ak));
      var Ak = Xk(kk, (function(kk, Bk, tk) {
        return {
          criteria: Rk(Fk, (function(Fk) {
            return Fk(kk)
          })),
          index: ++Jk,
          value: kk
        }
      }));
      return bk(Ak, (function(kk, Fk) {
        return dk(kk, Fk, Bk)
      }))
    }
  },
  5525: kk => {
    kk.exports = function(kk) {
      return function(Fk) {
        return null == Fk ? void 0 : Fk[kk]
      }
    }
  },
  5533: (kk, Fk, Bk) => {
    var Rk = Bk(4865);
    kk.exports = function(kk) {
      return function(Fk) {
        return Rk(Fk, kk)
      }
    }
  },
  5154: kk => {
    var Fk = Math.ceil,
      Bk = Math.max;
    kk.exports = function(kk, Rk, tk, ak) {
      for (var Xk = -1, bk = Bk(Fk((Rk - kk) / (tk || 1)), 0), wk = Array(bk); bk--;) wk[ak ? bk : ++Xk] = kk, kk += tk;
      return wk
    }
  },
  5586: (kk, Fk, Bk) => {
    var Rk = Bk(5518),
      tk = Bk(5594),
      ak = Bk(5602);
    kk.exports = function(kk, Fk) {
      return ak(tk(kk, Fk, Rk), kk + "")
    }
  },
  5610: (kk, Fk, Bk) => {
    var Rk = Bk(5614),
      tk = Bk(5623),
      ak = Bk(5518),
      Xk = tk ? function(kk, Fk) {
        return tk(kk, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Rk(Fk),
          writable: !0
        })
      } : ak;
    kk.exports = Xk
  },
  5749: kk => {
    kk.exports = function(kk, Fk, Bk) {
      var Rk = -1,
        tk = kk.length;
      Fk < 0 && (Fk = -Fk > tk ? 0 : tk + Fk), (Bk = Bk > tk ? tk : Bk) < 0 && (Bk += tk), tk = Fk > Bk ? 0 : Bk - Fk >>> 0, Fk >>>= 0;
      for (var ak = Array(tk); ++Rk < tk;) ak[Rk] = kk[Rk + Fk];
      return ak
    }
  },
  6041: (kk, Fk, Bk) => {
    var Rk = Bk(5550);
    kk.exports = function(kk, Fk) {
      var Bk;
      return Rk(kk, (function(kk, Rk, tk) {
        return !(Bk = Fk(kk, Rk, tk))
      })), !!Bk
    }
  },
  5574: kk => {
    kk.exports = function(kk, Fk) {
      var Bk = kk.length;
      for (kk.sort(Fk); Bk--;) kk[Bk] = kk[Bk].value;
      return kk
    }
  },
  5385: kk => {
    kk.exports = function(kk, Fk) {
      for (var Bk = -1, Rk = Array(kk); ++Bk < kk;) Rk[Bk] = Fk(Bk);
      return Rk
    }
  },
  5086: (kk, Fk, Bk) => {
    var Rk = Bk(4812),
      tk = Bk(5089),
      ak = Bk(4843),
      Xk = Bk(4805),
      bk = Rk ? Rk.prototype : void 0,
      wk = bk ? bk.toString : void 0;
    kk.exports = function kk(Fk) {
      if ("string" == typeof Fk) return Fk;
      if (ak(Fk)) return tk(Fk, kk) + "";
      if (Xk(Fk)) return wk ? wk.call(Fk) : "";
      var Bk = Fk + "";
      return "0" == Bk && 1 / Fk == -1 / 0 ? "-0" : Bk
    }
  },
  4793: (kk, Fk, Bk) => {
    var Rk = Bk(4800),
      tk = /^\s+/;
    kk.exports = function(kk) {
      return kk ? kk.slice(0, Rk(kk) + 1).replace(tk, "") : kk
    }
  },
  5411: kk => {
    kk.exports = function(kk) {
      return function(Fk) {
        return kk(Fk)
      }
    }
  },
  5677: (kk, Fk, Bk) => {
    var Rk = Bk(5293),
      tk = Bk(5686),
      ak = Bk(5702),
      Xk = Bk(5307),
      bk = Bk(5707),
      wk = Bk(5332);
    kk.exports = function(kk, Fk, Bk) {
      var dk = -1,
        sk = tk,
        Vk = kk.length,
        Jk = !0,
        Ak = [],
        ek = Ak;
      if (Bk) Jk = !1, sk = ak;
      else if (Vk >= 200) {
        var yk = Fk ? null : bk(kk);
        if (yk) return wk(yk);
        Jk = !1, sk = Xk, ek = new Rk
      } else ek = Fk ? [] : Ak;
      kk: for (; ++dk < Vk;) {
        var fk = kk[dk],
          mk = Fk ? Fk(fk) : fk;
        if (fk = Bk || 0 !== fk ? fk : 0, Jk && mk === mk) {
          for (var Wk = ek.length; Wk--;)
            if (ek[Wk] === mk) continue kk;
          Fk && ek.push(mk), Ak.push(fk)
        } else sk(ek, mk, Bk) || (ek !== Ak && ek.push(mk), Ak.push(fk))
      }
      return Ak
    }
  },
  5307: kk => {
    kk.exports = function(kk, Fk) {
      return kk.has(Fk)
    }
  },
  4873: (kk, Fk, Bk) => {
    var Rk = Bk(4843),
      tk = Bk(4879),
      ak = Bk(4887),
      Xk = Bk(5077);
    kk.exports = function(kk, Fk) {
      return Rk(kk) ? kk : tk(kk, Fk) ? [kk] : ak(Xk(kk))
    }
  },
  5747: (kk, Fk, Bk) => {
    var Rk = Bk(5749);
    kk.exports = function(kk, Fk, Bk) {
      var tk = kk.length;
      return Bk = void 0 === Bk ? tk : Bk, !Fk && Bk >= tk ? kk : Rk(kk, Fk, Bk)
    }
  },
  5583: (kk, Fk, Bk) => {
    var Rk = Bk(4805);
    kk.exports = function(kk, Fk) {
      if (kk !== Fk) {
        var Bk = void 0 !== kk,
          tk = null === kk,
          ak = kk === kk,
          Xk = Rk(kk),
          bk = void 0 !== Fk,
          wk = null === Fk,
          dk = Fk === Fk,
          sk = Rk(Fk);
        if (!wk && !sk && !Xk && kk > Fk || Xk && bk && dk && !wk && !sk || tk && bk && dk || !Bk && dk || !ak) return 1;
        if (!tk && !Xk && !sk && kk < Fk || sk && Bk && ak && !tk && !Xk || wk && Bk && ak || !bk && ak || !dk) return -1
      }
      return 0
    }
  },
  5576: (kk, Fk, Bk) => {
    var Rk = Bk(5583);
    kk.exports = function(kk, Fk, Bk) {
      for (var tk = -1, ak = kk.criteria, Xk = Fk.criteria, bk = ak.length, wk = Bk.length; ++tk < bk;) {
        var dk = Rk(ak[tk], Xk[tk]);
        if (dk) return tk >= wk ? dk : dk * ("desc" == Bk[tk] ? -1 : 1)
      }
      return kk.index - Fk.index
    }
  },
  4945: (kk, Fk, Bk) => {
    var Rk = Bk(4775)["__core-js_shared__"];
    kk.exports = Rk
  },
  5571: (kk, Fk, Bk) => {
    var Rk = Bk(5172);
    kk.exports = function(kk, Fk) {
      return function(Bk, tk) {
        if (null == Bk) return Bk;
        if (!Rk(Bk)) return kk(Bk, tk);
        for (var ak = Bk.length, Xk = Fk ? ak : -1, bk = Object(Bk);
          (Fk ? Xk-- : ++Xk < ak) && !1 !== tk(bk[Xk], Xk, bk););
        return Bk
      }
    }
  },
  5565: kk => {
    kk.exports = function(kk) {
      return function(Fk, Bk, Rk) {
        for (var tk = -1, ak = Object(Fk), Xk = Rk(Fk), bk = Xk.length; bk--;) {
          var wk = Xk[kk ? bk : ++tk];
          if (!1 === Bk(ak[wk], wk, ak)) break
        }
        return Fk
      }
    }
  },
  5744: (kk, Fk, Bk) => {
    var Rk = Bk(5747),
      tk = Bk(5756),
      ak = Bk(5761),
      Xk = Bk(5077);
    kk.exports = function(kk) {
      return function(Fk) {
        Fk = Xk(Fk);
        var Bk = tk(Fk) ? ak(Fk) : void 0,
          bk = Bk ? Bk[0] : Fk.charAt(0),
          wk = Bk ? Rk(Bk, 1).join("") : Fk.slice(1);
        return bk[kk]() + wk
      }
    }
  },
  6055: (kk, Fk, Bk) => {
    var Rk = Bk(5235),
      tk = Bk(5172),
      ak = Bk(5371);
    kk.exports = function(kk) {
      return function(Fk, Bk, Xk) {
        var bk = Object(Fk);
        if (!tk(Fk)) {
          var wk = Rk(Bk, 3);
          Fk = ak(Fk), Bk = function(kk) {
            return wk(bk[kk], kk, bk)
          }
        }
        var dk = kk(Fk, Bk, Xk);
        return dk > -1 ? bk[wk ? Fk[dk] : dk] : void 0
      }
    }
  },
  5145: (kk, Fk, Bk) => {
    var Rk = Bk(5154),
      tk = Bk(5163),
      ak = Bk(5191);
    kk.exports = function(kk) {
      return function(Fk, Bk, Xk) {
        return Xk && "number" != typeof Xk && tk(Fk, Bk, Xk) && (Bk = Xk = void 0), Fk = ak(Fk), void 0 === Bk ? (Bk = Fk, Fk = 0) : Bk = ak(Bk), Xk = void 0 === Xk ? Fk < Bk ? 1 : -1 : ak(Xk), Rk(Fk, Bk, Xk, kk)
      }
    }
  },
  5707: (kk, Fk, Bk) => {
    var Rk = Bk(5469),
      tk = Bk(5712),
      ak = Bk(5332),
      Xk = Rk && 1 / ak(new Rk([, -0]))[1] == 1 / 0 ? function(kk) {
        return new Rk(kk)
      } : tk;
    kk.exports = Xk
  },
  5623: (kk, Fk, Bk) => {
    var Rk = Bk(4926),
      tk = function() {
        try {
          var kk = Rk(Object, "defineProperty");
          return kk({}, "", {}), kk
        } catch (Fk) {}
      }();
    kk.exports = tk
  },
  5290: (kk, Fk, Bk) => {
    var Rk = Bk(5293),
      tk = Bk(5305),
      ak = Bk(5307);
    kk.exports = function(kk, Fk, Bk, Xk, bk, wk) {
      var dk = 1 & Bk,
        sk = kk.length,
        Vk = Fk.length;
      if (sk != Vk && !(dk && Vk > sk)) return !1;
      var Jk = wk.get(kk),
        Ak = wk.get(Fk);
      if (Jk && Ak) return Jk == Fk && Ak == kk;
      var ek = -1,
        yk = !0,
        fk = 2 & Bk ? new Rk : void 0;
      for (wk.set(kk, Fk), wk.set(Fk, kk); ++ek < sk;) {
        var mk = kk[ek],
          Wk = Fk[ek];
        if (Xk) var vk = dk ? Xk(Wk, mk, ek, Fk, kk, wk) : Xk(mk, Wk, ek, kk, Fk, wk);
        if (void 0 !== vk) {
          if (vk) continue;
          yk = !1;
          break
        }
        if (fk) {
          if (!tk(Fk, (function(kk, Fk) {
              if (!ak(fk, Fk) && (mk === kk || bk(mk, kk, Bk, Xk, wk))) return fk.push(Fk)
            }))) {
            yk = !1;
            break
          }
        } else if (mk !== Wk && !bk(mk, Wk, Bk, Xk, wk)) {
          yk = !1;
          break
        }
      }
      return wk.delete(kk), wk.delete(Fk), yk
    }
  },
  5316: (kk, Fk, Bk) => {
    var Rk = Bk(4812),
      tk = Bk(5323),
      ak = Bk(5016),
      Xk = Bk(5290),
      bk = Bk(5325),
      wk = Bk(5332),
      dk = Rk ? Rk.prototype : void 0,
      sk = dk ? dk.valueOf : void 0;
    kk.exports = function(kk, Fk, Bk, Rk, dk, Vk, Jk) {
      switch (Bk) {
        case "[object DataView]":
          if (kk.byteLength != Fk.byteLength || kk.byteOffset != Fk.byteOffset) return !1;
          kk = kk.buffer, Fk = Fk.buffer;
        case "[object ArrayBuffer]":
          return !(kk.byteLength != Fk.byteLength || !Vk(new tk(kk), new tk(Fk)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return ak(+kk, +Fk);
        case "[object Error]":
          return kk.name == Fk.name && kk.message == Fk.message;
        case "[object RegExp]":
        case "[object String]":
          return kk == Fk + "";
        case "[object Map]":
          var Ak = bk;
        case "[object Set]":
          var ek = 1 & Rk;
          if (Ak || (Ak = wk), kk.size != Fk.size && !ek) return !1;
          var yk = Jk.get(kk);
          if (yk) return yk == Fk;
          Rk |= 2, Jk.set(kk, Fk);
          var fk = Xk(Ak(kk), Ak(Fk), Rk, dk, Vk, Jk);
          return Jk.delete(kk), fk;
        case "[object Symbol]":
          if (sk) return sk.call(kk) == sk.call(Fk)
      }
      return !1
    }
  },
  5340: (kk, Fk, Bk) => {
    var Rk = Bk(5344),
      tk = Object.prototype.hasOwnProperty;
    kk.exports = function(kk, Fk, Bk, ak, Xk, bk) {
      var wk = 1 & Bk,
        dk = Rk(kk),
        sk = dk.length;
      if (sk != Rk(Fk).length && !wk) return !1;
      for (var Vk = sk; Vk--;) {
        var Jk = dk[Vk];
        if (!(wk ? Jk in Fk : tk.call(Fk, Jk))) return !1
      }
      var Ak = bk.get(kk),
        ek = bk.get(Fk);
      if (Ak && ek) return Ak == Fk && ek == kk;
      var yk = !0;
      bk.set(kk, Fk), bk.set(Fk, kk);
      for (var fk = wk; ++Vk < sk;) {
        var mk = kk[Jk = dk[Vk]],
          Wk = Fk[Jk];
        if (ak) var vk = wk ? ak(Wk, mk, Jk, Fk, kk, bk) : ak(mk, Wk, Jk, kk, Fk, bk);
        if (!(void 0 === vk ? mk === Wk || Xk(mk, Wk, Bk, ak, bk) : vk)) {
          yk = !1;
          break
        }
        fk || (fk = "constructor" == Jk)
      }
      if (yk && !fk) {
        var ik = kk.constructor,
          Yk = Fk.constructor;
        ik == Yk || !("constructor" in kk) || !("constructor" in Fk) || "function" == typeof ik && ik instanceof ik && "function" == typeof Yk && Yk instanceof Yk || (yk = !1)
      }
      return bk.delete(kk), bk.delete(Fk), yk
    }
  },
  4784: (kk, Fk, Bk) => {
    var Rk = "object" == typeof Bk.g && Bk.g && Bk.g.Object === Object && Bk.g;
    kk.exports = Rk
  },
  5344: (kk, Fk, Bk) => {
    var Rk = Bk(5346),
      tk = Bk(5350),
      ak = Bk(5371);
    kk.exports = function(kk) {
      return Rk(kk, ak, tk)
    }
  },
  5048: (kk, Fk, Bk) => {
    var Rk = Bk(5053);
    kk.exports = function(kk, Fk) {
      var Bk = kk.__data__;
      return Rk(Fk) ? Bk["string" == typeof Fk ? "string" : "hash"] : Bk.map
    }
  },
  5481: (kk, Fk, Bk) => {
    var Rk = Bk(5487),
      tk = Bk(5371);
    kk.exports = function(kk) {
      for (var Fk = tk(kk), Bk = Fk.length; Bk--;) {
        var ak = Fk[Bk],
          Xk = kk[ak];
        Fk[Bk] = [ak, Xk, Rk(Xk)]
      }
      return Fk
    }
  },
  4926: (kk, Fk, Bk) => {
    var Rk = Bk(4931),
      tk = Bk(4960);
    kk.exports = function(kk, Fk) {
      var Bk = tk(kk, Fk);
      return Rk(Bk) ? Bk : void 0
    }
  },
  6005: (kk, Fk, Bk) => {
    var Rk = Bk(5440)(Object.getPrototypeOf, Object);
    kk.exports = Rk
  },
  4815: (kk, Fk, Bk) => {
    var Rk = Bk(4812),
      tk = Object.prototype,
      ak = tk.hasOwnProperty,
      Xk = tk.toString,
      bk = Rk ? Rk.toStringTag : void 0;
    kk.exports = function(kk) {
      var Fk = ak.call(kk, bk),
        Bk = kk[bk];
      try {
        kk[bk] = void 0;
        var Rk = !0
      } catch (wk) {}
      var tk = Xk.call(kk);
      return Rk && (Fk ? kk[bk] = Bk : delete kk[bk]), tk
    }
  },
  5350: (kk, Fk, Bk) => {
    var Rk = Bk(5358),
      tk = Bk(5365),
      ak = Object.prototype.propertyIsEnumerable,
      Xk = Object.getOwnPropertySymbols,
      bk = Xk ? function(kk) {
        return null == kk ? [] : (kk = Object(kk), Rk(Xk(kk), (function(Fk) {
          return ak.call(kk, Fk)
        })))
      } : tk;
    kk.exports = bk
  },
  5448: (kk, Fk, Bk) => {
    var Rk = Bk(5453),
      tk = Bk(5036),
      ak = Bk(5462),
      Xk = Bk(5469),
      bk = Bk(5474),
      wk = Bk(4808),
      dk = Bk(4953),
      sk = "[object Map]",
      Vk = "[object Promise]",
      Jk = "[object Set]",
      Ak = "[object WeakMap]",
      ek = "[object DataView]",
      yk = dk(Rk),
      fk = dk(tk),
      mk = dk(ak),
      Wk = dk(Xk),
      vk = dk(bk),
      ik = wk;
    (Rk && ik(new Rk(new ArrayBuffer(1))) != ek || tk && ik(new tk) != sk || ak && ik(ak.resolve()) != Vk || Xk && ik(new Xk) != Jk || bk && ik(new bk) != Ak) && (ik = function(kk) {
      var Fk = wk(kk),
        Bk = "[object Object]" == Fk ? kk.constructor : void 0,
        Rk = Bk ? dk(Bk) : "";
      if (Rk) switch (Rk) {
        case yk:
          return ek;
        case fk:
          return sk;
        case mk:
          return Vk;
        case Wk:
          return Jk;
        case vk:
          return Ak
      }
      return Fk
    }), kk.exports = ik
  },
  4960: kk => {
    kk.exports = function(kk, Fk) {
      return null == kk ? void 0 : kk[Fk]
    }
  },
  5511: (kk, Fk, Bk) => {
    var Rk = Bk(4873),
      tk = Bk(5217),
      ak = Bk(4843),
      Xk = Bk(5184),
      bk = Bk(5181),
      wk = Bk(5094);
    kk.exports = function(kk, Fk, Bk) {
      for (var dk = -1, sk = (Fk = Rk(Fk, kk)).length, Vk = !1; ++dk < sk;) {
        var Jk = wk(Fk[dk]);
        if (!(Vk = null != kk && Bk(kk, Jk))) break;
        kk = kk[Jk]
      }
      return Vk || ++dk != sk ? Vk : !!(sk = null == kk ? 0 : kk.length) && bk(sk) && Xk(Jk, sk) && (ak(kk) || tk(kk))
    }
  },
  5756: kk => {
    var Fk = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    kk.exports = function(kk) {
      return Fk.test(kk)
    }
  },
  4920: (kk, Fk, Bk) => {
    var Rk = Bk(4924);
    kk.exports = function() {
      this.__data__ = Rk ? Rk(null) : {}, this.size = 0
    }
  },
  4966: kk => {
    kk.exports = function(kk) {
      var Fk = this.has(kk) && delete this.__data__[kk];
      return this.size -= Fk ? 1 : 0, Fk
    }
  },
  4974: (kk, Fk, Bk) => {
    var Rk = Bk(4924),
      tk = Object.prototype.hasOwnProperty;
    kk.exports = function(kk) {
      var Fk = this.__data__;
      if (Rk) {
        var Bk = Fk[kk];
        return "__lodash_hash_undefined__" === Bk ? void 0 : Bk
      }
      return tk.call(Fk, kk) ? Fk[kk] : void 0
    }
  },
  4976: (kk, Fk, Bk) => {
    var Rk = Bk(4924),
      tk = Object.prototype.hasOwnProperty;
    kk.exports = function(kk) {
      var Fk = this.__data__;
      return Rk ? void 0 !== Fk[kk] : tk.call(Fk, kk)
    }
  },
  4985: (kk, Fk, Bk) => {
    var Rk = Bk(4924);
    kk.exports = function(kk, Fk) {
      var Bk = this.__data__;
      return this.size += this.has(kk) ? 0 : 1, Bk[kk] = Rk && void 0 === Fk ? "__lodash_hash_undefined__" : Fk, this
    }
  },
  5212: (kk, Fk, Bk) => {
    var Rk = Bk(4812),
      tk = Bk(5217),
      ak = Bk(4843),
      Xk = Rk ? Rk.isConcatSpreadable : void 0;
    kk.exports = function(kk) {
      return ak(kk) || tk(kk) || !!(Xk && kk && kk[Xk])
    }
  },
  5184: kk => {
    var Fk = /^(?:0|[1-9]\d*)$/;
    kk.exports = function(kk, Bk) {
      var Rk = typeof kk;
      return !!(Bk = null == Bk ? 9007199254740991 : Bk) && ("number" == Rk || "symbol" != Rk && Fk.test(kk)) && kk > -1 && kk % 1 == 0 && kk < Bk
    }
  },
  5163: (kk, Fk, Bk) => {
    var Rk = Bk(5016),
      tk = Bk(5172),
      ak = Bk(5184),
      Xk = Bk(4766);
    kk.exports = function(kk, Fk, Bk) {
      if (!Xk(Bk)) return !1;
      var bk = typeof Fk;
      return !!("number" == bk ? tk(Bk) && ak(Fk, Bk.length) : "string" == bk && Fk in Bk) && Rk(Bk[Fk], kk)
    }
  },
  4879: (kk, Fk, Bk) => {
    var Rk = Bk(4843),
      tk = Bk(4805),
      ak = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Xk = /^\w*$/;
    kk.exports = function(kk, Fk) {
      if (Rk(kk)) return !1;
      var Bk = typeof kk;
      return !("number" != Bk && "symbol" != Bk && "boolean" != Bk && null != kk && !tk(kk)) || (Xk.test(kk) || !ak.test(kk) || null != Fk && kk in Object(Fk))
    }
  },
  5053: kk => {
    kk.exports = function(kk) {
      var Fk = typeof kk;
      return "string" == Fk || "number" == Fk || "symbol" == Fk || "boolean" == Fk ? "__proto__" !== kk : null === kk
    }
  },
  4942: (kk, Fk, Bk) => {
    var Rk = Bk(4945),
      tk = function() {
        var kk = /[^.]+$/.exec(Rk && Rk.keys && Rk.keys.IE_PROTO || "");
        return kk ? "Symbol(src)_1." + kk : ""
      }();
    kk.exports = function(kk) {
      return !!tk && tk in kk
    }
  },
  5427: kk => {
    var Fk = Object.prototype;
    kk.exports = function(kk) {
      var Bk = kk && kk.constructor;
      return kk === ("function" == typeof Bk && Bk.prototype || Fk)
    }
  },
  5487: (kk, Fk, Bk) => {
    var Rk = Bk(4766);
    kk.exports = function(kk) {
      return kk === kk && !Rk(kk)
    }
  },
  4999: kk => {
    kk.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5006: (kk, Fk, Bk) => {
    var Rk = Bk(5008),
      tk = Array.prototype.splice;
    kk.exports = function(kk) {
      var Fk = this.__data__,
        Bk = Rk(Fk, kk);
      return !(Bk < 0) && (Bk == Fk.length - 1 ? Fk.pop() : tk.call(Fk, Bk, 1), --this.size, !0)
    }
  },
  5019: (kk, Fk, Bk) => {
    var Rk = Bk(5008);
    kk.exports = function(kk) {
      var Fk = this.__data__,
        Bk = Rk(Fk, kk);
      return Bk < 0 ? void 0 : Fk[Bk][1]
    }
  },
  5028: (kk, Fk, Bk) => {
    var Rk = Bk(5008);
    kk.exports = function(kk) {
      return Rk(this.__data__, kk) > -1
    }
  },
  5032: (kk, Fk, Bk) => {
    var Rk = Bk(5008);
    kk.exports = function(kk, Fk) {
      var Bk = this.__data__,
        tk = Rk(Bk, kk);
      return tk < 0 ? (++this.size, Bk.push([kk, Fk])) : Bk[tk][1] = Fk, this
    }
  },
  4906: (kk, Fk, Bk) => {
    var Rk = Bk(4915),
      tk = Bk(4990),
      ak = Bk(5036);
    kk.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new Rk,
        map: new(ak || tk),
        string: new Rk
      }
    }
  },
  5043: (kk, Fk, Bk) => {
    var Rk = Bk(5048);
    kk.exports = function(kk) {
      var Fk = Rk(this, kk).delete(kk);
      return this.size -= Fk ? 1 : 0, Fk
    }
  },
  5058: (kk, Fk, Bk) => {
    var Rk = Bk(5048);
    kk.exports = function(kk) {
      return Rk(this, kk).get(kk)
    }
  },
  5060: (kk, Fk, Bk) => {
    var Rk = Bk(5048);
    kk.exports = function(kk) {
      return Rk(this, kk).has(kk)
    }
  },
  5068: (kk, Fk, Bk) => {
    var Rk = Bk(5048);
    kk.exports = function(kk, Fk) {
      var Bk = Rk(this, kk),
        tk = Bk.size;
      return Bk.set(kk, Fk), this.size += Bk.size == tk ? 0 : 1, this
    }
  },
  5325: kk => {
    kk.exports = function(kk) {
      var Fk = -1,
        Bk = Array(kk.size);
      return kk.forEach((function(kk, Rk) {
        Bk[++Fk] = [Rk, kk]
      })), Bk
    }
  },
  5493: kk => {
    kk.exports = function(kk, Fk) {
      return function(Bk) {
        return null != Bk && (Bk[kk] === Fk && (void 0 !== Fk || kk in Object(Bk)))
      }
    }
  },
  4890: (kk, Fk, Bk) => {
    var Rk = Bk(4894);
    kk.exports = function(kk) {
      var Fk = Rk(kk, (function(kk) {
          return 500 === Bk.size && Bk.clear(), kk
        })),
        Bk = Fk.cache;
      return Fk
    }
  },
  4924: (kk, Fk, Bk) => {
    var Rk = Bk(4926)(Object, "create");
    kk.exports = Rk
  },
  5435: (kk, Fk, Bk) => {
    var Rk = Bk(5440)(Object.keys, Object);
    kk.exports = Rk
  },
  5419: (kk, Fk, Bk) => {
    kk = Bk.nmd(kk);
    var Rk = Bk(4784),
      tk = Fk && !Fk.nodeType && Fk,
      ak = tk && kk && !kk.nodeType && kk,
      Xk = ak && ak.exports === tk && Rk.process,
      bk = function() {
        try {
          var kk = ak && ak.require && ak.require("util").types;
          return kk || Xk && Xk.binding && Xk.binding("util")
        } catch (Fk) {}
      }();
    kk.exports = bk
  },
  4819: kk => {
    var Fk = Object.prototype.toString;
    kk.exports = function(kk) {
      return Fk.call(kk)
    }
  },
  5440: kk => {
    kk.exports = function(kk, Fk) {
      return function(Bk) {
        return kk(Fk(Bk))
      }
    }
  },
  5594: (kk, Fk, Bk) => {
    var Rk = Bk(5596),
      tk = Math.max;
    kk.exports = function(kk, Fk, Bk) {
      return Fk = tk(void 0 === Fk ? kk.length - 1 : Fk, 0),
        function() {
          for (var ak = arguments, Xk = -1, bk = tk(ak.length - Fk, 0), wk = Array(bk); ++Xk < bk;) wk[Xk] = ak[Fk + Xk];
          Xk = -1;
          for (var dk = Array(Fk + 1); ++Xk < Fk;) dk[Xk] = ak[Xk];
          return dk[Fk] = Bk(wk), Rk(kk, this, dk)
        }
    }
  },
  4775: (kk, Fk, Bk) => {
    var Rk = Bk(4784),
      tk = "object" == typeof self && self && self.Object === Object && self,
      ak = Rk || tk || Function("return this")();
    kk.exports = ak
  },
  5300: kk => {
    kk.exports = function(kk) {
      return this.__data__.set(kk, "__lodash_hash_undefined__"), this
    }
  },
  5303: kk => {
    kk.exports = function(kk) {
      return this.__data__.has(kk)
    }
  },
  5332: kk => {
    kk.exports = function(kk) {
      var Fk = -1,
        Bk = Array(kk.size);
      return kk.forEach((function(kk) {
        Bk[++Fk] = kk
      })), Bk
    }
  },
  5602: (kk, Fk, Bk) => {
    var Rk = Bk(5610),
      tk = Bk(5628)(Rk);
    kk.exports = tk
  },
  5628: kk => {
    var Fk = Date.now;
    kk.exports = function(kk) {
      var Bk = 0,
        Rk = 0;
      return function() {
        var tk = Fk(),
          ak = 16 - (tk - Rk);
        if (Rk = tk, ak > 0) {
          if (++Bk >= 800) return arguments[0]
        } else Bk = 0;
        return kk.apply(void 0, arguments)
      }
    }
  },
  5251: (kk, Fk, Bk) => {
    var Rk = Bk(4990);
    kk.exports = function() {
      this.__data__ = new Rk, this.size = 0
    }
  },
  5255: kk => {
    kk.exports = function(kk) {
      var Fk = this.__data__,
        Bk = Fk.delete(kk);
      return this.size = Fk.size, Bk
    }
  },
  5261: kk => {
    kk.exports = function(kk) {
      return this.__data__.get(kk)
    }
  },
  5267: kk => {
    kk.exports = function(kk) {
      return this.__data__.has(kk)
    }
  },
  5275: (kk, Fk, Bk) => {
    var Rk = Bk(4990),
      tk = Bk(5036),
      ak = Bk(4903);
    kk.exports = function(kk, Fk) {
      var Bk = this.__data__;
      if (Bk instanceof Rk) {
        var Xk = Bk.__data__;
        if (!tk || Xk.length < 199) return Xk.push([kk, Fk]), this.size = ++Bk.size, this;
        Bk = this.__data__ = new ak(Xk)
      }
      return Bk.set(kk, Fk), this.size = Bk.size, this
    }
  },
  5700: kk => {
    kk.exports = function(kk, Fk, Bk) {
      for (var Rk = Bk - 1, tk = kk.length; ++Rk < tk;)
        if (kk[Rk] === Fk) return Rk;
      return -1
    }
  },
  5761: (kk, Fk, Bk) => {
    var Rk = Bk(5769),
      tk = Bk(5756),
      ak = Bk(5777);
    kk.exports = function(kk) {
      return tk(kk) ? ak(kk) : Rk(kk)
    }
  },
  4887: (kk, Fk, Bk) => {
    var Rk = Bk(4890),
      tk = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ak = /\\(\\)?/g,
      Xk = Rk((function(kk) {
        var Fk = [];
        return 46 === kk.charCodeAt(0) && Fk.push(""), kk.replace(tk, (function(kk, Bk, Rk, tk) {
          Fk.push(Rk ? tk.replace(ak, "$1") : Bk || kk)
        })), Fk
      }));
    kk.exports = Xk
  },
  5094: (kk, Fk, Bk) => {
    var Rk = Bk(4805);
    kk.exports = function(kk) {
      if ("string" == typeof kk || Rk(kk)) return kk;
      var Fk = kk + "";
      return "0" == Fk && 1 / kk == -1 / 0 ? "-0" : Fk
    }
  },
  4953: kk => {
    var Fk = Function.prototype.toString;
    kk.exports = function(kk) {
      if (null != kk) {
        try {
          return Fk.call(kk)
        } catch (Bk) {}
        try {
          return kk + ""
        } catch (Bk) {}
      }
      return ""
    }
  },
  4800: kk => {
    var Fk = /\s/;
    kk.exports = function(kk) {
      for (var Bk = kk.length; Bk-- && Fk.test(kk.charAt(Bk)););
      return Bk
    }
  },
  5777: kk => {
    var Fk = "\\ud800-\\udfff",
      Bk = "[" + Fk + "]",
      Rk = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      tk = "\\ud83c[\\udffb-\\udfff]",
      ak = "[^" + Fk + "]",
      Xk = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      bk = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      wk = "(?:" + Rk + "|" + tk + ")" + "?",
      dk = "[\\ufe0e\\ufe0f]?",
      sk = dk + wk + ("(?:\\u200d(?:" + [ak, Xk, bk].join("|") + ")" + dk + wk + ")*"),
      Vk = "(?:" + [ak + Rk + "?", Rk, Xk, bk, Bk].join("|") + ")",
      Jk = RegExp(tk + "(?=" + tk + ")|" + Vk + sk, "g");
    kk.exports = function(kk) {
      return kk.match(Jk) || []
    }
  },
  5614: kk => {
    kk.exports = function(kk) {
      return function() {
        return kk
      }
    }
  },
  4761: (kk, Fk, Bk) => {
    var Rk = Bk(4766),
      tk = Bk(4772),
      ak = Bk(4789),
      Xk = Math.max,
      bk = Math.min;
    kk.exports = function(kk, Fk, Bk) {
      var wk, dk, sk, Vk, Jk, Ak, ek = 0,
        yk = !1,
        fk = !1,
        mk = !0;
      if ("function" != typeof kk) throw new TypeError("Expected a function");

      function Wk(Fk) {
        var Bk = wk,
          Rk = dk;
        return wk = dk = void 0, ek = Fk, Vk = kk.apply(Rk, Bk)
      }

      function vk(kk) {
        var Bk = kk - Ak;
        return void 0 === Ak || Bk >= Fk || Bk < 0 || fk && kk - ek >= sk
      }

      function ik() {
        var kk = tk();
        if (vk(kk)) return Yk(kk);
        Jk = setTimeout(ik, function(kk) {
          var Bk = Fk - (kk - Ak);
          return fk ? bk(Bk, sk - (kk - ek)) : Bk
        }(kk))
      }

      function Yk(kk) {
        return Jk = void 0, mk && wk ? Wk(kk) : (wk = dk = void 0, Vk)
      }

      function Lk() {
        var kk = tk(),
          Bk = vk(kk);
        if (wk = arguments, dk = this, Ak = kk, Bk) {
          if (void 0 === Jk) return function(kk) {
            return ek = kk, Jk = setTimeout(ik, Fk), yk ? Wk(kk) : Vk
          }(Ak);
          if (fk) return clearTimeout(Jk), Jk = setTimeout(ik, Fk), Wk(Ak)
        }
        return void 0 === Jk && (Jk = setTimeout(ik, Fk)), Vk
      }
      return Fk = ak(Fk) || 0, Rk(Bk) && (yk = !!Bk.leading, sk = (fk = "maxWait" in Bk) ? Xk(ak(Bk.maxWait) || 0, Fk) : sk, mk = "trailing" in Bk ? !!Bk.trailing : mk), Lk.cancel = function() {
        void 0 !== Jk && clearTimeout(Jk), ek = 0, wk = Ak = dk = Jk = void 0
      }, Lk.flush = function() {
        return void 0 === Jk ? Vk : Yk(tk())
      }, Lk
    }
  },
  5016: kk => {
    kk.exports = function(kk, Fk) {
      return kk === Fk || kk !== kk && Fk !== Fk
    }
  },
  5957: (kk, Fk, Bk) => {
    var Rk = Bk(5963),
      tk = Bk(5971),
      ak = Bk(5235),
      Xk = Bk(4843),
      bk = Bk(5163);
    kk.exports = function(kk, Fk, Bk) {
      var wk = Xk(kk) ? Rk : tk;
      return Bk && bk(kk, Fk, Bk) && (Fk = void 0), wk(kk, ak(Fk, 3))
    }
  },
  6050: (kk, Fk, Bk) => {
    var Rk = Bk(6055)(Bk(6064));
    kk.exports = Rk
  },
  6064: (kk, Fk, Bk) => {
    var Rk = Bk(5694),
      tk = Bk(5235),
      ak = Bk(6066),
      Xk = Math.max;
    kk.exports = function(kk, Fk, Bk) {
      var bk = null == kk ? 0 : kk.length;
      if (!bk) return -1;
      var wk = null == Bk ? 0 : ak(Bk);
      return wk < 0 && (wk = Xk(bk + wk, 0)), Rk(kk, tk(Fk, 3), wk)
    }
  },
  5881: (kk, Fk, Bk) => {
    var Rk = Bk(5201),
      tk = Bk(5887);
    kk.exports = function(kk, Fk) {
      return Rk(tk(kk, Fk), 1)
    }
  },
  4863: (kk, Fk, Bk) => {
    var Rk = Bk(4865);
    kk.exports = function(kk, Fk, Bk) {
      var tk = null == kk ? void 0 : Rk(kk, Fk);
      return void 0 === tk ? Bk : tk
    }
  },
  5501: (kk, Fk, Bk) => {
    var Rk = Bk(5505),
      tk = Bk(5511);
    kk.exports = function(kk, Fk) {
      return null != kk && tk(kk, Fk, Rk)
    }
  },
  5518: kk => {
    kk.exports = function(kk) {
      return kk
    }
  },
  5217: (kk, Fk, Bk) => {
    var Rk = Bk(5221),
      tk = Bk(4823),
      ak = Object.prototype,
      Xk = ak.hasOwnProperty,
      bk = ak.propertyIsEnumerable,
      wk = Rk(function() {
        return arguments
      }()) ? Rk : function(kk) {
        return tk(kk) && Xk.call(kk, "callee") && !bk.call(kk, "callee")
      };
    kk.exports = wk
  },
  4843: kk => {
    var Fk = Array.isArray;
    kk.exports = Fk
  },
  5172: (kk, Fk, Bk) => {
    var Rk = Bk(4936),
      tk = Bk(5181);
    kk.exports = function(kk) {
      return null != kk && tk(kk.length) && !Rk(kk)
    }
  },
  6013: (kk, Fk, Bk) => {
    var Rk = Bk(4808),
      tk = Bk(4823);
    kk.exports = function(kk) {
      return !0 === kk || !1 === kk || tk(kk) && "[object Boolean]" == Rk(kk)
    }
  },
  5394: (kk, Fk, Bk) => {
    kk = Bk.nmd(kk);
    var Rk = Bk(4775),
      tk = Bk(5400),
      ak = Fk && !Fk.nodeType && Fk,
      Xk = ak && kk && !kk.nodeType && kk,
      bk = Xk && Xk.exports === ak ? Rk.Ge : void 0,
      wk = (bk ? bk.isBuffer : void 0) || tk;
    kk.exports = wk
  },
  5893: (kk, Fk, Bk) => {
    var Rk = Bk(5282);
    kk.exports = function(kk, Fk) {
      return Rk(kk, Fk)
    }
  },
  4936: (kk, Fk, Bk) => {
    var Rk = Bk(4808),
      tk = Bk(4766);
    kk.exports = function(kk) {
      if (!tk(kk)) return !1;
      var Fk = Rk(kk);
      return "[object Function]" == Fk || "[object GeneratorFunction]" == Fk || "[object AsyncFunction]" == Fk || "[object Proxy]" == Fk
    }
  },
  5181: kk => {
    kk.exports = function(kk) {
      return "number" == typeof kk && kk > -1 && kk % 1 == 0 && kk <= 9007199254740991
    }
  },
  4852: (kk, Fk, Bk) => {
    var Rk = Bk(4856);
    kk.exports = function(kk) {
      return Rk(kk) && kk != +kk
    }
  },
  5099: kk => {
    kk.exports = function(kk) {
      return null == kk
    }
  },
  4856: (kk, Fk, Bk) => {
    var Rk = Bk(4808),
      tk = Bk(4823);
    kk.exports = function(kk) {
      return "number" == typeof kk || tk(kk) && "[object Number]" == Rk(kk)
    }
  },
  4766: kk => {
    kk.exports = function(kk) {
      var Fk = typeof kk;
      return null != kk && ("object" == Fk || "function" == Fk)
    }
  },
  4823: kk => {
    kk.exports = function(kk) {
      return null != kk && "object" == typeof kk
    }
  },
  5997: (kk, Fk, Bk) => {
    var Rk = Bk(4808),
      tk = Bk(6005),
      ak = Bk(4823),
      Xk = Function.prototype,
      bk = Object.prototype,
      wk = Xk.toString,
      dk = bk.hasOwnProperty,
      sk = wk.call(Object);
    kk.exports = function(kk) {
      if (!ak(kk) || "[object Object]" != Rk(kk)) return !1;
      var Fk = tk(kk);
      if (null === Fk) return !0;
      var Bk = dk.call(Fk, "constructor") && Fk.constructor;
      return "function" == typeof Bk && Bk instanceof Bk && wk.call(Bk) == sk
    }
  },
  4836: (kk, Fk, Bk) => {
    var Rk = Bk(4808),
      tk = Bk(4843),
      ak = Bk(4823);
    kk.exports = function(kk) {
      return "string" == typeof kk || !tk(kk) && ak(kk) && "[object String]" == Rk(kk)
    }
  },
  4805: (kk, Fk, Bk) => {
    var Rk = Bk(4808),
      tk = Bk(4823);
    kk.exports = function(kk) {
      return "symbol" == typeof kk || tk(kk) && "[object Symbol]" == Rk(kk)
    }
  },
  5403: (kk, Fk, Bk) => {
    var Rk = Bk(5409),
      tk = Bk(5411),
      ak = Bk(5419),
      Xk = ak && ak.isTypedArray,
      bk = Xk ? tk(Xk) : Rk;
    kk.exports = bk
  },
  5371: (kk, Fk, Bk) => {
    var Rk = Bk(5376),
      tk = Bk(5422),
      ak = Bk(5172);
    kk.exports = function(kk) {
      return ak(kk) ? Rk(kk) : tk(kk)
    }
  },
  5991: kk => {
    kk.exports = function(kk) {
      var Fk = null == kk ? 0 : kk.length;
      return Fk ? kk[Fk - 1] : void 0
    }
  },
  5887: (kk, Fk, Bk) => {
    var Rk = Bk(5089),
      tk = Bk(5235),
      ak = Bk(5541),
      Xk = Bk(4843);
    kk.exports = function(kk, Fk) {
      return (Xk(kk) ? Rk : ak)(kk, tk(Fk, 3))
    }
  },
  5950: (kk, Fk, Bk) => {
    var Rk = Bk(5955),
      tk = Bk(5558),
      ak = Bk(5235);
    kk.exports = function(kk, Fk) {
      var Bk = {};
      return Fk = ak(Fk, 3), tk(kk, (function(kk, tk, ak) {
        Rk(Bk, tk, Fk(kk, tk, ak))
      })), Bk
    }
  },
  5852: (kk, Fk, Bk) => {
    var Rk = Bk(5856),
      tk = Bk(5863),
      ak = Bk(5518);
    kk.exports = function(kk) {
      return kk && kk.length ? Rk(kk, ak, tk) : void 0
    }
  },
  4894: (kk, Fk, Bk) => {
    var Rk = Bk(4903);

    function tk(kk, Fk) {
      if ("function" != typeof kk || null != Fk && "function" != typeof Fk) throw new TypeError("Expected a function");
      var Bk = function() {
        var Rk = arguments,
          tk = Fk ? Fk.apply(this, Rk) : Rk[0],
          ak = Bk.cache;
        if (ak.has(tk)) return ak.get(tk);
        var Xk = kk.apply(this, Rk);
        return Bk.cache = ak.set(tk, Xk) || ak, Xk
      };
      return Bk.cache = new(tk.Cache || Rk), Bk
    }
    tk.Cache = Rk, kk.exports = tk
  },
  5870: (kk, Fk, Bk) => {
    var Rk = Bk(5856),
      tk = Bk(5877),
      ak = Bk(5518);
    kk.exports = function(kk) {
      return kk && kk.length ? Rk(kk, ak, tk) : void 0
    }
  },
  5712: kk => {
    kk.exports = function() {}
  },
  4772: (kk, Fk, Bk) => {
    var Rk = Bk(4775);
    kk.exports = function() {
      return Rk.Date.now()
    }
  },
  5521: (kk, Fk, Bk) => {
    var Rk = Bk(5525),
      tk = Bk(5533),
      ak = Bk(4879),
      Xk = Bk(5094);
    kk.exports = function(kk) {
      return ak(kk) ? Rk(Xk(kk)) : tk(kk)
    }
  },
  5141: (kk, Fk, Bk) => {
    var Rk = Bk(5145)();
    kk.exports = Rk
  },
  6035: (kk, Fk, Bk) => {
    var Rk = Bk(5305),
      tk = Bk(5235),
      ak = Bk(6041),
      Xk = Bk(4843),
      bk = Bk(5163);
    kk.exports = function(kk, Fk, Bk) {
      var wk = Xk(kk) ? Rk : ak;
      return Bk && bk(kk, Fk, Bk) && (Fk = void 0), wk(kk, tk(Fk, 3))
    }
  },
  5199: (kk, Fk, Bk) => {
    var Rk = Bk(5201),
      tk = Bk(5227),
      ak = Bk(5586),
      Xk = Bk(5163),
      bk = ak((function(kk, Fk) {
        if (null == kk) return [];
        var Bk = Fk.length;
        return Bk > 1 && Xk(kk, Fk[0], Fk[1]) ? Fk = [] : Bk > 2 && Xk(Fk[0], Fk[1], Fk[2]) && (Fk = [Fk[0]]), tk(kk, Rk(Fk, 1), [])
      }));
    kk.exports = bk
  },
  5365: kk => {
    kk.exports = function() {
      return []
    }
  },
  5400: kk => {
    kk.exports = function() {
      return !1
    }
  },
  4758: (kk, Fk, Bk) => {
    var Rk = Bk(4761),
      tk = Bk(4766);
    kk.exports = function(kk, Fk, Bk) {
      var ak = !0,
        Xk = !0;
      if ("function" != typeof kk) throw new TypeError("Expected a function");
      return tk(Bk) && (ak = "leading" in Bk ? !!Bk.leading : ak, Xk = "trailing" in Bk ? !!Bk.trailing : Xk), Rk(kk, Fk, {
        leading: ak,
        maxWait: Fk,
        trailing: Xk
      })
    }
  },
  5191: (kk, Fk, Bk) => {
    var Rk = Bk(4789),
      tk = 1 / 0;
    kk.exports = function(kk) {
      return kk ? (kk = Rk(kk)) === tk || kk === -1 / 0 ? 17976931348623157e292 * (kk < 0 ? -1 : 1) : kk === kk ? kk : 0 : 0 === kk ? kk : 0
    }
  },
  6066: (kk, Fk, Bk) => {
    var Rk = Bk(5191);
    kk.exports = function(kk) {
      var Fk = Rk(kk),
        Bk = Fk % 1;
      return Fk === Fk ? Bk ? Fk - Bk : Fk : 0
    }
  },
  4789: (kk, Fk, Bk) => {
    var Rk = Bk(4793),
      tk = Bk(4766),
      ak = Bk(4805),
      Xk = /^[-+]0x[0-9a-f]+$/i,
      bk = /^0b[01]+$/i,
      wk = /^0o[0-7]+$/i,
      dk = parseInt;
    kk.exports = function(kk) {
      if ("number" == typeof kk) return kk;
      if (ak(kk)) return NaN;
      if (tk(kk)) {
        var Fk = "function" == typeof kk.valueOf ? kk.valueOf() : kk;
        kk = tk(Fk) ? Fk + "" : Fk
      }
      if ("string" != typeof kk) return 0 === kk ? kk : +kk;
      kk = Rk(kk);
      var Bk = bk.test(kk);
      return Bk || wk.test(kk) ? dk(kk.slice(2), Bk ? 2 : 8) : Xk.test(kk) ? NaN : +kk
    }
  },
  5077: (kk, Fk, Bk) => {
    var Rk = Bk(5086);
    kk.exports = function(kk) {
      return null == kk ? "" : Rk(kk)
    }
  },
  5671: (kk, Fk, Bk) => {
    var Rk = Bk(5235),
      tk = Bk(5677);
    kk.exports = function(kk, Fk) {
      return kk && kk.length ? tk(kk, Rk(Fk, 2)) : []
    }
  },
  5735: (kk, Fk, Bk) => {
    var Rk = Bk(5744)("toUpperCase");
    kk.exports = Rk
  },
  5811: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => rF
    });
    var Rk = Bk(61),
      tk = Bk(4667),
      ak = Bk.n(tk);
    const {
      getOwnPropertyNames: Xk,
      getOwnPropertySymbols: bk
    } = Object, {
      hasOwnProperty: wk
    } = Object.prototype;

    function dk(kk, Fk) {
      return function(Bk, Rk, tk) {
        return kk(Bk, Rk, tk) && Fk(Bk, Rk, tk)
      }
    }

    function sk(kk) {
      return function(Fk, Bk, Rk) {
        if (!Fk || !Bk || "object" !== typeof Fk || "object" !== typeof Bk) return kk(Fk, Bk, Rk);
        const {
          cache: tk
        } = Rk, ak = tk.get(Fk), Xk = tk.get(Bk);
        if (ak && Xk) return ak === Bk && Xk === Fk;
        tk.set(Fk, Bk), tk.set(Bk, Fk);
        const bk = kk(Fk, Bk, Rk);
        return tk.delete(Fk), tk.delete(Bk), bk
      }
    }

    function Vk(kk) {
      return Xk(kk).concat(bk(kk))
    }
    const Jk = Object.hasOwn || ((kk, Fk) => wk.call(kk, Fk));

    function Ak(kk, Fk) {
      return kk === Fk || !kk && !Fk && kk !== kk && Fk !== Fk
    }
    const {
      getOwnPropertyDescriptor: ek,
      keys: yk
    } = Object;

    function fk(kk, Fk) {
      return kk.byteLength === Fk.byteLength && Mk(new Uint8Array(kk), new Uint8Array(Fk))
    }

    function mk(kk, Fk, Bk) {
      let Rk = kk.length;
      if (Fk.length !== Rk) return !1;
      for (; Rk-- > 0;)
        if (!Bk.equals(kk[Rk], Fk[Rk], Rk, Rk, kk, Fk, Bk)) return !1;
      return !0
    }

    function Wk(kk, Fk) {
      return kk.byteLength === Fk.byteLength && Mk(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength), new Uint8Array(Fk.buffer, Fk.byteOffset, Fk.byteLength))
    }

    function vk(kk, Fk) {
      return Ak(kk.getTime(), Fk.getTime())
    }

    function ik(kk, Fk) {
      return kk.name === Fk.name && kk.message === Fk.message && kk.cause === Fk.cause && kk.stack === Fk.stack
    }

    function Yk(kk, Fk) {
      return kk === Fk
    }

    function Lk(kk, Fk, Bk) {
      const Rk = kk.size;
      if (Rk !== Fk.size) return !1;
      if (!Rk) return !0;
      const tk = new Array(Rk),
        ak = kk.entries();
      let Xk, bk, wk = 0;
      for (;
        (Xk = ak.next()) && !Xk.done;) {
        const Rk = Fk.entries();
        let ak = !1,
          dk = 0;
        for (;
          (bk = Rk.next()) && !bk.done;) {
          if (tk[dk]) {
            dk++;
            continue
          }
          const Rk = Xk.value,
            sk = bk.value;
          if (Bk.equals(Rk[0], sk[0], wk, dk, kk, Fk, Bk) && Bk.equals(Rk[1], sk[1], Rk[0], sk[0], kk, Fk, Bk)) {
            ak = tk[dk] = !0;
            break
          }
          dk++
        }
        if (!ak) return !1;
        wk++
      }
      return !0
    }
    const Ok = Ak;

    function Ek(kk, Fk, Bk) {
      const Rk = yk(kk);
      let tk = Rk.length;
      if (yk(Fk).length !== tk) return !1;
      for (; tk-- > 0;)
        if (!Uk(kk, Fk, Bk, Rk[tk])) return !1;
      return !0
    }

    function Sk(kk, Fk, Bk) {
      const Rk = Vk(kk);
      let tk, ak, Xk, bk = Rk.length;
      if (Vk(Fk).length !== bk) return !1;
      for (; bk-- > 0;) {
        if (tk = Rk[bk], !Uk(kk, Fk, Bk, tk)) return !1;
        if (ak = ek(kk, tk), Xk = ek(Fk, tk), (ak || Xk) && (!ak || !Xk || ak.configurable !== Xk.configurable || ak.enumerable !== Xk.enumerable || ak.writable !== Xk.writable)) return !1
      }
      return !0
    }

    function Nk(kk, Fk) {
      return Ak(kk.valueOf(), Fk.valueOf())
    }

    function Hk(kk, Fk) {
      return kk.source === Fk.source && kk.flags === Fk.flags
    }

    function uk(kk, Fk, Bk) {
      const Rk = kk.size;
      if (Rk !== Fk.size) return !1;
      if (!Rk) return !0;
      const tk = new Array(Rk),
        ak = kk.values();
      let Xk, bk;
      for (;
        (Xk = ak.next()) && !Xk.done;) {
        const Rk = Fk.values();
        let ak = !1,
          wk = 0;
        for (;
          (bk = Rk.next()) && !bk.done;) {
          if (!tk[wk] && Bk.equals(Xk.value, bk.value, Xk.value, bk.value, kk, Fk, Bk)) {
            ak = tk[wk] = !0;
            break
          }
          wk++
        }
        if (!ak) return !1
      }
      return !0
    }

    function Mk(kk, Fk) {
      let Bk = kk.byteLength;
      if (Fk.byteLength !== Bk || kk.byteOffset !== Fk.byteOffset) return !1;
      for (; Bk-- > 0;)
        if (kk[Bk] !== Fk[Bk]) return !1;
      return !0
    }

    function gk(kk, Fk) {
      return kk.hostname === Fk.hostname && kk.pathname === Fk.pathname && kk.protocol === Fk.protocol && kk.port === Fk.port && kk.hash === Fk.hash && kk.username === Fk.username && kk.password === Fk.password
    }

    function Uk(kk, Fk, Bk, Rk) {
      return !("_owner" !== Rk && "__o" !== Rk && "__v" !== Rk || !kk.$$typeof && !Fk.$$typeof) || Jk(Fk, Rk) && Bk.equals(kk[Rk], Fk[Rk], Rk, Rk, kk, Fk, Bk)
    }
    const ck = {
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
      Gk = Object.prototype.toString;

    function Tk(kk) {
      let {
        areArrayBuffersEqual: Fk,
        areArraysEqual: Bk,
        areDataViewsEqual: Rk,
        areDatesEqual: tk,
        areErrorsEqual: ak,
        areFunctionsEqual: Xk,
        areMapsEqual: bk,
        areNumbersEqual: wk,
        areObjectsEqual: dk,
        arePrimitiveWrappersEqual: sk,
        areRegExpsEqual: Vk,
        areSetsEqual: Jk,
        areTypedArraysEqual: Ak,
        areUrlsEqual: ek,
        unknownTagComparators: yk
      } = kk;
      return function(kk, fk, mk) {
        if (kk === fk) return !0;
        if (null == kk || null == fk) return !1;
        const Wk = typeof kk;
        if (Wk !== typeof fk) return !1;
        if ("object" !== Wk) return "number" === Wk ? wk(kk, fk, mk) : "function" === Wk && Xk(kk, fk, mk);
        const vk = kk.constructor;
        if (vk !== fk.constructor) return !1;
        if (vk === Object) return dk(kk, fk, mk);
        if (Array.isArray(kk)) return Bk(kk, fk, mk);
        if (vk === Date) return tk(kk, fk, mk);
        if (vk === RegExp) return Vk(kk, fk, mk);
        if (vk === Map) return bk(kk, fk, mk);
        if (vk === Set) return Jk(kk, fk, mk);
        const ik = Gk.call(kk);
        if ("[object Date]" === ik) return tk(kk, fk, mk);
        if ("[object RegExp]" === ik) return Vk(kk, fk, mk);
        if ("[object Map]" === ik) return bk(kk, fk, mk);
        if ("[object Set]" === ik) return Jk(kk, fk, mk);
        if ("[object Object]" === ik) return "function" !== typeof kk.then && "function" !== typeof fk.then && dk(kk, fk, mk);
        if ("[object URL]" === ik) return ek(kk, fk, mk);
        if ("[object Error]" === ik) return ak(kk, fk, mk);
        if ("[object Arguments]" === ik) return dk(kk, fk, mk);
        if (ck[ik]) return Ak(kk, fk, mk);
        if ("[object ArrayBuffer]" === ik) return Fk(kk, fk, mk);
        if ("[object DataView]" === ik) return Rk(kk, fk, mk);
        if ("[object Boolean]" === ik || "[object Number]" === ik || "[object String]" === ik) return sk(kk, fk, mk);
        if (yk) {
          let Fk = yk[ik];
          if (!Fk) {
            const Bk = null != (Yk = kk) ? Yk[Symbol.toStringTag] : void 0;
            Bk && (Fk = yk[Bk])
          }
          if (Fk) return Fk(kk, fk, mk)
        }
        var Yk;
        return !1
      }
    }
    const rk = Dk();
    Dk({
      strict: !0
    }), Dk({
      circular: !0
    }), Dk({
      circular: !0,
      strict: !0
    }), Dk({
      createInternalComparator: () => Ak
    }), Dk({
      strict: !0,
      createInternalComparator: () => Ak
    }), Dk({
      circular: !0,
      createInternalComparator: () => Ak
    }), Dk({
      circular: !0,
      createInternalComparator: () => Ak,
      strict: !0
    });

    function Dk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: Fk = !1,
        createInternalComparator: Bk,
        createState: Rk,
        strict: tk = !1
      } = kk, ak = function(kk) {
        let {
          circular: Fk,
          createCustomConfig: Bk,
          strict: Rk
        } = kk, tk = {
          areArrayBuffersEqual: fk,
          areArraysEqual: Rk ? Sk : mk,
          areDataViewsEqual: Wk,
          areDatesEqual: vk,
          areErrorsEqual: ik,
          areFunctionsEqual: Yk,
          areMapsEqual: Rk ? dk(Lk, Sk) : Lk,
          areNumbersEqual: Ok,
          areObjectsEqual: Rk ? Sk : Ek,
          arePrimitiveWrappersEqual: Nk,
          areRegExpsEqual: Hk,
          areSetsEqual: Rk ? dk(uk, Sk) : uk,
          areTypedArraysEqual: Rk ? dk(Mk, Sk) : Mk,
          areUrlsEqual: gk,
          unknownTagComparators: void 0
        };
        if (Bk && (tk = Object.assign({}, tk, Bk(tk))), Fk) {
          const kk = sk(tk.areArraysEqual),
            Fk = sk(tk.areMapsEqual),
            Bk = sk(tk.areObjectsEqual),
            Rk = sk(tk.areSetsEqual);
          tk = Object.assign({}, tk, {
            areArraysEqual: kk,
            areMapsEqual: Fk,
            areObjectsEqual: Bk,
            areSetsEqual: Rk
          })
        }
        return tk
      }(kk), Xk = Tk(ak);
      var bk;
      return function(kk) {
        let {
          circular: Fk,
          comparator: Bk,
          createState: Rk,
          equals: tk,
          strict: ak
        } = kk;
        if (Rk) return function(kk, Xk) {
          const {
            cache: bk = (Fk ? new WeakMap : void 0),
            meta: wk
          } = Rk();
          return Bk(kk, Xk, {
            cache: bk,
            equals: tk,
            meta: wk,
            strict: ak
          })
        };
        if (Fk) return function(kk, Fk) {
          return Bk(kk, Fk, {
            cache: new WeakMap,
            equals: tk,
            meta: void 0,
            strict: ak
          })
        };
        const Xk = {
          cache: void 0,
          equals: tk,
          meta: void 0,
          strict: ak
        };
        return function(kk, Fk) {
          return Bk(kk, Fk, Xk)
        }
      }({
        circular: Fk,
        comparator: Xk,
        createState: Rk,
        equals: Bk ? Bk(Xk) : (bk = Xk, function(kk, Fk, Bk, Rk, tk, ak, Xk) {
          return bk(kk, Fk, Xk)
        }),
        strict: tk
      })
    }

    function zk(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Bk = -1;
      requestAnimationFrame((function Rk(tk) {
        Bk < 0 && (Bk = tk), tk - Bk > Fk ? (kk(tk), Bk = -1) : function(kk) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(kk)
        }(Rk)
      }))
    }

    function Pk(kk) {
      return Pk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Pk(kk)
    }

    function hk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return qk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return qk(kk, Fk)
      }(kk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function Ck() {
      var kk = function() {
          return null
        },
        Fk = !1,
        Bk = function Bk(Rk) {
          if (!Fk) {
            if (Array.isArray(Rk)) {
              if (!Rk.length) return;
              var tk = hk(Rk),
                ak = tk[0],
                Xk = tk.slice(1);
              return "number" === typeof ak ? void zk(Bk.bind(null, Xk), ak) : (Bk(ak), void zk(Bk.bind(null, Xk)))
            }
            "object" === Pk(Rk) && kk(Rk), "function" === typeof Rk && Rk()
          }
        };
      return {
        stop: function() {
          Fk = !0
        },
        start: function(kk) {
          Fk = !1, Bk(kk)
        },
        subscribe: function(Fk) {
          return kk = Fk,
            function() {
              kk = function() {
                return null
              }
            }
        }
      }
    }

    function Zk(kk) {
      return Zk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Zk(kk)
    }

    function pk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Kk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? pk(Object(Bk), !0).forEach((function(Fk) {
          xk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : pk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function xk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" !== Zk(kk) || null === kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" !== Zk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" === Zk(Fk) ? Fk : String(Fk)
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var jk = function(kk) {
        return kk
      },
      lk = function(kk, Fk) {
        return Object.keys(Fk).reduce((function(Bk, Rk) {
          return Kk(Kk({}, Bk), {}, xk({}, Rk, kk(Rk, Fk[Rk])))
        }), {})
      },
      nk = function(kk, Fk, Bk) {
        return kk.map((function(kk) {
          return "".concat((Rk = kk, Rk.replace(/([A-Z])/g, (function(kk) {
            return "-".concat(kk.toLowerCase())
          }))), " ").concat(Fk, "ms ").concat(Bk);
          var Rk
        })).join(",")
      };

    function Ik(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || kF(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return FF(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || kF(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kF(kk, Fk) {
      if (kk) {
        if ("string" === typeof kk) return FF(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === Bk && kk.constructor && (Bk = kk.constructor.name), "Map" === Bk || "Set" === Bk ? Array.from(kk) : "Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk) ? FF(kk, Fk) : void 0
      }
    }

    function FF(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }
    var BF = 1e-4,
      RF = function(kk, Fk) {
        return [0, 3 * kk, 3 * Fk - 6 * kk, 3 * kk - 3 * Fk + 1]
      },
      tF = function(kk, Fk) {
        return kk.map((function(kk, Bk) {
          return kk * Math.pow(Fk, Bk)
        })).reduce((function(kk, Fk) {
          return kk + Fk
        }))
      },
      aF = function(kk, Fk) {
        return function(Bk) {
          var Rk = RF(kk, Fk);
          return tF(Rk, Bk)
        }
      },
      XF = function() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        var Rk = Fk[0],
          tk = Fk[1],
          ak = Fk[2],
          Xk = Fk[3];
        if (1 === Fk.length) switch (Fk[0]) {
          case "linear":
            Rk = 0, tk = 0, ak = 1, Xk = 1;
            break;
          case "ease":
            Rk = .25, tk = .1, ak = .25, Xk = 1;
            break;
          case "ease-in":
            Rk = .42, tk = 0, ak = 1, Xk = 1;
            break;
          case "ease-out":
            Rk = .42, tk = 0, ak = .58, Xk = 1;
            break;
          case "ease-in-out":
            Rk = 0, tk = 0, ak = .58, Xk = 1;
            break;
          default:
            var bk = Fk[0].split("(");
            if ("cubic-bezier" === bk[0] && 4 === bk[1].split(")")[0].split(",").length) {
              var wk = Ik(bk[1].split(")")[0].split(",").map((function(kk) {
                return parseFloat(kk)
              })), 4);
              Rk = wk[0], tk = wk[1], ak = wk[2], Xk = wk[3]
            }
        } [Rk, ak, tk, Xk].every((function(kk) {
          return "number" === typeof kk && kk >= 0 && kk <= 1
        }));
        var dk, sk, Vk = aF(Rk, ak),
          Jk = aF(tk, Xk),
          Ak = (dk = Rk, sk = ak, function(kk) {
            var Fk = RF(dk, sk),
              Bk = [].concat(Qk(Fk.map((function(kk, Fk) {
                return kk * Fk
              })).slice(1)), [0]);
            return tF(Bk, kk)
          }),
          ek = function(kk) {
            for (var Fk, Bk = kk > 1 ? 1 : kk, Rk = Bk, tk = 0; tk < 8; ++tk) {
              var ak = Vk(Rk) - Bk,
                Xk = Ak(Rk);
              if (Math.abs(ak - Bk) < BF || Xk < BF) return Jk(Rk);
              Rk = (Fk = Rk - ak / Xk) > 1 ? 1 : Fk < 0 ? 0 : Fk
            }
            return Jk(Rk)
          };
        return ek.isStepper = !1, ek
      },
      bF = function() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        var Rk = Fk[0];
        if ("string" === typeof Rk) switch (Rk) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return XF(Rk);
          case "spring":
            return function() {
              var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                Fk = kk.stiff,
                Bk = void 0 === Fk ? 100 : Fk,
                Rk = kk.damping,
                tk = void 0 === Rk ? 8 : Rk,
                ak = kk.dt,
                Xk = void 0 === ak ? 17 : ak,
                bk = function(kk, Fk, Rk) {
                  var ak = Rk + (-(kk - Fk) * Bk - Rk * tk) * Xk / 1e3,
                    bk = Rk * Xk / 1e3 + kk;
                  return Math.abs(bk - Fk) < BF && Math.abs(ak) < BF ? [Fk, 0] : [bk, ak]
                };
              return bk.isStepper = !0, bk.dt = Xk, bk
            }();
          default:
            if ("cubic-bezier" === Rk.split("(")[0]) return XF(Rk)
        }
        return "function" === typeof Rk ? Rk : null
      };

    function wF(kk) {
      return wF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, wF(kk)
    }

    function dF(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return yF(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || eF(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sF(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function VF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? sF(Object(Bk), !0).forEach((function(Fk) {
          JF(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : sF(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function JF(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" !== wF(kk) || null === kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" !== wF(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" === wF(Fk) ? Fk : String(Fk)
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function AF(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || eF(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eF(kk, Fk) {
      if (kk) {
        if ("string" === typeof kk) return yF(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === Bk && kk.constructor && (Bk = kk.constructor.name), "Map" === Bk || "Set" === Bk ? Array.from(kk) : "Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk) ? yF(kk, Fk) : void 0
      }
    }

    function yF(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }
    var fF = function(kk, Fk, Bk) {
        return kk + (Fk - kk) * Bk
      },
      mF = function(kk) {
        return kk.from !== kk.to
      },
      WF = function kk(Fk, Bk, Rk) {
        var tk = lk((function(kk, Bk) {
          if (mF(Bk)) {
            var Rk = AF(Fk(Bk.from, Bk.to, Bk.bs), 2),
              tk = Rk[0],
              ak = Rk[1];
            return VF(VF({}, Bk), {}, {
              from: tk,
              bs: ak
            })
          }
          return Bk
        }), Bk);
        return Rk < 1 ? lk((function(kk, Fk) {
          return mF(Fk) ? VF(VF({}, Fk), {}, {
            bs: fF(Fk.bs, tk[kk].bs, Rk),
            from: fF(Fk.from, tk[kk].from, Rk)
          }) : Fk
        }), Bk) : kk(Fk, tk, Rk - 1)
      };
    const vF = function(kk, Fk, Bk, Rk, tk) {
      var ak, Xk, bk, wk, dk = (ak = kk, Xk = Fk, [Object.keys(ak), Object.keys(Xk)].reduce((function(kk, Fk) {
          return kk.filter((function(kk) {
            return Fk.includes(kk)
          }))
        }))),
        sk = dk.reduce((function(Bk, Rk) {
          return VF(VF({}, Bk), {}, JF({}, Rk, [kk[Rk], Fk[Rk]]))
        }), {}),
        Vk = dk.reduce((function(Bk, Rk) {
          return VF(VF({}, Bk), {}, JF({}, Rk, {
            from: kk[Rk],
            bs: 0,
            to: Fk[Rk]
          }))
        }), {}),
        Jk = -1,
        Ak = function() {
          return null
        };
      return Ak = Bk.isStepper ? function(Rk) {
          bk || (bk = Rk);
          var ak = (Rk - bk) / Bk.dt;
          Vk = WF(Bk, Vk, ak), tk(VF(VF(VF({}, kk), Fk), lk((function(kk, Fk) {
            return Fk.from
          }), Vk))), bk = Rk, Object.values(Vk).filter(mF).length && (Jk = requestAnimationFrame(Ak))
        } : function(ak) {
          wk || (wk = ak);
          var Xk = (ak - wk) / Rk,
            bk = lk((function(kk, Fk) {
              return fF.apply(void 0, dF(Fk).concat([Bk(Xk)]))
            }), sk);
          if (tk(VF(VF(VF({}, kk), Fk), bk)), Xk < 1) Jk = requestAnimationFrame(Ak);
          else {
            var dk = lk((function(kk, Fk) {
              return fF.apply(void 0, dF(Fk).concat([Bk(1)]))
            }), sk);
            tk(VF(VF(VF({}, kk), Fk), dk))
          }
        },
        function() {
          return requestAnimationFrame(Ak),
            function() {
              cancelAnimationFrame(Jk)
            }
        }
    };

    function iF(kk) {
      return iF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, iF(kk)
    }
    var YF = ["children", "UA", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function oF(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk, Rk, tk = {},
          ak = Object.keys(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || (tk[Bk] = kk[Bk]);
        return tk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function LF(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return OF(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return OF(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return OF(kk, Fk)
      }(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OF(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function EF(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function SF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? EF(Object(Bk), !0).forEach((function(Fk) {
          NF(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : EF(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function NF(kk, Fk, Bk) {
      return (Fk = uF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function HF(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, uF(Rk.key), Rk)
      }
    }

    function uF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" !== iF(kk) || null === kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" !== iF(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" === iF(Fk) ? Fk : String(Fk)
    }

    function MF(kk, Fk) {
      return MF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, MF(kk, Fk)
    }

    function gF(kk) {
      var Fk = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (kk) {
          return !1
        }
      }();
      return function() {
        var Bk, Rk = GF(kk);
        if (Fk) {
          var tk = GF(this).constructor;
          Bk = Reflect.construct(Rk, arguments, tk)
        } else Bk = Rk.apply(this, arguments);
        return UF(this, Bk)
      }
    }

    function UF(kk, Fk) {
      if (Fk && ("object" === iF(Fk) || "function" === typeof Fk)) return Fk;
      if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
      return cF(kk)
    }

    function cF(kk) {
      if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return kk
    }

    function GF(kk) {
      return GF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, GF(kk)
    }
    var TF = function(kk) {
      ! function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && MF(kk, Fk)
      }(Xk, kk);
      var Fk, Bk, tk, ak = gF(Xk);

      function Xk(kk, Fk) {
        var Bk;
        ! function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Xk);
        var Rk = (Bk = ak.call(this, kk, Fk)).props,
          tk = Rk.isActive,
          bk = Rk.attributeName,
          wk = Rk.from,
          dk = Rk.to,
          sk = Rk.steps,
          Vk = Rk.children,
          Jk = Rk.duration;
        if (Bk.handleStyleChange = Bk.handleStyleChange.bind(cF(Bk)), Bk.changeStyle = Bk.changeStyle.bind(cF(Bk)), !tk || Jk <= 0) return Bk.state = {
          style: {}
        }, "function" === typeof Vk && (Bk.state = {
          style: dk
        }), UF(Bk);
        if (sk && sk.length) Bk.state = {
          style: sk[0].style
        };
        else if (wk) {
          if ("function" === typeof Vk) return Bk.state = {
            style: wk
          }, UF(Bk);
          Bk.state = {
            style: bk ? NF({}, bk, wk) : wk
          }
        } else Bk.state = {
          style: {}
        };
        return Bk
      }
      return Fk = Xk, (Bk = [{
        key: "componentDidMount",
        value: function() {
          var kk = this.props,
            Fk = kk.isActive,
            Bk = kk.canBegin;
          this.mounted = !0, Fk && Bk && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(kk) {
          var Fk = this.props,
            Bk = Fk.isActive,
            Rk = Fk.canBegin,
            tk = Fk.attributeName,
            ak = Fk.shouldReAnimate,
            Xk = Fk.to,
            bk = Fk.from,
            wk = this.state.style;
          if (Rk)
            if (Bk) {
              if (!(rk(kk.to, Xk) && kk.canBegin && kk.isActive)) {
                var dk = !kk.canBegin || !kk.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var sk = dk || ak ? bk : kk.to;
                if (this.state && wk) {
                  var Vk = {
                    style: tk ? NF({}, tk, sk) : sk
                  };
                  (tk && wk[tk] !== sk || !tk && wk !== sk) && this.setState(Vk)
                }
                this.runAnimation(SF(SF({}, this.props), {}, {
                  from: sk,
                  UA: 0
                }))
              }
            } else {
              var Jk = {
                style: tk ? NF({}, tk, Xk) : Xk
              };
              this.state && wk && (tk && wk[tk] !== Xk || !tk && wk !== Xk) && this.setState(Jk)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var kk = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), kk && kk()
        }
      }, {
        key: "handleStyleChange",
        value: function(kk) {
          this.changeStyle(kk)
        }
      }, {
        key: "changeStyle",
        value: function(kk) {
          this.mounted && this.setState({
            style: kk
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(kk) {
          var Fk = this,
            Bk = kk.from,
            Rk = kk.to,
            tk = kk.duration,
            ak = kk.easing,
            Xk = kk.UA,
            bk = kk.onAnimationEnd,
            wk = kk.onAnimationStart,
            dk = vF(Bk, Rk, bF(ak), tk, this.changeStyle);
          this.manager.start([wk, Xk, function() {
            Fk.stopJSAnimation = dk()
          }, tk, bk])
        }
      }, {
        key: "runStepAnimation",
        value: function(kk) {
          var Fk = this,
            Bk = kk.steps,
            Rk = kk.UA,
            tk = kk.onAnimationStart,
            ak = Bk[0],
            Xk = ak.style,
            bk = ak.duration,
            wk = void 0 === bk ? 0 : bk;
          return this.manager.start([tk].concat(LF(Bk.reduce((function(kk, Rk, tk) {
            if (0 === tk) return kk;
            var ak = Rk.duration,
              Xk = Rk.easing,
              bk = void 0 === Xk ? "ease" : Xk,
              wk = Rk.style,
              dk = Rk.properties,
              sk = Rk.onAnimationEnd,
              Vk = tk > 0 ? Bk[tk - 1] : Rk,
              Jk = dk || Object.keys(wk);
            if ("function" === typeof bk || "spring" === bk) return [].concat(LF(kk), [Fk.runJSAnimation.bind(Fk, {
              from: Vk.style,
              to: wk,
              duration: ak,
              easing: bk
            }), ak]);
            var Ak = nk(Jk, ak, bk),
              ek = SF(SF(SF({}, Vk.style), wk), {}, {
                transition: Ak
              });
            return [].concat(LF(kk), [ek, ak, sk]).filter(jk)
          }), [Xk, Math.max(wk, Rk)])), [kk.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(kk) {
          this.manager || (this.manager = Ck());
          var Fk = kk.UA,
            Bk = kk.duration,
            Rk = kk.attributeName,
            tk = kk.to,
            ak = kk.easing,
            Xk = kk.onAnimationStart,
            bk = kk.onAnimationEnd,
            wk = kk.steps,
            dk = kk.children,
            sk = this.manager;
          if (this.unSubscribe = sk.subscribe(this.handleStyleChange), "function" !== typeof ak && "function" !== typeof dk && "spring" !== ak)
            if (wk.length > 1) this.runStepAnimation(kk);
            else {
              var Vk = Rk ? NF({}, Rk, tk) : tk,
                Jk = nk(Object.keys(Vk), Bk, ak);
              sk.start([Xk, Fk, SF(SF({}, Vk), {}, {
                transition: Jk
              }), Bk, bk])
            }
          else this.runJSAnimation(kk)
        }
      }, {
        key: "render",
        value: function() {
          var kk = this.props,
            Fk = kk.children,
            Bk = (kk.UA, kk.duration),
            tk = (kk.attributeName, kk.easing, kk.isActive),
            ak = (kk.steps, kk.from, kk.to, kk.canBegin, kk.onAnimationEnd, kk.shouldReAnimate, kk.onAnimationReStart, oF(kk, YF)),
            Xk = Rk.Children.count(Fk),
            bk = this.state.style;
          if ("function" === typeof Fk) return Fk(bk);
          if (!tk || 0 === Xk || Bk <= 0) return Fk;
          var wk = function(kk) {
            var Fk = kk.props,
              Bk = Fk.style,
              tk = void 0 === Bk ? {} : Bk,
              Xk = Fk.className;
            return (0, Rk.cloneElement)(kk, SF(SF({}, ak), {}, {
              style: SF(SF({}, tk), bk),
              className: Xk
            }))
          };
          return 1 === Xk ? wk(Rk.Children.only(Fk)) : Rk.createElement("div", null, Rk.Children.map(Fk, (function(kk) {
            return wk(kk)
          })))
        }
      }]) && HF(Fk.prototype, Bk), tk && HF(Fk, tk), Object.defineProperty(Fk, "prototype", {
        writable: !1
      }), Xk
    }(Rk.PureComponent);
    TF.displayName = "Animate", TF.defaultProps = {
      UA: 0,
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
    }, TF.propTypes = {
      from: ak().oneOfType([ak().object, ak().string]),
      to: ak().oneOfType([ak().object, ak().string]),
      attributeName: ak().string,
      duration: ak().number,
      UA: ak().number,
      easing: ak().oneOfType([ak().string, ak().func]),
      steps: ak().arrayOf(ak().shape({
        duration: ak().number.isRequired,
        style: ak().object.isRequired,
        easing: ak().oneOfType([ak().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ak().func]),
        properties: ak().arrayOf("string"),
        onAnimationEnd: ak().func
      })),
      children: ak().oneOfType([ak().node, ak().func]),
      isActive: ak().bool,
      canBegin: ak().bool,
      onAnimationEnd: ak().func,
      shouldReAnimate: ak().bool,
      onAnimationStart: ak().func,
      onAnimationReStart: ak().func
    };
    const rF = TF
  },
  6073: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => hk
    });
    var Rk, tk = Bk(61),
      ak = Bk(4750),
      Xk = Bk(5811),
      bk = Bk(4936),
      wk = Bk.n(bk),
      dk = Bk(5852),
      sk = Bk.n(dk),
      Vk = Bk(5099),
      Jk = Bk.n(Vk),
      Ak = Bk(4852),
      ek = Bk.n(Ak),
      yk = Bk(5893),
      fk = Bk.n(yk),
      mk = Bk(6069),
      Wk = Bk(5794),
      vk = Bk(5647),
      ik = Bk(5988),
      Yk = Bk(5663),
      Lk = Bk(4829),
      Ok = Bk(5833),
      Ek = Bk(5106),
      Sk = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      Nk = ["key"];

    function Hk(kk) {
      return Hk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Hk(kk)
    }

    function uk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function Mk() {
      return Mk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Mk.apply(this, arguments)
    }

    function gk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Uk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? gk(Object(Bk), !0).forEach((function(Fk) {
          zk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : gk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function ck(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Pk(Rk.key), Rk)
      }
    }

    function Gk(kk, Fk, Bk) {
      return Fk = rk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === Hk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, Tk() ? Reflect.construct(Fk, Bk || [], rk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function Tk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (Tk = function() {
        return !!kk
      })()
    }

    function rk(kk) {
      return rk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, rk(kk)
    }

    function Dk(kk, Fk) {
      return Dk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Dk(kk, Fk)
    }

    function zk(kk, Fk, Bk) {
      return (Fk = Pk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Pk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Hk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Hk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Hk(Fk) ? Fk : Fk + ""
    }
    var hk = function(kk) {
      function Fk() {
        var kk;
        ! function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk);
        for (var Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        return zk(kk = Gk(this, Fk, [].concat(Rk)), "state", {
          isAnimationFinished: !0
        }), zk(kk, "id", (0, Lk.E)("recharts-area-")), zk(kk, "handleAnimationEnd", (function() {
          var Fk = kk.props.onAnimationEnd;
          kk.setState({
            isAnimationFinished: !0
          }), wk()(Fk) && Fk()
        })), zk(kk, "handleAnimationStart", (function() {
          var Fk = kk.props.onAnimationStart;
          kk.setState({
            isAnimationFinished: !1
          }), wk()(Fk) && Fk()
        })), kk
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Dk(kk, Fk)
      }(Fk, kk), Bk = Fk, Rk = [{
        key: "renderDots",
        value: function(kk, Bk, Rk) {
          var ak = this.props.isAnimationActive,
            Xk = this.state.isAnimationFinished;
          if (ak && !Xk) return null;
          var bk = this.props,
            wk = bk.dot,
            dk = bk.points,
            sk = bk.dataKey,
            Vk = (0, Ek.b)(this.props, !1),
            Jk = (0, Ek.b)(wk, !0),
            Ak = dk.map((function(kk, Bk) {
              var Rk = Uk(Uk(Uk({
                key: "dot-".concat(Bk),
                r: 3
              }, Vk), Jk), {}, {
                index: Bk,
                cx: kk.x,
                cy: kk.y,
                dataKey: sk,
                value: kk.value,
                payload: kk.payload,
                points: dk
              });
              return Fk.renderDotItem(wk, Rk)
            })),
            ek = {
              clipPath: kk ? "url(#clipPath-".concat(Bk ? "" : "dots-").concat(Rk, ")") : null
            };
          return tk.createElement(vk.b, Mk({
            className: "recharts-area-dots"
          }, ek), Ak)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(kk) {
          var Fk = this.props,
            Bk = Fk.baseLine,
            Rk = Fk.points,
            ak = Fk.strokeWidth,
            Xk = Rk[0].x,
            bk = Rk[Rk.length - 1].x,
            wk = kk * Math.abs(Xk - bk),
            dk = sk()(Rk.map((function(kk) {
              return kk.y || 0
            })));
          return (0, Lk.y)(Bk) && "number" === typeof Bk ? dk = Math.max(Bk, dk) : Bk && Array.isArray(Bk) && Bk.length && (dk = Math.max(sk()(Bk.map((function(kk) {
            return kk.y || 0
          }))), dk)), (0, Lk.y)(dk) ? tk.createElement("rect", {
            x: Xk < bk ? Xk : Xk - wk,
            y: 0,
            width: wk,
            height: Math.floor(dk + (ak ? parseInt("".concat(ak), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(kk) {
          var Fk = this.props,
            Bk = Fk.baseLine,
            Rk = Fk.points,
            ak = Fk.strokeWidth,
            Xk = Rk[0].y,
            bk = Rk[Rk.length - 1].y,
            wk = kk * Math.abs(Xk - bk),
            dk = sk()(Rk.map((function(kk) {
              return kk.x || 0
            })));
          return (0, Lk.y)(Bk) && "number" === typeof Bk ? dk = Math.max(Bk, dk) : Bk && Array.isArray(Bk) && Bk.length && (dk = Math.max(sk()(Bk.map((function(kk) {
            return kk.x || 0
          }))), dk)), (0, Lk.y)(dk) ? tk.createElement("rect", {
            x: 0,
            y: Xk < bk ? Xk : Xk - wk,
            width: dk + (ak ? parseInt("".concat(ak), 10) : 1),
            height: Math.floor(wk)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(kk) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(kk) : this.renderHorizontalRect(kk)
        }
      }, {
        key: "renderAreaStatically",
        value: function(kk, Fk, Bk, Rk) {
          var ak = this.props,
            Xk = ak.layout,
            bk = ak.type,
            wk = ak.stroke,
            dk = ak.connectNulls,
            sk = ak.isRange,
            Vk = (ak.ref, uk(ak, Sk));
          return tk.createElement(vk.b, {
            clipPath: Bk ? "url(#clipPath-".concat(Rk, ")") : null
          }, tk.createElement(mk.b, Mk({}, (0, Ek.b)(Vk, !0), {
            points: kk,
            connectNulls: dk,
            type: bk,
            baseLine: Fk,
            layout: Xk,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== wk && tk.createElement(mk.b, Mk({}, (0, Ek.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Xk,
            type: bk,
            connectNulls: dk,
            fill: "none",
            points: kk
          })), "none" !== wk && sk && tk.createElement(mk.b, Mk({}, (0, Ek.b)(this.props, !1), {
            className: "recharts-area-curve",
            layout: Xk,
            type: bk,
            connectNulls: dk,
            fill: "none",
            points: Fk
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(kk, Fk) {
          var Bk = this,
            Rk = this.props,
            ak = Rk.points,
            bk = Rk.baseLine,
            wk = Rk.isAnimationActive,
            dk = Rk.animationBegin,
            sk = Rk.animationDuration,
            Vk = Rk.animationEasing,
            Ak = Rk.animationId,
            yk = this.state,
            fk = yk.prevPoints,
            mk = yk.prevBaseLine;
          return tk.createElement(Xk.d, {
            UA: dk,
            duration: sk,
            isActive: wk,
            easing: Vk,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(Ak),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Rk) {
            var Xk = Rk.t;
            if (fk) {
              var wk, dk = fk.length / ak.length,
                sk = ak.map((function(kk, Fk) {
                  var Bk = Math.floor(Fk * dk);
                  if (fk[Bk]) {
                    var Rk = fk[Bk],
                      tk = (0, Lk.o)(Rk.x, kk.x),
                      ak = (0, Lk.o)(Rk.y, kk.y);
                    return Uk(Uk({}, kk), {}, {
                      x: tk(Xk),
                      y: ak(Xk)
                    })
                  }
                  return kk
                }));
              return wk = (0, Lk.y)(bk) && "number" === typeof bk ? (0, Lk.o)(mk, bk)(Xk) : Jk()(bk) || ek()(bk) ? (0, Lk.o)(mk, 0)(Xk) : bk.map((function(kk, Fk) {
                var Bk = Math.floor(Fk * dk);
                if (mk[Bk]) {
                  var Rk = mk[Bk],
                    tk = (0, Lk.o)(Rk.x, kk.x),
                    ak = (0, Lk.o)(Rk.y, kk.y);
                  return Uk(Uk({}, kk), {}, {
                    x: tk(Xk),
                    y: ak(Xk)
                  })
                }
                return kk
              })), Bk.renderAreaStatically(sk, wk, kk, Fk)
            }
            return tk.createElement(vk.b, null, tk.createElement("defs", null, tk.createElement("clipPath", {
              id: "animationClipPath-".concat(Fk)
            }, Bk.renderClipRect(Xk))), tk.createElement(vk.b, {
              clipPath: "url(#animationClipPath-".concat(Fk, ")")
            }, Bk.renderAreaStatically(ak, bk, kk, Fk)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(kk, Fk) {
          var Bk = this.props,
            Rk = Bk.points,
            tk = Bk.baseLine,
            ak = Bk.isAnimationActive,
            Xk = this.state,
            bk = Xk.prevPoints,
            wk = Xk.prevBaseLine,
            dk = Xk.totalLength;
          return ak && Rk && Rk.length && (!bk && dk > 0 || !fk()(bk, Rk) || !fk()(wk, tk)) ? this.renderAreaWithAnimation(kk, Fk) : this.renderAreaStatically(Rk, tk, kk, Fk)
        }
      }, {
        key: "render",
        value: function() {
          var kk, Fk = this.props,
            Bk = Fk.hide,
            Rk = Fk.dot,
            Xk = Fk.points,
            bk = Fk.className,
            wk = Fk.top,
            dk = Fk.left,
            sk = Fk.xAxis,
            Vk = Fk.yAxis,
            Ak = Fk.width,
            ek = Fk.height,
            yk = Fk.isAnimationActive,
            fk = Fk.id;
          if (Bk || !Xk || !Xk.length) return null;
          var mk = this.state.isAnimationFinished,
            Wk = 1 === Xk.length,
            Yk = (0, ak.e)("recharts-area", bk),
            Lk = sk && sk.allowDataOverflow,
            Ok = Vk && Vk.allowDataOverflow,
            Sk = Lk || Ok,
            Nk = Jk()(fk) ? this.id : fk,
            Hk = null !== (kk = (0, Ek.b)(Rk, !1)) && void 0 !== kk ? kk : {
              r: 3,
              strokeWidth: 2
            },
            uk = Hk.r,
            Mk = void 0 === uk ? 3 : uk,
            gk = Hk.strokeWidth,
            Uk = void 0 === gk ? 2 : gk,
            ck = ((0, Ek.j)(Rk) ? Rk : {}).clipDot,
            Gk = void 0 === ck || ck,
            Tk = 2 * Mk + Uk;
          return tk.createElement(vk.b, {
            className: Yk
          }, Lk || Ok ? tk.createElement("defs", null, tk.createElement("clipPath", {
            id: "clipPath-".concat(Nk)
          }, tk.createElement("rect", {
            x: Lk ? dk : dk - Ak / 2,
            y: Ok ? wk : wk - ek / 2,
            width: Lk ? Ak : 2 * Ak,
            height: Ok ? ek : 2 * ek
          })), !Gk && tk.createElement("clipPath", {
            id: "clipPath-dots-".concat(Nk)
          }, tk.createElement("rect", {
            x: dk - Tk / 2,
            y: wk - Tk / 2,
            width: Ak + Tk,
            height: ek + Tk
          }))) : null, Wk ? null : this.renderArea(Sk, Nk), (Rk || Wk) && this.renderDots(Sk, Gk, Nk), (!yk || mk) && ik.e.renderCallByParent(this.props, Xk))
        }
      }], bk = [{
        key: "getDerivedStateFromProps",
        value: function(kk, Fk) {
          return kk.animationId !== Fk.prevAnimationId ? {
            prevAnimationId: kk.animationId,
            curPoints: kk.points,
            curBaseLine: kk.baseLine,
            prevPoints: Fk.curPoints,
            prevBaseLine: Fk.curBaseLine
          } : kk.points !== Fk.curPoints || kk.baseLine !== Fk.curBaseLine ? {
            curPoints: kk.points,
            curBaseLine: kk.baseLine
          } : null
        }
      }], Rk && ck(Bk.prototype, Rk), bk && ck(Bk, bk), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, Rk, bk
    }(tk.PureComponent);
    Rk = hk, zk(hk, "displayName", "Area"), zk(hk, "defaultProps", {
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
      isAnimationActive: !Yk.c.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), zk(hk, "getBaseValue", (function(kk, Fk, Bk, Rk) {
      var tk = kk.layout,
        ak = kk.baseValue,
        Xk = Fk.props.baseValue,
        bk = null !== Xk && void 0 !== Xk ? Xk : ak;
      if ((0, Lk.y)(bk) && "number" === typeof bk) return bk;
      var wk = "horizontal" === tk ? Rk : Bk,
        dk = wk.scale.domain();
      if ("number" === wk.type) {
        var sk = Math.max(dk[0], dk[1]),
          Vk = Math.min(dk[0], dk[1]);
        return "dataMin" === bk ? Vk : "dataMax" === bk || sk < 0 ? sk : Math.max(Math.min(dk[0], dk[1]), 0)
      }
      return "dataMin" === bk ? dk[0] : "dataMax" === bk ? dk[1] : dk[0]
    })), zk(hk, "getComposedData", (function(kk) {
      var Fk, Bk = kk.props,
        tk = kk.item,
        ak = kk.xAxis,
        Xk = kk.yAxis,
        bk = kk.xAxisTicks,
        wk = kk.yAxisTicks,
        dk = kk.bandSize,
        sk = kk.dataKey,
        Vk = kk.stackedData,
        Jk = kk.dataStartIndex,
        Ak = kk.displayedData,
        ek = kk.offset,
        yk = Bk.layout,
        fk = Vk && Vk.length,
        mk = Rk.getBaseValue(Bk, tk, ak, Xk),
        Wk = "horizontal" === yk,
        vk = !1,
        ik = Ak.map((function(kk, Fk) {
          var Bk;
          fk ? Bk = Vk[Jk + Fk] : (Bk = (0, Ok.$)(kk, sk), Array.isArray(Bk) ? vk = !0 : Bk = [mk, Bk]);
          var Rk = null == Bk[1] || fk && null == (0, Ok.$)(kk, sk);
          return Wk ? {
            x: (0, Ok.w)({
              axis: ak,
              ticks: bk,
              bandSize: dk,
              entry: kk,
              index: Fk
            }),
            y: Rk ? null : Xk.scale(Bk[1]),
            value: Bk,
            payload: kk
          } : {
            x: Rk ? null : ak.scale(Bk[1]),
            y: (0, Ok.w)({
              axis: Xk,
              ticks: wk,
              bandSize: dk,
              entry: kk,
              index: Fk
            }),
            value: Bk,
            payload: kk
          }
        }));
      return Fk = fk || vk ? ik.map((function(kk) {
        var Fk = Array.isArray(kk.value) ? kk.value[0] : null;
        return Wk ? {
          x: kk.x,
          y: null != Fk && null != kk.y ? Xk.scale(Fk) : null
        } : {
          x: null != Fk ? ak.scale(Fk) : null,
          y: kk.y
        }
      })) : Wk ? Xk.scale(mk) : ak.scale(mk), Uk({
        points: ik,
        baseLine: Fk,
        layout: yk,
        isRange: vk
      }, ek)
    })), zk(hk, "renderDotItem", (function(kk, Fk) {
      var Bk;
      if (tk.isValidElement(kk)) Bk = tk.cloneElement(kk, Fk);
      else if (wk()(kk)) Bk = kk(Fk);
      else {
        var Rk = (0, ak.e)("recharts-area-dot", "boolean" !== typeof kk ? kk.className : ""),
          Xk = Fk.key,
          bk = uk(Fk, Nk);
        Bk = tk.createElement(Wk.c, Mk({}, bk, {
          key: Xk,
          className: Rk
        }))
      }
      return Bk
    }))
  },
  5977: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Kk
    });
    var Rk = Bk(61),
      tk = Bk(4750),
      ak = Bk(5811),
      Xk = Bk(5893),
      bk = Bk.n(Xk),
      wk = Bk(5099),
      dk = Bk.n(wk),
      sk = Bk(5647),
      Vk = Bk(5904),
      Jk = Bk(5983),
      Ak = Bk(5988),
      ek = Bk(4829),
      yk = Bk(5106),
      fk = Bk(5663),
      mk = Bk(5833),
      Wk = Bk(5125),
      vk = Bk(5635),
      ik = Bk(5993),
      Yk = ["x", "y"];

    function Lk(kk) {
      return Lk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Lk(kk)
    }

    function Ok() {
      return Ok = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Ok.apply(this, arguments)
    }

    function Ek(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Sk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Ek(Object(Bk), !0).forEach((function(Fk) {
          Nk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Ek(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Nk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != Lk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != Lk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == Lk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Hk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function uk(kk, Fk) {
      var Bk = kk.x,
        Rk = kk.y,
        tk = Hk(kk, Yk),
        ak = "".concat(Bk),
        Xk = parseInt(ak, 10),
        bk = "".concat(Rk),
        wk = parseInt(bk, 10),
        dk = "".concat(Fk.height || tk.height),
        sk = parseInt(dk, 10),
        Vk = "".concat(Fk.width || tk.width),
        Jk = parseInt(Vk, 10);
      return Sk(Sk(Sk(Sk(Sk({}, Fk), tk), Xk ? {
        x: Xk
      } : {}), wk ? {
        y: wk
      } : {}), {}, {
        height: sk,
        width: Jk,
        name: Fk.name,
        radius: Fk.radius
      })
    }

    function Mk(kk) {
      return Rk.createElement(ik.c, Ok({
        shapeType: "rectangle",
        propTransformer: uk,
        activeClassName: "recharts-active-bar"
      }, kk))
    }
    var gk, Uk = ["value", "background"];

    function ck(kk) {
      return ck = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, ck(kk)
    }

    function Gk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function Tk() {
      return Tk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Tk.apply(this, arguments)
    }

    function rk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Dk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? rk(Object(Bk), !0).forEach((function(Fk) {
          Zk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : rk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function zk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, pk(Rk.key), Rk)
      }
    }

    function Pk(kk, Fk, Bk) {
      return Fk = qk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === ck(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, hk() ? Reflect.construct(Fk, Bk || [], qk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function hk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (hk = function() {
        return !!kk
      })()
    }

    function qk(kk) {
      return qk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, qk(kk)
    }

    function Ck(kk, Fk) {
      return Ck = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Ck(kk, Fk)
    }

    function Zk(kk, Fk, Bk) {
      return (Fk = pk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function pk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != ck(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != ck(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == ck(Fk) ? Fk : Fk + ""
    }
    var Kk = function(kk) {
      function Fk() {
        var kk;
        ! function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk);
        for (var Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        return Zk(kk = Pk(this, Fk, [].concat(Rk)), "state", {
          isAnimationFinished: !1
        }), Zk(kk, "id", (0, ek.E)("recharts-bar-")), Zk(kk, "handleAnimationEnd", (function() {
          var Fk = kk.props.onAnimationEnd;
          kk.setState({
            isAnimationFinished: !0
          }), Fk && Fk()
        })), Zk(kk, "handleAnimationStart", (function() {
          var Fk = kk.props.onAnimationStart;
          kk.setState({
            isAnimationFinished: !1
          }), Fk && Fk()
        })), kk
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Ck(kk, Fk)
      }(Fk, kk), Bk = Fk, Xk = [{
        key: "renderRectanglesStatically",
        value: function(kk) {
          var Fk = this,
            Bk = this.props,
            tk = Bk.shape,
            ak = Bk.dataKey,
            Xk = Bk.activeIndex,
            bk = Bk.activeBar,
            wk = (0, yk.b)(this.props, !1);
          return kk && kk.map((function(kk, Bk) {
            var dk = Bk === Xk,
              Vk = dk ? bk : tk,
              Jk = Dk(Dk(Dk({}, wk), kk), {}, {
                isActive: dk,
                option: Vk,
                index: Bk,
                dataKey: ak,
                onAnimationStart: Fk.handleAnimationStart,
                onAnimationEnd: Fk.handleAnimationEnd
              });
            return Rk.createElement(sk.b, Tk({
              className: "recharts-bar-rectangle"
            }, (0, Wk.h)(Fk.props, kk, Bk), {
              key: "rectangle-".concat(null === kk || void 0 === kk ? void 0 : kk.x, "-").concat(null === kk || void 0 === kk ? void 0 : kk.y, "-").concat(null === kk || void 0 === kk ? void 0 : kk.value, "-").concat(Bk)
            }), Rk.createElement(Mk, Jk))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var kk = this,
            Fk = this.props,
            Bk = Fk.data,
            tk = Fk.layout,
            Xk = Fk.isAnimationActive,
            bk = Fk.animationBegin,
            wk = Fk.animationDuration,
            dk = Fk.animationEasing,
            Vk = Fk.animationId,
            Jk = this.state.prevData;
          return Rk.createElement(ak.d, {
            UA: bk,
            duration: wk,
            isActive: Xk,
            easing: dk,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(Vk),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Fk) {
            var ak = Fk.t,
              Xk = Bk.map((function(kk, Fk) {
                var Bk = Jk && Jk[Fk];
                if (Bk) {
                  var Rk = (0, ek.o)(Bk.x, kk.x),
                    Xk = (0, ek.o)(Bk.y, kk.y),
                    bk = (0, ek.o)(Bk.width, kk.width),
                    wk = (0, ek.o)(Bk.height, kk.height);
                  return Dk(Dk({}, kk), {}, {
                    x: Rk(ak),
                    y: Xk(ak),
                    width: bk(ak),
                    height: wk(ak)
                  })
                }
                if ("horizontal" === tk) {
                  var dk = (0, ek.o)(0, kk.height)(ak);
                  return Dk(Dk({}, kk), {}, {
                    y: kk.y + kk.height - dk,
                    height: dk
                  })
                }
                var sk = (0, ek.o)(0, kk.width)(ak);
                return Dk(Dk({}, kk), {}, {
                  width: sk
                })
              }));
            return Rk.createElement(sk.b, null, kk.renderRectanglesStatically(Xk))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var kk = this.props,
            Fk = kk.data,
            Bk = kk.isAnimationActive,
            Rk = this.state.prevData;
          return !(Bk && Fk && Fk.length) || Rk && bk()(Rk, Fk) ? this.renderRectanglesStatically(Fk) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var kk = this,
            Fk = this.props,
            Bk = Fk.data,
            tk = Fk.dataKey,
            ak = Fk.activeIndex,
            Xk = (0, yk.b)(this.props.background, !1);
          return Bk.map((function(Fk, Bk) {
            Fk.value;
            var bk = Fk.background,
              wk = Gk(Fk, Uk);
            if (!bk) return null;
            var dk = Dk(Dk(Dk(Dk(Dk({}, wk), {}, {
              fill: "#eee"
            }, bk), Xk), (0, Wk.h)(kk.props, Fk, Bk)), {}, {
              onAnimationStart: kk.handleAnimationStart,
              onAnimationEnd: kk.handleAnimationEnd,
              dataKey: tk,
              index: Bk,
              className: "recharts-bar-background-rectangle"
            });
            return Rk.createElement(Mk, Tk({
              key: "background-bar-".concat(Bk),
              option: kk.props.background,
              isActive: Bk === ak
            }, dk))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(kk, Fk) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Bk = this.props,
            tk = Bk.data,
            ak = Bk.xAxis,
            Xk = Bk.yAxis,
            bk = Bk.layout,
            wk = Bk.children,
            dk = (0, yk.c)(wk, Vk.c);
          if (!dk) return null;
          var Jk = "vertical" === bk ? tk[0].height / 2 : tk[0].width / 2,
            Ak = function(kk, Fk) {
              var Bk = Array.isArray(kk.value) ? kk.value[1] : kk.value;
              return {
                x: kk.x,
                y: kk.y,
                value: Bk,
                errorVal: (0, mk.$)(kk, Fk)
              }
            },
            ek = {
              clipPath: kk ? "url(#clipPath-".concat(Fk, ")") : null
            };
          return Rk.createElement(sk.b, ek, dk.map((function(kk) {
            return Rk.cloneElement(kk, {
              key: "error-bar-".concat(Fk, "-").concat(kk.props.dataKey),
              data: tk,
              xAxis: ak,
              yAxis: Xk,
              layout: bk,
              offset: Jk,
              dataPointFormatter: Ak
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var kk = this.props,
            Fk = kk.hide,
            Bk = kk.data,
            ak = kk.className,
            Xk = kk.xAxis,
            bk = kk.yAxis,
            wk = kk.left,
            Vk = kk.top,
            Jk = kk.width,
            ek = kk.height,
            yk = kk.isAnimationActive,
            fk = kk.background,
            mk = kk.id;
          if (Fk || !Bk || !Bk.length) return null;
          var Wk = this.state.isAnimationFinished,
            vk = (0, tk.e)("recharts-bar", ak),
            ik = Xk && Xk.allowDataOverflow,
            Yk = bk && bk.allowDataOverflow,
            Lk = ik || Yk,
            Ok = dk()(mk) ? this.id : mk;
          return Rk.createElement(sk.b, {
            className: vk
          }, ik || Yk ? Rk.createElement("defs", null, Rk.createElement("clipPath", {
            id: "clipPath-".concat(Ok)
          }, Rk.createElement("rect", {
            x: ik ? wk : wk - Jk / 2,
            y: Yk ? Vk : Vk - ek / 2,
            width: ik ? Jk : 2 * Jk,
            height: Yk ? ek : 2 * ek
          }))) : null, Rk.createElement(sk.b, {
            className: "recharts-bar-rectangles",
            clipPath: Lk ? "url(#clipPath-".concat(Ok, ")") : null
          }, fk ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(Lk, Ok), (!yk || Wk) && Ak.e.renderCallByParent(this.props, Bk))
        }
      }], wk = [{
        key: "getDerivedStateFromProps",
        value: function(kk, Fk) {
          return kk.animationId !== Fk.prevAnimationId ? {
            prevAnimationId: kk.animationId,
            curData: kk.data,
            prevData: Fk.curData
          } : kk.data !== Fk.curData ? {
            curData: kk.data
          } : null
        }
      }], Xk && zk(Bk.prototype, Xk), wk && zk(Bk, wk), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, Xk, wk
    }(Rk.PureComponent);
    gk = Kk, Zk(Kk, "displayName", "Bar"), Zk(Kk, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !fk.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), Zk(Kk, "getComposedData", (function(kk) {
      var Fk = kk.props,
        Bk = kk.item,
        Rk = kk.barPosition,
        tk = kk.bandSize,
        ak = kk.xAxis,
        Xk = kk.yAxis,
        bk = kk.xAxisTicks,
        wk = kk.yAxisTicks,
        dk = kk.stackedData,
        sk = kk.dataStartIndex,
        Vk = kk.displayedData,
        Ak = kk.offset,
        fk = (0, mk.g)(Rk, Bk);
      if (!fk) return null;
      var Wk = Fk.layout,
        ik = Bk.type.defaultProps,
        Yk = void 0 !== ik ? Dk(Dk({}, ik), Bk.props) : Bk.props,
        Lk = Yk.dataKey,
        Ok = Yk.children,
        Ek = Yk.minPointSize,
        Sk = "horizontal" === Wk ? Xk : ak,
        Nk = dk ? Sk.scale.domain() : null,
        Hk = (0, mk.q)({
          numericAxis: Sk
        }),
        uk = (0, yk.c)(Ok, Jk.c),
        Mk = Vk.map((function(kk, Fk) {
          var Rk, Vk, Jk, Ak, yk, ik;
          dk ? Rk = (0, mk.ib)(dk[sk + Fk], Nk) : (Rk = (0, mk.$)(kk, Lk), Array.isArray(Rk) || (Rk = [Hk, Rk]));
          var Yk = function(kk) {
            var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(Bk, Rk) {
              if ("number" === typeof kk) return kk;
              var tk = (0, ek.y)(Bk) || (0, ek.q)(Bk);
              return tk ? kk(Bk, Rk) : (tk || (0, vk.b)(!1), Fk)
            }
          }(Ek, gk.defaultProps.minPointSize)(Rk[1], Fk);
          if ("horizontal" === Wk) {
            var Ok, Sk = [Xk.scale(Rk[0]), Xk.scale(Rk[1])],
              Mk = Sk[0],
              Uk = Sk[1];
            Vk = (0, mk.t)({
              axis: ak,
              ticks: bk,
              bandSize: tk,
              offset: fk.offset,
              entry: kk,
              index: Fk
            }), Jk = null !== (Ok = null !== Uk && void 0 !== Uk ? Uk : Mk) && void 0 !== Ok ? Ok : void 0, Ak = fk.size;
            var ck = Mk - Uk;
            if (yk = Number.isNaN(ck) ? 0 : ck, ik = {
                x: Vk,
                y: Xk.y,
                width: Ak,
                height: Xk.height
              }, Math.abs(Yk) > 0 && Math.abs(yk) < Math.abs(Yk)) {
              var Gk = (0, ek.B)(yk || Yk) * (Math.abs(Yk) - Math.abs(yk));
              Jk -= Gk, yk += Gk
            }
          } else {
            var Tk = [ak.scale(Rk[0]), ak.scale(Rk[1])],
              rk = Tk[0],
              zk = Tk[1];
            if (Vk = rk, Jk = (0, mk.t)({
                axis: Xk,
                ticks: wk,
                bandSize: tk,
                offset: fk.offset,
                entry: kk,
                index: Fk
              }), Ak = zk - rk, yk = fk.size, ik = {
                x: ak.x,
                y: Jk,
                width: ak.width,
                height: yk
              }, Math.abs(Yk) > 0 && Math.abs(Ak) < Math.abs(Yk)) Ak += (0, ek.B)(Ak || Yk) * (Math.abs(Yk) - Math.abs(Ak))
          }
          return Dk(Dk(Dk({}, kk), {}, {
            x: Vk,
            y: Jk,
            width: Ak,
            height: yk,
            value: dk ? Rk : Rk[1],
            payload: kk,
            background: ik
          }, uk && uk[Fk] && uk[Fk].props), {}, {
            tooltipPayload: [(0, mk.Z)(Bk, kk)],
            tooltipPosition: {
              x: Vk + Ak / 2,
              y: Jk + yk / 2
            }
          })
        }));
      return Dk({
        data: Mk,
        layout: Wk
      }, Ak)
    }))
  },
  6080: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ck
    });
    var Rk = Bk(61),
      tk = Bk(4936),
      ak = Bk.n(tk),
      Xk = Bk(4863),
      bk = Bk.n(Xk),
      wk = Bk(4750),
      dk = Bk(5123),
      sk = Bk(5647),
      Vk = Bk(5819),
      Jk = Bk(5921),
      Ak = Bk(4829),
      ek = Bk(5125),
      yk = Bk(5106),
      fk = Bk(6083),
      mk = ["viewBox"],
      Wk = ["viewBox"],
      vk = ["ticks"];

    function ik(kk) {
      return ik = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, ik(kk)
    }

    function Yk() {
      return Yk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Yk.apply(this, arguments)
    }

    function Lk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Ok(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Lk(Object(Bk), !0).forEach((function(Fk) {
          gk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Lk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Ek(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function Sk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Uk(Rk.key), Rk)
      }
    }

    function Nk(kk, Fk, Bk) {
      return Fk = uk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === ik(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, Hk() ? Reflect.construct(Fk, Bk || [], uk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function Hk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (Hk = function() {
        return !!kk
      })()
    }

    function uk(kk) {
      return uk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, uk(kk)
    }

    function Mk(kk, Fk) {
      return Mk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Mk(kk, Fk)
    }

    function gk(kk, Fk, Bk) {
      return (Fk = Uk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Uk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != ik(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != ik(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == ik(Fk) ? Fk : Fk + ""
    }
    var ck = function(kk) {
      function Fk(kk) {
        var Bk;
        return function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk), (Bk = Nk(this, Fk, [kk])).state = {
          fontSize: "",
          letterSpacing: ""
        }, Bk
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Mk(kk, Fk)
      }(Fk, kk), Bk = Fk, Xk = [{
        key: "renderTickItem",
        value: function(kk, Fk, Bk) {
          var tk = (0, wk.e)(Fk.className, "recharts-cartesian-axis-tick-value");
          return Rk.isValidElement(kk) ? Rk.cloneElement(kk, Ok(Ok({}, Fk), {}, {
            className: tk
          })) : ak()(kk) ? kk(Ok(Ok({}, Fk), {}, {
            className: tk
          })) : Rk.createElement(Vk.b, Yk({}, Fk, {
            className: "recharts-cartesian-axis-tick-value"
          }), Bk)
        }
      }], (tk = [{
        key: "shouldComponentUpdate",
        value: function(kk, Fk) {
          var Bk = kk.viewBox,
            Rk = Ek(kk, mk),
            tk = this.props,
            ak = tk.viewBox,
            Xk = Ek(tk, Wk);
          return !(0, dk.e)(Bk, ak) || !(0, dk.e)(Rk, Xk) || !(0, dk.e)(Fk, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var kk = this.layerReference;
          if (kk) {
            var Fk = kk.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            Fk && this.setState({
              fontSize: window.getComputedStyle(Fk).fontSize,
              letterSpacing: window.getComputedStyle(Fk).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(kk) {
          var Fk, Bk, Rk, tk, ak, Xk, bk = this.props,
            wk = bk.x,
            dk = bk.y,
            sk = bk.width,
            Vk = bk.height,
            Jk = bk.orientation,
            ek = bk.tickSize,
            yk = bk.mirror,
            fk = bk.tickMargin,
            mk = yk ? -1 : 1,
            Wk = kk.tickSize || ek,
            vk = (0, Ak.y)(kk.tickCoord) ? kk.tickCoord : kk.coordinate;
          switch (Jk) {
            case "top":
              Fk = Bk = kk.coordinate, Xk = (Rk = (tk = dk + +!yk * Vk) - mk * Wk) - mk * fk, ak = vk;
              break;
            case "left":
              Rk = tk = kk.coordinate, ak = (Fk = (Bk = wk + +!yk * sk) - mk * Wk) - mk * fk, Xk = vk;
              break;
            case "right":
              Rk = tk = kk.coordinate, ak = (Fk = (Bk = wk + +yk * sk) + mk * Wk) + mk * fk, Xk = vk;
              break;
            default:
              Fk = Bk = kk.coordinate, Xk = (Rk = (tk = dk + +yk * Vk) + mk * Wk) + mk * fk, ak = vk
          }
          return {
            line: {
              x1: Fk,
              y1: Rk,
              x2: Bk,
              y2: tk
            },
            yJ: {
              x: ak,
              y: Xk
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var kk, Fk = this.props,
            Bk = Fk.orientation,
            Rk = Fk.mirror;
          switch (Bk) {
            case "left":
              kk = Rk ? "start" : "end";
              break;
            case "right":
              kk = Rk ? "end" : "start";
              break;
            default:
              kk = "middle"
          }
          return kk
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var kk = this.props,
            Fk = kk.orientation,
            Bk = kk.mirror,
            Rk = "end";
          switch (Fk) {
            case "left":
            case "right":
              Rk = "middle";
              break;
            case "top":
              Rk = Bk ? "start" : "end";
              break;
            default:
              Rk = Bk ? "end" : "start"
          }
          return Rk
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var kk = this.props,
            Fk = kk.x,
            Bk = kk.y,
            tk = kk.width,
            ak = kk.height,
            Xk = kk.orientation,
            dk = kk.mirror,
            sk = kk.axisLine,
            Vk = Ok(Ok(Ok({}, (0, yk.b)(this.props, !1)), (0, yk.b)(sk, !1)), {}, {
              fill: "none"
            });
          if ("top" === Xk || "bottom" === Xk) {
            var Jk = +("top" === Xk && !dk || "bottom" === Xk && dk);
            Vk = Ok(Ok({}, Vk), {}, {
              x1: Fk,
              y1: Bk + Jk * ak,
              x2: Fk + tk,
              y2: Bk + Jk * ak
            })
          } else {
            var Ak = +("left" === Xk && !dk || "right" === Xk && dk);
            Vk = Ok(Ok({}, Vk), {}, {
              x1: Fk + Ak * tk,
              y1: Bk,
              x2: Fk + Ak * tk,
              y2: Bk + ak
            })
          }
          return Rk.createElement("line", Yk({}, Vk, {
            className: (0, wk.e)("recharts-cartesian-axis-line", bk()(sk, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(kk, Bk, tk) {
          var Xk = this,
            dk = this.props,
            Vk = dk.tickLine,
            Jk = dk.stroke,
            Ak = dk.yJ,
            mk = dk.tickFormatter,
            Wk = dk.unit,
            vk = (0, fk.b)(Ok(Ok({}, this.props), {}, {
              ticks: kk
            }), Bk, tk),
            ik = this.getTickTextAnchor(),
            Lk = this.getTickVerticalAnchor(),
            Ek = (0, yk.b)(this.props, !1),
            Sk = (0, yk.b)(Ak, !1),
            Nk = Ok(Ok({}, Ek), {}, {
              fill: "none"
            }, (0, yk.b)(Vk, !1)),
            Hk = vk.map((function(kk, Bk) {
              var tk = Xk.getTickLineCoord(kk),
                dk = tk.line,
                yk = tk.yJ,
                fk = Ok(Ok(Ok(Ok({
                  textAnchor: ik,
                  verticalAnchor: Lk
                }, Ek), {}, {
                  stroke: "none",
                  fill: Jk
                }, Sk), yk), {}, {
                  index: Bk,
                  payload: kk,
                  visibleTicksCount: vk.length,
                  tickFormatter: mk
                });
              return Rk.createElement(sk.b, Yk({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(kk.value, "-").concat(kk.coordinate, "-").concat(kk.tickCoord)
              }, (0, ek.h)(Xk.props, kk, Bk)), Vk && Rk.createElement("line", Yk({}, Nk, dk, {
                className: (0, wk.e)("recharts-cartesian-axis-tick-line", bk()(Vk, "className"))
              })), Ak && Fk.renderTickItem(Ak, fk, "".concat(ak()(mk) ? mk(kk.value, Bk) : kk.value).concat(Wk || "")))
            }));
          return Rk.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, Hk)
        }
      }, {
        key: "render",
        value: function() {
          var kk = this,
            Fk = this.props,
            Bk = Fk.axisLine,
            tk = Fk.width,
            Xk = Fk.height,
            bk = Fk.ticksGenerator,
            dk = Fk.className;
          if (Fk.hide) return null;
          var Vk = this.props,
            Ak = Vk.ticks,
            ek = Ek(Vk, vk),
            yk = Ak;
          return ak()(bk) && (yk = Ak && Ak.length > 0 ? bk(this.props) : bk(ek)), tk <= 0 || Xk <= 0 || !yk || !yk.length ? null : Rk.createElement(sk.b, {
            className: (0, wk.e)("recharts-cartesian-axis", dk),
            ref: function(Fk) {
              kk.layerReference = Fk
            }
          }, Bk && this.renderAxisLine(), this.renderTicks(yk, this.state.fontSize, this.state.letterSpacing), Jk.d.renderCallByParent(this.props))
        }
      }]) && Sk(Bk.prototype, tk), Xk && Sk(Bk, Xk), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, tk, Xk
    }(Rk.Component);
    gk(ck, "displayName", "CartesianAxis"), gk(ck, "defaultProps", {
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
      yJ: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6093: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => gk
    });
    var Rk = Bk(61),
      tk = Bk(4936),
      ak = Bk.n(tk),
      Xk = Bk(5104),
      bk = Bk(4829),
      wk = Bk(5106),
      dk = Bk(5833),
      sk = Bk(6083),
      Vk = Bk(6080),
      Jk = Bk(6043),
      Ak = ["x1", "y1", "x2", "y2", "key"],
      ek = ["offset"];

    function yk(kk) {
      return yk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, yk(kk)
    }

    function fk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function mk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? fk(Object(Bk), !0).forEach((function(Fk) {
          Wk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : fk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Wk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != yk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != yk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == yk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function vk() {
      return vk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, vk.apply(this, arguments)
    }

    function ik(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }
    var Yk = function(kk) {
      var Fk = kk.fill;
      if (!Fk || "none" === Fk) return null;
      var Bk = kk.fillOpacity,
        tk = kk.x,
        ak = kk.y,
        Xk = kk.width,
        bk = kk.height,
        wk = kk.ry;
      return Rk.createElement("rect", {
        x: tk,
        y: ak,
        ry: wk,
        width: Xk,
        height: bk,
        stroke: "none",
        fill: Fk,
        fillOpacity: Bk,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function Lk(kk, Fk) {
      var Bk;
      if (Rk.isValidElement(kk)) Bk = Rk.cloneElement(kk, Fk);
      else if (ak()(kk)) Bk = kk(Fk);
      else {
        var tk = Fk.x1,
          Xk = Fk.y1,
          bk = Fk.x2,
          dk = Fk.y2,
          sk = Fk.key,
          Vk = ik(Fk, Ak),
          Jk = (0, wk.b)(Vk, !1),
          yk = (Jk.offset, ik(Jk, ek));
        Bk = Rk.createElement("line", vk({}, yk, {
          x1: tk,
          y1: Xk,
          x2: bk,
          y2: dk,
          fill: "none",
          key: sk
        }))
      }
      return Bk
    }

    function Ok(kk) {
      var Fk = kk.x,
        Bk = kk.width,
        tk = kk.horizontal,
        ak = void 0 === tk || tk,
        Xk = kk.horizontalPoints;
      if (!ak || !Xk || !Xk.length) return null;
      var bk = Xk.map((function(Rk, tk) {
        var Xk = mk(mk({}, kk), {}, {
          x1: Fk,
          y1: Rk,
          x2: Fk + Bk,
          y2: Rk,
          key: "line-".concat(tk),
          index: tk
        });
        return Lk(ak, Xk)
      }));
      return Rk.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, bk)
    }

    function Ek(kk) {
      var Fk = kk.y,
        Bk = kk.height,
        tk = kk.vertical,
        ak = void 0 === tk || tk,
        Xk = kk.verticalPoints;
      if (!ak || !Xk || !Xk.length) return null;
      var bk = Xk.map((function(Rk, tk) {
        var Xk = mk(mk({}, kk), {}, {
          x1: Rk,
          y1: Fk,
          x2: Rk,
          y2: Fk + Bk,
          key: "line-".concat(tk),
          index: tk
        });
        return Lk(ak, Xk)
      }));
      return Rk.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, bk)
    }

    function Sk(kk) {
      var Fk = kk.horizontalFill,
        Bk = kk.fillOpacity,
        tk = kk.x,
        ak = kk.y,
        Xk = kk.width,
        bk = kk.height,
        wk = kk.horizontalPoints,
        dk = kk.horizontal;
      if (!(void 0 === dk || dk) || !Fk || !Fk.length) return null;
      var sk = wk.map((function(kk) {
        return Math.round(kk + ak - ak)
      })).sort((function(kk, Fk) {
        return kk - Fk
      }));
      ak !== sk[0] && sk.unshift(0);
      var Vk = sk.map((function(kk, wk) {
        var dk = !sk[wk + 1] ? ak + bk - kk : sk[wk + 1] - kk;
        if (dk <= 0) return null;
        var Vk = wk % Fk.length;
        return Rk.createElement("rect", {
          key: "react-".concat(wk),
          y: kk,
          x: tk,
          height: dk,
          width: Xk,
          stroke: "none",
          fill: Fk[Vk],
          fillOpacity: Bk,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Rk.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, Vk)
    }

    function Nk(kk) {
      var Fk = kk.vertical,
        Bk = void 0 === Fk || Fk,
        tk = kk.verticalFill,
        ak = kk.fillOpacity,
        Xk = kk.x,
        bk = kk.y,
        wk = kk.width,
        dk = kk.height,
        sk = kk.verticalPoints;
      if (!Bk || !tk || !tk.length) return null;
      var Vk = sk.map((function(kk) {
        return Math.round(kk + Xk - Xk)
      })).sort((function(kk, Fk) {
        return kk - Fk
      }));
      Xk !== Vk[0] && Vk.unshift(0);
      var Jk = Vk.map((function(kk, Fk) {
        var Bk = !Vk[Fk + 1] ? Xk + wk - kk : Vk[Fk + 1] - kk;
        if (Bk <= 0) return null;
        var sk = Fk % tk.length;
        return Rk.createElement("rect", {
          key: "react-".concat(Fk),
          x: kk,
          y: bk,
          width: Bk,
          height: dk,
          stroke: "none",
          fill: tk[sk],
          fillOpacity: ak,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return Rk.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, Jk)
    }
    var Hk = function(kk, Fk) {
        var Bk = kk.xAxis,
          Rk = kk.width,
          tk = kk.height,
          ak = kk.offset;
        return (0, dk.z)((0, sk.b)(mk(mk(mk({}, Vk.d.defaultProps), Bk), {}, {
          ticks: (0, dk.T)(Bk, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Rk,
            height: tk
          }
        })), ak.left, ak.left + ak.width, Fk)
      },
      uk = function(kk, Fk) {
        var Bk = kk.yAxis,
          Rk = kk.width,
          tk = kk.height,
          ak = kk.offset;
        return (0, dk.z)((0, sk.b)(mk(mk(mk({}, Vk.d.defaultProps), Bk), {}, {
          ticks: (0, dk.T)(Bk, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: Rk,
            height: tk
          }
        })), ak.top, ak.top + ak.height, Fk)
      },
      Mk = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function gk(kk) {
      var Fk, Bk, tk, wk, dk, sk, Vk = (0, Jk.k)(),
        Ak = (0, Jk.j)(),
        ek = (0, Jk.p)(),
        fk = mk(mk({}, kk), {}, {
          stroke: null !== (Fk = kk.stroke) && void 0 !== Fk ? Fk : Mk.stroke,
          fill: null !== (Bk = kk.fill) && void 0 !== Bk ? Bk : Mk.fill,
          horizontal: null !== (tk = kk.horizontal) && void 0 !== tk ? tk : Mk.horizontal,
          horizontalFill: null !== (wk = kk.horizontalFill) && void 0 !== wk ? wk : Mk.horizontalFill,
          vertical: null !== (dk = kk.vertical) && void 0 !== dk ? dk : Mk.vertical,
          verticalFill: null !== (sk = kk.verticalFill) && void 0 !== sk ? sk : Mk.verticalFill,
          x: (0, bk.y)(kk.x) ? kk.x : ek.left,
          y: (0, bk.y)(kk.y) ? kk.y : ek.top,
          width: (0, bk.y)(kk.width) ? kk.width : ek.width,
          height: (0, bk.y)(kk.height) ? kk.height : ek.height
        }),
        Wk = fk.x,
        ik = fk.y,
        Lk = fk.width,
        gk = fk.height,
        Uk = fk.syncWithTicks,
        ck = fk.horizontalValues,
        Gk = fk.verticalValues,
        Tk = (0, Jk.f)(),
        rk = (0, Jk.A)();
      if (!(0, bk.y)(Lk) || Lk <= 0 || !(0, bk.y)(gk) || gk <= 0 || !(0, bk.y)(Wk) || Wk !== +Wk || !(0, bk.y)(ik) || ik !== +ik) return null;
      var Dk = fk.verticalCoordinatesGenerator || Hk,
        zk = fk.horizontalCoordinatesGenerator || uk,
        Pk = fk.horizontalPoints,
        hk = fk.verticalPoints;
      if ((!Pk || !Pk.length) && ak()(zk)) {
        var qk = ck && ck.length,
          Ck = zk({
            yAxis: rk ? mk(mk({}, rk), {}, {
              ticks: qk ? ck : rk.ticks
            }) : void 0,
            width: Vk,
            height: Ak,
            offset: ek
          }, !!qk || Uk);
        (0, Xk.e)(Array.isArray(Ck), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(yk(Ck), "]")), Array.isArray(Ck) && (Pk = Ck)
      }
      if ((!hk || !hk.length) && ak()(Dk)) {
        var Zk = Gk && Gk.length,
          pk = Dk({
            xAxis: Tk ? mk(mk({}, Tk), {}, {
              ticks: Zk ? Gk : Tk.ticks
            }) : void 0,
            width: Vk,
            height: Ak,
            offset: ek
          }, !!Zk || Uk);
        (0, Xk.e)(Array.isArray(pk), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(yk(pk), "]")), Array.isArray(pk) && (hk = pk)
      }
      return Rk.createElement("g", {
        className: "recharts-cartesian-grid"
      }, Rk.createElement(Yk, {
        fill: fk.fill,
        fillOpacity: fk.fillOpacity,
        x: fk.x,
        y: fk.y,
        width: fk.width,
        height: fk.height,
        ry: fk.ry
      }), Rk.createElement(Ok, vk({}, fk, {
        offset: ek,
        horizontalPoints: Pk,
        xAxis: Tk,
        yAxis: rk
      })), Rk.createElement(Ek, vk({}, fk, {
        offset: ek,
        verticalPoints: hk,
        xAxis: Tk,
        yAxis: rk
      })), Rk.createElement(Sk, vk({}, fk, {
        horizontalPoints: Pk
      })), Rk.createElement(Nk, vk({}, fk, {
        verticalPoints: hk
      })))
    }
    gk.displayName = "CartesianGrid"
  },
  5904: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ik
    });
    var Rk = Bk(61),
      tk = Bk(5635),
      ak = Bk(5647),
      Xk = Bk(5106),
      bk = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function wk(kk) {
      return wk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, wk(kk)
    }

    function dk() {
      return dk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, dk.apply(this, arguments)
    }

    function sk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return Vk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return Vk(kk, Fk)
      }(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function Jk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function Ak(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, vk(Rk.key), Rk)
      }
    }

    function ek(kk, Fk, Bk) {
      return Fk = fk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === wk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, yk() ? Reflect.construct(Fk, Bk || [], fk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function yk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (yk = function() {
        return !!kk
      })()
    }

    function fk(kk) {
      return fk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, fk(kk)
    }

    function mk(kk, Fk) {
      return mk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, mk(kk, Fk)
    }

    function Wk(kk, Fk, Bk) {
      return (Fk = vk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function vk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != wk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != wk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == wk(Fk) ? Fk : Fk + ""
    }
    var ik = function(kk) {
      function Fk() {
        return function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk), ek(this, Fk, arguments)
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && mk(kk, Fk)
      }(Fk, kk), Bk = Fk, (wk = [{
        key: "render",
        value: function() {
          var kk = this.props,
            Fk = kk.offset,
            Bk = kk.layout,
            wk = kk.width,
            Vk = kk.dataKey,
            Ak = kk.data,
            ek = kk.dataPointFormatter,
            yk = kk.xAxis,
            fk = kk.yAxis,
            mk = Jk(kk, bk),
            Wk = (0, Xk.b)(mk, !1);
          "x" === this.props.direction && "number" !== yk.type && (0, tk.b)(!1);
          var vk = Ak.map((function(kk) {
            var tk = ek(kk, Vk),
              Xk = tk.x,
              bk = tk.y,
              Jk = tk.value,
              Ak = tk.errorVal;
            if (!Ak) return null;
            var mk, vk, ik = [];
            if (Array.isArray(Ak)) {
              var Yk = sk(Ak, 2);
              mk = Yk[0], vk = Yk[1]
            } else mk = vk = Ak;
            if ("vertical" === Bk) {
              var Lk = yk.scale,
                Ok = bk + Fk,
                Ek = Ok + wk,
                Sk = Ok - wk,
                Nk = Lk(Jk - mk),
                Hk = Lk(Jk + vk);
              ik.push({
                x1: Hk,
                y1: Ek,
                x2: Hk,
                y2: Sk
              }), ik.push({
                x1: Nk,
                y1: Ok,
                x2: Hk,
                y2: Ok
              }), ik.push({
                x1: Nk,
                y1: Ek,
                x2: Nk,
                y2: Sk
              })
            } else if ("horizontal" === Bk) {
              var uk = fk.scale,
                Mk = Xk + Fk,
                gk = Mk - wk,
                Uk = Mk + wk,
                ck = uk(Jk - mk),
                Gk = uk(Jk + vk);
              ik.push({
                x1: gk,
                y1: Gk,
                x2: Uk,
                y2: Gk
              }), ik.push({
                x1: Mk,
                y1: ck,
                x2: Mk,
                y2: Gk
              }), ik.push({
                x1: gk,
                y1: ck,
                x2: Uk,
                y2: ck
              })
            }
            return Rk.createElement(ak.b, dk({
              className: "recharts-errorBar",
              key: "bar-".concat(ik.map((function(kk) {
                return "".concat(kk.x1, "-").concat(kk.x2, "-").concat(kk.y1, "-").concat(kk.y2)
              })))
            }, Wk), ik.map((function(kk) {
              return Rk.createElement("line", dk({}, kk, {
                key: "line-".concat(kk.x1, "-").concat(kk.x2, "-").concat(kk.y1, "-").concat(kk.y2)
              }))
            })))
          }));
          return Rk.createElement(ak.b, {
            className: "recharts-errorBars"
          }, vk)
        }
      }]) && Ak(Bk.prototype, wk), Vk && Ak(Bk, Vk), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, wk, Vk
    }(Rk.Component);
    Wk(ik, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), Wk(ik, "displayName", "ErrorBar")
  },
  6075: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => zk
    });
    var Rk = Bk(61),
      tk = Bk(5811),
      ak = Bk(4936),
      Xk = Bk.n(ak),
      bk = Bk(5099),
      wk = Bk.n(bk),
      dk = Bk(5893),
      sk = Bk.n(dk),
      Vk = Bk(4750),
      Jk = Bk(6069),
      Ak = Bk(5794),
      ek = Bk(5647),
      yk = Bk(5988),
      fk = Bk(5904),
      mk = Bk(4829),
      Wk = Bk(5106),
      vk = Bk(5663),
      ik = Bk(5833),
      Yk = ["type", "layout", "connectNulls", "ref"],
      Lk = ["key"];

    function Ok(kk) {
      return Ok = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Ok(kk)
    }

    function Ek(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function Sk() {
      return Sk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Sk.apply(this, arguments)
    }

    function Nk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Hk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Nk(Object(Bk), !0).forEach((function(Fk) {
          rk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Nk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function uk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return Mk(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return Mk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return Mk(kk, Fk)
      }(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Mk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function gk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Dk(Rk.key), Rk)
      }
    }

    function Uk(kk, Fk, Bk) {
      return Fk = Gk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === Ok(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, ck() ? Reflect.construct(Fk, Bk || [], Gk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function ck() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (ck = function() {
        return !!kk
      })()
    }

    function Gk(kk) {
      return Gk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Gk(kk)
    }

    function Tk(kk, Fk) {
      return Tk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Tk(kk, Fk)
    }

    function rk(kk, Fk, Bk) {
      return (Fk = Dk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Dk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Ok(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Ok(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Ok(Fk) ? Fk : Fk + ""
    }
    var zk = function(kk) {
      function Fk() {
        var kk;
        ! function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk);
        for (var Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        return rk(kk = Uk(this, Fk, [].concat(Rk)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), rk(kk, "generateSimpleStrokeDasharray", (function(kk, Fk) {
          return "".concat(Fk, "px ").concat(kk - Fk, "px")
        })), rk(kk, "getStrokeDasharray", (function(Bk, Rk, tk) {
          var ak = tk.reduce((function(kk, Fk) {
            return kk + Fk
          }));
          if (!ak) return kk.generateSimpleStrokeDasharray(Rk, Bk);
          for (var Xk = Math.floor(Bk / ak), bk = Bk % ak, wk = Rk - Bk, dk = [], sk = 0, Vk = 0; sk < tk.length; Vk += tk[sk], ++sk)
            if (Vk + tk[sk] > bk) {
              dk = [].concat(uk(tk.slice(0, sk)), [bk - Vk]);
              break
            } var Jk = dk.length % 2 === 0 ? [0, wk] : [wk];
          return [].concat(uk(Fk.repeat(tk, Xk)), uk(dk), Jk).map((function(kk) {
            return "".concat(kk, "px")
          })).join(", ")
        })), rk(kk, "id", (0, mk.E)("recharts-line-")), rk(kk, "pathRef", (function(Fk) {
          kk.mainCurve = Fk
        })), rk(kk, "handleAnimationEnd", (function() {
          kk.setState({
            isAnimationFinished: !0
          }), kk.props.onAnimationEnd && kk.props.onAnimationEnd()
        })), rk(kk, "handleAnimationStart", (function() {
          kk.setState({
            isAnimationFinished: !1
          }), kk.props.onAnimationStart && kk.props.onAnimationStart()
        })), kk
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Tk(kk, Fk)
      }(Fk, kk), Bk = Fk, ak = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var kk = this.getTotalLength();
            this.setState({
              totalLength: kk
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var kk = this.getTotalLength();
            kk !== this.state.totalLength && this.setState({
              totalLength: kk
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var kk = this.mainCurve;
          try {
            return kk && kk.getTotalLength && kk.getTotalLength() || 0
          } catch (Fk) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(kk, Fk) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Bk = this.props,
            tk = Bk.points,
            ak = Bk.xAxis,
            Xk = Bk.yAxis,
            bk = Bk.layout,
            wk = Bk.children,
            dk = (0, Wk.c)(wk, fk.c);
          if (!dk) return null;
          var sk = function(kk, Fk) {
              return {
                x: kk.x,
                y: kk.y,
                value: kk.value,
                errorVal: (0, ik.$)(kk.payload, Fk)
              }
            },
            Vk = {
              clipPath: kk ? "url(#clipPath-".concat(Fk, ")") : null
            };
          return Rk.createElement(ek.b, Vk, dk.map((function(kk) {
            return Rk.cloneElement(kk, {
              key: "bar-".concat(kk.props.dataKey),
              data: tk,
              xAxis: ak,
              yAxis: Xk,
              layout: bk,
              dataPointFormatter: sk
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(kk, Bk, tk) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var ak = this.props,
            Xk = ak.dot,
            bk = ak.points,
            wk = ak.dataKey,
            dk = (0, Wk.b)(this.props, !1),
            sk = (0, Wk.b)(Xk, !0),
            Vk = bk.map((function(kk, Bk) {
              var Rk = Hk(Hk(Hk({
                key: "dot-".concat(Bk),
                r: 3
              }, dk), sk), {}, {
                index: Bk,
                cx: kk.x,
                cy: kk.y,
                value: kk.value,
                dataKey: wk,
                payload: kk.payload,
                points: bk
              });
              return Fk.renderDotItem(Xk, Rk)
            })),
            Jk = {
              clipPath: kk ? "url(#clipPath-".concat(Bk ? "" : "dots-").concat(tk, ")") : null
            };
          return Rk.createElement(ek.b, Sk({
            className: "recharts-line-dots",
            key: "dots"
          }, Jk), Vk)
        }
      }, {
        key: "renderCurveStatically",
        value: function(kk, Fk, Bk, tk) {
          var ak = this.props,
            Xk = ak.type,
            bk = ak.layout,
            wk = ak.connectNulls,
            dk = (ak.ref, Ek(ak, Yk)),
            sk = Hk(Hk(Hk({}, (0, Wk.b)(dk, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: Fk ? "url(#clipPath-".concat(Bk, ")") : null,
              points: kk
            }, tk), {}, {
              type: Xk,
              layout: bk,
              connectNulls: wk
            });
          return Rk.createElement(Jk.b, Sk({}, sk, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(kk, Fk) {
          var Bk = this,
            ak = this.props,
            Xk = ak.points,
            bk = ak.strokeDasharray,
            wk = ak.isAnimationActive,
            dk = ak.animationBegin,
            sk = ak.animationDuration,
            Vk = ak.animationEasing,
            Jk = ak.animationId,
            Ak = ak.animateNewValues,
            ek = ak.width,
            yk = ak.height,
            fk = this.state,
            Wk = fk.prevPoints,
            vk = fk.totalLength;
          return Rk.createElement(tk.d, {
            UA: dk,
            duration: sk,
            isActive: wk,
            easing: Vk,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(Jk),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Rk) {
            var tk = Rk.t;
            if (Wk) {
              var ak = Wk.length / Xk.length,
                wk = Xk.map((function(kk, Fk) {
                  var Bk = Math.floor(Fk * ak);
                  if (Wk[Bk]) {
                    var Rk = Wk[Bk],
                      Xk = (0, mk.o)(Rk.x, kk.x),
                      bk = (0, mk.o)(Rk.y, kk.y);
                    return Hk(Hk({}, kk), {}, {
                      x: Xk(tk),
                      y: bk(tk)
                    })
                  }
                  if (Ak) {
                    var wk = (0, mk.o)(2 * ek, kk.x),
                      dk = (0, mk.o)(yk / 2, kk.y);
                    return Hk(Hk({}, kk), {}, {
                      x: wk(tk),
                      y: dk(tk)
                    })
                  }
                  return Hk(Hk({}, kk), {}, {
                    x: kk.x,
                    y: kk.y
                  })
                }));
              return Bk.renderCurveStatically(wk, kk, Fk)
            }
            var dk, sk = (0, mk.o)(0, vk)(tk);
            if (bk) {
              var Vk = "".concat(bk).split(/[,\s]+/gim).map((function(kk) {
                return parseFloat(kk)
              }));
              dk = Bk.getStrokeDasharray(sk, vk, Vk)
            } else dk = Bk.generateSimpleStrokeDasharray(vk, sk);
            return Bk.renderCurveStatically(Xk, kk, Fk, {
              strokeDasharray: dk
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(kk, Fk) {
          var Bk = this.props,
            Rk = Bk.points,
            tk = Bk.isAnimationActive,
            ak = this.state,
            Xk = ak.prevPoints,
            bk = ak.totalLength;
          return tk && Rk && Rk.length && (!Xk && bk > 0 || !sk()(Xk, Rk)) ? this.renderCurveWithAnimation(kk, Fk) : this.renderCurveStatically(Rk, kk, Fk)
        }
      }, {
        key: "render",
        value: function() {
          var kk, Fk = this.props,
            Bk = Fk.hide,
            tk = Fk.dot,
            ak = Fk.points,
            Xk = Fk.className,
            bk = Fk.xAxis,
            dk = Fk.yAxis,
            sk = Fk.top,
            Jk = Fk.left,
            Ak = Fk.width,
            fk = Fk.height,
            mk = Fk.isAnimationActive,
            vk = Fk.id;
          if (Bk || !ak || !ak.length) return null;
          var ik = this.state.isAnimationFinished,
            Yk = 1 === ak.length,
            Lk = (0, Vk.e)("recharts-line", Xk),
            Ok = bk && bk.allowDataOverflow,
            Ek = dk && dk.allowDataOverflow,
            Sk = Ok || Ek,
            Nk = wk()(vk) ? this.id : vk,
            Hk = null !== (kk = (0, Wk.b)(tk, !1)) && void 0 !== kk ? kk : {
              r: 3,
              strokeWidth: 2
            },
            uk = Hk.r,
            Mk = void 0 === uk ? 3 : uk,
            gk = Hk.strokeWidth,
            Uk = void 0 === gk ? 2 : gk,
            ck = ((0, Wk.j)(tk) ? tk : {}).clipDot,
            Gk = void 0 === ck || ck,
            Tk = 2 * Mk + Uk;
          return Rk.createElement(ek.b, {
            className: Lk
          }, Ok || Ek ? Rk.createElement("defs", null, Rk.createElement("clipPath", {
            id: "clipPath-".concat(Nk)
          }, Rk.createElement("rect", {
            x: Ok ? Jk : Jk - Ak / 2,
            y: Ek ? sk : sk - fk / 2,
            width: Ok ? Ak : 2 * Ak,
            height: Ek ? fk : 2 * fk
          })), !Gk && Rk.createElement("clipPath", {
            id: "clipPath-dots-".concat(Nk)
          }, Rk.createElement("rect", {
            x: Jk - Tk / 2,
            y: sk - Tk / 2,
            width: Ak + Tk,
            height: fk + Tk
          }))) : null, !Yk && this.renderCurve(Sk, Nk), this.renderErrorBar(Sk, Nk), (Yk || tk) && this.renderDots(Sk, Gk, Nk), (!mk || ik) && yk.e.renderCallByParent(this.props, ak))
        }
      }], bk = [{
        key: "getDerivedStateFromProps",
        value: function(kk, Fk) {
          return kk.animationId !== Fk.prevAnimationId ? {
            prevAnimationId: kk.animationId,
            curPoints: kk.points,
            prevPoints: Fk.curPoints
          } : kk.points !== Fk.curPoints ? {
            curPoints: kk.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(kk, Fk) {
          for (var Bk = kk.length % 2 !== 0 ? [].concat(uk(kk), [0]) : kk, Rk = [], tk = 0; tk < Fk; ++tk) Rk = [].concat(uk(Rk), uk(Bk));
          return Rk
        }
      }, {
        key: "renderDotItem",
        value: function(kk, Fk) {
          var Bk;
          if (Rk.isValidElement(kk)) Bk = Rk.cloneElement(kk, Fk);
          else if (Xk()(kk)) Bk = kk(Fk);
          else {
            var tk = Fk.key,
              ak = Ek(Fk, Lk),
              bk = (0, Vk.e)("recharts-line-dot", "boolean" !== typeof kk ? kk.className : "");
            Bk = Rk.createElement(Ak.c, Sk({
              key: tk
            }, ak, {
              className: bk
            }))
          }
          return Bk
        }
      }], ak && gk(Bk.prototype, ak), bk && gk(Bk, bk), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, ak, bk
    }(Rk.PureComponent);
    rk(zk, "displayName", "Line"), rk(zk, "defaultProps", {
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
      isAnimationActive: !vk.c.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), rk(zk, "getComposedData", (function(kk) {
      var Fk = kk.props,
        Bk = kk.xAxis,
        Rk = kk.yAxis,
        tk = kk.xAxisTicks,
        ak = kk.yAxisTicks,
        Xk = kk.dataKey,
        bk = kk.bandSize,
        dk = kk.displayedData,
        sk = kk.offset,
        Vk = Fk.layout;
      return Hk({
        points: dk.map((function(kk, Fk) {
          var dk = (0, ik.$)(kk, Xk);
          return "horizontal" === Vk ? {
            x: (0, ik.w)({
              axis: Bk,
              ticks: tk,
              bandSize: bk,
              entry: kk,
              index: Fk
            }),
            y: wk()(dk) ? null : Rk.scale(dk),
            value: dk,
            payload: kk
          } : {
            x: wk()(dk) ? null : Bk.scale(dk),
            y: (0, ik.w)({
              axis: Rk,
              ticks: ak,
              bandSize: bk,
              entry: kk,
              index: Fk
            }),
            value: dk,
            payload: kk
          }
        })),
        layout: Vk
      }, sk)
    }))
  },
  6027: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Uk
    });
    var Rk = Bk(61),
      tk = Bk(4936),
      ak = Bk.n(tk),
      Xk = Bk(6035),
      bk = Bk.n(Xk),
      wk = Bk(4750),
      dk = Bk(5647),
      sk = Bk(5921),
      Vk = Bk(5933),
      Jk = Bk(4829),
      Ak = Bk(5941),
      ek = Bk(5104),
      yk = Bk(5106),
      fk = Bk(6043);

    function mk(kk) {
      return mk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, mk(kk)
    }

    function Wk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Nk(Rk.key), Rk)
      }
    }

    function vk(kk, Fk, Bk) {
      return Fk = Yk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === mk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, ik() ? Reflect.construct(Fk, Bk || [], Yk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function ik() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (ik = function() {
        return !!kk
      })()
    }

    function Yk(kk) {
      return Yk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Yk(kk)
    }

    function Lk(kk, Fk) {
      return Lk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Lk(kk, Fk)
    }

    function Ok(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Ek(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Ok(Object(Bk), !0).forEach((function(Fk) {
          Sk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Ok(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Sk(kk, Fk, Bk) {
      return (Fk = Nk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Nk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != mk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != mk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == mk(Fk) ? Fk : Fk + ""
    }

    function Hk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return uk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return uk(kk, Fk)
      }(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function Mk() {
      return Mk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Mk.apply(this, arguments)
    }

    function gk(kk) {
      var Fk = kk.x,
        Bk = kk.y,
        tk = kk.segment,
        Xk = kk.xAxisId,
        mk = kk.yAxisId,
        Wk = kk.shape,
        vk = kk.className,
        ik = kk.alwaysShow,
        Yk = (0, fk.m)(),
        Lk = (0, fk.w)(Xk),
        Ok = (0, fk.z)(mk),
        Sk = (0, fk.s)();
      if (!Yk || !Sk) return null;
      (0, ek.e)(void 0 === ik, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var Nk = function(kk, Fk, Bk, Rk, tk, ak, Xk, wk, dk) {
        var sk = tk.x,
          Jk = tk.y,
          Ak = tk.width,
          ek = tk.height;
        if (Bk) {
          var yk = dk.y,
            fk = kk.y.apply(yk, {
              position: ak
            });
          if ((0, Vk.e)(dk, "discard") && !kk.y.isInRange(fk)) return null;
          var mk = [{
            x: sk + Ak,
            y: fk
          }, {
            x: sk,
            y: fk
          }];
          return "left" === wk ? mk.reverse() : mk
        }
        if (Fk) {
          var Wk = dk.x,
            vk = kk.x.apply(Wk, {
              position: ak
            });
          if ((0, Vk.e)(dk, "discard") && !kk.x.isInRange(vk)) return null;
          var ik = [{
            x: vk,
            y: Jk + ek
          }, {
            x: vk,
            y: Jk
          }];
          return "top" === Xk ? ik.reverse() : ik
        }
        if (Rk) {
          var Yk = dk.segment.map((function(Fk) {
            return kk.apply(Fk, {
              position: ak
            })
          }));
          return (0, Vk.e)(dk, "discard") && bk()(Yk, (function(Fk) {
            return !kk.isInRange(Fk)
          })) ? null : Yk
        }
        return null
      }((0, Ak.e)({
        x: Lk.scale,
        y: Ok.scale
      }), (0, Jk.u)(Fk), (0, Jk.u)(Bk), tk && 2 === tk.length, Sk, kk.position, Lk.orientation, Ok.orientation, kk);
      if (!Nk) return null;
      var uk = Hk(Nk, 2),
        gk = uk[0],
        Uk = gk.x,
        ck = gk.y,
        Gk = uk[1],
        Tk = Gk.x,
        rk = Gk.y,
        Dk = Ek(Ek({
          clipPath: (0, Vk.e)(kk, "hidden") ? "url(#".concat(Yk, ")") : void 0
        }, (0, yk.b)(kk, !0)), {}, {
          x1: Uk,
          y1: ck,
          x2: Tk,
          y2: rk
        });
      return Rk.createElement(dk.b, {
        className: (0, wk.e)("recharts-reference-line", vk)
      }, function(kk, Fk) {
        return Rk.isValidElement(kk) ? Rk.cloneElement(kk, Fk) : ak()(kk) ? kk(Fk) : Rk.createElement("line", Mk({}, Fk, {
          className: "recharts-reference-line-line"
        }))
      }(Wk, Dk), sk.d.renderCallByParent(kk, (0, Ak.l)({
        x1: Uk,
        y1: ck,
        x2: Tk,
        y2: rk
      })))
    }
    var Uk = function(kk) {
      function Fk() {
        return function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk), vk(this, Fk, arguments)
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Lk(kk, Fk)
      }(Fk, kk), Bk = Fk, (tk = [{
        key: "render",
        value: function() {
          return Rk.createElement(gk, this.props)
        }
      }]) && Wk(Bk.prototype, tk), ak && Wk(Bk, ak), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, tk, ak
    }(Rk.Component);
    Sk(Uk, "displayName", "ReferenceLine"), Sk(Uk, "defaultProps", {
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
  6078: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Wk
    });
    var Rk = Bk(61),
      tk = Bk(4750),
      ak = Bk(6043),
      Xk = Bk(6080),
      bk = Bk(5833);

    function wk(kk) {
      return wk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, wk(kk)
    }

    function dk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, yk(Rk.key), Rk)
      }
    }

    function sk(kk, Fk, Bk) {
      return Fk = Jk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === wk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, Vk() ? Reflect.construct(Fk, Bk || [], Jk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function Vk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (Vk = function() {
        return !!kk
      })()
    }

    function Jk(kk) {
      return Jk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Jk(kk)
    }

    function Ak(kk, Fk) {
      return Ak = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Ak(kk, Fk)
    }

    function ek(kk, Fk, Bk) {
      return (Fk = yk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function yk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != wk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != wk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == wk(Fk) ? Fk : Fk + ""
    }

    function fk() {
      return fk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, fk.apply(this, arguments)
    }

    function mk(kk) {
      var Fk = kk.xAxisId,
        Bk = (0, ak.k)(),
        wk = (0, ak.j)(),
        dk = (0, ak.w)(Fk);
      return null == dk ? null : Rk.createElement(Xk.d, fk({}, dk, {
        className: (0, tk.e)("recharts-".concat(dk.axisType, " ").concat(dk.axisType), dk.className),
        viewBox: {
          x: 0,
          y: 0,
          width: Bk,
          height: wk
        },
        ticksGenerator: function(kk) {
          return (0, bk.T)(kk, !0)
        }
      }))
    }
    var Wk = function(kk) {
      function Fk() {
        return function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk), sk(this, Fk, arguments)
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Ak(kk, Fk)
      }(Fk, kk), Bk = Fk, (tk = [{
        key: "render",
        value: function() {
          return Rk.createElement(mk, this.props)
        }
      }]) && dk(Bk.prototype, tk), ak && dk(Bk, ak), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, tk, ak
    }(Rk.Component);
    ek(Wk, "displayName", "XAxis"), ek(Wk, "defaultProps", {
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
  6090: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Wk
    });
    var Rk = Bk(61),
      tk = Bk(4750),
      ak = Bk(6043),
      Xk = Bk(6080),
      bk = Bk(5833);

    function wk(kk) {
      return wk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, wk(kk)
    }

    function dk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, yk(Rk.key), Rk)
      }
    }

    function sk(kk, Fk, Bk) {
      return Fk = Jk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === wk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, Vk() ? Reflect.construct(Fk, Bk || [], Jk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function Vk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (Vk = function() {
        return !!kk
      })()
    }

    function Jk(kk) {
      return Jk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Jk(kk)
    }

    function Ak(kk, Fk) {
      return Ak = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Ak(kk, Fk)
    }

    function ek(kk, Fk, Bk) {
      return (Fk = yk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function yk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != wk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != wk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == wk(Fk) ? Fk : Fk + ""
    }

    function fk() {
      return fk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, fk.apply(this, arguments)
    }
    var mk = function(kk) {
        var Fk = kk.yAxisId,
          Bk = (0, ak.k)(),
          wk = (0, ak.j)(),
          dk = (0, ak.z)(Fk);
        return null == dk ? null : Rk.createElement(Xk.d, fk({}, dk, {
          className: (0, tk.e)("recharts-".concat(dk.axisType, " ").concat(dk.axisType), dk.className),
          viewBox: {
            x: 0,
            y: 0,
            width: Bk,
            height: wk
          },
          ticksGenerator: function(kk) {
            return (0, bk.T)(kk, !0)
          }
        }))
      },
      Wk = function(kk) {
        function Fk() {
          return function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, Fk), sk(this, Fk, arguments)
        }
        return function(kk, Fk) {
          if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
          kk.prototype = Object.create(Fk && Fk.prototype, {
            constructor: {
              value: kk,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(kk, "prototype", {
            writable: !1
          }), Fk && Ak(kk, Fk)
        }(Fk, kk), Bk = Fk, (tk = [{
          key: "render",
          value: function() {
            return Rk.createElement(mk, this.props)
          }
        }]) && dk(Bk.prototype, tk), ak && dk(Bk, ak), Object.defineProperty(Bk, "prototype", {
          writable: !1
        }), Bk;
        var Bk, tk, ak
      }(Rk.Component);
    ek(Wk, "displayName", "YAxis"), ek(Wk, "defaultProps", {
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
  6083: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => yk
    });
    var Rk = Bk(4936),
      tk = Bk.n(Rk),
      ak = Bk(4829),
      Xk = Bk(5824),
      bk = Bk(5663),
      wk = Bk(5941);

    function dk(kk, Fk, Bk) {
      if (Fk < 1) return [];
      if (1 === Fk && void 0 === Bk) return kk;
      for (var Rk = [], tk = 0; tk < kk.length; tk += Fk) {
        if (void 0 !== Bk && !0 !== Bk(kk[tk])) return;
        Rk.push(kk[tk])
      }
      return Rk
    }

    function sk(kk, Fk, Bk, Rk, tk) {
      if (kk * Fk < kk * Rk || kk * Fk > kk * tk) return !1;
      var ak = Bk();
      return kk * (Fk - kk * ak / 2 - Rk) >= 0 && kk * (Fk + kk * ak / 2 - tk) <= 0
    }

    function Vk(kk) {
      return Vk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Vk(kk)
    }

    function Jk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Ak(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Jk(Object(Bk), !0).forEach((function(Fk) {
          ek(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Jk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function ek(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != Vk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != Vk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == Vk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function yk(kk, Fk, Bk) {
      var Rk = kk.yJ,
        Vk = kk.ticks,
        Jk = kk.viewBox,
        ek = kk.minTickGap,
        yk = kk.orientation,
        fk = kk.interval,
        mk = kk.tickFormatter,
        Wk = kk.unit,
        vk = kk.angle;
      if (!Vk || !Vk.length || !Rk) return [];
      if ((0, ak.y)(fk) || bk.c.isSsr) return function(kk, Fk) {
        return dk(kk, Fk + 1)
      }(Vk, "number" === typeof fk && (0, ak.y)(fk) ? fk : 0);
      var ik = [],
        Yk = "top" === yk || "bottom" === yk ? "width" : "height",
        Lk = Wk && "width" === Yk ? (0, Xk.f)(Wk, {
          fontSize: Fk,
          letterSpacing: Bk
        }) : {
          width: 0,
          height: 0
        },
        Ok = function(kk, Rk) {
          var ak = tk()(mk) ? mk(kk.value, Rk) : kk.value;
          return "width" === Yk ? function(kk, Fk, Bk) {
            var Rk = {
              width: kk.width + Fk.width,
              height: kk.height + Fk.height
            };
            return (0, wk.j)(Rk, Bk)
          }((0, Xk.f)(ak, {
            fontSize: Fk,
            letterSpacing: Bk
          }), Lk, vk) : (0, Xk.f)(ak, {
            fontSize: Fk,
            letterSpacing: Bk
          })[Yk]
        },
        Ek = Vk.length >= 2 ? (0, ak.B)(Vk[1].coordinate - Vk[0].coordinate) : 1,
        Sk = function(kk, Fk, Bk) {
          var Rk = "width" === Bk,
            tk = kk.x,
            ak = kk.y,
            Xk = kk.width,
            bk = kk.height;
          return 1 === Fk ? {
            start: Rk ? tk : ak,
            end: Rk ? tk + Xk : ak + bk
          } : {
            start: Rk ? tk + Xk : ak + bk,
            end: Rk ? tk : ak
          }
        }(Jk, Ek, Yk);
      return "equidistantPreserveStart" === fk ? function(kk, Fk, Bk, Rk, tk) {
        for (var ak, Xk = (Rk || []).slice(), bk = Fk.start, wk = Fk.end, Vk = 0, Jk = 1, Ak = bk, ek = function() {
            var Fk = null === Rk || void 0 === Rk ? void 0 : Rk[Vk];
            if (void 0 === Fk) return {
              v: dk(Rk, Jk)
            };
            var ak, Xk = Vk,
              ek = function() {
                return void 0 === ak && (ak = Bk(Fk, Xk)), ak
              },
              yk = Fk.coordinate,
              fk = 0 === Vk || sk(kk, yk, ek, Ak, wk);
            fk || (Vk = 0, Ak = bk, Jk += 1), fk && (Ak = yk + kk * (ek() / 2 + tk), Vk += Jk)
          }; Jk <= Xk.length;)
          if (ak = ek()) return ak.v;
        return []
      }(Ek, Sk, Ok, Vk, ek) : (ik = "preserveStart" === fk || "preserveStartEnd" === fk ? function(kk, Fk, Bk, Rk, tk, ak) {
        var Xk = (Rk || []).slice(),
          bk = Xk.length,
          wk = Fk.start,
          dk = Fk.end;
        if (ak) {
          var Vk = Rk[bk - 1],
            Jk = Bk(Vk, bk - 1),
            ek = kk * (Vk.coordinate + kk * Jk / 2 - dk);
          Xk[bk - 1] = Vk = Ak(Ak({}, Vk), {}, {
            tickCoord: ek > 0 ? Vk.coordinate - ek * kk : Vk.coordinate
          }), sk(kk, Vk.tickCoord, (function() {
            return Jk
          }), wk, dk) && (dk = Vk.tickCoord - kk * (Jk / 2 + tk), Xk[bk - 1] = Ak(Ak({}, Vk), {}, {
            isShow: !0
          }))
        }
        for (var yk = ak ? bk - 1 : bk, fk = function(Fk) {
            var Rk, ak = Xk[Fk],
              bk = function() {
                return void 0 === Rk && (Rk = Bk(ak, Fk)), Rk
              };
            if (0 === Fk) {
              var Vk = kk * (ak.coordinate - kk * bk() / 2 - wk);
              Xk[Fk] = ak = Ak(Ak({}, ak), {}, {
                tickCoord: Vk < 0 ? ak.coordinate - Vk * kk : ak.coordinate
              })
            } else Xk[Fk] = ak = Ak(Ak({}, ak), {}, {
              tickCoord: ak.coordinate
            });
            sk(kk, ak.tickCoord, bk, wk, dk) && (wk = ak.tickCoord + kk * (bk() / 2 + tk), Xk[Fk] = Ak(Ak({}, ak), {}, {
              isShow: !0
            }))
          }, mk = 0; mk < yk; mk++) fk(mk);
        return Xk
      }(Ek, Sk, Ok, Vk, ek, "preserveStartEnd" === fk) : function(kk, Fk, Bk, Rk, tk) {
        for (var ak = (Rk || []).slice(), Xk = ak.length, bk = Fk.start, wk = Fk.end, dk = function(Fk) {
            var Rk, dk = ak[Fk],
              Vk = function() {
                return void 0 === Rk && (Rk = Bk(dk, Fk)), Rk
              };
            if (Fk === Xk - 1) {
              var Jk = kk * (dk.coordinate + kk * Vk() / 2 - wk);
              ak[Fk] = dk = Ak(Ak({}, dk), {}, {
                tickCoord: Jk > 0 ? dk.coordinate - Jk * kk : dk.coordinate
              })
            } else ak[Fk] = dk = Ak(Ak({}, dk), {}, {
              tickCoord: dk.coordinate
            });
            sk(kk, dk.tickCoord, Vk, bk, wk) && (wk = dk.tickCoord - kk * (Vk() / 2 + tk), ak[Fk] = Ak(Ak({}, dk), {}, {
              isShow: !0
            }))
          }, Vk = Xk - 1; Vk >= 0; Vk--) dk(Vk);
        return ak
      }(Ek, Sk, Ok, Vk, ek), ik.filter((function(kk) {
        return kk.isShow
      })))
    }
  },
  6099: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => wk
    });
    var Rk = Bk(5133),
      tk = Bk(5977),
      ak = Bk(6078),
      Xk = Bk(6090),
      bk = Bk(5941),
      wk = (0, Rk.c)({
        chartName: "BarChart",
        GraphicalChild: tk.d,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: ak.d
        }, {
          axisType: "yAxis",
          AxisComp: Xk.e
        }],
        formatAxisMap: bk.h
      })
  },
  5131: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => aF
    });
    var Rk = Bk(5133),
      tk = Bk(6073),
      ak = Bk(5977),
      Xk = Bk(6075),
      bk = Bk(61),
      wk = Bk(5811),
      dk = Bk(5099),
      sk = Bk.n(dk),
      Vk = Bk(5893),
      Jk = Bk.n(Vk),
      Ak = Bk(4936),
      ek = Bk.n(Ak),
      yk = Bk(4750),
      fk = Bk(5647),
      mk = Bk(5988),
      Wk = Bk(5106),
      vk = Bk(5663);

    function ik(kk) {
      return ik = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, ik(kk)
    }

    function Yk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Hk(Rk.key), Rk)
      }
    }

    function Lk(kk, Fk, Bk) {
      return Fk = Ek(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === ik(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, Ok() ? Reflect.construct(Fk, Bk || [], Ek(kk).constructor) : Fk.apply(kk, Bk))
    }

    function Ok() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (Ok = function() {
        return !!kk
      })()
    }

    function Ek(kk) {
      return Ek = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Ek(kk)
    }

    function Sk(kk, Fk) {
      return Sk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Sk(kk, Fk)
    }

    function Nk(kk, Fk, Bk) {
      return (Fk = Hk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Hk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != ik(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != ik(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == ik(Fk) ? Fk : Fk + ""
    }
    var uk = function(kk) {
      function Fk() {
        return function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk), Lk(this, Fk, arguments)
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Sk(kk, Fk)
      }(Fk, kk), Bk = Fk, (Rk = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && Yk(Bk.prototype, Rk), tk && Yk(Bk, tk), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, Rk, tk
    }(bk.Component);
    Nk(uk, "displayName", "ZAxis"), Nk(uk, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var Mk = Bk(6069),
      gk = Bk(5904),
      Uk = Bk(5983),
      ck = Bk(4829),
      Gk = Bk(5833),
      Tk = Bk(5125),
      rk = Bk(5727),
      Dk = Bk(5993),
      zk = ["option", "isActive"];

    function Pk() {
      return Pk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Pk.apply(this, arguments)
    }

    function hk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function qk(kk) {
      var Fk = kk.option,
        Bk = kk.isActive,
        Rk = hk(kk, zk);
      return "string" === typeof Fk ? bk.createElement(Dk.c, Pk({
        option: bk.createElement(rk.c, Pk({
          type: Fk
        }, Rk)),
        isActive: Bk,
        shapeType: "symbols"
      }, Rk)) : bk.createElement(Dk.c, Pk({
        option: Fk,
        isActive: Bk,
        shapeType: "symbols"
      }, Rk))
    }

    function Ck(kk) {
      return Ck = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Ck(kk)
    }

    function Zk() {
      return Zk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Zk.apply(this, arguments)
    }

    function pk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Kk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? pk(Object(Bk), !0).forEach((function(Fk) {
          Qk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : pk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function xk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, kF(Rk.key), Rk)
      }
    }

    function jk(kk, Fk, Bk) {
      return Fk = nk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === Ck(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, lk() ? Reflect.construct(Fk, Bk || [], nk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function lk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (lk = function() {
        return !!kk
      })()
    }

    function nk(kk) {
      return nk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, nk(kk)
    }

    function Ik(kk, Fk) {
      return Ik = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Ik(kk, Fk)
    }

    function Qk(kk, Fk, Bk) {
      return (Fk = kF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function kF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Ck(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Ck(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Ck(Fk) ? Fk : Fk + ""
    }
    var FF = function(kk) {
      function Fk() {
        var kk;
        ! function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk);
        for (var Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        return Qk(kk = jk(this, Fk, [].concat(Rk)), "state", {
          isAnimationFinished: !1
        }), Qk(kk, "handleAnimationEnd", (function() {
          kk.setState({
            isAnimationFinished: !0
          })
        })), Qk(kk, "handleAnimationStart", (function() {
          kk.setState({
            isAnimationFinished: !1
          })
        })), Qk(kk, "id", (0, ck.E)("recharts-scatter-")), kk
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Ik(kk, Fk)
      }(Fk, kk), Bk = Fk, Rk = [{
        key: "renderSymbolsStatically",
        value: function(kk) {
          var Fk = this,
            Bk = this.props,
            Rk = Bk.shape,
            tk = Bk.activeShape,
            ak = Bk.activeIndex,
            Xk = (0, Wk.b)(this.props, !1);
          return kk.map((function(kk, Bk) {
            var wk = ak === Bk,
              dk = wk ? tk : Rk,
              sk = Kk(Kk({}, Xk), kk);
            return bk.createElement(fk.b, Zk({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === kk || void 0 === kk ? void 0 : kk.cx, "-").concat(null === kk || void 0 === kk ? void 0 : kk.cy, "-").concat(null === kk || void 0 === kk ? void 0 : kk.size, "-").concat(Bk)
            }, (0, Tk.h)(Fk.props, kk, Bk), {
              role: "img"
            }), bk.createElement(qk, Zk({
              option: dk,
              isActive: wk,
              key: "symbol-".concat(Bk)
            }, sk)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var kk = this,
            Fk = this.props,
            Bk = Fk.points,
            Rk = Fk.isAnimationActive,
            tk = Fk.animationBegin,
            ak = Fk.animationDuration,
            Xk = Fk.animationEasing,
            dk = Fk.animationId,
            sk = this.state.prevPoints;
          return bk.createElement(wk.d, {
            UA: tk,
            duration: ak,
            isActive: Rk,
            easing: Xk,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(dk),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(Fk) {
            var Rk = Fk.t,
              tk = Bk.map((function(kk, Fk) {
                var Bk = sk && sk[Fk];
                if (Bk) {
                  var tk = (0, ck.o)(Bk.cx, kk.cx),
                    ak = (0, ck.o)(Bk.cy, kk.cy),
                    Xk = (0, ck.o)(Bk.size, kk.size);
                  return Kk(Kk({}, kk), {}, {
                    cx: tk(Rk),
                    cy: ak(Rk),
                    size: Xk(Rk)
                  })
                }
                var bk = (0, ck.o)(0, kk.size);
                return Kk(Kk({}, kk), {}, {
                  size: bk(Rk)
                })
              }));
            return bk.createElement(fk.b, null, kk.renderSymbolsStatically(tk))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var kk = this.props,
            Fk = kk.points,
            Bk = kk.isAnimationActive,
            Rk = this.state.prevPoints;
          return !(Bk && Fk && Fk.length) || Rk && Jk()(Rk, Fk) ? this.renderSymbolsStatically(Fk) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var kk = this.props,
            Fk = kk.points,
            Bk = kk.xAxis,
            Rk = kk.yAxis,
            tk = kk.children,
            ak = (0, Wk.c)(tk, gk.c);
          return ak ? ak.map((function(kk, tk) {
            var ak = kk.props,
              Xk = ak.direction,
              wk = ak.dataKey;
            return bk.cloneElement(kk, {
              key: "".concat(Xk, "-").concat(wk, "-").concat(Fk[tk]),
              data: Fk,
              xAxis: Bk,
              yAxis: Rk,
              layout: "x" === Xk ? "vertical" : "horizontal",
              dataPointFormatter: function(kk, Fk) {
                return {
                  x: kk.cx,
                  y: kk.cy,
                  value: "x" === Xk ? +kk.node.x : +kk.node.y,
                  errorVal: (0, Gk.$)(kk, Fk)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var kk, Fk, Bk = this.props,
            Rk = Bk.points,
            tk = Bk.line,
            ak = Bk.lineType,
            Xk = Bk.lineJointType,
            wk = (0, Wk.b)(this.props, !1),
            dk = (0, Wk.b)(tk, !1);
          if ("joint" === ak) kk = Rk.map((function(kk) {
            return {
              x: kk.cx,
              y: kk.cy
            }
          }));
          else if ("fitting" === ak) {
            var sk = (0, ck.j)(Rk),
              Vk = sk.xmin,
              Jk = sk.xmax,
              Ak = sk.a,
              yk = sk.b,
              mk = function(kk) {
                return Ak * kk + yk
              };
            kk = [{
              x: Vk,
              y: mk(Vk)
            }, {
              x: Jk,
              y: mk(Jk)
            }]
          }
          var vk = Kk(Kk(Kk({}, wk), {}, {
            fill: "none",
            stroke: wk && wk.fill
          }, dk), {}, {
            points: kk
          });
          return Fk = bk.isValidElement(tk) ? bk.cloneElement(tk, vk) : ek()(tk) ? tk(vk) : bk.createElement(Mk.b, Zk({}, vk, {
            type: Xk
          })), bk.createElement(fk.b, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, Fk)
        }
      }, {
        key: "render",
        value: function() {
          var kk = this.props,
            Fk = kk.hide,
            Bk = kk.points,
            Rk = kk.line,
            tk = kk.className,
            ak = kk.xAxis,
            Xk = kk.yAxis,
            wk = kk.left,
            dk = kk.top,
            Vk = kk.width,
            Jk = kk.height,
            Ak = kk.id,
            ek = kk.isAnimationActive;
          if (Fk || !Bk || !Bk.length) return null;
          var Wk = this.state.isAnimationFinished,
            vk = (0, yk.e)("recharts-scatter", tk),
            ik = ak && ak.allowDataOverflow,
            Yk = Xk && Xk.allowDataOverflow,
            Lk = ik || Yk,
            Ok = sk()(Ak) ? this.id : Ak;
          return bk.createElement(fk.b, {
            className: vk,
            clipPath: Lk ? "url(#clipPath-".concat(Ok, ")") : null
          }, ik || Yk ? bk.createElement("defs", null, bk.createElement("clipPath", {
            id: "clipPath-".concat(Ok)
          }, bk.createElement("rect", {
            x: ik ? wk : wk - Vk / 2,
            y: Yk ? dk : dk - Jk / 2,
            width: ik ? Vk : 2 * Vk,
            height: Yk ? Jk : 2 * Jk
          }))) : null, Rk && this.renderLine(), this.renderErrorBar(), bk.createElement(fk.b, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!ek || Wk) && mk.e.renderCallByParent(this.props, Bk))
        }
      }], tk = [{
        key: "getDerivedStateFromProps",
        value: function(kk, Fk) {
          return kk.animationId !== Fk.prevAnimationId ? {
            prevAnimationId: kk.animationId,
            curPoints: kk.points,
            prevPoints: Fk.curPoints
          } : kk.points !== Fk.curPoints ? {
            curPoints: kk.points
          } : null
        }
      }], Rk && xk(Bk.prototype, Rk), tk && xk(Bk, tk), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, Rk, tk
    }(bk.PureComponent);
    Qk(FF, "displayName", "Scatter"), Qk(FF, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !vk.c.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), Qk(FF, "getComposedData", (function(kk) {
      var Fk = kk.xAxis,
        Bk = kk.yAxis,
        Rk = kk.zAxis,
        tk = kk.item,
        ak = kk.displayedData,
        Xk = kk.xAxisTicks,
        bk = kk.yAxisTicks,
        wk = kk.offset,
        dk = tk.props.tooltipType,
        Vk = (0, Wk.c)(tk.props.children, Uk.c),
        Jk = sk()(Fk.dataKey) ? tk.props.dataKey : Fk.dataKey,
        Ak = sk()(Bk.dataKey) ? tk.props.dataKey : Bk.dataKey,
        ek = Rk && Rk.dataKey,
        yk = Rk ? Rk.range : uk.defaultProps.range,
        fk = yk && yk[0],
        mk = Fk.scale.bandwidth ? Fk.scale.bandwidth() : 0,
        vk = Bk.scale.bandwidth ? Bk.scale.bandwidth() : 0,
        ik = ak.map((function(kk, ak) {
          var wk = (0, Gk.$)(kk, Jk),
            yk = (0, Gk.$)(kk, Ak),
            Wk = !sk()(ek) && (0, Gk.$)(kk, ek) || "-",
            ik = [{
              name: sk()(Fk.dataKey) ? tk.props.name : Fk.name || Fk.dataKey,
              unit: Fk.unit || "",
              value: wk,
              payload: kk,
              dataKey: Jk,
              type: dk
            }, {
              name: sk()(Bk.dataKey) ? tk.props.name : Bk.name || Bk.dataKey,
              unit: Bk.unit || "",
              value: yk,
              payload: kk,
              dataKey: Ak,
              type: dk
            }];
          "-" !== Wk && ik.push({
            name: Rk.name || Rk.dataKey,
            unit: Rk.unit || "",
            value: Wk,
            payload: kk,
            dataKey: ek,
            type: dk
          });
          var Yk = (0, Gk.w)({
              axis: Fk,
              ticks: Xk,
              bandSize: mk,
              entry: kk,
              index: ak,
              dataKey: Jk
            }),
            Lk = (0, Gk.w)({
              axis: Bk,
              ticks: bk,
              bandSize: vk,
              entry: kk,
              index: ak,
              dataKey: Ak
            }),
            Ok = "-" !== Wk ? Rk.scale(Wk) : fk,
            Ek = Math.sqrt(Math.max(Ok, 0) / Math.PI);
          return Kk(Kk({}, kk), {}, {
            cx: Yk,
            cy: Lk,
            x: Yk - Ek,
            y: Lk - Ek,
            xAxis: Fk,
            yAxis: Bk,
            zAxis: Rk,
            width: 2 * Ek,
            height: 2 * Ek,
            size: Ok,
            node: {
              x: wk,
              y: yk,
              z: Wk
            },
            tooltipPayload: ik,
            tooltipPosition: {
              x: Yk,
              y: Lk
            },
            payload: kk
          }, Vk && Vk[ak] && Vk[ak].props)
        }));
      return Kk({
        points: ik
      }, wk)
    }));
    var BF = Bk(6078),
      RF = Bk(6090),
      tF = Bk(5941),
      aF = (0, Rk.c)({
        chartName: "ComposedChart",
        GraphicalChild: [Xk.d, tk.d, ak.d, FF],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: BF.d
        }, {
          axisType: "yAxis",
          AxisComp: RF.e
        }, {
          axisType: "zAxis",
          AxisComp: uk
        }],
        formatAxisMap: tF.h
      })
  },
  5133: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => PB
    });
    var Rk = Bk(61),
      tk = Bk(5099),
      ak = Bk.n(tk),
      Xk = Bk(4936),
      bk = Bk.n(Xk),
      wk = Bk(5141),
      dk = Bk.n(wk),
      sk = Bk(4863),
      Vk = Bk.n(sk),
      Jk = Bk(5199),
      Ak = Bk.n(Jk),
      ek = Bk(4758),
      yk = Bk.n(ek),
      fk = Bk(4750),
      mk = Bk(5635),
      Wk = Bk(5639),
      vk = Bk(5647),
      ik = Bk(5655),
      Yk = Bk(5720),
      Lk = Bk(5794),
      Ok = Bk(5803),
      Ek = Bk(5106),
      Sk = Bk(5837),
      Nk = Bk(5819),
      Hk = Bk(5833),
      uk = Bk(4829);

    function Mk(kk) {
      return Mk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Mk(kk)
    }

    function gk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Uk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? gk(Object(Bk), !0).forEach((function(Fk) {
          ck(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : gk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function ck(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != Mk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != Mk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == Mk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var Gk = ["Webkit", "Moz", "O", "ms"];

    function Tk(kk) {
      return Tk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Tk(kk)
    }

    function rk() {
      return rk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, rk.apply(this, arguments)
    }

    function Dk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function zk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Dk(Object(Bk), !0).forEach((function(Fk) {
          pk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Dk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Pk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Kk(Rk.key), Rk)
      }
    }

    function hk(kk, Fk, Bk) {
      return Fk = Ck(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === Tk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, qk() ? Reflect.construct(Fk, Bk || [], Ck(kk).constructor) : Fk.apply(kk, Bk))
    }

    function qk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (qk = function() {
        return !!kk
      })()
    }

    function Ck(kk) {
      return Ck = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Ck(kk)
    }

    function Zk(kk, Fk) {
      return Zk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Zk(kk, Fk)
    }

    function pk(kk, Fk, Bk) {
      return (Fk = Kk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Kk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Tk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Tk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Tk(Fk) ? Fk : Fk + ""
    }
    var xk = function(kk) {
        return kk.changedTouches && !!kk.changedTouches.length
      },
      jk = function(kk) {
        function Fk(kk) {
          var Bk;
          return function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, Fk), pk(Bk = hk(this, Fk, [kk]), "handleDrag", (function(kk) {
            Bk.leaveTimer && (clearTimeout(Bk.leaveTimer), Bk.leaveTimer = null), Bk.state.isTravellerMoving ? Bk.handleTravellerMove(kk) : Bk.state.isSlideMoving && Bk.handleSlideDrag(kk)
          })), pk(Bk, "handleTouchMove", (function(kk) {
            null != kk.changedTouches && kk.changedTouches.length > 0 && Bk.handleDrag(kk.changedTouches[0])
          })), pk(Bk, "handleDragEnd", (function() {
            Bk.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var kk = Bk.props,
                Fk = kk.endIndex,
                Rk = kk.onDragEnd,
                tk = kk.startIndex;
              null === Rk || void 0 === Rk || Rk({
                endIndex: Fk,
                startIndex: tk
              })
            })), Bk.detachDragEndListener()
          })), pk(Bk, "handleLeaveWrapper", (function() {
            (Bk.state.isTravellerMoving || Bk.state.isSlideMoving) && (Bk.leaveTimer = window.setTimeout(Bk.handleDragEnd, Bk.props.leaveTimeOut))
          })), pk(Bk, "handleEnterSlideOrTraveller", (function() {
            Bk.setState({
              isTextActive: !0
            })
          })), pk(Bk, "handleLeaveSlideOrTraveller", (function() {
            Bk.setState({
              isTextActive: !1
            })
          })), pk(Bk, "handleSlideDragStart", (function(kk) {
            var Fk = xk(kk) ? kk.changedTouches[0] : kk;
            Bk.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: Fk.pageX
            }), Bk.attachDragEndListener()
          })), Bk.travellerDragStartHandlers = {
            startX: Bk.handleTravellerDragStart.bind(Bk, "startX"),
            endX: Bk.handleTravellerDragStart.bind(Bk, "endX")
          }, Bk.state = {}, Bk
        }
        return function(kk, Fk) {
          if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
          kk.prototype = Object.create(Fk && Fk.prototype, {
            constructor: {
              value: kk,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(kk, "prototype", {
            writable: !1
          }), Fk && Zk(kk, Fk)
        }(Fk, kk), Bk = Fk, tk = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(kk) {
            var Bk = kk.startX,
              Rk = kk.endX,
              tk = this.state.scaleValues,
              ak = this.props,
              Xk = ak.gap,
              bk = ak.data.length - 1,
              wk = Math.min(Bk, Rk),
              dk = Math.max(Bk, Rk),
              sk = Fk.getIndexInRange(tk, wk),
              Vk = Fk.getIndexInRange(tk, dk);
            return {
              startIndex: sk - sk % Xk,
              endIndex: Vk === bk ? bk : Vk - Vk % Xk
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(kk) {
            var Fk = this.props,
              Bk = Fk.data,
              Rk = Fk.tickFormatter,
              tk = Fk.dataKey,
              ak = (0, Hk.$)(Bk[kk], tk, kk);
            return bk()(Rk) ? Rk(ak, kk) : ak
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
          value: function(kk) {
            var Fk = this.state,
              Bk = Fk.slideMoveStartX,
              Rk = Fk.startX,
              tk = Fk.endX,
              ak = this.props,
              Xk = ak.x,
              bk = ak.width,
              wk = ak.travellerWidth,
              dk = ak.startIndex,
              sk = ak.endIndex,
              Vk = ak.onChange,
              Jk = kk.pageX - Bk;
            Jk > 0 ? Jk = Math.min(Jk, Xk + bk - wk - tk, Xk + bk - wk - Rk) : Jk < 0 && (Jk = Math.max(Jk, Xk - Rk, Xk - tk));
            var Ak = this.getIndex({
              startX: Rk + Jk,
              endX: tk + Jk
            });
            Ak.startIndex === dk && Ak.endIndex === sk || !Vk || Vk(Ak), this.setState({
              startX: Rk + Jk,
              endX: tk + Jk,
              slideMoveStartX: kk.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(kk, Fk) {
            var Bk = xk(Fk) ? Fk.changedTouches[0] : Fk;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: kk,
              brushMoveStartX: Bk.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(kk) {
            var Fk = this.state,
              Bk = Fk.brushMoveStartX,
              Rk = Fk.movingTravellerId,
              tk = Fk.endX,
              ak = Fk.startX,
              Xk = this.state[Rk],
              bk = this.props,
              wk = bk.x,
              dk = bk.width,
              sk = bk.travellerWidth,
              Vk = bk.onChange,
              Jk = bk.gap,
              Ak = bk.data,
              ek = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              yk = kk.pageX - Bk;
            yk > 0 ? yk = Math.min(yk, wk + dk - sk - Xk) : yk < 0 && (yk = Math.max(yk, wk - Xk)), ek[Rk] = Xk + yk;
            var fk = this.getIndex(ek),
              mk = fk.startIndex,
              Wk = fk.endIndex;
            this.setState(pk(pk({}, Rk, Xk + yk), "brushMoveStartX", kk.pageX), (function() {
              Vk && function() {
                var kk = Ak.length - 1;
                return "startX" === Rk && (tk > ak ? mk % Jk === 0 : Wk % Jk === 0) || tk < ak && Wk === kk || "endX" === Rk && (tk > ak ? Wk % Jk === 0 : mk % Jk === 0) || tk > ak && Wk === kk
              }() && Vk(fk)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(kk, Fk) {
            var Bk = this,
              Rk = this.state,
              tk = Rk.scaleValues,
              ak = Rk.startX,
              Xk = Rk.endX,
              bk = this.state[Fk],
              wk = tk.indexOf(bk);
            if (-1 !== wk) {
              var dk = wk + kk;
              if (!(-1 === dk || dk >= tk.length)) {
                var sk = tk[dk];
                "startX" === Fk && sk >= Xk || "endX" === Fk && sk <= ak || this.setState(pk({}, Fk, sk), (function() {
                  Bk.props.onChange(Bk.getIndex({
                    startX: Bk.state.startX,
                    endX: Bk.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var kk = this.props,
              Fk = kk.x,
              Bk = kk.y,
              tk = kk.width,
              ak = kk.height,
              Xk = kk.fill,
              bk = kk.stroke;
            return Rk.createElement("rect", {
              stroke: bk,
              fill: Xk,
              x: Fk,
              y: Bk,
              width: tk,
              height: ak
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var kk = this.props,
              Fk = kk.x,
              Bk = kk.y,
              tk = kk.width,
              ak = kk.height,
              Xk = kk.data,
              bk = kk.children,
              wk = kk.padding,
              dk = Rk.Children.only(bk);
            return dk ? Rk.cloneElement(dk, {
              x: Fk,
              y: Bk,
              width: tk,
              height: ak,
              margin: wk,
              compact: !0,
              data: Xk
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(kk, Bk) {
            var tk, ak, Xk = this,
              bk = this.props,
              wk = bk.y,
              dk = bk.travellerWidth,
              sk = bk.height,
              Vk = bk.traveller,
              Jk = bk.ariaLabel,
              Ak = bk.data,
              ek = bk.startIndex,
              yk = bk.endIndex,
              fk = Math.max(kk, this.props.x),
              mk = zk(zk({}, (0, Ek.b)(this.props, !1)), {}, {
                x: fk,
                y: wk,
                width: dk,
                height: sk
              }),
              Wk = Jk || "Min value: ".concat(null === (tk = Ak[ek]) || void 0 === tk ? void 0 : tk.name, ", Max value: ").concat(null === (ak = Ak[yk]) || void 0 === ak ? void 0 : ak.name);
            return Rk.createElement(vk.b, {
              tabIndex: 0,
              role: "slider",
              "aria-label": Wk,
              "aria-valuenow": kk,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[Bk],
              onTouchStart: this.travellerDragStartHandlers[Bk],
              onKeyDown: function(kk) {
                ["ArrowLeft", "ArrowRight"].includes(kk.key) && (kk.preventDefault(), kk.stopPropagation(), Xk.handleTravellerMoveKeyboard("ArrowRight" === kk.key ? 1 : -1, Bk))
              },
              onFocus: function() {
                Xk.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                Xk.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, Fk.renderTraveller(Vk, mk))
          }
        }, {
          key: "renderSlide",
          value: function(kk, Fk) {
            var Bk = this.props,
              tk = Bk.y,
              ak = Bk.height,
              Xk = Bk.stroke,
              bk = Bk.travellerWidth,
              wk = Math.min(kk, Fk) + bk,
              dk = Math.max(Math.abs(Fk - kk) - bk, 0);
            return Rk.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: Xk,
              fillOpacity: .2,
              x: wk,
              y: tk,
              width: dk,
              height: ak
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var kk = this.props,
              Fk = kk.startIndex,
              Bk = kk.endIndex,
              tk = kk.y,
              ak = kk.height,
              Xk = kk.travellerWidth,
              bk = kk.stroke,
              wk = this.state,
              dk = wk.startX,
              sk = wk.endX,
              Vk = {
                pointerEvents: "none",
                fill: bk
              };
            return Rk.createElement(vk.b, {
              className: "recharts-brush-texts"
            }, Rk.createElement(Nk.b, rk({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(dk, sk) - 5,
              y: tk + ak / 2
            }, Vk), this.getTextOfTick(Fk)), Rk.createElement(Nk.b, rk({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(dk, sk) + Xk + 5,
              y: tk + ak / 2
            }, Vk), this.getTextOfTick(Bk)))
          }
        }, {
          key: "render",
          value: function() {
            var kk = this.props,
              Fk = kk.data,
              Bk = kk.className,
              tk = kk.children,
              ak = kk.x,
              Xk = kk.y,
              bk = kk.width,
              wk = kk.height,
              dk = kk.alwaysShowText,
              sk = this.state,
              Vk = sk.startX,
              Jk = sk.endX,
              Ak = sk.isTextActive,
              ek = sk.isSlideMoving,
              yk = sk.isTravellerMoving,
              mk = sk.isTravellerFocused;
            if (!Fk || !Fk.length || !(0, uk.y)(ak) || !(0, uk.y)(Xk) || !(0, uk.y)(bk) || !(0, uk.y)(wk) || bk <= 0 || wk <= 0) return null;
            var Wk = (0, fk.e)("recharts-brush", Bk),
              ik = 1 === Rk.Children.count(tk),
              Yk = function(kk, Fk) {
                if (!kk) return null;
                var Bk = kk.replace(/(\w)/, (function(kk) {
                    return kk.toUpperCase()
                  })),
                  Rk = Gk.reduce((function(kk, Rk) {
                    return Uk(Uk({}, kk), {}, ck({}, Rk + Bk, Fk))
                  }), {});
                return Rk[kk] = Fk, Rk
              }("userSelect", "none");
            return Rk.createElement(vk.b, {
              className: Wk,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: Yk
            }, this.renderBackground(), ik && this.renderPanorama(), this.renderSlide(Vk, Jk), this.renderTravellerLayer(Vk, "startX"), this.renderTravellerLayer(Jk, "endX"), (Ak || ek || yk || mk || dk) && this.renderText())
          }
        }], ak = [{
          key: "renderDefaultTraveller",
          value: function(kk) {
            var Fk = kk.x,
              Bk = kk.y,
              tk = kk.width,
              ak = kk.height,
              Xk = kk.stroke,
              bk = Math.floor(Bk + ak / 2) - 1;
            return Rk.createElement(Rk.Fragment, null, Rk.createElement("rect", {
              x: Fk,
              y: Bk,
              width: tk,
              height: ak,
              fill: Xk,
              stroke: "none"
            }), Rk.createElement("line", {
              x1: Fk + 1,
              y1: bk,
              x2: Fk + tk - 1,
              y2: bk,
              fill: "none",
              stroke: "#fff"
            }), Rk.createElement("line", {
              x1: Fk + 1,
              y1: bk + 2,
              x2: Fk + tk - 1,
              y2: bk + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(kk, Bk) {
            return Rk.isValidElement(kk) ? Rk.cloneElement(kk, Bk) : bk()(kk) ? kk(Bk) : Fk.renderDefaultTraveller(Bk)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(kk, Fk) {
            var Bk = kk.data,
              Rk = kk.width,
              tk = kk.x,
              ak = kk.travellerWidth,
              Xk = kk.updateId,
              bk = kk.startIndex,
              wk = kk.endIndex;
            if (Bk !== Fk.prevData || Xk !== Fk.prevUpdateId) return zk({
              prevData: Bk,
              prevTravellerWidth: ak,
              prevUpdateId: Xk,
              prevX: tk,
              prevWidth: Rk
            }, Bk && Bk.length ? function(kk) {
              var Fk = kk.data,
                Bk = kk.startIndex,
                Rk = kk.endIndex,
                tk = kk.x,
                ak = kk.width,
                Xk = kk.travellerWidth;
              if (!Fk || !Fk.length) return {};
              var bk = Fk.length,
                wk = (0, Sk.g)().domain(dk()(0, bk)).range([tk, tk + ak - Xk]),
                sk = wk.domain().map((function(kk) {
                  return wk(kk)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: wk(Bk),
                endX: wk(Rk),
                scale: wk,
                scaleValues: sk
              }
            }({
              data: Bk,
              width: Rk,
              x: tk,
              travellerWidth: ak,
              startIndex: bk,
              endIndex: wk
            }) : {
              scale: null,
              scaleValues: null
            });
            if (Fk.scale && (Rk !== Fk.prevWidth || tk !== Fk.prevX || ak !== Fk.prevTravellerWidth)) {
              Fk.scale.range([tk, tk + Rk - ak]);
              var sk = Fk.scale.domain().map((function(kk) {
                return Fk.scale(kk)
              }));
              return {
                prevData: Bk,
                prevTravellerWidth: ak,
                prevUpdateId: Xk,
                prevX: tk,
                prevWidth: Rk,
                startX: Fk.scale(kk.startIndex),
                endX: Fk.scale(kk.endIndex),
                scaleValues: sk
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(kk, Fk) {
            for (var Bk = 0, Rk = kk.length - 1; Rk - Bk > 1;) {
              var tk = Math.floor((Bk + Rk) / 2);
              kk[tk] > Fk ? Rk = tk : Bk = tk
            }
            return Fk >= kk[Rk] ? Rk : Bk
          }
        }], tk && Pk(Bk.prototype, tk), ak && Pk(Bk, ak), Object.defineProperty(Bk, "prototype", {
          writable: !1
        }), Bk;
        var Bk, tk, ak
      }(Rk.PureComponent);
    pk(jk, "displayName", "Brush"), pk(jk, "defaultProps", {
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
    var lk = Bk(5824),
      nk = Bk(5910),
      Ik = Bk(5921),
      Qk = Bk(5933),
      kF = Bk(5941),
      FF = Bk(5104);

    function BF() {
      return BF = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, BF.apply(this, arguments)
    }

    function RF(kk) {
      return RF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, RF(kk)
    }

    function tF(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function aF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? tF(Object(Bk), !0).forEach((function(Fk) {
          VF(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : tF(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function XF(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, JF(Rk.key), Rk)
      }
    }

    function bF(kk, Fk, Bk) {
      return Fk = dF(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === RF(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, wF() ? Reflect.construct(Fk, Bk || [], dF(kk).constructor) : Fk.apply(kk, Bk))
    }

    function wF() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (wF = function() {
        return !!kk
      })()
    }

    function dF(kk) {
      return dF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, dF(kk)
    }

    function sF(kk, Fk) {
      return sF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, sF(kk, Fk)
    }

    function VF(kk, Fk, Bk) {
      return (Fk = JF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function JF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != RF(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != RF(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == RF(Fk) ? Fk : Fk + ""
    }
    var AF = function(kk) {
      function Fk() {
        return function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk), bF(this, Fk, arguments)
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && sF(kk, Fk)
      }(Fk, kk), Bk = Fk, (tk = [{
        key: "render",
        value: function() {
          var kk = this.props,
            Bk = kk.x,
            tk = kk.y,
            ak = kk.r,
            Xk = kk.alwaysShow,
            bk = kk.clipPathId,
            wk = (0, uk.u)(Bk),
            dk = (0, uk.u)(tk);
          if ((0, FF.e)(void 0 === Xk, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !wk || !dk) return null;
          var sk = function(kk) {
            var Fk = kk.x,
              Bk = kk.y,
              Rk = kk.xAxis,
              tk = kk.yAxis,
              ak = (0, kF.e)({
                x: Rk.scale,
                y: tk.scale
              }),
              Xk = ak.apply({
                x: Fk,
                y: Bk
              }, {
                bandAware: !0
              });
            return (0, Qk.e)(kk, "discard") && !ak.isInRange(Xk) ? null : Xk
          }(this.props);
          if (!sk) return null;
          var Vk = sk.x,
            Jk = sk.y,
            Ak = this.props,
            ek = Ak.shape,
            yk = Ak.className,
            mk = aF(aF({
              clipPath: (0, Qk.e)(this.props, "hidden") ? "url(#".concat(bk, ")") : void 0
            }, (0, Ek.b)(this.props, !0)), {}, {
              cx: Vk,
              cy: Jk
            });
          return Rk.createElement(vk.b, {
            className: (0, fk.e)("recharts-reference-dot", yk)
          }, Fk.renderDot(ek, mk), Ik.d.renderCallByParent(this.props, {
            x: Vk - ak,
            y: Jk - ak,
            width: 2 * ak,
            height: 2 * ak
          }))
        }
      }]) && XF(Bk.prototype, tk), ak && XF(Bk, ak), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, tk, ak
    }(Rk.Component);
    VF(AF, "displayName", "ReferenceDot"), VF(AF, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), VF(AF, "renderDot", (function(kk, Fk) {
      return Rk.isValidElement(kk) ? Rk.cloneElement(kk, Fk) : bk()(kk) ? kk(Fk) : Rk.createElement(Lk.c, BF({}, Fk, {
        cx: Fk.cx,
        cy: Fk.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var eF = Bk(6027);

    function yF() {
      return yF = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, yF.apply(this, arguments)
    }

    function fF(kk) {
      return fF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, fF(kk)
    }

    function mF(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function WF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? mF(Object(Bk), !0).forEach((function(Fk) {
          OF(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : mF(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function vF(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, EF(Rk.key), Rk)
      }
    }

    function iF(kk, Fk, Bk) {
      return Fk = oF(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === fF(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, YF() ? Reflect.construct(Fk, Bk || [], oF(kk).constructor) : Fk.apply(kk, Bk))
    }

    function YF() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (YF = function() {
        return !!kk
      })()
    }

    function oF(kk) {
      return oF = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, oF(kk)
    }

    function LF(kk, Fk) {
      return LF = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, LF(kk, Fk)
    }

    function OF(kk, Fk, Bk) {
      return (Fk = EF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function EF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != fF(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != fF(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == fF(Fk) ? Fk : Fk + ""
    }
    var SF = function(kk) {
      function Fk() {
        return function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk), iF(this, Fk, arguments)
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && LF(kk, Fk)
      }(Fk, kk), Bk = Fk, (tk = [{
        key: "render",
        value: function() {
          var kk = this.props,
            Bk = kk.x1,
            tk = kk.x2,
            ak = kk.y1,
            Xk = kk.y2,
            bk = kk.className,
            wk = kk.alwaysShow,
            dk = kk.clipPathId;
          (0, FF.e)(void 0 === wk, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var sk = (0, uk.u)(Bk),
            Vk = (0, uk.u)(tk),
            Jk = (0, uk.u)(ak),
            Ak = (0, uk.u)(Xk),
            ek = this.props.shape;
          if (!sk && !Vk && !Jk && !Ak && !ek) return null;
          var yk = function(kk, Fk, Bk, Rk, tk) {
            var ak = tk.x1,
              Xk = tk.x2,
              bk = tk.y1,
              wk = tk.y2,
              dk = tk.xAxis,
              sk = tk.yAxis;
            if (!dk || !sk) return null;
            var Vk = (0, kF.e)({
                x: dk.scale,
                y: sk.scale
              }),
              Jk = {
                x: kk ? Vk.x.apply(ak, {
                  position: "start"
                }) : Vk.x.rangeMin,
                y: Bk ? Vk.y.apply(bk, {
                  position: "start"
                }) : Vk.y.rangeMin
              },
              Ak = {
                x: Fk ? Vk.x.apply(Xk, {
                  position: "end"
                }) : Vk.x.rangeMax,
                y: Rk ? Vk.y.apply(wk, {
                  position: "end"
                }) : Vk.y.rangeMax
              };
            return !(0, Qk.e)(tk, "discard") || Vk.isInRange(Jk) && Vk.isInRange(Ak) ? (0, kF.o)(Jk, Ak) : null
          }(sk, Vk, Jk, Ak, this.props);
          if (!yk && !ek) return null;
          var mk = (0, Qk.e)(this.props, "hidden") ? "url(#".concat(dk, ")") : void 0;
          return Rk.createElement(vk.b, {
            className: (0, fk.e)("recharts-reference-area", bk)
          }, Fk.renderRect(ek, WF(WF({
            clipPath: mk
          }, (0, Ek.b)(this.props, !0)), yk)), Ik.d.renderCallByParent(this.props, yk))
        }
      }]) && vF(Bk.prototype, tk), ak && vF(Bk, ak), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, tk, ak
    }(Rk.Component);

    function NF(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return HF(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return HF(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return HF(kk, Fk)
      }(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HF(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }
    OF(SF, "displayName", "ReferenceArea"), OF(SF, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), OF(SF, "renderRect", (function(kk, Fk) {
      return Rk.isValidElement(kk) ? Rk.cloneElement(kk, Fk) : bk()(kk) ? kk(Fk) : Rk.createElement(Ok.d, yF({}, Fk, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var uF = function(kk, Fk, Bk, Rk, tk) {
        var ak = (0, Ek.c)(kk, eF.d),
          Xk = (0, Ek.c)(kk, AF),
          bk = [].concat(NF(ak), NF(Xk)),
          wk = (0, Ek.c)(kk, SF),
          dk = "".concat(Rk, "Id"),
          sk = Rk[0],
          Vk = Fk;
        if (bk.length && (Vk = bk.reduce((function(kk, Fk) {
            if (Fk.props[dk] === Bk && (0, Qk.e)(Fk.props, "extendDomain") && (0, uk.y)(Fk.props[sk])) {
              var Rk = Fk.props[sk];
              return [Math.min(kk[0], Rk), Math.max(kk[1], Rk)]
            }
            return kk
          }), Vk)), wk.length) {
          var Jk = "".concat(sk, "1"),
            Ak = "".concat(sk, "2");
          Vk = wk.reduce((function(kk, Fk) {
            if (Fk.props[dk] === Bk && (0, Qk.e)(Fk.props, "extendDomain") && (0, uk.y)(Fk.props[Jk]) && (0, uk.y)(Fk.props[Ak])) {
              var Rk = Fk.props[Jk],
                tk = Fk.props[Ak];
              return [Math.min(kk[0], Rk, tk), Math.max(kk[1], Rk, tk)]
            }
            return kk
          }), Vk)
        }
        return tk && tk.length && (Vk = tk.reduce((function(kk, Fk) {
          return (0, uk.y)(Fk) ? [Math.min(kk[0], Fk), Math.max(kk[1], Fk)] : kk
        }), Vk)), Vk
      },
      MF = Bk(5925),
      gF = Bk(5123),
      UF = Bk(36),
      cF = new(Bk.n(UF)()),
      GF = "recharts.syncMouseEvents",
      TF = Bk(5125);

    function rF(kk) {
      return rF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, rF(kk)
    }

    function DF(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, PF(Rk.key), Rk)
      }
    }

    function zF(kk, Fk, Bk) {
      return (Fk = PF(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function PF(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != rF(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != rF(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == rF(Fk) ? Fk : Fk + ""
    }
    var hF = function() {
      return kk = function kk() {
        ! function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, kk), zF(this, "activeIndex", 0), zF(this, "coordinateList", []), zF(this, "layout", "horizontal")
      }, (Fk = [{
        key: "setDetails",
        value: function(kk) {
          var Fk, Bk = kk.coordinateList,
            Rk = void 0 === Bk ? null : Bk,
            tk = kk.container,
            ak = void 0 === tk ? null : tk,
            Xk = kk.layout,
            bk = void 0 === Xk ? null : Xk,
            wk = kk.offset,
            dk = void 0 === wk ? null : wk,
            sk = kk.mouseHandlerCallback,
            Vk = void 0 === sk ? null : sk;
          this.coordinateList = null !== (Fk = null !== Rk && void 0 !== Rk ? Rk : this.coordinateList) && void 0 !== Fk ? Fk : [], this.container = null !== ak && void 0 !== ak ? ak : this.container, this.layout = null !== bk && void 0 !== bk ? bk : this.layout, this.offset = null !== dk && void 0 !== dk ? dk : this.offset, this.mouseHandlerCallback = null !== Vk && void 0 !== Vk ? Vk : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(kk) {
          if (0 !== this.coordinateList.length) switch (kk.key) {
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
        value: function(kk) {
          this.activeIndex = kk
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var kk, Fk;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var Bk = this.container.getBoundingClientRect(),
              Rk = Bk.x,
              tk = Bk.y,
              ak = Bk.height,
              Xk = this.coordinateList[this.activeIndex].coordinate,
              bk = (null === (kk = window) || void 0 === kk ? void 0 : kk.scrollX) || 0,
              wk = (null === (Fk = window) || void 0 === Fk ? void 0 : Fk.scrollY) || 0,
              dk = Rk + Xk + bk,
              sk = tk + this.offset.top + ak / 2 + wk;
            this.mouseHandlerCallback({
              pageX: dk,
              pageY: sk
            })
          }
        }
      }]) && DF(kk.prototype, Fk), Bk && DF(kk, Bk), Object.defineProperty(kk, "prototype", {
        writable: !1
      }), kk;
      var kk, Fk, Bk
    }();
    var qF = Bk(5993),
      CF = Bk(6069);

    function ZF(kk) {
      return ZF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, ZF(kk)
    }
    var pF = ["x", "y", "top", "left", "width", "height", "className"];

    function KF() {
      return KF = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, KF.apply(this, arguments)
    }

    function xF(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function jF(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != ZF(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != ZF(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == ZF(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function lF(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }
    var nF = function(kk, Fk, Bk, Rk, tk, ak) {
        return "M".concat(kk, ",").concat(tk, "v").concat(Rk, "M").concat(ak, ",").concat(Fk, "h").concat(Bk)
      },
      IF = function(kk) {
        var Fk = kk.x,
          Bk = void 0 === Fk ? 0 : Fk,
          tk = kk.y,
          ak = void 0 === tk ? 0 : tk,
          Xk = kk.top,
          bk = void 0 === Xk ? 0 : Xk,
          wk = kk.left,
          dk = void 0 === wk ? 0 : wk,
          sk = kk.width,
          Vk = void 0 === sk ? 0 : sk,
          Jk = kk.height,
          Ak = void 0 === Jk ? 0 : Jk,
          ek = kk.className,
          yk = function(kk) {
            for (var Fk = 1; Fk < arguments.length; Fk++) {
              var Bk = null != arguments[Fk] ? arguments[Fk] : {};
              Fk % 2 ? xF(Object(Bk), !0).forEach((function(Fk) {
                jF(kk, Fk, Bk[Fk])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : xF(Object(Bk)).forEach((function(Fk) {
                Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
              }))
            }
            return kk
          }({
            x: Bk,
            y: ak,
            top: bk,
            left: dk,
            width: Vk,
            height: Ak
          }, lF(kk, pF));
        return (0, uk.y)(Bk) && (0, uk.y)(ak) && (0, uk.y)(Vk) && (0, uk.y)(Ak) && (0, uk.y)(bk) && (0, uk.y)(dk) ? Rk.createElement("path", KF({}, (0, Ek.b)(yk, !0), {
          className: (0, fk.e)("recharts-cross", ek),
          d: nF(Bk, ak, Vk, Ak, bk, dk)
        })) : null
      };

    function QF(kk) {
      var Fk = kk.cx,
        Bk = kk.cy,
        Rk = kk.radius,
        tk = kk.startAngle,
        ak = kk.endAngle;
      return {
        points: [(0, MF.h)(Fk, Bk, Rk, tk), (0, MF.h)(Fk, Bk, Rk, ak)],
        cx: Fk,
        cy: Bk,
        radius: Rk,
        startAngle: tk,
        endAngle: ak
      }
    }
    var kB = Bk(6021);

    function FB(kk, Fk, Bk) {
      var Rk, tk, ak, Xk;
      if ("horizontal" === kk) ak = Rk = Fk.x, tk = Bk.top, Xk = Bk.top + Bk.height;
      else if ("vertical" === kk) Xk = tk = Fk.y, Rk = Bk.left, ak = Bk.left + Bk.width;
      else if (null != Fk.cx && null != Fk.cy) {
        if ("centric" !== kk) return QF(Fk);
        var bk = Fk.cx,
          wk = Fk.cy,
          dk = Fk.innerRadius,
          sk = Fk.outerRadius,
          Vk = Fk.angle,
          Jk = (0, MF.h)(bk, wk, dk, Vk),
          Ak = (0, MF.h)(bk, wk, sk, Vk);
        Rk = Jk.x, tk = Jk.y, ak = Ak.x, Xk = Ak.y
      }
      return [{
        x: Rk,
        y: tk
      }, {
        x: ak,
        y: Xk
      }]
    }

    function BB(kk) {
      return BB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, BB(kk)
    }

    function RB(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function tB(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? RB(Object(Bk), !0).forEach((function(Fk) {
          aB(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : RB(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function aB(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != BB(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != BB(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == BB(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function XB(kk) {
      var Fk, Bk, tk, ak = kk.element,
        Xk = kk.tooltipEventType,
        bk = kk.isActive,
        wk = kk.activeCoordinate,
        dk = kk.activePayload,
        sk = kk.offset,
        Vk = kk.activeTooltipIndex,
        Jk = kk.tooltipAxisBandSize,
        Ak = kk.layout,
        ek = kk.chartName,
        yk = null !== (Fk = ak.props.cursor) && void 0 !== Fk ? Fk : null === (Bk = ak.type.defaultProps) || void 0 === Bk ? void 0 : Bk.cursor;
      if (!ak || !yk || !bk || !wk || "ScatterChart" !== ek && "axis" !== Xk) return null;
      var mk = CF.b;
      if ("ScatterChart" === ek) tk = wk, mk = IF;
      else if ("BarChart" === ek) tk = function(kk, Fk, Bk, Rk) {
        var tk = Rk / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === kk ? Fk.x - tk : Bk.left + .5,
          y: "horizontal" === kk ? Bk.top + .5 : Fk.y - tk,
          width: "horizontal" === kk ? Rk : Bk.width - 1,
          height: "horizontal" === kk ? Bk.height - 1 : Rk
        }
      }(Ak, wk, sk, Jk), mk = Ok.d;
      else if ("radial" === Ak) {
        var Wk = QF(wk),
          vk = Wk.cx,
          ik = Wk.cy,
          Yk = Wk.radius;
        tk = {
          cx: vk,
          cy: ik,
          startAngle: Wk.startAngle,
          endAngle: Wk.endAngle,
          innerRadius: Yk,
          outerRadius: Yk
        }, mk = kB.d
      } else tk = {
        points: FB(Ak, wk, sk)
      }, mk = CF.b;
      var Lk = tB(tB(tB(tB({
        stroke: "#ccc",
        pointerEvents: "none"
      }, sk), tk), (0, Ek.b)(yk, !1)), {}, {
        payload: dk,
        payloadIndex: Vk,
        className: (0, fk.e)("recharts-tooltip-cursor", yk.className)
      });
      return (0, Rk.isValidElement)(yk) ? (0, Rk.cloneElement)(yk, Lk) : (0, Rk.createElement)(mk, Lk)
    }
    var bB = Bk(6043),
      wB = ["item"],
      dB = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function sB(kk) {
      return sB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, sB(kk)
    }

    function VB() {
      return VB = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, VB.apply(this, arguments)
    }

    function JB(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || iB(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AB(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function eB(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, EB(Rk.key), Rk)
      }
    }

    function yB(kk, Fk, Bk) {
      return Fk = mB(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === sB(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, fB() ? Reflect.construct(Fk, Bk || [], mB(kk).constructor) : Fk.apply(kk, Bk))
    }

    function fB() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (fB = function() {
        return !!kk
      })()
    }

    function mB(kk) {
      return mB = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, mB(kk)
    }

    function WB(kk, Fk) {
      return WB = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, WB(kk, Fk)
    }

    function vB(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return YB(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || iB(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iB(kk, Fk) {
      if (kk) {
        if ("string" === typeof kk) return YB(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === Bk && kk.constructor && (Bk = kk.constructor.name), "Map" === Bk || "Set" === Bk ? Array.from(kk) : "Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk) ? YB(kk, Fk) : void 0
      }
    }

    function YB(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function oB(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function LB(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? oB(Object(Bk), !0).forEach((function(Fk) {
          OB(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : oB(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function OB(kk, Fk, Bk) {
      return (Fk = EB(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function EB(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != sB(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != sB(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == sB(Fk) ? Fk : Fk + ""
    }
    var SB = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      NB = {
        width: "100%",
        height: "100%"
      },
      HB = {
        x: 0,
        y: 0
      };

    function uB(kk) {
      return kk
    }
    var MB = function(kk, Fk) {
      var Bk = Fk.graphicalItems,
        Rk = Fk.dataStartIndex,
        tk = Fk.dataEndIndex,
        ak = (null !== Bk && void 0 !== Bk ? Bk : []).reduce((function(kk, Fk) {
          var Bk = Fk.props.data;
          return Bk && Bk.length ? [].concat(vB(kk), vB(Bk)) : kk
        }), []);
      return ak.length > 0 ? ak : kk && kk.length && (0, uk.y)(Rk) && (0, uk.y)(tk) ? kk.slice(Rk, tk + 1) : []
    };

    function gB(kk) {
      return "number" === kk ? [0, "auto"] : void 0
    }
    var UB = function(kk, Fk, Bk, Rk) {
        var tk = kk.graphicalItems,
          ak = kk.tooltipAxis,
          Xk = MB(Fk, kk);
        return Bk < 0 || !tk || !tk.length || Bk >= Xk.length ? null : tk.reduce((function(tk, bk) {
          var wk, dk, sk = null !== (wk = bk.props.data) && void 0 !== wk ? wk : Fk;
          if (sk && kk.dataStartIndex + kk.dataEndIndex !== 0 && kk.dataEndIndex - kk.dataStartIndex >= Bk && (sk = sk.slice(kk.dataStartIndex, kk.dataEndIndex + 1)), ak.dataKey && !ak.allowDuplicatedCategory) {
            var Vk = void 0 === sk ? Xk : sk;
            dk = (0, uk.e)(Vk, ak.dataKey, Rk)
          } else dk = sk && sk[Bk] || Xk[Bk];
          return dk ? [].concat(vB(tk), [(0, Hk.Z)(bk, dk)]) : tk
        }), [])
      },
      cB = function(kk, Fk, Bk, Rk) {
        var tk = Rk || {
            x: kk.chartX,
            y: kk.chartY
          },
          ak = function(kk, Fk) {
            return "horizontal" === Fk ? kk.x : "vertical" === Fk ? kk.y : "centric" === Fk ? kk.angle : kk.radius
          }(tk, Bk),
          Xk = kk.orderedTooltipTicks,
          bk = kk.tooltipAxis,
          wk = kk.tooltipTicks,
          dk = (0, Hk.d)(ak, Xk, wk, bk);
        if (dk >= 0 && wk) {
          var sk = wk[dk] && wk[dk].value,
            Vk = UB(kk, Fk, dk, sk),
            Jk = function(kk, Fk, Bk, Rk) {
              var tk = Fk.find((function(kk) {
                return kk && kk.index === Bk
              }));
              if (tk) {
                if ("horizontal" === kk) return {
                  x: tk.coordinate,
                  y: Rk.y
                };
                if ("vertical" === kk) return {
                  x: Rk.x,
                  y: tk.coordinate
                };
                if ("centric" === kk) {
                  var ak = tk.coordinate,
                    Xk = Rk.radius;
                  return LB(LB(LB({}, Rk), (0, MF.h)(Rk.cx, Rk.cy, Xk, ak)), {}, {
                    angle: ak,
                    radius: Xk
                  })
                }
                var bk = tk.coordinate,
                  wk = Rk.angle;
                return LB(LB(LB({}, Rk), (0, MF.h)(Rk.cx, Rk.cy, bk, wk)), {}, {
                  angle: wk,
                  radius: bk
                })
              }
              return HB
            }(Bk, Xk, dk, tk);
          return {
            activeTooltipIndex: dk,
            activeLabel: sk,
            activePayload: Vk,
            activeCoordinate: Jk
          }
        }
        return null
      },
      GB = function(kk, Fk) {
        var Bk = Fk.axes,
          Rk = Fk.graphicalItems,
          tk = Fk.axisType,
          Xk = Fk.axisIdKey,
          bk = Fk.stackGroups,
          wk = Fk.dataStartIndex,
          sk = Fk.dataEndIndex,
          Vk = kk.layout,
          Jk = kk.children,
          Ak = kk.stackOffset,
          ek = (0, Hk.ab)(Vk, tk);
        return Bk.reduce((function(Fk, Bk) {
          var yk, fk = void 0 !== Bk.type.defaultProps ? LB(LB({}, Bk.type.defaultProps), Bk.props) : Bk.props,
            mk = fk.type,
            Wk = fk.dataKey,
            vk = fk.allowDataOverflow,
            ik = fk.allowDuplicatedCategory,
            Yk = fk.scale,
            Lk = fk.ticks,
            Ok = fk.includeHidden,
            Ek = fk[Xk];
          if (Fk[Ek]) return Fk;
          var Sk, Nk, Mk, gk = MB(kk.data, {
              graphicalItems: Rk.filter((function(kk) {
                var Fk;
                return (Xk in kk.props ? kk.props[Xk] : null === (Fk = kk.type.defaultProps) || void 0 === Fk ? void 0 : Fk[Xk]) === Ek
              })),
              dataStartIndex: wk,
              dataEndIndex: sk
            }),
            Uk = gk.length;
          (function(kk, Fk, Bk) {
            if ("number" === Bk && !0 === Fk && Array.isArray(kk)) {
              var Rk = null === kk || void 0 === kk ? void 0 : kk[0],
                tk = null === kk || void 0 === kk ? void 0 : kk[1];
              if (Rk && tk && (0, uk.y)(Rk) && (0, uk.y)(tk)) return !0
            }
            return !1
          })(fk.domain, vk, mk) && (Sk = (0, Hk.hb)(fk.domain, null, vk), !ek || "number" !== mk && "auto" === Yk || (Mk = (0, Hk.D)(gk, Wk, "category")));
          var ck = gB(mk);
          if (!Sk || 0 === Sk.length) {
            var Gk, Tk = null !== (Gk = fk.domain) && void 0 !== Gk ? Gk : ck;
            if (Wk) {
              if (Sk = (0, Hk.D)(gk, Wk, mk), "category" === mk && ek) {
                var rk = (0, uk.l)(Sk);
                ik && rk ? (Nk = Sk, Sk = dk()(0, Uk)) : ik || (Sk = (0, Hk.bb)(Tk, Sk, Bk).reduce((function(kk, Fk) {
                  return kk.indexOf(Fk) >= 0 ? kk : [].concat(vB(kk), [Fk])
                }), []))
              } else if ("category" === mk) Sk = ik ? Sk.filter((function(kk) {
                return "" !== kk && !ak()(kk)
              })) : (0, Hk.bb)(Tk, Sk, Bk).reduce((function(kk, Fk) {
                return kk.indexOf(Fk) >= 0 || "" === Fk || ak()(Fk) ? kk : [].concat(vB(kk), [Fk])
              }), []);
              else if ("number" === mk) {
                var Dk = (0, Hk.db)(gk, Rk.filter((function(kk) {
                  var Fk, Bk, Rk = Xk in kk.props ? kk.props[Xk] : null === (Fk = kk.type.defaultProps) || void 0 === Fk ? void 0 : Fk[Xk],
                    tk = "hide" in kk.props ? kk.props.hide : null === (Bk = kk.type.defaultProps) || void 0 === Bk ? void 0 : Bk.hide;
                  return Rk === Ek && (Ok || !tk)
                })), Wk, tk, Vk);
                Dk && (Sk = Dk)
              }!ek || "number" !== mk && "auto" === Yk || (Mk = (0, Hk.D)(gk, Wk, "category"))
            } else Sk = ek ? dk()(0, Uk) : bk && bk[Ek] && bk[Ek].hasStack && "number" === mk ? "expand" === Ak ? [0, 1] : (0, Hk.H)(bk[Ek].stackGroups, wk, sk) : (0, Hk.G)(gk, Rk.filter((function(kk) {
              var Fk = Xk in kk.props ? kk.props[Xk] : kk.type.defaultProps[Xk],
                Bk = "hide" in kk.props ? kk.props.hide : kk.type.defaultProps.hide;
              return Fk === Ek && (Ok || !Bk)
            })), mk, Vk, !0);
            if ("number" === mk) Sk = uF(Jk, Sk, Ek, tk, Lk), Tk && (Sk = (0, Hk.hb)(Tk, Sk, vk));
            else if ("category" === mk && Tk) {
              var zk = Tk;
              Sk.every((function(kk) {
                return zk.indexOf(kk) >= 0
              })) && (Sk = zk)
            }
          }
          return LB(LB({}, Fk), {}, OB({}, Ek, LB(LB({}, fk), {}, {
            axisType: tk,
            domain: Sk,
            categoricalDomain: Mk,
            duplicateDomain: Nk,
            originalDomain: null !== (yk = fk.domain) && void 0 !== yk ? yk : ck,
            isCategorical: ek,
            layout: Vk
          })))
        }), {})
      },
      TB = function(kk, Fk) {
        var Bk = Fk.axisType,
          Rk = void 0 === Bk ? "xAxis" : Bk,
          tk = Fk.AxisComp,
          ak = Fk.graphicalItems,
          Xk = Fk.stackGroups,
          bk = Fk.dataStartIndex,
          wk = Fk.dataEndIndex,
          sk = kk.children,
          Jk = "".concat(Rk, "Id"),
          Ak = (0, Ek.c)(sk, tk),
          ek = {};
        return Ak && Ak.length ? ek = GB(kk, {
          axes: Ak,
          graphicalItems: ak,
          axisType: Rk,
          axisIdKey: Jk,
          stackGroups: Xk,
          dataStartIndex: bk,
          dataEndIndex: wk
        }) : ak && ak.length && (ek = function(kk, Fk) {
          var Bk = Fk.graphicalItems,
            Rk = Fk.Axis,
            tk = Fk.axisType,
            ak = Fk.axisIdKey,
            Xk = Fk.stackGroups,
            bk = Fk.dataStartIndex,
            wk = Fk.dataEndIndex,
            sk = kk.layout,
            Jk = kk.children,
            Ak = MB(kk.data, {
              graphicalItems: Bk,
              dataStartIndex: bk,
              dataEndIndex: wk
            }),
            ek = Ak.length,
            yk = (0, Hk.ab)(sk, tk),
            fk = -1;
          return Bk.reduce((function(kk, Fk) {
            var mk, Wk = (void 0 !== Fk.type.defaultProps ? LB(LB({}, Fk.type.defaultProps), Fk.props) : Fk.props)[ak],
              vk = gB("number");
            return kk[Wk] ? kk : (fk++, yk ? mk = dk()(0, ek) : Xk && Xk[Wk] && Xk[Wk].hasStack ? (mk = (0, Hk.H)(Xk[Wk].stackGroups, bk, wk), mk = uF(Jk, mk, Wk, tk)) : (mk = (0, Hk.hb)(vk, (0, Hk.G)(Ak, Bk.filter((function(kk) {
              var Fk, Bk, Rk = ak in kk.props ? kk.props[ak] : null === (Fk = kk.type.defaultProps) || void 0 === Fk ? void 0 : Fk[ak],
                tk = "hide" in kk.props ? kk.props.hide : null === (Bk = kk.type.defaultProps) || void 0 === Bk ? void 0 : Bk.hide;
              return Rk === Wk && !tk
            })), "number", sk), Rk.defaultProps.allowDataOverflow), mk = uF(Jk, mk, Wk, tk)), LB(LB({}, kk), {}, OB({}, Wk, LB(LB({
              axisType: tk
            }, Rk.defaultProps), {}, {
              hide: !0,
              orientation: Vk()(SB, "".concat(tk, ".").concat(fk % 2), null),
              domain: mk,
              originalDomain: vk,
              isCategorical: yk,
              layout: sk
            }))))
          }), {})
        }(kk, {
          Axis: tk,
          graphicalItems: ak,
          axisType: Rk,
          axisIdKey: Jk,
          stackGroups: Xk,
          dataStartIndex: bk,
          dataEndIndex: wk
        })), ek
      },
      rB = function(kk) {
        var Fk = kk.children,
          Bk = kk.defaultShowTooltip,
          Rk = (0, Ek.d)(Fk, jk),
          tk = 0,
          ak = 0;
        return kk.data && 0 !== kk.data.length && (ak = kk.data.length - 1), Rk && Rk.props && (Rk.props.startIndex >= 0 && (tk = Rk.props.startIndex), Rk.props.endIndex >= 0 && (ak = Rk.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: tk,
          dataEndIndex: ak,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(Bk)
        }
      },
      DB = function(kk) {
        return "horizontal" === kk ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === kk ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === kk ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      zB = function(kk, Fk) {
        return "xAxis" === Fk ? kk[Fk].width : "yAxis" === Fk ? kk[Fk].height : void 0
      },
      PB = function(kk) {
        var Fk = kk.chartName,
          Bk = kk.GraphicalChild,
          tk = kk.defaultTooltipEventType,
          Xk = void 0 === tk ? "axis" : tk,
          wk = kk.validateTooltipEventTypes,
          dk = void 0 === wk ? ["axis"] : wk,
          sk = kk.axisComponents,
          Jk = kk.legendContent,
          ek = kk.formatAxisMap,
          Sk = kk.defaultProps,
          Nk = function(kk, Fk) {
            var Bk = Fk.graphicalItems,
              Rk = Fk.stackGroups,
              tk = Fk.offset,
              Xk = Fk.updateId,
              bk = Fk.dataStartIndex,
              wk = Fk.dataEndIndex,
              dk = kk.barSize,
              Vk = kk.layout,
              Jk = kk.barGap,
              Ak = kk.barCategoryGap,
              ek = kk.maxBarSize,
              yk = DB(Vk),
              fk = yk.numericAxisName,
              Wk = yk.cateAxisName,
              vk = function(kk) {
                return !(!kk || !kk.length) && kk.some((function(kk) {
                  var Fk = (0, Ek.e)(kk && kk.type);
                  return Fk && Fk.indexOf("Bar") >= 0
                }))
              }(Bk),
              ik = [];
            return Bk.forEach((function(Bk, yk) {
              var Yk = MB(kk.data, {
                  graphicalItems: [Bk],
                  dataStartIndex: bk,
                  dataEndIndex: wk
                }),
                Lk = void 0 !== Bk.type.defaultProps ? LB(LB({}, Bk.type.defaultProps), Bk.props) : Bk.props,
                Ok = Lk.dataKey,
                Sk = Lk.maxBarSize,
                Nk = Lk["".concat(fk, "Id")],
                uk = Lk["".concat(Wk, "Id")],
                Mk = sk.reduce((function(kk, Bk) {
                  var Rk = Fk["".concat(Bk.axisType, "Map")],
                    tk = Lk["".concat(Bk.axisType, "Id")];
                  Rk && Rk[tk] || "zAxis" === Bk.axisType || (0, mk.b)(!1);
                  var ak = Rk[tk];
                  return LB(LB({}, kk), {}, OB(OB({}, Bk.axisType, ak), "".concat(Bk.axisType, "Ticks"), (0, Hk.T)(ak)))
                }), {}),
                gk = Mk[Wk],
                Uk = Mk["".concat(Wk, "Ticks")],
                ck = Rk && Rk[Nk] && Rk[Nk].hasStack && (0, Hk.Q)(Bk, Rk[Nk].stackGroups),
                Gk = (0, Ek.e)(Bk.type).indexOf("Bar") >= 0,
                Tk = (0, Hk.i)(gk, Uk),
                rk = [],
                Dk = vk && (0, Hk.m)({
                  barSize: dk,
                  stackGroups: Rk,
                  totalSize: zB(Mk, Wk)
                });
              if (Gk) {
                var zk, Pk, hk = ak()(Sk) ? ek : Sk,
                  qk = null !== (zk = null !== (Pk = (0, Hk.i)(gk, Uk, !0)) && void 0 !== Pk ? Pk : hk) && void 0 !== zk ? zk : 0;
                rk = (0, Hk.l)({
                  barGap: Jk,
                  barCategoryGap: Ak,
                  bandSize: qk !== Tk ? qk : Tk,
                  sizeList: Dk[uk],
                  maxBarSize: hk
                }), qk !== Tk && (rk = rk.map((function(kk) {
                  return LB(LB({}, kk), {}, {
                    position: LB(LB({}, kk.position), {}, {
                      offset: kk.position.offset - qk / 2
                    })
                  })
                })))
              }
              var Ck = Bk && Bk.type && Bk.type.getComposedData;
              Ck && ik.push({
                props: LB(LB({}, Ck(LB(LB({}, Mk), {}, {
                  displayedData: Yk,
                  props: kk,
                  dataKey: Ok,
                  item: Bk,
                  bandSize: Tk,
                  barPosition: rk,
                  offset: tk,
                  stackedData: ck,
                  layout: Vk,
                  dataStartIndex: bk,
                  dataEndIndex: wk
                }))), {}, OB(OB(OB({
                  key: Bk.key || "item-".concat(yk)
                }, fk, Mk[fk]), Wk, Mk[Wk]), "animationId", Xk)),
                childIndex: (0, Ek.n)(Bk, kk.children),
                item: Bk
              })
            })), ik
          },
          Mk = function(kk, Rk) {
            var tk = kk.props,
              ak = kk.dataStartIndex,
              Xk = kk.dataEndIndex,
              bk = kk.updateId;
            if (!(0, Ek.t)({
                props: tk
              })) return null;
            var wk = tk.children,
              dk = tk.layout,
              Jk = tk.stackOffset,
              yk = tk.data,
              fk = tk.reverseStackOrder,
              mk = DB(dk),
              Wk = mk.numericAxisName,
              vk = mk.cateAxisName,
              ik = (0, Ek.c)(wk, Bk),
              Lk = (0, Hk.N)(yk, ik, "".concat(Wk, "Id"), "".concat(vk, "Id"), Jk, fk),
              Ok = sk.reduce((function(kk, Fk) {
                var Bk = "".concat(Fk.axisType, "Map");
                return LB(LB({}, kk), {}, OB({}, Bk, TB(tk, LB(LB({}, Fk), {}, {
                  graphicalItems: ik,
                  stackGroups: Fk.axisType === Wk && Lk,
                  dataStartIndex: ak,
                  dataEndIndex: Xk
                }))))
              }), {}),
              Sk = function(kk, Fk) {
                var Bk = kk.props,
                  Rk = kk.graphicalItems,
                  tk = kk.xAxisMap,
                  ak = void 0 === tk ? {} : tk,
                  Xk = kk.yAxisMap,
                  bk = void 0 === Xk ? {} : Xk,
                  wk = Bk.width,
                  dk = Bk.height,
                  sk = Bk.children,
                  Jk = Bk.margin || {},
                  Ak = (0, Ek.d)(sk, jk),
                  ek = (0, Ek.d)(sk, Yk.e),
                  yk = Object.keys(bk).reduce((function(kk, Fk) {
                    var Bk = bk[Fk],
                      Rk = Bk.orientation;
                    return Bk.mirror || Bk.hide ? kk : LB(LB({}, kk), {}, OB({}, Rk, kk[Rk] + Bk.width))
                  }), {
                    left: Jk.left || 0,
                    right: Jk.right || 0
                  }),
                  fk = Object.keys(ak).reduce((function(kk, Fk) {
                    var Bk = ak[Fk],
                      Rk = Bk.orientation;
                    return Bk.mirror || Bk.hide ? kk : LB(LB({}, kk), {}, OB({}, Rk, Vk()(kk, "".concat(Rk)) + Bk.height))
                  }), {
                    top: Jk.top || 0,
                    bottom: Jk.bottom || 0
                  }),
                  mk = LB(LB({}, fk), yk),
                  Wk = mk.bottom;
                Ak && (mk.bottom += Ak.props.height || jk.defaultProps.height), ek && Fk && (mk = (0, Hk.c)(mk, Rk, Bk, Fk));
                var vk = wk - mk.left - mk.right,
                  ik = dk - mk.top - mk.bottom;
                return LB(LB({
                  brushBottom: Wk
                }, mk), {}, {
                  width: Math.max(vk, 0),
                  height: Math.max(ik, 0)
                })
              }(LB(LB({}, Ok), {}, {
                props: tk,
                graphicalItems: ik
              }), null === Rk || void 0 === Rk ? void 0 : Rk.legendBBox);
            Object.keys(Ok).forEach((function(kk) {
              Ok[kk] = ek(tk, Ok[kk], Sk, kk.replace("Map", ""), Fk)
            }));
            var Mk = function(kk) {
                var Fk = (0, uk.i)(kk),
                  Bk = (0, Hk.T)(Fk, !1, !0);
                return {
                  tooltipTicks: Bk,
                  orderedTooltipTicks: Ak()(Bk, (function(kk) {
                    return kk.coordinate
                  })),
                  tooltipAxis: Fk,
                  tooltipAxisBandSize: (0, Hk.i)(Fk, Bk)
                }
              }(Ok["".concat(vk, "Map")]),
              gk = Nk(tk, LB(LB({}, Ok), {}, {
                dataStartIndex: ak,
                dataEndIndex: Xk,
                updateId: bk,
                graphicalItems: ik,
                stackGroups: Lk,
                offset: Sk
              }));
            return LB(LB({
              formattedGraphicalItems: gk,
              graphicalItems: ik,
              offset: Sk,
              stackGroups: Lk
            }, Mk), Ok)
          },
          gk = function(kk) {
            function Bk(kk) {
              var tk, Xk, wk;
              return function(kk, Fk) {
                if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
              }(this, Bk), OB(wk = yB(this, Bk, [kk]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), OB(wk, "accessibilityManager", new hF), OB(wk, "handleLegendBBoxUpdate", (function(kk) {
                if (kk) {
                  var Fk = wk.state,
                    Bk = Fk.dataStartIndex,
                    Rk = Fk.dataEndIndex,
                    tk = Fk.updateId;
                  wk.setState(LB({
                    legendBBox: kk
                  }, Mk({
                    props: wk.props,
                    dataStartIndex: Bk,
                    dataEndIndex: Rk,
                    updateId: tk
                  }, LB(LB({}, wk.state), {}, {
                    legendBBox: kk
                  }))))
                }
              })), OB(wk, "handleReceiveSyncEvent", (function(kk, Fk, Bk) {
                if (wk.props.syncId === kk) {
                  if (Bk === wk.eventEmitterSymbol && "function" !== typeof wk.props.syncMethod) return;
                  wk.applySyncEvent(Fk)
                }
              })), OB(wk, "handleBrushChange", (function(kk) {
                var Fk = kk.startIndex,
                  Bk = kk.endIndex;
                if (Fk !== wk.state.dataStartIndex || Bk !== wk.state.dataEndIndex) {
                  var Rk = wk.state.updateId;
                  wk.setState((function() {
                    return LB({
                      dataStartIndex: Fk,
                      dataEndIndex: Bk
                    }, Mk({
                      props: wk.props,
                      dataStartIndex: Fk,
                      dataEndIndex: Bk,
                      updateId: Rk
                    }, wk.state))
                  })), wk.triggerSyncEvent({
                    dataStartIndex: Fk,
                    dataEndIndex: Bk
                  })
                }
              })), OB(wk, "handleMouseEnter", (function(kk) {
                var Fk = wk.getMouseInfo(kk);
                if (Fk) {
                  var Bk = LB(LB({}, Fk), {}, {
                    isTooltipActive: !0
                  });
                  wk.setState(Bk), wk.triggerSyncEvent(Bk);
                  var Rk = wk.props.onMouseEnter;
                  bk()(Rk) && Rk(Bk, kk)
                }
              })), OB(wk, "triggeredAfterMouseMove", (function(kk) {
                var Fk = wk.getMouseInfo(kk),
                  Bk = Fk ? LB(LB({}, Fk), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                wk.setState(Bk), wk.triggerSyncEvent(Bk);
                var Rk = wk.props.onMouseMove;
                bk()(Rk) && Rk(Bk, kk)
              })), OB(wk, "handleItemMouseEnter", (function(kk) {
                wk.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: kk,
                    activePayload: kk.tooltipPayload,
                    activeCoordinate: kk.tooltipPosition || {
                      x: kk.cx,
                      y: kk.cy
                    }
                  }
                }))
              })), OB(wk, "handleItemMouseLeave", (function() {
                wk.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), OB(wk, "handleMouseMove", (function(kk) {
                kk.persist(), wk.throttleTriggeredAfterMouseMove(kk)
              })), OB(wk, "handleMouseLeave", (function(kk) {
                wk.throttleTriggeredAfterMouseMove.cancel();
                var Fk = {
                  isTooltipActive: !1
                };
                wk.setState(Fk), wk.triggerSyncEvent(Fk);
                var Bk = wk.props.onMouseLeave;
                bk()(Bk) && Bk(Fk, kk)
              })), OB(wk, "handleOuterEvent", (function(kk) {
                var Fk, Bk = (0, Ek.i)(kk),
                  Rk = Vk()(wk.props, "".concat(Bk));
                Bk && bk()(Rk) && Rk(null !== (Fk = /.*touch.*/i.test(Bk) ? wk.getMouseInfo(kk.changedTouches[0]) : wk.getMouseInfo(kk)) && void 0 !== Fk ? Fk : {}, kk)
              })), OB(wk, "handleClick", (function(kk) {
                var Fk = wk.getMouseInfo(kk);
                if (Fk) {
                  var Bk = LB(LB({}, Fk), {}, {
                    isTooltipActive: !0
                  });
                  wk.setState(Bk), wk.triggerSyncEvent(Bk);
                  var Rk = wk.props.onClick;
                  bk()(Rk) && Rk(Bk, kk)
                }
              })), OB(wk, "handleMouseDown", (function(kk) {
                var Fk = wk.props.onMouseDown;
                bk()(Fk) && Fk(wk.getMouseInfo(kk), kk)
              })), OB(wk, "handleMouseUp", (function(kk) {
                var Fk = wk.props.onMouseUp;
                bk()(Fk) && Fk(wk.getMouseInfo(kk), kk)
              })), OB(wk, "handleTouchMove", (function(kk) {
                null != kk.changedTouches && kk.changedTouches.length > 0 && wk.throttleTriggeredAfterMouseMove(kk.changedTouches[0])
              })), OB(wk, "handleTouchStart", (function(kk) {
                null != kk.changedTouches && kk.changedTouches.length > 0 && wk.handleMouseDown(kk.changedTouches[0])
              })), OB(wk, "handleTouchEnd", (function(kk) {
                null != kk.changedTouches && kk.changedTouches.length > 0 && wk.handleMouseUp(kk.changedTouches[0])
              })), OB(wk, "handleDoubleClick", (function(kk) {
                var Fk = wk.props.onDoubleClick;
                bk()(Fk) && Fk(wk.getMouseInfo(kk), kk)
              })), OB(wk, "handleContextMenu", (function(kk) {
                var Fk = wk.props.onContextMenu;
                bk()(Fk) && Fk(wk.getMouseInfo(kk), kk)
              })), OB(wk, "triggerSyncEvent", (function(kk) {
                void 0 !== wk.props.syncId && cF.emit(GF, wk.props.syncId, kk, wk.eventEmitterSymbol)
              })), OB(wk, "applySyncEvent", (function(kk) {
                var Fk = wk.props,
                  Bk = Fk.layout,
                  Rk = Fk.syncMethod,
                  tk = wk.state.updateId,
                  ak = kk.dataStartIndex,
                  Xk = kk.dataEndIndex;
                if (void 0 !== kk.dataStartIndex || void 0 !== kk.dataEndIndex) wk.setState(LB({
                  dataStartIndex: ak,
                  dataEndIndex: Xk
                }, Mk({
                  props: wk.props,
                  dataStartIndex: ak,
                  dataEndIndex: Xk,
                  updateId: tk
                }, wk.state)));
                else if (void 0 !== kk.activeTooltipIndex) {
                  var bk = kk.chartX,
                    dk = kk.chartY,
                    sk = kk.activeTooltipIndex,
                    Vk = wk.state,
                    Jk = Vk.offset,
                    Ak = Vk.tooltipTicks;
                  if (!Jk) return;
                  if ("function" === typeof Rk) sk = Rk(Ak, kk);
                  else if ("value" === Rk) {
                    sk = -1;
                    for (var ek = 0; ek < Ak.length; ek++)
                      if (Ak[ek].value === kk.activeLabel) {
                        sk = ek;
                        break
                      }
                  }
                  var yk = LB(LB({}, Jk), {}, {
                      x: Jk.left,
                      y: Jk.top
                    }),
                    fk = Math.min(bk, yk.x + yk.width),
                    mk = Math.min(dk, yk.y + yk.height),
                    Wk = Ak[sk] && Ak[sk].value,
                    vk = UB(wk.state, wk.props.data, sk),
                    ik = Ak[sk] ? {
                      x: "horizontal" === Bk ? Ak[sk].coordinate : fk,
                      y: "horizontal" === Bk ? mk : Ak[sk].coordinate
                    } : HB;
                  wk.setState(LB(LB({}, kk), {}, {
                    activeLabel: Wk,
                    activeCoordinate: ik,
                    activePayload: vk,
                    activeTooltipIndex: sk
                  }))
                } else wk.setState(kk)
              })), OB(wk, "renderCursor", (function(kk) {
                var Bk, tk = wk.state,
                  ak = tk.isTooltipActive,
                  Xk = tk.activeCoordinate,
                  bk = tk.activePayload,
                  dk = tk.offset,
                  sk = tk.activeTooltipIndex,
                  Vk = tk.tooltipAxisBandSize,
                  Jk = wk.getTooltipEventType(),
                  Ak = null !== (Bk = kk.props.active) && void 0 !== Bk ? Bk : ak,
                  ek = wk.props.layout,
                  yk = kk.key || "_recharts-cursor";
                return Rk.createElement(XB, {
                  key: yk,
                  activeCoordinate: Xk,
                  activePayload: bk,
                  activeTooltipIndex: sk,
                  chartName: Fk,
                  element: kk,
                  isActive: Ak,
                  layout: ek,
                  offset: dk,
                  tooltipAxisBandSize: Vk,
                  tooltipEventType: Jk
                })
              })), OB(wk, "renderPolarAxis", (function(kk, Fk, Bk) {
                var tk = Vk()(kk, "type.axisType"),
                  ak = Vk()(wk.state, "".concat(tk, "Map")),
                  Xk = kk.type.defaultProps,
                  bk = void 0 !== Xk ? LB(LB({}, Xk), kk.props) : kk.props,
                  dk = ak && ak[bk["".concat(tk, "Id")]];
                return (0, Rk.cloneElement)(kk, LB(LB({}, dk), {}, {
                  className: (0, fk.e)(tk, dk.className),
                  key: kk.key || "".concat(Fk, "-").concat(Bk),
                  ticks: (0, Hk.T)(dk, !0)
                }))
              })), OB(wk, "renderPolarGrid", (function(kk) {
                var Fk = kk.props,
                  Bk = Fk.radialLines,
                  tk = Fk.polarAngles,
                  ak = Fk.polarRadius,
                  Xk = wk.state,
                  bk = Xk.radiusAxisMap,
                  dk = Xk.angleAxisMap,
                  sk = (0, uk.i)(bk),
                  Vk = (0, uk.i)(dk),
                  Jk = Vk.cx,
                  Ak = Vk.cy,
                  ek = Vk.innerRadius,
                  yk = Vk.outerRadius;
                return (0, Rk.cloneElement)(kk, {
                  polarAngles: Array.isArray(tk) ? tk : (0, Hk.T)(Vk, !0).map((function(kk) {
                    return kk.coordinate
                  })),
                  polarRadius: Array.isArray(ak) ? ak : (0, Hk.T)(sk, !0).map((function(kk) {
                    return kk.coordinate
                  })),
                  cx: Jk,
                  cy: Ak,
                  innerRadius: ek,
                  outerRadius: yk,
                  key: kk.key || "polar-grid",
                  radialLines: Bk
                })
              })), OB(wk, "renderLegend", (function() {
                var kk = wk.state.formattedGraphicalItems,
                  Fk = wk.props,
                  Bk = Fk.children,
                  tk = Fk.width,
                  ak = Fk.height,
                  Xk = wk.props.margin || {},
                  bk = tk - (Xk.left || 0) - (Xk.right || 0),
                  dk = (0, nk.e)({
                    children: Bk,
                    formattedGraphicalItems: kk,
                    legendWidth: bk,
                    legendContent: Jk
                  });
                if (!dk) return null;
                var sk = dk.item,
                  Vk = AB(dk, wB);
                return (0, Rk.cloneElement)(sk, LB(LB({}, Vk), {}, {
                  chartWidth: tk,
                  chartHeight: ak,
                  margin: Xk,
                  onBBoxUpdate: wk.handleLegendBBoxUpdate
                }))
              })), OB(wk, "renderTooltip", (function() {
                var kk, Fk = wk.props,
                  Bk = Fk.children,
                  tk = Fk.accessibilityLayer,
                  ak = (0, Ek.d)(Bk, ik.e);
                if (!ak) return null;
                var Xk = wk.state,
                  bk = Xk.isTooltipActive,
                  dk = Xk.activeCoordinate,
                  sk = Xk.activePayload,
                  Vk = Xk.activeLabel,
                  Jk = Xk.offset,
                  Ak = null !== (kk = ak.props.active) && void 0 !== kk ? kk : bk;
                return (0, Rk.cloneElement)(ak, {
                  viewBox: LB(LB({}, Jk), {}, {
                    x: Jk.left,
                    y: Jk.top
                  }),
                  active: Ak,
                  label: Vk,
                  payload: Ak ? sk : [],
                  coordinate: dk,
                  accessibilityLayer: tk
                })
              })), OB(wk, "renderBrush", (function(kk) {
                var Fk = wk.props,
                  Bk = Fk.margin,
                  tk = Fk.data,
                  ak = wk.state,
                  Xk = ak.offset,
                  bk = ak.dataStartIndex,
                  dk = ak.dataEndIndex,
                  sk = ak.updateId;
                return (0, Rk.cloneElement)(kk, {
                  key: kk.key || "_recharts-brush",
                  onChange: (0, Hk.f)(wk.handleBrushChange, kk.props.onChange),
                  data: tk,
                  x: (0, uk.y)(kk.props.x) ? kk.props.x : Xk.left,
                  y: (0, uk.y)(kk.props.y) ? kk.props.y : Xk.top + Xk.height + Xk.brushBottom - (Bk.bottom || 0),
                  width: (0, uk.y)(kk.props.width) ? kk.props.width : Xk.width,
                  startIndex: bk,
                  endIndex: dk,
                  updateId: "brush-".concat(sk)
                })
              })), OB(wk, "renderReferenceElement", (function(kk, Fk, Bk) {
                if (!kk) return null;
                var tk = wk.clipPathId,
                  ak = wk.state,
                  Xk = ak.xAxisMap,
                  bk = ak.yAxisMap,
                  dk = ak.offset,
                  sk = kk.type.defaultProps || {},
                  Vk = kk.props,
                  Jk = Vk.xAxisId,
                  Ak = void 0 === Jk ? sk.xAxisId : Jk,
                  ek = Vk.yAxisId,
                  yk = void 0 === ek ? sk.yAxisId : ek;
                return (0, Rk.cloneElement)(kk, {
                  key: kk.key || "".concat(Fk, "-").concat(Bk),
                  xAxis: Xk[Ak],
                  yAxis: bk[yk],
                  viewBox: {
                    x: dk.left,
                    y: dk.top,
                    width: dk.width,
                    height: dk.height
                  },
                  clipPathId: tk
                })
              })), OB(wk, "renderActivePoints", (function(kk) {
                var Fk = kk.item,
                  Rk = kk.activePoint,
                  tk = kk.basePoint,
                  ak = kk.childIndex,
                  Xk = kk.isRange,
                  bk = [],
                  wk = Fk.props.key,
                  dk = void 0 !== Fk.item.type.defaultProps ? LB(LB({}, Fk.item.type.defaultProps), Fk.item.props) : Fk.item.props,
                  sk = dk.activeDot,
                  Vk = LB(LB({
                    index: ak,
                    dataKey: dk.dataKey,
                    cx: Rk.x,
                    cy: Rk.y,
                    r: 4,
                    fill: (0, Hk.K)(Fk.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: Rk.payload,
                    value: Rk.value
                  }, (0, Ek.b)(sk, !1)), (0, TF.g)(sk));
                return bk.push(Bk.renderActiveDot(sk, Vk, "".concat(wk, "-activePoint-").concat(ak))), tk ? bk.push(Bk.renderActiveDot(sk, LB(LB({}, Vk), {}, {
                  cx: tk.x,
                  cy: tk.y
                }), "".concat(wk, "-basePoint-").concat(ak))) : Xk && bk.push(null), bk
              })), OB(wk, "renderGraphicChild", (function(kk, Fk, Bk) {
                var tk = wk.filterFormatItem(kk, Fk, Bk);
                if (!tk) return null;
                var Xk = wk.getTooltipEventType(),
                  bk = wk.state,
                  dk = bk.isTooltipActive,
                  sk = bk.tooltipAxis,
                  Vk = bk.activeTooltipIndex,
                  Jk = bk.activeLabel,
                  Ak = wk.props.children,
                  ek = (0, Ek.d)(Ak, ik.e),
                  yk = tk.props,
                  fk = yk.points,
                  mk = yk.isRange,
                  Wk = yk.baseLine,
                  vk = void 0 !== tk.item.type.defaultProps ? LB(LB({}, tk.item.type.defaultProps), tk.item.props) : tk.item.props,
                  Yk = vk.activeDot,
                  Lk = vk.hide,
                  Ok = vk.activeBar,
                  Sk = vk.activeShape,
                  Nk = Boolean(!Lk && dk && ek && (Yk || Ok || Sk)),
                  Mk = {};
                "axis" !== Xk && ek && "click" === ek.props.trigger ? Mk = {
                  onClick: (0, Hk.f)(wk.handleItemMouseEnter, kk.props.onClick)
                } : "axis" !== Xk && (Mk = {
                  onMouseLeave: (0, Hk.f)(wk.handleItemMouseLeave, kk.props.onMouseLeave),
                  onMouseEnter: (0, Hk.f)(wk.handleItemMouseEnter, kk.props.onMouseEnter)
                });
                var gk = (0, Rk.cloneElement)(kk, LB(LB({}, tk.props), Mk));
                if (Nk) {
                  if (!(Vk >= 0)) {
                    var Uk, ck = (null !== (Uk = wk.getItemByXY(wk.state.activeCoordinate)) && void 0 !== Uk ? Uk : {
                        graphicalItem: gk
                      }).graphicalItem,
                      Gk = ck.item,
                      Tk = void 0 === Gk ? kk : Gk,
                      rk = ck.childIndex,
                      Dk = LB(LB(LB({}, tk.props), Mk), {}, {
                        activeIndex: rk
                      });
                    return [(0, Rk.cloneElement)(Tk, Dk), null, null]
                  }
                  var zk, Pk;
                  if (sk.dataKey && !sk.allowDuplicatedCategory) {
                    var hk = "function" === typeof sk.dataKey ? function(kk) {
                      return "function" === typeof sk.dataKey ? sk.dataKey(kk.payload) : null
                    } : "payload.".concat(sk.dataKey.toString());
                    zk = (0, uk.e)(fk, hk, Jk), Pk = mk && Wk && (0, uk.e)(Wk, hk, Jk)
                  } else zk = null === fk || void 0 === fk ? void 0 : fk[Vk], Pk = mk && Wk && Wk[Vk];
                  if (Sk || Ok) {
                    var qk = void 0 !== kk.props.activeIndex ? kk.props.activeIndex : Vk;
                    return [(0, Rk.cloneElement)(kk, LB(LB(LB({}, tk.props), Mk), {}, {
                      activeIndex: qk
                    })), null, null]
                  }
                  if (!ak()(zk)) return [gk].concat(vB(wk.renderActivePoints({
                    item: tk,
                    activePoint: zk,
                    basePoint: Pk,
                    childIndex: Vk,
                    isRange: mk
                  })))
                }
                return mk ? [gk, null, null] : [gk, null]
              })), OB(wk, "renderCustomized", (function(kk, Fk, Bk) {
                return (0, Rk.cloneElement)(kk, LB(LB({
                  key: "recharts-customized-".concat(Bk)
                }, wk.props), wk.state))
              })), OB(wk, "renderMap", {
                CartesianGrid: {
                  handler: uB,
                  once: !0
                },
                ReferenceArea: {
                  handler: wk.renderReferenceElement
                },
                ReferenceLine: {
                  handler: uB
                },
                ReferenceDot: {
                  handler: wk.renderReferenceElement
                },
                XAxis: {
                  handler: uB
                },
                YAxis: {
                  handler: uB
                },
                Brush: {
                  handler: wk.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: wk.renderGraphicChild
                },
                Line: {
                  handler: wk.renderGraphicChild
                },
                Area: {
                  handler: wk.renderGraphicChild
                },
                Radar: {
                  handler: wk.renderGraphicChild
                },
                RadialBar: {
                  handler: wk.renderGraphicChild
                },
                Scatter: {
                  handler: wk.renderGraphicChild
                },
                Pie: {
                  handler: wk.renderGraphicChild
                },
                Funnel: {
                  handler: wk.renderGraphicChild
                },
                Tooltip: {
                  handler: wk.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: wk.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: wk.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: wk.renderPolarAxis
                },
                Customized: {
                  handler: wk.renderCustomized
                }
              }), wk.clipPathId = "".concat(null !== (tk = kk.id) && void 0 !== tk ? tk : (0, uk.E)("recharts"), "-clip"), wk.throttleTriggeredAfterMouseMove = yk()(wk.triggeredAfterMouseMove, null !== (Xk = kk.throttleDelay) && void 0 !== Xk ? Xk : 1e3 / 60), wk.state = {}, wk
            }
            return function(kk, Fk) {
              if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
              kk.prototype = Object.create(Fk && Fk.prototype, {
                constructor: {
                  value: kk,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(kk, "prototype", {
                writable: !1
              }), Fk && WB(kk, Fk)
            }(Bk, kk), tk = Bk, wk = [{
              key: "componentDidMount",
              value: function() {
                var kk, Fk;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (kk = this.props.margin.left) && void 0 !== kk ? kk : 0,
                    top: null !== (Fk = this.props.margin.top) && void 0 !== Fk ? Fk : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var kk = this.props,
                  Fk = kk.children,
                  Bk = kk.data,
                  Rk = kk.height,
                  tk = kk.layout,
                  ak = (0, Ek.d)(Fk, ik.e);
                if (ak) {
                  var Xk = ak.props.defaultIndex;
                  if (!("number" !== typeof Xk || Xk < 0 || Xk > this.state.tooltipTicks.length - 1)) {
                    var bk = this.state.tooltipTicks[Xk] && this.state.tooltipTicks[Xk].value,
                      wk = UB(this.state, Bk, Xk, bk),
                      dk = this.state.tooltipTicks[Xk].coordinate,
                      sk = (this.state.offset.top + Rk) / 2,
                      Vk = "horizontal" === tk ? {
                        x: dk,
                        y: sk
                      } : {
                        y: dk,
                        x: sk
                      },
                      Jk = this.state.formattedGraphicalItems.find((function(kk) {
                        return "Scatter" === kk.item.type.name
                      }));
                    Jk && (Vk = LB(LB({}, Vk), Jk.props.points[Xk].tooltipPosition), wk = Jk.props.points[Xk].tooltipPayload);
                    var Ak = {
                      activeTooltipIndex: Xk,
                      isTooltipActive: !0,
                      activeLabel: bk,
                      activePayload: wk,
                      activeCoordinate: Vk
                    };
                    this.setState(Ak), this.renderCursor(ak), this.accessibilityManager.setIndex(Xk)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(kk, Fk) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== Fk.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== kk.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== kk.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (Bk = this.props.margin.left) && void 0 !== Bk ? Bk : 0,
                    top: null !== (Rk = this.props.margin.top) && void 0 !== Rk ? Rk : 0
                  }
                }), null) : null;
                var Bk, Rk
              }
            }, {
              key: "componentDidUpdate",
              value: function(kk) {
                (0, Ek.l)([(0, Ek.d)(kk.children, ik.e)], [(0, Ek.d)(this.props.children, ik.e)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var kk = (0, Ek.d)(this.props.children, ik.e);
                if (kk && "boolean" === typeof kk.props.shared) {
                  var Fk = kk.props.shared ? "axis" : "item";
                  return dk.indexOf(Fk) >= 0 ? Fk : Xk
                }
                return Xk
              }
            }, {
              key: "getMouseInfo",
              value: function(kk) {
                if (!this.container) return null;
                var Fk = this.container,
                  Bk = Fk.getBoundingClientRect(),
                  Rk = (0, lk.c)(Bk),
                  tk = {
                    chartX: Math.round(kk.pageX - Rk.left),
                    chartY: Math.round(kk.pageY - Rk.top)
                  },
                  ak = Bk.width / Fk.offsetWidth || 1,
                  Xk = this.inRange(tk.chartX, tk.chartY, ak);
                if (!Xk) return null;
                var bk = this.state,
                  wk = bk.xAxisMap,
                  dk = bk.yAxisMap,
                  sk = this.getTooltipEventType(),
                  Vk = cB(this.state, this.props.data, this.props.layout, Xk);
                if ("axis" !== sk && wk && dk) {
                  var Jk = (0, uk.i)(wk).scale,
                    Ak = (0, uk.i)(dk).scale,
                    ek = Jk && Jk.invert ? Jk.invert(tk.chartX) : null,
                    yk = Ak && Ak.invert ? Ak.invert(tk.chartY) : null;
                  return LB(LB({}, tk), {}, {
                    xValue: ek,
                    yValue: yk
                  }, Vk)
                }
                return Vk ? LB(LB({}, tk), Vk) : null
              }
            }, {
              key: "inRange",
              value: function(kk, Fk) {
                var Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  Rk = this.props.layout,
                  tk = kk / Bk,
                  ak = Fk / Bk;
                if ("horizontal" === Rk || "vertical" === Rk) {
                  var Xk = this.state.offset;
                  return tk >= Xk.left && tk <= Xk.left + Xk.width && ak >= Xk.top && ak <= Xk.top + Xk.height ? {
                    x: tk,
                    y: ak
                  } : null
                }
                var bk = this.state,
                  wk = bk.angleAxisMap,
                  dk = bk.radiusAxisMap;
                if (wk && dk) {
                  var sk = (0, uk.i)(wk);
                  return (0, MF.e)({
                    x: tk,
                    y: ak
                  }, sk)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var kk = this.props.children,
                  Fk = this.getTooltipEventType(),
                  Bk = (0, Ek.d)(kk, ik.e),
                  Rk = {};
                return Bk && "axis" === Fk && (Rk = "click" === Bk.props.trigger ? {
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
                }), LB(LB({}, (0, TF.g)(this.props, this.handleOuterEvent)), Rk)
              }
            }, {
              key: "addListener",
              value: function() {
                cF.on(GF, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                cF.removeListener(GF, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(kk, Fk, Bk) {
                for (var Rk = this.state.formattedGraphicalItems, tk = 0, ak = Rk.length; tk < ak; tk++) {
                  var Xk = Rk[tk];
                  if (Xk.item === kk || Xk.props.key === kk.key || Fk === (0, Ek.e)(Xk.item.type) && Bk === Xk.childIndex) return Xk
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var kk = this.clipPathId,
                  Fk = this.state.offset,
                  Bk = Fk.left,
                  tk = Fk.top,
                  ak = Fk.height,
                  Xk = Fk.width;
                return Rk.createElement("defs", null, Rk.createElement("clipPath", {
                  id: kk
                }, Rk.createElement("rect", {
                  x: Bk,
                  y: tk,
                  height: ak,
                  width: Xk
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var kk = this.state.xAxisMap;
                return kk ? Object.entries(kk).reduce((function(kk, Fk) {
                  var Bk = JB(Fk, 2),
                    Rk = Bk[0],
                    tk = Bk[1];
                  return LB(LB({}, kk), {}, OB({}, Rk, tk.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var kk = this.state.yAxisMap;
                return kk ? Object.entries(kk).reduce((function(kk, Fk) {
                  var Bk = JB(Fk, 2),
                    Rk = Bk[0],
                    tk = Bk[1];
                  return LB(LB({}, kk), {}, OB({}, Rk, tk.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(kk) {
                var Fk;
                return null === (Fk = this.state.xAxisMap) || void 0 === Fk || null === (Fk = Fk[kk]) || void 0 === Fk ? void 0 : Fk.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(kk) {
                var Fk;
                return null === (Fk = this.state.yAxisMap) || void 0 === Fk || null === (Fk = Fk[kk]) || void 0 === Fk ? void 0 : Fk.scale
              }
            }, {
              key: "getItemByXY",
              value: function(kk) {
                var Fk = this.state,
                  Bk = Fk.formattedGraphicalItems,
                  Rk = Fk.activeItem;
                if (Bk && Bk.length)
                  for (var tk = 0, ak = Bk.length; tk < ak; tk++) {
                    var Xk = Bk[tk],
                      bk = Xk.props,
                      wk = Xk.item,
                      dk = void 0 !== wk.type.defaultProps ? LB(LB({}, wk.type.defaultProps), wk.props) : wk.props,
                      sk = (0, Ek.e)(wk.type);
                    if ("Bar" === sk) {
                      var Vk = (bk.data || []).find((function(Fk) {
                        return (0, Ok.e)(kk, Fk)
                      }));
                      if (Vk) return {
                        graphicalItem: Xk,
                        payload: Vk
                      }
                    } else if ("RadialBar" === sk) {
                      var Jk = (bk.data || []).find((function(Fk) {
                        return (0, MF.e)(kk, Fk)
                      }));
                      if (Jk) return {
                        graphicalItem: Xk,
                        payload: Jk
                      }
                    } else if ((0, qF.k)(Xk, Rk) || (0, qF.l)(Xk, Rk) || (0, qF.o)(Xk, Rk)) {
                      var Ak = (0, qF.g)({
                          graphicalItem: Xk,
                          activeTooltipItem: Rk,
                          itemData: dk.data
                        }),
                        ek = void 0 === dk.activeIndex ? Ak : dk.activeIndex;
                      return {
                        graphicalItem: LB(LB({}, Xk), {}, {
                          childIndex: ek
                        }),
                        payload: (0, qF.o)(Xk, Rk) ? dk.data[Ak] : Xk.props.data[Ak]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var kk = this;
                if (!(0, Ek.t)(this)) return null;
                var Fk, Bk, tk = this.props,
                  ak = tk.children,
                  Xk = tk.className,
                  bk = tk.width,
                  wk = tk.height,
                  dk = tk.style,
                  sk = tk.compact,
                  Vk = tk.title,
                  Jk = tk.desc,
                  Ak = AB(tk, dB),
                  ek = (0, Ek.b)(Ak, !1);
                if (sk) return Rk.createElement(bB.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Rk.createElement(Wk.c, VB({}, ek, {
                  width: bk,
                  height: wk,
                  title: Vk,
                  desc: Jk
                }), this.renderClipPath(), (0, Ek.q)(ak, this.renderMap)));
                this.props.accessibilityLayer && (ek.tabIndex = null !== (Fk = this.props.tabIndex) && void 0 !== Fk ? Fk : 0, ek.role = null !== (Bk = this.props.role) && void 0 !== Bk ? Bk : "application", ek.onKeyDown = function(Fk) {
                  kk.accessibilityManager.keyboardEvent(Fk)
                }, ek.onFocus = function() {
                  kk.accessibilityManager.focus()
                });
                var yk = this.parseEventsOfWrapper();
                return Rk.createElement(bB.d, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, Rk.createElement("div", VB({
                  className: (0, fk.e)("recharts-wrapper", Xk),
                  style: LB({
                    position: "relative",
                    cursor: "default",
                    width: bk,
                    height: wk
                  }, dk)
                }, yk, {
                  ref: function(Fk) {
                    kk.container = Fk
                  }
                }), Rk.createElement(Wk.c, VB({}, ek, {
                  width: bk,
                  height: wk,
                  title: Vk,
                  desc: Jk,
                  style: NB
                }), this.renderClipPath(), (0, Ek.q)(ak, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], wk && eB(tk.prototype, wk), sk && eB(tk, sk), Object.defineProperty(tk, "prototype", {
              writable: !1
            }), tk;
            var tk, wk, sk
          }(Rk.Component);
        OB(gk, "displayName", Fk), OB(gk, "defaultProps", LB({
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
        }, Sk)), OB(gk, "getDerivedStateFromProps", (function(kk, Fk) {
          var Bk = kk.dataKey,
            Rk = kk.data,
            tk = kk.children,
            Xk = kk.width,
            bk = kk.height,
            wk = kk.layout,
            dk = kk.stackOffset,
            sk = kk.margin,
            Vk = Fk.dataStartIndex,
            Jk = Fk.dataEndIndex;
          if (void 0 === Fk.updateId) {
            var Ak = rB(kk);
            return LB(LB(LB({}, Ak), {}, {
              updateId: 0
            }, Mk(LB(LB({
              props: kk
            }, Ak), {}, {
              updateId: 0
            }), Fk)), {}, {
              prevDataKey: Bk,
              prevData: Rk,
              prevWidth: Xk,
              prevHeight: bk,
              prevLayout: wk,
              prevStackOffset: dk,
              prevMargin: sk,
              prevChildren: tk
            })
          }
          if (Bk !== Fk.prevDataKey || Rk !== Fk.prevData || Xk !== Fk.prevWidth || bk !== Fk.prevHeight || wk !== Fk.prevLayout || dk !== Fk.prevStackOffset || !(0, gF.e)(sk, Fk.prevMargin)) {
            var ek = rB(kk),
              yk = {
                chartX: Fk.chartX,
                chartY: Fk.chartY,
                isTooltipActive: Fk.isTooltipActive
              },
              fk = LB(LB({}, cB(Fk, Rk, wk)), {}, {
                updateId: Fk.updateId + 1
              }),
              mk = LB(LB(LB({}, ek), yk), fk);
            return LB(LB(LB({}, mk), Mk(LB({
              props: kk
            }, mk), Fk)), {}, {
              prevDataKey: Bk,
              prevData: Rk,
              prevWidth: Xk,
              prevHeight: bk,
              prevLayout: wk,
              prevStackOffset: dk,
              prevMargin: sk,
              prevChildren: tk
            })
          }
          if (!(0, Ek.l)(tk, Fk.prevChildren)) {
            var Wk, vk, ik, Yk, Lk = (0, Ek.d)(tk, jk),
              Ok = Lk && null !== (Wk = null === (vk = Lk.props) || void 0 === vk ? void 0 : vk.startIndex) && void 0 !== Wk ? Wk : Vk,
              Sk = Lk && null !== (ik = null === (Yk = Lk.props) || void 0 === Yk ? void 0 : Yk.endIndex) && void 0 !== ik ? ik : Jk,
              Nk = Ok !== Vk || Sk !== Jk,
              Hk = !ak()(Rk) && !Nk ? Fk.updateId : Fk.updateId + 1;
            return LB(LB({
              updateId: Hk
            }, Mk(LB(LB({
              props: kk
            }, Fk), {}, {
              updateId: Hk,
              dataStartIndex: Ok,
              dataEndIndex: Sk
            }), Fk)), {}, {
              prevChildren: tk,
              dataStartIndex: Ok,
              dataEndIndex: Sk
            })
          }
          return null
        })), OB(gk, "renderActiveDot", (function(kk, Fk, Bk) {
          var tk;
          return tk = (0, Rk.isValidElement)(kk) ? (0, Rk.cloneElement)(kk, Fk) : bk()(kk) ? kk(Fk) : Rk.createElement(Lk.c, Fk), Rk.createElement(vk.b, {
            className: "recharts-active-dot",
            key: Bk
          }, tk)
        }));
        var Uk = (0, Rk.forwardRef)((function(kk, Fk) {
          return Rk.createElement(gk, VB({}, kk, {
            ref: Fk
          }))
        }));
        return Uk.displayName = gk.displayName, Uk
      }
  },
  5983: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    var Rk = function(kk) {
      return null
    };
    Rk.displayName = "Cell"
  },
  5921: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Mk
    });
    var Rk = Bk(61),
      tk = Bk(5099),
      ak = Bk.n(tk),
      Xk = Bk(4936),
      bk = Bk.n(Xk),
      wk = Bk(4766),
      dk = Bk.n(wk),
      sk = Bk(4750),
      Vk = Bk(5819),
      Jk = Bk(5106),
      Ak = Bk(4829),
      ek = Bk(5925);

    function yk(kk) {
      return yk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, yk(kk)
    }
    var fk = ["offset"];

    function mk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return Wk(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return Wk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return Wk(kk, Fk)
      }(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function vk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function ik(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Yk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? ik(Object(Bk), !0).forEach((function(Fk) {
          Lk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : ik(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Lk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != yk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != yk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == yk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Ok() {
      return Ok = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Ok.apply(this, arguments)
    }
    var Ek = function(kk) {
        var Fk = kk.value,
          Bk = kk.formatter,
          Rk = ak()(kk.children) ? Fk : kk.children;
        return bk()(Bk) ? Bk(Rk) : Rk
      },
      Sk = function(kk, Fk, Bk) {
        var tk, Xk, bk = kk.position,
          wk = kk.viewBox,
          dk = kk.offset,
          Vk = kk.className,
          Jk = wk,
          yk = Jk.cx,
          fk = Jk.cy,
          mk = Jk.innerRadius,
          Wk = Jk.outerRadius,
          vk = Jk.startAngle,
          ik = Jk.endAngle,
          Yk = Jk.clockWise,
          Lk = (mk + Wk) / 2,
          Ek = function(kk, Fk) {
            return (0, Ak.B)(Fk - kk) * Math.min(Math.abs(Fk - kk), 360)
          }(vk, ik),
          Sk = Ek >= 0 ? 1 : -1;
        "insideStart" === bk ? (tk = vk + Sk * dk, Xk = Yk) : "insideEnd" === bk ? (tk = ik - Sk * dk, Xk = !Yk) : "end" === bk && (tk = ik + Sk * dk, Xk = Yk), Xk = Ek <= 0 ? Xk : !Xk;
        var Nk = (0, ek.h)(yk, fk, Lk, tk),
          Hk = (0, ek.h)(yk, fk, Lk, tk + 359 * (Xk ? 1 : -1)),
          uk = "M".concat(Nk.x, ",").concat(Nk.y, "\n    A").concat(Lk, ",").concat(Lk, ",0,1,").concat(Xk ? 0 : 1, ",\n    ").concat(Hk.x, ",").concat(Hk.y),
          Mk = ak()(kk.id) ? (0, Ak.E)("recharts-radial-line-") : kk.id;
        return Rk.createElement("text", Ok({}, Bk, {
          dominantBaseline: "central",
          className: (0, sk.e)("recharts-radial-bar-label", Vk)
        }), Rk.createElement("defs", null, Rk.createElement("path", {
          id: Mk,
          d: uk
        })), Rk.createElement("textPath", {
          xlinkHref: "#".concat(Mk)
        }, Fk))
      },
      Nk = function(kk) {
        var Fk = kk.viewBox,
          Bk = kk.offset,
          Rk = kk.position,
          tk = Fk,
          ak = tk.cx,
          Xk = tk.cy,
          bk = tk.innerRadius,
          wk = tk.outerRadius,
          dk = (tk.startAngle + tk.endAngle) / 2;
        if ("outside" === Rk) {
          var sk = (0, ek.h)(ak, Xk, wk + Bk, dk),
            Vk = sk.x;
          return {
            x: Vk,
            y: sk.y,
            textAnchor: Vk >= ak ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === Rk) return {
          x: ak,
          y: Xk,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === Rk) return {
          x: ak,
          y: Xk,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === Rk) return {
          x: ak,
          y: Xk,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var Jk = (bk + wk) / 2,
          Ak = (0, ek.h)(ak, Xk, Jk, dk);
        return {
          x: Ak.x,
          y: Ak.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      Hk = function(kk) {
        var Fk = kk.viewBox,
          Bk = kk.parentViewBox,
          Rk = kk.offset,
          tk = kk.position,
          ak = Fk,
          Xk = ak.x,
          bk = ak.y,
          wk = ak.width,
          sk = ak.height,
          Vk = sk >= 0 ? 1 : -1,
          Jk = Vk * Rk,
          ek = Vk > 0 ? "end" : "start",
          yk = Vk > 0 ? "start" : "end",
          fk = wk >= 0 ? 1 : -1,
          mk = fk * Rk,
          Wk = fk > 0 ? "end" : "start",
          vk = fk > 0 ? "start" : "end";
        if ("top" === tk) return Yk(Yk({}, {
          x: Xk + wk / 2,
          y: bk - Vk * Rk,
          textAnchor: "middle",
          verticalAnchor: ek
        }), Bk ? {
          height: Math.max(bk - Bk.y, 0),
          width: wk
        } : {});
        if ("bottom" === tk) return Yk(Yk({}, {
          x: Xk + wk / 2,
          y: bk + sk + Jk,
          textAnchor: "middle",
          verticalAnchor: yk
        }), Bk ? {
          height: Math.max(Bk.y + Bk.height - (bk + sk), 0),
          width: wk
        } : {});
        if ("left" === tk) {
          var ik = {
            x: Xk - mk,
            y: bk + sk / 2,
            textAnchor: Wk,
            verticalAnchor: "middle"
          };
          return Yk(Yk({}, ik), Bk ? {
            width: Math.max(ik.x - Bk.x, 0),
            height: sk
          } : {})
        }
        if ("right" === tk) {
          var Lk = {
            x: Xk + wk + mk,
            y: bk + sk / 2,
            textAnchor: vk,
            verticalAnchor: "middle"
          };
          return Yk(Yk({}, Lk), Bk ? {
            width: Math.max(Bk.x + Bk.width - Lk.x, 0),
            height: sk
          } : {})
        }
        var Ok = Bk ? {
          width: wk,
          height: sk
        } : {};
        return "insideLeft" === tk ? Yk({
          x: Xk + mk,
          y: bk + sk / 2,
          textAnchor: vk,
          verticalAnchor: "middle"
        }, Ok) : "insideRight" === tk ? Yk({
          x: Xk + wk - mk,
          y: bk + sk / 2,
          textAnchor: Wk,
          verticalAnchor: "middle"
        }, Ok) : "insideTop" === tk ? Yk({
          x: Xk + wk / 2,
          y: bk + Jk,
          textAnchor: "middle",
          verticalAnchor: yk
        }, Ok) : "insideBottom" === tk ? Yk({
          x: Xk + wk / 2,
          y: bk + sk - Jk,
          textAnchor: "middle",
          verticalAnchor: ek
        }, Ok) : "insideTopLeft" === tk ? Yk({
          x: Xk + mk,
          y: bk + Jk,
          textAnchor: vk,
          verticalAnchor: yk
        }, Ok) : "insideTopRight" === tk ? Yk({
          x: Xk + wk - mk,
          y: bk + Jk,
          textAnchor: Wk,
          verticalAnchor: yk
        }, Ok) : "insideBottomLeft" === tk ? Yk({
          x: Xk + mk,
          y: bk + sk - Jk,
          textAnchor: vk,
          verticalAnchor: ek
        }, Ok) : "insideBottomRight" === tk ? Yk({
          x: Xk + wk - mk,
          y: bk + sk - Jk,
          textAnchor: Wk,
          verticalAnchor: ek
        }, Ok) : dk()(tk) && ((0, Ak.y)(tk.x) || (0, Ak.z)(tk.x)) && ((0, Ak.y)(tk.y) || (0, Ak.z)(tk.y)) ? Yk({
          x: Xk + (0, Ak.k)(tk.x, wk),
          y: bk + (0, Ak.k)(tk.y, sk),
          textAnchor: "end",
          verticalAnchor: "end"
        }, Ok) : Yk({
          x: Xk + wk / 2,
          y: bk + sk / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, Ok)
      },
      uk = function(kk) {
        return "cx" in kk && (0, Ak.y)(kk.cx)
      };

    function Mk(kk) {
      var Fk, Bk = kk.offset,
        tk = Yk({
          offset: void 0 === Bk ? 5 : Bk
        }, vk(kk, fk)),
        Xk = tk.viewBox,
        wk = tk.position,
        dk = tk.value,
        Ak = tk.children,
        ek = tk.content,
        yk = tk.className,
        mk = void 0 === yk ? "" : yk,
        Wk = tk.textBreakAll;
      if (!Xk || ak()(dk) && ak()(Ak) && !(0, Rk.isValidElement)(ek) && !bk()(ek)) return null;
      if ((0, Rk.isValidElement)(ek)) return (0, Rk.cloneElement)(ek, tk);
      if (bk()(ek)) {
        if (Fk = (0, Rk.createElement)(ek, tk), (0, Rk.isValidElement)(Fk)) return Fk
      } else Fk = Ek(tk);
      var ik = uk(Xk),
        Lk = (0, Jk.b)(tk, !0);
      if (ik && ("insideStart" === wk || "insideEnd" === wk || "end" === wk)) return Sk(tk, Fk, Lk);
      var Mk = ik ? Nk(tk) : Hk(tk);
      return Rk.createElement(Vk.b, Ok({
        className: (0, sk.e)("recharts-label", mk)
      }, Lk, Mk, {
        breakAll: Wk
      }), Fk)
    }
    Mk.displayName = "Label";
    var gk = function(kk) {
      var Fk = kk.cx,
        Bk = kk.cy,
        Rk = kk.angle,
        tk = kk.startAngle,
        ak = kk.endAngle,
        Xk = kk.r,
        bk = kk.radius,
        wk = kk.innerRadius,
        dk = kk.outerRadius,
        sk = kk.x,
        Vk = kk.y,
        Jk = kk.top,
        ek = kk.left,
        yk = kk.width,
        fk = kk.height,
        mk = kk.clockWise,
        Wk = kk.labelViewBox;
      if (Wk) return Wk;
      if ((0, Ak.y)(yk) && (0, Ak.y)(fk)) {
        if ((0, Ak.y)(sk) && (0, Ak.y)(Vk)) return {
          x: sk,
          y: Vk,
          width: yk,
          height: fk
        };
        if ((0, Ak.y)(Jk) && (0, Ak.y)(ek)) return {
          x: Jk,
          y: ek,
          width: yk,
          height: fk
        }
      }
      return (0, Ak.y)(sk) && (0, Ak.y)(Vk) ? {
        x: sk,
        y: Vk,
        width: 0,
        height: 0
      } : (0, Ak.y)(Fk) && (0, Ak.y)(Bk) ? {
        cx: Fk,
        cy: Bk,
        startAngle: tk || Rk || 0,
        endAngle: ak || Rk || 0,
        innerRadius: wk || 0,
        outerRadius: dk || bk || Xk || 0,
        clockWise: mk
      } : kk.viewBox ? kk.viewBox : {}
    };
    Mk.parseViewBox = gk, Mk.renderCallByParent = function(kk, Fk) {
      var Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!kk || !kk.children && Bk && !kk.label) return null;
      var tk = kk.children,
        ak = gk(kk),
        Xk = (0, Jk.c)(tk, Mk).map((function(kk, Bk) {
          return (0, Rk.cloneElement)(kk, {
            viewBox: Fk || ak,
            key: "label-".concat(Bk)
          })
        }));
      if (!Bk) return Xk;
      var wk = function(kk, Fk) {
        return kk ? !0 === kk ? Rk.createElement(Mk, {
          key: "label-implicit",
          viewBox: Fk
        }) : (0, Ak.u)(kk) ? Rk.createElement(Mk, {
          key: "label-implicit",
          viewBox: Fk,
          value: kk
        }) : (0, Rk.isValidElement)(kk) ? kk.type === Mk ? (0, Rk.cloneElement)(kk, {
          key: "label-implicit",
          viewBox: Fk
        }) : Rk.createElement(Mk, {
          key: "label-implicit",
          content: kk,
          viewBox: Fk
        }) : bk()(kk) ? Rk.createElement(Mk, {
          key: "label-implicit",
          content: kk,
          viewBox: Fk
        }) : dk()(kk) ? Rk.createElement(Mk, Ok({
          viewBox: Fk
        }, kk, {
          key: "label-implicit"
        })) : null : null
      }(kk.label, Fk || ak);
      return [wk].concat(mk(Xk))
    }
  },
  5988: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Hk
    });
    var Rk = Bk(61),
      tk = Bk(5099),
      ak = Bk.n(tk),
      Xk = Bk(4766),
      bk = Bk.n(Xk),
      wk = Bk(4936),
      dk = Bk.n(wk),
      sk = Bk(5991),
      Vk = Bk.n(sk),
      Jk = Bk(5921),
      Ak = Bk(5647),
      ek = Bk(5106),
      yk = Bk(5833);

    function fk(kk) {
      return fk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, fk(kk)
    }
    var mk = ["valueAccessor"],
      Wk = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function vk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return ik(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return ik(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return ik(kk, Fk)
      }(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ik(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function Yk() {
      return Yk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Yk.apply(this, arguments)
    }

    function Lk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Ok(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Lk(Object(Bk), !0).forEach((function(Fk) {
          Ek(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Lk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Ek(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != fk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != fk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == fk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Sk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }
    var Nk = function(kk) {
      return Array.isArray(kk.value) ? Vk()(kk.value) : kk.value
    };

    function Hk(kk) {
      var Fk = kk.valueAccessor,
        Bk = void 0 === Fk ? Nk : Fk,
        tk = Sk(kk, mk),
        Xk = tk.data,
        bk = tk.dataKey,
        wk = tk.clockWise,
        dk = tk.id,
        sk = tk.textBreakAll,
        Vk = Sk(tk, Wk);
      return Xk && Xk.length ? Rk.createElement(Ak.b, {
        className: "recharts-label-list"
      }, Xk.map((function(kk, Fk) {
        var tk = ak()(bk) ? Bk(kk, Fk) : (0, yk.$)(kk && kk.payload, bk),
          Xk = ak()(dk) ? {} : {
            id: "".concat(dk, "-").concat(Fk)
          };
        return Rk.createElement(Jk.d, Yk({}, (0, ek.b)(kk, !0), Vk, Xk, {
          parentViewBox: kk.parentViewBox,
          value: tk,
          textBreakAll: sk,
          viewBox: Jk.d.parseViewBox(ak()(wk) ? kk : Ok(Ok({}, kk), {}, {
            clockWise: wk
          })),
          key: "label-".concat(Fk),
          index: Fk
        }))
      }))) : null
    }
    Hk.displayName = "LabelList", Hk.renderCallByParent = function(kk, Fk) {
      var Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!kk || !kk.children && Bk && !kk.label) return null;
      var tk = kk.children,
        ak = (0, ek.c)(tk, Hk).map((function(kk, Bk) {
          return (0, Rk.cloneElement)(kk, {
            data: Fk,
            key: "labelList-".concat(Bk)
          })
        }));
      return Bk ? [function(kk, Fk) {
        return kk ? !0 === kk ? Rk.createElement(Hk, {
          key: "labelList-implicit",
          data: Fk
        }) : Rk.isValidElement(kk) || dk()(kk) ? Rk.createElement(Hk, {
          key: "labelList-implicit",
          data: Fk,
          content: kk
        }) : bk()(kk) ? Rk.createElement(Hk, Yk({
          data: Fk
        }, kk, {
          key: "labelList-implicit"
        })) : null : null
      }(kk.label, Fk)].concat(vk(ak)) : ak
    }
  },
  5720: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Pk
    });
    var Rk = Bk(61),
      tk = Bk(4936),
      ak = Bk.n(tk),
      Xk = Bk(4750),
      bk = Bk(5104),
      wk = Bk(5639),
      dk = Bk(5727),
      sk = Bk(5125);

    function Vk(kk) {
      return Vk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Vk(kk)
    }

    function Jk() {
      return Jk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Jk.apply(this, arguments)
    }

    function Ak(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function ek(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, ik(Rk.key), Rk)
      }
    }

    function yk(kk, Fk, Bk) {
      return Fk = mk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === Vk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, fk() ? Reflect.construct(Fk, Bk || [], mk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function fk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (fk = function() {
        return !!kk
      })()
    }

    function mk(kk) {
      return mk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, mk(kk)
    }

    function Wk(kk, Fk) {
      return Wk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Wk(kk, Fk)
    }

    function vk(kk, Fk, Bk) {
      return (Fk = ik(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function ik(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Vk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Vk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Vk(Fk) ? Fk : Fk + ""
    }
    var Yk = 32,
      Lk = function(kk) {
        function Fk() {
          return function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, Fk), yk(this, Fk, arguments)
        }
        return function(kk, Fk) {
          if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
          kk.prototype = Object.create(Fk && Fk.prototype, {
            constructor: {
              value: kk,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(kk, "prototype", {
            writable: !1
          }), Fk && Wk(kk, Fk)
        }(Fk, kk), Bk = Fk, tk = [{
          key: "renderIcon",
          value: function(kk) {
            var Fk = this.props.inactiveColor,
              Bk = 16,
              tk = Yk / 6,
              ak = Yk / 3,
              Xk = kk.inactive ? Fk : kk.color;
            if ("plainline" === kk.type) return Rk.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: Xk,
              strokeDasharray: kk.payload.strokeDasharray,
              x1: 0,
              y1: Bk,
              x2: Yk,
              y2: Bk,
              className: "recharts-legend-icon"
            });
            if ("line" === kk.type) return Rk.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: Xk,
              d: "M0,".concat(Bk, "h").concat(ak, "\n            A").concat(tk, ",").concat(tk, ",0,1,1,").concat(2 * ak, ",").concat(Bk, "\n            H").concat(Yk, "M").concat(2 * ak, ",").concat(Bk, "\n            A").concat(tk, ",").concat(tk, ",0,1,1,").concat(ak, ",").concat(Bk),
              className: "recharts-legend-icon"
            });
            if ("rect" === kk.type) return Rk.createElement("path", {
              stroke: "none",
              fill: Xk,
              d: "M0,".concat(4, "h").concat(Yk, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (Rk.isValidElement(kk.legendIcon)) {
              var bk = function(kk) {
                for (var Fk = 1; Fk < arguments.length; Fk++) {
                  var Bk = null != arguments[Fk] ? arguments[Fk] : {};
                  Fk % 2 ? Ak(Object(Bk), !0).forEach((function(Fk) {
                    vk(kk, Fk, Bk[Fk])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Ak(Object(Bk)).forEach((function(Fk) {
                    Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
                  }))
                }
                return kk
              }({}, kk);
              return delete bk.legendIcon, Rk.cloneElement(kk.legendIcon, bk)
            }
            return Rk.createElement(dk.c, {
              fill: Xk,
              cx: Bk,
              cy: Bk,
              size: Yk,
              sizeType: "diameter",
              type: kk.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var kk = this,
              Fk = this.props,
              Bk = Fk.payload,
              tk = Fk.iconSize,
              dk = Fk.layout,
              Vk = Fk.formatter,
              Ak = Fk.inactiveColor,
              ek = {
                x: 0,
                y: 0,
                width: Yk,
                height: Yk
              },
              yk = {
                display: "horizontal" === dk ? "inline-block" : "block",
                marginRight: 10
              },
              fk = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return Bk.map((function(Fk, Bk) {
              var dk = Fk.formatter || Vk,
                mk = (0, Xk.e)(vk(vk({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(Bk), !0), "inactive", Fk.inactive));
              if ("none" === Fk.type) return null;
              var Wk = ak()(Fk.value) ? null : Fk.value;
              (0, bk.e)(!ak()(Fk.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var ik = Fk.inactive ? Ak : Fk.color;
              return Rk.createElement("li", Jk({
                className: mk,
                style: yk,
                key: "legend-item-".concat(Bk)
              }, (0, sk.h)(kk.props, Fk, Bk)), Rk.createElement(wk.c, {
                width: tk,
                height: tk,
                viewBox: ek,
                style: fk
              }, kk.renderIcon(Fk)), Rk.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: ik
                }
              }, dk ? dk(Wk, Fk, Bk) : Wk))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var kk = this.props,
              Fk = kk.payload,
              Bk = kk.layout,
              tk = kk.align;
            if (!Fk || !Fk.length) return null;
            var ak = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === Bk ? tk : "left"
            };
            return Rk.createElement("ul", {
              className: "recharts-default-legend",
              style: ak
            }, this.renderItems())
          }
        }], tk && ek(Bk.prototype, tk), Vk && ek(Bk, Vk), Object.defineProperty(Bk, "prototype", {
          writable: !1
        }), Bk;
        var Bk, tk, Vk
      }(Rk.PureComponent);
    vk(Lk, "displayName", "Legend"), vk(Lk, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var Ok = Bk(4829),
      Ek = Bk(5669);

    function Sk(kk) {
      return Sk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Sk(kk)
    }
    var Nk = ["ref"];

    function Hk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function uk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Hk(Object(Bk), !0).forEach((function(Fk) {
          Tk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Hk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Mk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, rk(Rk.key), Rk)
      }
    }

    function gk(kk, Fk, Bk) {
      return Fk = ck(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === Sk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, Uk() ? Reflect.construct(Fk, Bk || [], ck(kk).constructor) : Fk.apply(kk, Bk))
    }

    function Uk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (Uk = function() {
        return !!kk
      })()
    }

    function ck(kk) {
      return ck = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, ck(kk)
    }

    function Gk(kk, Fk) {
      return Gk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, Gk(kk, Fk)
    }

    function Tk(kk, Fk, Bk) {
      return (Fk = rk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function rk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Sk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Sk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Sk(Fk) ? Fk : Fk + ""
    }

    function Dk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function zk(kk) {
      return kk.value
    }
    var Pk = function(kk) {
      function Fk() {
        var kk;
        ! function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk);
        for (var Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        return Tk(kk = gk(this, Fk, [].concat(Rk)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), kk
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && Gk(kk, Fk)
      }(Fk, kk), Bk = Fk, ak = [{
        key: "getWithHeight",
        value: function(kk, Fk) {
          var Bk = uk(uk({}, this.defaultProps), kk.props).layout;
          return "vertical" === Bk && (0, Ok.y)(kk.props.height) ? {
            height: kk.props.height
          } : "horizontal" === Bk ? {
            width: kk.props.width || Fk
          } : null
        }
      }], (tk = [{
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
            var kk = this.wrapperNode.getBoundingClientRect();
            return kk.height = this.wrapperNode.offsetHeight, kk.width = this.wrapperNode.offsetWidth, kk
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var kk = this.props.onBBoxUpdate,
            Fk = this.getBBox();
          Fk ? (Math.abs(Fk.width - this.lastBoundingBox.width) > 1 || Math.abs(Fk.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = Fk.width, this.lastBoundingBox.height = Fk.height, kk && kk(Fk)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, kk && kk(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? uk({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(kk) {
          var Fk, Bk, Rk = this.props,
            tk = Rk.layout,
            ak = Rk.align,
            Xk = Rk.verticalAlign,
            bk = Rk.margin,
            wk = Rk.chartWidth,
            dk = Rk.chartHeight;
          return kk && (void 0 !== kk.left && null !== kk.left || void 0 !== kk.right && null !== kk.right) || (Fk = "center" === ak && "vertical" === tk ? {
            left: ((wk || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === ak ? {
            right: bk && bk.right || 0
          } : {
            left: bk && bk.left || 0
          }), kk && (void 0 !== kk.top && null !== kk.top || void 0 !== kk.bottom && null !== kk.bottom) || (Bk = "middle" === Xk ? {
            top: ((dk || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === Xk ? {
            bottom: bk && bk.bottom || 0
          } : {
            top: bk && bk.top || 0
          }), uk(uk({}, Fk), Bk)
        }
      }, {
        key: "render",
        value: function() {
          var kk = this,
            Fk = this.props,
            Bk = Fk.content,
            tk = Fk.width,
            ak = Fk.height,
            Xk = Fk.wrapperStyle,
            bk = Fk.payloadUniqBy,
            wk = Fk.payload,
            dk = uk(uk({
              position: "absolute",
              width: tk || "auto",
              height: ak || "auto"
            }, this.getDefaultPosition(Xk)), Xk);
          return Rk.createElement("div", {
            className: "recharts-legend-wrapper",
            style: dk,
            ref: function(Fk) {
              kk.wrapperNode = Fk
            }
          }, function(kk, Fk) {
            if (Rk.isValidElement(kk)) return Rk.cloneElement(kk, Fk);
            if ("function" === typeof kk) return Rk.createElement(kk, Fk);
            Fk.ref;
            var Bk = Dk(Fk, Nk);
            return Rk.createElement(Lk, Bk)
          }(Bk, uk(uk({}, this.props), {}, {
            payload: (0, Ek.e)(wk, bk, zk)
          })))
        }
      }]) && Mk(Bk.prototype, tk), ak && Mk(Bk, ak), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, tk, ak
    }(Rk.PureComponent);
    Tk(Pk, "displayName", "Legend"), Tk(Pk, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4744: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => fk
    });
    var Rk = Bk(4750),
      tk = Bk(61),
      ak = Bk(4758),
      Xk = Bk.n(ak),
      bk = Bk(4829),
      wk = Bk(5104),
      dk = Bk(5106);

    function sk(kk) {
      return sk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, sk(kk)
    }

    function Vk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Jk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Vk(Object(Bk), !0).forEach((function(Fk) {
          Ak(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Vk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Ak(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != sk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != sk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == sk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function ek(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return yk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return yk(kk, Fk)
      }(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }
    var fk = (0, tk.forwardRef)((function(kk, Fk) {
      var Bk = kk.aspect,
        ak = kk.initialDimension,
        sk = void 0 === ak ? {
          width: -1,
          height: -1
        } : ak,
        Vk = kk.width,
        Ak = void 0 === Vk ? "100%" : Vk,
        yk = kk.height,
        fk = void 0 === yk ? "100%" : yk,
        mk = kk.minWidth,
        Wk = void 0 === mk ? 0 : mk,
        vk = kk.minHeight,
        ik = kk.maxHeight,
        Yk = kk.children,
        Lk = kk.debounce,
        Ok = void 0 === Lk ? 0 : Lk,
        Ek = kk.id,
        Sk = kk.className,
        Nk = kk.UW,
        Hk = kk.style,
        uk = void 0 === Hk ? {} : Hk,
        Mk = (0, tk.useRef)(null),
        gk = (0, tk.useRef)();
      gk.current = Nk, (0, tk.useImperativeHandle)(Fk, (function() {
        return Object.defineProperty(Mk.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), Mk.current
          },
          configurable: !0
        })
      }));
      var Uk = ek((0, tk.useState)({
          containerWidth: sk.width,
          containerHeight: sk.height
        }), 2),
        ck = Uk[0],
        Gk = Uk[1],
        Tk = (0, tk.useCallback)((function(kk, Fk) {
          Gk((function(Bk) {
            var Rk = Math.round(kk),
              tk = Math.round(Fk);
            return Bk.containerWidth === Rk && Bk.containerHeight === tk ? Bk : {
              containerWidth: Rk,
              containerHeight: tk
            }
          }))
        }), []);
      (0, tk.useEffect)((function() {
        var kk = function(kk) {
          var Fk, Bk = kk[0].contentRect,
            Rk = Bk.width,
            tk = Bk.height;
          Tk(Rk, tk), null === (Fk = gk.current) || void 0 === Fk || Fk.call(gk, Rk, tk)
        };
        Ok > 0 && (kk = Xk()(kk, Ok, {
          trailing: !0,
          leading: !1
        }));
        var Fk = new ResizeObserver(kk),
          Bk = Mk.current.getBoundingClientRect(),
          Rk = Bk.width,
          tk = Bk.height;
        return Tk(Rk, tk), Fk.observe(Mk.current),
          function() {
            Fk.disconnect()
          }
      }), [Tk, Ok]);
      var rk = (0, tk.useMemo)((function() {
        var kk = ck.containerWidth,
          Fk = ck.containerHeight;
        if (kk < 0 || Fk < 0) return null;
        (0, wk.e)((0, bk.z)(Ak) || (0, bk.z)(fk), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", Ak, fk), (0, wk.e)(!Bk || Bk > 0, "The aspect(%s) must be greater than zero.", Bk);
        var Rk = (0, bk.z)(Ak) ? kk : Ak,
          ak = (0, bk.z)(fk) ? Fk : fk;
        Bk && Bk > 0 && (Rk ? ak = Rk / Bk : ak && (Rk = ak * Bk), ik && ak > ik && (ak = ik)), (0, wk.e)(Rk > 0 || ak > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", Rk, ak, Ak, fk, Wk, vk, Bk);
        var Xk = !Array.isArray(Yk) && (0, dk.e)(Yk.type).endsWith("Chart");
        return tk.Children.map(Yk, (function(kk) {
          return tk.isValidElement(kk) ? (0, tk.cloneElement)(kk, Jk({
            width: Rk,
            height: ak
          }, Xk ? {
            style: Jk({
              height: "100%",
              width: "100%",
              maxHeight: ak,
              maxWidth: Rk
            }, kk.props.style)
          } : {})) : kk
        }))
      }), [Bk, Yk, fk, ik, vk, Wk, ck, Ak]);
      return tk.createElement("div", {
        id: Ek ? "".concat(Ek) : void 0,
        className: (0, Rk.e)("recharts-responsive-container", Sk),
        style: Jk(Jk({}, uk), {}, {
          width: Ak,
          height: fk,
          minWidth: Wk,
          minHeight: vk,
          maxHeight: ik
        }),
        ref: Mk
      }, rk)
    }))
  },
  5819: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => hk
    });
    var Rk = Bk(61),
      tk = Bk(5099),
      ak = Bk.n(tk),
      Xk = Bk(4750),
      bk = Bk(4829),
      wk = Bk(5663),
      dk = Bk(5106),
      sk = Bk(5824);

    function Vk(kk) {
      return Vk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Vk(kk)
    }

    function Jk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return Ak(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return Ak(kk, Fk)
      }(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ak(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function ek(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, yk(Rk.key), Rk)
      }
    }

    function yk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Vk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Vk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Vk(Fk) ? Fk : Fk + ""
    }
    var fk = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      mk = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      Wk = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      vk = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      ik = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      Yk = Object.keys(ik),
      Lk = "NaN";
    var Ok = function() {
      function kk(Fk, Bk) {
        ! function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, kk), this.num = Fk, this.unit = Bk, this.num = Fk, this.unit = Bk, Number.isNaN(Fk) && (this.unit = ""), "" === Bk || Wk.test(Bk) || (this.num = NaN, this.unit = ""), Yk.includes(Bk) && (this.num = function(kk, Fk) {
          return kk * ik[Fk]
        }(Fk, Bk), this.unit = "px")
      }
      return Fk = kk, Rk = [{
        key: "parse",
        value: function(Fk) {
          var Bk, Rk = Jk(null !== (Bk = vk.exec(Fk)) && void 0 !== Bk ? Bk : [], 3),
            tk = Rk[1],
            ak = Rk[2];
          return new kk(parseFloat(tk), null !== ak && void 0 !== ak ? ak : "")
        }
      }], (Bk = [{
        key: "add",
        value: function(Fk) {
          return this.unit !== Fk.unit ? new kk(NaN, "") : new kk(this.num + Fk.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(Fk) {
          return this.unit !== Fk.unit ? new kk(NaN, "") : new kk(this.num - Fk.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(Fk) {
          return "" !== this.unit && "" !== Fk.unit && this.unit !== Fk.unit ? new kk(NaN, "") : new kk(this.num * Fk.num, this.unit || Fk.unit)
        }
      }, {
        key: "divide",
        value: function(Fk) {
          return "" !== this.unit && "" !== Fk.unit && this.unit !== Fk.unit ? new kk(NaN, "") : new kk(this.num / Fk.num, this.unit || Fk.unit)
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
      }]) && ek(Fk.prototype, Bk), Rk && ek(Fk, Rk), Object.defineProperty(Fk, "prototype", {
        writable: !1
      }), Fk;
      var Fk, Bk, Rk
    }();

    function Ek(kk) {
      if (kk.includes(Lk)) return Lk;
      for (var Fk = kk; Fk.includes("*") || Fk.includes("/");) {
        var Bk, Rk = Jk(null !== (Bk = fk.exec(Fk)) && void 0 !== Bk ? Bk : [], 4),
          tk = Rk[1],
          ak = Rk[2],
          Xk = Rk[3],
          bk = Ok.parse(null !== tk && void 0 !== tk ? tk : ""),
          wk = Ok.parse(null !== Xk && void 0 !== Xk ? Xk : ""),
          dk = "*" === ak ? bk.multiply(wk) : bk.divide(wk);
        if (dk.isNaN()) return Lk;
        Fk = Fk.replace(fk, dk.toString())
      }
      for (; Fk.includes("+") || /.-\d+(?:\.\d+)?/.test(Fk);) {
        var sk, Vk = Jk(null !== (sk = mk.exec(Fk)) && void 0 !== sk ? sk : [], 4),
          Ak = Vk[1],
          ek = Vk[2],
          yk = Vk[3],
          Wk = Ok.parse(null !== Ak && void 0 !== Ak ? Ak : ""),
          vk = Ok.parse(null !== yk && void 0 !== yk ? yk : ""),
          ik = "+" === ek ? Wk.add(vk) : Wk.subtract(vk);
        if (ik.isNaN()) return Lk;
        Fk = Fk.replace(mk, ik.toString())
      }
      return Fk
    }
    var Sk = /\(([^()]*)\)/;

    function Nk(kk) {
      var Fk = kk.replace(/\s+/g, "");
      return Fk = function(kk) {
        for (var Fk = kk; Fk.includes("(");) {
          var Bk = Jk(Sk.exec(Fk), 2)[1];
          Fk = Fk.replace(Sk, Ek(Bk))
        }
        return Fk
      }(Fk), Fk = Ek(Fk)
    }

    function Hk(kk) {
      var Fk = function(kk) {
        try {
          return Nk(kk)
        } catch (Fk) {
          return Lk
        }
      }(kk.slice(5, -1));
      return Fk === Lk ? "" : Fk
    }
    var uk = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      Mk = ["dx", "dy", "angle", "className", "breakAll"];

    function gk() {
      return gk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, gk.apply(this, arguments)
    }

    function Uk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function ck(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return Gk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return Gk(kk, Fk)
      }(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Gk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }
    var Tk = /[ \f\n\r\t\v\u2028\u2029]+/,
      rk = function(kk) {
        var Fk = kk.children,
          Bk = kk.breakAll,
          Rk = kk.style;
        try {
          var tk = [];
          return ak()(Fk) || (tk = Bk ? Fk.toString().split("") : Fk.toString().split(Tk)), {
            wordsWithComputedWidth: tk.map((function(kk) {
              return {
                word: kk,
                width: (0, sk.f)(kk, Rk).width
              }
            })),
            spaceWidth: Bk ? 0 : (0, sk.f)("\xa0", Rk).width
          }
        } catch (Xk) {
          return null
        }
      },
      Dk = function(kk) {
        return [{
          words: ak()(kk) ? [] : kk.toString().split(Tk)
        }]
      },
      zk = function(kk) {
        var Fk = kk.width,
          Bk = kk.scaleToFit,
          Rk = kk.children,
          tk = kk.style,
          ak = kk.breakAll,
          Xk = kk.maxLines;
        if ((Fk || Bk) && !wk.c.isSsr) {
          var dk = rk({
            breakAll: ak,
            children: Rk,
            style: tk
          });
          return dk ? function(kk, Fk, Bk, Rk, tk) {
            var ak = kk.maxLines,
              Xk = kk.children,
              wk = kk.style,
              dk = kk.breakAll,
              sk = (0, bk.y)(ak),
              Vk = Xk,
              Jk = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(kk, Fk) {
                  var ak = Fk.word,
                    Xk = Fk.width,
                    bk = kk[kk.length - 1];
                  if (bk && (null == Rk || tk || bk.width + Xk + Bk < Number(Rk))) bk.words.push(ak), bk.width += Xk + Bk;
                  else {
                    var wk = {
                      words: [ak],
                      width: Xk
                    };
                    kk.push(wk)
                  }
                  return kk
                }), [])
              },
              Ak = Jk(Fk);
            if (!sk) return Ak;
            for (var ek, yk = function(kk) {
                var Fk = Vk.slice(0, kk),
                  Bk = rk({
                    breakAll: dk,
                    style: wk,
                    children: Fk + "\u2026"
                  }).wordsWithComputedWidth,
                  tk = Jk(Bk),
                  Xk = tk.length > ak || function(kk) {
                    return kk.reduce((function(kk, Fk) {
                      return kk.width > Fk.width ? kk : Fk
                    }))
                  }(tk).width > Number(Rk);
                return [Xk, tk]
              }, fk = 0, mk = Vk.length - 1, Wk = 0; fk <= mk && Wk <= Vk.length - 1;) {
              var vk = Math.floor((fk + mk) / 2),
                ik = ck(yk(vk - 1), 2),
                Yk = ik[0],
                Lk = ik[1],
                Ok = ck(yk(vk), 1)[0];
              if (Yk || Ok || (fk = vk + 1), Yk && Ok && (mk = vk - 1), !Yk && Ok) {
                ek = Lk;
                break
              }
              Wk++
            }
            return ek || Ak
          }({
            breakAll: ak,
            children: Rk,
            maxLines: Xk,
            style: tk
          }, dk.wordsWithComputedWidth, dk.spaceWidth, Fk, Bk) : Dk(Rk)
        }
        return Dk(Rk)
      },
      Pk = "#808080",
      hk = function(kk) {
        var Fk = kk.x,
          Bk = void 0 === Fk ? 0 : Fk,
          tk = kk.y,
          ak = void 0 === tk ? 0 : tk,
          wk = kk.lineHeight,
          sk = void 0 === wk ? "1em" : wk,
          Vk = kk.capHeight,
          Jk = void 0 === Vk ? "0.71em" : Vk,
          Ak = kk.scaleToFit,
          ek = void 0 !== Ak && Ak,
          yk = kk.textAnchor,
          fk = void 0 === yk ? "start" : yk,
          mk = kk.verticalAnchor,
          Wk = void 0 === mk ? "end" : mk,
          vk = kk.fill,
          ik = void 0 === vk ? Pk : vk,
          Yk = Uk(kk, uk),
          Lk = (0, Rk.useMemo)((function() {
            return zk({
              breakAll: Yk.breakAll,
              children: Yk.children,
              maxLines: Yk.maxLines,
              scaleToFit: ek,
              style: Yk.style,
              width: Yk.width
            })
          }), [Yk.breakAll, Yk.children, Yk.maxLines, ek, Yk.style, Yk.width]),
          Ok = Yk.dx,
          Ek = Yk.dy,
          Sk = Yk.angle,
          Nk = Yk.className,
          ck = Yk.breakAll,
          Gk = Uk(Yk, Mk);
        if (!(0, bk.u)(Bk) || !(0, bk.u)(ak)) return null;
        var Tk, rk = Bk + ((0, bk.y)(Ok) ? Ok : 0),
          Dk = ak + ((0, bk.y)(Ek) ? Ek : 0);
        switch (Wk) {
          case "start":
            Tk = Hk("calc(".concat(Jk, ")"));
            break;
          case "middle":
            Tk = Hk("calc(".concat((Lk.length - 1) / 2, " * -").concat(sk, " + (").concat(Jk, " / 2))"));
            break;
          default:
            Tk = Hk("calc(".concat(Lk.length - 1, " * -").concat(sk, ")"))
        }
        var hk = [];
        if (ek) {
          var qk = Lk[0].width,
            Ck = Yk.width;
          hk.push("scale(".concat(((0, bk.y)(Ck) ? Ck / qk : 1) / qk, ")"))
        }
        return Sk && hk.push("rotate(".concat(Sk, ", ").concat(rk, ", ").concat(Dk, ")")), hk.length && (Gk.transform = hk.join(" ")), Rk.createElement("text", gk({}, (0, dk.b)(Gk, !0), {
          x: rk,
          y: Dk,
          className: (0, Xk.e)("recharts-text", Nk),
          textAnchor: fk,
          fill: ik.includes("url") ? Pk : ik
        }), Lk.map((function(kk, Fk) {
          var Bk = kk.words.join(ck ? "" : " ");
          return Rk.createElement("tspan", {
            x: rk,
            dy: 0 === Fk ? Tk : sk,
            key: "".concat(Bk, "-").concat(Fk)
          }, Bk)
        })))
      }
  },
  5655: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Ik
    });
    var Rk = Bk(61),
      tk = Bk(5199),
      ak = Bk.n(tk),
      Xk = Bk(5099),
      bk = Bk.n(Xk),
      wk = Bk(4750),
      dk = Bk(4829);

    function sk(kk) {
      return sk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, sk(kk)
    }

    function Vk() {
      return Vk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Vk.apply(this, arguments)
    }

    function Jk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return Ak(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return Ak(kk, Fk)
      }(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ak(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function ek(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function yk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? ek(Object(Bk), !0).forEach((function(Fk) {
          fk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : ek(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function fk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != sk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != sk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == sk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function mk(kk) {
      return Array.isArray(kk) && (0, dk.u)(kk[0]) && (0, dk.u)(kk[1]) ? kk.join(" ~ ") : kk
    }
    var Wk = function(kk) {
      var Fk = kk.separator,
        Bk = void 0 === Fk ? " : " : Fk,
        tk = kk.contentStyle,
        Xk = void 0 === tk ? {} : tk,
        sk = kk.itemStyle,
        Ak = void 0 === sk ? {} : sk,
        ek = kk.labelStyle,
        fk = void 0 === ek ? {} : ek,
        Wk = kk.payload,
        vk = kk.formatter,
        ik = kk.itemSorter,
        Yk = kk.wrapperClassName,
        Lk = kk.labelClassName,
        Ok = kk.label,
        Ek = kk.labelFormatter,
        Sk = kk.accessibilityLayer,
        Nk = void 0 !== Sk && Sk,
        Hk = yk({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, Xk),
        uk = yk({
          margin: 0
        }, fk),
        Mk = !bk()(Ok),
        gk = Mk ? Ok : "",
        Uk = (0, wk.e)("recharts-default-tooltip", Yk),
        ck = (0, wk.e)("recharts-tooltip-label", Lk);
      Mk && Ek && void 0 !== Wk && null !== Wk && (gk = Ek(Ok, Wk));
      var Gk = Nk ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return Rk.createElement("div", Vk({
        className: Uk,
        style: Hk
      }, Gk), Rk.createElement("p", {
        className: ck,
        style: uk
      }, Rk.isValidElement(gk) ? gk : "".concat(gk)), function() {
        if (Wk && Wk.length) {
          var kk = (ik ? ak()(Wk, ik) : Wk).map((function(kk, Fk) {
            if ("none" === kk.type) return null;
            var tk = yk({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: kk.color || "#000"
              }, Ak),
              ak = kk.formatter || vk || mk,
              Xk = kk.value,
              bk = kk.name,
              wk = Xk,
              sk = bk;
            if (ak && null != wk && null != sk) {
              var Vk = ak(Xk, bk, kk, Fk, Wk);
              if (Array.isArray(Vk)) {
                var ek = Jk(Vk, 2);
                wk = ek[0], sk = ek[1]
              } else wk = Vk
            }
            return Rk.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(Fk),
              style: tk
            }, (0, dk.u)(sk) ? Rk.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, sk) : null, (0, dk.u)(sk) ? Rk.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, Bk) : null, Rk.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, wk), Rk.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, kk.unit || ""))
          }));
          return Rk.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, kk)
        }
        return null
      }())
    };

    function vk(kk) {
      return vk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, vk(kk)
    }

    function ik(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != vk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != vk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == vk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var Yk = "recharts-tooltip-wrapper",
      Lk = {
        visibility: "hidden"
      };

    function Ok(kk) {
      var Fk = kk.coordinate,
        Bk = kk.translateX,
        Rk = kk.translateY;
      return (0, wk.e)(Yk, ik(ik(ik(ik({}, "".concat(Yk, "-right"), (0, dk.y)(Bk) && Fk && (0, dk.y)(Fk.x) && Bk >= Fk.x), "".concat(Yk, "-left"), (0, dk.y)(Bk) && Fk && (0, dk.y)(Fk.x) && Bk < Fk.x), "".concat(Yk, "-bottom"), (0, dk.y)(Rk) && Fk && (0, dk.y)(Fk.y) && Rk >= Fk.y), "".concat(Yk, "-top"), (0, dk.y)(Rk) && Fk && (0, dk.y)(Fk.y) && Rk < Fk.y))
    }

    function Ek(kk) {
      var Fk = kk.allowEscapeViewBox,
        Bk = kk.coordinate,
        Rk = kk.key,
        tk = kk.offsetTopLeft,
        ak = kk.position,
        Xk = kk.reverseDirection,
        bk = kk.tooltipDimension,
        wk = kk.viewBox,
        sk = kk.viewBoxDimension;
      if (ak && (0, dk.y)(ak[Rk])) return ak[Rk];
      var Vk = Bk[Rk] - bk - tk,
        Jk = Bk[Rk] + tk;
      return Fk[Rk] ? Xk[Rk] ? Vk : Jk : Xk[Rk] ? Vk < wk[Rk] ? Math.max(Jk, wk[Rk]) : Math.max(Vk, wk[Rk]) : Jk + bk > wk[Rk] + sk ? Math.max(Vk, wk[Rk]) : Math.max(Jk, wk[Rk])
    }

    function Sk(kk) {
      return Sk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Sk(kk)
    }

    function Nk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Hk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Nk(Object(Bk), !0).forEach((function(Fk) {
          Gk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Nk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function uk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Tk(Rk.key), Rk)
      }
    }

    function Mk(kk, Fk, Bk) {
      return Fk = Uk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === Sk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, gk() ? Reflect.construct(Fk, Bk || [], Uk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function gk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (gk = function() {
        return !!kk
      })()
    }

    function Uk(kk) {
      return Uk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Uk(kk)
    }

    function ck(kk, Fk) {
      return ck = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, ck(kk, Fk)
    }

    function Gk(kk, Fk, Bk) {
      return (Fk = Tk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Tk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Sk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Sk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Sk(Fk) ? Fk : Fk + ""
    }
    var rk = function(kk) {
        function Fk() {
          var kk;
          ! function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, Fk);
          for (var Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
          return Gk(kk = Mk(this, Fk, [].concat(Rk)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), Gk(kk, "handleKeyDown", (function(Fk) {
            var Bk, Rk, tk, ak;
            "Escape" === Fk.key && kk.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (Bk = null === (Rk = kk.props.coordinate) || void 0 === Rk ? void 0 : Rk.x) && void 0 !== Bk ? Bk : 0,
                y: null !== (tk = null === (ak = kk.props.coordinate) || void 0 === ak ? void 0 : ak.y) && void 0 !== tk ? tk : 0
              }
            })
          })), kk
        }
        return function(kk, Fk) {
          if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
          kk.prototype = Object.create(Fk && Fk.prototype, {
            constructor: {
              value: kk,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(kk, "prototype", {
            writable: !1
          }), Fk && ck(kk, Fk)
        }(Fk, kk), Bk = Fk, (tk = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var kk = this.wrapperNode.getBoundingClientRect();
              (Math.abs(kk.width - this.state.lastBoundingBox.width) > 1 || Math.abs(kk.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: kk.width,
                  height: kk.height
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
            var kk, Fk;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (kk = this.props.coordinate) || void 0 === kk ? void 0 : kk.x) === this.state.dismissedAtCoordinate.x && (null === (Fk = this.props.coordinate) || void 0 === Fk ? void 0 : Fk.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var kk = this,
              Fk = this.props,
              Bk = Fk.active,
              tk = Fk.allowEscapeViewBox,
              ak = Fk.animationDuration,
              Xk = Fk.animationEasing,
              bk = Fk.children,
              wk = Fk.coordinate,
              dk = Fk.hasPayload,
              sk = Fk.isAnimationActive,
              Vk = Fk.offset,
              Jk = Fk.position,
              Ak = Fk.reverseDirection,
              ek = Fk.useTranslate3d,
              yk = Fk.viewBox,
              fk = Fk.wrapperStyle,
              mk = function(kk) {
                var Fk, Bk, Rk = kk.allowEscapeViewBox,
                  tk = kk.coordinate,
                  ak = kk.offsetTopLeft,
                  Xk = kk.position,
                  bk = kk.reverseDirection,
                  wk = kk.tooltipBox,
                  dk = kk.useTranslate3d,
                  sk = kk.viewBox;
                return {
                  cssProperties: wk.height > 0 && wk.width > 0 && tk ? function(kk) {
                    var Fk = kk.translateX,
                      Bk = kk.translateY;
                    return {
                      transform: kk.useTranslate3d ? "translate3d(".concat(Fk, "px, ").concat(Bk, "px, 0)") : "translate(".concat(Fk, "px, ").concat(Bk, "px)")
                    }
                  }({
                    translateX: Fk = Ek({
                      allowEscapeViewBox: Rk,
                      coordinate: tk,
                      key: "x",
                      offsetTopLeft: ak,
                      position: Xk,
                      reverseDirection: bk,
                      tooltipDimension: wk.width,
                      viewBox: sk,
                      viewBoxDimension: sk.width
                    }),
                    translateY: Bk = Ek({
                      allowEscapeViewBox: Rk,
                      coordinate: tk,
                      key: "y",
                      offsetTopLeft: ak,
                      position: Xk,
                      reverseDirection: bk,
                      tooltipDimension: wk.height,
                      viewBox: sk,
                      viewBoxDimension: sk.height
                    }),
                    useTranslate3d: dk
                  }) : Lk,
                  cssClasses: Ok({
                    translateX: Fk,
                    translateY: Bk,
                    coordinate: tk
                  })
                }
              }({
                allowEscapeViewBox: tk,
                coordinate: wk,
                offsetTopLeft: Vk,
                position: Jk,
                reverseDirection: Ak,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: ek,
                viewBox: yk
              }),
              Wk = mk.cssClasses,
              vk = mk.cssProperties,
              ik = Hk(Hk({
                transition: sk && Bk ? "transform ".concat(ak, "ms ").concat(Xk) : void 0
              }, vk), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && Bk && dk ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, fk);
            return Rk.createElement("div", {
              tabIndex: -1,
              className: Wk,
              style: ik,
              ref: function(Fk) {
                kk.wrapperNode = Fk
              }
            }, bk)
          }
        }]) && uk(Bk.prototype, tk), ak && uk(Bk, ak), Object.defineProperty(Bk, "prototype", {
          writable: !1
        }), Bk;
        var Bk, tk, ak
      }(Rk.PureComponent),
      Dk = Bk(5663),
      zk = Bk(5669);

    function Pk(kk) {
      return Pk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Pk(kk)
    }

    function hk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function qk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? hk(Object(Bk), !0).forEach((function(Fk) {
          jk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : hk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Ck(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, lk(Rk.key), Rk)
      }
    }

    function Zk(kk, Fk, Bk) {
      return Fk = Kk(Fk),
        function(kk, Fk) {
          if (Fk && ("object" === Pk(Fk) || "function" === typeof Fk)) return Fk;
          if (void 0 !== Fk) throw new TypeError("Derived constructors may only return object or undefined");
          return function(kk) {
            if (void 0 === kk) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return kk
          }(kk)
        }(kk, pk() ? Reflect.construct(Fk, Bk || [], Kk(kk).constructor) : Fk.apply(kk, Bk))
    }

    function pk() {
      try {
        var kk = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (kk) {}
      return (pk = function() {
        return !!kk
      })()
    }

    function Kk(kk) {
      return Kk = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(kk) {
        return kk.__proto__ || Object.getPrototypeOf(kk)
      }, Kk(kk)
    }

    function xk(kk, Fk) {
      return xk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(kk, Fk) {
        return kk.__proto__ = Fk, kk
      }, xk(kk, Fk)
    }

    function jk(kk, Fk, Bk) {
      return (Fk = lk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function lk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Pk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Pk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Pk(Fk) ? Fk : Fk + ""
    }

    function nk(kk) {
      return kk.dataKey
    }
    var Ik = function(kk) {
      function Fk() {
        return function(kk, Fk) {
          if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
        }(this, Fk), Zk(this, Fk, arguments)
      }
      return function(kk, Fk) {
        if ("function" !== typeof Fk && null !== Fk) throw new TypeError("Super expression must either be null or a function");
        kk.prototype = Object.create(Fk && Fk.prototype, {
          constructor: {
            value: kk,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(kk, "prototype", {
          writable: !1
        }), Fk && xk(kk, Fk)
      }(Fk, kk), Bk = Fk, (tk = [{
        key: "render",
        value: function() {
          var kk = this,
            Fk = this.props,
            Bk = Fk.active,
            tk = Fk.allowEscapeViewBox,
            ak = Fk.animationDuration,
            Xk = Fk.animationEasing,
            bk = Fk.content,
            wk = Fk.coordinate,
            dk = Fk.filterNull,
            sk = Fk.isAnimationActive,
            Vk = Fk.offset,
            Jk = Fk.payload,
            Ak = Fk.payloadUniqBy,
            ek = Fk.position,
            yk = Fk.reverseDirection,
            fk = Fk.useTranslate3d,
            mk = Fk.viewBox,
            vk = Fk.wrapperStyle,
            ik = null !== Jk && void 0 !== Jk ? Jk : [];
          dk && ik.length && (ik = (0, zk.e)(Jk.filter((function(Fk) {
            return null != Fk.value && (!0 !== Fk.hide || kk.props.includeHidden)
          })), Ak, nk));
          var Yk = ik.length > 0;
          return Rk.createElement(rk, {
            allowEscapeViewBox: tk,
            animationDuration: ak,
            animationEasing: Xk,
            isAnimationActive: sk,
            active: Bk,
            coordinate: wk,
            hasPayload: Yk,
            offset: Vk,
            position: ek,
            reverseDirection: yk,
            useTranslate3d: fk,
            viewBox: mk,
            wrapperStyle: vk
          }, function(kk, Fk) {
            return Rk.isValidElement(kk) ? Rk.cloneElement(kk, Fk) : "function" === typeof kk ? Rk.createElement(kk, Fk) : Rk.createElement(Wk, Fk)
          }(bk, qk(qk({}, this.props), {}, {
            payload: ik
          })))
        }
      }]) && Ck(Bk.prototype, tk), ak && Ck(Bk, ak), Object.defineProperty(Bk, "prototype", {
        writable: !1
      }), Bk;
      var Bk, tk, ak
    }(Rk.PureComponent);
    jk(Ik, "displayName", "Tooltip"), jk(Ik, "defaultProps", {
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
      isAnimationActive: !Dk.c.isSsr,
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
  5647: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(61),
      tk = Bk(4750),
      ak = Bk(5106),
      Xk = ["children", "className"];

    function bk() {
      return bk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, bk.apply(this, arguments)
    }

    function wk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }
    var dk = Rk.forwardRef((function(kk, Fk) {
      var Bk = kk.children,
        dk = kk.className,
        sk = wk(kk, Xk),
        Vk = (0, tk.e)("recharts-layer", dk);
      return Rk.createElement("g", bk({
        className: Vk
      }, (0, ak.b)(sk, !0), {
        ref: Fk
      }), Bk)
    }))
  },
  5639: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk
    });
    var Rk = Bk(61),
      tk = Bk(4750),
      ak = Bk(5106),
      Xk = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function bk() {
      return bk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, bk.apply(this, arguments)
    }

    function wk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function dk(kk) {
      var Fk = kk.children,
        Bk = kk.width,
        dk = kk.height,
        sk = kk.viewBox,
        Vk = kk.className,
        Jk = kk.style,
        Ak = kk.title,
        ek = kk.desc,
        yk = wk(kk, Xk),
        fk = sk || {
          width: Bk,
          height: dk,
          x: 0,
          y: 0
        },
        mk = (0, tk.e)("recharts-surface", Vk);
      return Rk.createElement("svg", bk({}, (0, ak.b)(yk, !0, "svg"), {
        className: mk,
        width: Bk,
        height: dk,
        style: Jk,
        viewBox: "".concat(fk.x, " ").concat(fk.y, " ").concat(fk.width, " ").concat(fk.height)
      }), Rk.createElement("title", null, Ak), Rk.createElement("desc", null, ek), Fk)
    }
  },
  6043: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => vk,
      f: () => Lk,
      j: () => uk,
      k: () => Hk,
      m: () => ik,
      p: () => Nk,
      s: () => Sk,
      w: () => Yk,
      z: () => Ek,
      A: () => Ok
    });
    var Rk = Bk(61),
      tk = Bk(5635),
      ak = Bk(6050),
      Xk = Bk.n(ak),
      bk = Bk(5957),
      wk = Bk.n(bk),
      dk = Bk(4894),
      sk = Bk.n(dk)()((function(kk) {
        return {
          x: kk.left,
          y: kk.top,
          width: kk.width,
          height: kk.height
        }
      }), (function(kk) {
        return ["l", kk.left, "t", kk.top, "w", kk.width, "h", kk.height].join("")
      })),
      Vk = Bk(4829);
    var Jk = (0, Rk.createContext)(void 0),
      Ak = (0, Rk.createContext)(void 0),
      ek = (0, Rk.createContext)(void 0),
      yk = (0, Rk.createContext)({}),
      fk = (0, Rk.createContext)(void 0),
      mk = (0, Rk.createContext)(0),
      Wk = (0, Rk.createContext)(0),
      vk = function(kk) {
        var Fk = kk.state,
          Bk = Fk.xAxisMap,
          tk = Fk.yAxisMap,
          ak = Fk.offset,
          Xk = kk.clipPathId,
          bk = kk.children,
          wk = kk.width,
          dk = kk.height,
          Vk = sk(ak);
        return Rk.createElement(Jk.Provider, {
          value: Bk
        }, Rk.createElement(Ak.Provider, {
          value: tk
        }, Rk.createElement(yk.Provider, {
          value: ak
        }, Rk.createElement(ek.Provider, {
          value: Vk
        }, Rk.createElement(fk.Provider, {
          value: Xk
        }, Rk.createElement(mk.Provider, {
          value: dk
        }, Rk.createElement(Wk.Provider, {
          value: wk
        }, bk)))))))
      },
      ik = function() {
        return (0, Rk.useContext)(fk)
      };
    var Yk = function(kk) {
        var Fk = (0, Rk.useContext)(Jk);
        null == Fk && (0, tk.b)(!1);
        var Bk = Fk[kk];
        return null == Bk && (0, tk.b)(!1), Bk
      },
      Lk = function() {
        var kk = (0, Rk.useContext)(Jk);
        return (0, Vk.i)(kk)
      },
      Ok = function() {
        var kk = (0, Rk.useContext)(Ak);
        return Xk()(kk, (function(kk) {
          return wk()(kk.domain, Number.isFinite)
        })) || (0, Vk.i)(kk)
      },
      Ek = function(kk) {
        var Fk = (0, Rk.useContext)(Ak);
        null == Fk && (0, tk.b)(!1);
        var Bk = Fk[kk];
        return null == Bk && (0, tk.b)(!1), Bk
      },
      Sk = function() {
        return (0, Rk.useContext)(ek)
      },
      Nk = function() {
        return (0, Rk.useContext)(yk)
      },
      Hk = function() {
        return (0, Rk.useContext)(Wk)
      },
      uk = function() {
        return (0, Rk.useContext)(mk)
      }
  },
  6069: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => nk
    });
    var Rk = Bk(61);

    function tk() {}

    function ak(kk, Fk, Bk) {
      kk._context.bezierCurveTo((2 * kk._x0 + kk._x1) / 3, (2 * kk._y0 + kk._y1) / 3, (kk._x0 + 2 * kk._x1) / 3, (kk._y0 + 2 * kk._y1) / 3, (kk._x0 + 4 * kk._x1 + Fk) / 6, (kk._y0 + 4 * kk._y1 + Bk) / 6)
    }

    function Xk(kk) {
      this._context = kk
    }

    function bk(kk) {
      this._context = kk
    }

    function wk(kk) {
      this._context = kk
    }
    Xk.prototype = {
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
            ak(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(kk, Fk) {
        switch (kk = +kk, Fk = +Fk, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(kk, Fk) : this._context.moveTo(kk, Fk);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            ak(this, kk, Fk)
        }
        this._x0 = this._x1, this._x1 = kk, this._y0 = this._y1, this._y1 = Fk
      }
    }, bk.prototype = {
      areaStart: tk,
      areaEnd: tk,
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
      point: function(kk, Fk) {
        switch (kk = +kk, Fk = +Fk, this._point) {
          case 0:
            this._point = 1, this._x2 = kk, this._y2 = Fk;
            break;
          case 1:
            this._point = 2, this._x3 = kk, this._y3 = Fk;
            break;
          case 2:
            this._point = 3, this._x4 = kk, this._y4 = Fk, this._context.moveTo((this._x0 + 4 * this._x1 + kk) / 6, (this._y0 + 4 * this._y1 + Fk) / 6);
            break;
          default:
            ak(this, kk, Fk)
        }
        this._x0 = this._x1, this._x1 = kk, this._y0 = this._y1, this._y1 = Fk
      }
    }, wk.prototype = {
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
      point: function(kk, Fk) {
        switch (kk = +kk, Fk = +Fk, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var Bk = (this._x0 + 4 * this._x1 + kk) / 6,
              Rk = (this._y0 + 4 * this._y1 + Fk) / 6;
            this._line ? this._context.lineTo(Bk, Rk) : this._context.moveTo(Bk, Rk);
            break;
          case 3:
            this._point = 4;
          default:
            ak(this, kk, Fk)
        }
        this._x0 = this._x1, this._x1 = kk, this._y0 = this._y1, this._y1 = Fk
      }
    };
    class dk {
      constructor(kk, Fk) {
        this._context = kk, this._x = Fk
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
      point(kk, Fk) {
        switch (kk = +kk, Fk = +Fk, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(kk, Fk) : this._context.moveTo(kk, Fk);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + kk) / 2, this._y0, this._x0, Fk, kk, Fk) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + Fk) / 2, kk, this._y0, kk, Fk)
        }
        this._x0 = kk, this._y0 = Fk
      }
    }

    function sk(kk) {
      this._context = kk
    }

    function Vk(kk) {
      this._context = kk
    }

    function Jk(kk) {
      return new Vk(kk)
    }

    function Ak(kk) {
      return kk < 0 ? -1 : 1
    }

    function ek(kk, Fk, Bk) {
      var Rk = kk._x1 - kk._x0,
        tk = Fk - kk._x1,
        ak = (kk._y1 - kk._y0) / (Rk || tk < 0 && -0),
        Xk = (Bk - kk._y1) / (tk || Rk < 0 && -0),
        bk = (ak * tk + Xk * Rk) / (Rk + tk);
      return (Ak(ak) + Ak(Xk)) * Math.min(Math.abs(ak), Math.abs(Xk), .5 * Math.abs(bk)) || 0
    }

    function yk(kk, Fk) {
      var Bk = kk._x1 - kk._x0;
      return Bk ? (3 * (kk._y1 - kk._y0) / Bk - Fk) / 2 : Fk
    }

    function fk(kk, Fk, Bk) {
      var Rk = kk._x0,
        tk = kk._y0,
        ak = kk._x1,
        Xk = kk._y1,
        bk = (ak - Rk) / 3;
      kk._context.bezierCurveTo(Rk + bk, tk + bk * Fk, ak - bk, Xk - bk * Bk, ak, Xk)
    }

    function mk(kk) {
      this._context = kk
    }

    function Wk(kk) {
      this._context = new vk(kk)
    }

    function vk(kk) {
      this._context = kk
    }

    function ik(kk) {
      this._context = kk
    }

    function Yk(kk) {
      var Fk, Bk, Rk = kk.length - 1,
        tk = new Array(Rk),
        ak = new Array(Rk),
        Xk = new Array(Rk);
      for (tk[0] = 0, ak[0] = 2, Xk[0] = kk[0] + 2 * kk[1], Fk = 1; Fk < Rk - 1; ++Fk) tk[Fk] = 1, ak[Fk] = 4, Xk[Fk] = 4 * kk[Fk] + 2 * kk[Fk + 1];
      for (tk[Rk - 1] = 2, ak[Rk - 1] = 7, Xk[Rk - 1] = 8 * kk[Rk - 1] + kk[Rk], Fk = 1; Fk < Rk; ++Fk) Bk = tk[Fk] / ak[Fk - 1], ak[Fk] -= Bk, Xk[Fk] -= Bk * Xk[Fk - 1];
      for (tk[Rk - 1] = Xk[Rk - 1] / ak[Rk - 1], Fk = Rk - 2; Fk >= 0; --Fk) tk[Fk] = (Xk[Fk] - tk[Fk + 1]) / ak[Fk];
      for (ak[Rk - 1] = (kk[Rk] + tk[Rk - 1]) / 2, Fk = 0; Fk < Rk - 1; ++Fk) ak[Fk] = 2 * kk[Fk + 1] - tk[Fk + 1];
      return [tk, ak]
    }

    function Lk(kk, Fk) {
      this._context = kk, this._t = Fk
    }
    sk.prototype = {
      areaStart: tk,
      areaEnd: tk,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(kk, Fk) {
        kk = +kk, Fk = +Fk, this._point ? this._context.lineTo(kk, Fk) : (this._point = 1, this._context.moveTo(kk, Fk))
      }
    }, Vk.prototype = {
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
      point: function(kk, Fk) {
        switch (kk = +kk, Fk = +Fk, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(kk, Fk) : this._context.moveTo(kk, Fk);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(kk, Fk)
        }
      }
    }, mk.prototype = {
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
            fk(this, this._t0, yk(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(kk, Fk) {
        var Bk = NaN;
        if (Fk = +Fk, (kk = +kk) !== this._x1 || Fk !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(kk, Fk) : this._context.moveTo(kk, Fk);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, fk(this, yk(this, Bk = ek(this, kk, Fk)), Bk);
              break;
            default:
              fk(this, this._t0, Bk = ek(this, kk, Fk))
          }
          this._x0 = this._x1, this._x1 = kk, this._y0 = this._y1, this._y1 = Fk, this._t0 = Bk
        }
      }
    }, (Wk.prototype = Object.create(mk.prototype)).point = function(kk, Fk) {
      mk.prototype.point.call(this, Fk, kk)
    }, vk.prototype = {
      moveTo: function(kk, Fk) {
        this._context.moveTo(Fk, kk)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(kk, Fk) {
        this._context.lineTo(Fk, kk)
      },
      bezierCurveTo: function(kk, Fk, Bk, Rk, tk, ak) {
        this._context.bezierCurveTo(Fk, kk, Rk, Bk, ak, tk)
      }
    }, ik.prototype = {
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
        var kk = this._x,
          Fk = this._y,
          Bk = kk.length;
        if (Bk)
          if (this._line ? this._context.lineTo(kk[0], Fk[0]) : this._context.moveTo(kk[0], Fk[0]), 2 === Bk) this._context.lineTo(kk[1], Fk[1]);
          else
            for (var Rk = Yk(kk), tk = Yk(Fk), ak = 0, Xk = 1; Xk < Bk; ++ak, ++Xk) this._context.bezierCurveTo(Rk[0][ak], tk[0][ak], Rk[1][ak], tk[1][ak], kk[Xk], Fk[Xk]);
        (this._line || 0 !== this._line && 1 === Bk) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(kk, Fk) {
        this._x.push(+kk), this._y.push(+Fk)
      }
    }, Lk.prototype = {
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
      point: function(kk, Fk) {
        switch (kk = +kk, Fk = +Fk, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(kk, Fk) : this._context.moveTo(kk, Fk);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, Fk), this._context.lineTo(kk, Fk);
            else {
              var Bk = this._x * (1 - this._t) + kk * this._t;
              this._context.lineTo(Bk, this._y), this._context.lineTo(Bk, Fk)
            }
        }
        this._x = kk, this._y = Fk
      }
    };
    var Ok = Bk(5912),
      Ek = Bk(5786),
      Sk = Bk(5788);

    function Nk(kk) {
      return kk[0]
    }

    function Hk(kk) {
      return kk[1]
    }

    function uk(kk, Fk) {
      var Bk = (0, Ek.b)(!0),
        Rk = null,
        tk = Jk,
        ak = null,
        Xk = (0, Sk.d)(bk);

      function bk(bk) {
        var wk, dk, sk, Vk = (bk = (0, Ok.b)(bk)).length,
          Jk = !1;
        for (null == Rk && (ak = tk(sk = Xk())), wk = 0; wk <= Vk; ++wk) !(wk < Vk && Bk(dk = bk[wk], wk, bk)) === Jk && ((Jk = !Jk) ? ak.lineStart() : ak.lineEnd()), Jk && ak.point(+kk(dk, wk, bk), +Fk(dk, wk, bk));
        if (sk) return ak = null, sk + "" || null
      }
      return kk = "function" === typeof kk ? kk : void 0 === kk ? Nk : (0, Ek.b)(kk), Fk = "function" === typeof Fk ? Fk : void 0 === Fk ? Hk : (0, Ek.b)(Fk), bk.x = function(Fk) {
        return arguments.length ? (kk = "function" === typeof Fk ? Fk : (0, Ek.b)(+Fk), bk) : kk
      }, bk.y = function(kk) {
        return arguments.length ? (Fk = "function" === typeof kk ? kk : (0, Ek.b)(+kk), bk) : Fk
      }, bk.defined = function(kk) {
        return arguments.length ? (Bk = "function" === typeof kk ? kk : (0, Ek.b)(!!kk), bk) : Bk
      }, bk.curve = function(kk) {
        return arguments.length ? (tk = kk, null != Rk && (ak = tk(Rk)), bk) : tk
      }, bk.context = function(kk) {
        return arguments.length ? (null == kk ? Rk = ak = null : ak = tk(Rk = kk), bk) : Rk
      }, bk
    }

    function Mk(kk, Fk, Bk) {
      var Rk = null,
        tk = (0, Ek.b)(!0),
        ak = null,
        Xk = Jk,
        bk = null,
        wk = (0, Sk.d)(dk);

      function dk(dk) {
        var sk, Vk, Jk, Ak, ek, yk = (dk = (0, Ok.b)(dk)).length,
          fk = !1,
          mk = new Array(yk),
          Wk = new Array(yk);
        for (null == ak && (bk = Xk(ek = wk())), sk = 0; sk <= yk; ++sk) {
          if (!(sk < yk && tk(Ak = dk[sk], sk, dk)) === fk)
            if (fk = !fk) Vk = sk, bk.areaStart(), bk.lineStart();
            else {
              for (bk.lineEnd(), bk.lineStart(), Jk = sk - 1; Jk >= Vk; --Jk) bk.point(mk[Jk], Wk[Jk]);
              bk.lineEnd(), bk.areaEnd()
            } fk && (mk[sk] = +kk(Ak, sk, dk), Wk[sk] = +Fk(Ak, sk, dk), bk.point(Rk ? +Rk(Ak, sk, dk) : mk[sk], Bk ? +Bk(Ak, sk, dk) : Wk[sk]))
        }
        if (ek) return bk = null, ek + "" || null
      }

      function sk() {
        return uk().defined(tk).curve(Xk).context(ak)
      }
      return kk = "function" === typeof kk ? kk : void 0 === kk ? Nk : (0, Ek.b)(+kk), Fk = "function" === typeof Fk ? Fk : void 0 === Fk ? (0, Ek.b)(0) : (0, Ek.b)(+Fk), Bk = "function" === typeof Bk ? Bk : void 0 === Bk ? Hk : (0, Ek.b)(+Bk), dk.x = function(Fk) {
        return arguments.length ? (kk = "function" === typeof Fk ? Fk : (0, Ek.b)(+Fk), Rk = null, dk) : kk
      }, dk.x0 = function(Fk) {
        return arguments.length ? (kk = "function" === typeof Fk ? Fk : (0, Ek.b)(+Fk), dk) : kk
      }, dk.x1 = function(kk) {
        return arguments.length ? (Rk = null == kk ? null : "function" === typeof kk ? kk : (0, Ek.b)(+kk), dk) : Rk
      }, dk.y = function(kk) {
        return arguments.length ? (Fk = "function" === typeof kk ? kk : (0, Ek.b)(+kk), Bk = null, dk) : Fk
      }, dk.y0 = function(kk) {
        return arguments.length ? (Fk = "function" === typeof kk ? kk : (0, Ek.b)(+kk), dk) : Fk
      }, dk.y1 = function(kk) {
        return arguments.length ? (Bk = null == kk ? null : "function" === typeof kk ? kk : (0, Ek.b)(+kk), dk) : Bk
      }, dk.lineX0 = dk.lineY0 = function() {
        return sk().x(kk).y(Fk)
      }, dk.lineY1 = function() {
        return sk().x(kk).y(Bk)
      }, dk.lineX1 = function() {
        return sk().x(Rk).y(Fk)
      }, dk.defined = function(kk) {
        return arguments.length ? (tk = "function" === typeof kk ? kk : (0, Ek.b)(!!kk), dk) : tk
      }, dk.curve = function(kk) {
        return arguments.length ? (Xk = kk, null != ak && (bk = Xk(ak)), dk) : Xk
      }, dk.context = function(kk) {
        return arguments.length ? (null == kk ? ak = bk = null : bk = Xk(ak = kk), dk) : ak
      }, dk
    }
    var gk = Bk(5735),
      Uk = Bk.n(gk),
      ck = Bk(4936),
      Gk = Bk.n(ck),
      Tk = Bk(4750),
      rk = Bk(5125),
      Dk = Bk(5106),
      zk = Bk(4829);

    function Pk(kk) {
      return Pk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Pk(kk)
    }

    function hk() {
      return hk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, hk.apply(this, arguments)
    }

    function qk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Ck(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? qk(Object(Bk), !0).forEach((function(Fk) {
          Zk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : qk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Zk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != Pk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != Pk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == Pk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var pk = {
        curveBasisClosed: function(kk) {
          return new bk(kk)
        },
        curveBasisOpen: function(kk) {
          return new wk(kk)
        },
        curveBasis: function(kk) {
          return new Xk(kk)
        },
        curveBumpX: function(kk) {
          return new dk(kk, !0)
        },
        curveBumpY: function(kk) {
          return new dk(kk, !1)
        },
        curveLinearClosed: function(kk) {
          return new sk(kk)
        },
        curveLinear: Jk,
        curveMonotoneX: function(kk) {
          return new mk(kk)
        },
        curveMonotoneY: function(kk) {
          return new Wk(kk)
        },
        curveNatural: function(kk) {
          return new ik(kk)
        },
        curveStep: function(kk) {
          return new Lk(kk, .5)
        },
        curveStepAfter: function(kk) {
          return new Lk(kk, 1)
        },
        curveStepBefore: function(kk) {
          return new Lk(kk, 0)
        }
      },
      Kk = function(kk) {
        return kk.x === +kk.x && kk.y === +kk.y
      },
      xk = function(kk) {
        return kk.x
      },
      jk = function(kk) {
        return kk.y
      },
      lk = function(kk) {
        var Fk, Bk = kk.type,
          Rk = void 0 === Bk ? "linear" : Bk,
          tk = kk.points,
          ak = void 0 === tk ? [] : tk,
          Xk = kk.baseLine,
          bk = kk.layout,
          wk = kk.connectNulls,
          dk = void 0 !== wk && wk,
          sk = function(kk, Fk) {
            if (Gk()(kk)) return kk;
            var Bk = "curve".concat(Uk()(kk));
            return "curveMonotone" !== Bk && "curveBump" !== Bk || !Fk ? pk[Bk] || Jk : pk["".concat(Bk).concat("vertical" === Fk ? "Y" : "X")]
          }(Rk, bk),
          Vk = dk ? ak.filter((function(kk) {
            return Kk(kk)
          })) : ak;
        if (Array.isArray(Xk)) {
          var Ak = dk ? Xk.filter((function(kk) {
              return Kk(kk)
            })) : Xk,
            ek = Vk.map((function(kk, Fk) {
              return Ck(Ck({}, kk), {}, {
                base: Ak[Fk]
              })
            }));
          return (Fk = "vertical" === bk ? Mk().y(jk).x1(xk).x0((function(kk) {
            return kk.base.x
          })) : Mk().x(xk).y1(jk).y0((function(kk) {
            return kk.base.y
          }))).defined(Kk).curve(sk), Fk(ek)
        }
        return (Fk = "vertical" === bk && (0, zk.y)(Xk) ? Mk().y(jk).x1(xk).x0(Xk) : (0, zk.y)(Xk) ? Mk().x(xk).y1(jk).y0(Xk) : uk().x(xk).y(jk)).defined(Kk).curve(sk), Fk(Vk)
      },
      nk = function(kk) {
        var Fk = kk.className,
          Bk = kk.points,
          tk = kk.path,
          ak = kk.pathRef;
        if ((!Bk || !Bk.length) && !tk) return null;
        var Xk = Bk && Bk.length ? lk(kk) : tk;
        return Rk.createElement("path", hk({}, (0, Dk.b)(kk, !1), (0, rk.g)(kk), {
          className: (0, Tk.e)("recharts-curve", Fk),
          d: Xk,
          ref: ak
        }))
      }
  },
  5794: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk
    });
    var Rk = Bk(61),
      tk = Bk(4750),
      ak = Bk(5125),
      Xk = Bk(5106);

    function bk() {
      return bk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, bk.apply(this, arguments)
    }
    var wk = function(kk) {
      var Fk = kk.cx,
        Bk = kk.cy,
        wk = kk.r,
        dk = kk.className,
        sk = (0, tk.e)("recharts-dot", dk);
      return Fk === +Fk && Bk === +Bk && wk === +wk ? Rk.createElement("circle", bk({}, (0, Xk.b)(kk, !1), (0, ak.g)(kk), {
        className: sk,
        cx: Fk,
        cy: Bk,
        r: wk
      })) : null
    }
  },
  5803: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => mk,
      e: () => yk
    });
    var Rk = Bk(61),
      tk = Bk(4750),
      ak = Bk(5811),
      Xk = Bk(5106);

    function bk(kk) {
      return bk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, bk(kk)
    }

    function wk() {
      return wk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, wk.apply(this, arguments)
    }

    function dk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return sk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return sk(kk, Fk)
      }(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function Vk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Jk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Vk(Object(Bk), !0).forEach((function(Fk) {
          Ak(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Vk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Ak(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != bk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != bk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == bk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var ek = function(kk, Fk, Bk, Rk, tk) {
        var ak, Xk = Math.min(Math.abs(Bk) / 2, Math.abs(Rk) / 2),
          bk = Rk >= 0 ? 1 : -1,
          wk = Bk >= 0 ? 1 : -1,
          dk = Rk >= 0 && Bk >= 0 || Rk < 0 && Bk < 0 ? 1 : 0;
        if (Xk > 0 && tk instanceof Array) {
          for (var sk = [0, 0, 0, 0], Vk = 0; Vk < 4; Vk++) sk[Vk] = tk[Vk] > Xk ? Xk : tk[Vk];
          ak = "M".concat(kk, ",").concat(Fk + bk * sk[0]), sk[0] > 0 && (ak += "A ".concat(sk[0], ",").concat(sk[0], ",0,0,").concat(dk, ",").concat(kk + wk * sk[0], ",").concat(Fk)), ak += "L ".concat(kk + Bk - wk * sk[1], ",").concat(Fk), sk[1] > 0 && (ak += "A ".concat(sk[1], ",").concat(sk[1], ",0,0,").concat(dk, ",\n        ").concat(kk + Bk, ",").concat(Fk + bk * sk[1])), ak += "L ".concat(kk + Bk, ",").concat(Fk + Rk - bk * sk[2]), sk[2] > 0 && (ak += "A ".concat(sk[2], ",").concat(sk[2], ",0,0,").concat(dk, ",\n        ").concat(kk + Bk - wk * sk[2], ",").concat(Fk + Rk)), ak += "L ".concat(kk + wk * sk[3], ",").concat(Fk + Rk), sk[3] > 0 && (ak += "A ".concat(sk[3], ",").concat(sk[3], ",0,0,").concat(dk, ",\n        ").concat(kk, ",").concat(Fk + Rk - bk * sk[3])), ak += "Z"
        } else if (Xk > 0 && tk === +tk && tk > 0) {
          var Jk = Math.min(Xk, tk);
          ak = "M ".concat(kk, ",").concat(Fk + bk * Jk, "\n            A ").concat(Jk, ",").concat(Jk, ",0,0,").concat(dk, ",").concat(kk + wk * Jk, ",").concat(Fk, "\n            L ").concat(kk + Bk - wk * Jk, ",").concat(Fk, "\n            A ").concat(Jk, ",").concat(Jk, ",0,0,").concat(dk, ",").concat(kk + Bk, ",").concat(Fk + bk * Jk, "\n            L ").concat(kk + Bk, ",").concat(Fk + Rk - bk * Jk, "\n            A ").concat(Jk, ",").concat(Jk, ",0,0,").concat(dk, ",").concat(kk + Bk - wk * Jk, ",").concat(Fk + Rk, "\n            L ").concat(kk + wk * Jk, ",").concat(Fk + Rk, "\n            A ").concat(Jk, ",").concat(Jk, ",0,0,").concat(dk, ",").concat(kk, ",").concat(Fk + Rk - bk * Jk, " Z")
        } else ak = "M ".concat(kk, ",").concat(Fk, " h ").concat(Bk, " v ").concat(Rk, " h ").concat(-Bk, " Z");
        return ak
      },
      yk = function(kk, Fk) {
        if (!kk || !Fk) return !1;
        var Bk = kk.x,
          Rk = kk.y,
          tk = Fk.x,
          ak = Fk.y,
          Xk = Fk.width,
          bk = Fk.height;
        if (Math.abs(Xk) > 0 && Math.abs(bk) > 0) {
          var wk = Math.min(tk, tk + Xk),
            dk = Math.max(tk, tk + Xk),
            sk = Math.min(ak, ak + bk),
            Vk = Math.max(ak, ak + bk);
          return Bk >= wk && Bk <= dk && Rk >= sk && Rk <= Vk
        }
        return !1
      },
      fk = {
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
      mk = function(kk) {
        var Fk = Jk(Jk({}, fk), kk),
          Bk = (0, Rk.useRef)(),
          bk = dk((0, Rk.useState)(-1), 2),
          sk = bk[0],
          Vk = bk[1];
        (0, Rk.useEffect)((function() {
          if (Bk.current && Bk.current.getTotalLength) try {
            var kk = Bk.current.getTotalLength();
            kk && Vk(kk)
          } catch (Fk) {}
        }), []);
        var Ak = Fk.x,
          yk = Fk.y,
          mk = Fk.width,
          Wk = Fk.height,
          vk = Fk.radius,
          ik = Fk.className,
          Yk = Fk.animationEasing,
          Lk = Fk.animationDuration,
          Ok = Fk.animationBegin,
          Ek = Fk.isAnimationActive,
          Sk = Fk.isUpdateAnimationActive;
        if (Ak !== +Ak || yk !== +yk || mk !== +mk || Wk !== +Wk || 0 === mk || 0 === Wk) return null;
        var Nk = (0, tk.e)("recharts-rectangle", ik);
        return Sk ? Rk.createElement(ak.d, {
          canBegin: sk > 0,
          from: {
            width: mk,
            height: Wk,
            x: Ak,
            y: yk
          },
          to: {
            width: mk,
            height: Wk,
            x: Ak,
            y: yk
          },
          duration: Lk,
          animationEasing: Yk,
          isActive: Sk
        }, (function(kk) {
          var tk = kk.width,
            bk = kk.height,
            dk = kk.x,
            Vk = kk.y;
          return Rk.createElement(ak.d, {
            canBegin: sk > 0,
            from: "0px ".concat(-1 === sk ? 1 : sk, "px"),
            to: "".concat(sk, "px 0px"),
            attributeName: "strokeDasharray",
            UA: Ok,
            duration: Lk,
            isActive: Ek,
            easing: Yk
          }, Rk.createElement("path", wk({}, (0, Xk.b)(Fk, !0), {
            className: Nk,
            d: ek(dk, Vk, tk, bk, vk),
            ref: Bk
          })))
        })) : Rk.createElement("path", wk({}, (0, Xk.b)(Fk, !0), {
          className: Nk,
          d: ek(Ak, yk, mk, Wk, vk)
        }))
      }
  },
  6021: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => fk
    });
    var Rk = Bk(61),
      tk = Bk(4750),
      ak = Bk(5106),
      Xk = Bk(5925),
      bk = Bk(4829);

    function wk(kk) {
      return wk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, wk(kk)
    }

    function dk() {
      return dk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, dk.apply(this, arguments)
    }

    function sk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Vk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? sk(Object(Bk), !0).forEach((function(Fk) {
          Jk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : sk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Jk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != wk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != wk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == wk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var Ak = function(kk) {
        var Fk = kk.cx,
          Bk = kk.cy,
          Rk = kk.radius,
          tk = kk.angle,
          ak = kk.sign,
          bk = kk.isExternal,
          wk = kk.cornerRadius,
          dk = kk.cornerIsExternal,
          sk = wk * (bk ? 1 : -1) + Rk,
          Vk = Math.asin(wk / sk) / Xk.d,
          Jk = dk ? tk : tk + ak * Vk,
          Ak = dk ? tk - ak * Vk : tk;
        return {
          center: (0, Xk.h)(Fk, Bk, sk, Jk),
          circleTangency: (0, Xk.h)(Fk, Bk, Rk, Jk),
          lineTangency: (0, Xk.h)(Fk, Bk, sk * Math.cos(Vk * Xk.d), Ak),
          wa: Vk
        }
      },
      ek = function(kk) {
        var Fk = kk.cx,
          Bk = kk.cy,
          Rk = kk.innerRadius,
          tk = kk.outerRadius,
          ak = kk.startAngle,
          wk = function(kk, Fk) {
            return (0, bk.B)(Fk - kk) * Math.min(Math.abs(Fk - kk), 359.999)
          }(ak, kk.endAngle),
          dk = ak + wk,
          sk = (0, Xk.h)(Fk, Bk, tk, ak),
          Vk = (0, Xk.h)(Fk, Bk, tk, dk),
          Jk = "M ".concat(sk.x, ",").concat(sk.y, "\n    A ").concat(tk, ",").concat(tk, ",0,\n    ").concat(+(Math.abs(wk) > 180), ",").concat(+(ak > dk), ",\n    ").concat(Vk.x, ",").concat(Vk.y, "\n  ");
        if (Rk > 0) {
          var Ak = (0, Xk.h)(Fk, Bk, Rk, ak),
            ek = (0, Xk.h)(Fk, Bk, Rk, dk);
          Jk += "L ".concat(ek.x, ",").concat(ek.y, "\n            A ").concat(Rk, ",").concat(Rk, ",0,\n            ").concat(+(Math.abs(wk) > 180), ",").concat(+(ak <= dk), ",\n            ").concat(Ak.x, ",").concat(Ak.y, " Z")
        } else Jk += "L ".concat(Fk, ",").concat(Bk, " Z");
        return Jk
      },
      yk = {
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
      fk = function(kk) {
        var Fk = Vk(Vk({}, yk), kk),
          Bk = Fk.cx,
          Xk = Fk.cy,
          wk = Fk.innerRadius,
          sk = Fk.outerRadius,
          Jk = Fk.cornerRadius,
          fk = Fk.forceCornerRadius,
          mk = Fk.cornerIsExternal,
          Wk = Fk.startAngle,
          vk = Fk.endAngle,
          ik = Fk.className;
        if (sk < wk || Wk === vk) return null;
        var Yk, Lk = (0, tk.e)("recharts-sector", ik),
          Ok = sk - wk,
          Ek = (0, bk.k)(Jk, Ok, 0, !0);
        return Yk = Ek > 0 && Math.abs(Wk - vk) < 360 ? function(kk) {
          var Fk = kk.cx,
            Bk = kk.cy,
            Rk = kk.innerRadius,
            tk = kk.outerRadius,
            ak = kk.cornerRadius,
            Xk = kk.forceCornerRadius,
            wk = kk.cornerIsExternal,
            dk = kk.startAngle,
            sk = kk.endAngle,
            Vk = (0, bk.B)(sk - dk),
            Jk = Ak({
              cx: Fk,
              cy: Bk,
              radius: tk,
              angle: dk,
              sign: Vk,
              cornerRadius: ak,
              cornerIsExternal: wk
            }),
            yk = Jk.circleTangency,
            fk = Jk.lineTangency,
            mk = Jk.wa,
            Wk = Ak({
              cx: Fk,
              cy: Bk,
              radius: tk,
              angle: sk,
              sign: -Vk,
              cornerRadius: ak,
              cornerIsExternal: wk
            }),
            vk = Wk.circleTangency,
            ik = Wk.lineTangency,
            Yk = Wk.wa,
            Lk = wk ? Math.abs(dk - sk) : Math.abs(dk - sk) - mk - Yk;
          if (Lk < 0) return Xk ? "M ".concat(fk.x, ",").concat(fk.y, "\n        a").concat(ak, ",").concat(ak, ",0,0,1,").concat(2 * ak, ",0\n        a").concat(ak, ",").concat(ak, ",0,0,1,").concat(2 * -ak, ",0\n      ") : ek({
            cx: Fk,
            cy: Bk,
            innerRadius: Rk,
            outerRadius: tk,
            startAngle: dk,
            endAngle: sk
          });
          var Ok = "M ".concat(fk.x, ",").concat(fk.y, "\n    A").concat(ak, ",").concat(ak, ",0,0,").concat(+(Vk < 0), ",").concat(yk.x, ",").concat(yk.y, "\n    A").concat(tk, ",").concat(tk, ",0,").concat(+(Lk > 180), ",").concat(+(Vk < 0), ",").concat(vk.x, ",").concat(vk.y, "\n    A").concat(ak, ",").concat(ak, ",0,0,").concat(+(Vk < 0), ",").concat(ik.x, ",").concat(ik.y, "\n  ");
          if (Rk > 0) {
            var Ek = Ak({
                cx: Fk,
                cy: Bk,
                radius: Rk,
                angle: dk,
                sign: Vk,
                isExternal: !0,
                cornerRadius: ak,
                cornerIsExternal: wk
              }),
              Sk = Ek.circleTangency,
              Nk = Ek.lineTangency,
              Hk = Ek.wa,
              uk = Ak({
                cx: Fk,
                cy: Bk,
                radius: Rk,
                angle: sk,
                sign: -Vk,
                isExternal: !0,
                cornerRadius: ak,
                cornerIsExternal: wk
              }),
              Mk = uk.circleTangency,
              gk = uk.lineTangency,
              Uk = uk.wa,
              ck = wk ? Math.abs(dk - sk) : Math.abs(dk - sk) - Hk - Uk;
            if (ck < 0 && 0 === ak) return "".concat(Ok, "L").concat(Fk, ",").concat(Bk, "Z");
            Ok += "L".concat(gk.x, ",").concat(gk.y, "\n      A").concat(ak, ",").concat(ak, ",0,0,").concat(+(Vk < 0), ",").concat(Mk.x, ",").concat(Mk.y, "\n      A").concat(Rk, ",").concat(Rk, ",0,").concat(+(ck > 180), ",").concat(+(Vk > 0), ",").concat(Sk.x, ",").concat(Sk.y, "\n      A").concat(ak, ",").concat(ak, ",0,0,").concat(+(Vk < 0), ",").concat(Nk.x, ",").concat(Nk.y, "Z")
          } else Ok += "L".concat(Fk, ",").concat(Bk, "Z");
          return Ok
        }({
          cx: Bk,
          cy: Xk,
          innerRadius: wk,
          outerRadius: sk,
          cornerRadius: Math.min(Ek, Ok / 2),
          forceCornerRadius: fk,
          cornerIsExternal: mk,
          startAngle: Wk,
          endAngle: vk
        }) : ek({
          cx: Bk,
          cy: Xk,
          innerRadius: wk,
          outerRadius: sk,
          startAngle: Wk,
          endAngle: vk
        }), Rk.createElement("path", dk({}, (0, ak.b)(Fk, !0), {
          className: Lk,
          d: Yk,
          role: "img"
        }))
      }
  },
  5727: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Ck
    });
    var Rk = Bk(61),
      tk = Bk(5735),
      ak = Bk.n(tk);
    Math.abs, Math.atan2;
    const Xk = Math.cos,
      bk = (Math.max, Math.min, Math.sin),
      wk = Math.sqrt,
      dk = Math.PI,
      sk = 2 * dk;
    const Vk = {
        draw(kk, Fk) {
          const Bk = wk(Fk / dk);
          kk.moveTo(Bk, 0), kk.arc(0, 0, Bk, 0, sk)
        }
      },
      Jk = {
        draw(kk, Fk) {
          const Bk = wk(Fk / 5) / 2;
          kk.moveTo(-3 * Bk, -Bk), kk.lineTo(-Bk, -Bk), kk.lineTo(-Bk, -3 * Bk), kk.lineTo(Bk, -3 * Bk), kk.lineTo(Bk, -Bk), kk.lineTo(3 * Bk, -Bk), kk.lineTo(3 * Bk, Bk), kk.lineTo(Bk, Bk), kk.lineTo(Bk, 3 * Bk), kk.lineTo(-Bk, 3 * Bk), kk.lineTo(-Bk, Bk), kk.lineTo(-3 * Bk, Bk), kk.closePath()
        }
      },
      Ak = wk(1 / 3),
      ek = 2 * Ak,
      yk = {
        draw(kk, Fk) {
          const Bk = wk(Fk / ek),
            Rk = Bk * Ak;
          kk.moveTo(0, -Bk), kk.lineTo(Rk, 0), kk.lineTo(0, Bk), kk.lineTo(-Rk, 0), kk.closePath()
        }
      },
      fk = {
        draw(kk, Fk) {
          const Bk = wk(Fk),
            Rk = -Bk / 2;
          kk.rect(Rk, Rk, Bk, Bk)
        }
      },
      mk = bk(dk / 10) / bk(7 * dk / 10),
      Wk = bk(sk / 10) * mk,
      vk = -Xk(sk / 10) * mk,
      ik = {
        draw(kk, Fk) {
          const Bk = wk(.8908130915292852 * Fk),
            Rk = Wk * Bk,
            tk = vk * Bk;
          kk.moveTo(0, -Bk), kk.lineTo(Rk, tk);
          for (let ak = 1; ak < 5; ++ak) {
            const Fk = sk * ak / 5,
              wk = Xk(Fk),
              dk = bk(Fk);
            kk.lineTo(dk * Bk, -wk * Bk), kk.lineTo(wk * Rk - dk * tk, dk * Rk + wk * tk)
          }
          kk.closePath()
        }
      },
      Yk = wk(3),
      Lk = {
        draw(kk, Fk) {
          const Bk = -wk(Fk / (3 * Yk));
          kk.moveTo(0, 2 * Bk), kk.lineTo(-Yk * Bk, -Bk), kk.lineTo(Yk * Bk, -Bk), kk.closePath()
        }
      },
      Ok = -.5,
      Ek = wk(3) / 2,
      Sk = 1 / wk(12),
      Nk = 3 * (Sk / 2 + 1),
      Hk = {
        draw(kk, Fk) {
          const Bk = wk(Fk / Nk),
            Rk = Bk / 2,
            tk = Bk * Sk,
            ak = Rk,
            Xk = Bk * Sk + Bk,
            bk = -ak,
            dk = Xk;
          kk.moveTo(Rk, tk), kk.lineTo(ak, Xk), kk.lineTo(bk, dk), kk.lineTo(Ok * Rk - Ek * tk, Ek * Rk + Ok * tk), kk.lineTo(Ok * ak - Ek * Xk, Ek * ak + Ok * Xk), kk.lineTo(Ok * bk - Ek * dk, Ek * bk + Ok * dk), kk.lineTo(Ok * Rk + Ek * tk, Ok * tk - Ek * Rk), kk.lineTo(Ok * ak + Ek * Xk, Ok * Xk - Ek * ak), kk.lineTo(Ok * bk + Ek * dk, Ok * dk - Ek * bk), kk.closePath()
        }
      };
    var uk = Bk(5786),
      Mk = Bk(5788);
    wk(3), wk(3);
    var gk = Bk(4750),
      Uk = Bk(5106);

    function ck(kk) {
      return ck = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, ck(kk)
    }
    var Gk = ["type", "size", "sizeType"];

    function Tk() {
      return Tk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Tk.apply(this, arguments)
    }

    function rk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Dk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? rk(Object(Bk), !0).forEach((function(Fk) {
          zk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : rk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function zk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != ck(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != ck(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == ck(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function Pk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }
    var hk = {
        symbolCircle: Vk,
        symbolCross: Jk,
        symbolDiamond: yk,
        symbolSquare: fk,
        symbolStar: ik,
        symbolTriangle: Lk,
        symbolWye: Hk
      },
      qk = Math.PI / 180,
      Ck = function(kk) {
        var Fk = kk.type,
          Bk = void 0 === Fk ? "circle" : Fk,
          tk = kk.size,
          Xk = void 0 === tk ? 64 : tk,
          bk = kk.sizeType,
          wk = void 0 === bk ? "area" : bk,
          dk = Dk(Dk({}, Pk(kk, Gk)), {}, {
            type: Bk,
            size: Xk,
            sizeType: wk
          }),
          sk = dk.className,
          Jk = dk.cx,
          Ak = dk.cy,
          ek = (0, Uk.b)(dk, !0);
        return Jk === +Jk && Ak === +Ak && Xk === +Xk ? Rk.createElement("path", Tk({}, ek, {
          className: (0, gk.e)("recharts-symbols", sk),
          transform: "translate(".concat(Jk, ", ").concat(Ak, ")"),
          d: function() {
            var kk = function(kk) {
                var Fk = "symbol".concat(ak()(kk));
                return hk[Fk] || Vk
              }(Bk),
              Fk = function(kk, Fk) {
                let Bk = null,
                  Rk = (0, Mk.d)(tk);

                function tk() {
                  let tk;
                  if (Bk || (Bk = tk = Rk()), kk.apply(this, arguments).draw(Bk, +Fk.apply(this, arguments)), tk) return Bk = null, tk + "" || null
                }
                return kk = "function" === typeof kk ? kk : (0, uk.b)(kk || Vk), Fk = "function" === typeof Fk ? Fk : (0, uk.b)(void 0 === Fk ? 64 : +Fk), tk.type = function(Fk) {
                  return arguments.length ? (kk = "function" === typeof Fk ? Fk : (0, uk.b)(Fk), tk) : kk
                }, tk.size = function(kk) {
                  return arguments.length ? (Fk = "function" === typeof kk ? kk : (0, uk.b)(+kk), tk) : Fk
                }, tk.context = function(kk) {
                  return arguments.length ? (Bk = null == kk ? null : kk, tk) : Bk
                }, tk
              }().type(kk).size(function(kk, Fk, Bk) {
                if ("area" === Fk) return kk;
                switch (Bk) {
                  case "cross":
                    return 5 * kk * kk / 9;
                  case "diamond":
                    return .5 * kk * kk / Math.sqrt(3);
                  case "square":
                    return kk * kk;
                  case "star":
                    var Rk = 18 * qk;
                    return 1.25 * kk * kk * (Math.tan(Rk) - Math.tan(2 * Rk) * Math.pow(Math.tan(Rk), 2));
                  case "triangle":
                    return Math.sqrt(3) * kk * kk / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * kk * kk / 8;
                  default:
                    return Math.PI * kk * kk / 4
                }
              }(Xk, wk, Bk));
            return Fk()
          }()
        })) : null
      };
    Ck.registerSymbol = function(kk, Fk) {
      hk["symbol".concat(ak()(kk))] = Fk
    }
  },
  5993: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => zk,
      g: () => Kk,
      k: () => Pk,
      l: () => hk,
      o: () => qk
    });
    var Rk = Bk(61),
      tk = Bk(4936),
      ak = Bk.n(tk),
      Xk = Bk(5997),
      bk = Bk.n(Xk),
      wk = Bk(6013),
      dk = Bk.n(wk),
      sk = Bk(5893),
      Vk = Bk.n(sk),
      Jk = Bk(5803),
      Ak = Bk(4750),
      ek = Bk(5811),
      yk = Bk(5106);

    function fk(kk) {
      return fk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, fk(kk)
    }

    function mk() {
      return mk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk) Object.prototype.hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, mk.apply(this, arguments)
    }

    function Wk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return vk(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return vk(kk, Fk)
      }(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function ik(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Yk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? ik(Object(Bk), !0).forEach((function(Fk) {
          Lk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : ik(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Lk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != fk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != fk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == fk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var Ok = function(kk, Fk, Bk, Rk, tk) {
        var ak, Xk = Bk - Rk;
        return ak = "M ".concat(kk, ",").concat(Fk), ak += "L ".concat(kk + Bk, ",").concat(Fk), ak += "L ".concat(kk + Bk - Xk / 2, ",").concat(Fk + tk), ak += "L ".concat(kk + Bk - Xk / 2 - Rk, ",").concat(Fk + tk), ak += "L ".concat(kk, ",").concat(Fk, " Z")
      },
      Ek = {
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
      Sk = function(kk) {
        var Fk = Yk(Yk({}, Ek), kk),
          Bk = (0, Rk.useRef)(),
          tk = Wk((0, Rk.useState)(-1), 2),
          ak = tk[0],
          Xk = tk[1];
        (0, Rk.useEffect)((function() {
          if (Bk.current && Bk.current.getTotalLength) try {
            var kk = Bk.current.getTotalLength();
            kk && Xk(kk)
          } catch (Fk) {}
        }), []);
        var bk = Fk.x,
          wk = Fk.y,
          dk = Fk.upperWidth,
          sk = Fk.lowerWidth,
          Vk = Fk.height,
          Jk = Fk.className,
          fk = Fk.animationEasing,
          vk = Fk.animationDuration,
          ik = Fk.animationBegin,
          Lk = Fk.isUpdateAnimationActive;
        if (bk !== +bk || wk !== +wk || dk !== +dk || sk !== +sk || Vk !== +Vk || 0 === dk && 0 === sk || 0 === Vk) return null;
        var Sk = (0, Ak.e)("recharts-trapezoid", Jk);
        return Lk ? Rk.createElement(ek.d, {
          canBegin: ak > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: Vk,
            x: bk,
            y: wk
          },
          to: {
            upperWidth: dk,
            lowerWidth: sk,
            height: Vk,
            x: bk,
            y: wk
          },
          duration: vk,
          animationEasing: fk,
          isActive: Lk
        }, (function(kk) {
          var tk = kk.upperWidth,
            Xk = kk.lowerWidth,
            bk = kk.height,
            wk = kk.x,
            dk = kk.y;
          return Rk.createElement(ek.d, {
            canBegin: ak > 0,
            from: "0px ".concat(-1 === ak ? 1 : ak, "px"),
            to: "".concat(ak, "px 0px"),
            attributeName: "strokeDasharray",
            UA: ik,
            duration: vk,
            easing: fk
          }, Rk.createElement("path", mk({}, (0, yk.b)(Fk, !0), {
            className: Sk,
            d: Ok(wk, dk, tk, Xk, bk),
            ref: Bk
          })))
        })) : Rk.createElement("g", null, Rk.createElement("path", mk({}, (0, yk.b)(Fk, !0), {
          className: Sk,
          d: Ok(bk, wk, dk, sk, Vk)
        })))
      },
      Nk = Bk(6021),
      Hk = Bk(5647),
      uk = Bk(5727),
      Mk = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function gk(kk) {
      return gk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, gk(kk)
    }

    function Uk(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function ck(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Gk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? ck(Object(Bk), !0).forEach((function(Fk) {
          Tk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : ck(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Tk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != gk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != gk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == gk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function rk(kk, Fk) {
      return Gk(Gk({}, Fk), kk)
    }

    function Dk(kk) {
      var Fk = kk.shapeType,
        Bk = kk.elementProps;
      switch (Fk) {
        case "rectangle":
          return Rk.createElement(Jk.d, Bk);
        case "trapezoid":
          return Rk.createElement(Sk, Bk);
        case "sector":
          return Rk.createElement(Nk.d, Bk);
        case "symbols":
          if (function(kk) {
              return "symbols" === kk
            }(Fk)) return Rk.createElement(uk.c, Bk);
          break;
        default:
          return null
      }
    }

    function zk(kk) {
      var Fk, Bk = kk.option,
        tk = kk.shapeType,
        Xk = kk.propTransformer,
        wk = void 0 === Xk ? rk : Xk,
        sk = kk.activeClassName,
        Vk = void 0 === sk ? "recharts-active-shape" : sk,
        Jk = kk.isActive,
        Ak = Uk(kk, Mk);
      if ((0, Rk.isValidElement)(Bk)) Fk = (0, Rk.cloneElement)(Bk, Gk(Gk({}, Ak), function(kk) {
        return (0, Rk.isValidElement)(kk) ? kk.props : kk
      }(Bk)));
      else if (ak()(Bk)) Fk = Bk(Ak);
      else if (bk()(Bk) && !dk()(Bk)) {
        var ek = wk(Bk, Ak);
        Fk = Rk.createElement(Dk, {
          shapeType: tk,
          elementProps: ek
        })
      } else {
        var yk = Ak;
        Fk = Rk.createElement(Dk, {
          shapeType: tk,
          elementProps: yk
        })
      }
      return Jk ? Rk.createElement(Hk.b, {
        className: Vk
      }, Fk) : Fk
    }

    function Pk(kk, Fk) {
      return null != Fk && "trapezoids" in kk.props
    }

    function hk(kk, Fk) {
      return null != Fk && "sectors" in kk.props
    }

    function qk(kk, Fk) {
      return null != Fk && "points" in kk.props
    }

    function Ck(kk, Fk) {
      var Bk, Rk, tk = kk.x === (null === Fk || void 0 === Fk || null === (Bk = Fk.labelViewBox) || void 0 === Bk ? void 0 : Bk.x) || kk.x === Fk.x,
        ak = kk.y === (null === Fk || void 0 === Fk || null === (Rk = Fk.labelViewBox) || void 0 === Rk ? void 0 : Rk.y) || kk.y === Fk.y;
      return tk && ak
    }

    function Zk(kk, Fk) {
      var Bk = kk.endAngle === Fk.endAngle,
        Rk = kk.startAngle === Fk.startAngle;
      return Bk && Rk
    }

    function pk(kk, Fk) {
      var Bk = kk.x === Fk.x,
        Rk = kk.y === Fk.y,
        tk = kk.z === Fk.z;
      return Bk && Rk && tk
    }

    function Kk(kk) {
      var Fk = kk.activeTooltipItem,
        Bk = kk.graphicalItem,
        Rk = kk.itemData,
        tk = function(kk, Fk) {
          var Bk;
          return Pk(kk, Fk) ? Bk = "trapezoids" : hk(kk, Fk) ? Bk = "sectors" : qk(kk, Fk) && (Bk = "points"), Bk
        }(Bk, Fk),
        ak = function(kk, Fk) {
          var Bk, Rk;
          return Pk(kk, Fk) ? null === (Bk = Fk.tooltipPayload) || void 0 === Bk || null === (Bk = Bk[0]) || void 0 === Bk || null === (Bk = Bk.payload) || void 0 === Bk ? void 0 : Bk.payload : hk(kk, Fk) ? null === (Rk = Fk.tooltipPayload) || void 0 === Rk || null === (Rk = Rk[0]) || void 0 === Rk || null === (Rk = Rk.payload) || void 0 === Rk ? void 0 : Rk.payload : qk(kk, Fk) ? Fk.payload : {}
        }(Bk, Fk),
        Xk = Rk.filter((function(kk, Rk) {
          var Xk = Vk()(ak, kk),
            bk = Bk.props[tk].filter((function(kk) {
              var Rk = function(kk, Fk) {
                var Bk;
                return Pk(kk, Fk) ? Bk = Ck : hk(kk, Fk) ? Bk = Zk : qk(kk, Fk) && (Bk = pk), Bk
              }(Bk, Fk);
              return Rk(kk, Fk)
            })),
            wk = Bk.props[tk].indexOf(bk[bk.length - 1]);
          return Xk && Rk === wk
        }));
      return Rk.indexOf(Xk[Xk.length - 1])
    }
  },
  5941: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Yk,
      h: () => mk,
      j: () => Lk,
      l: () => vk,
      o: () => Wk
    });
    var Rk = Bk(5950),
      tk = Bk.n(Rk),
      ak = Bk(5957),
      Xk = Bk.n(ak),
      bk = Bk(5833),
      wk = Bk(5106),
      dk = Bk(4829),
      sk = Bk(5977);

    function Vk(kk) {
      return Vk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Vk(kk)
    }

    function Jk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, fk(Rk.key), Rk)
      }
    }

    function Ak(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function ek(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Ak(Object(Bk), !0).forEach((function(Fk) {
          yk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Ak(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function yk(kk, Fk, Bk) {
      return (Fk = fk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function fk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != Vk(kk) || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != Vk(Rk)) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == Vk(Fk) ? Fk : Fk + ""
    }
    var mk = function(kk, Fk, Bk, Rk, tk) {
        var ak = kk.width,
          Xk = kk.height,
          Vk = kk.layout,
          Jk = kk.children,
          Ak = Object.keys(Fk),
          fk = {
            left: Bk.left,
            leftMirror: Bk.left,
            right: ak - Bk.right,
            rightMirror: ak - Bk.right,
            top: Bk.top,
            topMirror: Bk.top,
            bottom: Xk - Bk.bottom,
            bottomMirror: Xk - Bk.bottom
          },
          mk = !!(0, wk.d)(Jk, sk.d);
        return Ak.reduce((function(ak, Xk) {
          var wk, sk, Jk, Ak, Wk, vk = Fk[Xk],
            ik = vk.orientation,
            Yk = vk.domain,
            Lk = vk.padding,
            Ok = void 0 === Lk ? {} : Lk,
            Ek = vk.mirror,
            Sk = vk.reversed,
            Nk = "".concat(ik).concat(Ek ? "Mirror" : "");
          if ("number" === vk.type && ("gap" === vk.padding || "no-gap" === vk.padding)) {
            var Hk = Yk[1] - Yk[0],
              uk = 1 / 0,
              Mk = vk.categoricalDomain.sort(dk.c);
            if (Mk.forEach((function(kk, Fk) {
                Fk > 0 && (uk = Math.min((kk || 0) - (Mk[Fk - 1] || 0), uk))
              })), Number.isFinite(uk)) {
              var gk = uk / Hk,
                Uk = "vertical" === vk.layout ? Bk.height : Bk.width;
              if ("gap" === vk.padding && (wk = gk * Uk / 2), "no-gap" === vk.padding) {
                var ck = (0, dk.k)(kk.barCategoryGap, gk * Uk),
                  Gk = gk * Uk / 2;
                wk = Gk - ck - (Gk - ck) / Uk * ck
              }
            }
          }
          sk = "xAxis" === Rk ? [Bk.left + (Ok.left || 0) + (wk || 0), Bk.left + Bk.width - (Ok.right || 0) - (wk || 0)] : "yAxis" === Rk ? "horizontal" === Vk ? [Bk.top + Bk.height - (Ok.bottom || 0), Bk.top + (Ok.top || 0)] : [Bk.top + (Ok.top || 0) + (wk || 0), Bk.top + Bk.height - (Ok.bottom || 0) - (wk || 0)] : vk.range, Sk && (sk = [sk[1], sk[0]]);
          var Tk = (0, bk.fb)(vk, tk, mk),
            rk = Tk.scale,
            Dk = Tk.realScaleType;
          rk.domain(Yk).range(sk), (0, bk.e)(rk);
          var zk = (0, bk.V)(rk, ek(ek({}, vk), {}, {
            realScaleType: Dk
          }));
          "xAxis" === Rk ? (Wk = "top" === ik && !Ek || "bottom" === ik && Ek, Jk = Bk.left, Ak = fk[Nk] - Wk * vk.height) : "yAxis" === Rk && (Wk = "left" === ik && !Ek || "right" === ik && Ek, Jk = fk[Nk] - Wk * vk.width, Ak = Bk.top);
          var Pk = ek(ek(ek({}, vk), zk), {}, {
            realScaleType: Dk,
            x: Jk,
            y: Ak,
            scale: rk,
            width: "xAxis" === Rk ? Bk.width : vk.width,
            height: "yAxis" === Rk ? Bk.height : vk.height
          });
          return Pk.bandSize = (0, bk.i)(Pk, zk), vk.hide || "xAxis" !== Rk ? vk.hide || (fk[Nk] += (Wk ? -1 : 1) * Pk.width) : fk[Nk] += (Wk ? -1 : 1) * Pk.height, ek(ek({}, ak), {}, yk({}, Xk, Pk))
        }), {})
      },
      Wk = function(kk, Fk) {
        var Bk = kk.x,
          Rk = kk.y,
          tk = Fk.x,
          ak = Fk.y;
        return {
          x: Math.min(Bk, tk),
          y: Math.min(Rk, ak),
          width: Math.abs(tk - Bk),
          height: Math.abs(ak - Rk)
        }
      },
      vk = function(kk) {
        var Fk = kk.x1,
          Bk = kk.y1,
          Rk = kk.x2,
          tk = kk.y2;
        return Wk({
          x: Fk,
          y: Bk
        }, {
          x: Rk,
          y: tk
        })
      },
      ik = function() {
        function kk(Fk) {
          ! function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, kk), this.scale = Fk
        }
        return Fk = kk, Bk = [{
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
          value: function(kk) {
            var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              Bk = Fk.bandAware,
              Rk = Fk.position;
            if (void 0 !== kk) {
              if (Rk) switch (Rk) {
                case "start":
                default:
                  return this.scale(kk);
                case "middle":
                  var tk = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(kk) + tk;
                case "end":
                  var ak = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(kk) + ak
              }
              if (Bk) {
                var Xk = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(kk) + Xk
              }
              return this.scale(kk)
            }
          }
        }, {
          key: "isInRange",
          value: function(kk) {
            var Fk = this.range(),
              Bk = Fk[0],
              Rk = Fk[Fk.length - 1];
            return Bk <= Rk ? kk >= Bk && kk <= Rk : kk >= Rk && kk <= Bk
          }
        }], Rk = [{
          key: "create",
          value: function(Fk) {
            return new kk(Fk)
          }
        }], Bk && Jk(Fk.prototype, Bk), Rk && Jk(Fk, Rk), Object.defineProperty(Fk, "prototype", {
          writable: !1
        }), Fk;
        var Fk, Bk, Rk
      }();
    yk(ik, "EPS", 1e-4);
    var Yk = function(kk) {
      var Fk = Object.keys(kk).reduce((function(Fk, Bk) {
        return ek(ek({}, Fk), {}, yk({}, Bk, ik.create(kk[Bk])))
      }), {});
      return ek(ek({}, Fk), {}, {
        apply: function(kk) {
          var Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Rk = Bk.bandAware,
            ak = Bk.position;
          return tk()(kk, (function(kk, Bk) {
            return Fk[Bk].apply(kk, {
              bandAware: Rk,
              position: ak
            })
          }))
        },
        isInRange: function(kk) {
          return Xk()(kk, (function(kk, Bk) {
            return Fk[Bk].isInRange(kk)
          }))
        }
      })
    };
    var Lk = function(kk) {
      var Fk = kk.width,
        Bk = kk.height,
        Rk = function(kk) {
          return (kk % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        tk = Rk * Math.PI / 180,
        ak = Math.atan(Bk / Fk),
        Xk = tk > ak && tk < Math.PI - ak ? Bk / Math.sin(tk) : Fk / Math.cos(tk);
      return Math.abs(Xk)
    }
  },
  5833: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => cX,
      d: () => uX,
      e: () => pX,
      f: () => qX,
      g: () => KX,
      i: () => bb,
      l: () => UX,
      m: () => gX,
      q: () => Fb,
      t: () => kb,
      w: () => QX,
      z: () => zX,
      D: () => HX,
      G: () => rX,
      H: () => Rb,
      K: () => MX,
      N: () => nX,
      Q: () => Bb,
      T: () => PX,
      V: () => IX,
      Z: () => db,
      $: () => NX,
      ab: () => DX,
      bb: () => wb,
      db: () => TX,
      fb: () => CX,
      hb: () => Xb,
      ib: () => xX
    });
    var Rk = {};
    Bk.r(Rk), Bk.d(Rk, {
      scaleBand: () => tk.c,
      scaleDiverging: () => sa,
      scaleDivergingLog: () => Va,
      scaleDivergingPow: () => Aa,
      scaleDivergingSqrt: () => ea,
      scaleDivergingSymlog: () => Ja,
      scaleIdentity: () => lF,
      scaleImplicit: () => sB.e,
      scaleLinear: () => jF,
      scaleLog: () => aB,
      scaleOrdinal: () => sB.c,
      scalePoint: () => tk.g,
      scalePow: () => yB,
      scaleQuantile: () => NB,
      scaleQuantize: () => HB,
      scaleRadial: () => WB,
      scaleSequential: () => Ra,
      scaleSequentialLog: () => ta,
      scaleSequentialPow: () => Xa,
      scaleSequentialQuantile: () => wa,
      scaleSequentialSqrt: () => ba,
      scaleSequentialSymlog: () => aa,
      scaleSqrt: () => fB,
      scaleSymlog: () => dB,
      scaleThreshold: () => uB,
      scaleTime: () => Qt,
      scaleUtc: () => ka,
      tickFormat: () => KF
    });
    var tk = Bk(5837);
    const ak = Math.sqrt(50),
      Xk = Math.sqrt(10),
      bk = Math.sqrt(2);

    function wk(kk, Fk, Bk) {
      const Rk = (Fk - kk) / Math.max(0, Bk),
        tk = Math.floor(Math.log10(Rk)),
        dk = Rk / Math.pow(10, tk),
        sk = dk >= ak ? 10 : dk >= Xk ? 5 : dk >= bk ? 2 : 1;
      let Vk, Jk, Ak;
      return tk < 0 ? (Ak = Math.pow(10, -tk) / sk, Vk = Math.round(kk * Ak), Jk = Math.round(Fk * Ak), Vk / Ak < kk && ++Vk, Jk / Ak > Fk && --Jk, Ak = -Ak) : (Ak = Math.pow(10, tk) * sk, Vk = Math.round(kk / Ak), Jk = Math.round(Fk / Ak), Vk * Ak < kk && ++Vk, Jk * Ak > Fk && --Jk), Jk < Vk && .5 <= Bk && Bk < 2 ? wk(kk, Fk, 2 * Bk) : [Vk, Jk, Ak]
    }

    function dk(kk, Fk, Bk) {
      if (!((Bk = +Bk) > 0)) return [];
      if ((kk = +kk) === (Fk = +Fk)) return [kk];
      const Rk = Fk < kk,
        [tk, ak, Xk] = Rk ? wk(Fk, kk, Bk) : wk(kk, Fk, Bk);
      if (!(ak >= tk)) return [];
      const bk = ak - tk + 1,
        dk = new Array(bk);
      if (Rk)
        if (Xk < 0)
          for (let wk = 0; wk < bk; ++wk) dk[wk] = (ak - wk) / -Xk;
        else
          for (let wk = 0; wk < bk; ++wk) dk[wk] = (ak - wk) * Xk;
      else if (Xk < 0)
        for (let wk = 0; wk < bk; ++wk) dk[wk] = (tk + wk) / -Xk;
      else
        for (let wk = 0; wk < bk; ++wk) dk[wk] = (tk + wk) * Xk;
      return dk
    }

    function sk(kk, Fk, Bk) {
      return wk(kk = +kk, Fk = +Fk, Bk = +Bk)[2]
    }

    function Vk(kk, Fk, Bk) {
      Bk = +Bk;
      const Rk = (Fk = +Fk) < (kk = +kk),
        tk = Rk ? sk(Fk, kk, Bk) : sk(kk, Fk, Bk);
      return (Rk ? -1 : 1) * (tk < 0 ? 1 / -tk : tk)
    }

    function Jk(kk, Fk) {
      return null == kk || null == Fk ? NaN : kk < Fk ? -1 : kk > Fk ? 1 : kk >= Fk ? 0 : NaN
    }

    function Ak(kk, Fk) {
      return null == kk || null == Fk ? NaN : Fk < kk ? -1 : Fk > kk ? 1 : Fk >= kk ? 0 : NaN
    }

    function ek(kk) {
      let Fk, Bk, Rk;

      function tk(kk, Rk) {
        let tk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ak = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
        if (tk < ak) {
          if (0 !== Fk(Rk, Rk)) return ak;
          do {
            const Fk = tk + ak >>> 1;
            Bk(kk[Fk], Rk) < 0 ? tk = Fk + 1 : ak = Fk
          } while (tk < ak)
        }
        return tk
      }
      return 2 !== kk.length ? (Fk = Jk, Bk = (Fk, Bk) => Jk(kk(Fk), Bk), Rk = (Fk, Bk) => kk(Fk) - Bk) : (Fk = kk === Jk || kk === Ak ? kk : yk, Bk = kk, Rk = kk), {
        left: tk,
        center: function(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const ak = tk(kk, Fk, Bk, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length) - 1);
          return ak > Bk && Rk(kk[ak - 1], Fk) > -Rk(kk[ak], Fk) ? ak - 1 : ak
        },
        right: function(kk, Rk) {
          let tk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ak = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.length;
          if (tk < ak) {
            if (0 !== Fk(Rk, Rk)) return ak;
            do {
              const Fk = tk + ak >>> 1;
              Bk(kk[Fk], Rk) <= 0 ? tk = Fk + 1 : ak = Fk
            } while (tk < ak)
          }
          return tk
        }
      }
    }

    function yk() {
      return 0
    }

    function fk(kk) {
      return null === kk ? NaN : +kk
    }
    const mk = ek(Jk),
      Wk = mk.right,
      vk = (mk.left, ek(fk).center, Wk);

    function ik(kk, Fk, Bk) {
      kk.prototype = Fk.prototype = Bk, Bk.constructor = kk
    }

    function Yk(kk, Fk) {
      var Bk = Object.create(kk.prototype);
      for (var Rk in Fk) Bk[Rk] = Fk[Rk];
      return Bk
    }

    function Lk() {}
    var Ok = .7,
      Ek = 1 / Ok,
      Sk = "\\s*([+-]?\\d+)\\s*",
      Nk = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Hk = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      uk = /^#([0-9a-f]{3,8})$/,
      Mk = new RegExp(`^rgb\\(${Sk},${Sk},${Sk}\\)$`),
      gk = new RegExp(`^rgb\\(${Hk},${Hk},${Hk}\\)$`),
      Uk = new RegExp(`^rgba\\(${Sk},${Sk},${Sk},${Nk}\\)$`),
      ck = new RegExp(`^rgba\\(${Hk},${Hk},${Hk},${Nk}\\)$`),
      Gk = new RegExp(`^hsl\\(${Nk},${Hk},${Hk}\\)$`),
      Tk = new RegExp(`^hsla\\(${Nk},${Hk},${Hk},${Nk}\\)$`),
      rk = {
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

    function Dk() {
      return this.rgb().formatHex()
    }

    function zk() {
      return this.rgb().formatRgb()
    }

    function Pk(kk) {
      var Fk, Bk;
      return kk = (kk + "").trim().toLowerCase(), (Fk = uk.exec(kk)) ? (Bk = Fk[1].length, Fk = parseInt(Fk[1], 16), 6 === Bk ? hk(Fk) : 3 === Bk ? new Zk(Fk >> 8 & 15 | Fk >> 4 & 240, Fk >> 4 & 15 | 240 & Fk, (15 & Fk) << 4 | 15 & Fk, 1) : 8 === Bk ? qk(Fk >> 24 & 255, Fk >> 16 & 255, Fk >> 8 & 255, (255 & Fk) / 255) : 4 === Bk ? qk(Fk >> 12 & 15 | Fk >> 8 & 240, Fk >> 8 & 15 | Fk >> 4 & 240, Fk >> 4 & 15 | 240 & Fk, ((15 & Fk) << 4 | 15 & Fk) / 255) : null) : (Fk = Mk.exec(kk)) ? new Zk(Fk[1], Fk[2], Fk[3], 1) : (Fk = gk.exec(kk)) ? new Zk(255 * Fk[1] / 100, 255 * Fk[2] / 100, 255 * Fk[3] / 100, 1) : (Fk = Uk.exec(kk)) ? qk(Fk[1], Fk[2], Fk[3], Fk[4]) : (Fk = ck.exec(kk)) ? qk(255 * Fk[1] / 100, 255 * Fk[2] / 100, 255 * Fk[3] / 100, Fk[4]) : (Fk = Gk.exec(kk)) ? nk(Fk[1], Fk[2] / 100, Fk[3] / 100, 1) : (Fk = Tk.exec(kk)) ? nk(Fk[1], Fk[2] / 100, Fk[3] / 100, Fk[4]) : rk.hasOwnProperty(kk) ? hk(rk[kk]) : "transparent" === kk ? new Zk(NaN, NaN, NaN, 0) : null
    }

    function hk(kk) {
      return new Zk(kk >> 16 & 255, kk >> 8 & 255, 255 & kk, 1)
    }

    function qk(kk, Fk, Bk, Rk) {
      return Rk <= 0 && (kk = Fk = Bk = NaN), new Zk(kk, Fk, Bk, Rk)
    }

    function Ck(kk, Fk, Bk, Rk) {
      return 1 === arguments.length ? ((tk = kk) instanceof Lk || (tk = Pk(tk)), tk ? new Zk((tk = tk.rgb()).r, tk.g, tk.b, tk.opacity) : new Zk) : new Zk(kk, Fk, Bk, null == Rk ? 1 : Rk);
      var tk
    }

    function Zk(kk, Fk, Bk, Rk) {
      this.r = +kk, this.g = +Fk, this.b = +Bk, this.opacity = +Rk
    }

    function pk() {
      return `#${lk(this.r)}${lk(this.g)}${lk(this.b)}`
    }

    function Kk() {
      const kk = xk(this.opacity);
      return `${1===kk?"rgb(":"rgba("}${jk(this.r)}, ${jk(this.g)}, ${jk(this.b)}${1===kk?")":`, ${kk})`}`
    }

    function xk(kk) {
      return isNaN(kk) ? 1 : Math.max(0, Math.min(1, kk))
    }

    function jk(kk) {
      return Math.max(0, Math.min(255, Math.round(kk) || 0))
    }

    function lk(kk) {
      return ((kk = jk(kk)) < 16 ? "0" : "") + kk.toString(16)
    }

    function nk(kk, Fk, Bk, Rk) {
      return Rk <= 0 ? kk = Fk = Bk = NaN : Bk <= 0 || Bk >= 1 ? kk = Fk = NaN : Fk <= 0 && (kk = NaN), new Qk(kk, Fk, Bk, Rk)
    }

    function Ik(kk) {
      if (kk instanceof Qk) return new Qk(kk.h, kk.s, kk.l, kk.opacity);
      if (kk instanceof Lk || (kk = Pk(kk)), !kk) return new Qk;
      if (kk instanceof Qk) return kk;
      var Fk = (kk = kk.rgb()).r / 255,
        Bk = kk.g / 255,
        Rk = kk.b / 255,
        tk = Math.min(Fk, Bk, Rk),
        ak = Math.max(Fk, Bk, Rk),
        Xk = NaN,
        bk = ak - tk,
        wk = (ak + tk) / 2;
      return bk ? (Xk = Fk === ak ? (Bk - Rk) / bk + 6 * (Bk < Rk) : Bk === ak ? (Rk - Fk) / bk + 2 : (Fk - Bk) / bk + 4, bk /= wk < .5 ? ak + tk : 2 - ak - tk, Xk *= 60) : bk = wk > 0 && wk < 1 ? 0 : Xk, new Qk(Xk, bk, wk, kk.opacity)
    }

    function Qk(kk, Fk, Bk, Rk) {
      this.h = +kk, this.s = +Fk, this.l = +Bk, this.opacity = +Rk
    }

    function kF(kk) {
      return (kk = (kk || 0) % 360) < 0 ? kk + 360 : kk
    }

    function FF(kk) {
      return Math.max(0, Math.min(1, kk || 0))
    }

    function BF(kk, Fk, Bk) {
      return 255 * (kk < 60 ? Fk + (Bk - Fk) * kk / 60 : kk < 180 ? Bk : kk < 240 ? Fk + (Bk - Fk) * (240 - kk) / 60 : Fk)
    }

    function RF(kk, Fk, Bk, Rk, tk) {
      var ak = kk * kk,
        Xk = ak * kk;
      return ((1 - 3 * kk + 3 * ak - Xk) * Fk + (4 - 6 * ak + 3 * Xk) * Bk + (1 + 3 * kk + 3 * ak - 3 * Xk) * Rk + Xk * tk) / 6
    }
    ik(Lk, Pk, {
      copy(kk) {
        return Object.assign(new this.constructor, this, kk)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: Dk,
      formatHex: Dk,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return Ik(this).formatHsl()
      },
      formatRgb: zk,
      toString: zk
    }), ik(Zk, Ck, Yk(Lk, {
      brighter(kk) {
        return kk = null == kk ? Ek : Math.pow(Ek, kk), new Zk(this.r * kk, this.g * kk, this.b * kk, this.opacity)
      },
      darker(kk) {
        return kk = null == kk ? Ok : Math.pow(Ok, kk), new Zk(this.r * kk, this.g * kk, this.b * kk, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new Zk(jk(this.r), jk(this.g), jk(this.b), xk(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: pk,
      formatHex: pk,
      formatHex8: function() {
        return `#${lk(this.r)}${lk(this.g)}${lk(this.b)}${lk(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: Kk,
      toString: Kk
    })), ik(Qk, (function(kk, Fk, Bk, Rk) {
      return 1 === arguments.length ? Ik(kk) : new Qk(kk, Fk, Bk, null == Rk ? 1 : Rk)
    }), Yk(Lk, {
      brighter(kk) {
        return kk = null == kk ? Ek : Math.pow(Ek, kk), new Qk(this.h, this.s, this.l * kk, this.opacity)
      },
      darker(kk) {
        return kk = null == kk ? Ok : Math.pow(Ok, kk), new Qk(this.h, this.s, this.l * kk, this.opacity)
      },
      rgb() {
        var kk = this.h % 360 + 360 * (this.h < 0),
          Fk = isNaN(kk) || isNaN(this.s) ? 0 : this.s,
          Bk = this.l,
          Rk = Bk + (Bk < .5 ? Bk : 1 - Bk) * Fk,
          tk = 2 * Bk - Rk;
        return new Zk(BF(kk >= 240 ? kk - 240 : kk + 120, tk, Rk), BF(kk, tk, Rk), BF(kk < 120 ? kk + 240 : kk - 120, tk, Rk), this.opacity)
      },
      clamp() {
        return new Qk(kF(this.h), FF(this.s), FF(this.l), xk(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const kk = xk(this.opacity);
        return `${1===kk?"hsl(":"hsla("}${kF(this.h)}, ${100*FF(this.s)}%, ${100*FF(this.l)}%${1===kk?")":`, ${kk})`}`
      }
    }));
    const tF = kk => () => kk;

    function aF(kk, Fk) {
      return function(Bk) {
        return kk + Bk * Fk
      }
    }

    function XF(kk) {
      return 1 === (kk = +kk) ? bF : function(Fk, Bk) {
        return Bk - Fk ? function(kk, Fk, Bk) {
          return kk = Math.pow(kk, Bk), Fk = Math.pow(Fk, Bk) - kk, Bk = 1 / Bk,
            function(Rk) {
              return Math.pow(kk + Rk * Fk, Bk)
            }
        }(Fk, Bk, kk) : tF(isNaN(Fk) ? Bk : Fk)
      }
    }

    function bF(kk, Fk) {
      var Bk = Fk - kk;
      return Bk ? aF(kk, Bk) : tF(isNaN(kk) ? Fk : kk)
    }
    const wF = function kk(Fk) {
      var Bk = XF(Fk);

      function Rk(kk, Fk) {
        var Rk = Bk((kk = Ck(kk)).r, (Fk = Ck(Fk)).r),
          tk = Bk(kk.g, Fk.g),
          ak = Bk(kk.b, Fk.b),
          Xk = bF(kk.opacity, Fk.opacity);
        return function(Fk) {
          return kk.r = Rk(Fk), kk.g = tk(Fk), kk.b = ak(Fk), kk.opacity = Xk(Fk), kk + ""
        }
      }
      return Rk.gamma = kk, Rk
    }(1);

    function dF(kk) {
      return function(Fk) {
        var Bk, Rk, tk = Fk.length,
          ak = new Array(tk),
          Xk = new Array(tk),
          bk = new Array(tk);
        for (Bk = 0; Bk < tk; ++Bk) Rk = Ck(Fk[Bk]), ak[Bk] = Rk.r || 0, Xk[Bk] = Rk.g || 0, bk[Bk] = Rk.b || 0;
        return ak = kk(ak), Xk = kk(Xk), bk = kk(bk), Rk.opacity = 1,
          function(kk) {
            return Rk.r = ak(kk), Rk.g = Xk(kk), Rk.b = bk(kk), Rk + ""
          }
      }
    }
    dF((function(kk) {
      var Fk = kk.length - 1;
      return function(Bk) {
        var Rk = Bk <= 0 ? Bk = 0 : Bk >= 1 ? (Bk = 1, Fk - 1) : Math.floor(Bk * Fk),
          tk = kk[Rk],
          ak = kk[Rk + 1],
          Xk = Rk > 0 ? kk[Rk - 1] : 2 * tk - ak,
          bk = Rk < Fk - 1 ? kk[Rk + 2] : 2 * ak - tk;
        return RF((Bk - Rk / Fk) * Fk, Xk, tk, ak, bk)
      }
    })), dF((function(kk) {
      var Fk = kk.length;
      return function(Bk) {
        var Rk = Math.floor(((Bk %= 1) < 0 ? ++Bk : Bk) * Fk),
          tk = kk[(Rk + Fk - 1) % Fk],
          ak = kk[Rk % Fk],
          Xk = kk[(Rk + 1) % Fk],
          bk = kk[(Rk + 2) % Fk];
        return RF((Bk - Rk / Fk) * Fk, tk, ak, Xk, bk)
      }
    }));

    function sF(kk, Fk) {
      var Bk, Rk = Fk ? Fk.length : 0,
        tk = kk ? Math.min(Rk, kk.length) : 0,
        ak = new Array(tk),
        Xk = new Array(Rk);
      for (Bk = 0; Bk < tk; ++Bk) ak[Bk] = WF(kk[Bk], Fk[Bk]);
      for (; Bk < Rk; ++Bk) Xk[Bk] = Fk[Bk];
      return function(kk) {
        for (Bk = 0; Bk < tk; ++Bk) Xk[Bk] = ak[Bk](kk);
        return Xk
      }
    }

    function VF(kk, Fk) {
      var Bk = new Date;
      return kk = +kk, Fk = +Fk,
        function(Rk) {
          return Bk.setTime(kk * (1 - Rk) + Fk * Rk), Bk
        }
    }

    function JF(kk, Fk) {
      return kk = +kk, Fk = +Fk,
        function(Bk) {
          return kk * (1 - Bk) + Fk * Bk
        }
    }

    function AF(kk, Fk) {
      var Bk, Rk = {},
        tk = {};
      for (Bk in null !== kk && "object" === typeof kk || (kk = {}), null !== Fk && "object" === typeof Fk || (Fk = {}), Fk) Bk in kk ? Rk[Bk] = WF(kk[Bk], Fk[Bk]) : tk[Bk] = Fk[Bk];
      return function(kk) {
        for (Bk in Rk) tk[Bk] = Rk[Bk](kk);
        return tk
      }
    }
    var eF = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      yF = new RegExp(eF.source, "g");

    function fF(kk, Fk) {
      var Bk, Rk, tk, ak = eF.lastIndex = yF.lastIndex = 0,
        Xk = -1,
        bk = [],
        wk = [];
      for (kk += "", Fk += "";
        (Bk = eF.exec(kk)) && (Rk = yF.exec(Fk));)(tk = Rk.index) > ak && (tk = Fk.slice(ak, tk), bk[Xk] ? bk[Xk] += tk : bk[++Xk] = tk), (Bk = Bk[0]) === (Rk = Rk[0]) ? bk[Xk] ? bk[Xk] += Rk : bk[++Xk] = Rk : (bk[++Xk] = null, wk.push({
        i: Xk,
        x: JF(Bk, Rk)
      })), ak = yF.lastIndex;
      return ak < Fk.length && (tk = Fk.slice(ak), bk[Xk] ? bk[Xk] += tk : bk[++Xk] = tk), bk.length < 2 ? wk[0] ? function(kk) {
        return function(Fk) {
          return kk(Fk) + ""
        }
      }(wk[0].x) : function(kk) {
        return function() {
          return kk
        }
      }(Fk) : (Fk = wk.length, function(kk) {
        for (var Bk, Rk = 0; Rk < Fk; ++Rk) bk[(Bk = wk[Rk]).i] = Bk.x(kk);
        return bk.join("")
      })
    }

    function mF(kk, Fk) {
      Fk || (Fk = []);
      var Bk, Rk = kk ? Math.min(Fk.length, kk.length) : 0,
        tk = Fk.slice();
      return function(ak) {
        for (Bk = 0; Bk < Rk; ++Bk) tk[Bk] = kk[Bk] * (1 - ak) + Fk[Bk] * ak;
        return tk
      }
    }

    function WF(kk, Fk) {
      var Bk, Rk, tk = typeof Fk;
      return null == Fk || "boolean" === tk ? tF(Fk) : ("number" === tk ? JF : "string" === tk ? (Bk = Pk(Fk)) ? (Fk = Bk, wF) : fF : Fk instanceof Pk ? wF : Fk instanceof Date ? VF : (Rk = Fk, !ArrayBuffer.isView(Rk) || Rk instanceof DataView ? Array.isArray(Fk) ? sF : "function" !== typeof Fk.valueOf && "function" !== typeof Fk.toString || isNaN(Fk) ? AF : JF : mF))(kk, Fk)
    }

    function vF(kk, Fk) {
      return kk = +kk, Fk = +Fk,
        function(Bk) {
          return Math.round(kk * (1 - Bk) + Fk * Bk)
        }
    }

    function iF(kk) {
      return +kk
    }
    var YF = [0, 1];

    function oF(kk) {
      return kk
    }

    function LF(kk, Fk) {
      return (Fk -= kk = +kk) ? function(Bk) {
        return (Bk - kk) / Fk
      } : (Bk = isNaN(Fk) ? NaN : .5, function() {
        return Bk
      });
      var Bk
    }

    function OF(kk, Fk, Bk) {
      var Rk = kk[0],
        tk = kk[1],
        ak = Fk[0],
        Xk = Fk[1];
      return tk < Rk ? (Rk = LF(tk, Rk), ak = Bk(Xk, ak)) : (Rk = LF(Rk, tk), ak = Bk(ak, Xk)),
        function(kk) {
          return ak(Rk(kk))
        }
    }

    function EF(kk, Fk, Bk) {
      var Rk = Math.min(kk.length, Fk.length) - 1,
        tk = new Array(Rk),
        ak = new Array(Rk),
        Xk = -1;
      for (kk[Rk] < kk[0] && (kk = kk.slice().reverse(), Fk = Fk.slice().reverse()); ++Xk < Rk;) tk[Xk] = LF(kk[Xk], kk[Xk + 1]), ak[Xk] = Bk(Fk[Xk], Fk[Xk + 1]);
      return function(Fk) {
        var Bk = vk(kk, Fk, 1, Rk) - 1;
        return ak[Bk](tk[Bk](Fk))
      }
    }

    function SF(kk, Fk) {
      return Fk.domain(kk.domain()).range(kk.range()).interpolate(kk.interpolate()).clamp(kk.clamp()).unknown(kk.unknown())
    }

    function NF() {
      var kk, Fk, Bk, Rk, tk, ak, Xk = YF,
        bk = YF,
        wk = WF,
        dk = oF;

      function sk() {
        var kk = Math.min(Xk.length, bk.length);
        return dk !== oF && (dk = function(kk, Fk) {
          var Bk;
          return kk > Fk && (Bk = kk, kk = Fk, Fk = Bk),
            function(Bk) {
              return Math.max(kk, Math.min(Fk, Bk))
            }
        }(Xk[0], Xk[kk - 1])), Rk = kk > 2 ? EF : OF, tk = ak = null, Vk
      }

      function Vk(Fk) {
        return null == Fk || isNaN(Fk = +Fk) ? Bk : (tk || (tk = Rk(Xk.map(kk), bk, wk)))(kk(dk(Fk)))
      }
      return Vk.invert = function(Bk) {
          return dk(Fk((ak || (ak = Rk(bk, Xk.map(kk), JF)))(Bk)))
        }, Vk.domain = function(kk) {
          return arguments.length ? (Xk = Array.from(kk, iF), sk()) : Xk.slice()
        }, Vk.range = function(kk) {
          return arguments.length ? (bk = Array.from(kk), sk()) : bk.slice()
        }, Vk.rangeRound = function(kk) {
          return bk = Array.from(kk), wk = vF, sk()
        }, Vk.clamp = function(kk) {
          return arguments.length ? (dk = !!kk || oF, sk()) : dk !== oF
        }, Vk.interpolate = function(kk) {
          return arguments.length ? (wk = kk, sk()) : wk
        }, Vk.unknown = function(kk) {
          return arguments.length ? (Bk = kk, Vk) : Bk
        },
        function(Bk, Rk) {
          return kk = Bk, Fk = Rk, sk()
        }
    }

    function HF() {
      return NF()(oF, oF)
    }
    var uF, MF = Bk(5846),
      gF = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function UF(kk) {
      if (!(Fk = gF.exec(kk))) throw new Error("invalid format: " + kk);
      var Fk;
      return new cF({
        fill: Fk[1],
        align: Fk[2],
        sign: Fk[3],
        symbol: Fk[4],
        zero: Fk[5],
        width: Fk[6],
        comma: Fk[7],
        precision: Fk[8] && Fk[8].slice(1),
        trim: Fk[9],
        type: Fk[10]
      })
    }

    function cF(kk) {
      this.fill = void 0 === kk.fill ? " " : kk.fill + "", this.align = void 0 === kk.align ? ">" : kk.align + "", this.sign = void 0 === kk.sign ? "-" : kk.sign + "", this.symbol = void 0 === kk.symbol ? "" : kk.symbol + "", this.zero = !!kk.zero, this.width = void 0 === kk.width ? void 0 : +kk.width, this.comma = !!kk.comma, this.precision = void 0 === kk.precision ? void 0 : +kk.precision, this.trim = !!kk.trim, this.type = void 0 === kk.type ? "" : kk.type + ""
    }

    function GF(kk, Fk) {
      if (!isFinite(kk) || 0 === kk) return null;
      var Bk = (kk = Fk ? kk.toExponential(Fk - 1) : kk.toExponential()).indexOf("e"),
        Rk = kk.slice(0, Bk);
      return [Rk.length > 1 ? Rk[0] + Rk.slice(2) : Rk, +kk.slice(Bk + 1)]
    }

    function TF(kk) {
      return (kk = GF(Math.abs(kk))) ? kk[1] : NaN
    }

    function rF(kk, Fk) {
      var Bk = GF(kk, Fk);
      if (!Bk) return kk + "";
      var Rk = Bk[0],
        tk = Bk[1];
      return tk < 0 ? "0." + new Array(-tk).join("0") + Rk : Rk.length > tk + 1 ? Rk.slice(0, tk + 1) + "." + Rk.slice(tk + 1) : Rk + new Array(tk - Rk.length + 2).join("0")
    }
    UF.prototype = cF.prototype, cF.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const DF = {
      "%": (kk, Fk) => (100 * kk).toFixed(Fk),
      b: kk => Math.round(kk).toString(2),
      c: kk => kk + "",
      d: function(kk) {
        return Math.abs(kk = Math.round(kk)) >= 1e21 ? kk.toLocaleString("en").replace(/,/g, "") : kk.toString(10)
      },
      e: (kk, Fk) => kk.toExponential(Fk),
      f: (kk, Fk) => kk.toFixed(Fk),
      g: (kk, Fk) => kk.toPrecision(Fk),
      o: kk => Math.round(kk).toString(8),
      p: (kk, Fk) => rF(100 * kk, Fk),
      r: rF,
      s: function(kk, Fk) {
        var Bk = GF(kk, Fk);
        if (!Bk) return uF = void 0, kk.toPrecision(Fk);
        var Rk = Bk[0],
          tk = Bk[1],
          ak = tk - (uF = 3 * Math.max(-8, Math.min(8, Math.floor(tk / 3)))) + 1,
          Xk = Rk.length;
        return ak === Xk ? Rk : ak > Xk ? Rk + new Array(ak - Xk + 1).join("0") : ak > 0 ? Rk.slice(0, ak) + "." + Rk.slice(ak) : "0." + new Array(1 - ak).join("0") + GF(kk, Math.max(0, Fk + ak - 1))[0]
      },
      X: kk => Math.round(kk).toString(16).toUpperCase(),
      x: kk => Math.round(kk).toString(16)
    };

    function zF(kk) {
      return kk
    }
    var PF, hF, qF, CF = Array.prototype.map,
      ZF = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function pF(kk) {
      var Fk, Bk, Rk = void 0 === kk.grouping || void 0 === kk.thousands ? zF : (Fk = CF.call(kk.grouping, Number), Bk = kk.thousands + "", function(kk, Rk) {
          for (var tk = kk.length, ak = [], Xk = 0, bk = Fk[0], wk = 0; tk > 0 && bk > 0 && (wk + bk + 1 > Rk && (bk = Math.max(1, Rk - wk)), ak.push(kk.substring(tk -= bk, tk + bk)), !((wk += bk + 1) > Rk));) bk = Fk[Xk = (Xk + 1) % Fk.length];
          return ak.reverse().join(Bk)
        }),
        tk = void 0 === kk.currency ? "" : kk.currency[0] + "",
        ak = void 0 === kk.currency ? "" : kk.currency[1] + "",
        Xk = void 0 === kk.decimal ? "." : kk.decimal + "",
        bk = void 0 === kk.numerals ? zF : function(kk) {
          return function(Fk) {
            return Fk.replace(/[0-9]/g, (function(Fk) {
              return kk[+Fk]
            }))
          }
        }(CF.call(kk.numerals, String)),
        wk = void 0 === kk.percent ? "%" : kk.percent + "",
        dk = void 0 === kk.minus ? "\u2212" : kk.minus + "",
        sk = void 0 === kk.nan ? "NaN" : kk.nan + "";

      function Vk(kk, Fk) {
        var Bk = (kk = UF(kk)).fill,
          Vk = kk.align,
          Jk = kk.sign,
          Ak = kk.symbol,
          ek = kk.zero,
          yk = kk.width,
          fk = kk.comma,
          mk = kk.precision,
          Wk = kk.trim,
          vk = kk.type;
        "n" === vk ? (fk = !0, vk = "g") : DF[vk] || (void 0 === mk && (mk = 12), Wk = !0, vk = "g"), (ek || "0" === Bk && "=" === Vk) && (ek = !0, Bk = "0", Vk = "=");
        var ik = (Fk && void 0 !== Fk.prefix ? Fk.prefix : "") + ("$" === Ak ? tk : "#" === Ak && /[boxX]/.test(vk) ? "0" + vk.toLowerCase() : ""),
          Yk = ("$" === Ak ? ak : /[%p]/.test(vk) ? wk : "") + (Fk && void 0 !== Fk.suffix ? Fk.suffix : ""),
          Lk = DF[vk],
          Ok = /[defgprs%]/.test(vk);

        function Ek(kk) {
          var Fk, tk, ak, wk = ik,
            Ak = Yk;
          if ("c" === vk) Ak = Lk(kk) + Ak, kk = "";
          else {
            var Ek = (kk = +kk) < 0 || 1 / kk < 0;
            if (kk = isNaN(kk) ? sk : Lk(Math.abs(kk), mk), Wk && (kk = function(kk) {
                kk: for (var Fk, Bk = kk.length, Rk = 1, tk = -1; Rk < Bk; ++Rk) switch (kk[Rk]) {
                  case ".":
                    tk = Fk = Rk;
                    break;
                  case "0":
                    0 === tk && (tk = Rk), Fk = Rk;
                    break;
                  default:
                    if (!+kk[Rk]) break kk;
                    tk > 0 && (tk = 0)
                }
                return tk > 0 ? kk.slice(0, tk) + kk.slice(Fk + 1) : kk
              }(kk)), Ek && 0 === +kk && "+" !== Jk && (Ek = !1), wk = (Ek ? "(" === Jk ? Jk : dk : "-" === Jk || "(" === Jk ? "" : Jk) + wk, Ak = ("s" !== vk || isNaN(kk) || void 0 === uF ? "" : ZF[8 + uF / 3]) + Ak + (Ek && "(" === Jk ? ")" : ""), Ok)
              for (Fk = -1, tk = kk.length; ++Fk < tk;)
                if (48 > (ak = kk.charCodeAt(Fk)) || ak > 57) {
                  Ak = (46 === ak ? Xk + kk.slice(Fk + 1) : kk.slice(Fk)) + Ak, kk = kk.slice(0, Fk);
                  break
                }
          }
          fk && !ek && (kk = Rk(kk, 1 / 0));
          var Sk = wk.length + kk.length + Ak.length,
            Nk = Sk < yk ? new Array(yk - Sk + 1).join(Bk) : "";
          switch (fk && ek && (kk = Rk(Nk + kk, Nk.length ? yk - Ak.length : 1 / 0), Nk = ""), Vk) {
            case "<":
              kk = wk + kk + Ak + Nk;
              break;
            case "=":
              kk = wk + Nk + kk + Ak;
              break;
            case "^":
              kk = Nk.slice(0, Sk = Nk.length >> 1) + wk + kk + Ak + Nk.slice(Sk);
              break;
            default:
              kk = Nk + wk + kk + Ak
          }
          return bk(kk)
        }
        return mk = void 0 === mk ? 6 : /[gprs]/.test(vk) ? Math.max(1, Math.min(21, mk)) : Math.max(0, Math.min(20, mk)), Ek.toString = function() {
          return kk + ""
        }, Ek
      }
      return {
        format: Vk,
        formatPrefix: function(kk, Fk) {
          var Bk = 3 * Math.max(-8, Math.min(8, Math.floor(TF(Fk) / 3))),
            Rk = Math.pow(10, -Bk),
            tk = Vk(((kk = UF(kk)).type = "f", kk), {
              suffix: ZF[8 + Bk / 3]
            });
          return function(kk) {
            return tk(Rk * kk)
          }
        }
      }
    }

    function KF(kk, Fk, Bk, Rk) {
      var tk, ak = Vk(kk, Fk, Bk);
      switch ((Rk = UF(null == Rk ? ",f" : Rk)).type) {
        case "s":
          var Xk = Math.max(Math.abs(kk), Math.abs(Fk));
          return null != Rk.precision || isNaN(tk = function(kk, Fk) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(TF(Fk) / 3))) - TF(Math.abs(kk)))
          }(ak, Xk)) || (Rk.precision = tk), qF(Rk, Xk);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != Rk.precision || isNaN(tk = function(kk, Fk) {
            return kk = Math.abs(kk), Fk = Math.abs(Fk) - kk, Math.max(0, TF(Fk) - TF(kk)) + 1
          }(ak, Math.max(Math.abs(kk), Math.abs(Fk)))) || (Rk.precision = tk - ("e" === Rk.type));
          break;
        case "f":
        case "%":
          null != Rk.precision || isNaN(tk = function(kk) {
            return Math.max(0, -TF(Math.abs(kk)))
          }(ak)) || (Rk.precision = tk - 2 * ("%" === Rk.type))
      }
      return hF(Rk)
    }

    function xF(kk) {
      var Fk = kk.domain;
      return kk.ticks = function(kk) {
        var Bk = Fk();
        return dk(Bk[0], Bk[Bk.length - 1], null == kk ? 10 : kk)
      }, kk.tickFormat = function(kk, Bk) {
        var Rk = Fk();
        return KF(Rk[0], Rk[Rk.length - 1], null == kk ? 10 : kk, Bk)
      }, kk.nice = function(Bk) {
        null == Bk && (Bk = 10);
        var Rk, tk, ak = Fk(),
          Xk = 0,
          bk = ak.length - 1,
          wk = ak[Xk],
          dk = ak[bk],
          Vk = 10;
        for (dk < wk && (tk = wk, wk = dk, dk = tk, tk = Xk, Xk = bk, bk = tk); Vk-- > 0;) {
          if ((tk = sk(wk, dk, Bk)) === Rk) return ak[Xk] = wk, ak[bk] = dk, Fk(ak);
          if (tk > 0) wk = Math.floor(wk / tk) * tk, dk = Math.ceil(dk / tk) * tk;
          else {
            if (!(tk < 0)) break;
            wk = Math.ceil(wk * tk) / tk, dk = Math.floor(dk * tk) / tk
          }
          Rk = tk
        }
        return kk
      }, kk
    }

    function jF() {
      var kk = HF();
      return kk.copy = function() {
        return SF(kk, jF())
      }, MF.e.apply(kk, arguments), xF(kk)
    }

    function lF(kk) {
      var Fk;

      function Bk(kk) {
        return null == kk || isNaN(kk = +kk) ? Fk : kk
      }
      return Bk.invert = Bk, Bk.domain = Bk.range = function(Fk) {
        return arguments.length ? (kk = Array.from(Fk, iF), Bk) : kk.slice()
      }, Bk.unknown = function(kk) {
        return arguments.length ? (Fk = kk, Bk) : Fk
      }, Bk.copy = function() {
        return lF(kk).unknown(Fk)
      }, kk = arguments.length ? Array.from(kk, iF) : [0, 1], xF(Bk)
    }

    function nF(kk, Fk) {
      var Bk, Rk = 0,
        tk = (kk = kk.slice()).length - 1,
        ak = kk[Rk],
        Xk = kk[tk];
      return Xk < ak && (Bk = Rk, Rk = tk, tk = Bk, Bk = ak, ak = Xk, Xk = Bk), kk[Rk] = Fk.floor(ak), kk[tk] = Fk.ceil(Xk), kk
    }

    function IF(kk) {
      return Math.log(kk)
    }

    function QF(kk) {
      return Math.exp(kk)
    }

    function kB(kk) {
      return -Math.log(-kk)
    }

    function FB(kk) {
      return -Math.exp(-kk)
    }

    function BB(kk) {
      return isFinite(kk) ? +("1e" + kk) : kk < 0 ? 0 : kk
    }

    function RB(kk) {
      return (Fk, Bk) => -kk(-Fk, Bk)
    }

    function tB(kk) {
      const Fk = kk(IF, QF),
        Bk = Fk.domain;
      let Rk, tk, ak = 10;

      function Xk() {
        return Rk = function(kk) {
          return kk === Math.E ? Math.log : 10 === kk && Math.log10 || 2 === kk && Math.log2 || (kk = Math.log(kk), Fk => Math.log(Fk) / kk)
        }(ak), tk = function(kk) {
          return 10 === kk ? BB : kk === Math.E ? Math.exp : Fk => Math.pow(kk, Fk)
        }(ak), Bk()[0] < 0 ? (Rk = RB(Rk), tk = RB(tk), kk(kB, FB)) : kk(IF, QF), Fk
      }
      return Fk.base = function(kk) {
        return arguments.length ? (ak = +kk, Xk()) : ak
      }, Fk.domain = function(kk) {
        return arguments.length ? (Bk(kk), Xk()) : Bk()
      }, Fk.ticks = kk => {
        const Fk = Bk();
        let Xk = Fk[0],
          bk = Fk[Fk.length - 1];
        const wk = bk < Xk;
        wk && ([Xk, bk] = [bk, Xk]);
        let sk, Vk, Jk = Rk(Xk),
          Ak = Rk(bk);
        const ek = null == kk ? 10 : +kk;
        let yk = [];
        if (!(ak % 1) && Ak - Jk < ek) {
          if (Jk = Math.floor(Jk), Ak = Math.ceil(Ak), Xk > 0) {
            for (; Jk <= Ak; ++Jk)
              for (sk = 1; sk < ak; ++sk)
                if (Vk = Jk < 0 ? sk / tk(-Jk) : sk * tk(Jk), !(Vk < Xk)) {
                  if (Vk > bk) break;
                  yk.push(Vk)
                }
          } else
            for (; Jk <= Ak; ++Jk)
              for (sk = ak - 1; sk >= 1; --sk)
                if (Vk = Jk > 0 ? sk / tk(-Jk) : sk * tk(Jk), !(Vk < Xk)) {
                  if (Vk > bk) break;
                  yk.push(Vk)
                } 2 * yk.length < ek && (yk = dk(Xk, bk, ek))
        } else yk = dk(Jk, Ak, Math.min(Ak - Jk, ek)).map(tk);
        return wk ? yk.reverse() : yk
      }, Fk.tickFormat = (kk, Bk) => {
        if (null == kk && (kk = 10), null == Bk && (Bk = 10 === ak ? "s" : ","), "function" !== typeof Bk && (ak % 1 || null != (Bk = UF(Bk)).precision || (Bk.trim = !0), Bk = hF(Bk)), kk === 1 / 0) return Bk;
        const Xk = Math.max(1, ak * kk / Fk.ticks().length);
        return kk => {
          let Fk = kk / tk(Math.round(Rk(kk)));
          return Fk * ak < ak - .5 && (Fk *= ak), Fk <= Xk ? Bk(kk) : ""
        }
      }, Fk.nice = () => Bk(nF(Bk(), {
        floor: kk => tk(Math.floor(Rk(kk))),
        ceil: kk => tk(Math.ceil(Rk(kk)))
      })), Fk
    }

    function aB() {
      const kk = tB(NF()).domain([1, 10]);
      return kk.copy = () => SF(kk, aB()).base(kk.base()), MF.e.apply(kk, arguments), kk
    }

    function XB(kk) {
      return function(Fk) {
        return Math.sign(Fk) * Math.log1p(Math.abs(Fk / kk))
      }
    }

    function bB(kk) {
      return function(Fk) {
        return Math.sign(Fk) * Math.expm1(Math.abs(Fk)) * kk
      }
    }

    function wB(kk) {
      var Fk = 1,
        Bk = kk(XB(Fk), bB(Fk));
      return Bk.constant = function(Bk) {
        return arguments.length ? kk(XB(Fk = +Bk), bB(Fk)) : Fk
      }, xF(Bk)
    }

    function dB() {
      var kk = wB(NF());
      return kk.copy = function() {
        return SF(kk, dB()).constant(kk.constant())
      }, MF.e.apply(kk, arguments)
    }
    PF = pF({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), hF = PF.format, qF = PF.formatPrefix;
    var sB = Bk(5850);

    function VB(kk) {
      return function(Fk) {
        return Fk < 0 ? -Math.pow(-Fk, kk) : Math.pow(Fk, kk)
      }
    }

    function JB(kk) {
      return kk < 0 ? -Math.sqrt(-kk) : Math.sqrt(kk)
    }

    function AB(kk) {
      return kk < 0 ? -kk * kk : kk * kk
    }

    function eB(kk) {
      var Fk = kk(oF, oF),
        Bk = 1;
      return Fk.exponent = function(Fk) {
        return arguments.length ? 1 === (Bk = +Fk) ? kk(oF, oF) : .5 === Bk ? kk(JB, AB) : kk(VB(Bk), VB(1 / Bk)) : Bk
      }, xF(Fk)
    }

    function yB() {
      var kk = eB(NF());
      return kk.copy = function() {
        return SF(kk, yB()).exponent(kk.exponent())
      }, MF.e.apply(kk, arguments), kk
    }

    function fB() {
      return yB.apply(null, arguments).exponent(.5)
    }

    function mB(kk) {
      return Math.sign(kk) * kk * kk
    }

    function WB() {
      var kk, Fk = HF(),
        Bk = [0, 1],
        Rk = !1;

      function tk(Bk) {
        var tk = function(kk) {
          return Math.sign(kk) * Math.sqrt(Math.abs(kk))
        }(Fk(Bk));
        return isNaN(tk) ? kk : Rk ? Math.round(tk) : tk
      }
      return tk.invert = function(kk) {
        return Fk.invert(mB(kk))
      }, tk.domain = function(kk) {
        return arguments.length ? (Fk.domain(kk), tk) : Fk.domain()
      }, tk.range = function(kk) {
        return arguments.length ? (Fk.range((Bk = Array.from(kk, iF)).map(mB)), tk) : Bk.slice()
      }, tk.rangeRound = function(kk) {
        return tk.range(kk).round(!0)
      }, tk.round = function(kk) {
        return arguments.length ? (Rk = !!kk, tk) : Rk
      }, tk.clamp = function(kk) {
        return arguments.length ? (Fk.clamp(kk), tk) : Fk.clamp()
      }, tk.unknown = function(Fk) {
        return arguments.length ? (kk = Fk, tk) : kk
      }, tk.copy = function() {
        return WB(Fk.domain(), Bk).round(Rk).clamp(Fk.clamp()).unknown(kk)
      }, MF.e.apply(tk, arguments), xF(tk)
    }

    function vB(kk, Fk) {
      let Bk;
      if (void 0 === Fk)
        for (const Rk of kk) null != Rk && (Bk < Rk || void 0 === Bk && Rk >= Rk) && (Bk = Rk);
      else {
        let Rk = -1;
        for (let tk of kk) null != (tk = Fk(tk, ++Rk, kk)) && (Bk < tk || void 0 === Bk && tk >= tk) && (Bk = tk)
      }
      return Bk
    }

    function iB(kk, Fk) {
      let Bk;
      if (void 0 === Fk)
        for (const Rk of kk) null != Rk && (Bk > Rk || void 0 === Bk && Rk >= Rk) && (Bk = Rk);
      else {
        let Rk = -1;
        for (let tk of kk) null != (tk = Fk(tk, ++Rk, kk)) && (Bk > tk || void 0 === Bk && tk >= tk) && (Bk = tk)
      }
      return Bk
    }

    function YB() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jk;
      if (kk === Jk) return oB;
      if ("function" !== typeof kk) throw new TypeError("compare is not a function");
      return (Fk, Bk) => {
        const Rk = kk(Fk, Bk);
        return Rk || 0 === Rk ? Rk : (0 === kk(Bk, Bk)) - (0 === kk(Fk, Fk))
      }
    }

    function oB(kk, Fk) {
      return (null == kk || !(kk >= kk)) - (null == Fk || !(Fk >= Fk)) || (kk < Fk ? -1 : kk > Fk ? 1 : 0)
    }

    function LB(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        tk = arguments.length > 4 ? arguments[4] : void 0;
      if (Fk = Math.floor(Fk), Bk = Math.floor(Math.max(0, Bk)), Rk = Math.floor(Math.min(kk.length - 1, Rk)), !(Bk <= Fk && Fk <= Rk)) return kk;
      for (tk = void 0 === tk ? oB : YB(tk); Rk > Bk;) {
        if (Rk - Bk > 600) {
          const ak = Rk - Bk + 1,
            Xk = Fk - Bk + 1,
            bk = Math.log(ak),
            wk = .5 * Math.exp(2 * bk / 3),
            dk = .5 * Math.sqrt(bk * wk * (ak - wk) / ak) * (Xk - ak / 2 < 0 ? -1 : 1);
          LB(kk, Fk, Math.max(Bk, Math.floor(Fk - Xk * wk / ak + dk)), Math.min(Rk, Math.floor(Fk + (ak - Xk) * wk / ak + dk)), tk)
        }
        const ak = kk[Fk];
        let Xk = Bk,
          bk = Rk;
        for (OB(kk, Bk, Fk), tk(kk[Rk], ak) > 0 && OB(kk, Bk, Rk); Xk < bk;) {
          for (OB(kk, Xk, bk), ++Xk, --bk; tk(kk[Xk], ak) < 0;) ++Xk;
          for (; tk(kk[bk], ak) > 0;) --bk
        }
        0 === tk(kk[Bk], ak) ? OB(kk, Bk, bk) : (++bk, OB(kk, bk, Rk)), bk <= Fk && (Bk = bk + 1), Fk <= bk && (Rk = bk - 1)
      }
      return kk
    }

    function OB(kk, Fk, Bk) {
      const Rk = kk[Fk];
      kk[Fk] = kk[Bk], kk[Bk] = Rk
    }

    function EB(kk, Fk, Bk) {
      if (kk = Float64Array.from(function*(kk, Fk) {
          if (void 0 === Fk)
            for (let Bk of kk) null != Bk && (Bk = +Bk) >= Bk && (yield Bk);
          else {
            let Bk = -1;
            for (let Rk of kk) null != (Rk = Fk(Rk, ++Bk, kk)) && (Rk = +Rk) >= Rk && (yield Rk)
          }
        }(kk, Bk)), (Rk = kk.length) && !isNaN(Fk = +Fk)) {
        if (Fk <= 0 || Rk < 2) return iB(kk);
        if (Fk >= 1) return vB(kk);
        var Rk, tk = (Rk - 1) * Fk,
          ak = Math.floor(tk),
          Xk = vB(LB(kk, ak).subarray(0, ak + 1));
        return Xk + (iB(kk.subarray(ak + 1)) - Xk) * (tk - ak)
      }
    }

    function SB(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fk;
      if ((Rk = kk.length) && !isNaN(Fk = +Fk)) {
        if (Fk <= 0 || Rk < 2) return +Bk(kk[0], 0, kk);
        if (Fk >= 1) return +Bk(kk[Rk - 1], Rk - 1, kk);
        var Rk, tk = (Rk - 1) * Fk,
          ak = Math.floor(tk),
          Xk = +Bk(kk[ak], ak, kk);
        return Xk + (+Bk(kk[ak + 1], ak + 1, kk) - Xk) * (tk - ak)
      }
    }

    function NB() {
      var kk, Fk = [],
        Bk = [],
        Rk = [];

      function tk() {
        var kk = 0,
          tk = Math.max(1, Bk.length);
        for (Rk = new Array(tk - 1); ++kk < tk;) Rk[kk - 1] = SB(Fk, kk / tk);
        return ak
      }

      function ak(Fk) {
        return null == Fk || isNaN(Fk = +Fk) ? kk : Bk[vk(Rk, Fk)]
      }
      return ak.invertExtent = function(kk) {
        var tk = Bk.indexOf(kk);
        return tk < 0 ? [NaN, NaN] : [tk > 0 ? Rk[tk - 1] : Fk[0], tk < Rk.length ? Rk[tk] : Fk[Fk.length - 1]]
      }, ak.domain = function(kk) {
        if (!arguments.length) return Fk.slice();
        Fk = [];
        for (let Bk of kk) null == Bk || isNaN(Bk = +Bk) || Fk.push(Bk);
        return Fk.sort(Jk), tk()
      }, ak.range = function(kk) {
        return arguments.length ? (Bk = Array.from(kk), tk()) : Bk.slice()
      }, ak.unknown = function(Fk) {
        return arguments.length ? (kk = Fk, ak) : kk
      }, ak.quantiles = function() {
        return Rk.slice()
      }, ak.copy = function() {
        return NB().domain(Fk).range(Bk).unknown(kk)
      }, MF.e.apply(ak, arguments)
    }

    function HB() {
      var kk, Fk = 0,
        Bk = 1,
        Rk = 1,
        tk = [.5],
        ak = [0, 1];

      function Xk(Fk) {
        return null != Fk && Fk <= Fk ? ak[vk(tk, Fk, 0, Rk)] : kk
      }

      function bk() {
        var kk = -1;
        for (tk = new Array(Rk); ++kk < Rk;) tk[kk] = ((kk + 1) * Bk - (kk - Rk) * Fk) / (Rk + 1);
        return Xk
      }
      return Xk.domain = function(kk) {
        return arguments.length ? ([Fk, Bk] = kk, Fk = +Fk, Bk = +Bk, bk()) : [Fk, Bk]
      }, Xk.range = function(kk) {
        return arguments.length ? (Rk = (ak = Array.from(kk)).length - 1, bk()) : ak.slice()
      }, Xk.invertExtent = function(kk) {
        var Xk = ak.indexOf(kk);
        return Xk < 0 ? [NaN, NaN] : Xk < 1 ? [Fk, tk[0]] : Xk >= Rk ? [tk[Rk - 1], Bk] : [tk[Xk - 1], tk[Xk]]
      }, Xk.unknown = function(Fk) {
        return arguments.length ? (kk = Fk, Xk) : Xk
      }, Xk.thresholds = function() {
        return tk.slice()
      }, Xk.copy = function() {
        return HB().domain([Fk, Bk]).range(ak).unknown(kk)
      }, MF.e.apply(xF(Xk), arguments)
    }

    function uB() {
      var kk, Fk = [.5],
        Bk = [0, 1],
        Rk = 1;

      function tk(tk) {
        return null != tk && tk <= tk ? Bk[vk(Fk, tk, 0, Rk)] : kk
      }
      return tk.domain = function(kk) {
        return arguments.length ? (Fk = Array.from(kk), Rk = Math.min(Fk.length, Bk.length - 1), tk) : Fk.slice()
      }, tk.range = function(kk) {
        return arguments.length ? (Bk = Array.from(kk), Rk = Math.min(Fk.length, Bk.length - 1), tk) : Bk.slice()
      }, tk.invertExtent = function(kk) {
        var Rk = Bk.indexOf(kk);
        return [Fk[Rk - 1], Fk[Rk]]
      }, tk.unknown = function(Fk) {
        return arguments.length ? (kk = Fk, tk) : kk
      }, tk.copy = function() {
        return uB().domain(Fk).range(Bk).unknown(kk)
      }, MF.e.apply(tk, arguments)
    }
    const MB = 1e3,
      gB = 6e4,
      UB = 36e5,
      cB = 864e5,
      GB = 6048e5,
      TB = 2592e6,
      rB = 31536e6,
      DB = new Date,
      zB = new Date;

    function PB(kk, Fk, Bk, Rk) {
      function tk(Fk) {
        return kk(Fk = 0 === arguments.length ? new Date : new Date(+Fk)), Fk
      }
      return tk.floor = Fk => (kk(Fk = new Date(+Fk)), Fk), tk.ceil = Bk => (kk(Bk = new Date(Bk - 1)), Fk(Bk, 1), kk(Bk), Bk), tk.round = kk => {
        const Fk = tk(kk),
          Bk = tk.ceil(kk);
        return kk - Fk < Bk - kk ? Fk : Bk
      }, tk.offset = (kk, Bk) => (Fk(kk = new Date(+kk), null == Bk ? 1 : Math.floor(Bk)), kk), tk.range = (Bk, Rk, ak) => {
        const Xk = [];
        if (Bk = tk.ceil(Bk), ak = null == ak ? 1 : Math.floor(ak), !(Bk < Rk) || !(ak > 0)) return Xk;
        let bk;
        do {
          Xk.push(bk = new Date(+Bk)), Fk(Bk, ak), kk(Bk)
        } while (bk < Bk && Bk < Rk);
        return Xk
      }, tk.filter = Bk => PB((Fk => {
        if (Fk >= Fk)
          for (; kk(Fk), !Bk(Fk);) Fk.setTime(Fk - 1)
      }), ((kk, Rk) => {
        if (kk >= kk)
          if (Rk < 0)
            for (; ++Rk <= 0;)
              for (; Fk(kk, -1), !Bk(kk););
          else
            for (; --Rk >= 0;)
              for (; Fk(kk, 1), !Bk(kk););
      })), Bk && (tk.count = (Fk, Rk) => (DB.setTime(+Fk), zB.setTime(+Rk), kk(DB), kk(zB), Math.floor(Bk(DB, zB))), tk.every = kk => (kk = Math.floor(kk), isFinite(kk) && kk > 0 ? kk > 1 ? tk.filter(Rk ? Fk => Rk(Fk) % kk === 0 : Fk => tk.count(0, Fk) % kk === 0) : tk : null)), tk
    }
    const hB = PB((() => {}), ((kk, Fk) => {
      kk.setTime(+kk + Fk)
    }), ((kk, Fk) => Fk - kk));
    hB.every = kk => (kk = Math.floor(kk), isFinite(kk) && kk > 0 ? kk > 1 ? PB((Fk => {
      Fk.setTime(Math.floor(Fk / kk) * kk)
    }), ((Fk, Bk) => {
      Fk.setTime(+Fk + Bk * kk)
    }), ((Fk, Bk) => (Bk - Fk) / kk)) : hB : null);
    hB.range;
    const qB = PB((kk => {
        kk.setTime(kk - kk.getMilliseconds())
      }), ((kk, Fk) => {
        kk.setTime(+kk + Fk * MB)
      }), ((kk, Fk) => (Fk - kk) / MB), (kk => kk.getUTCSeconds())),
      CB = (qB.range, PB((kk => {
        kk.setTime(kk - kk.getMilliseconds() - kk.getSeconds() * MB)
      }), ((kk, Fk) => {
        kk.setTime(+kk + Fk * gB)
      }), ((kk, Fk) => (Fk - kk) / gB), (kk => kk.getMinutes()))),
      ZB = (CB.range, PB((kk => {
        kk.setUTCSeconds(0, 0)
      }), ((kk, Fk) => {
        kk.setTime(+kk + Fk * gB)
      }), ((kk, Fk) => (Fk - kk) / gB), (kk => kk.getUTCMinutes()))),
      pB = (ZB.range, PB((kk => {
        kk.setTime(kk - kk.getMilliseconds() - kk.getSeconds() * MB - kk.getMinutes() * gB)
      }), ((kk, Fk) => {
        kk.setTime(+kk + Fk * UB)
      }), ((kk, Fk) => (Fk - kk) / UB), (kk => kk.getHours()))),
      KB = (pB.range, PB((kk => {
        kk.setUTCMinutes(0, 0, 0)
      }), ((kk, Fk) => {
        kk.setTime(+kk + Fk * UB)
      }), ((kk, Fk) => (Fk - kk) / UB), (kk => kk.getUTCHours()))),
      xB = (KB.range, PB((kk => kk.setHours(0, 0, 0, 0)), ((kk, Fk) => kk.setDate(kk.getDate() + Fk)), ((kk, Fk) => (Fk - kk - (Fk.getTimezoneOffset() - kk.getTimezoneOffset()) * gB) / cB), (kk => kk.getDate() - 1))),
      jB = (xB.range, PB((kk => {
        kk.setUTCHours(0, 0, 0, 0)
      }), ((kk, Fk) => {
        kk.setUTCDate(kk.getUTCDate() + Fk)
      }), ((kk, Fk) => (Fk - kk) / cB), (kk => kk.getUTCDate() - 1))),
      lB = (jB.range, PB((kk => {
        kk.setUTCHours(0, 0, 0, 0)
      }), ((kk, Fk) => {
        kk.setUTCDate(kk.getUTCDate() + Fk)
      }), ((kk, Fk) => (Fk - kk) / cB), (kk => Math.floor(kk / cB))));
    lB.range;

    function nB(kk) {
      return PB((Fk => {
        Fk.setDate(Fk.getDate() - (Fk.getDay() + 7 - kk) % 7), Fk.setHours(0, 0, 0, 0)
      }), ((kk, Fk) => {
        kk.setDate(kk.getDate() + 7 * Fk)
      }), ((kk, Fk) => (Fk - kk - (Fk.getTimezoneOffset() - kk.getTimezoneOffset()) * gB) / GB))
    }
    const IB = nB(0),
      QB = nB(1),
      kR = nB(2),
      FR = nB(3),
      BR = nB(4),
      RR = nB(5),
      tR = nB(6);
    IB.range, QB.range, kR.range, FR.range, BR.range, RR.range, tR.range;

    function aR(kk) {
      return PB((Fk => {
        Fk.setUTCDate(Fk.getUTCDate() - (Fk.getUTCDay() + 7 - kk) % 7), Fk.setUTCHours(0, 0, 0, 0)
      }), ((kk, Fk) => {
        kk.setUTCDate(kk.getUTCDate() + 7 * Fk)
      }), ((kk, Fk) => (Fk - kk) / GB))
    }
    const XR = aR(0),
      bR = aR(1),
      wR = aR(2),
      dR = aR(3),
      sR = aR(4),
      VR = aR(5),
      JR = aR(6),
      AR = (XR.range, bR.range, wR.range, dR.range, sR.range, VR.range, JR.range, PB((kk => {
        kk.setDate(1), kk.setHours(0, 0, 0, 0)
      }), ((kk, Fk) => {
        kk.setMonth(kk.getMonth() + Fk)
      }), ((kk, Fk) => Fk.getMonth() - kk.getMonth() + 12 * (Fk.getFullYear() - kk.getFullYear())), (kk => kk.getMonth()))),
      eR = (AR.range, PB((kk => {
        kk.setUTCDate(1), kk.setUTCHours(0, 0, 0, 0)
      }), ((kk, Fk) => {
        kk.setUTCMonth(kk.getUTCMonth() + Fk)
      }), ((kk, Fk) => Fk.getUTCMonth() - kk.getUTCMonth() + 12 * (Fk.getUTCFullYear() - kk.getUTCFullYear())), (kk => kk.getUTCMonth()))),
      yR = (eR.range, PB((kk => {
        kk.setMonth(0, 1), kk.setHours(0, 0, 0, 0)
      }), ((kk, Fk) => {
        kk.setFullYear(kk.getFullYear() + Fk)
      }), ((kk, Fk) => Fk.getFullYear() - kk.getFullYear()), (kk => kk.getFullYear())));
    yR.every = kk => isFinite(kk = Math.floor(kk)) && kk > 0 ? PB((Fk => {
      Fk.setFullYear(Math.floor(Fk.getFullYear() / kk) * kk), Fk.setMonth(0, 1), Fk.setHours(0, 0, 0, 0)
    }), ((Fk, Bk) => {
      Fk.setFullYear(Fk.getFullYear() + Bk * kk)
    })) : null;
    yR.range;
    const fR = PB((kk => {
      kk.setUTCMonth(0, 1), kk.setUTCHours(0, 0, 0, 0)
    }), ((kk, Fk) => {
      kk.setUTCFullYear(kk.getUTCFullYear() + Fk)
    }), ((kk, Fk) => Fk.getUTCFullYear() - kk.getUTCFullYear()), (kk => kk.getUTCFullYear()));
    fR.every = kk => isFinite(kk = Math.floor(kk)) && kk > 0 ? PB((Fk => {
      Fk.setUTCFullYear(Math.floor(Fk.getUTCFullYear() / kk) * kk), Fk.setUTCMonth(0, 1), Fk.setUTCHours(0, 0, 0, 0)
    }), ((Fk, Bk) => {
      Fk.setUTCFullYear(Fk.getUTCFullYear() + Bk * kk)
    })) : null;
    fR.range;

    function mR(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = [
        [qB, 1, MB],
        [qB, 5, 5e3],
        [qB, 15, 15e3],
        [qB, 30, 3e4],
        [ak, 1, gB],
        [ak, 5, 3e5],
        [ak, 15, 9e5],
        [ak, 30, 18e5],
        [tk, 1, UB],
        [tk, 3, 108e5],
        [tk, 6, 216e5],
        [tk, 12, 432e5],
        [Rk, 1, cB],
        [Rk, 2, 1728e5],
        [Bk, 1, GB],
        [Fk, 1, TB],
        [Fk, 3, 7776e6],
        [kk, 1, rB]
      ];

      function bk(Fk, Bk, Rk) {
        const tk = Math.abs(Bk - Fk) / Rk,
          ak = ek((kk => {
            let [, , Fk] = kk;
            return Fk
          })).right(Xk, tk);
        if (ak === Xk.length) return kk.every(Vk(Fk / rB, Bk / rB, Rk));
        if (0 === ak) return hB.every(Math.max(Vk(Fk, Bk, Rk), 1));
        const [bk, wk] = Xk[tk / Xk[ak - 1][2] < Xk[ak][2] / tk ? ak - 1 : ak];
        return bk.every(wk)
      }
      return [function(kk, Fk, Bk) {
        const Rk = Fk < kk;
        Rk && ([kk, Fk] = [Fk, kk]);
        const tk = Bk && "function" === typeof Bk.range ? Bk : bk(kk, Fk, Bk),
          ak = tk ? tk.range(kk, +Fk + 1) : [];
        return Rk ? ak.reverse() : ak
      }, bk]
    }
    const [WR, vR] = mR(fR, eR, XR, lB, KB, ZB), [iR, YR] = mR(yR, AR, IB, xB, pB, CB);

    function oR(kk) {
      if (0 <= kk.y && kk.y < 100) {
        var Fk = new Date(-1, kk.m, kk.d, kk.H, kk.M, kk.S, kk.L);
        return Fk.setFullYear(kk.y), Fk
      }
      return new Date(kk.y, kk.m, kk.d, kk.H, kk.M, kk.S, kk.L)
    }

    function LR(kk) {
      if (0 <= kk.y && kk.y < 100) {
        var Fk = new Date(Date.UTC(-1, kk.m, kk.d, kk.H, kk.M, kk.S, kk.L));
        return Fk.setUTCFullYear(kk.y), Fk
      }
      return new Date(Date.UTC(kk.y, kk.m, kk.d, kk.H, kk.M, kk.S, kk.L))
    }

    function OR(kk, Fk, Bk) {
      return {
        y: kk,
        m: Fk,
        d: Bk,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var ER, SR, NR, HR = {
        "-": "",
        _: " ",
        0: "0"
      },
      uR = /^\s*\d+/,
      MR = /^%/,
      gR = /[\\^$*+?|[\]().{}]/g;

    function UR(kk, Fk, Bk) {
      var Rk = kk < 0 ? "-" : "",
        tk = (Rk ? -kk : kk) + "",
        ak = tk.length;
      return Rk + (ak < Bk ? new Array(Bk - ak + 1).join(Fk) + tk : tk)
    }

    function cR(kk) {
      return kk.replace(gR, "\\$&")
    }

    function GR(kk) {
      return new RegExp("^(?:" + kk.map(cR).join("|") + ")", "i")
    }

    function TR(kk) {
      return new Map(kk.map(((kk, Fk) => [kk.toLowerCase(), Fk])))
    }

    function rR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 1));
      return Rk ? (kk.w = +Rk[0], Bk + Rk[0].length) : -1
    }

    function DR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 1));
      return Rk ? (kk.u = +Rk[0], Bk + Rk[0].length) : -1
    }

    function zR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.U = +Rk[0], Bk + Rk[0].length) : -1
    }

    function PR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.V = +Rk[0], Bk + Rk[0].length) : -1
    }

    function hR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.W = +Rk[0], Bk + Rk[0].length) : -1
    }

    function qR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 4));
      return Rk ? (kk.y = +Rk[0], Bk + Rk[0].length) : -1
    }

    function CR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.y = +Rk[0] + (+Rk[0] > 68 ? 1900 : 2e3), Bk + Rk[0].length) : -1
    }

    function ZR(kk, Fk, Bk) {
      var Rk = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(Fk.slice(Bk, Bk + 6));
      return Rk ? (kk.Z = Rk[1] ? 0 : -(Rk[2] + (Rk[3] || "00")), Bk + Rk[0].length) : -1
    }

    function pR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 1));
      return Rk ? (kk.q = 3 * Rk[0] - 3, Bk + Rk[0].length) : -1
    }

    function KR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.m = Rk[0] - 1, Bk + Rk[0].length) : -1
    }

    function xR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.d = +Rk[0], Bk + Rk[0].length) : -1
    }

    function jR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 3));
      return Rk ? (kk.m = 0, kk.d = +Rk[0], Bk + Rk[0].length) : -1
    }

    function lR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.H = +Rk[0], Bk + Rk[0].length) : -1
    }

    function nR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.M = +Rk[0], Bk + Rk[0].length) : -1
    }

    function IR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 2));
      return Rk ? (kk.S = +Rk[0], Bk + Rk[0].length) : -1
    }

    function QR(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 3));
      return Rk ? (kk.L = +Rk[0], Bk + Rk[0].length) : -1
    }

    function kt(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk, Bk + 6));
      return Rk ? (kk.L = Math.floor(Rk[0] / 1e3), Bk + Rk[0].length) : -1
    }

    function Ft(kk, Fk, Bk) {
      var Rk = MR.exec(Fk.slice(Bk, Bk + 1));
      return Rk ? Bk + Rk[0].length : -1
    }

    function Bt(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk));
      return Rk ? (kk.Q = +Rk[0], Bk + Rk[0].length) : -1
    }

    function Rt(kk, Fk, Bk) {
      var Rk = uR.exec(Fk.slice(Bk));
      return Rk ? (kk.s = +Rk[0], Bk + Rk[0].length) : -1
    }

    function tt(kk, Fk) {
      return UR(kk.getDate(), Fk, 2)
    }

    function Xt(kk, Fk) {
      return UR(kk.getHours(), Fk, 2)
    }

    function bt(kk, Fk) {
      return UR(kk.getHours() % 12 || 12, Fk, 2)
    }

    function wt(kk, Fk) {
      return UR(1 + xB.count(yR(kk), kk), Fk, 3)
    }

    function dt(kk, Fk) {
      return UR(kk.getMilliseconds(), Fk, 3)
    }

    function st(kk, Fk) {
      return dt(kk, Fk) + "000"
    }

    function Vt(kk, Fk) {
      return UR(kk.getMonth() + 1, Fk, 2)
    }

    function Jt(kk, Fk) {
      return UR(kk.getMinutes(), Fk, 2)
    }

    function At(kk, Fk) {
      return UR(kk.getSeconds(), Fk, 2)
    }

    function et(kk) {
      var Fk = kk.getDay();
      return 0 === Fk ? 7 : Fk
    }

    function yt(kk, Fk) {
      return UR(IB.count(yR(kk) - 1, kk), Fk, 2)
    }

    function ft(kk) {
      var Fk = kk.getDay();
      return Fk >= 4 || 0 === Fk ? BR(kk) : BR.ceil(kk)
    }

    function mt(kk, Fk) {
      return kk = ft(kk), UR(BR.count(yR(kk), kk) + (4 === yR(kk).getDay()), Fk, 2)
    }

    function Wt(kk) {
      return kk.getDay()
    }

    function vt(kk, Fk) {
      return UR(QB.count(yR(kk) - 1, kk), Fk, 2)
    }

    function it(kk, Fk) {
      return UR(kk.getFullYear() % 100, Fk, 2)
    }

    function Yt(kk, Fk) {
      return UR((kk = ft(kk)).getFullYear() % 100, Fk, 2)
    }

    function ot(kk, Fk) {
      return UR(kk.getFullYear() % 1e4, Fk, 4)
    }

    function Lt(kk, Fk) {
      var Bk = kk.getDay();
      return UR((kk = Bk >= 4 || 0 === Bk ? BR(kk) : BR.ceil(kk)).getFullYear() % 1e4, Fk, 4)
    }

    function Ot(kk) {
      var Fk = kk.getTimezoneOffset();
      return (Fk > 0 ? "-" : (Fk *= -1, "+")) + UR(Fk / 60 | 0, "0", 2) + UR(Fk % 60, "0", 2)
    }

    function Et(kk, Fk) {
      return UR(kk.getUTCDate(), Fk, 2)
    }

    function St(kk, Fk) {
      return UR(kk.getUTCHours(), Fk, 2)
    }

    function Nt(kk, Fk) {
      return UR(kk.getUTCHours() % 12 || 12, Fk, 2)
    }

    function Ht(kk, Fk) {
      return UR(1 + jB.count(fR(kk), kk), Fk, 3)
    }

    function ut(kk, Fk) {
      return UR(kk.getUTCMilliseconds(), Fk, 3)
    }

    function Mt(kk, Fk) {
      return ut(kk, Fk) + "000"
    }

    function gt(kk, Fk) {
      return UR(kk.getUTCMonth() + 1, Fk, 2)
    }

    function Ut(kk, Fk) {
      return UR(kk.getUTCMinutes(), Fk, 2)
    }

    function ct(kk, Fk) {
      return UR(kk.getUTCSeconds(), Fk, 2)
    }

    function Gt(kk) {
      var Fk = kk.getUTCDay();
      return 0 === Fk ? 7 : Fk
    }

    function Tt(kk, Fk) {
      return UR(XR.count(fR(kk) - 1, kk), Fk, 2)
    }

    function rt(kk) {
      var Fk = kk.getUTCDay();
      return Fk >= 4 || 0 === Fk ? sR(kk) : sR.ceil(kk)
    }

    function Dt(kk, Fk) {
      return kk = rt(kk), UR(sR.count(fR(kk), kk) + (4 === fR(kk).getUTCDay()), Fk, 2)
    }

    function zt(kk) {
      return kk.getUTCDay()
    }

    function Pt(kk, Fk) {
      return UR(bR.count(fR(kk) - 1, kk), Fk, 2)
    }

    function ht(kk, Fk) {
      return UR(kk.getUTCFullYear() % 100, Fk, 2)
    }

    function qt(kk, Fk) {
      return UR((kk = rt(kk)).getUTCFullYear() % 100, Fk, 2)
    }

    function Ct(kk, Fk) {
      return UR(kk.getUTCFullYear() % 1e4, Fk, 4)
    }

    function Zt(kk, Fk) {
      var Bk = kk.getUTCDay();
      return UR((kk = Bk >= 4 || 0 === Bk ? sR(kk) : sR.ceil(kk)).getUTCFullYear() % 1e4, Fk, 4)
    }

    function pt() {
      return "+0000"
    }

    function Kt() {
      return "%"
    }

    function xt(kk) {
      return +kk
    }

    function jt(kk) {
      return Math.floor(+kk / 1e3)
    }

    function lt(kk) {
      return new Date(kk)
    }

    function nt(kk) {
      return kk instanceof Date ? +kk : +new Date(+kk)
    }

    function It(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
      var sk = HF(),
        Vk = sk.invert,
        Jk = sk.domain,
        Ak = dk(".%L"),
        ek = dk(":%S"),
        yk = dk("%I:%M"),
        fk = dk("%I %p"),
        mk = dk("%a %d"),
        Wk = dk("%b %d"),
        vk = dk("%B"),
        ik = dk("%Y");

      function Yk(kk) {
        return (wk(kk) < kk ? Ak : bk(kk) < kk ? ek : Xk(kk) < kk ? yk : ak(kk) < kk ? fk : Rk(kk) < kk ? tk(kk) < kk ? mk : Wk : Bk(kk) < kk ? vk : ik)(kk)
      }
      return sk.invert = function(kk) {
        return new Date(Vk(kk))
      }, sk.domain = function(kk) {
        return arguments.length ? Jk(Array.from(kk, nt)) : Jk().map(lt)
      }, sk.ticks = function(Fk) {
        var Bk = Jk();
        return kk(Bk[0], Bk[Bk.length - 1], null == Fk ? 10 : Fk)
      }, sk.tickFormat = function(kk, Fk) {
        return null == Fk ? Yk : dk(Fk)
      }, sk.nice = function(kk) {
        var Bk = Jk();
        return kk && "function" === typeof kk.range || (kk = Fk(Bk[0], Bk[Bk.length - 1], null == kk ? 10 : kk)), kk ? Jk(nF(Bk, kk)) : sk
      }, sk.copy = function() {
        return SF(sk, It(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk))
      }, sk
    }

    function Qt() {
      return MF.e.apply(It(iR, YR, yR, AR, IB, xB, pB, CB, qB, SR).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function ka() {
      return MF.e.apply(It(WR, vR, fR, eR, XR, jB, KB, ZB, qB, NR).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function Fa() {
      var kk, Fk, Bk, Rk, tk, ak = 0,
        Xk = 1,
        bk = oF,
        wk = !1;

      function dk(Fk) {
        return null == Fk || isNaN(Fk = +Fk) ? tk : bk(0 === Bk ? .5 : (Fk = (Rk(Fk) - kk) * Bk, wk ? Math.max(0, Math.min(1, Fk)) : Fk))
      }

      function sk(kk) {
        return function(Fk) {
          var Bk, Rk;
          return arguments.length ? ([Bk, Rk] = Fk, bk = kk(Bk, Rk), dk) : [bk(0), bk(1)]
        }
      }
      return dk.domain = function(tk) {
          return arguments.length ? ([ak, Xk] = tk, kk = Rk(ak = +ak), Fk = Rk(Xk = +Xk), Bk = kk === Fk ? 0 : 1 / (Fk - kk), dk) : [ak, Xk]
        }, dk.clamp = function(kk) {
          return arguments.length ? (wk = !!kk, dk) : wk
        }, dk.interpolator = function(kk) {
          return arguments.length ? (bk = kk, dk) : bk
        }, dk.range = sk(WF), dk.rangeRound = sk(vF), dk.unknown = function(kk) {
          return arguments.length ? (tk = kk, dk) : tk
        },
        function(tk) {
          return Rk = tk, kk = tk(ak), Fk = tk(Xk), Bk = kk === Fk ? 0 : 1 / (Fk - kk), dk
        }
    }

    function Ba(kk, Fk) {
      return Fk.domain(kk.domain()).interpolator(kk.interpolator()).clamp(kk.clamp()).unknown(kk.unknown())
    }

    function Ra() {
      var kk = xF(Fa()(oF));
      return kk.copy = function() {
        return Ba(kk, Ra())
      }, MF.d.apply(kk, arguments)
    }

    function ta() {
      var kk = tB(Fa()).domain([1, 10]);
      return kk.copy = function() {
        return Ba(kk, ta()).base(kk.base())
      }, MF.d.apply(kk, arguments)
    }

    function aa() {
      var kk = wB(Fa());
      return kk.copy = function() {
        return Ba(kk, aa()).constant(kk.constant())
      }, MF.d.apply(kk, arguments)
    }

    function Xa() {
      var kk = eB(Fa());
      return kk.copy = function() {
        return Ba(kk, Xa()).exponent(kk.exponent())
      }, MF.d.apply(kk, arguments)
    }

    function ba() {
      return Xa.apply(null, arguments).exponent(.5)
    }

    function wa() {
      var kk = [],
        Fk = oF;

      function Bk(Bk) {
        if (null != Bk && !isNaN(Bk = +Bk)) return Fk((vk(kk, Bk, 1) - 1) / (kk.length - 1))
      }
      return Bk.domain = function(Fk) {
        if (!arguments.length) return kk.slice();
        kk = [];
        for (let Bk of Fk) null == Bk || isNaN(Bk = +Bk) || kk.push(Bk);
        return kk.sort(Jk), Bk
      }, Bk.interpolator = function(kk) {
        return arguments.length ? (Fk = kk, Bk) : Fk
      }, Bk.range = function() {
        return kk.map(((Bk, Rk) => Fk(Rk / (kk.length - 1))))
      }, Bk.quantiles = function(Fk) {
        return Array.from({
          length: Fk + 1
        }, ((Bk, Rk) => EB(kk, Rk / Fk)))
      }, Bk.copy = function() {
        return wa(Fk).domain(kk)
      }, MF.d.apply(Bk, arguments)
    }

    function da() {
      var kk, Fk, Bk, Rk, tk, ak, Xk, bk = 0,
        wk = .5,
        dk = 1,
        sk = 1,
        Vk = oF,
        Jk = !1;

      function Ak(kk) {
        return isNaN(kk = +kk) ? Xk : (kk = .5 + ((kk = +ak(kk)) - Fk) * (sk * kk < sk * Fk ? Rk : tk), Vk(Jk ? Math.max(0, Math.min(1, kk)) : kk))
      }

      function ek(kk) {
        return function(Fk) {
          var Bk, Rk, tk;
          return arguments.length ? ([Bk, Rk, tk] = Fk, Vk = function(kk, Fk) {
            void 0 === Fk && (Fk = kk, kk = WF);
            for (var Bk = 0, Rk = Fk.length - 1, tk = Fk[0], ak = new Array(Rk < 0 ? 0 : Rk); Bk < Rk;) ak[Bk] = kk(tk, tk = Fk[++Bk]);
            return function(kk) {
              var Fk = Math.max(0, Math.min(Rk - 1, Math.floor(kk *= Rk)));
              return ak[Fk](kk - Fk)
            }
          }(kk, [Bk, Rk, tk]), Ak) : [Vk(0), Vk(.5), Vk(1)]
        }
      }
      return Ak.domain = function(Xk) {
          return arguments.length ? ([bk, wk, dk] = Xk, kk = ak(bk = +bk), Fk = ak(wk = +wk), Bk = ak(dk = +dk), Rk = kk === Fk ? 0 : .5 / (Fk - kk), tk = Fk === Bk ? 0 : .5 / (Bk - Fk), sk = Fk < kk ? -1 : 1, Ak) : [bk, wk, dk]
        }, Ak.clamp = function(kk) {
          return arguments.length ? (Jk = !!kk, Ak) : Jk
        }, Ak.interpolator = function(kk) {
          return arguments.length ? (Vk = kk, Ak) : Vk
        }, Ak.range = ek(WF), Ak.rangeRound = ek(vF), Ak.unknown = function(kk) {
          return arguments.length ? (Xk = kk, Ak) : Xk
        },
        function(Xk) {
          return ak = Xk, kk = Xk(bk), Fk = Xk(wk), Bk = Xk(dk), Rk = kk === Fk ? 0 : .5 / (Fk - kk), tk = Fk === Bk ? 0 : .5 / (Bk - Fk), sk = Fk < kk ? -1 : 1, Ak
        }
    }

    function sa() {
      var kk = xF(da()(oF));
      return kk.copy = function() {
        return Ba(kk, sa())
      }, MF.d.apply(kk, arguments)
    }

    function Va() {
      var kk = tB(da()).domain([.1, 1, 10]);
      return kk.copy = function() {
        return Ba(kk, Va()).base(kk.base())
      }, MF.d.apply(kk, arguments)
    }

    function Ja() {
      var kk = wB(da());
      return kk.copy = function() {
        return Ba(kk, Ja()).constant(kk.constant())
      }, MF.d.apply(kk, arguments)
    }

    function Aa() {
      var kk = eB(da());
      return kk.copy = function() {
        return Ba(kk, Aa()).exponent(kk.exponent())
      }, MF.d.apply(kk, arguments)
    }

    function ea() {
      return Aa.apply(null, arguments).exponent(.5)
    }

    function ya(kk, Fk) {
      if ((tk = kk.length) > 1)
        for (var Bk, Rk, tk, ak = 1, Xk = kk[Fk[0]], bk = Xk.length; ak < tk; ++ak)
          for (Rk = Xk, Xk = kk[Fk[ak]], Bk = 0; Bk < bk; ++Bk) Xk[Bk][1] += Xk[Bk][0] = isNaN(Rk[Bk][1]) ? Rk[Bk][0] : Rk[Bk][1]
    }! function(kk) {
      ER = function(kk) {
        var Fk = kk.dateTime,
          Bk = kk.date,
          Rk = kk.time,
          tk = kk.periods,
          ak = kk.days,
          Xk = kk.shortDays,
          bk = kk.months,
          wk = kk.shortMonths,
          dk = GR(tk),
          sk = TR(tk),
          Vk = GR(ak),
          Jk = TR(ak),
          Ak = GR(Xk),
          ek = TR(Xk),
          yk = GR(bk),
          fk = TR(bk),
          mk = GR(wk),
          Wk = TR(wk),
          vk = {
            a: function(kk) {
              return Xk[kk.getDay()]
            },
            A: function(kk) {
              return ak[kk.getDay()]
            },
            b: function(kk) {
              return wk[kk.getMonth()]
            },
            B: function(kk) {
              return bk[kk.getMonth()]
            },
            c: null,
            d: tt,
            e: tt,
            f: st,
            g: Yt,
            G: Lt,
            H: Xt,
            I: bt,
            j: wt,
            L: dt,
            m: Vt,
            M: Jt,
            p: function(kk) {
              return tk[+(kk.getHours() >= 12)]
            },
            q: function(kk) {
              return 1 + ~~(kk.getMonth() / 3)
            },
            Q: xt,
            s: jt,
            S: At,
            u: et,
            U: yt,
            V: mt,
            w: Wt,
            W: vt,
            x: null,
            X: null,
            y: it,
            Y: ot,
            Z: Ot,
            "%": Kt
          },
          ik = {
            a: function(kk) {
              return Xk[kk.getUTCDay()]
            },
            A: function(kk) {
              return ak[kk.getUTCDay()]
            },
            b: function(kk) {
              return wk[kk.getUTCMonth()]
            },
            B: function(kk) {
              return bk[kk.getUTCMonth()]
            },
            c: null,
            d: Et,
            e: Et,
            f: Mt,
            g: qt,
            G: Zt,
            H: St,
            I: Nt,
            j: Ht,
            L: ut,
            m: gt,
            M: Ut,
            p: function(kk) {
              return tk[+(kk.getUTCHours() >= 12)]
            },
            q: function(kk) {
              return 1 + ~~(kk.getUTCMonth() / 3)
            },
            Q: xt,
            s: jt,
            S: ct,
            u: Gt,
            U: Tt,
            V: Dt,
            w: zt,
            W: Pt,
            x: null,
            X: null,
            y: ht,
            Y: Ct,
            Z: pt,
            "%": Kt
          },
          Yk = {
            a: function(kk, Fk, Bk) {
              var Rk = Ak.exec(Fk.slice(Bk));
              return Rk ? (kk.w = ek.get(Rk[0].toLowerCase()), Bk + Rk[0].length) : -1
            },
            A: function(kk, Fk, Bk) {
              var Rk = Vk.exec(Fk.slice(Bk));
              return Rk ? (kk.w = Jk.get(Rk[0].toLowerCase()), Bk + Rk[0].length) : -1
            },
            b: function(kk, Fk, Bk) {
              var Rk = mk.exec(Fk.slice(Bk));
              return Rk ? (kk.m = Wk.get(Rk[0].toLowerCase()), Bk + Rk[0].length) : -1
            },
            B: function(kk, Fk, Bk) {
              var Rk = yk.exec(Fk.slice(Bk));
              return Rk ? (kk.m = fk.get(Rk[0].toLowerCase()), Bk + Rk[0].length) : -1
            },
            c: function(kk, Bk, Rk) {
              return Ek(kk, Fk, Bk, Rk)
            },
            d: xR,
            e: xR,
            f: kt,
            g: CR,
            G: qR,
            H: lR,
            I: lR,
            j: jR,
            L: QR,
            m: KR,
            M: nR,
            p: function(kk, Fk, Bk) {
              var Rk = dk.exec(Fk.slice(Bk));
              return Rk ? (kk.p = sk.get(Rk[0].toLowerCase()), Bk + Rk[0].length) : -1
            },
            q: pR,
            Q: Bt,
            s: Rt,
            S: IR,
            u: DR,
            U: zR,
            V: PR,
            w: rR,
            W: hR,
            x: function(kk, Fk, Rk) {
              return Ek(kk, Bk, Fk, Rk)
            },
            X: function(kk, Fk, Bk) {
              return Ek(kk, Rk, Fk, Bk)
            },
            y: CR,
            Y: qR,
            Z: ZR,
            "%": Ft
          };

        function Lk(kk, Fk) {
          return function(Bk) {
            var Rk, tk, ak, Xk = [],
              bk = -1,
              wk = 0,
              dk = kk.length;
            for (Bk instanceof Date || (Bk = new Date(+Bk)); ++bk < dk;) 37 === kk.charCodeAt(bk) && (Xk.push(kk.slice(wk, bk)), null != (tk = HR[Rk = kk.charAt(++bk)]) ? Rk = kk.charAt(++bk) : tk = "e" === Rk ? " " : "0", (ak = Fk[Rk]) && (Rk = ak(Bk, tk)), Xk.push(Rk), wk = bk + 1);
            return Xk.push(kk.slice(wk, bk)), Xk.join("")
          }
        }

        function Ok(kk, Fk) {
          return function(Bk) {
            var Rk, tk, ak = OR(1900, void 0, 1);
            if (Ek(ak, kk, Bk += "", 0) != Bk.length) return null;
            if ("Q" in ak) return new Date(ak.Q);
            if ("s" in ak) return new Date(1e3 * ak.s + ("L" in ak ? ak.L : 0));
            if (Fk && !("Z" in ak) && (ak.Z = 0), "p" in ak && (ak.H = ak.H % 12 + 12 * ak.p), void 0 === ak.m && (ak.m = "q" in ak ? ak.q : 0), "V" in ak) {
              if (ak.V < 1 || ak.V > 53) return null;
              "w" in ak || (ak.w = 1), "Z" in ak ? (tk = (Rk = LR(OR(ak.y, 0, 1))).getUTCDay(), Rk = tk > 4 || 0 === tk ? bR.ceil(Rk) : bR(Rk), Rk = jB.offset(Rk, 7 * (ak.V - 1)), ak.y = Rk.getUTCFullYear(), ak.m = Rk.getUTCMonth(), ak.d = Rk.getUTCDate() + (ak.w + 6) % 7) : (tk = (Rk = oR(OR(ak.y, 0, 1))).getDay(), Rk = tk > 4 || 0 === tk ? QB.ceil(Rk) : QB(Rk), Rk = xB.offset(Rk, 7 * (ak.V - 1)), ak.y = Rk.getFullYear(), ak.m = Rk.getMonth(), ak.d = Rk.getDate() + (ak.w + 6) % 7)
            } else("W" in ak || "U" in ak) && ("w" in ak || (ak.w = "u" in ak ? ak.u % 7 : "W" in ak ? 1 : 0), tk = "Z" in ak ? LR(OR(ak.y, 0, 1)).getUTCDay() : oR(OR(ak.y, 0, 1)).getDay(), ak.m = 0, ak.d = "W" in ak ? (ak.w + 6) % 7 + 7 * ak.W - (tk + 5) % 7 : ak.w + 7 * ak.U - (tk + 6) % 7);
            return "Z" in ak ? (ak.H += ak.Z / 100 | 0, ak.M += ak.Z % 100, LR(ak)) : oR(ak)
          }
        }

        function Ek(kk, Fk, Bk, Rk) {
          for (var tk, ak, Xk = 0, bk = Fk.length, wk = Bk.length; Xk < bk;) {
            if (Rk >= wk) return -1;
            if (37 === (tk = Fk.charCodeAt(Xk++))) {
              if (tk = Fk.charAt(Xk++), !(ak = Yk[tk in HR ? Fk.charAt(Xk++) : tk]) || (Rk = ak(kk, Bk, Rk)) < 0) return -1
            } else if (tk != Bk.charCodeAt(Rk++)) return -1
          }
          return Rk
        }
        return vk.x = Lk(Bk, vk), vk.X = Lk(Rk, vk), vk.c = Lk(Fk, vk), ik.x = Lk(Bk, ik), ik.X = Lk(Rk, ik), ik.c = Lk(Fk, ik), {
          format: function(kk) {
            var Fk = Lk(kk += "", vk);
            return Fk.toString = function() {
              return kk
            }, Fk
          },
          parse: function(kk) {
            var Fk = Ok(kk += "", !1);
            return Fk.toString = function() {
              return kk
            }, Fk
          },
          utcFormat: function(kk) {
            var Fk = Lk(kk += "", ik);
            return Fk.toString = function() {
              return kk
            }, Fk
          },
          utcParse: function(kk) {
            var Fk = Ok(kk += "", !0);
            return Fk.toString = function() {
              return kk
            }, Fk
          }
        }
      }(kk), SR = ER.format, ER.parse, NR = ER.utcFormat, ER.utcParse
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
    var fa = Bk(5912),
      ma = Bk(5786);

    function Wa(kk) {
      for (var Fk = kk.length, Bk = new Array(Fk); --Fk >= 0;) Bk[Fk] = Fk;
      return Bk
    }

    function va(kk, Fk) {
      return kk[Fk]
    }

    function ia(kk) {
      const Fk = [];
      return Fk.key = kk, Fk
    }
    var Ya = Bk(5852),
      oa = Bk.n(Ya),
      La = Bk(5870),
      Oa = Bk.n(La),
      Ea = Bk(5099),
      Sa = Bk.n(Ea),
      Na = Bk(4936),
      Ha = Bk.n(Na),
      ua = Bk(4836),
      Ma = Bk.n(ua),
      ga = Bk(4863),
      Ua = Bk.n(ga),
      ca = Bk(5881),
      Ga = Bk.n(ca),
      Ta = Bk(4852),
      ra = Bk.n(Ta),
      Da = Bk(5735),
      za = Bk.n(Da),
      Pa = Bk(5893),
      ha = Bk.n(Pa),
      qa = Bk(5199),
      Ca = Bk.n(qa),
      Za = Bk(5898),
      pa = Bk.n(Za);

    function Ka(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return xa(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(kk)) return Array.from(kk)
      }(kk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return xa(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return xa(kk, Fk)
      }(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xa(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }
    var ja = function(kk) {
        return kk
      },
      la = {
        "@@functional/placeholder": !0
      },
      na = function(kk) {
        return kk === la
      },
      Ia = function(kk) {
        return function Fk() {
          return 0 === arguments.length || 1 === arguments.length && na(arguments.length <= 0 ? void 0 : arguments[0]) ? Fk : kk.apply(void 0, arguments)
        }
      },
      Qa = function kk(Fk, Bk) {
        return 1 === Fk ? Bk : Ia((function() {
          for (var Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
          var Xk = tk.filter((function(kk) {
            return kk !== la
          })).length;
          return Xk >= Fk ? Bk.apply(void 0, tk) : kk(Fk - Xk, Ia((function() {
            for (var kk = arguments.length, Fk = new Array(kk), Rk = 0; Rk < kk; Rk++) Fk[Rk] = arguments[Rk];
            var ak = tk.map((function(kk) {
              return na(kk) ? Fk.shift() : kk
            }));
            return Bk.apply(void 0, Ka(ak).concat(Fk))
          })))
        }))
      },
      kX = function(kk) {
        return Qa(kk.length, kk)
      },
      FX = function(kk, Fk) {
        for (var Bk = [], Rk = kk; Rk < Fk; ++Rk) Bk[Rk - kk] = Rk;
        return Bk
      },
      BX = kX((function(kk, Fk) {
        return Array.isArray(Fk) ? Fk.map(kk) : Object.keys(Fk).map((function(kk) {
          return Fk[kk]
        })).map(kk)
      })),
      RX = function() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        if (!Fk.length) return ja;
        var Rk = Fk.reverse(),
          tk = Rk[0],
          ak = Rk.slice(1);
        return function() {
          return ak.reduce((function(kk, Fk) {
            return Fk(kk)
          }), tk.apply(void 0, arguments))
        }
      },
      tX = function(kk) {
        return Array.isArray(kk) ? kk.reverse() : kk.split("").reverse.join("")
      },
      aX = function(kk) {
        var Fk = null,
          Bk = null;
        return function() {
          for (var Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
          return Fk && tk.every((function(kk, Bk) {
            return kk === Fk[Bk]
          })) ? Bk : (Fk = tk, Bk = kk.apply(void 0, tk))
        }
      };
    const XX = {
      rangeStep: function(kk, Fk, Bk) {
        for (var Rk = new(pa())(kk), tk = 0, ak = []; Rk.lt(Fk) && tk < 1e5;) ak.push(Rk.toNumber()), Rk = Rk.add(Bk), tk++;
        return ak
      },
      getDigitCount: function(kk) {
        return 0 === kk ? 1 : Math.floor(new(pa())(kk).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: kX((function(kk, Fk, Bk) {
        var Rk = +kk;
        return Rk + Bk * (+Fk - Rk)
      })),
      uninterpolateNumber: kX((function(kk, Fk, Bk) {
        var Rk = Fk - +kk;
        return (Bk - kk) / (Rk = Rk || 1 / 0)
      })),
      uninterpolateTruncation: kX((function(kk, Fk, Bk) {
        var Rk = Fk - +kk;
        return Rk = Rk || 1 / 0, Math.max(0, Math.min(1, (Bk - kk) / Rk))
      }))
    };

    function bX(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return sX(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(kk)) return Array.from(kk)
      }(kk) || dX(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wX(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(kk))) return;
        var Bk = [],
          Rk = !0,
          tk = !1,
          ak = void 0;
        try {
          for (var Xk, bk = kk[Symbol.iterator](); !(Rk = (Xk = bk.next()).done) && (Bk.push(Xk.value), !Fk || Bk.length !== Fk); Rk = !0);
        } catch (wk) {
          tk = !0, ak = wk
        } finally {
          try {
            Rk || null == bk.return || bk.return()
          } finally {
            if (tk) throw ak
          }
        }
        return Bk
      }(kk, Fk) || dX(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dX(kk, Fk) {
      if (kk) {
        if ("string" === typeof kk) return sX(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === Bk && kk.constructor && (Bk = kk.constructor.name), "Map" === Bk || "Set" === Bk ? Array.from(kk) : "Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk) ? sX(kk, Fk) : void 0
      }
    }

    function sX(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function VX(kk) {
      var Fk = wX(kk, 2),
        Bk = Fk[0],
        Rk = Fk[1],
        tk = Bk,
        ak = Rk;
      return Bk > Rk && (tk = Rk, ak = Bk), [tk, ak]
    }

    function JX(kk, Fk, Bk) {
      if (kk.lte(0)) return new(pa())(0);
      var Rk = XX.getDigitCount(kk.toNumber()),
        tk = new(pa())(10).pow(Rk),
        ak = kk.div(tk),
        Xk = 1 !== Rk ? .05 : .1,
        bk = new(pa())(Math.ceil(ak.div(Xk).toNumber())).add(Bk).mul(Xk).mul(tk);
      return Fk ? bk : new(pa())(Math.ceil(bk))
    }

    function AX(kk, Fk, Bk) {
      var Rk = 1,
        tk = new(pa())(kk);
      if (!tk.isint() && Bk) {
        var ak = Math.abs(kk);
        ak < 1 ? (Rk = new(pa())(10).pow(XX.getDigitCount(kk) - 1), tk = new(pa())(Math.floor(tk.div(Rk).toNumber())).mul(Rk)) : ak > 1 && (tk = new(pa())(Math.floor(kk)))
      } else 0 === kk ? tk = new(pa())(Math.floor((Fk - 1) / 2)) : Bk || (tk = new(pa())(Math.floor(kk)));
      var Xk = Math.floor((Fk - 1) / 2);
      return RX(BX((function(kk) {
        return tk.add(new(pa())(kk - Xk).mul(Rk)).toNumber()
      })), FX)(0, Fk)
    }

    function eX(kk, Fk, Bk, Rk) {
      var tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((Fk - kk) / (Bk - 1))) return {
        step: new(pa())(0),
        tickMin: new(pa())(0),
        tickMax: new(pa())(0)
      };
      var ak, Xk = JX(new(pa())(Fk).sub(kk).div(Bk - 1), Rk, tk);
      ak = kk <= 0 && Fk >= 0 ? new(pa())(0) : (ak = new(pa())(kk).add(Fk).div(2)).sub(new(pa())(ak).mod(Xk));
      var bk = Math.ceil(ak.sub(kk).div(Xk).toNumber()),
        wk = Math.ceil(new(pa())(Fk).sub(ak).div(Xk).toNumber()),
        dk = bk + wk + 1;
      return dk > Bk ? eX(kk, Fk, Bk, Rk, tk + 1) : (dk < Bk && (wk = Fk > 0 ? wk + (Bk - dk) : wk, bk = Fk > 0 ? bk : bk + (Bk - dk)), {
        step: Xk,
        tickMin: ak.sub(new(pa())(bk).mul(Xk)),
        tickMax: ak.add(new(pa())(wk).mul(Xk))
      })
    }
    var yX = aX((function(kk) {
        var Fk = wX(kk, 2),
          Bk = Fk[0],
          Rk = Fk[1],
          tk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          ak = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Xk = Math.max(tk, 2),
          bk = wX(VX([Bk, Rk]), 2),
          wk = bk[0],
          dk = bk[1];
        if (wk === -1 / 0 || dk === 1 / 0) {
          var sk = dk === 1 / 0 ? [wk].concat(bX(FX(0, tk - 1).map((function() {
            return 1 / 0
          })))) : [].concat(bX(FX(0, tk - 1).map((function() {
            return -1 / 0
          }))), [dk]);
          return Bk > Rk ? tX(sk) : sk
        }
        if (wk === dk) return AX(wk, tk, ak);
        var Vk = eX(wk, dk, Xk, ak),
          Jk = Vk.step,
          Ak = Vk.tickMin,
          ek = Vk.tickMax,
          yk = XX.rangeStep(Ak, ek.add(new(pa())(.1).mul(Jk)), Jk);
        return Bk > Rk ? tX(yk) : yk
      })),
      fX = (aX((function(kk) {
        var Fk = wX(kk, 2),
          Bk = Fk[0],
          Rk = Fk[1],
          tk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          ak = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Xk = Math.max(tk, 2),
          bk = wX(VX([Bk, Rk]), 2),
          wk = bk[0],
          dk = bk[1];
        if (wk === -1 / 0 || dk === 1 / 0) return [Bk, Rk];
        if (wk === dk) return AX(wk, tk, ak);
        var sk = JX(new(pa())(dk).sub(wk).div(Xk - 1), ak, 0),
          Vk = RX(BX((function(kk) {
            return new(pa())(wk).add(new(pa())(kk).mul(sk)).toNumber()
          })), FX)(0, Xk).filter((function(kk) {
            return kk >= wk && kk <= dk
          }));
        return Bk > Rk ? tX(Vk) : Vk
      })), aX((function(kk, Fk) {
        var Bk = wX(kk, 2),
          Rk = Bk[0],
          tk = Bk[1],
          ak = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Xk = wX(VX([Rk, tk]), 2),
          bk = Xk[0],
          wk = Xk[1];
        if (bk === -1 / 0 || wk === 1 / 0) return [Rk, tk];
        if (bk === wk) return [bk];
        var dk = Math.max(Fk, 2),
          sk = JX(new(pa())(wk).sub(bk).div(dk - 1), ak, 0),
          Vk = [].concat(bX(XX.rangeStep(new(pa())(bk), new(pa())(wk).sub(new(pa())(.99).mul(sk)), sk)), [wk]);
        return Rk > tk ? tX(Vk) : Vk
      }))),
      mX = Bk(5904),
      WX = Bk(4829),
      vX = Bk(5106),
      iX = Bk(5910);

    function YX(kk) {
      return YX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, YX(kk)
    }

    function oX(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return LX(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || function(kk, Fk) {
        if (!kk) return;
        if ("string" === typeof kk) return LX(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        "Object" === Bk && kk.constructor && (Bk = kk.constructor.name);
        if ("Map" === Bk || "Set" === Bk) return Array.from(kk);
        if ("Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk)) return LX(kk, Fk)
      }(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LX(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function OX(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function EX(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? OX(Object(Bk), !0).forEach((function(Fk) {
          SX(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : OX(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function SX(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != YX(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != YX(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == YX(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function NX(kk, Fk, Bk) {
      return Sa()(kk) || Sa()(Fk) ? Bk : (0, WX.u)(Fk) ? Ua()(kk, Fk, Bk) : Ha()(Fk) ? Fk(kk) : Bk
    }

    function HX(kk, Fk, Bk, Rk) {
      var tk = Ga()(kk, (function(kk) {
        return NX(kk, Fk)
      }));
      if ("number" === Bk) {
        var ak = tk.filter((function(kk) {
          return (0, WX.y)(kk) || parseFloat(kk)
        }));
        return ak.length ? [Oa()(ak), oa()(ak)] : [1 / 0, -1 / 0]
      }
      return (Rk ? tk.filter((function(kk) {
        return !Sa()(kk)
      })) : tk).map((function(kk) {
        return (0, WX.u)(kk) || kk instanceof Date ? kk : ""
      }))
    }
    var uX = function(kk) {
        var Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Rk = arguments.length > 2 ? arguments[2] : void 0,
          tk = arguments.length > 3 ? arguments[3] : void 0,
          ak = -1,
          Xk = null !== (Fk = null === Bk || void 0 === Bk ? void 0 : Bk.length) && void 0 !== Fk ? Fk : 0;
        if (Xk <= 1) return 0;
        if (tk && "angleAxis" === tk.axisType && Math.abs(Math.abs(tk.range[1] - tk.range[0]) - 360) <= 1e-6)
          for (var bk = tk.range, wk = 0; wk < Xk; wk++) {
            var dk = wk > 0 ? Rk[wk - 1].coordinate : Rk[Xk - 1].coordinate,
              sk = Rk[wk].coordinate,
              Vk = wk >= Xk - 1 ? Rk[0].coordinate : Rk[wk + 1].coordinate,
              Jk = void 0;
            if ((0, WX.B)(sk - dk) !== (0, WX.B)(Vk - sk)) {
              var Ak = [];
              if ((0, WX.B)(Vk - sk) === (0, WX.B)(bk[1] - bk[0])) {
                Jk = Vk;
                var ek = sk + bk[1] - bk[0];
                Ak[0] = Math.min(ek, (ek + dk) / 2), Ak[1] = Math.max(ek, (ek + dk) / 2)
              } else {
                Jk = dk;
                var yk = Vk + bk[1] - bk[0];
                Ak[0] = Math.min(sk, (yk + sk) / 2), Ak[1] = Math.max(sk, (yk + sk) / 2)
              }
              var fk = [Math.min(sk, (Jk + sk) / 2), Math.max(sk, (Jk + sk) / 2)];
              if (kk > fk[0] && kk <= fk[1] || kk >= Ak[0] && kk <= Ak[1]) {
                ak = Rk[wk].index;
                break
              }
            } else {
              var mk = Math.min(dk, Vk),
                Wk = Math.max(dk, Vk);
              if (kk > (mk + sk) / 2 && kk <= (Wk + sk) / 2) {
                ak = Rk[wk].index;
                break
              }
            }
          } else
            for (var vk = 0; vk < Xk; vk++)
              if (0 === vk && kk <= (Bk[vk].coordinate + Bk[vk + 1].coordinate) / 2 || vk > 0 && vk < Xk - 1 && kk > (Bk[vk].coordinate + Bk[vk - 1].coordinate) / 2 && kk <= (Bk[vk].coordinate + Bk[vk + 1].coordinate) / 2 || vk === Xk - 1 && kk > (Bk[vk].coordinate + Bk[vk - 1].coordinate) / 2) {
                ak = Bk[vk].index;
                break
              } return ak
      },
      MX = function(kk) {
        var Fk, Bk, Rk = kk.type.displayName,
          tk = null !== (Fk = kk.type) && void 0 !== Fk && Fk.defaultProps ? EX(EX({}, kk.type.defaultProps), kk.props) : kk.props,
          ak = tk.stroke,
          Xk = tk.fill;
        switch (Rk) {
          case "Line":
            Bk = ak;
            break;
          case "Area":
          case "Radar":
            Bk = ak && "none" !== ak ? ak : Xk;
            break;
          default:
            Bk = Xk
        }
        return Bk
      },
      gX = function(kk) {
        var Fk = kk.barSize,
          Bk = kk.totalSize,
          Rk = kk.stackGroups,
          tk = void 0 === Rk ? {} : Rk;
        if (!tk) return {};
        for (var ak = {}, Xk = Object.keys(tk), bk = 0, wk = Xk.length; bk < wk; bk++)
          for (var dk = tk[Xk[bk]].stackGroups, sk = Object.keys(dk), Vk = 0, Jk = sk.length; Vk < Jk; Vk++) {
            var Ak = dk[sk[Vk]],
              ek = Ak.items,
              yk = Ak.cateAxisId,
              fk = ek.filter((function(kk) {
                return (0, vX.e)(kk.type).indexOf("Bar") >= 0
              }));
            if (fk && fk.length) {
              var mk = fk[0].type.defaultProps,
                Wk = void 0 !== mk ? EX(EX({}, mk), fk[0].props) : fk[0].props,
                vk = Wk.barSize,
                ik = Wk[yk];
              ak[ik] || (ak[ik] = []);
              var Yk = Sa()(vk) ? Fk : vk;
              ak[ik].push({
                item: fk[0],
                stackList: fk.slice(1),
                barSize: Sa()(Yk) ? void 0 : (0, WX.k)(Yk, Bk, 0)
              })
            }
          }
        return ak
      },
      UX = function(kk) {
        var Fk = kk.barGap,
          Bk = kk.barCategoryGap,
          Rk = kk.bandSize,
          tk = kk.sizeList,
          ak = void 0 === tk ? [] : tk,
          Xk = kk.maxBarSize,
          bk = ak.length;
        if (bk < 1) return null;
        var wk, dk = (0, WX.k)(Fk, Rk, 0, !0),
          sk = [];
        if (ak[0].barSize === +ak[0].barSize) {
          var Vk = !1,
            Jk = Rk / bk,
            Ak = ak.reduce((function(kk, Fk) {
              return kk + Fk.barSize || 0
            }), 0);
          (Ak += (bk - 1) * dk) >= Rk && (Ak -= (bk - 1) * dk, dk = 0), Ak >= Rk && Jk > 0 && (Vk = !0, Ak = bk * (Jk *= .9));
          var ek = {
            offset: ((Rk - Ak) / 2 | 0) - dk,
            size: 0
          };
          wk = ak.reduce((function(kk, Fk) {
            var Bk = {
                item: Fk.item,
                position: {
                  offset: ek.offset + ek.size + dk,
                  size: Vk ? Jk : Fk.barSize
                }
              },
              Rk = [].concat(oX(kk), [Bk]);
            return ek = Rk[Rk.length - 1].position, Fk.stackList && Fk.stackList.length && Fk.stackList.forEach((function(kk) {
              Rk.push({
                item: kk,
                position: ek
              })
            })), Rk
          }), sk)
        } else {
          var yk = (0, WX.k)(Bk, Rk, 0, !0);
          Rk - 2 * yk - (bk - 1) * dk <= 0 && (dk = 0);
          var fk = (Rk - 2 * yk - (bk - 1) * dk) / bk;
          fk > 1 && (fk >>= 0);
          var mk = Xk === +Xk ? Math.min(fk, Xk) : fk;
          wk = ak.reduce((function(kk, Fk, Bk) {
            var Rk = [].concat(oX(kk), [{
              item: Fk.item,
              position: {
                offset: yk + (fk + dk) * Bk + (fk - mk) / 2,
                size: mk
              }
            }]);
            return Fk.stackList && Fk.stackList.length && Fk.stackList.forEach((function(kk) {
              Rk.push({
                item: kk,
                position: Rk[Rk.length - 1].position
              })
            })), Rk
          }), sk)
        }
        return wk
      },
      cX = function(kk, Fk, Bk, Rk) {
        var tk = Bk.children,
          ak = Bk.width,
          Xk = Bk.margin,
          bk = ak - (Xk.left || 0) - (Xk.right || 0),
          wk = (0, iX.e)({
            children: tk,
            legendWidth: bk
          });
        if (wk) {
          var dk = Rk || {},
            sk = dk.width,
            Vk = dk.height,
            Jk = wk.align,
            Ak = wk.verticalAlign,
            ek = wk.layout;
          if (("vertical" === ek || "horizontal" === ek && "middle" === Ak) && "center" !== Jk && (0, WX.y)(kk[Jk])) return EX(EX({}, kk), {}, SX({}, Jk, kk[Jk] + (sk || 0)));
          if (("horizontal" === ek || "vertical" === ek && "center" === Jk) && "middle" !== Ak && (0, WX.y)(kk[Ak])) return EX(EX({}, kk), {}, SX({}, Ak, kk[Ak] + (Vk || 0)))
        }
        return kk
      },
      GX = function(kk, Fk, Bk, Rk, tk) {
        var ak = Fk.props.children,
          Xk = (0, vX.c)(ak, mX.c).filter((function(kk) {
            return function(kk, Fk, Bk) {
              return !!Sa()(Fk) || ("horizontal" === kk ? "yAxis" === Fk : "vertical" === kk || "x" === Bk ? "xAxis" === Fk : "y" !== Bk || "yAxis" === Fk)
            }(Rk, tk, kk.props.direction)
          }));
        if (Xk && Xk.length) {
          var bk = Xk.map((function(kk) {
            return kk.props.dataKey
          }));
          return kk.reduce((function(kk, Fk) {
            var Rk = NX(Fk, Bk);
            if (Sa()(Rk)) return kk;
            var tk = Array.isArray(Rk) ? [Oa()(Rk), oa()(Rk)] : [Rk, Rk],
              ak = bk.reduce((function(kk, Bk) {
                var Rk = NX(Fk, Bk, 0),
                  ak = tk[0] - Math.abs(Array.isArray(Rk) ? Rk[0] : Rk),
                  Xk = tk[1] + Math.abs(Array.isArray(Rk) ? Rk[1] : Rk);
                return [Math.min(ak, kk[0]), Math.max(Xk, kk[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(ak[0], kk[0]), Math.max(ak[1], kk[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      TX = function(kk, Fk, Bk, Rk, tk) {
        var ak = Fk.map((function(Fk) {
          return GX(kk, Fk, Bk, tk, Rk)
        })).filter((function(kk) {
          return !Sa()(kk)
        }));
        return ak && ak.length ? ak.reduce((function(kk, Fk) {
          return [Math.min(kk[0], Fk[0]), Math.max(kk[1], Fk[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      rX = function(kk, Fk, Bk, Rk, tk) {
        var ak = Fk.map((function(Fk) {
          var ak = Fk.props.dataKey;
          return "number" === Bk && ak && GX(kk, Fk, ak, Rk) || HX(kk, ak, Bk, tk)
        }));
        if ("number" === Bk) return ak.reduce((function(kk, Fk) {
          return [Math.min(kk[0], Fk[0]), Math.max(kk[1], Fk[1])]
        }), [1 / 0, -1 / 0]);
        var Xk = {};
        return ak.reduce((function(kk, Fk) {
          for (var Bk = 0, Rk = Fk.length; Bk < Rk; Bk++) Xk[Fk[Bk]] || (Xk[Fk[Bk]] = !0, kk.push(Fk[Bk]));
          return kk
        }), [])
      },
      DX = function(kk, Fk) {
        return "horizontal" === kk && "xAxis" === Fk || "vertical" === kk && "yAxis" === Fk || "centric" === kk && "angleAxis" === Fk || "radial" === kk && "radiusAxis" === Fk
      },
      zX = function(kk, Fk, Bk, Rk) {
        if (Rk) return kk.map((function(kk) {
          return kk.coordinate
        }));
        var tk, ak, Xk = kk.map((function(kk) {
          return kk.coordinate === Fk && (tk = !0), kk.coordinate === Bk && (ak = !0), kk.coordinate
        }));
        return tk || Xk.push(Fk), ak || Xk.push(Bk), Xk
      },
      PX = function(kk, Fk, Bk) {
        if (!kk) return null;
        var Rk = kk.scale,
          tk = kk.duplicateDomain,
          ak = kk.type,
          Xk = kk.range,
          bk = "scaleBand" === kk.realScaleType ? Rk.bandwidth() / 2 : 2,
          wk = (Fk || Bk) && "category" === ak && Rk.bandwidth ? Rk.bandwidth() / bk : 0;
        return wk = "angleAxis" === kk.axisType && (null === Xk || void 0 === Xk ? void 0 : Xk.length) >= 2 ? 2 * (0, WX.B)(Xk[0] - Xk[1]) * wk : wk, Fk && (kk.ticks || kk.niceTicks) ? (kk.ticks || kk.niceTicks).map((function(kk) {
          var Fk = tk ? tk.indexOf(kk) : kk;
          return {
            coordinate: Rk(Fk) + wk,
            value: kk,
            offset: wk
          }
        })).filter((function(kk) {
          return !ra()(kk.coordinate)
        })) : kk.isCategorical && kk.categoricalDomain ? kk.categoricalDomain.map((function(kk, Fk) {
          return {
            coordinate: Rk(kk) + wk,
            value: kk,
            index: Fk,
            offset: wk
          }
        })) : Rk.ticks && !Bk ? Rk.ticks(kk.tickCount).map((function(kk) {
          return {
            coordinate: Rk(kk) + wk,
            value: kk,
            offset: wk
          }
        })) : Rk.domain().map((function(kk, Fk) {
          return {
            coordinate: Rk(kk) + wk,
            value: tk ? tk[kk] : kk,
            index: Fk,
            offset: wk
          }
        }))
      },
      hX = new WeakMap,
      qX = function(kk, Fk) {
        if ("function" !== typeof Fk) return kk;
        hX.has(kk) || hX.set(kk, new WeakMap);
        var Bk = hX.get(kk);
        if (Bk.has(Fk)) return Bk.get(Fk);
        var Rk = function() {
          kk.apply(void 0, arguments), Fk.apply(void 0, arguments)
        };
        return Bk.set(Fk, Rk), Rk
      },
      CX = function(kk, Fk, Bk) {
        var ak = kk.scale,
          Xk = kk.type,
          bk = kk.layout,
          wk = kk.axisType;
        if ("auto" === ak) return "radial" === bk && "radiusAxis" === wk ? {
          scale: tk.c(),
          realScaleType: "band"
        } : "radial" === bk && "angleAxis" === wk ? {
          scale: jF(),
          realScaleType: "linear"
        } : "category" === Xk && Fk && (Fk.indexOf("LineChart") >= 0 || Fk.indexOf("AreaChart") >= 0 || Fk.indexOf("ComposedChart") >= 0 && !Bk) ? {
          scale: tk.g(),
          realScaleType: "point"
        } : "category" === Xk ? {
          scale: tk.c(),
          realScaleType: "band"
        } : {
          scale: jF(),
          realScaleType: "linear"
        };
        if (Ma()(ak)) {
          var dk = "scale".concat(za()(ak));
          return {
            scale: (Rk[dk] || tk.g)(),
            realScaleType: Rk[dk] ? dk : "point"
          }
        }
        return Ha()(ak) ? {
          scale: ak
        } : {
          scale: tk.g(),
          realScaleType: "point"
        }
      },
      ZX = 1e-4,
      pX = function(kk) {
        var Fk = kk.domain();
        if (Fk && !(Fk.length <= 2)) {
          var Bk = Fk.length,
            Rk = kk.range(),
            tk = Math.min(Rk[0], Rk[1]) - ZX,
            ak = Math.max(Rk[0], Rk[1]) + ZX,
            Xk = kk(Fk[0]),
            bk = kk(Fk[Bk - 1]);
          (Xk < tk || Xk > ak || bk < tk || bk > ak) && kk.domain([Fk[0], Fk[Bk - 1]])
        }
      },
      KX = function(kk, Fk) {
        if (!kk) return null;
        for (var Bk = 0, Rk = kk.length; Bk < Rk; Bk++)
          if (kk[Bk].item === Fk) return kk[Bk].position;
        return null
      },
      xX = function(kk, Fk) {
        if (!Fk || 2 !== Fk.length || !(0, WX.y)(Fk[0]) || !(0, WX.y)(Fk[1])) return kk;
        var Bk = Math.min(Fk[0], Fk[1]),
          Rk = Math.max(Fk[0], Fk[1]),
          tk = [kk[0], kk[1]];
        return (!(0, WX.y)(kk[0]) || kk[0] < Bk) && (tk[0] = Bk), (!(0, WX.y)(kk[1]) || kk[1] > Rk) && (tk[1] = Rk), tk[0] > Rk && (tk[0] = Rk), tk[1] < Bk && (tk[1] = Bk), tk
      },
      jX = {
        sign: function(kk) {
          var Fk = kk.length;
          if (!(Fk <= 0))
            for (var Bk = 0, Rk = kk[0].length; Bk < Rk; ++Bk)
              for (var tk = 0, ak = 0, Xk = 0; Xk < Fk; ++Xk) {
                var bk = ra()(kk[Xk][Bk][1]) ? kk[Xk][Bk][0] : kk[Xk][Bk][1];
                bk >= 0 ? (kk[Xk][Bk][0] = tk, kk[Xk][Bk][1] = tk + bk, tk = kk[Xk][Bk][1]) : (kk[Xk][Bk][0] = ak, kk[Xk][Bk][1] = ak + bk, ak = kk[Xk][Bk][1])
              }
        },
        expand: function(kk, Fk) {
          if ((Rk = kk.length) > 0) {
            for (var Bk, Rk, tk, ak = 0, Xk = kk[0].length; ak < Xk; ++ak) {
              for (tk = Bk = 0; Bk < Rk; ++Bk) tk += kk[Bk][ak][1] || 0;
              if (tk)
                for (Bk = 0; Bk < Rk; ++Bk) kk[Bk][ak][1] /= tk
            }
            ya(kk, Fk)
          }
        },
        none: ya,
        silhouette: function(kk, Fk) {
          if ((Bk = kk.length) > 0) {
            for (var Bk, Rk = 0, tk = kk[Fk[0]], ak = tk.length; Rk < ak; ++Rk) {
              for (var Xk = 0, bk = 0; Xk < Bk; ++Xk) bk += kk[Xk][Rk][1] || 0;
              tk[Rk][1] += tk[Rk][0] = -bk / 2
            }
            ya(kk, Fk)
          }
        },
        wiggle: function(kk, Fk) {
          if ((tk = kk.length) > 0 && (Rk = (Bk = kk[Fk[0]]).length) > 0) {
            for (var Bk, Rk, tk, ak = 0, Xk = 1; Xk < Rk; ++Xk) {
              for (var bk = 0, wk = 0, dk = 0; bk < tk; ++bk) {
                for (var sk = kk[Fk[bk]], Vk = sk[Xk][1] || 0, Jk = (Vk - (sk[Xk - 1][1] || 0)) / 2, Ak = 0; Ak < bk; ++Ak) {
                  var ek = kk[Fk[Ak]];
                  Jk += (ek[Xk][1] || 0) - (ek[Xk - 1][1] || 0)
                }
                wk += Vk, dk += Jk * Vk
              }
              Bk[Xk - 1][1] += Bk[Xk - 1][0] = ak, wk && (ak -= dk / wk)
            }
            Bk[Xk - 1][1] += Bk[Xk - 1][0] = ak, ya(kk, Fk)
          }
        },
        positive: function(kk) {
          var Fk = kk.length;
          if (!(Fk <= 0))
            for (var Bk = 0, Rk = kk[0].length; Bk < Rk; ++Bk)
              for (var tk = 0, ak = 0; ak < Fk; ++ak) {
                var Xk = ra()(kk[ak][Bk][1]) ? kk[ak][Bk][0] : kk[ak][Bk][1];
                Xk >= 0 ? (kk[ak][Bk][0] = tk, kk[ak][Bk][1] = tk + Xk, tk = kk[ak][Bk][1]) : (kk[ak][Bk][0] = 0, kk[ak][Bk][1] = 0)
              }
        }
      },
      lX = function(kk, Fk, Bk) {
        var Rk = Fk.map((function(kk) {
            return kk.props.dataKey
          })),
          tk = jX[Bk],
          ak = function() {
            var kk = (0, ma.b)([]),
              Fk = Wa,
              Bk = ya,
              Rk = va;

            function tk(tk) {
              var ak, Xk, bk = Array.from(kk.apply(this, arguments), ia),
                wk = bk.length,
                dk = -1;
              for (const kk of tk)
                for (ak = 0, ++dk; ak < wk; ++ak)(bk[ak][dk] = [0, +Rk(kk, bk[ak].key, dk, tk)]).data = kk;
              for (ak = 0, Xk = (0, fa.b)(Fk(bk)); ak < wk; ++ak) bk[Xk[ak]].index = ak;
              return Bk(bk, Xk), bk
            }
            return tk.keys = function(Fk) {
              return arguments.length ? (kk = "function" === typeof Fk ? Fk : (0, ma.b)(Array.from(Fk)), tk) : kk
            }, tk.value = function(kk) {
              return arguments.length ? (Rk = "function" === typeof kk ? kk : (0, ma.b)(+kk), tk) : Rk
            }, tk.order = function(kk) {
              return arguments.length ? (Fk = null == kk ? Wa : "function" === typeof kk ? kk : (0, ma.b)(Array.from(kk)), tk) : Fk
            }, tk.offset = function(kk) {
              return arguments.length ? (Bk = null == kk ? ya : kk, tk) : Bk
            }, tk
          }().keys(Rk).value((function(kk, Fk) {
            return +NX(kk, Fk, 0)
          })).order(Wa).offset(tk);
        return ak(kk)
      },
      nX = function(kk, Fk, Bk, Rk, tk, ak) {
        if (!kk) return null;
        var Xk = (ak ? Fk.reverse() : Fk).reduce((function(kk, Fk) {
          var tk, ak = null !== (tk = Fk.type) && void 0 !== tk && tk.defaultProps ? EX(EX({}, Fk.type.defaultProps), Fk.props) : Fk.props,
            Xk = ak.stackId;
          if (ak.hide) return kk;
          var bk = ak[Bk],
            wk = kk[bk] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, WX.u)(Xk)) {
            var dk = wk.stackGroups[Xk] || {
              numericAxisId: Bk,
              cateAxisId: Rk,
              items: []
            };
            dk.items.push(Fk), wk.hasStack = !0, wk.stackGroups[Xk] = dk
          } else wk.stackGroups[(0, WX.E)("_stackId_")] = {
            numericAxisId: Bk,
            cateAxisId: Rk,
            items: [Fk]
          };
          return EX(EX({}, kk), {}, SX({}, bk, wk))
        }), {});
        return Object.keys(Xk).reduce((function(Fk, ak) {
          var bk = Xk[ak];
          if (bk.hasStack) {
            bk.stackGroups = Object.keys(bk.stackGroups).reduce((function(Fk, ak) {
              var Xk = bk.stackGroups[ak];
              return EX(EX({}, Fk), {}, SX({}, ak, {
                numericAxisId: Bk,
                cateAxisId: Rk,
                items: Xk.items,
                stackedData: lX(kk, Xk.items, tk)
              }))
            }), {})
          }
          return EX(EX({}, Fk), {}, SX({}, ak, bk))
        }), {})
      },
      IX = function(kk, Fk) {
        var Bk = Fk.realScaleType,
          Rk = Fk.type,
          tk = Fk.tickCount,
          ak = Fk.originalDomain,
          Xk = Fk.allowDecimals,
          bk = Bk || Fk.scale;
        if ("auto" !== bk && "linear" !== bk) return null;
        if (tk && "number" === Rk && ak && ("auto" === ak[0] || "auto" === ak[1])) {
          var wk = kk.domain();
          if (!wk.length) return null;
          var dk = yX(wk, tk, Xk);
          return kk.domain([Oa()(dk), oa()(dk)]), {
            niceTicks: dk
          }
        }
        if (tk && "number" === Rk) {
          var sk = kk.domain();
          return {
            niceTicks: fX(sk, tk, Xk)
          }
        }
        return null
      };

    function QX(kk) {
      var Fk = kk.axis,
        Bk = kk.ticks,
        Rk = kk.bandSize,
        tk = kk.entry,
        ak = kk.index,
        Xk = kk.dataKey;
      if ("category" === Fk.type) {
        if (!Fk.allowDuplicatedCategory && Fk.dataKey && !Sa()(tk[Fk.dataKey])) {
          var bk = (0, WX.e)(Bk, "value", tk[Fk.dataKey]);
          if (bk) return bk.coordinate + Rk / 2
        }
        return Bk[ak] ? Bk[ak].coordinate + Rk / 2 : null
      }
      var wk = NX(tk, Sa()(Xk) ? Fk.dataKey : Xk);
      return Sa()(wk) ? null : Fk.scale(wk)
    }
    var kb = function(kk) {
        var Fk = kk.axis,
          Bk = kk.ticks,
          Rk = kk.offset,
          tk = kk.bandSize,
          ak = kk.entry,
          Xk = kk.index;
        if ("category" === Fk.type) return Bk[Xk] ? Bk[Xk].coordinate + Rk : null;
        var bk = NX(ak, Fk.dataKey, Fk.domain[Xk]);
        return Sa()(bk) ? null : Fk.scale(bk) - tk / 2 + Rk
      },
      Fb = function(kk) {
        var Fk = kk.numericAxis,
          Bk = Fk.scale.domain();
        if ("number" === Fk.type) {
          var Rk = Math.min(Bk[0], Bk[1]),
            tk = Math.max(Bk[0], Bk[1]);
          return Rk <= 0 && tk >= 0 ? 0 : tk < 0 ? tk : Rk
        }
        return Bk[0]
      },
      Bb = function(kk, Fk) {
        var Bk, Rk = (null !== (Bk = kk.type) && void 0 !== Bk && Bk.defaultProps ? EX(EX({}, kk.type.defaultProps), kk.props) : kk.props).stackId;
        if ((0, WX.u)(Rk)) {
          var tk = Fk[Rk];
          if (tk) {
            var ak = tk.items.indexOf(kk);
            return ak >= 0 ? tk.stackedData[ak] : null
          }
        }
        return null
      },
      Rb = function(kk, Fk, Bk) {
        return Object.keys(kk).reduce((function(Rk, tk) {
          var ak = kk[tk].stackedData.reduce((function(kk, Rk) {
            var tk = Rk.slice(Fk, Bk + 1).reduce((function(kk, Fk) {
              return [Oa()(Fk.concat([kk[0]]).filter(WX.y)), oa()(Fk.concat([kk[1]]).filter(WX.y))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(kk[0], tk[0]), Math.max(kk[1], tk[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(ak[0], Rk[0]), Math.max(ak[1], Rk[1])]
        }), [1 / 0, -1 / 0]).map((function(kk) {
          return kk === 1 / 0 || kk === -1 / 0 ? 0 : kk
        }))
      },
      tb = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      ab = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Xb = function(kk, Fk, Bk) {
        if (Ha()(kk)) return kk(Fk, Bk);
        if (!Array.isArray(kk)) return Fk;
        var Rk = [];
        if ((0, WX.y)(kk[0])) Rk[0] = Bk ? kk[0] : Math.min(kk[0], Fk[0]);
        else if (tb.test(kk[0])) {
          var tk = +tb.exec(kk[0])[1];
          Rk[0] = Fk[0] - tk
        } else Ha()(kk[0]) ? Rk[0] = kk[0](Fk[0]) : Rk[0] = Fk[0];
        if ((0, WX.y)(kk[1])) Rk[1] = Bk ? kk[1] : Math.max(kk[1], Fk[1]);
        else if (ab.test(kk[1])) {
          var ak = +ab.exec(kk[1])[1];
          Rk[1] = Fk[1] + ak
        } else Ha()(kk[1]) ? Rk[1] = kk[1](Fk[1]) : Rk[1] = Fk[1];
        return Rk
      },
      bb = function(kk, Fk, Bk) {
        if (kk && kk.scale && kk.scale.bandwidth) {
          var Rk = kk.scale.bandwidth();
          if (!Bk || Rk > 0) return Rk
        }
        if (kk && Fk && Fk.length >= 2) {
          for (var tk = Ca()(Fk, (function(kk) {
              return kk.coordinate
            })), ak = 1 / 0, Xk = 1, bk = tk.length; Xk < bk; Xk++) {
            var wk = tk[Xk],
              dk = tk[Xk - 1];
            ak = Math.min((wk.coordinate || 0) - (dk.coordinate || 0), ak)
          }
          return ak === 1 / 0 ? 0 : ak
        }
        return Bk ? void 0 : 0
      },
      wb = function(kk, Fk, Bk) {
        return kk && kk.length ? ha()(kk, Ua()(Bk, "type.defaultProps.domain")) ? Fk : kk : Fk
      },
      db = function(kk, Fk) {
        var Bk = kk.type.defaultProps ? EX(EX({}, kk.type.defaultProps), kk.props) : kk.props,
          Rk = Bk.dataKey,
          tk = Bk.name,
          ak = Bk.unit,
          Xk = Bk.formatter,
          bk = Bk.tooltipType,
          wk = Bk.chartType,
          dk = Bk.hide;
        return EX(EX({}, (0, vX.b)(kk, !1)), {}, {
          dataKey: Rk,
          unit: ak,
          formatter: Xk,
          name: tk || Rk,
          color: MX(kk),
          value: NX(Fk, Rk),
          type: bk,
          payload: Fk,
          chartType: wk,
          hide: dk
        })
      }
  },
  5824: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk,
      f: () => Vk
    });
    var Rk = Bk(5663);

    function tk(kk) {
      return tk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, tk(kk)
    }

    function ak(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function Xk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? ak(Object(Bk), !0).forEach((function(Fk) {
          bk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : ak(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function bk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != tk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != tk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == tk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var wk = {
        widthCache: {},
        cacheCount: 0
      },
      dk = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      sk = "recharts_measurement_span";
    var Vk = function(kk) {
        var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === kk || null === kk || Rk.c.isSsr) return {
          width: 0,
          height: 0
        };
        var Bk = function(kk) {
            var Fk = Xk({}, kk);
            return Object.keys(Fk).forEach((function(kk) {
              Fk[kk] || delete Fk[kk]
            })), Fk
          }(Fk),
          tk = JSON.stringify({
            text: kk,
            copyStyle: Bk
          });
        if (wk.widthCache[tk]) return wk.widthCache[tk];
        try {
          var ak = document.getElementById(sk);
          ak || ((ak = document.createElement("span")).setAttribute("id", sk), ak.setAttribute("aria-hidden", "true"), document.body.appendChild(ak));
          var bk = Xk(Xk({}, dk), Bk);
          Object.assign(ak.style, bk), ak.textContent = "".concat(kk);
          var Vk = ak.getBoundingClientRect(),
            Jk = {
              width: Vk.width,
              height: Vk.height
            };
          return wk.widthCache[tk] = Jk, ++wk.cacheCount > 2e3 && (wk.cacheCount = 0, wk.widthCache = {}), Jk
        } catch (Ak) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      Jk = function(kk) {
        return {
          top: kk.top + window.scrollY - document.documentElement.clientTop,
          left: kk.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4829: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => Ak,
      E: () => vk,
      c: () => Nk,
      e: () => Ek,
      i: () => Yk,
      j: () => Sk,
      k: () => ik,
      l: () => Lk,
      o: () => Ok,
      q: () => fk,
      u: () => mk,
      y: () => yk,
      z: () => ek
    });
    var Rk = Bk(4836),
      tk = Bk.n(Rk),
      ak = Bk(4852),
      Xk = Bk.n(ak),
      bk = Bk(4863),
      wk = Bk.n(bk),
      dk = Bk(4856),
      sk = Bk.n(dk),
      Vk = Bk(5099),
      Jk = Bk.n(Vk),
      Ak = function(kk) {
        return 0 === kk ? 0 : kk > 0 ? 1 : -1
      },
      ek = function(kk) {
        return tk()(kk) && kk.indexOf("%") === kk.length - 1
      },
      yk = function(kk) {
        return sk()(kk) && !Xk()(kk)
      },
      fk = function(kk) {
        return Jk()(kk)
      },
      mk = function(kk) {
        return yk(kk) || tk()(kk)
      },
      Wk = 0,
      vk = function(kk) {
        var Fk = ++Wk;
        return "".concat(kk || "").concat(Fk)
      },
      ik = function(kk, Fk) {
        var Bk, Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ak = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!yk(kk) && !tk()(kk)) return Rk;
        if (ek(kk)) {
          var bk = kk.indexOf("%");
          Bk = Fk * parseFloat(kk.slice(0, bk)) / 100
        } else Bk = +kk;
        return Xk()(Bk) && (Bk = Rk), ak && Bk > Fk && (Bk = Fk), Bk
      },
      Yk = function(kk) {
        if (!kk) return null;
        var Fk = Object.keys(kk);
        return Fk && Fk.length ? kk[Fk[0]] : null
      },
      Lk = function(kk) {
        if (!Array.isArray(kk)) return !1;
        for (var Fk = kk.length, Bk = {}, Rk = 0; Rk < Fk; Rk++) {
          if (Bk[kk[Rk]]) return !0;
          Bk[kk[Rk]] = !0
        }
        return !1
      },
      Ok = function(kk, Fk) {
        return yk(kk) && yk(Fk) ? function(Bk) {
          return kk + Bk * (Fk - kk)
        } : function() {
          return Fk
        }
      };

    function Ek(kk, Fk, Bk) {
      return kk && kk.length ? kk.find((function(kk) {
        return kk && ("function" === typeof Fk ? Fk(kk) : wk()(kk, Fk)) === Bk
      })) : null
    }
    var Sk = function(kk) {
        if (!kk || !kk.length) return null;
        for (var Fk = kk.length, Bk = 0, Rk = 0, tk = 0, ak = 0, Xk = 1 / 0, bk = -1 / 0, wk = 0, dk = 0, sk = 0; sk < Fk; sk++) Bk += wk = kk[sk].cx || 0, Rk += dk = kk[sk].cy || 0, tk += wk * dk, ak += wk * wk, Xk = Math.min(Xk, wk), bk = Math.max(bk, wk);
        var Vk = Fk * ak !== Bk * Bk ? (Fk * tk - Bk * Rk) / (Fk * ak - Bk * Bk) : 0;
        return {
          xmin: Xk,
          xmax: bk,
          a: Vk,
          b: (Rk - Vk * Bk) / Fk
        }
      },
      Nk = function(kk, Fk) {
        return yk(kk) && yk(Fk) ? kk - Fk : tk()(kk) && tk()(Fk) ? kk.localeCompare(Fk) : kk instanceof Date && Fk instanceof Date ? kk.getTime() - Fk.getTime() : String(kk).localeCompare(String(Fk))
      }
  },
  5663: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    var Rk = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(kk) {
        return Rk[kk]
      },
      set: function(kk, Fk) {
        if ("string" === typeof kk) Rk[kk] = Fk;
        else {
          var Bk = Object.keys(kk);
          Bk && Bk.length && Bk.forEach((function(Fk) {
            Rk[Fk] = kk[Fk]
          }))
        }
      }
    }
  },
  5933: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    var Rk = function(kk, Fk) {
      var Bk = kk.alwaysShow,
        Rk = kk.ifOverflow;
      return Bk && (Rk = "extendDomain"), Rk === Fk
    }
  },
  5104: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    var Rk = function(kk, Fk) {
      for (var Bk = arguments.length, Rk = new Array(Bk > 2 ? Bk - 2 : 0), tk = 2; tk < Bk; tk++) Rk[tk - 2] = arguments[tk]
    }
  },
  5925: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk,
      e: () => Jk,
      h: () => dk
    });
    Bk(5099), Bk(61), Bk(4936);

    function Rk(kk) {
      return Rk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Rk(kk)
    }

    function tk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function ak(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? tk(Object(Bk), !0).forEach((function(Fk) {
          Xk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : tk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Xk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != Rk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var tk = Bk.call(kk, Fk || "default");
            if ("object" != Rk(tk)) return tk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == Rk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var bk = Math.PI / 180,
      wk = function(kk) {
        return 180 * kk / Math.PI
      },
      dk = function(kk, Fk, Bk, Rk) {
        return {
          x: kk + Math.cos(-bk * Rk) * Bk,
          y: Fk + Math.sin(-bk * Rk) * Bk
        }
      },
      sk = function(kk, Fk) {
        var Bk = kk.x,
          Rk = kk.y,
          tk = Fk.cx,
          ak = Fk.cy,
          Xk = function(kk, Fk) {
            var Bk = kk.x,
              Rk = kk.y,
              tk = Fk.x,
              ak = Fk.y;
            return Math.sqrt(Math.pow(Bk - tk, 2) + Math.pow(Rk - ak, 2))
          }({
            x: Bk,
            y: Rk
          }, {
            x: tk,
            y: ak
          });
        if (Xk <= 0) return {
          radius: Xk
        };
        var bk = (Bk - tk) / Xk,
          dk = Math.acos(bk);
        return Rk > ak && (dk = 2 * Math.PI - dk), {
          radius: Xk,
          angle: wk(dk),
          angleInRadian: dk
        }
      },
      Vk = function(kk, Fk) {
        var Bk = Fk.startAngle,
          Rk = Fk.endAngle,
          tk = Math.floor(Bk / 360),
          ak = Math.floor(Rk / 360);
        return kk + 360 * Math.min(tk, ak)
      },
      Jk = function(kk, Fk) {
        var Bk = kk.x,
          Rk = kk.y,
          tk = sk({
            x: Bk,
            y: Rk
          }, Fk),
          Xk = tk.radius,
          bk = tk.angle,
          wk = Fk.innerRadius,
          dk = Fk.outerRadius;
        if (Xk < wk || Xk > dk) return !1;
        if (0 === Xk) return !0;
        var Jk, Ak = function(kk) {
            var Fk = kk.startAngle,
              Bk = kk.endAngle,
              Rk = Math.floor(Fk / 360),
              tk = Math.floor(Bk / 360),
              ak = Math.min(Rk, tk);
            return {
              startAngle: Fk - 360 * ak,
              endAngle: Bk - 360 * ak
            }
          }(Fk),
          ek = Ak.startAngle,
          yk = Ak.endAngle,
          fk = bk;
        if (ek <= yk) {
          for (; fk > yk;) fk -= 360;
          for (; fk < ek;) fk += 360;
          Jk = fk >= ek && fk <= yk
        } else {
          for (; fk > ek;) fk -= 360;
          for (; fk < yk;) fk += 360;
          Jk = fk >= yk && fk <= ek
        }
        return Jk ? ak(ak({}, Fk), {}, {
          radius: Xk,
          angle: Vk(fk, Fk)
        }) : null
      }
  },
  5106: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Gk,
      c: () => Hk,
      d: () => uk,
      e: () => Ok,
      i: () => zk,
      j: () => ck,
      l: () => Tk,
      n: () => Pk,
      q: () => Dk,
      t: () => Mk
    });
    var Rk = Bk(4863),
      tk = Bk.n(Rk),
      ak = Bk(5099),
      Xk = Bk.n(ak),
      bk = Bk(4836),
      wk = Bk.n(bk),
      dk = Bk(4936),
      sk = Bk.n(dk),
      Vk = Bk(4766),
      Jk = Bk.n(Vk),
      Ak = Bk(61),
      ek = Bk(5109),
      yk = Bk(4829),
      fk = Bk(5123),
      mk = Bk(5125),
      Wk = ["children"],
      vk = ["children"];

    function ik(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk = {};
        for (var Rk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Rk)) {
            if (Fk.indexOf(Rk) >= 0) continue;
            Bk[Rk] = kk[Rk]
          } return Bk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }

    function Yk(kk) {
      return Yk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Yk(kk)
    }
    var Lk = {
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
      Ok = function(kk) {
        return "string" === typeof kk ? kk : kk ? kk.displayName || kk.name || "Component" : ""
      },
      Ek = null,
      Sk = null,
      Nk = function kk(Fk) {
        if (Fk === Ek && Array.isArray(Sk)) return Sk;
        var Bk = [];
        return Ak.Children.forEach(Fk, (function(Fk) {
          Xk()(Fk) || ((0, ek.isFragment)(Fk) ? Bk = Bk.concat(kk(Fk.props.children)) : Bk.push(Fk))
        })), Sk = Bk, Ek = Fk, Bk
      };

    function Hk(kk, Fk) {
      var Bk = [],
        Rk = [];
      return Rk = Array.isArray(Fk) ? Fk.map((function(kk) {
        return Ok(kk)
      })) : [Ok(Fk)], Nk(kk).forEach((function(kk) {
        var Fk = tk()(kk, "type.displayName") || tk()(kk, "type.name"); - 1 !== Rk.indexOf(Fk) && Bk.push(kk)
      })), Bk
    }

    function uk(kk, Fk) {
      var Bk = Hk(kk, Fk);
      return Bk && Bk[0]
    }
    var Mk = function(kk) {
        if (!kk || !kk.props) return !1;
        var Fk = kk.props,
          Bk = Fk.width,
          Rk = Fk.height;
        return !(!(0, yk.y)(Bk) || Bk <= 0 || !(0, yk.y)(Rk) || Rk <= 0)
      },
      gk = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      Uk = function(kk) {
        return kk && kk.type && wk()(kk.type) && gk.indexOf(kk.type) >= 0
      },
      ck = function(kk) {
        return kk && "object" === Yk(kk) && "clipDot" in kk
      },
      Gk = function(kk, Fk, Bk) {
        if (!kk || "function" === typeof kk || "boolean" === typeof kk) return null;
        var Rk = kk;
        if ((0, Ak.isValidElement)(kk) && (Rk = kk.props), !Jk()(Rk)) return null;
        var tk = {};
        return Object.keys(Rk).forEach((function(kk) {
          var ak;
          (function(kk, Fk, Bk, Rk) {
            var tk, ak = null !== (tk = null === mk.d || void 0 === mk.d ? void 0 : mk.d[Rk]) && void 0 !== tk ? tk : [];
            return Fk.startsWith("data-") || !sk()(kk) && (Rk && ak.includes(Fk) || mk.f.includes(Fk)) || Bk && mk.c.includes(Fk)
          })(null === (ak = Rk) || void 0 === ak ? void 0 : ak[kk], kk, Fk, Bk) && (tk[kk] = Rk[kk])
        })), tk
      },
      Tk = function kk(Fk, Bk) {
        if (Fk === Bk) return !0;
        var Rk = Ak.Children.count(Fk);
        if (Rk !== Ak.Children.count(Bk)) return !1;
        if (0 === Rk) return !0;
        if (1 === Rk) return rk(Array.isArray(Fk) ? Fk[0] : Fk, Array.isArray(Bk) ? Bk[0] : Bk);
        for (var tk = 0; tk < Rk; tk++) {
          var ak = Fk[tk],
            Xk = Bk[tk];
          if (Array.isArray(ak) || Array.isArray(Xk)) {
            if (!kk(ak, Xk)) return !1
          } else if (!rk(ak, Xk)) return !1
        }
        return !0
      },
      rk = function(kk, Fk) {
        if (Xk()(kk) && Xk()(Fk)) return !0;
        if (!Xk()(kk) && !Xk()(Fk)) {
          var Bk = kk.props || {},
            Rk = Bk.children,
            tk = ik(Bk, Wk),
            ak = Fk.props || {},
            bk = ak.children,
            wk = ik(ak, vk);
          return Rk && bk ? (0, fk.e)(tk, wk) && Tk(Rk, bk) : !Rk && !bk && (0, fk.e)(tk, wk)
        }
        return !1
      },
      Dk = function(kk, Fk) {
        var Bk = [],
          Rk = {};
        return Nk(kk).forEach((function(kk, tk) {
          if (Uk(kk)) Bk.push(kk);
          else if (kk) {
            var ak = Ok(kk.type),
              Xk = Fk[ak] || {},
              bk = Xk.handler,
              wk = Xk.once;
            if (bk && (!wk || !Rk[ak])) {
              var dk = bk(kk, ak, tk);
              Bk.push(dk), Rk[ak] = !0
            }
          }
        })), Bk
      },
      zk = function(kk) {
        var Fk = kk && kk.type;
        return Fk && Lk[Fk] ? Lk[Fk] : null
      },
      Pk = function(kk, Fk) {
        return Nk(Fk).indexOf(kk)
      }
  },
  5123: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      for (var Bk in kk)
        if ({}.hasOwnProperty.call(kk, Bk) && (!{}.hasOwnProperty.call(Fk, Bk) || kk[Bk] !== Fk[Bk])) return !1;
      for (var Rk in Fk)
        if ({}.hasOwnProperty.call(Fk, Rk) && !{}.hasOwnProperty.call(kk, Rk)) return !1;
      return !0
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  5910: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => sk
    });
    var Rk = Bk(5720),
      tk = Bk(5833),
      ak = Bk(5106);

    function Xk(kk) {
      return Xk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Xk(kk)
    }

    function bk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function wk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? bk(Object(Bk), !0).forEach((function(Fk) {
          dk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : bk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function dk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != Xk(kk) || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != Xk(Rk)) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == Xk(Fk) ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }
    var sk = function(kk) {
      var Fk = kk.children,
        Bk = kk.formattedGraphicalItems,
        Xk = kk.legendWidth,
        bk = kk.legendContent,
        dk = (0, ak.d)(Fk, Rk.e);
      if (!dk) return null;
      var sk, Vk = Rk.e.defaultProps,
        Jk = void 0 !== Vk ? wk(wk({}, Vk), dk.props) : {};
      return sk = dk.props && dk.props.payload ? dk.props && dk.props.payload : "children" === bk ? (Bk || []).reduce((function(kk, Fk) {
        var Bk = Fk.item,
          Rk = Fk.props,
          tk = Rk.sectors || Rk.data || [];
        return kk.concat(tk.map((function(kk) {
          return {
            type: dk.props.iconType || Bk.props.legendType,
            value: kk.name,
            color: kk.fill,
            payload: kk
          }
        })))
      }), []) : (Bk || []).map((function(kk) {
        var Fk = kk.item,
          Bk = Fk.type.defaultProps,
          Rk = void 0 !== Bk ? wk(wk({}, Bk), Fk.props) : {},
          ak = Rk.dataKey,
          Xk = Rk.name,
          bk = Rk.legendType;
        return {
          inactive: Rk.hide,
          dataKey: ak,
          type: Jk.iconType || bk || "square",
          color: (0, tk.K)(Fk),
          value: Xk || ak,
          payload: Rk
        }
      })), wk(wk(wk({}, Jk), Rk.e.getWithHeight(dk, Xk)), {}, {
        payload: sk,
        item: dk
      })
    }
  },
  5669: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk
    });
    var Rk = Bk(5671),
      tk = Bk.n(Rk),
      ak = Bk(4936),
      Xk = Bk.n(ak);

    function bk(kk, Fk, Bk) {
      return !0 === Fk ? tk()(kk, Bk) : Xk()(Fk) ? tk()(kk, Fk) : kk
    }
  },
  5125: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      d: () => dk,
      f: () => bk,
      g: () => Vk,
      h: () => Jk
    });
    var Rk = Bk(61),
      tk = Bk(4766),
      ak = Bk.n(tk);

    function Xk(kk) {
      return Xk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Xk(kk)
    }
    var bk = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "UA", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      wk = ["points", "pathLength"],
      dk = {
        svg: ["viewBox", "children"],
        polygon: wk,
        polyline: wk
      },
      sk = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      Vk = function(kk, Fk) {
        if (!kk || "function" === typeof kk || "boolean" === typeof kk) return null;
        var Bk = kk;
        if ((0, Rk.isValidElement)(kk) && (Bk = kk.props), !ak()(Bk)) return null;
        var tk = {};
        return Object.keys(Bk).forEach((function(kk) {
          sk.includes(kk) && (tk[kk] = Fk || function(Fk) {
            return Bk[kk](Bk, Fk)
          })
        })), tk
      },
      Jk = function(kk, Fk, Bk) {
        if (!ak()(kk) || "object" !== Xk(kk)) return null;
        var Rk = null;
        return Object.keys(kk).forEach((function(tk) {
          var ak = kk[tk];
          sk.includes(tk) && "function" === typeof ak && (Rk || (Rk = {}), Rk[tk] = function(kk, Fk, Bk) {
            return function(Rk) {
              return kk(Fk, Bk, Rk), null
            }
          }(ak, Fk, Bk))
        })), Rk
      }
  },
  5116: (kk, Fk) => {
    var Bk, Rk = Symbol.for("react.element"),
      tk = Symbol.for("react.portal"),
      ak = Symbol.for("react.fragment"),
      Xk = Symbol.for("react.strict_mode"),
      bk = Symbol.for("react.profiler"),
      wk = Symbol.for("react.provider"),
      dk = Symbol.for("react.context"),
      sk = Symbol.for("react.server_context"),
      Vk = Symbol.for("react.forward_ref"),
      Jk = Symbol.for("react.suspense"),
      Ak = Symbol.for("react.suspense_list"),
      ek = Symbol.for("react.memo"),
      yk = Symbol.for("react.lazy"),
      fk = Symbol.for("react.offscreen");

    function mk(kk) {
      if ("object" === typeof kk && null !== kk) {
        var Fk = kk.$$typeof;
        switch (Fk) {
          case Rk:
            switch (kk = kk.type) {
              case ak:
              case bk:
              case Xk:
              case Jk:
              case Ak:
                return kk;
              default:
                switch (kk = kk && kk.$$typeof) {
                  case sk:
                  case dk:
                  case Vk:
                  case yk:
                  case ek:
                  case wk:
                    return kk;
                  default:
                    return Fk
                }
            }
          case tk:
            return Fk
        }
      }
    }
    Bk = Symbol.for("react.module.reference"), Fk.isFragment = function(kk) {
      return mk(kk) === ak
    }
  },
  5109: (kk, Fk, Bk) => {
    kk.exports = Bk(5116)
  },
  4750: (kk, Fk, Bk) => {
    function Rk(kk) {
      var Fk, Bk, tk = "";
      if ("string" == typeof kk || "number" == typeof kk) tk += kk;
      else if ("object" == typeof kk)
        if (Array.isArray(kk)) {
          var ak = kk.length;
          for (Fk = 0; Fk < ak; Fk++) kk[Fk] && (Bk = Rk(kk[Fk])) && (tk && (tk += " "), tk += Bk)
        } else
          for (Bk in kk) kk[Bk] && (tk && (tk += " "), tk += Bk);
      return tk
    }
    Bk.d(Fk, {
      e: () => tk
    });
    const tk = function() {
      for (var kk, Fk, Bk = 0, tk = "", ak = arguments.length; Bk < ak; Bk++)(kk = arguments[Bk]) && (Fk = Rk(kk)) && (tk && (tk += " "), tk += Fk);
      return tk
    }
  },
  5837: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      g: () => bk
    });
    var Rk = Bk(5846),
      tk = Bk(5850);

    function ak() {
      var kk, Fk, Bk = (0, tk.c)().unknown(void 0),
        Xk = Bk.domain,
        bk = Bk.range,
        wk = 0,
        dk = 1,
        sk = !1,
        Vk = 0,
        Jk = 0,
        Ak = .5;

      function ek() {
        var Bk = Xk().length,
          Rk = dk < wk,
          tk = Rk ? dk : wk,
          ak = Rk ? wk : dk;
        kk = (ak - tk) / Math.max(1, Bk - Vk + 2 * Jk), sk && (kk = Math.floor(kk)), tk += (ak - tk - kk * (Bk - Vk)) * Ak, Fk = kk * (1 - Vk), sk && (tk = Math.round(tk), Fk = Math.round(Fk));
        var ek = function(kk, Fk, Bk) {
          kk = +kk, Fk = +Fk, Bk = (tk = arguments.length) < 2 ? (Fk = kk, kk = 0, 1) : tk < 3 ? 1 : +Bk;
          for (var Rk = -1, tk = 0 | Math.max(0, Math.ceil((Fk - kk) / Bk)), ak = new Array(tk); ++Rk < tk;) ak[Rk] = kk + Rk * Bk;
          return ak
        }(Bk).map((function(Fk) {
          return tk + kk * Fk
        }));
        return bk(Rk ? ek.reverse() : ek)
      }
      return delete Bk.unknown, Bk.domain = function(kk) {
        return arguments.length ? (Xk(kk), ek()) : Xk()
      }, Bk.range = function(kk) {
        return arguments.length ? ([wk, dk] = kk, wk = +wk, dk = +dk, ek()) : [wk, dk]
      }, Bk.rangeRound = function(kk) {
        return [wk, dk] = kk, wk = +wk, dk = +dk, sk = !0, ek()
      }, Bk.bandwidth = function() {
        return Fk
      }, Bk.step = function() {
        return kk
      }, Bk.round = function(kk) {
        return arguments.length ? (sk = !!kk, ek()) : sk
      }, Bk.padding = function(kk) {
        return arguments.length ? (Vk = Math.min(1, Jk = +kk), ek()) : Vk
      }, Bk.paddingInner = function(kk) {
        return arguments.length ? (Vk = Math.min(1, kk), ek()) : Vk
      }, Bk.paddingOuter = function(kk) {
        return arguments.length ? (Jk = +kk, ek()) : Jk
      }, Bk.align = function(kk) {
        return arguments.length ? (Ak = Math.max(0, Math.min(1, kk)), ek()) : Ak
      }, Bk.copy = function() {
        return ak(Xk(), [wk, dk]).round(sk).paddingInner(Vk).paddingOuter(Jk).align(Ak)
      }, Rk.e.apply(ek(), arguments)
    }

    function Xk(kk) {
      var Fk = kk.copy;
      return kk.padding = kk.paddingOuter, delete kk.paddingInner, delete kk.paddingOuter, kk.copy = function() {
        return Xk(Fk())
      }, kk
    }

    function bk() {
      return Xk(ak.apply(null, arguments).paddingInner(1))
    }
  },
  5846: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(kk);
          break;
        default:
          this.range(Fk).domain(kk)
      }
      return this
    }

    function tk(kk, Fk) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof kk ? this.interpolator(kk) : this.range(kk);
          break;
        default:
          this.domain(kk), "function" === typeof Fk ? this.interpolator(Fk) : this.range(Fk)
      }
      return this
    }
    Bk.d(Fk, {
      d: () => tk,
      e: () => Rk
    })
  },
  5850: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      e: () => dk
    });
    class Rk extends Map {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: Fk
            }
          }), null != kk)
          for (const [Bk, Rk] of kk) this.set(Bk, Rk)
      }
      get(kk) {
        return super.get(tk(this, kk))
      }
      has(kk) {
        return super.has(tk(this, kk))
      }
      set(kk, Fk) {
        return super.set(ak(this, kk), Fk)
      }
      delete(kk) {
        return super.delete(Xk(this, kk))
      }
    }
    Set;

    function tk(kk, Fk) {
      let {
        _intern: Bk,
        _key: Rk
      } = kk;
      const tk = Rk(Fk);
      return Bk.has(tk) ? Bk.get(tk) : Fk
    }

    function ak(kk, Fk) {
      let {
        _intern: Bk,
        _key: Rk
      } = kk;
      const tk = Rk(Fk);
      return Bk.has(tk) ? Bk.get(tk) : (Bk.set(tk, Fk), Fk)
    }

    function Xk(kk, Fk) {
      let {
        _intern: Bk,
        _key: Rk
      } = kk;
      const tk = Rk(Fk);
      return Bk.has(tk) && (Fk = Bk.get(tk), Bk.delete(tk)), Fk
    }

    function bk(kk) {
      return null !== kk && "object" === typeof kk ? kk.valueOf() : kk
    }
    var wk = Bk(5846);
    const dk = Symbol("implicit");

    function sk() {
      var kk = new Rk,
        Fk = [],
        Bk = [],
        tk = dk;

      function ak(Rk) {
        let ak = kk.get(Rk);
        if (void 0 === ak) {
          if (tk !== dk) return tk;
          kk.set(Rk, ak = Fk.push(Rk) - 1)
        }
        return Bk[ak % Bk.length]
      }
      return ak.domain = function(Bk) {
        if (!arguments.length) return Fk.slice();
        Fk = [], kk = new Rk;
        for (const Rk of Bk) kk.has(Rk) || kk.set(Rk, Fk.push(Rk) - 1);
        return ak
      }, ak.range = function(kk) {
        return arguments.length ? (Bk = Array.from(kk), ak) : Bk.slice()
      }, ak.unknown = function(kk) {
        return arguments.length ? (tk = kk, ak) : tk
      }, ak.copy = function() {
        return sk(Fk, Bk).unknown(tk)
      }, wk.e.apply(ak, arguments), ak
    }
  },
  5912: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    Array.prototype.slice;

    function Rk(kk) {
      return "object" === typeof kk && "length" in kk ? kk : Array.from(kk)
    }
  },
  5786: (kk, Fk, Bk) => {
    function Rk(kk) {
      return function() {
        return kk
      }
    }
    Bk.d(Fk, {
      b: () => Rk
    })
  },
  5788: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => dk
    });
    const Rk = Math.PI,
      tk = 2 * Rk,
      ak = 1e-6,
      Xk = tk - ak;

    function bk(kk) {
      this._ += kk[0];
      for (let Fk = 1, Bk = kk.length; Fk < Bk; ++Fk) this._ += arguments[Fk] + kk[Fk]
    }
    class wk {
      constructor(kk) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == kk ? bk : function(kk) {
          let Fk = Math.floor(kk);
          if (!(Fk >= 0)) throw new Error(`invalid digits: ${kk}`);
          if (Fk > 15) return bk;
          const Bk = 10 ** Fk;
          return function(kk) {
            this._ += kk[0];
            for (let Fk = 1, Rk = kk.length; Fk < Rk; ++Fk) this._ += Math.round(arguments[Fk] * Bk) / Bk + kk[Fk]
          }
        }(kk)
      }
      moveTo(kk, Fk) {
        this._append`M${this._x0=this._x1=+kk},${this._y0=this._y1=+Fk}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(kk, Fk) {
        this._append`L${this._x1=+kk},${this._y1=+Fk}`
      }
      quadraticCurveTo(kk, Fk, Bk, Rk) {
        this._append`Q${+kk},${+Fk},${this._x1=+Bk},${this._y1=+Rk}`
      }
      bezierCurveTo(kk, Fk, Bk, Rk, tk, ak) {
        this._append`C${+kk},${+Fk},${+Bk},${+Rk},${this._x1=+tk},${this._y1=+ak}`
      }
      arcTo(kk, Fk, Bk, tk, Xk) {
        if (kk = +kk, Fk = +Fk, Bk = +Bk, tk = +tk, (Xk = +Xk) < 0) throw new Error(`negative radius: ${Xk}`);
        let bk = this._x1,
          wk = this._y1,
          dk = Bk - kk,
          sk = tk - Fk,
          Vk = bk - kk,
          Jk = wk - Fk,
          Ak = Vk * Vk + Jk * Jk;
        if (null === this._x1) this._append`M${this._x1=kk},${this._y1=Fk}`;
        else if (Ak > ak)
          if (Math.abs(Jk * dk - sk * Vk) > ak && Xk) {
            let ek = Bk - bk,
              yk = tk - wk,
              fk = dk * dk + sk * sk,
              mk = ek * ek + yk * yk,
              Wk = Math.sqrt(fk),
              vk = Math.sqrt(Ak),
              ik = Xk * Math.tan((Rk - Math.acos((fk + Ak - mk) / (2 * Wk * vk))) / 2),
              Yk = ik / vk,
              Lk = ik / Wk;
            Math.abs(Yk - 1) > ak && this._append`L${kk+Yk*Vk},${Fk+Yk*Jk}`, this._append`A${Xk},${Xk},0,0,${+(Jk*ek>Vk*yk)},${this._x1=kk+Lk*dk},${this._y1=Fk+Lk*sk}`
          } else this._append`L${this._x1=kk},${this._y1=Fk}`;
        else;
      }
      arc(kk, Fk, Bk, bk, wk, dk) {
        if (kk = +kk, Fk = +Fk, dk = !!dk, (Bk = +Bk) < 0) throw new Error(`negative radius: ${Bk}`);
        let sk = Bk * Math.cos(bk),
          Vk = Bk * Math.sin(bk),
          Jk = kk + sk,
          Ak = Fk + Vk,
          ek = 1 ^ dk,
          yk = dk ? bk - wk : wk - bk;
        null === this._x1 ? this._append`M${Jk},${Ak}` : (Math.abs(this._x1 - Jk) > ak || Math.abs(this._y1 - Ak) > ak) && this._append`L${Jk},${Ak}`, Bk && (yk < 0 && (yk = yk % tk + tk), yk > Xk ? this._append`A${Bk},${Bk},0,1,${ek},${kk-sk},${Fk-Vk}A${Bk},${Bk},0,1,${ek},${this._x1=Jk},${this._y1=Ak}` : yk > ak && this._append`A${Bk},${Bk},0,${+(yk>=Rk)},${ek},${this._x1=kk+Bk*Math.cos(wk)},${this._y1=Fk+Bk*Math.sin(wk)}`)
      }
      rect(kk, Fk, Bk, Rk) {
        this._append`M${this._x0=this._x1=+kk},${this._y0=this._y1=+Fk}h${Bk=+Bk}v${+Rk}h${-Bk}Z`
      }
      toString() {
        return this._
      }
    }

    function dk(kk) {
      let Fk = 3;
      return kk.digits = function(Bk) {
        if (!arguments.length) return Fk;
        if (null == Bk) Fk = null;
        else {
          const kk = Math.floor(Bk);
          if (!(kk >= 0)) throw new RangeError(`invalid digits: ${Bk}`);
          Fk = kk
        }
        return kk
      }, () => new wk(Fk)
    }
    wk.prototype
  },
  5635: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak
    });
    var Rk = !0,
      tk = "Invariant failed";

    function ak(kk, Fk) {
      if (!kk) {
        if (Rk) throw new Error(tk);
        var Bk = "function" === typeof Fk ? Fk() : Fk,
          ak = Bk ? "".concat(tk, ": ").concat(Bk) : tk;
        throw new Error(ak)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);